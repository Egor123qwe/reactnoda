(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,a){e.exports={profile:"Profile_profile__1ni5C"}},102:function(e,t,a){e.exports={item:"Post_item__3xHLe"}},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a(101),s=a.n(i),l=a(20),u=a(21),c=a(24),m=a(22),p=a(25),f=a(10),d=a(96),b=a.n(d),h=a(36),E=a(11);var P=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)(function(){i(e.ProfilePhoto)},[e.ProfilePhoto]),r.a.createElement("div",{className:b.a.ProfileInfo},r.a.createElement("img",{alt:"",src:o}),e.UserId===String(e.MyId)?r.a.createElement("div",null,r.a.createElement("input",{onChange:function(t){return function(t){e.SetProfileImageThunk(t.target.files[0])}(t)},type:"file"})):r.a.createElement(r.a.Fragment,null))};var v=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(e.status),l=Object(E.a)(s,2),u=l[0],c=l[1];return Object(n.useEffect)(function(){c(e.status)},[e.status]),r.a.createElement("div",{className:b.a.status},o?r.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.UpdateStatus(u)},value:u}):r.a.createElement("span",{onDoubleClick:function(){e.UserId===String(e.MyId)&&i(!0)}},u||"-----"))},I=a(35),g=function(e){return{}};var k=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],i=a[1],s=Object(I.a)({initialValues:{NikName:"",lookingForAJob:!1,LookingForAJobDescription:"",description:"",Vk:"",GitHub:""},validate:g,onSubmit:function(t){i(!1);var a={userId:e.MyId,lookingForAJob:t.lookingForAJob,LookingForAJobDescription:t.LookingForAJobDescription,FullName:t.NikName,AboutMe:t.description,contacts:{github:t.GitHub,vk:t.Vk,facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""}};e.SetProfileInfoThunk(a)}});return r.a.createElement("form",{className:b.a.LoginForm,onSubmit:s.handleSubmit},r.a.createElement("div",{className:b.a.info},o?r.a.createElement(r.a.Fragment,null):r.a.createElement("button",{type:"button",onClick:function(){i(!0)}},"Edit"),o?r.a.createElement("button",{type:"submit"},"Save"):r.a.createElement(r.a.Fragment,null),o?r.a.createElement("div",null,r.a.createElement("span",null,"Name: ",r.a.createElement("input",{id:"NikName",type:"NikName",onChange:s.handleChange,value:s.values.NikName}))):r.a.createElement("div",{className:b.a.NikName},e.ProfileInfoData.fullName),r.a.createElement(v,{MyId:e.MyId,UserId:e.UserId,UpdateStatus:e.UpdateStatus,status:e.ProfileInfoData.status}),o?r.a.createElement("div",null,r.a.createElement("span",null,"looking for a job: ",r.a.createElement("input",{id:"lookingForAJob",type:"checkbox",onChange:s.handleChange,value:s.values.lookingForAJob}))):r.a.createElement("div",null,"looking for a job: ",r.a.createElement("span",{className:b.a.lookingForAJob},s.values.lookingForAJob?"yes":"no")),o?r.a.createElement("div",null,r.a.createElement("span",null,"looking for a job description: ",r.a.createElement("input",{id:"LookingForAJobDescription",type:"LookingForAJobDescription",onChange:s.handleChange,value:s.values.LookingForAJobDescription}))):r.a.createElement("div",null,"looking for a job description: ",r.a.createElement("span",{className:b.a.LookingForAJobDescription})),o?r.a.createElement("div",null,r.a.createElement("span",null,"About me: ",r.a.createElement("input",{id:"description",type:"description",onChange:s.handleChange,value:s.values.description}))):r.a.createElement("div",null,"About me: ",r.a.createElement("span",{className:b.a.description},e.ProfileInfoData.description)),r.a.createElement("div",null,"Contacts:",r.a.createElement("div",null,o?r.a.createElement("div",null,r.a.createElement("span",null,"Vk: ",r.a.createElement("input",{id:"Vk",type:"Contacts",onChange:s.handleChange,value:s.values.Vk}))):r.a.createElement("div",null,"Vk: ",r.a.createElement("span",{className:b.a.VkLink})),o?r.a.createElement("div",null,r.a.createElement("span",null,"Git Hub: ",r.a.createElement("input",{id:"GitHub",type:"Contacts",onChange:s.handleChange,value:s.values.GitHub}))):r.a.createElement("div",null,"Git Hub: ",r.a.createElement("span",{className:b.a.GitHubLink}))))))};var N=function(e){return r.a.createElement("div",{className:b.a.ProfileInfo},r.a.createElement("div",{className:b.a.info},e.ProfileInfoData.Preloader?r.a.createElement(h.a,null):r.a.createElement(r.a.Fragment,null),r.a.createElement(P,{MyId:e.MyId,UserId:e.UserId,SetProfileImageThunk:e.SetProfileImageThunk,ProfilePhoto:e.ProfileInfoData.ProfilePhoto}),r.a.createElement(k,{SetProfileInfoThunk:e.SetProfileInfoThunk,ProfileInfoData:e.ProfileInfoData,MyId:e.MyId,UserId:e.UserId,UpdateStatus:e.UpdateStatus})))},y=a(37),S=a(1);var j=function(e){return function(t){var a=Object(S.f)(),n=Object(S.g)(),o=Object(S.h)();return r.a.createElement(e,Object.assign({},t,{router:{location:a,navigate:n,params:o}}))}},A=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.GetUserThunk(this.props.router.params.userId?this.props.router.params.userId:this.props.MyId),this.props.GetStatus(this.props.router.params.userId?this.props.router.params.userId:this.props.MyId)}},{key:"componentDidUpdate",value:function(e){e.UrlId!==this.props.UrlId&&(this.props.GetUserThunk(this.props.router.params.userId?this.props.router.params.userId:this.props.MyId),this.props.GetStatus(this.props.router.params.userId?this.props.router.params.userId:this.props.MyId))}},{key:"render",value:function(){return r.a.createElement(N,{MyId:this.props.MyId,UserId:this.props.router.params.userId,UpdateStatus:this.props.UpdateStatus,ProfileInfoData:this.props.ProfileInfoData,SetProfileImageThunk:this.props.SetProfileImageThunk,SetProfileInfoThunk:this.props.SetProfileInfoThunk})}}]),t}(r.a.Component);var T=Object(f.b)(function(e){return{ProfileInfoData:e.ProfilePage.ProfileInfoData,MyId:e.Auth.Auth.id,UrlId:e.Url.UserIdInURL.id}},{GetUserThunk:y.c,GetStatus:y.b,UpdateStatus:y.f,SetProfileImageThunk:y.d,SetProfileInfoThunk:y.e})(j(A)),_=a(98),O=a.n(_),U=a(102),x=a.n(U);var M=function(e){return r.a.createElement("div",{className:x.a.item},r.a.createElement("img",{alt:"",src:"https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg"}),e.text)},C=a(33),F=function(e){var t={},a=Object(C.a)(40);return a(e.PostText)&&(t.PostText=a(e.PostText)),t},D=function(e){var t=Object(I.a)({initialValues:{PostText:""},validate:F,onSubmit:function(t){e.AddPost(t.PostText),t.PostText=""}});return r.a.createElement("form",{className:O.a.AddPostForm,onSubmit:t.handleSubmit},r.a.createElement("div",{className:O.a.AddPost},r.a.createElement("span",{className:t.errors.PostText?O.a.error:O.a.PostText},r.a.createElement("input",{name:"PostText",id:"PostText",type:"PostText",onChange:t.handleChange,value:t.values.PostText})),t.errors.PostText?r.a.createElement("div",{className:O.a.errorMessage},t.errors.PostText):null),r.a.createElement("button",{className:O.a.submitButton,type:"submit"},"Add Post"))};var J=function(e){var t=e.ProfilePage.PostsData.map(function(e){return r.a.createElement(M,{text:e.text,id:e.id})});return r.a.createElement("div",{className:O.a.MyPosts},r.a.createElement("div",{className:O.a.Addposts},r.a.createElement(D,{AddPost:e.AddPost})),r.a.createElement("div",{className:O.a.posts},t))},G=Object(f.b)(function(e){return{ProfilePage:e.ProfilePage}},{AddPost:y.a})(J);var L=function(e){return r.a.createElement("div",{className:s.a.profile},r.a.createElement(T,null),r.a.createElement(G,null))},V=a(97);t.default=Object(o.c)(V.a,Object(f.b)(function(e){return{}},{}))(j(function(){return r.a.createElement(L,null)}))},96:function(e,t,a){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__3mJj3",info:"ProfileInfo_info__2VCz4",NikName:"ProfileInfo_NikName__2XfWG",status:"ProfileInfo_status__39MEO",description:"ProfileInfo_description__1F5b4"}},97:function(e,t,a){"use strict";var n=a(10),r=a(0),o=a.n(r),i=a(1);t.a=function(e){return Object(n.b)(function(e){return{isAuth:e.Auth.Auth.isAuth}})(function(t){return t.isAuth?o.a.createElement(e,t):o.a.createElement(i.a,{to:"/login"})})}},98:function(e,t,a){e.exports={textarea:"MyPosts_textarea__3JGmV",errorMessage:"MyPosts_errorMessage__1Zvkv",error:"MyPosts_error__2jqp2"}}}]);
//# sourceMappingURL=3.c2987cfe.chunk.js.map