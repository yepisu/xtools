(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7568],{55343:function(e,n,t){"use strict";var l=t(64836);n.Z=void 0;var s=l(t(64938)),i=t(85893),r=(0,s.default)((0,i.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");n.Z=r},75816:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/case_convert",function(){return t(73995)}])},43197:function(e,n,t){"use strict";var l=t(85893),s=t(70671),i=t(88613),r=t(47023),o=t(37375),u=t(55343),d=t(51233),a=t(5616),c=t(15861),x=t(25662),h=t(67294);n.Z=e=>{let{children:n,sx:t,fullScreen:m=!0}=e,{path:p}=(0,i.hI)(),[v]=h.useState(o.Z.find(e=>e.path===p));return(0,h.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",n&&(n.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,l.jsxs)(d.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...t},children:[(0,l.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(a.Z,{children:(0,l.jsx)(c.Z,{sx:{mb:"0px",fontWeight:600,color:s.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==v?void 0:v.label})}),(0,l.jsx)(d.Z,{direction:"row",sx:{fontFamily:"Mono"},children:r.i.filter(e=>null==v?void 0:v.tags.includes(e.name)).map(e=>(0,l.jsx)(a.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,l.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,l.jsx)(c.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==v?void 0:v.subTitle}),m?(0,l.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(n=>{(null==e?void 0:e.requestFullscreen)?n(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?n(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?n(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&n(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",n&&(n.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,l.jsx)(u.Z,{}),children:"全屏"}):null]}),(0,l.jsx)(d.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:n})]})}},73995:function(e,n,t){"use strict";t.r(n);var l=t(85893),s=t(67294),i=t(43197),r=t(5616),o=t(15861),u=t(51233),d=t(61903);n.default=()=>{let[e,n]=(0,s.useState)();return(0,l.jsx)(i.Z,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Z,{sx:{width:"100%",typography:"body1"},children:[(0,l.jsx)(o.Z,{variant:"subtitle2",children:"输入"}),(0,l.jsx)(u.Z,{sx:{mt:2},children:(0,l.jsx)(d.Z,{value:e,variant:"outlined",multiline:!0,rows:4,onChange:e=>{n(e.target.value)},sx:{textarea:{fontSize:"14px",fontFamily:"Mono"}}})})]}),(0,l.jsxs)(r.Z,{sx:{width:"100%",typography:"body1"},children:[(0,l.jsx)(o.Z,{variant:"subtitle2",children:"大写"}),(0,l.jsx)(u.Z,{sx:{mt:2},children:(0,l.jsx)(d.Z,{value:null==e?void 0:e.toUpperCase(),variant:"outlined",multiline:!0,rows:4,InputProps:{readOnly:!0},sx:{textarea:{fontSize:"14px",fontFamily:"Mono"}}})})]}),(0,l.jsxs)(r.Z,{sx:{width:"100%",typography:"body1"},children:[(0,l.jsx)(o.Z,{variant:"subtitle2",children:"小写"}),(0,l.jsx)(u.Z,{sx:{mt:2},children:(0,l.jsx)(d.Z,{value:null==e?void 0:e.toLowerCase(),variant:"outlined",multiline:!0,rows:4,InputProps:{readOnly:!0},sx:{textarea:{fontSize:"14px",fontFamily:"Mono"}}})})]})]})})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=75816)}),_N_E=e.O()}]);