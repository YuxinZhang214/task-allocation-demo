(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{6091:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/new",function(){return n(5745)}])},87:function(e,t,n){"use strict";n.d(t,{N:function(){return u},Q:function(){return c}});var r=n(5893),a=n(6003),s=n(7571),i=n(7294);function u(e){let{onSubmit:t}=e;return(0,r.jsx)(o,{initialName:"",handleSubmit:t,buttonText:"Create Category"})}function c(e){let{category:t,onSubmit:n}=e;return(0,r.jsx)(o,{initialName:t.name,handleSubmit:n,buttonText:"Save Category"})}function o(e){let{initialName:t,handleSubmit:n,buttonText:u}=e,[c,o]=(0,i.useState)(t);return(0,r.jsxs)("form",{className:"mt-8 space-y-8",onSubmit:e=>{e.preventDefault(),n(c)},children:[(0,r.jsx)(a.Z,{label:"Name",placeholder:"Teaching",value:c,onChange:e=>o(e.target.value)}),(0,r.jsx)(s.Z,{children:u})]})}},6003:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{label:t,placeholder:n,width:a="w-72",divClassName:s,className:i,...u}=e;return(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:t}),(0,r.jsx)("input",{type:"text",className:"mt-1 ".concat(a," border border-white/5 bg-slate-800/75 py-2.5 px-4 text-sm placeholder-slate-500 ").concat(i),placeholder:n,...u})]})}},5745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(4062),s=n(1163),i=n(87);function u(){let[e,t,n]=(0,a.Z)(),u=(0,s.useRouter)();return n?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold",children:"New Category"}),(0,r.jsx)("p",{className:"text-slate-300",children:"Some description about how categories data is used or whatever."})]}),(0,r.jsx)(i.N,{onSubmit:e=>{t({type:"ADD_CATEGORY",name:e}),u.push("/categories")}})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6091)}),_N_E=e.O()}]);