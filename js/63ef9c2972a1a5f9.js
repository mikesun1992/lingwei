!function(){function e(e,n,t){var r;if(null==e)throw new TypeError('"this" is null or not defined');var o=w(e),i=o.length>>>0;if(0===i)return-1;var a=+t||0;if(Math.abs(a)===Infinity&&(a=0),a>=i)return-1;for(r=Math.max(a>=0?a:i-Math.abs(a),0);r<i;){if(r in o&&o[r]===n)return r;r++}return-1}function n(e,n){function t(){return N.get(u)}function r(){var e=t();if(e){var n=e.split(",");n.push(a)>5&&n.shift(),N.set(u,n.toString(),c)}else N.set(u,a,c)}function o(){var e=t().split(","),n=e.length,r=e[n-1],o="";return n>1&&(o=e[n-2]),[r,o]}var i=D(),a=n(),c={expires:365,path:"/",domain:"."+i},u=e.charAt(0).toUpperCase()+e.slice(1),s=N.get(e),d=N.get(u);return s&&(N.set(e,0,{expires:-1,path:"/"}),d||N.set(u,s,c)),{get:t,set:r,getLast:o}}function t(e,n,t,r){return null!=e&&(e.addEventListener?e.addEventListener(n,t,!!r):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t,!0)}function r(){var e="";try{e=top.document.referrer}catch(n){}return e}function o(e,n,r){var o=document.getElementsByTagName("script")[0],i=document.createElement("script");i.type="text/javascript",i.async=!0,i.defer=!0,i.src=e,o.parentNode.insertBefore(i,o),t(i,"load",n),t(i,"error",r),t(i,"readystatechange",function(e){/^complete|loaded$/.test(i.readyState)&&n()})}function i(e){var n={};return n.cl=m.pixelDepth||m.colorDepth||"0",n.ds=m.width+"x"+m.height,n.ln=navigator.language||navigator.browserLanguage||"unknown",n.ck=e?1:0,n.et=qsLoad=0,n}function a(){var e="BackCompat"==document.compatMode?"body":"documentElement",n=document[e];return[Math.max(n.scrollWidth,n.clientWidth),Math.max(n.scrollHeight,n.clientHeight)]}function c(e){e=C.fixTarget(e);var n=e.clientX,t=e.clientY,r=j.getScroll(),o=r.scrollY,i=r.scrollX,c=a();_qha("send",{et:10,x:n+i,y:t+o,w:c[0],h:c[1]})}function u(e,n){function r(e){var t=e.split(",");if(""===t)return void console.info("mv is null");var r={et:20,eid:n,ep:t[0],vid:t[1],ctn:t[2]};_qha("send",r),i=!0}function o(e){"http://360fenxi.mediav.com"===e.origin||"https://360fenxi.mediav.com"===e.origin?i||r(e.data):console.info("invalid iframe url")}var i=!1;"postMessage"in window?t(window,"message",o):window.navigator._qha_message=function(e){r(e)}}function s(){var e=M.getInfo(),n={};return n.et=3,n.ep=j.nowBySeconds()-B,T.assign(n,e)}function d(e){var n=M.getInfo(),t=i(e);t=T.assign(t,n),t.et=qsLoad,k||(_qha("send",t),k=!0)}function f(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$&")}function l(e){return new RegExp(f(e).replace("\\*",".*"))}function g(n){var t=location.href;return e(n,"*")>-1?l(n).test(t):n===t}var w={}.constructor,p=location.protocol+"//"+window._qha_data.host+"/s.gif";if((new Image).src=p+"?et=100&t="+ +new Date+"&si="+window._qha_data.domain,!window._qha||!0!==window._qha.init){var m=window.screen,h=window._qha_data,v=h.domain,_=h.e360,y=h.pageClk,b=1===h.urlClk,x=h.idClk,S=h.mvid,q=window.location.protocol+"//"+h.host+"/s.gif",k=!1;"undefined"==typeof console&&(console={info:function(){}});var j={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},now:function(){return(new Date).getTime()},nowBySeconds:function(){return parseInt(this.now()/1e3)},isArray:function(e){return"[object Array]"===w.prototype.toString.call(e)},isObject:function(e){return"[object Object]"===w.prototype.toString.call(e)},getScroll:function(){var e=window.pageXOffset!==undefined,n="CSS1Compat"===(document.compatMode||"");return{scrollX:e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft,scrollY:e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}},getBrowser:function(){var n=navigator.userAgent.toLowerCase(),t={"360se-ua":"360se",TT:"tencenttraveler",Maxthon:"maxthon",GreenBrowser:"greenbrowser",Sogou:"se 1.x / se 2.x",TheWorld:"theworld"};for(var r in t)if(e(n,t[r])>-1)return r;var o=!1;try{+external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g,"")>1013&&(o=!0)}catch(a){}if(o)return"360se-noua";var i=n.match(/(msie|chrome|safari|firefox|opera|trident)/);return i=i?i[0]:""},guid:function(){function e(e){var n=0,t=0,r=e.length-1;for(r;r>=0;r--){var o=parseInt(e.charCodeAt(r),10);n=(n<<6&4294967295)+o+(o<<14),0!=(t=4261412864&n)&&(n^=t>>21)}return n}return function(){for(var n=[navigator.appName,navigator.version,navigator.language||navigator.browserLanguage,navigator.platform,navigator.userAgent,m.width,"x",m.height,m.colorDepth,document.referrer].join(""),t=n.length,r=window.history.length;r;)n+=r--^t++;return 2147483647*(Math.round(2147483647*Math.random())^e(n))}()}},E=function(){function e(e){var n,t=[];for(var r in e)n=e[r],j.isString(n)&&(n='"'+n+'"'),t.push('"'+r+'":'+n);return"{"+t.join(",")+"}"}function n(n){if(!j.isArray(n))return"";if(window.JSON)return JSON.stringify(n);for(var t=[],r=0,o=n.length;r<o;r++){var i=n[r];j.isObject(i)&&t.push(e(n[r])),j.isString(i)&&t.push('"'+i+'"'),j.isNumber(i)&&t.push(i)}return"["+t.join(",")+"]"}function t(e){if(!j.isString(e))return null;if(window.JSON)return JSON.parse(e);if(rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidchars.test(e.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,"")))return new Function("return "+e)();throw new Error("invalid JSON data: ",e)}return{array2String:n,string2Object:t}}(),I=function(){function n(e){return o.apply(e,[0,1])[0]}function t(e){return o.apply(e,[1,e.length])}function r(n){for(var t=[],r=n.length,o=0;o<r;o++)e(t,n[o])<0&&t.push(n[o]);return t}var o=Array.prototype.slice;return{first:n,rest:t,distinct:r}}(),C={fixTarget:function(e){if(!("target"in e)){var n=e.srcElement||e.target;n&&3==n.nodeType&&(n=n.parentNode),e.target=n}return e}},T=function(){function e(e,n){if(n===undefined||null===n)return e;for(var t in n)e[t]=n[t];return e}function n(e){var n=[];for(var t in e)if(null!=e[t])if(j.isArray(e[t])){var r=E.array2String(e[t]);n.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}else n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&")}return{assign:e,obj2EncodeURI:n}}(),N={get:function(e){try{var n,t,r=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(r))&&(n=unescape(t[2])),n||""}catch(o){return""}},set:function(e,n,t){var r=t||{},o=r.expires,i=r.path,a=r.domain;if("number"==typeof o){var c=new Date;c.setTime(c.getTime()+864e5*o),o=c.toUTCString()}try{n=escape(n),document.cookie=[e,"=",n,o?";expires="+o:"",i?";path="+i:"",a?";domain="+a:""].join("")}catch(u){console.info("error:",u)}}},D=function(){for(var e=document.domain,n=e.split("."),t=n.length,r=e,o="";t--;)if(o=n.slice(t).join("."),N.set("__qhart","1",{domain:"."+o}),"1"===N.get("__qhart")){r=o,document.cookie="__qhart=0;expires="+(new Date).toUTCString()+";domain=."+o;break}return function(){return r}}(),A=n("qs_lvt_"+v,function(){return j.nowBySeconds().toString()}),O=n("qs_pv_"+v,function(){return j.guid().toString()}),L=function(){function n(e,n){var t="";switch(e){case"chrome":t=n.slice(0,8182);break;case"msie":t=n.slice(0,2083);break;case"firefox":t=n.slice(0,65536);break;case"safari":t=n.slice(0,8e4);break;default:t=n}return t}function t(e){e=n(j.getBrowser(),e),console&&console.info&&console.info("data is: ",e);var t="log_img_"+ +new Date,r=window.__qha_log_imgs[t]=new Image;r.onload=r.onerror=function(){window.__qha_log_imgs&&window.__qha_log_imgs[t]&&(window.__qha_log_imgs[t]=null,delete window.__qha_log_imgs[t])},r.src=e}function r(n,t,r){r=r||{},r=T.assign(r,t);var o=T.obj2EncodeURI(r);return(e(n,"?")>-1?n+"&"+o:n+"?"+o)+"&t="+ +new Date}return window.__qha_log_imgs={},{sendData:t,generateData:r,logData:function(e,n,o){t(r(e,n,o))}}}(),M={set:function(){var e="",n=[],t=window._e360_uid||"",r=window._e360_campaignid||"",o=window._e360_groupid||"",i=window._e360_creativeid||"",a=window._e360_keywordid||"",c=window._e360_clickid||"",u=window._e360_commerce||"";""!==t&&(n=[t,r,o,i,a,c]),""!==u&&n.push(u),e=n.join(","),window.localStorage?localStorage.setItem("s_e360",e):N.set("s_e360",e,{expires:1,path:"/"})},get:function(){var e=window.localStorage?localStorage.getItem("s_e360"):N.get("s_e360"),n={};if(e==undefined||""===e)return{};e=e.split(",");var t=e.length,r=["e_uid","e_cid","e_gid","e_yid","e_kid","e_clkid","e_com"];switch(t){case 0:break;case 1:n.e_com=e[0];break;case 6:case 7:for(var o=0;o<t;o++)n[r[o]]=e[o]}return n},getInfo:function(){var e={};return window._e360_uid&&(e.e_uid=window._e360_uid||"",e.e_cid=window._e360_campaignid||"",e.e_gid=window._e360_groupid||"",e.e_yid=window._e360_creativeid||"",e.e_kid=window._e360_keywordid||"",e.e_clkid=window._e360_clickid||""),window._e360_commerce&&(e.e_com=window._e360_commerce||""),e}},U=function(){function n(e){e=C.fixTarget(e);var n=0,t=e.target,r={};for(r.t=t.nodeName;n<3&&t&&"A"!=t.nodeName;)n++,t=t.parentNode;return r.u=t&&"A"===t.nodeName?t.href:"",r}function t(e){e=C.fixTarget(e);var n={};return e.pageX&&(n.x=e.pageX),e.pageY&&(n.y=e.pageY),n}function r(e,n){var t=[];for(var r in e)t.push(r+":"+encodeURIComponent(e[r]));for(var o in n)t.push(o+":"+encodeURIComponent(n[o]));return t.join(",")}return function(o){var i=n(o);if(!(""==i.u||e(i.u,"javascript")>-1)){var a={},c=t(o),u=r(i,c);a.et=2,a.ep=u,_qha("send",a)}}}(),B=j.nowBySeconds(),R=function(e,n){var t=!1;if(e){var o=e.split(","),i=parseInt(o.slice(-1));t=!(Math.abs(n-+i)>28800||!function(e,n){var t=document.createElement("a");t.href=n;var r=t.hostname,o=D(),i=r.indexOf(o);return i>=0&&r.slice(i)===o}(document.domain,r()))}else t=!1;return t}(A.get(),B);!function(e){e||A.set(),O.set()}(R);var X=function(e,n,t){var o={};o.si=e,o.url=window.location.href,o.su=r(),o.flt=n,o.v=t;var i=A.getLast();o.lt=i[0],""!==i[1]&&(o.lt2=i[1]);var a=O.getLast();return o.pt=a[0],""!==a[1]&&(o.pt2=a[1]),o}(v,B,"2.0.0"),Y={send:function(e,n,t){return function(t){L.logData(e,n,t)}}(q,X)};if(function(e){function n(n){var t=I.first(n),r=I.rest(n);"function"==typeof e[t]&&e[t].apply({},r)}function t(e){for(var t=0,r=e.length;t<r;t++)n(e[t])}return function(){var e=window._qha;e&&e.c&&j.isArray(e.c)&&t(e.c),window._qha=null,window._qha=function(){n(arguments)},window._qha.init=!0}}(Y)(),""!==_&&function(e,n,t){var r="https:"==location.protocol?"https:":"http:";console.info(e,n);var i=function(){t()};""==e||n?t():(console.info("==============="),o(r+"//e.so.com/search/c.js?u="+e,i,i))}(_,R,function(){d(R)}),setTimeout(function(){d(R)},500),""!==S&&function(e){var n,r='<iframe  name="'+e+'">';try{n=document.createElement(r)}catch(o){n=document.createElement("iframe"),n.name=e}n.height=0,n.width=0,n.border=0,n.style.display="none",n.src=document.location.protocol+"//360fenxi.mediav.com/mv.html",n.onload="",u(n,e),document.body?document.body.appendChild(n):t(window,"load",function(){document.body.appendChild(n)})}(S),t(window,"unload",function(){_qha("send",s())}),null!==x){var J=function(e){var n=[];for(var t in x)g(t)&&n.push(x[t]);return I.distinct(n.join(",").split(","))}();J?t(document,"mousedown",function(n){return function(t){t=C.fixTarget(t);var r=t.target,o=r.id;o&&e(n,o)>-1&&_qha("send",{et:11,ep:o})}}(J),!0):console.info("ids error: ",J)}if(b&&t(document,"mousedown",U,!0),null!==y){for(var $=!1,G=0;G<y.length;G++)if(g(y[G])){$=!0;break}$&&t(document,"mousedown",c,!0)}}}();