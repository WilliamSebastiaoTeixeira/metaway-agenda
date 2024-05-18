import{e as b,c as fe,E as y,aq as O,F as ge,x as I,h as p,av as ve,n as _e,bv as ye,v as Y,O as j,g as he,T as V,o as c,i as S,a$ as F,b0 as be,a6 as ee,aF as C,j as o,w as a,W as L,aI as B,aH as H,aG as M,a_ as Q,a8 as $,_ as k,k as g,b9 as P,aJ as Se,Z as we,I as te,Q as pe,ba as W,al as U,aA as xe,N as ke,V as qe}from"./index.60b76dae.js";import{Q as Ce}from"./QPage.1333fc84.js";import{u as ae,c as Qe,Q as D,b as A,a as G,d as $e}from"./QItemLabel.8c222bd4.js";import{Q as Ne,a as Te,b as Ie,c as J,u as K,C as Z,l as Ve}from"./use-dialog-plugin-component.e02df5f9.js";import{a as oe}from"./index.836f4fca.js";import"./_commonjsHelpers.4e997714.js";import"./QMenu.f759c095.js";import"./format.959830d0.js";import"./axios.88bc63e4.js";const ze={ratio:[String,Number]};function je(e,n){return b(()=>{const s=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const Be=1.7778;var De=fe({name:"QImg",props:{...ze,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Be},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:s}){const m=y(e.initialRatio),u=je(e,m),f=he(),{registerTimeout:h,removeTimeout:d}=O(),{registerTimeout:r,removeTimeout:v}=O(),w=b(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),i=b(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),l=[y(null),y(w.value)],_=y(0),q=y(!1),N=y(!1),le=b(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),ie=b(()=>({width:e.width,height:e.height})),ne=b(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),se=b(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function re(){if(v(),e.loadingShowDelay===0){q.value=!0;return}r(()=>{q.value=!0},e.loadingShowDelay)}function z(){v(),q.value=!1}function ue({target:t}){j(f)===!1&&(d(),m.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,R(t,1))}function R(t,x){x===1e3||j(f)===!0||(t.complete===!0?de(t):h(()=>{R(t,x+1)},50))}function de(t){j(f)!==!0&&(_.value=_.value^1,l[_.value].value=null,z(),t.getAttribute("__qerror")!=="true"&&(N.value=!1),s("load",t.currentSrc||t.src))}function ce(t){d(),z(),N.value=!0,l[_.value].value=i.value,l[_.value^1].value=w.value,s("error",t)}function E(t){const x=l[t].value,T={key:"img_"+t,class:ne.value,style:se.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return _.value===t?Object.assign(T,{class:T.class+"current",onLoad:ue,onError:ce}):T.class+="loaded",p("div",{class:"q-img__container absolute-full",key:"img"+t},p("img",T))}function me(){return q.value===!1?p("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},_e(n[N.value===!0?"error":"default"])):p("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[p(ye,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){Y(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,x=>{d(),N.value=!1,x===null?(z(),l[_.value^1].value=w.value):re(),l[_.value].value=x},{immediate:!0})};ge.value===!0?I(t):t()}return()=>{const t=[];return u.value!==null&&t.push(p("div",{key:"filler",style:u.value})),l[0].value!==null&&t.push(E(0)),l[1].value!==null&&t.push(E(1)),t.push(p(ve,{name:"q-transition--fade"},me)),p("div",{key:"main",class:le.value,style:ie.value,role:"img","aria-label":e.alt},t)}}});const X=V({__name:"Index",props:{id:{},foto:{}},setup(e){const n=e,s=y();async function m(){if(!n.foto||!n.id)return;const u=await oe.foto.download.get(n.id,n.foto);s.value=u}return I(m),(u,f)=>(c(),S(De,{src:s.value,alt:"Imagem de perfil",ratio:"1",fit:"scale-down",width:"100%",style:{width:"100%"}},null,8,["src"]))}}),Le={key:0},Pe={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"},Re={key:0,class:"row justify-center items-center full-width"},Ee={key:0},Oe=g("span",{class:"text-grey-7 text-body2"}," Nenhum usu\xE1rio encontrado ",-1),Fe=V({__name:"Index",props:F({loading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:F(["editar"],["update:modelValue"]),setup(e,{emit:n}){const s=e,m=n,u=be(e,"modelValue"),f=ae(),{mobileOrSmallWidth:h}=ee(f),d=[{name:"foto",label:"",align:"left",field:r=>r.foto},{name:"nome",label:"Nome",align:"left",field:r=>r.nome},{name:"cpf",label:"CPF",align:"left",field:r=>r.cpf},{name:"editar",label:"Editar",align:"left",field:""}];return(r,v)=>{var w;return u.value?(c(),C("div",Le,[o(Ne,{flat:"",bordered:"","row-key":"id",grid:L(h),"hide-bottom":!!((w=u.value)!=null&&w.length),loading:s.loading,rows:u.value,columns:d,"rows-per-page-options":[0]},{header:a(i=>[o(Te,{props:i},{default:a(()=>[(c(!0),C(H,null,M(i.cols,l=>(c(),S(Ie,{key:l.name,props:i},{default:a(()=>[Q($(l.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"body-cell-foto":a(i=>[o(J,{props:i},{default:a(()=>[o(X,{id:i.row.id,foto:i.row.foto},null,8,["id","foto"])]),_:2},1032,["props"])]),"body-cell-editar":a(i=>[o(J,{props:i},{default:a(()=>[o(k,{unelevated:"",round:"",flat:"",color:"blue-8",icon:"las la-edit",onClick:l=>m("editar",i.row)},null,8,["onClick"])]),_:2},1032,["props"])]),item:a(i=>[g("div",Pe,[o(P,null,{default:a(()=>[o(Qe,{dense:""},{default:a(()=>[(c(!0),C(H,null,M(i.cols,l=>(c(),S(G,{key:l.name},{default:a(()=>[l.name==="foto"&&!!i.row.foto?(c(),C("div",Re,[o(X,{id:i.row.id,foto:i.row.foto,style:{width:"150px"}},null,8,["id","foto"])])):B("",!0),o(D,null,{default:a(()=>[o(A,null,{default:a(()=>[Q($(l.label),1)]),_:2},1024)]),_:2},1024),o(D,{side:""},{default:a(()=>[l.name==="foto"?(c(),C("div",Ee)):l.name==="editar"?(c(),S(k,{key:1,unelevated:"",round:"",flat:"",color:"blue-8",icon:"las la-edit",onClick:_=>m("editar",i.row)},null,8,["onClick"])):(c(),S(A,{key:2,caption:"",class:Se(l.classes?l.classes:"")},{default:a(()=>[Q($(l.value),1)]),_:2},1032,["class"]))]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[s.loading?B("",!0):(c(),S(G,{key:0,class:"column items-center justify-center full-width"},{default:a(()=>[o(D,{class:"column items-center q-pa-md q-gutter-y-sm"},{default:a(()=>[o(we,{avatar:"",name:"las la-users",color:"grey-8",size:"40px"}),Oe]),_:1})]),_:1}))]),_:1},8,["grid","hide-bottom","loading","rows"])])):B("",!0)}}}),He={class:"row items-center justify-between"},Me={class:"row items-baseline q-gutter-x-sm"},We={class:"text-h6 text-bold text-grey-9"},Ue={class:"row justify-end q-gutter-x-md"},Ae=g("span",{class:"estoque-subtitle-size"},"Cancelar",-1),Ge=V({__name:"Index",props:{pessoa:{}},emits:K.emits,setup(e){const n=e,{dialogRef:s,onDialogOK:m,onDialogHide:u}=K(),f=ae(),{mobileOrSmallWidth:h}=ee(f),d=y(!1),r=te({cpf:"",endereco:{bairro:"",cep:"",cidade:"",estado:"",id:0,logradouro:"",numero:0,pais:""},foto:null,id:0,nome:""}),v=b(()=>!!n.pessoa),w=b(()=>!0);async function i(){try{d.value=!0,ke.create({message:"Usuario criado com sucesso",position:"bottom",type:"positive"})}finally{d.value=!1,m()}}async function l(){!n.pessoa||Object.assign(r,n.pessoa)}return I(l),(_,q)=>(c(),S(pe,{ref_key:"dialogRef",ref:s,maximized:L(h),onHide:L(u)},{default:a(()=>[o(P,{style:{width:"100%","max-width":"600px"}},{default:a(()=>[g("div",null,[o(W,{class:"q-px-lg"},{default:a(()=>[g("div",He,[g("div",Me,[g("span",We,$(`${v.value?"Editar":"Nova"} pessoa`),1)]),U(o(k,{icon:"la la-close",flat:"",round:"",color:"grey-8"},null,512),[[Z]])])]),_:1}),o(xe),o(P,{class:"q-mt-md q-px-md q-pb-md",flat:""},{default:a(()=>[Q($(r),1)]),_:1})]),o(W,null,{default:a(()=>[g("div",Ue,[U((c(),S(k,{"no-caps":"",flat:"",class:"text-blue-6"},{default:a(()=>[Ae]),_:1})),[[Z]]),o(k,{"no-caps":"",unelevated:"",color:"secondary",loading:d.value,disable:!w.value,onClick:i},{default:a(()=>[Q(" Salvar ")]),_:1},8,["loading","disable"])])]),_:1})]),_:1})]),_:1},8,["maximized","onHide"]))}}),Je=g("div",{class:"row justify-start q-mb-md"},[g("span",{class:"text-h6 text-bold text-grey-9"},"Pessoas")],-1),Ke={class:"row justify-between q-mb-md"},nt=V({__name:"Pessoas",setup(e){const n=$e(),s=y(),m=y(!1),u=te({nome:""});function f(d){n.dialog({component:Ge,componentProps:{pessoa:d}}).onOk(()=>{h()})}async function h(){try{m.value=!0;const d=await oe.pessoa.pesquisar.post(u);s.value=d}finally{m.value=!1}}return I(async()=>{await h(),Y(u,Ve.exports.debounce(h,500))}),(d,r)=>(c(),S(Ce,{padding:"",class:"container"},{default:a(()=>[Je,g("div",Ke,[o(qe,{modelValue:u.nome,"onUpdate:modelValue":r[0]||(r[0]=v=>u.nome=v),label:"Nome",outlined:"",dense:""},null,8,["modelValue"]),o(k,{color:"secondary",unelevated:"","no-caps":"",label:"Novo",onClick:r[1]||(r[1]=v=>f(void 0))})]),o(Fe,{modelValue:s.value,"onUpdate:modelValue":r[2]||(r[2]=v=>s.value=v),loading:m.value,onEditar:f},null,8,["modelValue","loading"])]),_:1}))}});export{nt as default};
