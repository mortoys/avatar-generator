(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5afde5a6"], {
        "0dd9": function (t, e, s) {
            t.exports = s.p + "img/6.e40dcf49.png"
        },
        "16c5": function (t, e, s) {},
        "173d": function (t, e, s) {
            t.exports = s.p + "img/19.7840a87b.png"
        },
        "1f99": function (t, e, s) {
            "use strict";
            s("16c5")
        },
        "22f9": function (t, e, s) {},
        "32f5f": function (t, e, s) {
            t.exports = s.p + "img/18.8202313d.png"
        },
        "34eb": function (t, e, s) {
            t.exports = s.p + "img/9.da2cbbe1.png"
        },
        "4a02": function (t, e, s) {
            t.exports = s.p + "img/13.90b1dcd1.png"
        },
        "4d28": function (t, e, s) {
            t.exports = s.p + "img/8.ea35ddf4.png"
        },
        "5a2b": function (t, e, s) {},
        6744: function (t, e, s) {
            t.exports = s.p + "img/5.73b5e762.png"
        },
        "7b5a": function (t, e, s) {
            t.exports = s.p + "img/11.3833fea7.png"
        },
        "7e2c": function (t, e, s) {
            t.exports = s.p + "img/2.ee23a9bf.png"
        },
        8976: function (t, e, s) {
            t.exports = s.p + "img/1.ad2c7ec9.png"
        },
        "8bd7": function (t, e, s) {
            "use strict";
            s("22f9")
        },
        "8fb0": function (t, e, s) {
            t.exports = s.p + "img/14.36616a0d.png"
        },
        94745: function (t, e, s) {
            t.exports = s.p + "img/17.720fe838.png"
        },
        "9cd0": function (t, e, s) {
            "use strict";
            s("5a2b")
        },
        acb2: function (t, e, s) {
            t.exports = s.p + "img/7.0445fb49.png"
        },
        b577f: function (t, e, s) {
            t.exports = s.p + "img/10.839c5dee.png"
        },
        b639: function (t, e, s) {
            t.exports = s.p + "img/12.d9934c08.png"
        },
        b893: function (t, e, s) {
            t.exports = s.p + "img/15.9131c24c.png"
        },
        d07c: function (t, e, s) {
            "use strict";
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "color__box"
                    }, [s("div", {
                        staticClass: "color__wrap"
                    }, [s("div", {
                        staticClass: "color__picker"
                    }, [s("ul", t._l(t.colors, (function (e, a) {
                        return s("li", {
                            key: a,
                            class: {
                                active: a === t.index, ignore: a === t.index
                            },
                            style: {
                                backgroundImage: "linear-gradient(45deg, " + e[0] + ", " + e[1] + ")"
                            },
                            on: {
                                click: function (e) {
                                    return t.handler(a)
                                }
                            }
                        }, [s("i", {
                            staticClass: "ignore"
                        })])
                    })), 0)])]), s("div", {
                        staticClass: "slider"
                    }, [s("canvas", {
                        ref: "canvas",
                        attrs: {
                            width: "1000",
                            height: "32"
                        }
                    }), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.slider,
                            expression: "slider"
                        }],
                        attrs: {
                            type: "range",
                            min: "1",
                            max: "1000"
                        },
                        domProps: {
                            value: t.slider
                        },
                        on: {
                            input: t.slideChange,
                            __r: function (e) {
                                t.slider = e.target.value
                            }
                        }
                    })])])
                },
                i = [],
                r = s("9ab4");
            const n = [
                ["#f9f9f9", "#e1e1e1"],
                ["#999999", "#4d4d4d"],
                ["#ffcbd0", "#ed4956"],
                ["#ffdab4", "#fd8d33"],
                ["#fff3d4", "#ffcf00"],
                ["#d1e9b8", "#71c050"],
                ["#d4eef9", "#4ea6ff"],
                ["#e1d1fe", "#b482e6"],
                ["#c3cdda", "#1f384e"],
                ["#b9a0a0", "#6b1c18"],
                ["#fbd9dd", "#fc6c41"],
                ["#f0ebe5", "#bea46f"],
                ["#dcdcaa", "#99946d"],
                ["#b9b9a0", "#444b3b"],
                ["#c3e1e9", "#55aaaa"],
                ["#f2f2f2", "#776aff"],
                ["#ffff82", "#61a7ff"],
                ["#c7b9b0", "#b18471"],
                ["#ffcdc7", "#be6464"],
                ["#fbf5b9", "#f08080"],
                ["#fce8d7", "#f8c971"],
                ["#b1e6d1", "#ffc382"],
                ["#cff8e6", "#74b9e0"],
                ["#fedef6", "#fc639b"],
                ["#c3fd74", "#a4fef4"],
                ["#ff8fec", "#543b7d"],
                ["#add2ff", "#1a295c"]
            ];
            var o = s("60a3");
            let c = class extends o["g"] {
                constructor() {
                    super(...arguments), this.index = 0, this.slider = 500, this.colors = n
                }
                handler(t) {
                    this.index = t;
                    const [e, s] = this.colors[this.index];
                    this.renderGradient(e, s), this.slideChange()
                }
                renderGradient(t, e) {
                    const s = this.canvasContext.createLinearGradient(0, 0, this.canvas.width, 0);
                    s.addColorStop(0, t), s.addColorStop(1, e), this.canvasContext.fillStyle = s, this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height)
                }
                slideChange() {
                    let t = this.canvasContext.getImageData(this.slider - 1, 0, 1, 1).data;
                    this.$emit("input", `${this.index+1}:${this.slider}`), this.$emit("change", "#" + d(t[0], t[1], t[2]))
                }
                created() {
                    const [t, e] = this.value.split(":").map(t => Number(t));
                    this.slider = e, this.index = t - 1
                }
                mounted() {
                    const [t, e] = this.colors[this.index];
                    this.canvas = this.$refs.canvas, this.canvasContext = this.canvas.getContext("2d"), this.$nextTick(() => {
                        this.renderGradient(t, e), this.slideChange()
                    })
                }
            };
            Object(r["a"])([Object(o["d"])(String)], c.prototype, "value", void 0), c = Object(r["a"])([o["a"]], c);
            var h = c;

            function d(t, e, s) {
                const a = t => {
                    const e = t.toString(16);
                    return 1 === e.length ? "0" + e : e
                };
                return `${a(t)}${a(e)}${a(s)}`
            }
            var l = h,
                g = (s("1f99"), s("2877")),
                v = Object(g["a"])(l, a, i, !1, null, "6b0770d0", null);
            e["a"] = v.exports
        },
        de0f: function (t, e, s) {
            t.exports = s.p + "img/3.717ca71a.png"
        },
        de8b: function (t, e, s) {
            "use strict";
            s.r(e);
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "wrap ignore"
                    }, [s("div", {
                        staticClass: "layout"
                    }, [s("Icon", {
                        staticClass: "back",
                        attrs: {
                            name: "back"
                        },
                        on: {
                            click: t.back
                        }
                    }), s("div", {
                        ref: "preview",
                        staticClass: "preview"
                    }, [s("svg", {
                        attrs: {
                            viewBox: "0 0 640 640"
                        }
                    }, [s("rect", {
                        attrs: {
                            x: "0",
                            y: "0",
                            width: "640",
                            height: "640",
                            fill: t.fillColor,
                            stroke: "#ededed",
                            "stroke-width": "1"
                        }
                    }), s("image", {
                        attrs: {
                            "xlink:href": "data:image/svg+xml;base64," + t.svgBase64,
                            width: "640",
                            height: "640"
                        }
                    })])]), s("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showTip,
                            expression: "showTip"
                        }],
                        staticClass: "tip"
                    }, [t._v("给你的头像设置一个背景吧！")])]), s("div", {
                        staticClass: "op"
                    }, [s("ColorSlider", {
                        on: {
                            change: t.colorSliderChange
                        },
                        model: {
                            value: t.color,
                            callback: function (e) {
                                t.color = e
                            },
                            expression: "color"
                        }
                    }), s("div", {
                        staticClass: "op__btns"
                    }, [s("div", {
                        staticClass: "op__btn"
                    }, [s("div", {
                        staticClass: "op__download",
                        on: {
                            click: t.download
                        }
                    }, [s("Icon", {
                        staticClass: "icon",
                        attrs: {
                            name: "download"
                        }
                    })], 1), s("p", {
                        staticClass: "text"
                    }, [t._v("保存到相册")])]), s("div", {
                        staticClass: "op__btn"
                    }, [s("div", {
                        staticClass: "op__share",
                        on: {
                            click: t.share
                        }
                    }, [s("Icon", {
                        staticClass: "icon",
                        attrs: {
                            name: "share"
                        }
                    })], 1), s("p", {
                        staticClass: "text"
                    }, [t._v("转发海报")])])]), s("div", {
                        staticClass: "op__done"
                    }, [s("div", {
                        staticClass: "op__save",
                        class: {
                            hollow: t.isInWhiteList
                        },
                        on: {
                            click: t.save
                        }
                    }, [t._v("保存头像")]), t.isInWhiteList ? s("div", {
                        staticClass: "op__contribute",
                        class: {
                            disabled: !t.isVerfySuccess
                        },
                        on: {
                            click: t.openSubmitDrager
                        }
                    }, [t._v("去投稿")]) : t._e()])], 1), s("RenderShare", {
                        ref: "renderShare",
                        attrs: {
                            show: t.showRender,
                            avatar: t.svgBase64,
                            color: t.fillColor
                        },
                        on: {
                            "update:show": function (e) {
                                t.showRender = e
                            }
                        }
                    })], 1), s("s-dialog", {
                        attrs: {
                            visible: t.visibleTips,
                            title: "实名认证提示",
                            "confirm-txt": "去认证"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.visibleTips = e
                            },
                            confirm: t.toVerify
                        }
                    }, [s("div", {
                        staticClass: "tips__container"
                    }, [s("p", [t._v("实名认证之后才能投稿")])])]), s("ContributeDrager", {
                        attrs: {
                            visible: t.isShowContribute,
                            avatarParams: t.avatarParams,
                            avatarName: null,
                            gender: t.userGender
                        },
                        on: {
                            "update:visible": function (e) {
                                t.isShowContribute = e
                            }
                        }
                    })], 1)
                },
                i = [],
                r = s("9ab4"),
                n = s("c949"),
                o = s("c4a0"),
                c = s.n(o),
                h = s("60a3"),
                d = s("d07c"),
                l = function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("s-popup", {
                        attrs: {
                            visible: t.showSync,
                            "is-full": !1
                        }
                    }, [s("div", {
                        staticClass: "wrapper"
                    }, [s("div", {
                        staticClass: "title",
                        on: {
                            click: t.back
                        }
                    }, [t._v(" 取消 ")]), s("div", {
                        staticClass: "banner"
                    }, [t._v("🌟炫耀一下你的作品，让Ta看到有趣的你吧！")]), s("div", {
                        staticClass: "demo"
                    }, [s("canvas", {
                        ref: "canvas",
                        staticClass: "canvas"
                    })]), s("p", {
                        staticClass: "name"
                    }, [t._v("全部模版")]), s("ul", {
                        staticClass: "template"
                    }, t._l(t.imgs, (function (e, a) {
                        return s("li", {
                            key: a,
                            class: {
                                active: t.currentIndex === a
                            },
                            on: {
                                click: function (e) {
                                    return t.changeTemp(a)
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: e,
                                alt: ""
                            }
                        })])
                    })), 0), s("div", {
                        staticClass: "footer"
                    }, [s("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading"
                        }],
                        staticClass: "btn",
                        on: {
                            click: t.toPost
                        }
                    }, [t._v("去发布瞬间")])])])])
                },
                g = [],
                v = s("8976"),
                u = s.n(v),
                p = s("7e2c"),
                f = s.n(p),
                m = s("de0f"),
                b = s.n(m),
                x = s("e8da"),
                w = s.n(x),
                C = s("6744"),
                S = s.n(C),
                k = s("0dd9"),
                _ = s.n(k),
                y = s("acb2"),
                I = s.n(y),
                $ = s("4d28"),
                T = s.n($),
                O = s("34eb"),
                j = s.n(O),
                P = s("b577f"),
                R = s.n(P),
                B = s("7b5a"),
                A = s.n(B),
                E = s("b639"),
                N = s.n(E),
                W = s("4a02"),
                q = s.n(W),
                L = s("8fb0"),
                V = s.n(L),
                D = s("b893"),
                G = s.n(D),
                M = s("ed28"),
                J = s.n(M),
                U = s("94745"),
                H = s.n(U),
                F = s("32f5f"),
                X = s.n(F),
                z = s("173d"),
                K = s.n(z);
            let Q = class extends h["g"] {
                constructor() {
                    super(...arguments), this.currentIndex = 0, this.imgs = [u.a, f.a, b.a, w.a, S.a, _.a, I.a, T.a, j.a, R.a, A.a, N.a, q.a, V.a, G.a, J.a, H.a, X.a, K.a], this.imgsBase64 = []
                }
                onShow(t) {
                    t && this.currentIndex >= 6 && this.$nextTick(() => {
                        const t = document.querySelector(`.template li:nth-child(${this.currentIndex+1})`),
                            e = document.querySelector(".template");
                        if (t && e) {
                            const s = t.getBoundingClientRect();
                            e.scrollTop = s.top - s.height - e.getBoundingClientRect().top
                        }
                    })
                }
                get avatarBase64() {
                    return "data:image/svg+xml;base64," + this.avatar
                }
                get ctx() {
                    return this.canvas.getContext("2d")
                }
                getWidth(t) {
                    return t / 544 * this.canvas.width
                }
                getHeight(t) {
                    return t / 410 * this.canvas.height
                }
                resetCtx() {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                renderCtx() {
                    this.resetCtx(), this.renderAvatar(), this.renderTemp()
                }
                changeTemp(t) {
                    this.currentIndex !== t && (this.currentIndex = t, this.renderCtx())
                }
                renderAvatar() {
                    const t = this.getWidth(142),
                        e = this.getHeight(75),
                        s = this.getWidth(260),
                        a = this.getHeight(260),
                        i = new Image;
                    i.src = this.avatarBase64, this.ctx.fillStyle = this.color, this.ctx.fillRect(t, e, s, a), this.ctx.drawImage(i, t, e, s, a)
                }
                renderTemp() {
                    const t = new Image;
                    t.crossOrigin = "Anonymous", t.src = this.imgsBase64[this.currentIndex] || this.imgs[this.currentIndex], t.onload = () => this.ctx.drawImage(t, 0, 0, t.width, t.height, 0, 0, this.canvas.width, this.canvas.height)
                }
                hdCanvas() {
                    const t = window.devicePixelRatio || 1;
                    this.canvas.width = 544 * t, this.canvas.height = 410 * t
                }
                getBase64Image(t) {
                    return new Promise((e, s) => {
                        try {
                            const a = new Image;
                            a.crossOrigin = "Anonymous", a.src = t, a.onload = () => {
                                const t = document.createElement("canvas");
                                t.width = a.width, t.height = a.height;
                                const s = t.getContext("2d");
                                s.drawImage(a, 0, 0, a.width, a.height);
                                const i = t.toDataURL("image/png");
                                e(i)
                            }, a.onerror = () => s("share img of avatar loaded error")
                        } catch (a) {
                            s(a)
                        }
                    })
                }
                async loadAllImgs() {
                    this.imgsBase64 = await Promise.all(this.imgs.map(t => this.getBase64Image(t)))
                }
                async toPost() {
                    c.a.trackEvent("clk", "MAvatarEdit_Publish");
                    const t = this.canvas.toDataURL("image/png").replace("data:image/png;base64,", ""),
                        e = ["捏脸达人"];
                    let s = this.$route.query.tags;
                    s && e.push(...decodeURI(s).split(",")), c.a.uploadFile({
                        base64: t,
                        mimeType: "image/png",
                        success: t => {
                            const s = t && t.data || "";
                            c.a.dispatch("action_event_launchPublish", {
                                content: "",
                                tags: e,
                                path: s
                            }, t => {})
                        }
                    })
                }
                back() {
                    c.a.trackEvent("clk", "MAvatarEdit_Esc"), c.a.navigateBack()
                }
                mounted() {
                    this.currentIndex = parseInt(String(Math.random() * (this.imgs.length - .1))), this.loadAllImgs(), this.$nextTick(() => this.hdCanvas())
                }
            };
            Object(r["a"])([Object(h["f"])("canvas")], Q.prototype, "canvas", void 0), Object(r["a"])([Object(h["e"])("show")], Q.prototype, "showSync", void 0), Object(r["a"])([Object(h["d"])()], Q.prototype, "avatar", void 0), Object(r["a"])([Object(h["d"])()], Q.prototype, "color", void 0), Object(r["a"])([Object(h["h"])("show")], Q.prototype, "onShow", null), Q = Object(r["a"])([h["a"]], Q);
            var Y = Q,
                Z = Y,
                tt = (s("8bd7"), s("2877")),
                et = Object(tt["a"])(Z, l, g, !1, null, "a2d67f72", null),
                st = et.exports,
                at = s("79a8");
            let it = class extends h["g"] {
                constructor() {
                    super(...arguments), this.fillColor = "", this.showTip = !localStorage.getItem("avatar.isShowColorTip"), this.color = sessionStorage.getItem("avatar.bgColor") || "1:500", this.userGender = "1" === this.$route.query.sex ? 0 : 1, this.showRender = !1, this.isInWhiteList = !1, this.isVerfySuccess = !1, this.isShowContribute = !1, this.visibleTips = !1
                }
                get svg() {
                    return sessionStorage.getItem("avatar.svg") || ""
                }
                get isRegisterChannel() {
                    return "1" === this.$route.query.register
                }
                get avatarParams() {
                    return JSON.stringify({
                        bgColor: this.color,
                        sex: this.$route.query.sex,
                        backgroundColor: this.fillColor,
                        resources: JSON.parse(sessionStorage.getItem("avatar.resources") || "")
                    })
                }
                get svgBase64() {
                    return btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" >${this.svg}</svg>`)
                }
                get svgStr() {
                    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" viewBox="0 0 640 640"><rect x="0" y="0" width="640" height="640" fill="${this.fillColor}" stroke="#ededed" stroke-width="1"></rect>${this.svg}</svg>`
                }
                colorSliderChange(t) {
                    this.fillColor = t, this.showTip && "1:500" !== this.color && (this.showTip = !1, localStorage.setItem("avatar.isShowColorTip", "1"))
                }
                back() {
                    this.$router.go("pay" === this.$route.query.source ? -2 : -1)
                }
                download() {
                    c.a.trackEvent("clk", "MAvatarEdit_SavetoAlbum"), n["kb"](2, this.svgStr, this.avatarParams)
                }
                share() {
                    c.a.trackEvent("clk", "MAvatarEdit_SharePoster"), n["kb"](3, this.svgStr, this.avatarParams)
                }
                save() {
                    const t = this.$route.query.version || "0.0.1";
                    c.a.trackEvent("clk", "MAvatarEdit_SaveAvatar"), this.isRegisterChannel || n["e"](), n["lb"](this.svgStr, this.avatarParams).then(e => (this.isRegisterChannel && n["jb"](this.avatarParams, e.avatarName, e.oriAvatarName), -1 === c.a.compareVersion("3.18.0", t) ? n["kb"](1, this.svgStr, this.avatarParams) : (c.a.setUserInfo({
                        avatarName: e.avatarName,
                        avatarParams: this.avatarParams,
                        oriAvatarName: e.oriAvatarName
                    }), c.a.toast({
                        type: "success",
                        text: "修改成功"
                    }), this.isRegisterChannel ? setTimeout(() => c.a.navigateBack(), 2e3) : void(this.$refs.renderShare && (this.$refs.renderShare.renderCtx(), this.showRender = !0))))).catch(e => {
                        if (-1 === c.a.compareVersion("3.18.0", t)) return n["kb"](1, this.svgStr, this.avatarParams);
                        c.a.toast({
                            type: "error",
                            text: e.message
                        })
                    })
                }
                openSubmitDrager() {
                    this.isVerfySuccess ? this.isShowContribute = !0 : this.visibleTips = !0
                }
                toVerify() {
                    this.visibleTips = !1, c.a.navigateTo({
                        url: location.origin + "/account/#/faceid/entry?disableShare=true&source=3"
                    })
                }
                async getState() {
                    if (this.isInWhiteList = await n["X"](this.$route.query.userIdEcpt), !this.isInWhiteList) return;
                    const t = await n["W"]();
                    2 === t && (this.isVerfySuccess = !0)
                }
                created() {
                    const t = this.$route.query;
                    this.isInWhiteList = "true" === t.isInWhiteList, this.isVerfySuccess = "true" === t.isVerfySuccess
                }
                mounted() {
                    c.a.onShow(this.getState)
                }
            };
            it = Object(r["a"])([Object(h["a"])({
                components: {
                    ColorSlider: d["a"],
                    RenderShare: st,
                    ContributeDrager: at["a"]
                }
            })], it);
            var rt = it,
                nt = rt,
                ot = (s("9cd0"), Object(tt["a"])(nt, a, i, !1, null, "4b43b0e0", null));
            e["default"] = ot.exports
        },
        e8da: function (t, e, s) {
            t.exports = s.p + "img/4.f414f767.png"
        },
        ed28: function (t, e, s) {
            t.exports = s.p + "img/16.1b022afc.png"
        }
    }
]);
//# sourceMappingURL=chunk-5afde5a6.715efd71.js.map