(this["webpackJsonpsound-interaction"]=this["webpackJsonpsound-interaction"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(4),s=a(8),o="".concat("/sound-interaction/home","/resources/"),u=function(e){return"".concat(o).concat(e)},f=a(1),d=function(){var e=u("/logo.png"),t=u("/profile.png"),a=u("/folder.png"),n=u("/heart.png");return Object(f.jsxs)("nav",{className:"sideBar",children:[Object(f.jsx)(s.b,{to:"/home",className:"sideBar__link--logo",children:Object(f.jsx)("img",{src:e,alt:""})}),Object(f.jsxs)(s.b,{to:"/profile",className:"sideBar__link",children:[Object(f.jsx)("img",{src:t,alt:""}),Object(f.jsx)("span",{className:"sideBar__name",children:"Profile"})]}),Object(f.jsxs)(s.b,{to:"/sounds",className:"sideBar__link",children:[Object(f.jsx)("img",{src:a,alt:""}),Object(f.jsx)("span",{className:"sideBar__name",children:"Your sounds"})]}),Object(f.jsxs)(s.b,{to:"/fav",className:"sideBar__link",children:[Object(f.jsx)("img",{src:n,alt:""}),Object(f.jsx)("span",{className:"sideBar__name",children:"Favorites"})]})]})},m=a(10),j=a.n(m),p=a(19),h=a.n(p),x=u("sounds/guitar.wav"),b=new j.a.Sound(x),O=function(){b.play()},C=function(){},g=new j.a.Effects.StereoPanner({pan:0});b.addEffect(g);var v=new j.a.Effects.Delay;b.addEffect(v);var E=new j.a.Effects.Distortion;b.addEffect(E);var _=j.a.context.createAnalyser();b.connect(_);var S,y,B,w,k,N=function(e){var t=e.vol,a=e.pan,n=e.feedback,c=e.time,l=e.mix,i=e.gain,s=r.a.useRef(null),o=r.a.useRef({vol:1});return r.a.useEffect((function(){new h.a((function(e){e.setup=function(){e.createCanvas(200,200);e.loadSound(x)},e.draw=function(){e.background("red"),e.text(o.current.vol,100,100)}}),s.current)}),[]),r.a.useEffect((function(){g.pan=a,b.volume=t,o.current.vol=t,v.feedback=n,v.time=c,v.mix=l,E.gain=i}),[t,a,n,c,l,i]),Object(f.jsxs)("section",{className:"soundItem",children:[Object(f.jsx)("div",{ref:s}),"SONIDO?",Object(f.jsx)("button",{onClick:O,children:"PLAY"}),Object(f.jsx)("button",{onClick:C,children:"STOP"})]})},F=Object(n.createContext)({volume:1,pan:0,feedback:0,mix:0,gain:0,time:0}),I=function(){var e=Object(n.useContext)(F).volume,t=Object(n.useContext)(F).pan,a=Object(n.useContext)(F).feedback,r=Object(n.useContext)(F).gain,c=Object(n.useContext)(F).mix,l=Object(n.useContext)(F).time;return Object(f.jsx)("section",{className:"SoundContainer",children:Object(f.jsx)(N,{deleted:!1,feedback:a,gain:r,mix:c,time:l,vol:e,pan:t})})},M=a(2),P=function(e){var t=e.name,a=e.min,n=e.max,c=e.step,l=e.initialValue,s=e.onValueChange,o=r.a.useState(l),u=Object(i.a)(o,2),d=u[0],m=u[1];return Object(f.jsxs)("div",{className:"sliderLinearEffectItem",children:[Object(f.jsx)("p",{children:t}),Object(f.jsx)("input",{type:"range",min:a,max:n,step:c,value:d,onChange:function(e){var t=parseFloat(e.target.value);m(t),s(t)}}),Object(f.jsx)("span",{children:d})]})},G=function(e){var t=e.gainChange,a=e.feedbackChange,n=e.timeChange,c=e.mixChange,l=r.a.useState(1),o=Object(i.a)(l,2),u=(o[0],o[1]),d=r.a.useState(0),m=Object(i.a)(d,2),j=(m[0],m[1]),p=function(e){u(e),t(e)},h=function(e){j(e),a(e)},x=function(e){j(e),n(e)},b=function(e){j(e),c(e)};return Object(f.jsxs)("section",{className:"soundEffectsContainer",children:[Object(f.jsxs)("article",{className:"soundEffectsContainer__effectsButtons",children:[Object(f.jsx)(s.b,{to:"/home/delay",children:"Delay"}),Object(f.jsx)(s.b,{to:"/home/eq",children:"EQ"}),Object(f.jsx)(s.b,{to:"/home/distortion",children:"Distortion"})]}),Object(f.jsx)(M.a,{path:"/home/delay",render:function(){return Object(f.jsxs)("article",{className:"soundEffectsContainer__effectsProps",children:[Object(f.jsx)(P,{name:"Feedback:",min:0,max:1,step:.1,initialValue:0,onValueChange:h}),Object(f.jsx)(P,{name:"Time:",min:0,max:1,step:.1,initialValue:0,onValueChange:x}),Object(f.jsx)(P,{name:"Mix:",min:0,max:1,step:.1,initialValue:0,onValueChange:b})]})}}),Object(f.jsx)(M.a,{path:"/home/distortion",render:function(){return Object(f.jsx)("article",{className:"soundEffectsContainer__effectsProps",children:Object(f.jsx)(P,{name:"Gain:",min:0,max:1,step:.1,initialValue:0,onValueChange:p})})}})]})},V=a(20),D=a.n(V);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function U(e,t){var a=e.title,r=e.titleId,c=R(e,["title","titleId"]);return n.createElement("svg",A({width:29,height:35,viewBox:"0 0 29 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,S||(S=n.createElement("g",{filter:"url(#filter0_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white",fillOpacity:.1}))),y||(y=n.createElement("g",{filter:"url(#filter1_bd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white",fillOpacity:.1}))),B||(B=n.createElement("g",{filter:"url(#filter2_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white"}))),w||(w=n.createElement("g",{filter:"url(#filter3_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white"}))),k||(k=n.createElement("defs",null,n.createElement("filter",{id:"filter0_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter1_bd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feGaussianBlur",{in:"BackgroundImage",stdDeviation:1}),n.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_backgroundBlur",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter2_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter3_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})))))}var T=n.forwardRef(U),L=(a.p,function(e){var t=e.name,a=(e.value,e.decimal),n=r.a.useState(1),c=Object(i.a)(n,2),l=c[0],s=c[1];return Object(f.jsxs)("div",{className:"circleEffectItem",children:[Object(f.jsx)("h5",{children:t}),Object(f.jsx)(D.a,{width:100,progressLineCap:"flat",min:0,max:100,hideLabelValue:!0,labelColor:"#FFFFFF",valueFontSize:"2rem",verticalOffset:"1rem",knobColor:"#000000",progressColorFrom:"#333DE6",progressColorTo:"#54C2F7",progressSize:10,trackColor:"#465383",trackSize:10,onChange:function(e){console.log("Changed value ".concat(e));var t=e;a&&(t/=100),s(t)},children:Object(f.jsx)(T,{x:"9",y:"9",width:"18px",height:"18px"})}),Object(f.jsx)("input",{type:"number",min:"0",max:"1",step:"0.1",value:l,onChange:function(e){var t=parseFloat(e.target.value);a&&(t/=100),s(t)}}),Object(f.jsx)("span",{children:l})]})}),Z=function(){var e=r.a.useState(1),t=Object(i.a)(e,2),a=t[0];t[1];return Object(f.jsxs)("section",{className:"soundPropsContainer",children:[Object(f.jsx)("article",{className:"soundPropsContainer__fade"}),Object(f.jsxs)("article",{className:"soundPropsContainer__props",children:[Object(f.jsx)(L,{name:"Playback Rate",value:a,decimal:!0}),Object(f.jsx)(L,{name:"BPM",value:a}),Object(f.jsx)(L,{name:"Pitch Adjust",value:a,decimal:!0}),Object(f.jsx)(L,{name:"Playback rate:",value:a})]})]})},z=(a(34),function(e){var t=e.volumeChange,a=e.panChange,r=Object(n.useContext)(F).volume,c=Object(n.useContext)(F).pan;return Object(f.jsxs)("div",{className:"generalSoundProps",children:[Object(f.jsx)(P,{name:"",min:0,max:1,step:.1,initialValue:r,onValueChange:function(e){t(e)}}),Object(f.jsx)(P,{name:"",min:-1,max:1,step:.1,initialValue:c,onValueChange:function(e){a(e)}})]})}),Y=[{id:0,vol:1,pan:0,effects:{}}],J=function(){var e=r.a.useState(Y),t=Object(i.a)(e,2),a=(t[0],t[1],r.a.useState(1)),n=Object(i.a)(a,2),c=n[0],l=n[1],o=r.a.useState(0),u=Object(i.a)(o,2),m=u[0],j=u[1],p=r.a.useState(0),h=Object(i.a)(p,2),x=h[0],b=h[1],O=r.a.useState(0),C=Object(i.a)(O,2),g=C[0],v=C[1],E=r.a.useState(0),_=Object(i.a)(E,2),S=_[0],y=_[1],B=r.a.useState(0),w=Object(i.a)(B,2),k=w[0],N=w[1],P=r.a.useState(0),V=Object(i.a)(P,2),D=(V[0],V[1],function(e){l(e)}),A=function(e){j(e)},R=function(e){y(e)},U=function(e){v(e)},T=function(e){N(e)},L=function(e){b(e)};return Object(f.jsx)("main",{className:"app",children:Object(f.jsxs)(s.a,{basename:"/sound-interaction/home",children:[Object(f.jsx)(d,{}),Object(f.jsx)(M.a,{path:"/sounds",render:function(){return Object(f.jsx)("section",{className:"app__content",children:Object(f.jsx)("h1",{className:"app__title",children:"YOUR SOUNDS"})})}}),Object(f.jsx)(M.a,{path:"/profile",render:function(){return Object(f.jsx)("section",{className:"app__content",children:Object(f.jsx)("h1",{className:"app__title",children:"PROFILE"})})}}),Object(f.jsx)(M.a,{path:"/fav",render:function(){return Object(f.jsx)("section",{className:"app__content",children:Object(f.jsx)("h1",{className:"app__title",children:"FAVORITES"})})}}),Object(f.jsx)(F.Provider,{value:{volume:c,pan:m,feedback:g,mix:x,gain:S,time:k},children:Object(f.jsx)(M.a,{path:"/home",render:function(){return Object(f.jsxs)("section",{className:"app__content",children:[Object(f.jsx)("h1",{className:"app__title",children:"INTERACTION"}),Object(f.jsx)(I,{}),Object(f.jsx)(z,{volumeChange:D,panChange:A}),Object(f.jsxs)("article",{className:"app__contentPanels",children:[Object(f.jsx)(Z,{}),Object(f.jsx)(G,{gainChange:R,feedbackChange:U,timeChange:T,mixChange:L})]})]})}})})]})})};l.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.17b6e654.chunk.js.map