(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4362],{256:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var l=r(n(64938)),o=n(85893),i=(0,l.default)((0,o.jsx)("path",{d:"M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"}),"CleaningServicesRounded");t.Z=i},41899:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var l=r(n(64938)),o=n(85893),i=(0,l.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},55343:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var l=r(n(64938)),o=n(85893),i=(0,l.default)((0,o.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.Z=i},45670:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i},_i:function(){return s},pQ:function(){return u},uU:function(){return c}});var r=n(67294),l=n(85893);let o=r.createContext(null);function i(e){let{children:t,value:n}=e,i=function(){let[e,t]=r.useState(null);return r.useEffect(()=>{t(`mui-p-${Math.round(1e5*Math.random())}`)},[]),e}(),s=r.useMemo(()=>({idPrefix:i,value:n}),[i,n]);return(0,l.jsx)(o.Provider,{value:s,children:t})}function s(){return r.useContext(o)}function c(e,t){let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-P-${t}`}function u(e,t){let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-T-${t}`}},66568:function(e,t,n){"use strict";var r=n(87462),l=n(63366),o=n(67294),i=n(11703),s=n(45670),c=n(85893);let u=["children"],a=o.forwardRef(function(e,t){let{children:n}=e,a=(0,l.Z)(e,u),d=(0,s._i)();if(null===d)throw TypeError("No TabContext provided");let x=o.Children.map(n,e=>o.isValidElement(e)?o.cloneElement(e,{"aria-controls":(0,s.uU)(d,e.props.value),id:(0,s.pQ)(d,e.props.value)}):null);return(0,c.jsx)(i.Z,(0,r.Z)({},a,{ref:t,value:d.value,children:x}))});t.Z=a},87251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/camelcase",function(){return n(3783)}])},31831:function(e,t,n){"use strict";var r=n(85893),l=n(67294),o=n(95982),i=n(13029),s=n(46901),c=n(20745),u=n(2734);let a=l.forwardRef(function(e,t){return(0,r.jsx)(s.Z,{elevation:6,ref:t,variant:"filled",...e})});function d(e){var t;let n=(0,u.Z)(),[s,c]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{setTimeout(()=>{c(!1)},2e3)},[]),(0,r.jsx)(i.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,sx:{zIndex:n.zIndex.snackbar+100},children:(0,r.jsx)(a,{sx:{borderRadius:"0","&.MuiAlert-filledSuccess":{backgroundColor:o.T$}},icon:!1,color:null==e?void 0:e.color,children:null!==(t=null==e?void 0:e.content)&&void 0!==t?t:""})},"top-center-warning")}function x(e){let t=document.createElement("div");document.body.appendChild(t),t.id="warning-window",t.style.zIndex="-2",(0,c.createRoot)(t).render((0,r.jsx)(d,{...e})),setTimeout(()=>{t.remove()},3e3)}t.Z={success:e=>x({color:"success",content:e}),warning:e=>x({color:"warning",content:e}),error:e=>x({color:"error",content:e})}},43197:function(e,t,n){"use strict";var r=n(85893),l=n(70671),o=n(88613),i=n(47023),s=n(37375),c=n(55343),u=n(51233),a=n(5616),d=n(15861),x=n(25662),p=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:h=!0}=e,{path:m}=(0,o.hI)(),[f]=p.useState(s.Z.find(e=>e.path===m));return(0,p.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,r.jsxs)(u.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,r.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)(d.Z,{sx:{mb:"0px",fontWeight:600,color:l.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,r.jsx)(u.Z,{direction:"row",sx:{fontFamily:"Mono"},children:i.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,r.jsx)(a.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,r.jsx)(d.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),h?(0,r.jsx)(x.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,r.jsx)(c.Z,{}),children:"全屏"}):null]}),(0,r.jsx)(u.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},3783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(85893),l=n(31831),o=n(43197),i=n(70671),s=n(256),c=n(41899),u=n(45670),a=n(66568),d=n(5616),x=n(40044),p=n(15861),h=n(57709),m=n(90948),f=n(67294),v=n(74855);let g=/([\p{Ll}\d])(\p{Lu})/gu,b=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,Z=/(\d)(\p{Ll})/gu,w=/(\p{L})(\d)/gu,j=/[^\p{L}\d]+/giu,C="$1\x00$2";function y(e,t){let n=e.trim();n=n.replace(g,C).replace(b,C),t?.separateNumbers&&(n=n.replace(Z,C).replace(w,C));let r=0,l=(n=n.replace(j,"\x00")).length;for(;"\x00"===n.charAt(r);)r++;if(r===l)return[];for(;"\x00"===n.charAt(l-1);)l--;return n.slice(r,l).split(/\0/g)}function E(e){return!1===e?e=>e.toLowerCase():t=>t.toLocaleLowerCase(e)}function k(e,t){let n=t?.prefixCharacters??"",r=t?.suffixCharacters??"",l=0,o=e.length;for(;l<e.length;){let t=e.charAt(l);if(!n.includes(t))break;l++}for(;o>l;){let t=o-1,n=e.charAt(t);if(!r.includes(n))break;o=t}return[e.slice(0,l),e.slice(l,o),e.slice(o)]}let F=(0,m.ZP)("label")({cursor:"pointer"}),z="name_is_so_long";var R=()=>{let[e,t]=f.useState("toCamelCase"),[n,m]=(0,f.useState)(z),[g,b]=(0,f.useState)(""),Z=(0,f.useMemo)(()=>{let e=new Map;return e.set("toSnake",e=>(function(e,t){let[n,r,l]=k(e,t);return n+y(r,t).map(E(t?.locale)).join(t?.delimiter??" ")+l})(e,{delimiter:"_"})),e.set("toCamelCase",e=>(function(e,t){var n;let[r,l,o]=k(e,t),i=E(t?.locale),s=!1===(n=t?.locale)?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n),c=t?.mergeAmbiguousCharacters?e=>`${s(e[0])}${i(e.slice(1))}`:(e,t)=>{let n=e[0];return(t>0&&n>="0"&&n<="9"?"_"+n:s(n))+i(e.slice(1))};return r+y(l,t).map(c).join(t?.delimiter??"")+o})(e)),e},[]),w=(0,f.useCallback)(t=>{var n=t.target.value;m(n);var r=Z.get(e);r&&b(r(n))},[Z,e]),j=(0,f.useCallback)(()=>{l.Z.success("复制成功")},[]),C=(0,f.useCallback)(()=>{m(""),b("")},[]);return(0,f.useEffect)(()=>{let e=Z.get("toCamelCase");e&&b(e(z))},[]),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.ZP,{value:e,children:(0,r.jsx)(d.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,r.jsxs)(a.Z,{onChange:(e,r)=>{t(r);let l=Z.get(r);l&&b(l(n))},children:[(0,r.jsx)(x.Z,{label:"转驼峰",value:"toCamelCase",sx:{textTransform:"none !important"}}),(0,r.jsx)(x.Z,{label:"转下划线",value:"toSnake",sx:{textTransform:"none !important"}})]})})}),(0,r.jsx)(p.Z,{sx:{width:"180px"},variant:"body2",color:i.hm,children:"输入"}),(0,r.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,r.jsx)(h.Z,{sx:{width:"100%",fontFamily:"Mono",textarea:{paddingRight:"35px"}},value:n,onChange:w,margin:"dense",minRows:"5",maxRows:"10",multiline:!0,autoFocus:!0}),(0,r.jsx)(d.Z,{sx:{position:"absolute",right:"16px",top:"16px",width:"30px",paddingTop:"5px",height:"30px",textAlign:"center",bgcolor:"#eee",borderRadius:"50%",cursor:"pointer",color:n?"#52C41A":"#fff","&:hover":{color:"#345AFF"}},children:(0,r.jsx)(F,{onClick:C,children:(0,r.jsx)(s.Z,{fontSize:"small"})})})]}),(0,r.jsx)(p.Z,{sx:{width:"180px"},variant:"body2",color:i.hm,children:"输出"}),(0,r.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,r.jsx)(h.Z,{sx:{width:"100%",fontFamily:"Mono",textarea:{paddingRight:"35px"}},value:g,margin:"dense",minRows:"5",maxRows:"10",multiline:!0,readOnly:!0}),(0,r.jsx)(d.Z,{sx:{position:"absolute",right:"16px",top:"16px",width:"30px",paddingTop:"5px",height:"30px",textAlign:"center",bgcolor:"#eee",borderRadius:"50%",cursor:"pointer",color:n?"#52C41A":"#fff","&:hover":{color:"#345AFF"}},children:(0,r.jsx)(v.CopyToClipboard,{text:g,onCopy:j,children:(0,r.jsx)(c.Z,{fontSize:"small"})})})]})]})})}}},function(e){e.O(0,[9912,9774,2888,179],function(){return e(e.s=87251)}),_N_E=e.O()}]);