(this.webpackJsonpproject01=this.webpackJsonpproject01||[]).push([[3],{298:function(e,t,a){e.exports={content_img:"ProfileInfo_content_img__1UmmN",item:"ProfileInfo_item__1wD8h",descriptionBlock:"ProfileInfo_descriptionBlock__1K-RV",avatar:"ProfileInfo_avatar__1rJ1k"}},299:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__25x64",posts:"MyPosts_posts__1AiDp"}},300:function(e,t,a){e.exports={item:"Post_item__1nWSQ"}},301:function(e,t,a){"use strict";a.r(t);var n=a(29),s=a(30),r=a(32),o=a(31),i=a(0),u=a.n(i),l=a(298),c=a.n(l),p=a(33),m=a(129),f=function(e){var t=Object(i.useState)(!1),a=Object(m.a)(t,2),n=a[0],s=a[1],r=Object(i.useState)(e.status),o=Object(m.a)(r,2),l=o[0],c=o[1];Object(i.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement("div",null,!n&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"set a status message")),n&&u.a.createElement("div",null,u.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(l)},onChange:function(e){c(e.currentTarget.value)},value:l})))},d=function(e){var t=e.profile,a=e.status,n=e.updateStatus,s=e.sendPhoto,r=e.isOwner;if(!t)return u.a.createElement(p.a,null);return u.a.createElement("div",null,u.a.createElement("div",{className:c.a.descriptionBlock},u.a.createElement("div",null,u.a.createElement("img",{className:c.a.avatar,src:null!=t.photos.large?t.photos.large:"https://vectorified.com/images/no-profile-picture-icon-13.png"}),r&&u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})),u.a.createElement(f,{status:a,updateStatus:n})))},h=a(96),v=a(34),E=a(299),b=a.n(E),g=a(300),P=a.n(g),_=function(e){return u.a.createElement("div",{className:P.a.item},u.a.createElement("img",{src:"https://www.w3schools.com/howto/img_avatar.png"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,"Likes ",e.likesCount)))},O=a(86),j=a(128),k=a(61),w=a(35),S=Object(k.a)(20),y=Object(j.a)({form:"ProfileAddNewPost"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",null,u.a.createElement(O.a,{placeholder:"Write your post text",component:w.b,name:"newPostText",validate:[k.b,S]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))})),I=u.a.memo((function(e){var t=Object(v.a)(e.posts).reverse().map((function(e){return u.a.createElement(_,{message:e.message,likesCount:e.likesCount})}));return u.a.createElement("div",{className:b.a.postsBlock},u.a.createElement("h3",null,"My posts"),u.a.createElement("div",null,u.a.createElement(y,{onSubmit:function(t){e.addNewPost(t.newPostText)}})),u.a.createElement("div",{className:b.a.posts},t))})),N=a(16),x=Object(N.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addNewPost:function(t){e(Object(h.a)(t))}}}))(I),B=function(e){return u.a.createElement("div",null,u.a.createElement(d,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,sendPhoto:e.sendPhoto}),u.a.createElement(x,null))},C=a(9),U=a(8),A=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!=this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,sendPhoto:this.props.sendPhoto}))}}]),a}(u.a.Component);t.default=Object(U.d)(Object(N.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:h.d,getStatus:h.c,updateStatus:h.f,sendPhoto:h.e}),C.f)(A)}}]);
//# sourceMappingURL=3.f2bfcfab.chunk.js.map