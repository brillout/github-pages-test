!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],s=0,p=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={13:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=c;u.push([464,1,0]),n()}({11:function(e,t,n){},40:function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(u){if(void 0===(o="function"==typeof(r=u)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=u(),!!0){var i=window.Cookies,a=window.Cookies=u();a.noConflict=function(){return window.Cookies=i,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function u(t,n,u){if("undefined"!=typeof document){"number"==typeof(u=e({path:"/"},o.defaults,u)).expires&&(u.expires=new Date(1*new Date+864e5*u.expires)),u.expires=u.expires?u.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in u)u[c]&&(a+="; "+c,!0!==u[c]&&(a+="="+u[c].split(";")[0]));return document.cookie=t+"="+n+a}}function i(e,n){if("undefined"!=typeof document){for(var o={},u=document.cookie?document.cookie.split("; "):[],i=0;i<u.length;i++){var a=u[i].split("="),c=a.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(a[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(o[l]=c,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=u,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,n){u(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},464:function(e,t,n){n(22),e.exports=n(465)},465:function(e,t,n){"use strict";var r,o=n(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((r=n(24))||{}).__esModule?r.default:r,o.pageConfig=function(){var e=n(466);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=n(25);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=n(26);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=n(27);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(28);!0===(e||{}).__esModule&&e.default}()},466:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(6),i=n(40),a=n.n(i),c=n(3);t.default=Object(u.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Remove your settings; set ",c.h," to a pristine state."),o.a.createElement("p",null,o.a.createElement("b",null,"WARNING")," This will remove all your ",c.h," settings, including all your themes and presets."),o.a.createElement("p",null,o.a.createElement("button",{type:"button"},"Factory Reset")),o.a.createElement("p",null,o.a.createElement("span",{id:"state"})))}),"Factory Reset",{onPageLoad:function(){var e=document.querySelector("button"),t=document.querySelector("#state");0===localStorage.length&&(n(),t.innerHTML="🗸 Your Timer Tab is already factory reset.");function n(){e.setAttribute("disabled","disabled")}e.onclick=function(){window.localStorage.clear(),function(){Object.keys(a.a.get()).forEach((function(e){a.a.remove(e)}));for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],r=n.indexOf("="),o=r>-1?n.substr(0,r):n;document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}(),n(),t.innerHTML="🗸 Reset done."}},route:"/reset"})},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n(11);var r=n(0),o=n.n(r),u=n(8),i=n(9),a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(i.a,null))};var c=n(10),l=function(e){e&&e();Object(c.a)()};var f=n(3);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,u=void 0===r?null:r,i=n.onPageLoad,c=n.noHeader,s=void 0!==c&&c,d=v(n,["route","onPageLoad","noHeader"]);u=u||"/"+t.toLowerCase().split(" ").join("-");var b=t+" - "+f.h,y=function(){return o.a.createElement(a,null,!s&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return p({view:y,route:u,title:b,on_page_load:function(){return l(i)},favicon:f.f,renderToDom:!0,renderToHtml:!0},d)}}});
//# sourceMappingURL=reset.page.js.hash_b51bc53d40bb95e82c10.js.map