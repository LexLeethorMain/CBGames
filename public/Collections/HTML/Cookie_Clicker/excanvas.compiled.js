"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}document.createElement("canvas").getContext||function(){var v=Math,S=v.round,l=v.sin,c=v.cos,n=v.abs,o=v.sqrt,b=10,u=b/2;function i(){return this.context_||(this.context_=new d(this))}var r=Array.prototype.slice,t={init:function(t){/MSIE/.test(navigator.userAgent)&&!window.opera&&((t=t||document).createElement("canvas"),t.attachEvent("onreadystatechange",function(t,e){var i=r.call(arguments,2);return function(){return t.apply(e,i.concat(r.call(arguments)))}}(this.init_,this,t)))},init_:function(t){t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),t.styleSheets.ex_canvas_||((e=t.createStyleSheet()).owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}");for(var e,i=t.getElementsByTagName("canvas"),n=0;n<i.length;n++)this.initElement(i[n])},initElement:function(t){var e;return t.getContext||(t.getContext=i,t.innerHTML="",t.attachEvent("onpropertychange",s),t.attachEvent("onresize",a),(e=t.attributes).width&&e.width.specified?t.style.width=e.width.nodeValue+"px":t.width=t.clientWidth,e.height&&e.height.specified?t.style.height=e.height.nodeValue+"px":t.height=t.clientHeight),t}};function s(t){var e=t.srcElement;switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px",e.getContext().clearRect();break;case"height":e.style.height=e.attributes.height.nodeValue+"px",e.getContext().clearRect()}}function a(t){(t=t.srcElement).firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}t.init();for(var h=[],e=0;e<16;e++)for(var _=0;_<16;_++)h[16*e+_]=e.toString(16)+_.toString(16);function y(){return[[1,0,0],[0,1,0],[0,0,1]]}function f(t,e){for(var i=y(),n=0;n<3;n++)for(var o=0;o<3;o++){for(var r=0,s=0;s<3;s++)r+=t[n][s]*e[s][o];i[n][o]=r}return i}function p(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function w(t){var e=1;if("rgb"==(t=String(t)).substring(0,3)){for(var i=t.indexOf("(",3),n=t.indexOf(")",i+1),o=t.substring(i+1,n).split(","),r="#",s=0;s<3;s++)r+=h[Number(o[s])];4==o.length&&"a"==t.substr(3,1)&&(e=o[3])}else r=t;return{color:r,alpha:e}}function d(t){this.m_=y(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.fillStyle=this.strokeStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=+b,this.globalAlpha=1;var e=(this.canvas=t).ownerDocument.createElement("div");e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.overflow="hidden",e.style.position="absolute",t.appendChild(e),this.element_=e,this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var m=d.prototype;function x(t,e,i,n){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:n.x,y:n.y}),t.currentX_=n.x,t.currentY_=n.y}function g(t,e,i){(function(t){for(var e=0;e<3;e++)for(var i=0;i<2;i++)if(!isFinite(t[e][i])||isNaN(t[e][i]))return;return 1})(e)&&(t.m_=e,i)&&(t.lineScale_=o(n(e[0][0]*e[1][1]-e[0][1]*e[1][0])))}function C(t){this.type_=t,this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0,this.colors_=[]}function T(){}m.clearRect=function(){this.element_.innerHTML=""},m.beginPath=function(){this.currentPath_=[]},m.moveTo=function(t,e){t=this.getCoords_(t,e),this.currentPath_.push({type:"moveTo",x:t.x,y:t.y}),this.currentX_=t.x,this.currentY_=t.y},m.lineTo=function(t,e){t=this.getCoords_(t,e),this.currentPath_.push({type:"lineTo",x:t.x,y:t.y}),this.currentX_=t.x,this.currentY_=t.y},m.bezierCurveTo=function(t,e,i,n,o,r){o=this.getCoords_(o,r),r=this.getCoords_(t,e),t=this.getCoords_(i,n),x(this,r,t,o)},m.quadraticCurveTo=function(t,e,i,n){t=this.getCoords_(t,e),e=this.getCoords_(i,n),x(this,i={x:this.currentX_+.6666666666666666*(t.x-this.currentX_),y:this.currentY_+.6666666666666666*(t.y-this.currentY_)},{x:i.x+(e.x-this.currentX_)/3,y:i.y+(e.y-this.currentY_)/3},e)},m.arc=function(t,e,i,n,o,r){i*=b;var s=r?"at":"wa",a=t+c(n)*i-u,n=e+l(n)*i-u,h=t+c(o)*i-u,o=e+l(o)*i-u,r=(a!=h||r||(a+=.125),this.getCoords_(t,e)),t=this.getCoords_(a,n),e=this.getCoords_(h,o);this.currentPath_.push({type:s,x:r.x,y:r.y,radius:i,xStart:t.x,yStart:t.y,xEnd:e.x,yEnd:e.y})},m.rect=function(t,e,i,n){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath()},m.strokeRect=function(t,e,i,n){var o=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath(),this.stroke(),this.currentPath_=o},m.fillRect=function(t,e,i,n){var o=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath(),this.fill(),this.currentPath_=o},m.createLinearGradient=function(t,e,i,n){var o=new C("gradient");return o.x0_=t,o.y0_=e,o.x1_=i,o.y1_=n,o},m.createRadialGradient=function(t,e,i,n,o,r){var s=new C("gradientradial");return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=n,s.y1_=o,s.r1_=r,s},m.drawImage=function(t){var e,i,n,o,r,s,a,h=t.runtimeStyle.width,l=t.runtimeStyle.height,c=(t.runtimeStyle.width="auto",t.runtimeStyle.height="auto",t.width),u=t.height;if(t.runtimeStyle.width=h,t.runtimeStyle.height=l,3==arguments.length)d=arguments[1],e=arguments[2],o=r=0,s=i=c,a=n=u;else if(5==arguments.length)d=arguments[1],e=arguments[2],i=arguments[3],n=arguments[4],o=r=0,s=c,a=u;else{if(9!=arguments.length)throw Error("Invalid number of arguments");o=arguments[1],r=arguments[2],s=arguments[3],a=arguments[4],d=arguments[5],e=arguments[6],i=arguments[7],n=arguments[8]}var _,y,f,p,d,h=this.getCoords_(d,e);(l=[]).push(" <g_vml_:group",' coordsize="',10*b,",",10*b,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]?((_=[]).push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",S(h.x/b),",","Dy=",S(h.y/b),""),y=h,f=this.getCoords_(d+i,e),p=this.getCoords_(d,e+n),d=this.getCoords_(d+i,e+n),y.x=v.max(y.x,f.x,p.x,d.x),y.y=v.max(y.y,f.y,p.y,d.y),l.push("padding:0 ",S(y.x/b),"px ",S(y.y/b),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",_.join(""),", sizingmethod='clip');")):l.push("top:",S(h.y/b),"px;left:",S(h.x/b),"px;"),l.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',b*i,"px;"," height:",b*n,'px;"',' cropleft="',o/c,'"',' croptop="',r/u,'"',' cropright="',(c-o-s)/c,'"',' cropbottom="',(u-r-a)/u,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",l.join(""))},m.stroke=function(t){for(var e=[],i=(n=w(t?this.fillStyle:this.strokeStyle)).color,n=n.alpha*this.globalAlpha,o=(e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',10*b," ",10*b,'"',' stroked="',!t,'"',' path="'),{x:null,y:null}),r={x:null,y:null},s=0;s<this.currentPath_.length;s++){var a=this.currentPath_[s];switch(a.type){case"moveTo":e.push(" m ",S(a.x),",",S(a.y));break;case"lineTo":e.push(" l ",S(a.x),",",S(a.y));break;case"close":e.push(" x "),a=null;break;case"bezierCurveTo":e.push(" c ",S(a.cp1x),",",S(a.cp1y),",",S(a.cp2x),",",S(a.cp2y),",",S(a.x),",",S(a.y));break;case"at":case"wa":e.push(" ",a.type," ",S(a.x-this.arcScaleX_*a.radius),",",S(a.y-this.arcScaleY_*a.radius)," ",S(a.x+this.arcScaleX_*a.radius),",",S(a.y+this.arcScaleY_*a.radius)," ",S(a.xStart),",",S(a.yStart)," ",S(a.xEnd),",",S(a.yEnd))}a&&((null==o.x||a.x<o.x)&&(o.x=a.x),(null==r.x||a.x>r.x)&&(r.x=a.x),(null==o.y||a.y<o.y)&&(o.y=a.y),null==r.y||a.y>r.y)&&(r.y=a.y)}if(e.push(' ">'),t)if("object"==_typeof(this.fillStyle)){for(var h=0,l={x:0,y:0},c=0,u=1,_=("gradient"==(t=this.fillStyle).type_?(p=t.x1_/this.arcScaleX_,f=t.y1_/this.arcScaleY_,d=this.getCoords_(t.x0_/this.arcScaleX_,t.y0_/this.arcScaleY_),p=this.getCoords_(p,f),(h=180*Math.atan2(p.x-d.x,p.y-d.y)/Math.PI)<0&&(h+=360),h<1e-6&&(h=0)):(l={x:((d=this.getCoords_(t.x0_,t.y0_)).x-o.x)/(f=r.x-o.x),y:(d.y-o.y)/(p=r.y-o.y)},f/=this.arcScaleX_*b,p/=this.arcScaleY_*b,d=v.max(f,p),c=2*t.r0_/d,u=2*t.r1_/d-c),t.colors_),y=(_.sort(function(t,e){return t.offset-e.offset}),_.length),f=_[0].color,p=_[y-1].color,d=_[0].alpha*this.globalAlpha,m=_[y-1].alpha*this.globalAlpha,x=[],s=0;s<y;s++){var g=_[s];x.push(g.offset*u+c+" "+g.color)}e.push('<g_vml_:fill type="',t.type_,'"',' method="none" focus="100%"',' color="',f,'"',' color2="',p,'"',' colors="',x.join(","),'"',' opacity="',m,'"',' g_o_:opacity2="',d,'"',' angle="',h,'"',' focusposition="',l.x,",",l.y,'" />')}else e.push('<g_vml_:fill color="',i,'" opacity="',n,'" />');else(t=this.lineScale_*this.lineWidth)<1&&(n*=t),e.push("<g_vml_:stroke",' opacity="',n,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',function(t){switch(t){case"butt":return"flat";case"round":return"round";default:return"square"}}(this.lineCap),'"',' weight="',t,'px"',' color="',i,'" />');e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},m.fill=function(){this.stroke(!0)},m.closePath=function(){this.currentPath_.push({type:"close"})},m.getCoords_=function(t,e){var i=this.m_;return{x:b*(t*i[0][0]+e*i[1][0]+i[2][0])-u,y:b*(t*i[0][1]+e*i[1][1]+i[2][1])-u}},m.save=function(){var t={};p(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=f(y(),this.m_)},m.restore=function(){p(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},m.translate=function(t,e){g(this,f([[1,0,0],[0,1,0],[t,e,1]],this.m_),!1)},m.rotate=function(t){var e=c(t);g(this,f([[e,t=l(t),0],[-t,e,0],[0,0,1]],this.m_),!1)},m.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e,g(this,f([[t,0,0],[0,e,0],[0,0,1]],this.m_),!0)},m.transform=function(t,e,i,n,o,r){g(this,f([[t,e,0],[i,n,0],[o,r,1]],this.m_),!0)},m.setTransform=function(t,e,i,n,o,r){g(this,[[t,e,0],[i,n,0],[o,r,1]],!0)},m.clip=function(){},m.arcTo=function(){},m.createPattern=function(){return new T},C.prototype.addColorStop=function(t,e){e=w(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})},G_vmlCanvasManager=t,CanvasRenderingContext2D=d,CanvasGradient=C,CanvasPattern=T}();