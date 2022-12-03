import pandas as pd
import numpy as np
from util import get_data, load_data
from pomegranate import BayesianNetwork
import json

data = load_data()

X = data.drop(['id', 'comment', 'body'], axis=1)
l = X.drop('check', axis=1).columns
# l = X.columns
X = X[l]
y = data['check'].apply(bool)
X1 = X[y]
X2 = X[~y]

w = y.apply(lambda s: 1 if s else 0.0001)
w_ = y.apply(lambda s: 0.0001 if s else 1)

d = {v:i for (i,v) in enumerate(l)}
# include_edges = [
#     ('color_hair', 'dress'),
#     ('color_hair', 'color_eyebrow'),
#     ('sex', 'nose'),
# ]
# exclude_edges = [
#     ('color_face', 'mouth'),
#     ('color_face', 'hair'),
#     ('color_face', 'eyes'),
#     ('color_face', 'eyeslid'),
#     ('color_face', 'nose'),
#     ('color_face', 'eyebrow'),
#     ('color_eyebrow', 'mouth'),
#     ('color_eyebrow', 'hair'),
#     ('color_eyebrow', 'eyes'),
#     ('color_eyebrow', 'eyeslid'),
#     ('color_eyebrow', 'nose'),
#     ('color_hair', 'mouth'),
#     ('color_hair', 'eyes'),
#     ('color_hair', 'eyeslid'),
#     ('color_hair', 'nose'),
#     ('eyeslid', 'mouth'),
#     ('eyeslid', 'eyes'),
#     ('eyeslid', 'nose'),
#     ('dress', 'nose'),
# ]

# exclude_edges = [(node, 'sex') for node in l]
#                     [(node, 'sex') for node in l] #+ \
#                 [('nose', node) for node in l] + \
#                 [('eyebrow', node) for node in l]
# ic = [(d[i[0]], d[i[1]]) for i in include_edges]
# ec = [(d[i[0]], d[i[1]]) for i in exclude_edges]

ll = [
(0.01, 0.1, 'pn001pc10e'),
(0.1, 0.1, 'pn01pc10e'),
(0.5, 0.1, 'pn05pc10e'), # star
(1.2, 0.05, 'pn12pc05e'),
# (1.5, 0.05, 'pn15pc05e'),
# (1.8, 0.05, 'pn18pc05e'),
# (2.5, 0.01, 'pn25pc01e'),
]

for penalty, pseudocount, name in ll:

# name = 'pn2pc05e'
# penalty = 0.5
# pseudocount = 0.08
    mm = BayesianNetwork.from_samples(
        X, w,
        max_parents = 2,
        state_names = l,
        name = name,

        algorithm = 'exact', # exact
        penalty = penalty,
        pseudocount = pseudocount,
        # include_edges=ic, 
        # exclude_edges=ec
    )

    mm.plot('models/' + name + '.pdf')

    json.dump(mm.to_dict(), open('models/' + name + '.json', 'w+'))