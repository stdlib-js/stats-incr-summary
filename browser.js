// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Number.POSITIVE_INFINITY;function t(n){return 0===n&&1/n===r}var e=Number,u=e.NEGATIVE_INFINITY;function i(n){return 0===n&&1/n===u}function o(n){return Math.abs(n)}var f="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty,c=Object.prototype,l=c.toString,y=c.__defineGetter__,v=c.__defineSetter__,p=c.__lookupGetter__,s=c.__lookupSetter__,b=function(){try{return f({},"x",{}),!0}catch(n){return!1}}()?a:function(n,r,t){var e,u,i,o;if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(p.call(n,r)||s.call(n,r)?(e=n.__proto__,n.__proto__=c,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),i="get"in t,o="set"in t,u&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&y&&y.call(n,r,t.get),o&&v&&v.call(n,r,t.set),n};function d(n,r,t){b(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function m(n){return"number"==typeof n}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return g&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString,A=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",N=h()?function(n){var r,t,e,u,i;if(null==n)return w.call(n);t=n[_],i=_,r=null!=(u=n)&&A.call(u,i);try{n[_]=void 0}catch(r){return w.call(n)}return e=w.call(n),r?n[_]=t:delete n[_],e}:function(n){return w.call(n)},U=e.prototype.toString,j=h();function I(n){return"object"==typeof n&&(n instanceof e||(j?function(n){try{return U.call(n),!0}catch(n){return!1}}(n):"[object Number]"===N(n)))}function O(n){return m(n)||I(n)}d(O,"isPrimitive",m),d(O,"isObject",I);var S=Math.sqrt,E=Math.floor;function T(n){return E(n)===n}function F(n){return T(n/2)}function H(n){return F(n>0?n-1:n+1)}function G(n){return n===r||n===u}var P,V="function"==typeof Uint32Array,M="function"==typeof Uint32Array?Uint32Array:null,k="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var n,r,t;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(V&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?k:function(){throw new Error("not implemented")};var x,L=P,W="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,q="function"==typeof Float64Array?Float64Array:void 0;x=function(){var n,r,t;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,NaN]),t=r,n=(W&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?q:function(){throw new Error("not implemented")};var C,z=x,B="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var n,r,t;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,256,257]),t=r,n=(B&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?J:function(){throw new Error("not implemented")};var K,Q=C,R="function"==typeof Uint16Array,X="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var n,r,t;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,65536,65537]),t=r,n=(R&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Z:function(){throw new Error("not implemented")};var $,nn={uint16:K,uint8:Q};($=new nn.uint16(1))[0]=4660;var rn,tn,en=52===new nn.uint8($.buffer)[0];!0===en?(rn=1,tn=0):(rn=0,tn=1);var un={HIGH:rn,LOW:tn},on=new z(1),fn=new L(on.buffer),an=un.HIGH,cn=un.LOW;function ln(n,r,t,e){return on[0]=n,r[e]=fn[an],r[e+t]=fn[cn],r}function yn(n){return ln(n,[0,0],1,0)}d(yn,"assign",ln);var vn=!0===en?0:1,pn=new z(1),sn=new L(pn.buffer);function bn(n,r){return pn[0]=n,sn[vn]=r>>>0,pn[0]}function dn(n){return 0|n}var mn,gn,hn=2147483647,wn=!0===en?1:0,An=new z(1),_n=new L(An.buffer);function Nn(n){return An[0]=n,_n[wn]}!0===en?(mn=1,gn=0):(mn=0,gn=1);var Un={HIGH:mn,LOW:gn},jn=new z(1),In=new L(jn.buffer),On=Un.HIGH,Sn=Un.LOW;function En(n,r){return In[On]=n,In[Sn]=r,jn[0]}var Tn=[0,0];function Fn(n,r){var t,e;return yn.assign(n,Tn,1,0),t=Tn[0],t&=hn,e=Nn(r),En(t|=e&=2147483648,Tn[1])}var Hn=!0===en?1:0,Gn=new z(1),Pn=new L(Gn.buffer);function Vn(n,r){return Gn[0]=n,Pn[Hn]=r>>>0,Gn[0]}var Mn=1023,kn=1048576,xn=[1,1.5],Ln=[0,.5849624872207642],Wn=[0,1.350039202129749e-8];function Yn(r,t,e,u){return n(r)||G(r)?(t[u]=r,t[u+e]=0,t):0!==r&&o(r)<22250738585072014e-324?(t[u]=4503599627370496*r,t[u+e]=-52,t):(t[u]=r,t[u+e]=0,t)}d((function(n){return Yn(n,[0,0],1,0)}),"assign",Yn);var qn=[0,0],Cn=[0,0];function zn(t,e){var i,o;return 0===e||0===t||n(t)||G(t)?t:(Yn(t,qn,1,0),e+=qn[1],e+=function(n){var r=Nn(n);return(r=(2146435072&r)>>>20)-Mn|0}(t=qn[0]),e<-1074?Fn(0,t):e>1023?t<0?u:r:(e<=-1023?(e+=52,o=2220446049250313e-31):o=1,yn.assign(t,Cn,1,0),i=Cn[0],i&=2148532223,o*En(i|=e+Mn<<20,Cn[1])))}var Bn=1048575,Dn=1048576,Jn=1083179008,Kn=1e300,Qn=1e-300,Rn=[0,0],Xn=[0,0];function Zn(t,e){var i,f,a,c,l,y,v,p,s,b,d,m,g,h;if(n(t)||n(e))return NaN;if(yn.assign(e,Rn,1,0),l=Rn[0],0===Rn[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return S(t);if(-.5===e)return 1/S(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(G(e))return function(n,t){return-1===n?(n-n)/(n-n):1===n?1:o(n)<1==(t===r)?0:r}(t,e)}if(yn.assign(t,Rn,1,0),c=Rn[0],0===Rn[1]){if(0===c)return function(n,t){return t===u?r:t===r?0:t>0?H(t)?n:0:H(t)?Fn(r,n):r}(t,e);if(1===t)return 1;if(-1===t&&H(e))return-1;if(G(t))return t===u?Zn(-0,-e):e<0?0:r}if(t<0&&!1===T(e))return(t-t)/(t-t);if(a=o(t),i=c&hn|0,f=l&hn|0,v=l>>>31|0,y=(y=c>>>31|0)&&H(e)?-1:1,f>1105199104){if(f>1139802112)return function(n,r){return(Nn(n)&hn)<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,e);if(i<1072693247)return 1===v?y*Kn*Kn:y*Qn*Qn;if(i>1072693248)return 0===v?y*Kn*Kn:y*Qn*Qn;d=function(n,r){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=bn(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n}(Xn,a)}else d=function(n,r,t){var e,u,i,o,f,a,c,l,y,v,p,s,b,d,m,g,h,w,A,_,N;return w=0,t<kn&&(w-=53,t=Nn(r*=9007199254740992)),w+=(t>>20)-Mn|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=kn),o=bn(u=(g=(r=Vn(r,t))-(c=xn[_]))*(h=1/(r+c)),0),e=524288+(t>>1|536870912),a=Vn(0,e+=_<<18),m=(i=u*u)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=bn(a=3+(i=o*o)+(m+=(f=h*(g-o*a-o*(r-(a-c))))*(o+u)),0),b=(p=-7.028461650952758e-9*(y=bn(y=(g=o*a)+(h=f*a+(m-(a-3-i))*u),0))+.9617966939259756*(h-(y-g))+Wn[_])-((s=bn(s=(v=.9617967009544373*y)+p+(l=Ln[_])+(d=w),0))-d-l-v),n[0]=s,n[1]=b,n}(Xn,a,i);if(m=(b=(e-(p=bn(e,0)))*d[0]+e*d[1])+(s=p*d[0]),yn.assign(m,Rn,1,0),g=dn(Rn[0]),h=dn(Rn[1]),g>=Jn){if(0!=(g-Jn|h))return y*Kn*Kn;if(b+8008566259537294e-32>m-s)return y*Kn*Kn}else if((g&hn)>=1083231232){if(0!=(g-3230714880|h))return y*Qn*Qn;if(b<=m-s)return y*Qn*Qn}return m=function(n,r,t){var e,u,i,o,f,a,c,l,y,v;return y=((l=n&hn|0)>>20)-Mn|0,c=0,l>1071644672&&(u=Vn(0,((c=n+(Dn>>y+1)>>>0)&~(Bn>>(y=((c&hn)>>20)-Mn|0)))>>>0),c=(c&Bn|Dn)>>20-y>>>0,n<0&&(c=-c),r-=u),n=dn(n=Nn(a=1-((a=(i=.6931471824645996*(u=bn(u=t+r,0)))+(o=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?zn(a,c):Vn(a,n)}(g,s,b),y*m}return function(){var e,f,a,c,l,y,v,p,s,b,d,g,h,w;return y=function(){var n=0;return function(){return 0===arguments.length?n:n+=1}}(),g=function(){var n,r,t,e,u,i,f;return n=0,r=0,e=0,function(a){return 0===arguments.length?t?n+e+r:null:(t=!0,i=n+a,f=o(n)>=o(a)?n-i+a:a-i+n,n=i,i=e+f,u=o(e)>=o(f)?e-i+f:f-i+e,n+(e=i)+(r+=u))}}(),h=0,w=0,s=function(n){return 0===arguments.length?0===w?null:h:h+=(n-h)/(w+=1)},f=function(r){var t,e,u,i;if(u=0,i=0,arguments.length){if(!m(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return e=r,f}return e=0,o;function o(r){return 0===arguments.length?0===i?null:1===i?n(u)?NaN:0:u/(i-1):(u+=(t=r-e)*(r-(e+=t/(i+=1))),i<2?n(u)?NaN:0:u/(i-1))}function f(n){return 0===arguments.length?0===i?null:u/i:(u+=(t=n-e)*t)/(i+=1)}}(),p=function(r){var t,e,u,i;if(u=0,i=0,arguments.length){if(!m(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return e=r,f}return e=0,o;function o(r){return 0===arguments.length?0===i?null:1===i?n(u)?NaN:0:S(u/(i-1)):(u+=(t=r-e)*(r-(e+=t/(i+=1))),i<2?n(u)?NaN:0:S(u/(i-1)))}function f(n){return 0===arguments.length?0===i?null:S(u/i):S((u+=(t=n-e)*t)/(i+=1))}}(),a=function(){var r,t,e,u,i,o,f,a,c;return r=0,t=0,e=0,u=0,f=0,a=0,c=0,function(l){return 0===arguments.length||(i=(e=(t=l-u)*(r=t/(c+=1))*(c-1))*r*(c-2),a+=i-=3*r*f,f+=e,u+=r),c<3?n(a)?NaN:null:(o=S(c)*a/Zn(f,1.5),S(c*(c-1))*o/(c-2))}}(),c=function(){var r,t,e,u,i,o,f,a,c,l;return r=0,t=0,e=0,u=0,i=0,f=0,a=0,c=0,l=0,function(y){return 0===arguments.length||(o=(u=(e=y-i)*(t=e/(l+=1))*(l-1))*(r=t*t)*(l*l-3*l+3),o+=6*r*f,c+=o-=4*t*a,o=u*t*(l-2),a+=o-=3*t*f,f+=u,i+=t),l<4?n(c)?NaN:null:(l-1)/((l-2)*(l-3))*((l+1)*(l*c/(f*f)-3)+6)}}(),b=function(){var r;return function(e){return 0===arguments.length?void 0===r?null:r:((void 0===r||e>r||n(e)||e===r&&t(e))&&(r=e),r)}}(),d=function(){var r;return function(t){return 0===arguments.length?void 0===r?null:r:((void 0===r||t<r||n(t)||t===r&&i(t))&&(r=t),r)}}(),v=function(){var t,e=u,i=r;return function(r){return 0===arguments.length?void 0===t?null:t:(n(r)&&(i=r,e=r),r>e&&(e=r),r<i&&(i=r),t=e-i)}}(),e=function(){var t,e=u,i=r;return function(r){return 0===arguments.length?void 0===t?null:t/2:(n(r)&&(i=r,e=r),r>e&&(e=r),r<i&&(i=r),(t=e+i)/2)}}(),l={},function(n){return 0===arguments.length||(l.count=y(n),l.max=b(n),l.min=d(n),l.range=v(n),l.midrange=e(n),l.sum=g(n),l.mean=s(n),l.variance=f(n),l.stdev=p(n),l.skewness=a(n),l.kurtosis=c(n)),l}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).incrsummary=r();
//# sourceMappingURL=browser.js.map
