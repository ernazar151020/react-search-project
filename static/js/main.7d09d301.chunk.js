(this["webpackJsonpcocktail-shop"]=this["webpackJsonpcocktail-shop"]||[]).push([[0],{33:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var c,i,a,r,s,o,j,d,b,l,u,O,h,x,p,m,f,g,v,w,k,y,S,z,I,C,q,D,E,N,T,A,F,G,H,J,L,M=t(0),B=t.n(M),P=t(25),R=t.n(P),U=(t(33),t(10)),Y=t(4),K=t(3),Q=t(28),V=t(2),W=t(7),X=t(20),Z=t(26),$=t.n(Z),_=t(1),nn=Object(X.css)(c||(c=Object(K.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),en=function(){var n=Object(M.useState)(!0),e=Object(W.a)(n,2),t=e[0],c=(e[1],Object(M.useState)("#ffc222")),i=Object(W.a)(c,2),a=i[0];i[1];return Object(_.jsx)(tn,{children:Object(_.jsx)("div",{className:"sweet-loading",children:Object(_.jsx)($.a,{color:a,loading:t,css:nn,size:200,height:200,width:20,radius:5,margin:7})})})},tn=V.a.div(i||(i=Object(K.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),cn=B.a.createContext(),an=function(n){var e=n.children,t=Object(M.useState)(!1),c=Object(W.a)(t,2),i=c[0],a=c[1],r=Object(M.useState)(""),s=Object(W.a)(r,2),o=s[0],j=s[1],d=Object(M.useState)([]),b=Object(W.a)(d,2),l=b[0],u=b[1],O=Object(M.useState)(!1),h=Object(W.a)(O,2),x=h[0],p=h[1],m=Object(M.useCallback)((function(){a(!0);try{fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(o)).then((function(n){return n.json()})).then((function(n){var e=n.drinks;if(e){var t=e.map((function(n){return{id:n.idDrink,name:n.strDrink,img:n.strDrinkThumb,info:n.strAlcoholic,glass:n.strGlass}}));u(t)}else u([]);a(!1)}))}catch(n){console.log(n)}}),[o]);return Object(M.useEffect)((function(){m()}),[o]),Object(_.jsx)(cn.Provider,{value:{loading:i,cocktail:l,setSearchTerm:j,toggle:function(){console.log("sdav"),p(!x)},show:x},children:e})},rn=function(){return Object(M.useContext)(cn)},sn=function(n){var e=n.name,t=n.img,c=n.info,i=n.glass,a=n.id;return Object(_.jsxs)(dn,{children:[Object(_.jsx)(jn,{children:Object(_.jsx)(on,{src:t})}),Object(_.jsxs)(bn,{children:[Object(_.jsx)(ln,{children:e}),Object(_.jsx)(un,{children:i}),Object(_.jsx)(On,{children:c}),Object(_.jsx)(hn,{to:"/cocktail/".concat(a),children:"Details"})]})]})},on=V.a.img(a||(a=Object(K.a)(["\n  width: 100%;\n  transition: all 0.5s ease-in-out;\n"]))),jn=V.a.div(r||(r=Object(K.a)(["\n  overflow: hidden;\n"]))),dn=V.a.div(s||(s=Object(K.a)(["\n  text-align: center;\n  cursor: pointer;\n  border: 2px solid #50c878;\n  padding-bottom: 10px;\n  :hover "," {\n    transform: scale(1.2);\n  }\n"])),on),bn=V.a.div(o||(o=Object(K.a)([""]))),ln=V.a.h1(j||(j=Object(K.a)([""]))),un=V.a.h5(d||(d=Object(K.a)(["\n  color: green;\n"]))),On=V.a.p(b||(b=Object(K.a)(["\n  color: red;\n  margin-bottom: 1rem;\n"]))),hn=Object(V.a)(U.b)(l||(l=Object(K.a)(["\n  padding: 5px 2rem;\n  background: #50c878;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 20px;\n"]))),xn=function(){var n=rn(),e=n.cocktail;return n.loading?Object(_.jsx)(en,{}):e.length<1?Object(_.jsx)(pn,{children:"no cocktails matched your search criteria"}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(mn,{children:e.map((function(n){return Object(_.jsx)(sn,Object(Q.a)({},n),n.id)}))})})})},pn=V.a.h2(u||(u=Object(K.a)(["\n  text-align: center;\n  text-transform: capitalize;\n  color: red;\n"]))),mn=V.a.div(O||(O=Object(K.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 20px;\n  padding: 2rem 0;\n  @media screen and (max-width: 400px) {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n"]))),fn=t(17),gn=function(){var n=Object(M.useState)(!1),e=Object(W.a)(n,2),t=(e[0],e[1]),c=rn().toggle,i=function(){window.scrollY>=80?t(!0):t(!1)};return Object(M.useEffect)((function(){window.addEventListener("scroll",i)}),[]),Object(_.jsxs)(wn,{children:[Object(_.jsx)(kn,{to:"/",children:"The Cocktail "}),Object(_.jsx)(vn,{onClick:c}),Object(_.jsxs)(yn,{children:[Object(_.jsx)(Sn,{to:"/",children:"Home"}),Object(_.jsx)(Sn,{to:"/about",children:"about"})]})]})},vn=Object(V.a)(fn.a)(h||(h=Object(K.a)(["\n  font-size: 26px;\n  display: none;\n  cursor: pointer;\n  @media screen and (max-width: 500px) {\n    display: block;\n    margin-right: 1rem;\n  }\n"]))),wn=V.a.nav(x||(x=Object(K.a)(["\n  height: 80px;\n  padding: 0 2rem;\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);\n  @media screen and (max-width: 743px) {\n    padding: 0 15px;\n  }\n"]))),kn=Object(V.a)(U.b)(p||(p=Object(K.a)(["\n  font-size: 24px;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: 800;\n  text-decoration: none;\n  color: #0a0a0a;\n"]))),yn=V.a.div(m||(m=Object(K.a)(["\n  @media screen and (max-width: 500px) {\n    display: none;\n  }\n"]))),Sn=Object(V.a)(U.b)(f||(f=Object(K.a)(["\n  padding: 0 20px;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-decoration: none;\n"]))),zn=function(){var n=rn(),e=n.toggle,t=n.show;return Object(_.jsxs)(In,{show:t,onClick:e,children:[Object(_.jsx)(Cn,{onClick:e}),Object(_.jsxs)(Dn,{children:[Object(_.jsx)(qn,{to:"/",children:"Home"}),Object(_.jsx)(qn,{to:"/about",children:"About"})]})]})},In=V.a.div(g||(g=Object(K.a)(["\n  position: fixed;\n  z-index: 200;\n  right: ",";\n  top: 0;\n  /* left: 0; */\n  bottom: 0;\n  transition: all 0.3s ease-in-out;\n  width: 100%;\n  height: 100%;\n  background: #0a0a0a;\n"])),(function(n){return n.show?" 0":"-100%"})),Cn=Object(V.a)(fn.b)(v||(v=Object(K.a)(["\n  font-size: 2rem;\n  color: #fff;\n  margin: 10px;\n  cursor: pointer;\n"]))),qn=Object(V.a)(U.b)(w||(w=Object(K.a)(["\n  font-size: 2rem;\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n  margin-bottom: 1rem;\n  display: block;\n"]))),Dn=V.a.div(k||(k=Object(K.a)(["\n  text-align: center;\n  padding: 2rem 0;\n"]))),En=function(n){var e=n.children;return Object(_.jsxs)("div",{children:[Object(_.jsx)(zn,{}),Object(_.jsx)(gn,{}),e]})},Nn=function(){var n=rn().setSearchTerm,e=Object(M.useRef)("");return B.a.useEffect((function(){e.current.focus()}),[]),Object(_.jsxs)(Tn,{onSubmit:function(n){n.preventDefault()},children:[Object(_.jsxs)(An,{children:[Object(_.jsx)(Gn,{children:"Search your favotite cocktail"}),Object(_.jsx)(Fn,{ref:e,onChange:function(){n(e.current.value)}})]}),";"]})},Tn=V.a.div(y||(y=Object(K.a)(["\n  margin: 2rem 0;\n  text-align: center;\n"]))),An=V.a.form(S||(S=Object(K.a)(["\n  padding: 2rem;\n  background: rgba(0, 0, 0, 0.6);\n  width: 50%;\n  margin: 0 auto;\n  @media screen and (max-width: 550px) {\n    width: 90%;\n  }\n"]))),Fn=V.a.input(z||(z=Object(K.a)(["\n  width: 300px;\n  padding: 10px;\n  /* background: #ccc; */\n  @media screen and (max-width: 743px) {\n    width: 100%;\n  }\n"]))),Gn=V.a.h2(I||(I=Object(K.a)(["\n  color: #50c878;\n  font-size: 18px;\n  margin: 10px 0 20px;\n  text-transform: uppercase;\n"]))),Hn=function(){return Object(_.jsxs)(En,{children:[Object(_.jsx)(Nn,{}),Object(_.jsx)(xn,{})]})},Jn=function(){return Object(_.jsx)(En,{children:Object(_.jsx)(Ln,{children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Mn,{children:"About Us"}),Object(_.jsx)(Bn,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit suscipit ipsam neque. Numquam impedit aliquid sint. Eveniet temporibus optio ad ducimus deleniti cupiditate eaque omnis non laboriosam cum repudiandae qui, voluptas quod, beatae quo odio alias distinctio, cumque consectetur dignissimos! Fugiat harum perferendis porro? Molestias molestiae eligendi enim facilis architecto!"})]})})})},Ln=V.a.div(C||(C=Object(K.a)(["\n  padding: 4rem 0;\n  text-align: center;\n"]))),Mn=V.a.h1(q||(q=Object(K.a)(["\n  text-transform: uppercase;\n  margin: 2rem 0;\n"]))),Bn=V.a.div(D||(D=Object(K.a)(["\n  font-size: 1.2rem;\n"]))),Pn=function(){var n=Object(Y.f)().id,e=Object(M.useState)(!1),t=Object(W.a)(e,2),c=t[0],i=t[1],a=Object(M.useState)(null),r=Object(W.a)(a,2),s=r[0],o=r[1];if(Object(M.useEffect)((function(){i(!0),function(){try{fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=").concat(n)).then((function(n){return n.json()})).then((function(n){if(n.drinks){var e=n.drinks[0],t=e.strDrink,c=e.strDrinkThumb,i=e.strAlcoholic,a=e.strCategory,r=e.strGlass,s=e.strInstructions,j=e.strIngredient1,d=e.strIngredient2,b=e.strIngredient3,l=e.strIngredient4,u=e.strIngredient5;o({name:t,img:c,info:i,category:a,glass:r,instructions:s,ingredients:[j,d,b,l,u]})}else o(null)})),i(!1)}catch(e){i(!0),console.log(e)}}()}),[n]),c)return Object(_.jsx)(en,{});if(!s)return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(En,{children:"No cokctail to display"}),";"]});var j=s.name,d=s.img,b=s.category,l=s.info,u=s.glass,O=s.instructions,h=s.ingredients;return Object(_.jsx)(En,{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(Rn,{children:[Object(_.jsx)(Un,{children:j}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Kn,{children:Object(_.jsx)(Qn,{src:d})}),Object(_.jsxs)(Vn,{children:[Object(_.jsxs)(Wn,{children:["Name: ",Object(_.jsx)(Xn,{children:j})]}),Object(_.jsxs)(Wn,{children:["Categoty: ",Object(_.jsx)(Xn,{children:b})]}),Object(_.jsxs)(Wn,{children:["Info: ",Object(_.jsx)(Xn,{children:l})]}),Object(_.jsxs)(Wn,{children:["Glass: ",Object(_.jsx)(Xn,{children:u})]}),Object(_.jsxs)(Wn,{children:["Instructions: ",Object(_.jsx)(Xn,{children:O})]}),Object(_.jsxs)(Wn,{children:["Ingredients:",h.map((function(n){return n?Object(_.jsx)(Xn,{children:n}):null}))]})]})]})]})})})},Rn=(V.a.h2(E||(E=Object(K.a)([""]))),V.a.div(N||(N=Object(K.a)(["\n  padding: 2rem 0;\n"])))),Un=V.a.h1(T||(T=Object(K.a)(["\n  text-align: center;\n  margin-bottom: 3rem;\n"]))),Yn=V.a.div(A||(A=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  /* justify-content: space-around; */\n"]))),Kn=V.a.div(F||(F=Object(K.a)([""]))),Qn=V.a.img(G||(G=Object(K.a)(["\n  width: 80%;\n"]))),Vn=V.a.div(H||(H=Object(K.a)([""]))),Wn=V.a.div(J||(J=Object(K.a)(["\n  font-size: 20px;\n  line-height: 50px;\n  color: green;\n  font-weight: 900;\n"]))),Xn=V.a.span(L||(L=Object(K.a)(["\n  background: #ffc222;\n  border-radius: 10px;\n  line-height: 30px;\n  padding: 5px;\n  color: #0a0a0a;\n  font-weight: 400;\n"])));var Zn=function(){return Object(_.jsx)(U.a,{children:Object(_.jsxs)(Y.c,{children:[Object(_.jsx)(Y.a,{exact:!0,path:"/",children:Object(_.jsx)(Hn,{})}),Object(_.jsx)(Y.a,{path:"/about",children:Object(_.jsx)(Jn,{})}),Object(_.jsx)(Y.a,{path:"/cocktail/:id",children:Object(_.jsx)(Pn,{})})]})})};R.a.render(Object(_.jsx)(B.a.StrictMode,{children:Object(_.jsx)(an,{children:Object(_.jsx)(Zn,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7d09d301.chunk.js.map