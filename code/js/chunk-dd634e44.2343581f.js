(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd634e44"],{"00e7":function(t,e,s){t.exports=s.p+"img/coin.523f08c4.png"},"07df3":function(t,e,s){},"11ee":function(t,e,s){t.exports=s.p+"img/icon_original.bf81af7d.png"},2030:function(t,e,s){"use strict";s("aba7")},2355:function(t,e,s){t.exports=s.p+"img/icon_fairy.9d1b48e7.png"},"273c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("div",{staticClass:"tabs"},[i("div",{staticClass:"tab",class:{active:"1"===t.gender},on:{click:function(e){return t.changeGender("1")}}},[t._v("女生")]),i("div",{staticClass:"tab",class:{active:"0"===t.gender},on:{click:function(e){return t.changeGender("0")}}},[t._v("男生")])]),t.showEmpty?[t._m(0)]:[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"countdown-bar"},[i("span",[t._v("本次限定时间剩余")]),i("div",{staticClass:"countdown"},[i("span",[t._v(t._s(t.countdown.date))]),i("span",[t._v(t._s(t.countdown.hour))]),i("span",[t._v(t._s(t.countdown.minute))])])]),i("div",{staticClass:"container"},[t.currentList.data.length?i("s-infinite",{attrs:{disabled:t.currentList.locked,distance:0},on:{load:t.loadMore}},[i("ul",t._l(t.currentList.data,(function(e,a){var n=e.coinCommodityCasherRModel,o=e.userPersonalizeItemPrivilegeCasherRModel;return i("li",{key:a+n.itemIdentity},[i("div",{staticClass:"left"},[i("img",{attrs:{src:n.commodityUrl}}),1===n.expireCommodity?i("div",{staticClass:"limit-time"},[t._v("有效期"+t._s(n.salesUnitValue+n.salesUnit))]):t._e()]),i("div",{staticClass:"right"},[i("div",{staticClass:"info"},[i("div",{staticClass:"first-line"},[i("div",{staticClass:"name"},[t._v(t._s(n.commodityName))]),n.stockNum<1e4?i("div",{staticClass:"last"},[t._v(" 剩余 "),i("span",[t._v(t._s(n.remainNum))]),t._v(" /"+t._s(n.stockNum)+" ")]):i("div",{staticClass:"orange"},[t._v(" 数量有限 ")])]),i("div",{staticClass:"desc"},[t._v(t._s(n.commodityIntro))]),i("div",{staticClass:"price"},[i("img",{attrs:{src:s("00e7"),alt:""}}),t._v(t._s(n.price))]),i("div",{staticClass:"btn-wrap"},[i("div",{staticClass:"send",class:{disable:0===n.remainNum,onlyone:t.userGender!==t.gender},on:{click:function(e){return t.toBuy(n,o,"1")}}},[t._v("送给Ta")]),t.userGender===t.gender?[o?0===o.useState?i("div",{staticClass:"buy",on:{click:function(e){return t.toUse(n,o)}}},[t._v("立即装扮")]):1===o.useState?i("div",{staticClass:"buy disable"},[t._v("已装扮")]):t._e():i("div",{staticClass:"buy",class:{disable:0===n.remainNum},on:{click:function(e){return t.toBuy(n,o,"2")}}},[t._v("立即购买")])]:t._e()],2)])])])})),0)]):t._e()],1)],i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showTips,expression:"showTips"}],staticClass:"limit-tips"})]),t.currentProduct?i("ShowAvatar",{attrs:{visible:t.showAvatarVisible,avatarUrl:t.currentProduct.commodityUrl,avatarName:t.currentProduct.commodityName,product:t.currentProduct.itemIdentity},on:{"update:visible":function(e){t.showAvatarVisible=e}}}):t._e(),i("Buy",{attrs:{visible:t.visibleBuy,product:t.currentProduct,stateData:t.stateData,userGender:t.userGender},on:{"update:visible":function(e){t.visibleBuy=e},buySuccess:t.buySuccess}})],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"empty"},[i("img",{attrs:{src:s("616d"),alt:""}}),i("p",[t._v("精彩内容敬请期待～")])])}],n=s("9ab4"),o=s("60a3"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("s-popup",{attrs:{visible:t.visibleSync,"is-full":!1},on:{hide:function(e){t.visibleSync=!1}}},[i("div",{staticClass:"show-container"},[i("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:"544",height:"410"}}),i("div",{staticClass:"tips"},[t._v("恭喜你抢到"+t._s(t.avatarName))]),i("div",{staticClass:"gray"},[t._v("在 [我的交易] 中可以查看购买记录哦～")]),i("div",{staticClass:"btn",on:{click:t.show}},[t._v("炫耀一下")]),i("div",{staticClass:"close",on:{click:function(e){t.visibleSync=!1}}},[i("img",{attrs:{src:s("bcfc"),alt:""}})])])])},r=[],d=s("c4a0"),u=s.n(d),l=s("6d6f"),p=s.n(l),h=s("3a62"),v=s.n(h),m=s("9275"),g=s.n(m),b=s("4d20"),f=s.n(b),y=s("a21e"),_=s.n(y),S=s("bd65"),w=s.n(S);const C=[p.a,v.a,g.a,f.a,_.a,w.a];let x=class extends o["g"]{constructor(){super(...arguments),this.isLoading=!1,this.base64=""}async show(){if(this.isLoading)return;this.isLoading=!0,u.a.trackEvent("clk","AvatarShop_ExpShare",{GoodsId:this.itemIdentity}),this.base64||await this.renderImg();const t=await new Promise((t,e)=>{u.a.uploadFile({base64:this.base64,mimeType:"image/png",success:e=>{this.isLoading=!1;const s=e&&e.data||"";t(s)}})});u.a.dispatch("action_event_launchPublish",{content:"",tags:["超级限定"],path:t},t=>{})}getWidth(t){return t/544*this.canvas.width}getHeight(t){return t/410*this.canvas.height}async renderImg(){const t=this.canvas.getContext("2d"),e=new Image;e.crossOrigin="Anonymous",await new Promise((s,i)=>{e.src=this.avatarUrl,e.onload=()=>{const i=this.getWidth(142),a=this.getHeight(75),n=this.getWidth(260),o=this.getHeight(260);t.drawImage(e,i,a,n,o),s(!0)},e.onerror=()=>i("share img of avatar loaded error")}),await new Promise((s,i)=>{const a=C[Math.floor(6*Math.random())];e.src=a,e.onload=()=>{t.drawImage(e,0,0,e.width,e.height,0,0,this.canvas.width,this.canvas.height),s(!0)},e.onerror=()=>i("share template of avatar loaded error")}),this.base64=this.canvas.toDataURL("image/png").replace("data:image/png;base64,","")}hdCanvas(){const t=window.devicePixelRatio||1;this.canvas.width=544*t,this.canvas.height=410*t}mounted(){this.hdCanvas(),this.renderImg()}};Object(n["a"])([Object(o["e"])("visible")],x.prototype,"visibleSync",void 0),Object(n["a"])([Object(o["d"])()],x.prototype,"avatarUrl",void 0),Object(n["a"])([Object(o["d"])()],x.prototype,"avatarName",void 0),Object(n["a"])([Object(o["d"])()],x.prototype,"itemIdentity",void 0),Object(n["a"])([Object(o["f"])("canvas")],x.prototype,"canvas",void 0),x=Object(n["a"])([o["a"]],x);var I=x,O=I,k=(s("fca3"),s("2877")),A=Object(k["a"])(O,c,r,!1,null,"4c8b0580",null),T=A.exports,j=s("d36d"),N=s("c949"),L=s("8a2c"),U=s("d257");let P=class extends o["g"]{constructor(){super(...arguments),this.visibleBuy=!1,this.gender=this.$route.query.gender,this.userGender=this.$route.query.userGender,this.isActivity=!1,this.isLoaded=!1,this.endTime=0,this.showAvatarVisible=!1,this.showTips=!1,this.tipsTimer=0,this.superLimit={0:{offset:0,pageCursor:void 0,data:[],locked:!0,loaded:!1},1:{offset:0,pageCursor:void 0,data:[],locked:!0,loaded:!1}},this.currentProduct=null,this.stateData=null,this.countdownTmer=0,this.countdown={date:"00",hour:"00",minute:"00",second:"00"}}get currentList(){return this.superLimit[this.gender]}get showEmpty(){return this.isLoaded&&!this.superLimit[this.gender].data.length}async changeGender(t){this.gender!==t&&(this.gender=t,this.superLimit[this.gender].data.length||await this.loadMore())}async toUse(t,e){u.a.trackEvent("clk","AvatarSuperLimit_Action",{Type:"3",Tab:"0"===this.gender?"1":"2"});const{success:s,resultDesc:i}=await Object(N["d"])(e.id,t.itemIdentity,1);if(s){u.a.toast({type:"success",text:"头像已装扮，去看看吧"}),this.resetUseState(),e.useState=1;const s=JSON.parse(t.extAttributes).avatarName;s||u.a.dispatch("action_event_saveAvatar",{name:s})}else u.a.toast({type:"success",text:i})}toBuy(t,e,s){u.a.trackEvent("clk","AvatarSuperLimit_Action",{Type:s,Tab:"0"===this.gender?"1":"2"}),t.remainNum<1?u.a.toast({type:"success",text:"该宝贝已售空，继续逛逛吧～"}):(this.currentProduct=t,this.stateData=e,console.info(this.stateData),this.visibleBuy=!0)}async buySuccess(t){const e=this.currentList.data.find(e=>e.coinCommodityCasherRModel.itemIdentity===t);e&&(this.resetUseState(),e.userPersonalizeItemPrivilegeCasherRModel=await Object(N["x"])(t),this.showAvatarVisible=!0)}resetUseState(){this.currentList.data.forEach(t=>{t.userPersonalizeItemPrivilegeCasherRModel&&(t.userPersonalizeItemPrivilegeCasherRModel.useState=0)})}async getList(){const t=Object(L["a"])(this.gender),e=20,s=this.superLimit[this.gender],i=await Object(N["Q"])(t,e,s.pageCursor);s.pageCursor=i.pageCursor,"-1"===i.pageCursor?(s.locked=!0,s.loaded=!0):(s.data.push(...i.data),s.locked=!0,s.loaded=!1,0===i.data.length&&(s.loaded=!0))}async loadMore(){this.currentList.locked=!1,this.currentList.loaded?await new Promise(t=>{this.$nextTick(()=>{this.currentList.locked=!0,t(null)})}):(await this.getList(),this.isLoaded=!0)}openTips(){clearTimeout(this.tipsTimer),this.showTips?this.showTips=!1:(this.showTips=!0,this.tipsTimer=setTimeout(()=>{this.showTips=!1},5e3))}initNavigator(){u.a.setNavigationRight({imageUrl:"https://fe-cdn.soulapp.cn/activity/tip-icon-162883.png"}),u.a.onNavigationRightClick(()=>{this.openTips()})}initCountdown(){this.countdownTmer=setInterval(()=>{this.countdown=Object(U["b"])(this.endTime),this.endTime<=Date.now()&&clearInterval(this.countdownTmer)})}trackPv(){u.a.trackEvent("pv","AvatarShop_SuperLimit")}async created(){const{openFlag:t,endTime:e}=await Object(N["P"])();if(this.isActivity=t,!this.isActivity)return;this.endTime=e,this.initCountdown(),this.initNavigator();const s=u.a.getStorage("SOUL_SUPER_LIMIT_TIPS");s||(this.openTips(),u.a.setStorage("SOUL_SUPER_LIMIT_TIPS","1")),this.loadMore()}mounted(){u.a.onShow(this.trackPv)}beforeDestroy(){clearInterval(this.countdownTmer)}};P=Object(n["a"])([Object(o["a"])({components:{ShowAvatar:T,Buy:j["a"]}})],P);var E=P,G=E,M=(s("6b75"),Object(k["a"])(G,i,a,!1,null,"a9fee714",null));e["default"]=M.exports},"2b01":function(t,e,s){t.exports=s.p+"img/icon_melancholy.2c696ef8.png"},"3a62":function(t,e,s){t.exports=s.p+"img/template2.84fd0e22.png"},"4d20":function(t,e,s){t.exports=s.p+"img/template4.77aa31a0.png"},"4f7e":function(t,e,s){t.exports=s.p+"img/back.35bdcbfa.png"},"616d":function(t,e,s){t.exports=s.p+"img/empty.35559525.png"},"6b75":function(t,e,s){"use strict";s("07df3")},"6d6f":function(t,e,s){t.exports=s.p+"img/template1.57b2a56e.png"},"745c":function(t,e,s){},"7fd9":function(t,e,s){t.exports=s.p+"img/default-head.2bc781f6.png"},"8a2c":function(t,e,s){"use strict";function i(t){const e=[36,37];return e[Number(t)]}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));const a=Object.freeze([{iconUrl:"",desc:"集合全平台优质头像，轻松变变变～",title:"全部",index:0,sources:[1001,1002]},{iconUrl:s("c05f"),desc:"",title:"怀旧",index:999,sources:[39,40]},{iconUrl:s("9648"),desc:"人生辣么苦，只有我是草莓味",title:"可爱",index:1,sources:[26,27]},{iconUrl:s("ac2f"),desc:"暗黑系魅力，神秘而强大",title:"暗黑",index:2,sources:[28,29]},{iconUrl:s("2b01"),desc:"如果爱有颜色，那一定是遥远的克莱因蓝",title:"忧郁",index:3,sources:[30,31]},{iconUrl:s("2355"),desc:"仙气飘飘，清夜无尘，月色如银",title:"仙风",index:4,sources:[32,33]},{iconUrl:s("11ee"),desc:"我的头像，天生闪耀独特光芒",title:"创意",index:5,sources:[34,35]},{iconUrl:"",desc:"",title:"挂件",index:666,sources:[26,26]}])},9275:function(t,e,s){t.exports=s.p+"img/template3.5fca2e1e.png"},9648:function(t,e,s){t.exports=s.p+"img/icon_cute.51135977.png"},"9d6a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("Soul个性商城服务声明")]),s("div",{staticClass:"content"},[s("p",{staticClass:"storage-flag-buy"},[t._v("更新日期：【2021】年【8】月【4】日"),s("span",{staticClass:"hidden-flag"})]),s("p",[t._v("生效日期：【2021】年【8】月【4】日")]),s("p",[t._v("“Soul个性商城”是Soul提供给用户的一项下载、使用虚拟商品的平台服务，相关虚拟商品由Soul或第三方（以下称为“创作者”）提供，用户可以通过Soul个性商城付费或免费下载虚拟商品，并在Soul的相关产品及功能中进行使用。本声明为《Soul App用户服务协议》《Soul币用户协议》不可分割的一部分，用户使用Soul个性商城，需遵守上述协议及本声明如下条款：")]),s("p",[t._v("1.您理解并同意，Soul仅为用户提供虚拟商品下载及使用的平台，除用户通过本人Soul帐号在个性商城下载后自行在本人Soul帐号中使用外，未经Soul或相关权利人书面许可，任何人不得以其他任何形式对该等虚拟商品进行使用或创造任何衍生产品/作品。")]),s("p",[t._v("2.您在Soul个性商城所下载的虚拟商品会与您的Soul帐号绑定，但仅限于您下载时所使用的Soul帐号。为确保虚拟商品的正常使用，请您使用本人Soul帐号进行下载。我们会统计虚拟商品的下载情况，用于Soul个性商城及其他Soul产品或功能的日常推广参考。")]),s("p",[t._v("3.Soul个性商城的付费购买功能是Soul为Soul用户自愿就创作者提供的付费虚拟商品进行付费购买以获得使用许可的行为提供相应技术支持的功能。您是否付费，由您自行决定，但付费后除因法定情形或其他相关规定的原因外不可撤回。创作者将基于您的付费金额获得收益。")]),s("p",[t._v("4.Soul坚决反对任何违反法律法规或侵犯第三方合法权益的内容。如经Soul判断认为创作者的虚拟商品或创作者的任何行为存在违反法律法规、侵犯第三方合法权益及/或违反Soul不时发布的各种规范、规则的情形，Soul有权将相应虚拟商品进行下架、屏蔽或删除处理（包括您已经付费购买的虚拟商品）。您理解并同意，因上述原因导致您不能正常使用Soul个性商城或相关虚拟商品（包括您已经付费购买的商品），或给您造成损失的，Soul不承担责任。")]),s("p",[t._v("5.因创作者的虚拟商品产生的任何纠纷、责任等，以及创作者违反法律法规、侵犯第三方合法权益及/或违反Soul不时发布的各种规范、规则所引发的任何后果，均由创作者独立承担责任、赔偿损失，与Soul无关。如侵害到Soul及其关联公司、Soul用户或其他第三方权益的，创作者须自行承担全部责任并赔偿一切损失。")]),s("p",[t._v("6.Soul个性商城及其相关虚拟商品仅在Soul App部分软件版本上提供，请您确认所使用的软件版本支持个性商城功能，否则您将无法下载、使用虚拟商品。")]),s("p",[t._v("7.Soul个性商城的服务是按照现有技术和条件所能达到的现状提供的。Soul会尽最大努力向您提供服务，确保服务的连贯性和安全性；但Soul不能保证其所提供的服务毫无瑕疵，也无法随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。您理解并同意，因上述原因导致您不能正常使用Soul个性商城或相关虚拟商品（包括您已经付费购买的虚拟商品），或给您造成损失的，Soul不承担责任。")]),s("p",[t._v("8.若您有任何违反法律法规、本声明及/或Soul不时发布的各种规范、规则的的情形，Soul有权视您的行为性质，在不事先通知您的情况下，采取包括但不限于中断使用、限制使用、删除相关文件、中止或终止服务、追究法律责任等措施，若因此造成Soul及其关联公司、Soul用户或其他第三方损失的，您应予赔偿。")]),s("p",[t._v("根据用户需求及产品更新的需要，Soul可能会对个性商城功能及本服务声明条款进行修改。如有修改，我们会在产品和网页中显著的位置发布以便及时通知到用户。如果您选择继续使用我们的服务，即表示您已接受修改后的内容。")])])])}],n=s("9ab4"),o=s("60a3");let c=class extends o["g"]{};c=Object(n["a"])([o["a"]],c);var r=c,d=r,u=(s("2030"),s("2877")),l=Object(u["a"])(d,i,a,!1,null,"7227662b",null);e["a"]=l.exports},a21e:function(t,e,s){t.exports=s.p+"img/template5.2f39dd44.png"},aba7:function(t,e,s){},ac2f:function(t,e,s){t.exports=s.p+"img/icon_black.cd372aff.png"},bcfc:function(t,e,s){t.exports=s.p+"img/nav_icon_close_normal.38eb190e.png"},bd65:function(t,e,s){t.exports=s.p+"img/template6.6c80bed5.png"},bdde:function(t,e,s){},bf48:function(t,e,s){"use strict";s("745c")},c05f:function(t,e,s){t.exports=s.p+"img/icon_old.292da4ff.png"},d36d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("s-drager",{attrs:{visible:t.visibleSync,"full-screen":!1},on:{"update:visible":function(e){t.visibleSync=e},hide:function(e){t.visibleSync=!1}}},[[!t.isShowAgreement&&t.product?i("div",{staticClass:"buy_container"},[t.product?[i("div",{staticClass:"img-wrap"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.imgLoaded,expression:"!imgLoaded"}],staticClass:"avatar",attrs:{src:s("7fd9"),alt:""}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.imgLoaded,expression:"imgLoaded"}],staticClass:"avatar",attrs:{src:t.product.commodityUrl}})]),i("div",{staticClass:"name"},[t._v(" "+t._s(t.product.commodityName||t.product.itemName)+" "),"天"===t.product.salesUnit?i("div",{staticClass:"expire"},[t._v("有效期"+t._s(t.product.salesUnitValue)+"天")]):t._e()]),i("div",{staticClass:"price"},[i("span",{staticClass:"icon"}),i("span",{staticClass:"num"},[t._v(t._s(t.product.price))])]),i("p",{staticClass:"tips"},[t._v("赠送的Soul币不能使用哦")]),i("div",{staticClass:"protocol"},[i("div",{staticClass:"agree",class:{active:t.agree},on:{click:t.selectAgreement}}),i("div",{staticClass:"text"},[i("span",{on:{click:t.selectAgreement}},[t._v("已阅读并同意：")]),i("span",{staticClass:"blue",on:{click:function(e){t.isShowAgreement=!0}}},[t._v("《Soul个性商城用户协议》")])])]),i("div",{staticClass:"btn-box"},[t.renew?[i("div",{directives:[{name:"loading",rawName:"v-loading"}],staticClass:"only-btn",on:{click:t.tryBuy}},[t._v("立即续费")])]:t.diffGender?[i("div",{directives:[{name:"loading",rawName:"v-loading"}],staticClass:"only-btn",on:{click:function(e){return t.sendGift("2")}}},[t._v("立即赠送")])]:[i("div",{directives:[{name:"loading",rawName:"v-loading"}],staticClass:"left-btn",on:{click:function(e){return t.sendGift("1")}}},[t._v("送给Ta")]),t.goodsInfo?1===t.goodsInfo.useState?i("div",{staticClass:"right-btn disabled"},[t._v("已装扮")]):i("div",{directives:[{name:"loading",rawName:"v-loading"}],staticClass:"right-btn",on:{click:t.toUse}},[t._v("立即装扮")]):i("div",{directives:[{name:"loading",rawName:"v-loading"}],staticClass:"right-btn",on:{click:t.tryBuy}},[t._v("立即购买")])]],2)]:t._e()],2):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowAgreement,expression:"isShowAgreement"}],staticClass:"agreement"},[i("img",{staticClass:"back",attrs:{src:s("4f7e"),alt:""},on:{click:function(e){t.isShowAgreement=!1}}}),i("Agreement")],1),i("s-update",{attrs:{visible:t.visibleUpdate},on:{"update:visible":function(e){t.visibleUpdate=e}}})]],2)},a=[],n=s("9ab4"),o=s("60a3"),c=s("c949"),r=s("9d6a"),d=s("c4a0"),u=s.n(d),l=s("5a0c"),p=s.n(l);let h=class extends o["g"]{constructor(){super(...arguments),this.goodsInfo=null,this.isShowAgreement=!1,this.agree=!1,this.visibleUpdate=!1,this.imgLoaded=!1}get diffGender(){return!("1"===this.userGender&&2===this.product.genderType||"0"===this.userGender&&1===this.product.genderType)}async getState(t){t&&(this.loadImg(),this.isShowAgreement=!1,this.goodsInfo=this.stateData||await Object(c["x"])(this.product.itemIdentity))}loadImg(){this.imgLoaded=!1;const t=new Image;t.src=this.product.commodityUrl,t.onload=()=>{this.imgLoaded=!0}}selectAgreement(){if(this.agree=!this.agree,this.agree){const t=document.querySelector(".storage-flag-buy").textContent.replace(/\s/g,"");u.a.setStorage("SOUL_MARKET_AGREEMENT",t),u.a.trackEvent("clk","AvatarShop_Main_agreement_buychoose",{uid:this.$route.query.userIdEcpt,time:p()().format("YYYY-MM-DD")})}}showAgreementTips(){u.a.toast({type:"error",text:"请勾选用户协议"})}updateClientAvatarName(){const t=JSON.parse(this.product.extAttributes).avatarName;t&&u.a.dispatch("action_event_saveAvatar",{name:t})}async toUse(){if(!this.agree)return void this.showAgreementTips();const{success:t,resultDesc:e}=await Object(c["d"])(this.goodsInfo.id,this.product.itemIdentity,1);t?(u.a.toast({type:"success",text:"头像已装扮，去看看吧"}),this.visibleSync=!1,this.updateClientAvatarName()):u.a.toast({type:"success",text:e})}async tryBuy(){if(u.a.trackEvent("clk","AvatarShop_GoodsMain_equip",{GoodsId:String(this.product.itemIdentity)}),!this.agree)return void this.showAgreementTips();const{purchaseSuccess:t,purchaseResultCode:e,purchaseResultDesc:s,purchasePrivilegeDetailResponse:i}=await Object(c["ob"])(this.product.itemIdentity,"",this.renew?"2":"1");if(console.info(t,e,s,i),t){if(this.renew)return this.visibleSync=!1,u.a.toast({type:"success",text:"续费成功"}),void this.$emit("renewSuccess",this.product.itemIdentity);const{success:t}=await Object(c["d"])(i.userPrivilegeId,this.product.itemIdentity,1);t&&(u.a.toast({type:"success",text:"头像购买成功并已装扮，去看看吧"}),this.visibleSync=!1,this.product.remainNum--,this.$emit("buySuccess",this.product.itemIdentity),this.updateClientAvatarName())}else this.buyFailHandle(e,s)}sendGift(t){u.a.trackEvent("clk","AvatarShop_GoodsMain_Send",{GoodsId:this.product.itemIdentity,type:t});const e=-1===u.a.compareVersion("3.94.0",u.a.getAppVersion());e?this.visibleUpdate=!0:this.agree?u.a.dispatch("action_event_selectFriends",{genderType:String(this.product.genderType),checkbox:!1},async t=>{if(!t.data||!t.data.length)return void u.a.toast({type:"error",text:"请选中一个好友后赠送哦~"});const{userIdEcpt:e}=t.data[0],{purchaseSuccess:s,purchaseResultCode:i,purchaseResultDesc:a,purchasePrivilegeDetailResponse:n}=await Object(c["ob"])(this.product.itemIdentity,e);if(s){u.a.toast({type:"success",text:"赠送成功"}),this.visibleSync=!1,this.product.remainNum--,u.a.trackEvent("clk","AvatarShop_GoodsMain_SendEnd",{GoodsId:this.product.itemIdentity,Tuid:e});const t=JSON.parse(this.product.extAttributes).avatarName;u.a.dispatch("action_user_cuteFaceSend",{giftType:"3",targetUserIdEcpt:e,avatarName:t,oriAvatarName:t,cuteFaceGiftId:n.cuteFaceGiftId,userPrivilegeId:String(n.userPrivilegeId),itemIdentity:this.product.itemIdentity})}else this.buyFailHandle(i,a)}):this.showAgreementTips()}buyFailHandle(t,e){u.a.toast({type:"error",text:e}),8e4===t?setTimeout(()=>{u.a.dispatch("action_user_toPay",{sourceCode:"0525"},()=>{})},2e3):20003===t&&(this.product.remainNum=0)}mounted(){const t=u.a.getStorage("SOUL_MARKET_AGREEMENT"),e=document.querySelector(".storage-flag-buy").textContent.replace(/\s/g,"");t===e&&(this.agree=!0)}};Object(n["a"])([Object(o["e"])("visible",{type:Boolean,default:!1})],h.prototype,"visibleSync",void 0),Object(n["a"])([Object(o["d"])()],h.prototype,"product",void 0),Object(n["a"])([Object(o["d"])({required:!1,type:Object})],h.prototype,"stateData",void 0),Object(n["a"])([Object(o["d"])()],h.prototype,"userGender",void 0),Object(n["a"])([Object(o["d"])({default:!1})],h.prototype,"renew",void 0),Object(n["a"])([Object(o["h"])("visible")],h.prototype,"getState",null),h=Object(n["a"])([Object(o["a"])({components:{Agreement:r["a"]}})],h);var v=h,m=v,g=(s("bf48"),s("2877")),b=Object(g["a"])(m,i,a,!1,null,"fbb82558",null);e["a"]=b.exports},fca3:function(t,e,s){"use strict";s("bdde")}}]);
//# sourceMappingURL=chunk-dd634e44.2343581f.js.map