(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1110],{94524:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radix_convert",function(){return n(19667)}])},43197:function(e,t,n){"use strict";var l=n(85893),s=n(70671),i=n(88613),r=n(47023),o=n(37375),a=n(55343),u=n(51233),c=n(5616),d=n(15861),x=n(25662),h=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:m=!0}=e,{path:p}=(0,i.hI)(),[f]=h.useState(o.Z.find(e=>e.path===p));return(0,h.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,l.jsxs)(u.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,l.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)(d.Z,{sx:{mb:"0px",fontWeight:600,color:s.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,l.jsx)(u.Z,{direction:"row",sx:{fontFamily:"Mono"},children:r.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,l.jsx)(c.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,l.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,l.jsx)(d.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),m?(0,l.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,l.jsx)(a.Z,{}),children:"全屏"}):null]}),(0,l.jsx)(u.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},19667:function(e,t,n){"use strict";n.r(t);var l=n(85893),s=n(43197),i=n(5616),r=n(15861),o=n(51233),a=n(87109),u=n(61903),c=n(24736),d=n.n(c),x=n(67294);t.default=()=>{let e=[10,2,8,16,3,4,5,6,7,9,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],[t,n]=(0,x.useState)(Array(e.length).fill("0")),c=(e,l)=>{e.forEach((e,s)=>{let i=l.toString(e);t[s]=i,n([...t])})},h=(e,t)=>{switch(t){case 2:return"0b"+e;case 8:return"0o"+e;case 16:return"0x"+e;default:return e}},m=(e,t)=>{switch(t){case 2:case 8:case 16:return e.slice(2);default:return e}},p=(e,t)=>{switch(t){case 2:return 4*Math.ceil(e/4);case 8:return 3*Math.ceil(e/3);case 16:return 2*Math.ceil(e/2);default:return e}},f=(e,t)=>{let n=p(e.length,t);switch(t){case 2:case 8:case 16:return e.padStart(n,"0");default:return e}},g=(t,n)=>{let l=m(t,n),s=""==l?"0":l;try{let t=d()(s,n);c(e,t)}catch(e){console.log("invalid input: "+s+" in radix "+n)}},v=e.slice(0,4).map((e,n)=>(0,l.jsx)(u.Z,{value:h(f(t[n],e),e),size:"small",onChange:t=>{g(t.target.value,e)},variant:"outlined",InputProps:{startAdornment:(0,l.jsx)(a.Z,{position:"start",sx:{width:"70px",fontFamily:"Mono"},children:e+" 进制"})},sx:{input:{fontSize:"14px",fontFamily:"Mono"}}},e)),b=e.slice(4).map((e,n)=>(0,l.jsx)(u.Z,{value:h(f(t[4+n],e),e),size:"small",onChange:t=>{g(t.target.value,e)},variant:"outlined",InputProps:{startAdornment:(0,l.jsx)(a.Z,{position:"start",sx:{width:"70px",fontFamily:"Mono"},children:e+" 进制"})},sx:{input:{fontSize:"14px",fontFamily:"Mono"}}},e));return(0,l.jsx)(s.Z,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Z,{sx:{width:"100%",typography:"body1"},children:[(0,l.jsx)(r.Z,{variant:"subtitle2",children:"常用进制"}),(0,l.jsx)(o.Z,{spacing:1,sx:{mt:2},children:v})]}),(0,l.jsxs)(i.Z,{sx:{width:"100%",typography:"body1"},children:[(0,l.jsx)(r.Z,{variant:"subtitle2",children:"非常用进制"}),(0,l.jsx)(o.Z,{spacing:1,sx:{mt:2},children:b})]})]})})}}},function(e){e.O(0,[5498,9774,2888,179],function(){return e(e.s=94524)}),_N_E=e.O()}]);