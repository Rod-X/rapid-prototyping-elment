"use strict";var e={name:"RodxButton",methods:{handleClick(e){this.$emit("click",e),e.preventDefault()}}};function t(e,t,n,o,s,i,d,a,r,c){"boolean"!=typeof d&&(r=a,a=d,d=!1);const l="function"==typeof n?n.options:n;let m;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o),i?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=m):t&&(m=d?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),m)if(l.functional){const e=l.render;l.render=function(t,n){return m.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,m):[m]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const o=n?t.media||"default":e,d=i[o]||(i[o]={ids:new Set,styles:[]});if(!d.ids.has(e)){d.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",t.media&&d.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(n),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{const e=d.ids.size-1,t=document.createTextNode(n),o=d.element.childNodes;o[e]&&d.element.removeChild(o[e]),o.length?d.element.insertBefore(t,o[e]):d.element.appendChild(t)}}}(e,t)}let s;const i={};const d=t({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{staticClass:"rod-button",on:{click:this.handleClick}},[this._t("default")],2)])},staticRenderFns:[]},(function(e){e&&e("data-v-210c70a7_0",{source:".rod-button{width:30px}",map:void 0,media:void 0})}),e,void 0,!1,void 0,!1,o,void 0,void 0);d.install=e=>{e.component(d.name,d)},module.exports=d;
