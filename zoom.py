from util import mp, get_model, show_svg, save, get_model_array
from util import get_sample, get_model, get_resources, get_svg, get_data_by_id
from random import choice, choices
from tqdm.notebook import tqdm
import pandas as pd
import json
from random import random, choice

mm = get_model('p5c1g')
names = [s.name for s in mm.states]

def uniform_choice(name):
    return choices(mp[name])[0]

def get_gens(params, varRate, N, my_choice=uniform_choice):
    l = [params]

    for n in range(N):
        p1 = params.copy()
        for name in names:
            if(random() < varRate[name]):
                p1[name] = my_choice(name)
        l.append(p1)

    ll = pd.DataFrame(l).drop_duplicates()
    if 'body' in ll.columns:
        ll = ll.drop('body', axis=1)
    return ll

def get_vars(params, varRate, N, remain, my_choice=uniform_choice):
    ll = get_gens(params, varRate, N, my_choice)

    def get_prob(p):
        try:
            return mm.probability([p.to_list()])
        except:
            return 0

    ll['prob'] = ll[names].apply(get_prob, axis=1)
    c = ll[names].apply(get_prob, axis=1).rank(ascending=False) <= remain
    remains = ll[c].drop('prob', axis=1)

    return remains

def get_diff(p0, p1):
    diff = []
    for key in p0:
        if key == 'body':
            continue
        if p0[key] != p1[key]:
            diff.append({
                key: p1[key]
                # (key, p0[key], p1[key])
            })
    return diff


p0 = get_data_by_id(23966)



# def task(plst):
#     varRate = {name: 0.3 for name in names}
#     varRate['sex'] = 0

#     def my_choice(name):
#         pass

#     get_vars(p0, varRate, 4000, 100, my_choice=my_choice)

