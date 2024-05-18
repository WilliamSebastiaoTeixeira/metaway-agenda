import{u as $,c as B,a as q,b as r,d as z,h as s,e as N,g as Q,r as P,o as j,f as V,w as d,i as u,Q as D,j as F}from"./index.9373ed27.js";import{Q as L,a as M}from"./QLayout.67381b77.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const I={...$,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},v=50,h=2*v,g=h*Math.PI,G=Math.round(g*1e3)/1e3;var H=B({name:"QCircularProgress",props:{...I,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:o}){const{proxy:{$q:l}}=Q(),_=q(e),k=r(()=>{const t=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}}),y=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=r(()=>h/(1-e.thickness/2)),x=r(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),i=r(()=>z(e.value,e.min,e.max)),C=r(()=>e.max-e.min),c=r(()=>e.thickness/2*a.value),S=r(()=>{const t=(e.max-i.value)/C.value,n=e.rounded===!0&&i.value<e.max&&t<.25?c.value/2*(1-t/.25):0;return g*t+n});function m({thickness:t,offset:n,color:f,cls:w,rounded:b}){return s("circle",{class:"q-circular-progress__"+w+(f!==void 0?` text-${f}`:""),style:y.value,fill:"transparent",stroke:"currentColor","stroke-width":t,"stroke-dasharray":G,"stroke-dashoffset":n,"stroke-linecap":b,cx:a.value,cy:a.value,r:v})}return()=>{const t=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&t.push(s("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:v-c.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&t.push(m({cls:"track",thickness:c.value,offset:0,color:e.trackColor})),t.push(m({cls:"circle",thickness:c.value,offset:S.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const n=[s("svg",{class:"q-circular-progress__svg",style:k.value,viewBox:x.value,"aria-hidden":"true"},t)];return e.showValue===!0&&n.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},o.default!==void 0?o.default():[s("div",i.value)])),s("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:_.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:i.value},N(o.internal,n))}}});const O={},R={class:"flex justify-center items-center"};function W(e,o){const l=P("router-view");return j(),V(M,{view:"hHh Lpr fFf"},{default:d(()=>[u(L,{class:"app-bg-color items-center justify-center"},{default:d(()=>[u(l,{class:"column justify-evenly items-center"}),u(D,{"full-height":"","full-width":"","transition-show":"fade-in","transition-hide":"fade-out"},{default:d(()=>[F("div",R,[u(H,{indeterminate:"",size:"50px",color:"white",class:"q-ma-md"})])]),_:1})]),_:1})]),_:1})}var T=A(O,[["render",W]]);export{T as default};
