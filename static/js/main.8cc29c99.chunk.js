(this["webpackJsonpreact-redux-thunk-app"]=this["webpackJsonpreact-redux-thunk-app"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(20),i=n.n(s),o=(n(49),n(50),n(3)),j=n(13),l=n(12),d=n(16),u=n.n(d),b=n(39),p=n.n(b),O=n(5),h=n(18),m=n.n(h),x=n(27),f="POKEMON_LIST_LOADING",g="POKEMON_LIST_FAIL",v="POKEMON_LIST_SUCCESS",y="POKEMON_MULTIPLE_LOADING",k="POKEMON_MULTIPLE_FAIL",N="POKEMON_MULTIPLE_SUCCESS",S="ADD_TODO",M="UPDATE_TODO",E="DELETE_TODO",_=n(28),w=n.n(_),T=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(O.c)(),o=Object(O.d)((function(e){return e.pokemonList})),d=Object(c.useState)(1),b=Object(l.a)(d,2),h=b[0],y=b[1];Object(c.useEffect)((function(){var e;i((e=h,function(){var t=Object(x.a)(m.a.mark((function t(n){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:f}),a=15*e-15,t.next=6,w.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(a));case 6:c=t.sent,n({type:v,payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:g});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[i,h]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"ui category search search-wrapper",children:[Object(a.jsx)("form",{onSubmit:function(){return e.history.push("/pokemon/".concat(r))},children:Object(a.jsxs)("div",{className:"ui icon input",children:[Object(a.jsx)("input",{className:"prompt",type:"text",placeholder:"Search pokemon...",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("i",{className:"search icon"})]})}),Object(a.jsx)("div",{className:"results"})]}),o.loading?Object(a.jsx)("p",{children:"Loading..."}):u.a.isEmpty(o.data)?""!==o.errorMsg?Object(a.jsx)("p",{children:o.errorMsg}):Object(a.jsx)("p",{children:"unable to get data"}):Object(a.jsx)("div",{className:"list-wrapper",children:o.data.map((function(e){return Object(a.jsxs)("div",{className:"pokemon-item",children:[Object(a.jsx)("p",{children:e.name}),Object(a.jsx)(j.b,{to:"/pokemon/".concat(e.name),children:"View"})]},e.name)}))}),!u.a.isEmpty(o.data)&&Object(a.jsx)(p.a,{pageCount:Math.ceil(o.count/15),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return function(){y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)}(e.selected+1)},containerClassName:"pagination"})]})},L=Object(O.b)((function(e){return{pokemonState:e.pokemon}}),{})((function(e){var t=e.match.params.pokemon,n=Object(O.c)();Object(c.useEffect)((function(){var e;n((e=t,function(){var t=Object(x.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:y}),t.next=4,w.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=t.sent,n({type:N,payload:a.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:k});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[n,t]);return Object(a.jsxs)("div",{className:"poke",children:[Object(a.jsx)("h1",{children:t}),function(){if(!u.a.isEmpty(e.pokemonState.data[t])){var n=e.pokemonState.data[t];return Object(a.jsxs)("div",{className:"pokemon-wrapper",children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Sprites"}),Object(a.jsx)("img",{src:n.sprites.front_default,alt:""}),Object(a.jsx)("img",{src:n.sprites.back_default,alt:""}),Object(a.jsx)("img",{src:n.sprites.front_shiny,alt:""}),Object(a.jsx)("img",{src:n.sprites.back_shiny,alt:""})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Stats"}),n.stats.map((function(e){return Object(a.jsxs)("p",{children:[e.stat.name," ",e.base_stat]},e.stat.name)}))]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h1",{children:"Abilities"}),n.abilities.map((function(e){return Object(a.jsx)("p",{children:e.ability.name},e.ability.name)}))]})]})}return e.pokemonState.loading?Object(a.jsx)("p",{children:"Loading..."}):""!==e.pokemonState.errorMsg?Object(a.jsx)("p",{children:e.pokemonState.errorMsg}):Object(a.jsx)("p",{children:"error getting pokemon"})}()]})})),D=n(78),A=function(){var e=Object(O.c)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=function(t){var n;t.preventDefault(),e((n={id:Object(D.a)(),name:r},{type:S,payload:n})),s("")};return Object(a.jsx)("div",{style:{margin:"3rem"},children:Object(a.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(a.jsxs)("div",{className:"ui fluid action input",children:[Object(a.jsx)("input",{type:"text",value:r,placeholder:"Type any task...",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"ui button",children:"Add"})]})})})},P=function(e){var t=e.todo,n=Object(c.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(t.name),j=Object(l.a)(o,2),d=j[0],u=j[1],b=Object(O.c)(),p=function(e){e.preventDefault(),b(function(e){return{type:M,payload:e}}({id:t.id,name:d})),i(!1)};return t?Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{"data-label":"No",children:["#",t.id]}),Object(a.jsx)("td",{"data-label":"Title",children:s?Object(a.jsxs)("form",{class:"ui fluid action input focus",style:{width:"100%"},onSubmit:function(e){return p(e)},children:[Object(a.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"ui button",children:"Update"})]}):t.name}),Object(a.jsx)("td",{"data-label":"Edit",style:{color:"blue",textAlign:"center"},onClick:function(){return i(!s)},children:Object(a.jsx)("i",{className:"edit icon"})}),Object(a.jsx)("td",{"data-label":"Delete",style:{color:"red",textAlign:"center"},onClick:function(){return b((e=t.id,{type:E,payload:e}));var e},children:Object(a.jsx)("i",{className:"trash icon"})})]}):null},C=function(){var e=Object(O.d)((function(e){return e.todos}));return Object(a.jsx)("div",{children:Object(a.jsx)("section",{style:{margin:"3rem"},children:Object(a.jsxs)("table",{className:"ui celled table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{style:{textAlign:"center"},children:[Object(a.jsx)("th",{style:{width:"25%"},children:"No"}),Object(a.jsx)("th",{children:"Title"}),Object(a.jsx)("th",{style:{width:"10%"},children:"Update"}),Object(a.jsx)("th",{style:{width:"10%"},children:"Delete"})]})}),Object(a.jsx)("tbody",{children:e&&e.map((function(e){return Object(a.jsx)(P,{todo:e},e.id)}))})]})})})};var I=function(){var e=Object(o.f)();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("nav",{className:"app__navbar",children:[Object(a.jsx)(j.c,{to:"/home",children:"Search"}),Object(a.jsx)(j.c,{to:"/",children:"To-Do"})]}),Object(a.jsxs)(o.c,{children:[Object(a.jsxs)(o.a,{exact:!0,path:"/",children:[Object(a.jsx)(A,{}),Object(a.jsx)(C,{})]}),Object(a.jsx)(o.a,{exact:!0,path:"/home",component:T}),Object(a.jsx)(o.a,{exact:!0,path:"/pokemon/:pokemon",component:L}),Object(a.jsxs)(o.a,{path:"*",children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Page Not Found"}),setTimeout((function(){e.push("/")}),3e3)]})]})]})},U=n(11),K=n(41),F=n(42),G=n(4),J={loading:!1,data:[],errorMsg:"",count:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(G.a)(Object(G.a)({},e),{},{loading:!0,errorMsg:""});case g:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case v:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,data:t.payload.results,errorMsg:"",count:t.payload.count});default:return e}},B=n(23),V={loading:!1,data:{},errorMsg:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(G.a)(Object(G.a)({},e),{},{loading:!0,errorMsg:""});case k:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case N:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,errorMsg:"",data:Object(G.a)(Object(G.a)({},e.data),{},Object(B.a)({},t.pokemonName,t.payload))});default:return e}},q=n(43),z=[{id:1,name:"One"},{id:2,name:"Two"},{id:3,name:"Three"}],H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return[].concat(Object(q.a)(e),[t.payload]);case M:return e.map((function(e){return e.id===t.payload.id?Object(G.a)(Object(G.a)({},e),{},{name:t.payload.name}):e}));case E:return e.filter((function(e){return e.id!==t.payload}));default:return e}},Q=Object(U.combineReducers)({pokemonList:R,pokemon:W,todos:H}),X=Object(U.createStore)(Q,Object(K.composeWithDevTools)(Object(U.applyMiddleware)(F.a)));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(O.a,{store:X,children:Object(a.jsx)(I,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8cc29c99.chunk.js.map