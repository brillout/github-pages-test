(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return P})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return k}));n(136);var r=n(1),o=n.n(r);function i(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function u(e){i(c,r,o,u,a,"next",e)}function a(e){i(c,r,o,u,a,"throw",e)}u(void 0)}))}}t.b=d;var u,a={is_on_hide_scroll_element:null,enable_scroll_auto_hide:null,scrollbar_width_computed:null};function l(){var e=a.is_on_hide_scroll_element&&a.enable_scroll_auto_hide&&a.scrollbar_width_computed;u.classList[e?"add":"remove"]("hide_scroll")}var s=!1;function d(){if(!s){s=!0;var e=document.querySelectorAll(".pretty_scroll_area"),t=document.querySelectorAll(".pretty_scroll_area__parent"),n=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");o.a.usage(1===e.length&&1===t.length&&1===n.length),u=e[0];var r,i=n[0];r=function(){var e,t=document.createElement("div");(e=t).style.position="absolute",e.style.visibility="hidden",e.style.zIndex="-9999",t.style.overflow="scroll";var n=document.body;n.appendChild(t);var r=document.createElement("div");t.appendChild(r);var o=t.offsetWidth-r.offsetWidth;return n.removeChild(t),o}(),document.documentElement.style.setProperty("--scroll-bar-width",r+"px"),a.scrollbar_width_computed=!0,l(),p((function(e){var t=k(i).positionTop,n=Math.abs(e-t);a.is_on_hide_scroll_element=n<=1,l()}),{fireInitialScroll:!0}),setTimeout((function(){a.enable_scroll_auto_hide=!0,l()}),2e3)}}var f,m=[];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.onlyUserScroll,r=void 0!==n&&n,o=t.fireInitialScroll,i=void 0!==o&&o;if(e.onlyUserScroll=r,m.push(e),h(),i){var c=b();e(c)}}var v=!1;function h(){v||(d(),v=!0,(u===document.documentElement?window:u).addEventListener("scroll",(function(){var e=b();m.forEach((function(t){t.onlyUserScroll&&f||t(e,{is_user_scroll:!f})}))}),{passive:!0}),window.addEventListener("resize",_,{passive:!0}))}function _(){P({smooth:!1})}function b(){return u.scrollTop}function y(e){return g.apply(this,arguments)}function g(){return(g=c(regeneratorRuntime.mark((function e(t){var n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:{},r=n.smooth,void 0!==r&&r){e.next=5;break}return e.abrupt("return",w(t));case 5:return e.abrupt("return",E(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){u.scrollTop=e}function E(e){return x.apply(this,arguments)}function x(){return(x=c(regeneratorRuntime.mark((function e(t){var n,r,o,i,c,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return e*e*(3-2*e)},30,20,r=new Promise((function(e){return n=e})),o=b(),i=t-o,f=!0,c=0,u=setInterval((function(){w(o+i*a(c++/30)),c>30&&(clearInterval(u),window.requestAnimationFrame((function(){f=!1})),n())}),20),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.smooth,r=void 0===n||n,o=k(e),i=o.positionTop;return y(i,{smooth:r})}function k(e){var t=(e.constructor===String?document.querySelector(e):e).getBoundingClientRect(),n=t.top+b();o()(n.constructor===Number);var r=u.scrollLeft;o()(r.constructor===Number);var i=t.left+r;return o()(i.constructor===Number),{positionTop:n,positionLeft:i}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.smooth,n=void 0===t||t,r=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");o.a.usage(1===r.length,"Number of `.pretty_scroll_area__hide_scroll_element` elements: "+r.length);var i=r[0];O(i,{smooth:n})}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"d",(function(){return N})),n.d(t,"c",(function(){return L})),n.d(t,"e",(function(){return q})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return R}));var r=n(1),o=n.n(r),i=n(0),c=n.n(i),u=n(7),a=n(8),l=(n(481),n(9)),s=n(22),d=n(72),f=n(73);function m(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){m(i,r,o,c,u,"next",e)}function u(e){m(i,r,o,c,u,"throw",e)}c(void 0)}))}}function v(){!function(){var e=document.querySelector("#center-button"),t=document.querySelector("#fullscreen-button"),n=document.querySelector(".pretty_scroll_area__hide_scroll_element");e.onclick=i,t.onclick=function(){return u.apply(this,arguments)};var r=function(e){var t,n,r=e.do_scroll,i=document.querySelector("#center-button"),c=i.querySelector(".button-text");return Object(s.a)(p,{onlyUserScroll:!1,fireInitialScroll:!1}),u(),a;function u(){d(),n||(t=h,h=10,m(),o.a.internal(n))}function a(){f(),n&&(window.clearTimeout(n),n=null)}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.classList[e?"remove":"add"]("auto-scroll-is-active"),c.textContent=e?"":" "+(0|t)+"s"}function d(){l()}function f(){l(!0)}function m(){if(o()(t>=0),!document.hidden&&(0|--t)===t&&(t?d():f(),0===t))return r(),a(),void o.a.internal(null===n);n=window.setTimeout(m,1e3)}function p(e,t){t.is_user_scroll&&document.fullscreenElement&&document.exitFullscreen(),0===e?u():a()}}({do_scroll:i});return;function i(){return c.apply(this,arguments)}function c(){return(c=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.next=3,Object(s.d)(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,document.documentElement.requestFullscreen();case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),Object(d.a)("Your browser doesn't support fullscreen.",{is_error:!0,short_duration:!0}),e.abrupt("return");case 9:requestAnimationFrame(p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)}))));case 10:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}}(),document.querySelector("#settings-button").onclick=function(){Object(s.d)("#more_panel")},document.querySelector("#donate-button").onclick=function(){window.open("/donate","_self")},document.querySelector("#thanks-button").onclick=function(){window.open("/thanks","_self")},document.querySelector("#zoom-button").onclick=function(){Object(f.d)()}}var h=4;function _(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){_(i,r,o,c,u,"next",e)}function u(e){_(i,r,o,c,u,"throw",e)}c(void 0)}))}}var y=function(e,t){return g.apply(this,arguments)};function g(){return(g=b(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t((function(){w(),Object(l.a)()}),n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){Object(s.b)(),v()}var E=n(3);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e){return o()(!e.id),c.a.createElement("div",P({id:"fv_full-view-layout"},e))}function S(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null),c.a.createElement("div",P({className:"pretty_scroll_area__hide_scroll_element load-area"},e),t,c.a.createElement("div",{id:"screen-buttons-wrapper"},c.a.createElement(z,{id:"donate-button"}),c.a.createElement(z,{id:"center-button"}),c.a.createElement(z,{id:"fullscreen-button"}),c.a.createElement(z,{id:"zoom-button"}),c.a.createElement(z,{id:"settings-button"}),c.a.createElement(z,{id:"thanks-button"}),c.a.createElement(z,{id:"width-setter-button"}))))}function z(e){var t=e.id;return c.a.createElement("div",{id:t,"click-name":t,className:"screen-button"},c.a.createElement("div",{className:"button-background glass-background"}),c.a.createElement("span",{className:"button-icon"}),c.a.createElement("span",{className:"button-text"}))}function L(e){var t=e.children,n=k(e,["children"]);return o()(!n.id),c.a.createElement("div",P({id:"fv_left-side"},n,{"click-name":"fv_left-side",style:{position:"relative"}}),c.a.createElement("div",{id:"fv_left-side_background",className:"glass-background"}),t)}function q(e){return o()(!e.id),c.a.createElement("div",P({id:"fv_right-side"},e))}function N(e){var t=e.children;return c.a.createElement("div",{id:"more_panel"},c.a.createElement("div",{id:"more_panel_background",className:"glass-background"}),t,c.a.createElement(a.a,null))}function R(e){var t=e.onPageLoad,n=k(e,["onPageLoad"]);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({renderToDom:!0,renderToHtml:!0,favicon:E.f},n,{on_page_load:function(e){return y(t,e)}})}},481:function(e,t,n){},482:function(e,t,n){},483:function(e,t,n){},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),o=n.n(r),i=n(137),c=n.n(i);n(185),n(482);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.is_error,r=void 0!==n&&n,i=t.short_duration,u=void 0!==i&&i;o()(e);var a=r?"linear-gradient(to right, #e83131, #dd4c4c)":"linear-gradient(to right, rgb(0, 176, 84), rgb(61, 201, 64))",l=u?4:8;c()({duration:1e3*l,text:e,position:"left",backgroundColor:a}).showToast()}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return s}));var r,o=n(1),i=n.n(o),c=n(15),u=(n(483),n(22)),a=null;function l(e){var t,n=e.containerEl,o=e.scaleEl,l=e.zoomEl,s=e.toggleEl;return i()(n&&o&&l),s=s||l,o.classList.add("zooming__scaler"),n.classList.add("zooming__overflow-container"),l.classList.add("zooming__zoomable-element"),o.addEventListener("transitionstart",(function(e){"transform"===e.propertyName&&v()}),{passive:!0}),o.addEventListener("transitionend",(function(e){"transform"===e.propertyName&&(n.classList.remove("zoom-transition"),d!==a&&(d=a,a&&f.forEach((function(e){e()}))))}),{passive:!0}),s.addEventListener("click",(function(){p({auto_scroll:!0})}),{passive:!0}),window.addEventListener("resize",(function(){t=t||{x:null,y:null};var e={x:window.innerWidth,y:window.innerHeight};if(t.x===e.x&&t.y===e.y)return;t=e,m()}),{passive:!0}),i()(null===a,"multiple zoomable elements are not supported."),a=!1,void(r=p);function m(){!0===a?function(e){var t=e.zoomEl,n=e.scaleEl,r=e.containerEl,o=h(t),c=o.height,u=o.width,a=h(r),l=a.height,s=a.width,d={zoom_el_width:u,zoom_el_height:c,zoomEl:t,container_width:s,container_height:l,containerEl:r};i()(c&&u&&l&&s,"[zoom-problem]",d);var f=_(n),m=_(t),p={x:m.x-f.x,y:m.y-f.y},v=p;var b=Math.min(l/c,s/u);var y=[s/2,l/2],g=[u/2+v.x,c/2+v.y],w=[y[0]-g[0],y[1]-g[1]];n.style.setProperty("--scale",b),n.style.setProperty("--zoom-center-x",g[0]+"px"),n.style.setProperty("--zoom-center-y",g[1]+"px"),n.style.setProperty("--translate-x",w[0]+"px"),n.style.setProperty("--translate-y",w[1]+"px"),document.documentElement.classList.add("zoomed-state")}({zoomEl:l,scaleEl:o,containerEl:n}):function(e){e.scaleEl,e.containerEl;document.documentElement.classList.remove("zoomed-state")}({scaleEl:o,containerEl:n})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.auto_scroll,n=void 0!==t&&t;v(),a=!a,Object(c.d)({name:a?"zoom_in":"zoom_out"}),n&&a&&Object(u.e)(),m()}function v(){n.classList.add("zoom-transition")}}function s(){r()}var d,f=[];function m(e){f.push(e)}function p(e,t){var n=v(e,t);return parseInt(n,10)||0}function v(e,t){return document.defaultView.getComputedStyle(e,null).getPropertyValue(t)}function h(e){var t=p(e,"height"),n=p(e,"width");return"border-box"!==v(e,"box-sizing")&&(t+=r(["top","bottom"]),n+=r(["left","right"])),{height:t,width:n};function r(t){return t.map((function(t){return p(e,"padding-"+t)+p(e,"border-"+t)})).reduce((function(e,t){return e+t}))}}function _(e){var t=0,n=0,r=e;do{t+=r.offsetLeft,n+=r.offsetTop}while(r=r.offsetParent);return{x:t,y:n}}}}]);
//# sourceMappingURL=timer.page.js.hash_38216a6b207973b5631b.js.map