(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90523642"],{2896:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.pageLoaded?s("div",{staticClass:"layout"},[s("header",[s("div",{staticClass:"rule-btn",on:{click:t.toRule}}),t.endTime?s("div",{staticClass:"endtime"},[t._v("本期活动截止时间至："+t._s(t.endTime))]):t._e(),t.activityGoing&&t.winners.length?s("Winners",{attrs:{winners:t.winners}}):s("div",{staticClass:"end-tips"},[t._v(t._s(t.tips))])],1),s("main",[t.pageLoaded&&!t.list.length?s("div",{staticClass:"empty"},[s("img",{attrs:{src:e("d82f"),alt:""}}),s("p",[t._v("暂无可选盲盒")])]):s("s-infinite",{attrs:{disabled:t.locked,distance:0},on:{load:t.loadMore}},[s("ul",{staticClass:"blindbox-list"},t._l(t.list,(function(i){return s("li",{key:i.avatarUrl,on:{click:function(e){return t.toLottery(i)}}},[s("img",{staticClass:"avatars",attrs:{src:i.commodityUrl,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(i.commodityName))]),s("div",{staticClass:"price"},[s("img",{attrs:{src:e("e6ef"),alt:""}}),s("span",[t._v(t._s(i.price))])])])})),0)])],1)]):t._e()},a=[],n=e("9ab4"),o=e("60a3"),c=e("c4a0"),l=e.n(c),r=e("c949"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"winners"},[e("ul",t._l(t.winners,(function(i){return e("li",{key:i.avatarUrl},[e("img",{staticClass:"avatar",attrs:{src:i.avatarUrl,alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(i.signature))]),t._v(" 抽到了 "),e("span",{staticClass:"yellow"},[t._v(t._s(i.prize))])])})),0)])},p=[];let h=class extends o["g"]{created(){}};Object(n["a"])([Object(o["d"])()],h.prototype,"winners",void 0),h=Object(n["a"])([o["a"]],h);var u=h,g=u,v=(e("305dc"),e("2877")),m=Object(v["a"])(g,d,p,!1,null,"6878065a",null),b=m.exports;let w=class extends o["g"]{constructor(){super(...arguments),this.pageLoaded=!1,this.activityGoing=!0,this.tips="",this.locked=!0,this.loaded=!1,this.pageCursor="",this.endTime="",this.winners=[],this.list=[]}async getList(){const{data:t,code:i,msg:e}=await Object(r["o"])(this.pageCursor);this.pageLoaded=!0,400===i?(this.activityGoing=!1,this.tips="活动尚未开启，开启时间请关注官方通知"):500===i?(this.activityGoing=!1,this.tips="本期幸运购已结束，下次开启时间请关注官方通知",l.a.toast({type:"success",text:"活动已结束"})):200!==i?this.tips=e:(this.endTime=t.endTime,this.locked=!0,this.winners.length||(this.winners.push(...t.winningRecords),this.initSwiper()),this.pageCursor=t.pageCursor,t.commodityItems.length?this.list.push(...t.commodityItems):this.loaded=!0)}loadMore(){this.locked=!1,this.loaded?this.$nextTick(()=>this.locked=!0):this.getList()}toLottery(t){l.a.trackEvent("clk","AvatarShop_blindbox_list_click"),this.activityGoing?l.a.navigateTo({url:`${location.origin}${location.pathname}#/blindbox/lottery?sceneId=${t.sceneId}`}):l.a.toast({type:"success",text:"活动已结束"})}toRule(){l.a.navigateTo({url:"https://app.soulapp.cn/feeling/#/?disableShare=true&activityIdEcpt=a3F3VGFXUzdKVlE9&pageIdEcpt=TEoyQmdyMGtLUmc9&pageType=1"})}initSwiper(){this.$nextTick(()=>{new window.Swiper(".winners",{loop:!0,autoplay:{delay:0,disableOnInteraction:!1},freeMode:!0,delay:0,spaceBetween:100,speed:4e3})})}initNavigation(){l.a.setNavigationRight({title:"盲盒仓库",color:"#25D4D0"}),l.a.onNavigationRightClick(()=>{l.a.navigateTo({url:`${location.origin}${location.pathname}#/blindbox/warehouse`})})}onShow(){l.a.onShow(()=>{l.a.trackEvent("pv","AvatarShop_blindbox_list_exposure")})}mounted(){this.onShow(),this.initNavigation(),this.loadMore()}};w=Object(n["a"])([Object(o["a"])({components:{Winners:b}})],w);var y=w,_=y,f=(e("41bb"),Object(v["a"])(_,s,a,!1,null,"e2794720",null));i["default"]=f.exports},"305dc":function(t,i,e){"use strict";e("d83f")},"41bb":function(t,i,e){"use strict";e("6c3c")},"6c3c":function(t,i,e){},d82f:function(t,i,e){t.exports=e.p+"img/empty.fbf1c470.png"},d83f:function(t,i,e){},e6ef:function(t,i,e){t.exports=e.p+"img/coin.7f589a5a.png"}}]);
//# sourceMappingURL=chunk-90523642.73f0df8e.js.map