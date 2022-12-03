import mitmproxy
from mitmproxy import ctx
import json

class Face:
    def __init__(self):
        self.num = 0

    # def request(self, flow: mitmproxy.http.HTTPFlow):
        # ctx.log.error(flow.request.host)
        # ctx.log.error(flow.request.path)
        
        # # 忽略非百度搜索地址
        # if not flow.request.path.startswith("/cuteface/getAllSuit"):
            # return

        # ctx.log.error(flow.request.path)

        # # 确认请求参数中有搜索词
        # if "wd" not in flow.request.query.keys():
        #     ctx.log.warn("can not get search word from %s" % flow.request.pretty_url)
        #     return

        # # 输出原始的搜索词
        # ctx.log.info("catch search word: %s" % flow.request.query.get("wd"))
        # # 替换搜索词为“360搜索”
        # flow.request.query.set_all("wd", ["360搜索"])

    def response(self, flow: mitmproxy.http.HTTPFlow):

        if flow.request.path.startswith("/cuteface/getDraft"):
            text = flow.response.get_text()
            data = json.loads(text)
            try:
                ctx.log.error(data['data']['tempAvatar']['avatarParams'])
                ctx.log.error('\n')
            except:
                pass


        if not flow.request.path.startswith("/cuteface/getAllSuit"):
            return

        with open('publish/2208290905.json') as f:
            re = f.read()
            req = {
                "code": 10001,
                "message": "获取成功",
                "data": {
                    "suits": [{
                        "id": 49,
                        "suitId": "02102",
                        "suitName": "万圣节化妆舞会-男",
                        "sort": 13, 
                        "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-10-29/4ce7c124-4243-46f7-aa60-d2d16d6b261a.png",
                        "itemIdList": ["40020", "130441", "55060", "110020", "60040", "120740", "90020", "155300", "32265", "11040", "26080"],
                        "state": 1,
                        "gender": 0,
                        "avatarName": None,
                        # "avatarParams": json.dumps(re),
                        "avatarParams": re,
                        "createTime": 1603941439000,
                        "updateTime": 1603958770000,
                        "vipExclusive": False,
                        "price": 0,
                        "hasPurchase": True
                    }]
                },
                "success": True
            }

            flow.response.set_text(json.dumps(req))


addons = [Face()]