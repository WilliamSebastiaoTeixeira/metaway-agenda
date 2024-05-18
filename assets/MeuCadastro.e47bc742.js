import{T as A,a$ as z,b0 as U,E as p,e as f,o as h,aF as B,j as u,w as y,W as m,V as x,aI as I,Z as g,u as L,I as N,x as M,i as S,k as C,_ as j,N as E}from"./index.3f2ee662.js";import{Q}from"./QPage.9fe51d05.js";import{a as $}from"./index.3d8296cc.js";import{_ as R}from"./Index.60b6ec97.js";import{a as _,m as q,s as T,u as D}from"./index.ddee8fe7.js";import"./axios.2c537146.js";import"./_commonjsHelpers.4e997714.js";import"./format.959830d0.js";import"./QMenu.ddcced1b.js";const Z={key:0,class:"column"},O=A({__name:"Index",props:z({required:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(b,{expose:P}){const s=U(b,"modelValue"),c=b,d=p(!0),l=p(!0),w=p(!0),o=p(""),i=f(()=>{var r,e;return{password:(r=s.value)==null?void 0:r.password,newPassword:(e=s.value)==null?void 0:e.newPassword,confirmationPassword:o==null?void 0:o.value}}),V=f(()=>{var r;return{password:{required:_(()=>{var e,a;return!!o.value.trim()||c.required||!!((a=(e=s.value)==null?void 0:e.newPassword)!=null&&a.trim())})},newPassword:{required:_(()=>{var e,a;return!!o.value.trim()||c.required||!!((a=(e=s.value)==null?void 0:e.password)!=null&&a.trim())}),minLength:q(8),lettersAndNumbers:()=>{var e;return n((e=s.value)==null?void 0:e.newPassword)}},confirmationPassword:{required:_(()=>{var e,a,k,F;return!!((a=(e=s.value)==null?void 0:e.newPassword)!=null&&a.trim())||!!((F=(k=s.value)==null?void 0:k.password)!=null&&F.trim())}),minLength:q(8),sameAsPassword:T((r=i.value.newPassword)==null?void 0:r.trim()),lettersAndNumbers:()=>{var e,a;return n((a=(e=s.value)==null?void 0:e.newPassword)==null?void 0:a.trim())}}}}),t=D(V,i),v=f(()=>!t.value.$invalid);function n(r){return r?/(?=.*[0-9])(?=.*[A-Za-z])/.test(r):!0}return P({valid:v}),(r,e)=>s.value?(h(),B("div",Z,[u(x,{modelValue:s.value.password,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value.password=a),label:"Senha atual",type:d.value?"password":"text","lazy-rules":"",dense:"",outlined:"",rules:[()=>!m(t).password.required.$invalid||"Campo obrigat\xF3rio"]},{append:y(()=>[u(g,{name:d.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[0]||(e[0]=a=>d.value=!d.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),u(x,{modelValue:s.value.newPassword,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value.newPassword=a),label:"Nova senha",type:l.value?"password":"text","lazy-rules":"",dense:"",outlined:"",rules:[()=>!m(t).newPassword.required.$invalid||"Campo obrigat\xF3rio",()=>!m(t).newPassword.minLength.$invalid||"Tamanho m\xEDnimo de 8 caracteres",()=>!m(t).newPassword.lettersAndNumbers.$invalid||"Precisa conter letras e n\xFAmeros"]},{append:y(()=>[u(g,{name:l.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[2]||(e[2]=a=>l.value=!l.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),u(x,{modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=a=>o.value=a),label:"Confirmar nova senha",type:w.value?"password":"text",dense:"",outlined:"","lazy-rules":"",rules:[()=>!m(t).confirmationPassword.required.$invalid||"Campo obrigat\xF3rio",()=>!m(t).confirmationPassword.sameAsPassword.$invalid||"Senhas n\xE3o conferem",()=>!m(t).confirmationPassword.minLength.$invalid||"Tamanho m\xEDnimo de 8 caracteres",()=>!m(t).confirmationPassword.lettersAndNumbers.$invalid||"Precisa conter letras e n\xFAmeros"]},{append:y(()=>[u(g,{name:w.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[4]||(e[4]=a=>w.value=!w.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])])):I("",!0)}}),W=C("div",{class:"row justify-start q-mb-md"},[C("span",{class:"text-h6 text-bold text-grey-9"},"Meu Cadastro")],-1),G={class:"row justify-end"},re=A({__name:"MeuCadastro",setup(b){const P=L(),s=p(),c=p(),d=p(!1),l=f(()=>P.usuario),w=f(()=>{var v,n;return!!((v=s.value)!=null&&v.valid)&&!!((n=c.value)!=null&&n.valid)}),o=N({cpf:"",dataNascimento:"",email:"",id:0,nome:"",password:"",telefone:"",username:""}),i=N({password:"",newPassword:""});async function V(){if(!l.value)return;const{object:v}=await $.usuario.buscar.get(l.value.id);Object.assign(o,v.usuario)}async function t(){try{d.value=!0,await $.usuario.atualizar.put(o),l.value&&P.setUsuario({...l.value,username:o.username}),i.password&&i.newPassword&&await $.usuario.alterarSenha.post({newPassword:i.newPassword,password:i.password,username:o.username}),E.create({message:"Usuario atualizado com sucesso",position:"bottom",type:"positive"})}finally{d.value=!1}}return M(V),(v,n)=>(h(),S(Q,{padding:"",class:"container"},{default:y(()=>[W,u(R,{ref_key:"usuarioFormRef",ref:s,modelValue:o,"onUpdate:modelValue":n[0]||(n[0]=r=>o=r)},null,8,["modelValue"]),u(O,{ref_key:"passwordFormRef",ref:c,modelValue:i,"onUpdate:modelValue":n[1]||(n[1]=r=>i=r)},null,8,["modelValue"]),C("div",G,[u(j,{"no-caps":"",unelevated:"",color:"secondary",label:"Salvar",disable:!w.value,loading:d.value,onClick:t},null,8,["disable","loading"])])]),_:1}))}});export{re as default};
