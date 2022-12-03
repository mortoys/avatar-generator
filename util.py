import json
from datetime import datetime
from urllib.parse import parse_qs, parse_qsl, quote
import webbrowser
from IPython.display import SVG

import pandas as pd
# import numpy as np
from sqlalchemy import create_engine, MetaData
import requests
from pomegranate import BayesianNetwork

# import time
# from tqdm import tqdm
# from random import choice

db = 'postgresql+psycopg2://postgres:lumotian@localhost:5432/face'
engine = create_engine(db)
meta = MetaData(bind=engine)
meta.reflect()

schema_face = meta.tables['face']
schema_data = meta.tables['data']

mp = json.load(open('map.json'))
data_colors = json.load(open('./color.json'))
colors = {}
for key in data_colors:
    mp['color_' + key] = list(range(len(data_colors[key])))
    colors[key] = {
        color_index: color for color_index, color in enumerate(data_colors[key])
    }

def load_data():
    return pd.read_csv('backup/data.csv')

def get_data():
    data = pd.read_sql_table('data', con=engine)
    face = pd.read_sql_table('face', con=engine)

    dd = face[['id', 'params', 'svg', 'comment']].merge(data[['id', 'check']], on='id')

    dd = pd.concat([
        dd['id'],
        pd.DataFrame(dd['params'].apply(lambda s: json.loads(s)).to_list()),
        dd['check'],
        dd['comment'],
        dd['svg'],
    ], axis=1)

    dd = dd.drop(['hair_class'], axis=1)

    # dd['hair_class'] = dd['hair'].apply(lambda s: np.nan if np.isnan(s) else hair_class.loc[int(s)]['typ'])

    return dd

def get_data_by_id(id):
    db = 'postgresql+psycopg2://postgres:lumotian@localhost:5432/face'
    engine = create_engine(db)
    meta = MetaData(bind=engine)
    meta.reflect()

    schema_face = meta.tables['face']
# schema_data = meta.tables['data']

    face = pd.read_sql_query(schema_face.select().where(schema_face.c['id'] == id), con=engine)
    params = json.loads(face['params'].iloc[0])
    # del params['hair_class']
    return params

def get_resource_by_id(id):
    db = 'postgresql+psycopg2://postgres:lumotian@localhost:5432/face'
    engine = create_engine(db)
    meta = MetaData(bind=engine)
    meta.reflect()

    schema_face = meta.tables['face']
# schema_data = meta.tables['data']

    face = pd.read_sql_query(schema_face.select().where(schema_face.c['id'] == id), con=engine)
    params = json.loads(face['resource'].iloc[0])
    # del params['hair_class']
    return params

def get_resources(params):
    r = []
    for key, value in params.items():
        if key == 'sex' or key == 'hair_class' or value == 0:
            continue
        if key[:6] == 'color_':
            continue

        r.append(dict(
            type = key,
            color = get_color(key, params),
            id = value,
            transform = get_transform()
        ))

    r.append(dict(
        type = 'body',
        color = [],
        id = 40020,
        transform = get_transform()
    ))
        
    return {
        'resources': r,
        'sex': params['sex']
    }

def show_svg_resource(resource):
    return SVG(url=get_svg_resource(resource))

def show_svg(params):
    return SVG(url=get_svg(params))

def get_transform():
    return {
        'rotate': 0, 
        'x': 0, 
        'y': 0, 
        'scale': 1
    }

def get_color(typ, params):
    if 'color_' + typ in params:
        if typ in ['hair', 'face', 'eyebrow', 'eyes']:
            return colors[typ][params['color_' + typ]]

    colors_default = dict(
        hair = ["7D3F40", "662F32", "5E2F30"],
        face = ["fff0eb"] if params['sex'] == 0 else ['ffe8df'],
        eyes = ["5d1803"],
        eyebrow = ["452F29"],
        beard = ["72473C"],
        nose = [.8],
        eyeslid = [.4]
    )
    if typ in colors_default:
        return colors_default[typ]
    else:
        return []

# hair < 25e3 # 女
def get_hair(sex):
    if sex == 0:
        return [id for id in mp['hair'] if id < 25e3]
    else:
        return [id for id in mp['hair'] if id > 25e3]

