(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(t,e,n){n("cl8a"),t.exports=n("bBV7")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var r=n("8VmE"),o=n.n(r),u=n("NthX"),a=n.n(u),i=n("fFdx"),c=n.n(i),s=n("SDJZ"),l=n.n(s),f=n("NToG"),p=n.n(f),d=n("eef+"),h=n.n(d),v=n("K4DB"),m=n.n(v),y=n("+IV6"),w=n.n(y),b=n("o42t"),g=n.n(b),_=n("9fEB"),x=n.n(_),S=n("mXGw"),k=n.n(S),T=n("I7jp"),P=n("qqtm"),C=k.a.createElement;function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w()(t);if(e){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var E=function(t){h()(n,t);var e=O(n);function n(t){var r;return l()(this,n),(r=e.call(this,t)).componentDidMount=function(){r.setState({isOidcReady:!0})},r.state={isOidcReady:!1},r}return p()(n,null,[{key:"getInitialProps",value:function(){var t=c()(a.a.mark((function t(e){var n,r,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,o={},t.next=4,Object(T.getGlobalLabels)();case 4:if(u=t.sent,!n.getInitialProps){t.next=9;break}return t.next=8,n.getInitialProps(r);case 8:o=t.sent;case 9:return t.abrupt("return",{pageProps:o,labels:u.data.labelGroupCollection.items[0].labels});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),p()(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.labels;return this.state.isOidcReady&&C(k.a.Fragment,null,C(x.a,null,C("title",null,r.title)),C(P.b,null,C(e,o()({},n,{globalLabels:r}))))}}]),n}(g.a)},"2LUv":function(t,e,n){var r=n("m1Oa"),o=n("o/EK"),u=n("ShTl"),a=n("sJOi");t.exports=function(t){return r(t)||o(t)||u(t)||a()}},"5IsQ":function(t,e){var n,r,o=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:u}catch(t){n=u}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,s=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&d())}function d(){if(!l){var t=i(p);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||l||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"6jsY":function(t,e,n){"use strict";var r=n("/dBk"),o=n("fwM5"),u=n("bkNG"),a=n("5YB7"),i=n("Y8Bl"),c=n("7osH"),s=n("ZClQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("mYab");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=y,e.default=void 0;var p=f(n("mXGw")),d=n("z4BS");function h(t){return v.apply(this,arguments)}function v(){return(v=s(r.mark((function t(e){var n,o,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var m=function(t){a(n,t);var e=l(n);function n(){return o(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||u?{}:{url:y(e)})))}}]),n}(p.default.Component);function y(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=m,m.origGetInitialProps=h,m.getInitialProps=h},"8VmE":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"9fEB":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw")),u=r(n("GlZI")),a=n("9rrO"),i=n("bxxT"),c=n("vI6Y");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?u=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?u=!1:(p.add(l),r[s]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=u.default();function h(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},"9rrO":function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw"));e.AmpStateContext=o.createContext({})},GlZI:function(t,e,n){"use strict";var r=n("fwM5"),o=n("0pOA"),u=n("bkNG"),a=n("5YB7"),i=n("Y8Bl"),c=n("7osH"),s=n("2LUv");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("mXGw"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){a(s,i);var c=l(s);function s(t){var u;return r(this,s),u=c.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},cl8a:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},m1Oa:function(t,e,n){var r=n("z3mR");t.exports=function(t){if(Array.isArray(t))return r(t)}},"o/EK":function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},o42t:function(t,e,n){t.exports=n("6jsY")},sJOi:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw")),u=n("9rrO");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}}},[[0,0,1,2,4,3,6]]]);