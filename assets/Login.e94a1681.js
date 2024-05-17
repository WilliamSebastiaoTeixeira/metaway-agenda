import{c as $,E as P,p as B,L,M as Q,x as T,h as K,n as R,g as U,O as j,P as k,G as z,R as O,S as D,T as M,U as N,u as G,I as W,e as X,o as Y,i as Z,w as b,k as w,j as v,V as C,W as x,X as I,Y as F,Z as H,_ as J,$ as ee,a0 as te}from"./index.120ea1d1.js";import{Q as oe}from"./QPage.1f0dfd90.js";import{r as A,m as ae,u as ne,a as se}from"./index.ff4ddaca.js";import{_ as re}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.08e0e472.js";var ie=$({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:g,emit:c}){const m=U(),o=P(null);let l=0;const n=[];function p(e){const d=typeof e=="boolean"?e:a.noErrorFocus!==!0,y=++l,S=(t,s)=>{c(`validation${t===!0?"Success":"Error"}`,s)},E=t=>{const s=t.validate();return typeof s.then=="function"?s.then(u=>({valid:u,comp:t}),u=>({valid:!1,comp:t,err:u})):Promise.resolve({valid:s,comp:t})};return(a.greedy===!0?Promise.all(n.map(E)).then(t=>t.filter(s=>s.valid!==!0)):n.reduce((t,s)=>t.then(()=>E(s).then(u=>{if(u.valid===!1)return Promise.reject(u)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return y===l&&S(!0),!0;if(y===l){const{comp:s,err:u}=t[0];if(u!==void 0&&console.error(u),S(!1,s),d===!0){const V=t.find(({comp:q})=>typeof q.focus=="function"&&j(q.$)===!1);V!==void 0&&V.comp.focus()}}return!1})}function r(){l++,n.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function i(e){e!==void 0&&k(e);const d=l+1;p().then(y=>{d===l&&y===!0&&(a.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function f(e){e!==void 0&&k(e),c("reset"),z(()=>{r(),a.autofocus===!0&&a.noResetFocus!==!0&&h()})}function h(){O(()=>{if(o.value===null)return;const e=o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"),d=>d.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}B(D,{bindComponent(e){n.push(e)},unbindComponent(e){const d=n.indexOf(e);d!==-1&&n.splice(d,1)}});let _=!1;return L(()=>{_=!0}),Q(()=>{_===!0&&a.autofocus===!0&&h()}),T(()=>{a.autofocus===!0&&h()}),Object.assign(m.proxy,{validate:p,resetValidation:r,submit:i,reset:f,focus:h,getValidationComponents:()=>n}),()=>K("form",{class:"q-form",ref:o,onSubmit:i,onReset:f},R(g.default))}});const ue=a=>(ee("data-v-5ec8d470"),a=a(),te(),a),le={class:"bg-white q-pa-lg column",style:{"min-width":"200px","max-width":"400px",width:"100%"}},de=ue(()=>w("div",{class:"flex justify-start"},[w("span",{class:"text-h5 q-mb-md text-primary text-bold"}," Entrar ")],-1)),ce=M({__name:"Login",setup(a){const g=N(),c=G(),m=P(!1),o=W({username:"",password:""}),l=X(()=>({username:{required:A},password:{required:A,minLength:ae(8)}})),n=ne(l,o);async function p(){try{const r=await se.autorizacao.login.post(o);c.setAcessToken(r.accessToken),c.setTokenType(r.tokenType),c.setUsuario({id:r.id,username:r.username,tipos:r.tipos})}finally{g.push("/home")}}return(r,i)=>(Y(),Z(oe,{class:"app-background q-pa-md"},{default:b(()=>[w("div",le,[de,v(ie,{class:"q-gutter-y-sm"},{default:b(()=>[v(C,{modelValue:o.username,"onUpdate:modelValue":i[0]||(i[0]=f=>o.username=f),outlined:"",placeholder:"Usuario",dense:"",autocorrect:"on",autocapitalize:"on",autocomplete:"username","bg-color":"white",rules:[()=>!x(n).username.required.$invalid||"O usu\xE1rio \xE9 obrigat\xF3rio."],onKeydown:I(F(p,["prevent"]),["enter"])},null,8,["modelValue","rules","onKeydown"]),v(C,{modelValue:o.password,"onUpdate:modelValue":i[2]||(i[2]=f=>o.password=f),outlined:"",placeholder:"Senha",type:m.value?"text":"password",dense:"",autocorrect:"on",autocapitalize:"on",autocomplete:"current-password","bg-color":"white",rules:[()=>!x(n).password.required.$invalid||"A senha \xE9 obrigat\xF3ria.",()=>!x(n).password.minLength.$invalid||"A senha deve ter no m\xEDnimo 8 caracteres."],onKeydown:I(F(p,["prevent"]),["enter"])},{append:b(()=>[v(H,{name:m.value?"las la-eye-slash":"las la-eye",class:"cursor-pointer",onClick:i[1]||(i[1]=f=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules","onKeydown"]),v(J,{color:"primary",label:"Entrar",unelevated:"",class:"full-width",disable:x(n).$invalid,onClick:p},null,8,["disable"])]),_:1})])]),_:1}))}});var xe=re(ce,[["__scopeId","data-v-5ec8d470"]]);export{xe as default};
