(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9258],{63441:function(e,t,n){"use strict";var l=n(64836);t.Z=void 0;var i=l(n(64938)),r=n(85893),o=(0,i.default)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.Z=o},64192:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hexeditor",function(){return n(38443)}])},43197:function(e,t,n){"use strict";var l=n(85893),i=n(70671),r=n(88613),o=n(47023),a=n(37375),s=n(55343),u=n(51233),d=n(5616),c=n(15861),g=n(25662),h=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:x=!0}=e,{path:p}=(0,r.hI)(),[b]=h.useState(a.Z.find(e=>e.path===p));return(0,h.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,l.jsxs)(u.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,l.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(d.Z,{children:(0,l.jsx)(c.Z,{sx:{mb:"0px",fontWeight:600,color:i.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==b?void 0:b.label})}),(0,l.jsx)(u.Z,{direction:"row",sx:{fontFamily:"Mono"},children:o.i.filter(e=>null==b?void 0:b.tags.includes(e.name)).map(e=>(0,l.jsx)(d.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,l.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,l.jsx)(c.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==b?void 0:b.subTitle}),x?(0,l.jsx)(g.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,l.jsx)(s.Z,{}),children:"全屏"}):null]}),(0,l.jsx)(u.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},38443:function(e,t,n){"use strict";n.r(t);var l=n(85893),i=n(43197),r=n(5616),o=n(51233),a=n(25662),s=n(90948),u=n(67294),d=n(82171),c=n(39142),g=n(63441),h=n(52900);let x={backgroud:"#21252B",backgroudLineNo:"#282C34",backgroudLineNoHighLight:"#323842",backgroudHighLight:"#61AFEF",text:"#ABB2BF",textWeak:"#ABB2BF33",textStrong:"#F6F7F9",textModified:"#E06C75"},p=(0,s.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});(0,s.ZP)("input")({});let b=(e,t)=>("0".repeat(t)+e.toString(16)).slice(-t),m=e=>e>=32&&e<=126?String.fromCharCode(e):".";t.default=()=>{let[e,t]=(0,u.useState)(new Uint8Array(256)),[n,s]=(0,u.useState)(new Uint8Array(256)),[f,v]=(0,u.useState)(-1),[y,k]=(0,u.useState)(!1),[w,C]=(0,u.useState)(),[j,L]=(0,u.useState)("00"),S=(0,u.useRef)(null);(0,u.useEffect)(()=>{if(y){var e;null===(e=S.current)||void 0===e||e.focus()}});let E=t=>t===f?x.textStrong:n[t]!==e[t]?x.textModified:n[t]<32||n[t]>126?x.textWeak:x.text,F=(0,u.useCallback)(e=>{let n=e.target.files||[];if(0==n.length)return;let l=new FileReader;l.onload=function(e){if(null!==e.target){let n=new Uint8Array(e.target.result);t(n);let l=new Uint8Array(new ArrayBuffer(n.byteLength));l.set(n),s(l)}},C(n[0].name),l.readAsArrayBuffer(n[0])},[]),Z=(0,u.useCallback)(e=>{if(y)return;let t=parseInt(e.target.getAttribute("itemID"));t<n.byteLength&&v(t)},[n,y]),I=(0,u.useCallback)(e=>{y||v(-1)},[y]),A=(0,u.useCallback)(e=>{let t=parseInt(e.target.getAttribute("itemID"));t<n.byteLength&&H(t)},[n]),R=(0,u.useCallback)(e=>{if("Escape"===e.key||"Enter"===e.key){var t;null===(t=S.current)||void 0===t||t.blur()}},[S,j]),B=(0,u.useCallback)(e=>{var t,n;let l=parseInt(null===(t=S.current)||void 0===t?void 0:t.getAttribute("itemID"));"Backspace"===e.key&&0===j.length&&(null===(n=S.current)||void 0===n||n.blur(),H(l-1))},[S,j]),M=(0,u.useCallback)(e=>{D()},[n,j]),z=(0,u.useCallback)(e=>{let t=URL.createObjectURL(new Blob([n],{type:"application/octet-stream"})),l=document.createElement("a");l.style.display="none",l.href=t,l.download="new_"+w,document.body.appendChild(l),l.click(),URL.revokeObjectURL(t)},[w,n]),_=(0,u.useCallback)(e=>{var t;let n=parseInt(null===(t=S.current)||void 0===t?void 0:t.getAttribute("itemID"));!/[^0-9A-Fa-f]/.test(e.target.value)&&(e.target.value.length<=2?L(e.target.value):e.target.value.length>2&&(L(e.target.value.slice(0,2)),D(),H(n+1)))},[f,S,j,L]),H=(0,u.useCallback)(e=>{setTimeout(()=>{v(e),k(!0),L(b(n[e],2)),setTimeout(()=>{var e;null===(e=S.current)||void 0===e||e.setSelectionRange(0,2)},100)},100)},[S,j]),D=(0,u.useCallback)(()=>{var e;n[parseInt(null===(e=S.current)||void 0===e?void 0:e.getAttribute("itemID"))]=parseInt(j.length>0?j:"0",16),k(!1)},[S,j]),N=(0,u.useCallback)(t=>{let{index:i,style:o}=t;return(0,l.jsxs)("div",{style:{...o},children:[(0,l.jsx)("div",{style:{display:"inline-block",width:"110px",color:x.text,backgroundColor:i===Math.floor(f/16)?x.backgroudLineNoHighLight:x.backgroudLineNo,paddingLeft:"20px"},children:b(16*i,8)}),(0,l.jsx)("div",{style:{display:"inline-block",padding:"0 20px"},children:Array(16).fill(0).map((t,o)=>y&&f==16*i+o?(0,l.jsx)("input",{ref:S,itemID:(16*i+o).toString(),value:j,onChange:_,onKeyUp:R,onKeyDown:B,onBlur:M,style:{fontFamily:"Mono",fontSize:"14px",width:"32px",height:"30px",border:"0",outline:"none",textAlign:"center",color:x.textStrong,backgroundColor:x.backgroudHighLight,marginRight:7==o?"20px":""}},o):(0,l.jsx)(r.Z,{itemID:(16*i+o).toString(),onMouseEnter:Z,onMouseLeave:I,onClick:A,style:{display:"inline-block",width:"32px",height:"30px",textAlign:"center",fontWeight:16*i+o===f?"600":"400",color:n[16*i+o]===e[16*i+o]?x.textStrong:x.textModified,backgroundColor:16*i+o===f?x.backgroudHighLight:"",marginRight:7==o?"20px":""},children:16*i+o<n.byteLength?b(n[16*i+o],2):""},o))}),(0,l.jsx)("div",{style:{display:"inline-block",padding:"0 10px",backgroundColor:x.backgroudLineNo},children:Array(16).fill(0).map((e,t)=>(0,l.jsx)("div",{itemID:(16*i+t).toString(),onMouseEnter:Z,onMouseLeave:I,onClick:A,style:{display:"inline-block",width:"10px",textAlign:"center",fontWeight:16*i+t===f?"600":"400",color:E(16*i+t),backgroundColor:16*i+t===f?x.backgroudHighLight:""},children:16*i+t<n.byteLength?m(n[16*i+t]):""},t))})]})},[n,e,j,f,y]);return(0,l.jsx)(i.Z,{children:(0,l.jsxs)(o.Z,{spacing:3,sx:{height:"100%"},children:[(0,l.jsxs)(o.Z,{direction:"row",spacing:2,children:[(0,l.jsxs)(a.Z,{startIcon:(0,l.jsx)(h.Z,{}),component:"label",variant:"outlined",sx:{borderRadius:"4px",width:"100%",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[w?"已加载文件 - "+w:"打开文件",(0,l.jsx)(p,{type:"file",onChange:F})]}),(0,l.jsx)(a.Z,{startIcon:(0,l.jsx)(g.Z,{}),component:"label",variant:"outlined",onClick:z,sx:{borderRadius:"4px",width:"150px"},children:"保存文件"})]}),(0,l.jsx)(r.Z,{sx:{height:"100%",marginTop:"20px",userSelect:"none",lineHeight:"32px",fontFamily:"Mono",fontSize:"14px",padding:"10px 0",backgroundColor:x.backgroud},children:(0,l.jsx)(c.ZP,{children:e=>(0,l.jsx)(d.t7,{height:e.height,itemCount:Math.ceil(n.byteLength/16),itemSize:32,width:e.width,children:N})})})]})})}}},function(e){e.O(0,[5688,9774,2888,179],function(){return e(e.s=64192)}),_N_E=e.O()}]);