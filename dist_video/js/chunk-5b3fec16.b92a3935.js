(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b3fec16"],{"0bbf":function(e,n,t){e.exports=t.p+"img/menu-04-convert.39b702ce.jpg"},"22dc":function(e,n,t){var i={"./menu-01-convert.jpg":"3b32","./menu-02-convert.jpg":"baff","./menu-03-convert.jpg":"2414","./menu-04-convert.jpg":"0bbf","./menu-05-convert.jpg":"41f9"};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="22dc"},2414:function(e,n,t){e.exports=t.p+"img/menu-03-convert.01815ff7.jpg"},"3b32":function(e,n,t){e.exports=t.p+"img/menu-01-convert.9c24555e.jpg"},"41f9":function(e,n,t){e.exports=t.p+"img/menu-05-convert.7eebaf7d.jpg"},"7db0":function(e,n,t){"use strict";var i=t("23e7"),r=t("b727").find,o=t("44d2"),u="find",f=!0;u in[]&&Array(1)[u]((function(){f=!1})),i({target:"Array",proto:!0,forced:f},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(u)},baff:function(e,n,t){e.exports=t.p+"img/menu-02-convert.5a1bec5d.jpg"},bf4e:function(e,n,t){(function(n,t){e.exports=t()})(window,(function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: VueOfflineMixin, VueOfflineStorage, VueOfflinePlugin, default */function(e,n,t){"use strict";t.r(n),t.d(n,"VueOfflineMixin",(function(){return i})),t.d(n,"VueOfflineStorage",(function(){return o})),t.d(n,"VueOfflinePlugin",(function(){return u}));var i={data:function(){return{isOnline:!1,isOffline:!1}},mounted:function(){var e=this;if("undefined"!==typeof window){navigator.onLine?this.isOnline=!0:this.isOffline=!0;var n=function(){e.$emit("online"),e.isOnline=!0,e.isOffline=!1},t=function(){e.$emit("offline"),e.isOffline=!0,e.isOnline=!1};window.addEventListener("online",n),window.addEventListener("offline",t),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}))}}};function r(e){var n=JSON.parse(localStorage.getItem("VueOfflineStorageKeys"))||[];n.includes(e)||n.push(e),localStorage.setItem("VueOfflineStorageKeys",JSON.stringify(n))}var o={keys:"undefined"!==typeof window?localStorage.getItem("VueOfflineStorageKeys"):null,set:function(e,n){"undefined"!==typeof window&&(localStorage.setItem(e,JSON.stringify(n)),r(e))},get:function(e){return"undefined"!==typeof window?JSON.parse(localStorage.getItem(e)):null}},u={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{mixin:!0,storage:!0},t={mixin:n.mixin,storage:n.storage};t.storage&&(e.prototype.$offlineStorage=o),t.mixin&&e.mixin(i)}};n["default"]=u}})}))},eeb4:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("section",{staticClass:"screen",attrs:{id:"screen-2"}},e._l(e.menuItem,(function(n){return i("router-link",{key:n.h1,staticClass:"menu-item",attrs:{to:n.src}},[i("div",{staticClass:"title-wrap"},[i("span",{staticClass:"title"},[e._v(e._s(n.h1))])]),i("div",{staticClass:"menu-gradient"}),i("img",{class:{offlinePoster:!e.networkStatus},attrs:{id:"img-poster",src:t("22dc")("./"+n.video+".jpg"),alt:"poster"}}),e.networkStatus?i("video",{staticClass:"menu-video",attrs:{id:n.id,muted:"",playsinline:"",preload:"auto"},domProps:{muted:!0}},[i("source",{attrs:{src:"https://porsche-taycan.nutnetdev.ru/media/"+n.video+".mp4",type:"video/mp4"}})]):e._e()])})),1)},r=[],o=t("f601"),u=(t("7db0"),t("1157")),f=t.n(u),s=function(){var e=f()("#menu-video-1"),n=f()("#menu-video-2"),t=f()("#menu-video-3"),i=f()("#menu-video-4"),r=f()("#menu-video-5"),o=f()("#screen-2");function u(e,n){return setTimeout((function(){o.find("img").get(n).classList.add("poster")}),400),e.get(0).play()}function s(){o.find("img").get(0).classList.add("poster"),e.get(0).play(),e.get(0).addEventListener("ended",(function(){return u(n,1)}),!0),n.get(0).addEventListener("ended",(function(){return u(t,2)}),!0),t.get(0).addEventListener("ended",(function(){return u(i,3)}),!0),i.get(0).addEventListener("ended",(function(){return u(r,4)}),!0)}s()},c=t("bf4e"),a={name:"VMenu.vue",mixins:[c["VueOfflineMixin"]],data:function(){return{menuItem:[]}},mounted:function(){this.menuItem=Object(o["a"])()},updated:function(){s()},computed:{networkStatus:function(){return!!this.isOnline}}},d=a,l=t("2877"),p=Object(l["a"])(d,i,r,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5b3fec16.b92a3935.js.map