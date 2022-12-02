(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6e36557c"], {
        "0190": function (t, e, s) {
            t.exports = s.p + "img/avatar_card.a37a52d6.png"
        },
        "0d47": function (t, e, s) {
            t.exports = s.p + "img/point.c0b78138.png"
        },
        "162e": function (t, e, s) {
            "use strict";
            s.r(e);
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "wrap ignore"
                    }, [i("div", {
                        staticClass: "layout"
                    }, [i("Touch", {
                        attrs: {
                            currentType: t.currentType
                        },
                        on: {
                            drag: t.onTouchDrag,
                            pinch: t.onTouchPinch,
                            rotate: t.onTouchRotate
                        }
                    }, [i("div", {
                        staticClass: "preview"
                    }, [i("div", {
                        staticClass: "operation"
                    }, [i("Icon", {
                        staticClass: "cancel",
                        attrs: {
                            name: "close"
                        },
                        on: {
                            click: t.back
                        }
                    }), i("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading"
                        }],
                        staticClass: "confrim",
                        on: {
                            click: t.done
                        }
                    }, [t._v("完成")])], 1), i("Render", {
                        staticClass: "box",
                        attrs: {
                            resource: t.renderData
                        }
                    }), i("transition", {
                        attrs: {
                            name: "fadeInLeft"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showDraftBtn,
                            expression: "showDraftBtn"
                        }],
                        staticClass: "draft",
                        on: {
                            click: t.draft
                        }
                    }, [i("p", {
                        staticClass: "text"
                    }, [t._v("上次"), i("br"), t._v("捏脸")]), i("img", {
                        staticClass: "point",
                        attrs: {
                            src: s("5824")
                        }
                    })])]), i("transition", {
                        attrs: {
                            name: "fadeInLeft"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.presetAvatars.length,
                            expression: "presetAvatars.length"
                        }],
                        staticClass: "preset",
                        on: {
                            click: t.preset
                        }
                    }, [i("p", {
                        staticClass: "text"
                    }, [t._v("一键"), i("br"), t._v("捏脸")]), i("img", {
                        staticClass: "point",
                        attrs: {
                            src: s("0d47")
                        }
                    })])]), t.stylesData.length && !t.showReditButton ? i("div", {
                        staticClass: "snapshot"
                    }, [i("div", {
                        staticClass: "prev"
                    }, [0 === t.snapshotsCursor ? i("Icon", {
                        staticClass: "icon ignore",
                        attrs: {
                            name: "arrow"
                        }
                    }) : t._e(), 0 !== t.snapshotsCursor ? i("Icon", {
                        staticClass: "icon ignore active",
                        attrs: {
                            name: "arrow"
                        },
                        on: {
                            click: t.prevSnapshot
                        }
                    }) : t._e()], 1), i("div", {
                        staticClass: "next"
                    }, [t.snapshotsCursor === t.snapshots.length - 1 ? i("Icon", {
                        staticClass: "icon ignore",
                        attrs: {
                            name: "arrow",
                            flip: "horizontal"
                        }
                    }) : t._e(), t.snapshotsCursor < t.snapshots.length - 1 ? i("Icon", {
                        staticClass: "icon ignore active",
                        attrs: {
                            name: "arrow",
                            flip: "horizontal"
                        },
                        on: {
                            click: t.nextSnapshot
                        }
                    }) : t._e()], 1)]) : t._e(), t.showReditButton ? i("div", {
                        staticClass: "redit__btn",
                        on: {
                            click: t.reditHander
                        }
                    }, [t._v("一键还原")]) : t._e()], 1)]), i("transition", {
                        attrs: {
                            name: "fadeIn"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading"
                        }, {
                            name: "show",
                            rawName: "v-show",
                            value: t.showVipTips,
                            expression: "showVipTips"
                        }],
                        staticClass: "vip__tips",
                        on: {
                            click: t.toVipPage
                        }
                    }, [t._v(" 你已佩戴会员专属道具    开通会员立即拥有 "), i("img", {
                        staticClass: "arrow",
                        attrs: {
                            src: s("3861")
                        }
                    })])]), i("div", {
                        staticClass: "pickers"
                    }, [i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [i("ColorPicker", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowColorPicker && !t.isShowSuite,
                            expression: "isShowColorPicker && !isShowSuite"
                        }],
                        attrs: {
                            currentColor: t.currentColor,
                            currentType: t.currentType
                        },
                        on: {
                            change: t.colorChange
                        }
                    })], 1), i("StylePicker", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isShowSuite,
                            expression: "!isShowSuite"
                        }],
                        attrs: {
                            currentStyle: t.currentStyle,
                            currentType: t.currentType,
                            resource: t.stylesData
                        },
                        on: {
                            change: t.styleChange
                        }
                    }), i("SuitePicker", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowSuite,
                            expression: "isShowSuite"
                        }],
                        attrs: {
                            suites: t.suites,
                            resources: t.resources
                        },
                        on: {
                            change: t.suiteChange
                        }
                    }), i("FacialPicker", {
                        attrs: {
                            currentType: t.currentType,
                            isShowBags: t.isShowBags,
                            isShowSuite: t.isShowSuite,
                            isShowMarketIcon: t.isShowMarketIcon
                        },
                        on: {
                            change: t.facialChange,
                            "update:isShowBags": function (e) {
                                t.isShowBags = e
                            },
                            "update:is-show-bags": function (e) {
                                t.isShowBags = e
                            },
                            "update:isShowSuite": function (e) {
                                t.isShowSuite = e
                            },
                            "update:is-show-suite": function (e) {
                                t.isShowSuite = e
                            }
                        }
                    })], 1)], 1), t.loading ? i("div", {
                        staticClass: "loading"
                    }, [i("img", {
                        attrs: {
                            src: s("501e")
                        }
                    })]) : t._e(), i("Bag", {
                        attrs: {
                            visible: t.isShowBags
                        },
                        on: {
                            "update:visible": function (e) {
                                t.isShowBags = e
                            }
                        }
                    }), i("Draft", {
                        attrs: {
                            visible: t.isShowDraft,
                            resources: t.resources
                        },
                        on: {
                            "update:visible": function (e) {
                                t.isShowDraft = e
                            }
                        }
                    }), i("transition", {
                        attrs: {
                            name: "preset_fade"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showAvatarCardTip,
                            expression: "showAvatarCardTip"
                        }],
                        staticClass: "avatarCardTipBox"
                    }, [i("img", {
                        attrs: {
                            src: s("0190")
                        }
                    }), i("p", [t._v("你收到的超萌捏脸卡在结算时"), i("br"), t._v("可抵扣任意" + t._s(t.deductionCount) + "件付费道具哦")]), i("div", {
                        staticClass: "line"
                    }), i("div", {
                        staticClass: "close",
                        on: {
                            click: t.hideAvatarCardTip
                        }
                    })])]), i("s-dialog", {
                        attrs: {
                            visible: t.visibleTips,
                            title: "恭喜你获得【捏脸艺术家】称号",
                            "confirm-txt": "去认证"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.visibleTips = e
                            },
                            confirm: t.toVerify
                        }
                    }, [i("div", {
                        staticClass: "tips__container"
                    }, [i("p", {
                        staticClass: "title"
                    }, [t._v("1. 你需要做什么")]), i("p", [t._v("请认真投稿哦；若发现恶意投稿，魂淡君会撤销你【捏脸艺术家】的身份哦～")]), i("br"), i("p", {
                        staticClass: "title"
                    }, [t._v("2. 你将获得什么")]), i("p", [t._v("头像在商城被购买后，每个月你将收到平台和你的分成哦（人民币）")]), i("br"), i("p", {
                        staticClass: "title"
                    }, [t._v("2. 查看方式")]), i("p", [t._v("你可以在历史头像中查看自己的投稿状态，是否被通过。")])])])], 1)
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

            function u(t = []) {
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

            function l(t, e) {
                return JSON.stringify(t) === JSON.stringify(e)
            }

            function p(t) {
                return t ? JSON.parse(JSON.stringify(t)) : t
            }

            function d(t) {
                return t.filter(t => "body" === t.type)[0]
            }

            function g(t, e) {
                const s = t.filter(t => t.id.toString() === e)[0];
                return !!s && s.vipExclusive
            }

            function v(t) {
                const e = document.querySelector(t);
                return (new XMLSerializer).serializeToString(e)
            }

            function f(t, e, s) {
                return t.reduce((t, i) => {
                    const r = e && e[i.type];
                    if (r) {
                        const e = r[r.map(t => t.id).indexOf(Number(i.id))];
                        return e && ((-1 !== [0, 2, 3].indexOf(e.chargeType) || s && e.vipExclusive) && 0 === e.purchasedFlag) ? [...t, e] : t
                    }
                    return t
                }, [])
            }

            function y(t, e) {
                return "nose" === t ? [.8] : "spot" === t ? [.25] : "eyeslid" === t ? [.5] : "beard" === t && 0 === e.length ? ["836B64"] : "eyebrow" === t && 0 === e.length ? ["452F29"] : "hair" === t && 0 === e.length ? ["7D3F40", "662F32", "5E2F30"] : void 0
            }

            function m(t, e) {
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
            var C = s("c4a0"),
                w = s.n(C),
                b = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("transition", {
                        attrs: {
                            name: "ui-popup-fade"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "ui-popup ignore"
                    }, [i("transition", {
                        attrs: {
                            name: "ui-popup-slideInUp"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "ui-popup__container ui-popup__container--full"
                    }, [i("div", {
                        staticClass: "purchased"
                    }, [i("div", {
                        staticClass: "purchased__header"
                    }, [i("Icon", {
                        staticClass: "cancel",
                        attrs: {
                            name: "close"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("update:visible", !1)
                            }
                        }
                    }), i("p", {
                        staticClass: "title"
                    }, [t._v("已购列表")])], 1), i("div", {
                        staticClass: "purchased__tabs"
                    }, [i("div", {
                        staticClass: "tab",
                        class: {
                            active: "buy" === t.tab
                        },
                        on: {
                            click: function (e) {
                                t.tab = "buy"
                            }
                        }
                    }, [t._v("自己购买")]), i("div", {
                        staticClass: "tab",
                        class: {
                            active: "gift" === t.tab
                        },
                        on: {
                            click: function (e) {
                                t.tab = "gift"
                            }
                        }
                    }, [t._v("他人赠送")])]), "buy" === t.tab ? i("ul", {
                        staticClass: "purchased__list"
                    }, [i("Infinite", {
                        attrs: {
                            disabled: t.buyListLocked,
                            distance: 400
                        },
                        on: {
                            load: t.loadBuyListMore
                        }
                    }, [t.deductionCount ? i("li", {
                        staticClass: "avatarCardTip"
                    }, [i("img", {
                        attrs: {
                            src: s("0190")
                        }
                    }), i("p", [t._v("我收到的超萌捏脸卡还可抵扣"), i("span", [t._v(t._s(t.deductionCount))]), t._v("件付费道具")])]) : t._e(), t._l(t.buyList, (function (e) {
                        return i("li", {
                            staticClass: "purchased__item"
                        }, [i("div", {
                            staticClass: "left"
                        }, [i("img", {
                            attrs: {
                                src: e.itemUrl
                            }
                        }), i("p", {
                            staticClass: "time"
                        }, [t._v(t._s(e.createTimeText))])]), i("p", {
                            staticClass: "price"
                        }, [i("img", {
                            attrs: {
                                src: s("f8a1")
                            }
                        }), i("span", [t._v(t._s(e.payPrice))])])])
                    }))], 2)], 1) : t._e(), "gift" === t.tab ? i("ul", {
                        staticClass: "purchased__list"
                    }, [i("Infinite", {
                        attrs: {
                            disabled: t.giftListLocked,
                            distance: 400
                        },
                        on: {
                            load: t.loadGiftListMore
                        }
                    }, t._l(t.giftList, (function (e) {
                        return i("li", {
                            staticClass: "purchased__item"
                        }, [i("div", {
                            staticClass: "left"
                        }, [i("img", {
                            attrs: {
                                src: e.itemUrl
                            }
                        }), i("p", {
                            staticClass: "time"
                        }, [t._v(t._s(e.createTimeText))])]), i("p", {
                            staticClass: "price"
                        }, [i("img", {
                            attrs: {
                                src: s("f8a1")
                            }
                        }), i("span", [t._v(t._s(e.payPrice))])])])
                    })), 0)], 1) : t._e()])])])], 1)])
                },
                S = [],
                _ = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "ui-infinite"
                    }, [s("div", {
                        staticClass: "ui-infinite__container"
                    }, [t._t("default")], 2), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "loading" === t.status,
                            expression: "status === 'loading'"
                        }],
                        staticClass: "ui-infinite__loading"
                    }, [s("div", {
                        staticClass: "ui-infinite__loading-icon"
                    }), s("div", {
                        staticClass: "ui-infinite__loading-text"
                    }, [t._v("加载中...")])])])
                },
                x = [],
                T = {
                    props: {
                        disabled: Boolean,
                        distance: {
                            type: [String, Number],
                            default: 400
                        }
                    },
                    data() {
                        return {
                            status: "",
                            target: null
                        }
                    },
                    methods: {
                        scroll() {
                            let t, e, s, i, r, a, o;
                            "loading" !== this.status && (s = !1, t = this.$el, e = this.target, i = this.distance, r = k(e), a = r + P(e), e === t ? s = e.scrollHeight - a <= i : (o = L(t) - L(e) + t.offsetHeight + r, s = a + i >= o), s && (this.$emit("load"), this.status = "loading"))
                        }
                    },
                    watch: {
                        disabled(t) {
                            this.status = t ? "" : this.status
                        }
                    },
                    mounted() {
                        this.target = I(this.$el), this.scrollListener = O(this.scroll, 200), this.target.addEventListener("scroll", this.scrollListener, !1)
                    },
                    destroyed() {
                        this.target.removeEventListener("scroll", this.scrollListener, !1)
                    }
                };

            function I(t) {
                while (t && "HTML" !== t.tagName.toUpperCase() && "BODY" !== t.tagName.toUpperCase() && 1 === t.nodeType) {
                    let e = document.defaultView.getComputedStyle(t).overflowY;
                    if ("scroll" === e || "auto" === e) return t;
                    t = t.parentNode
                }
                return window
            }

            function k(t) {
                return t === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : t.scrollTop
            }

            function L(t) {
                return t === window ? k(window) : t.getBoundingClientRect().top + k(window)
            }

            function P(t) {
                return t === window ? document.documentElement.clientHeight : t.clientHeight
            }

            function O(t, e, s = {}) {
                let i, r, a, o, n;

                function c() {
                    n = !1 === s.leading ? 0 : Date.now(), o = null, a = t.apply(i, r), o || (i = r = null)
                }
                return function () {
                    let h, u;
                    return h = Date.now(), n || !1 !== s.leading || (n = h), i = this, r = arguments, u = e - (h - n), u <= 0 || u > e ? (o && (clearTimeout(o), o = null), n = h, a = t.apply(i, r), o || (i = r = null)) : o || !1 === s.trailing || (o = setTimeout(c, u)), a
                }
            }
            var B = T,
                N = (s("d910"), s("2877")),
                D = Object(N["a"])(B, _, x, !1, null, null, null),
                R = D.exports,
                E = s("60a3");
            let A = class extends E["g"] {
                constructor() {
                    super(...arguments), this.tab = "buy", this.initialize = !0, this.deductionCount = 0, this.buyPageCursor = "", this.giftPageCursor = "", this.buyListLocked = !0, this.giftListLocked = !0, this.buyListLoaded = !1, this.giftListLoaded = !1, this.buyList = [], this.giftList = []
                }
                watchVisible(t) {
                    t && this.initialize && (this.getBuyList(), this.getGiftList(), this.initialize = !1)
                }
                getBuyList() {
                    o["H"]("1", this.buyPageCursor).then(t => {
                        this.buyListLocked = !0, this.buyPageCursor = t.pageCursor, this.buyListLoaded = !t.results.length, this.buyList = [...this.buyList, ...t.results]
                    }, t => {
                        this.buyListLocked = !0, w.a.toast({
                            type: "error",
                            text: t.message
                        })
                    })
                }
                getGiftList() {
                    o["H"]("2", this.giftPageCursor).then(t => {
                        this.giftListLocked = !0, this.giftPageCursor = t.pageCursor, this.giftListLoaded = !t.results.length, this.giftList = [...this.giftList, ...t.results]
                    }, t => {
                        this.giftListLocked = !0, w.a.toast({
                            type: "error",
                            text: t.message
                        })
                    })
                }
                loadGiftListMore() {
                    if (this.giftListLocked = !1, this.giftListLoaded) return this.$nextTick(() => this.giftListLocked = !0);
                    this.getGiftList()
                }
                loadBuyListMore() {
                    if (this.buyListLocked = !1, this.buyListLoaded) return this.$nextTick(() => this.buyListLocked = !0);
                    this.getBuyList()
                }
                created() {
                    o["t"]().then(t => this.deductionCount = t).catch(t => w.a.toast({
                        type: "error",
                        text: t.message
                    }))
                }
            };
            Object(a["a"])([Object(E["d"])(Boolean)], A.prototype, "visible", void 0), Object(a["a"])([Object(E["h"])("visible")], A.prototype, "watchVisible", null), A = Object(a["a"])([Object(E["a"])({
                components: {
                    Infinite: R
                }
            })], A);
            var M = A,
                j = M,
                F = (s("4c0f"), Object(N["a"])(j, b, S, !1, null, "7e2d3ce4", null)),
                V = F.exports,
                $ = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("transition", {
                        attrs: {
                            name: "ui-popup-fade"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "ui-popup ignore"
                    }, [s("transition", {
                        attrs: {
                            name: "ui-popup-slideInUp"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "ui-popup__container ui-popup__container--full",
                        on: {
                            click: t.cancel
                        }
                    }, [s("div", {
                        staticClass: "actionsheet"
                    }, [s("div", {
                        staticClass: "save",
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), t.save.apply(null, arguments)
                            }
                        }
                    }, [t._v("保存草稿 (7天)")]), s("div", {
                        staticClass: "unsave",
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), t.back.apply(null, arguments)
                            }
                        }
                    }, [t._v("不保存")]), s("div", {
                        staticClass: "line"
                    }), s("div", {
                        staticClass: "cancel",
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), t.cancel.apply(null, arguments)
                            }
                        }
                    }, [t._v("取消")])])])])], 1)])
                },
                J = [];
            let H = class extends E["g"] {
                get avatarParams() {
                    return JSON.stringify({
                        bgColor: "1:500",
                        resources: this.resources,
                        sex: this.$route.query.sex
                    })
                }
                save() {
                    if (!d(this.resources)) return this.back();
                    w.a.trackEvent("clk", "MAvatarEdit_SaveDraft"), o["ib"](this.avatarParams).then(t => this.back()).catch(t => w.a.toast({
                        type: "error",
                        text: t.message
                    }))
                }
                back() {
                    w.a.trackEvent("clk", "MAvatarEdit_NoSave"), w.a.navigateBack()
                }
                cancel() {
                    w.a.trackEvent("clk", "MAvatarEdit_ExitCancel"), this.$emit("update:visible", !1)
                }
            };
            Object(a["a"])([Object(E["d"])(Boolean)], H.prototype, "visible", void 0), Object(a["a"])([Object(E["d"])(Array)], H.prototype, "resources", void 0), H = Object(a["a"])([E["a"]], H);
            var U, q = H,
                z = q,
                W = (s("c31a"), Object(N["a"])(z, $, J, !1, null, "93ef7e22", null)),
                Y = W.exports,
                G = s("a28b"),
                X = s("5913"),
                K = s("2097"),
                Q = s("450ca"),
                Z = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "suite__picker"
                    }, [i("ol", t._l(t.res, (function (e) {
                        return i("li", t._l(e, (function (e) {
                            return e.suitId ? i("div", {
                                key: e.suitId,
                                staticClass: "suite__item ignore",
                                class: {
                                    active: t.currentSuitId == e.suitId
                                },
                                on: {
                                    click: function (s) {
                                        return t.handler(e.suitId)
                                    }
                                }
                            }, [i("div", {
                                staticClass: "cover",
                                style: {
                                    "background-image": "url(" + e.suitImageUrl + ")"
                                }
                            }), e.vipExclusive ? i("div", {
                                staticClass: "vip__icon"
                            }) : t._e(), e.price && !e.hasPurchase ? i("div", {
                                staticClass: "price"
                            }, [i("img", {
                                attrs: {
                                    src: s("a32b")
                                }
                            }), i("span", [t._v(t._s(e.price))])]) : t._e(), e.hasPurchase ? i("div", {
                                staticClass: "bought"
                            }, [t._v("已购买")]) : t._e()]) : i("div", {
                                staticClass: "suite__item ignore",
                                class: {
                                    active: !t.currentSuitId
                                },
                                on: {
                                    click: function (e) {
                                        return t.handler("")
                                    }
                                }
                            }, [i("Icon", {
                                staticClass: "cancel",
                                attrs: {
                                    name: "cancel"
                                }
                            })], 1)
                        })), 0)
                    })), 0)])
                },
                tt = [];
            (function (t) {
                t[t["Male"] = 1] = "Male", t[t["Female"] = 0] = "Female"
            })(U || (U = {}));
            let et = class extends E["g"] {
                handler(t) {
                    this.$emit("change", t)
                }
                get res() {
                    return this.suites.length ? it([{}, ...this.suites], 4) : []
                }
                get currentSuitId() {
                    const t = this.resources.map(t => Number(t.id)).sort((t, e) => t - e).join(""),
                        e = this.suites.filter(e => e.itemIdListStr === t)[0];
                    return e ? e.suitId : ""
                }
            };
            Object(a["a"])([Object(E["d"])(Array)], et.prototype, "suites", void 0), Object(a["a"])([Object(E["d"])(Array)], et.prototype, "resources", void 0), et = Object(a["a"])([E["a"]], et);
            var st = et;

            function it(t = [], e = 1) {
                return t.reduce((t, s, i) => (i % e === 0 ? t = [...t, [s]] : t[t.length - 1] = [...t[t.length - 1], s], t), [])
            }
            var rt = st,
                at = (s("28f2"), Object(N["a"])(rt, Z, tt, !1, null, "4fa6eaaa", null)),
                ot = at.exports,
                nt = s("23e8");
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
                get isShowColorPicker() {
                    return -1 !== ["hair", "face", "beard", "eyes", "eyebrow"].indexOf(this.currentType)
                }
                colorChange(t) {
                    this.currentColor = t, this.updateResource(), this.updateSnapshot()
                }
                suiteChange(t) {
                    const e = this.suites.filter(e => e.suitId === t)[0];
                    if (e && e.vipExclusive && !this.superVIP ? this.showVipTips = !0 : this.showVipTips = !1, e) {
                        const {
                            resources: t,
                            bgColor: s
                        } = JSON.parse(e.avatarParams);
                        this.snapshots = [], this.isChanged = !0, this.snapshotsCursor = -1, this.showReditButton = !1, this.init(this.sex, t)
                    } else this.snapshots = [], this.isChanged = !0, this.snapshotsCursor = -1, this.showReditButton = !1, this.init()
                }
                styleChange(t) {
                    g(this.stylesData, t) && !this.superVIP ? this.showVipTips = !0 : this.showVipTips = !1, this.currentStyle === t ? this.currentTransform = n() : this.showReditButton = !1, this.currentStyle = t, this.updateResource(), this.updateSnapshot()
                }
                facialChange(t, e = !0) {
                    const i = setTimeout(() => this.loading = !0, 1e3);
                    s("e76f")("./" + t).then(({
                        default: t
                    }) => t()).then(s => {
                        this.getPropsPrices(t).then(r => {
                            const a = this.resources.filter(e => e.type === t)[0];
                            this.currentType = t, this.stylesData = this.mergePriceData(r, s), this.isRegisterChannel && (this.stylesData = this.getFreeProps(this.stylesData)), a ? (this.currentStyle = a.id, this.currentColor = a.color, this.currentTransform = a.transform ? p(a.transform) : n()) : (this.currentStyle = "", this.currentColor = [], this.currentTransform = n()), e && this.updateSnapshot(), this.loading = !1, clearTimeout(i)
                        }).catch(() => {
                            this.loading = !1, clearTimeout(i), w.a.toast({
                                type: "error",
                                text: "资源加载失败\n请检查您的网络是否开启(10003)"
                            })
                        })
                    }).catch(() => {
                        this.loading = !1, clearTimeout(i), w.a.toast({
                            type: "error",
                            text: "资源加载失败\n请检查您的网络是否开启(10001)"
                        })
                    })
                }
                mergePriceData(t, e) {
                    const s = t.map(t => t.id);
                    return t.length ? e.map(e => {
                        const i = s.indexOf(e.id);
                        return -1 !== i && (e.price = t[i].price, e.chargeType = t[i].chargeType, e.vipExclusive = t[i].vipExclusive, e.purchasedFlag = t[i].purchasedFlag, e.originalPrice = t[i].originalPrice), e
                    }) : e
                }
                getFreeProps(t) {
                    return t = t.filter(t => !t.chargeType || 0 === t.chargeType || 1 === t.chargeType), t.filter(t => !t.vipExclusive)
                }
                updateResource() {
                    let t = this.resources.findIndex(t => t.type === this.currentType); - 1 !== t && this.resources.splice(t, 1), this.isChanged = !0, this.currentColor = y(this.currentType, this.currentColor) || this.currentColor, this.currentStyle && m(this.currentType, Number(this.currentStyle)) && (this.resources = [...this.resources, {
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
                    l(this.snapshots[this.snapshotsCursor], t) || (this.snapshotsCursor === this.snapshots.length - 1 ? (this.snapshotsCursor += 1, this.snapshots.push(t)) : (this.snapshotsCursor += 1, this.snapshots.splice(this.snapshotsCursor, 0, t)))
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
                    this.isChanged && 0 !== this.renderData.length && !this.isRegisterChannel ? this.isShowDraft = !0 : w.a.navigateBack()
                }
                preset() {
                    if (this.presetIndex = this.presetIndex < this.presetAvatars.length - 1 ? this.presetIndex + 1 : 0, this.presetAvatars[this.presetIndex]) {
                        const {
                            resources: t,
                            bgColor: e
                        } = JSON.parse(this.presetAvatars[this.presetIndex].avatarParams);
                        this.snapshots = [], this.isChanged = !0, this.snapshotsCursor = -1, this.showReditButton = !1, this.init(this.sex, t), sessionStorage.setItem("avatar.bgColor", e)
                    }
                    w.a.trackEvent("clk", "MAvatarEdit_OneKeyEdit")
                }
                draft() {
                    this.snapshots = [], this.showDraftBtn = !1, this.snapshotsCursor = -1, this.showReditButton = !1, sessionStorage.getItem("avatar.draftResources") && this.init(this.sex, JSON.parse(sessionStorage.getItem("avatar.draftResources"))), sessionStorage.setItem("avatar.showDraftBtn", "false"), w.a.trackEvent("clk", "MAvatarEdit_LastOperation")
                }
                done() {
                    if (0 === this.renderData.length) return;
                    if (!d(this.resources)) return w.a.toast({
                        type: "error",
                        text: "数据异常，请返回再次进入重新捏脸"
                    });
                    let t = [],
                        e = v(".preview .box").replace("</svg>", "");
                    if (t = this.superVIP ? f(this.resources, this.propsPricesMap, !1) : f(this.resources, this.propsPricesMap, !0), sessionStorage.setItem("avatar.resources", JSON.stringify(this.resources)), sessionStorage.setItem("avatar.isChanged", JSON.stringify(this.isChanged)), sessionStorage.setItem("avatar.svg", e.substring(e.indexOf(">") + 1)), w.a.trackEvent("clk", "MAvatarEdit_Accomplish"), this.isFreeProps(t)) this.toSavePage();
                    else if (this.isLimitTimeFreeProps(t)) {
                        const e = t.map(t => t.id.toString());
                        o["cb"]({
                            paySource: "1",
                            cuteFaceItemIdList: JSON.stringify(e)
                        }).then(() => this.toSavePage()).catch(t => w.a.toast({
                            type: "error",
                            text: t.message
                        }))
                    } else sessionStorage.setItem("avatar.usePropsPrices", JSON.stringify(t)), this.toPayPage()
                }
                isFreeProps(t) {
                    return 0 === t.length
                }
                isLimitTimeFreeProps(t) {
                    return t.length === t.filter(t => 0 === t.chargeType).length
                }
                toPayPage() {
                    o["T"]().then(t => {
                        -1 !== t.indexOf("600001") ? w.a.toast({
                            type: "error",
                            text: "您处于限制捏脸状态中，暂时无法修改捏脸头像哦！"
                        }) : this.$router.push({
                            path: "/own/pay",
                            query: {
                                source: "main",
                                ...this.$route.query
                            }
                        })
                    })
                }
                toSavePage() {
                    o["T"]().then(t => {
                        if (-1 !== t.indexOf("600001")) w.a.toast({
                            type: "error",
                            text: "您处于限制捏脸状态中，暂时无法修改捏脸头像哦！"
                        });
                        else {
                            const t = {
                                isInWhiteList: String(this.isInWhiteList),
                                isVerfySuccess: String(this.isVerfySuccess)
                            };
                            this.$router.push({
                                path: "/own/save",
                                query: {
                                    source: "main",
                                    ...t,
                                    ...this.$route.query
                                }
                            })
                        }
                    }).catch(t => {
                        w.a.toast({
                            type: "error",
                            text: t.message
                        })
                    })
                }
                init(t, e) {
                    t === this.sex ? this.resources = u(e) : 1 === this.sex ? this.resources = c() : 0 === this.sex && (this.resources = h()), this.facialChange(this.currentType)
                }
                restore() {
                    this.snapshots = [], this.resources = [], this.renderData = [], this.stylesData = [], this.isChanged = !1, this.currentColor = [], this.currentStyle = "", this.currentType = "hair", this.snapshotsCursor = -1, this.showReditButton = !1, this.currentTransform = n()
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
                        this.rollback(), this.loading = !1, clearTimeout(e), w.a.toast({
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
                        o["C"]("1").then(i => {
                            o["k"]("1", i.payItems).then(s => {
                                this.propsPricesMap = s, e(this.propsPricesMap[t] ? this.propsPricesMap[t] : [])
                            }).catch(t => s(t))
                        }).catch(t => s(t))
                    })
                }
                showPresetAvatars() {
                    o["J"](this.sex, this.isRegisterChannel).then(t => this.presetAvatars = t)
                }
                getAllSuite() {
                    const t = 1 === this.sex ? 0 : 1;
                    o["l"](t.toString()).then(t => this.suites = t)
                }
                isShowAvatarCardTip() {
                    o["t"]().then(t => {
                        this.deductionCount = t, 0 === this.deductionCount || localStorage.getItem("avatar.avatarCardTip") || (this.showAvatarCardTip = !0)
                    }).catch(t => w.a.toast({
                        type: "error",
                        text: t.message
                    }))
                }
                hideAvatarCardTip() {
                    this.showAvatarCardTip = !1, localStorage.setItem("avatar.avatarCardTip", "1")
                }
                getTempResources() {
                    return JSON.parse(sessionStorage.getItem("avatar.resources") || "[]")
                }
                getTempIsChanged() {
                    return JSON.parse(sessionStorage.getItem("avatar.isChanged") || "false")
                }
                getTempShowDraftButton() {
                    return JSON.parse(sessionStorage.getItem("avatar.showDraftBtn") || "false")
                }
                toVipPage() {
                    w.a.navigateTo({
                        url: "https://app.soulapp.cn/account/#/vip?viewport=cover&sourceCode=050001"
                    })
                }
                async getState() {
                    if (this.isInWhiteList = await o["X"](this.$route.query.userIdEcpt), !this.isInWhiteList) return;
                    const t = await o["W"]();
                    2 === t ? this.isVerfySuccess = !0 : this.initTips()
                }
                initTips() {
                    localStorage.getItem("SOUL_HISTORY_TIPS") || (this.visibleTips = !0, localStorage.setItem("SOUL_HISTORY_TIPS", "true"))
                }
                toVerify() {
                    this.visibleTips = !1, w.a.navigateTo({
                        url: location.origin + "/account/#/faceid/entry?disableShare=true&source=3"
                    })
                }
                getUserInfo() {
                    o["U"]().then(t => this.superVIP = t.superVIP).catch(t => w.a.toast({
                        type: "error",
                        text: t.message
                    }))
                }
                async getAb() {
                    if (this.isRegisterChannel) return void(this.isShowMarketIcon = !1);
                    const t = await o["j"](2033);
                    this.isShowMarketIcon = "a" === t
                }
                created() {
                    const {
                        avatarName: t,
                        register: e
                    } = this.$route.query;
                    this.getAb(), this.isShowAvatarCardTip(), this.isRegisterChannel || (this.isShowSuite = !0, this.getAllSuite()), w.a.trackEvent("pv", "MAvatarEdit_HomeMain", {
                        par: {
                            register: e,
                            avatarName: t,
                            sex: this.sex
                        }
                    })
                }
                mounted() {
                    const t = this.getTempResources();
                    this.getUserInfo(), this.getState(), t.length ? (this.init(this.sex, t), this.isChanged = this.getTempIsChanged(), this.showDraftBtn = this.getTempShowDraftButton()) : (o["V"](this.isRegisterChannel, this.$route.query.avatarName).then(t => {
                        t ? (this.init(t.sex, t.resources), this.showReditButton = t.sex === this.sex, sessionStorage.setItem("avatar.bgColor", "undefined" !== t.bgColor && t.bgColor ? t.bgColor : "1:500")) : this.init()
                    }), this.isRegisterChannel || o["u"]().then(t => {
                        t && (this.showDraftBtn = !0, sessionStorage.setItem("avatar.showDraftBtn", "true"), sessionStorage.setItem("avatar.draftResources", JSON.stringify(t.resources)), w.a.trackEvent("exp", "MAvatarEdit_LastOperationExpo"))
                    })), w.a.dispatch("action_page_sideslip", {
                        allow: !1
                    })
                }
            };
            Object(a["a"])([Object(E["h"])("resources")], ct.prototype, "watchResources", null), ct = Object(a["a"])([Object(E["a"])({
                components: {
                    Bag: V,
                    Draft: Y,
                    Touch: G["a"],
                    Render: X["a"],
                    ColorPicker: K["a"],
                    StylePicker: Q["a"],
                    SuitePicker: ot,
                    FacialPicker: nt["a"]
                }
            })], ct);
            var ht = ct,
                ut = ht,
                lt = (s("fe3c"), Object(N["a"])(ut, i, r, !1, null, "5c345996", null));
            e["default"] = lt.exports
        },
        "28f2": function (t, e, s) {
            "use strict";
            s("b40b")
        },
        3861: function (t, e, s) {
            t.exports = s.p + "img/vip_arrow.b3ed078a.png"
        },
        "4c0f": function (t, e, s) {
            "use strict";
            s("8f91")
        },
        "501e": function (t, e, s) {
            t.exports = s.p + "img/loading.131b706c.gif"
        },
        5628: function (t, e, s) {},
        5824: function (t, e, s) {
            t.exports = s.p + "img/draft.48924cb5.png"
        },
        6991: function (t, e, s) {},
        "8f91": function (t, e, s) {},
        a32b: function (t, e, s) {
            t.exports = s.p + "img/coin.9d046c5f.png"
        },
        b40b: function (t, e, s) {},
        c31a: function (t, e, s) {
            "use strict";
            s("6991")
        },
        d910: function (t, e, s) {
            "use strict";
            s("5628")
        },
        e7a8: function (t, e, s) {},
        f8a1: function (t, e, s) {
            t.exports = s.p + "img/coin.9d046c5f.png"
        },
        fe3c: function (t, e, s) {
            "use strict";
            s("e7a8")
        }
    }
]);
//# sourceMappingURL=chunk-6e36557c.fbf6ef8f.js.map