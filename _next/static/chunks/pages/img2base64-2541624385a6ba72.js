(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4147],{55343:function(e,i,I){"use strict";var n=I(64836);i.Z=void 0;var l=n(I(64938)),M=I(85893),t=(0,l.default)((0,M.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");i.Z=t},45670:function(e,i,I){"use strict";I.d(i,{ZP:function(){return t},_i:function(){return g},pQ:function(){return u},uU:function(){return c}});var n=I(67294),l=I(85893);let M=n.createContext(null);function t(e){let{children:i,value:I}=e,t=function(){let[e,i]=n.useState(null);return n.useEffect(()=>{i(`mui-p-${Math.round(1e5*Math.random())}`)},[]),e}(),g=n.useMemo(()=>({idPrefix:t,value:I}),[t,I]);return(0,l.jsx)(M.Provider,{value:g,children:i})}function g(){return n.useContext(M)}function c(e,i){let{idPrefix:I}=e;return null===I?null:`${e.idPrefix}-P-${i}`}function u(e,i){let{idPrefix:I}=e;return null===I?null:`${e.idPrefix}-T-${i}`}},66568:function(e,i,I){"use strict";var n=I(87462),l=I(63366),M=I(67294),t=I(11703),g=I(45670),c=I(85893);let u=["children"],r=M.forwardRef(function(e,i){let{children:I}=e,r=(0,l.Z)(e,u),s=(0,g._i)();if(null===s)throw TypeError("No TabContext provided");let N=M.Children.map(I,e=>M.isValidElement(e)?M.cloneElement(e,{"aria-controls":(0,g.uU)(s,e.props.value),id:(0,g.pQ)(s,e.props.value)}):null);return(0,c.jsx)(t.Z,(0,n.Z)({},r,{ref:i,value:s.value,children:N}))});i.Z=r},55050:function(e,i,I){"use strict";I.d(i,{Z:function(){return x}});var n=I(87462),l=I(63366),M=I(67294),t=I(90512),g=I(90948),c=I(71657),u=I(94780),r=I(34867);function s(e){return(0,r.Z)("MuiTabPanel",e)}(0,I(1588).Z)("MuiTabPanel",["root"]);var N=I(45670),a=I(85893);let o=["children","className","value"],A=e=>{let{classes:i}=e;return(0,u.Z)({root:["root"]},s,i)},j=(0,g.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,i)=>i.root})(({theme:e})=>({padding:e.spacing(3)}));var x=M.forwardRef(function(e,i){let I=(0,c.Z)({props:e,name:"MuiTabPanel"}),{children:M,className:g,value:u}=I,r=(0,l.Z)(I,o),s=(0,n.Z)({},I),x=A(s),d=(0,N._i)();if(null===d)throw TypeError("No TabContext provided");let C=(0,N.uU)(d,u),D=(0,N.pQ)(d,u);return(0,a.jsx)(j,(0,n.Z)({"aria-labelledby":D,className:(0,t.Z)(x.root,g),hidden:u!==d.value,id:C,ref:i,role:"tabpanel",ownerState:s},r,{children:u===d.value&&M}))})},10481:function(e,i,I){(window.__NEXT_P=window.__NEXT_P||[]).push(["/img2base64",function(){return I(88043)}])},3203:function(e,i,I){"use strict";var n=I(85893),l=I(5616),M=I(67294);i.Z=e=>{let i=(0,M.useCallback)(i=>{if(e.src){let i=/^data:[a-zA-Z0-9]+\/([a-zA-Z0-9]+)[^;]*;base64,/.exec(e.src);if(i&&i[1]){let I=document.createElement("a");I.style.display="none",I.href=e.src,I.download="保存图片."+i[1],document.body.appendChild(I),I.click()}}},[e.src]);return(0,n.jsxs)(l.Z,{sx:{width:"100%",padding:"20px",position:"relative",display:"inline-block",border:"black solid 1px",borderColor:"rgba(0, 0, 0, 0.2)",borderRadius:"4px",...e.sx},children:[e.src?(0,n.jsx)("img",{src:e.src,style:{width:"100%",height:"100%"}}):(0,n.jsx)(n.Fragment,{}),(0,n.jsxs)(l.Z,{sx:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"1",cursor:"pointer",color:"rgba(0,0,0,0)",fontSize:"14px",textAlign:"center",userSelect:"none",paddingTop:"20px","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.5)",color:e.src?"rgba(255,255,255,1)":""}},onClick:i,children:[" ","点击下载图片"," "]})]})}},43197:function(e,i,I){"use strict";var n=I(85893),l=I(70671),M=I(88613),t=I(47023),g=I(37375),c=I(55343),u=I(51233),r=I(5616),s=I(15861),N=I(25662),a=I(67294);i.Z=e=>{let{children:i,sx:I,fullScreen:o=!0}=e,{path:A}=(0,M.hI)(),[j]=a.useState(g.Z.find(e=>e.path===A));return(0,a.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),i=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",i&&(i.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,n.jsxs)(u.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...I},children:[(0,n.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",children:[(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.Z,{sx:{mb:"0px",fontWeight:600,color:l.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==j?void 0:j.label})}),(0,n.jsx)(u.Z,{direction:"row",sx:{fontFamily:"Mono"},children:t.i.filter(e=>null==j?void 0:j.tags.includes(e.name)).map(e=>(0,n.jsx)(r.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,n.jsx)(s.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==j?void 0:j.subTitle}),o?(0,n.jsx)(N.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(i=>{(null==e?void 0:e.requestFullscreen)?i(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?i(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?i(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&i(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),i=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",i&&(i.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,n.jsx)(c.Z,{}),children:"全屏"}):null]}),(0,n.jsx)(u.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:i})]})}},88043:function(e,i,I){"use strict";I.r(i);var n=I(85893),l=I(43197),M=I(5616),t=I(40044),g=I(51233),c=I(25662),u=I(55050),r=I(45670),s=I(66568),N=I(61903),a=I(67294),o=I(90948),A=I(3203);let j=(0,o.ZP)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),x=(0,o.ZP)("img")({maxHeight:"100%",maxWidth:"100%"});(0,o.ZP)("img")({Width:"100%",border:"black solid 1px",borderColor:"rgba(0, 0, 0, 0.1)",margin:"20px",padding:"20px",borderRadius:"3px"});let d=(0,o.ZP)("span")({});i.default=()=>{let[e,i]=(0,a.useState)("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjk4cHgiIGhlaWdodD0iMzI0cHgiIHZpZXdCb3g9IjAgMCAyOTggMzI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPumbt+axoGxvZ288L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRCNEI0QiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRkM2QzIiIHN0b3Atb3BhY2l0eT0iMC45IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRkM2QzIiIHN0b3Atb3BhY2l0eT0iMC43IiBvZmZzZXQ9Ijk5Ljk0MjYzNTUlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMTEwLjA0OTY1Nyw0OS42Njc2NDkgQzExMC4wNDk2NTcsNDkuNjY3NjQ5IDgxLjEzNTg3MDIsNDYuMjI2MzExNSA3Ni44LDI2Ljc2MzYzNjQgQzcyLjQ4ODA4NDgsNDYuMjI2MzExNSA0My41NTAzNDMxLDQ5LjY2NzY0OSA0My41NTAzNDMxLDQ5LjY2NzY0OSBDMTQuMjA1MzY0OSw1My4zMDAxNzE4IDAsMzYuNDU2NzM2OSAwLDM2LjQ1NjczNjkgQzEzLjk0MTg1OSw2NS44MDM2OTc5IDM4LjQsNjQuNzcxMjk2NyAzOC40LDY0Ljc3MTI5NjcgTDExNS4yLDY0Ljc3MTI5NjcgQzExNS4yLDY0Ljc3MTI5NjcgMTM5LjYzNDE4Niw2NS44MDM2OTc5IDE1My42LDM2LjQ1NjczNjkgQzE1My42LDM2LjQ1NjczNjkgMTM5LjM5NDYzNSw1My4zMTkyOTA0IDExMC4wNDk2NTcsNDkuNjY3NjQ5IFoiIGlkPSJwYXRoLTMiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0xNi45JSIgeT0iLTU3LjklIiB3aWR0aD0iMTMzLjklIiBoZWlnaHQ9IjIzNi44JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTQiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjAzNDY1OTI0OTggICAwIDAgMCAwIDAuNDEwMTI3OTQ0ICAgMCAwIDAgMCAwLjQwMTkyMDk3OCAgMCAwIDAgMSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpm7fmsaBsb2dvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI5Mi40MDgzNiw1OS4wNCBDMjkwLjkyNzIxNyw1MS45NjM0Mjg2IDI4NS4wMDI2NDYsNDYuNjk3MTQyOSAyNzcuNzYxNTAzLDQ2LjM2OCBDMjIyLjEzNjM2LDQ0Ljg4Njg1NzEgMTc2LjM4NTUwMywxNi41ODA1NzE0IDE1Ny45NTM1MDMsMy4wODU3MTQyOSBDMTUyLjM1ODA3NCwtMS4wMjg1NzE0MyAxNDQuOTUyMzYsLTEuMDI4NTcxNDMgMTM5LjM1NjkzMSwzLjA4NTcxNDI5IEMxMjAuNDMxMjE3LDE2LjU4MDU3MTQgNzUuMTc0MDc0Miw0NC44ODY4NTcxIDE5LjU0ODkzMTQsNDYuMzY4IEMxMi40NzIzNTk5LDQ2LjY5NzE0MjkgNi4yMTg2NDU2NSw1MS45NjM0Mjg2IDQuOTAyMDc0MjIsNTkuMDQgQy0zLjk4NDc4MjkyLDEwMy40NzQyODYgLTE5LjI4OTkyNTgsMjU0LjA1NzE0MyAxNDguOTAyMDc0LDMyNCBDMzE2LjYwMDM2LDI1My44OTI1NzEgMzAwLjk2NjA3NCwxMDMuNDc0Mjg2IDI5Mi40MDgzNiw1OS4wNCBaIiBpZD0i6Lev5b6EIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE0OSwyNjEuNCBDMjA1LjU1Mzk1OCwyNjEuNCAyNTEuNCwyMTUuNTUzOTU4IDI1MS40LDE1OSBDMjUxLjQsMTMxLjI3NTAwNCAyNDAuMzgxNTkzLDEwNi4xMjM0OTQgMjIyLjQ4NDgxMyw4Ny42ODU1MDY4IEMyMDkuOTAwNzQ5LDk2LjA5NjQ1NjggMTg1LjgxNTEyLDEwNi4wMjQxNzggMTc1LjU2NDI1OSwxMDAuODUzNjg4IEMxNjYuMzM0ODc5LDk2LjE5ODQyNzMgMTU3LjQ3NjU5MSw4OC40NTA1NjUyIDE0OC45ODkzOTYsNzcuNjEwMTAxIEMxNDIuMDQ3NzY5LDg4LjUzMzQxMDIgMTM0LjY3MDU4Niw5NS41NTE3MjIxIDEyNi44NTc4NDgsOTguNjY1MDM2NyBDMTIwLjY4OTQxOSwxMDEuMTIzMTA3IDk4LjI1OTI2MDQsMTAyLjkxNTY5NSA3NS40NDE5NDY3LDg3Ljc2MTAzOSBDNTcuNTg4MzUxMywxMDYuMTkyMTU0IDQ2LjYsMTMxLjMxMjg0NCA0Ni42LDE1OSBDNDYuNiwyMTUuNTUzOTU4IDkyLjQ0NjA0MTYsMjYxLjQgMTQ5LDI2MS40IFoiIGlkPSLmpK3lnIblvaLlpIfku70tMzEiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC015aSH5Lu9LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxLjc3MTQyMywgMTAyLjEwMTcyMikiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hC0xMzDlpIfku70tMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LjIxNzk3MSwgOTUuOTIwOTk5KSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtNTcuMjE3OTcxLCAtOTUuOTIwOTk5KSAiIHBvaW50cz0iNTYuNjY1MTUxMSA2NC45NDk2MzcyIC03LjU3MjQxNzM4ZS0xNyA5Ny4xMTA4NDEzIDUwLjYwODQwMzYgMTI2Ljg5MjM2MSA2OC44MDE2NzI5IDExNy4yNjQ3MDQgMzQuMzQzMzIyOCA5Ny4xMTA4NDEzIDU2LjY2NTE1MTEgODQuNTUwMzA4NiA5Ni45MDAxMDkxIDEwNy4zNzY3MTEgOTYuOTAwMTA5MSAxMTQuODgzOTkgMTE0LjQzNTk0MiAxMjUuNDM1NTUzIDExNC40MzU5NDIgOTcuMTEwODQxMyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hC0xMzDlpIfku70tMzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LjIxNzk3MSwgMzAuOTcxMzYyKSByb3RhdGUoLTM2MC4wMDAwMDApIHRyYW5zbGF0ZSgtNTcuMjE3OTcxLCAtMzAuOTcxMzYyKSAiIHBvaW50cz0iNTYuNjY1MTUxMSAwIC03LjU3MjQxNzM4ZS0xNyAzMi4xNjEyMDQxIDUwLjYwODQwMzYgNjEuOTQyNzIzOSA2OC44MDE2NzI5IDUyLjMxNTA2NjggMzQuMzQzMzIyOCAzMi4xNjEyMDQxIDU2LjY2NTE1MTEgMTkuNjAwNjcxNCA5Ni45MDAxMDkxIDQyLjQyNzA3NDEgOTYuOTAwMTA5MSA0OS45MzQzNTI4IDExNC40MzU5NDIgNjAuNDg1OTE1NSAxMTQuNDM1OTQyIDMyLjE2MTIwNDEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0i6ZW/5LqtbG9nb+Wkh+S7vS0yMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIuMjAwMDAwLCA0NS4yMjIyMjIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC03Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTYuNzYzMjY2NiwxOC4wMDYxODM3IEM5Ni43NjMyNjY2LDE4LjAwNjE4MzcgNzkuMzg2Mjk2OSwxNS4yOTY2MDg1IDc2Ljc5MDc5NjEsMCBDNzQuMTk1Mjk1MywxNS4yOTY2MDg1IDU2LjgxODMyNTYsMTguMDA2MTgzNyA1Ni44MTgzMjU2LDE4LjAwNjE4MzcgQzM5LjE4MzY0NjYsMjAuODY5NDkzNiAzMC42NDI0MjQyLDcuNjA5ODcwNTggMzAuNjQyNDI0Miw3LjYwOTg3MDU4IEMzOS4wMzYzODQyLDMwLjY4OTMwMTMgNTMuNzI1ODE0MSwyOS44NjI5NzcgNTMuNzI1ODE0MSwyOS44NjI5NzcgTDk5Ljg3NDE4NTksMjkuODYyOTc3IEM5OS44NzQxODU5LDI5Ljg2Mjk3NyAxMTQuNTYzNjE2LDMwLjY3MDA4NDUgMTIyLjk1NzU3Niw3LjYwOTg3MDU4IEMxMjIuOTU3NTc2LDcuNjA5ODcwNTggMTE0LjQxNjM1MywyMC44Njk0OTM2IDk2Ljc4MTY3NDQsMTguMDA2MTgzNyBMOTYuNzYzMjY2NiwxOC4wMDYxODM3IFoiIGlkPSLot6/lvoQiIGZpbGw9IiMwRkM2QzIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i6Lev5b6EIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTQpIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjMEZDNkMyIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="),[I,o]=(0,a.useState)(""),[C,D]=(0,a.useState)(""),[T,z]=(0,a.useState)(""),y=(0,a.useCallback)(e=>{i(e.target.value)},[]),w=(0,a.useCallback)(e=>{let i=e.target.files||[];if(0==i.length)return;let I=new FileReader;I.onload=function(e){null!==e.target&&o(e.target.result)},I.readAsDataURL(i[0])},[]),L=(0,a.useCallback)(()=>{z(e)},[e]),m=(0,a.useCallback)(()=>{D(I)},[I]),[b,p]=a.useState("1");return(0,n.jsx)(l.Z,{children:(0,n.jsx)(M.Z,{sx:{width:"100%",typography:"body1"},children:(0,n.jsxs)(r.ZP,{value:b,children:[(0,n.jsx)(M.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsxs)(s.Z,{onChange:(e,i)=>{p(i)},children:[(0,n.jsx)(t.Z,{label:"图片转 Base64",value:"1",sx:{textTransform:"none !important"}}),(0,n.jsx)(t.Z,{label:"Base64 转图片",value:"2",sx:{textTransform:"none !important"}})]})}),(0,n.jsx)(u.Z,{value:"1",sx:{paddingLeft:0,paddingRight:0},children:(0,n.jsxs)(g.Z,{spacing:1,sx:{color:"#FF1844"},children:[(0,n.jsxs)(c.Z,{component:"label",variant:"outlined",sx:{borderRadius:"3px",height:"179px"},children:[I?(0,n.jsx)(d,{}):(0,n.jsx)(d,{children:"选择图片"}),(0,n.jsx)(x,{src:I}),(0,n.jsx)(j,{type:"file",onChange:w})]}),(0,n.jsx)(c.Z,{size:"small",sx:{borderRadius:"4px"},component:"label",variant:"contained",color:"primary",onClick:m,children:"转换"}),(0,n.jsx)(N.Z,{value:C,variant:"outlined",multiline:!0,rows:6,InputProps:{readOnly:!0},sx:{textarea:{fontSize:"14px",fontFamily:"Mono"}}})]})}),(0,n.jsx)(u.Z,{value:"2",sx:{paddingLeft:0,paddingRight:0},children:(0,n.jsxs)(g.Z,{spacing:1,sx:{color:"#FF1844"},children:[(0,n.jsx)(N.Z,{value:e,variant:"outlined",multiline:!0,rows:6,onChange:y,sx:{textarea:{fontSize:"14px",fontFamily:"Mono"}}}),(0,n.jsx)(c.Z,{size:"small",sx:{borderRadius:"4px"},component:"label",variant:"contained",color:"primary",onClick:L,children:"转换"}),(0,n.jsx)(A.Z,{src:T})]})})]})})})}}},function(e){e.O(0,[9912,9774,2888,179],function(){return e(e.s=10481)}),_N_E=e.O()}]);