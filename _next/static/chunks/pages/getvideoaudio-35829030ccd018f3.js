(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4562],{55343:function(e,n,t){"use strict";var l=t(64836);n.Z=void 0;var i=l(t(64938)),s=t(85893),r=(0,i.default)((0,s.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");n.Z=r},5621:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getvideoaudio",function(){return t(61947)}])},43197:function(e,n,t){"use strict";var l=t(85893),i=t(70671),s=t(88613),r=t(47023),o=t(37375),d=t(55343),u=t(51233),a=t(5616),c=t(15861),x=t(25662),p=t(67294);n.Z=e=>{let{children:n,sx:t,fullScreen:h=!0}=e,{path:m}=(0,s.hI)(),[f]=p.useState(o.Z.find(e=>e.path===m));return(0,p.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",n&&(n.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,l.jsxs)(u.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...t},children:[(0,l.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(a.Z,{children:(0,l.jsx)(c.Z,{sx:{mb:"0px",fontWeight:600,color:i.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,l.jsx)(u.Z,{direction:"row",sx:{fontFamily:"Mono"},children:r.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,l.jsx)(a.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,l.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,l.jsx)(c.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),h?(0,l.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(n=>{(null==e?void 0:e.requestFullscreen)?n(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?n(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?n(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&n(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),n=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",n&&(n.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,l.jsx)(d.Z,{}),children:"全屏"}):null]}),(0,l.jsx)(u.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:n})]})}},61947:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var l=t(85893),i=t(43197),s=t(5616),r=t(25662),o=t(51233),d=t(61903),u=t(67294),a=()=>{let[e,n]=(0,u.useState)(""),[t,a]=(0,u.useState)(""),[c,x]=(0,u.useState)(""),[p,h]=(0,u.useState)(""),m=(e,t)=>{/\//.test(t)&&(t=t.split("/").slice(-1)[0]),x(t=t.split(".")[0]),new AudioContext().decodeAudioData(e,function(e){let t=function(e,n){var t,l,i=e.numberOfChannels,s=n*i*2+44,r=new ArrayBuffer(s),o=new DataView(r),d=[],u=0,a=0;for(x(1179011410),x(s-8),x(1163280727),x(544501094),x(16),c(1),c(i),x(e.sampleRate),x(2*e.sampleRate*i),c(2*i),c(16),x(1635017060),x(s-a-4),t=0;t<e.numberOfChannels;t++)d.push(e.getChannelData(t));for(;a<s;){for(t=0;t<i;t++)l=(.5+(l=Math.max(-1,Math.min(1,d[t][u])))<0?32768*l:32767*l)|0,o.setInt16(a,l,!0),a+=2;u++}return new Blob([r],{type:"audio/wav"});function c(e){o.setUint16(a,e,!0),a+=2}function x(e){o.setUint32(a,e,!0),a+=4}}(e,e.sampleRate*e.duration);n(URL.createObjectURL(t))})},f=async e=>{var n;let t=null===(n=e.target.files)||void 0===n?void 0:n[0];if(t){a("");let e=new FileReader;e.onload=function(e){null!==e.target&&m(e.target.result,t.name)},e.readAsArrayBuffer(t)}};return(0,l.jsx)(i.Z,{children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(s.Z,{sx:{mb:2,fontWeight:600},children:"1. 本地视频"}),(0,l.jsx)(r.Z,{sx:{borderRadius:"4px"},size:"small",variant:"contained",onClick:()=>{let e=document.getElementById("fileInput");null==e||e.click()},children:"上传视频"}),(0,l.jsx)(s.Z,{sx:{my:2,fontWeight:600},children:"2. 网络视频"}),(0,l.jsxs)(o.Z,{direction:"row",spacing:2,children:[(0,l.jsx)(d.Z,{sx:{width:"500px",input:{p:"6px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",placeholder:"请输入网络视频链接，需要允许跨域",variant:"outlined",value:t,onChange:e=>a(e.target.value)}),(0,l.jsx)(r.Z,{sx:{borderRadius:"4px"},size:"small",variant:"outlined",onClick:()=>{t&&fetch(t).then(e=>e.arrayBuffer()).then(e=>m(e,c)).catch(e=>h(String(e)))},children:"提取"})]}),e&&(0,l.jsxs)(s.Z,{sx:{mt:6,width:"500px",borderRadius:"4px",p:2,border:"1px solid #eee"},children:[(0,l.jsx)(s.Z,{sx:{mb:2,fontWeight:600},children:"试听音频"}),(0,l.jsx)("audio",{controls:!0,children:(0,l.jsx)("source",{src:e})}),(0,l.jsx)(s.Z,{sx:{mt:2,fontSize:"14px"},children:(0,l.jsx)(s.Z,{component:"a",href:e,download:c+".wav",children:"点击此处下载音频"})})]}),p&&(0,l.jsx)(s.Z,{sx:{mt:6,width:"500px",borderRadius:"4px",p:2,border:"1px solid #eee",fontSize:"12px",color:"error.main"},children:p}),(0,l.jsx)(s.Z,{component:"input",id:"fileInput",type:"file",accept:"video/*",style:{display:"none"},onChange:f})]})})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=5621)}),_N_E=e.O()}]);