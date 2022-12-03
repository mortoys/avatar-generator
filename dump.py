from util import save_svg_resource
import json

with open('publish/aa.json') as f:
    a = f.read()
    print(a)
    save_svg_resource(json.loads(a))