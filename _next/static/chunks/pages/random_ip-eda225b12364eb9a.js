(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3361],{35596:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/random_ip",function(){return t(11037)}])},43197:function(e,n,t){"use strict";var l=t(85893),i=t(70671),s=t(88613),r=t(47023),o=t(37375),c=t(55343),a=t(51233),d=t(5616),u=t(15861),x=t(25662),m=t(67294);n.Z=e=>{let{children:n,sx:t,fullScreen:h=!0}=e,{path:p}=(0,s.hI)(),[f]=m.useState(o.Z.find(e=>e.path===p));return(0,m.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",n&&(n.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,l.jsxs)(a.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...t},children:[(0,l.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(d.Z,{children:(0,l.jsx)(u.Z,{sx:{mb:"0px",fontWeight:600,color:i.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,l.jsx)(a.Z,{direction:"row",sx:{fontFamily:"Mono"},children:r.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,l.jsx)(d.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,l.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,l.jsx)(u.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),h?(0,l.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(n=>{(null==e?void 0:e.requestFullscreen)?n(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?n(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?n(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&n(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",n&&(n.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,l.jsx)(c.Z,{}),children:"全屏"}):null]}),(0,l.jsx)(a.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:n})]})}},11037:function(e,n,t){"use strict";t.r(n);var l=t(85893),i=t(43197),s=t(51233),r=t(5616),o=t(86886),c=t(15861),a=t(53754),d=t(25662),u=t(90629),x=t(67294);n.default=()=>{let[e,n]=(0,x.useState)(44),[t,m]=(0,x.useState)([]),h=e=>{let n=[];for(let t=0;t<e;t++)n.push("".concat(Math.floor(256*Math.random()),".").concat(Math.floor(256*Math.random()),".").concat(Math.floor(256*Math.random()),".").concat(Math.floor(256*Math.random())));return n},p=(0,x.useCallback)((e,t)=>{n(t),m(h(t))},[]);return(0,x.useEffect)(()=>{m(h(e))},[]),(0,l.jsx)(i.Z,{children:(0,l.jsxs)(s.Z,{sx:{mt:"30px",lineHeight:"24px"},children:[(0,l.jsx)(r.Z,{sx:{margin:"auto",textAlign:"center",width:"80%"},children:(0,l.jsx)(s.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:(0,l.jsxs)(o.ZP,{container:!0,sx:{display:"flex",alignItems:"center",fontSize:"14px"},children:[(0,l.jsx)(o.ZP,{item:!0,xs:2,children:(0,l.jsx)(c.Z,{children:"IP 数量"})}),(0,l.jsx)(o.ZP,{item:!0,xs:8,children:(0,l.jsx)(a.ZP,{size:"small",value:e,onChange:p,"aria-label":"Small",valueLabelDisplay:"auto",max:48})}),(0,l.jsx)(o.ZP,{item:!0,xs:2,children:(0,l.jsx)(d.Z,{variant:"contained",onClick:()=>{let e=t.join("\n");navigator.clipboard.writeText(e)},children:"一键复制"})})]})})}),(0,l.jsx)(r.Z,{sx:{mt:"20px",textAlign:"center"},children:(0,l.jsx)(o.ZP,{container:!0,spacing:2,justifyContent:"center",children:t.map((e,n)=>(0,l.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,l.jsx)(u.Z,{elevation:3,sx:{padding:"10px",textAlign:"center"},children:e})},n))})})]})})}}},function(e){e.O(0,[8683,3754,9774,2888,179],function(){return e(e.s=35596)}),_N_E=e.O()}]);