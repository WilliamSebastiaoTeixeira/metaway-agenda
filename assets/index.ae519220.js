var e=Object.defineProperty;var i=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t;var o=(n,a,t)=>(i(n,typeof a!="symbol"?a+"":a,t),t);import{api as s}from"./axios.ef707e76.js";class c{constructor(){o(this,"login",{post:async function(a){const{data:t}=await s.post("auth/login",a,{withCredentials:!0});return t}})}}class u{constructor(){o(this,"listar",{get:async function(a){const{data:t}=await s.get(`listar/${a}`);return t}});o(this,"pesquisar",{post:async function(a){const{data:t}=await s.post("contato/post",a);return t}});o(this,"remover",{delete:async function(a){const{data:t}=await s.delete(`/api/contato/remover/${a}`);return t}});o(this,"salvar",{post:async function(a){const{data:t}=await s.post("contato/salvar",a);return t}})}}class p{constructor(){o(this,"pesquisar",{get:async function(){const{data:a}=await s.get("favorito/pesquisar");return a}});o(this,"remover",{delete:async function(a){const{data:t}=await s.delete(`/api/favorito/remover/${a}`);return t}});o(this,"salvar",{post:async function(a){const{data:t}=await s.post("favorito/salvar",a);return t}})}}class l{constructor(){o(this,"download",{get:async function(a){const{data:t}=await s.get(`/api/foto/download/${a}`);return t}});o(this,"upload",{post:async function(a,t){const{data:r}=await s.post(`/api/foto/upload/${a}`,t);return r}})}}class d{constructor(){o(this,"buscar",{get:async function(a){const{data:t}=await s.get(`/api/pessoa/buscar/${a}`);return t}});o(this,"pesquisar",{post:async function(a){const{data:t}=await s.post("pessoa/pesquisar",a);return t}});o(this,"remover",{delete:async function(a){const{data:t}=await s.delete(`pessoa/remover/${a}`);return t}});o(this,"salvar",{post:async function(a){const{data:t}=await s.post("pessoa/salvar",a);return t}})}}class w{constructor(){o(this,"alterarSenha",{post:async function(a){const{data:t}=await s.post("usuario/alterarSenha",a);return t}});o(this,"atualizar",{put:async function(a){const{data:t}=await s.put("usuario/atualizar",a);return t}});o(this,"buscar",{get:async function(a){const{data:t}=await s.get(`/api/usuario/buscar/${a}`);return t}});o(this,"pesquisar",{post:async function(a){const{data:t}=await s.post("usuario/pesquisar",a);return t}});o(this,"salvar",{post:async function(a){const{data:t}=await s.post("usuario/salvar",a);return t}})}}var y={autorizacao:new c,contato:new u,favorito:new p,foto:new l,pessoa:new d,usuario:new w};export{y as a};
