(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6479],{90252:function(e,t,n){e=n.nmd(e),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};r.inherits(o,i),t.JsonHighlightRules=o}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var i=n[1].length,o=e.findMatchingBracket({row:t,column:i});if(!o||o.row==t)return 0;var s=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,i-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,o=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(s,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var o=i.match(this.foldingStartMarker);if(o){var s=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,s);var l=e.getCommentFoldRange(n,s+o[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t){var o=i.match(this.foldingStopMarker);if(o){var s=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,s):e.getCommentFoldRange(n,s,-1)}}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),r=n.search(/\S/),o=t,s=n.length,l=t+=1,a=e.getLength();++t<a;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(r>c)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=o)break;if(d.isMultiLine())t=d.end.row;else if(r==c)break}l=t}}return new i(o,s,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),o=e.getLength(),s=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++n<o;){t=e.getLine(n);var c=l.exec(t);if(c&&(c[1]?a--:a++,!a))break}var d=n;if(d>s)return new i(s,r,d,t.length)}}).call(s.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,o=e("./json_highlight_rules").JsonHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("./folding/cstyle").FoldMode,a=e("../worker/worker_client").WorkerClient,c=function(){this.HighlightRules=o,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new l};r.inherits(c,i),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);return"start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(r+=n),r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new a(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t},this.$id="ace/mode/json"}).call(c.prototype),t.Mode=c}),ace.require(["ace/mode/json"],function(t){e&&(e.exports=t)})},73676:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chart_nightingale",function(){return n(2538)}])},43197:function(e,t,n){"use strict";var r=n(85893),i=n(70671),o=n(88613),s=n(47023),l=n(37375),a=n(55343),c=n(51233),d=n(5616),u=n(15861),h=n(25662),g=n(67294);t.Z=e=>{let{children:t,sx:n,fullScreen:x=!0}=e,{path:m}=(0,o.hI)(),[f]=g.useState(l.Z.find(e=>e.path===m));return(0,g.useEffect)(()=>{let e=e=>{if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)){let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="unset",e.style.inset="0",e.style.maxWidth="unset",e.style.padding="0",t&&(t.style.display="block"))}};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)}},[]),(0,r.jsxs)(c.Z,{sx:{px:"50px",py:2,overflow:"auto",flex:1,borderRadius:"8px",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",...n},children:[(0,r.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{sx:{mb:"0px",fontWeight:600,color:i.Z2,fontSize:"20px"},gutterBottom:!0,variant:"subtitle1",component:"div",children:null==f?void 0:f.label})}),(0,r.jsx)(c.Z,{direction:"row",sx:{fontFamily:"Mono"},children:s.i.filter(e=>null==f?void 0:f.tags.includes(e.name)).map(e=>(0,r.jsx)(d.Z,{sx:{height:"24px",lineHeight:"24px",fontSize:"12px",background:"rgba(52,90,255,0.1)",color:"#345AFF",px:1,borderRadius:1,ml:1},children:e.label},e.name))})]}),(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{position:"relative",width:"100%",alignSelf:"stretch",mb:"24px"},children:[(0,r.jsx)(u.Z,{variant:"caption",sx:{display:"inline-block",maxWidth:"100%",pl:"6px",color:"rgba(11,37,98,0.5)",background:"rgba(11,37,98,0.04)",borderRadius:1,lineHeight:"24px"},children:null==f?void 0:f.subTitle}),x?(0,r.jsx)(h.Z,{size:"small",onClick:()=>{let e=document.body;new Promise(t=>{(null==e?void 0:e.requestFullscreen)?t(e.requestFullscreen()):(null==e?void 0:e.mozRequestFullScreen)?t(null==e?void 0:e.mozRequestFullScreen()):(null==e?void 0:e.webkitRequestFullscreen)?t(null==e?void 0:e.webkitRequestFullscreen()):(null==e?void 0:e.msRequestFullscreen)&&t(null==e?void 0:e.msRequestFullscreen())}).then(()=>{let e=document.getElementById("fullscreen-element"),t=document.getElementById("rivers-header");e&&(e.style.position="fixed",e.style.inset="0",e.style.maxWidth="100vw",e.style.background="#fff",e.style.padding="84px 14px 14px 14px",t&&(t.style.display="none"))})},sx:{borderRadius:"4px",height:"24px"},variant:"outlined",startIcon:(0,r.jsx)(a.Z,{}),children:"全屏"}):null]}),(0,r.jsx)(c.Z,{id:"fullscreen-element",sx:{gap:"18px",maxWidth:"1020px",fontFamily:"Mono",mx:"auto",flex:1,width:"100%"},children:t})]})}},2538:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(43197),o=n(51233),s=n(5616),l=n(61903),a=n(45843),c=n(61893),d=n(67294),u=n(74981);n(82679),n(90252),n(42270),t.default=()=>{let e=(0,d.useRef)(null),t=(0,d.useRef)(null),[n,h]=(0,d.useState)('{\n  "rose 1": 40,\n  "rose 2": 38,\n  "rose 3": 32,\n  "rose 4": 30,\n  "rose 5": 28,\n  "rose 6": 26,\n  "rose 7": 22,\n  "rose 8": 18,\n  "rose 9": 44,\n  "rose 10": 29\n}'),[g,x]=(0,d.useState)([]),[m,f]=(0,d.useState)(!0),[p,b]=(0,d.useState)(!0),[v,k]=(0,d.useState)([50,200]),[w,j]=(0,d.useState)({borderRadius:10,borderColor:"#ffffff",borderWidth:4}),[S,R]=(0,d.useState)(!0),[Z,y]=(0,d.useState)(""),[_,F]=(0,d.useState)("展示数据");return(0,d.useEffect)(()=>{let n={title:{text:_},legend:{show:p,top:"bottom"},tooltip:{show:!0,trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#9e87c6"],series:[{name:"Radius Mode",type:"pie",radius:v,roseType:"radius",itemStyle:{...w},label:{show:m,formatter:"{b}\n{c} ({d}%)"},data:g}]};e.current&&t.current&&(t.current.setOption(n),R(!1))},[g,m,v,w,p,_]),(0,d.useEffect)(()=>{if(n)try{let e=Function("return ".concat(n))(),t=JSON.parse(JSON.stringify(e,null,2)),r=Object.keys(t).map(e=>({name:e,value:t[e]}));R(!0),x(r)}catch(e){y(String(e))}},[n]),(0,d.useEffect)(()=>{if(e.current){t.current=c.S1(e.current,null,{renderer:"canvas"});let n=()=>t.current.resize();return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}},[]),(0,r.jsx)(i.Z,{children:(0,r.jsxs)(o.Z,{spacing:2,sx:{fontSize:"14px"},children:[(0,r.jsx)(s.Z,{ref:e,sx:{width:"100%",height:"500px",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)"}}),(0,r.jsx)(s.Z,{sx:{fontSize:"18px",fontWeight:"bold"},children:"配置项"}),(0,r.jsxs)(o.Z,{direction:"row",spacing:4,children:[(0,r.jsx)(o.Z,{spacing:2,sx:{width:"50%"},children:(0,r.jsx)(u.ZP,{name:"ace-editor",fontSize:14,style:{width:"100%",borderRadius:"4px",height:"100%"},value:n,mode:"json",theme:"monokai",onChange:h,editorProps:{$blockScrolling:!0}})}),(0,r.jsxs)(o.Z,{spacing:2,sx:{width:"calc(50% - 32px)"},children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px",fontWeight:"bold"},children:"标题"}),(0,r.jsx)(l.Z,{sx:{flexGrow:1,input:{fontSize:"14px",p:"6px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",variant:"outlined",value:_,onChange:e=>F(e.target.value)})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px",fontWeight:"bold"},children:"图例组件"}),(0,r.jsx)(a.Z,{checked:p,onChange:e=>b(e.target.checked)})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px",fontWeight:"bold"},children:"文本标签"}),(0,r.jsx)(a.Z,{checked:m,onChange:e=>f(e.target.checked)})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"flex-start",children:[(0,r.jsx)(s.Z,{sx:{width:"80px",fontWeight:"bold",mt:"7px"},children:"图形样式"}),(0,r.jsxs)(o.Z,{spacing:2,children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px"},children:"间隙宽度"}),(0,r.jsx)(l.Z,{sx:{width:"120px",input:{p:"6px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",type:"number",variant:"outlined",value:w.borderWidth,onChange:e=>j({...w,borderWidth:e.target.value})})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px"},children:"间隙颜色"}),(0,r.jsx)(l.Z,{sx:{width:"120px",input:{p:"8px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",type:"color",variant:"outlined",value:w.borderColor,onChange:e=>j({...w,borderColor:e.target.value})})]}),(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(s.Z,{sx:{width:"80px"},children:"花瓣圆角"}),(0,r.jsx)(l.Z,{sx:{width:"120px",input:{p:"6px 10px"},"input::placeholder":{fontSize:"14px"}},size:"small",type:"number",variant:"outlined",value:w.borderRadius,onChange:e=>j({...w,borderRadius:e.target.value})})]})]})]})]})]})]})})}}},function(e){e.O(0,[4281,1876,4757,8039,9774,2888,179],function(){return e(e.s=73676)}),_N_E=e.O()}]);