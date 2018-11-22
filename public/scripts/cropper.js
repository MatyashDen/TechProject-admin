/*!
 * Cropper.js v0.8.0
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-07-12T04:37:40.982Z
 */
!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("Cropper requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function i(t){return he.call(t).slice(8,-1).toLowerCase()}function a(t){return"number"==typeof t&&!isNaN(t)}function n(t){return"undefined"==typeof t}function o(t){return"object"==typeof t&&null!==t}function r(t){var e,i;if(!o(t))return!1;try{return e=t.constructor,i=e.prototype,e&&i&&ce.call(i,"isPrototypeOf")}catch(a){return!1}}function h(t){return"function"===i(t)}function c(t){return J.isArray?J.isArray(t):"array"===i(t)}function s(t,e){return e=e>=0?e:0,J.from?J.from(t).slice(e):se.call(t,e)}function l(t){return"string"==typeof t&&(t=t.trim?t.trim():t.replace(Yt,"$1")),t}function d(t,e){var i,n;if(t&&h(e))if(c(t)||a(t.length))for(n=0,i=t.length;i>n&&e.call(t,t[n],n,t)!==!1;n++);else if(o(t))for(n in t)if(t.hasOwnProperty(n)&&e.call(t,t[n],n,t)===!1)break;return t}function p(t){var e;if(arguments.length>1){if(e=s(arguments),G.assign)return G.assign.apply(G,e);e.shift(),d(e,function(e){d(e,function(e,i){t[i]=e})})}return t}function g(t,e){var i=s(arguments,2);return function(){return t.apply(e,i.concat(s(arguments)))}}function u(t,e){var i=t.style;d(e,function(t,e){Lt.test(e)&&a(t)&&(t+="px"),i[e]=t})}function f(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function m(t,e){var i;return a(t.length)?d(t,function(t){m(t,e)}):t.classList?t.classList.add(e):(i=l(t.className),void(i?i.indexOf(e)<0&&(t.className=i+" "+e):t.className=e))}function v(t,e){return a(t.length)?d(t,function(t){v(t,e)}):t.classList?t.classList.remove(e):void(t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function w(t,e,i){return a(t.length)?d(t,function(t){w(t,e,i)}):void(i?m(t,e):v(t,e))}function x(t){return t.replace(Mt,"$1-$2").toLowerCase()}function b(t,e){return o(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+x(e))}function y(t,e,i){o(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-"+x(e),i)}function D(t,e){o(t[e])?delete t[e]:t.dataset?delete t.dataset[e]:t.removeAttribute("data-"+x(e))}function C(t,e,i){var a=l(e).split(Wt);return a.length>1?d(a,function(e){C(t,e,i)}):void(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i))}function B(t,e,i,a){var n=l(e).split(Wt),o=i;return n.length>1?d(n,function(e){B(t,e,i)}):(a&&(i=function(){return C(t,e,i),o.apply(t,arguments)}),void(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)))}function T(t,e,i){var a;return t.dispatchEvent?(h(Event)&&h(CustomEvent)?a=n(i)?new Event(e,{bubbles:!0,cancelable:!0}):new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):n(i)?(a=F.createEvent("Event"),a.initEvent(e,!0,!0)):(a=F.createEvent("CustomEvent"),a.initCustomEvent(e,!0,!0,i)),t.dispatchEvent(a)):t.fireEvent?t.fireEvent("on"+e):void 0}function L(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function X(e){var i,n=e||t.event;return n.target||(n.target=n.srcElement||F),a(n.pageX)||(i=F.documentElement,n.pageX=n.clientX+(t.scrollX||i&&i.scrollLeft||0)-(i&&i.clientLeft||0),n.pageY=n.clientY+(t.scrollY||i&&i.scrollTop||0)-(i&&i.clientTop||0)),n}function Y(e){var i=F.documentElement,a=e.getBoundingClientRect();return{left:a.left+(t.scrollX||i&&i.scrollLeft||0)-(i&&i.clientLeft||0),top:a.top+(t.scrollY||i&&i.scrollTop||0)-(i&&i.clientTop||0)}}function W(t){var e=t.length,i=0,a=0;return e&&(d(t,function(t){i+=t.pageX,a+=t.pageY}),i/=e,a/=e),{pageX:i,pageY:a}}function k(t,e){return t.getElementsByTagName(e)}function E(t,e){return t.getElementsByClassName?t.getElementsByClassName(e):t.querySelectorAll("."+e)}function H(t){return F.createElement(t)}function M(t,e){t.appendChild(e)}function z(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function R(t){var e=t.match(Xt);return e&&(e[1]!==Z.protocol||e[2]!==Z.hostname||e[3]!==Z.port)}function A(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function N(t,e){var i;return t.naturalWidth&&!Vt?e(t.naturalWidth,t.naturalHeight):(i=H("img"),i.onload=function(){e(this.width,this.height)},void(i.src=t.src))}function U(t){var e=[],i=t.rotate,n=t.scaleX,o=t.scaleY;return a(i)&&0!==i&&e.push("rotate("+i+"deg)"),a(n)&&1!==n&&e.push("scaleX("+n+")"),a(o)&&1!==o&&e.push("scaleY("+o+")"),e.length?e.join(" "):"none"}function I(t,e){var i,a,n=Qt(t.degree)%180,o=(n>90?180-n:n)*oe/180,r=te(o),h=ee(o),c=t.width,s=t.height,l=t.aspectRatio;return e?(i=c/(h+r/l),a=i/l):(i=c*h+s*r,a=c*r+s*h),{width:i,height:a}}function S(t,e){var i,n,o,r=H("canvas"),h=r.getContext("2d"),c=0,s=0,l=e.naturalWidth,d=e.naturalHeight,p=e.rotate,g=e.scaleX,u=e.scaleY,f=a(g)&&a(u)&&(1!==g||1!==u),m=a(p)&&0!==p,v=m||f,w=l*Qt(g),x=d*Qt(u);return f&&(i=w/2,n=x/2),m&&(o=I({width:w,height:x,degree:p}),w=o.width,x=o.height,i=w/2,n=x/2),r.width=w,r.height=x,v&&(c=-l/2,s=-d/2,h.save(),h.translate(i,n)),m&&h.rotate(p*oe/180),f&&h.scale(g,u),h.drawImage(t,ne(c),ne(s),ne(l),ne(d)),v&&h.restore(),r}function _(t,e,i){var a="",n=e;for(i+=e;i>n;n++)a+=le(t.getUint8(n));return a}function P(t){var e,i,a,n,o,r,h,c,s,l,d=new DataView(t),p=d.byteLength;if(255===d.getUint8(0)&&216===d.getUint8(1))for(s=2;p>s;){if(255===d.getUint8(s)&&225===d.getUint8(s+1)){h=s;break}s++}if(h&&(i=h+4,a=h+10,"Exif"===_(d,i,4)&&(r=d.getUint16(a),o=18761===r,(o||19789===r)&&42===d.getUint16(a+2,o)&&(n=d.getUint32(a+4,o),n>=8&&(c=a+n)))),c)for(p=d.getUint16(c,o),l=0;p>l;l++)if(s=c+12*l+2,274===d.getUint16(s,o)){s+=8,e=d.getUint16(s,o),Vt&&d.setUint16(s,1,o);break}return e}function j(t){var e,i=t.replace(Et,""),a=atob(i),n=a.length,o=new V(n),r=new Uint8Array(o);for(e=0;n>e;e++)r[e]=a.charCodeAt(e);return o}function $(t){var e,i=new Uint8Array(t),a=i.length,n="";for(e=0;a>e;e++)n+=le(i[e]);return"data:image/jpeg;base64,"+btoa(n)}function q(t,e){var i=this;i.element=t,i.options=p({},q.DEFAULTS,r(e)&&e),i.loaded=!1,i.ready=!1,i.complete=!1,i.rotated=!1,i.cropped=!1,i.disabled=!1,i.replaced=!1,i.limited=!1,i.wheeling=!1,i.isImg=!1,i.originalUrl="",i.canvasData=null,i.cropBoxData=null,i.previews=null,i.init()}var F=t.document,Z=t.location,K=t.navigator,V=t.ArrayBuffer,G=t.Object,J=t.Array,Q=t.String,tt=t.Number,et=t.Math,it="cropper",at=it+"-modal",nt=it+"-hide",ot=it+"-hidden",rt=it+"-invisible",ht=it+"-move",ct=it+"-crop",st=it+"-disabled",lt=it+"-bg",dt="mousedown touchstart pointerdown MSPointerDown",pt="mousemove touchmove pointermove MSPointerMove",gt="mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",ut="wheel mousewheel DOMMouseScroll",ft="dblclick",mt="resize",vt="error",wt="load",xt="ready",bt="cropstart",yt="cropmove",Dt="cropend",Ct="crop",Bt="zoom",Tt=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,Lt=/^(width|height|left|top|marginLeft|marginTop)$/,Xt=/^(https?:)\/\/([^:\/\?#]+):?(\d*)/i,Yt=/^\s+(.*)\s+$/,Wt=/\s+/,kt=/^data:/,Et=/^data:([^;]+);base64,/,Ht=/^data:image\/jpeg.*;base64,/,Mt=/([a-z\d])([A-Z])/g,zt="preview",Ot="action",Rt="e",At="w",Nt="s",Ut="n",It="se",St="sw",_t="ne",Pt="nw",jt="all",$t="crop",qt="move",Ft="zoom",Zt="none",Kt=!!F.createElement("canvas").getContext,Vt=K&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(K.userAgent),Gt=et.min,Jt=et.max,Qt=et.abs,te=et.sin,ee=et.cos,ie=et.sqrt,ae=et.round,ne=et.floor,oe=et.PI,re=G.prototype,he=re.toString,ce=re.hasOwnProperty,se=J.prototype.slice,le=Q.fromCharCode;q.prototype={constructor:q,init:function(){var t,e=this,i=e.element,a=i.tagName.toLowerCase();if(!b(i,it)){if(y(i,it,e),"img"===a){if(e.isImg=!0,e.originalUrl=t=i.getAttribute("src"),!t)return;t=i.src}else"canvas"===a&&Kt&&(t=i.toDataURL());e.load(t)}},load:function(t){var e,i=this,a=i.options,n=i.element;if(t){if(i.url=t,i.imageData={},!a.checkOrientation||!V)return i.clone();if(kt.test(t))return Ht.test(t)?i.read(j(t)):i.clone();e=new XMLHttpRequest,e.onerror=e.onabort=function(){i.clone()},e.onload=function(){i.read(this.response)},a.checkCrossOrigin&&R(t)&&n.crossOrigin&&(t=A(t)),e.open("get",t),e.responseType="arraybuffer",e.send()}},read:function(t){var e=this,i=e.options,a=P(t),n=e.imageData,o=0,r=1,h=1;if(a>1)switch(e.url=$(t),a){case 2:r=-1;break;case 3:o=-180;break;case 4:h=-1;break;case 5:o=90,h=-1;break;case 6:o=90;break;case 7:o=90,r=-1;break;case 8:o=-90}i.rotatable&&(n.rotate=o),i.scalable&&(n.scaleX=r,n.scaleY=h),e.clone()},clone:function(){var t,e,i,a,n,o=this,r=o.element,h=o.url;o.options.checkCrossOrigin&&R(h)&&(t=r.crossOrigin,t?e=h:(t="anonymous",e=A(h))),o.crossOrigin=t,o.crossOriginUrl=e,i=H("img"),t&&(i.crossOrigin=t),i.src=e||h,o.image=i,o._start=a=g(o.start,o),o._stop=n=g(o.stop,o),o.isImg?r.complete?o.start():B(r,wt,a):(B(i,wt,a),B(i,vt,n),m(i,nt),r.parentNode.insertBefore(i,r.nextSibling))},start:function(t){var e=this,i=e.isImg?e.element:e.image;t&&(C(i,wt,e._start),C(i,vt,e._stop)),N(i,function(t,i){p(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.loaded=!0,e.build()})},stop:function(){var t=this,e=t.image;C(e,wt,t._start),C(e,vt,t._stop),z(e),t.image=null},build:function(){var t,e,i,a,n,o,r,c=this,s=c.options,l=c.element,d=c.image;c.loaded&&(c.ready&&c.unbuild(),e=H("div"),e.innerHTML=q.TEMPLATE,c.container=t=l.parentNode,c.cropper=i=E(e,"cropper-container")[0],c.canvas=a=E(i,"cropper-canvas")[0],c.dragBox=n=E(i,"cropper-drag-box")[0],c.cropBox=o=E(i,"cropper-crop-box")[0],c.viewBox=E(i,"cropper-view-box")[0],c.face=r=E(o,"cropper-face")[0],M(a,d),m(l,ot),t.insertBefore(i,l.nextSibling),c.isImg||v(d,nt),c.initPreview(),c.bind(),s.aspectRatio=Jt(0,s.aspectRatio)||NaN,s.viewMode=Jt(0,Gt(3,ae(s.viewMode)))||0,s.autoCrop?(c.cropped=!0,s.modal&&m(n,at)):m(o,ot),s.guides||m(E(o,"cropper-dashed"),ot),s.center||m(E(o,"cropper-center"),ot),s.background&&m(i,lt),s.highlight||m(r,rt),s.cropBoxMovable&&(m(r,ht),y(r,Ot,jt)),s.cropBoxResizable||(m(E(o,"cropper-line"),ot),m(E(o,"cropper-point"),ot)),c.setDragMode(s.dragMode),c.render(),c.ready=!0,c.setData(s.data),setTimeout(function(){h(s.ready)&&B(l,xt,s.ready,!0),T(l,xt),T(l,Ct,c.getData()),c.complete=!0},0))},unbuild:function(){var t=this;t.ready&&(t.ready=!1,t.complete=!1,t.initialImageData=null,t.initialCanvasData=null,t.initialCropBoxData=null,t.containerData=null,t.canvasData=null,t.cropBoxData=null,t.unbind(),t.resetPreview(),t.previews=null,t.viewBox=null,t.cropBox=null,t.dragBox=null,t.canvas=null,t.container=null,z(t.cropper),t.cropper=null)},render:function(){var t=this;t.initContainer(),t.initCanvas(),t.initCropBox(),t.renderCanvas(),t.cropped&&t.renderCropBox()},initContainer:function(){var t,e=this,i=e.options,a=e.element,n=e.container,o=e.cropper;m(o,ot),v(a,ot),e.containerData=t={width:Jt(n.offsetWidth,tt(i.minContainerWidth)||200),height:Jt(n.offsetHeight,tt(i.minContainerHeight)||100)},u(o,{width:t.width,height:t.height}),m(a,ot),v(o,ot)},initCanvas:function(){var t,e=this,i=e.options.viewMode,a=e.containerData,n=e.imageData,o=90===Qt(n.rotate),r=o?n.naturalHeight:n.naturalWidth,h=o?n.naturalWidth:n.naturalHeight,c=r/h,s=a.width,l=a.height;a.height*c>a.width?3===i?s=a.height*c:l=a.width/c:3===i?l=a.width/c:s=a.height*c,t={naturalWidth:r,naturalHeight:h,aspectRatio:c,width:s,height:l},t.oldLeft=t.left=(a.width-s)/2,t.oldTop=t.top=(a.height-l)/2,e.canvasData=t,e.limited=1===i||2===i,e.limitCanvas(!0,!0),e.initialImageData=p({},n),e.initialCanvasData=p({},t)},limitCanvas:function(t,e){var i,a,n,o,r=this,h=r.options,c=h.viewMode,s=r.containerData,l=r.canvasData,d=l.aspectRatio,p=r.cropBoxData,g=r.cropped&&p;t&&(i=tt(h.minCanvasWidth)||0,a=tt(h.minCanvasHeight)||0,c>1?(i=Jt(i,s.width),a=Jt(a,s.height),3===c&&(a*d>i?i=a*d:a=i/d)):c>0&&(i?i=Jt(i,g?p.width:0):a?a=Jt(a,g?p.height:0):g&&(i=p.width,a=p.height,a*d>i?i=a*d:a=i/d)),i&&a?a*d>i?a=i/d:i=a*d:i?a=i/d:a&&(i=a*d),l.minWidth=i,l.minHeight=a,l.maxWidth=1/0,l.maxHeight=1/0),e&&(c?(n=s.width-l.width,o=s.height-l.height,l.minLeft=Gt(0,n),l.minTop=Gt(0,o),l.maxLeft=Jt(0,n),l.maxTop=Jt(0,o),g&&r.limited&&(l.minLeft=Gt(p.left,p.left+p.width-l.width),l.minTop=Gt(p.top,p.top+p.height-l.height),l.maxLeft=p.left,l.maxTop=p.top,2===c&&(l.width>=s.width&&(l.minLeft=Gt(0,n),l.maxLeft=Jt(0,n)),l.height>=s.height&&(l.minTop=Gt(0,o),l.maxTop=Jt(0,o))))):(l.minLeft=-l.width,l.minTop=-l.height,l.maxLeft=s.width,l.maxTop=s.height))},renderCanvas:function(t){var e,i,a=this,n=a.canvasData,o=a.imageData,r=o.rotate;a.rotated&&(a.rotated=!1,i=I({width:o.width,height:o.height,degree:r}),e=i.width/i.height,e!==n.aspectRatio&&(n.left-=(i.width-n.width)/2,n.top-=(i.height-n.height)/2,n.width=i.width,n.height=i.height,n.aspectRatio=e,n.naturalWidth=o.naturalWidth,n.naturalHeight=o.naturalHeight,r%180&&(i=I({width:o.naturalWidth,height:o.naturalHeight,degree:r}),n.naturalWidth=i.width,n.naturalHeight=i.height),a.limitCanvas(!0,!1))),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Gt(Jt(n.width,n.minWidth),n.maxWidth),n.height=Gt(Jt(n.height,n.minHeight),n.maxHeight),a.limitCanvas(!1,!0),n.oldLeft=n.left=Gt(Jt(n.left,n.minLeft),n.maxLeft),n.oldTop=n.top=Gt(Jt(n.top,n.minTop),n.maxTop),u(a.canvas,{width:n.width,height:n.height,left:n.left,top:n.top}),a.renderImage(),a.cropped&&a.limited&&a.limitCropBox(!0,!0),t&&a.output()},renderImage:function(t){var e,i,a,n,o,r=this,h=r.canvasData,c=r.imageData;c.rotate&&(i=I({width:h.width,height:h.height,degree:c.rotate,aspectRatio:c.aspectRatio},!0),a=i.width,n=i.height,e={width:a,height:n,left:(h.width-a)/2,top:(h.height-n)/2}),p(c,e||{width:h.width,height:h.height,left:0,top:0}),o=U(c),u(r.image,{width:c.width,height:c.height,marginLeft:c.left,marginTop:c.top,WebkitTransform:o,msTransform:o,transform:o}),t&&r.output()},initCropBox:function(){var t=this,e=t.options,i=e.aspectRatio,a=tt(e.autoCropArea)||.8,n=t.canvasData,o={width:n.width,height:n.height};i&&(n.height*i>n.width?o.height=o.width/i:o.width=o.height*i),t.cropBoxData=o,t.limitCropBox(!0,!0),o.width=Gt(Jt(o.width,o.minWidth),o.maxWidth),o.height=Gt(Jt(o.height,o.minHeight),o.maxHeight),o.width=Jt(o.minWidth,o.width*a),o.height=Jt(o.minHeight,o.height*a),o.oldLeft=o.left=n.left+(n.width-o.width)/2,o.oldTop=o.top=n.top+(n.height-o.height)/2,t.initialCropBoxData=p({},o)},limitCropBox:function(t,e){var i,a,n,o,r=this,h=r.options,c=h.aspectRatio,s=r.containerData,l=r.canvasData,d=r.cropBoxData,p=r.limited;t&&(i=tt(h.minCropBoxWidth)||0,a=tt(h.minCropBoxHeight)||0,i=Gt(i,s.width),a=Gt(a,s.height),n=Gt(s.width,p?l.width:s.width),o=Gt(s.height,p?l.height:s.height),c&&(i&&a?a*c>i?a=i/c:i=a*c:i?a=i/c:a&&(i=a*c),o*c>n?o=n/c:n=o*c),d.minWidth=Gt(i,n),d.minHeight=Gt(a,o),d.maxWidth=n,d.maxHeight=o),e&&(p?(d.minLeft=Jt(0,l.left),d.minTop=Jt(0,l.top),d.maxLeft=Gt(s.width,l.left+l.width)-d.width,d.maxTop=Gt(s.height,l.top+l.height)-d.height):(d.minLeft=0,d.minTop=0,d.maxLeft=s.width-d.width,d.maxTop=s.height-d.height))},renderCropBox:function(){var t=this,e=t.options,i=t.containerData,a=t.cropBoxData;(a.width>a.maxWidth||a.width<a.minWidth)&&(a.left=a.oldLeft),(a.height>a.maxHeight||a.height<a.minHeight)&&(a.top=a.oldTop),a.width=Gt(Jt(a.width,a.minWidth),a.maxWidth),a.height=Gt(Jt(a.height,a.minHeight),a.maxHeight),t.limitCropBox(!1,!0),a.oldLeft=a.left=Gt(Jt(a.left,a.minLeft),a.maxLeft),a.oldTop=a.top=Gt(Jt(a.top,a.minTop),a.maxTop),e.movable&&e.cropBoxMovable&&y(t.face,Ot,a.width===i.width&&a.height===i.height?qt:jt),u(t.cropBox,{width:a.width,height:a.height,left:a.left,top:a.top}),t.cropped&&t.limited&&t.limitCanvas(!0,!0),t.disabled||t.output()},output:function(){var t=this;t.preview(),t.complete&&T(t.element,Ct,t.getData())},initPreview:function(){var t,e=this,i=e.options.preview,a=H("img"),n=e.crossOrigin,o=n?e.crossOriginUrl:e.url;n&&(a.crossOrigin=n),a.src=o,M(e.viewBox,a),e.image2=a,i&&(e.previews=t=F.querySelectorAll(i),d(t,function(t){var e=H("img");y(t,zt,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),n&&(e.crossOrigin=n),e.src=o,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',O(t),M(t,e)}))},resetPreview:function(){d(this.previews,function(t){var e=b(t,zt);u(t,{width:e.width,height:e.height}),t.innerHTML=e.html,D(t,zt)})},preview:function(){var t=this,e=t.imageData,i=t.canvasData,a=t.cropBoxData,n=a.width,o=a.height,r=e.width,h=e.height,c=a.left-i.left-e.left,s=a.top-i.top-e.top,l=U(e),g={WebkitTransform:l,msTransform:l,transform:l};t.cropped&&!t.disabled&&(u(t.image2,p({width:r,height:h,marginLeft:-c,marginTop:-s},g)),d(t.previews,function(t){var e=b(t,zt),i=e.width,a=e.height,l=i,d=a,f=1;n&&(f=i/n,d=o*f),o&&d>a&&(f=a/o,l=n*f,d=a),u(t,{width:l,height:d}),u(k(t,"img")[0],p({width:r*f,height:h*f,marginLeft:-c*f,marginTop:-s*f},g))}))},bind:function(){var e=this,i=e.options,a=e.element,n=e.cropper;h(i.cropstart)&&B(a,bt,i.cropstart),h(i.cropmove)&&B(a,yt,i.cropmove),h(i.cropend)&&B(a,Dt,i.cropend),h(i.crop)&&B(a,Ct,i.crop),h(i.zoom)&&B(a,Bt,i.zoom),B(n,dt,e._cropStart=g(e.cropStart,e)),i.zoomable&&i.zoomOnWheel&&B(n,ut,e._wheel=g(e.wheel,e)),i.toggleDragModeOnDblclick&&B(n,ft,e._dblclick=g(e.dblclick,e)),B(F,pt,e._cropMove=g(e.cropMove,e)),B(F,gt,e._cropEnd=g(e.cropEnd,e)),i.responsive&&B(t,mt,e._resize=g(e.resize,e))},unbind:function(){var e=this,i=e.options,a=e.element,n=e.cropper;h(i.cropstart)&&C(a,bt,i.cropstart),h(i.cropmove)&&C(a,yt,i.cropmove),h(i.cropend)&&C(a,Dt,i.cropend),h(i.crop)&&C(a,Ct,i.crop),h(i.zoom)&&C(a,Bt,i.zoom),C(n,dt,e._cropStart),i.zoomable&&i.zoomOnWheel&&C(n,ut,e._wheel),i.toggleDragModeOnDblclick&&C(n,ft,e._dblclick),C(F,pt,e._cropMove),C(F,gt,e._cropEnd),i.responsive&&C(t,mt,e._resize)},resize:function(){var t,e,i,a=this,n=a.options.restore,o=a.container,r=a.containerData;!a.disabled&&r&&(i=o.offsetWidth/r.width,1===i&&o.offsetHeight===r.height||(n&&(t=a.getCanvasData(),e=a.getCropBoxData()),a.render(),n&&(a.setCanvasData(d(t,function(e,a){t[a]=e*i})),a.setCropBoxData(d(e,function(t,a){e[a]=t*i})))))},dblclick:function(){var t=this;t.disabled||t.setDragMode(f(t.dragBox,ct)?qt:$t)},wheel:function(t){var e=this,i=X(t),a=tt(e.options.wheelZoomRatio)||.1,n=1;e.disabled||(L(i),e.wheeling||(e.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),i.deltaY?n=i.deltaY>0?1:-1:i.wheelDelta?n=-i.wheelDelta/120:i.detail&&(n=i.detail>0?1:-1),e.zoom(-n*a,i)))},cropStart:function(t){var e,i,a,n=this,o=n.options,r=X(t),h=r.touches;if(!n.disabled){if(h){if(e=h.length,e>1){if(!o.zoomable||!o.zoomOnTouch||2!==e)return;i=h[1],n.startX2=i.pageX,n.startY2=i.pageY,a=Ft}i=h[0]}if(a=a||b(r.target,Ot),Tt.test(a)){if(T(n.element,bt,{originalEvent:r,action:a})===!1)return;L(r),n.action=a,n.cropping=!1,n.startX=i?i.pageX:r.pageX,n.startY=i?i.pageY:r.pageY,a===$t&&(n.cropping=!0,m(n.dragBox,at))}}},cropMove:function(t){var e,i,a=this,n=a.options,o=X(t),r=o.touches,h=a.action;if(!a.disabled){if(r){if(e=r.length,e>1){if(!n.zoomable||!n.zoomOnTouch||2!==e)return;i=r[1],a.endX2=i.pageX,a.endY2=i.pageY}i=r[0]}if(h){if(T(a.element,yt,{originalEvent:o,action:h})===!1)return;L(o),a.endX=i?i.pageX:o.pageX,a.endY=i?i.pageY:o.pageY,a.change(o.shiftKey,h===Ft?o:null)}}},cropEnd:function(t){var e=this,i=e.options,a=X(t),n=e.action;e.disabled||n&&(L(a),e.cropping&&(e.cropping=!1,w(e.dragBox,at,e.cropped&&i.modal)),e.action="",T(e.element,Dt,{originalEvent:a,action:n}))},change:function(t,e){var i,a,n=this,o=n.options,r=o.aspectRatio,h=n.action,c=n.containerData,s=n.canvasData,l=n.cropBoxData,d=l.width,p=l.height,g=l.left,u=l.top,f=g+d,m=u+p,w=0,x=0,b=c.width,y=c.height,D=!0;switch(!r&&t&&(r=d&&p?d/p:1),n.limited&&(w=l.minLeft,x=l.minTop,b=w+Gt(c.width,s.left+s.width),y=x+Gt(c.height,s.top+s.height)),a={x:n.endX-n.startX,y:n.endY-n.startY},r&&(a.X=a.y*r,a.Y=a.x/r),h){case jt:g+=a.x,u+=a.y;break;case Rt:if(a.x>=0&&(f>=b||r&&(x>=u||m>=y))){D=!1;break}d+=a.x,r&&(p=d/r,u-=a.Y/2),0>d&&(h=At,d=0);break;case Ut:if(a.y<=0&&(x>=u||r&&(w>=g||f>=b))){D=!1;break}p-=a.y,u+=a.y,r&&(d=p*r,g+=a.X/2),0>p&&(h=Nt,p=0);break;case At:if(a.x<=0&&(w>=g||r&&(x>=u||m>=y))){D=!1;break}d-=a.x,g+=a.x,r&&(p=d/r,u+=a.Y/2),0>d&&(h=Rt,d=0);break;case Nt:if(a.y>=0&&(m>=y||r&&(w>=g||f>=b))){D=!1;break}p+=a.y,r&&(d=p*r,g-=a.X/2),0>p&&(h=Ut,p=0);break;case _t:if(r){if(a.y<=0&&(x>=u||f>=b)){D=!1;break}p-=a.y,u+=a.y,d=p*r}else a.x>=0?b>f?d+=a.x:a.y<=0&&x>=u&&(D=!1):d+=a.x,a.y<=0?u>x&&(p-=a.y,u+=a.y):(p-=a.y,u+=a.y);0>d&&0>p?(h=St,p=0,d=0):0>d?(h=Pt,d=0):0>p&&(h=It,p=0);break;case Pt:if(r){if(a.y<=0&&(x>=u||w>=g)){D=!1;break}p-=a.y,u+=a.y,d=p*r,g+=a.X}else a.x<=0?g>w?(d-=a.x,g+=a.x):a.y<=0&&x>=u&&(D=!1):(d-=a.x,g+=a.x),a.y<=0?u>x&&(p-=a.y,u+=a.y):(p-=a.y,u+=a.y);0>d&&0>p?(h=It,p=0,d=0):0>d?(h=_t,d=0):0>p&&(h=St,p=0);break;case St:if(r){if(a.x<=0&&(w>=g||m>=y)){D=!1;break}d-=a.x,g+=a.x,p=d/r}else a.x<=0?g>w?(d-=a.x,g+=a.x):a.y>=0&&m>=y&&(D=!1):(d-=a.x,g+=a.x),a.y>=0?y>m&&(p+=a.y):p+=a.y;0>d&&0>p?(h=_t,p=0,d=0):0>d?(h=It,d=0):0>p&&(h=Pt,p=0);break;case It:if(r){if(a.x>=0&&(f>=b||m>=y)){D=!1;break}d+=a.x,p=d/r}else a.x>=0?b>f?d+=a.x:a.y>=0&&m>=y&&(D=!1):d+=a.x,a.y>=0?y>m&&(p+=a.y):p+=a.y;0>d&&0>p?(h=Pt,p=0,d=0):0>d?(h=St,d=0):0>p&&(h=_t,p=0);break;case qt:n.move(a.x,a.y),D=!1;break;case Ft:n.zoom(function(t,e,i,a){var n=ie(t*t+e*e),o=ie(i*i+a*a);return(o-n)/n}(Qt(n.startX-n.startX2),Qt(n.startY-n.startY2),Qt(n.endX-n.endX2),Qt(n.endY-n.endY2)),e),n.startX2=n.endX2,n.startY2=n.endY2,D=!1;break;case $t:if(!a.x||!a.y){D=!1;break}i=Y(n.cropper),g=n.startX-i.left,u=n.startY-i.top,d=l.minWidth,p=l.minHeight,a.x>0?h=a.y>0?It:_t:a.x<0&&(g-=d,h=a.y>0?St:Pt),a.y<0&&(u-=p),n.cropped||(v(n.cropBox,ot),n.cropped=!0,n.limited&&n.limitCropBox(!0,!0))}D&&(l.width=d,l.height=p,l.left=g,l.top=u,n.action=h,n.renderCropBox()),n.startX=n.endX,n.startY=n.endY},crop:function(){var t=this;return t.ready&&!t.disabled&&(t.cropped||(t.cropped=!0,t.limitCropBox(!0,!0),t.options.modal&&m(t.dragBox,at),v(t.cropBox,ot)),t.setCropBoxData(t.initialCropBoxData)),t},reset:function(){var t=this;return t.ready&&!t.disabled&&(t.imageData=p({},t.initialImageData),t.canvasData=p({},t.initialCanvasData),t.cropBoxData=p({},t.initialCropBoxData),t.renderCanvas(),t.cropped&&t.renderCropBox()),t},clear:function(){var t=this;return t.cropped&&!t.disabled&&(p(t.cropBoxData,{left:0,top:0,width:0,height:0}),t.cropped=!1,t.renderCropBox(),t.limitCanvas(),t.renderCanvas(),v(t.dragBox,at),m(t.cropBox,ot)),t},replace:function(t,e){var i=this;return!i.disabled&&t&&(i.isImg&&(i.element.src=t),e?(i.url=t,i.image.src=t,i.ready&&(i.image2.src=t,d(i.previews,function(e){k(e,"img")[0].src=t}))):(i.isImg&&(i.replaced=!0),i.options.data=null,i.load(t))),i},enable:function(){var t=this;return t.ready&&(t.disabled=!1,v(t.cropper,st)),t},disable:function(){var t=this;return t.ready&&(t.disabled=!0,m(t.cropper,st)),t},destroy:function(){var t=this,e=t.element,i=t.image;return t.loaded?(t.isImg&&t.replaced&&(e.src=t.originalUrl),t.unbuild(),v(e,ot)):t.isImg?C(e,wt,t.start):i&&z(i),D(e,it),t},move:function(t,e){var i=this,a=i.canvasData;return i.moveTo(n(t)?t:a.left+tt(t),n(e)?e:a.top+tt(e))},moveTo:function(t,e){var i=this,o=i.canvasData,r=!1;return n(e)&&(e=t),t=tt(t),e=tt(e),i.ready&&!i.disabled&&i.options.movable&&(a(t)&&(o.left=t,r=!0),a(e)&&(o.top=e,r=!0),r&&i.renderCanvas(!0)),i},zoom:function(t,e){var i=this,a=i.canvasData;return t=tt(t),t=0>t?1/(1-t):1+t,i.zoomTo(a.width*t/a.naturalWidth,e)},zoomTo:function(t,e){var i,a,n,o,r=this,h=r.options,c=r.canvasData,s=c.width,l=c.height,d=c.naturalWidth,p=c.naturalHeight;if(t=tt(t),t>=0&&r.ready&&!r.disabled&&h.zoomable){if(i=d*t,a=p*t,T(r.element,Bt,{originalEvent:e,oldRatio:s/d,ratio:i/d})===!1)return r;e?(n=Y(r.cropper),o=e.touches?W(e.touches):{pageX:e.pageX,pageY:e.pageY},c.left-=(i-s)*((o.pageX-n.left-c.left)/s),c.top-=(a-l)*((o.pageY-n.top-c.top)/l)):(c.left-=(i-s)/2,c.top-=(a-l)/2),c.width=i,c.height=a,r.renderCanvas(!0)}return r},rotate:function(t){var e=this;return e.rotateTo((e.imageData.rotate||0)+tt(t))},rotateTo:function(t){var e=this;return t=tt(t),a(t)&&e.ready&&!e.disabled&&e.options.rotatable&&(e.imageData.rotate=t%360,e.rotated=!0,e.renderCanvas(!0)),e},scale:function(t,e){var i=this,o=i.imageData,r=!1;return n(e)&&(e=t),t=tt(t),e=tt(e),i.ready&&!i.disabled&&i.options.scalable&&(a(t)&&(o.scaleX=t,r=!0),a(e)&&(o.scaleY=e,r=!0),r&&i.renderImage(!0)),i},scaleX:function(t){var e=this,i=e.imageData.scaleY;return e.scale(t,a(i)?i:1)},scaleY:function(t){var e=this,i=e.imageData.scaleX;return e.scale(a(i)?i:1,t)},getData:function(t){var e,i,a=this,n=a.options,o=a.imageData,r=a.canvasData,h=a.cropBoxData;return a.ready&&a.cropped?(i={x:h.left-r.left,y:h.top-r.top,width:h.width,height:h.height},e=o.width/o.naturalWidth,d(i,function(a,n){a/=e,i[n]=t?ae(a):a})):i={x:0,y:0,width:0,height:0},n.rotatable&&(i.rotate=o.rotate||0),n.scalable&&(i.scaleX=o.scaleX||1,i.scaleY=o.scaleY||1),i},setData:function(t){var e,i,n,o=this,c=o.options,s=o.imageData,l=o.canvasData,d={};return h(t)&&(t=t.call(o.element)),o.ready&&!o.disabled&&r(t)&&(c.rotatable&&a(t.rotate)&&t.rotate!==s.rotate&&(s.rotate=t.rotate,o.rotated=e=!0),c.scalable&&(a(t.scaleX)&&t.scaleX!==s.scaleX&&(s.scaleX=t.scaleX,i=!0),a(t.scaleY)&&t.scaleY!==s.scaleY&&(s.scaleY=t.scaleY,i=!0)),e?o.renderCanvas():i&&o.renderImage(),n=s.width/s.naturalWidth,a(t.x)&&(d.left=t.x*n+l.left),a(t.y)&&(d.top=t.y*n+l.top),a(t.width)&&(d.width=t.width*n),a(t.height)&&(d.height=t.height*n),o.setCropBoxData(d)),o},getContainerData:function(){var t=this;return t.ready?t.containerData:{}},getImageData:function(){var t=this;return t.loaded?t.imageData:{}},getCanvasData:function(){var t=this,e=t.canvasData,i={};return t.ready&&d(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this,i=e.canvasData,n=i.aspectRatio;return h(t)&&(t=t.call(e.element)),e.ready&&!e.disabled&&r(t)&&(a(t.left)&&(i.left=t.left),a(t.top)&&(i.top=t.top),a(t.width)?(i.width=t.width,i.height=t.width/n):a(t.height)&&(i.height=t.height,i.width=t.height*n),e.renderCanvas(!0)),e},getCropBoxData:function(){var t,e=this,i=e.cropBoxData;return e.ready&&e.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var e,i,n=this,o=n.cropBoxData,c=n.options.aspectRatio;return h(t)&&(t=t.call(n.element)),n.ready&&n.cropped&&!n.disabled&&r(t)&&(a(t.left)&&(o.left=t.left),a(t.top)&&(o.top=t.top),a(t.width)&&(e=!0,o.width=t.width),a(t.height)&&(i=!0,o.height=t.height),c&&(e?o.height=o.width/c:i&&(o.width=o.height*c)),n.renderCropBox()),n},getCroppedCanvas:function(t){var e,i,a,n,o,h,c,s,l,d,p,g=this;return g.ready&&Kt?g.cropped?(r(t)||(t={}),p=g.getData(),e=p.width,i=p.height,s=e/i,r(t)&&(o=t.width,h=t.height,o?(h=o/s,c=o/e):h&&(o=h*s,c=h/i)),a=ne(o||e),n=ne(h||i),l=H("canvas"),l.width=a,l.height=n,d=l.getContext("2d"),t.fillColor&&(d.fillStyle=t.fillColor,d.fillRect(0,0,a,n)),d.drawImage.apply(d,function(){var t,a,n,o,r,h,s=S(g.image,g.imageData),l=s.width,d=s.height,u=g.canvasData,f=[s],m=p.x+u.naturalWidth*(Qt(p.scaleX||1)-1)/2,v=p.y+u.naturalHeight*(Qt(p.scaleY||1)-1)/2;return-e>=m||m>l?m=t=n=r=0:0>=m?(n=-m,m=0,t=r=Gt(l,e+m)):l>=m&&(n=0,t=r=Gt(e,l-m)),0>=t||-i>=v||v>d?v=a=o=h=0:0>=v?(o=-v,v=0,a=h=Gt(d,i+v)):d>=v&&(o=0,a=h=Gt(i,d-v)),f.push(ne(m),ne(v),ne(t),ne(a)),c&&(n*=c,o*=c,r*=c,h*=c),r>0&&h>0&&f.push(ne(n),ne(o),ne(r),ne(h)),f}.call(g)),l):S(g.image,g.imageData):void 0},setAspectRatio:function(t){var e=this,i=e.options;return e.disabled||n(t)||(i.aspectRatio=Jt(0,t)||NaN,e.ready&&(e.initCropBox(),e.cropped&&e.renderCropBox())),e},setDragMode:function(t){var e,i,a=this,n=a.options,o=a.dragBox,r=a.face;return a.loaded&&!a.disabled&&(e=t===$t,i=n.movable&&t===qt,t=e||i?t:Zt,y(o,Ot,t),w(o,ct,e),w(o,ht,i),n.cropBoxMovable||(y(r,Ot,t),w(r,ct,e),w(r,ht,i))),a}},q.DEFAULTS={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},q.TEMPLATE=function(t,e){return e=e.split(","),t.replace(/\d+/g,function(t){return e[t]})}('<0 6="5-container"><0 6="5-wrap-9"><0 6="5-canvas"></0></0><0 6="5-drag-9"></0><0 6="5-crop-9"><1 6="5-view-9"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-center"></1><1 6="5-face"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>',"div,span,action,data,point,cropper,class,line,dashed,box");var de=t.Cropper;return q.noConflict=function(){return t.Cropper=de,q},q.setDefaults=function(t){p(q.DEFAULTS,t)},"function"==typeof define&&define.amd&&define("cropper",[],function(){return q}),e||(t.Cropper=q),q});