(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1905],{55343:function(t,e,r){"use strict";var n=r(64836);e.Z=void 0;var o=n(r(64938)),i=r(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");e.Z=a},35097:function(t,e,r){"use strict";r.d(e,{V:function(){return i}});var n=r(1588),o=r(34867);function i(t){return(0,o.Z)("MuiDivider",t)}let a=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=a},23599:function(t,e,r){"use strict";r.d(e,{Z:function(){return B}});var n=r(63366),o=r(87462),i=r(67294),a=r(90512),s=r(94780),u=r(41796),l=r(90948),c=r(71657),d=r(59773),f=r(49990),h=r(58974),g=r(51705),p=r(35097),m=r(1588);let y=(0,m.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),v=(0,m.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var E=r(34867);function w(t){return(0,E.Z)("MuiMenuItem",t)}let b=(0,m.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var C=r(85893);let A=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],I=t=>{let{disabled:e,dense:r,divider:n,disableGutters:i,selected:a,classes:u}=t,l=(0,s.Z)({root:["root",r&&"dense",e&&"disabled",!i&&"gutters",n&&"divider",a&&"selected"]},w,u);return(0,o.Z)({},u,l)},M=(0,l.ZP)(f.Z,{shouldForwardProp:t=>(0,l.FO)(t)||"classes"===t,name:"MuiMenuItem",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.dense&&e.dense,r.divider&&e.divider,!r.disableGutters&&e.gutters]}})(({theme:t,ownerState:e})=>(0,o.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,u.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,u.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,u.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,u.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${p.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${p.Z.inset}`]:{marginLeft:52},[`& .${v.root}`]:{marginTop:0,marginBottom:0},[`& .${v.inset}`]:{paddingLeft:36},[`& .${y.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${y.root} svg`]:{fontSize:"1.25rem"}})));var B=i.forwardRef(function(t,e){let r;let s=(0,c.Z)({props:t,name:"MuiMenuItem"}),{autoFocus:u=!1,component:l="li",dense:f=!1,divider:p=!1,disableGutters:m=!1,focusVisibleClassName:y,role:v="menuitem",tabIndex:E,className:w}=s,b=(0,n.Z)(s,A),B=i.useContext(d.Z),N=i.useMemo(()=>({dense:f||B.dense||!1,disableGutters:m}),[B.dense,f,m]),T=i.useRef(null);(0,h.Z)(()=>{u&&T.current&&T.current.focus()},[u]);let P=(0,o.Z)({},s,{dense:N.dense,divider:p,disableGutters:m}),x=I(s),R=(0,g.Z)(T,e);return s.disabled||(r=void 0!==E?E:-1),(0,C.jsx)(d.Z.Provider,{value:N,children:(0,C.jsx)(M,(0,o.Z)({ref:R,role:v,tabIndex:r,component:l,focusVisibleClassName:(0,a.Z)(x.focusVisible,y),className:(0,a.Z)(x.root,w)},b,{ownerState:P,classes:x}))})})},65987:function(t){"use strict";var e={single_source_shortest_paths:function(t,r,n){var o,i,a,s,u,l,c,d={},f={};f[r]=0;var h=e.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(a in i=(o=h.pop()).value,s=o.cost,u=t[i]||{})u.hasOwnProperty(a)&&(l=s+u[a],c=f[a],(void 0===f[a]||c>l)&&(f[a]=l,h.push(a,l),d[a]=i));if(void 0!==n&&void 0===f[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},62378:function(t){"use strict";t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=(o-55296)*1024+i-56320+65536,n+=1)}if(o<128){e.push(o);continue}if(o<2048){e.push(o>>6|192),e.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128);continue}if(o>=65536&&o<=1114111){e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}},92592:function(t,e,r){let n=r(47138),o=r(95115),i=r(6907),a=r(93776);function s(t,e,r,i,a){let s=[].slice.call(arguments,1),u=s.length,l="function"==typeof s[u-1];if(!l&&!n())throw Error("Callback required as last argument");if(l){if(u<2)throw Error("Too few arguments provided");2===u?(a=r,r=e,e=i=void 0):3===u&&(e.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0))}else{if(u<1)throw Error("Too few arguments provided");return 1===u?(r=e,e=i=void 0):2!==u||e.getContext||(i=r,r=e,e=void 0),new Promise(function(n,a){try{let a=o.create(r,i);n(t(a,e,i))}catch(t){a(t)}})}try{let n=o.create(r,i);a(null,t(n,e,i))}catch(t){a(t)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,function(t,e,r){return a.render(t,r)})},47138:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(t,e,r){let n=r(10242).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];let e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7];for(let t=1;t<e-1;t++)i[t]=i[t-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){let r=[],n=e.getRowColCoords(t),o=n.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)(0!==t||0!==e)&&(0!==t||e!==o-1)&&(t!==o-1||0!==e)&&r.push([n[t],n[e]]);return r}},8260:function(t,e,r){let n=r(76910),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},97245:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},73280:function(t){function e(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,r,n){let o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},43424:function(t,e,r){let n=r(62378),o=r(76910);function i(t){this.mode=o.BYTE,"string"==typeof t&&(t=n(t)),this.data=new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},35393:function(t,e,r){let n=r(64908),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[(t-1)*4+0];case n.M:return o[(t-1)*4+1];case n.Q:return o[(t-1)*4+2];case n.H:return o[(t-1)*4+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[(t-1)*4+0];case n.M:return i[(t-1)*4+1];case n.Q:return i[(t-1)*4+2];case n.H:return i[(t-1)*4+3];default:return}}},64908:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw Error("Unknown EC Level: "+t)}}(t)}catch(t){return r}}},76526:function(t,e,r){let n=r(10242).getSymbolSize;e.getPositions=function(t){let e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},61642:function(t,e,r){let n=r(10242),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){let r=t.bit<<3|e,i=r<<10;for(;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return(r<<10|i)^21522}},69729:function(t,e){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)r[e]=t,n[t]=e,256&(t<<=1)&&(t^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),e.log=function(t){if(t<1)throw Error("log("+t+")");return n[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[n[t]+n[e]]}},35442:function(t,e,r){let n=r(76910),o=r(10242);function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),t.put(r,13)}},t.exports=i},27126:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){let e=t.size,n=0,o=0,i=0,a=null,s=null;for(let u=0;u<e;u++){o=i=0,a=s=null;for(let l=0;l<e;l++){let e=t.get(u,l);e===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=e,o=1),(e=t.get(l,u))===s?i++:(i>=5&&(n+=r.N1+(i-5)),s=e,i=1)}o>=5&&(n+=r.N1+(o-5)),i>=5&&(n+=r.N1+(i-5))}return n},e.getPenaltyN2=function(t){let e=t.size,n=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){let e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);(4===e||0===e)&&n++}return n*r.N2},e.getPenaltyN3=function(t){let e=t.size,n=0,o=0,i=0;for(let r=0;r<e;r++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(r,a),a>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(a,r),a>=10&&(1488===i||93===i)&&n++}return n*r.N3},e.getPenaltyN4=function(t){let e=0,n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*r.N4},e.applyMask=function(t,r){let n=r.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)r.isReserved(i,o)||r.xor(i,o,function(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+t)}}(t,i,o))},e.getBestMask=function(t,r){let n=Object.keys(e.Patterns).length,o=0,i=1/0;for(let a=0;a<n;a++){r(a),e.applyMask(a,t);let n=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),n<i&&(i=n,o=a)}return o}},76910:function(t,e,r){let n=r(43114),o=r(7007);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!n.isValid(e))throw Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw Error("Unknown mode: "+t)}}(t)}catch(t){return r}}},41085:function(t,e,r){let n=r(76910);function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,r;for(e=0;e+3<=this.data.length;e+=3)r=parseInt(this.data.substr(e,3),10),t.put(r,10);let n=this.data.length-e;n>0&&(r=parseInt(this.data.substr(e),10),t.put(r,3*n+1))},t.exports=o},26143:function(t,e,r){let n=r(69729);e.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=n.mul(t[o],e[i]);return r},e.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let t=r[0];for(let o=0;o<e.length;o++)r[o]^=n.mul(e[o],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},e.generateECPolynomial=function(t){let r=new Uint8Array([1]);for(let o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,n.exp(o)]));return r}},95115:function(t,e,r){let n=r(10242),o=r(64908),i=r(97245),a=r(73280),s=r(21845),u=r(76526),l=r(27126),c=r(35393),d=r(52882),f=r(23103),h=r(61642),g=r(76910),p=r(16130);function m(t,e,r){let n,o;let i=t.size,a=h.getEncodedBits(e,r);for(n=0;n<15;n++)o=(a>>n&1)==1,n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}e.create=function(t,e){let r,h;if(void 0===t||""===t)throw Error("No input text");let y=o.M;return void 0!==e&&(y=o.from(e.errorCorrectionLevel,o.M),r=f.from(e.version),h=l.from(e.maskPattern),e.toSJISFunc&&n.setToSJISFunction(e.toSJISFunc)),function(t,e,r,o){let h;if(Array.isArray(t))h=p.fromArray(t);else if("string"==typeof t){let n=e;if(!n){let e=p.rawSplit(t);n=f.getBestVersionForData(e,r)}h=p.fromString(t,n||40)}else throw Error("Invalid data");let y=f.getBestVersionForData(h,r);if(!y)throw Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<y)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+y+".\n")}else e=y;let v=function(t,e,r){let o=new i;r.forEach(function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)});let a=(n.getSymbolTotalCodewords(t)-c.getTotalCodewordsCount(t,e))*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let s=(a-o.getLengthInBits())/8;for(let t=0;t<s;t++)o.put(t%2?17:236,8);return function(t,e,r){let o,i;let a=n.getSymbolTotalCodewords(e),s=a-c.getTotalCodewordsCount(e,r),u=c.getBlocksCount(e,r),l=a%u,f=u-l,h=Math.floor(a/u),g=Math.floor(s/u),p=g+1,m=h-g,y=new d(m),v=0,E=Array(u),w=Array(u),b=0,C=new Uint8Array(t.buffer);for(let t=0;t<u;t++){let e=t<f?g:p;E[t]=C.slice(v,v+e),w[t]=y.encode(E[t]),v+=e,b=Math.max(b,e)}let A=new Uint8Array(a),I=0;for(o=0;o<b;o++)for(i=0;i<u;i++)o<E[i].length&&(A[I++]=E[i][o]);for(o=0;o<m;o++)for(i=0;i<u;i++)A[I++]=w[i][o];return A}(o,t,e)}(e,r,h),E=new a(n.getSymbolSize(e));return function(t,e){let r=t.size,n=u.getPositions(e);for(let e=0;e<n.length;e++){let o=n[e][0],i=n[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1)&&!(r<=o+e))for(let n=-1;n<=7;n++)i+n<=-1||r<=i+n||(e>=0&&e<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===e||6===e)||e>=2&&e<=4&&n>=2&&n<=4?t.set(o+e,i+n,!0,!0):t.set(o+e,i+n,!1,!0))}}(E,e),function(t){let e=t.size;for(let r=8;r<e-8;r++){let e=r%2==0;t.set(r,6,e,!0),t.set(6,r,e,!0)}}(E),function(t,e){let r=s.getPositions(e);for(let e=0;e<r.length;e++){let n=r[e][0],o=r[e][1];for(let e=-2;e<=2;e++)for(let r=-2;r<=2;r++)-2===e||2===e||-2===r||2===r||0===e&&0===r?t.set(n+e,o+r,!0,!0):t.set(n+e,o+r,!1,!0)}}(E,e),m(E,r,0),e>=7&&function(t,e){let r,n,o;let i=t.size,a=f.getEncodedBits(e);for(let e=0;e<18;e++)r=Math.floor(e/3),n=e%3+i-8-3,o=(a>>e&1)==1,t.set(r,n,o,!0),t.set(n,r,o,!0)}(E,e),function(t,e){let r=t.size,n=-1,o=r-1,i=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!t.isReserved(o,s-r)){let n=!1;a<e.length&&(n=(e[a]>>>i&1)==1),t.set(o,s-r,n),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(E,v),isNaN(o)&&(o=l.getBestMask(E,m.bind(null,E,r))),l.applyMask(o,E),m(E,r,o),{modules:E,version:e,errorCorrectionLevel:r,maskPattern:o,segments:h}}(t,r,y,h)}},52882:function(t,e,r){let n=r(26143);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let t=new Uint8Array(this.degree);return t.set(r,o),t}return r},t.exports=o},7007:function(t,e){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",o="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=RegExp(n,"g"),e.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=RegExp(o,"g"),e.NUMERIC=RegExp(r,"g"),e.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let i=RegExp("^"+n+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return i.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},16130:function(t,e,r){let n=r(76910),o=r(41085),i=r(8260),a=r(43424),s=r(35442),u=r(7007),l=r(10242),c=r(65987);function d(t){return unescape(encodeURIComponent(t)).length}function f(t,e,r){let n;let o=[];for(;null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function h(t){let e,r;let o=f(u.NUMERIC,n.NUMERIC,t),i=f(u.ALPHANUMERIC,n.ALPHANUMERIC,t);return l.isKanjiModeEnabled()?(e=f(u.BYTE,n.BYTE,t),r=f(u.KANJI,n.KANJI,t)):(e=f(u.BYTE_KANJI,n.BYTE,t),r=[]),o.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return s.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t,e){let r;let u=n.getBestModeForData(t);if((r=n.from(e,u))!==n.BYTE&&r.bit<u.bit)throw Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(u));switch(r!==n.KANJI||l.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new s(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,r){let o=function(t,e){let r={},o={start:{}},i=["start"];for(let a=0;a<t.length;a++){let s=t[a],u=[];for(let t=0;t<s.length;t++){let l=s[t],c=""+a+t;u.push(c),r[c]={node:l,lastCount:0},o[c]={};for(let t=0;t<i.length;t++){let a=i[t];r[a]&&r[a].node.mode===l.mode?(o[a][c]=g(r[a].lastCount+l.length,l.mode)-g(r[a].lastCount,l.mode),r[a].lastCount+=l.length):(r[a]&&(r[a].lastCount=l.length),o[a][c]=g(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,e))}}i=u}for(let t=0;t<i.length;t++)o[i[t]].end=0;return{map:o,table:r}}(function(t){let e=[];for(let r=0;r<t.length;r++){let o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:d(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:d(o.data)}])}}return e}(h(t,l.isKanjiModeEnabled())),r),i=c.find_path(o.map,"start","end"),a=[];for(let t=1;t<i.length-1;t++)a.push(o.table[i[t]].node);return e.fromArray(a.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?t[t.length-1].data+=e.data:t.push(e),t},[]))},e.rawSplit=function(t){return e.fromArray(h(t,l.isKanjiModeEnabled()))}},10242:function(t,e){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},43114:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},23103:function(t,e,r){let n=r(10242),o=r(35393),i=r(64908),a=r(76910),s=r(43114),u=n.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!s.isValid(t))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let i=(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e))*8;if(r===a.MIXED)return i;let u=i-l(r,t);switch(r){case a.NUMERIC:return Math.floor(u/10*3);case a.ALPHANUMERIC:return Math.floor(u/11*2);case a.KANJI:return Math.floor(u/13);case a.BYTE:default:return Math.floor(u/8)}},e.getBestVersionForData=function(t,r){let n;let o=i.from(r,i.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(let n=1;n<=40;n++)if(function(t,e){let r=0;return t.forEach(function(t){let n=l(t.mode,e);r+=n+t.getBitsLength()}),r}(t,n)<=e.getCapacity(n,r,a.MIXED))return n}(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(let o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw Error("Invalid QR Code version");let e=t<<12;for(;n.getBCHDigit(e)-u>=0;)e^=7973<<n.getBCHDigit(e)-u;return t<<12|e}},6907:function(t,e,r){let n=r(89653);e.render=function(t,e,r){var o;let i=r,a=e;void 0!==i||e&&e.getContext||(i=e,e=void 0),e||(a=function(){try{return document.createElement("canvas")}catch(t){throw Error("You need to specify a canvas element")}}()),i=n.getOptions(i);let s=n.getImageWidth(t.modules.size,i),u=a.getContext("2d"),l=u.createImageData(s,s);return n.qrToImageData(l.data,t,i),o=a,u.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",u.putImageData(l,0,0),a},e.renderToDataURL=function(t,r,n){let o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});let i=e.render(t,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},93776:function(t,e,r){let n=r(89653);function o(t,e){let r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){let n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){let a=n.getOptions(e),s=t.modules.size,u=t.modules.data,l=s+2*a.margin,c=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,r){let n="",o=0,a=!1,s=0;for(let u=0;u<t.length;u++){let l=Math.floor(u%e),c=Math.floor(u/e);l||a||(a=!0),t[u]?(s++,u>0&&l>0&&t[u-1]||(n+=a?i("M",l+r,.5+c+r):i("m",o,0),o=0,a=!1),l+1<e&&t[u+1]||(n+=i("h",s),s=0)):o++}return n}(u,s,a.margin)+'"/>',f='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+l)+" "+l+'" shape-rendering="crispEdges">'+c+d+"</svg>\n";return"function"==typeof r&&r(null,f),f}},89653:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw Error("Invalid hex color: "+t);(3===e.length||4===e.length)&&(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");let r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){let n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){let o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),s=Math.floor((o+2*n.margin)*a),u=n.margin*a,l=[n.color.light,n.color.dark];for(let e=0;e<s;e++)for(let r=0;r<s;r++){let c=(e*s+r)*4,d=n.color.light;e>=u&&r>=u&&e<s-u&&r<s-u&&(d=l[i[Math.floor((e-u)/a)*o+Math.floor((r-u)/a)]?1:0]),t[c++]=d.r,t[c++]=d.g,t[c++]=d.b,t[c]=d.a}}},67004:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(65616);let o=t=>new Promise((e,r)=>{let o=new Image;o.src=URL.createObjectURL(t),o.addEventListener("load",()=>{try{let t=document.createElement("canvas");t.width=o.width,t.height=o.height;let i=t.getContext("2d");if(!i)return r(Error("decode failed"));i.imageSmoothingEnabled=!1,i.drawImage(o,0,0);let a=i.getImageData(0,0,o.width,o.height),s=n(a.data,o.width,o.height);return null!==s?e(s.data):r(Error("decode failed"))}catch(t){if("string"==typeof t)return r(Error(t));if(t instanceof Error)return r(Error(t.message))}})});var i=t=>t instanceof File&&"[object File]"===Object.prototype.toString.call(t)?o(t.slice()):"string"==typeof t&&(t=>{try{return btoa(atob(t))===t}catch(t){return!1}})(t)?o(((t,e="",r=512)=>{let n=atob(t),o=[];for(let t=0;t<n.length;t+=r){let e=n.slice(t,t+r),i=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);let a=new Uint8Array(i);o.push(a)}return new Blob(o,{type:e})})(t)):"string"==typeof t&&(t=>{if("string"!=typeof t)throw TypeError("Expected a string");if((t=t.trim()).includes(" "))return!1;try{return new URL(t),!0}catch(t){return!1}})(t)?new Promise((e,r)=>{let n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=()=>{n.status>=200&&n.status<300?o(n.response).then(t=>e(t)).catch(t=>r(t)):r(n.statusText)},n.onerror=()=>r(n.statusText),n.send()}):Promise.reject(Error("The input type is invalid"))}}]);