!function(e){function t(t){for(var n,u,l=t[0],i=t[1],c=t[2],s=0,d=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={11:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;a.push([453,1,0]),r()}({10:function(e,t,r){},453:function(e,t,r){r(23),e.exports=r(454)},454:function(e,t,r){"use strict";var n,o=r(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((n=r(24))||{}).__esModule?n.default:n,o.pageConfig=function(){var e=r(455);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=r(25);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=r(26);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=r(27);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=r(28);!0===(e||{}).__esModule&&e.default}()},455:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(5),u=r(3),l=r(38),i=r(53);t.default=Object(a.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"If ",u.h," doesn't work, send this"," ",o.a.createElement("a",{id:"repair-link","data-subject":"Bug Repair",className:"contact-address",target:"_blank"},"pre-filled email"),"."),o.a.createElement("p",null,"It gives information for Romuald to fix the bug, which he usually does within 24 hours."),o.a.createElement("p",null,"If the pre-filled email link above doesn't work then write an email to"," ",o.a.createElement("a",{className:"contact-address",target:"_blank"})," with your user ID:"),o.a.createElement("p",{style:{paddingLeft:20}},o.a.createElement("b",null,"My user ID: ",o.a.createElement("span",{id:"tab-user-id"}))))}),"Repair",{onPageLoad:function(){var e=document.querySelector("#repair-link"),t=Object(i.a)();document.querySelector("#tab-user-id").innerHTML=t,e.setAttribute("data-body",["Hi Romuald, my "+u.h+" does not work.","","My user ID:",t,"","My Browser:",Object(l.a)(),"","Thanks for having a look."].join("\n"))}})},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));r(10);var n=r(0),o=r.n(n),a=r(7),u=r(8),l=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(u.a,null))};var i=r(9),c=function(e){e&&e();Object(i.a)()};var f=r(3);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.route,a=void 0===n?null:n,u=r.onPageLoad,i=r.noHeader,s=void 0!==i&&i,p=b(r,["route","onPageLoad","noHeader"]);a=a||"/"+t.toLowerCase().split(" ").join("-");var y=t+" - "+f.h,m=function(){return o.a.createElement(l,null,!s&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return d({view:m,route:a,title:y,on_page_load:function(){return c(u)},favicon:f.f,renderToDom:!0,renderToHtml:!0},p)}}});
//# sourceMappingURL=repair.page.js.hash_705a245a3a07250f60c6.js.map