(this["webpackJsonpsearch-pokemon"]=this["webpackJsonpsearch-pokemon"]||[]).push([[0],{118:function(e,n,t){},132:function(e,n,t){"use strict";t.r(n);var a=t(46),c=t(0),r=t.n(c),s=t(43),i=t.n(s),o=t(38),l=t(42),j=t(150),h=t(105),m=t(151),u=t(152),d=(t(118),t(13)),b=t(93),O=t(147),p=t(135),x=t(156),v=t(155),g=t(154),f=t(148),_=t(158),k=t(149),C=t(100),S=t.n(C),y=t(101),T=t.n(y),R=t(102),N=t.n(R),w=t(21),I=t.n(w);var A,P=Object(c.createContext)({themeType:"light",toggleThemeType:function(){}}),E=t(5),F=Object(o.gql)(A||(A=Object(b.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      weaknesses\n      fleeRate\n      maxCP\n      maxHP\n      image\n      evolutionRequirements {\n        amount\n        name\n      }\n      evolutions {\n        name\n        image\n      }\n    }\n  }\n"]))),q=function(e){var n=e.children,t=e.className;return Object(E.jsx)(O.a,{variant:"body2",component:"p",className:t||"",children:n})};function B(){var e=new URLSearchParams(Object(d.g)().search),n=Object(d.f)(),t=Object(d.g)(),r=e.get("name"),s=Object(c.useState)(""),i=Object(a.a)(s,2),j=i[0],h=i[1],m=Object(c.useState)(""),u=Object(a.a)(m,2),b=u[0],C=u[1],y=Object(c.useContext)(P),R=y.themeType,w=y.toggleThemeType,A=Object(o.useLazyQuery)(F,{variables:{name:b}}),B=Object(a.a)(A,2),M=B[0],D=B[1],W=D.called,L=D.data,Q=D.error,H=D.loading;function K(e){h(e.target.value)}function U(e){e.preventDefault(),j!==b&&n.push("/?name=".concat(j)),C(j)}return Object(c.useEffect)((function(){r&&(h(r),C(r),M())}),[t,M,r]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k.a,{children:Object(E.jsxs)("div",{className:I.a.appBarContainer,children:[Object(E.jsx)("div",{className:I.a.search,children:Object(E.jsxs)(p.a,{component:"form",className:I.a.searchTextRoot,onSubmit:U,children:[Object(E.jsx)(x.a,{className:I.a.searchTextInput,placeholder:"Search Pokemon",inputProps:{"data-testid":"name-input"},value:j,onChange:K}),Object(E.jsx)(v.a,{type:"submit","aria-label":"search",className:I.a.searchTextIconButton,"data-testid":"search-button",children:Object(E.jsx)(S.a,{})})]})}),Object(E.jsx)("div",{className:I.a.themeToggle,children:Object(E.jsx)(v.a,{onClick:w,children:"light"===R?Object(E.jsx)(T.a,{}):Object(E.jsx)(N.a,{})})})]})}),Object(E.jsx)("div",{className:I.a.searchResultWrapper,children:function(){var e,n,t,a,c,r,s,i,o,j;if(!W)return Object(E.jsx)("div",{children:"Input pokemon name to search"});if(H)return Object(E.jsxs)(g.a,{children:["Searching...",Object(E.jsx)(f.a,{})]});if(Q)throw Q;if(!L||!L.pokemon)return Object(E.jsx)("div",{children:"Not found"});var h=L.pokemon;return Object(E.jsxs)("div",{className:I.a.searchResultContainer,children:[Object(E.jsx)("div",{className:I.a.pokemonImage,children:Object(E.jsx)("img",{src:h.image||"",alt:h.name||""})}),Object(E.jsxs)("div",{className:I.a.pokemonDetail,children:[Object(E.jsx)(O.a,{variant:"h2",component:"h2",children:h.name}),Object(E.jsx)("br",{}),Object(E.jsxs)(q,{className:"types",children:[Object(E.jsx)("b",{children:"Types:"})," ",Object(E.jsx)("span",{"data-testid":"pokemon-types",children:(null===(e=h.types)||void 0===e?void 0:e.join(" "))||""})]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Resistant(s):"})," ",(null===(n=h.resistant)||void 0===n?void 0:n.join(" "))||""]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"FleeRate:"})," ",h.fleeRate||""]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"MaxCP:"})," ",h.maxCP||""]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Weakness(es):"})," ",(null===(t=h.weaknesses)||void 0===t?void 0:t.join(" "))||"-"]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Classification:"})," ",h.classification||"-"]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Weight:"})," ","".concat(null===(a=h.weight)||void 0===a?void 0:a.minimum," - ").concat(null===(c=h.weight)||void 0===c?void 0:c.maximum)]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Height:"})," ","".concat(null===(r=h.height)||void 0===r?void 0:r.minimum," - ").concat(null===(s=h.height)||void 0===s?void 0:s.maximum)]}),Object(E.jsxs)(q,{children:[Object(E.jsx)("b",{children:"Evolution Requirement:"})," ","".concat((null===(i=h.evolutionRequirements)||void 0===i?void 0:i.amount)||""," ").concat((null===(o=h.evolutionRequirements)||void 0===o?void 0:o.name)||"")]}),Object(E.jsxs)("div",{className:I.a.evolutions,children:[Object(E.jsx)("b",{children:"Evolution(s):"}),Object(E.jsx)("div",{className:I.a.pokemonAvatarContainer,children:(null===(j=h.evolutions)||void 0===j?void 0:j.map((function(e,n){return Object(E.jsx)("div",{className:I.a.pokemonAvatar,children:Object(E.jsx)(l.b,{to:"/?name=".concat(e.name),children:Object(E.jsx)(_.a,{alt:e.name||"",src:e.image||""})})},"evolution-".concat(null===e||void 0===e?void 0:e.name,"-").concat(n))})))||" -"})]})]})]})}()})]})}var M=function(){return Object(E.jsx)(d.c,{children:Object(E.jsx)(d.a,{path:"/",children:Object(E.jsx)(B,{})})})},D=t(103),W=t(104),L=t(107),Q=t(106),H=function(e){Object(L.a)(t,e);var n=Object(Q.a)(t);function t(){var e;Object(D.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={hasError:!1},e}return Object(W.a)(t,[{key:"componentDidCatch",value:function(e,n){console.error("Uncaught error:",e,n)}},{key:"render",value:function(){return this.state.hasError?Object(E.jsx)("h1",{children:"Sorry.. there was an error"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.Component),K=new o.ApolloClient({uri:"https://graphql-pokemon2.vercel.app",cache:new o.InMemoryCache}),U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,159)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};function z(){var e=Object(j.a)("(prefers-color-scheme: dark)"),n=Object(c.useState)("light"),t=Object(a.a)(n,2),s=t[0],i=t[1],d=r.a.useMemo((function(){return Object(h.a)({palette:{type:s}})}),[s]);return r.a.useMemo((function(){i(e?"dark":"light")}),[e]),Object(E.jsx)(l.a,{children:Object(E.jsx)(P.Provider,{value:{themeType:s,toggleThemeType:function(){i("light"===s?"dark":"light")}},children:Object(E.jsxs)(m.a,{theme:d,children:[Object(E.jsx)(u.a,{}),Object(E.jsx)(o.ApolloProvider,{client:K,children:Object(E.jsx)(M,{})})]})})})}i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(H,{children:Object(E.jsx)(z,{})})}),document.getElementById("root")),U()},21:function(e,n,t){e.exports={appBarContainer:"Search_appBarContainer__3pAnM",search:"Search_search__11K1C",themeToggle:"Search_themeToggle__2OF3A",searchTextRoot:"Search_searchTextRoot__33ECK",searchTextInput:"Search_searchTextInput__2O8Ps",searchTextIconButton:"Search_searchTextIconButton__1jSgQ",searchResultWrapper:"Search_searchResultWrapper__13QHW",searchResultContainer:"Search_searchResultContainer__pAqzv",pokemonImage:"Search_pokemonImage__bOgUF",pokemonDetail:"Search_pokemonDetail__2sK1k",evolutions:"Search_evolutions__1Qi1-",pokemonAvatarContainer:"Search_pokemonAvatarContainer__2Rsdk",pokemonAvatar:"Search_pokemonAvatar__2MLMh"}}},[[132,1,2]]]);
//# sourceMappingURL=main.4d14e85c.chunk.js.map