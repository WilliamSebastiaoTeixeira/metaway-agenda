import{a as $,c as B,d as q,e as r,h as o,f as z,g as N,r as Q,o as P,i as j,w as d,j as u,Q as V,k as D}from"./index.3f2ee662.js";import{b as F}from"./format.959830d0.js";import{Q as L,a as M}from"./QLayout.38e87b4f.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const I={...$,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},m=50,h=2*m,g=h*Math.PI,G=Math.round(g*1e3)/1e3;var H=B({name:"QCircularProgress",props:{...I,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:s}){const{proxy:{$q:l}}=N(),k=q(e),_=r(()=>{const t=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}}),y=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=r(()=>h/(1-e.thickness/2)),x=r(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),i=r(()=>F(e.value,e.min,e.max)),C=r(()=>e.max-e.min),c=r(()=>e.thickness/2*a.value),S=r(()=>{const t=(e.max-i.value)/C.value,n=e.rounded===!0&&i.value<e.max&&t<.25?c.value/2*(1-t/.25):0;return g*t+n});function v({thickness:t,offset:n,color:f,cls:w,rounded:b}){return o("circle",{class:"q-circular-progress__"+w+(f!==void 0?` text-${f}`:""),style:y.value,fill:"transparent",stroke:"currentColor","stroke-width":t,"stroke-dasharray":G,"stroke-dashoffset":n,"stroke-linecap":b,cx:a.value,cy:a.value,r:m})}return()=>{const t=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&t.push(o("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:m-c.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&t.push(v({cls:"track",thickness:c.value,offset:0,color:e.trackColor})),t.push(v({cls:"circle",thickness:c.value,offset:S.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const n=[o("svg",{class:"q-circular-progress__svg",style:_.value,viewBox:x.value,"aria-hidden":"true"},t)];return e.showValue===!0&&n.push(o("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},s.default!==void 0?s.default():[o("div",i.value)])),o("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:k.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:i.value},z(s.internal,n))}}});const O={},R={class:"flex justify-center items-center"};function W(e,s){const l=Q("router-view");return P(),j(L,{view:"hHh Lpr fFf"},{default:d(()=>[u(M,{class:"app-bg-color items-center justify-center"},{default:d(()=>[u(l,{class:"column justify-evenly items-center"}),u(V,{"full-height":"","full-width":"","transition-show":"fade-in","transition-hide":"fade-out"},{default:d(()=>[D("div",R,[u(H,{indeterminate:"",size:"50px",color:"white",class:"q-ma-md"})])]),_:1})]),_:1})]),_:1})}var U=A(O,[["render",W]]);export{U as default};
