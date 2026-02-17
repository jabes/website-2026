/* -------------------------------------------------------------------------------- */
/* scripts/lib/aos-2.3.4.min.js                                                     */
/* -------------------------------------------------------------------------------- */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/* -------------------------------------------------------------------------------- */
/* scripts/lib/snap-touch-1.0.6.min.js                                              */
/* -------------------------------------------------------------------------------- */

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var SnapTouch=function(){function SnapTouch(selector){_classCallCheck(this,SnapTouch);this.active=false;this.el={};this.el.container=selector instanceof HTMLElement?selector:document.getElementById(selector)||document.querySelector(selector);this.el.animator=this.el.container?this.el.container.querySelector(".slides"):undefined;this.el.slides=this.el.animator?this.el.animator.querySelectorAll(".slide"):[];this.el.anchors=this.el.animator?this.el.animator.querySelectorAll("a[href]"):[];this.events={};this.params={slideWidth:undefined,slideTotal:undefined,velocity:undefined,amplitude:undefined,posX:undefined,targetX:undefined,lastPosX:undefined,lastTouchX:undefined,firstTimestamp:undefined,lastTimestamp:undefined,ticker:undefined,activeIndex:undefined,isClick:undefined,isEasing:undefined,hasMoved:undefined}}_createClass(SnapTouch,[{key:"activate",value:function activate(){this.active=true;this.addClass(this.el.container,"active")}},{key:"deactivate",value:function deactivate(){this.active=false;this.removeClass(this.el.container,"active")}},{key:"create",value:function create(){if(this.el.container&&this.el.slides.length>=0){this.dispatchEvent("SnapTouch.created");this.activate();this.getActiveIndex();this.bindEvents();this.resize()}}},{key:"destroy",value:function destroy(){this.deactivate();this.resetParams();this.removeAllEvents();this.unsetActiveLinks();this.unsetDimensions();this.dispatchEvent("SnapTouch.destroyed")}},{key:"hasClass",value:function hasClass(el,className){return el.className.indexOf(className)>-1}},{key:"addClass",value:function addClass(el,className){el.className=el.className+" "+className+" "}},{key:"removeClass",value:function removeClass(el,className){var reg=new RegExp("(\\s|^)"+className+"(\\s|$)");el.className=el.className.replace(reg," ")}},{key:"getActiveIndex",value:function getActiveIndex(){var _this=this;var activeIndex=0;var _isActive=function _isActive(anchor){return _this.hasClass(anchor,"active")};var activeAnchors=Array.prototype.filter.call(this.el.anchors,_isActive);if(activeAnchors.length>0){var activeAnchor=activeAnchors[0];activeIndex=Array.prototype.slice.call(this.el.anchors).indexOf(activeAnchor)}this.setActiveIndex(activeIndex);return activeIndex}},{key:"setActiveIndex",value:function setActiveIndex(index){this.params.activeIndex=index;this.dispatchEvent("SnapTouch.activeIndexChanged",{bubbles:false,cancelable:false,detail:{index:this.params.activeIndex}})}},{key:"on",value:function on(target,type,callback){var _this2=this;var key=target._key||Math.random().toString(36).substring(7);target._key=key;if(!this.events.hasOwnProperty(key)){this.events[key]={}}if(!this.events[key].hasOwnProperty(type)){this.events[key][type]={target:target,listeners:[]}}var _listener=function _listener(event){event._key=key;event._target=target;callback.call(_this2,event)};this.events[key][type].listeners.push(_listener);target.addEventListener(type,_listener)}},{key:"off",value:function off(target){var _this3=this;var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var key=target._key;var _removeByType=function _removeByType(key,type){var target=_this3.events[key][type].target;var listeners=_this3.events[key][type].listeners;for(var i=0;i<listeners.length;i++){target.removeEventListener(type,listeners[i]);_this3.events[key][type].listeners.splice(i,1)}if(_this3.events[key][type].listeners.length===0){delete _this3.events[key][type]}if(Object.keys(_this3.events[key]).length===0){delete _this3.events[key]}};if(this.events.hasOwnProperty(key)){if(type){_removeByType(key,type)}else{var events=this.events[key];for(var _type in events){if(events.hasOwnProperty(_type)){_removeByType(key,_type)}}}}}},{key:"removeAllEvents",value:function removeAllEvents(){for(var key in this.events){if(this.events.hasOwnProperty(key)){for(var type in this.events[key]){if(this.events[key].hasOwnProperty(type)){this.off(this.events[key][type].target,type)}}}}}},{key:"resetParams",value:function resetParams(){for(var key in this.params){if(this.params.hasOwnProperty(key)){this.params[key]=undefined}}}},{key:"setActiveLink",value:function setActiveLink(target){this.unsetActiveLinks();this.addClass(target,"active")}},{key:"unsetActiveLinks",value:function unsetActiveLinks(){for(var i=0;i<this.el.anchors.length;i++){this.removeClass(this.el.anchors.item(i),"active")}}},{key:"delayLocationChange",value:function delayLocationChange(href){var _this4=this;var _setLocation=function _setLocation(href){if(_this4.params.isEasing){_this4.delayLocationChange(href)}else{window.location.href=href}};window.setTimeout(_setLocation.bind(this,href),100)}},{key:"preventDefault",value:function preventDefault(event){event.preventDefault();return false}},{key:"addEventListener",value:function addEventListener(type,listener){this.el.container.addEventListener(type,listener)}},{key:"dispatchEvent",value:function dispatchEvent(typeArg){var customEventInit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{bubbles:false,cancelable:false,detail:null};var supported="CustomEvent"in window&&typeof window.CustomEvent==="function";if(!supported){var CustomEvent=function CustomEvent(typeArg,customEventInit){var event=document.createEvent("CustomEvent");event.initCustomEvent(typeArg,customEventInit.bubbles,customEventInit.cancelable,customEventInit.detail);return event};CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent}var event=new window.CustomEvent(typeArg,customEventInit);this.el.container.dispatchEvent(event);return event}},{key:"bindEvents",value:function bindEvents(){var _this5=this;this.on(this.el.animator,"dragstart",this.preventDefault);this.on(this.el.animator,"touchstart",this.touchStart);this.on(this.el.animator,"mousedown",this.touchStart);this.on(window,"resize",this.resize);for(var i=0;i<this.el.anchors.length;i++){this.on(this.el.anchors.item(i),"click",function(event){_this5.preventDefault(event);if(_this5.params.isClick){_this5.setActiveLink(event._target);_this5.getActiveIndex();_this5.easeTowardsTarget();_this5.delayLocationChange(event._target.href)}})}this.on(this.el.container,"SnapTouch.resized",function(event){_this5.setPosition(event.detail.slideWidth*_this5.params.activeIndex*-1)})}},{key:"eventCoords",value:function eventCoords(event){var touchEvents=["touchmove","touchstart","touchend"];var isTouchEvent=touchEvents.indexOf(event.type)>-1;if(isTouchEvent){var touch=event.targetTouches[0]||event.changedTouches[0];return{x:touch.clientX,y:touch.clientY}}else{return{x:event.clientX,y:event.clientY}}}},{key:"prefixed",value:function prefixed(style,property){var prefixes=["","webkit","Moz","MS","ms","o"];var camelProp=property[0].toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var prop=prefix?prefix+camelProp:property;if(prop in style){return prop}i++}return undefined}},{key:"startTracking",value:function startTracking(){if(this.params.ticker)this.stopTracking();this.params.ticker=window.setInterval(this.track.bind(this),100);this.on(document,"touchmove",this.touchMove);this.on(document,"mousemove",this.touchMove);this.on(document,"touchend",this.touchEnd);this.on(document,"mouseup",this.touchEnd);this.dispatchEvent("SnapTouch.trackingStart")}},{key:"stopTracking",value:function stopTracking(){window.clearInterval(this.params.ticker);delete this.params.ticker;this.off(document);this.dispatchEvent("SnapTouch.trackingEnd")}},{key:"track",value:function track(){var now=Date.now();var timeElapsed=now-this.params.lastTimestamp;var delta=this.params.posX-this.params.lastPosX;var v=1e3*delta/(1+timeElapsed);this.params.velocity=.8*v+.2*this.params.velocity;this.dispatchEvent("SnapTouch.tracking",{bubbles:false,cancelable:false,detail:{now:now,timeElapsed:timeElapsed,delta:delta,velocity:this.params.velocity,posX:this.params.posX,lastPosX:this.params.lastPosX,lastTimestamp:this.params.lastTimestamp}});this.params.lastPosX=this.params.posX;this.params.lastTimestamp=now}},{key:"setDimensions",value:function setDimensions(){this.el.animator.style.width=this.params.slideWidth*this.params.slideTotal+"px";for(var i=0;i<this.params.slideTotal;i++){this.el.slides.item(i).style.width=this.params.slideWidth+"px"}}},{key:"unsetDimensions",value:function unsetDimensions(){this.el.animator.style.width=null;for(var i=0;i<this.params.slideTotal;i++){this.el.slides.item(i).style.width=null}}},{key:"getPosition",value:function getPosition(){return this.params.posX}},{key:"setPosition",value:function setPosition(posX){if(this.getPosition()!==posX){var xMin=this.params.slideWidth*-(this.params.slideTotal-1);var xMax=0;var style=this.el.animator.style;var prefixed=this.prefixed(style,"transform");this.params.posX=posX>xMax?xMax:posX<xMin?xMin:posX;this.params.hasMoved=true;style[prefixed]="translate("+this.params.posX+"px, 0)";this.dispatchEvent("SnapTouch.positionChanged",{bubbles:false,cancelable:false,detail:{posX:this.params.posX}})}}},{key:"getTargetPosition",value:function getTargetPosition(){this.params.targetX=this.params.posX;if(this.params.velocity>10||this.params.velocity<-10){this.params.amplitude=.8*this.params.velocity;this.params.targetX=this.params.posX+this.params.amplitude}var snap=this.params.slideWidth;this.params.targetX=Math.round(this.params.targetX/snap)*snap}},{key:"easePosition",value:function easePosition(){if(this.params.amplitude){var timeConstant=325;var timeElapsed=Date.now()-this.params.lastTimestamp;var delta=-this.params.amplitude*Math.exp(-timeElapsed/timeConstant);var xMin=this.params.slideWidth*-(this.params.slideTotal-1);var xMax=0;this.params.isEasing=this.params.posX>xMin&&this.params.posX<xMax&&(delta>5||delta<-5);if(this.params.isEasing){this.setPosition(this.params.targetX+delta);this.requestAnimation(this.easePosition)}else{this.setPosition(this.params.targetX);this.dispatchEvent("SnapTouch.easePositionEnd",{bubbles:false,cancelable:false,detail:{posX:this.params.posX}})}}}},{key:"easeTowardsTarget",value:function easeTowardsTarget(){this.params.targetX=this.params.slideWidth*this.params.activeIndex*-1;this.params.amplitude=this.params.targetX-this.params.posX;this.requestAnimation(this.easePosition)}},{key:"requestAnimation",value:function requestAnimation(callback){callback=callback.bind(this);if(window.requestAnimationFrame){window.requestAnimationFrame(callback)}else{window.setTimeout(callback,10)}}},{key:"resize",value:function resize(){this.unsetDimensions();this.params.slideWidth=this.el.slides.item(0).getBoundingClientRect().width;this.params.slideTotal=this.el.slides.length;this.setDimensions();this.dispatchEvent("SnapTouch.resized",{bubbles:false,cancelable:false,detail:{slideWidth:this.params.slideWidth,slideTotal:this.params.slideTotal}})}},{key:"touchStart",value:function touchStart(event){this.params.velocity=0;this.params.amplitude=0;this.params.posX=this.params.posX||0;this.params.lastPosX=this.params.posX;this.params.firstTimestamp=Date.now();this.params.lastTimestamp=this.params.firstTimestamp;this.params.lastTouchX=this.eventCoords(event).x;this.params.isClick=false;this.params.isEasing=false;this.params.hasMoved=false;this.startTracking()}},{key:"touchMove",value:function touchMove(event){var touchX=this.eventCoords(event).x;var delta=touchX-this.params.lastTouchX;if(delta>2||delta<-2){this.params.lastTouchX=touchX;this.setPosition(this.params.posX+delta)}}},{key:"touchEnd",value:function touchEnd(){this.stopTracking();this.getTargetPosition();this.params.amplitude=this.params.targetX-this.params.posX;this.params.lastTimestamp=Date.now();this.requestAnimation(this.easePosition);var timeElapsed=this.params.lastTimestamp-this.params.firstTimestamp;this.params.isClick=!this.params.hasMoved&&timeElapsed<300}}]);return SnapTouch}();if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&module.exports){module.exports=SnapTouch}if(typeof window!=="undefined"){window.SnapTouch=SnapTouch}
/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-001-particles.js                                                */
/* -------------------------------------------------------------------------------- */

