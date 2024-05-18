import{l as E,aL as D,aC as K,e as i,E as m,v as N,c as d,h as o,n as f,ai as k,ax as $,aj as h,aM as j,g as y,aN as O,P as R,a5 as P}from"./index.3f2ee662.js";function W(){return E(D)}const g=localStorage.getItem("generalStore"),F=K("generalStore",()=>{const e=W(),n={fullWidth:!1,flexibleDrawer:!1},l=i(()=>e.screen.width<585||e.platform.is.mobile),a=m(g?JSON.parse(g):n);function u(){a.value=n,localStorage.removeItem("generalStore")}function s(){!a.value||localStorage.setItem("generalStore",JSON.stringify(a.value))}return N(a,s,{deep:!0}),{general:a,mobileOrSmallWidth:l,clear:u,set:s}});var J=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:l.value},f(n.default))}}),M=d({name:"QItem",props:{...k,...$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:a}}=y(),u=h(e,a),{hasLink:s,linkAttrs:S,linkClass:_,linkTag:B,navigateOnClick:x}=j(),c=m(null),v=m(null),b=i(()=>e.clickable===!0||s.value===!0||e.tag==="label"),r=i(()=>e.disable!==!0&&b.value===!0),L=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?_.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=i(()=>{if(e.insetLevel===void 0)return null;const t=a.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function C(t){r.value===!0&&(v.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===c.value?v.value.focus():document.activeElement===v.value&&c.value.focus()),x(t))}function I(t){if(r.value===!0&&O(t,[13,32])===!0){R(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,c.value.dispatchEvent(q)}l("keyup",t)}function Q(){const t=P(n.default,[]);return r.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:v})),t}return()=>{const t={ref:c,class:L.value,style:w.value,role:"listitem",onClick:C,onKeyup:I};return r.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,S.value)):b.value===!0&&(t["aria-disabled"]="true"),o(B.value,t,Q())}}}),T=d({name:"QList",props:{...k,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=y(),a=h(e,l.proxy.$q),u=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:u.value},f(n.default))}}),G=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=i(()=>parseInt(e.lines,10)),a=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),u=i(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>o("div",{style:u.value,class:a.value},f(n.default))}});export{J as Q,M as a,G as b,T as c,W as d,F as u};
