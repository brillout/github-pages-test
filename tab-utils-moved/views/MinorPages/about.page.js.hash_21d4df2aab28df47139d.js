!function(e){function t(t){for(var r,u,l=t[0],i=t[1],c=t[2],p=0,d=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={7:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;a.push([445,1,0]),n()}({11:function(e,t,n){},445:function(e,t,n){n(22),e.exports=n(446)},446:function(e,t,n){"use strict";var r,o=n(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((r=n(24))||{}).__esModule?r.default:r,o.pageConfig=function(){var e=n(447);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=n(25);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=n(26);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=n(27);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(28);!0===(e||{}).__esModule&&e.default}()},447:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6);t.default=Object(a.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Around a decade ago, the emergence of new technologies enabled the development of rich interactive desktop-like apps on the web."),o.a.createElement("p",null,"Enthusiastic about the new capabilities of the web and in need for an online clock and an online timer, Romuald started developing Clock Tab and Timer Tab."),o.a.createElement("p",null,"Romuald enjoys designing web apps and open source libraries with a care for simplicity."),o.a.createElement("p",null,"More about Romuald can be found on his homepage,"," ",o.a.createElement("a",{target:"_blank",href:"https://brillout.com/"},"brillout.com"),"."))}),"About")},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(11);var r=n(0),o=n.n(r),a=n(8),u=n(9),l=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(u.a,null))};var i=n(10),c=function(e){e&&e();Object(i.a)()};var f=n(3);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,a=void 0===r?null:r,u=n.onPageLoad,i=n.noHeader,p=void 0!==i&&i,s=b(n,["route","onPageLoad","noHeader"]);a=a||"/"+t.toLowerCase().split(" ").join("-");var v=t+" - "+f.h,m=function(){return o.a.createElement(l,null,!p&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return d({view:m,route:a,title:v,on_page_load:function(){return c(u)},favicon:f.f,renderToDom:!0,renderToHtml:!0},s)}}});
//# sourceMappingURL=about.page.js.hash_21d4df2aab28df47139d.js.map