(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9827],{41733:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var o=i(n(64938)),r=n(85893),s=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s},90252:function(e,t,n){e=n.nmd(e),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};i.inherits(r,o),t.JsonHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var i=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,r=e.findMatchingBracket({row:t,column:o});if(!r||r.row==t)return 0;var s=this.$getIndent(e.getLine(r.row));e.replace(new i(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var i=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};i.inherits(s,r),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(e,t,n,i){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var r=o.match(this.foldingStartMarker);if(r){var s=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,s);var l=e.getCommentFoldRange(n,s+r[0].length,1);return l&&!l.isMultiLine()&&(i?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t){var r=o.match(this.foldingStopMarker);if(r){var s=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,s):e.getCommentFoldRange(n,s,-1)}}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),i=n.search(/\S/),r=t,s=n.length,l=t+=1,a=e.getLength();++t<a;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(i>c)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=r)break;if(u.isMultiLine())t=u.end.row;else if(i==c)break}l=t}}return new o(r,s,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),r=e.getLength(),s=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++n<r;){t=e.getLine(n);var c=l.exec(t);if(c&&(c[1]?a--:a++,!a))break}var u=n;if(u>s)return new o(s,i,u,t.length)}}).call(s.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(e,t,n){"use strict";var i=e("../lib/oop"),o=e("./text").Mode,r=e("./json_highlight_rules").JsonHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("./folding/cstyle").FoldMode,a=e("../worker/worker_client").WorkerClient,c=function(){this.HighlightRules=r,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new l};i.inherits(c,o),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t);return"start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(i+=n),i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new a(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t},this.$id="ace/mode/json"}).call(c.prototype),t.Mode=c}),ace.require(["ace/mode/json"],function(t){e&&(e.exports=t)})},70142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/eatwhat",function(){return n(20423)}])},43197:function(e,t,n){"use strict";var i=n(85893),o=n(70671),r=n(88613),s=n(47023),l=n(37375),a=n(55343),c=n(51233),u=n(5616),d=n(15861),h=n(25662),g=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:m=!0}=e,{path:f}=(0,r.hI)(),[x]=g.useState(l.Z.find(e=>e.path===f));return(0,g.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,i.jsxs)(c.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(d.Z,{sx:{mb:"0px",fontWeight:600,color:o.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==x?void 0:x.label})}),(0,i.jsx)(c.Z,{direction:"row",sx:{fontFamily:"Mono"},children:s.i.filter(e=>null==x?void 0:x.tags.includes(e.name)).map(e=>(0,i.jsx)(u.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,i.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,i.jsx)(d.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==x?void 0:x.subTitle}),m?(0,i.jsx)(h.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,i.jsx)(a.Z,{}),children:"全屏"}):null]}),(0,i.jsx)(c.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},20423:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(43197),r=n(67294),s=n(86886),l=n(5616),a=n(25662),c=n(41733),u=n(74981);n(82679),n(90252),n(42270),t.default=()=>{let[e,t]=(0,r.useState)(""),[n,d]=(0,r.useState)(""),h=e=>{if(t(e),0==e.length){d("");return}d(function(e){let t=e.split(/\r?\n/),n=Math.floor(Math.random()*t.length);return t[n]}(e))};return(0,r.useEffect)(()=>{t("黄焖鸡\r\n牛肉粉\r\n老乡鸡\r\nKFC\r\n牛腩饭\r\n鳗鱼饭\r\n袁记云饺")},[]),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.ZP,{sx:{mt:"24px",maxWidth:"1020px",height:"100%","#json-input *":{fontFamily:"Mono"},"#json-output *":{fontFamily:"Mono"}},container:!0,spacing:2,children:[(0,i.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,i.jsx)("div",{children:"输入"}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(a.Z,{onClick:()=>{t(""),d("")},children:(0,i.jsx)(c.Z,{fontSize:"small",color:"primary"})})})]}),(0,i.jsx)(u.ZP,{name:"json-input",fontSize:16,style:{width:"100%",borderRadius:"4px",height:"calc(100vh - 345px)",fontFamily:"Mono"},value:e,mode:"json",theme:"monokai",onChange:e=>{t(e)},tabSize:2}),(0,i.jsx)("input",{id:"fileInput",type:"file",accept:".json",style:{display:"none"}})]}),(0,i.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",p:1},children:[(0,i.jsx)("div",{children:"输出"}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(a.Z,{variant:"contained",color:"success",size:"large",sx:{height:"30px",borderRadius:"5px",textAlign:"center"},onClick:()=>{h(e)},children:"吃啥\uD83C\uDF5A！"}),(0,i.jsx)(a.Z,{onClick:()=>{d("")},children:(0,i.jsx)(c.Z,{fontSize:"small",color:"primary"})})]})]}),(0,i.jsx)(u.ZP,{name:"json-output",fontSize:16,style:{width:"100%",borderRadius:"4px",height:"calc(100vh - 345px)",fontFamily:"Mono"},value:n,mode:"json",theme:"monokai",onChange:d,editorProps:{$blockScrolling:!0}})]})]})})}}},function(e){e.O(0,[4281,8683,4757,9774,2888,179],function(){return e(e.s=70142)}),_N_E=e.O()}]);