import{T as D,a$ as I,b0 as ne,a6 as G,o as i,aF as N,j as s,w as a,W as x,aI as L,aH as P,aG as z,i as p,a_ as q,a8 as E,_ as w,k as n,b9 as R,aJ as ie,Z,aD as S,E as _,I as J,e as C,x as K,Q as re,ba as F,al as O,aA as ue,V as X,N as A,v as de}from"./index.39ccb65f.js";import{Q as me}from"./QPage.a1908c59.js";import{u as Y,c as ce,Q as U,b as B,a as M,d as fe}from"./QItemLabel.7054fedb.js";import{Q as pe,a as ve,b as ge,c as _e,u as H,d as be,C as W,l as ye}from"./use-dialog-plugin-component.eebf5e89.js";import{a as T}from"./index.47bec19e.js";import{a as xe,m as we,u as he}from"./index.7485e843.js";import{_ as Ve}from"./Index.efc228e4.js";import"./_commonjsHelpers.4e997714.js";import"./QMenu.de6d9ac8.js";import"./format.959830d0.js";import"./axios.dfce1f61.js";const ke={key:0},Ce={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"},Qe=n("span",{class:"text-grey-7 text-body2"}," Nenhum usu\xE1rio encontrado ",-1),$e=D({__name:"Component",props:I({loading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:I(["editar"],["update:modelValue"]),setup(h,{emit:v}){const m=h,c=v,r=ne(h,"modelValue"),g=Y(),{mobileOrSmallWidth:b}=G(g),f=[{name:"nome",label:"Nome",align:"left",field:e=>e.nome},{name:"username",label:"Username",align:"left",field:e=>e.username},{name:"cpf",label:"CPF",align:"left",field:e=>e.cpf},{name:"dataNascimento",label:"Data de nascimento",align:"left",field:e=>e.dataNascimento},{name:"email",label:"Email",align:"left",field:e=>e.email},{name:"telefone",label:"Telefone",align:"left",field:e=>e.telefone},{name:"editar",label:"Editar",align:"left",field:""}];return(e,u)=>{var V;return r.value?(i(),N("div",ke,[s(pe,{flat:"",bordered:"","row-key":"id",grid:x(b),"hide-bottom":!!((V=r.value)!=null&&V.length),loading:m.loading,rows:r.value,columns:f,"rows-per-page-options":[0]},{header:a(o=>[s(ve,{props:o},{default:a(()=>[(i(!0),N(P,null,z(o.cols,l=>(i(),p(ge,{key:l.name,props:o},{default:a(()=>[q(E(l.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"body-cell-editar":a(o=>[s(_e,{props:o},{default:a(()=>[s(w,{unelevated:"",round:"",flat:"",color:"blue-8",icon:"las la-edit",onClick:l=>c("editar",o.row)},null,8,["onClick"])]),_:2},1032,["props"])]),item:a(o=>[n("div",Ce,[s(R,null,{default:a(()=>[s(ce,{dense:""},{default:a(()=>[(i(!0),N(P,null,z(o.cols,l=>(i(),p(M,{key:l.name},{default:a(()=>[s(U,null,{default:a(()=>[s(B,null,{default:a(()=>[q(E(l.label),1)]),_:2},1024)]),_:2},1024),s(U,{side:""},{default:a(()=>[l.name==="editar"?(i(),p(w,{key:0,unelevated:"",round:"",flat:"",color:"blue-8",icon:"las la-edit",onClick:k=>c("editar",o.row)},null,8,["onClick"])):(i(),p(B,{key:1,caption:"",class:ie(l.classes?l.classes:"")},{default:a(()=>[q(E(l.value),1)]),_:2},1032,["class"]))]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[m.loading?L("",!0):(i(),p(M,{key:0,class:"column items-center justify-center full-width"},{default:a(()=>[s(U,{class:"column items-center q-pa-md q-gutter-y-sm"},{default:a(()=>[s(Z,{avatar:"",name:"las la-users",color:"grey-8",size:"40px"}),Qe]),_:1})]),_:1}))]),_:1},8,["grid","hide-bottom","loading","rows"])])):L("",!0)}}}),qe={class:"row items-center justify-between"},Ee={class:"row items-baseline q-gutter-x-sm"},Ne={class:"text-h6 text-bold text-grey-9"},Se={class:"column"},Ue={class:"column"},Re={class:"row justify-end q-gutter-x-md"},Te=n("span",{class:"estoque-subtitle-size"},"Cancelar",-1),De=D({__name:"Component",props:{usuario:{}},emits:H.emits,setup(h){const v=h,{dialogRef:m,onDialogOK:c,onDialogHide:r}=H(),g=[{label:"Administrador",value:S.ROLE_ADMIN},{label:"Usuario",value:S.ROLE_USER}],b=Y(),{mobileOrSmallWidth:f}=G(b),e=_(""),u=_(!0),V=_(),o=_(!1),l=_([S.ROLE_USER]),k=J({cpf:"",dataNascimento:"",email:"",id:0,nome:"",password:"",telefone:"",username:""}),Q=C(()=>!!v.usuario),j=C(()=>!!l.value.length),ee=C(()=>({password:e.value})),ae=C(()=>({password:{required:xe(()=>!Q.value),minLength:we(8),lettersAndNumbers:()=>le(e.value.trim())}})),$=he(ae,ee),se=C(()=>{var t;return!!((t=V.value)!=null&&t.valid)&&j.value&&!$.value.$invalid});function le(t){return t?/(?=.*[0-9])(?=.*[A-Za-z])/.test(t):!0}async function oe(){try{o.value=!0;const t={tipos:l.value,usuario:k};e.value.trim()&&(t.usuario.password=e.value),Q.value||delete t.usuario.id,await T.usuario.salvar.post(t),Q.value?A.create({message:"Usuario atualizado com sucesso",position:"bottom",type:"positive"}):A.create({message:"Usuario criado com sucesso",position:"bottom",type:"positive"})}finally{o.value=!1,c()}}async function te(){if(!v.usuario)return;const t=await T.usuario.buscar.get(v.usuario.id);l.value=t.object.tipos,Object.assign(k,t.object.usuario)}return K(te),(t,d)=>(i(),p(re,{ref_key:"dialogRef",ref:m,maximized:x(f),onHide:x(r)},{default:a(()=>[s(R,{style:{width:"100%","max-width":"600px"}},{default:a(()=>[n("div",null,[s(F,{class:"q-px-lg"},{default:a(()=>[n("div",qe,[n("div",Ee,[n("span",Ne,E(`${Q.value?"Editar":"Novo"} usuario`),1)]),O(s(w,{icon:"la la-close",flat:"",round:"",color:"grey-8"},null,512),[[W]])])]),_:1}),s(ue),s(R,{class:"q-mt-md q-px-md q-pb-md",flat:""},{default:a(()=>[s(Ve,{ref_key:"usuarioFormRef",ref:V,modelValue:k,"onUpdate:modelValue":d[0]||(d[0]=y=>k=y)},null,8,["modelValue"]),n("div",Se,[s(be,{modelValue:l.value,"onUpdate:modelValue":d[1]||(d[1]=y=>l.value=y),outlined:"","map-options":"","emit-value":"",multiple:"",dense:"",label:"Tipos",options:g,rules:[()=>j.value||"\xC9 necessr\xE1rio selecionar o papel do usuario"]},null,8,["modelValue","rules"])]),n("div",Ue,[s(X,{modelValue:e.value,"onUpdate:modelValue":d[3]||(d[3]=y=>e.value=y),label:"Senha",type:u.value?"password":"text","lazy-rules":"",dense:"",outlined:"",rules:[()=>!x($).password.required.$invalid||"Campo obrigat\xF3rio",()=>!x($).password.minLength.$invalid||"Tamanho m\xEDnimo de 8 caracteres",()=>!x($).password.lettersAndNumbers.$invalid||"Precisa conter letras e n\xFAmeros"]},{append:a(()=>[s(Z,{name:u.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:d[2]||(d[2]=y=>u.value=!u.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])])]),_:1})]),s(F,null,{default:a(()=>[n("div",Re,[O((i(),p(w,{"no-caps":"",flat:"",class:"text-blue-6"},{default:a(()=>[Te]),_:1})),[[W]]),s(w,{"no-caps":"",unelevated:"",color:"secondary",loading:o.value,disable:!se.value,onClick:oe},{default:a(()=>[q(" Salvar ")]),_:1},8,["loading","disable"])])]),_:1})]),_:1})]),_:1},8,["maximized","onHide"]))}}),je=n("div",{class:"row justify-start q-mb-md"},[n("span",{class:"text-h6 text-bold text-grey-9"},"Usuarios")],-1),Ie={class:"row justify-between q-mb-md"},Ze=D({__name:"Usuarios",setup(h){const v=fe(),m=_([]),c=_(!1),r=J({termo:""});async function g(){try{c.value=!0;const f=await T.usuario.pesquisar.post(r);m.value=f}finally{c.value=!1}}function b(f){v.dialog({component:De,componentProps:{usuario:f}}).onOk(()=>{g()})}return K(async()=>{await g(),de(r,ye.exports.debounce(g,500))}),(f,e)=>(i(),p(me,{padding:"",class:"container"},{default:a(()=>[je,n("div",Ie,[s(X,{modelValue:r.termo,"onUpdate:modelValue":e[0]||(e[0]=u=>r.termo=u),label:"Termo",outlined:"",dense:""},null,8,["modelValue"]),s(w,{color:"secondary",unelevated:"","no-caps":"",label:"Novo",onClick:e[1]||(e[1]=u=>b(void 0))})]),s($e,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=u=>m.value=u),loading:c.value,onEditar:b},null,8,["modelValue","loading"])]),_:1}))}});export{Ze as default};