(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),s=t("vUet"),u=t("YdCC"),d=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(n.a)({},a,{ref:t,className:c()(a.className,e)}))}))},m=t("Wzyw"),f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return o.a.createElement(d,Object(n.a)({ref:a,className:c()(i?f+"-"+i:f,l)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var b=f,h=d("h5"),v=d("h6"),p=Object(u.a)("card-body"),g=Object(u.a)("card-title",{Component:h}),E=Object(u.a)("card-subtitle",{Component:v}),y=Object(u.a)("card-link",{Component:"a"}),w=Object(u.a)("card-text",{Component:"p"}),O=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,u=e.bg,d=e.text,f=e.border,b=e.body,h=e.children,v=e.as,g=void 0===v?"div":v,E=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.a)(t,"card"),w=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(m.a.Provider,{value:w},o.a.createElement(g,Object(n.a)({ref:a},E,{className:c()(l,y,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),b?o.a.createElement(p,null,h):h))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=b,j.Title=g,j.Subtitle=E,j.Body=p,j.Link=y,j.Text=w,j.Header=O,j.Footer=x,j.ImgOverlay=N;a.a=j},MBJH:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),s=t("vUet"),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,b=e.variant,h=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(s.a)(t,"table"),g=c()(l,p,b&&p+"-"+b,f&&p+"-"+f,i&&p+"-striped",u&&p+"-bordered",d&&p+"-borderless",m&&p+"-hover"),E=o.a.createElement("table",Object(n.a)({},v,{className:g,ref:a}));if(h){var y=p+"-responsive";return"string"==typeof h&&(y=y+"-"+h),o.a.createElement("div",{className:y},E)}return E}));a.a=u},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"imageQuery",(function(){return K})),t.d(a,"query",(function(){return _}));var n=t("q1tI"),r=t.n(n),l=t("cWnB"),c=t("MBJH"),i=t("8k0H"),o=t("6d1X"),s=t("CNu1"),u=t.n(s),d=t("5ZwA"),m=t("tjd4"),f=t("ma3e"),b=t("jUdl"),h=t("6xyR"),v=t("Wbzz"),p=t("9eSz"),g=t.n(p),E=t("wx14"),y=t("zLVn"),w=t("ZCiN");var O=function(e,a){var t=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!t.current)return e();t.current=!1}),a)},x=t("Xyuu"),N=t("XcHJ");function j(e){var a,t,r=(a=e,(t=Object(n.useRef)(a)).current=a,t);Object(n.useEffect)((function(){return function(){return r.current()}}),[])}var S=Math.pow(2,31)-1;function k(){var e=Object(N.a)(),a=Object(n.useRef)();return j((function(){return clearTimeout(a.current)})),Object(n.useMemo)((function(){var t=function(){return clearTimeout(a.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(t(),r<=S?a.current=setTimeout(n,r):function e(a,t,n){var r=n-Date.now();a.current=r<=S?setTimeout(t,r):setTimeout((function(){return e(a,t,n)}),S)}(a,n,Date.now()+r))},clear:t}}),[])}var I=t("TSYQ"),T=t.n(I),C=t("YECM"),P=t("dRu9"),B=t("17x9"),L=t.n(B),M=t("JCAc"),R=t("YdCC"),H=Object(R.a)("carousel-caption"),Y=t("vUet"),D=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,l=e.bsPrefix,c=e.children,i=e.className,o=Object(y.a)(e,["as","bsPrefix","children","className"]),s=T()(i,Object(Y.a)(l,"carousel-item"));return r.a.createElement(n,Object(E.a)({ref:a},o,{className:s}),c)}));D.displayName="CarouselItem";var z=D;function A(e,a){var t=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?a(e,t++):e}))}var W=t("dbZe"),V=t("z+q/"),F={bsPrefix:L.a.string,as:L.a.elementType,slide:L.a.bool,fade:L.a.bool,controls:L.a.bool,indicators:L.a.bool,activeIndex:L.a.number,onSelect:L.a.func,onSlide:L.a.func,onSlid:L.a.func,interval:L.a.number,keyboard:L.a.bool,pause:L.a.oneOf(["hover",!1]),wrap:L.a.bool,touch:L.a.bool,prevIcon:L.a.node,prevLabel:L.a.string,nextIcon:L.a.node,nextLabel:L.a.string},q={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var J=r.a.forwardRef((function(e,a){var t=Object(M.a)(e,{activeIndex:"onSelect"}),l=t.as,c=void 0===l?"div":l,i=t.bsPrefix,o=t.slide,s=t.fade,u=t.controls,d=t.indicators,m=t.activeIndex,f=t.onSelect,b=t.onSlide,h=t.onSlid,v=t.interval,p=t.keyboard,g=t.onKeyDown,N=t.pause,j=t.onMouseOver,S=t.onMouseOut,I=t.wrap,B=t.touch,L=t.onTouchStart,R=t.onTouchMove,H=t.onTouchEnd,D=t.prevIcon,z=t.prevLabel,F=t.nextIcon,q=t.nextLabel,J=t.className,X=t.children,G=Object(y.a)(t,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),U=Object(Y.a)(i,"carousel"),Q=Object(n.useRef)(null),Z=Object(n.useState)("next"),K=Z[0],_=Z[1],$=Object(n.useState)(!1),ee=$[0],ae=$[1],te=Object(n.useState)(m||0),ne=te[0],re=te[1];ee||m===ne||(Q.current?_(Q.current):_((m||0)>ne?"next":"prev"),o&&ae(!0),re(m||0)),Object(n.useEffect)((function(){Q.current&&(Q.current=null)}));var le,ce=0;!function(e,a){var t=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&a(e,t++)}))}(X,(function(e,a){++ce,a===m&&(le=e.props.interval)}));var ie=Object(x.a)(le),oe=Object(n.useCallback)((function(e){if(!ee){var a=ne-1;if(a<0){if(!I)return;a=ce-1}Q.current="prev",f&&f(a,e)}}),[ee,ne,f,I,ce]),se=Object(w.a)((function(e){if(!ee){var a=ne+1;if(a>=ce){if(!I)return;a=0}Q.current="next",f&&f(a,e)}})),ue=Object(n.useRef)();Object(n.useImperativeHandle)(a,(function(){return{element:ue.current,prev:oe,next:se}}));var de=Object(w.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&se()})),me="next"===K?"left":"right";O((function(){o||(b&&b(ne,me),h&&h(ne,me))}),[ne]);var fe=U+"-item-"+K,be=U+"-item-"+me,he=Object(n.useCallback)((function(e){Object(V.a)(e),b&&b(ne,me)}),[b,ne,me]),ve=Object(n.useCallback)((function(){ae(!1),h&&h(ne,me)}),[h,ne,me]),pe=Object(n.useCallback)((function(e){if(p&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void oe(e);case"ArrowRight":return e.preventDefault(),void se(e)}g&&g(e)}),[p,g,oe,se]),ge=Object(n.useState)(!1),Ee=ge[0],ye=ge[1],we=Object(n.useCallback)((function(e){"hover"===N&&ye(!0),j&&j(e)}),[N,j]),Oe=Object(n.useCallback)((function(e){ye(!1),S&&S(e)}),[S]),xe=Object(n.useRef)(0),Ne=Object(n.useRef)(0),je=Object(n.useState)(!1),Se=je[0],ke=je[1],Ie=k(),Te=Object(n.useCallback)((function(e){xe.current=e.touches[0].clientX,Ne.current=0,B&&ke(!0),L&&L(e)}),[B,L]),Ce=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-xe.current,R&&R(e)}),[R]),Pe=Object(n.useCallback)((function(e){if(B){var a=Ne.current;if(Math.abs(a)<=40)return;a>0?oe(e):se(e)}Ie.set((function(){ke(!1)}),v||void 0),H&&H(e)}),[B,oe,se,Ie,v,H]),Be=null!=v&&!Ee&&!Se&&!ee,Le=Object(n.useRef)();Object(n.useEffect)((function(){var e,a;if(Be)return Le.current=window.setInterval(document.visibilityState?de:se,null!=(e=null!=(a=ie.current)?a:v)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Be,se,ie,v,de]);var Me=Object(n.useMemo)((function(){return d&&Array.from({length:ce},(function(e,a){return function(e){f&&f(a,e)}}))}),[d,ce,f]);return r.a.createElement(c,Object(E.a)({ref:ue},G,{onKeyDown:pe,onMouseOver:we,onMouseOut:Oe,onTouchStart:Te,onTouchMove:Ce,onTouchEnd:Pe,className:T()(J,U,o&&"slide",s&&U+"-fade")}),d&&r.a.createElement("ol",{className:U+"-indicators"},A(X,(function(e,a){return r.a.createElement("li",{key:a,className:a===ne?"active":void 0,onClick:Me?Me[a]:void 0})}))),r.a.createElement("div",{className:U+"-inner"},A(X,(function(e,a){var t=a===ne;return o?r.a.createElement(P.e,{in:t,onEnter:t?he:void 0,onEntered:t?ve:void 0,addEndListener:C.a},(function(a){return r.a.cloneElement(e,{className:T()(e.props.className,t&&"entered"!==a&&fe,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&be)})})):r.a.cloneElement(e,{className:T()(e.props.className,t&&"active")})}))),u&&r.a.createElement(r.a.Fragment,null,(I||0!==m)&&r.a.createElement(W.a,{className:U+"-control-prev",onClick:oe},D,z&&r.a.createElement("span",{className:"sr-only"},z)),(I||m!==ce-1)&&r.a.createElement(W.a,{className:U+"-control-next",onClick:se},F,q&&r.a.createElement("span",{className:"sr-only"},q))))}));J.displayName="Carousel",J.propTypes=F,J.defaultProps=q,J.Caption=H,J.Item=z;var X=J,G=t("vraL"),U=t.n(G),Q=function(e){var a=e.slideImage1,t=e.slideImage2,l=e.slideImage3,c=e.slideImage4,i=e.slideImage5,o=Object(n.useState)(),s=o[0],u=o[1];return r.a.createElement(X,{activeIndex:s,onSelect:function(e){u(e)}},r.a.createElement(X.Item,null,r.a.createElement(g.a,{fluid:a,alt:"First slide",className:U.a.carousalImage})),r.a.createElement(X.Item,null,r.a.createElement(g.a,{fluid:t,className:U.a.carousalImage,alt:"Second slide"})),r.a.createElement(X.Item,null,r.a.createElement(g.a,{fluid:l,className:U.a.carousalImage,alt:"Third slide"})),r.a.createElement(X.Item,null,r.a.createElement(g.a,{fluid:c,className:U.a.carousalImage,alt:"Fourth slide"})),r.a.createElement(X.Item,null,r.a.createElement(g.a,{fluid:i,className:U.a.carousalImage,alt:"Fifth slide"})))},Z=t("0ogs"),K="1209602701",_="2315515540";a.default=function(e){var a=e.data;return r.a.createElement(i.a,{pageInfo:{pageName:"Home"}},r.a.createElement(o.a,{title:"Home",keywords:["Plett","Beach","House","Entabeni","luxury","accomodation","Plettenberg","Bay","holiday","home","Garden","route","family","bedrooms","rent","sea","views","central","location"]}),r.a.createElement(Q,{slideImage1:a.slide1.childImageSharp.fluid,slideImage2:a.slide2.childImageSharp.fluid,slideImage3:a.slide3.childImageSharp.fluid,slideImage4:a.slide4.childImageSharp.fluid,slideImage5:a.slide5.childImageSharp.fluid}),r.a.createElement("div",{className:u.a.bookingFormWrapperHomePage},r.a.createElement(Z.a,{onSubmit:function(e,a,t,n){Object(v.navigate)("/entabeni-booking-page/",{state:{endDate:a.format("YYYY-MM-DD"),startDate:e.format("YYYY-MM-DD"),bookingValue:t,guestValue:n}})}})),r.a.createElement("div",{className:u.a.paragraphContainer},r.a.createElement(m.d,null),r.a.createElement("h2",{className:u.a.headingStyle},a.site.siteMetadata.title),r.a.createElement("p",{className:u.a.paragraphStyles},"Swim in the Indian ocean, see the whales in the bay, take long beach walks and take in the beautiful panaromic views when you base yourself at Entabeni Beach House. Perfectly located to explore all that the Garden Route has to offer, Entabeni offers guests the chance to totally unplug, reset and relax in a magnificent setting. Get in touch to book your stay. Discover our exquisite interiors, beautiful coastal town, pristine beaches, friendly locals and wealth of activities in the garden route.")),r.a.createElement(c.a,{responsive:"sm",className:u.a.tableAddressContainer},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{className:u.a.SvgAddress,href:"https://www.google.com/maps/place/5+Harker+St,+Plettenberg+Bay,+6600,+South+Africa/@-34.0583289,23.3734568,17z/data=!3m1!4b1!4m5!3m4!1s0x1e78e20c8f14ba5d:0x312f5c5696e65c04!8m2!3d-34.0583334!4d23.3756455",target:"_blank",rel:"noreferrer"},r.a.createElement(m.b,{className:u.a.positionMarkerSvgStyle}),"5 Harker Street, Plettenberg Bay, South Africa"))))),r.a.createElement("div",{className:u.a.imageHeadingContainer},r.a.createElement("div",{className:u.a.imageOpacityHover},r.a.createElement(g.a,{fluid:a.image1.childImageSharp.fluid,alt:"couple walking on beach"})),r.a.createElement("div",{className:u.a.centeredTextOverImage},r.a.createElement(m.d,null),r.a.createElement("h2",{className:u.a.headingStyle},"Paradise Found"),r.a.createElement(l.a,{variant:"outline-light",href:"/entabeni-booking-page/"},"Book your stay"))),r.a.createElement("div",{className:u.a.paragraphContainerLifeWellLived},r.a.createElement(m.d,null),r.a.createElement("h2",{className:u.a.headingStyle},"Life. Well lived."),r.a.createElement("p",{className:u.a.paragraphStyles},"As our valued guests always expect and deserve the best, our relentless pursuit for perfection never ends at our luxury accomodation. We offer elegant luxury in the heart of a breath-taking nature. Sleep well and look good while doing it. Here 400-thread count sheets and rainfall showers come standard. Because we know that you will remember the countless beautiful memories when your holiday is over. This is the perfect holiday accomodation for your family holiday.")),r.a.createElement(b.a,{className:u.a.cardGroupStyles},r.a.createElement(h.a,{className:u.a.cardStyles},r.a.createElement(g.a,{variant:"top",fluid:a.image3.childImageSharp.fluid,alt:"kitchen"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{className:u.a.cardTitleStyles},"Best activites for the family"),r.a.createElement(h.a.Text,null,"Plettenberg Bay is a great location and offers many fun activities for the family. You can play polo in the morning, have lunch on a beautiful wine farm, spend the rest of the afternoon on the beach and have sundowners at Robberg Nature Reserve that overlooks the beautiful coastal town, sea and mountain ranges."),r.a.createElement(v.Link,{to:"/experiences/"},r.a.createElement(l.a,{variant:"outline-dark"},"Book experiences now")))),r.a.createElement(h.a,null,r.a.createElement(g.a,{fluid:a.image4.childImageSharp.fluid,variant:"top",alt:"onsuite bedroom"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{className:u.a.cardTitleStyles},"Luxury signiture"),r.a.createElement(h.a.Text,null,"Our 250 sq. ft. full bed guest rooms are beautifully decorated and includes textured wood accents, ocean-hued carpeting, vintage-inspired furniture, clean lines and sleek décor. Refresh in the bathroom with white marble rain shower and illuminated vanity mirrors, premium bath products and cozy bathrobe. Enjoy complimentary WiFi, a 55-inch HDTV, clock radio with Bluetooth, as well as ample outlets for charging any device. Three en suite bedrooms."),r.a.createElement(v.Link,{to:"/entabeni-booking-page/"},r.a.createElement(l.a,{variant:"outline-dark"},"Book accomodation now")))),r.a.createElement(h.a,null,r.a.createElement(g.a,{fluid:a.image5.childImageSharp.fluid,variant:"top",alt:"seaview from Entabene"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{className:u.a.cardTitleStyles},"Wake up to the best views of Plett"),r.a.createElement(h.a.Text,null,"Located in central Plettenberg Bay and walking distance to the beach, shops and restaurants. The stunning Entabeni House has beautiful views of the Beacon Isle beach, Robberg Heads and the Tsitsikamma mountain range. It is the perfect holiday beach home for you and your family to build beautiful memories and have fun."),r.a.createElement(v.Link,{to:"/gallery/"},r.a.createElement(l.a,{variant:"outline-dark"},"View gallery"))))),r.a.createElement(h.a,null,r.a.createElement(h.a.Body,null,r.a.createElement(f.e,null),r.a.createElement(h.a.Title,{className:u.a.cardTitleStyles},"Guest Reviews"),r.a.createElement(h.a.Subtitle,null,'"Experience of a lifetime!"'),r.a.createElement(h.a.Text,{bsPrefix:u.a.paragraphStyles},"We had the experience of a lifetime and enjoyed every minute of it. Plett is a very special place and a beautiful house in the best location. Booking activites based on our interests through the website was amazing! You furthermore got exclusive offers/discounts booking the activities through the website. Very informative and it made our stay very special. We will never forget our holiday in Plett, South Africa and all the fun activities we did! Thank you so much for such an unforgettable experience. ",r.a.createElement("br",null),"Mr. & Mrs. J. Finnegan - ",r.a.createElement("em",null,"May 2019")),r.a.createElement(v.Link,{to:"/guest-reviews/"},r.a.createElement(l.a,{variant:"dark"},"See all reviews")))),r.a.createElement("div",{className:u.a.imageHeadingContainer},r.a.createElement("div",{className:u.a.imageOpacityHover},r.a.createElement(g.a,{fluid:a.image2.childImageSharp.fluid,alt:"Lady on beach looking at sunset"})),r.a.createElement("div",{className:u.a.centeredTextOverImage},r.a.createElement(m.d,null),r.a.createElement("h2",{className:u.a.headingStyle},"Ideal spot in Plett"),r.a.createElement(l.a,{variant:"outline-light",href:"https://www.google.com/maps/place/5+Harker+St,+Plettenberg+Bay,+6600,+South+Africa/@-34.0583289,23.3734568,17z/data=!3m1!4b1!4m5!3m4!1s0x1e78e20c8f14ba5d:0x312f5c5696e65c04!8m2!3d-34.0583334!4d23.3756455",target:"_blank",rel:"noreferrer"},"Explore the area"))),r.a.createElement("div",{className:u.a.mapSectionContainer},r.a.createElement(d.a,null)))}},jUdl:function(e,a,t){"use strict";var n=t("YdCC");a.a=Object(n.a)("card-group")},vraL:function(e,a,t){e.exports={carousalImage:"carousal-module--carousalImage--ZrqAf"}}}]);
//# sourceMappingURL=component---src-pages-index-js-2da6ec347032b59e5e34.js.map