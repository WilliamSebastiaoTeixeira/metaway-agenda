import{d as g,r as o}from"./index.3cf8a5e8.js";var n;const m=(n=localStorage.getItem("accessToken"))!=null?n:void 0;var i;const v=(i=localStorage.getItem("tokenType"))!=null?i:void 0,l=localStorage.getItem("usuario"),f=l?JSON.parse(l):void 0,T=g("authorization",()=>{const t=o(m),a=o(v),r=o(f);function s(e){e&&localStorage.setItem("accessToken",e),t.value=e}function c(e){e&&localStorage.setItem("tokenType",e),a.value=e}function u(e){e&&localStorage.setItem("usuario",JSON.stringify(e)),r.value=e}function S(){localStorage.removeItem("usuario"),localStorage.removeItem("accessToken"),localStorage.removeItem("tokenType"),u(void 0),s(void 0),c(void 0)}return{accessToken:t,tokenType:a,usuario:r,logout:S,setAcessToken:s,setTokenType:c,setUsuario:u}});export{T as u};
