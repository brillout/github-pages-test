!function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={22:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;l.push([468,0]),n()}({12:function(e,t,n){e.exports=n.p+"logo-with-text.hash_7773f2da709ef74c9dca96d234b346a2.svg"},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return E})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"h",(function(){return y})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return O}));var r=n(2),a=n.n(r),l=n(0),o=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(){return null}function d(){return o.a.createElement(o.a.Fragment,null," |")}function p(){return o.a.createElement("span",{style:{color:"#0a0",fontSize:"1.9em",display:"block"}},"✓")}function h(){return o.a.createElement("span",{style:{color:"#a00",fontSize:"1.6em",display:"block"}},"✗")}function v(e){var t=e.value,n=(a()(t>0&&t<100),"calc("+t/100+" * 100%)"),r=function(e){if(a()(e>0&&e<100),e<50)return"#a00";if(e>=75)return"#0a0";return"#e90"}(t);return o.a.createElement("div",{className:"gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"}},o.a.createElement("div",{style:{height:"100%",width:n,backgroundColor:r,borderRadius:10}}))}function E(e){var t=e.children,n=e.style,r=m(e,["children","style"]);return o.a.createElement("div",c({style:u({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},n)},r),t)}function g(e){var t=e.children,n=t[0],r=t.slice(1);return o.a.createElement("div",{style:{marginBottom:10,fontSize:"0.87em"}},o.a.createElement("i",null,n),": ",r)}function b(e){var t=e.className,n=void 0===t?"":t,r=e.children;return o.a.createElement("span",{className:n+" small-caps"},r)}function y(e){var t=e.entries,n=e.skip_links;return o.a.createElement("div",{className:"values-table"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement(l,null),o.a.createElement(l,null,"Trans­parent"),o.a.createElement(l,null,"Fork­able"),o.a.createElement(l,null,"Access­ible"),o.a.createElement(l,null,"Sustai­nable"),o.a.createElement(l,null,"Inde­pendent"))),t.map((function(e,t){return o.a.createElement(r,c({key:t},e))}))));function r(e){var t=e.modelName,n=e.transparent,r=e.forkable,a=e.accessible,l=e.independent,c=e.sustainable;return o.a.createElement("tr",null,o.a.createElement(u,null,t),o.a.createElement(u,null,o.a.createElement(s,{val:n})),o.a.createElement(u,null,o.a.createElement(s,{val:r})),o.a.createElement(u,null,o.a.createElement(s,{val:a})),o.a.createElement(u,null,o.a.createElement(s,{val:c})),o.a.createElement(u,null,o.a.createElement(s,{val:l})))}function l(e){var t=e.children,r=m(e,["children"]);if(a()(0===Object.keys(r).length),!t)return o.a.createElement("th",null);var l=t,c=n?l:o.a.createElement("a",{href:i(l)},l);return o.a.createElement("th",{align:"center"},c)}function i(e){a()(e.constructor===String),a()(!e.includes("&shy;"),{value_name:e}),a()(!e.includes("%C2%AD"),{value_name:e});return"/values"}function u(e){return o.a.createElement("td",c({align:"center"},e))}function s(e){var t=e.val;return a()(0<=t&&t<=1),1===t?o.a.createElement(p,null):0===t?o.a.createElement(h,null):o.a.createElement(v,{value:100*t})}}function w(){return o.a.createElement(o.a.Fragment,null,"Although they are, from a legal perspective, forced to financially contribute, we tolerate and never sue the large companies who infringe the"," ",o.a.createElement(b,null,"Lsos Commons")," license clause. Instead, we continuously remind large companies who forget to pay their fee, with kindness but insistence.")}function O(e){var t=e.children;return o.a.createElement(E,null,o.a.createElement("div",{className:"quote-font",style:{margin:14,fontSize:"1.2em",color:"#666"}},t))}},468:function(e,t,n){n(13),e.exports=n(469)},469:function(e,t,n){"use strict";var r,a=n(10);a.initFunctions={},a.initFunctions=a.initFunctions||{},a.initFunctions.hydratePage=!0===((r=n(14))||{}).__esModule?r.default:r,a.pageConfig=function(){var e=n(470);return!0===(e||{}).__esModule?e.default:e}(),a.router=function(){var e=n(15);return!0===(e||{}).__esModule?e.default:e}(),a.renderPageToDom=function(){var e=n(16);return!0===(e||{}).__esModule?e.default:e}(),a.domRender=function(){var e=n(7);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(17);!0===(e||{}).__esModule&&e.default}()},470:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),l=n.n(a),o=n(4);t.default=Object(r.a)((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Work in Progress"),l.a.createElement("p",null,"You are a company and you are interested in financially supporting your open source dependencies? Let us know so we can gauge interest."),l.a.createElement("button",{className:"lsos-button"},l.a.createElement(o.f,{className:"lsos-button--action-alone"},"Yes we would")))}),"Donate",{route:"/fund/donate"})},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return P}));var r=n(0),a=n.n(r),l=(n(23),n(8)),o=(n(24),function(){return a.a.createElement(c,null,a.a.createElement(l.a,{style:{paddingLeft:"0 !important"},height:30}),a.a.createElement(i,null,a.a.createElement(u,null,a.a.createElement("a",{href:"/fund"},a.a.createElement("span",{className:"text-desktop"},"Lsos Donation Fund"),a.a.createElement("span",{className:"text-mobile"},"Donation Fund"))),a.a.createElement(u,null,a.a.createElement("a",{href:"/basic"},a.a.createElement("span",{className:"text-desktop"},"Lsos Basic"),a.a.createElement("span",{className:"text-mobile"},"Basic"))),a.a.createElement(u,null,a.a.createElement("a",{href:"/commons"},a.a.createElement("span",{className:"text-desktop"},"Lsos Commons"),a.a.createElement("span",{className:"text-mobile"},"Commons"))),a.a.createElement(u,null,a.a.createElement("a",{href:"/growth"},a.a.createElement("span",{className:"text-desktop"},"Lsos Growth"),a.a.createElement("span",{className:"text-mobile"},"Growth")))))});function c(e){var t=e.children;return a.a.createElement("div",{id:"header-container"},a.a.createElement("div",{id:"header"},t))}function i(e){var t=e.children;return a.a.createElement("div",{className:"menu_container"},t)}function u(e){var t=e.children;return a.a.createElement("div",{className:"menu_item"},t)}n(25);var s=n(6),m=function(){return a.a.createElement(f,null,a.a.createElement(d,null,a.a.createElement(p,null,"Resources"),a.a.createElement(h,{href:"/"},"What is the Lsos"),a.a.createElement(h,{href:"/fund"},"Lsos Donation Fund"),a.a.createElement(h,{href:"/commons"},"Lsos Commons"),a.a.createElement(h,{href:"/growth"},"Lsos Growth"),a.a.createElement(h,{href:"/jobs"},"Lsos Jobs")),a.a.createElement(d,null,a.a.createElement(p,null,"Lsos"),a.a.createElement(h,{href:"/jobs/lsos"},"Jobs"),a.a.createElement(h,{href:"/about"},"About us"),a.a.createElement(h,{href:"/contact"},"Contact us"),a.a.createElement(h,{href:s.a},a.a.createElement(v,{marginRight:5}),"Chat with us"),a.a.createElement(h,{href:s.b},a.a.createElement(E,{marginRight:5}),"Discuss with us")),a.a.createElement(d,null,a.a.createElement(p,null,"Identity"),a.a.createElement(h,{href:"/values"},"Values"),a.a.createElement(h,{href:"/mission"},"Mission"),a.a.createElement(h,{href:"/culture"},"Culture"),a.a.createElement(h,{href:"/conduct"},"Conduct")),a.a.createElement(d,null,a.a.createElement(p,null,"Legal"),a.a.createElement(h,{href:"/terms"},"Terms of Service"),a.a.createElement(h,{href:"/privacy"},"Privacy Policy"),a.a.createElement(h,{href:"/imprint"},"Imprint")))};function f(e){var t=e.children;return a.a.createElement("div",{id:"footer-container"},a.a.createElement("div",{id:"footer"},t))}function d(e){var t=e.children;return a.a.createElement("div",{className:"footer_section"},t)}function p(e){var t=e.children;return a.a.createElement("h4",{style:{marginBottom:7,fontWeight:"300",color:"#999"}},t)}function h(e){var t=e.href,n=e.children;return a.a.createElement("a",{href:t,style:{display:"block",textDecoration:"none",color:"inherit"}},n)}function v(e){var t=e.marginRight;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240",width:22,height:22,style:{marginRight:t+-6,marginTop:"calc((1em - 22px) / 2)",marginBottom:"calc((1em - 22px) / 2)",verticalAlign:"middle",position:"relative",left:-3}},a.a.createElement("path",{style:{fill:"#7289DA"},d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),a.a.createElement("path",{style:{fill:"#7289DA"},d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"}))}function E(e){var t=e.marginRight;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:16,height:16,style:{marginRight:t,marginTop:"calc((1em - 16px) / 2)",marginBottom:"calc((1em - 16px) / 2)",verticalAlign:"middle",position:"relative",top:-1}},a.a.createElement("path",{style:{fill:"#1b1f23",clipRule:"evenodd",fillRule:"evenodd"},d:"m512 0c-282.88 0-512 229.12-512 512 0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32 202.24-67.84 348.8-259.84 348.8-485.76 0-282.88-229.12-512-512-512z"}))}var g=n(9),b=n.n(g),y=n(2),w=n.n(y);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.recipient_default,n=void 0===t?"hello":t,r=e.domain_name,a=void 0===r?window.location.host:r;return w()(!a.includes(":")),w()(2===a.split(".").length),void document.querySelectorAll(".contact-address").forEach(l);function l(e){var t=j(l("data-recipient")||n,l("data-domain")||a),r=x({email:t,subject:l("data-subject"),body:l("data-body"),alreadyEncoded:l("data-alreadyencoded")});return e.textContent||(e.textContent=t),void("A"===e.tagName&&(l("data-jslink")?(e.onclick=function(){window.open(r,"_blank")},e.style.cursor="pointer"):e.setAttribute("href",r),e.setAttribute("target","_blank")));function l(t){return e.getAttribute(t)}}}function j(e,t){w()(e);var n=String.fromCharCode(64);return w()("@"===n),e+n+t}function x(e){var t=e.email,n=e.subject,r=e.body,a=e.alreadyEncoded,l="mailto:"+t;return n||r?(l+="?",n&&(l+="subject="+_(n,a),r&&(l+="&")),r&&(l+="body="+_(r,a)),l):l}function _(e,t){return t?e:encodeURIComponent(e)}t.a=P;function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,l=(n.wrap,n.no_header),c=n.on_page_load,i=n.hydrateReact,u=n.addInitialProps;r||(r="/"+t.toLowerCase().split(" ").join("-"));var s=t?t+" | Lsos":"Lsos",f=function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o,null),a.a.createElement("div",{id:"page-content-container"},a.a.createElement("div",{id:"page-content"},l?null:a.a.createElement("h1",null,t),a.a.createElement(e,n))),a.a.createElement(m,null))};return{route:r,view:f,title:s,favicon:b.a,renderToDom:!0,renderToHtml:!0,renderHtmlAtBuildTime:!0,hydrateReact:i,addInitialProps:u,on_page_load:function(){O({domain_name:"lsos.org"}),c&&c()}}}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://discord.gg/kqXf65G",a="https://github.com/Lsos/converse"},7:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(11),o=n.n(l);function c(){var e="saturate(180%) blur(20px)",t="backdrop-filter";return window.CSS&&window.CSS.supports&&(window.CSS.supports(t,e)||window.CSS.supports("-webkit-"+t,e))}function i(e,t,n,r,a,l,o){try{var c=e[l](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){i(l,r,a,o,c,"next",e)}function c(e){i(l,r,a,o,c,"throw",e)}o(void 0)}))}}t.default=function(e){return s.apply(this,arguments)};function s(){return(s=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.page.on_page_load(t);case 2:c()&&document.documentElement.classList.add("backdrop-filter-support"),t.page.hydrateReact&&m(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=e.page,n=e.initialProps,r=e.CONTAINER_ID,l=a.a.createElement(t.view,n),c=document.getElementById(r);t.renderToHtml?o.a.hydrate(l,c):o.a.render(l,c)}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(12),a=n.n(r),l=n(0),o=n.n(l),c=n(2),i=n.n(c);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.style,n=e.height;return i()(n),o.a.createElement("a",{href:"/",style:s({height:n},t)},o.a.createElement("img",{src:a.a,style:{height:n}}))}},9:function(e,t,n){e.exports=n.p+"logo.hash_b4859b66bf49915e8d8ea777e776cc50.svg"}});
//# sourceMappingURL=donate.hash_4573f407f5c7b21770ef.js.map