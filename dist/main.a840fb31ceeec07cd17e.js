!function(){"use strict";var e,n,t,r,o,i,c,u,s,a,p,f,l,g={91:function(e){e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},720:function(e,n,t){e.exports=t.p+"img/doc.png"},320:function(e,n,t){e.exports=t.p+"img/email.png"},748:function(e,n,t){e.exports=t.p+"img/favicon.png"},126:function(e,n,t){e.exports=t.p+"img/mail.png"},406:function(e,n,t){e.exports=t.p+"img/money.png"},307:function(e,n,t){e.exports=t.p+"img/percent.png"},191:function(e,n,t){e.exports=t.p+"img/qiwi.png"},124:function(e,n,t){e.exports=t.p+"img/search.png"},581:function(e,n,t){e.exports=t.p+"img/vk.png"},442:function(e,n,t){e.exports=t.p+"img/webmoney.png"},730:function(e,n,t){e.exports=t.p+"img/yandex.png"}},d={};function m(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={exports:{}};return g[e](t,t.exports,m),t.exports}m.m=g,m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,{a:n}),n},m.d=function(e,n){for(var t in n)m.o(n,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e;m.g.importScripts&&(e=m.g.location+"");var n=m.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e}(),m.b=document.baseURI||self.location.href,e=m(91),n=m.n(e),t=new URL(m(748),m.b),r=new URL(m(124),m.b),o=new URL(m(307),m.b),i=new URL(m(720),m.b),c=new URL(m(126),m.b),u=new URL(m(406),m.b),s=new URL(m(191),m.b),a=new URL(m(730),m.b),p=new URL(m(442),m.b),f=new URL(m(320),m.b),l=new URL(m(581),m.b),n()(t),n()(r),n()(o),n()(i),n()(c),n()(u),n()(s),n()(a),n()(p),n()(f),n()(l),$(document).ready((function(){$(".custom-select").each((function(){$(this).find(".custom-select__field").select2({minimumResultsForSearch:-1})})),$(".range-slider__field").slider({min:0,max:100,values:[75],slide:function(e,n){$(".range-slider__value").text(n.values[0])}}),$(".order__form-input-file").on("click",(function(e){e.preventDefault(),$(".order__form-file-hidden").trigger("click")})),$(".order__form-file-hidden").on("change",(function(){var e=$(this).val(),n=e.lastIndexOf("\\"),t=e.substring(n+1);let r=parseFloat(this.files[0].size);$(".order__form-input-file-name").text(t+" "+function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0";var t=n<0?0:n,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(t))+" "+["байт","КБ","МБ","ГБ","ТБ"][r]}(r))})),$(".header__burger").on("click",(function(e){e.preventDefault(),$(this).closest(".header").toggleClass("header--active")}))}))}();