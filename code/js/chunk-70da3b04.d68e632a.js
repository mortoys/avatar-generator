(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-70da3b04"], {
        c4a0: function (e, t, a) {
            "use strict";
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            var n = function () {
                    return n = Object.assign || function (e) {
                        for (var t, a = 1, n = arguments.length; a < n; a++)
                            for (var r in t = arguments[a], t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, n.apply(this, arguments)
                },
                r = function () {},
                i = navigator.userAgent,
                s = /android/i.test(i),
                u = Object.prototype.toString,
                o = /iPad|iPod|iPhone|iOS/i.test(i),
                c = function (e) {
                    return "[object Number]" === u.call(e)
                },
                d = function (e) {
                    var t = {
                        code: -1,
                        data: "",
                        msg: "数据解析失败"
                    };
                    try {
                        t = JSON.parse(e)
                    } catch (a) {}
                    return t
                },
                p = function (e) {
                    var t = e.fail,
                        a = e.success,
                        n = e.complete;
                    return function (e) {
                        -1 === e.code && t && t(e), 0 === e.code && a && a(e), n && n(e)
                    }
                },
                l = function (e, t) {
                    for (var a = e.split("."), n = t.split("."), r = 0, i = void 0, s = void 0; r < a.length; r++) {
                        if (i = parseInt(a[r], 10) || 0, s = parseInt(n[r], 10) || 0, i > s) return -1;
                        if (i < s) return 1
                    }
                    return 0
                },
                f = function (e) {
                    var t = {
                            true: !0,
                            false: !1
                        },
                        a = 0 === e.indexOf("?") ? e.substr(1).split("&") : e.split("&");
                    return a.reduce((function (e, a) {
                        var n = a.split("="),
                            r = n[0],
                            i = n[1];
                        return i = decodeURIComponent(i), i = "[object Undefined]" === u.call(t[i]) ? i : t[i], e[r] = i, e
                    }), {})
                },
                g = "AEJSBridge",
                m = g + "Ready",
                _ = function (e) {
                    return "ready" === e
                },
                T = function () {
                    return window[g] && (s || o && window["WebViewJavascriptBridge"]) && window[g].dispatch
                },
                O = function (e, t) {
                    if (_(e)) {
                        var a = function () {
                            return t(R("ready", a))
                        };
                        document.addEventListener(m, a, !1)
                    } else A((function () {
                        return window[g].addEventListener({
                            exec: t,
                            handlerName: e
                        })
                    }))
                },
                R = function (e, t) {
                    _(e) ? document.removeEventListener(m, t, !1) : A((function () {
                        return window[g].removeEventListener({
                            exec: t,
                            handlerName: e
                        })
                    }))
                },
                A = function (e) {
                    return T() ? e() : O("ready", (function () {
                        return e()
                    }))
                },
                P = function (e, t, a) {
                    void 0 === a && (a = function () {}), A((function () {
                        return window[g].dispatch({
                            handlerName: e,
                            params: t,
                            callback: a
                        })
                    }))
                },
                v = function (e, t) {
                    if (void 0 === t && (t = {}), o && !T()) {
                        var a = window.prompt("Soul_dispatchSync", JSON.stringify({
                            handlerName: e,
                            params: t
                        }));
                        return a ? d(a) : {
                            code: -1,
                            data: "",
                            msg: "调用失败"
                        }
                    }
                    if (s && !T()) {
                        a = window["AEJSBridgeSync"].dispatchSync(e, JSON.stringify(t));
                        return a ? d(a) : {
                            code: -1,
                            data: "",
                            msg: "调用失败"
                        }
                    }
                    if (T() && window[g].dispatchSync) {
                        a = window[g].dispatchSync({
                            handlerName: e,
                            params: t
                        });
                        return a ? o ? d(a) : a : {
                            code: -1,
                            data: "",
                            msg: "调用失败"
                        }
                    }
                    return {
                        code: -1,
                        data: "",
                        msg: "调用失败"
                    }
                },
                E = Object.freeze({
                    __proto__: null,
                    on: O,
                    off: R,
                    ready: A,
                    dispatch: P,
                    dispatchSync: v
                }),
                S = {
                    getAppVersion: function () {
                        return v("action_app_getVersion").data || "0.0.1"
                    },
                    getAppMode: function () {
                        return v("action_app_getMode").data || "light"
                    },
                    setAppMode: function (e) {
                        var t = e.mode,
                            a = void 0 === t ? "" : t;
                        return P("action_app_setMode", {
                            mode: a
                        }, p(e))
                    },
                    setAppPermissions: function (e) {
                        var t = e.type,
                            a = void 0 === t ? "" : t;
                        return P("action_app_setPermissions", {
                            type: a
                        }, p(e))
                    },
                    getAppPermissions: function (e) {
                        var t = e.type,
                            a = void 0 === t ? "" : t;
                        return P("action_app_getPermissions", {
                            type: a
                        }, p(e))
                    },
                    setSettings: function (e) {
                        var t = e.type,
                            a = void 0 === t ? "" : t,
                            n = e.status,
                            r = void 0 !== n && n;
                        return P("action_app_setSettings", {
                            type: a,
                            status: r
                        }, p(e))
                    },
                    getSettings: function (e) {
                        var t = e.type,
                            a = void 0 === t ? "" : t;
                        return P("action_app_getSettings", {
                            type: a
                        }, p(e))
                    },
                    setStorage: function (e, t) {
                        return v("action_app_setStorage", {
                            key: e,
                            value: t
                        })
                    },
                    getStorage: function (e) {
                        return v("action_app_getStorage", {
                            key: e
                        }).data || ""
                    },
                    getStatusBarHeight: function () {
                        return v("action_app_getStatusBarHeight").data || 0
                    },
                    getEcptPhone: function (e) {
                        return v("action_app_getEcptPhone", {
                            realPhone: e
                        }).data || ""
                    },
                    getRealPhone: function (e) {
                        return v("action_app_getRealPhone", {
                            ecptPhone: e
                        }).data || ""
                    },
                    picker: function (e) {
                        var t = e.mode,
                            a = void 0 === t ? "" : t;
                        P("action_app_picker", {
                            mode: a
                        }, p(e))
                    },
                    trackEvent: function (e, t, a) {
                        void 0 === a && (a = {});
                        var r = n({
                            eventType: e
                        }, a);
                        "pv" === e ? (r.pageId = t, a.par && (r.par = a.par, sessionStorage.setItem("par", JSON.stringify(a.par))), o && (r.eventId = "PV_REPORT", sessionStorage.setItem("pid", t))) : "clk" !== e && "exp" !== e || (r.eventId = t, sessionStorage.getItem("par") && (r.par = JSON.parse(sessionStorage.getItem("par"))), o && (r.pageId = sessionStorage.getItem("pid") || "")), P("action_event_trackEvent", r)
                    }
                },
                I = {
                    toast: function (e) {
                        var t = e.type,
                            a = e.text,
                            n = e.duration,
                            r = void 0 === n ? 2 : n;
                        P("action_page_toast", {
                            type: t,
                            text: a,
                            duration: r
                        }, p(e))
                    },
                    showNavigation: function (e) {
                        void 0 === e && (e = {}), P("action_page_showNavigation", {}, p(e))
                    },
                    hideNavigation: function (e) {
                        void 0 === e && (e = {}), P("action_page_hideNavigation", {}, p(e))
                    },
                    setNavigationTitle: function (e) {
                        var t = e.title,
                            a = e.titleColor,
                            n = void 0 === a ? "#282828" : a;
                        "dark" !== S.getAppMode() || e.titleColor || (n = "#686881"), P("action_page_setNavigationTitle", {
                            title: t,
                            titleColor: n
                        }, p(e))
                    },
                    setNavigationBackground: function (e) {
                        var t = e.color,
                            a = e.alpha,
                            n = void 0 === a ? 1 : a;
                        P("action_page_setNavigationBackground", {
                            color: t,
                            alpha: n
                        }, p(e))
                    },
                    setNavigationRight: function (e) {
                        var t = e.title,
                            a = void 0 === t ? "" : t,
                            n = e.color,
                            r = void 0 === n ? "#282828" : n,
                            i = e.imageUrl;
                        "dark" !== S.getAppMode() || e.color || (r = "#686881"), P("action_page_setNavigationRight", {
                            title: a,
                            color: r,
                            imageUrl: i
                        }, p(e))
                    },
                    hideNavigationRight: function (e) {
                        void 0 === e && (e = {}), P("action_page_hideNavigationRight", {}, p(e))
                    },
                    setNavigationLeft: function (e) {
                        var t = e.title,
                            a = void 0 === t ? "" : t,
                            n = e.color,
                            r = void 0 === n ? "#000000" : n,
                            i = e.imageUrl;
                        P("action_page_setNavigationLeft", {
                            title: a,
                            color: r,
                            imageUrl: i
                        }, p(e))
                    },
                    onNavigationLeftClick: function (e) {
                        O("action_page_navigationLeftClick", e)
                    },
                    offNavigationLeftClick: function (e) {
                        R("action_page_navigationLeftClick", e)
                    },
                    onNavigationRightClick: function (e) {
                        O("action_page_navigationRightClick", e)
                    },
                    offNavigationRightClick: function (e) {
                        R("action_page_navigationRightClick", e)
                    },
                    onWebviewActivity: function (e) {
                        O("action_page_webviewActivity", e)
                    },
                    offWebviewActivity: function (e) {
                        R("action_page_webviewActivity", e)
                    },
                    onShow: function (e) {
                        O("action_page_show", e)
                    },
                    offShow: function (e) {
                        R("action_page_show", e)
                    },
                    onHide: function (e) {
                        O("action_page_hide", e)
                    },
                    offHide: function (e) {
                        R("action_page_hide", e)
                    },
                    share: function (e) {
                        var t = e.type,
                            a = e.authorize,
                            n = e.fileUrl,
                            r = e.title,
                            i = e.desc,
                            s = e.url,
                            u = e.thumb,
                            o = e.platform,
                            c = e.tags;
                        P("action_page_share", {
                            type: t,
                            authorize: a,
                            fileUrl: n,
                            title: r,
                            desc: i,
                            url: s,
                            thumb: u,
                            platform: o,
                            tags: c
                        }, p(e))
                    },
                    keyboard: function (e) {
                        var t = e.maxLen,
                            a = void 0 === t ? 140 : t,
                            n = e.placeholder,
                            r = void 0 === n ? "" : n,
                            i = e.content,
                            s = void 0 === i ? "" : i;
                        P("action_page_keyboard", {
                            maxLen: a,
                            placeholder: r,
                            content: s
                        }, p(e))
                    }
                },
                h = {
                    canIUse: function (e) {
                        var t = v("action_base_canIUse", {
                            handlerName: e
                        }).data || "false";
                        return "true" === t
                    },
                    uploadFile: function (e) {
                        var t = e.base64,
                            a = e.mimeType;
                        P("action_network_uploadFile", {
                            base64: t,
                            mimeType: a
                        }, p(e))
                    }
                },
                y = {
                    pay: function (e) {
                        P("action_user_pay", e.payload, p(e))
                    },
                    faceId: function (e) {
                        var t = e.token;
                        P("action_user_faceId", {
                            token: t
                        }, p(e))
                    },
                    sendMessage: function (e) {
                        var t = e.type,
                            a = e.fileUrl,
                            n = e.title,
                            r = e.desc,
                            i = e.url,
                            s = e.thumb,
                            u = e.text,
                            o = e.userIdEcpts,
                            c = e.manifest,
                            d = e.params,
                            l = e.groupId,
                            f = e.scene;
                        P("action_user_message", {
                            type: t,
                            fileUrl: a,
                            title: n,
                            desc: r,
                            url: i,
                            thumb: s,
                            text: u,
                            userIdEcpts: o,
                            manifest: c,
                            params: d,
                            groupId: l,
                            scene: f
                        }, p(e))
                    },
                    setUserInfo: function (e) {
                        var t = e.superStar,
                            a = e.faceId,
                            n = e.online,
                            r = e.avatarName,
                            i = e.avatarParams,
                            s = e.oriAvatarName,
                            u = e.sex,
                            o = e.birthday;
                        P("action_user_setUserInfo", {
                            superStar: t,
                            avatarName: r,
                            online: n,
                            avatarParams: i,
                            oriAvatarName: s,
                            faceId: a,
                            sex: u,
                            birthday: o
                        }, p(e))
                    }
                },
                w = {
                    previewImage: function (e) {
                        var t = e.current,
                            a = void 0 === t ? 0 : t,
                            n = e.urls;
                        P("action_media_previewImage", {
                            current: a,
                            urls: n
                        }, p(e))
                    },
                    beautifyImage: function (e) {
                        var t = e.base64,
                            a = void 0 === t ? "" : t,
                            n = e.filterUrl,
                            r = void 0 === n ? "" : n;
                        P("action_media_beautifyImage", {
                            base64: a,
                            filterUrl: r
                        }, p(e))
                    },
                    saveImageToPhotosAlbum: function (e) {
                        var t = e.url;
                        P("action_media_saveImageToPhotosAlbum", {
                            url: t
                        }, p(e))
                    },
                    startRecord: function (e) {
                        void 0 === e && (e = {}), P("action_media_startRecord", {}, p(e))
                    },
                    stopRecord: function (e) {
                        void 0 === e && (e = {}), P("action_media_stopRecord", {}, p(e))
                    }
                },
                N = {
                    switchTab: function (e) {
                        var t = e.activeTab;
                        P("action_router_switchTab", {
                            activeTab: t
                        }, p(e))
                    },
                    redirectTo: function (e) {
                        var t = e.url;
                        P("action_router_redirectTo", {
                            url: t
                        }, p(e))
                    },
                    navigateTo: function (e) {
                        var t = e.url,
                            a = e.opacity,
                            n = void 0 === a ? 1 : a,
                            r = e.invisibleLoad,
                            i = void 0 === r ? 0 : r;
                        P("action_router_navigateTo", {
                            url: t,
                            opacity: n,
                            invisibleLoad: i
                        }, p(e))
                    },
                    navigateBack: function (e) {
                        void 0 === e && (e = {});
                        var t = e.delta,
                            a = void 0 === t ? 1 : t;
                        P("action_router_navigateBack", {
                            delta: a
                        }, p(e))
                    },
                    navigateToApp: function (e) {
                        o && "qq" === e ? location.href = "mqq://" : o && "weixin" === e ? location.href = "weixin://" : s && v("action_router_navigateToApp", {
                            platform: e
                        })
                    },
                    navigateToNative: function (e) {
                        P("action_router_navigateToNative", {
                            url: e
                        })
                    },
                    navigateToProgram: function (e) {
                        var t = e.appId,
                            a = e.path,
                            n = void 0 === a ? "" : a,
                            r = e.query,
                            i = void 0 === r ? {} : r;
                        P("action_event_toSoulProgram", {
                            appId: t,
                            path: n,
                            query: i
                        })
                    }
                },
                U = {
                    scanCode: function (e) {
                        void 0 === e && (e = {});
                        var t = e.onlyFromCamera,
                            a = void 0 === t ? 1 : t;
                        P("action_device_scanCode", {
                            onlyFromCamera: a
                        }, p(e))
                    },
                    createQRCode: function (e) {
                        var t = e.text,
                            a = void 0 === t ? "" : t,
                            n = e.size,
                            r = void 0 === n ? 400 : n,
                            i = e.image,
                            s = void 0 === i ? "https://img.soulapp.cn/image/2020-01-02/4626a9af-cda4-490f-ad78-b80212048d30-1577956009839.png" : i;
                        P("action_device_createQRCode", {
                            text: a,
                            size: r,
                            image: s,
                            imageSize: r / 8
                        }, p(e))
                    }
                },
                C = {
                    get: function (e) {
                        return G(e.url, "GET", e)
                    },
                    put: function (e) {
                        return G(e.url, "PUT", e)
                    },
                    post: function (e) {
                        return G(e.url, "POST", e)
                    }
                };

            function G(e, t, a) {
                console.log(e, a.data)//t, a)

                resolve(e,t,a)
                // var n = a.data,
                //     i = void 0 === n ? {} : n,
                //     s = a.header,
                //     u = void 0 === s ? {} : s,
                //     o = a.fail,
                //     c = void 0 === o ? r : o,
                //     d = a.success,
                //     p = void 0 === d ? r : d,
                //     l = a.complete,
                //     f = void 0 === l ? r : l;

                // fetch(e, {
                //     method: t,
                //     headers: u,
                //     mode: 'cors', // no-cors, *cors, same-origin
                //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //     credentials: 'same-origin', // include, *same-origin, omit
                //     // body: "string" === typeof i ? i : b(i)
                //     // JSON.stringify(data)
                // })
                //     .then(response => {
                //         console.log(response);
                //         debugger
                //         return response.json();
                //     })
                //     .then(data => {
                //         console.log(data);
                //         // return data;
                //         f(data)
                //     });
                // P("action_network_request", {
                //     url: e,
                //     data: "string" === typeof i ? i : b(i),
                //     header: u,
                //     method: t
                // }, (function (e) {
                //     0 === e.code && p 
                //     ? p("string" === typeof e.data ? JSON.parse(e.data || "{}") : e.data) 
                //     : c && (!e.msg || -1 === e.msg.indexOf("out") && -1 === e.msg.indexOf("connect") || (e.msg = "网络请求异常[8001]"), c(e)), f && (0 === e.code ? f("string" === typeof e.data ? JSON.parse(e.data || "{}") : e.data) : (!e.msg || -1 === e.msg.indexOf("out") && -1 === e.msg.indexOf("connect") || (e.msg = "网络请求异常[8001]"), f(e)))
                // }))
            }

            function b(e) {
                return Object.keys(e).reduce((function (t, a) {
                    return e[a] && (t[a] = e[a]), c(t[a]) && (t[a] = t[a].toString()), t
                }), {})
            }
            var q = {
                    createGroupPage: function () {
                        location.href = "soul://ul.soulapp.cn/chat/groupCreatePage"
                    },
                    toGroupSquare: function () {
                        location.href = "soul://ul.soulapp.cn/chat/groupSquare"
                    }
                },
                L = n(n(n(n(n(n(n(n(n(n({
                    ua: i
                }, S), E), h), I), y), w), N), U), q), {
                    isIOS: o,
                    request: C,
                    version: "1.60.0",
                    isAndroid: s,
                    compareVersion: l,
                    parseQueryString: f
                });
            e.exports = L
        },
        c949: function (e, t, a) {
            "use strict";
            a.d(t, "V", (function () {
                return Ge
            })), a.d(t, "kb", (function () {
                return qe
            })), a.d(t, "lb", (function () {
                return Le
            })), a.d(t, "J", (function () {
                return Ye
            })), a.d(t, "t", (function () {
                return Me
            })), a.d(t, "bb", (function () {
                return De
            })), a.d(t, "C", (function () {
                return xe
            })), a.d(t, "k", (function () {
                return ze
            })), a.d(t, "cb", (function () {
                return Be
            })), a.d(t, "U", (function () {
                return ke
            })), a.d(t, "eb", (function () {
                return Ve
            })), a.d(t, "q", (function () {
                return He
            })), a.d(t, "s", (function () {
                return Fe
            })), a.d(t, "H", (function () {
                return Je
            })), a.d(t, "M", (function () {
                return We
            })), a.d(t, "N", (function () {
                return je
            })), a.d(t, "pb", (function () {
                return Xe
            })), a.d(t, "jb", (function () {
                return $e
            })), a.d(t, "f", (function () {
                return Qe
            })), a.d(t, "ib", (function () {
                return Ke
            })), a.d(t, "e", (function () {
                return Ze
            })), a.d(t, "u", (function () {
                return et
            })), a.d(t, "l", (function () {
                return tt
            })), a.d(t, "T", (function () {
                return at
            })), a.d(t, "G", (function () {
                return rt
            })), a.d(t, "I", (function () {
                return it
            })), a.d(t, "v", (function () {
                return st
            })), a.d(t, "L", (function () {
                return ut
            })), a.d(t, "d", (function () {
                return ot
            })), a.d(t, "c", (function () {
                return ct
            })), a.d(t, "K", (function () {
                return dt
            })), a.d(t, "nb", (function () {
                return pt
            })), a.d(t, "ob", (function () {
                return lt
            })), a.d(t, "x", (function () {
                return ft
            })), a.d(t, "X", (function () {
                return gt
            })), a.d(t, "W", (function () {
                return mt
            })), a.d(t, "hb", (function () {
                return _t
            })), a.d(t, "r", (function () {
                return Tt
            })), a.d(t, "m", (function () {
                return Ot
            })), a.d(t, "n", (function () {
                return Rt
            })), a.d(t, "h", (function () {
                return At
            })), a.d(t, "j", (function () {
                return Pt
            })), a.d(t, "O", (function () {
                return vt
            })), a.d(t, "mb", (function () {
                return Et
            })), a.d(t, "P", (function () {
                return St
            })), a.d(t, "Q", (function () {
                return It
            })), a.d(t, "i", (function () {
                return ht
            })), a.d(t, "B", (function () {
                return yt
            })), a.d(t, "Z", (function () {
                return wt
            })), a.d(t, "ab", (function () {
                return Nt
            })), a.d(t, "g", (function () {
                return Ut
            })), a.d(t, "Y", (function () {
                return Ct
            })), a.d(t, "S", (function () {
                return Gt
            })), a.d(t, "R", (function () {
                return bt
            })), a.d(t, "F", (function () {
                return qt
            })), a.d(t, "w", (function () {
                return Lt
            })), a.d(t, "D", (function () {
                return Yt
            })), a.d(t, "E", (function () {
                return Mt
            })), a.d(t, "b", (function () {
                return Dt
            })), a.d(t, "a", (function () {
                return xt
            })), a.d(t, "A", (function () {
                return zt
            })), a.d(t, "z", (function () {
                return Bt
            })), a.d(t, "p", (function () {
                return kt
            })), a.d(t, "db", (function () {
                return Vt
            })), a.d(t, "fb", (function () {
                return Ht
            })), a.d(t, "o", (function () {
                return Ft
            })), a.d(t, "y", (function () {
                return Jt
            })), a.d(t, "gb", (function () {
                return Wt
            }));
            var n = {};
            a.r(n), a.d(n, "GET_USER_BASIC_INFO", (function () {
                return d
            })), a.d(n, "GET_DRAFT", (function () {
                return p
            })), a.d(n, "CREATE_PAY_URL", (function () {
                return l
            })), a.d(n, "GET_SUITE_URL", (function () {
                return f
            })), a.d(n, "GET_CARD_COUNT_URL", (function () {
                return g
            })), a.d(n, "GET_RANDOM_AVATAR_URL", (function () {
                return m
            })), a.d(n, "CREATE_DRAFT_URL", (function () {
                return _
            })), a.d(n, "CLEAN_DRAFT_URL", (function () {
                return T
            })), a.d(n, "GET_USER_INFO_URL", (function () {
                return O
            })), a.d(n, "GET_AVATAR_PARAMS_URL", (function () {
                return R
            })), a.d(n, "GET_USER_AVATAR_PARAMS_URL", (function () {
                return A
            })), a.d(n, "UPDATE_USER_INFO_URL", (function () {
                return P
            })), a.d(n, "GET_IS_PURCHASE_URL", (function () {
                return v
            })), a.d(n, "GET_PURCHASE_IDS_URL", (function () {
                return E
            })), a.d(n, "GET_GIFT_DATA_URL", (function () {
                return S
            })), a.d(n, "GET_PURCHASE_DATA_URL", (function () {
                return I
            })), a.d(n, "GET_GIFT_DETAIL_URL", (function () {
                return h
            })), a.d(n, "CREATE_AND_GIFT_URL", (function () {
                return y
            })), a.d(n, "CREATE_USER_AVATAR_PARAMS_URL", (function () {
                return w
            })), a.d(n, "GET_USER_FUNCTION_CODE_URL", (function () {
                return N
            })), a.d(n, "CREATE_TEMP_USER_AVATAR_PARAMS_URL", (function () {
                return U
            })), a.d(n, "GET_PURCHASE_RECORD_URL", (function () {
                return C
            })), a.d(n, "GET_TARGET_USER_AVATAR_PARAMS_URL", (function () {
                return G
            })), a.d(n, "SUBMITE_FOLLOW", (function () {
                return b
            })), a.d(n, "GET_PRIVILEGE_LIST", (function () {
                return q
            })), a.d(n, "GET_PURCHASED_LIST", (function () {
                return L
            })), a.d(n, "GET_GIVE_LIST", (function () {
                return Y
            })), a.d(n, "GET_RECEIVE_LIST", (function () {
                return M
            })), a.d(n, "CHANGE_RECEIVE_USE_STATE", (function () {
                return D
            })), a.d(n, "CHANGE_USE_STATE", (function () {
                return x
            })), a.d(n, "GET_PRODUCT_LIST", (function () {
                return z
            })), a.d(n, "GET_PRODUCT_LIST_V2", (function () {
                return B
            })), a.d(n, "GET_MALL_BANNER", (function () {
                return k
            })), a.d(n, "GET_RANDOM_USERS", (function () {
                return V
            })), a.d(n, "BUY_GOODS", (function () {
                return H
            })), a.d(n, "GET_GOODS_INFO", (function () {
                return F
            })), a.d(n, "GET_WHITE_LIST", (function () {
                return J
            })), a.d(n, "GET_VERIFY_STATE", (function () {
                return W
            })), a.d(n, "SAVE_CONTRIBUTE", (function () {
                return j
            })), a.d(n, "GET_CONTRIBUTE_HISTORY_0", (function () {
                return X
            })), a.d(n, "GET_CONTRIBUTE_HISTORY_1", (function () {
                return $
            })), a.d(n, "GET_CONTRIBUTE_HISTORY_2", (function () {
                return Q
            })), a.d(n, "GET_CONTRIBUTE_HISTORY_3", (function () {
                return K
            })), a.d(n, "GET_STORE_COUNT", (function () {
                return Z
            })), a.d(n, "GET_PRICE_LIST", (function () {
                return ee
            })), a.d(n, "GET_AVATAR_NAME", (function () {
                return te
            })), a.d(n, "DELETE_AVATAR", (function () {
                return ae
            })), a.d(n, "GET_AB", (function () {
                return ne
            })), a.d(n, "GET_SEARCH_AVATAR", (function () {
                return re
            })), a.d(n, "GET_SUPER_LIMIT_DAY", (function () {
                return ie
            })), a.d(n, "GET_SUPER_LIMIT_LIST", (function () {
                return se
            })), a.d(n, "GET_RANDOM_RECOMMEND_LIST", (function () {
                return ue
            })), a.d(n, "GET_NEW_SCENE_MODULE", (function () {
                return oe
            })), a.d(n, "GET_WITHDRAW_OVERAGE", (function () {
                return ce
            })), a.d(n, "GET_WITHDRAW_PRE_APPLY", (function () {
                return de
            })), a.d(n, "CREATE_WITHDRAW_APPLY", (function () {
                return pe
            })), a.d(n, "GET_WITHDRAW_HISTORY", (function () {
                return le
            })), a.d(n, "GET_PRICE_RANGE", (function () {
                return fe
            })), a.d(n, "GET_EXPIRED_LIST", (function () {
                return ge
            })), a.d(n, "GET_GOODS_BY_ID", (function () {
                return me
            })), a.d(n, "GET_PENDANT_LIST", (function () {
                return _e
            })), a.d(n, "GET_PENDANT_STATUS", (function () {
                return Te
            })), a.d(n, "GET_MY_PENDANT_LIST", (function () {
                return Oe
            })), a.d(n, "BUY_PENDANT", (function () {
                return Re
            })), a.d(n, "USE_PENDANT", (function () {
                return Ae
            })), a.d(n, "GET_MY_PENDANTS", (function () {
                return Pe
            })), a.d(n, "GET_BLINDBOX_WAREHOUSE", (function () {
                return ve
            })), a.d(n, "RECEIVE_BLINDBOX_WAREHOUSE", (function () {
                return Ee
            })), a.d(n, "RECYCLE_BLINDBOX_WAREHOUSE", (function () {
                return Se
            })), a.d(n, "GET_BLINDBOX_LIST", (function () {
                return Ie
            })), a.d(n, "GET_LOTTERY_INFO", (function () {
                return he
            })), a.d(n, "RUN_LOTTERY", (function () {
                return ye
            })), a.d(n, "GET_TARGET_USERINFO", (function () {
                return we
            }));
            const r = "production",
                i = "development" === r,
                s = "test" === r && "pre-app.soulapp-inc.cn" === location.hostname,
                u = "test" === r && "test-app.soulapp-inc.cn" === location.hostname;
            let o = {
                APIA_ROOT: "https://api-a.soulapp.cn",
                PAY_ROOT: "https://api-pay.soulapp.cn",
                UCC_ROOT: "https://api-ucc.soulapp.cn",
                USER_ROOT: "https://api-user.soulapp.cn",
                GUEST_ROOT: "https://api-guest.soulapp.cn",
                ACCOUNT_ROOT: "https://api-account.soulapp.cn",
                GROUP_MESSAGE: "https://group-message.soulapp.cn",
                EXPERIMENT_ROOT: "https://photon-open-api.soulapp.cn",
                ACTIVITY_ROOT: "https://activity.soulapp.cn"
            };
            i ? o = {
                PAY_ROOT: "http://pay-openapi.c.t.soulapp-inc.cn",
                UCC_ROOT: "http://ucc-openapi.c.t.soulapp-inc.cn",
                APIA_ROOT: "http://openapi.c.t.soulapp-inc.cn",
                USER_ROOT: "http://user-openapi.c.t.soulapp-inc.cn",
                GUEST_ROOT: "http://guest-openapi.c.t.soulapp-inc.cn",
                ACCOUNT_ROOT: "http://account-openapi.c.t.soulapp-inc.cn",
                GROUP_MESSAGE: "http://group-message-openapi.c.t.soulapp-inc.cn",
                EXPERIMENT_ROOT: "https://photon-open-api.soulapp.cn",
                ACTIVITY_ROOT: "http://soul-activity-openapi.c.t.soulapp-inc.cn"
            } : u ? o = {
                PAY_ROOT: "http://pay-openapi.c.t.soulapp-inc.cn",
                UCC_ROOT: "http://ucc-openapi.c.t.soulapp-inc.cn",
                APIA_ROOT: "http://openapi.c.t.soulapp-inc.cn",
                USER_ROOT: "http://user-openapi.c.t.soulapp-inc.cn",
                GUEST_ROOT: "http://guest-openapi.c.t.soulapp-inc.cn",
                ACCOUNT_ROOT: "http://account-openapi.c.t.soulapp-inc.cn",
                GROUP_MESSAGE: "http://group-message-openapi.c.t.soulapp-inc.cn",
                EXPERIMENT_ROOT: "http://soul-photon-open-api.c.t.soulapp-inc.cn",
                ACTIVITY_ROOT: "http://soul-activity-openapi.c.t.soulapp-inc.cn"
            } : s && (o = {
                PAY_ROOT: "https://pre-pay.soulapp.cn",
                UCC_ROOT: "http://pre-ucc.soulapp-inc.cn",
                APIA_ROOT: "http://pre-api.soulapp-inc.cn",
                USER_ROOT: "http://pre-user.soulapp-inc.cn",
                GUEST_ROOT: "http://pre-guest.soulapp-inc.cn",
                ACCOUNT_ROOT: "http://pre-account.soulapp-inc.cn",
                GROUP_MESSAGE: "http://pre-group-message.soulapp.cn",
                EXPERIMENT_ROOT: "http://pre-photon-open-api.soulapp-inc.cn",
                ACTIVITY_ROOT: "http://pre-activity.soulapp-inc.cn"
            });
            var c = o;
            const d = c.USER_ROOT + "/user/simpleInfo",
                p = c.APIA_ROOT + "/cuteface/getDraft",
                l = c.APIA_ROOT + "/cuteface/pay",
                f = c.APIA_ROOT + "/cuteface/getAllSuit",
                g = c.APIA_ROOT + "/kneadCard/count",
                m = c.APIA_ROOT + "/random/avatar",
                _ = c.APIA_ROOT + "/cuteface/saveDraft",
                T = c.APIA_ROOT + "/cuteface/cleanDraft",
                O = c.APIA_ROOT + "/show/superVIP/detail",
                R = c.USER_ROOT + "/avatar/getParams",
                A = c.USER_ROOT + "/user/ext/info",
                P = c.USER_ROOT + "/v3/update/user/info",
                v = c.APIA_ROOT + "/cuteface/hasPurchase",
                E = c.APIA_ROOT + "/cuteface/getPayItems",
                S = c.APIA_ROOT + "/cuteface/getGiftNeedPay",
                I = c.APIA_ROOT + "/cuteface/getAllItems",
                h = c.APIA_ROOT + "/cuteface/getGiftDetail",
                y = c.APIA_ROOT + "/cuteface/createAndGift",
                w = c.USER_ROOT + "/avatar/update",
                N = c.USER_ROOT + "/user/friend/function",
                U = c.USER_ROOT + "/avatar/saveTemp",
                C = c.APIA_ROOT + "/cuteface/getPurchaseRecord",
                G = c.APIA_ROOT + "/cuteface/getCuteFaceInfo",
                b = c.USER_ROOT + "/v2/follow/users",
                q = c.PAY_ROOT + "/personalizeMall/getPrivilegeList",
                L = c.PAY_ROOT + "/personalizeMall/purchaseRecords",
                Y = c.PAY_ROOT + "/personalizeMall/giveList",
                M = c.PAY_ROOT + "/personalizeMall/receiveList",
                D = c.PAY_ROOT + "/personalizeMall/changeUseStateByCommodityIdentity",
                x = c.PAY_ROOT + "/personalizeMall/changeUseState",
                z = c.PAY_ROOT + "/mall/avatar/product",
                B = c.PAY_ROOT + "/mall/avatar/product/v2",
                k = c.PAY_ROOT + "/mall/banner",
                V = c.PAY_ROOT + "/mall/creator",
                H = c.PAY_ROOT + "/personalizeMall/purchase",
                F = c.PAY_ROOT + "/mall/query/privilege",
                J = c.PAY_ROOT + "/mall/query/white",
                W = c.PAY_ROOT + "/personalmall/commoditydraf/user/rname/state",
                j = c.PAY_ROOT + "/personalmall/commoditydraf/save",
                X = c.PAY_ROOT + "/personalmall/commoditydraf/page/onsale",
                $ = c.PAY_ROOT + "/personalmall/commoditydraf/page/passed",
                Q = c.PAY_ROOT + "/personalmall/commoditydraf/page/auditing",
                K = c.PAY_ROOT + "/personalmall/commoditydraf/page/notpassed",
                Z = c.PAY_ROOT + "/personalmall/commoditydraf/status/counts",
                ee = c.PAY_ROOT + "/personalmall/commoditydraf/default/prices",
                te = c.USER_ROOT + "/avatar/getAvatarName",
                ae = c.USER_ROOT + "/avatar/delete",
                ne = c.EXPERIMENT_ROOT + "/experiment/listConfig",
                re = c.PAY_ROOT + "/mall/query/commodity",
                ie = c.PAY_ROOT + "/mall/query/super/day",
                se = c.PAY_ROOT + "/mall/avatar/product/super",
                ue = c.PAY_ROOT + "/mall/avatar/product/recommend",
                oe = c.USER_ROOT + "/furion/position/content",
                ce = c.PAY_ROOT + "/withdrawal/account/amount",
                de = c.PAY_ROOT + "/withdrawal/preorder",
                pe = c.PAY_ROOT + "/withdrawal/order",
                le = c.PAY_ROOT + "/withdrawal/history",
                fe = c.PAY_ROOT + "/personalmall/commoditydraf/default/prices/range",
                ge = c.PAY_ROOT + "/personalizeMall/headPortraits/expired",
                me = c.PAY_ROOT + "/mall/query/commodity/byItemIdentity",
                _e = c.PAY_ROOT + "/mall/pendant/product",
                Te = c.PAY_ROOT + "/mall/query/pendant/privilege",
                Oe = c.PAY_ROOT + "/personalizeMall/getPendantList",
                Re = c.PAY_ROOT + "/personalizeMall/purchasePendant",
                Ae = c.PAY_ROOT + "/personalizeMall/changePendantState",
                Pe = c.PAY_ROOT + "/user/guard/list",
                ve = c.PAY_ROOT + "/personalizeMall/blindBoxRecord/list",
                Ee = c.PAY_ROOT + "/personalizeMall/blindBoxRecord/receive",
                Se = c.PAY_ROOT + "/personalizeMall/blindBoxRecord/recycle",
                Ie = c.ACTIVITY_ROOT + "/personalityMail/queryHeadPortraitBox",
                he = c.APIA_ROOT + "/lottery/prize-table",
                ye = c.APIA_ROOT + "/lottery/run",
                we = c.APIA_ROOT + "/html/user/userDetail";
            var Ne = a("c4a0"),
                Ue = a.n(Ne);
            const Ce = e => parseInt(e, 10);

            function Ge(e, t = "") {
                return new Promise(a => {
                    e ? be(t).then(e => a(e ? {
                        ...e,
                        sex: Ce(e.sex.toString())
                    } : null)).catch(() => a(null)) : Ue.a.request.get({
                        url: A,
                        success: e => {
                            if (e.data && e.data.avatarParams) {
                                const t = JSON.parse(e.data.avatarParams);
                                a({
                                    ...t,
                                    sex: Ce(t.sex)
                                })
                            } else a(null)
                        },
                        fail: () => a(null)
                    })
                })
            }

            function be(e) {
                return "/" !== e[0] && (e = "/" + e), new Promise((t, a) => {
                    Ue.a.request.get({
                        data: {
                            avatarName: e
                        },
                        url: R,
                        success: e => t(e.data ? JSON.parse(e.data.avatarParams) : null),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function qe(e, t, a) {
                Ue.a.dispatch("action_user_saveAvatar", {
                    type: e,
                    base64: t,
                    data: a
                })
            }

            function Le(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.post({
                        url: w,
                        data: {
                            avatarSvg: e,
                            avatarParams: t
                        },
                        success: e => a(e.data),
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function Ye(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        url: m,
                        data: {
                            pageSize: "32",
                            pageIndex: "0",
                            gender: e.toString(),
                            type: t ? "1" : "2"
                        },
                        success: e => a(e.data),
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function Me() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: g,
                        success: t => e(t.data.count || 0),
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function De() {
                return new Promise(e => {
                    Ue.a.request.get({
                        url: v,
                        success: t => e(t.data.hasPurchase),
                        fail: () => e(!1)
                    })
                })
            }

            function xe(e, t) {
                let a = {};
                return "1" === e ? a = {
                    getType: e
                } : "2" === e && (a = {
                    getType: e,
                    targetUserIdEcpt: t
                }), new Promise((e, t) => {
                    Ue.a.request.get({
                        data: a,
                        url: E,
                        success: t => e(t.data || {}),
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function ze(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        data: {
                            getType: e
                        },
                        url: I,
                        success: e => {
                            a((e.data.cuteFaceItems || []).reduce((e, a) => (e[a.categoryAlias] || (e[a.categoryAlias] = []), e[a.categoryAlias] = [...e[a.categoryAlias], {
                                pUrl: a.itemUrl,
                                id: Number(a.itemId),
                                type: a.categoryAlias,
                                price: Number(a.price),
                                vipPrice: Number(a.vipPrice || 0),
                                vipExclusive: a.vipExclusive || !1,
                                chargeType: Number(a.chargeType),
                                originalPrice: Number(a.originalPrice),
                                purchasedFlag: -1 === t.indexOf(a.itemId) ? 0 : 1
                            }], e), {}))
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function Be(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        data: e,
                        url: l,
                        success: () => t(!0),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function ke() {
                return new Promise((e, t) => {
                    console.log(O)
                    Ue.a.request.get({
                        url: O,
                        success: t => {
                            console.log(O, t.data)
                            return e(t.data)
                        },
                        fail: e => {
                            console.log(e.msg)
                            return t({
                                message: e.msg
                            })
                        }
                    })
                })
            }

            function Ve(e, t) {
                Ue.a.dispatch("action_user_toPay", {
                    balance: e,
                    sourceCode: "0401"
                }, t)
            }

            function He(e) {
                Ue.a.dispatch("action_user_getSBNumber", {}, e)
            }

            function Fe(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        data: {
                            targetUserIdEcpt: e
                        },
                        url: G,
                        success: e => {
                            e && e.data ? e.data.avatarParams ? t(Object.assign({}, JSON.parse(e.data.avatarParams), {
                                superVIP: e.data.superVIP
                            })) : t({
                                sex: "",
                                bgColor: "",
                                resources: [],
                                superVIP: e.data.superVIP
                            }) : a()
                        }
                    })
                })
            }

            function Je(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        url: C,
                        data: t ? {
                            payType: e,
                            pageCursor: t
                        } : {
                            payType: e
                        },
                        success: e => {
                            e.data.results = e.data.results.map(e => (e.createTimeText = nt(e.createTime), e)), a(e.data)
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function We(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        data: {
                            giftId: e
                        },
                        url: h,
                        success: e => t(JSON.parse(e.data.avatarParams)),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function je(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        data: {
                            giftId: e
                        },
                        url: S,
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Xe(e, t, a) {
                const n = {
                    avatarName: e
                };
                return t && (n.avatarBgColor = "HeaderColor_" + t), a && (n.avatarParams = a), new Promise(e => {
                    Ue.a.request.put({
                        data: n,
                        url: P,
                        success: () => e()
                    })
                })
            }

            function $e(e, t, a) {
                return new Promise((n, r) => {
                    Ue.a.request.post({
                        url: U,
                        data: {
                            avatarName: t,
                            avatarParams: e,
                            oriAvatarName: a
                        },
                        success: e => n(e.data),
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function Qe(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        data: e,
                        url: y,
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Ke(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: _,
                        data: {
                            avatarParams: e
                        },
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Ze() {
                return new Promise((e, t) => {
                    Ue.a.request.post({
                        url: T,
                        success: t => e(t.data),
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function et() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: p,
                        success: t => {
                            if (t.data && t.data.tempAvatar && t.data.tempAvatar.avatarParams) {
                                const a = JSON.parse(t.data.tempAvatar.avatarParams);
                                e({
                                    ...a,
                                    sex: Ce(a.sex)
                                })
                            } else e(null)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function tt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: f,
                        data: {
                            gender: e
                        },
                        success: e => {
                            e.data && e.data.suits ? e.data.suits = e.data.suits.map(e => (e.itemIdListStr = e.itemIdList.map(e => Number(e)).sort((e, t) => e - t).join(""), e)) : t([]), t(e.data && e.data.suits ? e.data.suits : [])
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function at() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: N,
                        success: t => {
                            e(t.data ? t.data.map(e => e.functionCode) : [])
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function nt(e) {
                const t = new Date(e),
                    a = e => e < 10 ? "0" + e : e;
                return [`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())} `, `${a(t.getHours())}:${a(t.getMinutes())}`].join("")
            }

            function rt(e, t = 10) {
                const a = e ? {
                    pageSize: String(t),
                    pageCursor: e
                } : {
                    pageSize: String(t)
                };
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: q,
                        success: t => {
                            e(t.data)
                        },
                        data: a,
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function it(e, t = 10) {
                const a = e ? {
                    pageSize: String(t),
                    pageCursor: e
                } : {
                    pageSize: String(t)
                };
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: L,
                        success: t => {
                            e(t.data)
                        },
                        data: a,
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function st(e, t = 10) {
                const a = e ? {
                    pageSize: String(t),
                    pageCursor: e
                } : {
                    pageSize: String(t)
                };
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: Y,
                        success: t => {
                            e(t.data)
                        },
                        data: a,
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function ut(e, t = 10) {
                const a = e ? {
                    pageSize: String(t),
                    pageCursor: e
                } : {
                    pageSize: String(t)
                };
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: M,
                        success: t => {
                            e(t.data)
                        },
                        data: a,
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function ot(e, t, a) {
                return new Promise((n, r) => {
                    Ue.a.request.post({
                        url: x,
                        success: e => {
                            n(e.data)
                        },
                        data: {
                            id: String(e),
                            commodityIdentity: t,
                            useState: String(a)
                        },
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function ct(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.post({
                        url: D,
                        success: e => {
                            a(e.data)
                        },
                        data: {
                            commodityIdentity: e,
                            useState: String(t)
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function dt(e = "4") {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: V,
                        success: e => {
                            t(e.data)
                        },
                        data: {
                            size: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function pt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: "" + b,
                        data: {
                            userIdEcpt: e
                        },
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function lt(e, t, a = "1") {
                return new Promise((n, r) => {
                    Ue.a.request.post({
                        url: "" + H,
                        data: t ? {
                            commodityIdentity: e,
                            targetUserIdEcpt: t,
                            sourceCode: a
                        } : {
                            commodityIdentity: e,
                            sourceCode: a
                        },
                        success: e => n(e.data),
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function ft(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: F,
                        success: e => {
                            t(e.data)
                        },
                        data: {
                            itemIdentity: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function gt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: J,
                        success: e => {
                            t(e.data)
                        },
                        data: {
                            userIdEcpt: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function mt() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: W,
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function _t(e, t, a, n, r, i) {
                return new Promise((s, u) => {
                    Ue.a.request.post({
                        url: j,
                        success: e => {
                            s(e.data)
                        },
                        data: {
                            commodityName: e,
                            commodityPicUrl: t,
                            price: String(a),
                            gender: String(n),
                            avatarAttr: r,
                            avatarName: i
                        },
                        fail: e => u({
                            message: e.msg
                        })
                    })
                })
            }

            function Tt(e, t, a = 10) {
                const r = n["GET_CONTRIBUTE_HISTORY_" + e],
                    i = {
                        pageSize: String(a)
                    };
                return t && (i.cursor = String(t)), new Promise((e, t) => {
                    Ue.a.request.get({
                        url: r,
                        success: t => {
                            e(t.data)
                        },
                        data: i,
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function Ot() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: A,
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function Rt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: te,
                        success: e => {
                            t(e.data)
                        },
                        data: {
                            avatarParams: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function At(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: ae,
                        success: e => {
                            t(e.data)
                        },
                        data: {
                            deleteAvatarNames: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Pt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: ne,
                        success: a => {
                            const {
                                exps: n = null
                            } = a.data;
                            t(n && n[e] && n[e].value ? n[e].value : "")
                        },
                        data: {
                            code: String(e)
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function vt() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: Z,
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function Et(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: re,
                        data: {
                            commodityName: e
                        },
                        success: e => {
                            t(e.data)
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function St() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: ie,
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function It(e, t = 10, a) {
                return new Promise((n, r) => {
                    Ue.a.request.get({
                        url: se,
                        data: a ? {
                            source: String(e),
                            pageSize: String(t),
                            pageCursor: a
                        } : {
                            source: String(e),
                            pageSize: String(t)
                        },
                        success: e => {
                            n(e.data)
                        },
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function ht(e, t, a = 30) {
                return new Promise((n, r) => {
                    Ue.a.request.get({
                        url: ue,
                        data: {
                            source: String(e),
                            first: String(t),
                            pageSize: String(a)
                        },
                        success: e => {
                            n(e.data)
                        },
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }
            const yt = e => new Promise((t, a) => {
                Ue.a.request.get({
                    url: oe,
                    data: {
                        sceneCodeList: e
                    },
                    success: e => {
                        t(e.data)
                    },
                    fail: e => a({
                        message: e.msg
                    })
                })
            });

            function wt() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: ce,
                        data: {
                            businessType: "1"
                        },
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function Nt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: de,
                        data: {
                            businessType: "1",
                            amount: String(e)
                        },
                        success: e => {
                            t(e.data)
                        },
                        fail: e => a({
                            message: e
                        })
                    })
                })
            }

            function Ut(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: pe,
                        data: {
                            businessType: "1",
                            orderNo: e
                        },
                        success: e => {
                            t(e.data)
                        },
                        fail: e => a({
                            message: e
                        })
                    })
                })
            }

            function Ct(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        url: le,
                        data: {
                            businessType: "1",
                            pageSize: String(e),
                            lastCreateTime: t ? String(t) : ""
                        },
                        success: e => {
                            a(e.data)
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }
            const Gt = () => new Promise((e, t) => {
                    Ue.a.request.get({
                        url: d,
                        data: {},
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                }),
                bt = e => new Promise((t, a) => {
                    Ue.a.request.get({
                        url: we,
                        data: {
                            userIdEcpt: e
                        },
                        success: e => {
                            t(e.data)
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                }),
                qt = () => new Promise((e, t) => {
                    Ue.a.request.get({
                        url: fe,
                        success: t => {
                            e(t.data)
                        },
                        fail: e => t({
                            message: e.msg
                        })
                    })
                });
            const Lt = e => new Promise((t, a) => {
                Ue.a.request.get({
                    url: me,
                    data: {
                        itemIdentity: e
                    },
                    success: e => {
                        t(e.data)
                    },
                    fail: e => a({
                        message: e.msg
                    })
                })
            });

            function Yt(e, t = 30, a = "") {
                return new Promise((n, r) => {
                    Ue.a.request.get({
                        url: _e,
                        success: e => n(e.data),
                        data: {
                            source: String(e),
                            pageSize: String(t),
                            pageCursor: a
                        },
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function Mt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: Te,
                        success: e => t(e.data),
                        data: {
                            itemIdentity: e
                        },
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Dt(e, t = "", a = "MALL_PENDANT", n = "1") {
                return new Promise((r, i) => {
                    Ue.a.request.post({
                        url: Re,
                        data: {
                            commodityIdentity: e,
                            targetUserIdEcpt: t,
                            amount: n,
                            businessType: a
                        },
                        success: e => r(e.data),
                        fail: e => i({
                            message: e.msg
                        })
                    })
                })
            }

            function xt(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.post({
                        url: Ae,
                        success: e => a(e.data),
                        data: {
                            commodityIdentity: e,
                            useState: String(t)
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function zt(e, t = 15) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        url: Oe,
                        success: e => a(e.data),
                        data: {
                            pageSize: String(t),
                            pageNum: String(e)
                        },
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function Bt() {
                return new Promise((e, t) => {
                    Ue.a.request.get({
                        url: Pe,
                        success: t => e(t.data),
                        fail: e => t({
                            message: e.msg
                        })
                    })
                })
            }

            function kt(e, t, a = 15) {
                return new Promise((n, r) => {
                    Ue.a.request.get({
                        url: ve,
                        data: {
                            processState: e,
                            pageCursor: t,
                            pageSize: String(a)
                        },
                        success: e => n(e.data),
                        fail: e => r({
                            message: e.msg
                        })
                    })
                })
            }

            function Vt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: Ee,
                        data: {
                            blindBoxRecordId: e
                        },
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Ht(e) {
                return new Promise((t, a) => {
                    Ue.a.request.post({
                        url: Se,
                        data: {
                            blindBoxRecordId: e
                        },
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Ft(e, t = 10) {
                return new Promise((a, n) => {
                    Ue.a.request.get({
                        url: Ie,
                        data: {
                            pageCursor: e,
                            pageSize: String(t)
                        },
                        success: e => a(e.data),
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }

            function Jt(e) {
                return new Promise((t, a) => {
                    Ue.a.request.get({
                        url: he,
                        data: {
                            sceneId: String(e)
                        },
                        success: e => t(e.data),
                        fail: e => a({
                            message: e.msg
                        })
                    })
                })
            }

            function Wt(e, t) {
                return new Promise((a, n) => {
                    Ue.a.request.post({
                        url: ye,
                        data: {
                            sceneId: String(e),
                            combombo: String(t)
                        },
                        success: e => a(e.data),
                        fail: e => n({
                            message: e.msg
                        })
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=chunk-70da3b04.d68e632a.js.map


function resolve(e,t,a) {
    if (e == 'https://api-a.soulapp.cn/cuteface/getPayItems'){
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": {
                "superVIP": false,
                "payItems": ["10306", "25540", "30167", "100140", "155220"],
                "totalSoulCoin": 239
            },
            "success": true
        })
    }
    if (e == 'https://photon-open-api.soulapp.cn/experiment/listConfig') {
        // a.code == 2033
        a.success()
    }
    if (e == 'https://api-a.soulapp.cn/kneadCard/count') {
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": {
                "count": 0
            },
            "success": true
        })
    }
    if (e == 'https://api-a.soulapp.cn/cuteface/hasPurchase') {
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": {
                "hasPurchase": true
            },
            "success": true
        })
    }
    if (e == 'https://api-a.soulapp.cn/show/superVIP/detail') {
        a.success({
            "code": 10001,
            "message": "success",
            "data": {
                "superVIP": false,
                "gender": 0,
                "signature": "回龙观观主",
                "comefrom": "来自极致规划师星球",
                "avatarColor": "HeaderColor_Default",
                "priorityCards": [{
                    "originalPrice": 14,
                    "vipPrice": 5,
                    "detail": "玩转匹配不间断",
                    "commodityUrl": "https://static.cdn.soulapp.cn/image/matchcard/match-star.png",
                    "commodityName": "语音续次卡"
                }, {
                    "originalPrice": 10,
                    "vipPrice": 5,
                    "detail": "速速带我去见Ta",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/3e68a309-aa04-4a18-8d4e-cf8b26d1cabc.png",
                    "commodityName": "语音加速卡"
                }, {
                    "originalPrice": 25,
                    "vipPrice": 20,
                    "detail": "遇见远方的灵魂",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/6755f541-e3f1-4e40-8291-b263602cb174.png",
                    "commodityName": "语音定位卡"
                }],
                "slideCards": [{
                    "originalPrice": 60,
                    "vipPrice": 12,
                    "detail": "遇见心动的那个Ta",
                    "commodityUrl": "https://static.cdn.soulapp.cn/image/matchcard/match-heart.png",
                    "commodityName": "恋爱铃加速卡"
                }, {
                    "originalPrice": 11,
                    "vipPrice": 4,
                    "detail": "遇见远方的灵魂",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/621db9cc-0dcb-4342-b611-7ac8d5462ffb.png",
                    "commodityName": "灵魂定位卡"
                }, {
                    "originalPrice": 5,
                    "vipPrice": 3,
                    "detail": "",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-15/0c98b94b-7ceb-4183-9c2e-204395388b0e.png",
                    "commodityName": "灵魂魔仙卡"
                }, {
                    "originalPrice": 66,
                    "vipPrice": 66,
                    "detail": "",
                    "commodityUrl": "https://img.soulapp.cn/interestTest/05ad5db7d6e8457db79b17b8a08f7b45_1581478200930.png",
                    "commodityName": "粉红兔"
                }],
                "superUser": false,
                "cardList": [{
                    "originalPrice": 14,
                    "vipPrice": 5,
                    "detail": "玩转匹配不间断",
                    "commodityUrl": "https://static.cdn.soulapp.cn/image/matchcard/match-star.png",
                    "commodityName": "语音续次卡"
                }, {
                    "originalPrice": 60,
                    "vipPrice": 12,
                    "detail": "遇见心动的那个Ta",
                    "commodityUrl": "https://static.cdn.soulapp.cn/image/matchcard/match-heart.png",
                    "commodityName": "恋爱铃加速卡"
                }, {
                    "originalPrice": 11,
                    "vipPrice": 4,
                    "detail": "遇见远方的灵魂",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/621db9cc-0dcb-4342-b611-7ac8d5462ffb.png",
                    "commodityName": "灵魂定位卡"
                }, {
                    "originalPrice": 10,
                    "vipPrice": 5,
                    "detail": "速速带我去见Ta",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/3e68a309-aa04-4a18-8d4e-cf8b26d1cabc.png",
                    "commodityName": "语音加速卡"
                }, {
                    "originalPrice": 25,
                    "vipPrice": 20,
                    "detail": "遇见远方的灵魂",
                    "commodityUrl": "https://china-img.soulapp.cn/admin/2020-06-11/6755f541-e3f1-4e40-8291-b263602cb174.png",
                    "commodityName": "语音定位卡"
                }],
                "avatarName": "avatar-1652191845794-00927",
                "discountInfo": {
                    "discount": false
                },
                "coinPresent": {
                    "has": false
                },
                "validTime": null
            },
            "success": true
        })
    }
    if (e == 'https://api-user.soulapp.cn/user/ext/info') {
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": {
                "displayOldAvatar": false,
                "avatarName": "avatar-1652191845794-00927",
                "avatarParams": JSON.stringify({
                    "backgroundColor": "#f4f4f5",
                    "bgColor": "1:167",
                    "sex": "1",
                    "resources": [
                        {
                            "color": [],
                            "id": "40020",
                            "type": "body"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [0.8],
                            "id": "60020",
                            "type": "nose"
                        },
                        {
                            "transform": {"rotate": -8.429615277706244,"x": 0,"y": 0,"scale": 1.2070357590037635},
                            "color": ["836B64"],
                            "id": "130120",
                            "type": "eyebrow"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [],
                            "id": "150120",
                            "type": "jewelry"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [0.5],
                            "id": "110020",
                            "type": "eyeslid"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": -6,"scale": 1},
                            "color": ["5d1803"],
                            "id": "120165",
                            "type": "eyes"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": ["ffe8df"],
                            "id": "55060",
                            "type": "face"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [],
                            "id": "30578",
                            "type": "dress"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [],
                            "id": "170080",
                            "type": "glasses"
                        },
                        {
                            "transform": {"rotate": 0,"x": 0,"y": 0,"scale": 1},
                            "color": [
                                "AF8E85",
                                "966F66",
                                "836B64"
                            ],
                            "id": "25542",
                            "type": "hair"
                        },
                        {
                            "transform": {"rotate": 0.8550973962698494,"x": 0,"y": 0,"scale": 1.0247614868468293},
                            "color": [],
                            "id": "90100",
                            "type": "mouth"
                        }
                    ]
                }),
                "oriAvatarName": "avatar-1652191845598-01387",
                "avatarModelList": [],
                "expiredAvatarList": [],
                "userAvatarStatus": 1
            },
            "success": true
        })
    }
    if (e == 'https://api-a.soulapp.cn/cuteface/getDraft') {
        a.success({
            "code": 10001,
            "message": "处理成功",
            "data": {
                "tempAvatar": null
            },
            "success": true
        })
    }
    if (e == 'https://api-pay.soulapp.cn/mall/query/white') {
        // {userIdEcpt: 'emdlSklZb1NJamd1RTU3dnhxODE4QT09'}
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": false,
            "success": true
        })
    }
    if (e == 'https://api-a.soulapp.cn/cuteface/getAllItems') {
        a.success({
            "code": 10001,
            "message": "获取成功",
            "data": {
                "cuteFaceItems": [{
                    "itemId": "930206401",
                    "itemUrl": "https://img.soulapp.cn/interestTest/138025e5df5c458186af6be0ee5e93ff_1588045445613.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90563",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d4c6aa2af57b43b19909277b8dca6588_1560843234713.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90321",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2b32a2df751040d683a5e9f25e8fe0c6_1560843654688.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b78bdb251f2c45e0ab1759d3a192dbc0_1560843439681.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90562",
                    "itemUrl": "https://img.soulapp.cn/interestTest/04d663e2e39e491480aa2d56820f78c7_1560843486541.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21300",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/af85cbe5-8148-4b07-9287-91f38ee5faa4.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52afc2c6770547b1a8b4de94677f43d6_1560845929688.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90564",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6f1a0075ca9a45168655f8d52f4a4c6d_1560843285132.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180019",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8884e57e0a5d4d8b82e697c70c6a598f_1560844456057.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160401",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/54698d26-8362-4f51-bd97-878c338fdd26.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/75140982e40f4d12812e5c62a631cd49_1560847939762.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160640",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/81ee0e8f-8043-4f2c-94ee-78485677a57e.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20219",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4357a1426a6f4d41b899efb71228b212_1579490036812.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180250",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7f0775bd86084cd8ab2299e676ee2728_1561020839318.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25901",
                    "itemUrl": "https://img.soulapp.cn/interestTest/591e73b83a654370a6a73661fe58d0e9_1560841253593.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25900",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4904c54d37554ffdbc7a74a84db6b8ae_1560840899334.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c1862f39e3df4023833a6a61cc0eb255_1568169628041.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/30af466aef494e0f9340aa2c000f2449_1560847539654.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170207",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ea0dab31f8764a169a328f7482e7fa00_1560847911493.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30261",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d74d868f2e1c4cbe9876fc3dca7e056f_1560847796888.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170206",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7d34bc2a29e447efb7a3dd36c06ed933_1560848017700.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9617d81ec0ae486e864522ebe4ba48fd_1568169598890.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170205",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2d0d7854b30432ea176bfe4b354579d_1560848400435.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30021",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3798a61a59174f9b956f02f36e7d6603_1560848714154.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/12ffe184d8534f4ea83c6ef6a10b0a24_1580447967792.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20690",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fa555a36eda24e009ac794804a00a1be_1560839229445.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/289b0557ca914e2bb5d3636c091814d7_1560847841231.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52fc517e03aa40e4aa2a8901c12a2447_1560848066445.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4d3bd14225e547c9b2749e4cdaf3cc01_1560843489990.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20465",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f7cf90e8d7dc43a7be6b58b07e369336_1560841639873.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180025",
                    "itemUrl": "https://img.soulapp.cn/interestTest/246747a8bbd94c6ebff5ad5d22154dec_1560844205238.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f4c1ee03399c4d049d21fce9bb5736a2_1560840912767.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b3cbe6f671cd4c948b6348e7c4d40937_1560839689609.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100110",
                    "itemUrl": "https://img.soulapp.cn/interestTest/01988cb5d4294967816c2182fed8928d_1561001099389.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d1ef0e2b6faf4c709e63350c4bd035ea_1559275540631.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/75b0b1edfc834dfe9c77fb0731d1d094_1560844590585.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/77d437ae283f49c19d2c9aeaf2e5cc09_1560844261784.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30499",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/b5e3bb4f-328e-4843-b3f3-20fb7c436806.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30498",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/dc9d904b-5d71-4ffe-8c30-1a3e514d31b8.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/31c79a5f67214e18af13a258a6a182ff_1559276439425.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/078193df400948ebba7932b721befd06_1560848921815.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32670",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/bfdd999a-b87a-4e7d-896d-e8825899edc5.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fcc105d6d75d422ba5c89710697fa7f4_1560842930181.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10660",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/56a1f734-08ac-430c-aa00-662a1d6a038d.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bf98f182e92240e4875feb55ce992730_1560851318488.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c10f5d4d963142b289e2401679deab89_1560843460290.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100105",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b10642fccd7145e586d6a3c0f3b4f348_1561001063164.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c7213b1125c140ec937f53ed2062c2a0_1560843732202.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9819adec03844509ae8f2b2f30543991_1560848469559.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f6fd57a4dc45408bb2edd8ad2ba27d50_1560938289096.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170465",
                    "itemUrl": "https://img.soulapp.cn/interestTest/44caace2f86e49ba80c3748188f6f3bd_1561089666417.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5d192e036a254b628c4a82a13510480c_1560856020224.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30481",
                    "itemUrl": "https://img.soulapp.cn/interestTest/65c8d3c9a3974db8aee7710468314a6c_1560939544113.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5d8e33170b6b479594bb7cca30091c73_1580447897596.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1b6e6cb363ac455faeb56a75dc7e5fdc_1560847733704.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30242",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1e9141e1304b4433a5d5076dcba2d813_1580447564726.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30241",
                    "itemUrl": "https://img.soulapp.cn/interestTest/14db1ee777ae45ac9309dae80e1e5649_1560856173699.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/44efb55614044eb1aba2e63440559b02_1560843420822.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170461",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5fdbdc942c164862ba8d7e81908b6237_1560848622461.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a60784060ef846d99931b54291f3316a_1560848372672.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180001",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f8ac0f2a722e4c2ba98cbc1ef40015cf_1560846657702.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c290ce49f3244173a5d67b193d6d6157_1560839784487.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fa00de9dd5cd48c4ac1a790af955ecda_1560840872685.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20441",
                    "itemUrl": "https://img.soulapp.cn/interestTest/38aa2c0d84134ecdb72583983c121891_1560840373916.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/995c95e80ed4473f917f67aae2a454a1_1560840603430.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180008",
                    "itemUrl": "https://img.soulapp.cn/interestTest/503409f2a37645e58ec7eda51eb22d78_1579491401277.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2e13c05983c24e26ada42a46324f5460_1560840002046.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120161",
                    "itemUrl": "https://img.soulapp.cn/interestTest/be8a894def794e6f9a610bcd80f6f316_1560844870828.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7f5262222dd74b6d8128f22152c2150b_1560844658624.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/df3659872bee4daba6c382a451c8b4a7_1559275493646.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32650",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/5682a73f-969b-44d9-9a24-f8f4ff7d7dd0.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32651",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/be55ed33-c915-497d-83c5-e388bd1fbb54.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/24ef327c84814742baffc01652c7d874_1559275889537.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10880",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f5a2db3099ec41569573ee22f8f2052e_1559276525123.png",
                    "price": 6,
                    "originalPrice": 12,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d50e1a88884d497d91618f7e0082b7da_1560843360157.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8e60e08d9dbc415d9fdcb6660805d669_1560847987637.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170210",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5b1caddb89484386861ea5cebae6e1fe_1560847986711.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4d88c05182c64527a5fa3eb9721805e7_1560848185873.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90362",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c67c0d7cfb644fadafa487d23b3bd57a_1579490930401.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930206201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f7c3bc4633c6401ab9b7832b1617b63f_1588045149757.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/21873c6e9ec44921bb6c4847aa19c787_1560844011949.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160600",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/9e7abb84-b7c4-4d26-90f4-1abfd0658ee4.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/08364e3055344ed9a56e551bd955fa61_1560843448954.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3023828e4ae44990b224a6e7c9c7c8f5_1560848349182.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30221",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c22a71fadbd1419b94f7f66dabe0ca08_1560856255987.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7142c99cdc25452cac8c8e03a4d83204_1580447827034.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8589bb145b5747d5a3b84c0eb35427d3_1560849034781.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30461",
                    "itemUrl": "https://img.soulapp.cn/interestTest/70f7c54d7df2471b9c8f71c26f4bfc67_1560938316765.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/15a7be94196e4a1ea7829620108fe490_1560847510412.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6d81055b736040fe8913d02a6f48a3bf_1560847888064.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153081",
                    "itemUrl": "https://img.soulapp.cn/interestTest/df9aa2f957ad487399562543e0068b12_1560848146139.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4fc1de5816d340e08a0412bcda5257ae_1560845122431.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153085",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/23a5b54d-d9f4-4ca6-9346-919dff79a2d0.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c50a38d6ec364db5b855cd09b3c95d95_1560840772726.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/97112fd0134947fd8a5d059deea2d9d5_1560839789024.png",
                    "price": 10,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180460",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/f4235261-6466-4d33-83f0-96d4a434a9db.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/40c4f560fa634e41b30a584ad7156717_1560846753129.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5ebd9823fcae476ba35bf3e93d56b03d_1560861086928.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cb0379fb376b4425a5b25acfd9f9eb9c_1561088668293.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1fa85776434f4b738c26204d08f98599_1559275453579.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30450",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c341103ae45a419c996a9ef0a55f3523_1560848825023.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10860",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cff4a80c2e454282bf73f41b1e8c030a_1559276494238.png",
                    "price": 6,
                    "originalPrice": 12,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b692995aab81434a81ffdeb1b955092d_1560848120203.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1fcc50db58634581ab986ae634703b62_1560843293419.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20630",
                    "itemUrl": "https://img.soulapp.cn/interestTest/19e84b4fee524acf9da467727edbf674_1561000939347.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160620",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/29228a2c-f664-4e78-a1c6-4cfba1e567a5.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/08191ddafa8345469ee1d74d25888196_1560842973040.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b76a87954ba2474fb41178233c284270_1560843052708.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20635",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1f7220931f994b348c5c67beacf1c151_1563432164237.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/992d26e1f74841078d1c2f12ed420091_1560856409914.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30442",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a6cf36e1a069456ea53a5db532b20d21_1560938354454.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30441",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1f3f68d7ed3748d5822d52b50a988e73_1560861234632.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6f4c48660831498c86d381b42f7435f3_1560848297133.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9755ab8021a5452b82350c55bd90874d_1560856486442.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6c3a436fa5b5400a9d6248aab3ddfe60_1560856131027.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/da9164d33e50424a846be507b3aa2dcb_1560938256574.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/852237cde1874223b6f207412b898980_1560848118032.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155282",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/ae253d74-7544-4910-a225-67929ae8bc03.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e72f9103d42845829867513f032652ee_1560841792114.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0f61624ead1b45418bdd383e5ff13794_1560843783666.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30205",
                    "itemUrl": "https://img.soulapp.cn/interestTest/822ca224f6f5458c96e812320c2d4afc_1559275695064.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d2980ff851634df88a47bc8c8ad55244_1560844566882.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ab2f388cd34a436d8480e5f88f3fb4ff_1560840849407.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20641",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7a2ed2086f7c4d2e86338a91aef75b0e_1568169757955.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0d7706564af84d8cacd53e4a98b4c817_1560852640365.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20880",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8bf32525428f476f92351dcc70cb474e_1560839981628.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/91e473452a224343bf77588b30b9dde8_1559275652662.png",
                    "price": 9,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31761",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a9ffc0da1e214a5198f3db26ade9278f_1576822206677.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31760",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1cfd0d0a037741aaa0a523f8ecc03923_1561088623495.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30670",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8ec21b4834124de0b4a2a168fb8ad197_1560861288276.png",
                    "price": 60,
                    "originalPrice": 60,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10840",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2bad8359ed24cbd903493372d22e2fa_1559276611515.png",
                    "price": 8,
                    "originalPrice": 8,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31766",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4fd9b647d3894bbca07c85ab5760fff0_1581305132333.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8974b23d6963459bb3ccd1229f1a7b69_1560843526000.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31765",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0752b4346d07451b8a9dc32b97fc70c1_1581304975660.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/92eb60e303c341179edd07fcdc797c7b_1560847933111.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/54492a0167c340b1ba5fb1618314cfb1_1560843976533.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130830",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/83e60a8d-dfad-42ec-96fa-cf33e30c6178.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11340",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/5b2e0828-d34c-42f3-8fce-79434a8f3a75.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e0ed7a297b5e4475990fbe667353fc76_1560842891626.png",
                    "price": 1,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a84d6198943d4862872062957645462a_1560841405726.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e816cc6b28c94c289fa70af6cd08d6c2_1561089064879.png",
                    "price": 15,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4f1fd37c168f44f6b522c773dd30f1b3_1560848620889.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/976fcaefe2334724a2e520b95dbaa361_1576822317863.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160240",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/b93d81cc-13e4-4ce9-83a9-4d32e1220b6a.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25980",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a361509c4af748fc98f13ff8e524b015_1560839753194.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/eb790b57336244b788aa327a7f042013_1580447461642.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21140",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/b41f11e0-dbd8-49ac-b68d-c7ef21ceb4a2.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11341",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/570999eb-3aa3-46bb-bf8b-189e2ab05638.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/27d255cb082b47268eb0ec30041a4201_1560847769585.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20290",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9830f3c1f3844e2f88d739333e1526d9_1563432072526.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930206001",
                    "itemUrl": "https://img.soulapp.cn/interestTest/260c3eb5cfdf4ef5be366f53875fa7b4_1588044898554.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/05d98c1538e341ab9d61d2fee55ff41e_1560856685620.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130840",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/c02b76f1-2103-49b2-a3fb-7244d13223f7.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cdec829efd5d4f79bab9e47408babc9c_1560847624411.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10262",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bc6080f9997648d3addbed487d45e6c0_1560848055770.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/85bfb9c6a2ba47f6ae5b4935b0400dff_1560845004177.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cf5a8eb4d5594d779af20675a7a95f5c_1560845209701.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fac3a4d118734c5fb8ae38b84efe6803_1560849330579.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160470",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8413e2cf5f6b4f7fb604d58634bc3e28_1560848574064.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10029",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a1824026a5274fb9bf73bdaa5768dd81_1560847913182.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/09c440e41e864f758c5b7102c003507d_1560845002971.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/87c5b11629d2448c8392ee6f26923602_1560843537250.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10021",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6d908612e5f64af999a37de08c6dbf88_1560847696578.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10263",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/2e660b45-6536-4841-9d4e-311916c969b2.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10026",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a829f6c2f3604e20833743ec97300e73_1560855839281.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10025",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c732ae6a54c94ea58051c1eb43f35d4f_1560850784372.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10028",
                    "itemUrl": "https://img.soulapp.cn/interestTest/55820f7c8ee64874a42eba587236f35f_1560847951315.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10027",
                    "itemUrl": "https://img.soulapp.cn/interestTest/49bd0ee0772c47efb4b2c16edd12b180_1560855578282.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/44504f63f94f4cb0b008887333d8b86b_1560842879442.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90741",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f507abedd6d843d5b3fa123e75f7b7e8_1579491220785.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8943621190564756a6cff979e81e4f09_1579491136416.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b1928ea748bc4d5b88b636c9157e9aac_1560840676602.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e733fe1e3d444a8ea13f1d6bc87ae25b_1560843625860.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130850",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/b98b2228-fc6e-4b23-8f63-75a787b5a352.png",
                    "price": 50,
                    "originalPrice": 50,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160021",
                    "itemUrl": "https://img.soulapp.cn/interestTest/13ec29004f6b4967a90f35c3227bef30_1560845589101.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25960",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/f657986a-8659-4df2-880e-0978699115af.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5e2f64f5300f498b9fffbb4e78e3618c_1561089030960.png",
                    "price": 15,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25721",
                    "itemUrl": "https://img.soulapp.cn/interestTest/96b555cf333744dda02818bf2c5f2d40_1563432022143.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/36976e41162244f4a9854de7df3fdff6_1560841831692.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b72b9f190e7c4c3a87751a92bcdab428_1572493674490.png",
                    "price": 7,
                    "originalPrice": 7,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c81858f5939a4e66b56a75518a83feb3_1560845542952.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bda2d0299118431ab9bd9d4a5c6cf067_1560848734108.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7ca00d76fc0744adaeac78accb61add8_1560843883694.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160262",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7e20fa45fd694bf1becdf5ec744ed67c_1560848494213.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50050",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7a613445beef4e969e55dbfd7336c5a4_1560839136624.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32265",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/1482bfac-2ee9-4188-ac09-fb9c7a001074.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32266",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/3c879574-e2d6-46a2-940e-06d9d707c25a.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c81213ce59914aef8ab4493a201ffb80_1560844488338.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11320",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/fd96ea72-8e38-44f1-98d2-fbcf45738671.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11321",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/3321a1db-5f9f-40fe-b5a8-981bcd3ee76a.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170065",
                    "itemUrl": "https://img.soulapp.cn/interestTest/46ab685e63a34801b359a225c33973f0_1560847512894.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/73841415fe3f42c79fdf6db2de6fee0a_1560843586507.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9585b2957ad448d89480243f65cbf351_1560856611009.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/47da7aa9f7814e5fbc904db5e2df041e_1560851377307.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130860",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/01ff79c8-bb00-45ad-848b-1bb01e818c38.png",
                    "price": 19,
                    "originalPrice": 19,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/96f9d9669ad34203b980c618301937d6_1559275411378.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25730",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2c6a8e1c59df4e55b73fb312aba486a1_1560841067219.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32250",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/fdb68776-13bd-4b86-971e-91a1b2280352.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160490",
                    "itemUrl": "https://img.soulapp.cn/interestTest/35f04b0071404855b1962e308efed6fd_1560848555719.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ef3e7b6bd53d4add9bbc8175f78ae62b_1560838983751.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21130",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7c1a4973f562494e99b2186baee7b09f_1560841717337.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ef969e359c0c4a5c9c89915d856c7923_1561000899853.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20281",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cc52a23265384da0ab4a5ace95a1dc3b_1560841058231.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150220",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/dd260e40-e312-4ae3-a650-61ac907b5d81.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10001",
                    "itemUrl": "https://img.soulapp.cn/interestTest/53a5ea1153eb41c0b912bd7b87a0b3d6_1559276673726.png",
                    "price": 11,
                    "originalPrice": 14,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fb9cb1014b2f4614a50bc39a0ff2052d_1560853250948.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10006",
                    "itemUrl": "https://img.soulapp.cn/interestTest/88c1d86747fb42989668a6b4efec0f20_1560847649894.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10005",
                    "itemUrl": "https://img.soulapp.cn/interestTest/35c3afebf42142068a2dd004bd2d2bb3_1560848773937.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25705",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/c3348801-da72-43dc-8e67-03bbd9299ed6.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90760",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/5fb08aea-0462-4e84-8c01-c1bea026f966.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "21100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d3553afefd794e779879a8eb8793343b_1560839345764.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f9a45aef4cf94be199ea72a5d6b4506a_1560843209818.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/61394bfb91f846aaa0adb05bfd902bfd_1560844048649.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8c0fffe97dd04b56a9c240831e44e08c_1560856278237.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/be74d3b337124123931f1cc359f3b3d9_1572493688894.png",
                    "price": 7,
                    "originalPrice": 7,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25940",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e628140cd5bf4c6a8940f96f04a34f63_1560840830053.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2096e6ce32b347fe851130f3dfdd6663_1560846006990.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9667ae63714143d9878765389567e6e5_1560839789859.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25703",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4bbd0f7b9c9c442197f9eceb5acd61f0_1565059024363.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120820",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/e600f310-bb2e-48b8-bbce-00bec2057d4d.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32000",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cac81d8a4d86400c8229c9d391b97909_1561089010478.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ef3f506846984a94b45e3f97974f65b9_1560848227725.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20490",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b12dc697941d44c39f6f29a589a8b96c_1560840528924.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11300",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/fabfe85d-9e55-41cd-99fb-3d48c4f835c3.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11301",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/671d5dbe-57d2-45eb-8569-712e76154d68.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8a7fb195c6544078a83641b2295c303a_1560847824183.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/201556a0fd544fadbb1c42a40876a177_1560856521873.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ea3bd77e41db468baf7556194803aac3_1559275972649.png",
                    "price": 18,
                    "originalPrice": 22,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25950",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4525df61a0744a66bd0bb9f98c8268fb_1560840997515.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aa1b8f8e5bd54fff9a9be6f0a5806752_1560846560744.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f9b4cf77d2f84eacbc8354648fda809b_1560860884561.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180065",
                    "itemUrl": "https://img.soulapp.cn/interestTest/687b5c9c273445578dc29d4a7769e073_1560844140307.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5823737e99f34ab1814cb9625420a445_1560851252189.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/997af332aef94cdd9fa3a5edd00443c7_1560839544469.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90781",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/27a66622-0fda-4137-aed4-8ee489b93665.png",
                    "price": 25,
                    "originalPrice": 25,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90780",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/5203bdb7-6bea-43d9-bd79-d74f96b62cec.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "90300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/eb4c52210ae6470b85dd88b801ea3f55_1560843401501.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21320",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/2b95f888-1712-4d53-a6dd-1c3683608ead.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e365e440e9e64cedb7f35bde31c59729_1560848515708.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e0803195508f487a9d07702858db3997_1560846037801.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3cb53b4d931e4b6db893210d5aa45a9b_1585881342105.png",
                    "price": 10,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c40089df24264634bb0d7ccc484d028b_1560848587827.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25921",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d0ce69cc1080418f9623e57028ba2759_1563432042186.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25920",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cf0ce70e3a2843f1b611e2a3fd7ca7be_1560840806224.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/51516b67d23d4568aaf9b975bc87e92c_1560848601314.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25922",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/599174ae-1bec-48d8-a1d9-c3e177b517c0.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9d11a67a6c3c4a2eb84f743123860109_1568169649795.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20470",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0eecd3d866bb427cad7d2a59342e7e6c_1560841569825.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90535",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3dd4c9c3dccc49be979f6ece8f3e4818_1560842996363.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4012dc84a59841d583ba955a4a95f8c4_1560847875650.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120800",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/9b3daa97-186c-4695-822f-4e12522aab55.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25939",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/29dcaf34-0943-4fde-9b5b-ff1d21bd41bf.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e9b7e9358784418aa4cc4a749384b2bc_1559277002238.png",
                    "price": 19,
                    "originalPrice": 24,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4295f88647aa49e09155ea833a603c94_1560839205852.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/81f12f59a48144f984ed5fa3af216ee3_1560846732159.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32690",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/dfe09d69-8198-4d58-8977-89b28ae9f12e.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6d7f0b0639aa4543a9cacd2ad7670a91_1559275942176.png",
                    "price": 18,
                    "originalPrice": 22,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a77421d243ca4f3098a0e53fdf6e1adc_1560844538744.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e82938bf43d94bd2a756ce2d11c2a087_1560856085793.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170250",
                    "itemUrl": "https://img.soulapp.cn/interestTest/872777b5248543faaf698709b85c95a1_1560843615521.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7d60a1918dae4517a4d501ff1c8f606c_1560856446549.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6ab74f61b38f401bbc572b553c386f8d_1560839165586.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e1ee5cc7e82149caa2f6da4503443c07_1560850811343.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10202",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e1b072f8702646c0b7f1b104ae5d88bb_1560851344294.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/debba41620bf49c0af631ca0fa50272c_1560850870129.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170252",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9ea4eedbdf084aaabe7af53ff40fa018_1560847848330.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170251",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9d7954bdcb3f4ac2a8284c901228fa4c_1560847484642.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10445",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1005d67d7e6c4537ba1827e4812abd93_1565058960468.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d2affe8da2f54bb7b1b457beda608ac0_1560844792855.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/12beddf0b1f343b39495d62e1b72190b_1560844735947.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4356080effa541e1a1d6f736469f7462_1572493391651.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120740",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/81bd8109-0903-4783-b5c1-9bf905485b71.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a95444b21397431085e6421e8a21f1a8_1560839825760.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/07d01585fd0146009e30c3f5afa06b0c_1560843481412.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/00f21a4ee3dd4445ad6a108f135f9ead_1560841592801.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6ed71d6812cf4ad5837bfe2f275141ec_1560852673898.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150150",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f47b1308e21d4021a915b62397180170_1563432360868.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6854582b332846aaaab3959f9557d03a_1560842953045.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/822dd51988c54a66a6927c68401d4c4d_1560841896393.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31900",
                    "itemUrl": "https://img.soulapp.cn/interestTest/db1f60dc281246e994494845c19f1002_1561088849583.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150181",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7daf3189bea345a4bb3e2d71dec47b6c_1560845404232.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10190",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9cde4a7dcccd41bc9a8b97a1a6343b2c_1560850697441.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150182",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bb6b300ff95340f7a6d4fbb00e2f0da3_1560843269176.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/48227efe9a304ff9ad40a02a5ffc409e_1560843157270.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11040",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-17/28364378-575e-4295-8f72-7278eef67ea3.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25685",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4311210a44404059b398ed865a6eb621_1560841493689.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140130",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f4b5fa5b8e4749f18055be382545e431_1560843159495.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a3b44ec6b63b4b70829489418d0d3d3b_1560853360709.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120720",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/f5ce0ca3-3e2e-4cc8-a147-34d5bfbb02f7.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "25682",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4988c0ad6ed542ac9a9202bcf5139df0_1560841340055.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/966867a674d64837bda4bb0527c32ef6_1560853301896.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25681",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6863fa8c3e484283a67fab19be01b4d1_1560840951178.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4a0d96bc6f3b478f993dfa2172ca57b5_1560839762180.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25684",
                    "itemUrl": "https://img.soulapp.cn/interestTest/546cdbc34c3e456fb44eb7181eae2929_1560853488114.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25683",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4ab9473fb61c4e3fba44fcff1ed703e5_1560853334550.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/69e22c2830ff4fa4a4f00baaf3f27224_1560840349983.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8d2a321e4b62446a98faad58a28a99aa_1560861336331.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/056aee8859aa401d9dfcdb0eb54b1d67_1560843861246.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "70060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ea6a4b0f4ede403892d4818c307c4ce2_1560842902134.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "spot",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d70afe10dbdf4a08b7f28eb599bfe16d_1560843063894.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150183",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b6f62463431244d8871319556eec7607_1560847624836.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21090",
                    "itemUrl": "https://img.soulapp.cn/interestTest/178e2e65d0164a289180ecbf2a801133_1560841676370.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11260",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/40e20cbb-2b94-45bd-aac7-565e9fad1170.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11021",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8084a9e5c74244c08d43ed9304e6c78f_1576822871952.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a3702007682e48399bb65d2330acb3d4_1572493339972.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25421",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7f1d281178314a2d9f3cd1fd61b6ee50_1568169687019.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aee465a0d12e4681a624502db569fc89_1560846220070.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/60e8b71feb114c39bb593b475e41b33b_1560844451055.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a6fbec71645d40bfb1d2f959e0c9c313_1560853536740.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120780",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/adff380c-0d2f-4d9d-aceb-71b2b33b1441.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1850eb71d7cd4c80aaa3114ea38477c4_1561000766510.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4abe83785322465e9746bf2b84bc3b0b_1560843317519.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11023",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-08/c5d5cf7f-0f8d-4e15-b4b5-e9a6e18d0c6c.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11022",
                    "itemUrl": "https://img.soulapp.cn/interestTest/586c0085e2a44b0a80bba0962da8340a_1576822959604.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11024",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9c638bd3e036431a81fa38e3ed5f3cc3_1576823131995.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c215dd548fb2434ca945d72d84d60a8d_1560853217146.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10181",
                    "itemUrl": "https://img.soulapp.cn/interestTest/114b6d9f727345db8a2de4e61bd4cdd2_1560851416464.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bae037849f154704a0a9d63b031a6c92_1560847441161.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10185",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/93c297bc-a1d6-4cf6-a66f-425dabc880ad.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5435b6717bac460980ba3db118fce4aa_1560845130220.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930205801",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fd7f19dfeead46dab4dbb55385366757_1588044694830.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4754a4b309e34b4f8473dabd31ddaad1_1560845462737.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/72d32b391e504e868642e3e920909c37_1560842646904.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11240",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/75aafb8a-c23b-410e-a3ea-602c8a5b0793.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hat11240",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/40004077aff8442f8ecf4140da9d4874_1560839595320.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25642",
                    "itemUrl": "https://img.soulapp.cn/interestTest/63f47dadfc8446de93b450127a8a2e1a_1563431996093.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25641",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a303622e85e64575a79a5bd891fc2151_1560841672883.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25880",
                    "itemUrl": "https://img.soulapp.cn/interestTest/71da508ea5be4015a758c073c4af7204_1560840812232.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0215861d7f954b6781f778e0524cd5f3_1560839736156.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120760",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/21c23afd-be35-4e4d-b8a5-33f3b054a747.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b54389fcf0c141bc89bec8b158082d80_1560839914712.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21280",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/be10a8be-c2a3-463a-8747-35891e65ec18.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21059",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3e063c9e59054b259eadc41879da3766_1560841030975.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a81ba1c8aad74a2daf73b565eaa95a59_1560844913194.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0efdcf3c93f0453fa56bc031cbac239a_1560855680068.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/40233ea4555d4cad928e0a032322741c_1560843782188.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25659",
                    "itemUrl": "https://img.soulapp.cn/interestTest/59470f4afd1e4e829155f540a8f52cda_1560841125166.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f023f83912c7436ba31e22a2d19d5a80_1559275374618.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120510",
                    "itemUrl": "https://img.soulapp.cn/interestTest/af2e6adc4c3f457fb5f0c368cfb4e77f_1560844641931.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7f63df399287406f9f0f68eb013afff3_1560848267823.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c09788156d9547e18594c7baa4ffbc20_1560842873538.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150149",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b9a0705a2393447f89d348b3cb78805f_1563432342854.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150147",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f18b5f585a204115af4a5b5881078eca_1563432298515.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150148",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a16512116b694d33a2c6d490bf847569_1563432316916.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10165",
                    "itemUrl": "https://img.soulapp.cn/interestTest/351de475a7654d5ea71152372e3041e9_1560847689531.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150145",
                    "itemUrl": "https://img.soulapp.cn/interestTest/64b71c93ed654789b302e87f5b126cec_1563432250522.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150146",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5413b9952f4f45b09daf3466aef7282e_1563432276157.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150143",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3e4c69f541404640bd0e888b78080d94_1560843402370.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10167",
                    "itemUrl": "https://img.soulapp.cn/interestTest/432f2bcc2df442578ccb44a04b747c49_1560855639053.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150144",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4da108e6cfa1410294172b9fc13b03f5_1559277061911.png",
                    "price": 3,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10166",
                    "itemUrl": "https://img.soulapp.cn/interestTest/697304113f364dce8bf83553c3789cf3_1560847723969.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150141",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dff5783e31d34a068f25bcfe3d25bcd1_1560845145510.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10169",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c8a5bed4ce4f463ea7ea4d8eccf65dec_1561098022987.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150142",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fcda07e386854e84b9aa1c87006d191e_1560843238198.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10168",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7c4e715da6c645909ed774505cc87972_1560856419671.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21290",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/4ef707e6-0f4d-4aa2-ae00-198d6dd38d9d.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/71750770d5424b1bb867befd523e1a69_1560843646235.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/345abb99c92244408d0e65b0a4ee6879_1560843190060.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180410",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1f71d77ca3764f019ab3de11b90ff4d0_1576821491816.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 0,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5b0866dd2ce84f019b2c072737c7d8cc_1560843599330.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/03a638ef750d4b73bcd30186544ba23e_1560856101721.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10811",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dc47e166fe9b4dc086ccbf977ac3467b_1568169830918.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10810",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5701cc75fbc64e67897b86f692da8cc2_1568169808061.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170840",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/4491cc57-c125-421a-9071-29491f1428b4.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32600",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/941adbbd-af47-4e8f-89ed-347a9872b08e.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30422",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9c31cc1279c9431cb8345292f86c3264_1560856199949.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30421",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ecaf09ca5d074755a3e0f3f7a2dc5aa3_1560856121974.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bb5bb303c65249b9bc2a6ff5ba1bff91_1560843694657.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/634ec30fea9c49c2b072ca803b5d989a_1560843663608.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f01b5bd58dc646f6adbe0407be1c337c_1560848317067.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/357aefdc70a04860ae8ef46a998556c5_1560848200054.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ed5ab46fa3414e449ff282a31c94bac4_1560847759360.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30423",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9b0f866d1d524f46bfb3af7fafda010f_1560855978149.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bf8e7e48027e41eeb21eea222402e184_1560847475646.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153041",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8a0a79a5289d49b485b9b1f9cc0c7d70_1560848091871.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32601",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/1b91570a-e7a4-4ad6-95fb-5b944373b64c.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6553948f205a4ab8a77910982ef42ae6_1560843827806.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8c4bff521bcc489bb7f7cbf768c40773_1572493494305.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155202",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d4671e2ef05546028f5dad909d0c3da7_1560848196512.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20860",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7491f4a81d154dbbb7823b61e9c1c999_1560838997874.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155201",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fd210489f62c418b940a5c43e0c14c29_1560847548040.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930205601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/31fd3aa29d954d62bbd3fc66ec582be5_1588043524937.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/64dc136cfa3a462794fbb0bd2e474659_1560843272285.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120581",
                    "itemUrl": "https://img.soulapp.cn/interestTest/65230d63c1054a0db3b1fa460b33955b_1560843961872.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/504c6ddfedd7434391a3be54accb0530_1561088594711.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/35cb9447315b496f9d376171c47ed609_1559276408889.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "166580",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/0d0ff0a1-b1ee-44a5-b788-42697c44556c.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31980",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4739b84d4a3d454bb789e1f234afff52_1561088952493.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/85e9b21a33284417b22f630e2463e6ef_1559276947627.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170621",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2c244bebf6bd4cb6bba19e4c1cbc631d_1560843525570.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/24816876748d4803940a9e446df913c2_1560849305850.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/63d149d4ac774042b666611becaccb03_1560847580090.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2f88c126af3646df94067af8c7c28d02_1560861357193.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6349ea9d535f4f3db9a9b7f9f48d6cbc_1560843746229.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9465f1c70c9a4624888f58077b95b8b4_1560844609735.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30880",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4708d0fe4360426195a718c71c21d428_1560848489765.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/25f38adccef64613affda774b5f8f6bd_1560847710341.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30402",
                    "itemUrl": "https://img.soulapp.cn/interestTest/05b80e77655f4ddbad5726d8364b1410_1560938497904.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30401",
                    "itemUrl": "https://img.soulapp.cn/interestTest/44826da3328146c586641d44b66ca04f_1560861642018.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0cc60f4df4f844ea8450cba8f7cb483d_1560841756470.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20841",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fe603c58b9ec4f68b69a2625a4a55e56_1560840835071.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20840",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0ae008caf7424555bdff240cecddc9e5_1560841023791.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ae6efdc52bf14570b4e451ef4303c31c_1572493460797.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155225",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e4cb8d41640f44139e7023d64ac54604_1560848170560.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180401",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/3ad86015-109f-4b7c-b6a3-a037ed0f9b92.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2ad374a1d0d4baba88bbb78b2ab66fe_1559276588406.png",
                    "price": 8,
                    "originalPrice": 8,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31960",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4dfff89dfff04b3fab0c414d02cded7e_1561088932712.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a4b7df773e3d4b49b3f0aadf876fdc50_1561088562283.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30630",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8414b3d03ea34defae656cd02f11fc7c_1560861006977.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30635",
                    "itemUrl": "https://img.soulapp.cn/interestTest/820adac092b84ab7b78bad40f21a6ee8_1560849533233.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130599",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8e141134828d4ea0ad884d7da42b5414_1560844973370.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1fc1a4928b9943b194e51ec5bc985b76_1560843245713.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170803",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e8e56b4f0ad44669ba3fadcc0a8f084b_1564475664410.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170802",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2da4bfeeb654c549b1b47de7d4123c8_1564475697611.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5aaf367ceca64ba583584d3baafb81ea_1560842915562.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0011b82185974fffa2a1d2c64f53707c_1560828731736.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30860",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3dc79c86dd6642b3a9b9c8d55a13019e_1560856064107.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fbe92e79c15d4316a2162899d87870fb_1560848753642.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170801",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6c07731513f34071a289d1b217eef565_1564475724879.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d0bd80e88da048e1b72907474466b6ca_1564475750103.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140159",
                    "itemUrl": "https://img.soulapp.cn/interestTest/43e67d392e5d4541a81e3200b101b0f0_1560843119437.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c31b7258d95d4ff59ca791492874bcd9_1560844385220.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155400",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/f1ef1860-d15f-4cf4-9a70-013621882d50.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e563477fda4c43b7aea53957dd77fddc_1560853052401.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31940",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b39dbb725db4496093a5cde70cc91f08_1561088910967.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26120",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/8d111354-7b0f-45cf-8c71-95c84a95b3e5.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/10f9445072d14acb841ded6731d49735_1561088524598.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3aa952351d5b492d9c9ce089f7d211f7_1579489352910.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9d796b01dd064e0cad0fc7c4ee666cf9_1560839912019.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/99d69c41b5cb4d77ad3ea23315117f12_1560841445412.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30840",
                    "itemUrl": "https://img.soulapp.cn/interestTest/90ee93a2fa8649439b18e54006cd2397_1560938208511.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170821",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d404ead6b7a24d068ab5d5a00988d95f_1585881971391.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d50182b0ef3d42208c9006cb734db2cc_1585881850866.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/73a30b9665824471af696c329796eb57_1560938397351.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e85542aaea4b48b2a7d16a5d56b42f2f_1560847660394.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/be740a8cb0e74e518facb1c17d28ca88_1560849485888.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20805",
                    "itemUrl": "https://img.soulapp.cn/interestTest/29f3737b0f6342eab82ac6a776c224a9_1560841062918.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20801",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5027566b3d5c444188f83f60bd1e49a3_1560839372958.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fc685bfa57524cf0abb526d8a3f0ff5a_1560839136755.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26100",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/d384033a-4a3c-4ac4-bc6e-cd98550fb7e2.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31920",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7673b33a00b842958dd82b7da138c263_1561088883906.png",
                    "price": 20,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/de7b752a89d04d898e448c097c02fd50_1560842699466.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90442",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b1cc2534150744bfa2b2b0fa4b50c203_1560843833338.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90441",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d71e05ccf362463da83d9ca85fdf1b5a_1560842926267.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90443",
                    "itemUrl": "https://img.soulapp.cn/interestTest/eb6a15ef509448da9efb2479e9b5172c_1560843405066.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160520",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/aff511b7-e877-40c1-b705-49405972a6c0.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/de8c4032226e437e8ad0f46415aaeccf_1560843166531.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30381",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c9399e6167ab4428872daa4474f9e313_1560860918380.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e8a4f5ceb34e4699ae4b80e70959ef9c_1560861120822.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/40c37d9503f04f50aef9136e31da8a7d_1560843510936.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3454fd296346462bb0168e7349540d79_1576822648367.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32562",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/f009a09e-08ac-453b-82f7-28e920472593.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f2bca80a298c4cb5834530988cb0786f_1560856604394.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30382",
                    "itemUrl": "https://img.soulapp.cn/interestTest/69943b0a3c4b41eeacf55da576542e60_1560861562280.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32563",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/6821a24f-3113-4800-93bf-076212840b6b.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170326",
                    "itemUrl": "https://img.soulapp.cn/interestTest/68f43a1e698b43beb444a287e5f4ede7_1560847935469.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32560",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/4f623cdc-7d3e-40fd-a58e-7e5c45ac2e41.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170325",
                    "itemUrl": "https://img.soulapp.cn/interestTest/81f0ddf68f094bdea73a82c9d38c30c9_1560848251929.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32561",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/92401897-1137-4594-9363-08878440b131.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10770",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1b728270e1ec4671943ad09827c7e8c3_1559277033865.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/290199ddd82a47ce900b39210e38129d_1560844929153.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7cd954f5d3aa4b42926b935dd66cfbad_1560848136367.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/129f4205350f49c7a2c5de66b3679e2e_1560847794366.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20584",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/994a296e-b2f5-4ec9-a398-be670371a407.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20583",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fd1a31263ff945eb85e5a9c659de6df8_1560839303620.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0a7953d4eecd4d43bcdb26b5178257bf_1560839182747.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20582",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3bdd2dad01084fb4a2df175541d229c1_1560840249926.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20581",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a6c6660a7b234961b879500ee1e464ca_1560839235182.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180381",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9398a5d3a4a445eeba5af24b0dbe97ef_1568169258082.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a45df5a02b63489c89c0f1fbfc278366_1568169206840.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180383",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4fe6800d14c44a10b464dda6c2d344e8_1568169308346.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20107",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1802cfe90a8e4d4882070436fa7d477c_1560841898799.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/54e99b5ffe7d473eaa323011f451c167_1560846529108.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180382",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b712ace80ff54d54bbc8024b63ce3408_1568169284106.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20105",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b3a01fe6ca7945788efb243a011af114_1560840022299.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180384",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2152203037744a468700a31e138be209_1568169335834.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10305",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dafecca99d7846f79da9aa5056a9a524_1580446959560.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31465",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a4a8c069fe4a410b930ba9e608cbc025_1581304744973.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10307",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bbaf88e5949442ba84009186fe4a2cf5_1560855543049.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10306",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1ad4cd2aac52461aab2388bc34bd9f7b_1560855597956.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31466",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d36a3e340b9d4e50906413a2a230501d_1581304886657.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10309",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1262ba2664ae4b0987ddc831976e2c2f_1560847673763.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10308",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d852c72bac1f4248a273965caea165aa_1560850674022.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b423366cb36a4703b6306ddeea88cd05_1560861288533.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e68ae3dce0ba483689d340c5d889d67f_1559275754805.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3693867525b14de5aada7908967d4de8_1560839026752.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155170",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5b1d3428da984562b388a663511defe0_1560865835894.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/188e4977efea41ed9bd99f0d0799f7ae_1559276637015.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6e1872ebcbda4129a39cb43850ba405c_1560859956401.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10301",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c441d3bab00f41749c2a005ff59f67a3_1560855862448.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/13f6cfd48a5f431c93914fa7df5f19e2_1560851293850.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10303",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cbe3960aaea24079a30d2496c1b83ed8_1560851232240.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10302",
                    "itemUrl": "https://img.soulapp.cn/interestTest/766553991d8e4016ba1d7d439123e6d7_1560855606922.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20312",
                    "itemUrl": "https://img.soulapp.cn/interestTest/54e477014e004d22a9bd2a98bff0ace9_1568169740592.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20311",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6d51721dab364924b1b6a5d0399a29c9_1560839589670.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20310",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fe14e5c9832445fba043d2188aafe7a8_1560839285992.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160301",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8d5dfd2550c449e9a25e975ebf3bcdca_1560848368160.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/db1170d892ca4a979099252291a35a99_1560848526241.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cd38bf6e58c34758afe5677d4cda2ba4_1560843373236.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6cb060ec0ff941f3b13932f7e4546e36_1576822498397.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10515",
                    "itemUrl": "https://img.soulapp.cn/interestTest/abe1501affb248f09c0e0544351f9008_1560855889890.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30361",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b566cf965c8b4b7781e88ede130c4ba0_1560848796472.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31450",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cdcb15155f6e42219fc23d5aee97c81a_1585881198127.png",
                    "price": 10,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32540",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/71757a05-a996-4245-bd89-9c40385e02f0.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8f6967c1a43d461db95a26a5fb944c59_1560848195675.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/265f495df8da4baebc111797c9a9a7b3_1560848027338.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30362",
                    "itemUrl": "https://img.soulapp.cn/interestTest/438d13eb8765432da349e557c6ee7822_1560849000826.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0559ce82bcf44d89b5a26384f63e1a6c_1560848102044.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10750",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9ae605a8920d4c348c4519d8e3970414_1559276896138.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/88935f59f3984559a62a1d38332fb494_1560843237257.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10510",
                    "itemUrl": "https://img.soulapp.cn/interestTest/25584c5602ce49928ace1eb421ed0fa8_1560856494987.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a67ddc32864f441694a4ceb21f8d95eb_1560847685441.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0aeaeca8f8d249739503eee8ceb18f57_1560839825697.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20562",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e74c23c54a9947d9a7136506660e34b5_1560852940423.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20561",
                    "itemUrl": "https://img.soulapp.cn/interestTest/874793b461194254bf57391873ecf766_1563432143049.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2189f7547edf46cfacefdd430051804c_1560839401743.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f85d2b24adae467b95bb8f85826b2984_1568169185057.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180121",
                    "itemUrl": "https://img.soulapp.cn/interestTest/654fb13067584518a0880279feab5742_1560846629751.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c82a6830bed549ddafedd94341d492e1_1560846688238.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/47771ed994a04e188545d2b08343f043_1559275731131.png",
                    "price": 16,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31680",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0571c770d58a46d2a524b9427a823476_1561088491931.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6e0969117c1a4d60abd769e8acdd95c6_1559276092488.png",
                    "price": 22,
                    "originalPrice": 22,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ff5f6747af4543e7ba3401fd38fb32e9_1560843073975.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c08297bcdfda40a7a84530f37cdbeefc_1560847893194.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90241",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/0140bbf2-37e0-4c95-b53f-33687cd9cfcc.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20770",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ec31e21bb2a941a79dd1100d81d8fc3e_1560840492241.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90005",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e1f096b991a14a9a8c9de51311c1599a_1560843562841.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aedd94b1fca447e8be207435dd489816_1560843683860.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8760213ea8c84a59bffe95cf1af86f19_1560843022886.png",
                    "price": 1,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30101",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0d37757228a348579dc9986dee5bfe3f_1560849053234.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/df97eace7f4a420489b2e0cdd76491ce_1560849150996.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4c6feb08cb674e5b80aa4ddaba951e6e_1560848327873.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32520",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/3d7860db-c3b1-4d7a-809f-25cde57779aa.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30102",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9e2e784f488c4ff39ce68b270d1e913b_1560856524904.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30581",
                    "itemUrl": "https://img.soulapp.cn/interestTest/454293457270425084f83eab355d3bac_1560848419969.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9696ae8858b845c498e4fa56b491917b_1560848285402.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3aad4b7975a548899152654b0e5536a1_1560849125542.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170765",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/47746758-f5a1-4339-bb1d-16afc7e59c5d.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/af3d44977da74034ac06928a97dbf809_1560843745235.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10730",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2174aef7d326426992a148440de051c2_1560851271983.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170760",
                    "itemUrl": "https://img.soulapp.cn/interestTest/75f26e898d3f4ae0959a845a1aef7b91_1561089771370.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2d85b9eca36049fdb1207c5cd7d05530_1560843584079.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a1feb227a1f84784886d32059b17aac3_1560846711242.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20542",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ddcd1bc7e5784db7a7ac308c0ceec40d_1560839623942.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2b4315cefd564616b98286b31d0fc857_1560840566897.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20541",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1420479fa6d0403a964c560d124b1248_1560853275086.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b7240caaca414284bbf14b446725c1f5_1560839952299.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fb29da5481fe4551970816334d074fd0_1560839271549.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20545",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e4df79e53d9d44daaac94a1f5ea8d41b_1560839769255.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9f9b63fdb04d459594e2ee8d466b6400_1568169161741.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10503",
                    "itemUrl": "https://img.soulapp.cn/interestTest/af138ea21955482b9df6c255b180311a_1560856638146.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30574",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1b2a7df4a04444e6b7c8696e31b15788_1568169499097.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ecc88ac48a7443418a29f02dc8be2613_1559276059168.png",
                    "price": 18,
                    "originalPrice": 22,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10502",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9ae05fe34c7246feb823ef5b768f8504_1560848095077.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30573",
                    "itemUrl": "https://img.soulapp.cn/interestTest/edc04e5c5a024b8fa685ee6a74f22b17_1568169462299.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30576",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b6731b40a73d422b8c17abeca9ba3ce8_1560861045830.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30575",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0018f5c76aac42baba8fa046f848e63f_1560861025058.png",
                    "price": 60,
                    "originalPrice": 60,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30570",
                    "itemUrl": "https://img.soulapp.cn/interestTest/15b412c13fa44ee18d39cffd77b8c6dd_1559276282254.png",
                    "price": 28,
                    "originalPrice": 35,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32750",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/decd912e-0b25-4101-8224-a01bcc28541f.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30572",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e037dc897c574dd0be11f3d3302c32da_1559276352438.png",
                    "price": 28,
                    "originalPrice": 35,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30571",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4f357996aeb94d57aaa9ba4e8290b0bd_1559276320116.png",
                    "price": 28,
                    "originalPrice": 35,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f27c638461d146a4b80acf987031ddc5_1561088419456.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30339",
                    "itemUrl": "https://img.soulapp.cn/interestTest/80e4e8a3507c46a48c0a3d284e775fc2_1560856012688.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155370",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/79f6f3c3-5d98-4969-a5da-f3b420d52edb.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a86747ecb25045eabcd59edb4f082aff_1560843487463.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30578",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0755eea1bb344062a5f01a208717a99e_1568169533224.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/36279f48cfbe4231a608a4bf8fc72277_1560848144824.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30577",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8739e7e7300845269d3e223617a95491_1560861474011.png",
                    "price": 60,
                    "originalPrice": 60,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26080",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/364d6b26-824c-4586-b0e8-de5662c980eb.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10501",
                    "itemUrl": "https://img.soulapp.cn/interestTest/31bdb398baaa436eb2bfe41b728ffa6a_1560848165740.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30338",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ead96bf1bda44d2a814f4b8d6659b30c_1560848704954.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d27b8ec8e3924e818ef0abe98cc7722b_1560847769329.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30579",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c42dda9823e1453dab670c89b9f4ca8e_1568169567192.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930206301",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d1fac18928044f30abeaf2b062941008_1588045221190.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/166bcd1d129248daab15a93a57315e50_1560842996720.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110045",
                    "itemUrl": "https://img.soulapp.cn/interestTest/005605bb9a354ebbb337b0151e8777b4_1560843558126.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/64564453bfe84f6a944954d795b8ce40_1560848412892.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52d16d5395414c78a1ee1add72695e3b_1560843184922.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90261",
                    "itemUrl": "https://img.soulapp.cn/interestTest/43f1e36d981741cb801abf6646f98080_1560843709638.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/13ecc299473446b1af55906b27f74d87_1560856111221.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a885a0e562484823a64becf1151e99f7_1560847654543.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32740",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/1d58dea7-b6da-472c-bf11-48f9a4357bb4.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30561",
                    "itemUrl": "https://img.soulapp.cn/interestTest/41b69b679d4b4a81b002a286e77c0030_1560848390117.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7b374cd2a6f6421fa1d23c0bba08e0da_1560848846870.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/072e417c7db745c08dcbef0d53a92498_1560843325181.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d55b611126d247938ea8872b7fe4b2ea_1560843819769.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26050",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7747a9c3b8f8479c926fb399d574e36a_1560840878600.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10710",
                    "itemUrl": "https://img.soulapp.cn/interestTest/db4bd0f916ef4853b0b5a3e4f2e3a958_1560848014491.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/568659710be94bb4b0c22e342052a687_1561089791670.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30569",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2eda6e5f52384efba017942d0ea85a56_1568169427601.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30568",
                    "itemUrl": "https://img.soulapp.cn/interestTest/98b209eef28e4e5fb1c17aa0249804d5_1568169374370.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cdfbf1e190a44343940c296662d6df57_1560852516028.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90490",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/d7287bd0-afa8-4537-8ad5-7d70852f1038.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/59b97fa973ce400985482f17ce14e8f9_1561088368389.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1ec29f8892274c54add2e1b4da6c7285_1559276021567.png",
                    "price": 18,
                    "originalPrice": 22,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32730",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/a5b21ac5-303d-4c3f-a568-84b102d80b31.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30790",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b47d5b446cf14737b265fd05dd2add34_1560861595809.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31880",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bdf6d6809b374800a678527cd443dd82_1561088823062.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155390",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/bb9c6feb-bfca-4bec-ac79-42b06f940f72.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30559",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/d6201024-2026-41e5-9794-62c6dfc5e408.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e346cf05a49f46339952c27112d66118_1560843393232.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10960",
                    "itemUrl": "https://img.soulapp.cn/interestTest/325f8f35597d4022bf6aef7c27a0cb49_1563432215472.png",
                    "price": 10,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26061",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/af98a6b8-0e7f-486e-8e06-79a07f75ac58.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "10720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0487929fab8f42bbab91bac073af4884_1560848076111.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26060",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/32f8bd83-935d-479c-90de-8270a9846356.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "100060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0ea9117406c64b01847ce911dbf7952a_1560843014244.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f6d1e75fa31e4365907955512c41a7e3_1560842816720.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100065",
                    "itemUrl": "https://img.soulapp.cn/interestTest/952b68d898e54076a0828c24961333ee_1560844080489.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10130",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9d7465e2b4514343ad379ca636bbd32b_1560850840119.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0874ddade9a14e8bb6e44766673b1b73_1560839684929.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/80cb225e6aea4446a4c4708175dee87e_1565063065359.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32161",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0095be6a506546b2ba11dcb13d8e5199_1581311089114.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10139",
                    "itemUrl": "https://img.soulapp.cn/interestTest/420247559cdc4324a297a2f9f99d7d3d_1560855753127.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25860",
                    "itemUrl": "https://img.soulapp.cn/interestTest/05bb148fef5a4e11ba6d937a29bad447_1560840709351.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aa3489ca328846dfa09dec1ac417fd9b_1560840534000.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10132",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1bfd60a83b5747a5bf88a0b6dfc865ad_1560847490201.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170161",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b4949bf481504817a70f206e399e320e_1560847957800.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11220",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/5a6eebfe-36f6-4bf2-884b-2a488a4d76b3.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e37f14a9689442ffa45634b9012ebf49_1560847713509.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10376",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d0cc517698c447c6bd5da77b8121d5aa_1563432195365.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10133",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1fa14944fb69445888a1d70ffa1ba71f_1560850899826.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10375",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0e8b18ce71594ec4b053f4eab365435c_1561098058599.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10138",
                    "itemUrl": "https://img.soulapp.cn/interestTest/38b4e60eed4a4cd89476fb8d6aa377c7_1560855817648.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120900",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/bd9c6277-06dd-4338-8203-786c4b471401.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10137",
                    "itemUrl": "https://img.soulapp.cn/interestTest/01753f8de30c4768a008c8647f833d8b_1560851104029.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100070",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d06f0d0403a242378267a5db57be519e_1560844048898.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100071",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e7eb6771fd5849f1b177b143c722c4dc_1560843104119.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/90043c75bb9e4a7a8487c9887e3f4d47_1560844239905.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/de3b321c3bd042bcbe602d83b484553f_1560847827299.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/203e29cdae404cc98d8da7801654f1be_1560855808779.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32151",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2514a41fb798486a97e2978205787cca_1581311004575.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a784f975d7954e56965ad96d3ed08f6e_1559275614162.png",
                    "price": 9,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25630",
                    "itemUrl": "https://img.soulapp.cn/interestTest/66fa228237ca419a974d4737e3a44869_1560840847830.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32150",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ca70f870686b4c21962527c6d00c9c3a_1565058912856.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32390",
                    "itemUrl": "https://img.soulapp.cn/interestTest/034be27a484d4739a1c0584849f22925_1579490834460.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25879",
                    "itemUrl": "https://img.soulapp.cn/interestTest/66eb65d595c848848a07df482db95474_1560839997723.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20181",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aada65755d7848ffaa9789ae0558e9a5_1560852829649.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21270",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/9d69a716-013a-41da-b3ed-e35ff6c5605a.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "20180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52ecb9bdae704288a579c3e285456d21_1560840604287.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930206101",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f09ddecb0c79412b9d4a8a9f6f2c1eb9_1588045069508.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b5e62ff7d2dd40df85a841efd204dddb_1560842751623.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21000",
                    "itemUrl": "https://img.soulapp.cn/interestTest/174c2e1ca13748dc86048552dca2047c_1560839945864.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90621",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bda1e59d733040b5b89a0472d950b2d2_1560843166833.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25840",
                    "itemUrl": "https://img.soulapp.cn/interestTest/51b263f75db84928ba05061d3c17842e_1560840778110.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0e20787c3d5449e6b9e17420c2db055a_1564475619308.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32141",
                    "itemUrl": "https://img.soulapp.cn/interestTest/785673ce204a457b87fcf1cf60c85e00_1564475586658.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d0cc0ee2fc104b81bf0f42eaf9fb5829_1561000819182.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/eb52447b8e874bcd86ef4db2b7817b88_1579490639553.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32381",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0c7378352c884cd0ab6d07e54386b1e0_1579490716809.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25602",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52cd8780a9244480820b0431b99dba8b_1560839632802.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160381",
                    "itemUrl": "https://img.soulapp.cn/interestTest/954d06d7438244f992f5a33adf595455_1560845977414.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/30f3b366dedf41adafe3cfc0889fa22f_1560848304367.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/26c41b34fe8f44caaa8de0187b118434_1560853515533.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25604",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b33f7c34cd0641cbb96c5d7918b15e68_1560839896658.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25603",
                    "itemUrl": "https://img.soulapp.cn/interestTest/032a2099537447f4a8a10a0357e175d5_1560840025914.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32142",
                    "itemUrl": "https://img.soulapp.cn/interestTest/72ec0726559c4709b15bd6103c8e2ffb_1564475531840.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32143",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d002807fa1ac416f8e0dc2bd4925838a_1564475155073.png",
                    "price": 9999,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1d64abce01454a35b0d046c094e141f9_1568169777067.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11440",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/8aa5d47b-46a4-4b89-a714-e6acd76b3cc9.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ccfe23134d5d43cea93d7249c2576206_1560847618172.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/daf5895985954c43b5d6119c740d8863_1560845249377.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5c7d824fdb054c9bb54ecf3697331728_1560847873313.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/22f87d4901dd48d78a9ef1966ed0f979_1559275854822.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25850",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f6f22ba4f6bd44fda79c895a87a1ac4d_1561000856186.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/07ab353ce972422992c619269c2b356c_1560848149884.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90602",
                    "itemUrl": "https://img.soulapp.cn/interestTest/662679a2ae6841b193bb015ada12c853_1579491023522.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ef48225fde634976a0229280140e3f6a_1560843763529.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/09315e7645e34732abedb9848fd39842_1560850753754.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8e9615421dc34258a454113e90559f03_1560839883486.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/62455799512a4769a8ac8d4451a0d975_1560848065415.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10125",
                    "itemUrl": "https://img.soulapp.cn/interestTest/40f6f01665c24df99a678fea9d2e5bb3_1560856577169.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0bc59b40d79645f0a01555f4f740b6a2_1560843328740.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10126",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2661943bf68e43a99681e2ffeef84620_1585881468667.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9440453ed86e435e82b0e8d0e24450f7_1560843799007.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/60fe6efa11af4e57ac3bac9f7590786c_1560843311858.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20375",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/42fc0224-788d-48ce-8193-30662dc6460b.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160323",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-06/4712e968-b077-4e50-a9fa-514b5a25ba40.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21221",
                    "itemUrl": "https://img.soulapp.cn/interestTest/579dca9af0764086b5264d689ac4b54c_1560840565192.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160322",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/dd1539a7-0f32-42ea-9a73-8ce500bf0a72.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21220",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/7aad61e6-1bbf-4f27-90f8-fd16e5215cf4.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20372",
                    "itemUrl": "https://img.soulapp.cn/interestTest/55a37e78a7d84c7782824b4537786f75_1565058994242.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30181",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dcbe4a6fc7db44319988b08dfb01cc14_1560856450399.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7f79d69b5b084951b89cebbc173878c2_1579490420027.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ead05936d53842558a2438364fbcfdaf_1560856155827.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32361",
                    "itemUrl": "https://img.soulapp.cn/interestTest/673abfc0765a4510927c0027b43bbdec_1579490546760.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160321",
                    "itemUrl": "https://img.soulapp.cn/interestTest/89988c6f243d4ce0a58564c6664c6d29_1559275219689.png",
                    "price": 13,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c873c18851124d64952c93dc351d885b_1560840716136.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ee630be993b64ac39915c1c15ecc0d69_1559275263523.png",
                    "price": 13,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "314445",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3a99386c054b414ead56c4a0be2cab80_1585880532883.png",
                    "price": 10,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170125",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1b9a187ffc094b08a8c4b75285d3fcf6_1560843683392.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170124",
                    "itemUrl": "https://img.soulapp.cn/interestTest/85481ad19c714c309928c63ae313520a_1560843444908.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170123",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5a2810f47e6b48968ac6d457d1a96bcd_1560843751541.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32365",
                    "itemUrl": "https://img.soulapp.cn/interestTest/60b0acd6401145cfa9717392b79f530c_1580447746086.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170128",
                    "itemUrl": "https://img.soulapp.cn/interestTest/41366df1d8f546d898ecb9c194d417e1_1560843383547.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0cb00e7d9230485794731e35c218dea7_1563431912549.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a7f6c1c955fb4f01b9ede0389a5dd7aa_1560847742744.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20370",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0f076883ef914a708bc2e9189154e3eb_1560852535943.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11420",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/d3c36cfd-5049-4718-b011-af6e8afa7e02.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120700",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/56850ecc-abc1-4e22-8af7-64cf3f7438fc.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "170120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7ee24f24f0624bb2b5d1490df2ea2b4d_1560843299902.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170361",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/9e862e09-8824-4dc1-821d-1c8488283753.png",
                    "price": 50,
                    "originalPrice": 50,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20386",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e19255ac8fe34a2cb42d8dbc31898f61_1563432117819.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20385",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a49763f675de455384f39881a2234463_1563432093883.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10581",
                    "itemUrl": "https://img.soulapp.cn/interestTest/64f33381b14b42b8acf7231851c08f09_1581311216558.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/021078eca98c423086c09f3f61fda3a6_1559276812877.png",
                    "price": 14,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21230",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/70c03086-3994-40db-b499-2af2024888c2.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20141",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a039ec170d9c4010ac8318a552b3852b_1561000918613.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/089a969ec35f40439b4ed199e603bfb3_1560844517814.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31260",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b68ca023569e4f73b90d3ee970de2d91_1559275829773.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4a2c41a243e7410e9668630c476cb108_1560861411082.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30175",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5976c83bd0a146018d7f212610e201c4_1560848681877.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9628b89297d64c3ca828bf69b27562da_1560839865084.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10341",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ac9dc9dd26db463f9895d54f9ece763b_1560847596993.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/adf53e09963e406f8be9c13788e8545f_1560851180635.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bcc72332d881467395131101f366870a_1560839718666.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7950c0b6dd53497fae801e77eb64d94f_1560850724938.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90660",
                    "itemUrl": "https://img.soulapp.cn/interestTest/18900b30164b44d080b2b928223640d3_1560843351816.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90420",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e87c711399cd4d9bb38d35c35ac89da3_1560842960723.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160102",
                    "itemUrl": "https://img.soulapp.cn/interestTest/29ad5c92d3014a60970f349c41e97169_1559275197523.png",
                    "price": 11,
                    "originalPrice": 14,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20111",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bd8b6f4c75394691971855286664ab41_1560838743734.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7cd7c3a9f554457ab412330018655668_1560840775363.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20110",
                    "itemUrl": "https://img.soulapp.cn/interestTest/88d2eacdd05e4fd086d197f8e7854eef_1560840812000.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160103",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bf1cd81daabf4c9c91718df7ed1d71e4_1560845490042.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20350",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/48f8271b-b5fa-42f6-9c4a-acc5ec2514fc.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180390",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f3cc77a08340472b8de3a19930418c33_1572493517680.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32580",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/97cd9c73-6033-4ae4-9644-37d97bcd8aef.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1e7307282037486d854c2929e972547d_1560848389937.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32581",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/49b1a28f-0195-46cd-8c74-662501a9eae3.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6fbc2ddb50c147b3939dc9cf6dca66c9_1560843734359.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30161",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9d7b7df2734b458c9b3736d979e210ed_1560848363950.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160101",
                    "itemUrl": "https://img.soulapp.cn/interestTest/584325fb4df54b7ea6353e280407a8bf_1560843982272.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/86ef14373bc545259146f6d27c8b8a68_1560848000726.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b84722c4b6214ab48f974eea5a332998_1560839862331.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "100080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/46fe257c6aa9487fbf1b5928290c90b3_1560843048397.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "beard",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30167",
                    "itemUrl": "https://img.soulapp.cn/interestTest/25d05217469347fdad81c9a498c85045_1560847766033.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10316",
                    "itemUrl": "https://img.soulapp.cn/interestTest/69d40b0ff01d4353b3db67ac3e87bf83_1560855628421.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30166",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9a92e91efe1649bfbe0c7389d3fd7369_1560856164492.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10315",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bfbadbb7c7a149d6841a5465aecb2ea0_1560856368676.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30169",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e89fac340afb416897ce60b8bf539045_1560856194760.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10318",
                    "itemUrl": "https://img.soulapp.cn/interestTest/01e3c5d7beea4bc2a7c0a614bd62fd7c_1580447380663.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30168",
                    "itemUrl": "https://img.soulapp.cn/interestTest/88386017d191482d973f3f0597ef2596_1560856548567.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10317",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c69a101a416342369772cdb3cc5dbb72_1580447271257.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30163",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2c2c8bcda67840a29ac7bcf9ac110617_1560848548426.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b2026aa1d3294d63b60b59c367e5a935_1563431888620.png",
                    "price": 8,
                    "originalPrice": 8,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30162",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cf8d9e40c3674f0d9dc57e50f08a59a2_1560848445355.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30165",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0e79548c9ac6481289638c318f0ca627_1560848061304.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32340",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5f80bb39b4b744dd9a53fa97a1d8b11b_1576822751353.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30164",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cf0450d2209d4ba29f9ff26861fccc9e_1560847839693.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cf55eb8a061b4f76bbe0aeef7761f0e7_1560843347617.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90656",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/1d852d9b-3061-4b5e-abc6-010cbe379882.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10310",
                    "itemUrl": "https://img.soulapp.cn/interestTest/aa324e815de34177b73a415fb9629891_1560847788860.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3fd9641dabe54e22b1e101360f28444e_1560848044237.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10312",
                    "itemUrl": "https://img.soulapp.cn/interestTest/15483470c8244f9a9aef02d85ec92b19_1560847750237.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170144",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0aee021e8b5247edad58c73f30789a56_1561089219221.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10311",
                    "itemUrl": "https://img.soulapp.cn/interestTest/02fd80711b514263899cd0c15e2c1d83_1560847807490.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170143",
                    "itemUrl": "https://img.soulapp.cn/interestTest/47d6305fc850406e8fc9ef8b0b7073f2_1561089192764.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11400",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/bfcfcfaf-f961-469a-be0d-6946d8b78ee1.png",
                    "price": 19,
                    "originalPrice": 19,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10314",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c4eaa8bec7854c2784864ba4c1564c8a_1560856548597.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170142",
                    "itemUrl": "https://img.soulapp.cn/interestTest/643a1aefeb0d4ad39e17af61819ab4cd_1561089161057.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10313",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2af9304756744f5ab048df33cf03b9ea_1560855931413.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3abc011131ba46f5970b793d1ae8af24_1560840533597.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e9a77cdaf6614cd2a2159293f8d6a551_1560844397415.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5e5dea685d6a46d38af659af38f1f76b_1560848776909.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25810",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c3a9494600ca40d7a2303f1c33f43902_1560840776450.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/eb508e67ff404e459b181daf7a0ae8d8_1559275799363.png",
                    "price": 18,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31000",
                    "itemUrl": "https://img.soulapp.cn/interestTest/92699371956f4ab8a4e09690bda53a19_1560852641556.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20360",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c8d6756b34d84dc4b6c9dcb2f03023f7_1560839118787.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/25952457109e4a82a69f7346169c0078_1560855683883.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0d09c68e01b24b3a917c3e8143671d0f_1560856391426.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120910",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/5267e8c2-b890-4c4a-9596-498c6d0782ae.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/33d71a5f07bd49529e28077824a8c262_1585881575404.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25345",
                    "itemUrl": "https://img.soulapp.cn/interestTest/544f3e2f5bfd497aa86ebe60985a3008_1560841554334.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25344",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6260534dbb3d40559ee435445428f6bb_1560840869334.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25347",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8653670c6c9c4a01a2c3cffdbe47fc22_1560853386349.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25346",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9ae6893cff004bebb4b8abf231619dc1_1560841636671.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25348",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c6117aa54e934f68bf4ae6452b0955f5_1579490259377.png",
                    "price": 1,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160085",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b2952319dd3d4e9dba7983e2563fba13_1561098126742.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/01a4e89067a442e2b22a71cac3ec3408_1560844523285.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25580",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2e3542a669d4cd4a17e59503088bb08_1560839793643.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/72bb02856dbe4576b4b25500a8b08efe_1560839437157.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120860",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/0afe670a-ceb1-4a2e-931b-acca4f50b703.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30703",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7790837a5d8743fc9bbc9ea0302e85ad_1560856212147.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30702",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f2b251de62704e2c8c0dff392476edd8_1560848230509.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30705",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d0f2466359bc467c9fb5a5d61a524c2b_1560856576207.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30941",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c97fc9fddee94ce0852d634b0cb11546_1560860957075.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30940",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b444b8e3b86147db814353d13df132d3_1560938571465.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30701",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7ec58cb17a174a2c8382e4487b8c86df_1560848743904.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f55f15127685440dad86ff8e10f6c3d9_1560856043610.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20900",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d1d17ee36cac4e26911c6f2999d6b605_1560839490485.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d951ced7c6814744b2866252e748f03f_1559275015424.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25110",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3803c2095c014214a114fd84ac9d2f84_1560840688322.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4b881977fd0440b1929fdc52439009bd_1560842737753.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bec3a58a51a54c5fa5ac031af1cde672_1581311545425.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10070",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bea76d2c1457483f8ad0508c330077fd_1560851151579.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11161",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/e453a101-8ff6-400d-9357-aad7861c0c50.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10075",
                    "itemUrl": "https://img.soulapp.cn/interestTest/71c908d72c564ee6bf0f43def2645908_1561097897528.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120840",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/cefb38c5-401d-4e5d-8698-00bf6e9e8cfe.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1800bab81a6f47da82b0528b3e660494_1560843657285.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25560",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c0f688285c8d41bf9bb991d939f61ca7_1561000787677.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25320",
                    "itemUrl": "https://img.soulapp.cn/interestTest/86701662e11d4164bcb033dd67af35d1_1561000748575.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25562",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a22e89f3ec8148458fcec5f825649d53_1561000800906.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120601",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a792be7d24c543c0beded11f1be87170_1560843623541.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120602",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5edaf623dda14a07ba71e7042f76adde_1560843513313.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30921",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b72e163e195942eea93771fd32917e82_1560861067614.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30920",
                    "itemUrl": "https://img.soulapp.cn/interestTest/891975ec586a45e881d1ed3e818ade1b_1560849555505.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130220",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3b72c9d02186438f8232bce825d3a548_1560844111811.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d451e34f033041a4b20617193cab2ad0_1560847553451.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/666d0b3276374a6fac22493a7c55fff1_1560839230713.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e1eeee4980cc4729956b6452c8ad2082_1560842686310.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11380",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/88ffca75-78c8-4302-a9c5-8f24d2bb9671.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/642a6f79733948149ed848c8392d7aab_1581311460915.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25543",
                    "itemUrl": "https://img.soulapp.cn/interestTest/67833ff8ad1640d4ae77fddf17f77f7f_1563431972526.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/00abf27f72384fd791307455bb0f9e18_1560839850453.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9ca8cd93c3e94dbb86dc16a5a0cd593b_1560854134200.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a9f0db95a14846359a0adbdb058b2b65_1563431859260.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120421",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bdf60bddc84449e797caa79fb4588771_1560844101475.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f01c62acb5124287a263274908d6c076_1560840645491.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120660",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/342721de-d045-45b6-abd3-b27f37d66e62.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "25541",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1f9e6ba8de724c18a179a1bb6c4db131_1560839883324.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3c13ccb51da34b9ab521ff081baa5f43_1560853458784.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60155",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a54076ea6e144cb5891d88b3c387da7f_1560842813578.png",
                    "price": 3,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30901",
                    "itemUrl": "https://img.soulapp.cn/interestTest/29a70bdec1d44bb7904b04eabce9fd91_1560861450548.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30900",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d5300f79506c431e90f723b1f6e71ec0_1560861259817.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170082",
                    "itemUrl": "https://img.soulapp.cn/interestTest/97942c05e0564f90ab69028537fbd293_1560843647519.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c95a7d028db5498a9d0917da602476b2_1560840454597.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50119",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4177b67e20ba4051987c15b0d1c61f94_1560839065582.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/627d16c2435c4a95a832ea9385bcfcc0_1560847576909.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170081",
                    "itemUrl": "https://img.soulapp.cn/interestTest/71e0f7cfe7de4428a58e4df968754490_1560843713173.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10062",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/14070cf9-03d2-4804-95cd-ac94daae02b0.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/14e12cdb8a1f413a92659750a743c65a_1560843204989.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "130401",
                    "itemUrl": "https://img.soulapp.cn/interestTest/42b08ebbd89649869918a99d67e801c9_1560843894592.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyebrow",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10061",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/4d0e62df-cfea-4532-89af-457890e3a2cb.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "50120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/34d83442bea8435baea5f44242012460_1560839295507.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "face",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150245",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ab5b5a3b7eb64fa39ee6fd538786ae7c_1579491314804.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b13c381709024beda57503977c15e327_1576823310499.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150241",
                    "itemUrl": "https://img.soulapp.cn/interestTest/05e983f1fa084b77ad037e867fab1721_1576823447503.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/68ea9641adb8413096787ee6cf46b281_1560842765123.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10031",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fd377589410944d7beecc5f6fcfd6b37_1560848034362.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/530f52a439db48c7b92712e9409ed3a3_1581311359522.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "106102",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b69b775ec47842d49b6e87d0991a2a1b_1560843849243.png",
                    "price": 10,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10030",
                    "itemUrl": "https://img.soulapp.cn/interestTest/96a46e4663cb41e5be1505a9964cdecb_1560855784399.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/51b4faa18e0348d18b281e12e4942a3d_1560841717798.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25765",
                    "itemUrl": "https://img.soulapp.cn/interestTest/25f500d07550487a8a40771c14bd0a5b_1561000839083.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/525f7057d16f44eabfcd6299f0bfbaa4_1563431831386.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25766",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2df3d08f7dbc4aac85e26aba999c6f9b_1568169710356.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25769",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a92963abd57b46db89a508e9357b8235_1560839974777.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120400",
                    "itemUrl": "https://img.soulapp.cn/interestTest/20764ffcd1304869b96f8789e7cff533_1560844558704.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120880",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-07-15/1cff181d-b5ff-401d-ab1f-265edd353cf8.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120640",
                    "itemUrl": "https://img.soulapp.cn/interestTest/65f9944d34e94fb4a85a87fb3aae6990_1560843842455.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25760",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0e7b91db074749cab178fe29d9383d7b_1560853412855.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "21160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8a10ced6f3614cc684817b7a0deb6a8d_1560841089908.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150250",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f2baac4a2ae340feaa8048c47c880e72_1585882079200.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150270",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/9f58f2b0-c130-48c9-80ce-78f3d00588b9.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10280",
                    "itemUrl": "https://img.soulapp.cn/interestTest/13808b05da71440da56e728f7e0fcbb6_1560847573328.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8d4c41a648f24d1d8c421f85e7aaab75_1560847530540.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20086",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/11c91349-c23c-4eec-825a-f82a948cde49.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930205901",
                    "itemUrl": "https://img.soulapp.cn/interestTest/cac332e050b34137aafd938e974a9a1d_1588044777385.png",
                    "price": 3,
                    "originalPrice": 3,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32290",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2e598dd3feea4c39a10a5f61b10404be_1576822402483.png",
                    "price": 15,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25779",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e8b9a0c5ad204846b47cd6b8b0af72ef_1560839400645.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120630",
                    "itemUrl": "https://img.soulapp.cn/interestTest/02f4bf7df684477c83cd347648d0ce59_1560843390322.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/604773bfe16043b1a99b90947d6964bd_1560843921029.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25770",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/66e76e7b-cfc9-419f-84d2-f814469a0943.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20085",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8a5f73ca53954f959fec9e220798fa8b_1560839006117.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "90800",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/b493a159-d597-4fbf-bcab-dc46b5f0d691.png",
                    "price": 5,
                    "originalPrice": 5,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e43eacd9d146447cb270a7f362c6c8ec_1560839083263.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "150260",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/ec65b6ad-07c2-4ed1-bece-1de91c2cc6a1.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20730",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c272a67843104179810ecf7993b15c99_1561000973645.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152062",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c24a25cea46a433c8bc566ba00d71f24_1560847788196.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152061",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f943a0911b5043b4ade83fd91aad3773_1560847599074.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/52fd149e07464e76b4768cd37c751df6_1560847572187.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3d9c9a843d724cc2bb5c604f4c91b977_1560842988130.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20735",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2db6bdb0442044758b1fc838df84b013_1561000987811.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "91010",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/fbb21482-a7d9-4097-8f67-db423fc6dfb9.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26030",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7bbd8fa80c4e4bd8881f7bfc4a914779_1560841144156.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30783",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b94582e2ec6943d3bd0ce792cf22ab80_1560861491839.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5e0655d3627747e3865a92a260c85ecc_1561089710571.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30541",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9c096803d87f45e99c22c97fa1baf7a9_1565058833011.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32720",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/4a4472d7-9869-4949-b114-893d8f796dc5.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30540",
                    "itemUrl": "https://img.soulapp.cn/interestTest/11647244bea147a68dacbdb017b6671f_1560848634252.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30782",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4161bcae74d74d91a634f89332fa1d5a_1560938155568.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30301",
                    "itemUrl": "https://img.soulapp.cn/interestTest/59083cee4c81429fb2d92bf5935b4519_1560847872083.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30300",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0a0fabc9c77441ceb92ba2dbee6eec01_1560848611530.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30784",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1611f02004ad46fe9534163725047ed5_1560861623242.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30542",
                    "itemUrl": "https://img.soulapp.cn/interestTest/65a2043416144b4097a307a5871dc73a_1565058885830.png",
                    "price": 1,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30781",
                    "itemUrl": "https://img.soulapp.cn/interestTest/55e13d7d56084b7e9ccf15821ccbfb8f_1560938121853.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30780",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5550db4e18b14b5c9918213da0e8f9cf_1560861513454.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30545",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5cbb02ec111d469aa5962ea45c885300_1559276462196.png",
                    "price": 60,
                    "originalPrice": 60,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30302",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b85caa81ae424dadb96b7f4e4d5aeb92_1560847973139.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25180",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3c09e367c4de4fcb98ab6174ebd9613c_1560841302818.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155340",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/2ac8c13d-83a3-400a-89df-b8ab96334cb3.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/667cc935ef134b88b22e9be3f2c6a50e_1560838800199.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fe110d4ca78a49cb93575deda1065ddb_1561001001485.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "91000",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/c14cfc46-e328-4bd8-b52a-d53981971997.png",
                    "price": 25,
                    "originalPrice": 25,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20980",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6182460a265f48689d2a6ddc4b3040c5_1560839913242.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120460",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2ec860225744d6396daedce936e29dd_1560843930320.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ed7320d8ee074f78a745bc0303f1f475_1560841096017.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c82553f704a241f4ace801e0cfa03f7f_1560850930981.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31860",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ff76ad845a9343c282f152b31698955d_1561088798338.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32710",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/ebd12a38-4bf4-4765-9122-a072250794c8.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31620",
                    "itemUrl": "https://img.soulapp.cn/interestTest/24628d4e560b4bb4850f698abbc913cf_1561088328790.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30534",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/288e66aa-8161-42b4-9f93-a442a8237125.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10940",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4e6aa6d46f1d4c6eb246ea7bcca3690a_1561098080446.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30535",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/15105308-8141-473d-901f-c64ae9ba87a5.png",
                    "price": 109,
                    "originalPrice": 109,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152081",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/0d77281b-e264-4bff-bba3-cd28da34ccd4.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152080",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5e7673c87cf544abbed85faafc1dc654_1560843456554.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/7b60d3859f7640068290ffd81b7ee6c4_1560848273549.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25160",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c8afef7157b64845bb6a0889f8731389_1561000723809.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30760",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b95565b0b432468299201234cb0638c7_1560848340039.png",
                    "price": 30,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26010",
                    "itemUrl": "https://img.soulapp.cn/interestTest/709125972e944efa80a907f3e19db992_1560839940589.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d3c0ae0814b1449f81e9306e93fe4cae_1561089729583.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30520",
                    "itemUrl": "https://img.soulapp.cn/interestTest/86c6f8e1075246d4af09fe619605f827_1560849105249.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120440",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e2e6d15826d24d969dc469c89209758b_1560844164443.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2c37a4109da34efeaa6bf20515b6254f_1560844015566.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155360",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-10-27/d70c78ac-ea98-4c01-9e0f-db77fbf3a01e.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32700",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/cd7f8444-5d05-461e-bf44-7c9d8a6deb58.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9cf397d85311454e98aa1c4ddb58fa4f_1560847920290.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1aa68adc663445bb9fe785a4f0dfcda6_1561000959465.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f6d16a6b762c4035905091065ab82b78_1560848040319.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20960",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4bf219fb0dbc4cc5936b4497c10a3ef4_1560840462849.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155105",
                    "itemUrl": "https://img.soulapp.cn/interestTest/5a9bd78515814c57936c572063252d56_1560845436026.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "930205701",
                    "itemUrl": "https://img.soulapp.cn/interestTest/590e036ed55e4c869ed3233754a5ed92_1588044454529.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20725",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9966fe2ee04d4681aa1b174a70b30230_1560840673074.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120680",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-19/51650b0b-7af3-450a-b77c-31f8c2c0a190.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": true
                }, {
                    "itemId": "91020",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-12-21/029b4281-08cf-49a9-96a0-98d2532fa430.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mouth",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120432",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c85d2af04e464961a1ddb465fef5a146_1560843700167.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30750",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b7ad6d4d8e5741e0a54fcd70e1a471ed_1560849505871.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10920",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/8baf28a1-bb58-485a-a527-71aca6f83ed9.png",
                    "price": 10,
                    "originalPrice": 18,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/54e9f060c79a4be99f453a0a4355ccd4_1561000872639.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31840",
                    "itemUrl": "https://img.soulapp.cn/interestTest/de09b805c5664f8388cadcc295fafa9e_1561088771024.png",
                    "price": 16,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10925",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-11-16/e7af59f8-4d22-43c3-83cf-0a66d7d1d83d.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120430",
                    "itemUrl": "https://img.soulapp.cn/interestTest/779979227f4e4a4faed2a70b1f4ea829_1560843447774.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30990",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b101ead5b06f4ae0b6674298883144b2_1560860981999.png",
                    "price": 5,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120431",
                    "itemUrl": "https://img.soulapp.cn/interestTest/412b86c33b8648178616dcba2f24df56_1560844837790.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31600",
                    "itemUrl": "https://img.soulapp.cn/interestTest/522fd37a2a6d432dacf514a4c4bce542_1559275573140.png",
                    "price": 8,
                    "originalPrice": 16,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153110",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f9d176dbdf164deba7000574962b9059_1560865906431.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153115",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0b60a9ca6d3c4bee846897dff687c12f_1560865875765.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140040",
                    "itemUrl": "https://img.soulapp.cn/interestTest/17962d8969f84396a6d4aea5c145bb62_1560843028654.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30981",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b7b44ebf1d854981bf78484a1ceb05b2_1560938624747.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25380",
                    "itemUrl": "https://img.soulapp.cn/interestTest/46bc8ebbfc004965b1ad9af39dfba44c_1560840743652.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30980",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1a6213abadd243b8afd0d669e7312da2_1560849197626.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30741",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d2b2b8c2dd814e82a2c9eb99652f536e_1560856468343.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a3973f22835a436e9455ad757617b688_1560839660071.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30740",
                    "itemUrl": "https://img.soulapp.cn/interestTest/a3116e40ae6843cea480ee3ba8f32e28_1560848113271.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30505",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/cc0cc2e8-4ae0-43f9-98ba-5f088676c58a.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30504",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-07-31/485aa346-860e-48af-a3d4-4cfcf6c8c6cd.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30746",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/c07c11c5-cc5e-4356-9785-b445efdfa498.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30501",
                    "itemUrl": "https://img.soulapp.cn/interestTest/24552b2d5e8344ad9c61578e2c2cc2bf_1560848672311.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30743",
                    "itemUrl": "https://img.soulapp.cn/interestTest/54b0ab90833846d7be13847e9809e771_1560856044906.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30985",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2b1e83e3302c4a79ada869993bff9482_1560861309503.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30500",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b941273227bd4b9aab83bc6235771f84_1560848633334.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30742",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2fc09d80adba49d7af56481654c2274c_1560848661577.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30503",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bf0258af03804b02a1360596319f2795_1560856080029.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30745",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2021-05-26/1fe63be1-8c43-44ed-81f3-703075f1dc67.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30502",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bdc6b9897f954b23a1f38f4edddcd2df_1560856434374.png",
                    "price": 16,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20940",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d9c61cd5791549e0a0f44030e13d0e3d_1560840125239.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d8ce6a60edf042388e9f8488fd8337e1_1560848003360.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dd14c1a928954b5f8e330912b7c0c9c5_1560839326182.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10900",
                    "itemUrl": "https://img.soulapp.cn/interestTest/1b6da3dc976e420aa380c97044518769_1559276554110.png",
                    "price": 6,
                    "originalPrice": 12,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26000",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dab12b170bbf4104a1121a2c2e4b3078_1560840612436.png",
                    "price": 1,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152026",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f5662896f9894f26accc4034c4b5b8d5_1563432405908.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152025",
                    "itemUrl": "https://img.soulapp.cn/interestTest/dab633ae2efb451e853ba7d55fdddb5e_1563432387590.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152024",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ca02f45d868b4c949876a6d68b8ac7d3_1560847814038.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152023",
                    "itemUrl": "https://img.soulapp.cn/interestTest/419c4a0bb16947178695ea558d64406b_1560847944666.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152022",
                    "itemUrl": "https://img.soulapp.cn/interestTest/55860a3da1704e99829606eb83e939e6_1560847975275.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31820",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c531dcd8b0bf41c493cb8a80b09ce630_1561088741035.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152021",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b52d28c1fcc146e79ce363274f710d29_1560847685539.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152020",
                    "itemUrl": "https://img.soulapp.cn/interestTest/843953d411eb4a299ca83c19db5df0ff_1560843612396.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "110200",
                    "itemUrl": "https://img.soulapp.cn/interestTest/fb41c66976fb47c08c43135bc9fa0912_1560843428075.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyeslid",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "140060",
                    "itemUrl": "https://img.soulapp.cn/interestTest/06b8c2873f964dc2a391eb43a092cc20_1560842831338.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "blush",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30961",
                    "itemUrl": "https://img.soulapp.cn/interestTest/b55144a89b75437f8198655750c4f29d_1559276161026.png",
                    "price": 24,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30960",
                    "itemUrl": "https://img.soulapp.cn/interestTest/d9768632dde342eb97c398288e2b3499_1559276128843.png",
                    "price": 24,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "25120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/96f5c435d6d64372857383986e15d65f_1560839690145.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170700",
                    "itemUrl": "https://img.soulapp.cn/interestTest/0a168749a34b4b8cb2eb7f894cafc4cd_1560843588104.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120243",
                    "itemUrl": "https://img.soulapp.cn/interestTest/ebf82bb04f6c488ba57cbe9ad8961891_1560843999630.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30725",
                    "itemUrl": "https://img.soulapp.cn/interestTest/70ca15f1e1bc4dafb10a8164953b4650_1560849173356.png",
                    "price": 20,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30963",
                    "itemUrl": "https://img.soulapp.cn/interestTest/f6a79180a5aa4484bd3014f2a0b485be_1559276243143.png",
                    "price": 24,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30962",
                    "itemUrl": "https://img.soulapp.cn/interestTest/4f28c65b1827483bbad7f9a4b4ae2b4d_1559276202433.png",
                    "price": 24,
                    "originalPrice": 30,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30720",
                    "itemUrl": "https://img.soulapp.cn/interestTest/8482ab37691e4c92bf8f2259b16ff5ea_1560847742892.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152033",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/17b0eedf-611e-4255-b64a-46c45de8bcd5.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/2f6ae023a2ca4fed9ae151151c5da6e8_1560847863197.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30965",
                    "itemUrl": "https://img.soulapp.cn/interestTest/9b9454d63c6649bdad9f62d9cca57a5e_1560855991499.png",
                    "price": 10,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152032",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/8ac0df96-f865-4927-af03-36e8300063fd.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30964",
                    "itemUrl": "https://img.soulapp.cn/interestTest/c6406d421ff3412c81e73e555dd6480e_1560849279319.png",
                    "price": 5,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "152031",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-06-11/93307d97-dfee-48eb-853d-929efe040ad1.png",
                    "price": 1,
                    "originalPrice": 1,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "153120",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bfb3cd9b7c5f4ad58905f746ffc509f9_1560848218764.png",
                    "price": 0,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155300",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2020-10-27/75373dce-fe1f-4cf0-8fc1-70a3801c8fd3.png",
                    "price": 0,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 1,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "30707",
                    "itemUrl": "https://img.soulapp.cn/interestTest/230d0e3ac8624e0eb8252b3fe5b13091_1580447670317.png",
                    "price": 15,
                    "originalPrice": 15,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "70140",
                    "itemUrl": "https://img.soulapp.cn/interestTest/af04a7ef77f44d77b6d21e0ccf9517fe_1560842941957.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "spot",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120480",
                    "itemUrl": "https://img.soulapp.cn/interestTest/e7d716c5c4e44fb68234d72c27018b6b_1560844132585.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120481",
                    "itemUrl": "https://img.soulapp.cn/interestTest/55ee3bf9c6ae4aada76991ade012ff2d_1560844042705.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120482",
                    "itemUrl": "https://img.soulapp.cn/interestTest/bbb3df83c79f4d858b6783d41e1fab4c_1560843940159.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "120240",
                    "itemUrl": "https://img.soulapp.cn/interestTest/311db99f0deb40fc8181d731c71bf256_1560844801378.png",
                    "price": 1,
                    "originalPrice": 6,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "eyes",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20920",
                    "itemUrl": "https://img.soulapp.cn/interestTest/99eb7dbb8ea845ff88fd139b046ed25b_1560840160375.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "60100",
                    "itemUrl": "https://img.soulapp.cn/interestTest/6223cd36675741e4ab14398d8ffd08c4_1560842852905.png",
                    "price": 3,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 3,
                    "categoryAlias": "nose",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "31800",
                    "itemUrl": "https://img.soulapp.cn/interestTest/3c168ea917f84cc886eddbca2d246249_1561088703292.png",
                    "price": 0,
                    "originalPrice": 20,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "155420",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/54dbde0b-3117-4c5d-b4e6-65518bd7fc34.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "jewelry",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "20485",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/c0be5c43-584e-4360-999d-572289626a1b.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11460",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-05-05/0ac2e0ce-0d32-452e-a0ce-e9bd6694108d.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160660",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-05-05/78637575-682d-4f1f-b8e1-26cc323d6c48.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "26105",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/a32ac5ed-c91b-4c20-8f9e-ba4427bf440a.png",
                    "price": 10,
                    "originalPrice": 10,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hair",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "160650",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/6b2f9693-2f7b-46f5-94b0-2ce6929f6171.png",
                    "price": 50,
                    "originalPrice": 50,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "mask",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "180010",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/fee12a27-1064-4318-82fd-4ec9969033d4.png",
                    "price": 199,
                    "originalPrice": 199,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "cap",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170850",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/3cda2482-8f94-49d4-9519-c6e1ea77e507.png",
                    "price": 50,
                    "originalPrice": 50,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "170860",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/3cf5f0d0-4a01-4b3a-bf63-48587c497b41.png",
                    "price": 50,
                    "originalPrice": 50,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "glasses",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "32760",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-05-06/808272db-500a-4496-97e2-77fe77294550.png",
                    "price": 0,
                    "originalPrice": 0,
                    "priceLabel": 5,
                    "chargeType": 0,
                    "categoryAlias": "dress",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10321",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/a86b9620-2e35-45ae-b09d-9d4cd95c4cb8.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10221",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/2ebb6ffb-1deb-4660-a2ae-66338788a39c.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "11002",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/82685683-9432-4c3a-9ee1-788d27849448.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }, {
                    "itemId": "10345",
                    "itemUrl": "https://china-img.soulapp.cn/admin/2022-01-14/91b4b04f-3465-4078-bbf6-d1e6dda2673b.png",
                    "price": 99,
                    "originalPrice": 99,
                    "priceLabel": 5,
                    "chargeType": 2,
                    "categoryAlias": "hat",
                    "propType": null,
                    "limitedFlag": null,
                    "vipPrice": 0,
                    "vipExclusive": false
                }]
            },
            "success": true
        })
    }
    if (e == 'https://api-a.soulapp.cn/cuteface/getAllSuit') {
        // {gender: '0'}
        a.success({
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
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#f9f9f9\",\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":-0.012691100951259304,\"x\":0,\"y\":14,\"scale\":0.8473695394763284},\"color\":[\"C1B6AE\"],\"id\":\"130441\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"fff0eb\"],\"id\":\"55060\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-7,\"scale\":1},\"color\":[0.5],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":-1.0187808468127955,\"x\":0,\"y\":0,\"scale\":0.9252037369820957},\"color\":[0.8],\"id\":\"60040\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":1,\"scale\":1},\"color\":[\"CB3F31\"],\"id\":\"120740\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-5,\"scale\":1},\"color\":[],\"id\":\"90020\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-1,\"scale\":1},\"color\":[],\"id\":\"155300\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"32265\",\"type\":\"dress\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-50,\"scale\":1},\"color\":[],\"id\":\"11040\",\"type\":\"hat\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"dfd5cc\",\"cec4bc\",\"c1b6ae\"],\"id\":\"26080\",\"type\":\"hair\"}],\"source\":\"1\"}\n\n",
                    "createTime": 1603941439000,
                    "updateTime": 1603958770000,
                    "vipExclusive": false,
                    "price": 18,
                    "hasPurchase": false
                }, {
                    "id": 48,
                    "suitId": "02101",
                    "suitName": "酷Boy",
                    "sort": 14,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-09-24/b6120278-e54c-4fde-960e-93922b4b7829.png",
                    "itemIdList": ["40020", "110020", "25810", "170080", "55060", "130100", "120421", "60160", "90080", "70060", "153120", "31920"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#ededed\",\"bgColor\":\"1:500\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.4],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"302C2C\",\"0C0A0A\",\"242121\"],\"id\":\"25810\",\"type\":\"hair\"},{\"transform\":{\"rotate\":-8.93632378631774,\"x\":0,\"y\":0,\"scale\":1.0407018739612823},\"color\":[],\"id\":\"170080\",\"type\":\"glasses\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffe8df\"],\"id\":\"55060\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"452F29\"],\"id\":\"130100\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0.02224550829644506,\"x\":0,\"y\":0,\"scale\":1.0431396644433923},\"color\":[\"700707\"],\"id\":\"120421\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60160\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"90080\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-9,\"scale\":1},\"color\":[0.25],\"id\":\"70060\",\"type\":\"spot\"},{\"transform\":{\"rotate\":0,\"x\":141,\"y\":-78,\"scale\":1},\"color\":[],\"id\":\"153120\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"31920\",\"type\":\"dress\"}],\"source\":\"1\"}\n\n",
                    "createTime": 1600938424000,
                    "updateTime": 1600938452000,
                    "vipExclusive": false,
                    "price": 40,
                    "hasPurchase": false
                }, {
                    "id": 45,
                    "suitId": "02100",
                    "suitName": "发带男",
                    "sort": 15,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-08-18/9b99b584-1504-449c-ab01-7e74dd223e07.png",
                    "itemIdList": ["40020", "110020", "120180", "130300", "55050", "25683", "10540", "90180", "60160", "170125", "150200", "31120"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"4:271\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"110020\",\"color\":[0.4],\"type\":\"eyeslid\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120180\",\"type\":\"eyes\",\"color\":[\"5b86b9\"],\"transform\":{\"x\":0,\"y\":12,\"scale\":1,\"rotate\":0}},{\"id\":\"130300\",\"type\":\"eyebrow\",\"color\":[\"452F29\"],\"transform\":{\"x\":5,\"y\":35,\"scale\":1.0917361665909675,\"rotate\":0.11628542080601752}},{\"id\":\"55050\",\"type\":\"face\",\"color\":[\"f1c8ad\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25683\",\"type\":\"hair\",\"color\":[\"8F96B0\",\"717A91\",\"6B7184\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10540\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":51,\"scale\":1.0224743381775192,\"rotate\":1.2925204928450063}},{\"id\":\"90180\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":0.9490829153097016,\"rotate\":0.852912098364439}},{\"id\":\"60160\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":4,\"scale\":0.8880042331927495,\"rotate\":1.2140881853623848}},{\"id\":\"170125\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":47,\"scale\":0.8853558354124914,\"rotate\":-1.428244620666798}},{\"id\":\"150200\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31120\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1597748821000,
                    "updateTime": 1600938190000,
                    "vipExclusive": false,
                    "price": 39,
                    "hasPurchase": false
                }, {
                    "id": 43,
                    "suitId": "00005",
                    "suitName": "会员男1",
                    "sort": 30,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/f1f54a62-69c6-446b-947d-166aa374ae7d.png",
                    "itemIdList": ["40020", "", "", "26060", "130020", "120720", "110180", "60040", "140100", "55050", "90160", "30579"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#f9f9f9\",\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"\",\"type\":\"hat\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"836B64\"],\"id\":\"\",\"type\":\"beard\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"dfd5cc\",\"cec4bc\",\"c1b6ae\"],\"id\":\"26060\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":4,\"y\":25,\"scale\":1},\"color\":[\"C1B6AE\"],\"id\":\"130020\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":-1.7418791344726625,\"x\":0,\"y\":0,\"scale\":0.9411354921550531},\"color\":[\"8e5b5b\"],\"id\":\"120720\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":16,\"scale\":1},\"color\":[0.5],\"id\":\"110180\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":4.184759567149146,\"x\":0,\"y\":4,\"scale\":0.7908513436480226},\"color\":[0.8],\"id\":\"60040\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"140100\",\"type\":\"blush\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffe8df\"],\"id\":\"55050\",\"type\":\"face\"},{\"transform\":{\"rotate\":-0.7313652684977564,\"x\":0,\"y\":-5,\"scale\":0.6574122137292818},\"color\":[],\"id\":\"90160\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"30579\",\"type\":\"dress\"}],\"source\":\"1\"}",
                    "createTime": 1594982038000,
                    "updateTime": 1594982043000,
                    "vipExclusive": true,
                    "price": 21,
                    "hasPurchase": false
                }, {
                    "id": 11,
                    "suitId": "02001",
                    "suitName": "紫头发卫衣",
                    "sort": 100,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/9ebf6b55-1751-42d7-9be7-a90ac129472f.png",
                    "itemIdList": ["40020", "60160", "90360", "170760", "55050", "120024", "130640", "140060", "110200", "80020", "10730", "152080", "25682", "70080", "30167"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#ed4956\",\"bgColor\":\"3:1000\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60160\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"90360\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"170760\",\"type\":\"glasses\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffece5\"],\"id\":\"55050\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"5d1803\"],\"id\":\"120024\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":-8,\"y\":1,\"scale\":1},\"color\":[\"242121\"],\"id\":\"130640\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"140060\",\"type\":\"blush\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.5],\"id\":\"110200\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"80020\",\"type\":\"mole\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"10730\",\"type\":\"hat\"},{\"transform\":{\"rotate\":-1.0989110129090571,\"x\":0,\"y\":0,\"scale\":0.7377949450498272},\"color\":[],\"id\":\"152080\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"5A6FD8\",\"435EBF\",\"4453A2\"],\"id\":\"25682\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.25],\"id\":\"70080\",\"type\":\"spot\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"30167\",\"type\":\"dress\"}],\"source\":\"1\"}",
                    "createTime": 1594713327000,
                    "updateTime": 1594717119000,
                    "vipExclusive": false,
                    "price": 29,
                    "hasPurchase": false
                }, {
                    "id": 12,
                    "suitId": "02002",
                    "suitName": "假装年轻",
                    "sort": 200,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/022f3211-90a0-4d9d-ae14-95cbf77ad158.png",
                    "itemIdList": ["40020", "110020", "55040", "130401", "120024", "70140", "", "170128", "31880", "25641", "60100", "90440"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "\n{\"backgroundColor\":\"#e1e1e1\",\"bgColor\":\"1:1000\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.4],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffe8df\"],\"id\":\"55040\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-10,\"scale\":1},\"color\":[\"6B7184\"],\"id\":\"130401\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"18346d\"],\"id\":\"120024\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-5,\"scale\":1},\"color\":[0.25],\"id\":\"70140\",\"type\":\"spot\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"\",\"type\":\"blush\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"170128\",\"type\":\"glasses\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"31880\",\"type\":\"dress\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"8F96B0\",\"717A91\",\"6B7184\"],\"id\":\"25641\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60100\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"90440\",\"type\":\"mouth\"}],\"source\":\"1\"}",
                    "createTime": 1594716337000,
                    "updateTime": 1594717121000,
                    "vipExclusive": false,
                    "price": 34,
                    "hasPurchase": false
                }, {
                    "id": 13,
                    "suitId": "02003",
                    "suitName": "小恶魔生气了",
                    "sort": 300,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/3c759fb2-0010-4e43-886a-6984c081dab4.png",
                    "itemIdList": ["40020", "55050", "30175", "60040", "", "25180", "130400", "120400", "110040", "90160", "", "", "170124", "10133", "", "155180"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"5:43\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"55050\",\"type\":\"face\",\"color\":[\"ffe4d9\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30175\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60040\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":1,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25180\",\"type\":\"hair\",\"color\":[\"302C2C\",\"0C0A0A\",\"242121\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130400\",\"type\":\"eyebrow\",\"color\":[\"452F29\"],\"transform\":{\"x\":6,\"y\":-1,\"scale\":1.0386300844170058,\"rotate\":-1.8732454500550115}},{\"id\":\"120400\",\"type\":\"eyes\",\"color\":[\"1a1820\"],\"transform\":{\"x\":0,\"y\":-2,\"scale\":1,\"rotate\":0}},{\"id\":\"110040\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":7,\"scale\":1,\"rotate\":0}},{\"id\":\"90160\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":-1,\"scale\":0.8815114860284015,\"rotate\":-0.2924886762549634}},{\"id\":\"\",\"type\":\"mole\",\"color\":[],\"transform\":{\"x\":-10,\"y\":-16,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":8,\"scale\":1.009972150609808,\"rotate\":33.43583247742867}},{\"id\":\"170124\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10133\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":151,\"y\":154,\"scale\":0.2363013014287511,\"rotate\":-12.684599902447905}},{\"id\":\"155180\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594716598000,
                    "updateTime": 1594717124000,
                    "vipExclusive": false,
                    "price": 30,
                    "hasPurchase": false
                }, {
                    "id": 14,
                    "suitId": "02004",
                    "suitName": "恶魔在身边",
                    "sort": 400,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/03123a47-0262-43d2-974d-3c88fdaa49cb.png",
                    "itemIdList": ["40020", "130200", "90180", "10130", "55040", "160400", "120180", "110020", "80040", "140160", "170100", "31180", "150120", "25020", "60020"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"7:642\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"130200\",\"type\":\"eyebrow\",\"color\":[\"6B7184\"],\"transform\":{\"x\":0,\"y\":12,\"scale\":0.9923032102821441,\"rotate\":-12.42017681724407}},{\"id\":\"90180\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10130\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55040\",\"type\":\"face\",\"color\":[\"ffdccd\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"160400\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120180\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"110020\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"80040\",\"type\":\"mole\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"140160\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"170100\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31180\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"150120\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25020\",\"type\":\"hair\",\"color\":[\"FBF4F6\",\"EADFE3\",\"e1d5dc\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60020\",\"color\":[0.8],\"hide\":false,\"type\":\"nose\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594716657000,
                    "updateTime": 1594717128000,
                    "vipExclusive": false,
                    "price": 29,
                    "hasPurchase": false
                }, {
                    "id": 15,
                    "suitId": "02005",
                    "suitName": "斯文败类的头像",
                    "sort": 500,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/0278d45e-46b9-48c1-bccc-422863745281.png",
                    "itemIdList": ["40020", "60020", "32100", "55119", "25542", "120080", "110020", "90040", "80040", "170100", "150120", "130020"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#bbe1fa\",\"bgColor\":\"7:181\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60020\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"32100\",\"type\":\"dress\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffece5\"],\"id\":\"55119\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"8F96B0\",\"717A91\",\"6B7184\"],\"id\":\"25542\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":4,\"scale\":1},\"color\":[\"18346d\"],\"id\":\"120080\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.5],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":-4.0068293090552425,\"x\":7,\"y\":-2,\"scale\":0.896768025479086},\"color\":[],\"id\":\"90040\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"80040\",\"type\":\"mole\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"hide\":false,\"color\":[],\"id\":\"170100\",\"type\":\"glasses\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"150120\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":-2.9079118183193953,\"x\":5,\"y\":0,\"scale\":1.1317815787942287},\"color\":[\"6B7184\"],\"id\":\"130020\",\"type\":\"eyebrow\"}],\"source\":\"1\"}",
                    "createTime": 1594716716000,
                    "updateTime": 1594717132000,
                    "vipExclusive": false,
                    "price": 13,
                    "hasPurchase": false
                }, {
                    "id": 16,
                    "suitId": "02006",
                    "suitName": "年轻小伙",
                    "sort": 600,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/ff8018fd-874d-4336-8a28-99d84c1392d5.png",
                    "itemIdList": ["40020", "25684", "130121", "120060", "110100", "60020", "90561", "80040", "70060", "140020", "150120", "10040", "55030", "170143", "31360"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"22:258\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"25684\",\"type\":\"hair\",\"color\":[\"dfd5cc\",\"cec4bc\",\"c1b6ae\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130121\",\"type\":\"eyebrow\",\"color\":[\"452F29\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120060\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"110100\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60020\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90561\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"80040\",\"type\":\"mole\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"70060\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"140020\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"150120\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10040\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55030\",\"type\":\"face\",\"color\":[\"ffe8df\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"170143\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31360\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594716779000,
                    "updateTime": 1594717135000,
                    "vipExclusive": false,
                    "price": 39,
                    "hasPurchase": false
                }, {
                    "id": 17,
                    "suitId": "02007",
                    "suitName": "独角兽朋克",
                    "sort": 700,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/8578b7d2-427a-4e91-bc02-07b950d4b80f.png",
                    "itemIdList": ["40020", "25683", "130780", "120602", "110100", "10820", "152032", "170250", "60140", "55030", "90600", "80040", "31920"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#9eabbb\",\"bgColor\":\"9:230\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"9999FF\",\"8686EA\",\"7D7DEA\"],\"id\":\"25683\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"7D7DEA\"],\"id\":\"130780\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"81698f\"],\"id\":\"120602\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.5],\"id\":\"110100\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"10820\",\"type\":\"hat\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"152032\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"170250\",\"type\":\"glasses\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60140\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffe4d9\"],\"id\":\"55030\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"90600\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"80040\",\"type\":\"mole\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"31920\",\"type\":\"dress\"}],\"source\":\"1\"}",
                    "createTime": 1594716840000,
                    "updateTime": 1594717138000,
                    "vipExclusive": false,
                    "price": 87,
                    "hasPurchase": false
                }, {
                    "id": 18,
                    "suitId": "02008",
                    "suitName": "学生套装",
                    "sort": 800,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/82f18f14-26b6-413a-b2a8-fedf28ff9099.png",
                    "itemIdList": ["40020", "130200", "110020", "60020", "70020", "140020", "150120", "55119", "120021", "90040", "170100", "31465", "25541"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"4:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"130200\",\"type\":\"eyebrow\",\"color\":[\"836B64\"],\"transform\":{\"x\":0,\"y\":-8,\"scale\":1.1039892375285658,\"rotate\":-10.29079280623945}},{\"id\":\"110020\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60020\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"70020\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"140020\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"150120\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55119\",\"type\":\"face\",\"color\":[\"ffece5\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120021\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90040\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":-7,\"scale\":1,\"rotate\":0}},{\"id\":\"170100\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31465\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25541\",\"type\":\"hair\",\"color\":[\"8F7165\",\"775B52\",\"6B554C\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594716893000,
                    "updateTime": 1594717149000,
                    "vipExclusive": false,
                    "price": 18,
                    "hasPurchase": false
                }, {
                    "id": 19,
                    "suitId": "02009",
                    "suitName": "小黄鸭笑哈哈",
                    "sort": 900,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/d76a09e5-4db4-427e-ba49-0bb0d300f6d8.png",
                    "itemIdList": ["40020", "130100", "110080", "60020", "170040", "30503", "55060", "25601", "10780", "70140", "120022", "90560"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"20:368\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"130100\",\"type\":\"eyebrow\",\"color\":[\"452F29\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"110080\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60020\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"170040\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30503\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55060\",\"type\":\"face\",\"color\":[\"ffe8df\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25601\",\"type\":\"hair\",\"color\":[\"7D3F40\",\"662F32\",\"5E2F30\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10780\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"70140\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120022\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90560\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594716954000,
                    "updateTime": 1594717145000,
                    "vipExclusive": false,
                    "price": 35,
                    "hasPurchase": false
                }, {
                    "id": 20,
                    "suitId": "02010",
                    "suitName": "柠檬头花衬衫",
                    "sort": 1000,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-14/00906bae-a1fe-4ac1-9f1e-5a7fc9517a9d.png",
                    "itemIdList": ["40020", "60020", "55119", "110020", "", "25685", "130100", "170080", "80020", "120060", "90560", "155060", "30960", "10168"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"15:270\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"60020\",\"color\":[0.8],\"type\":\"nose\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55119\",\"type\":\"face\",\"color\":[\"fff0eb\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"110020\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":-11,\"scale\":1.4125865711271417,\"rotate\":-4.521936528539883}},{\"id\":\"\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":8,\"scale\":1.009972150609808,\"rotate\":33.43583247742867}},{\"id\":\"25685\",\"type\":\"hair\",\"color\":[\"302C2C\",\"0C0A0A\",\"242121\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130100\",\"type\":\"eyebrow\",\"color\":[\"242121\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"170080\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":12,\"scale\":1,\"rotate\":0}},{\"id\":\"80020\",\"type\":\"mole\",\"color\":[],\"transform\":{\"x\":-10,\"y\":-16,\"scale\":1,\"rotate\":0}},{\"id\":\"120060\",\"type\":\"eyes\",\"color\":[\"745d3b\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90560\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"155060\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30960\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10168\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594717023000,
                    "updateTime": 1594717142000,
                    "vipExclusive": false,
                    "price": 38,
                    "hasPurchase": false
                }, {
                    "id": 21,
                    "suitId": "02011",
                    "suitName": "猪猪小奶狗",
                    "sort": 1100,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/767596dd-f6ed-4dbc-a5d2-d18630355c71.png",
                    "itemIdList": ["40020", "110020", "55060", "60020", "", "130200", "120480", "30164", "140060", "25020", "90100", "10341"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#d4eefa\",\"bgColor\":\"7:1\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.4],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"fff0eb\"],\"id\":\"55060\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60020\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"\",\"type\":\"jewelry\"},{\"transform\":{\"rotate\":-10.29079280623945,\"x\":0,\"y\":-8,\"scale\":1.1039892375285658},\"color\":[\"836B64\"],\"id\":\"130200\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"5d1803\"],\"id\":\"120480\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"30164\",\"type\":\"dress\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"140060\",\"type\":\"blush\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"8F7165\",\"775B52\",\"6B554C\"],\"id\":\"25020\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-7,\"scale\":1},\"color\":[],\"id\":\"90100\",\"type\":\"mouth\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"10341\",\"type\":\"hat\"}],\"source\":\"1\"}",
                    "createTime": 1594783402000,
                    "updateTime": 1594981882000,
                    "vipExclusive": false,
                    "price": 9,
                    "hasPurchase": false
                }, {
                    "id": 35,
                    "suitId": "02012",
                    "suitName": "棋盘格",
                    "sort": 1200,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/d3a87571-8fcc-4e04-b5dc-fd5732cbb60a.png",
                    "itemIdList": ["40020", "", "", "", "110020", "55050", "60040", "25040", "31000", "120220", "130120", "90140"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"backgroundColor\":\"#f9f9f9\",\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"color\":[],\"id\":\"40020\",\"type\":\"body\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"836B64\"],\"id\":\"\",\"type\":\"beard\"},{\"transform\":{\"rotate\":-1.5608765948483607,\"x\":0,\"y\":-14,\"scale\":0.9659044428798893},\"color\":[],\"id\":\"\",\"type\":\"mask\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.25],\"id\":\"\",\"type\":\"spot\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":-9,\"scale\":1},\"color\":[0.5],\"id\":\"110020\",\"type\":\"eyeslid\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"ffece5\"],\"id\":\"55050\",\"type\":\"face\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[0.8],\"id\":\"60040\",\"type\":\"nose\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"8F7165\",\"775B52\",\"6B554C\"],\"id\":\"25040\",\"type\":\"hair\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"31000\",\"type\":\"dress\"},{\"transform\":{\"rotate\":-5.735577512037623,\"x\":0,\"y\":-1,\"scale\":1.0217914912862782},\"color\":[\"897152\"],\"id\":\"120220\",\"type\":\"eyes\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[\"836B64\"],\"id\":\"130120\",\"type\":\"eyebrow\"},{\"transform\":{\"rotate\":0,\"x\":0,\"y\":0,\"scale\":1},\"color\":[],\"id\":\"90140\",\"type\":\"mouth\"}],\"source\":\"1\"}",
                    "createTime": 1594976203000,
                    "updateTime": 1594976300000,
                    "vipExclusive": false,
                    "price": 5,
                    "hasPurchase": false
                }, {
                    "id": 36,
                    "suitId": "02013",
                    "suitName": "古风1",
                    "sort": 1300,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/8776c455-6300-41aa-91af-a1d228883ea5.png",
                    "itemIdList": ["40020", "110020", "25703", "30577", "120345", "55050", "60020", "90040", "130100"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"110020\",\"color\":[0.4],\"type\":\"eyeslid\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25703\",\"type\":\"hair\",\"color\":[\"F3D7B5\",\"E2C29F\",\"DDBA94\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30577\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120345\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":1,\"y\":-2,\"scale\":1,\"rotate\":0}},{\"id\":\"55050\",\"type\":\"face\",\"color\":[\"ffece5\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60020\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":-1,\"scale\":1,\"rotate\":0}},{\"id\":\"90040\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1.117189687682733,\"rotate\":-0.23807281759820587}},{\"id\":\"130100\",\"type\":\"eyebrow\",\"color\":[\"72473C\"],\"transform\":{\"x\":7,\"y\":0,\"scale\":1.0107374282431063,\"rotate\":-0.8936211887358274}}]}",
                    "createTime": 1594976290000,
                    "updateTime": 1594976306000,
                    "vipExclusive": false,
                    "price": 61,
                    "hasPurchase": false
                }, {
                    "id": 37,
                    "suitId": "02014",
                    "suitName": "古风2",
                    "sort": 1400,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/a8db9f5c-4274-49ab-9b13-780aa4d2e04c.png",
                    "itemIdList": ["40020", "", "", "", "150120", "130340", "120220", "110020", "55050", "60040", "90160", "30576", "25700"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"4:116\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"\",\"type\":\"beard\",\"color\":[\"836B64\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":0,\"y\":-14,\"scale\":0.9659044428798893,\"rotate\":-1.5608765948483607}},{\"id\":\"\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"150120\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":-4,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130340\",\"type\":\"eyebrow\",\"color\":[\"6B7184\"],\"transform\":{\"x\":0,\"y\":-4,\"scale\":1.1844148868399258,\"rotate\":-4.127128790092278}},{\"id\":\"120220\",\"type\":\"eyes\",\"color\":[\"466196\"],\"transform\":{\"x\":0,\"y\":-1,\"scale\":1.0217914912862782,\"rotate\":-5.735577512037623}},{\"id\":\"110020\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":-9,\"scale\":1,\"rotate\":0}},{\"id\":\"55050\",\"type\":\"face\",\"color\":[\"ffece5\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"60040\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90160\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30576\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25700\",\"type\":\"hair\",\"color\":[\"f1a724\",\"d8901d\",\"cc841b\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594976352000,
                    "updateTime": 1594976358000,
                    "vipExclusive": false,
                    "price": 29,
                    "hasPurchase": false
                }, {
                    "id": 38,
                    "suitId": "02015",
                    "suitName": "麋鹿森林",
                    "sort": 1500,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/d1056290-4d46-4495-8454-20cfcd9b22fa.png",
                    "itemIdList": ["40020", "", "", "80040", "", "31280", "25040", "10840", "130480", "140020", "90180", "60040", "153081", "120060", "110100", "55119"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"\",\"type\":\"beard\",\"color\":[\"836B64\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":0,\"y\":-14,\"scale\":0.9659044428798893,\"rotate\":-1.5608765948483607}},{\"id\":\"80040\",\"type\":\"mole\",\"color\":[],\"transform\":{\"x\":0,\"y\":3,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"spot\",\"color\":[0.25],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31280\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25040\",\"type\":\"hair\",\"color\":[\"C1D169\",\"B5C15D\",\"A9B552\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10840\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130480\",\"type\":\"eyebrow\",\"color\":[\"536B5F\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"140020\",\"type\":\"blush\",\"color\":[],\"transform\":{\"x\":0,\"y\":19,\"scale\":1,\"rotate\":0}},{\"id\":\"90180\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":-2,\"scale\":1,\"rotate\":0}},{\"id\":\"60040\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":5,\"y\":-3,\"scale\":1,\"rotate\":0}},{\"id\":\"153081\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":18,\"y\":192,\"scale\":2.0322841965421294,\"rotate\":145.907714109171}},{\"id\":\"120060\",\"type\":\"eyes\",\"color\":[\"4d4d4d\"],\"transform\":{\"x\":-1,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"110100\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":6,\"y\":-5,\"scale\":1.0056221828439709,\"rotate\":1.0841189877773132}},{\"id\":\"55119\",\"type\":\"face\",\"color\":[\"ffece5\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594976438000,
                    "updateTime": 1594976442000,
                    "vipExclusive": false,
                    "price": 46,
                    "hasPurchase": false
                }, {
                    "id": 39,
                    "suitId": "02016",
                    "suitName": "米奇头男",
                    "sort": 1600,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-31/bc7b693b-de72-4fd6-9957-8fdef9594ae0.png",
                    "itemIdList": ["40020", "55020", "60020", "30702", "10185", "90340", "155200", "120481", "25320", "130320", "110040", "160460"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"55020\",\"color\":[\"ffe8df\"],\"type\":\"face\"},{\"id\":\"60020\",\"color\":[0.8],\"type\":\"nose\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30702\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"10185\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90340\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":0.6919521271328168,\"rotate\":-0.9808182712613096}},{\"id\":\"155200\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":-2,\"scale\":1,\"rotate\":0}},{\"id\":\"120481\",\"type\":\"eyes\",\"color\":[\"3e4831\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25320\",\"type\":\"hair\",\"color\":[\"5B7E80\",\"486B6B\",\"445F60\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130320\",\"type\":\"eyebrow\",\"color\":[\"536B5F\"],\"transform\":{\"x\":0,\"y\":5,\"scale\":1,\"rotate\":0}},{\"id\":\"110040\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":-7,\"scale\":1,\"rotate\":0}},{\"id\":\"160460\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":88,\"y\":272,\"scale\":0.07807772709221421,\"rotate\":10.295975830489567}}]}",
                    "createTime": 1594976503000,
                    "updateTime": 1596187108000,
                    "vipExclusive": false,
                    "price": 10,
                    "hasPurchase": false
                }, {
                    "id": 40,
                    "suitId": "02017",
                    "suitName": "很像Jaxx",
                    "sort": 1700,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/7e2feb3a-75cc-447d-bd3d-abee950a1b35.png",
                    "itemIdList": ["40020", "60020", "30960", "25682", "55050", "130120", "110045", "120432", "170700", "150120", "90440"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"60020\",\"color\":[0.8],\"type\":\"nose\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30960\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25682\",\"type\":\"hair\",\"color\":[\"AF8E85\",\"966F66\",\"836B64\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55050\",\"type\":\"face\",\"color\":[\"ffe8df\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130120\",\"type\":\"eyebrow\",\"color\":[\"836B64\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1.2070357590037635,\"rotate\":-8.429615277706244}},{\"id\":\"110045\",\"type\":\"eyeslid\",\"color\":[0.5],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120432\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":0,\"y\":-6,\"scale\":1,\"rotate\":0}},{\"id\":\"170700\",\"type\":\"glasses\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"150120\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90440\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1.0247614868468293,\"rotate\":0.8550973962698494}}]}",
                    "createTime": 1594976561000,
                    "updateTime": 1594978246000,
                    "vipExclusive": false,
                    "price": 42,
                    "hasPurchase": false
                }, {
                    "id": 41,
                    "suitId": "02018",
                    "suitName": "御守面具",
                    "sort": 1800,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/7ceb848c-1ca9-4f7f-bfbf-482f9e0393c3.png",
                    "itemIdList": ["40020", "110020", "120120", "55040", "30561", "25425", "130100", "60040", "90040", "160100"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"110020\",\"color\":[0.4],\"type\":\"eyeslid\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"120120\",\"type\":\"eyes\",\"color\":[\"5d1803\"],\"transform\":{\"x\":1,\"y\":6,\"scale\":1,\"rotate\":0}},{\"id\":\"55040\",\"type\":\"face\",\"color\":[\"ffece5\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"30561\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25425\",\"type\":\"hair\",\"color\":[\"dfd5cc\",\"cec4bc\",\"c1b6ae\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130100\",\"type\":\"eyebrow\",\"color\":[\"A7A099\"],\"transform\":{\"x\":4,\"y\":2,\"scale\":1.1378580533635698,\"rotate\":0.7707453302797614}},{\"id\":\"60040\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"90040\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"160100\",\"type\":\"mask\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594976644000,
                    "updateTime": 1594976650000,
                    "vipExclusive": false,
                    "price": 20,
                    "hasPurchase": false
                }, {
                    "id": 42,
                    "suitId": "02019",
                    "suitName": "有点凶",
                    "sort": 1900,
                    "suitImageUrl": "https://china-img.soulapp.cn/admin/2020-07-17/74f3d648-88f6-4813-a837-2f560290aa0c.png",
                    "itemIdList": ["40020", "110020", "31160", "25344", "55040", "130080", "120180", "90180", "", "153115", "60155"],
                    "state": 1,
                    "gender": 0,
                    "avatarName": null,
                    "avatarParams": "{\"bgColor\":\"1:1\",\"sex\":\"1\",\"resources\":[{\"id\":\"40020\",\"color\":[],\"type\":\"body\"},{\"id\":\"110020\",\"color\":[0.4],\"type\":\"eyeslid\",\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"31160\",\"type\":\"dress\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"25344\",\"type\":\"hair\",\"color\":[\"AF8E85\",\"966F66\",\"836B64\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"55040\",\"type\":\"face\",\"color\":[\"ffdccd\"],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"130080\",\"type\":\"eyebrow\",\"color\":[\"836B64\"],\"transform\":{\"x\":0,\"y\":10,\"scale\":1.1074093299016703,\"rotate\":-7.445846218256122}},{\"id\":\"120180\",\"type\":\"eyes\",\"color\":[\"18346d\"],\"transform\":{\"x\":0,\"y\":2,\"scale\":1,\"rotate\":0}},{\"id\":\"90180\",\"type\":\"mouth\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"\",\"type\":\"hat\",\"color\":[],\"transform\":{\"x\":0,\"y\":0,\"scale\":1,\"rotate\":0}},{\"id\":\"153115\",\"type\":\"jewelry\",\"color\":[],\"transform\":{\"x\":0,\"y\":-4,\"scale\":1.0496274932161007,\"rotate\":-10.211052600008577}},{\"id\":\"60155\",\"type\":\"nose\",\"color\":[0.8],\"transform\":{\"x\":0,\"y\":-1,\"scale\":1,\"rotate\":0}}]}",
                    "createTime": 1594976691000,
                    "updateTime": 1594976694000,
                    "vipExclusive": false,
                    "price": 18,
                    "hasPurchase": false
                }]
            },
            "success": true
        })
    }
}