import{c as P,r as B,p as $,o as L,a as Q,b as K,h as T,d as z,g as R,v as j,s as C,n as D,e as U,f as O,_ as M,i as N,u as G,j as H,k as J,l as W,m as k,q as X,t as Y,w as Z,x as ee,y as g,z as w,A as v,Q as F,B as x,C as I,D as A,E as te,F as oe,G as ae,H as ne,I as se,J as re}from"./index.9d73ea13.js";var ie=P({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:b,emit:c}){const m=R(),o=B(null);let l=0;const n=[];function p(e){const d=typeof e=="boolean"?e:a.noErrorFocus!==!0,h=++l,S=(t,s)=>{c(`validation${t===!0?"Success":"Error"}`,s)},E=t=>{const s=t.validate();return typeof s.then=="function"?s.then(u=>({valid:u,comp:t}),u=>({valid:!1,comp:t,err:u})):Promise.resolve({valid:s,comp:t})};return(a.greedy===!0?Promise.all(n.map(E)).then(t=>t.filter(s=>s.valid!==!0)):n.reduce((t,s)=>t.then(()=>E(s).then(u=>{if(u.valid===!1)return Promise.reject(u)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return h===l&&S(!0),!0;if(h===l){const{comp:s,err:u}=t[0];if(u!==void 0&&console.error(u),S(!1,s),d===!0){const q=t.find(({comp:V})=>typeof V.focus=="function"&&j(V.$)===!1);q!==void 0&&q.comp.focus()}}return!1})}function r(){l++,n.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function i(e){e!==void 0&&C(e);const d=l+1;p().then(h=>{d===l&&h===!0&&(a.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function f(e){e!==void 0&&C(e),c("reset"),D(()=>{r(),a.autofocus===!0&&a.noResetFocus!==!0&&y()})}function y(){U(()=>{if(o.value===null)return;const e=o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"),d=>d.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}$(O,{bindComponent(e){n.push(e)},unbindComponent(e){const d=n.indexOf(e);d!==-1&&n.splice(d,1)}});let _=!1;return L(()=>{_=!0}),Q(()=>{_===!0&&a.autofocus===!0&&y()}),K(()=>{a.autofocus===!0&&y()}),Object.assign(m.proxy,{validate:p,resetValidation:r,submit:i,reset:f,focus:y,getValidationComponents:()=>n}),()=>T("form",{class:"q-form",ref:o,onSubmit:i,onReset:f},z(b.default))}});const ue=a=>(se("data-v-286a6ea5"),a=a(),re(),a),le={class:"bg-white q-pa-lg column",style:{"min-width":"200px","max-width":"400px",width:"100%"}},de=ue(()=>w("div",{class:"flex justify-start"},[w("span",{class:"text-h5 q-mb-md text-primary text-bold"}," Entrar ")],-1)),ce=N({__name:"Login",setup(a){const b=G(),c=H(),m=B(!1),o=J({username:"",password:""}),l=W(()=>({username:{required:k},password:{required:k,minLength:X(8)}})),n=Y(l,o);async function p(){try{const r=await ne.autorizacao.login.post(o);c.setAcessToken(r.accessToken),c.setTokenType(r.tokenType),c.setUsuario({id:r.id,username:r.username,tipos:r.tipos})}finally{b.push("/home")}}return(r,i)=>(Z(),ee(ae,{class:"app-background q-pa-md"},{default:g(()=>[w("div",le,[de,v(ie,{class:"q-gutter-y-sm"},{default:g(()=>[v(F,{modelValue:o.username,"onUpdate:modelValue":i[0]||(i[0]=f=>o.username=f),outlined:"",placeholder:"Usuario",dense:"",autocorrect:"on",autocapitalize:"on",autocomplete:"username","bg-color":"white",rules:[()=>!x(n).username.required.$invalid||"O usu\xE1rio \xE9 obrigat\xF3rio."],onKeydown:I(A(p,["prevent"]),["enter"])},null,8,["modelValue","rules","onKeydown"]),v(F,{modelValue:o.password,"onUpdate:modelValue":i[2]||(i[2]=f=>o.password=f),outlined:"",placeholder:"Senha",type:m.value?"text":"password",dense:"",autocorrect:"on",autocapitalize:"on",autocomplete:"current-password","bg-color":"white",rules:[()=>!x(n).password.required.$invalid||"A senha \xE9 obrigat\xF3ria.",()=>!x(n).password.minLength.$invalid||"A senha deve ter no m\xEDnimo 8 caracteres."],onKeydown:I(A(p,["prevent"]),["enter"])},{append:g(()=>[v(te,{name:m.value?"visibility":"visibility_off",class:"cursor-pointer",onClick:i[1]||(i[1]=f=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules","onKeydown"]),v(oe,{color:"primary",label:"Entrar",unelevated:"",class:"full-width",disable:x(n).$invalid,onClick:p},null,8,["disable"])]),_:1})])]),_:1}))}});var pe=M(ce,[["__scopeId","data-v-286a6ea5"]]);export{pe as default};