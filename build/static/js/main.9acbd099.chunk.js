(this.webpackJsonpbankapp=this.webpackJsonpbankapp||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(19),i=n.n(c),r=(n(25),n(13)),o=n(7),l=n(8),d=n(10),j=n(9),u=(n(26),n(11)),p=n(2),b=n(0),h=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).validUserName=function(e){a.setState({userName:e.target.value})},a.validPassword=function(e){a.setState({password:e.target.value})},a.enter=function(){var e=0;"admin"==a.state.userName&&"admin"==a.state.password?(e++,a.props.history.push("/admin")):a.props.clients.map((function(t){t.name==a.state.userName&&t.pass==a.state.password&&(e++,a.props.history.push("/".concat(a.state.userName)))})),0==e&&alert("Incorrect user or password")},a.state={userName:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{onChange:this.validUserName,placeholder:"User Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validPassword,placeholder:"Password"}),Object(b.jsx)("br",{}),Object(b.jsx)(u.b,{to:"/register",children:"Create new user"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.enter,children:"ENTER"}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),x=Object(p.f)(h),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).validID=function(e){var t=e.target.value;9==t.length?a.setState({id:t}):a.setState({id:""})},a.validUserName=function(e){var t=e.target.value;t.length>=4?a.setState({userName:t}):a.setState({userName:""})},a.validPassword1=function(e){var t=e.target.value;t.length>=6?a.setState({password1:t}):a.setState({password1:""})},a.validPassword2=function(e){a.state.password1==e.target.value?a.setState({password2:e.target.value}):a.setState({password2:""})},a.validMoney=function(e){var t=e.target.value;t>=0&&t<=1e6?a.setState({money:t}):a.setState({money:""})},a.addClient=function(){""!=a.state.id&&""!=a.state.userName&&""!=a.state.password2&&""!=a.state.money?(a.props.addClient(a.state.id,a.state.userName,a.state.password2,a.state.money),a.props.history.push("/")):alert("One of the details is incorrect")},a.state={id:"",userName:"",password1:"",password2:"",money:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"registration"}),Object(b.jsx)("input",{onChange:this.validID,placeholder:"ID",type:"number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validUserName,placeholder:"User Name",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validPassword1,placeholder:"Password",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validPassword2,placeholder:"Confirm Password",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validMoney,placeholder:"Money",type:"number"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.addClient,children:"CREATE"})]})}}]),n}(a.Component),m=Object(p.f)(O);function v(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Manager"}),e.clients.map((function(t,n){return Object(b.jsxs)("div",{children:[t.name," ",t.id,Object(b.jsx)("button",{onClick:function(){!function(t){e.adminShow(t)}(n)},children:"+"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{display:t.adminDisplay},children:[t.expenses.map((function(t,a){return Object(b.jsxs)("div",{children:[t.name," ",t.price,Object(b.jsx)("button",{onClick:function(){e.deleteExpens(n,a)},children:"del"})]})})),Object(b.jsx)("button",{onClick:function(){e.deleteClient(n)},children:"delete client"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}))]})}var f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).changeFlage=function(){a.setState({flage:!a.state.flage})},a.validName=function(e){a.setState({name:e.target.value})},a.validPrice=function(e){a.setState({price:e.target.value})},a.addExpens=function(){a.props.addExpens(a.props.clientIndex,a.state.name,a.state.price),a.changeFlage()},a.show=function(){return a.state.flage?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){alert("Your balance is: ".concat(a.props.client.monay))},children:"Balance"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:a.changeFlage,children:"Action"}),Object(b.jsx)("br",{}),Object(b.jsx)(u.b,{to:"/edit".concat(a.props.client.name),children:Object(b.jsx)("button",{children:"Edit"})}),Object(b.jsx)("br",{}),Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("button",{children:"EXIT"})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Make a purchase"}),Object(b.jsx)("input",{onChange:a.validName,type:"text",placeholder:"name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:a.validPrice,type:"number",placeholder:"price"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:a.addExpens,children:"Buy"})]})},a.state={flage:!0,name:"",price:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["wolcome ",this.props.client.name]}),this.show()]})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).validID=function(e){var t=e.target.value;9==t.length?a.setState({id:t}):a.setState({id:""})},a.validUserName=function(e){var t=e.target.value;t.length>=4?a.setState({userName:t}):a.setState({userName:""})},a.validPassword1=function(e){var t=e.target.value;t.length>=6?a.setState({password1:t}):a.setState({password1:""})},a.validPassword2=function(e){a.state.password1==e.target.value?a.setState({password2:e.target.value}):a.setState({password2:""})},a.validMoney=function(e){var t=e.target.value;t>=0&&t<=1e6?a.setState({money:t}):a.setState({money:""})},a.editClient=function(){""!=a.state.id&&""!=a.state.userName&&""!=a.state.password2&&""!=a.state.money?(a.props.editClient(a.props.clientIndex,a.state.id,a.state.userName,a.state.password2,a.state.money),a.props.history.push("/".concat(a.state.userName))):alert("One of the details is incorrect")},a.state={id:"",userName:"",password1:"",password2:"",money:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Edit details"}),Object(b.jsx)("input",{onChange:this.validID,placeholder:"ID",type:"number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validUserName,placeholder:"User Name",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validPassword1,placeholder:"Password",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validPassword2,placeholder:"Confirm Password",type:"text"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:this.validMoney,placeholder:"Money",type:"number"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.editClient,children:"EDIT"})]})}}]),n}(a.Component),C=Object(p.f)(g),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={clients:[]},e.addClient=function(t,n,a,s){var c={id:t,name:n,pass:a,monay:s,adminDisplay:"none",expenses:[]};e.setState({clients:[].concat(Object(r.a)(e.state.clients),[c])})},e.editClient=function(t,n,a,s,c){var i=e.state.clients,o={id:n,name:a,pass:s,monay:c,adminDisplay:"none",expenses:e.state.clients[t].expenses};i[t]=o,e.setState({clients:Object(r.a)(i)})},e.deleteClient=function(t){e.setState({clients:e.state.clients.filter((function(e,n){return t!=n}))})},e.addExpens=function(t,n,a){var s=e.state.clients;s[t].expenses=[].concat(Object(r.a)(s[t].expenses),[{name:n,price:a}]),e.setState({clients:Object(r.a)(s)})},e.deleteExpens=function(t,n){var a=e.state.clients,s=a[t].expenses.filter((function(e,t){return n!=t}));a[t].expenses=s,e.setState({clients:Object(r.a)(a)})},e.adminShow=function(t){var n="none";"none"==e.state.clients[t].adminDisplay&&(n="inline-block");var a=e.state.clients;a[t].adminDisplay=n,e.setState({clients:Object(r.a)(a)})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"CHF-BANK"}),Object(b.jsx)(u.a,{children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",component:function(){return Object(b.jsx)(x,{clients:e.state.clients})}}),Object(b.jsx)(p.a,{exact:!0,path:"/register",component:function(){return Object(b.jsx)(m,{addClient:e.addClient})}}),this.state.clients.map((function(t,n){return Object(b.jsx)(p.a,{exact:!0,path:"/edit".concat(t.name),component:function(){return Object(b.jsx)(C,{clientIndex:n,editClient:e.editClient})}})})),this.state.clients.map((function(t,n){return Object(b.jsx)(p.a,{exact:!0,path:"/".concat(t.name),component:function(){return Object(b.jsx)(f,{client:t,clientIndex:n,addExpens:e.addExpens})}})})),Object(b.jsx)(p.a,{exact:!0,path:"/admin",component:function(){return Object(b.jsx)(v,{clients:e.state.clients,adminShow:e.adminShow,deleteClient:e.deleteClient,deleteExpens:e.deleteExpens})}})]})})]})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.9acbd099.chunk.js.map