import{c as oe,l as S,e as u,m as R,n as ie,h as f,T as $,p as ne,g as le,q as ae}from"./index.1d7feda9.js";import{u as se,a as ue,c as re,d as ce,e as de,f as fe,g as me,h as ve,i as ge,r as O,j as K,k as he,l as be,m as ke}from"./focusout.5b80f677.js";import{a as xe}from"./focus-manager.7cc6c8df.js";let h=0;const ye={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},L={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Se=oe({name:"QDialog",inheritAttrs:!1,props:{...se,...ue,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...re,"shake","click","escapeKey"],setup(e,{slots:j,emit:r,attrs:T}){const b=le(),i=S(null),a=S(!1),c=S(!1);let n=null,l=null,m,k;const E=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=he(),{registerTimeout:C}=ce(),{registerTick:p,removeTick:F}=de(),{transitionProps:A,transitionStyle:z}=fe(e,()=>L[e.position][0],()=>L[e.position][1]),I=u(()=>z.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:D,hidePortal:H,portalIsAccessible:Q,renderPortal:V}=me(b,i,te,"dialog"),{hide:v}=ve({showing:a,hideOnRouteChange:E,handleShow:X,handleHide:Y,processOnMount:!0}),{addToHistory:W,removeFromHistory:U}=ge(a,v,E),G=u(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ye[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),g=u(()=>a.value===!0&&e.seamless!==!0),J=u(()=>e.autoClose===!0?{onClick:Z}:{}),N=u(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${g.value===!0?"modal":"seamless"}`,T.class]);R(()=>e.maximized,t=>{a.value===!0&&q(t)}),R(g,t=>{_(t),t===!0?(be(w),ke(y)):(O(w),K(y))});function X(t){W(),l=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),p(d)):F(),C(()=>{if(b.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:s}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,B=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&s>B/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-B,s>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+s-B/2))),document.activeElement.scrollIntoView()}k=!0,i.value.click(),k=!1}D(!0),c.value=!1,r("show",t)},e.transitionDuration)}function Y(t){F(),U(),M(!0),c.value=!0,H(),l!==null&&(((t&&t.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),C(()=>{H(!0),c.value=!1,r("hide",t)},e.transitionDuration)}function d(t){xe(()=>{let o=i.value;if(o!==null){if(t!==void 0){const s=o.querySelector(t);if(s!==null){s.focus({preventScroll:!0});return}}o.contains(document.activeElement)!==!0&&(o=o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))}})}function x(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):d(),r("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i.value!==null&&(o.classList.remove("q-animate--scale"),d())},170))}function y(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&x():(r("escapeKey"),v()))}function M(t){n!==null&&(clearTimeout(n),n=null),(t===!0||a.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),O(w),K(y))),t!==!0&&(l=null)}function q(t){t===!0?m!==!0&&(h<1&&document.body.classList.add("q-body--dialog"),h++,m=!0):m===!0&&(h<2&&document.body.classList.remove("q-body--dialog"),h--,m=!1)}function Z(t){k!==!0&&(v(t),r("click",t))}function ee(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?v(t):e.noShake!==!0&&x()}function w(t){e.allowFocusOutside!==!0&&Q.value===!0&&ae(i.value,t.target)!==!0&&d('[tabindex]:not([tabindex="-1"])')}Object.assign(b.proxy,{focus:d,shake:x,__updateRefocusTarget(t){l=t||null}}),ie(M);function te(){return f("div",{role:"dialog","aria-modal":g.value===!0?"true":"false",...T,class:N.value},[f($,{name:"q-transition--fade",appear:!0},()=>g.value===!0?f("div",{class:"q-dialog__backdrop fixed-full",style:I.value,"aria-hidden":"true",tabindex:-1,onClick:ee}):null),f($,A.value,()=>a.value===!0?f("div",{ref:i,class:G.value,style:z.value,tabindex:-1,...J.value},ne(j.default)):null)])}return V}});export{Se as Q};