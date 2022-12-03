from util import get_sample, get_model, get_resources
from util import mp, colors, save
from util import get_svg, show_svg

from random import choice, random
# from tqdm.notebook import tqdm
from tqdm import tqdm

# model_name = 'pn001pc10e'
# model_name = 'pn01pc10e'
model_name = 'pn05pc10e'
# model_name = 'pn12pc05e'

# model_name = 'pn15pc05e'
# model_name = 'pn18pc05e'
# model_name = 'pn25pc01e'

mm = get_model(model_name)

# N = 300
# comment = 'model:' + model_name
# for ii in tqdm(range(N)):
#     params = get_sample(mm)
#     if params['sex'] == 0 and random() > 0.1:
#         continue
#     save(
#         params=params, 
#         resources=get_resources(params), 
#         svg=get_svg(params),
#         comment=comment
#     )

for color_hair_index in tqdm(colors['hair'], leave=False):
    params = get_sample(mm, 
            evidences=[dict(
                color_hair=color_hair_index
            )]
        )
    for color_eyes_index in tqdm(colors['eyes'], leave=False):
        params['color_eyes'] = color_eyes_index

        resources = get_resources(params)

        save(
            params={k:params[k] for k in ['color_hair', 'color_eyes', 'dress', 'sex']}, 
            resources=resources,
            # score=color_index,
            svg=get_svg(params),
            comment='part:color_eyes_sex'
        )

# for sex in tqdm([0, 1], leave=False):
# for i in tqdm(range(5)):
#     for color_hair_index in tqdm(colors['hair'], leave=False):
#         params = get_sample(mm, 
#             evidences=[dict(
#                 # sex=sex,
#                 color_hair=color_hair_index
#             )]
#         )
#         for color_eyebrow_index in tqdm(colors['eyebrow'], leave=False):
#             params['color_eyebrow'] = color_eyebrow_index

#             resources = get_resources({
#                 k:params[k] for k in 
#                     ['face', 'body', 'sex', 'eyes', 'hair', 'color_eyebrow', 'color_hair', 'eyebrow']
#             })
#             # resources = get_resources(params)

#             save(
#                 params={k:params[k] for k in ['color_hair', 'color_eyebrow', 'sex']}, 
#                 resources=resources,
#                 # score=color_index,
#                 svg=get_svg(params),
#                 comment='part:color_eyebrow_sex'
#             )