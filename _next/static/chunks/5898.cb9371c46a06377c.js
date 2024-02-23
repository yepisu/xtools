"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5898],{77137:function(e,t,r){var a,n;let s;r.d(t,{C:function(){return c}}),(n=a||(a={})).LOAD="LOAD",n.EXEC="EXEC",n.WRITE_FILE="WRITE_FILE",n.READ_FILE="READ_FILE",n.DELETE_FILE="DELETE_FILE",n.RENAME="RENAME",n.CREATE_DIR="CREATE_DIR",n.LIST_DIR="LIST_DIR",n.DELETE_DIR="DELETE_DIR",n.ERROR="ERROR",n.DOWNLOAD="DOWNLOAD",n.PROGRESS="PROGRESS",n.LOG="LOG";let i=(s=0,()=>s++);Error("unknown message type");let o=Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),l=Error("called FFmpeg.terminate()");Error("failed to import ffmpeg-core.js");class c{#e=null;#t={};#r={};#a=[];#n=[];loaded=!1;#s=()=>{this.#e&&(this.#e.onmessage=({data:{id:e,type:t,data:r}})=>{switch(t){case a.LOAD:this.loaded=!0,this.#t[e](r);break;case a.EXEC:case a.WRITE_FILE:case a.READ_FILE:case a.DELETE_FILE:case a.RENAME:case a.CREATE_DIR:case a.LIST_DIR:case a.DELETE_DIR:this.#t[e](r);break;case a.LOG:this.#a.forEach(e=>e(r));break;case a.PROGRESS:this.#n.forEach(e=>e(r));break;case a.ERROR:this.#r[e](r)}delete this.#t[e],delete this.#r[e]})};#i=({type:e,data:t},r=[])=>this.#e?new Promise((a,n)=>{let s=i();this.#e&&this.#e.postMessage({id:s,type:e,data:t},r),this.#t[s]=a,this.#r[s]=n}):Promise.reject(o);on(e,t){"log"===e?this.#a.push(t):"progress"===e&&this.#n.push(t)}off(e,t){"log"===e?this.#a=this.#a.filter(e=>e!==t):"progress"===e&&(this.#n=this.#n.filter(e=>e!==t))}load=(e={})=>(this.#e||(this.#e=new Worker(r.tu(new URL(r.p+r.u(1480),r.b)),{type:void 0}),this.#s()),this.#i({type:a.LOAD,data:e}));exec=(e,t=-1)=>this.#i({type:a.EXEC,data:{args:e,timeout:t}});terminate=()=>{for(let e of Object.keys(this.#r))this.#r[e](l),delete this.#r[e],delete this.#t[e];this.#e&&(this.#e.terminate(),this.#e=null,this.loaded=!1)};writeFile=(e,t)=>{let r=[];return t instanceof Uint8Array&&r.push(t.buffer),this.#i({type:a.WRITE_FILE,data:{path:e,data:t}},r)};readFile=(e,t="binary")=>this.#i({type:a.READ_FILE,data:{path:e,encoding:t}});deleteFile=e=>this.#i({type:a.DELETE_FILE,data:{path:e}});rename=(e,t)=>this.#i({type:a.RENAME,data:{oldPath:e,newPath:t}});createDir=e=>this.#i({type:a.CREATE_DIR,data:{path:e}});listDir=e=>this.#i({type:a.LIST_DIR,data:{path:e}});deleteDir=e=>this.#i({type:a.DELETE_DIR,data:{path:e}})}},11814:function(e,t,r){r.d(t,{dc:function(){return i},Wn:function(){return l}});let a=Error("failed to get response body reader"),n=Error("failed to complete download"),s=e=>new Promise((t,r)=>{let a=new FileReader;a.onload=()=>{let{result:e}=a;e instanceof ArrayBuffer?t(new Uint8Array(e)):t(new Uint8Array)},a.onerror=e=>{r(Error(`File could not be read! Code=${e?.target?.error?.code||-1}`))},a.readAsArrayBuffer(e)}),i=async e=>{let t;if("string"==typeof e)t=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(",")[1]).split("").map(e=>e.charCodeAt(0)):await (await fetch(e)).arrayBuffer();else if(e instanceof URL)t=await (await fetch(e)).arrayBuffer();else{if(!(e instanceof File||e instanceof Blob))return new Uint8Array;t=await s(e)}return new Uint8Array(t)},o=async(e,t)=>{let r;let s=await fetch(e);try{let i=parseInt(s.headers.get("Content-Length")||"-1"),o=s.body?.getReader();if(!o)throw a;let l=[],c=0;for(;;){let{done:r,value:a}=await o.read(),s=a?a.length:0;if(r){if(-1!=i&&i!==c)throw n;t&&t({url:e,total:i,received:c,delta:s,done:r});break}l.push(a),c+=s,t&&t({url:e,total:i,received:c,delta:s,done:r})}let d=new Uint8Array(c),h=0;for(let e of l)d.set(e,h),h+=e.length;r=d.buffer}catch(a){console.log("failed to send download progress event: ",a),r=await s.arrayBuffer(),t&&t({url:e,total:r.byteLength,received:r.byteLength,delta:0,done:!0})}return r},l=async(e,t,r=!1,a)=>{let n=r?await o(e,a):await (await fetch(e)).arrayBuffer(),s=new Blob([n],{type:t});return URL.createObjectURL(s)}},65898:function(e,t,r){r.r(t);var a=r(85893),n=r(77137),s=r(11814),i=r(51233),o=r(25662),l=r(5616),c=r(57709),d=r(11971),h=r(93162),f=r(55733),p=r.n(f),E=r(67294);t.default=()=>{let[e,t]=(0,E.useState)(),[r,f]=(0,E.useState)(3),[u,g]=(0,E.useState)(0),[w,m]=(0,E.useState)([]),[R,x]=(0,E.useState)(""),[y,L]=(0,E.useState)([]),[b,v]=(0,E.useState)(!1),[j,I]=(0,E.useState)(!1),[k,D]=(0,E.useState)(!1),A=(0,E.useRef)(new n.C),C=(0,E.useRef)(null),_=()=>{let e=document.getElementById("videoframe");null==e||e.click()},F=async()=>{try{D(!0);let t=document.getElementById("videoEl"),a=(null==t?void 0:t.duration)||0;m([]),L([]);let n=A.current;await n.writeFile("input.mp4",await (0,s.dc)(e)),await n.exec(["-i","input.mp4","-vf","fps=".concat(r),"-f","image2","output_%01d.png"]);let i=[],o=[];for(let e=0;e<Math.floor(a*r);e++){let t=await n.readFile("output_".concat(e+1,".png")),r=URL.createObjectURL(new Blob([t],{type:"image/png"})),a=new File([t],"frame".concat(e+1,".png"),{type:"image/png"});o.push(a),i.push(r)}L(o),m(i),D(!1),C.current&&(C.current.innerHTML="截图提取完成")}catch(e){C.current&&(C.current.innerHTML='<div style="color: red">'.concat(e,"</div>")),D(!1)}},Z=async()=>{v(!0);let e="https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd",t=A.current;t.on("log",e=>{let{message:t}=e;C.current&&(C.current.innerHTML=t)}),await t.load({coreURL:await (0,s.Wn)("".concat(e,"/ffmpeg-core.js"),"text/javascript"),wasmURL:await (0,s.Wn)("".concat(e,"/ffmpeg-core.wasm"),"application/wasm")}),v(!1)};return(0,E.useEffect)(()=>{let e=document.getElementById("videoEl");null==e||e.addEventListener("loadeddata",()=>{g((null==e?void 0:e.duration)||0)})},[e]),(0,E.useEffect)(()=>{Z()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Z,{spacing:2,children:[(0,a.jsxs)(i.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,a.jsx)(o.Z,{variant:"outlined",onClick:_,children:e?"更换视频":"上传视频"}),!!e&&(0,a.jsx)(l.Z,{children:e.name})]}),(0,a.jsx)(l.Z,{sx:{minHeight:"290px",bgcolor:"#f5f5f5"},children:e?(0,a.jsx)(l.Z,{component:"video",id:"videoEl",controls:!0,sx:{width:"100%"},src:URL.createObjectURL(e)}):(0,a.jsx)(l.Z,{onClick:_,sx:{fontSize:"12px",color:"#999",textAlign:"center",lineHeight:"290px",cursor:"pointer"},children:"上传视频后即可提取视频帧截图"})}),(0,a.jsx)(l.Z,{sx:{fontSize:"12px",bgcolor:"rgba(0,0,0,0.1)",px:2,borderRadius:"4px",lineHeight:"40px"},ref:C}),(0,a.jsx)(l.Z,{sx:{fontSize:"18px",fontWeight:"bold"},children:"视频帧设置"}),(0,a.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,children:[(0,a.jsxs)(i.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,a.jsx)(l.Z,{children:"视频帧采样间隔"}),(0,a.jsx)(c.Z,{sx:{width:"100px"},type:"number",value:(1/r).toFixed(2),size:"small",endAdornment:"秒",onChange:e=>{f(1e3*Number(e.target.value))}}),(0,a.jsx)(l.Z,{children:"视频帧数"}),(0,a.jsx)(c.Z,{sx:{width:"100px"},type:"number",value:r,size:"small",endAdornment:"fps",onChange:e=>{let t=Number(e.target.value);f(t>=0?t:r)}}),(0,a.jsxs)(l.Z,{children:["预计截取 ",Math.floor(u*r)," 张"]})]}),(0,a.jsx)(o.Z,{variant:"contained",onClick:F,disabled:b||k||!e,children:"提取视频帧"})]}),(0,a.jsx)(l.Z,{sx:{minHeight:"500px",border:"1px dashed #ccc",p:2,bgcolor:"#f5f5f5"},children:(0,a.jsx)(i.Z,{direction:"row",flexWrap:"wrap",sx:{gap:2},children:w.map(e=>(0,a.jsx)(l.Z,{onClick:()=>x(e),component:"img",width:409,src:e,sx:{cursor:"pointer"}},e))})}),(0,a.jsx)(o.Z,{variant:"contained",onClick:()=>{I(!0);let e=new(p());y.forEach(t=>{e.file(t.name,t)}),e.generateAsync({type:"blob"}).then(e=>{(0,h.saveAs)(e,"frames.zip")}).finally(()=>{I(!1)})},disabled:0===y.length||j,children:"下载所有视频帧截图"}),(0,a.jsx)(l.Z,{id:"videoframe",component:"input",type:"file",accept:"video/*",style:{display:"none"},onChange:e=>{e.target.files&&t(e.target.files[0])}})]}),(0,a.jsx)(d.Z,{open:!!R,onClose:()=>x(""),children:(0,a.jsx)(l.Z,{sx:{maxWidth:"100vw",maxHeight:"100vh",cursor:"pointer"},component:"img",onClick:()=>x(""),src:R})})]})}}}]);