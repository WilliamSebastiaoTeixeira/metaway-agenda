import{C as c,l as i,z as y,m as p,e as l}from"./index.b3af6eda.js";let s,u=0;const t=new Array(256);for(let n=0;n<256;n++)t[n]=(n+256).toString(16).substring(1);const m=(()=>{const n=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return r=>{const o=new Uint8Array(r);return n.getRandomValues(o),o}}return r=>{const o=[];for(let e=r;e>0;e--)o.push(Math.floor(Math.random()*256));return o}})(),a=4096;function d(){(s===void 0||u+16>a)&&(u=0,s=m(a));const n=Array.prototype.slice.call(s,u,u+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,t[n[0]]+t[n[1]]+t[n[2]]+t[n[3]]+"-"+t[n[4]]+t[n[5]]+"-"+t[n[6]]+t[n[7]]+"-"+t[n[8]]+t[n[9]]+"-"+t[n[10]]+t[n[11]]+t[n[12]]+t[n[13]]+t[n[14]]+t[n[15]]}function v(n){return n==null?null:n}function f(n,r){return n==null?r===!0?`f_${d()}`:null:n}function x({getValue:n,required:r=!0}={}){if(c.value===!0){const o=n!==void 0?i(v(n())):i(null);return r===!0&&o.value===null&&y(()=>{o.value=`f_${d()}`}),n!==void 0&&p(n,e=>{o.value=f(e,r)}),o}return n!==void 0?l(()=>f(n(),r)):i(`f_${d()}`)}const b={dark:{type:Boolean,default:null}};function k(n,r){return l(()=>n.dark===null?r.dark.isActive:n.dark)}export{x as a,b,d as c,k as u};
