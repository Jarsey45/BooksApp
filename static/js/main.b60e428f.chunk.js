/*! For license information please see main.b60e428f.chunk.js.LICENSE.txt */
(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{61:function(t,e,n){},63:function(t,e,n){},69:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(23),i=n.n(r),o=(n(61),n(26)),s=n(8),u=n(17),l=n.n(u),b=n(21),d=n(22),j=n(16),h=n(121),p=n(122),m=n(18),O=n(113),f=n(128),x=n(115),v=n(116),g=n(95),k=n(117),w=n(127),y=(n(63),n(2)),S=Object(O.a)((function(t){return Object(f.a)({title:Object(m.a)({display:"none"},t.breakpoints.up("md"),{display:"block"}),searchBar:Object(m.a)({width:"100%",marginLeft:"0",marginRight:"0",flex:1},t.breakpoints.up("md"),{marginLeft:"2em",marginRight:"1em",width:"auto"})})})),N=function(t){var e=t.handleInput,n=t.inputVal,a=S();return Object(y.jsx)(x.a,{position:"static",id:"bar",children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)(g.a,{variant:"h5",className:"title ".concat(a.title),noWrap:!0,children:"Books App"}),Object(y.jsxs)("div",{className:"search ".concat(a.searchBar),children:[Object(y.jsx)("div",{className:"icon",children:Object(y.jsx)(k.a,{children:"search"})}),Object(y.jsx)(w.a,{placeholder:"Search for book...",classes:{root:"inputRoot",input:"inputText"},inputProps:{"aria-label":"search"},value:n,onChange:function(t){e(t.target.value)}})]})]})})},T=(n(69),n(34)),I=n.n(T),L="AIzaSyA91RzlBdFO2QhlcFZa0A0RKVPy3lhUo6Y",B=function(){var t=Object(d.a)(l.a.mark((function t(e,n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(e,"+subject:").concat("fiction","&startIndex=").concat(n,"&maxResults=20&key=").concat(L));case 3:if((a=t.sent).data.items){t.next=6;break}return t.abrupt("return",{status:!1,data:[]});case 6:return c=a.data.totalItems>0?a.data.items.map((function(t){var e=t.volumeInfo;return{title:e.title,subtitle:e.subtitle,authors:e.authors,publishedDate:e.publishedDate,description:e.description,thumbnail:e.imageLinks.smallThumbnail,id:t.id}})):[],t.abrupt("return",{status:!0,data:c});case 10:return t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",{status:!1});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,a,c,r,i,o,s,u,b,d,j,h;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.get("".concat("https://www.googleapis.com/books/v1/volumes/").concat(e,"?key=").concat(L));case 3:return n=t.sent,a=n.data.volumeInfo,c=a.title,r=a.subtitle,i=a.authors,o=a.publishedDate,s=a.description,u=a.imageLinks,b=n.data.accessInfo,d=b.publicDomain,j=b.epub,h={title:c,subtitle:r,authors:i,publishedDate:o,description:s,thumbnail:u.thumbnail,id:n.data.id,acsTokenLink:"string"===typeof j.acsTokenLink&&!0===d?j.acsTokenLink:null},t.abrupt("return",{status:!0,data:h});case 10:return t.prev=10,t.t0=t.catch(0),console.error("An error occurred"," => \n",t.t0),t.abrupt("return",{status:!1,additionalInfo:"not found"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),D=n(118),R=n(119),A=n(120),E=Object(O.a)((function(t){return Object(f.a)({root:{maxWidth:345,minWidth:345,minHeight:500,paddingTop:"1em",marginTop:"2em"},media:{width:"auto",margin:"0 auto"},subtitle:{color:"#a1a1a1"}})})),F=function(t){var e=t.data,n=E();return Object(y.jsxs)(D.a,{className:n.root,children:[Object(y.jsx)(R.a,{className:n.media,height:200,component:"img",alt:"cover",image:e.thumbnail,title:e.title}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(g.a,{variant:"h5",color:"primary",component:"h2",children:Object(y.jsx)(o.b,{to:"/books/".concat(e.id),children:e.title})}),Object(y.jsx)(g.a,{className:n.subtitle,variant:"subtitle2",color:"textSecondary",gutterBottom:!0,component:"p",children:e.subtitle}),Object(y.jsx)(g.a,{color:"textSecondary",component:"span",children:Object(y.jsx)("p",{children:e.authors&&e.authors.join(", ")})}),Object(y.jsx)(g.a,{variant:"body2",component:"p",children:e.description&&e.description.length>120?e.description.slice(0,120).replace(/<\/?[^>]+(>|$)/g,"")+"(...)":e.description}),Object(y.jsx)(g.a,{color:"textSecondary",component:"span",align:"center",children:e.publishedDate})]})]})},P=function(t){var e=Object(a.useState)(t),n=Object(j.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){r(t)}),300);return function(){clearTimeout(e)}}),[t]),c},V=function(){var t=Object(a.useRef)(null),e=Object(a.useRef)(0),n=Object(a.useState)(!1),c=Object(j.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)([]),s=Object(j.a)(o,2),u=s[0],m=s[1],O=Object(a.useState)(""),f=Object(j.a)(O,2),x=f[0],v=f[1],g=P(x),k=function(){var t=Object(d.a)(l.a.mark((function t(){var n,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,B(x,e.current.toString());case 5:if(n=t.sent,a=n.status,c=n.data,a&&c){t.next=10;break}return t.abrupt("return");case 10:e.current+=10,m([].concat(Object(b.a)(u),Object(b.a)(c))),i(!1),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){document.addEventListener("scroll",(function(){0!==u.length&&null!==t.current&&t.current.getBoundingClientRect().bottom<=window.innerHeight+5&&!r&&i(!0)}))})),Object(a.useEffect)((function(){m([]),i(!0),e.current=0}),[g]),Object(a.useEffect)((function(){r&&k()}),[r]),Object(y.jsxs)(h.a,{container:!0,alignItems:"center",ref:t,children:[Object(y.jsx)(h.a,{item:!0,xs:12,children:Object(y.jsx)(N,{handleInput:v,inputVal:x})}),Object(y.jsx)(h.a,{item:!0,xs:12,children:Object(y.jsxs)("div",{className:"volumes",children:[u.map((function(t,e){return Object(y.jsx)(F,{data:t},e)})),0===u.length&&!r&&Object(y.jsx)("h1",{children:"Could not find any matching books"})]})}),Object(y.jsx)(h.a,{item:!0,xs:12,children:Object(y.jsx)("div",{className:"volumes",children:r&&Object(y.jsx)(p.a,{className:"loading",color:"secondary"})})})]})},W=n(123),z=n(125),H=n(126),J=n(124),$=(n(92),function(){var t=Object(s.f)().id,e=Object(a.useState)(!1),n=Object(j.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),u=o[0],b=o[1],m=function(){var e=Object(d.a)(l.a.mark((function e(){var n,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:if(n=e.sent,a=n.status,c=n.data,(i=n.additionalInfo)&&"not found"===i&&r(!0),a){e.next=10;break}return b(!1),e.abrupt("return");case 10:b(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){!1===u&&m()})),c?(setTimeout((function(){window.location.href="/"}),2e3),Object(y.jsxs)(h.a,{className:"volCard",children:[Object(y.jsx)(W.a,{color:"primary","aria-label":"back",className:"backArrow",href:"/",children:Object(y.jsx)(k.a,{children:"arrow_back"})}),Object(y.jsxs)(H.a,{variant:"outlined",severity:"error",children:[Object(y.jsx)(J.a,{children:"Error"}),"Could not find this volume \u2014 ",Object(y.jsx)("strong",{children:"we will redirect shortly!"})]})]})):Object(y.jsxs)(h.a,{className:"volCard",children:[Object(y.jsx)(W.a,{color:"primary","aria-label":"back",className:"backArrow",href:"/",children:Object(y.jsx)(k.a,{children:"arrow_back"})}),u?Object(y.jsxs)(D.a,{children:[Object(y.jsx)(R.a,{height:300,component:"img",alt:"cover",image:u.thumbnail,title:u.title}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(g.a,{variant:"h5",color:"primary",component:"h2",children:u.title}),Object(y.jsx)(g.a,{variant:"subtitle2",color:"textSecondary",gutterBottom:!0,component:"p",children:u.subtitle}),Object(y.jsx)(g.a,{color:"textSecondary",component:"span",children:Object(y.jsx)("p",{children:u.authors&&u.authors.join(", ")})}),Object(y.jsx)(g.a,{variant:"body2",component:"p",children:u.description?u.description.replace(/<\/?[^>]+(>|$)/g,""):null}),Object(y.jsx)(g.a,{color:"textSecondary",component:"span",align:"center",children:u.publishedDate}),u.acsTokenLink?Object(y.jsx)(z.a,{className:"link",variant:"outlined",color:"primary",href:u.acsTokenLink,children:"Download"}):null]})]}):Object(y.jsx)(p.a,{className:"loading",color:"secondary"})]})}),_=(n(93),function(){return Object(y.jsx)("div",{className:"App",onScroll:function(){return console.log("tu")},children:Object(y.jsx)(o.a,{children:Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{exact:!0,path:"/",children:Object(y.jsx)(V,{})}),Object(y.jsx)(s.a,{exact:!0,path:"/books/:id",children:Object(y.jsx)($,{})})]})})})}),q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root")),q()}},[[94,1,2]]]);
//# sourceMappingURL=main.b60e428f.chunk.js.map