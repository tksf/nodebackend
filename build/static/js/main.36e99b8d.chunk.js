(this.webpackJsonpsinglepageapp=this.webpackJsonpsinglepageapp||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=n(3),s=n.n(m),f=function(){var t=s.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},p=function(t){return s.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},v=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},E=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),s=m[0],E=m[1],b=Object(a.useState)(!0),g=Object(i.a)(b,2),h=g[0],O=g[1],j=Object(a.useState)("some error happened..."),S=Object(i.a)(j,2),k=S[0],y=S[1];Object(a.useEffect)((function(){f().then((function(t){o(t)}))}),[]);var w=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},N=h?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(v,{message:k}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return O(!h)}},"show ",h?"important":"all")),r.a.createElement("ul",null,N.map((function(t,e){return r.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)({},e,{important:!e.important});d(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then((function(t){o(n.concat(t)),E("")}))}},r.a.createElement("input",{value:s,onChange:function(t){console.log(t.target.value),E(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(w,null))};n(37);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.36e99b8d.chunk.js.map