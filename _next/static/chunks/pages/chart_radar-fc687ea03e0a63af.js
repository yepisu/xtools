(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4742],{35097:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var i=n(1588),r=n(34867);function a(e){return(0,r.Z)("MuiDivider",e)}let o=(0,i.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},23599:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(63366),r=n(87462),a=n(67294),o=n(90512),l=n(94780),s=n(41796),c=n(90948),d=n(71657),u=n(59773),p=n(49990),m=n(58974),x=n(51705),h=n(35097),g=n(1588);let f=(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),v=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var b=n(34867);function y(e){return(0,b.Z)("MuiMenuItem",e)}let Z=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var w=n(85893);let j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=e=>{let{disabled:t,dense:n,divider:i,disableGutters:a,selected:o,classes:s}=e,c=(0,l.Z)({root:["root",n&&"dense",t&&"disabled",!a&&"gutters",i&&"divider",o&&"selected"]},y,s);return(0,r.Z)({},s,c)},k=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${v.root}`]:{marginTop:0,marginBottom:0},[`& .${v.inset}`]:{paddingLeft:36},[`& .${f.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${f.root} svg`]:{fontSize:"1.25rem"}})));var C=a.forwardRef(function(e,t){let n;let l=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:h=!1,disableGutters:g=!1,focusVisibleClassName:f,role:v="menuitem",tabIndex:b,className:y}=l,Z=(0,i.Z)(l,j),C=a.useContext(u.Z),E=a.useMemo(()=>({dense:p||C.dense||!1,disableGutters:g}),[C.dense,p,g]),I=a.useRef(null);(0,m.Z)(()=>{s&&I.current&&I.current.focus()},[s]);let F=(0,r.Z)({},l,{dense:E.dense,divider:h,disableGutters:g}),$=S(l),z=(0,x.Z)(I,t);return l.disabled||(n=void 0!==b?b:-1),(0,w.jsx)(u.Z.Provider,{value:E,children:(0,w.jsx)(k,(0,r.Z)({ref:z,role:v,tabIndex:n,component:c,focusVisibleClassName:(0,o.Z)($.focusVisible,f),className:(0,o.Z)($.root,y)},Z,{ownerState:F,classes:$}))})})},35608:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chart_radar",function(){return n(68523)}])},43197:function(e,t,n){"use strict";var i=n(85893),r=n(70671),a=n(88613),o=n(47023),l=n(37375),s=n(55343),c=n(51233),d=n(5616),u=n(15861),p=n(25662),m=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:x=!0}=e,{path:h}=(0,a.hI)(),[g]=m.useState(l.Z.find(e=>e.path===h));return(0,m.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,i.jsxs)(c.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{sx:{mb:"0px",fontWeight:600,color:r.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==g?void 0:g.label})}),(0,i.jsx)(c.Z,{direction:"row",sx:{fontFamily:"Mono"},children:o.i.filter(e=>null==g?void 0:g.tags.includes(e.name)).map(e=>(0,i.jsx)(d.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,i.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,i.jsx)(u.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==g?void 0:g.subTitle}),x?(0,i.jsx)(p.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,i.jsx)(s.Z,{}),children:"全屏"}):null]}),(0,i.jsx)(c.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},68523:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(43197),a=n(51233),o=n(5616),l=n(61903),s=n(73575),c=n(23599),d=n(45843),u=n(61893),p=n(67294),m=n(74981);n(82679),n(56395),n(90252),n(42270);let x=[{label:"多边形",value:"polygon"},{label:"圆形",value:"circle"}];t.default=()=>{let e=(0,p.useRef)(null),t=(0,p.useRef)(null),[n,h]=(0,p.useState)("展示数据"),[g,f]=(0,p.useState)(!0),[v,b]=(0,p.useState)("polygon"),[y,Z]=(0,p.useState)("[\n  { name: 'Sales', max: 6500 },\n  { name: 'Administration', max: 16000 },\n  { name: 'Information', max: 30000 },\n  { name: 'Customer', max: 38000 },\n  { name: 'Development', max: 52000 },\n  { name: 'Marketing', max: 25000 }\n]"),[w,j]=(0,p.useState)([]),[S,k]=(0,p.useState)('{\n  "测试数据一": [4200, 3000, 20000, 35000, 50000, 18000],\n  "测试数据二": [5000, 14000, 28000, 26000, 42000, 21000]\n}'),[C,E]=(0,p.useState)([]);return(0,p.useEffect)(()=>{let i={title:{text:n},legend:{show:g,top:"bottom",data:C.map(e=>e.name)},tooltip:{show:!0,trigger:"item"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#9e87c6"],radar:{indicator:w,shape:v},series:[{name:"Radius Mode",type:"radar",data:C}]};e.current&&t.current&&t.current.setOption(i)},[C,g,n,w,v]),(0,p.useEffect)(()=>{if(y)try{let e=Function("return ".concat(y))(),t=JSON.parse(JSON.stringify(e,null,2));j(t)}catch(e){console.log(String(e))}},[y]),(0,p.useEffect)(()=>{if(S)try{let e=Function("return ".concat(S))(),t=JSON.parse(JSON.stringify(e,null,2)),n=Object.keys(t).map(e=>({name:e,value:t[e],label:{show:!0,formatter:function(e){return e.value}}}));E(n)}catch(e){console.log(String(e))}},[S]),(0,p.useEffect)(()=>{if(e.current){t.current=u.S1(e.current,null,{renderer:"canvas"});let n=()=>t.current.resize();return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}},[]),(0,i.jsx)(r.Z,{children:(0,i.jsxs)(a.Z,{spacing:2,sx:{fontSize:"14px"},children:[(0,i.jsx)(o.Z,{ref:e,sx:{width:"100%",height:"500px",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)"}}),(0,i.jsx)(o.Z,{sx:{fontSize:"18px",fontWeight:"bold"},children:"配置项"}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(o.Z,{sx:{fontWeight:"bold"},children:"标题"}),(0,i.jsx)(l.Z,{sx:{input:{width:"200px",fontSize:"14px",p:"6px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",variant:"outlined",value:n,onChange:e=>h(e.target.value)})]}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(o.Z,{sx:{fontWeight:"bold"},children:"形状"}),(0,i.jsx)(s.Z,{sx:{width:"200px",".MuiSelect-select":{p:"6px 10px"}},size:"small",value:v,onChange:e=>b(e.target.value),children:x.map(e=>(0,i.jsx)(c.Z,{value:e.value,children:e.label},e.value))})]}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(o.Z,{sx:{fontWeight:"bold"},children:"图例组件"}),(0,i.jsx)(d.Z,{checked:g,onChange:e=>f(e.target.checked)})]})]}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(o.Z,{sx:{fontWeight:"bold"},children:"维度"}),(0,i.jsx)(o.Z,{sx:{color:"rgba(0, 0, 0, 0.45)",fontSize:"12px"},children:"[name: 坐标轴名称 max: 坐标轴最大值]"})]}),(0,i.jsx)(m.ZP,{name:"ace-editor",fontSize:14,style:{width:"100%",borderRadius:"4px",height:"200px"},value:y,mode:"javascript",theme:"monokai",onChange:Z,editorProps:{$blockScrolling:!0}}),(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(o.Z,{sx:{fontWeight:"bold"},children:"数据"}),(0,i.jsx)(o.Z,{sx:{color:"rgba(0, 0, 0, 0.45)",fontSize:"12px"},children:"按照上方维度顺序填写数据，一个雷达图可以有多组数据"})]}),(0,i.jsx)(m.ZP,{name:"ace-editor",fontSize:14,style:{width:"100%",borderRadius:"4px",height:"200px"},value:S,mode:"json",theme:"monokai",onChange:k,editorProps:{$blockScrolling:!0}})]})})}}},function(e){e.O(0,[4281,1876,4757,7248,8039,9774,2888,179],function(){return e(e.s=35608)}),_N_E=e.O()}]);