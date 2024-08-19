(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gc={exports:{}},Hi={},Kc={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),hh=Symbol.for("react.portal"),mh=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),bh=Symbol.for("react.memo"),Sh=Symbol.for("react.lazy"),uu=Symbol.iterator;function Eh(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var Yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Zc={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Yc}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jc(){}Jc.prototype=yr.prototype;function Xa(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Yc}var Za=Xa.prototype=new Jc;Za.constructor=Xa;Xc(Za,yr.prototype);Za.isPureReactComponent=!0;var cu=Array.isArray,qc=Object.prototype.hasOwnProperty,Ja={current:null},ed={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)qc.call(t,r)&&!ed.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:po,type:e,key:i,ref:a,props:o,_owner:Ja.current}}function Ah(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function $h(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var du=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$h(""+e.key):t.toString(36)}function Vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case po:case hh:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+hl(a,0):r,cu(o)?(n="",e!=null&&(n=e.replace(du,"$&/")+"/"),Vo(o,t,n,"",function(s){return s})):o!=null&&(qa(o)&&(o=Ah(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(du,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",cu(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+hl(i,l);a+=Vo(i,t,n,u,o)}else if(u=Eh(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+hl(i,l++),a+=Vo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Wo={transition:null},_h={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Ja};function nd(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=yr;te.Fragment=mh;te.Profiler=vh;te.PureComponent=Xa;te.StrictMode=gh;te.Suspense=kh;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h;te.act=nd;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)qc.call(t,u)&&!ed.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:po,type:e.type,key:o,ref:i,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:wh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};te.createElement=td;te.createFactory=function(e){var t=td.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:xh,render:e}};te.isValidElement=qa;te.lazy=function(e){return{$$typeof:Sh,_payload:{_status:-1,_result:e},_init:Ch}};te.memo=function(e,t){return{$$typeof:bh,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};te.unstable_act=nd;te.useCallback=function(e,t){return Me.current.useCallback(e,t)};te.useContext=function(e){return Me.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};te.useEffect=function(e,t){return Me.current.useEffect(e,t)};te.useId=function(){return Me.current.useId()};te.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Me.current.useMemo(e,t)};te.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};te.useRef=function(e){return Me.current.useRef(e)};te.useState=function(e){return Me.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return Me.current.useTransition()};te.version="18.3.1";Kc.exports=te;var $=Kc.exports;const A=Wc($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=$,Ph=Symbol.for("react.element"),jh=Symbol.for("react.fragment"),Nh=Object.prototype.hasOwnProperty,Lh=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oh={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Nh.call(t,r)&&!Oh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ph,type:e,key:i,ref:a,props:o,_owner:Lh.current}}Hi.Fragment=jh;Hi.jsx=rd;Hi.jsxs=rd;Gc.exports=Hi;var O=Gc.exports,Vl={},od={exports:{}},qe={},id={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var _=P.length;P.push(T);e:for(;0<_;){var F=_-1>>>1,z=P[F];if(0<o(z,T))P[F]=T,P[_]=z,_=F;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],_=P.pop();if(_!==T){P[0]=_;e:for(var F=0,z=P.length,W=z>>>1;F<W;){var b=2*(F+1)-1,ee=P[b],N=b+1,U=P[N];if(0>o(ee,_))N<z&&0>o(U,ee)?(P[F]=U,P[N]=_,F=N):(P[F]=ee,P[b]=_,F=b);else if(N<z&&0>o(U,_))P[F]=U,P[N]=_,F=N;else break e}}return T}function o(P,T){var _=P.sortIndex-T.sortIndex;return _!==0?_:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],s=[],c=1,d=null,f=3,h=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var T=n(s);T!==null;){if(T.callback===null)r(s);else if(T.startTime<=P)r(s),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(s)}}function w(P){if(y=!1,g(P),!v)if(n(u)!==null)v=!0,K(x);else{var T=n(s);T!==null&&le(w,T.startTime-P)}}function x(P,T){v=!1,y&&(y=!1,m(C),C=-1),h=!0;var _=f;try{for(g(T),d=n(u);d!==null&&(!(d.expirationTime>T)||P&&!I());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var z=F(d.expirationTime<=T);T=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(u)&&r(u),g(T)}else r(u);d=n(u)}if(d!==null)var W=!0;else{var b=n(s);b!==null&&le(w,b.startTime-T),W=!1}return W}finally{d=null,f=_,h=!1}}var k=!1,S=null,C=-1,B=5,D=-1;function I(){return!(e.unstable_now()-D<B)}function M(){if(S!==null){var P=e.unstable_now();D=P;var T=!0;try{T=S(!0,P)}finally{T?G():(k=!1,S=null)}}else k=!1}var G;if(typeof p=="function")G=function(){p(M)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Y=Z.port2;Z.port1.onmessage=M,G=function(){Y.postMessage(null)}}else G=function(){E(M,0)};function K(P){S=P,k||(k=!0,G())}function le(P,T){C=E(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,K(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var _=f;f=T;try{return P()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var _=f;f=P;try{return T()}finally{f=_}},e.unstable_scheduleCallback=function(P,T,_){var F=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?F+_:F):_=F,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=_+z,P={id:c++,callback:T,priorityLevel:P,startTime:_,expirationTime:z,sortIndex:-1},_>F?(P.sortIndex=_,t(s,P),n(u)===null&&P===n(s)&&(y?(m(C),C=-1):y=!0,le(w,_-F))):(P.sortIndex=z,t(u,P),v||h||(v=!0,K(x))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var T=f;return function(){var _=f;f=T;try{return P.apply(this,arguments)}finally{f=_}}}})(ld);id.exports=ld;var Rh=id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=$,Je=Rh;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,Kr={};function jn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Kr[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},pu={};function zh(e){return Wl.call(pu,e)?!0:Wl.call(fu,e)?!1:Ih.test(e)?pu[e]=!0:(fu[e]=!0,!1)}function Bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mh(e,t,n,r){if(t===null||typeof t>"u"||Bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);Le[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);Le[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);Le[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mh(t,n,o,r)&&(n=null),r||o===null?zh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ud=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),is=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),cd=Symbol.for("react.offscreen"),hu=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,ml;function jr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var gl=!1;function vl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function Fh(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Bn:return"Portal";case Gl:return"Profiler";case rs:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ud:return(e.displayName||"Context")+".Consumer";case sd:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case is:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Hh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uh(e){var t=dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){e._valueTracker||(e._valueTracker=Uh(e))}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pd(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function Jl(e,t){pd(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Nr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function hd(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $o,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qh=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){Qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function vd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(Vh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,er=null,tr=null;function wu(e){if(e=go(e)){if(typeof ia!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Gi(t),ia(e.stateNode,e.type,t))}}function wd(e){er?tr?tr.push(e):tr=[e]:er=e}function xd(){if(er){var e=er,t=tr;if(tr=er=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function kd(e,t){return e(t)}function bd(){}var yl=!1;function Sd(e,t,n){if(yl)return e(t,n);yl=!0;try{return kd(e,t,n)}finally{yl=!1,(er!==null||tr!==null)&&(bd(),xd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var la=!1;if(zt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){la=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{la=!1}function Wh(e,t,n,r,o,i,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var zr=!1,ci=null,di=!1,aa=null,Gh={onError:function(e){zr=!0,ci=e}};function Kh(e,t,n,r,o,i,a,l,u){zr=!1,ci=null,Wh.apply(Gh,arguments)}function Yh(e,t,n,r,o,i,a,l,u){if(Kh.apply(this,arguments),zr){if(zr){var s=ci;zr=!1,ci=null}else throw Error(R(198));di||(di=!0,aa=s)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xu(e){if(Nn(e)!==e)throw Error(R(188))}function Xh(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xu(o),e;if(i===r)return xu(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Ad(e){return e=Xh(e),e!==null?$d(e):null}function $d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$d(e);if(t!==null)return t;e=e.sibling}return null}var Cd=Je.unstable_scheduleCallback,ku=Je.unstable_cancelCallback,Zh=Je.unstable_shouldYield,Jh=Je.unstable_requestPaint,xe=Je.unstable_now,qh=Je.unstable_getCurrentPriorityLevel,as=Je.unstable_ImmediatePriority,_d=Je.unstable_UserBlockingPriority,fi=Je.unstable_NormalPriority,em=Je.unstable_LowPriority,Td=Je.unstable_IdlePriority,Ui=null,$t=null;function tm(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:om,nm=Math.log,rm=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(nm(e)/rm|0)|0}var Co=64,_o=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Lr(l):(i&=a,i!==0&&(r=Lr(i)))}else a=n&~o,a!==0?r=Lr(a):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-pt(i),l=1<<a,u=o[a];u===-1?(!(l&n)||l&r)&&(o[a]=im(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ae=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nd,us,Ld,Od,Rd,ua=!1,To=[],Zt=null,Jt=null,qt=null,Zr=new Map,Jr=new Map,Gt=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=go(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function um(e,t,n,r,o){switch(t){case"focusin":return Zt=Ar(Zt,e,t,n,r,o),!0;case"dragenter":return Jt=Ar(Jt,e,t,n,r,o),!0;case"mouseover":return qt=Ar(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,Ar(Zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jr.set(i,Ar(Jr.get(i)||null,e,t,n,r,o)),!0}return!1}function Dd(e){var t=gn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Rd(e.priority,function(){Ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oa=r,n.target.dispatchEvent(r),oa=null}else return t=go(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function Su(e,t,n){Go(e)&&n.delete(t)}function cm(){ua=!1,Zt!==null&&Go(Zt)&&(Zt=null),Jt!==null&&Go(Jt)&&(Jt=null),qt!==null&&Go(qt)&&(qt=null),Zr.forEach(Su),Jr.forEach(Su)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,cm)))}function qr(e){function t(o){return $r(o,e)}if(0<To.length){$r(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&$r(Zt,e),Jt!==null&&$r(Jt,e),qt!==null&&$r(qt,e),Zr.forEach(t),Jr.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Dd(n),n.blockedOn===null&&Gt.shift()}var nr=Ht.ReactCurrentBatchConfig,hi=!0;function dm(e,t,n,r){var o=ae,i=nr.transition;nr.transition=null;try{ae=1,cs(e,t,n,r)}finally{ae=o,nr.transition=i}}function fm(e,t,n,r){var o=ae,i=nr.transition;nr.transition=null;try{ae=4,cs(e,t,n,r)}finally{ae=o,nr.transition=i}}function cs(e,t,n,r){if(hi){var o=ca(e,t,n,r);if(o===null)Tl(e,t,r,mi,n),bu(e,r);else if(um(o,e,t,n,r))r.stopPropagation();else if(bu(e,r),t&4&&-1<sm.indexOf(e)){for(;o!==null;){var i=go(o);if(i!==null&&Nd(i),i=ca(e,t,n,r),i===null&&Tl(e,t,r,mi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var mi=null;function ca(e,t,n,r){if(mi=null,e=ls(r),e=gn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function Id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qh()){case as:return 1;case _d:return 4;case fi:case em:return 16;case Td:return 536870912;default:return 16}default:return 16}}var Yt=null,ds=null,Ko=null;function zd(){if(Ko)return Ko;var e,t=ds,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ko=o.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Eu(){return!1}function et(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:Eu,this.isPropagationStopped=Eu,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=et(wr),mo=ge({},wr,{view:0,detail:0}),pm=et(mo),xl,kl,Cr,Qi=ge({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(xl=e.screenX-Cr.screenX,kl=e.screenY-Cr.screenY):kl=xl=0,Cr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Au=et(Qi),hm=ge({},Qi,{dataTransfer:0}),mm=et(hm),gm=ge({},mo,{relatedTarget:0}),bl=et(gm),vm=ge({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=et(vm),wm=ge({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=et(wm),km=ge({},wr,{data:0}),$u=et(km),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function ps(){return Am}var $m=ge({},mo,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=et($m),_m=ge({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=et(_m),Tm=ge({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Pm=et(Tm),jm=ge({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=et(jm),Lm=ge({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=et(Lm),Rm=[9,13,27,32],hs=zt&&"CompositionEvent"in window,Br=null;zt&&"documentMode"in document&&(Br=document.documentMode);var Dm=zt&&"TextEvent"in window&&!Br,Bd=zt&&(!hs||Br&&8<Br&&11>=Br),_u=" ",Tu=!1;function Md(e,t){switch(e){case"keyup":return Rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Im(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(Tu=!0,_u);case"textInput":return e=t.data,e===_u&&Tu?null:e;default:return null}}function zm(e,t){if(Fn)return e==="compositionend"||!hs&&Md(e,t)?(e=zd(),Ko=ds=Yt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var Bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bm[e.type]:t==="textarea"}function Hd(e,t,n,r){wd(r),t=gi(t,"onChange"),0<t.length&&(n=new fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,eo=null;function Mm(e){qd(e,0)}function Vi(e){var t=Qn(e);if(fd(t))return e}function Fm(e,t){if(e==="change")return t}var Ud=!1;if(zt){var Sl;if(zt){var El="oninput"in document;if(!El){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),El=typeof ju.oninput=="function"}Sl=El}else Sl=!1;Ud=Sl&&(!document.documentMode||9<document.documentMode)}function Nu(){Mr&&(Mr.detachEvent("onpropertychange",Qd),eo=Mr=null)}function Qd(e){if(e.propertyName==="value"&&Vi(eo)){var t=[];Hd(t,eo,e,ls(e)),Sd(Mm,t)}}function Hm(e,t,n){e==="focusin"?(Nu(),Mr=t,eo=n,Mr.attachEvent("onpropertychange",Qd)):e==="focusout"&&Nu()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(eo)}function Qm(e,t){if(e==="click")return Vi(t)}function Vm(e,t){if(e==="input"||e==="change")return Vi(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Wm;function to(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Wl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function Vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(){for(var e=window,t=ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ui(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=Wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vd(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ou(n,i);var a=Ou(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Km=zt&&"documentMode"in document&&11>=document.documentMode,Hn=null,da=null,Fr=null,fa=!1;function Ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||Hn==null||Hn!==ui(r)||(r=Hn,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&to(Fr,r)||(Fr=r,r=gi(da,"onSelect"),0<r.length&&(t=new fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Al={},Gd={};zt&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Wi(e){if(Al[e])return Al[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return Al[e]=t[n];return e}var Kd=Wi("animationend"),Yd=Wi("animationiteration"),Xd=Wi("animationstart"),Zd=Wi("transitionend"),Jd=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Jd.set(e,t),jn(t,[e])}for(var $l=0;$l<Du.length;$l++){var Cl=Du[$l],Ym=Cl.toLowerCase(),Xm=Cl[0].toUpperCase()+Cl.slice(1);cn(Ym,"on"+Xm)}cn(Kd,"onAnimationEnd");cn(Yd,"onAnimationIteration");cn(Xd,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Zd,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yh(r,t,void 0,e),e.currentTarget=null}function qd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;Iu(o,l,s),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,s=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;Iu(o,l,s),i=u}}}if(di)throw e=aa,di=!1,aa=null,e}function ue(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(ef(t,e,2,!1),n.add(r))}function _l(e,t,n){var r=0;t&&(r|=4),ef(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function no(e){if(!e[No]){e[No]=!0,ad.forEach(function(n){n!=="selectionchange"&&(Zm.has(n)||_l(n,!1,e),_l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,_l("selectionchange",!1,t))}}function ef(e,t,n,r){switch(Id(t)){case 1:var o=dm;break;case 4:o=fm;break;default:o=cs}n=o.bind(null,t,n,e),o=void 0,!la||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=gn(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Sd(function(){var s=i,c=ls(n),d=[];e:{var f=Jd.get(e);if(f!==void 0){var h=fs,v=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":h=Cm;break;case"focusin":v="focus",h=bl;break;case"focusout":v="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Pm;break;case Kd:case Yd:case Xd:h=ym;break;case Zd:h=Nm;break;case"scroll":h=pm;break;case"wheel":h=Om;break;case"copy":case"cut":case"paste":h=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Cu}var y=(t&4)!==0,E=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=s,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Xr(p,m),w!=null&&y.push(ro(p,w,g)))),E)break;p=p.return}0<y.length&&(f=new h(f,v,null,n,c),d.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==oa&&(v=n.relatedTarget||n.fromElement)&&(gn(v)||v[Bt]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=s,v=v?gn(v):null,v!==null&&(E=Nn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=s),h!==v)){if(y=Au,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cu,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=h==null?f:Qn(h),g=v==null?f:Qn(v),f=new y(w,p+"leave",h,n,c),f.target=E,f.relatedTarget=g,w=null,gn(c)===s&&(y=new y(m,p+"enter",v,n,c),y.target=g,y.relatedTarget=E,w=y),E=w,h&&v)t:{for(y=h,m=v,p=0,g=y;g;g=Dn(g))p++;for(g=0,w=m;w;w=Dn(w))g++;for(;0<p-g;)y=Dn(y),p--;for(;0<g-p;)m=Dn(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Dn(y),m=Dn(m)}y=null}else y=null;h!==null&&zu(d,f,h,y,!1),v!==null&&E!==null&&zu(d,E,v,y,!0)}}e:{if(f=s?Qn(s):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var x=Fm;else if(Pu(f))if(Ud)x=Vm;else{x=Um;var k=Hm}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Qm);if(x&&(x=x(e,s))){Hd(d,x,n,c);break e}k&&k(e,f,s),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ql(f,"number",f.value)}switch(k=s?Qn(s):window,e){case"focusin":(Pu(k)||k.contentEditable==="true")&&(Hn=k,da=s,Fr=null);break;case"focusout":Fr=da=Hn=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Ru(d,n,c);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":Ru(d,n,c)}var S;if(hs)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Fn?Md(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Bd&&n.locale!=="ko"&&(Fn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Fn&&(S=zd()):(Yt=c,ds="value"in Yt?Yt.value:Yt.textContent,Fn=!0)),k=gi(s,C),0<k.length&&(C=new $u(C,e,null,n,c),d.push({event:C,listeners:k}),S?C.data=S:(S=Fd(n),S!==null&&(C.data=S)))),(S=Dm?Im(e,n):zm(e,n))&&(s=gi(s,"onBeforeInput"),0<s.length&&(c=new $u("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:s}),c.data=S))}qd(d,t)})}function ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Xr(e,n),i!=null&&r.unshift(ro(e,i,o)),i=Xr(e,t),i!=null&&r.push(ro(e,i,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,o?(u=Xr(n,i),u!=null&&a.unshift(ro(n,u,l))):o||(u=Xr(n,i),u!=null&&a.push(ro(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jm=/\r\n?/g,qm=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace(qm,"")}function Lo(e,t,n){if(t=Bu(t),Bu(e)!==t&&n)throw Error(R(425))}function vi(){}var pa=null,ha=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(e){return Mu.resolve(null).then(e).catch(n0)}:ga;function n0(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),At="__reactFiber$"+xr,oo="__reactProps$"+xr,Bt="__reactContainer$"+xr,va="__reactEvents$"+xr,r0="__reactListeners$"+xr,o0="__reactHandles$"+xr;function gn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[At])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[At]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Gi(e){return e[oo]||null}var ya=[],Vn=-1;function dn(e){return{current:e}}function de(e){0>Vn||(e.current=ya[Vn],ya[Vn]=null,Vn--)}function se(e,t){Vn++,ya[Vn]=e.current,e.current=t}var an={},Ie=dn(an),Ve=dn(!1),An=an;function lr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function yi(){de(Ve),de(Ie)}function Hu(e,t,n){if(Ie.current!==an)throw Error(R(168));se(Ie,t),se(Ve,n)}function tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Hh(e)||"Unknown",o));return ge({},n,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,An=Ie.current,se(Ie,e),se(Ve,Ve.current),!0}function Uu(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=tf(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,de(Ve),de(Ie),se(Ie,e)):de(Ve),se(Ve,n)}var Ot=null,Ki=!1,jl=!1;function nf(e){Ot===null?Ot=[e]:Ot.push(e)}function i0(e){Ki=!0,nf(e)}function fn(){if(!jl&&Ot!==null){jl=!0;var e=0,t=ae;try{var n=Ot;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,Ki=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),Cd(as,fn),o}finally{ae=t,jl=!1}}return null}var Wn=[],Gn=0,xi=null,ki=0,tt=[],nt=0,$n=null,Rt=1,Dt="";function hn(e,t){Wn[Gn++]=ki,Wn[Gn++]=xi,xi=e,ki=t}function rf(e,t,n){tt[nt++]=Rt,tt[nt++]=Dt,tt[nt++]=$n,$n=e;var r=Rt;e=Dt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Rt=1<<32-pt(t)+o|n<<o|r,Dt=i+e}else Rt=1<<i|n<<o|r,Dt=e}function gs(e){e.return!==null&&(hn(e,1),rf(e,1,0))}function vs(e){for(;e===xi;)xi=Wn[--Gn],Wn[Gn]=null,ki=Wn[--Gn],Wn[Gn]=null;for(;e===$n;)$n=tt[--nt],tt[nt]=null,Dt=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null}var Ze=null,Xe=null,fe=!1,ft=null;function of(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:Rt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Xe=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(fe){var t=Xe;if(t){var n=t;if(!Qu(e,t)){if(wa(e))throw Error(R(418));t=en(n.nextSibling);var r=Ze;t&&Qu(e,t)?of(r,n):(e.flags=e.flags&-4097|2,fe=!1,Ze=e)}}else{if(wa(e))throw Error(R(418));e.flags=e.flags&-4097|2,fe=!1,Ze=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Oo(e){if(e!==Ze)return!1;if(!fe)return Vu(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Xe)){if(wa(e))throw lf(),Error(R(418));for(;t;)of(e,t),t=en(t.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?en(e.stateNode.nextSibling):null;return!0}function lf(){for(var e=Xe;e;)e=en(e.nextSibling)}function ar(){Xe=Ze=null,fe=!1}function ys(e){ft===null?ft=[e]:ft.push(e)}var l0=Ht.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wu(e){var t=e._init;return t(e._payload)}function af(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=on(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=zl(g,m.mode,w),p.return=m,p):(p=o(p,g),p.return=m,p)}function u(m,p,g,w){var x=g.type;return x===Mn?c(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vt&&Wu(x)===p.type)?(w=o(p,g.props),w.ref=_r(m,p,g),w.return=m,w):(w=ni(g.type,g.key,g.props,null,m.mode,w),w.ref=_r(m,p,g),w.return=m,w)}function s(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Bl(g,m.mode,w),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function c(m,p,g,w,x){return p===null||p.tag!==7?(p=bn(g,m.mode,w,x),p.return=m,p):(p=o(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zl(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Eo:return g=ni(p.type,p.key,p.props,null,m.mode,g),g.ref=_r(m,null,p),g.return=m,g;case Bn:return p=Bl(p,m.mode,g),p.return=m,p;case Vt:var w=p._init;return d(m,w(p._payload),g)}if(Nr(p)||Sr(p))return p=bn(p,m.mode,g,null),p.return=m,p;Ro(m,p)}return null}function f(m,p,g,w){var x=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:return g.key===x?u(m,p,g,w):null;case Bn:return g.key===x?s(m,p,g,w):null;case Vt:return x=g._init,f(m,p,x(g._payload),w)}if(Nr(g)||Sr(g))return x!==null?null:c(m,p,g,w,null);Ro(m,g)}return null}function h(m,p,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Eo:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,x);case Bn:return m=m.get(w.key===null?g:w.key)||null,s(p,m,w,x);case Vt:var k=w._init;return h(m,p,g,k(w._payload),x)}if(Nr(w)||Sr(w))return m=m.get(g)||null,c(p,m,w,x,null);Ro(p,w)}return null}function v(m,p,g,w){for(var x=null,k=null,S=p,C=p=0,B=null;S!==null&&C<g.length;C++){S.index>C?(B=S,S=null):B=S.sibling;var D=f(m,S,g[C],w);if(D===null){S===null&&(S=B);break}e&&S&&D.alternate===null&&t(m,S),p=i(D,p,C),k===null?x=D:k.sibling=D,k=D,S=B}if(C===g.length)return n(m,S),fe&&hn(m,C),x;if(S===null){for(;C<g.length;C++)S=d(m,g[C],w),S!==null&&(p=i(S,p,C),k===null?x=S:k.sibling=S,k=S);return fe&&hn(m,C),x}for(S=r(m,S);C<g.length;C++)B=h(S,m,C,g[C],w),B!==null&&(e&&B.alternate!==null&&S.delete(B.key===null?C:B.key),p=i(B,p,C),k===null?x=B:k.sibling=B,k=B);return e&&S.forEach(function(I){return t(m,I)}),fe&&hn(m,C),x}function y(m,p,g,w){var x=Sr(g);if(typeof x!="function")throw Error(R(150));if(g=x.call(g),g==null)throw Error(R(151));for(var k=x=null,S=p,C=p=0,B=null,D=g.next();S!==null&&!D.done;C++,D=g.next()){S.index>C?(B=S,S=null):B=S.sibling;var I=f(m,S,D.value,w);if(I===null){S===null&&(S=B);break}e&&S&&I.alternate===null&&t(m,S),p=i(I,p,C),k===null?x=I:k.sibling=I,k=I,S=B}if(D.done)return n(m,S),fe&&hn(m,C),x;if(S===null){for(;!D.done;C++,D=g.next())D=d(m,D.value,w),D!==null&&(p=i(D,p,C),k===null?x=D:k.sibling=D,k=D);return fe&&hn(m,C),x}for(S=r(m,S);!D.done;C++,D=g.next())D=h(S,m,C,D.value,w),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?C:D.key),p=i(D,p,C),k===null?x=D:k.sibling=D,k=D);return e&&S.forEach(function(M){return t(m,M)}),fe&&hn(m,C),x}function E(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Mn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:e:{for(var x=g.key,k=p;k!==null;){if(k.key===x){if(x=g.type,x===Mn){if(k.tag===7){n(m,k.sibling),p=o(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vt&&Wu(x)===k.type){n(m,k.sibling),p=o(k,g.props),p.ref=_r(m,k,g),p.return=m,m=p;break e}n(m,k);break}else t(m,k);k=k.sibling}g.type===Mn?(p=bn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=ni(g.type,g.key,g.props,null,m.mode,w),w.ref=_r(m,p,g),w.return=m,m=w)}return a(m);case Bn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Bl(g,m.mode,w),p.return=m,m=p}return a(m);case Vt:return k=g._init,E(m,p,k(g._payload),w)}if(Nr(g))return v(m,p,g,w);if(Sr(g))return y(m,p,g,w);Ro(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=zl(g,m.mode,w),p.return=m,m=p),a(m)):n(m,p)}return E}var sr=af(!0),sf=af(!1),bi=dn(null),Si=null,Kn=null,ws=null;function xs(){ws=Kn=Si=null}function ks(e){var t=bi.current;de(bi),e._currentValue=t}function ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Si=e,ws=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Si===null)throw Error(R(308));Kn=e,Si.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var vn=null;function bs(e){vn===null?vn=[e]:vn.push(e)}function uf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,r){var o=e.updateQueue;Wt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,s=u.next;u.next=null,a===null?i=s:a.next=s,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;a=0,c=s=u=null,l=i;do{var f=l.lane,h=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(f=t,h=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(h,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(h,d,f):v,f==null)break e;d=ge({},d,f);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(s=c=h,u=d):c=c.next=h,a|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(u=d),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);_n|=a,e.lanes=a,e.memoizedState=d}}function Ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var vo={},Ct=dn(vo),io=dn(vo),lo=dn(vo);function yn(e){if(e===vo)throw Error(R(174));return e}function Es(e,t){switch(se(lo,t),se(io,e),se(Ct,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}de(Ct),se(Ct,t)}function ur(){de(Ct),de(io),de(lo)}function df(e){yn(lo.current);var t=yn(Ct.current),n=ta(t,e.type);t!==n&&(se(io,e),se(Ct,n))}function As(e){io.current===e&&(de(Ct),de(io))}var he=dn(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function $s(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Zo=Ht.ReactCurrentDispatcher,Ll=Ht.ReactCurrentBatchConfig,Cn=0,me=null,Se=null,$e=null,$i=!1,Hr=!1,ao=0,a0=0;function Oe(){throw Error(R(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function _s(e,t,n,r,o,i){if(Cn=i,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?d0:f0,e=n(r,o),Hr){i=0;do{if(Hr=!1,ao=0,25<=i)throw Error(R(301));i+=1,$e=Se=null,t.updateQueue=null,Zo.current=p0,e=n(r,o)}while(Hr)}if(Zo.current=Ci,t=Se!==null&&Se.next!==null,Cn=0,$e=Se=me=null,$i=!1,t)throw Error(R(300));return e}function Ts(){var e=ao!==0;return ao=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?me.memoizedState=$e=e:$e=$e.next=e,$e}function lt(){if(Se===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=$e===null?me.memoizedState:$e.next;if(t!==null)$e=t,Se=e;else{if(e===null)throw Error(R(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},$e===null?me.memoizedState=$e=e:$e=$e.next=e}return $e}function so(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,s=i;do{var c=s.lane;if((Cn&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=d,a=r):u=u.next=d,me.lanes|=c,_n|=c}s=s.next}while(s!==null&&s!==i);u===null?a=r:u.next=l,vt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,me.lanes|=i,_n|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);vt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ff(){}function pf(e,t){var n=me,r=lt(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,Ps(gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,uo(9,mf.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(R(349));Cn&30||hf(n,t,o)}return o}function hf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,r){t.value=n,t.getSnapshot=r,vf(t)&&yf(e)}function gf(e,t,n){return n(function(){vf(t)&&yf(e)})}function vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function yf(e){var t=Mt(e,1);t!==null&&ht(t,e,1,-1)}function Yu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},t.queue=e,e=e.dispatch=c0.bind(null,me,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wf(){return lt().memoizedState}function Jo(e,t,n,r){var o=St();me.flags|=e,o.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(Se!==null){var a=Se.memoizedState;if(i=a.destroy,r!==null&&Cs(r,a.deps)){o.memoizedState=uo(t,n,i,r);return}}me.flags|=e,o.memoizedState=uo(1|t,n,i,r)}function Xu(e,t){return Jo(8390656,8,e,t)}function Ps(e,t){return Yi(2048,8,e,t)}function xf(e,t){return Yi(4,2,e,t)}function kf(e,t){return Yi(4,4,e,t)}function bf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,bf.bind(null,t,e),n)}function js(){}function Ef(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Af(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $f(e,t,n){return Cn&21?(vt(n,t)||(n=Pd(),me.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function s0(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{ae=n,Ll.transition=r}}function Cf(){return lt().memoizedState}function u0(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_f(e))Tf(t,n);else if(n=uf(e,t,n,r),n!==null){var o=Be();ht(n,e,r,o),Pf(n,t,r)}}function c0(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_f(e))Tf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,vt(l,a)){var u=t.interleaved;u===null?(o.next=o,bs(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=uf(e,t,o,r),n!==null&&(o=Be(),ht(n,e,r,o),Pf(n,t,r))}}function _f(e){var t=e.alternate;return e===me||t!==null&&t===me}function Tf(e,t){Hr=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var Ci={readContext:it,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},d0={readContext:it,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,bf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u0.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Yu,useDebugValue:js,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Yu(!1),t=e[0];return e=s0.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=St();if(fe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),_e===null)throw Error(R(349));Cn&30||hf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Xu(gf.bind(null,r,i,e),[e]),r.flags|=2048,uo(9,mf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=_e.identifierPrefix;if(fe){var n=Dt,r=Rt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},f0={readContext:it,useCallback:Ef,useContext:it,useEffect:Ps,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:kf,useMemo:Af,useReducer:Ol,useRef:wf,useState:function(){return Ol(so)},useDebugValue:js,useDeferredValue:function(e){var t=lt();return $f(t,Se.memoizedState,e)},useTransition:function(){var e=Ol(so)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:pf,useId:Cf,unstable_isNewReconciler:!1},p0={readContext:it,useCallback:Ef,useContext:it,useEffect:Ps,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:kf,useMemo:Af,useReducer:Rl,useRef:wf,useState:function(){return Rl(so)},useDebugValue:js,useDeferredValue:function(e){var t=lt();return Se===null?t.memoizedState=e:$f(t,Se.memoizedState,e)},useTransition:function(){var e=Rl(so)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:pf,useId:Cf,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=rn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(ht(t,e,o,r),Xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=rn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(ht(t,e,o,r),Xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=rn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(ht(t,e,r,n),Xo(t,e,r))}};function Zu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!to(n,r)||!to(o,i):!0}function jf(e,t,n){var r=!1,o=an,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=We(t)?An:Ie.current,r=t.contextTypes,i=(r=r!=null)?lr(e,o):an),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ss(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=We(t)?An:Ie.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ba(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xi.enqueueReplaceState(o,o.state,null),Ei(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=Fh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function Nf(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ti||(Ti=!0,Oa=r),Ea(e,t)},n}function Lf(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ea(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new h0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_0.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var m0=Ht.ReactCurrentOwner,Ue=!1;function ze(e,t,n,r){t.child=e===null?sf(t,null,n,r):sr(t,e.child,n,r)}function nc(e,t,n,r,o){n=n.render;var i=t.ref;return rr(t,o),r=_s(e,t,n,r,i,o),n=Ts(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(fe&&n&&gs(t),t.flags|=1,ze(e,t,r,o),t.child)}function rc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Bs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Of(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(a,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(to(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return Aa(e,t,n,r,o)}function Rf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Xn,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Xn,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(Xn,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(Xn,Ye),Ye|=r;return ze(e,t,o,n),t.child}function Df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Aa(e,t,n,r,o){var i=We(n)?An:Ie.current;return i=lr(t,i),rr(t,o),n=_s(e,t,n,r,i,o),r=Ts(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(fe&&r&&gs(t),t.flags|=1,ze(e,t,n,o),t.child)}function oc(e,t,n,r,o){if(We(n)){var i=!0;wi(t)}else i=!1;if(rr(t,o),t.stateNode===null)qo(e,t),jf(t,n,r),Sa(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=it(s):(s=We(n)?An:Ie.current,s=lr(t,s));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&Ju(t,a,r,s),Wt=!1;var f=t.memoizedState;a.state=f,Ei(t,r,a,o),u=t.memoizedState,l!==r||f!==u||Ve.current||Wt?(typeof c=="function"&&(ba(t,n,c,r),u=t.memoizedState),(l=Wt||Zu(t,n,l,r,f,u,s))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cf(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:ct(t.type,l),a.props=s,d=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=it(u):(u=We(n)?An:Ie.current,u=lr(t,u));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||f!==u)&&Ju(t,a,r,u),Wt=!1,f=t.memoizedState,a.state=f,Ei(t,r,a,o);var v=t.memoizedState;l!==d||f!==v||Ve.current||Wt?(typeof h=="function"&&(ba(t,n,h,r),v=t.memoizedState),(s=Wt||Zu(t,n,s,r,f,v,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,i,o)}function $a(e,t,n,r,o,i){Df(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Uu(t,n,!1),Ft(e,t,i);r=t.stateNode,m0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,l,i)):ze(e,t,l,i),t.memoizedState=r.state,o&&Uu(t,n,!0),t.child}function If(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),Es(e,t.containerInfo)}function ic(e,t,n,r,o){return ar(),ys(o),t.flags|=256,ze(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function zf(e,t,n){var r=t.pendingProps,o=he.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(he,o&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=qi(a,r,0,null),e=bn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_a(n),t.memoizedState=Ca,e):Ns(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return g0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=on(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=on(l,i):(i=bn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?_a(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ns(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&ys(r),sr(t,e.child,null,n),e=Ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(R(422))),Do(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qi({mode:"visible",children:r.children},o,0,null),i=bn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sr(t,e.child,null,a),t.child.memoizedState=_a(a),t.memoizedState=Ca,i);if(!(t.mode&1))return Do(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=Dl(i,r,void 0),Do(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ue||l){if(r=_e,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),ht(r,e,o,-1))}return zs(),r=Dl(Error(R(421))),Do(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=T0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=en(o.nextSibling),Ze=t,fe=!0,ft=null,e!==null&&(tt[nt++]=Rt,tt[nt++]=Dt,tt[nt++]=$n,Rt=e.id,Dt=e.overflow,$n=t),t=Ns(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ka(e.return,t,n)}function Il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Il(t,!0,n,null,i);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:If(t),ar();break;case 5:df(t);break;case 1:We(t.type)&&wi(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(bi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?zf(e,t,n):(se(he,he.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Rf(e,t,n)}return Ft(e,t,n)}var Mf,Ta,Ff,Hf;Mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ta=function(){};Ff=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yn(Ct.current);var i=null;switch(n){case"input":o=Zl(e,o),r=Zl(e,r),i=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":o=ea(e,o),r=ea(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}na(n,r);var a;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var l=o[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Kr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(l=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ue("scroll",e),i||l===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return We(t.type)&&yi(),Re(t),null;case 3:return r=t.stateNode,ur(),de(Ve),de(Ie),$s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ia(ft),ft=null))),Ta(e,t),Re(t),null;case 5:As(t);var o=yn(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ff(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Re(t),null}if(e=yn(Ct.current),Oo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[oo]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<Or.length;o++)ue(Or[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":mu(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":vu(r,i),ue("invalid",r)}na(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),o=["children",""+l]):Kr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ao(r),gu(r,i,!0);break;case"textarea":Ao(r),yu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[At]=t,e[oo]=r,Mf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ra(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<Or.length;o++)ue(Or[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":mu(e,r),o=Zl(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":vu(e,r),o=ea(e,r),ue("invalid",e);break;default:o=r}na(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?yd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ue("scroll",e):u!=null&&ns(e,i,u,a))}switch(n){case"input":Ao(e),gu(e,r,!1);break;case"textarea":Ao(e),yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=yn(lo.current),yn(Ct.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Re(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Xe!==null&&t.mode&1&&!(t.flags&128))lf(),ar(),t.flags|=98560,i=!1;else if(i=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[At]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),i=!1}else ft!==null&&(Ia(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ee===0&&(Ee=3):zs())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return ur(),Ta(e,t),e===null&&no(t.stateNode.containerInfo),Re(t),null;case 10:return ks(t.type._context),Re(t),null;case 17:return We(t.type)&&yi(),Re(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return Re(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Tr(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ai(e),a!==null){for(t.flags|=128,Tr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>dr&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!fe)return Re(t),null}else 2*xe()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function w0(e,t){switch(vs(t),t.tag){case 1:return We(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),de(Ve),de(Ie),$s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return As(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return ur(),null;case 10:return ks(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var Io=!1,De=!1,x0=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Pa(e,t,n){try{n()}catch(r){ye(e,t,r)}}var ac=!1;function k0(e,t){if(pa=hi,e=Wd(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,s=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(u=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++s===o&&(l=a),f===i&&++c===r&&(u=a),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},hi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:ct(t.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return v=ac,ac=!1,v}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Pa(t,n,i)}o=o.next}while(o!==r)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[oo],delete t[va],delete t[r0],delete t[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qf(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var Te=null,dt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Vf(e,t,n),n=n.sibling}function Vf(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ui,n)}catch{}switch(n.tag){case 5:De||Yn(n,t);case 6:var r=Te,o=dt;Te=null,Ut(e,t,n),Te=r,dt=o,Te!==null&&(dt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(dt?(e=Te,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),qr(e)):Pl(Te,n.stateNode));break;case 4:r=Te,o=dt,Te=n.stateNode.containerInfo,dt=!0,Ut(e,t,n),Te=r,dt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Pa(n,t,a),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!De&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Ut(e,t,n),De=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new x0),t.forEach(function(r){var o=P0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,dt=!1;break e;case 3:Te=l.stateNode.containerInfo,dt=!0;break e;case 4:Te=l.stateNode.containerInfo,dt=!0;break e}l=l.return}if(Te===null)throw Error(R(160));Vf(i,a,o),Te=null,dt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){ye(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wf(t,e),t=t.sibling}function Wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),bt(e),r&4){try{Ur(3,e,e.return),Zi(3,e)}catch(y){ye(e,e.return,y)}try{Ur(5,e,e.return)}catch(y){ye(e,e.return,y)}}break;case 1:ut(t,e),bt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ut(t,e),bt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{Yr(o,"")}catch(y){ye(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&pd(o,i),ra(l,a);var s=ra(l,i);for(a=0;a<u.length;a+=2){var c=u[a],d=u[a+1];c==="style"?yd(o,d):c==="dangerouslySetInnerHTML"?gd(o,d):c==="children"?Yr(o,d):ns(o,c,d,s)}switch(l){case"input":Jl(o,i);break;case"textarea":hd(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?qn(o,!!i.multiple,h,!1):f!==!!i.multiple&&(i.defaultValue!=null?qn(o,!!i.multiple,i.defaultValue,!0):qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[oo]=i}catch(y){ye(e,e.return,y)}}break;case 6:if(ut(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ye(e,e.return,y)}}break;case 3:if(ut(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(y){ye(e,e.return,y)}break;case 4:ut(t,e),bt(e);break;case 13:ut(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=xe())),r&4&&uc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(De=(s=De)||c,ut(t,e),De=s):ut(t,e),bt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(V=e,c=e.child;c!==null;){for(d=V=c;V!==null;){switch(f=V,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ur(4,f,f.return);break;case 1:Yn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:Yn(f,f.return);break;case 22:if(f.memoizedState!==null){dc(d);continue}}h!==null?(h.return=f,V=h):dc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vd("display",a))}catch(y){ye(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(y){ye(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(t,e),bt(e),r&4&&uc(e);break;case 21:break;default:ut(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qf(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yr(o,""),r.flags&=-33);var i=sc(e);La(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=sc(e);Na(e,l,a);break;default:throw Error(R(161))}}catch(u){ye(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e,t,n){V=e,Gf(e)}function Gf(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var o=V,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Io;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||De;l=Io;var s=De;if(Io=a,(De=u)&&!s)for(V=o;V!==null;)a=V,u=a.child,a.tag===22&&a.memoizedState!==null?fc(o):u!==null?(u.return=a,V=u):fc(o);for(;i!==null;)V=i,Gf(i),i=i.sibling;V=o,Io=l,De=s}cc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,V=i):cc(e)}}function cc(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ku(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ku(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}De||t.flags&512&&ja(t)}catch(f){ye(t,t.return,f)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function dc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function fc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(u){ye(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ye(t,o,u)}}var i=t.return;try{ja(t)}catch(u){ye(t,i,u)}break;case 5:var a=t.return;try{ja(t)}catch(u){ye(t,a,u)}}}catch(u){ye(t,t.return,u)}if(t===e){V=null;break}var l=t.sibling;if(l!==null){l.return=t.return,V=l;break}V=t.return}}var S0=Math.ceil,_i=Ht.ReactCurrentDispatcher,Ls=Ht.ReactCurrentOwner,ot=Ht.ReactCurrentBatchConfig,re=0,_e=null,be=null,je=0,Ye=0,Xn=dn(0),Ee=0,co=null,_n=0,Ji=0,Os=0,Qr=null,He=null,Rs=0,dr=1/0,Nt=null,Ti=!1,Oa=null,nn=null,zo=!1,Xt=null,Pi=0,Vr=0,Ra=null,ei=-1,ti=0;function Be(){return re&6?xe():ei!==-1?ei:ei=xe()}function rn(e){return e.mode&1?re&2&&je!==0?je&-je:l0.transition!==null?(ti===0&&(ti=Pd()),ti):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Id(e.type)),e):1}function ht(e,t,n,r){if(50<Vr)throw Vr=0,Ra=null,Error(R(185));ho(e,n,r),(!(re&2)||e!==_e)&&(e===_e&&(!(re&2)&&(Ji|=n),Ee===4&&Kt(e,je)),Ge(e,r),n===1&&re===0&&!(t.mode&1)&&(dr=xe()+500,Ki&&fn()))}function Ge(e,t){var n=e.callbackNode;lm(e,t);var r=pi(e,e===_e?je:0);if(r===0)n!==null&&ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ku(n),t===1)e.tag===0?i0(pc.bind(null,e)):nf(pc.bind(null,e)),t0(function(){!(re&6)&&fn()}),n=null;else{switch(jd(r)){case 1:n=as;break;case 4:n=_d;break;case 16:n=fi;break;case 536870912:n=Td;break;default:n=fi}n=tp(n,Kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kf(e,t){if(ei=-1,ti=0,re&6)throw Error(R(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=pi(e,e===_e?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var o=re;re|=2;var i=Xf();(_e!==e||je!==t)&&(Nt=null,dr=xe()+500,kn(e,t));do try{$0();break}catch(l){Yf(e,l)}while(!0);xs(),_i.current=i,re=o,be!==null?t=0:(_e=null,je=0,t=Ee)}if(t!==0){if(t===2&&(o=sa(e),o!==0&&(r=o,t=Da(e,o))),t===1)throw n=co,kn(e,0),Kt(e,r),Ge(e,xe()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!E0(o)&&(t=ji(e,r),t===2&&(i=sa(e),i!==0&&(r=i,t=Da(e,i))),t===1))throw n=co,kn(e,0),Kt(e,r),Ge(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:mn(e,He,Nt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Rs+500-xe(),10<t)){if(pi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ga(mn.bind(null,e,He,Nt),t);break}mn(e,He,Nt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-pt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S0(r/1960))-r,10<r){e.timeoutHandle=ga(mn.bind(null,e,He,Nt),r);break}mn(e,He,Nt);break;case 5:mn(e,He,Nt);break;default:throw Error(R(329))}}}return Ge(e,xe()),e.callbackNode===n?Kf.bind(null,e):null}function Da(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=ji(e,t),e!==2&&(t=He,He=n,t!==null&&Ia(t)),e}function Ia(e){He===null?He=e:He.push.apply(He,e)}function E0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Os,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if(re&6)throw Error(R(327));or();var t=pi(e,0);if(!(t&1))return Ge(e,xe()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=sa(e);r!==0&&(t=r,n=Da(e,r))}if(n===1)throw n=co,kn(e,0),Kt(e,t),Ge(e,xe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,He,Nt),Ge(e,xe()),null}function Ds(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(dr=xe()+500,Ki&&fn())}}function Tn(e){Xt!==null&&Xt.tag===0&&!(re&6)&&or();var t=re;re|=1;var n=ot.transition,r=ae;try{if(ot.transition=null,ae=1,e)return e()}finally{ae=r,ot.transition=n,re=t,!(re&6)&&fn()}}function Is(){Ye=Xn.current,de(Xn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yi();break;case 3:ur(),de(Ve),de(Ie),$s();break;case 5:As(r);break;case 4:ur();break;case 13:de(he);break;case 19:de(he);break;case 10:ks(r.type._context);break;case 22:case 23:Is()}n=n.return}if(_e=e,be=e=on(e.current,null),je=Ye=t,Ee=0,co=null,Os=Ji=_n=0,He=Qr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}vn=null}return e}function Yf(e,t){do{var n=be;try{if(xs(),Zo.current=Ci,$i){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$i=!1}if(Cn=0,$e=Se=me=null,Hr=!1,ao=0,Ls.current=null,n===null||n.return===null){Ee=1,co=t,be=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ec(a);if(h!==null){h.flags&=-257,tc(h,a,l,i,t),h.mode&1&&qu(i,s,t),t=h,u=s;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){qu(i,s,t),zs();break e}u=Error(R(426))}}else if(fe&&l.mode&1){var E=ec(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),tc(E,a,l,i,t),ys(cr(u,l));break e}}i=u=cr(u,l),Ee!==4&&(Ee=2),Qr===null?Qr=[i]:Qr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Nf(i,u,t);Gu(i,m);break e;case 1:l=u;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Lf(i,l,t);Gu(i,w);break e}}i=i.return}while(i!==null)}Jf(n)}catch(x){t=x,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Xf(){var e=_i.current;return _i.current=Ci,e===null?Ci:e}function zs(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),_e===null||!(_n&268435455)&&!(Ji&268435455)||Kt(_e,je)}function ji(e,t){var n=re;re|=2;var r=Xf();(_e!==e||je!==t)&&(Nt=null,kn(e,t));do try{A0();break}catch(o){Yf(e,o)}while(!0);if(xs(),re=n,_i.current=r,be!==null)throw Error(R(261));return _e=null,je=0,Ee}function A0(){for(;be!==null;)Zf(be)}function $0(){for(;be!==null&&!Zh();)Zf(be)}function Zf(e){var t=ep(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Jf(e):be=t,Ls.current=null}function Jf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w0(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,be=null;return}}else if(n=y0(n,t,Ye),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ee===0&&(Ee=5)}function mn(e,t,n){var r=ae,o=ot.transition;try{ot.transition=null,ae=1,C0(e,t,n,r)}finally{ot.transition=o,ae=r}return null}function C0(e,t,n,r){do or();while(Xt!==null);if(re&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(am(e,i),e===_e&&(be=_e=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,tp(fi,function(){return or(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var a=ae;ae=1;var l=re;re|=4,Ls.current=null,k0(e,n),Wf(n,e),Gm(ha),hi=!!pa,ha=pa=null,e.current=n,b0(n),Jh(),re=l,ae=a,ot.transition=i}else e.current=n;if(zo&&(zo=!1,Xt=e,Pi=o),i=e.pendingLanes,i===0&&(nn=null),tm(n.stateNode),Ge(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ti)throw Ti=!1,e=Oa,Oa=null,e;return Pi&1&&e.tag!==0&&or(),i=e.pendingLanes,i&1?e===Ra?Vr++:(Vr=0,Ra=e):Vr=0,fn(),null}function or(){if(Xt!==null){var e=jd(Pi),t=ot.transition,n=ae;try{if(ot.transition=null,ae=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Pi=0,re&6)throw Error(R(331));var o=re;for(re|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(V=s;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Ur(8,c,i)}var d=c.child;if(d!==null)d.return=c,V=d;else for(;V!==null;){c=V;var f=c.sibling,h=c.return;if(Uf(c),c===s){V=null;break}if(f!==null){f.return=h,V=f;break}V=h}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ur(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,V=m;break e}V=i.return}}var p=e.current;for(V=p;V!==null;){a=V;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,V=g;else e:for(a=p;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zi(9,l)}}catch(x){ye(l,l.return,x)}if(l===a){V=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,V=w;break e}V=l.return}}if(re=o,fn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ui,e)}catch{}r=!0}return r}finally{ae=n,ot.transition=t}}return!1}function hc(e,t,n){t=cr(n,t),t=Nf(e,t,1),e=tn(e,t,1),t=Be(),e!==null&&(ho(e,1,t),Ge(e,t))}function ye(e,t,n){if(e.tag===3)hc(e,e,n);else for(;t!==null;){if(t.tag===3){hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=cr(n,e),e=Lf(t,e,1),t=tn(t,e,1),e=Be(),t!==null&&(ho(t,1,e),Ge(t,e));break}}t=t.return}}function _0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(je&n)===n&&(Ee===4||Ee===3&&(je&130023424)===je&&500>xe()-Rs?kn(e,0):Os|=n),Ge(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):t=1);var n=Be();e=Mt(e,t),e!==null&&(ho(e,t,n),Ge(e,n))}function T0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function P0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),qf(e,n)}var ep;ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,v0(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,fe&&t.flags&1048576&&rf(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=lr(t,Ie.current);rr(t,n),o=_s(null,t,r,e,o,n);var i=Ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,wi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ss(t),o.updater=Xi,t.stateNode=o,o._reactInternals=t,Sa(t,r,e,n),t=$a(null,t,r,!0,i,n)):(t.tag=0,fe&&i&&gs(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=N0(r),e=ct(r,e),o){case 0:t=Aa(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=nc(null,t,r,e,n);break e;case 14:t=rc(null,t,r,ct(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),oc(e,t,r,o,n);case 3:e:{if(If(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,cf(e,t),Ei(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(R(423)),t),t=ic(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(R(424)),t),t=ic(e,t,r,n,o);break e}else for(Xe=en(t.stateNode.containerInfo.firstChild),Ze=t,fe=!0,ft=null,n=sf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=Ft(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return df(t),e===null&&xa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ma(r,o)?a=null:i!==null&&ma(r,i)&&(t.flags|=32),Df(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&xa(t),null;case 13:return zf(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),nc(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,se(bi,r._currentValue),r._currentValue=a,i!==null)if(vt(i.value,a)){if(i.children===o.children&&!Ve.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=It(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ka(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ka(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,rr(t,n),o=it(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),rc(e,t,r,o,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),qo(e,t),t.tag=1,We(r)?(e=!0,wi(t)):e=!1,rr(t,n),jf(t,r,o),Sa(t,r,o,n),$a(null,t,r,!0,e,n);case 19:return Bf(e,t,n);case 22:return Rf(e,t,n)}throw Error(R(156,t.tag))};function tp(e,t){return Cd(e,t)}function j0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new j0(e,t,n,r)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N0(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===is)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Bs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mn:return bn(n.children,o,i,t);case rs:a=8,o|=8;break;case Gl:return e=rt(12,n,t,o|2),e.elementType=Gl,e.lanes=i,e;case Kl:return e=rt(13,n,t,o),e.elementType=Kl,e.lanes=i,e;case Yl:return e=rt(19,n,t,o),e.elementType=Yl,e.lanes=i,e;case cd:return qi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sd:a=10;break e;case ud:a=9;break e;case os:a=11;break e;case is:a=14;break e;case Vt:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=rt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=rt(22,e,r,t),e.elementType=cd,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ms(e,t,n,r,o,i,a,l,u){return e=new L0(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(i),e}function O0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function np(e){if(!e)return an;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(We(n))return tf(e,n,t)}return t}function rp(e,t,n,r,o,i,a,l,u){return e=Ms(n,r,!0,e,o,i,a,l,u),e.context=np(null),n=e.current,r=Be(),o=rn(n),i=It(r,o),i.callback=t??null,tn(n,i,o),e.current.lanes=o,ho(e,o,r),Ge(e,r),e}function el(e,t,n,r){var o=t.current,i=Be(),a=rn(o);return n=np(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,a),e!==null&&(ht(e,o,a,i),Xo(e,o,a)),a}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function R0(){return null}var op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}tl.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));el(e,t,null,null)};tl.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){el(null,e,null,null)}),t[Bt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&Dd(e)}};function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function D0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=Ni(a);i.call(s)}}var a=rp(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=a,e[Bt]=a.current,no(e.nodeType===8?e.parentNode:e),Tn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var s=Ni(u);l.call(s)}}var u=Ms(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=u,e[Bt]=u.current,no(e.nodeType===8?e.parentNode:e),Tn(function(){el(t,u,n,r)}),u}function rl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=Ni(a);l.call(u)}}el(t,a,e,o)}else a=D0(n,t,e,o,r);return Ni(a)}Nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(ss(t,n|1),Ge(t,xe()),!(re&6)&&(dr=xe()+500,fn()))}break;case 13:Tn(function(){var r=Mt(e,1);if(r!==null){var o=Be();ht(r,e,1,o)}}),Fs(e,1)}};us=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Be();ht(t,e,134217728,n)}Fs(e,134217728)}};Ld=function(e){if(e.tag===13){var t=rn(e),n=Mt(e,t);if(n!==null){var r=Be();ht(n,e,t,r)}Fs(e,t)}};Od=function(){return ae};Rd=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};ia=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gi(r);if(!o)throw Error(R(90));fd(r),Jl(r,o)}}}break;case"textarea":hd(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};kd=Ds;bd=Tn;var I0={usingClientEntryPoint:!1,Events:[go,Qn,Gi,wd,xd,Ds]},Pr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z0={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ad(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Ui=Bo.inject(z0),$t=Bo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Us(t))throw Error(R(200));return O0(e,t,null,n)};qe.createRoot=function(e,t){if(!Us(e))throw Error(R(299));var n=!1,r="",o=op;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ms(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,no(e.nodeType===8?e.parentNode:e),new Hs(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Ad(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Tn(e)};qe.hydrate=function(e,t,n){if(!nl(t))throw Error(R(200));return rl(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Us(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=op;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rp(t,null,e,1,n??null,o,!1,i,a),e[Bt]=t.current,no(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new tl(t)};qe.render=function(e,t,n){if(!nl(t))throw Error(R(200));return rl(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!nl(e))throw Error(R(40));return e._reactRootContainer?(Tn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ds;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return rl(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip)}catch(e){console.error(e)}}ip(),od.exports=qe;var lp=od.exports,vc=lp;Vl.createRoot=vc.createRoot,Vl.hydrateRoot=vc.hydrateRoot;var ap={exports:{}};(function(e,t){(function(n,r){e.exports=r($)})(typeof self<"u"?self:ph,n=>(()=>{var r={7403:(l,u,s)=>{s.d(u,{default:()=>P});var c=s(4087),d=s.n(c);const f=function(T){return new RegExp(/<[a-z][\s\S]*>/i).test(T)},h=function(T,_){return Math.floor(Math.random()*(_-T+1))+T};var v="TYPE_CHARACTER",y="REMOVE_CHARACTER",E="REMOVE_ALL",m="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",g="CALL_FUNCTION",w="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",k="CHANGE_DELAY",S="CHANGE_CURSOR",C="PASTE_STRING",B="HTML_TAG";function D(T){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},D(T)}function I(T,_){var F=Object.keys(T);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(T);_&&(z=z.filter(function(W){return Object.getOwnPropertyDescriptor(T,W).enumerable})),F.push.apply(F,z)}return F}function M(T){for(var _=1;_<arguments.length;_++){var F=arguments[_]!=null?arguments[_]:{};_%2?I(Object(F),!0).forEach(function(z){K(T,z,F[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(F)):I(Object(F)).forEach(function(z){Object.defineProperty(T,z,Object.getOwnPropertyDescriptor(F,z))})}return T}function G(T){return function(_){if(Array.isArray(_))return Z(_)}(T)||function(_){if(typeof Symbol<"u"&&_[Symbol.iterator]!=null||_["@@iterator"]!=null)return Array.from(_)}(T)||function(_,F){if(_){if(typeof _=="string")return Z(_,F);var z=Object.prototype.toString.call(_).slice(8,-1);return z==="Object"&&_.constructor&&(z=_.constructor.name),z==="Map"||z==="Set"?Array.from(_):z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z)?Z(_,F):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Z(T,_){(_==null||_>T.length)&&(_=T.length);for(var F=0,z=new Array(_);F<_;F++)z[F]=T[F];return z}function Y(T,_){for(var F=0;F<_.length;F++){var z=_[F];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(T,le(z.key),z)}}function K(T,_,F){return(_=le(_))in T?Object.defineProperty(T,_,{value:F,enumerable:!0,configurable:!0,writable:!0}):T[_]=F,T}function le(T){var _=function(F,z){if(D(F)!=="object"||F===null)return F;var W=F[Symbol.toPrimitive];if(W!==void 0){var b=W.call(F,"string");if(D(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)}(T);return D(_)==="symbol"?_:String(_)}const P=function(){function T(z,W){var b=this;if(function(N,U){if(!(N instanceof U))throw new TypeError("Cannot call a class as a function")}(this,T),K(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),K(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),K(this,"setupWrapperElement",function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))}),K(this,"start",function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b}),K(this,"pause",function(){return b.state.eventLoopPaused=!0,b}),K(this,"stop",function(){return b.state.eventLoop&&((0,c.cancel)(b.state.eventLoop),b.state.eventLoop=null),b}),K(this,"pauseFor",function(N){return b.addEventToQueue(p,{ms:N}),b}),K(this,"typeOutAllStrings",function(){return typeof b.options.strings=="string"?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach(function(N){b.typeString(N).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)}),b)}),K(this,"typeString",function(N){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(N))return b.typeOutHTMLString(N,U);if(N){var ne=(b.options||{}).stringSplitter,j=typeof ne=="function"?ne(N):N.split("");b.typeCharacters(j,U)}return b}),K(this,"pasteString",function(N){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(N)?b.typeOutHTMLString(N,U,!0):(N&&b.addEventToQueue(C,{character:N,node:U}),b)}),K(this,"typeOutHTMLString",function(N){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ne=arguments.length>2?arguments[2]:void 0,j=function(oe){var pe=document.createElement("div");return pe.innerHTML=oe,pe.childNodes}(N);if(j.length>0)for(var Q=0;Q<j.length;Q++){var X=j[Q],q=X.innerHTML;X&&X.nodeType!==3?(X.innerHTML="",b.addEventToQueue(w,{node:X,parentNode:U}),ne?b.pasteString(q,X):b.typeString(q,X)):X.textContent&&(ne?b.pasteString(X.textContent,U):b.typeString(X.textContent,U))}return b}),K(this,"deleteAll",function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return b.addEventToQueue(E,{speed:N}),b}),K(this,"changeDeleteSpeed",function(N){if(!N)throw new Error("Must provide new delete speed");return b.addEventToQueue(x,{speed:N}),b}),K(this,"changeDelay",function(N){if(!N)throw new Error("Must provide new delay");return b.addEventToQueue(k,{delay:N}),b}),K(this,"changeCursor",function(N){if(!N)throw new Error("Must provide new cursor");return b.addEventToQueue(S,{cursor:N}),b}),K(this,"deleteChars",function(N){if(!N)throw new Error("Must provide amount of characters to delete");for(var U=0;U<N;U++)b.addEventToQueue(y);return b}),K(this,"callFunction",function(N,U){if(!N||typeof N!="function")throw new Error("Callback must be a function");return b.addEventToQueue(g,{cb:N,thisArg:U}),b}),K(this,"typeCharacters",function(N){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N||!Array.isArray(N))throw new Error("Characters must be an array");return N.forEach(function(ne){b.addEventToQueue(v,{character:ne,node:U})}),b}),K(this,"removeCharacters",function(N){if(!N||!Array.isArray(N))throw new Error("Characters must be an array");return N.forEach(function(){b.addEventToQueue(y)}),b}),K(this,"addEventToQueue",function(N,U){var ne=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return b.addEventToStateProperty(N,U,ne,"eventQueue")}),K(this,"addReverseCalledEvent",function(N,U){var ne=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return b.options.loop?b.addEventToStateProperty(N,U,ne,"reverseCalledEvents"):b}),K(this,"addEventToStateProperty",function(N,U){var ne=arguments.length>2&&arguments[2]!==void 0&&arguments[2],j=arguments.length>3?arguments[3]:void 0,Q={eventName:N,eventArgs:U||{}};return b.state[j]=ne?[Q].concat(G(b.state[j])):[].concat(G(b.state[j]),[Q]),b}),K(this,"runEventLoop",function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var N=Date.now(),U=N-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=G(b.state.calledEvents),b.state.calledEvents=[],b.options=M({},b.state.initialOptions)}if(b.state.eventLoop=d()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(N<b.state.pauseUntil)return;b.state.pauseUntil=null}var ne,j=G(b.state.eventQueue),Q=j.shift();if(!(U<=(ne=Q.eventName===m||Q.eventName===y?b.options.deleteSpeed==="natural"?h(40,80):b.options.deleteSpeed:b.options.delay==="natural"?h(120,160):b.options.delay))){var X=Q.eventName,q=Q.eventArgs;switch(b.logInDevMode({currentEvent:Q,state:b.state,delay:ne}),X){case C:case v:var oe=q.character,pe=q.node,ve=document.createTextNode(oe),Ae=ve;b.options.onCreateTextNode&&typeof b.options.onCreateTextNode=="function"&&(Ae=b.options.onCreateTextNode(oe,ve)),Ae&&(pe?pe.appendChild(Ae):b.state.elements.wrapper.appendChild(Ae)),b.state.visibleNodes=[].concat(G(b.state.visibleNodes),[{type:"TEXT_NODE",character:oe,node:Ae}]);break;case y:j.unshift({eventName:m,eventArgs:{removingCharacterNode:!0}});break;case p:var st=Q.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(st);break;case g:var xt=Q.eventArgs,kt=xt.cb,br=xt.thisArg;kt.call(br,{elements:b.state.elements});break;case w:var On=Q.eventArgs,Pt=On.node,Rn=On.parentNode;Rn?Rn.appendChild(Pt):b.state.elements.wrapper.appendChild(Pt),b.state.visibleNodes=[].concat(G(b.state.visibleNodes),[{type:B,node:Pt,parentNode:Rn||b.state.elements.wrapper}]);break;case E:var au=b.state.visibleNodes,fl=q.speed,ko=[];fl&&ko.push({eventName:x,eventArgs:{speed:fl,temp:!0}});for(var su=0,uh=au.length;su<uh;su++)ko.push({eventName:m,eventArgs:{removingCharacterNode:!1}});fl&&ko.push({eventName:x,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),j.unshift.apply(j,ko);break;case m:var ch=Q.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var pl=b.state.visibleNodes.pop(),dh=pl.type,bo=pl.node,fh=pl.character;b.options.onRemoveNode&&typeof b.options.onRemoveNode=="function"&&b.options.onRemoveNode({node:bo,character:fh}),bo&&bo.parentNode.removeChild(bo),dh===B&&ch&&j.unshift({eventName:m,eventArgs:{}})}break;case x:b.options.deleteSpeed=Q.eventArgs.speed;break;case k:b.options.delay=Q.eventArgs.delay;break;case S:b.options.cursor=Q.eventArgs.cursor,b.state.elements.cursor.innerHTML=Q.eventArgs.cursor}b.options.loop&&(Q.eventName===m||Q.eventArgs&&Q.eventArgs.temp||(b.state.calledEvents=[].concat(G(b.state.calledEvents),[Q]))),b.state.eventQueue=j,b.state.lastFrameTime=N}}}),z)if(typeof z=="string"){var ee=document.querySelector(z);if(!ee)throw new Error("Could not find container element");this.state.elements.container=ee}else this.state.elements.container=z;W&&(this.options=M(M({},this.options),W)),this.state.initialOptions=M({},this.options),this.init()}var _,F;return _=T,(F=[{key:"init",value:function(){var z,W;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(E,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(z=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(W=document.createElement("style")).appendChild(document.createTextNode(z)),document.head.appendChild(W),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(z){this.options.devMode&&console.log(z)}}])&&Y(_.prototype,F),Object.defineProperty(_,"prototype",{writable:!1}),T}()},8552:(l,u,s)=>{var c=s(852)(s(5639),"DataView");l.exports=c},1989:(l,u,s)=>{var c=s(1789),d=s(401),f=s(7667),h=s(1327),v=s(1866);function y(E){var m=-1,p=E==null?0:E.length;for(this.clear();++m<p;){var g=E[m];this.set(g[0],g[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,l.exports=y},8407:(l,u,s)=>{var c=s(7040),d=s(4125),f=s(2117),h=s(7518),v=s(4705);function y(E){var m=-1,p=E==null?0:E.length;for(this.clear();++m<p;){var g=E[m];this.set(g[0],g[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,l.exports=y},7071:(l,u,s)=>{var c=s(852)(s(5639),"Map");l.exports=c},3369:(l,u,s)=>{var c=s(4785),d=s(1285),f=s(6e3),h=s(9916),v=s(5265);function y(E){var m=-1,p=E==null?0:E.length;for(this.clear();++m<p;){var g=E[m];this.set(g[0],g[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=v,l.exports=y},3818:(l,u,s)=>{var c=s(852)(s(5639),"Promise");l.exports=c},8525:(l,u,s)=>{var c=s(852)(s(5639),"Set");l.exports=c},8668:(l,u,s)=>{var c=s(3369),d=s(619),f=s(2385);function h(v){var y=-1,E=v==null?0:v.length;for(this.__data__=new c;++y<E;)this.add(v[y])}h.prototype.add=h.prototype.push=d,h.prototype.has=f,l.exports=h},6384:(l,u,s)=>{var c=s(8407),d=s(7465),f=s(3779),h=s(7599),v=s(4758),y=s(4309);function E(m){var p=this.__data__=new c(m);this.size=p.size}E.prototype.clear=d,E.prototype.delete=f,E.prototype.get=h,E.prototype.has=v,E.prototype.set=y,l.exports=E},2705:(l,u,s)=>{var c=s(5639).Symbol;l.exports=c},1149:(l,u,s)=>{var c=s(5639).Uint8Array;l.exports=c},577:(l,u,s)=>{var c=s(852)(s(5639),"WeakMap");l.exports=c},4963:l=>{l.exports=function(u,s){for(var c=-1,d=u==null?0:u.length,f=0,h=[];++c<d;){var v=u[c];s(v,c,u)&&(h[f++]=v)}return h}},4636:(l,u,s)=>{var c=s(2545),d=s(5694),f=s(1469),h=s(4144),v=s(5776),y=s(6719),E=Object.prototype.hasOwnProperty;l.exports=function(m,p){var g=f(m),w=!g&&d(m),x=!g&&!w&&h(m),k=!g&&!w&&!x&&y(m),S=g||w||x||k,C=S?c(m.length,String):[],B=C.length;for(var D in m)!p&&!E.call(m,D)||S&&(D=="length"||x&&(D=="offset"||D=="parent")||k&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||v(D,B))||C.push(D);return C}},2488:l=>{l.exports=function(u,s){for(var c=-1,d=s.length,f=u.length;++c<d;)u[f+c]=s[c];return u}},2908:l=>{l.exports=function(u,s){for(var c=-1,d=u==null?0:u.length;++c<d;)if(s(u[c],c,u))return!0;return!1}},8470:(l,u,s)=>{var c=s(7813);l.exports=function(d,f){for(var h=d.length;h--;)if(c(d[h][0],f))return h;return-1}},8866:(l,u,s)=>{var c=s(2488),d=s(1469);l.exports=function(f,h,v){var y=h(f);return d(f)?y:c(y,v(f))}},4239:(l,u,s)=>{var c=s(2705),d=s(9607),f=s(2333),h=c?c.toStringTag:void 0;l.exports=function(v){return v==null?v===void 0?"[object Undefined]":"[object Null]":h&&h in Object(v)?d(v):f(v)}},9454:(l,u,s)=>{var c=s(4239),d=s(7005);l.exports=function(f){return d(f)&&c(f)=="[object Arguments]"}},939:(l,u,s)=>{var c=s(2492),d=s(7005);l.exports=function f(h,v,y,E,m){return h===v||(h==null||v==null||!d(h)&&!d(v)?h!=h&&v!=v:c(h,v,y,E,f,m))}},2492:(l,u,s)=>{var c=s(6384),d=s(7114),f=s(8351),h=s(6096),v=s(4160),y=s(1469),E=s(4144),m=s(6719),p="[object Arguments]",g="[object Array]",w="[object Object]",x=Object.prototype.hasOwnProperty;l.exports=function(k,S,C,B,D,I){var M=y(k),G=y(S),Z=M?g:v(k),Y=G?g:v(S),K=(Z=Z==p?w:Z)==w,le=(Y=Y==p?w:Y)==w,P=Z==Y;if(P&&E(k)){if(!E(S))return!1;M=!0,K=!1}if(P&&!K)return I||(I=new c),M||m(k)?d(k,S,C,B,D,I):f(k,S,Z,C,B,D,I);if(!(1&C)){var T=K&&x.call(k,"__wrapped__"),_=le&&x.call(S,"__wrapped__");if(T||_){var F=T?k.value():k,z=_?S.value():S;return I||(I=new c),D(F,z,C,B,I)}}return!!P&&(I||(I=new c),h(k,S,C,B,D,I))}},8458:(l,u,s)=>{var c=s(3560),d=s(5346),f=s(3218),h=s(346),v=/^\[object .+?Constructor\]$/,y=Function.prototype,E=Object.prototype,m=y.toString,p=E.hasOwnProperty,g=RegExp("^"+m.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");l.exports=function(w){return!(!f(w)||d(w))&&(c(w)?g:v).test(h(w))}},8749:(l,u,s)=>{var c=s(4239),d=s(1780),f=s(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,l.exports=function(v){return f(v)&&d(v.length)&&!!h[c(v)]}},280:(l,u,s)=>{var c=s(5726),d=s(6916),f=Object.prototype.hasOwnProperty;l.exports=function(h){if(!c(h))return d(h);var v=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&v.push(y);return v}},2545:l=>{l.exports=function(u,s){for(var c=-1,d=Array(u);++c<u;)d[c]=s(c);return d}},1717:l=>{l.exports=function(u){return function(s){return u(s)}}},4757:l=>{l.exports=function(u,s){return u.has(s)}},4429:(l,u,s)=>{var c=s(5639)["__core-js_shared__"];l.exports=c},7114:(l,u,s)=>{var c=s(8668),d=s(2908),f=s(4757);l.exports=function(h,v,y,E,m,p){var g=1&y,w=h.length,x=v.length;if(w!=x&&!(g&&x>w))return!1;var k=p.get(h),S=p.get(v);if(k&&S)return k==v&&S==h;var C=-1,B=!0,D=2&y?new c:void 0;for(p.set(h,v),p.set(v,h);++C<w;){var I=h[C],M=v[C];if(E)var G=g?E(M,I,C,v,h,p):E(I,M,C,h,v,p);if(G!==void 0){if(G)continue;B=!1;break}if(D){if(!d(v,function(Z,Y){if(!f(D,Y)&&(I===Z||m(I,Z,y,E,p)))return D.push(Y)})){B=!1;break}}else if(I!==M&&!m(I,M,y,E,p)){B=!1;break}}return p.delete(h),p.delete(v),B}},8351:(l,u,s)=>{var c=s(2705),d=s(1149),f=s(7813),h=s(7114),v=s(8776),y=s(1814),E=c?c.prototype:void 0,m=E?E.valueOf:void 0;l.exports=function(p,g,w,x,k,S,C){switch(w){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!S(new d(p),new d(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var B=v;case"[object Set]":var D=1&x;if(B||(B=y),p.size!=g.size&&!D)return!1;var I=C.get(p);if(I)return I==g;x|=2,C.set(p,g);var M=h(B(p),B(g),x,k,S,C);return C.delete(p),M;case"[object Symbol]":if(m)return m.call(p)==m.call(g)}return!1}},6096:(l,u,s)=>{var c=s(8234),d=Object.prototype.hasOwnProperty;l.exports=function(f,h,v,y,E,m){var p=1&v,g=c(f),w=g.length;if(w!=c(h).length&&!p)return!1;for(var x=w;x--;){var k=g[x];if(!(p?k in h:d.call(h,k)))return!1}var S=m.get(f),C=m.get(h);if(S&&C)return S==h&&C==f;var B=!0;m.set(f,h),m.set(h,f);for(var D=p;++x<w;){var I=f[k=g[x]],M=h[k];if(y)var G=p?y(M,I,k,h,f,m):y(I,M,k,f,h,m);if(!(G===void 0?I===M||E(I,M,v,y,m):G)){B=!1;break}D||(D=k=="constructor")}if(B&&!D){var Z=f.constructor,Y=h.constructor;Z==Y||!("constructor"in f)||!("constructor"in h)||typeof Z=="function"&&Z instanceof Z&&typeof Y=="function"&&Y instanceof Y||(B=!1)}return m.delete(f),m.delete(h),B}},1957:(l,u,s)=>{var c=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;l.exports=c},8234:(l,u,s)=>{var c=s(8866),d=s(9551),f=s(3674);l.exports=function(h){return c(h,f,d)}},5050:(l,u,s)=>{var c=s(7019);l.exports=function(d,f){var h=d.__data__;return c(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(l,u,s)=>{var c=s(8458),d=s(7801);l.exports=function(f,h){var v=d(f,h);return c(v)?v:void 0}},9607:(l,u,s)=>{var c=s(2705),d=Object.prototype,f=d.hasOwnProperty,h=d.toString,v=c?c.toStringTag:void 0;l.exports=function(y){var E=f.call(y,v),m=y[v];try{y[v]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(E?y[v]=m:delete y[v]),g}},9551:(l,u,s)=>{var c=s(4963),d=s(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,v=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(E){return f.call(y,E)}))}:d;l.exports=v},4160:(l,u,s)=>{var c=s(8552),d=s(7071),f=s(3818),h=s(8525),v=s(577),y=s(4239),E=s(346),m="[object Map]",p="[object Promise]",g="[object Set]",w="[object WeakMap]",x="[object DataView]",k=E(c),S=E(d),C=E(f),B=E(h),D=E(v),I=y;(c&&I(new c(new ArrayBuffer(1)))!=x||d&&I(new d)!=m||f&&I(f.resolve())!=p||h&&I(new h)!=g||v&&I(new v)!=w)&&(I=function(M){var G=y(M),Z=G=="[object Object]"?M.constructor:void 0,Y=Z?E(Z):"";if(Y)switch(Y){case k:return x;case S:return m;case C:return p;case B:return g;case D:return w}return G}),l.exports=I},7801:l=>{l.exports=function(u,s){return u==null?void 0:u[s]}},1789:(l,u,s)=>{var c=s(4536);l.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:l=>{l.exports=function(u){var s=this.has(u)&&delete this.__data__[u];return this.size-=s?1:0,s}},7667:(l,u,s)=>{var c=s(4536),d=Object.prototype.hasOwnProperty;l.exports=function(f){var h=this.__data__;if(c){var v=h[f];return v==="__lodash_hash_undefined__"?void 0:v}return d.call(h,f)?h[f]:void 0}},1327:(l,u,s)=>{var c=s(4536),d=Object.prototype.hasOwnProperty;l.exports=function(f){var h=this.__data__;return c?h[f]!==void 0:d.call(h,f)}},1866:(l,u,s)=>{var c=s(4536);l.exports=function(d,f){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=c&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:l=>{var u=/^(?:0|[1-9]\d*)$/;l.exports=function(s,c){var d=typeof s;return!!(c=c??9007199254740991)&&(d=="number"||d!="symbol"&&u.test(s))&&s>-1&&s%1==0&&s<c}},7019:l=>{l.exports=function(u){var s=typeof u;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?u!=="__proto__":u===null}},5346:(l,u,s)=>{var c,d=s(4429),f=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";l.exports=function(h){return!!f&&f in h}},5726:l=>{var u=Object.prototype;l.exports=function(s){var c=s&&s.constructor;return s===(typeof c=="function"&&c.prototype||u)}},7040:l=>{l.exports=function(){this.__data__=[],this.size=0}},4125:(l,u,s)=>{var c=s(8470),d=Array.prototype.splice;l.exports=function(f){var h=this.__data__,v=c(h,f);return!(v<0||(v==h.length-1?h.pop():d.call(h,v,1),--this.size,0))}},2117:(l,u,s)=>{var c=s(8470);l.exports=function(d){var f=this.__data__,h=c(f,d);return h<0?void 0:f[h][1]}},7518:(l,u,s)=>{var c=s(8470);l.exports=function(d){return c(this.__data__,d)>-1}},4705:(l,u,s)=>{var c=s(8470);l.exports=function(d,f){var h=this.__data__,v=c(h,d);return v<0?(++this.size,h.push([d,f])):h[v][1]=f,this}},4785:(l,u,s)=>{var c=s(1989),d=s(8407),f=s(7071);l.exports=function(){this.size=0,this.__data__={hash:new c,map:new(f||d),string:new c}}},1285:(l,u,s)=>{var c=s(5050);l.exports=function(d){var f=c(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(l,u,s)=>{var c=s(5050);l.exports=function(d){return c(this,d).get(d)}},9916:(l,u,s)=>{var c=s(5050);l.exports=function(d){return c(this,d).has(d)}},5265:(l,u,s)=>{var c=s(5050);l.exports=function(d,f){var h=c(this,d),v=h.size;return h.set(d,f),this.size+=h.size==v?0:1,this}},8776:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(d,f){c[++s]=[f,d]}),c}},4536:(l,u,s)=>{var c=s(852)(Object,"create");l.exports=c},6916:(l,u,s)=>{var c=s(5569)(Object.keys,Object);l.exports=c},1167:(l,u,s)=>{l=s.nmd(l);var c=s(1957),d=u&&!u.nodeType&&u,f=d&&l&&!l.nodeType&&l,h=f&&f.exports===d&&c.process,v=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();l.exports=v},2333:l=>{var u=Object.prototype.toString;l.exports=function(s){return u.call(s)}},5569:l=>{l.exports=function(u,s){return function(c){return u(s(c))}}},5639:(l,u,s)=>{var c=s(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=c||d||Function("return this")();l.exports=f},619:l=>{l.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:l=>{l.exports=function(u){return this.__data__.has(u)}},1814:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(d){c[++s]=d}),c}},7465:(l,u,s)=>{var c=s(8407);l.exports=function(){this.__data__=new c,this.size=0}},3779:l=>{l.exports=function(u){var s=this.__data__,c=s.delete(u);return this.size=s.size,c}},7599:l=>{l.exports=function(u){return this.__data__.get(u)}},4758:l=>{l.exports=function(u){return this.__data__.has(u)}},4309:(l,u,s)=>{var c=s(8407),d=s(7071),f=s(3369);l.exports=function(h,v){var y=this.__data__;if(y instanceof c){var E=y.__data__;if(!d||E.length<199)return E.push([h,v]),this.size=++y.size,this;y=this.__data__=new f(E)}return y.set(h,v),this.size=y.size,this}},346:l=>{var u=Function.prototype.toString;l.exports=function(s){if(s!=null){try{return u.call(s)}catch{}try{return s+""}catch{}}return""}},7813:l=>{l.exports=function(u,s){return u===s||u!=u&&s!=s}},5694:(l,u,s)=>{var c=s(9454),d=s(7005),f=Object.prototype,h=f.hasOwnProperty,v=f.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(E){return d(E)&&h.call(E,"callee")&&!v.call(E,"callee")};l.exports=y},1469:l=>{var u=Array.isArray;l.exports=u},8612:(l,u,s)=>{var c=s(3560),d=s(1780);l.exports=function(f){return f!=null&&d(f.length)&&!c(f)}},4144:(l,u,s)=>{l=s.nmd(l);var c=s(5639),d=s(5062),f=u&&!u.nodeType&&u,h=f&&l&&!l.nodeType&&l,v=h&&h.exports===f?c.Buffer:void 0,y=(v?v.isBuffer:void 0)||d;l.exports=y},8446:(l,u,s)=>{var c=s(939);l.exports=function(d,f){return c(d,f)}},3560:(l,u,s)=>{var c=s(4239),d=s(3218);l.exports=function(f){if(!d(f))return!1;var h=c(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:l=>{l.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:l=>{l.exports=function(u){var s=typeof u;return u!=null&&(s=="object"||s=="function")}},7005:l=>{l.exports=function(u){return u!=null&&typeof u=="object"}},6719:(l,u,s)=>{var c=s(8749),d=s(1717),f=s(1167),h=f&&f.isTypedArray,v=h?d(h):c;l.exports=v},3674:(l,u,s)=>{var c=s(4636),d=s(280),f=s(8612);l.exports=function(h){return f(h)?c(h):d(h)}},479:l=>{l.exports=function(){return[]}},5062:l=>{l.exports=function(){return!1}},75:function(l){(function(){var u,s,c,d,f,h;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(u()-f)/1e6},s=process.hrtime,d=(u=function(){var v;return 1e9*(v=s())[0]+v[1]})(),h=1e9*process.uptime(),f=d-h):Date.now?(l.exports=function(){return Date.now()-c},c=Date.now()):(l.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(l,u,s)=>{for(var c=s(75),d=typeof window>"u"?s.g:window,f=["moz","webkit"],h="AnimationFrame",v=d["request"+h],y=d["cancel"+h]||d["cancelRequest"+h],E=0;!v&&E<f.length;E++)v=d[f[E]+"Request"+h],y=d[f[E]+"Cancel"+h]||d[f[E]+"CancelRequest"+h];if(!v||!y){var m=0,p=0,g=[];v=function(w){if(g.length===0){var x=c(),k=Math.max(0,16.666666666666668-(x-m));m=k+x,setTimeout(function(){var S=g.slice(0);g.length=0;for(var C=0;C<S.length;C++)if(!S[C].cancelled)try{S[C].callback(m)}catch(B){setTimeout(function(){throw B},0)}},Math.round(k))}return g.push({handle:++p,callback:w,cancelled:!1}),p},y=function(w){for(var x=0;x<g.length;x++)g[x].handle===w&&(g[x].cancelled=!0)}}l.exports=function(w){return v.call(d,w)},l.exports.cancel=function(){y.apply(d,arguments)},l.exports.polyfill=function(w){w||(w=d),w.requestAnimationFrame=v,w.cancelAnimationFrame=y}},8156:l=>{l.exports=n}},o={};function i(l){var u=o[l];if(u!==void 0)return u.exports;var s=o[l]={id:l,loaded:!1,exports:{}};return r[l].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return i.d(u,{a:u}),u},i.d=(l,u)=>{for(var s in u)i.o(u,s)&&!i.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:u[s]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),i.nmd=l=>(l.paths=[],l.children||(l.children=[]),l);var a={};return(()=>{i.d(a,{default:()=>g});var l=i(8156),u=i.n(l),s=i(7403),c=i(8446),d=i.n(c);function f(w){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},f(w)}function h(w,x){for(var k=0;k<x.length;k++){var S=x[k];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(w,m(S.key),S)}}function v(w,x){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,S){return k.__proto__=S,k},v(w,x)}function y(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function E(w){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(x){return x.__proto__||Object.getPrototypeOf(x)},E(w)}function m(w){var x=function(k,S){if(f(k)!=="object"||k===null)return k;var C=k[Symbol.toPrimitive];if(C!==void 0){var B=C.call(k,"string");if(f(B)!=="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(k)}(w);return f(x)==="symbol"?x:String(x)}var p=function(w){(function(I,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");I.prototype=Object.create(M&&M.prototype,{constructor:{value:I,writable:!0,configurable:!0}}),Object.defineProperty(I,"prototype",{writable:!1}),M&&v(I,M)})(D,w);var x,k,S,C,B=(S=D,C=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var I,M=E(S);if(C){var G=E(this).constructor;I=Reflect.construct(M,arguments,G)}else I=M.apply(this,arguments);return function(Z,Y){if(Y&&(f(Y)==="object"||typeof Y=="function"))return Y;if(Y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(Z)}(this,I)});function D(){var I,M,G,Z;(function(P,T){if(!(P instanceof T))throw new TypeError("Cannot call a class as a function")})(this,D);for(var Y=arguments.length,K=new Array(Y),le=0;le<Y;le++)K[le]=arguments[le];return M=y(I=B.call.apply(B,[this].concat(K))),Z={instance:null},(G=m(G="state"))in M?Object.defineProperty(M,G,{value:Z,enumerable:!0,configurable:!0,writable:!0}):M[G]=Z,I}return x=D,(k=[{key:"componentDidMount",value:function(){var I=this,M=new s.default(this.typewriter,this.props.options);this.setState({instance:M},function(){var G=I.props.onInit;G&&G(M)})}},{key:"componentDidUpdate",value:function(I){d()(this.props.options,I.options)||this.setState({instance:new s.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var I=this,M=this.props.component;return u().createElement(M,{ref:function(G){return I.typewriter=G},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&h(x.prototype,k),Object.defineProperty(x,"prototype",{writable:!1}),D}(l.Component);p.defaultProps={component:"div"};const g=p})(),a.default})())})(ap);var B0=ap.exports;const M0=Wc(B0);var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qe.apply(this,arguments)};function Li(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ce="-ms-",Wr="-moz-",ie="-webkit-",sp="comm",ol="rule",Qs="decl",F0="@import",up="@keyframes",H0="@layer",cp=Math.abs,Vs=String.fromCharCode,za=Object.assign;function U0(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function dp(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function ri(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function fr(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function fp(e){return e.length}function Rr(e,t){return t.push(e),e}function Q0(e,t){return e.map(t).join("")}function yc(e,t){return e.filter(function(n){return!Lt(n,t)})}var il=1,pr=1,pp=0,at=0,ke=0,kr="";function ll(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:il,column:pr,length:a,return:"",siblings:l}}function Qt(e,t){return za(ll("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=Qt(e.root,{children:[e]});Rr(e,e.siblings)}function V0(){return ke}function W0(){return ke=at>0?Ce(kr,--at):0,pr--,ke===10&&(pr=1,il--),ke}function mt(){return ke=at<pp?Ce(kr,at++):0,pr++,ke===10&&(pr=1,il++),ke}function Sn(){return Ce(kr,at)}function oi(){return at}function al(e,t){return fr(kr,e,t)}function Ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G0(e){return il=pr=1,pp=Et(kr=e),at=0,[]}function K0(e){return kr="",e}function Ml(e){return dp(al(at-1,Ma(e===91?e+2:e===40?e+1:e)))}function Y0(e){for(;(ke=Sn())&&ke<33;)mt();return Ba(e)>2||Ba(ke)>3?"":" "}function X0(e,t){for(;--t&&mt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return al(e,oi()+(t<6&&Sn()==32&&mt()==32))}function Ma(e){for(;mt();)switch(ke){case e:return at;case 34:case 39:e!==34&&e!==39&&Ma(ke);break;case 40:e===41&&Ma(e);break;case 92:mt();break}return at}function Z0(e,t){for(;mt()&&e+ke!==57;)if(e+ke===84&&Sn()===47)break;return"/*"+al(t,at-1)+"*"+Vs(e===47?e:mt())}function J0(e){for(;!Ba(Sn());)mt();return al(e,at)}function q0(e){return K0(ii("",null,null,null,[""],e=G0(e),0,[0],e))}function ii(e,t,n,r,o,i,a,l,u){for(var s=0,c=0,d=a,f=0,h=0,v=0,y=1,E=1,m=1,p=0,g="",w=o,x=i,k=r,S=g;E;)switch(v=p,p=mt()){case 40:if(v!=108&&Ce(S,d-1)==58){ri(S+=J(Ml(p),"&","&\f"),"&\f",cp(s?l[s-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Ml(p);break;case 9:case 10:case 13:case 32:S+=Y0(v);break;case 92:S+=X0(oi()-1,7);continue;case 47:switch(Sn()){case 42:case 47:Rr(eg(Z0(mt(),oi()),t,n,u),u);break;default:S+="/"}break;case 123*y:l[s++]=Et(S)*m;case 125*y:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:m==-1&&(S=J(S,/\f/g,"")),h>0&&Et(S)-d&&Rr(h>32?xc(S+";",r,n,d-1,u):xc(J(S," ","")+";",r,n,d-2,u),u);break;case 59:S+=";";default:if(Rr(k=wc(S,t,n,s,c,o,l,g,w=[],x=[],d,i),i),p===123)if(c===0)ii(S,t,k,k,w,i,d,l,x);else switch(f===99&&Ce(S,3)===110?100:f){case 100:case 108:case 109:case 115:ii(e,k,k,r&&Rr(wc(e,k,k,0,0,o,l,g,o,w=[],d,x),x),o,x,d,l,r?w:x);break;default:ii(S,k,k,k,[""],x,0,l,x)}}s=c=h=0,y=m=1,g=S="",d=a;break;case 58:d=1+Et(S),h=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&W0()==125)continue}switch(S+=Vs(p),p*y){case 38:m=c>0?1:(S+="\f",-1);break;case 44:l[s++]=(Et(S)-1)*m,m=1;break;case 64:Sn()===45&&(S+=Ml(mt())),f=Sn(),c=d=Et(g=S+=J0(oi())),p++;break;case 45:v===45&&Et(S)==2&&(y=0)}}return i}function wc(e,t,n,r,o,i,a,l,u,s,c,d){for(var f=o-1,h=o===0?i:[""],v=fp(h),y=0,E=0,m=0;y<r;++y)for(var p=0,g=fr(e,f+1,f=cp(E=a[y])),w=e;p<v;++p)(w=dp(E>0?h[p]+" "+g:J(g,/&\f/g,h[p])))&&(u[m++]=w);return ll(e,t,n,o===0?ol:l,u,s,c,d)}function eg(e,t,n,r){return ll(e,t,n,sp,Vs(V0()),fr(e,2,-2),0,r)}function xc(e,t,n,r,o){return ll(e,t,n,Qs,fr(e,0,r),fr(e,r+1,-1),r,o)}function hp(e,t,n){switch(U0(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 4789:return Wr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+Wr+e+ce+e+e;case 5936:switch(Ce(e,t+11)){case 114:return ie+e+ce+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+ce+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+ce+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+ce+e+e;case 6165:return ie+e+ce+"flex-"+e+e;case 5187:return ie+e+J(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ie+e+ce+"flex-item-"+J(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":ce+"grid-row-"+J(e,/flex-|-self/g,""))+e;case 4675:return ie+e+ce+"flex-line-pack"+J(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+ce+J(e,"shrink","negative")+e;case 5292:return ie+e+ce+J(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+J(e,"-grow","")+ie+e+ce+J(e,"grow","positive")+e;case 4554:return ie+J(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return ce+"grid-column-align"+fr(e,t)+e;break;case 2592:case 3360:return ce+J(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Lt(r.props,/grid-\w+-end/)})?~ri(e+(n=n[t].value),"span",0)?e:ce+J(e,"-start","")+e+ce+"grid-row-span:"+(~ri(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":ce+J(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:ce+J(J(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Wr+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ri(e,"stretch",0)?hp(J(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return J(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,u,s){return ce+o+":"+i+s+(a?ce+o+"-span:"+(l?u:+u-+i)+s:"")+e});case 4949:if(Ce(e,t+6)===121)return J(e,":",":"+ie)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return J(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(Ce(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+ce+"$2box$3")+e;case 100:return J(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(e,"scroll-","scroll-snap-")+e}return e}function Oi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tg(e,t,n,r){switch(e.type){case H0:if(e.children.length)break;case F0:case Qs:return e.return=e.return||e.value;case sp:return"";case up:return e.return=e.value+"{"+Oi(e.children,r)+"}";case ol:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Oi(e.children,r))?e.return=e.value+"{"+n+"}":""}function ng(e){var t=fp(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function rg(e){return function(t){t.root||(t=t.return)&&e(t)}}function og(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qs:e.return=hp(e.value,e.length,n);return;case up:return Oi([Qt(e,{value:J(e.value,"@","@"+ie)})],r);case ol:if(e.length)return Q0(n=e.props,function(o){switch(Lt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(Qt(e,{props:[J(o,/:(read-\w+)/,":"+Wr+"$1")]})),In(Qt(e,{props:[o]})),za(e,{props:yc(n,r)});break;case"::placeholder":In(Qt(e,{props:[J(o,/:(plac\w+)/,":"+ie+"input-$1")]})),In(Qt(e,{props:[J(o,/:(plac\w+)/,":"+Wr+"$1")]})),In(Qt(e,{props:[J(o,/:(plac\w+)/,ce+"input-$1")]})),In(Qt(e,{props:[o]})),za(e,{props:yc(n,r)});break}return""})}}var ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},hr=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",mp="active",gp="data-styled-version",sl="6.1.12",Ws=`/*!sc*/
`,Ri=typeof window<"u"&&"HTMLElement"in window,lg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),ul=Object.freeze([]),mr=Object.freeze({});function ag(e,t,n){return n===void 0&&(n=mr),e.theme!==n.theme&&e.theme||t||n.theme}var vp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ug=/(^-|-$)/g;function kc(e){return e.replace(sg,"-").replace(ug,"")}var cg=/(a)(d)/gi,Mo=52,bc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fa(e){var t,n="";for(t=Math.abs(e);t>Mo;t=t/Mo|0)n=bc(t%Mo)+n;return(bc(t%Mo)+n).replace(cg,"$1-$2")}var Fl,yp=5381,Zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wp=function(e){return Zn(yp,e)};function dg(e){return Fa(wp(e)>>>0)}function fg(e){return e.displayName||e.name||"Component"}function Hl(e){return typeof e=="string"&&!0}var xp=typeof Symbol=="function"&&Symbol.for,kp=xp?Symbol.for("react.memo"):60115,pg=xp?Symbol.for("react.forward_ref"):60112,hg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gg=((Fl={})[pg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fl[kp]=bp,Fl);function Sc(e){return("type"in(t=e)&&t.type.$$typeof)===kp?bp:"$$typeof"in e?gg[e.$$typeof]:hg;var t}var vg=Object.defineProperty,yg=Object.getOwnPropertyNames,Ec=Object.getOwnPropertySymbols,wg=Object.getOwnPropertyDescriptor,xg=Object.getPrototypeOf,Ac=Object.prototype;function Sp(e,t,n){if(typeof t!="string"){if(Ac){var r=xg(t);r&&r!==Ac&&Sp(e,r,n)}var o=yg(t);Ec&&(o=o.concat(Ec(t)));for(var i=Sc(e),a=Sc(t),l=0;l<o.length;++l){var u=o[l];if(!(u in mg||n&&n[u]||a&&u in a||i&&u in i)){var s=wg(t,u);try{vg(e,u,s)}catch{}}}}return e}function gr(e){return typeof e=="function"}function Gs(e){return typeof e=="object"&&"styledComponentId"in e}function wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $c(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function fo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ha(e,t,n){if(n===void 0&&(n=!1),!n&&!fo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ha(e[r],t[r]);else if(fo(t))for(var r in t)e[r]=Ha(e[r],t[r]);return e}function Ks(e,t){Object.defineProperty(e,"toString",{value:t})}function yo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw yo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(Ws);return n},e}(),li=new Map,Di=new Map,ai=1,Fo=function(e){if(li.has(e))return li.get(e);for(;Di.has(ai);)ai++;var t=ai++;return li.set(e,t),Di.set(t,e),t},bg=function(e,t){ai=t+1,li.set(e,t),Di.set(t,e)},Sg="style[".concat(hr,"][").concat(gp,'="').concat(sl,'"]'),Eg=new RegExp("^".concat(hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ag=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},$g=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ws),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var u=l.match(Eg);if(u){var s=0|parseInt(u[1],10),c=u[2];s!==0&&(bg(c,s),Ag(e,c,u[3]),e.getTag().insertRules(s,o)),o.length=0}else o.push(l)}}},Cc=function(e){for(var t=document.querySelectorAll(Sg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(hr)!==mp&&($g(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Cg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ep=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(hr,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(hr,mp),r.setAttribute(gp,sl);var a=Cg();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},_g=function(){function e(t){this.element=Ep(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw yo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Tg=function(){function e(t){this.element=Ep(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_c=Ri,jg={isServer:!Ri,useCSSOMInjection:!lg},Ap=function(){function e(t,n,r){t===void 0&&(t=mr),n===void 0&&(n={});var o=this;this.options=Qe(Qe({},jg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ri&&_c&&(_c=!1,Cc(this)),Ks(this,function(){return function(i){for(var a=i.getTag(),l=a.length,u="",s=function(d){var f=function(m){return Di.get(m)}(d);if(f===void 0)return"continue";var h=i.names.get(f),v=a.getGroup(d);if(h===void 0||!h.size||v.length===0)return"continue";var y="".concat(hr,".g").concat(d,'[id="').concat(f,'"]'),E="";h!==void 0&&h.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),u+="".concat(v).concat(y,'{content:"').concat(E,'"}').concat(Ws)},c=0;c<l;c++)s(c);return u}(o)})}return e.registerId=function(t){return Fo(t)},e.prototype.rehydrate=function(){!this.server&&Ri&&Cc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Qe(Qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Pg(o):r?new _g(o):new Tg(o)}(this.options),new kg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ng=/&/g,Lg=/^\s*\/\/.*$/gm;function $p(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=$p(n.children,t)),n})}function Og(e){var t,n,r,o=mr,i=o.options,a=i===void 0?mr:i,l=o.plugins,u=l===void 0?ul:l,s=function(f,h,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=u.slice();c.push(function(f){f.type===ol&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Ng,n).replace(r,s))}),a.prefix&&c.push(og),c.push(tg);var d=function(f,h,v,y){h===void 0&&(h=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(Lg,""),m=q0(v||h?"".concat(v," ").concat(h," { ").concat(E," }"):E);a.namespace&&(m=$p(m,a.namespace));var p=[];return Oi(m,ng(c.concat(rg(function(g){return p.push(g)})))),p};return d.hash=u.length?u.reduce(function(f,h){return h.name||yo(15),Zn(f,h.name)},yp).toString():"",d}var Rg=new Ap,Ua=Og(),Cp=A.createContext({shouldForwardProp:void 0,styleSheet:Rg,stylis:Ua});Cp.Consumer;A.createContext(void 0);function Tc(){return $.useContext(Cp)}var Dg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ua);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ks(this,function(){throw yo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ua),this.name+t.hash},e}(),Ig=function(e){return e>="A"&&e<="Z"};function Pc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ig(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _p=function(e){return e==null||e===!1||e===""},Tp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!_p(i)&&(Array.isArray(i)&&i.isCss||gr(i)?r.push("".concat(Pc(o),":"),i,";"):fo(i)?r.push.apply(r,Li(Li(["".concat(o," {")],Tp(i),!1),["}"],!1)):r.push("".concat(Pc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ig||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function En(e,t,n,r){if(_p(e))return[];if(Gs(e))return[".".concat(e.styledComponentId)];if(gr(e)){if(!gr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return En(o,t,n,r)}var i;return e instanceof Dg?n?(e.inject(n,r),[e.getName(r)]):[e]:fo(e)?Tp(e):Array.isArray(e)?Array.prototype.concat.apply(ul,e.map(function(a){return En(a,t,n,r)})):[e.toString()]}function zg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gr(n)&&!Gs(n))return!1}return!0}var Bg=wp(sl),Mg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zg(t),this.componentId=n,this.baseHash=Zn(Bg,n),this.baseStyle=r,Ap.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=wn(o,this.staticRulesId);else{var i=$c(En(this.rules,t,n,r)),a=Fa(Zn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=wn(o,a),this.staticRulesId=a}else{for(var u=Zn(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")s+=d;else if(d){var f=$c(En(d,t,n,r));u=Zn(u,f+c),s+=f}}if(s){var h=Fa(u>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(s,".".concat(h),void 0,this.componentId)),o=wn(o,h)}}return o},e}(),Pp=A.createContext(void 0);Pp.Consumer;var Ul={};function Fg(e,t,n){var r=Gs(e),o=e,i=!Hl(e),a=t.attrs,l=a===void 0?ul:a,u=t.componentId,s=u===void 0?function(w,x){var k=typeof w!="string"?"sc":kc(w);Ul[k]=(Ul[k]||0)+1;var S="".concat(k,"-").concat(dg(sl+k+Ul[k]));return x?"".concat(x,"-").concat(S):S}(t.displayName,t.parentComponentId):u,c=t.displayName,d=c===void 0?function(w){return Hl(w)?"styled.".concat(w):"Styled(".concat(fg(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(kc(t.displayName),"-").concat(t.componentId):t.componentId||s,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;v=function(w,x){return y(w,x)&&E(w,x)}}else v=y}var m=new Mg(n,f,r?o.componentStyle:void 0);function p(w,x){return function(k,S,C){var B=k.attrs,D=k.componentStyle,I=k.defaultProps,M=k.foldedComponentIds,G=k.styledComponentId,Z=k.target,Y=A.useContext(Pp),K=Tc(),le=k.shouldForwardProp||K.shouldForwardProp,P=ag(S,Y,I)||mr,T=function(ee,N,U){for(var ne,j=Qe(Qe({},N),{className:void 0,theme:U}),Q=0;Q<ee.length;Q+=1){var X=gr(ne=ee[Q])?ne(j):ne;for(var q in X)j[q]=q==="className"?wn(j[q],X[q]):q==="style"?Qe(Qe({},j[q]),X[q]):X[q]}return N.className&&(j.className=wn(j.className,N.className)),j}(B,S,P),_=T.as||Z,F={};for(var z in T)T[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&T.theme===P||(z==="forwardedAs"?F.as=T.forwardedAs:le&&!le(z,_)||(F[z]=T[z]));var W=function(ee,N){var U=Tc(),ne=ee.generateAndInjectStyles(N,U.styleSheet,U.stylis);return ne}(D,T),b=wn(M,G);return W&&(b+=" "+W),T.className&&(b+=" "+T.className),F[Hl(_)&&!vp.has(_)?"class":"className"]=b,F.ref=C,$.createElement(_,F)}(g,w,x)}p.displayName=d;var g=A.forwardRef(p);return g.attrs=h,g.componentStyle=m,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=r?wn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=f,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(x){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var C=0,B=k;C<B.length;C++)Ha(x,B[C],!0);return x}({},o.defaultProps,w):w}}),Ks(g,function(){return".".concat(g.styledComponentId)}),i&&Sp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function jc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Nc=function(e){return Object.assign(e,{isCss:!0})};function H(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(gr(e)||fo(e))return Nc(En(jc(ul,Li([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?En(r):Nc(En(jc(r,t)))}function Qa(e,t,n){if(n===void 0&&(n=mr),!t)throw yo(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,H.apply(void 0,Li([o],i,!1)))};return r.attrs=function(o){return Qa(e,t,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Qa(e,t,Qe(Qe({},n),o))},r}var jp=function(e){return Qa(Fg,e)},L=jp;vp.forEach(function(e){L[e]=jp(e)});const Ys="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Xs="inset 2px 2px 3px rgba(0,0,0,0.2)",yt=()=>H`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,wt=({background:e="material",color:t="materialText"}={})=>H`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,wo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>H`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Pn=()=>H`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,zn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Hg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Ys:!1,o?Xs:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),we=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return H`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[zn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[zn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[zn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[zn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Hg({theme:r,topLeftInner:zn[t][n.topLeftInner],bottomRightInner:zn[t][n.bottomRightInner],hasShadow:o})};
  `},vr=()=>H`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Ug=e=>Buffer.from(e).toString("base64"),Qg=typeof btoa<"u"?btoa:Ug,Ho=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Qg(n)})`},Zs=(e="default")=>H`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>wo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${wt()}
    ${e==="flat"?Pn():we({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${wt()}
    ${e==="flat"?Pn():we({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?we({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Ho(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Ho(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Ho(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Ho(t.materialText,0)};
  }
`,Vg=L.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Wg=$.forwardRef(({children:e,underline:t=!0,...n},r)=>A.createElement(Vg,{ref:r,underline:t,...n},e));Wg.displayName="Anchor";const Gg=L.header`
  ${we()};
  ${wt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Kg=$.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>A.createElement(Gg,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Kg.displayName="AppBar";const Ln=()=>{};function xn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Yg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Lc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Yg(t)))}function sn(e){return typeof e=="number"?`${e}px`:e}const Xg=L.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Zg=L.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Dr=$.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>A.createElement(Xg,{noBorder:n,ref:l,size:sn(r),square:o,src:i,...a},i?A.createElement(Zg,{src:i,alt:e}):t));Dr.displayName="Avatar";const Ne={sm:"28px",md:"36px",lg:"44px"},Jg=H`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ne[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ne[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,cl=L.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?H`
          ${Pn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&vr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?H`
          ${wt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&we({style:"buttonThin"})}
          }
          &:active {
            ${!t&&we({style:"buttonThinPressed"})}
          }
          ${e&&we({style:"buttonThinPressed"})}
          ${t&&yt()}
        `:H`
          ${wt()};
          border: none;
          ${t&&yt()}
          ${e?wo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?H`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:H`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${we(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&we({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&vr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Jg}
`,gt=$.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:u=Ln,primary:s=!1,variant:c="default",...d},f)=>A.createElement(cl,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:u,primary:s,ref:f,size:i,square:a,type:r,variant:c,...d},n));gt.displayName="Button";function un({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,u]=$.useState(e),s=$.useCallback(c=>{a||u(c)},[a]);if(a&&typeof t!="function"&&!r){const c=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(c)}return[a?o:l,s]}const Va=L.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ne[e.size]};
  width: ${e=>e.square?Ne[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ne[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&yt()}
`,si=$.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>A.createElement(Va,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},r));si.displayName="MenuListItem";const Np=L.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${we({style:"window"})}
  ${wt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Np.displayName="MenuList";const _t=20,Ii=L.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${_t}px;
  height: ${_t}px;
  opacity: 0;
  z-index: -1;
`,Js=L.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&yt()}

  ${Va} & {
    margin: 0;
    height: 100%;
  }
  ${Va}:hover & {
    ${({$disabled:e,theme:t})=>!e&&H`
        color: ${t.materialTextInvert};
      `};
  }
`,qs=L.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ii}:focus ~ & {
    ${vr}
  }
  ${Ii}:not(:disabled) ~ &:active {
    ${vr}
  }
`,Tt=L.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Xs};`}
  }
`,qg=L.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Zs()}
`,eu=$.forwardRef(({children:e,shadow:t=!0,...n},r)=>A.createElement(Tt,{ref:r,shadow:t,...n},A.createElement(qg,null,e)));eu.displayName="ScrollView";const Lp=H`
  width: ${_t}px;
  height: ${_t}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ev=L(Tt)`
  ${Lp}
  width: ${_t}px;
  height: ${_t}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,tv=L.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Lp}
  width: ${_t-4}px;
  height: ${_t-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,nv=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,rv=L.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>wo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,ov={flat:tv,default:ev},iv=$.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Ln,style:l={},value:u,variant:s="default",...c},d)=>{var f;const[h,v]=un({defaultValue:n,onChange:a,readOnly:(f=c.readOnly)!==null&&f!==void 0?f:r,value:e}),y=$.useCallback(p=>{const g=p.target.checked;v(g),a(p)},[a,v]),E=ov[s];let m=null;return o?m=rv:h&&(m=nv),A.createElement(Js,{$disabled:r,className:t,style:l},A.createElement(Ii,{disabled:r,onChange:r?void 0:y,readOnly:r,type:"checkbox",value:u,checked:h,"data-indeterminate":o,ref:d,...c}),A.createElement(E,{$disabled:r,role:"presentation"},m&&A.createElement(m,{$disabled:r,variant:s})),i&&A.createElement(qs,null,i))});iv.displayName="Checkbox";const zi=L.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${sn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${sn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;zi.displayName="Separator";const lv=L(cl)`
  padding-left: 8px;
`,av=L(zi)`
  height: 21px;
  position: relative;
  top: 0;
`,Op=L.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,sv=L.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?H`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:H`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${Op}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${vr}
    outline-offset: -8px;
  }
`,uv=L.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?H`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:H`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,cv=$.forwardRef(({value:e,defaultValue:t,onChange:n=Ln,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[u,s]=un({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e}),c=d=>{const f=d.target.value;s(f),n(d)};return A.createElement(lv,{disabled:r,as:"div",variant:o,size:"md"},A.createElement(Op,{onChange:c,readOnly:r,disabled:r,value:u??"#008080",type:"color",ref:a,...i}),A.createElement(sv,{$disabled:r,color:u??"#008080",role:"presentation"}),o==="default"&&A.createElement(av,{orientation:"vertical"}),A.createElement(uv,{$disabled:r,variant:o}))});cv.displayName="ColorInput";const dv=L.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>H`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${wo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Oc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],fv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function pv({digit:e=0,pixelSize:t=2,...n}){const r=fv[Number(e)].map((o,i)=>o?`${Oc[i]} active`:Oc[i]);return A.createElement(dv,{pixelSize:t,...n},r.map((o,i)=>A.createElement("span",{className:o,key:i})))}const hv=L.div`
  ${we({style:"status"})}
  display: inline-flex;
  background: #000000;
`,mv={sm:1,md:2,lg:3,xl:4},gv=$.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=$.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return A.createElement(hv,{ref:o,...r},i.map((a,l)=>A.createElement(pv,{digit:a,pixelSize:mv[n],key:l})))});gv.displayName="Counter";const Rp=H`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ne.md};
`,vv=L(Tt).attrs({"data-testid":"variant-default"})`
  ${Rp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,yv=L.div.attrs({"data-testid":"variant-flat"})`
  ${Pn()}
  ${Rp}
  position: relative;
`,Dp=H`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&yt()}
`,wv=L.input`
  ${Dp}
  padding: 0 8px;
`,xv=L.textarea`
  ${Dp}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Zs(e)}
`,Gr=$.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Ln,shadow:o=!0,style:i,variant:a="default",...l},u)=>{const s=a==="flat"?yv:vv,c=$.useMemo(()=>{var d;return l.multiline?A.createElement(xv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:u,variant:a,...l}):A.createElement(wv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:u,type:(d=l.type)!==null&&d!==void 0?d:"text",variant:a,...l})},[t,r,l,u,a]);return A.createElement(s,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},c)});Gr.displayName="TextInput";const kv=L.div`
  display: inline-flex;
  align-items: center;
`,Wa=L(gt)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?H`
          height: calc(50% - 1px);
        `:H`
          height: 50%;
        `}
`,bv=L.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?H`
          height: calc(${Ne.md} - 4px);
        `:H`
          height: ${Ne.md};
          margin-left: 2px;
        `}
`,Rc=L.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?H`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:H`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Wa}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?H`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:H`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ip=$.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:u,value:s,variant:c="default",width:d,...f},h)=>{const[v,y]=un({defaultValue:t,onChange:i,readOnly:a,value:s}),E=$.useCallback(k=>{const S=parseFloat(k.target.value);y(S)},[y]),m=$.useCallback(k=>{const S=xn(parseFloat(((v??0)+k).toFixed(2)),o??null,r??null);y(S),i==null||i(S)},[r,o,i,y,v]),p=$.useCallback(()=>{v!==void 0&&(i==null||i(v))},[i,v]),g=$.useCallback(()=>{m(l)},[m,l]),w=$.useCallback(()=>{m(-l)},[m,l]),x=c==="flat"?"flat":"raised";return A.createElement(kv,{className:e,style:{...u,width:d!==void 0?sn(d):"auto"},...f},A.createElement(Gr,{value:v,variant:c,onChange:E,disabled:n,type:"number",readOnly:a,ref:h,fullWidth:!0,onBlur:p}),A.createElement(bv,{variant:c},A.createElement(Wa,{"data-testid":"increment",variant:x,disabled:n||a,onClick:g},A.createElement(Rc,{invert:!0})),A.createElement(Wa,{"data-testid":"decrement",variant:x,disabled:n||a,onClick:w},A.createElement(Rc,null))))});Ip.displayName="NumberInput";function Sv(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const zp=e=>$.useMemo(()=>Sv(),[e]),Bp=H`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Mp=H`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,tu=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Ev=L.div`
  ${Bp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${tu}:focus & {
    ${Mp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Fp=H`
  height: ${Ne.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?yt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Av=L(Tt)`
  ${Fp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,$v=L.div`
  ${Pn()}
  ${Fp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Cv=L.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Bp}
  cursor: pointer;
  &:disabled {
    ${yt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Hp=L(cl).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?H`
          height: 100%;
          margin-right: 0;
        `:H`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,_v=L.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Hp}:active & {
    margin-top: 2px;
  }
`,Tv=L.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Ys};
  ${({variant:e="default"})=>e==="flat"?H`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:H`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Zs(e)}
`,Pv=L.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ne.md} - 4px);
  line-height: calc(${Ne.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Mp:""}
  user-select: none;
`,jv=[],Up=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=jv,readOnly:a,style:l,value:u,variant:s,width:c})=>{var d;const f=$.useMemo(()=>i.filter(Boolean),[i]),[h,v]=un({defaultValue:t??((d=f==null?void 0:f[0])===null||d===void 0?void 0:d.value),onChange:o,readOnly:a,value:u}),y=!(n||a),E=$.useMemo(()=>({className:e,style:{...l,width:c}}),[e,l,c]),m=$.useMemo(()=>A.createElement(Hp,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:s==="flat"?"flat":"raised"},A.createElement(_v,{"data-testid":"select-icon",$disabled:n})),[n,r,s]),p=$.useMemo(()=>s==="flat"?$v:Av,[s]);return $.useMemo(()=>({isEnabled:y,options:f,value:h,setValue:v,wrapperProps:E,DropdownButton:m,Wrapper:p}),[m,p,y,f,v,h,E])},Nv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Lv=1e3,Ov=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:u,readOnly:s,value:c,selectRef:d,setValue:f,wrapperRef:h})=>{const v=$.useRef(null),y=$.useRef([]),E=$.useRef(0),m=$.useRef(0),p=$.useRef(),g=$.useRef("search"),w=$.useRef(""),x=$.useRef(),[k,S]=un({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:s,value:l,valuePropName:"open"}),C=$.useMemo(()=>{const j=u.findIndex(Q=>Q.value===c);return E.current=xn(j,0,null),u[j]},[u,c]),[B,D]=$.useState(u[0]),I=$.useCallback(j=>{const Q=v.current,X=y.current[j];if(!X||!Q){p.current=j;return}p.current=void 0;const q=Q.clientHeight,oe=Q.scrollTop,pe=Q.scrollTop+q,ve=X.offsetTop,Ae=X.offsetHeight,st=X.offsetTop+X.offsetHeight;ve<oe&&Q.scrollTo(0,ve),st>pe&&Q.scrollTo(0,ve-q+Ae),X.focus({preventScroll:!0})},[v]),M=$.useCallback((j,{scroll:Q}={})=>{var X;const q=u.length-1;let oe;switch(j){case"first":{oe=0;break}case"last":{oe=q;break}case"next":{oe=xn(m.current+1,0,q);break}case"previous":{oe=xn(m.current-1,0,q);break}case"selected":{oe=xn((X=E.current)!==null&&X!==void 0?X:0,0,q);break}default:oe=j}m.current=oe,D(u[oe]),Q&&I(oe)},[m,u,I]),G=$.useCallback(({fromEvent:j})=>{S(!0),M("selected",{scroll:!0}),a==null||a({fromEvent:j})},[M,a,S]),Z=$.useCallback(()=>{g.current="search",w.current="",clearTimeout(x.current)},[]),Y=$.useCallback(({focusSelect:j,fromEvent:Q})=>{var X;n==null||n({fromEvent:Q}),S(!1),D(u[0]),Z(),p.current=void 0,j&&((X=d.current)===null||X===void 0||X.focus())},[Z,n,u,d,S]),K=$.useCallback(({fromEvent:j})=>{k?Y({focusSelect:!1,fromEvent:j}):G({fromEvent:j})},[Y,G,k]),le=$.useCallback((j,{fromEvent:Q})=>{E.current!==j&&(E.current=j,f(u[j].value),t==null||t(u[j],{fromEvent:Q}))},[t,u,f]),P=$.useCallback(({focusSelect:j,fromEvent:Q})=>{le(m.current,{fromEvent:Q}),Y({focusSelect:j,fromEvent:Q})},[Y,le]),T=$.useCallback((j,{fromEvent:Q,select:X})=>{var q;switch(g.current==="cycleFirstLetter"&&j!==w.current&&(g.current="search"),j===w.current?g.current="cycleFirstLetter":w.current+=j,g.current){case"search":{let oe=u.findIndex(pe=>{var ve;return((ve=pe.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(w.current))===0});oe<0&&(oe=u.findIndex(pe=>{var ve;return((ve=pe.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(j))===0}),w.current=j),oe>=0&&(X?le(oe,{fromEvent:Q}):M(oe,{scroll:!0}));break}case"cycleFirstLetter":{const oe=X?(q=E.current)!==null&&q!==void 0?q:-1:m.current;let pe=u.findIndex((ve,Ae)=>{var st;return Ae>oe&&((st=ve.label)===null||st===void 0?void 0:st.toLocaleUpperCase().indexOf(j))===0});pe<0&&(pe=u.findIndex(ve=>{var Ae;return((Ae=ve.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(j))===0})),pe>=0&&(X?le(pe,{fromEvent:Q}):M(pe,{scroll:!0}));break}}clearTimeout(x.current),x.current=setTimeout(()=>{g.current==="search"&&(w.current="")},Lv)},[M,u,le]),_=$.useCallback(j=>{var Q;j.button===0&&(j.preventDefault(),(Q=d.current)===null||Q===void 0||Q.focus(),K({fromEvent:j}),i==null||i(j))},[i,d,K]),F=$.useCallback(j=>{P({focusSelect:!0,fromEvent:j})},[P]),z=$.useCallback(j=>{const{altKey:Q,code:X,ctrlKey:q,metaKey:oe,shiftKey:pe}=j,{ARROW_DOWN:ve,ARROW_UP:Ae,END:st,ENTER:xt,ESC:kt,HOME:br,SPACE:On,TAB:Pt}=Nv,Rn=Q||q||oe||pe;if(!(X===Pt&&(Q||q||oe)||X!==Pt&&Rn))switch(X){case ve:{if(j.preventDefault(),!k){G({fromEvent:j});return}M("next",{scroll:!0});break}case Ae:{if(j.preventDefault(),!k){G({fromEvent:j});return}M("previous",{scroll:!0});break}case st:{if(j.preventDefault(),!k){G({fromEvent:j});return}M("last",{scroll:!0});break}case xt:{if(!k)return;j.preventDefault(),P({focusSelect:!0,fromEvent:j});break}case kt:{if(!k)return;j.preventDefault(),Y({focusSelect:!0,fromEvent:j});break}case br:{if(j.preventDefault(),!k){G({fromEvent:j});return}M("first",{scroll:!0});break}case On:{j.preventDefault(),k?P({focusSelect:!0,fromEvent:j}):G({fromEvent:j});break}case Pt:{if(!k)return;pe||j.preventDefault(),P({focusSelect:!pe,fromEvent:j});break}default:!Rn&&X.match(/^Key/)&&(j.preventDefault(),j.stopPropagation(),T(X.replace(/^Key/,""),{select:!k,fromEvent:j}))}},[M,Y,k,G,T,P]),W=$.useCallback(j=>{z(j),o==null||o(j)},[z,o]),b=$.useCallback(j=>{M(j)},[M]),ee=$.useCallback(j=>{k||(Z(),e==null||e(j))},[Z,e,k]),N=$.useCallback(j=>{Z(),r==null||r(j)},[Z,r]),U=$.useCallback(j=>{v.current=j,p.current!==void 0&&I(p.current)},[I]),ne=$.useCallback((j,Q)=>{y.current[Q]=j,p.current===Q&&I(p.current)},[I]);return $.useEffect(()=>{if(!k)return()=>{};const j=Q=>{var X;const q=Q.target;!((X=h.current)===null||X===void 0)&&X.contains(q)||(Q.preventDefault(),Y({focusSelect:!1,fromEvent:Q}))};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[Y,k,h]),$.useMemo(()=>({activeOption:B,handleActivateOptionIndex:b,handleBlur:ee,handleButtonKeyDown:W,handleDropdownKeyDown:z,handleFocus:N,handleMouseDown:_,handleOptionClick:F,handleSetDropdownRef:U,handleSetOptionRef:ne,open:k,selectedOption:C}),[B,b,ee,W,N,z,_,F,U,ne,k,C])},Rv=$.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:u,width:s,...c},d)=>{const{isEnabled:f,options:h,setValue:v,value:y,DropdownButton:E,Wrapper:m}=Up({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:u}),p=$.useCallback(g=>{const w=h.find(x=>x.value===g.target.value);w&&(v(w.value),r==null||r(w,{fromEvent:g}))},[r,h,v]);return A.createElement(m,{className:e,style:{...a,width:s}},A.createElement(tu,null,A.createElement(Cv,{...c,disabled:n,onChange:f?p:Ln,ref:d,value:y},h.map((g,w)=>{var x;return A.createElement("option",{key:`${g.value}-${w}`,value:g.value},(x=g.label)!==null&&x!==void 0?x:g.value)})),E))});Rv.displayName="SelectNative";function Dv({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=$.useCallback(()=>{e(n)},[e,n]),u=$.useCallback(c=>{a(c,n)},[n,a]),s=zp();return A.createElement(Pv,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:s,onClick:r,onMouseEnter:l,ref:u,role:"option",tabIndex:0},o.label)}function Iv({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:u,name:s,onBlur:c,onChange:d,onClose:f,onFocus:h,onKeyDown:v,onMouseDown:y,onOpen:E,open:m,options:p,readOnly:g,shadow:w=!0,style:x,variant:k="default",value:S,width:C="auto",...B},D){const{isEnabled:I,options:M,setValue:G,value:Z,wrapperProps:Y,DropdownButton:K,Wrapper:le}=Up({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:p,style:x,readOnly:g,value:S,variant:k,width:C}),P=$.useRef(null),T=$.useRef(null),_=$.useRef(null),{activeOption:F,handleActivateOptionIndex:z,handleBlur:W,handleButtonKeyDown:b,handleDropdownKeyDown:ee,handleFocus:N,handleMouseDown:U,handleOptionClick:ne,handleSetDropdownRef:j,handleSetOptionRef:Q,open:X,selectedOption:q}=Ov({onBlur:c,onChange:d,onClose:f,onFocus:h,onKeyDown:v,onMouseDown:y,onOpen:E,open:m,options:M,value:Z,selectRef:T,setValue:G,wrapperRef:_});$.useImperativeHandle(D,()=>({focus:xt=>{var kt;(kt=T.current)===null||kt===void 0||kt.focus(xt)},node:P.current,value:String(Z)}),[Z]);const oe=$.useMemo(()=>q?typeof i=="function"?i(q):q.label:"",[i,q]),pe=I?1:void 0,ve=$.useMemo(()=>u?{overflow:"auto",maxHeight:u}:void 0,[u]),Ae=zp(),st=$.useMemo(()=>M.map((xt,kt)=>{const br=`${Z}-${kt}`,On=xt===F,Pt=xt===q;return A.createElement(Dv,{activateOptionIndex:z,active:On,index:kt,key:br,onClick:ne,option:xt,selected:Pt,setRef:Q})}),[F,z,ne,Q,M,q,Z]);return A.createElement(le,{...Y,$disabled:o,ref:_,shadow:w,style:{...x,width:C}},A.createElement("input",{name:s,ref:P,type:"hidden",value:String(Z),...a}),A.createElement(tu,{"aria-disabled":o,"aria-expanded":X,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??l,"aria-owns":I&&X?Ae:void 0,onBlur:W,onFocus:N,onKeyDown:b,onMouseDown:I?U:y,ref:T,role:"button",tabIndex:pe,...B},A.createElement(Ev,null,oe),K),I&&X&&A.createElement(Tv,{id:Ae,onKeyDown:ee,ref:j,role:"listbox",style:ve,tabIndex:0,variant:k},st))}const Qp=$.forwardRef(Iv);Qp.displayName="Select";const zv=L.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Bi=$.forwardRef(function({children:t,noPadding:n=!1,...r},o){return A.createElement(zv,{noPadding:n,ref:o,...r},t)});Bi.displayName="Toolbar";const Bv=L.div`
  padding: 16px;
`,nu=$.forwardRef(function({children:t,...n},r){return A.createElement(Bv,{ref:r,...n},t)});nu.displayName="WindowContent";const Mv=L.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?H`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:H`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${cl} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ru=$.forwardRef(function({active:t=!0,children:n,...r},o){return A.createElement(Mv,{active:t,ref:o,...r},n)});ru.displayName="WindowHeader";const Fv=L.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${we({style:"window"})}
  ${wt()}
`,Hv=L.span`
  ${({theme:e})=>H`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,ou=$.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>A.createElement(Fv,{ref:i,shadow:r,...o},e,t&&A.createElement(Hv,{"data-testid":"resizeHandle",ref:n})));ou.displayName="Window";const Uv=L(eu)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Qv=L.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Vv=L.div`
  display: flex;
  flex-wrap: wrap;
`,jt=L.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Wv=L.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Gv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Kv(e,t){return new Date(e,t+1,0).getDate()}function Yv(e,t,n){return new Date(e,t,n).getDay()}function Xv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Zv=$.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=$.useState(()=>Xv(t)),{year:u,month:s,day:c}=a,d=$.useCallback(({value:E})=>{l(m=>({...m,month:E}))},[]),f=$.useCallback(E=>{l(m=>({...m,year:E}))},[]),h=$.useCallback(E=>{l(m=>({...m,day:E}))},[]),v=$.useCallback(()=>{const E=[a.year,a.month+1,a.day].map(m=>String(m).padStart(2,"0")).join("-");n==null||n(E)},[a.day,a.month,a.year,n]),y=$.useMemo(()=>{const E=Array.from({length:42}),m=Yv(u,s,1);let p=c;const g=Kv(u,s);return p=p<g?p:g,E.forEach((w,x)=>{if(x>=m&&x<g+m){const k=x-m+1;E[x]=A.createElement(jt,{key:x,onClick:()=>{h(k)}},A.createElement(Wv,{active:k===p},k))}else E[x]=A.createElement(jt,{key:x})}),E},[c,h,s,u]);return A.createElement(ou,{className:e,ref:i,shadow:o,style:{margin:20}},A.createElement(ru,null,A.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),A.createElement(nu,null,A.createElement(Bi,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(Qp,{options:Gv,value:s,onChange:d,width:128,menuMaxHeight:200}),A.createElement(Ip,{value:u,onChange:f,width:100})),A.createElement(Uv,null,A.createElement(Qv,null,A.createElement(jt,null,"S"),A.createElement(jt,null,"M"),A.createElement(jt,null,"T"),A.createElement(jt,null,"W"),A.createElement(jt,null,"T"),A.createElement(jt,null,"F"),A.createElement(jt,null,"S")),A.createElement(Vv,null,y)),A.createElement(Bi,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(gt,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),A.createElement(gt,{fullWidth:!0,onClick:n?v:void 0,disabled:!n},"OK"))))});Zv.displayName="DatePicker";const Jv=e=>{switch(e){case"status":case"well":return H`
        ${we({style:"status"})}
      `;case"window":case"outside":return H`
        ${we({style:"window"})}
      `;case"field":return H`
        ${we({style:"field"})}
      `;default:return H`
        ${we()}
      `}},qv=L.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Jv(e)}
  ${({variant:e})=>wt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,e1=$.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>A.createElement(qv,{ref:o,shadow:t,variant:n,...r},e));e1.displayName="Frame";const t1=L.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&H`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&yt()}
`,n1=L.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,r1=$.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>A.createElement(t1,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&A.createElement(n1,{variant:n},e),r));r1.displayName="GroupBox";const o1=L.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${sn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;o1.displayName="Handle";const i1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",l1=L.div`
  display: inline-block;
  height: ${({size:e})=>sn(e)};
  width: ${({size:e})=>sn(e)};
`,a1=L.span`
  display: block;
  background: ${i1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ga=$.forwardRef(({size:e=30,...t},n)=>A.createElement(l1,{size:e,ref:n,...t},A.createElement(a1,null)));Ga.displayName="Hourglass";const s1=L.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,u1=L.div`
  position: relative;
`,c1=L.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,d1=L(Tt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,f1=L.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Vp=$.forwardRef(({backgroundStyles:e,children:t,...n},r)=>A.createElement(s1,{ref:r,...n},A.createElement(u1,null,A.createElement(c1,null,A.createElement(d1,{style:e},t)),A.createElement(f1,null))));Vp.displayName="Monitor";const p1=L.div`
  display: inline-block;
  height: ${Ne.md};
  width: 100%;
`,h1=L(Tt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Wp=H`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,m1=L.div`
  position: relative;
  top: 4px;
  ${Wp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,g1=L.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Wp}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,v1=L.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Gp=17,y1=L.span`
  display: inline-block;
  width: ${Gp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,w1=$.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=$.useRef(null),[u,s]=$.useState([]),c=$.useCallback(()=>{if(!l.current||n===void 0)return;const d=l.current.getBoundingClientRect().width,f=Math.round(n/100*d/Gp);s(Array.from({length:f}))},[n]);return $.useEffect(()=>(c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[c]),A.createElement(p1,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},A.createElement(h1,{variant:r,shadow:t},r==="default"?A.createElement(A.Fragment,null,A.createElement(m1,{"data-testid":"defaultProgress1"},a),A.createElement(g1,{"data-testid":"defaultProgress2",value:n},a)):A.createElement(v1,{ref:l,"data-testid":"tileProgress"},u.map((d,f)=>A.createElement(y1,{key:f})))))});w1.displayName="ProgressBar";const Kp=H`
  width: ${_t}px;
  height: ${_t}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,x1=L(Tt)`
  ${Kp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,k1=L.div`
  ${Pn()}
  ${Kp}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,b1=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,S1={flat:k1,default:x1},E1=$.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},u)=>{const s=S1[a];return A.createElement(Js,{$disabled:n,className:t,style:i},A.createElement(s,{$disabled:n,role:"presentation"},e&&A.createElement(b1,{$disabled:n,variant:a})),A.createElement(Ii,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:u,...l}),r&&A.createElement(qs,null,r))});E1.displayName="Radio";const A1=typeof window<"u"?$.useLayoutEffect:$.useEffect;function pn(e){const t=$.useRef(e);return A1(()=>{t.current=e}),$.useCallback((...n)=>(0,t.current)(...n),[])}function Dc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ic(e,t){return $.useMemo(()=>e==null&&t==null?null:n=>{Dc(e,n),Dc(t,n)},[e,t])}let dl=!0,Ka=!1,zc;const $1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function C1(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&$1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function _1(e){e.metaKey||e.altKey||e.ctrlKey||(dl=!0)}function Ql(){dl=!1}function T1(){this.visibilityState==="hidden"&&Ka&&(dl=!0)}function P1(e){e.addEventListener("keydown",_1,!0),e.addEventListener("mousedown",Ql,!0),e.addEventListener("pointerdown",Ql,!0),e.addEventListener("touchstart",Ql,!0),e.addEventListener("visibilitychange",T1,!0)}function j1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return dl||C1(t)}function N1(){Ka=!0,window.clearTimeout(zc),zc=window.setTimeout(()=>{Ka=!1},100)}function L1(){const e=$.useCallback(t=>{const n=lp.findDOMNode(t);n!=null&&P1(n.ownerDocument)},[]);return{isFocusVisible:j1,onBlurVisible:N1,ref:e}}function O1(e,t,n){return(n-t)*e+t}function Uo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Qo(e){return e&&e.ownerDocument||document}function R1(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r??-1}const D1=L.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?H`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:H`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Yp=()=>H`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?H`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:H`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,I1=L(Tt)`
  ${Yp()}
`,z1=L(Tt)`
  ${Yp()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,B1=L.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?H`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:H`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?H`
          ${Pn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:H`
          ${wt()}
          ${we()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&wo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Jn=6,M1=L.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?H`
          right: ${-Jn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Jn}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:H`
          bottom: ${-Jn}px;
          height: ${Jn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&H`
      ${yt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,F1=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?H`
          transform: translate(${Jn+2}px, ${Jn+1}px);
        `:H`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,H1=$.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:u,orientation:s="horizontal",size:c="100%",step:d=1,value:f,variant:h="default",...v},y)=>{const E=h==="flat"?z1:I1,m=s==="vertical",[p=o,g]=un({defaultValue:e,onChange:a??l,value:f}),{isFocusVisible:w,onBlurVisible:x,ref:k}=L1(),[S,C]=$.useState(!1),B=$.useRef(),D=$.useRef(null),I=Ic(k,B),M=Ic(y,I),G=pn(W=>{w(W)&&C(!0)}),Z=pn(()=>{S!==!1&&(C(!1),x())}),Y=$.useRef(),K=$.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((W,b)=>({label:void 0,value:o+d*b})):Array.isArray(n)?n:[],[n,r,o,d]),le=pn(W=>{const b=(r-o)/10,ee=K.map(ne=>ne.value),N=ee.indexOf(p);let U=0;switch(W.key){case"Home":U=o;break;case"End":U=r;break;case"PageUp":d&&(U=p+b);break;case"PageDown":d&&(U=p-b);break;case"ArrowRight":case"ArrowUp":d?U=p+d:U=ee[N+1]||ee[ee.length-1];break;case"ArrowLeft":case"ArrowDown":d?U=p-d:U=ee[N-1]||ee[0];break;default:return}W.preventDefault(),d&&(U=Lc(U,d,o)),U=xn(U,o,r),g(U),C(!0),a==null||a(U),l==null||l(U)}),P=$.useCallback(W=>{if(!B.current)return 0;const b=B.current.getBoundingClientRect();let ee;m?ee=(b.bottom-W.y)/b.height:ee=(W.x-b.left)/b.width;let N;if(N=O1(ee,o,r),d)N=Lc(N,d,o);else{const U=K.map(j=>j.value),ne=R1(U,N);N=U[ne]}return N=xn(N,o,r),N},[K,r,o,d,m]),T=pn(W=>{var b;const ee=Uo(W,Y.current);if(!ee)return;const N=P(ee);(b=D.current)===null||b===void 0||b.focus(),g(N),C(!0),a==null||a(N)}),_=pn(W=>{const b=Uo(W,Y.current);if(!b)return;const ee=P(b);l==null||l(ee),Y.current=void 0;const N=Qo(B.current);N.removeEventListener("mousemove",T),N.removeEventListener("mouseup",_),N.removeEventListener("touchmove",T),N.removeEventListener("touchend",_)}),F=pn(W=>{var b;u==null||u(W),W.preventDefault(),(b=D.current)===null||b===void 0||b.focus(),C(!0);const ee=Uo(W,Y.current);if(ee){const U=P(ee);g(U),a==null||a(U)}const N=Qo(B.current);N.addEventListener("mousemove",T),N.addEventListener("mouseup",_)}),z=pn(W=>{var b;W.preventDefault();const ee=W.changedTouches[0];ee!=null&&(Y.current=ee.identifier),(b=D.current)===null||b===void 0||b.focus(),C(!0);const N=Uo(W,Y.current);if(N){const ne=P(N);g(ne),a==null||a(ne)}const U=Qo(B.current);U.addEventListener("touchmove",T),U.addEventListener("touchend",_)});return $.useEffect(()=>{const{current:W}=B;W==null||W.addEventListener("touchstart",z);const b=Qo(W);return()=>{W==null||W.removeEventListener("touchstart",z),b.removeEventListener("mousemove",T),b.removeEventListener("mouseup",_),b.removeEventListener("touchmove",T),b.removeEventListener("touchend",_)}},[_,T,z]),A.createElement(D1,{$disabled:t,hasMarks:!!K.length,isFocused:S,onMouseDown:F,orientation:s,ref:M,size:sn(c),...v},A.createElement("input",{disabled:t,name:i,type:"hidden",value:p??0}),K&&K.map(W=>A.createElement(M1,{$disabled:t,"data-testid":"tick",key:W.value/(r-o)*100,orientation:s,style:{[m?"bottom":"left"]:`${(W.value-o)/(r-o)*100}%`}},W.label&&A.createElement(F1,{"aria-hidden":!0,"data-testid":"mark",orientation:s},W.label))),A.createElement(E,{orientation:s,variant:h}),A.createElement(B1,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":s,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:Z,onFocus:G,onKeyDown:le,orientation:s,ref:D,role:"slider",style:{[m?"bottom":"left"]:`${(m?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:h}))});H1.displayName="Slider";const U1=L.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Xs};
  overflow-y: auto;
`,Q1=$.forwardRef(function({children:t,...n},r){return A.createElement(U1,{ref:r,...n},t)});Q1.displayName="TableBody";const V1=L.td`
  padding: 0 8px;
`,W1=$.forwardRef(function({children:t,...n},r){return A.createElement(V1,{ref:r,...n},t)});W1.displayName="TableDataCell";const G1=L.thead`
  display: table-header-group;
`,K1=$.forwardRef(function({children:t,...n},r){return A.createElement(G1,{ref:r,...n},t)});K1.displayName="TableHead";const Y1=L.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${we()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&H`
      &:active {
        &:before {
          ${we({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&yt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&yt()}
  }
`,X1=$.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Ln,sort:i,...a},l){const u=i==="asc"?"ascending":i==="desc"?"descending":void 0;return A.createElement(Y1,{$disabled:t,"aria-disabled":t,"aria-sort":u,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a},A.createElement("div",null,n))});X1.displayName="TableHeadCell";const Z1=L.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ne.md} - 2px);
  line-height: calc(${Ne.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,J1=$.forwardRef(function({children:t,...n},r){return A.createElement(Z1,{ref:r,...n},t)});J1.displayName="TableRow";const q1=L.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,ey=L(Tt)`
  &:before {
    box-shadow: none;
  }
`,ty=$.forwardRef(({children:e,...t},n)=>A.createElement(ey,null,A.createElement(q1,{ref:n,...t},e)));ty.displayName="Table";const ny=L.button`
  ${wt()}
  ${we()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ne.md};
  line-height: ${Ne.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${vr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ne.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,ry=$.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>A.createElement(ny,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o},r));ry.displayName="Tab";const oy=L.div`
  ${wt()}
  ${we()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,iy=$.forwardRef(({children:e,...t},n)=>A.createElement(oy,{ref:n,...t},e));iy.displayName="TabBody";const ly=L.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,ay=L.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function sy(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const uy=$.forwardRef(({value:e,onChange:t=Ln,children:n,rows:r=1,...o},i)=>{const a=$.useMemo(()=>{var l;const u=(l=A.Children.map(n,d=>{if(!A.isValidElement(d))return null;const f={selected:d.props.value===e,onClick:t};return A.cloneElement(d,f)}))!==null&&l!==void 0?l:[],s=sy(u,r).map((d,f)=>({key:f,tabs:d})),c=s.findIndex(d=>d.tabs.some(f=>f.props.selected));return s.push(s.splice(c,1)[0]),s},[n,t,r,e]);return A.createElement(ly,{...o,isMultiRow:r>1,role:"tablist",ref:i},a.map(l=>A.createElement(ay,{key:l.key},l.tabs)))});uy.displayName="Tabs";const cy=["blur","focus"],dy=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Bc(e){return"nativeEvent"in e&&cy.includes(e.type)}function Mc(e){return"nativeEvent"in e&&dy.includes(e.type)}const fy={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},py=L.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Ys};
  text-align: center;
  font-size: 1rem;
  ${e=>fy[e.position]}
`,hy=L.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,my=$.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:u,onMouseEnter:s,onMouseLeave:c,onOpen:d,style:f,text:h,position:v="top",...y},E)=>{const[m,p]=$.useState(!1),[g,w]=$.useState(),[x,k]=$.useState(),S=!n,C=!r,B=P=>{window.clearTimeout(g),window.clearTimeout(x);const T=window.setTimeout(()=>{p(!0),d==null||d(P)},o);w(T)},D=P=>{P.persist(),Bc(P)?u==null||u(P):Mc(P)&&(s==null||s(P)),B(P)},I=P=>{window.clearTimeout(g),window.clearTimeout(x);const T=window.setTimeout(()=>{p(!1),l==null||l(P)},i);k(T)},M=P=>{P.persist(),Bc(P)?a==null||a(P):Mc(P)&&(c==null||c(P)),I(P)},G=S?M:void 0,Z=S?D:void 0,Y=C?D:void 0,K=C?M:void 0,le=S?0:void 0;return A.createElement(hy,{"data-testid":"tooltip-wrapper",onBlur:G,onFocus:Z,onMouseEnter:Y,onMouseLeave:K,tabIndex:le},A.createElement(py,{className:e,"data-testid":"tooltip",position:v,ref:E,show:m,style:f,...y},h),t)});my.displayName="Tooltip";const Ya=L(qs)`
  white-space: nowrap;
`,Xp=H`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":H`
          cursor: pointer;

          :focus {
            ${Ya} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,gy=L.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&H`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,vy=L.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?H`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:H`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,yy=L.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,wy=L.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Xp};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Fc=L(Js)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Xp};
`,xy=L.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Hc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Uc(e){e.preventDefault()}function Zp({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:u=[]}){const s=o===0,c=$.useCallback(d=>{var f,h;const v=!!(d.items&&d.items.length>0),y=n.includes(d.id),E=(f=t||d.disabled)!==null&&f!==void 0?f:!1,m=E?Uc:x=>i(x,d),p=E?Uc:x=>i(x,d),g=a===d.id,w=A.createElement(xy,{"aria-hidden":!0},d.icon);return A.createElement(vy,{key:d.label,isRootLevel:s,role:"treeitem","aria-expanded":y,"aria-selected":g,hasItems:v},v?A.createElement(yy,{open:y},A.createElement(wy,{onClick:m,$disabled:E},A.createElement(Fc,{$disabled:E},w,A.createElement(Ya,null,d.label))),y&&A.createElement(Zp,{className:e,disabled:E,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(h=d.items)!==null&&h!==void 0?h:[]})):A.createElement(Fc,{as:"button",$disabled:E,onClick:p},w,A.createElement(Ya,null,d.label)))},[e,t,n,s,o,i,a,l]);return A.createElement(gy,{className:s?e:void 0,style:s?l:void 0,ref:s?r:void 0,role:s?"tree":"group",isRootLevel:s},u.map(c))}function ky({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:u,tree:s=[]},c){const[d,f]=un({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[h,v]=un({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),y=$.useCallback((p,g)=>{if(a){const w=Hc(d,g);a(p,w)}f(w=>Hc(w,g))},[d,a,f]),E=$.useCallback((p,g)=>{v(g),i&&i(p,g)},[i,v]),m=$.useCallback((p,g)=>{p.preventDefault(),E(p,g.id),g.items&&g.items.length&&y(p,g.id)},[E,y]);return A.createElement(Zp,{className:e,disabled:r,expanded:d,level:0,innerRef:c,select:m,selected:h,style:u,tree:s})}const by=$.forwardRef(ky);by.displayName="TreeView";const Sy="My name is Eder Bragança, I'm 22 years old, I'm a Full Stack Developer and I'm a student of Computer Science at the Federal University of Ouro Preto (UFOP).",Ey=()=>{const[e,t]=$.useState(!1),[n,r]=$.useState(!0),[o,i]=$.useState(!1);return $.useEffect(()=>{t(!0)},[]),$.useEffect(()=>{const a=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(a)},[]),O.jsxs("section",{className:"aboutSection",children:[O.jsx("section",{className:"aboutText",children:e&&O.jsx(M0,{options:{strings:[Sy],autoStart:!0,cursor:"|",cursorClassName:"typewriter-cursor",loop:!1,deleteSpeed:1/0,delay:30}})}),O.jsx("section",{className:"aboutImage",children:n?O.jsx(Ga,{}):O.jsxs(O.Fragment,{children:[!o||O.jsx(Ga,{}),O.jsx(Vp,{backgroundStyles:{backgroundImage:"url(https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/perfil.jpg?raw=true)",backgroundSize:"cover",backgroundPosition:"0% 70%",backgroundRepeat:"no-repeat"}})]})})]})},Ay={email:"ederbrape@gmail.com",foneNumber:"+5528999111274",linkedin:"https://www.linkedin.com/in/eder-braganca/",github:"https://www.github.com/EderBraganca",instagram:"https://www.instagram.com/ebraganca/"},$y={contacts:Ay};var Jp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qc=A.createContext&&A.createContext(Jp),Cy=["attr","size","title"];function _y(e,t){if(e==null)return{};var n=Ty(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ty(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}function Vc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Fi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vc(Object(n),!0).forEach(function(r){Py(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Py(e,t,n){return t=jy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jy(e){var t=Ny(e,"string");return typeof t=="symbol"?t:t+""}function Ny(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qp(e){return e&&e.map((t,n)=>A.createElement(t.tag,Fi({key:n},t.attr),qp(t.child)))}function iu(e){return t=>A.createElement(Ly,Mi({attr:Fi({},e.attr)},t),qp(e.child))}function Ly(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=_y(e,Cy),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),A.createElement("svg",Mi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:Fi(Fi({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&A.createElement("title",null,i),e.children)};return Qc!==void 0?A.createElement(Qc.Consumer,null,n=>t(n)):t(Jp)}function Oy(e){return iu({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},child:[]}]})(e)}function Ry(e){return iu({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Dy(e){return iu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}class xo{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const Iy=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},Pe={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Iy()},lu=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},zy=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=lu(e);Pe.publicKey=n.publicKey,Pe.blockHeadless=n.blockHeadless,Pe.storageProvider=n.storageProvider,Pe.blockList=n.blockList,Pe.limitRate=n.limitRate,Pe.origin=n.origin||t},eh=async(e,t,n={})=>{const r=await fetch(Pe.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),i=new xo(r.status,o);if(r.ok)return i;throw i},th=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},By=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},nh=e=>e.webdriver||!e.languages||e.languages.length===0,rh=()=>new xo(451,"Unavailable For Headless Browser"),My=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Fy=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Hy=(e,t)=>e instanceof FormData?e.get(t):e[t],oh=(e,t)=>{if(Fy(e))return!1;My(e.list,e.watchVariable);const n=Hy(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},ih=()=>new xo(403,"Forbidden"),Uy=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Qy=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},lh=async(e,t,n)=>{if(!t.throttle||!n)return!1;Uy(t.throttle,t.id);const r=t.id||e;return await Qy(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},ah=()=>new xo(429,"Too Many Requests"),Vy=async(e,t,n,r)=>{const o=lu(r),i=o.publicKey||Pe.publicKey,a=o.blockHeadless||Pe.blockHeadless,l=o.storageProvider||Pe.storageProvider,u={...Pe.blockList,...o.blockList},s={...Pe.limitRate,...o.limitRate};return a&&nh(navigator)?Promise.reject(rh()):(th(i,e,t),By(n),n&&oh(u,n)?Promise.reject(ih()):await lh(location.pathname,s,l)?Promise.reject(ah()):eh("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},Wy=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Gy=e=>typeof e=="string"?document.querySelector(e):e,Ky=async(e,t,n,r)=>{const o=lu(r),i=o.publicKey||Pe.publicKey,a=o.blockHeadless||Pe.blockHeadless,l=Pe.storageProvider||o.storageProvider,u={...Pe.blockList,...o.blockList},s={...Pe.limitRate,...o.limitRate};if(a&&nh(navigator))return Promise.reject(rh());const c=Gy(n);th(i,e,t),Wy(c);const d=new FormData(c);return oh(u,d)?Promise.reject(ih()):await lh(location.pathname,s,l)?Promise.reject(ah()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",i),eh("/api/v1.0/email/send-form",d))},Yy={init:zy,send:Vy,sendForm:Ky,EmailJSResponseStatus:xo},Xy=()=>{const[e,t]=$.useState({name:"",email:"",message:""}),n=l=>t({...e,[l.target.name]:l.target.value}),r=()=>t({...e,name:""}),o=()=>t({...e,email:""}),i={from_name:e.name,email:e.email,message:e.message},a=()=>{Yy.send("service_peuuo4e","template_xi7trpq",i,"5aUZolHgfixwTUMZp").then(l=>{console.log("SUCCESS!",l.status,l.text),alert("Email sent successfully!")}).catch(l=>{console.log("FAILED...",l),alert("Failed to send email")})};return O.jsxs("div",{style:{width:"50vw"},children:[O.jsxs("div",{style:{display:"flex"},children:[O.jsx(Gr,{name:"name",value:e.name,placeholder:"name",onChange:n,fullWidth:!0}),O.jsx(gt,{onClick:r,style:{marginLeft:4},children:"Reset"})]}),O.jsx("br",{}),O.jsxs("div",{style:{display:"flex"},children:[O.jsx(Gr,{name:"email",value:e.email,placeholder:"email",onChange:n,fullWidth:!0}),O.jsx(gt,{onClick:o,style:{marginLeft:4},children:"Reset"})]}),O.jsx("br",{}),O.jsxs("div",{style:{display:"flex"},children:[O.jsx(Gr,{name:"message",multiline:!0,rows:4,placeholder:"Your Text message",fullWidth:!0,onChange:n}),O.jsx(gt,{onClick:a,style:{marginLeft:8},children:" Send"})]})]})},Zy=()=>{const{email:e,github:t,linkedin:n,instagram:r}=$y.contacts,o=()=>{window.open("mailto:"+e)},i=()=>{window.open("https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/international_resume.pdf")};return O.jsxs("footer",{className:"contactsSection",children:[O.jsxs("section",{className:"sendEmailSection",children:[O.jsx("nav",{children:O.jsx("p",{children:"Send me a Email"})}),O.jsx("form",{onSubmit:o,children:O.jsx(Xy,{})})]}),O.jsxs("section",{className:"linksSection",children:[O.jsx("a",{className:"githubLink",target:"_blank",href:t,children:O.jsx(Ry,{})}),O.jsx("a",{className:"linkedinLink",target:"_blank",href:n,children:O.jsx(Oy,{})}),O.jsx("a",{className:"instagramLink",target:"_blank",href:r,children:O.jsx(Dy,{})}),O.jsx("section",{className:"downloadCV",children:O.jsx(gt,{onClick:i,children:"Download CV"})})]}),O.jsx("section",{className:"footerText",children:O.jsx("p",{children:"© 2024 Eder Bragança"})})]})},Jy=()=>{const e=t=>{document.getElementsByClassName(t)[0].scrollIntoView({behavior:"smooth"})};return O.jsxs("header",{className:"menu",children:[O.jsxs("a",{href:"#",onClick:()=>e("aboutSection"),children:[O.jsx(Dr,{square:!0,size:50,children:"👤"}),"About"]}),O.jsxs("a",{href:"#",onClick:()=>e("projectsSection"),children:[O.jsx(Dr,{square:!0,size:50,children:"🚀"}),"Projects"]}),O.jsxs("a",{href:"#",onClick:()=>e("skillsSection"),children:[O.jsx(Dr,{square:!0,size:50,children:"✎"}),"Skills"]}),O.jsxs("a",{href:"#",onClick:()=>e("contactsSection"),children:[O.jsx(Dr,{square:!0,size:50,children:"✉️"}),"Contact"]})]})},qy=[{id:1,name:"Language Training",description:"A language training app that helps users learn new languages.",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/LanguageTraining.png?raw=true",link:"https://github.com/EderBraganca/LanguageTraining"},{id:2,name:"Chat Bot",description:"A chat bot that helps users with their queries.",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/ChatBot.png?raw=true",link:"https://github.com/EderBraganca/ChatBot"},{id:3,name:"Americanas Login",description:"A login page for Americanas.",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/AmericanasLogin.png?raw=true",link:"https://github.com/EderBraganca/AmericanasLogin"},{id:4,name:"Dynamic Cart",description:"A dynamic cart that allows users to add and remove items.",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/DynamicCart.png?raw=true",link:"https://github.com/EderBraganca/DynamicCart"},{id:5,name:"Jokenpo Game",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/Jokenpo.png?raw=true",link:"https://github.com/EderBraganca/JoKenPo"},{id:6,name:"Sustenta Lixo",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/SustentaLixo.png?raw=true",link:"https://github.com/EderBraganca/SustentaLixo"},{id:7,name:"Facebook Login",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/FacebookLogin.png?raw=true",link:"https://github.com/EderBraganca/SustentaLixo"},{id:8,name:"Genius Game",image:"https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/Genius.png?raw=true",link:"https://github.com/EderBraganca/Genius"}],ew={projects:qy},sh=({projectName:e,imageSrc:t,projectLink:n})=>{const[r,o]=$.useState(!1);return O.jsxs(ou,{style:{maxWidth:"300px",margin:"10px"},children:[O.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black",textAlign:"start"},children:O.jsx(ru,{style:{backgroundColor:"#060083",color:"white",padding:"0 10px"},children:e})}),O.jsxs(Bi,{noPadding:!0,children:[O.jsx(gt,{variant:"thin",disabled:!0,style:{backgroundColor:"transparent"},children:"Upload"}),O.jsx(gt,{variant:"thin",disabled:!0,style:{backgroundColor:"transparent"},children:"Save"}),O.jsxs("div",{style:{position:"relative",display:"inline-block",alignSelf:"left"},children:[O.jsx(gt,{variant:"thin",onClick:()=>o(!r),size:"sm",active:r,style:{backgroundColor:"transparent"},children:"Share"}),r&&O.jsxs(Np,{style:{position:"absolute",right:"0",top:"100%",zIndex:"9999",backgroundColor:"#fff"},onClick:()=>o(!1),children:[O.jsx(si,{size:"sm",active:!0,children:"Copy link"}),O.jsx(zi,{}),O.jsx(si,{size:"sm",children:O.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:"Open link"})}),O.jsx(zi,{}),O.jsx(si,{size:"sm",disabled:!0,children:"MySpace"})]})]})]}),O.jsx(nu,{style:{padding:"0.25rem"},children:O.jsx(eu,{children:O.jsx("img",{style:{width:"200px",height:"100px",display:"block"},src:t,alt:"Project Image"})})})]})};sh.story={name:"thin"};const tw=ew.projects,nw=()=>O.jsxs("section",{className:"projectsSection",children:[O.jsx("p",{children:"Projects"}),O.jsx("div",{className:"projectsList",children:tw.map(e=>O.jsx(sh,{projectName:e.name,imageSrc:e.image,projectLink:e.link},e.id))})]}),rw=()=>O.jsx(O.Fragment,{children:O.jsxs("section",{className:"skillsSection",children:[O.jsx("p",{children:"Major Skills"}),O.jsxs("section",{className:"skillsIcons",children:[O.jsx("a",{href:"https://github.com/EderBraganca?tab=repositories&q=React",target:"_blank",children:O.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",alt:"React Icon"})}),O.jsx("a",{href:"https://github.com/EderBraganca?tab=repositories&language=java",target:"_blank",children:O.jsx("img",{src:"https://blog.geekhunter.com.br/wp-content/uploads/2020/07/pngwing.com_.png",alt:"Java Icon"})}),O.jsx("a",{href:"https://github.com/EderBraganca?tab=repositories&language=javascript",target:"_blank",children:O.jsx("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",alt:"JS Icon"})}),O.jsx("a",{href:"https://github.com/EderBraganca?tab=repositories&language=typescript",target:"_blank",children:O.jsx("img",{src:"https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png",alt:"TS Icon"})}),O.jsx("a",{href:"https://github.com/EderBraganca?tab=repositories&q=Spring",target:"_blank",children:O.jsx("img",{src:"https://img.icons8.com/?size=512&id=90519&format=png",alt:"Spring Icon"})})]})]})});function ow(){return O.jsxs(O.Fragment,{children:[O.jsx(Jy,{}),O.jsx(Ey,{}),O.jsx(rw,{}),O.jsx(nw,{}),O.jsx(Zy,{})]})}Vl.createRoot(document.getElementById("root")).render(O.jsx(A.StrictMode,{children:O.jsx(ow,{})}));
