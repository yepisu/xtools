(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9389],{41899:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var l=r(n(64938)),o=n(85893),i=(0,l.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},55343:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var l=r(n(64938)),o=n(85893),i=(0,l.default)((0,o.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.Z=i},93256:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/de_qrcode",function(){return n(62038)}])},31831:function(e,t,n){"use strict";var r=n(85893),l=n(67294),o=n(95982),i=n(13029),s=n(46901),c=n(20745),d=n(2734);let a=l.forwardRef(function(e,t){return(0,r.jsx)(s.Z,{elevation:6,ref:t,variant:"filled",...e})});function u(e){var t;let n=(0,d.Z)(),[s,c]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{setTimeout(()=>{c(!1)},2e3)},[]),(0,r.jsx)(i.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,sx:{zIndex:n.zIndex.snackbar+100},children:(0,r.jsx)(a,{sx:{borderRadius:"0","&.MuiAlert-filledSuccess":{backgroundColor:o.T$}},icon:!1,color:null==e?void 0:e.color,children:null!==(t=null==e?void 0:e.content)&&void 0!==t?t:""})},"top-center-warning")}function x(e){let t=document.createElement("div");document.body.appendChild(t),t.id="warning-window",t.style.zIndex="-2",(0,c.createRoot)(t).render((0,r.jsx)(u,{...e})),setTimeout(()=>{t.remove()},3e3)}t.Z={success:e=>x({color:"success",content:e}),warning:e=>x({color:"warning",content:e}),error:e=>x({color:"error",content:e})}},43197:function(e,t,n){"use strict";var r=n(85893),l=n(70671),o=n(88613),i=n(47023),s=n(37375),c=n(55343),d=n(51233),a=n(5616),u=n(15861),x=n(25662),h=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:p=!0}=e,{path:m}=(0,o.hI)(),[f]=h.useState(s.Z.find(e=>e.path===m));return(0,h.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,r.jsxs)(d.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,r.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)(u.Z,{sx:{mb:"0px",fontWeight:600,color:l.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,r.jsx)(d.Z,{direction:"row",sx:{fontFamily:"Mono"},children:i.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,r.jsx)(a.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,r.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,r.jsx)(u.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),p?(0,r.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,r.jsx)(c.Z,{}),children:"全屏"}):null]}),(0,r.jsx)(d.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},62038:function(e,t,n){"use strict";n.r(t);var r=n(85893),l=n(31831),o=n(43197),i=n(41899),s=n(5616),c=n(51233),d=n(25662),a=n(67004),u=n(59268),x=n(67294),h=n(74855);t.default=()=>{let[e,t]=(0,x.useState)([]),n=[{title:"图片",dataIndex:"name",key:"name",width:300,render:e=>(0,r.jsx)(s.Z,{sx:{wordBreak:"break-all"},children:e})},{title:"解析值",dataIndex:"url",key:"url",render:(e,t)=>(0,r.jsx)(s.Z,{sx:{mr:2,color:t.error?"error.main":"text.primary"},children:t.error?"无法识别出该图片中的二维码内容":(0,r.jsx)(h.CopyToClipboard,{text:e,onCopy:()=>l.Z.success("复制成功"),children:(0,r.jsxs)(c.Z,{direction:"row",alignItems:"flex-start",spacing:1,sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:[(0,r.jsx)(s.Z,{children:e}),(0,r.jsx)(c.Z,{alignItems:"center",justifyContent:"center",sx:{height:"21px"},children:(0,r.jsx)(i.Z,{sx:{fontSize:"12px"}})})]})})})}];return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(s.Z,{sx:{".rc-table":{border:"1px solid #eee",borderRadius:"4px"},".rc-table table":{width:"100%",borderCollapse:"collapse"},".rc-table-thead .rc-table-cell":{textAlign:"left",paddingLeft:"24px",backgroundColor:"#eee",fontSize:"12px",height:"28px",fontWeight:500,fontFamily:"Mono"},".rc-table-tbody .rc-table-row":{borderBottom:"1px solid #eee"},".rc-table-tbody .rc-table-cell":{paddingLeft:"24px",fontSize:"14px",paddingTop:"12px",paddingBottom:"12px",fontFamily:"Mono"}},children:[(0,r.jsx)(d.Z,{size:"small",variant:"outlined",sx:{borderRadius:"4px",width:"120px",mb:2},onClick:()=>{let e=document.getElementById("fileInput");e&&e.click()},children:"上传二维码"}),(0,r.jsx)(s.Z,{component:"input",id:"fileInput",type:"file",accept:"image/*",sx:{display:"none"},onChange:n=>{var r;let l=null===(r=n.target.files)||void 0===r?void 0:r[0];if(l){let n=URL.createObjectURL(l);(0,a.Z)(n).then(n=>{t([{name:l.name,url:n,id:1e9*Math.random()|0},...e])}).catch(n=>{t([{name:l.name,error:String(n),id:1e9*Math.random()|0},...e])})}}}),(0,r.jsx)(u.ZP,{columns:n,data:e,rowKey:"id",emptyText:(0,r.jsx)(s.Z,{sx:{textAlign:"center",color:"#999",fontSize:"12px"},children:"暂无数据"})})]})})}},67004:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(65616);let l=e=>new Promise((t,n)=>{let l=new Image;l.src=URL.createObjectURL(e),l.addEventListener("load",()=>{try{let e=document.createElement("canvas");e.width=l.width,e.height=l.height;let o=e.getContext("2d");if(!o)return n(Error("decode failed"));o.imageSmoothingEnabled=!1,o.drawImage(l,0,0);let i=o.getImageData(0,0,l.width,l.height),s=r(i.data,l.width,l.height);return null!==s?t(s.data):n(Error("decode failed"))}catch(e){if("string"==typeof e)return n(Error(e));if(e instanceof Error)return n(Error(e.message))}})});var o=e=>e instanceof File&&"[object File]"===Object.prototype.toString.call(e)?l(e.slice()):"string"==typeof e&&(e=>{try{return btoa(atob(e))===e}catch(e){return!1}})(e)?l(((e,t="",n=512)=>{let r=atob(e),l=[];for(let e=0;e<r.length;e+=n){let t=r.slice(e,e+n),o=Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);let i=new Uint8Array(o);l.push(i)}return new Blob(l,{type:t})})(e)):"string"==typeof e&&(e=>{if("string"!=typeof e)throw TypeError("Expected a string");if((e=e.trim()).includes(" "))return!1;try{return new URL(e),!0}catch(e){return!1}})(e)?new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=()=>{r.status>=200&&r.status<300?l(r.response).then(e=>t(e)).catch(e=>n(e)):n(r.statusText)},r.onerror=()=>n(r.statusText),r.send()}):Promise.reject(Error("The input type is invalid"))}},function(e){e.O(0,[6148,9268,9774,2888,179],function(){return e(e.s=93256)}),_N_E=e.O()}]);