(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8960)},4853:function(e,t,n){Promise.resolve().then(n.bind(n,9465))},9465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return RootLayout}});var r=n(7437),o=n(1654),u=n.n(o),i=n(5883);function RootLayout(e){let{children:t}=e;return(0,r.jsx)(i.Wh,{children:(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:"".concat(u().className," m-11 pr-10 pl-10 bg-background-main"),children:t})})})}n(2489)},2489:function(){},1654:function(e){e.exports={style:{fontFamily:"'__Inter_e78965', '__Inter_Fallback_e78965'",fontStyle:"normal"},className:"__className_e78965"}},8960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var u=[],i=!1,c=-1;function cleanUpNextTick(){i&&r&&(i=!1,r.length?u=r.concat(u):c=-1,u.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,i=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new Item(e,t)),1!==u.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},u=!0;try{t[e](o,o.exports,__nccwpck_require__),u=!1}finally{u&&delete n[e]}return o.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,a={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:s,props:a,_owner:i.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[691,971,472,744],function(){return e(e.s=4853)}),_N_E=e.O()}]);