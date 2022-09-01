// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Number.POSITIVE_INFINITY;function t(n){return 0===n&&1/n===r}var e=Number,u=e.NEGATIVE_INFINITY;function o(n){return 0===n&&1/n===u}function i(n){return Math.abs(n)}var f="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty,c=Object.prototype,l=c.toString,y=c.__defineGetter__,v=c.__defineSetter__,p=c.__lookupGetter__,b=c.__lookupSetter__,d=function(){try{return f({},"x",{}),!0}catch(n){return!1}}()?a:function(n,r,t){var e,u,o,i;if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(p.call(n,r)||b.call(n,r)?(e=n.__proto__,n.__proto__=c,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),o="get"in t,i="set"in t,u&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&y&&y.call(n,r,t.get),i&&v&&v.call(n,r,t.set),n};function m(n,r,t){d(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(n){return"number"==typeof n}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return h&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString,A=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",N=g()?function(n){var r,t,e,u,o;if(null==n)return w.call(n);t=n[_],o=_,r=null!=(u=n)&&A.call(u,o);try{n[_]=void 0}catch(r){return w.call(n)}return e=w.call(n),r?n[_]=t:delete n[_],e}:function(n){return w.call(n)},U=e.prototype.toString,j=g();function I(n){return"object"==typeof n&&(n instanceof e||(j?function(n){try{return U.call(n),!0}catch(n){return!1}}(n):"[object Number]"===N(n)))}function O(n){return s(n)||I(n)}m(O,"isPrimitive",s),m(O,"isObject",I);var S=Math.sqrt,E=Math.floor;function T(n){return E(n)===n}function F(n){return T(n/2)}function H(n){return F(n>0?n-1:n+1)}function G(n){return n===r||n===u}var P,V="function"==typeof Uint32Array,M="function"==typeof Uint32Array?Uint32Array:null,k="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var n,r,t;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(V&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?k:function(){throw new Error("not implemented")};var x,L=P,W="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,q="function"==typeof Float64Array?Float64Array:void 0;x=function(){var n,r,t;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,NaN]),t=r,n=(W&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?q:function(){throw new Error("not implemented")};var C,z=x,B="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var n,r,t;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,256,257]),t=r,n=(B&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?J:function(){throw new Error("not implemented")};var K,Q=C,R="function"==typeof Uint16Array,X="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var n,r,t;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,65536,65537]),t=r,n=(R&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Z:function(){throw new Error("not implemented")};var $,nn={uint16:K,uint8:Q};($=new nn.uint16(1))[0]=4660;var rn,tn,en=52===new nn.uint8($.buffer)[0];!0===en?(rn=1,tn=0):(rn=0,tn=1);var un={HIGH:rn,LOW:tn},on=new z(1),fn=new L(on.buffer),an=un.HIGH,cn=un.LOW;function ln(n,r){return on[0]=r,n[0]=fn[an],n[1]=fn[cn],n}function yn(n,r){return 1===arguments.length?ln([0,0],n):ln(n,r)}var vn=!0===en?0:1,pn=new z(1),bn=new L(pn.buffer);function dn(n,r){return pn[0]=n,bn[vn]=r>>>0,pn[0]}function mn(n){return 0|n}var sn,hn,gn=!0===en?1:0,wn=new z(1),An=new L(wn.buffer);function _n(n){return wn[0]=n,An[gn]}!0===en?(sn=1,hn=0):(sn=0,hn=1);var Nn={HIGH:sn,LOW:hn},Un=new z(1),jn=new L(Un.buffer),In=Nn.HIGH,On=Nn.LOW;function Sn(n,r){return jn[In]=n,jn[On]=r,Un[0]}var En=[0,0];function Tn(n,r){var t,e;return yn(En,n),t=En[0],t&=2147483647,e=_n(r),Sn(t|=e&=2147483648,En[1])}var Fn=!0===en?1:0,Hn=new z(1),Gn=new L(Hn.buffer);function Pn(n,r){return Hn[0]=n,Gn[Fn]=r>>>0,Hn[0]}var Vn=1023,Mn=1048576,kn=[1,1.5],xn=[0,.5849624872207642],Ln=[0,1.350039202129749e-8];function Wn(r,t){return n(t)||G(t)?(r[0]=t,r[1]=0,r):0!==t&&i(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Yn=[0,0],qn=[0,0];function Cn(t,e){var o,i;return 0===e||0===t||n(t)||G(t)?t:(function(n,r){1===arguments.length?Wn([0,0],n):Wn(n,r)}(Yn,t),e+=Yn[1],e+=function(n){var r=_n(n);return(r=(2146435072&r)>>>20)-Vn|0}(t=Yn[0]),e<-1074?Tn(0,t):e>1023?t<0?u:r:(e<=-1023?(e+=52,i=2220446049250313e-31):i=1,yn(qn,t),o=qn[0],o&=2148532223,i*Sn(o|=e+Vn<<20,qn[1])))}var zn=2147483647,Bn=1048575,Dn=1048576,Jn=2147483647,Kn=1083179008,Qn=1e300,Rn=1e-300,Xn=[0,0],Zn=[0,0];function $n(t,e){var o,f,a,c,l,y,v,p,b,d,m,s,h,g;if(n(t)||n(e))return NaN;if(yn(Xn,e),l=Xn[0],0===Xn[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return S(t);if(-.5===e)return 1/S(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(G(e))return function(n,t){return-1===n?(n-n)/(n-n):1===n?1:i(n)<1==(t===r)?0:r}(t,e)}if(yn(Xn,t),c=Xn[0],0===Xn[1]){if(0===c)return function(n,t){return t===u?r:t===r?0:t>0?H(t)?n:0:H(t)?Tn(r,n):r}(t,e);if(1===t)return 1;if(-1===t&&H(e))return-1;if(G(t))return t===u?$n(-0,-e):e<0?0:r}if(t<0&&!1===T(e))return(t-t)/(t-t);if(a=i(t),o=c&Jn|0,f=l&Jn|0,v=l>>>31|0,y=(y=c>>>31|0)&&H(e)?-1:1,f>1105199104){if(f>1139802112)return function(n,r){return(2147483647&_n(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,e);if(o<1072693247)return 1===v?y*Qn*Qn:y*Rn*Rn;if(o>1072693248)return 0===v?y*Qn*Qn:y*Rn*Rn;m=function(n,r){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=dn(e=(o=1.4426950216293335*u)+i,0))-o),n[0]=e,n[1]=t,n}(Zn,a)}else m=function(n,r,t){var e,u,o,i,f,a,c,l,y,v,p,b,d,m,s,h,g,w,A,_,N;return w=0,t<Mn&&(w-=53,t=_n(r*=9007199254740992)),w+=(t>>20)-Vn|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=Mn),i=dn(u=(h=(r=Pn(r,t))-(c=kn[_]))*(g=1/(r+c)),0),e=524288+(t>>1|536870912),a=Pn(0,e+=_<<18),s=(o=u*u)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=dn(a=3+(o=i*i)+(s+=(f=g*(h-i*a-i*(r-(a-c))))*(i+u)),0),d=(p=-7.028461650952758e-9*(y=dn(y=(h=i*a)+(g=f*a+(s-(a-3-o))*u),0))+.9617966939259756*(g-(y-h))+Ln[_])-((b=dn(b=(v=.9617967009544373*y)+p+(l=xn[_])+(m=w),0))-m-l-v),n[0]=b,n[1]=d,n}(Zn,a,o);if(d=(e-(p=dn(e,0)))*m[0]+e*m[1],b=p*m[0],yn(Xn,s=d+b),h=mn(Xn[0]),g=mn(Xn[1]),h>=Kn){if(0!=(h-Kn|g))return y*Qn*Qn;if(d+8008566259537294e-32>s-b)return y*Qn*Qn}else if((h&Jn)>=1083231232){if(0!=(h-3230714880|g))return y*Rn*Rn;if(d<=s-b)return y*Rn*Rn}return s=function(n,r,t){var e,u,o,i,f,a,c,l,y,v;return y=((l=n&zn|0)>>20)-Vn|0,c=0,l>1071644672&&(u=Pn(0,((c=n+(Dn>>y+1)>>>0)&~(Bn>>(y=((c&zn)>>20)-Vn|0)))>>>0),c=(c&Bn|Dn)>>20-y>>>0,n<0&&(c=-c),r-=u),n=mn(n=_n(a=1-((a=(o=.6931471824645996*(u=dn(u=t+r,0)))+(i=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?Cn(a,c):Pn(a,n)}(h,b,d),y*s}return function(){var e,f,a,c,l,y,v,p,b,d,m,h,g,w;return y=function(){var n=0;return function(){return 0===arguments.length?n:n+=1}}(),h=function(){var n,r,t,e,u,o,f;return n=0,r=0,e=0,function(a){return 0===arguments.length?t?n+e+r:null:(t=!0,o=n+a,f=i(n)>=i(a)?n-o+a:a-o+n,n=o,o=e+f,u=i(e)>=i(f)?e-o+f:f-o+e,n+(e=o)+(r+=u))}}(),g=0,w=0,b=function(n){return 0===arguments.length?0===w?null:g:g+=(n-g)/(w+=1)},f=function(r){var t,e,u,o;if(u=0,o=0,arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return e=r,f}return e=0,i;function i(r){return 0===arguments.length?0===o?null:1===o?n(u)?NaN:0:u/(o-1):(u+=(t=r-e)*(r-(e+=t/(o+=1))),o<2?n(u)?NaN:0:u/(o-1))}function f(n){return 0===arguments.length?0===o?null:u/o:(u+=(t=n-e)*t)/(o+=1)}}(),p=function(r){var t,e,u,o;if(u=0,o=0,arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return e=r,f}return e=0,i;function i(r){return 0===arguments.length?0===o?null:1===o?n(u)?NaN:0:S(u/(o-1)):(u+=(t=r-e)*(r-(e+=t/(o+=1))),o<2?n(u)?NaN:0:S(u/(o-1)))}function f(n){return 0===arguments.length?0===o?null:S(u/o):S((u+=(t=n-e)*t)/(o+=1))}}(),a=function(){var r,t,e,u,o,i,f,a,c;return r=0,t=0,e=0,u=0,f=0,a=0,c=0,function(l){return 0===arguments.length||(o=(e=(t=l-u)*(r=t/(c+=1))*(c-1))*r*(c-2),a+=o-=3*r*f,f+=e,u+=r),c<3?n(a)?NaN:null:(i=S(c)*a/$n(f,1.5),S(c*(c-1))*i/(c-2))}}(),c=function(){var r,t,e,u,o,i,f,a,c,l;return r=0,t=0,e=0,u=0,o=0,f=0,a=0,c=0,l=0,function(y){return 0===arguments.length||(i=(u=(e=y-o)*(t=e/(l+=1))*(l-1))*(r=t*t)*(l*l-3*l+3),i+=6*r*f,c+=i-=4*t*a,i=u*t*(l-2),a+=i-=3*t*f,f+=u,o+=t),l<4?n(c)?NaN:null:(l-1)/((l-2)*(l-3))*((l+1)*(l*c/(f*f)-3)+6)}}(),d=function(){var r;return function(e){return 0===arguments.length?void 0===r?null:r:((void 0===r||e>r||n(e)||e===r&&t(e))&&(r=e),r)}}(),m=function(){var r;return function(t){return 0===arguments.length?void 0===r?null:r:((void 0===r||t<r||n(t)||t===r&&o(t))&&(r=t),r)}}(),v=function(){var t,e=u,o=r;return function(r){return 0===arguments.length?void 0===t?null:t:(n(r)&&(o=r,e=r),r>e&&(e=r),r<o&&(o=r),t=e-o)}}(),e=function(){var t,e=u,o=r;return function(r){return 0===arguments.length?void 0===t?null:t/2:(n(r)&&(o=r,e=r),r>e&&(e=r),r<o&&(o=r),(t=e+o)/2)}}(),l={},function(n){return 0===arguments.length||(l.count=y(n),l.max=d(n),l.min=m(n),l.range=v(n),l.midrange=e(n),l.sum=h(n),l.mean=b(n),l.variance=f(n),l.stdev=p(n),l.skewness=a(n),l.kurtosis=c(n)),l}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).incrsummary=r();
//# sourceMappingURL=browser.js.map
