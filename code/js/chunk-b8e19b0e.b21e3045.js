(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8e19b0e"],{8547:function(a,e,t){},"8c08":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"layout"},[t("div",{staticClass:"avatars"},a._l(a.names,(function(e,r){return t("div",{on:{click:function(t){return a.toColor(e)}}},[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:a.shows[r].show,expression:"shows[index].show"}],staticClass:"color",style:{background:a.colors[r]},attrs:{src:"https://china-img.soulapp.cn/heads/"+e+".png?imageView2/2/w/200/format/webp"}})])],1)})),0)])},o=[],n=t("9ab4"),_=t("60a3");let s=class extends _["g"]{constructor(){super(...arguments),this.sex="MALE",this.shows=[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],this.names=["portrait_1_new","portrait_2_new","portrait_3_new","portrait_4_new","portrait_5_new","portrait_6_new","portrait_7_new","portrait_8_new","portrait_9_new"],this.colors=["#d5527a","#ee6d94","#d36ded","#9a6dec","#6d7fed","#6dbbec","#6eebed","#6fecb2","#79ed63","#acec6f","#d0ed6f","#eee56e","#edcf6d","#edab6e","#ed8b6e","#ed6d6c"],this.currentData={idxColor:1,color:"#d5527a",name:"portrait_1_new"}}toColor(a){const{sex:e,color:t}=this.$route.query;this.$router.push({path:"/preset/color",query:{name:a,sex:e,color:t}})}mounted(){switch(this.sex=this.$route.query.sex||"MALE",Number(this.$route.query.index)){case 0:"FEMALE"===this.sex?this.names=["WomanHeadw1_new","WomanHeadw2_new","WomanHeadw3_new","WomanHeadw4_new","WomanHeadw5_new","WomanHeadw6_new","WomanHeadw7_new","WomanHeadw8_new","WomanHeadw9_new"]:this.names=["portrait_1_new","portrait_2_new","portrait_3_new","portrait_4_new","portrait_5_new","portrait_6_new","portrait_7_new","portrait_8_new","portrait_9_new"];break;case 1:"FEMALE"===this.sex?this.names=["WomanHeadw1","WomanHeadw2","WomanHeadw3","WomanHeadw4","WomanHeadw5","portrait_6","WomanHeadw7","WomanHeadw8","WomanHeadw9"]:this.names=["portrait_1","portrait_2","portrait_3","portrait_4","portrait_5","portrait_6","portrait_7","portrait_8","portrait_9"];break;case 2:"FEMALE"===this.sex?this.names=["WomanHeadw1_new2","WomanHeadw2_new2","WomanHeadw3_new2","WomanHeadw4_new2","WomanHeadw5_new2","WomanHeadw6_new2","WomanHeadw7_new2","WomanHeadw8_new2","WomanHeadw9_new2"]:this.names=["portrait_1_new2","portrait_2_new2","portrait_3_new2","portrait_4_new2","portrait_5_new2","portrait_6_new2","portrait_7_new2","portrait_8_new2","portrait_9_new2"];break;case 3:"FEMALE"===this.sex?this.names=["Avatar_V3_Woman_1","Avatar_V3_Woman_2","Avatar_V3_Woman_3","Avatar_V3_Woman_4","Avatar_V3_Woman_5","Avatar_V3_neutral","Avatar_V3_Woman_6","Avatar_V3_Woman_7","Avatar_V3_neutral2"]:this.names=["Avatar_V3_Man_1","Avatar_V3_Man_2","Avatar_V3_Man_3","Avatar_V3_Man_4","Avatar_V3_Man_5","Avatar_V3_neutral","Avatar_V3_Man_6","Avatar_V3_Man_7","Avatar_V3_neutral2"];break}this.$route.query.name&&(this.currentData.name=this.$route.query.name),this.$route.query.color&&(this.currentData.idxColor=parseInt(this.$route.query.color.replace("HeaderColor_",""),10),isNaN(this.currentData.idxColor)&&(this.currentData.idxColor=1));for(let a=0;a<9;a++)setTimeout(()=>this.shows[a].show=!0,100+100*a)}};s=Object(n["a"])([_["a"]],s);var i=s,w=i,d=(t("f3b2"),t("2877")),m=Object(d["a"])(w,r,o,!1,null,"6159775a",null);e["default"]=m.exports},f3b2:function(a,e,t){"use strict";t("8547")}}]);
//# sourceMappingURL=chunk-b8e19b0e.b21e3045.js.map