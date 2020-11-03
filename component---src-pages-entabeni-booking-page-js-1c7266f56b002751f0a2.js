(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{AJBQ:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("wd/R"),o=t("Wbzz"),i=t("tjd4"),c=t("o0o1"),d=t.n(c),m=(t("ls82"),t("HaE+")),s=t("QojX"),u=t("cWnB"),p=t("7vrA"),E=t("JI6e"),b=t("zLVn"),v=t("wx14"),h=t("TSYQ"),C=t.n(h),f=t("YdCC"),g=t("vUet"),y=Object(f.a)("input-group-append"),k=Object(f.a)("input-group-prepend"),N=Object(f.a)("input-group-text",{Component:"span"}),L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,l=e.className,o=e.as,i=void 0===o?"div":o,c=Object(b.a)(e,["bsPrefix","size","className","as"]);return t=Object(g.a)(t,"input-group"),r.a.createElement(i,Object(v.a)({ref:a},c,{className:C()(l,t,n&&t+"-"+n)}))}));L.displayName="InputGroup";var F=Object(v.a)({},L,{Text:N,Radio:function(e){return r.a.createElement(N,null,r.a.createElement("input",Object(v.a)({type:"radio"},e)))},Checkbox:function(e){return r.a.createElement(N,null,r.a.createElement("input",Object(v.a)({type:"checkbox"},e)))},Append:y,Prepend:k}),x=t("KYPV"),I=t("UGp+"),j=t("fQao"),w=t.n(j),O=I.b({firstName:I.c().required(),lastName:I.c().required(),email:I.c().required(),phoneNumber:I.c().required(),addressLine1:I.c().required(),addressLine2:I.c().required(),city:I.c().required(),country:I.c().required(),postcode:I.c().required()});var G=function(){return r.a.createElement(p.a,null,r.a.createElement(x.a,{validationSchema:O,initialValues:{firstName:"",lastName:""},onSubmit:function(){var e=Object(m.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:alert(JSON.stringify(a,null,2));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},(function(e){var a=e.handleSubmit,t=e.handleChange,n=(e.handleBlur,e.values),l=e.touched,o=(e.isValid,e.errors);return r.a.createElement(s.a,{noValidate:!0,onSubmit:a,className:w.a.form},r.a.createElement(s.a.Row,null,r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik01"},r.a.createElement(s.a.Label,null,"First name"),r.a.createElement(s.a.Control,{type:"text",placeholder:"First name",name:"firstName",value:n.firstName,onChange:t,isValid:l.firstName&&!o.firstName}),r.a.createElement(s.a.Control.Feedback,null,"Looks good!")),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik02"},r.a.createElement(s.a.Label,null,"Last name"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Last name",name:"lastName",value:n.lastName,onChange:t,isValid:l.lastName&&!o.lastName}),r.a.createElement(s.a.Control.Feedback,null,"Looks good!")),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik03"},r.a.createElement(s.a.Label,null,"Email"),r.a.createElement(F,null,r.a.createElement(F.Prepend,null,r.a.createElement(F.Text,{id:"inputGroupPrepend"},"@")),r.a.createElement(s.a.Control,{type:"email",placeholder:"Email","aria-describedby":"inputGroupPrepend",name:"email",value:n.email,onChange:t,isInvalid:!!o.email}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.email)))),r.a.createElement(s.a.Row,null,r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik04"},r.a.createElement(s.a.Label,null,"Phone Number"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Phone number",name:"phoneNumber",value:n.phoneNumber,onChange:t,isInvalid:!!o.phoneNumber}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.phoneNumber)),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik05"},r.a.createElement(s.a.Label,null,"Address 1"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Address 1",name:"addressLine1",value:n.addressLine1,onChange:t,isInvalid:!!o.addressLine1}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.addressLine1)),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik06"},r.a.createElement(s.a.Label,null,"Address 2"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Address 2",name:"addressLine2",value:n.addressLine2,onChange:t,isInvalid:!!o.addressLine2}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.addressLine2)),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik07"},r.a.createElement(s.a.Label,null,"City"),r.a.createElement(s.a.Control,{type:"text",placeholder:"City",name:"city",value:n.city,onChange:t,isInvalid:!!o.city}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.city)),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik08"},r.a.createElement(s.a.Label,null,"Country"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Country",name:"country",value:n.country,onChange:t,isInvalid:!!o.country}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.country)),r.a.createElement(s.a.Group,{as:E.a,md:"4",controlId:"validationFormik09"},r.a.createElement(s.a.Label,null,"Postcode"),r.a.createElement(s.a.Control,{type:"text",placeholder:"Postcode",name:"postcode",value:n.postcode,onChange:t,isInvalid:!!o.postcode}),r.a.createElement(s.a.Control.Feedback,{type:"invalid"},o.postcode))),r.a.createElement(u.a,{type:"submit"},"Submit form"))})))},P=t("CNu1"),S=t.n(P),V=t("nBgg"),q=t("sVuz"),D=t("aYqb");a.default=function(e){var a=e.location,t=Object(n.useState)(null),c=t[0],d=t[1],m=Object(n.useState)(null),s=m[0],u=m[1],p=Object(n.useState)(void 0),E=p[0],b=p[1],v=Object(n.useState)(void 0),h=v[0],C=v[1];return Object(n.useEffect)((function(){a&&a.state&&(a.state.startDate&&d(l(new Date(a.state.startDate))),a.state.endDate&&u(l(new Date(a.state.endDate))),a.state.bookingValue&&b(a.state.bookingValue),a.state.guestValue&&C(a.state.guestValue))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:S.a.paragraphContainerBookingPage},r.a.createElement(i.d,null),r.a.createElement(o.Link,{to:"/"},r.a.createElement("h2",{className:S.a.headingStyleBookingPage},"Entabeni")),r.a.createElement("p",{className:S.a.paragraphStyles},"Secure booking")),r.a.createElement(q.a,{handleBookingChange:function(){},bookingValue:E}),r.a.createElement("div",{className:S.a.inputFormsWrappers},r.a.createElement(V.a,{handleDatesChange:function(e){var a=e.startDate,t=e.endDate;d(a),u(t)},startDate:c,endDate:s})),r.a.createElement(D.a,{handleGuestChange:function(){},guestValue:h}),r.a.createElement(G,null))}},fQao:function(e,a,t){e.exports={form:"entabeni-booking-form-module--form--1bpv3"}}}]);
//# sourceMappingURL=component---src-pages-entabeni-booking-page-js-1c7266f56b002751f0a2.js.map