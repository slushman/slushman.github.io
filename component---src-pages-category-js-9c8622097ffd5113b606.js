(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{598:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(2),i=n.n(o),a=n(5),u=n.n(a),c=n(604),f=n(628),s=n(608),l=n(609),d=n(603),p=(n(665),n(614)),g=function(t){var e=t.total,n=t.value,o=1===e?"Post":"Posts";return Object(r.d)("li",{key:n},Object(r.d)(d.a,{"data-test":"categoryLink",to:"/category/"+Object(p.a)(n)+"/"},n," - ",e," ",o))};g.propTypes={total:u.a.number.isRequired,value:u.a.string.isRequired};var x=i.a.memo(g),b=n(610),v=n(623),m=n(606),h=n(685),y=n.n(h),j=function(t){var e=t.categories,n=t.title;return Object(r.d)(s.a,{title:n},Object(r.d)(l.a,{title:"All categories",keywords:["blog","gatsby","javascript","react"]}),Object(r.d)(f.Helmet,{title:n}),Object(r.d)("section",{css:Object(r.c)(v.a," ",m.c," background-image:url( ",y.a," );")},Object(r.d)("h1",{css:m.h},"Categories"),Object(r.d)(b.a,{account:"fellowferdi",photographer:"Ferdinand Stöhr"})),Object(r.d)("div",{css:v.b},Object(r.d)("ul",null,e.map(function(t,e){return Object(r.d)(x,{key:e,total:t.totalCount,value:t.fieldValue})}))))};j.propTypes={categories:u.a.arrayOf(u.a.shape({fieldValue:u.a.string.isRequired,totalCount:u.a.number.isRequired}).isRequired),title:u.a.string.isRequired};var O=i.a.memo(j);n.d(e,"pageQuery",function(){return R});var w=function(t){var e=t.data.allMdx.group,n=Object(c.a)().siteTitle;return Object(r.d)(O,{categories:e,title:n})};w.propTypes={data:u.a.shape({allMdx:u.a.shape({group:u.a.arrayOf(u.a.shape({fieldValue:u.a.string.isRequired,totalCount:u.a.number.isRequired}).isRequired)})})};e.default=w;var R="1212290937"},606:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return s}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return p});var r=n(3),o=n(602),i={name:"s2uf1z",styles:"text-align:right;"},a={name:"4tinyv",styles:"flex:50%;"},u={name:"i4x22t",styles:"position:relative;&:before{background-color:rgba(2,51,79,0.5);bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:1;}"},c={name:"1i2z6sa",styles:"display:block;margin:0;"},f={name:"ggsui4",styles:"max-height:400px;"},s=Object(r.c)(o.b," padding-bottom:1.5em;padding-top:1.5em;"),l=Object(r.c)(o.a," --flexDir:column;display:flex;flex-direction:var( --flexDir );justify-content:space-between;margin-bottom:1.5em;padding-bottom:1em;padding-top:1em;@media screen and ( min-width:450px){--flexDir:row;}"),d={name:"t6oij1",styles:"color:#fff;left:50%;margin:0;padding:0.5em;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:100%;z-index:1;"},p=Object(r.c)("font-size:0.85em;& > div > *{",o.b," margin:0 0 1.5em;}& > div ul{--pad:2.5em;padding-left:var( --pad );@media screen and (min-width:50rem){--pad:calc(100vw/2 - 50rem/2 + 1.5em);}}& > div > ul li a{--lineHeight:2.25;display:inline-block;line-height:var( --lineHeight );min-width:48px;@media screen and ( min-width:50rem ){--lineHeight:1.5;}}")},610:function(t,e,n){"use strict";var r=n(3),o=n(2),i=n.n(o),a=n(5),u=n.n(a),c={name:"16eif2g",styles:"display:inline-block;padding:2px 3px;"},f={name:"7ihvrm",styles:"fill:#023451;height:12px;position:relative;top:-2px;vertical-align:middle;width:auto;"},s={name:"9r090i",styles:'background-color:#eef8ff;border-radius:3px;bottom:0.5em;color:#023451;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,"San Francisco","Helvetica Neue",Helvetica,Ubuntu,Roboto,Noto,"Segoe UI",Arial,sans-serif;font-size:12px;font-weight:bold;line-height:1.2;padding:4px 6px;position:absolute;right:0.5em;text-decoration:none;z-index:1;.light &{background-color:#eef8ff;}.dark &{background-color:#90C8E8;}'},l=function(t){var e=t.account,n=t.photographer;return Object(r.d)("a",{css:s,"data-test":"imageLink",href:"https://unsplash.com/@"+e+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from "+n},Object(r.d)("span",{css:c},Object(r.d)("svg",{xmlns:"http://www.w3.org/2000/svg",css:f,viewBox:"0 0 32 32"},Object(r.d)("title",null,"unsplash-logo"),Object(r.d)("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"}))),Object(r.d)("span",{css:c,"data-test":"photographer"},n))};l.propTypes={account:u.a.string.isRequired,photographer:u.a.string.isRequired};var d=i.a.memo(l);n.d(e,"a",function(){return d})},614:function(t,e,n){"use strict";var r=n(615),o=n.n(r);e.a=o.a},615:function(t,e,n){n(616),n(49),n(51),n(618);t.exports=function(t){var e="àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;",n=new RegExp(e.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(n,function(t){return"aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------".charAt(e.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},616:function(t,e,n){"use strict";n(617);var r=n(8),o=n(104),i=n(25),a=/./.toString,u=function(t){n(19)(RegExp.prototype,"toString",t,!0)};n(26)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=a.name&&u(function(){return a.call(this)})},617:function(t,e,n){n(25)&&"g"!=/./g.flags&&n(34).f(RegExp.prototype,"flags",{configurable:!0,get:n(104)})},618:function(t,e,n){var r=n(9),o=n(619),i=n(34).f,a=n(622).f,u=n(73),c=n(104),f=r.RegExp,s=f,l=f.prototype,d=/a/g,p=/a/g,g=new f(d)!==d;if(n(25)&&(!g||n(26)(function(){return p[n(7)("match")]=!1,f(d)!=d||f(p)==p||"/a/i"!=f(d,"i")}))){f=function(t,e){var n=this instanceof f,r=u(t),i=void 0===e;return!n&&r&&t.constructor===f&&i?t:o(g?new s(r&&!i?t.source:t,e):s((r=t instanceof f)?t.source:t,r&&i?c.call(t):e),n?this:l,f)};for(var x=function(t){t in f||i(f,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},b=a(s),v=0;b.length>v;)x(b[v++]);l.constructor=f,f.prototype=l,n(19)(r,"RegExp",f)}n(107)("RegExp")},619:function(t,e,n){var r=n(14),o=n(620).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},620:function(t,e,n){var r=n(14),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(27)(Function.call,n(621).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},621:function(t,e,n){var r=n(109),o=n(70),i=n(50),a=n(106),u=n(35),c=n(105),f=Object.getOwnPropertyDescriptor;e.f=n(25)?f:function(t,e){if(t=i(t),e=a(e,!0),c)try{return f(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},622:function(t,e,n){var r=n(108),o=n(72).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},623:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var r=n(3),o=n(602),i={name:"15xwllx",styles:"background-position:center;background-repeat:no-repeat;background-size:cover;padding-bottom:400px;"},a=Object(r.c)(o.b," margin:0 0 1.5em;")},624:function(t,e,n){var r=n(672).Symbol;t.exports=r},632:function(t,e,n){var r=n(671);t.exports=function(t){return null==t?"":r(t)}},665:function(t,e,n){var r=n(666)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},666:function(t,e,n){var r=n(667),o=n(668),i=n(681),a=RegExp("['’]","g");t.exports=function(t){return function(e){return r(i(o(e).replace(a,"")),t,"")}}},667:function(t,e){t.exports=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}},668:function(t,e,n){var r=n(669),o=n(632),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(i,r).replace(a,"")}},669:function(t,e,n){var r=n(670)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},670:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},671:function(t,e,n){var r=n(624),o=n(674),i=n(675),a=n(676),u=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}},672:function(t,e,n){var r=n(673),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},673:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(28))},674:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},675:function(t,e){var n=Array.isArray;t.exports=n},676:function(t,e,n){var r=n(677),o=n(680),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},677:function(t,e,n){var r=n(624),o=n(678),i=n(679),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:c&&c in Object(t)?o(t):i(t)}},678:function(t,e,n){var r=n(624),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(e?t[u]=n:delete t[u]),o}},679:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},680:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},681:function(t,e,n){var r=n(682),o=n(683),i=n(632),a=n(684);t.exports=function(t,e,n){return t=i(t),void 0===(e=n?void 0:e)?o(t)?a(t):r(t):t.match(e)||[]}},682:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},683:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},684:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",i="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+a+"|"+u+")",d="(?:"+s+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),x="(?:"+[i,c,f].join("|")+")"+g,b=RegExp([s+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,s,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,s+l,"$"].join("|")+")",s+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");t.exports=function(t){return t.match(b)||[]}},685:function(t,e,n){t.exports=n.p+"static/ferdinand-stohr-NFs6dRTBgaM-unsplash-bf8c0319cd78695b0c530762aa1f6bce.jpg"}}]);
//# sourceMappingURL=component---src-pages-category-js-9c8622097ffd5113b606.js.map