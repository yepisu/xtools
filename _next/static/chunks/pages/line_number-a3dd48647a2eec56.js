(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9443],{46907:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var o=i(n(64938)),r=n(85893),l=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.Z=l},55343:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var o=i(n(64938)),r=n(85893),l=(0,o.default)((0,r.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.Z=l},60913:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line_number",function(){return n(51094)}])},31831:function(e,t,n){"use strict";var i=n(85893),o=n(67294),r=n(95982),l=n(13029),s=n(46901),u=n(20745),a=n(2734);let c=o.forwardRef(function(e,t){return(0,i.jsx)(s.Z,{elevation:6,ref:t,variant:"filled",...e})});function d(e){var t;let n=(0,a.Z)(),[s,u]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{setTimeout(()=>{u(!1)},2e3)},[]),(0,i.jsx)(l.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,sx:{zIndex:n.zIndex.snackbar+100},children:(0,i.jsx)(c,{sx:{borderRadius:"0","&.MuiAlert-filledSuccess":{backgroundColor:r.T$}},icon:!1,color:null==e?void 0:e.color,children:null!==(t=null==e?void 0:e.content)&&void 0!==t?t:""})},"top-center-warning")}function p(e){let t=document.createElement("div");document.body.appendChild(t),t.id="warning-window",t.style.zIndex="-2",(0,u.createRoot)(t).render((0,i.jsx)(d,{...e})),setTimeout(()=>{t.remove()},3e3)}t.Z={success:e=>p({color:"success",content:e}),warning:e=>p({color:"warning",content:e}),error:e=>p({color:"error",content:e})}},43197:function(e,t,n){"use strict";var i=n(85893),o=n(70671),r=n(88613),l=n(47023),s=n(37375),u=n(55343),a=n(51233),c=n(5616),d=n(15861),p=n(25662),x=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:h=!0}=e,{path:m}=(0,r.hI)(),[f]=x.useState(s.Z.find(e=>e.path===m));return(0,x.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,i.jsxs)(a.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,i.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(c.Z,{children:(0,i.jsx)(d.Z,{sx:{mb:"0px",fontWeight:600,color:o.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,i.jsx)(a.Z,{direction:"row",sx:{fontFamily:"Mono"},children:l.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,i.jsx)(c.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,i.jsx)(d.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),h?(0,i.jsx)(p.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,i.jsx)(u.Z,{}),children:"全屏"}):null]}),(0,i.jsx)(a.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},50972:function(e,t,n){"use strict";var i=n(85893),o=n(5616),r=n(61903);n(67294);var l=n(46907);t.Z=e=>{let{onClean:t,...n}=e;return(0,i.jsxs)(o.Z,{sx:{position:"relative",width:"100%"},children:[(0,i.jsx)(r.Z,{...n,sx:{width:"100%",...n.sx},variant:"outlined"}),(0,i.jsx)(o.Z,{sx:{position:"absolute",width:"32px",height:"32px",right:"4px",top:"4px",paddingTop:"6px",textAlign:"center",bgcolor:"rgba(0,0,0,0.1)",display:n.value?"":"none",borderRadius:"50%",cursor:"pointer",color:"#fff","&:hover":{bgcolor:"rgba(0,0,0,0.25)"}},children:(0,i.jsx)(o.Z,{onClick:t,children:(0,i.jsx)(l.Z,{fontSize:"small"})})})]})}},91865:function(e,t,n){"use strict";n.d(t,{Nk:function(){return d},Xm:function(){return c},gT:function(){return a},j3:function(){return u}});var i=n(70671),o=n(15861),r=n(5616),l=n(51233),s=n(90948);let u=(0,s.ZP)(o.Z)(()=>({cursor:"pointer",minWidth:"30px",textAlign:"right","&:hover":{color:i.T$}})),a=(0,s.ZP)(r.Z)(()=>({pt:"10px",display:"flex",flexDirection:"column",mx:"auto",gap:16,"& .MuiOutlinedInput-root":{flexShrink:0,flexGrow:1},"&  .MuiOutlinedInput-input":{paddingTop:"4px",paddingBottom:"4px"},"& .MuiInputLabel-root":{position:"relative",transform:"unset",width:"155px",color:i.hm,fontSize:"14px"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#E3E8EF"},"& .MuiFormHelperText-root":{position:"absolute",bottom:"-20px"},"& .MuiInputAdornment-positionEnd > p":{fontSize:"14px!important"},"& input":{fontSize:"14px!important"},"& .MuiInputLabel-root.Mui-focused":{color:"unset"}})),c=(0,s.ZP)(l.Z)(()=>({cursor:"pointer",alignItems:"center",fontSize:"14px",borderRadius:"4px"})),d=(0,s.ZP)(l.Z)(()=>({"& .MuiOutlinedInput-root":{"@media(min-width: 1520px)":{width:"360px"}}}))},51094:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(31831),r=n(43197),l=n(50972),s=n(91865),u=n(26262),a=n(51233),c=n(57709),d=n(15861),p=n(25662),x=n(61903),h=n(67294),m=n(74855),f=n.n(m);t.default=()=>{let[e,t]=(0,h.useState)(""),[n,m]=(0,h.useState)("1"),[v,g]=(0,h.useState)(" "),[b,w]=(0,h.useState)(""),Z=()=>{let t=Number.isInteger(+n),i="";e.split("\n").forEach((e,o)=>{let r="".concat(t?o+Number(n):n).concat(v).concat(e);i+=r+"\n"}),w(i)};return(0,i.jsx)(r.Z,{children:(0,i.jsxs)(s.gT,{sx:{width:"100%"},children:[(0,i.jsx)(l.Z,{multiline:!0,maxRows:10,minRows:4,value:e,onChange:e=>t(e.target.value),onClean:()=>{t(""),w("")},variant:"outlined"}),(0,i.jsxs)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,i.jsx)(c.Z,{required:!0,size:"small",type:"string",value:n,startAdornment:(0,i.jsx)(d.Z,{variant:"caption",sx:{color:"#333",fontWeight:700,fontSize:"14px",pr:1},children:"初始行号:"}),onChange:e=>m(e.target.value),sx:{width:"145px",flexGrow:"0!important",whiteSpace:"nowrap"}}),(0,i.jsx)(c.Z,{required:!0,size:"small",type:"string",value:v,startAdornment:(0,i.jsx)(d.Z,{variant:"caption",sx:{color:"#333",fontWeight:700,fontSize:"14px",pr:1},children:"分隔符:"}),onChange:e=>g(e.target.value),sx:{width:"145px",flexGrow:"0!important",whiteSpace:"nowrap"}}),(0,i.jsx)(p.Z,{size:"small",sx:{fontSize:"14px",width:"90",borderRadius:"4px",ml:"auto",height:"28px"},color:"primary",variant:"contained",onClick:Z,children:"添加行号"}),(0,i.jsx)(f(),{text:b,onCopy:()=>o.Z.success("复制成功"),children:(0,i.jsx)(p.Z,{size:"small",sx:{fontSize:"14px",width:"90",borderRadius:"4px",ml:"auto",height:"28px"},color:"primary",variant:"contained",onClick:Z,children:"复制结果"})}),(0,i.jsx)(p.Z,{size:"small",sx:{fontSize:"14px",width:"90",borderRadius:"4px",ml:"auto",height:"28px"},color:"primary",variant:"contained",onClick:e=>{(0,u.y)(b,"添加行号.txt")},children:"导出文本"})]}),(0,i.jsx)(x.Z,{multiline:!0,variant:"filled",maxRows:10,value:b,onChange:()=>w("")})]})})}},26262:function(e,t,n){"use strict";n.d(t,{y:function(){return i}});let i=(e,t)=>{let n=URL.createObjectURL(new Blob([e],{type:"application/octet-stream"})),i=document.createElement("a");i.style.display="none",i.href=n,i.download=t,document.body.appendChild(i),i.click(),URL.revokeObjectURL(n)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=60913)}),_N_E=e.O()}]);