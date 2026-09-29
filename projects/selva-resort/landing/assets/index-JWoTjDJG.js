var Td=Object.defineProperty;var Ed=(i,t,e)=>t in i?Td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Nt=(i,t,e)=>Ed(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="170",Ad=0,Zc=1,Cd=2,au=1,lu=2,li=3,Di=0,Je=1,Ee=2,di=0,Cs=1,Br=2,Kc=3,Jc=4,Rd=5,Zi=100,Pd=101,Ld=102,Dd=103,Id=104,Ud=200,kd=201,Fd=202,zd=203,ol=204,rl=205,Nd=206,Od=207,Gd=208,Hd=209,Vd=210,Bd=211,Wd=212,Xd=213,qd=214,al=0,ll=1,cl=2,Ls=3,hl=4,ul=5,dl=6,fl=7,rc=0,Yd=1,jd=2,fi=0,cu=1,hu=2,uu=3,ac=4,$d=5,du=6,lc=7,Qc="attached",Zd="detached",fu=300,Ds=301,Is=302,pl=303,ml=304,Kr=306,Wr=1e3,Ji=1001,gl=1002,yn=1003,Kd=1004,Oo=1005,Rn=1006,fa=1007,$n=1008,mi=1009,pu=1010,mu=1011,To=1012,cc=1013,ts=1014,Gn=1015,Vn=1016,hc=1017,uc=1018,Us=1020,gu=35902,vu=1021,bu=1022,bn=1023,xu=1024,yu=1025,Rs=1026,ks=1027,dc=1028,fc=1029,wu=1030,pc=1031,mc=1033,Ur=33776,kr=33777,Fr=33778,zr=33779,vl=35840,bl=35841,xl=35842,yl=35843,wl=36196,_l=37492,Ml=37496,Sl=37808,Tl=37809,El=37810,Al=37811,Cl=37812,Rl=37813,Pl=37814,Ll=37815,Dl=37816,Il=37817,Ul=37818,kl=37819,Fl=37820,zl=37821,Nr=36492,Nl=36494,Ol=36495,_u=36283,Gl=36284,Hl=36285,Vl=36286,Jd=3200,Bl=3201,gc=0,Qd=1,hi="",cn="srgb",Vs="srgb-linear",Jr="linear",be="srgb",as=7680,th=519,tf=512,ef=513,nf=514,Mu=515,sf=516,of=517,rf=518,af=519,eh=35044,Eo=35048,nh="300 es",ui=2e3,Xr=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const bo=Math.PI/180,Ao=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cf(i,t,e){return i!==t?(e-i)/(t-i):0}function xo(i,t,e){return(1-e)*i+e*t}function hf(i,t,e,n){return xo(i,t,1-Math.exp(-e*n))}function uf(i,t=1){return t-Math.abs(vc(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(i){return i*bo}function xf(i){return i*Ao}function yf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xn={DEG2RAD:bo,RAD2DEG:Ao,generateUUID:ki,clamp:Ne,euclideanModulo:vc,mapLinear:lf,inverseLerp:cf,lerp:xo,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:vf,degToRad:bf,radToDeg:xf,isPowerOfTwo:yf,ceilPowerOfTwo:wf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:Mf,normalize:nn,denormalize:Ms};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,o,r,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],b=s[1],y=s[4],x=s[7],T=s[2],M=s[5],A=s[8];return o[0]=r*v+a*b+l*T,o[3]=r*g+a*y+l*M,o[6]=r*m+a*x+l*A,o[1]=c*v+h*b+u*T,o[4]=c*g+h*y+u*M,o[7]=c*m+h*x+u*A,o[2]=d*v+f*b+p*T,o[5]=d*g+f*y+p*M,o[8]=d*m+f*x+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new te;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){const i=qr("canvas");return i.style.display="block",i}const sh={};function go(i){i in sh||(sh[i]=!0,console.warn(i))}function Tf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ef(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Af(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?Jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const oh=[.64,.33,.3,.6,.15,.06],rh=[.2126,.7152,.0722],ah=[.3127,.329],lh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Vs]:{primaries:oh,whitePoint:ah,transfer:Jr,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:rh,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:oh,whitePoint:ah,transfer:be,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:rh,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let ls;class Cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=qr("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=pi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ma(s[r].image)):o.push(ma(s[r]))}else o=ma(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class Qe extends Bs{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Ji,s=Ji,o=Rn,r=$n,a=bn,l=mi,c=Qe.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ki(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=fu;Qe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,T=(m+1)/2,M=(h+d)/4,A=(u+v)/4,S=(p+g)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=M/n,o=A/n):x>T?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=M/s,o=S/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=A/o,s=S/o),this.set(n,s,o,e),this}let b=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],p=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*v,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const T=Math.sqrt(y),M=Math.atan2(T,m*b);g=Math.sin(g*M)/T,a=Math.sin(a*M)/T}const x=a*b;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+v*x,g===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),f=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new D,hh=new pe;class tn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Un):Un.fromBufferAttribute(o,r),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Ho.subVectors(this.max,Ks),cs.subVectors(t.a,Ks),hs.subVectors(t.b,Ks),us.subVectors(t.c,Ks),yi.subVectors(hs,cs),wi.subVectors(us,hs),Ni.subVectors(cs,us);let e=[0,-yi.z,yi.y,0,-wi.z,wi.y,0,-Ni.z,Ni.y,yi.z,0,-yi.x,wi.z,0,-wi.x,Ni.z,0,-Ni.x,-yi.y,yi.x,0,-wi.y,wi.x,0,-Ni.y,Ni.x,0];return!va(e,cs,hs,us,Ho)||(e=[1,0,0,0,1,0,0,0,1],!va(e,cs,hs,us,Ho))?!1:(Vo.crossVectors(yi,wi),e=[Vo.x,Vo.y,Vo.z],va(e,cs,hs,us,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,Go=new tn,cs=new D,hs=new D,us=new D,yi=new D,wi=new D,Ni=new D,Ks=new D,Ho=new D,Vo=new D,Oi=new D;function va(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Oi.fromArray(i,o);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const If=new tn,Js=new D,ba=new D;class Kn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(ba)),this.expandByPoint(Js.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new D,xa=new D,Bo=new D,_i=new D,ya=new D,Wo=new D,wa=new D;class Qr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(xa);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Bo),a=_i.dot(this.direction),l=-_i.dot(Bo),c=_i.lengthSq(),h=Math.abs(1-r*r);let u,d,f,p;if(h>0)if(u=r*l-a,d=r*a-l,p=o*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xa).addScaledVector(Bo,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,o){ya.subVectors(e,t),Wo.subVectors(n,t),wa.crossVectors(ya,Wo);let r=this.direction.dot(wa),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(Wo.crossVectors(_i,Wo));if(l<0)return null;const c=a*this.direction.dot(ya.cross(_i));if(c<0||l+c>r)return null;const h=-a*_i.dot(wa);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g)}set(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),o=1/ds.setFromMatrixColumn(t,1).length(),r=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,kf)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Mi.crossVectors(n,pn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Mi.crossVectors(n,pn)),Mi.normalize(),Xo.crossVectors(pn,Mi),s[0]=Mi.x,s[4]=Xo.x,s[8]=pn.x,s[1]=Mi.y,s[5]=Xo.y,s[9]=pn.y,s[2]=Mi.z,s[6]=Xo.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],b=n[3],y=n[7],x=n[11],T=n[15],M=s[0],A=s[4],S=s[8],_=s[12],w=s[1],E=s[5],U=s[9],L=s[13],z=s[2],O=s[6],F=s[10],$=s[14],H=s[3],st=s[7],ot=s[11],lt=s[15];return o[0]=r*M+a*w+l*z+c*H,o[4]=r*A+a*E+l*O+c*st,o[8]=r*S+a*U+l*F+c*ot,o[12]=r*_+a*L+l*$+c*lt,o[1]=h*M+u*w+d*z+f*H,o[5]=h*A+u*E+d*O+f*st,o[9]=h*S+u*U+d*F+f*ot,o[13]=h*_+u*L+d*$+f*lt,o[2]=p*M+v*w+g*z+m*H,o[6]=p*A+v*E+g*O+m*st,o[10]=p*S+v*U+g*F+m*ot,o[14]=p*_+v*L+g*$+m*lt,o[3]=b*M+y*w+x*z+T*H,o[7]=b*A+y*E+x*O+T*st,o[11]=b*S+y*U+x*F+T*ot,o[15]=b*_+y*L+x*$+T*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+g*(+e*c*u-e*a*f-o*r*u+n*r*f+o*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],b=u*g*c-v*d*c+v*l*f-a*g*f-u*l*m+a*d*m,y=p*d*c-h*g*c-p*l*f+r*g*f+h*l*m-r*d*m,x=h*v*c-p*u*c+p*a*f-r*v*f-h*a*m+r*u*m,T=p*u*l-h*v*l-p*a*d+r*v*d+h*a*g-r*u*g,M=e*b+n*y+s*x+o*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return t[0]=b*A,t[1]=(v*d*o-u*g*o-v*s*f+n*g*f+u*s*m-n*d*m)*A,t[2]=(a*g*o-v*l*o+v*s*c-n*g*c-a*s*m+n*l*m)*A,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=y*A,t[5]=(h*g*o-p*d*o+p*s*f-e*g*f-h*s*m+e*d*m)*A,t[6]=(p*l*o-r*g*o-p*s*c+e*g*c+r*s*m-e*l*m)*A,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*A,t[8]=x*A,t[9]=(p*u*o-h*v*o-p*n*f+e*v*f+h*n*m-e*u*m)*A,t[10]=(r*v*o-p*a*o+p*n*c-e*v*c-r*n*m+e*a*m)*A,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*f-e*a*f)*A,t[12]=T*A,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*g+e*u*g)*A,t[14]=(p*a*s-r*v*s-p*n*l+e*v*l+r*n*g-e*a*g)*A,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,p=o*u,v=r*h,g=r*u,m=a*u,b=l*c,y=l*h,x=l*u,T=n.x,M=n.y,A=n.z;return s[0]=(1-(v+m))*T,s[1]=(f+x)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(g+b)*M,s[7]=0,s[8]=(p+y)*A,s[9]=(g-b)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ds.set(s[0],s[1],s[2]).length();const r=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);const c=1/o,h=1/r,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=ui){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===ui)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===Xr)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ui){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,f=(n+s)*h;let p,v;if(a===ui)p=(r+o)*u,v=-2*u;else if(a===Xr)p=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new D,kn=new At,Uf=new D(0,0,0),kf=new D(1,1,1),Mi=new D,Xo=new D,pn=new D,uh=new At,dh=new pe;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const fh=new D,fs=new pe,ii=new At,qo=new D,Qs=new D,zf=new D,Nf=new pe,ph=new D(1,0,0),mh=new D(0,1,0),gh=new D(0,0,1),vh={type:"added"},Of={type:"removed"},ps={type:"childadded",child:null},_a={type:"childremoved",child:null};class Ge extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new D,e=new on,n=new pe,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new te}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qo.copy(t):qo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Qs,qo,this.up):ii.lookAt(qo,Qs,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ii),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new D(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new D,si=new D,Ma=new D,oi=new D,ms=new D,gs=new D,bh=new D,Sa=new D,Ta=new D,Ea=new D,Aa=new ae,Ca=new ae,Ra=new ae;class On{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Fn.subVectors(s,e),si.subVectors(n,e),Ma.subVectors(t,e);const r=Fn.dot(Fn),a=Fn.dot(si),l=Fn.dot(Ma),c=si.dot(si),h=si.dot(Ma),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(r*h-a*l)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,oi.x),l.addScaledVector(r,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Aa.setScalar(0),Ca.setScalar(0),Ra.setScalar(0),Aa.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Aa,o.x),r.addScaledVector(Ca,o.y),r.addScaledVector(Ra,o.z),r}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),si.subVectors(t,e),Fn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return On.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ms.subVectors(s,n),gs.subVectors(o,n),Sa.subVectors(t,n);const l=ms.dot(Sa),c=gs.dot(Sa);if(l<=0&&c<=0)return e.copy(n);Ta.subVectors(t,s);const h=ms.dot(Ta),u=gs.dot(Ta);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ms,r);Ea.subVectors(t,o);const f=ms.dot(Ea),p=gs.dot(Ea);if(p>=0&&f<=p)return e.copy(o);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(gs,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return bh.subVectors(o,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(bh,a);const m=1/(g+v+d);return r=v*m,a=d*m,e.copy(n).addScaledVector(ms,r).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=vc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Pa(r,o,t+1/3),this.g=Pa(r,o,t),this.b=Pa(r,o,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return re.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Ne(Ke.r*255,0,255))*65536+Math.round(Ne(Ke.g*255,0,255))*256+Math.round(Ne(Ke.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,o=Ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=cn){re.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Yo);const n=xo(Si.h,Yo.h,e),s=xo(Si.s,Yo.s,e),o=xo(Si.l,Yo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ut;ut.NAMES=Au;let Gf=0;class ss extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ki(),this.name="",this.blending=Cs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=rl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hn extends ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new D,jo=new ht;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),o=nn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}}class xc extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cu extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const Mn=new At,La=new Ge,vs=new D,mn=new tn,to=new tn,We=new D;class ge extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?Cu:xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];to.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(mn.min,to.min),mn.expandByPoint(We),We.addVectors(mn.max,to.max),mn.expandByPoint(We)):(mn.expandByPoint(to.min),mn.expandByPoint(to.max))}mn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)We.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(We));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),We.add(vs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new D,l[S]=new D;const c=new D,h=new D,u=new D,d=new ht,f=new ht,p=new ht,v=new D,g=new D;function m(S,_,w){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),d.fromBufferAttribute(o,S),f.fromBufferAttribute(o,_),p.fromBufferAttribute(o,w),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(E),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(E),a[S].add(v),a[_].add(v),a[w].add(v),l[S].add(g),l[_].add(g),l[w].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let S=0,_=b.length;S<_;++S){const w=b[S],E=w.start,U=w.count;for(let L=E,z=E+U;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new D,x=new D,T=new D,M=new D;function A(S){T.fromBufferAttribute(s,S),M.copy(T);const _=a[S];y.copy(_),y.sub(T.multiplyScalar(T.dot(_))).normalize(),x.crossVectors(M,_);const E=x.dot(l[S])<0?-1:1;r.setXYZW(S,y.x,y.y,y.z,E)}for(let S=0,_=b.length;S<_;++S){const w=b[S],E=w.start,U=w.count;for(let L=E,z=E+U;L<z;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new At,Gi=new Qr,$o=new Kn,yh=new D,Zo=new D,Ko=new D,Jo=new D,Da=new D,Qo=new D,wh=new D,tr=new D;class Xt extends Ge{constructor(t=new ge,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Qo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Da.fromBufferAttribute(u,t),r?Qo.addScaledVector(Da,h):Qo.addScaledVector(Da.sub(e),h))}e.add(Qo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(o),Gi.copy(t.ray).recast(t.near),!($o.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere($o,yh)===null||Gi.origin.distanceToSquared(yh)>(t.far-t.near)**2))&&(xh.copy(o).invert(),Gi.copy(t.ray).applyMatrix4(xh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,T=y;x<T;x+=3){const M=a.getX(x),A=a.getX(x+1),S=a.getX(x+2);s=er(this,m,t,n,c,h,u,M,A,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const b=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=er(this,r,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,T=y;x<T;x+=3){const M=x,A=x+1,S=x+2;s=er(this,m,t,n,c,h,u,M,A,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const b=g,y=g+1,x=g+2;s=er(this,r,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Vf(i,t,e,n,s,o,r,a){let l;if(t.side===Je?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Di,a),l===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:i}}function er(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Zo),i.getVertexPosition(l,Ko),i.getVertexPosition(c,Jo);const h=Vf(i,t,e,n,Zo,Ko,Jo,wh);if(h){const u=new D;On.getBarycoord(wh,Zo,Ko,Jo,u),s&&(h.uv=On.getInterpolatedAttribute(s,a,l,c,u,new ht)),o&&(h.uv1=On.getInterpolatedAttribute(o,a,l,c,u,new ht)),r&&(h.normal=On.getInterpolatedAttribute(r,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};On.getNormal(Zo,Ko,Jo,d.normal),h.face=d,h.barycoord=u}return h}class Ae extends ge{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function p(v,g,m,b,y,x,T,M,A,S,_){const w=x/A,E=T/S,U=x/2,L=T/2,z=M/2,O=A+1,F=S+1;let $=0,H=0;const st=new D;for(let ot=0;ot<F;ot++){const lt=ot*E-L;for(let Mt=0;Mt<O;Mt++){const pt=Mt*w-U;st[v]=pt*b,st[g]=lt*y,st[m]=z,c.push(st.x,st.y,st.z),st[v]=0,st[g]=0,st[m]=M>0?1:-1,h.push(st.x,st.y,st.z),u.push(Mt/A),u.push(1-ot/S),$+=1}}for(let ot=0;ot<S;ot++)for(let lt=0;lt<A;lt++){const Mt=d+lt+O*ot,pt=d+lt+O*(ot+1),Z=d+(lt+1)+O*(ot+1),nt=d+(lt+1)+O*ot;l.push(Mt,pt,nt),l.push(pt,Z,nt),H+=6}a.addGroup(f,H,_),f+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=Fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Bf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ru(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const zs={clone:Fs,merge:sn};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pu extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new D,_h=new ht,Mh=new ht;class hn extends Pu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,_h,Mh),e.subVectors(Mh,_h)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,xs=1;class qf extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(bs,xs,t,e);s.layers=this.layers,this.add(s);const o=new hn(bs,xs,t,e);o.layers=this.layers,this.add(o);const r=new hn(bs,xs,t,e);r.layers=this.layers,this.add(r);const a=new hn(bs,xs,t,e);a.layers=this.layers,this.add(a);const l=new hn(bs,xs,t,e);l.layers=this.layers,this.add(l);const c=new hn(bs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Lu extends Qe{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yf extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ae(5,5,5),o=new Ce({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:di});o.uniforms.tEquirect.value=e;const r=new Xt(s,o),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=Rn),new qf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Ia=new D,jf=new D,$f=new te;class Yi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$f.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Kn,nr=new D;class ta{constructor(t=new Yi,e=new Yi,n=new Yi,s=new Yi,o=new Yi,r=new Yi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-o,d-c,g-f,x-m).normalize(),n[1].setComponents(l+o,d+c,g+f,x+m).normalize(),n[2].setComponents(l+r,d+h,g+p,x+b).normalize(),n[3].setComponents(l-r,d-h,g-p,x-b).normalize(),n[4].setComponents(l-a,d-u,g-v,x-y).normalize(),e===ui)n[5].setComponents(l+a,d+u,g+v,x+y).normalize();else if(e===Xr)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Zf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Me extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const b=m*d-r;for(let y=0;y<c;y++){const x=y*u-o;p.push(x,-b,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const y=b+c*m,x=b+c*(m+1),T=b+1+c*(m+1),M=b+1+c*m;f.push(y,x,M),f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:op,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:bp,color_vertex:xp,common:yp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:_p,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ep,colorspace_fragment:Ap,colorspace_pars_fragment:Cp,envmap_fragment:Rp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Bp,envmap_vertex:Ip,fog_vertex:Up,fog_pars_vertex:kp,fog_fragment:Fp,fog_pars_fragment:zp,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Op,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:jp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:om,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:bm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:Mm,opaque_fragment:Sm,packing:Tm,premultiplied_alpha_fragment:Em,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Im,shadowmap_vertex:Um,shadowmask_pars_fragment:km,skinbase_vertex:Fm,skinning_pars_vertex:zm,skinning_vertex:Nm,skinnormal_vertex:Om,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Bm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:$m,background_vert:Zm,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:s1,distanceRGBA_frag:o1,equirect_vert:r1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:h1,meshbasic_frag:u1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:b1,meshphong_frag:x1,meshphysical_vert:y1,meshphysical_frag:w1,meshtoon_vert:_1,meshtoon_frag:M1,points_vert:S1,points_frag:T1,shadow_vert:E1,shadow_frag:A1,sprite_vert:C1,sprite_frag:R1},Et={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Yn={basic:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ut(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ut(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Et.points,Et.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Et.common,Et.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Et.sprite,Et.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:sn([Et.common,Et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:sn([Et.lights,Et.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Yn.physical={uniforms:sn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ir={r:0,b:0,g:0},Vi=new on,P1=new At;function L1(i,t,e,n,s,o,r){const a=new ut(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const x=p(b);x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===Kr)?(h===void 0&&(h=new Xt(new Ae(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Fs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Vi)),h.material.toneMapped=re.getTransfer(x.colorSpace)!==be,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new Me(2,2),new Ce({name:"BackgroundMaterial",uniforms:Fs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(ir,Ru(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:v,addToRenderList:g}}function D1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(w,E,U,L,z){let O=!1;const F=u(L,U,E);o!==F&&(o=F,c(o.object)),O=f(w,L,U,z),O&&p(w,L,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,x(w,E,U,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,E,U){const L=U.wireframe===!0;let z=n[w.id];z===void 0&&(z={},n[w.id]=z);let O=z[E.id];O===void 0&&(O={},z[E.id]=O);let F=O[L];return F===void 0&&(F=d(l()),O[L]=F),F}function d(w){const E=[],U=[],L=[];for(let z=0;z<e;z++)E[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,E,U,L){const z=o.attributes,O=E.attributes;let F=0;const $=U.getAttributes();for(const H in $)if($[H].location>=0){const ot=z[H];let lt=O[H];if(lt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),ot===void 0||ot.attribute!==lt||lt&&ot.data!==lt.data)return!0;F++}return o.attributesNum!==F||o.index!==L}function p(w,E,U,L){const z={},O=E.attributes;let F=0;const $=U.getAttributes();for(const H in $)if($[H].location>=0){let ot=O[H];ot===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor));const lt={};lt.attribute=ot,ot&&ot.data&&(lt.data=ot.data),z[H]=lt,F++}o.attributes=z,o.attributesNum=F,o.index=L}function v(){const w=o.newAttributes;for(let E=0,U=w.length;E<U;E++)w[E]=0}function g(w){m(w,0)}function m(w,E){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),z[w]!==E&&(i.vertexAttribDivisor(w,E),z[w]=E)}function b(){const w=o.newAttributes,E=o.enabledAttributes;for(let U=0,L=E.length;U<L;U++)E[U]!==w[U]&&(i.disableVertexAttribArray(U),E[U]=0)}function y(w,E,U,L,z,O,F){F===!0?i.vertexAttribIPointer(w,E,U,z,O):i.vertexAttribPointer(w,E,U,L,z,O)}function x(w,E,U,L){v();const z=L.attributes,O=U.getAttributes(),F=E.defaultAttributeValues;for(const $ in O){const H=O[$];if(H.location>=0){let st=z[$];if(st===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),st!==void 0){const ot=st.normalized,lt=st.itemSize,Mt=t.get(st);if(Mt===void 0)continue;const pt=Mt.buffer,Z=Mt.type,nt=Mt.bytesPerElement,mt=Z===i.INT||Z===i.UNSIGNED_INT||st.gpuType===cc;if(st.isInterleavedBufferAttribute){const X=st.data,Q=X.stride,tt=st.offset;if(X.isInstancedInterleavedBuffer){for(let j=0;j<H.locationSize;j++)m(H.location+j,X.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<H.locationSize;j++)g(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let j=0;j<H.locationSize;j++)y(H.location+j,lt/H.locationSize,Z,ot,Q*nt,(tt+lt/H.locationSize*j)*nt,mt)}else{if(st.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)m(H.location+X,st.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let X=0;X<H.locationSize;X++)g(H.location+X);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let X=0;X<H.locationSize;X++)y(H.location+X,lt/H.locationSize,Z,ot,lt*nt,lt/H.locationSize*X*nt,mt)}}else if(F!==void 0){const ot=F[$];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(H.location,ot);break;case 3:i.vertexAttrib3fv(H.location,ot);break;case 4:i.vertexAttrib4fv(H.location,ot);break;default:i.vertexAttrib1fv(H.location,ot)}}}}b()}function T(){S();for(const w in n){const E=n[w];for(const U in E){const L=E[U];for(const z in L)h(L[z].object),delete L[z];delete E[U]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const E=n[w.id];for(const U in E){const L=E[U];for(const z in L)h(L[z].object),delete L[z];delete E[U]}delete n[w.id]}function A(w){for(const E in n){const U=n[E];if(U[w.id]===void 0)continue;const L=U[w.id];for(const z in L)h(L[z].object),delete L[z];delete U[w.id]}}function S(){_(),r=!0,o!==s&&(o=s,c(o.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function I1(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)r(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U1(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const S=A===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!S)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:M}}function k1(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Yi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||o&&!g)o?h(null):c();else{const b=o?0:n,y=b*4;let x=m.clippingState||null;l.value=x,x=h(p,d,y,f);for(let T=0;T!==y;++T)x[T]=e[T];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)r.copy(u[y]).applyMatrix4(b,a),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function F1(i){let t=new WeakMap;function e(r,a){return a===pl?r.mapping=Ds:a===ml&&(r.mapping=Is),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===pl||a===ml)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Yf(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ea extends Pu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,Sh=[.125,.215,.35,.446,.526,.582],Ki=20,Ua=new ea,Th=new ut;let ka=null,Fa=0,za=0,Na=!1;const ji=(1+Math.sqrt(5))/2,ys=1/ji,Eh=[new D(-ji,ys,0),new D(ji,ys,0),new D(-ys,0,ji),new D(ys,0,ji),new D(0,ji,-ys),new D(0,ji,ys),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Yr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ka=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Fa,za),this._renderer.xr.enabled=Na,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Vn,format:bn,colorSpace:Vs,depthBuffer:!1},s=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(o)),this._blurMaterial=N1(o,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){const a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Th),h.toneMapping=fi,h.autoClear=!1;const f=new Hn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),p=new Xt(new Ae,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Th),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;sr(s,b*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Eh[(s-o-1)%Eh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),v=o/p,g=isFinite(o)?1+Math.floor(h*v):Ki;g>Ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ki}`);const m=[];let b=0;for(let A=0;A<Ki;++A){const S=A/v,_=Math.exp(-S*S/2);m.push(_),A===0?b+=_:A<g&&(b+=2*_)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const x=this._sizeLods[s],T=3*x*(s>y-Ss?s-y+Ss:0),M=4*(this._cubeSize-x);sr(e,T,M,3*x,2*x),l.setRenderTarget(e),l.render(u,Ua)}}function z1(i){const t=[],e=[],n=[];let s=i;const o=i-Ss+1+Sh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ss?l=Sh[r-i+Ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,b=new Float32Array(v*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let M=0;M<f;M++){const A=M%3*2/3-1,S=M>2?0:-1,_=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];b.set(_,v*p*M),y.set(d,g*p*M);const w=[M,M,M,M,M,M];x.set(w,m*p*M)}const T=new ge;T.setAttribute("position",new Pe(b,v)),T.setAttribute("uv",new Pe(y,g)),T.setAttribute("faceIndex",new Pe(x,m)),t.push(T),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(i,t,e){const n=new dn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N1(i,t,e){const n=new Float32Array(Ki),s=new D(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ch(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Rh(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pl||l===ml,h=l===Ds||l===Is;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function G1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H1(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let y=0,x=b.length;y<x;y+=3){const T=b[y+0],M=b[y+1],A=b[y+2];d.push(T,M,M,A,A,T)}}else if(p!==void 0){const b=p.array;v=p.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const T=y+0,M=y+1,A=y+2;d.push(T,M,M,A,A,T)}}else return;const g=new(Su(d)?Cu:xc)(d,1);g.version=v;const m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V1(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/r,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*v[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function W1(i,t,e){const n=new WeakMap,s=new ae;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let T=a.attributes.position.count*x,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*M*4*u),S=new Eu(A,T,M,u);S.type=Gn,S.needsUpdate=!0;const _=x*4;for(let E=0;E<u;E++){const U=m[E],L=b[E],z=y[E],O=T*M*4*E;for(let F=0;F<U.count;F++){const $=F*_;p===!0&&(s.fromBufferAttribute(U,F),A[O+$+0]=s.x,A[O+$+1]=s.y,A[O+$+2]=s.z,A[O+$+3]=0),v===!0&&(s.fromBufferAttribute(L,F),A[O+$+4]=s.x,A[O+$+5]=s.y,A[O+$+6]=s.z,A[O+$+7]=0),g===!0&&(s.fromBufferAttribute(z,F),A[O+$+8]=s.x,A[O+$+9]=s.y,A[O+$+10]=s.z,A[O+$+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:S,size:new ht(T,M)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function X1(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Iu extends Qe{constructor(t,e,n,s,o,r,a,l,c,h=Rs){if(h!==Rs&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=ts),n===void 0&&h===ks&&(n=Us),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uu=new Qe,Ph=new Iu(1,1),ku=new Eu,Fu=new Df,zu=new Lu,Lh=[],Dh=[],Ih=new Float32Array(16),Uh=new Float32Array(9),kh=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Lh[s];if(o===void 0&&(o=new Float32Array(s),Lh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Y1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function j1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Z1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Be(e,n)}}function K1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Be(e,n)}}function J1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Be(e,n)}}function Q1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=Mu,o=Ph):o=Uu,e.setTexture2D(t||o,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fu,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function ug(i){switch(i){case 5126:return q1;case 35664:return Y1;case 35665:return j1;case 35666:return $1;case 35674:return Z1;case 35675:return K1;case 35676:return J1;case 5124:case 35670:return Q1;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return og;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function pg(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function mg(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function gg(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bg(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function wg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function Mg(i,t){i.uniform1uiv(this.addr,t)}function Sg(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){const n=this.cache,s=t.length,o=na(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Uu,o[r])}function Cg(i,t,e){const n=this.cache,s=t.length,o=na(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Fu,o[r])}function Rg(i,t,e){const n=this.cache,s=t.length,o=na(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||zu,o[r])}function Pg(i,t,e){const n=this.cache,s=t.length,o=na(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ku,o[r])}function Lg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return vg;case 35676:return bg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return wg;case 35669:case 35673:return _g;case 5125:return Mg;case 36294:return Sg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}}class Ug{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Fh(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const o=Oa.exec(n),r=Oa.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Fh(e,c===void 0?new Dg(a,i,t):new Ig(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ug(a),Fh(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);kg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fg=37297;let zg=0;function Ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Nh=new te;function Og(i){re._getMatrix(Nh,re.workingColorSpace,i);const t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(t),r)}else return s}function Gg(i,t){const e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hg(i,t){let e;switch(t){case cu:e="Linear";break;case hu:e="Reinhard";break;case uu:e="Cineon";break;case ac:e="ACESFilmic";break;case du:e="AgX";break;case lc:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const or=new D;function Vg(){re.getLuminanceCoefficients(or);const i=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function vo(i){return i!==""}function Gh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(qg,jg)}const Yg=new Map;function jg(i,t){let e=ne[t];if(e===void 0){const n=Yg.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace($g,Zg)}function Zg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Bh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Is:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function t2(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case jd:t="ENVMAP_BLENDING_ADD";break}return t}function e2(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n2(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Kg(e),c=Jg(e),h=Qg(e),u=t2(e),d=e2(e),f=Bg(e),p=Wg(o),v=s.createProgram();let g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(g=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ne.tonemapping_pars_fragment:"",e.toneMapping!==fi?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),r=Wl(r),r=Gh(r,e),r=Hh(r,e),a=Wl(a),a=Gh(a,e),a=Hh(a,e),r=Vh(r),a=Vh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+g+r,x=b+m+a,T=zh(s,s.VERTEX_SHADER,y),M=zh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,T),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(E){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(M).trim();let O=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,M);else{const $=Oh(s,T,"vertex"),H=Oh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+$+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(F=!1);F&&(E.diagnostics={runnable:O,programLog:U,vertexShader:{log:L,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(T),s.deleteShader(M),S=new Or(s,v),_=Xg(s,v)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,Fg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}let i2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o2(t),e.set(t,n)),n}}class o2{constructor(t){this.id=i2++,this.code=t,this.usedTimes=0}}function r2(i,t,e,n,s,o,r){const a=new bc,l=new s2,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,w,E,U,L){const z=U.fog,O=L.geometry,F=_.isMeshStandardMaterial?U.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||F),H=$&&$.mapping===Kr?$.image.height:null,st=p[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=ot!==void 0?ot.length:0;let Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let pt,Z,nt,mt;if(st){const ve=Yn[st];pt=ve.vertexShader,Z=ve.fragmentShader}else pt=_.vertexShader,Z=_.fragmentShader,l.update(_),nt=l.getVertexShaderID(_),mt=l.getFragmentShaderID(_);const X=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),tt=L.isInstancedMesh===!0,j=L.isBatchedMesh===!0,it=!!_.map,G=!!_.matcap,k=!!$,R=!!_.aoMap,gt=!!_.lightMap,et=!!_.bumpMap,bt=!!_.normalMap,vt=!!_.displacementMap,Ut=!!_.emissiveMap,St=!!_.metalnessMap,I=!!_.roughnessMap,C=_.anisotropy>0,q=_.clearcoat>0,at=_.dispersion>0,dt=_.iridescence>0,ct=_.sheen>0,It=_.transmission>0,Tt=C&&!!_.anisotropyMap,Lt=q&&!!_.clearcoatMap,ie=q&&!!_.clearcoatNormalMap,xt=q&&!!_.clearcoatRoughnessMap,kt=dt&&!!_.iridescenceMap,qt=dt&&!!_.iridescenceThicknessMap,jt=ct&&!!_.sheenColorMap,Ft=ct&&!!_.sheenRoughnessMap,oe=!!_.specularMap,ee=!!_.specularColorMap,we=!!_.specularIntensityMap,V=It&&!!_.transmissionMap,Ct=It&&!!_.thicknessMap,rt=!!_.gradientMap,ft=!!_.alphaMap,Dt=_.alphaTest>0,Rt=!!_.alphaHash,Jt=!!_.extensions;let Le=fi;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Le=i.toneMapping);const $e={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:pt,fragmentShader:Z,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:j,batchingColor:j&&L._colorsTexture!==null,instancing:tt,instancingColor:tt&&L.instanceColor!==null,instancingMorph:tt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vs,alphaToCoverage:!!_.alphaToCoverage,map:it,matcap:G,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:gt,bumpMap:et,normalMap:bt,displacementMap:d&&vt,emissiveMap:Ut,normalMapObjectSpace:bt&&_.normalMapType===Qd,normalMapTangentSpace:bt&&_.normalMapType===gc,metalnessMap:St,roughnessMap:I,anisotropy:C,anisotropyMap:Tt,clearcoat:q,clearcoatMap:Lt,clearcoatNormalMap:ie,clearcoatRoughnessMap:xt,dispersion:at,iridescence:dt,iridescenceMap:kt,iridescenceThicknessMap:qt,sheen:ct,sheenColorMap:jt,sheenRoughnessMap:Ft,specularMap:oe,specularColorMap:ee,specularIntensityMap:we,transmission:It,transmissionMap:V,thicknessMap:Ct,gradientMap:rt,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:Dt,alphaHash:Rt,combine:_.combine,mapUv:it&&v(_.map.channel),aoMapUv:R&&v(_.aoMap.channel),lightMapUv:gt&&v(_.lightMap.channel),bumpMapUv:et&&v(_.bumpMap.channel),normalMapUv:bt&&v(_.normalMap.channel),displacementMapUv:vt&&v(_.displacementMap.channel),emissiveMapUv:Ut&&v(_.emissiveMap.channel),metalnessMapUv:St&&v(_.metalnessMap.channel),roughnessMapUv:I&&v(_.roughnessMap.channel),anisotropyMapUv:Tt&&v(_.anisotropyMap.channel),clearcoatMapUv:Lt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(_.sheenRoughnessMap.channel),specularMapUv:oe&&v(_.specularMap.channel),specularColorMapUv:ee&&v(_.specularColorMap.channel),specularIntensityMapUv:we&&v(_.specularIntensityMap.channel),transmissionMapUv:V&&v(_.transmissionMap.channel),thicknessMapUv:Ct&&v(_.thicknessMap.channel),alphaMapUv:ft&&v(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||C),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(it||ft),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Q,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:it&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Jt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&_.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const E in _.defines)w.push(E),w.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(b(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function b(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function x(_){const w=p[_.type];let E;if(w){const U=Yn[w];E=zs.clone(U.uniforms)}else E=_.uniforms;return E}function T(_,w){let E;for(let U=0,L=h.length;U<L;U++){const z=h[U];if(z.cacheKey===w){E=z,++E.usedTimes;break}}return E===void 0&&(E=new n2(i,w,_,o),h.push(E)),E}function M(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function A(_){l.remove(_)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:T,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:S}}function a2(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function l2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,p,v,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,d,f,p,v,g){const m=r(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,v,g){const m=r(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||l2),n.length>1&&n.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function c2(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Xh,i.set(n,[r])):s>=o.length?(r=new Xh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function h2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ut};break;case"SpotLight":e={position:new D,direction:new D,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function u2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let d2=0;function f2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p2(i){const t=new h2,e=u2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,o=new At,r=new At;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,b=0,y=0,x=0,T=0,M=0,A=0;c.sort(f2);for(let _=0,w=c.length;_<w;_++){const E=c[_],U=E.color,L=E.intensity,z=E.distance,O=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*L,u+=U.g*L,d+=U.b*L;else if(E.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(E.sh.coefficients[F],L);A++}else if(E.isDirectionalLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,H=e.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=E.shadow.matrix,b++}n.directional[f]=F,f++}else if(E.isSpotLight){const F=t.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(U).multiplyScalar(L),F.distance=z,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,n.spot[v]=F;const $=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,$.updateMatrices(E),E.castShadow&&M++),n.spotLightMatrix[v]=$.matrix,E.castShadow){const H=e.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=O,x++}v++}else if(E.isRectAreaLight){const F=t.get(E);F.color.copy(U).multiplyScalar(L),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=F,g++}else if(E.isPointLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){const $=E.shadow,H=e.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=E.shadow.matrix,y++}n.point[p]=F,p++}else if(E.isHemisphereLight){const F=t.get(E);F.skyColor.copy(E.color).multiplyScalar(L),F.groundColor.copy(E.groundColor).multiplyScalar(L),n.hemi[m]=F,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==p||S.spotLength!==v||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==b||S.numPointShadows!==y||S.numSpotShadows!==x||S.numSpotMaps!==T||S.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,S.directionalLength=f,S.pointLength=p,S.spotLength=v,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=b,S.numPointShadows=y,S.numSpotShadows=x,S.numSpotMaps=T,S.numLightProbes=A,n.version=d2++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function qh(i){const t=new p2(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function m2(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new qh(i),t.set(s,[a])):o>=r.length?(a=new qh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xl extends ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g2 extends ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x2(i,t,e){let n=new ta;const s=new ht,o=new ht,r=new ae,a=new Xl({depthPacking:Bl}),l=new g2,c={},h=e.maxTextureSize,u={[Di]:Je,[Je]:Di,[Ee]:Ee},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:v2,fragmentShader:b2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ge;p.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let m=this.type;this.render=function(M,A,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const _=i.getRenderTarget(),w=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),U=i.state;U.setBlending(di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==li&&this.type===li,z=m===li&&this.type!==li;for(let O=0,F=M.length;O<F;O++){const $=M[O],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),o.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/st.x),s.x=o.x*st.x,H.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/st.y),s.y=o.y*st.y,H.mapSize.y=o.y)),H.map===null||L===!0||z===!0){const lt=this.type!==li?{minFilter:yn,magFilter:yn}:{};H.map!==null&&H.map.dispose(),H.map=new dn(s.x,s.y,lt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ot=H.getViewportCount();for(let lt=0;lt<ot;lt++){const Mt=H.getViewport(lt);r.set(o.x*Mt.x,o.y*Mt.y,o.x*Mt.z,o.y*Mt.w),U.viewport(r),H.updateMatrices($,lt),n=H.getFrustum(),x(A,S,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===li&&b(H,S),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(_,w,E)};function b(M,A){const S=t.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,S,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,S,f,v,null)}function y(M,A,S,_){let w=null;const E=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)w=E;else if(w=S.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=w.uuid,L=A.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let O=z[L];O===void 0&&(O=w.clone(),z[L]=O,A.addEventListener("dispose",T)),w=O}if(w.visible=A.visible,w.wireframe=A.wireframe,_===li?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=i.properties.get(w);U.light=S}return w}function x(M,A,S,_,w){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===li)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const L=t.update(M),z=M.material;if(Array.isArray(z)){const O=L.groups;for(let F=0,$=O.length;F<$;F++){const H=O[F],st=z[H.materialIndex];if(st&&st.visible){const ot=y(M,st,_,w);M.onBeforeShadow(i,M,A,S,L,ot,H),i.renderBufferDirect(S,null,L,ot,M,H),M.onAfterShadow(i,M,A,S,L,ot,H)}}}else if(z.visible){const O=y(M,z,_,w);M.onBeforeShadow(i,M,A,S,L,O,null),i.renderBufferDirect(S,null,L,O,M,null),M.onAfterShadow(i,M,A,S,L,O,null)}}const U=M.children;for(let L=0,z=U.length;L<z;L++)x(U[L],A,S,_,w)}function T(M){M.target.removeEventListener("dispose",T);for(const S in c){const _=c[S],w=M.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}const y2={[al]:ll,[cl]:dl,[hl]:fl,[Ls]:ul,[ll]:al,[dl]:cl,[fl]:hl,[ul]:Ls};function w2(i,t){function e(){let V=!1;const Ct=new ae;let rt=null;const ft=new ae(0,0,0,0);return{setMask:function(Dt){rt!==Dt&&!V&&(i.colorMask(Dt,Dt,Dt,Dt),rt=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,Rt,Jt,Le,$e){$e===!0&&(Dt*=Le,Rt*=Le,Jt*=Le),Ct.set(Dt,Rt,Jt,Le),ft.equals(Ct)===!1&&(i.clearColor(Dt,Rt,Jt,Le),ft.copy(Ct))},reset:function(){V=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let V=!1,Ct=!1,rt=null,ft=null,Dt=null;return{setReversed:function(Rt){if(Ct!==Rt){const Jt=t.get("EXT_clip_control");Ct?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Le=Dt;Dt=null,this.setClear(Le)}Ct=Rt},getReversed:function(){return Ct},setTest:function(Rt){Rt?X(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!V&&(i.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(Ct&&(Rt=y2[Rt]),ft!==Rt){switch(Rt){case al:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){Dt!==Rt&&(Ct&&(Rt=1-Rt),i.clearDepth(Rt),Dt=Rt)},reset:function(){V=!1,rt=null,ft=null,Dt=null,Ct=!1}}}function s(){let V=!1,Ct=null,rt=null,ft=null,Dt=null,Rt=null,Jt=null,Le=null,$e=null;return{setTest:function(ve){V||(ve?X(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ve){Ct!==ve&&!V&&(i.stencilMask(ve),Ct=ve)},setFunc:function(ve,Dn,Qn){(rt!==ve||ft!==Dn||Dt!==Qn)&&(i.stencilFunc(ve,Dn,Qn),rt=ve,ft=Dn,Dt=Qn)},setOp:function(ve,Dn,Qn){(Rt!==ve||Jt!==Dn||Le!==Qn)&&(i.stencilOp(ve,Dn,Qn),Rt=ve,Jt=Dn,Le=Qn)},setLocked:function(ve){V=ve},setClear:function(ve){$e!==ve&&(i.clearStencil(ve),$e=ve)},reset:function(){V=!1,Ct=null,rt=null,ft=null,Dt=null,Rt=null,Jt=null,Le=null,$e=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,x=null,T=null,M=null,A=new ut(0,0,0),S=0,_=!1,w=null,E=null,U=null,L=null,z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=$>=2);let st=null,ot={};const lt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),pt=new ae().fromArray(lt),Z=new ae().fromArray(Mt);function nt(V,Ct,rt,ft){const Dt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(V,Rt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<rt;Jt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Ct+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Rt}const mt={};mt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),X(i.DEPTH_TEST),r.setFunc(Ls),et(!1),bt(Zc),X(i.CULL_FACE),R(di);function X(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Q(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function tt(V,Ct){return u[V]!==Ct?(i.bindFramebuffer(V,Ct),u[V]=Ct,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function j(V,Ct){let rt=f,ft=!1;if(V){rt=d.get(Ct),rt===void 0&&(rt=[],d.set(Ct,rt));const Dt=V.textures;if(rt.length!==Dt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Jt=Dt.length;Rt<Jt;Rt++)rt[Rt]=i.COLOR_ATTACHMENT0+Rt;rt.length=Dt.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function it(V){return p!==V?(i.useProgram(V),p=V,!0):!1}const G={[Zi]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};G[Dd]=i.MIN,G[Id]=i.MAX;const k={[Ud]:i.ZERO,[kd]:i.ONE,[Fd]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(V,Ct,rt,ft,Dt,Rt,Jt,Le,$e,ve){if(V===di){v===!0&&(Q(i.BLEND),v=!1);return}if(v===!1&&(X(i.BLEND),v=!0),V!==Rd){if(V!==g||ve!==_){if((m!==Zi||x!==Zi)&&(i.blendEquation(i.FUNC_ADD),m=Zi,x=Zi),ve)switch(V){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,T=null,M=null,A.set(0,0,0),S=0,g=V,_=ve}return}Dt=Dt||Ct,Rt=Rt||rt,Jt=Jt||ft,(Ct!==m||Dt!==x)&&(i.blendEquationSeparate(G[Ct],G[Dt]),m=Ct,x=Dt),(rt!==b||ft!==y||Rt!==T||Jt!==M)&&(i.blendFuncSeparate(k[rt],k[ft],k[Rt],k[Jt]),b=rt,y=ft,T=Rt,M=Jt),(Le.equals(A)===!1||$e!==S)&&(i.blendColor(Le.r,Le.g,Le.b,$e),A.copy(Le),S=$e),g=V,_=!1}function gt(V,Ct){V.side===Ee?Q(i.CULL_FACE):X(i.CULL_FACE);let rt=V.side===Je;Ct&&(rt=!rt),et(rt),V.blending===Cs&&V.transparent===!1?R(di):R(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const ft=V.stencilWrite;a.setTest(ft),ft&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ut(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function bt(V){V!==Ad?(X(i.CULL_FACE),V!==E&&(V===Zc?i.cullFace(i.BACK):V===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),E=V}function vt(V){V!==U&&(F&&i.lineWidth(V),U=V)}function Ut(V,Ct,rt){V?(X(i.POLYGON_OFFSET_FILL),(L!==Ct||z!==rt)&&(i.polygonOffset(Ct,rt),L=Ct,z=rt)):Q(i.POLYGON_OFFSET_FILL)}function St(V){V?X(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function I(V){V===void 0&&(V=i.TEXTURE0+O-1),st!==V&&(i.activeTexture(V),st=V)}function C(V,Ct,rt){rt===void 0&&(st===null?rt=i.TEXTURE0+O-1:rt=st);let ft=ot[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ot[rt]=ft),(ft.type!==V||ft.texture!==Ct)&&(st!==rt&&(i.activeTexture(rt),st=rt),i.bindTexture(V,Ct||mt[V]),ft.type=V,ft.texture=Ct)}function q(){const V=ot[st];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(V){pt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),pt.copy(V))}function Ft(V){Z.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function oe(V,Ct){let rt=c.get(Ct);rt===void 0&&(rt=new WeakMap,c.set(Ct,rt));let ft=rt.get(V);ft===void 0&&(ft=i.getUniformBlockIndex(Ct,V.name),rt.set(V,ft))}function ee(V,Ct){const ft=c.get(Ct).get(V);l.get(Ct)!==ft&&(i.uniformBlockBinding(Ct,ft,V.__bindingPointIndex),l.set(Ct,ft))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ot={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,x=null,T=null,M=null,A=new ut(0,0,0),S=0,_=!1,w=null,E=null,U=null,L=null,z=null,pt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:X,disable:Q,bindFramebuffer:tt,drawBuffers:j,useProgram:it,setBlending:R,setMaterial:gt,setFlipSided:et,setCullFace:bt,setLineWidth:vt,setPolygonOffset:Ut,setScissorTest:St,activeTexture:I,bindTexture:C,unbindTexture:q,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:kt,texImage3D:qt,updateUBOMapping:oe,uniformBlockBinding:ee,texStorage2D:ie,texStorage3D:xt,texSubImage2D:ct,texSubImage3D:It,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Lt,scissor:jt,viewport:Ft,reset:we}}function Yh(i,t,e,n){const s=_2(n);switch(e){case vu:return i*t;case xu:return i*t;case yu:return i*t*2;case dc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case mc:return i*t*4/s.components*s.byteLength;case Ur:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case yl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case xl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Nl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _u:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _2(i){switch(i){case mi:case pu:return{byteLength:1,components:1};case To:case mu:case Vn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case ts:case cc:case Gn:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M2(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,C){return f?new OffscreenCanvas(I,C):qr("canvas")}function v(I,C,q){let at=1;const dt=St(I);if((dt.width>q||dt.height>q)&&(at=q/Math.max(dt.width,dt.height)),at<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ct=Math.floor(at*dt.width),It=Math.floor(at*dt.height);u===void 0&&(u=p(ct,It));const Tt=C?p(ct,It):u;return Tt.width=ct,Tt.height=It,Tt.getContext("2d").drawImage(I,0,0,ct,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ct+"x"+It+")."),Tt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,C,q,at,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ct=C;if(C===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),C===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),q===i.UNSIGNED_INT&&(ct=i.RG32UI),q===i.BYTE&&(ct=i.RG8I),q===i.SHORT&&(ct=i.RG16I),q===i.INT&&(ct=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),q===i.UNSIGNED_INT&&(ct=i.RGB32UI),q===i.BYTE&&(ct=i.RGB8I),q===i.SHORT&&(ct=i.RGB16I),q===i.INT&&(ct=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),q===i.BYTE&&(ct=i.RGBA8I),q===i.SHORT&&(ct=i.RGBA16I),q===i.INT&&(ct=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),C===i.RGBA){const It=dt?Jr:re.getTransfer(at);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=It===be?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(I,C){let q;return I?C===null||C===ts||C===Us?q=i.DEPTH24_STENCIL8:C===Gn?q=i.DEPTH32F_STENCIL8:C===To&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ts||C===Us?q=i.DEPTH_COMPONENT24:C===Gn?q=i.DEPTH_COMPONENT32F:C===To&&(q=i.DEPTH_COMPONENT16),q}function T(I,C){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Rn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function M(I){const C=I.target;C.removeEventListener("dispose",M),S(C),C.isVideoTexture&&h.delete(C)}function A(I){const C=I.target;C.removeEventListener("dispose",A),w(C)}function S(I){const C=n.get(I);if(C.__webglInit===void 0)return;const q=I.source,at=d.get(q);if(at){const dt=at[C.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&_(I),Object.keys(at).length===0&&d.delete(q)}n.remove(I)}function _(I){const C=n.get(I);i.deleteTexture(C.__webglTexture);const q=I.source,at=d.get(q);delete at[C.__cacheKey],r.memory.textures--}function w(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(C.__webglFramebuffer[at]))for(let dt=0;dt<C.__webglFramebuffer[at].length;dt++)i.deleteFramebuffer(C.__webglFramebuffer[at][dt]);else i.deleteFramebuffer(C.__webglFramebuffer[at]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[at])}else{if(Array.isArray(C.__webglFramebuffer))for(let at=0;at<C.__webglFramebuffer.length;at++)i.deleteFramebuffer(C.__webglFramebuffer[at]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let at=0;at<C.__webglColorRenderbuffer.length;at++)C.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[at]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=I.textures;for(let at=0,dt=q.length;at<dt;at++){const ct=n.get(q[at]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),r.memory.textures--),n.remove(q[at])}n.remove(I)}let E=0;function U(){E=0}function L(){const I=E;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function z(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function O(I,C){const q=n.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const at=I.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,I,C);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function F(I,C){const q=n.get(I);if(I.version>0&&q.__version!==I.version){Z(q,I,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function $(I,C){const q=n.get(I);if(I.version>0&&q.__version!==I.version){Z(q,I,C);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function H(I,C){const q=n.get(I);if(I.version>0&&q.__version!==I.version){nt(q,I,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const st={[Wr]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},ot={[yn]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},lt={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[Mu]:i.LEQUAL,[nf]:i.EQUAL,[rf]:i.GEQUAL,[sf]:i.GREATER,[of]:i.NOTEQUAL};function Mt(I,C){if(C.type===Gn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Rn||C.magFilter===fa||C.magFilter===Oo||C.magFilter===$n||C.minFilter===Rn||C.minFilter===fa||C.minFilter===Oo||C.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ot[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ot[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,lt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===yn||C.minFilter!==Oo&&C.minFilter!==$n||C.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function pt(I,C){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",M));const at=C.source;let dt=d.get(at);dt===void 0&&(dt={},d.set(at,dt));const ct=z(C);if(ct!==I.__cacheKey){dt[ct]===void 0&&(dt[ct]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),dt[ct].usedTimes++;const It=dt[I.__cacheKey];It!==void 0&&(dt[I.__cacheKey].usedTimes--,It.usedTimes===0&&_(C)),I.__cacheKey=ct,I.__webglTexture=dt[ct].texture}return q}function Z(I,C,q){let at=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(at=i.TEXTURE_3D);const dt=pt(I,C),ct=C.source;e.bindTexture(at,I.__webglTexture,i.TEXTURE0+q);const It=n.get(ct);if(ct.version!==It.__version||dt===!0){e.activeTexture(i.TEXTURE0+q);const Tt=re.getPrimaries(re.workingColorSpace),Lt=C.colorSpace===hi?null:re.getPrimaries(C.colorSpace),ie=C.colorSpace===hi||Tt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xt=v(C.image,!1,s.maxTextureSize);xt=Ut(C,xt);const kt=o.convert(C.format,C.colorSpace),qt=o.convert(C.type);let jt=y(C.internalFormat,kt,qt,C.colorSpace,C.isVideoTexture);Mt(at,C);let Ft;const oe=C.mipmaps,ee=C.isVideoTexture!==!0,we=It.__version===void 0||dt===!0,V=ct.dataReady,Ct=T(C,xt);if(C.isDepthTexture)jt=x(C.format===ks,C.type),we&&(ee?e.texStorage2D(i.TEXTURE_2D,1,jt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,jt,xt.width,xt.height,0,kt,qt,null));else if(C.isDataTexture)if(oe.length>0){ee&&we&&e.texStorage2D(i.TEXTURE_2D,Ct,jt,oe[0].width,oe[0].height);for(let rt=0,ft=oe.length;rt<ft;rt++)Ft=oe[rt],ee?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,kt,qt,Ft.data):e.texImage2D(i.TEXTURE_2D,rt,jt,Ft.width,Ft.height,0,kt,qt,Ft.data);C.generateMipmaps=!1}else ee?(we&&e.texStorage2D(i.TEXTURE_2D,Ct,jt,xt.width,xt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,kt,qt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,jt,xt.width,xt.height,0,kt,qt,xt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ee&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,jt,oe[0].width,oe[0].height,xt.depth);for(let rt=0,ft=oe.length;rt<ft;rt++)if(Ft=oe[rt],C.format!==bn)if(kt!==null)if(ee){if(V)if(C.layerUpdates.size>0){const Dt=Yh(Ft.width,Ft.height,C.format,C.type);for(const Rt of C.layerUpdates){const Jt=Ft.data.subarray(Rt*Dt/Ft.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Rt,Ft.width,Ft.height,1,kt,Jt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,xt.depth,kt,Ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,jt,Ft.width,Ft.height,xt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,xt.depth,kt,qt,Ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,jt,Ft.width,Ft.height,xt.depth,0,kt,qt,Ft.data)}else{ee&&we&&e.texStorage2D(i.TEXTURE_2D,Ct,jt,oe[0].width,oe[0].height);for(let rt=0,ft=oe.length;rt<ft;rt++)Ft=oe[rt],C.format!==bn?kt!==null?ee?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,kt,Ft.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,jt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,kt,qt,Ft.data):e.texImage2D(i.TEXTURE_2D,rt,jt,Ft.width,Ft.height,0,kt,qt,Ft.data)}else if(C.isDataArrayTexture)if(ee){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,jt,xt.width,xt.height,xt.depth),V)if(C.layerUpdates.size>0){const rt=Yh(xt.width,xt.height,C.format,C.type);for(const ft of C.layerUpdates){const Dt=xt.data.subarray(ft*rt/xt.data.BYTES_PER_ELEMENT,(ft+1)*rt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,xt.width,xt.height,1,kt,qt,Dt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,kt,qt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,xt.width,xt.height,xt.depth,0,kt,qt,xt.data);else if(C.isData3DTexture)ee?(we&&e.texStorage3D(i.TEXTURE_3D,Ct,jt,xt.width,xt.height,xt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,kt,qt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,jt,xt.width,xt.height,xt.depth,0,kt,qt,xt.data);else if(C.isFramebufferTexture){if(we)if(ee)e.texStorage2D(i.TEXTURE_2D,Ct,jt,xt.width,xt.height);else{let rt=xt.width,ft=xt.height;for(let Dt=0;Dt<Ct;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,jt,rt,ft,0,kt,qt,null),rt>>=1,ft>>=1}}else if(oe.length>0){if(ee&&we){const rt=St(oe[0]);e.texStorage2D(i.TEXTURE_2D,Ct,jt,rt.width,rt.height)}for(let rt=0,ft=oe.length;rt<ft;rt++)Ft=oe[rt],ee?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,kt,qt,Ft):e.texImage2D(i.TEXTURE_2D,rt,jt,kt,qt,Ft);C.generateMipmaps=!1}else if(ee){if(we){const rt=St(xt);e.texStorage2D(i.TEXTURE_2D,Ct,jt,rt.width,rt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,qt,xt)}else e.texImage2D(i.TEXTURE_2D,0,jt,kt,qt,xt);g(C)&&m(at),It.__version=ct.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function nt(I,C,q){if(C.image.length!==6)return;const at=pt(I,C),dt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);const ct=n.get(dt);if(dt.version!==ct.__version||at===!0){e.activeTexture(i.TEXTURE0+q);const It=re.getPrimaries(re.workingColorSpace),Tt=C.colorSpace===hi?null:re.getPrimaries(C.colorSpace),Lt=C.colorSpace===hi||It===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ie=C.isCompressedTexture||C.image[0].isCompressedTexture,xt=C.image[0]&&C.image[0].isDataTexture,kt=[];for(let ft=0;ft<6;ft++)!ie&&!xt?kt[ft]=v(C.image[ft],!0,s.maxCubemapSize):kt[ft]=xt?C.image[ft].image:C.image[ft],kt[ft]=Ut(C,kt[ft]);const qt=kt[0],jt=o.convert(C.format,C.colorSpace),Ft=o.convert(C.type),oe=y(C.internalFormat,jt,Ft,C.colorSpace),ee=C.isVideoTexture!==!0,we=ct.__version===void 0||at===!0,V=dt.dataReady;let Ct=T(C,qt);Mt(i.TEXTURE_CUBE_MAP,C);let rt;if(ie){ee&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,oe,qt.width,qt.height);for(let ft=0;ft<6;ft++){rt=kt[ft].mipmaps;for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];C.format!==bn?jt!==null?ee?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,0,0,Rt.width,Rt.height,jt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,oe,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,0,0,Rt.width,Rt.height,jt,Ft,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt,oe,Rt.width,Rt.height,0,jt,Ft,Rt.data)}}}else{if(rt=C.mipmaps,ee&&we){rt.length>0&&Ct++;const ft=St(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,oe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(xt){ee?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,kt[ft].width,kt[ft].height,jt,Ft,kt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,kt[ft].width,kt[ft].height,0,jt,Ft,kt[ft].data);for(let Dt=0;Dt<rt.length;Dt++){const Jt=rt[Dt].image[ft].image;ee?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,0,0,Jt.width,Jt.height,jt,Ft,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,oe,Jt.width,Jt.height,0,jt,Ft,Jt.data)}}else{ee?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,jt,Ft,kt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,jt,Ft,kt[ft]);for(let Dt=0;Dt<rt.length;Dt++){const Rt=rt[Dt];ee?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,0,0,jt,Ft,Rt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt+1,oe,jt,Ft,Rt.image[ft])}}}g(C)&&m(i.TEXTURE_CUBE_MAP),ct.__version=dt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function mt(I,C,q,at,dt,ct){const It=o.convert(q.format,q.colorSpace),Tt=o.convert(q.type),Lt=y(q.internalFormat,It,Tt,q.colorSpace),ie=n.get(C),xt=n.get(q);if(xt.__renderTarget=C,!ie.__hasExternalTextures){const kt=Math.max(1,C.width>>ct),qt=Math.max(1,C.height>>ct);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,ct,Lt,kt,qt,C.depth,0,It,Tt,null):e.texImage2D(dt,ct,Lt,kt,qt,0,It,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,xt.__webglTexture,0,et(C)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,xt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(I,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const at=C.depthTexture,dt=at&&at.isDepthTexture?at.type:null,ct=x(C.stencilBuffer,dt),It=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=et(C);bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ct,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ct,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,I)}else{const at=C.textures;for(let dt=0;dt<at.length;dt++){const ct=at[dt],It=o.convert(ct.format,ct.colorSpace),Tt=o.convert(ct.type),Lt=y(ct.internalFormat,It,Tt,ct.colorSpace),ie=et(C);q&&bt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Lt,C.width,C.height):bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Lt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=n.get(C.depthTexture);at.__renderTarget=C,(!at.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);const dt=at.__webglTexture,ct=et(C);if(C.depthTexture.format===Rs)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(C.depthTexture.format===ks)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function tt(I){const C=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const at=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),at){const dt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),C.__depthDisposeCallback=dt}C.__boundDepthTexture=at}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Q(C.__webglFramebuffer,I)}else if(q){C.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[at]),C.__webglDepthbuffer[at]===void 0)C.__webglDepthbuffer[at]=i.createRenderbuffer(),X(C.__webglDepthbuffer[at],I,!1);else{const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=C.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),X(C.__webglDepthbuffer,I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(I,C,q){const at=n.get(I);C!==void 0&&mt(at.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&tt(I)}function it(I){const C=I.texture,q=n.get(I),at=n.get(C);I.addEventListener("dispose",A);const dt=I.textures,ct=I.isWebGLCubeRenderTarget===!0,It=dt.length>1;if(It||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=C.version,r.memory.textures++),ct){q.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[Tt]=[];for(let Lt=0;Lt<C.mipmaps.length;Lt++)q.__webglFramebuffer[Tt][Lt]=i.createFramebuffer()}else q.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)q.__webglFramebuffer[Tt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(It)for(let Tt=0,Lt=dt.length;Tt<Lt;Tt++){const ie=n.get(dt[Tt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&bt(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Tt=0;Tt<dt.length;Tt++){const Lt=dt[Tt];q.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Tt]);const ie=o.convert(Lt.format,Lt.colorSpace),xt=o.convert(Lt.type),kt=y(Lt.internalFormat,ie,xt,Lt.colorSpace,I.isXRRenderTarget===!0),qt=et(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,kt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),X(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,C);for(let Tt=0;Tt<6;Tt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Lt=0;Lt<C.mipmaps.length;Lt++)mt(q.__webglFramebuffer[Tt][Lt],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Lt);else mt(q.__webglFramebuffer[Tt],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);g(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Tt=0,Lt=dt.length;Tt<Lt;Tt++){const ie=dt[Tt],xt=n.get(ie);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),Mt(i.TEXTURE_2D,ie),mt(q.__webglFramebuffer,I,ie,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),g(ie)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,at.__webglTexture),Mt(Tt,C),C.mipmaps&&C.mipmaps.length>0)for(let Lt=0;Lt<C.mipmaps.length;Lt++)mt(q.__webglFramebuffer[Lt],I,C,i.COLOR_ATTACHMENT0,Tt,Lt);else mt(q.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,Tt,0);g(C)&&m(Tt),e.unbindTexture()}I.depthBuffer&&tt(I)}function G(I){const C=I.textures;for(let q=0,at=C.length;q<at;q++){const dt=C[q];if(g(dt)){const ct=b(I),It=n.get(dt).__webglTexture;e.bindTexture(ct,It),m(ct),e.unbindTexture()}}}const k=[],R=[];function gt(I){if(I.samples>0){if(bt(I)===!1){const C=I.textures,q=I.width,at=I.height;let dt=i.COLOR_BUFFER_BIT;const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(I),Tt=C.length>1;if(Tt)for(let Lt=0;Lt<C.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Lt=0;Lt<C.length;Lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ie=n.get(C[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,q,at,0,0,q,at,dt,i.NEAREST),l===!0&&(k.length=0,R.length=0,k.push(i.COLOR_ATTACHMENT0+Lt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(k.push(ct),R.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Lt=0;Lt<C.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);const ie=n.get(C[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function et(I){return Math.min(s.maxSamples,I.samples)}function bt(I){const C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function vt(I){const C=r.render.frame;h.get(I)!==C&&(h.set(I,C),I.update())}function Ut(I,C){const q=I.colorSpace,at=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Vs&&q!==hi&&(re.getTransfer(q)===be?(at!==bn||dt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=j,this.setupRenderTarget=it,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=bt}function S2(i,t){function e(n,s=hi){let o;const r=re.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===bu)return i.RGB;if(n===bn)return i.RGBA;if(n===xu)return i.LUMINANCE;if(n===yu)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===wu)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===Ur||n===kr||n===Fr||n===zr)if(r===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===bl||n===xl||n===yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===_l||n===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===wl||n===_l)return r===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ml)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Ll||n===Dl||n===Il||n===Ul||n===kl||n===Fl||n===zl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Sl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Nl||n===Ol)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Nr)return r===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===Gl||n===Hl||n===Vl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Nr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class T2 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E2={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ce({vertexShader:A2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P2 extends Bs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=new R2,g=e.getContextAttributes();let m=null,b=null;const y=[],x=[],T=new ht;let M=null;const A=new hn;A.viewport=new ae;const S=new hn;S.viewport=new ae;const _=[A,S],w=new T2;let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Ga,y[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Ga,y[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Ga,y[Z]=nt),nt.getHandSpace()};function L(Z){const nt=x.indexOf(Z.inputSource);if(nt===-1)return;const mt=y[nt];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,c||r),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let Z=0;Z<y.length;Z++){const nt=x[Z];nt!==null&&(x[Z]=null,y[Z].disconnect(nt))}E=null,U=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new dn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,mt=null,X=null;g.depth&&(X=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?ks:Rs,mt=g.stencil?Us:ts);const Q={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:bn,type:mi,depthTexture:new Iu(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(Z){for(let nt=0;nt<Z.removed.length;nt++){const mt=Z.removed[nt],X=x.indexOf(mt);X>=0&&(x[X]=null,y[X].disconnect(mt))}for(let nt=0;nt<Z.added.length;nt++){const mt=Z.added[nt];let X=x.indexOf(mt);if(X===-1){for(let tt=0;tt<y.length;tt++)if(tt>=x.length){x.push(mt),X=tt;break}else if(x[tt]===null){x[tt]=mt,X=tt;break}if(X===-1)break}const Q=y[X];Q&&Q.connect(mt)}}const F=new D,$=new D;function H(Z,nt,mt){F.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const X=F.distanceTo($),Q=nt.projectionMatrix.elements,tt=mt.projectionMatrix.elements,j=Q[14]/(Q[10]-1),it=Q[14]/(Q[10]+1),G=(Q[9]+1)/Q[5],k=(Q[9]-1)/Q[5],R=(Q[8]-1)/Q[0],gt=(tt[8]+1)/tt[0],et=j*R,bt=j*gt,vt=X/(-R+gt),Ut=vt*-R;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ut),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=j+vt,I=it+vt,C=et-Ut,q=bt+(X-Ut),at=G*it/I*St,dt=k*it/I*St;Z.projectionMatrix.makePerspective(C,q,at,dt,St,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,mt=Z.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),w.near=S.near=A.near=nt,w.far=S.far=A.far=mt,(E!==w.near||U!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),E=w.near,U=w.far),A.layers.mask=Z.layers.mask|2,S.layers.mask=Z.layers.mask|4,w.layers.mask=A.layers.mask|S.layers.mask;const X=Z.parent,Q=w.cameras;st(w,X);for(let tt=0;tt<Q.length;tt++)st(Q[tt],X);Q.length===2?H(w,A,S):w.projectionMatrix.copy(A.projectionMatrix),ot(Z,w,X)};function ot(Z,nt,mt){mt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ao*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let lt=null;function Mt(Z,nt){if(h=nt.getViewerPose(c||r),p=nt,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let X=!1;mt.length!==w.cameras.length&&(w.cameras.length=0,X=!0);for(let tt=0;tt<mt.length;tt++){const j=mt[tt];let it=null;if(f!==null)it=f.getViewport(j);else{const k=u.getViewSubImage(d,j);it=k.viewport,tt===0&&(t.setRenderTargetTextures(b,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(b))}let G=_[tt];G===void 0&&(G=new hn,G.layers.enable(tt),G.viewport=new ae,_[tt]=G),G.matrix.fromArray(j.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(j.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(it.x,it.y,it.width,it.height),tt===0&&(w.matrix.copy(G.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),X===!0&&w.cameras.push(G)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const tt=u.getDepthInformation(mt[0]);tt&&tt.isValid&&tt.texture&&v.init(t,tt,s.renderState)}}for(let mt=0;mt<y.length;mt++){const X=x[mt],Q=y[mt];X!==null&&Q!==void 0&&Q.update(X,nt,c||r)}lt&&lt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}const pt=new Du;pt.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){lt=Z},this.dispose=function(){}}}const Bi=new on,L2=new At;function D2(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ru(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),v(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=t.get(m),y=b.envMap,x=b.envMapRotation;y&&(g.envMap.value=y,Bi.copy(x),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(Bi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I2(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=s[b.id];x===void 0&&(p(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",g));const T=y.program;n.updateUBOMapping(b,T);const M=t.render.frame;o[b.id]!==M&&(d(b),o[b.id]=M)}function h(b){const y=u();b.__bindingPointIndex=y;const x=i.createBuffer(),T=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],x=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,A=x.length;M<A;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let _=0,w=S.length;_<w;_++){const E=S[_];if(f(E,M,_,T)===!0){const U=E.__offset,L=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let O=0;O<L.length;O++){const F=L[O],$=v(F);typeof F=="number"||typeof F=="boolean"?(E.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,U+z,E.__data)):F.isMatrix3?(E.__data[0]=F.elements[0],E.__data[1]=F.elements[1],E.__data[2]=F.elements[2],E.__data[3]=0,E.__data[4]=F.elements[3],E.__data[5]=F.elements[4],E.__data[6]=F.elements[5],E.__data[7]=0,E.__data[8]=F.elements[6],E.__data[9]=F.elements[7],E.__data[10]=F.elements[8],E.__data[11]=0):(F.toArray(E.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,x,T){const M=b.value,A=y+"_"+x;if(T[A]===void 0)return typeof M=="number"||typeof M=="boolean"?T[A]=M:T[A]=M.clone(),!0;{const S=T[A];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return T[A]=M,!0}else if(S.equals(M)===!1)return S.copy(M),!0}return!1}function p(b){const y=b.uniforms;let x=0;const T=16;for(let A=0,S=y.length;A<S;A++){const _=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,E=_.length;w<E;w++){const U=_[w],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,O=L.length;z<O;z++){const F=L[z],$=v(F),H=x%T,st=H%$.boundary,ot=H+st;x+=st,ot!==0&&T-ot<$.storage&&(x+=T-ot),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}const M=x%T;return M>0&&(x+=T-M),b.__size=x,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class U2{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let T=!1,M=0,A=0,S=null,_=-1,w=null;const E=new ae,U=new ae;let L=null;const z=new ut(0);let O=0,F=e.width,$=e.height,H=1,st=null,ot=null;const lt=new ae(0,0,F,$),Mt=new ae(0,0,F,$);let pt=!1;const Z=new ta;let nt=!1,mt=!1;const X=new At,Q=new At,tt=new D,j=new ae,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function k(){return S===null?H:1}let R=n;function gt(P,B){return e.getContext(P,B)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),R===null){const B="webgl2";if(R=gt(B,P),R===null)throw gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let et,bt,vt,Ut,St,I,C,q,at,dt,ct,It,Tt,Lt,ie,xt,kt,qt,jt,Ft,oe,ee,we,V;function Ct(){et=new G1(R),et.init(),ee=new S2(R,et),bt=new U1(R,et,t,ee),vt=new w2(R,et),bt.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),Ut=new B1(R),St=new a2,I=new M2(R,et,vt,St,bt,ee,Ut),C=new F1(x),q=new O1(x),at=new Zf(R),we=new D1(R,at),dt=new H1(R,at,Ut,we),ct=new X1(R,dt,at,Ut),jt=new W1(R,bt,I),xt=new k1(St),It=new r2(x,C,q,et,bt,we,xt),Tt=new D2(x,St),Lt=new c2,ie=new m2(et),qt=new L1(x,C,q,vt,ct,f,l),kt=new x2(x,ct,bt),V=new I2(R,Ut,bt,vt),Ft=new I1(R,et,Ut),oe=new V1(R,et,Ut),Ut.programs=It.programs,x.capabilities=bt,x.extensions=et,x.properties=St,x.renderLists=Lt,x.shadowMap=kt,x.state=vt,x.info=Ut}Ct();const rt=new P2(x,R);this.xr=rt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(F,$,!1))},this.getSize=function(P){return P.set(F,$)},this.setSize=function(P,B,K=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,$=B,e.width=Math.floor(P*H),e.height=Math.floor(B*H),K===!0&&(e.style.width=P+"px",e.style.height=B+"px"),this.setViewport(0,0,P,B)},this.getDrawingBufferSize=function(P){return P.set(F*H,$*H).floor()},this.setDrawingBufferSize=function(P,B,K){F=P,$=B,H=K,e.width=Math.floor(P*K),e.height=Math.floor(B*K),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(lt)},this.setViewport=function(P,B,K,J){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,B,K,J),vt.viewport(E.copy(lt).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(Mt)},this.setScissor=function(P,B,K,J){P.isVector4?Mt.set(P.x,P.y,P.z,P.w):Mt.set(P,B,K,J),vt.scissor(U.copy(Mt).multiplyScalar(H).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(P){vt.setScissorTest(pt=P)},this.setOpaqueSort=function(P){st=P},this.setTransparentSort=function(P){ot=P},this.getClearColor=function(P){return P.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(P=!0,B=!0,K=!0){let J=0;if(P){let W=!1;if(S!==null){const yt=S.texture.format;W=yt===mc||yt===pc||yt===fc}if(W){const yt=S.texture.type,Pt=yt===mi||yt===ts||yt===To||yt===Us||yt===hc||yt===uc,Ot=qt.getClearColor(),Gt=qt.getClearAlpha(),$t=Ot.r,Qt=Ot.g,Ht=Ot.b;Pt?(p[0]=$t,p[1]=Qt,p[2]=Ht,p[3]=Gt,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=$t,v[1]=Qt,v[2]=Ht,v[3]=Gt,R.clearBufferiv(R.COLOR,0,v))}else J|=R.COLOR_BUFFER_BIT}B&&(J|=R.DEPTH_BUFFER_BIT),K&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Lt.dispose(),ie.dispose(),St.dispose(),C.dispose(),q.dispose(),ct.dispose(),we.dispose(),V.dispose(),It.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Vc),rt.removeEventListener("sessionend",Bc),zi.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Ut.autoReset,B=kt.enabled,K=kt.autoUpdate,J=kt.needsUpdate,W=kt.type;Ct(),Ut.autoReset=P,kt.enabled=B,kt.autoUpdate=K,kt.needsUpdate=J,kt.type=W}function Rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Jt(P){const B=P.target;B.removeEventListener("dispose",Jt),Le(B)}function Le(P){$e(P),St.remove(P)}function $e(P){const B=St.get(P).programs;B!==void 0&&(B.forEach(function(K){It.releaseProgram(K)}),P.isShaderMaterial&&It.releaseShaderCache(P))}this.renderBufferDirect=function(P,B,K,J,W,yt){B===null&&(B=it);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,Ot=_d(P,B,K,J,W);vt.setMaterial(J,Pt);let Gt=K.index,$t=1;if(J.wireframe===!0){if(Gt=dt.getWireframeAttribute(K),Gt===void 0)return;$t=2}const Qt=K.drawRange,Ht=K.attributes.position;let le=Qt.start*$t,_e=(Qt.start+Qt.count)*$t;yt!==null&&(le=Math.max(le,yt.start*$t),_e=Math.min(_e,(yt.start+yt.count)*$t)),Gt!==null?(le=Math.max(le,0),_e=Math.min(_e,Gt.count)):Ht!=null&&(le=Math.max(le,0),_e=Math.min(_e,Ht.count));const Se=_e-le;if(Se<0||Se===1/0)return;we.setup(W,J,Ot,K,Gt);let rn,de=Ft;if(Gt!==null&&(rn=at.get(Gt),de=oe,de.setIndex(rn)),W.isMesh)J.wireframe===!0?(vt.setLineWidth(J.wireframeLinewidth*k()),de.setMode(R.LINES)):de.setMode(R.TRIANGLES);else if(W.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),vt.setLineWidth(Bt*k()),W.isLineSegments?de.setMode(R.LINES):W.isLineLoop?de.setMode(R.LINE_LOOP):de.setMode(R.LINE_STRIP)}else W.isPoints?de.setMode(R.POINTS):W.isSprite&&de.setMode(R.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)de.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))de.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Bt=W._multiDrawStarts,ti=W._multiDrawCounts,fe=W._multiDrawCount,In=Gt?at.get(Gt).bytesPerElement:1,rs=St.get(J).currentProgram.getUniforms();for(let fn=0;fn<fe;fn++)rs.setValue(R,"_gl_DrawID",fn),de.render(Bt[fn]/In,ti[fn])}else if(W.isInstancedMesh)de.renderInstances(le,Se,W.count);else if(K.isInstancedBufferGeometry){const Bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ti=Math.min(K.instanceCount,Bt);de.renderInstances(le,Se,ti)}else de.render(le,Se)};function ve(P,B,K){P.transparent===!0&&P.side===Ee&&P.forceSinglePass===!1?(P.side=Je,P.needsUpdate=!0,No(P,B,K),P.side=Di,P.needsUpdate=!0,No(P,B,K),P.side=Ee):No(P,B,K)}this.compile=function(P,B,K=null){K===null&&(K=P),m=ie.get(K),m.init(B),y.push(m),K.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),P!==K&&P.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const J=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const yt=W.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){const Ot=yt[Pt];ve(Ot,K,W),J.add(Ot)}else ve(yt,K,W),J.add(yt)}),y.pop(),m=null,J},this.compileAsync=function(P,B,K=null){const J=this.compile(P,B,K);return new Promise(W=>{function yt(){if(J.forEach(function(Pt){St.get(Pt).currentProgram.isReady()&&J.delete(Pt)}),J.size===0){W(P);return}setTimeout(yt,10)}et.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Dn=null;function Qn(P){Dn&&Dn(P)}function Vc(){zi.stop()}function Bc(){zi.start()}const zi=new Du;zi.setAnimationLoop(Qn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(P){Dn=P,rt.setAnimationLoop(P),P===null?zi.stop():zi.start()},rt.addEventListener("sessionstart",Vc),rt.addEventListener("sessionend",Bc),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,B,S),m=ie.get(P,y.length),m.init(B),y.push(m),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Q),mt=this.localClippingEnabled,nt=xt.init(this.clippingPlanes,mt),g=Lt.get(P,b.length),g.init(),b.push(g),rt.enabled===!0&&rt.isPresenting===!0){const yt=x.xr.getDepthSensingMesh();yt!==null&&da(yt,B,-1/0,x.sortObjects)}da(P,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ot),G=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,G&&qt.addToRenderList(g,P),this.info.render.frame++,nt===!0&&xt.beginShadows();const K=m.state.shadowsArray;kt.render(K,P,B),nt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,W=g.transmissive;if(m.setupLights(),B.isArrayCamera){const yt=B.cameras;if(W.length>0)for(let Pt=0,Ot=yt.length;Pt<Ot;Pt++){const Gt=yt[Pt];Xc(J,W,P,Gt)}G&&qt.render(P);for(let Pt=0,Ot=yt.length;Pt<Ot;Pt++){const Gt=yt[Pt];Wc(g,P,Gt,Gt.viewport)}}else W.length>0&&Xc(J,W,P,B),G&&qt.render(P),Wc(g,P,B);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(x,P,B),we.resetDefaultState(),_=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],nt===!0&&xt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function da(P,B,K,J){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){J&&j.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);const Pt=ct.update(P),Ot=P.material;Ot.visible&&g.push(P,Pt,Ot,K,j.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const Pt=ct.update(P),Ot=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),j.copy(P.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),j.copy(Pt.boundingSphere.center)),j.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(Ot)){const Gt=Pt.groups;for(let $t=0,Qt=Gt.length;$t<Qt;$t++){const Ht=Gt[$t],le=Ot[Ht.materialIndex];le&&le.visible&&g.push(P,Pt,le,K,j.z,Ht)}}else Ot.visible&&g.push(P,Pt,Ot,K,j.z,null)}}const yt=P.children;for(let Pt=0,Ot=yt.length;Pt<Ot;Pt++)da(yt[Pt],B,K,J)}function Wc(P,B,K,J){const W=P.opaque,yt=P.transmissive,Pt=P.transparent;m.setupLightsView(K),nt===!0&&xt.setGlobalState(x.clippingPlanes,K),J&&vt.viewport(E.copy(J)),W.length>0&&zo(W,B,K),yt.length>0&&zo(yt,B,K),Pt.length>0&&zo(Pt,B,K),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Xc(P,B,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new dn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Vn:mi,minFilter:$n,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const yt=m.state.transmissionRenderTarget[J.id],Pt=J.viewport||E;yt.setSize(Pt.z,Pt.w);const Ot=x.getRenderTarget();x.setRenderTarget(yt),x.getClearColor(z),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),G&&qt.render(K);const Gt=x.toneMapping;x.toneMapping=fi;const $t=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),nt===!0&&xt.setGlobalState(x.clippingPlanes,J),zo(P,K,J),I.updateMultisampleRenderTarget(yt),I.updateRenderTargetMipmap(yt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ht=0,le=B.length;Ht<le;Ht++){const _e=B[Ht],Se=_e.object,rn=_e.geometry,de=_e.material,Bt=_e.group;if(de.side===Ee&&Se.layers.test(J.layers)){const ti=de.side;de.side=Je,de.needsUpdate=!0,qc(Se,K,J,rn,de,Bt),de.side=ti,de.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(yt),I.updateRenderTargetMipmap(yt))}x.setRenderTarget(Ot),x.setClearColor(z,O),$t!==void 0&&(J.viewport=$t),x.toneMapping=Gt}function zo(P,B,K){const J=B.isScene===!0?B.overrideMaterial:null;for(let W=0,yt=P.length;W<yt;W++){const Pt=P[W],Ot=Pt.object,Gt=Pt.geometry,$t=J===null?Pt.material:J,Qt=Pt.group;Ot.layers.test(K.layers)&&qc(Ot,B,K,Gt,$t,Qt)}}function qc(P,B,K,J,W,yt){P.onBeforeRender(x,B,K,J,W,yt),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(x,B,K,J,P,yt),W.transparent===!0&&W.side===Ee&&W.forceSinglePass===!1?(W.side=Je,W.needsUpdate=!0,x.renderBufferDirect(K,B,J,W,P,yt),W.side=Di,W.needsUpdate=!0,x.renderBufferDirect(K,B,J,W,P,yt),W.side=Ee):x.renderBufferDirect(K,B,J,W,P,yt),P.onAfterRender(x,B,K,J,W,yt)}function No(P,B,K){B.isScene!==!0&&(B=it);const J=St.get(P),W=m.state.lights,yt=m.state.shadowsArray,Pt=W.state.version,Ot=It.getParameters(P,W.state,yt,B,K),Gt=It.getProgramCacheKey(Ot);let $t=J.programs;J.environment=P.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(P.isMeshStandardMaterial?q:C).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?B.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",Jt),$t=new Map,J.programs=$t);let Qt=$t.get(Gt);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===Pt)return jc(P,Ot),Qt}else Ot.uniforms=It.getUniforms(P),P.onBeforeCompile(Ot,x),Qt=It.acquireProgram(Ot,Gt),$t.set(Gt,Qt),J.uniforms=Ot.uniforms;const Ht=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=xt.uniform),jc(P,Ot),J.needsLights=Sd(P),J.lightsStateVersion=Pt,J.needsLights&&(Ht.ambientLightColor.value=W.state.ambient,Ht.lightProbe.value=W.state.probe,Ht.directionalLights.value=W.state.directional,Ht.directionalLightShadows.value=W.state.directionalShadow,Ht.spotLights.value=W.state.spot,Ht.spotLightShadows.value=W.state.spotShadow,Ht.rectAreaLights.value=W.state.rectArea,Ht.ltc_1.value=W.state.rectAreaLTC1,Ht.ltc_2.value=W.state.rectAreaLTC2,Ht.pointLights.value=W.state.point,Ht.pointLightShadows.value=W.state.pointShadow,Ht.hemisphereLights.value=W.state.hemi,Ht.directionalShadowMap.value=W.state.directionalShadowMap,Ht.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ht.spotShadowMap.value=W.state.spotShadowMap,Ht.spotLightMatrix.value=W.state.spotLightMatrix,Ht.spotLightMap.value=W.state.spotLightMap,Ht.pointShadowMap.value=W.state.pointShadowMap,Ht.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function Yc(P){if(P.uniformsList===null){const B=P.currentProgram.getUniforms();P.uniformsList=Or.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function jc(P,B){const K=St.get(P);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function _d(P,B,K,J,W){B.isScene!==!0&&(B=it),I.resetTextureUnits();const yt=B.fog,Pt=J.isMeshStandardMaterial?B.environment:null,Ot=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Vs,Gt=(J.isMeshStandardMaterial?q:C).get(J.envMap||Pt),$t=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!K.morphAttributes.position,le=!!K.morphAttributes.normal,_e=!!K.morphAttributes.color;let Se=fi;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Se=x.toneMapping);const rn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=rn!==void 0?rn.length:0,Bt=St.get(J),ti=m.state.lights;if(nt===!0&&(mt===!0||P!==w)){const _n=P===w&&J.id===_;xt.setState(J,P,_n)}let fe=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ti.state.version||Bt.outputColorSpace!==Ot||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==Gt||J.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==xt.numPlanes||Bt.numIntersection!==xt.numIntersection)||Bt.vertexAlphas!==$t||Bt.vertexTangents!==Qt||Bt.morphTargets!==Ht||Bt.morphNormals!==le||Bt.morphColors!==_e||Bt.toneMapping!==Se||Bt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Bt.__version=J.version);let In=Bt.currentProgram;fe===!0&&(In=No(J,B,W));let rs=!1,fn=!1,$s=!1;const Te=In.getUniforms(),Bn=Bt.uniforms;if(vt.useProgram(In.program)&&(rs=!0,fn=!0,$s=!0),J.id!==_&&(_=J.id,fn=!0),rs||w!==P){vt.buffers.depth.getReversed()?(X.copy(P.projectionMatrix),Ef(X),Af(X),Te.setValue(R,"projectionMatrix",X)):Te.setValue(R,"projectionMatrix",P.projectionMatrix),Te.setValue(R,"viewMatrix",P.matrixWorldInverse);const bi=Te.map.cameraPosition;bi!==void 0&&bi.setValue(R,tt.setFromMatrixPosition(P.matrixWorld)),bt.logarithmicDepthBuffer&&Te.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Te.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,fn=!0,$s=!0)}if(W.isSkinnedMesh){Te.setOptional(R,W,"bindMatrix"),Te.setOptional(R,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Te.setValue(R,"boneTexture",_n.boneTexture,I))}W.isBatchedMesh&&(Te.setOptional(R,W,"batchingTexture"),Te.setValue(R,"batchingTexture",W._matricesTexture,I),Te.setOptional(R,W,"batchingIdTexture"),Te.setValue(R,"batchingIdTexture",W._indirectTexture,I),Te.setOptional(R,W,"batchingColorTexture"),W._colorsTexture!==null&&Te.setValue(R,"batchingColorTexture",W._colorsTexture,I));const Zs=K.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&jt.update(W,K,In),(fn||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,Te.setValue(R,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Bn.envMap.value=Gt,Bn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),fn&&(Te.setValue(R,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Md(Bn,$s),yt&&J.fog===!0&&Tt.refreshFogUniforms(Bn,yt),Tt.refreshMaterialUniforms(Bn,J,H,$,m.state.transmissionRenderTarget[P.id]),Or.upload(R,Yc(Bt),Bn,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Or.upload(R,Yc(Bt),Bn,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Te.setValue(R,"center",W.center),Te.setValue(R,"modelViewMatrix",W.modelViewMatrix),Te.setValue(R,"normalMatrix",W.normalMatrix),Te.setValue(R,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const _n=J.uniformsGroups;for(let bi=0,xi=_n.length;bi<xi;bi++){const $c=_n[bi];V.update($c,In),V.bind($c,In)}}return In}function Md(P,B){P.ambientLightColor.needsUpdate=B,P.lightProbe.needsUpdate=B,P.directionalLights.needsUpdate=B,P.directionalLightShadows.needsUpdate=B,P.pointLights.needsUpdate=B,P.pointLightShadows.needsUpdate=B,P.spotLights.needsUpdate=B,P.spotLightShadows.needsUpdate=B,P.rectAreaLights.needsUpdate=B,P.hemisphereLights.needsUpdate=B}function Sd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,B,K){St.get(P.texture).__webglTexture=B,St.get(P.depthTexture).__webglTexture=K;const J=St.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,B){const K=St.get(P);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(P,B=0,K=0){S=P,M=B,A=K;let J=!0,W=null,yt=!1,Pt=!1;if(P){const Gt=St.get(P);if(Gt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Gt.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Gt.__hasExternalTextures)I.rebindTextures(P,St.get(P.texture).__webglTexture,St.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ht=P.depthTexture;if(Gt.__boundDepthTexture!==Ht){if(Ht!==null&&St.has(Ht)&&(P.width!==Ht.image.width||P.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Pt=!0);const Qt=St.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qt[B])?W=Qt[B][K]:W=Qt[B],yt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?W=St.get(P).__webglMultisampledFramebuffer:Array.isArray(Qt)?W=Qt[K]:W=Qt,E.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else E.copy(lt).multiplyScalar(H).floor(),U.copy(Mt).multiplyScalar(H).floor(),L=pt;if(vt.bindFramebuffer(R.FRAMEBUFFER,W)&&J&&vt.drawBuffers(P,W),vt.viewport(E),vt.scissor(U),vt.setScissorTest(L),yt){const Gt=St.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Gt.__webglTexture,K)}else if(Pt){const Gt=St.get(P.texture),$t=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,K||0,$t)}_=-1},this.readRenderTargetPixels=function(P,B,K,J,W,yt,Pt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=St.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){vt.bindFramebuffer(R.FRAMEBUFFER,Ot);try{const Gt=P.texture,$t=Gt.format,Qt=Gt.type;if(!bt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=P.width-J&&K>=0&&K<=P.height-W&&R.readPixels(B,K,J,W,ee.convert($t),ee.convert(Qt),yt)}finally{const Gt=S!==null?St.get(S).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(P,B,K,J,W,yt,Pt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=St.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){const Gt=P.texture,$t=Gt.format,Qt=Gt.type;if(!bt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=P.width-J&&K>=0&&K<=P.height-W){vt.bindFramebuffer(R.FRAMEBUFFER,Ot);const Ht=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ht),R.bufferData(R.PIXEL_PACK_BUFFER,yt.byteLength,R.STREAM_READ),R.readPixels(B,K,J,W,ee.convert($t),ee.convert(Qt),0);const le=S!==null?St.get(S).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,le);const _e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Tf(R,_e,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ht),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,yt),R.deleteBuffer(Ht),R.deleteSync(_e),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,B=null,K=0){P.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,P=arguments[1]);const J=Math.pow(2,-K),W=Math.floor(P.image.width*J),yt=Math.floor(P.image.height*J),Pt=B!==null?B.x:0,Ot=B!==null?B.y:0;I.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,K,0,0,Pt,Ot,W,yt),vt.unbindTexture()},this.copyTextureToTexture=function(P,B,K=null,J=null,W=0){P.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],B=arguments[2],W=arguments[3]||0,K=null);let yt,Pt,Ot,Gt,$t,Qt,Ht,le,_e;const Se=P.isCompressedTexture?P.mipmaps[W]:P.image;K!==null?(yt=K.max.x-K.min.x,Pt=K.max.y-K.min.y,Ot=K.isBox3?K.max.z-K.min.z:1,Gt=K.min.x,$t=K.min.y,Qt=K.isBox3?K.min.z:0):(yt=Se.width,Pt=Se.height,Ot=Se.depth||1,Gt=0,$t=0,Qt=0),J!==null?(Ht=J.x,le=J.y,_e=J.z):(Ht=0,le=0,_e=0);const rn=ee.convert(B.format),de=ee.convert(B.type);let Bt;B.isData3DTexture?(I.setTexture3D(B,0),Bt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),Bt=R.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),Bt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const ti=R.getParameter(R.UNPACK_ROW_LENGTH),fe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),In=R.getParameter(R.UNPACK_SKIP_PIXELS),rs=R.getParameter(R.UNPACK_SKIP_ROWS),fn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qt);const $s=P.isDataArrayTexture||P.isData3DTexture,Te=B.isDataArrayTexture||B.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Bn=St.get(P),Zs=St.get(B),_n=St.get(Bn.__renderTarget),bi=St.get(Zs.__renderTarget);vt.bindFramebuffer(R.READ_FRAMEBUFFER,_n.__webglFramebuffer),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let xi=0;xi<Ot;xi++)$s&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(P).__webglTexture,W,Qt+xi),P.isDepthTexture?(Te&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.get(B).__webglTexture,W,_e+xi),R.blitFramebuffer(Gt,$t,yt,Pt,Ht,le,yt,Pt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Te?R.copyTexSubImage3D(Bt,W,Ht,le,_e+xi,Gt,$t,yt,Pt):R.copyTexSubImage2D(Bt,W,Ht,le,_e+xi,Gt,$t,yt,Pt);vt.bindFramebuffer(R.READ_FRAMEBUFFER,null),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Te?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(Bt,W,Ht,le,_e,yt,Pt,Ot,rn,de,Se.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Bt,W,Ht,le,_e,yt,Pt,Ot,rn,Se.data):R.texSubImage3D(Bt,W,Ht,le,_e,yt,Pt,Ot,rn,de,Se):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,W,Ht,le,yt,Pt,rn,de,Se.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,W,Ht,le,Se.width,Se.height,rn,Se.data):R.texSubImage2D(R.TEXTURE_2D,W,Ht,le,yt,Pt,rn,de,Se);R.pixelStorei(R.UNPACK_ROW_LENGTH,ti),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,In),R.pixelStorei(R.UNPACK_SKIP_ROWS,rs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,fn),W===0&&B.generateMipmaps&&R.generateMipmap(Bt),vt.unbindTexture()},this.copyTextureToTexture3D=function(P,B,K=null,J=null,W=0){return P.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,P=arguments[2],B=arguments[3],W=arguments[4]||0),go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,B,K,J,W)},this.initRenderTarget=function(P){St.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),vt.unbindTexture()},this.resetState=function(){M=0,A=0,S=null,vt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Co extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const jh=new D,$h=new ae,Zh=new ae,k2=new D,Kh=new At,rr=new D,Ha=new Kn,Jh=new At,Va=new Qr;class F2 extends Xt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qc,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rr),this.boundingBox.expandByPoint(rr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rr),this.boundingSphere.expandByPoint(rr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(s),t.ray.intersectsSphere(Ha)!==!1&&(Jh.copy(s).invert(),Va.copy(t.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&Va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Va)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;$h.fromBufferAttribute(s.attributes.skinIndex,t),Zh.fromBufferAttribute(s.attributes.skinWeight,t),jh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const r=Zh.getComponent(o);if(r!==0){const a=$h.getComponent(o);Kh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(k2.copy(jh).applyMatrix4(Kh),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Nu extends Ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wc extends Qe{constructor(t=null,e=1,n=1,s,o,r,a,l,c=yn,h=yn,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new At,z2=new At;class _c{constructor(t=[],e=[]){this.uuid=ki(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new At;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=t.length;o<r;o++){const a=t[o]?t[o].matrixWorld:z2;Qh.multiplyMatrices(a,e[o]),Qh.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new wc(e,t,t,bn,Gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let r=e[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new Nu),this.bones.push(r),this.boneInverses.push(new At().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const r=e[s];t.bones.push(r.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Ns extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new At,t0=new At,ar=[],e0=new tn,N2=new At,eo=new Xt,no=new Kn;class ko extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,N2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),e0.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(e0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),no.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),t.ray.intersectsSphere(no)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ws),t0.multiplyMatrices(n,ws),eo.matrixWorld=t0,eo.raycast(t,ar);for(let r=0,a=ar.length;r<a;r++){const l=ar[r];l.instanceId=o,l.object=this,e.push(l)}ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(s*this.count),s,this.count,dc,Gn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class O2 extends ss{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const n0=new At,ql=new Qr,lr=new Kn,cr=new D;class G2 extends Ge{constructor(t=new ge,e=new O2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=o,t.ray.intersectsSphere(lr)===!1)return;n0.copy(s).invert(),ql.copy(t.ray).applyMatrix4(n0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,v=f;p<v;p++){const g=c.getX(p);cr.fromBufferAttribute(u,g),i0(cr,g,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,v=f;p<v;p++)cr.fromBufferAttribute(u,p),i0(cr,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function i0(i,t,e,n,s,o,r){const a=ql.distanceSqToPoint(i);if(a<e){const l=new D;ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ou extends Qe{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new ht:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,l=new At;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new D)}o[0]=new D,r[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ne(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mc extends Jn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class H2 extends Mc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const hr=new D,Ba=new Sc,Wa=new Sc,Xa=new Sc;class es extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(hr.subVectors(s[0],s[1]).add(s[0]),c=hr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(hr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=hr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Ba.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),Xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ba.calc(l),Wa.calc(l),Xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function s0(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function V2(i,t){const e=1-i;return e*e*t}function B2(i,t){return 2*(1-i)*i*t}function W2(i,t){return i*i*t}function yo(i,t,e,n){return V2(i,t)+B2(i,e)+W2(i,n)}function X2(i,t){const e=1-i;return e*e*e*t}function q2(i,t){const e=1-i;return 3*e*e*i*t}function Y2(i,t){return 3*(1-i)*i*i*t}function j2(i,t){return i*i*i*t}function wo(i,t,e,n,s){return X2(i,t)+q2(i,e)+Y2(i,n)+j2(i,s)}class Gu extends Jn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(wo(t,s.x,o.x,r.x,a.x),wo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $2 extends Jn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(wo(t,s.x,o.x,r.x,a.x),wo(t,s.y,o.y,r.y,a.y),wo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hu extends Jn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yl extends Jn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vu extends Jn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(yo(t,s.x,o.x,r.x),yo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tc extends Jn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(yo(t,s.x,o.x,r.x),yo(t,s.y,o.y,r.y),yo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(s0(a,l.x,c.x,h.x,u.x),s0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var jr=Object.freeze({__proto__:null,ArcCurve:H2,CatmullRomCurve3:es,CubicBezierCurve:Gu,CubicBezierCurve3:$2,EllipseCurve:Mc,LineCurve:Hu,LineCurve3:Yl,QuadraticBezierCurve:Vu,QuadraticBezierCurve3:Tc,SplineCurve:Bu});class Z2 extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jr[s.type]().fromJSON(s))}return this}}class Ro extends Z2{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hu(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Vu(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Gu(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Mc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sa extends ge{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new D,d=new ht,f=new D,p=new D,v=new D;let g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let b=0;b<=e;b++){const y=n+b*h*s,x=Math.sin(y),T=Math.cos(y);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*x,u.y=t[M].y,u.z=t[M].x*T,r.push(u.x,u.y,u.z),d.x=b/e,d.y=M/(t.length-1),a.push(d.x,d.y);const A=l[3*M+0]*x,S=l[3*M+1],_=l[3*M+0]*T;c.push(A,S,_)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const x=y+b*t.length,T=x,M=x+t.length,A=x+t.length+1,S=x+1;o.push(T,M,S),o.push(A,S,M)}this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends sa{constructor(t=1,e=1,n=4,s=8){const o=new Ro;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new oa(t.radius,t.length,t.capSegments,t.radialSegments)}}class Zn extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new D,h=new ht;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ze extends ge{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;b(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function b(){const x=new D,T=new D;let M=0;const A=(e-t)/n;for(let S=0;S<=o;S++){const _=[],w=S/o,E=w*(e-t)+t;for(let U=0;U<=s;U++){const L=U/s,z=L*l+a,O=Math.sin(z),F=Math.cos(z);T.x=E*O,T.y=-w*n+g,T.z=E*F,u.push(T.x,T.y,T.z),x.set(O,A,F).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-w),_.push(p++)}v.push(_)}for(let S=0;S<s;S++)for(let _=0;_<o;_++){const w=v[_][S],E=v[_+1][S],U=v[_+1][S+1],L=v[_][S+1];(t>0||_!==0)&&(h.push(w,E,L),M+=3),(e>0||_!==o-1)&&(h.push(E,U,L),M+=3)}c.addGroup(m,M,0),m+=M}function y(x){const T=p,M=new ht,A=new D;let S=0;const _=x===!0?t:e,w=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;const E=p;for(let U=0;U<=s;U++){const z=U/s*l+a,O=Math.cos(z),F=Math.sin(z);A.x=_*F,A.y=g*w,A.z=_*O,u.push(A.x,A.y,A.z),d.push(0,w,0),M.x=O*.5+.5,M.y=F*.5*w+.5,f.push(M.x,M.y),p++}for(let U=0;U<s;U++){const L=T+U,z=E+U;x===!0?h.push(z,z+1,L):h.push(z+1,z,L),S+=3}c.addGroup(m,S,x===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends ze{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ra(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ec extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const y=new D,x=new D,T=new D;for(let M=0;M<e.length;M+=3)f(e[M+0],y),f(e[M+1],x),f(e[M+2],T),l(y,x,T,b)}function l(b,y,x,T){const M=T+1,A=[];for(let S=0;S<=M;S++){A[S]=[];const _=b.clone().lerp(x,S/M),w=y.clone().lerp(x,S/M),E=M-S;for(let U=0;U<=E;U++)U===0&&S===M?A[S][U]=_:A[S][U]=_.clone().lerp(w,U/E)}for(let S=0;S<M;S++)for(let _=0;_<2*(M-S)-1;_++){const w=Math.floor(_/2);_%2===0?(d(A[S][w+1]),d(A[S+1][w]),d(A[S][w])):(d(A[S][w+1]),d(A[S+1][w+1]),d(A[S+1][w]))}}function c(b){const y=new D;for(let x=0;x<o.length;x+=3)y.x=o[x+0],y.y=o[x+1],y.z=o[x+2],y.normalize().multiplyScalar(b),o[x+0]=y.x,o[x+1]=y.y,o[x+2]=y.z}function h(){const b=new D;for(let y=0;y<o.length;y+=3){b.x=o[y+0],b.y=o[y+1],b.z=o[y+2];const x=g(b)/2/Math.PI+.5,T=m(b)/Math.PI+.5;r.push(x,1-T)}p(),u()}function u(){for(let b=0;b<r.length;b+=6){const y=r[b+0],x=r[b+2],T=r[b+4],M=Math.max(y,x,T),A=Math.min(y,x,T);M>.9&&A<.1&&(y<.2&&(r[b+0]+=1),x<.2&&(r[b+2]+=1),T<.2&&(r[b+4]+=1))}}function d(b){o.push(b.x,b.y,b.z)}function f(b,y){const x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function p(){const b=new D,y=new D,x=new D,T=new D,M=new ht,A=new ht,S=new ht;for(let _=0,w=0;_<o.length;_+=9,w+=6){b.set(o[_+0],o[_+1],o[_+2]),y.set(o[_+3],o[_+4],o[_+5]),x.set(o[_+6],o[_+7],o[_+8]),M.set(r[w+0],r[w+1]),A.set(r[w+2],r[w+3]),S.set(r[w+4],r[w+5]),T.copy(b).add(y).add(x).divideScalar(3);const E=g(T);v(M,w+0,b,E),v(A,w+2,y,E),v(S,w+4,x,E)}}function v(b,y,x,T){T<0&&b.x===1&&(r[y]=b.x-1),x.x===0&&x.z===0&&(r[y]=T/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.vertices,t.indices,t.radius,t.details)}}class Xs extends Ro{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ro().fromJSON(s))}return this}}const K2={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Wu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(n&&(o=nv(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Po(o,r,e,a,l,f,0),r}};function Wu(i,t,e,n,s){let o,r;if(s===fv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=o0(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=o0(o,i[o],i[o+1],r);return r&&aa(r,r.next)&&(Do(r),r=r.next),r}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(aa(e,e.next)||Re(e.prev,e,e.next)===0)){if(Do(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Po(i,t,e,n,s,o,r){if(!i)return;!r&&o&&av(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?Q2(i,n,s,o):J2(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Do(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=tv(ns(i),t,e),Po(i,t,e,n,s,o,2)):r===2&&ev(i,t,e,n,s,o):Po(ns(i),t,e,n,s,o,1);break}}}function J2(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ts(s,a,o,l,r,c,p.x,p.y)&&Re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Q2(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Re(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=jl(f,p,t,e,n),b=jl(v,g,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=b;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Ts(a,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ts(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Ts(a,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ts(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tv(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!aa(s,o)&&Xu(s,n,n.next,o)&&Lo(s,o)&&Lo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Do(n),Do(n.next),n=i=o),n=n.next}while(n!==i);return ns(n)}function ev(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&hv(r,a)){let l=qu(r,a);r=ns(r,r.next),l=ns(l,l.next),Po(r,t,e,n,s,o,0),Po(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function nv(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Wu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cv(c));for(s.sort(iv),o=0;o<s.length;o++)e=sv(s[o],e);return e}function iv(i,t){return i.x-t.x}function sv(i,t){const e=ov(i,t);if(!e)return t;const n=qu(e,i);return ns(n,n.next),ns(e,e.next)}function ov(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Ts(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Lo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&rv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function rv(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function av(i,t,e,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lv(s)}function lv(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uv(i,t)&&(Lo(i,t)&&Lo(t,i)&&dv(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||aa(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function aa(i,t){return i.x===t.x&&i.y===t.y}function Xu(i,t,e,n){const s=dr(Re(i,t,e)),o=dr(Re(i,t,n)),r=dr(Re(e,n,i)),a=dr(Re(e,n,t));return!!(s!==o&&r!==a||s===0&&ur(i,e,t)||o===0&&ur(i,n,t)||r===0&&ur(e,i,n)||a===0&&ur(e,t,n))}function ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function dr(i){return i>0?1:i<0?-1:0}function uv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lo(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function dv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qu(i,t){const e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function o0(i,t,e,n){const s=new $l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Do(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class _o{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return _o.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];r0(t),a0(n,t);let r=t.length;e.forEach(r0);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,a0(n,e[l]);const a=K2.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function r0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function a0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class os extends ge{constructor(t=new Xs([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:pv;let y,x=!1,T,M,A,S;m&&(y=m.getSpacedPoints(h),x=!0,d=!1,T=m.computeFrenetFrames(h,!1),M=new D,A=new D,S=new D),d||(g=0,f=0,p=0,v=0);const _=a.extractPoints(c);let w=_.shape;const E=_.holes;if(!_o.isClockWise(w)){w=w.reverse();for(let G=0,k=E.length;G<k;G++){const R=E[G];_o.isClockWise(R)&&(E[G]=R.reverse())}}const L=_o.triangulateShape(w,E),z=w;for(let G=0,k=E.length;G<k;G++){const R=E[G];w=w.concat(R)}function O(G,k,R){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(k,R)}const F=w.length,$=L.length;function H(G,k,R){let gt,et,bt;const vt=G.x-k.x,Ut=G.y-k.y,St=R.x-G.x,I=R.y-G.y,C=vt*vt+Ut*Ut,q=vt*I-Ut*St;if(Math.abs(q)>Number.EPSILON){const at=Math.sqrt(C),dt=Math.sqrt(St*St+I*I),ct=k.x-Ut/at,It=k.y+vt/at,Tt=R.x-I/dt,Lt=R.y+St/dt,ie=((Tt-ct)*I-(Lt-It)*St)/(vt*I-Ut*St);gt=ct+vt*ie-G.x,et=It+Ut*ie-G.y;const xt=gt*gt+et*et;if(xt<=2)return new ht(gt,et);bt=Math.sqrt(xt/2)}else{let at=!1;vt>Number.EPSILON?St>Number.EPSILON&&(at=!0):vt<-Number.EPSILON?St<-Number.EPSILON&&(at=!0):Math.sign(Ut)===Math.sign(I)&&(at=!0),at?(gt=-Ut,et=vt,bt=Math.sqrt(C)):(gt=vt,et=Ut,bt=Math.sqrt(C/2))}return new ht(gt/bt,et/bt)}const st=[];for(let G=0,k=z.length,R=k-1,gt=G+1;G<k;G++,R++,gt++)R===k&&(R=0),gt===k&&(gt=0),st[G]=H(z[G],z[R],z[gt]);const ot=[];let lt,Mt=st.concat();for(let G=0,k=E.length;G<k;G++){const R=E[G];lt=[];for(let gt=0,et=R.length,bt=et-1,vt=gt+1;gt<et;gt++,bt++,vt++)bt===et&&(bt=0),vt===et&&(vt=0),lt[gt]=H(R[gt],R[bt],R[vt]);ot.push(lt),Mt=Mt.concat(lt)}for(let G=0;G<g;G++){const k=G/g,R=f*Math.cos(k*Math.PI/2),gt=p*Math.sin(k*Math.PI/2)+v;for(let et=0,bt=z.length;et<bt;et++){const vt=O(z[et],st[et],gt);X(vt.x,vt.y,-R)}for(let et=0,bt=E.length;et<bt;et++){const vt=E[et];lt=ot[et];for(let Ut=0,St=vt.length;Ut<St;Ut++){const I=O(vt[Ut],lt[Ut],gt);X(I.x,I.y,-R)}}}const pt=p+v;for(let G=0;G<F;G++){const k=d?O(w[G],Mt[G],pt):w[G];x?(A.copy(T.normals[0]).multiplyScalar(k.x),M.copy(T.binormals[0]).multiplyScalar(k.y),S.copy(y[0]).add(A).add(M),X(S.x,S.y,S.z)):X(k.x,k.y,0)}for(let G=1;G<=h;G++)for(let k=0;k<F;k++){const R=d?O(w[k],Mt[k],pt):w[k];x?(A.copy(T.normals[G]).multiplyScalar(R.x),M.copy(T.binormals[G]).multiplyScalar(R.y),S.copy(y[G]).add(A).add(M),X(S.x,S.y,S.z)):X(R.x,R.y,u/h*G)}for(let G=g-1;G>=0;G--){const k=G/g,R=f*Math.cos(k*Math.PI/2),gt=p*Math.sin(k*Math.PI/2)+v;for(let et=0,bt=z.length;et<bt;et++){const vt=O(z[et],st[et],gt);X(vt.x,vt.y,u+R)}for(let et=0,bt=E.length;et<bt;et++){const vt=E[et];lt=ot[et];for(let Ut=0,St=vt.length;Ut<St;Ut++){const I=O(vt[Ut],lt[Ut],gt);x?X(I.x,I.y+y[h-1].y,y[h-1].x+R):X(I.x,I.y,u+R)}}}Z(),nt();function Z(){const G=s.length/3;if(d){let k=0,R=F*k;for(let gt=0;gt<$;gt++){const et=L[gt];Q(et[2]+R,et[1]+R,et[0]+R)}k=h+g*2,R=F*k;for(let gt=0;gt<$;gt++){const et=L[gt];Q(et[0]+R,et[1]+R,et[2]+R)}}else{for(let k=0;k<$;k++){const R=L[k];Q(R[2],R[1],R[0])}for(let k=0;k<$;k++){const R=L[k];Q(R[0]+F*h,R[1]+F*h,R[2]+F*h)}}n.addGroup(G,s.length/3-G,0)}function nt(){const G=s.length/3;let k=0;mt(z,k),k+=z.length;for(let R=0,gt=E.length;R<gt;R++){const et=E[R];mt(et,k),k+=et.length}n.addGroup(G,s.length/3-G,1)}function mt(G,k){let R=G.length;for(;--R>=0;){const gt=R;let et=R-1;et<0&&(et=G.length-1);for(let bt=0,vt=h+g*2;bt<vt;bt++){const Ut=F*bt,St=F*(bt+1),I=k+gt+Ut,C=k+et+Ut,q=k+et+St,at=k+gt+St;tt(I,C,q,at)}}}function X(G,k,R){l.push(G),l.push(k),l.push(R)}function Q(G,k,R){j(G),j(k),j(R);const gt=s.length/3,et=b.generateTopUV(n,s,gt-3,gt-2,gt-1);it(et[0]),it(et[1]),it(et[2])}function tt(G,k,R,gt){j(G),j(k),j(gt),j(k),j(R),j(gt);const et=s.length/3,bt=b.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);it(bt[0]),it(bt[1]),it(bt[3]),it(bt[1]),it(bt[2]),it(bt[3])}function j(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function it(G){o.push(G.x),o.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jr[s.type]().fromJSON(s)),new os(n,t.options)}}const pv={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(o,r),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new ht(r,1-l),new ht(c,1-u),new ht(d,1-p),new ht(v,1-m)]:[new ht(a,1-l),new ht(h,1-u),new ht(f,1-p),new ht(g,1-m)]}};function mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ac extends Ec{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ac(t.radius,t.detail)}}class Cc extends ge{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new D,p=new ht;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=o+g/n*r;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const b=m+g,y=b,x=b+n+1,T=b+n+2,M=b+1;a.push(y,x,M),a.push(x,T,M)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class He extends ge{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const b=[],y=m/n;let x=0;m===0&&r===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const M=T/e;u.x=-t*Math.cos(s+M*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+M*o)*Math.sin(r+y*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(M+x,1-y),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const y=h[m][b+1],x=h[m][b],T=h[m+1][b],M=h[m+1][b+1];(m!==0||r>0)&&f.push(y,x,M),(m!==n-1||l<Math.PI)&&f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ii extends ge{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const v=p/s*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,b=(s+1)*f+p;r.push(v,g,b),r.push(g,m,b)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class la extends ge{constructor(t=new Tc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new D,l=new D,c=new ht;let h=new D;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function v(){for(let y=0;y<e;y++)g(y);g(o===!1?e:0),b(),m()}function g(y){h=t.getPointAt(y/e,h);const x=r.normals[y],T=r.binormals[y];for(let M=0;M<=s;M++){const A=M/s*Math.PI*2,S=Math.sin(A),_=-Math.cos(A);l.x=_*x.x+S*T.x,l.y=_*x.y+S*T.y,l.z=_*x.z+S*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const T=(s+1)*(y-1)+(x-1),M=(s+1)*y+(x-1),A=(s+1)*y+x,S=(s+1)*(y-1)+x;p.push(T,M,S),p.push(M,A,S)}}function b(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new la(new jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class gv extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class xe extends ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qa extends xe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class vv extends ss{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rc extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yu extends Rc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ya=new At,l0=new D,c0=new D;class ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;l0.setFromMatrixPosition(t.matrixWorld),e.position.copy(l0),c0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(c0),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const h0=new At,io=new D,ja=new D;class bv extends ju{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),io.setFromMatrixPosition(t.matrixWorld),n.position.copy(io),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),h0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}}class $u extends Rc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xv extends ju{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends Rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new xv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ca{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=u0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=u0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function u0(){return performance.now()}const d0=new At;class yv{constructor(t,e,n=0,s=1/0){this.ray=new Qr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return d0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(d0),this}intersectObject(t,e=!0,n=[]){return Zl(t,this,n,e),n.sort(f0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Zl(t[s],this,n,e);return n.sort(f0),n}}function f0(i,t){return i.distance-t.distance}function Zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Zl(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);var p0="1.3.26";function Ku(i,t,e){return Math.max(i,Math.min(t,e))}function wv(i,t,e){return(1-e)*i+e*t}function _v(i,t,e,n){return wv(i,t,1-Math.exp(-e*n))}function Mv(i,t){return(i%t+t)%t}var Sv=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(i){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Ku(0,this.currentTime/this.duration,1);t=n>=1;const s=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=_v(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:o,onUpdate:r}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=r}};function Tv(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var Ev=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=Tv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,t;(i=this.wrapperResizeObserver)==null||i.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ju=class{constructor(){Nt(this,"events",{})}emit(i,...t){var n;const e=this.events[i]||[];for(let s=0,o=e.length;s<o;s++)(n=e[s])==null||n.call(e,...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}}off(i,t){var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const Av=100/6,Ei={passive:!1};function m0(i,t){return i===1?Av:i===2?t:1}var Cv=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new Ju);Nt(this,"onTouchStart",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Nt(this,"onTouchMove",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});Nt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Nt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const s=m0(n,this.window.width),o=m0(n,this.window.height);t*=s,e*=o,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ei),this.element.addEventListener("touchstart",this.onTouchStart,Ei),this.element.addEventListener("touchmove",this.onTouchMove,Ei),this.element.addEventListener("touchend",this.onTouchEnd,Ei)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ei),this.element.removeEventListener("touchstart",this.onTouchStart,Ei),this.element.removeEventListener("touchmove",this.onTouchMove,Ei),this.element.removeEventListener("touchend",this.onTouchEnd,Ei)}};const g0=i=>Math.min(1,1.001-2**(-10*i));var Rv=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:o=.075,touchInertiaExponent:r=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:v=!0,prevent:g,virtualScroll:m,overscroll:b=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:T=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:S=A,stopInertiaOnNavigate:_=!1,respectReducedMotion:w=!0}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"_rafId",null);Nt(this,"_isDraggingSelection",!1);Nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Nt(this,"isTouching");Nt(this,"isIos");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new Sv);Nt(this,"emitter",new Ju);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",i=>{var t;(t=i.propertyName)!=null&&t.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Nt(this,"onClick",i=>{const t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(s=>e.host===s.host&&e.pathname===s.pathname&&s.hash);if(n){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Nt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Nt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const s=n.type.includes("touch"),o=n.type.includes("wheel");if(s&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const r=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&r&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(r||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var v,g,m,b,y;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((v=p.hasAttribute)==null?void 0:v.call(p,"data-lenis-prevent"))||h==="vertical"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-horizontal"))||s&&((b=p.hasAttribute)==null?void 0:b.call(p,"data-lenis-prevent-touch"))||o&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=s&&this.options.syncTouch,f=s&&n.type==="touchend";f&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=p0,window.lenis||(window.lenis={}),window.lenis.version=p0,u==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=g0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:o,touchInertiaExponent:r,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:p,autoResize:v,prevent:g,virtualScroll:m,overscroll:b,autoRaf:y,anchors:x,autoToggle:T,allowNestedScroll:M,naiveDimensions:S,stopInertiaOnNavigate:_,respectReducedMotion:w},this.dimensions=new Ev(i,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Cv(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=i.targetTouches[0]??i.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const s=n[0],o=n[n.length-1],r=40,a=Math.hypot(e.clientX-s.left,e.clientY-s.top)<=r,l=Math.hypot(e.clientX-o.right,e.clientY-o.bottom)<=r;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:s=!0,lerp:o=s?this.options.lerp:void 0,duration:r=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(s?e=!0:(o=1,r=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=i,f=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(p=d),p){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}const v=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),b=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);d=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(y)?0:y)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=Ku(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=u??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=d),typeof r=="number"&&typeof a!="function"?a=g0:typeof a=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,d,{duration:r,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),s&&(this.targetScroll=p),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now();i._lenis||(i._lenis={});const s=i._lenis;let o,r,a,l,c,h,u,d,f,p;if(n-(s.time??0)>2e3){s.time=Date.now();const M=window.getComputedStyle(i);if(s.computedStyle=M,o=["auto","overlay","scroll"].includes(M.overflowX),r=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),s.hasOverflowX=o,s.hasOverflowY=r,!(o||r))return!1;u=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,a=u>f,l=d>p,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=u,s.scrollHeight=d,s.clientWidth=f,s.clientHeight=p,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=h}else a=s.isScrollableX,l=s.isScrollableY,o=s.hasOverflowX,r=s.hasOverflowY,u=s.scrollWidth,d=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,c=s.hasOverscrollBehaviorX,h=s.hasOverscrollBehaviorY;if(!(o&&a||r&&l))return!1;const v=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let g,m,b,y,x,T;if(v==="horizontal")g=Math.round(i.scrollLeft),m=u-f,b=t,y=o,x=a,T=c;else if(v==="vertical")g=Math.round(i.scrollTop),m=d-p,b=e,y=r,x=l,T=h;else return!1;return!T&&(g>=m||g<=0)?!0:(b>0?g<m:g>0)&&y&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Mv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};const Qu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pv=new ea(-1,1,1,-1,0,1);class Lv extends ge{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const Dv=new Lv;class Pc{constructor(t){this._mesh=new Xt(Dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class td extends qs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zs.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class v0 extends qs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Iv extends qs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ed{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new td(Qu),this.copyPass.material.blending=di,this.clock=new ca}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}v0!==void 0&&(r instanceof v0?n=!0:r instanceof Iv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nd extends qs{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const Uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class is extends qs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(o,r,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new dn(o,r,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new dn(o,r,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=Uv;this.highPassUniforms=zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Qu;this.copyUniforms=zs.clone(h.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Br,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new Pc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}is.BlurDirectionX=new ht(1,0);is.BlurDirectionY=new ht(0,1);const kv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class id extends qs{constructor(){super();const t=kv;this.uniforms=zs.clone(t.uniforms),this.material=new gv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===du?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function fr(i,t){let e=i*374761393+t*668265263;return e=(e^e>>>13)*1274126177,e=e^e>>>16,(e>>>0)/4294967295}const b0=i=>i*i*(3-2*i);function Mo(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=fr(e,n),a=fr(e+1,n),l=fr(e,n+1),c=fr(e+1,n+1),h=b0(s),u=b0(o);return r+(a-r)*h+(l+(c-l)*h-(r+(a-r)*h))*u}function Kl(i,t,e=4){let n=0,s=.5,o=1,r=0;for(let a=0;a<e;a++)n+=s*(Mo(i*o,t*o)*2-1),r+=s,s*=.5,o*=2.03;return n/r}const En=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Fv=(i,t,e)=>i+(t-i)*e;function gi(i=1){let t=i>>>0;return()=>{t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}const ha=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash12(i),hash12(i+vec2(1,0)),u.x), mix(hash12(i+vec2(0,1)),hash12(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*vnoise(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return s; }
`;function zv(){const i={uSunDir:{value:new D(0,.1,1).normalize()},uZenith:{value:new ut("#2e4a7d")},uHorizon:{value:new ut("#ffb071")},uSunColor:{value:new ut("#ffb46b")},uGround:{value:new ut("#1c2a2a")},uNight:{value:0},uTime:{value:0},uCloud:{value:new ut("#ffd9c0")},uCloudShadow:{value:new ut("#8a6f86")}},t=new Ce({uniforms:i,side:Je,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      uniform vec3 uSunDir, uZenith, uHorizon, uSunColor, uGround, uCloud, uCloudShadow;
      uniform float uNight, uTime;
      varying vec3 vDir;
      ${ha}
      void main(){
        vec3 d = normalize(vDir);
        float e = d.y;
        float h = pow(1.0 - clamp(e, 0.0, 1.0), 3.2);
        vec3 col = mix(uZenith, uHorizon, h);
        // sun glow (warm halo near the sun, strongest at horizon)
        float cs = max(dot(d, uSunDir), 0.0);
        float halo = pow(cs, 14.0) * 0.38 + pow(cs, 90.0) * 0.75 + pow(cs, 3.0) * 0.08;
        col += uSunColor * halo * (1.0 - uNight * 0.85);
        // sun disk
        float disk = smoothstep(0.9993, 0.99965, cs);
        col = mix(col, uSunColor * 6.0, disk * step(0.0, uSunDir.y + 0.02));
        // clouds: soft band above the horizon
        vec2 cp = d.xz / max(e + 0.12, 0.05);
        float n = fbm(cp * 0.9 + vec2(uTime * 0.004, 0.0));
        float band = smoothstep(0.02, 0.10, e) * (1.0 - smoothstep(0.18, 0.55, e));
        float cl = smoothstep(0.52, 0.78, n) * band;
        vec3 cloudCol = mix(uCloudShadow, uCloud, smoothstep(0.5, 0.9, n) * 0.6 + pow(cs, 3.0) * 0.8);
        col = mix(col, cloudCol, cl * 0.85);
        // stars
        if (uNight > 0.01) {
          vec3 sd = d * 260.0;
          vec3 cell = floor(sd);
          float st = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          vec3 jit = vec3(fract(st * 13.1), fract(st * 71.7), fract(st * 29.3));
          float dd = length(fract(sd) - jit);
          float star = step(0.985, st) * smoothstep(0.16, 0.0, dd) * smoothstep(0.02, 0.25, e);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + st * 100.0);
          col += vec3(0.85, 0.9, 1.0) * star * tw * uNight * 1.6;
          // milky haze
          float mw = fbm(d.xz * 3.0 + 4.0) * smoothstep(0.1, 0.6, e);
          col += vec3(0.08, 0.1, 0.16) * mw * uNight * 0.6;
        }
        // below horizon
        col = mix(col, uGround, smoothstep(0.0, -0.08, e));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Xt(new He(6e3,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="sky",{mesh:e,uniforms:i}}function Nv(){const i={uTime:{value:0},uSunDir:{value:new D(0,.1,1).normalize()},uSunColor:{value:new ut("#ffb46b")},uZenith:{value:new ut("#2e4a7d")},uHorizon:{value:new ut("#ffb071")},uDeep:{value:new ut("#0d3a52")},uShallow:{value:new ut("#2fb3b0")},uFogColor:{value:new ut("#e9a98a")},uFogDensity:{value:9e-4},uNight:{value:0},uSpec:{value:1}},t=new Ce({uniforms:i,transparent:!1,vertexShader:`
      varying vec3 vWorld;
      void main(){
        vec4 w = modelMatrix * vec4(position,1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uTime, uFogDensity, uNight, uSpec;
      uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uDeep, uShallow, uFogColor;
      varying vec3 vWorld;
      ${ha}
      float shoreZ(float x){ return 16.0*sin(x*0.0042) + 9.0*sin(x*0.011+1.3) + 4.0*sin(x*0.031+0.5); }
      vec2 waveGrad(vec2 p, vec2 dir, float freq, float amp, float speed){
        float ph = dot(p, dir) * freq + uTime * speed;
        return dir * cos(ph) * amp * freq;
      }
      void main(){
        vec2 p = vWorld.xz;
        if (abs(vWorld.x) < 759.8 && vWorld.z - shoreZ(vWorld.x) < 339.8) discard;
        float camDist = length(cameraPosition - vWorld);
        float fade = 1.0 - smoothstep(200.0, 2200.0, camDist);
        vec2 g = vec2(0.0);
        g += waveGrad(p, normalize(vec2(0.2, -1.0)), 0.035, 0.9, 1.1);
        g += waveGrad(p, normalize(vec2(-0.6, -0.8)), 0.06, 0.45, 1.4);
        g += waveGrad(p, normalize(vec2(0.9, -0.4)), 0.11, 0.22, 1.9);
        g += waveGrad(p, normalize(vec2(-0.3, 0.95)), 0.19, 0.1, 2.6);
        vec2 q = p * 0.12 + vec2(uTime * 0.25, -uTime * 0.18);
        g += (vec2(vnoise(q), vnoise(q + 17.3)) - 0.5) * 0.14;
        g *= mix(0.25, 1.0, fade);
        vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 v = normalize(cameraPosition - vWorld);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
        vec3 r = reflect(-v, n);
        float re = clamp(r.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uZenith, pow(re, 1.25));
        float cs = max(dot(r, uSunDir), 0.0);
        float spec = pow(cs, 700.0) * 18.0 + pow(cs, 90.0) * 0.9 + pow(cs, 12.0) * 0.12;
        spec *= uSpec;
        float dist = vWorld.z - shoreZ(vWorld.x);
        vec3 water = mix(uShallow, uDeep, smoothstep(2.0, 170.0, dist));
        water *= mix(1.0, 0.25, uNight);
        vec3 col = mix(water, sky, fres * 0.85);
        col += uSunColor * spec;
        // shore foam: bands that roll in
        float nz = fbm(vec2(vWorld.x * 0.05, uTime * 0.2));
        float wave = sin(dist * 0.28 - uTime * 1.6 + nz * 3.0) * 0.5 + 0.5;
        float foam = smoothstep(26.0, 0.0, dist) * smoothstep(0.55, 0.95, wave);
        foam += smoothstep(4.0, 0.0, dist) * 0.8;
        foam *= smoothstep(-2.0, 1.0, dist);
        col = mix(col, vec3(0.93, 0.94, 0.92) * mix(1.0, 0.3, uNight), clamp(foam, 0.0, 1.0) * 0.75);
        // fog
        float fogF = 1.0 - exp(-uFogDensity * uFogDensity * camDist * camDist);
        col = mix(col, uFogColor, clamp(fogF, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Me(9e3,9e3,1,1);e.rotateX(-Math.PI/2);const n=new Xt(e,t);return n.position.set(0,0,3500),n.name="ocean",{mesh:n,uniforms:i}}const Gr={H01:{id:"6be1b4_a8a46da02f7c47949b2800543ce5820c~mv2.jpg",w:1500,h:1e3},H02:{id:"78b520_2f7ed2960f214750b19cb1c2c6260847~mv2.jpg",w:2880,h:1920},H03:{id:"6be1b4_7c857506aafc479d95a32ff5de819159~mv2.jpg",w:1073,h:1400},H04:{id:"78b520_c84ffaea33c04aa8850eb017cdf263c0~mv2.jpg",w:2880,h:1920},H05:{id:"6be1b4_a18d118895784dc4a40f8174ee86e8d5~mv2.jpg",w:1e3,h:1500},H06:{id:"78b520_14d89ca9aaeb4b95bf5542ddcb47808c~mv2.jpg",w:2880,h:1920},H07:{id:"6be1b4_c7c029830c754da3824bdfd704172201~mv2.jpg",w:1e3,h:1500},H08:{id:"78b520_3c6e25d1ba5b406eaff411138684879e~mv2.jpg",w:2880,h:1920},H09:{id:"6be1b4_09e89191dc57448f9b70b9271c7151e8~mv2.jpg",w:1499,h:1e3},H10:{id:"78b520_f9701cde79bc49f18a7186938c279045~mv2.jpg",w:2880,h:1920},H11:{id:"78b520_f3539a6d5a974ce2a951085ca976d96e~mv2.jpg",w:2880,h:1920},H12:{id:"78b520_88024a125eeb4770930825115d60d602~mv2.jpg",w:2880,h:1920},H13:{id:"6be1b4_a0297b0479654acdada860abbdb4866d~mv2.jpg",w:1499,h:1e3},H14:{id:"78b520_83db7b5251174ca19b3cfa6c8dba4423~mv2.jpg",w:2880,h:1920},H15:{id:"6be1b4_c5246e4673e84c1dbd405236372d155a~mv2.jpg",w:1e3,h:1500},H16:{id:"78b520_8a9d28bf3f4142fe81c1c31fad8a7025~mv2.jpg",w:2880,h:1920},H17:{id:"6be1b4_9308e8cf9ce043b19fd91c9e74929641~mv2.jpg",w:1e3,h:1500},H18:{id:"78b520_2cbcd6ede30a42d4b92fddb33e9ad97b~mv2.jpg",w:1080,h:720},H19:{id:"6be1b4_4d283e634cef4b49b4b37bde4808a9fd~mv2.jpg",w:1e3,h:1499},H20:{id:"78b520_32f300adf0c44e3a9b58872efd1807fb~mv2.jpg",w:2880,h:1920},H21:{id:"6be1b4_3af870836d044be09673b3b4d32f5ab7~mv2.jpg",w:1499,h:1e3},H22:{id:"6be1b4_682ce3e48a68401eb83af71d3e9900dd~mv2.jpg",w:1e3,h:1500},H23:{id:"6be1b4_49efd2c8a418452d8c1b51a5b15db94a~mv2.jpg",w:1499,h:1e3},H24:{id:"78b520_c23cff4b638c47e6af916567a54668c7~mv2.jpg",w:2880,h:1920},H25:{id:"6be1b4_a5014b0ddb064634ae86f2b240e2a7a8~mv2.jpg",w:1e3,h:1499},I01:{id:"6be1b4_8a1f8d129714412982a89bfcafe2e9b9~mv2.jpg",w:6431,h:4126},I02:{id:"78b520_784f771cccf346fe82b4a7bb1df18ade~mv2.jpg",w:2880,h:1920},I03:{id:"6be1b4_079c6a1cfed34feb82732862b3969739~mv2.jpg",w:1500,h:1e3},I04:{id:"78b520_1cb1128a84a64b6aae4eca850e940a91~mv2.jpg",w:2880,h:1921},I05:{id:"78b520_f89ee0d26927470189eee5baa0779820~mv2.jpg",w:2880,h:1920},I06:{id:"78b520_1fdf93ffcb5d4684a12f88a2fff694d2~mv2.jpg",w:2880,h:1920},I07:{id:"78b520_e235d8c2fa0c459793397351f28dbf78~mv2.jpg",w:2880,h:1920},I08:{id:"78b520_db942ef54e3d4be888a401ceb5189471~mv2.jpg",w:2880,h:1920},I09:{id:"6be1b4_f3fccd12d184425db5172b31246f6caa~mv2.jpg",w:1451,h:1e3},I10:{id:"78b520_51862c6dda9341be83359ffd34029cec~mv2.jpg",w:2880,h:1920},I11:{id:"78b520_4482af23086549269ab30396bde6ad1c~mv2.jpg",w:2880,h:1920},I12:{id:"78b520_ec7cf18fe39249d0b7d229e2ab832e32~mv2.jpg",w:2880,h:1920},I13:{id:"78b520_9544c2ab636046aab9fccde752cf4141~mv2.jpg",w:2880,h:1920},E01:{id:"6be1b4_fdb0412080834ce2b9da2e3180c94d19~mv2.png",w:2933,h:2201},E02:{id:"6be1b4_306011cf02c6402b8b9178c096931606~mv2.jpg",w:1500,h:1e3},E03:{id:"6be1b4_870f54b06e23453795feb8e146a1a301~mv2.jpg",w:1e3,h:1499},E04:{id:"6be1b4_ed75a67cc19a448f8b46ecbcf1c8b92c~mv2.jpg",w:1500,h:1e3},E05:{id:"6be1b4_5a66473fdb244cd7bf5c153881d92e7e~mv2.jpg",w:1500,h:1e3},E06:{id:"6be1b4_fe80ede9ec994865a9b989727048da5c~mv2.jpg",w:1e3,h:1500},E07:{id:"6be1b4_56159a53a8d54c88a8121df0c0fc1f0a~mv2.jpg",w:1500,h:1e3},E08:{id:"6be1b4_ceea194e274d4c1a92297dda80c222c3~mv2.jpg",w:1500,h:1e3},E09:{id:"6be1b4_f587efea20f8498197065af9e86e8900~mv2.jpg",w:1e3,h:1499},E10:{id:"6be1b4_28be9c3c1a504cac83fd1d2aa744d128~mv2.jpg",w:1500,h:1125},E11:{id:"6be1b4_05e7a2149c804c1087250116e8354dbf~mv2.jpg",w:1500,h:1e3},E12:{id:"6be1b4_171f665a503c4c5ba5d731ba25ede494~mv2.jpg",w:1333,h:1e3},E13:{id:"6be1b4_d253c50865934c72809fae1a2842394f~mv2.jpg",w:1500,h:1125},E14:{id:"6be1b4_30c3790803ff4993a1de863c487d885a~mv2.jpg",w:1500,h:1e3},E15:{id:"78b520_629388e0959f47ec867710bd97feec3d~mv2.jpg",w:5799,h:3865},E16:{id:"6be1b4_c0bd31c05b024dc7bf78faa54808ec40~mv2.jpg",w:1500,h:1e3},E17:{id:"6be1b4_b18d2ac776af4095ae8baa979bffb6f2~mv2.jpg",w:2001,h:3e3},E18:{id:"6be1b4_19137e6e2105479fb398b7493d9ff6cc~mv2.jpg",w:1573,h:1e3},E19:{id:"6be1b4_96a43ffaefb74dea913f7816355c013a~mv2.jpg",w:1500,h:1e3},E20:{id:"6be1b4_5a133a1fd70e4440b34c844060bf325c~mv2.jpg",w:1500,h:1e3},E21:{id:"6be1b4_233ddb14bd8941e1bf382c77c9534b47~mv2.jpg",w:1500,h:1e3},E22:{id:"6be1b4_3ef6debe33a047eb8e75bf9da58438b2~mv2.jpg",w:1e3,h:1500},E23:{id:"6be1b4_f8b9b3b92dda4d8d99cd33ec2b227a50~mv2.jpg",w:1e3,h:1500},E24:{id:"6be1b4_0a70c29b9d8b480c967df982f707525c~mv2.jpg",w:1500,h:1e3},E25:{id:"6be1b4_2c70990d4e994f4e9e81b17b9af1d198~mv2.jpg",w:1e3,h:1500},E26:{id:"6be1b4_2f28d9086bb14764a9e2bf829e3d7588~mv2.jpg",w:1500,h:1e3},Y01:{id:"6be1b4_e33f705f50d342a5a77f90143a4a0deb~mv2.jpg",w:3e3,h:2e3},Y02:{id:"6be1b4_5200d66cf44341b9bab4b7d7656f33fd~mv2.jpg",w:1431,h:1e3},Y03:{id:"6be1b4_9cc3c1dce3bc4109a384ac519e99c2cb~mv2.jpg",w:1e3,h:1500},Y04:{id:"6be1b4_efebb893787542a58b22ded6fc49a84b~mv2.jpg",w:1499,h:1e3},Y05:{id:"6be1b4_bfdd649e63174959af2958b4d3556cf7~mv2.jpg",w:1e3,h:1556},Y06:{id:"6be1b4_bd163835c5fe4a7c8d8bc9e1d38d0fd9~mv2.jpg",w:1451,h:1e3},Y07:{id:"6be1b4_c3e254a446b54bb787b1efbea9022bbb~mv2.jpg",w:1499,h:1e3},Y08:{id:"6be1b4_d46fa82e4cb645aab740dfe8c6a8ab4f~mv2.jpg",w:2048,h:1365},G01:{id:"6be1b4_97265b2fe512495ca2b6dd6cc834513a~mv2.png",w:2671,h:1966},G02:{id:"6be1b4_5d963441a04b40b493a5c015b4bd5cc3~mv2.jpg",w:1500,h:1e3},G03:{id:"6be1b4_6abc7999e02642709d107b4d9d25580c~mv2.jpg",w:1500,h:1e3},G04:{id:"6be1b4_c7536fe850e04d188e3ac2ac812b21b4~mv2.jpg",w:1500,h:1e3},G05:{id:"6be1b4_c2ad6376aa9c453ab1e7a837fbe0dfa0~mv2.jpg",w:1500,h:1e3},G06:{id:"6be1b4_ce7cf107c6494126b23c55ae0802d88c~mv2.jpg",w:1500,h:1e3},G07:{id:"6be1b4_131a87c0d7d940a8b6b09b781680338f~mv2.jpg",w:1e3,h:1500},G08:{id:"6be1b4_fca2ff469d9f4ad58a1da1547e873675~mv2.jpg",w:1e3,h:1500},G09:{id:"6be1b4_eea50857b7e949f4b8694b6b10f0c802~mv2.jpg",w:1500,h:1001},S01:{id:"6be1b4_22ad77cc6a8d49478bdc6fee4ec8cea0~mv2.jpg",w:4839,h:2761},S02:{id:"6be1b4_758e774710a842439a52d493457abede~mv2.jpg",w:1500,h:1e3},S03:{id:"6be1b4_13f6203f8daf4101964e4348b3ecf25e~mv2.jpg",w:1e3,h:1500},S04:{id:"6be1b4_341ee3af54de45c2aa719cd31599eb71~mv2.jpg",w:1500,h:1e3},S05:{id:"6be1b4_c74692af9ab1420a896d3efd19529732~mv2.jpg",w:1e3,h:1500},S06:{id:"6be1b4_eb67da827f4749cc8bf1347fec703069~mv2.jpg",w:1500,h:1e3},S07:{id:"6be1b4_eeb34771e133448d8056ec4e1bb22694~mv2.jpg",w:1e3,h:1500},S08:{id:"6be1b4_11e0ad5831c04971aae9fb01253ae185~mv2.jpg",w:1e3,h:1500},S09:{id:"6be1b4_2306591cc7fb4cc99dc1261473f4c17e~mv2.jpg",w:1500,h:1e3},S10:{id:"6be1b4_8fd2bbbb24c64402a6002e44c05c4717~mv2.jpg",w:1e3,h:1500},S11:{id:"6be1b4_ce2dc875388d40f997ca31208c9b14fa~mv2.jpg",w:1500,h:1e3},S12:{id:"6be1b4_809bb199a061417c9378092123aaa394~mv2.jpg",w:1e3,h:1500},S13:{id:"6be1b4_6d32aaeddb9b427a872e6806abc3bd67~mv2.jpg",w:1500,h:1e3},S14:{id:"6be1b4_9753e0702890431097a7a82e5dfc0814~mv2.jpg",w:1500,h:1e3},S15:{id:"6be1b4_e1e716b88df24ee097baba89fe1445ca~mv2.jpg",w:1500,h:1e3},S16:{id:"6be1b4_a361081a11af45d8953149cf6148e197~mv2.jpg",w:1500,h:1e3},S17:{id:"6be1b4_83247dd48870486ca5a48d05dbe4d043~mv2.jpg",w:1500,h:1e3},S18:{id:"6be1b4_582b7d6463da4ae6bb2c63faea23358d~mv2.jpg",w:1e3,h:1500},S19:{id:"6be1b4_393bcd31101e4520a0da2cd2b0d50d40~mv2.jpg",w:1500,h:1e3},S20:{id:"6be1b4_43d08e18c229466c9aaa2f4c323ae091~mv2.jpg",w:1500,h:1e3},S21:{id:"6be1b4_44b616bdf8a04d7dbfaec4d4ca92e8f4~mv2.jpg",w:1500,h:1e3},S22:{id:"6be1b4_f2d053f9c45e456585d6176402f84b23~mv2.jpg",w:1500,h:1e3},S23:{id:"6be1b4_83aa91ade4064833b73dbc144818bef9~mv2.jpg",w:1e3,h:1500},S24:{id:"6be1b4_0523871c6e2b43db8d03e840c7d719c7~mv2.jpg",w:1500,h:1e3},S25:{id:"6be1b4_39418c64014a45f793d9ebca770c2e6a~mv2.jpg",w:1500,h:1e3},S26:{id:"6be1b4_ead58a3bb20347379a426dd88bfa824b~mv2.jpg",w:1e3,h:1500},M01:{id:"6be1b4_03183de9045b449da5751ba783b37dd0~mv2.jpg",w:1e3,h:1e3},M02:{id:"6be1b4_63bac0543e8247afb0b9ec7f6eb20741f000.jpg",w:1920,h:1080},M03:{id:"6be1b4_8dd4496377b942bd8c48d9d1f91fcd5e~mv2.jpg",w:2300,h:600},M04:{id:"6be1b4_9ab87bbc1a62420f8f4308036d01fffc~mv2.jpg",w:4032,h:2268},M05:{id:"6be1b4_7edbe0f4a0f24c438658869a5a2eada5~mv2.png",w:2933,h:2201},M06:{id:"6be1b4_d8109046cf0242e09b0c066267e723ec~mv2.png",w:2993,h:1994},M07:{id:"6be1b4_f4e4dff0c92344249c18161ad406d4bc~mv2.png",w:2990,h:1919},M08:{id:"6be1b4_5402d59eadcf44aca4b9c0851bf2c06e~mv2.jpg",w:2400,h:3600},M09:{id:"6be1b4_473ebcfcfc5744c4a00d62ef85f5f51d~mv2.jpg",w:2300,h:600},M10:{id:"6be1b4_f2d6e0b54fe645c89c2570ad4552fe1d~mv2.jpg",w:1e3,h:667},M11:{id:"6be1b4_6e03e945f3504428b14c53f75e31bb8e~mv2.jpg",w:2300,h:900},M12:{id:"6be1b4_86dbcb972e1147af9156eef00e7ddedf~mv2.jpg",w:1383,h:900},M13:{id:"11062b_54ef6fb8ec744a24a353d6758db5286d~mv2.jpg",w:6e3,h:4e3},M14:{id:"6be1b4_b4d32d23ea6f4196b5d4080b94efa57a~mv2.jpg",w:626,h:922},M15:{id:"6be1b4_78920da15ab842ca8c9313cb15860ec5~mv2.jpg",w:1e3,h:2222},M16:{id:"6be1b4_7cee88b66f5243a6a324d8f11e0184f7~mv2.jpg",w:600,h:1333},M17:{id:"6be1b4_0679f08e658942aaa61c2fcaeeccec30~mv2.jpg",w:5083,h:3389},M18:{id:"6be1b4_d7a6e60a73da46febacad91c09983861~mv2.jpg",w:3e3,h:1889},M19:{id:"6be1b4_8947ceed9ad24efba4512bee2d6b7a83~mv2.jpg",w:1e3,h:1e3},M20:{id:"6be1b4_b8d8f73b1ab94409b04f70cab010d5b5~mv2.jpg",w:1e3,h:714},M21:{id:"6be1b4_f7f21a043fae48fda619e4fa78450226~mv2.jpg",w:1e3,h:1032},M22:{id:"6be1b4_5633a129b7c54ca0bc34a963ff9492dd~mv2.jpg",w:1e3,h:1197},M23:{id:"6be1b4_6becceaeafe24ff885e0a8a7d9d7cb23~mv2.jpg",w:700,h:875},M24:{id:"6be1b4_a4887d9619f941d29b2f4d8effc47056~mv2.jpg",w:720,h:960},M25:{id:"6be1b4_24aabab842404d4a8c26fdc1e5b19f3a~mv2.jpg",w:1900,h:427},M26:{id:"6be1b4_1a13b485f7f0413cb5a6b08f18e2883e~mv2.jpg",w:700,h:467},M27:{id:"6be1b4_95178a4c6e7a4c3ca5923110a5a7a2cb~mv2.jpg",w:906,h:610},M28:{id:"6be1b4_611666ecfa67414a8766cfd2dd3e0668~mv2.jpg",w:960,h:640},M29:{id:"6be1b4_3f4dd451190e46f68a82dd34ed73d17c~mv2.jpg",w:960,h:640},M30:{id:"6be1b4_3fffe1feda7e4e5d9efd237b6ab2e877~mv2.jpg",w:881,h:587},M31:{id:"6be1b4_3b466e3c7759456195eee22492446a80~mv2.jpg",w:1200,h:800},M32:{id:"6be1b4_a381ceef844145678c1f7458cf4a4948~mv2.jpg",w:700,h:500},M33:{id:"6be1b4_b0b73f1c8a3743c293bd5a897a3b24cd~mv2.jpg",w:851,h:1280},M34:{id:"6be1b4_6b9af5c3808847888588e648fffebf74~mv2.jpg",w:700,h:420},M35:{id:"6be1b4_118820abaa314b0189d07e8ad10c3c6b~mv2.jpg",w:800,h:534},M36:{id:"6be1b4_15a22028f5a2402db3c013ed7bdcf325~mv2.jpg",w:1400,h:665},M37:{id:"6be1b4_484f5fdf23ce4494a63dff839c488b48~mv2.jpg",w:700,h:525},M38:{id:"6be1b4_745ce7deed804ace8ef16196db2c4a31~mv2.png",w:2484,h:1266},M39:{id:"6be1b4_44466dd12d694fa785b7de4a5a5f792b~mv2.png",w:2484,h:1266}},Ov="https://hotels.cloudbeds.com/en/reservas/KqNetd?&currency=usd";function Es(i,t=1600,e=0,n="fill"){const s=Gr[i];if(!s)return"";const o=s.h/s.w,r=Math.min(t,s.w),a=e?Math.min(e,s.h):Math.round(r*o),l=e?n:"fit";return`https://static.wixstatic.com/media/${s.id}/v1/${l}/w_${r},h_${a},al_c,q_85,enc_auto/selva.jpg`}const Gv=i=>Gr[i]?Gr[i].w/Gr[i].h:1.5,Oe=[{key:"harmony",name:"Villa Harmony",kicker:"Organic architecture · Fibonacci pool",line:"Three suites, one Fibonacci pool.",body:"Modern organic architecture, an open living space with a fully equipped kitchen, and three bedrooms — each with its own en‑suite indoor/outdoor bathroom. The heart of it all is the private Fibonacci infinity pool and terrace, made for long sunny afternoons.",facts:[["3","Bedrooms"],["3","Bathrooms"],["∞","Fibonacci pool"],["✓","Yoga deck"]],features:["En‑suite indoor/outdoor bathrooms","Fully equipped kitchen","Yoga deck & BBQ","Housekeeping & laundry service"],hero:"H20",strip:["H20","H12","H14","H04","H11","H10"],gallery:["H20","H11","H12","H16","H08","H14","H06","H18","H24","H10","H04","H09","H02","H03","H01","H13","H05"],world:{x:18,z:-205,rot:.25},page:"https://www.selvaresort.com/villa-harmony",cam:[44,15,.55]},{key:"ebony",name:"Villa Ebony",kicker:"Two stories · Panoramic Pacific views",line:"Our most expansive and exclusive villa.",body:"A two‑story retreat in natural wood, with a semi‑open layout for seamless indoor‑outdoor living. Four bedrooms with king beds, a dining table for ten, and a private infinity pool that looks over the Pacific and the lush Nicoya Peninsula.",facts:[["4","Bedrooms"],["4","Bathrooms"],["10","Dining seats"],["∞","Infinity pool"]],features:["4 king beds · outdoor shower","Yoga deck & BBQ","Sound & media system","Monkeys, birds & iguanas as neighbors"],hero:"E01",strip:["E01","E15","E18","E11","E04","E05"],gallery:["E01","E13","E12","E15","E18","E26","E14","E02","E10","E11","E07","E04","E16","E06","E05","E24","E23","E21","E08","E17"],world:{x:118,z:-250,rot:-.35},page:"https://www.selvaresort.com/villa-ebony",cam:[60,20,-.5]},{key:"ivory",name:"Villa Ivory",kicker:"Honeymoon villa · Highest point of Selva",line:"Suspended between sky and sea.",body:"Our signature honeymoon villa, perched at the highest point of the property. The Pacific on one side, the jungle on the other — and a private balcony where mornings start with Costa Rican coffee and endless horizon.",facts:[["1","Bedroom"],["1","Bathroom"],["♡","Honeymoon suite"],["↑","Tree‑top views"]],features:["Private balcony & hammock","Kitchen & dining","Outdoor shower","Unmatched privacy"],hero:"I01",strip:["I01","I13","I02","I04","I09","I10"],gallery:["I01","I13","I04","I02","I03","I10","I08","I12","I05","I07","I06","I11","I09"],world:{x:-30,z:-330,rot:.1},page:"https://www.selvaresort.com/villa-ivory",cam:[42,9,.72]},{key:"guanacaste",name:"Villa Guanacaste",kicker:"Contemporary · Private pool & gym",line:"The newest address at Selva.",body:"A contemporary open‑concept villa where floor‑to‑ceiling windows and shaded terraces pull the jungle inside. Two bedrooms, a private gym, and a pool framed by tropical gardens — comfortable for up to six guests.",facts:[["2","Bedrooms"],["3","Bathrooms"],["6","Sleeps up to"],["✓","Private gym"]],features:["Private pool & sun loungers","Open‑concept living","Futon couch for extra guests","Washer / dryer"],hero:"G06",strip:["G06","G02","G03","G08","G09","G01"],gallery:["G06","G02","G03","G04","G05","G08","G09","G07","G01"],world:{x:-112,z:-190,rot:.55},page:"https://www.selvaresort.com/villa-guanacaste",cam:[46,14,.62]},{key:"ivy",name:"Villa Ivy",kicker:"Urban loft · 180° glass walls",line:"A New York loft that fell in love with the jungle.",body:"Sleek loft‑style design with 180‑degree glass walls and floating corridors, opening to sweeping views of the Pacific and the jungle. Three bedrooms for active families and friends, meters from Santa Teresa’s beaches and surf.",facts:[["3","Bedrooms"],["2","Bathrooms"],["180°","Glass walls"],["✓","Private pool"]],features:["Floating corridors","Dining for six","Sound system throughout","Walk to beach & town"],hero:"Y02",strip:["Y02","Y01","Y04","Y08","Y06","Y03"],gallery:["Y02","Y06","Y01","Y08","Y04","Y03","Y05","Y07"],world:{x:78,z:-120,rot:-.2},page:"https://www.selvaresort.com/villa-ivy",cam:[44,13,-.55]},{key:"studio54",name:"Studio 54",kicker:"Modern studio for two · Private pool",line:"Minimal lines, maximum sky.",body:"A modern tropical studio for couples: an open plan flooded with natural light, a plush king bed, a fully equipped kitchen and a private terrace and pool surrounded by tropical gardens — minutes from the beach and town.",facts:[["1","King bedroom"],["1","Bathroom"],["✓","Private pool"],["✓","Work desk"]],features:["Skylight bedroom","Fully equipped kitchen","Outdoor shower","Minutes from the beach"],hero:"S14",strip:["S14","S11","S09","S02","S17","S22"],gallery:["S14","S11","S09","S01","S02","S06","S13","S04","S16","S15","S17","S19","S21","S22","S24","S05"],world:{x:-58,z:-105,rot:.4},page:"https://www.selvaresort.com/studio54",cam:[36,10,.5]}];function Li(i){return 16*Math.sin(i*.0042)+9*Math.sin(i*.011+1.3)+4*Math.sin(i*.031+.5)}const Io=Oe.map(i=>({x:i.world.x,z:i.world.z,r0:i.key==="ebony"?24:i.key==="ivory"?12:19,r1:i.key==="ebony"?44:36}));function sd(i,t){const e=t-Li(i);if(e>0)return-e*.05-En(40,260,e)*14;const n=-e,s=En(0,42,n)*2.4,o=En(30,470,n);let r=s+150*Math.pow(o,1.15);r+=Kl(i*.0065+3.1,t*.0065-1.7,5)*26*En(25,160,n),r+=Kl(i*.02,t*.02,3)*4*En(40,120,n);const a=i+30,l=t+330;return r+=30*Math.exp(-(a*a+l*l)/(2*75*75)),r+=18*Math.exp(-((i-330)**2+(t+60)**2)/(2*110*110))*En(20,90,n),r}const od=Io.map(i=>sd(i.x,i.z)+1.5);function jn(i,t){let e=sd(i,t);for(let n=0;n<Io.length;n++){const s=Io[n],o=Math.hypot(i-s.x,t-s.z);if(o<s.r1){const r=1-En(s.r0,s.r1,o);e=Fv(e,od[n],r)}}return e}function rd(i){const t=Oe.findIndex(e=>e.key===i);return od[t]}const Hv=(()=>{const i=[];for(const n of Oe){const[s,,o]=n.cam,r=n.world.rot+o;i.push([n.world.x,n.world.z,n.world.x+Math.sin(r)*s*1.3,n.world.z+Math.cos(r)*s*1.3,14,25])}const t=Oe[0].world,e=Oe[1].world;return i.push([t.x-30,t.z-60,t.x+14,t.z+50,20,24]),i.push([e.x+34,e.z+40,e.x-10,e.z+160,20,26]),i})();function $a(i,t){for(const[e,n,s,o,r,a]of Hv){const l=s-e,c=o-n,h=Math.max(0,Math.min(1,((i-e)*l+(t-n)*c)/(l*l+c*c))),u=e+l*h,d=n+c*h;if(Math.hypot(i-u,t-d)<r+(a-r)*h)return!0}return!1}function pr(i,t,e=0){for(const n of Io)if(Math.hypot(i-n.x,t-n.z)<n.r0+e)return!0;return!1}function Vv(){const s=new Me(1500,1150,300,230);s.rotateX(-Math.PI/2),s.translate(0,0,-1150/2+230);const o=s.attributes.position,r=new Float32Array(o.count*3),a=new ut,l=new ut("#b99f78"),c=new ut("#e6d3ad"),h=new ut("#0d2413"),u=new ut("#183a1c"),d=new ut("#2f5a28"),f=new ut("#3b3a24"),p=new ut("#4f7a3a"),v=new ut("#c2b58e");for(let b=0;b<o.count;b++){const y=o.getX(b),x=o.getZ(b),T=jn(y,x);o.setY(b,T);const M=x-Li(y);if(M>0)a.copy(v).lerp(l,En(30,0,M)*.5);else if(T<1.2)a.copy(l).lerp(c,En(.2,1.2,T));else if(T<3.2&&-M<55)a.copy(c).lerp(d,En(2.2,3.2,T));else{const A=Mo(y*.03,x*.03),S=Mo(y*.008+7,x*.008+3);a.copy(h).lerp(u,A).lerp(d,S*.45);const _=En(.55,.85,Mo(y*.05+11,x*.05+5));a.lerp(f,_*.25);for(const w of Io){const E=Math.hypot(y-w.x,x-w.z);E<w.r1&&a.lerp(p,(1-En(w.r0*.6,w.r1,E))*.55)}}r[b*3]=a.r,r[b*3+1]=a.g,r[b*3+2]=a.b}s.setAttribute("color",new Pe(r,3)),s.computeVertexNormals();const g=new xe({vertexColors:!0,roughness:.95,metalness:0}),m=new Xt(s,g);return m.receiveShadow=!0,m.name="terrain",m}function Bv(){const i=new se,t=[{z:-1150,amp:170,base:60,col:"#2a4a3a",seed:1},{z:-1500,amp:230,base:90,col:"#3a5a55",seed:2},{z:-1900,amp:260,base:120,col:"#4f6c70",seed:3}];for(const e of t){const o=new Me(5200,400,220,8),r=o.attributes.position;for(let l=0;l<r.count;l++){const c=r.getX(l),h=r.getY(l),u=e.base+e.amp*(.55+.45*Kl(c*.0017+e.seed*10,e.seed,4)),d=(h+200)/400;r.setY(l,d*u-10),r.setZ(l,(1-d)*60)}o.computeVertexNormals();const a=new Xt(o,new xe({color:e.col,roughness:1,flatShading:!0}));a.position.set(0,0,e.z),i.add(a)}return i}const ue={G:9.81,M:1/42,H0:.25,SFAR:340,UMAX:760,PEAKS:[-175,30,215],MAXEV:8},Lc=Math.sqrt(ue.G),mr=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Uo=i=>Math.max(ue.H0+ue.M*i,.08),Dc=Math.sqrt(Uo(ue.SFAR));function As(i){const t=Dc-i*ue.M*Lc*.5;return t<=Math.sqrt(ue.H0)?-1:(t*t-ue.H0)/ue.M}function Ic(i){return 2*(Dc-Math.sqrt(Uo(Math.max(i,0))))/(ue.M*Lc)}const x0=Ic(0);function $r(i){return(i/.78-ue.H0)/ue.M+26}function ad(i,t){return $r(i.H)-i.k*Math.abs(t-i.u0)}function Wv(i,t){const e=(t-i.u0)/230;return .62+.38*Math.exp(-e*e)}function y0(i,t,e){return i.H*Wv(i,t)*Math.pow(Uo(ue.SFAR)/Uo(Math.max(e,0)),.25)}function Ai(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}const Za=46;function ld(i,t=[]){t.length=0;const e=Math.floor((i-x0-20)/Za)-1,n=Math.floor(i/Za)+1;for(let s=e;s<=n;s++){const o=3+Math.floor(Ai(s)*3),r=s*Za+Ai(s+.5)*8,a=Math.floor(Ai(s*3.1)*ue.PEAKS.length);for(let l=0;l<o;l++){const c=r+l*(13+Ai(s*7+l)*3),h=i-c;if(h<-1||h>x0+16)continue;const u=1-Math.abs(l-(o-1)/2)/o,d=(a+(Ai(s+l*.7)<.25?1:0))%ue.PEAKS.length;if(t.push({id:s*10+l,t0:c,H:1.15+.55*u+.35*Ai(s*1.7+l),u0:ue.PEAKS[d]+(Ai(s*5.3+l)-.5)*40,k:.55+.4*Ai(s*2.9+l),peak:d}),t.length>=ue.MAXEV)return t}}return t}function Ka(i,t,e,n){let s=0;for(const r of n){const a=e-r.t0;if(a<0)continue;const l=As(a);if(l<-1)continue;const c=t-l,h=ad(r,i);let u;if(l>h){const d=y0(r,i,l),f=mr(h+45,h,l),p=9-5.5*f,v=22-8*f,g=c<0?Math.exp(-((c/p)**2)):Math.exp(-((c/v)**2));u=d*g-.12*d*Math.exp(-(((c+2.2*p)/(p*1.2))**2))}else{const d=Uo(Math.max(l,0)),f=h-l,p=.45*d+(y0(r,i,h)-.45*d)*Math.exp(-f/10),v=c<0?mr(-1.6,0,c):Math.exp(-c/16);u=p*v}s=Math.max(s,u)}const o=mr(ue.SFAR,ue.SFAR-40,t)*mr(ue.UMAX,ue.UMAX-60,Math.abs(i));return s*o}const Wi=i=>Number.isInteger(i)?i.toFixed(1):String(i),w0=`
#define SURF_MAXEV ${ue.MAXEV}
uniform vec4 uEv[SURF_MAXEV];   // t0, H, u0, k
uniform vec4 uRide[4];          // rider wake: u, s, dirU, dirS (length = strength)
uniform float uNEv;
const float S_G = ${Wi(ue.G)}, S_M = ${Wi(ue.M)}, S_H0 = ${Wi(ue.H0)}, S_SFAR = ${Wi(ue.SFAR)}, S_UMAX = ${Wi(ue.UMAX)};
const float S_SQG = ${Wi(Lc)}, S_SQHF = ${Wi(Dc)};
float sH(float s){ return max(S_H0 + S_M * s, 0.08); }
float sCrest(float age){ float sh = S_SQHF - age * S_M * S_SQG * 0.5; return sh <= sqrt(S_H0) ? -2.0 : (sh * sh - S_H0) / S_M; }
float sPassAge(float s){ return 2.0 * (S_SQHF - sqrt(sH(max(s, 0.0)))) / (S_M * S_SQG); }
float sBreak0(float H){ return (H / 0.78 - S_H0) / S_M + 26.0; }
float sLat(vec4 e, float u){ float x = (u - e.z) / 230.0; return 0.62 + 0.38 * exp(-x * x); }
float sShoal(vec4 e, float u, float s){ return e.y * sLat(e, u) * pow(sH(S_SFAR) / sH(max(s, 0.0)), 0.25); }
float sFade(float u, float s){ return smoothstep(S_SFAR, S_SFAR - 40.0, s) * smoothstep(S_UMAX, S_UMAX - 60.0, abs(u)); }

float surfEta(float u, float s, float t){
  float eta = 0.0;
  for (int i = 0; i < SURF_MAXEV; i++) {
    if (float(i) >= uNEv) break;
    vec4 e = uEv[i];
    float age = t - e.x;
    if (age < 0.0) continue;
    float sc = sCrest(age);
    if (sc < -1.0) continue;
    float d = s - sc, sb = sBreak0(e.y) - e.w * abs(u - e.z);
    float v;
    if (sc > sb) {
      float Hc = sShoal(e, u, sc);
      float steep = smoothstep(sb + 45.0, sb, sc);
      float wf = 9.0 - 5.5 * steep, wb = 22.0 - 8.0 * steep;
      float pr = d < 0.0 ? exp(-(d / wf) * (d / wf)) : exp(-(d / wb) * (d / wb));
      float tr = (d + 2.2 * wf) / (wf * 1.2);
      v = Hc * pr - 0.12 * Hc * exp(-tr * tr);
    } else {
      float hb = sH(max(sc, 0.0)), db = sb - sc;
      float Hb = 0.45 * hb + (sShoal(e, u, sb) - 0.45 * hb) * exp(-db / 10.0);
      float pr = d < 0.0 ? smoothstep(-1.6, 0.0, d) : exp(-d / 16.0);
      v = Hb * pr;
    }
    eta = max(eta, v);
  }
  return eta * sFade(u, s);
}

/* swash: water level running up the beach after each bore */
float surfSwash(float u, float t){
  float sw = 0.0;
  float a0 = sPassAge(0.0);
  for (int i = 0; i < SURF_MAXEV; i++) {
    if (float(i) >= uNEv) break;
    vec4 e = uEv[i];
    float since = t - e.x - a0;
    if (since > 0.0 && since < 16.0) sw = max(sw, 0.34 * sLat(e, u) * smoothstep(0.0, 1.8, since) * pow(1.0 - since / 16.0, 2.0));
  }
  return sw * smoothstep(S_UMAX, S_UMAX - 60.0, abs(u));
}

/* foam in [0,1]; also returns swash level in .y */
vec2 surfFoam(float u, float s, float t, float n1, float n2){
  float foam = 0.0, swash = 0.0;
  for (int i = 0; i < SURF_MAXEV; i++) {
    if (float(i) >= uNEv) break;
    vec4 e = uEv[i];
    float age = t - e.x;
    if (age < 0.0) continue;
    float sc = sCrest(age);
    float sb = sBreak0(e.y) - e.w * abs(u - e.z);
    float d = s - sc;
    float strength = sLat(e, u);
    if (sc > -1.0) {
      if (sc <= sb) {
        float db = sb - sc;
        float soup = d >= -0.6 ? exp(-max(d, 0.0) / (8.0 + db * 0.12)) : 0.0;
        soup *= smoothstep(-1.8, -0.3, d);
        float lip = exp(-(d / 1.4) * (d / 1.4)) * (0.55 + 0.45 * exp(-db / 22.0));
        foam = max(foam, (soup * (0.55 + 0.45 * n1) + lip) * strength);
      } else {
        float steep = smoothstep(sb + 12.0, sb, sc);
        foam = max(foam, exp(-(d / 1.6) * (d / 1.6)) * steep * 0.6 * n2 * strength);
      }
    }
    // residual foam where the broken crest has passed
    if (s < sb + 6.0 && s > -2.0) {
      float since = age - sPassAge(s);
      if (since > 0.0) foam = max(foam, exp(-since / 11.0) * smoothstep(0.3, 0.75, n2 + 0.25 * n1) * 0.85 * strength * smoothstep(sb + 6.0, sb - 10.0, s));
    }
  }
  return vec2(clamp(foam, 0.0, 1.0) * sFade(u, s), surfSwash(u, t));
}
`;function _0(i){const t=[];for(const[e,n,s]of i)for(let o=e;o<n-1e-6;o+=s)t.push(o);return t.push(i[i.length-1][1]),t}function Xv({tier:i,oceanUniforms:t}){const e=i==="high"?1:i==="mid"?2:4,n=_0([[-760,-320,3.2*e],[-320,320,1.8*e],[320,ue.UMAX,3.2*e]]),s=_0([[-34,170,.9*e],[170,ue.SFAR,2.4*e]]),o=n.length,r=s.length,a=new Float32Array(o*r*3);let l=0;for(let m=0;m<r;m++)for(let b=0;b<o;b++)a[l++]=n[b],a[l++]=0,a[l++]=s[m];const c=new Uint32Array((o-1)*(r-1)*6);l=0;for(let m=0;m<r-1;m++)for(let b=0;b<o-1;b++){const y=m*o+b,x=y+1,T=y+o,M=T+1;c[l++]=y,c[l++]=T,c[l++]=x,c[l++]=x,c[l++]=T,c[l++]=M}const h=new ge;h.setAttribute("position",new Pe(a,3)),h.setIndex(new Pe(c,1)),h.boundingSphere=new Kn(new D(0,0,150),900);const u={...zs.clone(Et.lights),...t,uEv:{value:Array.from({length:ue.MAXEV},()=>new ae)},uNEv:{value:0},uRide:{value:Array.from({length:4},()=>new ae)},uSand:{value:new ut("#e6d3ad")}},d=`
    float beachH(float s){ float d = clamp(-s / 42.0, 0.0, 1.0); return 2.4 * d * d * (3.0 - 2.0 * d); }
    float shoreZ(float x){ return 16.0*sin(x*0.0042) + 9.0*sin(x*0.011+1.3) + 4.0*sin(x*0.031+0.5); }
    float surfY(float u, float s, float t){
      float sw = surfSwash(u, t) - 0.01;
      if (s < 0.0) return max(beachH(s) + 0.05, sw);
      float e = surfEta(u, s, t);
      return s < 4.0 ? max(e, sw) : e;
    }`,f=new Ce({uniforms:u,lights:!0,vertexShader:`
      #include <common>
      #include <shadowmap_pars_vertex>
      uniform float uTime;
      ${w0}
      ${d}
      varying vec3 vWorld; varying vec3 vN; varying vec2 vUS; varying float vEta;
      void main(){
        float u = position.x, s = position.z;
        float e = surfY(u, s, uTime);
        float eu = surfY(u + 0.7, s, uTime), es = surfY(u, s + 0.7, uTime);
        vec3 w = vec3(u, e, shoreZ(u) + s);
        vec3 tu = vec3(0.7, eu - e, shoreZ(u + 0.7) - shoreZ(u));
        vec3 ts = vec3(0.0, es - e, 0.7);
        vN = normalize(cross(ts, tu));
        vUS = vec2(u, s);
        vEta = s < 0.0 ? 0.0 : e;
        vWorld = w;
        vec4 worldPosition = vec4(w, 1.0);
        vec3 transformedNormal = normalize(mat3(viewMatrix) * vN);
        #include <shadowmap_vertex>
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }`,fragmentShader:`
      #include <common>
      #include <packing>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      uniform float uTime, uFogDensity, uNight, uSpec;
      uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uDeep, uShallow, uFogColor, uSand;
      ${w0}
      ${ha}
      ${d}
      varying vec3 vWorld; varying vec3 vN; varying vec2 vUS; varying float vEta;
      vec2 h22(vec2 p){ p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }
      float vEdge(vec2 x){
        vec2 n = floor(x), f = fract(x); float F1 = 8.0, F2 = 8.0;
        for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
          vec2 g = vec2(float(i), float(j)); vec2 o = h22(n + g); vec2 r = g + o - f; float d = dot(r, r);
          if (d < F1) { F2 = F1; F1 = d; } else if (d < F2) F2 = d;
        }
        return sqrt(F2) - sqrt(F1);
      }
      float wetLevel(float u, float t){
        float w = 0.0; float a0 = sPassAge(0.0);
        for (int i = 0; i < SURF_MAXEV; i++) {
          if (float(i) >= uNEv) break;
          vec4 e = uEv[i]; float since = t - e.x - a0;
          if (since > 0.0) w = max(w, 0.34 * sLat(e, u) * exp(-max(since - 6.0, 0.0) / 34.0));
        }
        return max(w, 0.12);
      }
      void main(){
        float u = vUS.x, s = vUS.y;
        float camDist = length(cameraPosition - vWorld);
        vec3 V = normalize(cameraPosition - vWorld);
        float shadow = getShadowMask();
        vec3 sunC = vec3(0.0); vec3 hSky = vec3(0.5), hGround = vec3(0.3);
        #if NUM_DIR_LIGHTS > 0
          sunC = directionalLights[0].color;
        #endif
        #if NUM_HEMI_LIGHTS > 0
          hSky = hemisphereLights[0].skyColor; hGround = hemisphereLights[0].groundColor;
        #endif
        float fd = 1.0 - smoothstep(60.0, 900.0, camDist);
        vec2 p = vWorld.xz;
        float sw = surfSwash(u, uTime);
        float bh = beachH(s);
        float lum = mix(1.0, 0.3, uNight);
        vec3 col;
        float n2 = fbm(vec2(u * 0.23 + 3.0, s * 0.35) - vec2(uTime * 0.07, uTime * 0.05));
        vec3 foamCol = vec3(0.95, 0.96, 0.93) * lum;
        if (s < 0.3 && sw < bh + 0.012) {
          // ---- sand ----
          float wet = smoothstep(0.02, -0.03, bh - wetLevel(u, uTime));
          vec2 rq = vec2(u * 0.9 + s * 0.35, s * 2.2);
          vec3 n = normalize(vN + vec3((vnoise(rq) - 0.5) * 0.18, 0.0, (vnoise(rq + 9.1) - 0.5) * 0.18) * fd);
          vec3 alb = uSand * (0.9 + 0.12 * vnoise(p * 0.7) + 0.06 * vnoise(p * 7.0));
          alb = mix(alb, alb * vec3(0.56, 0.54, 0.52), wet * 0.9);
          // toward the waterline a darker, glossier band
          float ndl = max(dot(n, uSunDir), 0.0);
          col = alb * RECIPROCAL_PI * (sunC * ndl * shadow + mix(hGround, hSky, n.y * 0.5 + 0.5));
          vec3 rr = reflect(-V, n);
          float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
          vec3 sky = mix(uHorizon, uZenith, pow(clamp(rr.y, 0.0, 1.0), 0.5));
          col = mix(col, sky * 0.9, fres * wet * 0.55);
          col += sunC * pow(max(dot(rr, uSunDir), 0.0), 60.0) * wet * 0.35 * shadow;
          // fade detail out toward the vegetation edge so it meets the terrain cleanly
          col = mix(col, uSand * RECIPROCAL_PI * (sunC * max(dot(vN, uSunDir), 0.0) * shadow + mix(hGround, hSky, vN.y * 0.5 + 0.5)), smoothstep(-24.0, -33.0, s));
          // lace left by the last swash
          float edgeDist = abs(bh - wetLevel(u, uTime) + 0.004);
          col = mix(col, foamCol * RECIPROCAL_PI * (sunC * 0.9 * shadow + hSky) , smoothstep(0.01, 0.0, edgeDist) * 0.25 * smoothstep(0.45, 0.8, n2));
        } else {
          // ---- water ----
          vec2 g = vec2(0.0);
          vec2 q2 = p * 0.6 + vec2(-uTime * 0.4, uTime * 0.3);
          g += (vec2(vnoise(q2), vnoise(q2 + 5.1)) - 0.5) * 0.09 * fd;
          vec2 q3 = p * 1.9 + vec2(uTime * 0.7, uTime * 0.5);
          g += (vec2(vnoise(q3), vnoise(q3 + 2.7)) - 0.5) * 0.07 * (1.0 - smoothstep(20.0, 260.0, camDist));
          vec3 n = normalize(vN + vec3(g.x, 0.0, g.y));
          float n1 = fbm(vec2(u * 0.09, s * 0.16) + vec2(uTime * 0.05, -uTime * 0.11));
          vec2 fs = surfFoam(u, s, uTime, n1, n2);
          float foam = fs.x;
          // foam texture: two scales of cellular lace drifting shoreward
          float lace1 = 1.0 - smoothstep(0.0, 0.16, vEdge(vec2(u * 0.55, (s + uTime * 1.6) * 0.8)));
          float lace2 = 1.0 - smoothstep(0.0, 0.2, vEdge(vec2(u * 1.7 + 4.0, (s + uTime * 1.1) * 2.1)));
          float tex = clamp(0.35 + 0.45 * lace1 + 0.35 * lace2 + 0.25 * n2, 0.0, 1.0);
          float dense = smoothstep(0.55, 0.95, foam);
          foam = mix(foam * tex * 1.25, foam, dense);
          // rider wakes
          for (int i = 0; i < 4; i++) {
            vec4 r = uRide[i];
            float L = length(r.zw);
            if (L < 0.01) continue;
            vec2 dir = r.zw / L;
            vec2 rel = vec2(u, s) - r.xy;
            float along = -dot(rel, dir);
            float side = abs(dot(rel, vec2(-dir.y, dir.x)));
            float wk = step(-0.6, along) * smoothstep(9.0 * L, 0.0, along) * smoothstep(0.35 + along * 0.18, 0.0, side);
            foam = max(foam, wk * 0.9 * (0.6 + 0.4 * lace2));
          }
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
          vec3 rr = reflect(-V, n);
          vec3 sky = mix(uHorizon, uZenith, pow(clamp(rr.y, 0.0, 1.0), 1.25));
          float cs = max(dot(rr, uSunDir), 0.0);
          float spec = (pow(cs, 700.0) * 18.0 + pow(cs, 90.0) * 0.9 + pow(cs, 12.0) * 0.12) * uSpec * mix(0.35, 1.0, shadow);
          vec3 water = mix(uShallow, uDeep, smoothstep(2.0, 170.0, s));
          water = mix(water, vec3(0.42, 0.44, 0.32), (1.0 - smoothstep(0.0, 60.0, s)) * 0.42);
          water += vec3(0.05, 0.22, 0.2) * smoothstep(0.4, 1.6, vEta) * max(dot(V, -uSunDir) * 0.5 + 0.5, 0.0) * (1.0 - uNight);
          water *= mix(1.0, 0.25, uNight) * mix(0.75, 1.0, shadow);
          col = mix(water, sky, fres * 0.85) + uSunColor * spec * (1.0 - foam);
          vec3 fc = foamCol * (0.55 + 0.35 * max(dot(n, uSunDir), 0.0) * shadow + 0.1) * mix(vec3(0.86, 0.92, 0.96), vec3(1.0), smoothstep(0.3, 0.9, foam));
          fc += uSunColor * 0.08 * shadow * lum;
          col = mix(col, fc, smoothstep(0.1, 0.75, foam));
          // swash film over the sand: thin, sandy, with a lace edge
          if (s < 0.3) {
            float depth = sw - bh;
            vec3 wetSand = uSand * vec3(0.5, 0.48, 0.45) * RECIPROCAL_PI * (sunC * 0.8 * shadow + hSky);
            col = mix(wetSand + sky * fres * 0.6, col, smoothstep(0.0, 0.12, depth));
            float lace = smoothstep(0.03, 0.0, depth) * smoothstep(0.02, 0.15, sw);
            col = mix(col, fc, lace * (0.55 + 0.45 * lace2));
          }
        }
        float fogF = 1.0 - exp(-uFogDensity * uFogDensity * camDist * camDist);
        col = mix(col, uFogColor, clamp(fogF, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),p=new Xt(h,f);p.name="surf",p.frustumCulled=!1,p.renderOrder=-1,p.receiveShadow=!0;const v=[];function g(m){return ld(m,v),u.uNEv.value=v.length,v.forEach((b,y)=>u.uEv.value[y].set(b.t0,b.H,b.u0,b.k)),v}return{mesh:p,uniforms:u,update:g,events:v}}const un=D,qv=new un(0,1,0),M0=new pe,gr=new un,vr=new At,so=new un,S0=new un,T0=new ut;class Yv{constructor({max:t=900,shadows:e=!0}){const n=new oa(.5,1,3,8),s=new xe({roughness:.78,metalness:0});this.mesh=new ko(n,s,t),this.mesh.instanceColor=new Ns(new Float32Array(t*3),3),this.mesh.instanceMatrix.setUsage(Eo),this.mesh.frustumCulled=!1,this.mesh.castShadow=e,this.mesh.receiveShadow=!1,this.mesh.name="figures",this.max=t,this.n=0}begin(){this.n=0}seg(t,e,n,s){if(this.n>=this.max)return;so.subVectors(e,t);const o=so.length();o<1e-4?so.set(0,1,0):so.multiplyScalar(1/o),M0.setFromUnitVectors(qv,so),S0.addVectors(t,e).multiplyScalar(.5),gr.set(2*n,(o+2*n)/2,2*n),vr.compose(S0,M0,gr),this.mesh.setMatrixAt(this.n,vr),this.mesh.setColorAt(this.n,T0.set(s)),this.n++}blob(t,e,n,s,o,r){this.n>=this.max||(gr.set(n,s/2,o),vr.compose(t,e,gr),this.mesh.setMatrixAt(this.n,vr),this.mesh.setColorAt(this.n,T0.set(r)),this.n++)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}Array.from({length:24},()=>new un);function br(i,t){const e=Math.cos(t),n=Math.sin(t),s=i.y*e-i.z*n,o=i.y*n+i.z*e;return i.y=s,i.z=o,i}function jv(i,t){const e=Math.cos(t),n=Math.sin(t),s=i.x*e-i.y*n,o=i.x*n+i.y*e;return i.x=s,i.y=o,i}function Xi(i,t,e,n,s){const o=s.h||1,r=(f,p,v)=>new un(f*o,p*o,v*o),a=f=>f.applyQuaternion(e).add(t),l={},c=n.type,h=n.ph||0;if(c==="walk"||c==="stand"){const f=c==="walk"?.42:0,p=c==="walk"?Math.abs(Math.sin(h))*.03:0;l.pelvis=r(0,.93+p,0),l.neck=r(0,1.47+p,.02);for(const v of[-1,1]){const g=Math.sin(h+(v>0?0:Math.PI))*f,m=Math.max(0,Math.sin(h+(v>0?0:Math.PI)+1.3))*.7*(f>0?1:0),b=r(v*.1,.93+p,0),y=br(r(0,-.46,0),-g).add(b),x=br(r(0,-.45,0),-g+m).add(y);l["hip"+v]=b,l["knee"+v]=y,l["ank"+v]=x;const T=r(v*.19,1.42+p,.02),M=-g*.8,A=jv(br(r(0,-.29,0),M),v*.08).add(T),S=br(r(0,-.27,0),M-.25).add(A);l["sh"+v]=T,l["el"+v]=A,l["ha"+v]=S}}else if(c==="sit"){l.pelvis=r(0,.12,0),l.neck=r(0,.68,.06);for(const f of[-1,1]){const p=r(f*.11,.12,.02),v=r(f*.2,-.05,.38),g=r(f*.22,-.45,.42);l["hip"+f]=p,l["knee"+f]=v,l["ank"+f]=g;const m=r(f*.19,.63,.06),b=r(f*.25,.38,.2),y=r(f*.2,.18,.36);l["sh"+f]=m,l["el"+f]=b,l["ha"+f]=y}}else if(c==="prone"){const f=n.stroke??1;l.pelvis=r(0,.14,-.35),l.neck=r(0,.26,.2);for(const p of[-1,1]){const v=r(p*.1,.14,-.35),g=r(p*.1,.12,-.8),m=r(p*.1,.14+.05*Math.sin(h*2+p),-1.25);l["hip"+p]=v,l["knee"+p]=g,l["ank"+p]=m;const b=r(p*.2,.2,.12),y=h+(p>0?0:Math.PI),x=Math.cos(y)*f,T=Math.sin(y)*f,M=r(p*.3,.15-Math.max(0,T)*.3,.12+x*.3),A=r(p*.34,.1-Math.max(0,T)*.55,.12+x*.55);l["sh"+p]=b,l["el"+p]=M,l["ha"+p]=A}}else if(c==="ride"){const f=n.crouch??.5,p=n.lean??0,v=.8-f*.28;l.pelvis=r(p*.15,v,0),l.neck=r(p*.3+.05,v+.52-f*.06,.12*f);for(const g of[-1,1]){const m=r(g*.11,v,0),b=r(g*.34,.05,0),y=r(g*.22,v*.5,.18*f+.05);l["hip"+g]=m,l["knee"+g]=y,l["ank"+g]=b;const x=r(g*.17+p*.3,v+.47,.1*f),T=r(g*.4+p*.3,v+.38+g*.05,.12),M=r(g*.62+p*.3,v+.3+g*.08+Math.sin(h)*.04,.1);l["sh"+g]=x,l["el"+g]=T,l["ha"+g]=M}}else if(c==="horse"){const f=Math.sin(h*2)*(n.bounce??.02);l.pelvis=r(0,.05+f,0),l.neck=r(0,.62+f,.05);for(const p of[-1,1]){const v=r(p*.12,.05+f,0),g=r(p*.3,-.3,.2),m=r(p*.3,-.7,.05);l["hip"+p]=v,l["knee"+p]=g,l["ank"+p]=m;const b=r(p*.19,.57+f,.05),y=r(p*.22,.32+f,.2),x=r(p*.1,.25+f,.42);l["sh"+p]=b,l["el"+p]=y,l["ha"+p]=x}}for(const f in l)a(l[f]);const u=l.neck.clone().sub(l.pelvis).normalize().multiplyScalar(.19*o).add(l.neck);i.seg(l.pelvis,l.neck,.15*o,s.top),i.seg(l["hip-1"],l.hip1,.11*o,s.bottom);for(const f of[-1,1])i.seg(l["hip"+f],l["knee"+f],.075*o,s.legTop||s.skin),i.seg(l["knee"+f],l["ank"+f],.055*o,s.skin),i.seg(l["sh"+f],l["el"+f],.048*o,s.sleeve||s.skin),i.seg(l["el"+f],l["ha"+f],.042*o,s.skin);i.seg(u,u,.115*o,s.skin);const d=u.clone().add(new un(0,.035*o,0));i.blob(d,e,.23*o,.2*o,.24*o,s.hair)}function $v(i,t,e,n,s,o,r){const a=(g,m,b)=>new un(g,m,b).applyQuaternion(e).add(t),l=n==="trot",c=l?Math.abs(Math.sin(s*Math.PI*2))*.05:Math.sin(s*Math.PI*4)*.015,h=a(0,1.28+c,.62),u=a(0,1.33+c,-.72);i.seg(h,u,.34,o);const d=l?0:Math.sin(s*Math.PI*4)*.05,f=a(0,1.95+c+d,1.08),p=a(0,1.62+c+d,1.52);i.seg(a(0,1.42+c,.78),f,.17,o),i.seg(f,p,.12,o),i.seg(a(0,2+c+d,1),a(0,1.55+c,.7),.06,r),i.seg(a(0,1.38+c,-.95),a(0,.85+c,-1.12),.07,r);const v=[["LH",-.17,-.62,0],["LF",-.17,.55,.25],["RH",.17,-.62,.5],["RF",.17,.55,.75]];for(const[g,m,b,y]of v){let x=y;l&&(x=g==="LH"||g==="RF"?0:.5);const T=(s+x)*Math.PI*2,M=Math.sin(T)*(l?.42:.3),A=Math.max(0,Math.cos(T))*(l?.7:.5),S=a(m,1.12+c,b),_=S.clone().add(new un(0,-.5,0).applyAxisAngle(new un(1,0,0),-M).applyQuaternion(e)),w=new un(0,-.58,0).applyAxisAngle(new un(1,0,0),-M+(b>0?-A:A)),E=_.clone().add(w.applyQuaternion(e));i.seg(S,_,.085,o),i.seg(_,E,.045,o)}return a(0,1.58+c,-.05)}function E0(i,t){const e=new un().crossVectors(i,t).normalize(),n=new un().crossVectors(e,i).normalize(),s=new At().makeBasis(e,i,n);return new pe().setFromRotationMatrix(s)}const Tn=D,oo=new Tn(0,1,0),Ja=i=>{const t=Math.min(1,Math.max(0,-i/42));return 2.4*t*t*(3-2*t)},Wn=["#e8c4a0","#c99a72","#a8744c","#7a4f33","#f0d0b0","#b98a64"],Ci=["#2a1d14","#4a3222","#1b1410","#8a6a3a","#c9a060","#3a2a20"],Xn=["#f3efe6","#1c2a33","#c8553d","#2e6f8e","#e2b04a","#6c8a55","#d9cbb2","#9a3f5a"],xr=["#16181a","#1d2530","#15191c"],A0=["#f4f1e8","#f4f1e8","#e9d9a8","#9fd3d6","#f2b8a0","#ffffff"],C0=[["#6b3f22","#1c120c"],["#8a5a36","#3a2618"],["#3b2b22","#15100c"],["#b9ab98","#e8e2d6"],["#23201e","#0d0c0b"]];function qi(i,t){const e=new Tn().crossVectors(t,i).normalize(),n=new Tn().crossVectors(e,t).normalize();return new pe().setFromRotationMatrix(new At().makeBasis(e,t,n))}function yr(i,t,e){return new Tn(i,e,Li(i)+t)}class Zv{constructor({tier:t}){const e=gi(2026);this.F=new Yv({max:t==="low"?420:900,shadows:t!=="low"}),this.group=this.F.mesh,this.enabled=!0;const n=t==="low"?6:10;this.surfers=[];for(let o=0;o<n;o++){const r=o%ue.PEAKS.length,a=ue.PEAKS[r]+(e()-.5)*36,l=$r(1.6)+6+e()*14;this.surfers.push({peak:r,homeU:a,homeS:l,u:a,s:l,state:"sit",t0:0,face:new Tn(0,0,1),heading:Math.PI+(e()-.5),look:{skin:Wn[o%Wn.length],top:xr[o%3],bottom:xr[o%3],legTop:xr[o%3],sleeve:o%2?xr[o%3]:null,hair:Ci[o*3%Ci.length],h:.95+e()*.1},board:A0[o%A0.length],boardLen:o%4===0?2.8:1.95+e()*.3,stroke:e()*6,skill:.6+e()*.4,rideDir:1}),this.surfers[o].look.sleeve||(this.surfers[o].look.sleeve=this.surfers[o].look.skin)}this.claimed=new Set;const s=t==="low"?6:12;this.walkers=[];for(let o=0;o<s;o++){const r=o%3===1,a=this.walkers[o-1],l=r&&a?{...a,u:a.u+.7,s:a.s-.6,ph:a.ph+1.2,look:{skin:Wn[o*5%Wn.length],top:Xn[o*3%Xn.length],bottom:Xn[(o*7+2)%Xn.length],hair:Ci[o*2%Ci.length],h:.92+e()*.12}}:{u:(e()-.5)*900,s:-4-e()*12,dir:e()<.5?-1:1,speed:1+e()*.35,ph:e()*6,look:{skin:Wn[o*5%Wn.length],top:Xn[o*3%Xn.length],bottom:Xn[(o*7+2)%Xn.length],hair:Ci[o*2%Ci.length],h:.92+e()*.12},stopAt:e()*60};l.look.sleeve||(l.look.sleeve=l.look.skin),l.look.legTop=e()<.5?l.look.bottom:l.look.skin,this.walkers.push(l)}this.rides=[{u:-120,s:-7,dir:1,n:3,speed:1.6,ph:0,gait:"walk",trotUntil:0},{u:330,s:-9,dir:-1,n:2,speed:1.5,ph:.3,gait:"walk",trotUntil:0}],this.rides.forEach((o,r)=>{o.horses=Array.from({length:o.n},(a,l)=>({coat:C0[(r*2+l)%C0.length],rider:{skin:Wn[(r+l*2)%Wn.length],top:Xn[(r*3+l+1)%Xn.length],bottom:"#3b4a5c",legTop:"#3b4a5c",sleeve:Wn[(r+l*2)%Wn.length],hair:Ci[(r+l)%Ci.length],h:.95},phOff:l*.37,lag:l*3.2,side:l%2?.5:-.3}))}),this.rideUniform=null,this.tmpEvents=[]}updateSurfer(t,e,n,s){const o=e-t.t0,r=l=>{t.state=l,t.t0=e},a=(l,c)=>Ka(l,c,e,s);if(t.state==="sit"||t.state==="return"){if(t.state==="return"){const l=t.homeU-t.u,c=t.homeS-t.s,h=Math.hypot(l,c);if(h<1.5)r("sit");else{const u=1.15*n;t.u+=l/h*u,t.s+=c/h*u,t.heading=Math.atan2(l,c)}}else t.heading+=(Math.PI-t.heading)*n*.3;for(const l of s){if(this.claimed.has(l.id)||l.peak!==t.peak||As(e-l.t0)<0)continue;const h=Ic(t.s)-(e-l.t0);if(h>3.5&&h<7.5&&t.state==="sit"&&ad(l,t.u)<t.s+3&&Math.random()<t.skill*.9){this.claimed.add(l.id),t.ev=l,r("paddle"),t.rideDir=Math.sign(t.u-l.u0)||(Math.random()<.5?-1:1);break}}}else if(t.state==="paddle"){t.heading+=(0-t.heading)*Math.min(1,n*2.5),t.s-=1.5*n;const l=As(e-t.ev.t0);l<0||o>14?r("return"):l<=t.s+1.2&&(r("popup"),t.rideT=e)}else if(t.state==="popup"||t.state==="ride"){const l=t.ev,c=As(e-l.t0);if(c<28||e-t.rideT>7+t.skill*7){r("kickout");return}const h=e-t.rideT,u=$r(l.H),d=l.u0+t.rideDir*Math.max(0,(u-c)/l.k),f=t.u+t.rideDir*(t.state==="popup"?1.5:5.5+t.skill*2.5)*n;t.u=t.rideDir>0?Math.max(f,d+4):Math.min(f,d-4);const p=2.6+(t.state==="ride"?1.4*Math.sin(h*1.5):0),v=c-p,g=Math.max(-9,Math.min(9,(v-t.s)/Math.max(n,.001)));t.vs=t.vs==null?g:t.vs+(g-t.vs)*Math.min(1,n*4),t.s=v;const m=t.rideDir*(5.5+t.skill*2.5);t.vel=new ht(m,t.vs),t.heading=Math.atan2(m,-t.vs),t.state==="popup"&&o>1.2&&r("ride")}else if(t.state==="kickout"){const l=As(e-t.ev.t0);t.s=Math.max(t.s,(l>0?l:t.s)+2.5*Math.min(1,o)),t.heading+=(Math.PI-t.heading)*Math.min(1,n*2),o>1.8&&r("return")}t.y=a(t.u,t.s)+.06}drawSurfer(t,e){const n=this.F,s=Ka(t.u+.8,t.s,e,this.evs),o=Ka(t.u,t.s+.8,e,this.evs),r=new Tn(-(s-(t.y-.06))/.8,1,-(o-(t.y-.06))/.8).normalize(),a=new Tn(Math.sin(t.heading),0,-Math.cos(t.heading)),l=a.clone().addScaledVector(r,-a.dot(r)).normalize(),c=yr(t.u,t.s,t.y);E0(l,r);const h=t.state==="ride"||t.state==="popup",u=t.state==="sit"?.25:0,d=l.clone().applyAxisAngle(new Tn().crossVectors(l,r).normalize(),u);n.blob(c.clone().addScaledVector(r,-.02),E0(d,r),.52,t.boardLen,.08,t.board);const f=e*1.6+t.stroke;if(t.state==="sit"||t.state==="return"&&!1)Xi(n,c.clone().addScaledVector(r,.04).addScaledVector(l,-.25),qi(l,oo),{type:"sit",ph:f},t.look);else if(!h)Xi(n,c.clone().addScaledVector(r,.02),qi(l,r),{type:"prone",ph:f*(t.state==="paddle"?1.8:1.2),stroke:1},t.look);else if((t.state==="popup"?Math.min(1,(e-t.t0)/1.2):1)<.55)Xi(n,c.clone().addScaledVector(r,.02),qi(l,r),{type:"prone",ph:f,stroke:.3},t.look);else{const v=new Tn().crossVectors(r,l).multiplyScalar(-t.rideDir);Xi(n,c.clone().addScaledVector(r,.05),qi(v,oo.clone().lerp(r,.4).normalize()),{type:"ride",crouch:.55+.25*Math.sin((e-t.rideT)*1.5),lean:.2*Math.sin((e-t.rideT)*1.5),ph:f},t.look)}}update(t,e,n,s){const o=this.F;this.evs=n;const r=s>.08;if(o.mesh.visible=r,!r)return;if(e=Math.min(e,.1),this.claimed.size>40){const c=new Set(n.map(h=>h.id));for(const h of this.claimed)c.has(h)||this.claimed.delete(h)}o.begin();let a=0;const l=this.rideUniform;for(const c of this.surfers)if(this.updateSurfer(c,t,e,n),this.drawSurfer(c,t),l&&a<4&&c.state==="ride"&&c.vel){const h=Math.hypot(c.vel.x,c.vel.y)||1;l[a++].set(c.u,c.s,c.vel.x/h*.9,c.vel.y/h*.9)}if(l)for(;a<4;a++)l[a].set(0,0,0,0);for(const c of this.walkers){if(c.stopAt>0&&t%90>c.stopAt&&t%90<c.stopAt+8){const u=yr(c.u,c.s,Ja(c.s));Xi(o,u,qi(new Tn(0,0,1),oo),{type:"stand"},c.look);continue}c.u+=c.dir*c.speed*e,c.u>520?c.dir=-1:c.u<-520&&(c.dir=1),c.ph+=e*c.speed*5.6;const h=yr(c.u,c.s,Ja(c.s));Xi(o,h,qi(new Tn(c.dir,0,0),oo),{type:"walk",ph:c.ph},c.look)}for(const c of this.rides){c.gait==="walk"&&Math.random()<e*.01&&(c.gait="trot",c.trotUntil=t+12),c.gait==="trot"&&t>c.trotUntil&&(c.gait="walk");const h=c.gait==="trot"?3.4:c.speed,u=c.gait==="trot"?.8:1.1;c.u+=c.dir*h*e,c.u>560?c.dir=-1:c.u<-560&&(c.dir=1),c.ph=(c.ph+e/u)%1;for(const d of c.horses){const f=c.u-c.dir*d.lag,p=c.s+d.side,v=yr(f,p,Ja(p)),g=qi(new Tn(c.dir,0,0),oo),m=(c.ph+d.phOff)%1,b=$v(o,v,g,c.gait,m,d.coat[0],d.coat[1]);Xi(o,b,g,{type:"horse",ph:m*Math.PI*2,bounce:c.gait==="trot"?.05:.015},d.rider)}}o.end()}}function Ie(i=1){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const wr=(()=>{const i=Ie(1234),t=new Float32Array(256*256);for(let e=0;e<t.length;e++)t[e]=i();return t})();function Kv(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=i-n,r=t-s,a=(n%e+e)%e,l=(s%e+e)%e,c=(a+1)%e,h=(l+1)%e,u=o*o*(3-2*o),d=r*r*(3-2*r),f=wr[(l<<8)+a],p=wr[(l<<8)+c],v=wr[(h<<8)+a],g=wr[(h<<8)+c];return f+(p-f)*u+(v-f)*d+(f-p-v+g)*u*d}function Yt(i,t,e=4,n=4,s=.5,o=0){let r=0,a=.5,l=e,c=0;for(let h=0;h<n;h++)r+=a*Kv(i*l+o*17.3,t*l+o*9.1,l),c+=a,l*=2,a*=s;return r/c}const Fi=(i,t=i)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e},_r=i=>i<0?0:i>255?255:i;function ye(i,t,e){const n=Fi(i,t),s=n.getContext("2d"),o=s.createImageData(i,t),r=o.data,a=[0,0,0,255];for(let l=0;l<t;l++)for(let c=0;c<i;c++){a[3]=255,e(c/i,l/t,a,c,l);const h=(l*i+c)*4;r[h]=_r(a[0]),r[h+1]=_r(a[1]),r[h+2]=_r(a[2]),r[h+3]=_r(a[3])}return s.putImageData(o,0,0),n}function Jv(i){const e=i.getContext("2d").getImageData(0,0,i.width,i.height).data,n=new Float32Array(i.width*i.height);for(let s=0;s<n.length;s++)n[s]=(e[s*4]*.3+e[s*4+1]*.59+e[s*4+2]*.11)/255;return n}function en(i,t,e,n=2){return ye(t,e,(s,o,r,a,l)=>{const c=i[l*t+(a-1+t)%t],h=i[l*t+(a+1)%t],u=i[(l-1+e)%e*t+a],d=i[(l+1)%e*t+a];let f=(c-h)*n,p=(d-u)*n,v=1;const g=1/Math.hypot(f,p,v);r[0]=(f*g*.5+.5)*255,r[1]=(p*g*.5+.5)*255,r[2]=(v*g*.5+.5)*255})}function cd(i,t,e,n,s,o){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){const l=e+r*i,c=n+a*t;l+s<0||l-s>i||c+s<0||c-s>t||o(l,c)}}const ce=i=>{const t=new ut(i);return[t.r*255,t.g*255,t.b*255]},qe=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],wt={};wt.terrazzo=i=>{const t=ce("#dccfb9"),e=ye(i,i,(h,u,d)=>{const f=Yt(h,u,3,4)-.5,p=Yt(h,u,24,2,.5,3)-.5,v=1+f*.07+p*.03+(Math.random()-.5)*.035;d[0]=t[0]*v,d[1]=t[1]*v*(1-f*.01),d[2]=t[2]*v*(1-f*.03)}),n=e.getContext("2d"),s=Ie(11),o=[["#f3ebdd",30],["#fbf7ef",18],["#b4a38e",16],["#8a7058",10],["#56504a",8],["#b98460",5],["#a19c93",9],["#d8c29c",8]],r=o.reduce((h,u)=>h+u[1],0),a=()=>{let h=s()*r;for(const u of o)if(h-=u[1],h<=0)return u[0];return o[0][0]},l=Math.round(i*i/190);for(let h=0;h<l;h++){const u=s()*i,d=s()*i,f=(1.2+Math.pow(s(),2.6)*8.5)*(i/1024),p=5+(s()*3|0),v=s()*6.28,g=a(),m=[];for(let b=0;b<p;b++){const y=v+b/p*6.283,x=f*(.55+s()*.6);m.push([Math.cos(y)*x,Math.sin(y)*x])}n.fillStyle=g,n.globalAlpha=.85+s()*.15,cd(i,i,u,d,f*1.3,(b,y)=>{n.beginPath(),m.forEach(([x,T],M)=>M?n.lineTo(b+x,y+T):n.moveTo(b+x,y+T)),n.closePath(),n.fill()})}n.globalAlpha=1;for(let h=0;h<i*i/60;h++)n.fillStyle=s()<.5?"rgba(70,60,50,0.5)":"rgba(255,255,255,0.6)",n.fillRect(s()*i,s()*i,1,1);const c=ye(i/2,i/2,(h,u,d)=>{const f=.13+(Yt(h,u,5,4,.5,8)-.5)*.16+(Yt(h,u,30,2,.5,2)-.5)*.05;d[0]=d[1]=d[2]=f*255});return{map:e,rough:c}};wt.plaster=(i,t="#efebe4")=>{const e=ce(t),n=new Float32Array(i*i);return{map:ye(i,i,(o,r,a,l,c)=>{const h=Yt(o,r,3,5,.55)-.5,u=Yt(o*1,r,10,3,.5,5)-.5,d=Yt(o,r,48,2,.5,9)-.5,f=1+h*.1+u*.04+d*.02;a[0]=e[0]*f,a[1]=e[1]*f,a[2]=e[2]*(f-h*.02),n[c*i+l]=u*.5+d*.8+Math.random()*.08}),normal:en(n,i,i,1.2)}};function Ys(i,t){const e=Ie(t.seed||5),n=t.rows,s=i/n,o=[];for(let c=0;c<n;c++){const h=[];let u=0;for(;u<i;){const d=(t.lenMin+e()*(t.lenMax-t.lenMin))*i;h.push(Math.min(i,u+d)),u+=d}i-h[h.length-2]<t.lenMin*i*.5&&h.length>1&&h.splice(h.length-2,1),h[h.length-1]=i,o.push({off:e()*i,cuts:h,tint:h.map(()=>[e(),e(),e()])})}const r=t.palette.map(ce),a=new Float32Array(i*i);return{map:ye(i,i,(c,h,u,d,f)=>{const p=Math.min(n-1,f/s|0),v=o[p],g=(d+v.off)%i;let m=0;for(;v.cuts[m]<g;)m++;const b=m?v.cuts[m-1]:0,y=v.cuts[m],x=v.tint[m],T=qe(r[x[0]*r.length|0],r[x[1]*r.length|0],x[2]),M=f-p*s,A=g/i,S=f/i,_=t.grain??1,w=Yt(A+x[0]*3,S*.25+x[1],2,3,.5,4)*6,E=Math.sin(M/s*18*_+w*3+x[2]*20)*.5+.5,U=Yt(A*.5+x[1],S*3+x[0]*2,8,3,.6,7);let L=.88+E*.1*_+(U-.5)*.25*_;const z=Math.min(g-b,y-g),O=Math.min(M,s-M),F=t.gap;let $=.7+(U-.5)*.2+E*.05;z<F||O<F?(L*=t.gapDark??.35,$=0):(z<F+1.5||O<F+1.5)&&(L*=.86,$=.45),u[0]=T[0]*L,u[1]=T[1]*L,u[2]=T[2]*L,a[f*i+d]=$}),normal:en(a,i,i,t.nstr||3),h:a}}wt.hardwood=i=>Ys(i,{rows:12,lenMin:.35,lenMax:.9,gap:i/1024*1.2,palette:["#b07a45","#a06a38","#bd8a55","#94602f","#c29360"],seed:3,gapDark:.55});wt.deck=i=>Ys(i,{rows:14,lenMin:.5,lenMax:1,gap:i/512*2.2,palette:["#9a6a44","#8a5c38","#a87850","#7d5433","#b08158"],seed:8,gapDark:.18,nstr:5});wt.cedar=i=>Ys(i,{rows:10,lenMin:.6,lenMax:1,gap:i/512*2.4,palette:["#6e3b22","#5a2f1b","#7c4629","#4d2918","#83502f"],seed:21,gapDark:.12,nstr:6});wt.teakSlat=i=>Ys(i,{rows:10,lenMin:1,lenMax:1,gap:i/256*1.6,palette:["#a8743f","#9a6835","#b3804a"],seed:4,gapDark:.2,nstr:6});wt.soffit=i=>Ys(i,{rows:8,lenMin:.7,lenMax:1,gap:i/512*1.6,palette:["#b27a45","#a26c3a","#bb8650","#9a6536"],seed:31,gapDark:.3,nstr:4});wt.oakLight=i=>Ys(i,{rows:8,lenMin:1,lenMax:1,gap:0,palette:["#b88a5c","#c29668","#ad8052"],seed:12,grain:1.2});wt.liveEdge=i=>{const t=[ce("#8e5a2e"),ce("#6d4121"),ce("#a8703c"),ce("#4f2e16")];return{map:ye(i,i,(n,s,o)=>{const r=Yt(n,s,2,4,.55,3),a=Math.sin((s+r*.35)*60)*.5+.5,l=Yt(n*.5,s,2,3,.5,6);let c=qe(t[0],t[1],Math.pow(l,1.5));c=qe(c,t[2],Math.max(0,a-.7)*1.2);const h=Math.max(0,Yt(n,s*2,3,3,.5,11)-.62)*2.5;c=qe(c,t[3],Math.min(1,h));const u=.92+(Yt(n,s,40,2,.5,5)-.5)*.2;o[0]=c[0]*u,o[1]=c[1]*u,o[2]=c[2]*u})}};wt.concrete=(i,t="#aaa7a1")=>{const e=ce(t),n=Ie(9),s=ye(i,i,(a,l,c)=>{const h=Yt(a,l,3,5,.55)-.5,u=Yt(a,l,12,3,.5,4)-.5,d=1+h*.12+u*.05+(Math.random()-.5)*.04;c[0]=e[0]*d,c[1]=e[1]*d,c[2]=e[2]*d}),o=s.getContext("2d");for(let a=0;a<i*i/350;a++){o.fillStyle=`rgba(60,58,55,${.2+n()*.3})`;const l=.6+n()*1.6;o.beginPath(),o.arc(n()*i,n()*i,l*i/512,0,6.28),o.fill()}const r=ye(i/2,i/2,(a,l,c)=>{const h=.42+(Yt(a,l,4,4,.5,2)-.5)*.3;c[0]=c[1]=c[2]=h*255});return{map:s,rough:r}};wt.concreteTile=i=>{const t=ce("#9d9a95"),e=Ie(19),n=2,s=i/n,o=Math.max(1.5,i/400),r=[];for(let h=0;h<n*n;h++)r.push(.92+e()*.16);const a=new Float32Array(i*i),l=ye(i,i,(h,u,d,f,p)=>{const v=f/s|0,g=p/s|0,m=f-v*s,b=p-g*s,y=Yt(h,u,3,5,.55,v+g*3)-.5,x=Yt(h,u,30,2,.5,4)-.5;let T=r[g*n+v]*(1+y*.14+x*.05+(Math.random()-.5)*.03),M=.6+x*.1;(m<o||b<o)&&(T*=.62,M=.1),d[0]=t[0]*T,d[1]=t[1]*T,d[2]=t[2]*T,a[p*i+f]=M}),c=ye(i/2,i/2,(h,u,d)=>{d[0]=d[1]=d[2]=(.5+(Yt(h,u,4,3,.5,6)-.5)*.3)*255});return{map:l,normal:en(a,i,i,1.5),rough:c}};wt.microcement=(i,t="#b6aea3")=>{const e=ce(t);return{map:ye(i,i,(s,o,r)=>{const a=Yt(s,o,3,3,.5,2),l=Yt((s+o)*.5+a*.3,(s-o)*.5*4,4,4,.55,6)-.5,c=Yt(s,o,2,4,.5,1)-.5,h=1+l*.1+c*.08;r[0]=e[0]*h,r[1]=e[1]*h,r[2]=e[2]*h})}};wt.slate=i=>{const t=Ie(17),e=2,n=i/e,s=Math.max(2,i/256),o=[];for(let h=0;h<e*e;h++)o.push(.8+t()*.35);const r=new Float32Array(i*i),a=ce("#45474a"),l=ye(i,i,(h,u,d,f,p)=>{const v=f/n|0,g=p/n|0,m=g*e+v,b=f-v*n,y=p-g*n,x=Yt(h+m*.3,u*1.6+m*.1,5,5,.6,m)-.5,T=Yt(h*.3+m,u*3,3,3,.5,3+m)-.5;let M=o[m]*(1+x*.35+T*.2),A=.6+x*.6;(b<s||y<s)&&(M=.55,A=0),d[0]=a[0]*M*(1+T*.08),d[1]=a[1]*M,d[2]=a[2]*M*(1.04-T*.05),r[p*i+f]=A}),c=ye(i/2,i/2,(h,u,d)=>{d[0]=d[1]=d[2]=(.55+(Yt(h,u,6,3,.5,4)-.5)*.35)*255});return{map:l,normal:en(r,i,i,3),rough:c}};wt.brick=i=>{const t=Math.round(i*.75/.9),e=4,n=10,s=i/e,o=t/n,r=Math.max(2,i/110),a=Ie(23),l=["#9c4a32","#b35a3c","#87402c","#a8603f","#c06a48","#7c3a27","#9a5238"].map(ce),c=[];for(let f=0;f<n*(e+1);f++)c.push([l[a()*l.length|0],.85+a()*.3,a()]);const h=new Float32Array(i*t),u=ce("#cfc4b3");return{map:ye(i,t,(f,p,v,g,m)=>{const b=m/o|0,y=b%2?s/2:0,x=(g+y)%i,T=x/s|0,M=x-T*s,A=m-b*o,S=c[b*(e+1)+T],_=Yt(f,p,12,4,.55,b)-.5,w=Math.random()-.5,E=Math.min(M,s-M,A,o-A);if(E<r){const U=.9+_*.3+w*.1;v[0]=u[0]*U,v[1]=u[1]*U,v[2]=u[2]*U,h[m*i+g]=.15+_*.1}else{const U=Math.max(0,Yt(f*2+S[2],p*2,3,2,.5,5)-.6)*1.2,L=S[1]*(1+_*.3+w*.06)*(1-U);v[0]=S[0][0]*L,v[1]=S[0][1]*L,v[2]=S[0][2]*L,h[m*i+g]=.75+_*.3-(E<r+2?.15:0)}}),normal:en(h,i,t,4),su:.9,sv:.75}};wt.sukabumi=i=>{const e=i/8,n=Math.max(1.5,i/300),s=Ie(31),o=["#6f9a8e","#5e8b80","#7ea99c","#4f7d74","#86ae9f","#628f84"].map(ce),r=[];for(let c=0;c<8*8;c++)r.push([o[s()*o.length|0],.88+s()*.22,s()]);const a=new Float32Array(i*i);return{map:ye(i,i,(c,h,u,d,f)=>{const p=d/e|0,v=f/e|0,g=r[v*8+p],m=d-p*e,b=f-v*e,y=Yt(c+g[2],h,20,3,.6,p+v)-.5,x=Math.max(0,1-Math.abs(Yt(c,h+g[2],6,3,.5,2)-.5)*30);let T=g[1]*(1+y*.35)+x*.08,M=.6+y*.4;if(m<n||b<n){u[0]=190,u[1]=196,u[2]=188,a[f*i+d]=.1;return}u[0]=g[0][0]*T,u[1]=g[0][1]*T,u[2]=g[0][2]*T,a[f*i+d]=M}),normal:en(a,i,i,2.5)}};wt.mosaicBlack=i=>{const e=i/8,n=Math.max(1,i/200),s=Ie(5),o=[];for(let l=0;l<8*8;l++)o.push(.75+s()*.5);const r=new Float32Array(i*i);return{map:ye(i,i,(l,c,h,u,d)=>{const f=u/e|0,p=d/e|0,v=u-f*e,g=d-p*e;if(v<n||g<n){h[0]=h[1]=h[2]=58,r[d*i+u]=0;return}const m=26*o[p*8+f];h[0]=m,h[1]=m,h[2]=m*1.05,r[d*i+u]=.7}),normal:en(r,i,i,2)}};wt.spiralFloor=i=>{const t=Math.log((1+Math.sqrt(5))/2)/(Math.PI/2),e=ce("#c9ebe4"),n=ce("#92d2cb"),s=ce("#1d6f78"),o=ce("#2c5f68");return{map:ye(i,i,(r,a,l,c,h)=>{const u=r*2-1,d=a*2-1,f=Math.hypot(u,d),p=Math.atan2(d,u);let v=qe(e,n,Math.min(1,f*.9+(Yt(r,a,6,3)-.5)*.4));const m=((Math.log(Math.max(f,.004)/.012)/t-p)/(Math.PI*2)%1+1)%1,b=.07+.05*Math.min(1,f),y=Math.max(0,1-Math.abs(m-.5)/b),x=Math.max(0,1-Math.abs((m+.5)%1-.5)/(b*.3)),T=Math.min(1,f/.03)*(f<.97?1:0);v=qe(v,s,Math.min(1,y*1.6)*T),v=qe(v,s,Math.min(1,x)*.5*T),f>.94&&(v=qe(v,o,Math.min(1,(f-.94)*30)));const M=c%6,A=h%6,S=M===0||A===0?.86:1+(Math.random()-.5)*.06;l[0]=v[0]*S,l[1]=v[1]*S,l[2]=v[2]*S})}};wt.rattan=i=>{const e=i/8,n=new Float32Array(i*i),s=ce("#c39a62"),o=ce("#6d5031");return{map:ye(i,i,(a,l,c,h,u)=>{const d=h/e|0,f=u/e|0,p=h%e/e,v=u%e/e,g=((d>>1)+(f>>1))%2===0,b=Math.sin((g?v:p)*3%1*Math.PI),y=g?p:v,x=.55+b*.5+(Yt(a,l,32,2)-.5)*.2+Math.sin(y*Math.PI)*.08,T=qe(o,s,Math.min(1,x));c[0]=T[0],c[1]=T[1],c[2]=T[2],n[u*i+h]=b*(.8+Math.sin(y*Math.PI)*.2)}),normal:en(n,i,i,3)}};wt.linen=i=>{const t=new Float32Array(i*i);return{map:ye(i,i,(n,s,o,r,a)=>{const l=Math.sin(r*Math.PI*.5)*.5+.5,c=Math.sin(a*Math.PI*.5)*.5+.5,h=Yt(n*.25,s*4,16,2,.5,1),u=Yt(n*4,s*.25,16,2,.5,2),d=.9+(l*h+c*u)*.12+(Math.random()-.5)*.04;o[0]=o[1]=o[2]=255*Math.min(1,d),t[a*i+r]=l*h+c*u}),normal:en(t,i,i,1.2)}};wt.jute=i=>{const t=new Float32Array(i*i),e=ce("#c2a574"),n=ce("#9a7c4f"),s=ce("#e0cfa6");return{map:ye(i,i,(r,a,l,c,h)=>{const u=r*2-1,d=a*2-1,f=Math.hypot(u,d),p=Math.atan2(d,u),v=f*16%1,g=Math.sin(p*(40+Math.floor(f*16)*8)+v*6.28)*.5+.5,m=Math.sin(v*Math.PI)*(.7+g*.3);let b=qe(n,e,m);Math.floor(f*16)%5===3&&(b=qe(b,s,.5));const y=.9+(Math.random()-.5)*.12;l[0]=b[0]*y,l[1]=b[1]*y,l[2]=b[2]*y,t[h*i+c]=m}),normal:en(t,i,i,3)}};wt.rugWool=i=>{const t=ce("#e9dfcc"),e=ce("#cbbb9f"),n=ce("#8a7659");return{map:ye(i,i,(o,r,a,l,c)=>{const h=Math.min(o,1-o),u=Math.min(r,1-r),d=Math.min(h,u);let f=t;const p=Math.abs((o*7+r*7)%1-.5)+Math.abs((o*7-r*7+50)%1-.5);d>.1&&Math.abs(p-.5)<.025&&(f=qe(t,e,.45)),d>.045&&d<.06&&(f=qe(t,n,.6));const g=.93+Math.sin(l*1.7)*Math.sin(c*1.3)*.03+(Math.random()-.5)*.12+(Yt(o,r,40,2)-.5)*.12;a[0]=f[0]*g,a[1]=f[1]*g,a[2]=f[2]*g})}};wt.thatch=i=>{const t=Fi(i,i),e=t.getContext("2d"),n=Ie(41);e.clearRect(0,0,i,i);const s=["#9c7a45","#7a5a30","#b8955a","#8a6a3a","#6b4c28","#c4a66a"];for(let r=0;r<i*3.2;r++){const a=n()*i,l=(.8+n()*2.2)*i/512,c=-5,h=i*(.72+n()*.27);e.strokeStyle=s[n()*s.length|0],e.globalAlpha=.7+n()*.3,e.lineWidth=l;const u=(n()-.5)*i*.05;for(const d of[-i,0,i])e.beginPath(),e.moveTo(a+d,c),e.quadraticCurveTo(a+d+u,(c+h)/2,a+d+u*1.6,h),e.stroke()}e.globalAlpha=1;const o=e.createLinearGradient(0,0,0,i);return o.addColorStop(0,"rgba(20,12,4,0.55)"),o.addColorStop(.3,"rgba(20,12,4,0)"),e.globalCompositeOperation="source-atop",e.fillStyle=o,e.fillRect(0,0,i,i),e.globalCompositeOperation="source-over",{map:t,normal:en(Jv(t),i,i,2)}};wt.shingle=i=>{const e=i/8,n=Ie(51),s=new Float32Array(i*i),o=[];for(let l=0;l<8;l++){const c=[];let h=n()*i*.2;for(;h<i;)c.push(h),h+=i*(.12+n()*.12);o.push({cuts:c,t:c.map(()=>.85+n()*.3)})}const r=ce("#4b4e52");return{map:ye(i,i,(l,c,h,u,d)=>{const f=d/e|0,p=(d-f*e)/e,v=o[f];let g=0;for(;g<v.cuts.length-1&&v.cuts[g+1]<u;)g++;const m=u<v.cuts[0]?v.t[v.t.length-1]:v.t[g],b=Math.min(Math.abs(u-v.cuts[g]),Math.abs(u-(v.cuts[g+1]??i+v.cuts[0])));let y=m*(.82+p*.3)*(1+(Yt(l,c,24,3)-.5)*.25);b<1.2&&(y*=.55),p>.93&&(y*=.5),h[0]=r[0]*y,h[1]=r[1]*y,h[2]=r[2]*y*1.02,s[d*i+u]=p*.9+(b<1.2?-.2:0)}),normal:en(s,i,i,3)}};wt.metalRoof=i=>{const t=new Float32Array(i*i);return{map:ye(i,i,(n,s,o,r,a)=>{const l=n*2%1,c=Math.max(0,1-Math.abs(l-.5)*40),h=.95+(Yt(n,s,4,3)-.5)*.1-c*.2;o[0]=82*h,o[1]=86*h,o[2]=90*h,t[a*i+r]=c}),normal:en(t,i,i,4)}};wt.stone=i=>{const t=ce("#8a857c"),e=new Float32Array(i*i);return{map:ye(i,i,(s,o,r,a,l)=>{const c=Yt(s,o,4,5,.6)-.5,h=Math.random(),u=1+c*.3+(h<.03?-.35:h>.97?.2:0);r[0]=t[0]*u,r[1]=t[1]*u,r[2]=t[2]*u*.98,e[l*i+a]=c+h*.15}),normal:en(e,i,i,2.5)}};wt.corten=i=>{const t=ce("#8a4a2a"),e=ce("#a8612f"),n=ce("#5e3322"),s=ce("#c27a3e"),o=new Float32Array(i*i);return{map:ye(i,i,(a,l,c,h,u)=>{const d=Yt(a,l,4,5,.6),f=Yt(a,l,18,3,.55,3),p=Yt(a*.5,l*3,3,3,.5,7);let v=qe(t,e,d);v=qe(v,n,Math.max(0,f-.55)*2.2),v=qe(v,s,Math.max(0,p-.62)*2);const g=.9+(Math.random()-.5)*.14;c[0]=v[0]*g,c[1]=v[1]*g,c[2]=v[2]*g,o[u*i+h]=f*.7+Math.random()*.2}),normal:en(o,i,i,2)}};wt.capiz=i=>{const t=Fi(i),e=t.getContext("2d"),n=Ie(61);e.fillStyle="#efe7da",e.fillRect(0,0,i,i);for(let s=0;s<140;s++){const o=n()*i,r=n()*i,a=i*(.08+n()*.05);cd(i,i,o,r,a,(l,c)=>{const h=e.createRadialGradient(l-a*.3,c-a*.3,1,l,c,a);h.addColorStop(0,"rgba(255,252,246,0.9)"),h.addColorStop(.7,`rgba(${230+n()*20},${220+n()*20},${210+n()*30},0.85)`),h.addColorStop(1,"rgba(180,170,160,0.9)"),e.fillStyle=h,e.beginPath(),e.arc(l,c,a,0,6.28),e.fill()})}return{map:t}};wt.bark=i=>({map:ye(i,i,(e,n,s)=>{const o=Math.pow(Math.abs(Math.sin((n+Yt(e,n,4,2)*.05)*Math.PI*6)),6),a=.75+Yt(e*.5,n*4,8,3,.5,3)*.35-o*.3;s[0]=118*a,s[1]=104*a,s[2]=88*a})});wt.grass=i=>({map:ye(i,i,(e,n,s)=>{const o=Yt(e,n,4,5,.55),r=Yt(e,n,64,2,.5,3),a=Math.max(0,Yt(e,n,3,3,.5,9)-.62)*3,l=qe([70,104,40],[112,140,58],o),c=qe(l,[110,88,60],Math.min(1,a)),h=.8+r*.4;s[0]=c[0]*h,s[1]=c[1]*h,s[2]=c[2]*h})});wt.waterN=i=>{const t=new Float32Array(i*i);for(let e=0;e<i;e++)for(let n=0;n<i;n++)t[e*i+n]=Yt(n/i,e/i,4,5,.5,21);return{normal:en(t,i,i,6)}};wt.blob=i=>({map:ye(i,i,(t,e,n)=>{const s=Math.max(0,Math.abs(t-.5)*2-.45)/.55,o=Math.max(0,Math.abs(e-.5)*2-.45)/.55,r=Math.min(1,Math.hypot(s,o)),a=Math.pow(1-r,1.8);n[0]=n[1]=n[2]=255,n[3]=a*255})});wt.strip=()=>({map:ye(4,64,(i,t,e)=>{const n=Math.pow(t,2.2);e[0]=e[1]=e[2]=255,e[3]=n*255})});wt.net=i=>{const t=Fi(i),e=t.getContext("2d");e.strokeStyle="#efe6d4",e.lineWidth=i/64;const n=i/8;for(let s=-8;s<=16;s++)e.beginPath(),e.moveTo(s*n,0),e.lineTo(s*n+i,i),e.stroke(),e.beginPath(),e.moveTo(s*n,0),e.lineTo(s*n-i,i),e.stroke();return{map:t}};wt.screen=i=>{const t=Fi(i),e=t.getContext("2d");e.fillStyle="#f2eee6",e.fillRect(0,0,i,i),e.globalCompositeOperation="destination-out";const n=4,s=i/n;for(let o=0;o<n;o++)for(let r=0;r<n;r++){const a=o*s+s/2,l=r*s+s/2;e.beginPath();for(let c=0;c<4;c++){const h=c*Math.PI/2+Math.PI/4;e.ellipse(a+Math.cos(h)*s*.2,l+Math.sin(h)*s*.2,s*.16,s*.07,h,0,Math.PI*2)}e.fill(),e.beginPath(),e.arc(a,l,s*.07,0,6.28),e.fill();for(const[c,h]of[[0,0],[s,0],[0,s],[s,s]])e.beginPath(),e.moveTo(o*s+c,r*s+h-s*.12),e.lineTo(o*s+c+s*.12,r*s+h),e.lineTo(o*s+c,r*s+h+s*.12),e.lineTo(o*s+c-s*.12,r*s+h),e.closePath(),e.fill()}return e.globalCompositeOperation="source-over",{map:t}};wt.surf=i=>{const t=Fi(i,i/4),e=t.getContext("2d"),n=i,s=i/4,o=e.createLinearGradient(0,0,n,0);o.addColorStop(0,"#f4ecdc"),o.addColorStop(1,"#efe3cc"),e.fillStyle=o,e.fillRect(0,0,n,s);const r=(a,l,c)=>{e.fillStyle=c,e.fillRect(a*n,0,l*n,s)};return r(.18,.05,"#2f8c8c"),r(.24,.02,"#e8ba86"),r(.27,.08,"#d9634a"),r(.36,.02,"#e8ba86"),r(.39,.05,"#2f8c8c"),e.fillStyle="#1f3b3b",e.globalAlpha=.85,e.beginPath(),e.arc(n*.66,s/2,s*.3,0,6.28),e.fill(),e.globalAlpha=1,e.fillStyle="#f4ecdc",e.beginPath(),e.arc(n*.66,s/2,s*.22,0,6.28),e.fill(),e.fillStyle="#d9634a",e.beginPath(),e.arc(n*.66,s/2,s*.12,0,6.28),e.fill(),e.fillStyle="rgba(80,60,40,0.35)",e.fillRect(0,s/2-1,n,2),{map:t}};wt.art=(i,t=1)=>{const e=Fi(i),n=e.getContext("2d"),s=Ie(t*97),o=[["#e9dfcf","#c98c5a","#8a4b2f","#2f4f4a","#d8b27a"],["#efe9df","#3f6f78","#9fc3c0","#d9c29a","#1f3033"],["#ece4d6","#c96d4e","#e6b77f","#6b7d5c","#2c2a28"]],r=o[t%o.length];n.fillStyle=r[0],n.fillRect(0,0,i,i);for(let a=0;a<7;a++){n.fillStyle=r[1+a%4],n.globalAlpha=.65+s()*.3,n.beginPath();const l=i*(.2+s()*.6),c=i*(.2+s()*.6),h=i*(.08+s()*.28);a%3===0?n.arc(l,c,h,0,Math.PI*(1+s())):a%3===1?n.ellipse(l,c,h,h*.4,s()*3,0,6.28):n.rect(l-h/2,c-h,h*.3,h*2),n.fill()}n.globalAlpha=1,n.strokeStyle=r[4],n.lineWidth=i/120,n.beginPath(),n.moveTo(i*.1,i*(.5+s()*.3));for(let a=0;a<6;a++)n.quadraticCurveTo(i*s(),i*s(),i*(.2+a*.14),i*(.3+s()*.5));return n.stroke(),{map:e}};wt.leaves=i=>{const t=Fi(i),e=t.getContext("2d"),n=Ie(71),s=i/2;e.clearRect(0,0,i,i);const o=(r,a,l,c,h,u)=>{const d=e.createLinearGradient(r,a,l,c);return d.addColorStop(0,h),d.addColorStop(1,u),d};{const l=0+s/2,c=0+s*.52,h=s*.44;e.save(),e.fillStyle=o(l-h,c-h,l+h,c+h,"#2f6b33","#1d4a22"),e.beginPath();for(let d=0;d<=64;d++){const f=d/64*Math.PI*2,p=1-.18*Math.pow(Math.max(0,Math.cos(f-Math.PI/2)),8),v=h*p*(.92+.08*Math.sin(f*2)),g=l+Math.cos(f)*v*.92,m=c+Math.sin(f)*v;d?e.lineTo(g,m):e.moveTo(g,m)}e.fill(),e.globalCompositeOperation="destination-out";for(let d=0;d<9;d++)for(const f of[-1,1]){const p=-Math.PI/2+f*(.35+d*.28);Math.abs(p+Math.PI/2)>2.7||(e.save(),e.translate(l,c),e.rotate(p),e.beginPath(),e.moveTo(h*.62,-s*.012),e.lineTo(h*1.1,-s*.02),e.lineTo(h*1.1,s*.02),e.lineTo(h*.62,s*.012),e.fill(),e.beginPath(),e.ellipse(h*.42,0,h*.07,h*.03,0,0,6.28),e.fill(),e.restore())}e.globalCompositeOperation="source-atop",e.strokeStyle="rgba(160,200,120,0.55)",e.lineWidth=s*.012,e.beginPath(),e.moveTo(l,c-h),e.lineTo(l,c+h*.95),e.stroke(),e.lineWidth=s*.005,e.strokeStyle="rgba(150,190,110,0.35)";for(let d=0;d<10;d++)for(const f of[-1,1])e.beginPath(),e.moveTo(l,c-h*.7+d*h*.17),e.quadraticCurveTo(l+f*h*.4,c-h*.8+d*h*.17,l+f*h*.95,c-h*.6+d*h*.2),e.stroke();const u=e.createRadialGradient(l-h*.3,c-h*.4,0,l,c,h*1.1);u.addColorStop(0,"rgba(255,255,220,0.18)"),u.addColorStop(1,"rgba(0,0,0,0.15)"),e.fillStyle=u,e.fillRect(0,0,s,s),e.restore(),e.globalCompositeOperation="source-over"}{const r=s,a=0,l=r+s*.5;e.save(),e.beginPath(),e.rect(r,a,s,s),e.clip(),e.strokeStyle="#6f7a3a",e.lineWidth=s*.018,e.beginPath(),e.moveTo(l,a+s*.99),e.lineTo(l,a+s*.02),e.stroke();for(let c=0;c<44;c++){const h=c/44,u=a+s*(.95-h*.9),d=s*(.36*Math.sin(Math.PI*(.15+h*.85))+.05);for(const f of[-1,1]){const p=-Math.PI/2+f*(.95-h*.35)+(n()-.5)*.12,v=l+Math.cos(p)*d,g=u+Math.sin(p)*d*.55;e.fillStyle=n()<.5?"#3f6e2c":"#4f7d33",e.beginPath(),e.moveTo(l,u),e.quadraticCurveTo((l+v)/2,(u+g)/2-f*s*0-s*.01,v,g),e.quadraticCurveTo((l+v)/2,(u+g)/2+s*.012,l,u-s*.012),e.fill()}}e.restore()}{const a=s,l=0+s/2;e.save(),e.beginPath(),e.rect(0,a,s,s),e.clip(),e.fillStyle=o(0,a,0+s,a,"#3b7a36","#2a5f2a"),e.beginPath(),e.moveTo(l,a+s*.03),e.bezierCurveTo(l+s*.48,a+s*.2,l+s*.45,a+s*.8,l,a+s*.98),e.bezierCurveTo(l-s*.45,a+s*.8,l-s*.48,a+s*.2,l,a+s*.03),e.fill(),e.globalCompositeOperation="destination-out",e.lineWidth=s*.008;for(let c=0;c<7;c++){const h=a+s*(.2+n()*.7),u=n()<.5?-1:1;e.beginPath(),e.moveTo(l+u*s*.05,h),e.lineTo(l+u*s*.5,h-s*.06),e.stroke()}e.globalCompositeOperation="source-atop",e.strokeStyle="rgba(200,220,150,0.5)",e.lineWidth=s*.014,e.beginPath(),e.moveTo(l,a),e.lineTo(l,a+s),e.stroke(),e.lineWidth=s*.003,e.strokeStyle="rgba(170,200,130,0.3)";for(let c=0;c<40;c++){const h=a+s*(.06+c*.023);e.beginPath(),e.moveTo(l-s*.5,h-s*.05),e.lineTo(l,h),e.lineTo(l+s*.5,h-s*.05),e.stroke()}e.restore(),e.globalCompositeOperation="source-over"}{const r=s,a=s,l=r+s/2,c=a+s/2;e.save(),e.beginPath(),e.rect(r,a,s,s),e.clip();const h=["#2d5a25","#3b6c2c","#4a7c33","#23491f","#58893a","#6f9443"];for(let u=0;u<150;u++){const d=n()*6.28,f=Math.pow(n(),.6)*s*.4,p=l+Math.cos(d)*f,v=c+Math.sin(d)*f,g=s*(.05+n()*.05),m=g*(.35+n()*.2);e.save(),e.translate(p,v),e.rotate(d+(n()-.5)*1.2),e.fillStyle=h[n()*h.length|0],e.beginPath(),e.ellipse(g/2,0,g/2,m/2,0,0,6.28),e.fill(),e.strokeStyle="rgba(190,220,140,0.25)",e.lineWidth=1,e.beginPath(),e.moveTo(0,0),e.lineTo(g,0),e.stroke(),e.restore()}e.restore()}return{map:t}};class hd{constructor(t="high",e=8){this.tier=t,this.Q=t==="high"?1:t==="mid"?.75:.5,this.aniso=Math.min(e,t==="high"?8:4),this.textures=new Map,this.mats=new Map,this.nightEmissive=[],this.uniforms={time:{value:0},sun:{value:new ut(1,.8,.6)},sunDir:{value:new D(0,1,0)},night:{value:0},caustic:{value:1}}}size(t){return Math.max(64,Math.round(t*this.Q/64)*64)}tex(t,e){if(this.textures.has(t))return this.textures.get(t);const n=e(),s={};for(const o of["map","normal","rough"]){if(!n[o])continue;const r=new Ou(n[o]);r.wrapS=r.wrapT=Wr,r.colorSpace=o==="map"?cn:hi,r.anisotropy=this.aniso,r.generateMipmaps=!0,r.minFilter=$n,s[o]=r}return s.su=n.su,s.sv=n.sv,this.textures.set(t,s),s}get(t){if(this.mats.has(t))return this.mats.get(t);const e=this.make(t);return e.name=t,this.mats.set(t,e),e}std(t,e){const n=new xe(t);return n.userData.uv=e||{s:1,mode:"local"},n}make(t){const e=s=>this.size(s),n=(s,o)=>this.tex(s,o);switch(t){case"terrazzo":{const s=n("terrazzo",()=>wt.terrazzo(e(1024)));return this.std({map:s.map,roughnessMap:s.rough,roughness:1,metalness:0,envMapIntensity:1.1},{s:1.7,mode:"world"})}case"plaster":{const s=n("plaster",()=>wt.plaster(e(512)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.35,.35),roughness:.93},{s:2.6,mode:"world"})}case"plasterGrey":{const s=n("plasterGrey",()=>wt.plaster(e(512),"#cfcac2"));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.35,.35),roughness:.93},{s:2.6,mode:"world"})}case"stucco":{const s=n("plaster",()=>wt.plaster(e(512)));return this.std({map:s.map,color:"#fbf8f2",normalMap:s.normal,normalScale:new ht(.8,.8),roughness:.95},{s:1.6,mode:"world"})}case"hardwood":case"hardwoodZ":{const s=n("hardwood",()=>wt.hardwood(e(1024)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.4,.4),roughness:.42,envMapIntensity:.9},{s:2.2,mode:"world",rot:t==="hardwoodZ"})}case"deck":case"deckZ":{const s=n("deck",()=>wt.deck(e(512)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.9,.9),roughness:.78},{s:1.9,mode:"world",rot:t==="deckZ"})}case"cedar":case"cedarZ":{const s=n("cedar",()=>wt.cedar(e(512)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.8,.8),roughness:.72},{s:1,mode:"world",rot:t==="cedarZ"})}case"soffit":case"soffitZ":{const s=n("soffit",()=>wt.soffit(e(512)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.6,.6),roughness:.66},{s:1.1,mode:"world",rot:t==="soffitZ"})}case"teakSlat":{const s=n("teakSlat",()=>wt.teakSlat(e(256)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(1,1),roughness:.6},{s:.42,mode:"local",rot:!0})}case"teak":{const s=n("oakLight",()=>wt.oakLight(e(256)));return this.std({map:s.map,color:"#b98a60",roughness:.55},{s:.9,mode:"local"})}case"oak":{const s=n("oakLight",()=>wt.oakLight(e(256)));return this.std({map:s.map,color:"#e8d2b4",roughness:.55},{s:.9,mode:"local"})}case"walnut":{const s=n("oakLight",()=>wt.oakLight(e(256)));return this.std({map:s.map,color:"#6e4b33",roughness:.5},{s:.9,mode:"local"})}case"beam":{const s=n("cedar",()=>wt.cedar(e(512)));return this.std({map:s.map,color:"#c9a58a",roughness:.75},{s:1.4,mode:"local"})}case"liveEdge":{const s=n("liveEdge",()=>wt.liveEdge(e(512)));return this.std({map:s.map,roughness:.38,envMapIntensity:.9},{s:1.3,mode:"local"})}case"concrete":{const s=n("concrete",()=>wt.concrete(e(512)));return this.std({map:s.map,roughnessMap:s.rough,roughness:1,envMapIntensity:.9},{s:3.2,mode:"world"})}case"concreteDark":{const s=n("concreteDark",()=>wt.concrete(e(512),"#7f7c77"));return this.std({map:s.map,roughnessMap:s.rough,roughness:1},{s:2.2,mode:"world"})}case"counter":{const s=n("concreteDark",()=>wt.concrete(e(512),"#7f7c77"));return this.std({map:s.map,color:"#d6d2cb",roughness:.5},{s:1.4,mode:"local"})}case"concreteTile":{const s=n("cTile",()=>wt.concreteTile(e(512)));return this.std({map:s.map,normalMap:s.normal,roughnessMap:s.rough,roughness:1,envMapIntensity:.9},{s:1.8,mode:"world"})}case"microcement":{const s=n("micro",()=>wt.microcement(e(512)));return this.std({map:s.map,roughness:.62},{s:2.2,mode:"world"})}case"slate":{const s=n("slate",()=>wt.slate(e(512)));return this.std({map:s.map,normalMap:s.normal,roughnessMap:s.rough,roughness:1,normalScale:new ht(.7,.7)},{s:1.2,mode:"world"})}case"brick":{const s=n("brick",()=>wt.brick(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.9},{s:[.9,.75],mode:"world"})}case"stone":{const s=n("stone",()=>wt.stone(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.88},{s:1.2,mode:"world"})}case"grass":{const s=n("grass",()=>wt.grass(e(512)));return this.std({map:s.map,roughness:.95},{s:4,mode:"world"})}case"shingle":{const s=n("shingle",()=>wt.shingle(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.75,color:"#8d9196"},{s:1.2,mode:"keep"})}case"metalRoof":{const s=n("metalRoof",()=>wt.metalRoof(e(256)));return this.std({map:s.map,normalMap:s.normal,roughness:.5,metalness:.5},{s:.9,mode:"keep"})}case"thatch":{const s=n("thatch",()=>wt.thatch(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.95,alphaTest:.45,side:Ee},{s:1,mode:"keep"})}case"sukabumi":return this.poolTile(n("sukabumi",()=>wt.sukabumi(e(512))),.8,"#ffffff");case"spiral":return this.poolTile(n("spiral",()=>wt.spiralFloor(e(1024))),1,"#ffffff","keep");case"mosaicBlack":{const s=n("mosaicBlack",()=>wt.mosaicBlack(e(256)));return this.std({map:s.map,normalMap:s.normal,roughness:.18,envMapIntensity:1.2},{s:.4,mode:"world"})}case"rattan":{const s=n("rattan",()=>wt.rattan(e(256)));return this.std({map:s.map,normalMap:s.normal,roughness:.78},{s:.12,mode:"local"})}case"rattanLamp":{const s=n("rattan",()=>wt.rattan(e(256))),o=this.std({map:s.map,color:"#e9d6b4",normalMap:s.normal,roughness:.8,emissive:"#ffb86b",emissiveMap:s.map,emissiveIntensity:0,side:Ee},{s:.08,mode:"local"});return this.nightEmissive.push([o,1,0,2]),o}case"corten":{const s=n("corten",()=>wt.corten(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.82,metalness:.15},{s:1.6,mode:"world"})}case"rattanWhite":{const s=n("rattan",()=>wt.rattan(e(256)));return this.std({map:s.map,color:"#fff6ea",normalMap:s.normal,roughness:.8},{s:.1,mode:"local"})}case"rattanDark":{const s=n("rattan",()=>wt.rattan(e(256)));return this.std({map:s.map,color:"#8a6a4a",normalMap:s.normal,roughness:.78},{s:.12,mode:"local"})}case"fabric":{const s=n("linen",()=>wt.linen(e(256)));return this.std({map:s.map,normalMap:s.normal,normalScale:new ht(.6,.6),roughness:.96,vertexColors:!0},{s:.25,mode:"local"})}case"jute":{const s=n("jute",()=>wt.jute(e(512)));return this.std({map:s.map,normalMap:s.normal,roughness:.97},{s:1,mode:"keep"})}case"rugWool":{const s=n("rugWool",()=>wt.rugWool(e(512)));return this.std({map:s.map,roughness:.98},{s:1,mode:"keep"})}case"capiz":{const s=n("capiz",()=>wt.capiz(e(256))),o=this.std({map:s.map,roughness:.35,emissive:"#ffd9a0",emissiveMap:s.map,emissiveIntensity:0,side:Ee},{s:.35,mode:"local"});return this.nightEmissive.push([o,1.4,0,1.6]),o}case"shade":{const s=this.std({color:"#f1e6d2",roughness:.8,emissive:"#ffcf8a",emissiveIntensity:0,side:Ee});return this.nightEmissive.push([s,.9]),s}case"bulb":{const s=this.std({color:"#fff4e0",emissive:"#ffd08a",emissiveIntensity:.4,roughness:.3});return this.nightEmissive.push([s,4,.4]),s}case"uplight":{const s=this.std({color:"#222",emissive:"#ffcf8a",emissiveIntensity:0});return this.nightEmissive.push([s,4]),s}case"steel":return this.std({color:"#1b1c1d",roughness:.42,metalness:.65,envMapIntensity:.8});case"steelGrey":return this.std({color:"#6c7074",roughness:.48,metalness:.55});case"chrome":return this.std({color:"#d7d7d4",roughness:.18,metalness:1});case"brass":return this.std({color:"#b48a52",roughness:.32,metalness:1});case"ceramic":return this.std({color:"#f4f2ee",roughness:.16,envMapIntensity:1});case"blackMatte":return this.std({color:"#191919",roughness:.7});case"poche":return this.std({color:"#2a2724",roughness:.9});case"whitePaint":return this.std({color:"#f1eee8",roughness:.7});case"props":return this.std({vertexColors:!0,roughness:.62});case"gloss":return this.std({vertexColors:!0,roughness:.22,envMapIntensity:1.1});case"mirror":return this.std({color:"#b9bcb9",roughness:.12,metalness:1,envMapIntensity:.75});case"mirrorSoft":return this.std({color:"#8f9492",roughness:.32,metalness:.7,envMapIntensity:.55});case"screen":{const s=n("screen",()=>wt.screen(e(512)));return this.std({map:s.map,roughness:.8,alphaTest:.5,side:Ee},{s:1.2,mode:"keep"})}case"net":{const s=n("net",()=>wt.net(e(256)));return this.std({map:s.map,roughness:.9,alphaTest:.4,side:Ee},{s:1,mode:"keep"})}case"surf":{const s=n("surf",()=>wt.surf(e(512)));return this.std({map:s.map,roughness:.3},{s:1,mode:"keep"})}case"art1":case"art2":case"art3":{const s=+t.slice(3),o=n(t,()=>wt.art(e(256),s));return this.std({map:o.map,roughness:.85},{s:1,mode:"keep"})}case"bark":{const s=n("bark",()=>wt.bark(e(256)));return this.std({map:s.map,roughness:.95},{s:1,mode:"keep"})}case"glass":{const s=new qa({color:"#e8f0ee",transparent:!0,opacity:.1,roughness:.03,metalness:0,envMapIntensity:1.4,depthWrite:!1,side:Ee,specularIntensity:1});return s.userData.uv={s:1,mode:"local"},s}case"glassFrost":{const s=new qa({color:"#eef3f0",transparent:!0,opacity:.35,roughness:.4,depthWrite:!1,side:Ee});return s.userData.uv={s:1,mode:"local"},s}case"blob":{const s=n("blob",()=>wt.blob(64)),o=new Hn({color:"#1a120a",alphaMap:s.map,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return o.userData.uv={mode:"keep"},o}case"strip":{const s=n("strip",()=>wt.strip()),o=new Hn({color:"#20160c",alphaMap:s.map,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return o.userData.uv={mode:"keep"},o}case"curtain":return this.curtain();case"foliage":return this.foliage(!1);case"foliageI":return this.foliage(!0);case"water":return this.water();default:return console.warn("[tour] unknown material",t),this.std({color:"#ff00ff"})}}poolTile(t,e,n,s="world"){const o=this.std({map:t.map,normalMap:t.normal||null,color:n,roughness:.25,envMapIntensity:.6},{s:e,mode:s}),r=this.uniforms;return o.userData.waterY={value:0},o.onBeforeCompile=a=>{a.uniforms.uTime=r.time,a.uniforms.uSun=r.sun,a.uniforms.uNight=r.night,a.uniforms.uWaterY=o.userData.waterY,a.uniforms.uCaustic=r.caustic,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed,1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWP; uniform float uTime, uNight, uWaterY, uCaustic; uniform vec3 uSun;
        float cz(vec2 p){ vec2 i = floor(p); vec2 f = fract(p); float d = 1.0;
          for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){ vec2 g = vec2(float(x),float(y)); vec2 o = fract(sin(vec2(dot(i+g,vec2(127.1,311.7)),dot(i+g,vec2(269.5,183.3))))*43758.5453);
            o = 0.5 + 0.5*sin(uTime*0.9 + 6.2831*o); d = min(d, length(g + o - f)); }
          return d; }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          float under = step(vWP.y, uWaterY - 0.02);
          vec2 cp = vWP.xz * 1.6;
          float c1 = cz(cp), c2 = cz(cp * 1.3 + 3.7);
          float caus = pow(1.0 - min(c1, c2), 6.0) * 1.4 + pow(1.0 - c1, 10.0) * 0.8;
          totalEmissiveRadiance += under * (caus * uSun * 0.22 * uCaustic * diffuseColor.rgb
            + uNight * diffuseColor.rgb * vec3(0.2, 0.75, 0.9) * (0.34 + caus * 0.2));`)},o.customProgramCacheKey=()=>"poolTile",o}water(){const t=this.tex("waterN",()=>wt.waterN(this.size(256))),e=new qa({color:"#2aa3a3",transparent:!0,opacity:.32,roughness:.04,metalness:0,normalMap:t.normal,normalScale:new ht(.28,.28),envMapIntensity:1.25,depthWrite:!1,specularIntensity:1,ior:1.33});e.userData.uv={s:3,mode:"world"};const n=this.uniforms;return e.onBeforeCompile=s=>{s.uniforms.uTime=n.time,s.uniforms.uNight=n.night,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime, uNight;`).replace("#include <normal_fragment_maps>",`
          vec3 mapN = texture2D( normalMap, vNormalMapUv + vec2(uTime*0.018, uTime*0.011) ).xyz * 2.0 - 1.0;
          vec3 mapN2 = texture2D( normalMap, vNormalMapUv * 1.7 + vec2(-uTime*0.013, uTime*0.02) ).xyz * 2.0 - 1.0;
          mapN = normalize(vec3((mapN.xy + mapN2.xy) * normalScale, 1.0));
          normal = normalize( tbn * mapN );`).replace("#include <opaque_fragment>",`
          float fres = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 3.0);
          outgoingLight += vec3(0.1, 0.55, 0.62) * uNight * 0.12;
          diffuseColor.a = clamp(diffuseColor.a + fres * 0.55, 0.0, 0.92);
          #include <opaque_fragment>`)},e.customProgramCacheKey=()=>"tourWater",e}curtain(){const t=new xe({color:"#f7f2ea",roughness:.95,transparent:!0,opacity:.62,side:Ee,depthWrite:!1});t.userData.uv={mode:"keep"};const e=this.uniforms;return t.onBeforeCompile=n=>{n.uniforms.uTime=e.time,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float sw = (1.0 - uv.y);
          transformed.x += sin(uTime * 0.9 + position.y * 1.3 + position.x * 2.1 + position.z * 1.7) * 0.035 * sw;
          transformed.z += cos(uTime * 0.7 + position.x * 1.9 + position.z * 1.1) * 0.05 * sw;`)},t.customProgramCacheKey=()=>"tourCurtain",t}foliage(t){const e=this.tex("leaves",()=>wt.leaves(this.size(1024))),n=new xe({map:e.map,alphaTest:.42,side:Ee,roughness:.62,envMapIntensity:.7});n.userData.uv={mode:"keep"};const s=this.uniforms;return n.onBeforeCompile=o=>{o.uniforms.uTime=s.time,o.uniforms.uSun=s.sun,o.uniforms.uSunDir=s.sunDir,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; varying vec3 vWP2;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec4 wq = modelMatrix * ${t?"instanceMatrix *":""} vec4(position, 1.0);
          float h = max(0.0, position.y);
          transformed.x += sin(uTime * 1.3 + wq.x * 0.4 + wq.z * 0.3) * 0.025 * h;
          transformed.z += cos(uTime * 1.1 + wq.z * 0.5) * 0.02 * h;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP2 = (modelMatrix * `+(t?"instanceMatrix * ":"")+"vec4(transformed,1.0)).xyz;"),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSun, uSunDir; varying vec3 vWP2;`).replace("#include <opaque_fragment>",`
          vec3 vd = normalize(vWP2 - cameraPosition);
          float back = pow(max(dot(vd, uSunDir), 0.0), 3.0);
          outgoingLight += diffuseColor.rgb * uSun * back * 0.6 * vec3(0.9, 1.15, 0.45);
          #include <opaque_fragment>`)},n.customProgramCacheKey=()=>"tourFoliage"+(t?"I":""),n}setNight(t){for(const[e,n,s=0,o=1]of this.nightEmissive)e.emissiveIntensity=s+(n-s)*Math.pow(t,o)}dispose(){var t;for(const e of this.textures.values())for(const n of["map","normal","rough"])(t=e[n])==null||t.dispose();for(const e of this.mats.values())e.dispose();this.textures.clear(),this.mats.clear(),this.nightEmissive=[]}}function Jl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new ge;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=R0(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);const p=R0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function R0(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Pe(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const v=h.getComponent(d,p);a.setComponent(d+u,p,v)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ro=new D;function Sn(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;ro.copy(t),ro[n]=0,ro.normalize();const c=.5*r/(r+a),h=1-ro.angleTo(i)/l;return Math.sign(ro[e])===1?h*c:a/(r+a)+c+c*(1-h)}class Qv extends Ae{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new D,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*o,h[g+1]=c.y*Math.sign(a.y)+l.y*o,h[g+2]=c.z*Math.sign(a.z)+l.z*o,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Sn(p,l,"z","y",o,n),d[m+1]=1-Sn(p,l,"y","z",o,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Sn(p,l,"z","y",o,n),d[m+1]=1-Sn(p,l,"y","z",o,e);break;case 2:p.set(0,1,0),d[m+0]=1-Sn(p,l,"x","z",o,t),d[m+1]=Sn(p,l,"z","x",o,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Sn(p,l,"x","z",o,t),d[m+1]=1-Sn(p,l,"z","x",o,n);break;case 4:p.set(0,0,1),d[m+0]=1-Sn(p,l,"x","y",o,t),d[m+1]=1-Sn(p,l,"y","x",o,e);break;case 5:p.set(0,0,-1),d[m+0]=Sn(p,l,"x","y",o,t),d[m+1]=1-Sn(p,l,"y","x",o,e);break}}}const Qa=new At,P0=new pe,L0=new on,tb=new D,D0=new D,eb=new Set(["glass","glassFrost","blob","strip","curtain","water","shade","bulb","capiz"]),nb=new Set(["blob","strip","bulb"]),ib={blob:1,strip:1,curtain:3,water:2,glass:4,glassFrost:4};function I0(i,t=1,e=!1){const n=i.attributes.position.array,s=i.attributes.uv.array,o=Array.isArray(t)?t[0]:t,r=Array.isArray(t)?t[1]:t,a=n.length/9;for(let l=0;l<a;l++){const c=l*9,h=n[c+3]-n[c],u=n[c+4]-n[c+1],d=n[c+5]-n[c+2],f=n[c+6]-n[c],p=n[c+7]-n[c+1],v=n[c+8]-n[c+2],g=Math.abs(u*v-d*p),m=Math.abs(d*f-h*v),b=Math.abs(h*p-u*f);for(let y=0;y<3;y++){const x=n[c+y*3],T=n[c+y*3+1],M=n[c+y*3+2];let A,S;if(m>=g&&m>=b?(A=x,S=M):g>=b?(A=M,S=T):(A=x,S=T),e){const _=A;A=S,S=_}s[(l*3+y)*2]=A/o,s[(l*3+y)*2+1]=S/r}}i.attributes.uv.needsUpdate=!0}function sb(i,t){const e=t.isColor?t:new ut(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let o=0;o<n;o++)s[o*3]=e.r,s[o*3+1]=e.g,s[o*3+2]=e.b;return i.setAttribute("color",new Pe(s,3)),i}function ri(i,t,e,n,s=[[0,0],[1,0],[1,1],[0,1]]){const o=new ge,r=[i,t,e,i,e,n],a=[s[0],s[1],s[2],s[0],s[2],s[3]];return o.setAttribute("position",new Wt(r.flat(),3)),o.setAttribute("uv",new Wt(a.flat(),2)),o.computeVertexNormals(),o}class ud{constructor(t,{tier:e="high"}={}){this.M=t,this.tier=e,this.items=[],this.dyn=new se,this.nav={areas:[],segs:[],blocks:[]},this.lights=[],this.fans=[],this.levels=[0],this.level=0,this.layer=null,this.cache=new Map,this.labels=[],this.waterPlanes=[]}get y(){return this.levels[this.level]??0}L(){return this.layer||"L"+this.level}mat(t){return typeof t=="string"?this.M.get(t):t}geo(t,e){return this.cache.has(t)||this.cache.set(t,e()),this.cache.get(t)}boxGeo(t,e,n){return this.geo(`b${t.toFixed(3)}|${e.toFixed(3)}|${n.toFixed(3)}`,()=>new Ae(t,e,n))}rboxGeo(t,e,n,s,o=3){return s=Math.min(s,t/2-.001,e/2-.001,n/2-.001),this.geo(`r${t.toFixed(3)}|${e.toFixed(3)}|${n.toFixed(3)}|${s.toFixed(3)}|${o}`,()=>new Qv(t,e,n,o,Math.max(.001,s)))}cylGeo(t,e,n,s=16,o=!1){return this.geo(`c${t}|${e}|${n}|${s}|${o}`,()=>new ze(t,e,n,s,1,o))}push(t,e,n,s={}){this.items.push({geo:t,mat:this.mat(e),matrix:n.clone(),layer:s.layer||this.L(),cast:s.cast,color:s.color})}add(t,e,n=0,s=0,o=0,r=0,a={}){L0.set(a.rx||0,r,a.rz||0,"YXZ"),P0.setFromEuler(L0),D0.set(a.sx??1,a.sy??1,a.sz??1),Qa.compose(tb.set(n,s,o),P0,D0),a.parent&&Qa.premultiply(a.parent),this.push(t,e,Qa,a)}box(t,e,n,s,o,r,a,l=0,c={}){this.add(this.boxGeo(t,e,n),s,o,r+e/2,a,l,c)}rbox(t,e,n,s,o,r,a,l,c=0,h={}){this.add(this.rboxGeo(t,e,n,s,h.seg||3),o,r,a+e/2,l,c,h)}place(t,e,n,s,o=0,r={}){t.position.set(e,n,s),t.rotation.set(0,o,0),t.updateMatrixWorld(!0),t.traverse(a=>{a.isMesh&&this.push(a.geometry,a.material,a.matrixWorld,{layer:a.userData.layer||r.layer,cast:a.userData.cast,color:a.userData.color})})}walk(t,e,n,s,o=this.y,r={}){this.nav.areas.push({kind:"rect",x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),y:o,level:r.level??this.level,ramp:r.ramp||null})}walkCircle(t,e,n,s=this.y,o={}){this.nav.areas.push({kind:"circle",cx:t,cz:e,r:n,y:s,level:o.level??this.level})}ramp(t,e,n,s,o,r,a,l={}){this.nav.areas.push({kind:"rect",x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),y:Math.min(r,a),ramp:{axis:o,yA:r,yB:a},level:l.level??this.level})}seg(t,e,n,s,o=this.y,r=this.y+3,a=.1,l="wall"){this.nav.segs.push({x1:t,z1:e,x2:n,z2:s,y0:o,y1:r,t:a,kind:l})}block(t,e,n,s,o=0,r=this.y,a=this.y+1){this.nav.blocks.push({kind:"rect",cx:t,cz:e,hw:n/2,hd:s/2,rot:o,y0:r,y1:a})}blockCircle(t,e,n,s=this.y,o=this.y+1){this.nav.blocks.push({kind:"circle",cx:t,cz:e,r:n,y0:s,y1:o})}light(t){this.lights.push({level:this.level,prio:1,day:0,...t})}blob(t,e,n,s,o=0,r=this.y,a={}){const l=this.geo("blobq",()=>{const c=new Me(1,1);return c.rotateX(-Math.PI/2),c});this.add(l,"blob",t,r+.006,e,o,{sx:n,sz:s,layer:a.layer,cast:!1})}aoStrip(t,e,n,s,o,r,a=this.y,l={}){const c=l.w??.34,h=l.h??.26,u=l.off??0,d=o*u,f=r*u,p=ri([t+d+o*c,a+.004,e+f+r*c],[n+d+o*c,a+.004,s+f+r*c],[n+d,a+.004,s+f],[t+d,a+.004,e+f],[[0,0],[0,0],[0,1],[0,1]]);if(this.push(this.orient(p,0,1,0),"strip",new At,{layer:l.layer,cast:!1}),l.wall!==!1){const g=ri([t+d+o*.004,a,e+f+r*.004],[n+d+o*.004,a,s+f+r*.004],[n+d+o*.004,a+h,s+f+r*.004],[t+d+o*.004,a+h,e+f+r*.004],[[0,1],[0,1],[0,0],[0,0]]);this.push(this.orient(g,o,0,r),"strip",new At,{layer:l.layer,cast:!1})}}orient(t,e,n,s){t.computeVertexNormals();const o=t.attributes.normal;if(o.getX(0)*e+o.getY(0)*n+o.getZ(0)*s<0){const r=t.attributes.position,a=t.attributes.uv;for(let l=0;l<r.count;l+=3)for(const c of[r,a]){if(!c)continue;const h=c.itemSize;for(let u=0;u<h;u++){const d=c.array[(l+1)*h+u];c.array[(l+1)*h+u]=c.array[(l+2)*h+u],c.array[(l+2)*h+u]=d}}t.computeVertexNormals()}return t}slab(t,e,n,s,o,r={}){const a=r.y??this.y,l=r.th??.3,c=n-t,h=s-e;this.box(c,l,h,o,(t+n)/2,a-l,(e+s)/2,0,{layer:r.layer}),r.edge&&this.box(c+.02,.12,h+.02,r.edge,(t+n)/2,a-l-.02,(e+s)/2,0,{layer:r.layer}),r.under&&this.ceiling(t,e,n,s,{y:a-l-.003,mat:r.under,layer:r.layer||this.L()}),r.walk!==!1&&this.walk(t+(r.inset??0),e+(r.inset??0),n-(r.inset??0),s-(r.inset??0),a,{level:r.level})}frame(t,e,n,s){const o=n-t,r=s-e,a=Math.hypot(o,r),l=Math.atan2(r,o),c=new At().compose(new D(t,0,e),new pe().setFromAxisAngle(new D(0,1,0),-l),new D(1,1,1));return{L:a,ang:l,M:c,ux:o/a,uz:r/a,nx:-r/a,nz:o/a,at:h=>[t+o/a*h,e+r/a*h]}}fbox(t,e,n,s,o,r,a,l,c={}){n-e<.002||o-s<.002||a-r<.001||this.add(this.boxGeo(n-e,o-s,a-r),l,(e+n)/2,(s+o)/2,(r+a)/2,0,{parent:t.M,layer:c.layer,cast:c.cast})}wall(t,e,n,s,o={}){const r=this.frame(t,e,n,s),a=o.y0??this.y,l=o.h??3,c=o.t??.2,h=o.mat||"plaster",u=o.matB||h,d=(o.openings||[]).map(m=>({sill:0,h:2.2,type:"door",...m})).sort((m,b)=>m.at-b.at);let f=0;const p=[],v=[],g=(m,b,y,x)=>{h===u?this.fbox(r,m,b,y,x,-c/2,c/2,h,o):(this.fbox(r,m,b,y,x,-c/2,0,u,o),this.fbox(r,m,b,y,x,0,c/2,h,o))};for(const m of d){const b=m.at-m.w/2,y=m.at+m.w/2;b>f&&(g(f,b,a,a+l),p.push([f,b])),m.sill>0&&g(b,y,a,a+m.sill);const x=Math.min(l,m.sill+m.h);x<l&&g(b,y,a+x,a+l),this.opening(r,b,y,a+m.sill,a+x,c,m),m.type==="door"||m.type==="void"||m.type==="pivot"?v.push([b,y]):p.push([b,y]),f=y}f<r.L&&(g(f,r.L,a,a+l),p.push([f,r.L])),o.cap!==!1&&this.fbox(r,-.001,r.L+.001,a+l,a+l+.012,-c/2-.001,c/2+.001,"poche",{cast:!1});for(const[m,b]of p){const[y,x]=r.at(m),[T,M]=r.at(b);this.seg(y,x,T,M,a,a+l,c/2)}if(o.ao!==!1)for(const m of[1,-1]){if(m===1&&o.aoA===!1||m===-1&&o.aoB===!1)continue;const b=[];let y=0;for(const[x,T]of v)x>y&&b.push([y,x]),y=T;y<r.L&&b.push([y,r.L]);for(const[x,T]of b){const[M,A]=r.at(x),[S,_]=r.at(T),w=c/2;this.aoStrip(M+r.nx*w*m,A+r.nz*w*m,S+r.nx*w*m,_+r.nz*w*m,r.nx*m,r.nz*m,a,{layer:o.layer})}}return r}opening(t,e,n,s,o,r,a){const l=a.frame||"steel";if(a.type==="window"||a.type==="glass")this.glazingLocal(t,e,n,s,o,0,{grid:a.grid||[2,3],frame:l,t:.06});else if(a.type==="door"){const c=n-e,h=a.swing||1,u=.05;this.fbox(t,e-0,e+u,s,o,-r/2-.01,r/2+.01,a.frameMat||"walnut"),this.fbox(t,n-u,n,s,o,-r/2-.01,r/2+.01,a.frameMat||"walnut"),this.fbox(t,e,n,o-u,o,-r/2-.01,r/2+.01,a.frameMat||"walnut");const d=c-2*u,f=h>0?e+u:n-u;this.add(this.boxGeo(.045,o-s-u-.01,d),a.leaf||"teakSlat",f+(h>0?.03:-.03),(s+o-u)/2,(r/2+d/2)*(a.side||1),0,{parent:t.M})}else if(a.type==="pivot"){const c=n-e,u=t.M.clone().multiply(new At().makeTranslation(e+c*.3,0,0)).multiply(new At().makeRotationY(1.25));this.add(this.boxGeo(c*.95,o-s-.02,.07),a.leaf||"teakSlat",c*.2,(s+o)/2,0,0,{parent:u}),this.add(this.boxGeo(.03,.9,.03),"steel",c*.55,(s+o)/2-.1,.07,0,{parent:u})}}glazingLocal(t,e,n,s,o,r,a={}){const l=a.frame||"steel",c=a.t??.06,h=a.fw??.05,[u,d]=a.grid||[1,1];this.fbox(t,e,n,s,s+h,r-c/2,r+c/2,l),this.fbox(t,e,n,o-h,o,r-c/2,r+c/2,l),this.fbox(t,e,e+h,s,o,r-c/2,r+c/2,l),this.fbox(t,n-h,n,s,o,r-c/2,r+c/2,l);const f=a.bar??.028;for(let v=1;v<u;v++){const g=e+(n-e)*v/u;this.fbox(t,g-f/2,g+f/2,s,o,r-c*.4,r+c*.4,l)}for(let v=1;v<d;v++){const g=s+(o-s)*v/d;this.fbox(t,e,n,g-f/2,g+f/2,r-c*.4,r+c*.4,l)}const p=this.geo("glassq",()=>new Me(1,1));this.add(p,"glass",(e+n)/2,(s+o)/2,r,0,{parent:t.M,sx:n-e-h,sy:o-s-h,cast:!1})}glassWall(t,e,n,s,o={}){const r=this.frame(t,e,n,s),a=o.y0??this.y,l=o.h??3,c=o.frame||"steel",h=(o.gaps||[]).map(v=>[v.at-v.w/2,v.at+v.w/2]).sort((v,g)=>v[0]-g[0]),u=o.transom,d=o.rows||1;let f=0;const p=[];for(const[v,g]of h)v>f&&p.push([f,v]),f=g;f<r.L&&p.push([f,r.L]);for(const[v,g]of p){const m=Math.max(1,Math.round((g-v)/(o.panel||1.3)));for(let M=0;M<m;M++){const A=v+(g-v)*M/m,S=v+(g-v)*(M+1)/m;this.glazingLocal(r,A,S,a,u?a+u:a+l,0,{frame:c,grid:[o.cols||1,d],t:.07}),u&&this.glazingLocal(r,A,S,a+u,a+l,0,{frame:c,grid:[1,1],t:.07})}const[b,y]=r.at(v),[x,T]=r.at(g);this.seg(b,y,x,T,a,a+l,.06,"glass")}for(const[v,g]of h){const m=g-v,b=o.park===-1?-1:1,y=b>0?g:v-m,x=b>0?g+m:v;this.glazingLocal(r,Math.max(0,y),Math.min(r.L,x),a+.01,u?a+u-.01:a+l-.02,o.parkZ??.09,{frame:c,grid:[o.cols||1,d],t:.05}),u?this.glazingLocal(r,v,g,a+u,a+l,0,{frame:c,grid:[1,1],t:.07}):this.fbox(r,v,g,a+l-.06,a+l,-.05,.05,c),this.fbox(r,v,g,a-.005,a+.012,-.08,.08,c)}return r}frameless(t,e,n,s,o={}){const r=this.frame(t,e,n,s),a=o.y0??this.y,l=o.h??3,c=(o.gaps||[]).map(f=>[f.at-f.w/2,f.at+f.w/2]);let h=0;const u=[];for(const[f,p]of c)f>h&&u.push([h,f]),h=p;h<r.L&&u.push([h,r.L]);const d=this.geo("glassq",()=>new Me(1,1));for(const[f,p]of u){const v=Math.max(1,Math.round((p-f)/(o.panel||2.4)));for(let x=0;x<v;x++){const T=f+(p-f)*x/v,M=f+(p-f)*(x+1)/v;this.add(d,"glass",(T+M)/2,a+l/2,0,0,{parent:r.M,sx:M-T-.008,sy:l,cast:!1})}this.fbox(r,f,p,a-.01,a+.03,-.04,.04,o.channel||"steel"),this.fbox(r,f,p,a+l-.05,a+l,-.04,.04,o.channel||"steel");const[g,m]=r.at(f),[b,y]=r.at(p);this.seg(g,m,b,y,a,a+l,.05,"glass")}for(const[f,p]of c){const v=p-f;this.add(d,"glass",p+v/2,a+l/2-.01,.08,0,{parent:r.M,sx:v,sy:l-.04,cast:!1}),this.fbox(r,f,p+v,a+l-.05,a+l,.04,.12,o.channel||"steel")}return r}hipRows(t,e,n,s,o,r,a,l=0,c=1){const h=n-t,u=s-e,d=Math.min(h,u)/2,f=[...new Set(a.filter(g=>g<=d).concat([d]))].sort((g,m)=>g-m),p=g=>o+r*g+(l&&g<c?l*Math.pow(1-g/c,2):0),v=[];for(let g=0;g<f.length-1;g++){const m=f[g],b=f[g+1],y=p(m),x=p(b);v.push({side:"z0",q:[[t+m,y,e+m],[n-m,y,e+m],[n-b,x,e+b],[t+b,x,e+b]],d0:m,d1:b}),v.push({side:"z1",q:[[n-m,y,s-m],[t+m,y,s-m],[t+b,x,s-b],[n-b,x,s-b]],d0:m,d1:b}),v.push({side:"x0",q:[[t+m,y,s-m],[t+m,y,e+m],[t+b,x,e+b],[t+b,x,s-b]],d0:m,d1:b}),v.push({side:"x1",q:[[n-m,y,e+m],[n-m,y,s-m],[n-b,x,s-b],[n-b,x,e+b]],d0:m,d1:b})}return{faces:v,hAt:p,half:d,ds:f}}hipGeo(t,e,n=!1,s=null){const o=[],r=[];for(const l of t){if(s&&!s(l))continue;const[c,h,u,d]=l.q,f=b=>l.side==="z0"||l.side==="z1"?b[0]:b[2],p=b=>f(b),v=l.d0/e,g=l.d1/e,m=(b,y,x,T,M,A)=>{n?(o.push(b,y,x),r.push(T,M,A)):(o.push(b,x,y),r.push(T,A,M))};m(c,h,u,[p(c),v],[p(h),v],[p(u),g]),Math.hypot(u[0]-d[0],u[2]-d[2])>1e-4&&m(c,u,d,[p(c),v],[p(u),g],[p(d),g])}const a=new ge;return a.setAttribute("position",new Wt(o.flat(),3)),a.setAttribute("uv",new Wt(r.flat(),2)),a.computeVertexNormals(),a}hipRoof(t,e,n,s,o={}){const r=o.pitch??.56,a=Math.tan(r),l=Math.cos(r),c=o.overhang??1.2,h=o.th??.16,u=o.flare??.3,d=o.flareLen??1.1,f=t-c,p=e-c,v=n+c,g=s+c,m=(o.wallTop??this.y+3.2)-a*c,b=[0,d*.2,d*.45,d*.7,d,c+.01,c+1.5,c+3,c+5],y=this.hipRows(f,p,v,g,m+h,a,b,u,d),x=o.layer||"roof";this.push(this.hipGeo(y.faces,l,!1),o.mat||"shingle",new At,{layer:x});const T=this.hipRows(f,p,v,g,m,a,[0,d*.2,d*.45,d*.7,d,c],u,d);this.push(this.hipGeo(T.faces.filter(F=>F.d1<=c+.001),l,!0),o.soffit||"soffit",new At,{layer:x});const M=y.hAt(0),A=T.hAt(0),S=[[f,p],[v,p],[v,g],[f,g]];for(let F=0;F<4;F++){const[$,H]=S[F],[st,ot]=S[(F+1)%4],lt=ot-H,Mt=-(st-$),pt=ri([$,A-.02,H],[st,A-.02,ot],[st,M+.01,ot],[$,M+.01,H]);this.push(this.orient(pt,lt,0,Mt),o.fascia||"blackMatte",new At,{layer:x})}const _=y.hAt(y.half)+.03,w=v-f,E=g-p,U=(f+v)/2,L=(p+g)/2;w>=E?this.box(w-E+.1,.08,.16,o.cap||"blackMatte",U,_-.02,L,0,{layer:x}):this.box(.16,.08,E-w+.1,o.cap||"blackMatte",U,_-.02,L,0,{layer:x});const z=w>=E?(w-E)/2:0,O=w>=E?0:(E-w)/2;for(const[F,$]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const H=F>0?v:f,st=$>0?g:p,ot=U+F*z,lt=L+$*O,Mt=Math.hypot(H-ot,st-lt),pt=_-M,Z=Math.atan2(pt,Mt),nt=new At().compose(new D((H+ot)/2,(M+_)/2+.04,(st+lt)/2),new pe().setFromEuler(new on(0,Math.atan2(-(st-lt),H-ot),-Z*Math.sign(1),"YXZ")),new D(1,1,1)),mt=new D(H-ot,M-_,st-lt).normalize(),X=new pe().setFromUnitVectors(new D(1,0,0),mt);nt.compose(new D((H+ot)/2,(M+_)/2+.06,(st+lt)/2),X,new D(1,1,1)),this.push(this.boxGeo(Math.hypot(Mt,pt),.07,.14),o.cap||"blackMatte",nt,{layer:x})}return{hAt:y.hAt,yEave:m,tanp:a}}hipCeiling(t,e,n,s,o={}){const r=o.pitch??.56,a=Math.tan(r),l=Math.cos(r),c=o.y??this.y+3,h=o.layer||"roof",u=this.hipRows(t,e,n,s,c,a,[0,.5,1,2,3,4,5,6]),d=n-t>=s-e;this.push(this.hipGeo(u.faces,l,!0,M=>d?M.side[0]==="z":M.side[0]==="x"),o.mat||"cedar",new At,{layer:h,cast:!1}),this.push(this.hipGeo(u.faces,l,!0,M=>d?M.side[0]==="x":M.side[0]==="z"),o.mat2||"cedarZ",new At,{layer:h,cast:!1});const f=n-t,p=s-e,v=Math.min(f,p)/2,g=c+a*v,m=o.rafterMat||"walnut",b=o.spacing??.9,y=.07,x=.14,T=(M,A,S,_)=>{const w=c,E=c+a*Math.min(Math.abs(S-M)+Math.abs(_-A),v),U=new D(S-M,E-w,_-A),L=U.length();U.normalize();const z=new pe().setFromUnitVectors(new D(1,0,0),U),O=new At().compose(new D((M+S)/2,(w+E)/2-x/2-.01,(A+_)/2),z,new D(1,1,1));this.push(this.boxGeo(L,x,y),m,O,{layer:h})};if(o.rafters!==!1){if(d){for(let w=t+b/2;w<n;w+=b){const E=Math.min(w-t,n-w,v);T(w,e,w,e+E),T(w,s,w,s-E)}for(let w=e+b/2;w<s;w+=b){const E=Math.min(w-e,s-w,v);T(t,w,t+E,w),T(n,w,n-E,w)}}else{for(let w=e+b/2;w<s;w+=b){const E=Math.min(w-e,s-w,v);T(t,w,t+E,w),T(n,w,n-E,w)}for(let w=t+b/2;w<n;w+=b){const E=Math.min(w-t,n-w,v);T(w,e,w,e+E),T(w,s,w,s-E)}}const M=(t+n)/2,A=(e+s)/2,S=d?(f-p)/2:0,_=d?0:(p-f)/2;for(const[w,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const U=w>0?n:t,L=E>0?s:e,z=M+w*S,O=A+E*_,F=new D(z-U,g-c,O-L),$=F.length();F.normalize();const H=new At().compose(new D((U+z)/2,(c+g)/2-.1,(L+O)/2),new pe().setFromUnitVectors(new D(1,0,0),F),new D(1,1,1));this.push(this.boxGeo($,.18,.1),m,H,{layer:h})}d?this.box(f-p+.1,.22,.14,m,M,g-.24,A,0,{layer:h}):this.box(.14,.22,p-f+.1,m,M,g-.24,A,0,{layer:h})}for(const M of o.trusses||[]){const A=o.trussMat||m;if(d){const S=M;this.box(.14,.22,p,A,S,c-.22,(e+s)/2,0,{layer:h}),this.box(.14,g-c-.2,.14,A,S,c,(e+s)/2,0,{layer:h});for(const _ of[-1,1]){const w=(e+s)/2,E=_>0?s:e,U=new D(0,g-c,w-E),L=U.length();U.normalize();const z=new At().compose(new D(S,(c+g)/2-.16,(w+E)/2),new pe().setFromUnitVectors(new D(0,0,1),new D(0,U.y,U.z).multiplyScalar(-1).normalize()),new D(1,1,1));this.push(this.boxGeo(.14,.2,L),A,z,{layer:h});const O=(w+E)/2,F=(c+g)/2-.3,$=new D(0,F-(c+.3),O-w),H=$.length();$.normalize();const st=new At().compose(new D(S,(c+.3+F)/2,(w+O)/2),new pe().setFromUnitVectors(new D(0,0,1),$),new D(1,1,1));this.push(this.boxGeo(.1,.12,H),A,st,{layer:h})}}else{const S=M;this.box(f,.22,.14,A,(t+n)/2,c-.22,S,0,{layer:h}),this.box(.14,g-c-.2,.14,A,(t+n)/2,c,S,0,{layer:h})}}return{hr:g}}ceiling(t,e,n,s,o={}){const r=o.y??this.y+3,a=o.layer||"roof",l=o.hole,c=l?[[t,e,n,l[1]],[t,l[3],n,s],[t,l[1],l[0],l[3]],[l[2],l[1],n,l[3]]]:[[t,e,n,s]];for(const[h,u,d,f]of c){if(d-h<.01||f-u<.01)continue;const p=ri([h,r,u],[d,r,u],[d,r,f],[h,r,f]);this.push(this.orient(p,0,-1,0),o.mat||"soffit",new At,{layer:a,cast:!1})}}roofSlab(t,e,n,s,o={}){const r=o.y??this.y+3,a=o.th??.28,l=o.layer||"roof",c=o.hole,h=c?[[t,e,n,c[1]],[t,c[3],n,s],[t,c[1],c[0],c[3]],[c[2],c[1],n,c[3]]]:[[t,e,n,s]];for(const[u,d,f,p]of h)f-u>.01&&p-d>.01&&this.box(f-u,a,p-d,o.mat||"stucco",(u+f)/2,r,(d+p)/2,0,{layer:l});this.ceiling(t,e,n,s,{y:r-.002,mat:o.soffit||"soffit",layer:l,hole:o.hole})}deck(t,e,n,s,o={}){const r=o.y??this.y,a=o.mat||"deck",l=n-t,c=s-e,h=(t+n)/2,u=(e+s)/2;if(this.box(l,.05,c,a,h,r-.05,u,0,{layer:o.layer}),this.box(l+.04,.22,c+.04,o.fascia||"walnut",h,r-.27,u,0,{layer:o.layer}),o.ground!==void 0&&o.ground<r-.4){const d=o.ground,f=o.postSpacing??2.6,p=Math.max(1,Math.round(l/f)),v=Math.max(1,Math.round(c/f));for(let g=0;g<=p;g++)for(let m=0;m<=v;m++){if(g>0&&g<p&&m>0&&m<v)continue;const b=t+.15+(l-.3)*g/p,y=e+.15+(c-.3)*m/v,x=typeof d=="function"?d(b,y):d;this.box(.2,r-.27-x,.2,o.post||"concreteDark",b,x,y,0,{layer:"site"})}}o.walk!==!1&&this.walk(t,e,n,s,r,{level:o.level})}rail(t,e={}){const n=e.y??this.y,s=e.h??1,o=e.type||"cable",r=e.post||"steel";for(let a=0;a<t.length-1;a++){const[l,c]=t[a],[h,u]=t[a+1],d=this.frame(l,c,h,u),f=Math.max(1,Math.ceil(d.L/(e.spacing||1.5)));for(let p=0;p<=f;p++){if(p===0&&a>0)continue;const v=d.L*p/f;this.fbox(d,v-.03,v+.03,n,n+s-.02,-.03,.03,r,{layer:e.layer}),e.lights!==!1&&p%2===0&&this.fbox(d,v-.022,v+.022,n+.12,n+.2,.03,.045,"uplight",{layer:e.layer,cast:!1})}if(this.fbox(d,-.03,d.L+.03,n+s-.04,n+s+.02,-.045,.045,e.top||"teak",{layer:e.layer}),o==="cable")for(let p=1;p<=8;p++)this.fbox(d,0,d.L,n+.08+p*(s-.14)/9-.004,n+.08+p*(s-.14)/9+.004,-.004,.004,"chrome",{layer:e.layer,cast:!1});if(o==="glass"){const p=this.geo("glassq",()=>new Me(1,1));this.add(p,"glass",d.L/2,n+(s-.06)/2+.03,0,0,{parent:d.M,sx:d.L-.1,sy:s-.1,layer:e.layer,cast:!1})}if(o==="wood")for(let p=.12;p<d.L;p+=.12)this.fbox(d,p-.02,p+.02,n,n+s-.04,-.02,.02,"teak",{layer:e.layer});if(o==="steel"){this.fbox(d,0,d.L,n+.1,n+.13,-.012,.012,"steel",{layer:e.layer});for(let p=.11;p<d.L;p+=.11)this.fbox(d,p-.008,p+.008,n+.1,n+s-.04,-.008,.008,"steel",{layer:e.layer,cast:!1})}this.seg(l,c,h,u,n,n+s,.05,"rail")}}shapeSlab(t,e,n,s,o,r={}){const a=new Xs(t.map(([c,h])=>new ht(c,-h)));for(const c of e||[])a.holes.push(new Ro(c.map(([h,u])=>new ht(h,-u))));const l=new os(a,{depth:s,bevelEnabled:!1,curveSegments:24});l.rotateX(-Math.PI/2),this.add(l,o,0,n-s,0,0,{layer:r.layer})}plinth(t,e,n,s,o,r,a="stucco",l=.3){const c=o-r,h=n-t,u=s-e;this.box(h,c,l,a,(t+n)/2,r,e+l/2,0,{layer:"site"}),this.box(h,c,l,a,(t+n)/2,r,s-l/2,0,{layer:"site"}),this.box(l,c,u-2*l,a,t+l/2,r,(e+s)/2,0,{layer:"site"}),this.box(l,c,u-2*l,a,n-l/2,r,(e+s)/2,0,{layer:"site"})}pier(t,e,n,s,o=.35,r="concreteDark"){this.box(o,n-s,o,r,t,s,e,0,{layer:"site"})}column(t,e,n,s,o=.14,r="steel",a){this.box(o,s-n,o,r,t,n,e,0,{layer:a}),this.block(t,e,o+.05,o+.05,0,n,s)}stair(t,e,n,s,o,r,a={}){const l=Math.max(2,Math.round((r-o)/(a.rise||.175))),c=(r-o)/l,h=a.run||.28,u=l*h,d=new se,f=(w,E,U,L,z)=>{const O=new Xt(w,this.mat(E));O.position.set(U,L,z),d.add(O)},p=a.type||"stone";for(let w=0;w<l;w++){const E=w*h+h/2;p==="stone"?f(this.boxGeo(s,c*(w+1)+(a.base||0),h+.02),a.mat||"stone",0,(c*(w+1)-(a.base||0))/2,E):p==="open"?f(this.rboxGeo(s,.06,h+.04,.01,2),a.mat||"teak",0,c*(w+1)-.03,E):f(this.boxGeo(s,.05,h+.03),a.mat||"teak",0,c*(w+1)-.025,E)}if(p==="open"||p==="solid"){const w=Math.atan2(r-o,u),E=Math.hypot(u,r-o);for(const U of[-1,1]){const L=new Xt(this.boxGeo(.03,.26,E+.1),this.mat(a.stringer||"steel"));L.position.set(U*(s/2+.015),(r-o)/2-.12,u/2),L.rotation.x=-w,d.add(L)}}this.place(d,t,o,e,n,{layer:a.layer});const v=Math.cos(n),g=Math.sin(n),m=(w,E)=>[t+w*v+E*g,e-w*g+E*v];for(const w of a.rails||[]){const E=w*(s/2+.04),[U,L]=m(E,0),[z,O]=m(E,u),F=.95,$=this.frame(U,L,z,O),H=Math.atan2(r-o,$.L),st=$.M.clone().multiply(new At().makeTranslation(0,o+F,0)).multiply(new At().makeRotationZ(H)),ot=Math.hypot($.L,r-o);this.add(this.boxGeo(ot,.04,.05),a.railMat||"steel",ot/2,0,0,0,{parent:st,layer:a.layer});for(let lt=0;lt<=Math.ceil($.L/1.2);lt++){const Mt=Math.min($.L,lt*1.2);this.add(this.boxGeo(.03,F,.03),a.railMat||"steel",Mt,o+(r-o)*(Mt/$.L)+F/2,0,0,{parent:$.M,layer:a.layer})}if(a.cables)for(let lt=1;lt<=5;lt++)this.add(this.boxGeo(ot,.008,.008),"chrome",ot/2,-lt*.15,0,0,{parent:st,layer:a.layer,cast:!1})}const[b,y]=m(-s/2,0),[x,T]=m(s/2,u),M=Math.abs(g)>.5?"x":"z",A=M==="z"?v:g,S=A>0?o:r,_=A>0?r:o;this.ramp(b,y,x,T,M,S,_,{level:a.level});for(const w of[-1,1]){if(a.open&&a.open.includes(w))continue;const[E,U]=m(w*s/2,0),[L,z]=m(w*s/2,u);this.seg(E,U,L,z,Math.min(o,r)-.5,Math.max(o,r)+1.5,.04)}return{len:u,end:m(0,u)}}pool(t){var c,h,u,d,f;const e=t.y??this.y,n=t.water??e-.1,s=n-(t.depth??1.3),o=this.mat(t.floor||"sukabumi"),r=this.mat(t.wall||"sukabumi");o.userData.waterY&&(o.userData.waterY.value=n),r.userData.waterY&&(r.userData.waterY.value=n);const a=t.coping||"stone",l=t.layer||"site";if(t.shape==="circle"){const{cx:p,cz:v,r:g}=t,m=new Zn(g,72);m.rotateX(-Math.PI/2),this.add(m,o,p,s,v,Math.PI/2*0,{layer:l});const b=new Zn(g+(t.infinity?.04:0),72);b.rotateX(-Math.PI/2),this.add(b,"water",p,n,v,0,{layer:l,cast:!1});const y=((h=(c=t.infinity)==null?void 0:c.arc)==null?void 0:h[0])??0,x=((d=(u=t.infinity)==null?void 0:u.arc)==null?void 0:d[1])??0,T=72;for(let M=0;M<T;M++){const A=M/T*Math.PI*2,S=(M+1)/T*Math.PI*2,_=(A+S)/2,w=t.infinity&&ob(_,y,x),E=g,U=g+(w?.12:t.copingW??.45),L=w?n-.015:e,z=(F,$,H)=>[p+Math.cos(F)*$,H,v+Math.sin(F)*$];this.push(this.orient(ri(z(A,g,s),z(S,g,s),z(S,g,n+.02),z(A,g,n+.02),[[A*g/.8,0],[S*g/.8,0],[S*g/.8,(n-s)/.8],[A*g/.8,(n-s)/.8]]),-Math.cos(_),0,-Math.sin(_)),r,new At,{layer:l}),this.push(this.orient(ri(z(A,E,L),z(S,E,L),z(S,U,L),z(A,U,L)),0,1,0),w?"mosaicBlack":a,new At,{layer:l});const O=w?t.drop??s-1:s-.3;this.push(this.orient(ri(z(A,U,O),z(S,U,O),z(S,U,L),z(A,U,L)),Math.cos(_),0,Math.sin(_)),w?"mosaicBlack":t.outer||"mosaicBlack",new At,{layer:l})}this.blockCircle(p,v,g+.05,e-2,e+.2),this.waterPlanes.push({cx:p,cz:v,r:g,y:n})}else{const{cx:p,cz:v,w:g,d:m}=t,b=p-g/2,y=p+g/2,x=v-m/2,T=v+m/2,M=new Me(g,m);M.rotateX(-Math.PI/2),this.add(M,o,p,s,v,0,{layer:l});const A=n-s+.02,S=[[b,x,y,x,0,1],[y,T,b,T,0,-1],[b,T,b,x,1,0],[y,x,y,T,-1,0]];for(const[L,z,O,F,$,H]of S)this.push(this.orient(ri([L,s,z],[O,s,F],[O,s+A,F],[L,s+A,z]),$,0,H),r,new At,{layer:l});if(t.steps){const L=t.steps;for(let z=0;z<3;z++)this.box(L.w,n-s-.28*(z+1)+.02,.35,r,L.x,s,L.z+z*.35*(L.dir||1),0,{layer:l})}const _=t.infinity||"",w=new Me(g+(_.includes("x")?.05:0),m+(_.includes("z")?.05:0));w.rotateX(-Math.PI/2),this.add(w,"water",p+(_==="x1"?.025:_==="x0"?-.025:0),n,v+(_==="z1"?.025:_==="z0"?-.025:0),0,{layer:l,cast:!1});const E=t.copingW??.4,U={z0:[b-E,x-E,y+E,x],z1:[b-E,T,y+E,T+E],x0:[b-E,x,b,T],x1:[y,x,y+E,T]};for(const[L,[z,O,F,$]]of Object.entries(U))if(!((f=t.noCoping)!=null&&f.includes(L)))if(L===_){if(this.box(F-z,.02,$-O,"mosaicBlack",(z+F)/2,n-.035,(O+$)/2,0,{layer:l}),t.drop!==void 0){const H=L[0]==="z"?[F-z,.12]:[.12,$-O];this.box(H[0],n-.02-t.drop,H[1],"mosaicBlack",(z+F)/2,t.drop,(O+$)/2,0,{layer:l})}}else this.box(F-z,.06,$-O,a,(z+F)/2,e-.06,(O+$)/2,0,{layer:l});this.block(p,v,g+.05,m+.05,0,e-2,e+.2),this.waterPlanes.push({x0:b,z0:x,x1:y,z1:T,y:n})}return{wy:n,fy:s}}thatch(t,e,n,s,o={}){const r=o.y??this.y,a=o.drop??.9,l=o.out??.9,c=o.layers??2,h=o.layer||this.L(),u=[[t,e,n,e,0,-1],[n,e,n,s,1,0],[n,s,t,s,0,1],[t,s,t,e,-1,0]];for(let d=0;d<c;d++){const f=r-d*a*.5,p=l*(1-d*.12);for(const[v,g,m,b,y,x]of u){const T=Math.hypot(m-v,b-g),M=(m-v)/T,A=(b-g)/T,S=[v+y*.02,f,g+x*.02],_=[m+y*.02,f,b+x*.02],w=[m+y*p+M*p,f-a,b+x*p+A*p],E=[v+y*p-M*p,f-a,g+x*p-A*p],U=(T+2*p)/1.3,L=ri(S,_,w,E,[[p/1.3,1],[(T+p)/1.3,1],[U,0],[0,0]]);this.push(this.orient(L,y,.6,x),"thatch",new At,{layer:h})}}}finalize(){const t=new Map;for(const s of this.items){const o=s.mat.uuid+"|"+s.layer;t.has(o)||t.set(o,[]),t.get(o).push(s)}const e={};let n=0;for(const s of t.values()){const o=s[0].mat,r=s[0].layer,a=o.userData.uv||{mode:"local",s:1},l=[];for(const d of s){let f=d.geo.index?d.geo.toNonIndexed():d.geo.clone();for(const p of Object.keys(f.attributes))["position","normal","uv","color"].includes(p)||f.deleteAttribute(p);if(f.morphAttributes={},f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new Wt(new Float32Array(f.attributes.position.count*2),2)),a.mode==="local")I0(f,a.s,a.rot);else if(a.mode==="keep"&&a.s&&a.s!==1){const p=f.attributes.uv.array,v=Array.isArray(a.s)?a.s[0]:a.s,g=Array.isArray(a.s)?a.s[1]:a.s;for(let m=0;m<p.length;m+=2)p[m]/=v,p[m+1]/=g}f.applyMatrix4(d.matrix),a.mode==="world"&&I0(f,a.s,a.rot),o.vertexColors?f.attributes.color||sb(f,d.color||"#ffffff"):f.attributes.color&&f.deleteAttribute("color"),l.push(f)}const c=Jl(l,!1);if(l.forEach(d=>d.dispose()),!c){console.warn("[tour] merge failed",o.name);continue}c.computeBoundingSphere();const h=new Xt(c,o),u=o.name;h.castShadow=!eb.has(u)&&s.some(d=>d.cast!==!1),h.receiveShadow=!nb.has(u),h.renderOrder=ib[u]||0,h.matrixAutoUpdate=!1,h.name=u+"@"+r,n+=c.attributes.position.count/3,(e[r]||(e[r]=new se)).add(h)}for(const s of this.cache.values())s.dispose();this.cache.clear(),this.items=[];for(const[s,o]of Object.entries(e))o.name=s;return{layers:e,tris:n}}}function ob(i,t,e){const n=Math.PI*2,s=o=>(o%n+n)%n;return i=s(i),t=s(t),e=s(e),t<=e?i>=t&&i<=e:i>=t||i<=e}const Y={white:"#f3efe8",cream:"#e9e0cf",sand:"#d5c2a2",oat:"#cbbda4",stone:"#bdb6ab",charcoal:"#4a4744",terracotta:"#b8694a",rust:"#a4553a",ochre:"#c8964a",sage:"#8f9c7e",olive:"#6f7550",teal:"#3f6f70",navy:"#2f3d4f",lavender:"#a9a0b8",blush:"#d9b4a2"},So=new Map,ua={k:1};function dd(i){ua.k=i==="high"?1:i==="mid"?.7:.5,fd()}const Ui=(i,t=4)=>Math.max(t,Math.round(i*ua.k)),wn=(i,t)=>(So.has(i)||So.set(i,t()),So.get(i));function fd(){for(const i of So.values())i.dispose();So.clear()}function Ql(i,t,e,n=.28,s=.25,o=18,r=10){return wn(`cu${i}|${t}|${e}|${n}|${s}`,()=>{const a=new He(1,Ui(o,8),Ui(r,6)),l=a.attributes.position,c=(h,u)=>Math.sign(h)*Math.pow(Math.abs(h),u);for(let h=0;h<l.count;h++){let u=l.getX(h),d=l.getY(h),f=l.getZ(h);const p=c(u,n),v=c(f,n),g=c(d,n*1.6),m=Math.pow(Math.max(Math.abs(p),Math.abs(v)),4);l.setXYZ(h,p*i/2,g*t/2*(1-s*m),v*e/2)}return a.computeVertexNormals(),a})}function tc(i,t,e,n=1,s=1,o=!0){return wn(`dr${i}|${t}|${e}|${n}|${s}`,()=>{const r=i+e*2,a=t+e,l=new Me(r,a,Ui(28,12),Ui(30,12));l.rotateX(-Math.PI/2);const c=l.attributes.position,h=.06,u=h*Math.PI/2,d=v=>{if(v<=0)return[0,0];if(v<u){const g=v/h;return[h*Math.sin(g),h*(1-Math.cos(g))]}return[h+(v-u)*.08,h+(v-u)]},f=Ie(n),p=[f()*6,f()*6,f()*6];for(let v=0;v<c.count;v++){const g=c.getX(v),m=c.getZ(v)+a/2,b=Math.max(0,Math.abs(g)-i/2),y=Math.max(0,m-t),[x,T]=d(b),[M,A]=d(y),S=b>0?Math.sign(g)*(i/2+x):g,_=y>0?t+M:m;let w=-Math.max(T,A);const E=b===0&&y===0?1:Math.max(0,1-Math.max(b,y)/.15);w+=s*(.012*Math.sin(g*7+p[0])*Math.sin(m*5+p[1])+.008*Math.sin(g*13+m*9+p[2]))*E,w+=s*.006*Math.sin(m*3+g)*(1-E),o&&m<.45&&(w+=.025*Math.sin(m/.45*Math.PI)*E),c.setXYZ(v,S,w,_)}return l.computeVertexNormals(),l})}function Uc(i,t,e,n=3,s=.05){return wn(`sl${i}|${t}|${e}|${n}`,()=>{const o=Ie(n),r=[o()*9,o()*9,o()*9,o()*9],a=new Xs,l=Ui(40,16);for(let h=0;h<=l;h++){const u=h/l,d=-i/2+i*u,f=-t/2+s*(Math.sin(u*7+r[0])*.6+Math.sin(u*17+r[1])*.3)*Math.sin(u*Math.PI);h?a.lineTo(d,f):a.moveTo(d,f)}for(let h=0;h<=l;h++){const u=1-h/l,d=-i/2+i*u,f=t/2+s*(Math.sin(u*6+r[2])*.6+Math.sin(u*15+r[3])*.3)*Math.sin(u*Math.PI);a.lineTo(d,f)}const c=new os(a,{depth:e,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:ua.k<1?1:2,curveSegments:4});return c.rotateX(-Math.PI/2),c})}function rb(i,t,e=5,n=.04){return wn(`rs${i}|${t}|${e}`,()=>{const s=Ie(e),o=[s()*9,s()*9],r=new Xs,a=Ui(56,24);for(let c=0;c<=a;c++){const h=c/a*Math.PI*2,u=i*(1+n*Math.sin(h*3+o[0])+n*.5*Math.sin(h*7+o[1])),d=Math.cos(h)*u*1.08,f=Math.sin(h)*u*.94;c?r.lineTo(d,f):r.moveTo(d,f)}const l=new os(r,{depth:t,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2,curveSegments:4});return l.rotateX(-Math.PI/2),l})}function ao(i,t,e,n=.2,s=0,o=5){return wn(`lf${i}|${t}|${e}|${n}|${s}|${o}`,()=>{const r=new Me(t,e,o>2?2:1,o);r.translate(0,e/2,0);const a=r.attributes.position,l=r.attributes.uv,c=i%2*.5,h=i<2?.5:0;for(let u=0;u<a.count;u++){const d=a.getX(u),f=a.getY(u),p=f/e;a.setZ(u,n*e*p*p+s*d*p),l.setXY(u,c+l.getX(u)*.5,h+l.getY(u)*.5)}return r.computeVertexNormals(),r})}class vi{constructor(t){this.B=t,this.g=new se,this.lights=[]}m(t,e,n=0,s=0,o=0,r=0,a=0,l=0,c={}){const h=new Xt(t,this.B.mat(e));return h.position.set(n,s,o),h.rotation.set(r,a,l,"YXZ"),c.s&&h.scale.set(...c.s),c.color&&(h.userData.color=new ut(c.color)),c.cast===!1&&(h.userData.cast=!1),c.layer&&(h.userData.layer=c.layer),(c.parent||this.g).add(h),h}box(t,e,n,s,o,r,a,l={}){return this.m(this.B.boxGeo(t,e,n),s,o,r+e/2,a,l.rx||0,l.ry||0,l.rz||0,l)}rbox(t,e,n,s,o,r,a,l,c={}){return this.m(this.B.rboxGeo(t,e,n,s,c.seg||(ua.k<1?2:3)),o,r,a+e/2,l,c.rx||0,c.ry||0,c.rz||0,c)}cyl(t,e,n,s,o,r,a,l={}){return this.m(this.B.cylGeo(t,e,n,Ui(l.seg||16,6),!!l.open),s,o,r+n/2,a,l.rx||0,l.ry||0,l.rz||0,l)}cushion(t,e,n,s,o,r,a,l={}){return this.m(Ql(t,e,n,l.e??.28,l.puff??.25),"fabric",s,o+e/2,r,l.rx||0,l.ry||0,l.rz||0,{...l,color:a})}lathe(t,e,n,s,o,r={}){const a=Ui(r.seg||24,8),l="la"+t.map(h=>h.join(",")).join(";")+a,c=wn(l,()=>new sa(t.map(([h,u])=>new ht(h,u)),a));return this.m(c,e,n,s,o,0,r.ry||0,0,r)}light(t,e,n,s={}){this.lights.push({x:t,y:e,z:n,...s})}}const zt={};zt.sofa=(i,t={})=>{const e=t.w??2.4,n=t.d??.98,s=t.color??Y.white,o=t.seats??3,r=t.arm??.2,a=.2;if(t.legs){for(const u of[-1,1])for(const d of[-1,1])i.box(.05,.1,.05,t.legMat||"walnut",u*(e/2-.12),0,d*(n/2-.1));i.rbox(e,a,n,.03,"fabric",0,.1,0,{color:s})}else i.box(e-.1,.06,n-.1,"blackMatte",0,0,0),i.rbox(e,a,n,.03,"fabric",0,.05,0,{color:s});const l=t.legs?.1+a:.05+a;for(const u of[-1,1])i.rbox(r,.62-(t.legs?.1:.05),n,.07,"fabric",u*(e/2-r/2),l-.02,0,{color:s});i.rbox(e-r*2+.02,.42,.2,.08,"fabric",0,l-.02,-n/2+.1,{color:s});const c=(e-r*2)/o;for(let u=0;u<o;u++){const d=-e/2+r+c*(u+.5);i.cushion(c-.015,.2,n-.24,d,l-.03,.08,s,{e:.22,puff:.2}),i.cushion(c-.03,.5,.2,d,l+.1,-n/2+.28,s,{e:.3,puff:.35,rx:-.2})}return(t.pillows??[Y.sand,Y.terracotta]).forEach((u,d)=>{const f=d%2?1:-1,p=Math.floor(d/2);i.cushion(.46,.44,.16,f*(e/2-r-.26-p*.3),l+.13,-n/2+.44+p*.05,u,{e:.35,puff:.5,rx:-.3,ry:f*.25-f*p*.3})}),t.throw&&i.m(tc(.5,.55,.12,5,.6,!1),"fabric",e/2-r/2-.25,l+.62-(t.legs?.1:.05)-.02,-.2,0,Math.PI/2,0,{color:t.throw}),{fp:[e,n]}};zt.sectional=(i,t={})=>{const e=t.w??3.2,n=t.w2??2.4,s=t.d??1;t.color??Y.white;const o=new vi(i.B);zt.sofa(o,{...t,w:e,d:s,seats:3,pillows:t.pillows??[Y.sand,Y.stone]}),i.g.add(o.g);const r=new vi(i.B);return zt.sofa(r,{...t,w:n,d:s,seats:2,pillows:[Y.terracotta]}),r.g.rotation.y=-Math.PI/2,r.g.position.set(e/2-s/2,0,n/2-s/2+0),i.g.add(r.g),{fp:[e,s],extra:[[e/2-s/2,n/2,s,n]]}};zt.armchair=(i,t={})=>{const e=t.mat||"rattan",n=t.color??Y.white,s=t.w??.82,o=t.d??.82;for(const r of[-1,1])for(const a of[-1,1])i.box(.04,.2,.04,"walnut",r*(s/2-.08),0,a*(o/2-.08),{rz:r*.08});i.rbox(s,.22,o,.06,e,0,.18,0);for(const r of[-1,1])i.rbox(.12,.3,o-.02,.05,e,r*(s/2-.06),.38,0);return i.rbox(s,.46,.12,.05,e,0,.38,-o/2+.06,{rx:-.12}),i.cushion(s-.26,.14,o-.2,0,.38,.04,n,{e:.22}),i.cushion(s-.3,.34,.14,0,.5,-o/2+.2,n,{rx:-.2,puff:.35}),t.pillow&&i.cushion(.36,.3,.12,0,.56,-o/2+.3,t.pillow,{rx:-.25,puff:.5}),{fp:[s,o]}};zt.lounge=(i,t={})=>{const s=t.color??Y.cream;i.rbox(.86,.3,.95,.12,t.mat||"rattan",0,.02,0,{seg:4}),i.rbox(.86,.55,.16,.08,t.mat||"rattan",0,.2,-.95/2+.12,{rx:-.35});for(const o of[-1,1])i.rbox(.14,.2,.95-.1,.06,t.mat||"rattan",o*(.86/2-.07),.28,.02);return i.cushion(.86-.3,.14,.95-.25,0,.3,.06,s,{e:.22}),i.cushion(.86-.34,.42,.14,0,.36,-.95/2+.28,s,{rx:-.42,puff:.35}),t.pillow&&i.cushion(.38,.3,.12,.05,.44,-.95/2+.38,t.pillow,{rx:-.45,ry:.2,puff:.5}),{fp:[.86,.95]}};zt.coffeeRound=(i,t={})=>{const e=t.r??.55;if(i.m(rb(e,.08,t.seed||5),"liveEdge",0,.3,0),t.base==="drum")i.cyl(e*.55,e*.6,.3,t.baseMat||"walnut",0,0,0,{seg:24});else for(let n=0;n<3;n++){const s=n/3*Math.PI*2;i.box(.04,.3,.04,"steel",Math.cos(s)*e*.55,0,Math.sin(s)*e*.55)}return me.bookStack(i,.12,.38,.08,.3),me.bowl(i,-.18,.38,-.1,.13,"#2d2a27"),me.vase(i,.08,.38,-.2,.18,"#d8cdb8"),{fp:[e*2.1,e*1.9]}};zt.coffeeRect=(i,t={})=>{const e=t.w??1.3,n=t.d??.7,s=t.mat||"concreteDark";if(t.slab?i.m(Uc(e,n,.08,t.seed||7,.05),"liveEdge",0,.3,0):i.rbox(e,.34,n,.03,s,0,.04,0),t.slab)for(const o of[-1,1])i.box(.05,.3,n*.8,"steel",o*(e/2-.15),0,0);else i.box(e-.1,.04,n-.1,"blackMatte",0,0,0);return me.bookStack(i,-e*.25,.38,.05,.2),me.vase(i,e*.2,.38,-.05,.22,"#f0ebe2"),me.bowl(i,e*.05,.38,.1,.12,"#8a6a4a"),{fp:[e,n]}};zt.sideTable=(i,t={})=>(i.cyl(.22,.22,.03,t.top||"walnut",0,.5,0,{seg:20}),i.cyl(.03,.03,.5,"steel",0,0,0),i.cyl(.16,.16,.02,"steel",0,0,0),t.lamp?zt._tableLamp(i,0,.53,0,t.lamp):me.vase(i,0,.53,0,.2,"#e3dccd"),{fp:[.45,.45]});zt._tableLamp=(i,t,e,n,s={})=>{i.lathe([[0,0],[.08,0],[.1,.05],[.09,.18],[.04,.3],[.015,.34],[0,.34]],"gloss",t,e,n,{color:s.color||"#cbb89a"}),i.lathe([[.1,0],[.2,.22],[.195,.23],[.095,.01]],"shade",t,e+.3,n,{cast:!1}),i.light(t,e+.42,n,{color:"#ffc27a",intensity:s.intensity??3,distance:5,kind:"lamp",prio:s.prio??1})};zt.floorLamp=(i,t={})=>(i.cyl(.16,.18,.03,"steel",0,0,0,{seg:20}),i.cyl(.012,.012,1.45,"steel",0,.03,0),i.lathe([[.16,0],[.24,.3],[.235,.31],[.155,.01]],"shade",0,1.35,0,{cast:!1}),i.light(0,1.45,0,{color:"#ffc27a",intensity:t.intensity??5,distance:6,kind:"lamp",prio:t.prio??1}),{fp:[.36,.36],blob:[.4,.4]});zt.rugRound=(i,t={})=>{const e=t.r??1.4,n=wn("rug"+e,()=>{const o=new Zn(e,64);return o.rotateX(-Math.PI/2),o});i.m(n,t.mat||"jute",0,.012,0,0,0,0,{cast:!1});const s=wn("rugE"+e,()=>new ze(e,e,.012,64,1,!0));return i.m(s,t.mat||"jute",0,.006,0,0,0,0,{cast:!1}),{fp:null,blob:!1}};zt.rugRect=(i,t={})=>{const e=t.w??2.6,n=t.d??1.8;return i.rbox(e,.014,n,.005,t.mat||"rugWool",0,0,0,{cast:!1}),{fp:null,blob:!1}};zt.diningTable=(i,t={})=>{const e=t.len??3,n=t.wid??1,s=.76;i.m(Uc(e,n,.075,t.seed||3,.06),"liveEdge",0,s-.075,0);const o=t.legMat||"steel";for(const c of[-1,1]){const h=c*(e/2-.3);i.box(.06,s-.1,.06,o,h,0,-n/2+.15),i.box(.06,s-.1,.06,o,h,0,n/2-.15),i.box(.06,.06,n-.24,o,h,s-.14,0),i.box(.06,.04,n-.24,o,h,0,0)}i.box(e-.66,.05,.05,o,0,s-.13,0);const r=t.chairs??8,a=Math.floor(r/2),l=Math.min(.72,(e-.4)/a);for(let c=0;c<a;c++){const h=-((a-1)*l)/2+c*l;for(const u of[-1,1]){const d=new vi(i.B);zt.chair(d,t.chair||{}),d.g.position.set(h,0,u*(n/2+.22)),d.g.rotation.y=u>0?Math.PI:0,i.g.add(d.g)}}if(r%2===0&&t.ends)for(const c of[-1,1]){const h=new vi(i.B);zt.chair(h,t.chair||{}),h.g.position.set(c*(e/2+.25),0,0),h.g.rotation.y=c>0?-Math.PI/2:Math.PI/2,i.g.add(h.g)}me.bowl(i,0,s,0,.22,"#3b2c22",.1);for(let c=0;c<3;c++)me.candle(i,-.5+c*.5+0,s,.12*(c%2?-1:1),.18+c*.05);return me.vase(i,.75,s,-.05,.3,"#e7e1d6"),{fp:[e+(t.ends?1:.3),n+.9]}};zt.chair=(i,t={})=>{const e=t.seat||"rattan",n=t.frame||"teak";for(const s of[-1,1])for(const o of[-1,1])i.box(.035,.45,.035,n,s*.2,0,o*.19,{rz:s*.03});i.rbox(.46,.05,.44,.015,n,0,.43,.01),i.rbox(.42,.03,.4,.012,e,0,.475,.01);for(const s of[-1,1])i.box(.03,.42,.03,n,s*.2,.46,-.21,{rx:-.1});return i.rbox(.44,.24,.025,.01,e,0,.62,-.225,{rx:-.12}),i.box(.44,.04,.03,n,0,.86,-.25,{rx:-.12}),{fp:[.5,.5]}};zt.stool=(i,t={})=>{const e=t.h??.72;i.cyl(.19,.19,.05,t.seat||"teak",0,e-.05,0,{seg:20});for(let n=0;n<4;n++){const s=n/4*Math.PI*2+.78;i.box(.025,e-.05,.025,"steel",Math.cos(s)*.14,0,Math.sin(s)*.14)}return i.m(i.B.cylGeo(.15,.15,.015,20,!0),"steel",0,.26,0),{fp:[.4,.4]}};zt.kitchen=(i,t={})=>{const e=t.len??4.2,n=.64,s=.9,o=t.front||"teakSlat",r=t.top||"counter";i.box(e,.1,n-.08,"blackMatte",0,0,-.04),i.box(e,s-.14,n-.04,o,0,.1,0);const a=Math.round(e/.6);for(let h=1;h<a;h++)i.box(.006,s-.16,.01,"blackMatte",-e/2+e*h/a,.11,n/2-.015,{cast:!1});i.box(e+.02,.045,n+.02,r,0,s-.045,.01);const l=t.sink??-e*.18;i.box(.62,.012,.4,"chrome",l,s-.004,.02,{cast:!1}),i.box(.56,.01,.34,"steelGrey",l,s-.002,.02,{cast:!1}),i.cyl(.018,.022,.3,"chrome",l,s,-.2),i.box(.02,.02,.2,"chrome",l,s+.29,-.11);const c=t.cook??e*.22;i.box(.75,.008,.5,"blackMatte",c,s,.02,{cast:!1});for(const[h,u]of[[-.18,-.1],[.18,-.1],[-.18,.12],[.18,.12]])i.m(i.B.cylGeo(.09,.09,.004,20),"steelGrey",c+h,s+.009,.02+u,0,0,0,{cast:!1});if(me.board(i,l+.7,s,-.05),me.jar(i,-e/2+.25,s,-.18,.2),me.jar(i,-e/2+.42,s,-.2,.14),me.bowl(i,c-.9,s,0,.18,"#e8e2d6",.07),t.shelves!==!1)for(const[h,u,d]of[[1.45,-e/2+.2,-.3],[1.85,-e/2+.2,-.3]])i.box(d-u,.04,.26,"walnut",(u+d)/2,h,-n/2+.13),me.shelfItems(i,u+.05,d-.05,h+.04,-n/2+.13,h*13|0);if(t.fridge!==!1){const h=e/2+.4;i.rbox(.78,2,n,.01,t.fridgeMat||"chrome",h,0,0),i.box(.01,1.9,.01,"blackMatte",h,.05,n/2+.002,{cast:!1}),i.box(.02,.7,.03,"steel",h-.05,1,n/2+.02),i.box(.02,.7,.03,"steel",h+.05,1,n/2+.02)}return{fp:[e+(t.fridge!==!1?.8:0),n],cx:t.fridge!==!1?.4:0,blob:!1}};zt.island=(i,t={})=>{const e=t.len??2.4,n=t.d??.95,s=.92;i.box(e-.1,s-.05,n-.3,t.body||"teakSlat",0,0,-.12),i.box(e+.05,.05,n,t.top||"counter",0,s-.05,0),me.bowl(i,.3,s,0,.2,"#c9b28a",.08),me.vase(i,-.5,s,-.1,.35,"#efe9e0");for(let o=0;o<(t.stools??3);o++){const r=new vi(i.B);zt.stool(r),r.g.position.set(-e/2+.45+o*(e-.9)/Math.max(1,(t.stools??3)-1),0,n/2+.25),i.g.add(r.g)}return{fp:[e,n+.5]}};zt.pendant=(i,t={})=>{const e=t.top??3,n=t.drop??1.9,s=t.type||"dome";if(i.cyl(.004,.004,e-n,"blackMatte",0,n,0,{cast:!1,seg:4}),s==="dome")i.lathe([[.02,.2],[.05,.19],[.1,.14],[.17,.05],[.2,0],[.195,-.005],[.165,.045],[.095,.13],[.045,.18],[.02,.19]],"steel",0,n-.2,0,{seg:28}),i.m(i.B.geo("bulb",()=>new He(.06,12,8)),"bulb",0,n-.12,0,0,0,0,{cast:!1});else if(s==="rattan"){const o=t.r??.28;i.lathe([[.03,.5*o],[.12*o/.28,.46*o],[.55*o,.25*o],[.85*o,-.05*o],[o,-.32*o],[1.02*o,-.36*o]],"rattanLamp",0,n-.1,0,{seg:26,cast:!1}),i.m(i.B.geo("bulb",()=>new He(.06,12,8)),"bulb",0,n-.12,0,0,0,0,{cast:!1})}else if(s==="capiz"){const o=t.r??.3;for(let r=0;r<4;r++)i.m(i.B.cylGeo(o*(1-r*.12),o*(1-r*.12),.12,24,!0),"capiz",0,n-.1-r*.13,0,0,0,0,{cast:!1})}else s==="globe"&&i.m(i.B.geo("globe",()=>new He(.16,20,14)),"shade",0,n-.16,0,0,0,0,{cast:!1});return i.light(0,n-.25,0,{color:"#ffbf73",intensity:t.intensity??6,distance:t.distance??7,kind:"lamp",prio:t.prio??2}),{fp:null,blob:!1}};zt.wallLamp=(i,t={})=>(i.box(.08,.12,.03,"steel",0,-.06,.015),i.box(.015,.015,.22,"steel",0,0,.12),i.lathe([[.02,.13],[.08,.02],[.085,0],[.078,0],[.074,.02],[.015,.12]],"steel",0,-.13,.24,{seg:20}),i.m(i.B.geo("bulbS",()=>new He(.035,10,6)),"bulb",0,-.1,.24,0,0,0,{cast:!1}),t.light!==!1&&i.light(0,-.15,.4,{color:"#ffbe70",intensity:t.intensity??1.6,distance:4,kind:"lamp",prio:t.prio??.5}),{fp:null,blob:!1});zt.fanHousing=(i,t={})=>{const e=t.top??3,n=t.drop??.5;return i.cyl(.012,.012,n,"steel",0,e-n,0,{seg:6}),i.cyl(.09,.11,.12,"steel",0,e-n-.1,0,{seg:20}),{fp:null,blob:!1,fan:{y:e-n-.06}}};zt.bed=(i,t={})=>{const e=t.w??1.95,n=t.l??2.12,s=t.base||"walnut",o=t.low?.18:.3;i.rbox(e+.12,o,n+.08,.02,s,0,.02,0),i.box(e,.02,n,"blackMatte",0,0,0),t.top&&i.rbox(e+.3,.05,n+.26,.015,t.top,0,o+.02-.05,.05),t.headboard&&i.rbox(e+.3,t.hbH??1,.09,.02,t.headboard,0,.02,-n/2-.02);const r=o+.02;i.rbox(e-.04,.24,n-.06,.06,"fabric",0,r,0,{color:Y.white,seg:3});const a=r+.25;i.m(tc(e-.02,n-.5,.26,t.seed||3,1),"fabric",0,a,-n/2+.5,0,0,0,{color:t.duvet||Y.white}),i.cushion(e+.02,.07,.3,0,a-.02,-n/2+.66,Y.white,{e:.2,puff:.1}),i.m(tc(e+.04,.55,.3,(t.seed||3)+5,.5,!1),"fabric",0,a+.03,n/2-.62,0,0,0,{color:t.throw||Y.sand});const l=e/2-.05;for(const c of[-1,1])i.cushion(l*.98,.5,.18,c*l/2,a-.04,-n/2+.2,Y.white,{rx:-.32,puff:.35,e:.3}),i.cushion(l*.92,.46,.17,c*l/2,a-.02,-n/2+.36,t.pillow2||Y.cream,{rx:-.3,puff:.4,e:.3}),i.cushion(.46,.34,.14,c*.3,a,-n/2+.52,t.accent||Y.terracotta,{rx:-.28,ry:c*.15,puff:.5,e:.32});if(t.bolster&&i.m(i.B.geo("bolster",()=>{const c=new oa(.1,.8,6,14);return c.rotateZ(Math.PI/2),c}),"fabric",0,a+.1,-n/2+.66,0,0,0,{color:t.bolster}),t.nightstands!==!1)for(const c of[-1,1]){const h=c*(e/2+.42);i.rbox(.5,.45,.42,.015,t.nsMat||"walnut",h,0,-n/2+.25),me.bookStack(i,h-.1,.45,-n/2+.25,.15),me.vase(i,h+.12,.45,-n/2+.2,.16,"#d9d1c1"),t.tableLamps&&zt._tableLamp(i,h+.08,.45,-n/2+.22,{prio:1})}return{fp:[e+.15,n+.08],blob:[e+1.5,n+.4]}};zt.headboard=(i,t={})=>{const e=t.w??3.2,n=t.h??1.35,s=t.y0??.2,o=Math.round(n/.22);for(let r=0;r<o;r++){const a=n/o;i.m(Uc(e-r%2*.1,a+.03,.05,11+r,.03),t.mat||"liveEdge",r%2*.05-.025,s+r*a+a/2,.03,Math.PI/2,0,0)}if(t.lamps!==!1)for(const r of[-1,1]){const a=new vi(i.B);zt.wallLamp(a,{prio:.8}),a.g.position.set(r*(t.lampX??1.25),s+n+.12,.05),i.g.add(a.g),i.lights.push(...a.lights.map(l=>({...l,x:l.x+r*(t.lampX??1.25),y:l.y+s+n+.12,z:l.z+.05})))}return{fp:null,blob:!1}};zt.dresser=(i,t={})=>{const e=t.w??1.6;i.rbox(e,.75,.48,.015,t.mat||"walnut",0,.1,0);for(const n of[-1,1])i.box(.04,.1,.04,"steel",n*(e/2-.08),0,0);for(let n=1;n<3;n++)i.box(.005,.7,.01,"blackMatte",-e/2+e*n/3,.12,.24,{cast:!1});return me.bookStack(i,-e/2+.3,.85,0,.12),me.vase(i,e/2-.25,.85,.02,.35,"#e9e3d8"),me.bowl(i,.1,.85,.05,.14,"#6b4d33",.05),{fp:[e,.5]}};zt.art=(i,t={})=>{const e=t.w??1,n=t.h??1.2;i.box(e+.06,n+.06,.035,t.frame||"walnut",0,-.03,.0175);const s=i.B.geo("artq",()=>new Me(1,1));return i.m(s,t.mat||"art1",0,n/2,.037,0,0,0,{s:[e,n,1],cast:!1}),{fp:null,blob:!1}};zt.mirrorRound=(i,t={})=>{const e=t.r??.4;return i.m(i.B.cylGeo(e+.03,e+.03,.03,40),t.frame||"brass",0,0,.015,Math.PI/2,0,0),i.m(i.B.cylGeo(e,e,.034,40),"mirror",0,0,.018,Math.PI/2,0,0,{cast:!1}),{fp:null,blob:!1}};zt.sunburst=(i,t={})=>{const e=t.r??.3,n=t.R??.62,s=28;i.m(i.B.cylGeo(e,e,.03,36),"mirrorSoft",0,0,.02,Math.PI/2,0,0,{cast:!1}),i.m(i.B.geo("sbRing"+e,()=>new Ii(e+.02,.025,6,36)),"rattan",0,0,.02);for(let o=0;o<s;o++){const r=o/s*Math.PI*2,a=(n-e)*(o%2?.8:1);i.m(i.B.cylGeo(.008,.012,a,5),"rattanDark",Math.cos(r)*(e+a/2+.02),Math.sin(r)*(e+a/2+.02),.02,0,0,r-Math.PI/2,{cast:!1})}return{fp:null,blob:!1}};zt.surfboard=(i,t={})=>{const e=t.L??2.1,n=t.W??.55,s=wn("surf"+e,()=>{const o=new Xs,r=30;for(let h=0;h<=r;h++){const u=h/r,d=u*Math.PI,f=-Math.cos(d)*e/2,p=Math.pow(Math.sin(d),.7)*n/2*(u<.5?.85+.15*Math.sin(d):1);h?o.lineTo(f,p):o.moveTo(f,p)}for(let h=1;h<r;h++){const u=1-h/r,d=u*Math.PI,f=-Math.cos(d)*e/2,p=-Math.pow(Math.sin(d),.7)*n/2*(u<.5?.85+.15*Math.sin(d):1);o.lineTo(f,p)}const a=new os(o,{depth:.035,bevelEnabled:!0,bevelThickness:.015,bevelSize:.02,bevelSegments:3,curveSegments:6}),l=a.attributes.position,c=a.attributes.uv;for(let h=0;h<l.count;h++)c.setXY(h,l.getX(h)/e+.5,l.getY(h)/n+.5);return a});return i.m(s,"surf",0,0,.03,0,0,Math.PI/2+(t.tilt||0)),{fp:null,blob:!1}};zt.plant=(i,t={})=>{const e=t.type||"monstera",n=t.s??1,s=Ie(t.seed||7),o=(t.potH??.45)*n,r=(t.potR??.24)*n;if(t.pot!==!1){const l=t.potMat||"concreteDark";t.basket?i.lathe([[0,0],[r*.85,0],[r,o*.2],[r*1.05,o],[r*.98,o],[r*.9,o*.25],[0,o*.2]],"rattan",0,0,0,{seg:20}):i.lathe([[0,0],[r*.72,0],[r*.8,.02],[r,o*.75],[r*.96,o],[r*.88,o],[0,o*.92]],l,0,0,0,{seg:22}),i.m(i.B.cylGeo(r*.9,r*.9,.02,16),"props",0,o-.05,0,0,0,0,{color:"#3a2a1c"})}const a=t.pot===!1?0:o-.04;if(e==="monstera"){const l=t.n??9;for(let c=0;c<l;c++){const h=c/l*Math.PI*2+s()*.5,u=(.4+s()*.6)*n,d=.5+s()*.6,f=Math.cos(h)*.35*n*d,p=Math.sin(h)*.35*n*d;i.m(i.B.cylGeo(.008,.01,u,4),"props",f*.5,a+u/2,p*.5,.45*d,-h+Math.PI/2,0,{color:"#4e6a2c",cast:!1});const v=(.42+s()*.25)*n;i.m(ao(0,v,v,.22),"foliage",f,a+u-.05,p,.75+s()*.5,-h+Math.PI/2+(s()-.5)*.6,0)}}else if(e==="palm"){const l=t.n??8;for(let c=0;c<l;c++){const h=c/l*Math.PI*2+s()*.4,u=(.9+s()*.6)*n;i.m(ao(1,u*.6,u,.3),"foliage",0,a+.05,0,.45+s()*.6,h,0)}for(let c=0;c<3;c++)i.m(i.B.cylGeo(.015,.02,.7*n,5),"props",(s()-.5)*.1,a+.35*n,(s()-.5)*.1,(s()-.5)*.3,0,(s()-.5)*.3,{color:"#6d6a3a",cast:!1})}else if(e==="banana"||e==="bird"){const l=t.n??6;for(let c=0;c<l;c++){const h=c/l*Math.PI*2+s(),u=(1+s()*.7)*n;i.m(ao(2,u*.38,u,.18,.1),"foliage",0,a,0,.15+s()*.4,h,0)}}else if(e==="shrub"||e==="fern"){const l=t.n??7;for(let c=0;c<l;c++){const h=c/l*Math.PI*2+s(),u=(.6+s()*.4)*n;i.m(ao(3,u,u,.1),"foliage",Math.cos(h)*.1*n,a-.02,Math.sin(h)*.1*n,.4+s()*.6,h,0)}}else if(e==="fiddle"){i.m(i.B.cylGeo(.02,.03,1.2*n,5),"props",0,a+.6*n,0,0,0,0,{color:"#6a5540"});for(let l=0;l<16;l++){const c=l*2.4,h=a+(.4+l/16*1.1)*n;i.m(ao(3,.45*n,.45*n,.1),"foliage",Math.cos(c)*.08,h,Math.sin(c)*.08,.7+s()*.4,c,0)}}return{fp:[r*2+.1,r*2+.1],blob:[r*3,r*3]}};zt.lounger=(i,t={})=>{const s=t.frame||"teak";for(const a of[-1,1])i.box(.05,.3,2,s,a*(.72/2-.03),.05,0);for(const a of[-1,1])for(const l of[-1,1])i.box(.06,.1,.06,s,l*(.72/2-.03),0,a*(2/2-.08));i.box(.72,.04,2*.66,s,0,.3,2/2-2*.33);const o=t.color??Y.white;if(i.rbox(.72-.06,.08,2*.64,.03,"fabric",0,.34,2/2-2*.33,{color:o}),t.stripe)for(let a=0;a<5;a++)i.box(.72-.05,.081,.08,"fabric",0,.34,2/2-.2-a*.28,{color:t.stripe,cast:!1});const r=new se;if(i.rbox(.72,.06,2*.36,.02,s,0,0,-2*.18,{parent:r}),i.rbox(.72-.06,.07,2*.34,.03,"fabric",0,.05,-2*.18,{parent:r,color:o}),t.stripe)for(let a=0;a<2;a++)i.box(.72-.05,.072,.08,"fabric",0,.05,-.2-a*.28,{parent:r,color:t.stripe,cast:!1});return i.cushion(.45,.14,.24,0,.1,-2*.3,t.pillow||Y.sand,{parent:r,puff:.4}),r.position.set(0,.34,2/2-2*.66),r.rotation.x=.8,i.g.add(r),t.towel&&i.rbox(.5,.03,.3,.01,"fabric",.05,.42,.4,{color:t.towel}),{fp:[.72,2]}};zt.daybed=(i,t={})=>{const e=t.w??2,n=t.d??1.2;i.rbox(e,.35,n,.03,t.frame||"teak",0,0,0),i.cushion(e-.1,.16,n-.08,0,.33,0,Y.white,{e:.2,puff:.1});for(let s=0;s<4;s++)i.cushion(.5,.42,.16,-e/2+.35+s*.44,.46,-n/2+.2,[Y.sand,Y.white,Y.terracotta,Y.cream][s],{rx:-.3,puff:.5});return{fp:[e,n]}};zt.umbrella=(i,t={})=>(i.cyl(.025,.025,2.4,"teak",0,0,0),i.cyl(.25,.28,.08,"concreteDark",0,0,0,{seg:16}),i.m(i.B.geo("umb",()=>new ra(1.4,.45,8,1,!0)),"fabric",0,2.25,0,0,0,0,{color:t.color||Y.cream}),{fp:[.35,.35]});zt.bathtub=(i,t={})=>{const e=t.L??1.7,n=t.W??.78,s=.56,o=wn("tub"+e+n,()=>{const r=new Xs,a=(h,u,d,f)=>{h.moveTo(-d/2+f,-u/2),h.lineTo(d/2-f,-u/2),h.quadraticCurveTo(d/2,-u/2,d/2,-u/2+f),h.lineTo(d/2,u/2-f),h.quadraticCurveTo(d/2,u/2,d/2-f,u/2),h.lineTo(-d/2+f,u/2),h.quadraticCurveTo(-d/2,u/2,-d/2,u/2-f),h.lineTo(-d/2,-u/2+f),h.quadraticCurveTo(-d/2,-u/2,-d/2+f,-u/2)};a(r,n,e,.36);const l=new Ro;a(l,n-.12,e-.12,.3),r.holes.push(l);const c=new os(r,{depth:s,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,curveSegments:10});return c.rotateX(-Math.PI/2),c});return i.m(o,"ceramic",0,0,0),i.rbox(e-.14,.02,n-.14,.01,"ceramic",0,.12,0),i.cyl(.015,.015,.9,"chrome",e/2+.12,0,0),i.box(.2,.02,.02,"chrome",e/2+.03,.88,0),i.rbox(.5,.05,.28,.02,"fabric",-e/2+.4,s+.02,0,{color:Y.white,ry:.1}),{fp:[e+.2,n]}};zt.vanity=(i,t={})=>{const e=t.w??1.4,n=t.top||"counter",s=t.body||"teakSlat";i.box(e,.35,.5,s,0,.5,0),i.box(e+.02,.04,.52,n,0,.85,0);const o=t.sinks??(e>1.2?2:1);for(let r=0;r<o;r++){const a=o===1?0:(r-.5)*e*.5;i.lathe([[0,0],[.12,0],[.19,.04],[.21,.12],[.2,.125],[.18,.05],[.1,.012],[0,.012]],"ceramic",a,.89,.02,{seg:28}),i.box(.02,.02,.18,"chrome",a,1.12,-.14),i.box(.05,.05,.02,"chrome",a,1.1,-.24);const l=new vi(i.B);zt.mirrorRound(l,{r:.34,frame:t.mirrorFrame||"teak"}),l.g.position.set(a,1.62,-.25),i.g.add(l.g)}return me.jar(i,e/2-.12,.89,-.12,.12),i.rbox(.3,.1,.2,.03,"fabric",-e/2+.2,.89,-.1,{color:Y.white}),{fp:[e,.5],blob:!1}};zt.toilet=i=>(i.rbox(.38,.4,.55,.12,"ceramic",0,.02,.05),i.rbox(.42,.05,.56,.1,"ceramic",0,.4,.06),i.rbox(.4,.1,.18,.03,"ceramic",0,.8,-.25),{fp:[.42,.65]});zt.shower=(i,t={})=>{const e=t.w??1.2,n=t.d??1;if(i.box(e,.03,n,t.floor||"stone",0,0,0),i.box(.1,.004,.6,"steel",0,.03,-n/2+.4,{cast:!1}),i.cyl(.012,.012,2.1,"chrome",-e/2+.1,0,-n/2+.06),i.box(.02,.02,.4,"chrome",-e/2+.1,2.08,-n/2+.26),i.m(i.B.cylGeo(.13,.13,.01,24),"chrome",-e/2+.1,2.05,-n/2+.44),t.glass!==!1){const s=i.B.geo("glassq",()=>new Me(1,1));i.m(s,"glass",e/2,1.05,0,0,Math.PI/2,0,{s:[n,2,1],cast:!1}),i.box(.02,2,.03,"chrome",e/2,.05,n/2-.02)}return{fp:null,blob:!1}};zt.towelRail=(i,t={})=>{for(const e of[-1,1])i.box(.025,1.6,.025,"teak",e*.25,0,0,{rx:.1});for(let e=0;e<4;e++)i.box(.5,.025,.025,"teak",0,.3+e*.35,.03-e*.035);return i.rbox(.44,.5,.05,.02,"fabric",0,.9,0,{color:t.color||Y.white,rx:.1}),{fp:[.6,.3]}};zt.bbq=i=>{i.rbox(1.1,.8,.55,.02,"chrome",0,.1,0);for(const t of[-1,1])for(const e of[-1,1])i.box(.04,.1,.04,"steel",t*.5,0,e*.22);return i.m(i.B.geo("bbqLid",()=>{const t=new ze(.28,.28,.9,16,1,!1,0,Math.PI);return t.rotateZ(Math.PI/2),t}),"steel",0,.9,0),{fp:[1.1,.6]}};zt.yoga=(i,t={})=>{const e=[Y.sage,Y.terracotta,Y.lavender];for(let n=0;n<(t.n??2);n++)i.rbox(.62,.008,1.8,.004,"fabric",(n-((t.n??2)-1)/2)*.9,0,0,{color:e[n%3],cast:!1});return i.cushion(.45,.16,.45,1.2,0,-.5,Y.ochre,{e:.5,puff:.2}),i.rbox(.23,.1,.15,.02,"teak",1.2,0,.3),{fp:null,blob:!1}};zt.hammock=(i,t={})=>{const e=t.L??2.8,n=t.W??1.1,s=t.sag??.75,o=wn("ham"+e,()=>{const a=new Me(e,n,24,8),l=a.attributes.position;for(let c=0;c<l.count;c++){const h=l.getX(c),u=l.getY(c),d=h/(e/2),f=1-d*d,p=u*(.35+.65*Math.sqrt(Math.max(0,f)));l.setXYZ(c,h,-s*f-Math.pow(u/(n/2),2)*.12*f,p)}return a.computeVertexNormals(),a});i.m(o,"net",0,0,0,0,0,0);const r=wn("hamF"+e,()=>{const a=o.toNonIndexed(),l=a.clone(),c=l.attributes.position.array;for(let d=0;d<c.length;d+=9)for(let f=0;f<3;f++){const p=c[d+3+f];c[d+3+f]=c[d+6+f],c[d+6+f]=p}l.computeVertexNormals(),a.computeVertexNormals();const h=new ge,u=new Float32Array(a.attributes.position.count*6);return u.set(a.attributes.position.array,0),u.set(l.attributes.position.array,a.attributes.position.array.length),h.setAttribute("position",new Pe(u,3)),h.computeVertexNormals(),h});i.m(r,"fabric",0,-.025,0,0,0,0,{color:Y.cream,s:[.94,1,.9]});for(const a of[-1,1])i.m(i.B.cylGeo(.012,.012,.4,4),"props",a*(e/2+.15),.1,0,0,0,a*1.2,{color:"#e9dfc8"});return i.cushion(.5,.14,.3,-e/2+.7,-s*.75,0,Y.terracotta,{rz:.35,puff:.4}),{fp:null,blob:!1}};zt.beanbag=(i,t={})=>(i.m(Ql(.95,.55,.9,.7,.1),"fabric",0,.26,0,-.1,0,0,{color:t.color||Y.lavender}),i.m(Ql(.6,.4,.3,.7,.1),"fabric",0,.55,-.32,-.4,0,0,{color:t.color||Y.lavender}),{fp:[.95,.9]});zt.desk=(i,t={})=>{const e=t.w??1.4;i.box(e,.035,.65,t.top||"teak",0,.72,0);for(const s of[-1,1])i.box(.03,.72,.6,"steel",s*(e/2-.05),0,0);me.bookStack(i,-e/2+.2,.755,-.15,.1),i.box(.34,.015,.24,"steelGrey",.1,.755,.02,{ry:.15}),zt._tableLamp(i,e/2-.2,.755,-.18,{prio:.6,intensity:2});const n=new vi(i.B);return zt.chair(n,{seat:"rattan"}),n.g.position.set(0,0,.5),n.g.rotation.y=Math.PI,i.g.add(n.g),{fp:[e,1.1]}};zt.console=(i,t={})=>{const e=t.w??1.8;i.rbox(e,.55,.42,.015,t.mat||"walnut",0,.1,0);for(const n of[-1,1])i.box(.04,.1,.35,"steel",n*(e/2-.1),0,0);return me.bookStack(i,-e/2+.3,.65,0,.14),me.vase(i,e/2-.3,.65,0,.42,"#e9e2d4"),me.bowl(i,.1,.65,.02,.18,"#40352c",.07),{fp:[e,.45]}};zt.shelf=(i,t={})=>{const e=t.w??1.2,n=t.h??1.9,s=t.n??4;for(const o of[-1,1])i.box(.03,n,.35,"steel",o*e/2,0,0);for(let o=0;o<s;o++){const r=.1+o*(n-.2)/(s-1);i.box(e,.035,.35,t.mat||"walnut",0,r,0),o<s-1&&me.shelfItems(i,-e/2+.05,e/2-.05,r+.035,0,o*7+3)}return{fp:[e+.05,.36]}};zt.macrame=i=>{i.cyl(.015,.015,.9,"teak",0,0,0,{rz:Math.PI/2});const t=i.B.geo("macq",()=>{const e=new Me(.8,1.1);return e.translate(0,-.55,0),e});return i.m(t,"net",0,0,.01,0,0,0,{cast:!1}),{fp:null,blob:!1}};zt.curtain=(i,t={})=>{const e=t.w??1.2,n=t.h??2.8,s=t.folds??Math.max(3,Math.round(e/.14)),o=wn(`cur${e}|${n}|${s}`,()=>{const r=new Me(e,n,s*4,6);r.translate(0,n/2,0);const a=r.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l);a.setZ(l,Math.sin((c+e/2)/e*s*Math.PI*2)*.045)}return r.computeVertexNormals(),r});return i.m(o,"curtain",0,.02,0,0,0,0,{cast:!1}),t.rod!==!1&&i.m(i.B.cylGeo(.012,.012,e+.2,6),"steel",0,n+.06,-.02,0,0,Math.PI/2,{cast:!1}),{fp:null,blob:!1}};zt.stringLights=(i,t={})=>{const[e,n,s]=t.a,[o,r,a]=t.b,l=t.sag??.4,c=Math.hypot(o-e,a-s),h=Math.max(3,Math.round(c/.55)),u=i.B.geo("sbulb",()=>new He(.035,8,6));let d=null;for(let f=0;f<=h;f++){const p=f/h,v=e+(o-e)*p,g=s+(a-s)*p,m=n+(r-n)*p-l*4*p*(1-p);if(i.m(u,"bulb",v,m-.05,g,0,0,0,{cast:!1}),d){const[b,y,x]=d,T=Math.hypot(v-b,m-y,g-x),M=i.m(i.B.cylGeo(.004,.004,T,3),"blackMatte",(v+b)/2,(m+y)/2,(g+x)/2,0,0,0,{cast:!1});M.lookAt(i.g.localToWorld(new D(v,m,g))),M.rotateX(Math.PI/2)}d=[v,m,g]}return i.light((e+o)/2,Math.min(n,r)-l,(s+a)/2,{color:"#ffc27a",intensity:4,distance:8,kind:"string",prio:.9}),{fp:null,blob:!1}};zt.trackLights=(i,t={})=>{const e=t.L??4;i.box(e,.04,.05,"steel",0,-.04,0);for(let n=0;n<Math.round(e/.9);n++){const s=-e/2+.45+n*.9;i.cyl(.04,.04,.16,"steel",s,-.2,0,{rx:.4*(n%2?1:-1)})}return{fp:null,blob:!1}};zt.outdoorShower=i=>(i.box(.1,2.3,.1,"teak",0,0,0),i.box(.03,.03,.45,"chrome",0,2.2,.2),i.m(i.B.cylGeo(.14,.14,.01,24),"chrome",0,2.17,.42),i.box(.9,.03,.9,"stone",0,0,.45),{fp:[.3,.3],blob:!1});zt.fridge=(i,t={})=>(i.rbox(.72,1.85,.66,.01,t.mat||"blackMatte",0,0,0),i.box(.02,.6,.03,"steelGrey",-.3,1,.34),{fp:[.72,.66]});zt.gym=i=>{i.rbox(.3,.1,1.2,.02,"fabric",0,.42,0,{color:Y.charcoal}),i.box(.05,.42,.05,"steel",0,0,-.45),i.box(.05,.42,.05,"steel",0,0,.45),new se().position.set(1.2,0,0),i.box(.9,.05,.35,"steel",1.2,.5,0),i.box(.05,.5,.3,"steel",.8,0,0),i.box(.05,.5,.3,"steel",1.6,0,0);for(let e=0;e<5;e++){const n=.9+e*.16;i.cyl(.045,.045,.28,"blackMatte",n,.62,0,{rx:Math.PI/2,seg:10})}return{fp:[2,1.3]}};zt.bike=i=>(i.m(i.B.geo("bikeW",()=>new Ii(.28,.05,8,24)),"blackMatte",0,.35,.45,0,Math.PI/2,0),i.box(.08,.9,.08,"steel",0,0,-.1,{rx:.2}),i.rbox(.18,.06,.28,.03,"blackMatte",0,.95,-.2),i.box(.5,.04,.04,"steel",0,1.1,.35),i.box(.3,.05,1.2,"steel",0,0,0),{fp:[.5,1.3]});const me={bookStack(i,t,e,n,s=.15,o=0){const r=Ie((t*100|0)+(n*71|0)+3),a=["#e8e0d0","#2f3d4f","#b8694a","#d5c2a2","#1f1f1f","#8f9c7e","#c8964a"];let l=e;for(;l-e<s;){const c=.025+r()*.03,h=.2+r()*.08,u=.14+r()*.06;i.rbox(h,c,u,.004,"props",t+(r()-.5)*.02,l,n,{color:a[r()*a.length|0],ry:o+(r()-.5)*.3}),l+=c}},vase(i,t,e,n,s=.3,o="#e8e2d6"){const r=s*.3;i.lathe([[0,0],[r*.6,0],[r,s*.35],[r*.9,s*.65],[r*.45,s*.88],[r*.5,s],[r*.42,s],[0,s*.9]],"gloss",t,e,n,{color:o,seg:18})},bowl(i,t,e,n,s=.15,o="#2d2a27",r=.06){i.lathe([[0,0],[s*.5,0],[s*.9,r*.5],[s,r],[s*.95,r],[s*.85,r*.5],[s*.45,r*.15],[0,r*.15]],"gloss",t,e,n,{color:o,seg:20})},jar(i,t,e,n,s=.18){i.cyl(.055,.055,s,"gloss",t,e,n,{color:"#e3ddd2",seg:14}),i.cyl(.058,.058,.03,"props",t,e+s,n,{color:"#8a6a4a",seg:14})},candle(i,t,e,n,s=.2){i.cyl(.06,.07,.03,"brass",t,e,n,{seg:12}),i.cyl(.022,.022,s,"props",t,e+.03,n,{color:"#f4efe4",seg:10})},board(i,t,e,n){i.rbox(.45,.025,.28,.01,"teak",t,e,n,{ry:.2}),i.m(i.B.geo("lemon",()=>new He(.035,10,8)),"props",t+.05,e+.06,n,0,0,0,{color:"#d9b43a",s:[1,.85,1.2]})},shelfItems(i,t,e,n,s,o=1){const r=Ie(o*31+7);let a=t;for(;a<e-.12;){const l=r();if(l<.35){const c=3+(r()*5|0);for(let h=0;h<c&&a<e-.04;h++){const u=.025+r()*.02,d=.18+r()*.08;i.box(u,d,.15+r()*.04,"props",a+u/2,n,s,{color:["#e8e0d0","#2f3d4f","#b8694a","#d5c2a2","#1f1f1f","#8f9c7e"][r()*6|0]}),a+=u+.003}a+=.06}else if(l<.6)me.vase(i,a+.07,n,s,.14+r()*.12,["#e8e2d6","#c9b89c","#3a3530","#b8694a"][r()*4|0]),a+=.18;else if(l<.8)me.bowl(i,a+.1,n,s,.09+r()*.04,["#e8e2d6","#6b4d33","#2d2a27"][r()*3|0],.06),a+=.24;else{for(let c=0;c<3;c++)i.cyl(.05,.05,.02,"gloss",a+.06,n+c*.022,s,{color:"#f0ece4",seg:14});a+=.16}}}},Mr=D,ab=pe,lb=At,ec=function(){return new Me(1,1)},_t=Math.PI;function N(i,t,e,n,s=0,o={}){const r=new vi(i),a=zt[t](r,o)||{},l=(o.y??i.y)+(o.dy||0);i.place(r.g,e,l,n,s,{layer:o.layer});const c=Math.cos(s),h=Math.sin(s),u=(f,p)=>[e+f*c+p*h,n-f*h+p*c];if(o.light!==!1)for(const f of r.lights){const[p,v]=u(f.x,f.z);i.light({...f,...o.lightOpts||{},x:p,y:l+f.y,z:v})}const d=o.y??i.y;if(a.fp&&o.collide!==!1){const[f,p]=[a.cx||0,0],[v,g]=u(f,p);i.block(v,g,a.fp[0]+(o.pad??.04),a.fp[1]+(o.pad??.04),s,d,d+(o.h??1));for(const[m,b,y,x]of a.extra||[]){const[T,M]=u(m,b);i.block(T,M,y,x,s,d,d+1)}}if(a.blob!==!1&&o.blob!==!1&&(a.fp||a.blob)){const f=a.blob||[a.fp[0]*1.18+.12,a.fp[1]*1.18+.12],[p,v]=u(a.cx||0,0);i.blob(p,v,f[0],f[1],s,d,{layer:o.layer})}return a.fan&&i.fans.push({x:e,y:l+a.fan.y,z:n,level:i.level}),a}function U0(i,t){let e=-1.3;return t>-8&&(e-=.14*(t+8)),t>8&&(e-=.012*(t-8)**2),t<-8&&(e+=.06*(-8-t)),e+=Math.sin(i*.3)*.12+Math.sin(i*.11+t*.2)*.22,e}function tl(i,t,e,n,s,o,r={}){const a=(t+e)/2,l=r.mirror?-1:1,c=l>0?e-1:t+1;i.slab(t,s,e,o,"hardwood"),i.slab(t,n,e,s,"microcement"),i.wall(t,s,e,s,{openings:[{at:c-t,w:1,h:2.3,type:"door",swing:-l,side:-1}]});const h=l>0?t+1.2:e-1.2;i.wall(t,n,e,n,{openings:[{at:h-t,w:1,h:2.3,type:"door",swing:l,side:-1},{at:a-t+l*.9,w:2.4,sill:.9,h:1.5,type:"window",grid:[4,2]}]}),i.glassWall(t,o,e,o,{h:3,transom:2.6,rows:3,cols:2,panel:1.4,gaps:[{at:(l>0?e-1.6:t+1.6)-t,w:1.6}],park:l>0?-1:1});const u=s+.1+1.08,d=a-l*.4,f=l>0?t:e;N(i,"bed",d,u,0,{seed:r.seed||3,accent:r.accent||Y.terracotta,throw:r.throw||Y.sand,h:.7}),N(i,"headboard",d,s+.1,0,{w:3.6,h:1.3,y0:.15,lampX:1.35,collide:!1,blob:!1,light:!1}),i.light({x:d,y:2.1,z:u+.6,color:"#ffb46e",intensity:3.2,distance:7,kind:"lamp",prio:1.1}),N(i,"dresser",f+l*.34,u+.15,l*_t/2,{w:1.5}),N(i,"art",f+l*.1,u+.15,l*_t/2,{dy:1.3,w:1,h:.8,mat:r.art||"art2",collide:!1,blob:!1}),N(i,"armchair",f+l*.85,o-.95,l*2.5,{color:Y.white,pillow:r.accent||Y.terracotta}),N(i,"sideTable",f+l*.45,o-1.85,0,{}),N(i,"plant",(l>0?e:t)-l*.45,o-.45,0,{type:"fiddle",s:1,potMat:"concreteDark",seed:5}),N(i,"rugRect",d,u+1.1,0,{w:2.8,d:2,collide:!1}),N(i,"fanHousing",d,u+.9,0,{top:4.3,drop:.55});for(const m of[-1,1])N(i,"curtain",m<0?t+.55:e-.55,o-.14,0,{w:.9,h:2.75});N(i,"vanity",f+l*2,s-.35,_t,{w:1.6,mirrorFrame:"teak"}),N(i,"toilet",f+l*.45,s-.55,_t,{}),N(i,"bathtub",a+l*1.6,n+1,0,{}),N(i,"towelRail",(l>0?e:t)-l*.2,n+1.9,-l*_t/2,{color:Y.sand}),N(i,"plant",a+l*.2,n+.45,0,{type:"monstera",s:.8,basket:!0,seed:9});const p=l>0?t+.1:e-3.4,v=p+3.3,g=n-2.8;return i.slab(p,g,v,n,"stone",{th:.2}),i.wall(p,g,v,g,{h:2.4,mat:"plasterGrey",ao:!1}),i.wall(p,g,p,n,{h:2.4,mat:"plasterGrey",ao:!1}),i.wall(v,g,v,n,{h:2.4,mat:"plasterGrey",ao:!1}),N(i,"outdoorShower",p+1.1,g+.35,0,{collide:!1}),N(i,"plant",v-.6,g+.6,0,{type:"banana",s:1.2,pot:!1,seed:13}),N(i,"plant",v-.5,n-.6,0,{type:"shrub",s:.9,pot:!1,seed:17}),{cx:a,bedZ:u,doorX:c}}const cb={key:"harmony",levels:[0],levelNames:["Ground"],site:{ground:U0,baseY:-3,dropZ:12,seed:11,palms:[[-17.5,9,11],[27.5,6,12],[12,12.5,9],[-10,16,13],[16,16,10]],shrubs:[[-15.5,2,.8],[-15.8,-2.5,.7],[25,1,.8],[24.8,-3,.7],[8.2,-1,.8],[8.4,2.5,.7],[-3.5,-7.5,.7],[2,-6,.8],[5.5,-6.4,.7],[-8,14,.9],[9,14,.9],[-5.5,17,1],[6,18,1]]},overview:{target:[5,-1,3],dist:55,el:.64,az:_t+.62,tilt:.13,azPortrait:_t/2+.5,portraitDist:1.15},entryRoom:"living",rooms:[{id:"living",name:"Living & dining",kind:"living",rect:[-7,-4,1.4,4],view:[-1.2,-2.9,-25,-2]},{id:"kitchen",name:"Kitchen",kind:"kitchen",rect:[1.4,-4,7,4],view:[1.4,2.6,150,-6]},{id:"terrace",name:"Terrace",kind:"deck",rect:[-7,4,7,9.6],view:[-3.8,7,25,-3]},{id:"pool",name:"Fibonacci pool",kind:"pool",rect:[-4.6,9.6,5.6,13.8],circle:[.5,13.8,3.6],view:[-2,10,22,-10],labelAt:[.5,1.4,14.5]},{id:"suite1",name:"Suite I",kind:"bed",rect:[9.5,-1,16.5,4],view:[15.2,3.3,-145,-6]},{id:"bath1",name:"Bath I",kind:"bath",rect:[9.5,-4.5,16.5,-1],view:[15.5,-1.45,-128,-12],chip:!1,label:!1},{id:"suite2",name:"Suite II",kind:"bed",rect:[16.5,-1,23.5,4],view:[17.8,3.3,145,-6]},{id:"bath2",name:"Bath II",kind:"bath",rect:[16.5,-4.5,23.5,-1],view:[17.5,-1.45,128,-12],chip:!1,label:!1},{id:"suite3",name:"Suite III",kind:"bed",rect:[-14,-1,-7,4],view:[-12.2,3.2,146,-6]},{id:"bath3",name:"Bath III",kind:"bath",rect:[-14,-4,-7,-1],view:[-13,-1.45,128,-12],chip:!1,label:!1},{id:"deck",name:"Suite deck",kind:"deck",rect:[7,4,24,8],view:[9,6.2,60,-3],chip:!1,label:!1,prio:-1},{id:"deckN",name:"Deck",kind:"deck",rect:[-14.5,4,-7,8],view:[-9.2,5.2,-40,-3],chip:!1,label:!1,prio:-1},{id:"yoga",name:"Yoga deck",kind:"deck",rect:[-14.5,8,-8,12.5],view:[-9.2,8.6,-30,-6]},{id:"entry",name:"Entry",kind:"path",rect:[-2.6,-10.5,.2,-4],y:-1.25,view:[-1.2,-9.4,0,6],chip:!1,label:!1}],stops:[{at:[-1.2,-3],look:[4,3],caption:"Arrival — a heavy teak door opens onto the great room"},{at:[-1.5,2.2],look:[-128,-4],caption:"Living — vaulted cedar ceiling and king-post trusses"},{at:[1.6,1.7],look:[150,-9],caption:"Kitchen — slatted teak, concrete and a live-edge table for eight"},{at:[.5,8.9],look:[2,-6],hold:3.2,caption:"The Fibonacci infinity pool, poised above the Pacific"},{at:[14.9,6],via:!0},{at:[15,3.2],look:[-146,-8],caption:"Suite I — a live-edge headboard, linen and jungle light"},{at:[15.5,-1.45],look:[-128,-12],caption:"Indoor/outdoor bathroom — stone, teak and open sky"},{at:[14.9,2.4],via:!0},{at:[11.6,7],look:[-28,-2],hold:3.3,caption:"Golden hour — every suite opens to the view"}],pools:[{cx:.5,cz:13.8,r:3.6}],build(i){const t=U0;i.slab(-7,-4,7,4,"terrazzo");const e=(c,h,u,d)=>{const f=Math.min(t(c,d),t(u,d))-.5;for(const[p,v,g,m]of[[c,h,u,h],[u,h,u,d],[u,d,c,d],[c,d,c,h]]){const b=Math.hypot(g-p,m-v);i.box(p===g?.3:b+.3,-.3-f,v===m?.3:b+.3,"stone",(p+g)/2,f,(v+m)/2,0,{layer:"site"})}};e(-14,-4,7,4),e(9.5,-4.5,23.5,4),i.wall(-7,-4,7,-4,{openings:[{at:5.8,w:1.4,h:2.55,type:"pivot"},{at:2.4,w:1.8,sill:.95,h:1.55,type:"window",grid:[3,2]}]}),i.wall(7,-4,7,4,{openings:[{at:5.4,w:2.2,sill:.95,h:1.6,type:"window",grid:[3,2]}]}),i.wall(-7,4,-7,-4,{openings:[{at:3.2,w:1,h:2.3,type:"door",swing:1,side:1}]}),i.glassWall(-7,4,7,4,{h:3,transom:2.6,rows:3,cols:2,panel:1.4,gaps:[{at:3.8,w:2.8},{at:10.6,w:2.1}],park:1}),i.hipCeiling(-7,-4,7,4,{y:3,pitch:.5,trusses:[-2.1,2.1],spacing:.85}),i.hipCeiling(-14,-4,-7,4,{y:3,pitch:.5,spacing:.85}),i.hipRoof(-14,-4,7,4,{wallTop:3.38,pitch:.5,overhang:1.6,flare:.38,flareLen:1.2}),i.wall(-14,-4,-14,4,{openings:[{at:5.8,w:2,sill:.55,h:1.95,type:"window",grid:[3,3]}]}),tl(i,-14,-7,-4,-1,4,{mirror:!0,accent:Y.sage,throw:Y.stone,art:"art3",seed:9}),N(i,"rugRound",-3.3,.4,0,{r:1.75,collide:!1}),N(i,"coffeeRound",-3.3,.4,.3,{r:.55,base:"drum",seed:6}),N(i,"sofa",-5.55,.4,_t/2,{w:2.5,color:Y.white,pillows:[Y.sand,Y.terracotta,Y.cream],throw:Y.stone}),N(i,"sofa",-1,.4,-_t/2,{w:2.5,color:Y.white,pillows:[Y.terracotta,Y.sand],legs:!0}),N(i,"lounge",-4.4,-2.35,.2,{color:Y.cream,pillow:Y.ochre}),N(i,"lounge",-2.25,-2.35,-.2,{color:Y.cream,pillow:Y.sand}),N(i,"sideTable",-3.3,-2.85,0,{lamp:{prio:1.2},light:!1}),N(i,"floorLamp",-6.45,2.9,0,{light:!1}),i.light({x:-4.2,y:2.3,z:.2,color:"#ffb872",intensity:5.5,distance:10,kind:"lamp",prio:1.9}),N(i,"console",-3.3,-3.7,0,{w:1.9}),N(i,"art",-6.9,-2.1,_t/2,{dy:1.05,w:1.5,h:1.15,mat:"art1",collide:!1,blob:!1}),N(i,"plant",-6.4,3.35,0,{type:"monstera",s:1.25,basket:!0,seed:3}),N(i,"plant",.55,-3.45,0,{type:"palm",s:1.35,potMat:"concreteDark",seed:21}),N(i,"fanHousing",-3.3,.4,0,{top:5,drop:.95}),N(i,"sunburst",7-.1,1.2,-_t/2,{dy:1.6,collide:!1,blob:!1}),N(i,"kitchen",3.7,-3.58,0,{len:4,fridge:!0}),N(i,"diningTable",3.9,-.35,0,{len:3.2,wid:1,chairs:8,seed:4});for(const[c,h]of[[0,-1],[1,0],[2,1]].map(([u,d])=>[u,d]))N(i,"pendant",3.9+h,-.35,0,{top:4.6,drop:1.78,type:"dome",light:c===1,intensity:6,prio:2});N(i,"plant",6.45,3.3,0,{type:"fiddle",s:1.25,potMat:"concreteDark",seed:8}),N(i,"stool",6.4,1.7,0,{}),i.wall(9.5,-4.5,9.5,4,{openings:[{at:6.3,w:2,sill:.55,h:1.95,type:"window",grid:[3,3]}]}),i.wall(16.5,-4.5,16.5,4,{}),i.wall(23.5,4,23.5,-4.5,{openings:[{at:2.2,w:2,sill:.55,h:1.95,type:"window",grid:[3,3]}]}),tl(i,9.5,16.5,-4.5,-1,4,{mirror:!1,accent:Y.terracotta,throw:Y.sand,art:"art2",seed:3}),tl(i,16.5,23.5,-4.5,-1,4,{mirror:!0,accent:Y.teal,throw:Y.oat,art:"art1",seed:7}),i.hipCeiling(9.5,-4.5,16.5,4,{y:3,pitch:.5,spacing:.85}),i.hipCeiling(16.5,-4.5,23.5,4,{y:3,pitch:.5,spacing:.85}),i.hipRoof(9.5,-4.5,23.5,4,{wallTop:3.38,pitch:.5,overhang:1.6,flare:.38,flareLen:1.2}),i.deck(-14.5,4,24,8,{y:-.02,ground:t,mat:"deck"}),i.deck(-7,8,7,9.6,{y:-.02,ground:t,mat:"deck"}),i.deck(7,-4.5,9.5,4,{y:-.02,ground:t,mat:"deckZ"});const n=[.5,13.8],s=3.6,o=s+.45,r=[];for(let c=0;c<=24;c++){const h=-(c/24)*_t;r.push([n[0]+Math.cos(h)*o,n[1]+Math.sin(h)*o])}i.shapeSlab([[-4.6,9.6],[5.6,9.6],[5.6,13.8],...r,[-4.6,13.8]],[],0,.35,"stone");for(const[c,h]of[[-4.4,13.6],[5.4,13.6],[-4.4,9.8],[5.4,9.8]])i.pier(c,h,-.35,t(c,h)-.3,.4,"stone");i.walk(-4.6,9.6,5.6,13.8,0),i.pool({shape:"circle",cx:n[0],cz:n[1],r:s,y:0,water:-.07,depth:1.25,floor:"spiral",wall:"sukabumi",coping:"stone",copingW:.45,infinity:{arc:[.18,_t-.18]},drop:t(.5,17.5)-.6}),N(i,"lounger",-3.75,11.4,.3,{color:Y.white,pillow:Y.sand,towel:Y.teal}),N(i,"lounger",4.75,11.4,-.3,{color:Y.white,pillow:Y.terracotta}),N(i,"sideTable",-3.3,10,0,{top:"teak"}),i.deck(-14.5,8,-8,12.5,{y:-.35,ground:t,mat:"deckZ"}),N(i,"yoga",-11.6,10.4,_t/2,{n:2,y:-.35}),N(i,"plant",-13.8,11.9,0,{type:"palm",s:1.1,potMat:"concreteDark",y:-.35,seed:31}),N(i,"bbq",8.3,5,-_t/2,{}),N(i,"daybed",-12.6,6.9,0,{}),N(i,"plant",23.2,7.3,0,{type:"monstera",s:1.1,basket:!0,seed:12}),N(i,"plant",-6.4,9.1,0,{type:"palm",s:1,potMat:"concreteDark",seed:41}),N(i,"plant",6.4,9.1,0,{type:"banana",s:1,potMat:"concreteDark",seed:42});const a=(c,h=-.02)=>i.rail(c,{y:h,type:"cable"});a([[-8,8],[-7,8],[-7,9.6],[-4.6,9.6],[-4.6,13.8],[-3.6,13.8]]),a([[4.6,13.8],[5.6,13.8],[5.6,9.6],[7,9.6],[7,8],[24,8],[24,4]]),a([[-14.5,4],[-14.5,8]]),a([[-8,8],[-8,12.5],[-14.5,12.5],[-14.5,8]],-.35);const l=-1.25;i.slab(-2.4,-10.6,0,-7.4,"stone",{y:l,th:.3}),i.stair(-1.2,-7.4,0,1.6,l,0,{type:"stone",base:.6,rails:[]}),i.slab(-2.3,-5.2,-.1,-4.1,"stone",{y:0,th:1.4}),i.wall(-2.6,-10.6,-2.6,-5.2,{h:.8,y0:l,mat:"stone",t:.3,ao:!1}),i.wall(.2,-10.6,.2,-5.2,{h:.8,y0:l,mat:"stone",t:.3,ao:!1}),N(i,"plant",-3.3,-6.2,0,{type:"banana",s:1.4,pot:!1,y:t(-3.3,-6.2),seed:51,collide:!1,blob:!1}),N(i,"plant",1,-7.2,0,{type:"bird",s:1.2,pot:!1,y:t(1,-7.2),seed:52,collide:!1,blob:!1}),i.light({x:n[0],y:-.75,z:n[1],color:"#5fe6e0",intensity:3.2,distance:8,kind:"pool",prio:2.2}),i.light({x:4.5,y:2.2,z:6,color:"#ffb872",intensity:3.5,distance:9,kind:"garden",prio:1}),i.light({x:13,y:1.6,z:-2.8,color:"#ffbf80",intensity:2.2,distance:5,kind:"lamp",prio:.6})}},k0=(i,t)=>-3.1-Math.max(0,t-9)*.08+Math.sin(i*.4)*.1;function nc(i,t,e,n,s,o,r=2.3,a=.1,l="blackMatte"){const c=Math.hypot(n-t,s-e),h=Math.round(c/a),u=-Math.atan2(s-e,n-t);for(let d=0;d<=h;d++){const f=d/h;i.box(.035,r,.05,l,t+(n-t)*f,o,e+(s-e)*f,u)}i.box(c,.05,.08,l,(t+n)/2,o+r,(e+s)/2,u),i.seg(t,e,n,s,o,o+r,.05,"rail")}const hb={key:"studio54",levels:[0],levelNames:["Studio"],site:{ground:k0,baseY:-3.2,dropZ:14,seed:54,palms:[[-8.5,6,9],[9.5,9,10],[-9,-3,8],[10,-2,9]],shrubs:[[-7.2,8.6,.9],[8.2,10.2,1],[0,11,.9],[8.6,4,.8]],clear:16},overview:{target:[.8,-.8,1.9],dist:27,el:.78,az:_t+.55,tilt:.1,azPortrait:_t/2+.6,portraitDist:1.25},entryRoom:"studio",rooms:[{id:"studio",name:"Skylight studio",kind:"bed",rect:[-5,-1.2,5,3],view:[3.7,.5,-108,-2],prio:0},{id:"kitchen",name:"Kitchen",kind:"kitchen",rect:[-1.8,-4,5,-1.2],view:[1.2,-.6,150,-10]},{id:"bath",name:"Bath",kind:"bath",rect:[-5,-4,-1.8,-1.2],view:[-2.6,-2.2,-110,-8]},{id:"terrace",name:"Terrace & pool",kind:"deck",rect:[-6,3,7,8.6],view:[-3.2,4.2,30,-8]}],stops:[{at:[3.7,.5],look:[-108,4],hold:3.3,caption:"Studio 54 — teak planks, frameless glass, lavender loungers"},{at:[.9,-.9],look:[145,-12],hold:3.1,caption:"Kitchenette — micro-cement, an open shelf, a black fridge"},{at:[-1.2,-.55],look:[-128,-8],hold:3.1,caption:"Micro-cement bath with a glass shower and teak door"},{at:[-.9,1.3],look:[-92,12],hold:3.3,caption:"A king bed beneath the big square skylight"},{at:[2.6,2.4],via:!0},{at:[-1.2,4.3],look:[52,-14],hold:3.3,caption:"A private terrace, the plunge pool set into the deck"},{at:[6,.9],look:[178,-8],hold:3.2,caption:"An outdoor shower behind black slatted screens"},{at:[5.6,7.3],look:[-40,-3],hold:3.4,caption:"Minimal lines, maximum sky"}],pools:[{x0:.4,z0:4.6,x1:4.8,z1:7}],build(i){const t=k0;i.plinth(-6.1,-4.3,7.1,8.7,-.1,-3.4,"stucco"),i.slab(-5,-4,5,3,"hardwood"),i.wall(-5,-4,5,-4,{h:3}),i.wall(-5,3,-5,-4,{h:3,openings:[{at:4.5,w:1.2,sill:.9,h:1.3,type:"window",grid:[2,2]}]}),i.frameless(-5,3,5,3,{h:3,panel:2.5,gaps:[{at:7.6,w:1.8}]}),i.frameless(5,3,5,-4,{h:3,panel:2.3}),i.slab(-5,-4,-1.8,-1.2,"microcement",{th:.29,y:.006}),i.wall(-5,-1.2,-1.8,-1.2,{h:3,mat:"teakSlat",matB:"microcement",openings:[{at:2.4,w:1,h:2.3,type:"door",swing:1,side:-1,leaf:"teakSlat"}]}),i.wall(-1.8,-1.2,-1.8,-4,{h:3,mat:"teakSlat",matB:"microcement"}),N(i,"shower",-4.35,-3.4,_t/2,{w:1.1,d:1.1,floor:"microcement"}),N(i,"vanity",-3.2,-1.55,_t,{w:1,sinks:1,top:"microcement",body:"teakSlat"}),N(i,"toilet",-2.25,-3.55,0,{}),N(i,"towelRail",-2,-2.2,-_t/2,{color:Y.white});const e=[-5+.25+.3,-.9+.5,-2.2+.2,2.5];i.ceiling(-5,-4,5,3,{y:3,mat:"soffitZ",hole:e}),i.roofSlab(-5.3,-4.3,5.3,3.9,{y:3.02,th:.3,mat:"stucco",soffit:"soffitZ",hole:e});for(const[n,s,o,r]of[[e[0],e[1],e[2],e[1]],[e[2],e[1],e[2],e[3]],[e[2],e[3],e[0],e[3]],[e[0],e[3],e[0],e[1]]])i.box(Math.max(.04,Math.abs(o-n)),.34,Math.max(.04,Math.abs(r-s)),"teak",(n+o)/2,3,(s+r)/2,0,{layer:"roof"});i.add(i.geo("glassq",()=>new ec),"glass",(e[0]+e[2])/2,3.33,(e[1]+e[3])/2,0,{rx:-_t/2,sx:e[2]-e[0],sy:e[3]-e[1],layer:"roof",cast:!1}),N(i,"bed",-3.84,1,_t/2,{low:!0,base:"teak",seed:21,accent:Y.lavender,pillow2:Y.stone,throw:Y.stone,nightstands:!0,nsMat:"teak",h:.6}),N(i,"art",-4.9,1,_t/2,{dy:1.25,w:1.4,h:.9,mat:"art2",collide:!1,blob:!1}),N(i,"rugRect",1.6,1.4,0,{w:2.6,d:1.9,collide:!1}),N(i,"beanbag",.9,1.9,.5,{color:Y.lavender}),N(i,"beanbag",2.5,2.1,-.4,{color:"#9a9a9e"}),N(i,"coffeeRect",1.7,.8,0,{w:.9,d:.55,mat:"concreteDark"}),N(i,"floorLamp",4.4,2.4,0,{light:!1}),N(i,"desk",.1,-3.6,0,{w:1.3}),N(i,"kitchen",2.35,-3.58,0,{len:2.3,front:"microcement",top:"counter",fridge:!1}),N(i,"fridge",4.3,-3.66,0,{}),N(i,"plant",4.55,.4,0,{type:"fiddle",s:1.1,potMat:"concreteDark",seed:61}),N(i,"plant",-1.4,2.55,0,{type:"monstera",s:1,basket:!0,seed:62}),N(i,"fanHousing",1.6,1.2,0,{top:3,drop:.35}),i.light({x:1.2,y:2.2,z:1,color:"#ffb46e",intensity:4.5,distance:8,kind:"lamp",prio:1.8}),i.light({x:-3.8,y:1.6,z:-.1,color:"#ffb46e",intensity:2.6,distance:5,kind:"lamp",prio:1.2}),i.deck(-6,3,7,4.48,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-6,7.12,7,8.6,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-6,4.48,.28,7.12,{y:-.02,ground:t,mat:"deckZ"}),i.deck(4.92,4.48,7,7.12,{y:-.02,ground:t,mat:"deckZ"}),i.deck(5,-4,7,3,{y:-.02,ground:t,mat:"deck"}),i.pool({shape:"rect",cx:2.6,cz:5.8,w:4.4,d:2.4,y:-.02,water:-.1,depth:1.2,floor:"sukabumi",wall:"sukabumi",coping:"teak",copingW:.12,steps:{x:.9,z:4.8,w:.8,dir:1}}),nc(i,-6,3,-6,8.6,-.02),nc(i,7,-4,7,8.6,-.02),i.rail([[-6,8.6],[7,8.6]],{y:-.02,type:"glass"}),N(i,"lounger",-4.3,6.4,0,{color:Y.white,pillow:Y.lavender,towel:Y.stone}),N(i,"lounger",-2.6,6.4,0,{color:Y.white,pillow:Y.stone}),N(i,"outdoorShower",6.35,-3.3,-_t/2,{collide:!1}),N(i,"plant",-5.5,3.6,0,{type:"palm",s:1.2,potMat:"concreteDark",seed:63}),N(i,"plant",6.4,8,0,{type:"banana",s:1,potMat:"concreteDark",seed:64}),N(i,"sideTable",-3.45,7.2,0,{top:"teak"}),i.light({x:2.6,y:-.75,z:5.8,color:"#5fe6e0",intensity:2.5,distance:6,kind:"pool",prio:2}),i.light({x:-3.4,y:2.3,z:5.5,color:"#ffb872",intensity:2.5,distance:8,kind:"garden",prio:1})}},ic=(i,t)=>-3.2-Math.max(0,t+2)*.32-Math.max(0,t-8)*.25+Math.sin(i*.35)*.3+Math.min(0,i+8)*.1;function Sr(i,t,e,n,s){const o=(()=>{let l=s*9301+49297;return()=>(l=(l*9301+49297)%233280)/233280})(),r=ic(t,e),a=(l,c,h,u,d,f,p,v)=>{const g=Math.sin(u)*Math.sin(d),m=Math.cos(d),b=Math.cos(u)*Math.sin(d),y=l+g*f,x=c+m*f,T=h+b*f,M=i.cylGeo(+(p*.65).toFixed(3),+p.toFixed(3),+f.toFixed(2),5,!0),A=new ab().setFromUnitVectors(new Mr(0,1,0),new Mr(g,m,b)),S=new lb().compose(new Mr((l+y)/2,(c+x)/2,(h+T)/2),A,new Mr(1,1,1));if(i.push(M,"bark",S,{layer:"site"}),v>0)for(let _=0;_<3;_++)a(y,x,T,u+(o()-.5)*2.4,Math.min(1.3,d+.25+o()*.3),f*(.6+o()*.15),p*.6,v-1)};a(t,r,e,o()*6,.1,n*.45,.15,3)}const ub={key:"ivory",levels:[0],levelNames:["Pavilion"],site:{ground:ic,baseY:-5,dropZ:8,seed:21,palms:[[-11,3,12],[11,-2,10],[-10,-8,9],[12,8,11]],shrubs:[[-8.5,0,.9],[8.6,2,.9],[5,-7.5,.9]],clear:16},overview:{target:[0,-1,1.2],dist:26,el:.8,az:_t+.95,tilt:.1,azPortrait:_t/2+.5,portraitDist:1.25},entryRoom:"suite",rooms:[{id:"suite",name:"Honeymoon suite",kind:"bed",rect:[-5,-1,2.6,4],view:[2.9,3.1,-140,-4]},{id:"lounge",name:"Lounge",kind:"living",rect:[2.6,-1,5,4],view:[-2.8,3.2,100,-4],prio:1},{id:"kitchen",name:"Kitchenette",kind:"kitchen",rect:[-5,-4,0,-1],view:[-2.5,.3,175,-10]},{id:"bath",name:"Bath",kind:"bath",rect:[0,-4,5,-1],view:[2.9,-1.45,170,-10],chip:!1},{id:"balcony",name:"Hammock balcony",kind:"deck",rect:[-7,4,7,6.8],view:[-1.2,5.3,55,-6]},{id:"deckS",name:"Outdoor shower",kind:"deck",rect:[5,-4,7,4],view:[6,2.8,180,-6],chip:!1,label:!1},{id:"deckN",name:"Jungle deck",kind:"deck",rect:[-7,-5.5,-5,4],view:[-6,2.6,180,-8],chip:!1,label:!1},{id:"stair",name:"Jungle stair",kind:"path",rect:[-7,-11.2,-5.6,-4],y:-2.8,view:[-6.3,-10.6,0,14]}],stops:[{at:[.1,3.2],look:[180,-2],hold:3.3,caption:"The honeymoon suite — a platform bed beneath a slatted cedar vault"},{at:[-2.5,.4],look:[178,-10],hold:3.1,caption:"Kitchenette and bath, tucked behind the partition"},{at:[3.9,3],look:[-118,0],hold:3.1,caption:"Capiz light, linen and a hand-painted surfboard"},{at:[6,2],look:[16,-4],hold:3.2,caption:"Sliding glass on three sides opens onto the balcony"},{at:[.2,5.4],look:[55,-6],hold:3.2,caption:"The hammock balcony — the highest point at Selva"},{at:[-4.8,5.7],look:[8,-2],hold:3.2,caption:"The Pacific on one side, the jungle on the other"},{at:[-6,.6],look:[-118,-4],hold:3.3,caption:"A wraparound deck in the treetops"}],pools:[],build(i){const t=ic;for(const n of[-7,-3.5,0,3.5,7])for(const s of[-4,0,4,6.6])Math.abs(n)<7&&s>-4&&s<4||i.pier(n,s,-.3,t(n,s)-.3,.26,"concreteDark");for(const n of[-5,5])for(const s of[-4,4])i.pier(n,s,-.3,t(n,s)-.3,.3,"concreteDark");i.slab(-5,-4,5,4,"concreteTile",{edge:"walnut"}),i.box(10.2,.4,8.2,"concreteDark",0,-.72,0,0,{layer:"site"}),i.wall(-5,-4,5,-4,{h:3,openings:[{at:2.3,w:1.6,sill:1.05,h:1.1,type:"window",grid:[3,2]},{at:7.5,w:1,sill:1.5,h:.8,type:"window",grid:[2,1]}]}),i.wall(-5,-1,-5,-4,{h:3}),i.wall(5,-4,5,-1,{h:3,openings:[{at:1.5,w:1,h:2.3,type:"door",swing:1,side:1}]}),i.wall(-5,-1,5,-1,{h:3,openings:[{at:2.5,w:1.4,h:2.4,type:"void"},{at:7.9,w:1,h:2.3,type:"door",swing:-1,side:-1}]}),i.glassWall(-5,4,5,4,{h:3,transom:2.6,rows:1,cols:1,panel:1.7,gaps:[{at:5,w:2.2}],park:1,frame:"steel"}),i.glassWall(-5,4,-5,-1,{h:3,transom:2.6,rows:1,cols:1,panel:1.7,gaps:[{at:2.6,w:1.6}],park:1}),i.glassWall(5,-1,5,4,{h:3,transom:2.6,rows:1,cols:1,panel:1.7,gaps:[{at:2.6,w:1.6}],park:1}),i.hipCeiling(-5,-4,5,4,{y:3,pitch:.55,spacing:.7,trusses:[],mat:"cedar",mat2:"cedarZ"}),i.hipRoof(-5,-4,5,4,{wallTop:3.38,pitch:.55,overhang:1.5,flare:.25,flareLen:1}),N(i,"rugRect",0,1.4,0,{w:3.2,d:2.6,collide:!1}),N(i,"bed",0,1.1,0,{base:"whitePaint",top:"teak",headboard:"teak",hbH:.95,seed:31,accent:Y.blush,throw:Y.cream,pillow2:Y.white,nsMat:"teak",h:.6}),N(i,"surfboard",0,-.9,0,{dy:2.05,L:2.3,tilt:_t/2,collide:!1,blob:!1}),N(i,"console",0,-.72,0,{w:1.9,collide:!0});for(const n of[-1.45,1.45])N(i,"pendant",n,.1,0,{top:4.6,drop:1.7,type:"capiz",r:.24,light:!1});for(const[n,s]of[[-4.45,3.86],[4.45,3.86]])N(i,"curtain",n,s,0,{w:1,h:2.6});N(i,"curtain",-4.86,.2,_t/2,{w:1,h:2.6}),N(i,"curtain",4.86,.2,-_t/2,{w:1,h:2.6}),N(i,"fanHousing",0,1.8,0,{top:4.4,drop:.5}),N(i,"sofa",3.8,1.3,-_t/2,{w:2.1,seats:2,color:Y.cream,pillows:[Y.teal,Y.blush],legs:!0}),N(i,"coffeeRound",2.55,1.4,0,{r:.4,base:"drum",baseMat:"teak",seed:8}),N(i,"plant",4.45,-.45,0,{type:"monstera",s:1,basket:!0,seed:71}),N(i,"armchair",-3.6,2.9,2.3,{mat:"rattan",color:Y.white,pillow:Y.teal}),N(i,"plant",-4.45,-.45,0,{type:"palm",s:1.1,potMat:"concreteDark",seed:72}),i.light({x:0,y:2.3,z:1.4,color:"#ffb46e",intensity:4.5,distance:9,kind:"lamp",prio:2}),i.light({x:3.4,y:2,z:1.2,color:"#ffb46e",intensity:2.5,distance:6,kind:"lamp",prio:1.2}),i.ceiling(-5,-4,5,-1,{y:2.7,mat:"soffitZ",layer:"roof"}),N(i,"kitchen",-2.7,-3.58,0,{len:3.4,front:"teakSlat",fridge:!1}),N(i,"fridge",-4.5,-1.7,_t/2,{mat:"chrome"}),N(i,"shower",4,-3.35,0,{w:1.2,d:1.1,floor:"stone"}),N(i,"vanity",1.4,-3.7,0,{w:1.2,sinks:1,mirrorFrame:"teak"}),N(i,"toilet",2.75,-3.6,0,{}),N(i,"towelRail",.25,-2.2,_t/2,{color:Y.white}),i.deck(-7,4,7,6.8,{y:-.02,ground:t,mat:"deck"}),i.deck(-7,-5.5,-5,4,{y:-.02,ground:t,mat:"deckZ"}),i.deck(5,-4,7,4,{y:-.02,ground:t,mat:"deckZ"}),i.rail([[-6.88,-5.5],[-7,-5.5],[-7,6.8],[7,6.8],[7,-4],[5.05,-4]],{y:-.02,type:"cable"}),i.rail([[-5.72,-5.5],[-5.05,-5.5],[-5.05,-4.05]],{y:-.02,type:"cable"});for(const n of[2.1,6.1])i.box(.12,2.3,.12,"teak",n,-.02,6.2),i.block(n,6.2,.2,.2);N(i,"hammock",4.1,6.2,0,{dy:1.45,L:3.4,W:1,sag:.7,collide:!1,blob:!1}),i.block(4.1,6.2,3.2,.9,0),N(i,"sideTable",-1.7,6.2,0,{top:"teak"}),N(i,"lounge",-3,5.7,.2,{color:Y.cream,pillow:Y.blush}),N(i,"outdoorShower",6.3,-2.6,-_t/2,{collide:!1}),nc(i,5.1,-.8,7,-.8,-.02,2.2,.09,"teak");const e=-2.8;i.stair(-6.3,-9.9,0,1.1,e,-.02,{type:"open",mat:"teak",stringer:"steel",rails:[-1,1],cables:!0,rise:.175}),i.slab(-7,-11.2,-5.6,-9.9,"stone",{y:e,th:.3}),Sr(i,-4.5,14,10,3),Sr(i,3.5,16,12,7),Sr(i,9.5,13,9,11),Sr(i,-10,11,9,13),i.light({x:3.5,y:2,z:5.6,color:"#ffb872",intensity:2.2,distance:7,kind:"garden",prio:1})}},F0=(i,t)=>-1.25-Math.max(0,t+6)*.1-Math.max(0,t-10)*.2+Math.sin(i*.25)*.15;function z0(i,t,e,n,s,o,r={}){const a=r.mirror?-1:1,l=(t+e)/2,c=a>0?e:t;i.slab(t,s,e,o,"hardwood"),i.slab(t,n,e,s,"microcement"),i.wall(t,s,e,s,{h:r.h,openings:[{at:(a>0?t+1:e-1)-t,w:1,h:2.4,type:"door",swing:a,side:-1}]}),i.wall(t,n,e,n,{h:r.h,openings:[{at:l-t,w:2.2,sill:1.2,h:1.2,type:"window",grid:[1,1],frame:"steel"}]}),i.wall(c,a>0?n:o,c,a>0?o:n,{h:r.h,openings:[{at:a>0?5.5:2.2,w:1.4,sill:.4,h:2.3,type:"window",grid:[1,2]}]}),i.frameless(t,o,e,o,{h:r.h,panel:2.1,gaps:[{at:(a>0?e-1.3:t+1.3)-t,w:1.6}]});const h=l+a*.3,u=s+.1+1.08;N(i,"bed",h,u,0,{seed:r.seed||5,accent:r.accent||Y.charcoal,throw:Y.stone,pillow2:Y.cream,nsMat:"walnut",base:"walnut",h:.6}),N(i,"art",h,s+.1,0,{dy:1.35,w:1.6,h:.9,mat:r.art||"art3",collide:!1,blob:!1}),N(i,"rugRect",h,u+1,0,{w:2.8,d:2,collide:!1}),N(i,"armchair",c-a*.7,o-1,-a*2.4,{mat:"rattan",color:Y.white,pillow:r.accent||Y.charcoal}),N(i,"plant",c-a*.45,u-.6,0,{type:"fiddle",s:1.1,potMat:"concreteDark",seed:81});for(const d of[t+.5,e-.5])N(i,"curtain",d,o-.14,0,{w:.8,h:r.h-.25});i.light({x:h,y:2.2,z:u+.7,color:"#ffb46e",intensity:3.2,distance:7,kind:"lamp",prio:1.1}),N(i,"vanity",c-a*1.4,s-.35,_t,{w:1.6,top:"counter",body:"walnut",mirrorFrame:"steel"}),N(i,"shower",(a>0?t:e)+a*.75,n+.65,a>0?0:_t,{w:1.3,d:1.1,floor:"slate"}),N(i,"toilet",c-a*.4,n+.5,-a*_t/2,{}),N(i,"towelRail",l+a*.2,n+.25,0,{color:Y.stone})}const db={key:"guanacaste",levels:[0],levelNames:["Ground"],site:{ground:F0,baseY:-2.5,dropZ:16,seed:33,palms:[[-15.5,7,11],[13.5,8,12],[4,14.5,9],[-11,14,10]],shrubs:[[-14.8,1,.9],[12.8,1,.9],[-8,-9.5,1],[6,-9.2,1],[-10,12.8,.9],[9,12.8,.9]]},overview:{target:[-1,-.8,1.5],dist:46,el:.66,az:_t+.6,tilt:.13,azPortrait:_t/2+.5,portraitDist:1.15},entryRoom:"living",rooms:[{id:"living",name:"Open living & kitchen",kind:"living",rect:[-7,-4,5,4],view:[-1.3,-3.4,8,-4]},{id:"bed1",name:"Bedroom I",kind:"bed",rect:[5,-1,11,4],view:[6.2,3.2,147,-6]},{id:"bath1",name:"Bath I",kind:"bath",rect:[5,-4,11,-1],view:[6,-1.5,150,-10],chip:!1,label:!1},{id:"bed2",name:"Bedroom II",kind:"bed",rect:[-13,-1,-7,4],view:[-8.2,3.2,-145,-6]},{id:"bath2",name:"Bath II",kind:"bath",rect:[-13,-4,-7,-1],view:[-8,-1.5,-150,-10],chip:!1,label:!1},{id:"gym",name:"Private gym",kind:"gym",rect:[-7,-8,-2.8,-4],view:[-3.6,-4.8,-120,-8]},{id:"bath3",name:"Bath III",kind:"bath",rect:[.2,-8,5,-4],view:[1,-6.2,110,-8],chip:!1,label:!1},{id:"entry",name:"Entry",kind:"path",rect:[-2.8,-8,.2,-4],view:[-1.3,-7.2,0,0],chip:!1,label:!1},{id:"terrace",name:"Terrace & pool",kind:"deck",rect:[-13.5,4,11.5,12],view:[1.4,5.6,-40,-8],labelAt:[3,1.3,8.5]}],stops:[{at:[-1.3,-7],look:[2,2],caption:"A tall teak pivot door beneath a laser-cut screen"},{at:[-.4,-2.9],look:[-26,-8],caption:"The pool runs from the terrace right into the living room"},{at:[.1,.3],look:[140,-10],caption:"Kitchen island, polished concrete and black track lights"},{at:[-4.3,-3.3],look:[-150,-6],caption:"A private gym behind glass"},{at:[2.6,3.4],via:!0},{at:[1.4,5.6],look:[-38,-9],hold:3.2,caption:"Terrace and pool beneath warm teak soffits"},{at:[6.4,4.8],via:!0},{at:[6.3,3.1],look:[147,-6],caption:"Bedroom I — floor-to-ceiling glass to the garden"},{at:[.9,10.9],look:[172,-3],hold:3.3,caption:"Terrace, pool and house — the pool glows under the glass at night"}],pools:[{x0:-6,z0:1.6,x1:-1,z1:11}],build(i){const t=F0,e=3.3,n=3.1;i.shapeSlab([[-7,-4],[5,-4],[5,4],[-1,4],[-1,1.6],[-6,1.6],[-6,4],[-7,4]],[],0,.3,"concrete"),i.walk(-7,-4,5,1.6),i.walk(-7,1.6,-6,4),i.walk(-1,1.6,5,4),i.slab(-7,-8,-2.8,-4,"concrete"),i.slab(-2.8,-8,.2,-4,"concrete"),i.slab(.2,-8,5,-4,"microcement"),i.plinth(-13.2,-8.2,11.2,4.2,-.3,-1.9,"stucco"),i.frameless(-7,-4,-2.8,-4,{h:e,gaps:[{at:3.4,w:1}]}),i.wall(-2.8,-4,5,-4,{h:e,openings:[{at:1.5,w:2.2,h:2.8,type:"void"}]}),i.wall(-7,4,-7,-4,{h:e,mat:"stucco",openings:[{at:4,w:1,h:2.4,type:"door",swing:-1,side:-1}]}),i.wall(5,-4,5,4,{h:e,mat:"stucco",openings:[{at:4,w:1,h:2.4,type:"door",swing:1,side:-1}]}),i.frameless(-7,4,-6,4,{h:e}),i.frameless(-6,4,-1,4,{y0:-.09,h:e+.09,panel:2.5}),i.frameless(-1,4,5,4,{h:e,panel:2,gaps:[{at:3.6,w:2}]}),i.wall(-7,-8,-7,-4,{h:e,mat:"stucco",openings:[{at:2,w:2,sill:.9,h:1.6,type:"window",grid:[1,1]}]}),i.wall(-7,-8,-2.8,-8,{h:e,mat:"stucco",openings:[{at:2.1,w:3,sill:.6,h:2.2,type:"window",grid:[2,1]}]}),i.wall(-2.8,-8,-2.8,-4,{h:e}),i.wall(-2.8,-8,.2,-8,{h:e,mat:"stucco",openings:[{at:1.5,w:1.5,h:3,type:"pivot",leaf:"teakSlat"}]}),i.wall(.2,-8,.2,-4,{h:e,openings:[{at:1.8,w:1,h:2.4,type:"door",swing:-1,side:1}]}),i.wall(.2,-8,5,-8,{h:e,mat:"stucco",openings:[{at:3.2,w:1.2,sill:1.5,h:.8,type:"window",grid:[2,1]}]}),i.wall(5,-8,5,-4,{h:e,mat:"stucco"}),z0(i,5,11,-4,-1,4,{mirror:!1,h:n,accent:Y.charcoal,art:"art3",seed:5}),z0(i,-13,-7,-4,-1,4,{mirror:!0,h:n,accent:Y.teal,art:"art2",seed:9}),i.roofSlab(-7.3,-8.3,5.3,7.6,{y:e,th:.26,mat:"stucco",soffit:"soffitZ"}),i.roofSlab(-13.4,-4.4,-7.05,5.3,{y:n,th:.24,mat:"stucco",soffit:"soffitZ"}),i.roofSlab(5.05,-4.4,11.4,5.3,{y:n,th:.24,mat:"stucco",soffit:"soffitZ"});for(const s of[-7.05,-.4,5.05])i.column(s,7.35,-.02,e,.16,"steel","L0");i.pool({shape:"rect",cx:-3.5,cz:6.3,w:5,d:9.4,y:.012,water:-.08,depth:1.3,floor:"sukabumi",wall:"sukabumi",coping:"stone",copingW:.4,infinity:"z1",noCoping:["z0"],drop:t(-3.5,12)-.4}),i.deck(-13.5,4,-6.4,12,{y:-.02,ground:t,mat:"deck"}),i.deck(-.6,4,11.5,12,{y:-.02,ground:t,mat:"deck"}),i.rail([[-13.5,4.1],[-13.5,12],[-6.4,12],[-6.4,11.4]],{y:-.02,type:"glass"}),i.rail([[-.6,11.4],[-.6,12],[11.5,12],[11.5,4.1]],{y:-.02,type:"glass"}),N(i,"rugRect",2.1,2,0,{w:3.4,d:2.5,mat:"jute",collide:!1}),N(i,"sofa",2.1,.95,0,{w:2.7,color:"#8e8a84",pillows:[Y.cream,Y.ochre,Y.stone],legs:!0,legMat:"steel"}),N(i,"coffeeRect",2.1,2.3,.05,{w:1.5,d:.75,slab:!0,seed:12}),N(i,"armchair",0,2.55,_t/2+.2,{mat:"rattan",color:Y.white,pillow:Y.ochre}),N(i,"plant",4.5,3.45,0,{type:"fiddle",s:1.2,potMat:"concreteDark",seed:82}),N(i,"plant",-6.5,-.2,0,{type:"monstera",s:1.2,basket:!0,seed:83}),N(i,"kitchen",2.3,-3.58,0,{len:3.4,front:"teakSlat",top:"counter"}),N(i,"island",2.3,-1.55,0,{len:2.4,body:"concreteDark",top:"counter",stools:3}),N(i,"diningTable",-3.9,-1.7,0,{len:2.4,wid:.95,chairs:6,seed:9,chair:{seat:"rattan",frame:"walnut"}});for(const s of[-.6,.6])N(i,"pendant",-3.9+s,-1.7,0,{top:e,drop:1.8,type:"globe",light:!1});N(i,"trackLights",2.3,-1.55,0,{y:e,L:3,collide:!1,blob:!1}),N(i,"trackLights",1.6,1.8,0,{y:e,L:4,collide:!1,blob:!1}),N(i,"trackLights",-3.9,.6,0,{y:e,L:3,collide:!1,blob:!1}),N(i,"console",-3,-3.7,0,{w:1.6}),N(i,"art",-6.9,-2,_t/2,{dy:1.2,w:1.3,h:1.1,mat:"art1",collide:!1,blob:!1}),i.light({x:2,y:2.4,z:1,color:"#ffb46e",intensity:5,distance:10,kind:"lamp",prio:1.9}),i.light({x:-3.9,y:2.2,z:-1.7,color:"#ffb46e",intensity:4,distance:8,kind:"lamp",prio:1.6}),N(i,"gym",-5.3,-6,0,{}),N(i,"bike",-3.6,-7.1,0,{}),N(i,"mirrorRound",-2.9,-6,-_t/2,{dy:1.5,r:.55,frame:"steel",collide:!1,blob:!1}),N(i,"plant",-6.5,-4.5,0,{type:"palm",s:1,potMat:"concreteDark",seed:84}),N(i,"vanity",2.2,-4.35,_t,{w:1.2,sinks:1,top:"counter",body:"walnut"}),N(i,"toilet",4.5,-5,-_t/2,{});for(const s of[1,1.72])i.rbox(.66,.85,.62,.02,"whitePaint",s,0,-7.6),i.block(s,-7.6,.66,.62);i.box(.3,.02,.3,"blackMatte",1,.86,-7.5),i.box(3.8,.12,2.2,"stucco",-1.3,3.15,-9.1,0,{layer:"roof"}),i.add(i.geo("glassq",()=>new ec),"screen",-3.9,1.6,-8.35,0,{sx:1.8,sy:3.2}),i.add(i.geo("glassq",()=>new ec),"screen",-1.3,3,-10.15,0,{rx:-_t/2,sx:3.6,sy:2,layer:"roof"}),i.slab(-2.9,-9.3,.3,-8,"concrete",{th:1.2}),i.stair(-1.3,-11,0,2.2,-1,0,{type:"stone",mat:"concrete",base:.3,rails:[]}),i.slab(-2.6,-12.8,0,-11,"concrete",{y:-1,th:.3}),N(i,"lounger",1.4,8.4,0,{color:Y.white,pillow:Y.ochre,towel:Y.stone}),N(i,"lounger",3.1,8.4,0,{color:Y.white,pillow:Y.stone}),N(i,"umbrella",5,8.6,0,{color:Y.cream}),N(i,"daybed",8.5,9,-.3,{}),N(i,"diningTable",-10.2,8,_t/2,{len:2.2,wid:.95,chairs:6,seed:14,chair:{seat:"rattan",frame:"teak"}}),N(i,"plant",-13,11.4,0,{type:"palm",s:1.1,potMat:"concreteDark",seed:85}),N(i,"plant",11,11.4,0,{type:"banana",s:1.1,potMat:"concreteDark",seed:86});for(const[s,o]of[[-9.5,11.8],[3.5,11.8],[9.5,11.8]])i.box(.08,2.9,.08,"steel",s,-.02,o),i.block(s,o,.14,.14);N(i,"stringLights",0,0,0,{a:[-7.05,3.2,7.35],b:[-9.5,2.85,11.8],sag:.45,collide:!1,blob:!1}),N(i,"stringLights",0,0,0,{a:[-.4,3.2,7.35],b:[3.5,2.85,11.8],sag:.45,collide:!1,blob:!1,light:!1}),N(i,"stringLights",0,0,0,{a:[5.05,3.2,7.35],b:[9.5,2.85,11.8],sag:.45,collide:!1,blob:!1,light:!1}),i.light({x:-3.5,y:-.75,z:6.5,color:"#5fe6e0",intensity:3.4,distance:9,kind:"pool",prio:2.2})}},N0=(i,t)=>-1.6-Math.max(0,t+8)*.14-Math.max(0,t-12)*.2+Math.sin(i*.2)*.3;function Tr(i,t){const{xs:e,xp:n,zc:s,zo:o,zBay:r,mir:a,flip:l}=t,c=Math.sign(o-s),h=Math.sign(n-e),u=e+h*2.8;i.wall(u,s,u,r,{h:3.1}),i.wall(e,r,u,r,{h:3.1,openings:[{at:Math.abs(u-e)-.8,w:.9,h:2.2,type:"door",swing:1,side:c*h<0?1:-1}]}),N(i,"vanity",e+h*1.35,s+c*.32,c>0?0:_t,{w:1.1,sinks:1,top:"counter",body:"walnut",mirrorFrame:"steel"}),N(i,"shower",e+h*.62,r-c*.6,0,{w:1,d:1,floor:"slate",glass:!1}),N(i,"toilet",u-h*.45,r-c*.45,h>0?-_t/2:_t/2,{});const d=(r+o)/2+c*.3;return N(i,"bed",n-h*1.2,d,h>0?-_t/2:_t/2,{seed:t.seed,accent:t.accent,throw:t.throw||Y.stone,pillow2:Y.cream,base:"walnut",nsMat:"walnut",headboard:"walnut",hbH:1.1,h:.6}),N(i,"art",n-h*.1,d,h>0?-_t/2:_t/2,{dy:1.55,w:1.5,h:.75,mat:t.art||"art1",collide:!1,blob:!1}),N(i,"armchair",e+h*.7,o-c*.8,h>0?2.2:-2.2,{mat:"rattan",color:Y.white,pillow:t.accent}),N(i,"plant",e+h*.45,d-c*.1,0,{type:"palm",s:.9,potMat:"concreteDark",seed:(t.seed||1)+40}),i.light({x:n-h*1.8,y:5.6,z:d,color:"#ffb46e",intensity:3,distance:7,kind:"lamp",prio:1.05}),{bedZ:d}}const fb={key:"ebony",levels:[0,3.6],levelNames:["Ground","Upper"],site:{ground:N0,baseY:-3.2,dropZ:18,seed:45,palms:[[-16,8,12],[17.5,15,11],[-15.5,-8,10],[6,19,10],[-10,19,12]],shrubs:[[-14.5,0,1],[-14,-5,.9],[14.5,-7,1],[8,-8.5,1],[-5,-8.5,1.1]]},overview:{target:[1.5,.5,3.5],dist:54,el:.62,az:_t+.65,tilt:.12,azPortrait:_t/2+.55,portraitDist:1.15},entryRoom:"great",rooms:[{id:"great",name:"Great room",kind:"living",rect:[-12,-6,-1,6],view:[-3.3,4,-132,6]},{id:"kitchen",name:"Kitchen & bar",kind:"kitchen",rect:[-1,-6,6,-1],view:[.3,1.2,155,-8]},{id:"dining",name:"Dining for ten",kind:"living",rect:[-1,-1,12,6],view:[.4,4.6,80,-8]},{id:"bath0",name:"Bath & outdoor shower",kind:"bath",rect:[6,-6,12,-1],view:[6.6,-1.9,130,-8],chip:!1,label:!1},{id:"pool",name:"Pool deck",kind:"deck",rect:[-14,6,13,16],view:[-2,8.4,5,-8],labelAt:[-3,1.3,12]},{id:"yoga",name:"Yoga deck",kind:"deck",rect:[13,7,18.5,13],y:-.35,view:[14.2,8,-20,-6]},{id:"mezz",name:"Mezzanine",kind:"living",level:1,rect:[-12,-6,-1,-3.6],view:[-6,-4.8,5,-18]},{id:"bed1",name:"Bedroom I",kind:"bed",level:1,rect:[-1,0,5.5,6],view:[2.2,1.2,40,-8]},{id:"bed2",name:"Bedroom II",kind:"bed",level:1,rect:[5.5,0,12,6],view:[8.8,1.2,-40,-8]},{id:"bed3",name:"Bedroom III",kind:"bed",level:1,rect:[-1,-6,5.5,-1.5],view:[2.2,-2.7,140,-8]},{id:"bed4",name:"Bedroom IV",kind:"bed",level:1,rect:[5.5,-6,12,-1.5],view:[8.8,-2.7,-140,-8]},{id:"hall",name:"Upper hall",kind:"path",level:1,rect:[-1,-1.5,12,0],view:[.2,-.75,90,-4],chip:!1,label:!1},{id:"sky",name:"Sky terrace",kind:"deck",level:1,rect:[12,-6,16.5,6],view:[13.6,1.2,-35,-6]}],stops:[{at:[-3.3,4],look:[-132,7],caption:"A double-height great room in steel, glass and slate"},{at:[.3,1.2],look:[155,-8],caption:"A wood bar, dark cabinetry and a table for ten"},{at:[-6,-4.8],level:1,look:[8,-16],caption:"Up the open stair to the mezzanine, under vaulted wood"},{at:[2.2,1.2],level:1,look:[40,-8],caption:"Four king suites upstairs, each with its own bath"},{at:[13.6,1.2],level:1,look:[-35,-4],caption:"The sky terrace, level with the jungle canopy"},{at:[6.2,8.4],look:[-52,-6],hold:3.3,caption:"An infinity pool on a wide timber deck — Nicoya beyond"}],pools:[{x0:-9.5,z0:10.2,x1:3.5,z1:13.8}],build(i){const t=N0,e=3.6;i.level=0,i.slab(-12,-6,12,6,"slate"),i.plinth(-12.2,-6.2,12.2,6.2,-.3,-3.6,"concreteDark"),i.glassWall(-12,6,-1,6,{h:3.35,rows:2,cols:1,panel:1.6,frame:"steelGrey",gaps:[{at:5.5,w:3}],park:1}),i.glassWall(-12,-6,-12,6,{h:3.35,rows:2,cols:1,panel:1.6,frame:"steelGrey"}),i.glassWall(-12,6,-1,6,{y0:3.6,h:3.4,rows:2,cols:1,panel:1.6,frame:"steelGrey"}),i.glassWall(-12,-6,-12,6,{y0:3.6,h:3.4,rows:2,cols:1,panel:1.6,frame:"steelGrey"}),i.wall(-12,-6,-1,-6,{h:7}),i.box(4.6,3.1,.06,"corten",-7.3,.55,-5.87),i.wall(-1,-6,6,-6,{h:3.3,openings:[{at:5.6,w:1.4,sill:1.2,h:1,type:"window",grid:[2,1],frame:"steelGrey"}]}),i.wall(6,-6,6,-1,{h:3.3,openings:[{at:4,w:1,h:2.3,type:"door",swing:1,side:-1}]}),i.wall(6,-1,12,-1,{h:3.3}),i.wall(6,-6,12,-6,{h:3.3,openings:[{at:4.4,w:1,h:2.3,type:"door",swing:1,side:1}]}),i.wall(12,-6,12,-1,{h:3.3,openings:[{at:2.5,w:1.2,sill:1.5,h:.8,type:"window",grid:[2,1],frame:"steelGrey"}]}),i.glassWall(-1,6,12,6,{h:3.3,rows:2,cols:1,panel:1.6,frame:"steelGrey",gaps:[{at:6.5,w:2.4}],park:-1}),i.glassWall(12,-1,12,6,{h:3.3,rows:2,cols:1,panel:1.6,frame:"steelGrey"}),i.slab(7,-8.4,11,-6,"stone",{th:.2}),i.wall(7,-8.4,11,-8.4,{h:2.3,mat:"plasterGrey",ao:!1}),i.wall(7,-8.4,7,-6,{h:2.3,mat:"plasterGrey",ao:!1}),i.wall(11,-8.4,11,-6,{h:2.3,mat:"plasterGrey",ao:!1}),N(i,"outdoorShower",9.6,-8.05,0,{collide:!1}),N(i,"plant",7.6,-7.8,0,{type:"banana",s:1.1,pot:!1,seed:91}),N(i,"vanity",9,-1.35,_t,{w:1.4,sinks:1,top:"counter",body:"walnut",mirrorFrame:"steel"}),N(i,"toilet",11.5,-2.6,-_t/2,{}),N(i,"towelRail",11.8,-4.4,-_t/2,{color:Y.white}),N(i,"rugRound",-7.4,1.7,0,{r:2,collide:!1}),N(i,"sectional",-7.8,.25,0,{w:3.8,w2:2.6,color:Y.white}),N(i,"coffeeRound",-7.6,1.9,.4,{r:.65,base:"drum",baseMat:"walnut",seed:15}),N(i,"armchair",-10.7,2.4,_t/2+.3,{mat:"rattan",color:Y.white,pillow:Y.rust}),N(i,"armchair",-10.6,.6,_t/2-.2,{mat:"rattan",color:Y.white,pillow:Y.sand}),N(i,"sideTable",-11.3,1.5,0,{lamp:{},light:!1});for(const n of[-10.6,-4])N(i,"sunburst",n,-5.9,0,{dy:1.9,R:.6,collide:!1,blob:!1});N(i,"console",-7.3,-5.62,0,{w:2.2}),N(i,"plant",-11.35,-5.3,0,{type:"palm",s:1.5,potMat:"concreteDark",seed:92}),N(i,"plant",-11.35,5.35,0,{type:"monstera",s:1.3,basket:!0,seed:93}),N(i,"floorLamp",-4.4,-1.4,0,{light:!1}),N(i,"fanHousing",-7.4,1.4,0,{top:8.3,drop:2}),i.light({x:-7.4,y:2.8,z:1.5,color:"#ffb46e",intensity:6,distance:12,kind:"lamp",prio:1.9}),N(i,"kitchen",2.1,-5.58,0,{len:4.4,front:"walnut",top:"counter",fridge:!0,fridgeMat:"chrome"}),N(i,"island",2.2,-3,0,{len:3,body:"walnut",top:"liveEdge",stools:4}),N(i,"diningTable",5.6,2.6,0,{len:4.4,wid:1.05,chairs:10,seed:17,chair:{seat:"rattan",frame:"walnut"}});for(const n of[-1.3,0,1.3])N(i,"pendant",5.6+n,2.6,0,{top:3.3,drop:2.2,type:"rattan",r:.26,light:n===0,intensity:5,prio:2});N(i,"plant",11.4,5.4,0,{type:"fiddle",s:1.2,potMat:"concreteDark",seed:94}),N(i,"shelf",11.75,2.2,-_t/2,{w:1.4,h:2}),i.stair(-1.65,5.2,_t,1.1,0,e,{type:"open",mat:"teak",stringer:"steelGrey",rails:[-1,1],cables:!0,railMat:"steelGrey",rise:.18,run:.27});for(const n of[-12,-8,-4,-1,3,7,12])for(const s of[-6,6])i.box(.2,7.3,.2,"steelGrey",n,0,s+(s>0?.1:-.1),0,{layer:"L0"});for(const n of[-2,2])for(const s of[-12,12])i.box(.2,7.3,.2,"steelGrey",s+(s>0?.1:-.1),0,n,0,{layer:"L0"});for(const n of[3.35,7])i.box(24.4,.26,.22,"steelGrey",0,n,6.12,0,{layer:n>5?"roof":"L0"}),i.box(24.4,.26,.22,"steelGrey",0,n,-6.12,0,{layer:n>5?"roof":"L0"}),i.box(.22,.26,12.2,"steelGrey",-12.12,n,0,0,{layer:n>5?"roof":"L0"}),i.box(.22,.26,12.2,"steelGrey",12.12,n,0,0,{layer:n>5?"roof":"L0"});i.level=1,i.slab(-12,-6,-1,-3.6,"hardwood",{under:"soffitZ",th:.3}),i.slab(-2.4,-3.6,-1,-.2,"hardwood",{under:"soffitZ",th:.3}),i.slab(-1,-6,12,6,"hardwood",{under:"soffitZ",th:.3}),i.rail([[-12,-3.6],[-2.4,-3.6],[-2.4,-.2],[-2.2,-.2]],{type:"glass",post:"steelGrey"}),N(i,"lounge",-9.8,-4.9,.25,{color:Y.cream,pillow:Y.rust}),N(i,"lounge",-8.2,-4.9,-.1,{color:Y.cream,pillow:Y.sand}),N(i,"shelf",-4.6,-5.72,0,{w:1.6,h:2.2}),N(i,"sideTable",-9,-5.5,0,{lamp:{},light:!1}),i.light({x:-6.5,y:5.6,z:-4.8,color:"#ffb46e",intensity:3,distance:8,kind:"lamp",prio:1}),i.wall(-1,-6,-1,6,{h:3.4,openings:[{at:5.25,w:1.5,h:2.4,type:"void"}]}),i.wall(-1,-1.5,12,-1.5,{h:3.4,openings:[{at:4.6,w:1,h:2.3,type:"door",swing:1,side:1},{at:7.4,w:1,h:2.3,type:"door",swing:-1,side:1}]}),i.wall(-1,0,12,0,{h:3.4,openings:[{at:4.6,w:1,h:2.3,type:"door",swing:1,side:-1},{at:7.4,w:1,h:2.3,type:"door",swing:-1,side:-1}]}),i.wall(5.5,0,5.5,6,{h:3.4}),i.wall(5.5,-6,5.5,-1.5,{h:3.4}),i.glassWall(-1,6,12,6,{h:3.4,rows:2,cols:1,panel:1.6,frame:"steelGrey"}),i.wall(-1,-6,12,-6,{h:3.4,openings:[{at:3.3,w:2,sill:.8,h:1.7,type:"window",grid:[2,2],frame:"steelGrey"},{at:9.7,w:2,sill:.8,h:1.7,type:"window",grid:[2,2],frame:"steelGrey"}]}),i.wall(12,-6,12,6,{h:3.4,openings:[{at:5.25,w:1.1,h:2.4,type:"door",swing:1,side:1},{at:2,w:1.6,sill:.8,h:1.7,type:"window",grid:[2,2],frame:"steelGrey"},{at:9.2,w:1.6,sill:.6,h:2,type:"window",grid:[2,2],frame:"steelGrey"}]}),i.ceiling(-1,-6,12,6,{y:e+3.1,mat:"soffitZ"}),Tr(i,{xs:-1,xp:5.5,zc:0,zo:6,zBay:2.6,seed:3,accent:Y.rust,art:"art1"}),Tr(i,{xs:12,xp:5.5,zc:0,zo:6,zBay:2.6,seed:7,accent:Y.teal,art:"art2"}),Tr(i,{xs:-1,xp:5.5,zc:-1.5,zo:-6,zBay:-4.1,seed:11,accent:Y.olive,art:"art3"}),Tr(i,{xs:12,xp:5.5,zc:-1.5,zo:-6,zBay:-4.1,seed:13,accent:Y.terracotta,art:"art1"}),N(i,"console",1,-.28,_t,{w:1.1,h:.5}),i.hipCeiling(-12,-6,-1,6,{y:7,pitch:.3,mat:"soffit",mat2:"soffitZ",rafterMat:"walnut",spacing:1}),i.hipRoof(-12,-6,12,6,{wallTop:7.3,pitch:.3,overhang:1.5,flare:.12,flareLen:1,mat:"metalRoof",soffit:"soffit",fascia:"steelGrey",cap:"steelGrey"}),i.thatch(-12.25,-6.25,12.25,6.25,{y:3.62,drop:.75,out:.7,layers:2,layer:"L1"}),i.deck(12,-6,16.5,6,{y:e,ground:t,mat:"deckZ"}),i.rail([[12.2,-6],[16.5,-6],[16.5,6],[16.2,6]],{y:e,type:"cable"}),i.rail([[12.2,6],[15.1,6]],{y:e,type:"cable"}),N(i,"lounger",14.6,-2.6,.2,{color:Y.white,stripe:Y.navy,pillow:Y.sand}),N(i,"lounger",14.6,.2,.2,{color:Y.white,stripe:Y.navy,pillow:Y.rust}),N(i,"plant",16,-5.4,0,{type:"palm",s:1.1,potMat:"concreteDark",seed:95}),i.level=0,i.stair(15.65,11.2,_t,1,-.35,e,{type:"open",mat:"teak",stringer:"steelGrey",rails:[1],cables:!0,railMat:"steelGrey",rise:.18,run:.27,open:[]}),i.deck(-14,6,13,9.8,{y:-.02,ground:t,mat:"deck"}),i.deck(-14,9.8,-9.9,16,{y:-.02,ground:t,mat:"deck"}),i.deck(3.9,9.8,13,16,{y:-.02,ground:t,mat:"deck"}),i.deck(12.2,-6,13,6,{y:-.02,ground:t,mat:"deckZ"}),i.pool({shape:"rect",cx:-3,cz:12,w:13,d:3.6,y:-.02,water:-.1,depth:1.3,floor:"sukabumi",wall:"sukabumi",coping:"stone",copingW:.4,infinity:"z1",drop:t(-3,15)-.4}),i.deck(13,7,18.5,13,{y:-.35,ground:t,mat:"deckZ"}),N(i,"yoga",17.4,9.6,_t/2,{n:2,y:-.35});for(const[n,s]of[-8.6,-6.8,-5,-.4].entries())N(i,"lounger",s,8,0,{color:Y.white,stripe:n%2?Y.navy:Y.teal,pillow:Y.sand,towel:n===1?Y.white:void 0});N(i,"umbrella",-3.2,8.2,0,{color:Y.cream}),N(i,"bbq",11.6,7.6,-_t/2,{}),N(i,"daybed",8,12.6,.2,{}),N(i,"plant",-13.4,15.3,0,{type:"banana",s:1.2,potMat:"concreteDark",seed:96}),i.rail([[-14,6.1],[-14,16],[-9.9,16],[-9.9,14.3]],{y:-.02,type:"cable"}),i.rail([[3.9,14.3],[3.9,16],[13,16],[13,13]],{y:-.02,type:"cable"}),i.rail([[13,13],[18.5,13],[18.5,7],[16.2,7]],{y:-.35,type:"cable"}),i.rail([[13.2,7],[15.1,7]],{y:-.35,type:"cable"}),i.light({x:-3,y:-.75,z:12,color:"#5fe6e0",intensity:3.6,distance:10,kind:"pool",prio:2.2}),i.light({x:5.6,y:2.3,z:8.5,color:"#ffb872",intensity:3,distance:9,kind:"garden",prio:1.2})}},O0=(i,t)=>-.9-Math.max(0,t-4)*.12-Math.max(0,t-14)*.18+Math.sin(i*.3)*.12-Math.max(0,-i-12)*.05,pb={key:"ivy",levels:[0,3.4,6.8],levelNames:["Ground","Level 2","Level 3"],site:{ground:O0,baseY:-2,dropZ:14,seed:77,palms:[[-13,9,12],[11,9,13],[10,-8,10],[-14,-8,11],[2,13.5,10]],shrubs:[[-12.5,2,.9],[9.8,2,.9],[-4,-8,1],[4,-8,1]],clear:14},overview:{target:[-1.5,2.2,1.5],dist:44,el:.62,az:_t+.62,tilt:.12,azPortrait:_t/2+.5,portraitDist:1.2},entryRoom:"living",rooms:[{id:"living",name:"Loft living",kind:"living",rect:[-6,0,1,6],view:[.4,4.9,-122,12]},{id:"kitchen",name:"Kitchen & dining",kind:"kitchen",rect:[1,0,6,6],view:[1.6,5,140,-8]},{id:"bed1",name:"Bedroom I",kind:"bed",rect:[-6,-6,-.5,0],view:[-4.8,-.9,124,-6]},{id:"bath1",name:"Bath I",kind:"bath",rect:[-.5,-6,2.5,-2.5],view:[1,-3.1,180,-10],chip:!1,label:!1},{id:"stair",name:"Stair",kind:"path",rect:[2.5,-6,6,0],view:[4.3,.6,180,10],chip:!1,label:!1,prio:-1},{id:"pool",name:"Plunge pool deck",kind:"pool",rect:[-11,-6,-6,6],view:[-6.8,1.2,-150,-14]},{id:"terrace",name:"Terrace",kind:"deck",rect:[-11,6,9,10],view:[-2.5,7.4,10,-4]},{id:"bridge",name:"Floating corridor",kind:"path",level:1,rect:[-6,0,1,1.2],view:[-2.6,.6,58,-20],labelAt:[-2.5,5.4,.6]},{id:"mezz",name:"Mezzanine lounge",kind:"living",level:1,rect:[1,0,6,6],view:[4.6,1.2,-60,-10]},{id:"bed2",name:"Bedroom II",kind:"bed",level:1,rect:[-6,-6,-.5,0],view:[-4.8,-.9,124,-6]},{id:"bath2",name:"Bath II",kind:"bath",level:1,rect:[-.5,-6,2.5,-2.5],view:[.9,-2.85,-160,-12],chip:!1,label:!1},{id:"bed3",name:"Bedroom III",kind:"bed",level:2,rect:[-6,-6,4.5,0],view:[1.8,-.9,-150,-6]},{id:"roof",name:"Roof deck",kind:"deck",level:2,rect:[-6,0,6,6],view:[.4,3.6,0,-8]}],stops:[{at:[.4,4.9],look:[-122,14],caption:"A New York loft in the jungle — brick, steel and 180° glass"},{at:[-4.8,-.9],look:[124,-6],caption:"Bedroom I — brick behind the bed, glass to the plunge pool"},{at:[-2.6,.6],level:1,look:[58,-20],caption:"The floating corridor, above the double-height living room"},{at:[.4,3.4],level:2,look:[0,-7],hold:3.1,caption:"The roof deck beneath the pyramid roof — jungle and Pacific"},{at:[1.8,-.9],level:2,look:[-150,-6],hold:3.1,caption:"Bedroom III, the top-floor suite"}],pools:[{x0:-10.2,z0:-4.6,x1:-7.4,z1:-.6}],build(i){const t=O0,e=3.4,n=6.8,s=3.4,o=(r,a,l,c)=>i.box(.18,c-l,.18,"steel",r,l,a,0,{layer:"L0"});i.level=0,i.slab(-6,-6,6,6,"hardwood"),i.plinth(-6.1,-6.1,6.1,6.1,-.3,-1.6,"concreteDark"),i.glassWall(-6,6,1,6,{h:3.25,rows:2,cols:1,panel:1.4,gaps:[{at:3.5,w:2.2}],park:1}),i.glassWall(-6,6,1,6,{y0:e+.05,h:3.05,rows:2,cols:1,panel:1.4}),i.glassWall(-6,0,-6,6,{h:3.25,rows:2,cols:1,panel:1.5}),i.glassWall(-6,0,-6,6,{y0:e+.05,h:3.05,rows:2,cols:1,panel:1.5}),i.box(7.1,.2,.2,"steel",-2.5,3.25,6.02,0,{layer:"L0"}),i.box(.2,.2,6.1,"steel",-6.02,3.25,3,0,{layer:"L0"}),i.glassWall(1,6,6,6,{h:3.1,rows:2,cols:1,panel:1.3,gaps:[{at:3,w:1.8}],park:-1}),i.wall(6,6,6,0,{h:s}),i.wall(-6,0,-.5,0,{h:s,mat:"brick",matB:"plaster"}),i.wall(-.5,0,-.5,-6,{h:s,mat:"plaster",matB:"brick",openings:[{at:1.2,w:1,h:2.3,type:"door",swing:-1,side:1}]}),i.wall(-.5,-2.5,2.5,-2.5,{h:s,openings:[{at:1.5,w:1,h:2.3,type:"door",swing:1,side:-1}]}),i.wall(2.5,0,2.5,-6,{h:s}),i.wall(-6,-6,6,-6,{h:s,openings:[{at:2.8,w:1.8,sill:.9,h:1.5,type:"window",grid:[3,2]},{at:7,w:1,sill:1.5,h:.8,type:"window",grid:[2,1]}]}),i.glassWall(-6,-6,-6,0,{h:s-.2,rows:2,cols:1,panel:1.5,gaps:[{at:4.4,w:1.6}],park:-1}),i.wall(6,-6,6,0,{h:s,openings:[{at:3,w:.9,sill:.4,h:2.6,type:"window",grid:[1,3]}]}),i.stair(3.35,-.4,_t,1.1,0,e,{type:"open",mat:"walnut",stringer:"steel",rails:[-1],cables:!1,railMat:"steel",rise:.179,run:.25}),N(i,"rugRound",-2.6,3.2,0,{r:1.9,mat:"jute",collide:!1}),N(i,"sofa",-2.6,1.55,0,{w:2.6,color:Y.cream,pillows:[Y.rust,Y.sand,Y.stone],legs:!0,legMat:"steel"}),N(i,"coffeeRect",-2.6,3,0,{w:1.2,d:.7,mat:"concreteDark"}),N(i,"lounge",-4.7,3.7,1.15,{mat:"rattanWhite",color:Y.white,pillow:Y.rust}),N(i,"lounge",-1,4.5,-1.2,{mat:"rattanWhite",color:Y.white,pillow:Y.sand}),N(i,"sunburst",-1.2,.12,0,{dy:2.3,R:.65,collide:!1,blob:!1}),N(i,"macrame",-4.4,.12,0,{dy:2.5,collide:!1,blob:!1}),N(i,"plant",-5.4,5.4,0,{type:"fiddle",s:1.4,potMat:"concreteDark",seed:101}),N(i,"plant",.5,.6,0,{type:"monstera",s:1.1,basket:!0,seed:102});for(const[r,a]of[[-3.8,3.2],[-1.4,3.2]])N(i,"pendant",r,a,0,{top:n-.3,drop:2.9,type:"rattan",r:.34,light:!1});i.light({x:-2.6,y:2.6,z:3.1,color:"#ffb46e",intensity:5.5,distance:11,kind:"lamp",prio:1.9}),N(i,"kitchen",5.58,2.6,-_t/2,{len:3.4,front:"walnut",top:"counter",fridge:!0,fridgeMat:"blackMatte"}),N(i,"diningTable",3,3,_t/2,{len:2.2,wid:.95,chairs:6,seed:23,chair:{seat:"rattan",frame:"steel"}}),N(i,"pendant",3,3,0,{top:3.1,drop:2,type:"dome",light:!0,intensity:4,prio:1.6}),N(i,"bed",-1.68,-3.1,-_t/2,{seed:27,accent:Y.rust,throw:Y.charcoal,pillow2:Y.stone,base:"walnut",nsMat:"walnut",h:.6}),N(i,"armchair",-5.2,-5.2,.8,{mat:"rattanWhite",color:Y.white,pillow:Y.rust}),N(i,"plant",-5.4,-.6,0,{type:"palm",s:1,potMat:"concreteDark",seed:103}),N(i,"rugRect",-2.9,-3.1,_t/2,{w:2.6,d:2,collide:!1}),i.light({x:-2.8,y:2.2,z:-3,color:"#ffb46e",intensity:3,distance:7,kind:"lamp",prio:1.1}),N(i,"vanity",1,-5.65,0,{w:1.3,sinks:1,top:"counter",body:"walnut",mirrorFrame:"steel"}),N(i,"shower",2,-3.4,_t,{w:.9,d:1,floor:"slate"}),N(i,"toilet",-.1,-4.3,_t/2,{});for(const r of[-6.08,0,6.08])for(const a of[-6.08,6.08])o(r,a,0,10.2);for(const r of[0])for(const a of[-6.08,6.08])o(a,r,0,10.2);i.thatch(-6.2,-6.2,6.2,6.2,{y:e+.08,drop:.7,out:.7,layers:2,layer:"L1"}),i.thatch(-6.2,-6.2,6.2,6.2,{y:n+.08,drop:.7,out:.7,layers:2,layer:"L2"}),i.level=1,i.slab(-6,-6,2.5,0,"hardwood",{under:"soffitZ"}),i.slab(3.9,-6,6,0,"hardwood",{under:"soffitZ"}),i.slab(2.5,-6,3.9,-5.15,"hardwood",{under:"soffitZ"}),i.slab(1,0,6,6,"hardwood",{under:"soffitZ"}),i.slab(-6,0,1,1.2,"hardwood",{under:"soffitZ",th:.22}),i.rail([[1,6],[1,1.2],[-6,1.2]],{type:"glass",post:"steel",top:"steel"}),i.rail([[3.95,-5.15],[3.95,0]],{type:"steel",post:"steel",top:"steel"}),i.wall(-6,0,-.5,0,{h:s-.3,mat:"brick",matB:"plaster",openings:[{at:3,w:1,h:2.3,type:"door",swing:1,side:-1}]}),i.wall(-.5,0,-.5,-6,{h:s-.3,mat:"plaster",matB:"brick"}),i.wall(-.5,-2.5,2.5,-2.5,{h:s-.3,openings:[{at:1.5,w:1,h:2.3,type:"door",swing:1,side:-1}]}),i.wall(2.5,0,2.5,-6,{h:s-.3}),i.wall(-6,-6,6,-6,{h:s-.3,openings:[{at:2.8,w:1.8,sill:.9,h:1.5,type:"window",grid:[3,2]}]}),i.glassWall(-6,-6,-6,0,{h:s-.3,rows:2,cols:1,panel:1.5}),i.wall(6,-6,6,0,{h:s-.3,openings:[{at:3,w:.9,sill:.4,h:2.4,type:"window",grid:[1,3]}]}),i.glassWall(6,0,6,6,{h:s-.3,rows:2,cols:1,panel:1.5}),i.glassWall(1,6,6,6,{h:s-.3,rows:2,cols:1,panel:1.3}),i.stair(5.25,-5.15,0,1.1,e,n,{type:"open",mat:"walnut",stringer:"steel",rails:[-1,1],railMat:"steel",rise:.179,run:.25}),N(i,"armchair",-5.2,.62,_t/2,{mat:"rattanWhite",color:Y.white,pillow:Y.sand,h:.9}),N(i,"lounge",2.6,3.2,-.8,{mat:"rattan",color:Y.cream,pillow:Y.rust}),N(i,"lounge",2.4,4.9,-1.9,{mat:"rattan",color:Y.cream,pillow:Y.teal}),N(i,"coffeeRect",3.8,4.2,.3,{w:.9,d:.6,mat:"concreteDark"}),N(i,"shelf",5.72,3.2,-_t/2,{w:1.8,h:2.3});for(const r of[1.2,5.3])i.rbox(.28,1.1,.3,.02,"blackMatte",5.6,e,r),i.block(5.6,r,.3,.32,0,e,e+1);N(i,"rugRect",3.6,4,.3,{w:2.4,d:1.8,collide:!1}),i.light({x:3.6,y:e+2.2,z:3.6,color:"#ffb46e",intensity:3.2,distance:8,kind:"lamp",prio:1.4}),N(i,"bed",-1.68,-3.1,-_t/2,{seed:29,accent:Y.teal,throw:Y.sand,pillow2:Y.cream,base:"walnut",nsMat:"walnut",h:.6}),N(i,"dresser",-3.6,-5.62,0,{w:1.4}),N(i,"sunburst",-3.6,-5.9,0,{dy:1.75,R:.5,collide:!1,blob:!1}),N(i,"plant",-5.4,-.6,0,{type:"fiddle",s:.95,potMat:"concreteDark",seed:104}),i.light({x:-2.8,y:e+2.1,z:-3,color:"#ffb46e",intensity:3,distance:7,kind:"lamp",prio:1.05}),N(i,"vanity",1,-5.65,0,{w:1.3,sinks:1,top:"counter",body:"walnut",mirrorFrame:"steel"}),N(i,"bathtub",1.35,-4.15,0,{L:1.6,W:.74}),N(i,"toilet",-.1,-4.4,_t/2,{}),i.level=2,i.slab(-6,-6,4.5,0,"hardwood",{under:"soffitZ"}),i.slab(4.5,-.4,6,0,"hardwood",{under:"soffitZ"}),i.slab(-6,0,6,6,"deckZ",{under:"soffitZ"}),i.glassWall(-6,0,4.5,0,{h:s,rows:2,cols:1,panel:1.5,gaps:[{at:4.5,w:2}],park:1}),i.wall(4.5,0,4.5,-6,{h:s}),i.wall(-6,-6,6,-6,{h:s,mat:"brick",matB:"plaster",openings:[{at:9.5,w:1.2,sill:1,h:1.3,type:"window",grid:[2,2]}]}),i.glassWall(-6,-6,-6,0,{h:s,rows:2,cols:1,panel:1.5}),i.wall(6,-6,6,-.4,{h:s}),i.rail([[6,-.4],[6,6],[-6,6],[-6,.05]],{type:"cable"}),i.hipCeiling(-6,-6,6,6,{y:n+s,pitch:.55,mat:"soffit",mat2:"soffitZ",rafterMat:"steel",spacing:1.2}),i.hipRoof(-6,-6,6,6,{wallTop:n+s+.3,pitch:.55,overhang:1.4,flare:.05,mat:"metalRoof",soffit:"soffit",fascia:"steel",cap:"steel"}),N(i,"bed",.2,-4.84,0,{seed:31,accent:Y.ochre,throw:Y.stone,pillow2:Y.white,base:"walnut",nsMat:"walnut",headboard:"walnut",hbH:1.2,h:.6}),N(i,"art",.2,-5.88,0,{dy:1.6,w:1.6,h:.9,mat:"art3",collide:!1,blob:!1}),N(i,"armchair",-4.8,-1.2,2.3,{mat:"rattanWhite",color:Y.white,pillow:Y.ochre}),N(i,"plant",3.9,-5.4,0,{type:"monstera",s:1,basket:!0,seed:105}),N(i,"rugRect",.2,-2.9,0,{w:3,d:2.2,collide:!1}),i.light({x:.2,y:n+2.2,z:-3.2,color:"#ffb46e",intensity:3,distance:8,kind:"lamp",prio:1.1}),N(i,"lounger",-3.8,3.4,0,{color:Y.white,pillow:Y.rust,y:n}),N(i,"lounger",-2.1,3.4,0,{color:Y.white,pillow:Y.sand,y:n}),N(i,"daybed",3.4,4.6,0,{y:n}),N(i,"plant",5.3,1,0,{type:"palm",s:1.1,potMat:"concreteDark",seed:106,y:n}),N(i,"plant",-5.4,5.4,0,{type:"banana",s:1,potMat:"concreteDark",seed:107,y:n}),i.level=0,i.deck(-11,6,9,10,{y:-.02,ground:t,mat:"deck"}),i.deck(6,-6,9,6,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-11,-6,-6,-4.9,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-11,-.3,-6,6,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-11,-4.9,-10.5,-.3,{y:-.02,ground:t,mat:"deckZ"}),i.deck(-7.1,-4.9,-6,-.3,{y:-.02,ground:t,mat:"deckZ"}),i.pool({shape:"rect",cx:-8.8,cz:-2.6,w:2.8,d:4,y:-.02,water:-.1,depth:1.2,floor:"sukabumi",wall:"sukabumi",coping:"stone",copingW:.3}),i.rail([[-11,-6],[-11,10],[9,10],[9,-6],[6.05,-6]],{y:-.02,type:"cable"}),i.rail([[-6.05,-6],[-11,-6]],{y:-.02,type:"cable"}),N(i,"lounger",-9.3,2.5,_t,{color:Y.white,pillow:Y.rust,towel:Y.charcoal}),N(i,"lounger",-7.6,2.5,_t,{color:Y.white,pillow:Y.sand}),N(i,"diningTable",4.5,8,0,{len:2.2,wid:.95,chairs:6,seed:33,chair:{seat:"rattan",frame:"teak"}}),N(i,"umbrella",1.6,8.3,0,{color:Y.cream}),N(i,"plant",-10.4,9.4,0,{type:"palm",s:1.2,potMat:"concreteDark",seed:108}),i.light({x:-8.8,y:-.75,z:-2.6,color:"#5fe6e0",intensity:2.8,distance:7,kind:"pool",prio:2.1}),i.light({x:0,y:n+2.4,z:3,color:"#ffb872",intensity:3.2,distance:9,kind:"garden",prio:1})}},kc={harmony:cb,ebony:fb,ivory:ub,guanacaste:db,ivy:pb,studio54:hb},el=(i,t)=>new D(Math.sin(i)*Math.cos(t),Math.sin(t),Math.cos(i)*Math.cos(t)),G0=[{sunDir:el(-.75,.98),sunCol:"#fff3e2",sunI:3.1,hemiSky:"#cfe1f2",hemiGround:"#b89a72",hemiI:.75,zenith:"#3f7cc2",horizon:"#c6dcea",haze:"#e3ecef",below:"#8fb0c0",cloudLit:"#ffffff",cloudDark:"#b9c6d2",cloud:.8,deep:"#1a5a74",oceanSky:"#9cc4dc",sunSize:6e-4,glow:.35,stars:0,env:.6,exposure:1,lamps:0,night:0,fog:"#cfdde6",fogD:9e-4,caustic:1,bounce:1},{sunDir:el(.38,.15),sunCol:"#ffb06a",sunI:3.3,hemiSky:"#aebccd",hemiGround:"#94704f",hemiI:.55,zenith:"#50709c",horizon:"#f7ae76",haze:"#fbc690",below:"#b78a70",cloudLit:"#ffc68c",cloudDark:"#8a6a78",cloud:1,deep:"#2b4658",oceanSky:"#f1b486",sunSize:9e-4,glow:1,stars:0,env:.5,exposure:1,lamps:.32,night:0,fog:"#e7b48c",fogD:.0011,caustic:.8,bounce:1},{sunDir:el(-.9,.62),sunCol:"#8da9ff",sunI:.42,hemiSky:"#34466a",hemiGround:"#1c150d",hemiI:.45,zenith:"#03081a",horizon:"#0f1c34",haze:"#1a2842",below:"#070c16",cloudLit:"#3c4a6e",cloudDark:"#0b1222",cloud:.6,deep:"#040b16",oceanSky:"#16243e",sunSize:4e-4,glow:.2,stars:1,env:.4,exposure:1.12,lamps:1,night:1,fog:"#0c1526",fogD:.0012,caustic:0,bounce:.4}].map(i=>{const t={};for(const[e,n]of Object.entries(i))t[e]=typeof n=="string"?new ut(n):n;return t});function pd(i){i=Math.min(2,Math.max(0,i));const t=Math.min(1,Math.floor(i)),e=i-t,n=G0[t],s=G0[t+1],o=e*e*(3-2*e),r={};for(const a of Object.keys(n)){const l=n[a],c=s[a];l.isColor?r[a]=l.clone().lerp(c,o):l.isVector3?r[a]=l.clone().lerp(c,o).normalize():r[a]=l+(c-l)*o}if(i>1){const a=Math.min(1,(i-1)*2.2);r.sunDisc=1-a}else r.sunDisc=1;return r}const H0="./people/";let Qi=null,Er=null;const Zr=new Map;function Fc(){return Er||(Er=(async()=>{Qi=await(await fetch(`${H0}people.json`)).json();const i=new Set;for(const t of Object.values(Qi.bodies))for(const e of Object.values(t.lods))i.add(e);for(const t of Object.values(Qi.hair))i.add(t);return await Promise.all([...i].map(async t=>{const e=await(await fetch(`${H0}${t.file}`)).arrayBuffer();Zr.set(t.file,gb(e,t))})),Qi})(),Er)}const mb=()=>!!Qi&&Zr.size>0;function gb(i,t){const e=t.verts,n=t.tris;let s=0;const o=new Int16Array(i,s,e*3);s+=e*6;const r=new Int8Array(i,s,e*3);s+=e*3;const a=new ge,l=new Float32Array(e*3),c=new Float32Array(e*3);for(let u=0;u<e*3;u++)l[u]=o[u]/t.q,c[u]=r[u]/127;if(a.setAttribute("position",new Pe(l,3)),a.setAttribute("normal",new Pe(c,3)),t.skinned){const u=new Uint8Array(i,s,e*4);s+=e*4;const d=new Uint8Array(i,s,e*4);s+=e*4,a.setAttribute("skinIndex",new xc(Uint16Array.from(u),4));const f=new Float32Array(e*4);for(let p=0;p<e;p++){let v=0;for(let g=0;g<4;g++)v+=d[p*4+g];for(let g=0;g<4;g++)f[p*4+g]=v?d[p*4+g]/v:g===0?1:0}a.setAttribute("skinWeight",new Pe(f,4))}const h=new Uint16Array(n*3);return new Uint8Array(h.buffer).set(new Uint8Array(i,s,n*6)),a.setIndex(new Pe(h,1)),a.computeBoundingSphere(),a}const vb={fair:"#e8c0a2",light:"#d9a582",tan:"#c38a63",olive:"#b07b55",bronze:"#99623f",deep:"#6e432b",dark:"#4f2e1d"},bb={black:"#15110e",espresso:"#2a1a12",brown:"#4a2f1e",chestnut:"#6b3a22",auburn:"#7a3419",honey:"#a8793f",blonde:"#c9a46a",platinum:"#ddc9a0"},xb={bikini:0,onepiece:1,boardshorts:2,trunks:3,triangle:4};function yb(i){const t=new xe({color:vb[i.skin]||i.skin,roughness:.52,metalness:0});return t.userData.u={uCloth:{value:new ut(i.cloth||"#1d4a66")},uCloth2:{value:new ut(i.cloth2||"#f3eee4")},uOutfit:{value:xb[i.outfit]??0},uPattern:{value:i.pattern??0},uS:{value:i.bodyScale||1},uFace:{value:i.face?1:0},uWet:{value:i.wet||0}},t.onBeforeCompile=e=>{Object.assign(e.uniforms,t.userData.u),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRest;
uniform vec3 uCloth, uCloth2; uniform float uOutfit, uPattern, uS, uFace, uWet;
float band(float x, float a, float b, float e) { return smoothstep(a - e, a + e, x) * (1.0 - smoothstep(b - e, b + e, x)); }
float segDist(vec3 p, vec3 a, vec3 b) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
`).replace("#include <color_fragment>",`#include <color_fragment>
      vec3 p = vRest / uS; float ax = abs(p.x); float e = 0.0035;
      float cloth = 0.0;
      // ---- bottoms (bikini / one-piece): high-cut leg openings, lower at the back
      float top = 0.956 - 0.012 * pow(clamp(ax / 0.16, 0.0, 1.0), 2.0);
      float back = smoothstep(0.0, -0.04, p.z);
      float legOpen = mix(0.864 + 0.052 * smoothstep(0.018, 0.12, ax), 0.848 + 0.045 * smoothstep(0.03, 0.14, ax), back);
      float bottoms = step(ax, 0.2) * smoothstep(legOpen - e, legOpen + e, p.y) * (1.0 - smoothstep(top - e, top + e, p.y)) * step(0.8, p.y);
      // ---- bikini top: triangle cups, under-bust band, halter straps
      float cups = 0.0;
      for (int i = 0; i < 2; i++) {
        float sx = i == 0 ? 1.0 : -1.0;
        vec2 q = vec2((p.x - sx * 0.07) / 0.066, (p.y - 1.254) / 0.066);
        float tri = max(abs(q.x) * 0.9 + q.y * 0.55, -q.y * 1.05);
        cups = max(cups, (1.0 - smoothstep(0.92, 0.98, tri)) * step(0.025, p.z));
      }
      float bandY = band(p.y, 1.196, 1.214, e) * step(ax, 0.18);
      float straps = 0.0;
      for (int i = 0; i < 2; i++) {
        float sx = i == 0 ? 1.0 : -1.0;
        straps = max(straps, 1.0 - smoothstep(0.004, 0.007, segDist(p, vec3(sx * 0.052, 1.305, 0.088), vec3(sx * 0.022, 1.44, -0.02))));
      }
      float bikiniTop = max(max(cups, bandY), straps * step(1.28, p.y));
      if (uOutfit < 0.5) cloth = max(bottoms, bikiniTop);
      else if (uOutfit < 1.5) {
        // one-piece: torso between the leg openings and the bust, open back
        float torso = step(ax, 0.17) * smoothstep(legOpen - e, legOpen + e, p.y) * (1.0 - smoothstep(1.3 - e, 1.3 + e, p.y));
        float openBack = smoothstep(-0.02, -0.05, p.z) * smoothstep(1.06, 1.1, p.y);
        cloth = max(max(torso * (1.0 - openBack), cups), straps * step(1.28, p.y));
      } else if (uOutfit < 2.5) {
        // board shorts to just above the knee, waistband, side seam
        cloth = step(ax, 0.26) * step(0.605, p.y) * (1.0 - smoothstep(0.985 - e, 0.985 + e, p.y));
      } else if (uOutfit < 3.5) {
        cloth = step(ax, 0.26) * step(0.79, p.y) * (1.0 - smoothstep(0.972 - e, 0.972 + e, p.y));
      } else {
        cloth = max(bottoms * step(0.0, 1.0), cups);
      }
      if (cloth > 0.001) {
        vec3 c = uCloth;
        if (uPattern > 0.5 && uPattern < 1.5) c = mix(uCloth, uCloth2, step(0.5, fract(p.y * 42.0)));             // stripes
        else if (uPattern > 1.5 && uPattern < 2.5) {                                                               // palm-leaf print
          vec2 g = fract(vec2(p.x * 30.0 + p.z * 20.0, p.y * 26.0)) - 0.5;
          c = mix(uCloth, uCloth2, 1.0 - smoothstep(0.12, 0.2, length(g * vec2(1.0, 2.2))));
        } else if (uPattern > 2.5) c = mix(uCloth, uCloth2, step(0.5, fract((p.x + p.y) * 18.0)));                  // diagonal
        if (uOutfit > 1.5 && uOutfit < 3.5) c = mix(c, uCloth2 * 0.9, band(p.y, 0.96, 0.985, 0.002) * step(uOutfit, 2.5));
        diffuseColor.rgb = mix(diffuseColor.rgb, c, clamp(cloth, 0.0, 1.0));
      }
      // face: brows, closed lids, lips (for guests without sunglasses)
      if (uFace > 0.5 && p.y > 1.52 && p.z > 0.06) {
        float br = 0.0, lid = 0.0;
        for (int i = 0; i < 2; i++) {
          float sx = i == 0 ? 1.0 : -1.0;
          vec2 q = vec2(p.x - sx * 0.029, p.y);
          br = max(br, (1.0 - smoothstep(0.0022, 0.0035, abs(q.y - (1.649 - 22.0 * q.x * q.x))) ) * step(abs(q.x), 0.017));
          lid = max(lid, (1.0 - smoothstep(0.0012, 0.0024, abs(q.y - (1.627 + 18.0 * q.x * q.x))) ) * step(abs(q.x), 0.012));
        }
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35, max(br * 0.85, lid * 0.7));
        float lip = 1.0 - smoothstep(0.6, 1.0, length(vec2(p.x / 0.018, (p.y - 1.566) / 0.0075)));
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.86, 0.6, 0.6), lip * 0.8);
      }
      float clothMask = clamp(cloth, 0.0, 1.0);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor - 0.12 * uWet, 0.82, clothMask);`)},t.customProgramCacheKey=()=>"selva-guest-v1",t}const qn={};function wb(){if(qn.glass)return qn;qn.glass=new xe({color:"#0b0d0e",roughness:.08,metalness:.6}),qn.frame=new xe({color:"#1a1511",roughness:.35,metalness:.2}),qn.gold=new xe({color:"#c79a55",roughness:.3,metalness:.9});const i=new se,t=new He(.021,16,10,0,Math.PI*2,0,Math.PI*.5);t.scale(1.15,.85,.45),t.rotateX(Math.PI/2);for(const n of[1,-1]){const s=new Xt(t,qn.glass);s.position.set(n*.03,.092,.095),s.rotation.y=n*.12,i.add(s);const o=new Xt(new Ae(.003,.004,.1),qn.frame);o.position.set(n*.066,.095,.05),i.add(o)}const e=new Xt(new Ae(.018,.003,.004),qn.frame);return e.position.set(0,.1,.1),i.add(e),qn.shades=i,qn}const V0={},Fe=(i,t,e=.5,n={})=>V0[i]||(V0[i]=new xe({color:t,roughness:e,...n}));function zc(i){const t=new se,e=(n,s,o=0,r=0,a=0,l=0,c=0,h=0)=>{const u=new Xt(n,s);return u.position.set(o,r,a),u.rotation.set(l,c,h),u.castShadow=!0,t.add(u),u};if(i==="cup")e(new ze(.038,.03,.09,14),Fe("cup","#efe9df",.4)),e(new ze(.034,.034,.005,14),Fe("coffee","#3b2415",.3),0,.04,0);else if(i==="wine")e(new ze(.004,.004,.09,6),Fe("glass","#dfe9ec",.05,{transparent:!0,opacity:.45}),0,-.02,0),e(new He(.036,12,8,0,6.3,0,1.9),Fe("glass","#dfe9ec",.05,{transparent:!0,opacity:.45}),0,.06,0,Math.PI),e(new He(.031,12,6,0,6.3,1.9,1.2),Fe("rose","#b0485a",.2),0,.058,0,Math.PI);else if(i==="cocktail")e(new ze(.032,.026,.12,12),Fe("glass","#dfe9ec",.05,{transparent:!0,opacity:.45})),e(new ze(.028,.024,.08,12),Fe("juice","#f09a4a",.3),0,-.012,0),e(new Ii(.022,.006,6,12,Math.PI),Fe("lime","#8fbf3c",.5),.02,.058,0,0,0,.4);else if(i==="beer")e(new ze(.03,.03,.16,12),Fe("amber","#6b3d12",.2,{transparent:!0,opacity:.85})),e(new ze(.012,.018,.06,10),Fe("amber","#6b3d12",.2),0,.1,0);else if(i==="book")e(new Ae(.2,.028,.14),Fe("page","#f2ede2",.8)),e(new Ae(.205,.004,.145),Fe("cover","#2c5b63",.6),0,.016,0);else if(i==="laptop"){e(new Ae(.32,.014,.22),Fe("alu","#b9bcbf",.35,{metalness:.7}));const n=e(new Ae(.32,.21,.008),Fe("alu","#b9bcbf",.35,{metalness:.7}),0,.105,-.115,-.25),s=new Xt(new Me(.29,.18),Fe("screen","#9cc7d8",.2,{emissive:"#5d8fa3",emissiveIntensity:.6}));s.position.set(0,0,.0045),n.add(s)}else if(i==="tongs")e(new Ae(.012,.012,.3),Fe("steel","#a9adb0",.3,{metalness:.9}),0,0,.12);else if(i==="phone")e(new Ae(.075,.155,.008),Fe("phone","#1b1d20",.25));else if(i==="headphones"){e(new Ii(.1,.01,6,16,Math.PI),Fe("hp","#141414",.4),0,0,0);for(const n of[1,-1])e(new ze(.04,.04,.03,14),Fe("hp","#141414",.4),n*.1,-.01,0,0,0,Math.PI/2)}return t}const _b=new D,Mb=new pe,B0=new on;class Sb{constructor(t){var c;const e=Qi.bodies[t.sex],n=e.lods[t.lod||"hi"],s=Zr.get(n.file);this.sex=t.sex,this.meta=e,this.root=new se,this.root.name="guest";const o=(t.height||(t.sex==="F"?1.7:1.83))/(t.sex==="F"?1.7:1.83);this.root.scale.setScalar(o),this.mat=yb({...t,bodyScale:e.scale,face:t.face??!t.shades});const r=this.mesh=new F2(s,this.mat);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!1,this.bones={},this.rest={};const a=[];for(const h of e.bones){const u=new Nu;u.name=h.name;const d=new D(...h.pos);this.rest[h.name]=d,h.parent?(u.position.copy(d).sub(this.rest[h.parent]),this.bones[h.parent].add(u)):u.position.copy(d),this.bones[h.name]=u,a.push(u)}this.joints=Object.fromEntries(Object.entries(e.joints).map(([h,u])=>[h,new D(...u)])),r.add(this.bones.hips),r.updateMatrixWorld(!0),r.bind(new _c(a)),this.root.add(r);const l=wb();if(t.hair){const h=`${t.hair.style}_${t.sex}`,u=Zr.get((c=Qi.hair[h])==null?void 0:c.file);if(u){const d=new xe({color:bb[t.hair.color]||t.hair.color,roughness:.62,metalness:0}),f=new Xt(u,d);f.castShadow=!0,this.bones.head.add(f),this.hair=f}}if(t.shades){const h=l.shades.clone();h.scale.setScalar(e.scale),this.bones.head.add(h)}this.props={},this.cur={},this.restDir={};for(const h of["L","R"])this.restDir["upperArm"+h]=this.rest["foreArm"+h].clone().sub(this.rest["upperArm"+h]).normalize(),this.restDir["foreArm"+h]=this.rest["hand"+h].clone().sub(this.rest["foreArm"+h]).normalize(),this.restDir["hand"+h]=this.joints["handEnd"+h].clone().sub(this.rest["hand"+h]).normalize(),this.restDir["thigh"+h]=this.rest["shin"+h].clone().sub(this.rest["thigh"+h]).normalize(),this.restDir["shin"+h]=this.rest["foot"+h].clone().sub(this.rest["shin"+h]).normalize()}hold(t,e,n=[0,0,0],s=[0,0,0]){const o=zc(e),r=this.bones["hand"+t],a=this.restDir["hand"+t];return o.position.set(a.x*.075+n[0],a.y*.075+n[1],a.z*.075+n[2]),o.rotation.set(...s),r.add(o),this.props[t]=o,o}compile(t){const e=a=>new pe().setFromEuler(B0.set(a[0]||0,a[1]||0,a[2]||0,"YXZ")),n={};n.hips=e(t.root||[0,0,0]),n.spine=e(t.spine||[0,0,0]),n.chest=e(t.chest||[0,0,0]),n.neck=e(t.neck||[0,0,0]),n.head=e(t.head||[0,0,0]);const s=n.hips.clone().invert(),o=n.hips.clone().multiply(n.spine).multiply(n.chest),r=(a,l,c,h=0)=>{const u=new D(...l).normalize().applyQuaternion(c),d=new pe().setFromUnitVectors(this.restDir[a],u);return h&&d.premultiply(new pe().setFromAxisAngle(u,h)),d};for(const a of["L","R"]){const l=e(t["clav"+a]||[0,0,0]);n["clav"+a]=l;const c=o.clone().multiply(l).invert(),h=t["arm"+a]?r("upperArm"+a,t["arm"+a],c,t["armRoll"+a]||0):new pe;n["upperArm"+a]=h;const u=t["fore"+a]?r("foreArm"+a,t["fore"+a],c,t["foreRoll"+a]||0):h.clone();if(n["foreArm"+a]=h.clone().invert().multiply(u),t["handDir"+a]){const v=r("hand"+a,t["handDir"+a],c,t["handRoll"+a]||0);n["hand"+a]=u.clone().invert().multiply(v)}else n["hand"+a]=e(t["hand"+a]||[0,0,0]);const d=t["thigh"+a]?r("thigh"+a,t["thigh"+a],s,t["thighRoll"+a]||0):new pe;n["thigh"+a]=d;const f=t["shin"+a]?r("shin"+a,t["shin"+a],s):d.clone();n["shin"+a]=d.clone().invert().multiply(f);const p=e(t["foot"+a]||[0,0,0]);n["foot"+a]=n.hips.clone().multiply(f).invert().multiply(p)}return{q:n,pos:new D(...t.pos||[0,0,0])}}apply(t,e=null,n=0){for(const o in t.q){const r=this.bones[o];r&&(e&&n>0?r.quaternion.copy(t.q[o]).slerp(e.q[o],n):r.quaternion.copy(t.q[o]))}const s=e&&n>0?_b.copy(t.pos).lerp(e.pos,n):t.pos;this.bones.hips.position.copy(this.rest.hips).add(s)}nudge(t,e=0,n=0,s=0){const o=this.bones[t];o&&o.quaternion.multiply(Mb.setFromEuler(B0.set(e,n,s,"YXZ")))}}const Tb=i=>i&&[-i[0],i[1],i[2]],W0=i=>i&&[i[0],-i[1],-i[2]];function md(i){const t={};for(const[e,n]of Object.entries(i))if(/L$/.test(e)||/R$/.test(e)){const s=e.slice(0,-1)+(e.endsWith("L")?"R":"L"),o=/^(arm|fore|thigh|shin|handDir)/.test(e)&&!/Roll/.test(e);t[s]=/Roll/.test(e)?-n:o?Tb(n):W0(n)}else["root","spine","chest","neck","head"].includes(e)?t[e]=W0(n):e==="pos"?t[e]=[-n[0],n[1],n[2]]:t[e]=n;return t}const Ln=i=>({...i,...md(Object.fromEntries(Object.entries(i).filter(([t])=>t.endsWith("L"))))}),Kt={};Kt.stand=Ln({armL:[.2,-1,.02],foreL:[.12,-1,.2],handDirL:[.1,-1,.25],thighL:[.03,-1,0],shinL:[.03,-1,-.03]});Kt.standHip={...Kt.stand,root:[0,.05,-.05],pos:[.02,0,0],thighL:[.08,-1,.02],shinL:[.02,-1,-.02],thighR:[-.02,-1,.1],shinR:[-.06,-1,-.08],chest:[0,0,.04],head:[0,.1,-.06]};Kt.namaste=Ln({armL:[.25,-.85,.45],foreL:[-.83,.37,.43],handDirL:[-.15,1,.1],thighL:[.03,-1,0],shinL:[.03,-1,-.03]});Kt.tree={...Ln({armL:[.12,1,.04],foreL:[-.08,1,.02],handDirL:[-.08,1,0],thighR:[-.02,-1,0],shinR:[-.02,-1,-.02]}),thighL:[.72,-.4,.34],shinL:[-.58,-.78,-.06],footL:[0,-.9,-1.2],pos:[-.02,0,0]};Kt.warrior={armL:[1,.02,0],foreL:[1,.02,0],handDirL:[1,0,0],armR:[-1,.02,0],foreR:[-1,.02,0],handDirR:[-1,0,0],thighL:[.9,-.42,.04],shinL:[.06,-1,0],footL:[0,1.4,0],thighR:[-.6,-.8,0],shinR:[-.6,-.8,0],footR:[0,-.2,0],pos:[0,-.2,0],head:[0,1.1,0]};Kt.sitCross=Ln({pos:[0,-.8,0],armL:[.3,-.85,.35],foreL:[.35,-.35,.85],handDirL:[.3,-.4,.8],thighL:[.8,-.12,.55],shinL:[-.85,-.08,.3],footL:[0,-1.2,0]});Kt.lounge=Ln({root:[-.78,0,0],pos:[0,-.5,.05],neck:[.25,0,0],head:[.2,0,0],armL:[.3,-.35,-.2],foreL:[.12,-.25,.95],handDirL:[.1,-.3,1],thighL:[.05,-.06,1],shinL:[.04,-.12,1],footL:[-1.2,0,0]});Kt.loungeRead={...Kt.lounge,armL:[.25,-.6,.55],foreL:[-.35,.55,.75],handDirL:[-.3,.6,.6],armR:[-.25,-.6,.55],foreR:[.35,.55,.75],handDirR:[.3,.6,.6],head:[.45,0,0]};Kt.loungeSun={...Kt.lounge,armL:[.45,.8,-.35],foreL:[-.85,-.2,-.3],armR:[-.45,.8,-.35],foreR:[.85,-.2,-.3],thighR:[-.08,.2,1],shinR:[.06,-.6,.8],head:[.1,0,0]};Kt.sitChair=Ln({pos:[0,-.43,-.02],thighL:[.06,-.06,1],shinL:[.03,-1,.08],footL:[0,0,0],armL:[.2,-.9,.35],foreL:[.05,.05,1],handDirL:[0,0,1]});Kt.sitStool=Ln({pos:[0,-.12,-.02],thighL:[.1,-.35,1],shinL:[.03,-1,-.1],armL:[.25,-.8,.45],foreL:[-.2,.1,1]});Kt.sitEdge=Ln({pos:[0,-.9,-.06],thighL:[.12,-.12,1],shinL:[.05,-1,.25],armL:[.3,-.95,-.35],foreL:[.1,-1,-.15],handDirL:[.1,-.3,-1],chest:[.05,0,0]});Kt.float=Ln({root:[-1.45,0,0],pos:[0,-.9,.2],head:[-.25,0,0],armL:[1,.25,.15],foreL:[1,-.25,-.05],thighL:[.12,-.12,1],shinL:[.1,-.35,.9]});Kt.dj=Ln({armL:[.28,-.6,.75],foreL:[-.12,-.35,.93],handDirL:[-.1,-.5,.85],thighL:[.08,-1,0],shinL:[.08,-1,-.02],chest:[.15,0,0],head:[.25,0,0]});Kt.danceA={...Kt.stand,armL:[.35,.9,.2],foreL:[.1,1,.1],handDirL:[0,1,0],armR:[-.4,-.55,.6],foreR:[.2,.4,.85],thighL:[.12,-1,.05],thighR:[-.02,-1,.1],shinR:[-.02,-1,-.12]};Kt.danceB={...Kt.stand,armL:[.55,-.5,.55],foreL:[-.2,.6,.75],armR:[-.55,-.5,.55],foreR:[.2,.6,.75],root:[0,.2,.05]};Kt.toast={...Kt.stand,armR:[-.2,-.75,.5],foreR:[.1,.6,.75],handDirR:[0,1,.2]};Kt.sipR={...Kt.stand,armR:[-.12,-.7,.35],foreR:[.55,.8,.3],handDirR:[.3,1,.2]};Kt.embraceM={...Kt.stand,armR:[-.35,-.6,.1],foreR:[.15,0,1]};Kt.cook=Ln({armL:[.2,-.75,.62],foreL:[-.15,-.15,1],handDirL:[-.1,-.3,1],thighL:[.05,-1,0],shinL:[.05,-1,-.02],chest:[.22,0,0],head:[.35,0,0]});Kt.bbq={...Kt.cook,armL:[.15,-.8,.4],foreL:[.35,.6,.72],handDirL:[0,1,.2]};Kt.typing={...Kt.sitChair,...Ln({armL:[.12,-.8,.55],foreL:[-.18,-.08,1],handDirL:[-.1,-.15,1]}),chest:[.12,0,0],head:[.3,0,0]};const X0=Math.PI*2,$i=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Eb=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Ab={liora:{sex:"F",skin:"tan",hair:{style:"wavy",color:"espresso"},outfit:"bikini",cloth:"#b5483a",cloth2:"#f3e3cf",shades:!0},maren:{sex:"F",skin:"fair",hair:{style:"pony",color:"blonde"},outfit:"onepiece",cloth:"#13171a",cloth2:"#c9a46a",shades:!1},selam:{sex:"F",skin:"deep",hair:{style:"bun",color:"black"},outfit:"bikini",cloth:"#e0913d",cloth2:"#fff4e0",shades:!1},dalia:{sex:"F",skin:"olive",hair:{style:"long",color:"chestnut"},outfit:"bikini",cloth:"#efe8da",cloth2:"#5d7f63",pattern:2,shades:!0},vera:{sex:"F",skin:"light",hair:{style:"long",color:"honey"},outfit:"bikini",cloth:"#2f6f8a",cloth2:"#f0e6d2",pattern:1,shades:!0},nia:{sex:"F",skin:"bronze",hair:{style:"wavy",color:"black"},outfit:"onepiece",cloth:"#a8323c",cloth2:"#f7e7d4",shades:!0},ana:{sex:"F",skin:"tan",hair:{style:"bun",color:"auburn"},outfit:"bikini",cloth:"#1d4a66",cloth2:"#e6d5b8",shades:!1},kai:{sex:"M",skin:"bronze",hair:{style:"surfer",color:"honey"},outfit:"boardshorts",cloth:"#1f5f73",cloth2:"#e9dcc4",pattern:1,shades:!0},tomas:{sex:"M",skin:"olive",hair:{style:"short",color:"espresso"},outfit:"boardshorts",cloth:"#d9b36a",cloth2:"#2a3a34",pattern:2,shades:!0},ari:{sex:"M",skin:"deep",hair:{style:"short",color:"black"},outfit:"trunks",cloth:"#e8e1d2",cloth2:"#1a2a30",shades:!0},leo:{sex:"M",skin:"tan",hair:{style:"surfer",color:"brown"},outfit:"boardshorts",cloth:"#a4462f",cloth2:"#f0e2c8",pattern:3,shades:!0},noah:{sex:"M",skin:"light",hair:{style:"short",color:"chestnut"},outfit:"boardshorts",cloth:"#2c3e50",cloth2:"#d8cbb0",shades:!0}},q0={},Cn=(i,t,e={})=>q0[i]||(q0[i]=new xe({color:t,roughness:.6,...e}));let Ar=null;function Cb(){if(Ar)return Ar;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.55,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ar=new Hn({map:new Ou(i),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Ar}class Rb{constructor(t,e){this.group=new se,this.group.name="villa-life",this.lod=t,this.shadows=e,this.actors=[],this.lamps=[]}person(t,e,n,s={}){const o=new Sb({...Ab[t],...s,lod:this.lod});if(o.root.traverse(r=>{var a;r.isMesh&&(r.castShadow=this.shadows,r.userData.sharedGeo=r.isSkinnedMesh||((a=r.parent)==null?void 0:a.isBone))}),!this.shadows&&s.blob!==!1){const r=new Xt(new Me(.75,.6),Cb());r.rotation.x=-Math.PI/2,r.position.set(e[0],e[1]+.012,e[2]),r.renderOrder=1,this.group.add(r),o.blob=r}return o.root.position.set(e[0],e[1],e[2]),o.root.rotation.y=e[3]||0,o.cache=new Map,o.pose=r=>{let a=o.cache.get(r);return a||(a=o.compile(typeof r=="string"?r.endsWith("~")?md(Kt[r.slice(0,-1)]):Kt[r]:r),o.cache.set(r,a)),a},o.seed=Eb(this.actors.length+e[0]*3.1+e[2]),this.group.add(o.root),this.actors.push({p:o,anim:n}),o}mesh(t,e,n,s,o,r=0,a=!0){const l=new Xt(t,e);return l.position.set(n,s,o),l.rotation.y=r,l.castShadow=a,l.receiveShadow=!0,this.group.add(l),l}prop(t,e,n,s,o=0){const r=zc(t);return r.position.set(e,n,s),r.rotation.y=o,this.group.add(r),r}}function Pb(i,t=2.2){const e=i.reduce((n,s)=>n+s[1]+t,0);return(n,s)=>{let o=(s%e+e)%e;for(let r=0;r<i.length;r++){const[a,l]=i[r];if(o<l)return n.apply(n.pose(a)),a;if(o-=l,o<t)return n.apply(n.pose(a),n.pose(i[(r+1)%i.length][0]),$i(0,1,o/t)),a;o-=t}}}const an=(i,t,e=1)=>i.nudge("chest",Math.sin(t*1.7+i.seed*9)*.018*e,0,0);function lo(i,t,e=.35){const n=Math.sin(t*.21+i.seed*20)*.6+Math.sin(t*.13+i.seed*7)*.4;i.nudge("head",0,n*e,0)}function Lb(i,t,e,n,s,o){i.mesh(new Ae(.62,.008,1.8),Cn("mat"+o,o,{roughness:.9}),t,e+.004,n,s,!1)}function Db(i,t,e,n,s){const o=new se;o.position.set(t,e,n),o.rotation.y=s,i.group.add(o);const r=(u,d,f,p,v,g=0)=>{const m=new Xt(u,d);return m.position.set(f,p,v),m.rotation.x=g,m.castShadow=!0,m.receiveShadow=!0,o.add(m),m},a=Cn("djBlack","#141516",{roughness:.45}),l=Cn("djWood","#6b4a2e",{roughness:.55}),c=Cn("vinyl","#0b0b0c",{roughness:.2,metalness:.2});r(new Ae(1.5,.9,.62),l,0,.45,0),r(new Ae(1.52,.03,.64),a,0,.915,0);for(const u of[-.45,.45])r(new ze(.17,.17,.03,24),c,u,.945,-.02);r(new Ae(.28,.06,.34),a,0,.955,-.02);const h=zc("laptop");h.position.set(.55,.93,.18),h.rotation.y=Math.PI,h.scale.setScalar(.9),o.add(h),r(new Ae(1.4,.02,.01),Cn("djGlow","#ffb46a",{emissive:"#ff9b4a",emissiveIntensity:1.6}),0,.2,.315);for(const u of[-1.05,1.05]){r(new ze(.018,.018,1.1,8),a,u,.55,.05);const d=r(new Ae(.34,.5,.3),a,u,1.35,.05);for(const[f,p]of[[.1,.1],[-.12,.06]]){const v=new Xt(new Zn(p,20),Cn("cone","#2a2b2d",{roughness:.8}));v.position.set(0,f,.151),d.add(v)}}return o}function Y0(i,t,e,n,s,o){const r=Cn("bulb","#fff1d6",{emissive:"#ffcf8a",emissiveIntensity:.4,roughness:.3}),a=Cn("wire","#1b1a18",{roughness:.8}),l=new He(.045,10,8);for(let c=0;c<t.length-1;c++){const[h,u]=t[c],[d,f]=t[c+1],p=new es(Array.from({length:9},(v,g)=>{const m=g/8;return new D(h+(d-h)*m,e-n*4*m*(1-m),u+(f-u)*m)}));i.mesh(new la(p,24,.006,4),a,0,0,0,0,!1);for(let v=1;v<s;v++){const g=p.getPoint(v/s),m=i.mesh(l,r,g.x,g.y-.07,g.z,0,!1);o.push(m)}}o.mat=r}function j0(i,t,e,n,s="#f2837a"){const o=Cn("ring"+s,s,{roughness:.35}),r=i.mesh(new Ii(.46,.13,12,28),o,t,e,n,0,!0);r.rotation.x=-Math.PI/2;const a=i.mesh(new Ii(.46,.132,12,28,Math.PI/3),Cn("ringW","#f6f1e8",{roughness:.35}),t,e,n,0,!1);return a.rotation.x=-Math.PI/2,[r,a]}function Ib(i,t,e,n,s){i.mesh(new ze(.07,.08,.26,12),Cn("lantG","#e9e4d8",{transparent:!0,opacity:.55,roughness:.2}),t,e+.13,n,0,!1);const o=i.mesh(new He(.03,8,6),Cn("flame","#ffd9a0",{emissive:"#ffb45e",emissiveIntensity:2.2}),t,e+.1,n,0,!1);s.push(o)}const $0={harmony(i){Lb(i,-9.2,-.35,10.4,0,"#8fa08c");const e=Pb([["namaste",6],["tree",9],["namaste",3],["warrior",9],["namaste",3],["tree~",9],["namaste",3],["warrior~",9],["sitCross",10]],2.4),n=r=>(a,l)=>{e(a,l-r),an(a,l,.6)};i.person("maren",[-11.6,-.35,9.95,0],n(.5)),i.person("selam",[-11.6,-.35,10.85,0],n(.9)),i.person("ana",[-9.2,-.35,10.4,-Math.PI/2],(r,a)=>{e(r,a),an(r,a,.6)},{face:!0});const s=i.person("kai",[7.62,-.02,5,Math.PI/2],(r,a)=>{const l=Math.max(0,Math.sin(a*.9+1.1))**6;r.apply(r.pose("cook"),r.pose("bbq"),.35+.25*Math.sin(a*.25)),r.nudge("foreArmR",-.5*l,0,.4*l),lo(r,a,.25),an(r,a)});s.hold("R","tongs",[0,0,0],[0,0,0]),s.hold("L","beer",[0,-.02,.02],[0,0,0]);const o=i.person("liora",[0,0,0,0],(r,a)=>{r.apply(r.pose("loungeSun")),an(r,a,.8)},{blob:!1});co(o,-3.75,11.4,.3,-.02)},ebony(i){Db(i,6.9,-.02,7.9,-Math.PI/2);const e=118/60;i.person("ari",[7.55,-.02,7.9,-Math.PI/2],(r,a)=>{const l=a*e*X0,c=$i(.6,.9,Math.sin(a*.37+1));r.apply(r.pose("dj"),r.pose("djPhones"),c),r.bones.hips.position.y+=Math.abs(Math.sin(l/2))*-.018,r.nudge("neck",Math.sin(l)*.12,0,0),r.nudge("chest",0,Math.sin(l/4)*.08,0)});const n=(r,a,l)=>(c,h)=>{const u=(h+r)*e*X0,d=$i(.2,.8,.5+.5*Math.sin((h+r)*.21));c.apply(c.pose(a),c.pose(l),d),c.bones.hips.position.y+=-Math.abs(Math.sin(u/2))*.035,c.bones.hips.position.x+=Math.sin(u/2)*.025,c.nudge("hips",0,Math.sin(u/4)*.25,Math.sin(u/2)*.06),c.nudge("chest",0,-Math.sin(u/4)*.15,-Math.sin(u/2)*.05),c.nudge("head",Math.sin(u)*.06,0,0)};i.person("vera",[3.4,-.02,7.2,Math.PI/2+.4],n(0,"danceA","danceB")).hold("R","cocktail",[0,.01,.01]),i.person("leo",[4.3,-.02,8.7,Math.PI/2-.3],n(.8,"toast","danceB")).hold("R","beer"),i.person("nia",[2.5,-.02,8.8,Math.PI/2+.9],n(1.7,"danceB","danceA~")).hold("L","cocktail"),i.person("dalia",[0,0,0,0],(r,a)=>{r.apply(r.pose("float"));const l=a*.07+1;r.root.position.set(-3.5+Math.cos(l)*1.4,-.1+Math.sin(a*1.1)*.012,12+Math.sin(l)*.45),r.root.rotation.y=-l+Math.PI*.8,s.forEach(c=>{c.position.x=r.root.position.x,c.position.z=r.root.position.z,c.position.y=-.1+Math.sin(a*1.1)*.012})},{blob:!1});const s=j0(i,-3.5,-.1,12,"#f2837a");i.person("tomas",[-6,-.02,9.98,0],(r,a)=>{r.apply(r.pose("sitEdge")),r.nudge("shinL",Math.sin(a*1.2)*.25,0,0),r.nudge("shinR",Math.sin(a*1.2+2)*.25,0,0),lo(r,a,.5),an(r,a)}).hold("R","beer",[0,0,0]),co(i.person("selam",[0,0,0,0],(r,a)=>{r.apply(r.pose("loungeSun")),an(r,a)},{outfit:"bikini",cloth:"#f4f0e6",cloth2:"#c98a3a",pattern:0,shades:!0,face:!1,blob:!1}),-6.8,8,0,-.02);const o=i.person("maren",[0,0,0,0],(r,a)=>{r.apply(r.pose("lounge")),an(r,a),lo(r,a,.4)},{shades:!0,face:!1,blob:!1});co(o,-5,8,0,-.02),o.hold("R","cocktail",[0,.01,0]),Y0(i,[[-9.5,6.3],[-2,6.25],[5.5,6.3],[9.6,7.2]],3,.45,9,i.lamps),Y0(i,[[5.5,6.3],[6.4,9.9]],3,.3,5,i.lamps)},ivory(i){i.person("nia",[-1.5,-.02,6.25,.08],(s,o)=>{s.apply(s.pose("leanHer"),s.pose("sipL"),$i(.85,1,Math.sin(o*.3))),s.nudge("hips",0,0,Math.sin(o*.5)*.02),an(s,o)},{outfit:"onepiece",cloth:"#f2ece2",cloth2:"#c8a36b",shades:!1,face:!0,hair:{style:"long",color:"black"}}).hold("L","wine",[0,.01,.01]),i.person("noah",[-.95,-.02,6.2,-.1],(s,o)=>{s.apply(s.pose("embraceM")),s.nudge("hips",0,0,Math.sin(o*.5+.4)*.02),an(s,o),s.nudge("head",0,.25+Math.sin(o*.17)*.12,0)}).hold("L","wine",[0,.01,.01]);for(const[s,o]of[[-2.6,6],[.3,6.1],[-3.2,5.2]])Ib(i,s,-.02,o,i.lamps)},guanacaste(i){i.person("leo",[2.6,0,-2.55,0],(n,s)=>{const o=Math.max(0,Math.sin(s*7))*$i(0,.3,Math.sin(s*.3));n.apply(n.pose("cook")),n.nudge("foreArmR",-.35*o,0,0),lo(n,s,.2),an(n,s)});const t=(n,s)=>{const o=$i(.75,.95,Math.sin(s*.42+2));n.apply(n.pose("stoolLean"),n.pose("stoolSip"),o),lo(n,s,.3),an(n,s)};i.person("vera",[1.55,0,-.8,Math.PI],t,{hair:{style:"pony",color:"honey"}}).hold("R","cup",[0,.012,.012]),i.prop("cup",2.2,.92,-1.45),i.person("selam",[0,0,0,0],(n,s)=>{n.apply(n.pose("float"));const o=s*.06;n.root.position.set(-3.5+Math.sin(o)*.6,-.08+Math.sin(s*1.3)*.01,7+Math.cos(o)*2.2),n.root.rotation.y=o*.7+.5,e.forEach(r=>{r.position.set(n.root.position.x,n.root.position.y,n.root.position.z)})},{outfit:"bikini",cloth:"#1d8a8a",cloth2:"#f4efe4",shades:!0,face:!1,blob:!1});const e=j0(i,-3.5,-.08,7,"#f6c85f");co(i.person("kai",[0,0,0,0],(n,s)=>{n.apply(n.pose("loungeSun")),an(n,s)},{blob:!1}),3.1,8.4,0,.012)},ivy(i){i.person("tomas",[3.4,6.8+.51,4.7,0],(e,n)=>{e.apply(e.pose("laptopLap")),e.nudge("handL",Math.sin(n*9)*.05,0,0),e.nudge("handR",Math.sin(n*9+1.3)*.05,0,0),e.nudge("head",$i(.8,1,Math.sin(n*.23))*-.45,0,0),an(e,n)},{outfit:"boardshorts",shades:!1,face:!0,blob:!1}),i.prop("laptop",3.4,6.8+.51+.36,5.05,Math.PI).rotation.set(.12,Math.PI,0),i.prop("cup",4.2,6.8+.53,4.55)},studio54(i){const t=i.person("liora",[0,0,0,0],(e,n)=>{e.apply(e.pose("loungeRead")),e.nudge("head",.1*Math.sin(n*.2),0,0),an(e,n)},{outfit:"bikini",cloth:"#6b4fa0",cloth2:"#efe6d6",hair:{style:"wavy",color:"auburn"},shades:!0,blob:!1});co(t,-4.3,6.4,0,-.02),t.hold("L","book",[-.06,.02,.02],[0,0,-.4]),i.prop("cup",-3.7,-.02+0,5.55)}};function co(i,t,e,n,s){const o=Math.cos(n),r=Math.sin(n),a=-.22;i.root.position.set(t+a*r,s+.07,e+a*o),i.root.rotation.y=n}Object.assign(Kt,{djPhones:{...Kt.dj,armL:[.55,.45,.2],foreL:[-.55,.55,.2],handDirL:[-.3,.9,0],head:[.15,0,-.18]},leanHer:{...Kt.stand,head:[.05,-.2,-.3],neck:[0,0,-.08],root:[0,0,-.04],armR:[-.05,-.85,.2],foreR:[-.55,-.2,.75],armL:[.15,-.85,.35],foreL:[-.1,.35,.95],handDirL:[0,1,.3]},sipL:{...Kt.stand,armL:[.12,-.7,.35],foreL:[-.55,.8,.3],handDirL:[-.3,1,.2],head:[-.05,-.2,-.3]},embraceM:{...Kt.stand,armR:[-.1,-.75,.1],foreR:[.95,0,-.1],handDirR:[.8,-.3,0],armL:[.12,-.8,.35],foreL:[-.1,.4,.9],handDirL:[0,1,.3]},stoolLean:{...Kt.sitStool,chest:[.18,0,0],armR:[-.2,-.6,.75],foreR:[.35,.1,.9],armL:[.25,-.6,.75],foreL:[-.4,0,.9]},stoolSip:{...Kt.sitStool,chest:[.08,0,0],armR:[-.12,-.65,.4],foreR:[.55,.8,.3],handDirR:[.3,1,.2],armL:[.25,-.6,.75],foreL:[-.4,0,.9]},laptopLap:{...Kt.sitCross,pos:[0,-.8,0],chest:[.25,0,0],head:[.4,0,0],armL:[.2,-.8,.5],foreL:[-.25,-.2,.95],handDirL:[-.2,-.3,1],armR:[-.2,-.8,.5],foreR:[.25,-.2,.95],handDirR:[.2,-.3,1]}});function gd(i,{lod:t="hi",shadows:e=!0}={}){if(!$0[i])return null;if(!mb())return Fc(),null;const n=new Rb(t,e);$0[i](n);const s={group:n.group,night:0,update(o){for(const r of n.actors)r.anim(r.p,o);n.lamps.mat&&(n.lamps.mat.emissiveIntensity=.35+2.6*s.night)},setNight(o){s.night=o},dispose(){n.group.traverse(o=>{var r,a;o.isSkinnedMesh&&((a=(r=o.skeleton)==null?void 0:r.dispose)==null||a.call(r))})}};return s.update(0),s}const Z0=["harmony","ebony","ivory","guanacaste","ivy","studio54"];class Ub{constructor({renderer:t,tier:e,simple:n,parent:s}){this.enabled=e!=="low",this.tier=e,this.simple=n,this.parent=s,this.models={},this.queue=Z0.slice(),this.showDist=this.baseDist=e==="high"?210:140,this.enabled&&(this.M=new hd(e==="high"?"mid":"low",t.capabilities.getMaxAnisotropy()),this.envTex=null,this.life={},this.night=0,Fc().catch(()=>null))}pump(t){if(!this.enabled||!this.queue.length)return!1;const e=t&&this.queue.includes(t)?t:this.queue[0];this.queue.splice(this.queue.indexOf(e),1);const n=kc[e],s=Oe.find(u=>u.key===e);if(!n||!s)return this.queue.length>0;dd(this.tier==="high"?"mid":"low");const o=new ud(this.M,{tier:this.tier==="high"?"mid":"low"});o.levels=n.levels,n.build(o);const{layers:r}=o.finalize(),a=new se;for(const u of Object.values(r))a.add(u);const c=new tn().setFromObject(a).getCenter(new D);a.position.set(-c.x,0,-c.z);const h=new se;return h.add(a),h.position.set(s.world.x,rd(e)+.35,s.world.z),h.rotation.y=s.world.rot,h.visible=!1,h.name="villa-detail-"+e,this.parent.add(h),this.models[e]=h,h.userData.inner=a,this.attachLife(e),this.envTex&&this.applyEnv(this.envTex),this.queue.length>0}attachLife(t){if(this.life[t]||!this.models[t])return;const e=gd(t,{lod:"lo",shadows:this.tier==="high"});e&&(this.models[t].userData.inner.add(e.group),this.life[t]=e,e.setNight(this.night))}applyEnv(t){if(this.envTex=t,!!this.M)for(const e of this.M.mats.values()){if(!e.isMeshStandardMaterial)continue;const n=!e.envMap;e.envMap=t,e.envMapIntensity=e.name&&/glass|water|chrome|steel|brass/.test(e.name)?1:.35,n&&(e.needsUpdate=!0)}}setTOD(t){if(!this.M)return;const e=pd(t),n=this.M;n.setNight(e.lamps),n.uniforms.sun.value.copy(e.sunCol).multiplyScalar(e.sunI*.35*e.sunDisc),n.uniforms.sunDir.value.copy(e.sunDir),n.uniforms.night.value=e.night,n.uniforms.caustic.value=e.caustic,this.night=Math.min(1,Math.max(0,(t-1.2)/.8));for(const s of Object.values(this.life))s.setNight(this.night)}update(t,e){if(this.enabled){if(this.queue.length&&!this._cool)for(const n of this.queue){const s=Oe.find(o=>o.key===n);if(s&&Math.hypot(t.position.x-s.world.x,t.position.z-s.world.z)<this.showDist*1.9){this.pump(n),this._cool=8;break}}else this._cool&&this._cool--;this.M&&(this.M.uniforms.time.value=e);for(const n of Z0){const s=this.models[n],o=this.simple[n];if(!s){o&&(o.visible=!0);continue}const r=t.position.distanceTo(s.position),a=s.visible?r<this.showDist*1.08:r<this.showDist;s.visible=a,o&&(o.visible=!a),a&&(this.life[n]?r<this.showDist*.75&&this.life[n].update(e):this.attachLife(n))}}}}const je={BROAD:0,LACY:1,PALMATE:2,ROSETTE:3,CECROPIA:4,PINNATE:5,FROND:6,BANANA:7},ci=4,Cr=2;function Nc(i){const t=i%ci,e=Math.floor(i/ci),n=.012;return{u0:t/ci+n/ci,v0:1-(e+1)/Cr+n/Cr,u1:(t+1)/ci-n/ci,v1:1-e/Cr-n/Cr}}const ln=i=>{const t=new ut(i);return[t.r*255,t.g*255,t.b*255]};function An(i,t=1,e=1){return`rgba(${Math.round(Math.min(255,i[0]*t))},${Math.round(Math.min(255,i[1]*t))},${Math.round(Math.min(255,i[2]*t))},${e})`}function Ri(i,t,e){const n=(t()-.5)*e;return[i[0]*(1+n),i[1]*(1+n*.8),i[2]*(1+n*.6)]}function zn(i,t,e,n,s,o,r,a,l={}){const c=l.tip??.9,h=l.widest??.45,u=(l.bend??0)*o;i.save(),i.translate(e,n),i.rotate(s);const d=i.createLinearGradient(0,-r,0,r),f=Ri(a,t,.28);d.addColorStop(0,An(f,.78)),d.addColorStop(.45,An(f,1.12)),d.addColorStop(.55,An(f,1)),d.addColorStop(1,An(f,.7)),i.fillStyle=d,i.beginPath(),i.moveTo(0,0);const p=o*h;if(i.bezierCurveTo(p*.4,-r*.9,p,-r+u*.3,p,-r*.98+u*.3),i.bezierCurveTo(o*(1-.25*c),-r*(.9-c*.6)+u,o*(.92+c*.02),-r*.1*(1-c)+u,o,u),i.bezierCurveTo(o*(.92+c*.02),r*.1*(1-c)+u,o*(1-.25*c),r*(.9-c*.6)+u,p,r*.98+u*.3),i.bezierCurveTo(p,r+u*.3,p*.4,r*.9,0,0),i.fill(),l.gloss&&(i.fillStyle=`rgba(255,255,235,${l.gloss})`,i.beginPath(),i.moveTo(o*.12,-r*.08),i.quadraticCurveTo(o*.5,-r*.75,o*.86,-r*.1+u*.8),i.quadraticCurveTo(o*.5,-r*.3,o*.12,-r*.08),i.fill()),i.strokeStyle=An(f,1.38,.55),i.lineWidth=Math.max(.6,r*.08),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(o*.5,u*.3,o*.97,u),i.stroke(),l.veins!==!1&&r>5){i.lineWidth=Math.max(.4,r*.03),i.strokeStyle=An(f,1.25,.35);const v=Math.round(4+o/(r*.9));for(let g=1;g<v;g++){const m=g/v,b=o*m*.95,y=u*m*m*.9,x=r*Math.sin(Math.PI*Math.min(1,m/(h*2)))*.85;i.beginPath(),i.moveTo(b,y),i.quadraticCurveTo(b+x*.35,y-x*.5,b+x*.55,y-x*.9),i.stroke(),i.beginPath(),i.moveTo(b,y),i.quadraticCurveTo(b+x*.35,y+x*.5,b+x*.55,y+x*.9),i.stroke()}}i.restore()}function ho(i,t,e,n){i.strokeStyle=n,i.lineWidth=e,i.lineCap="round",i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(let s=1;s<t.length;s++)i.lineTo(t[s][0],t[s][1]);i.stroke()}const kb={[je.BROAD](i,t,e){const n=[ln("#447e30"),ln("#4f8c38"),ln("#3a6e2b")];for(let s=0;s<3;s++){const o=-Math.PI/2+(s-1)*.55+(e()-.5)*.2,r=t*(.8-Math.abs(s-1)*.12),a=t/2,l=t*.98,c=[];for(let h=0;h<=8;h++){const u=h/8;c.push([a+Math.cos(o)*r*u+Math.sin(u*3)*6,l+Math.sin(o)*r*u])}ho(i,c,t*.008,"rgba(70,55,35,0.9)");for(let h=1;h<12;h++){const u=.12+h/12*.86,d=a+Math.cos(o)*r*u,f=l+Math.sin(o)*r*u,p=h%2?1:-1,v=t*(.19+.06*Math.sin(u*Math.PI))*(.85+e()*.3);zn(i,e,d,f,o+p*(.75+e()*.35),v,v*.3,n[(h+s)%3],{gloss:.12,tip:.8})}zn(i,e,a+Math.cos(o)*r,l+Math.sin(o)*r,o,t*.18,t*.05,n[1],{gloss:.12})}},[je.LACY](i,t,e){const n=ln("#557f31");for(let s=0;s<2;s++){const o=-Math.PI/2+(s?.28:-.3),r=t*(s?.56:.44),a=t*.98,l=t*.92;ho(i,[[r,a],[r+Math.cos(o)*l,a+Math.sin(o)*l]],t*.005,"rgba(90,110,50,0.9)");for(let c=0;c<9;c++){const h=.12+c*.1,u=r+Math.cos(o)*l*h,d=a+Math.sin(o)*l*h;for(const f of[-1,1]){const p=o+f*(1.05-h*.35),v=t*(.26-Math.abs(h-.5)*.18);ho(i,[[u,d],[u+Math.cos(p)*v,d+Math.sin(p)*v]],t*.0025,"rgba(90,120,50,0.8)");for(let g=1;g<24;g++){const m=g/24,b=u+Math.cos(p)*v*m,y=d+Math.sin(p)*v*m,x=t*.018*(1-m*.4);zn(i,e,b,y,p+1.2,x,x*.34,Ri(n,e,.3),{veins:!1,tip:.3}),zn(i,e,b,y,p-1.2,x,x*.34,Ri(n,e,.3),{veins:!1,tip:.3})}}}}},[je.PALMATE](i,t,e){const n=ln("#4f8334");[[.3,.35],[.7,.32],[.5,.62],[.26,.72],[.74,.7]].forEach(([o,r],a)=>{const l=t*o,c=t*r;ho(i,[[t*.5,t*.99],[l,c]],t*.005,"rgba(80,70,40,0.8)");const h=5+a%3,u=e()*6.28;for(let d=0;d<h;d++){const f=u+d/h*Math.PI*2,p=t*(.17+e()*.05);zn(i,e,l,c,f,p,p*.24,Ri(n,e,.25),{tip:.9,gloss:.06,widest:.6})}})},[je.ROSETTE](i,t,e){const n=ln("#447f33");ln("#b0552e"),ln("#c0a444"),[[.5,.5,1],[.24,.26,.7],[.78,.28,.7],[.22,.76,.7],[.78,.76,.7]].forEach(([o,r,a])=>{const l=t*o,c=t*r,h=7+Math.floor(e()*3);for(let u=0;u<h;u++){const d=u/h*Math.PI*2+e()*.3,f=t*.26*a*(.85+e()*.3),p=Ri(n,e,.3);zn(i,e,l,c,d,f,f*.4,p,{tip:.2,widest:.7,gloss:.06})}})},[je.CECROPIA](i,t,e){const n=ln("#63863f"),s=ln("#a9b596"),o=t*.5,r=t*.5,a=9;for(let l=0;l<a;l++){const c=l/a*Math.PI*2,h=t*.46*(.9+e()*.15);zn(i,e,o,r,c,h,h*.17,l%3===0?s:n,{tip:.4,widest:.62,gloss:.05})}i.fillStyle=An(n,.8),i.beginPath(),i.arc(o,r,t*.05,0,6.28),i.fill()},[je.PINNATE](i,t,e){const n=ln("#528a34");for(let s=0;s<4;s++){const o=-Math.PI/2+(s-1.5)*.42,r=t*.5,a=t*.98,l=t*(.78-Math.abs(s-1.5)*.1);ho(i,[[r,a],[r+Math.cos(o)*l,a+Math.sin(o)*l]],t*.006,"rgba(95,80,50,0.85)");for(let c=0;c<9;c++){const h=.3+c*.08,u=r+Math.cos(o)*l*h,d=a+Math.sin(o)*l*h,f=t*.13*(.8+e()*.3);zn(i,e,u,d,o+1.1,f,f*.33,Ri(n,e,.25),{tip:.8}),zn(i,e,u,d,o-1.1,f,f*.33,Ri(n,e,.25),{tip:.8})}zn(i,e,r+Math.cos(o)*l,a+Math.sin(o)*l,o,t*.14,t*.04,n,{tip:.8})}},[je.FROND](i,t,e){const n=ln("#7a9a3c"),s=ln("#a08c52"),o=t/2;i.strokeStyle="rgba(140,138,80,1)",i.lineWidth=t*.009,i.lineCap="round",i.beginPath(),i.moveTo(o,t*.99),i.lineTo(o,t*.02),i.stroke();const r=38;for(let a=0;a<r;a++){const l=.04+a/r*.94,c=t*(.99-l*.97),h=t*.49*Math.sin(Math.PI*(.18+l*.78))*(.9+e()*.2);for(const u of[-1,1]){const d=-Math.PI/2+u*(.85+(1-l)*.3+(e()-.5)*.12),f=e()<.02?s:Ri(n,e,.22);zn(i,e,o,c,d,h,t*.0105,f,{tip:.95,widest:.3,veins:!1,bend:u*.05})}}},[je.BANANA](i,t,e){const n=ln("#5d9136"),s=t*.5;i.save(),i.translate(s,t*.98),i.rotate(-Math.PI/2);const o=t*.95,r=t*.28,a=i.createLinearGradient(0,-r,0,r);a.addColorStop(0,An(n,.8)),a.addColorStop(.5,An(n,1.1)),a.addColorStop(1,An(n,.75)),i.fillStyle=a,i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(o*.1,-r,o*.85,-r,o,-r*.05),i.bezierCurveTo(o*.85,r,o*.1,r,0,0),i.fill(),i.globalCompositeOperation="destination-out",i.lineWidth=t*.006;for(let l=0;l<9;l++){const c=.2+e()*.7,h=e()<.5?-1:1;i.beginPath(),i.moveTo(o*c,h*r*.08),i.lineTo(o*(c+.05),h*r*1.1),i.stroke()}i.globalCompositeOperation="source-over",i.strokeStyle=An(n,1.4,.7),i.lineWidth=t*.012,i.beginPath(),i.moveTo(0,0),i.lineTo(o*.98,0),i.stroke(),i.strokeStyle=An(n,1.2,.3),i.lineWidth=1;for(let l=0;l<40;l++){const c=l/40;i.beginPath(),i.moveTo(o*c,0),i.lineTo(o*(c+.05),-r*.9),i.moveTo(o*c,0),i.lineTo(o*(c+.05),r*.9),i.stroke()}i.restore()}};function vd(i=2048){const t=i,e=i/2,n=t/ci,s=document.createElement("canvas");s.width=t,s.height=e;const o=s.getContext("2d",{willReadFrequently:!0});for(let d=0;d<8;d++){const f=d%ci*n,p=Math.floor(d/ci)*n;o.save(),o.beginPath(),o.rect(f,p,n,n),o.clip(),o.translate(f,p),kb[d](o,n,gi(101+d*17)),o.restore()}const r=document.createElement("canvas");r.width=t/8,r.height=e/8;const a=r.getContext("2d",{willReadFrequently:!0});a.filter="blur(2px)";for(let d=0;d<4;d++)a.drawImage(s,0,0,t/8,e/8);const l=a.getImageData(0,0,t/8,e/8).data,h=o.getImageData(0,0,t,e).data;for(let d=0;d<e;d++)for(let f=0;f<t;f++){const p=(d*t+f)*4,v=h[p+3];if(v<250){const g=(Math.min(e/8-1,d>>3)*(t/8)+Math.min(t/8-1,f>>3))*4,m=Math.max(1,l[g+3])/255,b=v/255,y=l[g]/m,x=l[g+1]/m,T=l[g+2]/m;h[p]=v?h[p]*b+y*(1-b):Math.min(255,y||60),h[p+1]=v?h[p+1]*b+x*(1-b):Math.min(255,x||90),h[p+2]=v?h[p+2]*b+T*(1-b):Math.min(255,T||40)}}const u=new wc(h,t,e,bn);return u.flipY=!0,u.colorSpace=cn,u.generateMipmaps=!0,u.minFilter=$n,u.magFilter=Rn,u.anisotropy=4,u.needsUpdate=!0,u.userData.canvas=s,u}const Zt=D,Os=new Zt(0,1,0),Oc=xn.degToRad,Nn={FISSURED:0,SMOOTH:1,PEELING:2,RINGED:3},Fb={evergreen:{bark:Nn.FISSURED,barkColor:"#5b4a3a",leafCell:je.BROAD,leafTint:"#ffffff",trunk:{len:[6,8.5],rad:.42,sections:9,gnarl:.08,up:.3,flare:.5},levels:[{n:[6,8],start:.42,end:.98,angle:[52,12],len:[6.5,8.5],lenDecay:.45,rad:.62,gnarl:.22,up:.28,sections:6},{n:[4,6],start:.2,end:1,angle:[44,14],len:[3.4,4.6],lenDecay:.35,rad:.58,gnarl:.3,up:.25,sections:4},{n:[3,4],start:.25,end:1,angle:[40,16],len:[1.5,2.2],lenDecay:.2,rad:.6,gnarl:.3,up:.2,sections:3}],leaves:{level:2,perBranch:[2,3],along:[.35,1],size:[2.2,2.9],out:.7,up:.35},leaves2:{level:3,perBranch:[3,4],along:[.3,1],size:[1.8,2.4],out:.8,up:.4},crownSquash:.72},guanacaste:{bark:Nn.FISSURED,barkColor:"#6f6358",leafCell:je.LACY,leafTint:"#ffffff",trunk:{len:[3.8,5.2],rad:.95,sections:6,gnarl:.06,up:.2,flare:1.1},levels:[{n:[5,6],start:.72,end:1,angle:[66,8],len:[11,14],lenDecay:.1,rad:.62,gnarl:.12,up:.55,sections:9},{n:[7,9],start:.18,end:1,angle:[42,14],len:[4.5,6.5],lenDecay:.35,rad:.52,gnarl:.25,up:.4,sections:5},{n:[3,5],start:.3,end:1,angle:[40,16],len:[2,2.8],lenDecay:.2,rad:.55,gnarl:.3,up:.3,sections:3}],leaves:{level:3,perBranch:[2,3],along:[.3,1],size:[2.6,3.4],out:.5,up:.7},crownSquash:.5},ceiba:{bark:Nn.SMOOTH,barkColor:"#8a8b7b",leafCell:je.PALMATE,leafTint:"#ffffff",trunk:{len:[22,27],rad:1.05,sections:12,gnarl:.03,up:.5,flare:1.6,fins:5},levels:[{n:[6,8],start:.78,end:1,angle:[78,7],len:[12,15],lenDecay:.25,rad:.45,gnarl:.08,up:.16,sections:8},{n:[6,8],start:.2,end:1,angle:[40,12],len:[4,6],lenDecay:.3,rad:.5,gnarl:.2,up:.45,sections:4},{n:[3,4],start:.3,end:1,angle:[38,14],len:[1.6,2.2],lenDecay:.2,rad:.55,gnarl:.25,up:.4,sections:3}],leaves:{level:3,perBranch:[2,3],along:[.3,1],size:[2.5,3.1],out:.3,up:.9},crownSquash:.35},almond:{bark:Nn.FISSURED,barkColor:"#8a7e70",leafCell:je.ROSETTE,leafTint:"#ffffff",trunk:{len:[9,11],rad:.38,sections:10,gnarl:.04,up:.4,flare:.5},levels:[{n:[11,14],start:.3,end:.98,angle:[86,5],len:[5.5,7],lenDecay:.62,rad:.5,gnarl:.06,up:.04,sections:5,whorl:4},{n:[3,4],start:.3,end:1,angle:[34,12],len:[1.6,2.4],lenDecay:.2,rad:.55,gnarl:.15,up:.5,sections:3}],leaves:{level:2,perBranch:[2,3],along:[.5,1],size:[2.5,3.1],out:.25,up:1},crownSquash:.7},gumbo:{bark:Nn.PEELING,barkColor:"#9a5a3a",leafCell:je.PINNATE,leafTint:"#ffffff",trunk:{len:[6,8],rad:.4,sections:10,gnarl:.28,up:.25,flare:.4},levels:[{n:[4,5],start:.45,end:1,angle:[46,14],len:[5.5,7],lenDecay:.3,rad:.62,gnarl:.38,up:.3,sections:6},{n:[3,4],start:.3,end:1,angle:[40,16],len:[2.6,3.6],lenDecay:.3,rad:.55,gnarl:.35,up:.3,sections:4}],leaves:{level:2,perBranch:[4,6],along:[.3,1],size:[2.3,3],out:.6,up:.5},crownSquash:.75},cecropia:{bark:Nn.RINGED,barkColor:"#b3b2a2",leafCell:je.CECROPIA,leafTint:"#ffffff",trunk:{len:[8.5,10.5],rad:.24,sections:8,gnarl:.05,up:.6,flare:.3},levels:[{n:[4,6],start:.66,end:1,angle:[44,10],len:[3.6,5.2],lenDecay:.2,rad:.62,gnarl:.1,up:.85,sections:5}],leaves:{level:1,perBranch:[7,9],along:[.8,1],size:[2.6,3.3],out:.55,up:.75,tip:!0},crownSquash:.6},bush:{bark:Nn.FISSURED,barkColor:"#4d4232",leafCell:je.BROAD,leafTint:"#ffffff",trunk:{len:[.4,.6],rad:.08,sections:2,gnarl:.1,up:.3,flare:0},levels:[{n:[5,7],start:.3,end:1,angle:[42,16],len:[1.8,2.6],lenDecay:.1,rad:.8,gnarl:.3,up:.5,sections:3}],leaves:{level:1,perBranch:[5,6],along:[.2,1],size:[1.3,1.8],out:.8,up:.35},crownSquash:.8}};function nl(i,[t,e]){return t+(e-t)*i()}function K0(i,[t,e]){return Math.round(t+(e-t)*i())}function sc(i,t=new Zt){const e=i()*2-1,n=i()*Math.PI*2,s=Math.sqrt(1-e*e);return t.set(s*Math.cos(n),e,s*Math.sin(n))}function Gc(i,t=new Zt){return t.set(1,0,0),Math.abs(i.x)>.9&&t.set(0,0,1),t.cross(i).normalize()}function zb(i,t){const e=gi(t),n=[];function s(h,u,d,f,p,v){const g=Math.max(2,v.sections),m=[h.clone()],b=[f],y=u.clone().normalize(),x=d/g,T=new Zt,M=p===0?.62:.78;for(let U=1;U<=g;U++)sc(e,T),y.addScaledVector(T,v.gnarl*(.6+e()*.6)).addScaledVector(Os,v.up/g*1.4).normalize(),m.push(m[U-1].clone().addScaledVector(y,x)),b.push(Math.max(.018,f*(1-M*(U/g))));const A={pts:m,rads:b,level:p,len:d};n.push(A);const S=i.levels[p];if(!S)return A;const _=K0(e,S.n),w=2.39996,E=e()*Math.PI*2;for(let U=0;U<_;U++){let L;if(S.whorl){const Z=Math.ceil(_/S.whorl),nt=Math.floor(U/S.whorl);L=S.start+(S.end-S.start)*(Z>1?nt/(Z-1):1)}else L=S.start+(S.end-S.start)*((U+e()*.8)/_);L=Math.min(.999,L);const z=L*g,O=Math.min(g-1,Math.floor(z)),F=z-O,$=m[O].clone().lerp(m[O+1],F),H=m[O+1].clone().sub(m[O]).normalize(),st=b[O]+(b[O+1]-b[O])*F,ot=Gc(H).applyAxisAngle(H,E+U*(S.whorl?Math.PI*2/S.whorl+Math.floor(U/S.whorl)*.7:w)+(e()-.5)*.4),lt=Oc(S.angle[0]+(e()-.5)*2*S.angle[1]),Mt=H.clone().applyAxisAngle(ot,lt),pt=nl(e,S.len)*(1-S.lenDecay*L)*(p===0?1:.9+.2*e());s($,Mt,pt,Math.max(.02,st*S.rad),p+1,S)}return A}const o=i.trunk,r=sc(e).multiplyScalar(.06),a=Os.clone().add(new Zt(r.x,0,r.z)).normalize();s(new Zt(0,-.4,0),a,nl(e,o.len)+.4,o.rad*(.85+e()*.3),0,{sections:o.sections,gnarl:o.gnarl,up:o.up});const l=[],c=h=>{if(h)for(const u of n){if(u.level!==h.level)continue;const d=K0(e,h.perBranch),f=u.pts.length-1;for(let p=0;p<d;p++){const g=(h.tip?1-e()*.08:h.along[0]+(h.along[1]-h.along[0])*((p+e())/d))*f,m=Math.min(f-1,Math.floor(g)),b=g-m,y=u.pts[m].clone().lerp(u.pts[m+1],b),x=u.pts[m+1].clone().sub(u.pts[m]).normalize();l.push({p:y,d:x,s:nl(e,h.size),out:h.out,up:h.up,cell:i.leafCell,rnd:e()})}}};return c(i.leaves),c(i.leaves2),{branches:n,leaves:l,r:e}}class Gs{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.w=[],this.idx=[],this.v=0}vert(t,e,n,s,o,r){return this.p.push(t.x,t.y,t.z),this.n.push(e.x,e.y,e.z),this.uv.push(n,s),this.c.push(o.r,o.g,o.b),this.w.push(r[0],r[1],r[2]),this.v++}geometry(){const t=new ge;return t.setAttribute("position",new Wt(this.p,3)),t.setAttribute("normal",new Wt(this.n,3)),t.setAttribute("uv",new Wt(this.uv,2)),t.setAttribute("color",new Wt(this.c,3)),t.setAttribute("wnd",new Wt(this.w,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function Nb(i,t,e,n,s){const o=n===0?[10,7,5,3]:[6,4,3,3],r=n===0?9:1,a=new ut(e.barkColor),l=new ut,c=new Zt,h=new Zt,u=new Zt,d=new Zt,f=new Zt;for(const p of t.branches){if(p.level>r||n>0&&p.level>0&&p.rads[0]<.05)continue;const v=o[Math.min(3,p.level)];let g=p.pts,m=p.rads;n>0&&g.length>4&&(g=g.filter((x,T)=>T%2===0||T===g.length-1),m=m.filter((x,T)=>T%2===0||T===p.rads.length-1));const b=i.v;let y=0;for(let x=0;x<g.length;x++){const T=g[Math.max(0,x-1)],M=g[Math.min(g.length-1,x+1)];c.copy(M).sub(T).normalize(),x===0?Gc(c,h):h.copy(d).addScaledVector(c,-d.dot(c)).normalize(),d.copy(h),u.crossVectors(c,h),x>0&&(y+=g[x].distanceTo(g[x-1]));const A=Math.max(0,g[x].y)/s;for(let S=0;S<=v;S++){const _=S/v*Math.PI*2;let w=m[x];if(p.level===0){const z=g[x].y+.4;w*=1+(e.trunk.flare||0)*Math.exp(-z/.9),e.trunk.fins&&(w*=1+1.6*Math.exp(-z/1.6)*Math.pow(Math.max(0,Math.cos(_*e.trunk.fins)),6))}f.copy(h).multiplyScalar(Math.cos(_)).addScaledVector(u,Math.sin(_));const E=g[x].clone().addScaledVector(f,w),U=.82+.18*Math.min(1,A*1.4);l.copy(a).multiplyScalar(U);const L=p.level===0?A*A:Math.min(1,A*A+.15*p.level+.2*(x/g.length));i.vert(E,f,S/v,y/(Math.PI*2*Math.max(.08,m[0]))*.25,l,[L,0,e.bark])}if(x>0){const S=b+(x-1)*(v+1),_=b+x*(v+1);for(let w=0;w<v;w++)i.idx.push(S+w,_+w,S+w+1,S+w+1,_+w,_+w+1)}}}}function Ob(i){const t=new Zt,e=new Zt(1e9,1e9,1e9),n=new Zt(-1e9,-1e9,-1e9);for(const o of i)e.min(o.p),n.max(o.p);t.copy(e).add(n).multiplyScalar(.5);const s=n.clone().sub(e).multiplyScalar(.5).addScalar(1.2);return{c:t,rad:s}}function Gb(i,t,e,n,s){const{c:o,rad:r}=Ob(t.leaves),a=Nc(e.leafCell),l=new ut(s||"#ffffff"),c=new ut,h=new Zt,u=new Zt,d=new Zt,f=new Zt,p=new Zt,v=new Zt,g=gi(991+t.leaves.length);let m=t.leaves,b=1;n>0&&(m=t.leaves.filter((y,x)=>x%5<2),b=1.5);for(const y of m){Gc(y.d,p).applyAxisAngle(y.d,y.rnd*Math.PI*2),h.copy(y.d).multiplyScalar(.55).addScaledVector(p,y.out).addScaledVector(Os,y.up).normalize(),u.crossVectors(h,sc(g,v)).normalize(),d.crossVectors(u,h).normalize(),d.y<0&&(d.negate(),u.negate());const x=y.s*b,T=y.p.clone().addScaledVector(h,x*.5);f.copy(T).sub(o).divide(r);const M=Math.min(1.4,f.length());f.normalize();const A=f.clone().multiplyScalar(.72).addScaledVector(d,.28).normalize(),S=.66+.34*xn.smoothstep(M,.2,1);c.copy(l).multiplyScalar(S*(.88+g()*.24));const _=g(),w=x*.5,E=[y.p.clone().addScaledVector(u,-w),y.p.clone().addScaledVector(u,w),y.p.clone().addScaledVector(u,w).addScaledVector(h,x),y.p.clone().addScaledVector(u,-w).addScaledVector(h,x)],U=[[a.u0,a.v0],[a.u1,a.v0],[a.u1,a.v1],[a.u0,a.v1]],L=i.v;for(let z=0;z<4;z++)i.vert(E[z],A,U[z][0],U[z][1],c,[z<2?.6:1,_,0]);i.idx.push(L,L+1,L+2,L,L+2,L+3)}return{center:o,radius:r}}function J0(i,t){const e=gi(i),n=new Gs,s=new Gs,o=9+e()*8,r=new Zt(Math.cos(e()*6.28),0,Math.sin(e()*6.28)),a=1.2+e()*3.2,l=new es([new Zt(0,-.3,0),new Zt(0,o*.3,0).addScaledVector(r,a*.15),new Zt(0,o*.66,0).addScaledVector(r,a*.55),new Zt(0,o,0).addScaledVector(r,a)]),c=t===0?14:6,h=t===0?8:5,u=l.computeFrenetFrames(c,!1),d=new ut("#a39b8a"),f=new ut;for(let _=0;_<=c;_++){const w=_/c,E=l.getPointAt(w),U=.2+.1*(1-w)+.22*Math.exp(-w*o/.7);for(let L=0;L<=h;L++){const z=L/h*Math.PI*2,O=u.normals[_].clone().multiplyScalar(Math.cos(z)).addScaledVector(u.binormals[_],Math.sin(z));f.copy(d).multiplyScalar(.85+.15*w),n.vert(E.clone().addScaledVector(O,U),O,L/h,w*o*1.6,f,[w*w,0,Nn.RINGED])}if(_>0){const L=(_-1)*(h+1),z=_*(h+1);for(let O=0;O<h;O++)n.idx.push(L+O,z+O,L+O+1,L+O+1,z+O,z+O+1)}}const p=l.getPointAt(1),v=new ut("#6d6446"),g=t===0?22:14,m=Nc(je.FROND),b=new ut("#ffffff"),y=new ut("#c8a86a"),x=t===0?10:5,T=(m.u0+m.u1)/2;for(let _=0;_<g;_++){const w=_/g,E=_*2.39996+e()*.3,U=new Zt(Math.cos(E),0,Math.sin(E)),L=Oc(62-w*95+(e()-.5)*12),z=(3.6+e()*1.6)*(t===0?1:1.08),O=w>.9&&e()<.6,F=.25+w*.55,$=new Zt().crossVectors(Os,U).normalize(),H=.35,st=s.v,ot=O?y:b,lt=e();for(let Mt=0;Mt<=x;Mt++){const pt=Mt/x,Z=U.clone().multiplyScalar(Math.cos(L)).setY(Math.sin(L)),nt=p.clone().addScaledVector(Z,z*pt).add(new Zt(0,-F*z*pt*pt,0)),mt=(.25+.95*Math.sin(Math.PI*Math.min(1,.12+pt*.9)))*(O?.35:1),X=Z.clone().add(new Zt(0,-2*F*pt,0)).normalize(),Q=new Zt().crossVectors(X,Os).normalize();Q.lengthSq()<.1&&Q.copy($);const tt=new Zt().crossVectors(Q,X).normalize();tt.y<0&&tt.negate();const j=m.v0+(m.v1-m.v0)*pt,it=.4+.6*pt,G=tt.clone().multiplyScalar(.5).add(Z.clone().multiplyScalar(.5)).normalize();if(s.vert(nt.clone().addScaledVector(Q,-mt).addScaledVector(tt,-mt*H),G,m.u0,j,ot,[it,lt,0]),s.vert(nt,G,T,j,ot,[it,lt,0]),s.vert(nt.clone().addScaledVector(Q,mt).addScaledVector(tt,-mt*H),G,m.u1,j,ot,[it,lt,0]),Mt>0){const k=st+(Mt-1)*3,R=st+Mt*3;s.idx.push(k,R,k+1,k+1,R,R+1,k+1,R+1,k+2,k+2,R+1,R+2)}}}if(t===0){const w=new Ac(.16,0).attributes.position,E=new ut("#6a5a2a");for(let U=0;U<7;U++){const L=U*.9,z=new Zt(Math.cos(L)*.35,-.35-U%2*.15,Math.sin(L)*.35).add(p),O=n.v;for(let F=0;F<w.count;F++){const $=new Zt().fromBufferAttribute(w,F);n.vert($.clone().add(z),$.clone().normalize(),0,0,E,[1,0,Nn.SMOOTH])}for(let F=0;F<w.count;F+=3)n.idx.push(O+F,O+F+1,O+F+2)}for(let U=0;U<8;U++){const L=U/8*6.28,z=p.clone().add(new Zt(Math.cos(L)*.28,-.25,Math.sin(L)*.28)),O=n.v,F=new ra(.16,.9,4,1,!0);F.rotateX(Math.PI),F.rotateZ(Math.cos(L)*.5),F.rotateX(-Math.sin(L)*.5);const $=F.attributes.position,H=F.index.array;for(let st=0;st<$.count;st++){const ot=new Zt().fromBufferAttribute($,st);n.vert(ot.add(z),new Zt(Math.cos(L),0,Math.sin(L)),0,0,v,[1,0,Nn.RINGED])}for(let st=0;st<H.length;st++)n.idx.push(O+H[st])}}const M=s.geometry(),A=n.geometry(),S=new tn().setFromBufferAttribute(M.attributes.position).union(new tn().setFromBufferAttribute(A.attributes.position));return{branches:A,leaves:M,bounds:S}}function Q0(i,t){const e=gi(i),n=new Gs,s=new Gs,o=3+Math.floor(e()*3),r=Nc(je.BANANA),a=new ut("#6d7a3c"),l=new ut("#ffffff");for(let d=0;d<o;d++){const f=e()*6.28,p=e()*.8,v=new Zt(Math.cos(f)*p,0,Math.sin(f)*p),g=1.6+e()*1.8,m=t===0?6:4,b=n.v;for(let T=0;T<=2;T++)for(let M=0;M<=m;M++){const A=M/m*6.28,S=.12-T*.03,_=new Zt(Math.cos(A),0,Math.sin(A));n.vert(v.clone().add(new Zt(0,g*T/2,0)).addScaledVector(_,S),_,M/m,T,a,[T/2*.3,0,Nn.SMOOTH])}for(let T=1;T<=2;T++){const M=b+(T-1)*(m+1),A=b+T*(m+1);for(let S=0;S<m;S++)n.idx.push(M+S,A+S,M+S+1,M+S+1,A+S,A+S+1)}const y=v.clone().setY(g),x=t===0?6:4;for(let T=0;T<x;T++){const M=T*2.4+e(),A=new Zt(Math.cos(M),0,Math.sin(M)),S=1.8+e()*1.2,_=Oc(55-T*14),w=new Zt().crossVectors(Os,A).normalize(),E=t===0?5:3,U=s.v,L=e();for(let z=0;z<=E;z++){const O=z/E,F=y.clone().addScaledVector(A,Math.cos(_)*S*O).add(new Zt(0,Math.sin(_)*S*O-.9*S*O*O*(.4+T*.12),0)),$=.42*S*.5,H=new Zt().crossVectors(w,A).normalize();H.y<0&&H.negate();const st=r.v0+(r.v1-r.v0)*O;if(s.vert(F.clone().addScaledVector(w,-$),H,r.u0,st,l,[.5+O*.5,L,0]),s.vert(F.clone().addScaledVector(w,$),H,r.u1,st,l,[.5+O*.5,L,0]),z>0){const ot=U+(z-1)*2,lt=U+z*2;s.idx.push(ot,lt,ot+1,ot+1,lt,lt+1)}}}}const c=s.geometry(),h=n.geometry(),u=new tn().setFromBufferAttribute(c.attributes.position).union(new tn().setFromBufferAttribute(h.attributes.position));return{branches:h,leaves:c,bounds:u}}function bd(i,t){if(i==="palm"){const a=J0(t,0),l=J0(t,1);return{lods:[a,l],bounds:a.bounds}}if(i==="banana"){const a=Q0(t,0),l=Q0(t,1);return{lods:[a,l],bounds:a.bounds}}const e=Fb[i],n=zb(e,t);let s=0;for(const a of n.branches)for(const l of a.pts)s=Math.max(s,l.y);for(const a of n.leaves)s=Math.max(s,a.p.y+a.s);const o=[0,1].map(a=>{const l=new Gs,c=new Gs;return Nb(l,n,e,a,s),Gb(c,n,e,a,e.leafTint),{branches:l.geometry(),leaves:c.geometry()}}),r=new tn().setFromBufferAttribute(o[0].leaves.attributes.position).union(new tn().setFromBufferAttribute(o[0].branches.attributes.position));return{lods:o,bounds:r}}const Hb=`
  vec3 vIp = vec3(0.0);
  #ifdef USE_INSTANCING
    vIp = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
  #endif
  float wPh = vIp.x * 0.021 + vIp.z * 0.017;
  float wGust = 0.65 + 0.35 * sin(uTime * 0.31 + wPh * 0.7);
  float wK = wnd.x * uWind * wGust;
  float wLen = max(1.0, position.y * 0.07);
  transformed.x += (sin(uTime * 0.83 + wPh) * 0.6 + sin(uTime * 1.61 + wPh * 1.3) * 0.28) * wK * 0.32 * wLen;
  transformed.z += (cos(uTime * 0.71 + wPh) * 0.5) * wK * 0.22 * wLen;
  #ifdef IS_LEAF
    transformed += objectNormal * sin(uTime * 3.7 + wnd.y * 40.0 + wPh * 3.0) * 0.07 * wnd.x * uWind;
  #endif
`;function Rr(i,t,e){i.uniforms.uTime=t.time,i.uniforms.uWind=t.wind,i.vertexShader=(e?`#define IS_LEAF
`:"")+`attribute vec3 wnd;
uniform float uTime;
uniform float uWind;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Hb)}function xd({atlas:i,uniforms:t,msaa:e,tier:n}){const s=new xe({vertexColors:!0,roughness:.92,metalness:0});s.onBeforeCompile=l=>{Rr(l,t,!1),l.vertexShader=`varying vec3 vBark;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBark = vec3(uv, wnd.z);`),l.fragmentShader=`varying vec3 vBark;
float bh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float bn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(bh(i),bh(i+vec2(1,0)),f.x),mix(bh(i+vec2(0,1)),bh(i+vec2(1,1)),f.x),f.y); }
`+l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 q = vec2(vBark.x * 9.0, vBark.y * 3.0);
          float t = vBark.z;
          float k = 1.0;
          if (t < 0.5) {            // fissured
            float f = abs(sin(q.x * 3.14159 + bn(q * vec2(1.0, 0.6)) * 4.0));
            k = mix(0.55, 1.08, smoothstep(0.08, 0.5, f)) * (0.9 + 0.2 * bn(q * 3.0));
          } else if (t < 1.5) {     // smooth, lichen patches
            k = 0.92 + 0.16 * bn(q * 1.3) - 0.12 * smoothstep(0.6, 0.8, bn(q * 0.7 + 3.0));
          } else if (t < 2.5) {     // peeling copper with pale flakes
            float fl = smoothstep(0.55, 0.62, bn(q * vec2(1.4, 2.2)));
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.55, 0.45), fl * 0.55);
            k = 0.95 + 0.1 * bn(q * 4.0);
          } else {                  // palm rings
            float ring = smoothstep(0.75, 0.95, fract(vBark.y * 2.6 + bn(q) * 0.2));
            k = 1.0 - ring * 0.35 + 0.08 * bn(q * 2.0);
          }
          diffuseColor.rgb *= k;
        }`)},s.customProgramCacheKey=()=>"veg-bark";const o=new xe({map:i,vertexColors:!0,roughness:.72,metalness:0,side:Ee,alphaTest:e?.35:.42,alphaToCoverage:!!e});o.onBeforeCompile=l=>{Rr(l,t,!0),l.uniforms.uTrans=t.trans,l.fragmentShader=`uniform float uTrans;
`+l.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        #ifdef USE_MAP
          {
            vec2 tsz = vec2(textureSize(map, 0));
            vec2 ddx = dFdx(vMapUv * tsz), ddy = dFdy(vMapUv * tsz);
            float mip = max(0.0, 0.5 * log2(max(dot(ddx, ddx), dot(ddy, ddy))));
            diffuseColor.a = min(1.0, diffuseColor.a * (1.0 + mip * 0.3));
          }
        #endif`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize(vNormal);`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        #if NUM_DIR_LIGHTS > 0
        {
          float tr = pow(saturate(dot(geometryViewDir, -directionalLights[0].direction)), 3.0);
          reflectedLight.directDiffuse += diffuseColor.rgb * directionalLights[0].color * (tr * uTrans + 0.08);
        }
        #endif`)},o.customProgramCacheKey=()=>"veg-leaf-"+(e?"a2c":"at");const r=new Xl({depthPacking:Bl,map:i,alphaTest:.5,side:Ee});r.onBeforeCompile=l=>Rr(l,t,!1),r.customProgramCacheKey=()=>"veg-depth-leaf";const a=new Xl({depthPacking:Bl});return a.onBeforeCompile=l=>Rr(l,t,!1),a.customProgramCacheKey=()=>"veg-depth-bark",{bark:s,leaf:o,depthLeaf:r,depthBark:a}}const Vb=`
vec2 hemiOctEncode(vec3 d){ d /= (abs(d.x) + abs(d.y) + abs(d.z)); return vec2(d.x + d.z, d.x - d.z); }
vec3 hemiOctDecode(vec2 e){ vec3 d = vec3(e.x + e.y, 0.0, e.x - e.y) * 0.5; d.y = 1.0 - abs(d.x) - abs(d.z); return normalize(d); }
`;function Bb(i,t){const e=(i+t)*.5,n=(i-t)*.5,s=1-Math.abs(e)-Math.abs(n);return new D(e,Math.max(s,0),n).normalize()}function Wb(i){const t=i.clone().negate(),e=new D().crossVectors(t,new D(0,1,0));e.lengthSq()<1e-6?e.set(1,0,0):e.normalize();const n=new D().crossVectors(e,t);return{r:e,u:n,f:t}}const Xb=`
  attribute vec3 wnd;
  varying vec2 vUv; varying vec3 vCol; varying vec3 vN; varying float vLeaf;
  uniform float uLeaf;
  void main(){ vUv = uv; vCol = color; vN = normal; vLeaf = uLeaf; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,qb=`
  uniform sampler2D map; uniform float uMode; uniform float uLeaf;
  varying vec2 vUv; varying vec3 vCol; varying vec3 vN; varying float vLeaf;
  void main(){
    vec4 t = uLeaf > 0.5 ? texture2D(map, vUv) : vec4(1.0);
    if (t.a < 0.5) discard;
    if (uMode < 0.5) {
      vec3 alb = t.rgb * vCol;
      gl_FragColor = vec4(pow(max(alb, vec3(0.0)), vec3(1.0 / 2.2)), 1.0);
    } else {
      vec3 n = normalize(vN);
      if (!gl_FrontFacing && uLeaf < 0.5) n = -n;
      gl_FragColor = vec4(n * 0.5 + 0.5, uLeaf > 0.5 ? 1.0 : 0.3);
    }
  }`;class Yb{constructor(t,{frames:e=8,size:n=80}={}){this.renderer=t,this.N=e,this.S=n,this.cam=new ea(-1,1,1,-1,.1,100),this.scene=new Co}bake(t,e,n){const{renderer:s,N:o,S:r,cam:a,scene:l}=this,c=e.getCenter(new D);let h=0;for(const A of[t.branches,t.leaves]){const S=A.attributes.position.array;for(let _=0;_<S.length;_+=3){const w=S[_]-c.x,E=S[_+1]-c.y,U=S[_+2]-c.z;h=Math.max(h,w*w+E*E+U*U)}}const u=Math.sqrt(h)*1.01,d=o*r,f=()=>new dn(d,d,{generateMipmaps:!0,minFilter:$n,magFilter:Rn,depthBuffer:!0}),p=f(),v=f(),g=A=>new Ce({uniforms:{map:{value:n},uMode:{value:0},uLeaf:{value:A?1:0}},vertexShader:Xb,fragmentShader:qb,vertexColors:!0,side:Ee}),m=g(!1),b=g(!0),y=new Xt(t.branches,m),x=new Xt(t.leaves,b);l.add(y,x),a.left=-u,a.right=u,a.top=u,a.bottom=-u,a.near=.01,a.far=u*4,a.updateProjectionMatrix();const T={rt:s.getRenderTarget(),clear:s.getClearColor(new ut),alpha:s.getClearAlpha(),tm:s.toneMapping,scissor:s.getScissorTest(),shadow:s.shadowMap.enabled};s.toneMapping=fi,s.setClearColor(0,0);const M=new At;for(let A=0;A<2;A++){m.uniforms.uMode.value=b.uniforms.uMode.value=A;const S=A?v:p;S.viewport.set(0,0,d,d),S.scissor.set(0,0,d,d),S.scissorTest=!1,s.setRenderTarget(S),s.clear(!0,!0,!0),S.scissorTest=!0;for(let _=0;_<o;_++)for(let w=0;w<o;w++){const E=(w+.5)/o*2-1,U=(_+.5)/o*2-1,L=Bb(E,U),{r:z,u:O}=Wb(L);M.makeBasis(z,O,L).setPosition(c.clone().addScaledVector(L,u*2)),a.matrixAutoUpdate=!1,a.matrix.copy(M),a.matrixWorld.copy(M),a.matrixWorldInverse.copy(M).invert(),S.viewport.set(w*r,_*r,r,r),S.scissor.set(w*r,_*r,r,r),s.setRenderTarget(S),s.render(l,a)}S.viewport.set(0,0,d,d),S.scissor.set(0,0,d,d),S.scissorTest=!1}return s.setRenderTarget(T.rt),s.setClearColor(T.clear,T.alpha),s.toneMapping=T.tm,l.clear(),m.dispose(),b.dispose(),p.texture.generateMipmaps=!0,{color:p.texture,normal:v.texture,rts:[p,v],center:c,radius:u,frames:o}}}function jb(i,t){return new Ce({uniforms:{tColor:{value:i.color},tNormal:{value:i.normal},uCenter:{value:i.center},uRadius:{value:i.radius},uFrames:{value:i.frames},uSunDir:t.sunDir,uSunCol:t.sunCol,uSky:t.sky,uGround:t.ground,uFogColor:t.fogColor,uFogDensity:t.fogDensity,uTrans:t.trans,uFade:{value:1}},vertexShader:`
      ${Vb}
      uniform vec3 uCenter; uniform float uRadius; uniform float uFrames;
      varying vec2 vUv; varying vec2 vF0; varying vec2 vFr; varying float vYaw; varying vec3 vTint; varying vec3 vWorld;
      void main(){
        vec3 ax = instanceMatrix[0].xyz;
        float sc = length(ax);
        float yaw = atan(-ax.z, ax.x);
        vYaw = yaw;
        vec3 ip = instanceMatrix[3].xyz;
        float cy = cos(yaw), sy = sin(yaw);
        vec3 cL = uCenter;
        vec3 cW = ip + vec3(cL.x * cy + cL.z * sy, cL.y, -cL.x * sy + cL.z * cy) * sc;
        vec3 dW = normalize(cameraPosition - cW);
        vec3 dL = vec3(dW.x * cy - dW.z * sy, max(dW.y, 0.0), dW.x * sy + dW.z * cy);
        dL = normalize(dL);
        vec2 g = (hemiOctEncode(dL) * 0.5 + 0.5) * uFrames - 0.5;
        g = clamp(g, 0.0, uFrames - 1.0);
        vF0 = floor(g); vFr = g - vF0;
        vec3 f = -dW;
        vec3 r = cross(f, vec3(0.0, 1.0, 0.0));
        r = length(r) < 1e-3 ? vec3(1.0, 0.0, 0.0) : normalize(r);
        vec3 u = cross(r, f);
        float R = uRadius * sc;
        vec3 p = cW + (r * position.x + u * position.y) * 2.0 * R;
        vUv = position.xy + 0.5;
        vTint = instanceColor;
        vWorld = p;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform sampler2D tColor; uniform sampler2D tNormal; uniform float uFrames;
      uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround;
      uniform vec3 uFogColor; uniform float uFogDensity; uniform float uTrans;
      varying vec2 vUv; varying vec2 vF0; varying vec2 vFr; varying float vYaw; varying vec3 vTint; varying vec3 vWorld;
      vec4 tap(sampler2D t, vec2 f){ vec2 fc = clamp(f, vec2(0.0), vec2(uFrames - 1.0)); return texture2D(t, (fc + clamp(vUv, 0.01, 0.99)) / uFrames); }
      void main(){
        vec2 f0 = vF0, fr = vFr;
        vec4 c00 = tap(tColor, f0), c10 = tap(tColor, f0 + vec2(1, 0)), c01 = tap(tColor, f0 + vec2(0, 1)), c11 = tap(tColor, f0 + vec2(1, 1));
        vec4 c = mix(mix(c00, c10, fr.x), mix(c01, c11, fr.x), fr.y);
        vec2 tsz = vec2(textureSize(tColor, 0)) / uFrames;
        vec2 ddx = dFdx(vUv * tsz), ddy = dFdy(vUv * tsz);
        float mip = max(0.0, 0.5 * log2(max(dot(ddx, ddx), dot(ddy, ddy))));
        if (c.a * (1.0 + mip * 0.45) < 0.42) discard;
        vec4 n4 = mix(mix(tap(tNormal, f0), tap(tNormal, f0 + vec2(1, 0)), fr.x), mix(tap(tNormal, f0 + vec2(0, 1)), tap(tNormal, f0 + vec2(1, 1)), fr.x), fr.y);
        vec3 nL = normalize(n4.xyz * 2.0 - 1.0);
        float cy = cos(vYaw), sy = sin(vYaw);
        vec3 N = normalize(vec3(nL.x * cy + nL.z * sy, nL.y, -nL.x * sy + nL.z * cy));
        vec3 alb = pow(c.rgb / max(c.a, 0.001), vec3(2.2)) * vTint;
        vec3 V = normalize(cameraPosition - vWorld);
        float ndl = max(dot(N, uSunDir), 0.0);
        vec3 hemi = mix(uGround, uSky, N.y * 0.5 + 0.5);
        float leaf = n4.a;
        float tr = pow(max(dot(V, -uSunDir), 0.0), 3.0) * uTrans * leaf;
        vec3 col = alb * (0.31831 * (uSunCol * ndl * 0.8 + hemi) + uSunCol * (tr + 0.08 * leaf));
        float dist = length(cameraPosition - vWorld);
        col = mix(col, uFogColor, 1.0 - exp(-uFogDensity * uFogDensity * dist * dist));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}const tu={high:{evergreen:[11,23,37],guanacaste:[5,19],ceiba:[3],almond:[8],gumbo:[13,29],cecropia:[17],palm:[41,43,47],bush:[51,53],banana:[61]},mid:{evergreen:[11,23],guanacaste:[5],ceiba:[3],almond:[8],gumbo:[13],cecropia:[17],palm:[41,43],bush:[51],banana:[61]},low:{evergreen:[11,23],guanacaste:[5],ceiba:[3],almond:[8],gumbo:[13],cecropia:[17],palm:[41],bush:[51],banana:[61]}},eu={high:[3.4,11],mid:[2.4,8],low:[0,5.5]},$b={bush:420,banana:300},Zb={high:{palm:46},mid:{palm:34},low:{palm:18}};function Kb(i){const t=i();return t<.44?"evergreen":t<.57?"guanacaste":t<.72?"gumbo":t<.82?"cecropia":t<.88?"almond":t<.925?"ceiba":"evergreen"}function Jb(i){const t=i();return t<.45?"almond":t<.88?"evergreen":"gumbo"}function Qb({tier:i,gardens:t=[]}){const e=gi(7),n=i==="high"?{trees:6400,palms:560,bushes:4200,banana:280}:i==="mid"?{trees:4600,palms:400,bushes:2400,banana:170}:{trees:2600,palms:240,bushes:900,banana:70},s=[],o=new ut,r=(c,h,u,d,f=-.2,p)=>{const v=jn(h,u)+f;if(!p){o.setHSL(.26+(e()-.5)*.06,.5,.5);const g=.86+e()*.28;p=[g*(.96+e()*.08),g,g*(.9+e()*.12)]}s.push({kind:c,x:h,y:v,z:u,s:d,yaw:e()*Math.PI*2,tint:p})};let a=0,l=0;for(;a<n.trees&&l<n.trees*30;){l++;const c=e()<.7,h=c?(e()-.5)*580:(e()-.5)*1380,u=c?-40-e()*430:-900+e()*920,d=u-Li(h);if(d>-40||pr(h,u,2)||$a(h,u))continue;const p=(Math.abs(u+220)<210&&Math.abs(h)<270?.85:.45)+.4*Mo(h*.012,u*.012);if(e()>p)continue;const v=-d<75?Jb(e):Kb(e),g=(v==="ceiba"?.9:.72)+e()*.42+(d<-220?.08:0);r(v,h,u,g),a++}for(a=0,l=0;a<n.palms&&l<n.palms*40;){l++;const c=(e()-.5)*1300;let h=Li(c)-12-e()*55;e()<.22&&(h=-80-e()*300),!pr(c,h,0)&&($a(c,h)&&h<-60||jn(c,h)<.8||(r("palm",c,h,.85+e()*.35,-.1),a++))}for(a=0,l=0;a<n.bushes&&l<n.bushes*40;){l++;const c=(e()-.5)*900,h=-40-e()*420;if(pr(c,h,-3))continue;const u=$a(c,h);-(h-Li(c))<45||(r("bush",c,h,(u?1.3:.9)+e()*.9,-.15),a++)}for(a=0,l=0;a<n.banana&&l<n.banana*30;){l++;const c=Oe[Math.floor(e()*Oe.length)],h=e()*Math.PI*2,u=16+e()*34,d=c.world.x+Math.cos(h)*u,f=c.world.z+Math.sin(h)*u;pr(d,f,-4)||(r("banana",d,f,.8+e()*.5,-.1),a++)}for(const c of t)r(c.kind||"palm",c.x,c.z,c.s||1,c.yOff??-.1);return s}function tx(i,t,e,n,s,o,r){const a=Math.cos(r)*o,l=Math.sin(r)*o;i[t]=a,i[t+1]=0,i[t+2]=-l,i[t+3]=0,i[t+4]=0,i[t+5]=o,i[t+6]=0,i[t+7]=0,i[t+8]=l,i[t+9]=0,i[t+10]=a,i[t+11]=0,i[t+12]=e,i[t+13]=n,i[t+14]=s,i[t+15]=1}class ex{constructor({renderer:t,tier:e,uniforms:n,lightU:s,placements:o,msaa:r}){this.tier=e,this.group=new se,this.group.name="forest";const a=vd(e==="high"?2048:1024);this.atlas=a;const l=xd({atlas:a,uniforms:n,msaa:r,tier:e});this.M=l;const c=new Yb(t,e==="high"?{frames:8,size:80}:e==="mid"?{frames:7,size:64}:{frames:6,size:56}),h=new Me(1,1),u=tu[e]||tu.mid,d=e!=="low";this.lodK=eu[e]||eu.mid,this.variants=[];const f=new Map;for(const p of o)f.has(p.kind)||f.set(p.kind,[]),f.get(p.kind).push(p);for(const[p,v]of f){const g=u[p]||[1],m=g.map(()=>[]);v.forEach((b,y)=>m[(y+Math.abs(Math.floor(b.x*13+b.z*7)))%g.length].push(b)),g.forEach((b,y)=>{const x=m[y];if(!x.length)return;const T=bd(p,b),M=c.bake(T.lods[0],T.bounds,a),A=x.length,S=(E,U,L,z,O=!0)=>{const F=new ko(E,U,A);return F.instanceColor=new Ns(new Float32Array(A*3),3),F.instanceMatrix.setUsage(Eo),F.instanceColor.setUsage(Eo),F.frustumCulled=!1,F.count=0,z&&d&&(F.castShadow=!0,F.customDepthMaterial=L),F.receiveShadow=d&&O,this.group.add(F),F},_=this.lodK[0]>0,w={kind:p,n:A,tree:T,imp:M,radius:M.radius,cy:M.center.y,maxDist:$b[p]||1e9,l0:_?[S(T.lods[0].branches,l.bark,l.depthBark,!0),S(T.lods[0].leaves,l.leaf,l.depthLeaf,!0,!1)]:null,l1:[S(T.lods[1].branches,l.bark,l.depthBark,!0),S(T.lods[1].leaves,l.leaf,l.depthLeaf,!0,!1)],im:S(h,jb(M,s),null,!1),mats:new Float32Array(A*16),cols:new Float32Array(A*3),cen:new Float32Array(A*4),lod:new Int8Array(A).fill(2)};w.im.receiveShadow=!1,x.forEach((E,U)=>{tx(w.mats,U*16,E.x,E.y,E.z,E.s,E.yaw),w.cols.set(E.tint,U*3),w.cen[U*4]=E.x,w.cen[U*4+1]=E.y+M.center.y*E.s,w.cen[U*4+2]=E.z,w.cen[U*4+3]=E.s}),this.variants.push(w)})}this.frustum=new ta,this.pm=new At,this.lastCam=new At,this.count=o.length}update(t,e=!1){t.updateMatrixWorld();const n=t.matrixWorld;if(!e&&this.lastCam.equals(n))return;this.lastCam.copy(n),this.pm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.pm);const s=this.frustum.planes,o=n.elements[12],r=n.elements[13],a=n.elements[14],l=this.lodScale??1,c=this.lodK[0]*l;this.lodK[1]*l;const h=Zb[this.tier]||{};let u=[0,0,0];for(const d of this.variants){const{n:f,cen:p,mats:v,cols:g,lod:m}=d,b=d.radius,y=(h[d.kind]||this.lodK[1])*l,x=[d.l0,d.l1,[d.im]],T=[0,0,0],M=x.map(S=>S?S.map(_=>_.instanceMatrix.array):null),A=x.map(S=>S?S.map(_=>_.instanceColor.array):null);for(let S=0;S<f;S++){const _=p[S*4],w=p[S*4+1],E=p[S*4+2],U=p[S*4+3],L=b*U;let z=!0;for(let mt=0;mt<6;mt++){const X=s[mt];if(X.normal.x*_+X.normal.y*w+X.normal.z*E+X.constant<-L-25){z=!1;break}}if(!z)continue;const O=_-o,F=w-r,$=E-a,H=Math.sqrt(O*O+F*F+$*$);if(H>d.maxDist||H<L*.9)continue;const st=m[S],ot=st===0?1.06:.94,lt=st<=1?1.05:.95;let Mt=H<c*L*ot?0:H<y*L*lt?1:2;Mt===0&&!d.l0&&(Mt=1),m[S]=Mt;const pt=T[Mt]++,Z=M[Mt],nt=A[Mt];for(let mt=0;mt<Z.length;mt++)Z[mt].set(v.subarray(S*16,S*16+16),pt*16),nt[mt][pt*3]=g[S*3],nt[mt][pt*3+1]=g[S*3+1],nt[mt][pt*3+2]=g[S*3+2]}x.forEach((S,_)=>{if(S){for(const w of S)w.count=T[_],T[_]&&(w.instanceMatrix.clearUpdateRanges(),w.instanceMatrix.addUpdateRange(0,T[_]*16),w.instanceMatrix.needsUpdate=!0,w.instanceColor.clearUpdateRanges(),w.instanceColor.addUpdateRange(0,T[_]*3),w.instanceColor.needsUpdate=!0);u[_]+=T[_]}})}this.stats=u}}function nx(){const i=new xe({color:"#223331",roughness:.04,metalness:.6,emissive:new ut("#ffc27a"),emissiveIntensity:.6,envMapIntensity:1.3});return i.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vGWP;
varying vec3 vGWN;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vGWP = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vGWN = normalize(mat3(modelMatrix) * normal);`),t.fragmentShader=`varying vec3 vGWP;
varying vec3 vGWN;
float gHash(float n){ return fract(sin(n * 91.345) * 47453.5453); }
`+t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      if (abs(vGWN.y) < 0.5) {
        float coord = abs(vGWN.z) > abs(vGWN.x) ? vGWP.x : vGWP.z;
        float f = fract(coord / 1.6);
        float mull = smoothstep(0.018, 0.04, min(f, 1.0 - f));
        float room = 0.45 + 0.55 * gHash(floor(coord / 4.8) + floor(vGWP.y / 3.0) * 7.0);
        float lampY = fract(vGWP.y / 3.1);
        float warmth = mix(1.0, 0.55, smoothstep(0.35, 0.95, lampY));
        totalEmissiveRadiance *= mull * room * warmth;
        diffuseColor.rgb *= mix(0.25, 1.0, mull);
      }`)},i.customProgramCacheKey=()=>"selva-glass",i}function ix(){const i={value:.6},t={teak:new xe({color:"#7a5434",roughness:.74}),teakLight:new xe({color:"#b07a4a",roughness:.7}),darkWood:new xe({color:"#3c281b",roughness:.8}),roof:new xe({color:"#3a3c3f",roughness:.85,flatShading:!0}),roofIvory:new xe({color:"#3a3c3f",roughness:.85,flatShading:!0}),concrete:new xe({color:"#d6cfc1",roughness:.88}),white:new xe({color:"#efe9dd",roughness:.8}),stone:new xe({color:"#c8bba2",roughness:.95}),steel:new xe({color:"#23282a",roughness:.45,metalness:.55}),fabric:new xe({color:"#f3efe6",roughness:1}),glass:nx(),lantern:new Hn({color:new ut("#ffd7a0").multiplyScalar(2.2)}),hammock:new xe({color:"#efe3cf",roughness:1,side:Ee})};return t.glassGlow=i,t}function Vt(i,t,e,n,s,o,r,a=0){const l=new Xt(new Ae(i,t,e),n);return l.position.set(s,o,r),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function Hc(i,t,e,n){const s=i/2,o=t/2,r=Math.max(0,(i-t)/2),a=[[-s,0,-o],[s,0,-o],[s,0,o],[-s,0,o],[-r,e,0],[r,e,0]],l=[[3,2,5],[3,5,4],[1,0,4],[1,4,5],[2,1,5],[0,3,4],[0,1,2],[0,2,3]],c=[];l.forEach(d=>d.forEach(f=>c.push(...a[f])));const h=new ge;h.setAttribute("position",new Wt(c,3)),h.computeVertexNormals();const u=new Xt(h,n);return u.castShadow=!0,u.receiveShadow=!0,u}function sx(i){return new Ce({uniforms:{uTime:i.time,uNight:i.night,uFogColor:i.fogColor,uFogDensity:i.fogDensity,uSpiral:{value:0},uCenter:{value:new ht},uRadius:{value:4}},vertexShader:`
      varying vec3 vWorld;
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform float uTime, uNight, uSpiral, uRadius, uFogDensity; uniform vec2 uCenter; uniform vec3 uFogColor;
      varying vec3 vWorld;
      ${ha}
      void main(){
        vec2 p = vWorld.xz * 0.85;
        vec2 q = p + vec2(fbm(p * 0.7 + uTime * 0.25), fbm(p * 0.7 - uTime * 0.2)) * 1.3;
        float c = pow(1.0 - abs(sin(q.x * 2.2 + uTime * 0.9) * sin(q.y * 2.0 - uTime * 0.7)), 7.0);
        vec3 deep = vec3(0.05, 0.42, 0.50), light = vec3(0.30, 0.82, 0.84);
        vec3 col = mix(deep, light, 0.55 + 0.2 * fbm(p * 0.3));
        if (uSpiral > 0.5) {
          vec2 d = vWorld.xz - uCenter;
          float r = length(d) / uRadius;
          float th = atan(d.y, d.x);
          float k = log(max(r, 0.02) / 0.05) / 0.3063489;
          float ph = fract((k - th) / 6.2831853);
          float line = smoothstep(0.05, 0.0, abs(ph - 0.5) - 0.44) * smoothstep(1.0, 0.85, r) * smoothstep(0.04, 0.12, r);
          col = mix(col, vec3(0.9, 0.95, 0.92), line * 0.55);
        }
        col += c * 0.28;
        vec3 nightCol = vec3(0.05, 0.62, 0.85) * 1.5 + c * vec3(0.3, 0.8, 1.0) * 0.6;
        col = mix(col, nightCol, uNight * 0.85);
        vec3 v = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(v.y, 0.0), 4.0);
        col = mix(col, vec3(0.9, 0.85, 0.8), fres * 0.35 * (1.0 - uNight));
        float dist = length(cameraPosition - vWorld);
        col = mix(col, uFogColor, 1.0 - exp(-uFogDensity * uFogDensity * dist * dist));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function Fo(i,t,e,n){const s=new se;if(i==="circle"){const o=new Xt(new ze(n.r+.5,n.r+.5,.7,48),e.stone);o.position.y=.35,o.castShadow=o.receiveShadow=!0;const r=new Xt(new Zn(n.r,64),t);r.rotation.x=-Math.PI/2,r.position.y=.72,s.add(o,r)}else{const o=Vt(n.w+.9,.7,n.d+.9,e.stone,0,.35,0),r=new Xt(new Me(n.w,n.d),t);r.rotation.x=-Math.PI/2,r.position.y=.72,s.add(o,r)}return s}function Pn(i,t,e,n=0){const s=new se,o=Vt(.75,.25,2,i.teakLight,0,.35,0),r=Vt(.7,.12,1.4,i.fabric,0,.53,.25),a=Vt(.7,.12,.8,i.fabric,0,.8,-.65);return a.rotation.x=-.7,s.add(o,r,a),s.position.set(t,0,e),s.rotation.y=n,s}function js(i,t,e=.6){const n=new se,s=new He(.18,8,6);return t.forEach(([o,r])=>{const a=new Xt(s,i.lantern);a.position.set(o,e,r),n.add(a)}),n}function Hs(i,t,e,n,s=0,o=.3){const r=new se;return e.forEach(([a,l])=>r.add(Vt(o,n,o,t,a,s+n/2,l))),r}function ox(i,t){const e=new se;e.add(Vt(30,.8,24,i.stone,0,.1,1)),e.add(Vt(26,.25,11,i.teak,0,.62,8)),e.add(Vt(15,.35,9.5,i.concrete,0,.68,-3)),e.add(Vt(14,3.1,8.6,i.glass,0,2.4,-3.2)),e.add(Hs(i,i.teak,[[-7.4,-7.8],[7.4,-7.8],[-7.4,1.6],[7.4,1.6],[0,1.6]],3.9,.7,.32));const n=Vt(10,.32,13,i.teak,-4.6,4.85,-2.6);n.rotation.z=.1,e.add(n);const s=Vt(10,.32,13,i.teak,4.6,4.85,-2.6);s.rotation.z=-.1,e.add(s),[[-12.2,-1.5,.12],[12.2,-1.5,-.12],[0,-12.5,0]].forEach(([a,l,c])=>{const h=new se;h.add(Vt(7,.3,6.4,i.concrete,0,.65,0)),h.add(Vt(6.4,3,5.8,i.glass,0,2.3,0)),h.add(Vt(6.6,3,.25,i.teakLight,0,2.3,-2.95));const u=Hc(8.6,8,2.4,i.roof);u.position.y=3.85,h.add(u),h.position.set(a,0,l),h.rotation.y=c,e.add(h)});const r=Fo("circle",t,i,{r:4.3});return r.position.set(3.5,.3,13.2),e.add(r),e.add(Pn(i,-4,10.5,.3),Pn(i,-6,10.5,.3),Pn(i,10,9.5,-.4)),e.add(Vt(6,.25,6,i.teak,-10,.62,10)),e.add(js(i,[[-13,13],[-7,13.5],[8,14],[12,12],[-14,4],[14,4]],1)),{group:e,water:r.children[1],spiral:{local:new ht(3.5,13.2),r:4.3}}}function rx(i,t){const e=new se;e.add(Vt(34,.8,28,i.stone,0,.1,2)),e.add(Hs(i,i.darkWood,[[-10,13],[-3,13],[4,13],[11,13],[-10,17],[11,17]],4.5,-4,.45)),e.add(Vt(19,.4,11,i.concrete,0,.7,-2)),e.add(Vt(18,3.4,10,i.darkWood,0,2.6,-2.5)),e.add(Vt(16,2.7,.2,i.glass,0,2.4,2.6)),e.add(Vt(.2,2.7,7,i.glass,9.1,2.4,-2)),e.add(Vt(22,.28,14,i.darkWood,0,4.45,-2)),e.add(Vt(15,3.2,9,i.darkWood,0,6.2,-3)),e.add(Vt(13,2.5,.2,i.glass,0,6.1,1.55)),e.add(Vt(.2,2.5,6,i.glass,-7.6,6.1,-3));const n=Hc(20,13,3.6,i.roof);n.position.set(0,7.8,-3),e.add(n),e.add(Vt(24,.4,9,i.teak,0,.72,8.5));const s=Fo("rect",t,i,{w:14,d:4});s.position.set(-1,.3,13),e.add(s),e.add(Pn(i,9,7.5),Pn(i,10.3,7.5),Pn(i,11.6,7.5)),e.add(Vt(7,.3,7,i.teak,16,.7,5)),e.add(Hs(i,i.darkWood,[[13,2],[19,2],[13,8],[19,8]],3,.8,.2));for(let o=0;o<7;o++)e.add(Vt(6.6,.12,.12,i.darkWood,16,3.9,2+o));return e.add(js(i,[[-12,16],[0,16.5],[12,16],[16,9],[-14,6]],1.1)),{group:e,water:s.children[1]}}function ax(i,t){const e=new se,n=7;e.add(Hs(i,i.teak,[[-5,-4],[5,-4],[-5,4],[5,4],[0,-4],[0,4]],n,-2,.4)),e.add(Vt(13,.4,11,i.teak,0,n,.5)),e.add(Vt(7.5,3,6.2,i.glass,-.8,n+1.7,-1.2)),e.add(Hs(i,i.white,[[-4.5,-4.2],[3,-4.2],[-4.5,1.9],[3,1.9]],3.2,n+.2,.22));const s=Hc(11,9.5,2.8,i.roofIvory);s.position.set(-.8,n+3.4,-1.2),e.add(s);for(let a=0;a<=12;a++)e.add(Vt(.06,1,.06,i.white,-6.2+a*1.03,n+.7,5.8));e.add(Vt(12.6,.08,.1,i.white,0,n+1.2,5.8));const o=new Tc(new D(1.8,n+1.6,4.2),new D(3.8,n+.6,4.4),new D(5.8,n+1.6,4.2)),r=new Xt(new la(o,16,.35,6,!1),i.hammock);r.scale.set(1,1,.5),r.position.z=2.1,e.add(r);for(let a=0;a<14;a++)e.add(Vt(1.6,.18,.9,i.teak,-7.2-a*.6,n-.4-a*.55,3-a*.7));return e.add(js(i,[[-6,6],[6,6],[-8.5,1.5]],n+.6)),{group:e}}function lx(i,t){const e=new se;e.add(Vt(30,.8,24,i.concrete,0,.1,1)),e.add(Vt(17,3.2,9,i.white,0,2.3,-3)),e.add(Vt(15,2.6,.2,i.glass,0,2.2,1.6)),e.add(Vt(19,.35,12,i.teak,0,4.05,-2.2)),e.add(Vt(11,3,8,i.white,-2.5,5.7,-4)),e.add(Vt(9.5,2.4,.2,i.glass,-2.5,5.6,.05)),e.add(Vt(13,.35,10,i.teak,-2.5,7.35,-3.4)),e.add(Vt(5,3,5,i.glass,11,2.2,-5)),e.add(Vt(6,.3,6,i.white,11,3.8,-5)),e.add(Vt(24,.3,7,i.stone,0,.62,6));const n=Fo("rect",t,i,{w:14,d:3.4});return n.position.set(0,.3,11.2),e.add(n),e.add(Pn(i,-9.5,7),Pn(i,-8.2,7),Pn(i,9.5,7)),e.add(js(i,[[-8,13.5],[0,13.5],[8,13.5],[-12,4],[12,4]],1)),{group:e,water:n.children[1]}}function cx(i,t){const e=new se;e.add(Vt(30,.8,22,i.concrete,0,.1,1)),e.add(Vt(11,6.2,7.5,i.glass,-4,3.7,-2)),[[-9.5,1.75],[1.5,1.75],[-9.5,-5.75],[1.5,-5.75]].forEach(([s,o])=>e.add(Vt(.22,6.4,.22,i.steel,s,3.8,o))),e.add(Vt(12.5,.35,9,i.steel,-4,7,-2)),e.add(Hs(i,i.steel,[[6,-5],[12,-5],[6,0],[12,0]],3.4,.6,.2)),e.add(Vt(6.5,3,5.5,i.darkWood,9,5.5,-2.5)),e.add(Vt(6,2.4,.2,i.glass,9,5.4,.3)),e.add(Vt(7.5,.3,6.5,i.steel,9,7.1,-2.5)),e.add(Vt(4.6,.25,2,i.steel,3.8,4.1,-1.2)),e.add(Vt(4.6,1,.06,i.glass,3.8,4.7,-.2)),e.add(Vt(22,.3,6,i.teak,0,.62,5.5));const n=Fo("rect",t,i,{w:9,d:3});return n.position.set(-2,.3,10),e.add(n),e.add(Pn(i,6,6.5),Pn(i,7.3,6.5)),e.add(js(i,[[-8,12],[4,12],[10,8]],1)),{group:e,water:n.children[1]}}function hx(i,t){const e=new se;e.add(Vt(20,.8,18,i.concrete,0,.1,1)),e.add(Vt(9,3.4,7,i.concrete,0,2.3,-2)),e.add(Vt(8,2.8,.2,i.glass,0,2.2,1.55)),e.add(Vt(10.6,.32,8.6,i.teak,0,4.15,-1.6)),e.add(Vt(3,.22,3,i.glass,0,4.35,-2.2)),e.add(Vt(12,.3,5,i.teak,0,.62,4.2));const n=Fo("rect",t,i,{w:7,d:2.8});return n.position.set(-.5,.3,8.4),e.add(n),e.add(Pn(i,5,4.5)),e.add(js(i,[[-5,10.5],[4,10.5]],1)),{group:e,water:n.children[1]}}const ux={harmony:ox,ebony:rx,ivory:ax,guanacaste:lx,ivy:cx,studio54:hx};function dx({shared:i,tier:t}){const e=ix(),n=new se;n.name="villas";const s={},o=[],r=[],a=[],l={};for(const c of Oe){const h=sx(i),u=ux[c.key](e,h),d=rd(c.key);if(u.group.position.set(c.world.x,d,c.world.z),u.group.rotation.y=c.world.rot,n.add(u.group),l[c.key]=u.group,o.push(h),u.spiral){h.uniforms.uSpiral.value=1;const p=u.spiral.local.clone().rotateAround(new ht(0,0),-c.world.rot);h.uniforms.uCenter.value.set(c.world.x+p.x,c.world.z+p.y),h.uniforms.uRadius.value=u.spiral.r}if(s[c.key]=new D(c.world.x,d+(c.key==="ebony"||c.key==="ivy"?6:4),c.world.z),t!=="low"){const p=new $u("#ffb870",0,45,2);p.position.set(c.world.x,d+3,c.world.z+4),n.add(p),r.push(p)}const f=c.key==="ivory"?3:6;for(let p=0;p<f;p++){const v=p/f*Math.PI*2+c.world.rot+.4,g=(c.key==="ebony"?22:18)+p%2*3,m=c.world.x+Math.cos(v)*g,b=c.world.z+Math.sin(v)*g;a.push({kind:"palm",x:m,z:b,s:.8+p*37%10/25})}}return{group:n,anchors:s,waters:o,lights:r,M:e,gardens:a,groups:l}}const De=D;function uo({tail:i="wedge",bodyLen:t=.36,chord:e=.13,tailLen:n=.12,bodyW:s=.05}={}){const o=[],r=[],a=(d,f,p,v,g,m)=>{o.push(...d,...f,...p),r.push(...v,...g,...m)},l=[0,0,t*.55],c=[0,0,-t*.45];a(l,[s,0,0],c,[0,0,0],[0,0,0],[0,0,0]),a(l,c,[-s,0,0],[0,0,0],[0,0,0],[0,0,0]),a(l,[0,s*.8,0],c,[0,0,0],[0,0,0],[0,0,0]),a(l,c,[0,-s*.8,0],[0,0,0],[0,0,0],[0,0,0]);for(const d of[-1,1]){const f=[d*s,0,e*.55],p=[d*s,0,-e*.5],v=[d*.24,0,e*.45],g=[d*.24,0,-e*.62],m=[d*.5,0,-e*.25],b=[d*.46,0,-e*.62],y=[0,d,0],x=[.5,d,0],T=[1,d,0];a(f,v,p,y,x,y),a(v,g,p,x,x,y),a(v,m,g,x,T,x),a(m,b,g,T,T,x)}const h=-t*.42;if(i==="fork")for(const d of[-1,1])a([0,0,h],[d*.035,0,h],[d*.08,0,h-n],[0,0,0],[0,0,0],[0,0,0]);else i==="long"?a([-.03,0,h],[.03,0,h],[0,0,h-n],[0,0,0],[0,0,0],[0,0,0]):(a([-.04,0,h],[.04,0,h],[.06,0,h-n],[0,0,0],[0,0,0],[0,0,0]),a([-.04,0,h],[.06,0,h-n],[-.06,0,h-n],[0,0,0],[0,0,0],[0,0,0]));const u=new ge;return u.setAttribute("position",new Wt(o,3)),u.setAttribute("bw",new Wt(r,3)),u.computeVertexNormals(),u}function fo(i,t){const e=new vv({color:t,side:Ee});return e.onBeforeCompile=n=>{n.vertexShader=`attribute vec3 bw;
attribute vec3 flp;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        float ang = flp.y * sin(flp.x) + flp.z;       // flap angle + dihedral
        float a = ang * (0.55 + 0.65 * bw.x);
        float ax = abs(position.x);
        transformed.y += bw.x > 0.0 ? ax * sin(a) : 0.0;
        transformed.x = bw.x > 0.0 ? sign(position.x) * ax * cos(a) : transformed.x;
      }`)},e.customProgramCacheKey=()=>"bird",e}class po{constructor(t,e,n){this.n=t,this.mesh=new ko(e,n,t),this.flp=new Ns(new Float32Array(t*3),3),this.flp.setUsage(Eo),e.setAttribute("flp",this.flp),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Eo),this.m=new At,this.q=new pe,this.s=new De}set(t,e,n,s,o,r,a,l,c){const h=c?e.distanceTo(c):1e9,u=h<22?1e-4:o*Math.min(1,(h-22)/25),d=n.clone().normalize(),f=new De().crossVectors(new De(0,1,0),d).normalize(),p=new De().crossVectors(d,f),v=new At().makeBasis(f,p,d);this.q.setFromRotationMatrix(v).multiply(new pe().setFromAxisAngle(new De(0,0,1),s)),this.s.setScalar(u),this.m.compose(e,this.q,this.s),this.mesh.setMatrixAt(t,this.m),this.flp.setXYZ(t,r,a,l)}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.flp.needsUpdate=!0}}function fx(i,t="high"){const e=new se,n=gi(5),s=t!=="low",o=s?[7,5,9]:[5,4],r=new po(o.reduce((pt,Z)=>pt+Z,0),uo({bodyLen:.5,chord:.14,tailLen:.08,bodyW:.06}),fo(i,"#5d544a")),a=o.map((pt,Z)=>({n:pt,u0:-700+Z*520+n()*100,dir:Z%2?-1:1,s0:150+n()*90,v:11+n()*2,y0:3+n()*4,ph:n()*10})),l=s?6:3,c=new po(l,uo({tail:"fork",bodyLen:.4,chord:.1,tailLen:.22,bodyW:.035}),fo(i,"#16171a")),h=Array.from({length:l},()=>({cx:(n()-.5)*700,cz:-60+n()*220,rad:40+n()*50,h:95+n()*90,w:(.14+n()*.08)*(n()<.5?-1:1),ph:n()*6.28,drift:(n()-.5)*.6})),u=s?7:3,d=new po(u,uo({bodyLen:.34,chord:.16,tailLen:.1,bodyW:.045}),fo(i,"#231d1a")),f={cx:60,cz:-380},p=Array.from({length:u},()=>({rad:22+n()*30,h:70+n()*70,w:.2+n()*.08,ph:n()*6.28})),v=s?[24,18]:[14],g=new po(v.reduce((pt,Z)=>pt+Z,0),uo({bodyLen:.5,chord:.14,tailLen:.2,bodyW:.05}),fo(i,"#3f8f35")),m=Oe.map(pt=>new De(pt.world.x,jn(pt.world.x,pt.world.z)+34,pt.world.z)).concat([new De(-240,90,-300),new De(260,80,-260),new De(-60,70,-60)]),b=[];v.forEach((pt,Z)=>{const nt=m[Z*3%m.length].clone(),mt={wp:(Z*3+1)%m.length,members:[]};for(let X=0;X<pt;X++){const Q={p:nt.clone().add(new De((n()-.5)*10,(n()-.5)*4,(n()-.5)*10)),v:new De(n()-.5,0,n()-.5).normalize().multiplyScalar(13),ph:n()*6.28};mt.members.push(Q)}b.push(mt)});const y=s?2:1,x=new po(y*2,uo({tail:"long",bodyLen:.5,chord:.14,tailLen:.55,bodyW:.05}),fo(i,"#c3342a")),T=Array.from({length:y},(pt,Z)=>({cx:-40+Z*140,cz:-230+Z*40,rx:150+n()*60,rz:90+n()*40,h:28+n()*10,w:.045+n()*.02,ph:n()*6.28}));for(const pt of[r,c,d,g,x])e.add(pt.mesh);const M=420,A=new Float32Array(M*3),S=new Float32Array(M),_=gi(11);for(let pt=0;pt<M;pt++){const Z=Oe[pt%Oe.length],nt=_()*6.28,mt=8+_()*38,X=Z.world.x+Math.cos(nt)*mt,Q=Z.world.z+Math.sin(nt)*mt;A.set([X,jn(X,Q)+1+_()*6,Q],pt*3),S[pt]=_()*100}const w=new ge;w.setAttribute("position",new Pe(A,3)),w.setAttribute("seed",new Pe(S,1));const E=new Ce({transparent:!0,depthWrite:!1,blending:Br,uniforms:{uTime:i.time,uNight:i.night,uPx:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float seed; uniform float uTime, uPx; varying float vA;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * 0.6 + seed) * 1.6; p.y += sin(uTime * 0.9 + seed * 2.0) * 0.8; p.z += cos(uTime * 0.5 + seed) * 1.6;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vA = 0.5 + 0.5 * sin(uTime * 2.5 + seed * 3.0);
        gl_PointSize = uPx * 90.0 / -mv.z;
      }`,fragmentShader:`
      uniform float uNight; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vec3(1.0, 0.85, 0.45) * 2.5, a * vA * uNight); }`}),U=new G2(w,E);U.frustumCulled=!1,e.add(U);const L=new De,z=new De,O=new De,F=new De,$=new De,H=new De;let st=0,ot=0;function lt(pt,Z){for(const nt of b){const mt=m[nt.wp],X=nt.members;H.set(0,0,0);for(const Q of X)H.add(Q.p);H.multiplyScalar(1/X.length),H.distanceTo(mt)<25&&(nt.wp=(nt.wp+1+Math.floor(Math.random()*3))%m.length);for(const Q of X){O.set(0,0,0),F.set(0,0,0),$.set(0,0,0);let tt=0;for(const G of X){if(G===Q)continue;L.subVectors(Q.p,G.p);const k=L.length();k<9&&($.add(G.v),tt++),k<1.8&&k>.001&&F.addScaledVector(L,(1.8-k)/k)}tt&&O.addScaledVector($.multiplyScalar(1/tt).sub(Q.v),1),O.addScaledVector(F,12),O.addScaledVector(L.subVectors(H,Q.p),.5),O.addScaledVector(L.subVectors(mt,Q.p).normalize(),6);const j=jn(Q.p.x,Q.p.z)+22;if(Q.p.y<j&&(O.y+=(j-Q.p.y)*2),Z){L.subVectors(Q.p,Z);const G=L.length();G<45&&O.addScaledVector(L,(45-G)*.25/Math.max(G,1))}O.length()>15&&O.setLength(15),Q.v.addScaledVector(O,pt),Q.v.y=Math.max(-4,Math.min(4,Q.v.y));const it=Q.v.length();it>16?Q.v.multiplyScalar(16/it):it<10&&Q.v.multiplyScalar(10/it),Q.p.addScaledVector(Q.v,pt)}}}function Mt(pt,Z,nt){const mt=Z>.05;for(const tt of[r,c,d,g,x])tt.mesh.visible=mt;if(!mt)return;const X=Math.min(.1,Math.max(0,pt-ot));ot=pt;let Q=0;for(const tt of a){let it=((tt.u0+tt.dir*tt.v*pt)%3080+3080)%3080-1540;for(let G=0;G<tt.n;G++){const k=it-tt.dir*G*3.4,R=tt.s0+G*1.3+Math.sin(pt*.05+tt.ph)*18,gt=tt.y0+Math.sin(pt*.3+tt.ph+G*.2)*1.2+G*.15,et=new De(k,gt,Li(k)+R);z.set(tt.dir,Math.cos(pt*.3+tt.ph+G*.2)*.02,0);const bt=((pt+tt.ph-G*.28)%6.5+6.5)%6.5,vt=bt<1.7,Ut=vt?bt*2.4*Math.PI*2:0;r.set(Q++,et,z,0,2,Ut,vt?.55:0,vt?0:.05,nt)}}for(r.commit(),h.forEach((tt,j)=>{const it=tt.ph+pt*tt.w,G=tt.cx+Math.sin(pt*.01+j)*60*tt.drift,k=new De(G+Math.cos(it)*tt.rad,tt.h+Math.sin(it*.5)*6,tt.cz+Math.sin(it)*tt.rad);z.set(-Math.sin(it)*Math.sign(tt.w),0,Math.cos(it)*Math.sign(tt.w)),c.set(j,k,z,-Math.sign(tt.w)*.35,2.2,pt*1.5+j,.03,-.05,nt)}),c.commit(),p.forEach((tt,j)=>{const it=tt.ph+pt*tt.w,G=new De(f.cx+Math.cos(it)*tt.rad,jn(f.cx,f.cz)+tt.h+Math.sin(it)*4,f.cz+Math.sin(it)*tt.rad);z.set(-Math.sin(it),0,Math.cos(it)),d.set(j,G,z,.3+Math.sin(pt*1.3+j)*.1,1.75,pt*2+j,.04,.18,nt)}),d.commit(),st+=X;st>1/30;)lt(1/30,nt),st-=1/30;Q=0;for(const tt of b)for(const j of tt.members){const it=j.v.x*0;g.set(Q++,j.p,j.v,it,.4,pt*2*Math.PI*7.5+j.ph,.45,0,nt)}g.commit(),T.forEach((tt,j)=>{const it=tt.ph+pt*tt.w;for(let G=0;G<2;G++){const k=it-G*.012,R=tt.cx+Math.cos(k)*tt.rx,gt=tt.cz+Math.sin(k*1.3)*tt.rz,et=new De(R+G*1.4,jn(R,gt)+tt.h+Math.sin(pt*.4+j)*5,gt+G*.8);z.set(-Math.sin(k)*tt.rx,0,Math.cos(k*1.3)*1.3*tt.rz).normalize(),x.set(j*2+G,et,z,0,1.05,pt*2*Math.PI*3.6+G*.4,.5,0,nt)}}),x.commit()}return{group:e,update:Mt}}const nu=[{el:52,az:25,zenith:"#3b7bc8",horizon:"#cfe5ee",sun:"#fff0d4",sunInt:3.1,hemiSky:"#d4ecff",hemiGround:"#3a5a2c",hemiInt:1.05,fog:"#c8dde4",fogD:82e-5,deep:"#0f4f6c",shallow:"#38c6bf",exposure:.92,night:0,cloud:"#ffffff",cloudShadow:"#a4b6c4",glass:.06,bloom:.18,spec:1,ground:"#3e5044",dayness:1},{el:7,az:-12,zenith:"#33507f",horizon:"#ffa96b",sun:"#ffbd78",sunInt:2.8,hemiSky:"#ffdcb6",hemiGround:"#2e4f30",hemiInt:.98,fog:"#eeac86",fogD:92e-5,deep:"#123d56",shallow:"#2aa3a3",exposure:1.06,night:.12,cloud:"#ffd6b5",cloudShadow:"#95687a",glass:.75,bloom:.4,spec:1,ground:"#3a2f2c",dayness:1},{el:34,az:38,zenith:"#050c1d",horizon:"#1d2c48",sun:"#a9bcff",sunInt:.85,hemiSky:"#3a4f80",hemiGround:"#0c1510",hemiInt:.78,fog:"#121c2e",fogD:.00105,deep:"#061827",shallow:"#0d3c4a",exposure:1.2,night:1,cloud:"#3c4a6c",cloudShadow:"#141b2c",glass:1.05,bloom:.5,spec:.45,ground:"#0b1018",dayness:0}];function px(){const i=new URLSearchParams(location.search).get("tier");if(i)return i;const t=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||Math.min(screen.width,screen.height)<700,e=navigator.hardwareConcurrency||4,n=navigator.deviceMemory||8;return t?e>=6&&n>=4?"mid":"low":e<=4||n<=4?"mid":"high"}class mx{constructor(t,{tier:e}){this.tier=e,this.canvas=t;const n=new U2({canvas:t,antialias:e!=="low",powerPreference:"high-performance"});this.fixedDPR=new URLSearchParams(location.search).has("fixeddpr"),this.maxDPR=Math.min(window.devicePixelRatio,e==="high"?1.6:e==="mid"?1.35:1.1),n.setPixelRatio(this.maxDPR),n.toneMapping=ac,n.toneMappingExposure=1,n.shadowMap.enabled=e!=="low",n.shadowMap.type=lu,this.renderer=n;const s=new Co;this.scene=s,this.camera=new hn(38,1,.5,14e3),this.camera.position.set(0,80,400),this.shared={time:{value:0},night:{value:0},fogColor:{value:new ut},fogDensity:{value:9e-4}},s.fog=new ia("#eeac86",9e-4),this.sky=zv(),s.add(this.sky.mesh),this.ocean=Nv(),s.add(this.ocean.mesh),this.surf=Xv({tier:e,oceanUniforms:this.ocean.uniforms}),s.add(this.surf.mesh),this.surfLib={eventsAt:ld,crestS:As,breakS0:$r,passAge:Ic},this.beach=new Zv({tier:e}),this.beach.rideUniform=this.surf.uniforms.uRide.value,s.add(this.beach.group),this.terrain=Vv(),s.add(this.terrain),s.add(Bv()),this.villas=dx({shared:this.shared,tier:e}),s.add(this.villas.group),this.veg={uniforms:{time:this.shared.time,wind:{value:.6},trans:{value:.5}},light:{sunDir:{value:new D(0,1,0)},sunCol:{value:new ut},sky:{value:new ut},ground:{value:new ut},fogColor:this.shared.fogColor,fogDensity:this.shared.fogDensity,trans:{value:.5}}},this.msaa=e==="high",this.villaModels=new Ub({renderer:n,tier:e,simple:this.villas.groups,parent:s}),this.forest=new ex({renderer:n,tier:e,uniforms:this.veg.uniforms,lightU:this.veg.light,msaa:this.msaa,placements:Qb({tier:e,gardens:this.villas.gardens})}),s.add(this.forest.group),this.life=fx(this.shared,e),s.add(this.life.group),this.hemi=new Yu("#ffcfa2","#2c3925",.7),s.add(this.hemi),this.sun=new Zu("#ffb065",2.7),this.sun.castShadow=e!=="low";const o=e==="high"?2048:1024;this.sun.shadow.mapSize.set(o,o);const r=this.sun.shadow.camera;if(r.left=-230,r.right=230,r.top=230,r.bottom=-230,r.near=10,r.far=1600,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.6,this.sun.target.position.set(0,60,-220),s.add(this.sun,this.sun.target),this.usePost=e!=="low",this.usePost){const c=new dn(window.innerWidth,window.innerHeight,{type:Vn,samples:this.msaa?4:0}),h=new ed(n,c);h.addPass(new nd(s,this.camera)),this.bloom=new is(new ht(512,512),.4,.55,.82),h.addPass(this.bloom),h.addPass(new id),this.grade=new td({uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.32},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
          uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain; varying vec2 vUv;
          float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
          void main(){
            vec4 c = texture2D(tDiffuse, vUv);
            vec2 q = vUv - 0.5;
            float v = smoothstep(0.85, 0.2, length(q * vec2(1.1, 1.0)));
            c.rgb *= mix(1.0 - uVig, 1.0, v);
            c.rgb += (h(vUv * 1000.0 + fract(uTime) * 91.7) - 0.5) * uGrain;
            gl_FragColor = c;
          }`}),h.addPass(this.grade),this.composer=h}this.tod=1,this.todTarget=1,this._tmp={c1:new ut,c2:new ut},this.applyTOD(1),this.resize(),this.clock=new ca;const a=window.requestIdleCallback||(c=>setTimeout(c,120)),l=()=>{this.villaModels.pump()&&a(l,{timeout:600})};setTimeout(()=>a(l,{timeout:600}),1200)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setSize(t,e),this.composer.setPixelRatio(this.renderer.getPixelRatio()))}lerpPreset(t){const e=Math.min(1,Math.floor(t)),n=xn.smootherstep(t-e,0,1),s=nu[e],o=nu[e+1],r=l=>this._tmp.c1.set(s[l]).lerp(this._tmp.c2.set(o[l]),n).clone(),a=l=>s[l]+(o[l]-s[l])*n;return{el:a("el"),az:a("az"),zenith:r("zenith"),horizon:r("horizon"),sun:r("sun"),sunInt:a("sunInt"),hemiSky:r("hemiSky"),hemiGround:r("hemiGround"),hemiInt:a("hemiInt"),fog:r("fog"),fogD:a("fogD"),deep:r("deep"),shallow:r("shallow"),exposure:a("exposure"),night:a("night"),cloud:r("cloud"),cloudShadow:r("cloudShadow"),glass:a("glass"),bloom:a("bloom"),spec:a("spec"),ground:r("ground"),dayness:a("dayness")}}applyTOD(t){const e=this.lerpPreset(t),n=xn.degToRad(e.el),s=xn.degToRad(e.az),o=new D(Math.sin(s)*Math.cos(n),Math.sin(n),Math.cos(s)*Math.cos(n)).normalize(),r=this.sky.uniforms;r.uSunDir.value.copy(o),r.uZenith.value.copy(e.zenith),r.uHorizon.value.copy(e.horizon),r.uSunColor.value.copy(e.sun),r.uNight.value=e.night,r.uCloud.value.copy(e.cloud),r.uCloudShadow.value.copy(e.cloudShadow),r.uGround.value.copy(e.ground);const a=this.ocean.uniforms;a.uSunDir.value.copy(o),a.uSunColor.value.copy(e.sun),a.uZenith.value.copy(e.zenith),a.uHorizon.value.copy(e.horizon),a.uDeep.value.copy(e.deep),a.uShallow.value.copy(e.shallow),a.uFogColor.value.copy(e.fog),a.uFogDensity.value=e.fogD,a.uNight.value=e.night,a.uSpec.value=e.spec,this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogD,this.shared.fogColor.value.copy(e.fog),this.shared.fogDensity.value=e.fogD,this.shared.night.value=e.night,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiInt,this.sun.color.copy(e.sun),this.sun.intensity=e.sunInt;const l=this.veg.light;l.sunDir.value.copy(o),l.sunCol.value.copy(e.sun).multiplyScalar(e.sunInt),l.sky.value.copy(e.hemiSky).multiplyScalar(e.hemiInt),l.ground.value.copy(e.hemiGround).multiplyScalar(e.hemiInt),this.sun.position.copy(this.sun.target.position).addScaledVector(o,700),this.renderer.toneMappingExposure=e.exposure,this.villas.M.glass.emissiveIntensity=e.glass,this.villas.lights.forEach(c=>c.intensity=e.night*55+e.glass*10),this.bloom&&(this.bloom.strength=e.bloom),this.dayness=e.dayness,this.villaModels.setTOD(t),this.sunDir=o,this._envDirty=!0}updateEnv(){if(!this.pmrem){this.pmrem=new Yr(this.renderer),this.envScene=new Co;const e=new Xt(new He(50,32,16),this.sky.mesh.material);this.envScene.add(e)}const t=this.pmrem.fromScene(this.envScene,.02,.1,200);this.envRT&&this.envRT.dispose(),this.envRT=t,this.villas.M.glass.envMap=t.texture,this.villaModels.applyEnv(t.texture),this.villas.M.glass.needsUpdate=!0,this._envDirty=!1,this._envAt=performance.now()}setTimeOfDay(t){this.todTarget=t}groundClamp(t,e=6){const n=Math.max(jn(t.x,t.z),0);return t.y<n+e&&(t.y=n+e),t}adapt(t){if(this._ft=(this._ft??16)*.95+t*1e3*.05,this._n=(this._n||0)+1,this._n%90)return;const e=this.renderer.getPixelRatio();this._ft>26&&e<=.81?(this._slow=(this._slow||0)+1,this._slow>=2&&(this.quality||0)<2&&(this.quality=(this.quality||0)+1,this._slow=0,this.applyQuality())):this._slow=0;let n=e;this._ft>24&&e>.8?n=Math.max(.8,e-.15):this._ft<14&&e<this.maxDPR&&(n=Math.min(this.maxDPR,e+.1)),n!==e&&(this.renderer.setPixelRatio(n),this.composer&&this.composer.setPixelRatio(n),this.resize())}applyQuality(){const t=this.quality||0;this.forest.lodScale=[1,.65,.45][t],this.forest.update(this.camera,!0),this.villaModels.showDist=this.villaModels.baseDist*[1,.7,.5][t],t>=2&&(this.forest.group.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),this.renderer.shadowMap.needsUpdate=!0)}frame(){const t=this.clock.getDelta(),e=Math.min(t,.1);!document.hidden&&!this.fixedDPR&&this.adapt(Math.min(t,.25));const n=this.clock.elapsedTime+(this.timeWarp||0);return this.shared.time.value=n,this.sky.uniforms.uTime.value=n,this.ocean.uniforms.uTime.value=n,this.surfEvents=this.surf.update(n),Math.abs(this.tod-this.todTarget)>.001&&(this.tod+=(this.todTarget-this.tod)*Math.min(1,e*1.6),Math.abs(this.tod-this.todTarget)<.002&&(this.tod=this.todTarget),this.applyTOD(this.tod)),this.life.update(n,this.dayness,this.camera.position),this.beach.update(n,e,this.surfEvents,this.dayness),this._envDirty&&performance.now()-(this._envAt||0)>400&&this.updateEnv(),this.sky.mesh.position.copy(this.camera.position),this.forest.update(this.camera),this.villaModels.update(this.camera,n),this.composer?(this.grade.uniforms.uTime.value=n,this.composer.render(e)):this.renderer.render(this.scene,this.camera),e}}function gx({onJump:i,onTour:t,onTOD:e,onSound:n,onModal:s,filmSrc:o}){var j,it,G;const r=(k,R=document)=>R.querySelector(k),a=(k,R=document)=>[...R.querySelectorAll(k)];a(".yr").forEach(k=>k.textContent=new Date().getFullYear());const l=new IntersectionObserver(k=>k.forEach(R=>R.isIntersecting&&R.target.classList.add("in")),{threshold:.18});a(".reveal").forEach(k=>l.observe(k)),a("[data-jump]").forEach(k=>k.addEventListener("click",R=>{R.preventDefault(),i(k.dataset.jump)})),a(".menu a, .brand").forEach(k=>k.addEventListener("click",R=>{const gt=k.getAttribute("href").slice(1);gt&&(R.preventDefault(),i(gt),document.body.classList.remove("menu-open"))}));const c=r(".menu-toggle");c==null||c.addEventListener("click",()=>{const k=document.body.classList.toggle("menu-open");c.setAttribute("aria-expanded",String(k))}),a("[data-tour]").forEach(k=>k.addEventListener("click",()=>t(k.dataset.tour)));const h=a(".tod button");h.forEach(k=>k.addEventListener("click",()=>{e(Number(k.dataset.tod),!0)}));const u=k=>h.forEach(R=>R.classList.toggle("is-active",Math.round(k)===Number(R.dataset.tod))),d=r(".sound");d==null||d.addEventListener("click",()=>{const k=d.getAttribute("aria-pressed")!=="true";d.setAttribute("aria-pressed",String(k)),n(k)});const f=k=>d==null?void 0:d.setAttribute("aria-pressed",String(k));(j=r(".ribbon button"))==null||j.addEventListener("click",()=>document.body.classList.add("no-ribbon"));const p=a(".review"),v=a("[data-review]"),g=r(".review-stage"),m=1e4,b={i:0,timer:0,started:0,left:m,inView:!1,paused:!1,hold:!1},y=()=>{clearTimeout(b.timer);const k=b.inView&&!b.paused&&!b.hold&&p.length>1;document.documentElement.style.setProperty("--rv-ms",`${m}ms`),v.forEach(R=>R.classList.toggle("is-running",k)),k&&(b.started=performance.now(),b.timer=setTimeout(()=>T(b.i+1,1,!1),b.left))},x=()=>{b.timer&&(clearTimeout(b.timer),b.timer=0,b.left=Math.max(400,b.left-(performance.now()-b.started)))},T=(k,R=1,gt=!0)=>{const et=p.length;if(!et)return;const bt=(k+et)%et;bt!==b.i&&(p.forEach((vt,Ut)=>{vt.classList.remove("from-left","to-left","to-right"),Ut===b.i&&(vt.classList.remove("is-active"),vt.classList.add(R>0?"to-left":"to-right")),Ut===bt&&(vt.classList.toggle("from-left",R<0),vt.offsetWidth,vt.classList.add("is-active"))}),b.i=bt),v.forEach((vt,Ut)=>{vt.classList.toggle("is-active",Ut===b.i),vt.toggleAttribute("aria-current",Ut===b.i);const St=vt.querySelector("i");St.style.animation="none",St.offsetWidth,St.style.animation=""}),g==null||g.setAttribute("aria-live",gt?"polite":"off"),b.left=m,y()};v.forEach(k=>k.addEventListener("click",()=>{const R=Number(k.dataset.review);T(R,R>=b.i?1:-1)})),(it=r(".rv-prev"))==null||it.addEventListener("click",()=>T(b.i-1,-1)),(G=r(".rv-next"))==null||G.addEventListener("click",()=>T(b.i+1,1));const M=r(".rv-pause");M==null||M.addEventListener("click",()=>{b.paused=!b.paused,M.setAttribute("aria-pressed",String(b.paused)),M.setAttribute("aria-label",b.paused?"Play reviews":"Pause reviews"),document.body.classList.toggle("rv-paused",b.paused),b.paused?x():(b.left=m,T(b.i,1,!1))});const A=r(".review-controls");A==null||A.addEventListener("focusin",()=>{b.hold=!0,x(),document.body.classList.add("rv-hold"),v.forEach(k=>k.classList.remove("is-running"))}),A==null||A.addEventListener("focusout",k=>{A.contains(k.relatedTarget)||(b.hold=!1,document.body.classList.remove("rv-hold"),y())}),A==null||A.addEventListener("keydown",k=>{k.key==="ArrowRight"&&(k.preventDefault(),T(b.i+1,1)),k.key==="ArrowLeft"&&(k.preventDefault(),T(b.i-1,-1))});let S=null,_=null;g==null||g.addEventListener("pointerdown",k=>{S=k.clientX,_=k.clientY},{passive:!0}),g==null||g.addEventListener("pointerup",k=>{if(S==null)return;const R=k.clientX-S,gt=k.clientY-_;S=null,Math.abs(R)>40&&Math.abs(R)>Math.abs(gt)*1.2&&T(b.i+(R<0?1:-1),R<0?1:-1)}),g==null||g.addEventListener("pointercancel",()=>{S=null});const w=r("#reviews");w&&"IntersectionObserver"in window?new IntersectionObserver(([k])=>{const R=k.isIntersecting&&k.intersectionRatio>.2;R!==b.inView&&(b.inView=R,R?(b.left=m,T(b.i,1,!1)):(x(),y()))},{threshold:[0,.2,.5]}).observe(w):(b.inView=!0,T(0,1,!1));const E=r(".film-video"),U=r(".film-play");E&&U&&(o||(U.querySelector("span").textContent="Film premieres here"),U.addEventListener("click",()=>{o&&(E.src||(E.src=o),E.controls=!0,E.play().then(()=>U.classList.add("is-hidden")).catch(()=>{E.controls=!1,U.querySelector("span").textContent="Film unavailable — try again"}))}));const L=r("#lightbox"),z=r(".lb-img",L),O=r(".lb-cap",L),F=r(".lb-count",L),$=r(".lb-sheet",L),H=r(".lb-sheet-grid",L),st=r(".lb-strip",L);let ot=null,lt=0,Mt=null;const pt=()=>{Mt!==ot.key&&(Mt=ot.key,r(".lb-sheet-title",L).textContent=ot.name,r(".lb-sheet-count",L).textContent=`${ot.gallery.length} photographs`,H.innerHTML=ot.gallery.map((k,R)=>`<button class="lb-sheet-item" data-i="${R}" style="--ar:${Gv(k).toFixed(3)}" aria-label="Photo ${R+1} of ${ot.gallery.length}"><img loading="${R<12?"eager":"lazy"}" decoding="async" alt="" src="${Es(k,900)}"></button>`).join(""),st.innerHTML=ot.gallery.map((k,R)=>`<button class="lb-thumb" data-i="${R}" aria-label="Photo ${R+1}"><img decoding="async" alt="" src="${Es(k,240,160)}"></button>`).join(""))},Z=k=>{L.classList.toggle("is-sheet",k),r(".lb-all",L).setAttribute("aria-pressed",String(k)),k&&($.scrollTop=0)},nt=(k,R)=>{lt=(k+ot.gallery.length)%ot.gallery.length,Z(!1),L.classList.remove("is-loaded"),z.onload=()=>L.classList.add("is-loaded"),z.src=Es(ot.gallery[lt],2200),z.alt=`${ot.name} — photo ${lt+1}`,O.textContent=ot.name,F.textContent=`${lt+1} / ${ot.gallery.length}`,st.querySelectorAll(".lb-thumb").forEach((et,bt)=>et.classList.toggle("is-active",bt===lt));const gt=st.children[lt];gt&&st.scrollTo({left:gt.offsetLeft-st.clientWidth/2+gt.clientWidth/2,behavior:R?"auto":"smooth"}),[1,-1].forEach(et=>{const bt=new Image;bt.src=Es(ot.gallery[(lt+et+ot.gallery.length)%ot.gallery.length],2200)})};let mt=null;const X=(k,R,gt)=>{ot=Oe.find(et=>et.key===k),mt=document.activeElement,pt(),L.hidden=!1,requestAnimationFrame(()=>L.classList.add("is-open")),gt?Z(!0):nt(R,!0),document.body.classList.add("lb-open"),s&&s(!0),setTimeout(()=>r(".lb-close",L).focus(),50)},Q=()=>{var k;L.classList.remove("is-open"),document.body.classList.remove("lb-open"),s&&s(!1),setTimeout(()=>L.hidden=!0,350),(k=mt==null?void 0:mt.focus)==null||k.call(mt,{preventScroll:!0})};a("[data-gallery]").forEach(k=>k.addEventListener("click",()=>X(k.dataset.gallery,Number(k.dataset.index)||0,k.dataset.view==="all"))),H.addEventListener("click",k=>{const R=k.target.closest("[data-i]");R&&nt(Number(R.dataset.i))}),st.addEventListener("click",k=>{const R=k.target.closest("[data-i]");R&&nt(Number(R.dataset.i))}),r(".lb-prev",L).addEventListener("click",()=>nt(lt-1)),r(".lb-next",L).addEventListener("click",()=>nt(lt+1)),r(".lb-all",L).addEventListener("click",()=>L.classList.contains("is-sheet")?nt(lt):Z(!0)),r(".lb-close",L).addEventListener("click",Q),L.addEventListener("click",k=>{(k.target===L||k.target.classList.contains("lb-stage"))&&Q()}),window.addEventListener("keydown",k=>{L.hidden||(k.key==="Escape"&&Q(),!L.classList.contains("is-sheet")&&(k.key==="ArrowRight"&&nt(lt+1),k.key==="ArrowLeft"&&nt(lt-1)))});let tt=null;return r(".lb-stage",L).addEventListener("touchstart",k=>tt=k.touches[0].clientX,{passive:!0}),r(".lb-stage",L).addEventListener("touchend",k=>{if(tt==null)return;const R=k.changedTouches[0].clientX-tt;Math.abs(R)>40&&nt(lt+(R<0?1:-1)),tt=null}),a("[data-marker]").forEach(k=>k.addEventListener("click",()=>i(k.dataset.marker))),{setTODActive:u,setSound:f}}const vx={harmony:{living:["H14","H06","H24"],kitchen:["H10"],suite1:["H04"],terrace:["H08","H16","H12"],pool:["H20","H11"],entry:["H09"]},ebony:{great:["E11","E07"],kitchen:["E04","E16"],dining:["E06"],pool:["E15","E18","E14"],bed1:["E05"],bed2:["E24"],bed3:["E23"],sky:["E21","E08"]},ivory:{suite:["I02","I03","I10"],lounge:["I12"],balcony:["I01","I13","I04"],stair:["I06"]},guanacaste:{living:["G08","G05"],terrace:["G06","G09","G02","G03","G04"],entry:["G07"]},ivy:{living:["Y01"],bed1:["Y08"],terrace:["Y04","Y03","Y05"]},studio54:{studio:["S11","S09","S14","S02"],kitchen:["S17"],bath:["S22"],terrace:["S13"]}},Pi=-48,yd=`
  float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y); }
  float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vn(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
`;function bx(i){return new Ce({uniforms:i,side:Je,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uHaze, uBelow, uSunDir, uSunCol, uCloudLit, uCloudDark;
      uniform float uSunSize, uGlow, uStars, uTime, uCloud, uSunDisc;
      varying vec3 vDir;
      ${yd}
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.42));
        float sd = max(dot(d, uSunDir), 0.0);
        col += uSunCol * (pow(sd, 5.0) * 0.22 + pow(sd, 48.0) * 0.5) * uGlow * uSunDisc;
        col = mix(col, uHaze, exp(-max(h, 0.0) * 14.0) * 0.55);
        col = mix(col, uBelow, smoothstep(0.0, -0.06, h));
        // clouds
        if (h > 0.0) {
          vec2 p = d.xz / (h + 0.09) * 0.9 + vec2(uTime * 0.004, 0.0);
          float c = fbm(p * 1.4);
          c = smoothstep(0.52, 0.78, c) * smoothstep(0.0, 0.06, h) * (1.0 - smoothstep(0.28, 0.6, h));
          vec3 cc = mix(uCloudDark, uCloudLit, clamp(pow(sd, 2.5) * 1.3 + 0.25, 0.0, 1.0));
          col = mix(col, cc, c * uCloud * 0.85);
          // stars
          vec2 sp = d.xz / (h + 0.6) * 220.0;
          float st = step(0.9965, h21(floor(sp))) * smoothstep(0.1, 0.35, h) * (0.6 + 0.4 * sin(uTime * 2.0 + h21(floor(sp)) * 40.0));
          col += vec3(st) * uStars * (1.0 - c) * 1.4;
        }
        // sun disc
        float disc = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd);
        col += uSunCol * disc * 12.0 * uSunDisc * smoothstep(-0.01, 0.01, h);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function xx(i){return new Ce({uniforms:i,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uHaze, uSunDir, uSunCol, uDeep, uOceanSky;
      uniform float uTime, uSunDisc, uNight;
      varying vec3 vW;
      ${yd}
      void main(){
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        vec2 p = vW.xz;
        float t = uTime;
        float fade = 1.0 - smoothstep(600.0, 5000.0, dist);
        vec2 g = vec2(0.0);
        g += vec2(cos(p.x * 0.11 + t * 0.9), sin(p.y * 0.13 + t * 0.7)) * 0.12;
        g += vec2(sin(p.x * 0.37 - p.y * 0.21 + t * 1.6), cos(p.y * 0.41 + p.x * 0.17 - t * 1.3)) * 0.07;
        g += (vec2(vn(p * 0.8 + t * 0.4), vn(p * 0.8 - t * 0.35 + 7.0)) - 0.5) * 0.25;
        vec3 n = normalize(vec3(g.x * fade, 1.0, g.y * fade));
        float fres = pow(1.0 - max(dot(V, n), 0.0), 4.0);
        vec3 R = reflect(-V, n);
        vec3 sky = mix(uOceanSky, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.5));
        vec3 col = mix(uDeep, sky, 0.12 + 0.88 * fres);
        float s = max(dot(R, uSunDir), 0.0);
        float glit = pow(s, 900.0) * 60.0 + pow(s, 120.0) * 3.0 + pow(s, 12.0) * 0.25;
        float spark = step(0.8, vn(p * 3.0 + t * 2.0)) * pow(s, 40.0) * 8.0;
        col += uSunCol * (glit + spark) * uSunDisc;
        col = mix(col, uHaze, smoothstep(400.0, 9000.0, dist) * 0.85);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function yx(i,t,e){const n=380+60*Math.sin(i*.0042+1.3)+25*Math.sin(i*.013),s=Math.min(1,Math.max(0,(t-(e.dropZ??18))/(n-(e.dropZ??18)))),o=Math.pow(s,.75);let r=(e.baseY??-1.5)+(Pi+1.5-(e.baseY??-1.5))*o;return t<-20&&(r+=Math.pow(-t-20,.9)*.16),r+=(Math.sin(i*.021+t*.012)*3+Math.sin(i*.047-t*.031)*1.4+Math.sin(i*.009)*5)*Math.min(1,Math.hypot(i,t)/60),t>n&&(r=Math.max(Pi-6,Pi+.8-(t-n)*.08)),r}function wx({M:i,tier:t,site:e,U:n,bounds:s}){const o=new se;o.name="surroundings";const r=[],a=new D((s.min.x+s.max.x)/2,0,(s.min.z+s.max.z)/2),l=(X,Q)=>{const tt=e.ground?e.ground(X,Q):-1.5,j=Math.max(0,Math.max(s.min.x-6-X,X-s.max.x-6,s.min.z-6-Q,Q-s.max.z-6)),it=Math.min(1,j/40),G=it*it*(3-2*it);return tt*(1-G)+yx(X,Q,e)*G},c=bx(n),h=new Xt(new He(4e3,32,16),c);h.frustumCulled=!1,h.renderOrder=-10,o.add(h),r.push(h.geometry,c);const u=xx(n),d=new Xt(new Me(24e3,24e3,1,1),u);d.rotation.x=-Math.PI/2,d.position.set(0,Pi,3e3),o.add(d),r.push(d.geometry,u);const f=t==="low"?70:110,p=t==="low"?96:150,v=[0];let g=1.2;for(let X=0;X<f;X++)v.push(g),g*=t==="low"?1.1:1.066;const m=[],b=[],y=[],x=[],T=new ut("#1f3717"),M=new ut("#304d1d"),A=new ut("#e3cda4"),S=new ut("#6b5a45"),_=new ut("#5b8834"),w=new ut;for(let X=0;X<v.length;X++)for(let Q=0;Q<(X===0?1:p);Q++){const tt=Q/p*Math.PI*2,j=a.x+Math.cos(tt)*v[X],it=a.z+Math.sin(tt)*v[X],G=l(j,it);m.push(j,G,it),y.push(j/4,it/4);const k=xn.smoothstep(G,Pi+4,Pi+1);w.copy(T).lerp(M,.5+.5*Math.sin(j*.07+it*.05)).multiplyScalar(.72),w.lerp(_,1-xn.smoothstep(v[X],14,34)),w.lerp(A,k),G<Pi-1&&w.copy(S),b.push(w.r,w.g,w.b)}const E=(X,Q)=>X===0?0:1+(X-1)*p+Q%p;for(let X=0;X<p;X++)x.push(0,E(1,X+1),E(1,X));for(let X=1;X<v.length-1;X++)for(let Q=0;Q<p;Q++){const tt=E(X,Q),j=E(X,Q+1),it=E(X+1,Q),G=E(X+1,Q+1);x.push(tt,j,G,tt,G,it)}const U=new ge;U.setAttribute("position",new Wt(m,3)),U.setAttribute("color",new Wt(b,3)),U.setAttribute("uv",new Wt(y,2)),U.setIndex(x),U.computeVertexNormals();const L=i.get("grass"),z=new xe({map:L.map,vertexColors:!0,roughness:.95,color:"#ffffff"});z.onBeforeCompile=X=>{X.fragmentShader=X.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= 1.25;`)};const O=new Xt(U,z);O.receiveShadow=!0,o.add(O),r.push(U,z);const F=Ie(e.seed||99),$=(X,Q,tt=3)=>X>s.min.x-tt&&X<s.max.x+tt&&Q>s.min.z-tt&&Q<s.max.z+tt,H=(X,Q)=>Math.hypot(Math.max(0,s.min.x-X,X-s.max.x),Math.max(0,s.min.z-Q,Q-s.max.z)),st=(X,Q)=>Math.min(Q>s.max.z?1.6-(Q-s.max.z)*.07-1.5:60,2+H(X,Q)*.55),ot=(X,Q,tt,j=1)=>{const it=[];let G=0;for(;it.length<X&&G++<X*30;){const k=F()*Math.PI*2,R=Q+Math.pow(F(),j)*(tt-Q),gt=a.x+Math.cos(k)*R*1.2,et=a.z+Math.sin(k)*R;if($(gt,et,e.clear??12)||e.keepClear&&e.keepClear(gt,et))continue;const bt=l(gt,et);bt<Pi+2.5||it.push([gt,bt,et])}return it},lt=_x(t),Mt={high:[380,280,60,460],mid:[240,170,40,260],low:[120,90,24,120]}[t]||[240,170,40,260],pt=[],Z=["evergreen","evergreen","guanacaste","gumbo","evergreen","ceiba","cecropia","almond"],nt=["almond","gumbo","evergreen","cecropia","bush"],mt=([X,Q,tt],j)=>{const it=st(X,tt)-Q;if(it<3)return;let G=it<7?F()<.5?"bush":"banana":it<16?nt[Math.floor(F()*nt.length)]:Z[Math.floor(F()*Z.length)];const k=lt.variant(G,Math.floor(F()*2)),R=Math.min(.75+F()*.5,it/k.height);R<.35||pt.push({v:k,x:X,y:Q-.2,z:tt,s:R,yaw:F()*Math.PI*2,far:j,tint:.88+F()*.24})};ot(Mt[0],16,140,1.25).forEach(X=>mt(X,!1)),ot(Mt[1],140,420,1.2).forEach(X=>mt(X,!0));for(const[X,Q,tt]of e.palms||[]){const j=l(X,Q),it=lt.variant("palm",Math.floor(F()*2));pt.push({v:it,x:X,y:j-.2,z:Q,s:Math.min(1.3,(tt||12)/it.height),yaw:F()*6.28,far:!1,tint:1})}ot(Mt[2],18,300,1.6).forEach(([X,Q,tt])=>{if(st(X,tt)-Q>9){const j=lt.variant("palm",Math.floor(F()*2));pt.push({v:j,x:X,y:Q-.2,z:tt,s:.8+F()*.4,yaw:F()*6.28,far:!1,tint:1})}});for(const[X,Q,tt]of e.shrubs||[]){const j=lt.variant(F()<.5?"banana":"bush",0);pt.push({v:j,x:X,y:l(X,Q)-.1,z:Q,s:(tt||1)*.9,yaw:F()*6.28,far:!1,tint:1})}return ot(Mt[3],8,90,1.5).forEach(([X,Q,tt])=>{const j=lt.variant(F()<.45?"banana":"bush",Math.floor(F()*2));pt.push({v:j,x:X,y:Q-.1,z:tt,s:.7+F()*.8,yaw:F()*6.28,far:!1,tint:1})}),lt.instance(pt,o,a),{group:o,sky:h,ground:l,skyMat:c,veg:lt.uniforms,dispose(){r.forEach(X=>X.dispose()),lt.release()}}}let Pr=null;function _x(i){if(!Pr||Pr.tier!==i){const n=vd(i==="high"?2048:1024),s={time:{value:0},wind:{value:.55},trans:{value:.5}},o=xd({atlas:n,uniforms:s,msaa:!1,tier:i});Pr={tier:i,atlas:n,uniforms:s,M:o,variants:new Map}}const t=Pr,e=[];return{uniforms:t.uniforms,variant(n,s){const o=n+s;if(!t.variants.has(o)){const r={evergreen:[11,23],guanacaste:[5,19],ceiba:[3,3],almond:[8,9],gumbo:[13,29],cecropia:[17,18],palm:[41,43],bush:[51,53],banana:[61,62]}[n][s%2],a=bd(n,r);t.variants.set(o,{key:o,t:a,height:Math.max(1,a.bounds.max.y)})}return t.variants.get(o)},instance(n,s,o){const r=new Map;for(const d of n){const f=Math.hypot(d.x-o.x,d.z-o.z)<(i==="low"?0:42),p=d.v.key+(f?"|0":"|1");r.has(p)||r.set(p,{v:d.v,lod:f?0:1,items:[]}),r.get(p).items.push(d)}const a=new At,l=new pe,c=new D,h=new D,u=new ut;for(const d of r.values()){const f=d.v.t.lods[d.lod];for(const[p,v,g]of[[f.branches,t.M.bark,t.M.depthBark],[f.leaves,t.M.leaf,t.M.depthLeaf]]){const m=new ko(p,v,d.items.length);m.instanceColor=new Ns(new Float32Array(d.items.length*3),3),d.items.forEach((b,y)=>{l.setFromAxisAngle(new D(0,1,0),b.yaw),a.compose(h.set(b.x,b.y,b.z),l,c.setScalar(b.s)),m.setMatrixAt(y,a),m.setColorAt(y,u.setRGB(b.tint,b.tint,b.tint*.96))}),m.castShadow=!d.items.every(b=>b.far),m.customDepthMaterial=g,m.receiveShadow=v===t.M.bark,m.computeBoundingSphere(),s.add(m),e.push(m)}}},release(){e.forEach(n=>n.dispose())}}}const Hr=1.6,il=.24,Mx=.5,iu=Math.PI*2,ke=D,Xe=(i,t,e)=>Math.min(e,Math.max(t,i)),ai=(i,t,e)=>{const n=Xe((e-i)/(t-i),0,1);return n*n*(3-2*n)},sl=i=>-(Math.cos(Math.PI*i)-1)/2,Sx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Vr=i=>(i=(i+Math.PI)%iu,i<0&&(i+=iu),i-Math.PI),_s=(i,t,e)=>i+Vr(t-i)*e,gn=(i,t)=>1-Math.exp(-i*t);class Tx{constructor({areas:t,segs:e,blocks:n}){this.areas=t,this.segs=e,this.blocks=n;const s={x0:1e9,z0:1e9,x1:-1e9,z1:-1e9};for(const r of t)r.kind==="circle"?(s.x0=Math.min(s.x0,r.cx-r.r),s.x1=Math.max(s.x1,r.cx+r.r),s.z0=Math.min(s.z0,r.cz-r.r),s.z1=Math.max(s.z1,r.cz+r.r)):(s.x0=Math.min(s.x0,r.x0),s.x1=Math.max(s.x1,r.x1),s.z0=Math.min(s.z0,r.z0),s.z1=Math.max(s.z1,r.z1));this.b=s,this.bs=2,this.bx=Math.ceil((s.x1-s.x0)/this.bs)+2,this.bz=Math.ceil((s.z1-s.z0)/this.bs)+2,this.buckets=Array.from({length:this.bx*this.bz},()=>[]);const o=(r,a,l,c,h)=>{const u=this.bi(a-.6),d=this.bi(c+.6),f=this.bk(l-.6),p=this.bk(h+.6);for(let v=u;v<=d;v++)for(let g=f;g<=p;g++)this.buckets[g*this.bx+v].push(r)};for(const r of e)r.type="s",o(r,Math.min(r.x1,r.x2),Math.min(r.z1,r.z2),Math.max(r.x1,r.x2),Math.max(r.z1,r.z2));for(const r of n){r.type="b";const a=r.kind==="circle"?r.r:Math.hypot(r.hw,r.hd);o(r,r.cx-a,r.cz-a,r.cx+a,r.cz+a)}}bi(t){return Xe(Math.floor((t-this.b.x0)/this.bs)+1,0,this.bx-1)}bk(t){return Xe(Math.floor((t-this.b.z0)/this.bs)+1,0,this.bz-1)}areaY(t,e,n){if(!t.ramp)return t.y;const{axis:s,yA:o,yB:r}=t.ramp,a=s==="x"?(e-t.x0)/(t.x1-t.x0):(n-t.z0)/(t.z1-t.z0);return o+(r-o)*Xe(a,0,1)}contains(t,e,n,s=.002){return t.kind==="circle"?Math.hypot(e-t.cx,n-t.cz)<=t.r+s:e>=t.x0-s&&e<=t.x1+s&&n>=t.z0-s&&n<=t.z1+s}cands(t,e,n){const s=[];let o=null;for(const r of this.areas){if(!this.contains(r,t,e,n))continue;const a=this.areaY(r,t,e);s.push({y:a,a:r}),r.ramp&&(o=o===null?[a]:o.concat(a))}return o?s.filter(r=>r.a.ramp||!o.some(a=>r.y<a-.1&&r.y>a-2.2)):s}floorAt(t,e,n,s=Mx){let o=null,r=s;for(const a of this.cands(t,e,.002)){const l=Math.abs(a.y-n);l<=r+1e-6&&(r=l,o=a)}return o}floorsAt(t,e){const n=[];for(const s of this.cands(t,e,.001))n.some(o=>Math.abs(o-s.y)<.08)||n.push(s.y);return n}active(t,e){return e>=t.y0-.35&&e<t.y1-.12}dist(t,e,n){if(t.type==="s"){const v=t.x2-t.x1,g=t.z2-t.z1,m=v*v+g*g||1e-9,b=Xe(((e-t.x1)*v+(n-t.z1)*g)/m,0,1),y=t.x1+v*b,x=t.z1+g*b,T=e-y,M=n-x,A=Math.hypot(T,M)||1e-6;return[A-t.t,T/A,M/A]}if(t.kind==="circle"){const v=e-t.cx,g=n-t.cz,m=Math.hypot(v,g)||1e-6;return[m-t.r,v/m,g/m]}const s=Math.cos(t.rot),o=Math.sin(t.rot),r=e-t.cx,a=n-t.cz,l=r*s-a*o,c=r*o+a*s,h=Math.abs(l)-t.hw,u=Math.abs(c)-t.hd;let d,f,p;if(h>0||u>0){const v=Math.max(h,0),g=Math.max(u,0),m=Math.hypot(v,g)||1e-6;p=m,d=v/m*Math.sign(l),f=g/m*Math.sign(c)}else h>u?(p=h,d=Math.sign(l),f=0):(p=u,d=0,f=Math.sign(c));return[p,d*s+f*o,-d*o+f*s]}push(t,e,n,s=il){const o=this.buckets[this.bk(e)*this.bx+this.bi(t)];let r=0,a=0,l=0;for(const c of o){if(!this.active(c,n))continue;const[h,u,d]=this.dist(c,t,e);if(h<s){const f=s-h;r+=u*f,a+=d*f,l=Math.max(l,f)}}return[r,a,l]}edgesOK(t,e,n,s=il*.7){return!!(this.floorAt(t+s,e,n,.4)&&this.floorAt(t-s,e,n,.4)&&this.floorAt(t,e+s,n,.4)&&this.floorAt(t,e-s,n,.4))}clear(t,e,n,s=il){return this.push(t,e,n,s)[2]<.001&&this.edgesOK(t,e,n)}move(t,e,n){const s=(r,a)=>{for(let c=0;c<3;c++){const[h,u]=this.push(r,a,t.y);r+=h,a+=u}const l=this.floorAt(r,a,t.y,.4);return!l||!this.edgesOK(r,a,l.y)||this.push(r,a,l.y)[2]>.03?null:[r,l.y,a]},o=s(t.x+e,t.z+n)||(Math.abs(e)>1e-5?s(t.x+e,t.z):null)||(Math.abs(n)>1e-5?s(t.x,t.z+n):null);return o?(t.set(o[0],o[1],o[2]),!0):!1}build(t=.25){var s;const e=this.b;this.cs=t,this.nx=Math.ceil((e.x1-e.x0)/t)+1,this.nz=Math.ceil((e.z1-e.z0)/t)+1;const n={x:[],y:[],z:[],i:[],k:[]};this.cellNodes=new Array(this.nx*this.nz);for(let o=0;o<this.nz;o++)for(let r=0;r<this.nx;r++){const a=e.x0+(r+.5)*t,l=e.z0+(o+.5)*t,c=this.floorsAt(a,l);for(const h of c){if(this.push(a,l,h,.25)[2]>0||!this.edgesOK(a,l,h,.22))continue;const u=n.x.length;n.x.push(a),n.y.push(h),n.z.push(l),n.i.push(r),n.k.push(o);const d=o*this.nx+r;((s=this.cellNodes)[d]||(s[d]=[])).push(u)}}this.N={x:Float32Array.from(n.x),y:Float32Array.from(n.y),z:Float32Array.from(n.z),i:Int32Array.from(n.i),k:Int32Array.from(n.k)},this.count=n.x.length}cellOf(t,e){return[Math.floor((t-this.b.x0)/this.cs),Math.floor((e-this.b.z0)/this.cs)]}nodeIn(t,e,n,s=.35){if(t<0||e<0||t>=this.nx||e>=this.nz)return-1;const o=this.cellNodes[e*this.nx+t];if(!o)return-1;let r=-1,a=s;for(const l of o){const c=Math.abs(this.N.y[l]-n);c<=a&&(a=c,r=l)}return r}nearest(t,e,n,s=2.5,o=.8){const[r,a]=this.cellOf(t,e),l=Math.ceil(s/this.cs);let c=-1,h=1e9;for(let u=0;u<=l;u++){for(let d=a-u;d<=a+u;d++)for(let f=r-u;f<=r+u;f++){if(Math.max(Math.abs(f-r),Math.abs(d-a))!==u||f<0||d<0||f>=this.nx||d>=this.nz)continue;const p=this.cellNodes[d*this.nx+f];if(p)for(const v of p){if(Math.abs(this.N.y[v]-n)>o)continue;const g=Math.hypot(this.N.x[v]-t,this.N.z[v]-e)+Math.abs(this.N.y[v]-n)*2;g<h&&(h=g,c=v)}}if(c>=0&&u*this.cs>h+this.cs)break}return c}astar(t,e){const n=this.N,s=this.count,o=new Float32Array(s).fill(1/0),r=new Int32Array(s).fill(-1),a=new Uint8Array(s),l=[],c=(v,g)=>{l.push([g,v]);let m=l.length-1;for(;m>0;){const b=m-1>>1;if(l[b][0]<=l[m][0])break;[l[b],l[m]]=[l[m],l[b]],m=b}},h=()=>{const v=l[0],g=l.pop();if(l.length){l[0]=g;let m=0;for(;;){const b=2*m+1,y=b+1;let x=m;if(b<l.length&&l[b][0]<l[x][0]&&(x=b),y<l.length&&l[y][0]<l[x][0]&&(x=y),x===m)break;[l[x],l[m]]=[l[m],l[x]],m=x}}return v},u=v=>Math.hypot(n.x[v]-n.x[e],n.z[v]-n.z[e],n.y[v]-n.y[e]);o[t]=0,c(t,u(t));const d=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];let f=0;for(;l.length&&f++<2e5;){const[,v]=h();if(v===e)break;if(a[v])continue;a[v]=1;const g=n.i[v],m=n.k[v],b=n.y[v];for(const[y,x]of d){const T=g+y,M=m+x;if(T<0||M<0||T>=this.nx||M>=this.nz)continue;const A=this.cellNodes[M*this.nx+T];if(A)for(const S of A){if(a[S]||Math.abs(n.y[S]-b)>.4||y&&x&&(this.nodeIn(g+y,m,(b+n.y[S])/2,.4)<0||this.nodeIn(g,m+x,(b+n.y[S])/2,.4)<0))continue;const _=o[v]+Math.hypot(y,x)*this.cs+Math.abs(n.y[S]-b)*.5;_<o[S]&&(o[S]=_,r[S]=v,c(S,_+u(S)))}}}if(r[e]<0&&t!==e)return null;const p=[];for(let v=e;v>=0&&(p.push(v),v!==t);v=r[v]);return p.reverse()}los(t,e){const n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(1,Math.ceil(n/.1));let o=t.y;for(let r=1;r<=s;r++){const a=r/s,l=t.x+(e.x-t.x)*a,c=t.z+(e.z-t.z)*a,h=this.floorAt(l,c,o,.4);if(!h||(o=h.y,this.push(l,c,o,.24)[2]>0)||!this.edgesOK(l,c,o,.2))return!1}return Math.abs(o-e.y)<.4}path(t,e){if(!this.count)return null;const n=this.nearest(t.x,t.z,t.y),s=this.nearest(e.x,e.z,e.y);if(n<0||s<0)return null;const o=this.astar(n,s);if(!o)return null;const r=[t.clone()];for(const h of o)r.push(new ke(this.N.x[h],this.N.y[h],this.N.z[h]));const a=this.clear(e.x,e.z,e.y)?e.clone():r[r.length-1].clone();r.push(a);const l=[r[0]];let c=0;for(;c<r.length-1;){let h=c+1;for(let u=c+2;u<r.length;u++)if(this.los(r[c],r[u]))h=u;else if(u-h>6)break;l.push(r[h]),c=h}return l.filter((h,u)=>u===0||h.distanceTo(l[u-1])>.05)}}class Ex{constructor({camera:t,dom:e,nav:n,plan:s,pick:o,reduced:r,fade:a}){var l,c,h,u;this.camera=t,this.dom=e,this.nav=n,this.plan=s,this.pick=o,this.reduced=r,this.fade=a,this.mode="overview",this.feet=new ke,this.yaw=0,this.pitch=0,this.eyeY=0,this.vel=new ke,this.keys=new Set,this.orbit={az:((l=s.overview)==null?void 0:l.az)??2.6,el:((c=s.overview)==null?void 0:c.el)??.72,dist:((h=s.overview)==null?void 0:h.dist)??38,target:new ke(...((u=s.overview)==null?void 0:u.target)||[0,0,0]),idle:0},this.fitOrbit(),this.roofVis=0,this.joy=null,this.hover=null,this.mouse=new ht(-9,-9),this.room=null,this.listeners=[],this.cb={},this.touches=new Map,this.fovBase=60,this.bind()}fitOrbit(){const t=this.plan.overview||{},e=innerWidth/innerHeight<.8;this.orbit.base=(t.dist??38)*(e?t.portraitDist??1.3:1),!(this.mode==="overview"&&this.orbit.idle>0&&this._portrait===e)&&(this._portrait=e,this.orbit.dist=this.orbit.base,this.orbit.az=e&&t.azPortrait!==void 0?t.azPortrait:t.az??2.6)}on(t,e){this.cb[t]=e}emit(t,...e){var n,s;(s=(n=this.cb)[t])==null||s.call(n,...e)}eyePos(t=new ke){return t.set(this.feet.x,this.eyeY,this.feet.z)}quatFor(t,e,n=new pe){return n.setFromEuler(new on(e,t+Math.PI,0,"YXZ"))}orbitPose(t=this.orbit){var r;const e=new ke(Math.sin(t.az)*Math.cos(t.el),Math.sin(t.el),Math.cos(t.az)*Math.cos(t.el)).multiplyScalar(t.dist).add(t.target),n=new At().lookAt(e,t.target,new ke(0,1,0)),s=new pe().setFromRotationMatrix(n),o=(((r=this.plan.overview)==null?void 0:r.tilt)??0)*Xe((t.el-.25)/.5,0,1);return o&&s.multiply(new pe().setFromAxisAngle(new ke(1,0,0),o)),{pos:e,quat:s}}fromCamera(){const t=new ke(0,0,-1).applyQuaternion(this.camera.quaternion);this.yaw=Math.atan2(t.x,t.z),this.pitch=Math.asin(Xe(t.y,-1,1))}setFeet(t,e,n,s,o=-.05){this.feet.set(t,e,n),this.eyeY=e+Hr,s!==void 0&&(this.yaw=s),this.pitch=o}fly(t,e,n,s={}){if(this.reduced&&this.fade){this.fade(()=>{var o;this.camera.position.copy(t),this.camera.quaternion.copy(e),(o=s.then)==null||o.call(s),this.roofVis=s.roofTo??this.roofVis}),this.anim=null,this.mode="fly-wait";return}this.anim={t:0,dur:n,from:{pos:this.camera.position.clone(),quat:this.camera.quaternion.clone()},to:{pos:t.clone(),quat:e.clone()},ctrl:s.ctrl||null,then:s.then,roofFrom:this.roofVis,roofTo:s.roofTo??this.roofVis,roofWhen:s.roofWhen||"end"},this.mode="fly",this.glide=null}roomView(t){const[e,n,s,o=-4]=t.view,r=t.y??this.plan.levels[t.level||0]??0,a=this.nav.floorAt(e,n,r,.6);return{x:e,y:a?a.y:r,z:n,yaw:xn.degToRad(s),pitch:xn.degToRad(o)}}goPose(t,e={}){const n=["walk","glide","tour"].includes(this.mode);e.keepTour||this.stopTour(!1),(this.mode==="tour"||this.mode==="glide")&&(this.mode="walk",this.glide=null);const s=new ke(t.x,t.y+Hr,t.z),o=this.quatFor(t.yaw,t.pitch),r=this.camera.position.clone(),a=r.distanceTo(s),l=()=>{var u;this.mode="walk",this.emit("mode","walk"),(u=e.then)==null||u.call(e)};if(n&&!e.fly){const u=this.nav.path(this.feet,new ke(t.x,t.y,t.z));if(u){let d=0;for(let f=1;f<u.length;f++)d+=u[f].distanceTo(u[f-1]);if(d<14){this.startGlide(u,{yaw:t.yaw,pitch:t.pitch,speed:3,then:l}),this.emit("mode","glide");return}}}const c=Math.max(r.y,s.y)+(n?7:2.5),h=new ke((r.x+s.x)/2,c,(r.z+s.z)/2);n||h.set(s.x,Math.max(r.y*.7,s.y+5.5),s.z),this.fly(s,o,Xe(1.1+a*.02,1.3,2),{ctrl:h,roofTo:1,roofWhen:n?"hop":"end",then:()=>{this.setFeet(t.x,t.y,t.z,t.yaw,t.pitch),l()}}),this.emit("mode","fly")}goRoom(t,e){this.goPose(this.roomView(t),e)}goOverview(){this.stopTour(!1),this.orbit.dist=this.orbit.base,(this.mode==="walk"||this.mode==="glide")&&(this.orbit.az=Vr(this.yaw+Math.PI));const{pos:t,quat:e}=this.orbitPose(),n=this.camera.position.clone(),s=new ke(n.x,t.y*.8,n.z);this.fly(t,e,1.6,{ctrl:s,roofTo:0,roofWhen:"start",then:()=>{this.mode="overview",this.orbit.idle=0,this.emit("mode","overview")}}),this.emit("mode","fly-out")}enterOverview(){const{pos:t,quat:e}=this.orbitPose();this.camera.position.copy(t),this.camera.quaternion.copy(e),this.mode="overview",this.roofVis=0,this.emit("mode","overview")}startGlide(t,e={}){if(!t||t.length<2)return;if(this.reduced&&this.fade){const a=t[t.length-1];this.fade(()=>{var l;this.setFeet(a.x,a.y,a.z,e.yaw??this.yaw,e.pitch??this.pitch),this.mode="walk",(l=e.then)==null||l.call(e)});return}const n=t.map(a=>new ke(a.x,0,a.z)),s=n.length===2?new Yl(n[0],n[1]):new es(n,!1,"centripetal",.5),o=s.getLength(),r=e.speed??2.5;this.glide={curve:s,len:o,t:0,T:Math.max(.75,o/r*(Math.PI/2)),yaw:e.yaw,pitch:e.pitch,y:t[0].y,then:e.then,keepYaw:!!e.keepYaw},this.mode="glide"}glideTo(t,e={}){const n=this.nav.path(this.feet,t);return n?(this.startGlide(n,e),!0):!1}buildTour(){if(this.tourData)return this.tourData;const t=r=>{var c,h;const a=r.y??this.plan.levels[r.level||0]??0,l=this.nav.floorAt(r.at[0],r.at[1],a,.6);return{...r,p:new ke(r.at[0],l?l.y:a,r.at[1]),yaw:xn.degToRad(((c=r.look)==null?void 0:c[0])??0),pitch:xn.degToRad(((h=r.look)==null?void 0:h[1])??-3),hold:r.hold??2.9}},e=[];let n=[];for(const r of this.plan.stops)r.via?n.push(t(r)):(e.push({...t(r),vias:n}),n=[]);const s=[];for(let r=0;r<e.length-1;r++){const a=[e[r].p,...e[r+1].vias.map(d=>d.p),e[r+1].p];let l=[];for(let d=0;d<a.length-1;d++){const f=this.nav.path(a[d],a[d+1])||[a[d],a[d+1]];l=l.concat(d?f.slice(1):f)}const c=l.map(d=>new ke(d.x,0,d.z)).filter((d,f,p)=>f===0||d.distanceTo(p[f-1])>.15),h=c.length===2?new Yl(c[0],c[1]):new es(c,!1,"centripetal",.5),u=h.getLength();s.push({curve:h,len:u,T:Math.max(3.2,u/Math.min(1.25,.75+u*.025)),y0:e[r].p.y})}const o=e.reduce((r,a)=>r+a.hold,0)+s.reduce((r,a)=>r+a.T,0);return this.tourData={stops:e,segs:s,total:o},this.tourData}startTour(){const t=this.buildTour();if(this.tour&&this.tour.paused)return this.resumeTour();const e=t.stops[0],n={i:0,phase:"hold",t:0,elapsed:0,paused:!1,pending:!0},s=()=>{this.tour=n,n.pending=!1,this.mode="tour",n.t=0,this.emit("caption",e.caption,0,t.stops.length),this.emit("mode","tour")},o=["walk","glide","tour"].includes(this.mode);if(o&&Math.hypot(this.feet.x-e.p.x,this.feet.z-e.p.z)<.4){this.stopTour(!1),s();return}this.goPose({x:e.p.x,y:e.p.y,z:e.p.z,yaw:e.yaw,pitch:e.pitch},{fly:!o||this.feet.distanceTo(e.p)>12,then:s}),this.tour=n,this.emit("mode","tour-start")}pauseTour(){!this.tour||this.tour.paused||this.mode!=="tour"||(this.tour.paused=!0,this.tour.pose={x:this.feet.x,y:this.feet.y,z:this.feet.z,yaw:this.yaw,pitch:this.pitch},this.mode="walk",this.emit("mode","tour-paused"))}resumeTour(){const t=this.tour;if(!t||!t.paused)return;const e=t.pose,n=()=>{t.paused=!1,this.tour=t,this.mode="tour",this.emit("mode","tour")};if(!(Math.hypot(this.feet.x-e.x,this.feet.z-e.z)>.3||Math.abs(Vr(this.yaw-e.yaw))>.2||Math.abs(this.feet.y-e.y)>.3||this.mode!=="walk")){n();return}this.goPose(e,{keepTour:!0,fly:this.mode!=="walk"||this.feet.distanceTo(new ke(e.x,e.y,e.z))>10,then:n}),this.emit("mode","tour-start")}stopTour(t=!0){this.tour&&(this.tour=null,t&&this.emit("mode",this.mode),this.emit("caption",null))}update(t){var o;const e=this.camera;if(this.hoverT=(this.hoverT||0)+t,this.mode==="fly"&&this.anim){const r=this.anim;r.t+=t;const a=Xe(r.t/r.dur,0,1),l=Sx(a);if(r.ctrl){const c=1-l;e.position.set(0,0,0).addScaledVector(r.from.pos,c*c).addScaledVector(r.ctrl,2*c*l).addScaledVector(r.to.pos,l*l)}else e.position.lerpVectors(r.from.pos,r.to.pos,l);e.quaternion.slerpQuaternions(r.from.quat,r.to.quat,sl(a)),r.roofWhen==="hop"?this.roofVis=a<.5?r.roofFrom*(1-ai(0,.25,a)):r.roofTo*ai(.72,.95,a):r.roofWhen==="start"?this.roofVis=r.roofFrom+(r.roofTo-r.roofFrom)*ai(0,.3,a):this.roofVis=r.roofFrom+(r.roofTo-r.roofFrom)*ai(.62,.92,a),a>=1&&(this.anim=null,this.roofVis=r.roofTo,(o=r.then)==null||o.call(r));return}if(this.mode==="fly-wait")return;if(this.mode==="overview"){const r=this.orbit;r.idle+=t,r.idle>5&&!this.reduced&&(r.az+=t*.06*ai(5,8,r.idle));const{pos:a,quat:l}=this.orbitPose();e.position.lerp(a,gn(10,t)),e.quaternion.slerp(l,gn(10,t)),this.roofVis=0;return}if(this.roofVis=1,this.mode==="glide"&&this.glide){const r=this.glide;r.t+=t;const a=Xe(r.t/r.T,0,1),l=sl(a),c=r.curve.getPointAt(l),h=this.nav.floorAt(c.x,c.z,this.feet.y,.6);if(this.feet.set(c.x,h?h.y:this.feet.y,c.z),!r.keepYaw&&r.len>1.2&&a<.85){const u=r.curve.getTangentAt(Math.min(.999,l+.02)),d=Math.atan2(u.x,u.z),f=Math.abs(Vr(d-this.yaw));(r.yaw===void 0||a<.5)&&(this.yaw=_s(this.yaw,d,gn(f>.35?2.6:1.2,t)))}if(r.yaw!==void 0&&(this.yaw=_s(this.yaw,r.yaw,gn(3.5,t)*ai(.35,.9,a))),r.pitch!==void 0?this.pitch+=(r.pitch-this.pitch)*gn(3,t)*ai(.3,.9,a):this.pitch+=(Xe(this.pitch,-.3,.12)-this.pitch)*gn(3,t),a>=1){const u=r.then;this.glide=null,this.mode="walk",u==null||u()}}else this.mode==="tour"&&this.tour&&!this.tour.paused?this.updateTour(t):this.mode==="walk"&&this.updateWalk(t);const n=this.feet.y+Hr;this.eyeY+=(n-this.eyeY)*gn(9,t),e.position.set(this.feet.x,this.eyeY,this.feet.z),this.quatFor(this.yaw,this.pitch,e.quaternion);const s=this.roomAt(this.feet.x,this.feet.z,this.feet.y);s!==this.room&&(this.room=s,this.emit("room",s))}updateWalk(t){const e=this.keys;let n=0,s=0,o=0;(e.has("KeyW")||e.has("ArrowUp"))&&(n+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(n-=1),e.has("KeyA")&&(s-=1),e.has("KeyD")&&(s+=1),(e.has("ArrowLeft")||e.has("KeyQ"))&&(o+=1),(e.has("ArrowRight")||e.has("KeyE"))&&(o-=1),this.joy&&(n+=-this.joy.y,s+=this.joy.x);const r=Math.min(1,Math.hypot(n,s)),a=(e.has("ShiftLeft")||e.has("ShiftRight")?2.2:1.3)*r,l=this.yaw,c=Math.sin(l),h=Math.cos(l),u=-Math.cos(l),d=Math.sin(l),f=r?n/Math.max(1,Math.hypot(n,s)):0,p=r?s/Math.max(1,Math.hypot(n,s)):0,v=new ke((c*f+u*p)*a,0,(h*f+d*p)*a);this.vel.lerp(v,gn(r?7:9,t)),this.vel.lengthSq()>1e-6&&this.nav.move(this.feet,this.vel.x*t,this.vel.z*t),o&&(this.yaw+=o*t*1.6)}updateTour(t){const e=this.tourData,n=this.tour;n.t+=t,n.elapsed+=t;const s=e.stops[n.i];if(n.phase==="hold"){this.feet.lerp(new ke(s.p.x,this.feet.y,s.p.z),gn(4,t));const o=this.nav.floorAt(this.feet.x,this.feet.z,this.feet.y,.6);if(o&&(this.feet.y=o.y),this.yaw=_s(this.yaw,s.yaw,gn(2.2,t)),this.pitch+=(s.pitch-this.pitch)*gn(2.2,t),n.t>=s.hold){if(n.i>=e.stops.length-1){this.tour=null,this.mode="walk",this.emit("tour-end"),this.emit("mode","walk");return}if(this.reduced&&this.fade){const r=e.stops[n.i+1];n.phase="cut",n.t=0,this.fade(()=>{this.tour===n&&(this.setFeet(r.p.x,r.p.y,r.p.z,r.yaw,r.pitch),n.elapsed+=e.segs[n.i].T,n.i++,n.phase="hold",n.t=0,this.emit("caption",r.caption,n.i,e.stops.length))});return}n.phase="move",n.t=0}}else{if(n.phase==="cut")return;{const o=e.segs[n.i],r=e.stops[n.i+1],a=Xe(n.t/o.T,0,1),l=sl(a),c=o.curve.getPointAt(l),h=this.nav.floorAt(c.x,c.z,this.feet.y,.6);this.feet.set(c.x,h?h.y:this.feet.y,c.z);const u=o.curve.getPointAt(Math.min(1,l+1.6/Math.max(o.len,.1)));let d=Math.hypot(u.x-c.x,u.z-c.z)>.2?Math.atan2(u.x-c.x,u.z-c.z):this.yaw;const f=1-ai(0,.3,a),p=ai(.5,1,a),v=_s(_s(d,s.yaw,f),r.yaw,p),g=(-.06*(1-f)+s.pitch*f)*(1-p)+r.pitch*p;this.yaw=_s(this.yaw,v,gn(3.2,t)),this.pitch+=(g-this.pitch)*gn(3,t),a>.55&&!n.cap&&(n.cap=!0,this.emit("caption",r.caption,n.i+1,e.stops.length)),a>=1&&(n.i++,n.phase="hold",n.t=0,n.cap=!1)}}this.emit("progress",Math.min(1,n.elapsed/e.total))}roomAt(t,e,n){let s=null;for(const o of this.plan.rooms){const r=this.plan.levels[o.level||0]??0;if(!(Math.abs(n-r)>1.6)){if(o.rect){const[a,l,c,h]=o.rect;t>=a&&t<=c&&e>=l&&e<=h&&(!s||(s.prio??0)<=(o.prio??0))&&(s=o)}else if(o.circle){const[a,l,c]=o.circle;Math.hypot(t-a,e-l)<=c&&(s=o)}}}return s}interact(t){this.mode==="tour"&&t!=="hover"&&this.pauseTour(),this.orbit.idle=0,this.emit("input",t)}bind(){const t=this.dom,e=(n,s,o,r)=>{n.addEventListener(s,o,r),this.listeners.push([n,s,o,r])};e(t,"pointerdown",n=>this.onDown(n)),e(window,"pointermove",n=>this.onMove(n)),e(window,"pointerup",n=>this.onUp(n)),e(window,"pointercancel",n=>this.onUp(n)),e(t,"wheel",n=>this.onWheel(n),{passive:!1}),e(window,"keydown",n=>this.onKey(n,!0)),e(window,"keyup",n=>this.onKey(n,!1)),e(window,"blur",()=>this.keys.clear()),e(t,"contextmenu",n=>n.preventDefault())}unbind(){for(const[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.listeners=[]}onDown(t){var n,s;if(!this.enabled)return;(s=(n=this.dom).setPointerCapture)==null||s.call(n,t.pointerId);const e=t.pointerType==="touch";if(this.touches.set(t.pointerId,{x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:t.timeStamp}),this.touches.size===2&&this.mode==="overview"){const[o,r]=[...this.touches.values()];this.pinch={d:Math.hypot(o.x-r.x,o.y-r.y),dist:this.orbit.dist}}e&&(this.mode==="walk"||this.mode==="tour"||this.mode==="glide")&&t.clientX<innerWidth*.45&&t.clientY>innerHeight*.25&&(this.joy={id:t.pointerId,x:0,y:0,cx:t.clientX,cy:t.clientY},this.mode!=="walk"&&(this.interact("joy"),this.mode==="glide"&&(this.glide=null,this.mode="walk")),this.emit("joy",this.joy)),this.drag={id:t.pointerId,x:t.clientX,y:t.clientY,moved:0}}onMove(t){if(!this.enabled)return;this.mouse.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),this.mouseType=t.pointerType;const e=this.touches.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY),this.pinch&&this.touches.size===2){const[r,a]=[...this.touches.values()],l=Math.hypot(r.x-a.x,r.y-a.y);this.orbit.dist=Xe(this.pinch.dist*(this.pinch.d/Math.max(20,l)),this.orbit.base*.45,this.orbit.base*1.5),this.interact("pinch");return}if(this.joy&&t.pointerId===this.joy.id){const r=t.clientX-this.joy.cx,a=t.clientY-this.joy.cy,l=Math.hypot(r,a),c=46,h=l>c?c/l:1;this.joy.x=r*h/c,this.joy.y=a*h/c,this.emit("joy",this.joy);return}const n=this.drag;if(!n||n.id!==t.pointerId)return;const s=t.clientX-n.x,o=t.clientY-n.y;if(n.x=t.clientX,n.y=t.clientY,n.moved+=Math.abs(s)+Math.abs(o),!(n.moved<5)){if(this.mode==="overview")this.orbit.az-=s*.0055,this.orbit.el=Xe(this.orbit.el+o*.004,.3,1.35),this.interact("drag");else if(this.mode==="walk"||this.mode==="tour"||this.mode==="glide"){const r=this.camera.fov/60*(t.pointerType==="touch"?.0055:.0042);this.yaw+=s*r,this.pitch=Xe(this.pitch+o*r,-1.05,1.05),this.mode==="glide"&&this.glide&&(this.glide.yaw=void 0),this.interact("look")}}}onUp(t){const e=this.touches.get(t.pointerId);if(this.touches.delete(t.pointerId),this.touches.size<2&&(this.pinch=null),this.joy&&t.pointerId===this.joy.id){this.joy=null,this.emit("joy",null),this.drag=null;return}if(!this.enabled)return;const n=this.drag;!n||n.id!==t.pointerId||(this.drag=null,e&&n.moved<8&&t.timeStamp-e.t0<500&&this.tap(t.clientX,t.clientY))}tap(t,e){const n=new ht(t/innerWidth*2-1,-(e/innerHeight)*2+1),s=this.pick(n);if(this.interact("tap"),!!s){if(this.mode==="overview"){const o=this.roomAt(s.point.x,s.point.z,s.point.y)||this.nearestRoom(s.point);o&&(this.goRoom(o),this.emit("input","room"));return}if(this.mode!=="fly"&&(s.kind==="floor"||s.kind==="block")){const o=s.point.clone(),r=this.nav.floorAt(o.x,o.z,s.kind==="floor"?o.y:this.feet.y,s.kind==="floor"?.2:.6);o.y=r?r.y:o.y,this.glideTo(o)&&this.emit("walked")}}}nearestRoom(t){let e=null,n=1e9;for(const s of this.plan.rooms){if(!s.rect)continue;const[o,r,a,l]=s.rect,c=Math.hypot(Xe(t.x,o,a)-t.x,Xe(t.z,r,l)-t.z);c<n&&(n=c,e=s)}return n<3?e:null}onWheel(t){if(this.enabled){if(t.preventDefault(),this.mode==="overview")this.orbit.dist=Xe(this.orbit.dist*Math.exp(t.deltaY*.0012),this.orbit.base*.45,this.orbit.base*1.5),this.interact("wheel");else if(this.mode==="walk"||this.mode==="tour"||this.mode==="glide"){this.interact("wheel");const e=performance.now();if(e-(this._wheelT||0)<260)return;this._wheelT=e;const n=t.deltaY<0?1:-1,s=this.feet.clone().add(new ke(Math.sin(this.yaw)*.9*n,0,Math.cos(this.yaw)*.9*n)),o=this.feet.clone(),r=9;for(let a=0;a<r&&this.nav.move(o,(s.x-this.feet.x)/r,(s.z-this.feet.z)/r);a++);o.distanceTo(this.feet)>.1&&this.startGlide([this.feet.clone(),o],{speed:2.2,keepYaw:!0})}}}onKey(t,e){if(!this.enabled)return;const n=t.target;if(!(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||!["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(t.code)))if(e){if(t.code.startsWith("Arrow")&&n&&n.closest&&n.closest(".vt-rooms, .vt-map"))return;this.keys.add(t.code),t.code.startsWith("Arrow")&&t.preventDefault(),t.code.startsWith("Shift")||(this.mode==="overview"?this.goRoom(this.plan.rooms.find(o=>o.id===this.plan.entryRoom)||this.plan.rooms[0]):(this.interact("key"),this.mode==="glide"&&(this.glide=null,this.mode="walk")))}else this.keys.delete(t.code)}hoverPick(){var n;if(this.mouseType==="touch"||!(this.mode==="walk"||this.mode==="glide")||((n=this.drag)==null?void 0:n.moved)>5)return null;const t=this.pick(this.mouse);if(!t||t.kind!=="floor")return null;const e=this.nav.floorAt(t.point.x,t.point.z,t.point.y,.2);return!e||!this.nav.clear(t.point.x,t.point.z,e.y,.2)?null:t}}const Ye={prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5h2.6v13H8zM13.4 5.5H16v13h-2.6z" fill="currentColor"/></svg>',cube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4L12 2.8Zm0 0v9.2m0 0 8-4.6M12 12l-8-4.6M12 12v9.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',walk:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13" cy="4.6" r="1.8" fill="currentColor"/><path d="M10.2 21l1.9-6.2 2.6 2.5V21M8 11.5l2.4-3.3 3.5-.6 2.1 3.5 2.4 1.1M12.1 14.8l.8-5.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',sun:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',sunset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 15.5a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2.5 15.5h19M5 19h14M12 5v2.5M4.8 8.3l1.6 1.6M19.2 8.3l-1.6 1.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',moon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 14.6A7.6 7.6 0 0 1 9.4 4.5a7.6 7.6 0 1 0 10.1 10.1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',tap:'<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="17" rx="7" ry="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 14V4m0 0-3 3m3-3 3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrow:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'},su={living:"rgba(232,186,134,0.26)",kitchen:"rgba(232,186,134,0.2)",bed:"rgba(246,240,230,0.2)",bath:"rgba(143,184,196,0.24)",deck:"rgba(196,150,100,0.18)",gym:"rgba(246,240,230,0.16)",path:"rgba(246,240,230,0.08)",pool:"rgba(127,227,214,0.5)"},Ax=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class Cx{constructor(t){this.root=t,this.cb={},t.classList.add("vt"),t.innerHTML=`
      <div class="vt-labels" aria-hidden="true"></div>
      <div class="vt-joy" aria-hidden="true"><i></i></div>
      <header class="vt-top">
        <div class="vt-id">
          <p class="vt-eyebrow"><span class="vt-rule"></span>Step inside · 3D</p>
          <h2 class="vt-name">Villa</h2>
          <p class="vt-status" aria-live="polite"><i></i><span></span></p>
        </div>
        <div class="vt-actions">
          <a class="vt-btn vt-btn-light vt-book" href="#" target="_blank" rel="noopener"><span class="vt-book-long">Book this villa</span><span class="vt-book-short">Book</span>${Ye.arrow}</a>
          <button class="vt-icon vt-close" type="button" aria-label="Close 3D tour">${Ye.close}</button>
        </div>
      </header>
      <div class="vt-caption" role="status" aria-live="polite"><span class="vt-cap-n"></span><span class="vt-cap-t"></span></div>
      <div class="vt-hint" role="note">
        <p class="vt-hint-title">Welcome in</p>
        <ul>
          <li>${Ye.drag}<span class="vt-h-desk">Drag to look</span><span class="vt-h-touch">Drag to look · left thumb to walk</span></li>
          <li>${Ye.tap}<span>Tap the floor to walk</span></li>
          <li>${Ye.play}<span><b>Play tour</b> for the guided walk</span></li>
        </ul>
      </div>
      <button class="vt-btn vt-resume" type="button">${Ye.play}<span>Resume tour</span></button>
      <div class="vt-map">
        <canvas aria-label="Floor plan — tap a room to go there" role="img"></canvas>
        <span class="vt-compass" aria-hidden="true">Pacific ↑</span>
        <div class="vt-levels" role="group" aria-label="Level"></div>
      </div>
      <footer class="vt-bar">
        <div class="vt-rooms" role="group" aria-label="Rooms"></div>
        <div class="vt-dock">
          <div class="vt-modes" role="group" aria-label="View">
            <button type="button" class="vt-mode" data-mode="overview" aria-pressed="false">${Ye.cube}<span>Overview</span></button>
            <button type="button" class="vt-mode vt-play" data-mode="tour" aria-pressed="false"><span class="vt-play-i">${Ye.play}</span><span class="vt-play-t">Play tour</span></button>
            <button type="button" class="vt-mode" data-mode="walk" aria-pressed="false">${Ye.walk}<span>Walk</span></button>
          </div>
          <span class="vt-sep" aria-hidden="true"></span>
          <div class="vt-tod" role="group" aria-label="Time of day">
            <button type="button" data-tod="0" aria-label="Daylight" title="Daylight">${Ye.sun}</button>
            <button type="button" data-tod="1" aria-label="Golden hour" title="Golden hour">${Ye.sunset}</button>
            <button type="button" data-tod="2" aria-label="Night" title="Night">${Ye.moon}</button>
          </div>
        </div>
        <div class="vt-progress" aria-hidden="true"><i></i></div>
      </footer>
      <button class="vt-ref" type="button" aria-label="See the photo this room was modelled from"><span class="vt-ref-img"><img alt="" decoding="async"></span><span class="vt-ref-t"><b>The real room</b><span class="vt-ref-n"></span></span></button>
      <div class="vt-photo" role="dialog" aria-modal="true" aria-label="Photo this room was modelled from">
        <figure class="vt-photo-fig"><img class="vt-photo-img" alt=""><figcaption class="vt-photo-cap"></figcaption></figure>
        <button type="button" class="vt-icon vt-photo-prev" aria-label="Previous photo">${Ye.prev}</button>
        <button type="button" class="vt-icon vt-photo-next" aria-label="Next photo">${Ye.next}</button>
        <button type="button" class="vt-icon vt-photo-close" aria-label="Back to the 3D tour">${Ye.close}</button>
      </div>
      <p class="vt-fine">Interpretive 3D model · layout &amp; furnishings illustrative</p>
      <div class="vt-shade" aria-hidden="true"><div class="vt-load"><span class="vt-load-t"></span><i></i></div></div>`;const e=n=>t.querySelector(n);this.$={name:e(".vt-name"),status:e(".vt-status span"),book:e(".vt-book"),close:e(".vt-close"),caption:e(".vt-caption"),capN:e(".vt-cap-n"),capT:e(".vt-cap-t"),hint:e(".vt-hint"),resume:e(".vt-resume"),map:e(".vt-map"),canvas:e(".vt-map canvas"),levels:e(".vt-levels"),rooms:e(".vt-rooms"),modes:[...t.querySelectorAll(".vt-mode")],play:e(".vt-play"),playI:e(".vt-play-i"),playT:e(".vt-play-t"),tod:[...t.querySelectorAll(".vt-tod button")],progress:e(".vt-progress i"),labels:e(".vt-labels"),joy:e(".vt-joy"),shade:e(".vt-shade")},this.$.ref=e(".vt-ref"),this.$.refImg=e(".vt-ref-img img"),this.$.refN=e(".vt-ref-n"),this.$.photo=e(".vt-photo"),this.$.photoImg=e(".vt-photo-img"),this.$.photoCap=e(".vt-photo-cap"),this.$.ref.addEventListener("click",()=>this.openPhoto(0)),e(".vt-photo-close").addEventListener("click",()=>this.closePhoto()),e(".vt-photo-prev").addEventListener("click",()=>this.openPhoto(this.photoI-1)),e(".vt-photo-next").addEventListener("click",()=>this.openPhoto(this.photoI+1)),this.$.photo.addEventListener("click",n=>{n.target===this.$.photo&&this.closePhoto()}),this.$.close.addEventListener("click",()=>this.emit("close")),this.$.resume.addEventListener("click",()=>this.emit("resume")),this.$.modes.forEach(n=>n.addEventListener("click",()=>this.emit("mode",n.dataset.mode))),this.$.tod.forEach(n=>n.addEventListener("click",()=>this.emit("tod",+n.dataset.tod))),this.$.canvas.addEventListener("click",n=>{const s=this.$.canvas.getBoundingClientRect(),o=this.mapToWorld(n.clientX-s.left,n.clientY-s.top);o&&this.emit("mapTap",o,this.mapLevel)}),this.mapLevel=0,this.touch=matchMedia("(pointer: coarse)").matches,t.classList.toggle("vt-touch",this.touch)}on(t,e){this.cb[t]=e}emit(t,...e){var n,s;(s=(n=this.cb)[t])==null||s.call(n,...e)}setVilla(t,e,n){this.$.name.textContent=t.name,this.$.book.href=e,this.$.book.setAttribute("aria-label",`Book ${t.name} (opens in a new tab)`),this.$.rooms.innerHTML="",this.chips=new Map;for(const o of n.rooms.filter(r=>r.chip!==!1)){const r=document.createElement("button");r.type="button",r.className="vt-chip",r.textContent=o.name,r.addEventListener("click",()=>this.emit("room",o)),this.$.rooms.appendChild(r),this.chips.set(o.id,r)}this.$.labels.innerHTML="",this.labelEls=n.rooms.filter(o=>o.label!==!1).map(o=>{const r=document.createElement("button");return r.type="button",r.tabIndex=-1,r.className="vt-label"+(o.kind==="pool"?" is-pool":""),r.innerHTML=`<span>${Ax(o.name)}</span>`,r.addEventListener("click",()=>this.emit("room",o)),this.$.labels.appendChild(r),{el:r,r:o}}),this.$.levels.innerHTML="";const s=n.levelNames||[];n.levels.length>1&&n.levels.forEach((o,r)=>{const a=document.createElement("button");a.type="button",a.textContent=s[r]||(r?`Level ${r+1}`:"Ground"),a.addEventListener("click",()=>{this.setMapLevel(r),this.emit("level",r)}),this.$.levels.appendChild(a)}),this.plan=n,this.prepareMap(n),this.setMapLevel(0),this.caption(null),this.setProgress(0),this.$.resume.classList.remove("is-on"),this.hint(!1)}setStatus(t){this.$.status.textContent=t}setMode(t,e){const n=t==="tour"||e?"tour":t;this.$.modes.forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.mode===n))),this.$.play.classList.toggle("is-playing",!!e),this.$.playI.innerHTML=e?Ye.pause:Ye.play,this.$.playT.textContent=e?"Pause":"Play tour",this.$.play.setAttribute("aria-label",e?"Pause guided tour":"Play guided tour"),this.root.dataset.mode=t}setTOD(t){this.$.tod.forEach(e=>e.setAttribute("aria-pressed",String(Math.round(t)===+e.dataset.tod)))}setRoom(t){var n,s;(n=this.chips)==null||n.forEach((o,r)=>o.classList.toggle("is-active",t&&t.id===r));const e=t&&((s=this.chips)==null?void 0:s.get(t.id));if(e&&this.$.rooms.scrollWidth>this.$.rooms.clientWidth){const o=e.offsetLeft-this.$.rooms.clientWidth/2+e.offsetWidth/2;this.$.rooms.scrollTo({left:o,behavior:"smooth"})}}setRef(t,e,n){const s=t&&t.length?t.join():"";s!==this._refKey&&(this._refKey=s,this.ref=s?{codes:t,room:e,villaName:n}:null,this.$.ref.classList.toggle("is-on",!!s),s&&(this.$.refImg.src=Es(t[0],360,240),this.$.refN.textContent=t.length>1?`${e.name} · ${t.length} photos`:e.name))}get photoOpen(){return this.$.photo.classList.contains("is-on")}openPhoto(t){if(!this.ref)return;const{codes:e,room:n,villaName:s}=this.ref;this.photoI=(t+e.length)%e.length;const o=this.$.photoImg;o.classList.remove("is-loaded"),o.onload=()=>o.classList.add("is-loaded"),o.src=Es(e[this.photoI],2e3),o.alt=`${s} — ${n.name}, photo ${this.photoI+1}`,this.$.photoCap.textContent=`${s} · ${n.name}${e.length>1?` · ${this.photoI+1} / ${e.length}`:""} — the photo this room was modelled from`,this.$.photo.classList.toggle("is-multi",e.length>1),this.photoOpen||(this._photoFocus=document.activeElement,this.$.photo.classList.add("is-on"),this.emit("photo",!0),setTimeout(()=>this.root.querySelector(".vt-photo-close").focus({preventScroll:!0}),60))}closePhoto(){var t,e;this.photoOpen&&(this.$.photo.classList.remove("is-on"),this.emit("photo",!1),(e=(t=this._photoFocus)==null?void 0:t.focus)==null||e.call(t,{preventScroll:!0}))}resume(t){this.$.resume.classList.toggle("is-on",t)}setProgress(t){this.$.progress.style.transform=`scaleX(${t})`,this.$.progress.parentElement.classList.toggle("is-on",t>0&&t<1)}caption(t,e,n){if(clearTimeout(this._capT),!t){this.$.caption.classList.remove("is-on");return}this.$.capN.textContent=n?`${String(e+1).padStart(2,"0")} / ${String(n).padStart(2,"0")}`:"",this.$.capT.textContent=t,this.$.caption.classList.remove("is-on"),this.$.caption.offsetWidth,this.$.caption.classList.add("is-on")}toast(t,e=3200){this.caption(t),this._capT=setTimeout(()=>this.caption(null),e)}hint(t){this.$.hint.classList.toggle("is-on",t)}loading(t,e){const n=this.root.querySelector(".vt-load");t&&(n.querySelector(".vt-load-t").textContent=t),n.classList.toggle("is-on",e)}shade(t,e=600){const n=this.$.shade;n.style.transitionDuration=e+"ms",n.style.opacity=String(t)}labelFilter(t){const e=this.plan,n=e.levels.length-1,s=r=>(r[2]-r[0])*(r[3]-r[1]),o=(r,a)=>Math.max(0,Math.min(r[2],a[2])-Math.max(r[0],a[0]))*Math.max(0,Math.min(r[3],a[3])-Math.max(r[1],a[1]));for(const r of this.labelEls){const a=r.r.level||0;if(t!=null){r.show=a===t;continue}if(a===n){r.show=!0;continue}const l=e.rooms.filter(c=>(c.level||0)>a&&c.rect).reduce((c,h)=>c+o(r.r.rect,h.rect),0);r.show=l<s(r.r.rect)*.45}this._lf=t}updateLabels(t,e,n,s,o,r=null){var l;if(!this.labelEls||(this.$.labels.classList.toggle("is-on",e),!e))return;(this._lf!==r||((l=this.labelEls[0])==null?void 0:l.show)===void 0)&&this.labelFilter(r);const a=[];for(const c of this.labelEls){const{el:h,r:u}=c;if(!c.show){h.style.opacity="0",h.style.pointerEvents="none";continue}o.set(...u.labelAt),o.project(t);const d=(o.x*.5+.5)*n,f=(-o.y*.5+.5)*s;c.w=c.w||h.offsetWidth||u.name.length*8+24;const p=[d-c.w/2-4,f-44,d+c.w/2+4,f-14],v=a.some(m=>p[0]<m[2]&&p[2]>m[0]&&p[1]<m[3]&&p[3]>m[1]),g=o.z<1&&Math.abs(o.x)<1.05&&Math.abs(o.y)<1.05&&!v;g&&a.push(p),h.style.opacity=g?"":"0",h.style.pointerEvents=g?"":"none",h.style.transform=`translate(${d.toFixed(1)}px, ${f.toFixed(1)}px) translate(-50%, -100%)`}}joy(t){const e=this.$.joy;if(!t){e.classList.remove("is-on");return}e.classList.add("is-on"),e.style.transform=`translate(${t.cx}px, ${t.cy}px)`,e.firstElementChild.style.transform=`translate(${t.x*30}px, ${t.y*30}px)`}prepareMap(t){const e=t.bounds2d;this.mapB=e}mapSize(){const t=this.$.canvas,e=t.clientWidth||180,n=t.clientHeight||180;return[e,n]}worldToMap(t,e){const[n,s]=this.mapSize(),o=this.mapB,r=12,a=Math.min((n-r*2)/(o[2]-o[0]),(s-r*2)/(o[3]-o[1])),l=(o[0]+o[2])/2,c=(o[1]+o[3])/2;return[n/2-(t-l)*a,s/2-(e-c)*a,a]}mapToWorld(t,e){const[n,s]=this.mapSize(),o=this.mapB,r=12,a=Math.min((n-r*2)/(o[2]-o[0]),(s-r*2)/(o[3]-o[1])),l=(o[0]+o[2])/2,c=(o[1]+o[3])/2;return{x:l-(t-n/2)/a,z:c-(e-s/2)/a}}setMapLevel(t){this.mapLevel=t,[...this.$.levels.children].forEach((e,n)=>e.setAttribute("aria-pressed",String(n===t))),this._mapStatic=null}drawMap(t,e,n){const s=this.$.canvas,o=Math.min(2,window.devicePixelRatio||1),[r,a]=this.mapSize();(s.width!==Math.round(r*o)||s.height!==Math.round(a*o))&&(s.width=Math.round(r*o),s.height=Math.round(a*o),this._mapStatic=null);const l=s.getContext("2d");if(this._mapStatic||(this._mapStatic=this.renderMapStatic(t,r,a,o)),l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,s.width,s.height),l.drawImage(this._mapStatic,0,0),l.setTransform(o,0,0,o,0,0),e&&e.room&&(e.room.level||0)===this.mapLevel&&e.room.rect){const[c,h,u,d]=e.room.rect,[f,p]=this.worldToMap(c,h),[v,g]=this.worldToMap(u,d);l.strokeStyle="rgba(232,186,134,0.95)",l.lineWidth=1.5,l.strokeRect(Math.min(f,v),Math.min(p,g),Math.abs(v-f),Math.abs(g-p))}if(e&&e.level===this.mapLevel){const[c,h]=this.worldToMap(e.x,e.z),u=Math.atan2(-Math.cos(e.yaw),-Math.sin(e.yaw)),d=.62,f=l.createRadialGradient(c,h,0,c,h,34);f.addColorStop(0,"rgba(232,186,134,0.55)"),f.addColorStop(1,"rgba(232,186,134,0)"),l.fillStyle=f,l.beginPath(),l.moveTo(c,h),l.arc(c,h,34,u-d,u+d),l.closePath(),l.fill(),l.fillStyle="#f6f0e6",l.strokeStyle="#0b1411",l.lineWidth=1.5,l.beginPath(),l.arc(c,h,4.2,0,Math.PI*2),l.fill(),l.stroke()}}renderMapStatic(t,e,n,s){const o=document.createElement("canvas");o.width=Math.round(e*s),o.height=Math.round(n*s);const r=o.getContext("2d");r.setTransform(s,0,0,s,0,0);const a=this.mapLevel,l=this.plan,c=l.levels[a]??0;for(const h of t.areas)if(!(h.ramp||Math.abs(h.y-c)>1.2))if(r.fillStyle="rgba(246,240,230,0.07)",h.kind==="circle"){const[u,d,f]=this.worldToMap(h.cx,h.cz);r.beginPath(),r.arc(u,d,h.r*f,0,7),r.fill()}else{const[u,d]=this.worldToMap(h.x0,h.z0),[f,p]=this.worldToMap(h.x1,h.z1);r.fillRect(Math.min(u,f),Math.min(d,p),Math.abs(f-u),Math.abs(p-d))}for(const h of l.rooms)if((h.level||0)===a){if(r.fillStyle=su[h.kind]||"rgba(246,240,230,0.12)",h.rect){const[u,d,f,p]=h.rect,[v,g]=this.worldToMap(u,d),[m,b]=this.worldToMap(f,p);r.fillRect(Math.min(v,m),Math.min(g,b),Math.abs(m-v),Math.abs(b-g))}else if(h.circle){const[u,d,f]=this.worldToMap(h.circle[0],h.circle[1]);r.beginPath(),r.arc(u,d,h.circle[2]*f,0,7),r.fill()}}for(const h of l.pools||[])if((h.level||0)===a)if(r.fillStyle=su.pool,h.r){const[u,d,f]=this.worldToMap(h.cx,h.cz);r.beginPath(),r.arc(u,d,h.r*f,0,7),r.fill()}else{const[u,d]=this.worldToMap(h.x0,h.z0),[f,p]=this.worldToMap(h.x1,h.z1);r.fillRect(Math.min(u,f),Math.min(d,p),Math.abs(f-u),Math.abs(p-d))}r.strokeStyle="rgba(246,240,230,0.85)",r.lineCap="round";for(const h of t.segs){if(h.y0>c+1.5||h.y1<c+.5)continue;r.lineWidth=h.t>.07?2:1,r.globalAlpha=h.t>.07?1:.55;const[u,d]=this.worldToMap(h.x1,h.z1),[f,p]=this.worldToMap(h.x2,h.z2);r.beginPath(),r.moveTo(u,d),r.lineTo(f,p),r.stroke()}return r.globalAlpha=1,o}}const wd=i=>Object.prototype.hasOwnProperty.call(kc,i),Rx=5.5,Lr=()=>new Promise(i=>requestAnimationFrame(()=>setTimeout(i,0)));class Px{constructor(t,e){this.renderer=t,this.root=e,this.active=!1,this.onClose=null,this.camera=new hn(60,innerWidth/innerHeight,.06,9e3),this.clock=new ca(!1),this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.ui=new Cx(e),this.v3=new D,this.ray=new yv,this.stats={calls:0,tris:0,fps:0},this.U={uZenith:{value:new ut},uHorizon:{value:new ut},uHaze:{value:new ut},uBelow:{value:new ut},uSunDir:{value:new D(0,1,0)},uSunCol:{value:new ut},uCloudLit:{value:new ut},uCloudDark:{value:new ut},uSunSize:{value:.001},uGlow:{value:1},uStars:{value:0},uTime:{value:0},uCloud:{value:1},uSunDisc:{value:1},uDeep:{value:new ut},uOceanSky:{value:new ut},uNight:{value:0}},this.bindUI(),this._key=n=>{!this.active||this.closing||(n.key==="Escape"?(n.preventDefault(),this.ui.photoOpen?this.ui.closePhoto():this.requestClose()):this.ui.photoOpen&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),n.stopImmediatePropagation(),this.ui.openPhoto(this.ui.photoI+(n.key==="ArrowRight"?1:-1))))},window.addEventListener("keydown",this._key,!0)}get tier(){return document.body.dataset.tier||"high"}bindUI(){const t=this.ui;t.on("close",()=>this.requestClose()),t.on("mode",e=>{const n=this.ctrl;!n||!this.ready||(this.firstInput(),e==="overview"?n.mode!=="overview"&&n.goOverview():e==="tour"?n.mode==="tour"?n.pauseTour():n.startTour():e==="walk"&&(n.mode==="overview"||n.mode==="fly-out"?n.goRoom(this.plan.rooms.find(s=>s.id===this.plan.entryRoom)||this.plan.rooms[0]):n.mode==="tour"&&n.pauseTour()))}),t.on("room",e=>{this.ready&&(this.firstInput(),this.ctrl.goRoom(e))}),t.on("tod",e=>{this.setTOD(e),this.firstInput()}),t.on("resume",()=>{var e;return(e=this.ctrl)==null?void 0:e.resumeTour()}),t.on("photo",e=>{var n;this.firstInput(),e&&((n=this.ctrl)==null?void 0:n.mode)==="tour"&&this.ctrl.pauseTour()}),t.on("mapTap",(e,n)=>{if(!this.ready)return;const s=this.plan.levels[n]??0,o=this.ctrl.roomAt(e.x,e.z,s)||this.ctrl.nearestRoom({x:e.x,z:e.z});o&&(this.firstInput(),this.ctrl.goRoom(o))}),t.on("level",e=>{this.viewLevel=e})}requestClose(){this.onClose?this.onClose():this.close()}firstInput(){this._acted=!0,!this._hinted&&(this._hinted=!0,this.ui.hint(!1))}open(t,{tod:e=1}={}){if(!wd(t)||(clearTimeout(this._closeT),clearTimeout(this._hideT),this.active&&this.key===t&&!this.closing))return;this.built&&this.teardown(),this.closing=!1,this.key=t,this.plan=kc[t],this.villa=Oe.find(s=>s.key===t)||{name:t,key:t},this.root.hidden=!1,this.ui.shade(1,0),this.ui.loading(this.villa.name,!0),this.active=!0,this.ready=!1,this._hinted=!1,this.viewLevel=null,this.tod=this.todTarget=e,this.saveRenderer(),this.resize();const n=this._token=Symbol("open");this.build(n).catch(s=>{console.error("[tour] build failed",s),this.ui.loading("Could not load the 3D model",!0)}),setTimeout(()=>this.ui.$.close.focus({preventScroll:!0}),450)}async build(t){if(await Lr(),await Lr(),t!==this._token)return;const e=performance.now(),n=this.tier,s=this.renderer;dd(n);const o=this.M=new hd(n,s.capabilities.getMaxAnisotropy()),r=new ud(o,{tier:n});if(r.levels=this.plan.levels,this.plan.build(r),await Lr(),t!==this._token)return;const{layers:a,tris:l}=r.finalize();this.layers=a;const c=this.scene=new Co,h=this.villaGroup=new se;for(const E of Object.values(a))h.add(E);if(await Promise.race([Fc().catch(()=>null),new Promise(E=>setTimeout(E,2500))]),t!==this._token)return;this.life=gd(this.key,{lod:n==="low"?"lo":"hi",shadows:!1}),this.life&&h.add(this.life.group),c.add(h),this.fadeMats=[],a.roof&&a.roof.children.forEach(E=>{E.material=E.material.clone(),E.material.alphaHash=!0,this.fadeMats.push(E.material)});const u=new tn;for(const E of Object.values(a))u.expandByObject(E);this.bounds=u;const d=u.getBoundingSphere(new Kn);this.sphere=d;const f=r.nav.areas,p=[1/0,1/0,-1/0,-1/0];for(const E of f){const[U,L,z,O]=E.kind==="circle"?[E.cx-E.r,E.cz-E.r,E.cx+E.r,E.cz+E.r]:[E.x0,E.z0,E.x1,E.z1];p[0]=Math.min(p[0],U),p[1]=Math.min(p[1],L),p[2]=Math.max(p[2],z),p[3]=Math.max(p[3],O)}this.plan.bounds2d=p;for(const E of this.plan.rooms)if(!E.labelAt){const U=this.plan.levels[E.level||0]??0,[L,z,O,F]=E.rect;E.labelAt=[(L+O)/2,U+(E.kind==="deck"||E.kind==="pool"?1.2:2.4),(z+F)/2]}this.sur=wx({M:o,tier:n,site:this.plan.site,U:this.U,bounds:u}),c.add(this.sur.group),this.sun=new Zu("#ffffff",3),this.sun.castShadow=n!=="low";const v=n==="high"?2048:1024;this.sun.shadow.mapSize.set(v,v),this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.035;const g=this.sun.shadow.camera,m=d.radius*1.02;g.left=-m,g.right=m,g.top=m,g.bottom=-m,g.near=.5,g.far=m*2+160,this.sun.target.position.copy(d.center),c.add(this.sun,this.sun.target),this.hemi=new Yu("#ffffff","#886644",.6),c.add(this.hemi);const b={high:9,mid:6,low:3}[n]??6,y=[...r.lights].sort((E,U)=>(U.prio??1)-(E.prio??1)).slice(0,b);if(this.points=y.map(E=>{const U=new $u(E.color||"#ffc27a",0,E.distance||7,2);return U.position.set(E.x,E.y,E.z),U.userData=E,c.add(U),U}),c.fog=new ia("#e7b48c",.0011),this.fans=null,r.fans.length){const E=[];for(let O=0;O<5;O++){const F=new Ae(.62,.012,.13);F.translate(.42,0,0),F.rotateX(.12),F.rotateY(O/5*Math.PI*2),E.push(F.toNonIndexed())}const U=new ze(.1,.1,.05,16).toNonIndexed();E.push(U),E.forEach(O=>{for(const F of Object.keys(O.attributes))["position","normal","uv"].includes(F)||O.deleteAttribute(F)});const L=Jl(E),z=new ko(L,o.get("walnut"),r.fans.length);z.castShadow=!1,z.userData.fans=r.fans.map((O,F)=>({...O,a:F*1.3})),this.fans=z,h.add(z),this.fanLayer=r.fans.map(O=>O.level||0)}const x=this.nav=new Tx(r.nav);if(await Lr(),t!==this._token)return;x.build(.2),this.buildPickers(r.nav),this.ctrl=new Ex({camera:this.camera,dom:s.domElement,nav:x,plan:this.plan,pick:E=>this.pick(E),reduced:this.reduced,fade:E=>this.fadeCut(E)}),this.bindCtrl();const T=new se,M=new Hn({color:"#f6f0e6",transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),A=new Xt(new Cc(.2,.235,48),M),S=new Xt(new Zn(.2,40),new Hn({color:"#f6f0e6",transparent:!0,opacity:.12,depthWrite:!1,toneMapped:!1}));A.rotation.x=S.rotation.x=-Math.PI/2,T.add(A,S),T.visible=!1,T.renderOrder=5,this.ring=T,c.add(T),this.pmrem=new Yr(s),this.envScene=new Co;const _=new Xt(new He(100,32,16),this.sur.skyMat),w=new Xt(new Zn(90,32),new Hn({color:"#3a3a28"}));w.rotation.x=-Math.PI/2,w.position.y=-8,this.envGroundMat=w.material,this.envScene.add(_,w),this.applyTOD(this.tod,!0),this.ui.setVilla(this.villa,Ov,this.plan),this.ui.setTOD(this.todTarget),this.buildInfo={ms:Math.round(performance.now()-e),tris:l,nodes:x.count},this.ctrl.enterOverview(),this.ctrl.enabled=!0,this.camera.fov=this.fovFor("overview"),this.camera.updateProjectionMatrix(),this.setupPost();try{s.compileAsync&&await s.compileAsync(c,this.camera)}catch{}t===this._token&&(this.built=!0,this.ready=!0,this.clock.start(),this.ui.loading(null,!1),this.renderer.shadowMap.needsUpdate=!0,requestAnimationFrame(()=>this.ui.shade(0,this.reduced?200:1100)),this.ui.setMode("overview",!1),this.ui.setStatus("Overview · tap a room to enter"),clearTimeout(this._hintT),this.ui.closePhoto(),this.ui.setRef(null),this._acted=!1,this._hintT=setTimeout(()=>{if(!(!this.active||!this.ready||this._acted||this.ctrl.mode!=="overview")){if(this.reduced){this.ui.hint(!0);return}this.ctrl.startTour()}},this.reduced?1500:1700),window.__tourReady&&window.__tourReady(this))}bindCtrl(){const t=this.ctrl,e=this.ui;t.on("mode",n=>{const s=n==="tour"||n==="tour-start";e.setMode(n==="tour-start"?"tour":n,s),e.resume(n==="tour-paused"),n==="overview"?(e.setStatus("Overview · tap a room to enter"),e.setRoom(null),e.setRef(null)):n==="tour-paused"?e.setStatus("Tour paused — look around or resume"):n==="walk"&&t.room&&e.setStatus(t.room.name),n==="fly-out"&&e.caption(null)}),t.on("room",n=>{var s;e.setRoom(n),e.setRef(n&&((s=vx[this.key])==null?void 0:s[n.id]),n,this.villa.name),t.mode!=="overview"&&t.mode!=="tour"&&e.setStatus(n?n.name:"Outdoors"),t.mode==="tour"&&e.setStatus(`Guided tour · ${n?n.name:""}`)}),t.on("caption",(n,s,o)=>e.caption(n,s,o)),t.on("progress",n=>e.setProgress(n)),t.on("tour-end",()=>{e.setProgress(1),setTimeout(()=>e.setProgress(0),600),e.toast(`That was ${this.villa.name} — wander on, or book your stay`,5e3),e.setMode("walk",!1)}),t.on("input",n=>{n!=="hover"&&this.firstInput(),t.tour&&t.tour.paused&&e.resume(!0)}),t.on("joy",n=>e.joy(n))}buildPickers(t){const e=[],n=[];for(const c of t.areas){if(c.kind==="circle"){const y=new Zn(c.r,32);y.rotateX(-Math.PI/2),y.translate(c.cx,c.y,c.cz),e.push(y.toNonIndexed());continue}const{x0:h,z0:u,x1:d,z1:f}=c;let p=c.y,v=c.y,g=c.y,m=c.y;if(c.ramp){const{axis:y,yA:x,yB:T}=c.ramp;y==="x"?(p=g=x,v=m=T):(p=v=x,g=m=T)}const b=new ge;b.setAttribute("position",new Wt([h,p,u,h,g,f,d,m,f,h,p,u,d,m,f,d,v,u],3)),b.computeVertexNormals(),e.push(b)}const s=(c,h,u,d,f,p,v)=>{const g=new Ae(d,f,p);return g.rotateY(v),g.translate(c,h,u),g.toNonIndexed()};for(const c of t.segs){if(c.kind==="glass")continue;const h=Math.hypot(c.x2-c.x1,c.z2-c.z1);h<.01||n.push(s((c.x1+c.x2)/2,(c.y0+c.y1)/2,(c.z1+c.z2)/2,h,c.y1-c.y0,c.t*2+.02,-Math.atan2(c.z2-c.z1,c.x2-c.x1)))}const o=[];for(const c of t.blocks)c.kind!=="circle"&&o.push(s(c.cx,(c.y0+Math.min(c.y1,c.y0+1.2))/2,c.cz,c.hw*2,Math.min(c.y1,c.y0+1.2)-c.y0,c.hd*2,c.rot));const r=c=>c.map(h=>{for(const u of Object.keys(h.attributes))u!=="position"&&h.deleteAttribute(u);return h}),a=new Hn({side:Ee});this.pickers=[];const l=(c,h)=>{if(!c.length)return;const u=new Xt(Jl(r(c)),a);u.userData.kind=h,u.updateMatrixWorld(),this.pickers.push(u)};l(e,"floor"),l(n,"wall"),l(o,"block"),this.pickMat=a}pick(t){var n;if(!this.pickers)return null;this.ray.setFromCamera(t,this.camera),this.ray.far=400;const e=this.ray.intersectObjects(this.pickers,!1);for(const s of e){if(((n=this.ctrl)==null?void 0:n.mode)==="overview"&&this.viewLevel!=null){const o=this.plan.levels[this.viewLevel]??0;if(s.point.y>o+2.6)continue}return{point:s.point.clone(),kind:s.object.userData.kind}}return null}setTOD(t){this.todTarget=t,this.ui.setTOD(t)}applyTOD(t,e=!1){const n=pd(t);this.P=n;const s=this.U;s.uZenith.value.copy(n.zenith),s.uHorizon.value.copy(n.horizon),s.uHaze.value.copy(n.haze),s.uBelow.value.copy(n.below),s.uSunDir.value.copy(n.sunDir),s.uSunCol.value.copy(n.sunCol).multiplyScalar(n.sunI*.45),s.uCloudLit.value.copy(n.cloudLit),s.uCloudDark.value.copy(n.cloudDark),s.uCloud.value=n.cloud,s.uSunSize.value=n.sunSize,s.uGlow.value=n.glow,s.uStars.value=n.stars,s.uSunDisc.value=n.sunDisc,s.uDeep.value.copy(n.deep),s.uOceanSky.value.copy(n.oceanSky),s.uNight.value=n.night;const o=this.sphere.center;this.sun.position.copy(o).addScaledVector(n.sunDir,this.sphere.radius+80),this.sun.color.copy(n.sunCol),this.sun.intensity=n.sunI*Math.max(.15,n.sunDisc),this.hemi.color.copy(n.hemiSky),this.hemi.groundColor.copy(n.hemiGround),this.hemi.intensity=n.hemiI,this.scene.fog.color.copy(n.fog),this.scene.fog.density=n.fogD,this.scene.environmentIntensity=n.env,this.exposure=n.exposure;const r=this.M;r.setNight(n.lamps),r.uniforms.sun.value.copy(n.sunCol).multiplyScalar(n.sunI*.35*n.sunDisc),r.uniforms.sunDir.value.copy(n.sunDir),r.uniforms.night.value=n.night,r.uniforms.caustic.value=n.caustic;for(const a of this.points){const l=a.userData,c=l.kind==="pool"||l.kind==="garden"?n.night:n.lamps;a.intensity=(l.intensity||5)*Rx*c+(l.day||0)*(1-n.night)}this.bloom&&(this.bloom.strength=.16+n.night*.22+Math.max(0,1-Math.abs(t-1))*.08),this.envGroundMat.color.set(n.night>.5?"#0b0c0a":"#4a4630").multiplyScalar(.6+.4*(1-n.night)),this._envDirty=!0,this.renderer.shadowMap.needsUpdate=!0,e&&this.updateEnv()}updateEnv(){this._envDirty=!1,this._envAt=performance.now();const t=this.envRT,e=this.renderer.toneMapping;this.envRT=this.pmrem.fromScene(this.envScene,.02,.1,400),this.renderer.toneMapping=e,this.scene.environment=this.envRT.texture,t==null||t.dispose()}setupPost(){var o,r;const t=this.renderer;if((r=(o=this.composer)==null?void 0:o.dispose)==null||r.call(o),this.composer=null,this.bloom=null,this.tier!=="high")return;const e=t.getDrawingBufferSize(new ht),n=new dn(e.x,e.y,{type:Vn,samples:4}),s=new ed(t,n);s.setPixelRatio(t.getPixelRatio()),s.setSize(innerWidth,innerHeight),s.addPass(new nd(this.scene,this.camera)),this.bloom=new is(new ht(innerWidth/2,innerHeight/2),.25,.5,.96),s.addPass(this.bloom),s.addPass(new id),this.composer=s,this.applyTOD(this.tod)}saveRenderer(){const t=this.renderer;if(this.saved)return;this.saved={toneMapping:t.toneMapping,exposure:t.toneMappingExposure,shadow:t.shadowMap.enabled,autoUpdate:t.shadowMap.autoUpdate,pr:t.getPixelRatio(),clear:t.getClearColor(new ut),alpha:t.getClearAlpha(),autoReset:t.info.autoReset,cs:t.outputColorSpace};const e=this.tier,n=Math.min(window.devicePixelRatio||1,e==="high"?1.5:e==="mid"?1.3:1);this.maxPR=n,this.pr=n,t.setPixelRatio(n)}restoreRenderer(){const t=this.renderer,e=this.saved;e&&(t.toneMapping=e.toneMapping,t.toneMappingExposure=e.exposure,t.shadowMap.enabled=e.shadow,t.shadowMap.autoUpdate=e.autoUpdate,t.shadowMap.needsUpdate=!0,t.setPixelRatio(e.pr),t.setClearColor(e.clear,e.alpha),t.info.autoReset=e.autoReset,t.outputColorSpace=e.cs,t.setRenderTarget(null),this.saved=null)}close(){!this.active||this.closing||(this.closing=!0,this._token=null,this.ctrl&&(this.ctrl.enabled=!1),this.ui.hint(!1),this.ui.caption(null),this.ui.shade(1,this.reduced?120:380),clearTimeout(this._hintT),this.ui.closePhoto(),this.ui.setRef(null),this._closeT=setTimeout(()=>{this.teardown(),this.restoreRenderer(),this.active=!1,this.ui.shade(0,this.reduced?150:650),this._hideT=setTimeout(()=>{this.active||(this.root.hidden=!0),this.closing=!1},this.reduced?160:680)},this.reduced?140:400))}teardown(){var t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g,m,b,y;if(this.ready=!1,this.life=null,this.built=!1,(t=this.ctrl)==null||t.unbind(),this.ctrl=null,this.scene){this.scene.traverse(x=>{x.geometry&&!x.userData.sharedGeo&&x.geometry.dispose(),x.material&&!Array.isArray(x.material)&&(x.material,this.pickMat)});for(const x of this.fadeMats||[])x.dispose();(s=(n=(e=this.sun)==null?void 0:e.shadow)==null?void 0:n.map)==null||s.dispose(),(o=this.points)==null||o.forEach(x=>{var T;return(T=x.dispose)==null?void 0:T.call(x)})}(r=this.pickers)==null||r.forEach(x=>x.geometry.dispose()),(a=this.pickMat)==null||a.dispose(),this.pickers=null,(l=this.sur)==null||l.dispose(),(c=this.ring)==null||c.traverse(x=>{var T,M;(T=x.geometry)==null||T.dispose(),(M=x.material)==null||M.dispose()}),(h=this.envRT)==null||h.dispose(),this.envRT=null,(u=this.pmrem)==null||u.dispose(),this.pmrem=null,(d=this.envScene)==null||d.traverse(x=>{var T,M;(T=x.geometry)==null||T.dispose(),x.material&&x.material!==((M=this.sur)==null?void 0:M.skyMat)&&x.material.dispose()}),(f=this.M)==null||f.dispose(),this.M=null,(v=(p=this.composer)==null?void 0:p.renderTarget1)==null||v.dispose(),(m=(g=this.composer)==null?void 0:g.renderTarget2)==null||m.dispose(),(y=(b=this.bloom)==null?void 0:b.dispose)==null||y.call(b),this.composer=null,this.bloom=null,fd(),this.scene=null,this.nav=null,this.layers=null,this.fans=null}resize(){const t=innerWidth,e=innerHeight;if(this.camera.aspect=t/e,this.ready||(this.camera.fov=this.fovFor("overview")),this.camera.updateProjectionMatrix(),this.active&&this.saved&&(this.renderer.setSize(t,e,!1),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e))),this.ui&&(this.ui._mapStatic=null),this.ctrl){const n=this.ctrl._portrait,s=innerWidth/innerHeight<.8;n!==s&&this.ctrl.fitOrbit()}}fovFor(t){const e=innerWidth/innerHeight<.8;return t==="overview"||t==="fly-out"?e?58:40:e?74:62}fadeCut(t){this.ui.shade(1,180),setTimeout(()=>{t(),this.ui.shade(0,320)},200)}frame(){var h;const t=this.renderer;if(!this.ready){t.setRenderTarget(null),t.setClearColor(329992,1),t.clear();return}if(this._budget!==void 0){if(this._budget<=0){this.clock.getDelta();return}this._budget--}this.frames=(this.frames||0)+1;const e=this.clock.getDelta(),n=Math.min(e,.1),s=this.clock.elapsedTime;if(this.adapt(e),this.life&&(this.life.setNight(Math.min(1,Math.max(0,(this.tod-1.2)/.8))),this.life.update(s)),Math.abs(this.tod-this.todTarget)>.001){const u=this.todTarget-this.tod;this.tod+=Math.sign(u)*Math.min(Math.abs(u),n*.9),Math.abs(this.tod-this.todTarget)<.002&&(this.tod=this.todTarget),this.applyTOD(this.tod)}this._envDirty&&performance.now()-(this._envAt||0)>(this.tod===this.todTarget?0:220)&&this.updateEnv();const o=this.ctrl;o.update(n);const r=this.fovFor(o.mode==="fly"?o.roofVis<.5?"overview":"walk":o.mode);Math.abs(this.camera.fov-r)>.01&&(this.camera.fov+=(r-this.camera.fov)*(1-Math.exp(-n*4)),this.camera.updateProjectionMatrix());const a=o.roofVis;if(this.layers.roof){this.layers.roof.visible=a>.01;for(const u of this.fadeMats)u.opacity=a}const l=o.mode==="overview"||o.mode==="fly"&&a<.99;for(const[u,d]of Object.entries(this.layers)){if(!u.startsWith("L"))continue;const f=+u.slice(1);d.visible=!(l&&this.viewLevel!=null&&f>this.viewLevel)}if(this.fans){this.fans.visible=!0;const u=new At,d=new pe,f=new D(1,1,1),p=new D;this.fans.userData.fans.forEach((v,g)=>{v.a+=n*2.2,d.setFromAxisAngle(new D(0,1,0),v.a);const m=l&&this.viewLevel!=null&&(v.level||0)>this.viewLevel;u.compose(p.set(v.x,v.y,v.z),d,m?f.set(0,0,0):f.set(1,1,1)),this.fans.setMatrixAt(g,u)}),this.fans.instanceMatrix.needsUpdate=!0}this.M.uniforms.time.value=s,this.U.uTime.value=s,(h=this.sur)!=null&&h.veg&&(this.sur.veg.time.value=s);const c=(this._hovN=(this._hovN||0)+1)%2===0?o.hoverPick():this._hov;if(this._hov=c,c){this.ring.visible||this.ring.position.copy(c.point),this.ring.visible=!0,this.ring.position.lerp(c.point,1-Math.exp(-n*18)),this.ring.position.y=c.point.y+.015;const u=1+Math.sin(s*4)*.04;this.ring.scale.set(u,1,u),t.domElement.style.cursor="pointer"}else this.ring.visible=!1,t.domElement.style.cursor=o.mode==="overview"&&o.drag?"grabbing":"grab";if(this.ui.updateLabels(this.camera,o.mode==="overview",innerWidth,innerHeight,this.v3,this.viewLevel),(this._mapN=(this._mapN||0)+1)%3===0){const u=this.levelOf(o.feet.y);o.mode!=="overview"&&this.ui.mapLevel!==u&&o.mode!=="fly"&&this.ui.setMapLevel(u),this.ui.drawMap(this.nav,o.mode==="overview"?null:{x:o.feet.x,z:o.feet.z,yaw:o.yaw,level:u,room:o.room},!1)}t.toneMapping=lc,t.toneMappingExposure=this.exposure,t.shadowMap.enabled=this.tier!=="low",t.shadowMap.autoUpdate=!1,t.info.autoReset=!1,t.info.reset(),t.setRenderTarget(null),this.composer?this.composer.render(n):t.render(this.scene,this.camera),this.stats.calls=t.info.render.calls,this.stats.tris=t.info.render.triangles}levelOf(t){const e=this.plan.levels;let n=0,s=1e9;return e.forEach((o,r)=>{const a=Math.abs(t-o);t>=o-.8&&a<s&&(s=a,n=r)}),n}adapt(t){if(this._fixedPR||(this._ft=(this._ft??16)*.95+Math.min(t,.25)*1e3*.05,this._an=(this._an||0)+1,this._an%90))return;const e=this.renderer,n=e.getPixelRatio();let s=n;this._ft>24&&n>.75?s=Math.max(.75,n-.15):this._ft<14&&n<this.maxPR&&(s=Math.min(this.maxPR,n+.1)),s!==n&&(e.setPixelRatio(s),this.resize())}debug(){const t=this;return{get ready(){return!!t.ready},get frames(){return t.frames||0},render(e){t._budget=e},live(){t._budget=void 0},get ctrl(){return t.ctrl},get tour(){return t},fixPR(e){t._fixedPR=!0,t.renderer.setPixelRatio(e),t.resize()},setPose([e,n,s],[o,r=-3]){const a=t.ctrl;a.stopTour(!1),a.anim=null,a.glide=null,a.setFeet(e,n,s,xn.degToRad(o),xn.degToRad(r)),a.mode="walk",a.roofVis=1,a.update(.016),a.eyeY=n+Hr,a.update(.016),t.camera.fov=t.fovFor("walk"),t.camera.updateProjectionMatrix(),t.ui.setMode("walk",!1)},goto(e){const n=t.plan.rooms.find(s=>s.id===e||s.name===e);n&&t.ctrl.goRoom(n)},mode(e,n={}){const s=t.ctrl;if(e==="overview")if(n.snap){s.stopTour(!1),s.fitOrbit(),s.enterOverview(),n.az!==void 0&&(s.orbit.az=n.az),n.el!==void 0&&(s.orbit.el=n.el),n.dist!==void 0&&(s.orbit.dist=n.dist);const{pos:o,quat:r}=s.orbitPose();t.camera.position.copy(o),t.camera.quaternion.copy(r),t.camera.fov=t.fovFor("overview"),t.camera.updateProjectionMatrix(),s.orbit.idle=-1e9}else s.goOverview();else e==="tour"?s.startTour():e==="walk"&&s.goRoom(t.plan.rooms.find(o=>o.id===t.plan.entryRoom))},tod(e,n=!0){t.setTOD(e),n&&(t.tod=e,t.applyTOD(e,!0))},level(e){t.viewLevel=e,t.ui.setMapLevel(e??0)},stats(){var e;return{...t.stats,pr:t.renderer.getPixelRatio(),build:t.buildInfo,lights:t.points.length,programs:(e=t.renderer.info.programs)==null?void 0:e.length,geometries:t.renderer.info.memory.geometries,textures:t.renderer.info.memory.textures}},tourTime(e){const n=t.ctrl,s=n.buildTour();let o=e;n.tour={i:0,phase:"hold",t:0,elapsed:0,paused:!1},n.mode="tour";const r=s.stops[0];for(n.setFeet(r.p.x,r.p.y,r.p.z,r.yaw,r.pitch);o>0&&n.tour;){const a=Math.min(.05,o);n.update(a),o-=a}},tourInfo(){const e=t.ctrl,n=e.buildTour(),s=t.nav,o=n.stops.map(l=>({at:[l.p.x,l.p.y,l.p.z],clear:s.clear(l.p.x,l.p.z,l.p.y),node:s.nearest(l.p.x,l.p.z,l.p.y)})),r=n.segs.map((l,c)=>({len:+l.len.toFixed(2),T:+l.T.toFixed(1),path:!!s.path(n.stops[c].p,n.stops[c+1].p)})),a=t.plan.rooms.map(l=>{const c=e.roomView(l);return{id:l.id,clear:s.clear(c.x,c.z,c.y),y:c.y}});return{total:+n.total.toFixed(1),stops:o,segs:r,rooms:a}},tris(){const e=[];return t.scene.traverse(n=>{var s;if(n.isMesh||n.isInstancedMesh){const o=(n.geometry.index?n.geometry.index.count:n.geometry.attributes.position.count)/3*(n.isInstancedMesh?n.count:1);e.push([n.name||((s=n.material)==null?void 0:s.name)||n.type,Math.round(o)])}}),e.sort((n,s)=>s[1]-n[1]).slice(0,25)},layers(){return Object.fromEntries(Object.entries(t.layers).map(([e,n])=>[e,n.children.map(s=>s.name)]))}}}}const ou="./audio/",vn=(i,t)=>i+Math.random()*(t-i);class Lx{constructor(){this.ctx=null,this.on=!1,this.night=0,this.ready=!1,this.sea={level:1,cutoff:14e3},this.bytes=Promise.all([...["surf","birds","frogs","owl"].map(t=>fetch(`${ou}${t}.mp3`).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null)),fetch(`${ou}sprites.json`).then(t=>t.json()).catch(()=>null)])}start(){var e,n;this.ctx||this.build(),(n=(e=this.ctx).resume)==null||n.call(e),this.on=!0;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(this.master.gain.value,t),this.master.gain.linearRampToValueAtTime(1,t+3)}stop(){if(!this.ctx)return;this.on=!1;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(this.master.gain.value,t),this.master.gain.linearRampToValueAtTime(0,t+.8)}setNight(t){if(this.night=t,!this.ready)return;const e=this.ctx.currentTime;this.dayBus.gain.setTargetAtTime(1-t,e,.8),this.nightBus.gain.setTargetAtTime(t,e,.8)}setSea(t,e=0){const n=(.38+.62*t)*(1-.45*e),s=900+(1-e)*(1400+12600*t*t);if(Math.abs(n-this.sea.level)<.01&&Math.abs(s-this.sea.cutoff)<60||(this.sea={level:n,cutoff:s},!this.ready))return;const o=this.ctx.currentTime;this.surfGain.gain.setTargetAtTime(n*.95,o,.6),this.surfLP.frequency.setTargetAtTime(s,o,.6),this.dayBus.gain.setTargetAtTime((1-this.night)*(1-.35*e),o,.8)}build(){const t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.surfLP=t.createBiquadFilter(),this.surfLP.type="lowpass",this.surfLP.Q.value=.5,this.surfLP.frequency.value=this.sea.cutoff,this.surfGain=t.createGain(),this.surfGain.gain.value=this.sea.level*.95,this.surfLP.connect(this.surfGain).connect(this.master),this.dayBus=t.createGain(),this.dayBus.gain.value=1-this.night,this.nightBus=t.createGain(),this.nightBus.gain.value=this.night;const e=t.createConvolver();e.buffer=this.tail(2.2);const n=t.createGain();n.gain.value=.28;for(const s of[this.dayBus,this.nightBus])s.connect(this.master),s.connect(e);e.connect(n).connect(this.master),this.bytes.then(async([s,o,r,a,l])=>{const c=p=>p?new Promise(v=>t.decodeAudioData(p.slice(0),v,()=>v(null))):null,[h,u,d,f]=await Promise.all([c(s),c(o),c(r),c(a)]);this.buf={B:u,F:d,O:f},this.sprites=l,h&&this.loopSurf(h),this.ready=!0,this.setNight(this.night),this.schedule()})}tail(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),s=e.createBuffer(2,n,e.sampleRate);for(let o=0;o<2;o++){const r=s.getChannelData(o);for(let a=0;a<n;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/n,3.2)*.5}return s}loopSurf(t){const e=t.getChannelData(0);let n=0,s=e.length-1;for(;n<e.length&&Math.abs(e[n])<1e-4;)n++;for(;s>n&&Math.abs(e[s])<1e-4;)s--;const o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0,o.loopStart=n/t.sampleRate,o.loopEnd=(s+1)/t.sampleRate,o.connect(this.surfLP),o.start(0,o.loopStart+Math.random()*40)}play(t,e,n,{gain:s=.5,rate:o=1,pan:r=0,lp:a=8e3,at:l=0}={}){if(!t||!e)return 0;const c=this.ctx,h=c.currentTime+l,u=c.createBufferSource();u.buffer=t,u.playbackRate.value=o;const d=c.createGain();d.gain.value=s;const f=c.createBiquadFilter();f.type="lowpass",f.frequency.value=a;const p=c.createStereoPanner?c.createStereoPanner():null;return u.connect(f).connect(d),p?(p.pan.value=r,d.connect(p).connect(n)):d.connect(n),u.start(h,e[0],e[1]),e[1]/o}schedule(){const t=()=>{let e=4e3;if(this.on&&this.ready&&this.ctx.state==="running"&&this.sprites){const{B:n,F:s,O:o}=this.buf;if(this.night<.5){const r={rate:vn(.9,1.12),pan:vn(-.85,.85),lp:vn(3800,8500),gain:vn(.18,.42)},a=this.sprites.birds;let l=0;const c=Math.random()<.35?2:1;for(let h=0;h<c;h++)l+=this.play(n,a[Math.random()*a.length|0],this.dayBus,{...r,at:l})+vn(.5,1.4);e=vn(4500,12e3)}else{const r=this.sprites.frogs;this.play(s,r[Math.random()*r.length|0],this.nightBus,{rate:vn(.94,1.06),pan:vn(-.9,.9),lp:3200,gain:vn(.12,.28)}),Math.random()<.12&&this.play(o,this.sprites.owl[Math.random()*2|0],this.nightBus,{rate:vn(.96,1.02),pan:vn(-.6,.6),lp:2600,gain:.3,at:vn(1,3)}),e=vn(3500,9e3)}}this.timer=setTimeout(t,e)};t()}}const Dx={FILM_SRC:document.documentElement.dataset.film||""},he=D,mo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Dr=matchMedia("(prefers-reduced-motion: reduce)").matches;function Ix(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}const ru=document.querySelector(".loader-bar i"),Ir=i=>ru&&(ru.style.transform=`scaleX(${i})`);async function Ux(){var X,Q,tt;Ir(.15),await((X=document.fonts)==null?void 0:X.ready),Ir(.35),await new Promise(j=>requestAnimationFrame(()=>setTimeout(j,30)));const i=new Rv({lerp:Dr?1:.085,smoothWheel:!0,wheelMultiplier:.9}),t=new Lx;let e=null,n=null;const s=Ix();if(s||document.body.classList.add("no-webgl"),s){const j=document.getElementById("world");e=new mx(j,{tier:px()}),document.body.dataset.tier=e.tier,Ir(.8),n=new Px(e.renderer,document.getElementById("tour"))}const o=[...document.querySelectorAll(".chapter")];let r=[],a,l,c=[],h=[];function u(j,it){const G=Oe.find(q=>q.key===j),k=e.villas.anchors[j],[R,gt,et]=G.cam,bt=it?R*1.35:R,vt=G.world.rot+et,Ut=new he(k.x+Math.sin(vt)*bt,k.y+gt*(it?1.3:1),k.z+Math.cos(vt)*bt),St=k.clone(),I=St.clone().sub(Ut).normalize(),C=new he().crossVectors(I,new he(0,1,0)).normalize();return it?St.y-=bt*.2:St.addScaledVector(C,-bt*.26),[Ut,St]}function d(){const j=innerWidth/innerHeight<.85,it=e.villas.anchors,G=it.harmony,k=it.ebony,R={hero:j?[new he(G.x-20,G.y+26,G.z-46),new he(G.x+6,G.y-12,G.z+80)]:[new he(G.x-20,G.y+17,G.z-38),new he(G.x-6,G.y+2,G.z+80)],intro:[new he(-175,28,150),new he(40,42,-190)],estate:j?[new he(90,260,160),new he(-20,30,-230)]:[new he(110,300,160),new he(-75,74,-262)],wellness:[new he(k.x+30,k.y+8,k.z+34),new he(k.x+200,k.y-20,k.z+380)],experiences:[new he(270,17,70),new he(-90,6,-25)],film:[new he(40,42,420),new he(-80,26,1600)],reviews:j?[new he(-40,120,160),new he(10,80,-260)]:[new he(-60,90,120),new he(20,80,-260)],book:(()=>{const[gt,et]=u("guanacaste",j),bt=gt.clone().sub(et);return gt.addScaledVector(bt,.22),gt.y+=4,[gt,et]})()};r=o.map(gt=>{const et=gt.dataset.cam;return et.startsWith("villa:")?u(et.slice(6),j):R[et]}),a=new es(r.map(gt=>gt[0]),!1,"centripetal"),l=new es(r.map(gt=>gt[1]),!1,"centripetal"),h=o.map(gt=>Number(gt.dataset.tod??1))}function f(){c=o.map(j=>j.getBoundingClientRect().top+scrollY)}const p=o.map(j=>j.classList.contains("villa")),v=o.map(j=>j.querySelector(".vgrid")),g=new Set,m=()=>innerWidth>820,b={panelOut:[.1,.16],gridIn:.15,gridOut:.62,dwell:.66};function y(j){let it=0;for(;it<c.length-1&&j>=c[it+1]-1;)it++;const G=it<c.length-1?c[it+1]-c[it]:innerHeight,k=Math.min(1,Math.max(0,(j-c[it])/G)),R=p[it]&&m()?b.dwell:.4;return{i:it,f:k,s:it+mo(R,1,k)}}const x=[];function T(j,it){const G=m();for(let k=0;k<o.length;k++){if(!v[k])continue;Math.abs(k-j)<=1&&!g.has(k)&&(g.add(k),o[k].querySelectorAll('img[loading="lazy"]').forEach(bt=>{bt.loading="eager"}));const R=G&&k===j&&it>b.gridIn&&it<b.gridOut;R!==x[k]&&(v[k].classList.toggle("is-on",R),x[k]=R),R&&v[k].style.setProperty("--gp",((it-b.gridIn)/(b.gridOut-b.gridIn)).toFixed(4));const gt=G&&k===j?1-mo(b.panelOut[0],b.panelOut[1],it):1;o[k].style.setProperty("--pf",gt.toFixed(3));const et=o[k].querySelector(".villa-panel");et&&(et.inert=gt<.05)}}let M=!1;const A=gx({filmSrc:Dx.FILM_SRC,onJump:j=>{const it=document.getElementById(j);it&&i.scrollTo(it,{duration:Dr?0:2.4,easing:G=>1-Math.pow(1-G,4)})},onTour:j=>w(j),onTOD:j=>{M=!0,e==null||e.setTimeOfDay(j),A.setTODActive(j),t.setNight(j>1.5?1:0)},onSound:j=>j?t.start():t.stop(),onModal:j=>{j?(i.stop(),_(!0)):(i.start(),_(!1))}});A.setTODActive(1);let S=null;const _=j=>["content","nav"].forEach(it=>{const G=it==="nav"?document.querySelector(".nav"):document.getElementById(it);G&&(G.inert=j)});function w(j){!n||!wd(j)||(S=document.activeElement,i.stop(),document.body.classList.add("touring"),_(!0),n.open(j,{tod:e?e.tod:1}),history.replaceState(null,"",`#tour-${j}`))}n&&(n.onClose=()=>{var j;n.close(),document.body.classList.remove("touring"),_(!1),i.start(),(j=S==null?void 0:S.focus)==null||j.call(S,{preventScroll:!0}),history.replaceState(null,"",location.pathname+location.search)});const E=Oe.map(j=>document.querySelector(`[data-marker="${j.key}"]`)),U=o.findIndex(j=>j.dataset.cam==="estate"),L=new he;function z(j){const it=1-mo(.35,.8,Math.abs(j-U));document.body.classList.toggle("markers-on",it>.5),Oe.forEach((G,k)=>{const R=E[k];if(!R)return;L.copy(e.villas.anchors[G.key]).add(new he(0,G.key==="ivory"?6:8,0)).project(e.camera);const gt=(L.x*.5+.5)*innerWidth,et=(-L.y*.5+.5)*innerHeight;R.style.transform=`translate(${gt}px, ${et}px)`,R.style.opacity=L.z<1?it:0,R.style.pointerEvents=it>.5?"auto":"none"})}const O={pos:new he,tgt:new he,init:!1},F={pos:new he,tgt:new he};let $=-1,H=null;function st(j,it){var St,I,C;const{i:G,s:k,f:R}=y(i.scroll??scrollY);if(T(G,R),H){e.camera.position.copy(H[0]),e.camera.lookAt(H[1]),z(k);return}const gt=Math.min(1,k/(r.length-1));a.getPoint(gt,F.pos),l.getPoint(gt,F.tgt),Dr||(F.pos.x+=Math.sin(it*.11)*2.2,F.pos.y+=Math.sin(it*.17)*1.1,F.pos.z+=Math.cos(it*.09)*2);const et=Math.floor(k),bt=k-et;if(bt>0&&(p[et]||p[et+1])&&((St=o[et])==null?void 0:St.id)!=="estate"){const q=Math.sin(Math.PI*bt)*(p[et]&&p[et+1]?1:.7);F.pos.y+=q*42,F.tgt.y+=q*10}if(p[G]&&m()){const q=e.villas.anchors[o[G].id],at=(Math.min(R,b.dwell)-.3)*.32*(1-Math.min(1,k-G));if(q&&at){const dt=Math.cos(at),ct=Math.sin(at);for(const It of[F.pos,F.tgt]){const Tt=It.x-q.x,Lt=It.z-q.z;It.x=q.x+Tt*dt-Lt*ct,It.z=q.z+Tt*ct+Lt*dt}}}e.groundClamp(F.pos,7),O.init||(O.pos.copy(F.pos),O.tgt.copy(F.tgt),O.init=!0);const vt=window.__snap?1:1-Math.exp(-j*(Dr?20:3.2));if(O.pos.lerp(F.pos,vt),O.tgt.lerp(F.tgt,vt),e.camera.position.copy(O.pos),e.camera.lookAt(O.tgt),!M){const q=h[Math.floor(k)],at=h[Math.min(h.length-1,Math.floor(k)+1)],dt=q+(at-q)*(k-Math.floor(k));Math.abs(dt-$)>.01&&(e.setTimeOfDay(dt),A.setTODActive(dt),t.setNight(dt>1.5?1:0),$=dt)}z(k),(I=o[G])==null||I.querySelectorAll(".reveal:not(.in)").forEach(q=>q.classList.add("in")),document.documentElement.style.setProperty("--chapter",G),document.body.classList.toggle("past-hero",G>0);const Ut=(C=o[G])==null?void 0:C.id;document.querySelectorAll(".menu a").forEach(q=>q.classList.toggle("is-active",q.getAttribute("href")===`#${Ut}`||Ut&&Oe.some(at=>at.key===Ut)&&q.getAttribute("href")==="#estate"))}const ot=new ca;let lt=0;function Mt(j){if(i.raf(j),e&&t.on&&j-lt>250)if(lt=j,n&&n.active)t.setSea(.25,1);else{const it=e.camera.position,G=Math.max(0,Li(it.x)-it.z);t.setSea((1-mo(25,420,G))*(1-.6*mo(70,260,it.y)),0)}if(e)if(n&&n.active)n.frame();else{const it=Math.min(ot.getDelta(),.1);st(it,ot.elapsedTime),e.frame()}requestAnimationFrame(Mt)}function pt(){e&&(e.resize(),n==null||n.resize(),d()),f()}window.addEventListener("resize",pt),e&&d(),f(),requestAnimationFrame(Mt),Ir(1),setTimeout(f,800);const Z=location.hash.slice(1);Z&&!Z.startsWith("tour-")&&setTimeout(()=>i.scrollTo(`#${Z}`,{immediate:!0}),50);let nt=!1;const mt=j=>{nt||(nt=!0,j&&(t.start(),A.setSound(!0)),document.body.classList.add("ready"),i.start(),Z.startsWith("tour-")&&setTimeout(()=>w(Z.slice(5)),700))};(Q=document.querySelector(".enter-sound"))==null||Q.addEventListener("click",()=>mt(!0)),(tt=document.querySelector(".enter-quiet"))==null||tt.addEventListener("click",()=>mt(!1)),new URLSearchParams(location.search).has("enter")?setTimeout(()=>mt(!1),250):(i.stop(),setTimeout(()=>{var j;document.body.classList.add("loaded"),(j=document.querySelector(".enter-sound"))==null||j.focus({preventScroll:!0})},250)),window.__selva={world:e,tour:n,lenis:i,ambience:t,heightAt:jn,get keys(){return r},setCam:(j,it)=>{H=j?[new he(...j),new he(...it)]:null},setTOD:j=>{M=!0,e.setTimeOfDay(j),e.tod=j,e.applyTOD(j)},get tops(){return c},chapterAt:y}}Ux();
