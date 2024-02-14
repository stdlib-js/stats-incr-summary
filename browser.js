// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY;function e(r){return 0===r&&1/r===n}function t(r){return r!=r}var i=Number,o=i.NEGATIVE_INFINITY;function a(r){return 0===r&&1/r===o}function u(r){return r!=r}function c(r){return r!=r}function f(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function y(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+g(i):g(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function h(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!p(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=y(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=y(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===v.call(r.specifier)?v.call(e):d.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function w(r){return"string"==typeof r}var b=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,N=/e-(\d)$/,U=/^(\d+)$/,S=/^(\d+)e/,I=/\.0$/,j=/\.0*e/,k=/(\..*[^0])0*e/;function x(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=_.call(e,k,"$1e"),e=_.call(e,j,"e"),e=_.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=_.call(e,E,"e+0$1"),e=_.call(e,N,"e-0$1"),r.alternate&&(e=_.call(e,U,"$1."),e=_.call(e,S,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===A.call(r.specifier)?A.call(e):m.call(e)}function F(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function T(r,n,e){var t=n-r.length;return t<0?r:r=e?r+F(t):F(t)+r}var V=String.fromCharCode,O=isNaN,$=Array.isArray;function G(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function H(r){var n,e,t,i,o,a,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(w(t=r[c]))a+=t;else{if(n=void 0!==t.precision,!(t=G(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,O(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!O(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(o)?String(t.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=x(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=y(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=T(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function W(r){var n,e,t,i;for(e=[],i=0,t=M.exec(r);t;)(n=r.slice(i,M.lastIndex-t[0].length)).length&&e.push(n),e.push(P(t)),i=M.lastIndex,t=M.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function C(r){return"string"==typeof r}function L(r){var n,e;if(!C(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[W(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return H.apply(null,n)}var R=Object.prototype,Z=R.toString,q=R.__defineGetter__,X=R.__defineSetter__,Y=R.__lookupGetter__,z=R.__lookupSetter__,B=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(Y.call(r,n)||z.call(r,n)?(t=r.__proto__,r.__proto__=R,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&q&&q.call(r,n,e.get),a&&X&&X.call(r,n,e.set),r};function D(r,n,e){B(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(r){return"number"==typeof r}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"",ir=Q()?function(r){var n,e,t,i,o;if(null==r)return rr.call(r);e=r[tr],o=tr,n=null!=(i=r)&&nr.call(i,o);try{r[tr]=void 0}catch(n){return rr.call(r)}return t=rr.call(r),n?r[tr]=e:delete r[tr],t}:function(r){return rr.call(r)},or=i.prototype.toString,ar=Q();function ur(r){return"object"==typeof r&&(r instanceof i||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function cr(r){return J(r)||ur(r)}function fr(r){return r!=r}D(cr,"isPrimitive",J),D(cr,"isObject",ur);var lr=Math.sqrt;function sr(r){return r!=r}function pr(r){return r!=r}var gr=Math.sqrt,yr=Math.floor;function dr(r){return yr(r)===r}function vr(r){return dr(r/2)}function hr(r){return vr(r>0?r-1:r+1)}function wr(r){return r===n||r===o}function br(r){return Math.abs(r)}var mr,Ar="function"==typeof Uint32Array,_r="function"==typeof Uint32Array?Uint32Array:null,Er="function"==typeof Uint32Array?Uint32Array:void 0;mr=function(){var r,n,e;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Ar&&e instanceof Uint32Array||"[object Uint32Array]"===ir(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Nr,Ur=mr,Sr="function"==typeof Float64Array,Ir="function"==typeof Float64Array?Float64Array:null,jr="function"==typeof Float64Array?Float64Array:void 0;Nr=function(){var r,n,e;if("function"!=typeof Ir)return!1;try{n=new Ir([1,3.14,-3.14,NaN]),e=n,r=(Sr&&e instanceof Float64Array||"[object Float64Array]"===ir(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var kr,xr=Nr,Fr="function"==typeof Uint8Array,Tr="function"==typeof Uint8Array?Uint8Array:null,Vr="function"==typeof Uint8Array?Uint8Array:void 0;kr=function(){var r,n,e;if("function"!=typeof Tr)return!1;try{n=new Tr(n=[1,3.14,-3.14,256,257]),e=n,r=(Fr&&e instanceof Uint8Array||"[object Uint8Array]"===ir(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Or,$r=kr,Gr="function"==typeof Uint16Array,Hr="function"==typeof Uint16Array?Uint16Array:null,Mr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,n,e;if("function"!=typeof Hr)return!1;try{n=new Hr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Gr&&e instanceof Uint16Array||"[object Uint16Array]"===ir(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Pr,Wr={uint16:Or,uint8:$r};(Pr=new Wr.uint16(1))[0]=4660;var Cr,Lr,Rr=52===new Wr.uint8(Pr.buffer)[0];!0===Rr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Zr={HIGH:Cr,LOW:Lr},qr=new xr(1),Xr=new Ur(qr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function Br(r,n,e,t){return qr[0]=r,n[t]=Xr[Yr],n[t+e]=Xr[zr],n}function Dr(r){return Br(r,[0,0],1,0)}D(Dr,"assign",Br);var Jr=!0===Rr?0:1,Kr=new xr(1),Qr=new Ur(Kr.buffer);function rn(r,n){return Kr[0]=r,Qr[Jr]=n>>>0,Kr[0]}function nn(r){return 0|r}var en,tn,on=2147483647,an=!0===Rr?1:0,un=new xr(1),cn=new Ur(un.buffer);function fn(r){return un[0]=r,cn[an]}!0===Rr?(en=1,tn=0):(en=0,tn=1);var ln={HIGH:en,LOW:tn},sn=new xr(1),pn=new Ur(sn.buffer),gn=ln.HIGH,yn=ln.LOW;function dn(r,n){return pn[gn]=r,pn[yn]=n,sn[0]}var vn=[0,0];function hn(r,n){var e,t;return Dr.assign(r,vn,1,0),e=vn[0],e&=on,t=fn(n),dn(e|=t&=2147483648,vn[1])}var wn=!0===Rr?1:0,bn=new xr(1),mn=new Ur(bn.buffer);function An(r,n){return bn[0]=r,mn[wn]=n>>>0,bn[0]}var _n=1023,En=1048576,Nn=[1,1.5],Un=[0,.5849624872207642],Sn=[0,1.350039202129749e-8];function In(r,n,e,t){return pr(r)||wr(r)?(n[t]=r,n[t+e]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}D((function(r){return In(r,[0,0],1,0)}),"assign",In);var jn=[0,0],kn=[0,0];function xn(r,e){var t,i;return 0===e||0===r||pr(r)||wr(r)?r:(In(r,jn,1,0),e+=jn[1],e+=function(r){var n=fn(r);return(n=(2146435072&n)>>>20)-_n|0}(r=jn[0]),e<-1074?hn(0,r):e>1023?r<0?o:n:(e<=-1023?(e+=52,i=2220446049250313e-31):i=1,Dr.assign(r,kn,1,0),t=kn[0],t&=2148532223,i*dn(t|=e+_n<<20,kn[1])))}var Fn=1048575,Tn=1048576,Vn=1083179008,On=1e300,$n=1e-300,Gn=[0,0],Hn=[0,0];function Mn(r,e){var t,i,a,u,c,f,l,s,p,g,y,d,v,h;if(pr(r)||pr(e))return NaN;if(Dr.assign(e,Gn,1,0),c=Gn[0],0===Gn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return gr(r);if(-.5===e)return 1/gr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(wr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(e===n)?0:n}(r,e)}if(Dr.assign(r,Gn,1,0),u=Gn[0],0===Gn[1]){if(0===u)return function(r,e){return e===o?n:e===n?0:e>0?hr(e)?r:0:hr(e)?hn(n,r):n}(r,e);if(1===r)return 1;if(-1===r&&hr(e))return-1;if(wr(r))return r===o?Mn(-0,-e):e<0?0:n}if(r<0&&!1===dr(e))return(r-r)/(r-r);if(a=br(r),t=u&on|0,i=c&on|0,l=c>>>31|0,f=(f=u>>>31|0)&&hr(e)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(fn(r)&on)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,e);if(t<1072693247)return 1===l?f*On*On:f*$n*$n;if(t>1072693248)return 0===l?f*On*On:f*$n*$n;y=function(r,n){var e,t,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=rn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=e,r}(Hn,a)}else y=function(r,n,e){var t,i,o,a,u,c,f,l,s,p,g,y,d,v,h,w,b,m,A,_,E;return m=0,e<En&&(m-=53,e=fn(n*=9007199254740992)),m+=(e>>20)-_n|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=En),a=rn(i=(w=(n=An(n,e))-(f=Nn[_]))*(b=1/(n+f)),0),t=524288+(e>>1|536870912),c=An(0,t+=_<<18),h=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=rn(c=3+(o=a*a)+(h+=(u=b*(w-a*c-a*(n-(c-f))))*(a+i)),0),d=(g=-7.028461650952758e-9*(s=rn(s=(w=a*c)+(b=u*c+(h-(c-3-o))*i),0))+.9617966939259756*(b-(s-w))+Sn[_])-((y=rn(y=(p=.9617967009544373*s)+g+(l=Un[_])+(v=m),0))-v-l-p),r[0]=y,r[1]=d,r}(Hn,a,t);if(d=(g=(e-(s=rn(e,0)))*y[0]+e*y[1])+(p=s*y[0]),Dr.assign(d,Gn,1,0),v=nn(Gn[0]),h=nn(Gn[1]),v>=Vn){if(0!=(v-Vn|h))return f*On*On;if(g+8008566259537294e-32>d-p)return f*On*On}else if((v&on)>=1083231232){if(0!=(v-3230714880|h))return f*$n*$n;if(g<=d-p)return f*$n*$n}return d=function(r,n,e){var t,i,o,a,u,c,f,l,s,p;return s=((l=r&on|0)>>20)-_n|0,f=0,l>1071644672&&(i=An(0,((f=r+(Tn>>s+1)>>>0)&~(Fn>>(s=((f&on)>>20)-_n|0)))>>>0),f=(f&Fn|Tn)>>20-s>>>0,r<0&&(f=-f),n-=i),r=nn(r=fn(c=1-((c=(o=.6931471824645996*(i=rn(i=e+n,0)))+(a=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?xn(c,f):An(c,r)}(v,p,g),f*d}function Pn(r){return r!=r}return function(){var i,l,s,p,g,y,d,v,h,w,b,m,A,_;return y=function(){var r=0;return function(){return 0===arguments.length?r:r+=1}}(),m=function(){var r,n,e,t,i,o,a;return r=0,n=0,t=0,function(u){return 0===arguments.length?e?r+t+n:null:(e=!0,o=r+u,a=f(r)>=f(u)?r-o+u:u-o+r,r=o,o=t+a,i=f(t)>=f(a)?t-o+a:a-o+t,r+(t=o)+(n+=i))}}(),A=0,_=0,h=function(r){return 0===arguments.length?0===_?null:A:A+=(r-A)/(_+=1)},l=function(r){var n,e,t,i;if(t=0,i=0,arguments.length){if(!J(r))throw new TypeError(L("invalid argument. Must provide a number. Value: `%s`.",r));return e=r,a}return e=0,o;function o(r){return 0===arguments.length?0===i?null:1===i?fr(t)?NaN:0:t/(i-1):(t+=(n=r-e)*(r-(e+=n/(i+=1))),i<2?fr(t)?NaN:0:t/(i-1))}function a(r){return 0===arguments.length?0===i?null:t/i:(t+=(n=r-e)*n)/(i+=1)}}(),v=function(r){var n,e,t,i;if(t=0,i=0,arguments.length){if(!J(r))throw new TypeError(L("invalid argument. Must provide a number. Value: `%s`.",r));return e=r,a}return e=0,o;function o(r){return 0===arguments.length?0===i?null:1===i?sr(t)?NaN:0:lr(t/(i-1)):(t+=(n=r-e)*(r-(e+=n/(i+=1))),i<2?sr(t)?NaN:0:lr(t/(i-1)))}function a(r){return 0===arguments.length?0===i?null:lr(t/i):lr((t+=(n=r-e)*n)/(i+=1))}}(),s=function(){var r,n,e,t,i,o,a,u,c;return r=0,n=0,e=0,t=0,a=0,u=0,c=0,function(f){return 0===arguments.length||(i=(e=(n=f-t)*(r=n/(c+=1))*(c-1))*r*(c-2),u+=i-=3*r*a,a+=e,t+=r),c<3?pr(u)?NaN:null:(o=gr(c)*u/Mn(a,1.5),gr(c*(c-1))*o/(c-2))}}(),p=function(){var r,n,e,t,i,o,a,u,c,f;return r=0,n=0,e=0,t=0,i=0,a=0,u=0,c=0,f=0,function(l){return 0===arguments.length||(o=(t=(e=l-i)*(n=e/(f+=1))*(f-1))*(r=n*n)*(f*f-3*f+3),o+=6*r*a,c+=o-=4*n*u,o=t*n*(f-2),u+=o-=3*n*a,a+=t,i+=n),f<4?Pn(c)?NaN:null:(f-1)/((f-2)*(f-3))*((f+1)*(f*c/(a*a)-3)+6)}}(),w=function(){var n;return function(t){return 0===arguments.length?void 0===n?null:n:((void 0===n||t>n||r(t)||t===n&&e(t))&&(n=t),n)}}(),b=function(){var r;return function(n){return 0===arguments.length?void 0===r?null:r:((void 0===r||n<r||t(n)||n===r&&a(n))&&(r=n),r)}}(),d=function(){var r,e=o,t=n;return function(n){return 0===arguments.length?void 0===r?null:r:(u(n)&&(t=n,e=n),n>e&&(e=n),n<t&&(t=n),r=e-t)}}(),i=function(){var r,e=o,t=n;return function(n){return 0===arguments.length?void 0===r?null:r/2:(c(n)&&(t=n,e=n),n>e&&(e=n),n<t&&(t=n),(r=e+t)/2)}}(),g={},function(r){return 0===arguments.length||(g.count=y(r),g.max=w(r),g.min=b(r),g.range=d(r),g.midrange=i(r),g.sum=m(r),g.mean=h(r),g.variance=l(r),g.stdev=v(r),g.skewness=s(r),g.kurtosis=p(r)),g}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).incrsummary=n();
//# sourceMappingURL=browser.js.map
