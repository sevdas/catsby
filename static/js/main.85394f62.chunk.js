(this.webpackJsonpcatsby=this.webpackJsonpcatsby||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),a=c.n(s),i=(c(11),c(3)),j=c.n(i),l=c(5),o=c(6),d=c(0),h=r.a.createContext();function u(e){var t=e.children,c=Object(n.useState)([]),r=Object(o.a)(c,2),s=r[0],a=r[1],i="https://api.thecatapi.com/v1/breeds",u={method:"GET",headers:{"Content-Type":"application/json","x-api-key":"b6dec535-5d70-4839-8067-94330d31d424"}};return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i,u);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log("catB",s),Object(d.jsx)(h.Provider,{value:{catBreeds:s},children:t})}var b=c.p+"static/media/Catsby.9cc0c68e.png",m={width:"10rem",height:"auto"},p=function(){return Object(d.jsxs)("div",{style:{margin:"1rem 0 2rem 1rem"},children:[Object(d.jsx)("img",{src:b,alt:"catsby logo url",style:m}),Object(d.jsx)("h1",{children:"My genuineness as a home cat."})]})},x=function(){var e=Object(n.useContext)(h).catBreeds;console.log(e);var t={width:"20rem",height:"auto",margin:"5%"},c=e.filter((function(e){return void 0!==e.image})).map((function(e){return Object(d.jsxs)("div",{className:"cat-list",children:[Object(d.jsx)("img",{src:e.image.url,alt:e.name,style:t}),Object(d.jsxs)("div",{className:"cat",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsx)("p",{children:e.description}),Object(d.jsxs)("p",{children:[Object(d.jsx)("small",{children:"Breed Temperament:"})," ",e.temperament]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("small",{children:"Affection Level:"}),e.affection_level]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("small",{children:"Short Legs:"}),e.short_legs]})]})]},e.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),c]})};var O=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{})})};a.a.render(Object(d.jsx)(u,{children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85394f62.chunk.js.map