(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b90f912"],{"16c5":function(t,e,a){},"1f99":function(t,e,a){"use strict";a("16c5")},"2800e":function(t,e,a){},6916:function(t,e,a){"use strict";a("2800e")},d07c:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color__box"},[a("div",{staticClass:"color__wrap"},[a("div",{staticClass:"color__picker"},[a("ul",t._l(t.colors,(function(e,s){return a("li",{key:s,class:{active:s===t.index,ignore:s===t.index},style:{backgroundImage:"linear-gradient(45deg, "+e[0]+", "+e[1]+")"},on:{click:function(e){return t.handler(s)}}},[a("i",{staticClass:"ignore"})])})),0)])]),a("div",{staticClass:"slider"},[a("canvas",{ref:"canvas",attrs:{width:"1000",height:"32"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.slider,expression:"slider"}],attrs:{type:"range",min:"1",max:"1000"},domProps:{value:t.slider},on:{input:t.slideChange,__r:function(e){t.slider=e.target.value}}})])])},i=[],r=a("9ab4");const o=[["#f9f9f9","#e1e1e1"],["#999999","#4d4d4d"],["#ffcbd0","#ed4956"],["#ffdab4","#fd8d33"],["#fff3d4","#ffcf00"],["#d1e9b8","#71c050"],["#d4eef9","#4ea6ff"],["#e1d1fe","#b482e6"],["#c3cdda","#1f384e"],["#b9a0a0","#6b1c18"],["#fbd9dd","#fc6c41"],["#f0ebe5","#bea46f"],["#dcdcaa","#99946d"],["#b9b9a0","#444b3b"],["#c3e1e9","#55aaaa"],["#f2f2f2","#776aff"],["#ffff82","#61a7ff"],["#c7b9b0","#b18471"],["#ffcdc7","#be6464"],["#fbf5b9","#f08080"],["#fce8d7","#f8c971"],["#b1e6d1","#ffc382"],["#cff8e6","#74b9e0"],["#fedef6","#fc639b"],["#c3fd74","#a4fef4"],["#ff8fec","#543b7d"],["#add2ff","#1a295c"]];var n=a("60a3");let c=class extends n["g"]{constructor(){super(...arguments),this.index=0,this.slider=500,this.colors=o}handler(t){this.index=t;const[e,a]=this.colors[this.index];this.renderGradient(e,a),this.slideChange()}renderGradient(t,e){const a=this.canvasContext.createLinearGradient(0,0,this.canvas.width,0);a.addColorStop(0,t),a.addColorStop(1,e),this.canvasContext.fillStyle=a,this.canvasContext.fillRect(0,0,this.canvas.width,this.canvas.height)}slideChange(){let t=this.canvasContext.getImageData(this.slider-1,0,1,1).data;this.$emit("input",`${this.index+1}:${this.slider}`),this.$emit("change","#"+d(t[0],t[1],t[2]))}created(){const[t,e]=this.value.split(":").map(t=>Number(t));this.slider=e,this.index=t-1}mounted(){const[t,e]=this.colors[this.index];this.canvas=this.$refs.canvas,this.canvasContext=this.canvas.getContext("2d"),this.$nextTick(()=>{this.renderGradient(t,e),this.slideChange()})}};Object(r["a"])([Object(n["d"])(String)],c.prototype,"value",void 0),c=Object(r["a"])([n["a"]],c);var l=c;function d(t,e,a){const s=t=>{const e=t.toString(16);return 1===e.length?"0"+e:e};return`${s(t)}${s(e)}${s(a)}`}var v=l,h=(a("1f99"),a("2877")),f=Object(h["a"])(v,s,i,!1,null,"6b0770d0",null);e["a"]=f.exports},e1a6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap ignore"},[a("div",{staticClass:"layout"},[a("div",{ref:"preview",staticClass:"preview"},[a("svg",{attrs:{viewBox:"0 0 640 640"}},[a("rect",{attrs:{x:"0",y:"0",width:"640",height:"640",fill:t.fillColor,stroke:"#ededed","stroke-width":"1"}}),a("image",{attrs:{"xlink:href":"data:image/svg+xml;base64,"+t.svgBase64,width:"640",height:"640"}})])]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTip,expression:"showTip"}],staticClass:"tip"},[t._v("给你的头像设置一个背景吧！")])]),a("div",{staticClass:"op"},[a("ColorSlider",{on:{change:t.colorChange},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),a("div",{staticClass:"op__btns"},[a("div",{staticClass:"op__btn"},[a("div",{staticClass:"op__download",on:{click:t.download}},[a("Icon",{staticClass:"icon",attrs:{name:"download"}})],1),a("p",{staticClass:"text"},[t._v("保存到相册")])]),a("div",{staticClass:"op__btn"},[a("div",{staticClass:"op__share",on:{click:t.share}},[a("Icon",{staticClass:"icon",attrs:{name:"share"}})],1),a("p",{staticClass:"text"},[t._v("转发海报")])])]),a("div",{staticClass:"op__done"},[t.isReceiver?a("div",{staticClass:"op__save",on:{click:t.save}},[t._v(" 保存头像 ")]):t._e(),t.isSender?a("div",{staticClass:"op__save",on:{click:t.sendGift}},[t._v(" 发送给Ta ")]):t._e()])],1)],1)])},i=[],r=a("9ab4"),o=a("c949"),n=a("c4a0"),c=a.n(n),l=a("60a3"),d=a("d07c");let v=class extends l["g"]{constructor(){super(...arguments),this.fillColor="",this.loading=!1,this.showTip=!localStorage.getItem("avatar.isShowColorTip"),this.color=sessionStorage.getItem("avatar.bgColor")||"1:500"}get isSender(){return"sender"===this.$route.query.type}get isReceiver(){return"receiver"===this.$route.query.type}get svg(){return sessionStorage.getItem("avatar.svg")||""}get avatarParams(){return JSON.stringify({bgColor:this.color,sex:this.$route.query.sex,backgroundColor:this.fillColor,resources:JSON.parse(sessionStorage.getItem("avatar.resources")||"")})}get svgBase64(){return btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" >${this.svg}</svg>`)}get svgStr(){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" viewBox="0 0 640 640"><rect x="0" y="0" width="640" height="640" fill="${this.fillColor}" stroke="#ededed" stroke-width="1"></rect>${this.svg}</svg>`}colorChange(t){this.fillColor=t,this.showTip&&"1:500"!==this.color&&(this.showTip=!1,localStorage.setItem("avatar.isShowColorTip","1"))}download(){c.a.trackEvent("clk","MAvatarEditTA_SavetoAlbum"),o["kb"](2,this.svgStr,this.avatarParams)}share(){c.a.trackEvent("clk","MAvatarEditTA_SharePoster"),o["kb"](3,this.svgStr,this.avatarParams)}save(){if(-1===c.a.compareVersion("3.20.0",this.$route.query.version))return c.a.toast({type:"success",text:"请升级版本后使用该功能"});o["lb"](this.svgStr,this.avatarParams).then(t=>{c.a.setUserInfo({avatarName:t.avatarName,avatarParams:this.avatarParams,oriAvatarName:t.oriAvatarName}),setTimeout(()=>c.a.navigateBack(),2e3),c.a.toast({type:"success",text:"修改成功"})}).catch(t=>{c.a.toast({type:"error",text:t.message})})}sendGift(){if(-1===c.a.compareVersion("3.20.0",this.$route.query.version))return c.a.toast({type:"success",text:"请升级版本后使用该功能"});if(this.loading)return;const t=this.$route.query.targetUserIdEcpt;this.loading=!0,setTimeout(()=>this.loading=!1,3e3),c.a.trackEvent("clk","MAvatarEditTA_SendTa"),o["f"]({giftType:"2",targetUserIdEcpt:t,avatarSvg:this.svgStr,avatarParams:this.avatarParams}).then(e=>{if(!e.result)return c.a.toast({type:"error",text:"赠送失败"});c.a.dispatch("action_user_cuteFaceSend",{giftType:"2",targetUserIdEcpt:t,avatarName:e.avatarName,oriAvatarName:e.oriAvatarName,cuteFaceGiftId:e.cuteFaceGiftId})}).catch(t=>c.a.toast({type:"error",text:t.message}))}};v=Object(r["a"])([Object(l["a"])({components:{ColorSlider:d["a"]}})],v);var h=v,f=h,g=(a("6916"),a("2877")),u=Object(g["a"])(f,s,i,!1,null,"6fa4cd40",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6b90f912.ba02c7d5.js.map