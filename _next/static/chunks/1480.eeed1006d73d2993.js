!function(){var e={189:function(e){function r(e){return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=function(){return[]},r.resolve=r,r.id=189,e.exports=r}},r={};function t(a){var s=r[a];if(void 0!==s)return s.exports;var o=r[a]={exports:{}},E=!0;try{e[a](o,o.exports,t),E=!1}finally{E&&delete r[a]}return o.exports}t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){"use strict";var e,r;let a;let s="https://unpkg.com/@ffmpeg/core@0.12.1/dist/umd/ffmpeg-core.js";(r=e||(e={})).LOAD="LOAD",r.EXEC="EXEC",r.WRITE_FILE="WRITE_FILE",r.READ_FILE="READ_FILE",r.DELETE_FILE="DELETE_FILE",r.RENAME="RENAME",r.CREATE_DIR="CREATE_DIR",r.LIST_DIR="LIST_DIR",r.DELETE_DIR="DELETE_DIR",r.ERROR="ERROR",r.DOWNLOAD="DOWNLOAD",r.PROGRESS="PROGRESS",r.LOG="LOG";let o=Error("unknown message type"),E=Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");Error("called FFmpeg.terminate()");let n=Error("failed to import ffmpeg-core.js"),i=async({coreURL:r=s,wasmURL:o,workerURL:E})=>{let i=!a,c=o||r.replace(/.js$/g,".wasm"),l=E||r.replace(/.js$/g,".worker.js");try{importScripts(r)}catch{if(self.createFFmpegCore=(await t(189)(r)).default,!self.createFFmpegCore)throw n}return(a=await self.createFFmpegCore({mainScriptUrlOrBlob:`${r}#${btoa(JSON.stringify({wasmURL:c,workerURL:l}))}`})).setLogger(r=>self.postMessage({type:e.LOG,data:r})),a.setProgress(r=>self.postMessage({type:e.PROGRESS,data:r})),i},c=({args:e,timeout:r=-1})=>{a.setTimeout(r),a.exec(...e);let t=a.ret;return a.reset(),t},l=({path:e,data:r})=>(a.FS.writeFile(e,r),!0),f=({path:e,encoding:r})=>a.FS.readFile(e,{encoding:r}),R=({path:e})=>(a.FS.unlink(e),!0),p=({oldPath:e,newPath:r})=>(a.FS.rename(e,r),!0),L=({path:e})=>(a.FS.mkdir(e),!0),u=({path:e})=>{let r=a.FS.readdir(e),t=[];for(let s of r){let r=a.FS.stat(`${e}/${s}`),o=a.FS.isDir(r.mode);t.push({name:s,isDir:o})}return t},D=({path:e})=>(a.FS.rmdir(e),!0);self.onmessage=async({data:{id:r,type:t,data:s}})=>{let n;let F=[];try{if(t!==e.LOAD&&!a)throw E;switch(t){case e.LOAD:n=await i(s);break;case e.EXEC:n=c(s);break;case e.WRITE_FILE:n=l(s);break;case e.READ_FILE:n=f(s);break;case e.DELETE_FILE:n=R(s);break;case e.RENAME:n=p(s);break;case e.CREATE_DIR:n=L(s);break;case e.LIST_DIR:n=u(s);break;case e.DELETE_DIR:n=D(s);break;default:throw o}}catch(t){self.postMessage({id:r,type:e.ERROR,data:t.toString()});return}n instanceof Uint8Array&&F.push(n.buffer),self.postMessage({id:r,type:t,data:n},F)}}(),_N_E={}}();