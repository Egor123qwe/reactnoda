(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={header:"Header_header__11mjV",auth:"Header_auth__1YNdF",login:"Header_login__15O8t",logout:"Header_logout__R54_1"}},26:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(2),r=function(e){return{type:"SERUSERIDINURL",id:e}},i={UserIdInURL:{id:""}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SERUSERIDINURL":return Object(n.a)({},e,{UserIdInURL:Object(n.a)({},e.UserIdInURL,{id:t.id})});default:return e}}},29:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__12tzE",item:"Navbar_item__2P3Wr",active:"Navbar_active__1u_rP"}},30:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){var a=void 0;return t||(a="Must be filled"),void 0===a&&t.length>e&&(a="Must be less than "+e),a}}},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(57),o=a.n(i);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:o.a}))}},37:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return l}),a.d(t,"f",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return f});var n=a(12),r=a(2),i=a(7),o=function(e){return{type:"ADDPOST",Post:e}},u=function(e){return{type:"SETSTAUS",status:e}},c={PostsData:[{text:"\u044d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0445\u0438\u0438\u0438\u0438\u0442",id:"1"},{text:"\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u044f \u0432\u0430\u0441 \u043b\u044e\u0431\u043b\u044e!",id:"2"}],ProfileInfoData:{FullName:"",status:"",lookingForAJob:"",lookingForAJobDescription:"",AboutMe:"",ProfilePhoto:"",ImageFile:null,SetPreloader:!1,contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""}},MyUserId:"13865",UserId:"2"},s=function(e){return function(t){t({type:"SETPRELOADER"}),t(function(e){return{type:"SETUSERID",UserId:e}}(e)),i.b.GetUser(e).then(function(e){t(function(e){return{type:"SETPROFILEINFO",data:e}}(e.data)),t({type:"SETPRELOADER"})})}},l=function(e){return function(t){i.b.GetStatus(e).then(function(e){t(u(e.data))})}},d=function(e){return function(t){i.b.UpdateStatus(e).then(function(a){0===a.data.resultCode&&t(u(e))})}},m=function(e){return function(t){i.b.SetImage(e).then(function(e){t({type:"SETPROFILEIMAGE",photos:e.data.data.photos})})}},f=function(e,t,a){return function(n){return i.b.SetProfileInfo(e).then(function(e){return new Promise(function(r){0===e.data.resultCode?n(s(t)):a({error:e.data.messages[0]}),r(e)})})}};t.g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDPOST":var a={text:t.Post,id:"3"};return Object(r.a)({},e,{PostsData:[a].concat(Object(n.a)(e.PostsData))});case"SETPRELOADER":return Object(r.a)({},e,{ProfileInfoData:Object(r.a)({},e.ProfileInfoData,{Preloader:!e.ProfileInfoData.Preloader})});case"SETPROFILEIMAGE":return Object(r.a)({},e,{ProfileInfoData:Object(r.a)({},e.ProfileInfoData,{ProfilePhoto:t.photos.large})});case"SETUSERID":return Object(r.a)({},e,{UserId:t.UserId});case"SETSTAUS":return Object(r.a)({},e,{ProfileInfoData:Object(r.a)({},e.ProfileInfoData,{status:t.status})});case"SETPROFILEINFO":var i=t.data.photos.large?t.data.photos.large:"https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg";return console.log(),Object(r.a)({},e,{UserId:t.data.userId,ProfileInfoData:Object(r.a)({},e.ProfileInfoData,{lookingForAJobDescription:t.data.lookingForAJobDescription,lookingForAJob:t.data.lookingForAJob,FullName:t.data.fullName,ProfilePhoto:i,AboutMe:t.data.aboutMe,contacts:Object(r.a)({},e.ProfileInfoData.contacts,{github:t.data.contacts.github,vk:t.data.contacts.vk})})});default:return e}}},48:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(12),r=a(2),i=function(e){return{type:"SENDMESSAGE",Message:e}},o={DialogItemData:[{NickName:"Yagor",id:"1"},{NickName:"Nickita",id:"2"},{NickName:"Vova",id:"3"},{NickName:"Sanshain",id:"4"},{NickName:"Slava",id:"5"}],MessageData:[{message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u044f \u0415\u0433\u043e\u0440",id:"2"},{message:"\u042f \u0437\u043d\u0430\u044e!",id:"1"},{message:"\u042f \u0442\u043e\u0436\u0435?",id:"2"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SENDMESSAGE":var a={message:t.Message,id:"1"};return Object(r.a)({},e,{MessageData:[].concat(Object(n.a)(e.MessageData),[a])});default:return e}}},49:function(e,t,a){"use strict";a.d(t,"c",function(){return m}),a.d(t,"d",function(){return h}),a.d(t,"a",function(){return E}),a.d(t,"b",function(){return p});var n=a(12),r=a(2),i=a(7),o=function(e){return{type:"TOGGLEFOLLOW",id:e}},u=function(e){return{type:"SETUSERS",UsersData:e}},c=function(e){return{type:"SETUSERSCOUNT",UsersCount:e}},s=function(e){return{type:"DISABLEBUTTON",id:e}},l=function(e){return{type:"ENABLEBUTTON",id:e}},d={UsersData:[],UsersCountOnPage:4,UsersCount:1,ChoosingPage:1,Preloader:!1,DisabledButtons:[]},m=function(e,t){return function(a){a({type:"SETPRELOADER"}),i.d.GetUsers(e,t).then(function(e){a(u(e.data.items)),a(c(e.data.totalCount)),a({type:"SETPRELOADER"})})}};function f(e,t,a){a(s(t)),e(t).then(function(e){0===e.data.resultCode&&(a(o(t)),a(l(t)))})}var h=function(e){return function(t){f(i.d.UnFollow,e,t)}},E=function(e){return function(t){f(i.d.Follow,e,t)}},p=function(e,t){return function(a){a({type:"SETPRELOADER"}),a({type:"COOSEPAGE",Page:t}),i.d.GetUsers(e,t).then(function(e){a(u(e.data.items)),a(c(e.data.totalCount)),a({type:"SETPRELOADER"})})}};t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLEFOLLOW":return Object(r.a)({},e,{UsersData:e.UsersData.map(function(e){return e.id===t.id?Object(r.a)({},e,{followed:!e.followed}):e})});case"SETUSERS":return Object(r.a)({},e,{UsersData:Object(n.a)(t.UsersData)});case"COOSEPAGE":return Object(r.a)({},e,{ChoosingPage:t.Page});case"SETUSERSCOUNT":return Object(r.a)({},e,{UsersCount:t.UsersCount});case"SETPRELOADER":return Object(r.a)({},e,{Preloader:!e.Preloader});case"ENABLEBUTTON":var a=Object(n.a)(e.DisabledButtons);return delete a[a.indexOf(t.id)],Object(r.a)({},e,{DisabledButtons:a});case"DISABLEBUTTON":return Object(r.a)({},e,{DisabledButtons:[].concat(Object(n.a)(e.DisabledButtons),[t.id])});default:return e}}},5:function(e,t,a){e.exports={LoginForm:"Login_LoginForm__3iye0",title:"Login_title__2nduG",submitButton:"Login_submitButton__1qXYP",errorMessage:"Login_errorMessage__3pKKB",error:"Login_error__uZq-A",item:"Login_item__3QHqa",CaptchaImg:"Login_CaptchaImg__2cac8"}},57:function(e,t,a){e.exports=a.p+"static/media/Preloader.6402ba95.svg"},59:function(e,t,a){e.exports=a(95)},60:function(e,t,a){},67:function(e,t,a){},7:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return d});var n=a(53),r=a.n(n),i=a(54),o=a.n(i),u=r.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0cce5b73-8f5a-46a8-8e1d-6c02864a8215"}}),c={GetUser:function(e){return u.get("profile/"+e)},GetStatus:function(e){return u.get("/profile/status/"+e)},SetImage:function(e){var t=new o.a;return t.append("file",e,e.name),u.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},UpdateStatus:function(e){return u.put("/profile/status",{status:e})},SetProfileInfo:function(e){return u.put("/profile/",e)}},s={GetUsers:function(e,t){return u.get("users?count="+e+"&page="+t)},UnFollow:function(e){return u.delete("follow/"+e)},Follow:function(e){return u.post("follow/"+e,{})}},l={AuthMe:function(){return u.get("auth/me")},LoginMe:function(e,t,a,n){return console.log(n),u.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},LogOut:function(){return u.delete("auth/login")}},d={GetCaptcha:function(){return u.get("/security/get-captcha-url")}}},95:function(e,t,a){"use strict";a.r(t);a(60);var n=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,106)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)})},r=a(0),i=a.n(r),o=a(50),u=a.n(o),c=a(20),s=a(21),l=a(24),d=a(22),m=a(25),f=(a(67),a(1)),h=function(e){return i.a.createElement("div",null,"News")},E=function(e){return i.a.createElement("div",null,"Music")},p=function(e){return i.a.createElement("div",null,"Settings")},b=a(10),g=a(29),O=a.n(g),v=a(8),A=function(){return function(e){return e.isActive?O.a.active:O.a.item}};var I=function(e){return i.a.createElement("nav",{className:O.a.Navbar},i.a.createElement("div",null,i.a.createElement(v.b,{onClick:function(){e.SetUserIdInURL(e.UserId)},to:"/profile/"+e.UserId,className:A()},"Profile")),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/dialogs",className:A()},"Messages")),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/users",className:A()},"Users")),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/news",className:A()},"News")),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/music",className:A()},"Music")),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/settings",className:A()},"Settings")))},P=a(26);var S=Object(b.b)(function(e){return{UserId:e.Auth.Auth.id}},{SetUserIdInURL:P.a})(I),N=a(17),U=a.n(N);var L=function(e){return i.a.createElement("div",{className:U.a.header},i.a.createElement("img",{alt:"",src:"https://auto.24tv.ua/resources/photos/news/202109/33374__d9df13cb-b9fc-44e1-9334-53e8d6453698.png?1632224175000"}),e.isAuth?i.a.createElement("span",{className:U.a.auth},e.Login," - ",i.a.createElement("button",{className:U.a.logout,onClick:e.AuthLogOutThunk},"Log Out")):i.a.createElement("span",{className:U.a.auth},i.a.createElement(v.b,{className:U.a.login,to:"/login"},"Login")))},T=a(2),C=a(7),D={Auth:{id:"",email:"",login:"",isAuth:!1,Captcha:""}},j=function(){return function(e){return C.a.AuthMe().then(function(t){0===t.data.resultCode&&e({type:"SETAUTH",data:t.data.data})})}},_=function(){return function(e){C.c.GetCaptcha().then(function(t){e({type:"SETCAPTCHA",Url:t.data.url})})}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETAUTH":return Object(T.a)({},e,{Auth:Object(T.a)({},e.Auth,{id:t.data.id,email:t.data.email,login:t.data.login,isAuth:!0})});case"DELETEAUTH":return Object(T.a)({},e,{Auth:Object(T.a)({},e.Auth,{id:"",email:"",login:"",Captcha:"",isAuth:!1})});case"SETCAPTCHA":return Object(T.a)({},e,{Auth:Object(T.a)({},e.Auth,{Captcha:t.Url})});default:return e}},w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(L,{AuthLogOutThunk:this.props.AuthLogOutThunk,Login:this.props.Login,isAuth:this.props.isAuth})}}]),t}(i.a.Component);var R=Object(b.b)(function(e){return{Login:e.Auth.Auth.login,isAuth:e.Auth.Auth.isAuth}},{AuthLogOutThunk:function(){return function(e){C.a.LogOut().then(function(t){0===t.data.resultCode&&e({type:"DELETEAUTH"})})}}})(w),k=a(35),M=a(5),F=a.n(M),G=a(30),B=function(e){var t={},a=Object(G.a)(40);a(e.email)&&(t.email=a(e.email));var n=Object(G.a)(15);return n(e.Password)&&(t.Password=n(e.Password)),t},z=Object(b.b)(function(e){return{isAuth:e.Auth.Auth.isAuth,MyId:e.Auth.Auth.id,Captcha:e.Auth.Auth.Captcha}},{AuthLoginThunk:function(e,t,a,n,r){return function(i){C.a.LoginMe(e,t,a,n).then(function(e){0===e.data.resultCode?i(j()):(10===e.data.resultCode&&i(_()),r({error:e.data.messages[0]}))})}}})(function(e){var t=Object(k.a)({initialValues:{email:"",Password:"",isRemember:!1,Captcha:""},validate:B,onSubmit:function(t,a){e.AuthLoginThunk(t.email,t.Password,t.isRemember,t.Captcha,a.setStatus)}});if(e.isAuth)return i.a.createElement(f.a,{to:"/profile/"+e.MyId});return i.a.createElement("form",{className:F.a.LoginForm,onSubmit:t.handleSubmit},i.a.createElement("div",{className:F.a.title},"Login"),i.a.createElement("div",{className:F.a.item},"Nickname:",i.a.createElement("span",{className:t.errors.email?F.a.error:F.a.email},i.a.createElement("input",{id:"email",type:"email",onChange:t.handleChange,value:t.values.email})),t.errors.email?i.a.createElement("div",{className:F.a.errorMessage},t.errors.email):null),i.a.createElement("div",{className:F.a.item},"Password:",i.a.createElement("span",{className:t.errors.Password?F.a.error:F.a.Password},i.a.createElement("input",{id:"Password",type:"Password",onChange:t.handleChange,value:t.values.Password})),t.errors.Password?i.a.createElement("div",{className:F.a.errorMessage},t.errors.Password):null),i.a.createElement("div",{className:F.a.item},i.a.createElement("input",{id:"isRemember",type:"checkbox",onChange:t.handleChange,value:t.values.isRemember}),"Remember Me"),e.Captcha?i.a.createElement("div",null,i.a.createElement("div",{className:F.a.item},"-----------------------------------------"),i.a.createElement("div",null,i.a.createElement("img",{className:F.a.CaptchaImg,alt:"",src:e.Captcha})),i.a.createElement("span",{className:F.a.item},"Captcha: ",i.a.createElement("input",{id:"Captcha",type:"Captcha",onChange:t.handleChange,value:t.values.Captcha}))):i.a.createElement(i.a.Fragment,null),i.a.createElement("div",{className:F.a.item},"-----------------------------------------"),i.a.createElement("button",{className:F.a.submitButton,type:"submit"},"Log In"),i.a.createElement("div",{className:F.a.errorMessage},t.status?t.status.error:null))}),x={initialize:{isInitialazed:!1}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZING":return Object(T.a)({},e,{initialize:Object(T.a)({},e.initialize,{isInitialazed:!0})});default:return e}},J=a(36),V=i.a.lazy(function(){return a.e(3).then(a.bind(null,107))}),Y=i.a.lazy(function(){return a.e(4).then(a.bind(null,109))}),q=i.a.lazy(function(){return a.e(5).then(a.bind(null,108))}),K=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.Initialize()}},{key:"render",value:function(){return this.props.isInitialazed?i.a.createElement("div",{className:"App"},i.a.createElement(R,null),i.a.createElement(S,null),i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/login",element:i.a.createElement(z,null)}),i.a.createElement(f.b,{path:"profile/",element:i.a.createElement(V,null)}),i.a.createElement(f.b,{path:"profile/:userId",element:i.a.createElement(V,null)}),i.a.createElement(f.b,{path:"/dialogs/*",element:i.a.createElement(Y,null)}),i.a.createElement(f.b,{path:"/users/*",element:i.a.createElement(q,null)}),i.a.createElement(f.b,{path:"/news",element:i.a.createElement(h,null)}),i.a.createElement(f.b,{path:"/music",element:i.a.createElement(E,null)}),i.a.createElement(f.b,{path:"/settings",element:i.a.createElement(p,null)})))):i.a.createElement(J.a,null)}}]),t}(i.a.Component);var W=Object(b.b)(function(e){return{isInitialazed:e.App.initialize.isInitialazed}},{Initialize:function(){return function(e){e(j()).then(function(){e({type:"INITIALIZING"})})}}})(K),X=a(18),Z=a(48),Q=a(37),$=a(49),ee=a(58),te=Object(X.b)({ProfilePage:Q.g,DialogPage:Z.b,UsersPage:$.e,Auth:y,App:H,Url:P.b}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,ne=Object(X.d)(te,ae(Object(X.a)(ee.a)));u.a.createRoot(document.getElementById("root")).render(i.a.createElement(v.a,null,i.a.createElement(b.a,{store:ne},i.a.createElement(W,{state:ne.getState(),dispatch:ne.dispatch.bind(ne)})))),n()}},[[59,1,2]]]);
//# sourceMappingURL=main.14a46e27.chunk.js.map