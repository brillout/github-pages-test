!function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],f=0,d=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={10:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;o.push([441,0,1]),n()}({4:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return y})),n.d(t,"g",(function(){return v})),n.d(t,"f",(function(){return g})),n.d(t,"h",(function(){return O})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return j}));var r=n(2),a=n.n(r),o=n(0),l=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(){return null}function p(){return l.a.createElement(l.a.Fragment,null," |")}function m(){return l.a.createElement("span",{style:{color:"#0a0",fontSize:"1.9em",display:"block"}},"✓")}function h(){return l.a.createElement("span",{style:{color:"#a00",fontSize:"1.6em",display:"block"}},"✗")}function b(e){var t=e.value,n=(a()(t>0&&t<100),"calc("+t/100+" * 100%)"),r=function(e){if(a()(e>0&&e<100),e<50)return"#a00";if(e>=75)return"#0a0";return"#e90"}(t);return l.a.createElement("div",{className:"gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"}},l.a.createElement("div",{style:{height:"100%",width:n,backgroundColor:r,borderRadius:10}}))}function y(e){var t=e.children,n=e.style,r=f(e,["children","style"]);return l.a.createElement("div",c({style:u({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},n)},r),t)}function v(e){var t=e.children,n=t[0],r=t.slice(1);return l.a.createElement("div",{style:{marginBottom:10,fontSize:"0.87em"}},l.a.createElement("i",null,n),": ",r)}function g(e){var t=e.className,n=void 0===t?"":t,r=e.children;return l.a.createElement("span",{className:n+" small-caps"},r)}function O(e){var t=e.entries,n=e.skip_links;return l.a.createElement("div",{className:"values-table"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement(o,null),l.a.createElement(o,null,"Trans­parent"),l.a.createElement(o,null,"Fork­able"),l.a.createElement(o,null,"Access­ible"),l.a.createElement(o,null,"Sustai­nable"),l.a.createElement(o,null,"Inde­pendent"))),t.map((function(e,t){return l.a.createElement(r,c({key:t},e))}))));function r(e){var t=e.modelName,n=e.transparent,r=e.forkable,a=e.accessible,o=e.independent,c=e.sustainable;return l.a.createElement("tr",null,l.a.createElement(u,null,t),l.a.createElement(u,null,l.a.createElement(s,{val:n})),l.a.createElement(u,null,l.a.createElement(s,{val:r})),l.a.createElement(u,null,l.a.createElement(s,{val:a})),l.a.createElement(u,null,l.a.createElement(s,{val:c})),l.a.createElement(u,null,l.a.createElement(s,{val:o})))}function o(e){var t=e.children,r=f(e,["children"]);if(a()(0===Object.keys(r).length),!t)return l.a.createElement("th",null);var o=t,c=n?o:l.a.createElement("a",{href:i(o)},o);return l.a.createElement("th",{align:"center"},c)}function i(e){a()(e.constructor===String),a()(!e.includes("&shy;"),{value_name:e}),a()(!e.includes("%C2%AD"),{value_name:e});return"/values"}function u(e){return l.a.createElement("td",c({align:"center"},e))}function s(e){var t=e.val;return a()(0<=t&&t<=1),1===t?l.a.createElement(m,null):0===t?l.a.createElement(h,null):l.a.createElement(b,{value:100*t})}}function w(){return l.a.createElement(l.a.Fragment,null,"Although they are, from a legal perspective, forced to financially contribute, we tolerate and never sue the large companies who infringe the"," ",l.a.createElement(g,null,"Lsos Commons")," license clause. Instead, we continuously remind large companies who forget to pay their fee, with kindness but insistence.")}function j(e){var t=e.children;return l.a.createElement(y,null,l.a.createElement("div",{className:"quote-font",style:{margin:14,fontSize:"1.2em",color:"#666"}},t))}},441:function(e,t,n){n(13),e.exports=n(442)},442:function(e,t,n){"use strict";var r,a=n(10);a.initFunctions={},a.initFunctions=a.initFunctions||{},a.initFunctions.hydratePage=!0===((r=n(14))||{}).__esModule?r.default:r,a.pageConfig=function(){var e=n(510);return!0===(e||{}).__esModule?e.default:e}(),a.router=function(){var e=n(15);return!0===(e||{}).__esModule?e.default:e}(),a.renderPageToDom=function(){var e=n(16);return!0===(e||{}).__esModule?e.default:e}(),a.domRender=function(){var e=n(7);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(17);!0===(e||{}).__esModule&&e.default}()},510:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(4);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l={};function c({components:e,...t}){return Object(r.a)("wrapper",o({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)("p",{style:{color:"red"}},"This is an old license clause version. Contact us to get the latest simplified version."),Object(r.a)("pre",{className:"code-block"},"The Lsos Commons clause. All permissions granted by the copyright holder(s) are subject to the following additional conditions. The permission grantee shall pay a license fee to the Lsos organization; to whom the fee applies and the amount is to be found at https://lsos.org/commons/fee. The clause doesn't apply to the Software as a whole but applies only to source code modifications. The clause applies only to modifications published while the clause was included in the Software's license and applies only for 180 days; consequently, future modifications may choose to not include the clause in which case, after 180 days, the clause is rendered completely ineffective and can be removed from the Software's license. The clause shall be included in all copies or substantial portions of modifications for which the clause applies."),Object(r.a)("p",null,"The clause is designed with three effects in mind:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Large companies are forced to pay the ",Object(r.a)(a.f,{mdxType:"SmallCaps"},"Lsos Commons")," fee. ",Object(r.a)("sup",null,"(1)")),Object(r.a)("li",{parentName:"ul"},"A project can leave the ",Object(r.a)(a.f,{mdxType:"SmallCaps"},"Lsos Commons")," and remove the clause at any time. ",Object(r.a)("sup",null,"(2)")),Object(r.a)("li",{parentName:"ul"},"The source code can be forked and the clause removed. ",Object(r.a)("sup",null,"(3)"))),Object(r.a)("br",null),Object(r.a)("div",{style:{fontSize:"0.76em"}},Object(r.a)("p",null,"(1): A company could circumvent the fee by always waiting 180 days before updating to the latest version.\nThis would be inconvenient\n(especially for large companies with stiff processes)\nand the effort wouldn't be worth the relatively low fee.\nMore importantly,\nmost companies respect open source developers and want to do the right thing.\nHowever,\nif a non-negligible number of companies were to circumvent the fee,\nthe Lsos will take measures.",Object(r.a)("br",null),"\n(2): In principle, the Lsos could force companies to pay the fee during 180 days after the clause has been removed,\nbut the Lsos will not do so and we stop asking for any fee as soon the clause is removed.",Object(r.a)("br",null),"\n(3): Similar to (2), when a fork removes the clause, we could force companies to pay the fee during 180 days, but we won't. However, we prohibit companies forking the code in order to circumvent the fee.")))}c.isMDXComponent=!0;var i=n(5);t.default=Object(i.a)(c,"License Clause (Lsos Commons)",{route:"/commons/clause",wrap:!0})}});
//# sourceMappingURL=clause.hash_eac6e7df7c29f9e658f1.js.map