# face < 55e3 # 女
def get_face(sex):
    if sex == 0:
        return [id for id in mp['face'] if id < 55e3]
    else:
        return [id for id in mp['face'] if id > 55e3]

def check_hair_face(params):
    if params['hair'] not in get_hair(params['sex']):
        return False

    if params['face'] not in get_face(params['sex']):
        return False

    return True

def get_model(name):
    mm = BayesianNetwork.from_dict(json.load(open('models/' + name + '.json', 'r')))
    return mm

def get_model_dict(v, model):
    model_param = [s.name for s in model.states]
    return {model_param[k]: int(v) for k,v in enumerate(v)}

def get_model_array(d, model):
    model_param = [s.name for s in model.states]
    return [d[key] for key in model_param]

def get_model_sample(mm, evidences=[]):
    if evidences and len(evidences) > 0:
        return get_model_dict(mm.sample(1, algorithm='gibbs', evidences=evidences)[0], model=mm)
    else:
        return get_model_dict(mm.sample(1)[0], model=mm)

def get_sample(mm, evidences=[], check=check_hair_face):
    params = get_model_sample(mm, evidences)
    while not check(params):
        params = get_model_sample(mm, evidences)
    params['body'] = 40020
    return params

# def get_score(params):
#     array = get_model_array(params)
#     score = 1
#     try:
#         score = mm1.probability([array]) / mm0.probability([array])
#     except:
#         pass

#     return score

def export():
    face = pd.read_sql_table('face', con=engine)
    return face['svg'].to_list()

def openhtml(list):
    html = '''
<html><style>img { width: 25%; }</style>
<body></body>
<script>
l =
''' + str(list) + '''
document.body.innerHTML = l.map(_=>`<img src="${_}">`).join('')
</script>
</html>
    '''
    with open("show.html", "w") as file:
        file.write(html)
    
    webbrowser.open_new_tab("file:///Users/lumotian/Project/face/show.html")

def get_svg_resource(resource):
    req = requests.get('http://0.0.0.0:7500/?param=' + quote(json.dumps(resource)))
    svg = req.content.decode()
#     SVG(url=req.content.decode())
    return svg

def get_svg(params):
    req = requests.get('http://0.0.0.0:7500/?param=' + quote(json.dumps(get_resources(params))))
    svg = req.content.decode()
#     SVG(url=req.content.decode())
    return svg

import time
import base64
def save_svg_resource(resource):
    svg = get_svg_resource(resource)
    svg = base64.b64decode(svg[26:]).decode("utf-8", "ignore")
    name = time.strftime("%y%m%d%H%M",time.localtime(time.time())) 
    with open('publish/' + name + ".svg", "w") as fo:
        fo.write(svg)

def save(params, resources, svg, score=1, comment=''):
    schema_face.insert().values(
        sex = params['sex'],
        params = json.dumps(params),
        resources = json.dumps(resources),
        svg = svg,
        comment = comment,
        score = score,
        _utime = datetime.now()
    ).execute()

# mm0, mm1 = get_model()
# model_param =  [s.name for s in mm1.states]
# # ['sex', 'mouth', 'face', 'eyebrow', 'eyes', 'nose', 'hair']
# add_param = ['dress', 'eyeslid']
# param_ls = model_param + add_param

# def task():
#     params = get_sample(mm1)
#     resources = get_resources(params)
#     svg = get_svg(resources)
#     score = get_score(params)

#     save(params, resources, svg, score)

#     return params, resources, svg

# def get_hair_class():
#     import os
#     y = []
#     for typ in [0,1,2,3]:
#         names = os.listdir('img/0/' + str(typ))
#         for name in names:
#             if name[5] == '.':
#                 y.append({'typ':typ, 'value':name[:5],'sex':0})
#     for typ in [4,5,6,7]:
#         names = os.listdir('img/1/' + str(typ))
#         for name in names:
#             if name[5] == '.':
#                 y.append({'typ':typ, 'value':name[:5],'sex':1})
#     mp_hair = pd.DataFrame(y)
#     mp_hair['value'] = mp_hair['value'].apply(int)
#     mp_hair.set_index('value').to_csv('hair_class.csv')