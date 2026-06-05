function zR(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mh={exports:{}},Bc={},_h={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function FR(){if(z0)return Le;z0=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function p(B){return B===null||typeof B!="object"?null:(B=h&&B[h]||B["@@iterator"],typeof B=="function"?B:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function E(B,q,ie){this.props=B,this.context=q,this.refs=y,this.updater=ie||g}E.prototype.isReactComponent={},E.prototype.setState=function(B,q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,q,"setState")},E.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function w(){}w.prototype=E.prototype;function x(B,q,ie){this.props=B,this.context=q,this.refs=y,this.updater=ie||g}var U=x.prototype=new w;U.constructor=x,b(U,E.prototype),U.isPureReactComponent=!0;var I=Array.isArray,A=Object.prototype.hasOwnProperty,P={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function M(B,q,ie){var de,ge={},xe=null,ce=null;if(q!=null)for(de in q.ref!==void 0&&(ce=q.ref),q.key!==void 0&&(xe=""+q.key),q)A.call(q,de)&&!T.hasOwnProperty(de)&&(ge[de]=q[de]);var he=arguments.length-2;if(he===1)ge.children=ie;else if(1<he){for(var re=Array(he),ue=0;ue<he;ue++)re[ue]=arguments[ue+2];ge.children=re}if(B&&B.defaultProps)for(de in he=B.defaultProps,he)ge[de]===void 0&&(ge[de]=he[de]);return{$$typeof:e,type:B,key:xe,ref:ce,props:ge,_owner:P.current}}function N(B,q){return{$$typeof:e,type:B.type,key:q,ref:B.ref,props:B.props,_owner:B._owner}}function $(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function z(B){var q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ie){return q[ie]})}var j=/\/+/g;function H(B,q){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):q.toString(36)}function V(B,q,ie,de,ge){var xe=typeof B;(xe==="undefined"||xe==="boolean")&&(B=null);var ce=!1;if(B===null)ce=!0;else switch(xe){case"string":case"number":ce=!0;break;case"object":switch(B.$$typeof){case e:case n:ce=!0}}if(ce)return ce=B,ge=ge(ce),B=de===""?"."+H(ce,0):de,I(ge)?(ie="",B!=null&&(ie=B.replace(j,"$&/")+"/"),V(ge,q,ie,"",function(ue){return ue})):ge!=null&&($(ge)&&(ge=N(ge,ie+(!ge.key||ce&&ce.key===ge.key?"":(""+ge.key).replace(j,"$&/")+"/")+B)),q.push(ge)),1;if(ce=0,de=de===""?".":de+":",I(B))for(var he=0;he<B.length;he++){xe=B[he];var re=de+H(xe,he);ce+=V(xe,q,ie,re,ge)}else if(re=p(B),typeof re=="function")for(B=re.call(B),he=0;!(xe=B.next()).done;)xe=xe.value,re=de+H(xe,he++),ce+=V(xe,q,ie,re,ge);else if(xe==="object")throw q=String(B),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ce}function K(B,q,ie){if(B==null)return B;var de=[],ge=0;return V(B,de,"","",function(xe){return q.call(ie,xe,ge++)}),de}function W(B){if(B._status===-1){var q=B._result;q=q(),q.then(function(ie){(B._status===0||B._status===-1)&&(B._status=1,B._result=ie)},function(ie){(B._status===0||B._status===-1)&&(B._status=2,B._result=ie)}),B._status===-1&&(B._status=0,B._result=q)}if(B._status===1)return B._result.default;throw B._result}var X={current:null},R={transition:null},Z={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:R,ReactCurrentOwner:P};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:K,forEach:function(B,q,ie){K(B,function(){q.apply(this,arguments)},ie)},count:function(B){var q=0;return K(B,function(){q++}),q},toArray:function(B){return K(B,function(q){return q})||[]},only:function(B){if(!$(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Le.Component=E,Le.Fragment=t,Le.Profiler=i,Le.PureComponent=x,Le.StrictMode=r,Le.Suspense=u,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Le.act=Q,Le.cloneElement=function(B,q,ie){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var de=b({},B.props),ge=B.key,xe=B.ref,ce=B._owner;if(q!=null){if(q.ref!==void 0&&(xe=q.ref,ce=P.current),q.key!==void 0&&(ge=""+q.key),B.type&&B.type.defaultProps)var he=B.type.defaultProps;for(re in q)A.call(q,re)&&!T.hasOwnProperty(re)&&(de[re]=q[re]===void 0&&he!==void 0?he[re]:q[re])}var re=arguments.length-2;if(re===1)de.children=ie;else if(1<re){he=Array(re);for(var ue=0;ue<re;ue++)he[ue]=arguments[ue+2];de.children=he}return{$$typeof:e,type:B.type,key:ge,ref:xe,props:de,_owner:ce}},Le.createContext=function(B){return B={$$typeof:l,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:o,_context:B},B.Consumer=B},Le.createElement=M,Le.createFactory=function(B){var q=M.bind(null,B);return q.type=B,q},Le.createRef=function(){return{current:null}},Le.forwardRef=function(B){return{$$typeof:s,render:B}},Le.isValidElement=$,Le.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:W}},Le.memo=function(B,q){return{$$typeof:f,type:B,compare:q===void 0?null:q}},Le.startTransition=function(B){var q=R.transition;R.transition={};try{B()}finally{R.transition=q}},Le.unstable_act=Q,Le.useCallback=function(B,q){return X.current.useCallback(B,q)},Le.useContext=function(B){return X.current.useContext(B)},Le.useDebugValue=function(){},Le.useDeferredValue=function(B){return X.current.useDeferredValue(B)},Le.useEffect=function(B,q){return X.current.useEffect(B,q)},Le.useId=function(){return X.current.useId()},Le.useImperativeHandle=function(B,q,ie){return X.current.useImperativeHandle(B,q,ie)},Le.useInsertionEffect=function(B,q){return X.current.useInsertionEffect(B,q)},Le.useLayoutEffect=function(B,q){return X.current.useLayoutEffect(B,q)},Le.useMemo=function(B,q){return X.current.useMemo(B,q)},Le.useReducer=function(B,q,ie){return X.current.useReducer(B,q,ie)},Le.useRef=function(B){return X.current.useRef(B)},Le.useState=function(B){return X.current.useState(B)},Le.useSyncExternalStore=function(B,q,ie){return X.current.useSyncExternalStore(B,q,ie)},Le.useTransition=function(){return X.current.useTransition()},Le.version="18.3.1",Le}var F0;function NE(){return F0||(F0=1,_h.exports=FR()),_h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function $R(){if($0)return Bc;$0=1;var e=NE(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(s,u,f){var m,h={},p=null,g=null;f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),u.ref!==void 0&&(g=u.ref);for(m in u)r.call(u,m)&&!o.hasOwnProperty(m)&&(h[m]=u[m]);if(s&&s.defaultProps)for(m in u=s.defaultProps,u)h[m]===void 0&&(h[m]=u[m]);return{$$typeof:n,type:s,key:p,ref:g,props:h,_owner:i.current}}return Bc.Fragment=t,Bc.jsx=l,Bc.jsxs=l,Bc}var G0;function GR(){return G0||(G0=1,Mh.exports=$R()),Mh.exports}var O=GR(),fu={},Nh={exports:{}},et={},Lh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function HR(){return H0||(H0=1,(function(e){function n(R,Z){var Q=R.length;R.push(Z);e:for(;0<Q;){var B=Q-1>>>1,q=R[B];if(0<i(q,Z))R[B]=Z,R[Q]=q,Q=B;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var Z=R[0],Q=R.pop();if(Q!==Z){R[0]=Q;e:for(var B=0,q=R.length,ie=q>>>1;B<ie;){var de=2*(B+1)-1,ge=R[de],xe=de+1,ce=R[xe];if(0>i(ge,Q))xe<q&&0>i(ce,ge)?(R[B]=ce,R[xe]=Q,B=xe):(R[B]=ge,R[de]=Q,B=de);else if(xe<q&&0>i(ce,Q))R[B]=ce,R[xe]=Q,B=xe;else break e}}return Z}function i(R,Z){var Q=R.sortIndex-Z.sortIndex;return Q!==0?Q:R.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],f=[],m=1,h=null,p=3,g=!1,b=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(R){for(var Z=t(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=R)r(f),Z.sortIndex=Z.expirationTime,n(u,Z);else break;Z=t(f)}}function I(R){if(y=!1,U(R),!b)if(t(u)!==null)b=!0,W(A);else{var Z=t(f);Z!==null&&X(I,Z.startTime-R)}}function A(R,Z){b=!1,y&&(y=!1,w(M),M=-1),g=!0;var Q=p;try{for(U(Z),h=t(u);h!==null&&(!(h.expirationTime>Z)||R&&!z());){var B=h.callback;if(typeof B=="function"){h.callback=null,p=h.priorityLevel;var q=B(h.expirationTime<=Z);Z=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(u)&&r(u),U(Z)}else r(u);h=t(u)}if(h!==null)var ie=!0;else{var de=t(f);de!==null&&X(I,de.startTime-Z),ie=!1}return ie}finally{h=null,p=Q,g=!1}}var P=!1,T=null,M=-1,N=5,$=-1;function z(){return!(e.unstable_now()-$<N)}function j(){if(T!==null){var R=e.unstable_now();$=R;var Z=!0;try{Z=T(!0,R)}finally{Z?H():(P=!1,T=null)}}else P=!1}var H;if(typeof x=="function")H=function(){x(j)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=j,H=function(){K.postMessage(null)}}else H=function(){E(j,0)};function W(R){T=R,P||(P=!0,H())}function X(R,Z){M=E(function(){R(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,W(A))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var Q=p;p=Z;try{return R()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Q=p;p=R;try{return Z()}finally{p=Q}},e.unstable_scheduleCallback=function(R,Z,Q){var B=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?B+Q:B):Q=B,R){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Q+q,R={id:m++,callback:Z,priorityLevel:R,startTime:Q,expirationTime:q,sortIndex:-1},Q>B?(R.sortIndex=Q,n(f,R),t(u)===null&&R===t(f)&&(y?(w(M),M=-1):y=!0,X(I,Q-B))):(R.sortIndex=q,n(u,R),b||g||(b=!0,W(A))),R},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(R){var Z=p;return function(){var Q=p;p=Z;try{return R.apply(this,arguments)}finally{p=Q}}}})(Rh)),Rh}var W0;function WR(){return W0||(W0=1,Lh.exports=HR()),Lh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function VR(){if(V0)return et;V0=1;var e=NE(),n=WR();function t(a){for(var c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function o(a,c){l(a,c),l(a+"Capture",c)}function l(a,c){for(i[a]=c,a=0;a<c.length;a++)r.add(c[a])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),u=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function p(a){return u.call(h,a)?!0:u.call(m,a)?!1:f.test(a)?h[a]=!0:(m[a]=!0,!1)}function g(a,c,d,v){if(d!==null&&d.type===0)return!1;switch(typeof c){case"function":case"symbol":return!0;case"boolean":return v?!1:d!==null?!d.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function b(a,c,d,v){if(c===null||typeof c>"u"||g(a,c,d,v))return!0;if(v)return!1;if(d!==null)switch(d.type){case 3:return!c;case 4:return c===!1;case 5:return isNaN(c);case 6:return isNaN(c)||1>c}return!1}function y(a,c,d,v,C,S,k){this.acceptsBooleans=c===2||c===3||c===4,this.attributeName=v,this.attributeNamespace=C,this.mustUseProperty=d,this.propertyName=a,this.type=c,this.sanitizeURL=S,this.removeEmptyString=k}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new y(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var c=a[0];E[c]=new y(c,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new y(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new y(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new y(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){E[a]=new y(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){E[a]=new y(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){E[a]=new y(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){E[a]=new y(a,5,!1,a.toLowerCase(),null,!1,!1)});var w=/[\-:]([a-z])/g;function x(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var c=a.replace(w,x);E[c]=new y(c,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var c=a.replace(w,x);E[c]=new y(c,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var c=a.replace(w,x);E[c]=new y(c,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){E[a]=new y(a,1,!1,a.toLowerCase(),null,!1,!1)}),E.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){E[a]=new y(a,1,!1,a.toLowerCase(),null,!0,!0)});function U(a,c,d,v){var C=E.hasOwnProperty(c)?E[c]:null;(C!==null?C.type!==0:v||!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N")&&(b(c,d,C,v)&&(d=null),v||C===null?p(c)&&(d===null?a.removeAttribute(c):a.setAttribute(c,""+d)):C.mustUseProperty?a[C.propertyName]=d===null?C.type===3?!1:"":d:(c=C.attributeName,v=C.attributeNamespace,d===null?a.removeAttribute(c):(C=C.type,d=C===3||C===4&&d===!0?"":""+d,v?a.setAttributeNS(v,c,d):a.setAttribute(c,d))))}var I=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),P=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),R=Symbol.iterator;function Z(a){return a===null||typeof a!="object"?null:(a=R&&a[R]||a["@@iterator"],typeof a=="function"?a:null)}var Q=Object.assign,B;function q(a){if(B===void 0)try{throw Error()}catch(d){var c=d.stack.trim().match(/\n( *(at )?)/);B=c&&c[1]||""}return`
`+B+a}var ie=!1;function de(a,c){if(!a||ie)return"";ie=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(c)if(c=function(){throw Error()},Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(ee){var v=ee}Reflect.construct(a,[],c)}else{try{c.call()}catch(ee){v=ee}a.call(c.prototype)}else{try{throw Error()}catch(ee){v=ee}a()}}catch(ee){if(ee&&v&&typeof ee.stack=="string"){for(var C=ee.stack.split(`
`),S=v.stack.split(`
`),k=C.length-1,L=S.length-1;1<=k&&0<=L&&C[k]!==S[L];)L--;for(;1<=k&&0<=L;k--,L--)if(C[k]!==S[L]){if(k!==1||L!==1)do if(k--,L--,0>L||C[k]!==S[L]){var F=`
`+C[k].replace(" at new "," at ");return a.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",a.displayName)),F}while(1<=k&&0<=L);break}}}finally{ie=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?q(a):""}function ge(a){switch(a.tag){case 5:return q(a.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return a=de(a.type,!1),a;case 11:return a=de(a.type.render,!1),a;case 1:return a=de(a.type,!0),a;default:return""}}function xe(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case T:return"Fragment";case P:return"Portal";case N:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case z:return(a.displayName||"Context")+".Consumer";case $:return(a._context.displayName||"Context")+".Provider";case j:var c=a.render;return a=a.displayName,a||(a=c.displayName||c.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case K:return c=a.displayName||null,c!==null?c:xe(a.type)||"Memo";case W:c=a._payload,a=a._init;try{return xe(a(c))}catch{}}return null}function ce(a){var c=a.type;switch(a.tag){case 24:return"Cache";case 9:return(c.displayName||"Context")+".Consumer";case 10:return(c._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=c.render,a=a.displayName||a.name||"",c.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return c;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(c);case 8:return c===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c}return null}function he(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function re(a){var c=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(c==="checkbox"||c==="radio")}function ue(a){var c=re(a)?"checked":"value",d=Object.getOwnPropertyDescriptor(a.constructor.prototype,c),v=""+a[c];if(!a.hasOwnProperty(c)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var C=d.get,S=d.set;return Object.defineProperty(a,c,{configurable:!0,get:function(){return C.call(this)},set:function(k){v=""+k,S.call(this,k)}}),Object.defineProperty(a,c,{enumerable:d.enumerable}),{getValue:function(){return v},setValue:function(k){v=""+k},stopTracking:function(){a._valueTracker=null,delete a[c]}}}}function me(a){a._valueTracker||(a._valueTracker=ue(a))}function ne(a){if(!a)return!1;var c=a._valueTracker;if(!c)return!0;var d=c.getValue(),v="";return a&&(v=re(a)?a.checked?"true":"false":a.value),a=v,a!==d?(c.setValue(a),!0):!1}function _e(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Pe(a,c){var d=c.checked;return Q({},c,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??a._wrapperState.initialChecked})}function Ve(a,c){var d=c.defaultValue==null?"":c.defaultValue,v=c.checked!=null?c.checked:c.defaultChecked;d=he(c.value!=null?c.value:d),a._wrapperState={initialChecked:v,initialValue:d,controlled:c.type==="checkbox"||c.type==="radio"?c.checked!=null:c.value!=null}}function Ke(a,c){c=c.checked,c!=null&&U(a,"checked",c,!1)}function rn(a,c){Ke(a,c);var d=he(c.value),v=c.type;if(d!=null)v==="number"?(d===0&&a.value===""||a.value!=d)&&(a.value=""+d):a.value!==""+d&&(a.value=""+d);else if(v==="submit"||v==="reset"){a.removeAttribute("value");return}c.hasOwnProperty("value")?Gn(a,c.type,d):c.hasOwnProperty("defaultValue")&&Gn(a,c.type,he(c.defaultValue)),c.checked==null&&c.defaultChecked!=null&&(a.defaultChecked=!!c.defaultChecked)}function at(a,c,d){if(c.hasOwnProperty("value")||c.hasOwnProperty("defaultValue")){var v=c.type;if(!(v!=="submit"&&v!=="reset"||c.value!==void 0&&c.value!==null))return;c=""+a._wrapperState.initialValue,d||c===a.value||(a.value=c),a.defaultValue=c}d=a.name,d!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,d!==""&&(a.name=d)}function Gn(a,c,d){(c!=="number"||_e(a.ownerDocument)!==a)&&(d==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+d&&(a.defaultValue=""+d))}var er=Array.isArray;function qn(a,c,d,v){if(a=a.options,c){c={};for(var C=0;C<d.length;C++)c["$"+d[C]]=!0;for(d=0;d<a.length;d++)C=c.hasOwnProperty("$"+a[d].value),a[d].selected!==C&&(a[d].selected=C),C&&v&&(a[d].defaultSelected=!0)}else{for(d=""+he(d),c=null,C=0;C<a.length;C++){if(a[C].value===d){a[C].selected=!0,v&&(a[C].defaultSelected=!0);return}c!==null||a[C].disabled||(c=a[C])}c!==null&&(c.selected=!0)}}function _t(a,c){if(c.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},c,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Ea(a,c){var d=c.value;if(d==null){if(d=c.children,c=c.defaultValue,d!=null){if(c!=null)throw Error(t(92));if(er(d)){if(1<d.length)throw Error(t(93));d=d[0]}c=d}c==null&&(c=""),d=c}a._wrapperState={initialValue:he(d)}}function Qo(a,c){var d=he(c.value),v=he(c.defaultValue);d!=null&&(d=""+d,d!==a.value&&(a.value=d),c.defaultValue==null&&a.defaultValue!==d&&(a.defaultValue=d)),v!=null&&(a.defaultValue=""+v)}function ec(a){var c=a.textContent;c===a._wrapperState.initialValue&&c!==""&&c!==null&&(a.value=c)}function QC(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(a,c){return a==null||a==="http://www.w3.org/1999/xhtml"?QC(c):a==="http://www.w3.org/2000/svg"&&c==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var rs,eb=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(c,d,v,C){MSApp.execUnsafeLocalFunction(function(){return a(c,d,v,C)})}:a})(function(a,c){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=c;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+c.valueOf().toString()+"</svg>",c=rs.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;c.firstChild;)a.appendChild(c.firstChild)}});function nc(a,c){if(c){var d=a.firstChild;if(d&&d===a.lastChild&&d.nodeType===3){d.nodeValue=c;return}}a.textContent=c}var tc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HN=["Webkit","ms","Moz","O"];Object.keys(tc).forEach(function(a){HN.forEach(function(c){c=c+a.charAt(0).toUpperCase()+a.substring(1),tc[c]=tc[a]})});function nb(a,c,d){return c==null||typeof c=="boolean"||c===""?"":d||typeof c!="number"||c===0||tc.hasOwnProperty(a)&&tc[a]?(""+c).trim():c+"px"}function tb(a,c){a=a.style;for(var d in c)if(c.hasOwnProperty(d)){var v=d.indexOf("--")===0,C=nb(d,c[d],v);d==="float"&&(d="cssFloat"),v?a.setProperty(d,C):a[d]=C}}var WN=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(a,c){if(c){if(WN[a]&&(c.children!=null||c.dangerouslySetInnerHTML!=null))throw Error(t(137,a));if(c.dangerouslySetInnerHTML!=null){if(c.children!=null)throw Error(t(60));if(typeof c.dangerouslySetInnerHTML!="object"||!("__html"in c.dangerouslySetInnerHTML))throw Error(t(61))}if(c.style!=null&&typeof c.style!="object")throw Error(t(62))}}function Wf(a,c){if(a.indexOf("-")===-1)return typeof c.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Kf(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var qf=null,Ca=null,ba=null;function rb(a){if(a=xc(a)){if(typeof qf!="function")throw Error(t(280));var c=a.stateNode;c&&(c=Us(c),qf(a.stateNode,a.type,c))}}function ib(a){Ca?ba?ba.push(a):ba=[a]:Ca=a}function ab(){if(Ca){var a=Ca,c=ba;if(ba=Ca=null,rb(a),c)for(a=0;a<c.length;a++)rb(c[a])}}function ob(a,c){return a(c)}function cb(){}var Yf=!1;function lb(a,c,d){if(Yf)return a(c,d);Yf=!0;try{return ob(a,c,d)}finally{Yf=!1,(Ca!==null||ba!==null)&&(cb(),ab())}}function rc(a,c){var d=a.stateNode;if(d===null)return null;var v=Us(d);if(v===null)return null;d=v[c];e:switch(c){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(v=!v.disabled)||(a=a.type,v=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!v;break e;default:a=!1}if(a)return null;if(d&&typeof d!="function")throw Error(t(231,c,typeof d));return d}var Xf=!1;if(s)try{var ic={};Object.defineProperty(ic,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",ic,ic),window.removeEventListener("test",ic,ic)}catch{Xf=!1}function VN(a,c,d,v,C,S,k,L,F){var ee=Array.prototype.slice.call(arguments,3);try{c.apply(d,ee)}catch(oe){this.onError(oe)}}var ac=!1,is=null,as=!1,Jf=null,KN={onError:function(a){ac=!0,is=a}};function qN(a,c,d,v,C,S,k,L,F){ac=!1,is=null,VN.apply(KN,arguments)}function YN(a,c,d,v,C,S,k,L,F){if(qN.apply(this,arguments),ac){if(ac){var ee=is;ac=!1,is=null}else throw Error(t(198));as||(as=!0,Jf=ee)}}function Ii(a){var c=a,d=a;if(a.alternate)for(;c.return;)c=c.return;else{a=c;do c=a,(c.flags&4098)!==0&&(d=c.return),a=c.return;while(a)}return c.tag===3?d:null}function sb(a){if(a.tag===13){var c=a.memoizedState;if(c===null&&(a=a.alternate,a!==null&&(c=a.memoizedState)),c!==null)return c.dehydrated}return null}function ub(a){if(Ii(a)!==a)throw Error(t(188))}function XN(a){var c=a.alternate;if(!c){if(c=Ii(a),c===null)throw Error(t(188));return c!==a?null:a}for(var d=a,v=c;;){var C=d.return;if(C===null)break;var S=C.alternate;if(S===null){if(v=C.return,v!==null){d=v;continue}break}if(C.child===S.child){for(S=C.child;S;){if(S===d)return ub(C),a;if(S===v)return ub(C),c;S=S.sibling}throw Error(t(188))}if(d.return!==v.return)d=C,v=S;else{for(var k=!1,L=C.child;L;){if(L===d){k=!0,d=C,v=S;break}if(L===v){k=!0,v=C,d=S;break}L=L.sibling}if(!k){for(L=S.child;L;){if(L===d){k=!0,d=S,v=C;break}if(L===v){k=!0,v=S,d=C;break}L=L.sibling}if(!k)throw Error(t(189))}}if(d.alternate!==v)throw Error(t(190))}if(d.tag!==3)throw Error(t(188));return d.stateNode.current===d?a:c}function db(a){return a=XN(a),a!==null?fb(a):null}function fb(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var c=fb(a);if(c!==null)return c;a=a.sibling}return null}var mb=n.unstable_scheduleCallback,hb=n.unstable_cancelCallback,JN=n.unstable_shouldYield,ZN=n.unstable_requestPaint,dn=n.unstable_now,QN=n.unstable_getCurrentPriorityLevel,Zf=n.unstable_ImmediatePriority,vb=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,eL=n.unstable_LowPriority,pb=n.unstable_IdlePriority,cs=null,nr=null;function nL(a){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(cs,a,void 0,(a.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:iL,tL=Math.log,rL=Math.LN2;function iL(a){return a>>>=0,a===0?32:31-(tL(a)/rL|0)|0}var ls=64,ss=4194304;function oc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function us(a,c){var d=a.pendingLanes;if(d===0)return 0;var v=0,C=a.suspendedLanes,S=a.pingedLanes,k=d&268435455;if(k!==0){var L=k&~C;L!==0?v=oc(L):(S&=k,S!==0&&(v=oc(S)))}else k=d&~C,k!==0?v=oc(k):S!==0&&(v=oc(S));if(v===0)return 0;if(c!==0&&c!==v&&(c&C)===0&&(C=v&-v,S=c&-c,C>=S||C===16&&(S&4194240)!==0))return c;if((v&4)!==0&&(v|=d&16),c=a.entangledLanes,c!==0)for(a=a.entanglements,c&=v;0<c;)d=31-Nt(c),C=1<<d,v|=a[d],c&=~C;return v}function aL(a,c){switch(a){case 1:case 2:case 4:return c+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oL(a,c){for(var d=a.suspendedLanes,v=a.pingedLanes,C=a.expirationTimes,S=a.pendingLanes;0<S;){var k=31-Nt(S),L=1<<k,F=C[k];F===-1?((L&d)===0||(L&v)!==0)&&(C[k]=aL(L,c)):F<=c&&(a.expiredLanes|=L),S&=~L}}function Qf(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function yb(){var a=ls;return ls<<=1,(ls&4194240)===0&&(ls=64),a}function em(a){for(var c=[],d=0;31>d;d++)c.push(a);return c}function cc(a,c,d){a.pendingLanes|=c,c!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,c=31-Nt(c),a[c]=d}function cL(a,c){var d=a.pendingLanes&~c;a.pendingLanes=c,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=c,a.mutableReadLanes&=c,a.entangledLanes&=c,c=a.entanglements;var v=a.eventTimes;for(a=a.expirationTimes;0<d;){var C=31-Nt(d),S=1<<C;c[C]=0,v[C]=-1,a[C]=-1,d&=~S}}function nm(a,c){var d=a.entangledLanes|=c;for(a=a.entanglements;d;){var v=31-Nt(d),C=1<<v;C&c|a[v]&c&&(a[v]|=c),d&=~C}}var We=0;function gb(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var Eb,tm,Cb,bb,Sb,rm=!1,ds=[],Wr=null,Vr=null,Kr=null,lc=new Map,sc=new Map,qr=[],lL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wb(a,c){switch(a){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":lc.delete(c.pointerId);break;case"gotpointercapture":case"lostpointercapture":sc.delete(c.pointerId)}}function uc(a,c,d,v,C,S){return a===null||a.nativeEvent!==S?(a={blockedOn:c,domEventName:d,eventSystemFlags:v,nativeEvent:S,targetContainers:[C]},c!==null&&(c=xc(c),c!==null&&tm(c)),a):(a.eventSystemFlags|=v,c=a.targetContainers,C!==null&&c.indexOf(C)===-1&&c.push(C),a)}function sL(a,c,d,v,C){switch(c){case"focusin":return Wr=uc(Wr,a,c,d,v,C),!0;case"dragenter":return Vr=uc(Vr,a,c,d,v,C),!0;case"mouseover":return Kr=uc(Kr,a,c,d,v,C),!0;case"pointerover":var S=C.pointerId;return lc.set(S,uc(lc.get(S)||null,a,c,d,v,C)),!0;case"gotpointercapture":return S=C.pointerId,sc.set(S,uc(sc.get(S)||null,a,c,d,v,C)),!0}return!1}function xb(a){var c=Oi(a.target);if(c!==null){var d=Ii(c);if(d!==null){if(c=d.tag,c===13){if(c=sb(d),c!==null){a.blockedOn=c,Sb(a.priority,function(){Cb(d)});return}}else if(c===3&&d.stateNode.current.memoizedState.isDehydrated){a.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}a.blockedOn=null}function fs(a){if(a.blockedOn!==null)return!1;for(var c=a.targetContainers;0<c.length;){var d=am(a.domEventName,a.eventSystemFlags,c[0],a.nativeEvent);if(d===null){d=a.nativeEvent;var v=new d.constructor(d.type,d);Vf=v,d.target.dispatchEvent(v),Vf=null}else return c=xc(d),c!==null&&tm(c),a.blockedOn=d,!1;c.shift()}return!0}function Ab(a,c,d){fs(a)&&d.delete(c)}function uL(){rm=!1,Wr!==null&&fs(Wr)&&(Wr=null),Vr!==null&&fs(Vr)&&(Vr=null),Kr!==null&&fs(Kr)&&(Kr=null),lc.forEach(Ab),sc.forEach(Ab)}function dc(a,c){a.blockedOn===c&&(a.blockedOn=null,rm||(rm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,uL)))}function fc(a){function c(C){return dc(C,a)}if(0<ds.length){dc(ds[0],a);for(var d=1;d<ds.length;d++){var v=ds[d];v.blockedOn===a&&(v.blockedOn=null)}}for(Wr!==null&&dc(Wr,a),Vr!==null&&dc(Vr,a),Kr!==null&&dc(Kr,a),lc.forEach(c),sc.forEach(c),d=0;d<qr.length;d++)v=qr[d],v.blockedOn===a&&(v.blockedOn=null);for(;0<qr.length&&(d=qr[0],d.blockedOn===null);)xb(d),d.blockedOn===null&&qr.shift()}var Sa=I.ReactCurrentBatchConfig,ms=!0;function dL(a,c,d,v){var C=We,S=Sa.transition;Sa.transition=null;try{We=1,im(a,c,d,v)}finally{We=C,Sa.transition=S}}function fL(a,c,d,v){var C=We,S=Sa.transition;Sa.transition=null;try{We=4,im(a,c,d,v)}finally{We=C,Sa.transition=S}}function im(a,c,d,v){if(ms){var C=am(a,c,d,v);if(C===null)Sm(a,c,v,hs,d),wb(a,v);else if(sL(C,a,c,d,v))v.stopPropagation();else if(wb(a,v),c&4&&-1<lL.indexOf(a)){for(;C!==null;){var S=xc(C);if(S!==null&&Eb(S),S=am(a,c,d,v),S===null&&Sm(a,c,v,hs,d),S===C)break;C=S}C!==null&&v.stopPropagation()}else Sm(a,c,v,null,d)}}var hs=null;function am(a,c,d,v){if(hs=null,a=Kf(v),a=Oi(a),a!==null)if(c=Ii(a),c===null)a=null;else if(d=c.tag,d===13){if(a=sb(c),a!==null)return a;a=null}else if(d===3){if(c.stateNode.current.memoizedState.isDehydrated)return c.tag===3?c.stateNode.containerInfo:null;a=null}else c!==a&&(a=null);return hs=a,null}function Ub(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QN()){case Zf:return 1;case vb:return 4;case os:case eL:return 16;case pb:return 536870912;default:return 16}default:return 16}}var Yr=null,om=null,vs=null;function Tb(){if(vs)return vs;var a,c=om,d=c.length,v,C="value"in Yr?Yr.value:Yr.textContent,S=C.length;for(a=0;a<d&&c[a]===C[a];a++);var k=d-a;for(v=1;v<=k&&c[d-v]===C[S-v];v++);return vs=C.slice(a,1<v?1-v:void 0)}function ps(a){var c=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&c===13&&(a=13)):a=c,a===10&&(a=13),32<=a||a===13?a:0}function ys(){return!0}function Pb(){return!1}function ot(a){function c(d,v,C,S,k){this._reactName=d,this._targetInst=C,this.type=v,this.nativeEvent=S,this.target=k,this.currentTarget=null;for(var L in a)a.hasOwnProperty(L)&&(d=a[L],this[L]=d?d(S):S[L]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?ys:Pb,this.isPropagationStopped=Pb,this}return Q(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),c}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cm=ot(wa),mc=Q({},wa,{view:0,detail:0}),mL=ot(mc),lm,sm,hc,gs=Q({},mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==hc&&(hc&&a.type==="mousemove"?(lm=a.screenX-hc.screenX,sm=a.screenY-hc.screenY):sm=lm=0,hc=a),lm)},movementY:function(a){return"movementY"in a?a.movementY:sm}}),Ib=ot(gs),hL=Q({},gs,{dataTransfer:0}),vL=ot(hL),pL=Q({},mc,{relatedTarget:0}),um=ot(pL),yL=Q({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),gL=ot(yL),EL=Q({},wa,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),CL=ot(EL),bL=Q({},wa,{data:0}),Ob=ot(bL),SL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AL(a){var c=this.nativeEvent;return c.getModifierState?c.getModifierState(a):(a=xL[a])?!!c[a]:!1}function dm(){return AL}var UL=Q({},mc,{key:function(a){if(a.key){var c=SL[a.key]||a.key;if(c!=="Unidentified")return c}return a.type==="keypress"?(a=ps(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?wL[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(a){return a.type==="keypress"?ps(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?ps(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),TL=ot(UL),PL=Q({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kb=ot(PL),IL=Q({},mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),OL=ot(IL),kL=Q({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ML=ot(kL),_L=Q({},gs,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),NL=ot(_L),LL=[9,13,27,32],fm=s&&"CompositionEvent"in window,vc=null;s&&"documentMode"in document&&(vc=document.documentMode);var RL=s&&"TextEvent"in window&&!vc,Mb=s&&(!fm||vc&&8<vc&&11>=vc),_b=" ",Nb=!1;function Lb(a,c){switch(a){case"keyup":return LL.indexOf(c.keyCode)!==-1;case"keydown":return c.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rb(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var xa=!1;function jL(a,c){switch(a){case"compositionend":return Rb(c);case"keypress":return c.which!==32?null:(Nb=!0,_b);case"textInput":return a=c.data,a===_b&&Nb?null:a;default:return null}}function DL(a,c){if(xa)return a==="compositionend"||!fm&&Lb(a,c)?(a=Tb(),vs=om=Yr=null,xa=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(c.ctrlKey||c.altKey||c.metaKey)||c.ctrlKey&&c.altKey){if(c.char&&1<c.char.length)return c.char;if(c.which)return String.fromCharCode(c.which)}return null;case"compositionend":return Mb&&c.locale!=="ko"?null:c.data;default:return null}}var BL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jb(a){var c=a&&a.nodeName&&a.nodeName.toLowerCase();return c==="input"?!!BL[a.type]:c==="textarea"}function Db(a,c,d,v){ib(v),c=ws(c,"onChange"),0<c.length&&(d=new cm("onChange","change",null,d,v),a.push({event:d,listeners:c}))}var pc=null,yc=null;function zL(a){tS(a,0)}function Es(a){var c=Ia(a);if(ne(c))return a}function FL(a,c){if(a==="change")return c}var Bb=!1;if(s){var mm;if(s){var hm="oninput"in document;if(!hm){var zb=document.createElement("div");zb.setAttribute("oninput","return;"),hm=typeof zb.oninput=="function"}mm=hm}else mm=!1;Bb=mm&&(!document.documentMode||9<document.documentMode)}function Fb(){pc&&(pc.detachEvent("onpropertychange",$b),yc=pc=null)}function $b(a){if(a.propertyName==="value"&&Es(yc)){var c=[];Db(c,yc,a,Kf(a)),lb(zL,c)}}function $L(a,c,d){a==="focusin"?(Fb(),pc=c,yc=d,pc.attachEvent("onpropertychange",$b)):a==="focusout"&&Fb()}function GL(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Es(yc)}function HL(a,c){if(a==="click")return Es(c)}function WL(a,c){if(a==="input"||a==="change")return Es(c)}function VL(a,c){return a===c&&(a!==0||1/a===1/c)||a!==a&&c!==c}var Lt=typeof Object.is=="function"?Object.is:VL;function gc(a,c){if(Lt(a,c))return!0;if(typeof a!="object"||a===null||typeof c!="object"||c===null)return!1;var d=Object.keys(a),v=Object.keys(c);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var C=d[v];if(!u.call(c,C)||!Lt(a[C],c[C]))return!1}return!0}function Gb(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Hb(a,c){var d=Gb(a);a=0;for(var v;d;){if(d.nodeType===3){if(v=a+d.textContent.length,a<=c&&v>=c)return{node:d,offset:c-a};a=v}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Gb(d)}}function Wb(a,c){return a&&c?a===c?!0:a&&a.nodeType===3?!1:c&&c.nodeType===3?Wb(a,c.parentNode):"contains"in a?a.contains(c):a.compareDocumentPosition?!!(a.compareDocumentPosition(c)&16):!1:!1}function Vb(){for(var a=window,c=_e();c instanceof a.HTMLIFrameElement;){try{var d=typeof c.contentWindow.location.href=="string"}catch{d=!1}if(d)a=c.contentWindow;else break;c=_e(a.document)}return c}function vm(a){var c=a&&a.nodeName&&a.nodeName.toLowerCase();return c&&(c==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||c==="textarea"||a.contentEditable==="true")}function KL(a){var c=Vb(),d=a.focusedElem,v=a.selectionRange;if(c!==d&&d&&d.ownerDocument&&Wb(d.ownerDocument.documentElement,d)){if(v!==null&&vm(d)){if(c=v.start,a=v.end,a===void 0&&(a=c),"selectionStart"in d)d.selectionStart=c,d.selectionEnd=Math.min(a,d.value.length);else if(a=(c=d.ownerDocument||document)&&c.defaultView||window,a.getSelection){a=a.getSelection();var C=d.textContent.length,S=Math.min(v.start,C);v=v.end===void 0?S:Math.min(v.end,C),!a.extend&&S>v&&(C=v,v=S,S=C),C=Hb(d,S);var k=Hb(d,v);C&&k&&(a.rangeCount!==1||a.anchorNode!==C.node||a.anchorOffset!==C.offset||a.focusNode!==k.node||a.focusOffset!==k.offset)&&(c=c.createRange(),c.setStart(C.node,C.offset),a.removeAllRanges(),S>v?(a.addRange(c),a.extend(k.node,k.offset)):(c.setEnd(k.node,k.offset),a.addRange(c)))}}for(c=[],a=d;a=a.parentNode;)a.nodeType===1&&c.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<c.length;d++)a=c[d],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var qL=s&&"documentMode"in document&&11>=document.documentMode,Aa=null,pm=null,Ec=null,ym=!1;function Kb(a,c,d){var v=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;ym||Aa==null||Aa!==_e(v)||(v=Aa,"selectionStart"in v&&vm(v)?v={start:v.selectionStart,end:v.selectionEnd}:(v=(v.ownerDocument&&v.ownerDocument.defaultView||window).getSelection(),v={anchorNode:v.anchorNode,anchorOffset:v.anchorOffset,focusNode:v.focusNode,focusOffset:v.focusOffset}),Ec&&gc(Ec,v)||(Ec=v,v=ws(pm,"onSelect"),0<v.length&&(c=new cm("onSelect","select",null,c,d),a.push({event:c,listeners:v}),c.target=Aa)))}function Cs(a,c){var d={};return d[a.toLowerCase()]=c.toLowerCase(),d["Webkit"+a]="webkit"+c,d["Moz"+a]="moz"+c,d}var Ua={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},gm={},qb={};s&&(qb=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function bs(a){if(gm[a])return gm[a];if(!Ua[a])return a;var c=Ua[a],d;for(d in c)if(c.hasOwnProperty(d)&&d in qb)return gm[a]=c[d];return a}var Yb=bs("animationend"),Xb=bs("animationiteration"),Jb=bs("animationstart"),Zb=bs("transitionend"),Qb=new Map,eS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(a,c){Qb.set(a,c),o(c,[a])}for(var Em=0;Em<eS.length;Em++){var Cm=eS[Em],YL=Cm.toLowerCase(),XL=Cm[0].toUpperCase()+Cm.slice(1);Xr(YL,"on"+XL)}Xr(Yb,"onAnimationEnd"),Xr(Xb,"onAnimationIteration"),Xr(Jb,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(Zb,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cc));function nS(a,c,d){var v=a.type||"unknown-event";a.currentTarget=d,YN(v,c,void 0,a),a.currentTarget=null}function tS(a,c){c=(c&4)!==0;for(var d=0;d<a.length;d++){var v=a[d],C=v.event;v=v.listeners;e:{var S=void 0;if(c)for(var k=v.length-1;0<=k;k--){var L=v[k],F=L.instance,ee=L.currentTarget;if(L=L.listener,F!==S&&C.isPropagationStopped())break e;nS(C,L,ee),S=F}else for(k=0;k<v.length;k++){if(L=v[k],F=L.instance,ee=L.currentTarget,L=L.listener,F!==S&&C.isPropagationStopped())break e;nS(C,L,ee),S=F}}}if(as)throw a=Jf,as=!1,Jf=null,a}function Qe(a,c){var d=c[Pm];d===void 0&&(d=c[Pm]=new Set);var v=a+"__bubble";d.has(v)||(rS(c,a,2,!1),d.add(v))}function bm(a,c,d){var v=0;c&&(v|=4),rS(d,a,v,c)}var Ss="_reactListening"+Math.random().toString(36).slice(2);function bc(a){if(!a[Ss]){a[Ss]=!0,r.forEach(function(d){d!=="selectionchange"&&(JL.has(d)||bm(d,!1,a),bm(d,!0,a))});var c=a.nodeType===9?a:a.ownerDocument;c===null||c[Ss]||(c[Ss]=!0,bm("selectionchange",!1,c))}}function rS(a,c,d,v){switch(Ub(c)){case 1:var C=dL;break;case 4:C=fL;break;default:C=im}d=C.bind(null,c,d,a),C=void 0,!Xf||c!=="touchstart"&&c!=="touchmove"&&c!=="wheel"||(C=!0),v?C!==void 0?a.addEventListener(c,d,{capture:!0,passive:C}):a.addEventListener(c,d,!0):C!==void 0?a.addEventListener(c,d,{passive:C}):a.addEventListener(c,d,!1)}function Sm(a,c,d,v,C){var S=v;if((c&1)===0&&(c&2)===0&&v!==null)e:for(;;){if(v===null)return;var k=v.tag;if(k===3||k===4){var L=v.stateNode.containerInfo;if(L===C||L.nodeType===8&&L.parentNode===C)break;if(k===4)for(k=v.return;k!==null;){var F=k.tag;if((F===3||F===4)&&(F=k.stateNode.containerInfo,F===C||F.nodeType===8&&F.parentNode===C))return;k=k.return}for(;L!==null;){if(k=Oi(L),k===null)return;if(F=k.tag,F===5||F===6){v=S=k;continue e}L=L.parentNode}}v=v.return}lb(function(){var ee=S,oe=Kf(d),le=[];e:{var ae=Qb.get(a);if(ae!==void 0){var ve=cm,Ee=a;switch(a){case"keypress":if(ps(d)===0)break e;case"keydown":case"keyup":ve=TL;break;case"focusin":Ee="focus",ve=um;break;case"focusout":Ee="blur",ve=um;break;case"beforeblur":case"afterblur":ve=um;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Ib;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=vL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=OL;break;case Yb:case Xb:case Jb:ve=gL;break;case Zb:ve=ML;break;case"scroll":ve=mL;break;case"wheel":ve=NL;break;case"copy":case"cut":case"paste":ve=CL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=kb}var Se=(c&4)!==0,fn=!Se&&a==="scroll",Y=Se?ae!==null?ae+"Capture":null:ae;Se=[];for(var G=ee,J;G!==null;){J=G;var se=J.stateNode;if(J.tag===5&&se!==null&&(J=se,Y!==null&&(se=rc(G,Y),se!=null&&Se.push(Sc(G,se,J)))),fn)break;G=G.return}0<Se.length&&(ae=new ve(ae,Ee,null,d,oe),le.push({event:ae,listeners:Se}))}}if((c&7)===0){e:{if(ae=a==="mouseover"||a==="pointerover",ve=a==="mouseout"||a==="pointerout",ae&&d!==Vf&&(Ee=d.relatedTarget||d.fromElement)&&(Oi(Ee)||Ee[Cr]))break e;if((ve||ae)&&(ae=oe.window===oe?oe:(ae=oe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ve?(Ee=d.relatedTarget||d.toElement,ve=ee,Ee=Ee?Oi(Ee):null,Ee!==null&&(fn=Ii(Ee),Ee!==fn||Ee.tag!==5&&Ee.tag!==6)&&(Ee=null)):(ve=null,Ee=ee),ve!==Ee)){if(Se=Ib,se="onMouseLeave",Y="onMouseEnter",G="mouse",(a==="pointerout"||a==="pointerover")&&(Se=kb,se="onPointerLeave",Y="onPointerEnter",G="pointer"),fn=ve==null?ae:Ia(ve),J=Ee==null?ae:Ia(Ee),ae=new Se(se,G+"leave",ve,d,oe),ae.target=fn,ae.relatedTarget=J,se=null,Oi(oe)===ee&&(Se=new Se(Y,G+"enter",Ee,d,oe),Se.target=J,Se.relatedTarget=fn,se=Se),fn=se,ve&&Ee)n:{for(Se=ve,Y=Ee,G=0,J=Se;J;J=Ta(J))G++;for(J=0,se=Y;se;se=Ta(se))J++;for(;0<G-J;)Se=Ta(Se),G--;for(;0<J-G;)Y=Ta(Y),J--;for(;G--;){if(Se===Y||Y!==null&&Se===Y.alternate)break n;Se=Ta(Se),Y=Ta(Y)}Se=null}else Se=null;ve!==null&&iS(le,ae,ve,Se,!1),Ee!==null&&fn!==null&&iS(le,fn,Ee,Se,!0)}}e:{if(ae=ee?Ia(ee):window,ve=ae.nodeName&&ae.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ae.type==="file")var we=FL;else if(jb(ae))if(Bb)we=WL;else{we=GL;var Ae=$L}else(ve=ae.nodeName)&&ve.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(we=HL);if(we&&(we=we(a,ee))){Db(le,we,d,oe);break e}Ae&&Ae(a,ae,ee),a==="focusout"&&(Ae=ae._wrapperState)&&Ae.controlled&&ae.type==="number"&&Gn(ae,"number",ae.value)}switch(Ae=ee?Ia(ee):window,a){case"focusin":(jb(Ae)||Ae.contentEditable==="true")&&(Aa=Ae,pm=ee,Ec=null);break;case"focusout":Ec=pm=Aa=null;break;case"mousedown":ym=!0;break;case"contextmenu":case"mouseup":case"dragend":ym=!1,Kb(le,d,oe);break;case"selectionchange":if(qL)break;case"keydown":case"keyup":Kb(le,d,oe)}var Ue;if(fm)e:{switch(a){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else xa?Lb(a,d)&&(Ie="onCompositionEnd"):a==="keydown"&&d.keyCode===229&&(Ie="onCompositionStart");Ie&&(Mb&&d.locale!=="ko"&&(xa||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&xa&&(Ue=Tb()):(Yr=oe,om="value"in Yr?Yr.value:Yr.textContent,xa=!0)),Ae=ws(ee,Ie),0<Ae.length&&(Ie=new Ob(Ie,a,null,d,oe),le.push({event:Ie,listeners:Ae}),Ue?Ie.data=Ue:(Ue=Rb(d),Ue!==null&&(Ie.data=Ue)))),(Ue=RL?jL(a,d):DL(a,d))&&(ee=ws(ee,"onBeforeInput"),0<ee.length&&(oe=new Ob("onBeforeInput","beforeinput",null,d,oe),le.push({event:oe,listeners:ee}),oe.data=Ue))}tS(le,c)})}function Sc(a,c,d){return{instance:a,listener:c,currentTarget:d}}function ws(a,c){for(var d=c+"Capture",v=[];a!==null;){var C=a,S=C.stateNode;C.tag===5&&S!==null&&(C=S,S=rc(a,d),S!=null&&v.unshift(Sc(a,S,C)),S=rc(a,c),S!=null&&v.push(Sc(a,S,C))),a=a.return}return v}function Ta(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function iS(a,c,d,v,C){for(var S=c._reactName,k=[];d!==null&&d!==v;){var L=d,F=L.alternate,ee=L.stateNode;if(F!==null&&F===v)break;L.tag===5&&ee!==null&&(L=ee,C?(F=rc(d,S),F!=null&&k.unshift(Sc(d,F,L))):C||(F=rc(d,S),F!=null&&k.push(Sc(d,F,L)))),d=d.return}k.length!==0&&a.push({event:c,listeners:k})}var ZL=/\r\n?/g,QL=/\u0000|\uFFFD/g;function aS(a){return(typeof a=="string"?a:""+a).replace(ZL,`
`).replace(QL,"")}function xs(a,c,d){if(c=aS(c),aS(a)!==c&&d)throw Error(t(425))}function As(){}var wm=null,xm=null;function Am(a,c){return a==="textarea"||a==="noscript"||typeof c.children=="string"||typeof c.children=="number"||typeof c.dangerouslySetInnerHTML=="object"&&c.dangerouslySetInnerHTML!==null&&c.dangerouslySetInnerHTML.__html!=null}var Um=typeof setTimeout=="function"?setTimeout:void 0,eR=typeof clearTimeout=="function"?clearTimeout:void 0,oS=typeof Promise=="function"?Promise:void 0,nR=typeof queueMicrotask=="function"?queueMicrotask:typeof oS<"u"?function(a){return oS.resolve(null).then(a).catch(tR)}:Um;function tR(a){setTimeout(function(){throw a})}function Tm(a,c){var d=c,v=0;do{var C=d.nextSibling;if(a.removeChild(d),C&&C.nodeType===8)if(d=C.data,d==="/$"){if(v===0){a.removeChild(C),fc(c);return}v--}else d!=="$"&&d!=="$?"&&d!=="$!"||v++;d=C}while(d);fc(c)}function Jr(a){for(;a!=null;a=a.nextSibling){var c=a.nodeType;if(c===1||c===3)break;if(c===8){if(c=a.data,c==="$"||c==="$!"||c==="$?")break;if(c==="/$")return null}}return a}function cS(a){a=a.previousSibling;for(var c=0;a;){if(a.nodeType===8){var d=a.data;if(d==="$"||d==="$!"||d==="$?"){if(c===0)return a;c--}else d==="/$"&&c++}a=a.previousSibling}return null}var Pa=Math.random().toString(36).slice(2),tr="__reactFiber$"+Pa,wc="__reactProps$"+Pa,Cr="__reactContainer$"+Pa,Pm="__reactEvents$"+Pa,rR="__reactListeners$"+Pa,iR="__reactHandles$"+Pa;function Oi(a){var c=a[tr];if(c)return c;for(var d=a.parentNode;d;){if(c=d[Cr]||d[tr]){if(d=c.alternate,c.child!==null||d!==null&&d.child!==null)for(a=cS(a);a!==null;){if(d=a[tr])return d;a=cS(a)}return c}a=d,d=a.parentNode}return null}function xc(a){return a=a[tr]||a[Cr],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function Ia(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(t(33))}function Us(a){return a[wc]||null}var Im=[],Oa=-1;function Zr(a){return{current:a}}function en(a){0>Oa||(a.current=Im[Oa],Im[Oa]=null,Oa--)}function Je(a,c){Oa++,Im[Oa]=a.current,a.current=c}var Qr={},Ln=Zr(Qr),Yn=Zr(!1),ki=Qr;function ka(a,c){var d=a.type.contextTypes;if(!d)return Qr;var v=a.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===c)return v.__reactInternalMemoizedMaskedChildContext;var C={},S;for(S in d)C[S]=c[S];return v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=c,a.__reactInternalMemoizedMaskedChildContext=C),C}function Xn(a){return a=a.childContextTypes,a!=null}function Ts(){en(Yn),en(Ln)}function lS(a,c,d){if(Ln.current!==Qr)throw Error(t(168));Je(Ln,c),Je(Yn,d)}function sS(a,c,d){var v=a.stateNode;if(c=c.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var C in v)if(!(C in c))throw Error(t(108,ce(a)||"Unknown",C));return Q({},d,v)}function Ps(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Qr,ki=Ln.current,Je(Ln,a),Je(Yn,Yn.current),!0}function uS(a,c,d){var v=a.stateNode;if(!v)throw Error(t(169));d?(a=sS(a,c,ki),v.__reactInternalMemoizedMergedChildContext=a,en(Yn),en(Ln),Je(Ln,a)):en(Yn),Je(Yn,d)}var br=null,Is=!1,Om=!1;function dS(a){br===null?br=[a]:br.push(a)}function aR(a){Is=!0,dS(a)}function ei(){if(!Om&&br!==null){Om=!0;var a=0,c=We;try{var d=br;for(We=1;a<d.length;a++){var v=d[a];do v=v(!0);while(v!==null)}br=null,Is=!1}catch(C){throw br!==null&&(br=br.slice(a+1)),mb(Zf,ei),C}finally{We=c,Om=!1}}return null}var Ma=[],_a=0,Os=null,ks=0,yt=[],gt=0,Mi=null,Sr=1,wr="";function _i(a,c){Ma[_a++]=ks,Ma[_a++]=Os,Os=a,ks=c}function fS(a,c,d){yt[gt++]=Sr,yt[gt++]=wr,yt[gt++]=Mi,Mi=a;var v=Sr;a=wr;var C=32-Nt(v)-1;v&=~(1<<C),d+=1;var S=32-Nt(c)+C;if(30<S){var k=C-C%5;S=(v&(1<<k)-1).toString(32),v>>=k,C-=k,Sr=1<<32-Nt(c)+C|d<<C|v,wr=S+a}else Sr=1<<S|d<<C|v,wr=a}function km(a){a.return!==null&&(_i(a,1),fS(a,1,0))}function Mm(a){for(;a===Os;)Os=Ma[--_a],Ma[_a]=null,ks=Ma[--_a],Ma[_a]=null;for(;a===Mi;)Mi=yt[--gt],yt[gt]=null,wr=yt[--gt],yt[gt]=null,Sr=yt[--gt],yt[gt]=null}var ct=null,lt=null,an=!1,Rt=null;function mS(a,c){var d=St(5,null,null,0);d.elementType="DELETED",d.stateNode=c,d.return=a,c=a.deletions,c===null?(a.deletions=[d],a.flags|=16):c.push(d)}function hS(a,c){switch(a.tag){case 5:var d=a.type;return c=c.nodeType!==1||d.toLowerCase()!==c.nodeName.toLowerCase()?null:c,c!==null?(a.stateNode=c,ct=a,lt=Jr(c.firstChild),!0):!1;case 6:return c=a.pendingProps===""||c.nodeType!==3?null:c,c!==null?(a.stateNode=c,ct=a,lt=null,!0):!1;case 13:return c=c.nodeType!==8?null:c,c!==null?(d=Mi!==null?{id:Sr,overflow:wr}:null,a.memoizedState={dehydrated:c,treeContext:d,retryLane:1073741824},d=St(18,null,null,0),d.stateNode=c,d.return=a,a.child=d,ct=a,lt=null,!0):!1;default:return!1}}function _m(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Nm(a){if(an){var c=lt;if(c){var d=c;if(!hS(a,c)){if(_m(a))throw Error(t(418));c=Jr(d.nextSibling);var v=ct;c&&hS(a,c)?mS(v,d):(a.flags=a.flags&-4097|2,an=!1,ct=a)}}else{if(_m(a))throw Error(t(418));a.flags=a.flags&-4097|2,an=!1,ct=a}}}function vS(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;ct=a}function Ms(a){if(a!==ct)return!1;if(!an)return vS(a),an=!0,!1;var c;if((c=a.tag!==3)&&!(c=a.tag!==5)&&(c=a.type,c=c!=="head"&&c!=="body"&&!Am(a.type,a.memoizedProps)),c&&(c=lt)){if(_m(a))throw pS(),Error(t(418));for(;c;)mS(a,c),c=Jr(c.nextSibling)}if(vS(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(t(317));e:{for(a=a.nextSibling,c=0;a;){if(a.nodeType===8){var d=a.data;if(d==="/$"){if(c===0){lt=Jr(a.nextSibling);break e}c--}else d!=="$"&&d!=="$!"&&d!=="$?"||c++}a=a.nextSibling}lt=null}}else lt=ct?Jr(a.stateNode.nextSibling):null;return!0}function pS(){for(var a=lt;a;)a=Jr(a.nextSibling)}function Na(){lt=ct=null,an=!1}function Lm(a){Rt===null?Rt=[a]:Rt.push(a)}var oR=I.ReactCurrentBatchConfig;function Ac(a,c,d){if(a=d.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(t(309));var v=d.stateNode}if(!v)throw Error(t(147,a));var C=v,S=""+a;return c!==null&&c.ref!==null&&typeof c.ref=="function"&&c.ref._stringRef===S?c.ref:(c=function(k){var L=C.refs;k===null?delete L[S]:L[S]=k},c._stringRef=S,c)}if(typeof a!="string")throw Error(t(284));if(!d._owner)throw Error(t(290,a))}return a}function _s(a,c){throw a=Object.prototype.toString.call(c),Error(t(31,a==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":a))}function yS(a){var c=a._init;return c(a._payload)}function gS(a){function c(Y,G){if(a){var J=Y.deletions;J===null?(Y.deletions=[G],Y.flags|=16):J.push(G)}}function d(Y,G){if(!a)return null;for(;G!==null;)c(Y,G),G=G.sibling;return null}function v(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function C(Y,G){return Y=li(Y,G),Y.index=0,Y.sibling=null,Y}function S(Y,G,J){return Y.index=J,a?(J=Y.alternate,J!==null?(J=J.index,J<G?(Y.flags|=2,G):J):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function k(Y){return a&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,G,J,se){return G===null||G.tag!==6?(G=Uh(J,Y.mode,se),G.return=Y,G):(G=C(G,J),G.return=Y,G)}function F(Y,G,J,se){var we=J.type;return we===T?oe(Y,G,J.props.children,se,J.key):G!==null&&(G.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===W&&yS(we)===G.type)?(se=C(G,J.props),se.ref=Ac(Y,G,J),se.return=Y,se):(se=ru(J.type,J.key,J.props,null,Y.mode,se),se.ref=Ac(Y,G,J),se.return=Y,se)}function ee(Y,G,J,se){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Th(J,Y.mode,se),G.return=Y,G):(G=C(G,J.children||[]),G.return=Y,G)}function oe(Y,G,J,se,we){return G===null||G.tag!==7?(G=Fi(J,Y.mode,se,we),G.return=Y,G):(G=C(G,J),G.return=Y,G)}function le(Y,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Uh(""+G,Y.mode,J),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return J=ru(G.type,G.key,G.props,null,Y.mode,J),J.ref=Ac(Y,null,G),J.return=Y,J;case P:return G=Th(G,Y.mode,J),G.return=Y,G;case W:var se=G._init;return le(Y,se(G._payload),J)}if(er(G)||Z(G))return G=Fi(G,Y.mode,J,null),G.return=Y,G;_s(Y,G)}return null}function ae(Y,G,J,se){var we=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return we!==null?null:L(Y,G,""+J,se);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case A:return J.key===we?F(Y,G,J,se):null;case P:return J.key===we?ee(Y,G,J,se):null;case W:return we=J._init,ae(Y,G,we(J._payload),se)}if(er(J)||Z(J))return we!==null?null:oe(Y,G,J,se,null);_s(Y,J)}return null}function ve(Y,G,J,se,we){if(typeof se=="string"&&se!==""||typeof se=="number")return Y=Y.get(J)||null,L(G,Y,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case A:return Y=Y.get(se.key===null?J:se.key)||null,F(G,Y,se,we);case P:return Y=Y.get(se.key===null?J:se.key)||null,ee(G,Y,se,we);case W:var Ae=se._init;return ve(Y,G,J,Ae(se._payload),we)}if(er(se)||Z(se))return Y=Y.get(J)||null,oe(G,Y,se,we,null);_s(G,se)}return null}function Ee(Y,G,J,se){for(var we=null,Ae=null,Ue=G,Ie=G=0,Tn=null;Ue!==null&&Ie<J.length;Ie++){Ue.index>Ie?(Tn=Ue,Ue=null):Tn=Ue.sibling;var Be=ae(Y,Ue,J[Ie],se);if(Be===null){Ue===null&&(Ue=Tn);break}a&&Ue&&Be.alternate===null&&c(Y,Ue),G=S(Be,G,Ie),Ae===null?we=Be:Ae.sibling=Be,Ae=Be,Ue=Tn}if(Ie===J.length)return d(Y,Ue),an&&_i(Y,Ie),we;if(Ue===null){for(;Ie<J.length;Ie++)Ue=le(Y,J[Ie],se),Ue!==null&&(G=S(Ue,G,Ie),Ae===null?we=Ue:Ae.sibling=Ue,Ae=Ue);return an&&_i(Y,Ie),we}for(Ue=v(Y,Ue);Ie<J.length;Ie++)Tn=ve(Ue,Y,Ie,J[Ie],se),Tn!==null&&(a&&Tn.alternate!==null&&Ue.delete(Tn.key===null?Ie:Tn.key),G=S(Tn,G,Ie),Ae===null?we=Tn:Ae.sibling=Tn,Ae=Tn);return a&&Ue.forEach(function(si){return c(Y,si)}),an&&_i(Y,Ie),we}function Se(Y,G,J,se){var we=Z(J);if(typeof we!="function")throw Error(t(150));if(J=we.call(J),J==null)throw Error(t(151));for(var Ae=we=null,Ue=G,Ie=G=0,Tn=null,Be=J.next();Ue!==null&&!Be.done;Ie++,Be=J.next()){Ue.index>Ie?(Tn=Ue,Ue=null):Tn=Ue.sibling;var si=ae(Y,Ue,Be.value,se);if(si===null){Ue===null&&(Ue=Tn);break}a&&Ue&&si.alternate===null&&c(Y,Ue),G=S(si,G,Ie),Ae===null?we=si:Ae.sibling=si,Ae=si,Ue=Tn}if(Be.done)return d(Y,Ue),an&&_i(Y,Ie),we;if(Ue===null){for(;!Be.done;Ie++,Be=J.next())Be=le(Y,Be.value,se),Be!==null&&(G=S(Be,G,Ie),Ae===null?we=Be:Ae.sibling=Be,Ae=Be);return an&&_i(Y,Ie),we}for(Ue=v(Y,Ue);!Be.done;Ie++,Be=J.next())Be=ve(Ue,Y,Ie,Be.value,se),Be!==null&&(a&&Be.alternate!==null&&Ue.delete(Be.key===null?Ie:Be.key),G=S(Be,G,Ie),Ae===null?we=Be:Ae.sibling=Be,Ae=Be);return a&&Ue.forEach(function(BR){return c(Y,BR)}),an&&_i(Y,Ie),we}function fn(Y,G,J,se){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case A:e:{for(var we=J.key,Ae=G;Ae!==null;){if(Ae.key===we){if(we=J.type,we===T){if(Ae.tag===7){d(Y,Ae.sibling),G=C(Ae,J.props.children),G.return=Y,Y=G;break e}}else if(Ae.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===W&&yS(we)===Ae.type){d(Y,Ae.sibling),G=C(Ae,J.props),G.ref=Ac(Y,Ae,J),G.return=Y,Y=G;break e}d(Y,Ae);break}else c(Y,Ae);Ae=Ae.sibling}J.type===T?(G=Fi(J.props.children,Y.mode,se,J.key),G.return=Y,Y=G):(se=ru(J.type,J.key,J.props,null,Y.mode,se),se.ref=Ac(Y,G,J),se.return=Y,Y=se)}return k(Y);case P:e:{for(Ae=J.key;G!==null;){if(G.key===Ae)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){d(Y,G.sibling),G=C(G,J.children||[]),G.return=Y,Y=G;break e}else{d(Y,G);break}else c(Y,G);G=G.sibling}G=Th(J,Y.mode,se),G.return=Y,Y=G}return k(Y);case W:return Ae=J._init,fn(Y,G,Ae(J._payload),se)}if(er(J))return Ee(Y,G,J,se);if(Z(J))return Se(Y,G,J,se);_s(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(d(Y,G.sibling),G=C(G,J),G.return=Y,Y=G):(d(Y,G),G=Uh(J,Y.mode,se),G.return=Y,Y=G),k(Y)):d(Y,G)}return fn}var La=gS(!0),ES=gS(!1),Ns=Zr(null),Ls=null,Ra=null,Rm=null;function jm(){Rm=Ra=Ls=null}function Dm(a){var c=Ns.current;en(Ns),a._currentValue=c}function Bm(a,c,d){for(;a!==null;){var v=a.alternate;if((a.childLanes&c)!==c?(a.childLanes|=c,v!==null&&(v.childLanes|=c)):v!==null&&(v.childLanes&c)!==c&&(v.childLanes|=c),a===d)break;a=a.return}}function ja(a,c){Ls=a,Rm=Ra=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&c)!==0&&(Jn=!0),a.firstContext=null)}function Et(a){var c=a._currentValue;if(Rm!==a)if(a={context:a,memoizedValue:c,next:null},Ra===null){if(Ls===null)throw Error(t(308));Ra=a,Ls.dependencies={lanes:0,firstContext:a}}else Ra=Ra.next=a;return c}var Ni=null;function zm(a){Ni===null?Ni=[a]:Ni.push(a)}function CS(a,c,d,v){var C=c.interleaved;return C===null?(d.next=d,zm(c)):(d.next=C.next,C.next=d),c.interleaved=d,xr(a,v)}function xr(a,c){a.lanes|=c;var d=a.alternate;for(d!==null&&(d.lanes|=c),d=a,a=a.return;a!==null;)a.childLanes|=c,d=a.alternate,d!==null&&(d.childLanes|=c),d=a,a=a.return;return d.tag===3?d.stateNode:null}var ni=!1;function Fm(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bS(a,c){a=a.updateQueue,c.updateQueue===a&&(c.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Ar(a,c){return{eventTime:a,lane:c,tag:0,payload:null,callback:null,next:null}}function ti(a,c,d){var v=a.updateQueue;if(v===null)return null;if(v=v.shared,(De&2)!==0){var C=v.pending;return C===null?c.next=c:(c.next=C.next,C.next=c),v.pending=c,xr(a,d)}return C=v.interleaved,C===null?(c.next=c,zm(v)):(c.next=C.next,C.next=c),v.interleaved=c,xr(a,d)}function Rs(a,c,d){if(c=c.updateQueue,c!==null&&(c=c.shared,(d&4194240)!==0)){var v=c.lanes;v&=a.pendingLanes,d|=v,c.lanes=d,nm(a,d)}}function SS(a,c){var d=a.updateQueue,v=a.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var C=null,S=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};S===null?C=S=k:S=S.next=k,d=d.next}while(d!==null);S===null?C=S=c:S=S.next=c}else C=S=c;d={baseState:v.baseState,firstBaseUpdate:C,lastBaseUpdate:S,shared:v.shared,effects:v.effects},a.updateQueue=d;return}a=d.lastBaseUpdate,a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=c}function js(a,c,d,v){var C=a.updateQueue;ni=!1;var S=C.firstBaseUpdate,k=C.lastBaseUpdate,L=C.shared.pending;if(L!==null){C.shared.pending=null;var F=L,ee=F.next;F.next=null,k===null?S=ee:k.next=ee,k=F;var oe=a.alternate;oe!==null&&(oe=oe.updateQueue,L=oe.lastBaseUpdate,L!==k&&(L===null?oe.firstBaseUpdate=ee:L.next=ee,oe.lastBaseUpdate=F))}if(S!==null){var le=C.baseState;k=0,oe=ee=F=null,L=S;do{var ae=L.lane,ve=L.eventTime;if((v&ae)===ae){oe!==null&&(oe=oe.next={eventTime:ve,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ee=a,Se=L;switch(ae=c,ve=d,Se.tag){case 1:if(Ee=Se.payload,typeof Ee=="function"){le=Ee.call(ve,le,ae);break e}le=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Se.payload,ae=typeof Ee=="function"?Ee.call(ve,le,ae):Ee,ae==null)break e;le=Q({},le,ae);break e;case 2:ni=!0}}L.callback!==null&&L.lane!==0&&(a.flags|=64,ae=C.effects,ae===null?C.effects=[L]:ae.push(L))}else ve={eventTime:ve,lane:ae,tag:L.tag,payload:L.payload,callback:L.callback,next:null},oe===null?(ee=oe=ve,F=le):oe=oe.next=ve,k|=ae;if(L=L.next,L===null){if(L=C.shared.pending,L===null)break;ae=L,L=ae.next,ae.next=null,C.lastBaseUpdate=ae,C.shared.pending=null}}while(!0);if(oe===null&&(F=le),C.baseState=F,C.firstBaseUpdate=ee,C.lastBaseUpdate=oe,c=C.shared.interleaved,c!==null){C=c;do k|=C.lane,C=C.next;while(C!==c)}else S===null&&(C.shared.lanes=0);ji|=k,a.lanes=k,a.memoizedState=le}}function wS(a,c,d){if(a=c.effects,c.effects=null,a!==null)for(c=0;c<a.length;c++){var v=a[c],C=v.callback;if(C!==null){if(v.callback=null,v=d,typeof C!="function")throw Error(t(191,C));C.call(v)}}}var Uc={},rr=Zr(Uc),Tc=Zr(Uc),Pc=Zr(Uc);function Li(a){if(a===Uc)throw Error(t(174));return a}function $m(a,c){switch(Je(Pc,c),Je(Tc,a),Je(rr,Uc),a=c.nodeType,a){case 9:case 11:c=(c=c.documentElement)?c.namespaceURI:Gf(null,"");break;default:a=a===8?c.parentNode:c,c=a.namespaceURI||null,a=a.tagName,c=Gf(c,a)}en(rr),Je(rr,c)}function Da(){en(rr),en(Tc),en(Pc)}function xS(a){Li(Pc.current);var c=Li(rr.current),d=Gf(c,a.type);c!==d&&(Je(Tc,a),Je(rr,d))}function Gm(a){Tc.current===a&&(en(rr),en(Tc))}var cn=Zr(0);function Ds(a){for(var c=a;c!==null;){if(c.tag===13){var d=c.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return c}else if(c.tag===19&&c.memoizedProps.revealOrder!==void 0){if((c.flags&128)!==0)return c}else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}return null}var Hm=[];function Wm(){for(var a=0;a<Hm.length;a++)Hm[a]._workInProgressVersionPrimary=null;Hm.length=0}var Bs=I.ReactCurrentDispatcher,Vm=I.ReactCurrentBatchConfig,Ri=0,ln=null,gn=null,An=null,zs=!1,Ic=!1,Oc=0,cR=0;function Rn(){throw Error(t(321))}function Km(a,c){if(c===null)return!1;for(var d=0;d<c.length&&d<a.length;d++)if(!Lt(a[d],c[d]))return!1;return!0}function qm(a,c,d,v,C,S){if(Ri=S,ln=c,c.memoizedState=null,c.updateQueue=null,c.lanes=0,Bs.current=a===null||a.memoizedState===null?dR:fR,a=d(v,C),Ic){S=0;do{if(Ic=!1,Oc=0,25<=S)throw Error(t(301));S+=1,An=gn=null,c.updateQueue=null,Bs.current=mR,a=d(v,C)}while(Ic)}if(Bs.current=Gs,c=gn!==null&&gn.next!==null,Ri=0,An=gn=ln=null,zs=!1,c)throw Error(t(300));return a}function Ym(){var a=Oc!==0;return Oc=0,a}function ir(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?ln.memoizedState=An=a:An=An.next=a,An}function Ct(){if(gn===null){var a=ln.alternate;a=a!==null?a.memoizedState:null}else a=gn.next;var c=An===null?ln.memoizedState:An.next;if(c!==null)An=c,gn=a;else{if(a===null)throw Error(t(310));gn=a,a={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},An===null?ln.memoizedState=An=a:An=An.next=a}return An}function kc(a,c){return typeof c=="function"?c(a):c}function Xm(a){var c=Ct(),d=c.queue;if(d===null)throw Error(t(311));d.lastRenderedReducer=a;var v=gn,C=v.baseQueue,S=d.pending;if(S!==null){if(C!==null){var k=C.next;C.next=S.next,S.next=k}v.baseQueue=C=S,d.pending=null}if(C!==null){S=C.next,v=v.baseState;var L=k=null,F=null,ee=S;do{var oe=ee.lane;if((Ri&oe)===oe)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),v=ee.hasEagerState?ee.eagerState:a(v,ee.action);else{var le={lane:oe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(L=F=le,k=v):F=F.next=le,ln.lanes|=oe,ji|=oe}ee=ee.next}while(ee!==null&&ee!==S);F===null?k=v:F.next=L,Lt(v,c.memoizedState)||(Jn=!0),c.memoizedState=v,c.baseState=k,c.baseQueue=F,d.lastRenderedState=v}if(a=d.interleaved,a!==null){C=a;do S=C.lane,ln.lanes|=S,ji|=S,C=C.next;while(C!==a)}else C===null&&(d.lanes=0);return[c.memoizedState,d.dispatch]}function Jm(a){var c=Ct(),d=c.queue;if(d===null)throw Error(t(311));d.lastRenderedReducer=a;var v=d.dispatch,C=d.pending,S=c.memoizedState;if(C!==null){d.pending=null;var k=C=C.next;do S=a(S,k.action),k=k.next;while(k!==C);Lt(S,c.memoizedState)||(Jn=!0),c.memoizedState=S,c.baseQueue===null&&(c.baseState=S),d.lastRenderedState=S}return[S,v]}function AS(){}function US(a,c){var d=ln,v=Ct(),C=c(),S=!Lt(v.memoizedState,C);if(S&&(v.memoizedState=C,Jn=!0),v=v.queue,Zm(IS.bind(null,d,v,a),[a]),v.getSnapshot!==c||S||An!==null&&An.memoizedState.tag&1){if(d.flags|=2048,Mc(9,PS.bind(null,d,v,C,c),void 0,null),Un===null)throw Error(t(349));(Ri&30)!==0||TS(d,c,C)}return C}function TS(a,c,d){a.flags|=16384,a={getSnapshot:c,value:d},c=ln.updateQueue,c===null?(c={lastEffect:null,stores:null},ln.updateQueue=c,c.stores=[a]):(d=c.stores,d===null?c.stores=[a]:d.push(a))}function PS(a,c,d,v){c.value=d,c.getSnapshot=v,OS(c)&&kS(a)}function IS(a,c,d){return d(function(){OS(c)&&kS(a)})}function OS(a){var c=a.getSnapshot;a=a.value;try{var d=c();return!Lt(a,d)}catch{return!0}}function kS(a){var c=xr(a,1);c!==null&&zt(c,a,1,-1)}function MS(a){var c=ir();return typeof a=="function"&&(a=a()),c.memoizedState=c.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kc,lastRenderedState:a},c.queue=a,a=a.dispatch=uR.bind(null,ln,a),[c.memoizedState,a]}function Mc(a,c,d,v){return a={tag:a,create:c,destroy:d,deps:v,next:null},c=ln.updateQueue,c===null?(c={lastEffect:null,stores:null},ln.updateQueue=c,c.lastEffect=a.next=a):(d=c.lastEffect,d===null?c.lastEffect=a.next=a:(v=d.next,d.next=a,a.next=v,c.lastEffect=a)),a}function _S(){return Ct().memoizedState}function Fs(a,c,d,v){var C=ir();ln.flags|=a,C.memoizedState=Mc(1|c,d,void 0,v===void 0?null:v)}function $s(a,c,d,v){var C=Ct();v=v===void 0?null:v;var S=void 0;if(gn!==null){var k=gn.memoizedState;if(S=k.destroy,v!==null&&Km(v,k.deps)){C.memoizedState=Mc(c,d,S,v);return}}ln.flags|=a,C.memoizedState=Mc(1|c,d,S,v)}function NS(a,c){return Fs(8390656,8,a,c)}function Zm(a,c){return $s(2048,8,a,c)}function LS(a,c){return $s(4,2,a,c)}function RS(a,c){return $s(4,4,a,c)}function jS(a,c){if(typeof c=="function")return a=a(),c(a),function(){c(null)};if(c!=null)return a=a(),c.current=a,function(){c.current=null}}function DS(a,c,d){return d=d!=null?d.concat([a]):null,$s(4,4,jS.bind(null,c,a),d)}function Qm(){}function BS(a,c){var d=Ct();c=c===void 0?null:c;var v=d.memoizedState;return v!==null&&c!==null&&Km(c,v[1])?v[0]:(d.memoizedState=[a,c],a)}function zS(a,c){var d=Ct();c=c===void 0?null:c;var v=d.memoizedState;return v!==null&&c!==null&&Km(c,v[1])?v[0]:(a=a(),d.memoizedState=[a,c],a)}function FS(a,c,d){return(Ri&21)===0?(a.baseState&&(a.baseState=!1,Jn=!0),a.memoizedState=d):(Lt(d,c)||(d=yb(),ln.lanes|=d,ji|=d,a.baseState=!0),c)}function lR(a,c){var d=We;We=d!==0&&4>d?d:4,a(!0);var v=Vm.transition;Vm.transition={};try{a(!1),c()}finally{We=d,Vm.transition=v}}function $S(){return Ct().memoizedState}function sR(a,c,d){var v=oi(a);if(d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},GS(a))HS(c,d);else if(d=CS(a,c,d,v),d!==null){var C=Wn();zt(d,a,v,C),WS(d,c,v)}}function uR(a,c,d){var v=oi(a),C={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(GS(a))HS(c,C);else{var S=a.alternate;if(a.lanes===0&&(S===null||S.lanes===0)&&(S=c.lastRenderedReducer,S!==null))try{var k=c.lastRenderedState,L=S(k,d);if(C.hasEagerState=!0,C.eagerState=L,Lt(L,k)){var F=c.interleaved;F===null?(C.next=C,zm(c)):(C.next=F.next,F.next=C),c.interleaved=C;return}}catch{}finally{}d=CS(a,c,C,v),d!==null&&(C=Wn(),zt(d,a,v,C),WS(d,c,v))}}function GS(a){var c=a.alternate;return a===ln||c!==null&&c===ln}function HS(a,c){Ic=zs=!0;var d=a.pending;d===null?c.next=c:(c.next=d.next,d.next=c),a.pending=c}function WS(a,c,d){if((d&4194240)!==0){var v=c.lanes;v&=a.pendingLanes,d|=v,c.lanes=d,nm(a,d)}}var Gs={readContext:Et,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},dR={readContext:Et,useCallback:function(a,c){return ir().memoizedState=[a,c===void 0?null:c],a},useContext:Et,useEffect:NS,useImperativeHandle:function(a,c,d){return d=d!=null?d.concat([a]):null,Fs(4194308,4,jS.bind(null,c,a),d)},useLayoutEffect:function(a,c){return Fs(4194308,4,a,c)},useInsertionEffect:function(a,c){return Fs(4,2,a,c)},useMemo:function(a,c){var d=ir();return c=c===void 0?null:c,a=a(),d.memoizedState=[a,c],a},useReducer:function(a,c,d){var v=ir();return c=d!==void 0?d(c):c,v.memoizedState=v.baseState=c,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:c},v.queue=a,a=a.dispatch=sR.bind(null,ln,a),[v.memoizedState,a]},useRef:function(a){var c=ir();return a={current:a},c.memoizedState=a},useState:MS,useDebugValue:Qm,useDeferredValue:function(a){return ir().memoizedState=a},useTransition:function(){var a=MS(!1),c=a[0];return a=lR.bind(null,a[1]),ir().memoizedState=a,[c,a]},useMutableSource:function(){},useSyncExternalStore:function(a,c,d){var v=ln,C=ir();if(an){if(d===void 0)throw Error(t(407));d=d()}else{if(d=c(),Un===null)throw Error(t(349));(Ri&30)!==0||TS(v,c,d)}C.memoizedState=d;var S={value:d,getSnapshot:c};return C.queue=S,NS(IS.bind(null,v,S,a),[a]),v.flags|=2048,Mc(9,PS.bind(null,v,S,d,c),void 0,null),d},useId:function(){var a=ir(),c=Un.identifierPrefix;if(an){var d=wr,v=Sr;d=(v&~(1<<32-Nt(v)-1)).toString(32)+d,c=":"+c+"R"+d,d=Oc++,0<d&&(c+="H"+d.toString(32)),c+=":"}else d=cR++,c=":"+c+"r"+d.toString(32)+":";return a.memoizedState=c},unstable_isNewReconciler:!1},fR={readContext:Et,useCallback:BS,useContext:Et,useEffect:Zm,useImperativeHandle:DS,useInsertionEffect:LS,useLayoutEffect:RS,useMemo:zS,useReducer:Xm,useRef:_S,useState:function(){return Xm(kc)},useDebugValue:Qm,useDeferredValue:function(a){var c=Ct();return FS(c,gn.memoizedState,a)},useTransition:function(){var a=Xm(kc)[0],c=Ct().memoizedState;return[a,c]},useMutableSource:AS,useSyncExternalStore:US,useId:$S,unstable_isNewReconciler:!1},mR={readContext:Et,useCallback:BS,useContext:Et,useEffect:Zm,useImperativeHandle:DS,useInsertionEffect:LS,useLayoutEffect:RS,useMemo:zS,useReducer:Jm,useRef:_S,useState:function(){return Jm(kc)},useDebugValue:Qm,useDeferredValue:function(a){var c=Ct();return gn===null?c.memoizedState=a:FS(c,gn.memoizedState,a)},useTransition:function(){var a=Jm(kc)[0],c=Ct().memoizedState;return[a,c]},useMutableSource:AS,useSyncExternalStore:US,useId:$S,unstable_isNewReconciler:!1};function jt(a,c){if(a&&a.defaultProps){c=Q({},c),a=a.defaultProps;for(var d in a)c[d]===void 0&&(c[d]=a[d]);return c}return c}function eh(a,c,d,v){c=a.memoizedState,d=d(v,c),d=d==null?c:Q({},c,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Hs={isMounted:function(a){return(a=a._reactInternals)?Ii(a)===a:!1},enqueueSetState:function(a,c,d){a=a._reactInternals;var v=Wn(),C=oi(a),S=Ar(v,C);S.payload=c,d!=null&&(S.callback=d),c=ti(a,S,C),c!==null&&(zt(c,a,C,v),Rs(c,a,C))},enqueueReplaceState:function(a,c,d){a=a._reactInternals;var v=Wn(),C=oi(a),S=Ar(v,C);S.tag=1,S.payload=c,d!=null&&(S.callback=d),c=ti(a,S,C),c!==null&&(zt(c,a,C,v),Rs(c,a,C))},enqueueForceUpdate:function(a,c){a=a._reactInternals;var d=Wn(),v=oi(a),C=Ar(d,v);C.tag=2,c!=null&&(C.callback=c),c=ti(a,C,v),c!==null&&(zt(c,a,v,d),Rs(c,a,v))}};function VS(a,c,d,v,C,S,k){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(v,S,k):c.prototype&&c.prototype.isPureReactComponent?!gc(d,v)||!gc(C,S):!0}function KS(a,c,d){var v=!1,C=Qr,S=c.contextType;return typeof S=="object"&&S!==null?S=Et(S):(C=Xn(c)?ki:Ln.current,v=c.contextTypes,S=(v=v!=null)?ka(a,C):Qr),c=new c(d,S),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Hs,a.stateNode=c,c._reactInternals=a,v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=C,a.__reactInternalMemoizedMaskedChildContext=S),c}function qS(a,c,d,v){a=c.state,typeof c.componentWillReceiveProps=="function"&&c.componentWillReceiveProps(d,v),typeof c.UNSAFE_componentWillReceiveProps=="function"&&c.UNSAFE_componentWillReceiveProps(d,v),c.state!==a&&Hs.enqueueReplaceState(c,c.state,null)}function nh(a,c,d,v){var C=a.stateNode;C.props=d,C.state=a.memoizedState,C.refs={},Fm(a);var S=c.contextType;typeof S=="object"&&S!==null?C.context=Et(S):(S=Xn(c)?ki:Ln.current,C.context=ka(a,S)),C.state=a.memoizedState,S=c.getDerivedStateFromProps,typeof S=="function"&&(eh(a,c,S,d),C.state=a.memoizedState),typeof c.getDerivedStateFromProps=="function"||typeof C.getSnapshotBeforeUpdate=="function"||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(c=C.state,typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount(),c!==C.state&&Hs.enqueueReplaceState(C,C.state,null),js(a,d,C,v),C.state=a.memoizedState),typeof C.componentDidMount=="function"&&(a.flags|=4194308)}function Ba(a,c){try{var d="",v=c;do d+=ge(v),v=v.return;while(v);var C=d}catch(S){C=`
Error generating stack: `+S.message+`
`+S.stack}return{value:a,source:c,stack:C,digest:null}}function th(a,c,d){return{value:a,source:null,stack:d??null,digest:c??null}}function rh(a,c){try{console.error(c.value)}catch(d){setTimeout(function(){throw d})}}var hR=typeof WeakMap=="function"?WeakMap:Map;function YS(a,c,d){d=Ar(-1,d),d.tag=3,d.payload={element:null};var v=c.value;return d.callback=function(){Js||(Js=!0,gh=v),rh(a,c)},d}function XS(a,c,d){d=Ar(-1,d),d.tag=3;var v=a.type.getDerivedStateFromError;if(typeof v=="function"){var C=c.value;d.payload=function(){return v(C)},d.callback=function(){rh(a,c)}}var S=a.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(d.callback=function(){rh(a,c),typeof v!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var k=c.stack;this.componentDidCatch(c.value,{componentStack:k!==null?k:""})}),d}function JS(a,c,d){var v=a.pingCache;if(v===null){v=a.pingCache=new hR;var C=new Set;v.set(c,C)}else C=v.get(c),C===void 0&&(C=new Set,v.set(c,C));C.has(d)||(C.add(d),a=PR.bind(null,a,c,d),c.then(a,a))}function ZS(a){do{var c;if((c=a.tag===13)&&(c=a.memoizedState,c=c!==null?c.dehydrated!==null:!0),c)return a;a=a.return}while(a!==null);return null}function QS(a,c,d,v,C){return(a.mode&1)===0?(a===c?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(c=Ar(-1,1),c.tag=2,ti(d,c,1))),d.lanes|=1),a):(a.flags|=65536,a.lanes=C,a)}var vR=I.ReactCurrentOwner,Jn=!1;function Hn(a,c,d,v){c.child=a===null?ES(c,null,d,v):La(c,a.child,d,v)}function e0(a,c,d,v,C){d=d.render;var S=c.ref;return ja(c,C),v=qm(a,c,d,v,S,C),d=Ym(),a!==null&&!Jn?(c.updateQueue=a.updateQueue,c.flags&=-2053,a.lanes&=~C,Ur(a,c,C)):(an&&d&&km(c),c.flags|=1,Hn(a,c,v,C),c.child)}function n0(a,c,d,v,C){if(a===null){var S=d.type;return typeof S=="function"&&!Ah(S)&&S.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(c.tag=15,c.type=S,t0(a,c,S,v,C)):(a=ru(d.type,null,v,c,c.mode,C),a.ref=c.ref,a.return=c,c.child=a)}if(S=a.child,(a.lanes&C)===0){var k=S.memoizedProps;if(d=d.compare,d=d!==null?d:gc,d(k,v)&&a.ref===c.ref)return Ur(a,c,C)}return c.flags|=1,a=li(S,v),a.ref=c.ref,a.return=c,c.child=a}function t0(a,c,d,v,C){if(a!==null){var S=a.memoizedProps;if(gc(S,v)&&a.ref===c.ref)if(Jn=!1,c.pendingProps=v=S,(a.lanes&C)!==0)(a.flags&131072)!==0&&(Jn=!0);else return c.lanes=a.lanes,Ur(a,c,C)}return ih(a,c,d,v,C)}function r0(a,c,d){var v=c.pendingProps,C=v.children,S=a!==null?a.memoizedState:null;if(v.mode==="hidden")if((c.mode&1)===0)c.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(Fa,st),st|=d;else{if((d&1073741824)===0)return a=S!==null?S.baseLanes|d:d,c.lanes=c.childLanes=1073741824,c.memoizedState={baseLanes:a,cachePool:null,transitions:null},c.updateQueue=null,Je(Fa,st),st|=a,null;c.memoizedState={baseLanes:0,cachePool:null,transitions:null},v=S!==null?S.baseLanes:d,Je(Fa,st),st|=v}else S!==null?(v=S.baseLanes|d,c.memoizedState=null):v=d,Je(Fa,st),st|=v;return Hn(a,c,C,d),c.child}function i0(a,c){var d=c.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(c.flags|=512,c.flags|=2097152)}function ih(a,c,d,v,C){var S=Xn(d)?ki:Ln.current;return S=ka(c,S),ja(c,C),d=qm(a,c,d,v,S,C),v=Ym(),a!==null&&!Jn?(c.updateQueue=a.updateQueue,c.flags&=-2053,a.lanes&=~C,Ur(a,c,C)):(an&&v&&km(c),c.flags|=1,Hn(a,c,d,C),c.child)}function a0(a,c,d,v,C){if(Xn(d)){var S=!0;Ps(c)}else S=!1;if(ja(c,C),c.stateNode===null)Vs(a,c),KS(c,d,v),nh(c,d,v,C),v=!0;else if(a===null){var k=c.stateNode,L=c.memoizedProps;k.props=L;var F=k.context,ee=d.contextType;typeof ee=="object"&&ee!==null?ee=Et(ee):(ee=Xn(d)?ki:Ln.current,ee=ka(c,ee));var oe=d.getDerivedStateFromProps,le=typeof oe=="function"||typeof k.getSnapshotBeforeUpdate=="function";le||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==v||F!==ee)&&qS(c,k,v,ee),ni=!1;var ae=c.memoizedState;k.state=ae,js(c,v,k,C),F=c.memoizedState,L!==v||ae!==F||Yn.current||ni?(typeof oe=="function"&&(eh(c,d,oe,v),F=c.memoizedState),(L=ni||VS(c,d,L,v,ae,F,ee))?(le||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(c.flags|=4194308)):(typeof k.componentDidMount=="function"&&(c.flags|=4194308),c.memoizedProps=v,c.memoizedState=F),k.props=v,k.state=F,k.context=ee,v=L):(typeof k.componentDidMount=="function"&&(c.flags|=4194308),v=!1)}else{k=c.stateNode,bS(a,c),L=c.memoizedProps,ee=c.type===c.elementType?L:jt(c.type,L),k.props=ee,le=c.pendingProps,ae=k.context,F=d.contextType,typeof F=="object"&&F!==null?F=Et(F):(F=Xn(d)?ki:Ln.current,F=ka(c,F));var ve=d.getDerivedStateFromProps;(oe=typeof ve=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(L!==le||ae!==F)&&qS(c,k,v,F),ni=!1,ae=c.memoizedState,k.state=ae,js(c,v,k,C);var Ee=c.memoizedState;L!==le||ae!==Ee||Yn.current||ni?(typeof ve=="function"&&(eh(c,d,ve,v),Ee=c.memoizedState),(ee=ni||VS(c,d,ee,v,ae,Ee,F)||!1)?(oe||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(v,Ee,F),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(v,Ee,F)),typeof k.componentDidUpdate=="function"&&(c.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(c.flags|=1024)):(typeof k.componentDidUpdate!="function"||L===a.memoizedProps&&ae===a.memoizedState||(c.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===a.memoizedProps&&ae===a.memoizedState||(c.flags|=1024),c.memoizedProps=v,c.memoizedState=Ee),k.props=v,k.state=Ee,k.context=F,v=ee):(typeof k.componentDidUpdate!="function"||L===a.memoizedProps&&ae===a.memoizedState||(c.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||L===a.memoizedProps&&ae===a.memoizedState||(c.flags|=1024),v=!1)}return ah(a,c,d,v,S,C)}function ah(a,c,d,v,C,S){i0(a,c);var k=(c.flags&128)!==0;if(!v&&!k)return C&&uS(c,d,!1),Ur(a,c,S);v=c.stateNode,vR.current=c;var L=k&&typeof d.getDerivedStateFromError!="function"?null:v.render();return c.flags|=1,a!==null&&k?(c.child=La(c,a.child,null,S),c.child=La(c,null,L,S)):Hn(a,c,L,S),c.memoizedState=v.state,C&&uS(c,d,!0),c.child}function o0(a){var c=a.stateNode;c.pendingContext?lS(a,c.pendingContext,c.pendingContext!==c.context):c.context&&lS(a,c.context,!1),$m(a,c.containerInfo)}function c0(a,c,d,v,C){return Na(),Lm(C),c.flags|=256,Hn(a,c,d,v),c.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ch(a){return{baseLanes:a,cachePool:null,transitions:null}}function l0(a,c,d){var v=c.pendingProps,C=cn.current,S=!1,k=(c.flags&128)!==0,L;if((L=k)||(L=a!==null&&a.memoizedState===null?!1:(C&2)!==0),L?(S=!0,c.flags&=-129):(a===null||a.memoizedState!==null)&&(C|=1),Je(cn,C&1),a===null)return Nm(c),a=c.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((c.mode&1)===0?c.lanes=1:a.data==="$!"?c.lanes=8:c.lanes=1073741824,null):(k=v.children,a=v.fallback,S?(v=c.mode,S=c.child,k={mode:"hidden",children:k},(v&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=k):S=iu(k,v,0,null),a=Fi(a,v,d,null),S.return=c,a.return=c,S.sibling=a,c.child=S,c.child.memoizedState=ch(d),c.memoizedState=oh,a):lh(c,k));if(C=a.memoizedState,C!==null&&(L=C.dehydrated,L!==null))return pR(a,c,k,v,L,C,d);if(S){S=v.fallback,k=c.mode,C=a.child,L=C.sibling;var F={mode:"hidden",children:v.children};return(k&1)===0&&c.child!==C?(v=c.child,v.childLanes=0,v.pendingProps=F,c.deletions=null):(v=li(C,F),v.subtreeFlags=C.subtreeFlags&14680064),L!==null?S=li(L,S):(S=Fi(S,k,d,null),S.flags|=2),S.return=c,v.return=c,v.sibling=S,c.child=v,v=S,S=c.child,k=a.child.memoizedState,k=k===null?ch(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},S.memoizedState=k,S.childLanes=a.childLanes&~d,c.memoizedState=oh,v}return S=a.child,a=S.sibling,v=li(S,{mode:"visible",children:v.children}),(c.mode&1)===0&&(v.lanes=d),v.return=c,v.sibling=null,a!==null&&(d=c.deletions,d===null?(c.deletions=[a],c.flags|=16):d.push(a)),c.child=v,c.memoizedState=null,v}function lh(a,c){return c=iu({mode:"visible",children:c},a.mode,0,null),c.return=a,a.child=c}function Ws(a,c,d,v){return v!==null&&Lm(v),La(c,a.child,null,d),a=lh(c,c.pendingProps.children),a.flags|=2,c.memoizedState=null,a}function pR(a,c,d,v,C,S,k){if(d)return c.flags&256?(c.flags&=-257,v=th(Error(t(422))),Ws(a,c,k,v)):c.memoizedState!==null?(c.child=a.child,c.flags|=128,null):(S=v.fallback,C=c.mode,v=iu({mode:"visible",children:v.children},C,0,null),S=Fi(S,C,k,null),S.flags|=2,v.return=c,S.return=c,v.sibling=S,c.child=v,(c.mode&1)!==0&&La(c,a.child,null,k),c.child.memoizedState=ch(k),c.memoizedState=oh,S);if((c.mode&1)===0)return Ws(a,c,k,null);if(C.data==="$!"){if(v=C.nextSibling&&C.nextSibling.dataset,v)var L=v.dgst;return v=L,S=Error(t(419)),v=th(S,v,void 0),Ws(a,c,k,v)}if(L=(k&a.childLanes)!==0,Jn||L){if(v=Un,v!==null){switch(k&-k){case 4:C=2;break;case 16:C=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:C=32;break;case 536870912:C=268435456;break;default:C=0}C=(C&(v.suspendedLanes|k))!==0?0:C,C!==0&&C!==S.retryLane&&(S.retryLane=C,xr(a,C),zt(v,a,C,-1))}return xh(),v=th(Error(t(421))),Ws(a,c,k,v)}return C.data==="$?"?(c.flags|=128,c.child=a.child,c=IR.bind(null,a),C._reactRetry=c,null):(a=S.treeContext,lt=Jr(C.nextSibling),ct=c,an=!0,Rt=null,a!==null&&(yt[gt++]=Sr,yt[gt++]=wr,yt[gt++]=Mi,Sr=a.id,wr=a.overflow,Mi=c),c=lh(c,v.children),c.flags|=4096,c)}function s0(a,c,d){a.lanes|=c;var v=a.alternate;v!==null&&(v.lanes|=c),Bm(a.return,c,d)}function sh(a,c,d,v,C){var S=a.memoizedState;S===null?a.memoizedState={isBackwards:c,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:C}:(S.isBackwards=c,S.rendering=null,S.renderingStartTime=0,S.last=v,S.tail=d,S.tailMode=C)}function u0(a,c,d){var v=c.pendingProps,C=v.revealOrder,S=v.tail;if(Hn(a,c,v.children,d),v=cn.current,(v&2)!==0)v=v&1|2,c.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=c.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&s0(a,d,c);else if(a.tag===19)s0(a,d,c);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break e;for(;a.sibling===null;){if(a.return===null||a.return===c)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}v&=1}if(Je(cn,v),(c.mode&1)===0)c.memoizedState=null;else switch(C){case"forwards":for(d=c.child,C=null;d!==null;)a=d.alternate,a!==null&&Ds(a)===null&&(C=d),d=d.sibling;d=C,d===null?(C=c.child,c.child=null):(C=d.sibling,d.sibling=null),sh(c,!1,C,d,S);break;case"backwards":for(d=null,C=c.child,c.child=null;C!==null;){if(a=C.alternate,a!==null&&Ds(a)===null){c.child=C;break}a=C.sibling,C.sibling=d,d=C,C=a}sh(c,!0,d,null,S);break;case"together":sh(c,!1,null,null,void 0);break;default:c.memoizedState=null}return c.child}function Vs(a,c){(c.mode&1)===0&&a!==null&&(a.alternate=null,c.alternate=null,c.flags|=2)}function Ur(a,c,d){if(a!==null&&(c.dependencies=a.dependencies),ji|=c.lanes,(d&c.childLanes)===0)return null;if(a!==null&&c.child!==a.child)throw Error(t(153));if(c.child!==null){for(a=c.child,d=li(a,a.pendingProps),c.child=d,d.return=c;a.sibling!==null;)a=a.sibling,d=d.sibling=li(a,a.pendingProps),d.return=c;d.sibling=null}return c.child}function yR(a,c,d){switch(c.tag){case 3:o0(c),Na();break;case 5:xS(c);break;case 1:Xn(c.type)&&Ps(c);break;case 4:$m(c,c.stateNode.containerInfo);break;case 10:var v=c.type._context,C=c.memoizedProps.value;Je(Ns,v._currentValue),v._currentValue=C;break;case 13:if(v=c.memoizedState,v!==null)return v.dehydrated!==null?(Je(cn,cn.current&1),c.flags|=128,null):(d&c.child.childLanes)!==0?l0(a,c,d):(Je(cn,cn.current&1),a=Ur(a,c,d),a!==null?a.sibling:null);Je(cn,cn.current&1);break;case 19:if(v=(d&c.childLanes)!==0,(a.flags&128)!==0){if(v)return u0(a,c,d);c.flags|=128}if(C=c.memoizedState,C!==null&&(C.rendering=null,C.tail=null,C.lastEffect=null),Je(cn,cn.current),v)break;return null;case 22:case 23:return c.lanes=0,r0(a,c,d)}return Ur(a,c,d)}var d0,uh,f0,m0;d0=function(a,c){for(var d=c.child;d!==null;){if(d.tag===5||d.tag===6)a.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===c)break;for(;d.sibling===null;){if(d.return===null||d.return===c)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},uh=function(){},f0=function(a,c,d,v){var C=a.memoizedProps;if(C!==v){a=c.stateNode,Li(rr.current);var S=null;switch(d){case"input":C=Pe(a,C),v=Pe(a,v),S=[];break;case"select":C=Q({},C,{value:void 0}),v=Q({},v,{value:void 0}),S=[];break;case"textarea":C=_t(a,C),v=_t(a,v),S=[];break;default:typeof C.onClick!="function"&&typeof v.onClick=="function"&&(a.onclick=As)}Hf(d,v);var k;d=null;for(ee in C)if(!v.hasOwnProperty(ee)&&C.hasOwnProperty(ee)&&C[ee]!=null)if(ee==="style"){var L=C[ee];for(k in L)L.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(i.hasOwnProperty(ee)?S||(S=[]):(S=S||[]).push(ee,null));for(ee in v){var F=v[ee];if(L=C!=null?C[ee]:void 0,v.hasOwnProperty(ee)&&F!==L&&(F!=null||L!=null))if(ee==="style")if(L){for(k in L)!L.hasOwnProperty(k)||F&&F.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in F)F.hasOwnProperty(k)&&L[k]!==F[k]&&(d||(d={}),d[k]=F[k])}else d||(S||(S=[]),S.push(ee,d)),d=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(S=S||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(S=S||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(i.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&Qe("scroll",a),S||L===F||(S=[])):(S=S||[]).push(ee,F))}d&&(S=S||[]).push("style",d);var ee=S;(c.updateQueue=ee)&&(c.flags|=4)}},m0=function(a,c,d,v){d!==v&&(c.flags|=4)};function _c(a,c){if(!an)switch(a.tailMode){case"hidden":c=a.tail;for(var d=null;c!==null;)c.alternate!==null&&(d=c),c=c.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?c||a.tail===null?a.tail=null:a.tail.sibling=null:v.sibling=null}}function jn(a){var c=a.alternate!==null&&a.alternate.child===a.child,d=0,v=0;if(c)for(var C=a.child;C!==null;)d|=C.lanes|C.childLanes,v|=C.subtreeFlags&14680064,v|=C.flags&14680064,C.return=a,C=C.sibling;else for(C=a.child;C!==null;)d|=C.lanes|C.childLanes,v|=C.subtreeFlags,v|=C.flags,C.return=a,C=C.sibling;return a.subtreeFlags|=v,a.childLanes=d,c}function gR(a,c,d){var v=c.pendingProps;switch(Mm(c),c.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(c),null;case 1:return Xn(c.type)&&Ts(),jn(c),null;case 3:return v=c.stateNode,Da(),en(Yn),en(Ln),Wm(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(a===null||a.child===null)&&(Ms(c)?c.flags|=4:a===null||a.memoizedState.isDehydrated&&(c.flags&256)===0||(c.flags|=1024,Rt!==null&&(bh(Rt),Rt=null))),uh(a,c),jn(c),null;case 5:Gm(c);var C=Li(Pc.current);if(d=c.type,a!==null&&c.stateNode!=null)f0(a,c,d,v,C),a.ref!==c.ref&&(c.flags|=512,c.flags|=2097152);else{if(!v){if(c.stateNode===null)throw Error(t(166));return jn(c),null}if(a=Li(rr.current),Ms(c)){v=c.stateNode,d=c.type;var S=c.memoizedProps;switch(v[tr]=c,v[wc]=S,a=(c.mode&1)!==0,d){case"dialog":Qe("cancel",v),Qe("close",v);break;case"iframe":case"object":case"embed":Qe("load",v);break;case"video":case"audio":for(C=0;C<Cc.length;C++)Qe(Cc[C],v);break;case"source":Qe("error",v);break;case"img":case"image":case"link":Qe("error",v),Qe("load",v);break;case"details":Qe("toggle",v);break;case"input":Ve(v,S),Qe("invalid",v);break;case"select":v._wrapperState={wasMultiple:!!S.multiple},Qe("invalid",v);break;case"textarea":Ea(v,S),Qe("invalid",v)}Hf(d,S),C=null;for(var k in S)if(S.hasOwnProperty(k)){var L=S[k];k==="children"?typeof L=="string"?v.textContent!==L&&(S.suppressHydrationWarning!==!0&&xs(v.textContent,L,a),C=["children",L]):typeof L=="number"&&v.textContent!==""+L&&(S.suppressHydrationWarning!==!0&&xs(v.textContent,L,a),C=["children",""+L]):i.hasOwnProperty(k)&&L!=null&&k==="onScroll"&&Qe("scroll",v)}switch(d){case"input":me(v),at(v,S,!0);break;case"textarea":me(v),ec(v);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(v.onclick=As)}v=C,c.updateQueue=v,v!==null&&(c.flags|=4)}else{k=C.nodeType===9?C:C.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=QC(d)),a==="http://www.w3.org/1999/xhtml"?d==="script"?(a=k.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof v.is=="string"?a=k.createElement(d,{is:v.is}):(a=k.createElement(d),d==="select"&&(k=a,v.multiple?k.multiple=!0:v.size&&(k.size=v.size))):a=k.createElementNS(a,d),a[tr]=c,a[wc]=v,d0(a,c,!1,!1),c.stateNode=a;e:{switch(k=Wf(d,v),d){case"dialog":Qe("cancel",a),Qe("close",a),C=v;break;case"iframe":case"object":case"embed":Qe("load",a),C=v;break;case"video":case"audio":for(C=0;C<Cc.length;C++)Qe(Cc[C],a);C=v;break;case"source":Qe("error",a),C=v;break;case"img":case"image":case"link":Qe("error",a),Qe("load",a),C=v;break;case"details":Qe("toggle",a),C=v;break;case"input":Ve(a,v),C=Pe(a,v),Qe("invalid",a);break;case"option":C=v;break;case"select":a._wrapperState={wasMultiple:!!v.multiple},C=Q({},v,{value:void 0}),Qe("invalid",a);break;case"textarea":Ea(a,v),C=_t(a,v),Qe("invalid",a);break;default:C=v}Hf(d,C),L=C;for(S in L)if(L.hasOwnProperty(S)){var F=L[S];S==="style"?tb(a,F):S==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&eb(a,F)):S==="children"?typeof F=="string"?(d!=="textarea"||F!=="")&&nc(a,F):typeof F=="number"&&nc(a,""+F):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(i.hasOwnProperty(S)?F!=null&&S==="onScroll"&&Qe("scroll",a):F!=null&&U(a,S,F,k))}switch(d){case"input":me(a),at(a,v,!1);break;case"textarea":me(a),ec(a);break;case"option":v.value!=null&&a.setAttribute("value",""+he(v.value));break;case"select":a.multiple=!!v.multiple,S=v.value,S!=null?qn(a,!!v.multiple,S,!1):v.defaultValue!=null&&qn(a,!!v.multiple,v.defaultValue,!0);break;default:typeof C.onClick=="function"&&(a.onclick=As)}switch(d){case"button":case"input":case"select":case"textarea":v=!!v.autoFocus;break e;case"img":v=!0;break e;default:v=!1}}v&&(c.flags|=4)}c.ref!==null&&(c.flags|=512,c.flags|=2097152)}return jn(c),null;case 6:if(a&&c.stateNode!=null)m0(a,c,a.memoizedProps,v);else{if(typeof v!="string"&&c.stateNode===null)throw Error(t(166));if(d=Li(Pc.current),Li(rr.current),Ms(c)){if(v=c.stateNode,d=c.memoizedProps,v[tr]=c,(S=v.nodeValue!==d)&&(a=ct,a!==null))switch(a.tag){case 3:xs(v.nodeValue,d,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&xs(v.nodeValue,d,(a.mode&1)!==0)}S&&(c.flags|=4)}else v=(d.nodeType===9?d:d.ownerDocument).createTextNode(v),v[tr]=c,c.stateNode=v}return jn(c),null;case 13:if(en(cn),v=c.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(an&&lt!==null&&(c.mode&1)!==0&&(c.flags&128)===0)pS(),Na(),c.flags|=98560,S=!1;else if(S=Ms(c),v!==null&&v.dehydrated!==null){if(a===null){if(!S)throw Error(t(318));if(S=c.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[tr]=c}else Na(),(c.flags&128)===0&&(c.memoizedState=null),c.flags|=4;jn(c),S=!1}else Rt!==null&&(bh(Rt),Rt=null),S=!0;if(!S)return c.flags&65536?c:null}return(c.flags&128)!==0?(c.lanes=d,c):(v=v!==null,v!==(a!==null&&a.memoizedState!==null)&&v&&(c.child.flags|=8192,(c.mode&1)!==0&&(a===null||(cn.current&1)!==0?En===0&&(En=3):xh())),c.updateQueue!==null&&(c.flags|=4),jn(c),null);case 4:return Da(),uh(a,c),a===null&&bc(c.stateNode.containerInfo),jn(c),null;case 10:return Dm(c.type._context),jn(c),null;case 17:return Xn(c.type)&&Ts(),jn(c),null;case 19:if(en(cn),S=c.memoizedState,S===null)return jn(c),null;if(v=(c.flags&128)!==0,k=S.rendering,k===null)if(v)_c(S,!1);else{if(En!==0||a!==null&&(a.flags&128)!==0)for(a=c.child;a!==null;){if(k=Ds(a),k!==null){for(c.flags|=128,_c(S,!1),v=k.updateQueue,v!==null&&(c.updateQueue=v,c.flags|=4),c.subtreeFlags=0,v=d,d=c.child;d!==null;)S=d,a=v,S.flags&=14680066,k=S.alternate,k===null?(S.childLanes=0,S.lanes=a,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=k.childLanes,S.lanes=k.lanes,S.child=k.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=k.memoizedProps,S.memoizedState=k.memoizedState,S.updateQueue=k.updateQueue,S.type=k.type,a=k.dependencies,S.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),d=d.sibling;return Je(cn,cn.current&1|2),c.child}a=a.sibling}S.tail!==null&&dn()>$a&&(c.flags|=128,v=!0,_c(S,!1),c.lanes=4194304)}else{if(!v)if(a=Ds(k),a!==null){if(c.flags|=128,v=!0,d=a.updateQueue,d!==null&&(c.updateQueue=d,c.flags|=4),_c(S,!0),S.tail===null&&S.tailMode==="hidden"&&!k.alternate&&!an)return jn(c),null}else 2*dn()-S.renderingStartTime>$a&&d!==1073741824&&(c.flags|=128,v=!0,_c(S,!1),c.lanes=4194304);S.isBackwards?(k.sibling=c.child,c.child=k):(d=S.last,d!==null?d.sibling=k:c.child=k,S.last=k)}return S.tail!==null?(c=S.tail,S.rendering=c,S.tail=c.sibling,S.renderingStartTime=dn(),c.sibling=null,d=cn.current,Je(cn,v?d&1|2:d&1),c):(jn(c),null);case 22:case 23:return wh(),v=c.memoizedState!==null,a!==null&&a.memoizedState!==null!==v&&(c.flags|=8192),v&&(c.mode&1)!==0?(st&1073741824)!==0&&(jn(c),c.subtreeFlags&6&&(c.flags|=8192)):jn(c),null;case 24:return null;case 25:return null}throw Error(t(156,c.tag))}function ER(a,c){switch(Mm(c),c.tag){case 1:return Xn(c.type)&&Ts(),a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 3:return Da(),en(Yn),en(Ln),Wm(),a=c.flags,(a&65536)!==0&&(a&128)===0?(c.flags=a&-65537|128,c):null;case 5:return Gm(c),null;case 13:if(en(cn),a=c.memoizedState,a!==null&&a.dehydrated!==null){if(c.alternate===null)throw Error(t(340));Na()}return a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 19:return en(cn),null;case 4:return Da(),null;case 10:return Dm(c.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var Ks=!1,Dn=!1,CR=typeof WeakSet=="function"?WeakSet:Set,pe=null;function za(a,c){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){sn(a,c,v)}else d.current=null}function dh(a,c,d){try{d()}catch(v){sn(a,c,v)}}var h0=!1;function bR(a,c){if(wm=ms,a=Vb(),vm(a)){if("selectionStart"in a)var d={start:a.selectionStart,end:a.selectionEnd};else e:{d=(d=a.ownerDocument)&&d.defaultView||window;var v=d.getSelection&&d.getSelection();if(v&&v.rangeCount!==0){d=v.anchorNode;var C=v.anchorOffset,S=v.focusNode;v=v.focusOffset;try{d.nodeType,S.nodeType}catch{d=null;break e}var k=0,L=-1,F=-1,ee=0,oe=0,le=a,ae=null;n:for(;;){for(var ve;le!==d||C!==0&&le.nodeType!==3||(L=k+C),le!==S||v!==0&&le.nodeType!==3||(F=k+v),le.nodeType===3&&(k+=le.nodeValue.length),(ve=le.firstChild)!==null;)ae=le,le=ve;for(;;){if(le===a)break n;if(ae===d&&++ee===C&&(L=k),ae===S&&++oe===v&&(F=k),(ve=le.nextSibling)!==null)break;le=ae,ae=le.parentNode}le=ve}d=L===-1||F===-1?null:{start:L,end:F}}else d=null}d=d||{start:0,end:0}}else d=null;for(xm={focusedElem:a,selectionRange:d},ms=!1,pe=c;pe!==null;)if(c=pe,a=c.child,(c.subtreeFlags&1028)!==0&&a!==null)a.return=c,pe=a;else for(;pe!==null;){c=pe;try{var Ee=c.alternate;if((c.flags&1024)!==0)switch(c.tag){case 0:case 11:case 15:break;case 1:if(Ee!==null){var Se=Ee.memoizedProps,fn=Ee.memoizedState,Y=c.stateNode,G=Y.getSnapshotBeforeUpdate(c.elementType===c.type?Se:jt(c.type,Se),fn);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=c.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(se){sn(c,c.return,se)}if(a=c.sibling,a!==null){a.return=c.return,pe=a;break}pe=c.return}return Ee=h0,h0=!1,Ee}function Nc(a,c,d){var v=c.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var C=v=v.next;do{if((C.tag&a)===a){var S=C.destroy;C.destroy=void 0,S!==void 0&&dh(c,d,S)}C=C.next}while(C!==v)}}function qs(a,c){if(c=c.updateQueue,c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&a)===a){var v=d.create;d.destroy=v()}d=d.next}while(d!==c)}}function fh(a){var c=a.ref;if(c!==null){var d=a.stateNode;switch(a.tag){case 5:a=d;break;default:a=d}typeof c=="function"?c(a):c.current=a}}function v0(a){var c=a.alternate;c!==null&&(a.alternate=null,v0(c)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(c=a.stateNode,c!==null&&(delete c[tr],delete c[wc],delete c[Pm],delete c[rR],delete c[iR])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function p0(a){return a.tag===5||a.tag===3||a.tag===4}function y0(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||p0(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function mh(a,c,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,c?d.nodeType===8?d.parentNode.insertBefore(a,c):d.insertBefore(a,c):(d.nodeType===8?(c=d.parentNode,c.insertBefore(a,d)):(c=d,c.appendChild(a)),d=d._reactRootContainer,d!=null||c.onclick!==null||(c.onclick=As));else if(v!==4&&(a=a.child,a!==null))for(mh(a,c,d),a=a.sibling;a!==null;)mh(a,c,d),a=a.sibling}function hh(a,c,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,c?d.insertBefore(a,c):d.appendChild(a);else if(v!==4&&(a=a.child,a!==null))for(hh(a,c,d),a=a.sibling;a!==null;)hh(a,c,d),a=a.sibling}var On=null,Dt=!1;function ri(a,c,d){for(d=d.child;d!==null;)g0(a,c,d),d=d.sibling}function g0(a,c,d){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(cs,d)}catch{}switch(d.tag){case 5:Dn||za(d,c);case 6:var v=On,C=Dt;On=null,ri(a,c,d),On=v,Dt=C,On!==null&&(Dt?(a=On,d=d.stateNode,a.nodeType===8?a.parentNode.removeChild(d):a.removeChild(d)):On.removeChild(d.stateNode));break;case 18:On!==null&&(Dt?(a=On,d=d.stateNode,a.nodeType===8?Tm(a.parentNode,d):a.nodeType===1&&Tm(a,d),fc(a)):Tm(On,d.stateNode));break;case 4:v=On,C=Dt,On=d.stateNode.containerInfo,Dt=!0,ri(a,c,d),On=v,Dt=C;break;case 0:case 11:case 14:case 15:if(!Dn&&(v=d.updateQueue,v!==null&&(v=v.lastEffect,v!==null))){C=v=v.next;do{var S=C,k=S.destroy;S=S.tag,k!==void 0&&((S&2)!==0||(S&4)!==0)&&dh(d,c,k),C=C.next}while(C!==v)}ri(a,c,d);break;case 1:if(!Dn&&(za(d,c),v=d.stateNode,typeof v.componentWillUnmount=="function"))try{v.props=d.memoizedProps,v.state=d.memoizedState,v.componentWillUnmount()}catch(L){sn(d,c,L)}ri(a,c,d);break;case 21:ri(a,c,d);break;case 22:d.mode&1?(Dn=(v=Dn)||d.memoizedState!==null,ri(a,c,d),Dn=v):ri(a,c,d);break;default:ri(a,c,d)}}function E0(a){var c=a.updateQueue;if(c!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new CR),c.forEach(function(v){var C=OR.bind(null,a,v);d.has(v)||(d.add(v),v.then(C,C))})}}function Bt(a,c){var d=c.deletions;if(d!==null)for(var v=0;v<d.length;v++){var C=d[v];try{var S=a,k=c,L=k;e:for(;L!==null;){switch(L.tag){case 5:On=L.stateNode,Dt=!1;break e;case 3:On=L.stateNode.containerInfo,Dt=!0;break e;case 4:On=L.stateNode.containerInfo,Dt=!0;break e}L=L.return}if(On===null)throw Error(t(160));g0(S,k,C),On=null,Dt=!1;var F=C.alternate;F!==null&&(F.return=null),C.return=null}catch(ee){sn(C,c,ee)}}if(c.subtreeFlags&12854)for(c=c.child;c!==null;)C0(c,a),c=c.sibling}function C0(a,c){var d=a.alternate,v=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(Bt(c,a),ar(a),v&4){try{Nc(3,a,a.return),qs(3,a)}catch(Se){sn(a,a.return,Se)}try{Nc(5,a,a.return)}catch(Se){sn(a,a.return,Se)}}break;case 1:Bt(c,a),ar(a),v&512&&d!==null&&za(d,d.return);break;case 5:if(Bt(c,a),ar(a),v&512&&d!==null&&za(d,d.return),a.flags&32){var C=a.stateNode;try{nc(C,"")}catch(Se){sn(a,a.return,Se)}}if(v&4&&(C=a.stateNode,C!=null)){var S=a.memoizedProps,k=d!==null?d.memoizedProps:S,L=a.type,F=a.updateQueue;if(a.updateQueue=null,F!==null)try{L==="input"&&S.type==="radio"&&S.name!=null&&Ke(C,S),Wf(L,k);var ee=Wf(L,S);for(k=0;k<F.length;k+=2){var oe=F[k],le=F[k+1];oe==="style"?tb(C,le):oe==="dangerouslySetInnerHTML"?eb(C,le):oe==="children"?nc(C,le):U(C,oe,le,ee)}switch(L){case"input":rn(C,S);break;case"textarea":Qo(C,S);break;case"select":var ae=C._wrapperState.wasMultiple;C._wrapperState.wasMultiple=!!S.multiple;var ve=S.value;ve!=null?qn(C,!!S.multiple,ve,!1):ae!==!!S.multiple&&(S.defaultValue!=null?qn(C,!!S.multiple,S.defaultValue,!0):qn(C,!!S.multiple,S.multiple?[]:"",!1))}C[wc]=S}catch(Se){sn(a,a.return,Se)}}break;case 6:if(Bt(c,a),ar(a),v&4){if(a.stateNode===null)throw Error(t(162));C=a.stateNode,S=a.memoizedProps;try{C.nodeValue=S}catch(Se){sn(a,a.return,Se)}}break;case 3:if(Bt(c,a),ar(a),v&4&&d!==null&&d.memoizedState.isDehydrated)try{fc(c.containerInfo)}catch(Se){sn(a,a.return,Se)}break;case 4:Bt(c,a),ar(a);break;case 13:Bt(c,a),ar(a),C=a.child,C.flags&8192&&(S=C.memoizedState!==null,C.stateNode.isHidden=S,!S||C.alternate!==null&&C.alternate.memoizedState!==null||(yh=dn())),v&4&&E0(a);break;case 22:if(oe=d!==null&&d.memoizedState!==null,a.mode&1?(Dn=(ee=Dn)||oe,Bt(c,a),Dn=ee):Bt(c,a),ar(a),v&8192){if(ee=a.memoizedState!==null,(a.stateNode.isHidden=ee)&&!oe&&(a.mode&1)!==0)for(pe=a,oe=a.child;oe!==null;){for(le=pe=oe;pe!==null;){switch(ae=pe,ve=ae.child,ae.tag){case 0:case 11:case 14:case 15:Nc(4,ae,ae.return);break;case 1:za(ae,ae.return);var Ee=ae.stateNode;if(typeof Ee.componentWillUnmount=="function"){v=ae,d=ae.return;try{c=v,Ee.props=c.memoizedProps,Ee.state=c.memoizedState,Ee.componentWillUnmount()}catch(Se){sn(v,d,Se)}}break;case 5:za(ae,ae.return);break;case 22:if(ae.memoizedState!==null){w0(le);continue}}ve!==null?(ve.return=ae,pe=ve):w0(le)}oe=oe.sibling}e:for(oe=null,le=a;;){if(le.tag===5){if(oe===null){oe=le;try{C=le.stateNode,ee?(S=C.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(L=le.stateNode,F=le.memoizedProps.style,k=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=nb("display",k))}catch(Se){sn(a,a.return,Se)}}}else if(le.tag===6){if(oe===null)try{le.stateNode.nodeValue=ee?"":le.memoizedProps}catch(Se){sn(a,a.return,Se)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===a)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===a)break e;for(;le.sibling===null;){if(le.return===null||le.return===a)break e;oe===le&&(oe=null),le=le.return}oe===le&&(oe=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:Bt(c,a),ar(a),v&4&&E0(a);break;case 21:break;default:Bt(c,a),ar(a)}}function ar(a){var c=a.flags;if(c&2){try{e:{for(var d=a.return;d!==null;){if(p0(d)){var v=d;break e}d=d.return}throw Error(t(160))}switch(v.tag){case 5:var C=v.stateNode;v.flags&32&&(nc(C,""),v.flags&=-33);var S=y0(a);hh(a,S,C);break;case 3:case 4:var k=v.stateNode.containerInfo,L=y0(a);mh(a,L,k);break;default:throw Error(t(161))}}catch(F){sn(a,a.return,F)}a.flags&=-3}c&4096&&(a.flags&=-4097)}function SR(a,c,d){pe=a,b0(a)}function b0(a,c,d){for(var v=(a.mode&1)!==0;pe!==null;){var C=pe,S=C.child;if(C.tag===22&&v){var k=C.memoizedState!==null||Ks;if(!k){var L=C.alternate,F=L!==null&&L.memoizedState!==null||Dn;L=Ks;var ee=Dn;if(Ks=k,(Dn=F)&&!ee)for(pe=C;pe!==null;)k=pe,F=k.child,k.tag===22&&k.memoizedState!==null?x0(C):F!==null?(F.return=k,pe=F):x0(C);for(;S!==null;)pe=S,b0(S),S=S.sibling;pe=C,Ks=L,Dn=ee}S0(a)}else(C.subtreeFlags&8772)!==0&&S!==null?(S.return=C,pe=S):S0(a)}}function S0(a){for(;pe!==null;){var c=pe;if((c.flags&8772)!==0){var d=c.alternate;try{if((c.flags&8772)!==0)switch(c.tag){case 0:case 11:case 15:Dn||qs(5,c);break;case 1:var v=c.stateNode;if(c.flags&4&&!Dn)if(d===null)v.componentDidMount();else{var C=c.elementType===c.type?d.memoizedProps:jt(c.type,d.memoizedProps);v.componentDidUpdate(C,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var S=c.updateQueue;S!==null&&wS(c,S,v);break;case 3:var k=c.updateQueue;if(k!==null){if(d=null,c.child!==null)switch(c.child.tag){case 5:d=c.child.stateNode;break;case 1:d=c.child.stateNode}wS(c,k,d)}break;case 5:var L=c.stateNode;if(d===null&&c.flags&4){d=L;var F=c.memoizedProps;switch(c.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&d.focus();break;case"img":F.src&&(d.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(c.memoizedState===null){var ee=c.alternate;if(ee!==null){var oe=ee.memoizedState;if(oe!==null){var le=oe.dehydrated;le!==null&&fc(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||c.flags&512&&fh(c)}catch(ae){sn(c,c.return,ae)}}if(c===a){pe=null;break}if(d=c.sibling,d!==null){d.return=c.return,pe=d;break}pe=c.return}}function w0(a){for(;pe!==null;){var c=pe;if(c===a){pe=null;break}var d=c.sibling;if(d!==null){d.return=c.return,pe=d;break}pe=c.return}}function x0(a){for(;pe!==null;){var c=pe;try{switch(c.tag){case 0:case 11:case 15:var d=c.return;try{qs(4,c)}catch(F){sn(c,d,F)}break;case 1:var v=c.stateNode;if(typeof v.componentDidMount=="function"){var C=c.return;try{v.componentDidMount()}catch(F){sn(c,C,F)}}var S=c.return;try{fh(c)}catch(F){sn(c,S,F)}break;case 5:var k=c.return;try{fh(c)}catch(F){sn(c,k,F)}}}catch(F){sn(c,c.return,F)}if(c===a){pe=null;break}var L=c.sibling;if(L!==null){L.return=c.return,pe=L;break}pe=c.return}}var wR=Math.ceil,Ys=I.ReactCurrentDispatcher,vh=I.ReactCurrentOwner,bt=I.ReactCurrentBatchConfig,De=0,Un=null,vn=null,kn=0,st=0,Fa=Zr(0),En=0,Lc=null,ji=0,Xs=0,ph=0,Rc=null,Zn=null,yh=0,$a=1/0,Tr=null,Js=!1,gh=null,ii=null,Zs=!1,ai=null,Qs=0,jc=0,Eh=null,eu=-1,nu=0;function Wn(){return(De&6)!==0?dn():eu!==-1?eu:eu=dn()}function oi(a){return(a.mode&1)===0?1:(De&2)!==0&&kn!==0?kn&-kn:oR.transition!==null?(nu===0&&(nu=yb()),nu):(a=We,a!==0||(a=window.event,a=a===void 0?16:Ub(a.type)),a)}function zt(a,c,d,v){if(50<jc)throw jc=0,Eh=null,Error(t(185));cc(a,d,v),((De&2)===0||a!==Un)&&(a===Un&&((De&2)===0&&(Xs|=d),En===4&&ci(a,kn)),Qn(a,v),d===1&&De===0&&(c.mode&1)===0&&($a=dn()+500,Is&&ei()))}function Qn(a,c){var d=a.callbackNode;oL(a,c);var v=us(a,a===Un?kn:0);if(v===0)d!==null&&hb(d),a.callbackNode=null,a.callbackPriority=0;else if(c=v&-v,a.callbackPriority!==c){if(d!=null&&hb(d),c===1)a.tag===0?aR(U0.bind(null,a)):dS(U0.bind(null,a)),nR(function(){(De&6)===0&&ei()}),d=null;else{switch(gb(v)){case 1:d=Zf;break;case 4:d=vb;break;case 16:d=os;break;case 536870912:d=pb;break;default:d=os}d=N0(d,A0.bind(null,a))}a.callbackPriority=c,a.callbackNode=d}}function A0(a,c){if(eu=-1,nu=0,(De&6)!==0)throw Error(t(327));var d=a.callbackNode;if(Ga()&&a.callbackNode!==d)return null;var v=us(a,a===Un?kn:0);if(v===0)return null;if((v&30)!==0||(v&a.expiredLanes)!==0||c)c=tu(a,v);else{c=v;var C=De;De|=2;var S=P0();(Un!==a||kn!==c)&&(Tr=null,$a=dn()+500,Bi(a,c));do try{UR();break}catch(L){T0(a,L)}while(!0);jm(),Ys.current=S,De=C,vn!==null?c=0:(Un=null,kn=0,c=En)}if(c!==0){if(c===2&&(C=Qf(a),C!==0&&(v=C,c=Ch(a,C))),c===1)throw d=Lc,Bi(a,0),ci(a,v),Qn(a,dn()),d;if(c===6)ci(a,v);else{if(C=a.current.alternate,(v&30)===0&&!xR(C)&&(c=tu(a,v),c===2&&(S=Qf(a),S!==0&&(v=S,c=Ch(a,S))),c===1))throw d=Lc,Bi(a,0),ci(a,v),Qn(a,dn()),d;switch(a.finishedWork=C,a.finishedLanes=v,c){case 0:case 1:throw Error(t(345));case 2:zi(a,Zn,Tr);break;case 3:if(ci(a,v),(v&130023424)===v&&(c=yh+500-dn(),10<c)){if(us(a,0)!==0)break;if(C=a.suspendedLanes,(C&v)!==v){Wn(),a.pingedLanes|=a.suspendedLanes&C;break}a.timeoutHandle=Um(zi.bind(null,a,Zn,Tr),c);break}zi(a,Zn,Tr);break;case 4:if(ci(a,v),(v&4194240)===v)break;for(c=a.eventTimes,C=-1;0<v;){var k=31-Nt(v);S=1<<k,k=c[k],k>C&&(C=k),v&=~S}if(v=C,v=dn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*wR(v/1960))-v,10<v){a.timeoutHandle=Um(zi.bind(null,a,Zn,Tr),v);break}zi(a,Zn,Tr);break;case 5:zi(a,Zn,Tr);break;default:throw Error(t(329))}}}return Qn(a,dn()),a.callbackNode===d?A0.bind(null,a):null}function Ch(a,c){var d=Rc;return a.current.memoizedState.isDehydrated&&(Bi(a,c).flags|=256),a=tu(a,c),a!==2&&(c=Zn,Zn=d,c!==null&&bh(c)),a}function bh(a){Zn===null?Zn=a:Zn.push.apply(Zn,a)}function xR(a){for(var c=a;;){if(c.flags&16384){var d=c.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var C=d[v],S=C.getSnapshot;C=C.value;try{if(!Lt(S(),C))return!1}catch{return!1}}}if(d=c.child,c.subtreeFlags&16384&&d!==null)d.return=c,c=d;else{if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return!0;c=c.return}c.sibling.return=c.return,c=c.sibling}}return!0}function ci(a,c){for(c&=~ph,c&=~Xs,a.suspendedLanes|=c,a.pingedLanes&=~c,a=a.expirationTimes;0<c;){var d=31-Nt(c),v=1<<d;a[d]=-1,c&=~v}}function U0(a){if((De&6)!==0)throw Error(t(327));Ga();var c=us(a,0);if((c&1)===0)return Qn(a,dn()),null;var d=tu(a,c);if(a.tag!==0&&d===2){var v=Qf(a);v!==0&&(c=v,d=Ch(a,v))}if(d===1)throw d=Lc,Bi(a,0),ci(a,c),Qn(a,dn()),d;if(d===6)throw Error(t(345));return a.finishedWork=a.current.alternate,a.finishedLanes=c,zi(a,Zn,Tr),Qn(a,dn()),null}function Sh(a,c){var d=De;De|=1;try{return a(c)}finally{De=d,De===0&&($a=dn()+500,Is&&ei())}}function Di(a){ai!==null&&ai.tag===0&&(De&6)===0&&Ga();var c=De;De|=1;var d=bt.transition,v=We;try{if(bt.transition=null,We=1,a)return a()}finally{We=v,bt.transition=d,De=c,(De&6)===0&&ei()}}function wh(){st=Fa.current,en(Fa)}function Bi(a,c){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==-1&&(a.timeoutHandle=-1,eR(d)),vn!==null)for(d=vn.return;d!==null;){var v=d;switch(Mm(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Ts();break;case 3:Da(),en(Yn),en(Ln),Wm();break;case 5:Gm(v);break;case 4:Da();break;case 13:en(cn);break;case 19:en(cn);break;case 10:Dm(v.type._context);break;case 22:case 23:wh()}d=d.return}if(Un=a,vn=a=li(a.current,null),kn=st=c,En=0,Lc=null,ph=Xs=ji=0,Zn=Rc=null,Ni!==null){for(c=0;c<Ni.length;c++)if(d=Ni[c],v=d.interleaved,v!==null){d.interleaved=null;var C=v.next,S=d.pending;if(S!==null){var k=S.next;S.next=C,v.next=k}d.pending=v}Ni=null}return a}function T0(a,c){do{var d=vn;try{if(jm(),Bs.current=Gs,zs){for(var v=ln.memoizedState;v!==null;){var C=v.queue;C!==null&&(C.pending=null),v=v.next}zs=!1}if(Ri=0,An=gn=ln=null,Ic=!1,Oc=0,vh.current=null,d===null||d.return===null){En=1,Lc=c,vn=null;break}e:{var S=a,k=d.return,L=d,F=c;if(c=kn,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,oe=L,le=oe.tag;if((oe.mode&1)===0&&(le===0||le===11||le===15)){var ae=oe.alternate;ae?(oe.updateQueue=ae.updateQueue,oe.memoizedState=ae.memoizedState,oe.lanes=ae.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var ve=ZS(k);if(ve!==null){ve.flags&=-257,QS(ve,k,L,S,c),ve.mode&1&&JS(S,ee,c),c=ve,F=ee;var Ee=c.updateQueue;if(Ee===null){var Se=new Set;Se.add(F),c.updateQueue=Se}else Ee.add(F);break e}else{if((c&1)===0){JS(S,ee,c),xh();break e}F=Error(t(426))}}else if(an&&L.mode&1){var fn=ZS(k);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),QS(fn,k,L,S,c),Lm(Ba(F,L));break e}}S=F=Ba(F,L),En!==4&&(En=2),Rc===null?Rc=[S]:Rc.push(S),S=k;do{switch(S.tag){case 3:S.flags|=65536,c&=-c,S.lanes|=c;var Y=YS(S,F,c);SS(S,Y);break e;case 1:L=F;var G=S.type,J=S.stateNode;if((S.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ii===null||!ii.has(J)))){S.flags|=65536,c&=-c,S.lanes|=c;var se=XS(S,L,c);SS(S,se);break e}}S=S.return}while(S!==null)}O0(d)}catch(we){c=we,vn===d&&d!==null&&(vn=d=d.return);continue}break}while(!0)}function P0(){var a=Ys.current;return Ys.current=Gs,a===null?Gs:a}function xh(){(En===0||En===3||En===2)&&(En=4),Un===null||(ji&268435455)===0&&(Xs&268435455)===0||ci(Un,kn)}function tu(a,c){var d=De;De|=2;var v=P0();(Un!==a||kn!==c)&&(Tr=null,Bi(a,c));do try{AR();break}catch(C){T0(a,C)}while(!0);if(jm(),De=d,Ys.current=v,vn!==null)throw Error(t(261));return Un=null,kn=0,En}function AR(){for(;vn!==null;)I0(vn)}function UR(){for(;vn!==null&&!JN();)I0(vn)}function I0(a){var c=_0(a.alternate,a,st);a.memoizedProps=a.pendingProps,c===null?O0(a):vn=c,vh.current=null}function O0(a){var c=a;do{var d=c.alternate;if(a=c.return,(c.flags&32768)===0){if(d=gR(d,c,st),d!==null){vn=d;return}}else{if(d=ER(d,c),d!==null){d.flags&=32767,vn=d;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{En=6,vn=null;return}}if(c=c.sibling,c!==null){vn=c;return}vn=c=a}while(c!==null);En===0&&(En=5)}function zi(a,c,d){var v=We,C=bt.transition;try{bt.transition=null,We=1,TR(a,c,d,v)}finally{bt.transition=C,We=v}return null}function TR(a,c,d,v){do Ga();while(ai!==null);if((De&6)!==0)throw Error(t(327));d=a.finishedWork;var C=a.finishedLanes;if(d===null)return null;if(a.finishedWork=null,a.finishedLanes=0,d===a.current)throw Error(t(177));a.callbackNode=null,a.callbackPriority=0;var S=d.lanes|d.childLanes;if(cL(a,S),a===Un&&(vn=Un=null,kn=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||Zs||(Zs=!0,N0(os,function(){return Ga(),null})),S=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||S){S=bt.transition,bt.transition=null;var k=We;We=1;var L=De;De|=4,vh.current=null,bR(a,d),C0(d,a),KL(xm),ms=!!wm,xm=wm=null,a.current=d,SR(d),ZN(),De=L,We=k,bt.transition=S}else a.current=d;if(Zs&&(Zs=!1,ai=a,Qs=C),S=a.pendingLanes,S===0&&(ii=null),nL(d.stateNode),Qn(a,dn()),c!==null)for(v=a.onRecoverableError,d=0;d<c.length;d++)C=c[d],v(C.value,{componentStack:C.stack,digest:C.digest});if(Js)throw Js=!1,a=gh,gh=null,a;return(Qs&1)!==0&&a.tag!==0&&Ga(),S=a.pendingLanes,(S&1)!==0?a===Eh?jc++:(jc=0,Eh=a):jc=0,ei(),null}function Ga(){if(ai!==null){var a=gb(Qs),c=bt.transition,d=We;try{if(bt.transition=null,We=16>a?16:a,ai===null)var v=!1;else{if(a=ai,ai=null,Qs=0,(De&6)!==0)throw Error(t(331));var C=De;for(De|=4,pe=a.current;pe!==null;){var S=pe,k=S.child;if((pe.flags&16)!==0){var L=S.deletions;if(L!==null){for(var F=0;F<L.length;F++){var ee=L[F];for(pe=ee;pe!==null;){var oe=pe;switch(oe.tag){case 0:case 11:case 15:Nc(8,oe,S)}var le=oe.child;if(le!==null)le.return=oe,pe=le;else for(;pe!==null;){oe=pe;var ae=oe.sibling,ve=oe.return;if(v0(oe),oe===ee){pe=null;break}if(ae!==null){ae.return=ve,pe=ae;break}pe=ve}}}var Ee=S.alternate;if(Ee!==null){var Se=Ee.child;if(Se!==null){Ee.child=null;do{var fn=Se.sibling;Se.sibling=null,Se=fn}while(Se!==null)}}pe=S}}if((S.subtreeFlags&2064)!==0&&k!==null)k.return=S,pe=k;else e:for(;pe!==null;){if(S=pe,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:Nc(9,S,S.return)}var Y=S.sibling;if(Y!==null){Y.return=S.return,pe=Y;break e}pe=S.return}}var G=a.current;for(pe=G;pe!==null;){k=pe;var J=k.child;if((k.subtreeFlags&2064)!==0&&J!==null)J.return=k,pe=J;else e:for(k=G;pe!==null;){if(L=pe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:qs(9,L)}}catch(we){sn(L,L.return,we)}if(L===k){pe=null;break e}var se=L.sibling;if(se!==null){se.return=L.return,pe=se;break e}pe=L.return}}if(De=C,ei(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(cs,a)}catch{}v=!0}return v}finally{We=d,bt.transition=c}}return!1}function k0(a,c,d){c=Ba(d,c),c=YS(a,c,1),a=ti(a,c,1),c=Wn(),a!==null&&(cc(a,1,c),Qn(a,c))}function sn(a,c,d){if(a.tag===3)k0(a,a,d);else for(;c!==null;){if(c.tag===3){k0(c,a,d);break}else if(c.tag===1){var v=c.stateNode;if(typeof c.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(ii===null||!ii.has(v))){a=Ba(d,a),a=XS(c,a,1),c=ti(c,a,1),a=Wn(),c!==null&&(cc(c,1,a),Qn(c,a));break}}c=c.return}}function PR(a,c,d){var v=a.pingCache;v!==null&&v.delete(c),c=Wn(),a.pingedLanes|=a.suspendedLanes&d,Un===a&&(kn&d)===d&&(En===4||En===3&&(kn&130023424)===kn&&500>dn()-yh?Bi(a,0):ph|=d),Qn(a,c)}function M0(a,c){c===0&&((a.mode&1)===0?c=1:(c=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var d=Wn();a=xr(a,c),a!==null&&(cc(a,c,d),Qn(a,d))}function IR(a){var c=a.memoizedState,d=0;c!==null&&(d=c.retryLane),M0(a,d)}function OR(a,c){var d=0;switch(a.tag){case 13:var v=a.stateNode,C=a.memoizedState;C!==null&&(d=C.retryLane);break;case 19:v=a.stateNode;break;default:throw Error(t(314))}v!==null&&v.delete(c),M0(a,d)}var _0;_0=function(a,c,d){if(a!==null)if(a.memoizedProps!==c.pendingProps||Yn.current)Jn=!0;else{if((a.lanes&d)===0&&(c.flags&128)===0)return Jn=!1,yR(a,c,d);Jn=(a.flags&131072)!==0}else Jn=!1,an&&(c.flags&1048576)!==0&&fS(c,ks,c.index);switch(c.lanes=0,c.tag){case 2:var v=c.type;Vs(a,c),a=c.pendingProps;var C=ka(c,Ln.current);ja(c,d),C=qm(null,c,v,a,C,d);var S=Ym();return c.flags|=1,typeof C=="object"&&C!==null&&typeof C.render=="function"&&C.$$typeof===void 0?(c.tag=1,c.memoizedState=null,c.updateQueue=null,Xn(v)?(S=!0,Ps(c)):S=!1,c.memoizedState=C.state!==null&&C.state!==void 0?C.state:null,Fm(c),C.updater=Hs,c.stateNode=C,C._reactInternals=c,nh(c,v,a,d),c=ah(null,c,v,!0,S,d)):(c.tag=0,an&&S&&km(c),Hn(null,c,C,d),c=c.child),c;case 16:v=c.elementType;e:{switch(Vs(a,c),a=c.pendingProps,C=v._init,v=C(v._payload),c.type=v,C=c.tag=MR(v),a=jt(v,a),C){case 0:c=ih(null,c,v,a,d);break e;case 1:c=a0(null,c,v,a,d);break e;case 11:c=e0(null,c,v,a,d);break e;case 14:c=n0(null,c,v,jt(v.type,a),d);break e}throw Error(t(306,v,""))}return c;case 0:return v=c.type,C=c.pendingProps,C=c.elementType===v?C:jt(v,C),ih(a,c,v,C,d);case 1:return v=c.type,C=c.pendingProps,C=c.elementType===v?C:jt(v,C),a0(a,c,v,C,d);case 3:e:{if(o0(c),a===null)throw Error(t(387));v=c.pendingProps,S=c.memoizedState,C=S.element,bS(a,c),js(c,v,null,d);var k=c.memoizedState;if(v=k.element,S.isDehydrated)if(S={element:v,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},c.updateQueue.baseState=S,c.memoizedState=S,c.flags&256){C=Ba(Error(t(423)),c),c=c0(a,c,v,d,C);break e}else if(v!==C){C=Ba(Error(t(424)),c),c=c0(a,c,v,d,C);break e}else for(lt=Jr(c.stateNode.containerInfo.firstChild),ct=c,an=!0,Rt=null,d=ES(c,null,v,d),c.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Na(),v===C){c=Ur(a,c,d);break e}Hn(a,c,v,d)}c=c.child}return c;case 5:return xS(c),a===null&&Nm(c),v=c.type,C=c.pendingProps,S=a!==null?a.memoizedProps:null,k=C.children,Am(v,C)?k=null:S!==null&&Am(v,S)&&(c.flags|=32),i0(a,c),Hn(a,c,k,d),c.child;case 6:return a===null&&Nm(c),null;case 13:return l0(a,c,d);case 4:return $m(c,c.stateNode.containerInfo),v=c.pendingProps,a===null?c.child=La(c,null,v,d):Hn(a,c,v,d),c.child;case 11:return v=c.type,C=c.pendingProps,C=c.elementType===v?C:jt(v,C),e0(a,c,v,C,d);case 7:return Hn(a,c,c.pendingProps,d),c.child;case 8:return Hn(a,c,c.pendingProps.children,d),c.child;case 12:return Hn(a,c,c.pendingProps.children,d),c.child;case 10:e:{if(v=c.type._context,C=c.pendingProps,S=c.memoizedProps,k=C.value,Je(Ns,v._currentValue),v._currentValue=k,S!==null)if(Lt(S.value,k)){if(S.children===C.children&&!Yn.current){c=Ur(a,c,d);break e}}else for(S=c.child,S!==null&&(S.return=c);S!==null;){var L=S.dependencies;if(L!==null){k=S.child;for(var F=L.firstContext;F!==null;){if(F.context===v){if(S.tag===1){F=Ar(-1,d&-d),F.tag=2;var ee=S.updateQueue;if(ee!==null){ee=ee.shared;var oe=ee.pending;oe===null?F.next=F:(F.next=oe.next,oe.next=F),ee.pending=F}}S.lanes|=d,F=S.alternate,F!==null&&(F.lanes|=d),Bm(S.return,d,c),L.lanes|=d;break}F=F.next}}else if(S.tag===10)k=S.type===c.type?null:S.child;else if(S.tag===18){if(k=S.return,k===null)throw Error(t(341));k.lanes|=d,L=k.alternate,L!==null&&(L.lanes|=d),Bm(k,d,c),k=S.sibling}else k=S.child;if(k!==null)k.return=S;else for(k=S;k!==null;){if(k===c){k=null;break}if(S=k.sibling,S!==null){S.return=k.return,k=S;break}k=k.return}S=k}Hn(a,c,C.children,d),c=c.child}return c;case 9:return C=c.type,v=c.pendingProps.children,ja(c,d),C=Et(C),v=v(C),c.flags|=1,Hn(a,c,v,d),c.child;case 14:return v=c.type,C=jt(v,c.pendingProps),C=jt(v.type,C),n0(a,c,v,C,d);case 15:return t0(a,c,c.type,c.pendingProps,d);case 17:return v=c.type,C=c.pendingProps,C=c.elementType===v?C:jt(v,C),Vs(a,c),c.tag=1,Xn(v)?(a=!0,Ps(c)):a=!1,ja(c,d),KS(c,v,C),nh(c,v,C,d),ah(null,c,v,!0,a,d);case 19:return u0(a,c,d);case 22:return r0(a,c,d)}throw Error(t(156,c.tag))};function N0(a,c){return mb(a,c)}function kR(a,c,d,v){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=c,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(a,c,d,v){return new kR(a,c,d,v)}function Ah(a){return a=a.prototype,!(!a||!a.isReactComponent)}function MR(a){if(typeof a=="function")return Ah(a)?1:0;if(a!=null){if(a=a.$$typeof,a===j)return 11;if(a===K)return 14}return 2}function li(a,c){var d=a.alternate;return d===null?(d=St(a.tag,c,a.key,a.mode),d.elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=c,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=a.flags&14680064,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,c=a.dependencies,d.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function ru(a,c,d,v,C,S){var k=2;if(v=a,typeof a=="function")Ah(a)&&(k=1);else if(typeof a=="string")k=5;else e:switch(a){case T:return Fi(d.children,C,S,c);case M:k=8,C|=8;break;case N:return a=St(12,d,c,C|2),a.elementType=N,a.lanes=S,a;case H:return a=St(13,d,c,C),a.elementType=H,a.lanes=S,a;case V:return a=St(19,d,c,C),a.elementType=V,a.lanes=S,a;case X:return iu(d,C,S,c);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case $:k=10;break e;case z:k=9;break e;case j:k=11;break e;case K:k=14;break e;case W:k=16,v=null;break e}throw Error(t(130,a==null?a:typeof a,""))}return c=St(k,d,c,C),c.elementType=a,c.type=v,c.lanes=S,c}function Fi(a,c,d,v){return a=St(7,a,v,c),a.lanes=d,a}function iu(a,c,d,v){return a=St(22,a,v,c),a.elementType=X,a.lanes=d,a.stateNode={isHidden:!1},a}function Uh(a,c,d){return a=St(6,a,null,c),a.lanes=d,a}function Th(a,c,d){return c=St(4,a.children!==null?a.children:[],a.key,c),c.lanes=d,c.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},c}function _R(a,c,d,v,C){this.tag=c,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=em(0),this.expirationTimes=em(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=em(0),this.identifierPrefix=v,this.onRecoverableError=C,this.mutableSourceEagerHydrationData=null}function Ph(a,c,d,v,C,S,k,L,F){return a=new _R(a,c,d,L,F),c===1?(c=1,S===!0&&(c|=8)):c=0,S=St(3,null,null,c),a.current=S,S.stateNode=a,S.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fm(S),a}function NR(a,c,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:v==null?null:""+v,children:a,containerInfo:c,implementation:d}}function L0(a){if(!a)return Qr;a=a._reactInternals;e:{if(Ii(a)!==a||a.tag!==1)throw Error(t(170));var c=a;do{switch(c.tag){case 3:c=c.stateNode.context;break e;case 1:if(Xn(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break e}}c=c.return}while(c!==null);throw Error(t(171))}if(a.tag===1){var d=a.type;if(Xn(d))return sS(a,d,c)}return c}function R0(a,c,d,v,C,S,k,L,F){return a=Ph(d,v,!0,a,C,S,k,L,F),a.context=L0(null),d=a.current,v=Wn(),C=oi(d),S=Ar(v,C),S.callback=c??null,ti(d,S,C),a.current.lanes=C,cc(a,C,v),Qn(a,v),a}function au(a,c,d,v){var C=c.current,S=Wn(),k=oi(C);return d=L0(d),c.context===null?c.context=d:c.pendingContext=d,c=Ar(S,k),c.payload={element:a},v=v===void 0?null:v,v!==null&&(c.callback=v),a=ti(C,c,k),a!==null&&(zt(a,C,k,S),Rs(a,C,k)),k}function ou(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function j0(a,c){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<c?d:c}}function Ih(a,c){j0(a,c),(a=a.alternate)&&j0(a,c)}function LR(){return null}var D0=typeof reportError=="function"?reportError:function(a){console.error(a)};function Oh(a){this._internalRoot=a}cu.prototype.render=Oh.prototype.render=function(a){var c=this._internalRoot;if(c===null)throw Error(t(409));au(a,c,null,null)},cu.prototype.unmount=Oh.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var c=a.containerInfo;Di(function(){au(null,a,null,null)}),c[Cr]=null}};function cu(a){this._internalRoot=a}cu.prototype.unstable_scheduleHydration=function(a){if(a){var c=bb();a={blockedOn:null,target:a,priority:c};for(var d=0;d<qr.length&&c!==0&&c<qr[d].priority;d++);qr.splice(d,0,a),d===0&&xb(a)}};function kh(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function lu(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function B0(){}function RR(a,c,d,v,C){if(C){if(typeof v=="function"){var S=v;v=function(){var ee=ou(k);S.call(ee)}}var k=R0(c,v,a,0,null,!1,!1,"",B0);return a._reactRootContainer=k,a[Cr]=k.current,bc(a.nodeType===8?a.parentNode:a),Di(),k}for(;C=a.lastChild;)a.removeChild(C);if(typeof v=="function"){var L=v;v=function(){var ee=ou(F);L.call(ee)}}var F=Ph(a,0,!1,null,null,!1,!1,"",B0);return a._reactRootContainer=F,a[Cr]=F.current,bc(a.nodeType===8?a.parentNode:a),Di(function(){au(c,F,d,v)}),F}function su(a,c,d,v,C){var S=d._reactRootContainer;if(S){var k=S;if(typeof C=="function"){var L=C;C=function(){var F=ou(k);L.call(F)}}au(c,k,a,C)}else k=RR(d,c,a,C,v);return ou(k)}Eb=function(a){switch(a.tag){case 3:var c=a.stateNode;if(c.current.memoizedState.isDehydrated){var d=oc(c.pendingLanes);d!==0&&(nm(c,d|1),Qn(c,dn()),(De&6)===0&&($a=dn()+500,ei()))}break;case 13:Di(function(){var v=xr(a,1);if(v!==null){var C=Wn();zt(v,a,1,C)}}),Ih(a,1)}},tm=function(a){if(a.tag===13){var c=xr(a,134217728);if(c!==null){var d=Wn();zt(c,a,134217728,d)}Ih(a,134217728)}},Cb=function(a){if(a.tag===13){var c=oi(a),d=xr(a,c);if(d!==null){var v=Wn();zt(d,a,c,v)}Ih(a,c)}},bb=function(){return We},Sb=function(a,c){var d=We;try{return We=a,c()}finally{We=d}},qf=function(a,c,d){switch(c){case"input":if(rn(a,d),c=d.name,d.type==="radio"&&c!=null){for(d=a;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+c)+'][type="radio"]'),c=0;c<d.length;c++){var v=d[c];if(v!==a&&v.form===a.form){var C=Us(v);if(!C)throw Error(t(90));ne(v),rn(v,C)}}}break;case"textarea":Qo(a,d);break;case"select":c=d.value,c!=null&&qn(a,!!d.multiple,c,!1)}},ob=Sh,cb=Di;var jR={usingClientEntryPoint:!1,Events:[xc,Ia,Us,ib,ab,Sh]},Dc={findFiberByHostInstance:Oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DR={bundleType:Dc.bundleType,version:Dc.version,rendererPackageName:Dc.rendererPackageName,rendererConfig:Dc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=db(a),a===null?null:a.stateNode},findFiberByHostInstance:Dc.findFiberByHostInstance||LR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{cs=uu.inject(DR),nr=uu}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jR,et.createPortal=function(a,c){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kh(c))throw Error(t(200));return NR(a,c,null,d)},et.createRoot=function(a,c){if(!kh(a))throw Error(t(299));var d=!1,v="",C=D0;return c!=null&&(c.unstable_strictMode===!0&&(d=!0),c.identifierPrefix!==void 0&&(v=c.identifierPrefix),c.onRecoverableError!==void 0&&(C=c.onRecoverableError)),c=Ph(a,1,!1,null,null,d,!1,v,C),a[Cr]=c.current,bc(a.nodeType===8?a.parentNode:a),new Oh(c)},et.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var c=a._reactInternals;if(c===void 0)throw typeof a.render=="function"?Error(t(188)):(a=Object.keys(a).join(","),Error(t(268,a)));return a=db(c),a=a===null?null:a.stateNode,a},et.flushSync=function(a){return Di(a)},et.hydrate=function(a,c,d){if(!lu(c))throw Error(t(200));return su(null,a,c,!0,d)},et.hydrateRoot=function(a,c,d){if(!kh(a))throw Error(t(405));var v=d!=null&&d.hydratedSources||null,C=!1,S="",k=D0;if(d!=null&&(d.unstable_strictMode===!0&&(C=!0),d.identifierPrefix!==void 0&&(S=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),c=R0(c,null,a,1,d??null,C,!1,S,k),a[Cr]=c.current,bc(a),v)for(a=0;a<v.length;a++)d=v[a],C=d._getVersion,C=C(d._source),c.mutableSourceEagerHydrationData==null?c.mutableSourceEagerHydrationData=[d,C]:c.mutableSourceEagerHydrationData.push(d,C);return new cu(c)},et.render=function(a,c,d){if(!lu(c))throw Error(t(200));return su(null,a,c,!1,d)},et.unmountComponentAtNode=function(a){if(!lu(a))throw Error(t(40));return a._reactRootContainer?(Di(function(){su(null,null,a,!1,function(){a._reactRootContainer=null,a[Cr]=null})}),!0):!1},et.unstable_batchedUpdates=Sh,et.unstable_renderSubtreeIntoContainer=function(a,c,d,v){if(!lu(d))throw Error(t(200));if(a==null||a._reactInternals===void 0)throw Error(t(38));return su(a,c,d,!1,v)},et.version="18.3.1-next-f1338f8080-20240426",et}var K0;function yO(){if(K0)return Nh.exports;K0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Nh.exports=VR(),Nh.exports}var q0;function KR(){if(q0)return fu;q0=1;var e=yO();return fu.createRoot=e.createRoot,fu.hydrateRoot=e.hydrateRoot,fu}var qR=KR(),_=NE();const D=Ye(_),YR=zR({__proto__:null,default:D},[_]);var Vl=yO();const XR=Ye(Vl);function Y0(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function gO(...e){return n=>{let t=!1;const r=e.map(i=>{const o=Y0(i,n);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Y0(e[i],null)}}}}function tn(...e){return _.useCallback(gO(...e),e)}var co=_.forwardRef((e,n)=>{const{children:t,...r}=e,i=_.Children.toArray(t),o=i.find(ZR);if(o){const l=o.props.children,s=i.map(u=>u===o?_.Children.count(l)>1?_.Children.only(null):_.isValidElement(l)?l.props.children:null:u);return O.jsx(Jg,{...r,ref:n,children:_.isValidElement(l)?_.cloneElement(l,void 0,s):null})}return O.jsx(Jg,{...r,ref:n,children:t})});co.displayName="Slot";var Jg=_.forwardRef((e,n)=>{const{children:t,...r}=e;if(_.isValidElement(t)){const i=ej(t),o=QR(r,t.props);return t.type!==_.Fragment&&(o.ref=n?gO(n,i):i),_.cloneElement(t,o)}return _.Children.count(t)>1?_.Children.only(null):null});Jg.displayName="SlotClone";var JR=({children:e})=>O.jsx(O.Fragment,{children:e});function ZR(e){return _.isValidElement(e)&&e.type===JR}function QR(e,n){const t={...n};for(const r in n){const i=e[r],o=n[r];/^on[A-Z]/.test(r)?i&&o?t[r]=(...s)=>{o(...s),i(...s)}:i&&(t[r]=i):r==="style"?t[r]={...i,...o}:r==="className"&&(t[r]=[i,o].filter(Boolean).join(" "))}return{...e,...t}}function ej(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var nj=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Fe=nj.reduce((e,n)=>{const t=_.forwardRef((r,i)=>{const{asChild:o,...l}=r,s=o?co:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),O.jsx(s,{...l,ref:i})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function tj(e,n){e&&Vl.flushSync(()=>e.dispatchEvent(n))}var $n=globalThis!=null&&globalThis.document?_.useLayoutEffect:()=>{};function rj(e,n){return _.useReducer((t,r)=>n[t][r]??t,e)}var jo=e=>{const{present:n,children:t}=e,r=ij(n),i=typeof t=="function"?t({present:r.isPresent}):_.Children.only(t),o=tn(r.ref,aj(i));return typeof t=="function"||r.isPresent?_.cloneElement(i,{ref:o}):null};jo.displayName="Presence";function ij(e){const[n,t]=_.useState(),r=_.useRef({}),i=_.useRef(e),o=_.useRef("none"),l=e?"mounted":"unmounted",[s,u]=rj(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _.useEffect(()=>{const f=mu(r.current);o.current=s==="mounted"?f:"none"},[s]),$n(()=>{const f=r.current,m=i.current;if(m!==e){const p=o.current,g=mu(f);e?u("MOUNT"):g==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(m&&p!==g?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,u]),$n(()=>{if(n){let f;const m=n.ownerDocument.defaultView??window,h=g=>{const y=mu(r.current).includes(g.animationName);if(g.target===n&&y&&(u("ANIMATION_END"),!i.current)){const E=n.style.animationFillMode;n.style.animationFillMode="forwards",f=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=E)})}},p=g=>{g.target===n&&(o.current=mu(r.current))};return n.addEventListener("animationstart",p),n.addEventListener("animationcancel",h),n.addEventListener("animationend",h),()=>{m.clearTimeout(f),n.removeEventListener("animationstart",p),n.removeEventListener("animationcancel",h),n.removeEventListener("animationend",h)}}else u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:_.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function mu(e){return(e==null?void 0:e.animationName)||"none"}function aj(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function Do(e,n=[]){let t=[];function r(o,l){const s=_.createContext(l),u=t.length;t=[...t,l];const f=h=>{var w;const{scope:p,children:g,...b}=h,y=((w=p==null?void 0:p[e])==null?void 0:w[u])||s,E=_.useMemo(()=>b,Object.values(b));return O.jsx(y.Provider,{value:E,children:g})};f.displayName=o+"Provider";function m(h,p){var y;const g=((y=p==null?void 0:p[e])==null?void 0:y[u])||s,b=_.useContext(g);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${h}\` must be used within \`${o}\``)}return[f,m]}const i=()=>{const o=t.map(l=>_.createContext(l));return function(s){const u=(s==null?void 0:s[e])||o;return _.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return i.scopeName=e,[r,oj(i,...n)]}function oj(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const l=r.reduce((s,{useScope:u,scopeName:f})=>{const h=u(o)[`__scope${f}`];return{...s,...h}},{});return _.useMemo(()=>({[`__scope${n.scopeName}`]:l}),[l])}};return t.scopeName=n.scopeName,t}function _n(e){const n=_.useRef(e);return _.useEffect(()=>{n.current=e}),_.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}var cj=_.createContext(void 0);function Xd(e){const n=_.useContext(cj);return e||n||"ltr"}function Zg(e,[n,t]){return Math.min(t,Math.max(n,e))}function je(e,n,{checkForDefaultPrevented:t=!0}={}){return function(i){if(e==null||e(i),t===!1||!i.defaultPrevented)return n==null?void 0:n(i)}}function lj(e,n){return _.useReducer((t,r)=>n[t][r]??t,e)}var LE="ScrollArea",[EO]=Do(LE),[sj,kt]=EO(LE),CO=_.forwardRef((e,n)=>{const{__scopeScrollArea:t,type:r="hover",dir:i,scrollHideDelay:o=600,...l}=e,[s,u]=_.useState(null),[f,m]=_.useState(null),[h,p]=_.useState(null),[g,b]=_.useState(null),[y,E]=_.useState(null),[w,x]=_.useState(0),[U,I]=_.useState(0),[A,P]=_.useState(!1),[T,M]=_.useState(!1),N=tn(n,z=>u(z)),$=Xd(i);return O.jsx(sj,{scope:t,type:r,dir:$,scrollHideDelay:o,scrollArea:s,viewport:f,onViewportChange:m,content:h,onContentChange:p,scrollbarX:g,onScrollbarXChange:b,scrollbarXEnabled:A,onScrollbarXEnabledChange:P,scrollbarY:y,onScrollbarYChange:E,scrollbarYEnabled:T,onScrollbarYEnabledChange:M,onCornerWidthChange:x,onCornerHeightChange:I,children:O.jsx(Fe.div,{dir:$,...l,ref:N,style:{position:"relative","--radix-scroll-area-corner-width":w+"px","--radix-scroll-area-corner-height":U+"px",...e.style}})})});CO.displayName=LE;var bO="ScrollAreaViewport",SO=_.forwardRef((e,n)=>{const{__scopeScrollArea:t,children:r,nonce:i,...o}=e,l=kt(bO,t),s=_.useRef(null),u=tn(n,s,l.onViewportChange);return O.jsxs(O.Fragment,{children:[O.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),O.jsx(Fe.div,{"data-radix-scroll-area-viewport":"",...o,ref:u,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style},children:O.jsx("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});SO.displayName=bO;var yr="ScrollAreaScrollbar",wO=_.forwardRef((e,n)=>{const{forceMount:t,...r}=e,i=kt(yr,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:l}=i,s=e.orientation==="horizontal";return _.useEffect(()=>(s?o(!0):l(!0),()=>{s?o(!1):l(!1)}),[s,o,l]),i.type==="hover"?O.jsx(uj,{...r,ref:n,forceMount:t}):i.type==="scroll"?O.jsx(dj,{...r,ref:n,forceMount:t}):i.type==="auto"?O.jsx(xO,{...r,ref:n,forceMount:t}):i.type==="always"?O.jsx(RE,{...r,ref:n}):null});wO.displayName=yr;var uj=_.forwardRef((e,n)=>{const{forceMount:t,...r}=e,i=kt(yr,e.__scopeScrollArea),[o,l]=_.useState(!1);return _.useEffect(()=>{const s=i.scrollArea;let u=0;if(s){const f=()=>{window.clearTimeout(u),l(!0)},m=()=>{u=window.setTimeout(()=>l(!1),i.scrollHideDelay)};return s.addEventListener("pointerenter",f),s.addEventListener("pointerleave",m),()=>{window.clearTimeout(u),s.removeEventListener("pointerenter",f),s.removeEventListener("pointerleave",m)}}},[i.scrollArea,i.scrollHideDelay]),O.jsx(jo,{present:t||o,children:O.jsx(xO,{"data-state":o?"visible":"hidden",...r,ref:n})})}),dj=_.forwardRef((e,n)=>{const{forceMount:t,...r}=e,i=kt(yr,e.__scopeScrollArea),o=e.orientation==="horizontal",l=Zd(()=>u("SCROLL_END"),100),[s,u]=lj("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return _.useEffect(()=>{if(s==="idle"){const f=window.setTimeout(()=>u("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(f)}},[s,i.scrollHideDelay,u]),_.useEffect(()=>{const f=i.viewport,m=o?"scrollLeft":"scrollTop";if(f){let h=f[m];const p=()=>{const g=f[m];h!==g&&(u("SCROLL"),l()),h=g};return f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[i.viewport,o,u,l]),O.jsx(jo,{present:t||s!=="hidden",children:O.jsx(RE,{"data-state":s==="hidden"?"hidden":"visible",...r,ref:n,onPointerEnter:je(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:je(e.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),xO=_.forwardRef((e,n)=>{const t=kt(yr,e.__scopeScrollArea),{forceMount:r,...i}=e,[o,l]=_.useState(!1),s=e.orientation==="horizontal",u=Zd(()=>{if(t.viewport){const f=t.viewport.offsetWidth<t.viewport.scrollWidth,m=t.viewport.offsetHeight<t.viewport.scrollHeight;l(s?f:m)}},10);return lo(t.viewport,u),lo(t.content,u),O.jsx(jo,{present:r||o,children:O.jsx(RE,{"data-state":o?"visible":"hidden",...i,ref:n})})}),RE=_.forwardRef((e,n)=>{const{orientation:t="vertical",...r}=e,i=kt(yr,e.__scopeScrollArea),o=_.useRef(null),l=_.useRef(0),[s,u]=_.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),f=IO(s.viewport,s.content),m={...r,sizes:s,onSizesChange:u,hasThumb:f>0&&f<1,onThumbChange:p=>o.current=p,onThumbPointerUp:()=>l.current=0,onThumbPointerDown:p=>l.current=p};function h(p,g){return yj(p,l.current,s,g)}return t==="horizontal"?O.jsx(fj,{...m,ref:n,onThumbPositionChange:()=>{if(i.viewport&&o.current){const p=i.viewport.scrollLeft,g=X0(p,s,i.dir);o.current.style.transform=`translate3d(${g}px, 0, 0)`}},onWheelScroll:p=>{i.viewport&&(i.viewport.scrollLeft=p)},onDragScroll:p=>{i.viewport&&(i.viewport.scrollLeft=h(p,i.dir))}}):t==="vertical"?O.jsx(mj,{...m,ref:n,onThumbPositionChange:()=>{if(i.viewport&&o.current){const p=i.viewport.scrollTop,g=X0(p,s);o.current.style.transform=`translate3d(0, ${g}px, 0)`}},onWheelScroll:p=>{i.viewport&&(i.viewport.scrollTop=p)},onDragScroll:p=>{i.viewport&&(i.viewport.scrollTop=h(p))}}):null}),fj=_.forwardRef((e,n)=>{const{sizes:t,onSizesChange:r,...i}=e,o=kt(yr,e.__scopeScrollArea),[l,s]=_.useState(),u=_.useRef(null),f=tn(n,u,o.onScrollbarXChange);return _.useEffect(()=>{u.current&&s(getComputedStyle(u.current))},[u]),O.jsx(UO,{"data-orientation":"horizontal",...i,ref:f,sizes:t,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Jd(t)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,h)=>{if(o.viewport){const p=o.viewport.scrollLeft+m.deltaX;e.onWheelScroll(p),kO(p,h)&&m.preventDefault()}},onResize:()=>{u.current&&o.viewport&&l&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:$u(l.paddingLeft),paddingEnd:$u(l.paddingRight)}})}})}),mj=_.forwardRef((e,n)=>{const{sizes:t,onSizesChange:r,...i}=e,o=kt(yr,e.__scopeScrollArea),[l,s]=_.useState(),u=_.useRef(null),f=tn(n,u,o.onScrollbarYChange);return _.useEffect(()=>{u.current&&s(getComputedStyle(u.current))},[u]),O.jsx(UO,{"data-orientation":"vertical",...i,ref:f,sizes:t,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Jd(t)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,h)=>{if(o.viewport){const p=o.viewport.scrollTop+m.deltaY;e.onWheelScroll(p),kO(p,h)&&m.preventDefault()}},onResize:()=>{u.current&&o.viewport&&l&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:$u(l.paddingTop),paddingEnd:$u(l.paddingBottom)}})}})}),[hj,AO]=EO(yr),UO=_.forwardRef((e,n)=>{const{__scopeScrollArea:t,sizes:r,hasThumb:i,onThumbChange:o,onThumbPointerUp:l,onThumbPointerDown:s,onThumbPositionChange:u,onDragScroll:f,onWheelScroll:m,onResize:h,...p}=e,g=kt(yr,t),[b,y]=_.useState(null),E=tn(n,N=>y(N)),w=_.useRef(null),x=_.useRef(""),U=g.viewport,I=r.content-r.viewport,A=_n(m),P=_n(u),T=Zd(h,10);function M(N){if(w.current){const $=N.clientX-w.current.left,z=N.clientY-w.current.top;f({x:$,y:z})}}return _.useEffect(()=>{const N=$=>{const z=$.target;(b==null?void 0:b.contains(z))&&A($,I)};return document.addEventListener("wheel",N,{passive:!1}),()=>document.removeEventListener("wheel",N,{passive:!1})},[U,b,I,A]),_.useEffect(P,[r,P]),lo(b,T),lo(g.content,T),O.jsx(hj,{scope:t,scrollbar:b,hasThumb:i,onThumbChange:_n(o),onThumbPointerUp:_n(l),onThumbPositionChange:P,onThumbPointerDown:_n(s),children:O.jsx(Fe.div,{...p,ref:E,style:{position:"absolute",...p.style},onPointerDown:je(e.onPointerDown,N=>{N.button===0&&(N.target.setPointerCapture(N.pointerId),w.current=b.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),M(N))}),onPointerMove:je(e.onPointerMove,M),onPointerUp:je(e.onPointerUp,N=>{const $=N.target;$.hasPointerCapture(N.pointerId)&&$.releasePointerCapture(N.pointerId),document.body.style.webkitUserSelect=x.current,g.viewport&&(g.viewport.style.scrollBehavior=""),w.current=null})})})}),Fu="ScrollAreaThumb",TO=_.forwardRef((e,n)=>{const{forceMount:t,...r}=e,i=AO(Fu,e.__scopeScrollArea);return O.jsx(jo,{present:t||i.hasThumb,children:O.jsx(vj,{ref:n,...r})})}),vj=_.forwardRef((e,n)=>{const{__scopeScrollArea:t,style:r,...i}=e,o=kt(Fu,t),l=AO(Fu,t),{onThumbPositionChange:s}=l,u=tn(n,h=>l.onThumbChange(h)),f=_.useRef(void 0),m=Zd(()=>{f.current&&(f.current(),f.current=void 0)},100);return _.useEffect(()=>{const h=o.viewport;if(h){const p=()=>{if(m(),!f.current){const g=gj(h,s);f.current=g,s()}};return s(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[o.viewport,m,s]),O.jsx(Fe.div,{"data-state":l.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:je(e.onPointerDownCapture,h=>{const g=h.target.getBoundingClientRect(),b=h.clientX-g.left,y=h.clientY-g.top;l.onThumbPointerDown({x:b,y})}),onPointerUp:je(e.onPointerUp,l.onThumbPointerUp)})});TO.displayName=Fu;var jE="ScrollAreaCorner",PO=_.forwardRef((e,n)=>{const t=kt(jE,e.__scopeScrollArea),r=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&r?O.jsx(pj,{...e,ref:n}):null});PO.displayName=jE;var pj=_.forwardRef((e,n)=>{const{__scopeScrollArea:t,...r}=e,i=kt(jE,t),[o,l]=_.useState(0),[s,u]=_.useState(0),f=!!(o&&s);return lo(i.scrollbarX,()=>{var h;const m=((h=i.scrollbarX)==null?void 0:h.offsetHeight)||0;i.onCornerHeightChange(m),u(m)}),lo(i.scrollbarY,()=>{var h;const m=((h=i.scrollbarY)==null?void 0:h.offsetWidth)||0;i.onCornerWidthChange(m),l(m)}),f?O.jsx(Fe.div,{...r,ref:n,style:{width:o,height:s,position:"absolute",right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function $u(e){return e?parseInt(e,10):0}function IO(e,n){const t=e/n;return isNaN(t)?0:t}function Jd(e){const n=IO(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-t)*n;return Math.max(r,18)}function yj(e,n,t,r="ltr"){const i=Jd(t),o=i/2,l=n||o,s=i-l,u=t.scrollbar.paddingStart+l,f=t.scrollbar.size-t.scrollbar.paddingEnd-s,m=t.content-t.viewport,h=r==="ltr"?[0,m]:[m*-1,0];return OO([u,f],h)(e)}function X0(e,n,t="ltr"){const r=Jd(n),i=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,o=n.scrollbar.size-i,l=n.content-n.viewport,s=o-r,u=t==="ltr"?[0,l]:[l*-1,0],f=Zg(e,u);return OO([0,l],[0,s])(f)}function OO(e,n){return t=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const r=(n[1]-n[0])/(e[1]-e[0]);return n[0]+r*(t-e[0])}}function kO(e,n){return e>0&&e<n}var gj=(e,n=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},r=0;return(function i(){const o={left:e.scrollLeft,top:e.scrollTop},l=t.left!==o.left,s=t.top!==o.top;(l||s)&&n(),t=o,r=window.requestAnimationFrame(i)})(),()=>window.cancelAnimationFrame(r)};function Zd(e,n){const t=_n(e),r=_.useRef(0);return _.useEffect(()=>()=>window.clearTimeout(r.current),[]),_.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(t,n)},[t,n])}function lo(e,n){const t=_n(n);$n(()=>{let r=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return i.observe(e),()=>{window.cancelAnimationFrame(r),i.unobserve(e)}}},[e,t])}var Ej=CO,Cj=SO,bj=PO;function MO(e){const n=e+"CollectionProvider",[t,r]=Do(n),[i,o]=t(n,{collectionRef:{current:null},itemMap:new Map}),l=g=>{const{scope:b,children:y}=g,E=D.useRef(null),w=D.useRef(new Map).current;return O.jsx(i,{scope:b,itemMap:w,collectionRef:E,children:y})};l.displayName=n;const s=e+"CollectionSlot",u=D.forwardRef((g,b)=>{const{scope:y,children:E}=g,w=o(s,y),x=tn(b,w.collectionRef);return O.jsx(co,{ref:x,children:E})});u.displayName=s;const f=e+"CollectionItemSlot",m="data-radix-collection-item",h=D.forwardRef((g,b)=>{const{scope:y,children:E,...w}=g,x=D.useRef(null),U=tn(b,x),I=o(f,y);return D.useEffect(()=>(I.itemMap.set(x,{ref:x,...w}),()=>void I.itemMap.delete(x))),O.jsx(co,{[m]:"",ref:U,children:E})});h.displayName=f;function p(g){const b=o(e+"CollectionConsumer",g);return D.useCallback(()=>{const E=b.collectionRef.current;if(!E)return[];const w=Array.from(E.querySelectorAll(`[${m}]`));return Array.from(b.itemMap.values()).sort((I,A)=>w.indexOf(I.ref.current)-w.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:l,Slot:u,ItemSlot:h},p,r]}function Sj(e,n=globalThis==null?void 0:globalThis.document){const t=_n(e);_.useEffect(()=>{const r=i=>{i.key==="Escape"&&t(i)};return n.addEventListener("keydown",r,{capture:!0}),()=>n.removeEventListener("keydown",r,{capture:!0})},[t,n])}var wj="DismissableLayer",Qg="dismissableLayer.update",xj="dismissableLayer.pointerDownOutside",Aj="dismissableLayer.focusOutside",J0,_O=_.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),NO=_.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:s,...u}=e,f=_.useContext(_O),[m,h]=_.useState(null),p=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=_.useState({}),b=tn(n,T=>h(T)),y=Array.from(f.layers),[E]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),w=y.indexOf(E),x=m?y.indexOf(m):-1,U=f.layersWithOutsidePointerEventsDisabled.size>0,I=x>=w,A=Pj(T=>{const M=T.target,N=[...f.branches].some($=>$.contains(M));!I||N||(i==null||i(T),l==null||l(T),T.defaultPrevented||s==null||s())},p),P=Ij(T=>{const M=T.target;[...f.branches].some($=>$.contains(M))||(o==null||o(T),l==null||l(T),T.defaultPrevented||s==null||s())},p);return Sj(T=>{x===f.layers.size-1&&(r==null||r(T),!T.defaultPrevented&&s&&(T.preventDefault(),s()))},p),_.useEffect(()=>{if(m)return t&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(J0=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(m)),f.layers.add(m),Z0(),()=>{t&&f.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=J0)}},[m,p,t,f]),_.useEffect(()=>()=>{m&&(f.layers.delete(m),f.layersWithOutsidePointerEventsDisabled.delete(m),Z0())},[m,f]),_.useEffect(()=>{const T=()=>g({});return document.addEventListener(Qg,T),()=>document.removeEventListener(Qg,T)},[]),O.jsx(Fe.div,{...u,ref:b,style:{pointerEvents:U?I?"auto":"none":void 0,...e.style},onFocusCapture:je(e.onFocusCapture,P.onFocusCapture),onBlurCapture:je(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:je(e.onPointerDownCapture,A.onPointerDownCapture)})});NO.displayName=wj;var Uj="DismissableLayerBranch",Tj=_.forwardRef((e,n)=>{const t=_.useContext(_O),r=_.useRef(null),i=tn(n,r);return _.useEffect(()=>{const o=r.current;if(o)return t.branches.add(o),()=>{t.branches.delete(o)}},[t.branches]),O.jsx(Fe.div,{...e,ref:i})});Tj.displayName=Uj;function Pj(e,n=globalThis==null?void 0:globalThis.document){const t=_n(e),r=_.useRef(!1),i=_.useRef(()=>{});return _.useEffect(()=>{const o=s=>{if(s.target&&!r.current){let u=function(){LO(xj,t,f,{discrete:!0})};const f={originalEvent:s};s.pointerType==="touch"?(n.removeEventListener("click",i.current),i.current=u,n.addEventListener("click",i.current,{once:!0})):u()}else n.removeEventListener("click",i.current);r.current=!1},l=window.setTimeout(()=>{n.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(l),n.removeEventListener("pointerdown",o),n.removeEventListener("click",i.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}function Ij(e,n=globalThis==null?void 0:globalThis.document){const t=_n(e),r=_.useRef(!1);return _.useEffect(()=>{const i=o=>{o.target&&!r.current&&LO(Aj,t,{originalEvent:o},{discrete:!1})};return n.addEventListener("focusin",i),()=>n.removeEventListener("focusin",i)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Z0(){const e=new CustomEvent(Qg);document.dispatchEvent(e)}function LO(e,n,t,{discrete:r}){const i=t.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),r?tj(i,o):i.dispatchEvent(o)}var jh=0;function Oj(){_.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Q0()),document.body.insertAdjacentElement("beforeend",e[1]??Q0()),jh++,()=>{jh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),jh--}},[])}function Q0(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Dh="focusScope.autoFocusOnMount",Bh="focusScope.autoFocusOnUnmount",ew={bubbles:!1,cancelable:!0},kj="FocusScope",RO=_.forwardRef((e,n)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...l}=e,[s,u]=_.useState(null),f=_n(i),m=_n(o),h=_.useRef(null),p=tn(n,y=>u(y)),g=_.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;_.useEffect(()=>{if(r){let y=function(U){if(g.paused||!s)return;const I=U.target;s.contains(I)?h.current=I:di(h.current,{select:!0})},E=function(U){if(g.paused||!s)return;const I=U.relatedTarget;I!==null&&(s.contains(I)||di(h.current,{select:!0}))},w=function(U){if(document.activeElement===document.body)for(const A of U)A.removedNodes.length>0&&di(s)};document.addEventListener("focusin",y),document.addEventListener("focusout",E);const x=new MutationObserver(w);return s&&x.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",E),x.disconnect()}}},[r,s,g.paused]),_.useEffect(()=>{if(s){tw.add(g);const y=document.activeElement;if(!s.contains(y)){const w=new CustomEvent(Dh,ew);s.addEventListener(Dh,f),s.dispatchEvent(w),w.defaultPrevented||(Mj(jj(jO(s)),{select:!0}),document.activeElement===y&&di(s))}return()=>{s.removeEventListener(Dh,f),setTimeout(()=>{const w=new CustomEvent(Bh,ew);s.addEventListener(Bh,m),s.dispatchEvent(w),w.defaultPrevented||di(y??document.body,{select:!0}),s.removeEventListener(Bh,m),tw.remove(g)},0)}}},[s,f,m,g]);const b=_.useCallback(y=>{if(!t&&!r||g.paused)return;const E=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,w=document.activeElement;if(E&&w){const x=y.currentTarget,[U,I]=_j(x);U&&I?!y.shiftKey&&w===I?(y.preventDefault(),t&&di(U,{select:!0})):y.shiftKey&&w===U&&(y.preventDefault(),t&&di(I,{select:!0})):w===x&&y.preventDefault()}},[t,r,g.paused]);return O.jsx(Fe.div,{tabIndex:-1,...l,ref:p,onKeyDown:b})});RO.displayName=kj;function Mj(e,{select:n=!1}={}){const t=document.activeElement;for(const r of e)if(di(r,{select:n}),document.activeElement!==t)return}function _j(e){const n=jO(e),t=nw(n,e),r=nw(n.reverse(),e);return[t,r]}function jO(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function nw(e,n){for(const t of e)if(!Nj(t,{upTo:n}))return t}function Nj(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Lj(e){return e instanceof HTMLInputElement&&"select"in e}function di(e,{select:n=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&Lj(e)&&n&&e.select()}}var tw=Rj();function Rj(){let e=[];return{add(n){const t=e[0];n!==t&&(t==null||t.pause()),e=rw(e,n),e.unshift(n)},remove(n){var t;e=rw(e,n),(t=e[0])==null||t.resume()}}}function rw(e,n){const t=[...e],r=t.indexOf(n);return r!==-1&&t.splice(r,1),t}function jj(e){return e.filter(n=>n.tagName!=="A")}var Dj=YR.useId||(()=>{}),Bj=0;function Kl(e){const[n,t]=_.useState(Dj());return $n(()=>{t(r=>r??String(Bj++))},[e]),e||(n?`radix-${n}`:"")}const zj=["top","right","bottom","left"],Ei=Math.min,mt=Math.max,Gu=Math.round,hu=Math.floor,ur=e=>({x:e,y:e}),Fj={left:"right",right:"left",bottom:"top",top:"bottom"};function e1(e,n,t){return mt(e,Ei(n,t))}function Rr(e,n){return typeof e=="function"?e(n):e}function jr(e){return e.split("-")[0]}function Bo(e){return e.split("-")[1]}function DE(e){return e==="x"?"y":"x"}function BE(e){return e==="y"?"height":"width"}function cr(e){const n=e[0];return n==="t"||n==="b"?"y":"x"}function zE(e){return DE(cr(e))}function $j(e,n,t){t===void 0&&(t=!1);const r=Bo(e),i=zE(e),o=BE(i);let l=i==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[o]>n.floating[o]&&(l=Hu(l)),[l,Hu(l)]}function Gj(e){const n=Hu(e);return[n1(e),n,n1(n)]}function n1(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const iw=["left","right"],aw=["right","left"],Hj=["top","bottom"],Wj=["bottom","top"];function Vj(e,n,t){switch(e){case"top":case"bottom":return t?n?aw:iw:n?iw:aw;case"left":case"right":return n?Hj:Wj;default:return[]}}function Kj(e,n,t,r){const i=Bo(e);let o=Vj(jr(e),t==="start",r);return i&&(o=o.map(l=>l+"-"+i),n&&(o=o.concat(o.map(n1)))),o}function Hu(e){const n=jr(e);return Fj[n]+e.slice(n.length)}function qj(e){return{top:0,right:0,bottom:0,left:0,...e}}function DO(e){return typeof e!="number"?qj(e):{top:e,right:e,bottom:e,left:e}}function Wu(e){const{x:n,y:t,width:r,height:i}=e;return{width:r,height:i,top:t,left:n,right:n+r,bottom:t+i,x:n,y:t}}function ow(e,n,t){let{reference:r,floating:i}=e;const o=cr(n),l=zE(n),s=BE(l),u=jr(n),f=o==="y",m=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,p=r[s]/2-i[s]/2;let g;switch(u){case"top":g={x:m,y:r.y-i.height};break;case"bottom":g={x:m,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:h};break;case"left":g={x:r.x-i.width,y:h};break;default:g={x:r.x,y:r.y}}switch(Bo(n)){case"start":g[l]-=p*(t&&f?-1:1);break;case"end":g[l]+=p*(t&&f?-1:1);break}return g}async function Yj(e,n){var t;n===void 0&&(n={});const{x:r,y:i,platform:o,rects:l,elements:s,strategy:u}=e,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:p=!1,padding:g=0}=Rr(n,e),b=DO(g),E=s[p?h==="floating"?"reference":"floating":h],w=Wu(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(E)))==null||t?E:E.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(s.floating)),boundary:f,rootBoundary:m,strategy:u})),x=h==="floating"?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,U=await(o.getOffsetParent==null?void 0:o.getOffsetParent(s.floating)),I=await(o.isElement==null?void 0:o.isElement(U))?await(o.getScale==null?void 0:o.getScale(U))||{x:1,y:1}:{x:1,y:1},A=Wu(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:x,offsetParent:U,strategy:u}):x);return{top:(w.top-A.top+b.top)/I.y,bottom:(A.bottom-w.bottom+b.bottom)/I.y,left:(w.left-A.left+b.left)/I.x,right:(A.right-w.right+b.right)/I.x}}const Xj=50,Jj=async(e,n,t)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=t,s=l.detectOverflow?l:{...l,detectOverflow:Yj},u=await(l.isRTL==null?void 0:l.isRTL(n));let f=await l.getElementRects({reference:e,floating:n,strategy:i}),{x:m,y:h}=ow(f,r,u),p=r,g=0;const b={};for(let y=0;y<o.length;y++){const E=o[y];if(!E)continue;const{name:w,fn:x}=E,{x:U,y:I,data:A,reset:P}=await x({x:m,y:h,initialPlacement:r,placement:p,strategy:i,middlewareData:b,rects:f,platform:s,elements:{reference:e,floating:n}});m=U??m,h=I??h,b[w]={...b[w],...A},P&&g<Xj&&(g++,typeof P=="object"&&(P.placement&&(p=P.placement),P.rects&&(f=P.rects===!0?await l.getElementRects({reference:e,floating:n,strategy:i}):P.rects),{x:m,y:h}=ow(f,p,u)),y=-1)}return{x:m,y:h,placement:p,strategy:i,middlewareData:b}},Zj=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:i,rects:o,platform:l,elements:s,middlewareData:u}=n,{element:f,padding:m=0}=Rr(e,n)||{};if(f==null)return{};const h=DO(m),p={x:t,y:r},g=zE(i),b=BE(g),y=await l.getDimensions(f),E=g==="y",w=E?"top":"left",x=E?"bottom":"right",U=E?"clientHeight":"clientWidth",I=o.reference[b]+o.reference[g]-p[g]-o.floating[b],A=p[g]-o.reference[g],P=await(l.getOffsetParent==null?void 0:l.getOffsetParent(f));let T=P?P[U]:0;(!T||!await(l.isElement==null?void 0:l.isElement(P)))&&(T=s.floating[U]||o.floating[b]);const M=I/2-A/2,N=T/2-y[b]/2-1,$=Ei(h[w],N),z=Ei(h[x],N),j=$,H=T-y[b]-z,V=T/2-y[b]/2+M,K=e1(j,V,H),W=!u.arrow&&Bo(i)!=null&&V!==K&&o.reference[b]/2-(V<j?$:z)-y[b]/2<0,X=W?V<j?V-j:V-H:0;return{[g]:p[g]+X,data:{[g]:K,centerOffset:V-K-X,...W&&{alignmentOffset:X}},reset:W}}}),Qj=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:i,middlewareData:o,rects:l,initialPlacement:s,platform:u,elements:f}=n,{mainAxis:m=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...E}=Rr(e,n);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const w=jr(i),x=cr(s),U=jr(s)===s,I=await(u.isRTL==null?void 0:u.isRTL(f.floating)),A=p||(U||!y?[Hu(s)]:Gj(s)),P=b!=="none";!p&&P&&A.push(...Kj(s,y,b,I));const T=[s,...A],M=await u.detectOverflow(n,E),N=[];let $=((r=o.flip)==null?void 0:r.overflows)||[];if(m&&N.push(M[w]),h){const V=$j(i,l,I);N.push(M[V[0]],M[V[1]])}if($=[...$,{placement:i,overflows:N}],!N.every(V=>V<=0)){var z,j;const V=(((z=o.flip)==null?void 0:z.index)||0)+1,K=T[V];if(K&&(!(h==="alignment"?x!==cr(K):!1)||$.every(R=>cr(R.placement)===x?R.overflows[0]>0:!0)))return{data:{index:V,overflows:$},reset:{placement:K}};let W=(j=$.filter(X=>X.overflows[0]<=0).sort((X,R)=>X.overflows[1]-R.overflows[1])[0])==null?void 0:j.placement;if(!W)switch(g){case"bestFit":{var H;const X=(H=$.filter(R=>{if(P){const Z=cr(R.placement);return Z===x||Z==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(Z=>Z>0).reduce((Z,Q)=>Z+Q,0)]).sort((R,Z)=>R[1]-Z[1])[0])==null?void 0:H[0];X&&(W=X);break}case"initialPlacement":W=s;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function cw(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function lw(e){return zj.some(n=>e[n]>=0)}const eD=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t,platform:r}=n,{strategy:i="referenceHidden",...o}=Rr(e,n);switch(i){case"referenceHidden":{const l=await r.detectOverflow(n,{...o,elementContext:"reference"}),s=cw(l,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:lw(s)}}}case"escaped":{const l=await r.detectOverflow(n,{...o,altBoundary:!0}),s=cw(l,t.floating);return{data:{escapedOffsets:s,escaped:lw(s)}}}default:return{}}}}},BO=new Set(["left","top"]);async function nD(e,n){const{placement:t,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),l=jr(t),s=Bo(t),u=cr(t)==="y",f=BO.has(l)?-1:1,m=o&&u?-1:1,h=Rr(n,e);let{mainAxis:p,crossAxis:g,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return s&&typeof b=="number"&&(g=s==="end"?b*-1:b),u?{x:g*m,y:p*f}:{x:p*f,y:g*m}}const tD=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:i,y:o,placement:l,middlewareData:s}=n,u=await nD(n,e);return l===((t=s.offset)==null?void 0:t.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:o+u.y,data:{...u,placement:l}}}}},rD=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:i,platform:o}=n,{mainAxis:l=!0,crossAxis:s=!1,limiter:u={fn:w=>{let{x,y:U}=w;return{x,y:U}}},...f}=Rr(e,n),m={x:t,y:r},h=await o.detectOverflow(n,f),p=cr(jr(i)),g=DE(p);let b=m[g],y=m[p];if(l){const w=g==="y"?"top":"left",x=g==="y"?"bottom":"right",U=b+h[w],I=b-h[x];b=e1(U,b,I)}if(s){const w=p==="y"?"top":"left",x=p==="y"?"bottom":"right",U=y+h[w],I=y-h[x];y=e1(U,y,I)}const E=u.fn({...n,[g]:b,[p]:y});return{...E,data:{x:E.x-t,y:E.y-r,enabled:{[g]:l,[p]:s}}}}}},iD=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:r,placement:i,rects:o,middlewareData:l}=n,{offset:s=0,mainAxis:u=!0,crossAxis:f=!0}=Rr(e,n),m={x:t,y:r},h=cr(i),p=DE(h);let g=m[p],b=m[h];const y=Rr(s,n),E=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(u){const U=p==="y"?"height":"width",I=o.reference[p]-o.floating[U]+E.mainAxis,A=o.reference[p]+o.reference[U]-E.mainAxis;g<I?g=I:g>A&&(g=A)}if(f){var w,x;const U=p==="y"?"width":"height",I=BO.has(jr(i)),A=o.reference[h]-o.floating[U]+(I&&((w=l.offset)==null?void 0:w[h])||0)+(I?0:E.crossAxis),P=o.reference[h]+o.reference[U]+(I?0:((x=l.offset)==null?void 0:x[h])||0)-(I?E.crossAxis:0);b<A?b=A:b>P&&(b=P)}return{[p]:g,[h]:b}}}},aD=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,r;const{placement:i,rects:o,platform:l,elements:s}=n,{apply:u=()=>{},...f}=Rr(e,n),m=await l.detectOverflow(n,f),h=jr(i),p=Bo(i),g=cr(i)==="y",{width:b,height:y}=o.floating;let E,w;h==="top"||h==="bottom"?(E=h,w=p===(await(l.isRTL==null?void 0:l.isRTL(s.floating))?"start":"end")?"left":"right"):(w=h,E=p==="end"?"top":"bottom");const x=y-m.top-m.bottom,U=b-m.left-m.right,I=Ei(y-m[E],x),A=Ei(b-m[w],U),P=!n.middlewareData.shift;let T=I,M=A;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(M=U),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(T=x),P&&!p){const $=mt(m.left,0),z=mt(m.right,0),j=mt(m.top,0),H=mt(m.bottom,0);g?M=b-2*($!==0||z!==0?$+z:mt(m.left,m.right)):T=y-2*(j!==0||H!==0?j+H:mt(m.top,m.bottom))}await u({...n,availableWidth:M,availableHeight:T});const N=await l.getDimensions(s.floating);return b!==N.width||y!==N.height?{reset:{rects:!0}}:{}}}};function Qd(){return typeof window<"u"}function zo(e){return zO(e)?(e.nodeName||"").toLowerCase():"#document"}function pt(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function gr(e){var n;return(n=(zO(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function zO(e){return Qd()?e instanceof Node||e instanceof pt(e).Node:!1}function Xt(e){return Qd()?e instanceof Element||e instanceof pt(e).Element:!1}function Fr(e){return Qd()?e instanceof HTMLElement||e instanceof pt(e).HTMLElement:!1}function sw(e){return!Qd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pt(e).ShadowRoot}function ql(e){const{overflow:n,overflowX:t,overflowY:r,display:i}=Jt(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&i!=="inline"&&i!=="contents"}function oD(e){return/^(table|td|th)$/.test(zo(e))}function ef(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const cD=/transform|translate|scale|rotate|perspective|filter/,lD=/paint|layout|strict|content/,$i=e=>!!e&&e!=="none";let zh;function FE(e){const n=Xt(e)?Jt(e):e;return $i(n.transform)||$i(n.translate)||$i(n.scale)||$i(n.rotate)||$i(n.perspective)||!$E()&&($i(n.backdropFilter)||$i(n.filter))||cD.test(n.willChange||"")||lD.test(n.contain||"")}function sD(e){let n=Ci(e);for(;Fr(n)&&!so(n);){if(FE(n))return n;if(ef(n))return null;n=Ci(n)}return null}function $E(){return zh==null&&(zh=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zh}function so(e){return/^(html|body|#document)$/.test(zo(e))}function Jt(e){return pt(e).getComputedStyle(e)}function nf(e){return Xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ci(e){if(zo(e)==="html")return e;const n=e.assignedSlot||e.parentNode||sw(e)&&e.host||gr(e);return sw(n)?n.host:n}function FO(e){const n=Ci(e);return so(n)?e.ownerDocument?e.ownerDocument.body:e.body:Fr(n)&&ql(n)?n:FO(n)}function cl(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const i=FO(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),l=pt(i);if(o){const s=t1(l);return n.concat(l,l.visualViewport||[],ql(i)?i:[],s&&t?cl(s):[])}else return n.concat(i,cl(i,[],t))}function t1(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $O(e){const n=Jt(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const i=Fr(e),o=i?e.offsetWidth:t,l=i?e.offsetHeight:r,s=Gu(t)!==o||Gu(r)!==l;return s&&(t=o,r=l),{width:t,height:r,$:s}}function GE(e){return Xt(e)?e:e.contextElement}function no(e){const n=GE(e);if(!Fr(n))return ur(1);const t=n.getBoundingClientRect(),{width:r,height:i,$:o}=$O(n);let l=(o?Gu(t.width):t.width)/r,s=(o?Gu(t.height):t.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const uD=ur(0);function GO(e){const n=pt(e);return!$E()||!n.visualViewport?uD:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function dD(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==pt(e)?!1:n}function aa(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),o=GE(e);let l=ur(1);n&&(r?Xt(r)&&(l=no(r)):l=no(e));const s=dD(o,t,r)?GO(o):ur(0);let u=(i.left+s.x)/l.x,f=(i.top+s.y)/l.y,m=i.width/l.x,h=i.height/l.y;if(o){const p=pt(o),g=r&&Xt(r)?pt(r):r;let b=p,y=t1(b);for(;y&&r&&g!==b;){const E=no(y),w=y.getBoundingClientRect(),x=Jt(y),U=w.left+(y.clientLeft+parseFloat(x.paddingLeft))*E.x,I=w.top+(y.clientTop+parseFloat(x.paddingTop))*E.y;u*=E.x,f*=E.y,m*=E.x,h*=E.y,u+=U,f+=I,b=pt(y),y=t1(b)}}return Wu({width:m,height:h,x:u,y:f})}function tf(e,n){const t=nf(e).scrollLeft;return n?n.left+t:aa(gr(e)).left+t}function HO(e,n){const t=e.getBoundingClientRect(),r=t.left+n.scrollLeft-tf(e,t),i=t.top+n.scrollTop;return{x:r,y:i}}function fD(e){let{elements:n,rect:t,offsetParent:r,strategy:i}=e;const o=i==="fixed",l=gr(r),s=n?ef(n.floating):!1;if(r===l||s&&o)return t;let u={scrollLeft:0,scrollTop:0},f=ur(1);const m=ur(0),h=Fr(r);if((h||!h&&!o)&&((zo(r)!=="body"||ql(l))&&(u=nf(r)),h)){const g=aa(r);f=no(r),m.x=g.x+r.clientLeft,m.y=g.y+r.clientTop}const p=l&&!h&&!o?HO(l,u):ur(0);return{width:t.width*f.x,height:t.height*f.y,x:t.x*f.x-u.scrollLeft*f.x+m.x+p.x,y:t.y*f.y-u.scrollTop*f.y+m.y+p.y}}function mD(e){return Array.from(e.getClientRects())}function hD(e){const n=gr(e),t=nf(e),r=e.ownerDocument.body,i=mt(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),o=mt(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let l=-t.scrollLeft+tf(e);const s=-t.scrollTop;return Jt(r).direction==="rtl"&&(l+=mt(n.clientWidth,r.clientWidth)-i),{width:i,height:o,x:l,y:s}}const uw=25;function vD(e,n){const t=pt(e),r=gr(e),i=t.visualViewport;let o=r.clientWidth,l=r.clientHeight,s=0,u=0;if(i){o=i.width,l=i.height;const m=$E();(!m||m&&n==="fixed")&&(s=i.offsetLeft,u=i.offsetTop)}const f=tf(r);if(f<=0){const m=r.ownerDocument,h=m.body,p=getComputedStyle(h),g=m.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,b=Math.abs(r.clientWidth-h.clientWidth-g);b<=uw&&(o-=b)}else f<=uw&&(o+=f);return{width:o,height:l,x:s,y:u}}function pD(e,n){const t=aa(e,!0,n==="fixed"),r=t.top+e.clientTop,i=t.left+e.clientLeft,o=Fr(e)?no(e):ur(1),l=e.clientWidth*o.x,s=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:l,height:s,x:u,y:f}}function dw(e,n,t){let r;if(n==="viewport")r=vD(e,t);else if(n==="document")r=hD(gr(e));else if(Xt(n))r=pD(n,t);else{const i=GO(e);r={x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height}}return Wu(r)}function WO(e,n){const t=Ci(e);return t===n||!Xt(t)||so(t)?!1:Jt(t).position==="fixed"||WO(t,n)}function yD(e,n){const t=n.get(e);if(t)return t;let r=cl(e,[],!1).filter(s=>Xt(s)&&zo(s)!=="body"),i=null;const o=Jt(e).position==="fixed";let l=o?Ci(e):e;for(;Xt(l)&&!so(l);){const s=Jt(l),u=FE(l);!u&&s.position==="fixed"&&(i=null),(o?!u&&!i:!u&&s.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||ql(l)&&!u&&WO(e,l))?r=r.filter(m=>m!==l):i=s,l=Ci(l)}return n.set(e,r),r}function gD(e){let{element:n,boundary:t,rootBoundary:r,strategy:i}=e;const l=[...t==="clippingAncestors"?ef(n)?[]:yD(n,this._c):[].concat(t),r],s=dw(n,l[0],i);let u=s.top,f=s.right,m=s.bottom,h=s.left;for(let p=1;p<l.length;p++){const g=dw(n,l[p],i);u=mt(g.top,u),f=Ei(g.right,f),m=Ei(g.bottom,m),h=mt(g.left,h)}return{width:f-h,height:m-u,x:h,y:u}}function ED(e){const{width:n,height:t}=$O(e);return{width:n,height:t}}function CD(e,n,t){const r=Fr(n),i=gr(n),o=t==="fixed",l=aa(e,!0,o,n);let s={scrollLeft:0,scrollTop:0};const u=ur(0);function f(){u.x=tf(i)}if(r||!r&&!o)if((zo(n)!=="body"||ql(i))&&(s=nf(n)),r){const g=aa(n,!0,o,n);u.x=g.x+n.clientLeft,u.y=g.y+n.clientTop}else i&&f();o&&!r&&i&&f();const m=i&&!r&&!o?HO(i,s):ur(0),h=l.left+s.scrollLeft-u.x-m.x,p=l.top+s.scrollTop-u.y-m.y;return{x:h,y:p,width:l.width,height:l.height}}function Fh(e){return Jt(e).position==="static"}function fw(e,n){if(!Fr(e)||Jt(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return gr(e)===t&&(t=t.ownerDocument.body),t}function VO(e,n){const t=pt(e);if(ef(e))return t;if(!Fr(e)){let i=Ci(e);for(;i&&!so(i);){if(Xt(i)&&!Fh(i))return i;i=Ci(i)}return t}let r=fw(e,n);for(;r&&oD(r)&&Fh(r);)r=fw(r,n);return r&&so(r)&&Fh(r)&&!FE(r)?t:r||sD(e)||t}const bD=async function(e){const n=this.getOffsetParent||VO,t=this.getDimensions,r=await t(e.floating);return{reference:CD(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function SD(e){return Jt(e).direction==="rtl"}const wD={convertOffsetParentRelativeRectToViewportRelativeRect:fD,getDocumentElement:gr,getClippingRect:gD,getOffsetParent:VO,getElementRects:bD,getClientRects:mD,getDimensions:ED,getScale:no,isElement:Xt,isRTL:SD};function KO(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function xD(e,n){let t=null,r;const i=gr(e);function o(){var s;clearTimeout(r),(s=t)==null||s.disconnect(),t=null}function l(s,u){s===void 0&&(s=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:m,top:h,width:p,height:g}=f;if(s||n(),!p||!g)return;const b=hu(h),y=hu(i.clientWidth-(m+p)),E=hu(i.clientHeight-(h+g)),w=hu(m),U={rootMargin:-b+"px "+-y+"px "+-E+"px "+-w+"px",threshold:mt(0,Ei(1,u))||1};let I=!0;function A(P){const T=P[0].intersectionRatio;if(T!==u){if(!I)return l();T?l(!1,T):r=setTimeout(()=>{l(!1,1e-7)},1e3)}T===1&&!KO(f,e.getBoundingClientRect())&&l(),I=!1}try{t=new IntersectionObserver(A,{...U,root:i.ownerDocument})}catch{t=new IntersectionObserver(A,U)}t.observe(e)}return l(!0),o}function AD(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=GE(e),m=i||o?[...f?cl(f):[],...n?cl(n):[]]:[];m.forEach(w=>{i&&w.addEventListener("scroll",t,{passive:!0}),o&&w.addEventListener("resize",t)});const h=f&&s?xD(f,t):null;let p=-1,g=null;l&&(g=new ResizeObserver(w=>{let[x]=w;x&&x.target===f&&g&&n&&(g.unobserve(n),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var U;(U=g)==null||U.observe(n)})),t()}),f&&!u&&g.observe(f),n&&g.observe(n));let b,y=u?aa(e):null;u&&E();function E(){const w=aa(e);y&&!KO(y,w)&&t(),y=w,b=requestAnimationFrame(E)}return t(),()=>{var w;m.forEach(x=>{i&&x.removeEventListener("scroll",t),o&&x.removeEventListener("resize",t)}),h==null||h(),(w=g)==null||w.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const UD=tD,TD=rD,PD=Qj,ID=aD,OD=eD,mw=Zj,kD=iD,MD=(e,n,t)=>{const r=new Map,i={platform:wD,...t},o={...i.platform,_c:r};return Jj(e,n,{...i,platform:o})};var _D=typeof document<"u",ND=function(){},ju=_D?_.useLayoutEffect:ND;function Vu(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,i;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!Vu(e[r],n[r]))return!1;return!0}if(i=Object.keys(e),t=i.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,i[r]))return!1;for(r=t;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!Vu(e[o],n[o]))return!1}return!0}return e!==e&&n!==n}function qO(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hw(e,n){const t=qO(e);return Math.round(n*t)/t}function $h(e){const n=_.useRef(e);return ju(()=>{n.current=e}),n}function LD(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:l}={},transform:s=!0,whileElementsMounted:u,open:f}=e,[m,h]=_.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[p,g]=_.useState(r);Vu(p,r)||g(r);const[b,y]=_.useState(null),[E,w]=_.useState(null),x=_.useCallback(R=>{R!==P.current&&(P.current=R,y(R))},[]),U=_.useCallback(R=>{R!==T.current&&(T.current=R,w(R))},[]),I=o||b,A=l||E,P=_.useRef(null),T=_.useRef(null),M=_.useRef(m),N=u!=null,$=$h(u),z=$h(i),j=$h(f),H=_.useCallback(()=>{if(!P.current||!T.current)return;const R={placement:n,strategy:t,middleware:p};z.current&&(R.platform=z.current),MD(P.current,T.current,R).then(Z=>{const Q={...Z,isPositioned:j.current!==!1};V.current&&!Vu(M.current,Q)&&(M.current=Q,Vl.flushSync(()=>{h(Q)}))})},[p,n,t,z,j]);ju(()=>{f===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,h(R=>({...R,isPositioned:!1})))},[f]);const V=_.useRef(!1);ju(()=>(V.current=!0,()=>{V.current=!1}),[]),ju(()=>{if(I&&(P.current=I),A&&(T.current=A),I&&A){if($.current)return $.current(I,A,H);H()}},[I,A,H,$,N]);const K=_.useMemo(()=>({reference:P,floating:T,setReference:x,setFloating:U}),[x,U]),W=_.useMemo(()=>({reference:I,floating:A}),[I,A]),X=_.useMemo(()=>{const R={position:t,left:0,top:0};if(!W.floating)return R;const Z=hw(W.floating,m.x),Q=hw(W.floating,m.y);return s?{...R,transform:"translate("+Z+"px, "+Q+"px)",...qO(W.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:Z,top:Q}},[t,s,W.floating,m.x,m.y]);return _.useMemo(()=>({...m,update:H,refs:K,elements:W,floatingStyles:X}),[m,H,K,W,X])}const RD=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:i}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?mw({element:r.current,padding:i}).fn(t):{}:r?mw({element:r,padding:i}).fn(t):{}}}},jD=(e,n)=>{const t=UD(e);return{name:t.name,fn:t.fn,options:[e,n]}},DD=(e,n)=>{const t=TD(e);return{name:t.name,fn:t.fn,options:[e,n]}},BD=(e,n)=>({fn:kD(e).fn,options:[e,n]}),zD=(e,n)=>{const t=PD(e);return{name:t.name,fn:t.fn,options:[e,n]}},FD=(e,n)=>{const t=ID(e);return{name:t.name,fn:t.fn,options:[e,n]}},$D=(e,n)=>{const t=OD(e);return{name:t.name,fn:t.fn,options:[e,n]}},GD=(e,n)=>{const t=RD(e);return{name:t.name,fn:t.fn,options:[e,n]}};var HD="Arrow",YO=_.forwardRef((e,n)=>{const{children:t,width:r=10,height:i=5,...o}=e;return O.jsx(Fe.svg,{...o,ref:n,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:O.jsx("polygon",{points:"0,0 30,0 15,10"})})});YO.displayName=HD;var WD=YO;function VD(e){const[n,t]=_.useState(void 0);return $n(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let l,s;if("borderBoxSize"in o){const u=o.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,s=f.blockSize}else l=e.offsetWidth,s=e.offsetHeight;t({width:l,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),n}var HE="Popper",[XO,JO]=Do(HE),[KD,ZO]=XO(HE),QO=e=>{const{__scopePopper:n,children:t}=e,[r,i]=_.useState(null);return O.jsx(KD,{scope:n,anchor:r,onAnchorChange:i,children:t})};QO.displayName=HE;var ek="PopperAnchor",nk=_.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:r,...i}=e,o=ZO(ek,t),l=_.useRef(null),s=tn(n,l);return _.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||l.current)}),r?null:O.jsx(Fe.div,{...i,ref:s})});nk.displayName=ek;var WE="PopperContent",[qD,YD]=XO(WE),tk=_.forwardRef((e,n)=>{var ce,he,re,ue,me,ne;const{__scopePopper:t,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:l=0,arrowPadding:s=0,avoidCollisions:u=!0,collisionBoundary:f=[],collisionPadding:m=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:g="optimized",onPlaced:b,...y}=e,E=ZO(WE,t),[w,x]=_.useState(null),U=tn(n,_e=>x(_e)),[I,A]=_.useState(null),P=VD(I),T=(P==null?void 0:P.width)??0,M=(P==null?void 0:P.height)??0,N=r+(o!=="center"?"-"+o:""),$=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},z=Array.isArray(f)?f:[f],j=z.length>0,H={padding:$,boundary:z.filter(JD),altBoundary:j},{refs:V,floatingStyles:K,placement:W,isPositioned:X,middlewareData:R}=LD({strategy:"fixed",placement:N,whileElementsMounted:(..._e)=>AD(..._e,{animationFrame:g==="always"}),elements:{reference:E.anchor},middleware:[jD({mainAxis:i+M,alignmentAxis:l}),u&&DD({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?BD():void 0,...H}),u&&zD({...H}),FD({...H,apply:({elements:_e,rects:Pe,availableWidth:Ve,availableHeight:Ke})=>{const{width:rn,height:at}=Pe.reference,Gn=_e.floating.style;Gn.setProperty("--radix-popper-available-width",`${Ve}px`),Gn.setProperty("--radix-popper-available-height",`${Ke}px`),Gn.setProperty("--radix-popper-anchor-width",`${rn}px`),Gn.setProperty("--radix-popper-anchor-height",`${at}px`)}}),I&&GD({element:I,padding:s}),ZD({arrowWidth:T,arrowHeight:M}),p&&$D({strategy:"referenceHidden",...H})]}),[Z,Q]=ak(W),B=_n(b);$n(()=>{X&&(B==null||B())},[X,B]);const q=(ce=R.arrow)==null?void 0:ce.x,ie=(he=R.arrow)==null?void 0:he.y,de=((re=R.arrow)==null?void 0:re.centerOffset)!==0,[ge,xe]=_.useState();return $n(()=>{w&&xe(window.getComputedStyle(w).zIndex)},[w]),O.jsx("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:X?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ge,"--radix-popper-transform-origin":[(ue=R.transformOrigin)==null?void 0:ue.x,(me=R.transformOrigin)==null?void 0:me.y].join(" "),...((ne=R.hide)==null?void 0:ne.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:O.jsx(qD,{scope:t,placedSide:Z,onArrowChange:A,arrowX:q,arrowY:ie,shouldHideArrow:de,children:O.jsx(Fe.div,{"data-side":Z,"data-align":Q,...y,ref:U,style:{...y.style,animation:X?void 0:"none"}})})})});tk.displayName=WE;var rk="PopperArrow",XD={top:"bottom",right:"left",bottom:"top",left:"right"},ik=_.forwardRef(function(n,t){const{__scopePopper:r,...i}=n,o=YD(rk,r),l=XD[o.placedSide];return O.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:O.jsx(WD,{...i,ref:t,style:{...i.style,display:"block"}})})});ik.displayName=rk;function JD(e){return e!==null}var ZD=e=>({name:"transformOrigin",options:e,fn(n){var E,w,x;const{placement:t,rects:r,middlewareData:i}=n,l=((E=i.arrow)==null?void 0:E.centerOffset)!==0,s=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[f,m]=ak(t),h={start:"0%",center:"50%",end:"100%"}[m],p=(((w=i.arrow)==null?void 0:w.x)??0)+s/2,g=(((x=i.arrow)==null?void 0:x.y)??0)+u/2;let b="",y="";return f==="bottom"?(b=l?h:`${p}px`,y=`${-u}px`):f==="top"?(b=l?h:`${p}px`,y=`${r.floating.height+u}px`):f==="right"?(b=`${-u}px`,y=l?h:`${g}px`):f==="left"&&(b=`${r.floating.width+u}px`,y=l?h:`${g}px`),{data:{x:b,y}}}});function ak(e){const[n,t="center"]=e.split("-");return[n,t]}var QD=QO,eB=nk,nB=tk,tB=ik,rB="Portal",ok=_.forwardRef((e,n)=>{var s;const{container:t,...r}=e,[i,o]=_.useState(!1);$n(()=>o(!0),[]);const l=t||i&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return l?XR.createPortal(O.jsx(Fe.div,{...r,ref:n}),l):null});ok.displayName=rB;function Ku({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,i]=iB({defaultProp:n,onChange:t}),o=e!==void 0,l=o?e:r,s=_n(t),u=_.useCallback(f=>{if(o){const h=typeof f=="function"?f(e):f;h!==e&&s(h)}else i(f)},[o,e,i,s]);return[l,u]}function iB({defaultProp:e,onChange:n}){const t=_.useState(e),[r]=t,i=_.useRef(r),o=_n(n);return _.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),t}function aB(e){const n=_.useRef({value:e,previous:e});return _.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}var oB="VisuallyHidden",ck=_.forwardRef((e,n)=>O.jsx(Fe.span,{...e,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));ck.displayName=oB;var cB=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},Ha=new WeakMap,vu=new WeakMap,pu={},Gh=0,lk=function(e){return e&&(e.host||lk(e.parentNode))},lB=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=lk(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},sB=function(e,n,t,r){var i=lB(n,Array.isArray(e)?e:[e]);pu[t]||(pu[t]=new WeakMap);var o=pu[t],l=[],s=new Set,u=new Set(i),f=function(h){!h||s.has(h)||(s.add(h),f(h.parentNode))};i.forEach(f);var m=function(h){!h||u.has(h)||Array.prototype.forEach.call(h.children,function(p){if(s.has(p))m(p);else try{var g=p.getAttribute(r),b=g!==null&&g!=="false",y=(Ha.get(p)||0)+1,E=(o.get(p)||0)+1;Ha.set(p,y),o.set(p,E),l.push(p),y===1&&b&&vu.set(p,!0),E===1&&p.setAttribute(t,"true"),b||p.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",p,w)}})};return m(n),s.clear(),Gh++,function(){l.forEach(function(h){var p=Ha.get(h)-1,g=o.get(h)-1;Ha.set(h,p),o.set(h,g),p||(vu.has(h)||h.removeAttribute(r),vu.delete(h)),g||h.removeAttribute(t)}),Gh--,Gh||(Ha=new WeakMap,Ha=new WeakMap,vu=new WeakMap,pu={})}},uB=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=cB(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live], script"))),sB(r,i,t,"aria-hidden")):function(){return null}},or=function(){return or=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},or.apply(this,arguments)};function sk(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t}function dB(e,n,t){if(t||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}var Du="right-scroll-bar-position",Bu="width-before-scroll-bar",fB="with-scroll-bars-hidden",mB="--removed-body-scroll-bar-size";function Hh(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function hB(e,n){var t=_.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var i=t.value;i!==r&&(t.value=r,t.callback(r,i))}}}})[0];return t.callback=n,t.facade}var vB=typeof window<"u"?_.useLayoutEffect:_.useEffect,vw=new WeakMap;function pB(e,n){var t=hB(null,function(r){return e.forEach(function(i){return Hh(i,r)})});return vB(function(){var r=vw.get(t);if(r){var i=new Set(r),o=new Set(e),l=t.current;i.forEach(function(s){o.has(s)||Hh(s,null)}),o.forEach(function(s){i.has(s)||Hh(s,l)})}vw.set(t,e)},[e]),t}function yB(e){return e}function gB(e,n){n===void 0&&(n=yB);var t=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(o){var l=n(o,r);return t.push(l),function(){t=t.filter(function(s){return s!==l})}},assignSyncMedium:function(o){for(r=!0;t.length;){var l=t;t=[],l.forEach(o)}t={push:function(s){return o(s)},filter:function(){return t}}},assignMedium:function(o){r=!0;var l=[];if(t.length){var s=t;t=[],s.forEach(o),l=t}var u=function(){var m=l;l=[],m.forEach(o)},f=function(){return Promise.resolve().then(u)};f(),t={push:function(m){l.push(m),f()},filter:function(m){return l=l.filter(m),t}}}};return i}function EB(e){e===void 0&&(e={});var n=gB(null);return n.options=or({async:!0,ssr:!1},e),n}var uk=function(e){var n=e.sideCar,t=sk(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return _.createElement(r,or({},t))};uk.isSideCarExport=!0;function CB(e,n){return e.useMedium(n),uk}var dk=EB(),Wh=function(){},rf=_.forwardRef(function(e,n){var t=_.useRef(null),r=_.useState({onScrollCapture:Wh,onWheelCapture:Wh,onTouchMoveCapture:Wh}),i=r[0],o=r[1],l=e.forwardProps,s=e.children,u=e.className,f=e.removeScrollBar,m=e.enabled,h=e.shards,p=e.sideCar,g=e.noRelative,b=e.noIsolation,y=e.inert,E=e.allowPinchZoom,w=e.as,x=w===void 0?"div":w,U=e.gapMode,I=sk(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=p,P=pB([t,n]),T=or(or({},I),i);return _.createElement(_.Fragment,null,m&&_.createElement(A,{sideCar:dk,removeScrollBar:f,shards:h,noRelative:g,noIsolation:b,inert:y,setCallbacks:o,allowPinchZoom:!!E,lockRef:t,gapMode:U}),l?_.cloneElement(_.Children.only(s),or(or({},T),{ref:P})):_.createElement(x,or({},T,{className:u,ref:P}),s))});rf.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};rf.classNames={fullWidth:Bu,zeroRight:Du};var bB=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function SB(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=bB();return n&&e.setAttribute("nonce",n),e}function wB(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function xB(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var AB=function(){var e=0,n=null;return{add:function(t){e==0&&(n=SB())&&(wB(n,t),xB(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},UB=function(){var e=AB();return function(n,t){_.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},fk=function(){var e=UB(),n=function(t){var r=t.styles,i=t.dynamic;return e(r,i),null};return n},TB={left:0,top:0,right:0,gap:0},Vh=function(e){return parseInt(e||"",10)||0},PB=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],i=n[e==="padding"?"paddingRight":"marginRight"];return[Vh(t),Vh(r),Vh(i)]},IB=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return TB;var n=PB(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},OB=fk(),to="data-scroll-locked",kB=function(e,n,t,r){var i=e.left,o=e.top,l=e.right,s=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(fB,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(to,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Du,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Bu,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Du," .").concat(Du,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Bu," .").concat(Bu,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(to,`] {
    `).concat(mB,": ").concat(s,`px;
  }
`)},pw=function(){var e=parseInt(document.body.getAttribute(to)||"0",10);return isFinite(e)?e:0},MB=function(){_.useEffect(function(){return document.body.setAttribute(to,(pw()+1).toString()),function(){var e=pw()-1;e<=0?document.body.removeAttribute(to):document.body.setAttribute(to,e.toString())}},[])},_B=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;MB();var o=_.useMemo(function(){return IB(i)},[i]);return _.createElement(OB,{styles:kB(o,!n,i,t?"":"!important")})},r1=!1;if(typeof window<"u")try{var yu=Object.defineProperty({},"passive",{get:function(){return r1=!0,!0}});window.addEventListener("test",yu,yu),window.removeEventListener("test",yu,yu)}catch{r1=!1}var Wa=r1?{passive:!1}:!1,NB=function(e){return e.tagName==="TEXTAREA"},mk=function(e,n){if(!(e instanceof Element))return!1;var t=window.getComputedStyle(e);return t[n]!=="hidden"&&!(t.overflowY===t.overflowX&&!NB(e)&&t[n]==="visible")},LB=function(e){return mk(e,"overflowY")},RB=function(e){return mk(e,"overflowX")},yw=function(e,n){var t=n.ownerDocument,r=n;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=hk(e,r);if(i){var o=vk(e,r),l=o[1],s=o[2];if(l>s)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},jB=function(e){var n=e.scrollTop,t=e.scrollHeight,r=e.clientHeight;return[n,t,r]},DB=function(e){var n=e.scrollLeft,t=e.scrollWidth,r=e.clientWidth;return[n,t,r]},hk=function(e,n){return e==="v"?LB(n):RB(n)},vk=function(e,n){return e==="v"?jB(n):DB(n)},BB=function(e,n){return e==="h"&&n==="rtl"?-1:1},zB=function(e,n,t,r,i){var o=BB(e,window.getComputedStyle(n).direction),l=o*r,s=t.target,u=n.contains(s),f=!1,m=l>0,h=0,p=0;do{if(!s)break;var g=vk(e,s),b=g[0],y=g[1],E=g[2],w=y-E-o*b;(b||w)&&hk(e,s)&&(h+=w,p+=b);var x=s.parentNode;s=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!u&&s!==document.body||u&&(n.contains(s)||n===s));return(m&&Math.abs(h)<1||!m&&Math.abs(p)<1)&&(f=!0),f},gu=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gw=function(e){return[e.deltaX,e.deltaY]},Ew=function(e){return e&&"current"in e?e.current:e},FB=function(e,n){return e[0]===n[0]&&e[1]===n[1]},$B=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},GB=0,Va=[];function HB(e){var n=_.useRef([]),t=_.useRef([0,0]),r=_.useRef(),i=_.useState(GB++)[0],o=_.useState(fk)[0],l=_.useRef(e);_.useEffect(function(){l.current=e},[e]),_.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var y=dB([e.lockRef.current],(e.shards||[]).map(Ew),!0).filter(Boolean);return y.forEach(function(E){return E.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),y.forEach(function(E){return E.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=_.useCallback(function(y,E){if("touches"in y&&y.touches.length===2||y.type==="wheel"&&y.ctrlKey)return!l.current.allowPinchZoom;var w=gu(y),x=t.current,U="deltaX"in y?y.deltaX:x[0]-w[0],I="deltaY"in y?y.deltaY:x[1]-w[1],A,P=y.target,T=Math.abs(U)>Math.abs(I)?"h":"v";if("touches"in y&&T==="h"&&P.type==="range")return!1;var M=window.getSelection(),N=M&&M.anchorNode,$=N?N===P||N.contains(P):!1;if($)return!1;var z=yw(T,P);if(!z)return!0;if(z?A=T:(A=T==="v"?"h":"v",z=yw(T,P)),!z)return!1;if(!r.current&&"changedTouches"in y&&(U||I)&&(r.current=A),!A)return!0;var j=r.current||A;return zB(j,E,y,j==="h"?U:I)},[]),u=_.useCallback(function(y){var E=y;if(!(!Va.length||Va[Va.length-1]!==o)){var w="deltaY"in E?gw(E):gu(E),x=n.current.filter(function(A){return A.name===E.type&&(A.target===E.target||E.target===A.shadowParent)&&FB(A.delta,w)})[0];if(x&&x.should){E.cancelable&&E.preventDefault();return}if(!x){var U=(l.current.shards||[]).map(Ew).filter(Boolean).filter(function(A){return A.contains(E.target)}),I=U.length>0?s(E,U[0]):!l.current.noIsolation;I&&E.cancelable&&E.preventDefault()}}},[]),f=_.useCallback(function(y,E,w,x){var U={name:y,delta:E,target:w,should:x,shadowParent:WB(w)};n.current.push(U),setTimeout(function(){n.current=n.current.filter(function(I){return I!==U})},1)},[]),m=_.useCallback(function(y){t.current=gu(y),r.current=void 0},[]),h=_.useCallback(function(y){f(y.type,gw(y),y.target,s(y,e.lockRef.current))},[]),p=_.useCallback(function(y){f(y.type,gu(y),y.target,s(y,e.lockRef.current))},[]);_.useEffect(function(){return Va.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",u,Wa),document.addEventListener("touchmove",u,Wa),document.addEventListener("touchstart",m,Wa),function(){Va=Va.filter(function(y){return y!==o}),document.removeEventListener("wheel",u,Wa),document.removeEventListener("touchmove",u,Wa),document.removeEventListener("touchstart",m,Wa)}},[]);var g=e.removeScrollBar,b=e.inert;return _.createElement(_.Fragment,null,b?_.createElement(o,{styles:$B(i)}):null,g?_.createElement(_B,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function WB(e){for(var n=null;e!==null;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}const VB=CB(dk,HB);var pk=_.forwardRef(function(e,n){return _.createElement(rf,or({},e,{ref:n,sideCar:VB}))});pk.classNames=rf.classNames;var KB=[" ","Enter","ArrowUp","ArrowDown"],qB=[" ","Enter"],Yl="Select",[af,of,YB]=MO(Yl),[Fo]=Do(Yl,[YB,JO]),cf=JO(),[XB,bi]=Fo(Yl),[JB,ZB]=Fo(Yl),yk=e=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:i,onOpenChange:o,value:l,defaultValue:s,onValueChange:u,dir:f,name:m,autoComplete:h,disabled:p,required:g,form:b}=e,y=cf(n),[E,w]=_.useState(null),[x,U]=_.useState(null),[I,A]=_.useState(!1),P=Xd(f),[T=!1,M]=Ku({prop:r,defaultProp:i,onChange:o}),[N,$]=Ku({prop:l,defaultProp:s,onChange:u}),z=_.useRef(null),j=E?b||!!E.closest("form"):!0,[H,V]=_.useState(new Set),K=Array.from(H).map(W=>W.props.value).join(";");return O.jsx(QD,{...y,children:O.jsxs(XB,{required:g,scope:n,trigger:E,onTriggerChange:w,valueNode:x,onValueNodeChange:U,valueNodeHasChildren:I,onValueNodeHasChildrenChange:A,contentId:Kl(),value:N,onValueChange:$,open:T,onOpenChange:M,dir:P,triggerPointerDownPosRef:z,disabled:p,children:[O.jsx(af.Provider,{scope:n,children:O.jsx(JB,{scope:e.__scopeSelect,onNativeOptionAdd:_.useCallback(W=>{V(X=>new Set(X).add(W))},[]),onNativeOptionRemove:_.useCallback(W=>{V(X=>{const R=new Set(X);return R.delete(W),R})},[]),children:t})}),j?O.jsxs(zk,{"aria-hidden":!0,required:g,tabIndex:-1,name:m,autoComplete:h,value:N,onChange:W=>$(W.target.value),disabled:p,form:b,children:[N===void 0?O.jsx("option",{value:""}):null,Array.from(H)]},K):null]})})};yk.displayName=Yl;var gk="SelectTrigger",Ek=_.forwardRef((e,n)=>{const{__scopeSelect:t,disabled:r=!1,...i}=e,o=cf(t),l=bi(gk,t),s=l.disabled||r,u=tn(n,l.onTriggerChange),f=of(t),m=_.useRef("touch"),[h,p,g]=Fk(y=>{const E=f().filter(U=>!U.disabled),w=E.find(U=>U.value===l.value),x=$k(E,y,w);x!==void 0&&l.onValueChange(x.value)}),b=y=>{s||(l.onOpenChange(!0),g()),y&&(l.triggerPointerDownPosRef.current={x:Math.round(y.pageX),y:Math.round(y.pageY)})};return O.jsx(eB,{asChild:!0,...o,children:O.jsx(Fe.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":Bk(l.value)?"":void 0,...i,ref:u,onClick:je(i.onClick,y=>{y.currentTarget.focus(),m.current!=="mouse"&&b(y)}),onPointerDown:je(i.onPointerDown,y=>{m.current=y.pointerType;const E=y.target;E.hasPointerCapture(y.pointerId)&&E.releasePointerCapture(y.pointerId),y.button===0&&y.ctrlKey===!1&&y.pointerType==="mouse"&&(b(y),y.preventDefault())}),onKeyDown:je(i.onKeyDown,y=>{const E=h.current!=="";!(y.ctrlKey||y.altKey||y.metaKey)&&y.key.length===1&&p(y.key),!(E&&y.key===" ")&&KB.includes(y.key)&&(b(),y.preventDefault())})})})});Ek.displayName=gk;var Ck="SelectValue",bk=_.forwardRef((e,n)=>{const{__scopeSelect:t,className:r,style:i,children:o,placeholder:l="",...s}=e,u=bi(Ck,t),{onValueNodeHasChildrenChange:f}=u,m=o!==void 0,h=tn(n,u.onValueNodeChange);return $n(()=>{f(m)},[f,m]),O.jsx(Fe.span,{...s,ref:h,style:{pointerEvents:"none"},children:Bk(u.value)?O.jsx(O.Fragment,{children:l}):o})});bk.displayName=Ck;var QB="SelectIcon",Sk=_.forwardRef((e,n)=>{const{__scopeSelect:t,children:r,...i}=e;return O.jsx(Fe.span,{"aria-hidden":!0,...i,ref:n,children:r||"▼"})});Sk.displayName=QB;var e3="SelectPortal",wk=e=>O.jsx(ok,{asChild:!0,...e});wk.displayName=e3;var oa="SelectContent",xk=_.forwardRef((e,n)=>{const t=bi(oa,e.__scopeSelect),[r,i]=_.useState();if($n(()=>{i(new DocumentFragment)},[]),!t.open){const o=r;return o?Vl.createPortal(O.jsx(Ak,{scope:e.__scopeSelect,children:O.jsx(af.Slot,{scope:e.__scopeSelect,children:O.jsx("div",{children:e.children})})}),o):null}return O.jsx(Uk,{...e,ref:n})});xk.displayName=oa;var $t=10,[Ak,Si]=Fo(oa),n3="SelectContentImpl",Uk=_.forwardRef((e,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:l,side:s,sideOffset:u,align:f,alignOffset:m,arrowPadding:h,collisionBoundary:p,collisionPadding:g,sticky:b,hideWhenDetached:y,avoidCollisions:E,...w}=e,x=bi(oa,t),[U,I]=_.useState(null),[A,P]=_.useState(null),T=tn(n,ce=>I(ce)),[M,N]=_.useState(null),[$,z]=_.useState(null),j=of(t),[H,V]=_.useState(!1),K=_.useRef(!1);_.useEffect(()=>{if(U)return uB(U)},[U]),Oj();const W=_.useCallback(ce=>{const[he,...re]=j().map(ne=>ne.ref.current),[ue]=re.slice(-1),me=document.activeElement;for(const ne of ce)if(ne===me||(ne==null||ne.scrollIntoView({block:"nearest"}),ne===he&&A&&(A.scrollTop=0),ne===ue&&A&&(A.scrollTop=A.scrollHeight),ne==null||ne.focus(),document.activeElement!==me))return},[j,A]),X=_.useCallback(()=>W([M,U]),[W,M,U]);_.useEffect(()=>{H&&X()},[H,X]);const{onOpenChange:R,triggerPointerDownPosRef:Z}=x;_.useEffect(()=>{if(U){let ce={x:0,y:0};const he=ue=>{var me,ne;ce={x:Math.abs(Math.round(ue.pageX)-(((me=Z.current)==null?void 0:me.x)??0)),y:Math.abs(Math.round(ue.pageY)-(((ne=Z.current)==null?void 0:ne.y)??0))}},re=ue=>{ce.x<=10&&ce.y<=10?ue.preventDefault():U.contains(ue.target)||R(!1),document.removeEventListener("pointermove",he),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",he),document.addEventListener("pointerup",re,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",he),document.removeEventListener("pointerup",re,{capture:!0})}}},[U,R,Z]),_.useEffect(()=>{const ce=()=>R(!1);return window.addEventListener("blur",ce),window.addEventListener("resize",ce),()=>{window.removeEventListener("blur",ce),window.removeEventListener("resize",ce)}},[R]);const[Q,B]=Fk(ce=>{const he=j().filter(me=>!me.disabled),re=he.find(me=>me.ref.current===document.activeElement),ue=$k(he,ce,re);ue&&setTimeout(()=>ue.ref.current.focus())}),q=_.useCallback((ce,he,re)=>{const ue=!K.current&&!re;(x.value!==void 0&&x.value===he||ue)&&(N(ce),ue&&(K.current=!0))},[x.value]),ie=_.useCallback(()=>U==null?void 0:U.focus(),[U]),de=_.useCallback((ce,he,re)=>{const ue=!K.current&&!re;(x.value!==void 0&&x.value===he||ue)&&z(ce)},[x.value]),ge=r==="popper"?i1:Tk,xe=ge===i1?{side:s,sideOffset:u,align:f,alignOffset:m,arrowPadding:h,collisionBoundary:p,collisionPadding:g,sticky:b,hideWhenDetached:y,avoidCollisions:E}:{};return O.jsx(Ak,{scope:t,content:U,viewport:A,onViewportChange:P,itemRefCallback:q,selectedItem:M,onItemLeave:ie,itemTextRefCallback:de,focusSelectedItem:X,selectedItemText:$,position:r,isPositioned:H,searchRef:Q,children:O.jsx(pk,{as:co,allowPinchZoom:!0,children:O.jsx(RO,{asChild:!0,trapped:x.open,onMountAutoFocus:ce=>{ce.preventDefault()},onUnmountAutoFocus:je(i,ce=>{var he;(he=x.trigger)==null||he.focus({preventScroll:!0}),ce.preventDefault()}),children:O.jsx(NO,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:l,onFocusOutside:ce=>ce.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:O.jsx(ge,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:ce=>ce.preventDefault(),...w,...xe,onPlaced:()=>V(!0),ref:T,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:je(w.onKeyDown,ce=>{const he=ce.ctrlKey||ce.altKey||ce.metaKey;if(ce.key==="Tab"&&ce.preventDefault(),!he&&ce.key.length===1&&B(ce.key),["ArrowUp","ArrowDown","Home","End"].includes(ce.key)){let ue=j().filter(me=>!me.disabled).map(me=>me.ref.current);if(["ArrowUp","End"].includes(ce.key)&&(ue=ue.slice().reverse()),["ArrowUp","ArrowDown"].includes(ce.key)){const me=ce.target,ne=ue.indexOf(me);ue=ue.slice(ne+1)}setTimeout(()=>W(ue)),ce.preventDefault()}})})})})})})});Uk.displayName=n3;var t3="SelectItemAlignedPosition",Tk=_.forwardRef((e,n)=>{const{__scopeSelect:t,onPlaced:r,...i}=e,o=bi(oa,t),l=Si(oa,t),[s,u]=_.useState(null),[f,m]=_.useState(null),h=tn(n,T=>m(T)),p=of(t),g=_.useRef(!1),b=_.useRef(!0),{viewport:y,selectedItem:E,selectedItemText:w,focusSelectedItem:x}=l,U=_.useCallback(()=>{if(o.trigger&&o.valueNode&&s&&f&&y&&E&&w){const T=o.trigger.getBoundingClientRect(),M=f.getBoundingClientRect(),N=o.valueNode.getBoundingClientRect(),$=w.getBoundingClientRect();if(o.dir!=="rtl"){const me=$.left-M.left,ne=N.left-me,_e=T.left-ne,Pe=T.width+_e,Ve=Math.max(Pe,M.width),Ke=window.innerWidth-$t,rn=Zg(ne,[$t,Math.max($t,Ke-Ve)]);s.style.minWidth=Pe+"px",s.style.left=rn+"px"}else{const me=M.right-$.right,ne=window.innerWidth-N.right-me,_e=window.innerWidth-T.right-ne,Pe=T.width+_e,Ve=Math.max(Pe,M.width),Ke=window.innerWidth-$t,rn=Zg(ne,[$t,Math.max($t,Ke-Ve)]);s.style.minWidth=Pe+"px",s.style.right=rn+"px"}const z=p(),j=window.innerHeight-$t*2,H=y.scrollHeight,V=window.getComputedStyle(f),K=parseInt(V.borderTopWidth,10),W=parseInt(V.paddingTop,10),X=parseInt(V.borderBottomWidth,10),R=parseInt(V.paddingBottom,10),Z=K+W+H+R+X,Q=Math.min(E.offsetHeight*5,Z),B=window.getComputedStyle(y),q=parseInt(B.paddingTop,10),ie=parseInt(B.paddingBottom,10),de=T.top+T.height/2-$t,ge=j-de,xe=E.offsetHeight/2,ce=E.offsetTop+xe,he=K+W+ce,re=Z-he;if(he<=de){const me=z.length>0&&E===z[z.length-1].ref.current;s.style.bottom="0px";const ne=f.clientHeight-y.offsetTop-y.offsetHeight,_e=Math.max(ge,xe+(me?ie:0)+ne+X),Pe=he+_e;s.style.height=Pe+"px"}else{const me=z.length>0&&E===z[0].ref.current;s.style.top="0px";const _e=Math.max(de,K+y.offsetTop+(me?q:0)+xe)+re;s.style.height=_e+"px",y.scrollTop=he-de+y.offsetTop}s.style.margin=`${$t}px 0`,s.style.minHeight=Q+"px",s.style.maxHeight=j+"px",r==null||r(),requestAnimationFrame(()=>g.current=!0)}},[p,o.trigger,o.valueNode,s,f,y,E,w,o.dir,r]);$n(()=>U(),[U]);const[I,A]=_.useState();$n(()=>{f&&A(window.getComputedStyle(f).zIndex)},[f]);const P=_.useCallback(T=>{T&&b.current===!0&&(U(),x==null||x(),b.current=!1)},[U,x]);return O.jsx(i3,{scope:t,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:P,children:O.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:I},children:O.jsx(Fe.div,{...i,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});Tk.displayName=t3;var r3="SelectPopperPosition",i1=_.forwardRef((e,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:i=$t,...o}=e,l=cf(t);return O.jsx(nB,{...l,...o,ref:n,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});i1.displayName=r3;var[i3,VE]=Fo(oa,{}),a1="SelectViewport",Pk=_.forwardRef((e,n)=>{const{__scopeSelect:t,nonce:r,...i}=e,o=Si(a1,t),l=VE(a1,t),s=tn(n,o.onViewportChange),u=_.useRef(0);return O.jsxs(O.Fragment,{children:[O.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),O.jsx(af.Slot,{scope:t,children:O.jsx(Fe.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:s,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:je(i.onScroll,f=>{const m=f.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:p}=l;if(p!=null&&p.current&&h){const g=Math.abs(u.current-m.scrollTop);if(g>0){const b=window.innerHeight-$t*2,y=parseFloat(h.style.minHeight),E=parseFloat(h.style.height),w=Math.max(y,E);if(w<b){const x=w+g,U=Math.min(b,x),I=x-U;h.style.height=U+"px",h.style.bottom==="0px"&&(m.scrollTop=I>0?I:0,h.style.justifyContent="flex-end")}}}u.current=m.scrollTop})})})]})});Pk.displayName=a1;var Ik="SelectGroup",[a3,o3]=Fo(Ik),c3=_.forwardRef((e,n)=>{const{__scopeSelect:t,...r}=e,i=Kl();return O.jsx(a3,{scope:t,id:i,children:O.jsx(Fe.div,{role:"group","aria-labelledby":i,...r,ref:n})})});c3.displayName=Ik;var Ok="SelectLabel",l3=_.forwardRef((e,n)=>{const{__scopeSelect:t,...r}=e,i=o3(Ok,t);return O.jsx(Fe.div,{id:i.id,...r,ref:n})});l3.displayName=Ok;var qu="SelectItem",[s3,kk]=Fo(qu),Mk=_.forwardRef((e,n)=>{const{__scopeSelect:t,value:r,disabled:i=!1,textValue:o,...l}=e,s=bi(qu,t),u=Si(qu,t),f=s.value===r,[m,h]=_.useState(o??""),[p,g]=_.useState(!1),b=tn(n,x=>{var U;return(U=u.itemRefCallback)==null?void 0:U.call(u,x,r,i)}),y=Kl(),E=_.useRef("touch"),w=()=>{i||(s.onValueChange(r),s.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return O.jsx(s3,{scope:t,value:r,disabled:i,textId:y,isSelected:f,onItemTextChange:_.useCallback(x=>{h(U=>U||((x==null?void 0:x.textContent)??"").trim())},[]),children:O.jsx(af.ItemSlot,{scope:t,value:r,disabled:i,textValue:m,children:O.jsx(Fe.div,{role:"option","aria-labelledby":y,"data-highlighted":p?"":void 0,"aria-selected":f&&p,"data-state":f?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...l,ref:b,onFocus:je(l.onFocus,()=>g(!0)),onBlur:je(l.onBlur,()=>g(!1)),onClick:je(l.onClick,()=>{E.current!=="mouse"&&w()}),onPointerUp:je(l.onPointerUp,()=>{E.current==="mouse"&&w()}),onPointerDown:je(l.onPointerDown,x=>{E.current=x.pointerType}),onPointerMove:je(l.onPointerMove,x=>{var U;E.current=x.pointerType,i?(U=u.onItemLeave)==null||U.call(u):E.current==="mouse"&&x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:je(l.onPointerLeave,x=>{var U;x.currentTarget===document.activeElement&&((U=u.onItemLeave)==null||U.call(u))}),onKeyDown:je(l.onKeyDown,x=>{var I;((I=u.searchRef)==null?void 0:I.current)!==""&&x.key===" "||(qB.includes(x.key)&&w(),x.key===" "&&x.preventDefault())})})})})});Mk.displayName=qu;var Xc="SelectItemText",_k=_.forwardRef((e,n)=>{const{__scopeSelect:t,className:r,style:i,...o}=e,l=bi(Xc,t),s=Si(Xc,t),u=kk(Xc,t),f=ZB(Xc,t),[m,h]=_.useState(null),p=tn(n,w=>h(w),u.onItemTextChange,w=>{var x;return(x=s.itemTextRefCallback)==null?void 0:x.call(s,w,u.value,u.disabled)}),g=m==null?void 0:m.textContent,b=_.useMemo(()=>O.jsx("option",{value:u.value,disabled:u.disabled,children:g},u.value),[u.disabled,u.value,g]),{onNativeOptionAdd:y,onNativeOptionRemove:E}=f;return $n(()=>(y(b),()=>E(b)),[y,E,b]),O.jsxs(O.Fragment,{children:[O.jsx(Fe.span,{id:u.textId,...o,ref:p}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Vl.createPortal(o.children,l.valueNode):null]})});_k.displayName=Xc;var Nk="SelectItemIndicator",Lk=_.forwardRef((e,n)=>{const{__scopeSelect:t,...r}=e;return kk(Nk,t).isSelected?O.jsx(Fe.span,{"aria-hidden":!0,...r,ref:n}):null});Lk.displayName=Nk;var o1="SelectScrollUpButton",Rk=_.forwardRef((e,n)=>{const t=Si(o1,e.__scopeSelect),r=VE(o1,e.__scopeSelect),[i,o]=_.useState(!1),l=tn(n,r.onScrollButtonChange);return $n(()=>{if(t.viewport&&t.isPositioned){let s=function(){const f=u.scrollTop>0;o(f)};const u=t.viewport;return s(),u.addEventListener("scroll",s),()=>u.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),i?O.jsx(Dk,{...e,ref:l,onAutoScroll:()=>{const{viewport:s,selectedItem:u}=t;s&&u&&(s.scrollTop=s.scrollTop-u.offsetHeight)}}):null});Rk.displayName=o1;var c1="SelectScrollDownButton",jk=_.forwardRef((e,n)=>{const t=Si(c1,e.__scopeSelect),r=VE(c1,e.__scopeSelect),[i,o]=_.useState(!1),l=tn(n,r.onScrollButtonChange);return $n(()=>{if(t.viewport&&t.isPositioned){let s=function(){const f=u.scrollHeight-u.clientHeight,m=Math.ceil(u.scrollTop)<f;o(m)};const u=t.viewport;return s(),u.addEventListener("scroll",s),()=>u.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),i?O.jsx(Dk,{...e,ref:l,onAutoScroll:()=>{const{viewport:s,selectedItem:u}=t;s&&u&&(s.scrollTop=s.scrollTop+u.offsetHeight)}}):null});jk.displayName=c1;var Dk=_.forwardRef((e,n)=>{const{__scopeSelect:t,onAutoScroll:r,...i}=e,o=Si("SelectScrollButton",t),l=_.useRef(null),s=of(t),u=_.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return _.useEffect(()=>()=>u(),[u]),$n(()=>{var m;const f=s().find(h=>h.ref.current===document.activeElement);(m=f==null?void 0:f.ref.current)==null||m.scrollIntoView({block:"nearest"})},[s]),O.jsx(Fe.div,{"aria-hidden":!0,...i,ref:n,style:{flexShrink:0,...i.style},onPointerDown:je(i.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:je(i.onPointerMove,()=>{var f;(f=o.onItemLeave)==null||f.call(o),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:je(i.onPointerLeave,()=>{u()})})}),u3="SelectSeparator",d3=_.forwardRef((e,n)=>{const{__scopeSelect:t,...r}=e;return O.jsx(Fe.div,{"aria-hidden":!0,...r,ref:n})});d3.displayName=u3;var l1="SelectArrow",f3=_.forwardRef((e,n)=>{const{__scopeSelect:t,...r}=e,i=cf(t),o=bi(l1,t),l=Si(l1,t);return o.open&&l.position==="popper"?O.jsx(tB,{...i,...r,ref:n}):null});f3.displayName=l1;function Bk(e){return e===""||e===void 0}var zk=_.forwardRef((e,n)=>{const{value:t,...r}=e,i=_.useRef(null),o=tn(n,i),l=aB(t);return _.useEffect(()=>{const s=i.current,u=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(u,"value").set;if(l!==t&&m){const h=new Event("change",{bubbles:!0});m.call(s,t),s.dispatchEvent(h)}},[l,t]),O.jsx(ck,{asChild:!0,children:O.jsx("select",{...r,ref:o,defaultValue:t})})});zk.displayName="BubbleSelect";function Fk(e){const n=_n(e),t=_.useRef(""),r=_.useRef(0),i=_.useCallback(l=>{const s=t.current+l;n(s),(function u(f){t.current=f,window.clearTimeout(r.current),f!==""&&(r.current=window.setTimeout(()=>u(""),1e3))})(s)},[n]),o=_.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return _.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,i,o]}function $k(e,n,t){const i=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,o=t?e.indexOf(t):-1;let l=m3(e,Math.max(o,0));i.length===1&&(l=l.filter(f=>f!==t));const u=l.find(f=>f.textValue.toLowerCase().startsWith(i.toLowerCase()));return u!==t?u:void 0}function m3(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var h3=yk,v3=Ek,p3=bk,y3=Sk,g3=wk,E3=xk,C3=Pk,b3=Mk,S3=_k,w3=Lk,x3=Rk,A3=jk,U3="Separator",Cw="horizontal",T3=["horizontal","vertical"],Gk=_.forwardRef((e,n)=>{const{decorative:t,orientation:r=Cw,...i}=e,o=P3(r)?r:Cw,s=t?{role:"none"}:{"aria-orientation":o==="vertical"?o:void 0,role:"separator"};return O.jsx(Fe.div,{"data-orientation":o,...s,...i,ref:n})});Gk.displayName=U3;function P3(e){return T3.includes(e)}var I3=Gk,Kh="rovingFocusGroup.onEntryFocus",O3={bubbles:!1,cancelable:!0},lf="RovingFocusGroup",[s1,Hk,k3]=MO(lf),[M3,Wk]=Do(lf,[k3]),[_3,N3]=M3(lf),Vk=_.forwardRef((e,n)=>O.jsx(s1.Provider,{scope:e.__scopeRovingFocusGroup,children:O.jsx(s1.Slot,{scope:e.__scopeRovingFocusGroup,children:O.jsx(L3,{...e,ref:n})})}));Vk.displayName=lf;var L3=_.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:i=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:u,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...h}=e,p=_.useRef(null),g=tn(n,p),b=Xd(o),[y=null,E]=Ku({prop:l,defaultProp:s,onChange:u}),[w,x]=_.useState(!1),U=_n(f),I=Hk(t),A=_.useRef(!1),[P,T]=_.useState(0);return _.useEffect(()=>{const M=p.current;if(M)return M.addEventListener(Kh,U),()=>M.removeEventListener(Kh,U)},[U]),O.jsx(_3,{scope:t,orientation:r,dir:b,loop:i,currentTabStopId:y,onItemFocus:_.useCallback(M=>E(M),[E]),onItemShiftTab:_.useCallback(()=>x(!0),[]),onFocusableItemAdd:_.useCallback(()=>T(M=>M+1),[]),onFocusableItemRemove:_.useCallback(()=>T(M=>M-1),[]),children:O.jsx(Fe.div,{tabIndex:w||P===0?-1:0,"data-orientation":r,...h,ref:g,style:{outline:"none",...e.style},onMouseDown:je(e.onMouseDown,()=>{A.current=!0}),onFocus:je(e.onFocus,M=>{const N=!A.current;if(M.target===M.currentTarget&&N&&!w){const $=new CustomEvent(Kh,O3);if(M.currentTarget.dispatchEvent($),!$.defaultPrevented){const z=I().filter(W=>W.focusable),j=z.find(W=>W.active),H=z.find(W=>W.id===y),K=[j,H,...z].filter(Boolean).map(W=>W.ref.current);Yk(K,m)}}A.current=!1}),onBlur:je(e.onBlur,()=>x(!1))})})}),Kk="RovingFocusGroupItem",qk=_.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:i=!1,tabStopId:o,...l}=e,s=Kl(),u=o||s,f=N3(Kk,t),m=f.currentTabStopId===u,h=Hk(t),{onFocusableItemAdd:p,onFocusableItemRemove:g}=f;return _.useEffect(()=>{if(r)return p(),()=>g()},[r,p,g]),O.jsx(s1.ItemSlot,{scope:t,id:u,focusable:r,active:i,children:O.jsx(Fe.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...l,ref:n,onMouseDown:je(e.onMouseDown,b=>{r?f.onItemFocus(u):b.preventDefault()}),onFocus:je(e.onFocus,()=>f.onItemFocus(u)),onKeyDown:je(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){f.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const y=D3(b,f.orientation,f.dir);if(y!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let w=h().filter(x=>x.focusable).map(x=>x.ref.current);if(y==="last")w.reverse();else if(y==="prev"||y==="next"){y==="prev"&&w.reverse();const x=w.indexOf(b.currentTarget);w=f.loop?B3(w,x+1):w.slice(x+1)}setTimeout(()=>Yk(w))}})})})});qk.displayName=Kk;var R3={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function j3(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function D3(e,n,t){const r=j3(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return R3[r]}function Yk(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function B3(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var z3=Vk,F3=qk,KE="Tabs",[$3]=Do(KE,[Wk]),Xk=Wk(),[G3,qE]=$3(KE),Jk=_.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,onValueChange:i,defaultValue:o,orientation:l="horizontal",dir:s,activationMode:u="automatic",...f}=e,m=Xd(s),[h,p]=Ku({prop:r,onChange:i,defaultProp:o});return O.jsx(G3,{scope:t,baseId:Kl(),value:h,onValueChange:p,orientation:l,dir:m,activationMode:u,children:O.jsx(Fe.div,{dir:m,"data-orientation":l,...f,ref:n})})});Jk.displayName=KE;var Zk="TabsList",Qk=_.forwardRef((e,n)=>{const{__scopeTabs:t,loop:r=!0,...i}=e,o=qE(Zk,t),l=Xk(t);return O.jsx(z3,{asChild:!0,...l,orientation:o.orientation,dir:o.dir,loop:r,children:O.jsx(Fe.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:n})})});Qk.displayName=Zk;var e2="TabsTrigger",n2=_.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,disabled:i=!1,...o}=e,l=qE(e2,t),s=Xk(t),u=i2(l.baseId,r),f=a2(l.baseId,r),m=r===l.value;return O.jsx(F3,{asChild:!0,...s,focusable:!i,active:m,children:O.jsx(Fe.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:u,...o,ref:n,onMouseDown:je(e.onMouseDown,h=>{!i&&h.button===0&&h.ctrlKey===!1?l.onValueChange(r):h.preventDefault()}),onKeyDown:je(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&l.onValueChange(r)}),onFocus:je(e.onFocus,()=>{const h=l.activationMode!=="manual";!m&&!i&&h&&l.onValueChange(r)})})})});n2.displayName=e2;var t2="TabsContent",r2=_.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,forceMount:i,children:o,...l}=e,s=qE(t2,t),u=i2(s.baseId,r),f=a2(s.baseId,r),m=r===s.value,h=_.useRef(m);return _.useEffect(()=>{const p=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(p)},[]),O.jsx(jo,{present:i||m,children:({present:p})=>O.jsx(Fe.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":u,hidden:!p,id:f,tabIndex:0,...l,ref:n,style:{...e.style,animationDuration:h.current?"0s":void 0},children:p&&o})})});r2.displayName=t2;function i2(e,n){return`${e}-trigger-${n}`}function a2(e,n){return`${e}-content-${n}`}var H3=Jk,W3=Qk,V3=n2,K3=r2;function o2(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=o2(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Re(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=o2(e))&&(r&&(r+=" "),r+=n);return r}const bw=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Sw=Re,c2=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return Sw(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:o}=n,l=Object.keys(i).map(f=>{const m=t==null?void 0:t[f],h=o==null?void 0:o[f];if(m===null)return null;const p=bw(m)||bw(h);return i[f][p]}),s=t&&Object.entries(t).reduce((f,m)=>{let[h,p]=m;return p===void 0||(f[h]=p),f},{}),u=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:h,className:p,...g}=m;return Object.entries(g).every(b=>{let[y,E]=b;return Array.isArray(E)?E.includes({...o,...s}[y]):{...o,...s}[y]===E})?[...f,h,p]:f},[]);return Sw(e,l,u,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y3=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase()),ww=e=>{const n=Y3(e);return n.charAt(0).toUpperCase()+n.slice(1)},l2=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...s},u)=>_.createElement("svg",{ref:u,...X3,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:l2("lucide",i),...s},[...l.map(([f,m])=>_.createElement(f,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(e,n)=>{const t=_.forwardRef(({className:r,...i},o)=>_.createElement(J3,{ref:o,iconNode:n,className:l2(`lucide-${q3(ww(e))}`,`lucide-${e}`,r),...i}));return t.displayName=ww(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Q3=rt("activity",Z3);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ez=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],s2=rt("chart-column",ez);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nz=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],tz=rt("check",nz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u2=rt("chevron-down",rz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],az=rt("chevron-up",iz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],cz=rt("circle-alert",oz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sz=rt("circle-check",lz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]],dz=rt("circle-minus",uz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],mz=rt("circle-x",fz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],vz=rt("file-text",hz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],yz=rt("globe",pz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gz=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ez=rt("map-pin",gz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],YE=rt("trending-up",Cz);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Sz=rt("users",bz),XE="-",wz=e=>{const n=Az(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const s=l.split(XE);return s[0]===""&&s.length!==1&&s.shift(),d2(s,n)||xz(l)},getConflictingClassGroupIds:(l,s)=>{const u=t[l]||[];return s&&r[l]?[...u,...r[l]]:u}}},d2=(e,n)=>{var l;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),i=r?d2(e.slice(1),r):void 0;if(i)return i;if(n.validators.length===0)return;const o=e.join(XE);return(l=n.validators.find(({validator:s})=>s(o)))==null?void 0:l.classGroupId},xw=/^\[(.+)\]$/,xz=e=>{if(xw.test(e)){const n=xw.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},Az=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const i in t)u1(t[i],r,i,n);return r},u1=(e,n,t,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?n:Aw(n,i);o.classGroupId=t;return}if(typeof i=="function"){if(Uz(i)){u1(i(r),n,t,r);return}n.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([o,l])=>{u1(l,Aw(n,o),t,r)})})},Aw=(e,n)=>{let t=e;return n.split(XE).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},Uz=e=>e.isThemeGetter,Tz=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const i=(o,l)=>{t.set(o,l),n++,n>e&&(n=0,r=t,t=new Map)};return{get(o){let l=t.get(o);if(l!==void 0)return l;if((l=r.get(o))!==void 0)return i(o,l),l},set(o,l){t.has(o)?t.set(o,l):i(o,l)}}},d1="!",f1=":",Pz=f1.length,Iz=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=i=>{const o=[];let l=0,s=0,u=0,f;for(let b=0;b<i.length;b++){let y=i[b];if(l===0&&s===0){if(y===f1){o.push(i.slice(u,b)),u=b+Pz;continue}if(y==="/"){f=b;continue}}y==="["?l++:y==="]"?l--:y==="("?s++:y===")"&&s--}const m=o.length===0?i:i.substring(u),h=Oz(m),p=h!==m,g=f&&f>u?f-u:void 0;return{modifiers:o,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:g}};if(n){const i=n+f1,o=r;r=l=>l.startsWith(i)?o(l.substring(i.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:l,maybePostfixModifierPosition:void 0}}if(t){const i=r;r=o=>t({className:o,parseClassName:i})}return r},Oz=e=>e.endsWith(d1)?e.substring(0,e.length-1):e.startsWith(d1)?e.substring(1):e,kz=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const i=[];let o=[];return r.forEach(l=>{l[0]==="["||n[l]?(i.push(...o.sort(),l),o=[]):o.push(l)}),i.push(...o.sort()),i}},Mz=e=>({cache:Tz(e.cacheSize),parseClassName:Iz(e),sortModifiers:kz(e),...wz(e)}),_z=/\s+/,Nz=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:o}=n,l=[],s=e.trim().split(_z);let u="";for(let f=s.length-1;f>=0;f-=1){const m=s[f],{isExternal:h,modifiers:p,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:y}=t(m);if(h){u=m+(u.length>0?" "+u:u);continue}let E=!!y,w=r(E?b.substring(0,y):b);if(!w){if(!E){u=m+(u.length>0?" "+u:u);continue}if(w=r(b),!w){u=m+(u.length>0?" "+u:u);continue}E=!1}const x=o(p).join(":"),U=g?x+d1:x,I=U+w;if(l.includes(I))continue;l.push(I);const A=i(w,E);for(let P=0;P<A.length;++P){const T=A[P];l.push(U+T)}u=m+(u.length>0?" "+u:u)}return u};function Lz(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=f2(n))&&(r&&(r+=" "),r+=t);return r}const f2=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=f2(e[r]))&&(t&&(t+=" "),t+=n);return t};function Rz(e,...n){let t,r,i,o=l;function l(u){const f=n.reduce((m,h)=>h(m),e());return t=Mz(f),r=t.cache.get,i=t.cache.set,o=s,s(u)}function s(u){const f=r(u);if(f)return f;const m=Nz(u,t);return i(u,m),m}return function(){return o(Lz.apply(null,arguments))}}const Cn=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},m2=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,h2=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jz=/^\d+\/\d+$/,Dz=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Bz=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zz=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Fz=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$z=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ka=e=>jz.test(e),Ne=e=>!!e&&!Number.isNaN(Number(e)),ui=e=>!!e&&Number.isInteger(Number(e)),qh=e=>e.endsWith("%")&&Ne(e.slice(0,-1)),Pr=e=>Dz.test(e),Gz=()=>!0,Hz=e=>Bz.test(e)&&!zz.test(e),v2=()=>!1,Wz=e=>Fz.test(e),Vz=e=>$z.test(e),Kz=e=>!Ce(e)&&!be(e),qz=e=>$o(e,g2,v2),Ce=e=>m2.test(e),Gi=e=>$o(e,E2,Hz),Yh=e=>$o(e,Qz,Ne),Uw=e=>$o(e,p2,v2),Yz=e=>$o(e,y2,Vz),Eu=e=>$o(e,C2,Wz),be=e=>h2.test(e),zc=e=>Go(e,E2),Xz=e=>Go(e,eF),Tw=e=>Go(e,p2),Jz=e=>Go(e,g2),Zz=e=>Go(e,y2),Cu=e=>Go(e,C2,!0),$o=(e,n,t)=>{const r=m2.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},Go=(e,n,t=!1)=>{const r=h2.exec(e);return r?r[1]?n(r[1]):t:!1},p2=e=>e==="position"||e==="percentage",y2=e=>e==="image"||e==="url",g2=e=>e==="length"||e==="size"||e==="bg-size",E2=e=>e==="length",Qz=e=>e==="number",eF=e=>e==="family-name",C2=e=>e==="shadow",nF=()=>{const e=Cn("color"),n=Cn("font"),t=Cn("text"),r=Cn("font-weight"),i=Cn("tracking"),o=Cn("leading"),l=Cn("breakpoint"),s=Cn("container"),u=Cn("spacing"),f=Cn("radius"),m=Cn("shadow"),h=Cn("inset-shadow"),p=Cn("text-shadow"),g=Cn("drop-shadow"),b=Cn("blur"),y=Cn("perspective"),E=Cn("aspect"),w=Cn("ease"),x=Cn("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...I(),be,Ce],P=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],M=()=>[be,Ce,u],N=()=>[Ka,"full","auto",...M()],$=()=>[ui,"none","subgrid",be,Ce],z=()=>["auto",{span:["full",ui,be,Ce]},ui,be,Ce],j=()=>[ui,"auto",be,Ce],H=()=>["auto","min","max","fr",be,Ce],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],W=()=>["auto",...M()],X=()=>[Ka,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],R=()=>[e,be,Ce],Z=()=>[...I(),Tw,Uw,{position:[be,Ce]}],Q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],B=()=>["auto","cover","contain",Jz,qz,{size:[be,Ce]}],q=()=>[qh,zc,Gi],ie=()=>["","none","full",f,be,Ce],de=()=>["",Ne,zc,Gi],ge=()=>["solid","dashed","dotted","double"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>[Ne,qh,Tw,Uw],he=()=>["","none",b,be,Ce],re=()=>["none",Ne,be,Ce],ue=()=>["none",Ne,be,Ce],me=()=>[Ne,be,Ce],ne=()=>[Ka,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pr],breakpoint:[Pr],color:[Gz],container:[Pr],"drop-shadow":[Pr],ease:["in","out","in-out"],font:[Kz],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pr],shadow:[Pr],spacing:["px",Ne],text:[Pr],"text-shadow":[Pr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ka,Ce,be,E]}],container:["container"],columns:[{columns:[Ne,Ce,be,s]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{start:N()}],end:[{end:N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[ui,"auto",be,Ce]}],basis:[{basis:[Ka,"full","auto",s,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ne,Ka,"auto","initial","none",Ce]}],grow:[{grow:["",Ne,be,Ce]}],shrink:[{shrink:["",Ne,be,Ce]}],order:[{order:[ui,"first","last","none",be,Ce]}],"grid-cols":[{"grid-cols":$()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":$()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":H()}],"auto-rows":[{"auto-rows":H()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:X()}],w:[{w:[s,"screen",...X()]}],"min-w":[{"min-w":[s,"screen","none",...X()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[l]},...X()]}],h:[{h:["screen",...X()]}],"min-h":[{"min-h":["screen","none",...X()]}],"max-h":[{"max-h":["screen",...X()]}],"font-size":[{text:["base",t,zc,Gi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,be,Yh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",qh,Ce]}],"font-family":[{font:[Xz,Ce,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,be,Ce]}],"line-clamp":[{"line-clamp":[Ne,"none",be,Yh]}],leading:[{leading:[o,...M()]}],"list-image":[{"list-image":["none",be,Ce]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",be,Ce]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ge(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ne,"from-font","auto",be,Gi]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[Ne,"auto",be,Ce]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be,Ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be,Ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:Q()}],"bg-size":[{bg:B()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ui,be,Ce],radial:["",be,Ce],conic:[ui,be,Ce]},Zz,Yz]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:ie()}],"rounded-s":[{"rounded-s":ie()}],"rounded-e":[{"rounded-e":ie()}],"rounded-t":[{"rounded-t":ie()}],"rounded-r":[{"rounded-r":ie()}],"rounded-b":[{"rounded-b":ie()}],"rounded-l":[{"rounded-l":ie()}],"rounded-ss":[{"rounded-ss":ie()}],"rounded-se":[{"rounded-se":ie()}],"rounded-ee":[{"rounded-ee":ie()}],"rounded-es":[{"rounded-es":ie()}],"rounded-tl":[{"rounded-tl":ie()}],"rounded-tr":[{"rounded-tr":ie()}],"rounded-br":[{"rounded-br":ie()}],"rounded-bl":[{"rounded-bl":ie()}],"border-w":[{border:de()}],"border-w-x":[{"border-x":de()}],"border-w-y":[{"border-y":de()}],"border-w-s":[{"border-s":de()}],"border-w-e":[{"border-e":de()}],"border-w-t":[{"border-t":de()}],"border-w-r":[{"border-r":de()}],"border-w-b":[{"border-b":de()}],"border-w-l":[{"border-l":de()}],"divide-x":[{"divide-x":de()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":de()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ge(),"hidden","none"]}],"divide-style":[{divide:[...ge(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...ge(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ne,be,Ce]}],"outline-w":[{outline:["",Ne,zc,Gi]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",m,Cu,Eu]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",h,Cu,Eu]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:de()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[Ne,Gi]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":de()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",p,Cu,Eu]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[Ne,be,Ce]}],"mix-blend":[{"mix-blend":[...xe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":xe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ne]}],"mask-image-linear-from-pos":[{"mask-linear-from":ce()}],"mask-image-linear-to-pos":[{"mask-linear-to":ce()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":ce()}],"mask-image-t-to-pos":[{"mask-t-to":ce()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":ce()}],"mask-image-r-to-pos":[{"mask-r-to":ce()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":ce()}],"mask-image-b-to-pos":[{"mask-b-to":ce()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":ce()}],"mask-image-l-to-pos":[{"mask-l-to":ce()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":ce()}],"mask-image-x-to-pos":[{"mask-x-to":ce()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":ce()}],"mask-image-y-to-pos":[{"mask-y-to":ce()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[be,Ce]}],"mask-image-radial-from-pos":[{"mask-radial-from":ce()}],"mask-image-radial-to-pos":[{"mask-radial-to":ce()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":I()}],"mask-image-conic-pos":[{"mask-conic":[Ne]}],"mask-image-conic-from-pos":[{"mask-conic-from":ce()}],"mask-image-conic-to-pos":[{"mask-conic-to":ce()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:Q()}],"mask-size":[{mask:B()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",be,Ce]}],filter:[{filter:["","none",be,Ce]}],blur:[{blur:he()}],brightness:[{brightness:[Ne,be,Ce]}],contrast:[{contrast:[Ne,be,Ce]}],"drop-shadow":[{"drop-shadow":["","none",g,Cu,Eu]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",Ne,be,Ce]}],"hue-rotate":[{"hue-rotate":[Ne,be,Ce]}],invert:[{invert:["",Ne,be,Ce]}],saturate:[{saturate:[Ne,be,Ce]}],sepia:[{sepia:["",Ne,be,Ce]}],"backdrop-filter":[{"backdrop-filter":["","none",be,Ce]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[Ne,be,Ce]}],"backdrop-contrast":[{"backdrop-contrast":[Ne,be,Ce]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ne,be,Ce]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ne,be,Ce]}],"backdrop-invert":[{"backdrop-invert":["",Ne,be,Ce]}],"backdrop-opacity":[{"backdrop-opacity":[Ne,be,Ce]}],"backdrop-saturate":[{"backdrop-saturate":[Ne,be,Ce]}],"backdrop-sepia":[{"backdrop-sepia":["",Ne,be,Ce]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",be,Ce]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ne,"initial",be,Ce]}],ease:[{ease:["linear","initial",w,be,Ce]}],delay:[{delay:[Ne,be,Ce]}],animate:[{animate:["none",x,be,Ce]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,be,Ce]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:re()}],"rotate-x":[{"rotate-x":re()}],"rotate-y":[{"rotate-y":re()}],"rotate-z":[{"rotate-z":re()}],scale:[{scale:ue()}],"scale-x":[{"scale-x":ue()}],"scale-y":[{"scale-y":ue()}],"scale-z":[{"scale-z":ue()}],"scale-3d":["scale-3d"],skew:[{skew:me()}],"skew-x":[{"skew-x":me()}],"skew-y":[{"skew-y":me()}],transform:[{transform:[be,Ce,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ne()}],"translate-x":[{"translate-x":ne()}],"translate-y":[{"translate-y":ne()}],"translate-z":[{"translate-z":ne()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be,Ce]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be,Ce]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[Ne,zc,Gi,Yh]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},tF=Rz(nF);function hn(...e){return tF(Re(e))}const rF=c2("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function iF({className:e,variant:n,...t}){return O.jsx("div",{"data-slot":"alert",role:"alert",className:hn(rF({variant:n}),e),...t})}function aF({className:e,...n}){return O.jsx("div",{"data-slot":"alert-description",className:hn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",e),...n})}const oF=c2("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Ki({className:e,variant:n,asChild:t=!1,...r}){const i=t?co:"span";return O.jsx(i,{"data-slot":"badge",className:hn(oF({variant:n}),e),...r})}function Kt({className:e,...n}){return O.jsx("div",{"data-slot":"card",className:hn("bg-card text-card-foreground flex flex-col gap-3 rounded-lg border shadow-sm",e),...n})}function qt({className:e,...n}){return O.jsx("div",{"data-slot":"card-header",className:hn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-4 pt-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",e),...n})}function Yt({className:e,...n}){return O.jsx("h4",{"data-slot":"card-title",className:hn("leading-none",e),...n})}function dr({className:e,...n}){return O.jsx("p",{"data-slot":"card-description",className:hn("text-muted-foreground text-sm",e),...n})}function fr({className:e,...n}){return O.jsx("div",{"data-slot":"card-content",className:hn("px-4 [&:last-child]:pb-4",e),...n})}function cF({className:e,children:n,...t}){return O.jsxs(Ej,{"data-slot":"scroll-area",className:hn("relative",e),...t,children:[O.jsx(Cj,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:n}),O.jsx(lF,{}),O.jsx(bj,{})]})}function lF({className:e,orientation:n="vertical",...t}){return O.jsx(wO,{"data-slot":"scroll-area-scrollbar",orientation:n,className:hn("flex touch-none p-px transition-colors select-none",n==="vertical"&&"h-full w-2.5 border-l border-l-transparent",n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",e),...t,children:O.jsx(TO,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function sF({...e}){return O.jsx(h3,{"data-slot":"select",...e})}function uF({...e}){return O.jsx(p3,{"data-slot":"select-value",...e})}function dF({className:e,size:n="default",children:t,...r}){return O.jsxs(v3,{"data-slot":"select-trigger","data-size":n,className:hn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...r,children:[t,O.jsx(y3,{asChild:!0,children:O.jsx(u2,{className:"size-4 opacity-50"})})]})}function fF({className:e,children:n,position:t="popper",...r}){return O.jsx(g3,{children:O.jsxs(E3,{"data-slot":"select-content",className:hn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...r,children:[O.jsx(hF,{}),O.jsx(C3,{className:hn("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:n}),O.jsx(vF,{})]})})}function mF({className:e,children:n,...t}){return O.jsxs(b3,{"data-slot":"select-item",className:hn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",e),...t,children:[O.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:O.jsx(w3,{children:O.jsx(tz,{className:"size-4"})})}),O.jsx(S3,{children:n})]})}function hF({className:e,...n}){return O.jsx(x3,{"data-slot":"select-scroll-up-button",className:hn("flex cursor-default items-center justify-center py-1",e),...n,children:O.jsx(az,{className:"size-4"})})}function vF({className:e,...n}){return O.jsx(A3,{"data-slot":"select-scroll-down-button",className:hn("flex cursor-default items-center justify-center py-1",e),...n,children:O.jsx(u2,{className:"size-4"})})}function pF({className:e,orientation:n="horizontal",decorative:t=!0,...r}){return O.jsx(I3,{"data-slot":"separator-root",decorative:t,orientation:n,className:hn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...r})}function yF({className:e,...n}){return O.jsx(H3,{"data-slot":"tabs",className:hn("flex flex-col gap-2",e),...n})}function gF({className:e,...n}){return O.jsx(W3,{"data-slot":"tabs-list",className:hn("bg-muted text-muted-foreground inline-flex h-8 w-fit items-center justify-center rounded-lg p-[3px] flex",e),...n})}function bu({className:e,...n}){return O.jsx(V3,{"data-slot":"tabs-trigger",className:hn("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function Su({className:e,...n}){return O.jsx(K3,{"data-slot":"tabs-content",className:hn("flex-1 outline-none",e),...n})}function EF(){const e=[{year:2019,theme:"Emerging Methodologies in Social Sciences"},{year:2021,theme:"Interdisciplinary Approaches to Global Challenges"},{year:2024,theme:"Data-Driven Research and Open Science"}];return O.jsxs(Kt,{className:"border-2 border-primary/20 bg-primary/5",children:[O.jsxs(qt,{className:"pb-0",children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(cz,{className:"size-5"}),"Research Hypothesis"]}),O.jsx(dr,{children:"Claim under evaluation"})]}),O.jsxs(fr,{className:"grid gap-3 lg:grid-cols-[1fr_1.1fr]",children:[O.jsx("div",{className:"p-3 bg-card rounded-lg border",children:O.jsx("p",{className:"text-base italic",children:'"If a journal publishes a special issue in a given year, total downloads for that year increase."'})}),O.jsxs("div",{className:"grid gap-3 md:grid-cols-[0.9fr_1.1fr]",children:[O.jsxs("div",{children:[O.jsx("h4",{className:"font-semibold mb-2 text-sm",children:"Special Issue Years"}),O.jsx("div",{className:"space-y-1.5",children:e.map(({year:n,theme:t})=>O.jsxs("div",{className:"flex items-start gap-2",children:[O.jsx(Ki,{variant:"secondary",className:"mt-0.5",children:n}),O.jsx("span",{className:"text-sm text-muted-foreground",children:t})]},n))})]}),O.jsxs("div",{className:"text-sm space-y-1.5 md:border-l md:pl-3",children:[O.jsxs("p",{className:"text-muted-foreground",children:[O.jsx("strong",{children:"Rationale:"})," broader audiences, invited authors, promotion, and timely topics may lift downloads."]}),O.jsxs("p",{className:"text-muted-foreground",children:[O.jsx("strong",{children:"Approach:"})," statistical tests, trend analysis, and visual evidence with data-driven conclusions."]})]})]})]})]})}function ca(e){return e.length===0?0:e.reduce((n,t)=>n+t,0)/e.length}function Yu(e){const n=e.length;if(n<2)return 0;const t=ca(e);return e.reduce((i,o)=>i+Math.pow(o-t,2),0)/(n-1)}function CF(e,n){const t=e.length,r=n.length;if(t<2||r<2)return{tStatistic:0,pValue:1,degreesOfFreedom:0};const i=ca(e),o=ca(n),l=Yu(e),s=Yu(n),u=l/t+s/r;if(u<=0)return{tStatistic:0,pValue:1,degreesOfFreedom:0};const f=(i-o)/Math.sqrt(u),m=Math.pow(u,2)/(Math.pow(l/t,2)/(t-1)+Math.pow(s/r,2)/(r-1)),h=JE(Math.abs(f),m);return{tStatistic:f,pValue:h,degreesOfFreedom:m}}function JE(e,n){if(!Number.isFinite(e)||!Number.isFinite(n)||n<=0)return 1;if(e<0)return JE(-e,n);const t=n/(n+e*e),r=bF(n/2,.5,t);return Math.max(0,Math.min(1,r))}function ro(e){const n=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-ro(1-e);let t=.9999999999998099;const r=e-1;for(let l=0;l<n.length;l++)t+=n[l]/(r+l+1);const o=r+7+.5;return .5*Math.log(2*Math.PI)+(r+.5)*Math.log(o)-o+Math.log(t)}function Pw(e,n,t){let l=e+n,s=e+1,u=e-1,f=1,m=1-l*t/s;Math.abs(m)<1e-300&&(m=1e-300),m=1/m;let h=m;for(let p=1;p<=200;p++){const g=2*p;let b=p*(n-p)*t/((u+g)*(e+g));m=1+b*m,Math.abs(m)<1e-300&&(m=1e-300),f=1+b/f,Math.abs(f)<1e-300&&(f=1e-300),m=1/m,h*=m*f,b=-(e+p)*(l+p)*t/((e+g)*(s+g)),m=1+b*m,Math.abs(m)<1e-300&&(m=1e-300),f=1+b/f,Math.abs(f)<1e-300&&(f=1e-300),m=1/m;const y=m*f;if(h*=y,Math.abs(y-1)<3e-14)break}return h}function bF(e,n,t){if(t<=0)return 0;if(t>=1)return 1;const r=ro(e+n)-ro(e)-ro(n)+e*Math.log(t)+n*Math.log(1-t),i=Math.exp(r);return t<(e+1)/(e+n+2)?i*Pw(e,n,t)/e:1-i*Pw(n,e,1-t)/n}function SF(e,n){const t=ca(e),r=ca(n),i=e.length,o=n.length;if(i<2||o<2)return 0;const l=Yu(e),s=Yu(n),u=Math.sqrt(((i-1)*l+(o-1)*s)/(i+o-2));return u===0?0:(t-r)/u}function wF(e,n){let t=0;const r=e.length,i=e[0].length;for(let s=0;s<r;s++)for(let u=0;u<i;u++){const f=e[s][u],m=n[s][u];m>0&&(t+=Math.pow(f-m,2)/m)}const o=(r-1)*(i-1),l=xF(t,o);return{chiSquare:t,pValue:l,degreesOfFreedom:o}}function xF(e,n){return n<=0||e<0?1:b2(n/2,e/2)}function AF(e,n){if(n<=0||e<=0)return 0;if(n>=e+1)return 1-b2(e,n);let t=1/e,r=t;for(let i=1;i<500&&(r*=n/(e+i),t+=r,!(Math.abs(r)<Math.abs(t)*1e-14));i++);return Math.exp(-n+e*Math.log(n)-ro(e))*t}function b2(e,n){if(n<=0||e<=0)return 1;if(n<e+1)return 1-AF(e,n);const t=1e-300;let r=n+1-e,i=1/t,o=1/r,l=o;for(let s=1;s<500;s++){const u=-s*(s-e);r+=2,o=u*o+r,Math.abs(o)<t&&(o=t),i=r+u/i,Math.abs(i)<t&&(i=t),o=1/o;const f=o*i;if(l*=f,Math.abs(f-1)<1e-14)break}return Math.exp(-n+e*Math.log(n)-ro(e))*l}function S2(e){const n=e.reduce((i,o)=>i+o,0);if(n===0)return 0;const t=e.map(i=>i/n);let r=0;for(const i of t)i>0&&(r-=i*Math.log2(i));return r}function w2(e,n){return n===0?0:(e-n)/n*100}function x2(e){if(e.length<3)return[];const n=[];for(let r=1;r<e.length;r++)n.push(e[r]-e[r-1]);const t=[];for(let r=1;r<n.length;r++)t.push(n[r]-n[r-1]);return t}function UF(e){return e<.001?"Highly significant (p < 0.001)":e<.01?"Very significant (p < 0.01)":e<.05?"Significant (p < 0.05)":e<.1?"Marginally significant (p < 0.10)":"Not significant (p ≥ 0.10)"}function TF(e){const n=Math.abs(e);return n<.2?"Negligible":n<.5?"Small":n<.8?"Medium":"Large"}function PF(e){const[[n,t,r],[i,o,l],[s,u,f]]=e,m=o*f-l*u,h=-(i*f-l*s),p=i*u-o*s,g=-(t*f-r*u),b=n*f-r*s,y=-(n*u-t*s),E=t*l-r*o,w=-(n*l-r*i),x=n*o-t*i,U=n*m+t*h+r*p;return Math.abs(U)<1e-12?null:[[m/U,g/U,E/U],[h/U,b/U,w/U],[p/U,y/U,x/U]]}function IF(e,n){const t=[...e].sort((U,I)=>U.year-I.year),r=t.length;if(r<4)return{specialYearCoefficient:0,standardError:0,tStatistic:0,pValue:1,isSignificant:!1};const i=t.map(U=>[1,U.year,n.includes(U.year)?1:0]),o=t.map(U=>U.totalDownloads),l=[[0,0,0],[0,0,0],[0,0,0]],s=[0,0,0];for(let U=0;U<r;U++)for(let I=0;I<3;I++){s[I]+=i[U][I]*o[U];for(let A=0;A<3;A++)l[I][A]+=i[U][I]*i[U][A]}const u=PF(l);if(!u)return{specialYearCoefficient:0,standardError:0,tStatistic:0,pValue:1,isSignificant:!1};const f=u.map(U=>U[0]*s[0]+U[1]*s[1]+U[2]*s[2]),m=t.map((U,I)=>{const A=f[0]+f[1]*i[I][1]+f[2]*i[I][2];return o[I]-A}),p=r-3;if(p<=0)return{specialYearCoefficient:f[2],standardError:0,tStatistic:0,pValue:1,isSignificant:!1};const y=m.reduce((U,I)=>U+I*I,0)/p*u[2][2],E=Math.sqrt(Math.max(0,y)),w=E>0?f[2]/E:0,x=JE(Math.abs(w),p);return{specialYearCoefficient:f[2],standardError:E,tStatistic:w,pValue:x,isSignificant:x<.05}}function A2(e,n){const t=e.filter(s=>n.includes(s.year)).map(s=>s.totalDownloads),r=e.filter(s=>!n.includes(s.year)).map(s=>s.totalDownloads),i=CF(t,r),o=SF(t,r),l=IF(e,n);return{specialYearsMean:ca(t),nonSpecialYearsMean:ca(r),tTest:i,effectSize:o,effectSizeInterpretation:TF(o),pValueInterpretation:UF(i.pValue),isSignificant:i.pValue<.05,trendAdjusted:l}}function U2(e,n){const t=["Education","Commercial","Library","Government"],r={Education:0,Commercial:0,Library:0,Government:0},i={Education:0,Commercial:0,Library:0,Government:0};e.forEach(h=>{const g=n.includes(h.year)?r:i;h.institutions.forEach(b=>{t.includes(b.type)&&(g[b.type]+=b.downloads)})});const o=[t.map(h=>r[h]),t.map(h=>i[h])],l=o.map(h=>h.reduce((p,g)=>p+g,0)),s=t.map((h,p)=>o.reduce((g,b)=>g+b[p],0)),u=l.reduce((h,p)=>h+p,0),f=o.map((h,p)=>h.map((g,b)=>l[p]*s[b]/u));return{chiSquareResult:wF(o,f),observed:o,expected:f}}function OF({data:e,specialYears:n}){const t=A2(e,n),r=U2(e,n);return O.jsxs("div",{className:"grid gap-4 xl:grid-cols-2",children:[O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(YE,{className:"size-5"}),"A. Special vs Non-Special Year Comparison"]}),O.jsx(dr,{children:"Welch's t-test for independent samples with unequal variances"})]}),O.jsxs(fr,{className:"space-y-3",children:[O.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[O.jsxs("div",{className:"p-3 bg-primary/5 rounded-lg border border-primary/20",children:[O.jsx("div",{className:"text-sm text-muted-foreground mb-1",children:"Mean Downloads (Special Years)"}),O.jsx("div",{className:"text-xl font-semibold",children:t.specialYearsMean.toFixed(0)}),O.jsxs("div",{className:"text-xs text-muted-foreground mt-1",children:["n = ",n.length," years"]})]}),O.jsxs("div",{className:"p-3 bg-muted/50 rounded-lg border",children:[O.jsx("div",{className:"text-sm text-muted-foreground mb-1",children:"Mean Downloads (Non-Special Years)"}),O.jsx("div",{className:"text-xl font-semibold",children:t.nonSpecialYearsMean.toFixed(0)}),O.jsxs("div",{className:"text-xs text-muted-foreground mt-1",children:["n = ",e.length-n.length," years"]})]})]}),O.jsxs("div",{className:"space-y-3 pt-2 border-t",children:[O.jsxs("div",{className:"grid grid-cols-3 gap-3 text-sm",children:[O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"t-statistic:"}),O.jsx("span",{className:"ml-2 font-mono",children:t.tTest.tStatistic.toFixed(3)})]}),O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"df:"}),O.jsx("span",{className:"ml-2 font-mono",children:t.tTest.degreesOfFreedom.toFixed(1)})]}),O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"p-value:"}),O.jsx("span",{className:"ml-2 font-mono",children:t.tTest.pValue.toFixed(4)})]})]}),O.jsxs("div",{children:[O.jsx("div",{className:"text-sm text-muted-foreground mb-1",children:"Effect Size (Cohen's d)"}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("span",{className:"font-mono text-lg",children:t.effectSize.toFixed(3)}),O.jsx(Ki,{variant:t.effectSize>.8?"default":"secondary",children:t.effectSizeInterpretation})]})]}),O.jsxs("div",{className:"p-3 bg-muted/30 rounded border",children:[O.jsx("div",{className:"text-sm font-semibold mb-1",children:"Interpretation"}),O.jsxs("p",{className:"text-sm text-muted-foreground",children:[t.pValueInterpretation,t.isSignificant&&O.jsxs("span",{className:"block mt-1",children:["Special-issue years show"," ",t.specialYearsMean>t.nonSpecialYearsMean?"significantly higher":"significantly lower"," ","downloads than non-special years with a ",t.effectSizeInterpretation.toLowerCase()," effect size."]}),!t.isSignificant&&O.jsx("span",{className:"block mt-1",children:"No statistically significant difference detected between special and non-special years."})]})]})]})]})]}),O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(Sz,{className:"size-5"}),"B. Reader Composition Test"]}),O.jsx(dr,{children:"Chi-square test for independence of institution type distribution"})]}),O.jsxs(fr,{className:"space-y-3",children:[O.jsx("div",{className:"grid grid-cols-2 gap-2 text-sm md:grid-cols-4",children:["Education","Commercial","Library","Government"].map((i,o)=>O.jsxs("div",{className:"p-2.5 bg-muted/50 rounded border",children:[O.jsx("div",{className:"text-xs text-muted-foreground mb-1",children:i}),O.jsxs("div",{className:"font-semibold",children:["Special: ",r.observed[0][o]]}),O.jsxs("div",{className:"text-muted-foreground text-xs",children:["Non-special: ",r.observed[1][o]]})]},i))}),O.jsxs("div",{className:"space-y-2 pt-2 border-t",children:[O.jsxs("div",{className:"grid grid-cols-3 gap-3 text-sm",children:[O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"χ² statistic:"}),O.jsx("span",{className:"ml-2 font-mono",children:r.chiSquareResult.chiSquare.toFixed(3)})]}),O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"df:"}),O.jsx("span",{className:"ml-2 font-mono",children:r.chiSquareResult.degreesOfFreedom})]}),O.jsxs("div",{children:[O.jsx("span",{className:"text-muted-foreground",children:"p-value:"}),O.jsx("span",{className:"ml-2 font-mono",children:r.chiSquareResult.pValue.toFixed(4)})]})]}),O.jsxs("div",{className:"p-3 bg-muted/30 rounded border",children:[O.jsx("div",{className:"text-sm font-semibold mb-1",children:"Interpretation"}),O.jsx("p",{className:"text-sm text-muted-foreground",children:r.chiSquareResult.pValue<.05?"Reader composition significantly differs between special and non-special years, suggesting special issues attract different institutional demographics.":"No significant difference in reader composition detected. Institutional distribution remains consistent regardless of special issue publication."})]})]})]})]})]})}function kF({data:e,specialYears:n}){const t=[...e].sort((y,E)=>y.year-E.year),r=t.map((y,E)=>E===0?{year:y.year,downloads:y.totalDownloads,growthRate:null,isSpecial:n.includes(y.year)}:{year:y.year,downloads:y.totalDownloads,growthRate:w2(y.totalDownloads,t[E-1].totalDownloads),isSpecial:n.includes(y.year)}),i=t.map(y=>y.totalDownloads),o=x2(i),l=t.map(y=>{const E=y.geography.map(w=>w.downloads);return{year:y.year,entropy:S2(E),countryCount:y.geography.length,isSpecial:n.includes(y.year)}}),s=l.filter(y=>y.isSpecial).reduce((y,E)=>y+E.entropy,0)/n.length,u=l.filter(y=>!y.isSpecial).reduce((y,E)=>y+E.entropy,0)/(l.length-n.length),f=r.filter(y=>y.growthRate!==null&&Math.abs(y.growthRate)>=15).length,m=400,h=o.filter(y=>Math.abs(y)>m).length,p=o.filter((y,E)=>{var x;const w=(x=t[E+2])==null?void 0:x.year;return n.includes(w)&&Math.abs(y)>m}).length,g=s-u,b=r.filter(y=>y.growthRate!==null).sort((y,E)=>Math.abs(E.growthRate)-Math.abs(y.growthRate))[0];return O.jsxs("div",{className:"grid gap-4 xl:grid-cols-[0.95fr_1.35fr]",children:[O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(YE,{className:"size-5"}),"A. Mathematical Summary"]}),O.jsx(dr,{children:"Compressed indicators for momentum, volatility, and reach breadth"})]}),O.jsxs(fr,{children:[O.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[O.jsxs("div",{className:"p-3 rounded border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"|YoY| ≥ 15%"}),O.jsx("div",{className:"text-xl font-semibold",children:f})]}),O.jsxs("div",{className:"p-3 rounded border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Large Spikes"}),O.jsx("div",{className:"text-xl font-semibold",children:h})]}),O.jsxs("div",{className:"p-3 rounded border bg-primary/5 border-primary/20",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Spikes in Special Years"}),O.jsx("div",{className:"text-xl font-semibold",children:p})]}),O.jsxs("div",{className:"p-3 rounded border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Entropy Delta (S-NS)"}),O.jsxs("div",{className:"text-xl font-semibold",children:[g>0?"+":"",g.toFixed(2)]})]})]}),O.jsxs("div",{className:"mt-3 p-3 bg-muted/30 rounded border text-sm text-muted-foreground",children:["Strongest single-year momentum: ",(b==null?void 0:b.year)??"N/A"," (",b?`${b.growthRate>0?"+":""}${b.growthRate.toFixed(1)}%`:"N/A","). Special years ",g>0?"broaden":"do not broaden"," geographic spread versus non-special years."]})]})]}),O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(Q3,{className:"size-5"}),"B. Compact Per-Year Diagnostics"]}),O.jsx(dr,{children:"Single table view combining growth, acceleration, and reach"})]}),O.jsx(fr,{className:"overflow-x-auto",children:O.jsxs("table",{className:"w-full text-sm",children:[O.jsx("thead",{children:O.jsxs("tr",{className:"border-b text-muted-foreground",children:[O.jsx("th",{className:"text-left py-2 pr-3",children:"Year"}),O.jsx("th",{className:"text-right py-2 pr-3",children:"Downloads"}),O.jsx("th",{className:"text-right py-2 pr-3",children:"YoY %"}),O.jsx("th",{className:"text-right py-2 pr-3",children:"2nd Diff"}),O.jsx("th",{className:"text-right py-2 pr-3",children:"Entropy"}),O.jsx("th",{className:"text-right py-2",children:"Countries"})]})}),O.jsx("tbody",{children:t.map((y,E)=>{var A;const w=(A=r[E])==null?void 0:A.growthRate,x=E>=2?o[E-2]:null,U=l[E],I=n.includes(y.year);return O.jsxs("tr",{className:`border-b ${I?"bg-primary/5":""}`,children:[O.jsxs("td",{className:"py-2 pr-3 font-medium",children:[y.year," ",I?O.jsx(Ki,{variant:"secondary",children:"Special"}):null]}),O.jsx("td",{className:"py-2 pr-3 text-right",children:y.totalDownloads.toLocaleString()}),O.jsx("td",{className:"py-2 pr-3 text-right font-mono",children:w===null?"—":`${w>0?"+":""}${w.toFixed(1)}`}),O.jsx("td",{className:"py-2 pr-3 text-right font-mono",children:x===null?"—":`${x>0?"+":""}${x.toFixed(0)}`}),O.jsx("td",{className:"py-2 pr-3 text-right font-mono",children:U.entropy.toFixed(2)}),O.jsx("td",{className:"py-2 text-right",children:U.countryCount})]},y.year)})})]})})]}),O.jsxs(Kt,{className:"xl:col-span-2",children:[O.jsx(qt,{children:O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(yz,{className:"size-5"}),"C. Geographic Breadth Interpretation"]})}),O.jsx(fr,{className:"p-3 bg-muted/30 rounded border text-sm text-muted-foreground",children:s>u?"Special-issue years show higher entropy, indicating broader and more evenly distributed international reach.":"Special-issue years show lower or similar entropy, suggesting growth concentration rather than broadening."})]})]})}var Xh,Iw;function it(){if(Iw)return Xh;Iw=1;var e=Array.isArray;return Xh=e,Xh}var Jh,Ow;function T2(){if(Ow)return Jh;Ow=1;var e=typeof du=="object"&&du&&du.Object===Object&&du;return Jh=e,Jh}var Zh,kw;function Er(){if(kw)return Zh;kw=1;var e=T2(),n=typeof self=="object"&&self&&self.Object===Object&&self,t=e||n||Function("return this")();return Zh=t,Zh}var Qh,Mw;function Xl(){if(Mw)return Qh;Mw=1;var e=Er(),n=e.Symbol;return Qh=n,Qh}var ev,_w;function MF(){if(_w)return ev;_w=1;var e=Xl(),n=Object.prototype,t=n.hasOwnProperty,r=n.toString,i=e?e.toStringTag:void 0;function o(l){var s=t.call(l,i),u=l[i];try{l[i]=void 0;var f=!0}catch{}var m=r.call(l);return f&&(s?l[i]=u:delete l[i]),m}return ev=o,ev}var nv,Nw;function _F(){if(Nw)return nv;Nw=1;var e=Object.prototype,n=e.toString;function t(r){return n.call(r)}return nv=t,nv}var tv,Lw;function $r(){if(Lw)return tv;Lw=1;var e=Xl(),n=MF(),t=_F(),r="[object Null]",i="[object Undefined]",o=e?e.toStringTag:void 0;function l(s){return s==null?s===void 0?i:r:o&&o in Object(s)?n(s):t(s)}return tv=l,tv}var rv,Rw;function Gr(){if(Rw)return rv;Rw=1;function e(n){return n!=null&&typeof n=="object"}return rv=e,rv}var iv,jw;function Ho(){if(jw)return iv;jw=1;var e=$r(),n=Gr(),t="[object Symbol]";function r(i){return typeof i=="symbol"||n(i)&&e(i)==t}return iv=r,iv}var av,Dw;function ZE(){if(Dw)return av;Dw=1;var e=it(),n=Ho(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function i(o,l){if(e(o))return!1;var s=typeof o;return s=="number"||s=="symbol"||s=="boolean"||o==null||n(o)?!0:r.test(o)||!t.test(o)||l!=null&&o in Object(l)}return av=i,av}var ov,Bw;function wi(){if(Bw)return ov;Bw=1;function e(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}return ov=e,ov}var cv,zw;function QE(){if(zw)return cv;zw=1;var e=$r(),n=wi(),t="[object AsyncFunction]",r="[object Function]",i="[object GeneratorFunction]",o="[object Proxy]";function l(s){if(!n(s))return!1;var u=e(s);return u==r||u==i||u==t||u==o}return cv=l,cv}var lv,Fw;function NF(){if(Fw)return lv;Fw=1;var e=Er(),n=e["__core-js_shared__"];return lv=n,lv}var sv,$w;function LF(){if($w)return sv;$w=1;var e=NF(),n=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!n&&n in r}return sv=t,sv}var uv,Gw;function P2(){if(Gw)return uv;Gw=1;var e=Function.prototype,n=e.toString;function t(r){if(r!=null){try{return n.call(r)}catch{}try{return r+""}catch{}}return""}return uv=t,uv}var dv,Hw;function RF(){if(Hw)return dv;Hw=1;var e=QE(),n=LF(),t=wi(),r=P2(),i=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,l=Function.prototype,s=Object.prototype,u=l.toString,f=s.hasOwnProperty,m=RegExp("^"+u.call(f).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(p){if(!t(p)||n(p))return!1;var g=e(p)?m:o;return g.test(r(p))}return dv=h,dv}var fv,Ww;function jF(){if(Ww)return fv;Ww=1;function e(n,t){return n==null?void 0:n[t]}return fv=e,fv}var mv,Vw;function ma(){if(Vw)return mv;Vw=1;var e=RF(),n=jF();function t(r,i){var o=n(r,i);return e(o)?o:void 0}return mv=t,mv}var hv,Kw;function sf(){if(Kw)return hv;Kw=1;var e=ma(),n=e(Object,"create");return hv=n,hv}var vv,qw;function DF(){if(qw)return vv;qw=1;var e=sf();function n(){this.__data__=e?e(null):{},this.size=0}return vv=n,vv}var pv,Yw;function BF(){if(Yw)return pv;Yw=1;function e(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}return pv=e,pv}var yv,Xw;function zF(){if(Xw)return yv;Xw=1;var e=sf(),n="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function i(o){var l=this.__data__;if(e){var s=l[o];return s===n?void 0:s}return r.call(l,o)?l[o]:void 0}return yv=i,yv}var gv,Jw;function FF(){if(Jw)return gv;Jw=1;var e=sf(),n=Object.prototype,t=n.hasOwnProperty;function r(i){var o=this.__data__;return e?o[i]!==void 0:t.call(o,i)}return gv=r,gv}var Ev,Zw;function $F(){if(Zw)return Ev;Zw=1;var e=sf(),n="__lodash_hash_undefined__";function t(r,i){var o=this.__data__;return this.size+=this.has(r)?0:1,o[r]=e&&i===void 0?n:i,this}return Ev=t,Ev}var Cv,Qw;function GF(){if(Qw)return Cv;Qw=1;var e=DF(),n=BF(),t=zF(),r=FF(),i=$F();function o(l){var s=-1,u=l==null?0:l.length;for(this.clear();++s<u;){var f=l[s];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=n,o.prototype.get=t,o.prototype.has=r,o.prototype.set=i,Cv=o,Cv}var bv,ex;function HF(){if(ex)return bv;ex=1;function e(){this.__data__=[],this.size=0}return bv=e,bv}var Sv,nx;function eC(){if(nx)return Sv;nx=1;function e(n,t){return n===t||n!==n&&t!==t}return Sv=e,Sv}var wv,tx;function uf(){if(tx)return wv;tx=1;var e=eC();function n(t,r){for(var i=t.length;i--;)if(e(t[i][0],r))return i;return-1}return wv=n,wv}var xv,rx;function WF(){if(rx)return xv;rx=1;var e=uf(),n=Array.prototype,t=n.splice;function r(i){var o=this.__data__,l=e(o,i);if(l<0)return!1;var s=o.length-1;return l==s?o.pop():t.call(o,l,1),--this.size,!0}return xv=r,xv}var Av,ix;function VF(){if(ix)return Av;ix=1;var e=uf();function n(t){var r=this.__data__,i=e(r,t);return i<0?void 0:r[i][1]}return Av=n,Av}var Uv,ax;function KF(){if(ax)return Uv;ax=1;var e=uf();function n(t){return e(this.__data__,t)>-1}return Uv=n,Uv}var Tv,ox;function qF(){if(ox)return Tv;ox=1;var e=uf();function n(t,r){var i=this.__data__,o=e(i,t);return o<0?(++this.size,i.push([t,r])):i[o][1]=r,this}return Tv=n,Tv}var Pv,cx;function df(){if(cx)return Pv;cx=1;var e=HF(),n=WF(),t=VF(),r=KF(),i=qF();function o(l){var s=-1,u=l==null?0:l.length;for(this.clear();++s<u;){var f=l[s];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=n,o.prototype.get=t,o.prototype.has=r,o.prototype.set=i,Pv=o,Pv}var Iv,lx;function nC(){if(lx)return Iv;lx=1;var e=ma(),n=Er(),t=e(n,"Map");return Iv=t,Iv}var Ov,sx;function YF(){if(sx)return Ov;sx=1;var e=GF(),n=df(),t=nC();function r(){this.size=0,this.__data__={hash:new e,map:new(t||n),string:new e}}return Ov=r,Ov}var kv,ux;function XF(){if(ux)return kv;ux=1;function e(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}return kv=e,kv}var Mv,dx;function ff(){if(dx)return Mv;dx=1;var e=XF();function n(t,r){var i=t.__data__;return e(r)?i[typeof r=="string"?"string":"hash"]:i.map}return Mv=n,Mv}var _v,fx;function JF(){if(fx)return _v;fx=1;var e=ff();function n(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}return _v=n,_v}var Nv,mx;function ZF(){if(mx)return Nv;mx=1;var e=ff();function n(t){return e(this,t).get(t)}return Nv=n,Nv}var Lv,hx;function QF(){if(hx)return Lv;hx=1;var e=ff();function n(t){return e(this,t).has(t)}return Lv=n,Lv}var Rv,vx;function e$(){if(vx)return Rv;vx=1;var e=ff();function n(t,r){var i=e(this,t),o=i.size;return i.set(t,r),this.size+=i.size==o?0:1,this}return Rv=n,Rv}var jv,px;function tC(){if(px)return jv;px=1;var e=YF(),n=JF(),t=ZF(),r=QF(),i=e$();function o(l){var s=-1,u=l==null?0:l.length;for(this.clear();++s<u;){var f=l[s];this.set(f[0],f[1])}}return o.prototype.clear=e,o.prototype.delete=n,o.prototype.get=t,o.prototype.has=r,o.prototype.set=i,jv=o,jv}var Dv,yx;function I2(){if(yx)return Dv;yx=1;var e=tC(),n="Expected a function";function t(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new TypeError(n);var o=function(){var l=arguments,s=i?i.apply(this,l):l[0],u=o.cache;if(u.has(s))return u.get(s);var f=r.apply(this,l);return o.cache=u.set(s,f)||u,f};return o.cache=new(t.Cache||e),o}return t.Cache=e,Dv=t,Dv}var Bv,gx;function n$(){if(gx)return Bv;gx=1;var e=I2(),n=500;function t(r){var i=e(r,function(l){return o.size===n&&o.clear(),l}),o=i.cache;return i}return Bv=t,Bv}var zv,Ex;function t$(){if(Ex)return zv;Ex=1;var e=n$(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(n,function(l,s,u,f){o.push(u?f.replace(t,"$1"):s||l)}),o});return zv=r,zv}var Fv,Cx;function rC(){if(Cx)return Fv;Cx=1;function e(n,t){for(var r=-1,i=n==null?0:n.length,o=Array(i);++r<i;)o[r]=t(n[r],r,n);return o}return Fv=e,Fv}var $v,bx;function r$(){if(bx)return $v;bx=1;var e=Xl(),n=rC(),t=it(),r=Ho(),i=e?e.prototype:void 0,o=i?i.toString:void 0;function l(s){if(typeof s=="string")return s;if(t(s))return n(s,l)+"";if(r(s))return o?o.call(s):"";var u=s+"";return u=="0"&&1/s==-1/0?"-0":u}return $v=l,$v}var Gv,Sx;function O2(){if(Sx)return Gv;Sx=1;var e=r$();function n(t){return t==null?"":e(t)}return Gv=n,Gv}var Hv,wx;function k2(){if(wx)return Hv;wx=1;var e=it(),n=ZE(),t=t$(),r=O2();function i(o,l){return e(o)?o:n(o,l)?[o]:t(r(o))}return Hv=i,Hv}var Wv,xx;function mf(){if(xx)return Wv;xx=1;var e=Ho();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return Wv=n,Wv}var Vv,Ax;function iC(){if(Ax)return Vv;Ax=1;var e=k2(),n=mf();function t(r,i){i=e(i,r);for(var o=0,l=i.length;r!=null&&o<l;)r=r[n(i[o++])];return o&&o==l?r:void 0}return Vv=t,Vv}var Kv,Ux;function M2(){if(Ux)return Kv;Ux=1;var e=iC();function n(t,r,i){var o=t==null?void 0:e(t,r);return o===void 0?i:o}return Kv=n,Kv}var i$=M2();const It=Ye(i$);var qv,Tx;function a$(){if(Tx)return qv;Tx=1;function e(n){return n==null}return qv=e,qv}var o$=a$();const ke=Ye(o$);var Yv,Px;function c$(){if(Px)return Yv;Px=1;var e=$r(),n=it(),t=Gr(),r="[object String]";function i(o){return typeof o=="string"||!n(o)&&t(o)&&e(o)==r}return Yv=i,Yv}var l$=c$();const Jl=Ye(l$);var s$=QE();const Me=Ye(s$);var u$=wi();const Wo=Ye(u$);var Xv={exports:{}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function d$(){if(Ix)return Ge;Ix=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function y(E){if(typeof E=="object"&&E!==null){var w=E.$$typeof;switch(w){case e:switch(E=E.type,E){case t:case i:case r:case f:case m:return E;default:switch(E=E&&E.$$typeof,E){case s:case l:case u:case p:case h:case o:return E;default:return w}}case n:return w}}}return Ge.ContextConsumer=l,Ge.ContextProvider=o,Ge.Element=e,Ge.ForwardRef=u,Ge.Fragment=t,Ge.Lazy=p,Ge.Memo=h,Ge.Portal=n,Ge.Profiler=i,Ge.StrictMode=r,Ge.Suspense=f,Ge.SuspenseList=m,Ge.isAsyncMode=function(){return!1},Ge.isConcurrentMode=function(){return!1},Ge.isContextConsumer=function(E){return y(E)===l},Ge.isContextProvider=function(E){return y(E)===o},Ge.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===e},Ge.isForwardRef=function(E){return y(E)===u},Ge.isFragment=function(E){return y(E)===t},Ge.isLazy=function(E){return y(E)===p},Ge.isMemo=function(E){return y(E)===h},Ge.isPortal=function(E){return y(E)===n},Ge.isProfiler=function(E){return y(E)===i},Ge.isStrictMode=function(E){return y(E)===r},Ge.isSuspense=function(E){return y(E)===f},Ge.isSuspenseList=function(E){return y(E)===m},Ge.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===t||E===i||E===r||E===f||E===m||E===g||typeof E=="object"&&E!==null&&(E.$$typeof===p||E.$$typeof===h||E.$$typeof===o||E.$$typeof===l||E.$$typeof===u||E.$$typeof===b||E.getModuleId!==void 0)},Ge.typeOf=y,Ge}var Ox;function f$(){return Ox||(Ox=1,Xv.exports=d$()),Xv.exports}var m$=f$(),Jv,kx;function _2(){if(kx)return Jv;kx=1;var e=$r(),n=Gr(),t="[object Number]";function r(i){return typeof i=="number"||n(i)&&e(i)==t}return Jv=r,Jv}var Zv,Mx;function h$(){if(Mx)return Zv;Mx=1;var e=_2();function n(t){return e(t)&&t!=+t}return Zv=n,Zv}var v$=h$();const Vo=Ye(v$);var p$=_2();const y$=Ye(p$);var Vt=function(n){return n===0?0:n>0?1:-1},qi=function(n){return Jl(n)&&n.indexOf("%")===n.length-1},fe=function(n){return y$(n)&&!Vo(n)},Sn=function(n){return fe(n)||Jl(n)},g$=0,ha=function(n){var t=++g$;return"".concat(n||"").concat(t)},la=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!fe(n)&&!Jl(n))return r;var o;if(qi(n)){var l=n.indexOf("%");o=t*parseFloat(n.slice(0,l))/100}else o=+n;return Vo(o)&&(o=r),i&&o>t&&(o=t),o},hi=function(n){if(!n)return null;var t=Object.keys(n);return t&&t.length?n[t[0]]:null},E$=function(n){if(!Array.isArray(n))return!1;for(var t=n.length,r={},i=0;i<t;i++)if(!r[n[i]])r[n[i]]=!0;else return!0;return!1},mn=function(n,t){return fe(n)&&fe(t)?function(r){return n+r*(t-n)}:function(){return t}};function Xu(e,n,t){return!e||!e.length?null:e.find(function(r){return r&&(typeof n=="function"?n(r):It(r,n))===t})}var C$=function(n){if(!n||!n.length)return null;for(var t=n.length,r=0,i=0,o=0,l=0,s=1/0,u=-1/0,f=0,m=0,h=0;h<t;h++)f=n[h].cx||0,m=n[h].cy||0,r+=f,i+=m,o+=f*m,l+=f*f,s=Math.min(s,f),u=Math.max(u,f);var p=t*l!==r*r?(t*o-r*i)/(t*l-r*r):0;return{xmin:s,xmax:u,a:p,b:(i-p*r)/t}};function io(e,n){for(var t in e)if({}.hasOwnProperty.call(e,t)&&(!{}.hasOwnProperty.call(n,t)||e[t]!==n[t]))return!1;for(var r in n)if({}.hasOwnProperty.call(n,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function m1(e){"@babel/helpers - typeof";return m1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m1(e)}var b$=["viewBox","children"],S$=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],_x=["points","pathLength"],Qv={svg:b$,polygon:_x,polyline:_x},aC=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ju=function(n,t){if(!n||typeof n=="function"||typeof n=="boolean")return null;var r=n;if(_.isValidElement(n)&&(r=n.props),!Wo(r))return null;var i={};return Object.keys(r).forEach(function(o){aC.includes(o)&&(i[o]=t||function(l){return r[o](r,l)})}),i},w$=function(n,t,r){return function(i){return n(t,r,i),null}},ll=function(n,t,r){if(!Wo(n)||m1(n)!=="object")return null;var i=null;return Object.keys(n).forEach(function(o){var l=n[o];aC.includes(o)&&typeof l=="function"&&(i||(i={}),i[o]=w$(l,t,r))}),i},x$=["children"],A$=["children"];function Nx(e,n){if(e==null)return{};var t=U$(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function U$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function h1(e){"@babel/helpers - typeof";return h1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h1(e)}var Lx={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},_r=function(n){return typeof n=="string"?n:n?n.displayName||n.name||"Component":""},Rx=null,ep=null,oC=function e(n){if(n===Rx&&Array.isArray(ep))return ep;var t=[];return _.Children.forEach(n,function(r){ke(r)||(m$.isFragment(r)?t=t.concat(e(r.props.children)):t.push(r))}),ep=t,Rx=n,t};function tt(e,n){var t=[],r=[];return Array.isArray(n)?r=n.map(function(i){return _r(i)}):r=[_r(n)],oC(e).forEach(function(i){var o=It(i,"type.displayName")||It(i,"type.name");r.indexOf(o)!==-1&&t.push(i)}),t}function ft(e,n){var t=tt(e,n);return t&&t[0]}var jx=function(n){if(!n||!n.props)return!1;var t=n.props,r=t.width,i=t.height;return!(!fe(r)||r<=0||!fe(i)||i<=0)},T$=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],P$=function(n){return n&&n.type&&Jl(n.type)&&T$.indexOf(n.type)>=0},N2=function(n){return n&&h1(n)==="object"&&"clipDot"in n},I$=function(n,t,r,i){var o,l=(o=Qv==null?void 0:Qv[i])!==null&&o!==void 0?o:[];return t.startsWith("data-")||!Me(n)&&(i&&l.includes(t)||S$.includes(t))||r&&aC.includes(t)},Oe=function(n,t,r){if(!n||typeof n=="function"||typeof n=="boolean")return null;var i=n;if(_.isValidElement(n)&&(i=n.props),!Wo(i))return null;var o={};return Object.keys(i).forEach(function(l){var s;I$((s=i)===null||s===void 0?void 0:s[l],l,t,r)&&(o[l]=i[l])}),o},v1=function e(n,t){if(n===t)return!0;var r=_.Children.count(n);if(r!==_.Children.count(t))return!1;if(r===0)return!0;if(r===1)return Dx(Array.isArray(n)?n[0]:n,Array.isArray(t)?t[0]:t);for(var i=0;i<r;i++){var o=n[i],l=t[i];if(Array.isArray(o)||Array.isArray(l)){if(!e(o,l))return!1}else if(!Dx(o,l))return!1}return!0},Dx=function(n,t){if(ke(n)&&ke(t))return!0;if(!ke(n)&&!ke(t)){var r=n.props||{},i=r.children,o=Nx(r,x$),l=t.props||{},s=l.children,u=Nx(l,A$);return i&&s?io(o,u)&&v1(i,s):!i&&!s?io(o,u):!1}return!1},Bx=function(n,t){var r=[],i={};return oC(n).forEach(function(o,l){if(P$(o))r.push(o);else if(o){var s=_r(o.type),u=t[s]||{},f=u.handler,m=u.once;if(f&&(!m||!i[s])){var h=f(o,s,l);r.push(h),i[s]=!0}}}),r},O$=function(n){var t=n&&n.type;return t&&Lx[t]?Lx[t]:null},k$=function(n,t){return oC(t).indexOf(n)},M$=["children","width","height","viewBox","className","style","title","desc"];function p1(){return p1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p1.apply(this,arguments)}function _$(e,n){if(e==null)return{};var t=N$(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function N$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function y1(e){var n=e.children,t=e.width,r=e.height,i=e.viewBox,o=e.className,l=e.style,s=e.title,u=e.desc,f=_$(e,M$),m=i||{width:t,height:r,x:0,y:0},h=Re("recharts-surface",o);return D.createElement("svg",p1({},Oe(f,!0,"svg"),{className:h,width:t,height:r,style:l,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),D.createElement("title",null,s),D.createElement("desc",null,u),n)}var L$=["children","className"];function g1(){return g1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g1.apply(this,arguments)}function R$(e,n){if(e==null)return{};var t=j$(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function j$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var $e=D.forwardRef(function(e,n){var t=e.children,r=e.className,i=R$(e,L$),o=Re("recharts-layer",r);return D.createElement("g",g1({className:o},Oe(i,!0),{ref:n}),t)}),Nr=function(n,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o]},np,zx;function D$(){if(zx)return np;zx=1;function e(n,t,r){var i=-1,o=n.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var l=Array(o);++i<o;)l[i]=n[i+t];return l}return np=e,np}var tp,Fx;function B$(){if(Fx)return tp;Fx=1;var e=D$();function n(t,r,i){var o=t.length;return i=i===void 0?o:i,!r&&i>=o?t:e(t,r,i)}return tp=n,tp}var rp,$x;function L2(){if($x)return rp;$x=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",i=n+t+r,o="\\ufe0e\\ufe0f",l="\\u200d",s=RegExp("["+l+e+i+o+"]");function u(f){return s.test(f)}return rp=u,rp}var ip,Gx;function z$(){if(Gx)return ip;Gx=1;function e(n){return n.split("")}return ip=e,ip}var ap,Hx;function F$(){if(Hx)return ap;Hx=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",i=n+t+r,o="\\ufe0e\\ufe0f",l="["+e+"]",s="["+i+"]",u="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+u+")",m="[^"+e+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",b=f+"?",y="["+o+"]?",E="(?:"+g+"(?:"+[m,h,p].join("|")+")"+y+b+")*",w=y+b+E,x="(?:"+[m+s+"?",s,h,p,l].join("|")+")",U=RegExp(u+"(?="+u+")|"+x+w,"g");function I(A){return A.match(U)||[]}return ap=I,ap}var op,Wx;function $$(){if(Wx)return op;Wx=1;var e=z$(),n=L2(),t=F$();function r(i){return n(i)?t(i):e(i)}return op=r,op}var cp,Vx;function G$(){if(Vx)return cp;Vx=1;var e=B$(),n=L2(),t=$$(),r=O2();function i(o){return function(l){l=r(l);var s=n(l)?t(l):void 0,u=s?s[0]:l.charAt(0),f=s?e(s,1).join(""):l.slice(1);return u[o]()+f}}return cp=i,cp}var lp,Kx;function H$(){if(Kx)return lp;Kx=1;var e=G$(),n=e("toUpperCase");return lp=n,lp}var W$=H$();const hf=Ye(W$);function Ze(e){return function(){return e}}const R2=Math.cos,Zu=Math.sin,Qt=Math.sqrt,Qu=Math.PI,vf=2*Qu,E1=Math.PI,C1=2*E1,Wi=1e-6,V$=C1-Wi;function j2(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function K$(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return j2;const t=10**n;return function(r){this._+=r[0];for(let i=1,o=r.length;i<o;++i)this._+=Math.round(arguments[i]*t)/t+r[i]}}class q${constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?j2:K$(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,i){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(n,t,r,i,o,l){this._append`C${+n},${+t},${+r},${+i},${this._x1=+o},${this._y1=+l}`}arcTo(n,t,r,i,o){if(n=+n,t=+t,r=+r,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let l=this._x1,s=this._y1,u=r-n,f=i-t,m=l-n,h=s-t,p=m*m+h*h;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(p>Wi)if(!(Math.abs(h*u-f*m)>Wi)||!o)this._append`L${this._x1=n},${this._y1=t}`;else{let g=r-l,b=i-s,y=u*u+f*f,E=g*g+b*b,w=Math.sqrt(y),x=Math.sqrt(p),U=o*Math.tan((E1-Math.acos((y+p-E)/(2*w*x)))/2),I=U/x,A=U/w;Math.abs(I-1)>Wi&&this._append`L${n+I*m},${t+I*h}`,this._append`A${o},${o},0,0,${+(h*g>m*b)},${this._x1=n+A*u},${this._y1=t+A*f}`}}arc(n,t,r,i,o,l){if(n=+n,t=+t,r=+r,l=!!l,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(i),u=r*Math.sin(i),f=n+s,m=t+u,h=1^l,p=l?i-o:o-i;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>Wi||Math.abs(this._y1-m)>Wi)&&this._append`L${f},${m}`,r&&(p<0&&(p=p%C1+C1),p>V$?this._append`A${r},${r},0,1,${h},${n-s},${t-u}A${r},${r},0,1,${h},${this._x1=f},${this._y1=m}`:p>Wi&&this._append`A${r},${r},0,${+(p>=E1)},${h},${this._x1=n+r*Math.cos(o)},${this._y1=t+r*Math.sin(o)}`)}rect(n,t,r,i){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function cC(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new q$(n)}function lC(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function D2(e){this._context=e}D2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function pf(e){return new D2(e)}function B2(e){return e[0]}function z2(e){return e[1]}function F2(e,n){var t=Ze(!0),r=null,i=pf,o=null,l=cC(s);e=typeof e=="function"?e:e===void 0?B2:Ze(e),n=typeof n=="function"?n:n===void 0?z2:Ze(n);function s(u){var f,m=(u=lC(u)).length,h,p=!1,g;for(r==null&&(o=i(g=l())),f=0;f<=m;++f)!(f<m&&t(h=u[f],f,u))===p&&((p=!p)?o.lineStart():o.lineEnd()),p&&o.point(+e(h,f,u),+n(h,f,u));if(g)return o=null,g+""||null}return s.x=function(u){return arguments.length?(e=typeof u=="function"?u:Ze(+u),s):e},s.y=function(u){return arguments.length?(n=typeof u=="function"?u:Ze(+u),s):n},s.defined=function(u){return arguments.length?(t=typeof u=="function"?u:Ze(!!u),s):t},s.curve=function(u){return arguments.length?(i=u,r!=null&&(o=i(r)),s):i},s.context=function(u){return arguments.length?(u==null?r=o=null:o=i(r=u),s):r},s}function wu(e,n,t){var r=null,i=Ze(!0),o=null,l=pf,s=null,u=cC(f);e=typeof e=="function"?e:e===void 0?B2:Ze(+e),n=typeof n=="function"?n:Ze(n===void 0?0:+n),t=typeof t=="function"?t:t===void 0?z2:Ze(+t);function f(h){var p,g,b,y=(h=lC(h)).length,E,w=!1,x,U=new Array(y),I=new Array(y);for(o==null&&(s=l(x=u())),p=0;p<=y;++p){if(!(p<y&&i(E=h[p],p,h))===w)if(w=!w)g=p,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),b=p-1;b>=g;--b)s.point(U[b],I[b]);s.lineEnd(),s.areaEnd()}w&&(U[p]=+e(E,p,h),I[p]=+n(E,p,h),s.point(r?+r(E,p,h):U[p],t?+t(E,p,h):I[p]))}if(x)return s=null,x+""||null}function m(){return F2().defined(i).curve(l).context(o)}return f.x=function(h){return arguments.length?(e=typeof h=="function"?h:Ze(+h),r=null,f):e},f.x0=function(h){return arguments.length?(e=typeof h=="function"?h:Ze(+h),f):e},f.x1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:Ze(+h),f):r},f.y=function(h){return arguments.length?(n=typeof h=="function"?h:Ze(+h),t=null,f):n},f.y0=function(h){return arguments.length?(n=typeof h=="function"?h:Ze(+h),f):n},f.y1=function(h){return arguments.length?(t=h==null?null:typeof h=="function"?h:Ze(+h),f):t},f.lineX0=f.lineY0=function(){return m().x(e).y(n)},f.lineY1=function(){return m().x(e).y(t)},f.lineX1=function(){return m().x(r).y(n)},f.defined=function(h){return arguments.length?(i=typeof h=="function"?h:Ze(!!h),f):i},f.curve=function(h){return arguments.length?(l=h,o!=null&&(s=l(o)),f):l},f.context=function(h){return arguments.length?(h==null?o=s=null:s=l(o=h),f):o},f}class $2{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function Y$(e){return new $2(e,!0)}function X$(e){return new $2(e,!1)}const sC={draw(e,n){const t=Qt(n/Qu);e.moveTo(t,0),e.arc(0,0,t,0,vf)}},J$={draw(e,n){const t=Qt(n/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},G2=Qt(1/3),Z$=G2*2,Q$={draw(e,n){const t=Qt(n/Z$),r=t*G2;e.moveTo(0,-t),e.lineTo(r,0),e.lineTo(0,t),e.lineTo(-r,0),e.closePath()}},eG={draw(e,n){const t=Qt(n),r=-t/2;e.rect(r,r,t,t)}},nG=.8908130915292852,H2=Zu(Qu/10)/Zu(7*Qu/10),tG=Zu(vf/10)*H2,rG=-R2(vf/10)*H2,iG={draw(e,n){const t=Qt(n*nG),r=tG*t,i=rG*t;e.moveTo(0,-t),e.lineTo(r,i);for(let o=1;o<5;++o){const l=vf*o/5,s=R2(l),u=Zu(l);e.lineTo(u*t,-s*t),e.lineTo(s*r-u*i,u*r+s*i)}e.closePath()}},sp=Qt(3),aG={draw(e,n){const t=-Qt(n/(sp*3));e.moveTo(0,t*2),e.lineTo(-sp*t,-t),e.lineTo(sp*t,-t),e.closePath()}},wt=-.5,xt=Qt(3)/2,b1=1/Qt(12),oG=(b1/2+1)*3,cG={draw(e,n){const t=Qt(n/oG),r=t/2,i=t*b1,o=r,l=t*b1+t,s=-o,u=l;e.moveTo(r,i),e.lineTo(o,l),e.lineTo(s,u),e.lineTo(wt*r-xt*i,xt*r+wt*i),e.lineTo(wt*o-xt*l,xt*o+wt*l),e.lineTo(wt*s-xt*u,xt*s+wt*u),e.lineTo(wt*r+xt*i,wt*i-xt*r),e.lineTo(wt*o+xt*l,wt*l-xt*o),e.lineTo(wt*s+xt*u,wt*u-xt*s),e.closePath()}};function lG(e,n){let t=null,r=cC(i);e=typeof e=="function"?e:Ze(e||sC),n=typeof n=="function"?n:Ze(n===void 0?64:+n);function i(){let o;if(t||(t=o=r()),e.apply(this,arguments).draw(t,+n.apply(this,arguments)),o)return t=null,o+""||null}return i.type=function(o){return arguments.length?(e=typeof o=="function"?o:Ze(o),i):e},i.size=function(o){return arguments.length?(n=typeof o=="function"?o:Ze(+o),i):n},i.context=function(o){return arguments.length?(t=o??null,i):t},i}function ed(){}function nd(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function W2(e){this._context=e}W2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:nd(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:nd(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function sG(e){return new W2(e)}function V2(e){this._context=e}V2.prototype={areaStart:ed,areaEnd:ed,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:nd(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function uG(e){return new V2(e)}function K2(e){this._context=e}K2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:nd(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function dG(e){return new K2(e)}function q2(e){this._context=e}q2.prototype={areaStart:ed,areaEnd:ed,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function fG(e){return new q2(e)}function qx(e){return e<0?-1:1}function Yx(e,n,t){var r=e._x1-e._x0,i=n-e._x1,o=(e._y1-e._y0)/(r||i<0&&-0),l=(t-e._y1)/(i||r<0&&-0),s=(o*i+l*r)/(r+i);return(qx(o)+qx(l))*Math.min(Math.abs(o),Math.abs(l),.5*Math.abs(s))||0}function Xx(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function up(e,n,t){var r=e._x0,i=e._y0,o=e._x1,l=e._y1,s=(o-r)/3;e._context.bezierCurveTo(r+s,i+s*n,o-s,l-s*t,o,l)}function td(e){this._context=e}td.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:up(this,this._t0,Xx(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,up(this,Xx(this,t=Yx(this,e,n)),t);break;default:up(this,this._t0,t=Yx(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function Y2(e){this._context=new X2(e)}(Y2.prototype=Object.create(td.prototype)).point=function(e,n){td.prototype.point.call(this,n,e)};function X2(e){this._context=e}X2.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,r,i,o){this._context.bezierCurveTo(n,e,r,t,o,i)}};function mG(e){return new td(e)}function hG(e){return new Y2(e)}function J2(e){this._context=e}J2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var r=Jx(e),i=Jx(n),o=0,l=1;l<t;++o,++l)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],e[l],n[l]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function Jx(e){var n,t=e.length-1,r,i=new Array(t),o=new Array(t),l=new Array(t);for(i[0]=0,o[0]=2,l[0]=e[0]+2*e[1],n=1;n<t-1;++n)i[n]=1,o[n]=4,l[n]=4*e[n]+2*e[n+1];for(i[t-1]=2,o[t-1]=7,l[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)r=i[n]/o[n-1],o[n]-=r,l[n]-=r*l[n-1];for(i[t-1]=l[t-1]/o[t-1],n=t-2;n>=0;--n)i[n]=(l[n]-i[n+1])/o[n];for(o[t-1]=(e[t]+i[t-1])/2,n=0;n<t-1;++n)o[n]=2*e[n+1]-i[n+1];return[i,o]}function vG(e){return new J2(e)}function yf(e,n){this._context=e,this._t=n}yf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function pG(e){return new yf(e,.5)}function yG(e){return new yf(e,0)}function gG(e){return new yf(e,1)}function uo(e,n){if((l=e.length)>1)for(var t=1,r,i,o=e[n[0]],l,s=o.length;t<l;++t)for(i=o,o=e[n[t]],r=0;r<s;++r)o[r][1]+=o[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function S1(e){for(var n=e.length,t=new Array(n);--n>=0;)t[n]=n;return t}function EG(e,n){return e[n]}function CG(e){const n=[];return n.key=e,n}function bG(){var e=Ze([]),n=S1,t=uo,r=EG;function i(o){var l=Array.from(e.apply(this,arguments),CG),s,u=l.length,f=-1,m;for(const h of o)for(s=0,++f;s<u;++s)(l[s][f]=[0,+r(h,l[s].key,f,o)]).data=h;for(s=0,m=lC(n(l));s<u;++s)l[m[s]].index=s;return t(l,m),l}return i.keys=function(o){return arguments.length?(e=typeof o=="function"?o:Ze(Array.from(o)),i):e},i.value=function(o){return arguments.length?(r=typeof o=="function"?o:Ze(+o),i):r},i.order=function(o){return arguments.length?(n=o==null?S1:typeof o=="function"?o:Ze(Array.from(o)),i):n},i.offset=function(o){return arguments.length?(t=o??uo,i):t},i}function SG(e,n){if((r=e.length)>0){for(var t,r,i=0,o=e[0].length,l;i<o;++i){for(l=t=0;t<r;++t)l+=e[t][i][1]||0;if(l)for(t=0;t<r;++t)e[t][i][1]/=l}uo(e,n)}}function wG(e,n){if((i=e.length)>0){for(var t=0,r=e[n[0]],i,o=r.length;t<o;++t){for(var l=0,s=0;l<i;++l)s+=e[l][t][1]||0;r[t][1]+=r[t][0]=-s/2}uo(e,n)}}function xG(e,n){if(!(!((l=e.length)>0)||!((o=(i=e[n[0]]).length)>0))){for(var t=0,r=1,i,o,l;r<o;++r){for(var s=0,u=0,f=0;s<l;++s){for(var m=e[n[s]],h=m[r][1]||0,p=m[r-1][1]||0,g=(h-p)/2,b=0;b<s;++b){var y=e[n[b]],E=y[r][1]||0,w=y[r-1][1]||0;g+=E-w}u+=h,f+=g*h}i[r-1][1]+=i[r-1][0]=t,u&&(t-=f/u)}i[r-1][1]+=i[r-1][0]=t,uo(e,n)}}function sl(e){"@babel/helpers - typeof";return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},sl(e)}var AG=["type","size","sizeType"];function w1(){return w1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w1.apply(this,arguments)}function Zx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Qx(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zx(Object(t),!0).forEach(function(r){UG(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function UG(e,n,t){return n=TG(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function TG(e){var n=PG(e,"string");return sl(n)=="symbol"?n:n+""}function PG(e,n){if(sl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(sl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function IG(e,n){if(e==null)return{};var t=OG(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OG(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var Z2={symbolCircle:sC,symbolCross:J$,symbolDiamond:Q$,symbolSquare:eG,symbolStar:iG,symbolTriangle:aG,symbolWye:cG},kG=Math.PI/180,MG=function(n){var t="symbol".concat(hf(n));return Z2[t]||sC},_G=function(n,t,r){if(t==="area")return n;switch(r){case"cross":return 5*n*n/9;case"diamond":return .5*n*n/Math.sqrt(3);case"square":return n*n;case"star":{var i=18*kG;return 1.25*n*n*(Math.tan(i)-Math.tan(i*2)*Math.pow(Math.tan(i),2))}case"triangle":return Math.sqrt(3)*n*n/4;case"wye":return(21-10*Math.sqrt(3))*n*n/8;default:return Math.PI*n*n/4}},NG=function(n,t){Z2["symbol".concat(hf(n))]=t},gf=function(n){var t=n.type,r=t===void 0?"circle":t,i=n.size,o=i===void 0?64:i,l=n.sizeType,s=l===void 0?"area":l,u=IG(n,AG),f=Qx(Qx({},u),{},{type:r,size:o,sizeType:s}),m=function(){var E=MG(r),w=lG().type(E).size(_G(o,s,r));return w()},h=f.className,p=f.cx,g=f.cy,b=Oe(f,!0);return p===+p&&g===+g&&o===+o?D.createElement("path",w1({},b,{className:Re("recharts-symbols",h),transform:"translate(".concat(p,", ").concat(g,")"),d:m()})):null};gf.registerSymbol=NG;function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fo(e)}function x1(){return x1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x1.apply(this,arguments)}function eA(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function LG(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?eA(Object(t),!0).forEach(function(r){ul(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eA(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function RG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function jG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eM(r.key),r)}}function DG(e,n,t){return n&&jG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BG(e,n,t){return n=rd(n),zG(e,Q2()?Reflect.construct(n,t||[],rd(e).constructor):n.apply(e,t))}function zG(e,n){if(n&&(fo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FG(e)}function FG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Q2=function(){return!!e})()}function rd(e){return rd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},rd(e)}function $G(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&A1(e,n)}function A1(e,n){return A1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},A1(e,n)}function ul(e,n,t){return n=eM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function eM(e){var n=GG(e,"string");return fo(n)=="symbol"?n:n+""}function GG(e,n){if(fo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(fo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var At=32,uC=(function(e){function n(){return RG(this,n),BG(this,n,arguments)}return $G(n,e),DG(n,[{key:"renderIcon",value:function(r){var i=this.props.inactiveColor,o=At/2,l=At/6,s=At/3,u=r.inactive?i:r.color;if(r.type==="plainline")return D.createElement("line",{strokeWidth:4,fill:"none",stroke:u,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:o,x2:At,y2:o,className:"recharts-legend-icon"});if(r.type==="line")return D.createElement("path",{strokeWidth:4,fill:"none",stroke:u,d:"M0,".concat(o,"h").concat(s,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(2*s,",").concat(o,`
            H`).concat(At,"M").concat(2*s,",").concat(o,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(s,",").concat(o),className:"recharts-legend-icon"});if(r.type==="rect")return D.createElement("path",{stroke:"none",fill:u,d:"M0,".concat(At/8,"h").concat(At,"v").concat(At*3/4,"h").concat(-At,"z"),className:"recharts-legend-icon"});if(D.isValidElement(r.legendIcon)){var f=LG({},r);return delete f.legendIcon,D.cloneElement(r.legendIcon,f)}return D.createElement(gf,{fill:u,cx:o,cy:o,size:At,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,i=this.props,o=i.payload,l=i.iconSize,s=i.layout,u=i.formatter,f=i.inactiveColor,m={x:0,y:0,width:At,height:At},h={display:s==="horizontal"?"inline-block":"block",marginRight:10},p={display:"inline-block",verticalAlign:"middle",marginRight:4};return o.map(function(g,b){var y=g.formatter||u,E=Re(ul(ul({"recharts-legend-item":!0},"legend-item-".concat(b),!0),"inactive",g.inactive));if(g.type==="none")return null;var w=Me(g.value)?null:g.value;Nr(!Me(g.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var x=g.inactive?f:g.color;return D.createElement("li",x1({className:E,style:h,key:"legend-item-".concat(b)},ll(r.props,g,b)),D.createElement(y1,{width:l,height:l,viewBox:m,style:p},r.renderIcon(g)),D.createElement("span",{className:"recharts-legend-item-text",style:{color:x}},y?y(w,g,b):w))})}},{key:"render",value:function(){var r=this.props,i=r.payload,o=r.layout,l=r.align;if(!i||!i.length)return null;var s={padding:0,margin:0,textAlign:o==="horizontal"?l:"left"};return D.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}])})(_.PureComponent);ul(uC,"displayName","Legend");ul(uC,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var dp,nA;function HG(){if(nA)return dp;nA=1;var e=df();function n(){this.__data__=new e,this.size=0}return dp=n,dp}var fp,tA;function WG(){if(tA)return fp;tA=1;function e(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}return fp=e,fp}var mp,rA;function VG(){if(rA)return mp;rA=1;function e(n){return this.__data__.get(n)}return mp=e,mp}var hp,iA;function KG(){if(iA)return hp;iA=1;function e(n){return this.__data__.has(n)}return hp=e,hp}var vp,aA;function qG(){if(aA)return vp;aA=1;var e=df(),n=nC(),t=tC(),r=200;function i(o,l){var s=this.__data__;if(s instanceof e){var u=s.__data__;if(!n||u.length<r-1)return u.push([o,l]),this.size=++s.size,this;s=this.__data__=new t(u)}return s.set(o,l),this.size=s.size,this}return vp=i,vp}var pp,oA;function nM(){if(oA)return pp;oA=1;var e=df(),n=HG(),t=WG(),r=VG(),i=KG(),o=qG();function l(s){var u=this.__data__=new e(s);this.size=u.size}return l.prototype.clear=n,l.prototype.delete=t,l.prototype.get=r,l.prototype.has=i,l.prototype.set=o,pp=l,pp}var yp,cA;function YG(){if(cA)return yp;cA=1;var e="__lodash_hash_undefined__";function n(t){return this.__data__.set(t,e),this}return yp=n,yp}var gp,lA;function XG(){if(lA)return gp;lA=1;function e(n){return this.__data__.has(n)}return gp=e,gp}var Ep,sA;function tM(){if(sA)return Ep;sA=1;var e=tC(),n=YG(),t=XG();function r(i){var o=-1,l=i==null?0:i.length;for(this.__data__=new e;++o<l;)this.add(i[o])}return r.prototype.add=r.prototype.push=n,r.prototype.has=t,Ep=r,Ep}var Cp,uA;function rM(){if(uA)return Cp;uA=1;function e(n,t){for(var r=-1,i=n==null?0:n.length;++r<i;)if(t(n[r],r,n))return!0;return!1}return Cp=e,Cp}var bp,dA;function iM(){if(dA)return bp;dA=1;function e(n,t){return n.has(t)}return bp=e,bp}var Sp,fA;function aM(){if(fA)return Sp;fA=1;var e=tM(),n=rM(),t=iM(),r=1,i=2;function o(l,s,u,f,m,h){var p=u&r,g=l.length,b=s.length;if(g!=b&&!(p&&b>g))return!1;var y=h.get(l),E=h.get(s);if(y&&E)return y==s&&E==l;var w=-1,x=!0,U=u&i?new e:void 0;for(h.set(l,s),h.set(s,l);++w<g;){var I=l[w],A=s[w];if(f)var P=p?f(A,I,w,s,l,h):f(I,A,w,l,s,h);if(P!==void 0){if(P)continue;x=!1;break}if(U){if(!n(s,function(T,M){if(!t(U,M)&&(I===T||m(I,T,u,f,h)))return U.push(M)})){x=!1;break}}else if(!(I===A||m(I,A,u,f,h))){x=!1;break}}return h.delete(l),h.delete(s),x}return Sp=o,Sp}var wp,mA;function JG(){if(mA)return wp;mA=1;var e=Er(),n=e.Uint8Array;return wp=n,wp}var xp,hA;function ZG(){if(hA)return xp;hA=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(i,o){r[++t]=[o,i]}),r}return xp=e,xp}var Ap,vA;function dC(){if(vA)return Ap;vA=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(i){r[++t]=i}),r}return Ap=e,Ap}var Up,pA;function QG(){if(pA)return Up;pA=1;var e=Xl(),n=JG(),t=eC(),r=aM(),i=ZG(),o=dC(),l=1,s=2,u="[object Boolean]",f="[object Date]",m="[object Error]",h="[object Map]",p="[object Number]",g="[object RegExp]",b="[object Set]",y="[object String]",E="[object Symbol]",w="[object ArrayBuffer]",x="[object DataView]",U=e?e.prototype:void 0,I=U?U.valueOf:void 0;function A(P,T,M,N,$,z,j){switch(M){case x:if(P.byteLength!=T.byteLength||P.byteOffset!=T.byteOffset)return!1;P=P.buffer,T=T.buffer;case w:return!(P.byteLength!=T.byteLength||!z(new n(P),new n(T)));case u:case f:case p:return t(+P,+T);case m:return P.name==T.name&&P.message==T.message;case g:case y:return P==T+"";case h:var H=i;case b:var V=N&l;if(H||(H=o),P.size!=T.size&&!V)return!1;var K=j.get(P);if(K)return K==T;N|=s,j.set(P,T);var W=r(H(P),H(T),N,$,z,j);return j.delete(P),W;case E:if(I)return I.call(P)==I.call(T)}return!1}return Up=A,Up}var Tp,yA;function oM(){if(yA)return Tp;yA=1;function e(n,t){for(var r=-1,i=t.length,o=n.length;++r<i;)n[o+r]=t[r];return n}return Tp=e,Tp}var Pp,gA;function e4(){if(gA)return Pp;gA=1;var e=oM(),n=it();function t(r,i,o){var l=i(r);return n(r)?l:e(l,o(r))}return Pp=t,Pp}var Ip,EA;function n4(){if(EA)return Ip;EA=1;function e(n,t){for(var r=-1,i=n==null?0:n.length,o=0,l=[];++r<i;){var s=n[r];t(s,r,n)&&(l[o++]=s)}return l}return Ip=e,Ip}var Op,CA;function t4(){if(CA)return Op;CA=1;function e(){return[]}return Op=e,Op}var kp,bA;function r4(){if(bA)return kp;bA=1;var e=n4(),n=t4(),t=Object.prototype,r=t.propertyIsEnumerable,i=Object.getOwnPropertySymbols,o=i?function(l){return l==null?[]:(l=Object(l),e(i(l),function(s){return r.call(l,s)}))}:n;return kp=o,kp}var Mp,SA;function i4(){if(SA)return Mp;SA=1;function e(n,t){for(var r=-1,i=Array(n);++r<n;)i[r]=t(r);return i}return Mp=e,Mp}var _p,wA;function a4(){if(wA)return _p;wA=1;var e=$r(),n=Gr(),t="[object Arguments]";function r(i){return n(i)&&e(i)==t}return _p=r,_p}var Np,xA;function fC(){if(xA)return Np;xA=1;var e=a4(),n=Gr(),t=Object.prototype,r=t.hasOwnProperty,i=t.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(l){return n(l)&&r.call(l,"callee")&&!i.call(l,"callee")};return Np=o,Np}var Jc={exports:{}},Lp,AA;function o4(){if(AA)return Lp;AA=1;function e(){return!1}return Lp=e,Lp}Jc.exports;var UA;function cM(){return UA||(UA=1,(function(e,n){var t=Er(),r=o4(),i=n&&!n.nodeType&&n,o=i&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===i,s=l?t.Buffer:void 0,u=s?s.isBuffer:void 0,f=u||r;e.exports=f})(Jc,Jc.exports)),Jc.exports}var Rp,TA;function mC(){if(TA)return Rp;TA=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function t(r,i){var o=typeof r;return i=i??e,!!i&&(o=="number"||o!="symbol"&&n.test(r))&&r>-1&&r%1==0&&r<i}return Rp=t,Rp}var jp,PA;function hC(){if(PA)return jp;PA=1;var e=9007199254740991;function n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=e}return jp=n,jp}var Dp,IA;function c4(){if(IA)return Dp;IA=1;var e=$r(),n=hC(),t=Gr(),r="[object Arguments]",i="[object Array]",o="[object Boolean]",l="[object Date]",s="[object Error]",u="[object Function]",f="[object Map]",m="[object Number]",h="[object Object]",p="[object RegExp]",g="[object Set]",b="[object String]",y="[object WeakMap]",E="[object ArrayBuffer]",w="[object DataView]",x="[object Float32Array]",U="[object Float64Array]",I="[object Int8Array]",A="[object Int16Array]",P="[object Int32Array]",T="[object Uint8Array]",M="[object Uint8ClampedArray]",N="[object Uint16Array]",$="[object Uint32Array]",z={};z[x]=z[U]=z[I]=z[A]=z[P]=z[T]=z[M]=z[N]=z[$]=!0,z[r]=z[i]=z[E]=z[o]=z[w]=z[l]=z[s]=z[u]=z[f]=z[m]=z[h]=z[p]=z[g]=z[b]=z[y]=!1;function j(H){return t(H)&&n(H.length)&&!!z[e(H)]}return Dp=j,Dp}var Bp,OA;function lM(){if(OA)return Bp;OA=1;function e(n){return function(t){return n(t)}}return Bp=e,Bp}var Zc={exports:{}};Zc.exports;var kA;function l4(){return kA||(kA=1,(function(e,n){var t=T2(),r=n&&!n.nodeType&&n,i=r&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===r,l=o&&t.process,s=(function(){try{var u=i&&i.require&&i.require("util").types;return u||l&&l.binding&&l.binding("util")}catch{}})();e.exports=s})(Zc,Zc.exports)),Zc.exports}var zp,MA;function sM(){if(MA)return zp;MA=1;var e=c4(),n=lM(),t=l4(),r=t&&t.isTypedArray,i=r?n(r):e;return zp=i,zp}var Fp,_A;function s4(){if(_A)return Fp;_A=1;var e=i4(),n=fC(),t=it(),r=cM(),i=mC(),o=sM(),l=Object.prototype,s=l.hasOwnProperty;function u(f,m){var h=t(f),p=!h&&n(f),g=!h&&!p&&r(f),b=!h&&!p&&!g&&o(f),y=h||p||g||b,E=y?e(f.length,String):[],w=E.length;for(var x in f)(m||s.call(f,x))&&!(y&&(x=="length"||g&&(x=="offset"||x=="parent")||b&&(x=="buffer"||x=="byteLength"||x=="byteOffset")||i(x,w)))&&E.push(x);return E}return Fp=u,Fp}var $p,NA;function u4(){if(NA)return $p;NA=1;var e=Object.prototype;function n(t){var r=t&&t.constructor,i=typeof r=="function"&&r.prototype||e;return t===i}return $p=n,$p}var Gp,LA;function uM(){if(LA)return Gp;LA=1;function e(n,t){return function(r){return n(t(r))}}return Gp=e,Gp}var Hp,RA;function d4(){if(RA)return Hp;RA=1;var e=uM(),n=e(Object.keys,Object);return Hp=n,Hp}var Wp,jA;function f4(){if(jA)return Wp;jA=1;var e=u4(),n=d4(),t=Object.prototype,r=t.hasOwnProperty;function i(o){if(!e(o))return n(o);var l=[];for(var s in Object(o))r.call(o,s)&&s!="constructor"&&l.push(s);return l}return Wp=i,Wp}var Vp,DA;function Zl(){if(DA)return Vp;DA=1;var e=QE(),n=hC();function t(r){return r!=null&&n(r.length)&&!e(r)}return Vp=t,Vp}var Kp,BA;function Ef(){if(BA)return Kp;BA=1;var e=s4(),n=f4(),t=Zl();function r(i){return t(i)?e(i):n(i)}return Kp=r,Kp}var qp,zA;function m4(){if(zA)return qp;zA=1;var e=e4(),n=r4(),t=Ef();function r(i){return e(i,t,n)}return qp=r,qp}var Yp,FA;function h4(){if(FA)return Yp;FA=1;var e=m4(),n=1,t=Object.prototype,r=t.hasOwnProperty;function i(o,l,s,u,f,m){var h=s&n,p=e(o),g=p.length,b=e(l),y=b.length;if(g!=y&&!h)return!1;for(var E=g;E--;){var w=p[E];if(!(h?w in l:r.call(l,w)))return!1}var x=m.get(o),U=m.get(l);if(x&&U)return x==l&&U==o;var I=!0;m.set(o,l),m.set(l,o);for(var A=h;++E<g;){w=p[E];var P=o[w],T=l[w];if(u)var M=h?u(T,P,w,l,o,m):u(P,T,w,o,l,m);if(!(M===void 0?P===T||f(P,T,s,u,m):M)){I=!1;break}A||(A=w=="constructor")}if(I&&!A){var N=o.constructor,$=l.constructor;N!=$&&"constructor"in o&&"constructor"in l&&!(typeof N=="function"&&N instanceof N&&typeof $=="function"&&$ instanceof $)&&(I=!1)}return m.delete(o),m.delete(l),I}return Yp=i,Yp}var Xp,$A;function v4(){if($A)return Xp;$A=1;var e=ma(),n=Er(),t=e(n,"DataView");return Xp=t,Xp}var Jp,GA;function p4(){if(GA)return Jp;GA=1;var e=ma(),n=Er(),t=e(n,"Promise");return Jp=t,Jp}var Zp,HA;function dM(){if(HA)return Zp;HA=1;var e=ma(),n=Er(),t=e(n,"Set");return Zp=t,Zp}var Qp,WA;function y4(){if(WA)return Qp;WA=1;var e=ma(),n=Er(),t=e(n,"WeakMap");return Qp=t,Qp}var ey,VA;function g4(){if(VA)return ey;VA=1;var e=v4(),n=nC(),t=p4(),r=dM(),i=y4(),o=$r(),l=P2(),s="[object Map]",u="[object Object]",f="[object Promise]",m="[object Set]",h="[object WeakMap]",p="[object DataView]",g=l(e),b=l(n),y=l(t),E=l(r),w=l(i),x=o;return(e&&x(new e(new ArrayBuffer(1)))!=p||n&&x(new n)!=s||t&&x(t.resolve())!=f||r&&x(new r)!=m||i&&x(new i)!=h)&&(x=function(U){var I=o(U),A=I==u?U.constructor:void 0,P=A?l(A):"";if(P)switch(P){case g:return p;case b:return s;case y:return f;case E:return m;case w:return h}return I}),ey=x,ey}var ny,KA;function E4(){if(KA)return ny;KA=1;var e=nM(),n=aM(),t=QG(),r=h4(),i=g4(),o=it(),l=cM(),s=sM(),u=1,f="[object Arguments]",m="[object Array]",h="[object Object]",p=Object.prototype,g=p.hasOwnProperty;function b(y,E,w,x,U,I){var A=o(y),P=o(E),T=A?m:i(y),M=P?m:i(E);T=T==f?h:T,M=M==f?h:M;var N=T==h,$=M==h,z=T==M;if(z&&l(y)){if(!l(E))return!1;A=!0,N=!1}if(z&&!N)return I||(I=new e),A||s(y)?n(y,E,w,x,U,I):t(y,E,T,w,x,U,I);if(!(w&u)){var j=N&&g.call(y,"__wrapped__"),H=$&&g.call(E,"__wrapped__");if(j||H){var V=j?y.value():y,K=H?E.value():E;return I||(I=new e),U(V,K,w,x,I)}}return z?(I||(I=new e),r(y,E,w,x,U,I)):!1}return ny=b,ny}var ty,qA;function vC(){if(qA)return ty;qA=1;var e=E4(),n=Gr();function t(r,i,o,l,s){return r===i?!0:r==null||i==null||!n(r)&&!n(i)?r!==r&&i!==i:e(r,i,o,l,t,s)}return ty=t,ty}var ry,YA;function C4(){if(YA)return ry;YA=1;var e=nM(),n=vC(),t=1,r=2;function i(o,l,s,u){var f=s.length,m=f,h=!u;if(o==null)return!m;for(o=Object(o);f--;){var p=s[f];if(h&&p[2]?p[1]!==o[p[0]]:!(p[0]in o))return!1}for(;++f<m;){p=s[f];var g=p[0],b=o[g],y=p[1];if(h&&p[2]){if(b===void 0&&!(g in o))return!1}else{var E=new e;if(u)var w=u(b,y,g,o,l,E);if(!(w===void 0?n(y,b,t|r,u,E):w))return!1}}return!0}return ry=i,ry}var iy,XA;function fM(){if(XA)return iy;XA=1;var e=wi();function n(t){return t===t&&!e(t)}return iy=n,iy}var ay,JA;function b4(){if(JA)return ay;JA=1;var e=fM(),n=Ef();function t(r){for(var i=n(r),o=i.length;o--;){var l=i[o],s=r[l];i[o]=[l,s,e(s)]}return i}return ay=t,ay}var oy,ZA;function mM(){if(ZA)return oy;ZA=1;function e(n,t){return function(r){return r==null?!1:r[n]===t&&(t!==void 0||n in Object(r))}}return oy=e,oy}var cy,QA;function S4(){if(QA)return cy;QA=1;var e=C4(),n=b4(),t=mM();function r(i){var o=n(i);return o.length==1&&o[0][2]?t(o[0][0],o[0][1]):function(l){return l===i||e(l,i,o)}}return cy=r,cy}var ly,eU;function w4(){if(eU)return ly;eU=1;function e(n,t){return n!=null&&t in Object(n)}return ly=e,ly}var sy,nU;function x4(){if(nU)return sy;nU=1;var e=k2(),n=fC(),t=it(),r=mC(),i=hC(),o=mf();function l(s,u,f){u=e(u,s);for(var m=-1,h=u.length,p=!1;++m<h;){var g=o(u[m]);if(!(p=s!=null&&f(s,g)))break;s=s[g]}return p||++m!=h?p:(h=s==null?0:s.length,!!h&&i(h)&&r(g,h)&&(t(s)||n(s)))}return sy=l,sy}var uy,tU;function A4(){if(tU)return uy;tU=1;var e=w4(),n=x4();function t(r,i){return r!=null&&n(r,i,e)}return uy=t,uy}var dy,rU;function U4(){if(rU)return dy;rU=1;var e=vC(),n=M2(),t=A4(),r=ZE(),i=fM(),o=mM(),l=mf(),s=1,u=2;function f(m,h){return r(m)&&i(h)?o(l(m),h):function(p){var g=n(p,m);return g===void 0&&g===h?t(p,m):e(h,g,s|u)}}return dy=f,dy}var fy,iU;function Ko(){if(iU)return fy;iU=1;function e(n){return n}return fy=e,fy}var my,aU;function T4(){if(aU)return my;aU=1;function e(n){return function(t){return t==null?void 0:t[n]}}return my=e,my}var hy,oU;function P4(){if(oU)return hy;oU=1;var e=iC();function n(t){return function(r){return e(r,t)}}return hy=n,hy}var vy,cU;function I4(){if(cU)return vy;cU=1;var e=T4(),n=P4(),t=ZE(),r=mf();function i(o){return t(o)?e(r(o)):n(o)}return vy=i,vy}var py,lU;function xi(){if(lU)return py;lU=1;var e=S4(),n=U4(),t=Ko(),r=it(),i=I4();function o(l){return typeof l=="function"?l:l==null?t:typeof l=="object"?r(l)?n(l[0],l[1]):e(l):i(l)}return py=o,py}var yy,sU;function hM(){if(sU)return yy;sU=1;function e(n,t,r,i){for(var o=n.length,l=r+(i?1:-1);i?l--:++l<o;)if(t(n[l],l,n))return l;return-1}return yy=e,yy}var gy,uU;function O4(){if(uU)return gy;uU=1;function e(n){return n!==n}return gy=e,gy}var Ey,dU;function k4(){if(dU)return Ey;dU=1;function e(n,t,r){for(var i=r-1,o=n.length;++i<o;)if(n[i]===t)return i;return-1}return Ey=e,Ey}var Cy,fU;function M4(){if(fU)return Cy;fU=1;var e=hM(),n=O4(),t=k4();function r(i,o,l){return o===o?t(i,o,l):e(i,n,l)}return Cy=r,Cy}var by,mU;function _4(){if(mU)return by;mU=1;var e=M4();function n(t,r){var i=t==null?0:t.length;return!!i&&e(t,r,0)>-1}return by=n,by}var Sy,hU;function N4(){if(hU)return Sy;hU=1;function e(n,t,r){for(var i=-1,o=n==null?0:n.length;++i<o;)if(r(t,n[i]))return!0;return!1}return Sy=e,Sy}var wy,vU;function L4(){if(vU)return wy;vU=1;function e(){}return wy=e,wy}var xy,pU;function R4(){if(pU)return xy;pU=1;var e=dM(),n=L4(),t=dC(),r=1/0,i=e&&1/t(new e([,-0]))[1]==r?function(o){return new e(o)}:n;return xy=i,xy}var Ay,yU;function j4(){if(yU)return Ay;yU=1;var e=tM(),n=_4(),t=N4(),r=iM(),i=R4(),o=dC(),l=200;function s(u,f,m){var h=-1,p=n,g=u.length,b=!0,y=[],E=y;if(m)b=!1,p=t;else if(g>=l){var w=f?null:i(u);if(w)return o(w);b=!1,p=r,E=new e}else E=f?[]:y;e:for(;++h<g;){var x=u[h],U=f?f(x):x;if(x=m||x!==0?x:0,b&&U===U){for(var I=E.length;I--;)if(E[I]===U)continue e;f&&E.push(U),y.push(x)}else p(E,U,m)||(E!==y&&E.push(U),y.push(x))}return y}return Ay=s,Ay}var Uy,gU;function D4(){if(gU)return Uy;gU=1;var e=xi(),n=j4();function t(r,i){return r&&r.length?n(r,e(i,2)):[]}return Uy=t,Uy}var B4=D4();const EU=Ye(B4);function vM(e,n,t){return n===!0?EU(e,t):Me(n)?EU(e,n):e}function mo(e){"@babel/helpers - typeof";return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mo(e)}var z4=["ref"];function CU(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ir(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?CU(Object(t),!0).forEach(function(r){Cf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):CU(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function F4(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bU(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,yM(r.key),r)}}function $4(e,n,t){return n&&bU(e.prototype,n),t&&bU(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function G4(e,n,t){return n=id(n),H4(e,pM()?Reflect.construct(n,t||[],id(e).constructor):n.apply(e,t))}function H4(e,n){if(n&&(mo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W4(e)}function W4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pM=function(){return!!e})()}function id(e){return id=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},id(e)}function V4(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&U1(e,n)}function U1(e,n){return U1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},U1(e,n)}function Cf(e,n,t){return n=yM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yM(e){var n=K4(e,"string");return mo(n)=="symbol"?n:n+""}function K4(e,n){if(mo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function q4(e,n){if(e==null)return{};var t=Y4(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Y4(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function X4(e){return e.value}function J4(e,n){if(D.isValidElement(e))return D.cloneElement(e,n);if(typeof e=="function")return D.createElement(e,n);n.ref;var t=q4(n,z4);return D.createElement(uC,t)}var SU=1,Qi=(function(e){function n(){var t;F4(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=G4(this,n,[].concat(i)),Cf(t,"lastBoundingBox",{width:-1,height:-1}),t}return V4(n,e),$4(n,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,i=this.getBBox();i?(Math.abs(i.width-this.lastBoundingBox.width)>SU||Math.abs(i.height-this.lastBoundingBox.height)>SU)&&(this.lastBoundingBox.width=i.width,this.lastBoundingBox.height=i.height,r&&r(i)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Ir({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var i=this.props,o=i.layout,l=i.align,s=i.verticalAlign,u=i.margin,f=i.chartWidth,m=i.chartHeight,h,p;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(l==="center"&&o==="vertical"){var g=this.getBBoxSnapshot();h={left:((f||0)-g.width)/2}}else h=l==="right"?{right:u&&u.right||0}:{left:u&&u.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(s==="middle"){var b=this.getBBoxSnapshot();p={top:((m||0)-b.height)/2}}else p=s==="bottom"?{bottom:u&&u.bottom||0}:{top:u&&u.top||0};return Ir(Ir({},h),p)}},{key:"render",value:function(){var r=this,i=this.props,o=i.content,l=i.width,s=i.height,u=i.wrapperStyle,f=i.payloadUniqBy,m=i.payload,h=Ir(Ir({position:"absolute",width:l||"auto",height:s||"auto"},this.getDefaultPosition(u)),u);return D.createElement("div",{className:"recharts-legend-wrapper",style:h,ref:function(g){r.wrapperNode=g}},J4(o,Ir(Ir({},this.props),{},{payload:vM(m,f,X4)})))}}],[{key:"getWithHeight",value:function(r,i){var o=Ir(Ir({},this.defaultProps),r.props),l=o.layout;return l==="vertical"&&fe(r.props.height)?{height:r.props.height}:l==="horizontal"?{width:r.props.width||i}:null}}])})(_.PureComponent);Cf(Qi,"displayName","Legend");Cf(Qi,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Ty,wU;function Z4(){if(wU)return Ty;wU=1;var e=Xl(),n=fC(),t=it(),r=e?e.isConcatSpreadable:void 0;function i(o){return t(o)||n(o)||!!(r&&o&&o[r])}return Ty=i,Ty}var Py,xU;function gM(){if(xU)return Py;xU=1;var e=oM(),n=Z4();function t(r,i,o,l,s){var u=-1,f=r.length;for(o||(o=n),s||(s=[]);++u<f;){var m=r[u];i>0&&o(m)?i>1?t(m,i-1,o,l,s):e(s,m):l||(s[s.length]=m)}return s}return Py=t,Py}var Iy,AU;function Q4(){if(AU)return Iy;AU=1;function e(n){return function(t,r,i){for(var o=-1,l=Object(t),s=i(t),u=s.length;u--;){var f=s[n?u:++o];if(r(l[f],f,l)===!1)break}return t}}return Iy=e,Iy}var Oy,UU;function eH(){if(UU)return Oy;UU=1;var e=Q4(),n=e();return Oy=n,Oy}var ky,TU;function EM(){if(TU)return ky;TU=1;var e=eH(),n=Ef();function t(r,i){return r&&e(r,i,n)}return ky=t,ky}var My,PU;function nH(){if(PU)return My;PU=1;var e=Zl();function n(t,r){return function(i,o){if(i==null)return i;if(!e(i))return t(i,o);for(var l=i.length,s=r?l:-1,u=Object(i);(r?s--:++s<l)&&o(u[s],s,u)!==!1;);return i}}return My=n,My}var _y,IU;function pC(){if(IU)return _y;IU=1;var e=EM(),n=nH(),t=n(e);return _y=t,_y}var Ny,OU;function CM(){if(OU)return Ny;OU=1;var e=pC(),n=Zl();function t(r,i){var o=-1,l=n(r)?Array(r.length):[];return e(r,function(s,u,f){l[++o]=i(s,u,f)}),l}return Ny=t,Ny}var Ly,kU;function tH(){if(kU)return Ly;kU=1;function e(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}return Ly=e,Ly}var Ry,MU;function rH(){if(MU)return Ry;MU=1;var e=Ho();function n(t,r){if(t!==r){var i=t!==void 0,o=t===null,l=t===t,s=e(t),u=r!==void 0,f=r===null,m=r===r,h=e(r);if(!f&&!h&&!s&&t>r||s&&u&&m&&!f&&!h||o&&u&&m||!i&&m||!l)return 1;if(!o&&!s&&!h&&t<r||h&&i&&l&&!o&&!s||f&&i&&l||!u&&l||!m)return-1}return 0}return Ry=n,Ry}var jy,_U;function iH(){if(_U)return jy;_U=1;var e=rH();function n(t,r,i){for(var o=-1,l=t.criteria,s=r.criteria,u=l.length,f=i.length;++o<u;){var m=e(l[o],s[o]);if(m){if(o>=f)return m;var h=i[o];return m*(h=="desc"?-1:1)}}return t.index-r.index}return jy=n,jy}var Dy,NU;function aH(){if(NU)return Dy;NU=1;var e=rC(),n=iC(),t=xi(),r=CM(),i=tH(),o=lM(),l=iH(),s=Ko(),u=it();function f(m,h,p){h.length?h=e(h,function(y){return u(y)?function(E){return n(E,y.length===1?y[0]:y)}:y}):h=[s];var g=-1;h=e(h,o(t));var b=r(m,function(y,E,w){var x=e(h,function(U){return U(y)});return{criteria:x,index:++g,value:y}});return i(b,function(y,E){return l(y,E,p)})}return Dy=f,Dy}var By,LU;function oH(){if(LU)return By;LU=1;function e(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}return By=e,By}var zy,RU;function cH(){if(RU)return zy;RU=1;var e=oH(),n=Math.max;function t(r,i,o){return i=n(i===void 0?r.length-1:i,0),function(){for(var l=arguments,s=-1,u=n(l.length-i,0),f=Array(u);++s<u;)f[s]=l[i+s];s=-1;for(var m=Array(i+1);++s<i;)m[s]=l[s];return m[i]=o(f),e(r,this,m)}}return zy=t,zy}var Fy,jU;function lH(){if(jU)return Fy;jU=1;function e(n){return function(){return n}}return Fy=e,Fy}var $y,DU;function bM(){if(DU)return $y;DU=1;var e=ma(),n=(function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch{}})();return $y=n,$y}var Gy,BU;function sH(){if(BU)return Gy;BU=1;var e=lH(),n=bM(),t=Ko(),r=n?function(i,o){return n(i,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:t;return Gy=r,Gy}var Hy,zU;function uH(){if(zU)return Hy;zU=1;var e=800,n=16,t=Date.now;function r(i){var o=0,l=0;return function(){var s=t(),u=n-(s-l);if(l=s,u>0){if(++o>=e)return arguments[0]}else o=0;return i.apply(void 0,arguments)}}return Hy=r,Hy}var Wy,FU;function dH(){if(FU)return Wy;FU=1;var e=sH(),n=uH(),t=n(e);return Wy=t,Wy}var Vy,$U;function fH(){if($U)return Vy;$U=1;var e=Ko(),n=cH(),t=dH();function r(i,o){return t(n(i,o,e),i+"")}return Vy=r,Vy}var Ky,GU;function bf(){if(GU)return Ky;GU=1;var e=eC(),n=Zl(),t=mC(),r=wi();function i(o,l,s){if(!r(s))return!1;var u=typeof l;return(u=="number"?n(s)&&t(l,s.length):u=="string"&&l in s)?e(s[l],o):!1}return Ky=i,Ky}var qy,HU;function mH(){if(HU)return qy;HU=1;var e=gM(),n=aH(),t=fH(),r=bf(),i=t(function(o,l){if(o==null)return[];var s=l.length;return s>1&&r(o,l[0],l[1])?l=[]:s>2&&r(l[0],l[1],l[2])&&(l=[l[0]]),n(o,e(l,1),[])});return qy=i,qy}var hH=mH();const yC=Ye(hH);function dl(e){"@babel/helpers - typeof";return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dl(e)}function T1(){return T1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},T1.apply(this,arguments)}function vH(e,n){return EH(e)||gH(e,n)||yH(e,n)||pH()}function pH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yH(e,n){if(e){if(typeof e=="string")return WU(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return WU(e,n)}}function WU(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function gH(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function EH(e){if(Array.isArray(e))return e}function VU(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Yy(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?VU(Object(t),!0).forEach(function(r){CH(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):VU(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function CH(e,n,t){return n=bH(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bH(e){var n=SH(e,"string");return dl(n)=="symbol"?n:n+""}function SH(e,n){if(dl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(dl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function wH(e){return Array.isArray(e)&&Sn(e[0])&&Sn(e[1])?e.join(" ~ "):e}var xH=function(n){var t=n.separator,r=t===void 0?" : ":t,i=n.contentStyle,o=i===void 0?{}:i,l=n.itemStyle,s=l===void 0?{}:l,u=n.labelStyle,f=u===void 0?{}:u,m=n.payload,h=n.formatter,p=n.itemSorter,g=n.wrapperClassName,b=n.labelClassName,y=n.label,E=n.labelFormatter,w=n.accessibilityLayer,x=w===void 0?!1:w,U=function(){if(m&&m.length){var j={padding:0,margin:0},H=(p?yC(m,p):m).map(function(V,K){if(V.type==="none")return null;var W=Yy({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},s),X=V.formatter||h||wH,R=V.value,Z=V.name,Q=R,B=Z;if(X&&Q!=null&&B!=null){var q=X(R,Z,V,K,m);if(Array.isArray(q)){var ie=vH(q,2);Q=ie[0],B=ie[1]}else Q=q}return D.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(K),style:W},Sn(B)?D.createElement("span",{className:"recharts-tooltip-item-name"},B):null,Sn(B)?D.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,D.createElement("span",{className:"recharts-tooltip-item-value"},Q),D.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return D.createElement("ul",{className:"recharts-tooltip-item-list",style:j},H)}return null},I=Yy({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},o),A=Yy({margin:0},f),P=!ke(y),T=P?y:"",M=Re("recharts-default-tooltip",g),N=Re("recharts-tooltip-label",b);P&&E&&m!==void 0&&m!==null&&(T=E(y,m));var $=x?{role:"status","aria-live":"assertive"}:{};return D.createElement("div",T1({className:M,style:I},$),D.createElement("p",{className:N,style:A},D.isValidElement(T)?T:"".concat(T)),U())};function fl(e){"@babel/helpers - typeof";return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fl(e)}function xu(e,n,t){return n=AH(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AH(e){var n=UH(e,"string");return fl(n)=="symbol"?n:n+""}function UH(e,n){if(fl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(fl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Fc="recharts-tooltip-wrapper",TH={visibility:"hidden"};function PH(e){var n=e.coordinate,t=e.translateX,r=e.translateY;return Re(Fc,xu(xu(xu(xu({},"".concat(Fc,"-right"),fe(t)&&n&&fe(n.x)&&t>=n.x),"".concat(Fc,"-left"),fe(t)&&n&&fe(n.x)&&t<n.x),"".concat(Fc,"-bottom"),fe(r)&&n&&fe(n.y)&&r>=n.y),"".concat(Fc,"-top"),fe(r)&&n&&fe(n.y)&&r<n.y))}function KU(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.key,i=e.offsetTopLeft,o=e.position,l=e.reverseDirection,s=e.tooltipDimension,u=e.viewBox,f=e.viewBoxDimension;if(o&&fe(o[r]))return o[r];var m=t[r]-s-i,h=t[r]+i;if(n[r])return l[r]?m:h;if(l[r]){var p=m,g=u[r];return p<g?Math.max(h,u[r]):Math.max(m,u[r])}var b=h+s,y=u[r]+f;return b>y?Math.max(m,u[r]):Math.max(h,u[r])}function IH(e){var n=e.translateX,t=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(n,"px, ").concat(t,"px, 0)"):"translate(".concat(n,"px, ").concat(t,"px)")}}function OH(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.offsetTopLeft,i=e.position,o=e.reverseDirection,l=e.tooltipBox,s=e.useTranslate3d,u=e.viewBox,f,m,h;return l.height>0&&l.width>0&&t?(m=KU({allowEscapeViewBox:n,coordinate:t,key:"x",offsetTopLeft:r,position:i,reverseDirection:o,tooltipDimension:l.width,viewBox:u,viewBoxDimension:u.width}),h=KU({allowEscapeViewBox:n,coordinate:t,key:"y",offsetTopLeft:r,position:i,reverseDirection:o,tooltipDimension:l.height,viewBox:u,viewBoxDimension:u.height}),f=IH({translateX:m,translateY:h,useTranslate3d:s})):f=TH,{cssProperties:f,cssClasses:PH({translateX:m,translateY:h,coordinate:t})}}function ho(e){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ho(e)}function qU(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function YU(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qU(Object(t),!0).forEach(function(r){I1(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qU(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function kH(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function MH(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wM(r.key),r)}}function _H(e,n,t){return n&&MH(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function NH(e,n,t){return n=ad(n),LH(e,SM()?Reflect.construct(n,t||[],ad(e).constructor):n.apply(e,t))}function LH(e,n){if(n&&(ho(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return RH(e)}function RH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SM=function(){return!!e})()}function ad(e){return ad=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ad(e)}function jH(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&P1(e,n)}function P1(e,n){return P1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},P1(e,n)}function I1(e,n,t){return n=wM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function wM(e){var n=DH(e,"string");return ho(n)=="symbol"?n:n+""}function DH(e,n){if(ho(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ho(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var XU=1,BH=(function(e){function n(){var t;kH(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=NH(this,n,[].concat(i)),I1(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),I1(t,"handleKeyDown",function(l){if(l.key==="Escape"){var s,u,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(s=(u=t.props.coordinate)===null||u===void 0?void 0:u.x)!==null&&s!==void 0?s:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return jH(n,e),_H(n,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>XU||Math.abs(r.height-this.state.lastBoundingBox.height)>XU)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,i;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,i=this.props,o=i.active,l=i.allowEscapeViewBox,s=i.animationDuration,u=i.animationEasing,f=i.children,m=i.coordinate,h=i.hasPayload,p=i.isAnimationActive,g=i.offset,b=i.position,y=i.reverseDirection,E=i.useTranslate3d,w=i.viewBox,x=i.wrapperStyle,U=OH({allowEscapeViewBox:l,coordinate:m,offsetTopLeft:g,position:b,reverseDirection:y,tooltipBox:this.state.lastBoundingBox,useTranslate3d:E,viewBox:w}),I=U.cssClasses,A=U.cssProperties,P=YU(YU({transition:p&&o?"transform ".concat(s,"ms ").concat(u):void 0},A),{},{pointerEvents:"none",visibility:!this.state.dismissed&&o&&h?"visible":"hidden",position:"absolute",top:0,left:0},x);return D.createElement("div",{tabIndex:-1,className:I,style:P,ref:function(M){r.wrapperNode=M}},f)}}])})(_.PureComponent),zH=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Ai={isSsr:zH()};function vo(e){"@babel/helpers - typeof";return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vo(e)}function JU(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ZU(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?JU(Object(t),!0).forEach(function(r){gC(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):JU(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function FH(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function $H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AM(r.key),r)}}function GH(e,n,t){return n&&$H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function HH(e,n,t){return n=od(n),WH(e,xM()?Reflect.construct(n,t||[],od(e).constructor):n.apply(e,t))}function WH(e,n){if(n&&(vo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return VH(e)}function VH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xM=function(){return!!e})()}function od(e){return od=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},od(e)}function KH(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&O1(e,n)}function O1(e,n){return O1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},O1(e,n)}function gC(e,n,t){return n=AM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AM(e){var n=qH(e,"string");return vo(n)=="symbol"?n:n+""}function qH(e,n){if(vo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function YH(e){return e.dataKey}function XH(e,n){return D.isValidElement(e)?D.cloneElement(e,n):typeof e=="function"?D.createElement(e,n):D.createElement(xH,n)}var Tt=(function(e){function n(){return FH(this,n),HH(this,n,arguments)}return KH(n,e),GH(n,[{key:"render",value:function(){var r=this,i=this.props,o=i.active,l=i.allowEscapeViewBox,s=i.animationDuration,u=i.animationEasing,f=i.content,m=i.coordinate,h=i.filterNull,p=i.isAnimationActive,g=i.offset,b=i.payload,y=i.payloadUniqBy,E=i.position,w=i.reverseDirection,x=i.useTranslate3d,U=i.viewBox,I=i.wrapperStyle,A=b??[];h&&A.length&&(A=vM(b.filter(function(T){return T.value!=null&&(T.hide!==!0||r.props.includeHidden)}),y,YH));var P=A.length>0;return D.createElement(BH,{allowEscapeViewBox:l,animationDuration:s,animationEasing:u,isAnimationActive:p,active:o,coordinate:m,hasPayload:P,offset:g,position:E,reverseDirection:w,useTranslate3d:x,viewBox:U,wrapperStyle:I},XH(f,ZU(ZU({},this.props),{},{payload:A})))}}])})(_.PureComponent);gC(Tt,"displayName","Tooltip");gC(Tt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Ai.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Xy,QU;function JH(){if(QU)return Xy;QU=1;var e=Er(),n=function(){return e.Date.now()};return Xy=n,Xy}var Jy,eT;function ZH(){if(eT)return Jy;eT=1;var e=/\s/;function n(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}return Jy=n,Jy}var Zy,nT;function QH(){if(nT)return Zy;nT=1;var e=ZH(),n=/^\s+/;function t(r){return r&&r.slice(0,e(r)+1).replace(n,"")}return Zy=t,Zy}var Qy,tT;function UM(){if(tT)return Qy;tT=1;var e=QH(),n=wi(),t=Ho(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;function u(f){if(typeof f=="number")return f;if(t(f))return r;if(n(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=n(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var h=o.test(f);return h||l.test(f)?s(f.slice(2),h?2:8):i.test(f)?r:+f}return Qy=u,Qy}var eg,rT;function eW(){if(rT)return eg;rT=1;var e=wi(),n=JH(),t=UM(),r="Expected a function",i=Math.max,o=Math.min;function l(s,u,f){var m,h,p,g,b,y,E=0,w=!1,x=!1,U=!0;if(typeof s!="function")throw new TypeError(r);u=t(u)||0,e(f)&&(w=!!f.leading,x="maxWait"in f,p=x?i(t(f.maxWait)||0,u):p,U="trailing"in f?!!f.trailing:U);function I(H){var V=m,K=h;return m=h=void 0,E=H,g=s.apply(K,V),g}function A(H){return E=H,b=setTimeout(M,u),w?I(H):g}function P(H){var V=H-y,K=H-E,W=u-V;return x?o(W,p-K):W}function T(H){var V=H-y,K=H-E;return y===void 0||V>=u||V<0||x&&K>=p}function M(){var H=n();if(T(H))return N(H);b=setTimeout(M,P(H))}function N(H){return b=void 0,U&&m?I(H):(m=h=void 0,g)}function $(){b!==void 0&&clearTimeout(b),E=0,m=y=h=b=void 0}function z(){return b===void 0?g:N(n())}function j(){var H=n(),V=T(H);if(m=arguments,h=this,y=H,V){if(b===void 0)return A(y);if(x)return clearTimeout(b),b=setTimeout(M,u),I(y)}return b===void 0&&(b=setTimeout(M,u)),g}return j.cancel=$,j.flush=z,j}return eg=l,eg}var ng,iT;function nW(){if(iT)return ng;iT=1;var e=eW(),n=wi(),t="Expected a function";function r(i,o,l){var s=!0,u=!0;if(typeof i!="function")throw new TypeError(t);return n(l)&&(s="leading"in l?!!l.leading:s,u="trailing"in l?!!l.trailing:u),e(i,o,{leading:s,maxWait:o,trailing:u})}return ng=r,ng}var tW=nW();const TM=Ye(tW);function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ml(e)}function aT(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Au(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?aT(Object(t),!0).forEach(function(r){rW(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):aT(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rW(e,n,t){return n=iW(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function iW(e){var n=aW(e,"string");return ml(n)=="symbol"?n:n+""}function aW(e,n){if(ml(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ml(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function oW(e,n){return uW(e)||sW(e,n)||lW(e,n)||cW()}function cW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lW(e,n){if(e){if(typeof e=="string")return oT(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oT(e,n)}}function oT(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function sW(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function uW(e){if(Array.isArray(e))return e}var tg=_.forwardRef(function(e,n){var t=e.aspect,r=e.initialDimension,i=r===void 0?{width:-1,height:-1}:r,o=e.width,l=o===void 0?"100%":o,s=e.height,u=s===void 0?"100%":s,f=e.minWidth,m=f===void 0?0:f,h=e.minHeight,p=e.maxHeight,g=e.children,b=e.debounce,y=b===void 0?0:b,E=e.id,w=e.className,x=e.onResize,U=e.style,I=U===void 0?{}:U,A=_.useRef(null),P=_.useRef();P.current=x,_.useImperativeHandle(n,function(){return Object.defineProperty(A.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),A.current},configurable:!0})});var T=_.useState({containerWidth:i.width,containerHeight:i.height}),M=oW(T,2),N=M[0],$=M[1],z=_.useCallback(function(H,V){$(function(K){var W=Math.round(H),X=Math.round(V);return K.containerWidth===W&&K.containerHeight===X?K:{containerWidth:W,containerHeight:X}})},[]);_.useEffect(function(){var H=function(Z){var Q,B=Z[0].contentRect,q=B.width,ie=B.height;z(q,ie),(Q=P.current)===null||Q===void 0||Q.call(P,q,ie)};y>0&&(H=TM(H,y,{trailing:!0,leading:!1}));var V=new ResizeObserver(H),K=A.current.getBoundingClientRect(),W=K.width,X=K.height;return z(W,X),V.observe(A.current),function(){V.disconnect()}},[z,y]);var j=_.useMemo(function(){var H=N.containerWidth,V=N.containerHeight;if(H<0||V<0)return null;Nr(qi(l)||qi(u),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,l,u),Nr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var K=qi(l)?H:l,W=qi(u)?V:u;t&&t>0&&(K?W=K/t:W&&(K=W*t),p&&W>p&&(W=p)),Nr(K>0||W>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,K,W,l,u,m,h,t);var X=!Array.isArray(g)&&_r(g.type).endsWith("Chart");return D.Children.map(g,function(R){return D.isValidElement(R)?_.cloneElement(R,Au({width:K,height:W},X?{style:Au({height:"100%",width:"100%",maxHeight:W,maxWidth:K},R.props.style)}:{})):R})},[t,g,u,p,h,m,N,l]);return D.createElement("div",{id:E?"".concat(E):void 0,className:Re("recharts-responsive-container",w),style:Au(Au({},I),{},{width:l,height:u,minWidth:m,minHeight:h,maxHeight:p}),ref:A},j)}),hl=function(n){return null};hl.displayName="Cell";function vl(e){"@babel/helpers - typeof";return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vl(e)}function cT(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function k1(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cT(Object(t),!0).forEach(function(r){dW(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cT(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dW(e,n,t){return n=fW(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fW(e){var n=mW(e,"string");return vl(n)=="symbol"?n:n+""}function mW(e,n){if(vl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var qa={widthCache:{},cacheCount:0},hW=2e3,vW={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},lT="recharts_measurement_span";function pW(e){var n=k1({},e);return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),n}var el=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n==null||Ai.isSsr)return{width:0,height:0};var r=pW(t),i=JSON.stringify({text:n,copyStyle:r});if(qa.widthCache[i])return qa.widthCache[i];try{var o=document.getElementById(lT);o||(o=document.createElement("span"),o.setAttribute("id",lT),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));var l=k1(k1({},vW),r);Object.assign(o.style,l),o.textContent="".concat(n);var s=o.getBoundingClientRect(),u={width:s.width,height:s.height};return qa.widthCache[i]=u,++qa.cacheCount>hW&&(qa.cacheCount=0,qa.widthCache={}),u}catch{return{width:0,height:0}}},yW=function(n){return{top:n.top+window.scrollY-document.documentElement.clientTop,left:n.left+window.scrollX-document.documentElement.clientLeft}};function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pl(e)}function cd(e,n){return bW(e)||CW(e,n)||EW(e,n)||gW()}function gW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EW(e,n){if(e){if(typeof e=="string")return sT(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sT(e,n)}}function sT(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function CW(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function bW(e){if(Array.isArray(e))return e}function SW(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function uT(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xW(r.key),r)}}function wW(e,n,t){return n&&uT(e.prototype,n),t&&uT(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function xW(e){var n=AW(e,"string");return pl(n)=="symbol"?n:n+""}function AW(e,n){if(pl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(pl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var dT=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,fT=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,UW=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,TW=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,PM={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},PW=Object.keys(PM),Za="NaN";function IW(e,n){return e*PM[n]}var Uu=(function(){function e(n,t){SW(this,e),this.num=n,this.unit=t,this.num=n,this.unit=t,Number.isNaN(n)&&(this.unit=""),t!==""&&!UW.test(t)&&(this.num=NaN,this.unit=""),PW.includes(t)&&(this.num=IW(n,t),this.unit="px")}return wW(e,[{key:"add",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,i=(r=TW.exec(t))!==null&&r!==void 0?r:[],o=cd(i,3),l=o[1],s=o[2];return new e(parseFloat(l),s??"")}}])})();function IM(e){if(e.includes(Za))return Za;for(var n=e;n.includes("*")||n.includes("/");){var t,r=(t=dT.exec(n))!==null&&t!==void 0?t:[],i=cd(r,4),o=i[1],l=i[2],s=i[3],u=Uu.parse(o??""),f=Uu.parse(s??""),m=l==="*"?u.multiply(f):u.divide(f);if(m.isNaN())return Za;n=n.replace(dT,m.toString())}for(;n.includes("+")||/.-\d+(?:\.\d+)?/.test(n);){var h,p=(h=fT.exec(n))!==null&&h!==void 0?h:[],g=cd(p,4),b=g[1],y=g[2],E=g[3],w=Uu.parse(b??""),x=Uu.parse(E??""),U=y==="+"?w.add(x):w.subtract(x);if(U.isNaN())return Za;n=n.replace(fT,U.toString())}return n}var mT=/\(([^()]*)\)/;function OW(e){for(var n=e;n.includes("(");){var t=mT.exec(n),r=cd(t,2),i=r[1];n=n.replace(mT,IM(i))}return n}function kW(e){var n=e.replace(/\s+/g,"");return n=OW(n),n=IM(n),n}function MW(e){try{return kW(e)}catch{return Za}}function rg(e){var n=MW(e.slice(5,-1));return n===Za?"":n}var _W=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],NW=["dx","dy","angle","className","breakAll"];function M1(){return M1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M1.apply(this,arguments)}function hT(e,n){if(e==null)return{};var t=LW(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function LW(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function vT(e,n){return BW(e)||DW(e,n)||jW(e,n)||RW()}function RW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jW(e,n){if(e){if(typeof e=="string")return pT(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pT(e,n)}}function pT(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function DW(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function BW(e){if(Array.isArray(e))return e}var OM=/[ \f\n\r\t\v\u2028\u2029]+/,kM=function(n){var t=n.children,r=n.breakAll,i=n.style;try{var o=[];ke(t)||(r?o=t.toString().split(""):o=t.toString().split(OM));var l=o.map(function(u){return{word:u,width:el(u,i).width}}),s=r?0:el(" ",i).width;return{wordsWithComputedWidth:l,spaceWidth:s}}catch{return null}},zW=function(n,t,r,i,o){var l=n.maxLines,s=n.children,u=n.style,f=n.breakAll,m=fe(l),h=s,p=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return K.reduce(function(W,X){var R=X.word,Z=X.width,Q=W[W.length-1];if(Q&&(i==null||o||Q.width+Z+r<Number(i)))Q.words.push(R),Q.width+=Z+r;else{var B={words:[R],width:Z};W.push(B)}return W},[])},g=p(t),b=function(K){return K.reduce(function(W,X){return W.width>X.width?W:X})};if(!m)return g;for(var y="…",E=function(K){var W=h.slice(0,K),X=kM({breakAll:f,style:u,children:W+y}).wordsWithComputedWidth,R=p(X),Z=R.length>l||b(R).width>Number(i);return[Z,R]},w=0,x=h.length-1,U=0,I;w<=x&&U<=h.length-1;){var A=Math.floor((w+x)/2),P=A-1,T=E(P),M=vT(T,2),N=M[0],$=M[1],z=E(A),j=vT(z,1),H=j[0];if(!N&&!H&&(w=A+1),N&&H&&(x=A-1),!N&&H){I=$;break}U++}return I||g},yT=function(n){var t=ke(n)?[]:n.toString().split(OM);return[{words:t}]},FW=function(n){var t=n.width,r=n.scaleToFit,i=n.children,o=n.style,l=n.breakAll,s=n.maxLines;if((t||r)&&!Ai.isSsr){var u,f,m=kM({breakAll:l,children:i,style:o});if(m){var h=m.wordsWithComputedWidth,p=m.spaceWidth;u=h,f=p}else return yT(i);return zW({breakAll:l,children:i,maxLines:s,style:o},u,f,t,r)}return yT(i)},gT="#808080",ld=function(n){var t=n.x,r=t===void 0?0:t,i=n.y,o=i===void 0?0:i,l=n.lineHeight,s=l===void 0?"1em":l,u=n.capHeight,f=u===void 0?"0.71em":u,m=n.scaleToFit,h=m===void 0?!1:m,p=n.textAnchor,g=p===void 0?"start":p,b=n.verticalAnchor,y=b===void 0?"end":b,E=n.fill,w=E===void 0?gT:E,x=hT(n,_W),U=_.useMemo(function(){return FW({breakAll:x.breakAll,children:x.children,maxLines:x.maxLines,scaleToFit:h,style:x.style,width:x.width})},[x.breakAll,x.children,x.maxLines,h,x.style,x.width]),I=x.dx,A=x.dy,P=x.angle,T=x.className,M=x.breakAll,N=hT(x,NW);if(!Sn(r)||!Sn(o))return null;var $=r+(fe(I)?I:0),z=o+(fe(A)?A:0),j;switch(y){case"start":j=rg("calc(".concat(f,")"));break;case"middle":j=rg("calc(".concat((U.length-1)/2," * -").concat(s," + (").concat(f," / 2))"));break;default:j=rg("calc(".concat(U.length-1," * -").concat(s,")"));break}var H=[];if(h){var V=U[0].width,K=x.width;H.push("scale(".concat((fe(K)?K/V:1)/V,")"))}return P&&H.push("rotate(".concat(P,", ").concat($,", ").concat(z,")")),H.length&&(N.transform=H.join(" ")),D.createElement("text",M1({},Oe(N,!0),{x:$,y:z,className:Re("recharts-text",T),textAnchor:g,fill:w.includes("url")?gT:w}),U.map(function(W,X){var R=W.words.join(M?"":" ");return D.createElement("tspan",{x:$,dy:X===0?j:s,key:"".concat(R,"-").concat(X)},R)}))};function gi(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function $W(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function EC(e){let n,t,r;e.length!==2?(n=gi,t=(s,u)=>gi(e(s),u),r=(s,u)=>e(s)-u):(n=e===gi||e===$W?e:GW,t=e,r=e);function i(s,u,f=0,m=s.length){if(f<m){if(n(u,u)!==0)return m;do{const h=f+m>>>1;t(s[h],u)<0?f=h+1:m=h}while(f<m)}return f}function o(s,u,f=0,m=s.length){if(f<m){if(n(u,u)!==0)return m;do{const h=f+m>>>1;t(s[h],u)<=0?f=h+1:m=h}while(f<m)}return f}function l(s,u,f=0,m=s.length){const h=i(s,u,f,m-1);return h>f&&r(s[h-1],u)>-r(s[h],u)?h-1:h}return{left:i,center:l,right:o}}function GW(){return 0}function MM(e){return e===null?NaN:+e}function*HW(e,n){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const WW=EC(gi),Ql=WW.right;EC(MM).center;class ET extends Map{constructor(n,t=qW){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[r,i]of n)this.set(r,i)}get(n){return super.get(CT(this,n))}has(n){return super.has(CT(this,n))}set(n,t){return super.set(VW(this,n),t)}delete(n){return super.delete(KW(this,n))}}function CT({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):t}function VW({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):(e.set(r,t),t)}function KW({_intern:e,_key:n},t){const r=n(t);return e.has(r)&&(t=e.get(r),e.delete(r)),t}function qW(e){return e!==null&&typeof e=="object"?e.valueOf():e}function YW(e=gi){if(e===gi)return _M;if(typeof e!="function")throw new TypeError("compare is not a function");return(n,t)=>{const r=e(n,t);return r||r===0?r:(e(t,t)===0)-(e(n,n)===0)}}function _M(e,n){return(e==null||!(e>=e))-(n==null||!(n>=n))||(e<n?-1:e>n?1:0)}const XW=Math.sqrt(50),JW=Math.sqrt(10),ZW=Math.sqrt(2);function sd(e,n,t){const r=(n-e)/Math.max(0,t),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),l=o>=XW?10:o>=JW?5:o>=ZW?2:1;let s,u,f;return i<0?(f=Math.pow(10,-i)/l,s=Math.round(e*f),u=Math.round(n*f),s/f<e&&++s,u/f>n&&--u,f=-f):(f=Math.pow(10,i)*l,s=Math.round(e/f),u=Math.round(n/f),s*f<e&&++s,u*f>n&&--u),u<s&&.5<=t&&t<2?sd(e,n,t*2):[s,u,f]}function _1(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const r=n<e,[i,o,l]=r?sd(n,e,t):sd(e,n,t);if(!(o>=i))return[];const s=o-i+1,u=new Array(s);if(r)if(l<0)for(let f=0;f<s;++f)u[f]=(o-f)/-l;else for(let f=0;f<s;++f)u[f]=(o-f)*l;else if(l<0)for(let f=0;f<s;++f)u[f]=(i+f)/-l;else for(let f=0;f<s;++f)u[f]=(i+f)*l;return u}function N1(e,n,t){return n=+n,e=+e,t=+t,sd(e,n,t)[2]}function L1(e,n,t){n=+n,e=+e,t=+t;const r=n<e,i=r?N1(n,e,t):N1(e,n,t);return(r?-1:1)*(i<0?1/-i:i)}function bT(e,n){let t;for(const r of e)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function ST(e,n){let t;for(const r of e)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function NM(e,n,t=0,r=1/0,i){if(n=Math.floor(n),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(e.length-1,r)),!(t<=n&&n<=r))return e;for(i=i===void 0?_M:YW(i);r>t;){if(r-t>600){const u=r-t+1,f=n-t+1,m=Math.log(u),h=.5*Math.exp(2*m/3),p=.5*Math.sqrt(m*h*(u-h)/u)*(f-u/2<0?-1:1),g=Math.max(t,Math.floor(n-f*h/u+p)),b=Math.min(r,Math.floor(n+(u-f)*h/u+p));NM(e,n,g,b,i)}const o=e[n];let l=t,s=r;for($c(e,t,n),i(e[r],o)>0&&$c(e,t,r);l<s;){for($c(e,l,s),++l,--s;i(e[l],o)<0;)++l;for(;i(e[s],o)>0;)--s}i(e[t],o)===0?$c(e,t,s):(++s,$c(e,s,r)),s<=n&&(t=s+1),n<=s&&(r=s-1)}return e}function $c(e,n,t){const r=e[n];e[n]=e[t],e[t]=r}function QW(e,n,t){if(e=Float64Array.from(HW(e)),!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return ST(e);if(n>=1)return bT(e);var r,i=(r-1)*n,o=Math.floor(i),l=bT(NM(e,o).subarray(0,o+1)),s=ST(e.subarray(o+1));return l+(s-l)*(i-o)}}function e5(e,n,t=MM){if(!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return+t(e[0],0,e);if(n>=1)return+t(e[r-1],r-1,e);var r,i=(r-1)*n,o=Math.floor(i),l=+t(e[o],o,e),s=+t(e[o+1],o+1,e);return l+(s-l)*(i-o)}}function n5(e,n,t){e=+e,n=+n,t=(i=arguments.length)<2?(n=e,e=0,1):i<3?1:+t;for(var r=-1,i=Math.max(0,Math.ceil((n-e)/t))|0,o=new Array(i);++r<i;)o[r]=e+r*t;return o}function Mt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}function Hr(e,n){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof n=="function"?this.interpolator(n):this.range(n);break}}return this}const R1=Symbol("implicit");function CC(){var e=new ET,n=[],t=[],r=R1;function i(o){let l=e.get(o);if(l===void 0){if(r!==R1)return r;e.set(o,l=n.push(o)-1)}return t[l%t.length]}return i.domain=function(o){if(!arguments.length)return n.slice();n=[],e=new ET;for(const l of o)e.has(l)||e.set(l,n.push(l)-1);return i},i.range=function(o){return arguments.length?(t=Array.from(o),i):t.slice()},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return CC(n,t).unknown(r)},Mt.apply(i,arguments),i}function yl(){var e=CC().unknown(void 0),n=e.domain,t=e.range,r=0,i=1,o,l,s=!1,u=0,f=0,m=.5;delete e.unknown;function h(){var p=n().length,g=i<r,b=g?i:r,y=g?r:i;o=(y-b)/Math.max(1,p-u+f*2),s&&(o=Math.floor(o)),b+=(y-b-o*(p-u))*m,l=o*(1-u),s&&(b=Math.round(b),l=Math.round(l));var E=n5(p).map(function(w){return b+o*w});return t(g?E.reverse():E)}return e.domain=function(p){return arguments.length?(n(p),h()):n()},e.range=function(p){return arguments.length?([r,i]=p,r=+r,i=+i,h()):[r,i]},e.rangeRound=function(p){return[r,i]=p,r=+r,i=+i,s=!0,h()},e.bandwidth=function(){return l},e.step=function(){return o},e.round=function(p){return arguments.length?(s=!!p,h()):s},e.padding=function(p){return arguments.length?(u=Math.min(1,f=+p),h()):u},e.paddingInner=function(p){return arguments.length?(u=Math.min(1,p),h()):u},e.paddingOuter=function(p){return arguments.length?(f=+p,h()):f},e.align=function(p){return arguments.length?(m=Math.max(0,Math.min(1,p)),h()):m},e.copy=function(){return yl(n(),[r,i]).round(s).paddingInner(u).paddingOuter(f).align(m)},Mt.apply(h(),arguments)}function LM(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return LM(n())},e}function nl(){return LM(yl.apply(null,arguments).paddingInner(1))}function bC(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function RM(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function es(){}var gl=.7,ud=1/gl,ao="\\s*([+-]?\\d+)\\s*",El="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",t5=/^#([0-9a-f]{3,8})$/,r5=new RegExp(`^rgb\\(${ao},${ao},${ao}\\)$`),i5=new RegExp(`^rgb\\(${mr},${mr},${mr}\\)$`),a5=new RegExp(`^rgba\\(${ao},${ao},${ao},${El}\\)$`),o5=new RegExp(`^rgba\\(${mr},${mr},${mr},${El}\\)$`),c5=new RegExp(`^hsl\\(${El},${mr},${mr}\\)$`),l5=new RegExp(`^hsla\\(${El},${mr},${mr},${El}\\)$`),wT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};bC(es,Cl,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:xT,formatHex:xT,formatHex8:s5,formatHsl:u5,formatRgb:AT,toString:AT});function xT(){return this.rgb().formatHex()}function s5(){return this.rgb().formatHex8()}function u5(){return jM(this).formatHsl()}function AT(){return this.rgb().formatRgb()}function Cl(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=t5.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?UT(n):t===3?new nt(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?Tu(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?Tu(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=r5.exec(e))?new nt(n[1],n[2],n[3],1):(n=i5.exec(e))?new nt(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=a5.exec(e))?Tu(n[1],n[2],n[3],n[4]):(n=o5.exec(e))?Tu(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=c5.exec(e))?IT(n[1],n[2]/100,n[3]/100,1):(n=l5.exec(e))?IT(n[1],n[2]/100,n[3]/100,n[4]):wT.hasOwnProperty(e)?UT(wT[e]):e==="transparent"?new nt(NaN,NaN,NaN,0):null}function UT(e){return new nt(e>>16&255,e>>8&255,e&255,1)}function Tu(e,n,t,r){return r<=0&&(e=n=t=NaN),new nt(e,n,t,r)}function d5(e){return e instanceof es||(e=Cl(e)),e?(e=e.rgb(),new nt(e.r,e.g,e.b,e.opacity)):new nt}function j1(e,n,t,r){return arguments.length===1?d5(e):new nt(e,n,t,r??1)}function nt(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}bC(nt,j1,RM(es,{brighter(e){return e=e==null?ud:Math.pow(ud,e),new nt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?gl:Math.pow(gl,e),new nt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new nt(ea(this.r),ea(this.g),ea(this.b),dd(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:TT,formatHex:TT,formatHex8:f5,formatRgb:PT,toString:PT}));function TT(){return`#${Yi(this.r)}${Yi(this.g)}${Yi(this.b)}`}function f5(){return`#${Yi(this.r)}${Yi(this.g)}${Yi(this.b)}${Yi((isNaN(this.opacity)?1:this.opacity)*255)}`}function PT(){const e=dd(this.opacity);return`${e===1?"rgb(":"rgba("}${ea(this.r)}, ${ea(this.g)}, ${ea(this.b)}${e===1?")":`, ${e})`}`}function dd(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ea(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Yi(e){return e=ea(e),(e<16?"0":"")+e.toString(16)}function IT(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Wt(e,n,t,r)}function jM(e){if(e instanceof Wt)return new Wt(e.h,e.s,e.l,e.opacity);if(e instanceof es||(e=Cl(e)),!e)return new Wt;if(e instanceof Wt)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,i=Math.min(n,t,r),o=Math.max(n,t,r),l=NaN,s=o-i,u=(o+i)/2;return s?(n===o?l=(t-r)/s+(t<r)*6:t===o?l=(r-n)/s+2:l=(n-t)/s+4,s/=u<.5?o+i:2-o-i,l*=60):s=u>0&&u<1?0:l,new Wt(l,s,u,e.opacity)}function m5(e,n,t,r){return arguments.length===1?jM(e):new Wt(e,n,t,r??1)}function Wt(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}bC(Wt,m5,RM(es,{brighter(e){return e=e==null?ud:Math.pow(ud,e),new Wt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?gl:Math.pow(gl,e),new Wt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,i=2*t-r;return new nt(ig(e>=240?e-240:e+120,i,r),ig(e,i,r),ig(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Wt(OT(this.h),Pu(this.s),Pu(this.l),dd(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=dd(this.opacity);return`${e===1?"hsl(":"hsla("}${OT(this.h)}, ${Pu(this.s)*100}%, ${Pu(this.l)*100}%${e===1?")":`, ${e})`}`}}));function OT(e){return e=(e||0)%360,e<0?e+360:e}function Pu(e){return Math.max(0,Math.min(1,e||0))}function ig(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const SC=e=>()=>e;function h5(e,n){return function(t){return e+t*n}}function v5(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function p5(e){return(e=+e)==1?DM:function(n,t){return t-n?v5(n,t,e):SC(isNaN(n)?t:n)}}function DM(e,n){var t=n-e;return t?h5(e,t):SC(isNaN(e)?n:e)}const kT=(function e(n){var t=p5(n);function r(i,o){var l=t((i=j1(i)).r,(o=j1(o)).r),s=t(i.g,o.g),u=t(i.b,o.b),f=DM(i.opacity,o.opacity);return function(m){return i.r=l(m),i.g=s(m),i.b=u(m),i.opacity=f(m),i+""}}return r.gamma=e,r})(1);function y5(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),i;return function(o){for(i=0;i<t;++i)r[i]=e[i]*(1-o)+n[i]*o;return r}}function g5(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function E5(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,i=new Array(r),o=new Array(t),l;for(l=0;l<r;++l)i[l]=qo(e[l],n[l]);for(;l<t;++l)o[l]=n[l];return function(s){for(l=0;l<r;++l)o[l]=i[l](s);return o}}function C5(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function fd(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function b5(e,n){var t={},r={},i;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in e?t[i]=qo(e[i],n[i]):r[i]=n[i];return function(o){for(i in t)r[i]=t[i](o);return r}}var D1=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ag=new RegExp(D1.source,"g");function S5(e){return function(){return e}}function w5(e){return function(n){return e(n)+""}}function x5(e,n){var t=D1.lastIndex=ag.lastIndex=0,r,i,o,l=-1,s=[],u=[];for(e=e+"",n=n+"";(r=D1.exec(e))&&(i=ag.exec(n));)(o=i.index)>t&&(o=n.slice(t,o),s[l]?s[l]+=o:s[++l]=o),(r=r[0])===(i=i[0])?s[l]?s[l]+=i:s[++l]=i:(s[++l]=null,u.push({i:l,x:fd(r,i)})),t=ag.lastIndex;return t<n.length&&(o=n.slice(t),s[l]?s[l]+=o:s[++l]=o),s.length<2?u[0]?w5(u[0].x):S5(n):(n=u.length,function(f){for(var m=0,h;m<n;++m)s[(h=u[m]).i]=h.x(f);return s.join("")})}function qo(e,n){var t=typeof n,r;return n==null||t==="boolean"?SC(n):(t==="number"?fd:t==="string"?(r=Cl(n))?(n=r,kT):x5:n instanceof Cl?kT:n instanceof Date?C5:g5(n)?y5:Array.isArray(n)?E5:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?b5:fd)(e,n)}function wC(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}function A5(e,n){n===void 0&&(n=e,e=qo);for(var t=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);t<r;)o[t]=e(i,i=n[++t]);return function(l){var s=Math.max(0,Math.min(r-1,Math.floor(l*=r)));return o[s](l-s)}}function U5(e){return function(){return e}}function md(e){return+e}var MT=[0,1];function Kn(e){return e}function B1(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:U5(isNaN(n)?NaN:.5)}function T5(e,n){var t;return e>n&&(t=e,e=n,n=t),function(r){return Math.max(e,Math.min(n,r))}}function P5(e,n,t){var r=e[0],i=e[1],o=n[0],l=n[1];return i<r?(r=B1(i,r),o=t(l,o)):(r=B1(r,i),o=t(o,l)),function(s){return o(r(s))}}function I5(e,n,t){var r=Math.min(e.length,n.length)-1,i=new Array(r),o=new Array(r),l=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++l<r;)i[l]=B1(e[l],e[l+1]),o[l]=t(n[l],n[l+1]);return function(s){var u=Ql(e,s,1,r)-1;return o[u](i[u](s))}}function ns(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Sf(){var e=MT,n=MT,t=qo,r,i,o,l=Kn,s,u,f;function m(){var p=Math.min(e.length,n.length);return l!==Kn&&(l=T5(e[0],e[p-1])),s=p>2?I5:P5,u=f=null,h}function h(p){return p==null||isNaN(p=+p)?o:(u||(u=s(e.map(r),n,t)))(r(l(p)))}return h.invert=function(p){return l(i((f||(f=s(n,e.map(r),fd)))(p)))},h.domain=function(p){return arguments.length?(e=Array.from(p,md),m()):e.slice()},h.range=function(p){return arguments.length?(n=Array.from(p),m()):n.slice()},h.rangeRound=function(p){return n=Array.from(p),t=wC,m()},h.clamp=function(p){return arguments.length?(l=p?!0:Kn,m()):l!==Kn},h.interpolate=function(p){return arguments.length?(t=p,m()):t},h.unknown=function(p){return arguments.length?(o=p,h):o},function(p,g){return r=p,i=g,m()}}function xC(){return Sf()(Kn,Kn)}function O5(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function hd(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),r=e.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+e.slice(t+1)]}function po(e){return e=hd(Math.abs(e)),e?e[1]:NaN}function k5(e,n){return function(t,r){for(var i=t.length,o=[],l=0,s=e[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),o.push(t.substring(i-=s,i+s)),!((u+=s+1)>r));)s=e[l=(l+1)%e.length];return o.reverse().join(n)}}function M5(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var _5=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function bl(e){if(!(n=_5.exec(e)))throw new Error("invalid format: "+e);var n;return new AC({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}bl.prototype=AC.prototype;function AC(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}AC.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function N5(e){e:for(var n=e.length,t=1,r=-1,i;t<n;++t)switch(e[t]){case".":r=i=t;break;case"0":r===0&&(r=t),i=t;break;default:if(!+e[t])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var vd;function L5(e,n){var t=hd(e,n);if(!t)return vd=void 0,e.toPrecision(n);var r=t[0],i=t[1],o=i-(vd=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,l=r.length;return o===l?r:o>l?r+new Array(o-l+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+hd(e,Math.max(0,n+o-1))[0]}function _T(e,n){var t=hd(e,n);if(!t)return e+"";var r=t[0],i=t[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const NT={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:O5,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>_T(e*100,n),r:_T,s:L5,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function LT(e){return e}var RT=Array.prototype.map,jT=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function R5(e){var n=e.grouping===void 0||e.thousands===void 0?LT:k5(RT.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?LT:M5(RT.call(e.numerals,String)),l=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",u=e.nan===void 0?"NaN":e.nan+"";function f(h,p){h=bl(h);var g=h.fill,b=h.align,y=h.sign,E=h.symbol,w=h.zero,x=h.width,U=h.comma,I=h.precision,A=h.trim,P=h.type;P==="n"?(U=!0,P="g"):NT[P]||(I===void 0&&(I=12),A=!0,P="g"),(w||g==="0"&&b==="=")&&(w=!0,g="0",b="=");var T=(p&&p.prefix!==void 0?p.prefix:"")+(E==="$"?t:E==="#"&&/[boxX]/.test(P)?"0"+P.toLowerCase():""),M=(E==="$"?r:/[%p]/.test(P)?l:"")+(p&&p.suffix!==void 0?p.suffix:""),N=NT[P],$=/[defgprs%]/.test(P);I=I===void 0?6:/[gprs]/.test(P)?Math.max(1,Math.min(21,I)):Math.max(0,Math.min(20,I));function z(j){var H=T,V=M,K,W,X;if(P==="c")V=N(j)+V,j="";else{j=+j;var R=j<0||1/j<0;if(j=isNaN(j)?u:N(Math.abs(j),I),A&&(j=N5(j)),R&&+j==0&&y!=="+"&&(R=!1),H=(R?y==="("?y:s:y==="-"||y==="("?"":y)+H,V=(P==="s"&&!isNaN(j)&&vd!==void 0?jT[8+vd/3]:"")+V+(R&&y==="("?")":""),$){for(K=-1,W=j.length;++K<W;)if(X=j.charCodeAt(K),48>X||X>57){V=(X===46?i+j.slice(K+1):j.slice(K))+V,j=j.slice(0,K);break}}}U&&!w&&(j=n(j,1/0));var Z=H.length+j.length+V.length,Q=Z<x?new Array(x-Z+1).join(g):"";switch(U&&w&&(j=n(Q+j,Q.length?x-V.length:1/0),Q=""),b){case"<":j=H+j+V+Q;break;case"=":j=H+Q+j+V;break;case"^":j=Q.slice(0,Z=Q.length>>1)+H+j+V+Q.slice(Z);break;default:j=Q+H+j+V;break}return o(j)}return z.toString=function(){return h+""},z}function m(h,p){var g=Math.max(-8,Math.min(8,Math.floor(po(p)/3)))*3,b=Math.pow(10,-g),y=f((h=bl(h),h.type="f",h),{suffix:jT[8+g/3]});return function(E){return y(b*E)}}return{format:f,formatPrefix:m}}var Iu,UC,BM;j5({thousands:",",grouping:[3],currency:["$",""]});function j5(e){return Iu=R5(e),UC=Iu.format,BM=Iu.formatPrefix,Iu}function D5(e){return Math.max(0,-po(Math.abs(e)))}function B5(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(po(n)/3)))*3-po(Math.abs(e)))}function z5(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,po(n)-po(e))+1}function zM(e,n,t,r){var i=L1(e,n,t),o;switch(r=bl(r??",f"),r.type){case"s":{var l=Math.max(Math.abs(e),Math.abs(n));return r.precision==null&&!isNaN(o=B5(i,l))&&(r.precision=o),BM(r,l)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=z5(i,Math.max(Math.abs(e),Math.abs(n))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=D5(i))&&(r.precision=o-(r.type==="%")*2);break}}return UC(r)}function Ui(e){var n=e.domain;return e.ticks=function(t){var r=n();return _1(r[0],r[r.length-1],t??10)},e.tickFormat=function(t,r){var i=n();return zM(i[0],i[i.length-1],t??10,r)},e.nice=function(t){t==null&&(t=10);var r=n(),i=0,o=r.length-1,l=r[i],s=r[o],u,f,m=10;for(s<l&&(f=l,l=s,s=f,f=i,i=o,o=f);m-- >0;){if(f=N1(l,s,t),f===u)return r[i]=l,r[o]=s,n(r);if(f>0)l=Math.floor(l/f)*f,s=Math.ceil(s/f)*f;else if(f<0)l=Math.ceil(l*f)/f,s=Math.floor(s*f)/f;else break;u=f}return e},e}function pd(){var e=xC();return e.copy=function(){return ns(e,pd())},Mt.apply(e,arguments),Ui(e)}function FM(e){var n;function t(r){return r==null||isNaN(r=+r)?n:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(e=Array.from(r,md),t):e.slice()},t.unknown=function(r){return arguments.length?(n=r,t):n},t.copy=function(){return FM(e).unknown(n)},e=arguments.length?Array.from(e,md):[0,1],Ui(t)}function $M(e,n){e=e.slice();var t=0,r=e.length-1,i=e[t],o=e[r],l;return o<i&&(l=t,t=r,r=l,l=i,i=o,o=l),e[t]=n.floor(i),e[r]=n.ceil(o),e}function DT(e){return Math.log(e)}function BT(e){return Math.exp(e)}function F5(e){return-Math.log(-e)}function $5(e){return-Math.exp(-e)}function G5(e){return isFinite(e)?+("1e"+e):e<0?0:e}function H5(e){return e===10?G5:e===Math.E?Math.exp:n=>Math.pow(e,n)}function W5(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),n=>Math.log(n)/e)}function zT(e){return(n,t)=>-e(-n,t)}function TC(e){const n=e(DT,BT),t=n.domain;let r=10,i,o;function l(){return i=W5(r),o=H5(r),t()[0]<0?(i=zT(i),o=zT(o),e(F5,$5)):e(DT,BT),n}return n.base=function(s){return arguments.length?(r=+s,l()):r},n.domain=function(s){return arguments.length?(t(s),l()):t()},n.ticks=s=>{const u=t();let f=u[0],m=u[u.length-1];const h=m<f;h&&([f,m]=[m,f]);let p=i(f),g=i(m),b,y;const E=s==null?10:+s;let w=[];if(!(r%1)&&g-p<E){if(p=Math.floor(p),g=Math.ceil(g),f>0){for(;p<=g;++p)for(b=1;b<r;++b)if(y=p<0?b/o(-p):b*o(p),!(y<f)){if(y>m)break;w.push(y)}}else for(;p<=g;++p)for(b=r-1;b>=1;--b)if(y=p>0?b/o(-p):b*o(p),!(y<f)){if(y>m)break;w.push(y)}w.length*2<E&&(w=_1(f,m,E))}else w=_1(p,g,Math.min(g-p,E)).map(o);return h?w.reverse():w},n.tickFormat=(s,u)=>{if(s==null&&(s=10),u==null&&(u=r===10?"s":","),typeof u!="function"&&(!(r%1)&&(u=bl(u)).precision==null&&(u.trim=!0),u=UC(u)),s===1/0)return u;const f=Math.max(1,r*s/n.ticks().length);return m=>{let h=m/o(Math.round(i(m)));return h*r<r-.5&&(h*=r),h<=f?u(m):""}},n.nice=()=>t($M(t(),{floor:s=>o(Math.floor(i(s))),ceil:s=>o(Math.ceil(i(s)))})),n}function GM(){const e=TC(Sf()).domain([1,10]);return e.copy=()=>ns(e,GM()).base(e.base()),Mt.apply(e,arguments),e}function FT(e){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/e))}}function $T(e){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*e}}function PC(e){var n=1,t=e(FT(n),$T(n));return t.constant=function(r){return arguments.length?e(FT(n=+r),$T(n)):n},Ui(t)}function HM(){var e=PC(Sf());return e.copy=function(){return ns(e,HM()).constant(e.constant())},Mt.apply(e,arguments)}function GT(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function V5(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function K5(e){return e<0?-e*e:e*e}function IC(e){var n=e(Kn,Kn),t=1;function r(){return t===1?e(Kn,Kn):t===.5?e(V5,K5):e(GT(t),GT(1/t))}return n.exponent=function(i){return arguments.length?(t=+i,r()):t},Ui(n)}function OC(){var e=IC(Sf());return e.copy=function(){return ns(e,OC()).exponent(e.exponent())},Mt.apply(e,arguments),e}function q5(){return OC.apply(null,arguments).exponent(.5)}function HT(e){return Math.sign(e)*e*e}function Y5(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function WM(){var e=xC(),n=[0,1],t=!1,r;function i(o){var l=Y5(e(o));return isNaN(l)?r:t?Math.round(l):l}return i.invert=function(o){return e.invert(HT(o))},i.domain=function(o){return arguments.length?(e.domain(o),i):e.domain()},i.range=function(o){return arguments.length?(e.range((n=Array.from(o,md)).map(HT)),i):n.slice()},i.rangeRound=function(o){return i.range(o).round(!0)},i.round=function(o){return arguments.length?(t=!!o,i):t},i.clamp=function(o){return arguments.length?(e.clamp(o),i):e.clamp()},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return WM(e.domain(),n).round(t).clamp(e.clamp()).unknown(r)},Mt.apply(i,arguments),Ui(i)}function VM(){var e=[],n=[],t=[],r;function i(){var l=0,s=Math.max(1,n.length);for(t=new Array(s-1);++l<s;)t[l-1]=e5(e,l/s);return o}function o(l){return l==null||isNaN(l=+l)?r:n[Ql(t,l)]}return o.invertExtent=function(l){var s=n.indexOf(l);return s<0?[NaN,NaN]:[s>0?t[s-1]:e[0],s<t.length?t[s]:e[e.length-1]]},o.domain=function(l){if(!arguments.length)return e.slice();e=[];for(let s of l)s!=null&&!isNaN(s=+s)&&e.push(s);return e.sort(gi),i()},o.range=function(l){return arguments.length?(n=Array.from(l),i()):n.slice()},o.unknown=function(l){return arguments.length?(r=l,o):r},o.quantiles=function(){return t.slice()},o.copy=function(){return VM().domain(e).range(n).unknown(r)},Mt.apply(o,arguments)}function KM(){var e=0,n=1,t=1,r=[.5],i=[0,1],o;function l(u){return u!=null&&u<=u?i[Ql(r,u,0,t)]:o}function s(){var u=-1;for(r=new Array(t);++u<t;)r[u]=((u+1)*n-(u-t)*e)/(t+1);return l}return l.domain=function(u){return arguments.length?([e,n]=u,e=+e,n=+n,s()):[e,n]},l.range=function(u){return arguments.length?(t=(i=Array.from(u)).length-1,s()):i.slice()},l.invertExtent=function(u){var f=i.indexOf(u);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=t?[r[t-1],n]:[r[f-1],r[f]]},l.unknown=function(u){return arguments.length&&(o=u),l},l.thresholds=function(){return r.slice()},l.copy=function(){return KM().domain([e,n]).range(i).unknown(o)},Mt.apply(Ui(l),arguments)}function qM(){var e=[.5],n=[0,1],t,r=1;function i(o){return o!=null&&o<=o?n[Ql(e,o,0,r)]:t}return i.domain=function(o){return arguments.length?(e=Array.from(o),r=Math.min(e.length,n.length-1),i):e.slice()},i.range=function(o){return arguments.length?(n=Array.from(o),r=Math.min(e.length,n.length-1),i):n.slice()},i.invertExtent=function(o){var l=n.indexOf(o);return[e[l-1],e[l]]},i.unknown=function(o){return arguments.length?(t=o,i):t},i.copy=function(){return qM().domain(e).range(n).unknown(t)},Mt.apply(i,arguments)}const og=new Date,cg=new Date;function xn(e,n,t,r){function i(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return i.floor=o=>(e(o=new Date(+o)),o),i.ceil=o=>(e(o=new Date(o-1)),n(o,1),e(o),o),i.round=o=>{const l=i(o),s=i.ceil(o);return o-l<s-o?l:s},i.offset=(o,l)=>(n(o=new Date(+o),l==null?1:Math.floor(l)),o),i.range=(o,l,s)=>{const u=[];if(o=i.ceil(o),s=s==null?1:Math.floor(s),!(o<l)||!(s>0))return u;let f;do u.push(f=new Date(+o)),n(o,s),e(o);while(f<o&&o<l);return u},i.filter=o=>xn(l=>{if(l>=l)for(;e(l),!o(l);)l.setTime(l-1)},(l,s)=>{if(l>=l)if(s<0)for(;++s<=0;)for(;n(l,-1),!o(l););else for(;--s>=0;)for(;n(l,1),!o(l););}),t&&(i.count=(o,l)=>(og.setTime(+o),cg.setTime(+l),e(og),e(cg),Math.floor(t(og,cg))),i.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?i.filter(r?l=>r(l)%o===0:l=>i.count(0,l)%o===0):i)),i}const yd=xn(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);yd.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?xn(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):yd);yd.range;const Or=1e3,Pt=Or*60,kr=Pt*60,Dr=kr*24,kC=Dr*7,WT=Dr*30,lg=Dr*365,Xi=xn(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*Or)},(e,n)=>(n-e)/Or,e=>e.getUTCSeconds());Xi.range;const MC=xn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Or)},(e,n)=>{e.setTime(+e+n*Pt)},(e,n)=>(n-e)/Pt,e=>e.getMinutes());MC.range;const _C=xn(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Pt)},(e,n)=>(n-e)/Pt,e=>e.getUTCMinutes());_C.range;const NC=xn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Or-e.getMinutes()*Pt)},(e,n)=>{e.setTime(+e+n*kr)},(e,n)=>(n-e)/kr,e=>e.getHours());NC.range;const LC=xn(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*kr)},(e,n)=>(n-e)/kr,e=>e.getUTCHours());LC.range;const ts=xn(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Pt)/Dr,e=>e.getDate()-1);ts.range;const wf=xn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Dr,e=>e.getUTCDate()-1);wf.range;const YM=xn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Dr,e=>Math.floor(e/Dr));YM.range;function va(e){return xn(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Pt)/kC)}const xf=va(0),gd=va(1),X5=va(2),J5=va(3),yo=va(4),Z5=va(5),Q5=va(6);xf.range;gd.range;X5.range;J5.range;yo.range;Z5.range;Q5.range;function pa(e){return xn(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/kC)}const Af=pa(0),Ed=pa(1),eV=pa(2),nV=pa(3),go=pa(4),tV=pa(5),rV=pa(6);Af.range;Ed.range;eV.range;nV.range;go.range;tV.range;rV.range;const RC=xn(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());RC.range;const jC=xn(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());jC.range;const Br=xn(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Br.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:xn(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Br.range;const zr=xn(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());zr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:xn(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});zr.range;function XM(e,n,t,r,i,o){const l=[[Xi,1,Or],[Xi,5,5*Or],[Xi,15,15*Or],[Xi,30,30*Or],[o,1,Pt],[o,5,5*Pt],[o,15,15*Pt],[o,30,30*Pt],[i,1,kr],[i,3,3*kr],[i,6,6*kr],[i,12,12*kr],[r,1,Dr],[r,2,2*Dr],[t,1,kC],[n,1,WT],[n,3,3*WT],[e,1,lg]];function s(f,m,h){const p=m<f;p&&([f,m]=[m,f]);const g=h&&typeof h.range=="function"?h:u(f,m,h),b=g?g.range(f,+m+1):[];return p?b.reverse():b}function u(f,m,h){const p=Math.abs(m-f)/h,g=EC(([,,E])=>E).right(l,p);if(g===l.length)return e.every(L1(f/lg,m/lg,h));if(g===0)return yd.every(Math.max(L1(f,m,h),1));const[b,y]=l[p/l[g-1][2]<l[g][2]/p?g-1:g];return b.every(y)}return[s,u]}const[iV,aV]=XM(zr,jC,Af,YM,LC,_C),[oV,cV]=XM(Br,RC,xf,ts,NC,MC);function sg(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function ug(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Gc(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function lV(e){var n=e.dateTime,t=e.date,r=e.time,i=e.periods,o=e.days,l=e.shortDays,s=e.months,u=e.shortMonths,f=Hc(i),m=Wc(i),h=Hc(o),p=Wc(o),g=Hc(l),b=Wc(l),y=Hc(s),E=Wc(s),w=Hc(u),x=Wc(u),U={a:X,A:R,b:Z,B:Q,c:null,d:JT,e:JT,f:kV,g:FV,G:GV,H:PV,I:IV,j:OV,L:JM,m:MV,M:_V,p:B,q,Q:eP,s:nP,S:NV,u:LV,U:RV,V:jV,w:DV,W:BV,x:null,X:null,y:zV,Y:$V,Z:HV,"%":QT},I={a:ie,A:de,b:ge,B:xe,c:null,d:ZT,e:ZT,f:qV,g:iK,G:oK,H:WV,I:VV,j:KV,L:QM,m:YV,M:XV,p:ce,q:he,Q:eP,s:nP,S:JV,u:ZV,U:QV,V:eK,w:nK,W:tK,x:null,X:null,y:rK,Y:aK,Z:cK,"%":QT},A={a:$,A:z,b:j,B:H,c:V,d:YT,e:YT,f:xV,g:qT,G:KT,H:XT,I:XT,j:CV,L:wV,m:EV,M:bV,p:N,q:gV,Q:UV,s:TV,S:SV,u:mV,U:hV,V:vV,w:fV,W:pV,x:K,X:W,y:qT,Y:KT,Z:yV,"%":AV};U.x=P(t,U),U.X=P(r,U),U.c=P(n,U),I.x=P(t,I),I.X=P(r,I),I.c=P(n,I);function P(re,ue){return function(me){var ne=[],_e=-1,Pe=0,Ve=re.length,Ke,rn,at;for(me instanceof Date||(me=new Date(+me));++_e<Ve;)re.charCodeAt(_e)===37&&(ne.push(re.slice(Pe,_e)),(rn=VT[Ke=re.charAt(++_e)])!=null?Ke=re.charAt(++_e):rn=Ke==="e"?" ":"0",(at=ue[Ke])&&(Ke=at(me,rn)),ne.push(Ke),Pe=_e+1);return ne.push(re.slice(Pe,_e)),ne.join("")}}function T(re,ue){return function(me){var ne=Gc(1900,void 0,1),_e=M(ne,re,me+="",0),Pe,Ve;if(_e!=me.length)return null;if("Q"in ne)return new Date(ne.Q);if("s"in ne)return new Date(ne.s*1e3+("L"in ne?ne.L:0));if(ue&&!("Z"in ne)&&(ne.Z=0),"p"in ne&&(ne.H=ne.H%12+ne.p*12),ne.m===void 0&&(ne.m="q"in ne?ne.q:0),"V"in ne){if(ne.V<1||ne.V>53)return null;"w"in ne||(ne.w=1),"Z"in ne?(Pe=ug(Gc(ne.y,0,1)),Ve=Pe.getUTCDay(),Pe=Ve>4||Ve===0?Ed.ceil(Pe):Ed(Pe),Pe=wf.offset(Pe,(ne.V-1)*7),ne.y=Pe.getUTCFullYear(),ne.m=Pe.getUTCMonth(),ne.d=Pe.getUTCDate()+(ne.w+6)%7):(Pe=sg(Gc(ne.y,0,1)),Ve=Pe.getDay(),Pe=Ve>4||Ve===0?gd.ceil(Pe):gd(Pe),Pe=ts.offset(Pe,(ne.V-1)*7),ne.y=Pe.getFullYear(),ne.m=Pe.getMonth(),ne.d=Pe.getDate()+(ne.w+6)%7)}else("W"in ne||"U"in ne)&&("w"in ne||(ne.w="u"in ne?ne.u%7:"W"in ne?1:0),Ve="Z"in ne?ug(Gc(ne.y,0,1)).getUTCDay():sg(Gc(ne.y,0,1)).getDay(),ne.m=0,ne.d="W"in ne?(ne.w+6)%7+ne.W*7-(Ve+5)%7:ne.w+ne.U*7-(Ve+6)%7);return"Z"in ne?(ne.H+=ne.Z/100|0,ne.M+=ne.Z%100,ug(ne)):sg(ne)}}function M(re,ue,me,ne){for(var _e=0,Pe=ue.length,Ve=me.length,Ke,rn;_e<Pe;){if(ne>=Ve)return-1;if(Ke=ue.charCodeAt(_e++),Ke===37){if(Ke=ue.charAt(_e++),rn=A[Ke in VT?ue.charAt(_e++):Ke],!rn||(ne=rn(re,me,ne))<0)return-1}else if(Ke!=me.charCodeAt(ne++))return-1}return ne}function N(re,ue,me){var ne=f.exec(ue.slice(me));return ne?(re.p=m.get(ne[0].toLowerCase()),me+ne[0].length):-1}function $(re,ue,me){var ne=g.exec(ue.slice(me));return ne?(re.w=b.get(ne[0].toLowerCase()),me+ne[0].length):-1}function z(re,ue,me){var ne=h.exec(ue.slice(me));return ne?(re.w=p.get(ne[0].toLowerCase()),me+ne[0].length):-1}function j(re,ue,me){var ne=w.exec(ue.slice(me));return ne?(re.m=x.get(ne[0].toLowerCase()),me+ne[0].length):-1}function H(re,ue,me){var ne=y.exec(ue.slice(me));return ne?(re.m=E.get(ne[0].toLowerCase()),me+ne[0].length):-1}function V(re,ue,me){return M(re,n,ue,me)}function K(re,ue,me){return M(re,t,ue,me)}function W(re,ue,me){return M(re,r,ue,me)}function X(re){return l[re.getDay()]}function R(re){return o[re.getDay()]}function Z(re){return u[re.getMonth()]}function Q(re){return s[re.getMonth()]}function B(re){return i[+(re.getHours()>=12)]}function q(re){return 1+~~(re.getMonth()/3)}function ie(re){return l[re.getUTCDay()]}function de(re){return o[re.getUTCDay()]}function ge(re){return u[re.getUTCMonth()]}function xe(re){return s[re.getUTCMonth()]}function ce(re){return i[+(re.getUTCHours()>=12)]}function he(re){return 1+~~(re.getUTCMonth()/3)}return{format:function(re){var ue=P(re+="",U);return ue.toString=function(){return re},ue},parse:function(re){var ue=T(re+="",!1);return ue.toString=function(){return re},ue},utcFormat:function(re){var ue=P(re+="",I);return ue.toString=function(){return re},ue},utcParse:function(re){var ue=T(re+="",!0);return ue.toString=function(){return re},ue}}}var VT={"-":"",_:" ",0:"0"},In=/^\s*\d+/,sV=/^%/,uV=/[\\^$*+?|[\]().{}]/g;function ze(e,n,t){var r=e<0?"-":"",i=(r?-e:e)+"",o=i.length;return r+(o<t?new Array(t-o+1).join(n)+i:i)}function dV(e){return e.replace(uV,"\\$&")}function Hc(e){return new RegExp("^(?:"+e.map(dV).join("|")+")","i")}function Wc(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function fV(e,n,t){var r=In.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function mV(e,n,t){var r=In.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function hV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function vV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function pV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function KT(e,n,t){var r=In.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function qT(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function yV(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function gV(e,n,t){var r=In.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function EV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function YT(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function CV(e,n,t){var r=In.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function XT(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function bV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function SV(e,n,t){var r=In.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function wV(e,n,t){var r=In.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function xV(e,n,t){var r=In.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function AV(e,n,t){var r=sV.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function UV(e,n,t){var r=In.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function TV(e,n,t){var r=In.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function JT(e,n){return ze(e.getDate(),n,2)}function PV(e,n){return ze(e.getHours(),n,2)}function IV(e,n){return ze(e.getHours()%12||12,n,2)}function OV(e,n){return ze(1+ts.count(Br(e),e),n,3)}function JM(e,n){return ze(e.getMilliseconds(),n,3)}function kV(e,n){return JM(e,n)+"000"}function MV(e,n){return ze(e.getMonth()+1,n,2)}function _V(e,n){return ze(e.getMinutes(),n,2)}function NV(e,n){return ze(e.getSeconds(),n,2)}function LV(e){var n=e.getDay();return n===0?7:n}function RV(e,n){return ze(xf.count(Br(e)-1,e),n,2)}function ZM(e){var n=e.getDay();return n>=4||n===0?yo(e):yo.ceil(e)}function jV(e,n){return e=ZM(e),ze(yo.count(Br(e),e)+(Br(e).getDay()===4),n,2)}function DV(e){return e.getDay()}function BV(e,n){return ze(gd.count(Br(e)-1,e),n,2)}function zV(e,n){return ze(e.getFullYear()%100,n,2)}function FV(e,n){return e=ZM(e),ze(e.getFullYear()%100,n,2)}function $V(e,n){return ze(e.getFullYear()%1e4,n,4)}function GV(e,n){var t=e.getDay();return e=t>=4||t===0?yo(e):yo.ceil(e),ze(e.getFullYear()%1e4,n,4)}function HV(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ze(n/60|0,"0",2)+ze(n%60,"0",2)}function ZT(e,n){return ze(e.getUTCDate(),n,2)}function WV(e,n){return ze(e.getUTCHours(),n,2)}function VV(e,n){return ze(e.getUTCHours()%12||12,n,2)}function KV(e,n){return ze(1+wf.count(zr(e),e),n,3)}function QM(e,n){return ze(e.getUTCMilliseconds(),n,3)}function qV(e,n){return QM(e,n)+"000"}function YV(e,n){return ze(e.getUTCMonth()+1,n,2)}function XV(e,n){return ze(e.getUTCMinutes(),n,2)}function JV(e,n){return ze(e.getUTCSeconds(),n,2)}function ZV(e){var n=e.getUTCDay();return n===0?7:n}function QV(e,n){return ze(Af.count(zr(e)-1,e),n,2)}function e_(e){var n=e.getUTCDay();return n>=4||n===0?go(e):go.ceil(e)}function eK(e,n){return e=e_(e),ze(go.count(zr(e),e)+(zr(e).getUTCDay()===4),n,2)}function nK(e){return e.getUTCDay()}function tK(e,n){return ze(Ed.count(zr(e)-1,e),n,2)}function rK(e,n){return ze(e.getUTCFullYear()%100,n,2)}function iK(e,n){return e=e_(e),ze(e.getUTCFullYear()%100,n,2)}function aK(e,n){return ze(e.getUTCFullYear()%1e4,n,4)}function oK(e,n){var t=e.getUTCDay();return e=t>=4||t===0?go(e):go.ceil(e),ze(e.getUTCFullYear()%1e4,n,4)}function cK(){return"+0000"}function QT(){return"%"}function eP(e){return+e}function nP(e){return Math.floor(+e/1e3)}var Ya,n_,t_;lK({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function lK(e){return Ya=lV(e),n_=Ya.format,Ya.parse,t_=Ya.utcFormat,Ya.utcParse,Ya}function sK(e){return new Date(e)}function uK(e){return e instanceof Date?+e:+new Date(+e)}function DC(e,n,t,r,i,o,l,s,u,f){var m=xC(),h=m.invert,p=m.domain,g=f(".%L"),b=f(":%S"),y=f("%I:%M"),E=f("%I %p"),w=f("%a %d"),x=f("%b %d"),U=f("%B"),I=f("%Y");function A(P){return(u(P)<P?g:s(P)<P?b:l(P)<P?y:o(P)<P?E:r(P)<P?i(P)<P?w:x:t(P)<P?U:I)(P)}return m.invert=function(P){return new Date(h(P))},m.domain=function(P){return arguments.length?p(Array.from(P,uK)):p().map(sK)},m.ticks=function(P){var T=p();return e(T[0],T[T.length-1],P??10)},m.tickFormat=function(P,T){return T==null?A:f(T)},m.nice=function(P){var T=p();return(!P||typeof P.range!="function")&&(P=n(T[0],T[T.length-1],P??10)),P?p($M(T,P)):m},m.copy=function(){return ns(m,DC(e,n,t,r,i,o,l,s,u,f))},m}function dK(){return Mt.apply(DC(oV,cV,Br,RC,xf,ts,NC,MC,Xi,n_).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function fK(){return Mt.apply(DC(iV,aV,zr,jC,Af,wf,LC,_C,Xi,t_).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Uf(){var e=0,n=1,t,r,i,o,l=Kn,s=!1,u;function f(h){return h==null||isNaN(h=+h)?u:l(i===0?.5:(h=(o(h)-t)*i,s?Math.max(0,Math.min(1,h)):h))}f.domain=function(h){return arguments.length?([e,n]=h,t=o(e=+e),r=o(n=+n),i=t===r?0:1/(r-t),f):[e,n]},f.clamp=function(h){return arguments.length?(s=!!h,f):s},f.interpolator=function(h){return arguments.length?(l=h,f):l};function m(h){return function(p){var g,b;return arguments.length?([g,b]=p,l=h(g,b),f):[l(0),l(1)]}}return f.range=m(qo),f.rangeRound=m(wC),f.unknown=function(h){return arguments.length?(u=h,f):u},function(h){return o=h,t=h(e),r=h(n),i=t===r?0:1/(r-t),f}}function Ti(e,n){return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function r_(){var e=Ui(Uf()(Kn));return e.copy=function(){return Ti(e,r_())},Hr.apply(e,arguments)}function i_(){var e=TC(Uf()).domain([1,10]);return e.copy=function(){return Ti(e,i_()).base(e.base())},Hr.apply(e,arguments)}function a_(){var e=PC(Uf());return e.copy=function(){return Ti(e,a_()).constant(e.constant())},Hr.apply(e,arguments)}function BC(){var e=IC(Uf());return e.copy=function(){return Ti(e,BC()).exponent(e.exponent())},Hr.apply(e,arguments)}function mK(){return BC.apply(null,arguments).exponent(.5)}function o_(){var e=[],n=Kn;function t(r){if(r!=null&&!isNaN(r=+r))return n((Ql(e,r,1)-1)/(e.length-1))}return t.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let i of r)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(gi),t},t.interpolator=function(r){return arguments.length?(n=r,t):n},t.range=function(){return e.map((r,i)=>n(i/(e.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(i,o)=>QW(e,o/r))},t.copy=function(){return o_(n).domain(e)},Hr.apply(t,arguments)}function Tf(){var e=0,n=.5,t=1,r=1,i,o,l,s,u,f=Kn,m,h=!1,p;function g(y){return isNaN(y=+y)?p:(y=.5+((y=+m(y))-o)*(r*y<r*o?s:u),f(h?Math.max(0,Math.min(1,y)):y))}g.domain=function(y){return arguments.length?([e,n,t]=y,i=m(e=+e),o=m(n=+n),l=m(t=+t),s=i===o?0:.5/(o-i),u=o===l?0:.5/(l-o),r=o<i?-1:1,g):[e,n,t]},g.clamp=function(y){return arguments.length?(h=!!y,g):h},g.interpolator=function(y){return arguments.length?(f=y,g):f};function b(y){return function(E){var w,x,U;return arguments.length?([w,x,U]=E,f=A5(y,[w,x,U]),g):[f(0),f(.5),f(1)]}}return g.range=b(qo),g.rangeRound=b(wC),g.unknown=function(y){return arguments.length?(p=y,g):p},function(y){return m=y,i=y(e),o=y(n),l=y(t),s=i===o?0:.5/(o-i),u=o===l?0:.5/(l-o),r=o<i?-1:1,g}}function c_(){var e=Ui(Tf()(Kn));return e.copy=function(){return Ti(e,c_())},Hr.apply(e,arguments)}function l_(){var e=TC(Tf()).domain([.1,1,10]);return e.copy=function(){return Ti(e,l_()).base(e.base())},Hr.apply(e,arguments)}function s_(){var e=PC(Tf());return e.copy=function(){return Ti(e,s_()).constant(e.constant())},Hr.apply(e,arguments)}function zC(){var e=IC(Tf());return e.copy=function(){return Ti(e,zC()).exponent(e.exponent())},Hr.apply(e,arguments)}function hK(){return zC.apply(null,arguments).exponent(.5)}const tP=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:yl,scaleDiverging:c_,scaleDivergingLog:l_,scaleDivergingPow:zC,scaleDivergingSqrt:hK,scaleDivergingSymlog:s_,scaleIdentity:FM,scaleImplicit:R1,scaleLinear:pd,scaleLog:GM,scaleOrdinal:CC,scalePoint:nl,scalePow:OC,scaleQuantile:VM,scaleQuantize:KM,scaleRadial:WM,scaleSequential:r_,scaleSequentialLog:i_,scaleSequentialPow:BC,scaleSequentialQuantile:o_,scaleSequentialSqrt:mK,scaleSequentialSymlog:a_,scaleSqrt:q5,scaleSymlog:HM,scaleThreshold:qM,scaleTime:dK,scaleUtc:fK,tickFormat:zM},Symbol.toStringTag,{value:"Module"}));var dg,rP;function u_(){if(rP)return dg;rP=1;var e=Ho();function n(t,r,i){for(var o=-1,l=t.length;++o<l;){var s=t[o],u=r(s);if(u!=null&&(f===void 0?u===u&&!e(u):i(u,f)))var f=u,m=s}return m}return dg=n,dg}var fg,iP;function vK(){if(iP)return fg;iP=1;function e(n,t){return n>t}return fg=e,fg}var mg,aP;function pK(){if(aP)return mg;aP=1;var e=u_(),n=vK(),t=Ko();function r(i){return i&&i.length?e(i,t,n):void 0}return mg=r,mg}var yK=pK();const vi=Ye(yK);var hg,oP;function gK(){if(oP)return hg;oP=1;function e(n,t){return n<t}return hg=e,hg}var vg,cP;function EK(){if(cP)return vg;cP=1;var e=u_(),n=gK(),t=Ko();function r(i){return i&&i.length?e(i,t,n):void 0}return vg=r,vg}var CK=EK();const Pf=Ye(CK);var pg,lP;function bK(){if(lP)return pg;lP=1;var e=rC(),n=xi(),t=CM(),r=it();function i(o,l){var s=r(o)?e:t;return s(o,n(l,3))}return pg=i,pg}var yg,sP;function SK(){if(sP)return yg;sP=1;var e=gM(),n=bK();function t(r,i){return e(n(r,i),1)}return yg=t,yg}var wK=SK();const xK=Ye(wK);var gg,uP;function AK(){if(uP)return gg;uP=1;var e=vC();function n(t,r){return e(t,r)}return gg=n,gg}var UK=AK();const sa=Ye(UK);var Yo=1e9,TK={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},$C,on=!0,Ot="[DecimalError] ",na=Ot+"Invalid argument: ",FC=Ot+"Exponent out of range: ",Xo=Math.floor,Vi=Math.pow,PK=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,vt,Pn=1e7,nn=7,d_=9007199254740991,Cd=Xo(d_/nn),ye={};ye.absoluteValue=ye.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};ye.comparedTo=ye.cmp=function(e){var n,t,r,i,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(r=o.d.length,i=e.d.length,n=0,t=r<i?r:i;n<t;++n)if(o.d[n]!==e.d[n])return o.d[n]>e.d[n]^o.s<0?1:-1;return r===i?0:r>i^o.s<0?1:-1};ye.decimalPlaces=ye.dp=function(){var e=this,n=e.d.length-1,t=(n-e.e)*nn;if(n=e.d[n],n)for(;n%10==0;n/=10)t--;return t<0?0:t};ye.dividedBy=ye.div=function(e){return Lr(this,new this.constructor(e))};ye.dividedToIntegerBy=ye.idiv=function(e){var n=this,t=n.constructor;return Xe(Lr(n,new t(e),0,1),t.precision)};ye.equals=ye.eq=function(e){return!this.cmp(e)};ye.exponent=function(){return yn(this)};ye.greaterThan=ye.gt=function(e){return this.cmp(e)>0};ye.greaterThanOrEqualTo=ye.gte=function(e){return this.cmp(e)>=0};ye.isInteger=ye.isint=function(){return this.e>this.d.length-2};ye.isNegative=ye.isneg=function(){return this.s<0};ye.isPositive=ye.ispos=function(){return this.s>0};ye.isZero=function(){return this.s===0};ye.lessThan=ye.lt=function(e){return this.cmp(e)<0};ye.lessThanOrEqualTo=ye.lte=function(e){return this.cmp(e)<1};ye.logarithm=ye.log=function(e){var n,t=this,r=t.constructor,i=r.precision,o=i+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(vt))throw Error(Ot+"NaN");if(t.s<1)throw Error(Ot+(t.s?"NaN":"-Infinity"));return t.eq(vt)?new r(0):(on=!1,n=Lr(Sl(t,o),Sl(e,o),o),on=!0,Xe(n,i))};ye.minus=ye.sub=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?h_(n,e):f_(n,(e.s=-e.s,e))};ye.modulo=ye.mod=function(e){var n,t=this,r=t.constructor,i=r.precision;if(e=new r(e),!e.s)throw Error(Ot+"NaN");return t.s?(on=!1,n=Lr(t,e,0,1).times(e),on=!0,t.minus(n)):Xe(new r(t),i)};ye.naturalExponential=ye.exp=function(){return m_(this)};ye.naturalLogarithm=ye.ln=function(){return Sl(this)};ye.negated=ye.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};ye.plus=ye.add=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?f_(n,e):h_(n,(e.s=-e.s,e))};ye.precision=ye.sd=function(e){var n,t,r,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(na+e);if(n=yn(i)+1,r=i.d.length-1,t=r*nn+1,r=i.d[r],r){for(;r%10==0;r/=10)t--;for(r=i.d[0];r>=10;r/=10)t++}return e&&n>t?n:t};ye.squareRoot=ye.sqrt=function(){var e,n,t,r,i,o,l,s=this,u=s.constructor;if(s.s<1){if(!s.s)return new u(0);throw Error(Ot+"NaN")}for(e=yn(s),on=!1,i=Math.sqrt(+s),i==0||i==1/0?(n=lr(s.d),(n.length+e)%2==0&&(n+="0"),i=Math.sqrt(n),e=Xo((e+1)/2)-(e<0||e%2),i==1/0?n="5e"+e:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new u(n)):r=new u(i.toString()),t=u.precision,i=l=t+3;;)if(o=r,r=o.plus(Lr(s,o,l+2)).times(.5),lr(o.d).slice(0,l)===(n=lr(r.d)).slice(0,l)){if(n=n.slice(l-3,l+1),i==l&&n=="4999"){if(Xe(o,t+1,0),o.times(o).eq(s)){r=o;break}}else if(n!="9999")break;l+=4}return on=!0,Xe(r,t)};ye.times=ye.mul=function(e){var n,t,r,i,o,l,s,u,f,m=this,h=m.constructor,p=m.d,g=(e=new h(e)).d;if(!m.s||!e.s)return new h(0);for(e.s*=m.s,t=m.e+e.e,u=p.length,f=g.length,u<f&&(o=p,p=g,g=o,l=u,u=f,f=l),o=[],l=u+f,r=l;r--;)o.push(0);for(r=f;--r>=0;){for(n=0,i=u+r;i>r;)s=o[i]+g[r]*p[i-r-1]+n,o[i--]=s%Pn|0,n=s/Pn|0;o[i]=(o[i]+n)%Pn|0}for(;!o[--l];)o.pop();return n?++t:o.shift(),e.d=o,e.e=t,on?Xe(e,h.precision):e};ye.toDecimalPlaces=ye.todp=function(e,n){var t=this,r=t.constructor;return t=new r(t),e===void 0?t:(pr(e,0,Yo),n===void 0?n=r.rounding:pr(n,0,8),Xe(t,e+yn(t)+1,n))};ye.toExponential=function(e,n){var t,r=this,i=r.constructor;return e===void 0?t=ua(r,!0):(pr(e,0,Yo),n===void 0?n=i.rounding:pr(n,0,8),r=Xe(new i(r),e+1,n),t=ua(r,!0,e+1)),t};ye.toFixed=function(e,n){var t,r,i=this,o=i.constructor;return e===void 0?ua(i):(pr(e,0,Yo),n===void 0?n=o.rounding:pr(n,0,8),r=Xe(new o(i),e+yn(i)+1,n),t=ua(r.abs(),!1,e+yn(r)+1),i.isneg()&&!i.isZero()?"-"+t:t)};ye.toInteger=ye.toint=function(){var e=this,n=e.constructor;return Xe(new n(e),yn(e)+1,n.rounding)};ye.toNumber=function(){return+this};ye.toPower=ye.pow=function(e){var n,t,r,i,o,l,s=this,u=s.constructor,f=12,m=+(e=new u(e));if(!e.s)return new u(vt);if(s=new u(s),!s.s){if(e.s<1)throw Error(Ot+"Infinity");return s}if(s.eq(vt))return s;if(r=u.precision,e.eq(vt))return Xe(s,r);if(n=e.e,t=e.d.length-1,l=n>=t,o=s.s,l){if((t=m<0?-m:m)<=d_){for(i=new u(vt),n=Math.ceil(r/nn+4),on=!1;t%2&&(i=i.times(s),fP(i.d,n)),t=Xo(t/2),t!==0;)s=s.times(s),fP(s.d,n);return on=!0,e.s<0?new u(vt).div(i):Xe(i,r)}}else if(o<0)throw Error(Ot+"NaN");return o=o<0&&e.d[Math.max(n,t)]&1?-1:1,s.s=1,on=!1,i=e.times(Sl(s,r+f)),on=!0,i=m_(i),i.s=o,i};ye.toPrecision=function(e,n){var t,r,i=this,o=i.constructor;return e===void 0?(t=yn(i),r=ua(i,t<=o.toExpNeg||t>=o.toExpPos)):(pr(e,1,Yo),n===void 0?n=o.rounding:pr(n,0,8),i=Xe(new o(i),e,n),t=yn(i),r=ua(i,e<=t||t<=o.toExpNeg,e)),r};ye.toSignificantDigits=ye.tosd=function(e,n){var t=this,r=t.constructor;return e===void 0?(e=r.precision,n=r.rounding):(pr(e,1,Yo),n===void 0?n=r.rounding:pr(n,0,8)),Xe(new r(t),e,n)};ye.toString=ye.valueOf=ye.val=ye.toJSON=ye[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,n=yn(e),t=e.constructor;return ua(e,n<=t.toExpNeg||n>=t.toExpPos)};function f_(e,n){var t,r,i,o,l,s,u,f,m=e.constructor,h=m.precision;if(!e.s||!n.s)return n.s||(n=new m(e)),on?Xe(n,h):n;if(u=e.d,f=n.d,l=e.e,i=n.e,u=u.slice(),o=l-i,o){for(o<0?(r=u,o=-o,s=f.length):(r=f,i=l,s=u.length),l=Math.ceil(h/nn),s=l>s?l+1:s+1,o>s&&(o=s,r.length=1),r.reverse();o--;)r.push(0);r.reverse()}for(s=u.length,o=f.length,s-o<0&&(o=s,r=f,f=u,u=r),t=0;o;)t=(u[--o]=u[o]+f[o]+t)/Pn|0,u[o]%=Pn;for(t&&(u.unshift(t),++i),s=u.length;u[--s]==0;)u.pop();return n.d=u,n.e=i,on?Xe(n,h):n}function pr(e,n,t){if(e!==~~e||e<n||e>t)throw Error(na+e)}function lr(e){var n,t,r,i=e.length-1,o="",l=e[0];if(i>0){for(o+=l,n=1;n<i;n++)r=e[n]+"",t=nn-r.length,t&&(o+=mi(t)),o+=r;l=e[n],r=l+"",t=nn-r.length,t&&(o+=mi(t))}else if(l===0)return"0";for(;l%10===0;)l/=10;return o+l}var Lr=(function(){function e(r,i){var o,l=0,s=r.length;for(r=r.slice();s--;)o=r[s]*i+l,r[s]=o%Pn|0,l=o/Pn|0;return l&&r.unshift(l),r}function n(r,i,o,l){var s,u;if(o!=l)u=o>l?1:-1;else for(s=u=0;s<o;s++)if(r[s]!=i[s]){u=r[s]>i[s]?1:-1;break}return u}function t(r,i,o){for(var l=0;o--;)r[o]-=l,l=r[o]<i[o]?1:0,r[o]=l*Pn+r[o]-i[o];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,o,l){var s,u,f,m,h,p,g,b,y,E,w,x,U,I,A,P,T,M,N=r.constructor,$=r.s==i.s?1:-1,z=r.d,j=i.d;if(!r.s)return new N(r);if(!i.s)throw Error(Ot+"Division by zero");for(u=r.e-i.e,T=j.length,A=z.length,g=new N($),b=g.d=[],f=0;j[f]==(z[f]||0);)++f;if(j[f]>(z[f]||0)&&--u,o==null?x=o=N.precision:l?x=o+(yn(r)-yn(i))+1:x=o,x<0)return new N(0);if(x=x/nn+2|0,f=0,T==1)for(m=0,j=j[0],x++;(f<A||m)&&x--;f++)U=m*Pn+(z[f]||0),b[f]=U/j|0,m=U%j|0;else{for(m=Pn/(j[0]+1)|0,m>1&&(j=e(j,m),z=e(z,m),T=j.length,A=z.length),I=T,y=z.slice(0,T),E=y.length;E<T;)y[E++]=0;M=j.slice(),M.unshift(0),P=j[0],j[1]>=Pn/2&&++P;do m=0,s=n(j,y,T,E),s<0?(w=y[0],T!=E&&(w=w*Pn+(y[1]||0)),m=w/P|0,m>1?(m>=Pn&&(m=Pn-1),h=e(j,m),p=h.length,E=y.length,s=n(h,y,p,E),s==1&&(m--,t(h,T<p?M:j,p))):(m==0&&(s=m=1),h=j.slice()),p=h.length,p<E&&h.unshift(0),t(y,h,E),s==-1&&(E=y.length,s=n(j,y,T,E),s<1&&(m++,t(y,T<E?M:j,E))),E=y.length):s===0&&(m++,y=[0]),b[f++]=m,s&&y[0]?y[E++]=z[I]||0:(y=[z[I]],E=1);while((I++<A||y[0]!==void 0)&&x--)}return b[0]||b.shift(),g.e=u,Xe(g,l?o+yn(g)+1:o)}})();function m_(e,n){var t,r,i,o,l,s,u=0,f=0,m=e.constructor,h=m.precision;if(yn(e)>16)throw Error(FC+yn(e));if(!e.s)return new m(vt);for(on=!1,s=h,l=new m(.03125);e.abs().gte(.1);)e=e.times(l),f+=5;for(r=Math.log(Vi(2,f))/Math.LN10*2+5|0,s+=r,t=i=o=new m(vt),m.precision=s;;){if(i=Xe(i.times(e),s),t=t.times(++u),l=o.plus(Lr(i,t,s)),lr(l.d).slice(0,s)===lr(o.d).slice(0,s)){for(;f--;)o=Xe(o.times(o),s);return m.precision=h,n==null?(on=!0,Xe(o,h)):o}o=l}}function yn(e){for(var n=e.e*nn,t=e.d[0];t>=10;t/=10)n++;return n}function Eg(e,n,t){if(n>e.LN10.sd())throw on=!0,t&&(e.precision=t),Error(Ot+"LN10 precision limit exceeded");return Xe(new e(e.LN10),n)}function mi(e){for(var n="";e--;)n+="0";return n}function Sl(e,n){var t,r,i,o,l,s,u,f,m,h=1,p=10,g=e,b=g.d,y=g.constructor,E=y.precision;if(g.s<1)throw Error(Ot+(g.s?"NaN":"-Infinity"));if(g.eq(vt))return new y(0);if(n==null?(on=!1,f=E):f=n,g.eq(10))return n==null&&(on=!0),Eg(y,f);if(f+=p,y.precision=f,t=lr(b),r=t.charAt(0),o=yn(g),Math.abs(o)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)g=g.times(e),t=lr(g.d),r=t.charAt(0),h++;o=yn(g),r>1?(g=new y("0."+t),o++):g=new y(r+"."+t.slice(1))}else return u=Eg(y,f+2,E).times(o+""),g=Sl(new y(r+"."+t.slice(1)),f-p).plus(u),y.precision=E,n==null?(on=!0,Xe(g,E)):g;for(s=l=g=Lr(g.minus(vt),g.plus(vt),f),m=Xe(g.times(g),f),i=3;;){if(l=Xe(l.times(m),f),u=s.plus(Lr(l,new y(i),f)),lr(u.d).slice(0,f)===lr(s.d).slice(0,f))return s=s.times(2),o!==0&&(s=s.plus(Eg(y,f+2,E).times(o+""))),s=Lr(s,new y(h),f),y.precision=E,n==null?(on=!0,Xe(s,E)):s;s=u,i+=2}}function dP(e,n){var t,r,i;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(t<0&&(t=r),t+=+n.slice(r+1),n=n.substring(0,r)):t<0&&(t=n.length),r=0;n.charCodeAt(r)===48;)++r;for(i=n.length;n.charCodeAt(i-1)===48;)--i;if(n=n.slice(r,i),n){if(i-=r,t=t-r-1,e.e=Xo(t/nn),e.d=[],r=(t+1)%nn,t<0&&(r+=nn),r<i){for(r&&e.d.push(+n.slice(0,r)),i-=nn;r<i;)e.d.push(+n.slice(r,r+=nn));n=n.slice(r),r=nn-n.length}else r-=i;for(;r--;)n+="0";if(e.d.push(+n),on&&(e.e>Cd||e.e<-Cd))throw Error(FC+t)}else e.s=0,e.e=0,e.d=[0];return e}function Xe(e,n,t){var r,i,o,l,s,u,f,m,h=e.d;for(l=1,o=h[0];o>=10;o/=10)l++;if(r=n-l,r<0)r+=nn,i=n,f=h[m=0];else{if(m=Math.ceil((r+1)/nn),o=h.length,m>=o)return e;for(f=o=h[m],l=1;o>=10;o/=10)l++;r%=nn,i=r-nn+l}if(t!==void 0&&(o=Vi(10,l-i-1),s=f/o%10|0,u=n<0||h[m+1]!==void 0||f%o,u=t<4?(s||u)&&(t==0||t==(e.s<0?3:2)):s>5||s==5&&(t==4||u||t==6&&(r>0?i>0?f/Vi(10,l-i):0:h[m-1])%10&1||t==(e.s<0?8:7))),n<1||!h[0])return u?(o=yn(e),h.length=1,n=n-o-1,h[0]=Vi(10,(nn-n%nn)%nn),e.e=Xo(-n/nn)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(r==0?(h.length=m,o=1,m--):(h.length=m+1,o=Vi(10,nn-r),h[m]=i>0?(f/Vi(10,l-i)%Vi(10,i)|0)*o:0),u)for(;;)if(m==0){(h[0]+=o)==Pn&&(h[0]=1,++e.e);break}else{if(h[m]+=o,h[m]!=Pn)break;h[m--]=0,o=1}for(r=h.length;h[--r]===0;)h.pop();if(on&&(e.e>Cd||e.e<-Cd))throw Error(FC+yn(e));return e}function h_(e,n){var t,r,i,o,l,s,u,f,m,h,p=e.constructor,g=p.precision;if(!e.s||!n.s)return n.s?n.s=-n.s:n=new p(e),on?Xe(n,g):n;if(u=e.d,h=n.d,r=n.e,f=e.e,u=u.slice(),l=f-r,l){for(m=l<0,m?(t=u,l=-l,s=h.length):(t=h,r=f,s=u.length),i=Math.max(Math.ceil(g/nn),s)+2,l>i&&(l=i,t.length=1),t.reverse(),i=l;i--;)t.push(0);t.reverse()}else{for(i=u.length,s=h.length,m=i<s,m&&(s=i),i=0;i<s;i++)if(u[i]!=h[i]){m=u[i]<h[i];break}l=0}for(m&&(t=u,u=h,h=t,n.s=-n.s),s=u.length,i=h.length-s;i>0;--i)u[s++]=0;for(i=h.length;i>l;){if(u[--i]<h[i]){for(o=i;o&&u[--o]===0;)u[o]=Pn-1;--u[o],u[i]+=Pn}u[i]-=h[i]}for(;u[--s]===0;)u.pop();for(;u[0]===0;u.shift())--r;return u[0]?(n.d=u,n.e=r,on?Xe(n,g):n):new p(0)}function ua(e,n,t){var r,i=yn(e),o=lr(e.d),l=o.length;return n?(t&&(r=t-l)>0?o=o.charAt(0)+"."+o.slice(1)+mi(r):l>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(i<0?"e":"e+")+i):i<0?(o="0."+mi(-i-1)+o,t&&(r=t-l)>0&&(o+=mi(r))):i>=l?(o+=mi(i+1-l),t&&(r=t-i-1)>0&&(o=o+"."+mi(r))):((r=i+1)<l&&(o=o.slice(0,r)+"."+o.slice(r)),t&&(r=t-l)>0&&(i+1===l&&(o+="."),o+=mi(r))),e.s<0?"-"+o:o}function fP(e,n){if(e.length>n)return e.length=n,!0}function v_(e){var n,t,r;function i(o){var l=this;if(!(l instanceof i))return new i(o);if(l.constructor=i,o instanceof i){l.s=o.s,l.e=o.e,l.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(na+o);if(o>0)l.s=1;else if(o<0)o=-o,l.s=-1;else{l.s=0,l.e=0,l.d=[0];return}if(o===~~o&&o<1e7){l.e=0,l.d=[o];return}return dP(l,o.toString())}else if(typeof o!="string")throw Error(na+o);if(o.charCodeAt(0)===45?(o=o.slice(1),l.s=-1):l.s=1,PK.test(o))dP(l,o);else throw Error(na+o)}if(i.prototype=ye,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=v_,i.config=i.set=IK,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<r.length;)e.hasOwnProperty(t=r[n++])||(e[t]=this[t]);return i.config(e),i}function IK(e){if(!e||typeof e!="object")throw Error(Ot+"Object expected");var n,t,r,i=["precision",1,Yo,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(n=0;n<i.length;n+=3)if((r=e[t=i[n]])!==void 0)if(Xo(r)===r&&r>=i[n+1]&&r<=i[n+2])this[t]=r;else throw Error(na+t+": "+r);if((r=e[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(na+t+": "+r);return this}var $C=v_(TK);vt=new $C(1);const qe=$C;function OK(e){return NK(e)||_K(e)||MK(e)||kK()}function kK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MK(e,n){if(e){if(typeof e=="string")return z1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z1(e,n)}}function _K(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function NK(e){if(Array.isArray(e))return z1(e)}function z1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var LK=function(n){return n},p_={},y_=function(n){return n===p_},mP=function(n){return function t(){return arguments.length===0||arguments.length===1&&y_(arguments.length<=0?void 0:arguments[0])?t:n.apply(void 0,arguments)}},RK=function e(n,t){return n===1?t:mP(function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var l=i.filter(function(s){return s!==p_}).length;return l>=n?t.apply(void 0,i):e(n-l,mP(function(){for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];var m=i.map(function(h){return y_(h)?u.shift():h});return t.apply(void 0,OK(m).concat(u))}))})},If=function(n){return RK(n.length,n)},F1=function(n,t){for(var r=[],i=n;i<t;++i)r[i-n]=i;return r},jK=If(function(e,n){return Array.isArray(n)?n.map(e):Object.keys(n).map(function(t){return n[t]}).map(e)}),DK=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(!t.length)return LK;var i=t.reverse(),o=i[0],l=i.slice(1);return function(){return l.reduce(function(s,u){return u(s)},o.apply(void 0,arguments))}},$1=function(n){return Array.isArray(n)?n.reverse():n.split("").reverse.join("")},g_=function(n){var t=null,r=null;return function(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t&&o.every(function(s,u){return s===t[u]})||(t=o,r=n.apply(void 0,o)),r}};function BK(e){var n;return e===0?n=1:n=Math.floor(new qe(e).abs().log(10).toNumber())+1,n}function zK(e,n,t){for(var r=new qe(e),i=0,o=[];r.lt(n)&&i<1e5;)o.push(r.toNumber()),r=r.add(t),i++;return o}var FK=If(function(e,n,t){var r=+e,i=+n;return r+t*(i-r)}),$K=If(function(e,n,t){var r=n-+e;return r=r||1/0,(t-e)/r}),GK=If(function(e,n,t){var r=n-+e;return r=r||1/0,Math.max(0,Math.min(1,(t-e)/r))});const Of={rangeStep:zK,getDigitCount:BK,interpolateNumber:FK,uninterpolateNumber:$K,uninterpolateTruncation:GK};function G1(e){return VK(e)||WK(e)||E_(e)||HK()}function HK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WK(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function VK(e){if(Array.isArray(e))return H1(e)}function wl(e,n){return YK(e)||qK(e,n)||E_(e,n)||KK()}function KK(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E_(e,n){if(e){if(typeof e=="string")return H1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H1(e,n)}}function H1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function qK(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,i=!1,o=void 0;try{for(var l=e[Symbol.iterator](),s;!(r=(s=l.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(u){i=!0,o=u}finally{try{!r&&l.return!=null&&l.return()}finally{if(i)throw o}}return t}}function YK(e){if(Array.isArray(e))return e}function C_(e){var n=wl(e,2),t=n[0],r=n[1],i=t,o=r;return t>r&&(i=r,o=t),[i,o]}function b_(e,n,t){if(e.lte(0))return new qe(0);var r=Of.getDigitCount(e.toNumber()),i=new qe(10).pow(r),o=e.div(i),l=r!==1?.05:.1,s=new qe(Math.ceil(o.div(l).toNumber())).add(t).mul(l),u=s.mul(i);return n?u:new qe(Math.ceil(u))}function XK(e,n,t){var r=1,i=new qe(e);if(!i.isint()&&t){var o=Math.abs(e);o<1?(r=new qe(10).pow(Of.getDigitCount(e)-1),i=new qe(Math.floor(i.div(r).toNumber())).mul(r)):o>1&&(i=new qe(Math.floor(e)))}else e===0?i=new qe(Math.floor((n-1)/2)):t||(i=new qe(Math.floor(e)));var l=Math.floor((n-1)/2),s=DK(jK(function(u){return i.add(new qe(u-l).mul(r)).toNumber()}),F1);return s(0,n)}function S_(e,n,t,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-e)/(t-1)))return{step:new qe(0),tickMin:new qe(0),tickMax:new qe(0)};var o=b_(new qe(n).sub(e).div(t-1),r,i),l;e<=0&&n>=0?l=new qe(0):(l=new qe(e).add(n).div(2),l=l.sub(new qe(l).mod(o)));var s=Math.ceil(l.sub(e).div(o).toNumber()),u=Math.ceil(new qe(n).sub(l).div(o).toNumber()),f=s+u+1;return f>t?S_(e,n,t,r,i+1):(f<t&&(u=n>0?u+(t-f):u,s=n>0?s:s+(t-f)),{step:o,tickMin:l.sub(new qe(s).mul(o)),tickMax:l.add(new qe(u).mul(o))})}function JK(e){var n=wl(e,2),t=n[0],r=n[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Math.max(i,2),s=C_([t,r]),u=wl(s,2),f=u[0],m=u[1];if(f===-1/0||m===1/0){var h=m===1/0?[f].concat(G1(F1(0,i-1).map(function(){return 1/0}))):[].concat(G1(F1(0,i-1).map(function(){return-1/0})),[m]);return t>r?$1(h):h}if(f===m)return XK(f,i,o);var p=S_(f,m,l,o),g=p.step,b=p.tickMin,y=p.tickMax,E=Of.rangeStep(b,y.add(new qe(.1).mul(g)),g);return t>r?$1(E):E}function ZK(e,n){var t=wl(e,2),r=t[0],i=t[1],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=C_([r,i]),s=wl(l,2),u=s[0],f=s[1];if(u===-1/0||f===1/0)return[r,i];if(u===f)return[u];var m=Math.max(n,2),h=b_(new qe(f).sub(u).div(m-1),o,0),p=[].concat(G1(Of.rangeStep(new qe(u),new qe(f).sub(new qe(.99).mul(h)),h)),[f]);return r>i?$1(p):p}var QK=g_(JK),e6=g_(ZK),n6="Invariant failed";function da(e,n){throw new Error(n6)}var t6=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Eo(e)}function bd(){return bd=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bd.apply(this,arguments)}function r6(e,n){return c6(e)||o6(e,n)||a6(e,n)||i6()}function i6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a6(e,n){if(e){if(typeof e=="string")return hP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hP(e,n)}}function hP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o6(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function c6(e){if(Array.isArray(e))return e}function l6(e,n){if(e==null)return{};var t=s6(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function s6(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function u6(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d6(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A_(r.key),r)}}function f6(e,n,t){return n&&d6(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m6(e,n,t){return n=Sd(n),h6(e,w_()?Reflect.construct(n,t||[],Sd(e).constructor):n.apply(e,t))}function h6(e,n){if(n&&(Eo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v6(e)}function v6(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(w_=function(){return!!e})()}function Sd(e){return Sd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Sd(e)}function p6(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&W1(e,n)}function W1(e,n){return W1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},W1(e,n)}function x_(e,n,t){return n=A_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A_(e){var n=y6(e,"string");return Eo(n)=="symbol"?n:n+""}function y6(e,n){if(Eo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Jo=(function(e){function n(){return u6(this,n),m6(this,n,arguments)}return p6(n,e),f6(n,[{key:"render",value:function(){var r=this.props,i=r.offset,o=r.layout,l=r.width,s=r.dataKey,u=r.data,f=r.dataPointFormatter,m=r.xAxis,h=r.yAxis,p=l6(r,t6),g=Oe(p,!1);this.props.direction==="x"&&m.type!=="number"&&da();var b=u.map(function(y){var E=f(y,s),w=E.x,x=E.y,U=E.value,I=E.errorVal;if(!I)return null;var A=[],P,T;if(Array.isArray(I)){var M=r6(I,2);P=M[0],T=M[1]}else P=T=I;if(o==="vertical"){var N=m.scale,$=x+i,z=$+l,j=$-l,H=N(U-P),V=N(U+T);A.push({x1:V,y1:z,x2:V,y2:j}),A.push({x1:H,y1:$,x2:V,y2:$}),A.push({x1:H,y1:z,x2:H,y2:j})}else if(o==="horizontal"){var K=h.scale,W=w+i,X=W-l,R=W+l,Z=K(U-P),Q=K(U+T);A.push({x1:X,y1:Q,x2:R,y2:Q}),A.push({x1:W,y1:Z,x2:W,y2:Q}),A.push({x1:X,y1:Z,x2:R,y2:Z})}return D.createElement($e,bd({className:"recharts-errorBar",key:"bar-".concat(A.map(function(B){return"".concat(B.x1,"-").concat(B.x2,"-").concat(B.y1,"-").concat(B.y2)}))},g),A.map(function(B){return D.createElement("line",bd({},B,{key:"line-".concat(B.x1,"-").concat(B.x2,"-").concat(B.y1,"-").concat(B.y2)}))}))});return D.createElement($e,{className:"recharts-errorBars"},b)}}])})(D.Component);x_(Jo,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});x_(Jo,"displayName","ErrorBar");function xl(e){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xl(e)}function vP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Hi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?vP(Object(t),!0).forEach(function(r){g6(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function g6(e,n,t){return n=E6(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E6(e){var n=C6(e,"string");return xl(n)=="symbol"?n:n+""}function C6(e,n){if(xl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(xl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var U_=function(n){var t=n.children,r=n.formattedGraphicalItems,i=n.legendWidth,o=n.legendContent,l=ft(t,Qi);if(!l)return null;var s=Qi.defaultProps,u=s!==void 0?Hi(Hi({},s),l.props):{},f;return l.props&&l.props.payload?f=l.props&&l.props.payload:o==="children"?f=(r||[]).reduce(function(m,h){var p=h.item,g=h.props,b=g.sectors||g.data||[];return m.concat(b.map(function(y){return{type:l.props.iconType||p.props.legendType,value:y.name,color:y.fill,payload:y}}))},[]):f=(r||[]).map(function(m){var h=m.item,p=h.type.defaultProps,g=p!==void 0?Hi(Hi({},p),h.props):{},b=g.dataKey,y=g.name,E=g.legendType,w=g.hide;return{inactive:w,dataKey:b,type:u.iconType||E||"square",color:GC(h),value:y||b,payload:g}}),Hi(Hi(Hi({},u),Qi.getWithHeight(l,i)),{},{payload:f,item:l})};function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Al(e)}function pP(e){return x6(e)||w6(e)||S6(e)||b6()}function b6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S6(e,n){if(e){if(typeof e=="string")return V1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V1(e,n)}}function w6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function x6(e){if(Array.isArray(e))return V1(e)}function V1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function yP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function un(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yP(Object(t),!0).forEach(function(r){oo(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oo(e,n,t){return n=A6(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A6(e){var n=U6(e,"string");return Al(n)=="symbol"?n:n+""}function U6(e,n){if(Al(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Al(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function wn(e,n,t){return ke(e)||ke(n)?t:Sn(n)?It(e,n,t):Me(n)?n(e):t}function tl(e,n,t,r){var i=xK(e,function(s){return wn(s,n)});if(t==="number"){var o=i.filter(function(s){return fe(s)||parseFloat(s)});return o.length?[Pf(o),vi(o)]:[1/0,-1/0]}var l=r?i.filter(function(s){return!ke(s)}):i;return l.map(function(s){return Sn(s)||s instanceof Date?s:""})}var T6=function(n){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,l=-1,s=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(s<=1)return 0;if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var u=o.range,f=0;f<s;f++){var m=f>0?i[f-1].coordinate:i[s-1].coordinate,h=i[f].coordinate,p=f>=s-1?i[0].coordinate:i[f+1].coordinate,g=void 0;if(Vt(h-m)!==Vt(p-h)){var b=[];if(Vt(p-h)===Vt(u[1]-u[0])){g=p;var y=h+u[1]-u[0];b[0]=Math.min(y,(y+m)/2),b[1]=Math.max(y,(y+m)/2)}else{g=m;var E=p+u[1]-u[0];b[0]=Math.min(h,(E+h)/2),b[1]=Math.max(h,(E+h)/2)}var w=[Math.min(h,(g+h)/2),Math.max(h,(g+h)/2)];if(n>w[0]&&n<=w[1]||n>=b[0]&&n<=b[1]){l=i[f].index;break}}else{var x=Math.min(m,p),U=Math.max(m,p);if(n>(x+h)/2&&n<=(U+h)/2){l=i[f].index;break}}}else for(var I=0;I<s;I++)if(I===0&&n<=(r[I].coordinate+r[I+1].coordinate)/2||I>0&&I<s-1&&n>(r[I].coordinate+r[I-1].coordinate)/2&&n<=(r[I].coordinate+r[I+1].coordinate)/2||I===s-1&&n>(r[I].coordinate+r[I-1].coordinate)/2){l=r[I].index;break}return l},GC=function(n){var t,r=n,i=r.type.displayName,o=(t=n.type)!==null&&t!==void 0&&t.defaultProps?un(un({},n.type.defaultProps),n.props):n.props,l=o.stroke,s=o.fill,u;switch(i){case"Line":u=l;break;case"Area":case"Radar":u=l&&l!=="none"?l:s;break;default:u=s;break}return u},P6=function(n){var t=n.barSize,r=n.totalSize,i=n.stackGroups,o=i===void 0?{}:i;if(!o)return{};for(var l={},s=Object.keys(o),u=0,f=s.length;u<f;u++)for(var m=o[s[u]].stackGroups,h=Object.keys(m),p=0,g=h.length;p<g;p++){var b=m[h[p]],y=b.items,E=b.cateAxisId,w=y.filter(function(T){return _r(T.type).indexOf("Bar")>=0});if(w&&w.length){var x=w[0].type.defaultProps,U=x!==void 0?un(un({},x),w[0].props):w[0].props,I=U.barSize,A=U[E];l[A]||(l[A]=[]);var P=ke(I)?t:I;l[A].push({item:w[0],stackList:w.slice(1),barSize:ke(P)?void 0:la(P,r,0)})}}return l},I6=function(n){var t=n.barGap,r=n.barCategoryGap,i=n.bandSize,o=n.sizeList,l=o===void 0?[]:o,s=n.maxBarSize,u=l.length;if(u<1)return null;var f=la(t,i,0,!0),m,h=[];if(l[0].barSize===+l[0].barSize){var p=!1,g=i/u,b=l.reduce(function(I,A){return I+A.barSize||0},0);b+=(u-1)*f,b>=i&&(b-=(u-1)*f,f=0),b>=i&&g>0&&(p=!0,g*=.9,b=u*g);var y=(i-b)/2>>0,E={offset:y-f,size:0};m=l.reduce(function(I,A){var P={item:A.item,position:{offset:E.offset+E.size+f,size:p?g:A.barSize}},T=[].concat(pP(I),[P]);return E=T[T.length-1].position,A.stackList&&A.stackList.length&&A.stackList.forEach(function(M){T.push({item:M,position:E})}),T},h)}else{var w=la(r,i,0,!0);i-2*w-(u-1)*f<=0&&(f=0);var x=(i-2*w-(u-1)*f)/u;x>1&&(x>>=0);var U=s===+s?Math.min(x,s):x;m=l.reduce(function(I,A,P){var T=[].concat(pP(I),[{item:A.item,position:{offset:w+(x+f)*P+(x-U)/2,size:U}}]);return A.stackList&&A.stackList.length&&A.stackList.forEach(function(M){T.push({item:M,position:T[T.length-1].position})}),T},h)}return m},O6=function(n,t,r,i){var o=r.children,l=r.width,s=r.margin,u=l-(s.left||0)-(s.right||0),f=U_({children:o,legendWidth:u});if(f){var m=i||{},h=m.width,p=m.height,g=f.align,b=f.verticalAlign,y=f.layout;if((y==="vertical"||y==="horizontal"&&b==="middle")&&g!=="center"&&fe(n[g]))return un(un({},n),{},oo({},g,n[g]+(h||0)));if((y==="horizontal"||y==="vertical"&&g==="center")&&b!=="middle"&&fe(n[b]))return un(un({},n),{},oo({},b,n[b]+(p||0)))}return n},k6=function(n,t,r){return ke(t)?!0:n==="horizontal"?t==="yAxis":n==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},T_=function(n,t,r,i,o){var l=t.props.children,s=tt(l,Jo).filter(function(f){return k6(i,o,f.props.direction)});if(s&&s.length){var u=s.map(function(f){return f.props.dataKey});return n.reduce(function(f,m){var h=wn(m,r);if(ke(h))return f;var p=Array.isArray(h)?[Pf(h),vi(h)]:[h,h],g=u.reduce(function(b,y){var E=wn(m,y,0),w=p[0]-Math.abs(Array.isArray(E)?E[0]:E),x=p[1]+Math.abs(Array.isArray(E)?E[1]:E);return[Math.min(w,b[0]),Math.max(x,b[1])]},[1/0,-1/0]);return[Math.min(g[0],f[0]),Math.max(g[1],f[1])]},[1/0,-1/0])}return null},M6=function(n,t,r,i,o){var l=t.map(function(s){return T_(n,s,r,o,i)}).filter(function(s){return!ke(s)});return l&&l.length?l.reduce(function(s,u){return[Math.min(s[0],u[0]),Math.max(s[1],u[1])]},[1/0,-1/0]):null},P_=function(n,t,r,i,o){var l=t.map(function(u){var f=u.props.dataKey;return r==="number"&&f&&T_(n,u,f,i)||tl(n,f,r,o)});if(r==="number")return l.reduce(function(u,f){return[Math.min(u[0],f[0]),Math.max(u[1],f[1])]},[1/0,-1/0]);var s={};return l.reduce(function(u,f){for(var m=0,h=f.length;m<h;m++)s[f[m]]||(s[f[m]]=!0,u.push(f[m]));return u},[])},I_=function(n,t){return n==="horizontal"&&t==="xAxis"||n==="vertical"&&t==="yAxis"||n==="centric"&&t==="angleAxis"||n==="radial"&&t==="radiusAxis"},O_=function(n,t,r,i){if(i)return n.map(function(u){return u.coordinate});var o,l,s=n.map(function(u){return u.coordinate===t&&(o=!0),u.coordinate===r&&(l=!0),u.coordinate});return o||s.push(t),l||s.push(r),s},Mr=function(n,t,r){if(!n)return null;var i=n.scale,o=n.duplicateDomain,l=n.type,s=n.range,u=n.realScaleType==="scaleBand"?i.bandwidth()/2:2,f=(t||r)&&l==="category"&&i.bandwidth?i.bandwidth()/u:0;if(f=n.axisType==="angleAxis"&&(s==null?void 0:s.length)>=2?Vt(s[0]-s[1])*2*f:f,t&&(n.ticks||n.niceTicks)){var m=(n.ticks||n.niceTicks).map(function(h){var p=o?o.indexOf(h):h;return{coordinate:i(p)+f,value:h,offset:f}});return m.filter(function(h){return!Vo(h.coordinate)})}return n.isCategorical&&n.categoricalDomain?n.categoricalDomain.map(function(h,p){return{coordinate:i(h)+f,value:h,index:p,offset:f}}):i.ticks&&!r?i.ticks(n.tickCount).map(function(h){return{coordinate:i(h)+f,value:h,offset:f}}):i.domain().map(function(h,p){return{coordinate:i(h)+f,value:o?o[h]:h,index:p,offset:f}})},Cg=new WeakMap,Ou=function(n,t){if(typeof t!="function")return n;Cg.has(n)||Cg.set(n,new WeakMap);var r=Cg.get(n);if(r.has(t))return r.get(t);var i=function(){n.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,i),i},_6=function(n,t,r){var i=n.scale,o=n.type,l=n.layout,s=n.axisType;if(i==="auto")return l==="radial"&&s==="radiusAxis"?{scale:yl(),realScaleType:"band"}:l==="radial"&&s==="angleAxis"?{scale:pd(),realScaleType:"linear"}:o==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:nl(),realScaleType:"point"}:o==="category"?{scale:yl(),realScaleType:"band"}:{scale:pd(),realScaleType:"linear"};if(Jl(i)){var u="scale".concat(hf(i));return{scale:(tP[u]||nl)(),realScaleType:tP[u]?u:"point"}}return Me(i)?{scale:i}:{scale:nl(),realScaleType:"point"}},gP=1e-4,N6=function(n){var t=n.domain();if(!(!t||t.length<=2)){var r=t.length,i=n.range(),o=Math.min(i[0],i[1])-gP,l=Math.max(i[0],i[1])+gP,s=n(t[0]),u=n(t[r-1]);(s<o||s>l||u<o||u>l)&&n.domain([t[0],t[r-1]])}},L6=function(n,t){if(!n)return null;for(var r=0,i=n.length;r<i;r++)if(n[r].item===t)return n[r].position;return null},R6=function(n,t){if(!t||t.length!==2||!fe(t[0])||!fe(t[1]))return n;var r=Math.min(t[0],t[1]),i=Math.max(t[0],t[1]),o=[n[0],n[1]];return(!fe(n[0])||n[0]<r)&&(o[0]=r),(!fe(n[1])||n[1]>i)&&(o[1]=i),o[0]>i&&(o[0]=i),o[1]<r&&(o[1]=r),o},j6=function(n){var t=n.length;if(!(t<=0))for(var r=0,i=n[0].length;r<i;++r)for(var o=0,l=0,s=0;s<t;++s){var u=Vo(n[s][r][1])?n[s][r][0]:n[s][r][1];u>=0?(n[s][r][0]=o,n[s][r][1]=o+u,o=n[s][r][1]):(n[s][r][0]=l,n[s][r][1]=l+u,l=n[s][r][1])}},D6=function(n){var t=n.length;if(!(t<=0))for(var r=0,i=n[0].length;r<i;++r)for(var o=0,l=0;l<t;++l){var s=Vo(n[l][r][1])?n[l][r][0]:n[l][r][1];s>=0?(n[l][r][0]=o,n[l][r][1]=o+s,o=n[l][r][1]):(n[l][r][0]=0,n[l][r][1]=0)}},B6={sign:j6,expand:SG,none:uo,silhouette:wG,wiggle:xG,positive:D6},z6=function(n,t,r){var i=t.map(function(s){return s.props.dataKey}),o=B6[r],l=bG().keys(i).value(function(s,u){return+wn(s,u,0)}).order(S1).offset(o);return l(n)},F6=function(n,t,r,i,o,l){if(!n)return null;var s=l?t.reverse():t,u={},f=s.reduce(function(h,p){var g,b=(g=p.type)!==null&&g!==void 0&&g.defaultProps?un(un({},p.type.defaultProps),p.props):p.props,y=b.stackId,E=b.hide;if(E)return h;var w=b[r],x=h[w]||{hasStack:!1,stackGroups:{}};if(Sn(y)){var U=x.stackGroups[y]||{numericAxisId:r,cateAxisId:i,items:[]};U.items.push(p),x.hasStack=!0,x.stackGroups[y]=U}else x.stackGroups[ha("_stackId_")]={numericAxisId:r,cateAxisId:i,items:[p]};return un(un({},h),{},oo({},w,x))},u),m={};return Object.keys(f).reduce(function(h,p){var g=f[p];if(g.hasStack){var b={};g.stackGroups=Object.keys(g.stackGroups).reduce(function(y,E){var w=g.stackGroups[E];return un(un({},y),{},oo({},E,{numericAxisId:r,cateAxisId:i,items:w.items,stackedData:z6(n,w.items,o)}))},b)}return un(un({},h),{},oo({},p,g))},m)},$6=function(n,t){var r=t.realScaleType,i=t.type,o=t.tickCount,l=t.originalDomain,s=t.allowDecimals,u=r||t.scale;if(u!=="auto"&&u!=="linear")return null;if(o&&i==="number"&&l&&(l[0]==="auto"||l[1]==="auto")){var f=n.domain();if(!f.length)return null;var m=QK(f,o,s);return n.domain([Pf(m),vi(m)]),{niceTicks:m}}if(o&&i==="number"){var h=n.domain(),p=e6(h,o,s);return{niceTicks:p}}return null};function Co(e){var n=e.axis,t=e.ticks,r=e.bandSize,i=e.entry,o=e.index,l=e.dataKey;if(n.type==="category"){if(!n.allowDuplicatedCategory&&n.dataKey&&!ke(i[n.dataKey])){var s=Xu(t,"value",i[n.dataKey]);if(s)return s.coordinate+r/2}return t[o]?t[o].coordinate+r/2:null}var u=wn(i,ke(l)?n.dataKey:l);return ke(u)?null:n.scale(u)}var EP=function(n){var t=n.axis,r=n.ticks,i=n.offset,o=n.bandSize,l=n.entry,s=n.index;if(t.type==="category")return r[s]?r[s].coordinate+i:null;var u=wn(l,t.dataKey,t.domain[s]);return ke(u)?null:t.scale(u)-o/2+i},G6=function(n){var t=n.numericAxis,r=t.scale.domain();if(t.type==="number"){var i=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);return i<=0&&o>=0?0:o<0?o:i}return r[0]},H6=function(n,t){var r,i=(r=n.type)!==null&&r!==void 0&&r.defaultProps?un(un({},n.type.defaultProps),n.props):n.props,o=i.stackId;if(Sn(o)){var l=t[o];if(l){var s=l.items.indexOf(n);return s>=0?l.stackedData[s]:null}}return null},W6=function(n){return n.reduce(function(t,r){return[Pf(r.concat([t[0]]).filter(fe)),vi(r.concat([t[1]]).filter(fe))]},[1/0,-1/0])},k_=function(n,t,r){return Object.keys(n).reduce(function(i,o){var l=n[o],s=l.stackedData,u=s.reduce(function(f,m){var h=W6(m.slice(t,r+1));return[Math.min(f[0],h[0]),Math.max(f[1],h[1])]},[1/0,-1/0]);return[Math.min(u[0],i[0]),Math.max(u[1],i[1])]},[1/0,-1/0]).map(function(i){return i===1/0||i===-1/0?0:i})},CP=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bP=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,K1=function(n,t,r){if(Me(n))return n(t,r);if(!Array.isArray(n))return t;var i=[];if(fe(n[0]))i[0]=r?n[0]:Math.min(n[0],t[0]);else if(CP.test(n[0])){var o=+CP.exec(n[0])[1];i[0]=t[0]-o}else Me(n[0])?i[0]=n[0](t[0]):i[0]=t[0];if(fe(n[1]))i[1]=r?n[1]:Math.max(n[1],t[1]);else if(bP.test(n[1])){var l=+bP.exec(n[1])[1];i[1]=t[1]+l}else Me(n[1])?i[1]=n[1](t[1]):i[1]=t[1];return i},wd=function(n,t,r){if(n&&n.scale&&n.scale.bandwidth){var i=n.scale.bandwidth();if(!r||i>0)return i}if(n&&t&&t.length>=2){for(var o=yC(t,function(h){return h.coordinate}),l=1/0,s=1,u=o.length;s<u;s++){var f=o[s],m=o[s-1];l=Math.min((f.coordinate||0)-(m.coordinate||0),l)}return l===1/0?0:l}return r?void 0:0},SP=function(n,t,r){return!n||!n.length||sa(n,It(r,"type.defaultProps.domain"))?t:n},M_=function(n,t){var r=n.type.defaultProps?un(un({},n.type.defaultProps),n.props):n.props,i=r.dataKey,o=r.name,l=r.unit,s=r.formatter,u=r.tooltipType,f=r.chartType,m=r.hide;return un(un({},Oe(n,!1)),{},{dataKey:i,unit:l,formatter:s,name:o||i,color:GC(n),value:wn(t,i),type:u,payload:t,chartType:f,hide:m})};function Ul(e){"@babel/helpers - typeof";return Ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ul(e)}function wP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function xP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?wP(Object(t),!0).forEach(function(r){V6(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function V6(e,n,t){return n=K6(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K6(e){var n=q6(e,"string");return Ul(n)=="symbol"?n:n+""}function q6(e,n){if(Ul(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ul(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var xd=Math.PI/180,Y6=function(n){return n*180/Math.PI},Nn=function(n,t,r,i){return{x:n+Math.cos(-xd*i)*r,y:t+Math.sin(-xd*i)*r}},X6=function(n,t){var r=n.x,i=n.y,o=t.x,l=t.y;return Math.sqrt(Math.pow(r-o,2)+Math.pow(i-l,2))},J6=function(n,t){var r=n.x,i=n.y,o=t.cx,l=t.cy,s=X6({x:r,y:i},{x:o,y:l});if(s<=0)return{radius:s};var u=(r-o)/s,f=Math.acos(u);return i>l&&(f=2*Math.PI-f),{radius:s,angle:Y6(f),angleInRadian:f}},Z6=function(n){var t=n.startAngle,r=n.endAngle,i=Math.floor(t/360),o=Math.floor(r/360),l=Math.min(i,o);return{startAngle:t-l*360,endAngle:r-l*360}},Q6=function(n,t){var r=t.startAngle,i=t.endAngle,o=Math.floor(r/360),l=Math.floor(i/360),s=Math.min(o,l);return n+s*360},AP=function(n,t){var r=n.x,i=n.y,o=J6({x:r,y:i},t),l=o.radius,s=o.angle,u=t.innerRadius,f=t.outerRadius;if(l<u||l>f)return!1;if(l===0)return!0;var m=Z6(t),h=m.startAngle,p=m.endAngle,g=s,b;if(h<=p){for(;g>p;)g-=360;for(;g<h;)g+=360;b=g>=h&&g<=p}else{for(;g>h;)g-=360;for(;g<p;)g+=360;b=g>=p&&g<=h}return b?xP(xP({},t),{},{radius:l,angle:Q6(g,t)}):null};function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tl(e)}var eq=["offset"];function nq(e){return aq(e)||iq(e)||rq(e)||tq()}function tq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rq(e,n){if(e){if(typeof e=="string")return q1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return q1(e,n)}}function iq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aq(e){if(Array.isArray(e))return q1(e)}function q1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function oq(e,n){if(e==null)return{};var t=cq(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function cq(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function UP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?UP(Object(t),!0).forEach(function(r){lq(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):UP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function lq(e,n,t){return n=sq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sq(e){var n=uq(e,"string");return Tl(n)=="symbol"?n:n+""}function uq(e,n){if(Tl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Tl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pl.apply(this,arguments)}var dq=function(n){var t=n.value,r=n.formatter,i=ke(n.children)?t:n.children;return Me(r)?r(i):i},fq=function(n,t){var r=Vt(t-n),i=Math.min(Math.abs(t-n),360);return r*i},mq=function(n,t,r){var i=n.position,o=n.viewBox,l=n.offset,s=n.className,u=o,f=u.cx,m=u.cy,h=u.innerRadius,p=u.outerRadius,g=u.startAngle,b=u.endAngle,y=u.clockWise,E=(h+p)/2,w=fq(g,b),x=w>=0?1:-1,U,I;i==="insideStart"?(U=g+x*l,I=y):i==="insideEnd"?(U=b-x*l,I=!y):i==="end"&&(U=b+x*l,I=y),I=w<=0?I:!I;var A=Nn(f,m,E,U),P=Nn(f,m,E,U+(I?1:-1)*359),T="M".concat(A.x,",").concat(A.y,`
    A`).concat(E,",").concat(E,",0,1,").concat(I?0:1,`,
    `).concat(P.x,",").concat(P.y),M=ke(n.id)?ha("recharts-radial-line-"):n.id;return D.createElement("text",Pl({},r,{dominantBaseline:"central",className:Re("recharts-radial-bar-label",s)}),D.createElement("defs",null,D.createElement("path",{id:M,d:T})),D.createElement("textPath",{xlinkHref:"#".concat(M)},t))},hq=function(n){var t=n.viewBox,r=n.offset,i=n.position,o=t,l=o.cx,s=o.cy,u=o.innerRadius,f=o.outerRadius,m=o.startAngle,h=o.endAngle,p=(m+h)/2;if(i==="outside"){var g=Nn(l,s,f+r,p),b=g.x,y=g.y;return{x:b,y,textAnchor:b>=l?"start":"end",verticalAnchor:"middle"}}if(i==="center")return{x:l,y:s,textAnchor:"middle",verticalAnchor:"middle"};if(i==="centerTop")return{x:l,y:s,textAnchor:"middle",verticalAnchor:"start"};if(i==="centerBottom")return{x:l,y:s,textAnchor:"middle",verticalAnchor:"end"};var E=(u+f)/2,w=Nn(l,s,E,p),x=w.x,U=w.y;return{x,y:U,textAnchor:"middle",verticalAnchor:"middle"}},vq=function(n){var t=n.viewBox,r=n.parentViewBox,i=n.offset,o=n.position,l=t,s=l.x,u=l.y,f=l.width,m=l.height,h=m>=0?1:-1,p=h*i,g=h>0?"end":"start",b=h>0?"start":"end",y=f>=0?1:-1,E=y*i,w=y>0?"end":"start",x=y>0?"start":"end";if(o==="top"){var U={x:s+f/2,y:u-h*i,textAnchor:"middle",verticalAnchor:g};return bn(bn({},U),r?{height:Math.max(u-r.y,0),width:f}:{})}if(o==="bottom"){var I={x:s+f/2,y:u+m+p,textAnchor:"middle",verticalAnchor:b};return bn(bn({},I),r?{height:Math.max(r.y+r.height-(u+m),0),width:f}:{})}if(o==="left"){var A={x:s-E,y:u+m/2,textAnchor:w,verticalAnchor:"middle"};return bn(bn({},A),r?{width:Math.max(A.x-r.x,0),height:m}:{})}if(o==="right"){var P={x:s+f+E,y:u+m/2,textAnchor:x,verticalAnchor:"middle"};return bn(bn({},P),r?{width:Math.max(r.x+r.width-P.x,0),height:m}:{})}var T=r?{width:f,height:m}:{};return o==="insideLeft"?bn({x:s+E,y:u+m/2,textAnchor:x,verticalAnchor:"middle"},T):o==="insideRight"?bn({x:s+f-E,y:u+m/2,textAnchor:w,verticalAnchor:"middle"},T):o==="insideTop"?bn({x:s+f/2,y:u+p,textAnchor:"middle",verticalAnchor:b},T):o==="insideBottom"?bn({x:s+f/2,y:u+m-p,textAnchor:"middle",verticalAnchor:g},T):o==="insideTopLeft"?bn({x:s+E,y:u+p,textAnchor:x,verticalAnchor:b},T):o==="insideTopRight"?bn({x:s+f-E,y:u+p,textAnchor:w,verticalAnchor:b},T):o==="insideBottomLeft"?bn({x:s+E,y:u+m-p,textAnchor:x,verticalAnchor:g},T):o==="insideBottomRight"?bn({x:s+f-E,y:u+m-p,textAnchor:w,verticalAnchor:g},T):Wo(o)&&(fe(o.x)||qi(o.x))&&(fe(o.y)||qi(o.y))?bn({x:s+la(o.x,f),y:u+la(o.y,m),textAnchor:"end",verticalAnchor:"end"},T):bn({x:s+f/2,y:u+m/2,textAnchor:"middle",verticalAnchor:"middle"},T)},pq=function(n){return"cx"in n&&fe(n.cx)};function zn(e){var n=e.offset,t=n===void 0?5:n,r=oq(e,eq),i=bn({offset:t},r),o=i.viewBox,l=i.position,s=i.value,u=i.children,f=i.content,m=i.className,h=m===void 0?"":m,p=i.textBreakAll;if(!o||ke(s)&&ke(u)&&!_.isValidElement(f)&&!Me(f))return null;if(_.isValidElement(f))return _.cloneElement(f,i);var g;if(Me(f)){if(g=_.createElement(f,i),_.isValidElement(g))return g}else g=dq(i);var b=pq(o),y=Oe(i,!0);if(b&&(l==="insideStart"||l==="insideEnd"||l==="end"))return mq(i,g,y);var E=b?hq(i):vq(i);return D.createElement(ld,Pl({className:Re("recharts-label",h)},y,E,{breakAll:p}),g)}zn.displayName="Label";var __=function(n){var t=n.cx,r=n.cy,i=n.angle,o=n.startAngle,l=n.endAngle,s=n.r,u=n.radius,f=n.innerRadius,m=n.outerRadius,h=n.x,p=n.y,g=n.top,b=n.left,y=n.width,E=n.height,w=n.clockWise,x=n.labelViewBox;if(x)return x;if(fe(y)&&fe(E)){if(fe(h)&&fe(p))return{x:h,y:p,width:y,height:E};if(fe(g)&&fe(b))return{x:g,y:b,width:y,height:E}}return fe(h)&&fe(p)?{x:h,y:p,width:0,height:0}:fe(t)&&fe(r)?{cx:t,cy:r,startAngle:o||i||0,endAngle:l||i||0,innerRadius:f||0,outerRadius:m||u||s||0,clockWise:w}:n.viewBox?n.viewBox:{}},yq=function(n,t){return n?n===!0?D.createElement(zn,{key:"label-implicit",viewBox:t}):Sn(n)?D.createElement(zn,{key:"label-implicit",viewBox:t,value:n}):_.isValidElement(n)?n.type===zn?_.cloneElement(n,{key:"label-implicit",viewBox:t}):D.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Me(n)?D.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Wo(n)?D.createElement(zn,Pl({viewBox:t},n,{key:"label-implicit"})):null:null},gq=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&r&&!n.label)return null;var i=n.children,o=__(n),l=tt(i,zn).map(function(u,f){return _.cloneElement(u,{viewBox:t||o,key:"label-".concat(f)})});if(!r)return l;var s=yq(n.label,t||o);return[s].concat(nq(l))};zn.parseViewBox=__;zn.renderCallByParent=gq;var bg,TP;function Eq(){if(TP)return bg;TP=1;function e(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}return bg=e,bg}var Cq=Eq();const bq=Ye(Cq);function Il(e){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Il(e)}var Sq=["valueAccessor"],wq=["data","dataKey","clockWise","id","textBreakAll"];function xq(e){return Pq(e)||Tq(e)||Uq(e)||Aq()}function Aq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uq(e,n){if(e){if(typeof e=="string")return Y1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y1(e,n)}}function Tq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pq(e){if(Array.isArray(e))return Y1(e)}function Y1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ad(){return Ad=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ad.apply(this,arguments)}function PP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function IP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?PP(Object(t),!0).forEach(function(r){Iq(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Iq(e,n,t){return n=Oq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Oq(e){var n=kq(e,"string");return Il(n)=="symbol"?n:n+""}function kq(e,n){if(Il(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Il(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function OP(e,n){if(e==null)return{};var t=Mq(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Mq(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var _q=function(n){return Array.isArray(n.value)?bq(n.value):n.value};function hr(e){var n=e.valueAccessor,t=n===void 0?_q:n,r=OP(e,Sq),i=r.data,o=r.dataKey,l=r.clockWise,s=r.id,u=r.textBreakAll,f=OP(r,wq);return!i||!i.length?null:D.createElement($e,{className:"recharts-label-list"},i.map(function(m,h){var p=ke(o)?t(m,h):wn(m&&m.payload,o),g=ke(s)?{}:{id:"".concat(s,"-").concat(h)};return D.createElement(zn,Ad({},Oe(m,!0),f,g,{parentViewBox:m.parentViewBox,value:p,textBreakAll:u,viewBox:zn.parseViewBox(ke(l)?m:IP(IP({},m),{},{clockWise:l})),key:"label-".concat(h),index:h}))}))}hr.displayName="LabelList";function Nq(e,n){return e?e===!0?D.createElement(hr,{key:"labelList-implicit",data:n}):D.isValidElement(e)||Me(e)?D.createElement(hr,{key:"labelList-implicit",data:n,content:e}):Wo(e)?D.createElement(hr,Ad({data:n},e,{key:"labelList-implicit"})):null:null}function Lq(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&t&&!e.label)return null;var r=e.children,i=tt(r,hr).map(function(l,s){return _.cloneElement(l,{data:n,key:"labelList-".concat(s)})});if(!t)return i;var o=Nq(e.label,n);return[o].concat(xq(i))}hr.renderCallByParent=Lq;function Ol(e){"@babel/helpers - typeof";return Ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ol(e)}function X1(){return X1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},X1.apply(this,arguments)}function kP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function MP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?kP(Object(t),!0).forEach(function(r){Rq(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):kP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Rq(e,n,t){return n=jq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function jq(e){var n=Dq(e,"string");return Ol(n)=="symbol"?n:n+""}function Dq(e,n){if(Ol(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ol(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Bq=function(n,t){var r=Vt(t-n),i=Math.min(Math.abs(t-n),359.999);return r*i},ku=function(n){var t=n.cx,r=n.cy,i=n.radius,o=n.angle,l=n.sign,s=n.isExternal,u=n.cornerRadius,f=n.cornerIsExternal,m=u*(s?1:-1)+i,h=Math.asin(u/m)/xd,p=f?o:o+l*h,g=Nn(t,r,m,p),b=Nn(t,r,i,p),y=f?o-l*h:o,E=Nn(t,r,m*Math.cos(h*xd),y);return{center:g,circleTangency:b,lineTangency:E,theta:h}},N_=function(n){var t=n.cx,r=n.cy,i=n.innerRadius,o=n.outerRadius,l=n.startAngle,s=n.endAngle,u=Bq(l,s),f=l+u,m=Nn(t,r,o,l),h=Nn(t,r,o,f),p="M ".concat(m.x,",").concat(m.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(u)>180),",").concat(+(l>f),`,
    `).concat(h.x,",").concat(h.y,`
  `);if(i>0){var g=Nn(t,r,i,l),b=Nn(t,r,i,f);p+="L ".concat(b.x,",").concat(b.y,`
            A `).concat(i,",").concat(i,`,0,
            `).concat(+(Math.abs(u)>180),",").concat(+(l<=f),`,
            `).concat(g.x,",").concat(g.y," Z")}else p+="L ".concat(t,",").concat(r," Z");return p},zq=function(n){var t=n.cx,r=n.cy,i=n.innerRadius,o=n.outerRadius,l=n.cornerRadius,s=n.forceCornerRadius,u=n.cornerIsExternal,f=n.startAngle,m=n.endAngle,h=Vt(m-f),p=ku({cx:t,cy:r,radius:o,angle:f,sign:h,cornerRadius:l,cornerIsExternal:u}),g=p.circleTangency,b=p.lineTangency,y=p.theta,E=ku({cx:t,cy:r,radius:o,angle:m,sign:-h,cornerRadius:l,cornerIsExternal:u}),w=E.circleTangency,x=E.lineTangency,U=E.theta,I=u?Math.abs(f-m):Math.abs(f-m)-y-U;if(I<0)return s?"M ".concat(b.x,",").concat(b.y,`
        a`).concat(l,",").concat(l,",0,0,1,").concat(l*2,`,0
        a`).concat(l,",").concat(l,",0,0,1,").concat(-l*2,`,0
      `):N_({cx:t,cy:r,innerRadius:i,outerRadius:o,startAngle:f,endAngle:m});var A="M ".concat(b.x,",").concat(b.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(h<0),",").concat(g.x,",").concat(g.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(I>180),",").concat(+(h<0),",").concat(w.x,",").concat(w.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(h<0),",").concat(x.x,",").concat(x.y,`
  `);if(i>0){var P=ku({cx:t,cy:r,radius:i,angle:f,sign:h,isExternal:!0,cornerRadius:l,cornerIsExternal:u}),T=P.circleTangency,M=P.lineTangency,N=P.theta,$=ku({cx:t,cy:r,radius:i,angle:m,sign:-h,isExternal:!0,cornerRadius:l,cornerIsExternal:u}),z=$.circleTangency,j=$.lineTangency,H=$.theta,V=u?Math.abs(f-m):Math.abs(f-m)-N-H;if(V<0&&l===0)return"".concat(A,"L").concat(t,",").concat(r,"Z");A+="L".concat(j.x,",").concat(j.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(h<0),",").concat(z.x,",").concat(z.y,`
      A`).concat(i,",").concat(i,",0,").concat(+(V>180),",").concat(+(h>0),",").concat(T.x,",").concat(T.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(h<0),",").concat(M.x,",").concat(M.y,"Z")}else A+="L".concat(t,",").concat(r,"Z");return A},Fq={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},L_=function(n){var t=MP(MP({},Fq),n),r=t.cx,i=t.cy,o=t.innerRadius,l=t.outerRadius,s=t.cornerRadius,u=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,h=t.endAngle,p=t.className;if(l<o||m===h)return null;var g=Re("recharts-sector",p),b=l-o,y=la(s,b,0,!0),E;return y>0&&Math.abs(m-h)<360?E=zq({cx:r,cy:i,innerRadius:o,outerRadius:l,cornerRadius:Math.min(y,b/2),forceCornerRadius:u,cornerIsExternal:f,startAngle:m,endAngle:h}):E=N_({cx:r,cy:i,innerRadius:o,outerRadius:l,startAngle:m,endAngle:h}),D.createElement("path",X1({},Oe(t,!0),{className:g,d:E,role:"img"}))};function kl(e){"@babel/helpers - typeof";return kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},kl(e)}function J1(){return J1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},J1.apply(this,arguments)}function _P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function NP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_P(Object(t),!0).forEach(function(r){$q(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_P(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $q(e,n,t){return n=Gq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Gq(e){var n=Hq(e,"string");return kl(n)=="symbol"?n:n+""}function Hq(e,n){if(kl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(kl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var LP={curveBasisClosed:uG,curveBasisOpen:dG,curveBasis:sG,curveBumpX:Y$,curveBumpY:X$,curveLinearClosed:fG,curveLinear:pf,curveMonotoneX:mG,curveMonotoneY:hG,curveNatural:vG,curveStep:pG,curveStepAfter:gG,curveStepBefore:yG},Mu=function(n){return n.x===+n.x&&n.y===+n.y},Vc=function(n){return n.x},Kc=function(n){return n.y},Wq=function(n,t){if(Me(n))return n;var r="curve".concat(hf(n));return(r==="curveMonotone"||r==="curveBump")&&t?LP["".concat(r).concat(t==="vertical"?"Y":"X")]:LP[r]||pf},Vq=function(n){var t=n.type,r=t===void 0?"linear":t,i=n.points,o=i===void 0?[]:i,l=n.baseLine,s=n.layout,u=n.connectNulls,f=u===void 0?!1:u,m=Wq(r,s),h=f?o.filter(function(y){return Mu(y)}):o,p;if(Array.isArray(l)){var g=f?l.filter(function(y){return Mu(y)}):l,b=h.map(function(y,E){return NP(NP({},y),{},{base:g[E]})});return s==="vertical"?p=wu().y(Kc).x1(Vc).x0(function(y){return y.base.x}):p=wu().x(Vc).y1(Kc).y0(function(y){return y.base.y}),p.defined(Mu).curve(m),p(b)}return s==="vertical"&&fe(l)?p=wu().y(Kc).x1(Vc).x0(l):fe(l)?p=wu().x(Vc).y1(Kc).y0(l):p=F2().x(Vc).y(Kc),p.defined(Mu).curve(m),p(h)},ta=function(n){var t=n.className,r=n.points,i=n.path,o=n.pathRef;if((!r||!r.length)&&!i)return null;var l=r&&r.length?Vq(n):i;return D.createElement("path",J1({},Oe(n,!1),Ju(n),{className:Re("recharts-curve",t),d:l,ref:o}))},Sg={exports:{}},wg,RP;function Kq(){if(RP)return wg;RP=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wg=e,wg}var xg,jP;function qq(){if(jP)return xg;jP=1;var e=Kq();function n(){}function t(){}return t.resetWarningCache=n,xg=function(){function r(l,s,u,f,m,h){if(h!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:t,resetWarningCache:n};return o.PropTypes=o,o},xg}var DP;function Yq(){return DP||(DP=1,Sg.exports=qq()()),Sg.exports}var Xq=Yq();const He=Ye(Xq),{getOwnPropertyNames:Jq,getOwnPropertySymbols:Zq}=Object,{hasOwnProperty:Qq}=Object.prototype;function Ag(e,n){return function(r,i,o){return e(r,i,o)&&n(r,i,o)}}function _u(e){return function(t,r,i){if(!t||!r||typeof t!="object"||typeof r!="object")return e(t,r,i);const{cache:o}=i,l=o.get(t),s=o.get(r);if(l&&s)return l===r&&s===t;o.set(t,r),o.set(r,t);const u=e(t,r,i);return o.delete(t),o.delete(r),u}}function e8(e){return e!=null?e[Symbol.toStringTag]:void 0}function BP(e){return Jq(e).concat(Zq(e))}const n8=Object.hasOwn||((e,n)=>Qq.call(e,n));function ya(e,n){return e===n||!e&&!n&&e!==e&&n!==n}const t8="__v",r8="__o",i8="_owner",{getOwnPropertyDescriptor:zP,keys:FP}=Object;function a8(e,n){return e.byteLength===n.byteLength&&Ud(new Uint8Array(e),new Uint8Array(n))}function o8(e,n,t){let r=e.length;if(n.length!==r)return!1;for(;r-- >0;)if(!t.equals(e[r],n[r],r,r,e,n,t))return!1;return!0}function c8(e,n){return e.byteLength===n.byteLength&&Ud(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function l8(e,n){return ya(e.getTime(),n.getTime())}function s8(e,n){return e.name===n.name&&e.message===n.message&&e.cause===n.cause&&e.stack===n.stack}function u8(e,n){return e===n}function $P(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const i=new Array(r),o=e.entries();let l,s,u=0;for(;(l=o.next())&&!l.done;){const f=n.entries();let m=!1,h=0;for(;(s=f.next())&&!s.done;){if(i[h]){h++;continue}const p=l.value,g=s.value;if(t.equals(p[0],g[0],u,h,e,n,t)&&t.equals(p[1],g[1],p[0],g[0],e,n,t)){m=i[h]=!0;break}h++}if(!m)return!1;u++}return!0}const d8=ya;function f8(e,n,t){const r=FP(e);let i=r.length;if(FP(n).length!==i)return!1;for(;i-- >0;)if(!R_(e,n,t,r[i]))return!1;return!0}function qc(e,n,t){const r=BP(e);let i=r.length;if(BP(n).length!==i)return!1;let o,l,s;for(;i-- >0;)if(o=r[i],!R_(e,n,t,o)||(l=zP(e,o),s=zP(n,o),(l||s)&&(!l||!s||l.configurable!==s.configurable||l.enumerable!==s.enumerable||l.writable!==s.writable)))return!1;return!0}function m8(e,n){return ya(e.valueOf(),n.valueOf())}function h8(e,n){return e.source===n.source&&e.flags===n.flags}function GP(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const i=new Array(r),o=e.values();let l,s;for(;(l=o.next())&&!l.done;){const u=n.values();let f=!1,m=0;for(;(s=u.next())&&!s.done;){if(!i[m]&&t.equals(l.value,s.value,l.value,s.value,e,n,t)){f=i[m]=!0;break}m++}if(!f)return!1}return!0}function Ud(e,n){let t=e.byteLength;if(n.byteLength!==t||e.byteOffset!==n.byteOffset)return!1;for(;t-- >0;)if(e[t]!==n[t])return!1;return!0}function v8(e,n){return e.hostname===n.hostname&&e.pathname===n.pathname&&e.protocol===n.protocol&&e.port===n.port&&e.hash===n.hash&&e.username===n.username&&e.password===n.password}function R_(e,n,t,r){return(r===i8||r===r8||r===t8)&&(e.$$typeof||n.$$typeof)?!0:n8(n,r)&&t.equals(e[r],n[r],r,r,e,n,t)}const p8="[object ArrayBuffer]",y8="[object Arguments]",g8="[object Boolean]",E8="[object DataView]",C8="[object Date]",b8="[object Error]",S8="[object Map]",w8="[object Number]",x8="[object Object]",A8="[object RegExp]",U8="[object Set]",T8="[object String]",P8={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},I8="[object URL]",O8=Object.prototype.toString;function k8({areArrayBuffersEqual:e,areArraysEqual:n,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:i,areFunctionsEqual:o,areMapsEqual:l,areNumbersEqual:s,areObjectsEqual:u,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:h,areTypedArraysEqual:p,areUrlsEqual:g,unknownTagComparators:b}){return function(E,w,x){if(E===w)return!0;if(E==null||w==null)return!1;const U=typeof E;if(U!==typeof w)return!1;if(U!=="object")return U==="number"?s(E,w,x):U==="function"?o(E,w,x):!1;const I=E.constructor;if(I!==w.constructor)return!1;if(I===Object)return u(E,w,x);if(Array.isArray(E))return n(E,w,x);if(I===Date)return r(E,w,x);if(I===RegExp)return m(E,w,x);if(I===Map)return l(E,w,x);if(I===Set)return h(E,w,x);const A=O8.call(E);if(A===C8)return r(E,w,x);if(A===A8)return m(E,w,x);if(A===S8)return l(E,w,x);if(A===U8)return h(E,w,x);if(A===x8)return typeof E.then!="function"&&typeof w.then!="function"&&u(E,w,x);if(A===I8)return g(E,w,x);if(A===b8)return i(E,w,x);if(A===y8)return u(E,w,x);if(P8[A])return p(E,w,x);if(A===p8)return e(E,w,x);if(A===E8)return t(E,w,x);if(A===g8||A===w8||A===T8)return f(E,w,x);if(b){let P=b[A];if(!P){const T=e8(E);T&&(P=b[T])}if(P)return P(E,w,x)}return!1}}function M8({circular:e,createCustomConfig:n,strict:t}){let r={areArrayBuffersEqual:a8,areArraysEqual:t?qc:o8,areDataViewsEqual:c8,areDatesEqual:l8,areErrorsEqual:s8,areFunctionsEqual:u8,areMapsEqual:t?Ag($P,qc):$P,areNumbersEqual:d8,areObjectsEqual:t?qc:f8,arePrimitiveWrappersEqual:m8,areRegExpsEqual:h8,areSetsEqual:t?Ag(GP,qc):GP,areTypedArraysEqual:t?Ag(Ud,qc):Ud,areUrlsEqual:v8,unknownTagComparators:void 0};if(n&&(r=Object.assign({},r,n(r))),e){const i=_u(r.areArraysEqual),o=_u(r.areMapsEqual),l=_u(r.areObjectsEqual),s=_u(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:i,areMapsEqual:o,areObjectsEqual:l,areSetsEqual:s})}return r}function _8(e){return function(n,t,r,i,o,l,s){return e(n,t,s)}}function N8({circular:e,comparator:n,createState:t,equals:r,strict:i}){if(t)return function(s,u){const{cache:f=e?new WeakMap:void 0,meta:m}=t();return n(s,u,{cache:f,equals:r,meta:m,strict:i})};if(e)return function(s,u){return n(s,u,{cache:new WeakMap,equals:r,meta:void 0,strict:i})};const o={cache:void 0,equals:r,meta:void 0,strict:i};return function(s,u){return n(s,u,o)}}const L8=Pi();Pi({strict:!0});Pi({circular:!0});Pi({circular:!0,strict:!0});Pi({createInternalComparator:()=>ya});Pi({strict:!0,createInternalComparator:()=>ya});Pi({circular:!0,createInternalComparator:()=>ya});Pi({circular:!0,createInternalComparator:()=>ya,strict:!0});function Pi(e={}){const{circular:n=!1,createInternalComparator:t,createState:r,strict:i=!1}=e,o=M8(e),l=k8(o),s=t?t(l):_8(l);return N8({circular:n,comparator:l,createState:r,equals:s,strict:i})}function R8(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function HP(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function i(o){t<0&&(t=o),o-t>n?(e(o),t=-1):R8(i)};requestAnimationFrame(r)}function Z1(e){"@babel/helpers - typeof";return Z1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z1(e)}function j8(e){return F8(e)||z8(e)||B8(e)||D8()}function D8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B8(e,n){if(e){if(typeof e=="string")return WP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return WP(e,n)}}function WP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F8(e){if(Array.isArray(e))return e}function $8(){var e={},n=function(){return null},t=!1,r=function i(o){if(!t){if(Array.isArray(o)){if(!o.length)return;var l=o,s=j8(l),u=s[0],f=s.slice(1);if(typeof u=="number"){HP(i.bind(null,f),u);return}i(u),HP(i.bind(null,f));return}Z1(o)==="object"&&(e=o,n(e)),typeof o=="function"&&o()}};return{stop:function(){t=!0},start:function(o){t=!1,r(o)},subscribe:function(o){return n=o,function(){n=function(){return null}}}}}function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ml(e)}function VP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function KP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?VP(Object(t),!0).forEach(function(r){j_(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):VP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function j_(e,n,t){return n=G8(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G8(e){var n=H8(e,"string");return Ml(n)==="symbol"?n:String(n)}function H8(e,n){if(Ml(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ml(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var W8=function(n,t){return[Object.keys(n),Object.keys(t)].reduce(function(r,i){return r.filter(function(o){return i.includes(o)})})},V8=function(n){return n},K8=function(n){return n.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},rl=function(n,t){return Object.keys(t).reduce(function(r,i){return KP(KP({},r),{},j_({},i,n(i,t[i])))},{})},qP=function(n,t,r){return n.map(function(i){return"".concat(K8(i)," ").concat(t,"ms ").concat(r)}).join(",")};function q8(e,n){return J8(e)||X8(e,n)||D_(e,n)||Y8()}function Y8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X8(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function J8(e){if(Array.isArray(e))return e}function Z8(e){return n9(e)||e9(e)||D_(e)||Q8()}function Q8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D_(e,n){if(e){if(typeof e=="string")return Q1(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q1(e,n)}}function e9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function n9(e){if(Array.isArray(e))return Q1(e)}function Q1(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Td=1e-4,B_=function(n,t){return[0,3*n,3*t-6*n,3*n-3*t+1]},z_=function(n,t){return n.map(function(r,i){return r*Math.pow(t,i)}).reduce(function(r,i){return r+i})},YP=function(n,t){return function(r){var i=B_(n,t);return z_(i,r)}},t9=function(n,t){return function(r){var i=B_(n,t),o=[].concat(Z8(i.map(function(l,s){return l*s}).slice(1)),[0]);return z_(o,r)}},XP=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=t[0],o=t[1],l=t[2],s=t[3];if(t.length===1)switch(t[0]){case"linear":i=0,o=0,l=1,s=1;break;case"ease":i=.25,o=.1,l=.25,s=1;break;case"ease-in":i=.42,o=0,l=1,s=1;break;case"ease-out":i=.42,o=0,l=.58,s=1;break;case"ease-in-out":i=0,o=0,l=.58,s=1;break;default:{var u=t[0].split("(");if(u[0]==="cubic-bezier"&&u[1].split(")")[0].split(",").length===4){var f=u[1].split(")")[0].split(",").map(function(E){return parseFloat(E)}),m=q8(f,4);i=m[0],o=m[1],l=m[2],s=m[3]}}}var h=YP(i,l),p=YP(o,s),g=t9(i,l),b=function(w){return w>1?1:w<0?0:w},y=function(w){for(var x=w>1?1:w,U=x,I=0;I<8;++I){var A=h(U)-x,P=g(U);if(Math.abs(A-x)<Td||P<Td)return p(U);U=b(U-A/P)}return p(U)};return y.isStepper=!1,y},r9=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.stiff,r=t===void 0?100:t,i=n.damping,o=i===void 0?8:i,l=n.dt,s=l===void 0?17:l,u=function(m,h,p){var g=-(m-h)*r,b=p*o,y=p+(g-b)*s/1e3,E=p*s/1e3+m;return Math.abs(E-h)<Td&&Math.abs(y)<Td?[h,0]:[E,y]};return u.isStepper=!0,u.dt=s,u},i9=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=t[0];if(typeof i=="string")switch(i){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return XP(i);case"spring":return r9();default:if(i.split("(")[0]==="cubic-bezier")return XP(i)}return typeof i=="function"?i:null};function _l(e){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_l(e)}function JP(e){return c9(e)||o9(e)||F_(e)||a9()}function a9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function c9(e){if(Array.isArray(e))return nE(e)}function ZP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Mn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ZP(Object(t),!0).forEach(function(r){eE(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ZP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function eE(e,n,t){return n=l9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l9(e){var n=s9(e,"string");return _l(n)==="symbol"?n:String(n)}function s9(e,n){if(_l(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_l(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function u9(e,n){return m9(e)||f9(e,n)||F_(e,n)||d9()}function d9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F_(e,n){if(e){if(typeof e=="string")return nE(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return nE(e,n)}}function nE(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function m9(e){if(Array.isArray(e))return e}var Pd=function(n,t,r){return n+(t-n)*r},tE=function(n){var t=n.from,r=n.to;return t!==r},h9=function e(n,t,r){var i=rl(function(o,l){if(tE(l)){var s=n(l.from,l.to,l.velocity),u=u9(s,2),f=u[0],m=u[1];return Mn(Mn({},l),{},{from:f,velocity:m})}return l},t);return r<1?rl(function(o,l){return tE(l)?Mn(Mn({},l),{},{velocity:Pd(l.velocity,i[o].velocity,r),from:Pd(l.from,i[o].from,r)}):l},t):e(n,i,r-1)};const v9=(function(e,n,t,r,i){var o=W8(e,n),l=o.reduce(function(E,w){return Mn(Mn({},E),{},eE({},w,[e[w],n[w]]))},{}),s=o.reduce(function(E,w){return Mn(Mn({},E),{},eE({},w,{from:e[w],velocity:0,to:n[w]}))},{}),u=-1,f,m,h=function(){return null},p=function(){return rl(function(w,x){return x.from},s)},g=function(){return!Object.values(s).filter(tE).length},b=function(w){f||(f=w);var x=w-f,U=x/t.dt;s=h9(t,s,U),i(Mn(Mn(Mn({},e),n),p())),f=w,g()||(u=requestAnimationFrame(h))},y=function(w){m||(m=w);var x=(w-m)/r,U=rl(function(A,P){return Pd.apply(void 0,JP(P).concat([t(x)]))},l);if(i(Mn(Mn(Mn({},e),n),U)),x<1)u=requestAnimationFrame(h);else{var I=rl(function(A,P){return Pd.apply(void 0,JP(P).concat([t(1)]))},l);i(Mn(Mn(Mn({},e),n),I))}};return h=t.isStepper?b:y,function(){return requestAnimationFrame(h),function(){cancelAnimationFrame(u)}}});function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bo(e)}var p9=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function y9(e,n){if(e==null)return{};var t=g9(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function g9(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Ug(e){return S9(e)||b9(e)||C9(e)||E9()}function E9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C9(e,n){if(e){if(typeof e=="string")return rE(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rE(e,n)}}function b9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S9(e){if(Array.isArray(e))return rE(e)}function rE(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function QP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ft(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?QP(Object(t),!0).forEach(function(r){Qc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):QP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Qc(e,n,t){return n=$_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w9(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function x9(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$_(r.key),r)}}function A9(e,n,t){return n&&x9(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $_(e){var n=U9(e,"string");return bo(n)==="symbol"?n:String(n)}function U9(e,n){if(bo(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function T9(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&iE(e,n)}function iE(e,n){return iE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},iE(e,n)}function P9(e){var n=I9();return function(){var r=Id(e),i;if(n){var o=Id(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return aE(this,i)}}function aE(e,n){if(n&&(bo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oE(e)}function oE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I9(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Id(e){return Id=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Id(e)}var Zt=(function(e){T9(t,e);var n=P9(t);function t(r,i){var o;w9(this,t),o=n.call(this,r,i);var l=o.props,s=l.isActive,u=l.attributeName,f=l.from,m=l.to,h=l.steps,p=l.children,g=l.duration;if(o.handleStyleChange=o.handleStyleChange.bind(oE(o)),o.changeStyle=o.changeStyle.bind(oE(o)),!s||g<=0)return o.state={style:{}},typeof p=="function"&&(o.state={style:m}),aE(o);if(h&&h.length)o.state={style:h[0].style};else if(f){if(typeof p=="function")return o.state={style:f},aE(o);o.state={style:u?Qc({},u,f):f}}else o.state={style:{}};return o}return A9(t,[{key:"componentDidMount",value:function(){var i=this.props,o=i.isActive,l=i.canBegin;this.mounted=!0,!(!o||!l)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(i){var o=this.props,l=o.isActive,s=o.canBegin,u=o.attributeName,f=o.shouldReAnimate,m=o.to,h=o.from,p=this.state.style;if(s){if(!l){var g={style:u?Qc({},u,m):m};this.state&&p&&(u&&p[u]!==m||!u&&p!==m)&&this.setState(g);return}if(!(L8(i.to,m)&&i.canBegin&&i.isActive)){var b=!i.canBegin||!i.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var y=b||f?h:i.to;if(this.state&&p){var E={style:u?Qc({},u,y):y};(u&&p[u]!==y||!u&&p!==y)&&this.setState(E)}this.runAnimation(Ft(Ft({},this.props),{},{from:y,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),i&&i()}},{key:"handleStyleChange",value:function(i){this.changeStyle(i)}},{key:"changeStyle",value:function(i){this.mounted&&this.setState({style:i})}},{key:"runJSAnimation",value:function(i){var o=this,l=i.from,s=i.to,u=i.duration,f=i.easing,m=i.begin,h=i.onAnimationEnd,p=i.onAnimationStart,g=v9(l,s,i9(f),u,this.changeStyle),b=function(){o.stopJSAnimation=g()};this.manager.start([p,m,b,u,h])}},{key:"runStepAnimation",value:function(i){var o=this,l=i.steps,s=i.begin,u=i.onAnimationStart,f=l[0],m=f.style,h=f.duration,p=h===void 0?0:h,g=function(y,E,w){if(w===0)return y;var x=E.duration,U=E.easing,I=U===void 0?"ease":U,A=E.style,P=E.properties,T=E.onAnimationEnd,M=w>0?l[w-1]:E,N=P||Object.keys(A);if(typeof I=="function"||I==="spring")return[].concat(Ug(y),[o.runJSAnimation.bind(o,{from:M.style,to:A,duration:x,easing:I}),x]);var $=qP(N,x,I),z=Ft(Ft(Ft({},M.style),A),{},{transition:$});return[].concat(Ug(y),[z,x,T]).filter(V8)};return this.manager.start([u].concat(Ug(l.reduce(g,[m,Math.max(p,s)])),[i.onAnimationEnd]))}},{key:"runAnimation",value:function(i){this.manager||(this.manager=$8());var o=i.begin,l=i.duration,s=i.attributeName,u=i.to,f=i.easing,m=i.onAnimationStart,h=i.onAnimationEnd,p=i.steps,g=i.children,b=this.manager;if(this.unSubscribe=b.subscribe(this.handleStyleChange),typeof f=="function"||typeof g=="function"||f==="spring"){this.runJSAnimation(i);return}if(p.length>1){this.runStepAnimation(i);return}var y=s?Qc({},s,u):u,E=qP(Object.keys(y),l,f);b.start([m,o,Ft(Ft({},y),{},{transition:E}),l,h])}},{key:"render",value:function(){var i=this.props,o=i.children;i.begin;var l=i.duration;i.attributeName,i.easing;var s=i.isActive;i.steps,i.from,i.to,i.canBegin,i.onAnimationEnd,i.shouldReAnimate,i.onAnimationReStart;var u=y9(i,p9),f=_.Children.count(o),m=this.state.style;if(typeof o=="function")return o(m);if(!s||f===0||l<=0)return o;var h=function(g){var b=g.props,y=b.style,E=y===void 0?{}:y,w=b.className,x=_.cloneElement(g,Ft(Ft({},u),{},{style:Ft(Ft({},E),m),className:w}));return x};return f===1?h(_.Children.only(o)):D.createElement("div",null,_.Children.map(o,function(p){return h(p)}))}}]),t})(_.PureComponent);Zt.displayName="Animate";Zt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Zt.propTypes={from:He.oneOfType([He.object,He.string]),to:He.oneOfType([He.object,He.string]),attributeName:He.string,duration:He.number,begin:He.number,easing:He.oneOfType([He.string,He.func]),steps:He.arrayOf(He.shape({duration:He.number.isRequired,style:He.object.isRequired,easing:He.oneOfType([He.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),He.func]),properties:He.arrayOf("string"),onAnimationEnd:He.func})),children:He.oneOfType([He.node,He.func]),isActive:He.bool,canBegin:He.bool,onAnimationEnd:He.func,shouldReAnimate:He.bool,onAnimationStart:He.func,onAnimationReStart:He.func};function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Nl(e)}function Od(){return Od=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Od.apply(this,arguments)}function O9(e,n){return N9(e)||_9(e,n)||M9(e,n)||k9()}function k9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M9(e,n){if(e){if(typeof e=="string")return eI(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return eI(e,n)}}function eI(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function N9(e){if(Array.isArray(e))return e}function nI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function tI(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nI(Object(t),!0).forEach(function(r){L9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function L9(e,n,t){return n=R9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R9(e){var n=j9(e,"string");return Nl(n)=="symbol"?n:n+""}function j9(e,n){if(Nl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Nl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var rI=function(n,t,r,i,o){var l=Math.min(Math.abs(r)/2,Math.abs(i)/2),s=i>=0?1:-1,u=r>=0?1:-1,f=i>=0&&r>=0||i<0&&r<0?1:0,m;if(l>0&&o instanceof Array){for(var h=[0,0,0,0],p=0,g=4;p<g;p++)h[p]=o[p]>l?l:o[p];m="M".concat(n,",").concat(t+s*h[0]),h[0]>0&&(m+="A ".concat(h[0],",").concat(h[0],",0,0,").concat(f,",").concat(n+u*h[0],",").concat(t)),m+="L ".concat(n+r-u*h[1],",").concat(t),h[1]>0&&(m+="A ".concat(h[1],",").concat(h[1],",0,0,").concat(f,`,
        `).concat(n+r,",").concat(t+s*h[1])),m+="L ".concat(n+r,",").concat(t+i-s*h[2]),h[2]>0&&(m+="A ".concat(h[2],",").concat(h[2],",0,0,").concat(f,`,
        `).concat(n+r-u*h[2],",").concat(t+i)),m+="L ".concat(n+u*h[3],",").concat(t+i),h[3]>0&&(m+="A ".concat(h[3],",").concat(h[3],",0,0,").concat(f,`,
        `).concat(n,",").concat(t+i-s*h[3])),m+="Z"}else if(l>0&&o===+o&&o>0){var b=Math.min(l,o);m="M ".concat(n,",").concat(t+s*b,`
            A `).concat(b,",").concat(b,",0,0,").concat(f,",").concat(n+u*b,",").concat(t,`
            L `).concat(n+r-u*b,",").concat(t,`
            A `).concat(b,",").concat(b,",0,0,").concat(f,",").concat(n+r,",").concat(t+s*b,`
            L `).concat(n+r,",").concat(t+i-s*b,`
            A `).concat(b,",").concat(b,",0,0,").concat(f,",").concat(n+r-u*b,",").concat(t+i,`
            L `).concat(n+u*b,",").concat(t+i,`
            A `).concat(b,",").concat(b,",0,0,").concat(f,",").concat(n,",").concat(t+i-s*b," Z")}else m="M ".concat(n,",").concat(t," h ").concat(r," v ").concat(i," h ").concat(-r," Z");return m},D9=function(n,t){if(!n||!t)return!1;var r=n.x,i=n.y,o=t.x,l=t.y,s=t.width,u=t.height;if(Math.abs(s)>0&&Math.abs(u)>0){var f=Math.min(o,o+s),m=Math.max(o,o+s),h=Math.min(l,l+u),p=Math.max(l,l+u);return r>=f&&r<=m&&i>=h&&i<=p}return!1},B9={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},HC=function(n){var t=tI(tI({},B9),n),r=_.useRef(),i=_.useState(-1),o=O9(i,2),l=o[0],s=o[1];_.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var I=r.current.getTotalLength();I&&s(I)}catch{}},[]);var u=t.x,f=t.y,m=t.width,h=t.height,p=t.radius,g=t.className,b=t.animationEasing,y=t.animationDuration,E=t.animationBegin,w=t.isAnimationActive,x=t.isUpdateAnimationActive;if(u!==+u||f!==+f||m!==+m||h!==+h||m===0||h===0)return null;var U=Re("recharts-rectangle",g);return x?D.createElement(Zt,{canBegin:l>0,from:{width:m,height:h,x:u,y:f},to:{width:m,height:h,x:u,y:f},duration:y,animationEasing:b,isActive:x},function(I){var A=I.width,P=I.height,T=I.x,M=I.y;return D.createElement(Zt,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:E,duration:y,isActive:w,easing:b},D.createElement("path",Od({},Oe(t,!0),{className:U,d:rI(T,M,A,P,p),ref:r})))}):D.createElement("path",Od({},Oe(t,!0),{className:U,d:rI(u,f,m,h,p)}))};function cE(){return cE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cE.apply(this,arguments)}var kf=function(n){var t=n.cx,r=n.cy,i=n.r,o=n.className,l=Re("recharts-dot",o);return t===+t&&r===+r&&i===+i?D.createElement("circle",cE({},Oe(n,!1),Ju(n),{className:l,cx:t,cy:r,r:i})):null};function Ll(e){"@babel/helpers - typeof";return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ll(e)}var z9=["x","y","top","left","width","height","className"];function lE(){return lE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lE.apply(this,arguments)}function iI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function F9(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?iI(Object(t),!0).forEach(function(r){$9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):iI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $9(e,n,t){return n=G9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G9(e){var n=H9(e,"string");return Ll(n)=="symbol"?n:n+""}function H9(e,n){if(Ll(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ll(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function W9(e,n){if(e==null)return{};var t=V9(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function V9(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var K9=function(n,t,r,i,o,l){return"M".concat(n,",").concat(o,"v").concat(i,"M").concat(l,",").concat(t,"h").concat(r)},q9=function(n){var t=n.x,r=t===void 0?0:t,i=n.y,o=i===void 0?0:i,l=n.top,s=l===void 0?0:l,u=n.left,f=u===void 0?0:u,m=n.width,h=m===void 0?0:m,p=n.height,g=p===void 0?0:p,b=n.className,y=W9(n,z9),E=F9({x:r,y:o,top:s,left:f,width:h,height:g},y);return!fe(r)||!fe(o)||!fe(h)||!fe(g)||!fe(s)||!fe(f)?null:D.createElement("path",lE({},Oe(E,!0),{className:Re("recharts-cross",b),d:K9(r,o,h,g,s,f)}))},Tg,aI;function Y9(){if(aI)return Tg;aI=1;var e=uM(),n=e(Object.getPrototypeOf,Object);return Tg=n,Tg}var Pg,oI;function X9(){if(oI)return Pg;oI=1;var e=$r(),n=Y9(),t=Gr(),r="[object Object]",i=Function.prototype,o=Object.prototype,l=i.toString,s=o.hasOwnProperty,u=l.call(Object);function f(m){if(!t(m)||e(m)!=r)return!1;var h=n(m);if(h===null)return!0;var p=s.call(h,"constructor")&&h.constructor;return typeof p=="function"&&p instanceof p&&l.call(p)==u}return Pg=f,Pg}var J9=X9();const Z9=Ye(J9);var Ig,cI;function Q9(){if(cI)return Ig;cI=1;var e=$r(),n=Gr(),t="[object Boolean]";function r(i){return i===!0||i===!1||n(i)&&e(i)==t}return Ig=r,Ig}var e7=Q9();const n7=Ye(e7);function Rl(e){"@babel/helpers - typeof";return Rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rl(e)}function kd(){return kd=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kd.apply(this,arguments)}function t7(e,n){return o7(e)||a7(e,n)||i7(e,n)||r7()}function r7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i7(e,n){if(e){if(typeof e=="string")return lI(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lI(e,n)}}function lI(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a7(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function o7(e){if(Array.isArray(e))return e}function sI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function uI(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sI(Object(t),!0).forEach(function(r){c7(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function c7(e,n,t){return n=l7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l7(e){var n=s7(e,"string");return Rl(n)=="symbol"?n:n+""}function s7(e,n){if(Rl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Rl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var dI=function(n,t,r,i,o){var l=r-i,s;return s="M ".concat(n,",").concat(t),s+="L ".concat(n+r,",").concat(t),s+="L ".concat(n+r-l/2,",").concat(t+o),s+="L ".concat(n+r-l/2-i,",").concat(t+o),s+="L ".concat(n,",").concat(t," Z"),s},u7={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},d7=function(n){var t=uI(uI({},u7),n),r=_.useRef(),i=_.useState(-1),o=t7(i,2),l=o[0],s=o[1];_.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var U=r.current.getTotalLength();U&&s(U)}catch{}},[]);var u=t.x,f=t.y,m=t.upperWidth,h=t.lowerWidth,p=t.height,g=t.className,b=t.animationEasing,y=t.animationDuration,E=t.animationBegin,w=t.isUpdateAnimationActive;if(u!==+u||f!==+f||m!==+m||h!==+h||p!==+p||m===0&&h===0||p===0)return null;var x=Re("recharts-trapezoid",g);return w?D.createElement(Zt,{canBegin:l>0,from:{upperWidth:0,lowerWidth:0,height:p,x:u,y:f},to:{upperWidth:m,lowerWidth:h,height:p,x:u,y:f},duration:y,animationEasing:b,isActive:w},function(U){var I=U.upperWidth,A=U.lowerWidth,P=U.height,T=U.x,M=U.y;return D.createElement(Zt,{canBegin:l>0,from:"0px ".concat(l===-1?1:l,"px"),to:"".concat(l,"px 0px"),attributeName:"strokeDasharray",begin:E,duration:y,easing:b},D.createElement("path",kd({},Oe(t,!0),{className:x,d:dI(T,M,I,A,P),ref:r})))}):D.createElement("g",null,D.createElement("path",kd({},Oe(t,!0),{className:x,d:dI(u,f,m,h,p)})))},f7=["option","shapeType","propTransformer","activeClassName","isActive"];function jl(e){"@babel/helpers - typeof";return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jl(e)}function m7(e,n){if(e==null)return{};var t=h7(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function h7(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function fI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Md(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?fI(Object(t),!0).forEach(function(r){v7(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function v7(e,n,t){return n=p7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p7(e){var n=y7(e,"string");return jl(n)=="symbol"?n:n+""}function y7(e,n){if(jl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(jl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function g7(e,n){return Md(Md({},n),e)}function E7(e,n){return e==="symbols"}function mI(e){var n=e.shapeType,t=e.elementProps;switch(n){case"rectangle":return D.createElement(HC,t);case"trapezoid":return D.createElement(d7,t);case"sector":return D.createElement(L_,t);case"symbols":if(E7(n))return D.createElement(gf,t);break;default:return null}}function C7(e){return _.isValidElement(e)?e.props:e}function sE(e){var n=e.option,t=e.shapeType,r=e.propTransformer,i=r===void 0?g7:r,o=e.activeClassName,l=o===void 0?"recharts-active-shape":o,s=e.isActive,u=m7(e,f7),f;if(_.isValidElement(n))f=_.cloneElement(n,Md(Md({},u),C7(n)));else if(Me(n))f=n(u);else if(Z9(n)&&!n7(n)){var m=i(n,u);f=D.createElement(mI,{shapeType:t,elementProps:m})}else{var h=u;f=D.createElement(mI,{shapeType:t,elementProps:h})}return s?D.createElement($e,{className:l},f):f}function Mf(e,n){return n!=null&&"trapezoids"in e.props}function _f(e,n){return n!=null&&"sectors"in e.props}function Dl(e,n){return n!=null&&"points"in e.props}function b7(e,n){var t,r,i=e.x===(n==null||(t=n.labelViewBox)===null||t===void 0?void 0:t.x)||e.x===n.x,o=e.y===(n==null||(r=n.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===n.y;return i&&o}function S7(e,n){var t=e.endAngle===n.endAngle,r=e.startAngle===n.startAngle;return t&&r}function w7(e,n){var t=e.x===n.x,r=e.y===n.y,i=e.z===n.z;return t&&r&&i}function x7(e,n){var t;return Mf(e,n)?t=b7:_f(e,n)?t=S7:Dl(e,n)&&(t=w7),t}function A7(e,n){var t;return Mf(e,n)?t="trapezoids":_f(e,n)?t="sectors":Dl(e,n)&&(t="points"),t}function U7(e,n){if(Mf(e,n)){var t;return(t=n.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(_f(e,n)){var r;return(r=n.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Dl(e,n)?n.payload:{}}function T7(e){var n=e.activeTooltipItem,t=e.graphicalItem,r=e.itemData,i=A7(t,n),o=U7(t,n),l=r.filter(function(u,f){var m=sa(o,u),h=t.props[i].filter(function(b){var y=x7(t,n);return y(b,n)}),p=t.props[i].indexOf(h[h.length-1]),g=f===p;return m&&g}),s=r.indexOf(l[l.length-1]);return s}var Og,hI;function P7(){if(hI)return Og;hI=1;var e=Math.ceil,n=Math.max;function t(r,i,o,l){for(var s=-1,u=n(e((i-r)/(o||1)),0),f=Array(u);u--;)f[l?u:++s]=r,r+=o;return f}return Og=t,Og}var kg,vI;function G_(){if(vI)return kg;vI=1;var e=UM(),n=1/0,t=17976931348623157e292;function r(i){if(!i)return i===0?i:0;if(i=e(i),i===n||i===-n){var o=i<0?-1:1;return o*t}return i===i?i:0}return kg=r,kg}var Mg,pI;function I7(){if(pI)return Mg;pI=1;var e=P7(),n=bf(),t=G_();function r(i){return function(o,l,s){return s&&typeof s!="number"&&n(o,l,s)&&(l=s=void 0),o=t(o),l===void 0?(l=o,o=0):l=t(l),s=s===void 0?o<l?1:-1:t(s),e(o,l,s,i)}}return Mg=r,Mg}var _g,yI;function O7(){if(yI)return _g;yI=1;var e=I7(),n=e();return _g=n,_g}var k7=O7();const _d=Ye(k7);function Bl(e){"@babel/helpers - typeof";return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bl(e)}function gI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function EI(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gI(Object(t),!0).forEach(function(r){H_(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function H_(e,n,t){return n=M7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M7(e){var n=_7(e,"string");return Bl(n)=="symbol"?n:n+""}function _7(e,n){if(Bl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Bl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var N7=["Webkit","Moz","O","ms"],L7=function(n,t){var r=n.replace(/(\w)/,function(o){return o.toUpperCase()}),i=N7.reduce(function(o,l){return EI(EI({},o),{},H_({},l+r,t))},{});return i[n]=t,i};function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},So(e)}function Nd(){return Nd=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Nd.apply(this,arguments)}function CI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ng(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?CI(Object(t),!0).forEach(function(r){dt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):CI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function R7(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bI(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,V_(r.key),r)}}function j7(e,n,t){return n&&bI(e.prototype,n),t&&bI(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function D7(e,n,t){return n=Ld(n),B7(e,W_()?Reflect.construct(n,t||[],Ld(e).constructor):n.apply(e,t))}function B7(e,n){if(n&&(So(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z7(e)}function z7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(W_=function(){return!!e})()}function Ld(e){return Ld=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ld(e)}function F7(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&uE(e,n)}function uE(e,n){return uE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},uE(e,n)}function dt(e,n,t){return n=V_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V_(e){var n=$7(e,"string");return So(n)=="symbol"?n:n+""}function $7(e,n){if(So(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(So(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var G7=function(n){var t=n.data,r=n.startIndex,i=n.endIndex,o=n.x,l=n.width,s=n.travellerWidth;if(!t||!t.length)return{};var u=t.length,f=nl().domain(_d(0,u)).range([o,o+l-s]),m=f.domain().map(function(h){return f(h)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(i),scale:f,scaleValues:m}},SI=function(n){return n.changedTouches&&!!n.changedTouches.length},wo=(function(e){function n(t){var r;return R7(this,n),r=D7(this,n,[t]),dt(r,"handleDrag",function(i){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(i):r.state.isSlideMoving&&r.handleSlideDrag(i)}),dt(r,"handleTouchMove",function(i){i.changedTouches!=null&&i.changedTouches.length>0&&r.handleDrag(i.changedTouches[0])}),dt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var i=r.props,o=i.endIndex,l=i.onDragEnd,s=i.startIndex;l==null||l({endIndex:o,startIndex:s})}),r.detachDragEndListener()}),dt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),dt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),dt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),dt(r,"handleSlideDragStart",function(i){var o=SI(i)?i.changedTouches[0]:i;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:o.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return F7(n,e),j7(n,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var i=r.startX,o=r.endX,l=this.state.scaleValues,s=this.props,u=s.gap,f=s.data,m=f.length-1,h=Math.min(i,o),p=Math.max(i,o),g=n.getIndexInRange(l,h),b=n.getIndexInRange(l,p);return{startIndex:g-g%u,endIndex:b===m?m:b-b%u}}},{key:"getTextOfTick",value:function(r){var i=this.props,o=i.data,l=i.tickFormatter,s=i.dataKey,u=wn(o[r],s,r);return Me(l)?l(u,r):u}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var i=this.state,o=i.slideMoveStartX,l=i.startX,s=i.endX,u=this.props,f=u.x,m=u.width,h=u.travellerWidth,p=u.startIndex,g=u.endIndex,b=u.onChange,y=r.pageX-o;y>0?y=Math.min(y,f+m-h-s,f+m-h-l):y<0&&(y=Math.max(y,f-l,f-s));var E=this.getIndex({startX:l+y,endX:s+y});(E.startIndex!==p||E.endIndex!==g)&&b&&b(E),this.setState({startX:l+y,endX:s+y,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,i){var o=SI(i)?i.changedTouches[0]:i;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:o.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var i=this.state,o=i.brushMoveStartX,l=i.movingTravellerId,s=i.endX,u=i.startX,f=this.state[l],m=this.props,h=m.x,p=m.width,g=m.travellerWidth,b=m.onChange,y=m.gap,E=m.data,w={startX:this.state.startX,endX:this.state.endX},x=r.pageX-o;x>0?x=Math.min(x,h+p-g-f):x<0&&(x=Math.max(x,h-f)),w[l]=f+x;var U=this.getIndex(w),I=U.startIndex,A=U.endIndex,P=function(){var M=E.length-1;return l==="startX"&&(s>u?I%y===0:A%y===0)||s<u&&A===M||l==="endX"&&(s>u?A%y===0:I%y===0)||s>u&&A===M};this.setState(dt(dt({},l,f+x),"brushMoveStartX",r.pageX),function(){b&&P()&&b(U)})}},{key:"handleTravellerMoveKeyboard",value:function(r,i){var o=this,l=this.state,s=l.scaleValues,u=l.startX,f=l.endX,m=this.state[i],h=s.indexOf(m);if(h!==-1){var p=h+r;if(!(p===-1||p>=s.length)){var g=s[p];i==="startX"&&g>=f||i==="endX"&&g<=u||this.setState(dt({},i,g),function(){o.props.onChange(o.getIndex({startX:o.state.startX,endX:o.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,i=r.x,o=r.y,l=r.width,s=r.height,u=r.fill,f=r.stroke;return D.createElement("rect",{stroke:f,fill:u,x:i,y:o,width:l,height:s})}},{key:"renderPanorama",value:function(){var r=this.props,i=r.x,o=r.y,l=r.width,s=r.height,u=r.data,f=r.children,m=r.padding,h=_.Children.only(f);return h?D.cloneElement(h,{x:i,y:o,width:l,height:s,margin:m,compact:!0,data:u}):null}},{key:"renderTravellerLayer",value:function(r,i){var o,l,s=this,u=this.props,f=u.y,m=u.travellerWidth,h=u.height,p=u.traveller,g=u.ariaLabel,b=u.data,y=u.startIndex,E=u.endIndex,w=Math.max(r,this.props.x),x=Ng(Ng({},Oe(this.props,!1)),{},{x:w,y:f,width:m,height:h}),U=g||"Min value: ".concat((o=b[y])===null||o===void 0?void 0:o.name,", Max value: ").concat((l=b[E])===null||l===void 0?void 0:l.name);return D.createElement($e,{tabIndex:0,role:"slider","aria-label":U,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[i],onTouchStart:this.travellerDragStartHandlers[i],onKeyDown:function(A){["ArrowLeft","ArrowRight"].includes(A.key)&&(A.preventDefault(),A.stopPropagation(),s.handleTravellerMoveKeyboard(A.key==="ArrowRight"?1:-1,i))},onFocus:function(){s.setState({isTravellerFocused:!0})},onBlur:function(){s.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},n.renderTraveller(p,x))}},{key:"renderSlide",value:function(r,i){var o=this.props,l=o.y,s=o.height,u=o.stroke,f=o.travellerWidth,m=Math.min(r,i)+f,h=Math.max(Math.abs(i-r)-f,0);return D.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:u,fillOpacity:.2,x:m,y:l,width:h,height:s})}},{key:"renderText",value:function(){var r=this.props,i=r.startIndex,o=r.endIndex,l=r.y,s=r.height,u=r.travellerWidth,f=r.stroke,m=this.state,h=m.startX,p=m.endX,g=5,b={pointerEvents:"none",fill:f};return D.createElement($e,{className:"recharts-brush-texts"},D.createElement(ld,Nd({textAnchor:"end",verticalAnchor:"middle",x:Math.min(h,p)-g,y:l+s/2},b),this.getTextOfTick(i)),D.createElement(ld,Nd({textAnchor:"start",verticalAnchor:"middle",x:Math.max(h,p)+u+g,y:l+s/2},b),this.getTextOfTick(o)))}},{key:"render",value:function(){var r=this.props,i=r.data,o=r.className,l=r.children,s=r.x,u=r.y,f=r.width,m=r.height,h=r.alwaysShowText,p=this.state,g=p.startX,b=p.endX,y=p.isTextActive,E=p.isSlideMoving,w=p.isTravellerMoving,x=p.isTravellerFocused;if(!i||!i.length||!fe(s)||!fe(u)||!fe(f)||!fe(m)||f<=0||m<=0)return null;var U=Re("recharts-brush",o),I=D.Children.count(l)===1,A=L7("userSelect","none");return D.createElement($e,{className:U,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:A},this.renderBackground(),I&&this.renderPanorama(),this.renderSlide(g,b),this.renderTravellerLayer(g,"startX"),this.renderTravellerLayer(b,"endX"),(y||E||w||x||h)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var i=r.x,o=r.y,l=r.width,s=r.height,u=r.stroke,f=Math.floor(o+s/2)-1;return D.createElement(D.Fragment,null,D.createElement("rect",{x:i,y:o,width:l,height:s,fill:u,stroke:"none"}),D.createElement("line",{x1:i+1,y1:f,x2:i+l-1,y2:f,fill:"none",stroke:"#fff"}),D.createElement("line",{x1:i+1,y1:f+2,x2:i+l-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,i){var o;return D.isValidElement(r)?o=D.cloneElement(r,i):Me(r)?o=r(i):o=n.renderDefaultTraveller(i),o}},{key:"getDerivedStateFromProps",value:function(r,i){var o=r.data,l=r.width,s=r.x,u=r.travellerWidth,f=r.updateId,m=r.startIndex,h=r.endIndex;if(o!==i.prevData||f!==i.prevUpdateId)return Ng({prevData:o,prevTravellerWidth:u,prevUpdateId:f,prevX:s,prevWidth:l},o&&o.length?G7({data:o,width:l,x:s,travellerWidth:u,startIndex:m,endIndex:h}):{scale:null,scaleValues:null});if(i.scale&&(l!==i.prevWidth||s!==i.prevX||u!==i.prevTravellerWidth)){i.scale.range([s,s+l-u]);var p=i.scale.domain().map(function(g){return i.scale(g)});return{prevData:o,prevTravellerWidth:u,prevUpdateId:f,prevX:s,prevWidth:l,startX:i.scale(r.startIndex),endX:i.scale(r.endIndex),scaleValues:p}}return null}},{key:"getIndexInRange",value:function(r,i){for(var o=r.length,l=0,s=o-1;s-l>1;){var u=Math.floor((l+s)/2);r[u]>i?s=u:l=u}return i>=r[s]?s:l}}])})(_.PureComponent);dt(wo,"displayName","Brush");dt(wo,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var Lg,wI;function H7(){if(wI)return Lg;wI=1;var e=pC();function n(t,r){var i;return e(t,function(o,l,s){return i=r(o,l,s),!i}),!!i}return Lg=n,Lg}var Rg,xI;function W7(){if(xI)return Rg;xI=1;var e=rM(),n=xi(),t=H7(),r=it(),i=bf();function o(l,s,u){var f=r(l)?e:t;return u&&i(l,s,u)&&(s=void 0),f(l,n(s,3))}return Rg=o,Rg}var V7=W7();const K7=Ye(V7);var vr=function(n,t){var r=n.alwaysShow,i=n.ifOverflow;return r&&(i="extendDomain"),i===t},jg,AI;function q7(){if(AI)return jg;AI=1;var e=bM();function n(t,r,i){r=="__proto__"&&e?e(t,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[r]=i}return jg=n,jg}var Dg,UI;function Y7(){if(UI)return Dg;UI=1;var e=q7(),n=EM(),t=xi();function r(i,o){var l={};return o=t(o,3),n(i,function(s,u,f){e(l,u,o(s,u,f))}),l}return Dg=r,Dg}var X7=Y7();const J7=Ye(X7);var Bg,TI;function Z7(){if(TI)return Bg;TI=1;function e(n,t){for(var r=-1,i=n==null?0:n.length;++r<i;)if(!t(n[r],r,n))return!1;return!0}return Bg=e,Bg}var zg,PI;function Q7(){if(PI)return zg;PI=1;var e=pC();function n(t,r){var i=!0;return e(t,function(o,l,s){return i=!!r(o,l,s),i}),i}return zg=n,zg}var Fg,II;function eY(){if(II)return Fg;II=1;var e=Z7(),n=Q7(),t=xi(),r=it(),i=bf();function o(l,s,u){var f=r(l)?e:n;return u&&i(l,s,u)&&(s=void 0),f(l,t(s,3))}return Fg=o,Fg}var nY=eY();const K_=Ye(nY);var tY=["x","y"];function zl(e){"@babel/helpers - typeof";return zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zl(e)}function dE(){return dE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dE.apply(this,arguments)}function OI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Yc(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?OI(Object(t),!0).forEach(function(r){rY(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rY(e,n,t){return n=iY(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function iY(e){var n=aY(e,"string");return zl(n)=="symbol"?n:n+""}function aY(e,n){if(zl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(zl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function oY(e,n){if(e==null)return{};var t=cY(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function cY(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function lY(e,n){var t=e.x,r=e.y,i=oY(e,tY),o="".concat(t),l=parseInt(o,10),s="".concat(r),u=parseInt(s,10),f="".concat(n.height||i.height),m=parseInt(f,10),h="".concat(n.width||i.width),p=parseInt(h,10);return Yc(Yc(Yc(Yc(Yc({},n),i),l?{x:l}:{}),u?{y:u}:{}),{},{height:m,width:p,name:n.name,radius:n.radius})}function kI(e){return D.createElement(sE,dE({shapeType:"rectangle",propTransformer:lY,activeClassName:"recharts-active-bar"},e))}var sY=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,i){if(typeof n=="number")return n;var o=typeof r=="number";return o?n(r,i):(o||da(),t)}},uY=["value","background"],q_;function xo(e){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xo(e)}function dY(e,n){if(e==null)return{};var t=fY(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function fY(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Rd(){return Rd=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Rd.apply(this,arguments)}function MI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function pn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?MI(Object(t),!0).forEach(function(r){pi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function mY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X_(r.key),r)}}function hY(e,n,t){return n&&_I(e.prototype,n),t&&_I(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function vY(e,n,t){return n=jd(n),pY(e,Y_()?Reflect.construct(n,t||[],jd(e).constructor):n.apply(e,t))}function pY(e,n){if(n&&(xo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yY(e)}function yY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Y_=function(){return!!e})()}function jd(e){return jd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},jd(e)}function gY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&fE(e,n)}function fE(e,n){return fE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fE(e,n)}function pi(e,n,t){return n=X_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X_(e){var n=EY(e,"string");return xo(n)=="symbol"?n:n+""}function EY(e,n){if(xo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(xo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ht=(function(e){function n(){var t;mY(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=vY(this,n,[].concat(i)),pi(t,"state",{isAnimationFinished:!1}),pi(t,"id",ha("recharts-bar-")),pi(t,"handleAnimationEnd",function(){var l=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),l&&l()}),pi(t,"handleAnimationStart",function(){var l=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),l&&l()}),t}return gY(n,e),hY(n,[{key:"renderRectanglesStatically",value:function(r){var i=this,o=this.props,l=o.shape,s=o.dataKey,u=o.activeIndex,f=o.activeBar,m=Oe(this.props,!1);return r&&r.map(function(h,p){var g=p===u,b=g?f:l,y=pn(pn(pn({},m),h),{},{isActive:g,option:b,index:p,dataKey:s,onAnimationStart:i.handleAnimationStart,onAnimationEnd:i.handleAnimationEnd});return D.createElement($e,Rd({className:"recharts-bar-rectangle"},ll(i.props,h,p),{key:"rectangle-".concat(h==null?void 0:h.x,"-").concat(h==null?void 0:h.y,"-").concat(h==null?void 0:h.value,"-").concat(p)}),D.createElement(kI,y))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,i=this.props,o=i.data,l=i.layout,s=i.isAnimationActive,u=i.animationBegin,f=i.animationDuration,m=i.animationEasing,h=i.animationId,p=this.state.prevData;return D.createElement(Zt,{begin:u,duration:f,isActive:s,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(g){var b=g.t,y=o.map(function(E,w){var x=p&&p[w];if(x){var U=mn(x.x,E.x),I=mn(x.y,E.y),A=mn(x.width,E.width),P=mn(x.height,E.height);return pn(pn({},E),{},{x:U(b),y:I(b),width:A(b),height:P(b)})}if(l==="horizontal"){var T=mn(0,E.height),M=T(b);return pn(pn({},E),{},{y:E.y+E.height-M,height:M})}var N=mn(0,E.width),$=N(b);return pn(pn({},E),{},{width:$})});return D.createElement($e,null,r.renderRectanglesStatically(y))})}},{key:"renderRectangles",value:function(){var r=this.props,i=r.data,o=r.isAnimationActive,l=this.state.prevData;return o&&i&&i.length&&(!l||!sa(l,i))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(i)}},{key:"renderBackground",value:function(){var r=this,i=this.props,o=i.data,l=i.dataKey,s=i.activeIndex,u=Oe(this.props.background,!1);return o.map(function(f,m){f.value;var h=f.background,p=dY(f,uY);if(!h)return null;var g=pn(pn(pn(pn(pn({},p),{},{fill:"#eee"},h),u),ll(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:l,index:m,className:"recharts-bar-background-rectangle"});return D.createElement(kI,Rd({key:"background-bar-".concat(m),option:r.props.background,isActive:m===s},g))})}},{key:"renderErrorBar",value:function(r,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,l=o.data,s=o.xAxis,u=o.yAxis,f=o.layout,m=o.children,h=tt(m,Jo);if(!h)return null;var p=f==="vertical"?l[0].height/2:l[0].width/2,g=function(E,w){var x=Array.isArray(E.value)?E.value[1]:E.value;return{x:E.x,y:E.y,value:x,errorVal:wn(E,w)}},b={clipPath:r?"url(#clipPath-".concat(i,")"):null};return D.createElement($e,b,h.map(function(y){return D.cloneElement(y,{key:"error-bar-".concat(i,"-").concat(y.props.dataKey),data:l,xAxis:s,yAxis:u,layout:f,offset:p,dataPointFormatter:g})}))}},{key:"render",value:function(){var r=this.props,i=r.hide,o=r.data,l=r.className,s=r.xAxis,u=r.yAxis,f=r.left,m=r.top,h=r.width,p=r.height,g=r.isAnimationActive,b=r.background,y=r.id;if(i||!o||!o.length)return null;var E=this.state.isAnimationFinished,w=Re("recharts-bar",l),x=s&&s.allowDataOverflow,U=u&&u.allowDataOverflow,I=x||U,A=ke(y)?this.id:y;return D.createElement($e,{className:w},x||U?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(A)},D.createElement("rect",{x:x?f:f-h/2,y:U?m:m-p/2,width:x?h:h*2,height:U?p:p*2}))):null,D.createElement($e,{className:"recharts-bar-rectangles",clipPath:I?"url(#clipPath-".concat(A,")"):null},b?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(I,A),(!g||E)&&hr.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:i.curData}:r.data!==i.curData?{curData:r.data}:null}}])})(_.PureComponent);q_=ht;pi(ht,"displayName","Bar");pi(ht,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Ai.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});pi(ht,"getComposedData",function(e){var n=e.props,t=e.item,r=e.barPosition,i=e.bandSize,o=e.xAxis,l=e.yAxis,s=e.xAxisTicks,u=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,h=e.displayedData,p=e.offset,g=L6(r,t);if(!g)return null;var b=n.layout,y=t.type.defaultProps,E=y!==void 0?pn(pn({},y),t.props):t.props,w=E.dataKey,x=E.children,U=E.minPointSize,I=b==="horizontal"?l:o,A=f?I.scale.domain():null,P=G6({numericAxis:I}),T=tt(x,hl),M=h.map(function(N,$){var z,j,H,V,K,W;f?z=R6(f[m+$],A):(z=wn(N,w),Array.isArray(z)||(z=[P,z]));var X=sY(U,q_.defaultProps.minPointSize)(z[1],$);if(b==="horizontal"){var R,Z=[l.scale(z[0]),l.scale(z[1])],Q=Z[0],B=Z[1];j=EP({axis:o,ticks:s,bandSize:i,offset:g.offset,entry:N,index:$}),H=(R=B??Q)!==null&&R!==void 0?R:void 0,V=g.size;var q=Q-B;if(K=Number.isNaN(q)?0:q,W={x:j,y:l.y,width:V,height:l.height},Math.abs(X)>0&&Math.abs(K)<Math.abs(X)){var ie=Vt(K||X)*(Math.abs(X)-Math.abs(K));H-=ie,K+=ie}}else{var de=[o.scale(z[0]),o.scale(z[1])],ge=de[0],xe=de[1];if(j=ge,H=EP({axis:l,ticks:u,bandSize:i,offset:g.offset,entry:N,index:$}),V=xe-ge,K=g.size,W={x:o.x,y:H,width:o.width,height:K},Math.abs(X)>0&&Math.abs(V)<Math.abs(X)){var ce=Vt(V||X)*(Math.abs(X)-Math.abs(V));V+=ce}}return pn(pn(pn({},N),{},{x:j,y:H,width:V,height:K,value:f?z:z[1],payload:N,background:W},T&&T[$]&&T[$].props),{},{tooltipPayload:[M_(t,N)],tooltipPosition:{x:j+V/2,y:H+K/2}})});return pn({data:M,layout:b},p)});function Fl(e){"@babel/helpers - typeof";return Fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fl(e)}function CY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function NI(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J_(r.key),r)}}function bY(e,n,t){return n&&NI(e.prototype,n),t&&NI(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Gt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?LI(Object(t),!0).forEach(function(r){Nf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):LI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Nf(e,n,t){return n=J_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J_(e){var n=SY(e,"string");return Fl(n)=="symbol"?n:n+""}function SY(e,n){if(Fl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Z_=function(n,t,r,i,o){var l=n.width,s=n.height,u=n.layout,f=n.children,m=Object.keys(t),h={left:r.left,leftMirror:r.left,right:l-r.right,rightMirror:l-r.right,top:r.top,topMirror:r.top,bottom:s-r.bottom,bottomMirror:s-r.bottom},p=!!ft(f,ht);return m.reduce(function(g,b){var y=t[b],E=y.orientation,w=y.domain,x=y.padding,U=x===void 0?{}:x,I=y.mirror,A=y.reversed,P="".concat(E).concat(I?"Mirror":""),T,M,N,$,z;if(y.type==="number"&&(y.padding==="gap"||y.padding==="no-gap")){var j=w[1]-w[0],H=1/0,V=y.categoricalDomain.sort();if(V.forEach(function(de,ge){ge>0&&(H=Math.min((de||0)-(V[ge-1]||0),H))}),Number.isFinite(H)){var K=H/j,W=y.layout==="vertical"?r.height:r.width;if(y.padding==="gap"&&(T=K*W/2),y.padding==="no-gap"){var X=la(n.barCategoryGap,K*W),R=K*W/2;T=R-X-(R-X)/W*X}}}i==="xAxis"?M=[r.left+(U.left||0)+(T||0),r.left+r.width-(U.right||0)-(T||0)]:i==="yAxis"?M=u==="horizontal"?[r.top+r.height-(U.bottom||0),r.top+(U.top||0)]:[r.top+(U.top||0)+(T||0),r.top+r.height-(U.bottom||0)-(T||0)]:M=y.range,A&&(M=[M[1],M[0]]);var Z=_6(y,o,p),Q=Z.scale,B=Z.realScaleType;Q.domain(w).range(M),N6(Q);var q=$6(Q,Gt(Gt({},y),{},{realScaleType:B}));i==="xAxis"?(z=E==="top"&&!I||E==="bottom"&&I,N=r.left,$=h[P]-z*y.height):i==="yAxis"&&(z=E==="left"&&!I||E==="right"&&I,N=h[P]-z*y.width,$=r.top);var ie=Gt(Gt(Gt({},y),q),{},{realScaleType:B,x:N,y:$,scale:Q,width:i==="xAxis"?r.width:y.width,height:i==="yAxis"?r.height:y.height});return ie.bandSize=wd(ie,q),!y.hide&&i==="xAxis"?h[P]+=(z?-1:1)*ie.height:y.hide||(h[P]+=(z?-1:1)*ie.width),Gt(Gt({},g),{},Nf({},b,ie))},{})},Q_=function(n,t){var r=n.x,i=n.y,o=t.x,l=t.y;return{x:Math.min(r,o),y:Math.min(i,l),width:Math.abs(o-r),height:Math.abs(l-i)}},wY=function(n){var t=n.x1,r=n.y1,i=n.x2,o=n.y2;return Q_({x:t,y:r},{x:i,y:o})},eN=(function(){function e(n){CY(this,e),this.scale=n}return bY(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.bandAware,o=r.position;if(t!==void 0){if(o)switch(o){case"start":return this.scale(t);case"middle":{var l=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+l}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(i){var u=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+u}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),i=r[0],o=r[r.length-1];return i<=o?t>=i&&t<=o:t>=o&&t<=i}}],[{key:"create",value:function(t){return new e(t)}}])})();Nf(eN,"EPS",1e-4);var WC=function(n){var t=Object.keys(n).reduce(function(r,i){return Gt(Gt({},r),{},Nf({},i,eN.create(n[i])))},{});return Gt(Gt({},t),{},{apply:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=o.bandAware,s=o.position;return J7(i,function(u,f){return t[f].apply(u,{bandAware:l,position:s})})},isInRange:function(i){return K_(i,function(o,l){return t[l].isInRange(o)})}})};function xY(e){return(e%180+180)%180}var AY=function(n){var t=n.width,r=n.height,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=xY(i),l=o*Math.PI/180,s=Math.atan(r/t),u=l>s&&l<Math.PI-s?r/Math.sin(l):t/Math.cos(l);return Math.abs(u)},$g,RI;function UY(){if(RI)return $g;RI=1;var e=xi(),n=Zl(),t=Ef();function r(i){return function(o,l,s){var u=Object(o);if(!n(o)){var f=e(l,3);o=t(o),l=function(h){return f(u[h],h,u)}}var m=i(o,l,s);return m>-1?u[f?o[m]:m]:void 0}}return $g=r,$g}var Gg,jI;function TY(){if(jI)return Gg;jI=1;var e=G_();function n(t){var r=e(t),i=r%1;return r===r?i?r-i:r:0}return Gg=n,Gg}var Hg,DI;function PY(){if(DI)return Hg;DI=1;var e=hM(),n=xi(),t=TY(),r=Math.max;function i(o,l,s){var u=o==null?0:o.length;if(!u)return-1;var f=s==null?0:t(s);return f<0&&(f=r(u+f,0)),e(o,n(l,3),f)}return Hg=i,Hg}var Wg,BI;function IY(){if(BI)return Wg;BI=1;var e=UY(),n=PY(),t=e(n);return Wg=t,Wg}var OY=IY();const kY=Ye(OY);var MY=I2();const _Y=Ye(MY);var NY=_Y(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),VC=_.createContext(void 0),KC=_.createContext(void 0),nN=_.createContext(void 0),tN=_.createContext({}),rN=_.createContext(void 0),iN=_.createContext(0),aN=_.createContext(0),zI=function(n){var t=n.state,r=t.xAxisMap,i=t.yAxisMap,o=t.offset,l=n.clipPathId,s=n.children,u=n.width,f=n.height,m=NY(o);return D.createElement(VC.Provider,{value:r},D.createElement(KC.Provider,{value:i},D.createElement(tN.Provider,{value:o},D.createElement(nN.Provider,{value:m},D.createElement(rN.Provider,{value:l},D.createElement(iN.Provider,{value:f},D.createElement(aN.Provider,{value:u},s)))))))},LY=function(){return _.useContext(rN)},oN=function(n){var t=_.useContext(VC);t==null&&da();var r=t[n];return r==null&&da(),r},RY=function(){var n=_.useContext(VC);return hi(n)},jY=function(){var n=_.useContext(KC),t=kY(n,function(r){return K_(r.domain,Number.isFinite)});return t||hi(n)},cN=function(n){var t=_.useContext(KC);t==null&&da();var r=t[n];return r==null&&da(),r},DY=function(){var n=_.useContext(nN);return n},BY=function(){return _.useContext(tN)},qC=function(){return _.useContext(aN)},YC=function(){return _.useContext(iN)};function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ao(e)}function zY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function FY(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sN(r.key),r)}}function $Y(e,n,t){return n&&FY(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function GY(e,n,t){return n=Dd(n),HY(e,lN()?Reflect.construct(n,t||[],Dd(e).constructor):n.apply(e,t))}function HY(e,n){if(n&&(Ao(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WY(e)}function WY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lN=function(){return!!e})()}function Dd(e){return Dd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Dd(e)}function VY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&mE(e,n)}function mE(e,n){return mE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},mE(e,n)}function FI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function $I(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?FI(Object(t),!0).forEach(function(r){XC(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):FI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function XC(e,n,t){return n=sN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sN(e){var n=KY(e,"string");return Ao(n)=="symbol"?n:n+""}function KY(e,n){if(Ao(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ao(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function qY(e,n){return ZY(e)||JY(e,n)||XY(e,n)||YY()}function YY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XY(e,n){if(e){if(typeof e=="string")return GI(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return GI(e,n)}}function GI(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function JY(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function ZY(e){if(Array.isArray(e))return e}function hE(){return hE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hE.apply(this,arguments)}var QY=function(n,t){var r;return D.isValidElement(n)?r=D.cloneElement(n,t):Me(n)?r=n(t):r=D.createElement("line",hE({},t,{className:"recharts-reference-line-line"})),r},eX=function(n,t,r,i,o,l,s,u,f){var m=o.x,h=o.y,p=o.width,g=o.height;if(r){var b=f.y,y=n.y.apply(b,{position:l});if(vr(f,"discard")&&!n.y.isInRange(y))return null;var E=[{x:m+p,y},{x:m,y}];return u==="left"?E.reverse():E}if(t){var w=f.x,x=n.x.apply(w,{position:l});if(vr(f,"discard")&&!n.x.isInRange(x))return null;var U=[{x,y:h+g},{x,y:h}];return s==="top"?U.reverse():U}if(i){var I=f.segment,A=I.map(function(P){return n.apply(P,{position:l})});return vr(f,"discard")&&K7(A,function(P){return!n.isInRange(P)})?null:A}return null};function nX(e){var n=e.x,t=e.y,r=e.segment,i=e.xAxisId,o=e.yAxisId,l=e.shape,s=e.className,u=e.alwaysShow,f=LY(),m=oN(i),h=cN(o),p=DY();if(!f||!p)return null;Nr(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var g=WC({x:m.scale,y:h.scale}),b=Sn(n),y=Sn(t),E=r&&r.length===2,w=eX(g,b,y,E,p,e.position,m.orientation,h.orientation,e);if(!w)return null;var x=qY(w,2),U=x[0],I=U.x,A=U.y,P=x[1],T=P.x,M=P.y,N=vr(e,"hidden")?"url(#".concat(f,")"):void 0,$=$I($I({clipPath:N},Oe(e,!0)),{},{x1:I,y1:A,x2:T,y2:M});return D.createElement($e,{className:Re("recharts-reference-line",s)},QY(l,$),zn.renderCallByParent(e,wY({x1:I,y1:A,x2:T,y2:M})))}var $l=(function(e){function n(){return zY(this,n),GY(this,n,arguments)}return VY(n,e),$Y(n,[{key:"render",value:function(){return D.createElement(nX,this.props)}}])})(D.Component);XC($l,"displayName","ReferenceLine");XC($l,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function vE(){return vE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vE.apply(this,arguments)}function Uo(e){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Uo(e)}function HI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function WI(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?HI(Object(t),!0).forEach(function(r){Lf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):HI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tX(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function rX(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,dN(r.key),r)}}function iX(e,n,t){return n&&rX(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function aX(e,n,t){return n=Bd(n),oX(e,uN()?Reflect.construct(n,t||[],Bd(e).constructor):n.apply(e,t))}function oX(e,n){if(n&&(Uo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cX(e)}function cX(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uN=function(){return!!e})()}function Bd(e){return Bd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Bd(e)}function lX(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&pE(e,n)}function pE(e,n){return pE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pE(e,n)}function Lf(e,n,t){return n=dN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dN(e){var n=sX(e,"string");return Uo(n)=="symbol"?n:n+""}function sX(e,n){if(Uo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Uo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var uX=function(n){var t=n.x,r=n.y,i=n.xAxis,o=n.yAxis,l=WC({x:i.scale,y:o.scale}),s=l.apply({x:t,y:r},{bandAware:!0});return vr(n,"discard")&&!l.isInRange(s)?null:s},Rf=(function(e){function n(){return tX(this,n),aX(this,n,arguments)}return lX(n,e),iX(n,[{key:"render",value:function(){var r=this.props,i=r.x,o=r.y,l=r.r,s=r.alwaysShow,u=r.clipPathId,f=Sn(i),m=Sn(o);if(Nr(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var h=uX(this.props);if(!h)return null;var p=h.x,g=h.y,b=this.props,y=b.shape,E=b.className,w=vr(this.props,"hidden")?"url(#".concat(u,")"):void 0,x=WI(WI({clipPath:w},Oe(this.props,!0)),{},{cx:p,cy:g});return D.createElement($e,{className:Re("recharts-reference-dot",E)},n.renderDot(y,x),zn.renderCallByParent(this.props,{x:p-l,y:g-l,width:2*l,height:2*l}))}}])})(D.Component);Lf(Rf,"displayName","ReferenceDot");Lf(Rf,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});Lf(Rf,"renderDot",function(e,n){var t;return D.isValidElement(e)?t=D.cloneElement(e,n):Me(e)?t=e(n):t=D.createElement(kf,vE({},n,{cx:n.cx,cy:n.cy,className:"recharts-reference-dot-dot"})),t});function yE(){return yE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yE.apply(this,arguments)}function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},To(e)}function VI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function KI(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?VI(Object(t),!0).forEach(function(r){jf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):VI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dX(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function fX(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,mN(r.key),r)}}function mX(e,n,t){return n&&fX(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function hX(e,n,t){return n=zd(n),vX(e,fN()?Reflect.construct(n,t||[],zd(e).constructor):n.apply(e,t))}function vX(e,n){if(n&&(To(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pX(e)}function pX(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fN=function(){return!!e})()}function zd(e){return zd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zd(e)}function yX(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&gE(e,n)}function gE(e,n){return gE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},gE(e,n)}function jf(e,n,t){return n=mN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mN(e){var n=gX(e,"string");return To(n)=="symbol"?n:n+""}function gX(e,n){if(To(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(To(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var EX=function(n,t,r,i,o){var l=o.x1,s=o.x2,u=o.y1,f=o.y2,m=o.xAxis,h=o.yAxis;if(!m||!h)return null;var p=WC({x:m.scale,y:h.scale}),g={x:n?p.x.apply(l,{position:"start"}):p.x.rangeMin,y:r?p.y.apply(u,{position:"start"}):p.y.rangeMin},b={x:t?p.x.apply(s,{position:"end"}):p.x.rangeMax,y:i?p.y.apply(f,{position:"end"}):p.y.rangeMax};return vr(o,"discard")&&(!p.isInRange(g)||!p.isInRange(b))?null:Q_(g,b)},Df=(function(e){function n(){return dX(this,n),hX(this,n,arguments)}return yX(n,e),mX(n,[{key:"render",value:function(){var r=this.props,i=r.x1,o=r.x2,l=r.y1,s=r.y2,u=r.className,f=r.alwaysShow,m=r.clipPathId;Nr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=Sn(i),p=Sn(o),g=Sn(l),b=Sn(s),y=this.props.shape;if(!h&&!p&&!g&&!b&&!y)return null;var E=EX(h,p,g,b,this.props);if(!E&&!y)return null;var w=vr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return D.createElement($e,{className:Re("recharts-reference-area",u)},n.renderRect(y,KI(KI({clipPath:w},Oe(this.props,!0)),E)),zn.renderCallByParent(this.props,E))}}])})(D.Component);jf(Df,"displayName","ReferenceArea");jf(Df,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});jf(Df,"renderRect",function(e,n){var t;return D.isValidElement(e)?t=D.cloneElement(e,n):Me(e)?t=e(n):t=D.createElement(HC,yE({},n,{className:"recharts-reference-area-rect"})),t});function hN(e,n,t){if(n<1)return[];if(n===1&&t===void 0)return e;for(var r=[],i=0;i<e.length;i+=n)r.push(e[i]);return r}function CX(e,n,t){var r={width:e.width+n.width,height:e.height+n.height};return AY(r,t)}function bX(e,n,t){var r=t==="width",i=e.x,o=e.y,l=e.width,s=e.height;return n===1?{start:r?i:o,end:r?i+l:o+s}:{start:r?i+l:o+s,end:r?i:o}}function Fd(e,n,t,r,i){if(e*n<e*r||e*n>e*i)return!1;var o=t();return e*(n-e*o/2-r)>=0&&e*(n+e*o/2-i)<=0}function SX(e,n){return hN(e,n+1)}function wX(e,n,t,r,i){for(var o=(r||[]).slice(),l=n.start,s=n.end,u=0,f=1,m=l,h=function(){var b=r==null?void 0:r[u];if(b===void 0)return{v:hN(r,f)};var y=u,E,w=function(){return E===void 0&&(E=t(b,y)),E},x=b.coordinate,U=u===0||Fd(e,x,w,m,s);U||(u=0,m=l,f+=1),U&&(m=x+e*(w()/2+i),u+=f)},p;f<=o.length;)if(p=h(),p)return p.v;return[]}function Gl(e){"@babel/helpers - typeof";return Gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gl(e)}function qI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qI(Object(t),!0).forEach(function(r){xX(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function xX(e,n,t){return n=AX(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function AX(e){var n=UX(e,"string");return Gl(n)=="symbol"?n:n+""}function UX(e,n){if(Gl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Gl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function TX(e,n,t,r,i){for(var o=(r||[]).slice(),l=o.length,s=n.start,u=n.end,f=function(p){var g=o[p],b,y=function(){return b===void 0&&(b=t(g,p)),b};if(p===l-1){var E=e*(g.coordinate+e*y()/2-u);o[p]=g=Bn(Bn({},g),{},{tickCoord:E>0?g.coordinate-E*e:g.coordinate})}else o[p]=g=Bn(Bn({},g),{},{tickCoord:g.coordinate});var w=Fd(e,g.tickCoord,y,s,u);w&&(u=g.tickCoord-e*(y()/2+i),o[p]=Bn(Bn({},g),{},{isShow:!0}))},m=l-1;m>=0;m--)f(m);return o}function PX(e,n,t,r,i,o){var l=(r||[]).slice(),s=l.length,u=n.start,f=n.end;if(o){var m=r[s-1],h=t(m,s-1),p=e*(m.coordinate+e*h/2-f);l[s-1]=m=Bn(Bn({},m),{},{tickCoord:p>0?m.coordinate-p*e:m.coordinate});var g=Fd(e,m.tickCoord,function(){return h},u,f);g&&(f=m.tickCoord-e*(h/2+i),l[s-1]=Bn(Bn({},m),{},{isShow:!0}))}for(var b=o?s-1:s,y=function(x){var U=l[x],I,A=function(){return I===void 0&&(I=t(U,x)),I};if(x===0){var P=e*(U.coordinate-e*A()/2-u);l[x]=U=Bn(Bn({},U),{},{tickCoord:P<0?U.coordinate-P*e:U.coordinate})}else l[x]=U=Bn(Bn({},U),{},{tickCoord:U.coordinate});var T=Fd(e,U.tickCoord,A,u,f);T&&(u=U.tickCoord+e*(A()/2+i),l[x]=Bn(Bn({},U),{},{isShow:!0}))},E=0;E<b;E++)y(E);return l}function JC(e,n,t){var r=e.tick,i=e.ticks,o=e.viewBox,l=e.minTickGap,s=e.orientation,u=e.interval,f=e.tickFormatter,m=e.unit,h=e.angle;if(!i||!i.length||!r)return[];if(fe(u)||Ai.isSsr)return SX(i,typeof u=="number"&&fe(u)?u:0);var p=[],g=s==="top"||s==="bottom"?"width":"height",b=m&&g==="width"?el(m,{fontSize:n,letterSpacing:t}):{width:0,height:0},y=function(U,I){var A=Me(f)?f(U.value,I):U.value;return g==="width"?CX(el(A,{fontSize:n,letterSpacing:t}),b,h):el(A,{fontSize:n,letterSpacing:t})[g]},E=i.length>=2?Vt(i[1].coordinate-i[0].coordinate):1,w=bX(o,E,g);return u==="equidistantPreserveStart"?wX(E,w,y,i,l):(u==="preserveStart"||u==="preserveStartEnd"?p=PX(E,w,y,i,l,u==="preserveStartEnd"):p=TX(E,w,y,i,l),p.filter(function(x){return x.isShow}))}var IX=["viewBox"],OX=["viewBox"],kX=["ticks"];function Po(e){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Po(e)}function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qa.apply(this,arguments)}function YI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Vn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?YI(Object(t),!0).forEach(function(r){ZC(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):YI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Vg(e,n){if(e==null)return{};var t=MX(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function MX(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function _X(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function XI(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pN(r.key),r)}}function NX(e,n,t){return n&&XI(e.prototype,n),t&&XI(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LX(e,n,t){return n=$d(n),RX(e,vN()?Reflect.construct(n,t||[],$d(e).constructor):n.apply(e,t))}function RX(e,n){if(n&&(Po(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jX(e)}function jX(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vN=function(){return!!e})()}function $d(e){return $d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$d(e)}function DX(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&EE(e,n)}function EE(e,n){return EE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},EE(e,n)}function ZC(e,n,t){return n=pN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function pN(e){var n=BX(e,"string");return Po(n)=="symbol"?n:n+""}function BX(e,n){if(Po(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Po(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zo=(function(e){function n(t){var r;return _X(this,n),r=LX(this,n,[t]),r.state={fontSize:"",letterSpacing:""},r}return DX(n,e),NX(n,[{key:"shouldComponentUpdate",value:function(r,i){var o=r.viewBox,l=Vg(r,IX),s=this.props,u=s.viewBox,f=Vg(s,OX);return!io(o,u)||!io(l,f)||!io(i,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var i=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var i=this.props,o=i.x,l=i.y,s=i.width,u=i.height,f=i.orientation,m=i.tickSize,h=i.mirror,p=i.tickMargin,g,b,y,E,w,x,U=h?-1:1,I=r.tickSize||m,A=fe(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":g=b=r.coordinate,E=l+ +!h*u,y=E-U*I,x=y-U*p,w=A;break;case"left":y=E=r.coordinate,b=o+ +!h*s,g=b-U*I,w=g-U*p,x=A;break;case"right":y=E=r.coordinate,b=o+ +h*s,g=b+U*I,w=g+U*p,x=A;break;default:g=b=r.coordinate,E=l+ +h*u,y=E+U*I,x=y+U*p,w=A;break}return{line:{x1:g,y1:y,x2:b,y2:E},tick:{x:w,y:x}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,i=r.orientation,o=r.mirror,l;switch(i){case"left":l=o?"start":"end";break;case"right":l=o?"end":"start";break;default:l="middle";break}return l}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,i=r.orientation,o=r.mirror,l="end";switch(i){case"left":case"right":l="middle";break;case"top":l=o?"start":"end";break;default:l=o?"end":"start";break}return l}},{key:"renderAxisLine",value:function(){var r=this.props,i=r.x,o=r.y,l=r.width,s=r.height,u=r.orientation,f=r.mirror,m=r.axisLine,h=Vn(Vn(Vn({},Oe(this.props,!1)),Oe(m,!1)),{},{fill:"none"});if(u==="top"||u==="bottom"){var p=+(u==="top"&&!f||u==="bottom"&&f);h=Vn(Vn({},h),{},{x1:i,y1:o+p*s,x2:i+l,y2:o+p*s})}else{var g=+(u==="left"&&!f||u==="right"&&f);h=Vn(Vn({},h),{},{x1:i+g*l,y1:o,x2:i+g*l,y2:o+s})}return D.createElement("line",Qa({},h,{className:Re("recharts-cartesian-axis-line",It(m,"className"))}))}},{key:"renderTicks",value:function(r,i,o){var l=this,s=this.props,u=s.tickLine,f=s.stroke,m=s.tick,h=s.tickFormatter,p=s.unit,g=JC(Vn(Vn({},this.props),{},{ticks:r}),i,o),b=this.getTickTextAnchor(),y=this.getTickVerticalAnchor(),E=Oe(this.props,!1),w=Oe(m,!1),x=Vn(Vn({},E),{},{fill:"none"},Oe(u,!1)),U=g.map(function(I,A){var P=l.getTickLineCoord(I),T=P.line,M=P.tick,N=Vn(Vn(Vn(Vn({textAnchor:b,verticalAnchor:y},E),{},{stroke:"none",fill:f},w),M),{},{index:A,payload:I,visibleTicksCount:g.length,tickFormatter:h});return D.createElement($e,Qa({className:"recharts-cartesian-axis-tick",key:"tick-".concat(I.value,"-").concat(I.coordinate,"-").concat(I.tickCoord)},ll(l.props,I,A)),u&&D.createElement("line",Qa({},x,T,{className:Re("recharts-cartesian-axis-tick-line",It(u,"className"))})),m&&n.renderTickItem(m,N,"".concat(Me(h)?h(I.value,A):I.value).concat(p||"")))});return D.createElement("g",{className:"recharts-cartesian-axis-ticks"},U)}},{key:"render",value:function(){var r=this,i=this.props,o=i.axisLine,l=i.width,s=i.height,u=i.ticksGenerator,f=i.className,m=i.hide;if(m)return null;var h=this.props,p=h.ticks,g=Vg(h,kX),b=p;return Me(u)&&(b=p&&p.length>0?u(this.props):u(g)),l<=0||s<=0||!b||!b.length?null:D.createElement($e,{className:Re("recharts-cartesian-axis",f),ref:function(E){r.layerReference=E}},o&&this.renderAxisLine(),this.renderTicks(b,this.state.fontSize,this.state.letterSpacing),zn.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,i,o){var l;return D.isValidElement(r)?l=D.cloneElement(r,i):Me(r)?l=r(i):l=D.createElement(ld,Qa({},i,{className:"recharts-cartesian-axis-tick-value"}),o),l}}])})(_.Component);ZC(Zo,"displayName","CartesianAxis");ZC(Zo,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var zX=["x1","y1","x2","y2","key"],FX=["offset"];function fa(e){"@babel/helpers - typeof";return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fa(e)}function JI(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Fn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?JI(Object(t),!0).forEach(function(r){$X(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):JI(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $X(e,n,t){return n=GX(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function GX(e){var n=HX(e,"string");return fa(n)=="symbol"?n:n+""}function HX(e,n){if(fa(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(fa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ji.apply(this,arguments)}function ZI(e,n){if(e==null)return{};var t=WX(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function WX(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var VX=function(n){var t=n.fill;if(!t||t==="none")return null;var r=n.fillOpacity,i=n.x,o=n.y,l=n.width,s=n.height,u=n.ry;return D.createElement("rect",{x:i,y:o,ry:u,width:l,height:s,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function yN(e,n){var t;if(D.isValidElement(e))t=D.cloneElement(e,n);else if(Me(e))t=e(n);else{var r=n.x1,i=n.y1,o=n.x2,l=n.y2,s=n.key,u=ZI(n,zX),f=Oe(u,!1);f.offset;var m=ZI(f,FX);t=D.createElement("line",Ji({},m,{x1:r,y1:i,x2:o,y2:l,fill:"none",key:s}))}return t}function KX(e){var n=e.x,t=e.width,r=e.horizontal,i=r===void 0?!0:r,o=e.horizontalPoints;if(!i||!o||!o.length)return null;var l=o.map(function(s,u){var f=Fn(Fn({},e),{},{x1:n,y1:s,x2:n+t,y2:s,key:"line-".concat(u),index:u});return yN(i,f)});return D.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function qX(e){var n=e.y,t=e.height,r=e.vertical,i=r===void 0?!0:r,o=e.verticalPoints;if(!i||!o||!o.length)return null;var l=o.map(function(s,u){var f=Fn(Fn({},e),{},{x1:s,y1:n,x2:s,y2:n+t,key:"line-".concat(u),index:u});return yN(i,f)});return D.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function YX(e){var n=e.horizontalFill,t=e.fillOpacity,r=e.x,i=e.y,o=e.width,l=e.height,s=e.horizontalPoints,u=e.horizontal,f=u===void 0?!0:u;if(!f||!n||!n.length)return null;var m=s.map(function(p){return Math.round(p+i-i)}).sort(function(p,g){return p-g});i!==m[0]&&m.unshift(0);var h=m.map(function(p,g){var b=!m[g+1],y=b?i+l-p:m[g+1]-p;if(y<=0)return null;var E=g%n.length;return D.createElement("rect",{key:"react-".concat(g),y:p,x:r,height:y,width:o,stroke:"none",fill:n[E],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return D.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function XX(e){var n=e.vertical,t=n===void 0?!0:n,r=e.verticalFill,i=e.fillOpacity,o=e.x,l=e.y,s=e.width,u=e.height,f=e.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(p){return Math.round(p+o-o)}).sort(function(p,g){return p-g});o!==m[0]&&m.unshift(0);var h=m.map(function(p,g){var b=!m[g+1],y=b?o+s-p:m[g+1]-p;if(y<=0)return null;var E=g%r.length;return D.createElement("rect",{key:"react-".concat(g),x:p,y:l,width:y,height:u,stroke:"none",fill:r[E],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return D.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var JX=function(n,t){var r=n.xAxis,i=n.width,o=n.height,l=n.offset;return O_(JC(Fn(Fn(Fn({},Zo.defaultProps),r),{},{ticks:Mr(r,!0),viewBox:{x:0,y:0,width:i,height:o}})),l.left,l.left+l.width,t)},ZX=function(n,t){var r=n.yAxis,i=n.width,o=n.height,l=n.offset;return O_(JC(Fn(Fn(Fn({},Zo.defaultProps),r),{},{ticks:Mr(r,!0),viewBox:{x:0,y:0,width:i,height:o}})),l.top,l.top+l.height,t)},Xa={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function zu(e){var n,t,r,i,o,l,s=qC(),u=YC(),f=BY(),m=Fn(Fn({},e),{},{stroke:(n=e.stroke)!==null&&n!==void 0?n:Xa.stroke,fill:(t=e.fill)!==null&&t!==void 0?t:Xa.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:Xa.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:Xa.horizontalFill,vertical:(o=e.vertical)!==null&&o!==void 0?o:Xa.vertical,verticalFill:(l=e.verticalFill)!==null&&l!==void 0?l:Xa.verticalFill,x:fe(e.x)?e.x:f.left,y:fe(e.y)?e.y:f.top,width:fe(e.width)?e.width:f.width,height:fe(e.height)?e.height:f.height}),h=m.x,p=m.y,g=m.width,b=m.height,y=m.syncWithTicks,E=m.horizontalValues,w=m.verticalValues,x=RY(),U=jY();if(!fe(g)||g<=0||!fe(b)||b<=0||!fe(h)||h!==+h||!fe(p)||p!==+p)return null;var I=m.verticalCoordinatesGenerator||JX,A=m.horizontalCoordinatesGenerator||ZX,P=m.horizontalPoints,T=m.verticalPoints;if((!P||!P.length)&&Me(A)){var M=E&&E.length,N=A({yAxis:U?Fn(Fn({},U),{},{ticks:M?E:U.ticks}):void 0,width:s,height:u,offset:f},M?!0:y);Nr(Array.isArray(N),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(fa(N),"]")),Array.isArray(N)&&(P=N)}if((!T||!T.length)&&Me(I)){var $=w&&w.length,z=I({xAxis:x?Fn(Fn({},x),{},{ticks:$?w:x.ticks}):void 0,width:s,height:u,offset:f},$?!0:y);Nr(Array.isArray(z),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(fa(z),"]")),Array.isArray(z)&&(T=z)}return D.createElement("g",{className:"recharts-cartesian-grid"},D.createElement(VX,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),D.createElement(KX,Ji({},m,{offset:f,horizontalPoints:P,xAxis:x,yAxis:U})),D.createElement(qX,Ji({},m,{offset:f,verticalPoints:T,xAxis:x,yAxis:U})),D.createElement(YX,Ji({},m,{horizontalPoints:P})),D.createElement(XX,Ji({},m,{verticalPoints:T})))}zu.displayName="CartesianGrid";var QX=["type","layout","connectNulls","ref"],eJ=["key"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Io(e)}function QI(e,n){if(e==null)return{};var t=nJ(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function nJ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function il(){return il=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},il.apply(this,arguments)}function eO(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ut(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?eO(Object(t),!0).forEach(function(r){Ht(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eO(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ja(e){return aJ(e)||iJ(e)||rJ(e)||tJ()}function tJ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rJ(e,n){if(e){if(typeof e=="string")return CE(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return CE(e,n)}}function iJ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aJ(e){if(Array.isArray(e))return CE(e)}function CE(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function oJ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function nO(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,EN(r.key),r)}}function cJ(e,n,t){return n&&nO(e.prototype,n),t&&nO(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function lJ(e,n,t){return n=Gd(n),sJ(e,gN()?Reflect.construct(n,t||[],Gd(e).constructor):n.apply(e,t))}function sJ(e,n){if(n&&(Io(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uJ(e)}function uJ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gN=function(){return!!e})()}function Gd(e){return Gd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Gd(e)}function dJ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&bE(e,n)}function bE(e,n){return bE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},bE(e,n)}function Ht(e,n,t){return n=EN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function EN(e){var n=fJ(e,"string");return Io(n)=="symbol"?n:n+""}function fJ(e,n){if(Io(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Bf=(function(e){function n(){var t;oJ(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=lJ(this,n,[].concat(i)),Ht(t,"state",{isAnimationFinished:!0,totalLength:0}),Ht(t,"generateSimpleStrokeDasharray",function(l,s){return"".concat(s,"px ").concat(l-s,"px")}),Ht(t,"getStrokeDasharray",function(l,s,u){var f=u.reduce(function(w,x){return w+x});if(!f)return t.generateSimpleStrokeDasharray(s,l);for(var m=Math.floor(l/f),h=l%f,p=s-l,g=[],b=0,y=0;b<u.length;y+=u[b],++b)if(y+u[b]>h){g=[].concat(Ja(u.slice(0,b)),[h-y]);break}var E=g.length%2===0?[0,p]:[p];return[].concat(Ja(n.repeat(u,m)),Ja(g),E).map(function(w){return"".concat(w,"px")}).join(", ")}),Ht(t,"id",ha("recharts-line-")),Ht(t,"pathRef",function(l){t.mainCurve=l}),Ht(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),Ht(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return dJ(n,e),cJ(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,l=o.points,s=o.xAxis,u=o.yAxis,f=o.layout,m=o.children,h=tt(m,Jo);if(!h)return null;var p=function(y,E){return{x:y.x,y:y.y,value:y.value,errorVal:wn(y.payload,E)}},g={clipPath:r?"url(#clipPath-".concat(i,")"):null};return D.createElement($e,g,h.map(function(b){return D.cloneElement(b,{key:"bar-".concat(b.props.dataKey),data:l,xAxis:s,yAxis:u,layout:f,dataPointFormatter:p})}))}},{key:"renderDots",value:function(r,i,o){var l=this.props.isAnimationActive;if(l&&!this.state.isAnimationFinished)return null;var s=this.props,u=s.dot,f=s.points,m=s.dataKey,h=Oe(this.props,!1),p=Oe(u,!0),g=f.map(function(y,E){var w=ut(ut(ut({key:"dot-".concat(E),r:3},h),p),{},{index:E,cx:y.x,cy:y.y,value:y.value,dataKey:m,payload:y.payload,points:f});return n.renderDotItem(u,w)}),b={clipPath:r?"url(#clipPath-".concat(i?"":"dots-").concat(o,")"):null};return D.createElement($e,il({className:"recharts-line-dots",key:"dots"},b),g)}},{key:"renderCurveStatically",value:function(r,i,o,l){var s=this.props,u=s.type,f=s.layout,m=s.connectNulls;s.ref;var h=QI(s,QX),p=ut(ut(ut({},Oe(h,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:i?"url(#clipPath-".concat(o,")"):null,points:r},l),{},{type:u,layout:f,connectNulls:m});return D.createElement(ta,il({},p,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,i){var o=this,l=this.props,s=l.points,u=l.strokeDasharray,f=l.isAnimationActive,m=l.animationBegin,h=l.animationDuration,p=l.animationEasing,g=l.animationId,b=l.animateNewValues,y=l.width,E=l.height,w=this.state,x=w.prevPoints,U=w.totalLength;return D.createElement(Zt,{begin:m,duration:h,isActive:f,easing:p,from:{t:0},to:{t:1},key:"line-".concat(g),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(I){var A=I.t;if(x){var P=x.length/s.length,T=s.map(function(j,H){var V=Math.floor(H*P);if(x[V]){var K=x[V],W=mn(K.x,j.x),X=mn(K.y,j.y);return ut(ut({},j),{},{x:W(A),y:X(A)})}if(b){var R=mn(y*2,j.x),Z=mn(E/2,j.y);return ut(ut({},j),{},{x:R(A),y:Z(A)})}return ut(ut({},j),{},{x:j.x,y:j.y})});return o.renderCurveStatically(T,r,i)}var M=mn(0,U),N=M(A),$;if(u){var z="".concat(u).split(/[,\s]+/gim).map(function(j){return parseFloat(j)});$=o.getStrokeDasharray(N,U,z)}else $=o.generateSimpleStrokeDasharray(U,N);return o.renderCurveStatically(s,r,i,{strokeDasharray:$})})}},{key:"renderCurve",value:function(r,i){var o=this.props,l=o.points,s=o.isAnimationActive,u=this.state,f=u.prevPoints,m=u.totalLength;return s&&l&&l.length&&(!f&&m>0||!sa(f,l))?this.renderCurveWithAnimation(r,i):this.renderCurveStatically(l,r,i)}},{key:"render",value:function(){var r,i=this.props,o=i.hide,l=i.dot,s=i.points,u=i.className,f=i.xAxis,m=i.yAxis,h=i.top,p=i.left,g=i.width,b=i.height,y=i.isAnimationActive,E=i.id;if(o||!s||!s.length)return null;var w=this.state.isAnimationFinished,x=s.length===1,U=Re("recharts-line",u),I=f&&f.allowDataOverflow,A=m&&m.allowDataOverflow,P=I||A,T=ke(E)?this.id:E,M=(r=Oe(l,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},N=M.r,$=N===void 0?3:N,z=M.strokeWidth,j=z===void 0?2:z,H=N2(l)?l:{},V=H.clipDot,K=V===void 0?!0:V,W=$*2+j;return D.createElement($e,{className:U},I||A?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(T)},D.createElement("rect",{x:I?p:p-g/2,y:A?h:h-b/2,width:I?g:g*2,height:A?b:b*2})),!K&&D.createElement("clipPath",{id:"clipPath-dots-".concat(T)},D.createElement("rect",{x:p-W/2,y:h-W/2,width:g+W,height:b+W}))):null,!x&&this.renderCurve(P,T),this.renderErrorBar(P,T),(x||l)&&this.renderDots(P,K,T),(!y||w)&&hr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:i.curPoints}:r.points!==i.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,i){for(var o=r.length%2!==0?[].concat(Ja(r),[0]):r,l=[],s=0;s<i;++s)l=[].concat(Ja(l),Ja(o));return l}},{key:"renderDotItem",value:function(r,i){var o;if(D.isValidElement(r))o=D.cloneElement(r,i);else if(Me(r))o=r(i);else{var l=i.key,s=QI(i,eJ),u=Re("recharts-line-dot",typeof r!="boolean"?r.className:"");o=D.createElement(kf,il({key:l},s,{className:u}))}return o}}])})(_.PureComponent);Ht(Bf,"displayName","Line");Ht(Bf,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Ai.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});Ht(Bf,"getComposedData",function(e){var n=e.props,t=e.xAxis,r=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,l=e.dataKey,s=e.bandSize,u=e.displayedData,f=e.offset,m=n.layout,h=u.map(function(p,g){var b=wn(p,l);return m==="horizontal"?{x:Co({axis:t,ticks:i,bandSize:s,entry:p,index:g}),y:ke(b)?null:r.scale(b),value:b,payload:p}:{x:ke(b)?null:t.scale(b),y:Co({axis:r,ticks:o,bandSize:s,entry:p,index:g}),value:b,payload:p}});return ut({points:h,layout:m},f)});var mJ=["layout","type","stroke","connectNulls","isRange","ref"],hJ=["key"],CN;function Oo(e){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oo(e)}function bN(e,n){if(e==null)return{};var t=vJ(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function vJ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Zi.apply(this,arguments)}function tO(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function fi(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tO(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tO(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pJ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function rO(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wN(r.key),r)}}function yJ(e,n,t){return n&&rO(e.prototype,n),t&&rO(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gJ(e,n,t){return n=Hd(n),EJ(e,SN()?Reflect.construct(n,t||[],Hd(e).constructor):n.apply(e,t))}function EJ(e,n){if(n&&(Oo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CJ(e)}function CJ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SN=function(){return!!e})()}function Hd(e){return Hd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hd(e)}function bJ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&SE(e,n)}function SE(e,n){return SE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},SE(e,n)}function sr(e,n,t){return n=wN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function wN(e){var n=SJ(e,"string");return Oo(n)=="symbol"?n:n+""}function SJ(e,n){if(Oo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Oo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ga=(function(e){function n(){var t;pJ(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=gJ(this,n,[].concat(i)),sr(t,"state",{isAnimationFinished:!0}),sr(t,"id",ha("recharts-area-")),sr(t,"handleAnimationEnd",function(){var l=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Me(l)&&l()}),sr(t,"handleAnimationStart",function(){var l=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Me(l)&&l()}),t}return bJ(n,e),yJ(n,[{key:"renderDots",value:function(r,i,o){var l=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(l&&!s)return null;var u=this.props,f=u.dot,m=u.points,h=u.dataKey,p=Oe(this.props,!1),g=Oe(f,!0),b=m.map(function(E,w){var x=fi(fi(fi({key:"dot-".concat(w),r:3},p),g),{},{index:w,cx:E.x,cy:E.y,dataKey:h,value:E.value,payload:E.payload,points:m});return n.renderDotItem(f,x)}),y={clipPath:r?"url(#clipPath-".concat(i?"":"dots-").concat(o,")"):null};return D.createElement($e,Zi({className:"recharts-area-dots"},y),b)}},{key:"renderHorizontalRect",value:function(r){var i=this.props,o=i.baseLine,l=i.points,s=i.strokeWidth,u=l[0].x,f=l[l.length-1].x,m=r*Math.abs(u-f),h=vi(l.map(function(p){return p.y||0}));return fe(o)&&typeof o=="number"?h=Math.max(o,h):o&&Array.isArray(o)&&o.length&&(h=Math.max(vi(o.map(function(p){return p.y||0})),h)),fe(h)?D.createElement("rect",{x:u<f?u:u-m,y:0,width:m,height:Math.floor(h+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var i=this.props,o=i.baseLine,l=i.points,s=i.strokeWidth,u=l[0].y,f=l[l.length-1].y,m=r*Math.abs(u-f),h=vi(l.map(function(p){return p.x||0}));return fe(o)&&typeof o=="number"?h=Math.max(o,h):o&&Array.isArray(o)&&o.length&&(h=Math.max(vi(o.map(function(p){return p.x||0})),h)),fe(h)?D.createElement("rect",{x:0,y:u<f?u:u-m,width:h+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,i,o,l){var s=this.props,u=s.layout,f=s.type,m=s.stroke,h=s.connectNulls,p=s.isRange;s.ref;var g=bN(s,mJ);return D.createElement($e,{clipPath:o?"url(#clipPath-".concat(l,")"):null},D.createElement(ta,Zi({},Oe(g,!0),{points:r,connectNulls:h,type:f,baseLine:i,layout:u,stroke:"none",className:"recharts-area-area"})),m!=="none"&&D.createElement(ta,Zi({},Oe(this.props,!1),{className:"recharts-area-curve",layout:u,type:f,connectNulls:h,fill:"none",points:r})),m!=="none"&&p&&D.createElement(ta,Zi({},Oe(this.props,!1),{className:"recharts-area-curve",layout:u,type:f,connectNulls:h,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(r,i){var o=this,l=this.props,s=l.points,u=l.baseLine,f=l.isAnimationActive,m=l.animationBegin,h=l.animationDuration,p=l.animationEasing,g=l.animationId,b=this.state,y=b.prevPoints,E=b.prevBaseLine;return D.createElement(Zt,{begin:m,duration:h,isActive:f,easing:p,from:{t:0},to:{t:1},key:"area-".concat(g),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(w){var x=w.t;if(y){var U=y.length/s.length,I=s.map(function(M,N){var $=Math.floor(N*U);if(y[$]){var z=y[$],j=mn(z.x,M.x),H=mn(z.y,M.y);return fi(fi({},M),{},{x:j(x),y:H(x)})}return M}),A;if(fe(u)&&typeof u=="number"){var P=mn(E,u);A=P(x)}else if(ke(u)||Vo(u)){var T=mn(E,0);A=T(x)}else A=u.map(function(M,N){var $=Math.floor(N*U);if(E[$]){var z=E[$],j=mn(z.x,M.x),H=mn(z.y,M.y);return fi(fi({},M),{},{x:j(x),y:H(x)})}return M});return o.renderAreaStatically(I,A,r,i)}return D.createElement($e,null,D.createElement("defs",null,D.createElement("clipPath",{id:"animationClipPath-".concat(i)},o.renderClipRect(x))),D.createElement($e,{clipPath:"url(#animationClipPath-".concat(i,")")},o.renderAreaStatically(s,u,r,i)))})}},{key:"renderArea",value:function(r,i){var o=this.props,l=o.points,s=o.baseLine,u=o.isAnimationActive,f=this.state,m=f.prevPoints,h=f.prevBaseLine,p=f.totalLength;return u&&l&&l.length&&(!m&&p>0||!sa(m,l)||!sa(h,s))?this.renderAreaWithAnimation(r,i):this.renderAreaStatically(l,s,r,i)}},{key:"render",value:function(){var r,i=this.props,o=i.hide,l=i.dot,s=i.points,u=i.className,f=i.top,m=i.left,h=i.xAxis,p=i.yAxis,g=i.width,b=i.height,y=i.isAnimationActive,E=i.id;if(o||!s||!s.length)return null;var w=this.state.isAnimationFinished,x=s.length===1,U=Re("recharts-area",u),I=h&&h.allowDataOverflow,A=p&&p.allowDataOverflow,P=I||A,T=ke(E)?this.id:E,M=(r=Oe(l,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},N=M.r,$=N===void 0?3:N,z=M.strokeWidth,j=z===void 0?2:z,H=N2(l)?l:{},V=H.clipDot,K=V===void 0?!0:V,W=$*2+j;return D.createElement($e,{className:U},I||A?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(T)},D.createElement("rect",{x:I?m:m-g/2,y:A?f:f-b/2,width:I?g:g*2,height:A?b:b*2})),!K&&D.createElement("clipPath",{id:"clipPath-dots-".concat(T)},D.createElement("rect",{x:m-W/2,y:f-W/2,width:g+W,height:b+W}))):null,x?null:this.renderArea(P,T),(l||x)&&this.renderDots(P,K,T),(!y||w)&&hr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:r.points!==i.curPoints||r.baseLine!==i.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(_.PureComponent);CN=ga;sr(ga,"displayName","Area");sr(ga,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Ai.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});sr(ga,"getBaseValue",function(e,n,t,r){var i=e.layout,o=e.baseValue,l=n.props.baseValue,s=l??o;if(fe(s)&&typeof s=="number")return s;var u=i==="horizontal"?r:t,f=u.scale.domain();if(u.type==="number"){var m=Math.max(f[0],f[1]),h=Math.min(f[0],f[1]);return s==="dataMin"?h:s==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return s==="dataMin"?f[0]:s==="dataMax"?f[1]:f[0]});sr(ga,"getComposedData",function(e){var n=e.props,t=e.item,r=e.xAxis,i=e.yAxis,o=e.xAxisTicks,l=e.yAxisTicks,s=e.bandSize,u=e.dataKey,f=e.stackedData,m=e.dataStartIndex,h=e.displayedData,p=e.offset,g=n.layout,b=f&&f.length,y=CN.getBaseValue(n,t,r,i),E=g==="horizontal",w=!1,x=h.map(function(I,A){var P;b?P=f[m+A]:(P=wn(I,u),Array.isArray(P)?w=!0:P=[y,P]);var T=P[1]==null||b&&wn(I,u)==null;return E?{x:Co({axis:r,ticks:o,bandSize:s,entry:I,index:A}),y:T?null:i.scale(P[1]),value:P,payload:I}:{x:T?null:r.scale(P[1]),y:Co({axis:i,ticks:l,bandSize:s,entry:I,index:A}),value:P,payload:I}}),U;return b||w?U=x.map(function(I){var A=Array.isArray(I.value)?I.value[0]:null;return E?{x:I.x,y:A!=null&&I.y!=null?i.scale(A):null}:{x:A!=null?r.scale(A):null,y:I.y}}):U=E?i.scale(y):r.scale(y),fi({points:x,baseLine:U,layout:g,isRange:w},p)});sr(ga,"renderDotItem",function(e,n){var t;if(D.isValidElement(e))t=D.cloneElement(e,n);else if(Me(e))t=e(n);else{var r=Re("recharts-area-dot",typeof e!="boolean"?e.className:""),i=n.key,o=bN(n,hJ);t=D.createElement(kf,Zi({},o,{key:i,className:r}))}return t});function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ko(e)}function wJ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xJ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,UN(r.key),r)}}function AJ(e,n,t){return n&&xJ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function UJ(e,n,t){return n=Wd(n),TJ(e,xN()?Reflect.construct(n,t||[],Wd(e).constructor):n.apply(e,t))}function TJ(e,n){if(n&&(ko(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PJ(e)}function PJ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xN=function(){return!!e})()}function Wd(e){return Wd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wd(e)}function IJ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&wE(e,n)}function wE(e,n){return wE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},wE(e,n)}function AN(e,n,t){return n=UN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function UN(e){var n=OJ(e,"string");return ko(n)=="symbol"?n:n+""}function OJ(e,n){if(ko(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ko(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var zf=(function(e){function n(){return wJ(this,n),UJ(this,n,arguments)}return IJ(n,e),AJ(n,[{key:"render",value:function(){return null}}])})(D.Component);AN(zf,"displayName","ZAxis");AN(zf,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var kJ=["option","isActive"];function al(){return al=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},al.apply(this,arguments)}function MJ(e,n){if(e==null)return{};var t=_J(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function _J(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function NJ(e){var n=e.option,t=e.isActive,r=MJ(e,kJ);return typeof n=="string"?D.createElement(sE,al({option:D.createElement(gf,al({type:n},r)),isActive:t,shapeType:"symbols"},r)):D.createElement(sE,al({option:n,isActive:t,shapeType:"symbols"},r))}function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mo(e)}function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ol.apply(this,arguments)}function iO(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ut(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?iO(Object(t),!0).forEach(function(r){yi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):iO(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function LJ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function aO(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,PN(r.key),r)}}function RJ(e,n,t){return n&&aO(e.prototype,n),t&&aO(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function jJ(e,n,t){return n=Vd(n),DJ(e,TN()?Reflect.construct(n,t||[],Vd(e).constructor):n.apply(e,t))}function DJ(e,n){if(n&&(Mo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BJ(e)}function BJ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(TN=function(){return!!e})()}function Vd(e){return Vd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Vd(e)}function zJ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&xE(e,n)}function xE(e,n){return xE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},xE(e,n)}function yi(e,n,t){return n=PN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function PN(e){var n=FJ(e,"string");return Mo(n)=="symbol"?n:n+""}function FJ(e,n){if(Mo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Ff=(function(e){function n(){var t;LJ(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=jJ(this,n,[].concat(i)),yi(t,"state",{isAnimationFinished:!1}),yi(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),yi(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),yi(t,"id",ha("recharts-scatter-")),t}return zJ(n,e),RJ(n,[{key:"renderSymbolsStatically",value:function(r){var i=this,o=this.props,l=o.shape,s=o.activeShape,u=o.activeIndex,f=Oe(this.props,!1);return r.map(function(m,h){var p=u===h,g=p?s:l,b=Ut(Ut({},f),m);return D.createElement($e,ol({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(h)},ll(i.props,m,h),{role:"img"}),D.createElement(NJ,ol({option:g,isActive:p,key:"symbol-".concat(h)},b)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,i=this.props,o=i.points,l=i.isAnimationActive,s=i.animationBegin,u=i.animationDuration,f=i.animationEasing,m=i.animationId,h=this.state.prevPoints;return D.createElement(Zt,{begin:s,duration:u,isActive:l,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(p){var g=p.t,b=o.map(function(y,E){var w=h&&h[E];if(w){var x=mn(w.cx,y.cx),U=mn(w.cy,y.cy),I=mn(w.size,y.size);return Ut(Ut({},y),{},{cx:x(g),cy:U(g),size:I(g)})}var A=mn(0,y.size);return Ut(Ut({},y),{},{size:A(g)})});return D.createElement($e,null,r.renderSymbolsStatically(b))})}},{key:"renderSymbols",value:function(){var r=this.props,i=r.points,o=r.isAnimationActive,l=this.state.prevPoints;return o&&i&&i.length&&(!l||!sa(l,i))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(i)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var i=this.props,o=i.points,l=i.xAxis,s=i.yAxis,u=i.children,f=tt(u,Jo);return f?f.map(function(m,h){var p=m.props,g=p.direction,b=p.dataKey;return D.cloneElement(m,{key:"".concat(g,"-").concat(b,"-").concat(o[h]),data:o,xAxis:l,yAxis:s,layout:g==="x"?"vertical":"horizontal",dataPointFormatter:function(E,w){return{x:E.cx,y:E.cy,value:g==="x"?+E.node.x:+E.node.y,errorVal:wn(E,w)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,i=r.points,o=r.line,l=r.lineType,s=r.lineJointType,u=Oe(this.props,!1),f=Oe(o,!1),m,h;if(l==="joint")m=i.map(function(U){return{x:U.cx,y:U.cy}});else if(l==="fitting"){var p=C$(i),g=p.xmin,b=p.xmax,y=p.a,E=p.b,w=function(I){return y*I+E};m=[{x:g,y:w(g)},{x:b,y:w(b)}]}var x=Ut(Ut(Ut({},u),{},{fill:"none",stroke:u&&u.fill},f),{},{points:m});return D.isValidElement(o)?h=D.cloneElement(o,x):Me(o)?h=o(x):h=D.createElement(ta,ol({},x,{type:s})),D.createElement($e,{className:"recharts-scatter-line",key:"recharts-scatter-line"},h)}},{key:"render",value:function(){var r=this.props,i=r.hide,o=r.points,l=r.line,s=r.className,u=r.xAxis,f=r.yAxis,m=r.left,h=r.top,p=r.width,g=r.height,b=r.id,y=r.isAnimationActive;if(i||!o||!o.length)return null;var E=this.state.isAnimationFinished,w=Re("recharts-scatter",s),x=u&&u.allowDataOverflow,U=f&&f.allowDataOverflow,I=x||U,A=ke(b)?this.id:b;return D.createElement($e,{className:w,clipPath:I?"url(#clipPath-".concat(A,")"):null},x||U?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(A)},D.createElement("rect",{x:x?m:m-p/2,y:U?h:h-g/2,width:x?p:p*2,height:U?g:g*2}))):null,l&&this.renderLine(),this.renderErrorBar(),D.createElement($e,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!y||E)&&hr.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(r,i){return r.animationId!==i.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:i.curPoints}:r.points!==i.curPoints?{curPoints:r.points}:null}}])})(_.PureComponent);yi(Ff,"displayName","Scatter");yi(Ff,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Ai.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});yi(Ff,"getComposedData",function(e){var n=e.xAxis,t=e.yAxis,r=e.zAxis,i=e.item,o=e.displayedData,l=e.xAxisTicks,s=e.yAxisTicks,u=e.offset,f=i.props.tooltipType,m=tt(i.props.children,hl),h=ke(n.dataKey)?i.props.dataKey:n.dataKey,p=ke(t.dataKey)?i.props.dataKey:t.dataKey,g=r&&r.dataKey,b=r?r.range:zf.defaultProps.range,y=b&&b[0],E=n.scale.bandwidth?n.scale.bandwidth():0,w=t.scale.bandwidth?t.scale.bandwidth():0,x=o.map(function(U,I){var A=wn(U,h),P=wn(U,p),T=!ke(g)&&wn(U,g)||"-",M=[{name:ke(n.dataKey)?i.props.name:n.name||n.dataKey,unit:n.unit||"",value:A,payload:U,dataKey:h,type:f},{name:ke(t.dataKey)?i.props.name:t.name||t.dataKey,unit:t.unit||"",value:P,payload:U,dataKey:p,type:f}];T!=="-"&&M.push({name:r.name||r.dataKey,unit:r.unit||"",value:T,payload:U,dataKey:g,type:f});var N=Co({axis:n,ticks:l,bandSize:E,entry:U,index:I,dataKey:h}),$=Co({axis:t,ticks:s,bandSize:w,entry:U,index:I,dataKey:p}),z=T!=="-"?r.scale(T):y,j=Math.sqrt(Math.max(z,0)/Math.PI);return Ut(Ut({},U),{},{cx:N,cy:$,x:N-j,y:$-j,xAxis:n,yAxis:t,zAxis:r,width:2*j,height:2*j,size:z,node:{x:A,y:P,z:T},tooltipPayload:M,tooltipPosition:{x:N,y:$},payload:U},m&&m[I]&&m[I].props)});return Ut({points:x},u)});function _o(e){"@babel/helpers - typeof";return _o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_o(e)}function $J(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function GJ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kN(r.key),r)}}function HJ(e,n,t){return n&&GJ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function WJ(e,n,t){return n=Kd(n),VJ(e,IN()?Reflect.construct(n,t||[],Kd(e).constructor):n.apply(e,t))}function VJ(e,n){if(n&&(_o(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return KJ(e)}function KJ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IN=function(){return!!e})()}function Kd(e){return Kd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Kd(e)}function qJ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&AE(e,n)}function AE(e,n){return AE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},AE(e,n)}function ON(e,n,t){return n=kN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kN(e){var n=YJ(e,"string");return _o(n)=="symbol"?n:n+""}function YJ(e,n){if(_o(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function UE(){return UE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},UE.apply(this,arguments)}function XJ(e){var n=e.xAxisId,t=qC(),r=YC(),i=oN(n);return i==null?null:D.createElement(Zo,UE({},i,{className:Re("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(l){return Mr(l,!0)}}))}var ra=(function(e){function n(){return $J(this,n),WJ(this,n,arguments)}return qJ(n,e),HJ(n,[{key:"render",value:function(){return D.createElement(XJ,this.props)}}])})(D.Component);ON(ra,"displayName","XAxis");ON(ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function No(e){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},No(e)}function JJ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ZJ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NN(r.key),r)}}function QJ(e,n,t){return n&&ZJ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eZ(e,n,t){return n=qd(n),nZ(e,MN()?Reflect.construct(n,t||[],qd(e).constructor):n.apply(e,t))}function nZ(e,n){if(n&&(No(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tZ(e)}function tZ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function MN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(MN=function(){return!!e})()}function qd(e){return qd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},qd(e)}function rZ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&TE(e,n)}function TE(e,n){return TE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},TE(e,n)}function _N(e,n,t){return n=NN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function NN(e){var n=iZ(e,"string");return No(n)=="symbol"?n:n+""}function iZ(e,n){if(No(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(No(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function PE(){return PE=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},PE.apply(this,arguments)}var aZ=function(n){var t=n.yAxisId,r=qC(),i=YC(),o=cN(t);return o==null?null:D.createElement(Zo,PE({},o,{className:Re("recharts-".concat(o.axisType," ").concat(o.axisType),o.className),viewBox:{x:0,y:0,width:r,height:i},ticksGenerator:function(s){return Mr(s,!0)}}))},ia=(function(e){function n(){return JJ(this,n),eZ(this,n,arguments)}return rZ(n,e),QJ(n,[{key:"render",value:function(){return D.createElement(aZ,this.props)}}])})(D.Component);_N(ia,"displayName","YAxis");_N(ia,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function oO(e){return sZ(e)||lZ(e)||cZ(e)||oZ()}function oZ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cZ(e,n){if(e){if(typeof e=="string")return IE(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return IE(e,n)}}function lZ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sZ(e){if(Array.isArray(e))return IE(e)}function IE(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var OE=function(n,t,r,i,o){var l=tt(n,$l),s=tt(n,Rf),u=[].concat(oO(l),oO(s)),f=tt(n,Df),m="".concat(i,"Id"),h=i[0],p=t;if(u.length&&(p=u.reduce(function(y,E){if(E.props[m]===r&&vr(E.props,"extendDomain")&&fe(E.props[h])){var w=E.props[h];return[Math.min(y[0],w),Math.max(y[1],w)]}return y},p)),f.length){var g="".concat(h,"1"),b="".concat(h,"2");p=f.reduce(function(y,E){if(E.props[m]===r&&vr(E.props,"extendDomain")&&fe(E.props[g])&&fe(E.props[b])){var w=E.props[g],x=E.props[b];return[Math.min(y[0],w,x),Math.max(y[1],w,x)]}return y},p)}return o&&o.length&&(p=o.reduce(function(y,E){return fe(E)?[Math.min(y[0],E),Math.max(y[1],E)]:y},p)),p},Kg={exports:{}},cO;function uZ(){return cO||(cO=1,(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(u,f,m){this.fn=u,this.context=f,this.once=m||!1}function o(u,f,m,h,p){if(typeof m!="function")throw new TypeError("The listener must be a function");var g=new i(m,h||u,p),b=t?t+f:f;return u._events[b]?u._events[b].fn?u._events[b]=[u._events[b],g]:u._events[b].push(g):(u._events[b]=g,u._eventsCount++),u}function l(u,f){--u._eventsCount===0?u._events=new r:delete u._events[f]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],m,h;if(this._eventsCount===0)return f;for(h in m=this._events)n.call(m,h)&&f.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},s.prototype.listeners=function(f){var m=t?t+f:f,h=this._events[m];if(!h)return[];if(h.fn)return[h.fn];for(var p=0,g=h.length,b=new Array(g);p<g;p++)b[p]=h[p].fn;return b},s.prototype.listenerCount=function(f){var m=t?t+f:f,h=this._events[m];return h?h.fn?1:h.length:0},s.prototype.emit=function(f,m,h,p,g,b){var y=t?t+f:f;if(!this._events[y])return!1;var E=this._events[y],w=arguments.length,x,U;if(E.fn){switch(E.once&&this.removeListener(f,E.fn,void 0,!0),w){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,m),!0;case 3:return E.fn.call(E.context,m,h),!0;case 4:return E.fn.call(E.context,m,h,p),!0;case 5:return E.fn.call(E.context,m,h,p,g),!0;case 6:return E.fn.call(E.context,m,h,p,g,b),!0}for(U=1,x=new Array(w-1);U<w;U++)x[U-1]=arguments[U];E.fn.apply(E.context,x)}else{var I=E.length,A;for(U=0;U<I;U++)switch(E[U].once&&this.removeListener(f,E[U].fn,void 0,!0),w){case 1:E[U].fn.call(E[U].context);break;case 2:E[U].fn.call(E[U].context,m);break;case 3:E[U].fn.call(E[U].context,m,h);break;case 4:E[U].fn.call(E[U].context,m,h,p);break;default:if(!x)for(A=1,x=new Array(w-1);A<w;A++)x[A-1]=arguments[A];E[U].fn.apply(E[U].context,x)}}return!0},s.prototype.on=function(f,m,h){return o(this,f,m,h,!1)},s.prototype.once=function(f,m,h){return o(this,f,m,h,!0)},s.prototype.removeListener=function(f,m,h,p){var g=t?t+f:f;if(!this._events[g])return this;if(!m)return l(this,g),this;var b=this._events[g];if(b.fn)b.fn===m&&(!p||b.once)&&(!h||b.context===h)&&l(this,g);else{for(var y=0,E=[],w=b.length;y<w;y++)(b[y].fn!==m||p&&!b[y].once||h&&b[y].context!==h)&&E.push(b[y]);E.length?this._events[g]=E.length===1?E[0]:E:l(this,g)}return this},s.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&l(this,m)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(Kg)),Kg.exports}var dZ=uZ();const fZ=Ye(dZ);var qg=new fZ,Yg="recharts.syncMouseEvents";function Hl(e){"@babel/helpers - typeof";return Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hl(e)}function mZ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function hZ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,LN(r.key),r)}}function vZ(e,n,t){return n&&hZ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xg(e,n,t){return n=LN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function LN(e){var n=pZ(e,"string");return Hl(n)=="symbol"?n:n+""}function pZ(e,n){if(Hl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var yZ=(function(){function e(){mZ(this,e),Xg(this,"activeIndex",0),Xg(this,"coordinateList",[]),Xg(this,"layout","horizontal")}return vZ(e,[{key:"setDetails",value:function(t){var r,i=t.coordinateList,o=i===void 0?null:i,l=t.container,s=l===void 0?null:l,u=t.layout,f=u===void 0?null:u,m=t.offset,h=m===void 0?null:m,p=t.mouseHandlerCallback,g=p===void 0?null:p;this.coordinateList=(r=o??this.coordinateList)!==null&&r!==void 0?r:[],this.container=s??this.container,this.layout=f??this.layout,this.offset=h??this.offset,this.mouseHandlerCallback=g??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var i=this.container.getBoundingClientRect(),o=i.x,l=i.y,s=i.height,u=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,h=o+u+f,p=l+this.offset.top+s/2+m;this.mouseHandlerCallback({pageX:h,pageY:p})}}}])})();function gZ(e,n,t){if(t==="number"&&n===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],i=e==null?void 0:e[1];if(r&&i&&fe(r)&&fe(i))return!0}return!1}function EZ(e,n,t,r){var i=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?n.x-i:t.left+.5,y:e==="horizontal"?t.top+.5:n.y-i,width:e==="horizontal"?r:t.width-1,height:e==="horizontal"?t.height-1:r}}function RN(e){var n=e.cx,t=e.cy,r=e.radius,i=e.startAngle,o=e.endAngle,l=Nn(n,t,r,i),s=Nn(n,t,r,o);return{points:[l,s],cx:n,cy:t,radius:r,startAngle:i,endAngle:o}}function CZ(e,n,t){var r,i,o,l;if(e==="horizontal")r=n.x,o=r,i=t.top,l=t.top+t.height;else if(e==="vertical")i=n.y,l=i,r=t.left,o=t.left+t.width;else if(n.cx!=null&&n.cy!=null)if(e==="centric"){var s=n.cx,u=n.cy,f=n.innerRadius,m=n.outerRadius,h=n.angle,p=Nn(s,u,f,h),g=Nn(s,u,m,h);r=p.x,i=p.y,o=g.x,l=g.y}else return RN(n);return[{x:r,y:i},{x:o,y:l}]}function Wl(e){"@babel/helpers - typeof";return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wl(e)}function lO(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Nu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lO(Object(t),!0).forEach(function(r){bZ(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lO(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function bZ(e,n,t){return n=SZ(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function SZ(e){var n=wZ(e,"string");return Wl(n)=="symbol"?n:n+""}function wZ(e,n){if(Wl(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Wl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function xZ(e){var n,t,r=e.element,i=e.tooltipEventType,o=e.isActive,l=e.activeCoordinate,s=e.activePayload,u=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,h=e.layout,p=e.chartName,g=(n=r.props.cursor)!==null&&n!==void 0?n:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!g||!o||!l||p!=="ScatterChart"&&i!=="axis")return null;var b,y=ta;if(p==="ScatterChart")b=l,y=q9;else if(p==="BarChart")b=EZ(h,l,u,m),y=HC;else if(h==="radial"){var E=RN(l),w=E.cx,x=E.cy,U=E.radius,I=E.startAngle,A=E.endAngle;b={cx:w,cy:x,startAngle:I,endAngle:A,innerRadius:U,outerRadius:U},y=L_}else b={points:CZ(h,l,u)},y=ta;var P=Nu(Nu(Nu(Nu({stroke:"#ccc",pointerEvents:"none"},u),b),Oe(g,!1)),{},{payload:s,payloadIndex:f,className:Re("recharts-tooltip-cursor",g.className)});return _.isValidElement(g)?_.cloneElement(g,P):_.createElement(y,P)}var AZ=["item"],UZ=["children","className","width","height","style","compact","title","desc"];function Lo(e){"@babel/helpers - typeof";return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Lo(e)}function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},eo.apply(this,arguments)}function sO(e,n){return IZ(e)||PZ(e,n)||DN(e,n)||TZ()}function TZ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PZ(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(m){f=!0,i=m}finally{try{if(!u&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function IZ(e){if(Array.isArray(e))return e}function uO(e,n){if(e==null)return{};var t=OZ(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OZ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function kZ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function MZ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BN(r.key),r)}}function _Z(e,n,t){return n&&MZ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function NZ(e,n,t){return n=Yd(n),LZ(e,jN()?Reflect.construct(n,t||[],Yd(e).constructor):n.apply(e,t))}function LZ(e,n){if(n&&(Lo(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return RZ(e)}function RZ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jN=function(){return!!e})()}function Yd(e){return Yd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Yd(e)}function jZ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&kE(e,n)}function kE(e,n){return kE=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},kE(e,n)}function Ro(e){return zZ(e)||BZ(e)||DN(e)||DZ()}function DZ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DN(e,n){if(e){if(typeof e=="string")return ME(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ME(e,n)}}function BZ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zZ(e){if(Array.isArray(e))return ME(e)}function ME(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function dO(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dO(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dO(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Te(e,n,t){return n=BN(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function BN(e){var n=FZ(e,"string");return Lo(n)=="symbol"?n:n+""}function FZ(e,n){if(Lo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Lo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var $Z={xAxis:["bottom","top"],yAxis:["left","right"]},GZ={width:"100%",height:"100%"},zN={x:0,y:0};function Lu(e){return e}var HZ=function(n,t){return t==="horizontal"?n.x:t==="vertical"?n.y:t==="centric"?n.angle:n.radius},WZ=function(n,t,r,i){var o=t.find(function(m){return m&&m.index===r});if(o){if(n==="horizontal")return{x:o.coordinate,y:i.y};if(n==="vertical")return{x:i.x,y:o.coordinate};if(n==="centric"){var l=o.coordinate,s=i.radius;return te(te(te({},i),Nn(i.cx,i.cy,s,l)),{},{angle:l,radius:s})}var u=o.coordinate,f=i.angle;return te(te(te({},i),Nn(i.cx,i.cy,u,f)),{},{angle:f,radius:u})}return zN},$f=function(n,t){var r=t.graphicalItems,i=t.dataStartIndex,o=t.dataEndIndex,l=(r??[]).reduce(function(s,u){var f=u.props.data;return f&&f.length?[].concat(Ro(s),Ro(f)):s},[]);return l.length>0?l:n&&n.length&&fe(i)&&fe(o)?n.slice(i,o+1):[]};function FN(e){return e==="number"?[0,"auto"]:void 0}var _E=function(n,t,r,i){var o=n.graphicalItems,l=n.tooltipAxis,s=$f(t,n);return r<0||!o||!o.length||r>=s.length?null:o.reduce(function(u,f){var m,h=(m=f.props.data)!==null&&m!==void 0?m:t;h&&n.dataStartIndex+n.dataEndIndex!==0&&n.dataEndIndex-n.dataStartIndex>=r&&(h=h.slice(n.dataStartIndex,n.dataEndIndex+1));var p;if(l.dataKey&&!l.allowDuplicatedCategory){var g=h===void 0?s:h;p=Xu(g,l.dataKey,i)}else p=h&&h[r]||s[r];return p?[].concat(Ro(u),[M_(f,p)]):u},[])},fO=function(n,t,r,i){var o=i||{x:n.chartX,y:n.chartY},l=HZ(o,r),s=n.orderedTooltipTicks,u=n.tooltipAxis,f=n.tooltipTicks,m=T6(l,s,f,u);if(m>=0&&f){var h=f[m]&&f[m].value,p=_E(n,t,m,h),g=WZ(r,s,m,o);return{activeTooltipIndex:m,activeLabel:h,activePayload:p,activeCoordinate:g}}return null},VZ=function(n,t){var r=t.axes,i=t.graphicalItems,o=t.axisType,l=t.axisIdKey,s=t.stackGroups,u=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,h=n.children,p=n.stackOffset,g=I_(m,o);return r.reduce(function(b,y){var E,w=y.type.defaultProps!==void 0?te(te({},y.type.defaultProps),y.props):y.props,x=w.type,U=w.dataKey,I=w.allowDataOverflow,A=w.allowDuplicatedCategory,P=w.scale,T=w.ticks,M=w.includeHidden,N=w[l];if(b[N])return b;var $=$f(n.data,{graphicalItems:i.filter(function(q){var ie,de=l in q.props?q.props[l]:(ie=q.type.defaultProps)===null||ie===void 0?void 0:ie[l];return de===N}),dataStartIndex:u,dataEndIndex:f}),z=$.length,j,H,V;gZ(w.domain,I,x)&&(j=K1(w.domain,null,I),g&&(x==="number"||P!=="auto")&&(V=tl($,U,"category")));var K=FN(x);if(!j||j.length===0){var W,X=(W=w.domain)!==null&&W!==void 0?W:K;if(U){if(j=tl($,U,x),x==="category"&&g){var R=E$(j);A&&R?(H=j,j=_d(0,z)):A||(j=SP(X,j,y).reduce(function(q,ie){return q.indexOf(ie)>=0?q:[].concat(Ro(q),[ie])},[]))}else if(x==="category")A?j=j.filter(function(q){return q!==""&&!ke(q)}):j=SP(X,j,y).reduce(function(q,ie){return q.indexOf(ie)>=0||ie===""||ke(ie)?q:[].concat(Ro(q),[ie])},[]);else if(x==="number"){var Z=M6($,i.filter(function(q){var ie,de,ge=l in q.props?q.props[l]:(ie=q.type.defaultProps)===null||ie===void 0?void 0:ie[l],xe="hide"in q.props?q.props.hide:(de=q.type.defaultProps)===null||de===void 0?void 0:de.hide;return ge===N&&(M||!xe)}),U,o,m);Z&&(j=Z)}g&&(x==="number"||P!=="auto")&&(V=tl($,U,"category"))}else g?j=_d(0,z):s&&s[N]&&s[N].hasStack&&x==="number"?j=p==="expand"?[0,1]:k_(s[N].stackGroups,u,f):j=P_($,i.filter(function(q){var ie=l in q.props?q.props[l]:q.type.defaultProps[l],de="hide"in q.props?q.props.hide:q.type.defaultProps.hide;return ie===N&&(M||!de)}),x,m,!0);if(x==="number")j=OE(h,j,N,o,T),X&&(j=K1(X,j,I));else if(x==="category"&&X){var Q=X,B=j.every(function(q){return Q.indexOf(q)>=0});B&&(j=Q)}}return te(te({},b),{},Te({},N,te(te({},w),{},{axisType:o,domain:j,categoricalDomain:V,duplicateDomain:H,originalDomain:(E=w.domain)!==null&&E!==void 0?E:K,isCategorical:g,layout:m})))},{})},KZ=function(n,t){var r=t.graphicalItems,i=t.Axis,o=t.axisType,l=t.axisIdKey,s=t.stackGroups,u=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,h=n.children,p=$f(n.data,{graphicalItems:r,dataStartIndex:u,dataEndIndex:f}),g=p.length,b=I_(m,o),y=-1;return r.reduce(function(E,w){var x=w.type.defaultProps!==void 0?te(te({},w.type.defaultProps),w.props):w.props,U=x[l],I=FN("number");if(!E[U]){y++;var A;return b?A=_d(0,g):s&&s[U]&&s[U].hasStack?(A=k_(s[U].stackGroups,u,f),A=OE(h,A,U,o)):(A=K1(I,P_(p,r.filter(function(P){var T,M,N=l in P.props?P.props[l]:(T=P.type.defaultProps)===null||T===void 0?void 0:T[l],$="hide"in P.props?P.props.hide:(M=P.type.defaultProps)===null||M===void 0?void 0:M.hide;return N===U&&!$}),"number",m),i.defaultProps.allowDataOverflow),A=OE(h,A,U,o)),te(te({},E),{},Te({},U,te(te({axisType:o},i.defaultProps),{},{hide:!0,orientation:It($Z,"".concat(o,".").concat(y%2),null),domain:A,originalDomain:I,isCategorical:b,layout:m})))}return E},{})},qZ=function(n,t){var r=t.axisType,i=r===void 0?"xAxis":r,o=t.AxisComp,l=t.graphicalItems,s=t.stackGroups,u=t.dataStartIndex,f=t.dataEndIndex,m=n.children,h="".concat(i,"Id"),p=tt(m,o),g={};return p&&p.length?g=VZ(n,{axes:p,graphicalItems:l,axisType:i,axisIdKey:h,stackGroups:s,dataStartIndex:u,dataEndIndex:f}):l&&l.length&&(g=KZ(n,{Axis:o,graphicalItems:l,axisType:i,axisIdKey:h,stackGroups:s,dataStartIndex:u,dataEndIndex:f})),g},YZ=function(n){var t=hi(n),r=Mr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:yC(r,function(i){return i.coordinate}),tooltipAxis:t,tooltipAxisBandSize:wd(t,r)}},mO=function(n){var t=n.children,r=n.defaultShowTooltip,i=ft(t,wo),o=0,l=0;return n.data&&n.data.length!==0&&(l=n.data.length-1),i&&i.props&&(i.props.startIndex>=0&&(o=i.props.startIndex),i.props.endIndex>=0&&(l=i.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:o,dataEndIndex:l,activeTooltipIndex:-1,isTooltipActive:!!r}},XZ=function(n){return!n||!n.length?!1:n.some(function(t){var r=_r(t&&t.type);return r&&r.indexOf("Bar")>=0})},hO=function(n){return n==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:n==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:n==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},JZ=function(n,t){var r=n.props,i=n.graphicalItems,o=n.xAxisMap,l=o===void 0?{}:o,s=n.yAxisMap,u=s===void 0?{}:s,f=r.width,m=r.height,h=r.children,p=r.margin||{},g=ft(h,wo),b=ft(h,Qi),y=Object.keys(u).reduce(function(A,P){var T=u[P],M=T.orientation;return!T.mirror&&!T.hide?te(te({},A),{},Te({},M,A[M]+T.width)):A},{left:p.left||0,right:p.right||0}),E=Object.keys(l).reduce(function(A,P){var T=l[P],M=T.orientation;return!T.mirror&&!T.hide?te(te({},A),{},Te({},M,It(A,"".concat(M))+T.height)):A},{top:p.top||0,bottom:p.bottom||0}),w=te(te({},E),y),x=w.bottom;g&&(w.bottom+=g.props.height||wo.defaultProps.height),b&&t&&(w=O6(w,i,r,t));var U=f-w.left-w.right,I=m-w.top-w.bottom;return te(te({brushBottom:x},w),{},{width:Math.max(U,0),height:Math.max(I,0)})},ZZ=function(n,t){if(t==="xAxis")return n[t].width;if(t==="yAxis")return n[t].height},$N=function(n){var t=n.chartName,r=n.GraphicalChild,i=n.defaultTooltipEventType,o=i===void 0?"axis":i,l=n.validateTooltipEventTypes,s=l===void 0?["axis"]:l,u=n.axisComponents,f=n.legendContent,m=n.formatAxisMap,h=n.defaultProps,p=function(w,x){var U=x.graphicalItems,I=x.stackGroups,A=x.offset,P=x.updateId,T=x.dataStartIndex,M=x.dataEndIndex,N=w.barSize,$=w.layout,z=w.barGap,j=w.barCategoryGap,H=w.maxBarSize,V=hO($),K=V.numericAxisName,W=V.cateAxisName,X=XZ(U),R=[];return U.forEach(function(Z,Q){var B=$f(w.data,{graphicalItems:[Z],dataStartIndex:T,dataEndIndex:M}),q=Z.type.defaultProps!==void 0?te(te({},Z.type.defaultProps),Z.props):Z.props,ie=q.dataKey,de=q.maxBarSize,ge=q["".concat(K,"Id")],xe=q["".concat(W,"Id")],ce={},he=u.reduce(function(qn,_t){var Ea=x["".concat(_t.axisType,"Map")],Qo=q["".concat(_t.axisType,"Id")];Ea&&Ea[Qo]||_t.axisType==="zAxis"||da();var ec=Ea[Qo];return te(te({},qn),{},Te(Te({},_t.axisType,ec),"".concat(_t.axisType,"Ticks"),Mr(ec)))},ce),re=he[W],ue=he["".concat(W,"Ticks")],me=I&&I[ge]&&I[ge].hasStack&&H6(Z,I[ge].stackGroups),ne=_r(Z.type).indexOf("Bar")>=0,_e=wd(re,ue),Pe=[],Ve=X&&P6({barSize:N,stackGroups:I,totalSize:ZZ(he,W)});if(ne){var Ke,rn,at=ke(de)?H:de,Gn=(Ke=(rn=wd(re,ue,!0))!==null&&rn!==void 0?rn:at)!==null&&Ke!==void 0?Ke:0;Pe=I6({barGap:z,barCategoryGap:j,bandSize:Gn!==_e?Gn:_e,sizeList:Ve[xe],maxBarSize:at}),Gn!==_e&&(Pe=Pe.map(function(qn){return te(te({},qn),{},{position:te(te({},qn.position),{},{offset:qn.position.offset-Gn/2})})}))}var er=Z&&Z.type&&Z.type.getComposedData;er&&R.push({props:te(te({},er(te(te({},he),{},{displayedData:B,props:w,dataKey:ie,item:Z,bandSize:_e,barPosition:Pe,offset:A,stackedData:me,layout:$,dataStartIndex:T,dataEndIndex:M}))),{},Te(Te(Te({key:Z.key||"item-".concat(Q)},K,he[K]),W,he[W]),"animationId",P)),childIndex:k$(Z,w.children),item:Z})}),R},g=function(w,x){var U=w.props,I=w.dataStartIndex,A=w.dataEndIndex,P=w.updateId;if(!jx({props:U}))return null;var T=U.children,M=U.layout,N=U.stackOffset,$=U.data,z=U.reverseStackOrder,j=hO(M),H=j.numericAxisName,V=j.cateAxisName,K=tt(T,r),W=F6($,K,"".concat(H,"Id"),"".concat(V,"Id"),N,z),X=u.reduce(function(q,ie){var de="".concat(ie.axisType,"Map");return te(te({},q),{},Te({},de,qZ(U,te(te({},ie),{},{graphicalItems:K,stackGroups:ie.axisType===H&&W,dataStartIndex:I,dataEndIndex:A}))))},{}),R=JZ(te(te({},X),{},{props:U,graphicalItems:K}),x==null?void 0:x.legendBBox);Object.keys(X).forEach(function(q){X[q]=m(U,X[q],R,q.replace("Map",""),t)});var Z=X["".concat(V,"Map")],Q=YZ(Z),B=p(U,te(te({},X),{},{dataStartIndex:I,dataEndIndex:A,updateId:P,graphicalItems:K,stackGroups:W,offset:R}));return te(te({formattedGraphicalItems:B,graphicalItems:K,offset:R,stackGroups:W},Q),X)},b=(function(E){function w(x){var U,I,A;return kZ(this,w),A=NZ(this,w,[x]),Te(A,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Te(A,"accessibilityManager",new yZ),Te(A,"handleLegendBBoxUpdate",function(P){if(P){var T=A.state,M=T.dataStartIndex,N=T.dataEndIndex,$=T.updateId;A.setState(te({legendBBox:P},g({props:A.props,dataStartIndex:M,dataEndIndex:N,updateId:$},te(te({},A.state),{},{legendBBox:P}))))}}),Te(A,"handleReceiveSyncEvent",function(P,T,M){if(A.props.syncId===P){if(M===A.eventEmitterSymbol&&typeof A.props.syncMethod!="function")return;A.applySyncEvent(T)}}),Te(A,"handleBrushChange",function(P){var T=P.startIndex,M=P.endIndex;if(T!==A.state.dataStartIndex||M!==A.state.dataEndIndex){var N=A.state.updateId;A.setState(function(){return te({dataStartIndex:T,dataEndIndex:M},g({props:A.props,dataStartIndex:T,dataEndIndex:M,updateId:N},A.state))}),A.triggerSyncEvent({dataStartIndex:T,dataEndIndex:M})}}),Te(A,"handleMouseEnter",function(P){var T=A.getMouseInfo(P);if(T){var M=te(te({},T),{},{isTooltipActive:!0});A.setState(M),A.triggerSyncEvent(M);var N=A.props.onMouseEnter;Me(N)&&N(M,P)}}),Te(A,"triggeredAfterMouseMove",function(P){var T=A.getMouseInfo(P),M=T?te(te({},T),{},{isTooltipActive:!0}):{isTooltipActive:!1};A.setState(M),A.triggerSyncEvent(M);var N=A.props.onMouseMove;Me(N)&&N(M,P)}),Te(A,"handleItemMouseEnter",function(P){A.setState(function(){return{isTooltipActive:!0,activeItem:P,activePayload:P.tooltipPayload,activeCoordinate:P.tooltipPosition||{x:P.cx,y:P.cy}}})}),Te(A,"handleItemMouseLeave",function(){A.setState(function(){return{isTooltipActive:!1}})}),Te(A,"handleMouseMove",function(P){P.persist(),A.throttleTriggeredAfterMouseMove(P)}),Te(A,"handleMouseLeave",function(P){A.throttleTriggeredAfterMouseMove.cancel();var T={isTooltipActive:!1};A.setState(T),A.triggerSyncEvent(T);var M=A.props.onMouseLeave;Me(M)&&M(T,P)}),Te(A,"handleOuterEvent",function(P){var T=O$(P),M=It(A.props,"".concat(T));if(T&&Me(M)){var N,$;/.*touch.*/i.test(T)?$=A.getMouseInfo(P.changedTouches[0]):$=A.getMouseInfo(P),M((N=$)!==null&&N!==void 0?N:{},P)}}),Te(A,"handleClick",function(P){var T=A.getMouseInfo(P);if(T){var M=te(te({},T),{},{isTooltipActive:!0});A.setState(M),A.triggerSyncEvent(M);var N=A.props.onClick;Me(N)&&N(M,P)}}),Te(A,"handleMouseDown",function(P){var T=A.props.onMouseDown;if(Me(T)){var M=A.getMouseInfo(P);T(M,P)}}),Te(A,"handleMouseUp",function(P){var T=A.props.onMouseUp;if(Me(T)){var M=A.getMouseInfo(P);T(M,P)}}),Te(A,"handleTouchMove",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&A.throttleTriggeredAfterMouseMove(P.changedTouches[0])}),Te(A,"handleTouchStart",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&A.handleMouseDown(P.changedTouches[0])}),Te(A,"handleTouchEnd",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&A.handleMouseUp(P.changedTouches[0])}),Te(A,"handleDoubleClick",function(P){var T=A.props.onDoubleClick;if(Me(T)){var M=A.getMouseInfo(P);T(M,P)}}),Te(A,"handleContextMenu",function(P){var T=A.props.onContextMenu;if(Me(T)){var M=A.getMouseInfo(P);T(M,P)}}),Te(A,"triggerSyncEvent",function(P){A.props.syncId!==void 0&&qg.emit(Yg,A.props.syncId,P,A.eventEmitterSymbol)}),Te(A,"applySyncEvent",function(P){var T=A.props,M=T.layout,N=T.syncMethod,$=A.state.updateId,z=P.dataStartIndex,j=P.dataEndIndex;if(P.dataStartIndex!==void 0||P.dataEndIndex!==void 0)A.setState(te({dataStartIndex:z,dataEndIndex:j},g({props:A.props,dataStartIndex:z,dataEndIndex:j,updateId:$},A.state)));else if(P.activeTooltipIndex!==void 0){var H=P.chartX,V=P.chartY,K=P.activeTooltipIndex,W=A.state,X=W.offset,R=W.tooltipTicks;if(!X)return;if(typeof N=="function")K=N(R,P);else if(N==="value"){K=-1;for(var Z=0;Z<R.length;Z++)if(R[Z].value===P.activeLabel){K=Z;break}}var Q=te(te({},X),{},{x:X.left,y:X.top}),B=Math.min(H,Q.x+Q.width),q=Math.min(V,Q.y+Q.height),ie=R[K]&&R[K].value,de=_E(A.state,A.props.data,K),ge=R[K]?{x:M==="horizontal"?R[K].coordinate:B,y:M==="horizontal"?q:R[K].coordinate}:zN;A.setState(te(te({},P),{},{activeLabel:ie,activeCoordinate:ge,activePayload:de,activeTooltipIndex:K}))}else A.setState(P)}),Te(A,"renderCursor",function(P){var T,M=A.state,N=M.isTooltipActive,$=M.activeCoordinate,z=M.activePayload,j=M.offset,H=M.activeTooltipIndex,V=M.tooltipAxisBandSize,K=A.getTooltipEventType(),W=(T=P.props.active)!==null&&T!==void 0?T:N,X=A.props.layout,R=P.key||"_recharts-cursor";return D.createElement(xZ,{key:R,activeCoordinate:$,activePayload:z,activeTooltipIndex:H,chartName:t,element:P,isActive:W,layout:X,offset:j,tooltipAxisBandSize:V,tooltipEventType:K})}),Te(A,"renderPolarAxis",function(P,T,M){var N=It(P,"type.axisType"),$=It(A.state,"".concat(N,"Map")),z=P.type.defaultProps,j=z!==void 0?te(te({},z),P.props):P.props,H=$&&$[j["".concat(N,"Id")]];return _.cloneElement(P,te(te({},H),{},{className:Re(N,H.className),key:P.key||"".concat(T,"-").concat(M),ticks:Mr(H,!0)}))}),Te(A,"renderPolarGrid",function(P){var T=P.props,M=T.radialLines,N=T.polarAngles,$=T.polarRadius,z=A.state,j=z.radiusAxisMap,H=z.angleAxisMap,V=hi(j),K=hi(H),W=K.cx,X=K.cy,R=K.innerRadius,Z=K.outerRadius;return _.cloneElement(P,{polarAngles:Array.isArray(N)?N:Mr(K,!0).map(function(Q){return Q.coordinate}),polarRadius:Array.isArray($)?$:Mr(V,!0).map(function(Q){return Q.coordinate}),cx:W,cy:X,innerRadius:R,outerRadius:Z,key:P.key||"polar-grid",radialLines:M})}),Te(A,"renderLegend",function(){var P=A.state.formattedGraphicalItems,T=A.props,M=T.children,N=T.width,$=T.height,z=A.props.margin||{},j=N-(z.left||0)-(z.right||0),H=U_({children:M,formattedGraphicalItems:P,legendWidth:j,legendContent:f});if(!H)return null;var V=H.item,K=uO(H,AZ);return _.cloneElement(V,te(te({},K),{},{chartWidth:N,chartHeight:$,margin:z,onBBoxUpdate:A.handleLegendBBoxUpdate}))}),Te(A,"renderTooltip",function(){var P,T=A.props,M=T.children,N=T.accessibilityLayer,$=ft(M,Tt);if(!$)return null;var z=A.state,j=z.isTooltipActive,H=z.activeCoordinate,V=z.activePayload,K=z.activeLabel,W=z.offset,X=(P=$.props.active)!==null&&P!==void 0?P:j;return _.cloneElement($,{viewBox:te(te({},W),{},{x:W.left,y:W.top}),active:X,label:K,payload:X?V:[],coordinate:H,accessibilityLayer:N})}),Te(A,"renderBrush",function(P){var T=A.props,M=T.margin,N=T.data,$=A.state,z=$.offset,j=$.dataStartIndex,H=$.dataEndIndex,V=$.updateId;return _.cloneElement(P,{key:P.key||"_recharts-brush",onChange:Ou(A.handleBrushChange,P.props.onChange),data:N,x:fe(P.props.x)?P.props.x:z.left,y:fe(P.props.y)?P.props.y:z.top+z.height+z.brushBottom-(M.bottom||0),width:fe(P.props.width)?P.props.width:z.width,startIndex:j,endIndex:H,updateId:"brush-".concat(V)})}),Te(A,"renderReferenceElement",function(P,T,M){if(!P)return null;var N=A,$=N.clipPathId,z=A.state,j=z.xAxisMap,H=z.yAxisMap,V=z.offset,K=P.type.defaultProps||{},W=P.props,X=W.xAxisId,R=X===void 0?K.xAxisId:X,Z=W.yAxisId,Q=Z===void 0?K.yAxisId:Z;return _.cloneElement(P,{key:P.key||"".concat(T,"-").concat(M),xAxis:j[R],yAxis:H[Q],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:$})}),Te(A,"renderActivePoints",function(P){var T=P.item,M=P.activePoint,N=P.basePoint,$=P.childIndex,z=P.isRange,j=[],H=T.props.key,V=T.item.type.defaultProps!==void 0?te(te({},T.item.type.defaultProps),T.item.props):T.item.props,K=V.activeDot,W=V.dataKey,X=te(te({index:$,dataKey:W,cx:M.x,cy:M.y,r:4,fill:GC(T.item),strokeWidth:2,stroke:"#fff",payload:M.payload,value:M.value},Oe(K,!1)),Ju(K));return j.push(w.renderActiveDot(K,X,"".concat(H,"-activePoint-").concat($))),N?j.push(w.renderActiveDot(K,te(te({},X),{},{cx:N.x,cy:N.y}),"".concat(H,"-basePoint-").concat($))):z&&j.push(null),j}),Te(A,"renderGraphicChild",function(P,T,M){var N=A.filterFormatItem(P,T,M);if(!N)return null;var $=A.getTooltipEventType(),z=A.state,j=z.isTooltipActive,H=z.tooltipAxis,V=z.activeTooltipIndex,K=z.activeLabel,W=A.props.children,X=ft(W,Tt),R=N.props,Z=R.points,Q=R.isRange,B=R.baseLine,q=N.item.type.defaultProps!==void 0?te(te({},N.item.type.defaultProps),N.item.props):N.item.props,ie=q.activeDot,de=q.hide,ge=q.activeBar,xe=q.activeShape,ce=!!(!de&&j&&X&&(ie||ge||xe)),he={};$!=="axis"&&X&&X.props.trigger==="click"?he={onClick:Ou(A.handleItemMouseEnter,P.props.onClick)}:$!=="axis"&&(he={onMouseLeave:Ou(A.handleItemMouseLeave,P.props.onMouseLeave),onMouseEnter:Ou(A.handleItemMouseEnter,P.props.onMouseEnter)});var re=_.cloneElement(P,te(te({},N.props),he));function ue(_t){return typeof H.dataKey=="function"?H.dataKey(_t.payload):null}if(ce)if(V>=0){var me,ne;if(H.dataKey&&!H.allowDuplicatedCategory){var _e=typeof H.dataKey=="function"?ue:"payload.".concat(H.dataKey.toString());me=Xu(Z,_e,K),ne=Q&&B&&Xu(B,_e,K)}else me=Z==null?void 0:Z[V],ne=Q&&B&&B[V];if(xe||ge){var Pe=P.props.activeIndex!==void 0?P.props.activeIndex:V;return[_.cloneElement(P,te(te(te({},N.props),he),{},{activeIndex:Pe})),null,null]}if(!ke(me))return[re].concat(Ro(A.renderActivePoints({item:N,activePoint:me,basePoint:ne,childIndex:V,isRange:Q})))}else{var Ve,Ke=(Ve=A.getItemByXY(A.state.activeCoordinate))!==null&&Ve!==void 0?Ve:{graphicalItem:re},rn=Ke.graphicalItem,at=rn.item,Gn=at===void 0?P:at,er=rn.childIndex,qn=te(te(te({},N.props),he),{},{activeIndex:er});return[_.cloneElement(Gn,qn),null,null]}return Q?[re,null,null]:[re,null]}),Te(A,"renderCustomized",function(P,T,M){return _.cloneElement(P,te(te({key:"recharts-customized-".concat(M)},A.props),A.state))}),Te(A,"renderMap",{CartesianGrid:{handler:Lu,once:!0},ReferenceArea:{handler:A.renderReferenceElement},ReferenceLine:{handler:Lu},ReferenceDot:{handler:A.renderReferenceElement},XAxis:{handler:Lu},YAxis:{handler:Lu},Brush:{handler:A.renderBrush,once:!0},Bar:{handler:A.renderGraphicChild},Line:{handler:A.renderGraphicChild},Area:{handler:A.renderGraphicChild},Radar:{handler:A.renderGraphicChild},RadialBar:{handler:A.renderGraphicChild},Scatter:{handler:A.renderGraphicChild},Pie:{handler:A.renderGraphicChild},Funnel:{handler:A.renderGraphicChild},Tooltip:{handler:A.renderCursor,once:!0},PolarGrid:{handler:A.renderPolarGrid,once:!0},PolarAngleAxis:{handler:A.renderPolarAxis},PolarRadiusAxis:{handler:A.renderPolarAxis},Customized:{handler:A.renderCustomized}}),A.clipPathId="".concat((U=x.id)!==null&&U!==void 0?U:ha("recharts"),"-clip"),A.throttleTriggeredAfterMouseMove=TM(A.triggeredAfterMouseMove,(I=x.throttleDelay)!==null&&I!==void 0?I:1e3/60),A.state={},A}return jZ(w,E),_Z(w,[{key:"componentDidMount",value:function(){var U,I;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(U=this.props.margin.left)!==null&&U!==void 0?U:0,top:(I=this.props.margin.top)!==null&&I!==void 0?I:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var U=this.props,I=U.children,A=U.data,P=U.height,T=U.layout,M=ft(I,Tt);if(M){var N=M.props.defaultIndex;if(!(typeof N!="number"||N<0||N>this.state.tooltipTicks.length-1)){var $=this.state.tooltipTicks[N]&&this.state.tooltipTicks[N].value,z=_E(this.state,A,N,$),j=this.state.tooltipTicks[N].coordinate,H=(this.state.offset.top+P)/2,V=T==="horizontal",K=V?{x:j,y:H}:{y:j,x:H},W=this.state.formattedGraphicalItems.find(function(R){var Z=R.item;return Z.type.name==="Scatter"});W&&(K=te(te({},K),W.props.points[N].tooltipPosition),z=W.props.points[N].tooltipPayload);var X={activeTooltipIndex:N,isTooltipActive:!0,activeLabel:$,activePayload:z,activeCoordinate:K};this.setState(X),this.renderCursor(M),this.accessibilityManager.setIndex(N)}}}},{key:"getSnapshotBeforeUpdate",value:function(U,I){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==I.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==U.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==U.margin){var A,P;this.accessibilityManager.setDetails({offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(P=this.props.margin.top)!==null&&P!==void 0?P:0}})}return null}},{key:"componentDidUpdate",value:function(U){v1([ft(U.children,Tt)],[ft(this.props.children,Tt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var U=ft(this.props.children,Tt);if(U&&typeof U.props.shared=="boolean"){var I=U.props.shared?"axis":"item";return s.indexOf(I)>=0?I:o}return o}},{key:"getMouseInfo",value:function(U){if(!this.container)return null;var I=this.container,A=I.getBoundingClientRect(),P=yW(A),T={chartX:Math.round(U.pageX-P.left),chartY:Math.round(U.pageY-P.top)},M=A.width/I.offsetWidth||1,N=this.inRange(T.chartX,T.chartY,M);if(!N)return null;var $=this.state,z=$.xAxisMap,j=$.yAxisMap,H=this.getTooltipEventType(),V=fO(this.state,this.props.data,this.props.layout,N);if(H!=="axis"&&z&&j){var K=hi(z).scale,W=hi(j).scale,X=K&&K.invert?K.invert(T.chartX):null,R=W&&W.invert?W.invert(T.chartY):null;return te(te({},T),{},{xValue:X,yValue:R},V)}return V?te(te({},T),V):null}},{key:"inRange",value:function(U,I){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,P=this.props.layout,T=U/A,M=I/A;if(P==="horizontal"||P==="vertical"){var N=this.state.offset,$=T>=N.left&&T<=N.left+N.width&&M>=N.top&&M<=N.top+N.height;return $?{x:T,y:M}:null}var z=this.state,j=z.angleAxisMap,H=z.radiusAxisMap;if(j&&H){var V=hi(j);return AP({x:T,y:M},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var U=this.props.children,I=this.getTooltipEventType(),A=ft(U,Tt),P={};A&&I==="axis"&&(A.props.trigger==="click"?P={onClick:this.handleClick}:P={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var T=Ju(this.props,this.handleOuterEvent);return te(te({},T),P)}},{key:"addListener",value:function(){qg.on(Yg,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){qg.removeListener(Yg,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(U,I,A){for(var P=this.state.formattedGraphicalItems,T=0,M=P.length;T<M;T++){var N=P[T];if(N.item===U||N.props.key===U.key||I===_r(N.item.type)&&A===N.childIndex)return N}return null}},{key:"renderClipPath",value:function(){var U=this.clipPathId,I=this.state.offset,A=I.left,P=I.top,T=I.height,M=I.width;return D.createElement("defs",null,D.createElement("clipPath",{id:U},D.createElement("rect",{x:A,y:P,height:T,width:M})))}},{key:"getXScales",value:function(){var U=this.state.xAxisMap;return U?Object.entries(U).reduce(function(I,A){var P=sO(A,2),T=P[0],M=P[1];return te(te({},I),{},Te({},T,M.scale))},{}):null}},{key:"getYScales",value:function(){var U=this.state.yAxisMap;return U?Object.entries(U).reduce(function(I,A){var P=sO(A,2),T=P[0],M=P[1];return te(te({},I),{},Te({},T,M.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(U){var I;return(I=this.state.xAxisMap)===null||I===void 0||(I=I[U])===null||I===void 0?void 0:I.scale}},{key:"getYScaleByAxisId",value:function(U){var I;return(I=this.state.yAxisMap)===null||I===void 0||(I=I[U])===null||I===void 0?void 0:I.scale}},{key:"getItemByXY",value:function(U){var I=this.state,A=I.formattedGraphicalItems,P=I.activeItem;if(A&&A.length)for(var T=0,M=A.length;T<M;T++){var N=A[T],$=N.props,z=N.item,j=z.type.defaultProps!==void 0?te(te({},z.type.defaultProps),z.props):z.props,H=_r(z.type);if(H==="Bar"){var V=($.data||[]).find(function(R){return D9(U,R)});if(V)return{graphicalItem:N,payload:V}}else if(H==="RadialBar"){var K=($.data||[]).find(function(R){return AP(U,R)});if(K)return{graphicalItem:N,payload:K}}else if(Mf(N,P)||_f(N,P)||Dl(N,P)){var W=T7({graphicalItem:N,activeTooltipItem:P,itemData:j.data}),X=j.activeIndex===void 0?W:j.activeIndex;return{graphicalItem:te(te({},N),{},{childIndex:X}),payload:Dl(N,P)?j.data[W]:N.props.data[W]}}}return null}},{key:"render",value:function(){var U=this;if(!jx(this))return null;var I=this.props,A=I.children,P=I.className,T=I.width,M=I.height,N=I.style,$=I.compact,z=I.title,j=I.desc,H=uO(I,UZ),V=Oe(H,!1);if($)return D.createElement(zI,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},D.createElement(y1,eo({},V,{width:T,height:M,title:z,desc:j}),this.renderClipPath(),Bx(A,this.renderMap)));if(this.props.accessibilityLayer){var K,W;V.tabIndex=(K=this.props.tabIndex)!==null&&K!==void 0?K:0,V.role=(W=this.props.role)!==null&&W!==void 0?W:"application",V.onKeyDown=function(R){U.accessibilityManager.keyboardEvent(R)},V.onFocus=function(){U.accessibilityManager.focus()}}var X=this.parseEventsOfWrapper();return D.createElement(zI,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},D.createElement("div",eo({className:Re("recharts-wrapper",P),style:te({position:"relative",cursor:"default",width:T,height:M},N)},X,{ref:function(Z){U.container=Z}}),D.createElement(y1,eo({},V,{width:T,height:M,title:z,desc:j,style:GZ}),this.renderClipPath(),Bx(A,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(_.Component);Te(b,"displayName",t),Te(b,"defaultProps",te({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},h)),Te(b,"getDerivedStateFromProps",function(E,w){var x=E.dataKey,U=E.data,I=E.children,A=E.width,P=E.height,T=E.layout,M=E.stackOffset,N=E.margin,$=w.dataStartIndex,z=w.dataEndIndex;if(w.updateId===void 0){var j=mO(E);return te(te(te({},j),{},{updateId:0},g(te(te({props:E},j),{},{updateId:0}),w)),{},{prevDataKey:x,prevData:U,prevWidth:A,prevHeight:P,prevLayout:T,prevStackOffset:M,prevMargin:N,prevChildren:I})}if(x!==w.prevDataKey||U!==w.prevData||A!==w.prevWidth||P!==w.prevHeight||T!==w.prevLayout||M!==w.prevStackOffset||!io(N,w.prevMargin)){var H=mO(E),V={chartX:w.chartX,chartY:w.chartY,isTooltipActive:w.isTooltipActive},K=te(te({},fO(w,U,T)),{},{updateId:w.updateId+1}),W=te(te(te({},H),V),K);return te(te(te({},W),g(te({props:E},W),w)),{},{prevDataKey:x,prevData:U,prevWidth:A,prevHeight:P,prevLayout:T,prevStackOffset:M,prevMargin:N,prevChildren:I})}if(!v1(I,w.prevChildren)){var X,R,Z,Q,B=ft(I,wo),q=B&&(X=(R=B.props)===null||R===void 0?void 0:R.startIndex)!==null&&X!==void 0?X:$,ie=B&&(Z=(Q=B.props)===null||Q===void 0?void 0:Q.endIndex)!==null&&Z!==void 0?Z:z,de=q!==$||ie!==z,ge=!ke(U),xe=ge&&!de?w.updateId:w.updateId+1;return te(te({updateId:xe},g(te(te({props:E},w),{},{updateId:xe,dataStartIndex:q,dataEndIndex:ie}),w)),{},{prevChildren:I,dataStartIndex:q,dataEndIndex:ie})}return null}),Te(b,"renderActiveDot",function(E,w,x){var U;return _.isValidElement(E)?U=_.cloneElement(E,w):Me(E)?U=E(w):U=D.createElement(kf,w),D.createElement($e,{className:"recharts-active-dot",key:x},U)});var y=_.forwardRef(function(w,x){return D.createElement(b,eo({},w,{ref:x}))});return y.displayName=b.displayName,y},vO=$N({chartName:"BarChart",GraphicalChild:ht,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:ra},{axisType:"yAxis",AxisComp:ia}],formatAxisMap:Z_}),QZ=$N({chartName:"ComposedChart",GraphicalChild:[Bf,ga,ht,Ff],axisComponents:[{axisType:"xAxis",AxisComp:ra},{axisType:"yAxis",AxisComp:ia},{axisType:"zAxis",AxisComp:zf}],formatAxisMap:Z_});function eQ({data:e,specialYears:n}){const t=e.length>0?e[e.length-1].year:2024,[r,i]=_.useState(String(t)),o=[...e].sort((T,M)=>T.year-M.year),l=o.map(T=>String(T.year)),s=l.includes(r)?r:l[l.length-1]??String(t);o.map(T=>({year:T.year,downloads:T.totalDownloads,isSpecial:n.includes(T.year)}));const u=o.length,f=o.reduce((T,M)=>T+M.year,0),m=o.reduce((T,M)=>T+M.totalDownloads,0),h=o.reduce((T,M)=>T+M.year*M.totalDownloads,0),p=o.reduce((T,M)=>T+M.year*M.year,0),g=u*p-f*f,b=g!==0?(u*h-f*m)/g:0,y=u>0?(m-b*f)/u:0,E=o.map(T=>({year:T.year,trend:y+b*T.year,residual:T.totalDownloads-(y+b*T.year),isSpecial:n.includes(T.year)})),w=o.map(T=>{const M={Education:0,Commercial:0,Library:0,Government:0};return T.institutions.forEach(N=>{M[N.type]!==void 0&&(M[N.type]+=N.downloads)}),{year:T.year,...M,isSpecial:n.includes(T.year)}}),x=e.find(T=>T.year===parseInt(s)),U=x?[...x.geography].sort((T,M)=>M.downloads-T.downloads).slice(0,10):[],I=[...o].sort((T,M)=>M.totalDownloads-T.totalDownloads)[0],A=o.filter(T=>n.includes(T.year)).sort((T,M)=>M.totalDownloads-T.totalDownloads)[0],P=T=>Number.isFinite(T)?Number(T).toLocaleString():"0";return o.length===0?O.jsx(Kt,{children:O.jsxs(qt,{children:[O.jsx(Yt,{children:"Visual Analysis"}),O.jsx(dr,{children:"No data available for visual analysis."})]})}):O.jsxs("div",{className:"grid gap-4 xl:grid-cols-[0.95fr_1.05fr]",children:[O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(YE,{className:"size-5"}),"A. Trends and Deviation Snapshot"]}),O.jsx(dr,{children:"Bars show residuals from trend; center line is the trend baseline"})]}),O.jsxs(fr,{className:"space-y-3",children:[O.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[O.jsxs("div",{className:"p-3 rounded border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Overall Peak Year"}),O.jsx("div",{className:"text-lg font-semibold",children:(I==null?void 0:I.year)??"N/A"}),O.jsxs("div",{className:"text-xs text-muted-foreground",children:[P(I==null?void 0:I.totalDownloads)," downloads"]})]}),O.jsxs("div",{className:"p-3 rounded border bg-primary/5 border-primary/20",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Top Special Year"}),O.jsx("div",{className:"text-lg font-semibold",children:(A==null?void 0:A.year)??"N/A"}),O.jsxs("div",{className:"text-xs text-muted-foreground",children:[P(A==null?void 0:A.totalDownloads)," downloads"]})]}),O.jsxs("div",{className:"p-3 rounded border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground",children:"Trend Slope"}),O.jsxs("div",{className:"text-lg font-semibold",children:[b>=0?"+":"",b.toFixed(1)]}),O.jsx("div",{className:"text-xs text-muted-foreground",children:"downloads/year"})]})]}),O.jsx(tg,{width:"100%",height:240,children:O.jsxs(QZ,{data:E,margin:{top:5,right:20,left:10,bottom:5},children:[O.jsx(zu,{strokeDasharray:"3 3",stroke:"var(--border)"}),O.jsx(ra,{dataKey:"year",stroke:"var(--muted-foreground)",style:{fontSize:"12px"}}),O.jsx(ia,{yAxisId:"left",stroke:"var(--muted-foreground)",style:{fontSize:"12px"},label:{value:"Residual from Trend (Downloads)",angle:-90,position:"insideLeft",style:{fontSize:"12px"}},tickFormatter:T=>Number(T).toFixed(0)}),O.jsx(Tt,{contentStyle:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"6px"},formatter:T=>`${Number(T).toLocaleString()} downloads`}),O.jsx($l,{yAxisId:"left",y:0,stroke:"var(--muted-foreground)",strokeWidth:2,label:{value:"Trend Line",position:"insideTopRight",fill:"var(--muted-foreground)",fontSize:11}}),n.map(T=>O.jsx($l,{yAxisId:"left",x:T,stroke:"var(--primary)",strokeDasharray:"3 3"},T)),O.jsx(ht,{yAxisId:"left",dataKey:"residual",name:"residual",radius:[3,3,0,0],children:E.map((T,M)=>O.jsx(hl,{fill:T.isSpecial?"var(--primary)":T.residual>0?"var(--chart-2)":"var(--destructive)"},`dev-${M}`))})]})})]})]}),O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(s2,{className:"size-5"}),"B. Composition and Country Focus"]}),O.jsx(dr,{children:"Institution-type mix by year with top-country ranking"})]}),O.jsxs(fr,{className:"grid gap-4 lg:grid-cols-[1.05fr_0.95fr]",children:[O.jsx(tg,{width:"100%",height:235,children:O.jsxs(vO,{data:w,margin:{top:5,right:20,left:10,bottom:5},children:[O.jsx(zu,{strokeDasharray:"3 3",stroke:"var(--border)"}),O.jsx(ra,{dataKey:"year",stroke:"var(--muted-foreground)",style:{fontSize:"12px"}}),O.jsx(ia,{stroke:"var(--muted-foreground)",style:{fontSize:"12px"},label:{value:"Downloads",angle:-90,position:"insideLeft",style:{fontSize:"12px"}}}),O.jsx(Tt,{contentStyle:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"6px"}}),O.jsx(Qi,{}),O.jsx(ht,{dataKey:"Education",stackId:"a",fill:"var(--primary)"}),O.jsx(ht,{dataKey:"Commercial",stackId:"a",fill:"var(--chart-2)"}),O.jsx(ht,{dataKey:"Library",stackId:"a",fill:"var(--chart-3)"}),O.jsx(ht,{dataKey:"Government",stackId:"a",fill:"var(--chart-4)"})]})}),O.jsxs("div",{className:"space-y-3",children:[O.jsxs("div",{className:"flex items-center justify-between",children:[O.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[O.jsx(Ez,{className:"size-4"}),"Top 10 Countries (",s,")"]}),O.jsxs(sF,{value:s,onValueChange:i,children:[O.jsx(dF,{className:"w-[120px]",children:O.jsx(uF,{})}),O.jsx(fF,{children:o.map(T=>O.jsxs(mF,{value:String(T.year),children:[T.year,n.includes(T.year)?" *":""]},T.year))})]})]}),O.jsx(tg,{width:"100%",height:210,children:O.jsxs(vO,{data:U,layout:"vertical",margin:{top:5,right:20,left:76,bottom:5},children:[O.jsx(zu,{strokeDasharray:"3 3",stroke:"var(--border)"}),O.jsx(ra,{type:"number",stroke:"var(--muted-foreground)",style:{fontSize:"12px"}}),O.jsx(ia,{type:"category",dataKey:"country",stroke:"var(--muted-foreground)",style:{fontSize:"11px"}}),O.jsx(Tt,{contentStyle:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"6px"}}),O.jsx(ht,{dataKey:"downloads",fill:"var(--primary)",children:U.map((T,M)=>O.jsx(hl,{fill:M<3?"var(--primary)":"var(--chart-3)"},`cell-${M}`))})]})})]})]})]})]})}function nQ({data:e,specialYears:n}){const t=A2(e,n),r=U2(e,n),i=[...e].sort((T,M)=>T.year-M.year),l=i.map((T,M)=>M===0?null:{year:T.year,growthRate:w2(T.totalDownloads,i[M-1].totalDownloads),isSpecial:n.includes(T.year)}).filter(T=>T!==null).filter(T=>T==null?void 0:T.isSpecial).map(T=>T.growthRate),s=l.reduce((T,M)=>T+M,0)/l.length,u=i.map(T=>T.totalDownloads),h=x2(u).filter((T,M)=>{var $;const N=($=i[M+2])==null?void 0:$.year;return n.includes(N)}).some(T=>Math.abs(T)>400),p=i.map(T=>({year:T.year,entropy:S2(T.geography.map(M=>M.downloads)),isSpecial:n.includes(T.year)})),g=p.filter(T=>T.isSpecial).reduce((T,M)=>T+M.entropy,0)/n.length,b=p.filter(T=>!T.isSpecial).reduce((T,M)=>T+M.entropy,0)/(p.length-n.length),y=t.isSignificant&&Math.abs(t.effectSize)>=.5?"Significant":t.isSignificant?"Mixed":"Not Significant";let E;h&&s>30?E="Spike":s>15&&!h?E="Trend":s<10?E="None":E="Mixed";const w=y==="Significant"&&E==="Spike"?"Clear":y==="Not Significant"||E==="None"?"Weak":"Mixed";let x;const U=[y==="Significant",E==="Spike"||E==="Trend",w==="Clear"].filter(Boolean).length;U===3?x="Strongly Supported":U===2?x="Supported":U===1?x="Weakly Supported":y==="Not Significant"&&E==="None"?x="Not Supported":x="Inconclusive";const I=()=>{const T=[];return t.isSignificant?T.push(`Special-issue years show statistically significant increases in downloads (p = ${t.tTest.pValue.toFixed(4)}, Cohen's d = ${t.effectSize.toFixed(2)}).`):T.push(`No statistically significant difference detected between special and non-special years (p = ${t.tTest.pValue.toFixed(4)}).`),E==="Spike"?T.push(`Mathematical analysis reveals sharp upward spikes during special-issue years, with average growth of ${s.toFixed(1)}%.`):E==="Trend"?T.push(`Growth trends are positive during special-issue years (avg. ${s.toFixed(1)}%), but without sharp acceleration.`):T.push("Mathematical analysis shows minimal growth differentiation during special-issue years."),g>b*1.1?T.push(`Geographic reach broadens during special-issue years (entropy: ${g.toFixed(3)} vs ${b.toFixed(3)}), indicating more diverse international engagement.`):T.push("Geographic distribution remains similar across special and non-special years."),r.chiSquareResult.pValue<.05&&T.push(`Reader composition shifts significantly during special-issue years (χ² = ${r.chiSquareResult.chiSquare.toFixed(2)}, p = ${r.chiSquareResult.pValue.toFixed(4)}).`),T.join(" ")},A=T=>T==="Strongly Supported"||T==="Supported"?O.jsx(sz,{className:"size-5 text-green-600"}):T==="Not Supported"?O.jsx(mz,{className:"size-5 text-red-600"}):O.jsx(dz,{className:"size-5 text-yellow-600"}),P=T=>T==="Strongly Supported"||T==="Supported"?"default":T==="Not Supported"?"destructive":"secondary";return O.jsxs(Kt,{className:"border-2 border-primary/20",children:[O.jsxs(qt,{children:[O.jsxs(Yt,{className:"flex items-center gap-2",children:[O.jsx(vz,{className:"size-5"}),"Results & Interpretation"]}),O.jsx(dr,{children:"Synthesis of all analytical evidence"})]}),O.jsxs(fr,{className:"space-y-4",children:[O.jsxs("div",{className:"grid gap-3 md:grid-cols-3",children:[O.jsxs("div",{className:"p-3 rounded-lg border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Statistical Evidence"}),O.jsx(Ki,{variant:y==="Significant"?"default":"secondary",children:y}),O.jsxs("div",{className:"text-xs text-muted-foreground mt-2",children:["p = ",t.tTest.pValue.toFixed(4)]})]}),O.jsxs("div",{className:"p-3 rounded-lg border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Mathematical Behavior"}),O.jsx(Ki,{variant:E==="Spike"||E==="Trend"?"default":"secondary",children:E}),O.jsxs("div",{className:"text-xs text-muted-foreground mt-2",children:["Avg growth: ",s.toFixed(1),"%"]})]}),O.jsxs("div",{className:"p-3 rounded-lg border bg-muted/30",children:[O.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Visual Pattern"}),O.jsx(Ki,{variant:w==="Clear"?"default":"secondary",children:w}),O.jsxs("div",{className:"text-xs text-muted-foreground mt-2",children:["Entropy diff: ",(g-b).toFixed(3)]})]})]}),O.jsx(iF,{className:"border-2",children:O.jsxs("div",{className:"flex items-start gap-3",children:[A(x),O.jsxs("div",{className:"flex-1",children:[O.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[O.jsx("span",{className:"font-semibold",children:"Final Verdict:"}),O.jsx(Ki,{variant:P(x),className:"text-sm",children:x})]}),O.jsx(aF,{className:"text-sm leading-snug",children:I()})]})]})}),O.jsxs("div",{className:"space-y-2",children:[O.jsx("h4",{className:"text-sm font-semibold",children:"Key Findings"}),O.jsxs("ul",{className:"grid gap-2 text-sm md:grid-cols-2",children:[O.jsxs("li",{className:"flex items-start gap-2",children:[O.jsx("span",{className:"text-muted-foreground mt-0.5",children:"•"}),O.jsxs("span",{children:["Mean downloads: ",t.specialYearsMean.toFixed(0)," (special) vs"," ",t.nonSpecialYearsMean.toFixed(0)," (non-special) —"," ",((t.specialYearsMean-t.nonSpecialYearsMean)/t.nonSpecialYearsMean*100).toFixed(1),"% difference"]})]}),O.jsxs("li",{className:"flex items-start gap-2",children:[O.jsx("span",{className:"text-muted-foreground mt-0.5",children:"•"}),O.jsxs("span",{children:["Effect size: ",Math.abs(t.effectSize).toFixed(2)," (",t.effectSizeInterpretation,")"]})]}),O.jsxs("li",{className:"flex items-start gap-2",children:[O.jsx("span",{className:"text-muted-foreground mt-0.5",children:"•"}),O.jsxs("span",{children:["Geographic breadth: ",((g/b-1)*100).toFixed(1),"%"," ",g>b?"increase":"decrease"," in entropy during special issues"]})]}),O.jsxs("li",{className:"flex items-start gap-2",children:[O.jsx("span",{className:"text-muted-foreground mt-0.5",children:"•"}),O.jsxs("span",{children:["Institutional distribution:"," ",r.chiSquareResult.pValue<.05?"significantly different":"similar"," ","(p = ",r.chiSquareResult.pValue.toFixed(4),")"]})]})]})]}),O.jsxs("div",{className:"p-3 bg-muted/50 rounded border text-xs text-muted-foreground",children:[O.jsx("strong",{children:"Methodological Note:"})," This analysis employs Welch's t-test (unequal variances), Cohen's d for effect size, chi-square test for categorical independence, Shannon entropy for geographic distribution, and second-difference analysis for structural change detection. All interpretations are derived algorithmically from the data without subjective bias."]})]})]})}class tQ extends D.Component{constructor(n){super(n),this.state={hasError:!1,message:""}}static getDerivedStateFromError(n){return{hasError:!0,message:(n==null?void 0:n.message)??"Unexpected rendering error."}}componentDidCatch(n){console.error(`Error in ${this.props.panelName} panel:`,n)}render(){return this.state.hasError?O.jsxs(Kt,{children:[O.jsxs(qt,{children:[O.jsxs(Yt,{children:[this.props.panelName," Unavailable"]}),O.jsx(dr,{children:"A rendering issue occurred in this panel. The rest of the dashboard is still available."})]}),O.jsx(fr,{children:O.jsxs("p",{className:"text-sm text-muted-foreground",children:["Details: ",this.state.message]})})]}):this.props.children}}const rQ=`Country/Region,Downloads
United States,358
Poland,117
Germany,29
United Kingdom,28
India,27
Mexico,22
Spain,20
Canada,15
China,12
Brazil,11
France,9
Netherlands,9
Australia,8
Greece,8
Taiwan,8
Switzerland,7
Italy,7
Russian Federation,7
Philippines,6
Pakistan,5
Sweden,5
Turkey,5
South Africa,5
Colombia,4
Malaysia,4
Saudi Arabia,4
Bulgaria,3
Chile,3
Ecuador,3
Indonesia,3
Israel,3
"Iran, Islamic Republic Of",3
"Korea, Republic Of",3
Nigeria,3
"Bolivia, Plurinational State Of",2
Estonia,2
Croatia,2
Japan,2
New Zealand,2
Panama,2
Portugal,2
Sudan,2
Viet Nam,2
United Arab Emirates,1
Argentina,1
Austria,1
Bangladesh,1
Brunei Darussalam,1
Democratic Republic Of Congo,1
Denmark,1
Egypt,1
Ghana,1
Hungary,1
Ireland,1
Jordan,1
Kenya,1
Cambodia,1
Lebanon,1
Luxembourg,1
Morocco,1
Moldova,1
Mauritius,1
Oman,1
Peru,1
Qatar,1
Romania,1
Serbia,1
Thailand,1
Ukraine,1`,iQ=`Country/Region,Downloads
United States,762
Poland,418
Germany,151
India,103
Netherlands,59
Mexico,41
France,31
Canada,30
China,29
Spain,28
Russian Federation,26
Brazil,24
Australia,21
Ethiopia,21
"Iran, Islamic Republic Of",21
United Kingdom,18
Bulgaria,16
Colombia,16
Sweden,16
Argentina,14
Italy,14
Greece,13
Pakistan,13
Egypt,12
Turkey,12
Japan,11
"Korea, Republic Of",11
Thailand,11
Czech Republic,10
Croatia,10
Peru,9
Philippines,9
Saudi Arabia,9
Viet Nam,9
Denmark,8
Indonesia,8
Jordan,8
Ecuador,7
Hungary,7
Portugal,7
Singapore,7
Ukraine,7
Israel,6
Malaysia,6
Romania,6
Albania,5
Suriname,5
Bangladesh,4
Belgium,4
Bosnia & Herzegovina,3
Cameroon,3
Dominica,3
Hong Kong,3
Luxembourg,3
Morocco,3
Nigeria,3
Norway,3
Slovenia,3
Slovakia,3
Taiwan,3
"Venezuela, Bolivarian Republic Of",3
South Africa,3
Austria,2
"Bolivia, Plurinational State Of",2
Guatemala,2
Sri Lanka,2
New Zealand,2
Oman,2
Panama,2
Sudan,2
Uganda,2
Uzbekistan,2
Afghanistan,1
Brunei Darussalam,1
Belize,1
Switzerland,1
Chile,1
Costa Rica,1
Finland,1
Ghana,1
Ireland,1
Iraq,1
Kenya,1
Kyrgyzstan,1
Cambodia,1
Lebanon,1
Moldova,1
Myanmar,1
Serbia,1
El Salvador,1
Syrian Arab Republic,1
"Tanzania, United Republic Of",1
Zimbabwe,1`,aQ=`Country/Region,Downloads
Poland,742
United States,629
France,283
Germany,174
India,107
Canada,69
Netherlands,60
United Kingdom,42
China,39
Mexico,38
Malaysia,37
Nigeria,34
Taiwan,29
Spain,26
Brazil,25
Colombia,24
Indonesia,20
Turkey,20
Pakistan,18
"Korea, Republic Of",17
Ecuador,16
Ethiopia,14
Philippines,12
Ghana,11
"Iran, Islamic Republic Of",11
Thailand,11
Egypt,10
Italy,10
Saudi Arabia,10
"Tanzania, United Republic Of",10
South Africa,10
Bangladesh,8
Greece,8
Czech Republic,7
Denmark,7
Croatia,7
Peru,7
Russian Federation,7
United Arab Emirates,6
Australia,6
Switzerland,6
Chile,6
Cameroon,6
Norway,6
Slovenia,6
Austria,5
Algeria,5
Iraq,5
Libya,5
Bulgaria,4
Ireland,4
Japan,4
Lebanon,4
Sweden,4
Singapore,4
Uganda,4
Viet Nam,4
Argentina,3
Benin,3
"Bolivia, Plurinational State Of",3
Hungary,3
New Zealand,3
Romania,3
Serbia,3
Belgium,2
Finland,2
Guatemala,2
Hong Kong,2
Israel,2
Kenya,2
Kazakhstan,2
Liberia,2
Morocco,2
Oman,2
Panama,2
Portugal,2
Rwanda,2
Tunisia,2
Albania,1
Armenia,1
Bosnia & Herzegovina,1
Sri Lanka,1
Luxembourg,1
Nepal,1
Puerto Rico,1
Slovakia,1
Senegal,1
Ukraine,1
"Venezuela, Bolivarian Republic Of",1
Zambia,1`,oQ=`Country/Region,Downloads
France,3876
United States,2036
Poland,622
Germany,351
India,137
Canada,122
Australia,108
China,106
United Kingdom,78
Romania,63
Singapore,61
Ethiopia,55
Italy,47
Mexico,41
Indonesia,39
Brazil,35
Haiti,35
Philippines,34
Spain,33
Pakistan,30
Malaysia,28
Nigeria,22
South Africa,20
Colombia,19
Sweden,19
"Iran, Islamic Republic Of",16
Kenya,16
Netherlands,16
Norway,15
Belgium,14
Finland,14
Greece,14
"Korea, Republic Of",14
Ukraine,13
Lebanon,12
Turkey,12
Bangladesh,11
Denmark,11
Japan,11
Russian Federation,11
Chile,10
Croatia,10
Israel,10
Switzerland,9
Hong Kong,9
Ireland,9
New Zealand,9
Taiwan,9
Moldova,8
Thailand,8
Uganda,8
Argentina,7
Ghana,7
Saudi Arabia,7
Trinidad And Tobago,7
Ecuador,6
Jordan,6
Portugal,6
Bulgaria,5
"Bolivia, Plurinational State Of",5
Czech Republic,5
Egypt,5
Hungary,5
Lithuania,5
Morocco,5
Nepal,5
"Tanzania, United Republic Of",5
Democratic Republic Of Congo,4
Algeria,4
Iraq,4
Jamaica,4
Sri Lanka,4
Peru,4
Slovakia,4
Zimbabwe,4
United Arab Emirates,3
Austria,3
Cuba,3
Montenegro,3
Puerto Rico,3
Rwanda,3
Zambia,3
Albania,2
Bahrain,2
"Côte d'Ivoire",2
Dominican Republic,2
Luxembourg,2
Mongolia,2
Serbia,2
Sudan,2
Slovenia,2
Syrian Arab Republic,2
Uruguay,2
Yemen,2
Burkina Faso,1
Botswana,1
Belarus,1
Republic Of Congo,1
Cameroon,1
Cyprus,1
Estonia,1
Georgia,1
Guatemala,1
Guyana,1
Lesotho,1
Latvia,1
Myanmar,1
Namibia,1
Niger,1
Oman,1
Paraguay,1
Qatar,1
Senegal,1
Suriname,1
El Salvador,1
Tajikistan,1
"Venezuela, Bolivarian Republic Of",1
Virgin Islands (US),1
Viet Nam,1`,cQ=`Country/Region,Downloads
United States,3305
France,2917
China,891
India,315
Hong Kong,307
Canada,157
Australia,131
Germany,129
United Kingdom,124
Brazil,105
Poland,89
Netherlands,73
Russian Federation,65
Singapore,58
Italy,57
Philippines,57
Turkey,55
Indonesia,54
Mexico,53
"Korea, Republic Of",49
Pakistan,45
Malaysia,39
Colombia,38
Thailand,38
Spain,37
Ghana,36
Ethiopia,35
Nigeria,33
South Africa,33
Romania,30
Ireland,29
Ecuador,26
Denmark,25
Japan,24
Portugal,22
Sweden,22
Czech Republic,20
Finland,20
Egypt,19
Israel,19
Kenya,18
Norway,18
Lebanon,17
United Arab Emirates,16
Switzerland,16
Peru,16
Chile,15
Greece,13
Iceland,13
Sri Lanka,13
Morocco,13
Nepal,13
Belgium,12
Taiwan,12
Viet Nam,12
Hungary,11
"Iran, Islamic Republic Of",11
Saudi Arabia,11
"Tanzania, United Republic Of",11
Cameroon,9
Ukraine,9
Bangladesh,8
Iraq,8
Argentina,6
Jordan,6
Malawi,6
Zambia,6
Algeria,5
New Zealand,5
El Salvador,5
Kazakhstan,4
Macao,4
Slovenia,4
Slovakia,4
Uzbekistan,4
Zimbabwe,4
Austria,3
Latvia,3
Oman,3
Qatar,3
Bulgaria,2
Honduras,2
Croatia,2
Haiti,2
Cambodia,2
Kuwait,2
Lithuania,2
Luxembourg,2
Moldova,2
Myanmar,2
Mongolia,2
Serbia,2
Rwanda,2
Sudan,2
Senegal,2
Somalia,2
Albania,1
Armenia,1
Bosnia & Herzegovina,1
Burundi,1
Bhutan,1
Botswana,1
Belarus,1
Costa Rica,1
Cuba,1
Cyprus,1
Dominica,1
Dominican Republic,1
Estonia,1
Georgia,1
Guernsey,1
Guatemala,1
Jamaica,1
Libya,1
Madagascar,1
"Macedonia, The Former Yugoslav Republic Of",1
Mozambique,1
Turkmenistan,1
Tunisia,1
Trinidad And Tobago,1
Uruguay,1
"Venezuela, Bolivarian Republic Of",1
Vanuatu,1`,lQ=`Country/Region,Downloads
Armenia,1
Bosnia & Herzegovina,1
Barbados,1
Burkina Faso,1
Benin,1
Brunei Darussalam,1
Bahamas,1
Botswana,1
Belarus,1
"Côte d'Ivoire",1
Costa Rica,1
Cuba,1
Cabo Verde,1
Gabon,1
Iceland,1
Cambodia,1
Cayman Islands,1
"Lao People's Democratic Republic",1
Liberia,1
Lesotho,1
Luxembourg,1
Montenegro,1
Madagascar,1
Mozambique,1
Papua New Guinea,1
Palestinian Territories,1
Reunion,1
Seychelles,1
Somalia,1
Tunisia,1
Yemen,1
Zambia,1
Bahrain,2
"Bolivia, Plurinational State Of",2
Dominican Republic,2
Fiji,2
Georgia,2
Jamaica,2
Lithuania,2
Latvia,2
"Macedonia, The Former Yugoslav Republic Of",2
Mongolia,2
Namibia,2
Puerto Rico,2
Trinidad And Tobago,2
Azerbaijan,3
Guatemala,3
Moldova,3
Mauritius,3
Sierra Leone,3
El Salvador,3
Swaziland,3
Uruguay,3
"Venezuela, Bolivarian Republic Of",3
Argentina,4
Mali,4
Malta,4
Malawi,4
Slovakia,4
Oman,5
Slovenia,5
Rwanda,6
Uzbekistan,6
Croatia,7
Panama,7
Uganda,7
Zimbabwe,7
Hungary,8
"Tanzania, United Republic Of",9
Bulgaria,10
Cyprus,11
Honduras,11
Jordan,11
Nepal,11
Serbia,11
Iraq,12
Saudi Arabia,12
Kazakhstan,14
Sri Lanka,14
Ukraine,14
Cameroon,15
Algeria,15
Switzerland,16
Austria,17
Belgium,18
Czech Republic,18
Israel,19
Morocco,19
United Arab Emirates,24
Norway,25
Portugal,25
Taiwan,26
Viet Nam,26
Lebanon,28
Egypt,29
Ghana,29
Greece,30
Thailand,30
Ireland,32
Russian Federation,33
Finland,35
Hong Kong,35
Kenya,35
South Africa,36
New Zealand,37
Sweden,38
Poland,40
Bangladesh,43
Japan,45
Peru,46
Romania,46
Spain,50
"Iran, Islamic Republic Of",50
Indonesia,52
Netherlands,57
Denmark,61
Ethiopia,63
Colombia,66
"Korea, Republic Of",70
Singapore,73
Nigeria,79
Pakistan,90
Australia,98
Mexico,98
Malaysia,103
Italy,106
Ecuador,125
Brazil,151
Chile,157
Philippines,160
Turkey,169
Germany,178
United Kingdom,222
Canada,227
India,549
China,580
France,1384
United States,4738`,sQ=`Country/Region,Downloads
Afghanistan,1
Bosnia & Herzegovina,1
Barbados,1
Bahamas,1
Bhutan,1
Botswana,1
Cuba,1
Cabo Verde,1
Georgia,1
Guernsey,1
Guatemala,1
Haiti,1
Iceland,1
Jamaica,1
Liberia,1
Lesotho,1
Lithuania,1
Latvia,1
"Macedonia, The Former Yugoslav Republic Of",1
Myanmar,1
Macao,1
Malta,1
Mauritius,1
New Caledonia,1
Papua New Guinea,1
Puerto Rico,1
Slovenia,1
Somalia,1
El Salvador,1
Swaziland,1
Chad,1
Turkmenistan,1
Trinidad And Tobago,1
Uruguay,1
Benin,2
"Bolivia, Plurinational State Of",2
Belarus,2
Fiji,2
Kuwait,2
"Lao People's Democratic Republic",2
Luxembourg,2
Maldives,2
Namibia,2
Tunisia,2
"Tanzania, United Republic Of",2
Zambia,2
Brunei Darussalam,3
Cyprus,3
Kyrgyzstan,3
Cambodia,3
Palestinian Territories,3
Armenia,4
Bulgaria,4
Dominican Republic,4
Estonia,4
Libya,4
Oman,4
Syrian Arab Republic,4
"Venezuela, Bolivarian Republic Of",4
Honduras,5
Albania,6
Ecuador,6
Guyana,6
Kazakhstan,6
Uzbekistan,6
Croatia,7
Jordan,7
Malawi,7
Rwanda,7
Argentina,8
Costa Rica,8
Serbia,8
Burkina Faso,10
Sri Lanka,10
Nepal,10
Zimbabwe,10
Slovakia,11
Uganda,11
Cameroon,12
Hungary,12
Iraq,12
Panama,12
Finland,15
Lebanon,15
New Zealand,18
Chile,21
Ukraine,21
Viet Nam,21
United Arab Emirates,22
Bangladesh,22
Denmark,22
Czech Republic,23
Algeria,23
Saudi Arabia,25
Greece,26
Austria,29
Belgium,29
Hong Kong,30
Israel,30
Ghana,31
Ireland,31
Peru,32
Taiwan,33
South Africa,33
"Iran, Islamic Republic Of",35
Romania,38
Kenya,39
Morocco,39
Thailand,39
Sweden,42
Switzerland,44
Portugal,44
Nigeria,46
Russian Federation,50
Egypt,51
Spain,58
Japan,58
Poland,58
Indonesia,60
"Korea, Republic Of",62
Netherlands,64
Norway,68
Mexico,87
Colombia,89
France,92
Australia,100
Brazil,101
Pakistan,101
Italy,105
Singapore,111
Ethiopia,125
Turkey,144
Malaysia,153
Germany,156
Canada,232
Philippines,235
China,283
United Kingdom,292
India,469
United States,4041`,uQ=`Country/Region,Downloads
Andorra,1
Antigua And Barbuda,1
Angola,1
Burkina Faso,1
Bahrain,1
Benin,1
Democratic Republic Of Congo,1
"Côte d'Ivoire",1
Dominica,1
"Micronesia, Federated States Of",1
Guam,1
Guyana,1
Liberia,1
Moldova,1
Montenegro,1
Myanmar,1
Puerto Rico,1
Paraguay,1
Suriname,1
Syrian Arab Republic,1
Tajikistan,1
Afghanistan,2
Anguilla,2
Brunei Darussalam,2
"Bolivia, Plurinational State Of",2
Botswana,2
Belarus,2
Cuba,2
Estonia,2
Haiti,2
Jamaica,2
Kyrgyzstan,2
Malawi,2
Namibia,2
Palestinian Territories,2
Sudan,2
Somalia,2
Georgia,3
Guatemala,3
Honduras,3
"Macedonia, The Former Yugoslav Republic Of",3
Mongolia,3
Norfolk Island,3
Panama,3
Rwanda,3
Slovenia,3
Slovakia,3
Albania,4
Dominican Republic,4
Cambodia,4
Latvia,4
Qatar,4
Bosnia & Herzegovina,5
Cameroon,5
Croatia,5
Lithuania,5
Libya,5
Oman,5
El Salvador,5
Trinidad And Tobago,5
Armenia,6
Bhutan,6
Cyprus,6
Yemen,6
Jordan,7
Malta,7
Mauritius,7
Tunisia,7
Zambia,7
Costa Rica,8
Argentina,9
Czech Republic,11
Kuwait,11
Uzbekistan,11
Austria,13
Chile,13
Kazakhstan,13
Sri Lanka,13
"Venezuela, Bolivarian Republic Of",13
Serbia,15
Iraq,16
Ecuador,17
Finland,17
Hungary,17
Israel,18
Morocco,18
"Tanzania, United Republic Of",18
Zimbabwe,18
Bulgaria,20
Greece,20
Lebanon,21
Uganda,22
Azerbaijan,23
Romania,23
Algeria,24
Nepal,24
Ukraine,24
Norway,25
Saudi Arabia,25
Belgium,27
Switzerland,27
Ghana,27
Peru,27
Egypt,29
Viet Nam,29
United Arab Emirates,36
Thailand,38
Ethiopia,39
South Africa,41
"Iran, Islamic Republic Of",42
Taiwan,43
Kenya,49
Sweden,53
Bangladesh,56
Denmark,56
New Zealand,56
Poland,57
Japan,62
Spain,65
"Korea, Republic Of",65
Netherlands,72
Portugal,72
Ireland,73
Russian Federation,75
Hong Kong,84
Brazil,87
Malaysia,87
Mexico,96
Indonesia,100
Turkey,100
Italy,110
France,116
Nigeria,118
Pakistan,132
Australia,137
Colombia,153
Germany,160
Philippines,168
China,204
Canada,236
United Kingdom,293
Singapore,455
India,620
United States,4161`,dQ=`Country/Region,Downloads
Bosnia & Herzegovina,1
Burkina Faso,1
Bahrain,1
"Bolivia, Plurinational State Of",1
Bahamas,1
Bhutan,1
Eritrea,1
Grenada,1
Gambia,1
Guyana,1
Honduras,1
Haiti,1
Kyrgyzstan,1
Cayman Islands,1
Monaco,1
Maldives,1
Malawi,1
Norfolk Island,1
Nicaragua,1
Seychelles,1
Sudan,1
Sierra Leone,1
Senegal,1
El Salvador,1
Uruguay,1
"Venezuela, Bolivarian Republic Of",1
Albania,2
Benin,2
Costa Rica,2
Dominica,2
Dominican Republic,2
Guatemala,2
Lesotho,2
Moldova,2
Mongolia,2
Somalia,2
Virgin Islands (US),2
Brunei Darussalam,3
Belarus,3
Cuba,3
Iceland,3
Jamaica,3
Saint Kitts And Nevis,3
Kuwait,3
Luxembourg,3
Papua New Guinea,3
Slovakia,3
Suriname,3
Trinidad And Tobago,3
Armenia,4
Botswana,4
"Côte d'Ivoire",4
Cyprus,4
Palestinian Territories,4
Rwanda,4
Yemen,4
Democratic Republic Of Congo,5
Cameroon,5
Jordan,5
Kazakhstan,5
Tunisia,5
Uzbekistan,5
Latvia,6
Oman,6
Puerto Rico,6
Qatar,7
Cambodia,8
Slovenia,8
Uganda,8
Croatia,9
Mauritius,9
Bulgaria,10
"Macedonia, The Former Yugoslav Republic Of",10
Georgia,11
Mozambique,11
Ecuador,12
Myanmar,12
Lithuania,13
Czech Republic,14
Estonia,14
Lebanon,14
Libya,14
Nepal,14
Greece,16
"Tanzania, United Republic Of",16
United Arab Emirates,17
Serbia,18
Zimbabwe,18
Chile,19
Hungary,19
Morocco,19
Algeria,21
Argentina,23
Ireland,23
Finland,24
Austria,25
Israel,25
Sri Lanka,25
Portugal,25
Saudi Arabia,25
Ukraine,26
Zambia,26
Azerbaijan,27
Belgium,31
Iraq,32
Poland,32
Switzerland,33
Kenya,35
Taiwan,35
Bangladesh,44
Denmark,44
New Zealand,44
Romania,44
Egypt,47
"Iran, Islamic Republic Of",48
Ethiopia,50
Thailand,52
South Africa,56
Norway,60
Sweden,61
Peru,72
Malaysia,74
Viet Nam,76
"Korea, Republic Of",82
Mexico,83
Nigeria,83
Ghana,85
Japan,89
Turkey,94
Hong Kong,96
Brazil,112
Spain,112
Pakistan,116
Italy,117
Russian Federation,124
Netherlands,125
Colombia,138
France,164
Indonesia,181
Australia,209
Philippines,223
Germany,249
Singapore,358
Canada,394
United Kingdom,415
India,774
China,782
United States,6040`,fQ=`Country/Region,Downloads
Anguilla,1
Armenia,1
Brunei Darussalam,1
Bahamas,1
Democratic Republic Of Congo,1
Djibouti,1
Guadeloupe,1
Saint Kitts And Nevis,1
Cayman Islands,1
Mauritius,1
Mozambique,1
Norfolk Island,1
Qatar,1
Suriname,1
Syrian Arab Republic,1
Togo,1
"Timor-Leste, Democratic Republic of",1
Turkmenistan,1
Virgin Islands (US),1
Samoa,1
Botswana,2
Republic Of Congo,2
Cabo Verde,2
Dominica,2
Eritrea,2
Haiti,2
Kuwait,2
Mali,2
Mongolia,2
Niger,2
French Polynesia,2
Reunion,2
Sudan,2
Swaziland,2
Tajikistan,2
Benin,3
Cuba,3
French Guiana,3
Gambia,3
Iceland,3
Saint Lucia,3
Moldova,3
"Macedonia, The Former Yugoslav Republic Of",3
New Caledonia,3
Nicaragua,3
Puerto Rico,3
Somalia,3
El Salvador,3
Saint Vincent And The Grenadines,3
Yemen,3
Bosnia & Herzegovina,4
Kyrgyzstan,4
Luxembourg,4
Mauritania,4
Malawi,4
Papua New Guinea,4
Seychelles,4
Barbados,5
Guinea,5
Guatemala,5
"Lao People's Democratic Republic",5
Namibia,5
Belize,6
Curacao,6
Cyprus,6
Cambodia,6
Latvia,6
Montenegro,6
Slovenia,6
Afghanistan,7
Dominican Republic,7
Gabon,7
Madagascar,7
Cameroon,8
Jamaica,8
Lesotho,8
Libya,8
Trinidad And Tobago,8
Zambia,8
Belarus,9
"Côte d'Ivoire",9
Georgia,9
Palestinian Territories,9
Senegal,9
"Tanzania, United Republic Of",9
Zimbabwe,9
Honduras,10
Lebanon,10
Myanmar,10
Oman,10
Rwanda,10
Slovakia,10
Tunisia,10
Bahrain,11
Panama,11
"Bolivia, Plurinational State Of",12
Costa Rica,12
Croatia,12
Jordan,12
Serbia,12
Angola,13
Estonia,13
Hungary,13
Uganda,14
Uruguay,14
Burkina Faso,15
Bulgaria,15
Albania,16
Kazakhstan,16
Israel,17
Sri Lanka,17
Czech Republic,18
Ethiopia,19
Belgium,20
Nepal,20
"Venezuela, Bolivarian Republic Of",20
Azerbaijan,21
Paraguay,21
Uzbekistan,21
Saudi Arabia,25
Portugal,26
United Arab Emirates,28
Chile,28
Algeria,28
Greece,28
Lithuania,28
Finland,29
Kenya,31
Norway,35
Ghana,37
Austria,38
Denmark,38
"Iran, Islamic Republic Of",38
Switzerland,39
Sweden,41
Morocco,44
Ukraine,44
Egypt,45
New Zealand,49
Poland,50
Taiwan,52
Peru,53
Romania,58
Ecuador,59
Bangladesh,60
Iraq,61
South Africa,67
Argentina,71
Nigeria,71
Spain,78
Ireland,95
Pakistan,101
Malaysia,106
Colombia,109
Australia,120
Mexico,127
Turkey,136
Italy,137
Netherlands,143
Russian Federation,149
Japan,151
France,168
Thailand,179
"Korea, Republic Of",192
Hong Kong,247
Philippines,250
Canada,274
Viet Nam,296
Germany,305
Indonesia,320
United Kingdom,415
India,584
Singapore,957
China,1033
Brazil,1425
United States,7212`,mQ=`Name,Type,Downloads
Claremont University Consortium,Education,37
Vardha Info Tech Private Limited,Commercial,12
Cedexis Inc,Commercial,5
Smith College,Education,4
Guangzhou,Commercial,4
Pern-Pakistan Education & Research Network is an,Library,3
Wolfram Research Inc.,Commercial,3
Academic Computer Centre CYFRONET AGH,Education,3
North Carolina Research and Education Network,Education,2
York University,Education,2
Tufts University,Education,2
Universiteit van Amsterdam,Education,2
Uniwersytet Marii Curie Sklodowskiej,Education,2
Universidad Autonoma Metropolitana,Education,2
The Monmouth College,Education,2
Boa Vista Telec. Ltda.,Commercial,2
Secretaria de Comunicaciones Y Transportes Coordinacion de la Sociedad de la Informacion Y El Conoci,Government,1
Department of Veterans Affairs,Government,1
New York University,Education,1
University of Pittsburgh,Education,1
University of Florida,Education,1
University of Sheffield,Education,1
University of Minnesota,Education,1
University of Southampton,Education,1
Cornell University,Education,1
Carnegie Mellon University,Education,1
University of Cambridge,Education,1
University of Chicago,Education,1
University of Illinois,Education,1
Cardiff University,Education,1
Case Western Reserve University,Education,1
Alberta Health Services,Government,1
Trinity College Dublin,Education,1
University of Southern California,Education,1
University of Virginia,Education,1
Carroll College,Education,1
University of North Carolina at Chapel Hill,Education,1
Michigan State University,Education,1
Universidad de Antioquia,Education,1
West Virginia State University,Education,1
Technische Universitaet Kaiserslautern,Education,1
University of Michigan,Education,1
Syracuse University,Education,1
The Pennsylvania State University,Education,1
Johns Hopkins University,Education,1
National Aeronautics and Space Administration,Government,1
Butler University,Education,1
Chalmers University Network,Education,1
The City University of New York,Education,1
Minnesota State Colleges and Universities,Education,1
University of Oklahoma,Education,1
International House,Education,1
California State University Long Beach,Education,1
Appalachian State University,Education,1
The University of Birmingham,Education,1
University of Liverpool,Education,1
State University of New York at Buffalo,Education,1
Pepperdine University,Education,1
Davis School District,Education,1
Fermi National Accelerator Laboratory,Government,1
Universidad Industrial de Santander - Uis,Education,1
ENSTA Paristech - Ecole Nationale Superieure des Techniques Avancees,Commercial,1
Auna,Commercial,1
Southern Nazarene University,Education,1
University of Sydney,Education,1
California State Polytechnic University - Pomona,Education,1
Dalian University of Technology,Education,1
Persona Communications,Commercial,1
Pptik - Universitas Gadjah Mada.,Education,1
Isfahan University of Technology,Education,1
Generalitat Valenciana,Commercial,1
Universidad de Alcala de Henares,Education,1
University of Sussex,Education,1
Bulgarian Research and Education Network Association (Bren),Organization,1
Qatar Foundation for Education Science and Community Development,Education,1
"Universita' degli Studi di Napoli Federico II",Education,1
Fakultet strojarstva i brodogradnje,Commercial,1
Anna University of Technology Coimbatore,Education,1
ZTS Echostar Studio,Commercial,1
ENI SpA,Commercial,1
Campus CNRS Laboratoire Cefe,Commercial,1
Universidad Autonoma de Chihuahua,Education,1
Arizona Western College,Education,1
Legacy Resorts Zermatt,Commercial,1
Computational Dynamics Ltd.,Commercial,1
Genius On Line Comercios e Serv. Ltda. EPP,Commercial,1
Zenith Electronics Corporation,Commercial,1
The Evergreen State College,Education,1
Manhattan College,Education,1
Aragon de Cable - CMS Miraflores,Commercial,1
Empresarios Agrupados Aie,Commercial,1
Technische Universitaet Hamburg-Harburg,Education,1
Moravian College,Education,1
Autoridad Nacional Para la Innovacion Gubernamental,Commercial,1
Assam Engineering College,Education,1
Gardner-Webb University,Education,1
Long Beach CCD,Education,1
The University of Manchester,Education,1
Lubumbashi Pop.,Commercial,1
Computer Centre of State University of Moldova,Education,1
TM GE Automation Systems LLC BGP,Commercial,1
Modern Montissori,Commercial,1
Rijksuniversiteit Groningen,Education,1
Liceo Scientifico Donatelli Pascal,Commercial,1
NSW Department of Education,Education,1
LLC Masterhost,Commercial,1
GTPL Sorath Telelink Pvt Ltd,Commercial,1
Multimedia University,Education,1
University of Pannonia,Education,1
Unitcom Eesti Ou,Commercial,1
Schweizerische Rueckversicherungsgesellschaft,Commercial,1
LLC Econotel,Commercial,1`,hQ=`Name,Type,Downloads
Guangzhou,Commercial,116
Ford Motor Company,Commercial,11
University of California Irvine,Education,11
Claremont University Consortium,Education,10
Fakultet strojarstva i brodogradnje,Commercial,9
Oberlin College,Education,8
Washington State Board for Community & Technical Colleges,Education,7
Rose-Hulman Institute of Technology,Education,6
UP Diliman Network,Education,6
Technical University of Sofia,Education,6
Ohlone College - Fremont - Newark CC,Education,6
Instituto Politecnico Nacional,Organization,5
Indiana University,Education,4
Purdue University,Education,4
National Aeronautics and Space Administration,Government,4
Eastern Washington University,Education,4
Los Angeles Comm College District,Education,4
Wolfram Research Inc.,Commercial,4
DATAPORT - Anstalt des Oeffentlichen Rechts,Commercial,4
International Organisatio,Commercial,4
Bahir Dar University Main Campus,Education,4
Allen Gates,Commercial,4
Ceske Vysoke Uceni Technicke v Praze,Education,4
Texas A&M University,Education,3
University of Washington,Education,3
University of Texas at Dallas,Education,3
Louisiana State University,Education,3
University of Colorado,Education,3
Kansas State University,Education,3
Westminster College of Salt Lake City,Education,3
Niagara University,Education,3
University of Adelaide,Education,3
Universidad Miguel Hernandez,Education,3
Bulgarian Academy of Sciences,Commercial,3
Presidency University Kolkata,Education,3
Marpin2K,Commercial,3
Azad University of Ahar,Education,3
University of Florida,Education,2
Northwestern University,Education,2
California State University Office of the Chancellor,Education,2
Iowa State University,Education,2
University of Houston,Education,2
University of New South Wales,Education,2
Case Western Reserve University,Education,2
Virginia Commonwealth University,Education,2
University of Massachusetts - Lowell,Education,2
University of San Diego,Education,2
The Pennsylvania State University,Education,2
Utah State University,Education,2
University of Alaska,Education,2
North Carolina State University,Education,2
Maricopa County Community College District,Education,2
Arkansas Tech University,Education,2
California State University Long Beach,Education,2
Sungkyunkwan University,Education,2
City University of Hong Kong,Education,2
Universidad Politecnica de Madrid,Education,2
Lanka Education and Research Network,Education,2
Humboldt-Universitaet zu Berlin,Education,2
Indiana University of Pennsylvania,Education,2
Mabe S.A. de C.V.,Commercial,2
The Calyx Institute,Organization,2
LKF,Commercial,2
Technikon Pretoria,Education,2
Seismic Exchange Inc.,Commercial,2
Kasetsart University Thailand,Education,2
Hi-Tech Isolutions LLP,Commercial,2
Home Pripojeni Radius,Commercial,2
Headquarters USAISC,Military,1
Red de Interconexion Universitaria,Education,1
Colorado State University,Education,1
University of Utah,Education,1
University of Connecticut,Education,1
University of Leicester,Education,1
Ohio State University,Education,1
Illinois Institute of Technology,Education,1
University of Pennsylvania,Education,1
Temple University,Education,1
University of Wisconsin Madison,Education,1
Florida State University,Education,1
University of Puget Sound,Education,1
University of California Davis,Education,1
University of Southampton,Education,1
Boston College,Education,1
Missouri University of Science and Technology,Education,1
Virginia Polytechnic Institute and State Univ.,Education,1
University of Toronto,Education,1
Kent State University,Education,1
Drexel University,Education,1
University of Leeds,Education,1
University of Chicago,Education,1
Danmarks Tekniske Universitet,Education,1
The Bloomsbury Computing Consortium,Education,1
University of South Florida,Education,1
McGill University,Education,1
Universiteit Twente,Education,1
Gwinnett County Public Schools,Education,1
University of Montana,Education,1
California State University Northridge,Education,1
University of Southern California,Education,1
Harvard University,Education,1
University of Virginia,Education,1
Florida International University,Education,1
University of Nevada Reno,Education,1
Leidos Inc.,Commercial,1
University of Rhode Island,Education,1
Pacific Northwest National Laboratory,Government,1
UFPR,Commercial,1
TXTV d.o.o. Tuzla,Commercial,1
University of Ottawa,Education,1
Universidad Nacional de Colombia,Education,1
University of California at Berkeley,Education,1
Loyola University Chicago,Education,1
University of Guelph,Education,1
University of Nigeria,Education,1
Franklin and Marshall College,Education,1
Universidad de Concepcion,Education,1
University of Louisville,Education,1
Clemson University,Education,1
East Side Union High School District,Education,1
Washington University,Education,1
York University,Education,1
University of California San Diego,Education,1
Rochester Institute of Technology,Education,1
Oklahoma Office of Management & Enterprise Services,Government,1
Tulane University,Education,1
Lafayette Consolidated Government,Government,1
University of Wisconsin - Eau Claire,Education,1
University of Texas at San Antonio,Education,1
Universiteit Maastricht,Education,1
Oakland Schools,Education,1
Butler University,Education,1
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,1
Middle Tennessee State University,Education,1
Chalmers University Network,Education,1
Gigared S.A.,Commercial,1
SUNY Geneseo Computer Center,Education,1
Kenyon College,Education,1
Vermont State Colleges,Education,1
Charles University,Education,1
Universidad Pontificia Bolivariana,Education,1
Consorci de Serveis Universitaris de Catalunya,Education,1
Universiti Teknologi MARA,Education,1
Hillsborough County Public Schools,Education,1
Istanbul University,Education,1
Arkansas Public School Computer Network,Education,1
New Jersey Institute of Technology,Education,1
Worcester Polytechnic Institute,Education,1
University of New Orleans,Education,1
TBC,Commercial,1
Amherst College,Education,1
Universidad Carlos III de Madrid,Education,1
Eotvos Lorand University of Sciences,Education,1
University of Wisconsin - Platteville,Education,1
Carleton College,Education,1
Missouri State University,Education,1
Thammasat University,Education,1
Brno University of Technology,Education,1
Stichting Duwo,Commercial,1
Malaviya National Institute of Technology Jaipur,Education,1
Hacettepe University,Education,1
Cisco Systems Inc.,Commercial,1
Univer,Commercial,1
A.G. Edwards & Sons Inc.,Commercial,1
Ball State University,Education,1
Connecticut College,Education,1
University of Warsaw,Education,1
Macqua,Education,1
University of Thessaly,Education,1
University of Houston - Downtown,Education,1
Australian Defence Organization,Military,1
Bellarmine University,Education,1
Sabanci University,Education,1
Whitman College,Education,1
Vaughn College,Education,1
John Carroll university,Education,1
Universiti Sains Malaysia Penang Malaysia,Education,1
Peking University New Campu Network,Education,1
Crystal Automation Systems Inc,Commercial,1
Christchurch College of Education,Education,1
Universitaet Kiel,Education,1
Computer and Information Technology Center of,Education,1
Isfahan University of Technology,Education,1
Singapore Polytechnic,Education,1
Riken,Organization,1
Rogers Cable Inc. NWDN,Commercial,1
Wyoming Seminary,Organization,1
Bharathidasan University-Tiruchirapalli,Education,1
Kadi Sarva Vishwavidyalaya Gandhinagar,Commercial,1
Norwich University,Education,1
National Institute of Ocean Technology Chennai,Organization,1
Anna University Chennai,Education,1
Wireline Solutions Pvt Ltd,Commercial,1
Jamal Mohammed College,Education,1
Turk-Alman Universitesi,Commercial,1
Karlsruhe Institute of Technology,Education,1
Jozef Stefan Institute,Organization,1
Bar Ilan University,Education,1
Nisatel LTD,Commercial,1
Marmara University,Education,1
Motilal Nehru National Institute of Technology (Mnnit) Allhabad,Organization,1
National Technical University of Athens,Education,1
"Universita' degli Studi di Napoli Federico II",Education,1
Hartpury College,Education,1
Roskilde Tekniske Skole,Commercial,1
Indian Institute of Technology Indore,Education,1
Nianet Core Network and Servers,Commercial,1
Universitat Politecnica de Valencia,Education,1
Technological University Dublin,Education,1
Scuola Internazionale Superiore di Studi Avanzati,Education,1
GeCom s.r.o.,Commercial,1
Nicolaus Copernicus University in Torun,Education,1
Christopher Newport University,Education,1
Universidad Autonoma Metropolitana,Education,1
Western Kentucky University,Education,1
St. Edwards University,Education,1
City of Atlanta Dept of Av - AEP LAN,Government,1
Korea Institute of Machinery & Materials,Organization,1
Md. Emdadul Hoque,Commercial,1
CNRST,Commercial,1
Rioja,Commercial,1
University of Ruse Angel Kanchev,Education,1
Universidad Politecnica de Cartagena,Education,1
Flathead Valley Community College,Education,1
Ben Gurion University,Education,1
BML Munjaal University,Education,1
Nortenet Telecomunicacoes do Brasil Ltda - EPP,Commercial,1
Nadar Saraswathi College of Engineering and Technology,Education,1
Octopuce s.a.r.l.,Commercial,1
Institut Polytechnique LaSalle-Beauvais,Commercial,1
Texas A&M University San Antonio,Education,1
"Ecole Nationale des Travaux Publics de l'Etat",Commercial,1
Universidad Tecnologica de Panama,Commercial,1
Recordati Industria Chimica e Farmaceutica S.p.A.,Commercial,1
The University of Manchester,Education,1
Hard Rock Hotel,Commercial,1
Assoc do Inst Nac de Matematica Pura e Aplicada,Commercial,1
TOR Exit Gateway,Commercial,1
The Net of Lysva Polytechnical College,Education,1
Mathematical Reviews,Education,1
Col la Cumbre,Commercial,1
Masarykova univerzita - Ustav vypocetni techniky,Education,1
Intellectual Ventures Management LLC,Commercial,1
Agnieszka Jolanta Koczur trading as Fryznet,Commercial,1
Managerial Cadre Collage of South China Agricultural University,Education,1
Institute of Physics of the Polish Academy of Sciences Warsaw Poland,Education,1
Wireless Comm Services Ltda,Commercial,1
Kyambogo University,Education,1
The Net of Perm Electric-Mechanical College,Education,1
Miami Cloud,Commercial,1
Emerald Park Sdn Bhd,Commercial,1
National Institute of Science Education and Research,Organization,1
KDDI Summit Global Myanmar Company Limited,Commercial,1
Foreningen for Digitala Fri- och Rattigheter,Commercial,1
Broward College,Education,1
Bergen County Vocational Technical School District,Education,1
Rainbow Communications India Pvt Ltd,Commercial,1
CERFnet Customer - California Lutheran University,Education,1
Anses Siege,Organization,1
Severo-Zapad Ltd,Commercial,1
Universitaet Siegen,Education,1
Muhammad rakibul hassan t/a Business Network,Commercial,1
RUNet,Commercial,1
Gabriele Innocenti Trading as Windsl di Innocenti,Commercial,1
University Library in Bratislava,Education,1
University of Tennessee Knoxville,Education,1
Fesenko Igor Mikolayovich,Commercial,1
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,1
Revai Miklos Gimnazium,Commercial,1
19 Mayis University,Education,1
Quintex Alliance Consulting,Commercial,1
Used for P2P Connections to Universities,Education,1
Erasmus Universiteit Rotterdam,Education,1
Moscow State Institute of a Radio Engineering Electronics and Automatics,Education,1
Centro de Investigacion y Docencias Economicas,Education,1
Sit Treyd Ltd.,Commercial,1
Isnet SP.Jawna,Commercial,1
St. Charles Community College,Education,1
Universitatea din Oradea,Education,1
Lulea Tekniska Universitet,Education,1
Institute for Research in Fundamental Sciences,Education,1`,vQ=`Name,Type,Downloads
Guangzhou,Commercial,128
Universiti Teknologi Malaysia,Education,16
Claremont University Consortium,Education,13
Delft University of Technology Network,Education,10
University of Toronto,Education,10
General Motors LLC,Commercial,10
University of Indianapolis,Education,9
California State University at Fresno,Education,7
Fakultet strojarstva i brodogradnje,Commercial,7
California State University Office of the Chancellor,Education,6
Stanford University,Education,6
Eastern Washington University,Education,6
University of Wisconsin - River Falls,Education,6
Washington State Board for Community & Technical Colleges,Education,5
Saint Bonaventure University,Education,5
Grupo Iberdrola S.A.,Commercial,5
Instituto Tecnologico Y de Estudios Superiores de Monterrey,Education,4
McGill University,Education,4
Universiteit van Amsterdam,Education,4
Universidad Complutense de Madrid,Education,4
Gaziantep University,Education,4
University of Wisconsin Colleges,Education,4
Elevate,Commercial,4
University of Georgia,Education,3
Colleges of the Fenway Inc.,Education,3
Niagara University,Education,3
University of Evansville,Education,3
Universidad Autonoma de Occidente,Education,3
Peninsula Technikon,Education,3
Manhattan College,Education,3
Trinidad State Junior College,Education,3
Indiana University,Education,2
Georgia State University,Education,2
University of Wisconsin Madison,Education,2
University of Stellenbosch,Education,2
Grand Valley State University,Education,2
University of Waterloo,Education,2
University of South Alabama,Education,2
Lafayette Consolidated Government,Government,2
University of Dayton,Education,2
Rose-Hulman Institute of Technology,Education,2
Western Illinois University,Education,2
University of Oslo,Education,2
McMaster University,Education,2
Ecole Polytechnique de Montreal,Education,2
Ecole de Technologie Superieure,Education,2
Ball State University,Education,2
University of Cincinnati,Education,2
Korean Education Network,Education,2
NKN Institute,Organization,2
Akademska mreza Republike Srbije - AMRES,Education,2
Delhi University North Campus,Education,2
Universiteit Antwerpen,Education,2
Central Washington University,Education,2
SXTY Xinghua BAS,Commercial,2
KISTI,Government,2
ONS,Commercial,2
Technical University of Kenya,Education,2
Rijksuniversiteit Groningen,Education,2
Etisalat Benin,Commercial,2
University of Mines and Technology,Education,2
Utah State University Eastern,Education,2
R.W. Investment LLC,Commercial,2
Headquarters USAISC,Military,1
Swansea University,Education,1
Universidad Nacional Autonoma de Mexico,Education,1
Colorado State University,Education,1
Ohio State University,Education,1
Illinois Institute of Technology,Education,1
University of Pennsylvania,Education,1
University of Pittsburgh,Education,1
Washington State University,Education,1
Georgia Institute of Technology,Education,1
Virginia Polytechnic Institute and State Univ.,Education,1
BASF Corporation,Commercial,1
Iowa State University,Education,1
Concordia University,Education,1
Queens University Belfast,Education,1
Community-Technical Colleges State of Connecticut,Education,1
University of California Riverside,Education,1
Duke University,Education,1
Auburn University,Education,1
Bandar Seri Iskandar,Education,1
University of South Florida,Education,1
University of Texas at Dallas,Education,1
Ludwig-Maximilians-Universitaet Muenchen,Education,1
University of Durham,Education,1
North Carolina Research and Education Network,Education,1
Virginia Commonwealth University,Education,1
California State University Northridge,Education,1
Harvard University,Education,1
University of Massachusetts - Lowell,Education,1
Oberlin College,Education,1
Princeton University,Education,1
Indian Institute of Technology Kharagpur India,Education,1
Bennington College,Education,1
University of Ottawa,Education,1
East Tennessee State University,Education,1
University of Glasgow,Education,1
University of California at Berkeley,Education,1
University of Hartford,Education,1
University of Guelph,Education,1
The Pennsylvania State University,Education,1
Johns Hopkins University,Education,1
Weber State University,Education,1
University of Keele,Education,1
Universiti Malaysia Sarawak,Education,1
Arkansas Tech University,Education,1
Central Michigan University,Education,1
National Science Foundation,Government,1
Cumberland University - 1 Cumb,Education,1
California Institute of Technology,Education,1
Imperial College London,Education,1
London School of Hygiene and Tropical Medicine,Education,1
Dickinson College,Education,1
San Jose State University,Education,1
Tahlequah Cable Television Inc.,Commercial,1
Nigerian Research and Education Network Limited by Guarantee,Education,1
Charles University,Education,1
Colgate University,Education,1
Consorci de Serveis Universitaris de Catalunya,Education,1
Connecticut State University System,Education,1
Denver Public Schools,Education,1
Korea Advanced Institute of Science and Technology,Education,1
Linkoping University,Education,1
Earlham College,Education,1
Oxford Brookes University,Education,1
Nvidia Corporation,Commercial,1
Max Planck Institut fuer Molekulare Physiologie,Education,1
Brandeis University,Education,1
Amrita Vishwa Vidyapeetham University,Education,1
Universite du Quebec,Education,1
Brno University of Technology,Education,1
City College of San Francisco,Education,1
University of Colorado Denver,Education,1
College of Engineering Thiruvananthapuram,Education,1
University of Denver,Education,1
Bogazici University,Education,1
Freie Universitaet Berlin,Education,1
Universitaet Paderborn,Education,1
St. Catherine University,Education,1
Seoul National University,Education,1
Loughborough University,Education,1
Vienna University Computer Center,Education,1
Calvin College,Education,1
University of North Carolina at Greensboro,Education,1
Universitaet Leipzig,Education,1
Southern Nazarene University,Education,1
Rensselaer Hartford Graduate Center,Education,1
Brigham Young University - Idaho,Education,1
Solano County Community College District,Education,1
Fayetteville State University,Education,1
Universidad del Valle,Education,1
Wolfram Research Inc.,Commercial,1
Universiti Sains Malaysia Penang Malaysia,Education,1
University of Bristol,Education,1
Clientes Machala,Commercial,1
Politechnika Warszawska,Education,1
Lanka Education and Research Network,Education,1
Jilin University,Education,1
Harbin Institute of Technology,Education,1
The University of Science and Technology of China,Education,1
Walla Walla University,Education,1
Deerfield Academy,Education,1
The University of Electro-Communications,Education,1
Kerala Veterinary & Animal Science University,Education,1
Kazan University,Education,1
Madras University,Education,1
BWI Systeme GmbH,Commercial,1
University of Wollongong,Education,1
Technische Universitat Wien,Education,1
Perm State University,Education,1
Marmara University,Education,1
Newcastle City Council,Government,1
Universidad de Almeria,Education,1
Zonguldak Karaelmas University,Education,1
CMFRI,Organization,1
Technical University of Gdansk Academic Computer Center Task,Education,1
Indian Institute of Science Education and Research Mohali,Education,1
Fort Hays State University,Education,1
Universidad de Valparaiso,Education,1
Universidad Catolica de Valparaiso,Education,1
Christopher Newport University,Education,1
Emporia State University,Education,1
Acadia University,Education,1
Universidad Autonoma Metropolitana,Education,1
Wayne County Regional EducationalService Agency,Education,1
Politechnika Czestochowska,Commercial,1
Western Kentucky University,Education,1
Saginaw Valley State University,Education,1
Wacker Chemie AG,Commercial,1
The Ridley School District,Education,1
University of Central Arkansas,Education,1
Sheridan College,Education,1
Universidad del Valle de Guatemala,Education,1
Servicios Tigo Home,Commercial,1
Columbus State University,Education,1
ITI (Gas Rahat Building) Campus,Commercial,1
Computational Dynamics Ltd.,Commercial,1
Centro de Investigacion y Tecnologia Agroalimentaria,Government,1
Artvin Coruh University,Education,1
Carlow University,Education,1
University of Jamestowm,Education,1
C Age Trading,Commercial,1
Mashuntucket Pequot Tribe,Government,1
Chlef University,Education,1
European Synchrotron Radiation Facility,Organization,1
Colorado Mesa University,Education,1
Administracion Federal de Ingresos Publicos,Government,1
Nova Scotia Power,Commercial,1
Haines Computer Shop,Commercial,1
DKTE Text & engg institute IKR,Organization,1
Nazarbaevyniver,Education,1
D Y Patil Technical Campus Talsande,Commercial,1
University of Music and Dramatic Arts in Graz,Education,1
Universidad Nacional de Loja,Education,1
Pensacola Christian College,Education,1
Washington & Jefferson College,Education,1
Savvysherpa,Commercial,1
Amarillo College,Education,1
Long Beach CCD,Education,1
The University of Manchester,Education,1
Universitaet fuer angewandte Kunst Wien,Education,1
Birmingham Jefferson Convention Complex,Organization,1
Atos IT Services UK Ltd,Commercial,1
North West University,Education,1
College Gerald Godin,Education,1
Aero Vodochody A.S.,Commercial,1
Autotote,Commercial,1
H&R Business Dev. Inc.,Commercial,1
Bahir Dar University Main Campus,Education,1
Makerere University Main Campus,Education,1
Jiwaji University Gwalior (M.P.) India,Education,1
Fondation RESTENA,Organization,1
Federal University of Technology Akure,Education,1
Tekynik Solucoes Tecnologicas Ltda-EPP,Commercial,1
I.NET S.p.A,Commercial,1
Snowball Effect CC,Commercial,1
Aljeel Aljadeed for Technology,Commercial,1
West Monroe Partners - Seattle,Commercial,1
Zapadoceska univerzita v Plzni,Commercial,1
CUGC,Commercial,1
Universidad Nac. Federico Villarreal - Unfv,Education,1
Florida Southwestern State College,Education,1
Cissps.com LLC,Commercial,1
Yeshiva University,Education,1
Eskom Holdings Soc Ltd,Commercial,1
Fundacao Universidade Federal do Abc - UFABC,Education,1
Zencurity ApS,Commercial,1
R2 Net Solutions Pvt Ltd,Commercial,1
Qendra Nderuniversitare e Sherbimeve dhe Rrjeti Telematik,Education,1
Istanbul Teknik Universitesi,Education,1
Orange Business Services-SITA Internet Services - IT Aggregate,Commercial,1
Algerian Academic Research Network,Organization,1
PT. Internet Madju Abad Millenindo,Commercial,1
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,1
Samsung India Software Operations,Commercial,1
OSANET Metropolitan Academic Network,Commercial,1
Allo telecom,Commercial,1
Verelox Inc.,Commercial,1
The Pirbright Institute,Education,1
Railwire Ludhiana,Commercial,1
Haute Ecole D Ingenierie et de Gestion du Canton de Vaud,Education,1
United Arab Emirates University,Education,1
Quintex Alliance Consulting,Commercial,1
brightONE GmbH,Commercial,1
SETI Institute,Education,1
Andreas Fink Trading as Fink Telecom Services,Organization,1
Universidad Industrial de Santander - UIS,Education,1
Islamic University in Uganda - Mbale Campus,Education,1
Augusta University,Education,1
Subnet 4 to 32 Hosts di Customers,Commercial,1
Kwame Nkrumah University of Science and Technology,Education,1
Shashemane Ericsson APN Natting,Education,1
Hochschule fuer nachhaltige Entwicklung Eberswalde,Organization,1
University of Kisubi,Education,1
The University of Edinburgh,Education,1
Institute for Research in Fundamental Sciences,Education,1
3S Fibertech Sp. z o.o.,Commercial,1
Universidad de Ingenieria y Tecnologia,Education,1
Huawei Technologies(UK)Co.Ltd,Commercial,1
Wuxi Jiangyin Tsat Tea House Tea House,Commercial,1
Rutgers University,Education,1`,pQ=`Name,Type,Downloads
Oberlin College,Education,40
Virginia Polytechnic Institute and State Univ.,Education,35
Allocated to ROEDUNET Connected Highschools,Education,26
Claremont University Consortium,Education,25
Dickinson College,Education,24
Smith College,Education,18
Trinity University,Education,14
Niagara University,Education,12
Ruhr-Universitaet Bochum,Education,12
Kappa E-Ventures Private Limited,Commercial,12
California State University Office of the Chancellor,Education,11
Massachusetts Institute of Technology,Education,11
College of Western Idaho,Education,11
North Central College,Education,10
Thomas Jefferson National Accelerator Facility,Organization,9
University of Maryland,Education,8
Texas A&M University San Antonio,Education,8
Red Universitaria Nacional,Education,7
Bergen University Norway,Education,7
ICT-WiMAX Pool,Commercial,7
Loyola University Chicago,Education,6
Universiti Teknologi MARA,Education,6
Universidad de Burgos,Education,6
Anna University Chennai,Education,6
Universitatea Sapientia,Commercial,6
Alma College,Education,6
Haiti Networking Group S.A.,Commercial,6
Bangladesh Online Ltd,Commercial,6
General Motors LLC,Commercial,6
Harvard University,Education,5
Facebook Inc.,Commercial,5
Universiti Sains Malaysia Penang Malaysia,Education,5
Headquarters USAISC,Military,4
Washington State University,Education,4
Texas A&M University,Education,4
Cornell University,Education,4
University of Colorado,Education,4
Colleges of the Fenway Inc.,Education,4
Universiti Putra Malaysia Campus Network,Education,4
Rollins College,Education,4
University of Indianapolis,Education,4
KISTI,Government,4
UE Exponetial OOD,Commercial,4
Ianciuc Invest SRL,Commercial,4
University of Puget Sound,Education,3
Arizona State University,Education,3
University of British Columbia,Education,3
Emory University,Education,3
Syracuse University,Education,3
Eastern Washington University,Education,3
Bucknell University,Education,3
The College of New Jersey,Education,3
Bowdoin College,Education,3
Tehnicki fakultet Rijeka,Commercial,3
Fakultet strojarstva i brodogradnje,Commercial,3
Millersville University,Education,3
Muhlenberg College,Education,3
WiMAX Users Pool,Commercial,3
Consortium GARR,Education,3
Proszynski Media sp. z o.o.,Commercial,3
Spiral Studios,Commercial,3
"Private Joint Stock Company Datagroup'",Commercial,3
University of Warwick,Education,3
Infegy Inc.,Commercial,3
Universidad Ciencias Pedagogicas,Government,3
Five Net Service Provider Pvt. Ltd.,Commercial,3
Universitas Muhammadiyah Surakarta,Education,3
Avnet TS Spain S.L.,Commercial,3
University of Minnesota,Education,2
University of Washington,Education,2
Technische Universitaet Dresden,Education,2
University of Toronto,Education,2
Danmarks Tekniske Universitet,Education,2
McGill University,Education,2
Carleton University,Education,2
Princeton University,Education,2
Purdue University,Education,2
Bennington College,Education,2
University of Glasgow,Education,2
University of California at Berkeley,Education,2
Liverpool John Moores University,Education,2
Universidade Estadual de Campinas,Education,2
Johns Hopkins University,Education,2
University of California San Diego,Education,2
University of Dayton,Education,2
Ithaca College,Education,2
San Francisco International Airport,Commercial,2
Consorci de Serveis Universitaris de Catalunya,Education,2
Norwegian University of Science and Technology,Education,2
University of Oslo,Education,2
Instituto Nacional de Pesquisas Espaciais,Commercial,2
Florida Agricultural and Mechanical University,Education,2
University of Scranton,Education,2
Korean Education Network,Education,2
NTU,Education,2
Tianjin University,Education,2
University of Bath,Education,2
Cotel Ltda.,Commercial,2
University of Portland,Education,2
University of Venda,Education,2
Omnova Solutions Inc,Commercial,2
Reliance,Commercial,2
Longmont Power & Communications,Government,2
Facebook Ireland Ltd,Commercial,2
Scottish Common Services Agency,Government,2
E! Entertainment Television Inc.,Commercial,2
Universidad Popular Autonoma del Estado de Puebla,Education,2
Orangeburg-Calhoun Technical College,Education,2
Academic Computer Centre CYFRONET AGH,Education,2
Brandenburgische Technische Universitaet Cottbus-Senftenberg,Education,2
Universite de Geneve,Education,2
Colt Technology Services Co. Ltd.,Commercial,2
University of St Francis,Education,2
Homax Industries Limited,Commercial,2
Institute for Research in Fundamental Sciences,Education,2
InfoPlan,Commercial,2
LHTDL HK,Commercial,2
Rutgers University,Education,2
Kingston University,Education,1
Indiana University,Education,1
University of California,Education,1
Swansea University,Education,1
University of Utah,Education,1
Ohio State University,Education,1
The Johns Hopkins Medical Institutions,Education,1
Instituto Tecnologico Y de Estudios Superiores de Monterrey,Education,1
Universidade de Sao Paulo,Education,1
Navy Network Information Center,Military,1
University of Nebraska-Lincoln,Education,1
University of Pennsylvania,Education,1
University of California Los Angeles,Education,1
University of Pittsburgh,Education,1
Min. of Def. Debrezeit Defence Engineering,Education,1
Delft University of Technology Network,Education,1
Universidade Federal do Rio de Janeiro,Education,1
University of Wisconsin Madison,Education,1
Montgomery County Public Schools,Education,1
Northwestern University,Education,1
Department of Education,Government,1
Georgia Institute of Technology,Education,1
University of Southampton,Education,1
Boston College,Education,1
University of Cambridge,Education,1
Yale University,Education,1
Fisk University,Education,1
Northern Arizona University,Education,1
Lockheed Martin Corporation,Commercial,1
UnitedHealth Group Incorporated,Commercial,1
University of Chicago,Education,1
DoD Network Information Center,Military,1
California State University East Bay,Education,1
National Institutes of Health,Government,1
Florida Institute of Technology,Education,1
University of New Hampshire,Education,1
Bandar Seri Iskandar,Education,1
University of the Witwatersrand,Education,1
Universidad Nacional de Buenos Aires,Education,1
University of California Santa Barbara,Education,1
Cardiff University,Education,1
University of Georgia,Education,1
North Carolina Research and Education Network,Education,1
Liberty University,Education,1
University of Iowa,Education,1
Virginia Commonwealth University,Education,1
Villanova University,Education,1
Stanford University,Education,1
Carroll College,Education,1
University of North Carolina at Chapel Hill,Education,1
University of Nevada Reno,Education,1
University of Windsor,Education,1
Louisiana State University,Education,1
The University of the West Indiesst Augustine Camp,Education,1
Handy Networks LLC,Commercial,1
University of Kwazulu-Natal,Education,1
"St. John's University New York",Education,1
Universidad Nacional de Colombia,Education,1
Technische Universitaet Kaiserslautern,Education,1
Dartmouth College,Education,1
Algonquin College of Applied Arts & Technology,Education,1
University of Guelph,Education,1
Transmog Inc S.A.L,Commercial,1
Rice University,Education,1
Department of Interior,Government,1
Marshall University,Education,1
Georgia College & State University,Education,1
Duquesne University,Education,1
Memorial University of Newfoundland,Education,1
Universidade Federal de Minas Gerais,Education,1
Portland State University,Education,1
University of Louisiana at Lafayette,Education,1
University of California Santa Cruz,Education,1
University of South Carolina,Education,1
Kings County Office of Education,Education,1
University of Alberta,Education,1
Technische Universitaet Dortmund,Education,1
Oak Ridge National Laboratory,Government,1
"Queen's University",Education,1
Oxford University,Education,1
nTelos Lynchburg T1 WAN Assignments,Commercial,1
Kean University,Education,1
The University of St. Andrews,Education,1
Middle Tennessee State University,Education,1
The City University of New York,Education,1
California Institute of Technology,Education,1
Rose-Hulman Institute of Technology,Education,1
High Point University,Education,1
The MathWorks Incorporated,Education,1
Research Network University of Ghent,Education,1
Fundacion Innovat,Organization,1
University of Hawaii,Education,1
Universidade Tecnologica Federal do Parana,Commercial,1
Cal State Fullerton,Education,1
University of Missouri - Kansas City,Education,1
Bryant University,Education,1
University of Helsinki,Education,1
Heriot-Watt University,Education,1
University of New Mexico,Education,1
College of St. Scholastica,Education,1
Pern-Pakistan Education & Research Network is an,Library,1
Universitaet Augsburg,Education,1
Indian Institute of Technology Patna,Education,1
Worcester Polytechnic Institute,Education,1
Berklee College of Music,Education,1
San Mateo County Office of Education,Education,1
Davidson College,Education,1
"St. Mary's College of Maryland",Education,1
Purchase College - SUNY,Education,1
Onatel,Commercial,1
TOBB Ekonomi ve Teknoloji Universitesi,Education,1
Nvidia Corporation,Commercial,1
National Oceanic and Atmospheric Administration,Government,1
Masinde Muliro Unversity,Education,1
Ecole Normale Superieure de Lyon,Education,1
Carleton College,Education,1
University of Tulsa,Education,1
Stichting Duwo,Commercial,1
Contra Costa County Office of Education,Education,1
Sandia National Laboratories,Organization,1
Freie Universitaet Berlin,Education,1
State University of New York at Buffalo,Education,1
GlaxoSmithKline,Commercial,1
Mills College,Education,1
University of Tromso,Education,1
Reseau Optique du Campus de la Doua,Education,1
Bank of Nova Scotia,Commercial,1
City University of Hong Kong,Education,1
Indian Institute of Science Education and Research,Education,1
Lighthouse Networks Limited,Commercial,1
EVO North,Commercial,1
University of Cincinnati,Education,1
West Virginia Wesleyan College,Education,1
University of Exeter,Education,1
California State Polytechnic University - Pomona,Education,1
"Sparks Nugget Inc. DBA John Ascuaga's Nugget",Commercial,1
SB Comercio Ltda,Commercial,1
Monash University,Education,1
LaTrobe University,Education,1
Universidad Politecnica de Madrid,Education,1
Southeast University,Education,1
AutoEverSystems Corp.,Commercial,1
Slovak Technical University,Education,1
Charles Darwin University,Education,1
University of Seoul,Education,1
Walla Walla University,Education,1
Clarkson University,Education,1
Saveetha Institute of Medical and Technical Sciences,Organization,1
Pulaski Electric System,Organization,1
Shanghai University,Education,1
Karunya University Coimbatore,Education,1
Peking University New Campus Network,Education,1
Pure Pages Inc.,Commercial,1
The University of Electro-Communications,Education,1
Zantel Blocks for Dodoma,Organization,1
Universite de Fribourg,Education,1
Nara Institute of Science and Technology National University Corporation,Education,1
Copel Geracao e Transmissao S.A.,Commercial,1
Delhi University North Campus,Education,1
National University of Science and Technology,Education,1
Universitaire Instelling Antwerpen - Campus Net,Education,1
Universidad de Alcala de Henares,Education,1
Tecnocolor TT Telecomunicacions SL,Commercial,1
University of Mostaganem,Education,1
Consejo Superior de Investigaciones,Organization,1
"Centre Interuniversitaire de Traitement de l'Information",Commercial,1
Universite Libre de Bruxelles,Education,1
De Montfort University,Education,1
Izmir University of Economics,Education,1
Universite Pierre et Marie Curie,Education,1
"Reseau de l'Unite de Recherche Rhone-Alpes de l'INRIA",Commercial,1
Universidad de Almeria,Education,1
OCE Technologies B.V.,Commercial,1
Central University of Karnataka,Education,1
Bacau,Commercial,1
University of South Africa,Education,1
University of Khartoum,Education,1
Kenya Education Network,Education,1
Sichuan University,Education,1
The Episcopal Academy,Education,1
Tangaza College,Education,1
Canton Public Schools,Education,1
Western Kentucky University,Education,1
Readylink Internet Services Limited Coimbatore,Commercial,1
Westnet Inc.,Commercial,1
Cifrova Kabelna Korporacia EOOD,Commercial,1
Kutztown University,Education,1
University of Chester,Education,1
Angelo State University,Education,1
Expan DC,Commercial,1
Escuela Superior Politecnica del Litoral,Education,1
Days Inn-San Francisco,Commercial,1
Icddr B,Organization,1
SES Astra S.A.,Commercial,1
Shanghai Textile College,Education,1
National Institute of Technology Raipur,Organization,1
G3 Comms Limited,Commercial,1
Instytut Podstawowych Problemow Techniki,Commercial,1
Amasya Universitesi,Education,1
Universidad Politecnica de Cartagena,Education,1
Kiwi Networks S A P I de CV,Commercial,1
Jacksonville University,Education,1
St. Norbert College,Education,1
University of Jamestowm,Education,1
United World College of Sea,Education,1
Institut fuer Klimafolgenforschung e.V.,Commercial,1
Stockholms Stadsnat AB,Commercial,1
National Home Loan Corp,Commercial,1
Institute of Machinery,Organization,1
RWTH Aachen University,Education,1
University of Nairobi,Education,1
Empresa de Tecnologia da Informacao do Ceara-Etice,Government,1
"Ministere de l'Enseignement Superieur et de la Recherche",Commercial,1
Varnamo Energi AB,Commercial,1
UPC Romania Alba,Commercial,1
Visual Link,Commercial,1
Sevenoaks School,Education,1
Waldorf College,Education,1
Delmonte Foods,Commercial,1
Virginia Wesleyan,Education,1
7 Medical Systems,Commercial,1
Betanet Sp. z o.o.,Commercial,1
Jomo Kenyatta University of Agriculture and Technology Kisiii Campus,Education,1
DGI Byen,Commercial,1
FHU Prnet Rafal Sciezor,Commercial,1
Wyndham Indianapolis West,Commercial,1
Universidad de Ibague,Education,1
Nippontec Telecomunicacoes,Commercial,1
Sidewalk Express AB,Commercial,1
East Azarbayjan Telecommunication,Commercial,1
Rijksuniversiteit Groningen,Education,1
National Information Technology Authority Uganda,Commercial,1
VTEX,Commercial,1
Ningbo City Zhejiang Province,Commercial,1
Ciberconceito Informatica e Servicos Unipessoal Lda,Commercial,1
Montgomery McCracken Walker & Rhoads LLP,Commercial,1
educa.ch Schweizer Medieninstitut fur Bildung und Kultur Co-op.,Education,1
WS/Verizon Telematics,Commercial,1
WiMAX Users Pool III,Commercial,1
Tanzania e-Government Agency,Government,1
Red Nacional Academica de Tecnologia Avanzada - Renata,Education,1
Southprague.net O.S. Praha,Commercial,1
Amazon Corporate LLC,Commercial,1
TradeInet Ltd,Commercial,1
Aerux LLP,Commercial,1
Karen Lovespa,Commercial,1
Research and Education Network for Uganda,Commercial,1
Kabale University,Education,1
Belmont University,Education,1
Mbarara University of Science and Technology Main Campus,Education,1
NSW Department of Education,Education,1
RIM,Commercial,1
KOBA Sp. z o.o.,Commercial,1
UFLA - Universidade Federal de Lavras,Education,1
Bilotcerkivskiy National Agrarian University,Education,1
Landmark University Omu-Aran,Education,1
ALMASFOFA for Communication & Internet LTD,Commercial,1
Kenet Jkuat Main Campus,Commercial,1
Dsouza Cable Network,Commercial,1
Bangladesh Research and Education Network,Education,1
Universidad de Cordoba,Education,1
Business Systems SVR Farm,Commercial,1
"Universita' degli Studi di Roma La Sapienza",Education,1
"Universita' degli Studi di Catania",Education,1
"ENEA - Agenzia Nazionale Per le Nuove Tecnologie l'Energia e Lo Sviluppo Economico Sostenibile",Commercial,1
Wanda LLC,Commercial,1
For ESS Use,Commercial,1
GeekyWorks IT Solutions Pvt Ltd,Commercial,1
United Arab Emirates University,Education,1
GlaxoSmithKline PLC,Commercial,1
North Bone Ltd.,Commercial,1
Koebenhavns Kommune,Commercial,1
Allocated to Aun Server Farm,Commercial,1
Agnisys,Commercial,1
Fsbe Institution of He I.S. Turgenev Orlovsky State University,Education,1
Members,Organization,1
International Atomic Energy Agency,Organization,1
Hi-Tech Isolutions LLP,Commercial,1
Customers in Cherubmall,Commercial,1
Manisafa Medical Instrument Company Private Joint Stock,Commercial,1
Kampala International University - Main Campus,Education,1
Kwame Nkrumah University of Science and Technology,Education,1
Hilton Baltimore Bwicc,Commercial,1
Smith & Masters Limited,Commercial,1
Comenius University in Bratislava,Education,1
Mahmoud El Kasir Trading as KASIR NETWORKS,Commercial,1
Extranet Iletisim Hizmetleri A.S.,Commercial,1
Lamont-Doherty Earth Observatory of Columbia University,Education,1
Libraries Unlimited,Commercial,1
Residence Inn Boulder Lonmont,Commercial,1
BayanTel Broadband - ATC_MAGINET_SHANGRI-LA_MACTAN_CEBU,Commercial,1
Bule Hora University,Education,1
R. Davis & Company Ce,Commercial,1
Agrihold,Commercial,1
Rocky Mountain Microfilm Imag,Commercial,1
CSH LLC,Commercial,1
Todone Giuseppe,Commercial,1
W/Soddo University,Education,1
Baobishan,Commercial,1
Pccentral US Inc,Commercial,1
University of Energy and Natural Resources,Education,1
Unita Turism Holding SA,Commercial,1
VirtuDataCenter Inc.,Commercial,1
Gnet MM,Commercial,1
PT. Mohan Sina Megumi,Commercial,1
Trinity Net Cable,Commercial,1
King Abdullah University of Science and Technology,Education,1
Ultimate Internet Services Private Limited,Commercial,1`,yQ=`Name,Type,Downloads
Pingnet HK,Commercial,182
Chowan University,Education,39
Oberlin College,Education,14
Tulane University,Education,13
Massachusetts Institute of Technology,Education,12
West Coast Techies,Commercial,9
Boston University,Education,8
Universiteit Utrecht,Education,8
Therion LLC,Organization,8
Universite Pierre et Marie Curie,Education,7
Coe College,Education,7
Alpha Omega,Commercial,7
James Madison University,Education,6
University of Toronto,Education,6
Colorado School of Mines,Education,6
University of Maryland,Education,5
Virginia Commonwealth University,Education,5
University of California Irvine,Education,5
Rose-Hulman Institute of Technology,Education,5
Indian Intitute of Technology (IIT)-Gujarat,Education,5
Universidad de Santiago de Compostela,Education,5
Christopher Newport University,Education,5
Shashemane Ericsson APN Natting,Education,5
Coelho e Barra Internet e TV Por Assinatura Ltda,Commercial,5
University of Puget Sound,Education,4
University of Colorado,Education,4
San Diego State University,Education,4
Ontario Hydro,Commercial,4
Aniruddha skyline web service,Commercial,4
Dzinet Ltd.,Commercial,4
Apollo Technologies and Solutions,Commercial,4
Ismael Stroher & Cia. Ltda. - ME,Commercial,4
FTTH Nat,Commercial,4
Swarthmore College,Education,3
Texas A&M University,Education,3
Technische Universiteit Eindhoven,Education,3
Stanford University,Education,3
Carleton University,Education,3
Michigan State University,Education,3
University of California San Diego,Education,3
North Carolina State University,Education,3
Montclair State University,Education,3
Imperial College London,Education,3
Claremont University Consortium,Education,3
Pern-Pakistan Education & Research Network is an,Library,3
Drew University,Education,3
CUHK,Education,3
Institut Teknologi Bandung,Education,3
OCG Musco Corp,Organization,3
Southern Utah University,Education,3
University of Stavanger,Education,3
Xtranet Communications Ltd,Education,3
Aarhus Universitet,Commercial,3
Israel Ministry Of Defence,Government,3
Arkansas Research and Education Optical Network,Education,3
JPR Digital Pvt. Ltd.,Commercial,3
Kit Carson Electric Cooperative Inc,Commercial,3
MUENET GmbH,Commercial,3
Jetway Broadband,Commercial,3
Homax Industries Limited,Commercial,3
Private Company Nonthaburi Province,Commercial,3
University of Energy and Natural Resources,Education,3
Headquarters USAISC,Military,2
University of Leicester,Education,2
New York University,Education,2
University of California Los Angeles,Education,2
Georgia Institute of Technology,Education,2
California State University Office of the Chancellor,Education,2
Yale University,Education,2
University of Leeds,Education,2
National Institute of Standards and Technology,Government,2
Brown University,Education,2
Emory University,Education,2
Rochester Institute of Technology,Education,2
University of St. Thomas,Education,2
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,2
University of Oklahoma,Education,2
TOBB Ekonomi ve Teknoloji Universitesi,Education,2
Brandeis University,Education,2
Wheaton College,Education,2
University of Alabama,Education,2
Southern Polytechnic State University,Education,2
Korean Education Network,Education,2
Coast Guard Academy,Education,2
Rajendra Memorial Research Institute of Medical Science,Organization,2
Ecole Centrale Paris,Commercial,2
Shri Govindram Seksaria Institute of Technology and Science,Education,2
Emporia State University,Education,2
University of Portland,Education,2
Gazon Communications India Limited,Commercial,2
Microsoft Limited,Commercial,2
Hardin Simmons University,Education,2
Mubarakpur,Commercial,2
JWay Co. Ltd,Commercial,2
A D Communication,Commercial,2
Universidad de Granada,Education,2
The Weblink Network,Commercial,2
Icon Ltd,Commercial,2
Waverly Utilities,Commercial,2
Eightee8 Network Pvt Ltd,Commercial,2
Universite de Nice,Education,2
The University of Edinburgh,Education,2
University of Warwick,Education,2
Joink LLC,Commercial,2
Lightbulb Creative,Commercial,2
Helmut-Schmidt-Universitaet/Universitaet der Bundeswehr Hamburg,Military,2
Supernet Linhares,Commercial,2
Patriot Web Solutions,Commercial,2
CSH LLC,Commercial,2
Keystone Networks - Sydney,Commercial,2
University of Florida/University Medical Center,Education,1
University of Texas at Austin,Education,1
Colorado State University,Education,1
University of Utah,Education,1
University of Pretoria,Education,1
Boise State University,Education,1
University of Pittsburgh,Education,1
California State University Los Angeles,Education,1
University of Florida,Education,1
Intel Corporation,Commercial,1
University of Wisconsin Madison,Education,1
Northwestern University,Education,1
George Mason University,Education,1
University of Washington,Education,1
University of Cambridge,Education,1
Cherry Creek School District,Education,1
Arizona State University,Education,1
Southern Illinois University,Education,1
Queens University Belfast,Education,1
DoD Network Information Center,Military,1
Brigham Young University,Education,1
University of Illinois,Education,1
University of California Santa Barbara,Education,1
The University of Memphis,Education,1
University of Georgia,Education,1
University of Arkansas at Little Rock,Education,1
University of Fort Hare,Education,1
University of North Carolina at Chapel Hill,Education,1
University of Nevada Reno,Education,1
University of Waterloo,Education,1
The Goldman Sachs Group Inc.,Commercial,1
Purdue University,Education,1
Massey University,Education,1
University of Glasgow,Education,1
University of California at Berkeley,Education,1
University of Michigan,Education,1
Smith College,Education,1
Binghamton University,Education,1
University of Massachusetts,Education,1
University of Notre Dame,Education,1
Memorial University of Newfoundland,Education,1
South Dakota State University,Education,1
University of Arizona,Education,1
College of William and Mary,Education,1
University of Idaho,Education,1
University of Alberta,Education,1
Automobile Club of Southern California,Organization,1
Concordia College,Education,1
University of Dayton,Education,1
University of North Texas,Education,1
IVYTech Community College of Indiana,Education,1
Colleges of the Fenway Inc.,Education,1
WV Department of Education,Education,1
National Science Foundation,Government,1
California State University at Fresno,Education,1
Pacific Lutheran University,Education,1
Wyoming Community College Commission,Education,1
Bowling Green State University,Education,1
University of Tehran Informatics Center,Education,1
Haskolinn i Reykjavik,Education,1
Brazoria INET,Commercial,1
Niagara University,Education,1
Loyola University New Orleans,Education,1
Colorado Community College System,Education,1
Wellesley College,Education,1
Tohoku University,Education,1
St. Olaf College,Education,1
New Jersey Institute of Technology,Education,1
Reed College,Education,1
Andrews University,Education,1
Birmingham-Southern College,Education,1
Universitaet Bremen,Education,1
Macalester College,Education,1
University of Central Lancashire,Education,1
Parklawn Computer Center/Dimes HQ,Government,1
University of Denver,Education,1
Seoul National University,Education,1
Norfolk State University,Education,1
GlaxoSmithKline,Commercial,1
Loughborough University,Education,1
Capital One Financial Corporation,Commercial,1
Cape Peninsula University of Technology,Education,1
University of Tromso,Education,1
Stasishen Aleksandr Afanasiyovich,Commercial,1
Uniwersytet Marii Curie Sklodowskiej,Education,1
University of Newcastle Australia - Callaghan Campus,Education,1
EVO North,Commercial,1
Instituto Politecnico Nacional,Organization,1
University of Cincinnati,Education,1
Rensselaer Hartford Graduate Center,Education,1
University of Sydney,Education,1
Ephorus B.V. Groenekan,Commercial,1
Australian Defence Organization,Military,1
Universiti Sains Malaysia Penang Malaysia,Education,1
Peking University New Campu Network,Education,1
Landssimi Islands,Commercial,1
Colorado College,Education,1
Politechnika Warszawska,Education,1
Choate Rosemary Hall,Education,1
Persona Communications,Commercial,1
La Sierra University,Education,1
Shanghai Jiaotong University,Education,1
Huazhong University of Science and Technology,Education,1
Colby College,Education,1
Anna University Chennai,Education,1
Network Block is for the Use of Stpi-Bangalore Softnet-In,Commercial,1
Ankhnet Informations Pvt. Ltd.,Commercial,1
NWT a.s,Commercial,1
Tongji University,Education,1
Herningsholm Erhvervsskole,Commercial,1
University of Wollongong,Education,1
"Universita' Ca' Foscari - Venezia",Education,1
Delhi University North Campus,Education,1
National University of Science and Technology,Education,1
Banjarahills Zone,Commercial,1
Aalto University,Education,1
Shahrekord University,Education,1
Universidad de Alcala de Henares,Education,1
Bulgarian Academy of Sciences,Commercial,1
SAP SE,Commercial,1
National Technical University of Athens,Education,1
Universite Libre de Bruxelles,Education,1
Fife Council,Commercial,1
Natural Environment Research Council,Government,1
South West Grid for Learning Trust Ltd.,Organization,1
Universite Paris1 Pantheon - Sorbonne,Education,1
Scientific Publishing Services (P) Ltd,Commercial,1
Aqaba Water Company,Commercial,1
New York University Abu Dhabi - Abu Dhabi Foreign Branch-USA,Education,1
Zhejiang University,Education,1
FHU Ez-Bit Tomasz Zakonek,Commercial,1
Umea kommun,Commercial,1
Van Yuzuncu Yil Universitesi,Education,1
Sichuan University,Education,1
Stiftelsen Chalmers Studenthem,Commercial,1
Zantel Customer Block in Mwanza,Commercial,1
Lamar Consolidated Independent School District,Education,1
Karadeniz Technical University,Education,1
Universidad Autonoma de Occidente,Education,1
Expedia Inc.,Commercial,1
Florida Gulf Coast University,Education,1
Moscow Institute of Physics and Technology,Organization,1
Meteor,Commercial,1
Western Kentucky University,Education,1
Whittier College,Education,1
Saginaw Valley State University,Education,1
Routemaze,Commercial,1
Shabakeh Gostar Dorna Cooperative Co.,Education,1
Universidad del Valle de Guatemala,Education,1
Institute for Advanced Study,Education,1
Home Internet Ltd,Commercial,1
Northwestern Michigan College,Education,1
Japan Agency for Marine-Earth Science and Technology,Government,1
Dhirubhai Ambani Institute of Information,Organization,1
Private Joint-Stock Company Farlep-Invest,Commercial,1
Haiti Networking Group S.A.,Commercial,1
Evdo Customers,Commercial,1
LNM Institite of Information Technology Jaipur,Commercial,1
Zeppelin Universitaet gemeinnuetzige GmbH,Education,1
Hochschule Furtwangen,Commercial,1
Washtenaw County,Organization,1
Israel Local Authorities Data Processing Center Ltd.,Commercial,1
Madritel Cablemodem,Commercial,1
Shree Omkar Infocom Pvt Ltd,Commercial,1
Ltd. Cypher,Commercial,1
Coop. Ltda de Electricidad Y Servicios Anexos de Huinca Renanco,Commercial,1
University of Jamestowm,Education,1
Albright College,Education,1
Mitene Internet Co. Ltd.,Commercial,1
European Bank for Reconstrcution And Development,Commercial,1
Intech Enterprises,Commercial,1
G C Link Pvt Ltd,Commercial,1
Dominican University,Education,1
Rajeev Video Kurla,Commercial,1
Banco Central de Chile,Commercial,1
Internexa S.A. E.S.P,Commercial,1
Robert Bosch Gesellschaft mit Beschraenkter Haftung,Commercial,1
Longmont Power & Communications,Government,1
Capaix Connectic,Commercial,1
NTT Europe Ltd. Germany,Commercial,1
University of Nairobi,Education,1
Chippewa Valley Technical College,Education,1
Megawire Inc.,Commercial,1
Ogden Telephone Co.,Commercial,1
Wageningen Universiteit,Education,1
Cactus Ltd.,Commercial,1
Regional Institute of Education,Organization,1
Ul. Marymoncka,Commercial,1
Classic Tech Pvt. Ltd. 3rd Floor Alfabeta Complex New Baneshwore,Commercial,1
Universite du Burundi at Its Campus Mutanga,Education,1
E4A s.r.l.,Commercial,1
ZMNE Bolyai Janos Katonai Muszaki Foiskolai Kar,Commercial,1
Optix Media LLC,Commercial,1
International School of Stavanger,Education,1
BBDO NY,Commercial,1
Ethr.Net LLC,Commercial,1
Kate Spade & Company,Commercial,1
Villas at Vista Del Sol,Commercial,1
Comfortel Ltd.,Commercial,1
Squarepoint Pte Ltd,Commercial,1
A. Magsaysay Inc.,Commercial,1
Cascade Pediatrics,Commercial,1
Ecole Polytechnique Federale de Lausanne,Education,1
Infotechnet Informatica e Assistencia Tecnica Ltda,Commercial,1
National Research Tomsk Polytechnic University,Education,1
Bodensee-Schiffsbetriebe GmbH,Commercial,1
Stockholm,Commercial,1
Centre College,Education,1
General Atomics,Commercial,1
Comandancia General de la Policia Nacional,Government,1
Bitco,Commercial,1
Harare Broadband,Commercial,1
Concordia University Wisconsin,Education,1
Shri Sadguru Broadnet Service,Commercial,1
Railwire Bhubneshwar,Commercial,1
Hydraulik-Ring GmbH,Commercial,1
ACP Oracle Prince Family Practice Ltd,Commercial,1
Ardinvest Ltd,Commercial,1
Yazd University,Education,1
GPRS/3G Mobile Users,Commercial,1
Topica Co. Ltd,Commercial,1
GLA University,Education,1
Horizon & Associates,Commercial,1
Carl von Ossietzky Universitaet Oldenburg,Education,1
Start.ca,Commercial,1
Landmark University Omu-Aran,Education,1
Home Broadband Services LLP,Commercial,1
Istanbul Teknik Universitesi,Education,1
Studierendenwerk Bonn AoeR,Commercial,1
Moi University,Education,1
National Institute of Technology Japan,Education,1
GWDG,Education,1
Ufinet Colombia S. A.,Commercial,1
Dsouza Cable Network,Commercial,1
Fribzi Multi Technologies Pvt. Ltd.,Commercial,1
AZTEVIL - Villas at Vista Del Sol,Education,1
Delta Centric LLC,Commercial,1
GERANT Kereskedelmi es Szolgaltato Kft,Commercial,1
Sit la Precisa S.p.A.,Commercial,1
Eberhard-Karls-Universitaet Tuebingen,Education,1
BNR Consulting CC,Commercial,1
HZ Hosting Ltd,Commercial,1
Nova customers,Commercial,1
Netcon Comercio de Produtos Para Informatica Ltda,Commercial,1
National Institute of Water and Atmospheric Research Ltd,Education,1
European Mobile Operator Oy,Commercial,1
UE Exponetial OOD,Commercial,1
Swiss Federation Represented by FOITT,Government,1
Indian Institute of Technology Argul,Education,1
Global Networks Infocomm Pvt Ltd,Commercial,1
Amtech Communications,Commercial,1
James Cook University,Education,1
Koninklijke Nederlandse Academie van Wetenschappen,Commercial,1
Members,Organization,1
Hi-Tech Isolutions LLP,Commercial,1
SC 3D Media Creation SRL,Commercial,1
North-Eastern Federal University,Education,1
ITV-3 Inc.,Commercial,1
Korbank S. A.,Commercial,1
Campus Village Technology,Commercial,1
Inha University,Education,1
Frankfurt International School,Education,1
Contato Internet Eireli,Commercial,1
Fastway Transmission Private Limited,Commercial,1
MD Rafiqul Islam T/A Open Network Solutions,Commercial,1
Linq Telecomunicacoes Ltda ME,Commercial,1
Hewlett Packard Enterprise Company,Commercial,1
DIS Research Ltd.,Commercial,1
University of Michigan Information and Technology Services,Education,1
Max-Planck-Institut fuer Informatik,Education,1
Interregional Society of Communication City Communication Networks LLC,Organization,1
The Education University of Hong Kong,Education,1
Rexham Industries,Commercial,1
Emerald Expositions LLC.,Commercial,1
Technology Specialists Group,Commercial,1
Smith & Masters Limited,Commercial,1
Moec,Government,1
Lulea Tekniska Universitet,Education,1
University of Mines and Technology,Education,1
Stuff Fibre,Commercial,1
"Agence de l'Informatique de l'Etat",Commercial,1
Huawei IT Hong Kong Data Center,Commercial,1
First/24 Block,Education,1
Arizona College,Education,1
Carrier,Commercial,1
Parknet F.M.B.A,Commercial,1
PJSC Industrial Media Network,Commercial,1
Met Office,Government,1
McAfee Germany GmbH,Commercial,1
Krispan Info Technologies,Commercial,1
Fiberlink Sp. z o.o.,Commercial,1
Euro-Information-Europeenne de Traitement de L Information SAS,Commercial,1
Jacek Jarosz Trading as Info Serwis,Commercial,1
Duronto Online,Commercial,1
Pepperl und Fuchs,Commercial,1
Maranet Telecom,Commercial,1
ITMinds Consultoria em Tecnologia da Informacao,Commercial,1
Ianciuc Invest SRL,Commercial,1
Academy of Charter Schools,Education,1
Air Force Systems Networking,Military,1
Apog GSU,Commercial,1
Bule Hora University,Education,1
Inet Communications Limited,Commercial,1
Telecomunicaciones Rocarli C.A,Commercial,1
Fl 26 China United Center No.28 Marble Rd North Point,Commercial,1
Netinformatik Inc.,Commercial,1
EnterNext Communications,Commercial,1
Newtrend,Commercial,1
Ridhhi Sidhhi Cable And Internet,Commercial,1
TouchStone Pvt. Ltd.,Commercial,1
Computer Center,Education,1
KK Networks (Pvt) Ltd.,Commercial,1
Multilink computers Pvt Ltd.,Commercial,1
Netfirre Communications Pvt Ltd,Commercial,1
Gnet MM,Commercial,1
Hang Seng Management College,Education,1
Firstlink Communications Pvt. Ltd.,Commercial,1
Ragsaa Communication Pvt. Ltd.,Commercial,1
SCTV Infrastructure Business Invesment Company Limited,Commercial,1
Adda Network,Commercial,1
Balaji Enterprises,Commercial,1
AGB Communication ISP,Commercial,1
Universitas Negeri Medan,Education,1
Evedin Technologies,Commercial,1
Peering Exchange Inc,Commercial,1
Joister Infomedia Pvt Ltd.,Commercial,1
Gaurika Internet Private limited,Commercial,1
Eg Iaa Tiba Center,Commercial,1
PT. Manggar Media Utama,Commercial,1
Rutgers University,Education,1`,gQ=`Name,Type,Downloads
New York University,Education,112
"St Michael's College",Education,96
Brown University,Education,23
Claremont University Consortium,Education,20
University of Puget Sound,Education,19
Bates College,Education,19
Stanford University,Education,15
Columbia University,Education,12
Celestica International Inc,Commercial,12
Danmarks Tekniske Universitet,Education,11
Harvard University,Education,11
Macalester College,Education,10
Universiteit van Amsterdam,Education,10
Indian Institute of Science Bangalore,Education,10
Christopher Newport University,Education,10
AMC Theatres,Commercial,10
James Madison University,Education,9
New Jersey Institute of Technology,Education,9
"Xi'an Jiaotong - Liverpool University",Education,9
University of Chicago,Education,8
Dickinson College,Education,8
Oberlin College,Education,7
University of Notre Dame,Education,7
University of Dayton,Education,7
Colorado State University,Education,6
University of Maryland,Education,6
Massachusetts Institute of Technology,Education,6
Michigan State University,Education,6
University of Massachusetts,Education,6
Colleges of the Fenway Inc.,Education,6
Pern-Pakistan Education & Research Network is an,Library,6
Fudan University,Education,6
Mansfield University of Pennsylvania,Education,6
Kate Spade & Company,Commercial,6
Auvea Ingenierie,Commercial,6
University Commons at Minneapolis,Education,6
Yale University,Education,5
Johns Hopkins University,Education,5
Rose-Hulman Institute of Technology,Education,5
Appalachian State University,Education,5
Union College,Education,5
NTU,Education,5
Shibaura Institute of Technology,Education,5
P.W. MARTON Mariusz Trabczynski,Commercial,5
Inha University,Education,5
Chowan University,Education,5
Indiana University,Education,4
CSU Monterey Bay,Education,4
Georgia Department of Education,Education,4
University of Pennsylvania,Education,4
Arizona State University,Education,4
Board of Regents of the University System of Georgia,Education,4
Florida International University,Education,4
Trinity University,Education,4
Oxford University,Education,4
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,4
Capital One Financial Corporation,Commercial,4
Colorado College,Education,4
University of Rwanda for Use at Its College of Science and Technology Campus,Education,4
KISTI,Government,4
Citta Studi S.p.A.,Commercial,4
The University of Manchester,Education,4
Espaco Digital,Commercial,4
Eliana Vanessa Morocho Ona,Commercial,4
Unit 1307 13/F Nanyang Plaza 57 Hung to Road Kwun Tong,Commercial,4
n2i Solutions Pvt. Ltd.,Commercial,4
MTI Technology Corporation,Commercial,4
Ohio State University,Education,3
State University of New York at Stony Brook,Education,3
University of Florida,Education,3
George Mason University,Education,3
Georgia Institute of Technology,Education,3
University of Washington,Education,3
Boston College,Education,3
The Bloomsbury Computing Consortium,Education,3
University of British Columbia,Education,3
U.S. Fish and Wildlife Service IRM/BFO HQ,Government,3
University of Georgia,Education,3
University of Central Florida,Education,3
University of California at Berkeley,Education,3
Rochester Institute of Technology,Education,3
Saxion Hogeschool IJselland te Deventer,Commercial,3
St. Lawrence University,Education,3
Lake Forest College,Education,3
Indian Intitute of Technology (IIT)-Gujarat,Education,3
Hamilton College,Education,3
NUS,Education,3
Korean Education Network,Education,3
Universitaet Duisburg-Essen,Education,3
Maseno University Town Campus,Education,3
Embry-Riddle Aeronautical University - Daytona Beach,Education,3
Satnet Cuenca Servers,Commercial,3
Fachhochschule Trier,Education,3
This Assignment is Made to the College of Medicine a Constituent College of the University of Malawi,Education,3
Universidad de Adolfo Ibanez,Education,3
Kit Carson Electric Cooperative Inc,Commercial,3
LaGrange College,Education,3
Hochschule Merseburg,Commercial,3
Work Banda Larga,Commercial,3
NUS High School of Mathematics and Science,Education,3
MYREN Infrastructure,Commercial,3
Freedom Internet,Commercial,3
Global Networks Infocomm Pvt Ltd,Commercial,3
Internet O Sul Comercio e Servicos Ltda,Commercial,3
Kwame Nkrumah University of Science and Technology,Education,3
PC Net,Commercial,3
Montana State University Bozem,Education,3
St Marys Hall,Organization,3
Agrihold,Commercial,3
African Institute for Mathematical Sciences Ghana,Education,3
University of Utah,Education,2
Department of Education,Government,2
Cornell University,Education,2
Mississippi State University,Education,2
Virginia Polytechnic Institute and State Univ.,Education,2
Queens University Belfast,Education,2
Duke University,Education,2
Brigham Young University,Education,2
University of Missouri-Columbia,Education,2
North Carolina Research and Education Network,Education,2
Texas Tech University,Education,2
American University,Education,2
Emory University,Education,2
Arlington County Government,Government,2
Purdue University,Education,2
Dartmouth College,Education,2
Indian Institute of Technology (IIT) Guwahati,Education,2
Boston University,Education,2
Marquette University,Education,2
Creighton University,Education,2
University of California San Diego,Education,2
Tulane University,Education,2
Oregon State University,Education,2
University of California Irvine,Education,2
North Carolina State University,Education,2
Central Michigan University,Education,2
University of Hertfordshire,Education,2
Mount Holyoke College,Education,2
Pacific Lutheran University,Education,2
Bilkent University,Education,2
Tufts University,Education,2
Orange County Public Schools,Education,2
California State University San Bernardino,Education,2
Bard College,Education,2
The University of Birmingham,Education,2
Stasishen Aleksandr Afanasiyovich,Commercial,2
CUHK,Education,2
University of Exeter,Education,2
Highland Communications,Commercial,2
Politechnika Warszawska,Education,2
JSM Management Inc.,Commercial,2
Colby College,Education,2
Ankhnet Informations Pvt. Ltd.,Commercial,2
Karlsruhe Institute of Technology,Education,2
Universidad de Santiago de Compostela,Education,2
Ecole Centrale Paris,Commercial,2
Zhejiang University,Education,2
Technological University Dublin,Education,2
Firat University,Education,2
Hope College,Education,2
UFB,Commercial,2
Commack Ufsd,Commercial,2
Hancock Telephone,Commercial,2
Amnet Cable San Pedro Sula,Commercial,2
Evdo Customers,Commercial,2
FineMEDIA s.c.,Commercial,2
Youngstown State University,Education,2
Green Farms Academy,Commercial,2
Comm & Net S.A.,Commercial,2
Universidad Tecnologica de la Mixteca,Education,2
Hardin Simmons University,Education,2
Villas at Vista Del Sol,Commercial,2
American Mathematical Society,Organization,2
Tandberg Data,Commercial,2
Etisalat Lanka (Private) Limited.,Commercial,2
Munites,Commercial,2
Kyambogo University,Education,2
JSC Amtkom,Commercial,2
Astrium sas,Commercial,2
ADSL Pro,Commercial,2
S.R.Network.Solution,Commercial,2
Escuela Superior de Comunicacion S.A.,Commercial,2
Critical Path Inc.,Commercial,2
Sagar Vision,Commercial,2
Raaj Internet I Pvt Ltd,Commercial,2
Universite de Nice,Education,2
Strategic Research Insights,Commercial,2
Airmobile.co.za,Commercial,2
Hewlett Packard Enterprise Company,Commercial,2
Nasstar South Limited,Commercial,2
Agis,Commercial,2
Parknet F.M.B.A,Commercial,2
Ianciuc Invest SRL,Commercial,2
Multikom S.A.,Commercial,2
Origin Energy Retail Limited,Organization,2
Bule Hora University,Education,2
Bangladesh University of Engineering and Technology,Education,2
Unit 1205 12/F Cyberport 2 100 Cyberport Road Hong Kong,Commercial,2
BeachRoad,Commercial,2
Internet Management LLC,Commercial,2
Openwave Messaging,Commercial,2
Auto-Trol Technology Corporation,Commercial,2
State of Delaware,Government,1
Swansea University,Education,1
University of Texas at Austin,Education,1
The Johns Hopkins Medical Institutions,Education,1
Illinois Institute of Technology,Education,1
University of California Merced,Education,1
University of California Los Angeles,Education,1
Delft University of Technology Network,Education,1
The City of New York,Government,1
Florida State University,Education,1
Texas A&M University,Education,1
Universitaet zu Koeln,Education,1
California State University Office of the Chancellor,Education,1
Education and Research in Oregon,Education,1
University of Cambridge,Education,1
University of Toronto,Education,1
University of California San Francisco,Education,1
Concordia University,Education,1
Northeastern University,Education,1
University of Leeds,Education,1
University of Missouri - DBA the Missouri Research and Education Network,Education,1
DoD Network Information Center,Military,1
California State University East Bay,Education,1
The School District of Palm Beach County,Education,1
University of Houston,Education,1
University of Illinois,Education,1
University of New Hampshire,Education,1
University of the Witwatersrand,Education,1
The University of Texas Health Science Center at Houston,Education,1
Case Western Reserve University,Education,1
University of Texas at Dallas,Education,1
Ludwig-Maximilians-Universitaet Muenchen,Education,1
West Virginia University,Education,1
University of Iowa,Education,1
University of Massachusetts - Lowell,Education,1
University of Virginia,Education,1
Ahmadu Bello University Zaria Nigeria,Education,1
Hunton & Williams,Commercial,1
Carroll College,Education,1
University of North Carolina at Chapel Hill,Education,1
Indiana University - Purdue University Fort Wayne,Education,1
Gettysburg College,Education,1
Leidos Inc.,Commercial,1
University of Illinois at Chicago,Education,1
University of Colorado,Education,1
U.S. Center for Disease Control and Prevention,Government,1
Keewaytinook Okimakanak,Organization,1
British Columbia Institute of Technology,Education,1
University of Miami,Education,1
Indiana Department of Education,Education,1
SUNY College at Cortland,Education,1
University of the West Indies,Education,1
Pima Community College,Education,1
University of Calgary,Education,1
Xerox Corporation,Commercial,1
Lehigh University,Education,1
The Catholic University of America,Education,1
Seton Hall University,Education,1
Woods Hole Oceanographic Institution,Education,1
Queen Mary and Westfield College University of London,Education,1
Rice University,Education,1
University of North Carolina at Wilmington,Education,1
The University of Texas - Pan American,Education,1
Washington University,Education,1
University of Lagos,Education,1
University of Northern British Columbia,Education,1
Middlebury College,Education,1
University of Arizona,Education,1
Davenport University,Education,1
Kansas State University,Education,1
LEKOS s.r.o.,Commercial,1
University of Louisiana at Lafayette,Education,1
Compudyne Inc.,Commercial,1
Westminster College of Salt Lake City,Education,1
University of South Carolina,Education,1
University of Alberta,Education,1
University of Alaska,Education,1
University of Keele,Education,1
University of Wisconsin - Eau Claire,Education,1
Washington School Information Processing Cooperative,Education,1
City of Philadelphia,Government,1
University of St. Thomas,Education,1
Oakland Schools,Education,1
Butler University,Education,1
University of North Carolina at Charlotte,Education,1
Bethany Lutheran College,Education,1
Chapman University,Education,1
SUNY Geneseo Computer Center,Education,1
College of the Sequoias,Education,1
University of Tehran Informatics Center,Education,1
Augustana College,Education,1
Kenyon College,Education,1
Haskolinn i Reykjavik,Education,1
University of Tokyo,Education,1
Universitaet Hamburg Campus Net,Education,1
Nigerian Research and Education Network Limited by Guarantee,Education,1
Bucknell University,Education,1
Hewlett-Packard Company,Commercial,1
Niagara University,Education,1
Bryant University,Education,1
Korea University,Education,1
State of North Dakota Itd,Government,1
Northern Michigan University,Education,1
Korea Advanced Institute of Science and Technology,Education,1
St. Olaf College,Education,1
Arkansas Public School Computer Network,Education,1
Bergen University Norway,Education,1
Worcester Polytechnic Institute,Education,1
University of York,Education,1
Longwood University,Education,1
Reed College,Education,1
University of Northumbria at Newcastle,Education,1
Los Angeles Unified School District,Education,1
Luther College,Education,1
Federal-Mogul Corporation,Commercial,1
Mercy College,Education,1
Metropolitan Community Colleges,Education,1
Birmingham-Southern College,Education,1
Amherst College,Education,1
Southeast Missouri State University,Education,1
Carleton College,Education,1
Auckland University of Technology Network,Education,1
Kocaeli University,Education,1
Northwest Regional ESD,Education,1
University College Galway,Education,1
Brno University of Technology,Education,1
Stichting Duwo,Commercial,1
Hamara System Tabriz Engineering Company,Commercial,1
Grand Canyon University,Education,1
Malaviya National Institute of Technology Jaipur,Education,1
Auckland College of Education,Education,1
Langston University,Education,1
The Procter and Gamble Company,Commercial,1
Seoul National University,Education,1
Norfolk State University,Education,1
Virginia Community College System,Education,1
Univer,Commercial,1
Oracle Corporation,Commercial,1
Marshall Municipal Utilities,Commercial,1
The University of Kansas,Education,1
Information Technology Services Centre,Education,1
Vienna University Computer Center,Education,1
Universidade Federal de Uberlandia - U F U,Education,1
Vitro Corporation,Commercial,1
Arapahoe School District,Education,1
Universitaet Leipzig,Education,1
Hampton University,Education,1
ENSTA Paristech - Ecole Nationale Superieure des Techniques Avancees,Commercial,1
Swosu Weatherford,Education,1
Royal Holloway and Bedford New College,Education,1
University of Thessaly,Education,1
University of Lausanne,Education,1
Rensselaer Hartford Graduate Center,Education,1
University of Sydney,Education,1
University of Houston - Downtown,Education,1
Thompson Rivers University,Education,1
City of Chandler,Government,1
Monash University,Education,1
Azusa Pacific University,Education,1
Oakland Unified School District,Education,1
Wolfram Research Inc.,Commercial,1
Universidad Complutense de Madrid,Education,1
University of Adelaide,Education,1
CIS,Commercial,1
American University of Sharjah,Education,1
The University of Hong Kong,Education,1
Curtin University of Technology,Education,1
Lanka Education and Research Network,Education,1
WestTel Ltd.,Commercial,1
Hong Kong University of Science and Technology,Education,1
Chung-Ang University,Education,1
East-Zone for Huazhong University of Science and Technology,Education,1
Government Service Network,Government,1
Okinawa Institute of Science and Technology,Organization,1
Netnam Corporation,Commercial,1
Clarkson University,Education,1
Singapore Management University,Education,1
Hong Kong Baptist University,Education,1
Babasaheb Bhimrao Ambedkar University (Brau) Lucknow,Education,1
Tsinghua University,Education,1
Peking University New Campus Network,Education,1
Dongguk University,Education,1
Chungnam National University,Education,1
EBR Informatica Ltda,Commercial,1
Mangalore University Mangalore,Education,1
Regional POP,Commercial,1
Delhi University South Campus,Education,1
Guru Gobind Singh Indraprastha University (Ggsip) University Dwarka,Education,1
Akademska mreza Republike Srbije - AMRES,Education,1
Champaign Metro,Commercial,1
GCI Communications Inc.,Commercial,1
The Director,Commercial,1
Herningsholm Erhvervsskole,Commercial,1
Commission for Science and Technology for,Government,1
University of Malta,Education,1
Nanjing Institute of Meteorology,Education,1
Brisbane City Council,Government,1
Delhi University North Campus,Education,1
"Universita' degli Studi di Milano-Bicocca",Education,1
Institute of Computational Technologies of SB RAS,Organization,1
Universitaire Instelling Antwerpen - Campus Net,Education,1
Commission Europeenne,Government,1
Shahrekord University,Education,1
Academia de Studii Economice Bucuresti,Commercial,1
Indian Association for the Cultivation of Science Kolkata,Education,1
Statens Seruminstitut,Government,1
Universidad de Cantabria,Education,1
Universite de Rennes,Education,1
National Technical University of Athens,Education,1
"Centre Interuniversitaire de Traitement de l'Information",Commercial,1
Universite de Bordeaux - DSI,Education,1
Iwate Prefectural University,Education,1
Humboldt-Universitaet zu Berlin,Education,1
Universite Catholique de Louvain,Education,1
Sutd SG,Education,1
School Broadband Connection ID,Education,1
Aarhus Universitet,Commercial,1
"Universita' degli Studi di Pisa",Education,1
Ataturk Universitesi,Education,1
Thomas Rotherham College,Education,1
Technical University of Crete,Education,1
Ecole Normale Superieure,Education,1
Universitaet Ulm,Education,1
Kielce University of Technology,Education,1
Deutsches Klimarechenzentrum (DKRZ) Hamburg,Commercial,1
Fakultet strojarstva i brodogradnje,Commercial,1
Science Production Company Trifle Ltd.,Commercial,1
Johns Hopkins University Applied Physics Laboratory,Education,1
FOM Instituut Voor Atoom en Molecuul Fysica,Commercial,1
Kenya Education Network,Education,1
Greenspring Lekki,Commercial,1
Lower Merion School District,Education,1
Graphic Era University Uttrakhand,Education,1
Institute of Citology and Genetics,Organization,1
Helmholtz-Zentrum Dresden-Rossendorf e.V.,Commercial,1
Indian Institute of Science Education and Research Mohali,Education,1
Stiftelsen Chalmers Studenthem,Commercial,1
Carrollton-Farmers Branch Independent School Dist.,Education,1
Carthage College,Education,1
Kalamazoo College,Education,1
NSU,Commercial,1
Abo Akademi,Education,1
Universite de Rouen,Education,1
FOFRNET spol. s r.o.,Commercial,1
Central Washington University,Education,1
Lifelabs Medical Laboratory Services,Commercial,1
University of Indianapolis,Education,1
PRESNET s.r.o.,Commercial,1
Avk-Sistems Shlyuz,Commercial,1
Sienna,Commercial,1
Indiana University of Pennsylvania,Education,1
Servizi Aziendali Pricewaterhouse Coopers,Commercial,1
OKCCC,Education,1
University of Central Arkansas,Education,1
Servicios Tigo Home,Commercial,1
Trollfjord Bredband AS,Commercial,1
Infoline - Comunicacoes e Informacoes Eletronicas,Commercial,1
Universidade Federal de Sao Paulo,Commercial,1
Northwestern Michigan College,Education,1
Icddr B,Organization,1
Northeast Normal University,Education,1
Lupin,Commercial,1
Welsh Government,Government,1
Telecom South America S/A,Commercial,1
Jijiga Uiniveristy,Commercial,1
VIMS,Education,1
Darton College,Education,1
Biz Telecom LLC,Commercial,1
St. Norbert College,Education,1
Elektrizitaets- und Wasserwerk der Stadt Buchs SG,Commercial,1
United World College of Sea,Education,1
Hochschule Konstanz Technik Wirtschaft Und Gestaltung,Commercial,1
Yum! Brands Inc.,Commercial,1
Servicio Nacional de Aduana del Ecuador,Commercial,1
Sundbynet,Commercial,1
G C Link Pvt Ltd,Commercial,1
KCTV Jeju Broadcasting,Commercial,1
Castro Valley Unified School District,Education,1
Somcast Networks LLC,Commercial,1
Yellow Transportation Inc.,Commercial,1
Stockholms Stadsnat AB,Commercial,1
Sunway University,Education,1
The Vermont,Commercial,1
Beijing Yiantianxia Network Science&Technology Co Ltd.,Commercial,1
Point-To-Point Client Addresses,Commercial,1
Robert Bosch Gesellschaft mit Beschraenkter Haftung,Commercial,1
Alabama School of Fine Arts,Education,1
DM Ventures Inc,Commercial,1
Guanhaes Internet Ltda-Me,Commercial,1
Testamerica Laboratories Inc.,Commercial,1
Ben Gurion University,Education,1
Amirkabir University of Technology,Education,1
Corporate Broadband,Commercial,1
Tele AG,Commercial,1
Brian Gould,Organization,1
Airtel Gabon S.A,Commercial,1
Easycall Communications Philippines Inc,Commercial,1
Gigacom Systems Ltd.,Commercial,1
Eastern Mennonite University,Education,1
ISSTCC,Education,1
Basundhara Group,Commercial,1
Grupo New Life,Commercial,1
TEL Aviv University,Education,1
T. Grand Networks Inc.,Commercial,1
bdHUB,Commercial,1
Ligue Telecomunicacoes Ltda,Commercial,1
SychrovNET s.r.o,Commercial,1
United World College of South East Asia,Education,1
Centro Tecnico Aeroespacial,Organization,1
Visual Link,Commercial,1
IP Allocation 1 Nust,Education,1
Virginia Wesleyan,Education,1
VeloCloud Networks Inc.,Commercial,1
Mega Colocation Inc.,Commercial,1
Universidad del Mar,Education,1
Tenet,Education,1
CWS Broadband Lite,Commercial,1
Avaya Inc.,Commercial,1
Viafast Provedor de Internet Ltda ME,Commercial,1
LA Quinta Suites,Commercial,1
Deutsches Elektronen-Synchrotron DESY,Commercial,1
WiMAX Low Value Gabs Customer A,Commercial,1
Conway Emergency Operations Center,Organization,1
Shanghai Yu Lang Communications Engineering Co. Ltd.,Commercial,1
Consortium GARR,Education,1
RCS,Commercial,1
Technische Universitaet Carolo-Wilhelmina zu Braunschweig,Education,1
Ecole Polytechnique Federale de Lausanne,Education,1
Jiwaji University Gwalior (M.P.) India,Education,1
Sampark Estates Pvt. Ltd.,Commercial,1
PPPoE and PPTP Clients,Commercial,1
Wari.net Comunicaciones S.R.L,Commercial,1
Aster Sp. z o.o.,Commercial,1
Anovys LLC,Commercial,1
BNP Paribas SA,Commercial,1
GE Drive Systems,Commercial,1
Verweij Mungra Beheer,Commercial,1
Tarlac State University,Education,1
Faculdades Catolicas,Education,1
COMA s.r.o.,Commercial,1
Credit Suisse Saudi Arabia,Commercial,1
Holistica Provedor Internet Ltda,Commercial,1
Pardazesh Rayaneh Bita Co.Ltd,Commercial,1
Wenzhou Kenen University,Education,1
Zol Harare PPPoE Customer Network,Commercial,1
JC Telecom Servicos de Telecomunicacoes Ltda EPP,Commercial,1
Centre College,Education,1
CJD Jugenddorf Christophorusschule Braunschweig,Commercial,1
Pro TV S.A.,Commercial,1
Gbps Networks Pvt. Ltd.,Commercial,1
Boise Independent School District,Education,1
Rockoff Hall Apartments,Commercial,1
Ehamnet S.R.O.,Commercial,1
Krausonline.com,Commercial,1
Quadgen WiFi Project C/O ADDL GM P3 Bangalore,Commercial,1
Embarq Limited,Commercial,1
Ezecom Limited,Commercial,1
Simply Computers Tanzania Ltd,Commercial,1
Informatica System S.R.L.,Commercial,1
Alibaba.com Singapore E-Commerce Private Limited,Commercial,1
Topica Co. Ltd,Commercial,1
Country Online Services Pvt Ltd,Commercial,1
Grajaunet Telecomunicacoes,Commercial,1
"Universita' degli Studi di Firenze",Education,1
Gayatri Silicates Industries,Commercial,1
Chilkoor Balaji Marketers,Commercial,1
Toos-Ashena PJSC,Commercial,1
Realtel Network Services Pvt Ltd,Commercial,1
Consolidated Library District,Library,1
Ivertec Ltd,Commercial,1
HASHIKMA NGN International Communications 015LTD,Commercial,1
University House Midtown,Education,1
Kviknet.dk ApS,Commercial,1
Istanbul Teknik Universitesi,Education,1
"Alma Mater Studiorum Universita' di Bologna",Education,1
"Universita' della Calabria",Commercial,1
Gaya Core Nat Pool GWM,Commercial,1
GWDG,Education,1
Kamakshi Agency,Commercial,1
FixNet Broadband Ltd.,Commercial,1
Bangladesh Research and Education Network,Education,1
Colt Technology Services Co. Ltd.,Commercial,1
Tanzania Education and Research Network,Organization,1
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,1
"Society of Mali's Telecommunications",Organization,1
Namibia University of Science and Technology,Education,1
Univerzita Tomase Bati ve Zline,Education,1
Instituto Nacional de Estatistica I.P.,Education,1
NetMan Data Services,Commercial,1
Dixie State University,Education,1
Data Dallas Corporation,Commercial,1
Internet Multifeed Co.,Commercial,1
Rijnstaete Group B.V.,Commercial,1
Planet A A.S.,Commercial,1
Shawnee Mission Unified School District No,Education,1
K Net Solutions Pvt Ltd,Commercial,1
Space Vision Digital Network Pvt. Ltd.,Commercial,1
St Barnabas Seniorocn,Commercial,1
KP Network Spol. S R.O.,Commercial,1
National Research Nuclear University Mephi,Education,1
Liverton Limited,Commercial,1
Quintex Alliance Consulting,Commercial,1
Soft Call Cust-O-Care Private Limited,Commercial,1
Indian Auto Mobiles,Commercial,1
James Cook University,Education,1
PE Brunarsky Andrey Romanovich,Commercial,1
R7 Telecom Telecomunicacoes Ltda ME,Commercial,1
Comtel-CPT Clients,Commercial,1
Homenetsolutions,Commercial,1
Campus Village Technology,Commercial,1
Duke Kunshan University,Education,1
LLC Inforcom,Commercial,1
Escomtel Backbone Network Ltd.,Commercial,1
MF Gomes da Silva Portais-ME,Commercial,1
Societa des Talacommunications du Mali,Commercial,1
Nitin Networks,Commercial,1
R M Silva de Paula Informatica ME,Commercial,1
Style of Global IT Support and Services Company,Commercial,1
Fastway Transmission Private Limited,Commercial,1
Teletek 5060 AB,Commercial,1
Direccion Provincial de Comercio Gastronomia,Commercial,1
VOLstate Inc.,Commercial,1
The Research Council/Oman Research and education Network (OMREN),Government,1
SG-XA1 Saint-Gilles Bloc,Commercial,1
Interregional Society of Communication City Communication Networks LLC,Organization,1
Rexham Industries,Commercial,1
One Net Communication Ltd,Commercial,1
Moec,Government,1
Noop LLC,Commercial,1
Ismael Stroher & Cia. Ltda. - ME,Commercial,1
Central Solucoes em Ti e Internet,Commercial,1
P-to-P PE-CE BGS,Commercial,1
Clarksville Light & Water Co,Commercial,1
First/24 Block,Education,1
Point Blank Protection Pvt Ltd,Commercial,1
University of Kisubi,Education,1
Midwest Energy & Communications,Commercial,1
New College of Florida,Education,1
University of Warwick,Education,1
N.C Sat Mais Veloz Ltda,Commercial,1
Md. Shahin Parvez T/A DotCom,Commercial,1
Terra Nova Internet Operations Ltd.,Commercial,1
InfoPlan,Commercial,1
Fevzi cakmak cd. no 2 Altinozu HATAY,Commercial,1
GigsGigsCloud HK Hosting,Commercial,1
Parsley Energy Operations LL,Commercial,1
Zurich University of Applied Sciences,Education,1
Mayak Smart Services Ltd.,Commercial,1
Air Force Systems Networking,Military,1
RD Network,Commercial,1
Conect S.A,Commercial,1
Altan Redes S.A.P.I. de C. V.,Commercial,1
Facultad de Ciencias Fisicas y Matematicas de la Universidad de Chile,Education,1
Unified IT Platform Office. IT Services Division. Hitachi Ltd.,Commercial,1
Sveriges Meteorologiska och Hydrologiska Institut,Education,1
Aluminum Company of America - Davenport,Commercial,1
Ou Elin Pelin Meden Rudnik,Commercial,1
CSH LLC,Commercial,1
LLC BMD Net,Commercial,1
W/Soddo University,Education,1
Digital Euronetwork SRL,Commercial,1
Fast Lane Consulting and Educ,Commercial,1
Encryptec Limited,Commercial,1
Roper Industries Inc,Commercial,1
Telexair Technologies Private Limited,Commercial,1
Globe Vision,Commercial,1
KK Networks (Pvt) Ltd.,Commercial,1
Powai,Education,1
Universiti Kebangsaan Malaysia,Education,1
Shine Communications Pvt Ltd,Commercial,1
Kad-Syscon Infotech Private Limited,Commercial,1
GTPL Chelikam Networks India Pvt. Ltd.,Commercial,1
PT Lanba Wisesa,Commercial,1
International Education Corporation,Commercial,1
Ultranet Infotech Solution Private Limited,Commercial,1
Deepak Network,Commercial,1
Arrownet Pvt.Ltd,Commercial,1
Route object for,Commercial,1
High Speed Broadband,Commercial,1
Kathmandu University,Education,1
FTTH Nat,Commercial,1
Saiba International,Commercial,1
Airnet Telecommunications,Commercial,1
Speed Broadband Solutions,Commercial,1
Asknet Internet Service,Commercial,1
Vision Hi-speed Technology Pvt.Ltd.,Commercial,1
VMHaus Limited,Commercial,1
JL. Ah. Nasution As No.10 RT.003 RW,Commercial,1
Airwire Infocom Private Limited,Commercial,1
1776 Solutions LLC,Commercial,1
Auspice Infranet,Commercial,1
Netspritia Ltd.,Commercial,1
Multi-Player Games Network Inc.,Commercial,1
Qualtrics LLC,Commercial,1
Racal Redac,Commercial,1
West 16 Ltd,Commercial,1
Valley Internet Company LLC,Commercial,1
Exposure Solutions,Commercial,1
Room1603 Tungningbuilding 253 des Voeux Road Central HK,Commercial,1
Unit17 9F. Tower a New Mandrin Plaza HK,Commercial,1
TSC Solutions,Commercial,1
PT Infrastruktur Bisnis Sejahtera,Commercial,1
Friends of the River Park Guangzhou Co. Ltd. Shanghai Branch,Commercial,1
Estacion de Servicio Bete,Commercial,1
Decision Consultants Inc,Commercial,1
Sherkat Zamzam Gorgan,Commercial,1
Tekcon Aps,Commercial,1
Newrui Limited,Commercial,1
Markus Salchegger,Commercial,1
Jason Poole,Commercial,1
Nesa A-S,Commercial,1
Rutgers University,Education,1`,EQ=`Name,Type,Downloads
"St Michael's College",Education,138
University of California Los Angeles,Education,51
Claremont University Consortium,Education,39
California State University San Marcos,Education,31
University of Puget Sound,Education,29
Christopher Newport University,Education,26
Coe College,Education,23
Harvard University,Education,19
Universiti Sains Malaysia Penang Malaysia,Education,16
Colby College,Education,14
University of Maryland Baltimore County,Education,13
Appalachian State University,Education,13
University of Chicago,Education,12
University of Oklahoma,Education,12
University of Maryland,Education,10
Massachusetts Institute of Technology,Education,10
Pern-Pakistan Education & Research Network is an,Library,10
Macalester College,Education,10
Moec,Government,10
DoD Network Information Center,Military,9
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,9
Grinnell College,Education,9
University of Tromso,Education,9
Studentenwerk Wuerzburg AoeR,Organization,9
Virginia Beach City Public Schools,Education,8
Swarthmore College,Education,8
Colorado State University,Education,8
University of Utah,Education,8
Georgia Institute of Technology,Education,8
Danmarks Tekniske Universitet,Education,8
Case Western Reserve University,Education,8
University of California San Diego,Education,8
Virginia Community College System,Education,8
ICT Center,Commercial,8
University of Minnesota,Education,7
Adelphi University,Education,7
Colleges of the Fenway Inc.,Education,7
Bucknell University,Education,7
San Francisco State University,Education,7
Hogeschool Enschede,Commercial,7
Columbia University,Education,6
Virginia Polytechnic Institute and State Univ.,Education,6
Yale University,Education,6
University of Toronto,Education,6
McGill University,Education,6
North Carolina Research and Education Network,Education,6
University of Virginia,Education,6
Stanford University,Education,6
Brown University,Education,6
Emory University,Education,6
Princeton University,Education,6
University of Dayton,Education,6
Central Michigan University,Education,6
Technische Universitaet Bergakademie Freiberg,Education,6
IP Allocation 1 NCP Qau,Education,6
Sienna,Commercial,6
Openwave Messaging,Commercial,6
Universidad Nacional Autonoma de Mexico,Education,5
New York University,Education,5
University of Washington,Education,5
California State University Office of the Chancellor,Education,5
Northeastern University,Education,5
Board of Regents of the University System of Georgia,Education,5
Michigan State University,Education,5
Seattle University,Education,5
SUNY College at New Paltz,Education,5
Mercer University,Education,5
Ecole Centrale Paris,Commercial,5
Drake University,Education,5
KISTI,Government,5
Indian Institute of Technology,Education,5
Gatik Business Solutions,Commercial,5
Indiana University,Education,4
University of Pennsylvania,Education,4
University of Florida,Education,4
Cornell University,Education,4
Carnegie Mellon University,Education,4
University of Houston,Education,4
University of Illinois,Education,4
The Bloomsbury Computing Consortium,Education,4
Oberlin College,Education,4
Dartmouth College,Education,4
Binghamton University,Education,4
Washington University,Education,4
Rose-Hulman Institute of Technology,Education,4
California State University Long Beach,Education,4
University of Wyoming,Education,4
Niagara University,Education,4
Connecticut State University System,Education,4
Indian Institute of Technology Patna,Education,4
Bowdoin College,Education,4
Onatel,Commercial,4
Rockhurst University,Education,4
Loyola Marymount University,Education,4
Old Dominion University,Education,4
Lamar County School District,Education,4
Umea kommun,Commercial,4
Millersville University,Education,4
Jozef Woch Cybernet WMW,Commercial,4
John Abbott College,Education,4
Presbyterian University Eastern Africa Kikuyu Campus,Education,4
Avaya Inc.,Commercial,4
Consortium GARR,Education,4
DIS Research Ltd.,Commercial,4
Kinetx Inc,Education,4
PC Net,Commercial,4
AdvanceMultiTechnologies,Commercial,4
Chowan University,Education,4
KreditPromBank PJSC,Commercial,4
University of Nebraska-Lincoln,Education,3
Delft University of Technology Network,Education,3
George Mason University,Education,3
Boston College,Education,3
University of Kansas,Education,3
University of Leeds,Education,3
Queens University Belfast,Education,3
Duke University,Education,3
Edgewood College,Education,3
University of North Carolina at Chapel Hill,Education,3
Purdue University,Education,3
Indian Institute of Technology (IIT) Guwahati,Education,3
Franklin and Marshall College,Education,3
Rice University,Education,3
Johns Hopkins University,Education,3
York University,Education,3
Eastern Washington University,Education,3
Utah State University,Education,3
Mayer Brown LLP,Commercial,3
University of Idaho,Education,3
Technische Universitaet Dortmund,Education,3
IVYTech Community College of Indiana,Education,3
Dickinson College,Education,3
Cal State Fullerton,Education,3
Lake Forest College,Education,3
Red Deer College,Education,3
Eotvos Lorand University of Sciences,Education,3
Universitaet Bremen,Education,3
Indiana Higher Education Telecommunication System,Education,3
University of Athens,Education,3
Indian Intitute of Technology (IIT)-Gujarat,Education,3
University of Colorado Denver,Education,3
Grand Canyon University,Education,3
Lawrence University,Education,3
University of Sydney,Education,3
Starbucks Coffee Company,Commercial,3
University of Bristol,Education,3
The University of Hong Kong,Education,3
Pohang University of Science and Technology,Education,3
Clarkson University,Education,3
Universitaet Duisburg-Essen,Education,3
"Universita' degli Studi di Trieste",Education,3
NERC Computer Services,Education,3
Rollins College,Education,3
Bates College,Education,3
Universidad Autonoma de Occidente,Education,3
AMC Theatres,Commercial,3
Ben Gurion University,Education,3
Mount Marty College,Education,3
Celestica International Inc,Commercial,3
Littlefl Ower-Eastis,Commercial,3
Bitco,Commercial,3
MMAL,Commercial,3
MYREN Infrastructure,Commercial,3
Qendra Nderuniversitare e Sherbimeve dhe Rrjeti Telematik,Education,3
Sagar Vision,Commercial,3
Agis,Commercial,3
Ismael Stroher & Cia. Ltda. - ME,Commercial,3
Digital Euronetwork SRL,Commercial,3
University of Texas at Austin,Education,2
Ohio State University,Education,2
The Johns Hopkins Medical Institutions,Education,2
Georgia Department of Education,Education,2
University of California Merced,Education,2
State University of New York at Stony Brook,Education,2
California State University Los Angeles,Education,2
Texas A&M University,Education,2
Montgomery County Public Schools,Education,2
Northwestern University,Education,2
Technische Universitaet Dresden,Education,2
University of California San Francisco,Education,2
Technische Universiteit Eindhoven,Education,2
University of Maryland at Baltimore,Education,2
University of California Riverside,Education,2
California State University East Bay,Education,2
North Dakota State University - Computer Center,Education,2
University of New South Wales,Education,2
University of California Santa Barbara,Education,2
Cardiff University,Education,2
University of British Columbia,Education,2
California Polytechnic State University,Education,2
West Virginia University,Education,2
University of Georgia,Education,2
Heinrich-Heine-Universitaet Duesseldorf,Education,2
University of Southern California,Education,2
University of Nevada Reno,Education,2
Gettysburg College,Education,2
The Goldman Sachs Group Inc.,Commercial,2
University of Arkansas,Education,2
Loyola University Chicago,Education,2
Syracuse University,Education,2
The Pennsylvania State University,Education,2
Stephen F. Austin State University,Education,2
Middlebury College,Education,2
Susquehanna University,Education,2
College of William and Mary,Education,2
University of California Irvine,Education,2
Oxford University,Education,2
Universiteit Maastricht,Education,2
California Institute of Technology,Education,2
Mount Holyoke College,Education,2
Research Network University of Ghent,Education,2
University of Montreal,Education,2
Colgate University,Education,2
Universitaet Potsdam,Education,2
Norwegian University of Science and Technology,Education,2
Universiti Teknologi MARA,Education,2
University of Helsinki,Education,2
Southern Methodist University,Education,2
Tufts University,Education,2
Westmoreland Intermediate Unit,Organization,2
Lynchburg College,Education,2
University of New Mexico,Education,2
College of St. Scholastica,Education,2
Linkoping University,Education,2
New Jersey Institute of Technology,Education,2
University of Westminster,Education,2
Universiti Teknologi Malaysia,Education,2
Sungkyunkwan University,Education,2
California State University San Bernardino,Education,2
Phillips 66 Company,Commercial,2
Brandeis University,Education,2
Carleton College,Education,2
Auckland College of Education,Education,2
The University of Birmingham,Education,2
Norfolk State University,Education,2
Wake Forest University,Education,2
NUS,Education,2
Pepperdine University,Education,2
Albert-Ludwigs-Universitaet Freiburg,Education,2
University of Alabama,Education,2
Universiti Putra Malaysia Campus Network,Education,2
Towson State University,Education,2
Union College,Education,2
University of Exeter,Education,2
University of Houston - Downtown,Education,2
Act Government Intact Group,Government,2
Palo Alto Unified School District,Education,2
Monash University,Education,2
HKP,Education,2
Akademska mreza Republike Srbije - AMRES,Education,2
Banaras Hindu University,Education,2
National University of Science and Technology,Education,2
Hogeschool van Utrecht,Commercial,2
Aalto University,Education,2
Gebze Yuksek Teknoloji Enstitusu,Education,2
Ecole Normale Superieure,Education,2
Narsee Monjee Institute of Management Studies,Education,2
Tokyo Medical and Dental University,Education,2
Jerusalem College of Technology,Education,2
Washtenaw ISD,Education,2
NSU,Commercial,2
Blackpool and the Fylde College,Education,2
Instituto Tecnologico Autonomo de Mexico,Education,2
Florida Gulf Coast University,Education,2
Embry-Riddle Aeronautical University - Daytona Beach,Education,2
University of Chester,Education,2
North China Electric Power University,Education,2
Skylogic France S.A.S.,Commercial,2
Universidad de Adolfo Ibanez,Education,2
VIMS,Education,2
FineMEDIA s.c.,Commercial,2
UPC Romania Botosani,Commercial,2
CS Loxinfo Public Company Limited,Commercial,2
Bronze,Commercial,2
Skalant,Commercial,2
Moen Inc.,Commercial,2
Kate Spade & Company,Commercial,2
Vangibuzz (Pty) Ltd.,Commercial,2
Auvea Ingenierie,Commercial,2
Gohypersonic Inc,Commercial,2
Ecole Polytechnique Federale de Lausanne,Education,2
Vysoka Skola Banska - Technicka Univerzita Ostrava,Education,2
University College Cork,Education,2
Syrian Company for technical supply of LLC,Commercial,2
Call One Inc.,Commercial,2
Gretel Vinas,Commercial,2
IAM,Commercial,2
Aljeel Aljadeed for Technology,Commercial,2
NSW Department of Education,Education,2
Miami Dade Public Library,Library,2
Simpson College,Education,2
Dynamic Assigned to Client Internet Sessions,Commercial,2
Fundacao Universidade Federal do Abc - UFABC,Education,2
Critical Path Inc.,Commercial,2
Orange Business Services-SITA Internet Services - IT Aggregate,Commercial,2
Data Dallas Corporation,Commercial,2
UE Delta Prod OOD,Commercial,2
Chuka University,Education,2
Global Telecom Informatica,Commercial,2
Enterprise Solutions,Commercial,2
TV Cable del Guadiana S.A de C.V.,Commercial,2
TTZ Emo Jakob Preh Schule,Commercial,2
Kwame Nkrumah University of Science and Technology,Education,2
Rexham Industries,Commercial,2
Legaco Networks B.V.,Commercial,2
Universitaet Zuerich,Education,2
University of Mines and Technology,Education,2
Universita Mohamed V - Souissi - Rabat,Commercial,2
University of Warwick,Education,2
The University of Cape Coast,Education,2
West Chester University of Pennsylvania,Education,2
Georgia Department of Technical and Adult Education,Education,2
Lamont-Doherty Earth Observatory of Columbia University,Education,2
Goodall Software Engineering,Commercial,2
Fastbee Argentina S.A.,Commercial,2
LLC BMD Net,Commercial,2
3F Unit 14 Starmall Apartelle Shaw EDSA,Commercial,2
Powai,Education,2
Shiv Nadar University,Education,2
Singapore University of Technology and Design,Education,2
Us Los Angeles IP Address,Commercial,2
Albany,Commercial,2
Terapar Participacoes Ltda.,Commercial,2
System Integrators Inc.,Commercial,2
Yorkshire Electricity,Commercial,2
Xuzhou Xuanyuan Netb,Commercial,2
Smithsonian Institution,Education,1
Swansea University,Education,1
CSU Monterey Bay,Education,1
University of Connecticut,Education,1
University of Pretoria,Education,1
University of Leicester,Education,1
Rheinische Friedrich-Wilhelms-Universitaet Bonn,Education,1
Instituto Tecnologico Y de Estudios Superiores de Monterrey,Education,1
Illinois Institute of Technology,Education,1
Boise State University,Education,1
Cleveland State University Computer Services,Education,1
The University of Nottingham,Education,1
Western Michigan University,Education,1
University of Pittsburgh,Education,1
Texas A&M University Corpus Christi,Education,1
University of Wisconsin Madison,Education,1
Washington State University,Education,1
Florida State University,Education,1
Department of Education,Government,1
Washington State Board for Community & Technical Colleges,Education,1
"Saint John's University - College of Saint Benedict",Education,1
Universitaet zu Koeln,Education,1
University of Southampton,Education,1
Mississippi State University,Education,1
Education and Research in Oregon,Education,1
Arizona State University,Education,1
International Institute of Information Technology,Education,1
Grant MacEwan University,Education,1
Southern Illinois University,Education,1
South Dakota School of Mines & Technology,Education,1
Auburn University,Education,1
Ford Motor Company,Commercial,1
University College Dublin,Education,1
University of the Witwatersrand,Education,1
University of Education Winneba,Education,1
Marist College,Education,1
University of South Florida,Education,1
Orange-Ulster BOCES,Organization,1
Universiteit Twente,Education,1
St. Louis University,Education,1
Texas Tech University,Education,1
Universiteit van Tilburg,Education,1
University of Massachusetts - Lowell,Education,1
Grand Valley State University,Education,1
Raytheon Company,Commercial,1
University of San Francisco,Education,1
University of Colorado,Education,1
University of Ottawa,Education,1
IIT Kanpur Campus Network,Education,1
University of California at Berkeley,Education,1
Liverpool John Moores University,Education,1
Universidad de Chile,Education,1
Xerox Corporation,Commercial,1
University of Michigan,Education,1
University of Delaware,Education,1
Universidad de Concepcion,Education,1
Queen Mary and Westfield College University of London,Education,1
University of North Carolina at Wilmington,Education,1
Clemson University,Education,1
University of Massachusetts,Education,1
University of Notre Dame,Education,1
The University of Texas - Pan American,Education,1
University of Lagos,Education,1
Fairfax County Government,Government,1
Rochester Institute of Technology,Education,1
Tulane University,Education,1
Dalhousie University,Education,1
Egyptian Universities Network,Education,1
Oregon State University,Education,1
University of California Santa Cruz,Education,1
Longwood Medical and Academic Area,Education,1
DePaul University,Education,1
Concordia College,Education,1
Trinity University,Education,1
"Queen's University",Education,1
Milwaukee School of Engineering,Education,1
Universite de Sherbrooke,Education,1
The City University of New York,Education,1
Red Universitaria Nacional,Education,1
Imperial College London,Education,1
Santa Clara County Office of Education,Education,1
The MathWorks Incorporated,Education,1
Virginia Military Institute,Military,1
Chapman University,Education,1
Long Island University,Education,1
SUNY Geneseo Computer Center,Education,1
Merlin,Commercial,1
Lawrence Livermore National Laboratory,Organization,1
University of Hawaii,Education,1
Universidade Tecnologica Federal do Parana,Commercial,1
Bilkent University,Education,1
University of Tokyo,Education,1
Consorci de Serveis Universitaris de Catalunya,Education,1
Unisys,Commercial,1
University of Northern Iowa,Education,1
University of Missouri - Kansas City,Education,1
Katolicki Uniwersytet Lubelski,Commercial,1
PSI,Organization,1
Loyola University New Orleans,Education,1
Korea University,Education,1
The College of New Jersey,Education,1
City College of New York,Education,1
Enterprise Local Registry,Education,1
Wittenberg University,Education,1
Worcester Polytechnic Institute,Education,1
University of York,Education,1
Digiweb Ltd.,Commercial,1
Furman University,Education,1
Auckla,Education,1
University of Northumbria at Newcastle,Education,1
Los Angeles Unified School District,Education,1
Davidson College,Education,1
Hunter College,Education,1
Loyola University Maryland,Education,1
Aristotle University of Thessaloniki,Education,1
Birmingham-Southern College,Education,1
Universidad Carlos III de Madrid,Education,1
TOBB Ekonomi ve Teknoloji Universitesi,Education,1
Doshisha University,Education,1
Abraham Baldwin Agricultural College,Education,1
Florida Atlantic University,Education,1
Ecole Normale Superieure de Lyon,Education,1
Lund University,Education,1
Mobile County Public School System,Education,1
Unet Communication LLC,Commercial,1
Johann Wolfgang Goethe-Universitaet Frankfurt,Education,1
Ector County ISD,Education,1
Argonne National Laboratory,Organization,1
University of Massachusetts Medical School,Education,1
New York State,Government,1
McMaster University,Education,1
4ALB shpk,Commercial,1
King County Gov,Government,1
Masco Group,Commercial,1
Stichting Duwo,Commercial,1
Contra Costa County Office of Education,Education,1
Hamara System Tabriz Engineering Company,Commercial,1
Area Education Agency,Education,1
University of Vermont,Education,1
Factory Mutual Insurance Company,Commercial,1
University of Dundee,Education,1
Sardar Vallabhbhai National Institute of Tecnology,Education,1
University of Liverpool,Education,1
Seoul National University,Education,1
Univer,Commercial,1
University of Tasmania,Education,1
Indian Institute of Science Bangalore,Education,1
Allegheny College,Education,1
Arapahoe School District,Education,1
University of North Carolina at Greensboro,Education,1
Fairfield University,Education,1
Universidad de Valencia,Education,1
Katholieke Universiteit Leuven,Education,1
Ball State University,Education,1
Connecticut College,Education,1
Leon County Board of County Commisioners,Government,1
University of Cincinnati,Education,1
Gazi University,Education,1
Colorado School of Mines,Education,1
Berkeley Unified School District,Education,1
University of Warsaw,Education,1
Corona-Norco Unified School District,Education,1
Macqua,Education,1
Politecnico di Torino,Education,1
USP,Organization,1
California State Polytechnic University - Pomona,Education,1
Radford University,Education,1
ACT Department of Education,Education,1
Usuhs,Military,1
Karadeniz University,Education,1
Vaughn College,Education,1
Silicon Graphics International Corp.,Commercial,1
AMC,Education,1
Universidad del Valle,Education,1
Hicksvl Library,Library,1
Simafelagid ehf,Commercial,1
University of Redlands,Education,1
Korean Education Network,Education,1
Celt Corp,Commercial,1
China Science & Technology Network,Government,1
Beijing Normal University New Main Building Haidian District Beijing P.R.China,Education,1
Christchurch College of Education,Education,1
Universitas Brawijaya,Education,1
NTU,Education,1
Campus Suites on the Lake,Commercial,1
Saint Petersburg State University,Education,1
Pusan National University,Education,1
Jogja Medianet,Commercial,1
Hevanet,Commercial,1
IIINT,Education,1
Maebashi Institute of Technology,Organization,1
Kyoto University,Education,1
SUt,Education,1
Singapore Polytechnic,Education,1
National University Corporation Muroran Institute of Technology,Education,1
Gottfried Wilhelm Leibniz Universitaet Hannover,Education,1
Shanghai Jiaotong University,Education,1
Rajamangala Institute of Technology,Education,1
Deerfield Academy,Education,1
Dongguk University,Education,1
The University of Electro-Communications,Education,1
Microsoft Singapore Pte. Ltd.,Commercial,1
Universitas Kristen Petra,Education,1
Karpagam University,Education,1
Fudan University,Education,1
Unitech,Commercial,1
Companhia de Tecnologia da Informacao Estado MG,Government,1
Indian Statistical Institute kolkata,Education,1
Osaka Prefecture University,Education,1
Gaziantep University,Education,1
The Azzurra - Consolidated Smart Systems,Commercial,1
Delhi University North Campus,Education,1
U.S. Dept. of Commerce - NOAA - NMFS,Government,1
National Institute of Technical Teachers Training and Research,Organization,1
"Universita' degli Studi di Milano-Bicocca",Education,1
Universidad Autonoma de Madrid,Education,1
Technische Universitat Wien,Education,1
SRM Institute of Science and Technology,Organization,1
Reseaux Enseignement/Recherche,Commercial,1
Umea University,Education,1
Jonkoping Kommun,Commercial,1
Universitat de Barcelona,Education,1
Universite de Rennes,Education,1
Secundrabad Zone,Commercial,1
Univerza v Ljubljani,Education,1
Universitaet Osnabrueck; Rechenzentrum,Education,1
Universite Catholique de Louvain,Education,1
Aarhus Universitet,Commercial,1
Indian Institute of Informatiuon Technology Design & Manufacturing,Organization,1
Universite Pierre et Marie Curie,Education,1
"Universita' degli Studi di Napoli Federico II",Education,1
Bundesamt fuer Sicherheit in der Informationstechnik,Government,1
New York University Abu Dhabi - Abu Dhabi Foreign Branch-USA,Education,1
Institut National de la Recherche Agronomique,Organization,1
Bacau,Commercial,1
Universitat Politecnica de Valencia,Education,1
S 561 School Block Shakarpur Delhi,Education,1
Universitatea Babes-Bolyai Cluj-Napoca,Commercial,1
Russian Space Science Internet,Commercial,1
Swiss Federal Institute of Technology Zurich,Education,1
Norfolk Public Schools Administration,Education,1
RadioLAN spol. s r.o.,Commercial,1
Kenya Education Network,Education,1
DUZCE Universitesi,Education,1
St. Francis Xavier University,Education,1
Northern Ohio Educational Computer Association,Organization,1
Telerete Nordest srl,Commercial,1
Gulf Research & Development Company,Commercial,1
Nagravision SA,Commercial,1
West Morris Regional School District,Education,1
University of Sunderland,Education,1
Delhi Technical University,Education,1
University of Rwanda for Use at Its College of Science and Technology Campus,Education,1
IC-VORONEZH,Commercial,1
Guangzhou City,Government,1
Berea College,Education,1
Alpha Networks S.P.R.L.,Commercial,1
OneCleveland,Organization,1
Universiti Pendidikan Sultan Idris,Education,1
Universidad Eafit,Education,1
University of Texas System,Education,1
Valencia Community College,Education,1
"Rectorat de l'Academie de Lyon",Commercial,1
Turkiye Cumhuriyet Merkez Bankasi,Government,1
Abo Akademi,Education,1
The Networking People (NorthWest) Limited,Commercial,1
Institut National de Recherche en Informatique et Automatique,Commercial,1
Exeter College,Education,1
Wayne County Regional EducationalService Agency,Education,1
University of Portland,Education,1
Race Technologies Inc.,Commercial,1
Saint Bonaventure University,Education,1
St. Edwards University,Education,1
Universidad Autonoma del Estado de Mexico,Education,1
California State University Bakersfield,Education,1
Eastern Kentucky University,Education,1
One Ring Networks Inc.,Commercial,1
Divine Word Univesity,Education,1
IP Allocation 1 Uoe,Education,1
Dhirubhai Ambani Institute of Information,Organization,1
ITI (Gas Rahat Building) Campus,Commercial,1
National University of Lesotho,Education,1
JPR Digital Pvt. Ltd.,Commercial,1
Fachhochschule Dortmund,Commercial,1
Baskent Universitesi,Education,1
University of the Philippines Manila,Education,1
University of the Highlands and Islands,Education,1
Halmstad University,Education,1
This Assignment is Made to the College of Medicine a Constituent College of the University of Malawi,Education,1
Evdo Customers,Commercial,1
Israel Local Authorities Data Processing Center Ltd.,Commercial,1
Tom-Net S.C. Dariusz Koper Radoslaw Koper,Commercial,1
Terabyte Servicos de Telecom B Larga EPP Ltda,Commercial,1
Jacksonville University,Education,1
Albion College,Education,1
Flathead Valley Community College,Education,1
University of the West of England Bristol,Education,1
University of Lancaster,Education,1
Kyoto Gakuen University,Education,1
European Molecular Biology Laboratory,Commercial,1
Technische Universitaet Hamburg-Harburg,Education,1
Whitworth University,Education,1
Yellow Transportation Inc.,Commercial,1
Speednet,Commercial,1
Optical Technologies S.A.C.,Commercial,1
National Institute of Science Technology & Development Studies New Delhi,Organization,1
The Vermont,Commercial,1
Millicom Chad SA,Commercial,1
TT Test Network,Commercial,1
Colorado State University-Pueblo,Education,1
Silesian University in Opava,Education,1
Berkeley City College,Education,1
Testamerica Laboratories Inc.,Commercial,1
Amirkabir University of Technology,Education,1
Dankook University,Education,1
Wuhan University,Education,1
LLC Telekompaniya Region,Commercial,1
RWTH Aachen University,Education,1
WNT Telecommunication GmbH,Commercial,1
Media Construct GmbH,Commercial,1
Laboratory of Information Technologies LLC,Commercial,1
Wageningen Universiteit,Education,1
Chitchat Sewri,Commercial,1
Dynetics Inc.,Commercial,1
Premier Oncology of Arizona,Commercial,1
Hazlett Lewis Bieter,Commercial,1
NTT Comware Corporation,Commercial,1
Homenet Telecomunicacoes Ltda,Commercial,1
Cablevision du Nord de Quebec,Commercial,1
Hetauda ADSL Pool Static Subscriber,Commercial,1
Savoye,Commercial,1
KM-NET Marek Sobol,Organization,1
NGBN IP Pool,Commercial,1
Aspire Technology Solutions Ltd,Commercial,1
Rogers Cable Inc. BBRSFD,Commercial,1
E-Cho Sp. z o.o.,Commercial,1
Microsoft Limited,Commercial,1
Hilton Hotel,Commercial,1
Universidade do Estado do Rio de Janeiro,Commercial,1
Knox College ITS,Education,1
University of Mount Olive,Education,1
TSBS GmbH fuer Oerlikon TextileGmbH & Co. KG,Commercial,1
Universidad Tecnologica de la Mixteca,Education,1
Gardner-Webb University,Education,1
Aberystwyth University,Education,1
Telescan Inc.,Commercial,1
Dolnet Group Sp. z o.o.,Commercial,1
Akershus Fylkeskommune Sentraladministrasjonen,Commercial,1
BENET Szymon Beltowski,Commercial,1
The University of Manchester,Education,1
Zetup AB,Commercial,1
PT Wifiku Indonesia,Commercial,1
Axia Connect Limited,Commercial,1
Uniwersytet Marii Curie-Sklodowskiej w Lublinie,Education,1
Nelson Mandela Metropolitan University,Education,1
Second Department Institute of Mathamatics and Mechanics,Organization,1
Assoc do Inst Nac de Matematica Pura e Aplicada,Commercial,1
LEAP,Commercial,1
PT. Mithaharum Abadi,Commercial,1
BEC Bankernes Edb Central,Commercial,1
Hardin Simmons University,Education,1
Comfortel Ltd.,Commercial,1
Ministarstvo regionalnog razvoja i fondova Europske unije,Commercial,1
SENATI,Education,1
Epcan GmbH,Commercial,1
Vivaciti Ltd.,Commercial,1
EFG Bank SA Succursale de Geneve,Commercial,1
Atlanta English Institute,Organization,1
SITE Netblock Assignment,Education,1
Redp Secertaria de Educacion,Commercial,1
Cybertech Informatica Ltda.,Commercial,1
Power Grid Corporation of India Limited,Commercial,1
MainOne Cable Company,Commercial,1
CMA Consulting,Commercial,1
Carolyne Lee,Commercial,1
Oracle Corporation Global Software Solutions California USA,Commercial,1
V V Mineral,Commercial,1
Digital Entertainment,Commercial,1
Rijksuniversiteit Groningen,Education,1
Czech Academy of Sciences,Organization,1
HEC Paris,Education,1
Aster Sp. z o.o.,Commercial,1
Etisalat Lanka (Private) Limited.,Commercial,1
ITCI Corporation,Commercial,1
Don Bosco Academy of Pampanga Inc.,Commercial,1
Federal University of Technology Akure,Education,1
CIT - Cork Institute of Technology,Education,1
Kyambogo University,Education,1
Semera University Na,Education,1
Vertex,Commercial,1
Centre College,Education,1
Tekynik Solucoes Tecnologicas Ltda-EPP,Commercial,1
Telenor Bulgaria EAD,Commercial,1
New Orleans Convention Center,Commercial,1
Zapelini & Cia. Ltda.,Commercial,1
Baidu USA LLC,Commercial,1
KDS Smiley TV d.o.o.,Commercial,1
Matrix International SARL,Commercial,1
Forweb S.C. Monika Bodetko Tomasz Pawlowski,Commercial,1
Baifangdianqigongshi,Commercial,1
Mbarara University of Science and Technology Main Campus,Education,1
University of Bradford,Education,1
Malawi Research and Education Network - Maren,Commercial,1
Haute Ecole Libre Mosane,Education,1
Clayton County Public Schools,Education,1
Technical University of Cluj - Romania,Education,1
Bergen County Vocational Technical School District,Education,1
Universite de Geneve,Education,1
Brantley Telephone Company Inc.,Commercial,1
Simba Biz,Commercial,1
Uganda Christian University - Mbale Campus,Education,1
Babol Noshirvani University,Education,1
Alibaba.com Singapore E-Commerce Private Limited,Commercial,1
Moscow State University,Education,1
Race Online Limited,Commercial,1
JSM Properties,Commercial,1
MTN Afghanistan,Commercial,1
Auspice Infratel Pvt. Ltd.,Commercial,1
Department for Work and Pensions,Government,1
San Diego Unified School District,Education,1
IBC Israel Broadband Compny Ltd,Commercial,1
University of South Bohemia in Ceske Budejovice,Education,1
Galaxya SARL,Commercial,1
Ivertec Ltd,Commercial,1
UTL Technologies Limited,Commercial,1
Pishgaman Toseeh Ertebatat Company (Private Joint Stock),Commercial,1
Sonic Markets Inc,Commercial,1
HASHIKMA NGN International Communications 015LTD,Commercial,1
"Universita' degli Studi di Parma",Education,1
Ceske Vysoke Uceni Technicke v Praze,Education,1
District at Campus West,Education,1
Arizona Tri-University Network,Education,1
Kviknet.dk ApS,Commercial,1
Mobile Interim Company no.2 sal,Commercial,1
GWDG,Education,1
Bangladesh Research and Education Network,Education,1
AZTEVIL - Villas at Vista Del Sol,Education,1
Beijing Kingsoft Cloud Internet Technology Co. Ltd.,Commercial,1
Nizhny Novgorod State University,Education,1
Univerzita Jana Evangelisty Purkyne v Usti nad Labem,Commercial,1
University Linz,Education,1
Universita degli Studi di Torino,Commercial,1
"ENEA - Agenzia Nazionale Per le Nuove Tecnologie l'Energia e Lo Sviluppo Economico Sostenibile",Commercial,1
Federal State Institution of Higher Professional Education Peoples Friendship University of Russia,Education,1
Icon Ltd,Commercial,1
Futain Trading Co.,Commercial,1
Comforthost Services,Commercial,1
Edelino Commerce Inc,Commercial,1
Lokenath Electronics Pvt. Ltd.,Commercial,1
Golden Touch International,Commercial,1
Weberous Web Design,Commercial,1
Aluminiere Lauralco,Commercial,1
United Arab Emirates University,Education,1
Call Master LLC,Commercial,1
National Government of Kenya,Government,1
Nottingham Trent University,Education,1
Universite de Nice,Education,1
Waclaw Piotr Labedz Trading as P.H.U.Cyber Grota,Commercial,1
Wastequip,Commercial,1
Connecticut Public Broadcasting Network,Government,1
Eastern Shore Communications LLC,Commercial,1
Novinvestrezerv LLC,Commercial,1
Duke Kunshan University,Education,1
University Liggett School,Education,1
SME Clients,Commercial,1
Islamic University in Uganda - Mbale Campus,Education,1
Cluster Logic Inc,Commercial,1
IIT Dharwad,Commercial,1
Hanyang University,Education,1
Enterprise Business Clients,Commercial,1
Direcao Geral de Estatisticas da Educacao e Ciencia,Commercial,1
Fairfield Ludlowe High School,Education,1
Infortek Networks Ltda-ME,Commercial,1
Hewlett Packard Enterprise Company,Commercial,1
Millennium Telecommunication Services L.L.C,Commercial,1
Tehilah Base Digital Ltd,Commercial,1
University of Michigan Information and Technology Services,Education,1
Philips Electronics Ltd,Commercial,1
Camarines Sur Polytechnic Colleges,Commercial,1
Interregional Society of Communication City Communication Networks LLC,Organization,1
Ngcom Ppp0E Lagos,Commercial,1
RF Engineering,Commercial,1
National Institute of Cholera and Enteric Diseases (Niced) West Bengal,Education,1
TX Scottish Rite Hospitals,Organization,1
Servicio de Administracion de Rentas,Commercial,1
Tweedy Browne Company LLC,Commercial,1
Sul Internet Equipamentos de Informatica Ltda ME,Commercial,1
PPTIK - Universitas Gadjah Mada.,Education,1
Indian Institute of Engineering Science and Technology Shibpur,Education,1
Universita Sidi Mohamed Ben Abdellah - Fas,Commercial,1
Universita Mohamed V - Agdal - Rabat,Education,1
The University of Strathclyde,Education,1
iTalkBB Australia Pty Ltd,Commercial,1
Memorial Hermann Health System,Organization,1
Doze Internet,Commercial,1
Spot-Net Ltd,Commercial,1
Utah State University Eastern,Education,1
St Thomas Aquinas,Commercial,1
Mayak Smart Services Ltd.,Commercial,1
Corp Recombinant Data,Education,1
Armed Forces of the Philippines,Military,1
Department of Information Technology and Telecom,Government,1
University of Embu,Education,1
Technische Universitaet Ilmenau,Education,1
IUCC,Education,1
Hype Enterprises,Commercial,1
City Wide Communications Inc.,Commercial,1
Frontier Networks Pty Ltd,Commercial,1
Altan Redes S.A.P.I. de C. V.,Commercial,1
Stichting Nuwelijn,Commercial,1
Televisora del Sur Sac,Commercial,1
EDF France,Commercial,1
City of Hoover-Sports Complex,Commercial,1
King Fahd University of Petroleum and Minerals,Education,1
Alexandru Ioan Cuza University,Education,1
Hax Consultancy DMCC,Commercial,1
Balance Group Limited,Commercial,1
"St Mary's Ce Primary School",Education,1
Zhejiang Telecom Co.Ltd Hangzhou Limited,Commercial,1
Siva Sai Lakshmi Traders,Commercial,1
Maritime Research Institute Netherlands,Organization,1
Fast Lane Consulting and Educ,Commercial,1
Synermed,Commercial,1
Advanced Science and Technology Institute,Education,1
GSL Networks Pty Ltd,Commercial,1
University of Malaya,Education,1
Universitas Sriwijaya,Education,1
Hang Seng Management College,Education,1
Five Internet Solutions Pvt. Ltd.,Commercial,1
Essnet,Commercial,1
Lalitha Enterprises,Commercial,1
Maks Communications Pvt. Ltd.,Commercial,1
Pa/231 Myoma Zaypweyonetan,Commercial,1
Deepak Network,Commercial,1
Arrownet Pvt.Ltd,Commercial,1
King Abdullah University of Science and Technology,Education,1
MD Manir Hossen Trading as Xplore Cyber & Net,Commercial,1
Gitam University,Education,1
PT.Bangsawan Cyberindo,Commercial,1
Bhomika,Commercial,1
JiLin Province ChenXun Network Technology Company Limited,Commercial,1
Staples Europe BV,Commercial,1
Country Eggs Inc,Commercial,1
Department of Transport and Main Roads,Government,1
No.7-11 Zhuyuan Street,Commercial,1
National Science Center Foundation Inc.,Government,1
Superior Home Services Inc.,Commercial,1
Loyal Telesystems Pvt. Ltd.,Commercial,1
Department 9232 - Advanced Information Technology,Organization,1
Inana Group LLC,Commercial,1
Shengkejiju Hangzhou Zhejiang,Government,1
Alliance for Downtown New,Education,1
Inside Sistemas de Informacao Ltda,Commercial,1
Haroon Haq,Commercial,1
Tvcable de Leon S.A. de C.V.,Commercial,1
Ez2 Network Inc,Commercial,1
"Al'Akhawayn University",Education,1`,CQ=`Name,Type,Downloads
"St Michael's College",Education,80
Universidad Eafit,Education,47
Claremont University Consortium,Education,36
University of Florida,Education,22
Colorado School of Mines,Education,21
China Education and Research Network,Education,21
Appalachian State University,Education,20
Middlebury College,Education,19
Ball State University,Education,16
Universiti Sains Malaysia Penang Malaysia,Education,16
University of California Los Angeles,Education,15
University of Minnesota,Education,14
Colby College,Education,14
Air Force Systems Networking,Military,13
University of Wisconsin Madison,Education,12
Massachusetts Institute of Technology,Education,12
Valdosta State University,Education,12
Emory University,Education,12
The Citadel,Education,11
New York University,Education,10
Danmarks Tekniske Universitet,Education,10
Brown University,Education,10
Warde High School,Education,10
Connecticut State Colleges & Universities Connecticut State University System,Education,10
University of Pittsburgh,Education,9
University of Toronto,Education,9
The Bloomsbury Computing Consortium,Education,9
Christopher Newport University,Education,9
Florida Gulf Coast University,Education,9
Dominican University,Education,9
Ohio State University,Education,8
Cornell University,Education,8
Virginia Polytechnic Institute and State Univ.,Education,8
University of Glasgow,Education,8
Eastern Washington University,Education,8
North Carolina State University,Education,8
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,8
Worcester Polytechnic Institute,Education,8
Alabama School of Fine Arts,Education,8
Technische Universitaet Muenchen,Education,8
Rose-Hulman Institute of Technology Inc,Education,8
University of New Hampshire,Education,7
University of British Columbia,Education,7
Bilkent University,Education,7
Tufts University,Education,7
TBC,Commercial,7
American University of Middle East,Education,7
U-Turn Technology,Commercial,7
Indiana University,Education,6
University of Texas at Austin,Education,6
Washington State Board for Community & Technical Colleges,Education,6
University of Chicago,Education,6
University of Rochester,Education,6
University of North Carolina at Chapel Hill,Education,6
University of North Carolina at Wilmington,Education,6
Clark University,Education,6
University of California Merced,Education,5
University of Puget Sound,Education,5
Georgia Institute of Technology,Education,5
University of Washington,Education,5
University of Colorado,Education,5
Adelphi University,Education,5
Coventry University,Education,5
University of Michigan,Education,5
Syracuse University,Education,5
Smith College,Education,5
Montclair State University,Education,5
Pern-Pakistan Education & Research Network is an,Library,5
Union College,Education,5
The University of Melbourne,Education,5
Agentia de Administrare a Retelei Nationale de Informatica pentru Educatie si Cercetare,Education,5
Internexa S.A. E.S.P,Commercial,5
Leuphana Universitaet Lueneburg,Education,5
Office of Info.Tech. Admin. for Educational Development,Commercial,5
Nova Group LLC,Commercial,5
Converse College,Education,5
Uni Torino,Education,5
Kentucky Wesleyan,Commercial,5
University of Nebraska-Lincoln,Education,4
George Mason University,Education,4
Arizona State University,Education,4
Yale University,Education,4
North Dakota State University - Computer Center,Education,4
University of Illinois,Education,4
University of California Santa Barbara,Education,4
McGill University,Education,4
Franklin and Marshall College,Education,4
Tulane University,Education,4
University of Dayton,Education,4
University of Massachusetts Dartmouth,Education,4
Norwegian School of Management,Education,4
Universidade Federal do Para,Education,4
Bradley University,Education,4
Oracle Corporation,Commercial,4
Ministry of Education,Education,4
Umea University,Education,4
Universite Pierre et Marie Curie,Education,4
Hogeschool Enschede,Commercial,4
St. Norbert College,Education,4
Massachusetts Convention Center Authority,Commercial,4
City of Lancaster,Organization,4
Butler County Comm College,Education,4
Consortium GARR,Education,4
The University of Strathclyde,Education,4
Universiti Kebangsaan Malaysia,Education,4
Universitas Gadjah Mada,Education,4
IMEC (Interuniversitair Micro-Electronica Centrum) VZW,Commercial,4
The College of William and Mary,Education,4
Universidad Nacional Autonoma de Mexico,Education,3
State University of New York at Stony Brook,Education,3
California State University Office of the Chancellor,Education,3
National Institutes of Health,Government,3
University of South Florida,Education,3
University of Durham,Education,3
University of Southern California,Education,3
University of Virginia,Education,3
Michigan State University,Education,3
Princeton University,Education,3
Siena College,Education,3
Boston University,Education,3
University of San Diego,Education,3
Longwood Medical and Academic Area,Education,3
University of Alberta,Education,3
University of California Irvine,Education,3
Colleges of the Fenway Inc.,Education,3
"Queen's University",Education,3
California Institute of Technology,Education,3
University of Montreal,Education,3
Cal State Fullerton,Education,3
Universitaet Potsdam,Education,3
University of Richmond,Education,3
Universiteit Utrecht,Education,3
Purchase College - SUNY,Education,3
Carleton College,Education,3
Ministry of Education Computer Center,Education,3
University of North Carolina at Greensboro,Education,3
Bellarmine University,Education,3
Fayetteville State University,Education,3
Enterprise,Commercial,3
National University of Science and Technology,Education,3
Technische Hochschule Deggendorf,Education,3
Universite de Rennes,Education,3
"Universita' degli Studi di Trieste",Education,3
Waterloo Region District School Board,Education,3
Bates College,Education,3
Western Kentucky University,Education,3
Saint Bonaventure University,Education,3
AVK-Wellcom Ltd.,Commercial,3
Empresas Publicas de Medellin E.S.P.,Commercial,3
Microsoft Limited,Commercial,3
Ucab Guayana,Commercial,3
North West University,Education,3
"Universita' degli Studi di Genova",Government,3
Golling Chrysler Jeep,Commercial,3
Huashu Media&Network Limited,Commercial,3
LG Electronics,Commercial,3
One Net,Commercial,3
C BEYOND s.a.l,Commercial,3
The University of Edinburgh,Education,3
Homax Industries Limited,Commercial,3
RBS Citizens NA,Commercial,3
Frontier Networks Pty Ltd,Commercial,3
Altan Redes S.A.P.I. de C. V.,Commercial,3
TT1 Datacenter UG (haftungsbeschraenkt),Commercial,3
Performance Systems International,Commercial,3
ICT Center,Commercial,3
Gandhi Nager,Education,3
Universiti Malaysia Terengganu,Education,3
Rensselaer Hartford Graduate Center Inc.,Education,3
Instituto Tecnologico y de Estudios Superiores de Monterrey,Education,3
Drake University - IA,Education,3
ITSS Inc,Commercial,3
Rutgers University,Education,3
Headquarters USAISC,Military,2
Nevada System of Higher Education,Education,2
Western Washington University,Education,2
Colorado State University,Education,2
University of Utah,Education,2
Georgia Department of Education,Education,2
University College London,Education,2
Columbia University,Education,2
Florida State University,Education,2
Northwestern University,Education,2
University of California Davis,Education,2
University of Maryland,Education,2
Technische Universitaet Dresden,Education,2
University of Cambridge,Education,2
Missouri University of Science and Technology,Education,2
Kent State University,Education,2
Technische Universiteit Eindhoven,Education,2
University of California Riverside,Education,2
Duke University,Education,2
University of Texas,Education,2
University of Stellenbosch,Education,2
Ludwig-Maximilians-Universitaet Muenchen,Education,2
University of Montana,Education,2
Stanford University,Education,2
Grand Valley State University,Education,2
American University,Education,2
Florida International University,Education,2
University of North Florida,Education,2
Purdue University,Education,2
University of Miami,Education,2
Universidad Nacional de Colombia,Education,2
University of Calgary,Education,2
University of Delaware,Education,2
Johns Hopkins University,Education,2
University of Notre Dame,Education,2
University of Tennessee,Education,2
University of California San Diego,Education,2
University of Arizona,Education,2
Morgan State University,Education,2
University de Los Andes,Education,2
University of South Carolina,Education,2
Orange County Department of Education,Education,2
University of St. Thomas,Education,2
Fairfax County Public Schools,Education,2
Minnesota State Colleges and Universities,Education,2
SUNY College at New Paltz,Education,2
Universiti Teknologi MARA,Education,2
Niagara University,Education,2
USDA - Office of Operations,Government,2
Tohoku University,Education,2
New Jersey Institute of Technology,Education,2
UAB Balticum TV,Education,2
Middle East Technical University,Education,2
Universitaet Stuttgart,Education,2
Brno University of Technology,Education,2
Los Alamos National Laboratory,Government,2
Contra Costa County Office of Education,Education,2
Universiteit van Amsterdam,Education,2
DePauw University,Education,2
NUS,Education,2
Indian Institute of Science Bangalore,Education,2
University of Alabama,Education,2
Johnson County Community College,Education,2
Universiti Putra Malaysia Campus Network,Education,2
Indian Institute of Science Education and Research,Education,2
Fairfield University,Education,2
Politecnico di Torino,Education,2
University of Exeter,Education,2
High Speed Web/Genesis 2 Networks,Commercial,2
Whitman College,Education,2
Ecole Polytechnique,Education,2
University of Bristol,Education,2
NTU,Education,2
Institut Teknologi Bandung,Education,2
Keio University,Education,2
University of Bath,Education,2
Akademska mreza Republike Srbije - AMRES,Education,2
Technische Universitat Wien,Education,2
Universitaet Duisburg-Essen,Education,2
Universitat de Barcelona,Education,2
Universiteit Antwerpen,Education,2
Emporia State University,Education,2
Central Washington University,Education,2
Universite du Quebec a Rimouski,Education,2
Expedia Inc.,Commercial,2
University of North Carolina at Asheville,Education,2
Woodhouse College,Education,2
VIMS,Education,2
Manhattan College,Education,2
Imperial College of Science Technology and Medicine,Education,2
Pincom d.o.o.,Commercial,2
Centre de Ressources Informatiques,Commercial,2
"Public University Corporation Fukuoka Women's University",Education,2
The American University in Cairo,Education,2
Rijksuniversiteit Groningen,Education,2
National Information Technology Authority Uganda,Commercial,2
Aster Sp. z o.o.,Commercial,2
Kapos-NET Ltd.,Commercial,2
Real Miles Communication,Commercial,2
University of Birmingham,Education,2
Fundacao Universidade Federal do Abc - UFABC,Education,2
Blvd,Education,2
Millennium One,Education,2
Namibia University of Science and Technology,Education,2
Informat Communication,Commercial,2
JSC RA Telecom,Commercial,2
Dehradun Enet Solutions Private Ltd,Commercial,2
Interlink Ireland Ltd,Commercial,2
Malaysian Research & Education Network,Education,2
Funpar - Fundacao da UFPR Para O DCTC,Education,2
Menlo Security Inc.,Commercial,2
University of Oxford,Education,2
The University of Cape Coast,Education,2
Selk Electronics Inc,Education,2
Indian Institute Of Technology Roorkee,Education,2
Airnet Telecommunications,Commercial,2
Escuela Agricola Panemericana Inc.,Education,2
City of Norfolk Virginia,Government,2
Indian Institute of Technology Goa,Government,2
IIT Madras,Education,2
Special Communication Organization,Government,2
Cixi Sanbei Rongxin Hardware Factory,Commercial,2
IP Allocation 1 IIU,Education,2
Ionis Group - Ionis Schools of Technology and Management SAS,Education,2
Rede Nacional de Ensino e Pesquisa,Education,2
The University of North Carolina at Pembroke,Education,2
Indian Intitute of Technology (IIT) Gujarat,Education,2
E Village,Commercial,2
Bulgarian Research and Education Network Association,Education,2
County of Loudoun Virginia,Government,2
INRIA Saclay - Ile-de-France,Education,2
Voyager Internet Ltd. Business Connectivity,Commercial,2
Studio Armonia S.r.l.,Commercial,2
Int-Inform ADSL Network,Commercial,2
NetIT,Commercial,2
National Institute of Technology Trichy,Education,1
Red de Interconexion Universitaria,Education,1
Swarthmore College,Education,1
CSU Monterey Bay,Education,1
University of Connecticut,Education,1
University of Pretoria,Education,1
University of Leicester,Education,1
Michigan Technological University,Education,1
The Hebrew University of Jerusalem,Education,1
Illinois Institute of Technology,Education,1
Navy Network Information Center,Military,1
Universidade Federal do Rio de Janeiro,Education,1
Washington State University,Education,1
Department of Education,Government,1
Universitaet zu Koeln,Education,1
Carnegie Mellon University,Education,1
University of California San Francisco,Education,1
Universidade Estadual Paulista,Education,1
Drexel University,Education,1
Grant MacEwan University,Education,1
University of Leeds,Education,1
University of Kentucky,Education,1
University of Mississippi,Education,1
Illinois State University,Education,1
Pfizer Inc.,Commercial,1
University College Dublin,Education,1
University of Missouri-Columbia,Education,1
University of New South Wales,Education,1
University of Victoria,Education,1
University of the Witwatersrand,Education,1
Universidad Nacional de Buenos Aires,Education,1
California State University Sacramento,Education,1
University of Texas at Dallas,Education,1
The George Washington University,Education,1
Universiteit Twente,Education,1
"Reseau d'Informations Scientifiques du Quebec",Organization,1
Texas Tech University,Education,1
University of Iowa,Education,1
Baylor University,Education,1
Harvard University,Education,1
Board of Regents of the University System of Georgia,Education,1
Carroll College,Education,1
Oberlin College,Education,1
Max-Planck-Institute Stuttgart,Education,1
University of Cape Town,Education,1
State of Maryland,Government,1
Southeastern Louisiana University,Education,1
Dartmouth College,Education,1
University of Newcastle upon Tyne,Education,1
Indian Institute of Technology (IIT) Guwahati,Education,1
San Diego State University,Education,1
University of California at Berkeley,Education,1
Loyola University Chicago,Education,1
Xerox Corporation,Commercial,1
Lehigh University,Education,1
Vrije Universiteit Amsterdam,Education,1
City of Toronto,Government,1
Universidade Estadual de Campinas,Education,1
The Pennsylvania State University,Education,1
National Aeronautics and Space Administration,Government,1
Memorial University of Newfoundland,Education,1
Washington University,Education,1
University of Saskatchewan,Education,1
Universidade Federal Do Rio Grande Do Sul,Education,1
Rochester Institute of Technology,Education,1
Utah State University,Education,1
Kansas State University,Education,1
University of Louisiana at Lafayette,Education,1
University of California Santa Cruz,Education,1
Clackamas Education Service District,Education,1
Technische Universitaet Dortmund,Education,1
DePaul University,Education,1
University of Alaska,Education,1
Concordia College,Education,1
Universiti Malaysia Sarawak,Education,1
Trinity University,Education,1
University of Texas at San Antonio,Education,1
University of Kent,Education,1
Massachusetts General Hospital,Organization,1
University of Maryland Baltimore County,Education,1
Central Michigan University,Education,1
University of Hertfordshire,Education,1
Butler University,Education,1
The University of St. Andrews,Education,1
Universite de Sherbrooke,Education,1
Frisco Independent School District,Education,1
University of the Philippines Los Banos,Education,1
Mount Holyoke College,Education,1
Johannes Gutenberg-Universitaet Mainz,Education,1
University of Oklahoma,Education,1
Bucknell University,Education,1
Bryn Mawr College,Education,1
San Francisco State University,Education,1
Bristol-Myers Squibb Company,Commercial,1
Oklahoma State University,Education,1
Education Service Center Region,Education,1
State of North Dakota Itd,Government,1
Heriot-Watt University,Education,1
The College of New Jersey,Education,1
Gonzaga University,Education,1
Bergen University Norway,Education,1
Vassar College,Education,1
Indian Institute of Technology Patna,Education,1
Bowdoin College,Education,1
Leiden University,Education,1
Digiweb Ltd.,Commercial,1
Progressive Casualty Insurance Companies,Commercial,1
"St. Mary's College of Maryland",Education,1
Universidad Carlos III de Madrid,Education,1
Sungkyunkwan University,Education,1
Universitaet Bremen,Education,1
Doshisha University,Education,1
Multnomah Education Service District,Education,1
National Oceanic and Atmospheric Administration,Government,1
Company with Additional Responsibility Company Best,Commercial,1
Brandeis University,Education,1
Genentech Inc.,Commercial,1
University of Alabama at Birmingham - University Computer Center,Education,1
Universitat Jaume I,Education,1
UP Diliman Network,Education,1
Valparaiso University,Education,1
Stichting Duwo,Commercial,1
Ave Maria University,Education,1
University of Colorado Denver,Education,1
"St. Jude Children's Research Hospital",Organization,1
Auckland College of Education,Education,1
Huntington Ingalls Incorporated,Commercial,1
University of Denver,Education,1
Indian Institute of Technology Kanpur,Education,1
STE Africell RDC SPRL,Commercial,1
Mathematica Inc.,Commercial,1
University of Liverpool,Education,1
State University of New York at Buffalo,Education,1
Deutsches Zentrum fuer Luft- und Raumfahrt e.V.,Government,1
University of Texas at Arlington,Education,1
Norfolk State University,Education,1
University of Tromso,Education,1
Arkansas State University,Education,1
Juniata College,Education,1
Bergen Community College,Education,1
Ventura County CCD,Organization,1
Wheaton College,Education,1
Vienna University Computer Center,Education,1
Ecole de Technologie Superieure,Education,1
City University of Hong Kong,Education,1
Cite Internationale Universitaire de Paris,Education,1
Sakarya University Computer Center,Education,1
Iona College,Education,1
Universidad de Valencia,Education,1
The New Mexico Military Institute,Education,1
KMIT,Education,1
Connecticut College,Education,1
Aston University,Education,1
Eli Lilly and Company,Commercial,1
Loyola Marymount University,Education,1
California State Polytechnic University - Pomona,Education,1
Canisius College,Education,1
University of Essex,Education,1
Akdeniz University,Education,1
Silesian University of Technology Computer Centre,Education,1
Radford University,Education,1
Fujitsu Services Ltd.,Commercial,1
sasag Kabelkommunikation AG,Commercial,1
LaTrobe University,Education,1
University of Zambia,Education,1
University of Adelaide,Education,1
CIS,Commercial,1
PG&E,Commercial,1
Pohang University of Science and Technology,Education,1
Cloud Plus Pty Ltd,Commercial,1
Royal Melbourne Institute of Technology,Education,1
Bogor Agricultural University,Education,1
"Bard College at Simon's Rock",Education,1
New Mexico Tech,Education,1
Universitaet Kiel,Education,1
Universitas Padjadjaran,Education,1
Universite de Moncton,Education,1
Gottfried Wilhelm Leibniz Universitaet Hannover,Education,1
National University Corporation Tokyo University of Agriculture and Technology,Education,1
Coast Guard Academy,Education,1
Jawaharlal Nehru University,Education,1
Universitas Kristen Petra,Education,1
Assam University Silchar,Education,1
Panchkula,Commercial,1
United Nations Office Nairobi,Organization,1
Banaras Hindu University,Education,1
Rajiv Gandhi National Institute of Youth Development,Organization,1
IP Allocation 1 AU,Education,1
College of Engineering and Technology Bhubaneswar,Education,1
Chiba Institute of Technology,Education,1
"Commissariat a L'energie Atomique",Organization,1
Delhi University North Campus,Education,1
Kyushu Institute of Technology,Education,1
Malatya Inonu Universitesi,Education,1
Facultes Universitaires Notre Dame de la Paix,Education,1
Karlsruhe Institute of Technology,Education,1
Universite de Lorraine,Education,1
Universite Paul Sabatier,Education,1
NIT Goa,Commercial,1
"Universita' degli Studi di Napoli Federico II",Education,1
Universitaet Bielefeld,Education,1
Technical University of Crete,Education,1
New York University Abu Dhabi - Abu Dhabi Foreign Branch-USA,Education,1
Universitaet Heidelberg,Education,1
Pakistan Software Export Board,Organization,1
Rahanet Zanjan Co. (Private Joint-Stock),Commercial,1
Gobierno de Canarias,Organization,1
Graphic Era University Uttrakhand,Education,1
Spring ISD,Education,1
GSI Helmholtzzentrum Fuer Schwerionenforschung GmbH,Commercial,1
Universite du Maine - D.S.I.,Education,1
University of La Verne,Education,1
Universiti Pendidikan Sultan Idris,Education,1
Intred S.p.A.,Commercial,1
Randolph-Macon College,Education,1
Institut National de Recherche en Informatique et Automatique,Commercial,1
Winston-Salem State University,Education,1
IP Allocation 1 Umt,Education,1
Howard County Maryland,Commercial,1
Pretecs Networks Inc.,Commercial,1
Universidad Autonoma de Occidente,Education,1
Universidad Autonoma Metropolitana,Education,1
Moscow Institute of Physics and Technology,Organization,1
Ustanova Studentskog Standarda Studentski Centar U Novom Sadu Novi Sad Bul.Despota Stefana 7A,Commercial,1
University of Portland,Education,1
Link Telecom NN Ltd.,Commercial,1
Mission College,Education,1
Buena Vista University,Education,1
St. Edwards University,Education,1
California State University Bakersfield,Education,1
Group Health Incorporated,Commercial,1
Voyager Internet Ltd - Static Assignments,Commercial,1
Portland Community College,Education,1
Lutheran High School,Education,1
State Library of New South Wales,Library,1
Dunkin Donuts,Commercial,1
Six Continents Hotels Inc,Commercial,1
Agri Dagi Universitesi,Education,1
Samrat Ashok Technological Institute Vidisha,Education,1
Dibrugarh University Dibrugarh,Education,1
Cairo American College,Education,1
Veer Surendra Sai University of Technology,Education,1
Center of Theoretical Phisics of PAN,Education,1
College of the Holy Cross,Education,1
Altibox Danmark AS,Commercial,1
Sofia University St. Kliment Ohridski,Education,1
ENU,Commercial,1
Namik Kemal University,Education,1
Student Appartments Bielefeld,Commercial,1
Hochschule Furtwangen,Commercial,1
UFR Bichat Inserm Ifr,Commercial,1
Spacelink Network Pvt. Ltd.,Commercial,1
Universidad Autonoma de Yucatan,Education,1
NEF Fonden,Commercial,1
Foothill-DeAnza Community College District,Education,1
Uber Technologies Inc,Commercial,1
Technische Universitaet Darmstadt,Education,1
Sonoma State University,Education,1
Veer Bahadur Singh Purvanchal University,Education,1
Institut fuer Klimafolgenforschung e.V.,Commercial,1
Trident Technical College,Education,1
Youngstown State University,Education,1
Green Farms Academy,Commercial,1
Korporatsia Svyazy Ltd.,Commercial,1
Speednet,Commercial,1
AllTele Broadband Itux,Commercial,1
WiMAX Customer Allocation for CTG Zone,Commercial,1
Subisu P2P IP Block,Commercial,1
University of Jammu,Education,1
RWTH Aachen University,Education,1
Telecable Economico S.A.,Commercial,1
University of Dar es Salaam,Education,1
Wageningen Universiteit,Education,1
"Ecole Nationale de l'Aviation Civile",Commercial,1
Internexa Peru S.A,Commercial,1
Drury Inns,Commercial,1
Data Network Solutions,Commercial,1
The Beacon,Commercial,1
RHW Management,Commercial,1
Instal Matel S.L.,Commercial,1
Aspire Technology Solutions Ltd,Commercial,1
X2 Communications Ltd,Commercial,1
The Regents of the University of California - University of California San Diego.,Education,1
Guilford College,Education,1
Washington & Jefferson College,Education,1
Kibabii University,Education,1
Vologda19 Stream Net,Commercial,1
University of the Philippines Baguio,Education,1
Universitaet Hohenheim,Education,1
SpeedyNet,Commercial,1
Qinetiq Limited,Commercial,1
Delgado Community College,Education,1
Technical University of Kenya,Education,1
TIGO,Commercial,1
First Baptist Church of Dallas,Organization,1
Blue Cross Insurance Inc.,Commercial,1
Colorado Mountain College,Education,1
Hjoerring Gymnasium,Education,1
Universidade Federal de Juiz de Fora,Commercial,1
John Cooper School,Education,1
Fort Lewis College,Education,1
Gl Hellerup,Commercial,1
Arsat - Empresa Argentina de Soluciones Satelitales S.A.,Commercial,1
Lake Tahoe Community College,Education,1
Academic Computer Centre CYFRONET AGH,Education,1
Slovanet a.s.,Commercial,1
Paul Scherrer Institut,Commercial,1
Indian Institute of Science Education and Research Pune,Organization,1
Ecole Polytechnique Federale de Lausanne,Education,1
University College Cork,Education,1
Metaphor Digital Media,Commercial,1
Hasseris Gymnasium,Commercial,1
CCCS,Commercial,1
Jesmi Online Pvt Ltd,Commercial,1
Faculdades Catolicas,Education,1
Alink Telecom Faso,Commercial,1
Poste Italiane S.p.A.,Commercial,1
China academy of fine arts institute of landscape architecture design,Organization,1
Areti Internet LLC,Commercial,1
Universidade Federal do Rio Grande - Furg,Education,1
Media Commerce Peru S.A.C,Commercial,1
University at Buffalo,Education,1
Vovinet Infotech Pvt. Ltd,Commercial,1
Didehban Net Company PJS,Commercial,1
IAM,Commercial,1
NET IS SAT Ltd.,Commercial,1
Kirinyaga University College,Education,1
Willoweb LLC,Commercial,1
IAXN Telecom Pvt. Ltd.,Commercial,1
Amazon Corporate LLC,Commercial,1
PSD892209 - Lankershim Cafe Oscar Gonzales,Commercial,1
NIIT Neemrana Rajasthan,Commercial,1
Bates White,Commercial,1
Amherst Telephone Co,Commercial,1
Vocus,Commercial,1
Fincantieri,Commercial,1
Matrix International SARL,Commercial,1
Kabale University,Education,1
Brunel University London,Education,1
NSW Department of Education,Education,1
Rayankadeh Apadana Company Ltd,Commercial,1
Usak Universitesi,Education,1
Lightwire Ltd,Commercial,1
Franklin W. Olin College of Engineering,Education,1
Kottayam Cable Channel Distributors Pvt Ltd,Commercial,1
American Information Network,Commercial,1
Lofts,Education,1
Race Online Limited,Commercial,1
GLA University,Education,1
Ltd. Delta-Telecom,Commercial,1
RB Communication AB,Commercial,1
Pishgaman Toseeh Ertebatat Company (Private Joint Stock),Commercial,1
Wahu Student Apartments,Education,1
Home Broadband Services LLP,Commercial,1
Istanbul Teknik Universitesi,Education,1
Studierendenwerk Bonn AoeR,Commercial,1
Kenet Jkuat Main Campus,Commercial,1
GWDG,Education,1
South East Asia Telecom (Cambodia) Co. Ltd,Commercial,1
Bangladesh Research and Education Network,Education,1
OOO Ni,Commercial,1
CEDIA,Organization,1
Eberhard-Karls-Universitaet Tuebingen,Education,1
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,1
NewMountainView Satellite Corporation,Commercial,1
Airband Community Internet Ltd,Commercial,1
Emory & Henry College,Education,1
Transport Telecom Company Ltd,Commercial,1
Internet Multifeed Co.,Commercial,1
Airbus Defense and Space GmbH,Commercial,1
Symphony Communication Public Company Limited,Commercial,1
OOO Aquarius Data,Commercial,1
Cool Ideas Service Provider (Pty) Ltd,Commercial,1
Sagar Vision,Commercial,1
Bob Maratas,Education,1
United Arab Emirates University,Education,1
Urfu Eunnet,Commercial,1
Martin Methodist College,Education,1
Quintex Alliance Consulting,Commercial,1
Institut de Veille Sanitaire,Organization,1
TEC of Jackson Inc.,Commercial,1
Empecom S.R.O.,Commercial,1
Members,Organization,1
Gateway at Denton,Commercial,1
University of Aberdeen,Education,1
Frankfurt University of Applied Sciences,Education,1
Kungliga Tekniska Hogskolan,Commercial,1
Recep Tayyip Erdogan Universitesi,Education,1
Tzov LAN-Net,Commercial,1
SME Clients,Commercial,1
Ngcom PPPoE Clients,Commercial,1
Statek Corp,Commercial,1
ZINA sarl,Commercial,1
Beirut Arab University(BAU),Education,1
Beijing Wish Network Technology Co. Ltd.,Commercial,1
Philippine British Assurance Co Inc,Commercial,1
Williams College,Education,1
Stichting VU,Education,1
Silva Oliveira Servicos de Informatica Ltda ME,Commercial,1
Communaute Universite Grenoble Alpes,Education,1
NewVisions Communications Inc.,Organization,1
The Education University of Hong Kong,Education,1
Connectnet Solutions Inc,Education,1
Indian Institute of Science Education and Research Trivandrum Kerala,Education,1
Nawafeth al-Hadhara for Internet and Information Systems Co.Ltd,Commercial,1
Optinet U.K. Limited,Commercial,1
Tullahoma Utilities Authority,Commercial,1
Kauno Technologijos Universitetas,Education,1
University of Mines and Technology,Education,1
Air Wifi Comunicaciones Ltda,Commercial,1
DK,Commercial,1
Aix-Marseille Universite - AMU,Education,1
A-19 Dhamrai Bazar Dhamrai Dhaka,Commercial,1
Wireless Associate Service Providers CC,Commercial,1
Institute for Research in Fundamental Sciences,Education,1
Safia Ill Customers,Commercial,1
Bu-Ali Sina University,Education,1
Incomplast Service LLC,Commercial,1
Joink LLC,Commercial,1
Universidad Tecnica de Ambato,Education,1
Al Madar Al Jadeed Joint Stock Company,Commercial,1
Syrion Sp. z o.o.,Commercial,1
Fundacao Carlos Chagas Filho de Amparo a Pesquisa,Education,1
Elettrocontabili,Commercial,1
Corvallis River Run,Commercial,1
Universidad Veracruzana,Education,1
CiTYCOM Network,Commercial,1
NUS Gigapop,Education,1
City Wide Communications Inc.,Commercial,1
GCI Network Solutions Limited,Commercial,1
REV,Commercial,1
Academy of Maritime Education and Training (AMET) Chennai,Education,1
Emeigh Investments LLC,Commercial,1
Dot Com Solutions Inc,Commercial,1
Inet Communications Limited,Commercial,1
UK Research and Innovation,Education,1
Studentenwerk Leipzig,Organization,1
Delta Air Lines Inc,Commercial,1
Obafemi Awolowo University IFE,Education,1
CSH LLC,Commercial,1
Neo Derm (HK) Ltd,Commercial,1
Unit e 13/F Golden Sun Centre,Commercial,1
IIT Hyderabad,Education,1
Universiti Malaysia Sabah,Education,1
Shiv Nadar University,Education,1
University of Dhaka,Education,1
University Grants Commission of Bangladesh,Education,1
Universitas Lambung Mangkurat,Education,1
Apek Technology Pvt. Ltd.,Commercial,1
Information Technology Center,Education,1
Vancouver Island University,Education,1
Bangladesh University of Engineering and Technology,Education,1
Data Center Viva City Town Khan-Uul District,Commercial,1
Arrowswift Communication Pvt. Ltd,Commercial,1
Goodwill Smartlink Pvt Ltd,Commercial,1
Evedin Technologies,Commercial,1
S R Fibernet,Commercial,1
Netsol-Innovation (Pvt.) Limited,Commercial,1
Static Assignment,Commercial,1
Netze,Commercial,1
LLC ID Strategy,Commercial,1
PC Soft Limited,Commercial,1
PT. Global Media Rembang,Commercial,1
Cubefibernet Pvt. Ltd.,Commercial,1
WirelessWeb Limited,Commercial,1
Sierra Semiconductor,Commercial,1
Admin Officer,Commercial,1
Xiamen Kaopuyun Co. Ltd,Commercial,1
African Institute for Mathematical Sciences Ghana,Education,1
Fixed Network Operations,Commercial,1
Vellore Institute of Technology,Education,1
Transitions Abroad,Commercial,1
AB O Fazelab,Commercial,1
Carlos Mario Mata Aguilar,Commercial,1
Indian Institute of Technology (IIT) Mandi,Education,1
Queen Mary University of London,Education,1
Vinaudit.com Inc.,Commercial,1
IP Allocation 1 NUST,Education,1
Birla Institute Of Technology And Science,Education,1
Federal Research Center for Information and Computational Technologies,Education,1
Icon Fiber,Commercial,1
Jagannath University,Organization,1
Vit Trustashok,Commercial,1
"Sulinet Nat'",Commercial,1
Revolution Broadband Pvt.Ltd.,Commercial,1
Miaola,Commercial,1
Indian Institute Of Technology Banaras Hindu University,Education,1
Haridus- ja Noorteamet,Education,1
"Alma Mater Studiorum - Universita' di Bologna",Education,1
Milli Savunma Universitesi K. K. Astsubay Meslek Yuksek Okulu Komutanligi,Education,1
HEAnet,Education,1
University of Rwanda for Use at ITS College of Science and Technology Campus,Education,1
Tier-1 Enterprise Datacenter in EMEA,Commercial,1
University of Liege,Education,1
Sri Bhagawan Mahaveer Jai,Commercial,1
CTG,Commercial,1
Universite de Nantes,Education,1
Mohammadia Corporation,Commercial,1
National Research University Higher School of Economics,Education,1
Prague British International School s.r.o.,Education,1
Technological University Dublin,Education,1
ITMO University,Education,1
Indiana University Health Inc,Education,1
TeleBroadBand,Commercial,1
Dhirubhai Ambani Institute of Information and Communication Technology,Education,1
Web/Mailserver,Commercial,1
Mt Lebanon School District,Education,1
Millersville University of Pennsylvania,Education,1
Wulfsoft,Commercial,1
CentraleSupelec,Education,1
Susquehanna Investment Group GP,Commercial,1
Utah Tech University,Education,1
MRKR Communications Private Limited,Commercial,1
BASIS Independent Schools,Education,1
Infolink Limited,Commercial,1
Indian Institute of Information Technology Sri City,Government,1
Sprinkville Networks Limited,Commercial,1
Kumasi Technical University,Education,1
Uganda Customer Point to Points and Infrastructure,Commercial,1
Northgate Lakes,Commercial,1
Herningsholm Erhvervsskole & Gymnasier S/I,Commercial,1
Kinema da Ilha Informatica E Tecnologia Ltd.,Commercial,1
NIT Rourkela,Commercial,1
G Net SGP,Commercial,1
GST Steel GmbH,Commercial,1
Spitfire Failover IPs,Commercial,1
Gewobag Wohnungsbau-Aktiengesellschaft Berlin,Commercial,1
PPIP Associated Communication Limited,Commercial,1
Mundo del Acero Flores Viteri S.A. Macflovit,Commercial,1
The Konza Technopolis Development Authority,Government,1
HaqNet Technology Services,Commercial,1
Government Technology Agency,Government,1
NJ,Government,1
PT Madia Asriprima,Commercial,1
Federal Institute of Technology Zurich,Education,1
Weizmann,Education,1
Bar Ilan,Education,1
Malawi University of Business and Applied Sciences,Education,1
Elementary School Bukovecka 17 Kosice,Education,1
Hulinks,Commercial,1
InSilicoTrials Technologies BV,Commercial,1
BTHosting,Commercial,1
9th Street QB Hotel LLC,Commercial,1
Institute for Information Industry,Organization,1
CNRS Station Biologique de Roscoff,Commercial,1`,bQ=`Name,Type,Downloads
Claremont University Consortium,Education,232
The Reed Institute,Education,106
California State Polytechnic University - Pomona,Education,99
Amherst Telephone Co,Commercial,80
Christopher Newport University,Education,42
Texas A&M International University,Education,40
Indraprastha Institute of Information Technology Delhi,Education,30
Arthur Andersen & Co. S.C.,Commercial,27
University of the South,Education,25
University of Toronto,Education,24
China Education and Research Network,Education,24
Universidad Eafit,Education,23
University of Washington,Education,21
IAIN Walisongo Semarang,Education,19
Middlebury College,Education,17
University of Tromso,Education,17
Oracle Corporation,Commercial,17
Connecticut State Colleges & Universities Connecticut State University System,Education,17
University of British Columbia,Education,16
Ball State University,Education,16
DoD Network Information Center,Military,15
McMaster University,Education,15
Stanford University,Education,14
University of Oxford,Education,14
Prime Networks,Commercial,14
University of Michigan,Education,13
Rochester Institute of Technology,Education,13
Union College,Education,13
Washington Island Electric Cooperative Inc.,Commercial,13
University of Cambridge,Education,12
Alabama School of Fine Arts,Education,12
Powai,Education,11
University of Minnesota,Education,10
University of California Los Angeles,Education,9
Purdue University,Education,9
University of St. Thomas,Education,9
Appalachian State University,Education,9
Middle East Technical University,Education,9
NUS,Education,9
Keio University,Education,9
Dominican University,Education,9
Martin Methodist College,Education,9
"Universite Cote d'Azur",Education,9
Virginia Polytechnic Institute and State Univ.,Education,8
Massachusetts Institute of Technology,Education,8
Harvard University,Education,8
Brown University,Education,8
Universidad Nacional de Colombia,Education,8
New Jersey Institute of Technology,Education,8
Universidad Complutense de Madrid,Education,8
Royal Melbourne Institute of Technology,Education,8
Institut Teknologi Bandung,Education,8
Conway Emergency Operations Center,Organization,8
Converse College,Education,8
IIT Madras,Education,8
Cornell University,Education,7
University of Chicago,Education,7
University of Virginia,Education,7
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,7
Tufts University,Education,7
Gonzaga University,Education,7
Lund University,Education,7
Wageningen Universiteit,Education,7
Power Grid Corporation of India Limited,Commercial,7
The Doe Fund Inc.,Organization,7
The University of Cape Coast,Education,7
University of Wisconsin Madison,Education,6
Boston University,Education,6
University of California San Diego,Education,6
University of California Santa Cruz,Education,6
University of the Philippines Los Banos,Education,6
Universiti Teknologi MARA,Education,6
Universidad de La Laguna,Education,6
University of Texas at Arlington,Education,6
University of Exeter,Education,6
University of La Verne,Education,6
M Nets SAL,Commercial,6
Whitworth University,Education,6
Office of Info.Tech. Admin. for Educational Development,Commercial,6
Marriott International Inc.,Commercial,6
The University of Strathclyde,Education,6
Air Force Systems Networking,Military,6
Indiana University,Education,5
Ohio State University,Education,5
Washington State University,Education,5
University of Southampton,Education,5
Danmarks Tekniske Universitet,Education,5
University of Southern California,Education,5
University of Ottawa,Education,5
Rice University,Education,5
Oregon State University,Education,5
University of California Irvine,Education,5
Universiteit Utrecht,Education,5
Korea Advanced Institute of Science and Technology,Education,5
Yildiz Technical University,Education,5
Sky Italia srl,Commercial,5
Wolfgang Koehler,Commercial,5
7Star Cablenet Private Limited,Commercial,5
Indian Intitute of Technology (IIT) Gujarat,Education,5
Kentucky Wesleyan,Commercial,5
University of Pennsylvania,Education,4
Florida State University,Education,4
Texas A&M University,Education,4
George Mason University,Education,4
Georgia Institute of Technology,Education,4
Washington State Board for Community & Technical Colleges,Education,4
Technische Universiteit Eindhoven,Education,4
University of the Western Cape,Education,4
Auburn University,Education,4
University of California Santa Barbara,Education,4
Case Western Reserve University,Education,4
University of Durham,Education,4
Adelphi University,Education,4
State of Maryland,Government,4
University of North Carolina at Wilmington,Education,4
Colgate University,Education,4
Grand Canyon University,Education,4
Virginia Community College System,Education,4
Universiti Sains Malaysia Penang Malaysia,Education,4
Banaras Hindu University,Education,4
Universite Pierre et Marie Curie,Education,4
Instituto Tecnologico Autonomo de Mexico,Education,4
Central Washington University,Education,4
Florida Gulf Coast University,Education,4
KISTI,Government,4
Deen Dayal Upadhyay gorakhpur University,Education,4
Imperial College of Science Technology and Medicine,Education,4
University of the Philippines Baguio,Education,4
Ringkjoebing Gymnasium,Commercial,4
Consortium GARR,Education,4
Suraj Network,Commercial,4
CCCS,Commercial,4
National Technical University of Ukraine,Education,4
Villas on Rensch,Education,4
General Motors LLC,Commercial,4
UAB Starnita,Commercial,4
Rose-Hulman Institute of Technology Inc,Education,4
University of Colorado Colorado Springs,Education,4
BytePlus Pte. Ltd.,Commercial,4
Nevada System of Higher Education,Education,3
Universidad Nacional Autonoma de Mexico,Education,3
Swarthmore College,Education,3
Western Washington University,Education,3
University of Texas at Austin,Education,3
New York University,Education,3
State University of New York at Stony Brook,Education,3
University of Sheffield,Education,3
Montgomery County Public Schools,Education,3
University of Maryland,Education,3
Boston College,Education,3
California State University Office of the Chancellor,Education,3
University of Arkansas at Little Rock,Education,3
Heinrich-Heine-Universitaet Duesseldorf,Education,3
Texas Tech University,Education,3
Princeton University,Education,3
University of Colorado,Education,3
Indian Institute of Technology (IIT) Guwahati,Education,3
Indiana Department of Education,Education,3
Smith College,Education,3
The Pennsylvania State University,Education,3
Johns Hopkins University,Education,3
Washington University,Education,3
York University,Education,3
University of Arizona,Education,3
State of Oregon,Government,3
North Carolina State University,Education,3
The University of St. Andrews,Education,3
University of Manitoba,Education,3
Oklahoma State University,Education,3
Indian Institute of Technology Patna,Education,3
CENIC,Organization,3
University of Canterbury,Education,3
Amherst College,Education,3
TOBB Ekonomi ve Teknoloji Universitesi,Education,3
The Citadel,Education,3
King County Gov,Government,3
Reseau Optique du Campus de la Doua,Education,3
Indian Institute of Science Bangalore,Education,3
University of Newcastle Australia - Callaghan Campus,Education,3
Monmouth University,Education,3
University of Cincinnati,Education,3
University of Maribor,Education,3
Monash University,Education,3
Universitaet Kiel,Education,3
Colby College,Education,3
Akademska mreza Republike Srbije - AMRES,Education,3
National Institute of Technology,Organization,3
Walter Sisulu University,Education,3
College of Charleston,Education,3
Region One Education Service Center,Education,3
Universidad Autonoma Metropolitana,Education,3
Western Kentucky University,Education,3
Eastern Virginia Medical School,Education,3
Divine Word Univesity,Education,3
"Queen's College",Education,3
Dogear/Packet Partners,Commercial,3
RWTH Aachen University,Education,3
Microsoft Limited,Commercial,3
Goshen College,Education,3
University at Buffalo,Education,3
Lyse Tele AS,Commercial,3
GWDG,Education,3
Gatik Business Solutions,Commercial,3
US Dept of Energy Office of Scientific and Technical Information,Government,3
K Net Solutions Pvt Ltd,Commercial,3
Kwame Nkrumah University of Science and Technology,Education,3
West Chester University of Pennsylvania,Education,3
Bangladesh University of Engineering and Technology,Education,3
GigsGigs Cloud Limited,Commercial,3
African Institute for Mathematical Sciences Ghana,Education,3
Indian Institute of Technology Ropar,Education,3
"Sulinet Nat'",Commercial,3
Utah Tech University,Education,3
Wa BW Cowboys LLC,Commercial,3
Bundesministerium des Innern und Fuer Heimat,Government,3
Hotel Erwin,Commercial,3
CNRS Paris Rap,Education,3
MDPI AG,Commercial,3
The Rockefeller University,Education,3
University of Maine System,Education,2
University of Utah,Education,2
University of Connecticut,Education,2
University of Leicester,Education,2
Georgia Department of Education,Education,2
Delft University of Technology Network,Education,2
Intel Corporation,Commercial,2
Department of Education,Government,2
Carnegie Mellon University,Education,2
University of California San Francisco,Education,2
Universidade Estadual Paulista,Education,2
Drexel University,Education,2
International Institute of Information Technology,Education,2
Queens University Belfast,Education,2
University of Rochester,Education,2
Tarleton State University,Education,2
University of Houston,Education,2
University of the Witwatersrand,Education,2
McGill University,Education,2
University of Texas at Dallas,Education,2
University of the Free State,Education,2
Valdosta State University,Education,2
Virginia Commonwealth University,Education,2
Baylor University,Education,2
Indian Institute of Technology Kharagpur India,Education,2
University of Cape Town,Education,2
Fundacao Universidade de Brasilia,Education,2
Technische Universitaet Kaiserslautern,Education,2
Massey University,Education,2
Northern Illinois University,Education,2
University of Calgary,Education,2
University of Delaware,Education,2
Universidade Estadual de Campinas,Education,2
University of Louisville,Education,2
University of Notre Dame,Education,2
Memorial University of Newfoundland,Education,2
University of Lagos,Education,2
Utah State University,Education,2
Kansas State University,Education,2
Utah Education Network,Education,2
Louisiana Tech University,Education,2
University of Alberta,Education,2
Washington School Information Processing Cooperative,Education,2
Nassau County Board of Cooperative Education Services - Nassau Co. NY,Education,2
Frisco Independent School District,Education,2
Research Network University of Ghent,Education,2
San Jose State University,Education,2
Universidade Federal de Santa Catarina,Education,2
University of Wyoming,Education,2
Norwegian University of Science and Technology,Education,2
University of New Mexico,Education,2
Tohoku University,Education,2
St. Olaf College,Education,2
Vassar College,Education,2
University of Massachusetts Dartmouth,Education,2
TBC,Commercial,2
San Jose Unified School District,Education,2
Universiti Teknologi Malaysia,Education,2
Universidad Carlos III de Madrid,Education,2
Uppsala University,Education,2
Carleton College,Education,2
City College of San Francisco,Education,2
University of Arkansas for Medical Sciences,Education,2
Mathematica Inc.,Commercial,2
Universiteit van Amsterdam,Education,2
University of Technology Sydney,Education,2
Vienna University Computer Center,Education,2
Comision Nacional de Actividades Espaciales,Commercial,2
University of North Carolina at Greensboro,Education,2
Connecticut College,Education,2
Colorado School of Mines,Education,2
Chaffey CCD,Organization,2
The University of Melbourne,Education,2
University of Sydney,Education,2
Tokyo Institute of Technology,Education,2
Pontificia Universidad Javeriana,Education,2
Choate Rosemary Hall,Education,2
Budapest University of Technology and Economics,Education,2
The Computer Care Company Inc.,Commercial,2
Persona Communications,Commercial,2
Universitas Diponegoro,Education,2
Gottfried Wilhelm Leibniz Universitaet Hannover,Education,2
Coast Guard Academy,Education,2
The Chinese University of Hong Kong,Education,2
Universitaet Erfurt,Education,2
Enterprise,Commercial,2
Gauhati University (GU) Guwahati,Education,2
Universidad de Zaragoza,Education,2
Technische Hochschule Deggendorf,Education,2
Xarxa de Comunicacions de la UdL,Commercial,2
"Universita' degli Studi di Trieste",Education,2
KingCorp Inc,Commercial,2
Universitaet Rostock,Education,2
Alfred-Wegener-Institut Helmholtz-Zentrum Fuer Polar- und Meeresforschung,Education,2
Universite Catholique de Louvain,Education,2
"Universita' degli Studi di Napoli Federico II",Education,2
Tokyo Medical and Dental University,Education,2
Johns Hopkins University Applied Physics Laboratory,Education,2
Univerzitet Sv. Kiril i Metodij,Education,2
Christensen Associates,Commercial,2
Universidad de Colima,Education,2
Universidad Iberoamericana A.C.,Education,2
Indiana University of Pennsylvania,Education,2
Accademia Europea di Bolzano,Education,2
Haddam-Killingworth High School,Education,2
Manhattan College,Education,2
University of Lancaster,Education,2
Institut fuer Klimafolgenforschung e.V.,Commercial,2
Capital & Coast District Health Board,Organization,2
Internexa S.A. E.S.P,Commercial,2
Speednet,Commercial,2
Robert Bosch Gesellschaft mit Beschraenkter Haftung,Commercial,2
Smart Technology LLC,Commercial,2
Snow College,Education,2
Tangerine Limited,Commercial,2
The University of Manchester,Education,2
University of the Virgin Islands,Education,2
Gurgaon Consultancy,Commercial,2
Universidade Federal de Juiz de Fora,Commercial,2
Qatar University,Education,2
"Universita' degli Studi di Genova",Government,2
IAM,Commercial,2
IUCC - Israel InterUniversity Computation Center,Education,2
ENEL S.p.A,Commercial,2
Society for Industrial and Applied Mathematics,Organization,2
American Information Network,Commercial,2
Ceske Vysoke Uceni Technicke v Praze,Education,2
Huashu Media&Network Limited,Commercial,2
UAB Cherry Servers,Commercial,2
Conterra,Commercial,2
European Mobile Operator Oy,Commercial,2
Frankfurt International School,Education,2
Rannsokna- og haskolanet Islands hf.,Commercial,2
Williams College,Education,2
City of Hudson Ohio,Commercial,2
PCCW IMS Ltd,Commercial,2
Next Powered by Naec LLC,Commercial,2
Indian Institute of Engineering Science and Technology Shibpur,Education,2
University of Warwick,Education,2
Terra Nova Internet Operations Ltd.,Commercial,2
Fundacao Carlos Chagas Filho de Amparo a Pesquisa,Education,2
Zurich University of Applied Sciences,Education,2
Launtel NBN,Commercial,2
REV,Commercial,2
IIT Hyderabad,Education,2
Advanced Science and Technology Institute,Education,2
PT. Mega Artha Lintas Data,Commercial,2
Jungle Studio,Commercial,2
Fort Bend Independent School District,Education,2
Indian Institute of Technology (IIT) Mandi,Education,2
National Infrastructures for Research and Technology S.A.,Education,2
Rensselaer Hartford Graduate Center Inc.,Education,2
Vetenskapsradet / SUNET,Education,2
Channel Tek Enterprises (Private) Limited.,Commercial,2
Lodz University Of Technology,Education,2
California Department of Technology,Government,2
Rede Nacional de Ensino e Pesquisa,Education,2
Universitaet Greifswald,Education,2
The College of William and Mary,Education,2
Big Data Analytics Sdn Bhd,Commercial,2
Chitlange Logic System,Commercial,2
Delivery Hero SE,Commercial,2
Texas State University,Education,2
The University of Wollongong,Education,2
PT Urban Teknologi Nusantara,Commercial,2
Proline Services,Commercial,2
CY Cergy Paris Universite,Education,2
Griffith University,Education,2
National Oceanography Centre,Education,2
United States Food and Drug Administration,Government,2
Netify Project,Commercial,2
University System of Maryland,Education,2
Laurentian University of Sudbury,Education,2
The Mathworks Inc.,Commercial,2
Rutgers University,Education,2
Virginia Beach City Public Schools,Education,1
Colorado State University,Education,1
University of Pretoria,Education,1
Rheinische Friedrich-Wilhelms-Universitaet Bonn,Education,1
Universidade de Sao Paulo,Education,1
Illinois Institute of Technology,Education,1
University of Pittsburgh,Education,1
Columbia University,Education,1
University of Florida,Education,1
Temple University,Education,1
James Madison University,Education,1
University of Puget Sound,Education,1
"Saint John's University - College of Saint Benedict",Education,1
University of Southern Mississippi,Education,1
Mississippi State University,Education,1
Universidad Nacional de Cordoba,Education,1
Missouri University of Science and Technology,Education,1
Arizona State University,Education,1
State of Tennessee Department of Education,Education,1
Kent State University,Education,1
Northern Arizona University,Education,1
Northeastern University,Education,1
Institute for Defense Analyses,Organization,1
North Dakota State University - Computer Center,Education,1
Illinois State University,Education,1
London School of Economics and Political Science,Education,1
Pfizer Inc.,Commercial,1
Brigham Young University,Education,1
National Institutes of Health,Government,1
Ryerson University,Education,1
University of Missouri-Columbia,Education,1
University of New South Wales,Education,1
University of Victoria,Education,1
State of Minnesota,Government,1
The Bloomsbury Computing Consortium,Education,1
Cardiff University,Education,1
University of South Florida,Education,1
Universiteit Twente,Education,1
University of Georgia,Education,1
"Reseau d'Informations Scientifiques du Quebec",Organization,1
Universiteit van Tilburg,Education,1
University of Iowa,Education,1
Regeneron,Commercial,1
Trinity College Dublin,Education,1
Board of Regents of the University System of Georgia,Education,1
The Trustees of Columbia University in the City of New York,Education,1
Universidad Autonoma de Nuevo Leon,Education,1
American University,Education,1
Genesee ISD,Education,1
Dokuz Eylul University,Education,1
Florida International University,Education,1
Emory University,Education,1
University of North Carolina at Chapel Hill,Education,1
University of Nevada Reno,Education,1
University of Windsor,Education,1
Gettysburg College,Education,1
Louisiana State University,Education,1
Morehouse College,Education,1
University of Kwazulu-Natal,Education,1
NPL Management Ltd,Commercial,1
University of Newcastle upon Tyne,Education,1
IIT Kanpur Campus Network,Education,1
San Diego State University,Education,1
Edmonton Public Library,Library,1
Loyola University Chicago,Education,1
Universidad de Chile,Education,1
Binghamton University,Education,1
University of Oregon,Education,1
Vrije Universiteit Amsterdam,Education,1
Seton Hall University,Education,1
Woods Hole Oceanographic Institution,Education,1
University of Massachusetts,Education,1
Greenwich University,Education,1
National Aeronautics and Space Administration,Government,1
Creighton University,Education,1
University of Wisconsin - Milwaukee,Education,1
University of Tennessee,Education,1
University of Saskatchewan,Education,1
Eastern Washington University,Education,1
University of Texas at El Paso,Education,1
State of Arkansas,Government,1
Tulane University,Education,1
University de Los Andes,Education,1
University of Idaho,Education,1
Longwood Medical and Academic Area,Education,1
University of Alaska,Education,1
Universiti Malaysia Sarawak,Education,1
University of North Texas,Education,1
Colleges of the Fenway Inc.,Education,1
Milwaukee School of Engineering,Education,1
University of Maryland Baltimore County,Education,1
Universiteit Maastricht,Education,1
WV Department of Education,Education,1
Oakland Schools,Education,1
Butler University,Education,1
Gustavus Adolphus College,Education,1
National Science Foundation,Government,1
California Institute of Technology,Education,1
University of North Carolina at Charlotte,Education,1
Rocklin Unified School District,Education,1
Dickinson College,Education,1
Lakeshore Northeast Ohio Computer Association,Organization,1
University Health Network,Education,1
San Francisco Unified School District,Education,1
Bilkent University,Education,1
St. Lawrence University,Education,1
Universitaet Hamburg Campus Net,Education,1
Nigerian Research and Education Network Limited by Guarantee,Education,1
Bryn Mawr College,Education,1
Hanover College,Education,1
Southern Illinois University at Edwardsville,Education,1
Niagara University,Education,1
University of Derby,Education,1
Korea University,Education,1
Denver Public Schools,Education,1
Heriot-Watt University,Education,1
Istanbul University,Education,1
University of Richmond,Education,1
Grossmont Union High School District,Education,1
Rwanda Ministry of Education,Education,1
Arlink S.A.,Commercial,1
Anchorage School District,Education,1
Pern-Pakistan Education & Research Network is an,Library,1
Bowdoin College,Education,1
Leiden University,Education,1
University of Hull,Education,1
Universite du Quebec a Montreal,Education,1
University of York,Education,1
Advanced Micro Devices Inc.,Commercial,1
Idaho National Laboratory,Government,1
Libera Universita di Bolzano,Education,1
Eotvos Lorand University of Sciences,Education,1
Sungkyunkwan University,Education,1
Montana State University,Education,1
Doshisha University,Education,1
California State University San Bernardino,Education,1
Communications Design Acquisition Corporation,Commercial,1
Hillsdale College,Education,1
Florida Department of Health,Government,1
Brandeis University,Education,1
University of Southern Indiana,Education,1
Amrita Vishwa Vidyapeetham University,Education,1
"Saint Mary's College",Education,1
Universitaet Stuttgart,Education,1
Valparaiso University,Education,1
Brno University of Technology,Education,1
Stichting Duwo,Commercial,1
Los Alamos National Laboratory,Government,1
Universitaet Koblenz-Landau (Abt. Koblenz) Ghrko Koblenz,Education,1
City of Richmond,Government,1
University of Colorado Denver,Education,1
Ministry of Education Computer Center,Education,1
Farmingdale State College,Education,1
Maulana Azad National Institute of Technology.Mata Mandir.Bhopal.M.P,Education,1
Universitaet Kassel,Education,1
Virtual Campus Graz Network,Education,1
Hamilton College,Education,1
Studentski dom Stjepan Radic,Education,1
Elon University,Education,1
University of Tasmania,Education,1
Molloy College,Education,1
Juniata College,Education,1
"St Michael's College",Education,1
Calvin College,Education,1
Uppsala Student Network,Education,1
City University of Hong Kong,Education,1
Universiti Putra Malaysia Campus Network,Education,1
"Universita' degli Studi di Padova",Education,1
Clinton Macomb Public Library,Library,1
Fairfield University,Education,1
Georgian Research and Educational Networking Association Grena,Organization,1
Covenant Health,Commercial,1
Tennessee Technological University,Education,1
The Hong Kong Polytechnic University,Education,1
Wichita State University,Education,1
The Fred Hutchinson Cancer Research Center,Organization,1
Universidad Autonoma del Estado de Baja California,Education,1
Politecnico di Torino,Education,1
Verso Networks Inc.,Commercial,1
University of Essex,Education,1
High Speed Web/Genesis 2 Networks,Commercial,1
Thompson Rivers University,Education,1
Palo Alto Unified School District,Education,1
Westmont College,Education,1
Lancaster Lebanon Intermediate Unit,Organization,1
Ecole Polytechnique,Education,1
University of Zambia,Education,1
CIS,Commercial,1
Colorado College,Education,1
The University of Hong Kong,Education,1
Korean Education Network,Education,1
Lanka Education and Research Network,Education,1
NTU,Education,1
Chungbuk National University,Education,1
Pusan National University,Education,1
University of Indonesia,Education,1
Hong Kong University of Science and Technology,Education,1
Loyola Heights,Education,1
University of Evansville,Education,1
New Mexico Tech,Education,1
Columbia Sussex Corporation,Commercial,1
Universitas Sebelas Maret,Education,1
Kyoto University,Education,1
Konkuk University,Education,1
Netnam Corporation,Commercial,1
Clarkson University,Education,1
Naresuan University,Education,1
Hong Kong Baptist University,Education,1
Karunya University Coimbatore,Education,1
FedEx,Commercial,1
University of Bath,Education,1
Universitas Kristen Petra,Education,1
Tabriz University of Medical Sciences,Education,1
Ankhnet Informations Pvt. Ltd.,Commercial,1
Tata Institute of Fundamental Research,Organization,1
Szeged University Association,Education,1
Otto Von Guericke Universitaet,Education,1
"Commissariat a L'energie Atomique",Organization,1
University of Santo Tomas,Education,1
National University of Science and Technology,Education,1
"Universita' degli Studi di Perugia",Education,1
Technische Universitat Wien,Education,1
Universitaet Duisburg-Essen,Education,1
Dedan Kimathi University of Technology - Main Campus,Education,1
Pandit Deendayal Petroleum University Gandhinagar Gujarat,Education,1
Marmara University,Education,1
Universidad de Castilla - La Mancha,Education,1
Izmir Yuksek Teknoloji Enstitusu,Education,1
World Health Organization,Organization,1
Universidade da Coru~na,Education,1
Universitaet Osnabrueck; Rechenzentrum,Education,1
Goteborgs Universitet,Education,1
Aarhus Universitet,Commercial,1
51/A Rachna Midas Gokulpeth,Commercial,1
Universidad de Navarra,Education,1
Zonguldak Karaelmas University,Education,1
Universitas Tanjungpura,Education,1
Universidad de Oviedo,Education,1
Ecole Normale Superieure,Education,1
Wavenet Limited,Commercial,1
S 561 School Block Shakarpur Delhi,Education,1
Narsee Monjee Institute of Management Studies,Education,1
Celal Bayar Universitesi,Education,1
Universidad Catolica Santiago de Guayaquil,Education,1
Hogeschool Enschede,Commercial,1
St. Francis Xavier University,Education,1
Hochschule Luzern,Education,1
Vidyasagar University Midnapore West-Bengal,Education,1
Gulf Research & Development Company,Commercial,1
Hochschule fuer angewandte Wissenschaften,Commercial,1
Junta de Extremadura,Commercial,1
Greenspring Lekki,Commercial,1
Twitter Inc.,Commercial,1
FOP Kushnir Aleksandr Andreevich,Commercial,1
Orange County - Telecommunications Department,Government,1
Silica Networks Chile S.A.,Commercial,1
Weston College,Education,1
Cusat Cochin,Education,1
Beacon Central School District,Education,1
Florida Crystals Corporation,Commercial,1
Quinnipiac University,Education,1
Universidad Catolica de Valparaiso,Education,1
The New York Times Company,Commercial,1
Universidad Nacional de Lujan,Education,1
Great American Insurance Company,Commercial,1
University of Portland,Education,1
Universidad Nacional del Litoral,Education,1
Instituto Mexicano del Petroleo,Organization,1
The Province,Commercial,1
St. Thomas University,Education,1
St. Edwards University,Education,1
Cifrova Kabelna Korporacia EOOD,Commercial,1
Voyager Internet Ltd - Static Assignments,Commercial,1
Seminole State College of Florida,Education,1
Hangzhou Alibaba Advertising Co. Ltd.,Commercial,1
Northwestern Michigan College,Education,1
Six Continents Hotels Inc,Commercial,1
Aamra Networks Limited Internet Service Provider.,Commercial,1
Universitas Islam Negeri Sunan Kalijaga,Education,1
National University of Lesotho,Education,1
Triangle Services Ltd.,Commercial,1
IHS,Commercial,1
Izmir Katip Celebi Universitesi,Education,1
Baskent Universitesi,Education,1
National Institute of Hydrology Roorkee,Organization,1
Mansfield University of Pennsylvania,Education,1
Fundacao Getulio Vargas,Commercial,1
The Home Depot Inc.,Commercial,1
NT Brasil Tecnologia Ltda. ME,Commercial,1
Central Soil & Water Conservation Research Training Institute,Organization,1
Shenandoah University,Education,1
Roanoke College,Education,1
Universitaet Salzburg,Education,1
Eurosel LLC,Commercial,1
Samford University,Education,1
Japan Tobacco Inc.,Commercial,1
Republic of Macedonia State University GOCE DELCEV Stip,Education,1
Free Technologies Excom S.L.,Commercial,1
Oral Roberts University,Education,1
VSE Corporation,Commercial,1
Laboratorio Nacional de Computacao Cientifica,Commercial,1
City of Santa Fe,Government,1
Muhlenberg College,Education,1
Dallas Independent School District,Education,1
Hitit Universitesi,Education,1
Donbosco University Guwahati,Education,1
Tusas Aerospace Industries Inc,Commercial,1
Zhangzhou City Fujian Provincial Network of Cncgroup,Commercial,1
LTD Erline,Commercial,1
University of Dar es Salaam,Education,1
Centre National de la Recherche Scientifique,Organization,1
Methownet.com,Commercial,1
Davangere University,Education,1
Nazarbaevyniver,Education,1
Intraffic LLC,Commercial,1
Coop. Electrica Y de Servicios Mariano Moreno Ltda.,Commercial,1
Organizacion Hoteltur S.A.,Commercial,1
Onatel Networks,Commercial,1
bdHUB,Commercial,1
Paraisten Puhelin Oy,Commercial,1
Knoxville Utilities Board,Organization,1
Pontificia Universid Catolica do Rio Grande do Sul,Education,1
Greenhost BV,Commercial,1
PT Widya Intersat Nusantara,Commercial,1
Test,Commercial,1
VietNam National University Ha Noi,Education,1
Centro Brasileiro de Pesquisas Fisicas,Education,1
Dolnet Group Sp. z o.o.,Commercial,1
Hochschule Merseburg,Commercial,1
ELDATA prazska s.r.o.,Commercial,1
Centre de Ressources Informatiques,Commercial,1
Nelson Mandela Metropolitan University,Education,1
Universidad del Mar,Education,1
Seattle SD,Education,1
Halic Universitesi,Commercial,1
Meteo France,Commercial,1
OJSC Telecom-Service,Commercial,1
Universitas Terbuka,Education,1
Services,Commercial,1
Klarup Antenneforening,Commercial,1
Academedia Support AB,Commercial,1
Sanming MAN,Commercial,1
Center for Computing Sciences,Organization,1
Company Inc Neptune and,Commercial,1
IN.VA. S.p.A.,Commercial,1
Owensboro Municipal Utilities,Commercial,1
Indian Institute of Science Education and Research Pune,Organization,1
Indian Valley - Marin CCD,Education,1
University College Cork,Education,1
Heritage Schools,Organization,1
Renater,Commercial,1
ADIGE S.p.A.,Commercial,1
Faculdades Catolicas,Education,1
Kyambogo University,Education,1
S.I Group,Commercial,1
Universite de Montpellier,Education,1
Armstrong,Commercial,1
Technicka Univerzita v Liberci,Commercial,1
PowerServe Internet Allocation,Commercial,1
Amazon Corporate LLC,Commercial,1
Fusion Voice and Data Corp.,Commercial,1
NIIT Neemrana Rajasthan,Commercial,1
Hipernet Servico de Comunicacao Ltda ME,Commercial,1
Highnet,Commercial,1
Infectious Diseases Institute Makerere,Organization,1
Customer Networks,Commercial,1
Net Systems,Commercial,1
Bauhaus-Universitaet Weimar,Education,1
PT Netciti Persada,Commercial,1
Netskope,Commercial,1
ICT Roostaee in Golestan,Commercial,1
Simpson College,Education,1
"Universita' degli Studi di Udine",Education,1
University of Reading,Education,1
Leuphana Universitaet Lueneburg,Education,1
Bergen County Vocational Technical School District,Education,1
Indian Statistical Institute Kolkata,Education,1
Shivansh Infotech Pvt Ltd,Commercial,1
Family Video Movie Club Inc.,Commercial,1
"Universita' di Pisa",Education,1
University of Birmingham,Education,1
Sunwire Inc.,Commercial,1
INET,Commercial,1
Ateneo de Manila University,Education,1
Banca Monte Dei Paschi Di Siena S.p.A.,Commercial,1
Inyo Networks,Commercial,1
Sam Online,Commercial,1
Corpus Christi ISD,Commercial,1
Carl von Ossietzky Universitaet Oldenburg,Education,1
Regional Cancer Centre Thiruvananthapuram,Government,1
Karinthy Frigyes Gimnazium,Commercial,1
SD,Government,1
Cyber Internet Ltda ME,Commercial,1
Pishgaman Toseeh Ertebatat Company (Private Joint Stock),Commercial,1
Wahu Student Apartments,Education,1
Home Broadband Services LLP,Commercial,1
TOO IK-Broker,Commercial,1
Istanbul Teknik Universitesi,Education,1
Advanced Wireless Network Company Limited,Commercial,1
Kyungwon College,Organization,1
iConnectSA (Pty) Ltd,Commercial,1
Julio Cesar das Neves - ME,Commercial,1
Livermore Valley Unified School District,Education,1
"Queen's University at Kingston",Education,1
"Universita' degli Studi di Roma La Sapienza",Education,1
PT. Internet Madju Abad Millenindo,Commercial,1
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,1
"Universita' degli Studi di Roma Tor Vergata",Education,1
NewMountainView Satellite Corporation,Commercial,1
Etisalat Benin,Commercial,1
Van Veen Beheer B.V.,Commercial,1
Queensland University of Technology,Education,1
HZ Hosting Ltd,Commercial,1
E and U Technology Services LLP,Commercial,1
Ricany,Commercial,1
Cool Ideas Service Provider (Pty) Ltd,Commercial,1
SamsungSDS Inc.,Commercial,1
Golden Touch International,Commercial,1
Cato Networks Ltd,Commercial,1
Sagar Vision,Commercial,1
United Arab Emirates University,Education,1
Aakash Internet Services Private Limited,Commercial,1
James Cook University,Education,1
Nottingham Trent University,Education,1
To Public VPN,Commercial,1
One Net,Commercial,1
Moreno Yanoc Nemias Bernardo,Organization,1
Go Communications Network (Pty) Ltd,Commercial,1
BSC,Education,1
Suburban Broadband Ltd,Commercial,1
Kungliga Tekniska Hogskolan,Commercial,1
Marconi Solutions Srls,Commercial,1
Augusta University,Education,1
TV Cable del Guadiana S.A de C.V.,Commercial,1
Nitin Networks,Commercial,1
Universidad Catolica del Maule,Education,1
Cintia Auxiliadora de Alcantara Barbosa - ME,Commercial,1
Nueva Red Internet de Mexico S de RL de CV,Commercial,1
FiberSpark Inc.,Commercial,1
Edith Cowan University,Education,1
Max-Planck-Institut fuer Informatik,Education,1
The Education University of Hong Kong,Education,1
City University of London,Education,1
Guru Ghasidas University Bilaspur,Education,1
Pomona School District,Education,1
Menlo Security Inc.,Commercial,1
Kauno Technologijos Universitetas,Education,1
Comenius University in Bratislava,Education,1
Digital Tecnologia & Telecomunicacao Ltda,Commercial,1
Deutsche Glasfaser Wholesale GmbH,Commercial,1
Universite de Sciences et Technologies de Lille,Education,1
The University of Edinburgh,Education,1
Muni University,Education,1
Institute for Research in Fundamental Sciences,Education,1
Universitaet Bern,Education,1
Circle Network,Commercial,1
Samuels Inc-Buy Wise Auto Parts,Commercial,1
Sarasota County Schools,Education,1
Indian Institute of Information Technology and Management Gwalior,Education,1
Kurt Gunderson II,Commercial,1
Altan Redes S.A.P.I. de C. V.,Commercial,1
GlobalFoundries U.S. Inc.,Commercial,1
PT Sinergi Semesta Telematika,Commercial,1
Emeigh Investments LLC,Commercial,1
Best Buy Canada Ltd.,Commercial,1
MEASAT Broadcast Network Systems,Commercial,1
MFN,Commercial,1
Ghanaian Academic and Research Network,Education,1
Wildanet Ltd,Commercial,1
Newtrend,Commercial,1
Computer Center,Education,1
Indian Institute Of Technology Roorkee,Education,1
Universiti Kebangsaan Malaysia,Education,1
Universitas Sriwijaya,Education,1
UTHM. Universiti Tun Hussein Onn Malaysia,Education,1
Universiti Malaysia Sabah,Education,1
Yayasan Badan Pendidikan Kristen Penabur,Commercial,1
Universitas Negeri Semarang,Education,1
Shiv Nadar University,Education,1
Proline Datatech Services Pvt. Ltd.,Commercial,1
Universiti Sains Islam Malaysia Bandar Baru Nilai,Education,1
Waylink,Commercial,1
Gitam University,Education,1
Arrowswift Communication Pvt. Ltd,Commercial,1
Infiniti Television And Telecom Private Limited,Commercial,1
Assam Valley School,Education,1
The Trustees of the Sydney Grammar School,Education,1
PT Mitra Telemedia Manunggal,Commercial,1
Balaji Infra Ray Private Limited,Commercial,1
rixCloud Limited,Commercial,1
Ethekwini Municipality,Government,1
Guan Chen Henan Science and Technology Co. Ltd.,Commercial,1
Seattle University,Education,1
"St. Joseph's Healthcare Hamilton",Commercial,1
IB Project,Commercial,1
Nemerov Evgeniy Vladimirovish Pe,Commercial,1
DE Tuinen BV,Commercial,1
Fibertel Peru S.A.,Commercial,1
SIA Maklaut,Commercial,1
Jerry Dismukes,Commercial,1
Elisabeth Scharler,Commercial,1
Digiville Cyber,Commercial,1
Universiti Malaysia Terengganu,Education,1
Australian Catholic University Limited,Education,1
Federal Research Center for Information and Computational Technologies,Education,1
Universitas Gadjah Mada,Education,1
Cixi Sanbei Rongxin Hardware Factory,Commercial,1
IP Allocation 1 IIU,Education,1
Australian National University,Education,1
Bank of America National Association,Commercial,1
Indian Institute Of Technology Banaras Hindu University,Education,1
The University of Auckland,Education,1
Rub Inet,Education,1
Sri Bhagawan Mahaveer Jai,Commercial,1
National Institute of Science Education and Research Bhubaneswar,Education,1
Universitatea Alexandru Ioan Cuza Din Iasi,Education,1
Battelle Memorial Institute Pacific Northwest Division,Organization,1
Tier-1 Enterprise Datacenter in AMER-WEST,Commercial,1
Kayseri Edu,Education,1
P. J. Safarik University in Kosice,Education,1
Ionis Group - Ionis Schools of Technology and Management SAS,Education,1
Quicken Loans LLC,Commercial,1
Iowa State University of Science and Technology,Education,1
Apogee - Morehouse College,Education,1
TSU Addresses,Commercial,1
ICTP - Trieste,Education,1
WeWork Companies Inc.,Commercial,1
University of Arkansas Fayett,Education,1
IP Allocation 1 UAAR,Education,1
VUSD,Education,1
Granada Hills High School,Education,1
Wulfsoft,Commercial,1
Main Link,Commercial,1
Zhernoklov Valerii,Commercial,1
Miku Network Limited,Commercial,1
Weill Cornell Medical College,Education,1
MSG Entertainment Group LLC,Commercial,1
Stellar III LLC,Commercial,1
IP GW Iba Aindice,Commercial,1
Comilla University,Education,1
Bluescope Steel Limited,Commercial,1
Unicast Technology Ltd,Commercial,1
Ricerca Sul Sistema Energetico - RSE SpA,Education,1
Universidad EIA,Education,1
American Community School,Education,1
Thamizhaga Cable TV Communications Pvt Ltd,Education,1
American Water Works Company Inc.,Commercial,1
Rinku Soluciones S.A.S.,Commercial,1
Ayres Seal Beach,Commercial,1
Grandview Heights Schools,Organization,1
Studio Armonia S.r.l.,Commercial,1
LED PC Game,Commercial,1
2021052556698 Enterprise Client,Commercial,1
G-Mobile Co. Ltd,Commercial,1
Flink Technologies Ltd,Commercial,1
IKT Nordfjord,Commercial,1
AE2S,Commercial,1
Noor Al-Bedaya for General Trading and Agricultural Ltd.,Commercial,1
BAE Systems Inc.,Commercial,1
Square Net,Commercial,1
Homewood Suites St Louis Ark,Commercial,1
Bob Johnson Toyota,Commercial,1
Belarusian State University,Education,1
Xuzhou Xingqi8 Netb,Commercial,1
LEPL Digital Governance Agency,Government,1
ADS Cable TV Network,Commercial,1
DCConnect Global Limited,Commercial,1
Federal Institute of Technology Zurich,Education,1
NJOIT,Government,1
Technion,Education,1
Malawi University of Science and Technology,Education,1
Dublin City School District,Education,1
PT Retbizz Exabit Indonesia,Commercial,1
Natoli Engineering Co,Commercial,1
Southern Illinois University Carbondale,Education,1
University of Galway,Education,1
RACC,Education,1
Nuuday A/S,Commercial,1
"Institut d'Optique",Education,1
Institut Eurecom,Education,1
Gulf Cable Network (SMC-PVT.) Limited,Commercial,1
Cyber Data LLC,Commercial,1
Turing Group Limited,Commercial,1
Ezee Fiber,Commercial,1
California State Polytechnic University Humboldt,Education,1
Mitchell and Hugeback Architec,Commercial,1
Texas Instruments Incorporated,Commercial,1
Sajilo Net Pvt Ltd,Commercial,1
Aljoumhorya Znata,Commercial,1
The Board of Regents of the University of Nebraska,Education,1
Aerotech Solutions Network LLC,Commercial,1
Umikaze Ventures LLC,Commercial,1
Jin Qiao Systems LLC,Commercial,1
Radiant Solutions Network LLC,Commercial,1
Fajar Technology LLC,Commercial,1`,SQ=`Name,Type,Downloads
BytePlus Pte. Ltd.,Commercial,249
Claremont University Consortium,Education,175
The Reed Institute,Education,92
Amherst Telephone Co,Commercial,63
Christopher Newport University,Education,49
Connecticut State Colleges & Universities Connecticut State University System,Education,40
CCCS,Commercial,36
Texas A&M International University,Education,34
Oracle Corporation,Commercial,27
Octopus Web Solution Inc,Commercial,27
University of Toronto,Education,18
Purdue University,Education,18
Cartus Corporation,Commercial,18
University of Washington,Education,16
University of Virginia,Education,16
Tufts University,Education,16
University of Alabama,Education,16
Universidad Eafit,Education,16
ABB Information Systems Ltd.,Commercial,16
University of Tennessee at Chattanooga,Education,15
University of Massachusetts - Amherst,Education,14
Microsoft Limited,Commercial,13
Consortium GARR,Education,13
University of the Incarnate Word,Education,12
Air Force Systems Networking,Military,12
St. Louis University,Education,11
CENIC,Organization,11
Carleton College,Education,11
NIT Goa,Commercial,11
Gatik Business Solutions,Commercial,11
James Madison University,Education,10
Stanford University,Education,10
San Diego State University,Education,10
Shenandoah University,Education,10
Louisiana State University,Education,9
University of California Santa Cruz,Education,9
University of California Irvine,Education,9
Appalachian State University,Education,9
University of La Verne,Education,9
Kwame Nkrumah University of Science and Technology,Education,9
University of California San Diego,Education,8
Colorado School of Mines,Education,8
Universiti Sains Malaysia Penang Malaysia,Education,8
China Education and Research Network,Education,8
Coe College,Education,8
The University of Edinburgh,Education,8
UNE Epm Telecomunicaciones S.A.,Commercial,8
State University of New York at Stony Brook,Education,7
University of Cambridge,Education,7
Massachusetts Institute of Technology,Education,7
Brown University,Education,7
Princeton University,Education,7
Kansas State University,Education,7
Denison University,Education,7
"Saint Mary's College",Education,7
National University of Singapore,Education,7
Office of Info.Tech. Admin. for Educational Development,Commercial,7
University of Oxford,Education,7
"Institut National de Recherche Pour l'Agriculture l'Alimentation et l'Environnement (INRAE) EPA",Education,7
Swarthmore College,Education,6
University of Leicester,Education,6
Ohio State University,Education,6
Delft University of Technology Network,Education,6
Georgia Institute of Technology,Education,6
Universite Laval,Education,6
McGill University,Education,6
Harvard University,Education,6
University of Michigan,Education,6
Boston University,Education,6
Bryn Mawr College,Education,6
Worcester Polytechnic Institute,Education,6
The University of Melbourne,Education,6
University of Indonesia,Education,6
Forschungszentrum Juelich GmbH,Commercial,6
Letourneau University,Education,6
National University of Lesotho,Education,6
Wageningen Universiteit,Education,6
Aakash Internet Services Private Limited,Commercial,6
University of Warwick,Education,6
Birla Institute Of Technology And Science,Education,6
Arthur Andersen & Co. S.C.,Commercial,6
Equinox Technologies LLC,Commercial,6
New York University,Education,5
University of California Riverside,Education,5
University of New Hampshire,Education,5
University of British Columbia,Education,5
University of Durham,Education,5
Indian Institute of Technology Kharagpur India,Education,5
University of Calgary,Education,5
Smith College,Education,5
National Aeronautics and Space Administration,Government,5
University of Johannesburg,Education,5
Rochester Institute of Technology,Education,5
California Institute of Technology,Education,5
Ministry of Education Computer Center,Education,5
Technische Universitaet Chemnitz,Education,5
Union College,Education,5
"St Joseph's College",Education,5
Tiscali MVNO Service,Commercial,5
NSW Department of Education,Education,5
"Queen's University at Kingston",Education,5
Menlo Security Inc.,Commercial,5
Vera T Garfield,Commercial,5
"Universita' degli Studi di Torino",Education,5
Big Data Analytics Sdn Bhd,Commercial,5
TechCollege S/I,Commercial,5
Fajar Technology LLC,Commercial,5
Rutgers University,Education,5
University of Texas at Austin,Education,4
George Mason University,Education,4
Washington State Board for Community & Technical Colleges,Education,4
Duke University,Education,4
Danmarks Tekniske Universitet,Education,4
University of California Santa Barbara,Education,4
Universiteit Twente,Education,4
IIT Kanpur Campus Network,Education,4
The Catholic University of America,Education,4
University of Notre Dame,Education,4
Queens University of Charlotte,Education,4
Washington University,Education,4
Middlebury College,Education,4
University of Arizona,Education,4
Universiti Malaysia Sarawak,Education,4
North Carolina State University,Education,4
Colleges of the Fenway Inc.,Education,4
Norwegian University of Science and Technology,Education,4
Kyiv National Taras Shevchenko University,Education,4
Norsk Helsenett Sf,Commercial,4
Ball State University,Education,4
Texas A&M University at Galveston,Education,4
University of the South,Education,4
Universite Pierre et Marie Curie,Education,4
University of Wisconsin-Parkside,Education,4
Western Kentucky University,Education,4
KISTI,Government,4
University of Lancaster,Education,4
Washington & Jefferson College,Education,4
Indian Institute of Science Education and Research Pune,Organization,4
SC ITNS.NET SRL,Commercial,4
Cluster Logic Inc,Commercial,4
Legaco Networks B.V.,Commercial,4
IIT Madras,Education,4
Suke Network Limited,Organization,4
Myxa Corporation,Commercial,4
University System of Maryland,Education,4
Win-Win Hotel Investment DBA Best Western Los Ange,Commercial,4
Synergy Peak LLC,Commercial,4
Georgia Department of Education,Education,3
Universidade de Sao Paulo,Education,3
Illinois Institute of Technology,Education,3
University of Pennsylvania,Education,3
University of California Los Angeles,Education,3
Columbia University,Education,3
University of Florida,Education,3
Temple University,Education,3
Washington State University,Education,3
University of Minnesota,Education,3
Texas A&M University,Education,3
Cornell University,Education,3
Carnegie Mellon University,Education,3
University of Maryland,Education,3
Arizona State University,Education,3
Northeastern University,Education,3
University of Kentucky,Education,3
North Dakota State University - Computer Center,Education,3
London School of Economics and Political Science,Education,3
University of Illinois,Education,3
The George Washington University,Education,3
University of Georgia,Education,3
College of Wooster,Education,3
Villanova University,Education,3
University of Newcastle upon Tyne,Education,3
Northern Illinois University,Education,3
University of California at Berkeley,Education,3
Northwestern Memorial Hospital,Organization,3
University of Guelph,Education,3
Binghamton University,Education,3
Hoffmann Laroche Inc.,Commercial,3
Rice University,Education,3
Marquette University,Education,3
University of Lagos,Education,3
Oregon State University,Education,3
San Bernardino County Superintendent of Schools,Education,3
Universiteit Maastricht,Education,3
Fundacao Para a Ciencia e a Tecnologia I.P.,Government,3
The University of St. Andrews,Education,3
Colgate University,Education,3
Universiti Teknologi MARA,Education,3
Wellesley College,Education,3
Universiteit Utrecht,Education,3
University of the Pacific,Education,3
UAB Balticum TV,Education,3
Grand Canyon University,Education,3
Universidade Federal de Sergipe,Commercial,3
IBM,Commercial,3
Universiteit van Amsterdam,Education,3
City University of Hong Kong,Education,3
University of North Carolina at Greensboro,Education,3
University of Wisconsin - Green Bay,Education,3
Politecnico di Torino,Education,3
California State Polytechnic University - Pomona,Education,3
The Chinese University of Hong Kong,Education,3
Media Commerce Partners S.A,Commercial,3
Technische Universitat Wien,Education,3
Karlsruhe Institute of Technology,Education,3
Columbus Communication St. Vincent and the Grenadines Ltd.,Commercial,3
Technische Universitaet Bergakademie Freiberg,Education,3
PC Astra-Net,Commercial,3
University of North Carolina at Asheville,Education,3
Hangzhou Alibaba Advertising Co. Ltd.,Commercial,3
Republic of Macedonia State University GOCE DELCEV Stip,Education,3
Imperial College of Science Technology and Medicine,Education,3
Mary Washington College,Education,3
American Mathematical Society,Organization,3
Technion - Technolog Institute,Education,3
Poste Italiane S.p.A.,Commercial,3
Sky Italia srl,Commercial,3
Dez Solucoes em Telecomunicacoes Ltda,Commercial,3
Universitaet Fur Bodenkultur Wien,Education,3
Research Organization of Information and Systems National Institute of Informatics,Education,3
University of Birmingham,Education,3
Universitaet Basel,Education,3
Teleradiocompany Studio TV-9 Beregsasom Ltd.,Commercial,3
Funpar - Fundacao da UFPR Para O DCTC,Education,3
The University of Strathclyde,Education,3
GVA Gabon SAS,Commercial,3
Priston Net Telecom,Commercial,3
OOO Suntel,Commercial,3
Synermed,Commercial,3
Indraprastha Institute of Information Technology Delhi,Education,3
National Infrastructures for Research and Technology S.A.,Education,3
Australian Catholic University Limited,Education,3
National Research University Higher School of Economics,Education,3
Iain Syekhnurjati,Education,3
Millersville University of Pennsylvania,Education,3
Goti Broadband,Commercial,3
Zhernoklov Valerii,Commercial,3
Ricerca Sul Sistema Energetico - RSE SpA,Education,3
Viaflex,Commercial,3
Kramer Ceilley and Associates,Commercial,3
I.N.R.I.A.,Education,3
California State Polytechnic University Humboldt,Education,3
Radiant Solutions Network LLC,Commercial,3
Centerca Ncer & Urlg,Commercial,3
Headquarters USAISC,Military,2
Swansea University,Education,2
University of Utah,Education,2
University of Connecticut,Education,2
Technische Universiteit Delft,Education,2
Shared Services Canada,Government,2
Florida State University,Education,2
Department of Education,Government,2
Virginia Polytechnic Institute and State Univ.,Education,2
University of Missouri - DBA the Missouri Research and Education Network,Education,2
University of Chicago,Education,2
Illinois State University,Education,2
Auburn University,Education,2
University of Missouri-Columbia,Education,2
University of Victoria,Education,2
Cardiff University,Education,2
University of Stellenbosch,Education,2
Case Western Reserve University,Education,2
University of Texas at Dallas,Education,2
Texas Tech University,Education,2
Virginia Commonwealth University,Education,2
Trinity College Dublin,Education,2
Grand Valley State University,Education,2
University of North Carolina at Chapel Hill,Education,2
University of Colorado,Education,2
Universidad Nacional de Colombia,Education,2
Universidade Estadual de Campinas,Education,2
USDA,Government,2
Weber State University,Education,2
University of Wisconsin - Milwaukee,Education,2
State of Arkansas,Government,2
University of Louisiana at Lafayette,Education,2
University of Alberta,Education,2
University of St. Thomas,Education,2
Miami University,Education,2
Wofford College,Education,2
Phillips Academy,Education,2
Mount Holyoke College,Education,2
Wilfrid Laurier University,Education,2
California State University Long Beach,Education,2
Bucknell University,Education,2
University of Cyprus,Education,2
Oklahoma State University,Education,2
State of North Dakota Itd,Government,2
The College of New Jersey,Education,2
Tohoku University,Education,2
Gonzaga University,Education,2
Linkoping University,Education,2
New Jersey Institute of Technology,Education,2
University of Massachusetts Dartmouth,Education,2
University of New Orleans,Education,2
Milwaukee Public Schools,Education,2
TBC,Commercial,2
Los Angeles Unified School District,Education,2
Universiti Teknologi Malaysia,Education,2
University of Canterbury,Education,2
TOBB Ekonomi ve Teknoloji Universitesi,Education,2
Macalester College,Education,2
McMaster University,Education,2
Indian Institute of Technology Kanpur,Education,2
Pontificia Universidad Catolica del Peru,Education,2
Santa Clara University,Education,2
Reseau Optique du Campus de la Doua,Education,2
Albert-Ludwigs-Universitaet Freiburg,Education,2
University of Exeter,Education,2
YouTube LLC,Commercial,2
University of Zambia,Education,2
Kyung Hee University,Education,2
Pontificia Universidad Javeriana,Education,2
Universitas Airlangga,Education,2
Universitas Diponegoro,Education,2
Colby College,Education,2
Gauhati University (GU) Guwahati,Education,2
Izmir Yuksek Teknoloji Enstitusu,Education,2
Consejo Superior de Investigaciones,Organization,2
ENSMM,Commercial,2
"Universita' degli Studi di Napoli Federico II",Education,2
Central University of Karnataka,Education,2
Universitaet Heidelberg,Education,2
Universitat Politecnica de Valencia,Education,2
Presidency University Kolkata,Education,2
Shippensburg University,Education,2
Indira Gandhi National Open University (Ignou) New Delhi,Education,2
National Institute of Technology Raipur,Organization,2
Barbosa & Costa Ltda,Commercial,2
Solihull Metropolitan Borough Council,Government,2
Whitworth University,Education,2
Robert Bosch Gesellschaft mit Beschraenkter Haftung,Commercial,2
IBL Banda Larga Internet Informatica Ltda,Commercial,2
Gazon Communications India Limited,Commercial,2
Colorado Mesa University,Education,2
Corporativa Telecomunicacoes Eireli ME,Commercial,2
Hazlett Lewis Bieter,Commercial,2
Netjacarei Telecon Ltda,Commercial,2
Scnet Equipamentos de Informatica Ltda,Commercial,2
Universidad Popular Autonoma del Estado de Puebla,Education,2
The University of Manchester,Education,2
Fonte Informatica Ltda,Commercial,2
Nelson Mandela Metropolitan University,Education,2
North West University,Education,2
Companhia de Informatica de Jundiai - Cijun,Government,2
Speednet Telecomunicacoes Ltda ME,Commercial,2
Panasonic Avionics Corporation,Commercial,2
F.J.Fantini Amparo ME,Commercial,2
Masarykova univerzita - Ustav vypocetni techniky,Education,2
Franca e Franca Com e Serv Ltda. ME,Commercial,2
IIT Patna Bhikhana Pahari Near Rimjhim Hotel Patna,Government,2
Sercomtel S/A Telecomunicacoes,Commercial,2
Pombonet Telecomunicacoes e Informatica,Commercial,2
Netwise Informatica Ltda,Commercial,2
Solucao Network Provedor Ltda,Commercial,2
Lyse Tele AS,Commercial,2
Aljeel Aljadeed for Technology,Commercial,2
Andrade & Landim Telecomunicacoes Ltda,Commercial,2
Linejet Servios de Telecomunicaes Ltd,Commercial,2
Menlo College,Education,2
Kabale University,Education,2
Friedrich-Alexander-Universitaet Erlangen-Nuernberg,Education,2
Information System Authority,Commercial,2
Awaser Oman LLC,Commercial,2
Cybernetrs Ltda - ME,Commercial,2
Ufinet Colombia S. A.,Commercial,2
Bangladesh Research and Education Network,Education,2
Government Communications Network,Government,2
Eberhard-Karls-Universitaet Tuebingen,Education,2
Universidad del Pais Vasco - Euskal Herriko Unibertsitatea,Education,2
Ufinet Costa Rica S. A.,Commercial,2
Queensland University of Technology,Education,2
Digicom Shpk,Commercial,2
Innonet ICT-Services GmbH,Commercial,2
Universidad Industrial de Santander - UIS,Education,2
Redebr Telecom,Commercial,2
RBT Internet,Commercial,2
Communaute Universite Grenoble Alpes,Education,2
A2 Telecom Eireli - ME,Commercial,2
Ateky Internet Eireli ME,Commercial,2
Deutsche Glasfaser Wholesale GmbH,Commercial,2
Galichina Telekommunication Ltd,Commercial,2
Indian Institute of Engineering Science and Technology Shibpur,Education,2
Universitaet Bern,Education,2
Terra Nova Internet Operations Ltd.,Commercial,2
FOP Loginov Andrey Vyacheslavovich,Commercial,2
GCI Network Solutions Limited,Commercial,2
Titam Net Telecom,Commercial,2
Prime Networks,Commercial,2
Obafemi Awolowo University IFE,Education,2
Institut Teknologi Sepuluh Nopember Surabaya,Education,2
Airconnet Internet Services Pvt Ltd,Commercial,2
Indian Institute of Technology (IIT) Mandi,Education,2
Universitas Mulawarman,Education,2
Tampere University Foundation,Education,2
Instituto Tecnologico y de Estudios Superiores de Monterrey,Education,2
Unique Communication Service,Commercial,2
Paralelo 46 TV SA,Commercial,2
Plug Provedor Internet Ltda,Education,2
Maria Neusa Pereira de Sousa E Cia Ltda ME,Commercial,2
Pontocom Net,Commercial,2
Owners Choice Funding,Commercial,2
Hytron Network Services Limited,Commercial,2
ADS Cable TV Network,Commercial,2
The University of Wollongong,Education,2
University of Alabama in Huntsville,Education,2
Thapar Institute of Engineering and Technology,Education,2
Town of Weston - High School 444 Wellesley St,Education,2
Render,Commercial,2
Savanna Fibre Limited,Commercial,2
Iit Argul Jatni Khorda,Education,2
The Board of Regents of the University of Nebraska,Education,2
SIAM,Organization,2
HighendNetwork LLC,Commercial,2
Internet Corporate & Solar Ltda,Commercial,2
Aerotech Solutions Network LLC,Commercial,2
Tianji Innovations LLC,Commercial,2
Quantum Edge Enterprises LLC,Commercial,2
Harukaze Technology LLC,Commercial,2
MetricFly LLC,Commercial,2
Jin Qiao Systems LLC,Commercial,2
Quantumwave Solutions International LLC,Commercial,2
Skyway Freight Systems Inc.,Commercial,2
GGR Institute,Education,2
CMC Telecom Ltda,Commercial,2
Pueblo School D-60,Education,2
61117723 Enterprise Client,Commercial,2
Birla Institute of Technology And Science,Education,2
One Link (HK) Technology Co. Limited,Commercial,2
Indiana University,Education,1
State of Delaware,Government,1
National Institute of Technology Trichy,Education,1
Nevada System of Higher Education,Education,1
University of Maine System,Education,1
Universidad Nacional Autonoma de Mexico,Education,1
Georgia State University,Education,1
Western Washington University,Education,1
Colorado State University,Education,1
University of California Merced,Education,1
University of Pittsburgh,Education,1
Universidade Federal do Rio de Janeiro,Education,1
Intel Corporation,Commercial,1
University of Wisconsin Madison,Education,1
Centro Nacional de Pesquisa em Energia e Materiais,Commercial,1
Montgomery County Public Schools,Education,1
Northwestern University,Education,1
University of California Davis,Education,1
Boston College,Education,1
Mississippi State University,Education,1
Technische Universitaet Dresden,Education,1
U.S. Environmental Protection Agency,Government,1
Missouri University of Science and Technology,Education,1
University of Kansas,Education,1
"St Mary's University",Education,1
Northern Arizona University,Education,1
JPMorgan Chase & Co.,Commercial,1
South Dakota School of Mines & Technology,Education,1
California State University East Bay,Education,1
Brigham Young University,Education,1
Katy Independent School District,Education,1
University College Dublin,Education,1
Kennesaw State University,Education,1
The School District of Palm Beach County,Education,1
University of Houston,Education,1
University of New South Wales,Education,1
University of the Witwatersrand,Education,1
The Bloomsbury Computing Consortium,Education,1
California Polytechnic State University,Education,1
Universidad Nacional de La Plata,Education,1
California State University Sacramento,Education,1
Ludwig-Maximilians-Universitaet Muenchen,Education,1
The University of Memphis,Education,1
University of Iowa,Education,1
California State University Northridge,Education,1
University of Southern California,Education,1
Universidad Autonoma de Nuevo Leon,Education,1
Florida International University,Education,1
Oberlin College,Education,1
State of South Carolina,Government,1
Gettysburg College,Education,1
Leidos Inc.,Commercial,1
Wright State University,Education,1
Michigan State University,Education,1
TXTV d.o.o. Tuzla,Commercial,1
University of Cape Town,Education,1
Adelphi University,Education,1
University of Salford,Education,1
State of Maryland,Government,1
National Law School of India University,Education,1
Liverpool John Moores University,Education,1
Government of South Africa,Government,1
University of Oregon,Education,1
The Pennsylvania State University,Education,1
Johns Hopkins University,Education,1
Wilkes University,Education,1
Universidade Federal de Minas Gerais,Education,1
York University,Education,1
Eastern Washington University,Education,1
Station Net Provedor de Internet,Commercial,1
Universite du Quebec a Trois-Rivieres,Education,1
IP Adrese ZA ADSL Korisnike,Commercial,1
Utah Education Network,Education,1
Strathmore University,Education,1
University of Idaho,Education,1
Mornington Communications Ltd,Commercial,1
Longwood Medical and Academic Area,Education,1
Technische Universitaet Dortmund,Education,1
Eastern Michigan University,Education,1
University of Alaska,Education,1
Dufferin-Peel Catholic District School Board,Education,1
City of Philadelphia,Government,1
University of North Texas,Education,1
IVYTech Community College of Indiana,Education,1
WV Department of Education,Education,1
Ithaca College,Education,1
Middle Michigan Network for Educational Telecommunications,Education,1
Research Network University of Ghent,Education,1
Washington & Lee University,Education,1
Lawrence Livermore National Laboratory,Organization,1
Dickinson College,Education,1
University of Oklahoma,Education,1
University of Surrey,Education,1
San Jose State University,Education,1
Kenyon College,Education,1
Kurukshetra University,Education,1
University of Tokyo,Education,1
Sheffield Hallam University,Education,1
Polar Communications,Commercial,1
Nigerian Research and Education Network Limited by Guarantee,Education,1
Southern Illinois University at Edwardsville,Education,1
Niagara University,Education,1
Korea University,Education,1
Istanbul University,Education,1
University of Sioux Falls,Education,1
Cranfield University,Education,1
University of New Mexico,Education,1
St. Olaf College,Education,1
Arlink S.A.,Commercial,1
Baruch College,Education,1
Bergen University Norway,Education,1
Leiden University,Education,1
State of New Mexico,Government,1
Universidad San Francisco de Quito,Education,1
Al Zaytona Company for Communication Ltd.,Commercial,1
Amherst College,Education,1
Universidad Carlos III de Madrid,Education,1
Sungkyunkwan University,Education,1
Skidmore College,Education,1
London Grid for Learning Trust,Education,1
Splius Uab,Commercial,1
Leander Independent School District,Education,1
Berry College,Education,1
National Oceanic and Atmospheric Administration,Government,1
University of Central Lancashire,Education,1
Middle East Technical University,Education,1
Seton Medical Center,Commercial,1
University of Alabama at Birmingham - University Computer Center,Education,1
UP Diliman Network,Education,1
University of Massachusetts Medical School,Education,1
Universite du Quebec,Education,1
Thammasat University,Education,1
Stichting Duwo,Commercial,1
Point Loma Nazarene University,Education,1
Universidad de Sonora,Education,1
Los Alamos National Laboratory,Government,1
University of Denver,Education,1
Freie Universitaet Berlin,Education,1
Deutsches Zentrum fuer Luft- und Raumfahrt e.V.,Government,1
SVVSD,Organization,1
The Procter and Gamble Company,Commercial,1
Farmingdale State College,Education,1
Loughborough University,Education,1
Maulana Azad National Institute of Technology.Mata Mandir.Bhopal.M.P,Education,1
University of Tromso,Education,1
Ecole Polytechnique de Montreal,Education,1
Hamilton College,Education,1
Virginia Community College System,Education,1
University of Tasmania,Education,1
Indian Institute of Science Bangalore,Education,1
Segic Usach Ltda,Commercial,1
H. Lee Moffitt Cancer Center & Research Institute Inc.,Organization,1
Vienna University Computer Center,Education,1
Union Broadband Network,Commercial,1
New Iberia Parish Schools,Education,1
Universiti Putra Malaysia Campus Network,Education,1
Indian Institute of Science Education and Research,Education,1
Instituto Politecnico Nacional,Organization,1
Fermi National Accelerator Laboratory,Government,1
The Hong Kong Polytechnic University,Education,1
West Virginia Wesleyan College,Education,1
University of Sydney,Education,1
Canisius College,Education,1
Old Dominion University,Education,1
SG Americas Operational Services Inc.,Commercial,1
Fujitsu Services Ltd.,Commercial,1
Bechtel Corporation,Commercial,1
Tampere University of Technology,Education,1
Westmont College,Education,1
Monash University,Education,1
Azusa Pacific University,Education,1
John Carroll university,Education,1
Universidad Complutense de Madrid,Education,1
Ireland On-Line Broadband Customers,Commercial,1
University of Adelaide,Education,1
University of Bristol,Education,1
The University of Hong Kong,Education,1
Cronomagic Canada Inc.,Commercial,1
Korean Education Network,Education,1
Lanka Education and Research Network,Education,1
Universiti Tenaga Nasional,Education,1
Kyungpook National University,Education,1
Universitas Brawijaya,Education,1
Jogja Medianet,Commercial,1
The Computer Care Company Inc.,Commercial,1
CWCAY,Commercial,1
New Mexico Tech,Education,1
Institut Teknologi Bandung,Education,1
Vocational Training Council,Education,1
Universitaet Wuerzburg,Education,1
Kwansei Gakuin University,Education,1
Riken,Organization,1
Universite de Moncton,Education,1
Institute of Information Technology Design and Manufacturing Jabalpur,Organization,1
Coast Guard Academy,Education,1
Dongguk University,Education,1
Akademska mreza Republike Srbije - AMRES,Education,1
Champaign Metro,Commercial,1
National Academy of Sciences of Belarus,Commercial,1
Ankhnet Informations Pvt. Ltd.,Commercial,1
Shivaji University Kolhapur,Education,1
CyrusOne LLC,Commercial,1
Szeged University Association,Education,1
Meijo University,Education,1
Turk-Alman Universitesi,Commercial,1
Taisei Corporation,Commercial,1
Universidad de Alicante,Education,1
Technische Hochschule Deggendorf,Education,1
SRM Institute of Science and Technology,Organization,1
Ankara University,Education,1
Universidad de Alcala de Henares,Education,1
Universidad de Valladolid,Education,1
Tuberculosis Research Centre Chennai,Commercial,1
Bulgarian Academy of Sciences,Commercial,1
Universitat de Barcelona,Education,1
National Technical University of Athens,Education,1
KingCorp Inc,Commercial,1
Kalinga Institute of Industrial Technology,Education,1
Univerza v Ljubljani,Education,1
Universiteit Antwerpen,Education,1
Universite Catholique de Louvain,Education,1
Sutd SG,Education,1
Scherrernet Informatica Ltda ME,Commercial,1
Indian Institute of Informatiuon Technology Design & Manufacturing,Organization,1
University of Zilina,Education,1
Technical University of Crete,Education,1
City of York Council,Government,1
Universite de Poitiers,Education,1
Institut Rudjer Boskovic,Commercial,1
St. Francis Xavier University,Education,1
E&L Producoes de Software Ltda,Commercial,1
Las Vegas Valley Water District,Commercial,1
Mercuria Energy Trading SA,Commercial,1
Berks County Intermediate Unit,Organization,1
Tubitak Mam,Government,1
Technical University of Gdansk Academic Computer Center Task,Education,1
University of Prince Edward Island,Education,1
Danbury Public Schools,Education,1
Regions Financial Corporation,Commercial,1
Limited Company Svyazservice,Commercial,1
Fort Hays State University,Education,1
Hope College,Education,1
Bharathiyar Univesity,Education,1
Arkansas Research and Education Optical Network,Education,1
Howard County Maryland,Commercial,1
Hochschule Darmstadt,Commercial,1
Oxford City Schools,Education,1
Expedia Inc.,Commercial,1
University of Portland,Education,1
Cukurova University,Education,1
Indiana University of Pennsylvania,Education,1
Harford Community College,Education,1
Aalto University Student Union,Education,1
"Children's Hospital Colorado",Organization,1
Pawel Kowalski BGCOM,Commercial,1
One Ring Networks Inc.,Commercial,1
Gavle Energi AB,Commercial,1
Viva Telecom,Commercial,1
Center of Information Technologies Kharkiv Online Subsidiary,Commercial,1
Cung cap dich vu Internet khach hang quan Go Vap,Commercial,1
Divine Word Univesity,Education,1
Northwestern Michigan College,Education,1
ITI (Gas Rahat Building) Campus,Commercial,1
Dibrugarh University Dibrugarh,Education,1
Asian Institute of Management,Education,1
Nevsehir Universitesi,Education,1
Yeni Yuzyil Universitesi,Commercial,1
Birsa Agricultural University Kanke Ranchi Jharkhand,Education,1
Gayrettepe Interface IP,Commercial,1
Private Joint-Stock Company Farlep-Invest,Commercial,1
Provedor de Internet de Anapu Ltda - ME,Commercial,1
Haiti Networking Group S.A.,Commercial,1
Altibox Danmark AS,Commercial,1
Mass Response Service GmbH,Commercial,1
Tres Pontas Internet Ltda,Commercial,1
National Geophysical Research Institute Hydrabad,Organization,1
ENU,Commercial,1
The Home Depot Inc.,Commercial,1
Xmax Telecom Ltda.,Commercial,1
Geodim Ltd.,Commercial,1
Rawnet Informatica Ltda,Commercial,1
NT Brasil Tecnologia Ltda. ME,Commercial,1
Terabyte Servicos de Telecom B Larga EPP Ltda,Commercial,1
Santosha LTD,Commercial,1
Wisp Iconecta Servicos de Rede Ltda,Commercial,1
Sogetel Inc,Commercial,1
Qlogic Corporation,Commercial,1
Foothill-DeAnza Community College District,Education,1
Level 12 Menara Sunway Jalan Lagoon Timur,Education,1
Fakultet Elektrotehnike Racunarstva I Brodogradnje,Commercial,1
Sansara Telecom,Commercial,1
Rybnet Sp. z o.o. Sp. k.,Commercial,1
UUS Programm,Commercial,1
Institut fuer Klimafolgenforschung e.V.,Commercial,1
Iperactive SA,Commercial,1
Laboratorio Nacional de Computacao Cientifica,Commercial,1
Double F & Company Ltd,Commercial,1
Delaware Division of Libraries State of Delaware,Commercial,1
Muhlenberg College,Education,1
TV Cable Litoral C.A.,Commercial,1
Internexa S.A. E.S.P,Commercial,1
Afinet Solucoes em Tecnologia da Informacao Ltda,Commercial,1
Firstdigital Communications LLC,Commercial,1
Intercomtel Limited Company,Commercial,1
Institute of Mathematics of the Polish Academy of Sciences Warsaw,Organization,1
Erzurum Teknik Universitesi,Education,1
Unite Private Networks LLC,Commercial,1
Friburgo Online Ltda ME,Commercial,1
Turknet WAN,Commercial,1
RWTH Aachen University,Education,1
PT. Cemerlang Multimedia,Commercial,1
Star Telecom S/A,Commercial,1
Air Link Communications,Commercial,1
Medisch Spectrum Twente,Commercial,1
University of Nairobi,Education,1
University of Dar es Salaam,Education,1
Iskon Internet d.d.,Commercial,1
Nazarbaevyniver,Education,1
GGT Provedor Internet Ltda,Commercial,1
Ulsan Jung-Ang Broadcasting Network,Commercial,1
Mmer Provedor de Internet Ltda - ME,Commercial,1
Speedycom,Commercial,1
Internexa Peru S.A,Commercial,1
Coop. Electrica Y de Servicios Mariano Moreno Ltda.,Commercial,1
Connect Network,Commercial,1
Conect Telecomunicacoes Comunicacoes e Multimidia,Commercial,1
UPC Romania,Commercial,1
PT. Hipernet Indodata,Commercial,1
Salesian Polytechnic,Education,1
Knoxville Utilities Board,Organization,1
MARTEL Marta Bienia,Commercial,1
Broseghini Ltda EPP,Commercial,1
Interconexion Electrica S.A.,Commercial,1
Centro Educacional Nossa Senhora Auxiliadora,Commercial,1
P.P.Shirshov Institute of Oceanology RAS,Organization,1
Conquest Telecomunicacoes Ltda,Commercial,1
State Institution Arctic and Antarctic Research Institute,Organization,1
Pontificia Universidad Catolica de Chile,Education,1
Advanx Informatica Ltda,Commercial,1
WGO Telecomunicacoes Ltda,Commercial,1
Cable Norte TV SA,Commercial,1
Tangerine Limited,Commercial,1
Optix Media LLC,Commercial,1
Universidad Tecnologica de Panama,Commercial,1
E. D. Servicos de Comunicacoes Ltda,Commercial,1
Nova Portonet Telecomunicacoes Ltda ME,Commercial,1
Melo Telecomunicacoes Ltda,Commercial,1
College of the Mainland,Education,1
The Santa Fe Institute,Education,1
Guifami Informatica Ltda.,Commercial,1
Novanet Telecomunicacoes Ltda,Commercial,1
Via Link Telecomunicacoes,Commercial,1
Bia Padua Internet e S.C.M. Ltda,Commercial,1
Netwave Telecomunicacoes Ltda.,Commercial,1
Ezequiel Dos Santos Alves - Internet,Commercial,1
Gigasat Servicos de Processamentos de Dados Ltda,Commercial,1
PGF Telecomunicacoes Ltda,Commercial,1
Allyson Diniz Melo - ME,Commercial,1
Universitatea din Bucuresti,Commercial,1
Kibris,Commercial,1
"St Hilda's College",Education,1
Vcnet Provedora de Internet Ltda.,Commercial,1
Closeness S.L.,Commercial,1
Syiah Kuala University,Education,1
Sol Telecomunicaciones S.A.,Commercial,1
Next Level Internet Inc.,Commercial,1
RZ Net Ltda.,Commercial,1
Collective Telephone Company Veco Ltd.,Commercial,1
SBS-Net Telecomunicacoes Ltda ME,Commercial,1
Madacom SRL,Commercial,1
Unetvale Servicos e Equipamentos Ltda,Commercial,1
Infor DF Tel e Informatica Ltda,Commercial,1
Zenix Telecomunicaciones S.A.,Education,1
Acesso Telecomunicacoes Ltda,Commercial,1
Inexa Tecnologia Ltda.,Commercial,1
Netway Provedor de Internet Ltda,Commercial,1
Colares Provedor e Servicos de Internet Ltda - ME,Commercial,1
Join stock Grodno Regional Techno Commercial Centre GARANT,Commercial,1
SPD Chernega Aleksandr Anatolevich,Commercial,1
Vex Telecom Servicos de Telecomunicacao Ltda,Commercial,1
Genesysnet Provedor de Internet Ltda ME,Commercial,1
FOP Martyinchuk Aleksandr Vasilevich,Commercial,1
Super Nova Telecom Ltda,Commercial,1
Slovanet a.s.,Commercial,1
European Commission,Commercial,1
SW Telecomunicacoes e Informatica Itu Ltda. - ME,Commercial,1
Rosicleide Lomes Lima,Commercial,1
Rijksuniversiteit Groningen,Education,1
Tecsoftnet Solucoes em Informatica Ltda - ME,Commercial,1
W de C Canto Junior,Commercial,1
Piotr Piwowar,Commercial,1
Sannikov Kirill Vladimirovich,Commercial,1
Rio Grande Tecnologia e Comunic Multimidia Ltda,Commercial,1
Infolic Comercial de Informatica Ltda.,Commercial,1
University College Cork,Education,1
NEC Networks and System Integration Corporation,Commercial,1
The Stack,Commercial,1
Adenor Luiz Gnoatto ME,Commercial,1
Niqturbo Pimentel e Moreira Ltda,Commercial,1
SWM Services GmbH,Commercial,1
Siqueiralink Internet Banda Larga,Commercial,1
Invistanet Provedor de Acesso Ltda ME,Commercial,1
Denis Alves Gontijo - ME,Commercial,1
Catalao Bandnet Servicos Multimidia Ltda - ME,Commercial,1
Francisco Jose Rodrigues Teixeira - ME,Commercial,1
ISI Line srl,Commercial,1
Faculdades Catolicas,Education,1
WiCAM Corporation Ltd,Commercial,1
Strong Technologies LLC,Commercial,1
Mediacom Ltd.,Commercial,1
Raymond Managment Company,Commercial,1
Hilltop Broadband,Commercial,1
Plage des Clients Widecom SME Tana,Commercial,1
AWC Inc,Commercial,1
Universidade Federal do Rio Grande - Furg,Education,1
Seminaire Saint-Joseph de Trois-Rivieres,Education,1
Armstrong,Commercial,1
Pinheiro Net,Commercial,1
Marubeni OKI Network Solutions Inc.,Commercial,1
Public Net at CMTS04-E,Commercial,1
IAM,Commercial,1
Chapnet Servicos de Comunicacao Ltda,Commercial,1
G2 Xaxim Telecomunicacoes Ltda,Commercial,1
Link Sete Servicos de Internet e Redes Ltda,Commercial,1
Netgool Telecomunicacoes,Commercial,1
Sil Miro Com SRL,Commercial,1
Ciabrasnet - Central Brasileira de Internet Ltda,Commercial,1
BLUSKY soc. coop.,Commercial,1
Ikon Science Americas Inc,Commercial,1
K.H.D. Silvestri e Cia Ltda,Commercial,1
ENEL S.p.A,Commercial,1
Hipernet Servico de Comunicacao Ltda ME,Commercial,1
Static Allocation for Corp Client,Commercial,1
LLC Telekonika,Commercial,1
Meridian Builders Inc,Commercial,1
Vocus,Commercial,1
Ibsol Telecom Ltda,Commercial,1
Datanet Provedor de Internet Ltda,Commercial,1
Talklink Informatica Eireli Me.,Commercial,1
Tecwave Telecom Ltda.,Commercial,1
Unidasnet Comunicacoes Ltda,Commercial,1
Cyber Info Provedor de Acesso Ltda ME,Commercial,1
Delta Broadband Telecom Provedores de Internet Ltd,Commercial,1
G3 Telecom,Commercial,1
Interfibras Telecomunicacoes Ltda,Commercial,1
Cinte Telecom Comercio e Servicos Ltda.,Commercial,1
Conecte Telecomunicacoes Ltda.,Commercial,1
Gox Internet,Commercial,1
Clean Net Telecom Ltda,Commercial,1
Abba Communications,Commercial,1
The Francis Crick Institute Limited,Education,1
PC2 Telecom,Commercial,1
Netskope,Commercial,1
SKY,Commercial,1
Sao Miguel Telecomunicacoes e Informatica Ltda - M,Commercial,1
Leuphana Universitaet Lueneburg,Education,1
Brandenburgische Technische Universitaet Cottbus-Senftenberg,Education,1
Klimovsk Network Ltd,Commercial,1
Check Point Software Technologies Ltd,Commercial,1
Samissa Telecom,Commercial,1
Palais des Congres de Montreal,Commercial,1
Shivansh Infotech Pvt Ltd,Commercial,1
Cooperativa Electrica de Saladillo,Commercial,1
JSM Properties,Commercial,1
"Universita' di Pisa",Education,1
MTN Afghanistan,Commercial,1
Jetway Broadband,Commercial,1
Navg Telecomunicacoes Eireli - ME,Commercial,1
Global Link,Commercial,1
Friedrich Schiller Universitaet Jena,Education,1
Universitas Negeri Malang,Education,1
Faridabad Netcom Pvt. Ltd.,Commercial,1
PT Rekajasa Akses,Commercial,1
UTL Technologies Limited,Commercial,1
University of Kashan,Education,1
University of Jyvaskyla,Education,1
Ceske Vysoke Uceni Technicke v Praze,Education,1
VOIP Communications Pvt Ltd,Commercial,1
Invermae Solutions SL,Commercial,1
Imunidade Digital Servicos em Comunicacao Ltda,Commercial,1
Kamatera Inc.,Commercial,1
VMedia Inc,Commercial,1
Arizona Tri-University Network,Education,1
TOO IK-Broker,Commercial,1
Istanbul Teknik Universitesi,Education,1
Egerton University Njoro Campus,Education,1
Ayandeh Gostar Bastak Co. (Private Joint Stock),Commercial,1
Tishk Net Company for Wimax Technology and Internet Service Limited,Commercial,1
MCD Informatica e Telecomunicacoes Ltda - ME,Commercial,1
Carlos Henrique Santos de Oliveira ME,Commercial,1
New Group Telecomunicacoes Ltda,Commercial,1
Ultraconexao Solucoes Eireli,Commercial,1
"Universita' degli Studi di Roma La Sapienza",Education,1
University Linz,Education,1
Northlands Asociacion Civil de Beneficen,Commercial,1
Micks Telecom Eireli,Commercial,1
Tele.Co.Albania SHPK,Commercial,1
The University of Dodoma,Education,1
Antonio G de Sousa Junior - ME,Commercial,1
7F Block B Billion Centre,Commercial,1
Diginet SHPK,Commercial,1
WISPRENN,Commercial,1
Bite Latvija,Commercial,1
Gleidson de O. Marques - ME,Commercial,1
National Institute of Epidemiology-Icmr,Education,1
SamsungSDS Inc.,Commercial,1
Alliance IP (Belize) Ltd,Commercial,1
G.M.V. Servicos de Informatica Ltda - ME,Commercial,1
Global Flash Telecom e Tecnologia Ltda - ME,Commercial,1
US Dept of Energy Office of Scientific and Technical Information,Government,1
"K's Co. Ltd",Commercial,1
Antaranga Properties Ltd,Commercial,1
Cyberline Comunicacoes e Servicos Ltda ME,Commercial,1
Alfa Network Solutions Informtica Ltda,Commercial,1
PSSK Sp. z o.o.,Commercial,1
Medical University of Qom,Education,1
Edney Nunes Zacarone - ME,Commercial,1
Insist Net Limited,Commercial,1
Voxx Telecom Ltda - ME,Commercial,1
Dehradun Enet Solutions Private Ltd,Commercial,1
Wholesale Airtime Inc.,Commercial,1
To Public VPN,Commercial,1
One Net,Commercial,1
Fiber Telecom - Telecomunicacao de Dados,Commercial,1
Click Enter Ltda - ME,Commercial,1
Iranet Telecom,Commercial,1
GPP Solucoes em Informatica,Commercial,1
"Methodist Ladies' College",Education,1
Terracel Provedor de Internet Ltda ME,Commercial,1
WT Informatica Telecomunicacoes Ltda - ME,Commercial,1
R2 Dados Ltda - ME,Commercial,1
5GTelecom Azevedo Informatica Ltda.,Commercial,1
BSC,Education,1
JSC Mastertel,Commercial,1
Opened Joint Stock Company Tojiktelecom,Commercial,1
NetGuard LLC,Commercial,1
Kungliga Tekniska Hogskolan,Commercial,1
Expand Tecnologia e Informatica Ltda,Commercial,1
Shock Hosting LLC,Commercial,1
Bujar Shimaj,Commercial,1
Mwa Internet. Com Ltda - ME,Commercial,1
Juan Pablo Florentin,Commercial,1
Ribernet Comunicacoes Ltda,Commercial,1
B.B. Net Up Eireli-ME,Commercial,1
FOP Mukhina Kateryna Volodymyrivna,Commercial,1
JR Intercom S.R.L,Commercial,1
DK Telecom,Commercial,1
DATASYS - edoma.net s.r.o.,Commercial,1
Multi Telecom e Comercio de Informatica Eireli ME,Commercial,1
Info Telecomunicacoes Ltda - ME,Commercial,1
Dravanet Co Ltd.,Commercial,1
N.P.sh ISP - Broadcast,Commercial,1
CineCable TV,Commercial,1
Electric Plant Board of the city of Franklin Kentucky,Commercial,1
Sulcatel Comercio de Telefonia Ltda - ME,Commercial,1
University of the Philippines,Education,1
Contato Internet Eireli,Commercial,1
Rannsokna- og haskolanet Islands hf.,Commercial,1
Andernet Telecom Ltda - ME,Commercial,1
Dublin City University,Education,1
Voltec Servico de Automacao Telecom .,Commercial,1
Skymax Telecomunicacoes Ltda ME,Commercial,1
IXP Ecuador,Commercial,1
Cariplo Factory,Commercial,1
Universidade Federal do Cariri - UFCA,Commercial,1
The University of New England,Education,1
Giga Nineveh for internet services Ltd,Commercial,1
Mitec Solutions,Commercial,1
I4 Telecom Ltda-ME,Commercial,1
Click Internet Ltda,Commercial,1
Universitaet Zuerich,Education,1
Zum Telecom Ltda- ME,Commercial,1
Comenius University in Bratislava,Education,1
Brisk Systems,Commercial,1
GR Solucoes Telecom Ltda - ME,Commercial,1
ATK Telecomunicacoes Ltda.,Commercial,1
University of Mines and Technology,Education,1
Eletric Telecomunicacoes e Informatica Ltda ME,Commercial,1
Adeatel S.A,Commercial,1
Pelikan Net Ltda-ME,Commercial,1
Covenant University,Education,1
Hyper Telecom,Commercial,1
Nobreak Net Ltda - M.E.,Commercial,1
Inforbarra Telecom,Commercial,1
WN Telecom Ltda - ME,Commercial,1
ISP Group SRL,Commercial,1
A Rede Telecom Ltda ME,Commercial,1
Artmotion SH.P.K.,Commercial,1
Sawad Land for Information Technology Ltd,Commercial,1
Wip Telecom Multimidia Eireli - ME,Commercial,1
"Banca d'Italia",Commercial,1
Sul Internet Equipamentos de Informatica Ltda ME,Commercial,1
SKTV Ltd.,Commercial,1
263 Shanghai Communications Ltd.,Commercial,1
Connect Telecom,Commercial,1
Conexao VIP Telecom,Commercial,1
Mountains of the Moon University,Education,1
Brasturbo Telecomunicacoes Ltda ME,Commercial,1
Clickconnect Solucoes em Internet e Tecnologia,Commercial,1
Rede Banda Larga,Commercial,1
Gedatecu SA.,Commercial,1
University of Plymouth,Education,1
Lisandro Pozzo Ardizzi,Commercial,1
Brasil-IP Telecomunicacoes Ltda - ME,Commercial,1
Neticabo Telecom Ltda - ME,Commercial,1
4/F Weswick Commercial Building,Commercial,1
Padilha e Padilha Ltda,Commercial,1
Giacometti & Giacometti Ltda ME,Commercial,1
Global Technology Co. Ltd.,Commercial,1
Nexus Fibra Telecomunicacoes Ltda,Commercial,1
Log Link Informatica Ltda - ME,Commercial,1
Pulse Tekh,Commercial,1
Al Madar Al Jadeed Joint Stock Company,Commercial,1
Home of the Brave Internet Technology Based Solutions GmbH,Commercial,1
West Chester University of Pennsylvania,Education,1
T F da Silva Ramos Telecomunicacoes e Sistema EPP,Commercial,1
Netdrp Servicos de Internet Ltd.,Commercial,1
Netropolys S.A.,Commercial,1
Sharp Communications (Pvt.) Ltd,Commercial,1
Fale Net Servicos de Comunicacao Ltda - ME,Commercial,1
Digiway Net Pvt Ltd,Commercial,1
Lamont-Doherty Earth Observatory of Columbia University,Education,1
ITOP Telecom Ltda - ME,Commercial,1
Mundial Net Telecom - EPP,Commercial,1
ITMinds Consultoria em Tecnologia da Informacao,Commercial,1
ALUCOM,Commercial,1
Cristiano Holdefer & Cia Ltda - ME,Commercial,1
Gimenez Pedro Santiago,Commercial,1
Mais Internet Comercio Servicos e Telec Ltda,Commercial,1
Next Provedores Acesso Ltda ME,Commercial,1
Ispcom S.A.,Commercial,1
Ze.net WISP SRL,Commercial,1
Flytec Telecom Sociedad Anonima,Commercial,1
Matheus Scandiuze Nehme,Commercial,1
Kurt Gunderson II,Commercial,1
Conect S.A,Commercial,1
Altan Redes S.A.P.I. de C. V.,Commercial,1
NetFibra Telecomunicacoes Ltda - ME,Commercial,1
One Two Servicos Ltda - ME,Commercial,1
Marlico Jose da Sila Informatica ME,Commercial,1
Amazonia Telecomunicacoes Ltda,Commercial,1
F R Braga Informatica ME,Commercial,1
Mega IP Connect,Commercial,1
Vtek Telecom Ltda - ME,Commercial,1
TT1 Datacenter UG (haftungsbeschraenkt),Commercial,1
Willian Mendes de Oliveira ME,Commercial,1
Patriot Web Solutions,Commercial,1
Los Angeles Dodgers,Commercial,1
MBG Tecnologia Ltda EPP,Commercial,1
Fatima M Holsinger,Commercial,1
Fajar Informasi Globalnet Jaya PT,Commercial,1
RAIN,Organization,1
Ghanaian Academic and Research Network,Education,1
Regent University,Education,1
Holland Board of Public Works,Commercial,1
South Asian University,Education,1
Indian Institute Of Technology Roorkee,Education,1
University of Malaya,Education,1
Anglican Schools Corporation,Education,1
Thamizhaga Internet Communications Private Limited,Commercial,1
3F Unit 14 Starmall Apartelle Shaw EDSA,Commercial,1
Powai,Education,1
Lebuhraya Tun Razak,Education,1
Universitas Negeri Jakarta,Education,1
Falconet Internet Pvt.Ltd.,Commercial,1
Vizianagar Citi Communications Pvt.Ltd.,Commercial,1
Bangladesh University of Engineering and Technology,Education,1
Universitas Riau,Education,1
Data Center Viva City Town Khan-Uul District,Commercial,1
Islamic University of Technology,Education,1
University of Rajshahi,Education,1
Royalnet,Commercial,1
Mux Technologies,Commercial,1
Ambitions Communication System (SMC-Private) Limited,Commercial,1
CGNAT-FIX Project,Commercial,1
Krauss Communication Private Limited,Commercial,1
Bhuiyan Telecom,Commercial,1
Red Network Ltd,Commercial,1
Maxbr Comercio e Prestacao de Servicos Ltda - ME,Commercial,1
PT.Cipta Data Media,Commercial,1
ECFBN Inc,Commercial,1
Reach Media Sky LLP,Commercial,1
Launtel AAPT,Commercial,1
African Institute for Mathematical Sciences Ghana,Education,1
University of Texas Southwestern Medical Center,Education,1
Gold Data Dominicana S.A.S,Commercial,1
CV. Vannesa Utama,Commercial,1
Evobits Information Technology SRL,Commercial,1
Chulalongkorn University,Education,1
Special Communication Organization,Government,1
Vetenskapsradet / SUNET,Education,1
IP Allocation 1 FWU,Education,1
University of Southern Queensland,Education,1
Necusoft Cia. Ltd.,Commercial,1
Canadian Student Communities Inc,Commercial,1
IP Allocation 1 IIU,Education,1
U.S. Department of Defense Education Activity,Education,1
Safran Helicopter Engines Sasu,Commercial,1
Rede Nacional de Ensino e Pesquisa,Education,1
S N Fiber,Commercial,1
Ricoh USA Inc.,Commercial,1
PT Jaya Media Expres,Commercial,1
Iowa State University of Science and Technology,Education,1
Rose-Hulman Institute of Technology Inc,Education,1
Serviceplan Group SE & Co. KG,Commercial,1
Smarteye B.V,Commercial,1
The University of Hartford,Education,1
Indian Intitute of Technology (IIT) Gujarat,Education,1
Wulfsoft,Commercial,1
Susquehanna Investment Group GP,Commercial,1
MSG Entertainment Group LLC,Commercial,1
Saicel Communications Limited,Commercial,1
Methodist College,Education,1
Universal Marketing,Commercial,1
Solace Tel (PVT.) Limited,Commercial,1
Central University of Odisha,Education,1
Lira University,Education,1
Living Faith Church Worldwide,Organization,1
Inovanet Telecomunicacoes E Multimidia Ltda,Commercial,1
Jessore University of Science and Technology,Education,1
Kumasi Technical University,Education,1
Telecomunicaciones Autonomas Sin Limite S.A. de C.V.,Commercial,1
Iowa Central Community College,Education,1
Lulu Tech Advanced Technology,Commercial,1
Kentucky Wesleyan,Commercial,1
NIT Rourkela,Commercial,1
Toppan Merrill LLC,Commercial,1
RCM Brasil Multimidia Ltda,Commercial,1
Bobr-Telecom LLC,Commercial,1
PT Cybernet Data Multimedia,Commercial,1
M East Sdn. Bhd.,Commercial,1
Ecole Jeannine Manuel,Education,1
Berliner Hochschule fuer Technik,Education,1
Zoologisches Forschungsmuseum Alexander Koenig,Education,1
Table Mountain Inn of Golen,Commercial,1
Signal Provedor de Acesso A Internet Ltda,Commercial,1
Indira Gandhi National Open University,Education,1
PT Dekadata Lingkar Nusantara,Commercial,1
Government of Alberta,Government,1
Suburbio Telecomunicacoes Ltda,Commercial,1
Blattner Company,Commercial,1
UK Centre for Ecology & Hydrology,Education,1
M A Conexao Eletrotecnica Multimidia Ltda ME,Commercial,1
LA Touraine LLC,Commercial,1
Luciana Araujo Nunes de Jesus ME,Commercial,1
Bruno e Lemes LTDA,Commercial,1
Soluciones TV 555 C.A.,Commercial,1
Rogerio Carlos Schimidt - ME,Commercial,1
DT Inflight Hong Kong,Commercial,1
University of Colorado Colorado Springs,Education,1
Gtech Communication Private Limited,Commercial,1
Naria Online,Commercial,1
Jdnet Telecom Provedor de Internet Ltda,Commercial,1
New Net Telecom Ltda,Commercial,1
Bre Europe 6Q S.A R.L.,Commercial,1
Nunez Baddouh Marcelo Ricardo,Commercial,1
Menlo Robot Limited,Commercial,1
Igor Marcelo Dejesus dos Santos,Commercial,1
SM Ltd.,Commercial,1
BSB Link Fibra,Commercial,1
Alfacom Telecomunicoes E Multimidia Ltda,Commercial,1
M. S. Telecomunicacoes Ltda,Commercial,1
Alves & Camargo telecom,Commercial,1
UFO Telecom Comunicacao de Multimidia Eireli,Commercial,1
RVA Telecom Ltda,Commercial,1
Woofy Incorporated,Commercial,1
Falcon Net,Commercial,1
New Orleans Public Facility Management Inc.,Commercial,1
Mentis Sciences Inc.,Education,1
Wellness,Commercial,1
BGU,Education,1
EDF Trading Limited,Commercial,1
Francisco Edson Lima Brasileiro,Commercial,1
Gilberto de Aguiar,Commercial,1
Cheetahnet Solutions Limited,Commercial,1
Optinode Group LLP,Commercial,1
LEMAX Internet,Commercial,1
FOP Hordiiuk Petro Vasulyovuch,Commercial,1
Trollhattans Kommun,Commercial,1
AGS Telecom,Commercial,1
K C Telecom Ltda,Commercial,1
University of Illinois Chicago,Education,1
LCUB,Commercial,1
Ponto Certo Internet,Commercial,1
Future Netsanchar Limited,Commercial,1
Optiver Services US LLC,Commercial,1
Jetcloud Technology Co. Ltd,Commercial,1
Ecole nationale superieure des Mines d Albi-Carmaux,Education,1
Data Plus LLC,Commercial,1
Inserm DSI,Education,1
"Ecole Nationale de l'Aviation Civile - ENAC",Education,1
Institut National Polytechnique de Grenoble,Education,1
Wing Net Tecnologia E Servicos Ltda,Commercial,1
R4 Tecnologia Ltda,Commercial,1
Institut de Mecanique des Fluides,Education,1
Micron Servicos de Tecnologia Ltda,Commercial,1
Texas Instruments India Pvt Limited,Commercial,1
Para Inovacoes Servicos de Comunicacao Ltda,Commercial,1
BL Provedor de Acesso A Internet Ltda,Commercial,1
Conexao Consultoria & Informatica Ltda,Commercial,1
Ezee Fiber,Commercial,1
California State University Dominguez Hills,Education,1
Tatu Telecom Company Sez Limited,Commercial,1
Wireline Communication India Private Limited,Commercial,1
Ciudadela Comercial Unicentro,Commercial,1
Alabama Supercomputer Authority,Government,1
"Association Nationale d'Education et de Recherche du Burkina Faso - F@Soren",Education,1
Alfanet Telecom E Tecnologia Ltda,Commercial,1
MDPI AG,Commercial,1
Jose Carlos de Oliveira Costa ME,Commercial,1
Intcoer Valledupar,Commercial,1
Centralesupelec EPSCP,Education,1
Telecable Empresarial,Commercial,1
Ypn Tecnologia Ltda,Commercial,1
JDA,Commercial,1
Playmais Fibra SCM Ltda,Commercial,1
RTX BBN Technologies Inc.,Commercial,1
Universal Net - Servicos de Comunicacao Mult Ltda,Commercial,1
The Mathworks Inc.,Commercial,1
Portal Queops Telecomunicacoes Ltda,Commercial,1
HD2 Telecomunicacoes Ltda,Commercial,1
UAB Penki Kontinentai,Commercial,1
Guneydogu Telekom Int. Bil. ve Ilt. Hiz. Tic. Ltd. Sti.,Commercial,1
Acelera Telecom,Commercial,1
UC Telecom Ltda,Commercial,1
Shiv Nadar Institution of Eminence Deemed to be University,Education,1
F Net Telecom,Commercial,1
Lopez Santos Sat Nit Telecomunicacoes Ltda,Commercial,1
Digital.com Telecomunicacoes Ltda,Commercial,1
Radnet Servicos em Ti Ltda,Commercial,1
Louvetel Comunicacao Comercial SCM Ltda,Commercial,1
RG Net,Commercial,1
Comp Telecom,Commercial,1
Ibipar S/A,Commercial,1
Annai Tex Mills,Commercial,1
LSSU,Education,1
AS206092 Internet Utilities Europe and Asia Limited,Commercial,1
Education Networks of America Inc,Education,1
Imbranet Telecom,Commercial,1
InfoInternet Plus,Commercial,1
JND - Provedor,Commercial,1
Prizma Digital Private Limited,Commercial,1
Umikaze Ventures LLC,Commercial,1
C A Andrade LTDA,Commercial,1
NodeFeed LLC,Commercial,1
IPHome LLC,Commercial,1
Johann Wolfgang Goethe-Universitat Frankfurt am Main,Education,1
Saint Charles Community Unit School District 303,Education,1
X1 Internet Ltda,Commercial,1
Bahia Fibra Telecom Ltda,Commercial,1
IoT360 Pte.Ltd,Commercial,1
Soletech IT Solutions,Commercial,1
South African Broadband Education Networks,Education,1
Hindukush Bridge ICT Services Company,Commercial,1
Blvd 63,Commercial,1
South African Weather Services [Saws] TSN259,Commercial,1
67.69.42.64/27,Commercial,1
Orbi Gaming - Eireli,Commercial,1
Indian Institute of Technology Banaras Hindu University,Education,1
Lodz University of Technology,Education,1
Universidad de Santiago de Chile,Education,1
Via Line,Commercial,1
MaxxTelecom Ltda,Commercial,1
RTDS Network ICT Solutions Inc.,Commercial,1
Orion Network Systems,Commercial,1
Company Capital Futurosa,Commercial,1
We Have Three ISP Customers : One of Them Called Sela Which We Assigned/26 for This ISP in Sabratah Site to Allow Them Provide Such A Services (Leased Line ADSL PPPoE Hotsport).,Commercial,1`,wQ=Object.assign({"./Readership_Country_Years_2016-2025/2016_ReadershipReport.csv":rQ,"./Readership_Country_Years_2016-2025/2017_ReadershipReport.csv":iQ,"./Readership_Country_Years_2016-2025/2018_ReadershipReport.csv":aQ,"./Readership_Country_Years_2016-2025/2019_ReadershipReport.csv":oQ,"./Readership_Country_Years_2016-2025/2020_ReadershipReport.csv":cQ,"./Readership_Country_Years_2016-2025/2021_ReadershipReport.csv":lQ,"./Readership_Country_Years_2016-2025/2022_ReadershipReport.csv":sQ,"./Readership_Country_Years_2016-2025/2023_ReadershipReport.csv":uQ,"./Readership_Country_Years_2016-2025/2024_ReadershipReport.csv":dQ,"./Readership_Country_Years_2016-2025/2025_ReadershipReport.csv":fQ}),xQ=Object.assign({"./Readership_Institution_Years_2016-2025/2016_Institutions.csv":mQ,"./Readership_Institution_Years_2016-2025/2017_Institutions.csv":hQ,"./Readership_Institution_Years_2016-2025/2018_Institutions.csv":vQ,"./Readership_Institution_Years_2016-2025/2019_Institutions.csv":pQ,"./Readership_Institution_Years_2016-2025/2020_Institutions.csv":yQ,"./Readership_Institution_Years_2016-2025/2021_Institutions.csv":gQ,"./Readership_Institution_Years_2016-2025/2022_Institutions.csv":EQ,"./Readership_Institution_Years_2016-2025/2023_Institutions.csv":CQ,"./Readership_Institution_Years_2016-2025/2024_Institutions.csv":bQ,"./Readership_Institution_Years_2016-2025/2025_Institutions.csv":SQ});function AQ(e){const n=[];let t="",r=!1;for(let i=0;i<e.length;i++){const o=e[i];if(o==='"'){r&&e[i+1]==='"'?(t+='"',i++):r=!r;continue}if(o===","&&!r){n.push(t.trim()),t="";continue}t+=o}return n.push(t.trim()),n}function GN(e){return e.split(/\r?\n/).map(n=>n.trim()).filter(n=>n.length>0).map(AQ)}function pO(e){const n=e.match(/(?:^|\/)(\d{4})_(?:ReadershipReport|Institutions)\.csv$/);return n?Number(n[1]):null}function UQ(e){return GN(e).slice(1).map(t=>({country:t[0]??"",downloads:Number(t[1]??0)}))}function TQ(e){return GN(e).slice(1).map(t=>({name:t[0]??"",type:t[1]??"",downloads:Number(t[2]??0)}))}function PQ(){const e=new Map;for(const[n,t]of Object.entries(wQ)){const r=pO(n);if(!r)continue;const i=UQ(t),o=e.get(r)??{totalDownloads:0,geography:[],institutions:[]};o.geography=i,o.totalDownloads=i.reduce((l,s)=>l+s.downloads,0),e.set(r,o)}for(const[n,t]of Object.entries(xQ)){const r=pO(n);if(!r)continue;const i=TQ(t),o=e.get(r)??{totalDownloads:0,geography:[],institutions:[]};o.institutions=i,e.set(r,o)}return[...e.entries()].sort(([n],[t])=>n-t).map(([n,t])=>({year:n,...t}))}const Ru=[2019,2021,2024];function IQ(){const[e,n]=_.useState(null),[t,r]=_.useState("statistical"),i=_.useRef(null);_.useEffect(()=>{n(PQ())},[]);const o=l=>{var u;r(l);const s=(u=i.current)==null?void 0:u.querySelector("[data-radix-scroll-area-viewport]");s==null||s.scrollTo({top:0,behavior:"auto"})};return O.jsxs("div",{className:"min-h-screen bg-background",children:[O.jsx("header",{className:"border-b bg-primary text-primary-foreground sticky top-0 z-10 shadow-sm",children:O.jsx("div",{className:"container mx-auto px-4 py-3",children:O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx(s2,{className:"size-7 text-accent"}),O.jsxs("div",{children:[O.jsx("h1",{className:"text-xl font-semibold leading-tight",children:"Research Analytics Dashboard"}),O.jsx("p",{className:"text-xs text-primary-foreground/80",children:"Evaluating Special Issue Impact on Journal Downloads (2016–2025)"})]})]})})}),O.jsx(cF,{ref:i,className:"h-[calc(100vh-69px)]",children:O.jsx("div",{className:"container mx-auto px-4 py-4 max-w-7xl",children:e&&O.jsxs("div",{className:"space-y-4",children:[O.jsx(EF,{}),O.jsx(pF,{}),O.jsxs(yF,{value:t,className:"w-full",onValueChange:o,children:[O.jsxs(gF,{className:"grid w-full grid-cols-4",children:[O.jsx(bu,{value:"statistical",children:"Statistical Evidence"}),O.jsx(bu,{value:"mathematical",children:"Mathematical Analysis"}),O.jsx(bu,{value:"visual",children:"Visual Analysis"}),O.jsx(bu,{value:"results",children:"Results & Synthesis"})]}),O.jsx(Su,{value:"statistical",className:"mt-4",children:O.jsx(OF,{data:e,specialYears:Ru})}),O.jsx(Su,{value:"mathematical",className:"mt-4",children:O.jsx(kF,{data:e,specialYears:Ru})}),O.jsx(Su,{value:"visual",className:"mt-4",children:O.jsx(tQ,{panelName:"Visual Analysis",children:t==="visual"?O.jsx(eQ,{data:e,specialYears:Ru}):null})}),O.jsx(Su,{value:"results",className:"mt-4",children:O.jsx(nQ,{data:e,specialYears:Ru})})]})]})})})]})}qR.createRoot(document.getElementById("root")).render(O.jsx(IQ,{}));