class ParticleSystem {
    constructor(canvas) {
        this.particleCount = 25000;
        this.particleVelocities = [];
        this.canvas = canvas;
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        this.scene.fog = new THREE.Fog(0x000000, 5, 25);
    }

    initCamera() {
        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 0, 5);
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    createParticles() {
        this.particlesGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

            this.particleVelocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02,
            });
        }

        this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00ff00,
            size: 0.08,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        this.particles = new THREE.Points(this.particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    updateParticles() {
        const positions = this.particlesGeometry.attributes.position.array;

        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] += this.particleVelocities[i].x;
            positions[i * 3 + 1] += this.particleVelocities[i].y;
            positions[i * 3 + 2] += this.particleVelocities[i].z;

            if (Math.abs(positions[i * 3]) > 15) {
                positions[i * 3] *= -1;
            }

            if (Math.abs(positions[i * 3 + 1]) > 15) {
                positions[i * 3 + 1] *= -1;
            }

            if (Math.abs(positions[i * 3 + 2]) > 15) {
                positions[i * 3 + 2] *= -1;
            }
        }

        this.particlesGeometry.attributes.position.needsUpdate = true;
    }

    updateCamera() {
        this.camera.position.x = 0;
        this.camera.position.y = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 5;
        this.camera.lookAt(this.scene.position);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.updateParticles();
        this.updateCamera();
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        window.removeEventListener('resize', this.onResize);
        this.renderer.domElement.remove();
        this.particlesGeometry.dispose();
        this.particles.material.dispose();
    }
}

