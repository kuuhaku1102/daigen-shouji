function Cs(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Yg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ra={duration:.5,overwrite:!1,delay:0},dd,yn,Ot,Ii=1e8,Rt=1/Ii,kf=Math.PI*2,Uv=kf/4,Fv=0,$g=Math.sqrt,Nv=Math.cos,kv=Math.sin,mn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},zs=function(e){return typeof e=="number"},pd=function(e){return typeof e>"u"},_s=function(e){return typeof e=="object"},ei=function(e){return e!==!1},md=function(){return typeof window<"u"},Dl=function(e){return Vt(e)||mn(e)},Zg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,zv=/random\([^)]+\)/g,Bv=/,\s*/g,up=/(?:-?\.?\d|\.)+/gi,Kg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jg=/[+-]=-?[.\d]+/,Vv=/[^,'"\[\]\s]+/gi,Gv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,ss,zf,gd,Mi={},Hc={},Jg,Qg=function(e){return(Hc=oa(e,Mi))&&ri},_d=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cl=function(e,t){return!t&&console.warn(e)},e_=function(e,t){return e&&(Mi[e]=t)&&Hc&&(Hc[e]=t)||Mi},ul=function(){return 0},Hv={suppressEvents:!0,isStart:!0,kill:!1},Ec={suppressEvents:!0,kill:!1},Wv={suppressEvents:!0},vd={},cr=[],Bf={},t_,hi={},wu={},fp=30,Tc=[],xd="",yd=function(e){var t=e[0],n,s;if(_s(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Tc.length;s--&&!Tc[s].targetTest(t););n=Tc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new E_(e[s],n)))||e.splice(s,1);return e},Kr=function(e){return e._gsap||yd(Oi(e))[0]._gsap},n_=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():pd(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},qo=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},Xv=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Wc=function(){var e=cr.length,t=cr.slice(0),n,s;for(Bf={},cr.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Md=function(e){return!!(e._initted||e._startAt||e.add)},i_=function(e,t,n,s){cr.length&&!yn&&Wc(),e.render(t,n,!!(yn&&t<0&&Md(e))),cr.length&&!yn&&Wc()},s_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vv).length<2?t:mn(e)?e.trim():e},r_=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qv=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},oa=function(e,t){for(var n in t)e[n]=t[n];return e},hp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_s(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Xc=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},$a=function(e){var t=e.parent||Ft,n=e.keyframes?qv(On(e.keyframes)):bi;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yv=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},o_=function(e,t,n,s,r){var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},hu=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$v=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vf=function(e,t,n,s){return e._startAt&&(yn?e._startAt.revert(Ec):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Zv=function i(e){return!e||e._ts&&i(e.parent)},dp=function(e){return e._repeat?aa(e._tTime,e=e.duration()+e._rDelay)*e:0},aa=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},du=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},pu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),du(e),n._dirty||jr(n,e)),e},a_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qc(e.rawTime(),t),(!t._dur||El(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},as=function(e,t,n,s){return t.parent&&dr(t),t._start=Ut((zs(n)?n:n||e!==Ft?Ai(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),o_(e,t,"_first","_last",e._sort?"_start":0),Gf(t)||(e._recent=t),s||a_(e,t),e._ts<0&&pu(e,e._tTime),e},l_=function(e,t){return(Mi.ScrollTrigger||_d("scrollTrigger",t))&&Mi.ScrollTrigger.create(t,e)},c_=function(e,t,n,s,r){if(Sd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&t_!==pi.frame)return cr.push(e),e._lazy=[r,s],1},Kv=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Gf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jv=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&Kv(e)&&!(!e._initted&&Gf(e))||(e._ts<0||e._dp._ts<0)&&!Gf(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=El(0,e._tDur,t),u=aa(l,a),e._yoyo&&u&1&&(o=1-o),u!==aa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||yn||s||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&c_(e,t,s,n,l))return;for(d=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Vf(e,t,n,!0),e._onUpdate&&!n&&gi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&dr(e,1),!n&&!yn&&(gi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Jv=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},la=function(e,t,n,s){var r=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ut(o*(r+1)+e._rDelay*r):o,a>0&&!s&&pu(e,e._tTime=e._tDur*a),e.parent&&du(e),n||jr(e.parent,e),e},pp=function(e){return e instanceof qn?jr(e):la(e,e._dur)},Qv={_start:0,endTime:ul,totalDuration:ul},Ai=function i(e,t,n){var s=e.labels,r=e._recent||Qv,o=e.duration()>=Ii?r.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(On(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Za=function(e,t,n){var s=zs(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Kt(t[0],o,t[r+1])},yr=function(e,t){return e||e===0?t(e):t},El=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!mn(e)||!(t=Gv.exec(e))?"":t[1]},ex=function(e,t,n){return yr(n,function(s){return El(e,t,s)})},Hf=[].slice,u_=function(e,t){return e&&_s(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_s(e[0]))&&!e.nodeType&&e!==ss},tx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return mn(s)&&!t||u_(s,1)?(r=n).push.apply(r,Oi(s)):n.push(s)})||n},Oi=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):mn(e)&&!n&&(zf||!ca())?Hf.call((t||gd).querySelectorAll(e),0):On(e)?tx(e,n):u_(e)?Hf.call(e,0):e?[e]:[]},Wf=function(e){return e=Oi(e)[0]||cl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Oi(t,n.querySelectorAll?n:n===e?cl("Invalid scope")||gd.createElement("div"):e)}},f_=function(e){return e.sort(function(){return .5-Math.random()})},h_=function(e){if(Vt(e))return e;var t=_s(e)?e:{each:e},n=Jr(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,u=s,d=s;return mn(s)?u=d={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],d=s[1]),function(f,h,p){var _=(p||t).length,m=o[_],g,v,M,y,w,T,E,x,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Ii])[1],!S){for(E=-Ii;E<(E=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*u-.5:s%S,v=S===Ii?0:l?_*d/S-.5:s/S|0,E=0,x=Ii,T=0;T<_;T++)M=T%S-g,y=v-(T/S|0),m[T]=w=c?Math.abs(c==="y"?y:M):$g(M*M+y*y),w>E&&(E=w),w<x&&(x=w);s==="random"&&f_(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(s==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Rn(t.amount||t.each)||0,n=n&&_<0?b_(n):n}return _=(m[f]-m.min)/m.max||0,Ut(m.b+(n?n(_):_)*m.v)+m.u}},Xf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Ut(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(zs(n)?0:Rn(n))}},d_=function(e,t){var n=On(e),s,r;return!n&&_s(e)&&(s=n=e.radius||Ii,e.values?(e=Oi(e.values),(r=!zs(e[0]))&&(s*=s)):e=Xf(e.increment)),yr(t,n?Vt(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ii,u=0,d=e.length,f,h;d--;)r?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!s||c<=s?e[u]:o,r||u===o||zs(o)?u:u+Rn(o)}:Xf(e))},p_=function(e,t,n,s){return yr(On(e)?!t:n===!0?!!(n=0):!s,function(){return On(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},nx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},ix=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},sx=function(e,t,n){return g_(e,t,0,1,n)},m_=function(e,t,n){return yr(n,function(s){return e[~~t(s)]})},rx=function i(e,t,n){var s=t-e;return On(e)?m_(e,i(0,e.length),t):yr(n,function(r){return(s+(r-e)%s)%s+e})},ox=function i(e,t,n){var s=t-e,r=s*2;return On(e)?m_(e,i(0,e.length-1),t):yr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},fl=function(e){return e.replace(zv,function(t){var n=t.indexOf("[")+1,s=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Bv);return p_(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},g_=function(e,t,n,s,r){var o=t-e,a=s-n;return yr(r,function(l){return n+((l-e)/o*a||0)})},ax=function i(e,t,n,s){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var o=mn(e),a={},l,c,u,d,f;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,r=function(p){p*=d;var _=Math.min(f,~~p);return u[_](p-_)},n=t}else s||(e=oa(On(e)?[]:{},e));if(!u){for(l in t)bd.call(a,e,l,"get",t[l]);r=function(p){return Td(p,a)||(o?e.p:e)}}}return yr(n,r)},mp=function(e,t,n){var s=e.labels,r=Ii,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},gi=function(e,t,n){var s=e.vars,r=s[t],o=Ot,a=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&cr.length&&Wc(),a&&(Ot=a),u=l?r.apply(c,l):r.call(c),Ot=o,u},ka=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&gi(e,"onInterrupt"),e},Vo,__=[],v_=function(e){if(e)if(e=!e.name&&e.default||e,md()||e.headless){var t=e.name,n=Vt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ul,render:Td,add:bd,kill:Sx,modifier:bx,rawVars:0},o={targetTest:0,get:0,getSetter:Ed,aliases:{},register:0};if(ca(),e!==s){if(hi[t])return;bi(s,bi(Xc(e,r),o)),oa(s.prototype,oa(r,Xc(e,o))),hi[s.prop=t]=s,e.targetTest&&(Tc.push(s),vd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}e_(t,s),e.register&&e.register(ri,s,ni)}else __.push(e)},Ct=255,za={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Eu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},x_=function(e,t,n){var s=e?zs(e)?[e>>16,e>>8&Ct,e&Ct]:0:za.black,r,o,a,l,c,u,d,f,h,p;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),za[e])s=za[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ct,s&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(s=p=e.match(up),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=Eu(l+1/3,r,o),s[1]=Eu(l,r,o),s[2]=Eu(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(Kg),n&&s.length<4&&(s[3]=1),s}else s=e.match(up)||za.transparent;s=s.map(Number)}return t&&!p&&(r=s[0]/Ct,o=s[1]/Ct,a=s[2]/Ct,d=Math.max(r,o,a),f=Math.min(r,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===r?(o-a)/h+(o<a?6:0):d===o?(a-r)/h+2:(r-o)/h+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},y_=function(e){var t=[],n=[],s=-1;return e.split(ur).forEach(function(r){var o=r.match(Bo)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},gp=function(e,t,n){var s="",r=(e+s).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!r)return e;if(r=r.map(function(f){return(f=x_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=y_(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(ur,"1").split(Bo),d=c.length-1;a<d;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ur),d=c.length-1;a<d;a++)s+=c[a]+r[a];return s+c[d]},ur=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in za)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),lx=/hsl[a]?\(/,M_=function(e){var t=e.join(" "),n;if(ur.lastIndex=0,ur.test(t))return n=lx.test(t),e[1]=gp(e[1],n),e[0]=gp(e[0],n,y_(e[1])),!0},hl,pi=(function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,d,f,h,p=function _(m){var g=i()-s,v=m===!0,M,y,w,T;if((g>e||g<0)&&(n+=g-t),s+=g,w=s-n,M=w-o,(M>0||v)&&(T=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,o+=M+(M>=r?4:r-M),y=1),v||(l=c(_)),y)for(h=0;h<a.length;h++)a[h](w,f,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Jg&&(!zf&&md()&&(ss=zf=window,gd=ss.document||{},Mi.gsap=ri,(ss.gsapVersions||(ss.gsapVersions=[])).push(ri.version),Qg(Hc||ss.GreenSockGlobals||!ss.gsap&&ss||{}),__.forEach(v_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},hl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),hl=0,c=ul},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,v){var M=g?function(y,w,T,E){m(y,w,T,E),d.remove(M)}:m;return d.remove(m),a[v?"unshift":"push"](M),ca(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&h>=g&&h--},_listeners:a},d})(),ca=function(){return!hl&&pi.wake()},ct={},cx=/^[\d.\-M][\d.\-,\s]/,ux=/["']/g,fx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(ux,"").trim():+c,s=l.substr(a+1).trim();return t},hx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},dx=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[fx(t[1])]:hx(e).split(",").map(s_)):ct._CE&&cx.test(e)?ct._CE("",e):n},b_=function(e){return function(t){return 1-e(1-t)}},S_=function i(e,t){for(var n=e._first,s;n;)n instanceof qn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Jr=function(e,t){return e&&(Vt(e)?e:ct[e]||dx(e))||t},ho=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return ti(e,function(a){ct[a]=Mi[a]=r,ct[o=a.toLowerCase()]=n;for(var l in r)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=r[l]}),r},w_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Tu=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/kf*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*kv((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:w_(a);return r=kf/r,l.config=function(c,u){return i(e,c,u)},l},Au=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:w_(n);return s.config=function(r){return i(e,r)},s};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ho(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ho("Elastic",Tu("in"),Tu("out"),Tu());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ho("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ho("Circ",function(i){return-($g(1-i*i)-1)});ho("Sine",function(i){return i===1?1:-Nv(i*Uv)+1});ho("Back",Au("in"),Au("out"),Au());ct.SteppedEase=ct.steps=Mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-Rt;return function(a){return((s*El(0,o,a)|0)+r)*n}}};ra.ease=ct["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return xd+=i+","+i+"Params,"});var E_=function(e,t){this.id=Fv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:n_,this.set=t?t.getSetter:Ed},dl=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),hl||pi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(ca(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(pu(this,n),!r._dp||r.parent||a_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&as(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),i_(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dp(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dp(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?aa(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?qc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(El(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),du(this),$v(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&as(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qc(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Wv);var s=yn;return yn=n,Md(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,pp(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Ai(this,n),ei(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ei(s)),this._dur||(this._zTime=-Rt),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-Rt)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this,r=s._prom;return new Promise(function(o){var a=Vt(n)?n:r_,l=function(){var u=s.then;s.then=null,r&&r(),Vt(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=u),o(a),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},e.kill=function(){ka(this)},i})();bi(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var qn=(function(i){Yg(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ei(n.sortChildren),Ft&&as(n.parent||Ft,Cs(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&l_(Cs(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return Za(0,arguments,this),this},t.from=function(s,r,o){return Za(1,arguments,this),this},t.fromTo=function(s,r,o,a){return Za(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,$a(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Kt(s,r,Ai(this,o),1),this},t.call=function(s,r,o){return as(this,Kt.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Kt(s,o,Ai(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,$a(o).immediateRender=ei(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},t.staggerFromTo=function(s,r,o,a,l,c,u,d){return a.startAt=o,$a(a).immediateRender=ei(a.immediateRender),this.staggerTo(s,r,a,l,c,u,d)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ut(s),d=this._zTime<0!=s<0&&(this._initted||!c),f,h,p,_,m,g,v,M,y,w,T,E;if(this!==Ft&&u>l&&s>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),f=u,y=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(f=Ut(u%m),u===l?(_=this._repeat,f=c):(w=Ut(u/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=aa(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),T&&_&1&&(f=c-f,E=1),_!==w&&!this._lock){var x=T&&w&1,S=x===(T&&_&1);if(_<w&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ut(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;S_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Jv(this,Ut(a),Ut(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&u&&c&&!r&&!w&&(gi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&s>=0)for(h=this._first;h;){if(p=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(s,r,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,o),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-Rt);break}}h=p}else{h=this._last;for(var P=s<0?s:f;h;){if(p=h._prev,(h._act||P<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(s,r,o);if(h.render(h._ts>0?(P-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(P-h._start)*h._ts,r,o||yn&&Md(h)),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=P?-Rt:Rt);break}}h=p}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Rt)._zTime=f>=a?1:-1,this._ts))return this._start=y,du(this),this.render(s,r,o);this._onUpdate&&!r&&gi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(gi(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(zs(r)||(r=Ai(this,r,s)),!(s instanceof dl)){if(On(s))return s.forEach(function(a){return o.add(a,r)}),this;if(mn(s))return this.addLabel(s,r);if(Vt(s))s=Kt.delayedCall(0,s);else return this}return this!==s?as(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ii);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return mn(s)?this.removeLabel(s):Vt(s)?this.killTweensOf(s):(s.parent===this&&hu(this,s),s===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(pi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=Ai(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Kt.delayedCall(0,r||ul,o);return a.data="isPause",this._hasPause=1,as(this,a,Ai(this,s))},t.removePause=function(s){var r=this._first;for(s=Ai(this,s);r;)r._start===s&&r.data==="isPause"&&dr(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=Oi(s),l=this._first,c=zs(r),u;l;)l instanceof Kt?Xv(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=Ai(o,s),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,p=Kt.to(o,bi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Rt,onStart:function(){if(o.pause(),!h){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&la(p,m,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,d||[])}},r));return f?p.render(0):p},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,bi({startAt:{time:Ai(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),mp(this,Ai(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),mp(this,Ai(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(s=Ut(s);a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return jr(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),jr(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=Ii,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,as(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;la(o,o===Ft&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(Ft._ts&&(i_(Ft,qc(s,Ft)),t_=pi.frame),pi.frame>=fp){fp+=xi.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&xi.autoSleep&&pi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pi.sleep()}}},e})(dl);bi(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var px=function(e,t,n,s,r,o,a){var l=new ni(this._pt,e,t,0,1,D_,null,r),c=0,u=0,d,f,h,p,_,m,g,v;for(l.b=n,l.e=s,n+="",s+="",(g=~s.indexOf("random("))&&(s=fl(s)),o&&(v=[n,s],o(v,e,t),n=v[0],s=v[1]),f=n.match(Su)||[];d=Su.exec(s);)p=d[0],_=s.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?qo(m,p)-m:parseFloat(p)-m,m:h&&h<4?Math.round:0},c=Su.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(jg.test(s)||g)&&(l.e=0),this._pt=l,l},bd=function(e,t,n,s,r,o,a,l,c,u){Vt(s)&&(s=s(r||0,e,o));var d=e[t],f=n!=="get"?n:Vt(d)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Vt(d)?c?xx:R_:wd,p;if(mn(s)&&(~s.indexOf("random(")&&(s=fl(s)),s.charAt(1)==="="&&(p=qo(f,s)+(Rn(f)||0),(p||p===0)&&(s=p))),!u||f!==s||qf)return!isNaN(f*s)&&s!==""?(p=new ni(this._pt,e,t,+f||0,s-(f||0),typeof d=="boolean"?Mx:P_,0,h),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!d&&!(t in e)&&_d(t,s),px.call(this,e,t,f,s,h,l||xi.stringFilter,c))},mx=function(e,t,n,s,r){if(Vt(e)&&(e=Ka(e,r,t,n,s)),!_s(e)||e.style&&e.nodeType||On(e)||Zg(e))return mn(e)?Ka(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=Ka(e[a],r,t,n,s);return o},T_=function(e,t,n,s,r,o){var a,l,c,u;if(hi[e]&&(a=new hi[e]).init(r,a.rawVars?t[e]:mx(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new ni(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Vo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,qf,Sd=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,d=s.yoyoEase,f=s.keyframes,h=s.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!dd,y=e.timeline,w,T,E,x,S,P,R,I,z,G,k,B,U;if(y&&(!f||!r)&&(r="none"),e._ease=Jr(r,ra.ease),e._yEase=d?b_(Jr(d===!0?r:d,ra.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!s.runBackwards,!y||f&&!s.stagger){if(I=m[0]?Kr(m[0]).harness:0,B=I&&s[I.prop],w=Xc(s,vd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&p?Ec:Hv),_._lazy=0),o){if(dr(e._startAt=Kt.set(m,bi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return gi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!h)&&e._startAt.revert(Ec),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),E=bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:g},w),B&&(E[I.prop]=B),dr(e._startAt=Kt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Ec):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ei(l)||l&&!p,T=0;T<m.length;T++){if(S=m[T],R=S._gsap||yd(m)[T]._gsap,e._ptLookup[T]=G={},Bf[R.id]&&cr.length&&Wc(),k=v===m?T:v.indexOf(S),I&&(z=new I).init(S,B||w,e,k,v)!==!1&&(e._pt=x=new ni(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){G[J]=x}),z.priority&&(P=1)),!I||B)for(E in w)hi[E]&&(z=T_(E,w,e,k,S,v))?z.priority&&(P=1):G[E]=x=bd.call(e,S,E,"get",w[E],k,v,0,s.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),M&&e._pt&&(tr=e,Ft.killTweensOf(S,G,e.globalTime(t)),U=!e.parent,tr=0),e._pt&&l&&(Bf[R.id]=1)}P&&L_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&y.render(Ii,!0,!0)},gx=function(e,t,n,s,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qf=1,e.vars[t]="+=0",Sd(e,a),qf=0,l?cl(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(s||s===0)&&!r?s:u.s+(s||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Wt(n)+Rn(d.e)),d.b&&(d.b=u.s+Rn(d.b))},_x=function(e,t){var n=e[0]?Kr(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=oa({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},vx=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if(On(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Ka=function(e,t,n,s,r){return Vt(e)?e.call(t,n,s,r):mn(e)&&~e.indexOf("random(")?fl(e):e},A_=xd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",C_={};ti(A_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return C_[i]=1});var Kt=(function(i){Yg(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:$a(s))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,v=s.parent||Ft,M=(On(n)||Zg(n)?zs(n[0]):"length"in s)?[n]:Oi(n),y,w,T,E,x,S,P,R;if(a._targets=M.length?yd(M):cl("GSAP target "+n+" not found. https://gsap.com",!xi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,p||f||Dl(c)||Dl(u)){if(s=a.vars,y=a.timeline=new qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),y.kill(),y.parent=y._dp=Cs(a),y._start=0,f||Dl(c)||Dl(u)){if(E=M.length,P=f&&h_(f),_s(f))for(x in f)~A_.indexOf(x)&&(R||(R={}),R[x]=f[x]);for(w=0;w<E;w++)T=Xc(s,C_),T.stagger=0,g&&(T.yoyoEase=g),R&&oa(T,R),S=M[w],T.duration=+Ka(c,Cs(a),w,S,M),T.delay=(+Ka(u,Cs(a),w,S,M)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),y.to(S,T,P?P(w,S,M):0),y._ease=ct.none;y.duration()?c=u=0:a.timeline=0}else if(p){$a(bi(y.vars.defaults,{ease:"none"})),y._ease=Jr(p.ease||s.ease||"none");var I=0,z,G,k;if(On(p))p.forEach(function(B){return y.to(M,B,">")}),y.duration();else{T={};for(x in p)x==="ease"||x==="easeEach"||vx(x,p[x],T,p.easeEach);for(x in T)for(z=T[x].sort(function(B,U){return B.t-U.t}),I=0,w=0;w<z.length;w++)G=z[w],k={ease:G.e,duration:(G.t-(w?z[w-1].t:0))/100*c},k[x]=G.v,y.to(M,k,I),I+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!dd&&(tr=Cs(a),Ft.killTweensOf(M),tr=0),as(v,Cs(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ut(v._time)&&ei(d)&&Zv(Cs(a))&&v.data!=="nested")&&(a._tTime=-Rt,a.render(Math.max(0,-u)||0)),m&&l_(Cs(a),m),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,d=s>l-Rt&&!u?l:s<Rt?0:s,f,h,p,_,m,g,v,M,y;if(!c)jv(this,s,r,o);else if(d!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,r,o);if(f=Ut(d%_),d===l?(p=this._repeat,f=c):(m=Ut(d/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,f=c-f),m=aa(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&(M&&this._yEase&&S_(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(c_(this,u?s:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&d&&!r&&!m&&(gi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;M&&M.render(s<0?s:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Vf(this,s,r,o),gi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&gi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Vf(this,s,!0,!0),(s||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&dr(this,1),!r&&!(u&&!a)&&(d||a||g)&&(gi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a,l){hl||pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sd(this,c),u=this._ease(c/this._dur),gx(this,s,r,o,a,u,c,l)?this.resetTo(s,r,o,a,1):(pu(this,0),this.parent||o_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,tr&&tr.vars.overwrite!==!0)._first||ka(this),this.parent&&o!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Oi(s):a,c=this._ptLookup,u=this._pt,d,f,h,p,_,m,g;if((!r||r==="all")&&Yv(a,l))return r==="all"&&(this._pt=0),ka(this);for(d=this._op=this._op||[],r!=="all"&&(mn(r)&&(_={},ti(r,function(v){return _[v]=1}),r=_),r=_x(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,h={}):(h=d[g]=d[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hu(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&ka(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return Za(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return Za(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return Ft.killTweensOf(s,r,o)},e})(dl);bi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(i){Kt[i]=function(){var e=new qn,t=Hf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var wd=function(e,t,n){return e[t]=n},R_=function(e,t,n){return e[t](n)},xx=function(e,t,n,s){return e[t](s.fp,n)},yx=function(e,t,n){return e.setAttribute(t,n)},Ed=function(e,t){return Vt(e[t])?R_:pd(e[t])&&e.setAttribute?yx:wd},P_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},D_=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bx=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},Sx=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?hu(this,t,"_pt"):t.dep||(n=1),t=s;return!n},wx=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},L_=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},ni=(function(){function i(t,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||P_,this.d=l||this,this.set=c||wd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=wx,this.m=n,this.mt=r,this.tween=s},i})();ti(xd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return vd[i]=1});Mi.TweenMax=Mi.TweenLite=Kt;Mi.TimelineLite=Mi.TimelineMax=qn;Ft=new qn({sortChildren:!1,defaults:ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xi.stringFilter=M_;var Qr=[],Ac={},Ex=[],_p=0,Tx=0,Cu=function(e){return(Ac[e]||Ex).map(function(t){return t()})},Yf=function(){var e=Date.now(),t=[];e-_p>2&&(Cu("matchMediaInit"),Qr.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=ss.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Cu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),_p=e,Cu("matchMedia"))},I_=(function(){function i(t,n){this.selector=n&&Wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Tx++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){Vt(n)&&(r=s,s=n,n=Vt);var o=this,a=function(){var c=Ot,u=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Wf(r)),Ot=o,d=s.apply(o,arguments),Vt(d)&&o._r.push(d),Ot=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var s=Ot;Ot=null,n(this),Ot=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Kt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Ax=(function(){function i(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=i.prototype;return e.add=function(n,s,r){_s(n)||(n={matches:n});var o=new I_(0,r||this.scope),a=o.conditions={},l,c,u;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=ss.matchMedia(n[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Yf):l.addEventListener("change",Yf)));return u&&s(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),Yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return v_(s)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,s){mn(e)&&(e=Oi(e)[0]);var r=Kr(e||{}).get,o=n?r_:s_;return n==="native"&&(n=""),e&&(t?o((hi[t]&&hi[t].get||r)(e,t,n,s)):function(a,l,c){return o((hi[a]&&hi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Oi(e),e.length>1){var s=e.map(function(u){return ri.quickSetter(u,t,n)}),r=s.length;return function(u){for(var d=r;d--;)s[d](u)}}e=e[0]||{};var o=hi[t],a=Kr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Vo._pt=0,d.init(e,n?u+n:u,Vo,0,[e]),d.render(1,d),Vo._pt&&Td(1,Vo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var s,r=ri.to(e,bi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,ra.ease)),hp(ra,e||{})},config:function(e){return hp(xi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!hi[a]&&!Mi[a]&&cl(t+" effect requires "+a+" plugin.")}),wu[t]=function(a,l,c){return n(Oi(a),bi(l||{},r),c)},o&&(qn.prototype[t]=function(a,l,c){return this.add(wu[t](a,_s(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):ct},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),s,r;for(n.smoothChildTiming=ei(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,s=Ft._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Kt&&s.vars.onComplete===s._targets[0]))&&as(n,s,s._start-s._delay),s=r;return as(Ft,n,0),n},context:function(e,t){return e?new I_(e,t):Ot},matchMedia:function(e){return new Ax(e)},matchMediaRefresh:function(){return Qr.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Yf()},addEventListener:function(e,t){var n=Ac[e]||(Ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ac[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:rx,wrapYoyo:ox,distribute:h_,random:p_,snap:d_,normalize:sx,getUnit:Rn,clamp:ex,splitColor:x_,toArray:Oi,selector:Wf,mapRange:g_,pipe:nx,unitize:ix,interpolate:ax,shuffle:f_},install:Qg,effects:wu,ticker:pi,updateRoot:qn.updateRoot,plugins:hi,globalTimeline:Ft,core:{PropTween:ni,globals:e_,Tween:Kt,Timeline:qn,Animation:dl,getCache:Kr,_removeLinkedListItem:hu,reverting:function(){return yn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return dd=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Yc[i]=Kt[i]});pi.add(qn.updateRoot);Vo=Yc.to({},{duration:0});var Cx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Rx=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=Cx(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},Ru=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(mn(r)&&(l={},ti(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Rx(a,r)}}}},ri=Yc.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ru("roundProps",Xf),Ru("modifiers"),Ru("snap",d_))||Yc;Kt.version=qn.version=ri.version="3.14.2";Jg=1;md()&&ca();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;var vp,nr,Yo,Ad,Gr,xp,Cd,Px=function(){return typeof window<"u"},Bs={},Ur=180/Math.PI,$o=Math.PI/180,vo=Math.atan2,yp=1e8,Rd=/([A-Z])/g,Dx=/(left|right|width|margin|padding|x)/i,Lx=/[\s,\(]\S/,cs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ix=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ox=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ux=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},O_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},U_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nx=function(e,t,n){return e.style[t]=n},kx=function(e,t,n){return e.style.setProperty(t,n)},zx=function(e,t,n){return e._gsap[t]=n},Bx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Vx=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Gx=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Nt="transform",ii=Nt+"Origin",Hx=function i(e,t){var n=this,s=this.target,r=s.style,o=s._gsap;if(e in Bs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=cs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rs(s,a)}):this.tfm[e]=o.x?o[e]:Rs(s,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return cs.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Nt}(r||t)&&this.props.push(e,t,r[e])},F_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Wx=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cd(),(!r||!r.isStart)&&!n[Nt]&&(F_(n),s.zOrigin&&n[ii]&&(n[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},N_=function(e,t){var n={target:e,props:[],revert:Wx,save:Hx};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},k_,Zf=function(e,t){var n=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return n&&n.style?n:nr.createElement(e)},_i=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Rd,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,ua(t)||t,1)||""},Mp="O,Moz,ms,Ms,Webkit".split(","),ua=function(e,t,n){var s=t||Gr,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Mp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Mp[o]:"")+e},Kf=function(){Px()&&window.document&&(vp=window,nr=vp.document,Yo=nr.documentElement,Gr=Zf("div")||{style:{}},Zf("div"),Nt=ua(Nt),ii=Nt+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",k_=!!ua("perspective"),Cd=ri.core.reverting,Ad=1)},bp=function(e){var t=e.ownerSVGElement,n=Zf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),r;s.style.display="block",n.appendChild(s),Yo.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),Yo.removeChild(n),r},Sp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},z_=function(e){var t,n;try{t=e.getBBox()}catch{t=bp(e),n=1}return t&&(t.width||t.height)||n||(t=bp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sp(e,["x","cx","x1"])||0,y:+Sp(e,["y","cy","y1"])||0,width:0,height:0}:t},B_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&z_(e))},pr=function(e,t){if(t){var n=e.style,s;t in Bs&&t!==ii&&(t=Nt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(t)}},ir=function(e,t,n,s,r,o){var a=new ni(e._pt,t,n,0,1,o?U_:O_);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},wp={deg:1,rad:1,turn:1},Xx={grid:1,flex:1},mr=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Gr.style,l=Dx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=s==="px",h=s==="%",p,_,m,g;if(s===o||!r||wp[s]||wp[o])return r;if(o!=="px"&&!f&&(r=i(e,t,n,"px")),g=e.getCTM&&B_(e),(h||o==="%")&&(Bs[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Wt(h?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:s),_=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===pi.time&&!m.uncache)return Wt(r/m.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+s,p=e[u],v?e.style[t]=v:pr(e,t)}else(h||o==="%")&&!Xx[_i(_,"display")]&&(a.position=_i(e,"position")),_===e&&(a.position="static"),_.appendChild(Gr),p=Gr[u],_.removeChild(Gr),a.position="absolute";return l&&h&&(m=Kr(_),m.time=pi.time,m.width=_[u]),Wt(f?p*r/d:p&&r?d/p*r:0)},Rs=function(e,t,n,s){var r;return Ad||Kf(),t in cs&&t!=="transform"&&(t=cs[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bs[t]&&t!=="transform"?(r=ml(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Zc(_i(e,ii))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=$c[t]&&$c[t](e,t,n)||_i(e,t)||n_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?mr(e,t,r,n)+n:r},qx=function(e,t,n,s){if(!n||n==="none"){var r=ua(t,e,1),o=r&&_i(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,D_),l=0,c=0,u,d,f,h,p,_,m,g,v,M,y,w;if(a.b=n,a.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=_i(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=e.style[t],e.style[t]=s,s=_i(e,t)||s,_?e.style[t]=_:pr(e,t)),u=[n,s],M_(u),n=u[0],s=u[1],f=n.match(Bo)||[],w=s.match(Bo)||[],w.length){for(;d=Bo.exec(s);)m=d[0],v=s.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(h=parseFloat(_)||0,y=_.substr((h+"").length),m.charAt(1)==="="&&(m=qo(h,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=Bo.lastIndex-M.length,M||(M=M||xi.units[t]||y,l===s.length&&(s+=M,a.e+=M)),y!==M&&(h=mr(e,t,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:h,c:g-h,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?U_:O_;return jg.test(s)&&(a.e=0),this._pt=a,a},Ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yx=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Ep[n]||n,t[1]=Ep[s]||s,t.join(" ")},$x=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Bs[a]&&(l=1,a=a==="transformOrigin"?ii:Nt),pr(n,a);l&&(pr(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ml(n,1),o.uncache=1,F_(s)))}},$c={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,$x);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},pl=[1,0,0,1,0,0],V_={},G_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tp=function(e){var t=_i(e,Nt);return G_(t)?pl:t.substr(7).match(Kg).map(Wt)},Pd=function(e,t){var n=e._gsap||Kr(e),s=e.style,r=Tp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?pl:r):(r===pl&&!e.offsetParent&&e!==Yo&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Yo.appendChild(e)),r=Tp(e),l?s.display=l:pr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Yo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jf=function(e,t,n,s,r,o){var a=e._gsap,l=r||Pd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,w=parseFloat(M[1])||0,T,E,x,S;n?l!==pl&&(E=h*m-p*_)&&(x=y*(m/E)+w*(-_/E)+(_*v-m*g)/E,S=y*(-p/E)+w*(h/E)-(h*v-p*g)/E,y=x,w=S):(T=z_(e),y=T.x+(~M[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(M[1]||M[0]).indexOf("%")?w/100*T.height:w)),s||s!==!1&&a.smooth?(g=y-c,v=w-u,a.xOffset=d+(g*h+v*_)-g,a.yOffset=f+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[ii]="0px 0px",o&&(ir(o,a,"xOrigin",c,y),ir(o,a,"yOrigin",u,w),ir(o,a,"xOffset",d,a.xOffset),ir(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},ml=function(e,t){var n=e._gsap||new E_(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=_i(e,ii)||"0",u,d,f,h,p,_,m,g,v,M,y,w,T,E,x,S,P,R,I,z,G,k,B,U,J,Q,D,ae,ce,Ue,Ve,$e;return u=d=f=_=m=g=v=M=y=0,h=p=1,n.svg=!!(e.getCTM&&B_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),s.scale=s.rotate=s.translate="none"),E=Pd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),jf(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,T=n.yOrigin||0,E!==pl&&(R=E[0],I=E[1],z=E[2],G=E[3],u=k=E[4],d=B=E[5],E.length===6?(h=Math.sqrt(R*R+I*I),p=Math.sqrt(G*G+z*z),_=R||I?vo(I,R)*Ur:0,v=z||G?vo(z,G)*Ur+_:0,v&&(p*=Math.abs(Math.cos(v*$o))),n.svg&&(u-=w-(w*R+T*z),d-=T-(w*I+T*G))):($e=E[6],Ue=E[7],D=E[8],ae=E[9],ce=E[10],Ve=E[11],u=E[12],d=E[13],f=E[14],x=vo($e,ce),m=x*Ur,x&&(S=Math.cos(-x),P=Math.sin(-x),U=k*S+D*P,J=B*S+ae*P,Q=$e*S+ce*P,D=k*-P+D*S,ae=B*-P+ae*S,ce=$e*-P+ce*S,Ve=Ue*-P+Ve*S,k=U,B=J,$e=Q),x=vo(-z,ce),g=x*Ur,x&&(S=Math.cos(-x),P=Math.sin(-x),U=R*S-D*P,J=I*S-ae*P,Q=z*S-ce*P,Ve=G*P+Ve*S,R=U,I=J,z=Q),x=vo(I,R),_=x*Ur,x&&(S=Math.cos(x),P=Math.sin(x),U=R*S+I*P,J=k*S+B*P,I=I*S-R*P,B=B*S-k*P,R=U,k=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),h=Wt(Math.sqrt(R*R+I*I+z*z)),p=Wt(Math.sqrt(B*B+$e*$e)),x=vo(k,B),v=Math.abs(x)>2e-4?x*Ur:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!G_(_i(e,Nt)),U&&e.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Wt(h),n.scaleY=Wt(p),n.rotation=Wt(_)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(g)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(s[ii]=Zc(c)),n.xOffset=n.yOffset=0,n.force3D=xi.force3D,n.renderTransform=n.svg?Kx:k_?H_:Zx,n.uncache=0,n},Zc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pu=function(e,t,n){var s=Rn(t);return Wt(parseFloat(t)+parseFloat(mr(e,"x",n+"px",s)))+s},Zx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,H_(e,t)},br="0deg",Ta="0px",Sr=") ",H_=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,M=n.zOrigin,y="",w=g==="auto"&&e&&e!==1||g===!0;if(M&&(d!==br||u!==br)){var T=parseFloat(u)*$o,E=Math.sin(T),x=Math.cos(T),S;T=parseFloat(d)*$o,S=Math.cos(T),o=Pu(v,o,E*S*-M),a=Pu(v,a,-Math.sin(T)*-M),l=Pu(v,l,x*S*-M+M)}m!==Ta&&(y+="perspective("+m+Sr),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(w||o!==Ta||a!==Ta||l!==Ta)&&(y+=l!==Ta||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==br&&(y+="rotate("+c+Sr),u!==br&&(y+="rotateY("+u+Sr),d!==br&&(y+="rotateX("+d+Sr),(f!==br||h!==br)&&(y+="skew("+f+", "+h+Sr),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Sr),v.style[Nt]=y||"translate(0, 0)"},Kx=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,M=parseFloat(o),y=parseFloat(a),w,T,E,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$o,c*=$o,w=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=$o,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=Wt(w),T=Wt(T),E=Wt(E),x=Wt(x)):(w=d,x=f,T=E=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=mr(h,"x",o,"px"),y=mr(h,"y",a,"px")),(p||_||m||g)&&(M=Wt(M+p-(p*w+_*E)+m),y=Wt(y+_-(p*T+_*x)+g)),(s||r)&&(S=h.getBBox(),M=Wt(M+s/100*S.width),y=Wt(y+r/100*S.height)),S="matrix("+w+","+T+","+E+","+x+","+M+","+y+")",h.setAttribute("transform",S),v&&(h.style[Nt]=S)},jx=function(e,t,n,s,r){var o=360,a=mn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ur:1),c=l-s,u=s+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*yp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*yp)%o-~~(c/o)*o)),e._pt=f=new ni(e._pt,t,n,s,c,Ix),f.e=u,f.u="deg",e._props.push(n),f},Ap=function(e,t){for(var n in t)e[n]=t[n];return e},Jx=function(e,t,n){var s=Ap({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,h,p;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=ml(n,1),pr(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=ml(n,1),o[Nt]=c);for(l in Bs)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(h=Rn(c),p=Rn(u),d=h!==p?mr(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new ni(e._pt,a,l,d,f-d,$f),e._pt.u=p||0,e._props.push(l));Ap(a,s)};ti("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});$c[e>1?"border"+i:i]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(p){return Rs(a,p,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(p,_){return h[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var W_={name:"css",register:Kf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,h,p,_,m,g,v,M,y,w,T,E,x,S;Ad||Kf(),this.styles=this.styles||N_(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(hi[_]&&T_(_,t,n,s,e,r)))){if(h=typeof u,p=$c[_],h==="function"&&(u=u.call(n,s,e,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=fl(u)),p)p(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ur.lastIndex=0,ur.test(c)||(m=Rn(c),g=Rn(u),g?m!==g&&(c=mr(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,s,r,0,0,_),o.push(_),x.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,s,e,r):l[_],mn(c)&&~c.indexOf("random(")&&(c=fl(c)),Rn(c+"")||c==="auto"||(c+=xi.units[_]||Rn(Rs(e,_))||""),(c+"").charAt(1)==="="&&(c=Rs(e,_))):c=Rs(e,_),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in cs&&(_==="autoAlpha"&&(f===1&&Rs(e,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,a.visibility),ir(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=cs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Bs,M){if(this.styles.save(_),S=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=_i(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=u,u=_i(e,"perspective"),P?e.style.perspective=P:pr(e,"perspective")}d=parseFloat(u)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||ml(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new ni(this._pt,a,Nt,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new ni(this._pt,w,"scaleY",w.scaleY,(v?qo(w.scaleY,v+d):d)-w.scaleY||0,$f),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(ii,0,a[ii]),u=Yx(u),w.svg?jf(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&ir(this,w,"zOrigin",w.zOrigin,g),ir(this,a,_,Zc(c),Zc(u)));continue}else if(_==="svgOrigin"){jf(e,u,1,T,0,this);continue}else if(_ in V_){jx(this,w,_,f,v?qo(f,v+u):u);continue}else if(_==="smoothOrigin"){ir(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Jx(this,u,e);continue}}else _ in a||(_=ua(_)||_);if(M||(d||d===0)&&(f||f===0)&&!Lx.test(u)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),g=Rn(u)||(_ in xi.units?xi.units[_]:m),m!==g&&(f=mr(e,_,c,g)),this._pt=new ni(this._pt,M?w:a,_,f,(v?qo(f,v+d):d)-f,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Fx:$f),this._pt.u=g||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=Ux):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ox);else if(_ in a)qx.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,s,r);else if(_!=="parseTransform"){_d(_,u);continue}M||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}E&&L_(this)},render:function(e,t){if(t.tween._time||!Cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rs,aliases:cs,getSetter:function(e,t,n){var s=cs[t];return s&&s.indexOf(",")<0&&(t=s),t in Bs&&t!==ii&&(e._gsap.x||Rs(e,"x"))?n&&xp===n?t==="scale"?Bx:zx:(xp=n||{})&&(t==="scale"?Vx:Gx):e.style&&!pd(e.style[t])?Nx:~t.indexOf("-")?kx:Ed(e,t)},core:{_removeProperty:pr,_getMatrix:Pd}};ri.utils.checkPrefix=ua;ri.core.getStyleSaver=N_;(function(i,e,t,n){var s=ti(i+","+e+","+t,function(r){Bs[r]=1});ti(e,function(r){xi.units[r]="deg",V_[r]=1}),cs[s[13]]=i+","+e,ti(n,function(r){var o=r.split(":");cs[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){xi.units[i]="px"});ri.registerPlugin(W_);var Et=ri.registerPlugin(W_)||ri;Et.core.Tween;function Qx(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function ey(i,e,t){return e&&Qx(i.prototype,e),i}var vn,Cc,mi,sr,rr,Zo,X_,Fr,ja,q_,Ls,Xi,Y_,$_=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Z_=1,Go=[],rt=[],ps=[],Ja=Date.now,Jf=function(e,t){return t},ty=function(){var e=ja.core,t=e.bridge||{},n=e._scrollers,s=e._proxies;n.push.apply(n,rt),s.push.apply(s,ps),rt=n,ps=s,Jf=function(o,a){return t[o](a)}},fr=function(e,t){return~ps.indexOf(e)&&ps[ps.indexOf(e)+1][t]},Qa=function(e){return!!~q_.indexOf(e)},Bn=function(e,t,n,s,r){return e.addEventListener(t,n,{passive:s!==!1,capture:!!r})},zn=function(e,t,n,s){return e.removeEventListener(t,n,!!s)},Ll="scrollLeft",Il="scrollTop",Qf=function(){return Ls&&Ls.isPressed||rt.cache++},Kc=function(e,t){var n=function s(r){if(r||r===0){Z_&&(mi.history.scrollRestoration="manual");var o=Ls&&Ls.isPressed;r=s.v=Math.round(r)||(Ls&&Ls.iOS?1:0),e(r),s.cacheID=rt.cache,o&&Jf("ss",r)}else(t||rt.cache!==s.cacheID||Jf("ref"))&&(s.cacheID=rt.cache,s.v=e());return s.v+s.offset};return n.offset=0,e&&n},Yn={s:Ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kc(function(i){return arguments.length?mi.scrollTo(i,sn.sc()):mi.pageXOffset||sr[Ll]||rr[Ll]||Zo[Ll]||0})},sn={s:Il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:Kc(function(i){return arguments.length?mi.scrollTo(Yn.sc(),i):mi.pageYOffset||sr[Il]||rr[Il]||Zo[Il]||0})},Qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ny=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},gr=function(e,t){var n=t.s,s=t.sc;Qa(e)&&(e=sr.scrollingElement||rr);var r=rt.indexOf(e),o=s===sn.sc?1:2;!~r&&(r=rt.push(e)-1),rt[r+o]||Bn(e,"scroll",Qf);var a=rt[r+o],l=a||(rt[r+o]=Kc(fr(e,n),!0)||(Qa(e)?s:Kc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},eh=function(e,t,n){var s=e,r=e,o=Ja(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=Ja();_||m-o>l?(r=s,s=p,a=o,o=m):n?s+=p:s=r+(p-r)/(m-a)*(o-a)},d=function(){r=s=n?0:s,a=o=0},f=function(p){var _=a,m=r,g=Ja();return(p||p===0)&&p!==s&&u(p),o===a||g-a>c?0:(s+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Aa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},K_=function(){ja=vn.core.globals().ScrollTrigger,ja&&ja.core&&ty()},j_=function(e){return vn=e||$_(),!Cc&&vn&&typeof document<"u"&&document.body&&(mi=window,sr=document,rr=sr.documentElement,Zo=sr.body,q_=[mi,sr,rr,Zo],vn.utils.clamp,Y_=vn.core.context||function(){},Fr="onpointerenter"in Zo?"pointer":"mouse",X_=qt.isTouch=mi.matchMedia&&mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=qt.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Z_=0},500),K_(),Cc=1),Cc};Yn.op=sn;rt.cache=0;var qt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Cc||j_(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ja||K_();var s=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,w=n.onRight,T=n.onLeft,E=n.onUp,x=n.onDown,S=n.onChangeX,P=n.onChangeY,R=n.onChange,I=n.onToggleX,z=n.onToggleY,G=n.onHover,k=n.onHoverEnd,B=n.onMove,U=n.ignoreCheck,J=n.isNormalizer,Q=n.onGestureStart,D=n.onGestureEnd,ae=n.onWheel,ce=n.onEnable,Ue=n.onDisable,Ve=n.onClick,$e=n.scrollSpeed,$=n.capture,ee=n.allowClicks,ne=n.lockAxis,Pe=n.onLockAxis;this.target=a=Qn(a)||rr,this.vars=n,h&&(h=vn.utils.toArray(h)),s=s||1e-9,r=r||0,p=p||1,$e=$e||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mi.getComputedStyle(Zo).lineHeight)||22);var De,Re,ut,we,Ge,Ke,Be,X=this,O=0,_t=0,tt=n.passive||!u&&n.passive!==!1,He=gr(a,Yn),ye=gr(a,sn),C=He(),b=ye(),F=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xi[0]==="pointerdown",K=Qa(a),j=a.ownerDocument||sr,Y=[0,0,0],ve=[0,0,0],oe=0,Le=function(){return oe=Ja()},Me=function(Ie,Je){return(X.event=Ie)&&h&&ny(Ie.target,h)||Je&&F&&Ie.pointerType!=="touch"||U&&U(Ie,Je)},ie=function(){X._vx.reset(),X._vy.reset(),Re.pause(),d&&d(X)},re=function(){var Ie=X.deltaX=Cp(Y),Je=X.deltaY=Cp(ve),ge=Math.abs(Ie)>=s,Xe=Math.abs(Je)>=s;R&&(ge||Xe)&&R(X,Ie,Je,Y,ve),ge&&(w&&X.deltaX>0&&w(X),T&&X.deltaX<0&&T(X),S&&S(X),I&&X.deltaX<0!=O<0&&I(X),O=X.deltaX,Y[0]=Y[1]=Y[2]=0),Xe&&(x&&X.deltaY>0&&x(X),E&&X.deltaY<0&&E(X),P&&P(X),z&&X.deltaY<0!=_t<0&&z(X),_t=X.deltaY,ve[0]=ve[1]=ve[2]=0),(we||ut)&&(B&&B(X),ut&&(m&&ut===1&&m(X),v&&v(X),ut=0),we=!1),Ke&&!(Ke=!1)&&Pe&&Pe(X),Ge&&(ae(X),Ge=!1),De=0},be=function(Ie,Je,ge){Y[ge]+=Ie,ve[ge]+=Je,X._vx.update(Ie),X._vy.update(Je),c?De||(De=requestAnimationFrame(re)):re()},Ee=function(Ie,Je){ne&&!Be&&(X.axis=Be=Math.abs(Ie)>Math.abs(Je)?"x":"y",Ke=!0),Be!=="y"&&(Y[2]+=Ie,X._vx.update(Ie,!0)),Be!=="x"&&(ve[2]+=Je,X._vy.update(Je,!0)),c?De||(De=requestAnimationFrame(re)):re()},de=function(Ie){if(!Me(Ie,1)){Ie=Aa(Ie,u);var Je=Ie.clientX,ge=Ie.clientY,Xe=Je-X.x,ze=ge-X.y,Ye=X.isDragging;X.x=Je,X.y=ge,(Ye||(Xe||ze)&&(Math.abs(X.startX-Je)>=r||Math.abs(X.startY-ge)>=r))&&(ut||(ut=Ye?2:1),Ye||(X.isDragging=!0),Ee(Xe,ze))}},We=X.onPress=function(xe){Me(xe,1)||xe&&xe.button||(X.axis=Be=null,Re.pause(),X.isPressed=!0,xe=Aa(xe),O=_t=0,X.startX=X.x=xe.clientX,X.startY=X.y=xe.clientY,X._vx.reset(),X._vy.reset(),Bn(J?a:j,Xi[1],de,tt,!0),X.deltaX=X.deltaY=0,M&&M(X))},L=X.onRelease=function(xe){if(!Me(xe,1)){zn(J?a:j,Xi[1],de,!0);var Ie=!isNaN(X.y-X.startY),Je=X.isDragging,ge=Je&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Xe=Aa(xe);!ge&&Ie&&(X._vx.reset(),X._vy.reset(),u&&ee&&vn.delayedCall(.08,function(){if(Ja()-oe>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(j.createEvent){var ze=j.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,mi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(ze)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&Je&&!J&&Re.restart(!0),ut&&re(),g&&Je&&g(X),y&&y(X,ge)}},le=function(Ie){return Ie.touches&&Ie.touches.length>1&&(X.isGesturing=!0)&&Q(Ie,X.isDragging)},se=function(){return(X.isGesturing=!1)||D(X)},pe=function(Ie){if(!Me(Ie)){var Je=He(),ge=ye();be((Je-C)*$e,(ge-b)*$e,1),C=Je,b=ge,d&&Re.restart(!0)}},te=function(Ie){if(!Me(Ie)){Ie=Aa(Ie,u),ae&&(Ge=!0);var Je=(Ie.deltaMode===1?l:Ie.deltaMode===2?mi.innerHeight:1)*p;be(Ie.deltaX*Je,Ie.deltaY*Je,0),d&&!J&&Re.restart(!0)}},Z=function(Ie){if(!Me(Ie)){var Je=Ie.clientX,ge=Ie.clientY,Xe=Je-X.x,ze=ge-X.y;X.x=Je,X.y=ge,we=!0,d&&Re.restart(!0),(Xe||ze)&&Ee(Xe,ze)}},Se=function(Ie){X.event=Ie,G(X)},ke=function(Ie){X.event=Ie,k(X)},dt=function(Ie){return Me(Ie)||Aa(Ie,u)&&Ve(X)};Re=X._dc=vn.delayedCall(f||.25,ie).pause(),X.deltaX=X.deltaY=0,X._vx=eh(0,50,!0),X._vy=eh(0,50,!0),X.scrollX=He,X.scrollY=ye,X.isDragging=X.isGesturing=X.isPressed=!1,Y_(this),X.enable=function(xe){return X.isEnabled||(Bn(K?j:a,"scroll",Qf),o.indexOf("scroll")>=0&&Bn(K?j:a,"scroll",pe,tt,$),o.indexOf("wheel")>=0&&Bn(a,"wheel",te,tt,$),(o.indexOf("touch")>=0&&X_||o.indexOf("pointer")>=0)&&(Bn(a,Xi[0],We,tt,$),Bn(j,Xi[2],L),Bn(j,Xi[3],L),ee&&Bn(a,"click",Le,!0,!0),Ve&&Bn(a,"click",dt),Q&&Bn(j,"gesturestart",le),D&&Bn(j,"gestureend",se),G&&Bn(a,Fr+"enter",Se),k&&Bn(a,Fr+"leave",ke),B&&Bn(a,Fr+"move",Z)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=we=ut=!1,X._vx.reset(),X._vy.reset(),C=He(),b=ye(),xe&&xe.type&&We(xe),ce&&ce(X)),X},X.disable=function(){X.isEnabled&&(Go.filter(function(xe){return xe!==X&&Qa(xe.target)}).length||zn(K?j:a,"scroll",Qf),X.isPressed&&(X._vx.reset(),X._vy.reset(),zn(J?a:j,Xi[1],de,!0)),zn(K?j:a,"scroll",pe,$),zn(a,"wheel",te,$),zn(a,Xi[0],We,$),zn(j,Xi[2],L),zn(j,Xi[3],L),zn(a,"click",Le,!0),zn(a,"click",dt),zn(j,"gesturestart",le),zn(j,"gestureend",se),zn(a,Fr+"enter",Se),zn(a,Fr+"leave",ke),zn(a,Fr+"move",Z),X.isEnabled=X.isPressed=X.isDragging=!1,Ue&&Ue(X))},X.kill=X.revert=function(){X.disable();var xe=Go.indexOf(X);xe>=0&&Go.splice(xe,1),Ls===X&&(Ls=0)},Go.push(X),J&&Qa(a)&&(Ls=X),X.enable(_)},ey(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();qt.version="3.14.2";qt.create=function(i){return new qt(i)};qt.register=j_;qt.getAll=function(){return Go.slice()};qt.getById=function(i){return Go.filter(function(e){return e.vars.id===i})[0]};$_()&&vn.registerPlugin(qt);var Ce,ko,st,Dt,di,xt,Dd,jc,gl,el,Ba,Ol,Tn,mu,th,Hn,Rp,Pp,zo,J_,Du,Q_,Gn,nh,e0,t0,Js,ih,Ld,Ko,Id,tl,sh,Lu,Ul=1,An=Date.now,Iu=An(),Fi=0,Va=0,Dp=function(e,t,n){var s=fi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=s,s?e.substr(6,e.length-7):e},Lp=function(e,t){return t&&(!fi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iy=function i(){return Va&&requestAnimationFrame(i)},Ip=function(){return mu=1},Op=function(){return mu=0},rs=function(e){return e},Ga=function(e){return Math.round(e*1e5)/1e5||0},n0=function(){return typeof window<"u"},i0=function(){return Ce||n0()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},so=function(e){return!!~Dd.indexOf(e)},s0=function(e){return(e==="Height"?Id:st["inner"+e])||di["client"+e]||xt["client"+e]},r0=function(e){return fr(e,"getBoundingClientRect")||(so(e)?function(){return Ic.width=st.innerWidth,Ic.height=Id,Ic}:function(){return Ps(e)})},sy=function(e,t,n){var s=n.d,r=n.d2,o=n.a;return(o=fr(e,"getBoundingClientRect"))?function(){return o()[s]}:function(){return(t?s0(r):e["client"+r])||0}},ry=function(e,t){return!t||~ps.indexOf(e)?r0(e):function(){return Ic}},us=function(e,t){var n=t.s,s=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+s)&&(o=fr(e,n))?o()-r0(e)()[r]:so(e)?(di[n]||xt[n])-s0(s):e[n]-e["offset"+s])},Fl=function(e,t){for(var n=0;n<zo.length;n+=3)(!t||~t.indexOf(zo[n+1]))&&e(zo[n],zo[n+1],zo[n+2])},fi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Ha=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},Ca=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ou=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},xo=Math.abs,o0="left",a0="top",Od="right",Ud="bottom",eo="width",to="height",nl="Right",il="Left",sl="Top",rl="Bottom",Zt="padding",Ri="margin",fa="Width",Fd="Height",nn="px",Pi=function(e){return st.getComputedStyle(e)},oy=function(e){var t=Pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Up=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ps=function(e,t){var n=t&&Pi(e)[th]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=e.getBoundingClientRect();return n&&n.progress(0).kill(),s},Jc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},l0=function(e){var t=[],n=e.labels,s=e.duration(),r;for(r in n)t.push(n[r]/s);return t},ay=function(e){return function(t){return Ce.utils.snap(l0(e),t)}},Nd=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(s,r){return s-r});return n?function(s,r,o){o===void 0&&(o=.001);var a;if(!r)return t(s);if(r>0){for(s-=o,a=0;a<n.length;a++)if(n[a]>=s)return n[a];return n[a-1]}else for(a=n.length,s+=o;a--;)if(n[a]<=s)return n[a];return n[0]}:function(s,r,o){o===void 0&&(o=.001);var a=t(s);return!r||Math.abs(a-s)<o||a-s<0==r<0?a:t(r<0?s-e:s+e)}},ly=function(e){return function(t,n){return Nd(l0(e))(t,n.direction)}},Nl=function(e,t,n,s){return n.split(",").forEach(function(r){return e(t,r,s)})},dn=function(e,t,n,s,r){return e.addEventListener(t,n,{passive:!s,capture:!!r})},hn=function(e,t,n,s){return e.removeEventListener(t,n,!!s)},kl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Fp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zl={toggleActions:"play",anticipatePin:0},Qc={top:0,left:0,center:.5,bottom:1,right:1},Rc=function(e,t){if(fi(e)){var n=e.indexOf("="),s=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(s*=t/100),e=e.substr(0,n-1)),e=s+(e in Qc?Qc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bl=function(e,t,n,s,r,o,a,l){var c=r.startColor,u=r.endColor,d=r.fontSize,f=r.indent,h=r.fontWeight,p=Dt.createElement("div"),_=so(n)||fr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?xt:n,v=e.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(s===sn?Od:Ud)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+s.op.d2],Pc(p,0,s,v),p},Pc=function(e,t,n,s){var r={display:"block"},o=n[s?"os2":"p2"],a=n[s?"p2":"os2"];e._isFlipped=s,r[n.a+"Percent"]=s?-100:0,r[n.a]=s?"1px":0,r["border"+o+fa]=1,r["border"+a+fa]=0,r[n.p]=t+"px",Ce.set(e,r)},it=[],rh={},_l,Np=function(){return An()-Fi>34&&(_l||(_l=requestAnimationFrame(Us)))},yo=function(){(!Gn||!Gn.isPressed||Gn.startX>xt.clientWidth)&&(rt.cache++,Gn?_l||(_l=requestAnimationFrame(Us)):Us(),Fi||oo("scrollStart"),Fi=An())},Uu=function(){t0=st.innerWidth,e0=st.innerHeight},Wa=function(e){rt.cache++,(e===!0||!Tn&&!Q_&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!nh||t0!==st.innerWidth||Math.abs(st.innerHeight-e0)>st.innerHeight*.25))&&jc.restart(!0)},ro={},cy=[],c0=function i(){return hn(at,"scrollEnd",i)||Hr(!0)},oo=function(e){return ro[e]&&ro[e].map(function(t){return t()})||cy},ci=[],u0=function(e){for(var t=0;t<ci.length;t+=5)(!e||ci[t+4]&&ci[t+4].query===e)&&(ci[t].style.cssText=ci[t+1],ci[t].getBBox&&ci[t].setAttribute("transform",ci[t+2]||""),ci[t+3].uncache=1)},f0=function(){return rt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},kd=function(e,t){var n;for(Hn=0;Hn<it.length;Hn++)n=it[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));tl=!0,t&&u0(t),t||oo("revert")},h0=function(e,t){rt.cache++,(t||!Wn)&&rt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),fi(e)&&(st.history.scrollRestoration=Ld=e)},Wn,no=0,kp,uy=function(){if(kp!==no){var e=kp=no;requestAnimationFrame(function(){return e===no&&Hr(!0)})}},d0=function(){xt.appendChild(Ko),Id=!Gn&&Ko.offsetHeight||st.innerHeight,xt.removeChild(Ko)},zp=function(e){return gl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hr=function(e,t){if(di=Dt.documentElement,xt=Dt.body,Dd=[st,Dt,di,xt],Fi&&!e&&!tl){dn(at,"scrollEnd",c0);return}d0(),Wn=at.isRefreshing=!0,tl||f0();var n=oo("refreshInit");J_&&at.sort(),t||kd(),rt.forEach(function(s){Pn(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),it.slice(0).forEach(function(s){return s.refresh()}),tl=!1,it.forEach(function(s){if(s._subPinOffset&&s.pin){var r=s.vars.horizontal?"offsetWidth":"offsetHeight",o=s.pin[r];s.revert(!0,1),s.adjustPinSpacing(s.pin[r]-o),s.refresh()}}),sh=1,zp(!0),it.forEach(function(s){var r=us(s.scroller,s._dir),o=s.vars.end==="max"||s._endClamp&&s.end>r,a=s._startClamp&&s.start>=r;(o||a)&&s.setPositions(a?r-1:s.start,o?Math.max(a?r:s.start+1,r):s.end,!0)}),zp(!1),sh=0,n.forEach(function(s){return s&&s.render&&s.render(-1)}),rt.forEach(function(s){Pn(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),h0(Ld,1),jc.pause(),no++,Wn=2,Us(2),it.forEach(function(s){return Pn(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Wn=at.isRefreshing=!1,oo("refresh")},oh=0,Dc=1,ol,Us=function(e){if(e===2||!Wn&&!tl){at.isUpdating=!0,ol&&ol.update(0);var t=it.length,n=An(),s=n-Iu>=50,r=t&&it[0].scroll();if(Dc=oh>r?-1:1,Wn||(oh=r),s&&(Fi&&!mu&&n-Fi>200&&(Fi=0,oo("scrollEnd")),Ba=Iu,Iu=n),Dc<0){for(Hn=t;Hn-- >0;)it[Hn]&&it[Hn].update(0,s);Dc=1}else for(Hn=0;Hn<t;Hn++)it[Hn]&&it[Hn].update(0,s);at.isUpdating=!1}_l=0},ah=[o0,a0,Ud,Od,Ri+rl,Ri+nl,Ri+sl,Ri+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lc=ah.concat([eo,to,"boxSizing","max"+fa,"max"+Fd,"position",Ri,Zt,Zt+sl,Zt+nl,Zt+rl,Zt+il]),fy=function(e,t,n){jo(n);var s=e._gsap;if(s.spacerIsNative)jo(s.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Fu=function(e,t,n,s){if(!e._gsap.swappedIn){for(var r=ah.length,o=t.style,a=e.style,l;r--;)l=ah[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ud]=a[Od]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[eo]=Jc(e,Yn)+nn,o[to]=Jc(e,sn)+nn,o[Zt]=a[Ri]=a[a0]=a[o0]="0",jo(s),a[eo]=a["max"+fa]=n[eo],a[to]=a["max"+Fd]=n[to],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hy=/([A-Z])/g,jo=function(e){if(e){var t=e.t.style,n=e.length,s=0,r,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;s<n;s+=2)o=e[s+1],r=e[s],o?t[r]=o:t[r]&&t.removeProperty(r.replace(hy,"-$1").toLowerCase())}},Vl=function(e){for(var t=Lc.length,n=e.style,s=[],r=0;r<t;r++)s.push(Lc[r],n[Lc[r]]);return s.t=e,s},dy=function(e,t,n){for(var s=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],s.push(a,a in t?t[a]:e[o+1]);return s.t=e.t,s},Ic={left:0,top:0},Bp=function(e,t,n,s,r,o,a,l,c,u,d,f,h,p){Pn(e)&&(e=e(l)),fi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Rc("0"+e.substr(3),n):0));var _=h?h.time():0,m,g,v;if(h&&h.seek(0),isNaN(e)||(e=+e),Ha(e))h&&(e=Ce.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&Pc(a,n,s,!0);else{Pn(t)&&(t=t(l));var M=(e||"0").split(" "),y,w,T,E;v=Qn(t,l)||xt,y=Ps(v)||{},(!y||!y.left&&!y.top)&&Pi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Ps(v),E?v.style.display=E:v.style.removeProperty("display")),w=Rc(M[0],y[s.d]),T=Rc(M[1]||"0",n),e=y[s.p]-c[s.p]-u+w+r-T,a&&Pc(a,T,s,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+n,S=o._isStart;m="scroll"+s.d2,Pc(o,x,s,S&&x>20||!S&&(d?Math.max(xt[m],di[m]):o.parentNode[m])<=x+1),d&&(c=Ps(a),d&&(o.style[s.op.p]=c[s.op.p]-s.op.m-o._offset+nn))}return h&&v&&(m=Ps(v),h.seek(f),g=Ps(v),h._caScrollDist=m[s.p]-g[s.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},py=/(webkit|moz|length|cssText|inset)/i,Vp=function(e,t,n,s){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=Pi(e);for(o in a)!+o&&!py.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=s}else r.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},p0=function(e,t,n){var s=t,r=s;return function(o){var a=Math.round(e());return a!==s&&a!==r&&Math.abs(a-s)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=s,s=Math.round(o),s}},Gl=function(e,t,n){var s={};s[t.p]="+="+n,Ce.set(e,s)},Gp=function(e,t){var n=gr(e,t),s="_scroll"+t.p2,r=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,p={};c=c||n();var _=p0(n,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[s]=a,l.inherit=!1,l.modifiers=p,p[s]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Us()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Ce.to(e,l),f};return e[s]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},dn(e,"wheel",n.wheelHandler),at.isTouch&&dn(e,"touchmove",n.wheelHandler),r},at=(function(){function i(t,n){ko||i.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ih(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Va){this.update=this.refresh=this.kill=rs;return}n=Up(fi(n)||Ha(n)||n.nodeType?{trigger:n}:n,zl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,d=r.scrub,f=r.trigger,h=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,M=r.once,y=r.snap,w=r.pinReparent,T=r.pinSpacer,E=r.containerAnimation,x=r.fastScrollEnd,S=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Yn:sn,R=!d&&d!==0,I=Qn(n.scroller||st),z=Ce.core.getCache(I),G=so(I),k=("pinType"in n?n.pinType:fr(I,"pinType")||G&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=R&&n.toggleActions.split(" "),J="markers"in n?n.markers:zl.markers,Q=G?0:parseFloat(Pi(I)["border"+P.p2+fa])||0,D=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ce=sy(I,G,P),Ue=ry(I,G),Ve=0,$e=0,$=0,ee=gr(I,P),ne,Pe,De,Re,ut,we,Ge,Ke,Be,X,O,_t,tt,He,ye,C,b,F,K,j,Y,ve,oe,Le,Me,ie,re,be,Ee,de,We,L,le,se,pe,te,Z,Se,ke;if(D._startClamp=D._endClamp=!1,D._dir=P,m*=45,D.scroller=I,D.scroll=E?E.time.bind(E):ee,Re=ee(),D.vars=n,s=s||n.animation,"refreshPriority"in n&&(J_=1,n.refreshPriority===-9999&&(ol=D)),z.tweenScroll=z.tweenScroll||{top:Gp(I,sn),left:Gp(I,Yn)},D.tweenTo=ne=z.tweenScroll[P.p],D.scrubDuration=function(ge){le=Ha(ge)&&ge,le?L?L.duration(ge):L=Ce.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return g&&g(D)}}):(L&&L.progress(1).kill(),L=0)},s&&(s.vars.lazy=!1,s._initted&&!D.isReverted||s.vars.immediateRender!==!1&&n.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),D.animation=s.pause(),s.scrollTrigger=D,D.scrubDuration(d),de=0,l||(l=s.vars.id)),y&&((!Nr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ce.set(G?[xt,di]:I,{scrollBehavior:"auto"}),rt.forEach(function(ge){return Pn(ge)&&ge.target===(G?Dt.scrollingElement||di:I)&&(ge.smooth=!1)}),De=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?ay(s):y.snapTo==="labelsDirectional"?ly(s):y.directional!==!1?function(ge,Xe){return Nd(y.snapTo)(ge,An()-$e<500?0:Xe.direction)}:Ce.utils.snap(y.snapTo),se=y.duration||{min:.1,max:2},se=Nr(se)?el(se.min,se.max):el(se,se),pe=Ce.delayedCall(y.delay||le/2||.1,function(){var ge=ee(),Xe=An()-$e<500,ze=ne.tween;if((Xe||Math.abs(D.getVelocity())<10)&&!ze&&!mu&&Ve!==ge){var Ye=(ge-we)/He,Gt=s&&!R?s.totalProgress():Ye,Ze=Xe?0:(Gt-We)/(An()-Ba)*1e3||0,Lt=Ce.utils.clamp(-Ye,1-Ye,xo(Ze/2)*Ze/.185),Qt=Ye+(y.inertia===!1?0:Lt),It,Mt,vt=y,Mn=vt.onStart,Pt=vt.onInterrupt,bn=vt.onComplete;if(It=De(Qt,D),Ha(It)||(It=Qt),Mt=Math.max(0,Math.round(we+It*He)),ge<=Ge&&ge>=we&&Mt!==ge){if(ze&&!ze._initted&&ze.data<=xo(Mt-ge))return;y.inertia===!1&&(Lt=It-Ye),ne(Mt,{duration:se(xo(Math.max(xo(Qt-Gt),xo(It-Gt))*.185/Ze/.05||0)),ease:y.ease||"power3",data:xo(Mt-ge),onInterrupt:function(){return pe.restart(!0)&&Pt&&Pt(D)},onComplete:function(){D.update(),Ve=ee(),s&&!R&&(L?L.resetTo("totalProgress",It,s._tTime/s._tDur):s.progress(It)),de=We=s&&!R?s.totalProgress():D.progress,v&&v(D),bn&&bn(D)}},ge,Lt*He,Mt-ge-Lt*He),Mn&&Mn(D,ne.tween)}}else D.isActive&&Ve!==ge&&pe.restart(!0)}).pause()),l&&(rh[l]=D),f=D.trigger=Qn(f||h!==!0&&h),ke=f&&f._gsap&&f._gsap.stRevert,ke&&(ke=ke(D)),h=h===!0?f:Qn(h),fi(a)&&(a={targets:f,className:a}),h&&(p===!1||p===Ri||(p=!p&&h.parentNode&&h.parentNode.style&&Pi(h.parentNode).display==="flex"?!1:Zt),D.pin=h,Pe=Ce.core.getCache(h),Pe.spacer?ye=Pe.pinState:(T&&(T=Qn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Pe.spacerIsNative=!!T,T&&(Pe.spacerState=Vl(T))),Pe.spacer=F=T||Dt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),Pe.pinState=ye=Vl(h)),n.force3D!==!1&&Ce.set(h,{force3D:!0}),D.spacer=F=Pe.spacer,Ee=Pi(h),Le=Ee[p+P.os2],j=Ce.getProperty(h),Y=Ce.quickSetter(h,P.a,nn),Fu(h,F,Ee),b=Vl(h)),J){_t=Nr(J)?Up(J,Fp):Fp,X=Bl("scroller-start",l,I,P,_t,0),O=Bl("scroller-end",l,I,P,_t,0,X),K=X["offset"+P.op.d2];var dt=Qn(fr(I,"content")||I);Ke=this.markerStart=Bl("start",l,dt,P,_t,K,0,E),Be=this.markerEnd=Bl("end",l,dt,P,_t,K,0,E),E&&(Se=Ce.quickSetter([Ke,Be],P.a,nn)),!k&&!(ps.length&&fr(I,"fixedMarkers")===!0)&&(oy(G?xt:I),Ce.set([X,O],{force3D:!0}),ie=Ce.quickSetter(X,P.a,nn),be=Ce.quickSetter(O,P.a,nn))}if(E){var xe=E.vars.onUpdate,Ie=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),xe&&xe.apply(E,Ie||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(ge,Xe){if(!Xe)return D.kill(!0);var ze=ge!==!1||!D.enabled,Ye=Tn;ze!==D.isReverted&&(ze&&(te=Math.max(ee(),D.scroll.rec||0),$=D.progress,Z=s&&s.progress()),Ke&&[Ke,Be,X,O].forEach(function(Gt){return Gt.style.display=ze?"none":"block"}),ze&&(Tn=D,D.update(ze)),h&&(!w||!D.isActive)&&(ze?fy(h,F,ye):Fu(h,F,Pi(h),Me)),ze||D.update(ze),Tn=Ye,D.isReverted=ze)},D.refresh=function(ge,Xe,ze,Ye){if(!((Tn||!D.enabled)&&!Xe)){if(h&&ge&&Fi){dn(i,"scrollEnd",c0);return}!Wn&&ae&&ae(D),Tn=D,ne.tween&&!ze&&(ne.tween.kill(),ne.tween=0),L&&L.pause(),_&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Gt=ce(),Ze=Ue(),Lt=E?E.duration():us(I,P),Qt=He<=.01||!He,It=0,Mt=Ye||0,vt=Nr(ze)?ze.end:n.end,Mn=n.endTrigger||f,Pt=Nr(ze)?ze.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),bn=D.pinnedContainer=n.pinnedContainer&&Qn(n.pinnedContainer,D),wi=f&&Math.max(0,it.indexOf(D))||0,en=wi,tn,cn,bs,mo,A,N,q,W,H,fe,me,he,Ae;for(J&&Nr(ze)&&(he=Ce.getProperty(X,P.p),Ae=Ce.getProperty(O,P.p));en-- >0;)N=it[en],N.end||N.refresh(0,1)||(Tn=D),q=N.pin,q&&(q===f||q===h||q===bn)&&!N.isReverted&&(fe||(fe=[]),fe.unshift(N),N.revert(!0,!0)),N!==it[en]&&(wi--,en--);for(Pn(Pt)&&(Pt=Pt(D)),Pt=Dp(Pt,"start",D),we=Bp(Pt,f,Gt,P,ee(),Ke,X,D,Ze,Q,k,Lt,E,D._startClamp&&"_startClamp")||(h?-.001:0),Pn(vt)&&(vt=vt(D)),fi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(fi(Pt)?Pt.split(" ")[0]:"")+vt:(It=Rc(vt.substr(2),Gt),vt=fi(Pt)?Pt:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,we):we)+It,Mn=f)),vt=Dp(vt,"end",D),Ge=Math.max(we,Bp(vt||(Mn?"100% 0":Lt),Mn,Gt,P,ee()+It,Be,O,D,Ze,Q,k,Lt,E,D._endClamp&&"_endClamp"))||-.001,It=0,en=wi;en--;)N=it[en]||{},q=N.pin,q&&N.start-N._pinPush<=we&&!E&&N.end>0&&(tn=N.end-(D._startClamp?Math.max(0,N.start):N.start),(q===f&&N.start-N._pinPush<we||q===bn)&&isNaN(Pt)&&(It+=tn*(1-N.progress)),q===h&&(Mt+=tn));if(we+=It,Ge+=It,D._startClamp&&(D._startClamp+=It),D._endClamp&&!Wn&&(D._endClamp=Ge||-.001,Ge=Math.min(Ge,us(I,P))),He=Ge-we||(we-=.01)&&.001,Qt&&($=Ce.utils.clamp(0,1,Ce.utils.normalize(we,Ge,te))),D._pinPush=Mt,Ke&&It&&(tn={},tn[P.a]="+="+It,bn&&(tn[P.p]="-="+ee()),Ce.set([Ke,Be],tn)),h&&!(sh&&D.end>=us(I,P)))tn=Pi(h),mo=P===sn,bs=ee(),ve=parseFloat(j(P.a))+Mt,!Lt&&Ge>1&&(me=(G?Dt.scrollingElement||di:I).style,me={style:me,value:me["overflow"+P.a.toUpperCase()]},G&&Pi(xt)["overflow"+P.a.toUpperCase()]!=="scroll"&&(me.style["overflow"+P.a.toUpperCase()]="scroll")),Fu(h,F,tn),b=Vl(h),cn=Ps(h,!0),W=k&&gr(I,mo?Yn:sn)(),p?(Me=[p+P.os2,He+Mt+nn],Me.t=F,en=p===Zt?Jc(h,P)+He+Mt:0,en&&(Me.push(P.d,en+nn),F.style.flexBasis!=="auto"&&(F.style.flexBasis=en+nn)),jo(Me),bn&&it.forEach(function(Te){Te.pin===bn&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),k&&ee(te)):(en=Jc(h,P),en&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=en+nn)),k&&(A={top:cn.top+(mo?bs-we:W)+nn,left:cn.left+(mo?W:bs-we)+nn,boxSizing:"border-box",position:"fixed"},A[eo]=A["max"+fa]=Math.ceil(cn.width)+nn,A[to]=A["max"+Fd]=Math.ceil(cn.height)+nn,A[Ri]=A[Ri+sl]=A[Ri+nl]=A[Ri+rl]=A[Ri+il]="0",A[Zt]=tn[Zt],A[Zt+sl]=tn[Zt+sl],A[Zt+nl]=tn[Zt+nl],A[Zt+rl]=tn[Zt+rl],A[Zt+il]=tn[Zt+il],C=dy(ye,A,w),Wn&&ee(0)),s?(H=s._initted,Du(1),s.render(s.duration(),!0,!0),oe=j(P.a)-ve+He+Mt,re=Math.abs(He-oe)>1,k&&re&&C.splice(C.length-2,2),s.render(0,!0,!0),H||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Du(0)):oe=He,me&&(me.value?me.style["overflow"+P.a.toUpperCase()]=me.value:me.style.removeProperty("overflow-"+P.a));else if(f&&ee()&&!E)for(cn=f.parentNode;cn&&cn!==xt;)cn._pinOffset&&(we-=cn._pinOffset,Ge-=cn._pinOffset),cn=cn.parentNode;fe&&fe.forEach(function(Te){return Te.revert(!1,!0)}),D.start=we,D.end=Ge,Re=ut=Wn?te:ee(),!E&&!Wn&&(Re<te&&ee(te),D.scroll.rec=0),D.revert(!1,!0),$e=An(),pe&&(Ve=-1,pe.restart(!0)),Tn=0,s&&R&&(s._initted||Z)&&s.progress()!==Z&&s.progress(Z||0,!0).render(s.time(),!0,!0),(Qt||$!==D.progress||E||_||s&&!s._initted)&&(s&&!R&&(s._initted||$||s.vars.immediateRender!==!1)&&s.totalProgress(E&&we<-.001&&!$?Ce.utils.normalize(we,Ge,0):$,!0),D.progress=Qt||(Re-we)/He===$?0:$),h&&p&&(F._pinOffset=Math.round(D.progress*oe)),L&&L.invalidate(),isNaN(he)||(he-=Ce.getProperty(X,P.p),Ae-=Ce.getProperty(O,P.p),Gl(X,P,he),Gl(Ke,P,he-(Ye||0)),Gl(O,P,Ae),Gl(Be,P,Ae-(Ye||0))),Qt&&!Wn&&D.update(),u&&!Wn&&!tt&&(tt=!0,u(D),tt=!1)}},D.getVelocity=function(){return(ee()-ut)/(An()-Ba)*1e3||0},D.endAnimation=function(){Ca(D.callbackAnimation),s&&(L?L.progress(1):s.paused()?R||Ca(s,D.direction<0,1):Ca(s,s.reversed()))},D.labelToScroll=function(ge){return s&&s.labels&&(we||D.refresh()||we)+s.labels[ge]/s.duration()*He||0},D.getTrailing=function(ge){var Xe=it.indexOf(D),ze=D.direction>0?it.slice(0,Xe).reverse():it.slice(Xe+1);return(fi(ge)?ze.filter(function(Ye){return Ye.vars.preventOverlaps===ge}):ze).filter(function(Ye){return D.direction>0?Ye.end<=we:Ye.start>=Ge})},D.update=function(ge,Xe,ze){if(!(E&&!ze&&!ge)){var Ye=Wn===!0?te:D.scroll(),Gt=ge?0:(Ye-we)/He,Ze=Gt<0?0:Gt>1?1:Gt||0,Lt=D.progress,Qt,It,Mt,vt,Mn,Pt,bn,wi;if(Xe&&(ut=Re,Re=E?ee():Ye,y&&(We=de,de=s&&!R?s.totalProgress():Ze)),m&&h&&!Tn&&!Ul&&Fi&&(!Ze&&we<Ye+(Ye-ut)/(An()-Ba)*m?Ze=1e-4:Ze===1&&Ge>Ye+(Ye-ut)/(An()-Ba)*m&&(Ze=.9999)),Ze!==Lt&&D.enabled){if(Qt=D.isActive=!!Ze&&Ze<1,It=!!Lt&&Lt<1,Pt=Qt!==It,Mn=Pt||!!Ze!=!!Lt,D.direction=Ze>Lt?1:-1,D.progress=Ze,Mn&&!Tn&&(Mt=Ze&&!Lt?0:Ze===1?1:Lt===1?2:3,R&&(vt=!Pt&&U[Mt+1]!=="none"&&U[Mt+1]||U[Mt],wi=s&&(vt==="complete"||vt==="reset"||vt in s))),S&&(Pt||wi)&&(wi||d||!s)&&(Pn(S)?S(D):D.getTrailing(S).forEach(function(bs){return bs.endAnimation()})),R||(L&&!Tn&&!Ul?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Ze,s._tTime/s._tDur):(L.vars.totalProgress=Ze,L.invalidate().restart())):s&&s.totalProgress(Ze,!!(Tn&&($e||ge)))),h){if(ge&&p&&(F.style[p+P.os2]=Le),!k)Y(Ga(ve+oe*Ze));else if(Mn){if(bn=!ge&&Ze>Lt&&Ge+1>Ye&&Ye+1>=us(I,P),w)if(!ge&&(Qt||bn)){var en=Ps(h,!0),tn=Ye-we;Vp(h,xt,en.top+(P===sn?tn:0)+nn,en.left+(P===sn?0:tn)+nn)}else Vp(h,F);jo(Qt||bn?C:b),re&&Ze<1&&Qt||Y(ve+(Ze===1&&!bn?oe:0))}}y&&!ne.tween&&!Tn&&!Ul&&pe.restart(!0),a&&(Pt||M&&Ze&&(Ze<1||!Lu))&&gl(a.targets).forEach(function(bs){return bs.classList[Qt||M?"add":"remove"](a.className)}),o&&!R&&!ge&&o(D),Mn&&!Tn?(R&&(wi&&(vt==="complete"?s.pause().totalProgress(1):vt==="reset"?s.restart(!0).pause():vt==="restart"?s.restart(!0):s[vt]()),o&&o(D)),(Pt||!Lu)&&(c&&Pt&&Ou(D,c),B[Mt]&&Ou(D,B[Mt]),M&&(Ze===1?D.kill(!1,1):B[Mt]=0),Pt||(Mt=Ze===1?1:3,B[Mt]&&Ou(D,B[Mt]))),x&&!Qt&&Math.abs(D.getVelocity())>(Ha(x)?x:2500)&&(Ca(D.callbackAnimation),L?L.progress(1):Ca(s,vt==="reverse"?1:!Ze,1))):R&&o&&!Tn&&o(D)}if(be){var cn=E?Ye/E.duration()*(E._caScrollDist||0):Ye;ie(cn+(X._isFlipped?1:0)),be(cn)}Se&&Se(-Ye/E.duration()*(E._caScrollDist||0))}},D.enable=function(ge,Xe){D.enabled||(D.enabled=!0,dn(I,"resize",Wa),G||dn(I,"scroll",yo),ae&&dn(i,"refreshInit",ae),ge!==!1&&(D.progress=$=0,Re=ut=Ve=ee()),Xe!==!1&&D.refresh())},D.getTween=function(ge){return ge&&ne?ne.tween:L},D.setPositions=function(ge,Xe,ze,Ye){if(E){var Gt=E.scrollTrigger,Ze=E.duration(),Lt=Gt.end-Gt.start;ge=Gt.start+Lt*ge/Ze,Xe=Gt.start+Lt*Xe/Ze}D.refresh(!1,!1,{start:Lp(ge,ze&&!!D._startClamp),end:Lp(Xe,ze&&!!D._endClamp)},Ye),D.update()},D.adjustPinSpacing=function(ge){if(Me&&ge){var Xe=Me.indexOf(P.d)+1;Me[Xe]=parseFloat(Me[Xe])+ge+nn,Me[1]=parseFloat(Me[1])+ge+nn,jo(Me)}},D.disable=function(ge,Xe){if(ge!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Xe||L&&L.pause(),te=0,Pe&&(Pe.uncache=1),ae&&hn(i,"refreshInit",ae),pe&&(pe.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!G)){for(var ze=it.length;ze--;)if(it[ze].scroller===I&&it[ze]!==D)return;hn(I,"resize",Wa),G||hn(I,"scroll",yo)}},D.kill=function(ge,Xe){D.disable(ge,Xe),L&&!Xe&&L.kill(),l&&delete rh[l];var ze=it.indexOf(D);ze>=0&&it.splice(ze,1),ze===Hn&&Dc>0&&Hn--,ze=0,it.forEach(function(Ye){return Ye.scroller===D.scroller&&(ze=1)}),ze||Wn||(D.scroll.rec=0),s&&(s.scrollTrigger=null,ge&&s.revert({kill:!1}),Xe||s.kill()),Ke&&[Ke,Be,X,O].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ol===D&&(ol=0),h&&(Pe&&(Pe.uncache=1),ze=0,it.forEach(function(Ye){return Ye.pin===h&&ze++}),ze||(Pe.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),ke&&ke(D),s&&s.add&&!He){var Je=D.update;D.update=function(){D.update=Je,rt.cache++,we||Ge||D.refresh()},Ce.delayedCall(.01,D.update),He=.01,we=Ge=0}else D.refresh();h&&uy()},i.register=function(n){return ko||(Ce=n||i0(),n0()&&window.document&&i.enable(),ko=Va),ko},i.defaults=function(n){if(n)for(var s in n)zl[s]=n[s];return zl},i.disable=function(n,s){Va=0,it.forEach(function(o){return o[s?"kill":"disable"](n)}),hn(st,"wheel",yo),hn(Dt,"scroll",yo),clearInterval(Ol),hn(Dt,"touchcancel",rs),hn(xt,"touchstart",rs),Nl(hn,Dt,"pointerdown,touchstart,mousedown",Ip),Nl(hn,Dt,"pointerup,touchend,mouseup",Op),jc.kill(),Fl(hn);for(var r=0;r<rt.length;r+=3)kl(hn,rt[r],rt[r+1]),kl(hn,rt[r],rt[r+2])},i.enable=function(){if(st=window,Dt=document,di=Dt.documentElement,xt=Dt.body,Ce&&(gl=Ce.utils.toArray,el=Ce.utils.clamp,ih=Ce.core.context||rs,Du=Ce.core.suppressOverwrites||rs,Ld=st.history.scrollRestoration||"auto",oh=st.pageYOffset||0,Ce.core.globals("ScrollTrigger",i),xt)){Va=1,Ko=document.createElement("div"),Ko.style.height="100vh",Ko.style.position="absolute",d0(),iy(),qt.register(Ce),i.isTouch=qt.isTouch,Js=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nh=qt.isTouch===1,dn(st,"wheel",yo),Dd=[st,Dt,di,xt],Ce.matchMedia?(i.matchMedia=function(c){var u=Ce.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Ce.addEventListener("matchMediaInit",function(){f0(),kd()}),Ce.addEventListener("matchMediaRevert",function(){return u0()}),Ce.addEventListener("matchMedia",function(){Hr(0,1),oo("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Uu(),Uu})):console.warn("Requires GSAP 3.11.0 or later"),Uu(),dn(Dt,"scroll",yo);var n=xt.hasAttribute("style"),s=xt.style,r=s.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",a=Ps(xt),sn.m=Math.round(a.top+sn.sc())||0,Yn.m=Math.round(a.left+Yn.sc())||0,r?s.borderTopStyle=r:s.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Ol=setInterval(Np,250),Ce.delayedCall(.5,function(){return Ul=0}),dn(Dt,"touchcancel",rs),dn(xt,"touchstart",rs),Nl(dn,Dt,"pointerdown,touchstart,mousedown",Ip),Nl(dn,Dt,"pointerup,touchend,mouseup",Op),th=Ce.utils.checkPrefix("transform"),Lc.push(th),ko=An(),jc=Ce.delayedCall(.2,Hr).pause(),zo=[Dt,"visibilitychange",function(){var c=st.innerWidth,u=st.innerHeight;Dt.hidden?(Rp=c,Pp=u):(Rp!==c||Pp!==u)&&Wa()},Dt,"DOMContentLoaded",Hr,st,"load",Hr,st,"resize",Wa],Fl(dn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)kl(hn,rt[l],rt[l+1]),kl(hn,rt[l],rt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Lu=!!n.limitCallbacks);var s=n.syncInterval;s&&clearInterval(Ol)||(Ol=s)&&setInterval(Np,s),"ignoreMobileResize"in n&&(nh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fl(hn)||Fl(dn,n.autoRefreshEvents||"none"),Q_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,s){var r=Qn(n),o=rt.indexOf(r),a=so(r);~o&&rt.splice(o,a?6:2),s&&(a?ps.unshift(st,s,xt,s,di,s):ps.unshift(r,s))},i.clearMatchMedia=function(n){it.forEach(function(s){return s._ctx&&s._ctx.query===n&&s._ctx.kill(!0,!0)})},i.isInViewport=function(n,s,r){var o=(fi(n)?Qn(n):n).getBoundingClientRect(),a=o[r?eo:to]*s||0;return r?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},i.positionInViewport=function(n,s,r){fi(n)&&(n=Qn(n));var o=n.getBoundingClientRect(),a=o[r?eo:to],l=s==null?a/2:s in Qc?Qc[s]*a:~s.indexOf("%")?parseFloat(s)*a/100:parseFloat(s)||0;return r?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},i.killAll=function(n){if(it.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var s=ro.killAll||[];ro={},s.forEach(function(r){return r()})}},i})();at.version="3.14.2";at.saveStyles=function(i){return i?gl(i).forEach(function(e){if(e&&e.style){var t=ci.indexOf(e);t>=0&&ci.splice(t,5),ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),ih())}}):ci};at.revert=function(i,e){return kd(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?Wa(!0):(ko||at.register())&&Hr(!0)};at.update=function(i){return++rt.cache&&Us(i===!0?2:0)};at.clearScrollMemory=h0;at.maxScroll=function(i,e){return us(i,e?Yn:sn)};at.getScrollFunc=function(i,e){return gr(Qn(i),e?Yn:sn)};at.getById=function(i){return rh[i]};at.getAll=function(){return it.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Fi};at.snapDirectional=Nd;at.addEventListener=function(i,e){var t=ro[i]||(ro[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=ro[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},s=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=Ce.delayedCall(s,function(){u(d,f),d=[],f=[]}).pause();return function(p){d.length||h.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(r)&&(r=r(),dn(at,"refresh",function(){return r=e.batchMax()})),gl(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var Hp=function(e,t,n,s){return t>s?e(s):t<0&&e(0),n>s?(s-t)/(n-t):n<0?t/(t-n):1},Nu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===di&&i(xt,t)},Hl={auto:1,scroll:1},my=function(e){var t=e.event,n=e.target,s=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ce.core.getCache(r),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Hl[(l=Pi(r)).overflowY]||Hl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!so(r)&&(Hl[(l=Pi(r)).overflowY]||Hl[l.overflowX]),o._isScrollT=a}(o._isScroll||s==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},m0=function(e,t,n,s){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:s=s&&my,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return n&&dn(Dt,qt.eventTypes[0],Xp,!1,!0)},onDisable:function(){return hn(Dt,qt.eventTypes[0],Xp,!0)}})},gy=/(input|label|select|textarea)/i,Wp,Xp=function(e){var t=gy.test(e.target.tagName);(t||Wp)&&(e._gsapAllow=!0,Wp=t)},_y=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,s=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Qn(e.target)||di,u=Ce.core.globals().ScrollSmoother,d=u&&u.get(),f=Js&&(e.content&&Qn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=gr(c,sn),p=gr(c,Yn),_=1,m=(qt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,g=0,v=Pn(s)?function(){return s(a)}:function(){return s||2.8},M,y,w=m0(c,e.type,!0,r),T=function(){return y=!1},E=rs,x=rs,S=function(){l=us(c,sn),x=el(Js?1:0,l),n&&(E=el(0,us(c,Yn))),M=no},P=function(){f._gsap.y=Ga(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},R=function(){if(y){requestAnimationFrame(T);var J=Ga(a.deltaY/2),Q=x(h.v-J);if(f&&Q!==h.v+h.offset){h.offset=Q-h.v;var D=Ga((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=rt.cache,Us()}return!0}h.offset&&P(),y=!0},I,z,G,k,B=function(){S(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Js&&U.type==="touchmove"&&R()||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=_;_=Ga((st.visualViewport&&st.visualViewport.scale||1)/m),I.pause(),U!==_&&Nu(c,_>1.01?!0:n?!1:"x"),z=p(),G=h(),S(),M=no},e.onRelease=e.onGestureStart=function(U,J){if(h.offset&&P(),!J)k.restart(!0);else{rt.cache++;var Q=v(),D,ae;n&&(D=p(),ae=D+Q*.05*-U.velocityX/.227,Q*=Hp(p,D,ae,us(c,Yn)),I.vars.scrollX=E(ae)),D=h(),ae=D+Q*.05*-U.velocityY/.227,Q*=Hp(h,D,ae,us(c,sn)),I.vars.scrollY=x(ae),I.invalidate().duration(Q).play(.01),(Js&&I.vars.scrollY>=l||D>=l-1)&&Ce.to({},{onUpdate:B,duration:Q})}o&&o(U)},e.onWheel=function(){I._ts&&I.pause(),An()-g>1e3&&(M=0,g=An())},e.onChange=function(U,J,Q,D,ae){if(no!==M&&S(),J&&n&&p(E(D[2]===J?z+(U.startX-U.x):p()+J-D[1])),Q){h.offset&&P();var ce=ae[2]===Q,Ue=ce?G+U.startY-U.y:h()+Q-ae[1],Ve=x(Ue);ce&&Ue!==Ve&&(G+=Ve-Ue),h(Ve)}(Q||J)&&Us()},e.onEnable=function(){Nu(c,n?!1:"x"),at.addEventListener("refresh",B),dn(st,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),w.enable()},e.onDisable=function(){Nu(c,!0),hn(st,"resize",B),at.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=Js,Js&&!h()&&h(1),Js&&Ce.ticker.add(rs),k=a._dc,I=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:p0(h,h(),function(){return I.pause()})},onUpdate:Us,onComplete:k.vars.onComplete}),a};at.sort=function(i){if(Pn(i))return it.sort(i);var e=st.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new qt(i)};at.normalizeScroll=function(i){if(typeof i>"u")return Gn;if(i===!0&&Gn)return Gn.enable();if(i===!1){Gn&&Gn.kill(),Gn=i;return}var e=i instanceof qt?i:_y(i);return Gn&&Gn.target===e.target&&Gn.kill(),so(e.target)&&(Gn=e),e};at.core={_getVelocityProp:eh,_inputObserver:m0,_scrollers:rt,_proxies:ps,bridge:{ss:function(){Fi||oo("scrollStart"),Fi=An()},ref:function(){return Tn}}};i0()&&Ce.registerPlugin(at);const Wr="generated",vy="pointerdown",xy="pointerup",lh="pointerleave",yy="pointerout",ao="pointermove",My="touchstart",qp="touchend",by="touchmove",Sy="touchcancel",wy="resize",Ey="visibilitychange",zi="tsParticles - Error",or=100,rn=.5,Dn=1e3,Cn={x:0,y:0,z:0},Wl={a:1,b:0,c:0,d:1},ha="random",Oc="mid",Ln=2,Ty=Math.PI*Ln,ku=60,g0="true",Yp="false",zu="canvas",$p=0,Ds=2,Zp=4,Ay=1,Kp=1,jp=1,Cy=4,_0=1,Uc=255,Xr=360,ch=100,uh=100,Jp=0,fh=0,Ry=60,Py=0,eu=.25,Qp=rn+eu,em=0,Dy=1,Ly=0,Iy=0,Oy=1,zd=1,Uy=1,tm=1,tu=0,v0=1,Fy=0,Ny=120,ky=0,zy=0,By=1e4,Vy=0,Gy=1,nu=0,x0=1,Hy=1,Wy=0,nm=1,Xy=0,qy=0,im=-eu,sm=1.5,rm=0,Yy=1,$y=0,hh=0,y0=1,Zy=1,iu=1,Ky=500,om=50,jy=0,dh=1,M0=0,am=1,Jy=0,wr=255,Bu=3,Vu=6,Qy=1,eM=1,tM=0,nM=0,iM=0,sM=0;var _n;(function(i){i.bottom="bottom",i.bottomLeft="bottom-left",i.bottomRight="bottom-right",i.left="left",i.none="none",i.right="right",i.top="top",i.topLeft="top-left",i.topRight="top-right",i.outside="outside",i.inside="inside"})(_n||(_n={}));function b0(i){return typeof i=="boolean"}function _r(i){return typeof i=="string"}function vr(i){return typeof i=="number"}function Ho(i){return typeof i=="object"&&i!==null}function ys(i){return Array.isArray(i)}function ue(i){return i==null}class ui{constructor(e,t,n){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!vr(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:Cn.z}else if(e!==void 0&&t!==void 0)this.x=e,this.y=t,this.z=n??Cn.z;else throw new Error(`${zi} Vector3d not initialized correctly`)}static get origin(){return ui.create(Cn.x,Cn.y,Cn.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return ui.create(e.x,e.y,e.z)}static create(e,t,n){return new ui(e,t,n)}add(e){return ui.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return ui.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return ui.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**Ds+this.y**Ds}mult(e){return ui.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=nu&&this.multTo(_0/e)}rotate(e){return ui.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),Cn.z)}setTo(e){this.x=e.x,this.y=e.y;const t=e;this.z=t.z?t.z:Cn.z}sub(e){return ui.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class pn extends ui{constructor(e,t){super(e,t,Cn.z)}static get origin(){return pn.create(Cn.x,Cn.y)}static clone(e){return pn.create(e.x,e.y)}static create(e,t){return new pn(e,t)}}let rM=Math.random;const S0={nextFrame:i=>requestAnimationFrame(i),cancel:i=>cancelAnimationFrame(i)};function Tt(){return Bi(rM(),0,1-Number.EPSILON)}function oM(i){return S0.nextFrame(i)}function aM(i){S0.cancel(i)}function Bi(i,e,t){return Math.min(Math.max(i,e),t)}function Gu(i,e,t,n){return Math.floor((i*t+e*n)/(t+n))}function vi(i){const e=fs(i),t=0;let n=gu(i);return e===n&&(n=t),Tt()*(e-n)+n}function Ne(i){return vr(i)?i:vi(i)}function gu(i){return vr(i)?i:i.min}function fs(i){return vr(i)?i:i.max}function gt(i,e){if(i===e||e===void 0&&vr(i))return i;const t=gu(i),n=fs(i);return e!==void 0?{min:Math.min(t,e),max:Math.max(n,e)}:gt(t,n)}function $n(i,e){const t=i.x-e.x,n=i.y-e.y,s=2;return{dx:t,dy:n,distance:Math.sqrt(t**s+n**s)}}function yi(i,e){return $n(i,e).distance}function hr(i){return i*Math.PI/180}function lM(i,e,t){if(vr(i))return hr(i);switch(i){case _n.top:return-Math.PI*rn;case _n.topRight:return-Math.PI*eu;case _n.right:return Py;case _n.bottomRight:return Math.PI*eu;case _n.bottom:return Math.PI*rn;case _n.bottomLeft:return Math.PI*Qp;case _n.left:return Math.PI;case _n.topLeft:return-Math.PI*Qp;case _n.inside:return Math.atan2(t.y-e.y,t.x-e.x);case _n.outside:return Math.atan2(e.y-t.y,e.x-t.x);default:return Tt()*Ty}}function cM(i){const e=pn.origin;return e.length=1,e.angle=i,e}function lm(i,e,t,n){return pn.create(i.x*(t-n)/(t+n)+e.x*Ln*n/(t+n),i.y)}function uM(i){return{x:i.position?.x??Tt()*i.size.width,y:i.position?.y??Tt()*i.size.height}}function w0(i){return i?i.endsWith("%")?parseFloat(i)/or:parseFloat(i):1}var qr;(function(i){i.auto="auto",i.increase="increase",i.decrease="decrease",i.random="random"})(qr||(qr={}));var jt;(function(i){i.increasing="increasing",i.decreasing="decreasing"})(jt||(jt={}));var lo;(function(i){i.none="none",i.max="max",i.min="min"})(lo||(lo={}));var lt;(function(i){i.bottom="bottom",i.left="left",i.right="right",i.top="top"})(lt||(lt={}));var da;(function(i){i.precise="precise",i.percent="percent"})(da||(da={}));var Jo;(function(i){i.max="max",i.min="min",i.random="random"})(Jo||(Jo={}));const fM={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function co(){return fM}function hM(i){const e=new Map;return(...t)=>{const n=JSON.stringify(t);if(e.has(n))return e.get(n);const s=i(...t);return e.set(n,s),s}}function cm(i){const e={bounced:!1},{pSide:t,pOtherSide:n,rectSide:s,rectOtherSide:r,velocity:o,factor:a}=i;return n.min<r.min||n.min>r.max||n.max<r.min||n.max>r.max||(t.max>=s.min&&t.max<=(s.max+s.min)*rn&&o>em||t.min<=s.max&&t.min>(s.max+s.min)*rn&&o<em)&&(e.velocity=o*-a,e.bounced=!0),e}function dM(i,e){const t=Si(e,n=>i.matches(n));return ys(t)?t.some(n=>n):t}function uo(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function pM(){return!uo()&&typeof matchMedia<"u"}function E0(i){if(pM())return matchMedia(i)}function mM(i){if(!(uo()||typeof IntersectionObserver>"u"))return new IntersectionObserver(i)}function gM(i){if(!(uo()||typeof MutationObserver>"u"))return new MutationObserver(i)}function Yt(i,e){return i===e||ys(e)&&e.indexOf(i)>-1}async function um(i,e){try{await document.fonts.load(`${e??"400"} 36px '${i??"Verdana"}'`)}catch{}}function _M(i){return Math.floor(Tt()*i.length)}function _u(i,e,t=!0){return i[e!==void 0&&t?e%i.length:_M(i)]}function Bd(i,e,t,n,s){return vM(Tl(i,n??0),e,t,s)}function vM(i,e,t,n){let s=!0;return(!n||n===lt.bottom)&&(s=i.top<e.height+t.x),s&&(!n||n===lt.left)&&(s=i.right>t.x),s&&(!n||n===lt.right)&&(s=i.left<e.width+t.y),s&&(!n||n===lt.top)&&(s=i.bottom>t.y),s}function Tl(i,e){return{bottom:i.y+e,left:i.x-e,right:i.x+e,top:i.y-e}}function Fn(i,...e){for(const t of e){if(t==null)continue;if(!Ho(t)){i=t;continue}const n=Array.isArray(t);n&&(Ho(i)||!i||!Array.isArray(i))?i=[]:!n&&(Ho(i)||!i||Array.isArray(i))&&(i={});for(const s in t){if(s==="__proto__")continue;const r=t,o=r[s],a=i;a[s]=Ho(o)&&Array.isArray(o)?o.map(l=>Fn(a[s],l)):Fn(a[s],o)}}return i}function Vd(i,e){return!!C0(e,t=>t.enable&&Yt(i,t.mode))}function Gd(i,e,t){Si(e,n=>{const s=n.mode;n.enable&&Yt(i,s)&&xM(n,t)})}function xM(i,e){const t=i.selectors;Si(t,n=>{e(n,i)})}function T0(i,e){if(!(!e||!i))return C0(i,t=>dM(e,t.selectors))}function ph(i){return{position:i.getPosition(),radius:i.getRadius(),mass:i.getMass(),velocity:i.velocity,factor:pn.create(Ne(i.options.bounce.horizontal.value),Ne(i.options.bounce.vertical.value))}}function A0(i,e){const{x:t,y:n}=i.velocity.sub(e.velocity),[s,r]=[i.position,e.position],{dx:o,dy:a}=$n(r,s);if(t*o+n*a<0)return;const c=-Math.atan2(a,o),u=i.mass,d=e.mass,f=i.velocity.rotate(c),h=e.velocity.rotate(c),p=lm(f,h,u,d),_=lm(h,f,u,d),m=p.rotate(-c),g=_.rotate(-c);i.velocity.x=m.x*i.factor.x,i.velocity.y=m.y*i.factor.y,e.velocity.x=g.x*e.factor.x,e.velocity.y=g.y*e.factor.y}function yM(i,e){const t=i.getPosition(),n=i.getRadius(),s=Tl(t,n),r=i.options.bounce,o=cm({pSide:{min:s.left,max:s.right},pOtherSide:{min:s.top,max:s.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:i.velocity.x,factor:Ne(r.horizontal.value)});o.bounced&&(o.velocity!==void 0&&(i.velocity.x=o.velocity),o.position!==void 0&&(i.position.x=o.position));const a=cm({pSide:{min:s.top,max:s.bottom},pOtherSide:{min:s.left,max:s.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:i.velocity.y,factor:Ne(r.vertical.value)});a.bounced&&(a.velocity!==void 0&&(i.velocity.y=a.velocity),a.position!==void 0&&(i.position.y=a.position))}function Si(i,e){return ys(i)?i.map((n,s)=>e(n,s)):e(i,0)}function Ui(i,e,t){return ys(i)?_u(i,e,t):i}function C0(i,e){return ys(i)?i.find((n,s)=>e(n,s)):e(i,0)?i:void 0}function R0(i,e){const t=i.value,n=i.animation,s={delayTime:Ne(n.delay)*Dn,enable:n.enable,value:Ne(i.value)*e,max:fs(t)*e,min:gu(t)*e,loops:0,maxLoops:Ne(n.count),time:0},r=1;if(n.enable){switch(s.decay=r-Ne(n.decay),n.mode){case qr.increase:s.status=jt.increasing;break;case qr.decrease:s.status=jt.decreasing;break;case qr.random:s.status=Tt()>=rn?jt.increasing:jt.decreasing;break}const o=n.mode===qr.auto;switch(n.startValue){case Jo.min:s.value=s.min,o&&(s.status=jt.increasing);break;case Jo.max:s.value=s.max,o&&(s.status=jt.decreasing);break;case Jo.random:default:s.value=vi(s),o&&(s.status=Tt()>=rn?jt.increasing:jt.decreasing);break}}return s.initialValue=s.value,s}function MM(i,e){if(!(i.mode===da.percent)){const{mode:s,...r}=i;return r}return"x"in i?{x:i.x/or*e.width,y:i.y/or*e.height}:{width:i.width/or*e.width,height:i.height/or*e.height}}function P0(i,e){return MM(i,e)}function bM(i,e,t,n,s){switch(e){case lo.max:t>=s&&i.destroy();break;case lo.min:t<=n&&i.destroy();break}}function Hd(i,e,t,n,s){if(i.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const u=(e.velocity??0)*s.factor,d=e.min,f=e.max,h=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=s.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case jt.increasing:e.value>=f?(t?e.status=jt.decreasing:e.value-=f,e.loops||(e.loops=0),e.loops++):e.value+=u;break;case jt.decreasing:e.value<=d?(t?e.status=jt.increasing:e.value+=f,e.loops||(e.loops=0),e.loops++):e.value-=u}e.velocity&&h!==1&&(e.velocity*=h),bM(i,n,e.value,d,f),i.destroyed||(e.value=Bi(e.value,d,f))}}function SM(i){const e=document.createElement("div").style;if(!i)return e;for(const t in i){const n=i[t];if(!Object.prototype.hasOwnProperty.call(i,t)||ue(n))continue;const s=i.getPropertyValue?.(n);if(!s)continue;const r=i.getPropertyPriority?.(n);r?e.setProperty?.(n,s,r):e.setProperty?.(n,s)}return e}function wM(i){const e=document.createElement("div").style,t=10,n={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:i.toString(t),"z-index":i.toString(t),top:"0",left:"0"};for(const s in n){const r=n[s];e.setProperty(s,r)}return e}const EM=hM(wM);var mh;(function(i){i.darken="darken",i.enlighten="enlighten"})(mh||(mh={}));function TM(i,e){if(e){for(const t of i.colorManagers.values())if(e.startsWith(t.stringPrefix))return t.parseString(e)}}function ji(i,e,t,n=!0){if(!e)return;const s=_r(e)?{value:e}:e;if(_r(s.value))return D0(i,s.value,t,n);if(ys(s.value))return ji(i,{value:_u(s.value,t,n)});for(const r of i.colorManagers.values()){const o=r.handleRangeColor(s);if(o)return o}}function D0(i,e,t,n=!0){if(!e)return;const s=_r(e)?{value:e}:e;if(_r(s.value))return s.value===ha?I0():AM(i,s.value);if(ys(s.value))return D0(i,{value:_u(s.value,t,n)});for(const r of i.colorManagers.values()){const o=r.handleColor(s);if(o)return o}}function vl(i,e,t,n=!0){const s=ji(i,e,t,n);return s?L0(s):void 0}function L0(i){const e=i.r/Uc,t=i.g/Uc,n=i.b/Uc,s=Math.max(e,t,n),r=Math.min(e,t,n),o={h:Jp,l:(s+r)*rn,s:fh};return s!==r&&(o.s=o.l<rn?(s-r)/(s+r):(s-r)/(Ln-s-r),o.h=e===s?(t-n)/(s-r):o.h=t===s?Ln+(n-e)/(s-r):Ln*Ln+(e-t)/(s-r)),o.l*=uh,o.s*=ch,o.h*=Ry,o.h<Jp&&(o.h+=Xr),o.h>=Xr&&(o.h-=Xr),o}function AM(i,e){return TM(i,e)}function pa(i){const e=(i.h%Xr+Xr)%Xr,t=Math.max(fh,Math.min(ch,i.s)),n=Math.max(Jy,Math.min(uh,i.l)),s=e/Xr,r=t/ch,o=n/uh;if(t===fh){const p=Math.round(o*wr);return{r:p,g:p,b:p}}const a=(p,_,m)=>{if(m<0&&m++,m>1&&m--,m*Vu<1)return p+(_-p)*Vu*m;if(m*Ln<1)return _;if(m*Bu<1*Ln){const M=Ln/Bu;return p+(_-p)*(M-m)*Vu}return p},l=o<rn?o*(Qy+r):o+r-o*r,c=Ln*o-l,u=eM/Bu,d=Math.min(wr,wr*a(c,l,s+u)),f=Math.min(wr,wr*a(c,l,s)),h=Math.min(wr,wr*a(c,l,s-u));return{r:Math.round(d),g:Math.round(f),b:Math.round(h)}}function CM(i){const e=pa(i);return{a:i.a,b:e.b,g:e.g,r:e.r}}function I0(i){const e=tM,t=Uc+dh;return{b:Math.floor(vi(gt(e,t))),g:Math.floor(vi(gt(e,t))),r:Math.floor(vi(gt(e,t)))}}function Fs(i,e){return`rgba(${i.r}, ${i.g}, ${i.b}, ${e??zd})`}function xl(i,e){return`hsla(${i.h}, ${i.s}%, ${i.l}%, ${e??zd})`}function Wd(i,e,t,n){let s=i,r=e;return s.r===void 0&&(s=pa(i)),r.r===void 0&&(r=pa(e)),{b:Gu(s.b,r.b,t,n),g:Gu(s.g,r.g,t,n),r:Gu(s.r,r.r,t,n)}}function gh(i,e,t){if(t===ha)return I0();if(t===Oc){const n=i.getFillColor()??i.getStrokeColor(),s=e?.getFillColor()??e?.getStrokeColor();if(n&&s&&e)return Wd(n,s,i.getRadius(),e.getRadius());{const r=n??s;if(r)return pa(r)}}else return t}function O0(i,e,t,n){const s=_r(e)?e:e.value;return s===ha?n?ji(i,{value:s}):t?ha:Oc:s===Oc?Oc:ji(i,{value:s})}function fm(i){return i!==void 0?{h:i.h.value,s:i.s.value,l:i.l.value}:void 0}function U0(i,e,t){const n={h:{enable:!1,value:i.h},s:{enable:!1,value:i.s},l:{enable:!1,value:i.l}};return e&&(Hu(n.h,e.h,t),Hu(n.s,e.s,t),Hu(n.l,e.l,t)),n}function Hu(i,e,t){i.enable=e.enable,i.enable?(i.velocity=Ne(e.speed)/or*t,i.decay=x0-Ne(e.decay),i.status=jt.increasing,i.loops=iM,i.maxLoops=Ne(e.count),i.time=sM,i.delayTime=Ne(e.delay)*Dn,e.sync||(i.velocity*=Tt(),i.value*=Tt()),i.initialValue=i.value,i.offset=gt(e.offset)):i.velocity=nM}function Wu(i,e,t,n){if(!i||!i.enable||(i.maxLoops??0)>0&&(i.loops??0)>(i.maxLoops??0)||(i.time||(i.time=0),(i.delayTime??0)>0&&i.time<(i.delayTime??0)&&(i.time+=n.value),(i.delayTime??0)>0&&i.time<(i.delayTime??0)))return;const u=i.offset?vi(i.offset):0,d=(i.velocity??0)*n.factor+u*3.6,f=i.decay??1,h=fs(e),p=gu(e);!t||i.status===jt.increasing?(i.value+=d,i.value>h&&(i.loops||(i.loops=0),i.loops++,t?i.status=jt.decreasing:i.value-=h)):(i.value-=d,i.value<0&&(i.loops||(i.loops=0),i.loops++,i.status=jt.increasing)),i.velocity&&f!==1&&(i.velocity*=f),i.value=Bi(i.value,p,h)}function F0(i,e){if(!i)return;const{h:t,s:n,l:s}=i,r={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};t&&Wu(t,r.h,!1,e),n&&Wu(n,r.s,!0,e),s&&Wu(s,r.l,!0,e)}function al(i,e,t){i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(t.x,t.y),i.closePath()}function RM(i,e,t){i.fillStyle=t??"rgba(0,0,0,0)",i.fillRect(Cn.x,Cn.y,e.width,e.height)}function PM(i,e,t,n){t&&(i.globalAlpha=n,i.drawImage(t,Cn.x,Cn.y,e.width,e.height),i.globalAlpha=1)}function Xu(i,e){i.clearRect(Cn.x,Cn.y,e.width,e.height)}function DM(i){const{container:e,context:t,particle:n,delta:s,colorStyles:r,backgroundMask:o,composite:a,radius:l,opacity:c,shadow:u,transform:d}=i,f=n.getPosition(),h=n.rotation+(n.pathRotation?n.velocity.angle:jy),p={sin:Math.sin(h),cos:Math.cos(h)},_=!!h,m={a:p.cos*(d.a??Wl.a),b:_?p.sin*(d.b??dh):d.b??Wl.b,c:_?-p.sin*(d.c??dh):d.c??Wl.c,d:p.cos*(d.d??Wl.d)};t.setTransform(m.a,m.b,m.c,m.d,f.x,f.y),o&&(t.globalCompositeOperation=a);const g=n.shadowColor;u.enable&&g&&(t.shadowBlur=u.blur,t.shadowColor=Fs(g),t.shadowOffsetX=u.offset.x,t.shadowOffsetY=u.offset.y),r.fill&&(t.fillStyle=r.fill);const v=n.strokeWidth??M0;t.lineWidth=v,r.stroke&&(t.strokeStyle=r.stroke);const M={container:e,context:t,particle:n,radius:l,opacity:c,delta:s,transformData:m,strokeWidth:v};IM(M),OM(M),LM(M),t.globalCompositeOperation="source-over",t.resetTransform()}function LM(i){const{container:e,context:t,particle:n,radius:s,opacity:r,delta:o,transformData:a}=i;if(!n.effect)return;const l=e.effectDrawers.get(n.effect);l&&l.draw({context:t,particle:n,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...a}})}function IM(i){const{container:e,context:t,particle:n,radius:s,opacity:r,delta:o,strokeWidth:a,transformData:l}=i;if(!n.shape)return;const c=e.shapeDrawers.get(n.shape);c&&(t.beginPath(),c.draw({context:t,particle:n,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...l}}),n.shapeClose&&t.closePath(),a>M0&&t.stroke(),n.shapeFill&&t.fill())}function OM(i){const{container:e,context:t,particle:n,radius:s,opacity:r,delta:o,transformData:a}=i;if(!n.shape)return;const l=e.shapeDrawers.get(n.shape);l?.afterDraw&&l.afterDraw({context:t,particle:n,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...a}})}function UM(i,e,t){e.draw&&e.draw(i,t)}function FM(i,e,t,n){e.drawParticle&&e.drawParticle(i,t,n)}function NM(i,e,t){return{h:i.h,s:i.s,l:i.l+(e===mh.darken?-am:am)*t}}function kM(i,e,t){const n=e[t];n!==void 0&&(i[t]=(i[t]??Dy)*n)}function hm(i,e,t=!1){if(!e)return;const n=i;if(!n)return;const s=n.style;if(!s)return;const r=new Set;for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&r.add(s[o]);for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.add(e[o]);for(const o of r){const a=e.getPropertyValue(o);a?s.setProperty(o,a,t?"important":""):s.removeProperty(o)}}class zM{constructor(e,t){this.container=e,this._applyPostDrawUpdaters=r=>{for(const o of this._postDrawUpdaters)o.afterDraw?.(r)},this._applyPreDrawUpdaters=(r,o,a,l,c,u)=>{for(const d of this._preDrawUpdaters){if(d.getColorStyles){const{fill:f,stroke:h}=d.getColorStyles(o,r,a,l);f&&(c.fill=f),h&&(c.stroke=h)}if(d.getTransformValues){const f=d.getTransformValues(o);for(const h in f)kM(u,f,h)}d.beforeDraw?.(o)}},this._applyResizePlugins=()=>{for(const r of this._resizePlugins)r.resize?.()},this._getPluginParticleColors=r=>{let o,a;for(const l of this._colorPlugins)if(!o&&l.particleFillColor&&(o=vl(this._engine,l.particleFillColor(r))),!a&&l.particleStrokeColor&&(a=vl(this._engine,l.particleStrokeColor(r))),o&&a)break;return[o,a]},this._initCover=async()=>{const r=this.container.actualOptions,o=r.backgroundMask.cover,a=o.color;if(a){const l=ji(this._engine,a);if(l){const c={...l,a:o.opacity};this._coverColorStyle=Fs(c,c.a)}}else await new Promise((l,c)=>{if(!o.image)return;const u=document.createElement("img");u.addEventListener("load",()=>{this._coverImage={image:u,opacity:o.opacity},l()}),u.addEventListener("error",d=>{c(d.error)}),u.src=o.image})},this._initStyle=()=>{const r=this.element,o=this.container.actualOptions;if(r){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(const a in o.style){if(!a||!o.style||!Object.prototype.hasOwnProperty.call(o.style,a))continue;const l=o.style[a];l&&r.style.setProperty(a,l,"important")}}},this._initTrail=async()=>{const r=this.container.actualOptions,o=r.particles.move.trail,a=o.fill;if(!o.enable)return;const l=_0/o.length;if(a.color){const c=ji(this._engine,a.color);if(!c)return;this._trailFill={color:{...c},opacity:l}}else await new Promise((c,u)=>{if(!a.image)return;const d=document.createElement("img");d.addEventListener("load",()=>{this._trailFill={image:d,opacity:l},c()}),d.addEventListener("error",f=>{u(f.error)}),d.src=a.image})},this._paintBase=r=>{this.draw(o=>RM(o,this.size,r))},this._paintImage=(r,o)=>{this.draw(a=>PM(a,this.size,r,o))},this._repairStyle=()=>{const r=this.element;if(!r)return;this._safeMutationObserver(a=>a.disconnect()),this._initStyle(),this.initBackground();const o=this._pointerEvents;r.style.pointerEvents=o,r.setAttribute("pointer-events",o),this._safeMutationObserver(a=>{!r||!(r instanceof Node)||a.observe(r,{attributes:!0})})},this._resetOriginalStyle=()=>{const r=this.element,o=this._originalStyle;!r||!o||hm(r,o,!0)},this._safeMutationObserver=r=>{this._mutationObserver&&r(this._mutationObserver)},this._setFullScreenStyle=()=>{const r=this.element;r&&hm(r,EM(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=t,this._standardSize={height:0,width:0};const n=e.retina.pixelRatio,s=this._standardSize;this.size={height:s.height*n,width:s.width*n},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[],this._pointerEvents="none"}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,t=e.particles.move.trail,n=this._trailFill;e.backgroundMask.enable?this.paint():t.enable&&t.length>Iy&&n?n.color?this._paintBase(Fs(n.color,n.opacity)):n.image&&this._paintImage(n.image,n.opacity):e.clear&&this.draw(s=>{Xu(s,this.size)})}destroy(){this.stop(),this._generated?(this.element?.remove(),this.element=void 0):this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const t=this._context;if(t)return e(t)}drawAsync(e){const t=this._context;if(t)return e(t)}drawParticle(e,t){if(e.spawning||e.destroyed)return;const n=e.getRadius();if(n<=Ly)return;const s=e.getFillColor(),r=e.getStrokeColor()??s;let[o,a]=this._getPluginParticleColors(e);o||(o=s),a||(a=r),!(!o&&!a)&&this.draw(l=>{const c=this.container,u=c.actualOptions,d=e.options.zIndex,f=Oy-e.zIndexFactor,h=f**d.opacityRate,p=e.bubble.opacity??e.opacity?.value??zd,_=e.strokeOpacity??p,m=p*h,g=_*h,v={},M={fill:o?xl(o,m):void 0};M.stroke=a?xl(a,g):M.fill,this._applyPreDrawUpdaters(l,e,n,m,M,v),DM({container:c,context:l,particle:e,delta:t,colorStyles:M,backgroundMask:u.backgroundMask.enable,composite:u.backgroundMask.composite,radius:n*f**d.sizeRate,opacity:m,shadow:e.options.shadow,transform:v}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,t,n){this.draw(s=>FM(s,e,t,n))}drawPlugin(e,t){this.draw(n=>UM(n,e,t))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=gM(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(e){co().error(e)}this.initBackground(),this._safeMutationObserver(e=>{!this.element||!(this.element instanceof Node)||e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,t=e.background,n=this.element;if(!n)return;const s=n.style;if(s){if(t.color){const r=ji(this._engine,t.color);s.backgroundColor=r?Fs(r,t.opacity):""}else s.backgroundColor="";s.backgroundImage=t.image||"",s.backgroundPosition=t.position||"",s.backgroundRepeat=t.repeat||"",s.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(const e of this.container.plugins.values())e.resize&&this._resizePlugins.push(e),(e.particleFillColor??e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles??e.getTransformValues??e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&Wr in e.dataset?e.dataset[Wr]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=SM(this.element.style);const t=this._standardSize;t.height=e.offsetHeight,t.width=e.offsetWidth;const n=this.container.retina.pixelRatio,s=this.size;e.height=s.height=t.height*n,e.width=s.width=t.width*n,this._context=this.element.getContext("2d"),this._safeMutationObserver(r=>r.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(r=>{!this.element||!(this.element instanceof Node)||r.observe(this.element,{attributes:!0})})}paint(){const e=this.container.actualOptions;this.draw(t=>{e.backgroundMask.enable&&e.backgroundMask.cover?(Xu(t,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,t=e.canvas._standardSize,n={width:this.element.offsetWidth,height:this.element.offsetHeight},s=e.retina.pixelRatio,r={width:n.width*s,height:n.height*s};if(n.height===t.height&&n.width===t.width&&r.height===this.element.height&&r.width===this.element.width)return!1;const o={...t};t.height=n.height,t.width=n.width;const a=this.size;return this.element.width=a.width=r.width,this.element.height=a.height=r.height,this.container.started&&e.particles.setResizeFactor({width:t.width/o.width,height:t.height/o.height}),!0}setPointerEvents(e){this.element&&(this._pointerEvents=e,this._repairStyle())}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>Xu(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,t=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),t&&await e.refresh()}}var Qo;(function(i){i.canvas="canvas",i.parent="parent",i.window="window"})(Qo||(Qo={}));function Ei(i,e,t,n,s){if(n){let r={passive:!0};b0(s)?r.capture=s:s!==void 0&&(r=s),i.addEventListener(e,t,r)}else{const r=s;i.removeEventListener(e,t,r)}}class BM{constructor(e){this.container=e,this._doMouseTouchClick=t=>{const n=this.container,s=n.actualOptions;if(this._canPush){const r=n.interactivity.mouse,o=r.position;if(!o)return;r.clickPosition={...o},r.clickTime=new Date().getTime();const a=s.interactivity.events.onClick;Si(a.mode,l=>this.container.handleClickMode(l))}t.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),Ky)},this._handleThemeChange=t=>{const n=t,s=this.container,r=s.options,o=r.defaultThemes,a=n.matches?o.dark:o.light;r.themes.find(c=>c.name===a)?.default.auto&&s.loadTheme(a)},this._handleVisibilityChange=()=>{const t=this.container,n=t.actualOptions;this._mouseTouchFinish(),n.pauseOnBlur&&(document?.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const t=async()=>{await this.container.canvas?.windowResize()};this._resizeTimeout=setTimeout(()=>{t()},this.container.actualOptions.interactivity.events.resize.delay*Dn)},this._manageInteractivityListeners=(t,n)=>{const s=this._handlers,r=this.container,o=r.actualOptions,a=r.interactivity.element;if(!a)return;const l=a,c=r.canvas;c.setPointerEvents(l===c.element?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(Ei(a,ao,s.mouseMove,n),Ei(a,My,s.touchStart,n),Ei(a,by,s.touchMove,n),o.interactivity.events.onClick.enable?(Ei(a,qp,s.touchEndClick,n),Ei(a,xy,s.mouseUp,n),Ei(a,vy,s.mouseDown,n)):Ei(a,qp,s.touchEnd,n),Ei(a,t,s.mouseLeave,n),Ei(a,Sy,s.touchCancel,n))},this._manageListeners=t=>{const n=this._handlers,s=this.container,r=s.actualOptions,o=r.interactivity.detectsOn,a=s.canvas.element;let l=lh;o===Qo.window?(s.interactivity.element=window,l=yy):o===Qo.parent&&a?s.interactivity.element=a.parentElement??a.parentNode:s.interactivity.element=a,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(l,t),document&&Ei(document,Ey,n.visibilityChange,t,!1)},this._manageMediaMatch=t=>{const n=this._handlers,s=E0("(prefers-color-scheme: dark)");if(s){if(s.addEventListener!==void 0){Ei(s,"change",n.themeChange,t);return}s.addListener!==void 0&&(t?s.addListener(n.oldThemeChange):s.removeListener(n.oldThemeChange))}},this._manageResize=t=>{const n=this._handlers,s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){Ei(window,wy,n.resize,t);return}const o=s.canvas.element;this._resizeObserver&&!t?(o&&this._resizeObserver.unobserve(o),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&o&&(this._resizeObserver=new ResizeObserver(a=>{a.find(c=>c.target===o)&&this._handleWindowResize()}),this._resizeObserver.observe(o))},this._mouseDown=()=>{const{interactivity:t}=this.container;if(!t)return;const{mouse:n}=t;n.clicking=!0,n.downPosition=n.position},this._mouseTouchClick=t=>{const n=this.container,s=n.actualOptions,{mouse:r}=n.interactivity;r.inside=!0;let o=!1;const a=r.position;if(!(!a||!s.interactivity.events.onClick.enable)){for(const l of n.plugins.values())if(l.clickPositionValid&&(o=l.clickPositionValid(a),o))break;o||this._doMouseTouchClick(t),r.clicking=!1}},this._mouseTouchFinish=()=>{const t=this.container.interactivity;if(!t)return;const n=t.mouse;delete n.position,delete n.clickPosition,delete n.downPosition,t.status=lh,n.inside=!1,n.clicking=!1},this._mouseTouchMove=t=>{const n=this.container,s=n.actualOptions,r=n.interactivity,o=n.canvas.element;if(!r?.element)return;r.mouse.inside=!0;let a;if(t.type.startsWith("pointer")){this._canPush=!0;const c=t;if(r.element===window){if(o){const u=o.getBoundingClientRect();a={x:c.clientX-u.left,y:c.clientY-u.top}}}else if(s.interactivity.detectsOn===Qo.parent){const u=c.target,d=c.currentTarget;if(u&&d&&o){const f=u.getBoundingClientRect(),h=d.getBoundingClientRect(),p=o.getBoundingClientRect();a={x:c.offsetX+Ln*f.left-(h.left+p.left),y:c.offsetY+Ln*f.top-(h.top+p.top)}}else a={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY}}else c.target===o&&(a={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY})}else if(this._canPush=t.type!=="touchmove",o){const c=t,u=c.touches[c.touches.length-y0],d=o.getBoundingClientRect();a={x:u.clientX-(d.left??tu),y:u.clientY-(d.top??tu)}}const l=n.retina.pixelRatio;a&&(a.x*=l,a.y*=l),r.mouse.position=a,r.status=ao},this._touchEnd=t=>{const n=t,s=Array.from(n.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{const n=t,s=Array.from(n.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{const n=t,s=Array.from(n.changedTouches);for(const r of s)this._touches.set(r.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var Xn;(function(i){i.configAdded="configAdded",i.containerInit="containerInit",i.particlesSetup="particlesSetup",i.containerStarted="containerStarted",i.containerStopped="containerStopped",i.containerDestroyed="containerDestroyed",i.containerPaused="containerPaused",i.containerPlay="containerPlay",i.containerBuilt="containerBuilt",i.particleAdded="particleAdded",i.particleDestroyed="particleDestroyed",i.particleRemoved="particleRemoved"})(Xn||(Xn={}));class Nn{constructor(){this.value=""}static create(e,t){const n=new Nn;return n.load(e),t!==void 0&&(_r(t)||ys(t)?n.load({value:t}):n.load(t)),n}load(e){ue(e)||ue(e.value)||(this.value=e.value)}}class VM{constructor(){this.color=new Nn,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){ue(e)||(e.color!==void 0&&(this.color=Nn.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class GM{constructor(){this.opacity=1}load(e){ue(e)||(e.color!==void 0&&(this.color=Nn.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.opacity!==void 0&&(this.opacity=e.opacity))}}class HM{constructor(){this.composite="destination-out",this.cover=new GM,this.enable=!1}load(e){if(!ue(e)){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const t=e.cover,n=_r(e.cover)?{color:e.cover}:e.cover;this.cover.load(t.color!==void 0||t.image!==void 0?t:{color:n})}e.enable!==void 0&&(this.enable=e.enable)}}}class WM{constructor(){this.enable=!0,this.zIndex=0}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class XM{constructor(){this.enable=!1,this.mode=[]}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}var ma;(function(i){i.circle="circle",i.rectangle="rectangle"})(ma||(ma={}));class dm{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=ma.circle}load(e){ue(e)||(e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type))}}class qM{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class YM{constructor(){this.enable=!1,this.mode=[],this.parallax=new qM}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class $M{constructor(){this.delay=.5,this.enable=!0}load(e){ue(e)||(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class ZM{constructor(){this.onClick=new XM,this.onDiv=new dm,this.onHover=new YM,this.resize=new $M}load(e){if(ue(e))return;this.onClick.load(e.onClick);const t=e.onDiv;t!==void 0&&(this.onDiv=Si(t,n=>{const s=new dm;return s.load(n),s})),this.onHover.load(e.onHover),this.resize.load(e.resize)}}class KM{constructor(e,t){this._engine=e,this._container=t}load(e){if(ue(e)||!this._container)return;const t=this._engine.interactors.get(this._container);if(t)for(const n of t)n.loadModeOptions&&n.loadModeOptions(this,e)}}class N0{constructor(e,t){this.detectsOn=Qo.window,this.events=new ZM,this.modes=new KM(e,t)}load(e){if(ue(e))return;const t=e.detectsOn;t!==void 0&&(this.detectsOn=t),this.events.load(e.events),this.modes.load(e.modes)}}class jM{load(e){ue(e)||(e.position&&(this.position={x:e.position.x??om,y:e.position.y??om,mode:e.position.mode??da.percent}),e.options&&(this.options=Fn({},e.options)))}}var Yr;(function(i){i.screen="screen",i.canvas="canvas"})(Yr||(Yr={}));class JM{constructor(){this.maxWidth=1/0,this.options={},this.mode=Yr.canvas}load(e){ue(e)||(ue(e.maxWidth)||(this.maxWidth=e.maxWidth),ue(e.mode)||(e.mode===Yr.screen?this.mode=Yr.screen:this.mode=Yr.canvas),ue(e.options)||(this.options=Fn({},e.options)))}}var Qs;(function(i){i.any="any",i.dark="dark",i.light="light"})(Qs||(Qs={}));class QM{constructor(){this.auto=!1,this.mode=Qs.any,this.value=!1}load(e){ue(e)||(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class eb{constructor(){this.name="",this.default=new QM}load(e){ue(e)||(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=Fn({},e.options)))}}class Xd{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){ue(e)||(e.count!==void 0&&(this.count=gt(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=gt(e.speed)),e.decay!==void 0&&(this.decay=gt(e.decay)),e.delay!==void 0&&(this.delay=gt(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class qd extends Xd{constructor(){super(),this.mode=qr.auto,this.startValue=Jo.random}load(e){super.load(e),!ue(e)&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class qu extends Xd{constructor(){super(),this.offset=0,this.sync=!0}load(e){super.load(e),!ue(e)&&e.offset!==void 0&&(this.offset=gt(e.offset))}}class tb{constructor(){this.h=new qu,this.s=new qu,this.l=new qu}load(e){ue(e)||(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class yl extends Nn{constructor(){super(),this.animation=new tb}static create(e,t){const n=new yl;return n.load(e),t!==void 0&&(_r(t)||ys(t)?n.load({value:t}):n.load(t)),n}load(e){if(super.load(e),ue(e))return;const t=e.animation;t!==void 0&&(t.enable!==void 0?this.animation.h.load(t):this.animation.load(e.animation))}}var ea;(function(i){i.absorb="absorb",i.bounce="bounce",i.destroy="destroy"})(ea||(ea={}));class nb{constructor(){this.speed=2}load(e){ue(e)||e.speed!==void 0&&(this.speed=e.speed)}}class ib{constructor(){this.enable=!0,this.retries=0}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class po{constructor(){this.value=0}load(e){ue(e)||ue(e.value)||(this.value=gt(e.value))}}class sb extends po{constructor(){super(),this.animation=new Xd}load(e){if(super.load(e),ue(e))return;const t=e.animation;t!==void 0&&this.animation.load(t)}}class k0 extends sb{constructor(){super(),this.animation=new qd}load(e){super.load(e)}}class pm extends po{constructor(){super(),this.value=1}}class z0{constructor(){this.horizontal=new pm,this.vertical=new pm}load(e){ue(e)||(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class rb{constructor(){this.absorb=new nb,this.bounce=new z0,this.enable=!1,this.maxSpeed=50,this.mode=ea.bounce,this.overlap=new ib}load(e){ue(e)||(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=gt(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class ob{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(ue(e))return;const t=e.options;if(t!==void 0)for(const n in t){const s=t[n];s&&(this.options[n]=Fn(this.options[n]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class ab{constructor(){this.offset=0,this.value=90}load(e){ue(e)||(e.offset!==void 0&&(this.offset=gt(e.offset)),e.value!==void 0&&(this.value=gt(e.value)))}}class lb{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(!ue(e)&&(e.distance!==void 0&&(this.distance=gt(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){const t=e.rotate.x;t!==void 0&&(this.rotate.x=t);const n=e.rotate.y;n!==void 0&&(this.rotate.y=n)}}}class cb{constructor(){this.x=50,this.y=50,this.mode=da.percent,this.radius=0}load(e){ue(e)||(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class ub{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){ue(e)||(e.acceleration!==void 0&&(this.acceleration=gt(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=gt(e.maxSpeed)))}}class fb{constructor(){this.clamp=!0,this.delay=new po,this.enable=!1,this.options={}}load(e){ue(e)||(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=Fn(this.options,e.options)))}}class hb{load(e){ue(e)||(e.color!==void 0&&(this.color=Nn.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class db{constructor(){this.enable=!1,this.length=10,this.fill=new hb}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}}var Jt;(function(i){i.bounce="bounce",i.none="none",i.out="out",i.destroy="destroy",i.split="split"})(Jt||(Jt={}));class pb{constructor(){this.default=Jt.out}load(e){ue(e)||(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class mb{constructor(){this.acceleration=0,this.enable=!1}load(e){ue(e)||(e.acceleration!==void 0&&(this.acceleration=gt(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=Fn({},e.position)))}}class gb{constructor(){this.angle=new ab,this.attract=new lb,this.center=new cb,this.decay=0,this.distance={},this.direction=_n.none,this.drift=0,this.enable=!1,this.gravity=new ub,this.path=new fb,this.outModes=new pb,this.random=!1,this.size=!1,this.speed=2,this.spin=new mb,this.straight=!1,this.trail=new db,this.vibrate=!1,this.warp=!1}load(e){if(ue(e))return;this.angle.load(vr(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=gt(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=vr(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=gt(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const t=e.outModes;t!==void 0&&(Ho(t)?this.outModes.load(t):this.outModes.load({default:t})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=gt(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class _b extends qd{constructor(){super(),this.destroy=lo.none,this.speed=2}load(e){super.load(e),!ue(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class vb extends k0{constructor(){super(),this.animation=new _b,this.value=1}load(e){if(ue(e))return;super.load(e);const t=e.animation;t!==void 0&&this.animation.load(t)}}class xb{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(ue(e))return;e.enable!==void 0&&(this.enable=e.enable);const t=e.width;t!==void 0&&(this.width=t);const n=e.height;n!==void 0&&(this.height=n)}}var Ml;(function(i){i.delete="delete",i.wait="wait"})(Ml||(Ml={}));class yb{constructor(){this.mode=Ml.delete,this.value=0}load(e){ue(e)||(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class Mb{constructor(){this.density=new xb,this.limit=new yb,this.value=0}load(e){ue(e)||(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}}class bb{constructor(){this.blur=0,this.color=new Nn,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){ue(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=Nn.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}class Sb{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(ue(e))return;const t=e.options;if(t!==void 0)for(const n in t){const s=t[n];s&&(this.options[n]=Fn(this.options[n]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class wb extends qd{constructor(){super(),this.destroy=lo.none,this.speed=5}load(e){super.load(e),!ue(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class Eb extends k0{constructor(){super(),this.animation=new wb,this.value=3}load(e){if(super.load(e),ue(e))return;const t=e.animation;t!==void 0&&this.animation.load(t)}}class mm{constructor(){this.width=0}load(e){ue(e)||(e.color!==void 0&&(this.color=yl.create(this.color,e.color)),e.width!==void 0&&(this.width=gt(e.width)),e.opacity!==void 0&&(this.opacity=gt(e.opacity)))}}class Tb extends po{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),!ue(e)&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class Ab{constructor(e,t){this._engine=e,this._container=t,this.bounce=new z0,this.collisions=new rb,this.color=new yl,this.color.value="#fff",this.effect=new ob,this.groups={},this.move=new gb,this.number=new Mb,this.opacity=new vb,this.reduceDuplicates=!1,this.shadow=new bb,this.shape=new Sb,this.size=new Eb,this.stroke=new mm,this.zIndex=new Tb}load(e){if(ue(e))return;if(e.groups!==void 0)for(const n of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,n))continue;const s=e.groups[n];s!==void 0&&(this.groups[n]=Fn(this.groups[n]??{},s))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(yl.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=Fn({},e.interactivity));const t=e.stroke;if(t&&(this.stroke=Si(t,n=>{const s=new mm;return s.load(n),s})),this._container){const n=this._engine.updaters.get(this._container);if(n)for(const r of n)r.loadOptions&&r.loadOptions(this,e);const s=this._engine.interactors.get(this._container);if(s)for(const r of s)r.loadParticlesOptions&&r.loadParticlesOptions(this,e)}}}function B0(i,...e){for(const t of e)i.load(t)}function V0(i,e,...t){const n=new Ab(i,e);return B0(n,...t),n}class Cb{constructor(e,t){this._findDefaultTheme=n=>this.themes.find(s=>s.default.value&&s.default.mode===n)??this.themes.find(s=>s.default.value&&s.default.mode===Qs.any),this._importPreset=n=>{this.load(this._engine.getPreset(n))},this._engine=e,this._container=t,this.autoPlay=!0,this.background=new VM,this.backgroundMask=new HM,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new WM,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new N0(e,t),this.manualParticles=[],this.particles=V0(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(e){if(ue(e))return;e.preset!==void 0&&Si(e.preset,o=>this._importPreset(o)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.clear!==void 0&&(this.clear=e.clear),e.key!==void 0&&(this.key=e.key),e.name!==void 0&&(this.name=e.name),e.delay!==void 0&&(this.delay=gt(e.delay));const t=e.detectRetina;t!==void 0&&(this.detectRetina=t),e.duration!==void 0&&(this.duration=gt(e.duration));const n=e.fpsLimit;n!==void 0&&(this.fpsLimit=n),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const s=e.fullScreen;b0(s)?this.fullScreen.enable=s:this.fullScreen.load(s),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(o=>{const a=new jM;return a.load(o),a})),this.particles.load(e.particles),this.style=Fn(this.style,e.style),this._engine.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const r=this._engine.interactors.get(this._container);if(r)for(const o of r)o.loadOptions&&o.loadOptions(this,e);if(e.responsive!==void 0)for(const o of e.responsive){const a=new JM;a.load(o),this.responsive.push(a)}if(this.responsive.sort((o,a)=>o.maxWidth-a.maxWidth),e.themes!==void 0)for(const o of e.themes){const a=this.themes.find(l=>l.name===o.name);if(a)a.load(o);else{const l=new eb;l.load(o),this.themes.push(l)}}this.defaultThemes.dark=this._findDefaultTheme(Qs.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(Qs.light)?.name}setResponsive(e,t,n){this.load(n);const s=this.responsive.find(r=>r.mode===Yr.screen&&screen?r.maxWidth>screen.availWidth:r.maxWidth*t>e);return this.load(s?.options),s?.maxWidth}setTheme(e){if(e){const t=this.themes.find(n=>n.name===e);t&&this.load(t.options)}else{const t=E0("(prefers-color-scheme: dark)"),n=t?.matches,s=this._findDefaultTheme(n?Qs.dark:Qs.light);s&&this.load(s.options)}}}var ga;(function(i){i.external="external",i.particles="particles"})(ga||(ga={}));class Rb{constructor(e,t){this.container=t,this._engine=e,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(e){for(const t of this._externalInteractors)t.isEnabled()&&t.interact(e)}handleClickMode(e){for(const t of this._externalInteractors)t.handleClickMode?.(e)}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case ga.external:this._externalInteractors.push(e);break;case ga.particles:this._particleInteractors.push(e);break}e.init()}}particlesInteract(e,t){for(const n of this._externalInteractors)n.clear(e,t);for(const n of this._particleInteractors)n.isEnabled(e)&&n.interact(e,t)}reset(e){for(const t of this._externalInteractors)t.isEnabled()&&t.reset(e);for(const t of this._particleInteractors)t.isEnabled(e)&&t.reset(e)}}var Ji;(function(i){i.normal="normal",i.inside="inside",i.outside="outside"})(Ji||(Ji={}));function Pb(i,e,t,n){const s=e.options[i];if(s)return Fn({close:e.close,fill:e.fill},Ui(s,t,n))}function Db(i,e,t,n){const s=e.options[i];if(s)return Fn({close:e.close,fill:e.fill},Ui(s,t,n))}function gm(i){if(!Yt(i.outMode,i.checkModes))return;const e=i.radius*Ln;i.coord>i.maxCoord-e?i.setCb(-i.radius):i.coord<e&&i.setCb(i.radius)}class Lb{constructor(e,t){this.container=t,this._calcPosition=(n,s,r,o=$p)=>{for(const p of n.plugins.values()){const _=p.particlePosition!==void 0?p.particlePosition(s,this):void 0;if(_)return ui.create(_.x,_.y,r)}const a=n.canvas.size,l=uM({size:a,position:s}),c=ui.create(l.x,l.y,r),u=this.getRadius(),d=this.options.move.outModes,f=p=>{gm({outMode:p,checkModes:[Jt.bounce],coord:c.x,maxCoord:n.canvas.size.width,setCb:_=>c.x+=_,radius:u})},h=p=>{gm({outMode:p,checkModes:[Jt.bounce],coord:c.y,maxCoord:n.canvas.size.height,setCb:_=>c.y+=_,radius:u})};return f(d.left??d.default),f(d.right??d.default),h(d.top??d.default),h(d.bottom??d.default),this._checkOverlap(c,o)?this._calcPosition(n,void 0,r,o+Hy):c},this._calculateVelocity=()=>{const n=cM(this.direction),s=n.copy(),r=this.options.move;if(r.direction===_n.inside||r.direction===_n.outside)return s;const o=hr(Ne(r.angle.value)),a=hr(Ne(r.angle.offset)),l={left:a-o*rn,right:a+o*rn};return r.straight||(s.angle+=vi(gt(l.left,l.right))),r.random&&typeof r.speed=="number"&&(s.length*=Tt()),s},this._checkOverlap=(n,s=$p)=>{const r=this.options.collisions,o=this.getRadius();if(!r.enable)return!1;const a=r.overlap;if(a.enable)return!1;const l=a.retries;if(l>=Wy&&s>l)throw new Error(`${zi} particle is overlapping and can't be placed`);return!!this.container.particles.find(c=>yi(n,c.position)<o+c.getRadius())},this._getRollColor=n=>{if(!n||!this.roll||!this.backColor&&!this.roll.alter)return n;const s=this.roll.horizontal&&this.roll.vertical?Ln*nm:nm,r=this.roll.horizontal?Math.PI*rn:nu;return Math.floor(((this.roll.angle??nu)+r)/(Math.PI/s))%Ln?this.backColor?this.backColor:this.roll.alter?NM(n,this.roll.alter.type,this.roll.alter.value):n:n},this._initPosition=n=>{const s=this.container,r=Ne(this.options.zIndex.value);this.position=this._calcPosition(s,n,Bi(r,Xy,s.zLayers)),this.initialPosition=this.position.copy();const o=s.canvas.size;switch(this.moveCenter={...P0(this.options.move.center,o),radius:this.options.move.center.radius??qy,mode:this.options.move.center.mode??da.percent},this.direction=lM(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case _n.inside:this.outType=Ji.inside;break;case _n.outside:this.outType=Ji.outside;break}this.offset=pn.origin},this._engine=e}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const t=this.container,n=this.pathGenerator;t.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(const r of t.plugins.values())r.particleDestroyed?.(this,e);for(const r of t.particles.updaters)r.particleDestroyed?.(this,e);n?.reset(this),this._engine.dispatchEvent(Xn.particleDestroyed,{container:this.container,data:{particle:this}})}draw(e){const t=this.container,n=t.canvas;for(const s of t.plugins.values())n.drawParticlePlugin(s,this,e);n.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??fm(this.color))}getMass(){return this.getRadius()**Ds*Math.PI*rn}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??fm(this.strokeColor))}init(e,t,n,s){const r=this.container,o=this._engine;this.id=e,this.group=s,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=Ji.normal,this.ignoresResizeRatio=!0;const a=r.retina.pixelRatio,l=r.actualOptions,c=V0(this._engine,r,l.particles),{reduceDuplicates:u}=c,d=c.effect.type,f=c.shape.type;this.effect=Ui(d,this.id,u),this.shape=Ui(f,this.id,u);const h=c.effect,p=c.shape;if(n){if(n.effect?.type){const E=n.effect.type,x=Ui(E,this.id,u);x&&(this.effect=x,h.load(n.effect))}if(n.shape?.type){const E=n.shape.type,x=Ui(E,this.id,u);x&&(this.shape=x,p.load(n.shape))}}if(this.effect===ha){const E=[...this.container.effectDrawers.keys()];this.effect=E[Math.floor(Tt()*E.length)]}if(this.shape===ha){const E=[...this.container.shapeDrawers.keys()];this.shape=E[Math.floor(Tt()*E.length)]}this.effectData=Pb(this.effect,h,this.id,u),this.shapeData=Db(this.shape,p,this.id,u),c.load(n);const _=this.effectData;_&&c.load(_.particles);const m=this.shapeData;m&&c.load(m.particles);const g=new N0(o,r);g.load(r.actualOptions.interactivity),g.load(c.interactivity),this.interactivity=g,this.effectFill=_?.fill??c.effect.fill,this.effectClose=_?.close??c.effect.close,this.shapeFill=m?.fill??c.shape.fill,this.shapeClose=m?.close??c.shape.close,this.options=c;const v=this.options.move.path;this.pathDelay=Ne(v.delay.value)*Dn,v.generator&&(this.pathGenerator=this._engine.getPathGenerator(v.generator),this.pathGenerator&&r.addPath(v.generator,this.pathGenerator)&&this.pathGenerator.init(r)),r.retina.initParticle(this),this.size=R0(this.options.size,a),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(t),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=x0-Ne(this.options.move.decay);const M=r.particles;M.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/r.zLayers,this.sides=24;let y=r.effectDrawers.get(this.effect);y||(y=this._engine.getEffectDrawer(this.effect),y&&r.effectDrawers.set(this.effect,y)),y?.loadEffect&&y.loadEffect(this);let w=r.shapeDrawers.get(this.shape);w||(w=this._engine.getShapeDrawer(this.shape),w&&r.shapeDrawers.set(this.shape,w)),w?.loadShape&&w.loadShape(this);const T=w?.getSidesCount;T&&(this.sides=T(this)),this.spawning=!1,this.shadowColor=ji(this._engine,this.options.shadow.color);for(const E of M.updaters)E.init(this);for(const E of M.movers)E.init?.(this);y?.particleInit?.(r,this),w?.particleInit?.(r,this);for(const E of r.plugins.values())E.particleCreated?.(this)}isInsideCanvas(){const e=this.getRadius(),t=this.container.canvas.size,n=this.position;return n.x>=-e&&n.y>=-e&&n.y<=t.height+e&&n.x<=t.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset?.(this)}}class Ib{constructor(e,t){this.position=e,this.particle=t}}var ta;(function(i){i.circle="circle",i.rectangle="rectangle"})(ta||(ta={}));class G0{constructor(e,t,n){this.position={x:e,y:t},this.type=n}}class Un extends G0{constructor(e,t,n){super(e,t,ta.circle),this.radius=n}contains(e){return yi(e,this.position)<=this.radius}intersects(e){const t=this.position,n=e.position,s={x:Math.abs(n.x-t.x),y:Math.abs(n.y-t.y)},r=this.radius;if(e instanceof Un||e.type===ta.circle){const o=e,a=r+o.radius,l=Math.sqrt(s.x**Ds+s.y**Ds);return a>l}else if(e instanceof Qi||e.type===ta.rectangle){const o=e,{width:a,height:l}=o.size;return Math.pow(s.x-a,Ds)+Math.pow(s.y-l,Ds)<=r**Ds||s.x<=r+a&&s.y<=r+l||s.x<=a||s.y<=l}return!1}}class Qi extends G0{constructor(e,t,n,s){super(e,t,ta.rectangle),this.size={height:s,width:n}}contains(e){const t=this.size.width,n=this.size.height,s=this.position;return e.x>=s.x&&e.x<=s.x+t&&e.y>=s.y&&e.y<=s.y+n}intersects(e){if(e instanceof Un)return e.intersects(this);const t=this.size.width,n=this.size.height,s=this.position,r=e.position,o=e instanceof Qi?e.size:{width:0,height:0},a=o.width,l=o.height;return r.x<s.x+t&&r.x+a>s.x&&r.y<s.y+n&&r.y+l>s.y}}class su{constructor(e,t){this.rectangle=e,this.capacity=t,this._subdivide=()=>{const{x:n,y:s}=this.rectangle.position,{width:r,height:o}=this.rectangle.size,{capacity:a}=this;for(let l=0;l<Cy;l++){const c=l%Ln;this._subs.push(new su(new Qi(n+r*rn*c,s+o*rn*(Math.round(l*rn)-c),r*rn,o*rn),a))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(t=>t.insert(e))):!1}query(e,t){const n=[];if(!e.intersects(this.rectangle))return[];for(const s of this._points)!e.contains(s.position)&&yi(e.position,s.position)>s.particle.getRadius()&&(!t||t(s.particle))||n.push(s.particle);if(this._divided)for(const s of this._subs)n.push(...s.query(e,t));return n}queryCircle(e,t,n){return this.query(new Un(e.x,e.y,t),n)}queryRectangle(e,t,n){return this.query(new Qi(e.x,e.y,t.width,t.height),n)}}const _m=i=>{const{height:e,width:t}=i;return new Qi(im*t,im*e,sm*t,sm*e)};class Ob{constructor(e,t){this._addToPool=(...s)=>{this._pool.push(...s)},this._applyDensity=(s,r,o,a)=>{const l=s.number;if(!s.number.density?.enable){o===void 0?this._limit=l.limit.value:(a?.number.limit?.value??l.limit.value)&&this._groupLimits.set(o,a?.number.limit?.value??l.limit.value);return}const c=this._initDensityFactor(l.density),u=l.value,d=l.limit.value>rm?l.limit.value:u,f=Math.min(u,d)*c+r,h=Math.min(this.count,this.filter(p=>p.group===o).length);o===void 0?this._limit=l.limit.value*c:this._groupLimits.set(o,l.limit.value*c),h<f?this.push(Math.abs(f-h),void 0,s,o):h>f&&this.removeQuantity(h-f,o)},this._initDensityFactor=s=>{const r=this._container;if(!r.canvas.element||!s.enable)return Zy;const o=r.canvas.element,a=r.retina.pixelRatio;return o.width*o.height/(s.height*s.width*a**Ds)},this._pushParticle=(s,r,o,a)=>{try{let l=this._pool.pop();l||(l=new Lb(this._engine,this._container)),l.init(this._nextId,s,r,o);let c=!0;return a&&(c=a(l)),c?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent(Xn.particleAdded,{container:this._container,data:{particle:l}}),l):void 0}catch(l){co().warning(`${zi} adding particle: ${l}`)}},this._removeParticle=(s,r,o)=>{const a=this._array[s];if(!a||a.group!==r)return!1;const l=this._zArray.indexOf(a);return this._array.splice(s,iu),this._zArray.splice(l,iu),a.destroy(o),this._engine.dispatchEvent(Xn.particleRemoved,{container:this._container,data:{particle:a}}),this._addToPool(a),!0},this._engine=e,this._container=t,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new Rb(e,t),this._pluginsInitialized=!1;const n=t.canvas.size;this.quadTree=new su(_m(n),Zp),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const e=this._container;e.actualOptions.manualParticles.forEach(n=>this.addParticle(n.position?P0(n.position,e.canvas.size):void 0,n.options))}addParticle(e,t,n,s){const r=this._container.actualOptions.particles.number.limit.mode,o=n===void 0?this._limit:this._groupLimits.get(n)??this._limit,a=this.count;if(o>rm)switch(r){case Ml.delete:{const l=a+Yy-o;l>$y&&this.removeQuantity(l);break}case Ml.wait:if(a>=o)return;break}return this._pushParticle(e,t,n,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(e){const t=this._container,n=t.canvas;n.clear(),this.update(e);for(const s of t.plugins.values())n.drawPlugin(s,e);for(const s of this._zArray)s.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}get(e){return this._array[e]}handleClickMode(e){this._interactionManager.handleClickMode(e)}async init(){const e=this._container,t=e.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let n=!1;for(const s of e.plugins.values())if(n=s.particlesInitialization?.()??n,n)break;if(this.addManualParticles(),!n){const s=t.particles,r=s.groups;for(const o in r){const a=r[o];for(let l=this.count,c=0;c<a.number?.value&&l<s.number.value;l++,c++)this.addParticle(void 0,a,o)}for(let o=this.count;o<s.number.value;o++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const e=this._container;this.movers=await this._engine.getMovers(e,!0),this.updaters=await this._engine.getUpdaters(e,!0),await this._interactionManager.init();for(const t of e.pathGenerators.values())t.init(e)}push(e,t,n,s){for(let r=0;r<e;r++)this.addParticle(t?.position,n,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(e,t,n){this.removeAt(this._array.indexOf(e),void 0,t,n)}removeAt(e,t=Ay,n,s){if(e<hh||e>this.count)return;let r=0;for(let o=e;r<t&&o<this.count;o++)this._removeParticle(o,n,s)&&(o--,r++)}removeQuantity(e,t){this.removeAt(hh,e,t)}setDensity(){const e=this._container.actualOptions,t=e.particles.groups,n=e.manualParticles.length;for(const s in t)this._applyDensity(t[s],n,s);this._applyDensity(e.particles,n)}setLastZIndex(e){this._lastZIndex=e,this._needsSort=this._needsSort||this._lastZIndex<e}setResizeFactor(e){this._resizeFactor=e}update(e){const t=this._container,n=new Set;this.quadTree=new su(_m(t.canvas.size),Zp);for(const r of t.pathGenerators.values())r.update();for(const r of t.plugins.values())r.update?.(e);const s=this._resizeFactor;for(const r of this._array){s&&!r.ignoresResizeRatio&&(r.position.x*=s.width,r.position.y*=s.height,r.initialPosition.x*=s.width,r.initialPosition.y*=s.height),r.ignoresResizeRatio=!1,this._interactionManager.reset(r);for(const o of this._container.plugins.values()){if(r.destroyed)break;o.particleUpdate?.(r,e)}for(const o of this.movers)o.isEnabled(r)&&o.move(r,e);if(r.destroyed){n.add(r);continue}this.quadTree.insert(new Ib(r.getPosition(),r))}if(n.size){const r=o=>!n.has(o);this._array=this.filter(r),this._zArray=this._zArray.filter(r);for(const o of n)this._engine.dispatchEvent(Xn.particleRemoved,{container:this._container,data:{particle:o}});this._addToPool(...n)}this._interactionManager.externalInteract(e);for(const r of this._array){for(const o of this.updaters)o.update(r,e);!r.destroyed&&!r.spawning&&this._interactionManager.particlesInteract(r,e)}if(delete this._resizeFactor,this._needsSort){const r=this._zArray;r.sort((o,a)=>a.position.z-o.position.z||o.id-a.id),this._lastZIndex=r[r.length-y0].position.z,this._needsSort=!1}}}class Ub{constructor(e){this.container=e,this.pixelRatio=Kp,this.reduceFactor=jp}init(){const e=this.container,t=e.actualOptions;this.pixelRatio=!t.detectRetina||uo()?Kp:devicePixelRatio,this.reduceFactor=jp;const n=this.pixelRatio,s=e.canvas;if(s.element){const a=s.element;s.size.width=a.offsetWidth*n,s.size.height=a.offsetHeight*n}const r=t.particles,o=r.move;this.maxSpeed=Ne(o.gravity.maxSpeed)*n,this.sizeAnimationSpeed=Ne(r.size.animation.speed)*n}initParticle(e){const t=e.options,n=this.pixelRatio,s=t.move,r=s.distance,o=e.retina;o.moveDrift=Ne(s.drift)*n,o.moveSpeed=Ne(s.speed)*n,o.sizeAnimationSpeed=Ne(t.size.animation.speed)*n;const a=o.maxDistance;a.horizontal=r.horizontal!==void 0?r.horizontal*n:void 0,a.vertical=r.vertical!==void 0?r.vertical*n:void 0,o.maxSpeed=Ne(s.gravity.maxSpeed)*n}}function Bt(i){return i&&!i.destroyed}function Fb(i,e=ku,t=!1){return{value:i,factor:t?ku/e:ku*i/Dn}}function Mo(i,e,...t){const n=new Cb(i,e);return B0(n,...t),n}class Nb{constructor(e,t,n){this._intersectionManager=s=>{if(!(!Bt(this)||!this.actualOptions.pauseOnOutsideViewport))for(const r of s)r.target===this.interactivity.element&&(r.isIntersecting?this.play():this.pause())},this._nextFrame=s=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&s<this._lastFrameTime+Dn/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=s;const r=Fb(s-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(r.value),this._lastFrameTime=s,r.value>Dn){this.draw(!1);return}if(this.particles.draw(r),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(r){co().error(`${zi} in animation loop`,r)}},this._engine=e,this.id=Symbol(t),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=n,this._initialSourceOptions=n,this.retina=new Ub(this),this.canvas=new zM(this,this._engine),this.particles=new Ob(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=Mo(this._engine,this),this.actualOptions=Mo(this._engine,this),this._eventListeners=new BM(this),this._intersectionObserver=mM(s=>this._intersectionManager(s)),this._engine.dispatchEvent(Xn.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&Bt(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!Bt(this))return;const t=this.interactivity.element;if(!t)return;const n=(d,f,h)=>{if(!Bt(this))return;const p=this.retina.pixelRatio,_={x:f.x*p,y:f.y*p},m=this.particles.quadTree.queryCircle(_,h*p);e(d,m)},s=d=>{if(!Bt(this))return;const f=d,h={x:f.offsetX||f.clientX,y:f.offsetY||f.clientY};n(d,h,Uy)},r=()=>{Bt(this)&&(c=!0,u=!1)},o=()=>{Bt(this)&&(u=!0)},a=d=>{if(Bt(this)){if(c&&!u){const f=d;let h=f.touches[f.touches.length-tm];if(!h&&(h=f.changedTouches[f.changedTouches.length-tm],!h))return;const p=this.canvas.element,_=p?p.getBoundingClientRect():void 0,m={x:h.clientX-(_?_.left:tu),y:h.clientY-(_?_.top:tu)};n(d,m,Math.max(h.radiusX,h.radiusY))}c=!1,u=!1}},l=()=>{Bt(this)&&(c=!1,u=!1)};let c=!1,u=!1;this._clickHandlers.set("click",s),this._clickHandlers.set("touchstart",r),this._clickHandlers.set("touchmove",o),this._clickHandlers.set("touchend",a),this._clickHandlers.set("touchcancel",l);for(const[d,f]of this._clickHandlers)t.addEventListener(d,f)}addLifeTime(e){this._lifeTime+=e}addPath(e,t,n=!1){return!Bt(this)||!n&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,t),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(Bt(this)){for(const[e,t]of this._clickHandlers)this.interactivity.element?.removeEventListener(e,t);this._clickHandlers.clear()}}destroy(e=!0){if(Bt(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(const t of this.effectDrawers.values())t.destroy?.(this);for(const t of this.shapeDrawers.values())t.destroy?.(this);for(const t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(const t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);if(this._engine.clearPlugins(this),this.destroyed=!0,e){const t=this._engine.items,n=t.findIndex(s=>s===this);n>=Fy&&t.splice(n,v0)}this._engine.dispatchEvent(Xn.containerDestroyed,{container:this})}}draw(e){if(!Bt(this))return;let t=e;const n=s=>{t&&(this._lastFrameTime=void 0,t=!1),this._nextFrame(s)};this._drawAnimationFrame=oM(s=>n(s))}async export(e,t={}){for(const n of this.plugins.values()){if(!n.export)continue;const s=await n.export(e,t);if(s.supported)return s.blob}co().error(`${zi} - Export plugin with type ${e} not found`)}handleClickMode(e){if(Bt(this)){this.particles.handleClickMode(e);for(const t of this.plugins.values())t.handleClickMode?.(e)}}async init(){if(!Bt(this))return;const e=this._engine.getSupportedEffects();for(const c of e){const u=this._engine.getEffectDrawer(c);u&&this.effectDrawers.set(c,u)}const t=this._engine.getSupportedShapes();for(const c of t){const u=this._engine.getShapeDrawer(c);u&&this.shapeDrawers.set(c,u)}await this.particles.initPlugins(),this._options=Mo(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Mo(this._engine,this,this._options);const n=await this._engine.getAvailablePlugins(this);for(const[c,u]of n)this.plugins.set(c,u);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();const{zLayers:s,duration:r,delay:o,fpsLimit:a,smooth:l}=this.actualOptions;this.zLayers=s,this._duration=Ne(r)*Dn,this._delay=Ne(o)*Dn,this._lifeTime=0,this.fpsLimit=a>ky?a:Ny,this._smooth=l;for(const c of this.effectDrawers.values())await c.init?.(this);for(const c of this.shapeDrawers.values())await c.init?.(this);for(const c of this.plugins.values())await c.init?.();this._engine.dispatchEvent(Xn.containerInit,{container:this}),await this.particles.init(),this.particles.setDensity();for(const c of this.plugins.values())c.particlesSetup?.();this._engine.dispatchEvent(Xn.particlesSetup,{container:this})}async loadTheme(e){Bt(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(Bt(this)&&(this._drawAnimationFrame!==void 0&&(aM(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const e of this.plugins.values())e.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(Xn.containerPaused,{container:this})}}play(e){if(!Bt(this))return;const t=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),t)for(const n of this.plugins.values())n.play&&n.play();this._engine.dispatchEvent(Xn.containerPlay,{container:this}),this.draw(t??!1)}async refresh(){if(Bt(this))return this.stop(),this.start()}async reset(e){if(Bt(this))return this._initialSourceOptions=e,this._sourceOptions=e,this._options=Mo(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Mo(this._engine,this,this._options),this.refresh()}async start(){!Bt(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{const t=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const n of this.plugins.values())await n.start?.();this._engine.dispatchEvent(Xn.containerStarted,{container:this}),this.play(),e()};this._delayTimeout=setTimeout(()=>{t()},this._delay)}))}stop(){if(!(!Bt(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const e of this.plugins.values())e.stop?.();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent(Xn.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===e?!1:(this._responsiveMaxWidth=e,!0)}}let kb=class{constructor(){this._listeners=new Map}addEventListener(e,t){this.removeEventListener(e,t);let n=this._listeners.get(e);n||(n=[],this._listeners.set(e,n)),n.push(t)}dispatchEvent(e,t){this._listeners.get(e)?.forEach(s=>s(t))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,t){const n=this._listeners.get(e);if(!n)return;const s=n.length,r=n.indexOf(t);r<hh||(s===iu?this._listeners.delete(e):n.splice(r,iu))}};async function Yu(i,e,t,n=!1){let s=e.get(i);return(!s||n)&&(s=await Promise.all([...t.values()].map(r=>r(i))),e.set(i,s)),s}async function zb(i){const e=Ui(i.url,i.index);if(!e)return i.fallback;const t=await fetch(e);return t.ok?await t.json():(co().error(`${zi} ${t.status} while retrieving config file`),i.fallback)}const Bb=i=>{let e;if(i instanceof HTMLCanvasElement||i.tagName.toLowerCase()===zu)e=i,e.dataset[Wr]||(e.dataset[Wr]=Yp);else{const n=i.getElementsByTagName(zu);n.length?(e=n[zy],e.dataset[Wr]=Yp):(e=document.createElement(zu),e.dataset[Wr]=g0,i.appendChild(e))}const t="100%";return e.style.width||(e.style.width=t),e.style.height||(e.style.height=t),e},Vb=(i,e)=>{let t=e??document.getElementById(i);return t||(t=document.createElement("div"),t.id=i,t.dataset[Wr]=g0,document.body.append(t),t)};class Gb{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new kb,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const e={};for(const[t,n]of this._configs)e[t]=n;return e}get items(){return this._domArray}get version(){return"3.9.1"}async addColorManager(e,t=!0){this.colorManagers.set(e.key,e),await this.refresh(t)}addConfig(e){const t=e.key??e.name??"default";this._configs.set(t,e),this._eventDispatcher.dispatchEvent(Xn.configAdded,{data:{name:t,config:e}})}async addEasing(e,t,n=!0){this.getEasing(e)||(this.easingFunctions.set(e,t),await this.refresh(n))}async addEffect(e,t,n=!0){Si(e,s=>{this.getEffectDrawer(s)||this.effectDrawers.set(s,t)}),await this.refresh(n)}addEventListener(e,t){this._eventDispatcher.addEventListener(e,t)}async addInteractor(e,t,n=!0){this._initializers.interactors.set(e,t),await this.refresh(n)}async addMover(e,t,n=!0){this._initializers.movers.set(e,t),await this.refresh(n)}async addParticleUpdater(e,t,n=!0){this._initializers.updaters.set(e,t),await this.refresh(n)}async addPathGenerator(e,t,n=!0){this.getPathGenerator(e)||this.pathGenerators.set(e,t),await this.refresh(n)}async addPlugin(e,t=!0){this.getPlugin(e.id)||this.plugins.push(e),await this.refresh(t)}async addPreset(e,t,n=!1,s=!0){(n||!this.getPreset(e))&&this.presets.set(e,t),await this.refresh(s)}async addShape(e,t=!0){for(const n of e.validTypes)this.getShapeDrawer(n)||this.shapeDrawers.set(n,e);await this.refresh(t)}checkVersion(e){if(this.version!==e)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${e}`)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,t){this._eventDispatcher.dispatchEvent(e,t)}dom(){return this.items}domItem(e){return this.item(e)}async getAvailablePlugins(e){const t=new Map;for(const n of this.plugins)n.needsPlugin(e.actualOptions)&&t.set(n.id,await n.getPlugin(e));return t}getEasing(e){return this.easingFunctions.get(e)??(t=>t)}getEffectDrawer(e){return this.effectDrawers.get(e)}async getInteractors(e,t=!1){return Yu(e,this.interactors,this._initializers.interactors,t)}async getMovers(e,t=!1){return Yu(e,this.movers,this._initializers.movers,t)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(t=>t.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(e,t=!1){return Yu(e,this.updaters,this._initializers.updaters,t)}init(){this._initialized||(this._initialized=!0)}item(e){const{items:t}=this,n=t[e];if(!n||n.destroyed){t.splice(e,v0);return}return n}async load(e){const t=e.id??e.element?.id??`tsparticles${Math.floor(Tt()*By)}`,{index:n,url:s}=e,r=s?await zb({fallback:e.options,url:s,index:n}):e.options,o=Ui(r,n),{items:a}=this,l=a.findIndex(f=>f.id.description===t),c=new Nb(this,t,o);if(l>=Vy){const f=this.item(l),h=f?Gy:nu;f&&!f.destroyed&&f.destroy(!1),a.splice(l,h,c)}else a.push(c);const u=Vb(t,e.element),d=Bb(u);return c.canvas.loadCanvas(d),await c.start(),c}loadOptions(e,t){this.plugins.forEach(n=>n.loadOptions?.(e,t))}loadParticlesOptions(e,t,...n){const s=this.updaters.get(e);s&&s.forEach(r=>r.loadOptions?.(t,...n))}async refresh(e=!0){e&&await Promise.all(this.items.map(t=>t.refresh()))}removeEventListener(e,t){this._eventDispatcher.removeEventListener(e,t)}setOnClickHandler(e){const{items:t}=this;if(!t.length)throw new Error(`${zi} can only set click handlers after calling tsParticles.load()`);t.forEach(n=>n.addClickHandler(e))}}function Hb(){const i=new Gb;return i.init(),i}class Ms{constructor(e){this.type=ga.external,this.container=e}}class Yd{constructor(e){this.type=ga.particles,this.container=e}}var Yi;(function(i){i.clockwise="clockwise",i.counterClockwise="counter-clockwise",i.random="random"})(Yi||(Yi={}));var vm;(function(i){i.linear="linear",i.radial="radial",i.random="random"})(vm||(vm={}));var io;(function(i){i.easeInBack="ease-in-back",i.easeInCirc="ease-in-circ",i.easeInCubic="ease-in-cubic",i.easeInLinear="ease-in-linear",i.easeInQuad="ease-in-quad",i.easeInQuart="ease-in-quart",i.easeInQuint="ease-in-quint",i.easeInExpo="ease-in-expo",i.easeInSine="ease-in-sine",i.easeOutBack="ease-out-back",i.easeOutCirc="ease-out-circ",i.easeOutCubic="ease-out-cubic",i.easeOutLinear="ease-out-linear",i.easeOutQuad="ease-out-quad",i.easeOutQuart="ease-out-quart",i.easeOutQuint="ease-out-quint",i.easeOutExpo="ease-out-expo",i.easeOutSine="ease-out-sine",i.easeInOutBack="ease-in-out-back",i.easeInOutCirc="ease-in-out-circ",i.easeInOutCubic="ease-in-out-cubic",i.easeInOutLinear="ease-in-out-linear",i.easeInOutQuad="ease-in-out-quad",i.easeInOutQuart="ease-in-out-quart",i.easeInOutQuint="ease-in-out-quint",i.easeInOutExpo="ease-in-out-expo",i.easeInOutSine="ease-in-out-sine"})(io||(io={}));const _h=Hb();uo()||(window.tsParticles=_h);const vh=.5,Wb=2,ar=0,Zi=1,xm=60,ym=0,Xb=.01,qb=Math.PI*Wb;function Yb(i){const e=i.initialPosition,{dx:t,dy:n}=$n(e,i.position),s=Math.abs(t),r=Math.abs(n),{maxDistance:o}=i.retina,a=o.horizontal,l=o.vertical;if(!a&&!l)return;const c=(a&&s>=a)??!1,u=(l&&r>=l)??!1;if((c||u)&&!i.misplaced)i.misplaced=!!a&&s>a||!!l&&r>l,a&&(i.velocity.x=i.velocity.y*vh-i.velocity.x),l&&(i.velocity.y=i.velocity.x*vh-i.velocity.y);else if((!a||s<a)&&(!l||r<l)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const d=i.position,f=i.velocity;a&&(d.x<e.x&&f.x<ar||d.x>e.x&&f.x>ar)&&(f.x*=-Tt()),l&&(d.y<e.y&&f.y<ar||d.y>e.y&&f.y>ar)&&(f.y*=-Tt())}}function $b(i,e,t,n,s,r,o){Kb(i,o);const a=i.gravity,l=a?.enable&&a.inverse?-Zi:Zi;s&&t&&(i.velocity.x+=s*o.factor/(xm*t)),a?.enable&&t&&(i.velocity.y+=l*(a.acceleration*o.factor)/(xm*t));const c=i.moveDecay;i.velocity.multTo(c);const u=i.velocity.mult(t);a?.enable&&n>ar&&(!a.inverse&&u.y>=ar&&u.y>=n||a.inverse&&u.y<=ar&&u.y<=-n)&&(u.y=l*n,t&&(i.velocity.y=u.y/t));const d=i.options.zIndex,f=(Zi-i.zIndexFactor)**d.velocityRate;u.multTo(f),u.multTo(r);const{position:h}=i;h.addTo(u),e.vibrate&&(h.x+=Math.sin(h.x*Math.cos(h.y))*r,h.y+=Math.cos(h.y*Math.sin(h.x))*r)}function Zb(i,e,t){const n=i.container;if(!i.spin)return;const s=i.spin.direction===Yi.clockwise,r={x:s?Math.cos:Math.sin,y:s?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*r.x(i.spin.angle)*t,i.position.y=i.spin.center.y+i.spin.radius*r.y(i.spin.angle)*t,i.spin.radius+=i.spin.acceleration*t;const o=Math.max(n.canvas.size.width,n.canvas.size.height),a=o*vh;i.spin.radius>a?(i.spin.radius=a,i.spin.acceleration*=-Zi):i.spin.radius<ym&&(i.spin.radius=ym,i.spin.acceleration*=-Zi),i.spin.angle+=e*Xb*(Zi-i.spin.radius/o)}function Kb(i,e){const t=i.options,n=t.move.path;if(!n.enable)return;if(i.lastPathTime<=i.pathDelay){i.lastPathTime+=e.value;return}const r=i.pathGenerator?.generate(i,e);r&&i.velocity.addTo(r),n.clamp&&(i.velocity.x=Bi(i.velocity.x,-Zi,Zi),i.velocity.y=Bi(i.velocity.y,-Zi,Zi)),i.lastPathTime-=i.pathDelay}function jb(i){return i.slow.inRange?i.slow.factor:Zi}function Jb(i){const e=i.container,t=i.options,n=t.move.spin;if(!n.enable)return;const s=n.position??{x:50,y:50},r=.01,o={x:s.x*r*e.canvas.size.width,y:s.y*r*e.canvas.size.height},a=i.getPosition(),l=yi(a,o),c=Ne(n.acceleration);i.retina.spinAcceleration=c*e.retina.pixelRatio,i.spin={center:o,direction:i.velocity.x>=ar?Yi.clockwise:Yi.counterClockwise,angle:Tt()*qb,radius:l,acceleration:i.retina.spinAcceleration}}const Qb=2,eS=1,tS=1;class nS{init(e){const t=e.options,n=t.move.gravity;e.gravity={enable:n.enable,acceleration:Ne(n.acceleration),inverse:n.inverse},Jb(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,t){const n=e.options,s=n.move;if(!s.enable)return;const r=e.container,o=r.retina.pixelRatio;e.retina.moveSpeed??=Ne(s.speed)*o,e.retina.moveDrift??=Ne(e.options.move.drift)*o;const a=jb(e),l=r.retina.reduceFactor,c=e.retina.moveSpeed,u=e.retina.moveDrift,d=fs(n.size.value)*o,f=s.size?e.getRadius()/d:eS,h=t.factor||tS,p=c*f*a*h/Qb,_=e.retina.maxSpeed??r.retina.maxSpeed;s.spin.enable?Zb(e,p,l):$b(e,s,p,_,u,l,t),Yb(e)}}async function iS(i,e=!0){i.checkVersion("3.9.1"),await i.addMover("base",()=>Promise.resolve(new nS),e)}const sS=2,rS=Math.PI*sS,oS=0,Mm={x:0,y:0};function aS(i){const{context:e,particle:t,radius:n}=i;t.circleRange||(t.circleRange={min:oS,max:rS});const s=t.circleRange;e.arc(Mm.x,Mm.y,n,s.min,s.max,!1)}const lS=12,cS=360,bm=0;class uS{constructor(){this.validTypes=["circle"]}draw(e){aS(e)}getSidesCount(){return lS}particleInit(e,t){const n=t.shapeData,s=n?.angle??{max:cS,min:bm};t.circleRange=Ho(s)?{min:hr(s.min),max:hr(s.max)}:{min:bm,max:hr(s)}}}async function fS(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new uS,e)}class hS{constructor(e,t){this._container=e,this._engine=t}init(e){const t=vl(this._engine,e.options.color,e.id,e.options.reduceDuplicates);t&&(e.color=U0(t,e.options.color.animation,this._container.retina.reduceFactor))}isEnabled(e){const{h:t,s:n,l:s}=e.options.color.animation,{color:r}=e;return!e.destroyed&&!e.spawning&&(r?.h.value!==void 0&&t.enable||r?.s.value!==void 0&&n.enable||r?.l.value!==void 0&&s.enable)}update(e,t){F0(e.color,t)}}async function dS(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("color",t=>Promise.resolve(new hS(t,i)),e)}var zr;(function(i){i[i.r=1]="r",i[i.g=2]="g",i[i.b=3]="b",i[i.a=4]="a"})(zr||(zr={}));const pS=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,mS=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,Xl=16,gS=1,_S=255;class vS{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(e){return this._parseString(e.value)}handleRangeColor(e){return this._parseString(e.value)}parseString(e){return this._parseString(e)}_parseString(e){if(typeof e!="string"||!e?.startsWith(this.stringPrefix))return;const t=e.replace(pS,(s,r,o,a,l)=>r+r+o+o+a+a+(l!==void 0?l+l:"")),n=mS.exec(t);return n?{a:n[zr.a]!==void 0?parseInt(n[zr.a],Xl)/_S:gS,b:parseInt(n[zr.b],Xl),g:parseInt(n[zr.g],Xl),r:parseInt(n[zr.r],Xl)}:void 0}}async function xS(i,e=!0){i.checkVersion("3.9.1"),await i.addColorManager(new vS,e)}var Wo;(function(i){i[i.h=1]="h",i[i.s=2]="s",i[i.l=3]="l",i[i.a=5]="a"})(Wo||(Wo={}));class yS{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const t=e.value,n=t.hsl??e.value;if(n.h!==void 0&&n.s!==void 0&&n.l!==void 0)return pa(n)}handleRangeColor(e){const t=e.value,n=t.hsl??e.value;if(n.h!==void 0&&n.l!==void 0)return pa({h:Ne(n.h),l:Ne(n.l),s:Ne(n.s)})}parseString(e){if(!e.startsWith("hsl"))return;const t=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,n=t.exec(e),s=4,r=1,o=10;return n?CM({a:n.length>s?w0(n[Wo.a]):r,h:parseInt(n[Wo.h],o),l:parseInt(n[Wo.l],o),s:parseInt(n[Wo.s],o)}):void 0}}async function MS(i,e=!0){i.checkVersion("3.9.1"),await i.addColorManager(new yS,e)}class bS{constructor(e){this.container=e}init(e){const t=e.options.opacity,n=1;e.opacity=R0(t,n);const s=t.animation;s.enable&&(e.opacity.velocity=Ne(s.speed)/or*this.container.retina.reduceFactor,s.sync||(e.opacity.velocity*=Tt()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,t){!this.isEnabled(e)||!e.opacity||Hd(e,e.opacity,!0,e.options.opacity.animation.destroy,t)}}async function SS(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("opacity",t=>Promise.resolve(new bS(t)),e)}const ru=0,na=0;function wS(i){if(i.outMode!==Jt.bounce&&i.outMode!==Jt.split||i.direction!==lt.left&&i.direction!==lt.right)return;i.bounds.right<na&&i.direction===lt.left?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&i.direction===lt.right&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);const e=i.particle.velocity.x;let t=!1;if(i.direction===lt.right&&i.bounds.right>=i.canvasSize.width&&e>ru||i.direction===lt.left&&i.bounds.left<=na&&e<ru){const s=Ne(i.particle.options.bounce.horizontal.value);i.particle.velocity.x*=-s,t=!0}if(!t)return;const n=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width&&i.direction===lt.right?i.particle.position.x=i.canvasSize.width-n:i.bounds.left<=na&&i.direction===lt.left&&(i.particle.position.x=n),i.outMode===Jt.split&&i.particle.destroy()}function ES(i){if(i.outMode!==Jt.bounce&&i.outMode!==Jt.split||i.direction!==lt.bottom&&i.direction!==lt.top)return;i.bounds.bottom<na&&i.direction===lt.top?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&i.direction===lt.bottom&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);const e=i.particle.velocity.y;let t=!1;if(i.direction===lt.bottom&&i.bounds.bottom>=i.canvasSize.height&&e>ru||i.direction===lt.top&&i.bounds.top<=na&&e<ru){const s=Ne(i.particle.options.bounce.vertical.value);i.particle.velocity.y*=-s,t=!0}if(!t)return;const n=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height&&i.direction===lt.bottom?i.particle.position.y=i.canvasSize.height-n:i.bounds.top<=na&&i.direction===lt.top&&(i.particle.position.y=n),i.outMode===Jt.split&&i.particle.destroy()}class TS{constructor(e){this.container=e,this.modes=[Jt.bounce,Jt.split]}update(e,t,n,s){if(!this.modes.includes(s))return;const r=this.container;let o=!1;for(const f of r.plugins.values())if(f.particleBounce!==void 0&&(o=f.particleBounce(e,n,t)),o)break;if(o)return;const a=e.getPosition(),l=e.offset,c=e.getRadius(),u=Tl(a,c),d=r.canvas.size;wS({particle:e,outMode:s,direction:t,bounds:u,canvasSize:d,offset:l,size:c}),ES({particle:e,outMode:s,direction:t,bounds:u,canvasSize:d,offset:l,size:c})}}const ql=0;class AS{constructor(e){this.container=e,this.modes=[Jt.destroy]}update(e,t,n,s){if(!this.modes.includes(s))return;const r=this.container;switch(e.outType){case Ji.normal:case Ji.outside:if(Bd(e.position,r.canvas.size,pn.origin,e.getRadius(),t))return;break;case Ji.inside:{const{dx:o,dy:a}=$n(e.position,e.moveCenter),{x:l,y:c}=e.velocity;if(l<ql&&o>e.moveCenter.radius||c<ql&&a>e.moveCenter.radius||l>=ql&&o<-e.moveCenter.radius||c>=ql&&a<-e.moveCenter.radius)return;break}}r.particles.remove(e,e.group,!0)}}const Yl=0;class CS{constructor(e){this.container=e,this.modes=[Jt.none]}update(e,t,n,s){if(!this.modes.includes(s)||((e.options.move.distance.horizontal&&(t===lt.left||t===lt.right))??(e.options.move.distance.vertical&&(t===lt.top||t===lt.bottom))))return;const r=e.options.move.gravity,o=this.container,a=o.canvas.size,l=e.getRadius();if(r.enable){const c=e.position;(!r.inverse&&c.y>a.height+l&&t===lt.bottom||r.inverse&&c.y<-l&&t===lt.top)&&o.particles.remove(e)}else{if(e.velocity.y>Yl&&e.position.y<=a.height+l||e.velocity.y<Yl&&e.position.y>=-l||e.velocity.x>Yl&&e.position.x<=a.width+l||e.velocity.x<Yl&&e.position.x>=-l)return;Bd(e.position,o.canvas.size,pn.origin,l,t)||o.particles.remove(e)}}}const $l=0,Zl=0;class RS{constructor(e){this.container=e,this.modes=[Jt.out]}update(e,t,n,s){if(!this.modes.includes(s))return;const r=this.container;switch(e.outType){case Ji.inside:{const{x:o,y:a}=e.velocity,l=pn.origin;l.length=e.moveCenter.radius,l.angle=e.velocity.angle+Math.PI,l.addTo(pn.create(e.moveCenter));const{dx:c,dy:u}=$n(e.position,l);if(o<=$l&&c>=Zl||a<=$l&&u>=Zl||o>=$l&&c<=Zl||a>=$l&&u<=Zl)return;e.position.x=Math.floor(vi({min:0,max:r.canvas.size.width})),e.position.y=Math.floor(vi({min:0,max:r.canvas.size.height}));const{dx:d,dy:f}=$n(e.position,e.moveCenter);e.direction=Math.atan2(-f,-d),e.velocity.angle=e.direction;break}default:{if(Bd(e.position,r.canvas.size,pn.origin,e.getRadius(),t))return;switch(e.outType){case Ji.outside:{e.position.x=Math.floor(vi({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(vi({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;const{dx:o,dy:a}=$n(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(a,o),e.velocity.angle=e.direction);break}case Ji.normal:{const o=e.options.move.warp,a=r.canvas.size,l={bottom:a.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:a.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},c=e.getRadius(),u=Tl(e.position,c);t===lt.right&&u.left>a.width+e.offset.x?(e.position.x=l.left,e.initialPosition.x=e.position.x,o||(e.position.y=Tt()*a.height,e.initialPosition.y=e.position.y)):t===lt.left&&u.right<-e.offset.x&&(e.position.x=l.right,e.initialPosition.x=e.position.x,o||(e.position.y=Tt()*a.height,e.initialPosition.y=e.position.y)),t===lt.bottom&&u.top>a.height+e.offset.y?(o||(e.position.x=Tt()*a.width,e.initialPosition.x=e.position.x),e.position.y=l.top,e.initialPosition.y=e.position.y):t===lt.top&&u.bottom<-e.offset.y&&(o||(e.position.x=Tt()*a.width,e.initialPosition.x=e.position.x),e.position.y=l.bottom,e.initialPosition.y=e.position.y);break}}break}}}}const PS=(i,e)=>i.default===e||i.bottom===e||i.left===e||i.right===e||i.top===e;class DS{constructor(e){this._addUpdaterIfMissing=(t,n,s)=>{const r=t.options.move.outModes;!this.updaters.has(n)&&PS(r,n)&&this.updaters.set(n,s(this.container))},this._updateOutMode=(t,n,s,r)=>{for(const o of this.updaters.values())o.update(t,r,n,s)},this.container=e,this.updaters=new Map}init(e){this._addUpdaterIfMissing(e,Jt.bounce,t=>new TS(t)),this._addUpdaterIfMissing(e,Jt.out,t=>new RS(t)),this._addUpdaterIfMissing(e,Jt.destroy,t=>new AS(t)),this._addUpdaterIfMissing(e,Jt.none,t=>new CS(t))}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,t){const n=e.options.move.outModes;this._updateOutMode(e,t,n.bottom??n.default,lt.bottom),this._updateOutMode(e,t,n.left??n.default,lt.left),this._updateOutMode(e,t,n.right??n.default,lt.right),this._updateOutMode(e,t,n.top??n.default,lt.top)}}async function LS(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("outModes",t=>Promise.resolve(new DS(t)),e)}var Xo;(function(i){i[i.r=1]="r",i[i.g=2]="g",i[i.b=3]="b",i[i.a=5]="a"})(Xo||(Xo={}));class IS{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const t=e.value,n=t.rgb??e.value;if(n.r!==void 0)return n}handleRangeColor(e){const t=e.value,n=t.rgb??e.value;if(n.r!==void 0)return{r:Ne(n.r),g:Ne(n.g),b:Ne(n.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const t=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,n=t.exec(e),s=10;return n?{a:n.length>4?w0(n[Xo.a]):1,b:parseInt(n[Xo.b],s),g:parseInt(n[Xo.g],s),r:parseInt(n[Xo.r],s)}:void 0}}async function OS(i,e=!0){i.checkVersion("3.9.1"),await i.addColorManager(new IS,e)}const Er=0;class US{init(e){const t=e.container,n=e.options.size,s=n.animation;s.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??t.retina.sizeAnimationSpeed)/or*t.retina.reduceFactor,s.sync||(e.size.velocity*=Tt()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??Er)<=Er||(e.size.maxLoops??Er)>Er&&(e.size.loops??Er)<(e.size.maxLoops??Er))}reset(e){e.size.loops=Er}update(e,t){this.isEnabled(e)&&Hd(e,e.size,!0,e.options.size.animation.destroy,t)}}async function FS(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("size",()=>Promise.resolve(new US),e)}async function NS(i,e=!0){i.checkVersion("3.9.1"),await xS(i,!1),await MS(i,!1),await OS(i,!1),await iS(i,!1),await fS(i,!1),await dS(i,!1),await SS(i,!1),await LS(i,!1),await FS(i,!1),await i.refresh(e)}async function kS(i,e=!0){i.checkVersion("3.9.1"),await i.addEasing(io.easeInQuad,t=>t**2,!1),await i.addEasing(io.easeOutQuad,t=>1-(1-t)**2,!1),await i.addEasing(io.easeInOutQuad,t=>t<.5?2*t**2:1-(-2*t+2)**2/2,!1),await i.refresh(e)}function zS(i,e){const{context:t,opacity:n}=i,s=.5,r=t.globalAlpha;if(!e)return;const o=e.width,a=o*s;t.globalAlpha=n,t.drawImage(e,-a,-a,o,o),t.globalAlpha=r}const $u='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',Sm=0;class BS{constructor(){this.validTypes=["emoji"],this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&t?.close(),this._emojiShapeDict.delete(e)}draw(e){const t=e.particle.emojiDataKey;if(!t)return;const n=this._emojiShapeDict.get(t);n&&zS(e,n)}async init(e){const t=e.actualOptions,{validTypes:n}=this;if(!n.find(o=>Yt(o,t.particles.shape.type)))return;const s=[um($u)],r=n.map(o=>t.particles.shape.options[o]).find(o=>!!o);r&&Si(r,o=>{o.font&&s.push(um(o.font))}),await Promise.all(s)}particleDestroy(e){e.emojiDataKey=void 0}particleInit(e,t){const s=t.shapeData;if(!s?.value)return;const r=Ui(s.value,t.randomIndexData);if(!r)return;const o=typeof r=="string"?{font:s.font??$u,padding:s.padding??Sm,value:r}:{font:$u,padding:Sm,...s,...r},a=o.font,l=o.value,c=`${l}_${a}`;if(this._emojiShapeDict.has(c)){t.emojiDataKey=c;return}const u=o.padding*2,d=fs(t.size.value),f=d+u,h=f*2;let p;if(typeof OffscreenCanvas<"u"){const _=new OffscreenCanvas(h,h),m=_.getContext("2d");if(!m)return;m.font=`400 ${d*2}px ${a}`,m.textBaseline="middle",m.textAlign="center",m.fillText(l,f,f),p=_.transferToImageBitmap()}else{const _=document.createElement("canvas");_.width=h,_.height=h;const m=_.getContext("2d");if(!m)return;m.font=`400 ${d*2}px ${a}`,m.textBaseline="middle",m.textAlign="center",m.fillText(l,f,f),p=_}this._emojiShapeDict.set(c,p),t.emojiDataKey=c}}async function VS(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new BS,e)}const GS=1,HS=1,H0=0;function W0(i,e,t,n,s,r){const o=e.actualOptions.interactivity.modes.attract;if(!o)return;const a=e.particles.quadTree.query(s,r);for(const l of a){const{dx:c,dy:u,distance:d}=$n(l.position,t),f=o.speed*o.factor,h=Bi(i.getEasing(o.easing)(HS-d/n)*f,GS,o.maxSpeed),p=pn.create(d?c/d*h:f,d?u/d*h:f);l.position.subFrom(p)}}function WS(i,e,t){e.attract||(e.attract={particles:[]});const{attract:n}=e;if(n.finish||(n.count||(n.count=0),n.count++,n.count===e.particles.count&&(n.finish=!0)),n.clicking){const s=e.interactivity.mouse.clickPosition,r=e.retina.attractModeDistance;if(!r||r<H0||!s)return;W0(i,e,s,r,new Un(s.x,s.y,r),o=>t(o))}else n.clicking===!1&&(n.particles=[])}function XS(i,e,t){const n=e.interactivity.mouse.position,s=e.retina.attractModeDistance;!s||s<H0||!n||W0(i,e,n,s,new Un(n.x,n.y,s),r=>t(r))}class qS{constructor(){this.distance=200,this.duration=.4,this.easing=io.easeOutQuad,this.factor=1,this.maxSpeed=50,this.speed=1}load(e){ue(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}const Ra="attract";let YS=class extends Ms{constructor(e,t){super(t),this._engine=e,t.attract||(t.attract={particles:[]}),this.handleClickMode=n=>{const s=this.container.actualOptions,r=s.interactivity.modes.attract;if(!(!r||n!==Ra)){t.attract||(t.attract={particles:[]}),t.attract.clicking=!0,t.attract.count=0;for(const o of t.attract.particles)this.isEnabled(o)&&o.velocity.setTo(o.initialVelocity);t.attract.particles=[],t.attract.finish=!1,setTimeout(()=>{t.destroyed||(t.attract||(t.attract={particles:[]}),t.attract.clicking=!1)},r.duration*Dn)}}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.attract;t&&(e.retina.attractModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,n=e.interactivity.status===ao,s=t.interactivity.events,{enable:r,mode:o}=s.onHover,{enable:a,mode:l}=s.onClick;n&&r&&Yt(Ra,o)?XS(this._engine,this.container,c=>this.isEnabled(c)):a&&Yt(Ra,l)&&WS(this._engine,this.container,c=>this.isEnabled(c))}isEnabled(e){const t=this.container,n=t.actualOptions,s=t.interactivity.mouse,r=(e?.interactivity??n.interactivity).events;if((!s.position||!r.onHover.enable)&&(!s.clickPosition||!r.onClick.enable))return!1;const o=r.onHover.mode,a=r.onClick.mode;return Yt(Ra,o)||Yt(Ra,a)}loadModeOptions(e,...t){e.attract||(e.attract=new qS);for(const n of t)e.attract.load(n?.attract)}reset(){}};async function $S(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalAttract",t=>Promise.resolve(new YS(i,t)),e)}const ZS=2,Fc=.5,KS=Math.PI*Fc,wm=2,X0=10,jS=0;function q0(i,e,t,n,s){const r=i.particles.quadTree.query(n,s);for(const o of r)n instanceof Un?A0(ph(o),{position:e,mass:t**ZS*KS,velocity:pn.origin,factor:pn.origin}):n instanceof Qi&&yM(o,Tl(e,t))}function JS(i,e,t,n){const s=document.querySelectorAll(e);s.length&&s.forEach(r=>{const o=r,a=i.retina.pixelRatio,l={x:(o.offsetLeft+o.offsetWidth*Fc)*a,y:(o.offsetTop+o.offsetHeight*Fc)*a},c=o.offsetWidth*Fc*a,u=X0*a,d=t.type===ma.circle?new Un(l.x,l.y,c+u):new Qi(o.offsetLeft*a-u,o.offsetTop*a-u,o.offsetWidth*a+u*wm,o.offsetHeight*a+u*wm);n(l,c,d)})}function QS(i,e,t,n){Gd(t,e,(s,r)=>JS(i,s,r,(o,a,l)=>q0(i,o,a,l,n)))}function ew(i,e){const t=i.retina.pixelRatio,n=X0*t,s=i.interactivity.mouse.position,r=i.retina.bounceModeDistance;!r||r<jS||!s||q0(i,s,r,new Un(s.x,s.y,r+n),e)}class tw{constructor(){this.distance=200}load(e){ue(e)||e.distance!==void 0&&(this.distance=e.distance)}}const Kl="bounce";class nw extends Ms{constructor(e){super(e)}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bounce;t&&(e.retina.bounceModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,n=t.interactivity.events,s=e.interactivity.status===ao,r=n.onHover.enable,o=n.onHover.mode,a=n.onDiv;s&&r&&Yt(Kl,o)?ew(this.container,l=>this.isEnabled(l)):QS(this.container,a,Kl,l=>this.isEnabled(l))}isEnabled(e){const t=this.container,n=t.actualOptions,s=t.interactivity.mouse,r=(e?.interactivity??n.interactivity).events,o=r.onDiv;return!!s.position&&r.onHover.enable&&Yt(Kl,r.onHover.mode)||Vd(Kl,o)}loadModeOptions(e,...t){e.bounce||(e.bounce=new tw);for(const n of t)e.bounce.load(n?.bounce)}reset(){}}async function iw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalBounce",t=>Promise.resolve(new nw(t)),e)}class Y0{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(!ue(e)){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const t=ys(this.color)?void 0:this.color;this.color=Si(e.color,n=>Nn.create(t,n))}e.size!==void 0&&(this.size=e.size)}}}class sw extends Y0{constructor(){super(),this.selectors=[]}load(e){super.load(e),!ue(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class rw extends Y0{load(e){super.load(e),!ue(e)&&(this.divs=Si(e.divs,t=>{const n=new sw;return n.load(t),n}))}}var is;(function(i){i.color="color",i.opacity="opacity",i.size="size"})(is||(is={}));function Em(i,e,t,n){if(e>=t){const s=i+(e-t)*n;return Bi(s,i,e)}else if(e<t){const s=i-(t-e)*n;return Bi(s,e,i)}}const Tr="bubble",Zu=0,ow=0,aw=2,Tm=1,Am=1,lw=0,cw=0,Ku=.5,ju=1;class uw extends Ms{constructor(e,t){super(e),this._clickBubble=()=>{const n=this.container,s=n.actualOptions,r=n.interactivity.mouse.clickPosition,o=s.interactivity.modes.bubble;if(!o||!r)return;n.bubble||(n.bubble={});const a=n.retina.bubbleModeDistance;if(!a||a<Zu)return;const l=n.particles.quadTree.queryCircle(r,a,u=>this.isEnabled(u)),{bubble:c}=n;for(const u of l){if(!c.clicking)continue;u.bubble.inRange=!c.durationEnd;const d=u.getPosition(),f=yi(d,r),h=(new Date().getTime()-(n.interactivity.mouse.clickTime??ow))/Dn;h>o.duration&&(c.durationEnd=!0),h>o.duration*aw&&(c.clicking=!1,c.durationEnd=!1);const p={bubbleObj:{optValue:n.retina.bubbleModeSize,value:u.bubble.radius},particlesObj:{optValue:fs(u.options.size.value)*n.retina.pixelRatio,value:u.size.value},type:is.size};this._process(u,f,h,p);const _={bubbleObj:{optValue:o.opacity,value:u.bubble.opacity},particlesObj:{optValue:fs(u.options.opacity.value),value:u.opacity?.value??Tm},type:is.opacity};this._process(u,f,h,_),!c.durationEnd&&f<=a?this._hoverBubbleColor(u,f):delete u.bubble.color}},this._hoverBubble=()=>{const n=this.container,s=n.interactivity.mouse.position,r=n.retina.bubbleModeDistance;if(!r||r<Zu||!s)return;const o=n.particles.quadTree.queryCircle(s,r,a=>this.isEnabled(a));for(const a of o){a.bubble.inRange=!0;const l=a.getPosition(),c=yi(l,s),u=Am-c/r;c<=r?u>=cw&&n.interactivity.status===ao&&(this._hoverBubbleSize(a,u),this._hoverBubbleOpacity(a,u),this._hoverBubbleColor(a,u)):this.reset(a),n.interactivity.status===lh&&this.reset(a)}},this._hoverBubbleColor=(n,s,r)=>{const o=this.container.actualOptions,a=r??o.interactivity.modes.bubble;if(a){if(!n.bubble.finalColor){const l=a.color;if(!l)return;const c=Ui(l);n.bubble.finalColor=vl(this._engine,c)}if(n.bubble.finalColor)if(a.mix){n.bubble.color=void 0;const l=n.getFillColor();n.bubble.color=l?L0(Wd(l,n.bubble.finalColor,Am-s,s)):n.bubble.finalColor}else n.bubble.color=n.bubble.finalColor}},this._hoverBubbleOpacity=(n,s,r)=>{const o=this.container,a=o.actualOptions,l=r?.opacity??a.interactivity.modes.bubble?.opacity;if(!l)return;const c=n.options.opacity.value,u=n.opacity?.value??Tm,d=Em(u,l,fs(c),s);d!==void 0&&(n.bubble.opacity=d)},this._hoverBubbleSize=(n,s,r)=>{const o=this.container,a=r?.size?r.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(a===void 0)return;const l=fs(n.options.size.value)*o.retina.pixelRatio,c=n.size.value,u=Em(c,a,l,s);u!==void 0&&(n.bubble.radius=u)},this._process=(n,s,r,o)=>{const a=this.container,l=o.bubbleObj.optValue,c=a.actualOptions,u=c.interactivity.modes.bubble;if(!u||l===void 0)return;const d=u.duration,f=a.retina.bubbleModeDistance,h=o.particlesObj.optValue,p=o.bubbleObj.value,_=o.particlesObj.value??lw,m=o.type;if(!(!f||f<Zu||l===h))if(a.bubble||(a.bubble={}),a.bubble.durationEnd)p&&(m===is.size&&delete n.bubble.radius,m===is.opacity&&delete n.bubble.opacity);else if(s<=f){if((p??_)!==l){const v=_-r*(_-l)/d;m===is.size&&(n.bubble.radius=v),m===is.opacity&&(n.bubble.opacity=v)}}else m===is.size&&delete n.bubble.radius,m===is.opacity&&delete n.bubble.opacity},this._singleSelectorHover=(n,s,r)=>{const o=this.container,a=document.querySelectorAll(s),l=o.actualOptions.interactivity.modes.bubble;!l||!a.length||a.forEach(c=>{const u=c,d=o.retina.pixelRatio,f={x:(u.offsetLeft+u.offsetWidth*Ku)*d,y:(u.offsetTop+u.offsetHeight*Ku)*d},h=u.offsetWidth*Ku*d,p=r.type===ma.circle?new Un(f.x,f.y,h):new Qi(u.offsetLeft*d,u.offsetTop*d,u.offsetWidth*d,u.offsetHeight*d),_=o.particles.quadTree.query(p,m=>this.isEnabled(m));for(const m of _){if(!p.contains(m.getPosition()))continue;m.bubble.inRange=!0;const g=l.divs,v=T0(g,u);(!m.bubble.div||m.bubble.div!==u)&&(this.clear(m,n,!0),m.bubble.div=u),this._hoverBubbleSize(m,ju,v),this._hoverBubbleOpacity(m,ju,v),this._hoverBubbleColor(m,ju,v)}})},this._engine=t,e.bubble||(e.bubble={}),this.handleClickMode=n=>{n===Tr&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,t,n){e.bubble.inRange&&!n||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bubble;t&&(e.retina.bubbleModeDistance=t.distance*e.retina.pixelRatio,t.size!==void 0&&(e.retina.bubbleModeSize=t.size*e.retina.pixelRatio))}interact(e){const t=this.container.actualOptions,n=t.interactivity.events,s=n.onHover,r=n.onClick,o=s.enable,a=s.mode,l=r.enable,c=r.mode,u=n.onDiv;o&&Yt(Tr,a)?this._hoverBubble():l&&Yt(Tr,c)?this._clickBubble():Gd(Tr,u,(d,f)=>this._singleSelectorHover(e,d,f))}isEnabled(e){const t=this.container,n=t.actualOptions,s=t.interactivity.mouse,r=(e?.interactivity??n.interactivity).events,{onClick:o,onDiv:a,onHover:l}=r,c=Vd(Tr,a);return c||l.enable&&s.position||o.enable&&s.clickPosition?Yt(Tr,l.mode)||Yt(Tr,o.mode)||c:!1}loadModeOptions(e,...t){e.bubble||(e.bubble=new rw);for(const n of t)e.bubble.load(n?.bubble)}reset(e){e.bubble.inRange=!1}}async function fw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalBubble",t=>Promise.resolve(new uw(t,i)),e)}class hw{constructor(){this.opacity=.5}load(e){ue(e)||e.opacity!==void 0&&(this.opacity=e.opacity)}}class dw{constructor(){this.distance=80,this.links=new hw,this.radius=60}load(e){ue(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links),e.radius!==void 0&&(this.radius=e.radius))}}const Cm=0,Rm=1,pw=0;function mw(i,e,t,n){const s=Math.floor(t.getRadius()/e.getRadius()),r=e.getFillColor(),o=t.getFillColor();if(!r||!o)return;const a=e.getPosition(),l=t.getPosition(),c=Wd(r,o,e.getRadius(),t.getRadius()),u=i.createLinearGradient(a.x,a.y,l.x,l.y);return u.addColorStop(Cm,xl(r,n)),u.addColorStop(Bi(s,Cm,Rm),Fs(c,n)),u.addColorStop(Rm,xl(o,n)),u}function gw(i,e,t,n,s){al(i,n,s),i.lineWidth=e,i.strokeStyle=t,i.stroke()}function _w(i,e,t,n){const s=i.actualOptions,r=s.interactivity.modes.connect;if(r)return mw(e,t,n,r.links.opacity)}function vw(i,e,t){i.canvas.draw(n=>{const s=_w(i,n,e,t);if(!s)return;const r=e.getPosition(),o=t.getPosition();gw(n,e.retina.linksWidth??pw,s,r,o)})}const xw="connect",Pm=0;class yw extends Ms{constructor(e){super(e)}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.connect;t&&(e.retina.connectModeDistance=t.distance*e.retina.pixelRatio,e.retina.connectModeRadius=t.radius*e.retina.pixelRatio)}interact(){const e=this.container;if(e.actualOptions.interactivity.events.onHover.enable&&e.interactivity.status==="pointermove"){const n=e.interactivity.mouse.position,{connectModeDistance:s,connectModeRadius:r}=e.retina;if(!s||s<Pm||!r||r<Pm||!n)return;const o=Math.abs(r),a=e.particles.quadTree.queryCircle(n,o,l=>this.isEnabled(l));a.forEach((l,c)=>{const u=l.getPosition(),d=1;for(const f of a.slice(c+d)){const h=f.getPosition(),p=Math.abs(s),_=Math.abs(u.x-h.x),m=Math.abs(u.y-h.y);_<p&&m<p&&vw(e,l,f)}})}}isEnabled(e){const t=this.container,n=t.interactivity.mouse,s=(e?.interactivity??t.actualOptions.interactivity).events;return s.onHover.enable&&n.position?Yt(xw,s.onHover.mode):!1}loadModeOptions(e,...t){e.connect||(e.connect=new dw);for(const n of t)e.connect.load(n?.connect)}reset(){}}async function Mw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalConnect",t=>Promise.resolve(new yw(t)),e)}class bw{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(e){ue(e)||(e.blink!==void 0&&(this.blink=e.blink),e.color!==void 0&&(this.color=Nn.create(this.color,e.color)),e.consent!==void 0&&(this.consent=e.consent),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Sw{constructor(){this.distance=100,this.links=new bw}load(e){ue(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links))}}const ww=0;function Ew(i,e,t,n,s,r){al(i,t,n),i.strokeStyle=Fs(s,r),i.lineWidth=e,i.stroke()}function Tw(i,e,t,n,s){i.canvas.draw(r=>{const o=e.getPosition();Ew(r,e.retina.linksWidth??ww,o,s,t,n)})}const Aw="grab",Cw=0,Rw=0;class Pw extends Ms{constructor(e,t){super(e),this._engine=t}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.grab;t&&(e.retina.grabModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,n=t.interactivity;if(!n.modes.grab||!n.events.onHover.enable||e.interactivity.status!==ao)return;const s=e.interactivity.mouse.position;if(!s)return;const r=e.retina.grabModeDistance;if(!r||r<Cw)return;const o=e.particles.quadTree.queryCircle(s,r,a=>this.isEnabled(a));for(const a of o){const l=a.getPosition(),c=yi(l,s);if(c>r)continue;const u=n.modes.grab.links,d=u.opacity,f=d-c*d/r;if(f<=Rw)continue;const h=u.color??a.options.links?.color;if(!e.particles.grabLineColor&&h){const _=n.modes.grab.links;e.particles.grabLineColor=O0(this._engine,h,_.blink,_.consent)}const p=gh(a,void 0,e.particles.grabLineColor);p&&Tw(e,a,p,f,s)}}isEnabled(e){const t=this.container,n=t.interactivity.mouse,s=(e?.interactivity??t.actualOptions.interactivity).events;return s.onHover.enable&&!!n.position&&Yt(Aw,s.onHover.mode)}loadModeOptions(e,...t){e.grab||(e.grab=new Sw);for(const n of t)e.grab.load(n?.grab)}reset(){}}async function Dw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalGrab",t=>Promise.resolve(new Pw(t,i)),e)}const Lw="pause";class Iw extends Ms{constructor(e){super(e),this.handleClickMode=t=>{if(t!==Lw)return;const n=this.container;n.animationStatus?n.pause():n.play()}}clear(){}init(){}interact(){}isEnabled(){return!0}reset(){}}async function Ow(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalPause",t=>Promise.resolve(new Iw(t)),e)}class Uw{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(e){if(ue(e))return;e.default!==void 0&&(this.default=e.default),e.groups!==void 0&&(this.groups=e.groups.map(n=>n)),this.groups.length||(this.default=!0);const t=e.quantity;t!==void 0&&(this.quantity=gt(t)),this.particles=Si(e.particles,n=>Fn({},n))}}const Fw="push",Nw=0;class kw extends Ms{constructor(e){super(e),this.handleClickMode=t=>{if(t!==Fw)return;const n=this.container,s=n.actualOptions,r=s.interactivity.modes.push;if(!r)return;const o=Ne(r.quantity);if(o<=Nw)return;const a=_u([void 0,...r.groups]),l=a!==void 0?n.actualOptions.particles.groups[a]:void 0,c=Ui(r.particles),u=Fn(l,c);n.particles.push(o,n.interactivity.mouse,u,a)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...t){e.push||(e.push=new Uw);for(const n of t)e.push.load(n?.push)}reset(){}}async function zw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalPush",t=>Promise.resolve(new kw(t)),e)}class Bw{constructor(){this.quantity=2}load(e){if(ue(e))return;const t=e.quantity;t!==void 0&&(this.quantity=gt(t))}}const Vw="remove";class Gw extends Ms{constructor(e){super(e),this.handleClickMode=t=>{const n=this.container,s=n.actualOptions;if(!s.interactivity.modes.remove||t!==Vw)return;const r=Ne(s.interactivity.modes.remove.quantity);n.particles.removeQuantity(r)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...t){e.remove||(e.remove=new Bw);for(const n of t)e.remove.load(n?.remove)}reset(){}}async function Hw(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalRemove",t=>Promise.resolve(new Gw(t)),e)}class $0{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing=io.easeOutQuad}load(e){ue(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class Ww extends $0{constructor(){super(),this.selectors=[]}load(e){super.load(e),!ue(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class Xw extends $0{load(e){super.load(e),!ue(e)&&(this.divs=Si(e.divs,t=>{const n=new Ww;return n.load(t),n}))}}const Ar="repulse",qw=0,Yw=6,$w=3,Zw=2,Kw=0,jw=0,Jw=1,Ju=.5;class Qw extends Ms{constructor(e,t){super(t),this._clickRepulse=()=>{const n=this.container,s=n.actualOptions.interactivity.modes.repulse;if(!s)return;const r=n.repulse??{particles:[]};if(r.finish||(r.count||(r.count=0),r.count++,r.count===n.particles.count&&(r.finish=!0)),r.clicking){const o=n.retina.repulseModeDistance;if(!o||o<qw)return;const a=Math.pow(o/Yw,$w),l=n.interactivity.mouse.clickPosition;if(l===void 0)return;const c=new Un(l.x,l.y,a),u=n.particles.quadTree.query(c,d=>this.isEnabled(d));for(const d of u){const{dx:f,dy:h,distance:p}=$n(l,d.position),_=p**Zw,m=s.speed,g=-a*m/_;if(_<=a){r.particles.push(d);const v=pn.create(f,h);v.length=g,d.velocity.setTo(v)}}}else if(r.clicking===!1){for(const o of r.particles)o.velocity.setTo(o.initialVelocity);r.particles=[]}},this._hoverRepulse=()=>{const n=this.container,s=n.interactivity.mouse.position,r=n.retina.repulseModeDistance;!r||r<Kw||!s||this._processRepulse(s,r,new Un(s.x,s.y,r))},this._processRepulse=(n,s,r,o)=>{const a=this.container,l=a.particles.quadTree.query(r,m=>this.isEnabled(m)),c=a.actualOptions.interactivity.modes.repulse;if(!c)return;const{easing:u,speed:d,factor:f,maxSpeed:h}=c,p=this._engine.getEasing(u),_=(o?.speed??d)*f;for(const m of l){const{dx:g,dy:v,distance:M}=$n(m.position,n),y=Bi(p(Jw-M/s)*_,jw,h),w=pn.create(M?g/M*y:_,M?v/M*y:_);m.position.addTo(w)}},this._singleSelectorRepulse=(n,s)=>{const r=this.container,o=r.actualOptions.interactivity.modes.repulse;if(!o)return;const a=document.querySelectorAll(n);a.length&&a.forEach(l=>{const c=l,u=r.retina.pixelRatio,d={x:(c.offsetLeft+c.offsetWidth*Ju)*u,y:(c.offsetTop+c.offsetHeight*Ju)*u},f=c.offsetWidth*Ju*u,h=s.type===ma.circle?new Un(d.x,d.y,f):new Qi(c.offsetLeft*u,c.offsetTop*u,c.offsetWidth*u,c.offsetHeight*u),p=o.divs,_=T0(p,c);this._processRepulse(d,f,h,_)})},this._engine=e,t.repulse||(t.repulse={particles:[]}),this.handleClickMode=n=>{const s=this.container.actualOptions,r=s.interactivity.modes.repulse;if(!r||n!==Ar)return;t.repulse||(t.repulse={particles:[]});const o=t.repulse;o.clicking=!0,o.count=0;for(const a of t.repulse.particles)this.isEnabled(a)&&a.velocity.setTo(a.initialVelocity);o.particles=[],o.finish=!1,setTimeout(()=>{t.destroyed||(o.clicking=!1)},r.duration*Dn)}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.repulse;t&&(e.retina.repulseModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,n=e.interactivity.status===ao,s=t.interactivity.events,r=s.onHover,o=r.enable,a=r.mode,l=s.onClick,c=l.enable,u=l.mode,d=s.onDiv;n&&o&&Yt(Ar,a)?this._hoverRepulse():c&&Yt(Ar,u)?this._clickRepulse():Gd(Ar,d,(f,h)=>this._singleSelectorRepulse(f,h))}isEnabled(e){const t=this.container,n=t.actualOptions,s=t.interactivity.mouse,r=(e?.interactivity??n.interactivity).events,o=r.onDiv,a=r.onHover,l=r.onClick,c=Vd(Ar,o);if(!(c||a.enable&&s.position||l.enable&&s.clickPosition))return!1;const u=a.mode,d=l.mode;return Yt(Ar,u)||Yt(Ar,d)||c}loadModeOptions(e,...t){e.repulse||(e.repulse=new Xw);for(const n of t)e.repulse.load(n?.repulse)}reset(){}}async function eE(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalRepulse",t=>Promise.resolve(new Qw(i,t)),e)}class tE{constructor(){this.factor=3,this.radius=200}load(e){ue(e)||(e.factor!==void 0&&(this.factor=e.factor),e.radius!==void 0&&(this.radius=e.radius))}}const nE="slow",iE=0;class sE extends Ms{constructor(e){super(e)}clear(e,t,n){e.slow.inRange&&!n||(e.slow.factor=1)}init(){const e=this.container,t=e.actualOptions.interactivity.modes.slow;t&&(e.retina.slowModeRadius=t.radius*e.retina.pixelRatio)}interact(){}isEnabled(e){const t=this.container,n=t.interactivity.mouse,s=(e?.interactivity??t.actualOptions.interactivity).events;return s.onHover.enable&&!!n.position&&Yt(nE,s.onHover.mode)}loadModeOptions(e,...t){e.slow||(e.slow=new tE);for(const n of t)e.slow.load(n?.slow)}reset(e){e.slow.inRange=!1;const t=this.container,n=t.actualOptions,s=t.interactivity.mouse.position,r=t.retina.slowModeRadius,o=n.interactivity.modes.slow;if(!o||!r||r<iE||!s)return;const a=e.getPosition(),l=yi(s,a),c=l/r,u=o.factor,{slow:d}=e;l>r||(d.inRange=!0,d.factor=c/u)}}async function rE(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("externalSlow",t=>Promise.resolve(new sE(t)),e)}const oE=0,aE=1,lE=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function cE(i,e,t){const{svgData:n}=i;if(!n)return"";const s=xl(e,t);if(n.includes("fill"))return n.replace(lE,()=>s);const r=n.indexOf(">");return`${n.substring(oE,r)} fill="${s}"${n.substring(r)}`}async function vu(i){return new Promise(e=>{i.loading=!0;const t=new Image;i.element=t,t.addEventListener("load",()=>{i.loading=!1,e()}),t.addEventListener("error",()=>{i.element=void 0,i.error=!0,i.loading=!1,co().error(`${zi} loading image: ${i.source}`),e()}),t.src=i.source})}async function uE(i){if(i.type!=="svg"){await vu(i);return}i.loading=!0;const e=await fetch(i.source);e.ok?i.svgData=await e.text():(co().error(`${zi} Image not found`),i.error=!0),i.loading=!1}function fE(i,e,t,n){const s=cE(i,t,n.opacity?.value??aE),r={color:t,gif:e.gif,data:{...i,svgData:s},loaded:!1,ratio:e.width/e.height,replaceColor:e.replaceColor,source:e.src};return new Promise(o=>{const a=new Blob([s],{type:"image/svg+xml"}),l=URL||window.URL||window.webkitURL||window,c=l.createObjectURL(a),u=new Image;u.addEventListener("load",()=>{r.loaded=!0,r.element=u,o(r),l.revokeObjectURL(c)});const d=async()=>{l.revokeObjectURL(c);const f={...i,error:!1,loading:!0};await vu(f),r.loaded=!0,r.element=f.element,o(r)};u.addEventListener("error",()=>{d()}),u.src=c})}const Qu=[0,4,2,1],Dm=[8,8,4,2];class hE{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e)}getString(e){const t=this.data.slice(this.pos,this.pos+e);return this.pos+=t.length,t.reduce((n,s)=>n+String.fromCharCode(s),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let e="",t=0;const n=0,s=0;do{t=this.data[this.pos++];for(let r=t;--r>=n;e+=String.fromCharCode(this.data[this.pos++]));}while(t!==s);return e}readSubBlocksBin(){let e=this.data[this.pos],t=0;const n=0,s=1;for(let o=0;e!==n;o+=e+s,e=this.data[this.pos+o])t+=e;const r=new Uint8Array(t);e=this.data[this.pos++];for(let o=0;e!==n;e=this.data[this.pos++])for(let a=e;--a>=n;r[o++]=this.data[this.pos++]);return r}skipSubBlocks(){for(const e=1,t=0;this.data[this.pos]!==t;this.pos+=this.data[this.pos]+e);this.pos++}}var qi;(function(i){i[i.Replace=0]="Replace",i[i.Combine=1]="Combine",i[i.RestoreBackground=2]="RestoreBackground",i[i.RestorePrevious=3]="RestorePrevious",i[i.UndefinedA=4]="UndefinedA",i[i.UndefinedB=5]="UndefinedB",i[i.UndefinedC=6]="UndefinedC",i[i.UndefinedD=7]="UndefinedD"})(qi||(qi={}));var Is;(function(i){i[i.Extension=33]="Extension",i[i.ApplicationExtension=255]="ApplicationExtension",i[i.GraphicsControlExtension=249]="GraphicsControlExtension",i[i.PlainTextExtension=1]="PlainTextExtension",i[i.CommentExtension=254]="CommentExtension",i[i.Image=44]="Image",i[i.EndOfFile=59]="EndOfFile"})(Is||(Is={}));const jn={x:0,y:0},dE=0,Lm=.5,pE=0,Im=0,xh=0;function Z0(i,e){const t=[];for(let n=0;n<e;n++)t.push({r:i.data[i.pos],g:i.data[i.pos+1],b:i.data[i.pos+2]}),i.pos+=3;return t}function mE(i,e,t,n){switch(i.nextByte()){case Is.GraphicsControlExtension:{const s=e.frames[t(!1)];i.pos++;const r=i.nextByte();s.GCreserved=(r&224)>>>5,s.disposalMethod=(r&28)>>>2,s.userInputDelayFlag=(r&2)===2;const o=(r&1)===1;s.delayTime=i.nextTwoBytes()*10;const a=i.nextByte();o&&n(a),i.pos++;break}case Is.ApplicationExtension:{i.pos++;const s={identifier:i.getString(8),authenticationCode:i.getString(3),data:i.readSubBlocksBin()};e.applicationExtensions.push(s);break}case Is.CommentExtension:{e.comments.push([t(!1),i.readSubBlocks()]);break}case Is.PlainTextExtension:{if(e.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");i.pos++,e.frames[t(!1)].plainTextData={left:i.nextTwoBytes(),top:i.nextTwoBytes(),width:i.nextTwoBytes(),height:i.nextTwoBytes(),charSize:{width:i.nextTwoBytes(),height:i.nextTwoBytes()},foregroundColor:i.nextByte(),backgroundColor:i.nextByte(),text:i.readSubBlocks()};break}default:i.skipSubBlocks();break}}async function gE(i,e,t,n,s,r){const o=e.frames[n(!0)];o.left=i.nextTwoBytes(),o.top=i.nextTwoBytes(),o.width=i.nextTwoBytes(),o.height=i.nextTwoBytes();const a=i.nextByte(),l=(a&128)===128,c=(a&64)===64;o.sortFlag=(a&32)===32,o.reserved=(a&24)>>>3;const u=1<<(a&7)+1;l&&(o.localColorTable=Z0(i,u));const d=g=>{const{r:v,g:M,b:y}=(l?o.localColorTable:e.globalColorTable)[g];return g!==s(null)?{r:v,g:M,b:y,a:255}:{r:v,g:M,b:y,a:t?~~((v+M+y)/3):0}},f=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(g){if(g instanceof DOMException&&g.name==="IndexSizeError")return null;throw g}})();if(f==null)throw new EvalError("GIF frame size is to large");const h=i.nextByte(),p=i.readSubBlocksBin(),_=1<<h,m=(g,v)=>{const M=g>>>3,y=g&7;return(p[M]+(p[M+1]<<8)+(p[M+2]<<16)&(1<<v)-1<<y)>>>y};if(c){for(let g=0,v=h+1,M=0,y=[[0]],w=0;w<4;w++)if(Qu[w]<o.height){let T=0,E=0,x=!1;for(;!x;){const S=g;if(g=m(M,v),M+=v+1,g===_){v=h+1,y.length=_+2;for(let P=0;P<y.length;P++)y[P]=P<_?[P]:[]}else{g>=y.length?y.push(y[S].concat(y[S][0])):S!==_&&y.push(y[S].concat(y[g][0]));for(const P of y[g]){const{r:R,g:I,b:z,a:G}=d(P);f.data.set([R,I,z,G],Qu[w]*o.width+Dm[w]*E+T%(o.width*4)),T+=4}y.length===1<<v&&v<12&&v++}T===o.width*4*(E+1)&&(E++,Qu[w]+Dm[w]*E>=o.height&&(x=!0))}}o.image=f,o.bitmap=await createImageBitmap(f)}else{let g=0,v=h+1,M=0,y=-4,w=!1;const T=[[0]];for(;!w;){const E=g;if(g=m(M,v),M+=v,g===_){v=h+1,T.length=_+2;for(let x=0;x<T.length;x++)T[x]=x<_?[x]:[]}else{if(g===_+1){w=!0;break}g>=T.length?T.push(T[E].concat(T[E][0])):E!==_&&T.push(T[E].concat(T[g][0]));for(const x of T[g]){const{r:S,g:P,b:R,a:I}=d(x);f.data.set([S,P,R,I],y+=4)}T.length>=1<<v&&v<12&&v++}}o.image=f,o.bitmap=await createImageBitmap(f)}}async function _E(i,e,t,n,s,r){switch(i.nextByte()){case Is.EndOfFile:return!0;case Is.Image:await gE(i,e,t,n,s);break;case Is.Extension:mE(i,e,n,s);break;default:throw new EvalError("undefined block found")}return!1}function vE(i){for(const e of i.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}async function xE(i,e,t){t||(t=!1);const n=await fetch(i);if(!n.ok&&n.status===404)throw new EvalError("file not found");const s=await n.arrayBuffer(),r={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},o=new hE(new Uint8ClampedArray(s));if(o.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");r.width=o.nextTwoBytes(),r.height=o.nextTwoBytes();const a=o.nextByte(),l=(a&128)===128;r.colorRes=(a&112)>>>4,r.sortFlag=(a&8)===8;const c=1<<(a&7)+1,u=o.nextByte();r.pixelAspectRatio=o.nextByte(),r.pixelAspectRatio!==0&&(r.pixelAspectRatio=(r.pixelAspectRatio+15)/64),l&&(r.globalColorTable=Z0(o,c));const d=(()=>{try{return new ImageData(r.width,r.height,{colorSpace:"srgb"})}catch(y){if(y instanceof DOMException&&y.name==="IndexSizeError")return null;throw y}})();if(d==null)throw new Error("GIF frame size is to large");const{r:f,g:h,b:p}=r.globalColorTable[u];d.data.set(l?[f,h,p,255]:[0,0,0,0]);for(let y=4;y<d.data.length;y*=2)d.data.copyWithin(y,0,y);r.backgroundImage=d;let _=-1,m=!0,g=-1;const v=y=>(y&&(m=!0),_),M=y=>(y!=null&&(g=y),g);try{do m&&(r.frames.push({left:0,top:0,width:0,height:0,disposalMethod:qi.Replace,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),_++,g=-1,m=!1);while(!await _E(o,r,t,v,M,e));r.frames.length--;for(const y of r.frames){if(y.userInputDelayFlag&&y.delayTime===0){r.totalTime=1/0;break}r.totalTime+=y.delayTime}return r}catch(y){throw y instanceof EvalError?new Error(`error while parsing frame ${_} "${y.message}"`):y}}function yE(i){const{context:e,radius:t,particle:n,delta:s}=i,r=n.image;if(!r?.gifData||!r.gif)return;const o=new OffscreenCanvas(r.gifData.width,r.gifData.height),a=o.getContext("2d");if(!a)throw new Error("could not create offscreen canvas context");a.imageSmoothingQuality="low",a.imageSmoothingEnabled=!1,a.clearRect(jn.x,jn.y,o.width,o.height),n.gifLoopCount===void 0&&(n.gifLoopCount=r.gifLoopCount??xh);let l=n.gifFrame??dE;const c={x:-r.gifData.width*Lm,y:-r.gifData.height*Lm},u=r.gifData.frames[l];if(n.gifTime===void 0&&(n.gifTime=pE),!!u.bitmap){switch(e.scale(t/r.gifData.width,t/r.gifData.height),u.disposalMethod){case qi.UndefinedA:case qi.UndefinedB:case qi.UndefinedC:case qi.UndefinedD:case qi.Replace:a.drawImage(u.bitmap,u.left,u.top),e.drawImage(o,c.x,c.y),a.clearRect(jn.x,jn.y,o.width,o.height);break;case qi.Combine:a.drawImage(u.bitmap,u.left,u.top),e.drawImage(o,c.x,c.y);break;case qi.RestoreBackground:a.drawImage(u.bitmap,u.left,u.top),e.drawImage(o,c.x,c.y),a.clearRect(jn.x,jn.y,o.width,o.height),r.gifData.globalColorTable.length?a.putImageData(r.gifData.backgroundImage,c.x,c.y):a.putImageData(r.gifData.frames[Im].image,c.x+u.left,c.y+u.top);break;case qi.RestorePrevious:{const d=a.getImageData(jn.x,jn.y,o.width,o.height);a.drawImage(u.bitmap,u.left,u.top),e.drawImage(o,c.x,c.y),a.clearRect(jn.x,jn.y,o.width,o.height),a.putImageData(d,jn.x,jn.y)}break}if(n.gifTime+=s.value,n.gifTime>u.delayTime){if(n.gifTime-=u.delayTime,++l>=r.gifData.frames.length){if(--n.gifLoopCount<=xh)return;l=Im,a.clearRect(jn.x,jn.y,o.width,o.height)}n.gifFrame=l}e.scale(r.gifData.width/t,r.gifData.height/t)}}async function ME(i){if(i.type!=="gif"){await vu(i);return}i.loading=!0;try{i.gifData=await xE(i.source),i.gifLoopCount=vE(i.gifData)??xh,i.gifLoopCount||(i.gifLoopCount=1/0)}catch{i.error=!0}i.loading=!1}const bE=2,SE=1,wE=12,EE=1;class TE{constructor(e){this.validTypes=["image","images"],this.loadImageShape=async t=>{if(!this._engine.loadImage)throw new Error(`${zi} image shape not initialized`);await this._engine.loadImage({gif:t.gif,name:t.name,replaceColor:t.replaceColor??!1,src:t.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}draw(e){const{context:t,radius:n,particle:s,opacity:r}=e,o=s.image,a=o?.element;if(o){if(t.globalAlpha=r,o.gif&&o.gifData)yE(e);else if(a){const l=o.ratio,c={x:-n,y:-n},u=n*bE;t.drawImage(a,c.x,c.y,u,u/l)}t.globalAlpha=SE}}getSidesCount(){return wE}async init(e){const t=e.actualOptions;if(!(!t.preload||!this._engine.loadImage))for(const n of t.preload)await this._engine.loadImage(n)}loadShape(e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const t=e.shapeData;if(!t)return;this._engine.images.find(s=>s.name===t.name||s.source===t.src)||this.loadImageShape(t).then(()=>{this.loadShape(e)})}particleInit(e,t){if(t.shape!=="image"&&t.shape!=="images")return;this._engine.images||(this._engine.images=[]);const n=this._engine.images,s=t.shapeData;if(!s)return;const r=t.getFillColor(),o=n.find(l=>l.name===s.name||l.source===s.src);if(!o)return;const a=s.replaceColor??o.replaceColor;if(o.loading){setTimeout(()=>{this.particleInit(e,t)});return}(async()=>{let l;o.svgData&&r?l=await fE(o,s,r,t):l={color:r,data:o,element:o.element,gif:o.gif,gifData:o.gifData,gifLoopCount:o.gifLoopCount,loaded:!0,ratio:s.width&&s.height?s.width/s.height:o.ratio??EE,replaceColor:a,source:s.src},l.ratio||(l.ratio=1);const c=s.fill??t.shapeFill,u=s.close??t.shapeClose,d={image:l,fill:c,close:u};t.image=d.image,t.shapeFill=d.fill,t.shapeClose=d.close})()}}class AE{constructor(){this.src="",this.gif=!1}load(e){ue(e)||(e.gif!==void 0&&(this.gif=e.gif),e.height!==void 0&&(this.height=e.height),e.name!==void 0&&(this.name=e.name),e.replaceColor!==void 0&&(this.replaceColor=e.replaceColor),e.src!==void 0&&(this.src=e.src),e.width!==void 0&&(this.width=e.width))}}class CE{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,t){if(!t?.preload)return;e.preload||(e.preload=[]);const n=e.preload;for(const s of t.preload){const r=n.find(o=>o.name===s.name||o.src===s.src);if(r)r.load(s);else{const o=new AE;o.load(s),n.push(o)}}}needsPlugin(){return!0}}const RE=3;function PE(i){i.loadImage||(i.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${zi} no image source provided`);if(i.images||(i.images=[]),!i.images.find(t=>t.name===e.name||t.source===e.src))try{const t={gif:e.gif??!1,name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-RE),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};i.images.push(t);let n;e.gif?n=ME:n=e.replaceColor?uE:vu,await n(t)}catch{throw new Error(`${zi} ${e.name??e.src} not found`)}})}async function DE(i,e=!0){i.checkVersion("3.9.1"),PE(i);const t=new CE(i);await i.addPlugin(t,e),await i.addShape(new TE(i),e)}class LE extends po{constructor(){super(),this.sync=!1}load(e){ue(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class IE extends po{constructor(){super(),this.sync=!1}load(e){ue(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class OE{constructor(){this.count=0,this.delay=new LE,this.duration=new IE}load(e){ue(e)||(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}const bo=0,UE=-1,Om=0,Um=0;function FE(i,e,t){if(!i.life)return;const n=i.life;let s=!1;if(i.spawning)if(n.delayTime+=e.value,n.delayTime>=i.life.delay)s=!0,i.spawning=!1,n.delayTime=bo,n.time=bo;else return;if(n.duration===UE||i.spawning||(s?n.time=bo:n.time+=e.value,n.time<n.duration))return;if(n.time=bo,i.life.count>Om&&i.life.count--,i.life.count===Om){i.destroy();return}const r=gt(Um,t.width),o=gt(Um,t.width);i.position.x=vi(r),i.position.y=vi(o),i.spawning=!0,n.delayTime=bo,n.time=bo,i.reset();const a=i.options.life;a&&(n.delay=Ne(a.delay.value)*Dn,n.duration=Ne(a.duration.value)*Dn)}const Cr=0,Fm=1,Nm=-1;class NE{constructor(e){this.container=e}init(e){const t=this.container,n=e.options,s=n.life;s&&(e.life={delay:t.retina.reduceFactor?Ne(s.delay.value)*(s.delay.sync?Fm:Tt())/t.retina.reduceFactor*Dn:Cr,delayTime:Cr,duration:t.retina.reduceFactor?Ne(s.duration.value)*(s.duration.sync?Fm:Tt())/t.retina.reduceFactor*Dn:Cr,time:Cr,count:s.count},e.life.duration<=Cr&&(e.life.duration=Nm),e.life.count<=Cr&&(e.life.count=Nm),e.life&&(e.spawning=e.life.delay>Cr))}isEnabled(e){return!e.destroyed}loadOptions(e,...t){e.life||(e.life=new OE);for(const n of t)e.life.load(n?.life)}update(e,t){!this.isEnabled(e)||!e.life||FE(e,t,this.container.canvas.size)}}async function kE(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("life",async t=>Promise.resolve(new NE(t)),e)}function zE(i){const{context:e,particle:t,radius:n}=i,s=t.shapeData,r=0;e.moveTo(-n,r),e.lineTo(n,r),e.lineCap=s?.cap??"butt"}const BE=1;class VE{constructor(){this.validTypes=["line"]}draw(e){zE(e)}getSidesCount(){return BE}}async function GE(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new VE,e)}const km=.5;class HE{init(){}isEnabled(e){return!uo()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const t=e.container,n=t.actualOptions,s=n.interactivity.events.onHover.parallax;if(uo()||!s.enable)return;const r=s.force,o=t.interactivity.mouse.position;if(!o)return;const a=t.canvas.size,l={x:a.width*km,y:a.height*km},c=s.smooth,u=e.getRadius()/r,d={x:(o.x-l.x)*u,y:(o.y-l.y)*u},{offset:f}=e;f.x+=(d.x-f.x)/c,f.y+=(d.y-f.y)/c}}async function WE(i,e=!0){i.checkVersion("3.9.1"),await i.addMover("parallax",()=>Promise.resolve(new HE),e)}const zm=1e3,XE=1;class qE extends Yd{constructor(e){super(e)}clear(){}init(){}interact(e){const t=this.container;e.attractDistance===void 0&&(e.attractDistance=Ne(e.options.move.attract.distance)*t.retina.pixelRatio);const n=e.attractDistance,s=e.getPosition(),r=t.particles.quadTree.queryCircle(s,n);for(const o of r){if(e===o||!o.options.move.attract.enable||o.destroyed||o.spawning)continue;const a=o.getPosition(),{dx:l,dy:c}=$n(s,a),u=e.options.move.attract.rotate,d=l/(u.x*zm),f=c/(u.y*zm),h=o.size.value/e.size.value,p=XE/h;e.velocity.x-=d*h,e.velocity.y-=f*h,o.velocity.x+=d*p,o.velocity.y+=f*p}}isEnabled(e){return e.options.move.attract.enable}reset(){}}async function YE(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("particlesAttract",t=>Promise.resolve(new qE(t)),e)}const $E=.5,ZE=10,KE=0;function Bm(i,e,t,n,s,r){const o=Bi(i.options.collisions.absorb.speed*s.factor/ZE,KE,n);i.size.value+=o*$E,t.size.value-=o,n<=r&&(t.size.value=0,t.destroy())}function jE(i,e,t,n){const s=i.getRadius(),r=e.getRadius();s===void 0&&r!==void 0?i.destroy():s!==void 0&&r===void 0?e.destroy():s!==void 0&&r!==void 0&&(s>=r?Bm(i,s,e,r,t,n):Bm(e,r,i,s,t,n))}const Vm=i=>{i.collisionMaxSpeed===void 0&&(i.collisionMaxSpeed=Ne(i.options.collisions.maxSpeed)),i.velocity.length>i.collisionMaxSpeed&&(i.velocity.length=i.collisionMaxSpeed)};function K0(i,e){A0(ph(i),ph(e)),Vm(i),Vm(e)}function JE(i,e){!i.unbreakable&&!e.unbreakable&&K0(i,e),i.getRadius()===void 0&&e.getRadius()!==void 0?i.destroy():i.getRadius()!==void 0&&e.getRadius()===void 0?e.destroy():i.getRadius()!==void 0&&e.getRadius()!==void 0&&(i.getRadius()>=e.getRadius()?e:i).destroy()}function QE(i,e,t,n){switch(i.options.collisions.mode){case ea.absorb:{jE(i,e,t,n);break}case ea.bounce:{K0(i,e);break}case ea.destroy:{JE(i,e);break}}}const eT=2;class tT extends Yd{constructor(e){super(e)}clear(){}init(){}interact(e,t){if(e.destroyed||e.spawning)return;const n=this.container,s=e.getPosition(),r=e.getRadius(),o=n.particles.quadTree.queryCircle(s,r*eT);for(const a of o){if(e===a||!a.options.collisions.enable||e.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const l=a.getPosition(),c=a.getRadius();if(Math.abs(Math.round(s.z)-Math.round(l.z))>r+c)continue;const u=yi(s,l),d=r+c;u>d||QE(e,a,t,n.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}async function nT(i,e=!0){i.checkVersion("3.9.1"),await i.addInteractor("particlesCollisions",t=>Promise.resolve(new tT(t)),e)}const ef=2;class iT extends Un{constructor(e,t,n,s){super(e,t,n),this.canvasSize=s,this.canvasSize={...s}}contains(e){const{width:t,height:n}=this.canvasSize,{x:s,y:r}=e;return super.contains(e)||super.contains({x:s-t,y:r})||super.contains({x:s-t,y:r-n})||super.contains({x:s,y:r-n})}intersects(e){if(super.intersects(e))return!0;const t=e,n=e,s={x:e.position.x-this.canvasSize.width,y:e.position.y-this.canvasSize.height};if(n.radius!==void 0){const r=new Un(s.x,s.y,n.radius*ef);return super.intersects(r)}else if(t.size!==void 0){const r=new Qi(s.x,s.y,t.size.width*ef,t.size.height*ef);return super.intersects(r)}return!1}}class sT{constructor(){this.blur=5,this.color=new Nn,this.color.value="#000",this.enable=!1}load(e){ue(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=Nn.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable))}}class rT{constructor(){this.enable=!1,this.frequency=1}load(e){ue(e)||(e.color!==void 0&&(this.color=Nn.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity))}}class oT{constructor(){this.blink=!1,this.color=new Nn,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new sT,this.triangles=new rT,this.width=1,this.warp=!1}load(e){ue(e)||(e.id!==void 0&&(this.id=e.id),e.blink!==void 0&&(this.blink=e.blink),this.color=Nn.create(this.color,e.color),e.consent!==void 0&&(this.consent=e.consent),e.distance!==void 0&&(this.distance=e.distance),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity),this.shadow.load(e.shadow),this.triangles.load(e.triangles),e.width!==void 0&&(this.width=e.width),e.warp!==void 0&&(this.warp=e.warp))}}const Gm=2,aT=1,jl={x:0,y:0},lT=0;function cT(i,e,t,n,s){const{dx:r,dy:o,distance:a}=$n(i,e);if(!s||a<=t)return a;const l={x:Math.abs(r),y:Math.abs(o)},c={x:Math.min(l.x,n.width-l.x),y:Math.min(l.y,n.height-l.y)};return Math.sqrt(c.x**Gm+c.y**Gm)}class uT extends Yd{constructor(e,t){super(e),this._setColor=n=>{if(!n.options.links)return;const s=this._linkContainer,r=n.options.links;let o=r.id===void 0?s.particles.linksColor:s.particles.linksColors.get(r.id);if(o)return;const a=r.color;o=O0(this._engine,a,r.blink,r.consent),r.id===void 0?s.particles.linksColor=o:s.particles.linksColors.set(r.id,o)},this._linkContainer=e,this._engine=t}clear(){}init(){this._linkContainer.particles.linksColor=void 0,this._linkContainer.particles.linksColors=new Map}interact(e){if(!e.options.links)return;e.links=[];const t=e.getPosition(),n=this.container,s=n.canvas.size;if(t.x<jl.x||t.y<jl.y||t.x>s.width||t.y>s.height)return;const r=e.options.links,o=r.opacity,a=e.retina.linksDistance??lT,l=r.warp;let c;l?c=new iT(t.x,t.y,a,s):c=new Un(t.x,t.y,a);const u=n.particles.quadTree.query(c);for(const d of u){const f=d.options.links;if(e===d||!f?.enable||r.id!==f.id||d.spawning||d.destroyed||!d.links||e.links.some(m=>m.destination===d)||d.links.some(m=>m.destination===e))continue;const h=d.getPosition();if(h.x<jl.x||h.y<jl.y||h.x>s.width||h.y>s.height)continue;const p=cT(t,h,a,s,l&&f.warp);if(p>a)continue;const _=(aT-p/a)*o;this._setColor(e),e.links.push({destination:d,opacity:_})}}isEnabled(e){return!!e.options.links?.enable}loadParticlesOptions(e,...t){e.links||(e.links=new oT);for(const n of t)e.links.load(n?.links)}reset(){}}async function fT(i,e=!0){await i.addInteractor("particlesLinks",async t=>Promise.resolve(new uT(t,i)),e)}function hT(i,e,t,n){i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(t.x,t.y),i.lineTo(n.x,n.y),i.closePath()}function dT(i){let e=!1;const{begin:t,end:n,engine:s,maxDistance:r,context:o,canvasSize:a,width:l,backgroundMask:c,colorLine:u,opacity:d,links:f}=i;if(yi(t,n)<=r)al(o,t,n),e=!0;else if(f.warp){let p,_;const m={x:n.x-a.width,y:n.y},g=$n(t,m);if(g.distance<=r){const v=t.y-g.dy/g.dx*t.x;p={x:0,y:v},_={x:a.width,y:v}}else{const v={x:n.x,y:n.y-a.height},M=$n(t,v);if(M.distance<=r){const w=-(t.y-M.dy/M.dx*t.x)/(M.dy/M.dx);p={x:w,y:0},_={x:w,y:a.height}}else{const y={x:n.x-a.width,y:n.y-a.height},w=$n(t,y);if(w.distance<=r){const T=t.y-w.dy/w.dx*t.x;p={x:-T/(w.dy/w.dx),y:T},_={x:p.x+a.width,y:p.y+a.height}}}}p&&_&&(al(o,t,p),al(o,n,_),e=!0)}if(!e)return;o.lineWidth=l,c.enable&&(o.globalCompositeOperation=c.composite),o.strokeStyle=Fs(u,d);const{shadow:h}=f;if(h.enable){const p=ji(s,h.color);p&&(o.shadowBlur=h.blur,o.shadowColor=Fs(p))}o.stroke()}function pT(i){const{context:e,pos1:t,pos2:n,pos3:s,backgroundMask:r,colorTriangle:o,opacityTriangle:a}=i;hT(e,t,n,s),r.enable&&(e.globalCompositeOperation=r.composite),e.fillStyle=Fs(o,a),e.fill()}function mT(i){return i.sort((e,t)=>e-t),i.join("_")}function Hm(i,e){const t=mT(i.map(s=>s.id));let n=e.get(t);return n===void 0&&(n=Tt(),e.set(t,n)),n}const Wm=0,tf=0,Xm=0,gT=.5,_T=1;class vT{constructor(e,t){this._drawLinkLine=(n,s)=>{const r=n.options.links;if(!r?.enable)return;const o=this._container,a=o.actualOptions,l=s.destination,c=n.getPosition(),u=l.getPosition();let d=s.opacity;o.canvas.draw(f=>{let h;const p=n.options.twinkle?.lines;if(p?.enable){const v=p.frequency,M=ji(this._engine,p.color);Tt()<v&&M&&(h=M,d=Ne(p.opacity))}if(!h){const v=r.id!==void 0?o.particles.linksColors.get(r.id):o.particles.linksColor;h=gh(n,l,v)}if(!h)return;const _=n.retina.linksWidth??tf,m=n.retina.linksDistance??Xm,{backgroundMask:g}=a;dT({context:f,width:_,begin:c,end:u,engine:this._engine,maxDistance:m,canvasSize:o.canvas.size,links:r,backgroundMask:g,colorLine:h,opacity:d})})},this._drawLinkTriangle=(n,s,r)=>{const o=n.options.links;if(!o?.enable)return;const a=o.triangles;if(!a.enable)return;const l=this._container,c=l.actualOptions,u=s.destination,d=r.destination,f=a.opacity??(s.opacity+r.opacity)*gT;f<=Wm||l.canvas.draw(h=>{const p=n.getPosition(),_=u.getPosition(),m=d.getPosition(),g=n.retina.linksDistance??Xm;if(yi(p,_)>g||yi(m,_)>g||yi(m,p)>g)return;let v=ji(this._engine,a.color);if(!v){const M=o.id!==void 0?l.particles.linksColors.get(o.id):l.particles.linksColor;v=gh(n,u,M)}v&&pT({context:h,pos1:p,pos2:_,pos3:m,backgroundMask:c.backgroundMask,colorTriangle:v,opacityTriangle:f})})},this._drawTriangles=(n,s,r,o)=>{const a=r.destination;if(!(n.links?.triangles.enable&&a.options.links?.triangles.enable))return;const l=a.links?.filter(c=>{const u=this._getLinkFrequency(a,c.destination);return a.options.links&&u<=a.options.links.frequency&&o.findIndex(f=>f.destination===c.destination)>=0});if(l?.length)for(const c of l){const u=c.destination;this._getTriangleFrequency(s,a,u)>n.links.triangles.frequency||this._drawLinkTriangle(s,r,c)}},this._getLinkFrequency=(n,s)=>Hm([n,s],this._freqs.links),this._getTriangleFrequency=(n,s,r)=>Hm([n,s,r],this._freqs.triangles),this._container=e,this._engine=t,this._freqs={links:new Map,triangles:new Map}}drawParticle(e,t){const{links:n,options:s}=t;if(!n?.length)return;const r=n.filter(o=>s.links&&(s.links.frequency>=_T||this._getLinkFrequency(t,o.destination)<=s.links.frequency));for(const o of r)this._drawTriangles(s,t,o,r),o.opacity>Wm&&(t.retina.linksWidth??tf)>tf&&this._drawLinkLine(t,o)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(e){if(e.links=[],!e.options.links)return;const t=this._container.retina.pixelRatio,{retina:n}=e,{distance:s,width:r}=e.options.links;n.linksDistance=s*t,n.linksWidth=r*t}particleDestroyed(e){e.links=[]}}class xT{constructor(e){this.id="links",this._engine=e}getPlugin(e){return Promise.resolve(new vT(e,this._engine))}loadOptions(){}needsPlugin(){return!0}}async function yT(i,e=!0){const t=new xT(i);await i.addPlugin(t,e)}async function MT(i,e=!0){i.checkVersion("3.9.1"),await fT(i,e),await yT(i,e)}const bT=180,Jl={x:0,y:0},ST=2;function wT(i,e,t){const{context:n}=i,s=t.count.numerator*t.count.denominator,r=t.count.numerator/t.count.denominator,o=bT*(r-ST)/r,a=Math.PI-hr(o);if(n){n.beginPath(),n.translate(e.x,e.y),n.moveTo(Jl.x,Jl.y);for(let l=0;l<s;l++)n.lineTo(t.length,Jl.y),n.translate(t.length,Jl.y),n.rotate(a)}}const ET=5;class j0{draw(e){const{particle:t,radius:n}=e,s=this.getCenter(t,n),r=this.getSidesData(t,n);wT(e,s,r)}getSidesCount(e){const t=e.shapeData;return Math.round(Ne(t?.sides??ET))}}const qm=3.5,Ym=2.66,TT=3;class AT extends j0{constructor(){super(...arguments),this.validTypes=["polygon"]}getCenter(e,t){return{x:-t/(e.sides/qm),y:-t/(Ym/qm)}}getSidesData(e,t){const n=e.sides;return{count:{denominator:1,numerator:n},length:t*Ym/(n/TT)}}}const CT=1.66,RT=3,PT=2;class DT extends j0{constructor(){super(...arguments),this.validTypes=["triangle"]}getCenter(e,t){return{x:-t,y:t/CT}}getSidesCount(){return RT}getSidesData(e,t){const n=t*PT;return{count:{denominator:2,numerator:3},length:n}}}async function LT(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new AT,e)}async function IT(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new DT,e)}async function OT(i,e=!0){i.checkVersion("3.9.1"),await LT(i,e),await IT(i,e)}class UT{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){ue(e)||(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=gt(e.speed)),e.decay!==void 0&&(this.decay=gt(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class FT extends po{constructor(){super(),this.animation=new UT,this.direction=Yi.clockwise,this.path=!1,this.value=0}load(e){ue(e)||(super.load(e),e.direction!==void 0&&(this.direction=e.direction),this.animation.load(e.animation),e.path!==void 0&&(this.path=e.path))}}const J0=2,NT=Math.PI*J0,kT=1,zT=360;class BT{constructor(e){this.container=e}init(e){const t=e.options.rotate;if(!t)return;e.rotate={enable:t.animation.enable,value:hr(Ne(t.value)),min:0,max:NT},e.pathRotation=t.path;let n=t.direction;switch(n===Yi.random&&(n=Math.floor(Tt()*J0)>0?Yi.counterClockwise:Yi.clockwise),n){case Yi.counterClockwise:case"counterClockwise":e.rotate.status=jt.decreasing;break;case Yi.clockwise:e.rotate.status=jt.increasing;break}const s=t.animation;s.enable&&(e.rotate.decay=kT-Ne(s.decay),e.rotate.velocity=Ne(s.speed)/zT*this.container.retina.reduceFactor,s.sync||(e.rotate.velocity*=Tt())),e.rotation=e.rotate.value}isEnabled(e){const t=e.options.rotate;return t?!e.destroyed&&!e.spawning&&(!!t.value||t.animation.enable||t.path):!1}loadOptions(e,...t){e.rotate||(e.rotate=new FT);for(const n of t)e.rotate.load(n?.rotate)}update(e,t){this.isEnabled(e)&&(e.isRotating=!!e.rotate,e.rotate&&(Hd(e,e.rotate,!1,lo.none,t),e.rotation=e.rotate.value))}}async function VT(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("rotate",t=>Promise.resolve(new BT(t)),e)}const GT=2,HT=Math.sqrt(GT),WT=2;function XT(i){const{context:e,radius:t}=i,n=t/HT,s=n*WT;e.rect(-n,-n,s,s)}const qT=4;class YT{constructor(){this.validTypes=["edge","square"]}draw(e){XT(e)}getSidesCount(){return qT}}async function $T(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new YT,e)}const ZT=2,So={x:0,y:0};function KT(i){const{context:e,particle:t,radius:n}=i,s=t.sides,r=t.starInset??ZT;e.moveTo(So.x,So.y-n);for(let o=0;o<s;o++)e.rotate(Math.PI/s),e.lineTo(So.x,So.y-n*r),e.rotate(Math.PI/s),e.lineTo(So.x,So.y-n)}const jT=2,JT=5;class QT{constructor(){this.validTypes=["star"]}draw(e){KT(e)}getSidesCount(e){const t=e.shapeData;return Math.round(Ne(t?.sides??JT))}particleInit(e,t){const n=t.shapeData;t.starInset=Ne(n?.inset??jT)}}async function e1(i,e=!0){i.checkVersion("3.9.1"),await i.addShape(new QT,e)}const t1=1;class n1{constructor(e,t){this._container=e,this._engine=t}init(e){const t=this._container,n=e.options,s=Ui(n.stroke,e.id,n.reduceDuplicates);e.strokeWidth=Ne(s.width)*t.retina.pixelRatio,e.strokeOpacity=Ne(s.opacity??t1),e.strokeAnimation=s.color?.animation;const r=vl(this._engine,s.color)??e.getFillColor();r&&(e.strokeColor=U0(r,e.strokeAnimation,t.retina.reduceFactor))}isEnabled(e){const t=e.strokeAnimation,{strokeColor:n}=e;return!e.destroyed&&!e.spawning&&!!t&&(n?.h.value!==void 0&&n.h.enable||n?.s.value!==void 0&&n.s.enable||n?.l.value!==void 0&&n.l.enable)}update(e,t){this.isEnabled(e)&&F0(e.strokeColor,t)}}async function i1(i,e=!0){i.checkVersion("3.9.1"),await i.addParticleUpdater("strokeColor",t=>Promise.resolve(new n1(t,i)),e)}async function s1(i,e=!0){i.checkVersion("3.9.1"),await WE(i,!1),await $S(i,!1),await iw(i,!1),await fw(i,!1),await Mw(i,!1),await Dw(i,!1),await Ow(i,!1),await zw(i,!1),await Hw(i,!1),await eE(i,!1),await rE(i,!1),await YE(i,!1),await nT(i,!1),await MT(i,!1),await kS(i,!1),await VS(i,!1),await DE(i,!1),await GE(i,!1),await OT(i,!1),await $T(i,!1),await e1(i,!1),await kE(i,!1),await VT(i,!1),await i1(i,!1),await NS(i,e)}const $d="183",r1=0,$m=1,o1=2,Nc=1,a1=2,Xa=3,xr=0,si=1,ls=2,Ns=0,ia=1,Zm=2,Km=3,jm=4,l1=5,Br=100,c1=101,u1=102,f1=103,h1=104,d1=200,p1=201,m1=202,g1=203,yh=204,Mh=205,_1=206,v1=207,x1=208,y1=209,M1=210,b1=211,S1=212,w1=213,E1=214,bh=0,Sh=1,wh=2,_a=3,Eh=4,Th=5,Ah=6,Ch=7,Q0=0,T1=1,A1=2,ms=0,ev=1,tv=2,nv=3,iv=4,sv=5,rv=6,ov=7,av=300,fo=301,va=302,nf=303,sf=304,xu=306,Rh=1e3,Os=1001,Ph=1002,xn=1003,C1=1004,Ql=1005,In=1006,rf=1007,$r=1008,Li=1009,lv=1010,cv=1011,bl=1012,Zd=1013,vs=1014,hs=1015,Vs=1016,Kd=1017,jd=1018,Sl=1020,uv=35902,fv=35899,hv=1021,dv=1022,Ki=1023,Gs=1026,Zr=1027,pv=1028,Jd=1029,xa=1030,Qd=1031,ep=1033,kc=33776,zc=33777,Bc=33778,Vc=33779,Dh=35840,Lh=35841,Ih=35842,Oh=35843,Uh=36196,Fh=37492,Nh=37496,kh=37488,zh=37489,Bh=37490,Vh=37491,Gh=37808,Hh=37809,Wh=37810,Xh=37811,qh=37812,Yh=37813,$h=37814,Zh=37815,Kh=37816,jh=37817,Jh=37818,Qh=37819,ed=37820,td=37821,nd=36492,id=36494,sd=36495,rd=36283,od=36284,ad=36285,ld=36286,R1=3200,P1=0,D1=1,er="",Ci="srgb",ya="srgb-linear",ou="linear",bt="srgb",wo=7680,Jm=519,L1=512,I1=513,O1=514,tp=515,U1=516,F1=517,np=518,N1=519,Qm=35044,eg="300 es",ds=2e3,au=2001;function k1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function z1(){const i=lu("canvas");return i.style.display="block",i}const tg={};function ng(...i){const e="THREE."+i.shift();console.log(e,...i)}function mv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=mv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=mv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cu(...i){const e=i.join(" ");e in tg||(tg[e]=!0,qe(...i))}function B1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const V1={[bh]:Sh,[wh]:Ah,[Eh]:Ch,[_a]:Th,[Sh]:bh,[Ah]:wh,[Ch]:Eh,[Th]:_a};class ba{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=Math.PI/180,cd=180/Math.PI;function Al(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function G1(i,e){return(i%e+e)%e}function af(i,e,t){return(1-t)*i+t*e}function Pa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sa{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==h||u!==p){let m=l*f+c*h+u*p+d*_;m<0&&(f=-f,h=-h,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+f*a,c=c*g+h*a,u=u*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+p*a,d=d*g+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new V,ig=new Sa;class Qe{constructor(e,t,n,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],M=s[4],y=s[7],w=s[2],T=s[5],E=s[8];return r[0]=o*_+a*v+l*w,r[3]=o*m+a*M+l*T,r[6]=o*g+a*y+l*E,r[1]=c*_+u*v+d*w,r[4]=c*m+u*M+d*T,r[7]=c*g+u*y+d*E,r[2]=f*_+h*v+p*w,r[5]=f*m+h*M+p*T,r[8]=f*g+h*y+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new Qe,sg=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H1(){const i={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=sa(s.r),s.g=sa(s.g),s.b=sa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===er?ou:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ya]:{primaries:e,whitePoint:n,transfer:ou,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),i}const ft=H1();function ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Eo;class W1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Eo===void 0&&(Eo=lu("canvas")),Eo.width=e.width,Eo.height=e.height;const s=Eo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Eo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X1=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uf(s[o].image)):r.push(uf(s[o]))}else r=uf(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function uf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?W1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let q1=0;const ff=new V;class Zn extends ba{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,n=Os,s=Os,r=In,o=$r,a=Ki,l=Li,c=Zn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Al(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=av;Zn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(h+1)/2,w=(g+1)/2,T=(u+f)/4,E=(d+_)/4,x=(p+m)/4;return M>y&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y1 extends ba{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Zn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ip(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends Y1{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gv extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $1 extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e,t,n,s,r,o,a,l,c,u,d,f,h,p,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,f,h,p,_,m)}set(e,t,n,s,r,o,a,l,c,u,d,f,h,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/To.setFromMatrixColumn(e,0).length(),r=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,p=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,p=c*u,_=c*d;t[0]=f+_*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,p=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,p=a*u,_=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z1,e,K1)}lookAt(e,t,n){const s=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),qs.crossVectors(n,ai),qs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),qs.crossVectors(n,ai)),qs.normalize(),ec.crossVectors(ai,qs),s[0]=qs.x,s[4]=ec.x,s[8]=ai.x,s[1]=qs.y,s[5]=ec.y,s[9]=ai.y,s[2]=qs.z,s[6]=ec.z,s[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],M=n[7],y=n[11],w=n[15],T=s[0],E=s[4],x=s[8],S=s[12],P=s[1],R=s[5],I=s[9],z=s[13],G=s[2],k=s[6],B=s[10],U=s[14],J=s[3],Q=s[7],D=s[11],ae=s[15];return r[0]=o*T+a*P+l*G+c*J,r[4]=o*E+a*R+l*k+c*Q,r[8]=o*x+a*I+l*B+c*D,r[12]=o*S+a*z+l*U+c*ae,r[1]=u*T+d*P+f*G+h*J,r[5]=u*E+d*R+f*k+h*Q,r[9]=u*x+d*I+f*B+h*D,r[13]=u*S+d*z+f*U+h*ae,r[2]=p*T+_*P+m*G+g*J,r[6]=p*E+_*R+m*k+g*Q,r[10]=p*x+_*I+m*B+g*D,r[14]=p*S+_*z+m*U+g*ae,r[3]=v*T+M*P+y*G+w*J,r[7]=v*E+M*R+y*k+w*Q,r[11]=v*x+M*I+y*B+w*D,r[15]=v*S+M*z+y*U+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*h-c*f,M=a*h-c*d,y=a*f-l*d,w=o*h-c*u,T=o*f-l*u,E=o*d-a*u;return t*(_*v-m*M+g*y)-n*(p*v-m*w+g*T)+s*(p*M-_*w+g*E)-r*(p*y-_*T+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*a-n*o,M=t*l-s*o,y=t*c-r*o,w=n*l-s*a,T=n*c-r*a,E=s*c-r*l,x=u*_-d*p,S=u*m-f*p,P=u*g-h*p,R=d*m-f*_,I=d*g-h*_,z=f*g-h*m,G=v*z-M*I+y*R+w*P-T*S+E*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=(a*z-l*I+c*R)*k,e[1]=(s*I-n*z-r*R)*k,e[2]=(_*E-m*T+g*w)*k,e[3]=(f*T-d*E-h*w)*k,e[4]=(l*P-o*z-c*S)*k,e[5]=(t*z-s*P+r*S)*k,e[6]=(m*y-p*E-g*M)*k,e[7]=(u*E-f*y+h*M)*k,e[8]=(o*I-a*P+c*x)*k,e[9]=(n*P-t*I-r*x)*k,e[10]=(p*T-_*y+g*v)*k,e[11]=(d*y-u*T-h*v)*k,e[12]=(a*S-o*R-l*x)*k,e[13]=(t*R-n*S+s*x)*k,e[14]=(_*M-p*w-m*v)*k,e[15]=(u*w-d*M+f*v)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,_=o*u,m=o*d,g=a*d,v=l*c,M=l*u,y=l*d,w=n.x,T=n.y,E=n.z;return s[0]=(1-(_+g))*w,s[1]=(h+y)*w,s[2]=(p-M)*w,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(f+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(p+M)*E,s[9]=(m-v)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=To.set(s[0],s[1],s[2]).length();const a=To.set(s[4],s[5],s[6]).length(),l=To.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gi.copy(this);const c=1/o,u=1/a,d=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=d,Gi.elements[9]*=d,Gi.elements[10]*=d,t.setFromRotationMatrix(Gi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ds,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ds)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===au)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ds,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ds)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===au)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const To=new V,Gi=new kt,Z1=new V(0,0,0),K1=new V(1,1,1),qs=new V,ec=new V,ai=new V,og=new kt,ag=new Sa;class Hs{constructor(e=0,t=0,n=0,s=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ag.setFromEuler(this),this.setFromQuaternion(ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j1=0;const lg=new V,Ao=new Sa,Ss=new kt,tc=new V,Da=new V,J1=new V,Q1=new Sa,cg=new V(1,0,0),ug=new V(0,1,0),fg=new V(0,0,1),hg={type:"added"},eA={type:"removed"},Co={type:"childadded",child:null},hf={type:"childremoved",child:null};class Kn extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new V,t=new Hs,n=new Sa,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new Qe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,t){return lg.copy(e).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(Da,tc,this.up):Ss.lookAt(tc,Da,this.up),this.quaternion.setFromRotationMatrix(Ss),s&&(Ss.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(Ss),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),Co.child=e,this.dispatchEvent(Co),Co.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eA),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),Co.child=e,this.dispatchEvent(Co),Co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,J1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Q1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kn.DEFAULT_UP=new V(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qa extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},nc={h:0,s:0,l:0};function pf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=G1(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pf(o,r,e+1/3),this.g=pf(o,r,e),this.b=pf(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Ci){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ci){const n=vv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return ft.workingToColorSpace(En.copy(this),e),Math.round(ot(En.r*255,0,255))*65536+Math.round(ot(En.g*255,0,255))*256+Math.round(ot(En.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(En.copy(this),t);const n=En.r,s=En.g,r=En.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Ci){ft.workingToColorSpace(En.copy(this),e);const t=En.r,n=En.g,s=En.b;return e!==Ci?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(nc);const n=af(Ys.h,nc.h,t),s=af(Ys.s,nc.s,t),r=af(Ys.l,nc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new yt;yt.NAMES=vv;class nA extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hs,this.environmentIntensity=1,this.environmentRotation=new Hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hi=new V,ws=new V,mf=new V,Es=new V,Ro=new V,Po=new V,dg=new V,gf=new V,_f=new V,vf=new V,xf=new Xt,yf=new Xt,Mf=new Xt;class $i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hi.subVectors(e,t),s.cross(Hi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hi.subVectors(s,t),ws.subVectors(n,t),mf.subVectors(e,t);const o=Hi.dot(Hi),a=Hi.dot(ws),l=Hi.dot(mf),c=ws.dot(ws),u=ws.dot(mf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Es.x),l.addScaledVector(o,Es.y),l.addScaledVector(a,Es.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return xf.setScalar(0),yf.setScalar(0),Mf.setScalar(0),xf.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,n),Mf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xf,r.x),o.addScaledVector(yf,r.y),o.addScaledVector(Mf,r.z),o}static isFrontFacing(e,t,n,s){return Hi.subVectors(n,t),ws.subVectors(e,t),Hi.cross(ws).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Hi.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return $i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ro.subVectors(s,n),Po.subVectors(r,n),gf.subVectors(e,n);const l=Ro.dot(gf),c=Po.dot(gf);if(l<=0&&c<=0)return t.copy(n);_f.subVectors(e,s);const u=Ro.dot(_f),d=Po.dot(_f);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ro,o);vf.subVectors(e,r);const h=Ro.dot(vf),p=Po.dot(vf);if(p>=0&&h<=p)return t.copy(r);const _=h*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Po,a);const m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return dg.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(dg,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Ro,o).addScaledVector(Po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cl{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),sc.subVectors(this.max,La),Do.subVectors(e.a,La),Lo.subVectors(e.b,La),Io.subVectors(e.c,La),$s.subVectors(Lo,Do),Zs.subVectors(Io,Lo),Rr.subVectors(Do,Io);let t=[0,-$s.z,$s.y,0,-Zs.z,Zs.y,0,-Rr.z,Rr.y,$s.z,0,-$s.x,Zs.z,0,-Zs.x,Rr.z,0,-Rr.x,-$s.y,$s.x,0,-Zs.y,Zs.x,0,-Rr.y,Rr.x,0];return!bf(t,Do,Lo,Io,sc)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,Do,Lo,Io,sc))?!1:(rc.crossVectors($s,Zs),t=[rc.x,rc.y,rc.z],bf(t,Do,Lo,Io,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ts=[new V,new V,new V,new V,new V,new V,new V,new V],Wi=new V,ic=new Cl,Do=new V,Lo=new V,Io=new V,$s=new V,Zs=new V,Rr=new V,La=new V,sc=new V,rc=new V,Pr=new V;function bf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pr.fromArray(i,r);const a=s.x*Math.abs(Pr.x)+s.y*Math.abs(Pr.y)+s.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $t=new V,oc=new ht;let iA=0;class Ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qm,this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),s=Jn(s,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qm&&(e.usage=this.usage),e}}class xv extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yv extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}const sA=new Cl,Ia=new V,Sf=new V;class Rl{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sA.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Sf)),this.expandByPoint(Ia.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rA=0;const Ti=new kt,wf=new Kn,Oo=new V,li=new Cl,Oa=new Cl,fn=new V;class kn extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k1(e)?yv:xv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(li.min,Oa.min),li.expandByPoint(fn),fn.addVectors(li.max,Oa.max),li.expandByPoint(fn)):(li.expandByPoint(Oa.min),li.expandByPoint(Oa.max))}li.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(Oo.fromBufferAttribute(e,c),fn.add(Oo)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new V,l[x]=new V;const c=new V,u=new V,d=new V,f=new ht,h=new ht,p=new ht,_=new V,m=new V;function g(x,S,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,P),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,S),p.fromBufferAttribute(r,P),u.sub(c),d.sub(c),h.sub(f),p.sub(f);const R=1/(h.x*p.y-p.x*h.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(R),a[x].add(_),a[S].add(_),a[P].add(_),l[x].add(m),l[S].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){const P=v[x],R=P.start,I=P.count;for(let z=R,G=R+I;z<G;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new V,y=new V,w=new V,T=new V;function E(x){w.fromBufferAttribute(s,x),T.copy(w);const S=a[x];M.copy(S),M.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(T,S);const R=y.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,R)}for(let x=0,S=v.length;x<S;++x){const P=v[x],R=P.start,I=P.count;for(let z=R,G=R+I;z<G;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new Ni(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oA=0;class wa extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=Al(),this.name="",this.type="Material",this.blending=ia,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==Mh&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const As=new V,Ef=new V,ac=new V,Ks=new V,Tf=new V,lc=new V,Af=new V;class sp{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,As)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=As.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(As.copy(this.origin).addScaledVector(this.direction,t),As.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ef.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(Ef);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=Ks.dot(this.direction),l=-Ks.dot(ac),c=Ks.lengthSq(),u=Math.abs(1-o*o);let d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ef).addScaledVector(ac,f),h}intersectSphere(e,t){As.subVectors(e.center,this.origin);const n=As.dot(this.direction),s=As.dot(As)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,As)!==null}intersectTriangle(e,t,n,s,r){Tf.subVectors(t,e),lc.subVectors(n,e),Af.crossVectors(Tf,lc);let o=this.direction.dot(Af),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ks.subVectors(this.origin,e);const l=a*this.direction.dot(lc.crossVectors(Ks,lc));if(l<0)return null;const c=a*this.direction.dot(Tf.cross(Ks));if(c<0||l+c>o)return null;const u=-a*Ks.dot(Af);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ll extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hs,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pg=new kt,Dr=new sp,cc=new Rl,mg=new V,uc=new V,fc=new V,hc=new V,Cf=new V,dc=new V,gg=new V,pc=new V;class ki extends Kn{constructor(e=new kn,t=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Cf.fromBufferAttribute(d,e),o?dc.addScaledVector(Cf,u):dc.addScaledVector(Cf.sub(t),u))}t.add(dc)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),Dr.copy(e.ray).recast(e.near),!(cc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(cc,mg)===null||Dr.origin.distanceToSquared(mg)>(e.far-e.near)**2))&&(pg.copy(r).invert(),Dr.copy(e.ray).applyMatrix4(pg),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,w=M;y<w;y+=3){const T=a.getX(y),E=a.getX(y+1),x=a.getX(y+2);s=mc(this,g,e,n,c,u,d,T,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=mc(this,o,e,n,c,u,d,v,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,w=M;y<w;y+=3){const T=y,E=y+1,x=y+2;s=mc(this,g,e,n,c,u,d,T,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=p,g=_;m<g;m+=3){const v=m,M=m+1,y=m+2;s=mc(this,o,e,n,c,u,d,v,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function aA(i,e,t,n,s,r,o,a){let l;if(e.side===si?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xr,a),l===null)return null;pc.copy(a),pc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pc);return c<t.near||c>t.far?null:{distance:c,point:pc.clone(),object:i}}function mc(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,uc),i.getVertexPosition(l,fc),i.getVertexPosition(c,hc);const u=aA(i,e,t,n,uc,fc,hc,gg);if(u){const d=new V;$i.getBarycoord(gg,uc,fc,hc,d),s&&(u.uv=$i.getInterpolatedAttribute(s,a,l,c,d,new ht)),r&&(u.uv1=$i.getInterpolatedAttribute(r,a,l,c,d,new ht)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};$i.getNormal(uc,fc,hc,f.normal),u.face=f,u.barycoord=d}return u}class lA extends Zn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=xn,u=xn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rf=new V,cA=new V,uA=new Qe;class kr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Rf.subVectors(n,t).cross(cA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rf),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uA.getNormalMatrix(e),s=this.coplanarPoint(Rf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Rl,fA=new ht(.5,.5),gc=new V;class Mv{constructor(e=new kr,t=new kr,n=new kr,s=new kr,r=new kr,o=new kr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ds,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],M=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,h-u,g-p,w-v).normalize(),s[1].setComponents(c+o,h+u,g+p,w+v).normalize(),s[2].setComponents(c+a,h+d,g+_,w+M).normalize(),s[3].setComponents(c-a,h-d,g-_,w-M).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,h-f,g-m,w-y).normalize();else if(s[4].setComponents(c-l,h-f,g-m,w-y).normalize(),t===ds)s[5].setComponents(c+l,h+f,g+m,w+y).normalize();else if(t===au)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const t=fA.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bv extends wa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new V,fu=new V,_g=new kt,Ua=new sp,_c=new Rl,Pf=new V,vg=new V;class hA extends Kn{constructor(e=new kn,t=new bv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uu.fromBufferAttribute(t,s-1),fu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new on(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,e.ray.intersectsSphere(_c)===!1)return;_g.copy(s).invert(),Ua.copy(e.ray).applyMatrix4(_g);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,m=p-1;_<m;_+=c){const g=u.getX(_),v=u.getX(_+1),M=vc(this,e,Ua,l,g,v,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(h),g=vc(this,e,Ua,l,_,m,p-1);g&&t.push(g)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,m=p-1;_<m;_+=c){const g=vc(this,e,Ua,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=vc(this,e,Ua,l,p-1,h,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vc(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(uu.fromBufferAttribute(a,s),fu.fromBufferAttribute(a,r),t.distanceSqToSegment(uu,fu,Pf,vg)>n)return;Pf.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pf);if(!(c<e.near||c>e.far))return{distance:c,point:vg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Sv extends wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new kt,ud=new sp,xc=new Rl,yc=new V;class dA extends Kn{constructor(e=new kn,t=new Sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;xg.copy(s).invert(),ud.copy(e.ray).applyMatrix4(xg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,_=h;p<_;p++){const m=c.getX(p);yc.fromBufferAttribute(d,m),yg(yc,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,_=h;p<_;p++)yc.fromBufferAttribute(d,p),yg(yc,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yg(i,e,t,n,s,r,o){const a=ud.distanceSqToPoint(i);if(a<t){const l=new V;ud.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wv extends Zn{constructor(e=[],t=fo,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wl extends Zn{constructor(e,t,n=vs,s,r,o,a=xn,l=xn,c,u=Gs,d=1){if(u!==Gs&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pA extends wl{constructor(e,t=vs,n=fo,s,r,o=xn,a=xn,l,c=Gs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ev extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends kn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2));function p(_,m,g,v,M,y,w,T,E,x,S){const P=y/E,R=w/x,I=y/2,z=w/2,G=T/2,k=E+1,B=x+1;let U=0,J=0;const Q=new V;for(let D=0;D<B;D++){const ae=D*R-z;for(let ce=0;ce<k;ce++){const Ue=ce*P-I;Q[_]=Ue*v,Q[m]=ae*M,Q[g]=G,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[g]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ce/E),d.push(1-D/x),U+=1}}for(let D=0;D<x;D++)for(let ae=0;ae<E;ae++){const ce=f+ae+k*D,Ue=f+ae+k*(D+1),Ve=f+(ae+1)+k*(D+1),$e=f+(ae+1)+k*D;l.push(ce,Ue,$e),l.push(Ue,Ve,$e),J+=6}a.addGroup(h,J,S),h+=J,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rp extends kn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new on(r,3)),this.setAttribute("normal",new on(r.slice(),3)),this.setAttribute("uv",new on(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new V,y=new V,w=new V;for(let T=0;T<t.length;T+=3)h(t[T+0],M),h(t[T+1],y),h(t[T+2],w),l(M,y,w,v)}function l(v,M,y,w){const T=w+1,E=[];for(let x=0;x<=T;x++){E[x]=[];const S=v.clone().lerp(y,x/T),P=M.clone().lerp(y,x/T),R=T-x;for(let I=0;I<=R;I++)I===0&&x===T?E[x][I]=S:E[x][I]=S.clone().lerp(P,I/R)}for(let x=0;x<T;x++)for(let S=0;S<2*(T-x)-1;S++){const P=Math.floor(S/2);S%2===0?(f(E[x][P+1]),f(E[x+1][P]),f(E[x][P])):(f(E[x][P+1]),f(E[x+1][P+1]),f(E[x+1][P]))}}function c(v){const M=new V;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){const v=new V;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const y=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const M=o[v+0],y=o[v+2],w=o[v+4],T=Math.max(M,y,w),E=Math.min(M,y,w);T>.9&&E<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function h(v,M){const y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){const v=new V,M=new V,y=new V,w=new V,T=new ht,E=new ht,x=new ht;for(let S=0,P=0;S<r.length;S+=9,P+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(o[P+0],o[P+1]),E.set(o[P+2],o[P+3]),x.set(o[P+4],o[P+5]),w.copy(v).add(M).add(y).divideScalar(3);const R=m(w);_(T,P+0,v,R),_(E,P+2,M,R),_(x,P+4,y,R)}}function _(v,M,y,w){w<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rp(e.vertices,e.indices,e.radius,e.detail)}}class mA{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ht:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,s=[],r=[],o=[],a=new V,l=new kt;for(let h=0;h<=e;h++){const p=h/e;s[h]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ot(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(ot(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function gA(i,e){const t=1-i;return t*t*e}function _A(i,e){return 2*(1-i)*i*e}function vA(i,e){return i*i*e}function Df(i,e,t,n){return gA(i,e)+_A(i,t)+vA(i,n)}class xA extends mA{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Df(e,s.x,r.x,o.x),Df(e,s.y,r.y,o.y),Df(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends rp{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new op(e.radius,e.detail)}}class yu extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*f-o;for(let M=0;M<c;M++){const y=M*d-r;p.push(y,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),T=v+1+c*g;h.push(M,y,T),h.push(y,w,T)}this.setIndex(h),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ap extends kn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/s,h=new V,p=new ht;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,y=v+n+1,w=v+n+2,T=v+1;a.push(M,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lp extends kn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new V,f=new V,h=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n;let y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(T+y,1-M),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const M=u[g][v+1],y=u[g][v],w=u[g+1][v],T=u[g+1][v+1];(g!==0||o>0)&&h.push(M,y,T),(g!==n-1||l<Math.PI)&&h.push(y,w,T)}this.setIndex(h),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ma(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vn(i){const e={};for(let t=0;t<i.length;t++){const n=Ma(i[t]);for(const s in n)e[s]=n[s]}return e}function yA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const MA={clone:Ma,merge:Vn};var bA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bA,this.fragmentShader=SA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=yA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wA extends xs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class EA extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TA extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mc=new V,bc=new Sa,ts=new V;class Av extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ds,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,bc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,bc,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mc,bc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,bc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const js=new V,Mg=new ht,bg=new ht;class Di extends Av{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,Mg,bg),t.subVectors(bg,Mg)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(of*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Cv extends Av{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Uo=-90,Fo=1;class AA extends Kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(Uo,Fo,e,t);s.layers=this.layers,this.add(s);const r=new Di(Uo,Fo,e,t);r.layers=this.layers,this.add(r);const o=new Di(Uo,Fo,e,t);o.layers=this.layers,this.add(o);const a=new Di(Uo,Fo,e,t);a.layers=this.layers,this.add(a);const l=new Di(Uo,Fo,e,t);l.layers=this.layers,this.add(l);const c=new Di(Uo,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ds)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===au)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class CA extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sg(i,e,t,n){const s=PA(n);switch(t){case hv:return i*e;case pv:return i*e/s.components*s.byteLength;case Jd:return i*e/s.components*s.byteLength;case xa:return i*e*2/s.components*s.byteLength;case Qd:return i*e*2/s.components*s.byteLength;case dv:return i*e*3/s.components*s.byteLength;case Ki:return i*e*4/s.components*s.byteLength;case ep:return i*e*4/s.components*s.byteLength;case kc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Oh:return Math.max(i,16)*Math.max(e,8)/4;case Dh:case Ih:return Math.max(i,8)*Math.max(e,8)/2;case Uh:case Fh:case kh:case zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nh:case Bh:case Vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nd:case id:case sd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rd:case od:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ad:case ld:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PA(i){switch(i){case Li:case lv:return{byteLength:1,components:1};case bl:case cv:case Vs:return{byteLength:2,components:1};case Kd:case jd:return{byteLength:2,components:4};case vs:case Zd:case hs:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);function Rv(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function DA(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],_=d[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const _=d[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var LA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lC="gl_FragColor = linearToOutputTexel( gl_FragColor );",cC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_C=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ER=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:LA,alphahash_pars_fragment:IA,alphamap_fragment:OA,alphamap_pars_fragment:UA,alphatest_fragment:FA,alphatest_pars_fragment:NA,aomap_fragment:kA,aomap_pars_fragment:zA,batching_pars_vertex:BA,batching_vertex:VA,begin_vertex:GA,beginnormal_vertex:HA,bsdfs:WA,iridescence_fragment:XA,bumpmap_pars_fragment:qA,clipping_planes_fragment:YA,clipping_planes_pars_fragment:$A,clipping_planes_pars_vertex:ZA,clipping_planes_vertex:KA,color_fragment:jA,color_pars_fragment:JA,color_pars_vertex:QA,color_vertex:eC,common:tC,cube_uv_reflection_fragment:nC,defaultnormal_vertex:iC,displacementmap_pars_vertex:sC,displacementmap_vertex:rC,emissivemap_fragment:oC,emissivemap_pars_fragment:aC,colorspace_fragment:lC,colorspace_pars_fragment:cC,envmap_fragment:uC,envmap_common_pars_fragment:fC,envmap_pars_fragment:hC,envmap_pars_vertex:dC,envmap_physical_pars_fragment:wC,envmap_vertex:pC,fog_vertex:mC,fog_pars_vertex:gC,fog_fragment:_C,fog_pars_fragment:vC,gradientmap_pars_fragment:xC,lightmap_pars_fragment:yC,lights_lambert_fragment:MC,lights_lambert_pars_fragment:bC,lights_pars_begin:SC,lights_toon_fragment:EC,lights_toon_pars_fragment:TC,lights_phong_fragment:AC,lights_phong_pars_fragment:CC,lights_physical_fragment:RC,lights_physical_pars_fragment:PC,lights_fragment_begin:DC,lights_fragment_maps:LC,lights_fragment_end:IC,logdepthbuf_fragment:OC,logdepthbuf_pars_fragment:UC,logdepthbuf_pars_vertex:FC,logdepthbuf_vertex:NC,map_fragment:kC,map_pars_fragment:zC,map_particle_fragment:BC,map_particle_pars_fragment:VC,metalnessmap_fragment:GC,metalnessmap_pars_fragment:HC,morphinstance_vertex:WC,morphcolor_vertex:XC,morphnormal_vertex:qC,morphtarget_pars_vertex:YC,morphtarget_vertex:$C,normal_fragment_begin:ZC,normal_fragment_maps:KC,normal_pars_fragment:jC,normal_pars_vertex:JC,normal_vertex:QC,normalmap_pars_fragment:eR,clearcoat_normal_fragment_begin:tR,clearcoat_normal_fragment_maps:nR,clearcoat_pars_fragment:iR,iridescence_pars_fragment:sR,opaque_fragment:rR,packing:oR,premultiplied_alpha_fragment:aR,project_vertex:lR,dithering_fragment:cR,dithering_pars_fragment:uR,roughnessmap_fragment:fR,roughnessmap_pars_fragment:hR,shadowmap_pars_fragment:dR,shadowmap_pars_vertex:pR,shadowmap_vertex:mR,shadowmask_pars_fragment:gR,skinbase_vertex:_R,skinning_pars_vertex:vR,skinning_vertex:xR,skinnormal_vertex:yR,specularmap_fragment:MR,specularmap_pars_fragment:bR,tonemapping_fragment:SR,tonemapping_pars_fragment:wR,transmission_fragment:ER,transmission_pars_fragment:TR,uv_pars_fragment:AR,uv_pars_vertex:CR,uv_vertex:RR,worldpos_vertex:PR,background_vert:DR,background_frag:LR,backgroundCube_vert:IR,backgroundCube_frag:OR,cube_vert:UR,cube_frag:FR,depth_vert:NR,depth_frag:kR,distance_vert:zR,distance_frag:BR,equirect_vert:VR,equirect_frag:GR,linedashed_vert:HR,linedashed_frag:WR,meshbasic_vert:XR,meshbasic_frag:qR,meshlambert_vert:YR,meshlambert_frag:$R,meshmatcap_vert:ZR,meshmatcap_frag:KR,meshnormal_vert:jR,meshnormal_frag:JR,meshphong_vert:QR,meshphong_frag:eP,meshphysical_vert:tP,meshphysical_frag:nP,meshtoon_vert:iP,meshtoon_frag:sP,points_vert:rP,points_frag:oP,shadow_vert:aP,shadow_frag:lP,sprite_vert:cP,sprite_frag:uP},_e={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},os={basic:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Vn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Vn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new yt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Vn([_e.points,_e.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Vn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Vn([_e.common,_e.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Vn([_e.sprite,_e.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Vn([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Vn([_e.lights,_e.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};os.physical={uniforms:Vn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Sc={r:0,b:0,g:0},Ir=new Hs,fP=new kt;function hP(i,e,t,n,s,r){const o=new yt(0);let a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1;const y=h(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){const y=h(M);y&&(y.isCubeTexture||y.mapping===xu)?(c===void 0&&(c=new ki(new Pl(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:Ma(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ir.copy(M.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fP.makeRotationFromEuler(Ir)),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==bt,(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ki(new yu(2,2),new xs({name:"BackgroundMaterial",uniforms:Ma(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Sc,Tv(i)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function dP(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(R,I,z,G,k){let B=!1;const U=d(R,G,z,I);r!==U&&(r=U,c(r.object)),B=h(R,G,z,k),B&&p(R,G,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(R,I,z,G),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,I,z,G){const k=G.wireframe===!0;let B=n[I.id];B===void 0&&(B={},n[I.id]=B);const U=R.isInstancedMesh===!0?R.id:0;let J=B[U];J===void 0&&(J={},B[U]=J);let Q=J[z.id];Q===void 0&&(Q={},J[z.id]=Q);let D=Q[k];return D===void 0&&(D=f(l()),Q[k]=D),D}function f(R){const I=[],z=[],G=[];for(let k=0;k<t;k++)I[k]=0,z[k]=0,G[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:G,object:R,attributes:{},index:null}}function h(R,I,z,G){const k=r.attributes,B=I.attributes;let U=0;const J=z.getAttributes();for(const Q in J)if(J[Q].location>=0){const ae=k[Q];let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;U++}return r.attributesNum!==U||r.index!==G}function p(R,I,z,G){const k={},B=I.attributes;let U=0;const J=z.getAttributes();for(const Q in J)if(J[Q].location>=0){let ae=B[Q];ae===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),k[Q]=ce,U++}r.attributes=k,r.attributesNum=U,r.index=G}function _(){const R=r.newAttributes;for(let I=0,z=R.length;I<z;I++)R[I]=0}function m(R){g(R,0)}function g(R,I){const z=r.newAttributes,G=r.enabledAttributes,k=r.attributeDivisors;z[R]=1,G[R]===0&&(i.enableVertexAttribArray(R),G[R]=1),k[R]!==I&&(i.vertexAttribDivisor(R,I),k[R]=I)}function v(){const R=r.newAttributes,I=r.enabledAttributes;for(let z=0,G=I.length;z<G;z++)I[z]!==R[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function M(R,I,z,G,k,B,U){U===!0?i.vertexAttribIPointer(R,I,z,k,B):i.vertexAttribPointer(R,I,z,G,k,B)}function y(R,I,z,G){_();const k=G.attributes,B=z.getAttributes(),U=I.defaultAttributeValues;for(const J in B){const Q=B[J];if(Q.location>=0){let D=k[J];if(D===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),D!==void 0){const ae=D.normalized,ce=D.itemSize,Ue=e.get(D);if(Ue===void 0)continue;const Ve=Ue.buffer,$e=Ue.type,$=Ue.bytesPerElement,ee=$e===i.INT||$e===i.UNSIGNED_INT||D.gpuType===Zd;if(D.isInterleavedBufferAttribute){const ne=D.data,Pe=ne.stride,De=D.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)g(Q.location+Re,ne.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<Q.locationSize;Re++)m(Q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Re=0;Re<Q.locationSize;Re++)M(Q.location+Re,ce/Q.locationSize,$e,ae,Pe*$,(De+ce/Q.locationSize*Re)*$,ee)}else{if(D.isInstancedBufferAttribute){for(let ne=0;ne<Q.locationSize;ne++)g(Q.location+ne,D.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ne=0;ne<Q.locationSize;ne++)m(Q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ne=0;ne<Q.locationSize;ne++)M(Q.location+ne,ce/Q.locationSize,$e,ae,ce*$,ce/Q.locationSize*ne*$,ee)}}else if(U!==void 0){const ae=U[J];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Q.location,ae);break;case 3:i.vertexAttrib3fv(Q.location,ae);break;case 4:i.vertexAttrib4fv(Q.location,ae);break;default:i.vertexAttrib1fv(Q.location,ae)}}}}v()}function w(){S();for(const R in n){const I=n[R];for(const z in I){const G=I[z];for(const k in G){const B=G[k];for(const U in B)u(B[U].object),delete B[U];delete G[k]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const z in I){const G=I[z];for(const k in G){const B=G[k];for(const U in B)u(B[U].object),delete B[U];delete G[k]}}delete n[R.id]}function E(R){for(const I in n){const z=n[I];for(const G in z){const k=z[G];if(k[R.id]===void 0)continue;const B=k[R.id];for(const U in B)u(B[U].object),delete B[U];delete k[R.id]}}}function x(R){for(const I in n){const z=n[I],G=R.isInstancedMesh===!0?R.id:0,k=z[G];if(k!==void 0){for(const B in k){const U=k[B];for(const J in U)u(U[J].object),delete U[J];delete k[B]}delete z[G],Object.keys(z).length===0&&delete n[I]}}}function S(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function pP(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_]*f[_];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mP(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Ki&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const x=E===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Li&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hs&&!x)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:T}}function gP(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new kr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,M=v*4;let y=g.clippingState||null;l.value=y,y=u(p,f,M,h);for(let w=0;w!==M;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=h;M!==_;++M,y+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const lr=4,wg=[.125,.215,.35,.446,.526,.582],Vr=20,_P=256,Fa=new Cv,Eg=new yt;let Lf=null,If=0,Of=0,Uf=!1;const vP=new V;class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=vP}=r;Lf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,If,Of),this._renderer.xr.enabled=Uf,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Vs,format:Ki,colorSpace:ya,depthBuffer:!1},s=Ag(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xP(r)),this._blurMaterial=MP(r,e,t),this._ggxMaterial=yP(r,e,t)}return s}_compileMaterial(e){const t=new ki(new kn,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s,r){const l=new Di(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Eg),d.toneMapping=ms,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new Pl,new ll({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Eg),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const w=this._cubeSize;No(s,y*w,M>2?w:0,w,w),d.setRenderTarget(s),g&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fo||e.mapping===va;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;No(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-lr?n-p+lr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,No(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,Fa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,No(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,Fa)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Vr-1),_=r/p,m=isFinite(r)?1+Math.floor(u*_):Vr;m>Vr&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const g=[];let v=0;for(let E=0;E<Vr;++E){const x=E/_,S=Math.exp(-x*x/2);g.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<g.length;E++)g[E]=g[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-n;const y=this._sizeLods[s],w=3*y*(s>M-lr?s-M+lr:0),T=4*(this._cubeSize-y);No(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Fa)}}function xP(i){const e=[],t=[],n=[];let s=i;const r=i-lr+1+wg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-lr?l=wg[o-i+lr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*h),M=new Float32Array(m*p*h),y=new Float32Array(g*p*h);for(let T=0;T<h;T++){const E=T%3*2/3-1,x=T>2?0:-1,S=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];v.set(S,_*p*T),M.set(f,m*p*T);const P=[T,T,T,T,T,T];y.set(P,g*p*T)}const w=new kn;w.setAttribute("position",new Ni(v,_)),w.setAttribute("uv",new Ni(M,m)),w.setAttribute("faceIndex",new Ni(y,g)),n.push(new ki(w,null)),s>lr&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ag(i,e,t){const n=new gs(i,e,t);return n.texture.mapping=xu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yP(i,e,t){return new xs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_P,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function MP(i,e,t){const n=new Float32Array(Vr),s=new V(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Cg(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Rg(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pv extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pl(5,5,5),r=new xs({name:"CubemapFromEquirect",uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:Ns});r.uniforms.tEquirect.value=t;const o=new ki(s,r),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=In),new AA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function bP(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===nf||h===sf)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new Pv(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===nf||h===sf,_=h===fo||h===va;if(p||_){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Tg(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Tg(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===nf?f.mapping=fo:h===sf&&(f.mapping=va),f}function l(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function c(f){const h=f.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function SP(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&cu("WebGLRenderer: "+n+" extension not supported."),s}}}function wP(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let M=0,y=v.length;M<y;M+=3){const w=v[M+0],T=v[M+1],E=v[M+2];f.push(w,T,T,E,E,w)}}else{const v=p.array;_=p.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const w=M+0,T=M+1,E=M+2;f.push(w,T,T,E,E,w)}}const m=new(p.count>=65535?yv:xv)(f,1);m.version=_;const g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function EP(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*o,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,n,1)}function d(f,h,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*_[v];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function TP(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function AP(i,e,t){const n=new WeakMap,s=new Xt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var h=P;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*d),x=new gv(E,w,T,d);x.type=hs,x.needsUpdate=!0;const S=y*4;for(let R=0;R<d;R++){const I=g[R],z=v[R],G=M[R],k=w*T*4*R;for(let B=0;B<I.count;B++){const U=B*S;p===!0&&(s.fromBufferAttribute(I,B),E[k+U+0]=s.x,E[k+U+1]=s.y,E[k+U+2]=s.z,E[k+U+3]=0),_===!0&&(s.fromBufferAttribute(z,B),E[k+U+4]=s.x,E[k+U+5]=s.y,E[k+U+6]=s.z,E[k+U+7]=0),m===!0&&(s.fromBufferAttribute(G,B),E[k+U+8]=s.x,E[k+U+9]=s.y,E[k+U+10]=s.z,E[k+U+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new ht(w,T)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function CP(i,e,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const RP={[ev]:"LINEAR_TONE_MAPPING",[tv]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[rv]:"AGX_TONE_MAPPING",[ov]:"NEUTRAL_TONE_MAPPING",[sv]:"CUSTOM_TONE_MAPPING"};function PP(i,e,t,n,s){const r=new gs(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new gs(e,t,{type:Vs,depthBuffer:!1,stencilBuffer:!1}),a=new kn;a.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new on([0,2,0,0,2,0],2));const l=new wA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ki(a,l),u=new Cv(-1,1,1,-1,0,1);let d=null,f=null,h=!1,p,_=null,m=[],g=!1;this.setSize=function(v,M){r.setSize(v,M),o.setSize(v,M);for(let y=0;y<m.length;y++){const w=m[y];w.setSize&&w.setSize(v,M)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;const M=r.width,y=r.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(M,y)}},this.begin=function(v,M){if(h||v.toneMapping===ms&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,w=M.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return g===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=ms,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=p,h=!0;let y=r,w=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(v,w,y,M),E.needsSwap!==!1)){const x=y;y=w,w=x}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},ft.getTransfer(d)===bt&&(l.defines.SRGB_TRANSFER="");const T=RP[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Dv=new Zn,fd=new wl(1,1),Lv=new gv,Iv=new $1,Ov=new wv,Pg=[],Dg=[],Lg=new Float32Array(16),Ig=new Float32Array(9),Og=new Float32Array(4);function Ea(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Pg[s];if(r===void 0&&(r=new Float32Array(s),Pg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bu(i,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function DP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function LP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function IP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function OP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function UP(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Og.set(n),i.uniformMatrix2fv(this.addr,!1,Og),ln(t,n)}}function FP(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Ig.set(n),i.uniformMatrix3fv(this.addr,!1,Ig),ln(t,n)}}function NP(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Lg.set(n),i.uniformMatrix4fv(this.addr,!1,Lg),ln(t,n)}}function kP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function BP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function VP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function GP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function HP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function WP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function XP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function qP(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?np:tp,r=fd):r=Dv,t.setTexture2D(e||r,s)}function YP(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Iv,s)}function $P(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ov,s)}function ZP(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lv,s)}function KP(i){switch(i){case 5126:return DP;case 35664:return LP;case 35665:return IP;case 35666:return OP;case 35674:return UP;case 35675:return FP;case 35676:return NP;case 5124:case 35670:return kP;case 35667:case 35671:return zP;case 35668:case 35672:return BP;case 35669:case 35673:return VP;case 5125:return GP;case 36294:return HP;case 36295:return WP;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return ZP}}function jP(i,e){i.uniform1fv(this.addr,e)}function JP(i,e){const t=Ea(e,this.size,2);i.uniform2fv(this.addr,t)}function QP(i,e){const t=Ea(e,this.size,3);i.uniform3fv(this.addr,t)}function eD(i,e){const t=Ea(e,this.size,4);i.uniform4fv(this.addr,t)}function tD(i,e){const t=Ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nD(i,e){const t=Ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function iD(i,e){const t=Ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sD(i,e){i.uniform1iv(this.addr,e)}function rD(i,e){i.uniform2iv(this.addr,e)}function oD(i,e){i.uniform3iv(this.addr,e)}function aD(i,e){i.uniform4iv(this.addr,e)}function lD(i,e){i.uniform1uiv(this.addr,e)}function cD(i,e){i.uniform2uiv(this.addr,e)}function uD(i,e){i.uniform3uiv(this.addr,e)}function fD(i,e){i.uniform4uiv(this.addr,e)}function hD(i,e,t){const n=this.cache,s=e.length,r=bu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fd:o=Dv;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function dD(i,e,t){const n=this.cache,s=e.length,r=bu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Iv,r[o])}function pD(i,e,t){const n=this.cache,s=e.length,r=bu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ov,r[o])}function mD(i,e,t){const n=this.cache,s=e.length,r=bu(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lv,r[o])}function gD(i){switch(i){case 5126:return jP;case 35664:return JP;case 35665:return QP;case 35666:return eD;case 35674:return tD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return sD;case 35667:case 35671:return rD;case 35668:case 35672:return oD;case 35669:case 35673:return aD;case 5125:return lD;case 36294:return cD;case 36295:return uD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return hD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}class _D{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KP(t.type)}}class vD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gD(t.type)}}class xD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function Ug(i,e){i.seq.push(e),i.map[e.id]=e}function yD(i,e,t){const n=i.name,s=n.length;for(Ff.lastIndex=0;;){const r=Ff.exec(n),o=Ff.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ug(t,c===void 0?new _D(a,i,e):new vD(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new xD(a),Ug(t,d)),t=d}}}class Gc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yD(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Fg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const MD=37297;let bD=0;function SD(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ng=new Qe;function wD(i){ft._getMatrix(Ng,ft.workingColorSpace,i);const e=`mat3( ${Ng.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case ou:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kg(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+SD(i.getShaderSource(e),a)}else return r}function ED(i,e){const t=wD(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TD={[ev]:"Linear",[tv]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[rv]:"AgX",[ov]:"Neutral",[sv]:"Custom"};function AD(i,e){const t=TD[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wc=new V;function CD(){ft.getLuminanceCoefficients(wc);const i=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RD(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function PD(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DD(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ya(i){return i!==""}function zg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LD=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(i){return i.replace(LD,OD)}const ID=new Map;function OD(i,e){let t=et[e];if(t===void 0){const n=ID.get(e);if(n!==void 0)t=et[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hd(t)}const UD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(i){return i.replace(UD,FD)}function FD(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ND={[Nc]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function kD(i){return ND[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zD={[fo]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function BD(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zD[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const VD={[va]:"ENVMAP_MODE_REFRACTION"};function GD(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":VD[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HD={[Q0]:"ENVMAP_BLENDING_MULTIPLY",[T1]:"ENVMAP_BLENDING_MIX",[A1]:"ENVMAP_BLENDING_ADD"};function WD(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":HD[i.combine]||"ENVMAP_BLENDING_NONE"}function XD(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qD(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kD(t),c=BD(t),u=GD(t),d=WD(t),f=XD(t),h=RD(t),p=PD(r),_=s.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),g.length>0&&(g+=`
`)):(m=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),g=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?et.tonemapping_pars_fragment:"",t.toneMapping!==ms?AD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ED("linearToOutputTexel",t.outputColorSpace),CD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=hd(o),o=zg(o,t),o=Bg(o,t),a=hd(a),a=zg(a,t),a=Bg(a,t),o=Vg(o),a=Vg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+m+o,y=v+g+a,w=Fg(s,s.VERTEX_SHADER,M),T=Fg(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(w)||"",G=s.getShaderInfoLog(T)||"",k=I.trim(),B=z.trim(),U=G.trim();let J=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const D=kg(s,w,"vertex"),ae=kg(s,T,"fragment");mt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+D+`
`+ae)}else k!==""?qe("WebGLProgram: Program Info Log:",k):(B===""||U==="")&&(Q=!1);Q&&(R.diagnostics={runnable:J,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:U,prefix:g}})}s.deleteShader(w),s.deleteShader(T),x=new Gc(s,_),S=DD(s,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,MD)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let YD=0;class $D{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZD(e),t.set(e,n)),n}}class ZD{constructor(e){this.id=YD++,this.code=e,this.usedTimes=0}}function KD(i,e,t,n,s,r){const o=new _v,a=new $D,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,P,R,I){const z=R.fog,G=I.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||k,B),J=U&&U.mapping===xu?U.image.height:null,Q=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=D!==void 0?D.length:0;let ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let Ue,Ve,$e,$;if(Q){const xe=os[Q];Ue=xe.vertexShader,Ve=xe.fragmentShader}else Ue=x.vertexShader,Ve=x.fragmentShader,a.update(x),$e=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);const ee=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Re=!!x.map,ut=!!x.matcap,we=!!U,Ge=!!x.aoMap,Ke=!!x.lightMap,Be=!!x.bumpMap,X=!!x.normalMap,O=!!x.displacementMap,_t=!!x.emissiveMap,tt=!!x.metalnessMap,He=!!x.roughnessMap,ye=x.anisotropy>0,C=x.clearcoat>0,b=x.dispersion>0,F=x.iridescence>0,K=x.sheen>0,j=x.transmission>0,Y=ye&&!!x.anisotropyMap,ve=C&&!!x.clearcoatMap,oe=C&&!!x.clearcoatNormalMap,Le=C&&!!x.clearcoatRoughnessMap,Me=F&&!!x.iridescenceMap,ie=F&&!!x.iridescenceThicknessMap,re=K&&!!x.sheenColorMap,be=K&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,de=!!x.specularColorMap,We=!!x.specularIntensityMap,L=j&&!!x.transmissionMap,le=j&&!!x.thicknessMap,se=!!x.gradientMap,pe=!!x.alphaMap,te=x.alphaTest>0,Z=!!x.alphaHash,Se=!!x.extensions;let ke=ms;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ke=i.toneMapping);const dt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:Ve,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ya,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:ut,envMap:we,envMapMode:we&&U.mapping,envMapCubeUVHeight:J,aoMap:Ge,lightMap:Ke,bumpMap:Be,normalMap:X,displacementMap:O,emissiveMap:_t,normalMapObjectSpace:X&&x.normalMapType===D1,normalMapTangentSpace:X&&x.normalMapType===P1,metalnessMap:tt,roughnessMap:He,anisotropy:ye,anisotropyMap:Y,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Le,dispersion:b,iridescence:F,iridescenceMap:Me,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:re,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:de,specularIntensityMap:We,transmission:j,transmissionMap:L,thicknessMap:le,gradientMap:se,opaque:x.transparent===!1&&x.blending===ia&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:Z,combine:x.combine,mapUv:Re&&p(x.map.channel),aoMapUv:Ge&&p(x.aoMap.channel),lightMapUv:Ke&&p(x.lightMap.channel),bumpMapUv:Be&&p(x.bumpMap.channel),normalMapUv:X&&p(x.normalMap.channel),displacementMapUv:O&&p(x.displacementMap.channel),emissiveMapUv:_t&&p(x.emissiveMap.channel),metalnessMapUv:tt&&p(x.metalnessMap.channel),roughnessMapUv:He&&p(x.roughnessMap.channel),anisotropyMapUv:Y&&p(x.anisotropyMap.channel),clearcoatMapUv:ve&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(x.sheenRoughnessMap.channel),specularMapUv:Ee&&p(x.specularMap.channel),specularColorMapUv:de&&p(x.specularColorMap.channel),specularIntensityMapUv:We&&p(x.specularIntensityMap.channel),transmissionMapUv:L&&p(x.transmissionMap.channel),thicknessMapUv:le&&p(x.thicknessMap.channel),alphaMapUv:pe&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(X||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Re||pe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ls,flipSided:x.side===si,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(S,x),v(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const S=h[x.type];let P;if(S){const R=os[S];P=MA.clone(R.uniforms)}else P=x.uniforms;return P}function y(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new qD(i,S,x,s),c.push(P),u.set(S,P)),P}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:E}}function jD(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function JD(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wg(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,_,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,h,p,_,m,g){const v=a(f,h,p,_,m,g);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(f,h,p,_,m,g){const v=a(f,h,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||JD),n.length>1&&n.sort(h||Hg),s.length>1&&s.sort(h||Hg)}function d(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function QD(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wg,i.set(n,[o])):s>=r.length?(o=new Wg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function e3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new yt};break;case"SpotLight":t={position:new V,direction:new V,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function t3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let n3=0;function i3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s3(i){const e=new e3,t=t3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new kt,o=new kt;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,p=0,_=0,m=0,g=0,v=0,M=0,y=0,w=0,T=0,E=0;c.sort(i3);for(let S=0,P=c.length;S<P;S++){const R=c[S],I=R.color,z=R.intensity,G=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===xa?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*z,d+=I.g*z,f+=I.b*z;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],z);E++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,J=t.get(R);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=k,n.directionalShadowMatrix[h]=R.shadow.matrix,v++}n.directional[h]=B,h++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(I).multiplyScalar(z),B.distance=G,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const U=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,U.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=U.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=k,y++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(I).multiplyScalar(z),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const U=R.shadow,J=t.get(R);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,J.shadowCameraNear=U.camera.near,J.shadowCameraFar=U.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=B,p++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(z),B.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[g]=B,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==h||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,x.directionalLength=h,x.pointLength=p,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=E,n.version=n3++)}function l(c,u){let d=0,f=0,h=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xg(i){const e=new s3(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function r3(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xg(i),e.set(s,[a])):r>=o.length?(a=new Xg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const o3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l3=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],c3=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],qg=new kt,Na=new V,Nf=new V;function u3(i,e,t){let n=new Mv;const s=new ht,r=new ht,o=new Xt,a=new EA,l=new TA,c={},u=t.maxTextureSize,d={[xr]:si,[si]:xr,[ls]:ls},f=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:o3,fragmentShader:a3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new kn;p.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ki(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let g=this.type;this.render=function(T,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===a1&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const S=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ns),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=g!==this.type;z&&E.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(k=>k.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,k=T.length;G<k;G++){const B=T[G],U=B.shadow;if(U===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const J=U.getFrameExtents();s.multiply(J),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,U.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Xa){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new gs(s.x,s.y,{format:xa,type:Vs,minFilter:In,magFilter:In,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new wl(s.x,s.y,hs),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Gs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xn,U.map.depthTexture.magFilter=xn}else B.isPointLight?(U.map=new Pv(s.x),U.map.depthTexture=new pA(s.x,vs)):(U.map=new gs(s.x,s.y),U.map.depthTexture=new wl(s.x,s.y,vs)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Gs,this.type===Nc?(U.map.depthTexture.compareFunction=Q?np:tp,U.map.depthTexture.minFilter=In,U.map.depthTexture.magFilter=In):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=xn,U.map.depthTexture.magFilter=xn);U.camera.updateProjectionMatrix()}const D=U.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<D;ae++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(U.map),i.clear());const ce=U.getViewport(ae);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),I.viewport(o)}if(B.isPointLight){const ce=U.camera,Ue=U.matrix,Ve=B.distance||ce.far;Ve!==ce.far&&(ce.far=Ve,ce.updateProjectionMatrix()),Na.setFromMatrixPosition(B.matrixWorld),ce.position.copy(Na),Nf.copy(ce.position),Nf.add(l3[ae]),ce.up.copy(c3[ae]),ce.lookAt(Nf),ce.updateMatrixWorld(),Ue.makeTranslation(-Na.x,-Na.y,-Na.z),qg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),U._frustum.setFromProjectionMatrix(qg,ce.coordinateSystem,ce.reversedDepth)}else U.updateMatrices(B);n=U.getFrustum(),y(E,x,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===Xa&&v(U,x),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,P,R)};function v(T,E){const x=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gs(s.x,s.y,{format:xa,type:Vs})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,x,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,x,h,_,null)}function M(T,E,x,S){let P=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=P.uuid,z=E.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let k=G[z];k===void 0&&(k=P.clone(),G[z]=k,E.addEventListener("dispose",w)),P=k}if(P.visible=E.visible,P.wireframe=E.wireframe,S===Xa?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=i.properties.get(P);I.light=x}return P}function y(T,E,x,S,P){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Xa)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const z=e.update(T),G=T.material;if(Array.isArray(G)){const k=z.groups;for(let B=0,U=k.length;B<U;B++){const J=k[B],Q=G[J.materialIndex];if(Q&&Q.visible){const D=M(T,Q,S,P);T.onBeforeShadow(i,T,E,x,z,D,J),i.renderBufferDirect(x,null,z,D,T,J),T.onAfterShadow(i,T,E,x,z,D,J)}}}else if(G.visible){const k=M(T,G,S,P);T.onBeforeShadow(i,T,E,x,z,k,null),i.renderBufferDirect(x,null,z,k,T,null),T.onAfterShadow(i,T,E,x,z,k,null)}}const I=T.children;for(let z=0,G=I.length;z<G;z++)y(I[z],E,x,S,P)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const S=c[x],P=T.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function f3(i,e){function t(){let L=!1;const le=new Xt;let se=null;const pe=new Xt(0,0,0,0);return{setMask:function(te){se!==te&&!L&&(i.colorMask(te,te,te,te),se=te)},setLocked:function(te){L=te},setClear:function(te,Z,Se,ke,dt){dt===!0&&(te*=ke,Z*=ke,Se*=ke),le.set(te,Z,Se,ke),pe.equals(le)===!1&&(i.clearColor(te,Z,Se,ke),pe.copy(le))},reset:function(){L=!1,se=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,se=null,pe=null,te=null;return{setReversed:function(Z){if(le!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),le=Z;const ke=te;te=null,this.setClear(ke)}},getReversed:function(){return le},setTest:function(Z){Z?ee(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(Z){se!==Z&&!L&&(i.depthMask(Z),se=Z)},setFunc:function(Z){if(le&&(Z=V1[Z]),pe!==Z){switch(Z){case bh:i.depthFunc(i.NEVER);break;case Sh:i.depthFunc(i.ALWAYS);break;case wh:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case Eh:i.depthFunc(i.EQUAL);break;case Th:i.depthFunc(i.GEQUAL);break;case Ah:i.depthFunc(i.GREATER);break;case Ch:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Z}},setLocked:function(Z){L=Z},setClear:function(Z){te!==Z&&(te=Z,le&&(Z=1-Z),i.clearDepth(Z))},reset:function(){L=!1,se=null,pe=null,te=null,le=!1}}}function s(){let L=!1,le=null,se=null,pe=null,te=null,Z=null,Se=null,ke=null,dt=null;return{setTest:function(xe){L||(xe?ee(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(xe){le!==xe&&!L&&(i.stencilMask(xe),le=xe)},setFunc:function(xe,Ie,Je){(se!==xe||pe!==Ie||te!==Je)&&(i.stencilFunc(xe,Ie,Je),se=xe,pe=Ie,te=Je)},setOp:function(xe,Ie,Je){(Z!==xe||Se!==Ie||ke!==Je)&&(i.stencilOp(xe,Ie,Je),Z=xe,Se=Ie,ke=Je)},setLocked:function(xe){L=xe},setClear:function(xe){dt!==xe&&(i.clearStencil(xe),dt=xe)},reset:function(){L=!1,le=null,se=null,pe=null,te=null,Z=null,Se=null,ke=null,dt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,v=null,M=null,y=null,w=null,T=null,E=new yt(0,0,0),x=0,S=!1,P=null,R=null,I=null,z=null,G=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=U>=1):J.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=U>=2);let Q=null,D={};const ae=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Ue=new Xt().fromArray(ae),Ve=new Xt().fromArray(ce);function $e(L,le,se,pe){const te=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<se;Se++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(le+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Z}const $={};$[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(_a),Be(!1),X($m),ee(i.CULL_FACE),Ge(Ns);function ee(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ne(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Pe(L,le){return d[L]!==le?(i.bindFramebuffer(L,le),d[L]=le,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function De(L,le){let se=h,pe=!1;if(L){se=f.get(le),se===void 0&&(se=[],f.set(le,se));const te=L.textures;if(se.length!==te.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Se=te.length;Z<Se;Z++)se[Z]=i.COLOR_ATTACHMENT0+Z;se.length=te.length,pe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,pe=!0);pe&&i.drawBuffers(se)}function Re(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const ut={[Br]:i.FUNC_ADD,[c1]:i.FUNC_SUBTRACT,[u1]:i.FUNC_REVERSE_SUBTRACT};ut[f1]=i.MIN,ut[h1]=i.MAX;const we={[d1]:i.ZERO,[p1]:i.ONE,[m1]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[M1]:i.SRC_ALPHA_SATURATE,[x1]:i.DST_COLOR,[_1]:i.DST_ALPHA,[g1]:i.ONE_MINUS_SRC_COLOR,[Mh]:i.ONE_MINUS_SRC_ALPHA,[y1]:i.ONE_MINUS_DST_COLOR,[v1]:i.ONE_MINUS_DST_ALPHA,[b1]:i.CONSTANT_COLOR,[S1]:i.ONE_MINUS_CONSTANT_COLOR,[w1]:i.CONSTANT_ALPHA,[E1]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(L,le,se,pe,te,Z,Se,ke,dt,xe){if(L===Ns){_===!0&&(ne(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),L!==l1){if(L!==m||xe!==S){if((g!==Br||y!==Br)&&(i.blendEquation(i.FUNC_ADD),g=Br,y=Br),xe)switch(L){case ia:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFunc(i.ONE,i.ONE);break;case Km:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",L);break}else switch(L){case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Km:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jm:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",L);break}v=null,M=null,w=null,T=null,E.set(0,0,0),x=0,m=L,S=xe}return}te=te||le,Z=Z||se,Se=Se||pe,(le!==g||te!==y)&&(i.blendEquationSeparate(ut[le],ut[te]),g=le,y=te),(se!==v||pe!==M||Z!==w||Se!==T)&&(i.blendFuncSeparate(we[se],we[pe],we[Z],we[Se]),v=se,M=pe,w=Z,T=Se),(ke.equals(E)===!1||dt!==x)&&(i.blendColor(ke.r,ke.g,ke.b,dt),E.copy(ke),x=dt),m=L,S=!1}function Ke(L,le){L.side===ls?ne(i.CULL_FACE):ee(i.CULL_FACE);let se=L.side===si;le&&(se=!se),Be(se),L.blending===ia&&L.transparent===!1?Ge(Ns):Ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function X(L){L!==r1?(ee(i.CULL_FACE),L!==R&&(L===$m?i.cullFace(i.BACK):L===o1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),R=L}function O(L){L!==I&&(B&&i.lineWidth(L),I=L)}function _t(L,le,se){L?(ee(i.POLYGON_OFFSET_FILL),(z!==le||G!==se)&&(z=le,G=se,o.getReversed()&&(le=-le),i.polygonOffset(le,se))):ne(i.POLYGON_OFFSET_FILL)}function tt(L){L?ee(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function He(L){L===void 0&&(L=i.TEXTURE0+k-1),Q!==L&&(i.activeTexture(L),Q=L)}function ye(L,le,se){se===void 0&&(Q===null?se=i.TEXTURE0+k-1:se=Q);let pe=D[se];pe===void 0&&(pe={type:void 0,texture:void 0},D[se]=pe),(pe.type!==L||pe.texture!==le)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(L,le||$[L]),pe.type=L,pe.texture=le)}function C(){const L=D[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(L){mt("WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){mt("WebGLState:",L)}}function K(){try{i.texSubImage2D(...arguments)}catch(L){mt("WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){mt("WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){mt("WebGLState:",L)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(L){mt("WebGLState:",L)}}function oe(){try{i.texStorage2D(...arguments)}catch(L){mt("WebGLState:",L)}}function Le(){try{i.texStorage3D(...arguments)}catch(L){mt("WebGLState:",L)}}function Me(){try{i.texImage2D(...arguments)}catch(L){mt("WebGLState:",L)}}function ie(){try{i.texImage3D(...arguments)}catch(L){mt("WebGLState:",L)}}function re(L){Ue.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ue.copy(L))}function be(L){Ve.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Ee(L,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let pe=se.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(le,L.name),se.set(L,pe))}function de(L,le){const pe=c.get(le).get(L);l.get(le)!==pe&&(i.uniformBlockBinding(le,pe,L.__bindingPointIndex),l.set(le,pe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,D={},d={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,v=null,M=null,y=null,w=null,T=null,E=new yt(0,0,0),x=0,S=!1,P=null,R=null,I=null,z=null,G=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ne,bindFramebuffer:Pe,drawBuffers:De,useProgram:Re,setBlending:Ge,setMaterial:Ke,setFlipSided:Be,setCullFace:X,setLineWidth:O,setPolygonOffset:_t,setScissorTest:tt,activeTexture:He,bindTexture:ye,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:F,texImage2D:Me,texImage3D:ie,updateUBOMapping:Ee,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:Le,texSubImage2D:K,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:ve,scissor:re,viewport:be,reset:We}}function h3(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return h?new OffscreenCanvas(C,b):lu("canvas")}function _(C,b,F){let K=1;const j=ye(C);if((j.width>F||j.height>F)&&(K=F/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*j.width),ve=Math.floor(K*j.height);d===void 0&&(d=p(Y,ve));const oe=b?p(Y,ve):d;return oe.width=Y,oe.height=ve,oe.getContext("2d").drawImage(C,0,0,Y,ve),qe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+ve+")."),oe}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,b,F,K,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=b;if(b===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),b===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),b===i.RGBA){const ve=j?ou:ft.getTransfer(K);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=ve===bt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(C,b){let F;return C?b===null||b===vs||b===Sl?F=i.DEPTH24_STENCIL8:b===hs?F=i.DEPTH32F_STENCIL8:b===bl&&(F=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vs||b===Sl?F=i.DEPTH_COMPONENT24:b===hs?F=i.DEPTH_COMPONENT32F:b===bl&&(F=i.DEPTH_COMPONENT16),F}function w(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),x(b),b.isVideoTexture&&u.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),P(b)}function x(C){const b=n.get(C);if(b.__webglInit===void 0)return;const F=C.source,K=f.get(F);if(K){const j=K[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(C),Object.keys(K).length===0&&f.delete(F)}n.remove(C)}function S(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const F=C.source,K=f.get(F);delete K[b.__cacheKey],o.memory.textures--}function P(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let j=0;j<b.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[K][j]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=C.textures;for(let K=0,j=F.length;K<j;K++){const Y=n.get(F[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(C)}let R=0;function I(){R=0}function z(){const C=R;return C>=s.maxTextures&&qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function G(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function k(C,b){const F=n.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const K=C.image;if(K===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,C,b);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function B(C,b){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,b);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function U(C,b){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,b);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function J(C,b){const F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){ee(F,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}const Q={[Rh]:i.REPEAT,[Os]:i.CLAMP_TO_EDGE,[Ph]:i.MIRRORED_REPEAT},D={[xn]:i.NEAREST,[C1]:i.NEAREST_MIPMAP_NEAREST,[Ql]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[rf]:i.LINEAR_MIPMAP_NEAREST,[$r]:i.LINEAR_MIPMAP_LINEAR},ae={[L1]:i.NEVER,[N1]:i.ALWAYS,[I1]:i.LESS,[tp]:i.LEQUAL,[O1]:i.EQUAL,[np]:i.GEQUAL,[U1]:i.GREATER,[F1]:i.NOTEQUAL};function ce(C,b){if(b.type===hs&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===rf||b.magFilter===Ql||b.magFilter===$r||b.minFilter===In||b.minFilter===rf||b.minFilter===Ql||b.minFilter===$r)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==Ql&&b.minFilter!==$r||b.type===hs&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let j=f.get(K);j===void 0&&(j={},f.set(K,j));const Y=G(b);if(Y!==C.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Y].usedTimes++;const ve=j[C.__cacheKey];ve!==void 0&&(j[C.__cacheKey].usedTimes--,ve.usedTimes===0&&S(b)),C.__cacheKey=Y,C.__webglTexture=j[Y].texture}return F}function Ve(C,b,F){return Math.floor(Math.floor(C/F)/b)}function $e(C,b,F,K){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,F,K,b.data);else{Y.sort((ie,re)=>ie.start-re.start);let ve=0;for(let ie=1;ie<Y.length;ie++){const re=Y[ve],be=Y[ie],Ee=re.start+re.count,de=Ve(be.start,b.width,4),We=Ve(re.start,b.width,4);be.start<=Ee+1&&de===We&&Ve(be.start+be.count-1,b.width,4)===de?re.count=Math.max(re.count,be.start+be.count-re.start):(++ve,Y[ve]=be)}Y.length=ve+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ie=0,re=Y.length;ie<re;ie++){const be=Y[ie],Ee=Math.floor(be.start/4),de=Math.ceil(be.count/4),We=Ee%b.width,L=Math.floor(Ee/b.width),le=de,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,We,L,le,se,F,K,b.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function $(C,b,F){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const j=Ue(C,b),Y=b.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+F);const ve=n.get(Y);if(Y.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const oe=ft.getPrimaries(ft.workingColorSpace),Le=b.colorSpace===er?null:ft.getPrimaries(b.colorSpace),Me=b.colorSpace===er||oe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ie=_(b.image,!1,s.maxTextureSize);ie=He(b,ie);const re=r.convert(b.format,b.colorSpace),be=r.convert(b.type);let Ee=M(b.internalFormat,re,be,b.colorSpace,b.isVideoTexture);ce(K,b);let de;const We=b.mipmaps,L=b.isVideoTexture!==!0,le=ve.__version===void 0||j===!0,se=Y.dataReady,pe=w(b,ie);if(b.isDepthTexture)Ee=y(b.format===Zr,b.type),le&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ee,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ie.width,ie.height,0,re,be,null));else if(b.isDataTexture)if(We.length>0){L&&le&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,We[0].width,We[0].height);for(let te=0,Z=We.length;te<Z;te++)de=We[te],L?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,re,be,de.data):t.texImage2D(i.TEXTURE_2D,te,Ee,de.width,de.height,0,re,be,de.data);b.generateMipmaps=!1}else L?(le&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ie.width,ie.height),se&&$e(b,ie,re,be)):t.texImage2D(i.TEXTURE_2D,0,Ee,ie.width,ie.height,0,re,be,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,We[0].width,We[0].height,ie.depth);for(let te=0,Z=We.length;te<Z;te++)if(de=We[te],b.format!==Ki)if(re!==null)if(L){if(se)if(b.layerUpdates.size>0){const Se=Sg(de.width,de.height,b.format,b.type);for(const ke of b.layerUpdates){const dt=de.data.subarray(ke*Se/de.data.BYTES_PER_ELEMENT,(ke+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ke,de.width,de.height,1,re,dt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,re,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,ie.depth,0,de.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,re,be,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,ie.depth,0,re,be,de.data)}else{L&&le&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,We[0].width,We[0].height);for(let te=0,Z=We.length;te<Z;te++)de=We[te],b.format!==Ki?re!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,re,de.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ee,de.width,de.height,0,de.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,re,be,de.data):t.texImage2D(i.TEXTURE_2D,te,Ee,de.width,de.height,0,re,be,de.data)}else if(b.isDataArrayTexture)if(L){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,ie.width,ie.height,ie.depth),se)if(b.layerUpdates.size>0){const te=Sg(ie.width,ie.height,b.format,b.type);for(const Z of b.layerUpdates){const Se=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,re,be,Se)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,re,be,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,re,be,ie.data);else if(b.isData3DTexture)L?(le&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,re,be,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,re,be,ie.data);else if(b.isFramebufferTexture){if(le)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Ee,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ee,te,Z,0,re,be,null),te>>=1,Z>>=1}}else if(We.length>0){if(L&&le){const te=ye(We[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height)}for(let te=0,Z=We.length;te<Z;te++)de=We[te],L?se&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,re,be,de):t.texImage2D(i.TEXTURE_2D,te,Ee,re,be,de);b.generateMipmaps=!1}else if(L){if(le){const te=ye(ie);t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,be,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ee,re,be,ie);m(b)&&g(K),ve.__version=Y.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ee(C,b,F){if(b.image.length!==6)return;const K=Ue(C,b),j=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const Y=n.get(j);if(j.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const ve=ft.getPrimaries(ft.workingColorSpace),oe=b.colorSpace===er?null:ft.getPrimaries(b.colorSpace),Le=b.colorSpace===er||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,re=[];for(let Z=0;Z<6;Z++)!Me&&!ie?re[Z]=_(b.image[Z],!0,s.maxCubemapSize):re[Z]=ie?b.image[Z].image:b.image[Z],re[Z]=He(b,re[Z]);const be=re[0],Ee=r.convert(b.format,b.colorSpace),de=r.convert(b.type),We=M(b.internalFormat,Ee,de,b.colorSpace),L=b.isVideoTexture!==!0,le=Y.__version===void 0||K===!0,se=j.dataReady;let pe=w(b,be);ce(i.TEXTURE_CUBE_MAP,b);let te;if(Me){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,We,be.width,be.height);for(let Z=0;Z<6;Z++){te=re[Z].mipmaps;for(let Se=0;Se<te.length;Se++){const ke=te[Se];b.format!==Ki?Ee!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,ke.width,ke.height,Ee,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,We,ke.width,ke.height,0,ke.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,ke.width,ke.height,Ee,de,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,We,ke.width,ke.height,0,Ee,de,ke.data)}}}else{if(te=b.mipmaps,L&&le){te.length>0&&pe++;const Z=ye(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,re[Z].width,re[Z].height,Ee,de,re[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,re[Z].width,re[Z].height,0,Ee,de,re[Z].data);for(let Se=0;Se<te.length;Se++){const dt=te[Se].image[Z].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,dt.width,dt.height,Ee,de,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,We,dt.width,dt.height,0,Ee,de,dt.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,de,re[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Ee,de,re[Z]);for(let Se=0;Se<te.length;Se++){const ke=te[Se];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ee,de,ke.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,We,Ee,de,ke.image[Z])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),Y.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,F,K,j,Y){const ve=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),Le=M(F.internalFormat,ve,oe,F.colorSpace),Me=n.get(b),ie=n.get(F);if(ie.__renderTarget=b,!Me.__hasExternalTextures){const re=Math.max(1,b.width>>Y),be=Math.max(1,b.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,Le,re,be,b.depth,0,ve,oe,null):t.texImage2D(j,Y,Le,re,be,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,ie.__webglTexture,0,O(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,ie.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(C,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,j=K&&K.isDepthTexture?K.type:null,Y=y(b.stencilBuffer,j),ve=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(b),Y,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(b),Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{const K=b.textures;for(let j=0;j<K.length;j++){const Y=K[j],ve=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),Le=M(Y.internalFormat,ve,oe,Y.colorSpace);_t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(b),Le,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(b),Le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Le,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(C,b,F){const K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ce(i.TEXTURE_CUBE_MAP,b.depthTexture);const Me=r.convert(b.depthTexture.format),ie=r.convert(b.depthTexture.type);let re;b.depthTexture.format===Gs?re=i.DEPTH_COMPONENT24:b.depthTexture.format===Zr&&(re=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,re,b.width,b.height,0,Me,ie,null)}}else k(b.depthTexture,0);const Y=j.__webglTexture,ve=O(b),oe=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Le=b.depthTexture.format===Zr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gs)_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,oe,Y,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Le,oe,Y,0);else if(b.depthTexture.format===Zr)_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,oe,Y,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Le,oe,Y,0);else throw new Error("Unknown depthTexture format")}function Re(C){const b=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)De(b.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?De(b.__webglFramebuffer[0],C,0):De(b.__webglFramebuffer,C,0)}else if(F){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Pe(b.__webglDepthbuffer[K],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pe(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,b,F){const K=n.get(C);b!==void 0&&ne(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Re(C)}function we(C){const b=C.texture,F=n.get(C),K=n.get(b);C.addEventListener("dispose",E);const j=C.textures,Y=C.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Le=0;Le<b.mipmaps.length;Le++)F.__webglFramebuffer[oe][Le]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,Le=j.length;oe<Le;oe++){const Me=n.get(j[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const Le=j[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Me=r.convert(Le.format,Le.colorSpace),ie=r.convert(Le.type),re=M(Le.internalFormat,Me,ie,Le.colorSpace,C.isXRRenderTarget===!0),be=O(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,re,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ce(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)ne(F.__webglFramebuffer[oe][Le],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le);else ne(F.__webglFramebuffer[oe],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Le=j.length;oe<Le;oe++){const Me=j[oe],ie=n.get(Me);let re=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),ce(re,Me),ne(F.__webglFramebuffer,C,Me,i.COLOR_ATTACHMENT0+oe,re,0),m(Me)&&g(re)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ce(oe,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)ne(F.__webglFramebuffer[Le],C,b,i.COLOR_ATTACHMENT0,oe,Le);else ne(F.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,oe,0);m(b)&&g(oe),t.unbindTexture()}C.depthBuffer&&Re(C)}function Ge(C){const b=C.textures;for(let F=0,K=b.length;F<K;F++){const j=b[F];if(m(j)){const Y=v(C),ve=n.get(j).__webglTexture;t.bindTexture(Y,ve),g(Y),t.unbindTexture()}}}const Ke=[],Be=[];function X(C){if(C.samples>0){if(_t(C)===!1){const b=C.textures,F=C.width,K=C.height;let j=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),oe=b.length>1;if(oe)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Le=C.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const ie=n.get(b[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,j,i.NEAREST),l===!0&&(Ke.length=0,Be.length=0,Ke.push(i.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push(Y),Be.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const ie=n.get(b[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function O(C){return Math.min(s.maxSamples,C.samples)}function _t(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function He(C,b){const F=C.colorSpace,K=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==ya&&F!==er&&(ft.getTransfer(F)===bt?(K!==Ki||j!==Li)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",F)),b}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d3(i,e){function t(n,s=er){let r;const o=ft.getTransfer(s);if(n===Li)return i.UNSIGNED_BYTE;if(n===Kd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lv)return i.BYTE;if(n===cv)return i.SHORT;if(n===bl)return i.UNSIGNED_SHORT;if(n===Zd)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===hs)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===hv)return i.ALPHA;if(n===dv)return i.RGB;if(n===Ki)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===pv)return i.RED;if(n===Jd)return i.RED_INTEGER;if(n===xa)return i.RG;if(n===Qd)return i.RG_INTEGER;if(n===ep)return i.RGBA_INTEGER;if(n===kc||n===zc||n===Bc||n===Vc)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dh||n===Lh||n===Ih||n===Oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Fh||n===Nh||n===kh||n===zh||n===Bh||n===Vh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uh||n===Fh)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kh)return r.COMPRESSED_R11_EAC;if(n===zh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bh)return r.COMPRESSED_RG11_EAC;if(n===Vh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Zh||n===Kh||n===jh||n===Jh||n===Qh||n===ed||n===td)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ed)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===td)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nd||n===id||n===sd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nd)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===id)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===od||n===ad||n===ld)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rd)return r.COMPRESSED_RED_RGTC1_EXT;if(n===od)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ad)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ld)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const p3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ev(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xs({vertexShader:p3,fragmentShader:m3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new yu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _3 extends ba{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null;const _=typeof XRWebGLBinding<"u",m=new g3,g={},v=t.getContextAttributes();let M=null,y=null;const w=[],T=[],E=new ht;let x=null;const S=new Di;S.viewport=new Xt;const P=new Di;P.viewport=new Xt;const R=[S,P],I=new CA;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=w[$];return ee===void 0&&(ee=new df,w[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=w[$];return ee===void 0&&(ee=new df,w[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=w[$];return ee===void 0&&(ee=new df,w[$]=ee),ee.getHandSpace()};function k($){const ee=T.indexOf($.inputSource);if(ee===-1)return;const ne=w[ee];ne!==void 0&&(ne.update($.inputSource,$.frame,c||o),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",U);for(let $=0;$<w.length;$++){const ee=T[$];ee!==null&&(T[$]=null,w[$].disconnect(ee))}z=null,G=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(M),h=null,f=null,d=null,s=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Pe=null,De=null;v.depth&&(De=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Zr:Gs,Pe=v.stencil?Sl:vs);const Re={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gs(f.textureWidth,f.textureHeight,{format:Ki,type:Li,depthTexture:new wl(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new gs(h.framebufferWidth,h.framebufferHeight,{format:Ki,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U($){for(let ee=0;ee<$.removed.length;ee++){const ne=$.removed[ee],Pe=T.indexOf(ne);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(ne))}for(let ee=0;ee<$.added.length;ee++){const ne=$.added[ee];let Pe=T.indexOf(ne);if(Pe===-1){for(let Re=0;Re<w.length;Re++)if(Re>=T.length){T.push(ne),Pe=Re;break}else if(T[Re]===null){T[Re]=ne,Pe=Re;break}if(Pe===-1)break}const De=w[Pe];De&&De.connect(ne)}}const J=new V,Q=new V;function D($,ee,ne){J.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ne.matrixWorld);const Pe=J.distanceTo(Q),De=ee.projectionMatrix.elements,Re=ne.projectionMatrix.elements,ut=De[14]/(De[10]-1),we=De[14]/(De[10]+1),Ge=(De[9]+1)/De[5],Ke=(De[9]-1)/De[5],Be=(De[8]-1)/De[0],X=(Re[8]+1)/Re[0],O=ut*Be,_t=ut*X,tt=Pe/(-Be+X),He=tt*-Be;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ye=ut+tt,C=we+tt,b=O-He,F=_t+(Pe-He),K=Ge*we/C*ye,j=Ke*we/C*ye;$.projectionMatrix.makePerspective(b,F,K,j,ye,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ee=$.near,ne=$.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),I.near=P.near=S.near=ee,I.far=P.far=S.far=ne,(z!==I.near||G!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,G=I.far),I.layers.mask=$.layers.mask|6,S.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Pe=$.parent,De=I.cameras;ae(I,Pe);for(let Re=0;Re<De.length;Re++)ae(De[Re],Pe);De.length===2?D(I,S,P):I.projectionMatrix.copy(S.projectionMatrix),ce($,I,Pe)};function ce($,ee,ne){ne===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=cd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return g[$]};let Ue=null;function Ve($,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){const ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Pe=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let we=0;we<ne.length;we++){const Ge=ne[we];let Ke=null;if(h!==null)Ke=h.getViewport(Ge);else{const X=d.getViewSubImage(f,Ge);Ke=X.viewport,we===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let Be=R[we];Be===void 0&&(Be=new Di,Be.layers.enable(we),Be.viewport=new Xt,R[we]=Be),Be.matrix.fromArray(Ge.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ge.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),we===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(Be)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const we=d.getDepthInformation(ne[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<ne.length;we++){const Ge=ne[we].camera;if(Ge){let Ke=g[Ge];Ke||(Ke=new Ev,g[Ge]=Ke);const Be=d.getCameraImage(Ge);Ke.sourceTexture=Be}}}}for(let ne=0;ne<w.length;ne++){const Pe=T[ne],De=w[ne];Pe!==null&&De!==void 0&&De.update(Pe,ee,c||o)}Ue&&Ue($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const $e=new Rv;$e.setAnimationLoop(Ve),this.setAnimationLoop=function($){Ue=$},this.dispose=function(){}}}const Or=new Hs,v3=new kt;function x3(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Tv(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,M,y){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===si&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===si&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,Or.copy(y),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(v3.makeRotationFromEuler(Or)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y3(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=s[v.id];y===void 0&&(p(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(v,w);const T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const M=d();v.__bindingPointIndex=M;const y=i.createBuffer(),w=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],y=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=y.length;T<E;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,P=x.length;S<P;S++){const R=x[S];if(h(R,T,S,w)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let k=0;k<z.length;k++){const B=z[k],U=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+G,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,M,y,w){const T=v.value,E=M+"_"+y;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const x=w[E];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[E]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function p(v){const M=v.uniforms;let y=0;const w=16;for(let E=0,x=M.length;E<x;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let P=0,R=S.length;P<R;P++){const I=S[P],z=Array.isArray(I.value)?I.value:[I.value];for(let G=0,k=z.length;G<k;G++){const B=z[G],U=_(B),J=y%w,Q=J%U.boundary,D=J+Q;y+=Q,D!==0&&w-D<U.storage&&(y+=w-D),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=U.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const M3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ns=null;function b3(){return ns===null&&(ns=new lA(M3,16,16,xa,Vs),ns.name="DFG_LUT",ns.minFilter=In,ns.magFilter=In,ns.wrapS=Os,ns.wrapT=Os,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}class S3{constructor(e={}){const{canvas:t=z1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Li}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=h,m=new Set([ep,Qd,Jd]),g=new Set([Li,vs,bl,Sl,Kd,jd]),v=new Uint32Array(4),M=new Int32Array(4);let y=null,w=null;const T=[],E=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=Ci;let R=0,I=0,z=null,G=-1,k=null;const B=new Xt,U=new Xt;let J=null;const Q=new yt(0);let D=0,ae=t.width,ce=t.height,Ue=1,Ve=null,$e=null;const $=new Xt(0,0,ae,ce),ee=new Xt(0,0,ae,ce);let ne=!1;const Pe=new Mv;let De=!1,Re=!1;const ut=new kt,we=new V,Ge=new Xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function X(){return z===null?Ue:1}let O=n;function _t(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$d}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",dt,!1),O===null){const N="webgl2";if(O=_t(N,A),O===null)throw _t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw mt("WebGLRenderer: "+A.message),A}let tt,He,ye,C,b,F,K,j,Y,ve,oe,Le,Me,ie,re,be,Ee,de,We,L,le,se,pe;function te(){tt=new SP(O),tt.init(),le=new d3(O,tt),He=new mP(O,tt,e,le),ye=new f3(O,tt),He.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),C=new TP(O),b=new jD,F=new h3(O,tt,ye,b,He,le,C),K=new bP(S),j=new DA(O),se=new dP(O,j),Y=new wP(O,j,C,se),ve=new CP(O,Y,j,se,C),de=new AP(O,He,F),re=new gP(b),oe=new KD(S,K,tt,He,se,re),Le=new x3(S,b),Me=new QD,ie=new r3(tt),Ee=new hP(S,K,ye,ve,p,l),be=new u3(S,ve,He),pe=new y3(O,C,He,ye),We=new pP(O,tt,C),L=new EP(O,tt,C),C.programs=oe.programs,S.capabilities=He,S.extensions=tt,S.properties=b,S.renderLists=Me,S.shadowMap=be,S.state=ye,S.info=C}te(),_!==Li&&(x=new PP(_,t.width,t.height,s,r));const Z=new _3(S,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(A){A!==void 0&&(Ue=A,this.setSize(ae,ce,!1))},this.getSize=function(A){return A.set(ae,ce)},this.setSize=function(A,N,q=!0){if(Z.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ce=N,t.width=Math.floor(A*Ue),t.height=Math.floor(N*Ue),q===!0&&(t.style.width=A+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(ae*Ue,ce*Ue).floor()},this.setDrawingBufferSize=function(A,N,q){ae=A,ce=N,Ue=q,t.width=Math.floor(A*q),t.height=Math.floor(N*q),this.setViewport(0,0,A,N)},this.setEffects=function(A){if(_===Li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let N=0;N<A.length;N++)if(A[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,N,q,W){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,N,q,W),ye.viewport(B.copy($).multiplyScalar(Ue).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,N,q,W){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,N,q,W),ye.scissor(U.copy(ee).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ye.setScissorTest(ne=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){$e=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,N=!0,q=!0){let W=0;if(A){let H=!1;if(z!==null){const fe=z.texture.format;H=m.has(fe)}if(H){const fe=z.texture.type,me=g.has(fe),he=Ee.getClearColor(),Ae=Ee.getClearAlpha(),Te=he.r,je=he.g,nt=he.b;me?(v[0]=Te,v[1]=je,v[2]=nt,v[3]=Ae,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=Te,M[1]=je,M[2]=nt,M[3]=Ae,O.clearBufferiv(O.COLOR,0,M))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Ee.dispose(),Me.dispose(),ie.dispose(),b.dispose(),K.dispose(),ve.dispose(),se.dispose(),pe.dispose(),oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ye),Z.removeEventListener("sessionend",Gt),Ze.stop()};function Se(A){A.preventDefault(),ng("WebGLRenderer: Context Lost."),P=!0}function ke(){ng("WebGLRenderer: Context Restored."),P=!1;const A=C.autoReset,N=be.enabled,q=be.autoUpdate,W=be.needsUpdate,H=be.type;te(),C.autoReset=A,be.enabled=N,be.autoUpdate=q,be.needsUpdate=W,be.type=H}function dt(A){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const N=A.target;N.removeEventListener("dispose",xe),Ie(N)}function Ie(A){Je(A),b.remove(A)}function Je(A){const N=b.get(A).programs;N!==void 0&&(N.forEach(function(q){oe.releaseProgram(q)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,q,W,H,fe){N===null&&(N=Ke);const me=H.isMesh&&H.matrixWorld.determinant()<0,he=wi(A,N,q,W,H);ye.setMaterial(W,me);let Ae=q.index,Te=1;if(W.wireframe===!0){if(Ae=Y.getWireframeAttribute(q),Ae===void 0)return;Te=2}const je=q.drawRange,nt=q.attributes.position;let Fe=je.start*Te,St=(je.start+je.count)*Te;fe!==null&&(Fe=Math.max(Fe,fe.start*Te),St=Math.min(St,(fe.start+fe.count)*Te)),Ae!==null?(Fe=Math.max(Fe,0),St=Math.min(St,Ae.count)):nt!=null&&(Fe=Math.max(Fe,0),St=Math.min(St,nt.count));const Ht=St-Fe;if(Ht<0||Ht===1/0)return;se.setup(H,W,he,q,Ae);let zt,wt=We;if(Ae!==null&&(zt=j.get(Ae),wt=L,wt.setIndex(zt)),H.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*X()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(H.isLine){let Sn=W.linewidth;Sn===void 0&&(Sn=1),ye.setLineWidth(Sn*X()),H.isLineSegments?wt.setMode(O.LINES):H.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else H.isPoints?wt.setMode(O.POINTS):H.isSprite&&wt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))wt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Sn=H._multiDrawStarts,Oe=H._multiDrawCounts,oi=H._multiDrawCount,pt=Ae?j.get(Ae).bytesPerElement:1,Vi=b.get(W).currentProgram.getUniforms();for(let es=0;es<oi;es++)Vi.setValue(O,"_gl_DrawID",es),wt.render(Sn[es]/pt,Oe[es])}else if(H.isInstancedMesh)wt.renderInstances(Fe,Ht,H.count);else if(q.isInstancedBufferGeometry){const Sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oe=Math.min(q.instanceCount,Sn);wt.renderInstances(Fe,Ht,Oe)}else wt.render(Fe,Ht)};function ge(A,N,q){A.transparent===!0&&A.side===ls&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Mn(A,N,q),A.side=xr,A.needsUpdate=!0,Mn(A,N,q),A.side=ls):Mn(A,N,q)}this.compile=function(A,N,q=null){q===null&&(q=A),w=ie.get(q),w.init(N),E.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const W=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const he=fe[me];ge(he,q,H),W.add(he)}else ge(fe,q,H),W.add(fe)}),w=E.pop(),W},this.compileAsync=function(A,N,q=null){const W=this.compile(A,N,q);return new Promise(H=>{function fe(){if(W.forEach(function(me){b.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){H(A);return}setTimeout(fe,10)}tt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xe=null;function ze(A){Xe&&Xe(A)}function Ye(){Ze.stop()}function Gt(){Ze.start()}const Ze=new Rv;Ze.setAnimationLoop(ze),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(A){Xe=A,Z.setAnimationLoop(A),A===null?Ze.stop():Ze.start()},Z.addEventListener("sessionstart",Ye),Z.addEventListener("sessionend",Gt),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const q=Z.enabled===!0&&Z.isPresenting===!0,W=x!==null&&(z===null||q)&&x.begin(S,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,N,z),w=ie.get(A,E.length),w.init(N),E.push(w),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Pe.setFromProjectionMatrix(ut,ds,N.reversedDepth),Re=this.localClippingEnabled,De=re.init(this.clippingPlanes,Re),y=Me.get(A,T.length),y.init(),T.push(y),Z.enabled===!0&&Z.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&Lt(me,N,-1/0,S.sortObjects)}Lt(A,N,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Ve,$e),Be=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Be&&Ee.addToRenderList(y,A),this.info.render.frame++,De===!0&&re.beginShadows();const H=w.state.shadowsArray;if(be.render(H,A,N),De===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const me=y.opaque,he=y.transmissive;if(w.setupLights(),N.isArrayCamera){const Ae=N.cameras;if(he.length>0)for(let Te=0,je=Ae.length;Te<je;Te++){const nt=Ae[Te];It(me,he,A,nt)}Be&&Ee.render(A);for(let Te=0,je=Ae.length;Te<je;Te++){const nt=Ae[Te];Qt(y,A,nt,nt.viewport)}}else he.length>0&&It(me,he,A,N),Be&&Ee.render(A),Qt(y,A,N)}z!==null&&I===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),W&&x.end(S),A.isScene===!0&&A.onAfterRender(S,A,N),se.resetDefaultState(),G=-1,k=null,E.pop(),E.length>0?(w=E[E.length-1],De===!0&&re.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function Lt(A,N,q,W){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){W&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const me=ve.update(A),he=A.material;he.visible&&y.push(A,me,he,q,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const me=ve.update(A),he=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ge.copy(me.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(he)){const Ae=me.groups;for(let Te=0,je=Ae.length;Te<je;Te++){const nt=Ae[Te],Fe=he[nt.materialIndex];Fe&&Fe.visible&&y.push(A,me,Fe,q,Ge.z,nt)}}else he.visible&&y.push(A,me,he,q,Ge.z,null)}}const fe=A.children;for(let me=0,he=fe.length;me<he;me++)Lt(fe[me],N,q,W)}function Qt(A,N,q,W){const{opaque:H,transmissive:fe,transparent:me}=A;w.setupLightsView(q),De===!0&&re.setGlobalState(S.clippingPlanes,q),W&&ye.viewport(B.copy(W)),H.length>0&&Mt(H,N,q),fe.length>0&&Mt(fe,N,q),me.length>0&&Mt(me,N,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function It(A,N,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Fe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new gs(1,1,{generateMipmaps:!0,type:Fe?Vs:Li,minFilter:$r,samples:He.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const fe=w.state.transmissionRenderTarget[W.id],me=W.viewport||B;fe.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const he=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(Q),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Ee.render(q);const je=S.toneMapping;S.toneMapping=ms;const nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),De===!0&&re.setGlobalState(S.clippingPlanes,W),Mt(A,q,W),F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let St=0,Ht=N.length;St<Ht;St++){const zt=N[St],{object:wt,geometry:Sn,material:Oe,group:oi}=zt;if(Oe.side===ls&&wt.layers.test(W.layers)){const pt=Oe.side;Oe.side=si,Oe.needsUpdate=!0,vt(wt,q,W,Sn,Oe,oi),Oe.side=pt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe))}S.setRenderTarget(he,Ae,Te),S.setClearColor(Q,D),nt!==void 0&&(W.viewport=nt),S.toneMapping=je}function Mt(A,N,q){const W=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=A.length;H<fe;H++){const me=A[H],{object:he,geometry:Ae,group:Te}=me;let je=me.material;je.allowOverride===!0&&W!==null&&(je=W),he.layers.test(q.layers)&&vt(he,N,q,Ae,je,Te)}}function vt(A,N,q,W,H,fe){A.onBeforeRender(S,N,q,W,H,fe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(S,N,q,W,A,fe),H.transparent===!0&&H.side===ls&&H.forceSinglePass===!1?(H.side=si,H.needsUpdate=!0,S.renderBufferDirect(q,N,W,H,A,fe),H.side=xr,H.needsUpdate=!0,S.renderBufferDirect(q,N,W,H,A,fe),H.side=ls):S.renderBufferDirect(q,N,W,H,A,fe),A.onAfterRender(S,N,q,W,H,fe)}function Mn(A,N,q){N.isScene!==!0&&(N=Ke);const W=b.get(A),H=w.state.lights,fe=w.state.shadowsArray,me=H.state.version,he=oe.getParameters(A,H.state,fe,N,q),Ae=oe.getProgramCacheKey(he);let Te=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?N.environment:null,W.fog=N.fog;const je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=K.get(A.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",xe),Te=new Map,W.programs=Te);let nt=Te.get(Ae);if(nt!==void 0){if(W.currentProgram===nt&&W.lightsStateVersion===me)return bn(A,he),nt}else he.uniforms=oe.getUniforms(A),A.onBeforeCompile(he,S),nt=oe.acquireProgram(he,Ae),Te.set(Ae,nt),W.uniforms=he.uniforms;const Fe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=re.uniform),bn(A,he),W.needsLights=tn(A),W.lightsStateVersion=me,W.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=nt,W.uniformsList=null,nt}function Pt(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Gc.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function bn(A,N){const q=b.get(A);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function wi(A,N,q,W,H){N.isScene!==!0&&(N=Ke),F.resetTextureUnits();const fe=N.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?N.environment:null,he=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ya,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Te=K.get(W.envMap||me,Ae),je=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!q.morphAttributes.position,St=!!q.morphAttributes.normal,Ht=!!q.morphAttributes.color;let zt=ms;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(zt=S.toneMapping);const wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Sn=wt!==void 0?wt.length:0,Oe=b.get(W),oi=w.state.lights;if(De===!0&&(Re===!0||A!==k)){const un=A===k&&W.id===G;re.setState(W,A,un)}let pt=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==oi.state.version||Oe.outputColorSpace!==he||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==Te||W.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==nt||Oe.morphTargets!==Fe||Oe.morphNormals!==St||Oe.morphColors!==Ht||Oe.toneMapping!==zt||Oe.morphTargetsCount!==Sn)&&(pt=!0):(pt=!0,Oe.__version=W.version);let Vi=Oe.currentProgram;pt===!0&&(Vi=Mn(W,N,H));let es=!1,Mr=!1,go=!1;const At=Vi.getUniforms(),gn=Oe.uniforms;if(ye.useProgram(Vi.program)&&(es=!0,Mr=!0,go=!0),W.id!==G&&(G=W.id,Mr=!0),es||k!==A){ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(O,"projectionMatrix",A.projectionMatrix),At.setValue(O,"viewMatrix",A.matrixWorldInverse);const Xs=At.map.cameraPosition;Xs!==void 0&&Xs.setValue(O,we.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&At.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Mr=!0,go=!0)}if(Oe.needsLights&&(oi.state.directionalShadowMap.length>0&&At.setValue(O,"directionalShadowMap",oi.state.directionalShadowMap,F),oi.state.spotShadowMap.length>0&&At.setValue(O,"spotShadowMap",oi.state.spotShadowMap,F),oi.state.pointShadowMap.length>0&&At.setValue(O,"pointShadowMap",oi.state.pointShadowMap,F)),H.isSkinnedMesh){At.setOptional(O,H,"bindMatrix"),At.setOptional(O,H,"bindMatrixInverse");const un=H.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),At.setValue(O,"boneTexture",un.boneTexture,F))}H.isBatchedMesh&&(At.setOptional(O,H,"batchingTexture"),At.setValue(O,"batchingTexture",H._matricesTexture,F),At.setOptional(O,H,"batchingIdTexture"),At.setValue(O,"batchingIdTexture",H._indirectTexture,F),At.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(O,"batchingColorTexture",H._colorsTexture,F));const Ws=q.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&de.update(H,q,Vi),(Mr||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,At.setValue(O,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&N.environment!==null&&(gn.envMapIntensity.value=N.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=b3()),Mr&&(At.setValue(O,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&en(gn,go),fe&&W.fog===!0&&Le.refreshFogUniforms(gn,fe),Le.refreshMaterialUniforms(gn,W,Ue,ce,w.state.transmissionRenderTarget[A.id]),Gc.upload(O,Pt(Oe),gn,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Gc.upload(O,Pt(Oe),gn,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(O,"center",H.center),At.setValue(O,"modelViewMatrix",H.modelViewMatrix),At.setValue(O,"normalMatrix",H.normalMatrix),At.setValue(O,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const un=W.uniformsGroups;for(let Xs=0,_o=un.length;Xs<_o;Xs++){const cp=un[Xs];pe.update(cp,Vi),pe.bind(cp,Vi)}}return Vi}function en(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,N,q){const W=b.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=N,b.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,N){const q=b.get(A);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0};const cn=O.createFramebuffer();this.setRenderTarget=function(A,N=0,q=0){z=A,R=N,I=q;let W=null,H=!1,fe=!1;if(A){const he=b.get(A);if(he.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(O.FRAMEBUFFER,he.__webglFramebuffer),B.copy(A.viewport),U.copy(A.scissor),J=A.scissorTest,ye.viewport(B),ye.scissor(U),ye.setScissorTest(J),G=-1;return}else if(he.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(he.__hasExternalTextures)F.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(he.__boundDepthTexture!==je){if(je!==null&&b.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(fe=!0);const Te=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?W=Te[N][q]:W=Te[N],H=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?W=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[q]:W=Te,B.copy(A.viewport),U.copy(A.scissor),J=A.scissorTest}else B.copy($).multiplyScalar(Ue).floor(),U.copy(ee).multiplyScalar(Ue).floor(),J=ne;if(q!==0&&(W=cn),ye.bindFramebuffer(O.FRAMEBUFFER,W)&&ye.drawBuffers(A,W),ye.viewport(B),ye.scissor(U),ye.setScissorTest(J),H){const he=b.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,q)}else if(fe){const he=N;for(let Ae=0;Ae<A.textures.length;Ae++){const Te=b.get(A.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Te.__webglTexture,q,he)}}else if(A!==null&&q!==0){const he=b.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,he.__webglTexture,q)}G=-1},this.readRenderTargetPixels=function(A,N,q,W,H,fe,me,he=0){if(!(A&&A.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){ye.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Te=A.textures[he],je=Te.format,nt=Te.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he),!He.textureFormatReadable(je)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(nt)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-W&&q>=0&&q<=A.height-H&&O.readPixels(N,q,W,H,le.convert(je),le.convert(nt),fe)}finally{const Te=z!==null?b.get(z).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,N,q,W,H,fe,me,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae)if(N>=0&&N<=A.width-W&&q>=0&&q<=A.height-H){ye.bindFramebuffer(O.FRAMEBUFFER,Ae);const Te=A.textures[he],je=Te.format,nt=Te.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he),!He.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(N,q,W,H,le.convert(je),le.convert(nt),0);const St=z!==null?b.get(z).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,St);const Ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await B1(O,Ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(Fe),O.deleteSync(Ht),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,N=null,q=0){const W=Math.pow(2,-q),H=Math.floor(A.image.width*W),fe=Math.floor(A.image.height*W),me=N!==null?N.x:0,he=N!==null?N.y:0;F.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,me,he,H,fe),ye.unbindTexture()};const bs=O.createFramebuffer(),mo=O.createFramebuffer();this.copyTextureToTexture=function(A,N,q=null,W=null,H=0,fe=0){let me,he,Ae,Te,je,nt,Fe,St,Ht;const zt=A.isCompressedTexture?A.mipmaps[fe]:A.image;if(q!==null)me=q.max.x-q.min.x,he=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,je=q.min.y,nt=q.isBox3?q.min.z:0;else{const gn=Math.pow(2,-H);me=Math.floor(zt.width*gn),he=Math.floor(zt.height*gn),A.isDataArrayTexture?Ae=zt.depth:A.isData3DTexture?Ae=Math.floor(zt.depth*gn):Ae=1,Te=0,je=0,nt=0}W!==null?(Fe=W.x,St=W.y,Ht=W.z):(Fe=0,St=0,Ht=0);const wt=le.convert(N.format),Sn=le.convert(N.type);let Oe;N.isData3DTexture?(F.setTexture3D(N,0),Oe=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(F.setTexture2DArray(N,0),Oe=O.TEXTURE_2D_ARRAY):(F.setTexture2D(N,0),Oe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const oi=O.getParameter(O.UNPACK_ROW_LENGTH),pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Vi=O.getParameter(O.UNPACK_SKIP_PIXELS),es=O.getParameter(O.UNPACK_SKIP_ROWS),Mr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),O.pixelStorei(O.UNPACK_SKIP_ROWS,je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);const go=A.isDataArrayTexture||A.isData3DTexture,At=N.isDataArrayTexture||N.isData3DTexture;if(A.isDepthTexture){const gn=b.get(A),Ws=b.get(N),un=b.get(gn.__renderTarget),Xs=b.get(Ws.__renderTarget);ye.bindFramebuffer(O.READ_FRAMEBUFFER,un.__webglFramebuffer),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let _o=0;_o<Ae;_o++)go&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(A).__webglTexture,H,nt+_o),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(N).__webglTexture,fe,Ht+_o)),O.blitFramebuffer(Te,je,me,he,Fe,St,me,he,O.DEPTH_BUFFER_BIT,O.NEAREST);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||b.has(A)){const gn=b.get(A),Ws=b.get(N);ye.bindFramebuffer(O.READ_FRAMEBUFFER,bs),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,mo);for(let un=0;un<Ae;un++)go?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gn.__webglTexture,H,nt+un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gn.__webglTexture,H),At?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ws.__webglTexture,fe,Ht+un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ws.__webglTexture,fe),H!==0?O.blitFramebuffer(Te,je,me,he,Fe,St,me,he,O.COLOR_BUFFER_BIT,O.NEAREST):At?O.copyTexSubImage3D(Oe,fe,Fe,St,Ht+un,Te,je,me,he):O.copyTexSubImage2D(Oe,fe,Fe,St,Te,je,me,he);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Oe,fe,Fe,St,Ht,me,he,Ae,wt,Sn,zt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,fe,Fe,St,Ht,me,he,Ae,wt,zt.data):O.texSubImage3D(Oe,fe,Fe,St,Ht,me,he,Ae,wt,Sn,zt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Fe,St,me,he,wt,Sn,zt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Fe,St,zt.width,zt.height,wt,zt.data):O.texSubImage2D(O.TEXTURE_2D,fe,Fe,St,me,he,wt,Sn,zt);O.pixelStorei(O.UNPACK_ROW_LENGTH,oi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vi),O.pixelStorei(O.UNPACK_SKIP_ROWS,es),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mr),fe===0&&N.generateMipmaps&&O.generateMipmap(Oe),ye.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){R=0,I=0,z=null,ye.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function w3(){const i=document.getElementById("webgl-globe");if(!i)return;const e=new nA,t=new Di(45,i.clientWidth/i.clientHeight,.1,1e3);t.position.z=18,t.position.x=0;const n=new S3({alpha:!0,antialias:!0});n.setSize(i.clientWidth,i.clientHeight),n.setPixelRatio(window.devicePixelRatio),i.appendChild(n.domElement);const s=new qa;e.add(s);const r=new op(7,3),o=new ll({color:1292487,wireframe:!0,transparent:!0,opacity:.15}),a=new ki(r,o);s.add(a);const l=new kn,c=800,u=new Float32Array(c*3),d=new Float32Array(c*3);for(let M=0;M<c;M++){const y=Math.random(),w=Math.random(),T=y*2*Math.PI,E=Math.acos(2*w-1),x=7+Math.random()*2;u[M*3]=x*Math.sin(E)*Math.cos(T),u[M*3+1]=x*Math.sin(E)*Math.sin(T),u[M*3+2]=x*Math.cos(E),d[M*3]=1,d[M*3+1]=1,d[M*3+2]=1}l.setAttribute("position",new Ni(u,3)),l.setAttribute("color",new Ni(d,3));const f=new Sv({size:.05,vertexColors:!0,transparent:!0,opacity:.4}),h=new dA(l,f);s.add(h);const p=(M,y,w)=>{const T=(90-M)*(Math.PI/180),E=(y+180)*(Math.PI/180),x=7,S=-(x*Math.sin(T)*Math.cos(E)),P=x*Math.sin(T)*Math.sin(E),R=x*Math.cos(T),I=new lp(.15,16,16),z=new ll({color:16777215}),G=new ki(I,z);G.position.set(S,R,P);const k=new ap(.2,.4,32),B=new ll({color:1292487,side:ls,transparent:!0,opacity:.8}),U=new ki(k,B);if(U.position.set(S,R,P),U.lookAt(new V(S*2,R*2,P*2)),s.add(G),s.add(U),Et.to(U.scale,{x:2.5,y:2.5,duration:1.5+Math.random(),repeat:-1,yoyo:!0,ease:"sine.inOut"}),Et.to(B,{opacity:0,duration:1.5+Math.random(),repeat:-1,yoyo:!0,ease:"sine.inOut"}),w!=="JP"){const J=54.4*(Math.PI/180),Q=(139.6+180)*(Math.PI/180),D=-(x*Math.sin(J)*Math.cos(Q)),ae=x*Math.sin(J)*Math.sin(Q),ce=x*Math.cos(J),Ue=new V(D,ce,ae),Ve=new V(S,R,P),$e=Ue.distanceTo(Ve),$=Ue.clone().lerp(Ve,.5);$.normalize().multiplyScalar(x+$e*.3);const ne=new xA(Ue,$,Ve).getPoints(50),Pe=new kn().setFromPoints(ne),De=new bv({color:1292487,transparent:!0,opacity:.3}),Re=new hA(Pe,De);s.add(Re)}};p(35.6,139.6,"JP"),p(39.9,116.4,"CN"),p(38.9,-77,"US"),p(51.5,-.1,"UK"),p(45.4,-75.7,"CA"),p(1.3,103.8,"SG"),p(52.5,13.4,"DE"),s.rotation.x=.2,s.rotation.y=-1.5;let _=0,m=0;window.addEventListener("mousemove",M=>{_=(M.clientX/window.innerWidth-.5)*2,m=(M.clientY/window.innerHeight-.5)*2});const g=new RA;function v(){requestAnimationFrame(v);const M=g.getElapsedTime();s.rotation.y+=.002,h.rotation.y=M*.05,h.rotation.x=Math.sin(M*.2)*.1,Et.to(t.position,{x:_*2,y:-m*2,duration:2,ease:"power2.out"}),t.lookAt(new V(0,0,0)),n.render(e,t)}v(),window.addEventListener("resize",()=>{i&&(t.aspect=i.clientWidth/i.clientHeight,t.updateProjectionMatrix(),n.setSize(i.clientWidth,i.clientHeight))})}Et.registerPlugin(at);document.addEventListener("DOMContentLoaded",()=>{w3();const i=document.querySelector(".site-header");i&&window.addEventListener("scroll",()=>{window.scrollY>50?(i.style.background="rgba(255, 255, 255, 0.9)",i.style.boxShadow="0 4px 20px rgba(0,0,0,0.05)"):(i.style.background="rgba(255, 255, 255, 0.85)",i.style.boxShadow="none")});const e=document.querySelector(".nav-toggle"),t=document.querySelector(".site-nav");e&&t&&e.addEventListener("click",function(){const f=t.classList.toggle("is-open");e.setAttribute("aria-expanded",f?"true":"false")}),document.getElementById("tsparticles")&&(async()=>(await s1(_h),await _h.load({id:"tsparticles",options:{background:{color:{value:"transparent"}},fpsLimit:60,interactivity:{events:{onHover:{enable:!0,mode:"grab"},resize:!0},modes:{grab:{distance:150,links:{opacity:.5}}}},particles:{color:{value:["#ffffff","#13b8c7","#C9CCD1"]},links:{color:"#ffffff",distance:120,enable:!0,opacity:.15,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:.8,straight:!1},number:{density:{enable:!0,width:800},value:70},opacity:{value:{min:.1,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!0}})))();const s=Et.timeline({defaults:{ease:"power3.out",duration:1}});Et.set(".hero-cta",{opacity:0,y:30}),s.from(".js-title-line",{y:40,opacity:0,duration:1.2,stagger:.15}).from(".js-lead-line",{y:20,opacity:0,duration:.8,stagger:.1},"-=0.6").to(".hero-cta",{y:0,opacity:1},"-=0.4").from(".hero-visual-container",{scale:.8,opacity:0,duration:2,ease:"power2.out"},"-=1.5"),Et.to(".ring-1",{rotationZ:360,duration:40,repeat:-1,ease:"none"}),Et.to(".ring-2",{rotationZ:-360,duration:50,repeat:-1,ease:"none"}),Et.to(".ring-3",{rotationZ:360,duration:30,repeat:-1,ease:"none"}),Et.to(".ring-glow",{rotationZ:360,duration:20,repeat:-1,ease:"none",scale:1.1,yoyo:!0}),Et.utils.toArray(".t-card").forEach((f,h)=>{Et.to(f,{y:`+=${15+h*10}`,x:`+=${10-h*5}`,rotationX:"+=8",rotationY:"+=12",rotationZ:"+=5",duration:3+h,repeat:-1,yoyo:!0,ease:"sine.inOut"})}),Et.to(".node",{scale:1.5,opacity:.5,duration:1.5,repeat:-1,yoyo:!0,stagger:.3,ease:"power2.inOut"}),Et.from(".js-node-line",{strokeDashoffset:100,strokeDasharray:100,duration:5,repeat:-1,ease:"linear",opacity:.5}),Et.from(".js-node-line-fast",{strokeDashoffset:40,strokeDasharray:40,duration:2,repeat:-1,ease:"linear"});const o=document.querySelector(".hero"),a=document.querySelector(".hero-visual-container");o&&a&&(o.addEventListener("mousemove",f=>{const h=(f.clientX/window.innerWidth-.5)*60,p=(f.clientY/window.innerHeight-.5)*60;Et.to(a,{rotationY:h,rotationX:-p,duration:2,ease:"power2.out"}),Et.to(".t-card-1",{x:h*1.5,y:p*1.5,duration:2,ease:"power2.out"}),Et.to(".t-card-2",{x:h*-1.2,y:p*-1.2,duration:2,ease:"power2.out"}),Et.to(".t-card-3",{x:h*2,y:p*2,duration:2,ease:"power2.out"}),Et.to(".t-card-4",{x:h*-2.5,y:p*-2.5,duration:2,ease:"power2.out"})}),o.addEventListener("mouseleave",()=>{Et.to(a,{rotationY:0,rotationX:0,duration:2,ease:"power2.out"}),Et.to(".t-card",{x:0,y:0,duration:2,ease:"power2.out"})})),document.querySelectorAll(".js-fade").forEach(f=>{Et.fromTo(f,{y:30,opacity:0},{y:0,opacity:1,duration:1,ease:"power2.out",scrollTrigger:{trigger:f,start:"top 85%",toggleActions:"play none none reverse"}})}),document.querySelectorAll(".js-stagger").forEach(f=>{const h=f.children;Et.to(h,{y:0,opacity:1,duration:.8,stagger:.15,ease:"power2.out",scrollTrigger:{trigger:f,start:"top 80%",toggleActions:"play none none reverse"}})}),Et.fromTo(".js-scale",{scale:.95,opacity:0},{scale:1,opacity:1,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:".js-scale",start:"top 80%"}}),document.querySelectorAll(".js-counter").forEach(f=>{const h=parseInt(f.innerText,10);f.innerText="0",Et.to(f,{innerHTML:h,duration:2,ease:"power2.out",snap:{innerHTML:1},scrollTrigger:{trigger:f,start:"top 90%"}})});const d=document.querySelector(".js-card-svg");d&&Et.to(d,{y:-15,rotationX:10,rotationY:-15,repeat:-1,yoyo:!0,duration:3,ease:"sine.inOut"})});
