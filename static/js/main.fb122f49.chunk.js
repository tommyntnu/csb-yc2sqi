(this["webpackJsonpoffice-user-auto-create"]=this["webpackJsonpoffice-user-auto-create"]||[]).push([[0],{138:function(e,t,c){},217:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(32),i=c.n(s),r=c(223),a=(c(137),c(138),c(218)),o=c(219),l=c(226),j=c(52),b=c(227),u=c(7);function d(){var e={fontWeight:500,fontSize:24};return Object(u.jsx)(a.a,{style:{height:"100%"},children:Object(u.jsx)(o.a,{lg:{span:14,offset:5},xs:{span:22,offset:1},children:Object(u.jsxs)("div",{className:"display-flex align-center justify-between",children:[Object(u.jsxs)(l.b,{align:"center",children:[Object(u.jsx)("img",{style:{height:28},src:"https://i.loli.net/2020/04/21/ST9ru5mwVqUXnKO.png",alt:""}),Object(u.jsx)("div",{style:e,children:"|"}),Object(u.jsx)("div",{style:e,children:"Office"})]}),Object(u.jsx)(j.a,{shape:"circle",type:"primary",icon:Object(u.jsx)(b.a,{}),onClick:function(){return window.open("https://github.com/KusakabeSi/Office-User-Auto-Create")}})]})})})}var O=c(4),f=c(224),h=c(127),p=c(221),m=c(222),x=c(225),g=c(220),S=c(228),y=c(229),C=c(230),_=c(104),E=c.n(_);function v(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)({subscriptions:[{name:"",sku:""}],domains:[],getCodeLink:""}),r=Object(O.a)(i,2),l=r[0],b=r[1],d=Object(n.useState)({email:"",password:""}),f=Object(O.a)(d,2),_=f[0],v=f[1];Object(n.useEffect)((function(){s(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://tommyntnu.github.io/csb-yc2sqi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL,"getOfficeConfig")).then((function(e){e.json().then((function(e){b(e)})),s(!1)})).catch((function(e){h.b.error(JSON.stringify(e))}))}),[]);var T=Object(u.jsxs)(p.a,{labelCol:{span:4},wrapperCol:{span:20},children:[Object(u.jsx)(p.a.Item,{label:"Email",children:Object(u.jsx)(m.a,{value:_.email,prefix:Object(u.jsx)(S.a,{}),suffix:Object(u.jsx)(y.a,{onClick:function(){E()(_.email),h.b.success("Copy Email")}})})}),Object(u.jsx)(p.a.Item,{label:"Password",children:Object(u.jsx)(m.a,{value:_.password,prefix:Object(u.jsx)(C.a,{}),suffix:Object(u.jsx)(y.a,{onClick:function(){E()(_.password),h.b.success("Copy Password")}})})}),Object(u.jsx)(p.a.Item,{style:{float:"right"},children:Object(u.jsx)(j.a,{onClick:function(){return window.open("https://office.com/login")},type:"primary",htmlType:"submit",children:"Log in"})})]}),w=Object(u.jsxs)(p.a,{name:"basic",onFinish:function(e){s(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://tommyntnu.github.io/csb-yc2sqi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL,"getOffice"),{method:"POST",body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){e.success?(h.b.success(e.msg),v(e.account)):h.b.error(e.msg.toString())})),s(!1)})).catch((function(e){h.b.error(JSON.stringify(e))}))},labelCol:{span:4},wrapperCol:{span:20},children:[Object(u.jsx)(p.a.Item,{label:"Subscription",name:"subscription",rules:[{required:!0,message:"require"}],children:Object(u.jsx)(x.a,{placeholder:"Choose subscription",children:l.subscriptions.map((function(e){return Object(u.jsx)(x.a.Option,{value:e.sku,children:e.name},e.sku)}))})}),Object(u.jsx)(p.a.Item,{label:"Email",name:"Email",rules:[{required:!0,message:"require"}],children:Object(u.jsxs)(m.a.Group,{compact:!0,children:[Object(u.jsx)(p.a.Item,{name:["Email","Username"],noStyle:!0,rules:[{required:!0,message:"require"}],children:Object(u.jsx)(m.a,{style:{width:"55%"},placeholder:"Username"})}),Object(u.jsx)(p.a.Item,{name:["Email","Domain"],noStyle:!0,rules:[{required:!0,message:"require"}],children:Object(u.jsx)(x.a,{style:{width:"45%"},placeholder:"Choose domain",children:l.domains.map((function(e){return Object(u.jsxs)(x.a.Option,{value:e,children:["@",e]},e)}))})})]})}),Object(u.jsx)(p.a.Item,{label:"Code",name:"code",rules:[{required:!0,message:"require"}],children:Object(u.jsx)(m.a,{placeholder:"Code",addonAfter:Object(u.jsx)("a",{href:l.getCodeLink,target:"_blank",rel:"noreferrer",children:"Get Code"})})}),Object(u.jsx)(p.a.Item,{style:{float:"right"},children:Object(u.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Submit"})})]});return Object(u.jsx)(g.a,{spinning:c,children:Object(u.jsx)(a.a,{children:Object(u.jsx)(o.a,{lg:{span:14,offset:5},xs:{span:24},children:_.password?T:w})})})}function T(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),r=Object(O.a)(i,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://tommyntnu.github.io/csb-yc2sqi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL,"getNotice")).then((function(e){e.text().then((function(e){e&&(o(e),s(!0))}))}))}),[]),Object(u.jsx)(f.a,{title:"\u516c\u544a",centered:!0,visible:c,maskClosable:!1,destroyOnClose:!0,footer:!1,onCancel:function(){return s(!1)},children:a})}function w(){var e={fontSize:20,fontWeight:400,color:"#ffffff"},t=Object(n.useState)(!1),c=Object(O.a)(t,2),s=c[0],i=c[1];return Object(u.jsx)(a.a,{style:{background:"url(https://i.loli.net/2020/01/25/KEScJXCBfAzaIjW.png) no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"95vh"},children:Object(u.jsx)(o.a,{lg:{span:14,offset:5},xs:{span:22,offset:1},className:"display-flex align-center justify-around",children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)(T,{}),Object(u.jsx)("span",{style:{fontSize:30,fontWeight:700,color:"#ffffff"},children:"Welcome Office"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:e,children:"You can create, communicate, collaborate and complete important tasks here."}),Object(u.jsx)("span",{style:e,children:"Microsoft has the right to ultimate interpretation!"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)(l.b,{children:[Object(u.jsx)(j.a,{style:{width:110},type:"primary",danger:!0,size:"large",onClick:function(){return i((function(e){return!e}))},children:"Get Office"}),Object(u.jsx)(f.a,{title:"Get Office",centered:!0,visible:s,width:1e3,maskClosable:!1,destroyOnClose:!0,footer:!1,onCancel:function(){return i(!1)},children:Object(u.jsx)(v,{})}),Object(u.jsx)(j.a,{style:{width:110},size:"large",onClick:function(){return window.open("https://office.com/login")},children:"Log in"})]})]})})})}function k(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(r.a.Header,{className:"background-white",style:{padding:0},children:Object(u.jsx)(d,{})}),Object(u.jsx)(r.a.Content,{children:Object(u.jsx)(w,{})})]})}i.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.fb122f49.chunk.js.map