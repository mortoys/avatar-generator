(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6e36557c"], {
        "162e": function (t, e, s) {
            "use strict";
            s.r(e);
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("Render", {
                        staticClass: "box",
                        attrs: {
                            resource: t.renderData
                        }
                    })
                },
                r = [],
                a = s("9ab4"),
                o = s("c949");

            function n() {
                return {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0
                }
            }
            // function c() {
            //     return [{
            //         id: "40020",
            //         color: [],
            //         type: "body"
            //     }, {
            //         id: "30020",
            //         color: [],
            //         type: "dress"
            //     }, {
            //         id: "55020",
            //         color: ["ffe8df"],
            //         type: "face"
            //     }, {
            //         id: "25020",
            //         color: ["7D3F40", "662F32", "5E2F30"],
            //         type: "hair"
            //     }, {
            //         id: "90020",
            //         color: [],
            //         type: "mouth",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "60020",
            //         color: [.8],
            //         type: "nose",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "110020",
            //         color: [.4],
            //         type: "eyeslid",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "120040",
            //         color: ["5d1803"],
            //         type: "eyes",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "130040",
            //         color: ["452F29"],
            //         type: "eyebrow",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }]
            // }

            // function h() {
            //     return [{
            //         id: "40020",
            //         color: [],
            //         type: "body"
            //     }, {
            //         id: "30020",
            //         color: [],
            //         type: "dress"
            //     }, {
            //         id: "50020",
            //         color: ["fff0eb"],
            //         type: "face"
            //     }, {
            //         id: "20020",
            //         color: ["7D3F40", "662F32", "5E2F30"],
            //         type: "hair"
            //     }, {
            //         id: "90020",
            //         color: [],
            //         type: "mouth",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "60020",
            //         color: [.8],
            //         type: "nose",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "110020",
            //         color: [.4],
            //         type: "eyeslid",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "120020",
            //         color: ["5d1803"],
            //         type: "eyes",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }, {
            //         id: "130020",
            //         color: ["452F29"],
            //         type: "eyebrow",
            //         transform: {
            //             x: 0,
            //             y: 0,
            //             scale: 1,
            //             rotate: 0
            //         }
            //     }]
            // }

            function u(t = []) {
                return (
                    // -1 === t.findIndex(t => "dress" === t.type) 
                    // && (t = [{
                    //     id: "30020",
                    //     color: [],
                    //     type: "dress"
                    // }, ...t]), 
                    
                    // -1 === t.findIndex(t => "body" === t.type) 
                    // && (t = [{
                    //     id: "40020",
                    //     color: [],
                    //     type: "body"
                    // }, ...t]), 
                    t)
            }

            var C = s("c4a0"),
                w = s.n(C);
            var N = s("2877"),
                E = s("60a3"),
                X = s("5913");
            let ct = class extends E["g"] {
                constructor() {
                    super(...arguments), this.loading = !1, this.superVIP = !1, this.visibleTips = !1, this.currentType = "hair", this.presetIndex = -1, this.currentStyle = "", this.isChanged = !1, this.isShowBags = !1, this.deductionCount = 0, this.showVipTips = !1, this.isShowSuite = !1, this.isShowDraft = !1, this.showDraftBtn = !1, this.snapshotsCursor = -1, this.showReditButton = !1, this.showAvatarCardTip = !1, this.suites = [], this.snapshots = [], this.resources = [], this.renderData = [], this.stylesData = [], this.currentColor = [], this.propsPricesMap = null, this.currentTransform = n(), this.presetAvatars = [], this.isInWhiteList = !1, this.isVerfySuccess = !1, this.isShowMarketIcon = !1
                }
                get isRegisterChannel() {
                    return "1" === this.$route.query.register
                }
                get sex() {
                    return parseInt(this.$route.query.sex, 10)
                }
                init(t, e) {
                    this.resources = u(e)
                    // t == this.sex 
                    // ? (this.resources = u(e)) 
                    // : 1 === this.sex 
                    //     ? (this.resources = c()) 
                    //     : 0 === this.sex && 
                    //         (this.resources = h());
                    // this.facialChange(this.currentType)
                }
                watchResources(t) {
                    // const e = setTimeout(() => this.loading = !0, 400);
                    Promise.all(t.map(t => this.loadResources(t))).then(t => Promise.all(t.reduce((t, e) => [...t, ...e], []).map(t => t.tags().then(e => ({
                        ...t,
                        tags: e.default
                    }))))).then(t => {
                        this.loading = !1;clearTimeout(e);
                        this.renderData = t
                    }).catch(() => {
                        // this.rollback(), this.loading = !1, clearTimeout(e), w.a.toast({
                        //     type: "error",
                        //     text: "资源加载失败\n请检查您的网络是否开启(10002)"
                        // })
                    })
                }
                loadResources(t) {
                    return s("e76f")("./" + t.type).then(({
                        default: t
                    }) => t()).then(e => {
                        let s = e.filter(e => Number(e.id) === Number(t.id || 0))[0];
                        return s ? [{
                            type: t.type,
                            color: t.color,
                            transform: t.transform,
                            ...s
                        }] : []
                    })
                }
                mounted() {
                    this.superVIP = true

                    const loadParams = () => {
                        const aaa = location.hash.split('param=')[1]
                        const param = JSON.parse(decodeURIComponent(aaa))
                        console.log(param)
                        this.init(+param['sex'], param['resources']);
                    }

                    loadParams()

                    // o["V"](this.isRegisterChannel, this.$route.query.avatarName).then(t => {
                    //     debugger
                    //     this.init(t.sex, t.resources);
                    // });
                    window.addEventListener('hashchange', event => {
                        loadParams()
                    })
                }
            };
            Object(a["a"])([Object(E["h"])("resources")], ct.prototype, "watchResources", null), ct = Object(a["a"])([Object(E["a"])({
                components: {
                    // Bag: V,
                    // Draft: Y,
                    // Touch: G["a"],
                    Render: X["a"],
                    // ColorPicker: K["a"],
                    // StylePicker: Q["a"],
                    // SuitePicker: ot,
                    // FacialPicker: nt["a"]
                }
            })], ct);
            var lt = Object(N["a"])(ct, i, r, !1, null, "5c345996", null);
            e["default"] = lt.exports
        },
    }
]);
//# sourceMappingURL=chunk-6e36557c.fbf6ef8f.js.map