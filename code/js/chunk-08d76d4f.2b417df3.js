(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08d76d4f"],{4127:function(e,t,r){"use strict";var o=r("d233"),a=r("b313"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,a,n,i,l,s,u,p,f,d,y){var h=t;if("function"===typeof s)h=s(r,h);else if(h instanceof Date)h=f(h);else if(null===h){if(n)return l&&!y?l(r,c.encoder):r;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||o.isBuffer(h)){if(l){var b=y?r:l(r,c.encoder);return[d(b)+"="+d(l(h,c.encoder))]}return[d(r)+"="+d(String(h))]}var v,g=[];if("undefined"===typeof h)return g;if(Array.isArray(s))v=s;else{var m=Object.keys(h);v=u?m.sort(u):m}for(var j=0;j<v.length;++j){var O=v[j];i&&null===h[O]||(g=Array.isArray(h)?g.concat(e(h[O],a(r,O),a,n,i,l,s,u,p,f,d,y)):g.concat(e(h[O],r+(p?"."+O:"["+O+"]"),a,n,i,l,s,u,p,f,d,y)))}return g};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?c.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,p="boolean"===typeof i.skipNulls?i.skipNulls:c.skipNulls,f="boolean"===typeof i.encode?i.encode:c.encode,d="function"===typeof i.encoder?i.encoder:c.encoder,y="function"===typeof i.sort?i.sort:null,h="undefined"!==typeof i.allowDots&&i.allowDots,b="function"===typeof i.serializeDate?i.serializeDate:c.serializeDate,v="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if("undefined"===typeof i.format)i.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,m,j=a.formatters[i.format];"function"===typeof i.filter?(m=i.filter,r=m("",r)):Array.isArray(i.filter)&&(m=i.filter,g=m);var O,w=[];if("object"!==typeof r||null===r)return"";O=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=n[O];g||(g=Object.keys(r)),y&&g.sort(y);for(var A=0;A<g.length;++A){var C=g[A];p&&null===r[C]||(w=w.concat(l(r[C],C,x,u,p,f?d:null,m,y,h,b,j,v)))}var N=w.join(s),k=!0===i.addQueryPrefix?"?":"";return N.length>0?k+N:""}},4328:function(e,t,r){"use strict";var o=r("4127"),a=r("9e6a"),n=r("b313");e.exports={formats:n,parse:a,stringify:o}},4578:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("div",{staticClass:"user"},[r("s-avatar",{attrs:{"avatar-width":64,"avatar-name":e._f("fixAvatarUrl")(e.avatarName),"avatar-color":e._f("fixAvatarUrl")(e.avatarColor)}}),r("div",{staticClass:"name"},[e._v(e._s(e.signature))])],1),e.info&&1===e.info.length?r("div",{staticClass:"single-item",class:"card"+e.info[0].locationId},[r("img",{staticClass:"avatar",attrs:{src:e.info[0].popUpPicUrl,alt:""}}),r("div",{staticClass:"name"},[e._v(e._s(e.info[0].prizeName))])]):r("ul",{staticClass:"lottery-list"},e._l(e.info,(function(t,o){return r("li",{key:o,staticClass:"lottery-item",class:"card"+t.locationId},[r("img",{staticClass:"avatar",attrs:{src:t.popUpPicUrl,alt:""}}),r("div",{staticClass:"name"},[e._v(e._s(t.prizeName))])])})),0),e.targetUidEcpt?r("div",{staticClass:"btn btn-lottery",on:{click:e.toLottery}}):r("div",{staticClass:"btn btn-share",on:{click:e.toShare}})])},a=[],n=r("9ab4"),i=r("60a3"),c=r("c4a0"),l=r.n(c),s=r("c949"),u=r("4328"),p=r.n(u);let f=class extends i["g"]{constructor(){super(...arguments),this.avatarName="",this.avatarColor="",this.signature=""}get targetUidEcpt(){return this.$route.query.targetUidEcpt}get userIdEcpt(){return this.$route.query.userIdEcpt}get info(){return JSON.parse(this.$route.query.info)}toLottery(){l.a.navigateTo({url:`${location.origin}${location.pathname}#/blindbox/home`})}toShare(){l.a.trackEvent("clk","AvatarShop_blindbox_share_click");const e={targetUidEcpt:this.userIdEcpt,info:this.$route.query.info};l.a.share({type:"LINK",authorize:!0,platform:"SOUL",title:"盲盒幸运购",desc:"快来沾沾我的欧气吧~",url:`${location.origin}${location.pathname}#/blindbox/share?${p.a.stringify(e)}`,thumb:"https://fe-cdn.soulapp.cn/activity/thumb-blindbox-164999.png",fail:e=>console.log("share fail: "+e.msg),success:e=>{l.a.toast({type:"success",text:"分享成功"})},complete:e=>console.log("share complete: "+e.code)})}onShow(){l.a.onShow(()=>{l.a.trackEvent("pv","AvatarShop_blindbox_share_exposure")})}mounted(){this.onShow(),Object(s["R"])(this.targetUidEcpt||this.userIdEcpt).then(e=>{this.avatarName=e.avatarName,this.avatarColor=e.avatarColor,this.signature=e.signature})}};f=Object(n["a"])([i["a"]],f);var d=f,y=d,h=(r("597f"),r("2877")),b=Object(h["a"])(y,o,a,!1,null,"6eccc794",null);t["default"]=b.exports},"597f":function(e,t,r){"use strict";r("758a")},"758a":function(e,t,r){},"9e6a":function(e,t,r){"use strict";var o=r("d233"),a=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=o.split(t.delimiter,i),l=0;l<c.length;++l){var s,u,p=c[l],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(s=t.decoder(p,n.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(p.slice(0,d),n.decoder),u=t.decoder(p.slice(d+1),n.decoder)),a.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},c=function(e,t,r){for(var o=t,a=e.length-1;a>=0;--a){var n,i=e[a];if("[]"===i)n=[],n=n.concat(o);else{n=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=o):n[c]=o}o=n}return o},l=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=n.exec(o),s=l?o.slice(0,l.index):o,u=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}var p=0;while(null!==(l=i.exec(o))&&p<r.depth){if(p+=1,!r.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+o.slice(l.index)+"]"),c(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"===typeof r.depth?r.depth:n.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?i(e,r):e,c=r.plainObjects?Object.create(null):{},s=Object.keys(a),u=0;u<s.length;++u){var p=s[u],f=l(p,a[p],r);c=o.merge(c,f,r)}return o.compact(c)}},b313:function(e,t,r){"use strict";var o=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&o.push(t[a]);r.obj[r.prop]=o}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},c=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var n=t;return Array.isArray(t)&&!Array.isArray(r)&&(n=i(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,n){o.call(t,n)?t[n]&&"object"===typeof t[n]?t[n]=e(t[n],r,a):t.push(r):t[n]=r})),t):Object.keys(r).reduce((function(t,n){var i=r[n];return o.call(t,n)?t[n]=e(t[n],i,a):t[n]=i,t}),n)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},s=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",o=0;o<t.length;++o){var n=t.charCodeAt(o);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(o):n<128?r+=a[n]:n<2048?r+=a[192|n>>6]+a[128|63&n]:n<55296||n>=57344?r+=a[224|n>>12]+a[128|n>>6&63]+a[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(o)),r+=a[240|n>>18]+a[128|n>>12&63]+a[128|n>>6&63]+a[128|63&n])}return r},p=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],c=Object.keys(i),l=0;l<c.length;++l){var s=c[l],u=i[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return n(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:l,compact:p,decode:s,encode:u,isBuffer:d,isRegExp:f,merge:c}}}]);
//# sourceMappingURL=chunk-08d76d4f.2b417df3.js.map