/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-002-photo-slider.js                                             */
/* -------------------------------------------------------------------------------- */

const slider = new SnapTouch('slider');
slider.create();
slider.setActiveIndex(3);
slider.easeTowardsTarget();

const sliderElement = document.getElementById('slider');
let isInteracting = false;

const handleInteractionStart = () => {
    isInteracting = true;
    document.body.style.overflow = 'hidden';
};

const handleInteractionEnd = () => {
    if (isInteracting) {
        isInteracting = false;
        document.body.style.overflow = '';
    }
};

sliderElement.addEventListener('mousedown', handleInteractionStart);
sliderElement.addEventListener('touchstart', handleInteractionStart, {passive: true});
window.addEventListener('mouseup', handleInteractionEnd);
window.addEventListener('touchend', handleInteractionEnd, {passive: true});

/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-003-video-player.js                                             */
/* -------------------------------------------------------------------------------- */

class VideoPlayer {
    constructor(popupSelector = '#videoPopup') {
        this.videoPopup = document.querySelector(popupSelector);
        this.closeBtn = this.videoPopup.querySelector('.video-popup-close');
        this.overlay = this.videoPopup.querySelector('.video-popup-overlay');
        this.videoTriggers = document.querySelectorAll('.video-trigger');

        this.player = null;
        this.playerReady = false;

        this.init();
    }

