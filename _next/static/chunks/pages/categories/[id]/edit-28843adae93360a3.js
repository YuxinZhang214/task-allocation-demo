(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{3403:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[id]/edit",function(){return n(5795)}])},87:function(e,t,n){"use strict";n.d(t,{N:function(){return c},Q:function(){return u}});var r=n(5893),a=n(6003),i=n(7571),s=n(7294);function c(e){let{onSubmit:t}=e;return(0,r.jsx)(o,{initialName:"",handleSubmit:t,buttonText:"Create Category"})}function u(e){let{category:t,onSubmit:n}=e;return(0,r.jsx)(o,{initialName:t.name,handleSubmit:n,buttonText:"Save Category"})}function o(e){let{initialName:t,handleSubmit:n,buttonText:c}=e,[u,o]=(0,s.useState)(t);return(0,r.jsxs)("form",{className:"mt-8 space-y-8",onSubmit:e=>{e.preventDefault(),n(u)},children:[(0,r.jsx)(a.Z,{label:"Name",placeholder:"Teaching",value:u,onChange:e=>o(e.target.value)}),(0,r.jsx)(i.Z,{children:c})]})}},6003:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{label:t,placeholder:n,width:a="w-72",divClassName:i,className:s,...c}=e;return(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:t}),(0,r.jsx)("input",{type:"text",className:"mt-1 ".concat(a," border border-white/5 bg-slate-800/75 py-2.5 px-4 text-sm placeholder-slate-500 ").concat(s),placeholder:n,...c})]})}},5795:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),a=n(1163),i=n(4062),s=n(87);function c(){let e=(0,a.useRouter)(),{id:t}=e.query,[n,c,u]=(0,i.Z)(),o=n.categories.find(e=>e.id===parseInt(t));return u||!o?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold",children:"Edit Category"}),(0,r.jsx)("p",{className:"text-slate-300",children:"Some description about how categories data is used or whatever."})]}),(0,r.jsx)(s.Q,{category:o,onSubmit:n=>{c({type:"EDIT_CATEGORY",categoryId:parseInt(o.id),name:n}),e.push("/categories/".concat(t))}})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3403)}),_N_E=e.O()}]);