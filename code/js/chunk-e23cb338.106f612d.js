(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e23cb338"], {
        "0085": function (t, e, s) {
            t.exports = s.p + "img/loading.131b706c.gif"
        },
        "033b": function (t, e, s) {},
        "7d0e": function (t, e, s) {
            "use strict";
            s.r(e);
            var r = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "wrap ignore"
                    }, [r("div", {
                        staticClass: "layout"
                    }, [r("Touch", {
                        attrs: {
                            currentType: t.currentType
                        },
                        on: {
                            drag: t.onTouchDrag,
                            pinch: t.onTouchPinch,
                            rotate: t.onTouchRotate
                        }
                    }, [r("div", {
                        staticClass: "preview"
                    }, [r("div", {
                        staticClass: "operation"
                    }, [r("Icon", {
                        staticClass: "cancel",
                        attrs: {
                            name: "close"
                        },
                        on: {
                            click: t.back
                        }
                    }), r("div", {
                        staticClass: "title"
                    }, [t._v("帮Ta捏脸")]), r("div", {
                        staticClass: "confrim",
                        class: {
                            disabled: 0 === t.snapshotsCursor
                        },
                        on: {
                            click: t.done
                        }
                    }, [t._v("完成")])], 1), r("Render", {
                        staticClass: "box",
                        attrs: {
                            resource: t.renderData
                        }
                    }), t.stylesData.length && !t.showReditButton ? r("div", {
                        staticClass: "snapshot"
                    }, [r("div", {
                        staticClass: "prev"
                    }, [0 === t.snapshotsCursor ? r("Icon", {
                        staticClass: "icon ignore",
                        attrs: {
                            name: "arrow"
                        }
                    }) : t._e(), 0 !== t.snapshotsCursor ? r("Icon", {
                        staticClass: "icon ignore active",
                        attrs: {
                            name: "arrow"
                        },
                        on: {
                            click: t.prevSnapshot
                        }
                    }) : t._e()], 1), r("div", {
                        staticClass: "next"
                    }, [t.snapshotsCursor === t.snapshots.length - 1 ? r("Icon", {
                        staticClass: "icon ignore",
                        attrs: {
                            name: "arrow",
                            flip: "horizontal"
                        }
                    }) : t._e(), t.snapshotsCursor < t.snapshots.length - 1 ? r("Icon", {
                        staticClass: "icon ignore active",
                        attrs: {
                            name: "arrow",
                            flip: "horizontal"
                        },
                        on: {
                            click: t.nextSnapshot
                        }
                    }) : t._e()], 1)]) : t._e(), t.showReditButton ? r("div", {
                        staticClass: "redit__btn",
                        on: {
                            click: t.reditHander
                        }
                    }, [t._v(" 一键还原 ")]) : t._e()], 1)]), r("div", {
                        staticClass: "pickers"
                    }, [r("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [r("ColorPicker", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowColorPicker,
                            expression: "isShowColorPicker"
                        }],
                        attrs: {
                            currentColor: t.currentColor,
                            currentType: t.currentType
                        },
                        on: {
                            change: t.colorChange
                        }
                    })], 1), r("StylePicker", {
                        attrs: {
                            currentStyle: t.currentStyle,
                            currentType: t.currentType,
                            resource: t.stylesData
                        },
                        on: {
                            change: t.styleChange
                        }
                    }), r("FacialPicker", {
                        attrs: {
                            currentType: t.currentType
                        },
                        on: {
                            change: t.facialChange
                        }
                    })], 1)], 1), t.loading ? r("div", {
                        staticClass: "loading"
                    }, [r("img", {
                        attrs: {
                            src: s("0085")
                        }
                    })]) : t._e()])
                },
                o = [],
                i = s("9ab4"),
                a = s("c949");

            function n() {
                return {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0
                }
            }

            function c() {
                return [{
                    id: "40020",
                    color: [],
                    type: "body"
                }, {
                    id: "30020",
                    color: [],
                    type: "dress"
                }, {
                    id: "55020",
                    color: ["ffe8df"],
                    type: "face"
                }, {
                    id: "25020",
                    color: ["7D3F40", "662F32", "5E2F30"],
                    type: "hair"
                }, {
                    id: "90020",
                    color: [],
                    type: "mouth",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "60020",
                    color: [.8],
                    type: "nose",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "110020",
                    color: [.4],
                    type: "eyeslid",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "120040",
                    color: ["5d1803"],
                    type: "eyes",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "130040",
                    color: ["452F29"],
                    type: "eyebrow",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }]
            }

            function h() {
                return [{
                    id: "40020",
                    color: [],
                    type: "body"
                }, {
                    id: "30020",
                    color: [],
                    type: "dress"
                }, {
                    id: "50020",
                    color: ["fff0eb"],
                    type: "face"
                }, {
                    id: "20020",
                    color: ["7D3F40", "662F32", "5E2F30"],
                    type: "hair"
                }, {
                    id: "90020",
                    color: [],
                    type: "mouth",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "60020",
                    color: [.8],
                    type: "nose",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "110020",
                    color: [.4],
                    type: "eyeslid",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "120020",
                    color: ["5d1803"],
                    type: "eyes",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }, {
                    id: "130020",
                    color: ["452F29"],
                    type: "eyebrow",
                    transform: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    }
                }]
            }

            function u(t, e) {
                return "nose" === t ? [.8] : "spot" === t ? [.25] : "eyeslid" === t ? [.5] : "beard" === t && 0 === e.length ? ["836B64"] : "eyebrow" === t && 0 === e.length ? ["452F29"] : "hair" === t && 0 === e.length ? ["7D3F40", "662F32", "5E2F30"] : void 0
            }

            function l(t, e) {
                const s = {
                    hat: () => e >= 1e4 && e < 2e4,
                    hair: () => e >= 2e4 && e < 3e4,
                    face: () => e >= 5e4 && e < 6e4,
                    nose: () => e >= 6e4 && e < 7e4,
                    mole: () => e >= 8e4 && e < 9e4,
                    spot: () => e >= 7e4 && e < 8e4,
                    dress: () => e >= 3e4 && e < 4e4,
                    cap: () => e >= 18e4 && e < 19e4,
                    mask: () => e >= 16e4 && e < 17e4,
                    mouth: () => e >= 9e4 && e < 1e5,
                    eyes: () => e >= 12e4 && e < 13e4,
                    beard: () => e >= 1e5 && e < 11e4,
                    blush: () => e >= 14e4 && e < 15e4,
                    glasses: () => e >= 17e4 && e < 18e4,
                    jewelry: () => e >= 15e4 && e < 16e4,
                    eyeslid: () => e >= 11e4 && e < 12e4,
                    eyebrow: () => e >= 13e4 && e < 14e4
                };
                return s[t]()
            }

            function p(t) {
                return t ? JSON.parse(JSON.stringify(t)) : t
            }

            function d(t, e) {
                return JSON.stringify(t) === JSON.stringify(e)
            }

            function y(t = []) {
                return -1 === t.findIndex(t => "dress" === t.type) && (t = [{
                    id: "30020",
                    color: [],
                    type: "dress"
                }, ...t]), -1 === t.findIndex(t => "body" === t.type) && (t = [{
                    id: "40020",
                    color: [],
                    type: "body"
                }, ...t]), t
            }

            function g(t) {
                return t.filter(t => "body" === t.type)[0]
            }

            function f(t, e) {
                const s = t.filter(t => t.id.toString() === e)[0];
                return !!s && s.vipExclusive
            }

            function m(t) {
                const e = document.querySelector(t);
                return (new XMLSerializer).serializeToString(e)
            }

            function C(t, e) {
                return t.reduce((t, s) => {
                    const r = e && e[s.type];
                    if (r) {
                        const e = r[r.map(t => t.id).indexOf(Number(s.id))];
                        return e && (-1 !== [0, 2, 3].indexOf(e.chargeType) && 0 === e.purchasedFlag) ? [...t, e] : t
                    }
                    return t
                }, [])
            }
            var v = s("c4a0"),
                S = s.n(v),
                T = s("a28b"),
                x = s("5913"),
                b = s("2097"),
                P = s("450ca"),
                I = s("23e8"),
                w = s("60a3");
            let k = class extends w["g"] {
                constructor() {
                    super(...arguments), this.loading = !1, this.superVIP = !1, this.currentStyle = "", this.currentType = "hair", this.snapshotsCursor = -1, this.showReditButton = !1, this.snapshots = [], this.resources = [], this.renderData = [], this.resourcesIdsCache = [], this.stylesData = [], this.currentColor = [], this.propsPricesMap = null, this.currentTransform = n()
                }
                get sex() {
                    return parseInt(this.$route.query.sex, 10)
                }
                get targetUserIdEcpt() {
                    return this.$route.query.targetUserIdEcpt || ""
                }
                get isShowColorPicker() {
                    return -1 !== ["hair", "face", "beard", "eyes", "eyebrow"].indexOf(this.currentType)
                }
                colorChange(t) {
                    this.currentColor = t, this.updateResource(), this.updateSnapshot()
                }
                styleChange(t) {
                    if (f(this.stylesData, t) && !this.superVIP) return S.a.toast({
                        type: "error",
                        text: "ta 还不是超级星人无法使用专属道具哦～"
                    });
                    this.currentStyle === t ? this.currentTransform = n() : this.showReditButton = !1, this.currentStyle = t, this.updateResource(), this.updateSnapshot()
                }
                mergePriceData(t, e) {
                    const s = t.map(t => t.id);
                    return t.length ? e.map(e => {
                        const r = s.indexOf(e.id);
                        return -1 !== r && (e.price = t[r].price, e.chargeType = t[r].chargeType, e.vipExclusive = t[r].vipExclusive, e.purchasedFlag = t[r].purchasedFlag, e.originalPrice = t[r].originalPrice), e
                    }) : e
                }
                facialChange(t, e = !0) {
                    const r = setTimeout(() => this.loading = !0, 1e3);
                    s("e76f")("./" + t).then(({
                        default: t
                    }) => t()).then(s => {
                        this.getPropsPrices(t).then(o => {
                            const i = this.resources.filter(e => e.type === t)[0];
                            this.currentType = t, this.stylesData = this.mergePriceData(o, s), i ? (this.currentStyle = i.id, this.currentColor = i.color, this.currentTransform = i.transform ? p(i.transform) : n()) : (this.currentStyle = "", this.currentColor = [], this.currentTransform = n()), e && this.updateSnapshot(), this.loading = !1, clearTimeout(r)
                        }).catch(() => {
                            this.loading = !1, clearTimeout(r), S.a.toast({
                                type: "error",
                                text: "资源加载失败\n请检查您的网络是否开启(10003)"
                            })
                        })
                    }).catch(() => {
                        this.loading = !1, clearTimeout(r), S.a.toast({
                            type: "error",
                            text: "资源加载失败\n请检查您的网络是否开启(10001)"
                        })
                    })
                }
                updateResource() {
                    let t = this.resources.findIndex(t => t.type === this.currentType); - 1 !== t && this.resources.splice(t, 1), this.currentColor = u(this.currentType, this.currentColor) || this.currentColor, this.currentStyle && l(this.currentType, Number(this.currentStyle)) && (this.resources = [...this.resources, {
                        id: this.currentStyle,
                        type: this.currentType,
                        color: this.currentColor,
                        transform: p(this.currentTransform)
                    }])
                }
                prevSnapshot() {
                    const t = this.snapshots[--this.snapshotsCursor];
                    this.currentStyle = t.id, this.currentType = t.type, this.currentColor = t.color, this.updateResource(), this.facialChange(t.type, !1)
                }
                nextSnapshot() {
                    const t = this.snapshots[++this.snapshotsCursor];
                    this.currentStyle = t.id, this.currentType = t.type, this.currentColor = t.color, this.updateResource(), this.facialChange(t.type, !1)
                }
                updateSnapshot() {
                    const t = {
                        id: this.currentStyle,
                        type: this.currentType,
                        color: this.currentColor
                    };
                    d(this.snapshots[this.snapshotsCursor], t) || (this.snapshotsCursor === this.snapshots.length - 1 ? (this.snapshotsCursor += 1, this.snapshots.push(t)) : (this.snapshotsCursor += 1, this.snapshots.splice(this.snapshotsCursor, 0, t)))
                }
                rollback() {
                    this.prevSnapshot(), this.snapshots.pop()
                }
                onTouchDrag(t, e) {
                    this.currentStyle && ("left" !== e && "right" !== e || (this.currentTransform.x += t.delta.deltaX), "top" !== e && "bottom" !== e || (this.currentTransform.y += t.delta.deltaY), this.updateResource())
                }
                onTouchPinch(t) {
                    this.currentStyle && (this.currentTransform.scale *= t.delta.scale, this.updateResource())
                }
                onTouchRotate(t) {
                    this.currentStyle && (this.currentTransform.rotate += t.delta.rotate, this.updateResource())
                }
                back() {
                    S.a.navigateBack()
                }
                done() {
                    if (0 === this.renderData.length) return;
                    if (0 === this.snapshotsCursor) return;
                    if (!g(this.resources)) return S.a.toast({
                        type: "error",
                        text: "数据异常，请返回再次进入重新捏脸"
                    });
                    const t = m(".preview .box").replace("</svg>", ""),
                        e = C(this.resources.filter(t => -1 === this.resourcesIdsCache.indexOf(Number(t.id))), this.propsPricesMap);
                    sessionStorage.setItem("avatar.resources", JSON.stringify(this.resources)), sessionStorage.setItem("avatar.svg", t.substring(t.indexOf(">") + 1)), S.a.trackEvent("clk", "MAvatarEditTA_Accomplish"), this.isFreeProps(e) ? this.toSavePage() : (sessionStorage.setItem("avatar.usePropsPrices", JSON.stringify(e)), this.toPayPage())
                }
                isFreeProps(t) {
                    return 0 === t.length
                }
                toSavePage() {
                    a["T"]().then(t => {
                        -1 !== t.indexOf("600001") ? S.a.toast({
                            type: "error",
                            text: "您处于限制捏脸状态中，暂时无法修改捏脸头像哦！"
                        }) : this.$router.push({
                            path: "/ta/save",
                            query: {
                                ...this.$route.query,
                                type: "sender"
                            }
                        })
                    })
                }
                toPayPage() {
                    a["T"]().then(t => {
                        -1 !== t.indexOf("600001") ? S.a.toast({
                            type: "error",
                            text: "您处于限制捏脸状态中，暂时无法修改捏脸头像哦！"
                        }) : this.$router.push({
                            path: "/ta/pay",
                            query: {
                                ...this.$route.query,
                                type: "sender"
                            }
                        })
                    })
                }
                init(t, e) {
                    a["C"]("2", this.targetUserIdEcpt).then(s => {
                        let r = !1,
                            o = [];
                        r = s.superVIP, o = s.payItems, sessionStorage.setItem("avatar.superVIP", r.toString()), t === this.sex ? (this.showReditButton = !0, this.resources = y(e)) : 1 === this.sex ? (this.showReditButton = !1, this.resources = c()) : 0 === this.sex && (this.showReditButton = !1, this.resources = h()), sessionStorage.getItem("avatar.resourcesIdsCache") ? this.resourcesIdsCache = JSON.parse(sessionStorage.getItem("avatar.resourcesIdsCache") || "[]") : (this.resourcesIdsCache = this.resources.filter(t => -1 !== o.indexOf(t.id)).map(t => Number(t.id)), sessionStorage.setItem("avatar.resourcesIdsCache", JSON.stringify(this.resourcesIdsCache))), this.facialChange(this.currentType)
                    })
                }
                restore() {
                    this.snapshots = [], this.resources = [], this.renderData = [], this.stylesData = [], this.currentColor = [], this.currentStyle = "", this.currentType = "hair", this.snapshotsCursor = -1, this.showReditButton = !1, this.currentTransform = n()
                }
                reditHander() {
                    this.restore(), this.init()
                }
                watchResources(t) {
                    const e = setTimeout(() => this.loading = !0, 400);
                    Promise.all(t.map(t => this.loadResources(t))).then(t => Promise.all(t.reduce((t, e) => [...t, ...e], []).map(t => t.tags().then(e => ({
                        ...t,
                        tags: e.default
                    }))))).then(t => {
                        this.loading = !1, clearTimeout(e), this.renderData = t
                    }).catch(() => {
                        this.rollback(), this.loading = !1, clearTimeout(e), S.a.toast({
                            type: "error",
                            text: "资源加载失败\n请检查您的网络是否开启(10002)"
                        })
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
                getPropsPrices(t) {
                    return new Promise((e, s) => {
                        if (this.propsPricesMap) return e(this.propsPricesMap[t] ? this.propsPricesMap[t] : []);
                        a["k"]("2", []).then(s => {
                            this.propsPricesMap = s, e(this.propsPricesMap[t] ? this.propsPricesMap[t] : [])
                        }).catch(t => s(t))
                    })
                }
                getTempResources() {
                    return JSON.parse(sessionStorage.getItem("avatar.resources") || "[]")
                }
                mounted() {
                    const t = this.getTempResources();
                    t.length ? this.init(this.sex, t) : a["s"](this.targetUserIdEcpt).then(t => {
                        this.superVIP = t.superVIP, t.sex && t.bgColor && t.resources.length ? (this.init(Number(t.sex), t.resources), sessionStorage.setItem("avatar.bgColor", t.bgColor)) : (this.init(), sessionStorage.setItem("avatar.bgColor", "1:500"))
                    }, () => {
                        this.init(), sessionStorage.setItem("avatar.bgColor", "1:500")
                    }), S.a.trackEvent("pv", "MAvatarEdit_TAMain", {
                        par: {
                            sex: this.sex
                        }
                    })
                }
            };
            Object(i["a"])([Object(w["h"])("resources")], k.prototype, "watchResources", null), k = Object(i["a"])([Object(w["a"])({
                components: {
                    Touch: T["a"],
                    Render: x["a"],
                    ColorPicker: b["a"],
                    StylePicker: P["a"],
                    FacialPicker: I["a"]
                }
            })], k);
            var R = k,
                O = R,
                F = (s("87aa"), s("2877")),
                D = Object(F["a"])(O, r, o, !1, null, "3cdc9908", null);
            e["default"] = D.exports
        },
        "87aa": function (t, e, s) {
            "use strict";
            s("033b")
        }
    }
]);
//# sourceMappingURL=chunk-e23cb338.106f612d.js.map