    init() {
        // Set up global YouTube API callback
        window.onYouTubeIframeAPIReady = () => {
            this.playerReady = true;
        };

        // Add click handlers to all video triggers
        this.videoTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const videoId = trigger.getAttribute('data-video-id');
                this.openVideo(videoId);
            });
        });

        // Close handlers
        this.closeBtn.addEventListener('click', () => this.closePopup());
        this.overlay.addEventListener('click', () => this.closePopup());

        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.videoPopup.classList.contains('active')) {
                this.closePopup();
            }
        });
    }

    openVideo(videoId) {
        this.videoPopup.classList.add('active');

        if (this.playerReady) {
            this.createPlayer(videoId);
        } else {
            // Wait and retry
            setTimeout(() => this.createPlayer(videoId), 100);
        }
    }

    createPlayer(videoId) {
        // Destroy existing player if it exists
        if (this.player) {
            this.player.destroy();
        }

        // Create new player
        this.player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'modestbranding': 1,
                'rel': 0,
            },
            events: {
                'onReady': (event) => this.onPlayerReady(event),
                'onStateChange': (event) => this.onPlayerStateChange(event),
            }
        });
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

    onPlayerStateChange(event) {
        const availableQualities = event.target.getAvailableQualityLevels();
        if (availableQualities.includes('hd1080')) {
            event.target.setPlaybackQuality('hd1080');
        }
    }

    closePopup() {
        this.videoPopup.classList.remove('active');

        // Stop and destroy player
        if (this.player) {
            this.player.stopVideo();
            this.player.destroy();
            this.player = null;
        }
    }

    destroy() {
        this.closePopup();
    }
}

/* -------------------------------------------------------------------------------- */
/* scripts/src/main.js                                                              */
/* -------------------------------------------------------------------------------- */

console.log('👋 Built by Justin Bull');

AOS.init();

if (window.innerWidth > 1024) {
    window.addEventListener('load', () => {
        const script = document.createElement('script');
        script.src = window.location.origin + '/scripts/lib/three-r128.min.js';
        script.addEventListener('load', () => {
            const canvas = document.getElementById('particleCanvas');
            new ParticleSystem(canvas);
        });
        document.body.appendChild(script);
    });
}

window.addEventListener('load', () => {
    const loadSliderImages = () => {
        document.querySelectorAll('#slider img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadSliderImages);
    } else {
        setTimeout(loadSliderImages, 200);
    }
});

if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.addEventListener('load', () => {
        new VideoPlayer();
    });
    document.head.appendChild(script);
}

