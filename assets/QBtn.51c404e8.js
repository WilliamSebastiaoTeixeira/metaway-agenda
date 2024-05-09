import{c as Q,a as c,h as v,g as V,a1 as de,z as D,a2 as fe,a3 as ve,R as ae,a4 as me,r as F,o as ge,T as be,J as he,x as P,P as ye,v as ke}from"./index.58b4b101.js";import{u as re,a as ue,f as H,e as pe,b as xe}from"./dom.24e0a60c.js";import{a as qe,b as z}from"./plugin-vue_export-helper.0409ecbb.js";const U="0 0 24 24",W=e=>e,N=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":N,"ion-ios":N,"ion-logo":N,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(ie).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,we=/^svguse:/,Le=/^ion-/,Be=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=Q({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=V(),n=ue(e),i=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=c(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(u.iconMapFn!==null){const s=u.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Re.test(r)===!0){const[s,y=U]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[k,b,p]=l.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Se.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=U]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(Ee);if(h!==null)o=le[h[1]](r);else if(Be.test(r)===!0)o=r;else if(Le.test(r)===!0)o=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){o="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),o+=se[s[1]]),q=r}else{o="notranslate material-icons";const s=r.match($e);s!==null&&(r=r.substring(2),o+=ie[s[1]]),q=r}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,o,qe(t.default)):f.value.img===!0?v(e.tag,o,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),v(e.tag,o,z(t.default,[f.value.content])))}}});const Ce={size:{type:[String,Number],default:"1em"},color:String};function _e(e){return{cSize:c(()=>e.size in H?`${H[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=Q({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:u}=_e(e);return()=>v("svg",{class:u.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,t=250){let u=!1,n;return function(){return u===!1&&(u=!0,setTimeout(()=>{u=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,u,n){u.modifiers.stop===!0&&ae(e);const i=u.modifiers.color;let f=u.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),r=document.createElement("span"),q=me(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,_=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",pe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(r),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(C)};u.abort.push(B);let C=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,C=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,C=setTimeout(()=>{o.remove(),u.abort.splice(u.abort.indexOf(B),1)},275)},250)},50)}function G(e,{modifiers:t,value:u,arg:n}){const i=Object.assign({},e.cfg.ripple,t,u);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Oe=de({name:"ripple",beforeMount(e,t){const u=t.instance.$.appContext.config.globalProperties.$q.config||{};if(u.ripple===!1)return;const n={cfg:u,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(i,e,n,i.qKeyEvent===!0)},keystart:Te(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(i,e,n,!0)},300)};G(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const u=e.__qripple;u!==void 0&&(u.enabled=t.value!==!1,u.enabled===!0&&Object(t.value)===t.value&&G(u,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(u=>{u()}),ve(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),Me={align:{type:String,validator:e=>Ae.includes(e)}};function je(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){for(const u in t){const n=t[u],i=e[u];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((u,n)=>u===t[n]):e.length===1&&e[0]===t}function Ke(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const u in e)if(Ke(e[u],t[u])===!1)return!1;return!0}const ce={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ze={...ce,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const u=V(),{props:n,proxy:i,emit:f}=u,o=xe(u),r=c(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?c(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=c(()=>q.value===!0?_(n.to):null),s=c(()=>h.value!==null),y=c(()=>r.value===!0||s.value===!0),l=c(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=c(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=c(()=>{if(s.value===!1)return-1;const{matched:m}=h.value,{length:E}=m,R=m[E-1];if(R===void 0)return-1;const w=i.$route.matched;if(w.length===0)return-1;const L=w.findIndex(ee.bind(null,R));if(L!==-1)return L;const K=Z(m[E-2]);return E>1&&Z(R)===K&&w[w.length-1].path!==K?w.findIndex(ee.bind(null,m[E-2])):L}),p=c(()=>s.value===!0&&b.value!==-1&&ze(i.$route.params,h.value.params)),d=c(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Ie(i.$route.params,h.value.params)),x=c(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(m){try{return i.$router.resolve(m)}catch{}return null}function B(m,{returnRouterError:E,to:R=n.to,replace:w=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const L=i.$router[w===!0?"replace":"push"](R);return E===!0?L:L.then(()=>{}).catch(()=>{})}function C(m){if(s.value===!0){const E=R=>B(m,R);f("click",m,E),m.defaultPrevented!==!0&&E()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"];function He(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Ue={...re,...ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},We={...Ue,round:Boolean};function Xe(e){const t=ue(e,De),u=je(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:r}=Ne({fallbackTag:"button"}),q=c(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),h=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>s.value===!0?e.tabindex||0:-1),l=c(()=>He(e,"standard")),k=c(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,o.value):Qe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),b=c(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>u.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:$}=ke;let T=null,O=null,A=null;var et=Q({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:u}){const{proxy:n}=V(),{classes:i,style:f,innerClasses:o,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Xe(e),l=F(null),k=F(null);let b=null,p,d=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=c(()=>({center:e.round})),C=c(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),m=c(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:R,onKeydown:w,onMousedown:K};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${g}`]=L}return a}return{onClick:P}}),E=c(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...m.value}));function R(a){if(l.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&l.value.contains(g)===!1&&g.contains(l.value)===!1){l.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,$),l.value!==null&&l.value.removeEventListener("blur",I,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,$),l.value.addEventListener("blur",I,$)}}s(a)}}function w(a){l.value!==null&&(u("keydown",a),D(a,[13,32])===!0&&O!==l.value&&(O!==null&&M(),a.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),l.value.addEventListener("blur",S,$)),P(a)))}function L(a){l.value!==null&&(u("touchstart",a),a.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,b=a.target,b.addEventListener("touchcancel",S,$),b.addEventListener("touchend",S,$)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(a){l.value!==null&&(a.qSkipRipple=p===!0,u("mousedown",a),a.defaultPrevented!==!0&&A!==l.value&&(A!==null&&M(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,$)))}function S(a){if(l.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===l.value)){if(a!==void 0&&a.type==="keyup"){if(O===l.value&&D(a,[13,32])===!0){const g=new MouseEvent("click",a);g.qKeyEvent=!0,a.defaultPrevented===!0&&ye(g),a.cancelBubble===!0&&ae(g),l.value.dispatchEvent(g),P(a),a.qKeyEvent=!0}u("keyup",a)}M()}}function M(a){const g=k.value;a!==!0&&(T===l.value||A===l.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",S,$),b.removeEventListener("touchend",S,$)),T=b=null),A===l.value&&(document.removeEventListener("mouseup",S,$),A=null),O===l.value&&(document.removeEventListener("keyup",S,!0),l.value!==null&&l.value.removeEventListener("blur",S,$),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return ge(()=>{M(!0)}),Object.assign(n,{click:a=>{y.value===!0&&R(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(J,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(J,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},a)),e.loading!==null&&g.push(v(be,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Pe)])]:null)),he(v(h.value,E.value,g),[[Oe,_.value,void 0,B.value]])}}});export{J as Q,Pe as a,et as b,Ne as c,Ze as u};
