(this["webpackJsonpsound-interaction"]=this["webpackJsonpsound-interaction"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(4),o=a(8),s=a(1),u=function(){return Object(s.jsxs)("nav",{className:"sideBar",children:[Object(s.jsx)(o.b,{to:"/home",className:"sideBar__link",children:Object(s.jsx)("i",{className:"bx bx-equalizer sideBar__icon"})}),Object(s.jsxs)(o.b,{to:"/sounds",className:"sideBar__link",children:[Object(s.jsx)("i",{className:"bx bx-folder sideBar__icon"}),Object(s.jsx)("span",{className:"sideBar__name",children:"Your sounds"})]})]})},d=a(15),f=a.n(d),m=new f.a.Sound,j=function(){m.play()},p=function(){m.stop()},h=new f.a.Effects.StereoPanner({pan:0});m.addEffect(h);var x,b,O,C,v,E=function(e){var t=e.volume,a=e.pan;return r.a.useEffect((function(){m.volume=t,h.pan=a}),[t,a]),Object(s.jsxs)("section",{className:"soundItem",children:["SONIDO?",Object(s.jsx)("button",{onClick:j,children:"PLAY"}),Object(s.jsx)("button",{onClick:p,children:"STOP"})]})},g=Object(n.createContext)({volume:1,pan:0}),S=function(){var e=Object(n.useContext)(g).volume,t=Object(n.useContext)(g).pan;return Object(s.jsx)("section",{className:"SoundContainer",children:Object(s.jsx)(E,{volume:e,pan:t})})},_=a(19),y=a.n(_);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function F(e,t){var a=e.title,r=e.titleId,l=w(e,["title","titleId"]);return n.createElement("svg",B({width:29,height:35,viewBox:"0 0 29 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),a?n.createElement("title",{id:r},a):null,x||(x=n.createElement("g",{filter:"url(#filter0_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white",fillOpacity:.1}))),b||(b=n.createElement("g",{filter:"url(#filter1_bd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white",fillOpacity:.1}))),O||(O=n.createElement("g",{filter:"url(#filter2_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white"}))),C||(C=n.createElement("g",{filter:"url(#filter3_dd)"},n.createElement("path",{d:"M14.5 10C14.5 10 14.7483 13.708 15.7154 15.2553C16.6825 16.8027 19 17.2 19 17.2C19 17.2 16.6825 17.5973 15.7154 19.1447C14.7483 20.692 14.5 24.4 14.5 24.4C14.5 24.4 14.2517 20.692 13.2846 19.1447C12.3175 17.5973 10 17.2 10 17.2C10 17.2 12.3175 16.8027 13.2846 15.2553C14.2517 13.708 14.5 10 14.5 10Z",fill:"white"}))),v||(v=n.createElement("defs",null,n.createElement("filter",{id:"filter0_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter1_bd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feGaussianBlur",{in:"BackgroundImage",stdDeviation:1}),n.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_backgroundBlur",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter2_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),n.createElement("filter",{id:"filter3_dd",x:0,y:0,width:29,height:34.4,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:5}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.createElement("feOffset",null),n.createElement("feGaussianBlur",{stdDeviation:1}),n.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),n.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),n.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})))))}var k=n.forwardRef(F),N=(a.p,function(e){var t=e.name,a=(e.value,e.decimal),n=r.a.useState(1),l=Object(i.a)(n,2),c=l[0],o=l[1];return Object(s.jsxs)("div",{className:"circleEffectItem",children:[Object(s.jsx)("h5",{children:t}),Object(s.jsx)(y.a,{width:100,progressLineCap:"flat",min:0,max:100,hideLabelValue:!0,labelColor:"#FFFFFF",valueFontSize:"2rem",verticalOffset:"1rem",knobColor:"#000000",progressColorFrom:"#333DE6",progressColorTo:"#54C2F7",progressSize:10,trackColor:"#465383",trackSize:10,onChange:function(e){console.log("Changed value ".concat(e));var t=e;a&&(t/=100),o(t)},children:Object(s.jsx)(k,{x:"9",y:"9",width:"18px",height:"18px"})}),Object(s.jsx)("input",{type:"number",min:"0",max:"1",step:"0.1",value:c,onChange:function(e){var t=parseFloat(e.target.value);a&&(t/=100),o(t)}}),Object(s.jsx)("span",{children:c})]})}),P=a(2),M=function(e){var t=e.name,a=e.min,n=e.max,l=e.step,c=e.initialValue,o=e.onValueChange,u=r.a.useState(c),d=Object(i.a)(u,2),f=d[0],m=d[1];return Object(s.jsxs)("div",{className:"sliderLinearEffectItem",children:[Object(s.jsx)("p",{children:t}),Object(s.jsx)("input",{type:"range",min:a,max:n,step:l,value:f,onChange:function(e){var t=parseFloat(e.target.value);m(t),o(t)}}),Object(s.jsx)("span",{children:f})]})},I=function(e){var t=e.valueChange,a=r.a.useState(1),n=Object(i.a)(a,2),l=n[0],c=(n[1],r.a.useState(0)),u=Object(i.a)(c,2),d=(u[0],u[1]),f=function(e){d(e),t(e)};return Object(s.jsxs)("section",{className:"soundEffectsContainer",children:[Object(s.jsxs)("article",{className:"soundEffectsContainer__effectsButtons",children:[Object(s.jsx)(o.b,{to:"/home/delay",children:"Delay"}),Object(s.jsx)(o.b,{to:"/home/eq",children:"EQ"}),Object(s.jsx)(o.b,{to:"/home/distortion",children:"Distortion"})]}),Object(s.jsx)(P.a,{path:"/home/delay",render:function(){return Object(s.jsxs)("article",{className:"soundEffectsContainer__effectsProps",children:[Object(s.jsx)(N,{name:"Playback Rate",value:l,decimal:!0}),Object(s.jsx)(N,{name:"BPM",value:l}),Object(s.jsx)(N,{name:"Pitch Adjust",value:l,decimal:!0}),Object(s.jsx)(N,{name:"Playback rate:",value:l})]})}}),Object(s.jsx)(P.a,{path:"/home/distortion",render:function(){return Object(s.jsx)("article",{className:"soundEffectsContainer__effectsProps",children:Object(s.jsx)(M,{name:"Gain:",min:0,max:1,step:.1,initialValue:0,onValueChange:f})})}})]})},G=function(){var e=r.a.useState(1),t=Object(i.a)(e,2),a=t[0];t[1];return Object(s.jsxs)("section",{className:"soundPropsContainer",children:[Object(s.jsx)("article",{className:"soundPropsContainer__fade"}),Object(s.jsxs)("article",{className:"soundPropsContainer__props",children:[Object(s.jsx)(N,{name:"Playback Rate",value:a,decimal:!0}),Object(s.jsx)(N,{name:"BPM",value:a}),Object(s.jsx)(N,{name:"Pitch Adjust",value:a,decimal:!0}),Object(s.jsx)(N,{name:"Playback rate:",value:a})]})]})},D=(a(33),function(e){var t=e.volumeChange,a=e.panChange,r=Object(n.useContext)(g).volume,l=Object(n.useContext)(g).pan;return Object(s.jsxs)("div",{className:"generalSoundProps",children:[Object(s.jsx)(M,{name:"",min:0,max:1,step:.1,initialValue:r,onValueChange:function(e){t(e)}}),Object(s.jsx)(M,{name:"",min:-1,max:1,step:.1,initialValue:l,onValueChange:function(e){a(e)}})]})}),A=[{id:0,vol:1,pan:0,effects:{}}],V=function(){var e=r.a.useState(A),t=Object(i.a)(e,2),a=(t[0],t[1],r.a.useState(1)),n=Object(i.a)(a,2),l=n[0],c=n[1],d=r.a.useState(0),f=Object(i.a)(d,2),m=f[0],j=f[1],p=r.a.useState(0),h=Object(i.a)(p,2),x=(h[0],h[1]),b=function(e){c(e)},O=function(e){j(e)},C=function(e){x(e)};return Object(s.jsx)("main",{className:"app",children:Object(s.jsxs)(o.a,{basename:"/sound-interaction",children:[Object(s.jsx)(u,{}),Object(s.jsx)(P.a,{path:"/sounds",render:function(){return Object(s.jsx)("h1",{children:"Your sounds"})}}),Object(s.jsx)(g.Provider,{value:{volume:l,pan:m},children:Object(s.jsx)(P.a,{path:"/home",render:function(){return Object(s.jsxs)("section",{className:"app__content",children:[Object(s.jsx)(S,{}),Object(s.jsx)(D,{volumeChange:b,panChange:O}),Object(s.jsxs)("article",{className:"app__contentPanels",children:[Object(s.jsx)(G,{}),Object(s.jsx)(I,{valueChange:C})]})]})}})})]})})};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.287f81a2.chunk.js.map