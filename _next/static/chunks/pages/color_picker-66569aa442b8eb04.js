(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1644],{55343:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var i=r(t(64938)),o=t(85893),l=(0,i.default)((0,o.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");n.Z=l},36370:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color_picker",function(){return t(15213)}])},46866:function(e,n){"use strict";n.Z={src:"/tools/_next/static/media/pixel-img.a2f441f6.jpeg",height:1e3,width:1e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAALCz/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIEAAMREiNBUf/aAAgBAQABPwBJHCku6GXK6oAhUFCM6n1uw1f/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},31831:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(95982),l=t(13029),s=t(46901),c=t(20745),d=t(2734);let a=i.forwardRef(function(e,n){return(0,r.jsx)(s.Z,{elevation:6,ref:n,variant:"filled",...e})});function x(e){var n;let t=(0,d.Z)(),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{setTimeout(()=>{c(!1)},2e3)},[]),(0,r.jsx)(l.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,sx:{zIndex:t.zIndex.snackbar+100},children:(0,r.jsx)(a,{sx:{borderRadius:"0","&.MuiAlert-filledSuccess":{backgroundColor:o.T$}},icon:!1,color:null==e?void 0:e.color,children:null!==(n=null==e?void 0:e.content)&&void 0!==n?n:""})},"top-center-warning")}function u(e){let n=document.createElement("div");document.body.appendChild(n),n.id="warning-window",n.style.zIndex="-2",(0,c.createRoot)(n).render((0,r.jsx)(x,{...e})),setTimeout(()=>{n.remove()},3e3)}n.Z={success:e=>u({color:"success",content:e}),warning:e=>u({color:"warning",content:e}),error:e=>u({color:"error",content:e})}},43197:function(e,n,t){"use strict";var r=t(85893),i=t(70671),o=t(88613),l=t(47023),s=t(37375),c=t(55343),d=t(51233),a=t(5616),x=t(15861),u=t(25662),h=t(67294);n.Z=e=>{let{children:n,sx:t,fullScreen:A=!0}=e,{path:p}=(0,o.hI)(),[m]=h.useState(s.Z.find(e=>e.path===p));return(0,h.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",n&&(n.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,r.jsxs)(d.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...t},children:[(0,r.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)(x.Z,{sx:{mb:"0px",fontWeight:600,color:i.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==m?void 0:m.label})}),(0,r.jsx)(d.Z,{direction:"row",sx:{fontFamily:"Mono"},children:l.i.filter(e=>null==m?void 0:m.tags.includes(e.name)).map(e=>(0,r.jsx)(a.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,r.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,r.jsx)(x.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==m?void 0:m.subTitle}),A?(0,r.jsx)(u.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(n=>{(null==e?void 0:e.requestFullscreen)?n(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?n(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?n(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&n(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",n&&(n.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,r.jsx)(c.Z,{}),children:"全屏"}):null]}),(0,r.jsx)(d.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:n})]})}},15213:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(43197),o=t(5616),l=t(25662),s=t(51233),c=t(67294),d=t(46866),a=t(51648),x=t(74855),u=t(31831);n.default=()=>{let[e,n]=(0,c.useState)({x:"0",y:"0",rgb:"rgb(81, 103, 114)",...(0,a.S)(81,103,114)}),[t,h]=(0,c.useState)({x:"0",y:"0",rgb:"rgb(81, 103, 114)",...(0,a.S)(81,103,114)}),A=(0,c.useCallback)(()=>{u.Z.success("复制成功")},[]),p=()=>{let e=document.getElementById("pixelCanvas"),t=e.offsetLeft,r=e.offsetTop,i=e.getContext("2d",{willReadFrequently:!0});e.onmousemove=o=>{let l=o.layerX-t<0?0:o.layerX-t>e.width?e.width:o.layerX-t,s=o.layerY-r<0?0:o.layerY-r>e.height?e.height:o.layerY-r,c=null==i?void 0:i.getImageData(l,s,1,1);c&&n({x:l,y:s,...(0,a.S)(c.data[0],c.data[1],c.data[2])})},e.onmousedown=n=>{let o=n.layerX-t<0?0:n.layerX-t>e.width?e.width:n.layerX-t,l=n.layerY-r<0?0:n.layerY-r>e.height?e.height:n.layerY-r,s=null==i?void 0:i.getImageData(o,l,1,1);s&&h({x:o,y:l,...(0,a.S)(s.data[0],s.data[1],s.data[2])})}},m=e=>{let n=document.getElementById("pixelCanvas"),t=n.getContext("2d",{willReadFrequently:!0}),r=new Image,i=new FileReader;i.onload=e=>{if(e.target){let i=e.target.result;r.src=i,r.onload=()=>{let{width:e,height:i}=r,o=e/i,l=e>450,s=i>450;l&&s?o>1?(n.width=450,n.height=450/o):(n.width=450*o,n.height=450):l?(n.width=450,n.height=450/o):s?(n.width=450*o,n.height=450):(n.width=e,n.height=i),null==t||t.drawImage(r,0,0,n.width,n.height)},p()}},i.readAsDataURL(e)};return(0,c.useEffect)(()=>{fetch(d.Z.src).then(e=>e.blob()).then(e=>{m(new File([e],"pixel.jpeg",{type:"image/jpeg"}))});let e=()=>p();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsx)(i.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{sx:{borderRadius:"4px",mb:2},size:"small",variant:"outlined",onClick:()=>{let e=document.getElementById("fileInput");null==e||e.click()},children:"上传图片"}),(0,r.jsx)(o.Z,{component:"input",id:"fileInput",type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{var n;let t=null===(n=e.target.files)||void 0===n?void 0:n[0];t&&m(t)}}),(0,r.jsxs)(s.Z,{direction:"row",alignItems:"flex-start",spacing:2,children:[(0,r.jsx)("canvas",{id:"pixelCanvas"}),(0,r.jsxs)(s.Z,{spacing:4,sx:{fontSize:"14px"},children:[(0,r.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,r.jsx)(o.Z,{sx:{width:"100px",backgroundColor:"".concat(t.rgb),border:"1px solid rgba(0,0,0,0.2)",borderRadius:"4px"}}),(0,r.jsxs)(s.Z,{direction:"column",sx:{py:1},children:[(0,r.jsx)(o.Z,{sx:{mb:1},children:"选中位置"}),(0,r.jsxs)(o.Z,{children:["x : ",t.x]}),(0,r.jsxs)(o.Z,{children:["y : ",t.y]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hex:"," ",(0,r.jsx)(x.CopyToClipboard,{text:t.hex,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:t.hex})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["rgb:"," ",(0,r.jsx)(x.CopyToClipboard,{text:t.rgb,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:t.rgb})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hsl:"," ",(0,r.jsx)(x.CopyToClipboard,{text:t.hsl,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:t.hsl})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hwb:"," ",(0,r.jsx)(x.CopyToClipboard,{text:t.hwb,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:t.hwb})})]})]})]}),(0,r.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,r.jsx)(o.Z,{sx:{width:"100px",backgroundColor:"".concat(e.rgb),border:"1px solid rgba(0,0,0,0.2)",borderRadius:"4px"}}),(0,r.jsxs)(s.Z,{direction:"column",sx:{py:1},children:[(0,r.jsx)(o.Z,{sx:{mb:1},children:"鼠标位置"}),(0,r.jsxs)(o.Z,{children:["x: ",e.x]}),(0,r.jsxs)(o.Z,{children:["y: ",e.y]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hex:"," ",(0,r.jsx)(x.CopyToClipboard,{text:e.hex,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:e.hex})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["rgb:"," ",(0,r.jsx)(x.CopyToClipboard,{text:e.rgb,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:e.rgb})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hsl:"," ",(0,r.jsx)(x.CopyToClipboard,{text:e.hsl,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:e.hsl})})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{cursor:"pointer",":hover":{color:"primary.main"}},children:["hwb:"," ",(0,r.jsx)(x.CopyToClipboard,{text:e.hwb,onCopy:A,children:(0,r.jsx)(o.Z,{sx:{ml:"8px"},children:e.hwb})})]})]})]})]})]})]})})}},51648:function(e,n,t){"use strict";function r(e){let n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:[]}function i(e,n,t){let r=Math.max(e/=255,n/=255,t/=255),i=Math.min(e,n,t),o=r-i,l=0,s=0,c=(r+i)/2;if(0!==o){switch(s=c>.5?o/(2-r-i):o/(r+i),r){case e:l=(n-t)/o+(n<t?6:0);break;case n:l=(t-e)/o+2;break;case t:l=(e-n)/o+4}l*=60}return{h:l,s,l:c}}function o(e,n,t){let r=i(e,n,t),o=function(e,n,t){let r=Math.max(e,n,t),o=Math.min(e,n,t);return{h:i(e,n,t).h,w:1/255*o,b:1-r/255}}(e,n,t);return{rgb:"rgb(".concat(e,", ").concat(n,", ").concat(t,")"),hsl:"hsl(".concat(r.h.toFixed(2),", ").concat((100*r.s).toFixed(2),"%, ").concat((100*r.l).toFixed(2),"%)"),hwb:"hwb(".concat(o.h.toFixed(2),", ").concat((100*o.w).toFixed(2),"%, ").concat((100*o.b).toFixed(2),"%)"),hex:function(e,n,t){let r=e=>{let n=Math.round(Math.min(255,Math.max(0,e))).toString(16);return 1===n.length?"0"+n:n},i=r(e),o=r(n),l=r(t);return"#".concat(i).concat(o).concat(l)}(e,n,t)}}t.d(n,{S:function(){return o},o:function(){return r}})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=36370)}),_N_E=e.O()}]);