(self.webpackChunksd_web=self.webpackChunksd_web||[]).push([[678],{6817:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(3168),c=t(7544),a=t(1082),o=t(3723),i=t(5697),s=t.n(i),u=t(3639),l=t(994),d=t(7408),f=t(4942),v=t(885),p=t(5987),h=t(5655),m=t(7294);var b=function(e,n){var t=(0,m.useRef)(!0);(0,m.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},x=t(9424),j=t(6400),y=t(9129),g=Math.pow(2,31)-1;function O(e,n,t){var r=t-Date.now();e.current=r<=g?setTimeout(n,r):setTimeout((function(){return O(e,n,t)}),g)}function w(){var e=(0,j.Z)(),n=(0,m.useRef)();return(0,y.Z)((function(){return clearTimeout(n.current)})),(0,m.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,c){void 0===c&&(c=0),e()&&(t(),c<=g?n.current=setTimeout(r,c):O(n,r,Date.now()+c))},clear:t}}),[])}var N=t(6029),k=t(5900),Z=t.n(k),C=t(5210),I=(0,t(8870).Z)("carousel-caption"),P=t(9541),S=t(5893),E=["as","bsPrefix","className"];function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=m.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,c=e.bsPrefix,a=e.className,o=(0,p.Z)(e,E),i=Z()(a,(0,P.vE)(c,"carousel-item"));return(0,S.jsx)(r,T(T({ref:n},o),{},{className:i}))}));M.displayName="CarouselItem";var L=M;function R(e,n){var t=0;return m.Children.map(e,(function(e){return m.isValidElement(e)?n(e,t++):e}))}var F=t(1831),A=t(9059),G=t(558),K=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var V=m.forwardRef((function(e,n){var t=(0,C.Ch)(e,{activeIndex:"onSelect"}),r=t.as,c=void 0===r?"div":r,a=t.bsPrefix,o=t.slide,i=t.fade,s=t.controls,u=t.indicators,l=t.indicatorLabels,d=t.activeIndex,f=t.onSelect,j=t.onSlide,y=t.onSlid,g=t.interval,O=t.keyboard,k=t.onKeyDown,I=t.pause,E=t.onMouseOver,D=t.onMouseOut,T=t.wrap,M=t.touch,L=t.onTouchStart,B=t.onTouchMove,U=t.onTouchEnd,V=t.prevIcon,X=t.prevLabel,$=t.nextIcon,_=t.nextLabel,q=t.variant,z=t.className,J=t.children,Q=(0,p.Z)(t,K),W=(0,P.vE)(a,"carousel"),Y=(0,P.SC)(),ee=(0,m.useRef)(null),ne=(0,m.useState)("next"),te=(0,v.Z)(ne,2),re=te[0],ce=te[1],ae=(0,m.useState)(!1),oe=(0,v.Z)(ae,2),ie=oe[0],se=oe[1],ue=(0,m.useState)(!1),le=(0,v.Z)(ue,2),de=le[0],fe=le[1],ve=(0,m.useState)(d||0),pe=(0,v.Z)(ve,2),he=pe[0],me=pe[1];(0,m.useEffect)((function(){de||d===he||(ee.current?ce(ee.current):ce((d||0)>he?"next":"prev"),o&&fe(!0),me(d||0))}),[d,de,he,o]),(0,m.useEffect)((function(){ee.current&&(ee.current=null)}));var be,xe=0;!function(e,n){var t=0;m.Children.forEach(e,(function(e){m.isValidElement(e)&&n(e,t++)}))}(J,(function(e,n){++xe,n===d&&(be=e.props.interval)}));var je=(0,x.Z)(be),ye=(0,m.useCallback)((function(e){if(!de){var n=he-1;if(n<0){if(!T)return;n=xe-1}ee.current="prev",null==f||f(n,e)}}),[de,he,f,T,xe]),ge=(0,h.Z)((function(e){if(!de){var n=he+1;if(n>=xe){if(!T)return;n=0}ee.current="next",null==f||f(n,e)}})),Oe=(0,m.useRef)();(0,m.useImperativeHandle)(n,(function(){return{element:Oe.current,prev:ye,next:ge}}));var we=(0,h.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Oe.current)&&(Y?ye():ge())})),Ne="next"===re?"start":"end";b((function(){o||(null==j||j(he,Ne),null==y||y(he,Ne))}),[he]);var ke="".concat(W,"-item-").concat(re),Ze="".concat(W,"-item-").concat(Ne),Ce=(0,m.useCallback)((function(e){(0,A.Z)(e),null==j||j(he,Ne)}),[j,he,Ne]),Ie=(0,m.useCallback)((function(){fe(!1),null==y||y(he,Ne)}),[y,he,Ne]),Pe=(0,m.useCallback)((function(e){if(O&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Y?ge(e):ye(e));case"ArrowRight":return e.preventDefault(),void(Y?ye(e):ge(e))}null==k||k(e)}),[O,k,ye,ge,Y]),Se=(0,m.useCallback)((function(e){"hover"===I&&se(!0),null==E||E(e)}),[I,E]),Ee=(0,m.useCallback)((function(e){se(!1),null==D||D(e)}),[D]),De=(0,m.useRef)(0),Te=(0,m.useRef)(0),Me=w(),Le=(0,m.useCallback)((function(e){De.current=e.touches[0].clientX,Te.current=0,"hover"===I&&se(!0),null==L||L(e)}),[I,L]),Re=(0,m.useCallback)((function(e){e.touches&&e.touches.length>1?Te.current=0:Te.current=e.touches[0].clientX-De.current,null==B||B(e)}),[B]),Fe=(0,m.useCallback)((function(e){if(M){var n=Te.current;Math.abs(n)>40&&(n>0?ye(e):ge(e))}"hover"===I&&Me.set((function(){se(!1)}),g||void 0),null==U||U(e)}),[M,I,ye,ge,Me,g,U]),Ae=null!=g&&!ie&&!de,Ge=(0,m.useRef)();(0,m.useEffect)((function(){var e,n;if(Ae){var t=Y?ye:ge;return Ge.current=window.setInterval(document.visibilityState?we:t,null!=(e=null!=(n=je.current)?n:g)?e:void 0),function(){null!==Ge.current&&clearInterval(Ge.current)}}}),[Ae,ye,ge,je,g,we,Y]);var Ke=(0,m.useMemo)((function(){return u&&Array.from({length:xe},(function(e,n){return function(e){null==f||f(n,e)}}))}),[u,xe,f]);return(0,S.jsxs)(c,H(H({ref:Oe},Q),{},{onKeyDown:Pe,onMouseOver:Se,onMouseOut:Ee,onTouchStart:Le,onTouchMove:Re,onTouchEnd:Fe,className:Z()(z,W,o&&"slide",i&&"".concat(W,"-fade"),q&&"".concat(W,"-").concat(q)),children:[u&&(0,S.jsx)("div",{className:"".concat(W,"-indicators"),children:R(J,(function(e,n){return(0,S.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=l&&l.length?l[n]:"Slide ".concat(n+1),className:n===he?"active":void 0,onClick:Ke?Ke[n]:void 0,"aria-current":n===he},n)}))}),(0,S.jsx)("div",{className:"".concat(W,"-inner"),children:R(J,(function(e,n){var t=n===he;return o?(0,S.jsx)(G.Z,{in:t,onEnter:t?Ce:void 0,onEntered:t?Ie:void 0,addEndListener:F.Z,children:function(n,r){return m.cloneElement(e,H(H({},r),{},{className:Z()(e.props.className,t&&"entered"!==n&&ke,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&Ze)}))}}):m.cloneElement(e,{className:Z()(e.props.className,t&&"active")})}))}),s&&(0,S.jsxs)(S.Fragment,{children:[(T||0!==d)&&(0,S.jsxs)(N.Z,{className:"".concat(W,"-control-prev"),onClick:ye,children:[V,X&&(0,S.jsx)("span",{className:"visually-hidden",children:X})]}),(T||d!==xe-1)&&(0,S.jsxs)(N.Z,{className:"".concat(W,"-control-next"),onClick:ge,children:[$,_&&(0,S.jsx)("span",{className:"visually-hidden",children:_})]})]})]}))}));V.displayName="Carousel",V.defaultProps=U;var X=Object.assign(V,{Caption:I,Item:L}),$=t(262),_=t(2009),q=t(8439);function z({data:e}){const{postgres:{allImageBoosts:{nodes:n}},allFile:{nodes:t}}=e,i=n.filter((e=>Boolean(e.paid)));return(0,S.jsxs)(_.Z,{children:[(0,S.jsx)($.Z,{title:"Home"}),(0,S.jsx)(u.Z,{children:i.length?(0,S.jsxs)(m.Fragment,{children:[(0,S.jsx)("h1",{children:"Newest Images"}),(0,S.jsx)(l.Z,{className:"justify-content-center",children:(0,S.jsx)(d.Z,{md:10,children:(0,S.jsx)(X,{indicators:!1,className:"mt-4",nextIcon:(0,S.jsx)(c.G,{icon:r.FR9,color:"black"}),prevIcon:(0,S.jsx)(c.G,{icon:r.OFe,color:"black"}),children:i.slice(0,Math.min(5,i.length)).map((e=>{return(0,S.jsx)(X.Item,{children:(0,S.jsxs)(l.Z,{children:[(0,S.jsx)(d.Z,{xs:2}),(0,S.jsx)(d.Z,{xs:8,className:"text-center",children:(0,S.jsx)(a.Link,{to:(0,q.getImageUrl)(e),children:(0,S.jsx)(o.G,{image:(n=e.uuid,n?(0,o.c)(null===(r=t.find((e=>e.relativePath===`${n}.png`)))||void 0===r||null===(c=r.childImageSharp)||void 0===c?void 0:c.gatsbyImageData):{}),alt:"Featured Post"})})})]})},e.uuid);var n,r,c}))})})})]}):(0,S.jsx)("h1",{children:"Check back soon for images!"})})]})}z.propTypes={data:s().object.isRequired}},8439:function(e){e.exports={getImageUrl:e=>`/image/${e.uuid}`}}}]);
//# sourceMappingURL=component---src-pages-index-js-26db674d97e9a528d68a.js.map