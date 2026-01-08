import"./D8owG1S5.js";import{i as Dt}from"./D1e-z2TN.js";import{U as Ne,Z as Br,Y as qs,k as tn,y as Uf,a0 as JE,a1 as XE,a2 as tf,a3 as ur,a4 as lr,V as dt,aU as Mf,aV as ZE,T as Ii,X as KE,N as eT,aW as $f,aw as Vf,R as Zo,m as Rr,ab as rf,aB as sf,O as Gf,Q as nT,aX as Ys,aY as Fo,P as _i,aZ as Ws,a_ as tT,a$ as jf,b0 as rT,b1 as iT,b2 as sT,a9 as Ko,b3 as kr,b4 as qf,q as Yf,b5 as aT,t as Mr,b6 as oT,b7 as uT,b8 as lT,b9 as Bo,ba as cT,I as eu,bb as fT,_ as pT,bc as dT,bd as hT,be as Is,e as Wf,bf as gT,bg as mT,bh as DT,bi as vT,bj as ET,bk as TT,bl as ST,bm as yT,bn as AT,aF as IT,bo as _T,bp as FT,bq as NT,br as bT,bs as CT,bt as wT,a5 as OT,p as je,f as rn,d as pn,g as Xe,u as We,o as ye,j as nu,b as Ae,c as qe,v as Yn,n as Wn,H as xT,l as tu,s as vi,a as ru,i as kT,aq as RT}from"./C5qmwJW-.js";import{B as LT,p as Re,i as Po,c as BT}from"./D5U4kpk5.js";import{b as PT}from"./CsD2PvJr.js";function Ei(n,t){return t}function UT(n,t,r){for(var s=n.items,a=[],u=t.length,c=0;c<u;c++)rT(t[c].e,a,!0);var f=u>0&&a.length===0&&r!==null;if(f){var h=r.parentNode;iT(h),h.append(r),s.clear(),pt(n,t[0].prev,t[u-1].next)}sT(a,()=>{for(var m=0;m<u;m++){var D=t[m];f||(s.delete(D.k),pt(n,D.prev,D.next)),_i(D.e,!f)}})}function Ti(n,t,r,s,a,u=null){var c=n,f={flags:t,items:new Map,first:null},h=(t&qf)!==0;if(h){var m=n;c=Ne?ur(kr(m)):m.appendChild(Zo())}Ne&&Br();var D=null,T=!1,I=new Map,k=Uf(()=>{var X=r();return Vf(X)?X:X==null?[]:$f(X)}),F,B;function U(){MT(B,F,f,I,c,a,t,s,r),u!==null&&(F.length===0?D?Gf(D):D=Ii(()=>u(c)):D!==null&&nT(D,()=>{D=null}))}qs(()=>{B??=Ko,F=tn(k);var X=F.length;if(T&&X===0)return;T=X===0;let he=!1;if(Ne){var Z=JE(c)===XE;Z!==(X===0)&&(c=tf(),ur(c),lr(!1),he=!0)}if(Ne){for(var Q=null,oe,P=0;P<X;P++){if(dt.nodeType===Mf&&dt.data===ZE){c=dt,he=!0,lr(!1);break}var $=F[P],ue=s($,P);oe=Uo(dt,f,Q,null,$,ue,P,a,t,r),f.items.set(ue,oe),Q=oe}X>0&&ur(tf())}if(Ne)X===0&&u&&(D=Ii(()=>u(c)));else if(KE()){var C=new Set,j=eT;for(P=0;P<X;P+=1){$=F[P],ue=s($,P);var Oe=f.items.get(ue)??I.get(ue);Oe?(t&(Ws|Ys))!==0&&Hf(Oe,$,P,t):(oe=Uo(null,f,null,null,$,ue,P,a,t,r,!0),I.set(ue,oe)),C.add(ue)}for(const[Pe,wn]of f.items)C.has(Pe)||j.skipped_effects.add(wn.e);j.add_callback(U)}else U();he&&lr(!0),tn(k)}),Ne&&(c=dt)}function MT(n,t,r,s,a,u,c,f,h){var m=(c&aT)!==0,D=(c&(Ws|Ys))!==0,T=t.length,I=r.items,k=r.first,F=k,B,U=null,X,he=[],Z=[],Q,oe,P,$;if(m)for($=0;$<T;$+=1)Q=t[$],oe=f(Q,$),P=I.get(oe),P!==void 0&&(P.a?.measure(),(X??=new Set).add(P));for($=0;$<T;$+=1){if(Q=t[$],oe=f(Q,$),P=I.get(oe),P===void 0){var ue=s.get(oe);if(ue!==void 0){s.delete(oe),I.set(oe,ue);var C=U?U.next:F;pt(r,U,ue),pt(r,ue,C),No(ue,C,a),U=ue}else{var j=F?F.e.nodes_start:a;U=Uo(j,r,U,U===null?r.first:U.next,Q,oe,$,u,c,h)}I.set(oe,U),he=[],Z=[],F=U.next;continue}if(D&&Hf(P,Q,$,c),(P.e.f&Fo)!==0&&(Gf(P.e),m&&(P.a?.unfix(),(X??=new Set).delete(P))),P!==F){if(B!==void 0&&B.has(P)){if(he.length<Z.length){var Oe=Z[0],Pe;U=Oe.prev;var wn=he[0],Lt=he[he.length-1];for(Pe=0;Pe<he.length;Pe+=1)No(he[Pe],Oe,a);for(Pe=0;Pe<Z.length;Pe+=1)B.delete(Z[Pe]);pt(r,wn.prev,Lt.next),pt(r,U,wn),pt(r,Lt,Oe),F=Oe,U=Lt,$-=1,he=[],Z=[]}else B.delete(P),No(P,F,a),pt(r,P.prev,P.next),pt(r,P,U===null?r.first:U.next),pt(r,U,P),U=P;continue}for(he=[],Z=[];F!==null&&F.k!==oe;)(F.e.f&Fo)===0&&(B??=new Set).add(F),Z.push(F),F=F.next;if(F===null)continue;P=F}he.push(P),U=P,F=P.next}if(F!==null||B!==void 0){for(var On=B===void 0?[]:$f(B);F!==null;)(F.e.f&Fo)===0&&On.push(F),F=F.next;var Bt=On.length;if(Bt>0){var xn=(c&qf)!==0&&T===0?a:null;if(m){for($=0;$<Bt;$+=1)On[$].a?.measure();for($=0;$<Bt;$+=1)On[$].a?.fix()}UT(r,On,xn)}}m&&Yf(()=>{if(X!==void 0)for(P of X)P.a?.apply()}),n.first=r.first&&r.first.e,n.last=U&&U.e;for(var Sn of s.values())_i(Sn.e);s.clear()}function Hf(n,t,r,s){(s&Ws)!==0&&sf(n.v,t),(s&Ys)!==0?sf(n.i,r):n.i=r}function Uo(n,t,r,s,a,u,c,f,h,m,D){var T=(h&Ws)!==0,I=(h&tT)===0,k=T?I?Rr(a,!1,!1):rf(a):a,F=(h&Ys)===0?c:rf(c),B={i:F,v:k,k:u,a:null,e:null,prev:r,next:s};try{if(n===null){var U=document.createDocumentFragment();U.append(n=Zo())}return B.e=Ii(()=>f(n,k,F,m),Ne),B.e.prev=r&&r.e,B.e.next=s&&s.e,r===null?D||(t.first=B):(r.next=B,r.e.next=B.e),s!==null&&(s.prev=B,s.e.prev=B.e),B}finally{}}function No(n,t,r){for(var s=n.next?n.next.e.nodes_start:r,a=t?t.e.nodes_start:r,u=n.e.nodes_start;u!==null&&u!==s;){var c=jf(u);a.before(u),u=c}}function pt(n,t,r){t===null?n.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function $T(n,t,r=!1,s=!1,a=!1){var u=n,c="";Mr(()=>{var f=Ko;if(c===(c=t()??"")){Ne&&Br();return}if(f.nodes_start!==null&&(oT(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),c!==""){if(Ne){dt.data;for(var h=Br(),m=h;h!==null&&(h.nodeType!==Mf||h.data!=="");)m=h,h=jf(h);if(h===null)throw uT(),lT;Bo(dt,m),u=ur(h);return}var D=c+"";r?D=`<svg>${D}</svg>`:s&&(D=`<math>${D}</math>`);var T=cT(D);if((r||s)&&(T=kr(T)),Bo(kr(T),T.lastChild),r||s)for(;kr(T);)u.before(kr(T));else u.before(T)}})}function at(n,t,r,s,a){Ne&&Br();var u=t.$$slots?.[r],c=!1;u===!0&&(u=t[r==="default"?"children":r],c=!0),u===void 0?a!==null&&a(n):u(n,c?()=>s:s)}function A_(n){const t={};n.children&&(t.default=!0);for(const r in n.$$slots)t[r]=!0;return t}function zf(n,t,r,s,a,u){let c=Ne;Ne&&Br();var f=null;Ne&&dt.nodeType===fT&&(f=dt,Br());var h=Ne?dt:n,m=new LT(h,!1);qs(()=>{const D=t()||null;var T=D==="svg"?dT:null;if(D===null){m.ensure(null,null),Is(!0);return}return m.ensure(D,I=>{if(D){if(f=Ne?f:T?document.createElementNS(T,D):document.createElement(D),Bo(f,f),s){Ne&&hT(D)&&f.append(document.createComment(""));var k=Ne?kr(f):f.appendChild(Zo());Ne&&(k===null?lr(!1):ur(k)),s(f,k)}Ko.nodes_end=f,I.before(f)}Ne&&ur(I)}),Is(!0),()=>{D&&Is(!1)}},pT),eu(()=>{Is(!0)}),c&&(lr(!0),ur(h))}function VT(n,t){var r=void 0,s;qs(()=>{r!==(r=t())&&(s&&(_i(s),s=null),r&&(s=Ii(()=>{Wf(()=>r(n))})))})}function Qf(n){var t,r,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(t=0;t<a;t++)n[t]&&(r=Qf(n[t]))&&(s&&(s+=" "),s+=r)}else for(r in n)n[r]&&(s&&(s+=" "),s+=r);return s}function GT(){for(var n,t,r=0,s="",a=arguments.length;r<a;r++)(n=arguments[r])&&(t=Qf(n))&&(s&&(s+=" "),s+=t);return s}function jT(n){return typeof n=="object"?GT(n):n??""}const af=[...` 	
\r\f \v\uFEFF`];function qT(n,t,r){var s=n==null?"":""+n;if(t&&(s=s?s+" "+t:t),r){for(var a in r)if(r[a])s=s?s+" "+a:a;else if(s.length)for(var u=a.length,c=0;(c=s.indexOf(a,c))>=0;){var f=c+u;(c===0||af.includes(s[c-1]))&&(f===s.length||af.includes(s[f]))?s=(c===0?"":s.substring(0,c))+s.substring(f+1):c=f}}return s===""?null:s}function of(n,t=!1){var r=t?" !important;":";",s="";for(var a in n){var u=n[a];u!=null&&u!==""&&(s+=" "+a+": "+u+r)}return s}function bo(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function YT(n,t){if(t){var r="",s,a;if(Array.isArray(t)?(s=t[0],a=t[1]):s=t,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,c=0,f=!1,h=[];s&&h.push(...Object.keys(s).map(bo)),a&&h.push(...Object.keys(a).map(bo));var m=0,D=-1;const B=n.length;for(var T=0;T<B;T++){var I=n[T];if(f?I==="/"&&n[T-1]==="*"&&(f=!1):u?u===I&&(u=!1):I==="/"&&n[T+1]==="*"?f=!0:I==='"'||I==="'"?u=I:I==="("?c++:I===")"&&c--,!f&&u===!1&&c===0){if(I===":"&&D===-1)D=T;else if(I===";"||T===B-1){if(D!==-1){var k=bo(n.substring(m,D).trim());if(!h.includes(k)){I!==";"&&T++;var F=n.substring(m,T).trim();r+=" "+F+";"}}m=T+1,D=-1}}}}return s&&(r+=of(s)),a&&(r+=of(a,!0)),r=r.trim(),r===""?null:r}return n==null?null:String(n)}function Jf(n,t,r,s,a,u){var c=n.__className;if(Ne||c!==r||c===void 0){var f=qT(r,s,u);(!Ne||f!==n.getAttribute("class"))&&(f==null?n.removeAttribute("class"):t?n.className=f:n.setAttribute("class",f)),n.__className=r}else if(u&&a!==u)for(var h in u){var m=!!u[h];(a==null||m!==!!a[h])&&n.classList.toggle(h,m)}return u}function Co(n,t={},r,s){for(var a in r){var u=r[a];t[a]!==u&&(r[a]==null?n.style.removeProperty(a):n.style.setProperty(a,u,s))}}function WT(n,t,r,s){var a=n.__style;if(Ne||a!==t){var u=YT(t,s);(!Ne||u!==n.getAttribute("style"))&&(u==null?n.removeAttribute("style"):n.style.cssText=u),n.__style=t}else s&&(Array.isArray(s)?(Co(n,r?.[0],s[0]),Co(n,r?.[1],s[1],"important")):Co(n,r,s));return s}function Mo(n,t,r=!1){if(n.multiple){if(t==null)return;if(!Vf(t))return gT();for(var s of n.options)s.selected=t.includes(uf(s));return}for(s of n.options){var a=uf(s);if(mT(a,t)){s.selected=!0;return}}(!r||t!==void 0)&&(n.selectedIndex=-1)}function HT(n){var t=new MutationObserver(()=>{Mo(n,n.__value)});t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),eu(()=>{t.disconnect()})}function uf(n){return"__value"in n?n.__value:n.value}const li=Symbol("class"),ci=Symbol("style"),Xf=Symbol("is custom element"),Zf=Symbol("is html");function zT(n){if(Ne){var t=!1,r=()=>{if(!t){if(t=!0,n.hasAttribute("value")){var s=n.value;wt(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var a=n.checked;wt(n,"checked",null),n.checked=a}}};n.__on_r=r,Yf(r),_T()}}function QT(n,t){t?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function wt(n,t,r,s){var a=ep(n);Ne&&(a[t]=n.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&n.nodeName==="LINK")||a[t]!==(a[t]=r)&&(t==="loading"&&(n[bT]=r),r==null?n.removeAttribute(t):typeof r!="string"&&np(n).includes(t)?n[t]=r:n.setAttribute(t,r))}function JT(n,t,r,s,a=!1,u=!1){if(Ne&&a&&n.tagName==="INPUT"){var c=n,f=c.type==="checkbox"?"defaultChecked":"defaultValue";f in r||zT(c)}var h=ep(n),m=h[Xf],D=!h[Zf];let T=Ne&&m;T&&lr(!1);var I=t||{},k=n.tagName==="OPTION";for(var F in t)F in r||(r[F]=null);r.class?r.class=jT(r.class):(s||r[li])&&(r.class=null),r[ci]&&(r.style??=null);var B=np(n);for(const P in r){let $=r[P];if(k&&P==="value"&&$==null){n.value=n.__value="",I[P]=$;continue}if(P==="class"){var U=n.namespaceURI==="http://www.w3.org/1999/xhtml";Jf(n,U,$,s,t?.[li],r[li]),I[P]=$,I[li]=r[li];continue}if(P==="style"){WT(n,$,t?.[ci],r[ci]),I[P]=$,I[ci]=r[ci];continue}var X=I[P];if(!($===X&&!($===void 0&&n.hasAttribute(P)))){I[P]=$;var he=P[0]+P[1];if(he!=="$$")if(he==="on"){const ue={},C="$$"+P;let j=P.slice(2);var Z=CT(j);if(ET(j)&&(j=j.slice(0,-7),ue.capture=!0),!Z&&X){if($!=null)continue;n.removeEventListener(j,I[C],ue),I[C]=null}if($!=null)if(Z)n[`__${j}`]=$,ST([j]);else{let Oe=function(Pe){I[P].call(this,Pe)};I[C]=TT(j,n,Oe,ue)}else Z&&(n[`__${j}`]=void 0)}else if(P==="style")wt(n,P,$);else if(P==="autofocus")yT(n,!!$);else if(!m&&(P==="__value"||P==="value"&&$!=null))n.value=n.__value=$;else if(P==="selected"&&k)QT(n,$);else{var Q=P;D||(Q=AT(Q));var oe=Q==="defaultValue"||Q==="defaultChecked";if($==null&&!m&&!oe)if(h[P]=null,Q==="value"||Q==="checked"){let ue=n;const C=t===void 0;if(Q==="value"){let j=ue.defaultValue;ue.removeAttribute(Q),ue.defaultValue=j,ue.value=ue.__value=C?j:null}else{let j=ue.defaultChecked;ue.removeAttribute(Q),ue.defaultChecked=j,ue.checked=C?j:!1}}else n.removeAttribute(P);else oe||B.includes(Q)&&(m||typeof $!="string")?(n[Q]=$,Q in h&&(h[Q]=IT)):typeof $!="function"&&wt(n,Q,$)}}}return T&&lr(!0),I}function Kf(n,t,r=[],s=[],a,u=!1,c=!1){DT(r,s,f=>{var h=void 0,m={},D=n.nodeName==="SELECT",T=!1;if(qs(()=>{var k=t(...f.map(tn)),F=JT(n,h,k,a,u,c);T&&D&&"value"in k&&Mo(n,k.value);for(let U of Object.getOwnPropertySymbols(m))k[U]||_i(m[U]);for(let U of Object.getOwnPropertySymbols(k)){var B=k[U];U.description===vT&&(!h||B!==h[U])&&(m[U]&&_i(m[U]),m[U]=Ii(()=>VT(n,()=>B))),F[U]=B}h=F}),D){var I=n;Wf(()=>{Mo(I,h.value,!0),HT(I)})}T=!0})}function ep(n){return n.__attributes??={[Xf]:n.nodeName.includes("-"),[Zf]:n.namespaceURI===FT}}var lf=new Map;function np(n){var t=n.getAttribute("is")||n.nodeName,r=lf.get(t);if(r)return r;lf.set(t,r=[]);for(var s,a=n,u=Element.prototype;u!==a;){s=wT(a);for(var c in s)s[c].set&&r.push(c);a=NT(a)}return r}function ie(n,t,r){var s=OT(n,t);s&&s.set&&(n[t]=r,eu(()=>{n[t]=null}))}var XT=rn("<pre><code> </code></pre>");function ZT(n,t){je(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};Dt();var c=XT(),f=pn(c),h=pn(f,!0);return Xe(f),Xe(c),Mr(()=>{Jf(f,1,(ye(r()),We(()=>`lang-${r().lang}`))),nu(h,(ye(r()),We(()=>r().text)))}),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var KT=rn("<code> </code>");function eS(n,t){je(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};Dt();var c=KT(),f=pn(c,!0);return Xe(c),Mr(h=>nu(f,h),[()=>(ye(r()),We(()=>r().raw.slice(1,r().raw.length-1)))]),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),qe(u)}function Rs(n,t){let r=Re(t,"tokens",8),s=Re(t,"renderers",8),a=Re(t,"options",8);var u=Yn(),c=Wn(u);{var f=h=>{var m=Yn(),D=Wn(m);Ti(D,1,r,Ei,(T,I)=>{tp(T,{get token(){return tn(I)},get renderers(){return s()},get options(){return a()}})}),Ae(h,m)};Po(c,h=>{r()&&h(f)})}Ae(n,u)}function tp(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"renderers",8),a=Re(t,"options",8);Dt();var u=Yn(),c=Wn(u);{var f=h=>{var m=Yn(),D=Wn(m);BT(D,()=>s()[r().type],(T,I)=>{I(T,{get token(){return r()},get options(){return a()},get renderers(){return s()},children:(k,F)=>{var B=Yn(),U=Wn(B);{var X=Z=>{Rs(Z,{get tokens(){return ye(r()),We(()=>r().tokens)},get renderers(){return s()},get options(){return a()}})},he=Z=>{var Q=xT();Mr(()=>nu(Q,(ye(r()),We(()=>r().raw)))),Ae(Z,Q)};Po(U,Z=>{ye(r()),We(()=>"tokens"in r()&&r().tokens)?Z(X):Z(he,!1)})}Ae(k,B)},$$slots:{default:!0}})}),Ae(h,m)};Po(c,h=>{ye(s()),ye(r()),We(()=>s()[r().type])&&h(f)})}Ae(n,u),qe()}function nS(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8),a=Re(t,"renderers",8),u=Rr();tu(()=>ye(r()),()=>{vi(u,r().ordered?"ol":"ul")}),ru(),Dt();var c=Yn(),f=Wn(c);zf(f,()=>tn(u),!1,(h,m)=>{Kf(h,()=>({start:(ye(r()),We(()=>r().start||1))}));var D=Yn(),T=Wn(D);Ti(T,1,()=>(ye(r()),We(()=>r().items)),Ei,(I,k)=>{{let F=Uf(()=>(tn(k),We(()=>({...tn(k)}))));tp(I,{get token(){return tn(F)},get options(){return s()},get renderers(){return a()}})}}),Ae(m,D)}),Ae(n,c),qe()}var tS=rn("<li><!></li>");function rS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=tS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var iS=rn("<blockquote><!></blockquote>");function sS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=iS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var aS=rn("<br/>");function oS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=aS();return Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var uS=rn("<del><!></del>");function lS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=uS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var cS=rn("<dfn><!></dfn>");function fS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=cS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var pS=rn("<em><!></em>");function dS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=pS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}function Fi(...n){return`/${n.flatMap(t=>t.split("/")).filter(t=>!!t).join("/")}`}function Ni(n){return n.startsWith("/")||n.startsWith("#")}function rp(n,t){return t.slug(n).replace(/--+/g,"-")}function hS(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;let u=Rr();tu(()=>(ye(r()),ye(s())),()=>{vi(u,rp(r().text,s().slugger))}),ru();var c={renderers:a};Dt();var f=Yn(),h=Wn(f);return zf(h,()=>`h${r().depth}`,!1,(m,D)=>{Kf(m,()=>({id:tn(u)}));var T=Yn(),I=Wn(T);at(I,t,"default",{},null),Ae(D,T)}),Ae(n,f),ie(t,"renderers",a),qe(c)}var gS=rn("<hr/>");function mS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=gS();return Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}function DS(n,t){je(t,!1);let r=Re(t,"token",8);const s=void 0,a=void 0;var u={options:s,renderers:a};Dt();var c=Yn(),f=Wn(c);return $T(f,()=>(ye(r()),We(()=>r().text))),Ae(n,c),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var vS=rn('<img class="markdown-image svelte-cpunrt"/>');function ES(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;var u={renderers:a};Dt();var c=vS();return Mr(f=>{wt(c,"src",f),wt(c,"title",(ye(r()),We(()=>r().title))),wt(c,"alt",(ye(r()),We(()=>r().text)))},[()=>(ye(Ni),ye(r()),ye(Fi),ye(s()),We(()=>Ni(r().href)?Fi(s().baseUrl,r().href):r().href))]),Ae(n,c),ie(t,"renderers",a),qe(u)}var TS=rn("<a><!></a>");function SS(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8);const a=void 0;var u={renderers:a};Dt();var c=TS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Mr(h=>{wt(c,"href",h),wt(c,"title",(ye(r()),We(()=>r().title)))},[()=>(ye(Ni),ye(r()),ye(Fi),ye(s()),We(()=>Ni(r().href)?Fi(s().baseUrl,r().href):r().href))]),Ae(n,c),ie(t,"renderers",a),qe(u)}var yS=rn("<p><!></p>");function AS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=yS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}function cf(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=Yn(),f=Wn(c);return at(f,t,"default",{},null),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var IS=rn("<strong><!></strong>");function _S(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=IS(),f=pn(c);return at(f,t,"default",{},null),Xe(c),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}function FS(n,t){je(t,!1);const r=void 0,s=void 0,a=void 0;var u={token:r,options:s,renderers:a},c=Yn(),f=Wn(c);return at(f,t,"default",{},null),Ae(n,c),ie(t,"token",r),ie(t,"options",s),ie(t,"renderers",a),qe(u)}var NS=rn('<th scope="col"><!></th>'),bS=rn("<td><!></td>"),CS=rn("<tr></tr>"),wS=rn("<table><thead><tr></tr></thead><tbody></tbody></table>");function OS(n,t){je(t,!1);let r=Re(t,"token",8),s=Re(t,"options",8),a=Re(t,"renderers",8);Dt();var u=wS(),c=pn(u),f=pn(c);Ti(f,5,()=>(ye(r()),We(()=>r().header)),Ei,(m,D)=>{var T=NS(),I=pn(T);Rs(I,{get tokens(){return tn(D),We(()=>tn(D).tokens)},get options(){return s()},get renderers(){return a()}}),Xe(T),Ae(m,T)}),Xe(f),Xe(c);var h=kT(c);Ti(h,5,()=>(ye(r()),We(()=>r().rows)),Ei,(m,D)=>{var T=CS();Ti(T,5,()=>tn(D),Ei,(I,k)=>{var F=bS(),B=pn(F);Rs(B,{get tokens(){return tn(k),We(()=>tn(k).tokens)},get options(){return s()},get renderers(){return a()}}),Xe(F),Ae(I,F)}),Xe(T),Ae(m,T)}),Xe(h),Xe(u),Ae(n,u),qe()}const xS=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,kS=Object.hasOwnProperty;class ip{constructor(){this.occurrences,this.reset()}slug(t,r){const s=this;let a=RS(t,r===!0);const u=a;for(;kS.call(s.occurrences,a);)s.occurrences[u]++,a=u+"-"+s.occurrences[u];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function RS(n,t){return typeof n!="string"?"":(t||(n=n.toLowerCase()),n.replace(xS,"").replace(/ /g,"-"))}function iu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var gr=iu();function sp(n){gr=n}var Si={exec:()=>null};function De(n,t=""){let r=typeof n=="string"?n:n.source,s={replace:(a,u)=>{let c=typeof u=="string"?u:u.source;return c=c.replace(dn.caret,"$1"),r=r.replace(a,c),s},getRegex:()=>new RegExp(r,t)};return s}var dn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},LS=/^(?:[ \t]*(?:\n|$))+/,BS=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,PS=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Oi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,US=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,su=/(?:[*+-]|\d{1,9}[.)])/,ap=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,op=De(ap).replace(/bull/g,su).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),MS=De(ap).replace(/bull/g,su).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),au=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$S=/^[^\n]+/,ou=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,VS=De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ou).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),GS=De(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,su).getRegex(),Hs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",uu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,jS=De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",uu).replace("tag",Hs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),up=De(au).replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex(),qS=De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",up).getRegex(),lu={blockquote:qS,code:BS,def:VS,fences:PS,heading:US,hr:Oi,html:jS,lheading:op,list:GS,newline:LS,paragraph:up,table:Si,text:$S},ff=De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex(),YS={...lu,lheading:MS,table:ff,paragraph:De(au).replace("hr",Oi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ff).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex()},WS={...lu,html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",uu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(au).replace("hr",Oi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",op).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},HS=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,zS=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lp=/^( {2,}|\\)\n(?!\s*$)/,QS=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zs=/[\p{P}\p{S}]/u,cu=/[\s\p{P}\p{S}]/u,cp=/[^\s\p{P}\p{S}]/u,JS=De(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cu).getRegex(),fp=/(?!~)[\p{P}\p{S}]/u,XS=/(?!~)[\s\p{P}\p{S}]/u,ZS=/(?:[^\s\p{P}\p{S}]|~)/u,KS=De(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),pp=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ey=De(pp,"u").replace(/punct/g,zs).getRegex(),ny=De(pp,"u").replace(/punct/g,fp).getRegex(),dp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ty=De(dp,"gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,cu).replace(/punct/g,zs).getRegex(),ry=De(dp,"gu").replace(/notPunctSpace/g,ZS).replace(/punctSpace/g,XS).replace(/punct/g,fp).getRegex(),iy=De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,cu).replace(/punct/g,zs).getRegex(),sy=De(/\\(punct)/,"gu").replace(/punct/g,zs).getRegex(),ay=De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),oy=De(uu).replace("(?:-->|$)","-->").getRegex(),uy=De("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",oy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ls=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ly=De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ls).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hp=De(/^!?\[(label)\]\[(ref)\]/).replace("label",Ls).replace("ref",ou).getRegex(),gp=De(/^!?\[(ref)\](?:\[\])?/).replace("ref",ou).getRegex(),cy=De("reflink|nolink(?!\\()","g").replace("reflink",hp).replace("nolink",gp).getRegex(),pf=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,fu={_backpedal:Si,anyPunctuation:sy,autolink:ay,blockSkip:KS,br:lp,code:zS,del:Si,emStrongLDelim:ey,emStrongRDelimAst:ty,emStrongRDelimUnd:iy,escape:HS,link:ly,nolink:gp,punctuation:JS,reflink:hp,reflinkSearch:cy,tag:uy,text:QS,url:Si},fy={...fu,link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",Ls).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ls).getRegex()},$o={...fu,emStrongRDelimAst:ry,emStrongLDelim:ny,url:De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",pf).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:De(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",pf).getRegex()},py={...$o,br:De(lp).replace("{2,}","*").getRegex(),text:De($o.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_s={normal:lu,gfm:YS,pedantic:WS},fi={normal:fu,gfm:$o,breaks:py,pedantic:fy},dy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},df=n=>dy[n];function ft(n,t){if(t){if(dn.escapeTest.test(n))return n.replace(dn.escapeReplace,df)}else if(dn.escapeTestNoEncode.test(n))return n.replace(dn.escapeReplaceNoEncode,df);return n}function hf(n){try{n=encodeURI(n).replace(dn.percentDecode,"%")}catch{return null}return n}function gf(n,t){let r=n.replace(dn.findPipe,(u,c,f)=>{let h=!1,m=c;for(;--m>=0&&f[m]==="\\";)h=!h;return h?"|":" |"}),s=r.split(dn.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(dn.slashPipe,"|");return s}function pi(n,t,r){let s=n.length;if(s===0)return"";let a=0;for(;a<s&&n.charAt(s-a-1)===t;)a++;return n.slice(0,s-a)}function hy(n,t){if(n.indexOf(t[1])===-1)return-1;let r=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===t[0])r++;else if(n[s]===t[1]&&(r--,r<0))return s;return r>0?-2:-1}function mf(n,t,r,s,a){let u=t.href,c=t.title||null,f=n[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let h={type:n[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:c,text:f,tokens:s.inlineTokens(f)};return s.state.inLink=!1,h}function gy(n,t,r){let s=n.match(r.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(u=>{let c=u.match(r.other.beginningSpace);if(c===null)return u;let[f]=c;return f.length>=a.length?u.slice(a.length):u}).join(`
`)}var Bs=class{options;rules;lexer;constructor(n){this.options=n||gr}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:pi(r,`
`)}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let r=t[0],s=gy(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let s=pi(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:pi(t[0],`
`)}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let r=pi(t[0],`
`).split(`
`),s="",a="",u=[];for(;r.length>0;){let c=!1,f=[],h;for(h=0;h<r.length;h++)if(this.rules.other.blockquoteStart.test(r[h]))f.push(r[h]),c=!0;else if(!c)f.push(r[h]);else break;r=r.slice(h);let m=f.join(`
`),D=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${m}`:m,a=a?`${a}
${D}`:D;let T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(D,u,!0),this.lexer.state.top=T,r.length===0)break;let I=u.at(-1);if(I?.type==="code")break;if(I?.type==="blockquote"){let k=I,F=k.raw+`
`+r.join(`
`),B=this.blockquote(F);u[u.length-1]=B,s=s.substring(0,s.length-k.raw.length)+B.raw,a=a.substring(0,a.length-k.text.length)+B.text;break}else if(I?.type==="list"){let k=I,F=k.raw+`
`+r.join(`
`),B=this.list(F);u[u.length-1]=B,s=s.substring(0,s.length-I.raw.length)+B.raw,a=a.substring(0,a.length-k.raw.length)+B.raw,r=F.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:u,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim(),s=r.length>1,a={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let u=this.rules.other.listItemRegex(r),c=!1;for(;n;){let h=!1,m="",D="";if(!(t=u.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let T=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),I=n.split(`
`,1)[0],k=!T.trim(),F=0;if(this.options.pedantic?(F=2,D=T.trimStart()):k?F=t[1].length+1:(F=t[2].search(this.rules.other.nonSpaceChar),F=F>4?1:F,D=T.slice(F),F+=t[1].length),k&&this.rules.other.blankLine.test(I)&&(m+=I+`
`,n=n.substring(I.length+1),h=!0),!h){let X=this.rules.other.nextBulletRegex(F),he=this.rules.other.hrRegex(F),Z=this.rules.other.fencesBeginRegex(F),Q=this.rules.other.headingBeginRegex(F),oe=this.rules.other.htmlBeginRegex(F);for(;n;){let P=n.split(`
`,1)[0],$;if(I=P,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),$=I):$=I.replace(this.rules.other.tabCharGlobal,"    "),Z.test(I)||Q.test(I)||oe.test(I)||X.test(I)||he.test(I))break;if($.search(this.rules.other.nonSpaceChar)>=F||!I.trim())D+=`
`+$.slice(F);else{if(k||T.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Z.test(T)||Q.test(T)||he.test(T))break;D+=`
`+I}!k&&!I.trim()&&(k=!0),m+=P+`
`,n=n.substring(P.length+1),T=$.slice(F)}}a.loose||(c?a.loose=!0:this.rules.other.doubleBlankLine.test(m)&&(c=!0));let B=null,U;this.options.gfm&&(B=this.rules.other.listIsTask.exec(D),B&&(U=B[0]!=="[ ] ",D=D.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:m,task:!!B,checked:U,loose:!1,text:D,tokens:[]}),a.raw+=m}let f=a.items.at(-1);if(f)f.raw=f.raw.trimEnd(),f.text=f.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let h=0;h<a.items.length;h++)if(this.lexer.state.top=!1,a.items[h].tokens=this.lexer.blockTokens(a.items[h].text,[]),!a.loose){let m=a.items[h].tokens.filter(T=>T.type==="space"),D=m.length>0&&m.some(T=>this.rules.other.anyLine.test(T.raw));a.loose=D}if(a.loose)for(let h=0;h<a.items.length;h++)a.items[h].loose=!0;return a}}html(n){let t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){let t=this.rules.block.def.exec(n);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:s,title:a}}}table(n){let t=this.rules.block.table.exec(n);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=gf(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let c of s)this.rules.other.tableAlignRight.test(c)?u.align.push("right"):this.rules.other.tableAlignCenter.test(c)?u.align.push("center"):this.rules.other.tableAlignLeft.test(c)?u.align.push("left"):u.align.push(null);for(let c=0;c<r.length;c++)u.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:u.align[c]});for(let c of a)u.rows.push(gf(c,u.header.length).map((f,h)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:u.align[h]})));return u}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(n){let t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){let t=this.rules.inline.link.exec(n);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let u=pi(r.slice(0,-1),"\\");if((r.length-u.length)%2===0)return}else{let u=hy(t[2],"()");if(u===-2)return;if(u>-1){let c=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let u=this.rules.other.pedanticHrefTitle.exec(s);u&&(s=u[1],a=u[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),mf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let u=r[0].charAt(0);return{type:"text",raw:u,text:u}}return mf(r,a,r[0],this.lexer,this.rules)}}emStrong(n,t,r=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let a=[...s[0]].length-1,u,c,f=a,h=0,m=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,t=t.slice(-1*n.length+a);(s=m.exec(t))!=null;){if(u=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!u)continue;if(c=[...u].length,s[3]||s[4]){f+=c;continue}else if((s[5]||s[6])&&a%3&&!((a+c)%3)){h+=c;continue}if(f-=c,f>0)continue;c=Math.min(c,c+f+h);let D=[...s[0]][0].length,T=n.slice(0,a+s.index+D+c);if(Math.min(a,c)%2){let k=T.slice(1,-1);return{type:"em",raw:T,text:k,tokens:this.lexer.inlineTokens(k)}}let I=T.slice(2,-2);return{type:"strong",raw:T,text:I,tokens:this.lexer.inlineTokens(I)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){let t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){let t=this.rules.inline.autolink.exec(n);if(t){let r,s;return t[2]==="@"?(r=t[1],s="mailto:"+r):(r=t[1],s=r),{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let t=this.rules.inline.text.exec(n);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},jn=class Vo{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||gr,this.options.tokenizer=this.options.tokenizer||new Bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:dn,block:_s.normal,inline:fi.normal};this.options.pedantic?(r.block=_s.pedantic,r.inline=fi.pedantic):this.options.gfm&&(r.block=_s.gfm,this.options.breaks?r.inline=fi.breaks:r.inline=fi.gfm),this.tokenizer.rules=r}static get rules(){return{block:_s,inline:fi}}static lex(t,r){return new Vo(r).lex(t)}static lexInline(t,r){return new Vo(r).inlineTokens(t)}lex(t){t=t.replace(dn.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,r=[],s=!1){for(this.options.pedantic&&(t=t.replace(dn.tabCharGlobal,"    ").replace(dn.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(c=>(a=c.call({lexer:this},t,r))?(t=t.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let c=r.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:r.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):r.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},r.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),r.push(a);continue}let u=t;if(this.options.extensions?.startBlock){let c=1/0,f=t.slice(1),h;this.options.extensions.startBlock.forEach(m=>{h=m.call({lexer:this},f),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(u=t.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){let c=r.at(-1);s&&c?.type==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):r.push(a),s=u.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let c=r.at(-1);c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):r.push(a);continue}if(t){let c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let s=t,a=null;if(this.tokens.links){let f=Object.keys(this.tokens.links);if(f.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)f.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let u=!1,c="";for(;t;){u||(c=""),u=!1;let f;if(this.options.extensions?.inline?.some(m=>(f=m.call({lexer:this},t,r))?(t=t.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.escape(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.tag(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.link(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(f.raw.length);let m=r.at(-1);f.type==="text"&&m?.type==="text"?(m.raw+=f.raw,m.text+=f.text):r.push(f);continue}if(f=this.tokenizer.emStrong(t,s,c)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.codespan(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.br(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.del(t)){t=t.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.autolink(t)){t=t.substring(f.raw.length),r.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(t))){t=t.substring(f.raw.length),r.push(f);continue}let h=t;if(this.options.extensions?.startInline){let m=1/0,D=t.slice(1),T;this.options.extensions.startInline.forEach(I=>{T=I.call({lexer:this},D),typeof T=="number"&&T>=0&&(m=Math.min(m,T))}),m<1/0&&m>=0&&(h=t.substring(0,m+1))}if(f=this.tokenizer.inlineText(h)){t=t.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(c=f.raw.slice(-1)),u=!0;let m=r.at(-1);m?.type==="text"?(m.raw+=f.raw,m.text+=f.text):r.push(f);continue}if(t){let m="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return r}},Ps=class{options;parser;constructor(n){this.options=n||gr}space(n){return""}code({text:n,lang:t,escaped:r}){let s=(t||"").match(dn.notSpaceStart)?.[0],a=n.replace(dn.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ft(s)+'">'+(r?a:ft(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:ft(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){let t=n.ordered,r=n.start,s="";for(let c=0;c<n.items.length;c++){let f=n.items[c];s+=this.listitem(f)}let a=t?"ol":"ul",u=t&&r!==1?' start="'+r+'"':"";return"<"+a+u+`>
`+s+"</"+a+`>
`}listitem(n){let t="";if(n.task){let r=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+ft(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let a=0;a<n.header.length;a++)r+=this.tablecell(n.header[a]);t+=this.tablerow({text:r});let s="";for(let a=0;a<n.rows.length;a++){let u=n.rows[a];r="";for(let c=0;c<u.length;c++)r+=this.tablecell(u[c]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ft(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){let s=this.parser.parseInline(r),a=hf(n);if(a===null)return s;n=a;let u='<a href="'+n+'"';return t&&(u+=' title="'+ft(t)+'"'),u+=">"+s+"</a>",u}image({href:n,title:t,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let a=hf(n);if(a===null)return ft(r);n=a;let u=`<img src="${n}" alt="${r}"`;return t&&(u+=` title="${ft(t)}"`),u+=">",u}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ft(n.text)}},pu=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},tt=class Go{options;renderer;textRenderer;constructor(t){this.options=t||gr,this.options.renderer=this.options.renderer||new Ps,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new pu}static parse(t,r){return new Go(r).parse(t)}static parseInline(t,r){return new Go(r).parseInline(t)}parse(t,r=!0){let s="";for(let a=0;a<t.length;a++){let u=t[a];if(this.options.extensions?.renderers?.[u.type]){let f=u,h=this.options.extensions.renderers[f.type].call({parser:this},f);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){s+=h||"";continue}}let c=u;switch(c.type){case"space":{s+=this.renderer.space(c);continue}case"hr":{s+=this.renderer.hr(c);continue}case"heading":{s+=this.renderer.heading(c);continue}case"code":{s+=this.renderer.code(c);continue}case"table":{s+=this.renderer.table(c);continue}case"blockquote":{s+=this.renderer.blockquote(c);continue}case"list":{s+=this.renderer.list(c);continue}case"html":{s+=this.renderer.html(c);continue}case"def":{s+=this.renderer.def(c);continue}case"paragraph":{s+=this.renderer.paragraph(c);continue}case"text":{let f=c,h=this.renderer.text(f);for(;a+1<t.length&&t[a+1].type==="text";)f=t[++a],h+=`
`+this.renderer.text(f);r?s+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):s+=h;continue}default:{let f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}parseInline(t,r=this.renderer){let s="";for(let a=0;a<t.length;a++){let u=t[a];if(this.options.extensions?.renderers?.[u.type]){let f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=f||"";continue}}let c=u;switch(c.type){case"escape":{s+=r.text(c);break}case"html":{s+=r.html(c);break}case"link":{s+=r.link(c);break}case"image":{s+=r.image(c);break}case"strong":{s+=r.strong(c);break}case"em":{s+=r.em(c);break}case"codespan":{s+=r.codespan(c);break}case"br":{s+=r.br(c);break}case"del":{s+=r.del(c);break}case"text":{s+=r.text(c);break}default:{let f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}},di=class{options;block;constructor(n){this.options=n||gr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?jn.lex:jn.lexInline}provideParser(){return this.block?tt.parse:tt.parseInline}},my=class{defaults=iu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=tt;Renderer=Ps;TextRenderer=pu;Lexer=jn;Tokenizer=Bs;Hooks=di;constructor(...n){this.use(...n)}walkTokens(n,t){let r=[];for(let s of n)switch(r=r.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let u of a.header)r=r.concat(this.walkTokens(u.tokens,t));for(let u of a.rows)for(let c of u)r=r.concat(this.walkTokens(c.tokens,t));break}case"list":{let a=s;r=r.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(u=>{let c=a[u].flat(1/0);r=r.concat(this.walkTokens(c,t))}):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,t)))}}return r}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let u=t.renderers[a.name];u?t.renderers[a.name]=function(...c){let f=a.renderer.apply(this,c);return f===!1&&(f=u.apply(this,c)),f}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=t[a.level];u?u.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),r.renderer){let a=this.defaults.renderer||new Ps(this.defaults);for(let u in r.renderer){if(!(u in a))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let c=u,f=r.renderer[c],h=a[c];a[c]=(...m)=>{let D=f.apply(a,m);return D===!1&&(D=h.apply(a,m)),D||""}}s.renderer=a}if(r.tokenizer){let a=this.defaults.tokenizer||new Bs(this.defaults);for(let u in r.tokenizer){if(!(u in a))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let c=u,f=r.tokenizer[c],h=a[c];a[c]=(...m)=>{let D=f.apply(a,m);return D===!1&&(D=h.apply(a,m)),D}}s.tokenizer=a}if(r.hooks){let a=this.defaults.hooks||new di;for(let u in r.hooks){if(!(u in a))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let c=u,f=r.hooks[c],h=a[c];di.passThroughHooks.has(u)?a[c]=m=>{if(this.defaults.async&&di.passThroughHooksRespectAsync.has(u))return(async()=>{let T=await f.call(a,m);return h.call(a,T)})();let D=f.call(a,m);return h.call(a,D)}:a[c]=(...m)=>{if(this.defaults.async)return(async()=>{let T=await f.apply(a,m);return T===!1&&(T=await h.apply(a,m)),T})();let D=f.apply(a,m);return D===!1&&(D=h.apply(a,m)),D}}s.hooks=a}if(r.walkTokens){let a=this.defaults.walkTokens,u=r.walkTokens;s.walkTokens=function(c){let f=[];return f.push(u.call(this,c)),a&&(f=f.concat(a.call(this,c))),f}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return jn.lex(n,t??this.defaults)}parser(n,t){return tt.parse(n,t??this.defaults)}parseMarkdown(n){return(t,r)=>{let s={...r},a={...this.defaults,...s},u=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=n),a.async)return(async()=>{let c=a.hooks?await a.hooks.preprocess(t):t,f=await(a.hooks?await a.hooks.provideLexer():n?jn.lex:jn.lexInline)(c,a),h=a.hooks?await a.hooks.processAllTokens(f):f;a.walkTokens&&await Promise.all(this.walkTokens(h,a.walkTokens));let m=await(a.hooks?await a.hooks.provideParser():n?tt.parse:tt.parseInline)(h,a);return a.hooks?await a.hooks.postprocess(m):m})().catch(u);try{a.hooks&&(t=a.hooks.preprocess(t));let c=(a.hooks?a.hooks.provideLexer():n?jn.lex:jn.lexInline)(t,a);a.hooks&&(c=a.hooks.processAllTokens(c)),a.walkTokens&&this.walkTokens(c,a.walkTokens);let f=(a.hooks?a.hooks.provideParser():n?tt.parse:tt.parseInline)(c,a);return a.hooks&&(f=a.hooks.postprocess(f)),f}catch(c){return u(c)}}}onError(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+ft(r.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(r);throw r}}},fr=new my;function _e(n,t){return fr.parse(n,t)}_e.options=_e.setOptions=function(n){return fr.setOptions(n),_e.defaults=fr.defaults,sp(_e.defaults),_e};_e.getDefaults=iu;_e.defaults=gr;_e.use=function(...n){return fr.use(...n),_e.defaults=fr.defaults,sp(_e.defaults),_e};_e.walkTokens=function(n,t){return fr.walkTokens(n,t)};_e.parseInline=fr.parseInline;_e.Parser=tt;_e.parser=tt.parse;_e.Renderer=Ps;_e.TextRenderer=pu;_e.Lexer=jn;_e.lexer=jn.lex;_e.Tokenizer=Bs;_e.Hooks=di;_e.parse=_e;_e.options;_e.setOptions;_e.use;_e.walkTokens;_e.parseInline;tt.parse;jn.lex;function Dy(n){return new jn().lex(n)}const vy=()=>({heading:hS,blockquote:sS,list:nS,list_item:rS,br:oS,code:ZT,codespan:eS,table:OS,html:DS,paragraph:AS,link:SS,text:FS,def:fS,del:lS,em:dS,hr:mS,strong:_S,image:ES,space:cf,escape:cf}),Ey=()=>({baseUrl:"/",slugger:new ip});function Ty(){const n=console.warn;console.warn=t=>{t.includes("unknown prop")||t.includes("unexpected slot")||n(t)},RT(()=>{console.warn=n})}function I_(n,t){je(t,!1),Ty();let r=Re(t,"source",8),s=Re(t,"options",24,()=>({})),a=Re(t,"renderers",24,()=>({})),u=Rr(),c=Rr(),f=Rr();tu(()=>(ye(r()),ye(a()),ye(s())),()=>{vi(u,Dy(r())),vi(c,{...vy(),...a()}),vi(f,{...Ey(),...s()})}),ru(),Dt(),Rs(n,{get tokens(){return tn(u)},get renderers(){return tn(c)},get options(){return tn(f)}}),qe()}const xi={joinUrlPaths:Fi,isRelative:Ni,generatePathSegment:rp};var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var yy=hi.exports,Df;function Ay(){return Df||(Df=1,(function(n,t){(function(){var r,s="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",m=500,D="__lodash_placeholder__",T=1,I=2,k=4,F=1,B=2,U=1,X=2,he=4,Z=8,Q=16,oe=32,P=64,$=128,ue=256,C=512,j=30,Oe="...",Pe=800,wn=16,Lt=1,On=2,Bt=3,xn=1/0,Sn=9007199254740991,Dr=17976931348623157e292,Jt=NaN,kn=4294967295,N=kn-1,W=kn>>>1,V=[["ary",$],["bind",U],["bindKey",X],["curry",Z],["curryRight",Q],["flip",C],["partial",oe],["partialRight",P],["rearg",ue]],q="[object Arguments]",Ee="[object Array]",Ue="[object AsyncFunction]",Te="[object Boolean]",Rn="[object Date]",Gr="[object DOMException]",Pt="[object Error]",sn="[object Function]",_u="[object GeneratorFunction]",Qn="[object Map]",jr="[object Number]",dd="[object Null]",Et="[object Object]",Fu="[object Promise]",hd="[object Proxy]",qr="[object RegExp]",Jn="[object Set]",Yr="[object String]",Li="[object Symbol]",gd="[object Undefined]",Wr="[object WeakMap]",md="[object WeakSet]",Hr="[object ArrayBuffer]",vr="[object DataView]",ia="[object Float32Array]",sa="[object Float64Array]",aa="[object Int8Array]",oa="[object Int16Array]",ua="[object Int32Array]",la="[object Uint8Array]",ca="[object Uint8ClampedArray]",fa="[object Uint16Array]",pa="[object Uint32Array]",Dd=/\b__p \+= '';/g,vd=/\b(__p \+=) '' \+/g,Ed=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Nu=/&(?:amp|lt|gt|quot|#39);/g,bu=/[&<>"']/g,Td=RegExp(Nu.source),Sd=RegExp(bu.source),yd=/<%-([\s\S]+?)%>/g,Ad=/<%([\s\S]+?)%>/g,Cu=/<%=([\s\S]+?)%>/g,Id=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_d=/^\w*$/,Fd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,da=/[\\^$.*+?()[\]{}|]/g,Nd=RegExp(da.source),ha=/^\s+/,bd=/\s/,Cd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wd=/\{\n\/\* \[wrapped with (.+)\] \*/,Od=/,? & /,xd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kd=/[()=,{}\[\]\/\s]/,Rd=/\\(\\)?/g,Ld=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,wu=/\w*$/,Bd=/^[-+]0x[0-9a-f]+$/i,Pd=/^0b[01]+$/i,Ud=/^\[object .+?Constructor\]$/,Md=/^0o[0-7]+$/i,$d=/^(?:0|[1-9]\d*)$/,Vd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Bi=/($^)/,Gd=/['\n\r\u2028\u2029\\]/g,Pi="\\ud800-\\udfff",jd="\\u0300-\\u036f",qd="\\ufe20-\\ufe2f",Yd="\\u20d0-\\u20ff",Ou=jd+qd+Yd,xu="\\u2700-\\u27bf",ku="a-z\\xdf-\\xf6\\xf8-\\xff",Wd="\\xac\\xb1\\xd7\\xf7",Hd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zd="\\u2000-\\u206f",Qd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ru="A-Z\\xc0-\\xd6\\xd8-\\xde",Lu="\\ufe0e\\ufe0f",Bu=Wd+Hd+zd+Qd,ga="['’]",Jd="["+Pi+"]",Pu="["+Bu+"]",Ui="["+Ou+"]",Uu="\\d+",Xd="["+xu+"]",Mu="["+ku+"]",$u="[^"+Pi+Bu+Uu+xu+ku+Ru+"]",ma="\\ud83c[\\udffb-\\udfff]",Zd="(?:"+Ui+"|"+ma+")",Vu="[^"+Pi+"]",Da="(?:\\ud83c[\\udde6-\\uddff]){2}",va="[\\ud800-\\udbff][\\udc00-\\udfff]",Er="["+Ru+"]",Gu="\\u200d",ju="(?:"+Mu+"|"+$u+")",Kd="(?:"+Er+"|"+$u+")",qu="(?:"+ga+"(?:d|ll|m|re|s|t|ve))?",Yu="(?:"+ga+"(?:D|LL|M|RE|S|T|VE))?",Wu=Zd+"?",Hu="["+Lu+"]?",eh="(?:"+Gu+"(?:"+[Vu,Da,va].join("|")+")"+Hu+Wu+")*",nh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",th="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zu=Hu+Wu+eh,rh="(?:"+[Xd,Da,va].join("|")+")"+zu,ih="(?:"+[Vu+Ui+"?",Ui,Da,va,Jd].join("|")+")",sh=RegExp(ga,"g"),ah=RegExp(Ui,"g"),Ea=RegExp(ma+"(?="+ma+")|"+ih+zu,"g"),oh=RegExp([Er+"?"+Mu+"+"+qu+"(?="+[Pu,Er,"$"].join("|")+")",Kd+"+"+Yu+"(?="+[Pu,Er+ju,"$"].join("|")+")",Er+"?"+ju+"+"+qu,Er+"+"+Yu,th,nh,Uu,rh].join("|"),"g"),uh=RegExp("["+Gu+Pi+Ou+Lu+"]"),lh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ch=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],fh=-1,xe={};xe[ia]=xe[sa]=xe[aa]=xe[oa]=xe[ua]=xe[la]=xe[ca]=xe[fa]=xe[pa]=!0,xe[q]=xe[Ee]=xe[Hr]=xe[Te]=xe[vr]=xe[Rn]=xe[Pt]=xe[sn]=xe[Qn]=xe[jr]=xe[Et]=xe[qr]=xe[Jn]=xe[Yr]=xe[Wr]=!1;var Ce={};Ce[q]=Ce[Ee]=Ce[Hr]=Ce[vr]=Ce[Te]=Ce[Rn]=Ce[ia]=Ce[sa]=Ce[aa]=Ce[oa]=Ce[ua]=Ce[Qn]=Ce[jr]=Ce[Et]=Ce[qr]=Ce[Jn]=Ce[Yr]=Ce[Li]=Ce[la]=Ce[ca]=Ce[fa]=Ce[pa]=!0,Ce[Pt]=Ce[sn]=Ce[Wr]=!1;var ph={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mh=parseFloat,Dh=parseInt,Qu=typeof Fs=="object"&&Fs&&Fs.Object===Object&&Fs,vh=typeof self=="object"&&self&&self.Object===Object&&self,en=Qu||vh||Function("return this")(),Ta=t&&!t.nodeType&&t,Xt=Ta&&!0&&n&&!n.nodeType&&n,Ju=Xt&&Xt.exports===Ta,Sa=Ju&&Qu.process,Ln=(function(){try{var y=Xt&&Xt.require&&Xt.require("util").types;return y||Sa&&Sa.binding&&Sa.binding("util")}catch{}})(),Xu=Ln&&Ln.isArrayBuffer,Zu=Ln&&Ln.isDate,Ku=Ln&&Ln.isMap,el=Ln&&Ln.isRegExp,nl=Ln&&Ln.isSet,tl=Ln&&Ln.isTypedArray;function yn(y,b,_){switch(_.length){case 0:return y.call(b);case 1:return y.call(b,_[0]);case 2:return y.call(b,_[0],_[1]);case 3:return y.call(b,_[0],_[1],_[2])}return y.apply(b,_)}function Eh(y,b,_,Y){for(var te=-1,ve=y==null?0:y.length;++te<ve;){var ze=y[te];b(Y,ze,_(ze),y)}return Y}function Bn(y,b){for(var _=-1,Y=y==null?0:y.length;++_<Y&&b(y[_],_,y)!==!1;);return y}function Th(y,b){for(var _=y==null?0:y.length;_--&&b(y[_],_,y)!==!1;);return y}function rl(y,b){for(var _=-1,Y=y==null?0:y.length;++_<Y;)if(!b(y[_],_,y))return!1;return!0}function Ut(y,b){for(var _=-1,Y=y==null?0:y.length,te=0,ve=[];++_<Y;){var ze=y[_];b(ze,_,y)&&(ve[te++]=ze)}return ve}function Mi(y,b){var _=y==null?0:y.length;return!!_&&Tr(y,b,0)>-1}function ya(y,b,_){for(var Y=-1,te=y==null?0:y.length;++Y<te;)if(_(b,y[Y]))return!0;return!1}function ke(y,b){for(var _=-1,Y=y==null?0:y.length,te=Array(Y);++_<Y;)te[_]=b(y[_],_,y);return te}function Mt(y,b){for(var _=-1,Y=b.length,te=y.length;++_<Y;)y[te+_]=b[_];return y}function Aa(y,b,_,Y){var te=-1,ve=y==null?0:y.length;for(Y&&ve&&(_=y[++te]);++te<ve;)_=b(_,y[te],te,y);return _}function Sh(y,b,_,Y){var te=y==null?0:y.length;for(Y&&te&&(_=y[--te]);te--;)_=b(_,y[te],te,y);return _}function Ia(y,b){for(var _=-1,Y=y==null?0:y.length;++_<Y;)if(b(y[_],_,y))return!0;return!1}var yh=_a("length");function Ah(y){return y.split("")}function Ih(y){return y.match(xd)||[]}function il(y,b,_){var Y;return _(y,function(te,ve,ze){if(b(te,ve,ze))return Y=ve,!1}),Y}function $i(y,b,_,Y){for(var te=y.length,ve=_+(Y?1:-1);Y?ve--:++ve<te;)if(b(y[ve],ve,y))return ve;return-1}function Tr(y,b,_){return b===b?Bh(y,b,_):$i(y,sl,_)}function _h(y,b,_,Y){for(var te=_-1,ve=y.length;++te<ve;)if(Y(y[te],b))return te;return-1}function sl(y){return y!==y}function al(y,b){var _=y==null?0:y.length;return _?Na(y,b)/_:Jt}function _a(y){return function(b){return b==null?r:b[y]}}function Fa(y){return function(b){return y==null?r:y[b]}}function ol(y,b,_,Y,te){return te(y,function(ve,ze,Fe){_=Y?(Y=!1,ve):b(_,ve,ze,Fe)}),_}function Fh(y,b){var _=y.length;for(y.sort(b);_--;)y[_]=y[_].value;return y}function Na(y,b){for(var _,Y=-1,te=y.length;++Y<te;){var ve=b(y[Y]);ve!==r&&(_=_===r?ve:_+ve)}return _}function ba(y,b){for(var _=-1,Y=Array(y);++_<y;)Y[_]=b(_);return Y}function Nh(y,b){return ke(b,function(_){return[_,y[_]]})}function ul(y){return y&&y.slice(0,pl(y)+1).replace(ha,"")}function An(y){return function(b){return y(b)}}function Ca(y,b){return ke(b,function(_){return y[_]})}function zr(y,b){return y.has(b)}function ll(y,b){for(var _=-1,Y=y.length;++_<Y&&Tr(b,y[_],0)>-1;);return _}function cl(y,b){for(var _=y.length;_--&&Tr(b,y[_],0)>-1;);return _}function bh(y,b){for(var _=y.length,Y=0;_--;)y[_]===b&&++Y;return Y}var Ch=Fa(ph),wh=Fa(dh);function Oh(y){return"\\"+gh[y]}function xh(y,b){return y==null?r:y[b]}function Sr(y){return uh.test(y)}function kh(y){return lh.test(y)}function Rh(y){for(var b,_=[];!(b=y.next()).done;)_.push(b.value);return _}function wa(y){var b=-1,_=Array(y.size);return y.forEach(function(Y,te){_[++b]=[te,Y]}),_}function fl(y,b){return function(_){return y(b(_))}}function $t(y,b){for(var _=-1,Y=y.length,te=0,ve=[];++_<Y;){var ze=y[_];(ze===b||ze===D)&&(y[_]=D,ve[te++]=_)}return ve}function Vi(y){var b=-1,_=Array(y.size);return y.forEach(function(Y){_[++b]=Y}),_}function Lh(y){var b=-1,_=Array(y.size);return y.forEach(function(Y){_[++b]=[Y,Y]}),_}function Bh(y,b,_){for(var Y=_-1,te=y.length;++Y<te;)if(y[Y]===b)return Y;return-1}function Ph(y,b,_){for(var Y=_+1;Y--;)if(y[Y]===b)return Y;return Y}function yr(y){return Sr(y)?Mh(y):yh(y)}function Xn(y){return Sr(y)?$h(y):Ah(y)}function pl(y){for(var b=y.length;b--&&bd.test(y.charAt(b)););return b}var Uh=Fa(hh);function Mh(y){for(var b=Ea.lastIndex=0;Ea.test(y);)++b;return b}function $h(y){return y.match(Ea)||[]}function Vh(y){return y.match(oh)||[]}var Gh=(function y(b){b=b==null?en:Ar.defaults(en.Object(),b,Ar.pick(en,ch));var _=b.Array,Y=b.Date,te=b.Error,ve=b.Function,ze=b.Math,Fe=b.Object,Oa=b.RegExp,jh=b.String,Pn=b.TypeError,Gi=_.prototype,qh=ve.prototype,Ir=Fe.prototype,ji=b["__core-js_shared__"],qi=qh.toString,Ie=Ir.hasOwnProperty,Yh=0,dl=(function(){var e=/[^.]+$/.exec(ji&&ji.keys&&ji.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})(),Yi=Ir.toString,Wh=qi.call(Fe),Hh=en._,zh=Oa("^"+qi.call(Ie).replace(da,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wi=Ju?b.Buffer:r,Vt=b.Symbol,Hi=b.Uint8Array,hl=Wi?Wi.allocUnsafe:r,zi=fl(Fe.getPrototypeOf,Fe),gl=Fe.create,ml=Ir.propertyIsEnumerable,Qi=Gi.splice,Dl=Vt?Vt.isConcatSpreadable:r,Qr=Vt?Vt.iterator:r,Zt=Vt?Vt.toStringTag:r,Ji=(function(){try{var e=rr(Fe,"defineProperty");return e({},"",{}),e}catch{}})(),Qh=b.clearTimeout!==en.clearTimeout&&b.clearTimeout,Jh=Y&&Y.now!==en.Date.now&&Y.now,Xh=b.setTimeout!==en.setTimeout&&b.setTimeout,Xi=ze.ceil,Zi=ze.floor,xa=Fe.getOwnPropertySymbols,Zh=Wi?Wi.isBuffer:r,vl=b.isFinite,Kh=Gi.join,eg=fl(Fe.keys,Fe),Qe=ze.max,an=ze.min,ng=Y.now,tg=b.parseInt,El=ze.random,rg=Gi.reverse,ka=rr(b,"DataView"),Jr=rr(b,"Map"),Ra=rr(b,"Promise"),_r=rr(b,"Set"),Xr=rr(b,"WeakMap"),Zr=rr(Fe,"create"),Ki=Xr&&new Xr,Fr={},ig=ir(ka),sg=ir(Jr),ag=ir(Ra),og=ir(_r),ug=ir(Xr),es=Vt?Vt.prototype:r,Kr=es?es.valueOf:r,Tl=es?es.toString:r;function d(e){if(Be(e)&&!re(e)&&!(e instanceof pe)){if(e instanceof Un)return e;if(Ie.call(e,"__wrapped__"))return Sc(e)}return new Un(e)}var Nr=(function(){function e(){}return function(i){if(!Le(i))return{};if(gl)return gl(i);e.prototype=i;var o=new e;return e.prototype=r,o}})();function ns(){}function Un(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}d.templateSettings={escape:yd,evaluate:Ad,interpolate:Cu,variable:"",imports:{_:d}},d.prototype=ns.prototype,d.prototype.constructor=d,Un.prototype=Nr(ns.prototype),Un.prototype.constructor=Un;function pe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=kn,this.__views__=[]}function lg(){var e=new pe(this.__wrapped__);return e.__actions__=mn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=mn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=mn(this.__views__),e}function cg(){if(this.__filtered__){var e=new pe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function fg(){var e=this.__wrapped__.value(),i=this.__dir__,o=re(e),l=i<0,p=o?e.length:0,g=Am(0,p,this.__views__),v=g.start,E=g.end,A=E-v,w=l?E:v-1,O=this.__iteratees__,R=O.length,M=0,z=an(A,this.__takeCount__);if(!o||!l&&p==A&&z==A)return ql(e,this.__actions__);var ee=[];e:for(;A--&&M<z;){w+=i;for(var ae=-1,ne=e[w];++ae<R;){var fe=O[ae],ge=fe.iteratee,Fn=fe.type,cn=ge(ne);if(Fn==On)ne=cn;else if(!cn){if(Fn==Lt)continue e;break e}}ee[M++]=ne}return ee}pe.prototype=Nr(ns.prototype),pe.prototype.constructor=pe;function Kt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function pg(){this.__data__=Zr?Zr(null):{},this.size=0}function dg(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function hg(e){var i=this.__data__;if(Zr){var o=i[e];return o===h?r:o}return Ie.call(i,e)?i[e]:r}function gg(e){var i=this.__data__;return Zr?i[e]!==r:Ie.call(i,e)}function mg(e,i){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Zr&&i===r?h:i,this}Kt.prototype.clear=pg,Kt.prototype.delete=dg,Kt.prototype.get=hg,Kt.prototype.has=gg,Kt.prototype.set=mg;function Tt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function Dg(){this.__data__=[],this.size=0}function vg(e){var i=this.__data__,o=ts(i,e);if(o<0)return!1;var l=i.length-1;return o==l?i.pop():Qi.call(i,o,1),--this.size,!0}function Eg(e){var i=this.__data__,o=ts(i,e);return o<0?r:i[o][1]}function Tg(e){return ts(this.__data__,e)>-1}function Sg(e,i){var o=this.__data__,l=ts(o,e);return l<0?(++this.size,o.push([e,i])):o[l][1]=i,this}Tt.prototype.clear=Dg,Tt.prototype.delete=vg,Tt.prototype.get=Eg,Tt.prototype.has=Tg,Tt.prototype.set=Sg;function St(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function yg(){this.size=0,this.__data__={hash:new Kt,map:new(Jr||Tt),string:new Kt}}function Ag(e){var i=hs(this,e).delete(e);return this.size-=i?1:0,i}function Ig(e){return hs(this,e).get(e)}function _g(e){return hs(this,e).has(e)}function Fg(e,i){var o=hs(this,e),l=o.size;return o.set(e,i),this.size+=o.size==l?0:1,this}St.prototype.clear=yg,St.prototype.delete=Ag,St.prototype.get=Ig,St.prototype.has=_g,St.prototype.set=Fg;function er(e){var i=-1,o=e==null?0:e.length;for(this.__data__=new St;++i<o;)this.add(e[i])}function Ng(e){return this.__data__.set(e,h),this}function bg(e){return this.__data__.has(e)}er.prototype.add=er.prototype.push=Ng,er.prototype.has=bg;function Zn(e){var i=this.__data__=new Tt(e);this.size=i.size}function Cg(){this.__data__=new Tt,this.size=0}function wg(e){var i=this.__data__,o=i.delete(e);return this.size=i.size,o}function Og(e){return this.__data__.get(e)}function xg(e){return this.__data__.has(e)}function kg(e,i){var o=this.__data__;if(o instanceof Tt){var l=o.__data__;if(!Jr||l.length<a-1)return l.push([e,i]),this.size=++o.size,this;o=this.__data__=new St(l)}return o.set(e,i),this.size=o.size,this}Zn.prototype.clear=Cg,Zn.prototype.delete=wg,Zn.prototype.get=Og,Zn.prototype.has=xg,Zn.prototype.set=kg;function Sl(e,i){var o=re(e),l=!o&&sr(e),p=!o&&!l&&Wt(e),g=!o&&!l&&!p&&Or(e),v=o||l||p||g,E=v?ba(e.length,jh):[],A=E.length;for(var w in e)(i||Ie.call(e,w))&&!(v&&(w=="length"||p&&(w=="offset"||w=="parent")||g&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||_t(w,A)))&&E.push(w);return E}function yl(e){var i=e.length;return i?e[Ya(0,i-1)]:r}function Rg(e,i){return gs(mn(e),nr(i,0,e.length))}function Lg(e){return gs(mn(e))}function La(e,i,o){(o!==r&&!Kn(e[i],o)||o===r&&!(i in e))&&yt(e,i,o)}function ei(e,i,o){var l=e[i];(!(Ie.call(e,i)&&Kn(l,o))||o===r&&!(i in e))&&yt(e,i,o)}function ts(e,i){for(var o=e.length;o--;)if(Kn(e[o][0],i))return o;return-1}function Bg(e,i,o,l){return Gt(e,function(p,g,v){i(l,p,o(p),v)}),l}function Al(e,i){return e&&lt(i,Je(i),e)}function Pg(e,i){return e&&lt(i,vn(i),e)}function yt(e,i,o){i=="__proto__"&&Ji?Ji(e,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[i]=o}function Ba(e,i){for(var o=-1,l=i.length,p=_(l),g=e==null;++o<l;)p[o]=g?r:Do(e,i[o]);return p}function nr(e,i,o){return e===e&&(o!==r&&(e=e<=o?e:o),i!==r&&(e=e>=i?e:i)),e}function Mn(e,i,o,l,p,g){var v,E=i&T,A=i&I,w=i&k;if(o&&(v=p?o(e,l,p,g):o(e)),v!==r)return v;if(!Le(e))return e;var O=re(e);if(O){if(v=_m(e),!E)return mn(e,v)}else{var R=on(e),M=R==sn||R==_u;if(Wt(e))return Hl(e,E);if(R==Et||R==q||M&&!p){if(v=A||M?{}:pc(e),!E)return A?hm(e,Pg(v,e)):dm(e,Al(v,e))}else{if(!Ce[R])return p?e:{};v=Fm(e,R,E)}}g||(g=new Zn);var z=g.get(e);if(z)return z;g.set(e,v),Vc(e)?e.forEach(function(ne){v.add(Mn(ne,i,o,ne,e,g))}):Mc(e)&&e.forEach(function(ne,fe){v.set(fe,Mn(ne,i,o,fe,e,g))});var ee=w?A?to:no:A?vn:Je,ae=O?r:ee(e);return Bn(ae||e,function(ne,fe){ae&&(fe=ne,ne=e[fe]),ei(v,fe,Mn(ne,i,o,fe,e,g))}),v}function Ug(e){var i=Je(e);return function(o){return Il(o,e,i)}}function Il(e,i,o){var l=o.length;if(e==null)return!l;for(e=Fe(e);l--;){var p=o[l],g=i[p],v=e[p];if(v===r&&!(p in e)||!g(v))return!1}return!0}function _l(e,i,o){if(typeof e!="function")throw new Pn(c);return oi(function(){e.apply(r,o)},i)}function ni(e,i,o,l){var p=-1,g=Mi,v=!0,E=e.length,A=[],w=i.length;if(!E)return A;o&&(i=ke(i,An(o))),l?(g=ya,v=!1):i.length>=a&&(g=zr,v=!1,i=new er(i));e:for(;++p<E;){var O=e[p],R=o==null?O:o(O);if(O=l||O!==0?O:0,v&&R===R){for(var M=w;M--;)if(i[M]===R)continue e;A.push(O)}else g(i,R,l)||A.push(O)}return A}var Gt=Zl(ut),Fl=Zl(Ua,!0);function Mg(e,i){var o=!0;return Gt(e,function(l,p,g){return o=!!i(l,p,g),o}),o}function rs(e,i,o){for(var l=-1,p=e.length;++l<p;){var g=e[l],v=i(g);if(v!=null&&(E===r?v===v&&!_n(v):o(v,E)))var E=v,A=g}return A}function $g(e,i,o,l){var p=e.length;for(o=se(o),o<0&&(o=-o>p?0:p+o),l=l===r||l>p?p:se(l),l<0&&(l+=p),l=o>l?0:jc(l);o<l;)e[o++]=i;return e}function Nl(e,i){var o=[];return Gt(e,function(l,p,g){i(l,p,g)&&o.push(l)}),o}function nn(e,i,o,l,p){var g=-1,v=e.length;for(o||(o=bm),p||(p=[]);++g<v;){var E=e[g];i>0&&o(E)?i>1?nn(E,i-1,o,l,p):Mt(p,E):l||(p[p.length]=E)}return p}var Pa=Kl(),bl=Kl(!0);function ut(e,i){return e&&Pa(e,i,Je)}function Ua(e,i){return e&&bl(e,i,Je)}function is(e,i){return Ut(i,function(o){return Ft(e[o])})}function tr(e,i){i=qt(i,e);for(var o=0,l=i.length;e!=null&&o<l;)e=e[ct(i[o++])];return o&&o==l?e:r}function Cl(e,i,o){var l=i(e);return re(e)?l:Mt(l,o(e))}function un(e){return e==null?e===r?gd:dd:Zt&&Zt in Fe(e)?ym(e):Lm(e)}function Ma(e,i){return e>i}function Vg(e,i){return e!=null&&Ie.call(e,i)}function Gg(e,i){return e!=null&&i in Fe(e)}function jg(e,i,o){return e>=an(i,o)&&e<Qe(i,o)}function $a(e,i,o){for(var l=o?ya:Mi,p=e[0].length,g=e.length,v=g,E=_(g),A=1/0,w=[];v--;){var O=e[v];v&&i&&(O=ke(O,An(i))),A=an(O.length,A),E[v]=!o&&(i||p>=120&&O.length>=120)?new er(v&&O):r}O=e[0];var R=-1,M=E[0];e:for(;++R<p&&w.length<A;){var z=O[R],ee=i?i(z):z;if(z=o||z!==0?z:0,!(M?zr(M,ee):l(w,ee,o))){for(v=g;--v;){var ae=E[v];if(!(ae?zr(ae,ee):l(e[v],ee,o)))continue e}M&&M.push(ee),w.push(z)}}return w}function qg(e,i,o,l){return ut(e,function(p,g,v){i(l,o(p),g,v)}),l}function ti(e,i,o){i=qt(i,e),e=mc(e,i);var l=e==null?e:e[ct(Vn(i))];return l==null?r:yn(l,e,o)}function wl(e){return Be(e)&&un(e)==q}function Yg(e){return Be(e)&&un(e)==Hr}function Wg(e){return Be(e)&&un(e)==Rn}function ri(e,i,o,l,p){return e===i?!0:e==null||i==null||!Be(e)&&!Be(i)?e!==e&&i!==i:Hg(e,i,o,l,ri,p)}function Hg(e,i,o,l,p,g){var v=re(e),E=re(i),A=v?Ee:on(e),w=E?Ee:on(i);A=A==q?Et:A,w=w==q?Et:w;var O=A==Et,R=w==Et,M=A==w;if(M&&Wt(e)){if(!Wt(i))return!1;v=!0,O=!1}if(M&&!O)return g||(g=new Zn),v||Or(e)?lc(e,i,o,l,p,g):Tm(e,i,A,o,l,p,g);if(!(o&F)){var z=O&&Ie.call(e,"__wrapped__"),ee=R&&Ie.call(i,"__wrapped__");if(z||ee){var ae=z?e.value():e,ne=ee?i.value():i;return g||(g=new Zn),p(ae,ne,o,l,g)}}return M?(g||(g=new Zn),Sm(e,i,o,l,p,g)):!1}function zg(e){return Be(e)&&on(e)==Qn}function Va(e,i,o,l){var p=o.length,g=p,v=!l;if(e==null)return!g;for(e=Fe(e);p--;){var E=o[p];if(v&&E[2]?E[1]!==e[E[0]]:!(E[0]in e))return!1}for(;++p<g;){E=o[p];var A=E[0],w=e[A],O=E[1];if(v&&E[2]){if(w===r&&!(A in e))return!1}else{var R=new Zn;if(l)var M=l(w,O,A,e,i,R);if(!(M===r?ri(O,w,F|B,l,R):M))return!1}}return!0}function Ol(e){if(!Le(e)||wm(e))return!1;var i=Ft(e)?zh:Ud;return i.test(ir(e))}function Qg(e){return Be(e)&&un(e)==qr}function Jg(e){return Be(e)&&on(e)==Jn}function Xg(e){return Be(e)&&Ss(e.length)&&!!xe[un(e)]}function xl(e){return typeof e=="function"?e:e==null?En:typeof e=="object"?re(e)?Ll(e[0],e[1]):Rl(e):ef(e)}function Ga(e){if(!ai(e))return eg(e);var i=[];for(var o in Fe(e))Ie.call(e,o)&&o!="constructor"&&i.push(o);return i}function Zg(e){if(!Le(e))return Rm(e);var i=ai(e),o=[];for(var l in e)l=="constructor"&&(i||!Ie.call(e,l))||o.push(l);return o}function ja(e,i){return e<i}function kl(e,i){var o=-1,l=Dn(e)?_(e.length):[];return Gt(e,function(p,g,v){l[++o]=i(p,g,v)}),l}function Rl(e){var i=io(e);return i.length==1&&i[0][2]?hc(i[0][0],i[0][1]):function(o){return o===e||Va(o,e,i)}}function Ll(e,i){return ao(e)&&dc(i)?hc(ct(e),i):function(o){var l=Do(o,e);return l===r&&l===i?vo(o,e):ri(i,l,F|B)}}function ss(e,i,o,l,p){e!==i&&Pa(i,function(g,v){if(p||(p=new Zn),Le(g))Kg(e,i,v,o,ss,l,p);else{var E=l?l(uo(e,v),g,v+"",e,i,p):r;E===r&&(E=g),La(e,v,E)}},vn)}function Kg(e,i,o,l,p,g,v){var E=uo(e,o),A=uo(i,o),w=v.get(A);if(w){La(e,o,w);return}var O=g?g(E,A,o+"",e,i,v):r,R=O===r;if(R){var M=re(A),z=!M&&Wt(A),ee=!M&&!z&&Or(A);O=A,M||z||ee?re(E)?O=E:Me(E)?O=mn(E):z?(R=!1,O=Hl(A,!0)):ee?(R=!1,O=zl(A,!0)):O=[]:ui(A)||sr(A)?(O=E,sr(E)?O=qc(E):(!Le(E)||Ft(E))&&(O=pc(A))):R=!1}R&&(v.set(A,O),p(O,A,l,g,v),v.delete(A)),La(e,o,O)}function Bl(e,i){var o=e.length;if(o)return i+=i<0?o:0,_t(i,o)?e[i]:r}function Pl(e,i,o){i.length?i=ke(i,function(g){return re(g)?function(v){return tr(v,g.length===1?g[0]:g)}:g}):i=[En];var l=-1;i=ke(i,An(K()));var p=kl(e,function(g,v,E){var A=ke(i,function(w){return w(g)});return{criteria:A,index:++l,value:g}});return Fh(p,function(g,v){return pm(g,v,o)})}function em(e,i){return Ul(e,i,function(o,l){return vo(e,l)})}function Ul(e,i,o){for(var l=-1,p=i.length,g={};++l<p;){var v=i[l],E=tr(e,v);o(E,v)&&ii(g,qt(v,e),E)}return g}function nm(e){return function(i){return tr(i,e)}}function qa(e,i,o,l){var p=l?_h:Tr,g=-1,v=i.length,E=e;for(e===i&&(i=mn(i)),o&&(E=ke(e,An(o)));++g<v;)for(var A=0,w=i[g],O=o?o(w):w;(A=p(E,O,A,l))>-1;)E!==e&&Qi.call(E,A,1),Qi.call(e,A,1);return e}function Ml(e,i){for(var o=e?i.length:0,l=o-1;o--;){var p=i[o];if(o==l||p!==g){var g=p;_t(p)?Qi.call(e,p,1):za(e,p)}}return e}function Ya(e,i){return e+Zi(El()*(i-e+1))}function tm(e,i,o,l){for(var p=-1,g=Qe(Xi((i-e)/(o||1)),0),v=_(g);g--;)v[l?g:++p]=e,e+=o;return v}function Wa(e,i){var o="";if(!e||i<1||i>Sn)return o;do i%2&&(o+=e),i=Zi(i/2),i&&(e+=e);while(i);return o}function le(e,i){return lo(gc(e,i,En),e+"")}function rm(e){return yl(xr(e))}function im(e,i){var o=xr(e);return gs(o,nr(i,0,o.length))}function ii(e,i,o,l){if(!Le(e))return e;i=qt(i,e);for(var p=-1,g=i.length,v=g-1,E=e;E!=null&&++p<g;){var A=ct(i[p]),w=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(p!=v){var O=E[A];w=l?l(O,A,E):r,w===r&&(w=Le(O)?O:_t(i[p+1])?[]:{})}ei(E,A,w),E=E[A]}return e}var $l=Ki?function(e,i){return Ki.set(e,i),e}:En,sm=Ji?function(e,i){return Ji(e,"toString",{configurable:!0,enumerable:!1,value:To(i),writable:!0})}:En;function am(e){return gs(xr(e))}function $n(e,i,o){var l=-1,p=e.length;i<0&&(i=-i>p?0:p+i),o=o>p?p:o,o<0&&(o+=p),p=i>o?0:o-i>>>0,i>>>=0;for(var g=_(p);++l<p;)g[l]=e[l+i];return g}function om(e,i){var o;return Gt(e,function(l,p,g){return o=i(l,p,g),!o}),!!o}function as(e,i,o){var l=0,p=e==null?l:e.length;if(typeof i=="number"&&i===i&&p<=W){for(;l<p;){var g=l+p>>>1,v=e[g];v!==null&&!_n(v)&&(o?v<=i:v<i)?l=g+1:p=g}return p}return Ha(e,i,En,o)}function Ha(e,i,o,l){var p=0,g=e==null?0:e.length;if(g===0)return 0;i=o(i);for(var v=i!==i,E=i===null,A=_n(i),w=i===r;p<g;){var O=Zi((p+g)/2),R=o(e[O]),M=R!==r,z=R===null,ee=R===R,ae=_n(R);if(v)var ne=l||ee;else w?ne=ee&&(l||M):E?ne=ee&&M&&(l||!z):A?ne=ee&&M&&!z&&(l||!ae):z||ae?ne=!1:ne=l?R<=i:R<i;ne?p=O+1:g=O}return an(g,N)}function Vl(e,i){for(var o=-1,l=e.length,p=0,g=[];++o<l;){var v=e[o],E=i?i(v):v;if(!o||!Kn(E,A)){var A=E;g[p++]=v===0?0:v}}return g}function Gl(e){return typeof e=="number"?e:_n(e)?Jt:+e}function In(e){if(typeof e=="string")return e;if(re(e))return ke(e,In)+"";if(_n(e))return Tl?Tl.call(e):"";var i=e+"";return i=="0"&&1/e==-xn?"-0":i}function jt(e,i,o){var l=-1,p=Mi,g=e.length,v=!0,E=[],A=E;if(o)v=!1,p=ya;else if(g>=a){var w=i?null:vm(e);if(w)return Vi(w);v=!1,p=zr,A=new er}else A=i?[]:E;e:for(;++l<g;){var O=e[l],R=i?i(O):O;if(O=o||O!==0?O:0,v&&R===R){for(var M=A.length;M--;)if(A[M]===R)continue e;i&&A.push(R),E.push(O)}else p(A,R,o)||(A!==E&&A.push(R),E.push(O))}return E}function za(e,i){return i=qt(i,e),e=mc(e,i),e==null||delete e[ct(Vn(i))]}function jl(e,i,o,l){return ii(e,i,o(tr(e,i)),l)}function os(e,i,o,l){for(var p=e.length,g=l?p:-1;(l?g--:++g<p)&&i(e[g],g,e););return o?$n(e,l?0:g,l?g+1:p):$n(e,l?g+1:0,l?p:g)}function ql(e,i){var o=e;return o instanceof pe&&(o=o.value()),Aa(i,function(l,p){return p.func.apply(p.thisArg,Mt([l],p.args))},o)}function Qa(e,i,o){var l=e.length;if(l<2)return l?jt(e[0]):[];for(var p=-1,g=_(l);++p<l;)for(var v=e[p],E=-1;++E<l;)E!=p&&(g[p]=ni(g[p]||v,e[E],i,o));return jt(nn(g,1),i,o)}function Yl(e,i,o){for(var l=-1,p=e.length,g=i.length,v={};++l<p;){var E=l<g?i[l]:r;o(v,e[l],E)}return v}function Ja(e){return Me(e)?e:[]}function Xa(e){return typeof e=="function"?e:En}function qt(e,i){return re(e)?e:ao(e,i)?[e]:Tc(Se(e))}var um=le;function Yt(e,i,o){var l=e.length;return o=o===r?l:o,!i&&o>=l?e:$n(e,i,o)}var Wl=Qh||function(e){return en.clearTimeout(e)};function Hl(e,i){if(i)return e.slice();var o=e.length,l=hl?hl(o):new e.constructor(o);return e.copy(l),l}function Za(e){var i=new e.constructor(e.byteLength);return new Hi(i).set(new Hi(e)),i}function lm(e,i){var o=i?Za(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function cm(e){var i=new e.constructor(e.source,wu.exec(e));return i.lastIndex=e.lastIndex,i}function fm(e){return Kr?Fe(Kr.call(e)):{}}function zl(e,i){var o=i?Za(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Ql(e,i){if(e!==i){var o=e!==r,l=e===null,p=e===e,g=_n(e),v=i!==r,E=i===null,A=i===i,w=_n(i);if(!E&&!w&&!g&&e>i||g&&v&&A&&!E&&!w||l&&v&&A||!o&&A||!p)return 1;if(!l&&!g&&!w&&e<i||w&&o&&p&&!l&&!g||E&&o&&p||!v&&p||!A)return-1}return 0}function pm(e,i,o){for(var l=-1,p=e.criteria,g=i.criteria,v=p.length,E=o.length;++l<v;){var A=Ql(p[l],g[l]);if(A){if(l>=E)return A;var w=o[l];return A*(w=="desc"?-1:1)}}return e.index-i.index}function Jl(e,i,o,l){for(var p=-1,g=e.length,v=o.length,E=-1,A=i.length,w=Qe(g-v,0),O=_(A+w),R=!l;++E<A;)O[E]=i[E];for(;++p<v;)(R||p<g)&&(O[o[p]]=e[p]);for(;w--;)O[E++]=e[p++];return O}function Xl(e,i,o,l){for(var p=-1,g=e.length,v=-1,E=o.length,A=-1,w=i.length,O=Qe(g-E,0),R=_(O+w),M=!l;++p<O;)R[p]=e[p];for(var z=p;++A<w;)R[z+A]=i[A];for(;++v<E;)(M||p<g)&&(R[z+o[v]]=e[p++]);return R}function mn(e,i){var o=-1,l=e.length;for(i||(i=_(l));++o<l;)i[o]=e[o];return i}function lt(e,i,o,l){var p=!o;o||(o={});for(var g=-1,v=i.length;++g<v;){var E=i[g],A=l?l(o[E],e[E],E,o,e):r;A===r&&(A=e[E]),p?yt(o,E,A):ei(o,E,A)}return o}function dm(e,i){return lt(e,so(e),i)}function hm(e,i){return lt(e,cc(e),i)}function us(e,i){return function(o,l){var p=re(o)?Eh:Bg,g=i?i():{};return p(o,e,K(l,2),g)}}function br(e){return le(function(i,o){var l=-1,p=o.length,g=p>1?o[p-1]:r,v=p>2?o[2]:r;for(g=e.length>3&&typeof g=="function"?(p--,g):r,v&&ln(o[0],o[1],v)&&(g=p<3?r:g,p=1),i=Fe(i);++l<p;){var E=o[l];E&&e(i,E,l,g)}return i})}function Zl(e,i){return function(o,l){if(o==null)return o;if(!Dn(o))return e(o,l);for(var p=o.length,g=i?p:-1,v=Fe(o);(i?g--:++g<p)&&l(v[g],g,v)!==!1;);return o}}function Kl(e){return function(i,o,l){for(var p=-1,g=Fe(i),v=l(i),E=v.length;E--;){var A=v[e?E:++p];if(o(g[A],A,g)===!1)break}return i}}function gm(e,i,o){var l=i&U,p=si(e);function g(){var v=this&&this!==en&&this instanceof g?p:e;return v.apply(l?o:this,arguments)}return g}function ec(e){return function(i){i=Se(i);var o=Sr(i)?Xn(i):r,l=o?o[0]:i.charAt(0),p=o?Yt(o,1).join(""):i.slice(1);return l[e]()+p}}function Cr(e){return function(i){return Aa(Zc(Xc(i).replace(sh,"")),e,"")}}function si(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Nr(e.prototype),l=e.apply(o,i);return Le(l)?l:o}}function mm(e,i,o){var l=si(e);function p(){for(var g=arguments.length,v=_(g),E=g,A=wr(p);E--;)v[E]=arguments[E];var w=g<3&&v[0]!==A&&v[g-1]!==A?[]:$t(v,A);if(g-=w.length,g<o)return sc(e,i,ls,p.placeholder,r,v,w,r,r,o-g);var O=this&&this!==en&&this instanceof p?l:e;return yn(O,this,v)}return p}function nc(e){return function(i,o,l){var p=Fe(i);if(!Dn(i)){var g=K(o,3);i=Je(i),o=function(E){return g(p[E],E,p)}}var v=e(i,o,l);return v>-1?p[g?i[v]:v]:r}}function tc(e){return It(function(i){var o=i.length,l=o,p=Un.prototype.thru;for(e&&i.reverse();l--;){var g=i[l];if(typeof g!="function")throw new Pn(c);if(p&&!v&&ds(g)=="wrapper")var v=new Un([],!0)}for(l=v?l:o;++l<o;){g=i[l];var E=ds(g),A=E=="wrapper"?ro(g):r;A&&oo(A[0])&&A[1]==($|Z|oe|ue)&&!A[4].length&&A[9]==1?v=v[ds(A[0])].apply(v,A[3]):v=g.length==1&&oo(g)?v[E]():v.thru(g)}return function(){var w=arguments,O=w[0];if(v&&w.length==1&&re(O))return v.plant(O).value();for(var R=0,M=o?i[R].apply(this,w):O;++R<o;)M=i[R].call(this,M);return M}})}function ls(e,i,o,l,p,g,v,E,A,w){var O=i&$,R=i&U,M=i&X,z=i&(Z|Q),ee=i&C,ae=M?r:si(e);function ne(){for(var fe=arguments.length,ge=_(fe),Fn=fe;Fn--;)ge[Fn]=arguments[Fn];if(z)var cn=wr(ne),Nn=bh(ge,cn);if(l&&(ge=Jl(ge,l,p,z)),g&&(ge=Xl(ge,g,v,z)),fe-=Nn,z&&fe<w){var $e=$t(ge,cn);return sc(e,i,ls,ne.placeholder,o,ge,$e,E,A,w-fe)}var et=R?o:this,bt=M?et[e]:e;return fe=ge.length,E?ge=Bm(ge,E):ee&&fe>1&&ge.reverse(),O&&A<fe&&(ge.length=A),this&&this!==en&&this instanceof ne&&(bt=ae||si(bt)),bt.apply(et,ge)}return ne}function rc(e,i){return function(o,l){return qg(o,e,i(l),{})}}function cs(e,i){return function(o,l){var p;if(o===r&&l===r)return i;if(o!==r&&(p=o),l!==r){if(p===r)return l;typeof o=="string"||typeof l=="string"?(o=In(o),l=In(l)):(o=Gl(o),l=Gl(l)),p=e(o,l)}return p}}function Ka(e){return It(function(i){return i=ke(i,An(K())),le(function(o){var l=this;return e(i,function(p){return yn(p,l,o)})})})}function fs(e,i){i=i===r?" ":In(i);var o=i.length;if(o<2)return o?Wa(i,e):i;var l=Wa(i,Xi(e/yr(i)));return Sr(i)?Yt(Xn(l),0,e).join(""):l.slice(0,e)}function Dm(e,i,o,l){var p=i&U,g=si(e);function v(){for(var E=-1,A=arguments.length,w=-1,O=l.length,R=_(O+A),M=this&&this!==en&&this instanceof v?g:e;++w<O;)R[w]=l[w];for(;A--;)R[w++]=arguments[++E];return yn(M,p?o:this,R)}return v}function ic(e){return function(i,o,l){return l&&typeof l!="number"&&ln(i,o,l)&&(o=l=r),i=Nt(i),o===r?(o=i,i=0):o=Nt(o),l=l===r?i<o?1:-1:Nt(l),tm(i,o,l,e)}}function ps(e){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=Gn(i),o=Gn(o)),e(i,o)}}function sc(e,i,o,l,p,g,v,E,A,w){var O=i&Z,R=O?v:r,M=O?r:v,z=O?g:r,ee=O?r:g;i|=O?oe:P,i&=~(O?P:oe),i&he||(i&=-4);var ae=[e,i,p,z,R,ee,M,E,A,w],ne=o.apply(r,ae);return oo(e)&&Dc(ne,ae),ne.placeholder=l,vc(ne,e,i)}function eo(e){var i=ze[e];return function(o,l){if(o=Gn(o),l=l==null?0:an(se(l),292),l&&vl(o)){var p=(Se(o)+"e").split("e"),g=i(p[0]+"e"+(+p[1]+l));return p=(Se(g)+"e").split("e"),+(p[0]+"e"+(+p[1]-l))}return i(o)}}var vm=_r&&1/Vi(new _r([,-0]))[1]==xn?function(e){return new _r(e)}:Ao;function ac(e){return function(i){var o=on(i);return o==Qn?wa(i):o==Jn?Lh(i):Nh(i,e(i))}}function At(e,i,o,l,p,g,v,E){var A=i&X;if(!A&&typeof e!="function")throw new Pn(c);var w=l?l.length:0;if(w||(i&=-97,l=p=r),v=v===r?v:Qe(se(v),0),E=E===r?E:se(E),w-=p?p.length:0,i&P){var O=l,R=p;l=p=r}var M=A?r:ro(e),z=[e,i,o,l,p,O,R,g,v,E];if(M&&km(z,M),e=z[0],i=z[1],o=z[2],l=z[3],p=z[4],E=z[9]=z[9]===r?A?0:e.length:Qe(z[9]-w,0),!E&&i&(Z|Q)&&(i&=-25),!i||i==U)var ee=gm(e,i,o);else i==Z||i==Q?ee=mm(e,i,E):(i==oe||i==(U|oe))&&!p.length?ee=Dm(e,i,o,l):ee=ls.apply(r,z);var ae=M?$l:Dc;return vc(ae(ee,z),e,i)}function oc(e,i,o,l){return e===r||Kn(e,Ir[o])&&!Ie.call(l,o)?i:e}function uc(e,i,o,l,p,g){return Le(e)&&Le(i)&&(g.set(i,e),ss(e,i,r,uc,g),g.delete(i)),e}function Em(e){return ui(e)?r:e}function lc(e,i,o,l,p,g){var v=o&F,E=e.length,A=i.length;if(E!=A&&!(v&&A>E))return!1;var w=g.get(e),O=g.get(i);if(w&&O)return w==i&&O==e;var R=-1,M=!0,z=o&B?new er:r;for(g.set(e,i),g.set(i,e);++R<E;){var ee=e[R],ae=i[R];if(l)var ne=v?l(ae,ee,R,i,e,g):l(ee,ae,R,e,i,g);if(ne!==r){if(ne)continue;M=!1;break}if(z){if(!Ia(i,function(fe,ge){if(!zr(z,ge)&&(ee===fe||p(ee,fe,o,l,g)))return z.push(ge)})){M=!1;break}}else if(!(ee===ae||p(ee,ae,o,l,g))){M=!1;break}}return g.delete(e),g.delete(i),M}function Tm(e,i,o,l,p,g,v){switch(o){case vr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Hr:return!(e.byteLength!=i.byteLength||!g(new Hi(e),new Hi(i)));case Te:case Rn:case jr:return Kn(+e,+i);case Pt:return e.name==i.name&&e.message==i.message;case qr:case Yr:return e==i+"";case Qn:var E=wa;case Jn:var A=l&F;if(E||(E=Vi),e.size!=i.size&&!A)return!1;var w=v.get(e);if(w)return w==i;l|=B,v.set(e,i);var O=lc(E(e),E(i),l,p,g,v);return v.delete(e),O;case Li:if(Kr)return Kr.call(e)==Kr.call(i)}return!1}function Sm(e,i,o,l,p,g){var v=o&F,E=no(e),A=E.length,w=no(i),O=w.length;if(A!=O&&!v)return!1;for(var R=A;R--;){var M=E[R];if(!(v?M in i:Ie.call(i,M)))return!1}var z=g.get(e),ee=g.get(i);if(z&&ee)return z==i&&ee==e;var ae=!0;g.set(e,i),g.set(i,e);for(var ne=v;++R<A;){M=E[R];var fe=e[M],ge=i[M];if(l)var Fn=v?l(ge,fe,M,i,e,g):l(fe,ge,M,e,i,g);if(!(Fn===r?fe===ge||p(fe,ge,o,l,g):Fn)){ae=!1;break}ne||(ne=M=="constructor")}if(ae&&!ne){var cn=e.constructor,Nn=i.constructor;cn!=Nn&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof Nn=="function"&&Nn instanceof Nn)&&(ae=!1)}return g.delete(e),g.delete(i),ae}function It(e){return lo(gc(e,r,Ic),e+"")}function no(e){return Cl(e,Je,so)}function to(e){return Cl(e,vn,cc)}var ro=Ki?function(e){return Ki.get(e)}:Ao;function ds(e){for(var i=e.name+"",o=Fr[i],l=Ie.call(Fr,i)?o.length:0;l--;){var p=o[l],g=p.func;if(g==null||g==e)return p.name}return i}function wr(e){var i=Ie.call(d,"placeholder")?d:e;return i.placeholder}function K(){var e=d.iteratee||So;return e=e===So?xl:e,arguments.length?e(arguments[0],arguments[1]):e}function hs(e,i){var o=e.__data__;return Cm(i)?o[typeof i=="string"?"string":"hash"]:o.map}function io(e){for(var i=Je(e),o=i.length;o--;){var l=i[o],p=e[l];i[o]=[l,p,dc(p)]}return i}function rr(e,i){var o=xh(e,i);return Ol(o)?o:r}function ym(e){var i=Ie.call(e,Zt),o=e[Zt];try{e[Zt]=r;var l=!0}catch{}var p=Yi.call(e);return l&&(i?e[Zt]=o:delete e[Zt]),p}var so=xa?function(e){return e==null?[]:(e=Fe(e),Ut(xa(e),function(i){return ml.call(e,i)}))}:Io,cc=xa?function(e){for(var i=[];e;)Mt(i,so(e)),e=zi(e);return i}:Io,on=un;(ka&&on(new ka(new ArrayBuffer(1)))!=vr||Jr&&on(new Jr)!=Qn||Ra&&on(Ra.resolve())!=Fu||_r&&on(new _r)!=Jn||Xr&&on(new Xr)!=Wr)&&(on=function(e){var i=un(e),o=i==Et?e.constructor:r,l=o?ir(o):"";if(l)switch(l){case ig:return vr;case sg:return Qn;case ag:return Fu;case og:return Jn;case ug:return Wr}return i});function Am(e,i,o){for(var l=-1,p=o.length;++l<p;){var g=o[l],v=g.size;switch(g.type){case"drop":e+=v;break;case"dropRight":i-=v;break;case"take":i=an(i,e+v);break;case"takeRight":e=Qe(e,i-v);break}}return{start:e,end:i}}function Im(e){var i=e.match(wd);return i?i[1].split(Od):[]}function fc(e,i,o){i=qt(i,e);for(var l=-1,p=i.length,g=!1;++l<p;){var v=ct(i[l]);if(!(g=e!=null&&o(e,v)))break;e=e[v]}return g||++l!=p?g:(p=e==null?0:e.length,!!p&&Ss(p)&&_t(v,p)&&(re(e)||sr(e)))}function _m(e){var i=e.length,o=new e.constructor(i);return i&&typeof e[0]=="string"&&Ie.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function pc(e){return typeof e.constructor=="function"&&!ai(e)?Nr(zi(e)):{}}function Fm(e,i,o){var l=e.constructor;switch(i){case Hr:return Za(e);case Te:case Rn:return new l(+e);case vr:return lm(e,o);case ia:case sa:case aa:case oa:case ua:case la:case ca:case fa:case pa:return zl(e,o);case Qn:return new l;case jr:case Yr:return new l(e);case qr:return cm(e);case Jn:return new l;case Li:return fm(e)}}function Nm(e,i){var o=i.length;if(!o)return e;var l=o-1;return i[l]=(o>1?"& ":"")+i[l],i=i.join(o>2?", ":" "),e.replace(Cd,`{
/* [wrapped with `+i+`] */
`)}function bm(e){return re(e)||sr(e)||!!(Dl&&e&&e[Dl])}function _t(e,i){var o=typeof e;return i=i??Sn,!!i&&(o=="number"||o!="symbol"&&$d.test(e))&&e>-1&&e%1==0&&e<i}function ln(e,i,o){if(!Le(o))return!1;var l=typeof i;return(l=="number"?Dn(o)&&_t(i,o.length):l=="string"&&i in o)?Kn(o[i],e):!1}function ao(e,i){if(re(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||_n(e)?!0:_d.test(e)||!Id.test(e)||i!=null&&e in Fe(i)}function Cm(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function oo(e){var i=ds(e),o=d[i];if(typeof o!="function"||!(i in pe.prototype))return!1;if(e===o)return!0;var l=ro(o);return!!l&&e===l[0]}function wm(e){return!!dl&&dl in e}var Om=ji?Ft:_o;function ai(e){var i=e&&e.constructor,o=typeof i=="function"&&i.prototype||Ir;return e===o}function dc(e){return e===e&&!Le(e)}function hc(e,i){return function(o){return o==null?!1:o[e]===i&&(i!==r||e in Fe(o))}}function xm(e){var i=Es(e,function(l){return o.size===m&&o.clear(),l}),o=i.cache;return i}function km(e,i){var o=e[1],l=i[1],p=o|l,g=p<(U|X|$),v=l==$&&o==Z||l==$&&o==ue&&e[7].length<=i[8]||l==($|ue)&&i[7].length<=i[8]&&o==Z;if(!(g||v))return e;l&U&&(e[2]=i[2],p|=o&U?0:he);var E=i[3];if(E){var A=e[3];e[3]=A?Jl(A,E,i[4]):E,e[4]=A?$t(e[3],D):i[4]}return E=i[5],E&&(A=e[5],e[5]=A?Xl(A,E,i[6]):E,e[6]=A?$t(e[5],D):i[6]),E=i[7],E&&(e[7]=E),l&$&&(e[8]=e[8]==null?i[8]:an(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=p,e}function Rm(e){var i=[];if(e!=null)for(var o in Fe(e))i.push(o);return i}function Lm(e){return Yi.call(e)}function gc(e,i,o){return i=Qe(i===r?e.length-1:i,0),function(){for(var l=arguments,p=-1,g=Qe(l.length-i,0),v=_(g);++p<g;)v[p]=l[i+p];p=-1;for(var E=_(i+1);++p<i;)E[p]=l[p];return E[i]=o(v),yn(e,this,E)}}function mc(e,i){return i.length<2?e:tr(e,$n(i,0,-1))}function Bm(e,i){for(var o=e.length,l=an(i.length,o),p=mn(e);l--;){var g=i[l];e[l]=_t(g,o)?p[g]:r}return e}function uo(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Dc=Ec($l),oi=Xh||function(e,i){return en.setTimeout(e,i)},lo=Ec(sm);function vc(e,i,o){var l=i+"";return lo(e,Nm(l,Pm(Im(l),o)))}function Ec(e){var i=0,o=0;return function(){var l=ng(),p=wn-(l-o);if(o=l,p>0){if(++i>=Pe)return arguments[0]}else i=0;return e.apply(r,arguments)}}function gs(e,i){var o=-1,l=e.length,p=l-1;for(i=i===r?l:i;++o<i;){var g=Ya(o,p),v=e[g];e[g]=e[o],e[o]=v}return e.length=i,e}var Tc=xm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Fd,function(o,l,p,g){i.push(p?g.replace(Rd,"$1"):l||o)}),i});function ct(e){if(typeof e=="string"||_n(e))return e;var i=e+"";return i=="0"&&1/e==-xn?"-0":i}function ir(e){if(e!=null){try{return qi.call(e)}catch{}try{return e+""}catch{}}return""}function Pm(e,i){return Bn(V,function(o){var l="_."+o[0];i&o[1]&&!Mi(e,l)&&e.push(l)}),e.sort()}function Sc(e){if(e instanceof pe)return e.clone();var i=new Un(e.__wrapped__,e.__chain__);return i.__actions__=mn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function Um(e,i,o){(o?ln(e,i,o):i===r)?i=1:i=Qe(se(i),0);var l=e==null?0:e.length;if(!l||i<1)return[];for(var p=0,g=0,v=_(Xi(l/i));p<l;)v[g++]=$n(e,p,p+=i);return v}function Mm(e){for(var i=-1,o=e==null?0:e.length,l=0,p=[];++i<o;){var g=e[i];g&&(p[l++]=g)}return p}function $m(){var e=arguments.length;if(!e)return[];for(var i=_(e-1),o=arguments[0],l=e;l--;)i[l-1]=arguments[l];return Mt(re(o)?mn(o):[o],nn(i,1))}var Vm=le(function(e,i){return Me(e)?ni(e,nn(i,1,Me,!0)):[]}),Gm=le(function(e,i){var o=Vn(i);return Me(o)&&(o=r),Me(e)?ni(e,nn(i,1,Me,!0),K(o,2)):[]}),jm=le(function(e,i){var o=Vn(i);return Me(o)&&(o=r),Me(e)?ni(e,nn(i,1,Me,!0),r,o):[]});function qm(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),$n(e,i<0?0:i,l)):[]}function Ym(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),i=l-i,$n(e,0,i<0?0:i)):[]}function Wm(e,i){return e&&e.length?os(e,K(i,3),!0,!0):[]}function Hm(e,i){return e&&e.length?os(e,K(i,3),!0):[]}function zm(e,i,o,l){var p=e==null?0:e.length;return p?(o&&typeof o!="number"&&ln(e,i,o)&&(o=0,l=p),$g(e,i,o,l)):[]}function yc(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:se(o);return p<0&&(p=Qe(l+p,0)),$i(e,K(i,3),p)}function Ac(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l-1;return o!==r&&(p=se(o),p=o<0?Qe(l+p,0):an(p,l-1)),$i(e,K(i,3),p,!0)}function Ic(e){var i=e==null?0:e.length;return i?nn(e,1):[]}function Qm(e){var i=e==null?0:e.length;return i?nn(e,xn):[]}function Jm(e,i){var o=e==null?0:e.length;return o?(i=i===r?1:se(i),nn(e,i)):[]}function Xm(e){for(var i=-1,o=e==null?0:e.length,l={};++i<o;){var p=e[i];l[p[0]]=p[1]}return l}function _c(e){return e&&e.length?e[0]:r}function Zm(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:se(o);return p<0&&(p=Qe(l+p,0)),Tr(e,i,p)}function Km(e){var i=e==null?0:e.length;return i?$n(e,0,-1):[]}var e0=le(function(e){var i=ke(e,Ja);return i.length&&i[0]===e[0]?$a(i):[]}),n0=le(function(e){var i=Vn(e),o=ke(e,Ja);return i===Vn(o)?i=r:o.pop(),o.length&&o[0]===e[0]?$a(o,K(i,2)):[]}),t0=le(function(e){var i=Vn(e),o=ke(e,Ja);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===e[0]?$a(o,r,i):[]});function r0(e,i){return e==null?"":Kh.call(e,i)}function Vn(e){var i=e==null?0:e.length;return i?e[i-1]:r}function i0(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l;return o!==r&&(p=se(o),p=p<0?Qe(l+p,0):an(p,l-1)),i===i?Ph(e,i,p):$i(e,sl,p,!0)}function s0(e,i){return e&&e.length?Bl(e,se(i)):r}var a0=le(Fc);function Fc(e,i){return e&&e.length&&i&&i.length?qa(e,i):e}function o0(e,i,o){return e&&e.length&&i&&i.length?qa(e,i,K(o,2)):e}function u0(e,i,o){return e&&e.length&&i&&i.length?qa(e,i,r,o):e}var l0=It(function(e,i){var o=e==null?0:e.length,l=Ba(e,i);return Ml(e,ke(i,function(p){return _t(p,o)?+p:p}).sort(Ql)),l});function c0(e,i){var o=[];if(!(e&&e.length))return o;var l=-1,p=[],g=e.length;for(i=K(i,3);++l<g;){var v=e[l];i(v,l,e)&&(o.push(v),p.push(l))}return Ml(e,p),o}function co(e){return e==null?e:rg.call(e)}function f0(e,i,o){var l=e==null?0:e.length;return l?(o&&typeof o!="number"&&ln(e,i,o)?(i=0,o=l):(i=i==null?0:se(i),o=o===r?l:se(o)),$n(e,i,o)):[]}function p0(e,i){return as(e,i)}function d0(e,i,o){return Ha(e,i,K(o,2))}function h0(e,i){var o=e==null?0:e.length;if(o){var l=as(e,i);if(l<o&&Kn(e[l],i))return l}return-1}function g0(e,i){return as(e,i,!0)}function m0(e,i,o){return Ha(e,i,K(o,2),!0)}function D0(e,i){var o=e==null?0:e.length;if(o){var l=as(e,i,!0)-1;if(Kn(e[l],i))return l}return-1}function v0(e){return e&&e.length?Vl(e):[]}function E0(e,i){return e&&e.length?Vl(e,K(i,2)):[]}function T0(e){var i=e==null?0:e.length;return i?$n(e,1,i):[]}function S0(e,i,o){return e&&e.length?(i=o||i===r?1:se(i),$n(e,0,i<0?0:i)):[]}function y0(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===r?1:se(i),i=l-i,$n(e,i<0?0:i,l)):[]}function A0(e,i){return e&&e.length?os(e,K(i,3),!1,!0):[]}function I0(e,i){return e&&e.length?os(e,K(i,3)):[]}var _0=le(function(e){return jt(nn(e,1,Me,!0))}),F0=le(function(e){var i=Vn(e);return Me(i)&&(i=r),jt(nn(e,1,Me,!0),K(i,2))}),N0=le(function(e){var i=Vn(e);return i=typeof i=="function"?i:r,jt(nn(e,1,Me,!0),r,i)});function b0(e){return e&&e.length?jt(e):[]}function C0(e,i){return e&&e.length?jt(e,K(i,2)):[]}function w0(e,i){return i=typeof i=="function"?i:r,e&&e.length?jt(e,r,i):[]}function fo(e){if(!(e&&e.length))return[];var i=0;return e=Ut(e,function(o){if(Me(o))return i=Qe(o.length,i),!0}),ba(i,function(o){return ke(e,_a(o))})}function Nc(e,i){if(!(e&&e.length))return[];var o=fo(e);return i==null?o:ke(o,function(l){return yn(i,r,l)})}var O0=le(function(e,i){return Me(e)?ni(e,i):[]}),x0=le(function(e){return Qa(Ut(e,Me))}),k0=le(function(e){var i=Vn(e);return Me(i)&&(i=r),Qa(Ut(e,Me),K(i,2))}),R0=le(function(e){var i=Vn(e);return i=typeof i=="function"?i:r,Qa(Ut(e,Me),r,i)}),L0=le(fo);function B0(e,i){return Yl(e||[],i||[],ei)}function P0(e,i){return Yl(e||[],i||[],ii)}var U0=le(function(e){var i=e.length,o=i>1?e[i-1]:r;return o=typeof o=="function"?(e.pop(),o):r,Nc(e,o)});function bc(e){var i=d(e);return i.__chain__=!0,i}function M0(e,i){return i(e),e}function ms(e,i){return i(e)}var $0=It(function(e){var i=e.length,o=i?e[0]:0,l=this.__wrapped__,p=function(g){return Ba(g,e)};return i>1||this.__actions__.length||!(l instanceof pe)||!_t(o)?this.thru(p):(l=l.slice(o,+o+(i?1:0)),l.__actions__.push({func:ms,args:[p],thisArg:r}),new Un(l,this.__chain__).thru(function(g){return i&&!g.length&&g.push(r),g}))});function V0(){return bc(this)}function G0(){return new Un(this.value(),this.__chain__)}function j0(){this.__values__===r&&(this.__values__=Gc(this.value()));var e=this.__index__>=this.__values__.length,i=e?r:this.__values__[this.__index__++];return{done:e,value:i}}function q0(){return this}function Y0(e){for(var i,o=this;o instanceof ns;){var l=Sc(o);l.__index__=0,l.__values__=r,i?p.__wrapped__=l:i=l;var p=l;o=o.__wrapped__}return p.__wrapped__=e,i}function W0(){var e=this.__wrapped__;if(e instanceof pe){var i=e;return this.__actions__.length&&(i=new pe(this)),i=i.reverse(),i.__actions__.push({func:ms,args:[co],thisArg:r}),new Un(i,this.__chain__)}return this.thru(co)}function H0(){return ql(this.__wrapped__,this.__actions__)}var z0=us(function(e,i,o){Ie.call(e,o)?++e[o]:yt(e,o,1)});function Q0(e,i,o){var l=re(e)?rl:Mg;return o&&ln(e,i,o)&&(i=r),l(e,K(i,3))}function J0(e,i){var o=re(e)?Ut:Nl;return o(e,K(i,3))}var X0=nc(yc),Z0=nc(Ac);function K0(e,i){return nn(Ds(e,i),1)}function eD(e,i){return nn(Ds(e,i),xn)}function nD(e,i,o){return o=o===r?1:se(o),nn(Ds(e,i),o)}function Cc(e,i){var o=re(e)?Bn:Gt;return o(e,K(i,3))}function wc(e,i){var o=re(e)?Th:Fl;return o(e,K(i,3))}var tD=us(function(e,i,o){Ie.call(e,o)?e[o].push(i):yt(e,o,[i])});function rD(e,i,o,l){e=Dn(e)?e:xr(e),o=o&&!l?se(o):0;var p=e.length;return o<0&&(o=Qe(p+o,0)),ys(e)?o<=p&&e.indexOf(i,o)>-1:!!p&&Tr(e,i,o)>-1}var iD=le(function(e,i,o){var l=-1,p=typeof i=="function",g=Dn(e)?_(e.length):[];return Gt(e,function(v){g[++l]=p?yn(i,v,o):ti(v,i,o)}),g}),sD=us(function(e,i,o){yt(e,o,i)});function Ds(e,i){var o=re(e)?ke:kl;return o(e,K(i,3))}function aD(e,i,o,l){return e==null?[]:(re(i)||(i=i==null?[]:[i]),o=l?r:o,re(o)||(o=o==null?[]:[o]),Pl(e,i,o))}var oD=us(function(e,i,o){e[o?0:1].push(i)},function(){return[[],[]]});function uD(e,i,o){var l=re(e)?Aa:ol,p=arguments.length<3;return l(e,K(i,4),o,p,Gt)}function lD(e,i,o){var l=re(e)?Sh:ol,p=arguments.length<3;return l(e,K(i,4),o,p,Fl)}function cD(e,i){var o=re(e)?Ut:Nl;return o(e,Ts(K(i,3)))}function fD(e){var i=re(e)?yl:rm;return i(e)}function pD(e,i,o){(o?ln(e,i,o):i===r)?i=1:i=se(i);var l=re(e)?Rg:im;return l(e,i)}function dD(e){var i=re(e)?Lg:am;return i(e)}function hD(e){if(e==null)return 0;if(Dn(e))return ys(e)?yr(e):e.length;var i=on(e);return i==Qn||i==Jn?e.size:Ga(e).length}function gD(e,i,o){var l=re(e)?Ia:om;return o&&ln(e,i,o)&&(i=r),l(e,K(i,3))}var mD=le(function(e,i){if(e==null)return[];var o=i.length;return o>1&&ln(e,i[0],i[1])?i=[]:o>2&&ln(i[0],i[1],i[2])&&(i=[i[0]]),Pl(e,nn(i,1),[])}),vs=Jh||function(){return en.Date.now()};function DD(e,i){if(typeof i!="function")throw new Pn(c);return e=se(e),function(){if(--e<1)return i.apply(this,arguments)}}function Oc(e,i,o){return i=o?r:i,i=e&&i==null?e.length:i,At(e,$,r,r,r,r,i)}function xc(e,i){var o;if(typeof i!="function")throw new Pn(c);return e=se(e),function(){return--e>0&&(o=i.apply(this,arguments)),e<=1&&(i=r),o}}var po=le(function(e,i,o){var l=U;if(o.length){var p=$t(o,wr(po));l|=oe}return At(e,l,i,o,p)}),kc=le(function(e,i,o){var l=U|X;if(o.length){var p=$t(o,wr(kc));l|=oe}return At(i,l,e,o,p)});function Rc(e,i,o){i=o?r:i;var l=At(e,Z,r,r,r,r,r,i);return l.placeholder=Rc.placeholder,l}function Lc(e,i,o){i=o?r:i;var l=At(e,Q,r,r,r,r,r,i);return l.placeholder=Lc.placeholder,l}function Bc(e,i,o){var l,p,g,v,E,A,w=0,O=!1,R=!1,M=!0;if(typeof e!="function")throw new Pn(c);i=Gn(i)||0,Le(o)&&(O=!!o.leading,R="maxWait"in o,g=R?Qe(Gn(o.maxWait)||0,i):g,M="trailing"in o?!!o.trailing:M);function z($e){var et=l,bt=p;return l=p=r,w=$e,v=e.apply(bt,et),v}function ee($e){return w=$e,E=oi(fe,i),O?z($e):v}function ae($e){var et=$e-A,bt=$e-w,nf=i-et;return R?an(nf,g-bt):nf}function ne($e){var et=$e-A,bt=$e-w;return A===r||et>=i||et<0||R&&bt>=g}function fe(){var $e=vs();if(ne($e))return ge($e);E=oi(fe,ae($e))}function ge($e){return E=r,M&&l?z($e):(l=p=r,v)}function Fn(){E!==r&&Wl(E),w=0,l=A=p=E=r}function cn(){return E===r?v:ge(vs())}function Nn(){var $e=vs(),et=ne($e);if(l=arguments,p=this,A=$e,et){if(E===r)return ee(A);if(R)return Wl(E),E=oi(fe,i),z(A)}return E===r&&(E=oi(fe,i)),v}return Nn.cancel=Fn,Nn.flush=cn,Nn}var vD=le(function(e,i){return _l(e,1,i)}),ED=le(function(e,i,o){return _l(e,Gn(i)||0,o)});function TD(e){return At(e,C)}function Es(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Pn(c);var o=function(){var l=arguments,p=i?i.apply(this,l):l[0],g=o.cache;if(g.has(p))return g.get(p);var v=e.apply(this,l);return o.cache=g.set(p,v)||g,v};return o.cache=new(Es.Cache||St),o}Es.Cache=St;function Ts(e){if(typeof e!="function")throw new Pn(c);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function SD(e){return xc(2,e)}var yD=um(function(e,i){i=i.length==1&&re(i[0])?ke(i[0],An(K())):ke(nn(i,1),An(K()));var o=i.length;return le(function(l){for(var p=-1,g=an(l.length,o);++p<g;)l[p]=i[p].call(this,l[p]);return yn(e,this,l)})}),ho=le(function(e,i){var o=$t(i,wr(ho));return At(e,oe,r,i,o)}),Pc=le(function(e,i){var o=$t(i,wr(Pc));return At(e,P,r,i,o)}),AD=It(function(e,i){return At(e,ue,r,r,r,i)});function ID(e,i){if(typeof e!="function")throw new Pn(c);return i=i===r?i:se(i),le(e,i)}function _D(e,i){if(typeof e!="function")throw new Pn(c);return i=i==null?0:Qe(se(i),0),le(function(o){var l=o[i],p=Yt(o,0,i);return l&&Mt(p,l),yn(e,this,p)})}function FD(e,i,o){var l=!0,p=!0;if(typeof e!="function")throw new Pn(c);return Le(o)&&(l="leading"in o?!!o.leading:l,p="trailing"in o?!!o.trailing:p),Bc(e,i,{leading:l,maxWait:i,trailing:p})}function ND(e){return Oc(e,1)}function bD(e,i){return ho(Xa(i),e)}function CD(){if(!arguments.length)return[];var e=arguments[0];return re(e)?e:[e]}function wD(e){return Mn(e,k)}function OD(e,i){return i=typeof i=="function"?i:r,Mn(e,k,i)}function xD(e){return Mn(e,T|k)}function kD(e,i){return i=typeof i=="function"?i:r,Mn(e,T|k,i)}function RD(e,i){return i==null||Il(e,i,Je(i))}function Kn(e,i){return e===i||e!==e&&i!==i}var LD=ps(Ma),BD=ps(function(e,i){return e>=i}),sr=wl((function(){return arguments})())?wl:function(e){return Be(e)&&Ie.call(e,"callee")&&!ml.call(e,"callee")},re=_.isArray,PD=Xu?An(Xu):Yg;function Dn(e){return e!=null&&Ss(e.length)&&!Ft(e)}function Me(e){return Be(e)&&Dn(e)}function UD(e){return e===!0||e===!1||Be(e)&&un(e)==Te}var Wt=Zh||_o,MD=Zu?An(Zu):Wg;function $D(e){return Be(e)&&e.nodeType===1&&!ui(e)}function VD(e){if(e==null)return!0;if(Dn(e)&&(re(e)||typeof e=="string"||typeof e.splice=="function"||Wt(e)||Or(e)||sr(e)))return!e.length;var i=on(e);if(i==Qn||i==Jn)return!e.size;if(ai(e))return!Ga(e).length;for(var o in e)if(Ie.call(e,o))return!1;return!0}function GD(e,i){return ri(e,i)}function jD(e,i,o){o=typeof o=="function"?o:r;var l=o?o(e,i):r;return l===r?ri(e,i,r,o):!!l}function go(e){if(!Be(e))return!1;var i=un(e);return i==Pt||i==Gr||typeof e.message=="string"&&typeof e.name=="string"&&!ui(e)}function qD(e){return typeof e=="number"&&vl(e)}function Ft(e){if(!Le(e))return!1;var i=un(e);return i==sn||i==_u||i==Ue||i==hd}function Uc(e){return typeof e=="number"&&e==se(e)}function Ss(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Sn}function Le(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Be(e){return e!=null&&typeof e=="object"}var Mc=Ku?An(Ku):zg;function YD(e,i){return e===i||Va(e,i,io(i))}function WD(e,i,o){return o=typeof o=="function"?o:r,Va(e,i,io(i),o)}function HD(e){return $c(e)&&e!=+e}function zD(e){if(Om(e))throw new te(u);return Ol(e)}function QD(e){return e===null}function JD(e){return e==null}function $c(e){return typeof e=="number"||Be(e)&&un(e)==jr}function ui(e){if(!Be(e)||un(e)!=Et)return!1;var i=zi(e);if(i===null)return!0;var o=Ie.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&qi.call(o)==Wh}var mo=el?An(el):Qg;function XD(e){return Uc(e)&&e>=-Sn&&e<=Sn}var Vc=nl?An(nl):Jg;function ys(e){return typeof e=="string"||!re(e)&&Be(e)&&un(e)==Yr}function _n(e){return typeof e=="symbol"||Be(e)&&un(e)==Li}var Or=tl?An(tl):Xg;function ZD(e){return e===r}function KD(e){return Be(e)&&on(e)==Wr}function ev(e){return Be(e)&&un(e)==md}var nv=ps(ja),tv=ps(function(e,i){return e<=i});function Gc(e){if(!e)return[];if(Dn(e))return ys(e)?Xn(e):mn(e);if(Qr&&e[Qr])return Rh(e[Qr]());var i=on(e),o=i==Qn?wa:i==Jn?Vi:xr;return o(e)}function Nt(e){if(!e)return e===0?e:0;if(e=Gn(e),e===xn||e===-xn){var i=e<0?-1:1;return i*Dr}return e===e?e:0}function se(e){var i=Nt(e),o=i%1;return i===i?o?i-o:i:0}function jc(e){return e?nr(se(e),0,kn):0}function Gn(e){if(typeof e=="number")return e;if(_n(e))return Jt;if(Le(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Le(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=ul(e);var o=Pd.test(e);return o||Md.test(e)?Dh(e.slice(2),o?2:8):Bd.test(e)?Jt:+e}function qc(e){return lt(e,vn(e))}function rv(e){return e?nr(se(e),-Sn,Sn):e===0?e:0}function Se(e){return e==null?"":In(e)}var iv=br(function(e,i){if(ai(i)||Dn(i)){lt(i,Je(i),e);return}for(var o in i)Ie.call(i,o)&&ei(e,o,i[o])}),Yc=br(function(e,i){lt(i,vn(i),e)}),As=br(function(e,i,o,l){lt(i,vn(i),e,l)}),sv=br(function(e,i,o,l){lt(i,Je(i),e,l)}),av=It(Ba);function ov(e,i){var o=Nr(e);return i==null?o:Al(o,i)}var uv=le(function(e,i){e=Fe(e);var o=-1,l=i.length,p=l>2?i[2]:r;for(p&&ln(i[0],i[1],p)&&(l=1);++o<l;)for(var g=i[o],v=vn(g),E=-1,A=v.length;++E<A;){var w=v[E],O=e[w];(O===r||Kn(O,Ir[w])&&!Ie.call(e,w))&&(e[w]=g[w])}return e}),lv=le(function(e){return e.push(r,uc),yn(Wc,r,e)});function cv(e,i){return il(e,K(i,3),ut)}function fv(e,i){return il(e,K(i,3),Ua)}function pv(e,i){return e==null?e:Pa(e,K(i,3),vn)}function dv(e,i){return e==null?e:bl(e,K(i,3),vn)}function hv(e,i){return e&&ut(e,K(i,3))}function gv(e,i){return e&&Ua(e,K(i,3))}function mv(e){return e==null?[]:is(e,Je(e))}function Dv(e){return e==null?[]:is(e,vn(e))}function Do(e,i,o){var l=e==null?r:tr(e,i);return l===r?o:l}function vv(e,i){return e!=null&&fc(e,i,Vg)}function vo(e,i){return e!=null&&fc(e,i,Gg)}var Ev=rc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Yi.call(i)),e[i]=o},To(En)),Tv=rc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Yi.call(i)),Ie.call(e,i)?e[i].push(o):e[i]=[o]},K),Sv=le(ti);function Je(e){return Dn(e)?Sl(e):Ga(e)}function vn(e){return Dn(e)?Sl(e,!0):Zg(e)}function yv(e,i){var o={};return i=K(i,3),ut(e,function(l,p,g){yt(o,i(l,p,g),l)}),o}function Av(e,i){var o={};return i=K(i,3),ut(e,function(l,p,g){yt(o,p,i(l,p,g))}),o}var Iv=br(function(e,i,o){ss(e,i,o)}),Wc=br(function(e,i,o,l){ss(e,i,o,l)}),_v=It(function(e,i){var o={};if(e==null)return o;var l=!1;i=ke(i,function(g){return g=qt(g,e),l||(l=g.length>1),g}),lt(e,to(e),o),l&&(o=Mn(o,T|I|k,Em));for(var p=i.length;p--;)za(o,i[p]);return o});function Fv(e,i){return Hc(e,Ts(K(i)))}var Nv=It(function(e,i){return e==null?{}:em(e,i)});function Hc(e,i){if(e==null)return{};var o=ke(to(e),function(l){return[l]});return i=K(i),Ul(e,o,function(l,p){return i(l,p[0])})}function bv(e,i,o){i=qt(i,e);var l=-1,p=i.length;for(p||(p=1,e=r);++l<p;){var g=e==null?r:e[ct(i[l])];g===r&&(l=p,g=o),e=Ft(g)?g.call(e):g}return e}function Cv(e,i,o){return e==null?e:ii(e,i,o)}function wv(e,i,o,l){return l=typeof l=="function"?l:r,e==null?e:ii(e,i,o,l)}var zc=ac(Je),Qc=ac(vn);function Ov(e,i,o){var l=re(e),p=l||Wt(e)||Or(e);if(i=K(i,4),o==null){var g=e&&e.constructor;p?o=l?new g:[]:Le(e)?o=Ft(g)?Nr(zi(e)):{}:o={}}return(p?Bn:ut)(e,function(v,E,A){return i(o,v,E,A)}),o}function xv(e,i){return e==null?!0:za(e,i)}function kv(e,i,o){return e==null?e:jl(e,i,Xa(o))}function Rv(e,i,o,l){return l=typeof l=="function"?l:r,e==null?e:jl(e,i,Xa(o),l)}function xr(e){return e==null?[]:Ca(e,Je(e))}function Lv(e){return e==null?[]:Ca(e,vn(e))}function Bv(e,i,o){return o===r&&(o=i,i=r),o!==r&&(o=Gn(o),o=o===o?o:0),i!==r&&(i=Gn(i),i=i===i?i:0),nr(Gn(e),i,o)}function Pv(e,i,o){return i=Nt(i),o===r?(o=i,i=0):o=Nt(o),e=Gn(e),jg(e,i,o)}function Uv(e,i,o){if(o&&typeof o!="boolean"&&ln(e,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&i===r?(e=0,i=1):(e=Nt(e),i===r?(i=e,e=0):i=Nt(i)),e>i){var l=e;e=i,i=l}if(o||e%1||i%1){var p=El();return an(e+p*(i-e+mh("1e-"+((p+"").length-1))),i)}return Ya(e,i)}var Mv=Cr(function(e,i,o){return i=i.toLowerCase(),e+(o?Jc(i):i)});function Jc(e){return Eo(Se(e).toLowerCase())}function Xc(e){return e=Se(e),e&&e.replace(Vd,Ch).replace(ah,"")}function $v(e,i,o){e=Se(e),i=In(i);var l=e.length;o=o===r?l:nr(se(o),0,l);var p=o;return o-=i.length,o>=0&&e.slice(o,p)==i}function Vv(e){return e=Se(e),e&&Sd.test(e)?e.replace(bu,wh):e}function Gv(e){return e=Se(e),e&&Nd.test(e)?e.replace(da,"\\$&"):e}var jv=Cr(function(e,i,o){return e+(o?"-":"")+i.toLowerCase()}),qv=Cr(function(e,i,o){return e+(o?" ":"")+i.toLowerCase()}),Yv=ec("toLowerCase");function Wv(e,i,o){e=Se(e),i=se(i);var l=i?yr(e):0;if(!i||l>=i)return e;var p=(i-l)/2;return fs(Zi(p),o)+e+fs(Xi(p),o)}function Hv(e,i,o){e=Se(e),i=se(i);var l=i?yr(e):0;return i&&l<i?e+fs(i-l,o):e}function zv(e,i,o){e=Se(e),i=se(i);var l=i?yr(e):0;return i&&l<i?fs(i-l,o)+e:e}function Qv(e,i,o){return o||i==null?i=0:i&&(i=+i),tg(Se(e).replace(ha,""),i||0)}function Jv(e,i,o){return(o?ln(e,i,o):i===r)?i=1:i=se(i),Wa(Se(e),i)}function Xv(){var e=arguments,i=Se(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Zv=Cr(function(e,i,o){return e+(o?"_":"")+i.toLowerCase()});function Kv(e,i,o){return o&&typeof o!="number"&&ln(e,i,o)&&(i=o=r),o=o===r?kn:o>>>0,o?(e=Se(e),e&&(typeof i=="string"||i!=null&&!mo(i))&&(i=In(i),!i&&Sr(e))?Yt(Xn(e),0,o):e.split(i,o)):[]}var eE=Cr(function(e,i,o){return e+(o?" ":"")+Eo(i)});function nE(e,i,o){return e=Se(e),o=o==null?0:nr(se(o),0,e.length),i=In(i),e.slice(o,o+i.length)==i}function tE(e,i,o){var l=d.templateSettings;o&&ln(e,i,o)&&(i=r),e=Se(e),i=As({},i,l,oc);var p=As({},i.imports,l.imports,oc),g=Je(p),v=Ca(p,g),E,A,w=0,O=i.interpolate||Bi,R="__p += '",M=Oa((i.escape||Bi).source+"|"+O.source+"|"+(O===Cu?Ld:Bi).source+"|"+(i.evaluate||Bi).source+"|$","g"),z="//# sourceURL="+(Ie.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++fh+"]")+`
`;e.replace(M,function(ne,fe,ge,Fn,cn,Nn){return ge||(ge=Fn),R+=e.slice(w,Nn).replace(Gd,Oh),fe&&(E=!0,R+=`' +
__e(`+fe+`) +
'`),cn&&(A=!0,R+=`';
`+cn+`;
__p += '`),ge&&(R+=`' +
((__t = (`+ge+`)) == null ? '' : __t) +
'`),w=Nn+ne.length,ne}),R+=`';
`;var ee=Ie.call(i,"variable")&&i.variable;if(!ee)R=`with (obj) {
`+R+`
}
`;else if(kd.test(ee))throw new te(f);R=(A?R.replace(Dd,""):R).replace(vd,"$1").replace(Ed,"$1;"),R="function("+(ee||"obj")+`) {
`+(ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var ae=Kc(function(){return ve(g,z+"return "+R).apply(r,v)});if(ae.source=R,go(ae))throw ae;return ae}function rE(e){return Se(e).toLowerCase()}function iE(e){return Se(e).toUpperCase()}function sE(e,i,o){if(e=Se(e),e&&(o||i===r))return ul(e);if(!e||!(i=In(i)))return e;var l=Xn(e),p=Xn(i),g=ll(l,p),v=cl(l,p)+1;return Yt(l,g,v).join("")}function aE(e,i,o){if(e=Se(e),e&&(o||i===r))return e.slice(0,pl(e)+1);if(!e||!(i=In(i)))return e;var l=Xn(e),p=cl(l,Xn(i))+1;return Yt(l,0,p).join("")}function oE(e,i,o){if(e=Se(e),e&&(o||i===r))return e.replace(ha,"");if(!e||!(i=In(i)))return e;var l=Xn(e),p=ll(l,Xn(i));return Yt(l,p).join("")}function uE(e,i){var o=j,l=Oe;if(Le(i)){var p="separator"in i?i.separator:p;o="length"in i?se(i.length):o,l="omission"in i?In(i.omission):l}e=Se(e);var g=e.length;if(Sr(e)){var v=Xn(e);g=v.length}if(o>=g)return e;var E=o-yr(l);if(E<1)return l;var A=v?Yt(v,0,E).join(""):e.slice(0,E);if(p===r)return A+l;if(v&&(E+=A.length-E),mo(p)){if(e.slice(E).search(p)){var w,O=A;for(p.global||(p=Oa(p.source,Se(wu.exec(p))+"g")),p.lastIndex=0;w=p.exec(O);)var R=w.index;A=A.slice(0,R===r?E:R)}}else if(e.indexOf(In(p),E)!=E){var M=A.lastIndexOf(p);M>-1&&(A=A.slice(0,M))}return A+l}function lE(e){return e=Se(e),e&&Td.test(e)?e.replace(Nu,Uh):e}var cE=Cr(function(e,i,o){return e+(o?" ":"")+i.toUpperCase()}),Eo=ec("toUpperCase");function Zc(e,i,o){return e=Se(e),i=o?r:i,i===r?kh(e)?Vh(e):Ih(e):e.match(i)||[]}var Kc=le(function(e,i){try{return yn(e,r,i)}catch(o){return go(o)?o:new te(o)}}),fE=It(function(e,i){return Bn(i,function(o){o=ct(o),yt(e,o,po(e[o],e))}),e});function pE(e){var i=e==null?0:e.length,o=K();return e=i?ke(e,function(l){if(typeof l[1]!="function")throw new Pn(c);return[o(l[0]),l[1]]}):[],le(function(l){for(var p=-1;++p<i;){var g=e[p];if(yn(g[0],this,l))return yn(g[1],this,l)}})}function dE(e){return Ug(Mn(e,T))}function To(e){return function(){return e}}function hE(e,i){return e==null||e!==e?i:e}var gE=tc(),mE=tc(!0);function En(e){return e}function So(e){return xl(typeof e=="function"?e:Mn(e,T))}function DE(e){return Rl(Mn(e,T))}function vE(e,i){return Ll(e,Mn(i,T))}var EE=le(function(e,i){return function(o){return ti(o,e,i)}}),TE=le(function(e,i){return function(o){return ti(e,o,i)}});function yo(e,i,o){var l=Je(i),p=is(i,l);o==null&&!(Le(i)&&(p.length||!l.length))&&(o=i,i=e,e=this,p=is(i,Je(i)));var g=!(Le(o)&&"chain"in o)||!!o.chain,v=Ft(e);return Bn(p,function(E){var A=i[E];e[E]=A,v&&(e.prototype[E]=function(){var w=this.__chain__;if(g||w){var O=e(this.__wrapped__),R=O.__actions__=mn(this.__actions__);return R.push({func:A,args:arguments,thisArg:e}),O.__chain__=w,O}return A.apply(e,Mt([this.value()],arguments))})}),e}function SE(){return en._===this&&(en._=Hh),this}function Ao(){}function yE(e){return e=se(e),le(function(i){return Bl(i,e)})}var AE=Ka(ke),IE=Ka(rl),_E=Ka(Ia);function ef(e){return ao(e)?_a(ct(e)):nm(e)}function FE(e){return function(i){return e==null?r:tr(e,i)}}var NE=ic(),bE=ic(!0);function Io(){return[]}function _o(){return!1}function CE(){return{}}function wE(){return""}function OE(){return!0}function xE(e,i){if(e=se(e),e<1||e>Sn)return[];var o=kn,l=an(e,kn);i=K(i),e-=kn;for(var p=ba(l,i);++o<e;)i(o);return p}function kE(e){return re(e)?ke(e,ct):_n(e)?[e]:mn(Tc(Se(e)))}function RE(e){var i=++Yh;return Se(e)+i}var LE=cs(function(e,i){return e+i},0),BE=eo("ceil"),PE=cs(function(e,i){return e/i},1),UE=eo("floor");function ME(e){return e&&e.length?rs(e,En,Ma):r}function $E(e,i){return e&&e.length?rs(e,K(i,2),Ma):r}function VE(e){return al(e,En)}function GE(e,i){return al(e,K(i,2))}function jE(e){return e&&e.length?rs(e,En,ja):r}function qE(e,i){return e&&e.length?rs(e,K(i,2),ja):r}var YE=cs(function(e,i){return e*i},1),WE=eo("round"),HE=cs(function(e,i){return e-i},0);function zE(e){return e&&e.length?Na(e,En):0}function QE(e,i){return e&&e.length?Na(e,K(i,2)):0}return d.after=DD,d.ary=Oc,d.assign=iv,d.assignIn=Yc,d.assignInWith=As,d.assignWith=sv,d.at=av,d.before=xc,d.bind=po,d.bindAll=fE,d.bindKey=kc,d.castArray=CD,d.chain=bc,d.chunk=Um,d.compact=Mm,d.concat=$m,d.cond=pE,d.conforms=dE,d.constant=To,d.countBy=z0,d.create=ov,d.curry=Rc,d.curryRight=Lc,d.debounce=Bc,d.defaults=uv,d.defaultsDeep=lv,d.defer=vD,d.delay=ED,d.difference=Vm,d.differenceBy=Gm,d.differenceWith=jm,d.drop=qm,d.dropRight=Ym,d.dropRightWhile=Wm,d.dropWhile=Hm,d.fill=zm,d.filter=J0,d.flatMap=K0,d.flatMapDeep=eD,d.flatMapDepth=nD,d.flatten=Ic,d.flattenDeep=Qm,d.flattenDepth=Jm,d.flip=TD,d.flow=gE,d.flowRight=mE,d.fromPairs=Xm,d.functions=mv,d.functionsIn=Dv,d.groupBy=tD,d.initial=Km,d.intersection=e0,d.intersectionBy=n0,d.intersectionWith=t0,d.invert=Ev,d.invertBy=Tv,d.invokeMap=iD,d.iteratee=So,d.keyBy=sD,d.keys=Je,d.keysIn=vn,d.map=Ds,d.mapKeys=yv,d.mapValues=Av,d.matches=DE,d.matchesProperty=vE,d.memoize=Es,d.merge=Iv,d.mergeWith=Wc,d.method=EE,d.methodOf=TE,d.mixin=yo,d.negate=Ts,d.nthArg=yE,d.omit=_v,d.omitBy=Fv,d.once=SD,d.orderBy=aD,d.over=AE,d.overArgs=yD,d.overEvery=IE,d.overSome=_E,d.partial=ho,d.partialRight=Pc,d.partition=oD,d.pick=Nv,d.pickBy=Hc,d.property=ef,d.propertyOf=FE,d.pull=a0,d.pullAll=Fc,d.pullAllBy=o0,d.pullAllWith=u0,d.pullAt=l0,d.range=NE,d.rangeRight=bE,d.rearg=AD,d.reject=cD,d.remove=c0,d.rest=ID,d.reverse=co,d.sampleSize=pD,d.set=Cv,d.setWith=wv,d.shuffle=dD,d.slice=f0,d.sortBy=mD,d.sortedUniq=v0,d.sortedUniqBy=E0,d.split=Kv,d.spread=_D,d.tail=T0,d.take=S0,d.takeRight=y0,d.takeRightWhile=A0,d.takeWhile=I0,d.tap=M0,d.throttle=FD,d.thru=ms,d.toArray=Gc,d.toPairs=zc,d.toPairsIn=Qc,d.toPath=kE,d.toPlainObject=qc,d.transform=Ov,d.unary=ND,d.union=_0,d.unionBy=F0,d.unionWith=N0,d.uniq=b0,d.uniqBy=C0,d.uniqWith=w0,d.unset=xv,d.unzip=fo,d.unzipWith=Nc,d.update=kv,d.updateWith=Rv,d.values=xr,d.valuesIn=Lv,d.without=O0,d.words=Zc,d.wrap=bD,d.xor=x0,d.xorBy=k0,d.xorWith=R0,d.zip=L0,d.zipObject=B0,d.zipObjectDeep=P0,d.zipWith=U0,d.entries=zc,d.entriesIn=Qc,d.extend=Yc,d.extendWith=As,yo(d,d),d.add=LE,d.attempt=Kc,d.camelCase=Mv,d.capitalize=Jc,d.ceil=BE,d.clamp=Bv,d.clone=wD,d.cloneDeep=xD,d.cloneDeepWith=kD,d.cloneWith=OD,d.conformsTo=RD,d.deburr=Xc,d.defaultTo=hE,d.divide=PE,d.endsWith=$v,d.eq=Kn,d.escape=Vv,d.escapeRegExp=Gv,d.every=Q0,d.find=X0,d.findIndex=yc,d.findKey=cv,d.findLast=Z0,d.findLastIndex=Ac,d.findLastKey=fv,d.floor=UE,d.forEach=Cc,d.forEachRight=wc,d.forIn=pv,d.forInRight=dv,d.forOwn=hv,d.forOwnRight=gv,d.get=Do,d.gt=LD,d.gte=BD,d.has=vv,d.hasIn=vo,d.head=_c,d.identity=En,d.includes=rD,d.indexOf=Zm,d.inRange=Pv,d.invoke=Sv,d.isArguments=sr,d.isArray=re,d.isArrayBuffer=PD,d.isArrayLike=Dn,d.isArrayLikeObject=Me,d.isBoolean=UD,d.isBuffer=Wt,d.isDate=MD,d.isElement=$D,d.isEmpty=VD,d.isEqual=GD,d.isEqualWith=jD,d.isError=go,d.isFinite=qD,d.isFunction=Ft,d.isInteger=Uc,d.isLength=Ss,d.isMap=Mc,d.isMatch=YD,d.isMatchWith=WD,d.isNaN=HD,d.isNative=zD,d.isNil=JD,d.isNull=QD,d.isNumber=$c,d.isObject=Le,d.isObjectLike=Be,d.isPlainObject=ui,d.isRegExp=mo,d.isSafeInteger=XD,d.isSet=Vc,d.isString=ys,d.isSymbol=_n,d.isTypedArray=Or,d.isUndefined=ZD,d.isWeakMap=KD,d.isWeakSet=ev,d.join=r0,d.kebabCase=jv,d.last=Vn,d.lastIndexOf=i0,d.lowerCase=qv,d.lowerFirst=Yv,d.lt=nv,d.lte=tv,d.max=ME,d.maxBy=$E,d.mean=VE,d.meanBy=GE,d.min=jE,d.minBy=qE,d.stubArray=Io,d.stubFalse=_o,d.stubObject=CE,d.stubString=wE,d.stubTrue=OE,d.multiply=YE,d.nth=s0,d.noConflict=SE,d.noop=Ao,d.now=vs,d.pad=Wv,d.padEnd=Hv,d.padStart=zv,d.parseInt=Qv,d.random=Uv,d.reduce=uD,d.reduceRight=lD,d.repeat=Jv,d.replace=Xv,d.result=bv,d.round=WE,d.runInContext=y,d.sample=fD,d.size=hD,d.snakeCase=Zv,d.some=gD,d.sortedIndex=p0,d.sortedIndexBy=d0,d.sortedIndexOf=h0,d.sortedLastIndex=g0,d.sortedLastIndexBy=m0,d.sortedLastIndexOf=D0,d.startCase=eE,d.startsWith=nE,d.subtract=HE,d.sum=zE,d.sumBy=QE,d.template=tE,d.times=xE,d.toFinite=Nt,d.toInteger=se,d.toLength=jc,d.toLower=rE,d.toNumber=Gn,d.toSafeInteger=rv,d.toString=Se,d.toUpper=iE,d.trim=sE,d.trimEnd=aE,d.trimStart=oE,d.truncate=uE,d.unescape=lE,d.uniqueId=RE,d.upperCase=cE,d.upperFirst=Eo,d.each=Cc,d.eachRight=wc,d.first=_c,yo(d,(function(){var e={};return ut(d,function(i,o){Ie.call(d.prototype,o)||(e[o]=i)}),e})(),{chain:!1}),d.VERSION=s,Bn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),Bn(["drop","take"],function(e,i){pe.prototype[e]=function(o){o=o===r?1:Qe(se(o),0);var l=this.__filtered__&&!i?new pe(this):this.clone();return l.__filtered__?l.__takeCount__=an(o,l.__takeCount__):l.__views__.push({size:an(o,kn),type:e+(l.__dir__<0?"Right":"")}),l},pe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Bn(["filter","map","takeWhile"],function(e,i){var o=i+1,l=o==Lt||o==Bt;pe.prototype[e]=function(p){var g=this.clone();return g.__iteratees__.push({iteratee:K(p,3),type:o}),g.__filtered__=g.__filtered__||l,g}}),Bn(["head","last"],function(e,i){var o="take"+(i?"Right":"");pe.prototype[e]=function(){return this[o](1).value()[0]}}),Bn(["initial","tail"],function(e,i){var o="drop"+(i?"":"Right");pe.prototype[e]=function(){return this.__filtered__?new pe(this):this[o](1)}}),pe.prototype.compact=function(){return this.filter(En)},pe.prototype.find=function(e){return this.filter(e).head()},pe.prototype.findLast=function(e){return this.reverse().find(e)},pe.prototype.invokeMap=le(function(e,i){return typeof e=="function"?new pe(this):this.map(function(o){return ti(o,e,i)})}),pe.prototype.reject=function(e){return this.filter(Ts(K(e)))},pe.prototype.slice=function(e,i){e=se(e);var o=this;return o.__filtered__&&(e>0||i<0)?new pe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),i!==r&&(i=se(i),o=i<0?o.dropRight(-i):o.take(i-e)),o)},pe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},pe.prototype.toArray=function(){return this.take(kn)},ut(pe.prototype,function(e,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),l=/^(?:head|last)$/.test(i),p=d[l?"take"+(i=="last"?"Right":""):i],g=l||/^find/.test(i);p&&(d.prototype[i]=function(){var v=this.__wrapped__,E=l?[1]:arguments,A=v instanceof pe,w=E[0],O=A||re(v),R=function(fe){var ge=p.apply(d,Mt([fe],E));return l&&M?ge[0]:ge};O&&o&&typeof w=="function"&&w.length!=1&&(A=O=!1);var M=this.__chain__,z=!!this.__actions__.length,ee=g&&!M,ae=A&&!z;if(!g&&O){v=ae?v:new pe(this);var ne=e.apply(v,E);return ne.__actions__.push({func:ms,args:[R],thisArg:r}),new Un(ne,M)}return ee&&ae?e.apply(this,E):(ne=this.thru(R),ee?l?ne.value()[0]:ne.value():ne)})}),Bn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Gi[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var p=arguments;if(l&&!this.__chain__){var g=this.value();return i.apply(re(g)?g:[],p)}return this[o](function(v){return i.apply(re(v)?v:[],p)})}}),ut(pe.prototype,function(e,i){var o=d[i];if(o){var l=o.name+"";Ie.call(Fr,l)||(Fr[l]=[]),Fr[l].push({name:i,func:o})}}),Fr[ls(r,X).name]=[{name:"wrapper",func:r}],pe.prototype.clone=lg,pe.prototype.reverse=cg,pe.prototype.value=fg,d.prototype.at=$0,d.prototype.chain=V0,d.prototype.commit=G0,d.prototype.next=j0,d.prototype.plant=Y0,d.prototype.reverse=W0,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=H0,d.prototype.first=d.prototype.head,Qr&&(d.prototype[Qr]=q0),d}),Ar=Gh();Xt?((Xt.exports=Ar)._=Ar,Ta._=Ar):en._=Ar}).call(yy)})(hi,hi.exports)),hi.exports}var Iy=Ay();const Ot=Sy(Iy);function _y(){return{convert:n=>{if(n===null||n===void 0)return null;switch(typeof n){case"boolean":return n;case"string":{const t=n.toLowerCase().trim();return t==="true"||t==="t"||t==="1"}case"number":return n!==0;default:return null}},asString:n=>String(n),type:n=>n.boolean().optional()}}function bn(n,t){const r=s=>t.convert(s[n]);return{name:Fy(n),key:n,asEnv:s=>({[n]:t.asString(s)}),zod:{type:t.type},get:r,getOrDefault:(s,a)=>r(s)??a}}function Fy(n){return n.toLowerCase().replace(/([-_][a-z])/gi,t=>t.toUpperCase().replace("-","").replace("_",""))}bn("MAGIDOC_GENERATE",_y());function Ns(n){return{convert:t=>{if(Array.isArray(t))return t;if(typeof t=="string"){const r=JSON.parse(t);return Array.isArray(r)?r:null}return null},asString:t=>JSON.stringify(t),type:t=>t.array(n(t)).optional()}}function vf(n){return{convert:t=>{if(typeof t=="object")return t;if(typeof t=="string"){const r=JSON.parse(t);return typeof r!="object"?null:r}return null},asString:t=>JSON.stringify(t),type:t=>t.record(t.string(),n(t).optional()).optional()}}function bs(){return{convert:n=>n==null||n===""?null:String(n),asString:n=>String(n),type:n=>n.string().optional()}}function Ef(n){return{convert:t=>t==null||!n.find(r=>r===t)?null:t,asString:t=>String(t),type:t=>t.enum(n).optional()}}var Qs={APP_LOGO:bn("APP_LOGO",bs()),APP_TITLE:bn("APP_TITLE",bs()),APP_FAVICON:bn("APP_FAVICON",bs()),SITE_ROOT:bn("SITE_ROOT",bs()),SITE_META:bn("SITE_META",vf(n=>n.string())),CUSTOM_STYLES:bn("CUSTOM_STYLES",Ns(n=>n.string())),FIELDS_SORTING:bn("FIELDS_SORTING",Ef(["default","alphabetical"])),ARGUMENTS_SORTING:bn("ARGUMENTS_SORTING",Ef(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:bn("QUERY_GENERATION_FACTORIES",vf(n=>n.union([n.string(),n.boolean(),n.number(),n.null(),n.record(n.string(),n.unknown())]))),PAGES:bn("PAGES",Ns(n=>{const t=n.lazy(()=>n.object({title:n.string().min(1),content:n.union([n.array(t),n.string().min(1)])}));return t})),EXTERNAL_LINKS:bn("EXTERNAL_LINKS",Ns(n=>n.object({label:n.string().min(1),href:n.string().min(1),position:n.union([n.literal("header"),n.literal("navigation")]).optional(),kind:n.string().min(1).optional(),group:n.string().min(1).optional()}))),DIRECTIVES:bn("DIRECTIVES",Ns(n=>n.object({name:n.string().min(1),args:n.array(n.string())})))};const Ny="/homecare-document",by="https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/logo/origin-homecare-favicon.ico",Cy="https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/logo/origin-homecare-logo-white.png",wy=`[{"title":"Introduction","content":[{"title":"Welcome","content":"\\n# 👋 Welcome to Homecare API\\n\\nThe Homecare API provides a comprehensive GraphQL interface for managing home healthcare services. This documentation will guide you through authentication, available queries, mutations, and best practices.\\n\\n## 🚀 Quick Start\\n\\n1. Obtain your API key from the admin panel\\n2. Set up authentication headers\\n3. Start making GraphQL queries\\n4. Explore the schema using Apollo Studio\\n\\n## 📚 What's Included\\n\\n- **Queries**: Retrieve patient data, appointments, and medical records\\n- **Mutations**: Create, update, and manage healthcare operations\\n- **Subscriptions**: Real-time updates for critical events\\n- **Type System**: Fully typed GraphQL schema for type safety\\n\\n## 🔗 Useful Links\\n\\n- [Apollo GraphQL Studio](https://studio.apollographql.com/sandbox/explorer)\\n- [GraphQL Official Documentation](https://graphql.org)\\n              "},{"title":"Authentication","content":"\\n# 🔒 Authentication\\n\\nAll API requests require authentication using an API key. Include the key in your request headers.\\n\\n## API Key Header\\n\\n| Header Name | Value        | Description                            |\\n| ----------- | ------------ | -------------------------------------- |\\n| x-api-key   | YOUR_API_KEY | Your unique API key for authentication |\\n\\n## Example Request\\n\\n~~~bash\\ncurl -X POST https://origin-homecare.myorigin.icu/graphql \\\\\\n  -H \\"Content-Type: application/json\\" \\\\\\n  -H \\"x-api-key: YOUR_API_KEY\\" \\\\\\n  -d '{\\"query\\": \\"{ __typename }\\"}'\\n~~~\\n\\n## JavaScript/TypeScript Example\\n\\n~~~javascript\\nconst headers = {\\n  \\"Content-Type\\": \\"application/json\\",\\n  \\"x-api-key\\": \\"YOUR_API_KEY\\",\\n};\\n\\nfetch(\\"https://origin-homecare.myorigin.icu/graphql\\", {\\n  method: \\"POST\\",\\n  headers: headers,\\n  body: JSON.stringify({\\n    query: \`\\n      query {\\n        # Your query here\\n      }\\n    \`,\\n  }),\\n});\\n~~~\\n\\n## 🔑 Security Best Practices\\n\\n- Never expose API keys in client-side code\\n- Store keys in environment variables\\n- Rotate keys regularly\\n- Use different keys for different environments\\n- Implement rate limiting on your application layer\\n              "},{"title":"Environments","content":"\\n# 🌍 API Environments\\n\\nWe provide two separate environments for development and production use.\\n\\n## Environment Endpoints\\n\\n| Environment | GraphQL Endpoint                             | Purpose                     |\\n| ----------- | -------------------------------------------- | --------------------------- |\\n| UAT         | https://origin-homecare.myorigin.icu/graphql | Testing and development     |\\n| Production  | https://origin-homecare.myorigin.net/graphql | Live production environment |\\n\\n## Apollo GraphQL Studio\\n\\nTest your queries interactively using Apollo Studio:\\n\\n**🔗 [https://studio.apollographql.com/sandbox/explorer](https://studio.apollographql.com/sandbox/explorer)**\\n\\n### Setting Up Apollo Studio\\n\\n1. Open Apollo Studio Sandbox\\n2. Enter the endpoint URL (UAT or Production)\\n3. Add your API key in the Headers tab:\\n   ~~~json\\n   {\\n     \\"x-api-key\\": \\"YOUR_API_KEY\\"\\n   }\\n   ~~~\\n4. Start exploring the schema and making queries\\n\\n## Environment-Specific Notes\\n\\n### UAT Environment\\n\\n- Use for testing new features\\n- Data may be reset periodically\\n- Performance may vary\\n- Latest features available first\\n\\n### Production Environment\\n\\n- Stable and reliable\\n- Real customer data\\n- Rate limiting enforced\\n- High availability guaranteed\\n              "}]},{"title":"Getting Started","content":[{"title":"Making Your First Query","content":"\\n# 🎯 Making Your First Query\\n\\nLearn how to make your first GraphQL query to the Homecare API.\\n\\n## Basic Query Structure\\n\\nGraphQL queries follow a simple structure:\\n\\n~~~graphql\\nquery {\\n  fieldName {\\n    subField1\\n    subField2\\n  }\\n}\\n~~~\\n\\n## Example: Introspection Query\\n\\nTest your connection with a simple introspection query:\\n\\n~~~graphql\\nquery {\\n  __schema {\\n    queryType {\\n      name\\n    }\\n  }\\n}\\n~~~\\n\\n## Next Steps\\n\\n1. Browse the **Schema** section to explore available types\\n2. Check the **Queries** section for data retrieval operations\\n3. Review the **Mutations** section for data modification operations\\n4. Explore examples in the Apollo Studio playground\\n              "},{"title":"Best Practices","content":"\\n# ✨ Best Practices\\n\\nFollow these guidelines to build robust and efficient integrations.\\n\\n## Query Optimization\\n\\n### ✅ Do's\\n\\n- Request only the fields you need\\n- Use fragments for reusable field sets\\n- Implement pagination for large datasets\\n- Use variables for dynamic queries\\n- Cache responses when appropriate\\n\\n### ❌ Don'ts\\n\\n- Avoid requesting deeply nested data unnecessarily\\n- Don't fetch all fields with wildcard patterns\\n- Avoid making queries in loops\\n- Don't ignore GraphQL errors\\n\\n## Example: Using Variables\\n\\n~~~graphql\\nquery GetPatient($id: ID!) {\\n  patient(id: $id) {\\n    id\\n    name\\n    dateOfBirth\\n  }\\n}\\n~~~\\n\\nVariables:\\n\\n~~~json\\n{\\n  \\"id\\": \\"12345\\"\\n}\\n~~~\\n\\n## Error Handling\\n\\nAlways handle both network errors and GraphQL errors:\\n\\n~~~javascript\\ntry {\\n  const response = await fetch(endpoint, options);\\n  const data = await response.json();\\n\\n  if (data.errors) {\\n    console.error(\\"GraphQL Errors:\\", data.errors);\\n  }\\n\\n  return data.data;\\n} catch (error) {\\n  console.error(\\"Network Error:\\", error);\\n}\\n~~~\\n\\n## Rate Limiting\\n\\n- Respect rate limits to avoid throttling\\n- Implement exponential backoff for retries\\n- Use batch queries when possible\\n- Consider implementing request queuing\\n              "}]}]`,Oy="true",mp={SITE_ROOT:Ny,APP_FAVICON:by,APP_LOGO:Cy,PAGES:wy,MAGIDOC_GENERATE:Oy};function __(n){return n.get(mp)}function Js(n,t){return n.getOrDefault(mp,t)}function Xs(){return Js(Qs.SITE_ROOT,PT)}function me(n,t){if(!!!n)throw new Error(t)}function xt(n){return typeof n=="object"&&n!==null}function it(n,t){if(!!!n)throw new Error(t??"Unexpected invariant triggered.")}const xy=/\r\n|[\n\r]/g;function jo(n,t){let r=0,s=1;for(const a of n.body.matchAll(xy)){if(typeof a.index=="number"||it(!1),a.index>=t)break;r=a.index+a[0].length,s+=1}return{line:s,column:t+1-r}}function ky(n){return Dp(n.source,jo(n.source,n.start))}function Dp(n,t){const r=n.locationOffset.column-1,s="".padStart(r)+n.body,a=t.line-1,u=n.locationOffset.line-1,c=t.line+u,f=t.line===1?r:0,h=t.column+f,m=`${n.name}:${c}:${h}
`,D=s.split(/\r\n|[\n\r]/g),T=D[a];if(T.length>120){const I=Math.floor(h/80),k=h%80,F=[];for(let B=0;B<T.length;B+=80)F.push(T.slice(B,B+80));return m+Tf([[`${c} |`,F[0]],...F.slice(1,I+1).map(B=>["|",B]),["|","^".padStart(k)],["|",F[I+1]]])}return m+Tf([[`${c-1} |`,D[a-1]],[`${c} |`,T],["|","^".padStart(h)],[`${c+1} |`,D[a+1]]])}function Tf(n){const t=n.filter(([s,a])=>a!==void 0),r=Math.max(...t.map(([s])=>s.length));return t.map(([s,a])=>s.padStart(r)+(a?" "+a:"")).join(`
`)}function Ry(n){const t=n[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:n[1],positions:n[2],path:n[3],originalError:n[4],extensions:n[5]}:t}class L extends Error{constructor(t,...r){var s,a,u;const{nodes:c,source:f,positions:h,path:m,originalError:D,extensions:T}=Ry(r);super(t),this.name="GraphQLError",this.path=m??void 0,this.originalError=D??void 0,this.nodes=Sf(Array.isArray(c)?c:c?[c]:void 0);const I=Sf((s=this.nodes)===null||s===void 0?void 0:s.map(F=>F.loc).filter(F=>F!=null));this.source=f??(I==null||(a=I[0])===null||a===void 0?void 0:a.source),this.positions=h??I?.map(F=>F.start),this.locations=h&&f?h.map(F=>jo(f,F)):I?.map(F=>jo(F.source,F.start));const k=xt(D?.extensions)?D?.extensions:void 0;this.extensions=(u=T??k)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),D!=null&&D.stack?Object.defineProperty(this,"stack",{value:D.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+ky(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+Dp(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Sf(n){return n===void 0||n.length===0?void 0:n}function Ze(n,t,r){return new L(`Syntax Error: ${r}`,{source:n,positions:[t]})}class Ly{constructor(t,r,s){this.start=t.start,this.end=r.end,this.startToken=t,this.endToken=r,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class vp{constructor(t,r,s,a,u,c){this.kind=t,this.start=r,this.end=s,this.line=a,this.column=u,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Ep={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},By=new Set(Object.keys(Ep));function yf(n){const t=n?.kind;return typeof t=="string"&&By.has(t)}var qn;(function(n){n.QUERY="query",n.MUTATION="mutation",n.SUBSCRIPTION="subscription"})(qn||(qn={}));var J;(function(n){n.QUERY="QUERY",n.MUTATION="MUTATION",n.SUBSCRIPTION="SUBSCRIPTION",n.FIELD="FIELD",n.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",n.FRAGMENT_SPREAD="FRAGMENT_SPREAD",n.INLINE_FRAGMENT="INLINE_FRAGMENT",n.VARIABLE_DEFINITION="VARIABLE_DEFINITION",n.SCHEMA="SCHEMA",n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.FIELD_DEFINITION="FIELD_DEFINITION",n.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.ENUM_VALUE="ENUM_VALUE",n.INPUT_OBJECT="INPUT_OBJECT",n.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(J||(J={}));var S;(function(n){n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.VARIABLE="Variable",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition",n.SCHEMA_EXTENSION="SchemaExtension",n.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",n.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",n.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",n.UNION_TYPE_EXTENSION="UnionTypeExtension",n.ENUM_TYPE_EXTENSION="EnumTypeExtension",n.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(S||(S={}));function qo(n){return n===9||n===32}function bi(n){return n>=48&&n<=57}function Tp(n){return n>=97&&n<=122||n>=65&&n<=90}function du(n){return Tp(n)||n===95}function Sp(n){return Tp(n)||bi(n)||n===95}function Py(n){var t;let r=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let c=0;c<n.length;++c){var u;const f=n[c],h=Uy(f);h!==f.length&&(s=(u=s)!==null&&u!==void 0?u:c,a=c,c!==0&&h<r&&(r=h))}return n.map((c,f)=>f===0?c:c.slice(r)).slice((t=s)!==null&&t!==void 0?t:0,a+1)}function Uy(n){let t=0;for(;t<n.length&&qo(n.charCodeAt(t));)++t;return t}function My(n,t){const r=n.replace(/"""/g,'\\"""'),s=r.split(/\r\n|[\n\r]/g),a=s.length===1,u=s.length>1&&s.slice(1).every(k=>k.length===0||qo(k.charCodeAt(0))),c=r.endsWith('\\"""'),f=n.endsWith('"')&&!c,h=n.endsWith("\\"),m=f||h,D=!a||n.length>70||m||u||c;let T="";const I=a&&qo(n.charCodeAt(0));return(D&&!I||u)&&(T+=`
`),T+=r,(D||m)&&(T+=`
`),'"""'+T+'"""'}var x;(function(n){n.SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment"})(x||(x={}));class $y{constructor(t){const r=new vp(x.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==x.EOF)do if(t.next)t=t.next;else{const r=Gy(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===x.COMMENT);return t}}function Vy(n){return n===x.BANG||n===x.DOLLAR||n===x.AMP||n===x.PAREN_L||n===x.PAREN_R||n===x.SPREAD||n===x.COLON||n===x.EQUALS||n===x.AT||n===x.BRACKET_L||n===x.BRACKET_R||n===x.BRACE_L||n===x.PIPE||n===x.BRACE_R}function $r(n){return n>=0&&n<=55295||n>=57344&&n<=1114111}function Zs(n,t){return yp(n.charCodeAt(t))&&Ap(n.charCodeAt(t+1))}function yp(n){return n>=55296&&n<=56319}function Ap(n){return n>=56320&&n<=57343}function pr(n,t){const r=n.source.body.codePointAt(t);if(r===void 0)return x.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function Ye(n,t,r,s,a){const u=n.line,c=1+r-n.lineStart;return new vp(t,r,s,u,c,a)}function Gy(n,t){const r=n.source.body,s=r.length;let a=t;for(;a<s;){const u=r.charCodeAt(a);switch(u){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++n.line,n.lineStart=a;continue;case 13:r.charCodeAt(a+1)===10?a+=2:++a,++n.line,n.lineStart=a;continue;case 35:return jy(n,a);case 33:return Ye(n,x.BANG,a,a+1);case 36:return Ye(n,x.DOLLAR,a,a+1);case 38:return Ye(n,x.AMP,a,a+1);case 40:return Ye(n,x.PAREN_L,a,a+1);case 41:return Ye(n,x.PAREN_R,a,a+1);case 46:if(r.charCodeAt(a+1)===46&&r.charCodeAt(a+2)===46)return Ye(n,x.SPREAD,a,a+3);break;case 58:return Ye(n,x.COLON,a,a+1);case 61:return Ye(n,x.EQUALS,a,a+1);case 64:return Ye(n,x.AT,a,a+1);case 91:return Ye(n,x.BRACKET_L,a,a+1);case 93:return Ye(n,x.BRACKET_R,a,a+1);case 123:return Ye(n,x.BRACE_L,a,a+1);case 124:return Ye(n,x.PIPE,a,a+1);case 125:return Ye(n,x.BRACE_R,a,a+1);case 34:return r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34?Qy(n,a):Yy(n,a)}if(bi(u)||u===45)return qy(n,a,u);if(du(u))return Jy(n,a);throw Ze(n.source,a,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$r(u)||Zs(r,a)?`Unexpected character: ${pr(n,a)}.`:`Invalid character: ${pr(n,a)}.`)}return Ye(n,x.EOF,s,s)}function jy(n,t){const r=n.source.body,s=r.length;let a=t+1;for(;a<s;){const u=r.charCodeAt(a);if(u===10||u===13)break;if($r(u))++a;else if(Zs(r,a))a+=2;else break}return Ye(n,x.COMMENT,t,a,r.slice(t+1,a))}function qy(n,t,r){const s=n.source.body;let a=t,u=r,c=!1;if(u===45&&(u=s.charCodeAt(++a)),u===48){if(u=s.charCodeAt(++a),bi(u))throw Ze(n.source,a,`Invalid number, unexpected digit after 0: ${pr(n,a)}.`)}else a=wo(n,a,u),u=s.charCodeAt(a);if(u===46&&(c=!0,u=s.charCodeAt(++a),a=wo(n,a,u),u=s.charCodeAt(a)),(u===69||u===101)&&(c=!0,u=s.charCodeAt(++a),(u===43||u===45)&&(u=s.charCodeAt(++a)),a=wo(n,a,u),u=s.charCodeAt(a)),u===46||du(u))throw Ze(n.source,a,`Invalid number, expected digit but got: ${pr(n,a)}.`);return Ye(n,c?x.FLOAT:x.INT,t,a,s.slice(t,a))}function wo(n,t,r){if(!bi(r))throw Ze(n.source,t,`Invalid number, expected digit but got: ${pr(n,t)}.`);const s=n.source.body;let a=t+1;for(;bi(s.charCodeAt(a));)++a;return a}function Yy(n,t){const r=n.source.body,s=r.length;let a=t+1,u=a,c="";for(;a<s;){const f=r.charCodeAt(a);if(f===34)return c+=r.slice(u,a),Ye(n,x.STRING,t,a+1,c);if(f===92){c+=r.slice(u,a);const h=r.charCodeAt(a+1)===117?r.charCodeAt(a+2)===123?Wy(n,a):Hy(n,a):zy(n,a);c+=h.value,a+=h.size,u=a;continue}if(f===10||f===13)break;if($r(f))++a;else if(Zs(r,a))a+=2;else throw Ze(n.source,a,`Invalid character within String: ${pr(n,a)}.`)}throw Ze(n.source,a,"Unterminated string.")}function Wy(n,t){const r=n.source.body;let s=0,a=3;for(;a<12;){const u=r.charCodeAt(t+a++);if(u===125){if(a<5||!$r(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|gi(u),s<0)break}throw Ze(n.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+a)}".`)}function Hy(n,t){const r=n.source.body,s=Af(r,t+2);if($r(s))return{value:String.fromCodePoint(s),size:6};if(yp(s)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const a=Af(r,t+8);if(Ap(a))return{value:String.fromCodePoint(s,a),size:12}}throw Ze(n.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Af(n,t){return gi(n.charCodeAt(t))<<12|gi(n.charCodeAt(t+1))<<8|gi(n.charCodeAt(t+2))<<4|gi(n.charCodeAt(t+3))}function gi(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function zy(n,t){const r=n.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ze(n.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function Qy(n,t){const r=n.source.body,s=r.length;let a=n.lineStart,u=t+3,c=u,f="";const h=[];for(;u<s;){const m=r.charCodeAt(u);if(m===34&&r.charCodeAt(u+1)===34&&r.charCodeAt(u+2)===34){f+=r.slice(c,u),h.push(f);const D=Ye(n,x.BLOCK_STRING,t,u+3,Py(h).join(`
`));return n.line+=h.length-1,n.lineStart=a,D}if(m===92&&r.charCodeAt(u+1)===34&&r.charCodeAt(u+2)===34&&r.charCodeAt(u+3)===34){f+=r.slice(c,u),c=u+1,u+=4;continue}if(m===10||m===13){f+=r.slice(c,u),h.push(f),m===13&&r.charCodeAt(u+1)===10?u+=2:++u,f="",c=u,a=u;continue}if($r(m))++u;else if(Zs(r,u))u+=2;else throw Ze(n.source,u,`Invalid character within String: ${pr(n,u)}.`)}throw Ze(n.source,u,"Unterminated string.")}function Jy(n,t){const r=n.source.body,s=r.length;let a=t+1;for(;a<s;){const u=r.charCodeAt(a);if(Sp(u))++a;else break}return Ye(n,x.NAME,t,a,r.slice(t,a))}const Xy=10,Ip=2;function G(n){return Ks(n,[])}function Ks(n,t){switch(typeof n){case"string":return JSON.stringify(n);case"function":return n.name?`[function ${n.name}]`:"[function]";case"object":return Zy(n,t);default:return String(n)}}function Zy(n,t){if(n===null)return"null";if(t.includes(n))return"[Circular]";const r=[...t,n];if(Ky(n)){const s=n.toJSON();if(s!==n)return typeof s=="string"?s:Ks(s,r)}else if(Array.isArray(n))return nA(n,r);return eA(n,r)}function Ky(n){return typeof n.toJSON=="function"}function eA(n,t){const r=Object.entries(n);return r.length===0?"{}":t.length>Ip?"["+tA(n)+"]":"{ "+r.map(([a,u])=>a+": "+Ks(u,t)).join(", ")+" }"}function nA(n,t){if(n.length===0)return"[]";if(t.length>Ip)return"[Array]";const r=Math.min(Xy,n.length),s=n.length-r,a=[];for(let u=0;u<r;++u)a.push(Ks(n[u],t));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function tA(n){const t=Object.prototype.toString.call(n).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof n.constructor=="function"){const r=n.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}const rA=globalThis.process&&!0,vt=rA?function(t,r){return t instanceof r}:function(t,r){if(t instanceof r)return!0;if(typeof t=="object"&&t!==null){var s;const a=r.prototype[Symbol.toStringTag],u=Symbol.toStringTag in t?t[Symbol.toStringTag]:(s=t.constructor)===null||s===void 0?void 0:s.name;if(a===u){const c=G(t);throw new Error(`Cannot use ${a} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class _p{constructor(t,r="GraphQL request",s={line:1,column:1}){typeof t=="string"||me(!1,`Body must be a string. Received: ${G(t)}.`),this.body=t,this.name=r,this.locationOffset=s,this.locationOffset.line>0||me(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||me(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function iA(n){return vt(n,_p)}function sA(n,t){const r=new Fp(n,t),s=r.parseDocument();return Object.defineProperty(s,"tokenCount",{enumerable:!1,value:r.tokenCount}),s}function aA(n,t){const r=new Fp(n,t);r.expectToken(x.SOF);const s=r.parseValueLiteral(!1);return r.expectToken(x.EOF),s}class Fp{constructor(t,r={}){const s=iA(t)?t:new _p(t);this._lexer=new $y(s),this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(x.NAME);return this.node(t,{kind:S.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:S.DOCUMENT,definitions:this.many(x.SOF,this.parseDefinition,x.EOF)})}parseDefinition(){if(this.peek(x.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===x.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw Ze(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(x.BRACE_L))return this.node(t,{kind:S.OPERATION_DEFINITION,operation:qn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(x.NAME)&&(s=this.parseName()),this.node(t,{kind:S.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(x.NAME);switch(t.value){case"query":return qn.QUERY;case"mutation":return qn.MUTATION;case"subscription":return qn.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(x.PAREN_L,this.parseVariableDefinition,x.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:S.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(x.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(x.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(x.DOLLAR),this.node(t,{kind:S.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:S.SELECTION_SET,selections:this.many(x.BRACE_L,this.parseSelection,x.BRACE_R)})}parseSelection(){return this.peek(x.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let s,a;return this.expectOptionalToken(x.COLON)?(s=r,a=this.parseName()):a=r,this.node(t,{kind:S.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(x.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(x.PAREN_L,r,x.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(r,{kind:S.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(x.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(x.NAME)?this.node(t,{kind:S.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:S.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:S.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:S.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case x.BRACKET_L:return this.parseList(t);case x.BRACE_L:return this.parseObject(t);case x.INT:return this.advanceLexer(),this.node(r,{kind:S.INT,value:r.value});case x.FLOAT:return this.advanceLexer(),this.node(r,{kind:S.FLOAT,value:r.value});case x.STRING:case x.BLOCK_STRING:return this.parseStringLiteral();case x.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:S.BOOLEAN,value:!0});case"false":return this.node(r,{kind:S.BOOLEAN,value:!1});case"null":return this.node(r,{kind:S.NULL});default:return this.node(r,{kind:S.ENUM,value:r.value})}case x.DOLLAR:if(t)if(this.expectToken(x.DOLLAR),this._lexer.token.kind===x.NAME){const s=this._lexer.token.value;throw Ze(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:S.STRING,value:t.value,block:t.kind===x.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:S.LIST,values:this.any(x.BRACKET_L,r,x.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:S.OBJECT,fields:this.any(x.BRACE_L,r,x.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(r,{kind:S.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(x.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(x.AT),this.node(r,{kind:S.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(x.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(x.BRACKET_R),r=this.node(t,{kind:S.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(x.BANG)?this.node(t,{kind:S.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:S.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(x.STRING)||this.peek(x.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);return this.node(t,{kind:S.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(x.COLON);const s=this.parseNamedType();return this.node(t,{kind:S.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(t,{kind:S.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:a})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(t,{kind:S.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:a,directives:u,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(x.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseFieldDefinition,x.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(x.COLON);const u=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(t,{kind:S.FIELD_DEFINITION,description:r,name:s,arguments:a,type:u,directives:c})}parseArgumentDefs(){return this.optionalMany(x.PAREN_L,this.parseInputValueDef,x.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(x.COLON);const a=this.parseTypeReference();let u;this.expectOptionalToken(x.EQUALS)&&(u=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(t,{kind:S.INPUT_VALUE_DEFINITION,description:r,name:s,type:a,defaultValue:u,directives:c})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(t,{kind:S.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:a,directives:u,fields:c})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(t,{kind:S.UNION_TYPE_DEFINITION,description:r,name:s,directives:a,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(x.EQUALS)?this.delimitedMany(x.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(t,{kind:S.ENUM_TYPE_DEFINITION,description:r,name:s,directives:a,values:u})}parseEnumValuesDefinition(){return this.optionalMany(x.BRACE_L,this.parseEnumValueDefinition,x.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(t,{kind:S.ENUM_VALUE_DEFINITION,description:r,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ze(this._lexer.source,this._lexer.token.start,`${Cs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(t,{kind:S.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:a,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseInputValueDef,x.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===x.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:S.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:S.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(t,{kind:S.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:a,fields:u})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(t,{kind:S.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:a,fields:u})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:S.UNION_TYPE_EXTENSION,name:r,directives:s,types:a})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:S.ENUM_TYPE_EXTENSION,name:r,directives:s,values:a})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:S.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:a})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(x.AT);const s=this.parseName(),a=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(t,{kind:S.DIRECTIVE_DEFINITION,description:r,name:s,arguments:a,repeatable:u,locations:c})}parseDirectiveLocations(){return this.delimitedMany(x.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(J,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new Ly(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw Ze(this._lexer.source,r.start,`Expected ${Np(t)}, found ${Cs(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===x.NAME&&r.value===t)this.advanceLexer();else throw Ze(this._lexer.source,r.start,`Expected "${t}", found ${Cs(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===x.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return Ze(this._lexer.source,r.start,`Unexpected ${Cs(r)}.`)}any(t,r,s){this.expectToken(t);const a=[];for(;!this.expectOptionalToken(s);)a.push(r.call(this));return a}optionalMany(t,r,s){if(this.expectOptionalToken(t)){const a=[];do a.push(r.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(t,r,s){this.expectToken(t);const a=[];do a.push(r.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(t,r){this.expectOptionalToken(t);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(r.kind!==x.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ze(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function Cs(n){const t=n.value;return Np(n.kind)+(t!=null?` "${t}"`:"")}function Np(n){return Vy(n)?`"${n}"`:n}const oA=5;function zt(n,t){const[r,s]=t?[n,t]:[void 0,n];let a=" Did you mean ";r&&(a+=r+" ");const u=s.map(h=>`"${h}"`);switch(u.length){case 0:return"";case 1:return a+u[0]+"?";case 2:return a+u[0]+" or "+u[1]+"?"}const c=u.slice(0,oA),f=c.pop();return a+c.join(", ")+", or "+f+"?"}function If(n){return n}function dr(n,t){const r=Object.create(null);for(const s of n)r[t(s)]=s;return r}function or(n,t,r){const s=Object.create(null);for(const a of n)s[t(a)]=r(a);return s}function Ct(n,t){const r=Object.create(null);for(const s of Object.keys(n))r[s]=t(n[s],s);return r}function hu(n,t){let r=0,s=0;for(;r<n.length&&s<t.length;){let a=n.charCodeAt(r),u=t.charCodeAt(s);if(ws(a)&&ws(u)){let c=0;do++r,c=c*10+a-Yo,a=n.charCodeAt(r);while(ws(a)&&c>0);let f=0;do++s,f=f*10+u-Yo,u=t.charCodeAt(s);while(ws(u)&&f>0);if(c<f)return-1;if(c>f)return 1}else{if(a<u)return-1;if(a>u)return 1;++r,++s}}return n.length-t.length}const Yo=48,uA=57;function ws(n){return!isNaN(n)&&Yo<=n&&n<=uA}function mr(n,t){const r=Object.create(null),s=new lA(n),a=Math.floor(n.length*.4)+1;for(const u of t){const c=s.measure(u,a);c!==void 0&&(r[u]=c)}return Object.keys(r).sort((u,c)=>{const f=r[u]-r[c];return f!==0?f:hu(u,c)})}class lA{constructor(t){this._input=t,this._inputLowerCase=t.toLowerCase(),this._inputArray=_f(this._inputLowerCase),this._rows=[new Array(t.length+1).fill(0),new Array(t.length+1).fill(0),new Array(t.length+1).fill(0)]}measure(t,r){if(this._input===t)return 0;const s=t.toLowerCase();if(this._inputLowerCase===s)return 1;let a=_f(s),u=this._inputArray;if(a.length<u.length){const D=a;a=u,u=D}const c=a.length,f=u.length;if(c-f>r)return;const h=this._rows;for(let D=0;D<=f;D++)h[0][D]=D;for(let D=1;D<=c;D++){const T=h[(D-1)%3],I=h[D%3];let k=I[0]=D;for(let F=1;F<=f;F++){const B=a[D-1]===u[F-1]?0:1;let U=Math.min(T[F]+1,I[F-1]+1,T[F-1]+B);if(D>1&&F>1&&a[D-1]===u[F-2]&&a[D-2]===u[F-1]){const X=h[(D-2)%3][F-2];U=Math.min(U,X+1)}U<k&&(k=U),I[F]=U}if(k>r)return}const m=h[c%3][f];return m<=r?m:void 0}}function _f(n){const t=n.length,r=new Array(t);for(let s=0;s<t;++s)r[s]=n.charCodeAt(s);return r}function zn(n){if(n==null)return Object.create(null);if(Object.getPrototypeOf(n)===null)return n;const t=Object.create(null);for(const[r,s]of Object.entries(n))t[r]=s;return t}function cA(n){return`"${n.replace(fA,pA)}"`}const fA=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function pA(n){return dA[n.charCodeAt(0)]}const dA=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],mi=Object.freeze({});function bp(n,t,r=Ep){const s=new Map;for(const X of Object.values(S))s.set(X,Cp(t,X));let a,u=Array.isArray(n),c=[n],f=-1,h=[],m=n,D,T;const I=[],k=[];do{f++;const X=f===c.length,he=X&&h.length!==0;if(X){if(D=k.length===0?void 0:I[I.length-1],m=T,T=k.pop(),he)if(u){m=m.slice();let Q=0;for(const[oe,P]of h){const $=oe-Q;P===null?(m.splice($,1),Q++):m[$]=P}}else{m={...m};for(const[Q,oe]of h)m[Q]=oe}f=a.index,c=a.keys,h=a.edits,u=a.inArray,a=a.prev}else if(T){if(D=u?f:c[f],m=T[D],m==null)continue;I.push(D)}let Z;if(!Array.isArray(m)){var F,B;yf(m)||me(!1,`Invalid AST Node: ${G(m)}.`);const Q=X?(F=s.get(m.kind))===null||F===void 0?void 0:F.leave:(B=s.get(m.kind))===null||B===void 0?void 0:B.enter;if(Z=Q?.call(t,m,D,T,I,k),Z===mi)break;if(Z===!1){if(!X){I.pop();continue}}else if(Z!==void 0&&(h.push([D,Z]),!X))if(yf(Z))m=Z;else{I.pop();continue}}if(Z===void 0&&he&&h.push([D,m]),X)I.pop();else{var U;a={inArray:u,index:f,keys:c,edits:h,prev:a},u=Array.isArray(m),c=u?m:(U=r[m.kind])!==null&&U!==void 0?U:[],f=-1,h=[],T&&k.push(T),T=m}}while(a!==void 0);return h.length!==0?h[h.length-1][1]:n}function hA(n){const t=new Array(n.length).fill(null),r=Object.create(null);for(const s of Object.values(S)){let a=!1;const u=new Array(n.length).fill(void 0),c=new Array(n.length).fill(void 0);for(let h=0;h<n.length;++h){const{enter:m,leave:D}=Cp(n[h],s);a||(a=m!=null||D!=null),u[h]=m,c[h]=D}if(!a)continue;const f={enter(...h){const m=h[0];for(let T=0;T<n.length;T++)if(t[T]===null){var D;const I=(D=u[T])===null||D===void 0?void 0:D.apply(n[T],h);if(I===!1)t[T]=m;else if(I===mi)t[T]=mi;else if(I!==void 0)return I}},leave(...h){const m=h[0];for(let T=0;T<n.length;T++)if(t[T]===null){var D;const I=(D=c[T])===null||D===void 0?void 0:D.apply(n[T],h);if(I===mi)t[T]=mi;else if(I!==void 0&&I!==!1)return I}else t[T]===m&&(t[T]=null)}};r[s]=f}return r}function Cp(n,t){const r=n[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:n.enter,leave:n.leave}}function Ke(n){return bp(n,mA)}const gA=80,mA={Name:{leave:n=>n.value},Variable:{leave:n=>"$"+n.name},Document:{leave:n=>H(n.definitions,`

`)},OperationDefinition:{leave(n){const t=de("(",H(n.variableDefinitions,", "),")"),r=H([n.operation,H([n.name,t]),H(n.directives," ")]," ");return(r==="query"?"":r+" ")+n.selectionSet}},VariableDefinition:{leave:({variable:n,type:t,defaultValue:r,directives:s})=>n+": "+t+de(" = ",r)+de(" ",H(s," "))},SelectionSet:{leave:({selections:n})=>nt(n)},Field:{leave({alias:n,name:t,arguments:r,directives:s,selectionSet:a}){const u=de("",n,": ")+t;let c=u+de("(",H(r,", "),")");return c.length>gA&&(c=u+de(`(
`,ks(H(r,`
`)),`
)`)),H([c,H(s," "),a]," ")}},Argument:{leave:({name:n,value:t})=>n+": "+t},FragmentSpread:{leave:({name:n,directives:t})=>"..."+n+de(" ",H(t," "))},InlineFragment:{leave:({typeCondition:n,directives:t,selectionSet:r})=>H(["...",de("on ",n),H(t," "),r]," ")},FragmentDefinition:{leave:({name:n,typeCondition:t,variableDefinitions:r,directives:s,selectionSet:a})=>`fragment ${n}${de("(",H(r,", "),")")} on ${t} ${de("",H(s," ")," ")}`+a},IntValue:{leave:({value:n})=>n},FloatValue:{leave:({value:n})=>n},StringValue:{leave:({value:n,block:t})=>t?My(n):cA(n)},BooleanValue:{leave:({value:n})=>n?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:n})=>n},ListValue:{leave:({values:n})=>"["+H(n,", ")+"]"},ObjectValue:{leave:({fields:n})=>"{"+H(n,", ")+"}"},ObjectField:{leave:({name:n,value:t})=>n+": "+t},Directive:{leave:({name:n,arguments:t})=>"@"+n+de("(",H(t,", "),")")},NamedType:{leave:({name:n})=>n},ListType:{leave:({type:n})=>"["+n+"]"},NonNullType:{leave:({type:n})=>n+"!"},SchemaDefinition:{leave:({description:n,directives:t,operationTypes:r})=>de("",n,`
`)+H(["schema",H(t," "),nt(r)]," ")},OperationTypeDefinition:{leave:({operation:n,type:t})=>n+": "+t},ScalarTypeDefinition:{leave:({description:n,name:t,directives:r})=>de("",n,`
`)+H(["scalar",t,H(r," ")]," ")},ObjectTypeDefinition:{leave:({description:n,name:t,interfaces:r,directives:s,fields:a})=>de("",n,`
`)+H(["type",t,de("implements ",H(r," & ")),H(s," "),nt(a)]," ")},FieldDefinition:{leave:({description:n,name:t,arguments:r,type:s,directives:a})=>de("",n,`
`)+t+(Ff(r)?de(`(
`,ks(H(r,`
`)),`
)`):de("(",H(r,", "),")"))+": "+s+de(" ",H(a," "))},InputValueDefinition:{leave:({description:n,name:t,type:r,defaultValue:s,directives:a})=>de("",n,`
`)+H([t+": "+r,de("= ",s),H(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:n,name:t,interfaces:r,directives:s,fields:a})=>de("",n,`
`)+H(["interface",t,de("implements ",H(r," & ")),H(s," "),nt(a)]," ")},UnionTypeDefinition:{leave:({description:n,name:t,directives:r,types:s})=>de("",n,`
`)+H(["union",t,H(r," "),de("= ",H(s," | "))]," ")},EnumTypeDefinition:{leave:({description:n,name:t,directives:r,values:s})=>de("",n,`
`)+H(["enum",t,H(r," "),nt(s)]," ")},EnumValueDefinition:{leave:({description:n,name:t,directives:r})=>de("",n,`
`)+H([t,H(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:n,name:t,directives:r,fields:s})=>de("",n,`
`)+H(["input",t,H(r," "),nt(s)]," ")},DirectiveDefinition:{leave:({description:n,name:t,arguments:r,repeatable:s,locations:a})=>de("",n,`
`)+"directive @"+t+(Ff(r)?de(`(
`,ks(H(r,`
`)),`
)`):de("(",H(r,", "),")"))+(s?" repeatable":"")+" on "+H(a," | ")},SchemaExtension:{leave:({directives:n,operationTypes:t})=>H(["extend schema",H(n," "),nt(t)]," ")},ScalarTypeExtension:{leave:({name:n,directives:t})=>H(["extend scalar",n,H(t," ")]," ")},ObjectTypeExtension:{leave:({name:n,interfaces:t,directives:r,fields:s})=>H(["extend type",n,de("implements ",H(t," & ")),H(r," "),nt(s)]," ")},InterfaceTypeExtension:{leave:({name:n,interfaces:t,directives:r,fields:s})=>H(["extend interface",n,de("implements ",H(t," & ")),H(r," "),nt(s)]," ")},UnionTypeExtension:{leave:({name:n,directives:t,types:r})=>H(["extend union",n,H(t," "),de("= ",H(r," | "))]," ")},EnumTypeExtension:{leave:({name:n,directives:t,values:r})=>H(["extend enum",n,H(t," "),nt(r)]," ")},InputObjectTypeExtension:{leave:({name:n,directives:t,fields:r})=>H(["extend input",n,H(t," "),nt(r)]," ")}};function H(n,t=""){var r;return(r=n?.filter(s=>s).join(t))!==null&&r!==void 0?r:""}function nt(n){return de(`{
`,ks(H(n,`
`)),`
}`)}function de(n,t,r=""){return t!=null&&t!==""?n+t+r:""}function ks(n){return de("  ",n.replace(/\n/g,`
  `))}function Ff(n){var t;return(t=n?.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}function Wo(n,t){switch(n.kind){case S.NULL:return null;case S.INT:return parseInt(n.value,10);case S.FLOAT:return parseFloat(n.value);case S.STRING:case S.ENUM:case S.BOOLEAN:return n.value;case S.LIST:return n.values.map(r=>Wo(r,t));case S.OBJECT:return or(n.fields,r=>r.name.value,r=>Wo(r.value,t));case S.VARIABLE:return t?.[n.name.value]}}function ot(n){if(n!=null||me(!1,"Must provide name."),typeof n=="string"||me(!1,"Expected name to be a string."),n.length===0)throw new L("Expected name to be a non-empty string.");for(let t=1;t<n.length;++t)if(!Sp(n.charCodeAt(t)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${n}" does not.`);if(!du(n.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${n}" does not.`);return n}function DA(n){if(n==="true"||n==="false"||n==="null")throw new L(`Enum values cannot be named: ${n}`);return ot(n)}function gu(n){return Qt(n)||He(n)||Ge(n)||Hn(n)||st(n)||hn(n)||Tn(n)||we(n)}function Qt(n){return vt(n,kt)}function He(n){return vt(n,gt)}function vA(n){if(!He(n))throw new Error(`Expected ${G(n)} to be a GraphQL Object type.`);return n}function Ge(n){return vt(n,Us)}function EA(n){if(!Ge(n))throw new Error(`Expected ${G(n)} to be a GraphQL Interface type.`);return n}function Hn(n){return vt(n,Ms)}function st(n){return vt(n,Ur)}function hn(n){return vt(n,$s)}function Tn(n){return vt(n,fn)}function we(n){return vt(n,ce)}function mu(n){return Qt(n)||st(n)||hn(n)||Du(n)&&mu(n.ofType)}function wp(n){return Qt(n)||He(n)||Ge(n)||Hn(n)||st(n)||Du(n)&&wp(n.ofType)}function Pr(n){return Qt(n)||st(n)}function Ci(n){return He(n)||Ge(n)||Hn(n)}function cr(n){return Ge(n)||Hn(n)}class fn{constructor(t){gu(t)||me(!1,`Expected ${G(t)} to be a GraphQL type.`),this.ofType=t}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ce{constructor(t){vu(t)||me(!1,`Expected ${G(t)} to be a GraphQL nullable type.`),this.ofType=t}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Du(n){return Tn(n)||we(n)}function vu(n){return gu(n)&&!we(n)}function TA(n){if(!vu(n))throw new Error(`Expected ${G(n)} to be a GraphQL nullable type.`);return n}function SA(n){if(n)return we(n)?n.ofType:n}function F_(n){return Qt(n)||He(n)||Ge(n)||Hn(n)||st(n)||hn(n)}function hr(n){if(n){let t=n;for(;Du(t);)t=t.ofType;return t}}function Op(n){return typeof n=="function"?n():n}function xp(n){return typeof n=="function"?n():n}class kt{constructor(t){var r,s,a,u;const c=(r=t.parseValue)!==null&&r!==void 0?r:If;this.name=ot(t.name),this.description=t.description,this.specifiedByURL=t.specifiedByURL,this.serialize=(s=t.serialize)!==null&&s!==void 0?s:If,this.parseValue=c,this.parseLiteral=(a=t.parseLiteral)!==null&&a!==void 0?a:(f,h)=>c(Wo(f,h)),this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(u=t.extensionASTNodes)!==null&&u!==void 0?u:[],t.specifiedByURL==null||typeof t.specifiedByURL=="string"||me(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${G(t.specifiedByURL)}.`),t.serialize==null||typeof t.serialize=="function"||me(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),t.parseLiteral&&(typeof t.parseValue=="function"&&typeof t.parseLiteral=="function"||me(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class gt{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.isTypeOf=t.isTypeOf,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=()=>Rp(t),this._interfaces=()=>kp(t),t.isTypeOf==null||typeof t.isTypeOf=="function"||me(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${G(t.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Bp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function kp(n){var t;const r=Op((t=n.interfaces)!==null&&t!==void 0?t:[]);return Array.isArray(r)||me(!1,`${n.name} interfaces must be an Array or a function which returns an Array.`),r}function Rp(n){const t=xp(n.fields);return Lr(t)||me(!1,`${n.name} fields must be an object with field names as keys or a function which returns such an object.`),Ct(t,(r,s)=>{var a;Lr(r)||me(!1,`${n.name}.${s} field config must be an object.`),r.resolve==null||typeof r.resolve=="function"||me(!1,`${n.name}.${s} field resolver must be a function if provided, but got: ${G(r.resolve)}.`);const u=(a=r.args)!==null&&a!==void 0?a:{};return Lr(u)||me(!1,`${n.name}.${s} args must be an object with argument names as keys.`),{name:ot(s),description:r.description,type:r.type,args:Lp(u),resolve:r.resolve,subscribe:r.subscribe,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}})}function Lp(n){return Object.entries(n).map(([t,r])=>({name:ot(t),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}))}function Lr(n){return xt(n)&&!Array.isArray(n)}function Bp(n){return Ct(n,t=>({description:t.description,type:t.type,args:Pp(t.args),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}))}function Pp(n){return or(n,t=>t.name,t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}))}function Up(n){return we(n.type)&&n.defaultValue===void 0}class Us{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.resolveType=t.resolveType,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=Rp.bind(void 0,t),this._interfaces=kp.bind(void 0,t),t.resolveType==null||typeof t.resolveType=="function"||me(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Bp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ms{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.resolveType=t.resolveType,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._types=yA.bind(void 0,t),t.resolveType==null||typeof t.resolveType=="function"||me(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function yA(n){const t=Op(n.types);return Array.isArray(t)||me(!1,`Must provide Array of types or a function which returns such an array for Union ${n.name}.`),t}class Ur{constructor(t){var r;this.name=ot(t.name),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._values=typeof t.values=="function"?t.values:Nf(this.name,t.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=Nf(this.name,this._values())),this._values}getValue(t){return this._nameLookup===null&&(this._nameLookup=dr(this.getValues(),r=>r.name)),this._nameLookup[t]}serialize(t){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(s=>[s.value,s])));const r=this._valueLookup.get(t);if(r===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${G(t)}`);return r.name}parseValue(t){if(typeof t!="string"){const s=G(t);throw new L(`Enum "${this.name}" cannot represent non-string value: ${s}.`+Os(this,s))}const r=this.getValue(t);if(r==null)throw new L(`Value "${t}" does not exist in "${this.name}" enum.`+Os(this,t));return r.value}parseLiteral(t,r){if(t.kind!==S.ENUM){const a=Ke(t);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+Os(this,a),{nodes:t})}const s=this.getValue(t.value);if(s==null){const a=Ke(t);throw new L(`Value "${a}" does not exist in "${this.name}" enum.`+Os(this,a),{nodes:t})}return s.value}toConfig(){const t=or(this.getValues(),r=>r.name,r=>({description:r.description,value:r.value,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,values:t,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Os(n,t){const r=n.getValues().map(a=>a.name),s=mr(t,r);return zt("the enum value",s)}function Nf(n,t){return Lr(t)||me(!1,`${n} values must be an object with value names as keys.`),Object.entries(t).map(([r,s])=>(Lr(s)||me(!1,`${n}.${r} must refer to an object with a "value" key representing an internal value but got: ${G(s)}.`),{name:DA(r),description:s.description,value:s.value!==void 0?s.value:r,deprecationReason:s.deprecationReason,extensions:zn(s.extensions),astNode:s.astNode}))}class $s{constructor(t){var r,s;this.name=ot(t.name),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this.isOneOf=(s=t.isOneOf)!==null&&s!==void 0?s:!1,this._fields=AA.bind(void 0,t)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const t=Ct(this.getFields(),r=>({description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,fields:t,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function AA(n){const t=xp(n.fields);return Lr(t)||me(!1,`${n.name} fields must be an object with field names as keys or a function which returns such an object.`),Ct(t,(r,s)=>(!("resolve"in r)||me(!1,`${n.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(s),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:zn(r.extensions),astNode:r.astNode}))}function IA(n){return we(n.type)&&n.defaultValue===void 0}function yi(n,t,r){return t===r?!0:we(r)?we(t)?yi(n,t.ofType,r.ofType):!1:we(t)?yi(n,t.ofType,r):Tn(r)?Tn(t)?yi(n,t.ofType,r.ofType):!1:Tn(t)?!1:cr(r)&&(Ge(t)||He(t))&&n.isSubType(r,t)}function bf(n,t,r){return t===r?!0:cr(t)?cr(r)?n.getPossibleTypes(t).some(s=>n.isSubType(r,s)):n.isSubType(t,r):cr(r)?n.isSubType(r,t):!1}const Oo=2147483647,xo=-2147483648,_A=new kt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(n){const t=ki(n);if(typeof t=="boolean")return t?1:0;let r=t;if(typeof t=="string"&&t!==""&&(r=Number(t)),typeof r!="number"||!Number.isInteger(r))throw new L(`Int cannot represent non-integer value: ${G(t)}`);if(r>Oo||r<xo)throw new L("Int cannot represent non 32-bit signed integer value: "+G(t));return r},parseValue(n){if(typeof n!="number"||!Number.isInteger(n))throw new L(`Int cannot represent non-integer value: ${G(n)}`);if(n>Oo||n<xo)throw new L(`Int cannot represent non 32-bit signed integer value: ${n}`);return n},parseLiteral(n){if(n.kind!==S.INT)throw new L(`Int cannot represent non-integer value: ${Ke(n)}`,{nodes:n});const t=parseInt(n.value,10);if(t>Oo||t<xo)throw new L(`Int cannot represent non 32-bit signed integer value: ${n.value}`,{nodes:n});return t}}),FA=new kt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(n){const t=ki(n);if(typeof t=="boolean")return t?1:0;let r=t;if(typeof t=="string"&&t!==""&&(r=Number(t)),typeof r!="number"||!Number.isFinite(r))throw new L(`Float cannot represent non numeric value: ${G(t)}`);return r},parseValue(n){if(typeof n!="number"||!Number.isFinite(n))throw new L(`Float cannot represent non numeric value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==S.FLOAT&&n.kind!==S.INT)throw new L(`Float cannot represent non numeric value: ${Ke(n)}`,n);return parseFloat(n.value)}}),Ve=new kt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(n){const t=ki(n);if(typeof t=="string")return t;if(typeof t=="boolean")return t?"true":"false";if(typeof t=="number"&&Number.isFinite(t))return t.toString();throw new L(`String cannot represent value: ${G(n)}`)},parseValue(n){if(typeof n!="string")throw new L(`String cannot represent a non string value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==S.STRING)throw new L(`String cannot represent a non string value: ${Ke(n)}`,{nodes:n});return n.value}}),Cn=new kt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(n){const t=ki(n);if(typeof t=="boolean")return t;if(Number.isFinite(t))return t!==0;throw new L(`Boolean cannot represent a non boolean value: ${G(t)}`)},parseValue(n){if(typeof n!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${G(n)}`);return n},parseLiteral(n){if(n.kind!==S.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${Ke(n)}`,{nodes:n});return n.value}}),Mp=new kt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(n){const t=ki(n);if(typeof t=="string")return t;if(Number.isInteger(t))return String(t);throw new L(`ID cannot represent value: ${G(n)}`)},parseValue(n){if(typeof n=="string")return n;if(typeof n=="number"&&Number.isInteger(n))return n.toString();throw new L(`ID cannot represent value: ${G(n)}`)},parseLiteral(n){if(n.kind!==S.STRING&&n.kind!==S.INT)throw new L("ID cannot represent a non-string and non-integer value: "+Ke(n),{nodes:n});return n.value}}),ea=Object.freeze([Ve,_A,FA,Cn,Mp]);function NA(n){return ea.some(({name:t})=>n.name===t)}function ki(n){if(xt(n)){if(typeof n.valueOf=="function"){const t=n.valueOf();if(!xt(t))return t}if(typeof n.toJSON=="function")return n.toJSON()}return n}function bA(n){return vt(n,Rt)}class Rt{constructor(t){var r,s;this.name=ot(t.name),this.description=t.description,this.locations=t.locations,this.isRepeatable=(r=t.isRepeatable)!==null&&r!==void 0?r:!1,this.extensions=zn(t.extensions),this.astNode=t.astNode,Array.isArray(t.locations)||me(!1,`@${t.name} locations must be an Array.`);const a=(s=t.args)!==null&&s!==void 0?s:{};xt(a)&&!Array.isArray(a)||me(!1,`@${t.name} args must be an object with argument names as keys.`),this.args=Lp(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Pp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const $p=new Rt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[J.FIELD,J.FRAGMENT_SPREAD,J.INLINE_FRAGMENT],args:{if:{type:new ce(Cn),description:"Included when true."}}}),Vp=new Rt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[J.FIELD,J.FRAGMENT_SPREAD,J.INLINE_FRAGMENT],args:{if:{type:new ce(Cn),description:"Skipped when true."}}}),CA="No longer supported",Gp=new Rt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[J.FIELD_DEFINITION,J.ARGUMENT_DEFINITION,J.INPUT_FIELD_DEFINITION,J.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:CA}}}),jp=new Rt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[J.SCALAR],args:{url:{type:new ce(Ve),description:"The URL that specifies the behavior of this scalar."}}}),qp=new Rt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[J.INPUT_OBJECT],args:{}}),Vr=Object.freeze([$p,Vp,Gp,jp,qp]);function wA(n){return typeof n=="object"&&typeof n?.[Symbol.iterator]=="function"}function Di(n,t){if(we(t)){const r=Di(n,t.ofType);return r?.kind===S.NULL?null:r}if(n===null)return{kind:S.NULL};if(n===void 0)return null;if(Tn(t)){const r=t.ofType;if(wA(n)){const s=[];for(const a of n){const u=Di(a,r);u!=null&&s.push(u)}return{kind:S.LIST,values:s}}return Di(n,r)}if(hn(t)){if(!xt(n))return null;const r=[];for(const s of Object.values(t.getFields())){const a=Di(n[s.name],s.type);a&&r.push({kind:S.OBJECT_FIELD,name:{kind:S.NAME,value:s.name},value:a})}return{kind:S.OBJECT,fields:r}}if(Pr(t)){const r=t.serialize(n);if(r==null)return null;if(typeof r=="boolean")return{kind:S.BOOLEAN,value:r};if(typeof r=="number"&&Number.isFinite(r)){const s=String(r);return Cf.test(s)?{kind:S.INT,value:s}:{kind:S.FLOAT,value:s}}if(typeof r=="string")return st(t)?{kind:S.ENUM,value:r}:t===Mp&&Cf.test(r)?{kind:S.INT,value:r}:{kind:S.STRING,value:r};throw new TypeError(`Cannot convert value to AST: ${G(r)}.`)}it(!1,"Unexpected input type: "+G(t))}const Cf=/^-?(?:0|[1-9][0-9]*)$/,Eu=new gt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:n=>n.description},types:{description:"A list of all types supported by this server.",type:new ce(new fn(new ce(ht))),resolve(n){return Object.values(n.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ce(ht),resolve:n=>n.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:ht,resolve:n=>n.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:ht,resolve:n=>n.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ce(new fn(new ce(Yp))),resolve:n=>n.getDirectives()}})}),Yp=new gt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},isRepeatable:{type:new ce(Cn),resolve:n=>n.isRepeatable},locations:{type:new ce(new fn(new ce(Wp))),resolve:n=>n.locations},args:{type:new ce(new fn(new ce(na))),args:{includeDeprecated:{type:Cn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){return t?n.args:n.args.filter(r=>r.deprecationReason==null)}}})}),Wp=new Ur({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:J.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:J.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:J.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:J.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:J.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:J.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:J.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:J.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:J.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:J.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:J.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:J.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:J.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:J.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:J.UNION,description:"Location adjacent to a union definition."},ENUM:{value:J.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:J.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:J.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:J.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),ht=new gt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ce(Qp),resolve(n){if(Qt(n))return be.SCALAR;if(He(n))return be.OBJECT;if(Ge(n))return be.INTERFACE;if(Hn(n))return be.UNION;if(st(n))return be.ENUM;if(hn(n))return be.INPUT_OBJECT;if(Tn(n))return be.LIST;if(we(n))return be.NON_NULL;it(!1,`Unexpected type: "${G(n)}".`)}},name:{type:Ve,resolve:n=>"name"in n?n.name:void 0},description:{type:Ve,resolve:n=>"description"in n?n.description:void 0},specifiedByURL:{type:Ve,resolve:n=>"specifiedByURL"in n?n.specifiedByURL:void 0},fields:{type:new fn(new ce(Hp)),args:{includeDeprecated:{type:Cn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(He(n)||Ge(n)){const r=Object.values(n.getFields());return t?r:r.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new fn(new ce(ht)),resolve(n){if(He(n)||Ge(n))return n.getInterfaces()}},possibleTypes:{type:new fn(new ce(ht)),resolve(n,t,r,{schema:s}){if(cr(n))return s.getPossibleTypes(n)}},enumValues:{type:new fn(new ce(zp)),args:{includeDeprecated:{type:Cn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(st(n)){const r=n.getValues();return t?r:r.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new fn(new ce(na)),args:{includeDeprecated:{type:Cn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){if(hn(n)){const r=Object.values(n.getFields());return t?r:r.filter(s=>s.deprecationReason==null)}}},ofType:{type:ht,resolve:n=>"ofType"in n?n.ofType:void 0},isOneOf:{type:Cn,resolve:n=>{if(hn(n))return n.isOneOf}}})}),Hp=new gt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},args:{type:new ce(new fn(new ce(na))),args:{includeDeprecated:{type:Cn,defaultValue:!1}},resolve(n,{includeDeprecated:t}){return t?n.args:n.args.filter(r=>r.deprecationReason==null)}},type:{type:new ce(ht),resolve:n=>n.type},isDeprecated:{type:new ce(Cn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})}),na=new gt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},type:{type:new ce(ht),resolve:n=>n.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(n){const{type:t,defaultValue:r}=n,s=Di(r,t);return s?Ke(s):null}},isDeprecated:{type:new ce(Cn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})}),zp=new gt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ce(Ve),resolve:n=>n.name},description:{type:Ve,resolve:n=>n.description},isDeprecated:{type:new ce(Cn),resolve:n=>n.deprecationReason!=null},deprecationReason:{type:Ve,resolve:n=>n.deprecationReason}})});var be;(function(n){n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.INPUT_OBJECT="INPUT_OBJECT",n.LIST="LIST",n.NON_NULL="NON_NULL"})(be||(be={}));const Qp=new Ur({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:be.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:be.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:be.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:be.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:be.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:be.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:be.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:be.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ce(Eu);new ce(Ve);new ce(Ve);const ta=Object.freeze([Eu,Yp,Wp,ht,Hp,na,zp,Qp]);function OA(n){return ta.some(({name:t})=>n.name===t)}class Jp{constructor(t){var r,s;this.__validationErrors=t.assumeValid===!0?[]:void 0,xt(t)||me(!1,"Must provide configuration object."),!t.types||Array.isArray(t.types)||me(!1,`"types" must be Array if provided but got: ${G(t.types)}.`),!t.directives||Array.isArray(t.directives)||me(!1,`"directives" must be Array if provided but got: ${G(t.directives)}.`),this.description=t.description,this.extensions=zn(t.extensions),this.astNode=t.astNode,this.extensionASTNodes=(r=t.extensionASTNodes)!==null&&r!==void 0?r:[],this._queryType=t.query,this._mutationType=t.mutation,this._subscriptionType=t.subscription,this._directives=(s=t.directives)!==null&&s!==void 0?s:Vr;const a=new Set(t.types);if(t.types!=null)for(const u of t.types)a.delete(u),rt(u,a);this._queryType!=null&&rt(this._queryType,a),this._mutationType!=null&&rt(this._mutationType,a),this._subscriptionType!=null&&rt(this._subscriptionType,a);for(const u of this._directives)if(bA(u))for(const c of u.args)rt(c.type,a);rt(Eu,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of a){if(u==null)continue;const c=u.name;if(c||me(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=u,Ge(u)){for(const f of u.getInterfaces())if(Ge(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.interfaces.push(u)}}else if(He(u)){for(const f of u.getInterfaces())if(Ge(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(t){switch(t){case qn.QUERY:return this.getQueryType();case qn.MUTATION:return this.getMutationType();case qn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(t){return this.getTypeMap()[t]}getPossibleTypes(t){return Hn(t)?t.getTypes():this.getImplementations(t).objects}getImplementations(t){const r=this._implementationsMap[t.name];return r??{objects:[],interfaces:[]}}isSubType(t,r){let s=this._subTypeMap[t.name];if(s===void 0){if(s=Object.create(null),Hn(t))for(const a of t.getTypes())s[a.name]=!0;else{const a=this.getImplementations(t);for(const u of a.objects)s[u.name]=!0;for(const u of a.interfaces)s[u.name]=!0}this._subTypeMap[t.name]=s}return s[r.name]!==void 0}getDirectives(){return this._directives}getDirective(t){return this.getDirectives().find(r=>r.name===t)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function rt(n,t){const r=hr(n);if(!t.has(r)){if(t.add(r),Hn(r))for(const s of r.getTypes())rt(s,t);else if(He(r)||Ge(r)){for(const s of r.getInterfaces())rt(s,t);for(const s of Object.values(r.getFields())){rt(s.type,t);for(const a of s.args)rt(a.type,t)}}else if(hn(r))for(const s of Object.values(r.getFields()))rt(s.type,t)}return t}function mt(n,t){switch(t.kind){case S.LIST_TYPE:{const r=mt(n,t.type);return r&&new fn(r)}case S.NON_NULL_TYPE:{const r=mt(n,t.type);return r&&new ce(r)}case S.NAMED_TYPE:return n.getType(t.name.value)}}function xA(n){return n.kind===S.OPERATION_DEFINITION||n.kind===S.FRAGMENT_DEFINITION}function kA(n){return n.kind===S.SCHEMA_DEFINITION||Ri(n)||n.kind===S.DIRECTIVE_DEFINITION}function Ri(n){return n.kind===S.SCALAR_TYPE_DEFINITION||n.kind===S.OBJECT_TYPE_DEFINITION||n.kind===S.INTERFACE_TYPE_DEFINITION||n.kind===S.UNION_TYPE_DEFINITION||n.kind===S.ENUM_TYPE_DEFINITION||n.kind===S.INPUT_OBJECT_TYPE_DEFINITION}function RA(n){return n.kind===S.SCHEMA_EXTENSION||Tu(n)}function Tu(n){return n.kind===S.SCALAR_TYPE_EXTENSION||n.kind===S.OBJECT_TYPE_EXTENSION||n.kind===S.INTERFACE_TYPE_EXTENSION||n.kind===S.UNION_TYPE_EXTENSION||n.kind===S.ENUM_TYPE_EXTENSION||n.kind===S.INPUT_OBJECT_TYPE_EXTENSION}function LA(n){return{Document(t){for(const r of t.definitions)if(!xA(r)){const s=r.kind===S.SCHEMA_DEFINITION||r.kind===S.SCHEMA_EXTENSION?"schema":'"'+r.name.value+'"';n.reportError(new L(`The ${s} definition is not executable.`,{nodes:r}))}return!1}}}function BA(n){return{Field(t){const r=n.getParentType();if(r&&!n.getFieldDef()){const a=n.getSchema(),u=t.name.value;let c=zt("to use an inline fragment on",PA(a,r,u));c===""&&(c=zt(UA(r,u))),n.reportError(new L(`Cannot query field "${u}" on type "${r.name}".`+c,{nodes:t}))}}}}function PA(n,t,r){if(!cr(t))return[];const s=new Set,a=Object.create(null);for(const c of n.getPossibleTypes(t))if(c.getFields()[r]){s.add(c),a[c.name]=1;for(const f of c.getInterfaces()){var u;f.getFields()[r]&&(s.add(f),a[f.name]=((u=a[f.name])!==null&&u!==void 0?u:0)+1)}}return[...s].sort((c,f)=>{const h=a[f.name]-a[c.name];return h!==0?h:Ge(c)&&n.isSubType(c,f)?-1:Ge(f)&&n.isSubType(f,c)?1:hu(c.name,f.name)}).map(c=>c.name)}function UA(n,t){if(He(n)||Ge(n)){const r=Object.keys(n.getFields());return mr(t,r)}return[]}function MA(n){return{InlineFragment(t){const r=t.typeCondition;if(r){const s=mt(n.getSchema(),r);if(s&&!Ci(s)){const a=Ke(r);n.reportError(new L(`Fragment cannot condition on non composite type "${a}".`,{nodes:r}))}}},FragmentDefinition(t){const r=mt(n.getSchema(),t.typeCondition);if(r&&!Ci(r)){const s=Ke(t.typeCondition);n.reportError(new L(`Fragment "${t.name.value}" cannot condition on non composite type "${s}".`,{nodes:t.typeCondition}))}}}}function $A(n){return{...Xp(n),Argument(t){const r=n.getArgument(),s=n.getFieldDef(),a=n.getParentType();if(!r&&s&&a){const u=t.name.value,c=s.args.map(h=>h.name),f=mr(u,c);n.reportError(new L(`Unknown argument "${u}" on field "${a.name}.${s.name}".`+zt(f),{nodes:t}))}}}}function Xp(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const c of s)t[c.name]=c.args.map(f=>f.name);const a=n.getDocument().definitions;for(const c of a)if(c.kind===S.DIRECTIVE_DEFINITION){var u;const f=(u=c.arguments)!==null&&u!==void 0?u:[];t[c.name.value]=f.map(h=>h.name.value)}return{Directive(c){const f=c.name.value,h=t[f];if(c.arguments&&h)for(const m of c.arguments){const D=m.name.value;if(!h.includes(D)){const T=mr(D,h);n.reportError(new L(`Unknown argument "${D}" on directive "@${f}".`+zt(T),{nodes:m}))}}return!1}}}function Zp(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const u of s)t[u.name]=u.locations;const a=n.getDocument().definitions;for(const u of a)u.kind===S.DIRECTIVE_DEFINITION&&(t[u.name.value]=u.locations.map(c=>c.value));return{Directive(u,c,f,h,m){const D=u.name.value,T=t[D];if(!T){n.reportError(new L(`Unknown directive "@${D}".`,{nodes:u}));return}const I=VA(m);I&&!T.includes(I)&&n.reportError(new L(`Directive "@${D}" may not be used on ${I}.`,{nodes:u}))}}}function VA(n){const t=n[n.length-1];switch("kind"in t||it(!1),t.kind){case S.OPERATION_DEFINITION:return GA(t.operation);case S.FIELD:return J.FIELD;case S.FRAGMENT_SPREAD:return J.FRAGMENT_SPREAD;case S.INLINE_FRAGMENT:return J.INLINE_FRAGMENT;case S.FRAGMENT_DEFINITION:return J.FRAGMENT_DEFINITION;case S.VARIABLE_DEFINITION:return J.VARIABLE_DEFINITION;case S.SCHEMA_DEFINITION:case S.SCHEMA_EXTENSION:return J.SCHEMA;case S.SCALAR_TYPE_DEFINITION:case S.SCALAR_TYPE_EXTENSION:return J.SCALAR;case S.OBJECT_TYPE_DEFINITION:case S.OBJECT_TYPE_EXTENSION:return J.OBJECT;case S.FIELD_DEFINITION:return J.FIELD_DEFINITION;case S.INTERFACE_TYPE_DEFINITION:case S.INTERFACE_TYPE_EXTENSION:return J.INTERFACE;case S.UNION_TYPE_DEFINITION:case S.UNION_TYPE_EXTENSION:return J.UNION;case S.ENUM_TYPE_DEFINITION:case S.ENUM_TYPE_EXTENSION:return J.ENUM;case S.ENUM_VALUE_DEFINITION:return J.ENUM_VALUE;case S.INPUT_OBJECT_TYPE_DEFINITION:case S.INPUT_OBJECT_TYPE_EXTENSION:return J.INPUT_OBJECT;case S.INPUT_VALUE_DEFINITION:{const r=n[n.length-3];return"kind"in r||it(!1),r.kind===S.INPUT_OBJECT_TYPE_DEFINITION?J.INPUT_FIELD_DEFINITION:J.ARGUMENT_DEFINITION}default:it(!1,"Unexpected kind: "+G(t.kind))}}function GA(n){switch(n){case qn.QUERY:return J.QUERY;case qn.MUTATION:return J.MUTATION;case qn.SUBSCRIPTION:return J.SUBSCRIPTION}}function jA(n){return{FragmentSpread(t){const r=t.name.value;n.getFragment(r)||n.reportError(new L(`Unknown fragment "${r}".`,{nodes:t.name}))}}}function Kp(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);for(const u of n.getDocument().definitions)Ri(u)&&(s[u.name.value]=!0);const a=[...Object.keys(r),...Object.keys(s)];return{NamedType(u,c,f,h,m){const D=u.name.value;if(!r[D]&&!s[D]){var T;const I=(T=m[2])!==null&&T!==void 0?T:f,k=I!=null&&qA(I);if(k&&wf.includes(D))return;const F=mr(D,k?wf.concat(a):a);n.reportError(new L(`Unknown type "${D}".`+zt(F),{nodes:u}))}}}}const wf=[...ea,...ta].map(n=>n.name);function qA(n){return"kind"in n&&(kA(n)||RA(n))}function YA(n){let t=0;return{Document(r){t=r.definitions.filter(s=>s.kind===S.OPERATION_DEFINITION).length},OperationDefinition(r){!r.name&&t>1&&n.reportError(new L("This anonymous operation must be the only defined operation.",{nodes:r}))}}}function WA(n){var t,r,s;const a=n.getSchema(),u=(t=(r=(s=a?.astNode)!==null&&s!==void 0?s:a?.getQueryType())!==null&&r!==void 0?r:a?.getMutationType())!==null&&t!==void 0?t:a?.getSubscriptionType();let c=0;return{SchemaDefinition(f){if(u){n.reportError(new L("Cannot define a new schema within a schema extension.",{nodes:f}));return}c>0&&n.reportError(new L("Must provide only one schema definition.",{nodes:f})),++c}}}const HA=3;function zA(n){function t(r,s=Object.create(null),a=0){if(r.kind===S.FRAGMENT_SPREAD){const u=r.name.value;if(s[u]===!0)return!1;const c=n.getFragment(u);if(!c)return!1;try{return s[u]=!0,t(c,s,a)}finally{s[u]=void 0}}if(r.kind===S.FIELD&&(r.name.value==="fields"||r.name.value==="interfaces"||r.name.value==="possibleTypes"||r.name.value==="inputFields")&&(a++,a>=HA))return!0;if("selectionSet"in r&&r.selectionSet){for(const u of r.selectionSet.selections)if(t(u,s,a))return!0}return!1}return{Field(r){if((r.name.value==="__schema"||r.name.value==="__type")&&t(r))return n.reportError(new L("Maximum introspection depth exceeded",{nodes:[r]})),!1}}}function QA(n){const t=Object.create(null),r=[],s=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(u){return a(u),!1}};function a(u){if(t[u.name.value])return;const c=u.name.value;t[c]=!0;const f=n.getFragmentSpreads(u.selectionSet);if(f.length!==0){s[c]=r.length;for(const h of f){const m=h.name.value,D=s[m];if(r.push(h),D===void 0){const T=n.getFragment(m);T&&a(T)}else{const T=r.slice(D),I=T.slice(0,-1).map(k=>'"'+k.name.value+'"').join(", ");n.reportError(new L(`Cannot spread fragment "${m}" within itself`+(I!==""?` via ${I}.`:"."),{nodes:T}))}r.pop()}s[c]=void 0}}}function JA(n){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(r){const s=n.getRecursiveVariableUsages(r);for(const{node:a}of s){const u=a.name.value;t[u]!==!0&&n.reportError(new L(r.name?`Variable "$${u}" is not defined by operation "${r.name.value}".`:`Variable "$${u}" is not defined.`,{nodes:[a,r]}))}}},VariableDefinition(r){t[r.variable.name.value]=!0}}}function XA(n){const t=[],r=[];return{OperationDefinition(s){return t.push(s),!1},FragmentDefinition(s){return r.push(s),!1},Document:{leave(){const s=Object.create(null);for(const a of t)for(const u of n.getRecursivelyReferencedFragments(a))s[u.name.value]=!0;for(const a of r){const u=a.name.value;s[u]!==!0&&n.reportError(new L(`Fragment "${u}" is never used.`,{nodes:a}))}}}}}function ZA(n){let t=[];return{OperationDefinition:{enter(){t=[]},leave(r){const s=Object.create(null),a=n.getRecursiveVariableUsages(r);for(const{node:u}of a)s[u.name.value]=!0;for(const u of t){const c=u.variable.name.value;s[c]!==!0&&n.reportError(new L(r.name?`Variable "$${c}" is never used in operation "${r.name.value}".`:`Variable "$${c}" is never used.`,{nodes:u}))}}},VariableDefinition(r){t.push(r)}}}function Su(n){switch(n.kind){case S.OBJECT:return{...n,fields:KA(n.fields)};case S.LIST:return{...n,values:n.values.map(Su)};case S.INT:case S.FLOAT:case S.STRING:case S.BOOLEAN:case S.NULL:case S.ENUM:case S.VARIABLE:return n}}function KA(n){return n.map(t=>({...t,value:Su(t.value)})).sort((t,r)=>hu(t.name.value,r.name.value))}function ed(n){return Array.isArray(n)?n.map(([t,r])=>`subfields "${t}" conflict because `+ed(r)).join(" and "):n}function eI(n){const t=new rd,r=new aI,s=new Map;return{SelectionSet(a){const u=nI(n,s,t,r,n.getParentType(),a);for(const[[c,f],h,m]of u){const D=ed(f);n.reportError(new L(`Fields "${c}" conflict because ${D}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:h.concat(m)}))}}}}function nI(n,t,r,s,a,u){const c=[],[f,h]=js(n,t,a,u);if(rI(n,c,t,r,s,f),h.length!==0)for(let m=0;m<h.length;m++){Vs(n,c,t,r,s,!1,f,h[m]);for(let D=m+1;D<h.length;D++)Gs(n,c,t,r,s,!1,h[m],h[D])}return c}function Vs(n,t,r,s,a,u,c,f){if(s.has(c,f,u))return;s.add(c,f,u);const h=n.getFragment(f);if(!h)return;const[m,D]=zo(n,r,h);if(c!==m){yu(n,t,r,s,a,u,c,m);for(const T of D)Vs(n,t,r,s,a,u,c,T)}}function Gs(n,t,r,s,a,u,c,f){if(c===f||a.has(c,f,u))return;a.add(c,f,u);const h=n.getFragment(c),m=n.getFragment(f);if(!h||!m)return;const[D,T]=zo(n,r,h),[I,k]=zo(n,r,m);yu(n,t,r,s,a,u,D,I);for(const F of k)Gs(n,t,r,s,a,u,c,F);for(const F of T)Gs(n,t,r,s,a,u,F,f)}function tI(n,t,r,s,a,u,c,f,h){const m=[],[D,T]=js(n,t,u,c),[I,k]=js(n,t,f,h);yu(n,m,t,r,s,a,D,I);for(const F of k)Vs(n,m,t,r,s,a,D,F);for(const F of T)Vs(n,m,t,r,s,a,I,F);for(const F of T)for(const B of k)Gs(n,m,t,r,s,a,F,B);return m}function rI(n,t,r,s,a,u){for(const[c,f]of Object.entries(u))if(f.length>1)for(let h=0;h<f.length;h++)for(let m=h+1;m<f.length;m++){const D=nd(n,r,s,a,!1,c,f[h],f[m]);D&&t.push(D)}}function yu(n,t,r,s,a,u,c,f){for(const[h,m]of Object.entries(c)){const D=f[h];if(D)for(const T of m)for(const I of D){const k=nd(n,r,s,a,u,h,T,I);k&&t.push(k)}}}function nd(n,t,r,s,a,u,c,f){const[h,m,D]=c,[T,I,k]=f,F=a||h!==T&&He(h)&&He(T);if(!F){const Z=m.name.value,Q=I.name.value;if(Z!==Q)return[[u,`"${Z}" and "${Q}" are different fields`],[m],[I]];if(!iI(m,I))return[[u,"they have differing arguments"],[m],[I]]}const B=D?.type,U=k?.type;if(B&&U&&Ho(B,U))return[[u,`they return conflicting types "${G(B)}" and "${G(U)}"`],[m],[I]];const X=m.selectionSet,he=I.selectionSet;if(X&&he){const Z=tI(n,t,r,s,F,hr(B),X,hr(U),he);return sI(Z,u,m,I)}}function iI(n,t){const r=n.arguments,s=t.arguments;if(r===void 0||r.length===0)return s===void 0||s.length===0;if(s===void 0||s.length===0||r.length!==s.length)return!1;const a=new Map(s.map(({name:u,value:c})=>[u.value,c]));return r.every(u=>{const c=u.value,f=a.get(u.name.value);return f===void 0?!1:Of(c)===Of(f)})}function Of(n){return Ke(Su(n))}function Ho(n,t){return Tn(n)?Tn(t)?Ho(n.ofType,t.ofType):!0:Tn(t)?!0:we(n)?we(t)?Ho(n.ofType,t.ofType):!0:we(t)?!0:Pr(n)||Pr(t)?n!==t:!1}function js(n,t,r,s){const a=t.get(s);if(a)return a;const u=Object.create(null),c=Object.create(null);td(n,r,s,u,c);const f=[u,Object.keys(c)];return t.set(s,f),f}function zo(n,t,r){const s=t.get(r.selectionSet);if(s)return s;const a=mt(n.getSchema(),r.typeCondition);return js(n,t,a,r.selectionSet)}function td(n,t,r,s,a){for(const u of r.selections)switch(u.kind){case S.FIELD:{const c=u.name.value;let f;(He(t)||Ge(t))&&(f=t.getFields()[c]);const h=u.alias?u.alias.value:c;s[h]||(s[h]=[]),s[h].push([t,u,f]);break}case S.FRAGMENT_SPREAD:a[u.name.value]=!0;break;case S.INLINE_FRAGMENT:{const c=u.typeCondition,f=c?mt(n.getSchema(),c):t;td(n,f,u.selectionSet,s,a);break}}}function sI(n,t,r,s){if(n.length>0)return[[t,n.map(([a])=>a)],[r,...n.map(([,a])=>a).flat()],[s,...n.map(([,,a])=>a).flat()]]}class rd{constructor(){this._data=new Map}has(t,r,s){var a;const u=(a=this._data.get(t))===null||a===void 0?void 0:a.get(r);return u===void 0?!1:s?!0:s===u}add(t,r,s){const a=this._data.get(t);a===void 0?this._data.set(t,new Map([[r,s]])):a.set(r,s)}}class aI{constructor(){this._orderedPairSet=new rd}has(t,r,s){return t<r?this._orderedPairSet.has(t,r,s):this._orderedPairSet.has(r,t,s)}add(t,r,s){t<r?this._orderedPairSet.add(t,r,s):this._orderedPairSet.add(r,t,s)}}function oI(n){return{InlineFragment(t){const r=n.getType(),s=n.getParentType();if(Ci(r)&&Ci(s)&&!bf(n.getSchema(),r,s)){const a=G(s),u=G(r);n.reportError(new L(`Fragment cannot be spread here as objects of type "${a}" can never be of type "${u}".`,{nodes:t}))}},FragmentSpread(t){const r=t.name.value,s=uI(n,r),a=n.getParentType();if(s&&a&&!bf(n.getSchema(),s,a)){const u=G(a),c=G(s);n.reportError(new L(`Fragment "${r}" cannot be spread here as objects of type "${u}" can never be of type "${c}".`,{nodes:t}))}}}}function uI(n,t){const r=n.getFragment(t);if(r){const s=mt(n.getSchema(),r.typeCondition);if(Ci(s))return s}}function lI(n){const t=n.getSchema(),r=Object.create(null);for(const a of n.getDocument().definitions)Ri(a)&&(r[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const u=a.name.value,c=r[u],f=t?.getType(u);let h;if(c?h=cI[c.kind]:f&&(h=fI(f)),h){if(h!==a.kind){const m=pI(a.kind);n.reportError(new L(`Cannot extend non-${m} type "${u}".`,{nodes:c?[c,a]:a}))}}else{const m=Object.keys({...r,...t?.getTypeMap()}),D=mr(u,m);n.reportError(new L(`Cannot extend type "${u}" because it is not defined.`+zt(D),{nodes:a.name}))}}}const cI={[S.SCALAR_TYPE_DEFINITION]:S.SCALAR_TYPE_EXTENSION,[S.OBJECT_TYPE_DEFINITION]:S.OBJECT_TYPE_EXTENSION,[S.INTERFACE_TYPE_DEFINITION]:S.INTERFACE_TYPE_EXTENSION,[S.UNION_TYPE_DEFINITION]:S.UNION_TYPE_EXTENSION,[S.ENUM_TYPE_DEFINITION]:S.ENUM_TYPE_EXTENSION,[S.INPUT_OBJECT_TYPE_DEFINITION]:S.INPUT_OBJECT_TYPE_EXTENSION};function fI(n){if(Qt(n))return S.SCALAR_TYPE_EXTENSION;if(He(n))return S.OBJECT_TYPE_EXTENSION;if(Ge(n))return S.INTERFACE_TYPE_EXTENSION;if(Hn(n))return S.UNION_TYPE_EXTENSION;if(st(n))return S.ENUM_TYPE_EXTENSION;if(hn(n))return S.INPUT_OBJECT_TYPE_EXTENSION;it(!1,"Unexpected type: "+G(n))}function pI(n){switch(n){case S.SCALAR_TYPE_EXTENSION:return"scalar";case S.OBJECT_TYPE_EXTENSION:return"object";case S.INTERFACE_TYPE_EXTENSION:return"interface";case S.UNION_TYPE_EXTENSION:return"union";case S.ENUM_TYPE_EXTENSION:return"enum";case S.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:it(!1,"Unexpected kind: "+G(n))}}function dI(n){return{...id(n),Field:{leave(t){var r;const s=n.getFieldDef();if(!s)return!1;const a=new Set((r=t.arguments)===null||r===void 0?void 0:r.map(u=>u.name.value));for(const u of s.args)if(!a.has(u.name)&&Up(u)){const c=G(u.type);n.reportError(new L(`Field "${s.name}" argument "${u.name}" of type "${c}" is required, but it was not provided.`,{nodes:t}))}}}}}function id(n){var t;const r=Object.create(null),s=n.getSchema(),a=(t=s?.getDirectives())!==null&&t!==void 0?t:Vr;for(const f of a)r[f.name]=dr(f.args.filter(Up),h=>h.name);const u=n.getDocument().definitions;for(const f of u)if(f.kind===S.DIRECTIVE_DEFINITION){var c;const h=(c=f.arguments)!==null&&c!==void 0?c:[];r[f.name.value]=dr(h.filter(hI),m=>m.name.value)}return{Directive:{leave(f){const h=f.name.value,m=r[h];if(m){var D;const T=(D=f.arguments)!==null&&D!==void 0?D:[],I=new Set(T.map(k=>k.name.value));for(const[k,F]of Object.entries(m))if(!I.has(k)){const B=gu(F.type)?G(F.type):Ke(F.type);n.reportError(new L(`Directive "@${h}" argument "${k}" of type "${B}" is required, but it was not provided.`,{nodes:f}))}}}}}}function hI(n){return n.type.kind===S.NON_NULL_TYPE&&n.defaultValue==null}function gI(n){return{Field(t){const r=n.getType(),s=t.selectionSet;if(r)if(Pr(hr(r))){if(s){const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" must not have a selection since type "${u}" has no subfields.`,{nodes:s}))}}else if(s){if(s.selections.length===0){const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" of type "${u}" must have at least one field selected.`,{nodes:t}))}}else{const a=t.name.value,u=G(r);n.reportError(new L(`Field "${a}" of type "${u}" must have a selection of subfields. Did you mean "${a} { ... }"?`,{nodes:t}))}}}}function Ht(n,t,r){if(n){if(n.kind===S.VARIABLE){const s=n.name.value;if(r==null||r[s]===void 0)return;const a=r[s];return a===null&&we(t)?void 0:a}if(we(t))return n.kind===S.NULL?void 0:Ht(n,t.ofType,r);if(n.kind===S.NULL)return null;if(Tn(t)){const s=t.ofType;if(n.kind===S.LIST){const u=[];for(const c of n.values)if(xf(c,r)){if(we(s))return;u.push(null)}else{const f=Ht(c,s,r);if(f===void 0)return;u.push(f)}return u}const a=Ht(n,s,r);return a===void 0?void 0:[a]}if(hn(t)){if(n.kind!==S.OBJECT)return;const s=Object.create(null),a=dr(n.fields,u=>u.name.value);for(const u of Object.values(t.getFields())){const c=a[u.name];if(!c||xf(c.value,r)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(we(u.type))return;continue}const f=Ht(c.value,u.type,r);if(f===void 0)return;s[u.name]=f}if(t.isOneOf){const u=Object.keys(s);if(u.length!==1||s[u[0]]===null)return}return s}if(Pr(t)){let s;try{s=t.parseLiteral(n,r)}catch{return}return s===void 0?void 0:s}it(!1,"Unexpected input type: "+G(t))}}function xf(n,t){return n.kind===S.VARIABLE&&(t==null||t[n.name.value]===void 0)}function mI(n,t,r){var s;const a={},u=(s=t.arguments)!==null&&s!==void 0?s:[],c=dr(u,f=>f.name.value);for(const f of n.args){const h=f.name,m=f.type,D=c[h];if(!D){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(we(m))throw new L(`Argument "${h}" of required type "${G(m)}" was not provided.`,{nodes:t});continue}const T=D.value;let I=T.kind===S.NULL;if(T.kind===S.VARIABLE){const F=T.name.value;if(r==null||!DI(r,F)){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(we(m))throw new L(`Argument "${h}" of required type "${G(m)}" was provided the variable "$${F}" which was not provided a runtime value.`,{nodes:T});continue}I=r[F]==null}if(I&&we(m))throw new L(`Argument "${h}" of non-null type "${G(m)}" must not be null.`,{nodes:T});const k=Ht(T,m,r);if(k===void 0)throw new L(`Argument "${h}" has invalid value ${Ke(T)}.`,{nodes:T});a[h]=k}return a}function wi(n,t,r){var s;const a=(s=t.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===n.name);if(a)return mI(n,a,r)}function DI(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function vI(n,t,r,s,a){const u=new Map;return Qo(n,t,r,s,a,u,new Set),u}function Qo(n,t,r,s,a,u,c){for(const f of a.selections)switch(f.kind){case S.FIELD:{if(!ko(r,f))continue;const h=EI(f),m=u.get(h);m!==void 0?m.push(f):u.set(h,[f]);break}case S.INLINE_FRAGMENT:{if(!ko(r,f)||!kf(n,f,s))continue;Qo(n,t,r,s,f.selectionSet,u,c);break}case S.FRAGMENT_SPREAD:{const h=f.name.value;if(c.has(h)||!ko(r,f))continue;c.add(h);const m=t[h];if(!m||!kf(n,m,s))continue;Qo(n,t,r,s,m.selectionSet,u,c);break}}}function ko(n,t){const r=wi(Vp,t,n);if(r?.if===!0)return!1;const s=wi($p,t,n);return s?.if!==!1}function kf(n,t,r){const s=t.typeCondition;if(!s)return!0;const a=mt(n,s);return a===r?!0:cr(a)?n.isSubType(a,r):!1}function EI(n){return n.alias?n.alias.value:n.name.value}function TI(n){return{OperationDefinition(t){if(t.operation==="subscription"){const r=n.getSchema(),s=r.getSubscriptionType();if(s){const a=t.name?t.name.value:null,u=Object.create(null),c=n.getDocument(),f=Object.create(null);for(const m of c.definitions)m.kind===S.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const h=vI(r,f,u,s,t.selectionSet);if(h.size>1){const T=[...h.values()].slice(1).flat();n.reportError(new L(a!=null?`Subscription "${a}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:T}))}for(const m of h.values())m[0].name.value.startsWith("__")&&n.reportError(new L(a!=null?`Subscription "${a}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function Au(n,t){const r=new Map;for(const s of n){const a=t(s),u=r.get(a);u===void 0?r.set(a,[s]):u.push(s)}return r}function SI(n){return{DirectiveDefinition(s){var a;const u=(a=s.arguments)!==null&&a!==void 0?a:[];return r(`@${s.name.value}`,u)},InterfaceTypeDefinition:t,InterfaceTypeExtension:t,ObjectTypeDefinition:t,ObjectTypeExtension:t};function t(s){var a;const u=s.name.value,c=(a=s.fields)!==null&&a!==void 0?a:[];for(const h of c){var f;const m=h.name.value,D=(f=h.arguments)!==null&&f!==void 0?f:[];r(`${u}.${m}`,D)}return!1}function r(s,a){const u=Au(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&n.reportError(new L(`Argument "${s}(${c}:)" can only be defined once.`,{nodes:f.map(h=>h.name)}));return!1}}function sd(n){return{Field:t,Directive:t};function t(r){var s;const a=(s=r.arguments)!==null&&s!==void 0?s:[],u=Au(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&n.reportError(new L(`There can be only one argument named "${c}".`,{nodes:f.map(h=>h.name)}))}}function yI(n){const t=Object.create(null),r=n.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(r!=null&&r.getDirective(a)){n.reportError(new L(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return t[a]?n.reportError(new L(`There can be only one directive named "@${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name,!1}}}function ad(n){const t=Object.create(null),r=n.getSchema(),s=r?r.getDirectives():Vr;for(const f of s)t[f.name]=!f.isRepeatable;const a=n.getDocument().definitions;for(const f of a)f.kind===S.DIRECTIVE_DEFINITION&&(t[f.name.value]=!f.repeatable);const u=Object.create(null),c=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let h;if(f.kind===S.SCHEMA_DEFINITION||f.kind===S.SCHEMA_EXTENSION)h=u;else if(Ri(f)||Tu(f)){const m=f.name.value;h=c[m],h===void 0&&(c[m]=h=Object.create(null))}else h=Object.create(null);for(const m of f.directives){const D=m.name.value;t[D]&&(h[D]?n.reportError(new L(`The directive "@${D}" can only be used once at this location.`,{nodes:[h[D],m]})):h[D]=m)}}}}function AI(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const h=(c=u.values)!==null&&c!==void 0?c:[],m=s[f];for(const D of h){const T=D.name.value,I=r[f];st(I)&&I.getValue(T)?n.reportError(new L(`Enum value "${f}.${T}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[T]?n.reportError(new L(`Enum value "${f}.${T}" can only be defined once.`,{nodes:[m[T],D.name]})):m[T]=D.name}return!1}}function II(n){const t=n.getSchema(),r=t?t.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const h=(c=u.fields)!==null&&c!==void 0?c:[],m=s[f];for(const D of h){const T=D.name.value;_I(r[f],T)?n.reportError(new L(`Field "${f}.${T}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[T]?n.reportError(new L(`Field "${f}.${T}" can only be defined once.`,{nodes:[m[T],D.name]})):m[T]=D.name}return!1}}function _I(n,t){return He(n)||Ge(n)||hn(n)?n.getFields()[t]!=null:!1}function FI(n){const t=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(r){const s=r.name.value;return t[s]?n.reportError(new L(`There can be only one fragment named "${s}".`,{nodes:[t[s],r.name]})):t[s]=r.name,!1}}}function od(n){const t=[];let r=Object.create(null);return{ObjectValue:{enter(){t.push(r),r=Object.create(null)},leave(){const s=t.pop();s||it(!1),r=s}},ObjectField(s){const a=s.name.value;r[a]?n.reportError(new L(`There can be only one input field named "${a}".`,{nodes:[r[a],s.name]})):r[a]=s.name}}}function NI(n){const t=Object.create(null);return{OperationDefinition(r){const s=r.name;return s&&(t[s.value]?n.reportError(new L(`There can be only one operation named "${s.value}".`,{nodes:[t[s.value],s]})):t[s.value]=s),!1},FragmentDefinition:()=>!1}}function bI(n){const t=n.getSchema(),r=Object.create(null),s=t?{query:t.getQueryType(),mutation:t.getMutationType(),subscription:t.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(u){var c;const f=(c=u.operationTypes)!==null&&c!==void 0?c:[];for(const h of f){const m=h.operation,D=r[m];s[m]?n.reportError(new L(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:h})):D?n.reportError(new L(`There can be only one ${m} type in schema.`,{nodes:[D,h]})):r[m]=h}return!1}}function CI(n){const t=Object.create(null),r=n.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const u=a.name.value;if(r!=null&&r.getType(u)){n.reportError(new L(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return t[u]?n.reportError(new L(`There can be only one type named "${u}".`,{nodes:[t[u],a.name]})):t[u]=a.name,!1}}function wI(n){return{OperationDefinition(t){var r;const s=(r=t.variableDefinitions)!==null&&r!==void 0?r:[],a=Au(s,u=>u.variable.name.value);for(const[u,c]of a)c.length>1&&n.reportError(new L(`There can be only one variable named "$${u}".`,{nodes:c.map(f=>f.variable.name)}))}}}function OI(n){let t={};return{OperationDefinition:{enter(){t={}}},VariableDefinition(r){t[r.variable.name.value]=r},ListValue(r){const s=SA(n.getParentInputType());if(!Tn(s))return ar(n,r),!1},ObjectValue(r){const s=hr(n.getInputType());if(!hn(s))return ar(n,r),!1;const a=dr(r.fields,u=>u.name.value);for(const u of Object.values(s.getFields()))if(!a[u.name]&&IA(u)){const f=G(u.type);n.reportError(new L(`Field "${s.name}.${u.name}" of required type "${f}" was not provided.`,{nodes:r}))}s.isOneOf&&xI(n,r,s,a,t)},ObjectField(r){const s=hr(n.getParentInputType());if(!n.getInputType()&&hn(s)){const u=mr(r.name.value,Object.keys(s.getFields()));n.reportError(new L(`Field "${r.name.value}" is not defined by type "${s.name}".`+zt(u),{nodes:r}))}},NullValue(r){const s=n.getInputType();we(s)&&n.reportError(new L(`Expected value of type "${G(s)}", found ${Ke(r)}.`,{nodes:r}))},EnumValue:r=>ar(n,r),IntValue:r=>ar(n,r),FloatValue:r=>ar(n,r),StringValue:r=>ar(n,r),BooleanValue:r=>ar(n,r)}}function ar(n,t){const r=n.getInputType();if(!r)return;const s=hr(r);if(!Pr(s)){const a=G(r);n.reportError(new L(`Expected value of type "${a}", found ${Ke(t)}.`,{nodes:t}));return}try{if(s.parseLiteral(t,void 0)===void 0){const u=G(r);n.reportError(new L(`Expected value of type "${u}", found ${Ke(t)}.`,{nodes:t}))}}catch(a){const u=G(r);a instanceof L?n.reportError(a):n.reportError(new L(`Expected value of type "${u}", found ${Ke(t)}; `+a.message,{nodes:t,originalError:a}))}}function xI(n,t,r,s,a){var u;const c=Object.keys(s);if(c.length!==1){n.reportError(new L(`OneOf Input Object "${r.name}" must specify exactly one key.`,{nodes:[t]}));return}const h=(u=s[c[0]])===null||u===void 0?void 0:u.value,m=!h||h.kind===S.NULL,D=h?.kind===S.VARIABLE;if(m){n.reportError(new L(`Field "${r.name}.${c[0]}" must be non-null.`,{nodes:[t]}));return}if(D){const T=h.name.value;a[T].type.kind!==S.NON_NULL_TYPE&&n.reportError(new L(`Variable "${T}" must be non-nullable to be used for OneOf Input Object "${r.name}".`,{nodes:[t]}))}}function kI(n){return{VariableDefinition(t){const r=mt(n.getSchema(),t.type);if(r!==void 0&&!mu(r)){const s=t.variable.name.value,a=Ke(t.type);n.reportError(new L(`Variable "$${s}" cannot be non-input type "${a}".`,{nodes:t.type}))}}}}function RI(n){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(r){const s=n.getRecursiveVariableUsages(r);for(const{node:a,type:u,defaultValue:c,parentType:f}of s){const h=a.name.value,m=t[h];if(m&&u){const D=n.getSchema(),T=mt(D,m.type);if(T&&!LI(D,T,m.defaultValue,u,c)){const I=G(T),k=G(u);n.reportError(new L(`Variable "$${h}" of type "${I}" used in position expecting type "${k}".`,{nodes:[m,a]}))}hn(f)&&f.isOneOf&&vu(T)&&n.reportError(new L(`Variable "$${h}" is of type "${T}" but must be non-nullable to be used for OneOf Input Object "${f}".`,{nodes:[m,a]}))}}}},VariableDefinition(r){t[r.variable.name.value]=r}}}function LI(n,t,r,s,a){if(we(s)&&!we(t)){if(!(r!=null&&r.kind!==S.NULL)&&!(a!==void 0))return!1;const f=s.ofType;return yi(n,t,f)}return yi(n,t,s)}const BI=Object.freeze([zA]);Object.freeze([LA,NI,YA,TI,Kp,MA,kI,gI,BA,FI,jA,XA,oI,QA,wI,JA,ZA,Zp,ad,$A,sd,OI,dI,RI,eI,od,...BI]);const PI=Object.freeze([WA,bI,CI,AI,II,SI,yI,Kp,Zp,ad,lI,Xp,sd,od,id]);class UI{constructor(t,r){this._ast=t,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=r}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(t){this._onError(t)}getDocument(){return this._ast}getFragment(t){let r;if(this._fragments)r=this._fragments;else{r=Object.create(null);for(const s of this.getDocument().definitions)s.kind===S.FRAGMENT_DEFINITION&&(r[s.name.value]=s);this._fragments=r}return r[t]}getFragmentSpreads(t){let r=this._fragmentSpreads.get(t);if(!r){r=[];const s=[t];let a;for(;a=s.pop();)for(const u of a.selections)u.kind===S.FRAGMENT_SPREAD?r.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(t,r)}return r}getRecursivelyReferencedFragments(t){let r=this._recursivelyReferencedFragments.get(t);if(!r){r=[];const s=Object.create(null),a=[t.selectionSet];let u;for(;u=a.pop();)for(const c of this.getFragmentSpreads(u)){const f=c.name.value;if(s[f]!==!0){s[f]=!0;const h=this.getFragment(f);h&&(r.push(h),a.push(h.selectionSet))}}this._recursivelyReferencedFragments.set(t,r)}return r}}class MI extends UI{constructor(t,r,s){super(t,s),this._schema=r}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function $I(n,t,r=PI){const s=[],a=new MI(n,t,c=>{s.push(c)}),u=r.map(c=>c(a));return bp(n,hA(u)),s}function VI(n){const t=$I(n);if(t.length!==0)throw new Error(t.map(r=>r.message).join(`

`))}function GI(n,t){xt(n)&&xt(n.__schema)||me(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${G(n)}.`);const r=n.__schema,s=or(r.types,C=>C.name,C=>I(C));for(const C of[...ea,...ta])s[C.name]&&(s[C.name]=C);const a=r.queryType?D(r.queryType):null,u=r.mutationType?D(r.mutationType):null,c=r.subscriptionType?D(r.subscriptionType):null,f=r.directives?r.directives.map(ue):[];return new Jp({description:r.description,query:a,mutation:u,subscription:c,types:Object.values(s),directives:f,assumeValid:void 0});function h(C){if(C.kind===be.LIST){const j=C.ofType;if(!j)throw new Error("Decorated type deeper than introspection query.");return new fn(h(j))}if(C.kind===be.NON_NULL){const j=C.ofType;if(!j)throw new Error("Decorated type deeper than introspection query.");const Oe=h(j);return new ce(TA(Oe))}return m(C)}function m(C){const j=C.name;if(!j)throw new Error(`Unknown type reference: ${G(C)}.`);const Oe=s[j];if(!Oe)throw new Error(`Invalid or incomplete schema, unknown type: ${j}. Ensure that a full introspection query is used in order to build a client schema.`);return Oe}function D(C){return vA(m(C))}function T(C){return EA(m(C))}function I(C){if(C!=null&&C.name!=null&&C.kind!=null)switch(C.kind){case be.SCALAR:return k(C);case be.OBJECT:return B(C);case be.INTERFACE:return U(C);case be.UNION:return X(C);case be.ENUM:return he(C);case be.INPUT_OBJECT:return Z(C)}const j=G(C);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${j}.`)}function k(C){return new kt({name:C.name,description:C.description,specifiedByURL:C.specifiedByURL})}function F(C){if(C.interfaces===null&&C.kind===be.INTERFACE)return[];if(!C.interfaces){const j=G(C);throw new Error(`Introspection result missing interfaces: ${j}.`)}return C.interfaces.map(T)}function B(C){return new gt({name:C.name,description:C.description,interfaces:()=>F(C),fields:()=>Q(C)})}function U(C){return new Us({name:C.name,description:C.description,interfaces:()=>F(C),fields:()=>Q(C)})}function X(C){if(!C.possibleTypes){const j=G(C);throw new Error(`Introspection result missing possibleTypes: ${j}.`)}return new Ms({name:C.name,description:C.description,types:()=>C.possibleTypes.map(D)})}function he(C){if(!C.enumValues){const j=G(C);throw new Error(`Introspection result missing enumValues: ${j}.`)}return new Ur({name:C.name,description:C.description,values:or(C.enumValues,j=>j.name,j=>({description:j.description,deprecationReason:j.deprecationReason}))})}function Z(C){if(!C.inputFields){const j=G(C);throw new Error(`Introspection result missing inputFields: ${j}.`)}return new $s({name:C.name,description:C.description,fields:()=>P(C.inputFields),isOneOf:C.isOneOf})}function Q(C){if(!C.fields)throw new Error(`Introspection result missing fields: ${G(C)}.`);return or(C.fields,j=>j.name,oe)}function oe(C){const j=h(C.type);if(!wp(j)){const Oe=G(j);throw new Error(`Introspection must provide output type for fields, but received: ${Oe}.`)}if(!C.args){const Oe=G(C);throw new Error(`Introspection result missing field args: ${Oe}.`)}return{description:C.description,deprecationReason:C.deprecationReason,type:j,args:P(C.args)}}function P(C){return or(C,j=>j.name,$)}function $(C){const j=h(C.type);if(!mu(j)){const Pe=G(j);throw new Error(`Introspection must provide input type for arguments, but received: ${Pe}.`)}const Oe=C.defaultValue!=null?Ht(aA(C.defaultValue),j):void 0;return{description:C.description,type:j,defaultValue:Oe,deprecationReason:C.deprecationReason}}function ue(C){if(!C.args){const j=G(C);throw new Error(`Introspection result missing directive args: ${j}.`)}if(!C.locations){const j=G(C);throw new Error(`Introspection result missing directive locations: ${j}.`)}return new Rt({name:C.name,description:C.description,isRepeatable:C.isRepeatable,locations:C.locations.slice(),args:P(C.args)})}}function jI(n,t,r){var s,a,u,c;const f=[],h=Object.create(null),m=[];let D;const T=[];for(const N of t.definitions)if(N.kind===S.SCHEMA_DEFINITION)D=N;else if(N.kind===S.SCHEMA_EXTENSION)T.push(N);else if(Ri(N))f.push(N);else if(Tu(N)){const W=N.name.value,V=h[W];h[W]=V?V.concat([N]):[N]}else N.kind===S.DIRECTIVE_DEFINITION&&m.push(N);if(Object.keys(h).length===0&&f.length===0&&m.length===0&&T.length===0&&D==null)return n;const I=Object.create(null);for(const N of n.types)I[N.name]=he(N);for(const N of f){var k;const W=N.name.value;I[W]=(k=Rf[W])!==null&&k!==void 0?k:kn(N)}const F={query:n.query&&U(n.query),mutation:n.mutation&&U(n.mutation),subscription:n.subscription&&U(n.subscription),...D&&Oe([D]),...Oe(T)};return{description:(s=D)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...F,types:Object.values(I),directives:[...n.directives.map(X),...m.map(Lt)],extensions:Object.create(null),astNode:(u=D)!==null&&u!==void 0?u:n.astNode,extensionASTNodes:n.extensionASTNodes.concat(T),assumeValid:(c=r?.assumeValid)!==null&&c!==void 0?c:!1};function B(N){return Tn(N)?new fn(B(N.ofType)):we(N)?new ce(B(N.ofType)):U(N)}function U(N){return I[N.name]}function X(N){const W=N.toConfig();return new Rt({...W,args:Ct(W.args,j)})}function he(N){if(OA(N)||NA(N))return N;if(Qt(N))return oe(N);if(He(N))return P(N);if(Ge(N))return $(N);if(Hn(N))return ue(N);if(st(N))return Q(N);if(hn(N))return Z(N);it(!1,"Unexpected type: "+G(N))}function Z(N){var W;const V=N.toConfig(),q=(W=h[V.name])!==null&&W!==void 0?W:[];return new $s({...V,fields:()=>({...Ct(V.fields,Ee=>({...Ee,type:B(Ee.type)})),...xn(q)}),extensionASTNodes:V.extensionASTNodes.concat(q)})}function Q(N){var W;const V=N.toConfig(),q=(W=h[N.name])!==null&&W!==void 0?W:[];return new Ur({...V,values:{...V.values,...Sn(q)},extensionASTNodes:V.extensionASTNodes.concat(q)})}function oe(N){var W;const V=N.toConfig(),q=(W=h[V.name])!==null&&W!==void 0?W:[];let Ee=V.specifiedByURL;for(const Te of q){var Ue;Ee=(Ue=Lf(Te))!==null&&Ue!==void 0?Ue:Ee}return new kt({...V,specifiedByURL:Ee,extensionASTNodes:V.extensionASTNodes.concat(q)})}function P(N){var W;const V=N.toConfig(),q=(W=h[V.name])!==null&&W!==void 0?W:[];return new gt({...V,interfaces:()=>[...N.getInterfaces().map(U),...Dr(q)],fields:()=>({...Ct(V.fields,C),...On(q)}),extensionASTNodes:V.extensionASTNodes.concat(q)})}function $(N){var W;const V=N.toConfig(),q=(W=h[V.name])!==null&&W!==void 0?W:[];return new Us({...V,interfaces:()=>[...N.getInterfaces().map(U),...Dr(q)],fields:()=>({...Ct(V.fields,C),...On(q)}),extensionASTNodes:V.extensionASTNodes.concat(q)})}function ue(N){var W;const V=N.toConfig(),q=(W=h[V.name])!==null&&W!==void 0?W:[];return new Ms({...V,types:()=>[...N.getTypes().map(U),...Jt(q)],extensionASTNodes:V.extensionASTNodes.concat(q)})}function C(N){return{...N,type:B(N.type),args:N.args&&Ct(N.args,j)}}function j(N){return{...N,type:B(N.type)}}function Oe(N){const W={};for(const q of N){var V;const Ee=(V=q.operationTypes)!==null&&V!==void 0?V:[];for(const Ue of Ee)W[Ue.operation]=Pe(Ue.type)}return W}function Pe(N){var W;const V=N.name.value,q=(W=Rf[V])!==null&&W!==void 0?W:I[V];if(q===void 0)throw new Error(`Unknown type: "${V}".`);return q}function wn(N){return N.kind===S.LIST_TYPE?new fn(wn(N.type)):N.kind===S.NON_NULL_TYPE?new ce(wn(N.type)):Pe(N)}function Lt(N){var W;return new Rt({name:N.name.value,description:(W=N.description)===null||W===void 0?void 0:W.value,locations:N.locations.map(({value:V})=>V),isRepeatable:N.repeatable,args:Bt(N.arguments),astNode:N})}function On(N){const W=Object.create(null);for(const Ee of N){var V;const Ue=(V=Ee.fields)!==null&&V!==void 0?V:[];for(const Te of Ue){var q;W[Te.name.value]={type:wn(Te.type),description:(q=Te.description)===null||q===void 0?void 0:q.value,args:Bt(Te.arguments),deprecationReason:xs(Te),astNode:Te}}}return W}function Bt(N){const W=N??[],V=Object.create(null);for(const Ee of W){var q;const Ue=wn(Ee.type);V[Ee.name.value]={type:Ue,description:(q=Ee.description)===null||q===void 0?void 0:q.value,defaultValue:Ht(Ee.defaultValue,Ue),deprecationReason:xs(Ee),astNode:Ee}}return V}function xn(N){const W=Object.create(null);for(const Ee of N){var V;const Ue=(V=Ee.fields)!==null&&V!==void 0?V:[];for(const Te of Ue){var q;const Rn=wn(Te.type);W[Te.name.value]={type:Rn,description:(q=Te.description)===null||q===void 0?void 0:q.value,defaultValue:Ht(Te.defaultValue,Rn),deprecationReason:xs(Te),astNode:Te}}}return W}function Sn(N){const W=Object.create(null);for(const Ee of N){var V;const Ue=(V=Ee.values)!==null&&V!==void 0?V:[];for(const Te of Ue){var q;W[Te.name.value]={description:(q=Te.description)===null||q===void 0?void 0:q.value,deprecationReason:xs(Te),astNode:Te}}}return W}function Dr(N){return N.flatMap(W=>{var V,q;return(V=(q=W.interfaces)===null||q===void 0?void 0:q.map(Pe))!==null&&V!==void 0?V:[]})}function Jt(N){return N.flatMap(W=>{var V,q;return(V=(q=W.types)===null||q===void 0?void 0:q.map(Pe))!==null&&V!==void 0?V:[]})}function kn(N){var W;const V=N.name.value,q=(W=h[V])!==null&&W!==void 0?W:[];switch(N.kind){case S.OBJECT_TYPE_DEFINITION:{var Ee;const sn=[N,...q];return new gt({name:V,description:(Ee=N.description)===null||Ee===void 0?void 0:Ee.value,interfaces:()=>Dr(sn),fields:()=>On(sn),astNode:N,extensionASTNodes:q})}case S.INTERFACE_TYPE_DEFINITION:{var Ue;const sn=[N,...q];return new Us({name:V,description:(Ue=N.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>Dr(sn),fields:()=>On(sn),astNode:N,extensionASTNodes:q})}case S.ENUM_TYPE_DEFINITION:{var Te;const sn=[N,...q];return new Ur({name:V,description:(Te=N.description)===null||Te===void 0?void 0:Te.value,values:Sn(sn),astNode:N,extensionASTNodes:q})}case S.UNION_TYPE_DEFINITION:{var Rn;const sn=[N,...q];return new Ms({name:V,description:(Rn=N.description)===null||Rn===void 0?void 0:Rn.value,types:()=>Jt(sn),astNode:N,extensionASTNodes:q})}case S.SCALAR_TYPE_DEFINITION:{var Gr;return new kt({name:V,description:(Gr=N.description)===null||Gr===void 0?void 0:Gr.value,specifiedByURL:Lf(N),astNode:N,extensionASTNodes:q})}case S.INPUT_OBJECT_TYPE_DEFINITION:{var Pt;const sn=[N,...q];return new $s({name:V,description:(Pt=N.description)===null||Pt===void 0?void 0:Pt.value,fields:()=>xn(sn),astNode:N,extensionASTNodes:q,isOneOf:qI(N)})}}}}const Rf=dr([...ea,...ta],n=>n.name);function xs(n){const t=wi(Gp,n);return t?.reason}function Lf(n){const t=wi(jp,n);return t?.url}function qI(n){return!!wi(qp,n)}function YI(n,t){n!=null&&n.kind===S.DOCUMENT||me(!1,"Must provide valid Document AST."),t?.assumeValid!==!0&&t?.assumeValidSDL!==!0&&VI(n);const s=jI({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},n,t);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const a=[...s.directives,...Vr.filter(u=>s.directives.every(c=>c.name!==u.name))];return new Jp({...s,directives:a})}function WI(n,t){const r=sA(n,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return YI(r,{assumeValidSDL:void 0,assumeValid:void 0})}class HI{mapping;constructor(t){this.mapping=t}getFor(t){return this.mapping.get(t.name)}}var Ai;(function(n){n.UNION="union",n.ARGUMENT="argument",n.FIELD="field"})(Ai||(Ai={}));function zI(n){const t=new Map;return QI(n,r=>{He(r)&&JI(r,s=>{const a=Jo(s.type);Ro(t,a).references.push({kind:Ai.FIELD,parent:r,by:s}),XI(s,c=>{const f=Jo(c.type);Ro(t,f).references.push({kind:Ai.ARGUMENT,field:s,type:r,by:c})})}),Hn(r)&&r.getTypes().forEach(s=>{Ro(t,s).references.push({kind:Ai.UNION,by:r})})}),new HI(t)}function QI(n,t){Object.entries(n.getTypeMap()).forEach(([,r])=>{r.name.startsWith("__")||t(r)})}function JI(n,t){Object.entries(n.getFields()).forEach(([,r])=>{t(r)})}function XI(n,t){Object.entries(n.args).forEach(([,r])=>{t(r)})}function Ro(n,t){let r=n.get(t.name);return r||(r={references:[]},n.set(t.name,r)),r}function Jo(n){return we(n)||Tn(n)?Jo(n.ofType):n}const Bf=`
"""สถานะการประเมิน"""
enum AssessmentStatus {
  """ประเมินแล้ว"""
  EVALUATED
  """ยังไม่ได้ประเมิน"""
  NOT_EVALUATED
  """ยังไม่ต้องประเมิน"""
  NOT_REQUIRED
}


input AssignRoleInput {
  """รหัส Role"""
  roleId: ID!
  """รหัสผู้ใช้งาน"""
  userId: ID!
}


input AssignRolesInput {
  """รหัส Roles"""
  roleIds: [ID!]!
  """รหัสผู้ใช้งาน"""
  userId: ID!
}


type Calendar {
  """วันที่"""
  date: Date
  """คำอธิบาย"""
  description: String
  id: ID!
  """ชื่อ"""
  title: String
}


type Calling {
  """วันที่นัดเข้าซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลานัดเข้าซ่อม"""
  appointmentRepairRangeTime: Option
  """ผลการติดต่อ"""
  callResult: CallingResult
  """สถานะการติดต่อ"""
  callStatus: CallingStatus
  """ประเภทการติดต่อ"""
  callType: CallingType
  """วันที่ติดต่อ"""
  calledAt: Date
  """วันที่ติดต่อกลับ"""
  calledBackAt: Date
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  id: ID!
  """วันที่เข้าตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: Option
  """การติดต่อเคสย่อย"""
  isRepair: Boolean!
  """งานซ่อมย่อยที่มี SOP"""
  isSop: Boolean!
  """การติดต่อเคสหลัก"""
  isTask: Boolean!
  """เหตุผล"""
  reason: Master
  """เหตุผล"""
  reasonId: String
  """รหัสเคสหลักหรือเคสย่อย"""
  refId: String!
  """หมายเหตุ"""
  remark: String
  """งานซ่อม"""
  repair: Repair
  """SOP"""
  sop: RepairSop
  """รหัส SOP"""
  sopId: String
  """เคสหลัก"""
  task: Task
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
}


"""ผลการติดต่อลูกค้า"""
enum CallingResult {
  """นัดลูกค้าได้"""
  APPOINTMENT
  """ลูกค้าไม่สะดวก"""
  NOT_CONVENIENT
}


"""สถานะการติดต่อลูกค้า"""
enum CallingStatus {
  """ก่อนเข้าตรวจสอบ"""
  BEFORE_INSPECTION
  """ก่อนเข้าซ่อม"""
  BEFORE_REPAIR
  """เข้าซ่อม"""
  REPAIR
}


"""ประเภทการติดต่อลูกค้า"""
enum CallingType {
  """ติดต่อลูกค้าได้"""
  CALL
  """ติดต่อลูกค้าไม่ได้"""
  NOT_CALL
  """อื่นๆ"""
  OTHER
}


type Consent {
  """วันที่ให้ความยินยอม"""
  consentedAt: Date!
  """วันที่สร้าง"""
  createdAt: Date!
  """วันที่ลบ"""
  deletedAt: Date
  """อีเมล"""
  email: String
  """ชื่อ"""
  firstname: String
  """Consent ID"""
  id: String!
  """เลขบัตรประชาชน"""
  idCard: String
  """นามสกุล"""
  lastname: String
  """รหัสสมาชิก"""
  memberId: String
  """เลขที่หนังสือเดินทาง"""
  passport: String
  """รหัสโครงการ"""
  projectId: String!
  """แหล่งที่มาของข้อมูล"""
  source: String!
  """เบอร์โทรศัพท์"""
  telephone: String
  """รหัสยูนิต"""
  unitId: String
  """เลขที่ยูนิต"""
  unitNumber: String!
  """วันที่อัพเดท"""
  updatedAt: Date!
  """รหัสผู้ใช้งาน"""
  userId: String
}


input CreateCallingInput {
  """วันที่นัดเข้าซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลานัดเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """ผลการติดต่อ"""
  callResult: CallingResult
  """สถานะการติดต่อ"""
  callStatus: CallingStatus
  """ประเภทการติดต่อ"""
  callType: CallingType
  """วันที่ติดต่อกลับ"""
  calledBackAt: Date
  deletedAt: Date
  """วันที่เข้าตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: String
  """การติดต่อเคสย่อย"""
  isRepair: Boolean = false
  """งานซ่อมย่อยที่มี SOP"""
  isSop: Boolean = false
  """การติดต่อเคสหลัก"""
  isTask: Boolean = false
  """เหตุผล"""
  reasonId: String
  """รหัสเคสหลักหรือเคสย่อย"""
  refId: String
  """หมายเหตุ"""
  remark: String
  """รหัส SOP"""
  sopId: String
}


input CreateConsentInput {
  """อีเมล"""
  email: String
  """ชื่อ"""
  firstname: String
  """เลขบัตรประชาชน"""
  idCard: String
  """นามสกุล"""
  lastname: String
  """รหัสสมาชิก"""
  memberId: String
  """เลขที่หนังสือเดินทาง"""
  passport: String
  """รหัสโครงการ"""
  projectId: String
  """แหล่งที่มาของข้อมูล"""
  source: String
  """เบอร์โทรศัพท์"""
  telephone: String
  """รหัสยูนิต"""
  unitId: String
  """เลขที่ยูนิต"""
  unitNumber: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input CreateCsatCallingInput {
  """วันที่โทร"""
  calledAt: Date
  deletedAt: Date
  """รายละเอียดการโทร"""
  description: String
  """รหัสซ่อม"""
  repairId: String
  """รหัสงาน"""
  taskId: String
}


input CreateCsatInput {
  children: [CreateCsatInput!]
  comment: String
  deletedAt: Date
  questionId: String
  repairId: String
  score: Int
}


input CreateFileInput {
  """Bucket ของไฟล์"""
  fileBucket: String
  """นามสกุลไฟล์"""
  fileExtension: String
  """โฟลเดอร์ไฟล์"""
  fileFolder: String
  """รหัสไฟล์"""
  fileId: String
  """ชื่อไฟล์"""
  fileName: String
  """พาธไฟล์"""
  filePath: String
  """ประเภทไฟล์"""
  fileType: String
  """สามารถเข้าถึงได้ทั่วไปหรือไม่"""
  isPublic: Boolean = true
}


input CreateJuristicCentralInput {
  areaId: String
  buildingId: String
  """ชื่อผู้แจ้งซ่อม"""
  customerName: String
  """เบอร์โทรผู้แจ้งซ่อม"""
  customerPhone: String
  floorId: String
  """รหัสโครงการ"""
  projectId: String!
  """งานซ่อมย่อย"""
  repairs: [CreateJuristicCentralRepairInput!]
}


input CreateJuristicCentralRepairInput {
  """รหัสประเภท"""
  categoryId: String
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [CreateFileInput!]!
  """รหัสประเภทย่อย"""
  subCategoryId: String
}


input CreateJuristicServiceInput {
  """ชื่อผู้แจ้งซ่อม"""
  customerName: String
  """เบอร์โทรผู้แจ้งซ่อม"""
  customerPhone: String
  """รหัสโครงการ"""
  projectId: String!
  """งานซ่อมย่อย"""
  repairs: [CreateJuristicServiceRepairInput!]
  """เลขห้อง"""
  unitNumber: String!
}


input CreateJuristicServiceRepairInput {
  """รหัสประเภท"""
  categoryId: String
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [CreateFileInput!]!
  """รหัสประเภทย่อย"""
  subCategoryId: String
}


input CreateMasterInput {
  """รหัส"""
  code: String
  deletedAt: Date
  """คำอธิบายภาษาอังกฤษ"""
  descriptionEn: String
  """คำอธิบายภาษาไทย"""
  descriptionTh: String
  """ไอคอน"""
  icon: String
  """สถานะ"""
  isActive: Boolean = true
  """สำหรับประเภทอื่นๆ"""
  isOther: Boolean = false
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String
  """รหัสหลัก"""
  parentId: String
  """ลำดับ"""
  sequence: Int = 1
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla1D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla1H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla2D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla2H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla3D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla3H: Int
  """ประเภท"""
  type: String
}


input CreateNotificationInput {
  deletedAt: Date
  """รูปภาพ"""
  icon: String
  """อ่านแล้วหรือไม่"""
  isRead: Boolean = false
  """ข้อความ"""
  message: String
  """วันที่ส่ง"""
  sendAt: Date
  """หัวข้อ"""
  title: String
  """ประเภทการแจ้งเตือน"""
  type: NotificationType
  """URL"""
  url: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input CreateOrUpdateInsuranceExtensionInput {
  deletedAt: Date
  files: [CreateFileInput!]!
  """รหัสขยายประกัน"""
  id: ID
  """วันที่ขยายประกัน"""
  insuranceExpandDate: Date
  """วันที่สิ้นสุดประกัน"""
  insuranceExpireDate: Date
  """รหัสโครงการ"""
  projectId: String
  """รหัสยูนิต"""
  unitId: String
}


"""ข้อมูลการประเมินความพึงพอใจหลังการซ่อม"""
input CreateOriginConnectCSATInput {
  """ความคิดเห็น"""
  CSATComment: String
  items: [CreateCsatInput!]!
}


input CreateOriginConnectConsentInput {
  """อีเมล"""
  email: String
  """ชื่อ"""
  firstname: String
  """เลขบัตรประชาชน"""
  idCard: String
  """นามสกุล"""
  lastname: String
  """รหัสสมาชิก"""
  memberId: String
  """เลขที่หนังสือเดินทาง"""
  passport: String
  """รหัสโครงการ"""
  projectId: String
  """แหล่งที่มาของข้อมูล"""
  source: String
  """เบอร์โทรศัพท์"""
  telephone: String
  """รหัสยูนิต"""
  unitId: String
  """เลขที่ยูนิต"""
  unitNumber: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


"""ข้อมูลการซ่อม"""
input CreateOriginConnectRepairInput {
  """ประเภทงาน"""
  categoryId: String!
  """รายละเอียด"""
  description: String!
  """ไฟล์"""
  files: [CreateFileInput!]!
  """ประเภทงานย่อย"""
  subCategoryId: String!
}


"""ข้อมูลผู้แจ้งซ่อม"""
input CreateOriginConnectTaskInput {
  """ชื่อลูกค้า"""
  customerName: String!
  """เบอร์โทรศัพท์ลูกค้า"""
  customerPhone: String!
  """วันที่ตรวจสอบ"""
  inspectionAt: Date!
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: String!
  """รหัสโครงการ"""
  projectId: String!
  """งานซ่อม"""
  repairs: [CreateOriginConnectRepairInput!]!
  """รหัสหน่วย"""
  unitNumber: String!
}


"""ข้อมูลการประเมินความพึงพอใจหลังการซ่อม"""
input CreatePrimoPlusCSATInput {
  children: [CreateCsatInput!]
  comment: String
  deletedAt: Date
  questionId: String
  repairId: String
  score: Int
}


"""ข้อมูลการซ่อม"""
input CreatePrimoPlusRepairInput {
  """ประเภทงาน"""
  categoryId: String!
  """รายละเอียด"""
  description: String!
  """ไฟล์"""
  files: [CreateFileInput!]!
  """ประเภทงานย่อย"""
  subCategoryId: String!
}


"""ข้อมูลผู้แจ้งซ่อม"""
input CreatePrimoPlusTaskInput {
  """ชื่อลูกค้า"""
  customerName: String!
  """เบอร์โทรศัพท์ลูกค้า"""
  customerPhone: String!
  """วันที่ตรวจสอบ"""
  inspectionAt: Date!
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: String!
  """รหัสโครงการ"""
  projectId: String!
  """งานซ่อม"""
  repairs: [CreatePrimoPlusRepairInput!]!
  """รหัสหน่วย"""
  unitNumber: String!
}


input CreateRepairInput {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """หมายเหตุของไม่ครบ"""
  assetsCompleteRemark: String
  """วันที่มอบงาน"""
  assignedAt: Date
  """รหัสประเภท"""
  categoryId: String
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจาก Call Center"""
  closedForCallCenterRemark: String
  """รหัสผู้รับเหมา"""
  contractorId: String
  deletedAt: Date
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [CreateFileInput!]!
  """กำหนดจบงาน"""
  finishTargetAt: Date
  """วันที่จบงาน"""
  finishedAt: Date
  """วันที่จบงานนอกเหนือการรับประกัน"""
  finishedCustomerAt: Date
  """วันที่โทรครั้งแรก"""
  firstCalledAt: Date
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """ทรัพย์สินครบทุกชิ้น"""
  isAssetsComplete: Boolean = false
  """สถานะการประเมิน"""
  isCSAT: Boolean = false
  """สถานะการปิดเคสจาก Call Center"""
  isClosedForCallCenter: Boolean = false
  """ปิดเคส (รอดูอาการ)"""
  isFinishedMonitoring: Boolean = false
  """นอกเหนือการรับประกัน"""
  isOutsideInsurance: Boolean = false
  """มีผู้รับงานหรือไม่"""
  isRecipient: Boolean = false
  """เริ่มซ่อมวันนี้หรือนัดซ่อมวันอื่น"""
  isScheduledToday: Boolean = false
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  """ช่วงเวลาเข้าซ่อมล่าสุด"""
  lastRepairRangeTime: String
  """หมายเหตุนอกเหนือการรับประกัน"""
  outsideInsuranceRemark: String
  """ความสำคัญ"""
  priorityId: String
  """ชื่อ นามสกุล ผู้รับงาน"""
  receiverName: String
  """วันที่เข้าซ่อม"""
  repairAt: Date
  """วันที่เข้าซ่อม"""
  repairDate: Date
  """ช่วงเวลาเข้าซ่อม"""
  repairRangeTime: String
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """รหัส SLA"""
  slaId: String
  """สถานะงาน"""
  status: TaskStatus = OPEN
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """รหัสงานหลัก"""
  taskId: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input CreateRepairSopInput {
  deletedAt: Date
  """ไฟล์"""
  files: [CreateFileInput!]!
  finishIssue: RepairSopFinishIssue
  finishPendingReason: RepairSopFinishPendingReason
  finishType: RepairSopFinishType
  finishedAt: Date
  isFinished: Boolean = false
  nextRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  nextRepairRangeTime: String
  parentId: String
  pictureAt: Date
  remark: String
  repairId: String
  status: RepairSopStatus
  transactionAt: Date
}


input CreateRoleInput {
  """คำอธิบาย"""
  description: String
  """ระดับลำดับชั้น"""
  level: Int = 0
  """ชื่อ Role"""
  name: String!
  """รหัส Parent Role"""
  parentId: String
  """รายการ Permissions"""
  permissions: [String!] = []
}


input CreateTaskInput {
  """วันที่มอบงาน"""
  assignedAt: Date
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจากหลังบ้าน"""
  closedForAdmRemark: String
  """วันที่ลูกค้านัดซ่อม"""
  customerAppointmentRepairAt: Date
  """ชื่อผู้แจ้งซ่อม"""
  customerName: String
  """เบอร์โทรผู้แจ้งซ่อม"""
  customerPhone: String
  deletedAt: Date
  """วันที่จบงาน"""
  finishedAt: Date
  """เลขที่บ้าน"""
  houseNumber: String
  """วันที่จบงาน"""
  inprogressAt: Date
  """วันที่ตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: String
  """วันที่หมดประกัน (จำนวนเดือนที่ถูกขยาย)"""
  insuranceExpireExtendCount: Int
  """ปิดเคสจากหลังบ้าน"""
  isClosedForAdm: Boolean = false
  """สถานะประกัน"""
  isInsurance: Boolean = false
  """ข้อมูลจากระบบเก่า"""
  isMigration: Boolean
  """รหัสโครงการ"""
  projectId: String
  """ช่วงเวลาเข้าซ่อม"""
  repairRangeTime: String
  """งานซ่อมย่อย"""
  repairs: [CreateTaskRepairInput!]
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """รหัสแหล่งข้อมูล"""
  sourceId: String
  """เลขห้อง"""
  unitNumber: String
}


input CreateTaskRepairInput {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """หมายเหตุของไม่ครบ"""
  assetsCompleteRemark: String
  """วันที่มอบงาน"""
  assignedAt: Date
  """รหัสประเภท"""
  categoryId: String
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจาก Call Center"""
  closedForCallCenterRemark: String
  """รหัสผู้รับเหมา"""
  contractorId: String
  deletedAt: Date
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [CreateFileInput!]
  """กำหนดจบงาน"""
  finishTargetAt: Date
  """วันที่จบงาน"""
  finishedAt: Date
  """วันที่จบงานนอกเหนือการรับประกัน"""
  finishedCustomerAt: Date
  """วันที่โทรครั้งแรก"""
  firstCalledAt: Date
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """ทรัพย์สินครบทุกชิ้น"""
  isAssetsComplete: Boolean = false
  """สถานะการประเมิน"""
  isCSAT: Boolean = false
  """สถานะการปิดเคสจาก Call Center"""
  isClosedForCallCenter: Boolean = false
  """ปิดเคส (รอดูอาการ)"""
  isFinishedMonitoring: Boolean = false
  """นอกเหนือการรับประกัน"""
  isOutsideInsurance: Boolean = false
  """มีผู้รับงานหรือไม่"""
  isRecipient: Boolean = false
  """เริ่มซ่อมวันนี้หรือนัดซ่อมวันอื่น"""
  isScheduledToday: Boolean = false
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  """ช่วงเวลาเข้าซ่อมล่าสุด"""
  lastRepairRangeTime: String
  """หมายเหตุนอกเหนือการรับประกัน"""
  outsideInsuranceRemark: String
  """ความสำคัญ"""
  priorityId: String
  """ชื่อ นามสกุล ผู้รับงาน"""
  receiverName: String
  """วันที่เข้าซ่อม"""
  repairAt: Date
  """วันที่เข้าซ่อม"""
  repairDate: Date
  """ช่วงเวลาเข้าซ่อม"""
  repairRangeTime: String
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """รหัส SLA"""
  slaId: String
  """สถานะงาน"""
  status: TaskStatus = OPEN
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input CreateUserProjectInput {
  deletedAt: Date
  projectId: String
  towers: [CreateUserProjectTowerInput!]!
  userId: String
}


input CreateUserProjectTowerInput {
  deletedAt: Date
  floors: [String!]
  tower: String
}


input CreateUserSettingInput {
  deletedAt: Date
  notification: Boolean = true
  userId: String
}


type Csat {
  comment: String
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  evaluatedAt: Date!
  id: ID!
  questionId: String
  repairId: String
  score: Int
  updatedAt: Date
  updatedBy: User
}


type CsatCalling {
  """วันที่โทร"""
  calledAt: Date!
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  """รายละเอียดการโทร"""
  description: String
  id: ID!
  """รหัสซ่อม"""
  repairId: String
  """ครั้งที่โทร"""
  sequence: Int!
  """รหัสงาน"""
  taskId: String
  updatedAt: Date
  updatedBy: User
}


"""Date custom scalar type (UTC)"""
scalar Date


type Employee {
  """อีเมล"""
  email: String
  """รหัสพนักงาน"""
  employeeId: String
  """ชื่อภาษาอังกฤษ"""
  firstnameEng: String
  """ชื่อภาษาไทย"""
  firstnameThai: String
  id: ID!
  imageUrl: String
  """นามสกุลภาษาอังกฤษ"""
  lastnameEng: String
  """นามสกุลภาษาไทย"""
  lastnameThai: String
  lineId: String
  mobilePhone: String
  """ชื่อเล่น"""
  nickname: String
  workPhone: String
}


type File {
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  """Bucket ของไฟล์"""
  fileBucket: String
  """นามสกุลไฟล์"""
  fileExtension: String
  """โฟลเดอร์ไฟล์"""
  fileFolder: String
  """รหัสไฟล์"""
  fileId: String
  """ชื่อไฟล์"""
  fileName: String
  """พาธไฟล์"""
  filePath: String
  """ประเภทไฟล์"""
  fileType: String
  """ลิงค์ของไฟล์"""
  fileUrl: String
  id: ID!
  """สามารถเข้าถึงได้ทั่วไปหรือไม่"""
  isPublic: Boolean!
  """รหัสอ้างอิง"""
  refId: String
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
}


type Floor {
  id: Int!
  nameEn: String
  nameTh: String
  projectId: String
  towerId: Int
}


type IPaginateLinks {
  """ลิงค์หน้าแรก"""
  first: String
  """ลิงค์หน้าสุดท้าย"""
  last: String
  """ลิงค์หน้าถัดไป"""
  next: String
  """ลิงค์หน้าก่อนหน้า"""
  previous: String
}


type IPaginateMeta {
  """หน้าปัจจุบัน"""
  currentPage: Float!
  """จำนวนรายการที่มีอยู่ในหน้านี้"""
  itemCount: Float!
  """จำนวนรายการที่แสดงในหน้านี้"""
  itemsPerPage: Float!
  """จำนวนรายการทั้งหมด"""
  totalItems: Float
  """จำนวนหน้าทั้งหมด"""
  totalPages: Float
}


type InsuranceExtension {
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  files: [File!]!
  """เลขที่บ้าน"""
  houseNumber: String
  """รหัสขยายประกัน"""
  id: ID!
  """วันที่ขยายประกัน"""
  insuranceExpandDate: Date
  """วันที่สิ้นสุดประกัน"""
  insuranceExpireDate: Date
  project: Project
  """รหัสโครงการ"""
  projectId: String!
  """วันที่โอนกรรมสิทธิ์"""
  transferDate: Date
  unit: Unit
  """รหัสยูนิต"""
  unitId: String!
  """หมายเลขห้อง"""
  unitNumber: String
  updatedAt: Date
  updatedBy: User
}


type InsuranceExtensionPaginate {
  items: [InsuranceExtension!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


type LegacyMigrationResponse {
  message: String!
  startedAt: Date!
}


type LegacyMigrationStatus {
  isRunning: Boolean!
}


type Master {
  children: [Master!]!
  """รหัส"""
  code: String
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  """คำอธิบายภาษาอังกฤษ"""
  descriptionEn: String
  """คำอธิบายภาษาไทย"""
  descriptionTh: String
  """ไอคอน"""
  icon: String
  id: ID!
  """สถานะ"""
  isActive: Boolean!
  """สำหรับประเภทอื่นๆ"""
  isOther: Boolean!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String
  parent: Master
  """รหัสหลัก"""
  parentId: String
  """ลำดับ"""
  sequence: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla1D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla1H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla2D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla2H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla3D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla3H: Int
  """ประเภท"""
  type: String
  updatedAt: Date
  updatedBy: User
}


type Mutation {
  """สร้างข้อมูลการประเมินคุณภาพหลังเข้ารับบริการ"""
  createPrimoPlusCsat(
    """ความคิดเห็น"""
    CSATComment: String
    """ข้อมูลการประเมินคุณภาพ"""
    createPrimoPlusCSATInput: [CreatePrimoPlusCSATInput!]!
  ): [PrimoPlusCsat!]!
  """สร้างข้อมูลการแจ้งซ่อม"""
  createPrimoPlusTask(
    """ข้อมูลการแจ้งซ่อม"""
    createPrimoPlusTaskInput: CreatePrimoPlusTaskInput!
  ): PrimoPlusTask!
}


type Notification {
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  """รูปภาพ"""
  icon: String
  id: ID!
  """อ่านแล้วหรือไม่"""
  isRead: Boolean!
  """ข้อความ"""
  message: String!
  """วันที่ส่ง"""
  sendAt: Date!
  """หัวข้อ"""
  title: String!
  """ประเภทการแจ้งเตือน"""
  type: NotificationType!
  updatedAt: Date
  updatedBy: User
  """URL"""
  url: String
  user: User
  """รหัสผู้ใช้งาน"""
  userId: String
}


enum NotificationType {
  CUSTOMER
  HOMECARE
}


type Option {
  id: String!
  nameEn: String!
  nameTh: String!
}


"""ปฏิทินวันที่แจ้งซ่อม"""
type OriginConnectCalendar {
  """วันที่"""
  date: Date
  """คำอธิบาย"""
  description: String
  id: ID
  """ชื่อ"""
  title: String
}


"""ตัวเลือกงานซ่อมหลักทั้งหมด"""
type OriginConnectCategory {
  """ไอคอน"""
  icon: String
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
  """ตัวเลือกประเภทย่อยตามที่งานซ่อมย่อย"""
  subCategories: [OriginConnectSubCategory!]!
}


"""ตัวเลือกสาเหตุทั้งหมด"""
type OriginConnectCause {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


type OriginConnectConsent {
  """วันที่ให้ความยินยอม"""
  consentedAt: Date!
  """วันที่สร้าง"""
  createdAt: Date!
  """วันที่ลบ"""
  deletedAt: Date
  """อีเมล"""
  email: String
  """ชื่อ"""
  firstname: String
  """Consent ID"""
  id: String!
  """เลขบัตรประชาชน"""
  idCard: String
  """นามสกุล"""
  lastname: String
  """รหัสสมาชิก"""
  memberId: String
  """เลขที่หนังสือเดินทาง"""
  passport: String
  """รหัสโครงการ"""
  projectId: String!
  """แหล่งที่มาของข้อมูล"""
  source: String!
  """เบอร์โทรศัพท์"""
  telephone: String
  """รหัสยูนิต"""
  unitId: String
  """เลขที่ยูนิต"""
  unitNumber: String!
  """วันที่อัพเดท"""
  updatedAt: Date!
  """รหัสผู้ใช้งาน"""
  userId: String
}


type OriginConnectConsentPurposeWithLanguage {
  description: String!
  language: String!
  title: String!
}


"""ผลการประเมินหลังการซ่อม"""
type OriginConnectCsat {
  """ความคิดเห็น"""
  comment: String
  id: ID!
  """รหัสคำถาม"""
  questionId: String!
  """รหัสงานซ่อม"""
  repairId: String!
  """คะแนน"""
  score: Int!
}


"""ตัวเลือกคำถามประเมินคุณภาพหลังเข้ารับบริการ"""
type OriginConnectCsatQuestion {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


"""งานซ่อม"""
type OriginConnectRepair {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาที่สะดวกซ่อม"""
  appointmentRepairRangeTime: Option
  """สถานะการประเมิน"""
  assessmentStatus: AssessmentStatus!
  """วันที่มอบงาน"""
  assignedAt: Date
  """ผู้รับงาน"""
  assignedTo: User
  """ประเภทหลัก"""
  category: OriginConnectCategory
  """รหัสหมวดหมู่"""
  categoryId: String
  """สาเหตุ"""
  cause: OriginConnectCause
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """เลขที่ซ่อม"""
  code: String!
  """รายละเอียดงาน"""
  description: String
  """ไฟล์"""
  files: [File!]
  """วันที่จบงาน"""
  finishedAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """สถานะ CSAT"""
  isCSAT: Boolean!
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  """ช่วงเวลาที่เข้าซ่อมล่าสุด"""
  lastRepairRangeTime: Option
  """วันที่เปิดเคส"""
  openedAt: Date!
  """วันที่เข้าซ่อม"""
  repairAt: Date
  """ช่วงเวลาที่เข้าซ่อมครั้งแรก"""
  repairRangeTime: Option
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """งานซ่อมย่อย"""
  sop: [RepairSop!]!
  """สถานะแจ้งซ่อม"""
  status: OriginConnectStatusOption!
  """ประวัติสถานะแจ้งซ่อม"""
  statusHistories: [OriginConnectStatusHistory!]!
  """ประเภทย่อย"""
  subCategory: OriginConnectSubCategory
  """รหัสหมวดหมู่ย่อย"""
  subCategoryId: String
  """รหัสงานหลัก"""
  taskId: String!
  """รหัสผู้รับงาน"""
  userId: String
}


type OriginConnectStatusHistory {
  date: Date
  status: OriginConnectStatusOption!
}


type OriginConnectStatusOption {
  bgColor: String!
  borderColor: String!
  id: TaskStatus!
  nameEn: String!
  nameTh: String!
  textColor: String!
}


"""ตัวเลือกงานซ่อมย่อยทั้งหมด"""
type OriginConnectSubCategory {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


"""ข้อมูลผู้แจ้งซ่อม"""
type OriginConnectTask {
  """วันที่มอบงาน"""
  assignedAt: Date
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """รหัสแจ้งซ่อม"""
  code: String!
  """วันที่จบงาน"""
  finishedAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """วันที่ตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: Option
  """วันที่เปิดเคส"""
  openedAt: Date!
  """รหัสโครงการ"""
  projectId: String!
  """รายการซ่อม"""
  repairs: [OriginConnectRepair!]!
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """สถานะแจ้งซ่อม"""
  status: OriginConnectStatusOption!
  """รหัสหน่วย"""
  unitNumber: String!
}


"""ช่วงเวลาเข้าซ่อม"""
type OriginConnectTimeRange {
  disabled: Boolean
  end: Int
  id: ID
  nameEn: String
  nameTh: String
  start: Int
}


type Overview {
  counts: [OverviewCount!]
  extra: String
  icon: String
  id: String!
  label: String!
  value: Int!
}


type OverviewCount {
  label: String!
  unit: String
  value: Int!
}


"""ปฏิทินวันที่แจ้งซ่อม"""
type PrimoPlusCalendar {
  """วันที่"""
  date: Date
  """คำอธิบาย"""
  description: String
  id: ID
  """ชื่อ"""
  title: String
}


"""ตัวเลือกงานซ่อมหลักทั้งหมด"""
type PrimoPlusCategory {
  """ไอคอน"""
  icon: String
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
  """ตัวเลือกประเภทย่อยตามที่งานหลัก"""
  subCategories: [PrimoPlusSubCategory!]!
}


"""ตัวเลือกสาเหตุทั้งหมด"""
type PrimoPlusCause {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


"""ผลการประเมินหลังการซ่อม"""
type PrimoPlusCsat {
  """ความคิดเห็น"""
  comment: String
  id: ID!
  """รหัสคำถาม"""
  questionId: String!
  """รหัสงานซ่อม"""
  repairId: String!
  """คะแนน"""
  score: Int!
}


"""ตัวเลือกคำถามประเมินคุณภาพหลังเข้ารับบริการ"""
type PrimoPlusCsatQuestion {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


"""งานซ่อม"""
type PrimoPlusRepair {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาที่สะดวกซ่อม"""
  appointmentRepairRangeTime: Option
  """สถานะการประเมิน"""
  assessmentStatus: AssessmentStatus!
  """วันที่มอบงาน"""
  assignedAt: Date
  """ผู้รับงาน"""
  assignedTo: User
  """ประเภทหลัก"""
  category: PrimoPlusCategory
  """รหัสหมวดหมู่"""
  categoryId: String
  """สาเหตุ"""
  cause: PrimoPlusCause
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """เลขที่ซ่อม"""
  code: String!
  """รายละเอียดงาน"""
  description: String
  """ไฟล์"""
  files: [File!]
  """วันที่จบงาน"""
  finishedAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """สถานะ CSAT"""
  isCSAT: Boolean!
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  """ช่วงเวลาที่เข้าซ่อมล่าสุด"""
  lastRepairRangeTime: Option
  """วันที่เปิดเคส"""
  openedAt: Date!
  """วันที่เข้าซ่อม"""
  repairAt: Date
  """ช่วงเวลาที่เข้าซ่อมครั้งแรก"""
  repairRangeTime: Option
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """งานซ่อมย่อย"""
  sop: [RepairSop!]!
  """สถานะแจ้งซ่อม"""
  status: PrimoPlusStatusOption!
  """ประวัติสถานะแจ้งซ่อม"""
  statusHistories: [PrimoPlusStatusHistory!]!
  """ประเภทย่อย"""
  subCategory: PrimoPlusSubCategory
  """รหัสหมวดหมู่ย่อย"""
  subCategoryId: String
  """รหัสงานหลัก"""
  taskId: String!
  """รหัสผู้รับงาน"""
  userId: String
}


type PrimoPlusStatusHistory {
  date: Date
  status: PrimoPlusStatusOption!
}


type PrimoPlusStatusOption {
  bgColor: String!
  borderColor: String!
  id: TaskStatus!
  nameEn: String!
  nameTh: String!
  textColor: String!
}


"""ตัวเลือกงานซ่อมย่อยทั้งหมด"""
type PrimoPlusSubCategory {
  id: ID!
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String!
  """ลำดับ"""
  sequence: Int!
}


"""ข้อมูลผู้แจ้งซ่อม"""
type PrimoPlusTask {
  """วันที่มอบงาน"""
  assignedAt: Date
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """รหัสแจ้งซ่อม"""
  code: String!
  """วันที่จบงาน"""
  finishedAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """วันที่ตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: Option
  """วันที่เปิดเคส"""
  openedAt: Date!
  """รหัสโครงการ"""
  projectId: String!
  """รายการซ่อม"""
  repairs: [PrimoPlusRepair!]!
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """สถานะแจ้งซ่อม"""
  status: PrimoPlusStatusOption!
  """รหัสหน่วย"""
  unitNumber: String!
}


type PrimoPlusTaskPaginate {
  items: [PrimoPlusTask!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


"""ช่วงเวลาเข้าซ่อม"""
type PrimoPlusTimeRange {
  disabled: Boolean
  end: Int
  id: ID
  nameEn: String
  nameTh: String
  start: Int
}


type Project {
  """วันที่จดทะเบียนนิติฯ"""
  a10Date: Date
  id: ID!
  """วันที่ประกันนิติฯ"""
  insuranceDate: Date
  nameEn: String!
  nameTh: String!
  towers: [Tower!]!
  units: [Unit!]!
}


type Query {
  """ข้อมูลวันหยุดประจำสัปดาห์หรือวันหยุดบริษัท"""
  allPrimoPlusCalendars(
    """วันที่สิ้นสุด"""
    endDate: Date!
    """รหัสโครงการ"""
    projectId: String!
    """วันที่เริ่มต้น"""
    startDate: Date!
    """หมายเลขห้อง"""
    unitNumber: String!
  ): [PrimoPlusCalendar!]!
  """ตัวเลือกประเภทหลักงานแจ้งซ่อมหลักทั้งหมด"""
  allPrimoPlusCategories: [PrimoPlusCategory!]!
  """คำถามประเมินคุณภาพหลังเข้ารับบริการทั้งหมด"""
  allPrimoPlusCsatQuestions: [PrimoPlusCsatQuestion!]!
  """รายการแจ้งซ่อมทั้งหมด"""
  allPrimoPlusRepairs(
    """รหัสงาน"""
    taskId: ID!
  ): [PrimoPlusRepair!]!
  """รายการแจ้งซ่อมทั้งหมด"""
  allPrimoPlusTasks(
    limit: Int! = 10
    page: Int! = 1
    """รหัสโครงการ"""
    projectId: String!
    """สถานะงาน"""
    status: [TaskStatus!]!
    """รหัสยูนิต"""
    unitNumber: String!
  ): PrimoPlusTaskPaginate!
  """ช่วงเวลาเข้าซ่อม"""
  allPrimoPlusTimeRanges(
    """วันที่เลือก"""
    date: Date!
    """รหัสโครงการ"""
    projectId: String!
    """หมายเลขห้อง"""
    unitNumber: String!
  ): [PrimoPlusTimeRange!]!
  """รายการแจ้งซ่อมทั้งหมด"""
  getPrimoPlusRepair(
    """รหัสงานซ่อม"""
    id: ID!
  ): PrimoPlusRepair!
  """รายละเอียดแจ้งซ่อม"""
  getPrimoPlusTask(
    """รหัสแจ้งซ่อม"""
    id: ID!
  ): PrimoPlusTask!
  """ข้อมูล Master ช่วงเวลาแจ้งซ่อม"""
  timeOptions: [Option!]!
}


type Repair {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  appointmentRangeTime: Option
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  appointmentRepairRangeTime: Option
  """สถานะการประเมิน"""
  assessmentStatus: AssessmentStatus!
  """หมายเหตุของไม่ครบ"""
  assetsCompleteRemark: String
  """วันที่มอบงาน"""
  assignedAt: Date
  """ผู้รับงาน"""
  assignedTo: User
  callings: [Calling!]!
  caseUpdatesThreads: [RepairCaseUpdateThread!]!
  """ประเภทหลัก"""
  category: Master
  """รหัสประเภท"""
  categoryId: String
  """สาเหตุ"""
  cause: Master
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจาก Call Center"""
  closedForCallCenterRemark: String
  """เลขที่ซ่อม"""
  code: String!
  """ผู้รับเหมา"""
  contractor: Master
  """รหัสผู้รับเหมา"""
  contractorId: String
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  """การโทรประเมินลูกค้าทั้งหมดของงานซ่อมย่อย"""
  csatCallings: [CsatCalling!]!
  """การประเมินลูกค้าทั้งหมดของงานซ่อมย่อย"""
  csats: [Csat!]!
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [File!]
  """กำหนดจบงาน"""
  finishTargetAt: Date
  """วันที่จบงาน"""
  finishedAt: Date
  """วันที่จบงานนอกเหนือการรับประกัน"""
  finishedCustomerAt: Date
  """วันที่โทรครั้งแรก"""
  firstCalledAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """ทรัพย์สินครบทุกชิ้น"""
  isAssetsComplete: Boolean!
  """สถานะการประเมิน"""
  isCSAT: Boolean!
  """สถานะการปิดเคสจาก Call Center"""
  isClosedForCallCenter: Boolean!
  """ปิดเคส (รอดูอาการ)"""
  isFinishedMonitoring: Boolean!
  """นอกเหนือการรับประกัน"""
  isOutsideInsurance: Boolean!
  """มีผู้รับงานหรือไม่"""
  isRecipient: Boolean!
  """เริ่มซ่อมวันนี้หรือนัดซ่อมวันอื่น"""
  isScheduledToday: Boolean!
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  lastRepairRangeTime: Option
  """วันที่เปิดเคส"""
  openedAt: Date!
  """หมายเหตุนอกเหนือการรับประกัน"""
  outsideInsuranceRemark: String
  """Priority"""
  priority: Master
  """ความสำคัญ"""
  priorityId: String
  """ชื่อ นามสกุล ผู้รับงาน"""
  receiverName: String
  """วันที่เข้าซ่อม"""
  repairAt: Date
  repairRangeTime: Option
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """สาเหตุ"""
  sla: Master
  """รหัส SLA"""
  slaId: String
  """งานซ่อมย่อย"""
  sop: [RepairSop!]!
  """สถานะงาน"""
  status: TaskStatus!
  """ประเภทย่อย"""
  subCategory: Master
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """งานซ่อมหลัก"""
  task: Task!
  """รหัสงานหลัก"""
  taskId: String!
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
  """รหัสผู้ใช้งาน"""
  userId: String
}


type RepairCaseUpdateThread {
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  """ไฟล์"""
  files: [File!]
  id: ID!
  message: String!
  messageAt: Date!
  repair: Repair!
  repairId: String!
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
}


type RepairPaginate {
  items: [Repair!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


type RepairSop {
  """งานซ่อมย่อยทั้งหมด"""
  children: [RepairSop!]
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  """ไฟล์"""
  files: [File!]
  finishIssue: RepairSopFinishIssue
  finishPendingReason: RepairSopFinishPendingReason
  finishType: RepairSopFinishType
  finishedAt: Date
  id: ID!
  isFinished: Boolean!
  nextRepairAt: Date
  nextRepairRangeTime: Option
  """งานซ่อมย่อย"""
  parent: RepairSop
  parentId: String
  pictureAt: Date
  remark: String
  """งานซ่อม"""
  repair: Repair
  repairId: String
  sequence: Int
  status: RepairSopStatus!
  transactionAt: Date
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
}


"""สถานะการมีปัญหา"""
enum RepairSopFinishIssue {
  """ติดปัญหา"""
  HAS_ISSUE
  """ไม่ติดปัญหา"""
  NO_ISSUE
}


"""เหตุผลที่ต้องรอ (ใช้เมื่อสถานะเป็น PENDING)"""
enum RepairSopFinishPendingReason {
  """รอของ"""
  PARTS_PENDING
  """รอสรุป"""
  SUMMARY_PENDING
  """รอช่าง"""
  TECHNICIAN_UNAVAILABLE
}


"""สรุปการทำงาน"""
enum RepairSopFinishType {
  """ปิดเคส (รอดูอาการ)"""
  CLOSED_MONITORING
  """ปิดเคส (งานเสร็จสมบูรณ์)"""
  COMPLETED
  """ยังไม่ปิดเคส (ต้องนัดหมายซ่อมต่อ)"""
  PENDING
}


"""สถานะการทำงาน"""
enum RepairSopStatus {
  ASSIGNED
  """ก่อนเข้าซ่อม"""
  BEFORE
  """กำลังทำงาน"""
  DOING
  """ทำงานเสร็จ"""
  FINISHED
  """ขั้นตอนการปกป้องงานซ่อม"""
  PROTECTION
}


type Role {
  children: [Role!]!
  createdAt: Date
  createdBy: User
  deletedAt: Date
  deletedBy: User
  """คำอธิบาย"""
  description: String
  id: ID!
  """ระดับลำดับชั้น"""
  level: Int!
  """ชื่อ Role"""
  name: String!
  parent: Role
  """รหัส Parent Role"""
  parentId: String
  """รายการ Permissions"""
  permissions: [String!]!
  updatedAt: Date
  updatedBy: User
}


input SearchVwTaskRepairFeedInput {
  status: TaskStatus!
  type: String!
}


type Task {
  area: Master
  areaId: String
  """วันที่มอบงาน"""
  assignedAt: Date
  building: Master
  buildingId: String
  """การติดต่อลูกบ้านทั้งหมดของงานหลัก"""
  callings: [Calling!]
  """วันที่เริ่มทำงาน"""
  checkedAt: Date
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจากหลังบ้าน"""
  closedForAdmRemark: String
  """เลขที่งาน"""
  code: String!
  createdAt: Date
  """ผู้สร้าง"""
  createdBy: User
  """การโทรประเมินลูกค้าทั้งหมดของงานหลัก"""
  csatCallings: [CsatCalling!]!
  """การประเมินลูกค้าทั้งหมดของงานหลัก"""
  csats: [Csat!]!
  """วันที่ลูกค้านัดซ่อม"""
  customerAppointmentRepairAt: Date
  """ช่วงเวลาลูกค้านัดซ่อม"""
  customerAppointmentRepairRangeTime: Option
  """ชื่อผู้แจ้งซ่อม"""
  customerName: String
  """เบอร์โทรผู้แจ้งซ่อม"""
  customerPhone: String
  deletedAt: Date
  """ผู้ลบ"""
  deletedBy: User
  """วันที่จบงาน"""
  finishedAt: Date
  floor: Master
  floorId: String
  """เลขที่บ้าน"""
  houseNumber: String
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """วันที่ตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: Option
  """วันที่ขยายประกัน"""
  insuranceExpandDate: Date
  """วันที่สิ้นสุดประกัน"""
  insuranceExpireDate: Date
  """วันที่หมดประกัน (จำนวนเดือนที่ถูกขยาย)"""
  insuranceExpireExtendCount: Int
  """ปิดเคสจากหลังบ้าน"""
  isClosedForAdm: Boolean!
  """งานซ่อมทั้งหมดถูกประเมินแล้ว"""
  isEvaluated: Boolean!
  """สถานะประกัน"""
  isInsurance: Boolean!
  """ข้อมูลจากระบบเก่า"""
  isMigration: Boolean
  """วันที่เปิดเคส"""
  openedAt: Date!
  """โครงการ"""
  project: Project
  """รหัสโครงการ"""
  projectId: String!
  """งานซ่อมย่อยทั้งหมดของงานหลัก"""
  repairs: [Repair!]
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """ข้อมูลแหล่งข้อมูล"""
  source: Master
  """รหัสแหล่งข้อมูล"""
  sourceId: String
  """สถานะงาน"""
  status: TaskStatus!
  """วันที่โอนกรรมสิทธิ์"""
  transferDate: Date
  """ประเภทงาน"""
  type: TaskType!
  """รหัสยูนิต"""
  unitId: String!
  """เลขห้อง"""
  unitNumber: String!
  updatedAt: Date
  """ผู้แก้ไข"""
  updatedBy: User
}


type TaskPaginate {
  items: [Task!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


"""สถานะงาน"""
enum TaskStatus {
  """มอบหมายงานแล้ว"""
  ASSIGNED
  """ตรวจสอบแล้ว"""
  CHECKED
  """ปิดงาน"""
  CLOSED
  """เสร็จสิ้น"""
  FINISHED
  """เสร็จสิ้นโดยโครงการ"""
  FINISHED_BY_PROJECT
  """เสร็จสิ้นโดยลูกค้า"""
  FINISHED_CUSTOMER
  """กำลังดำเนินการ"""
  INPROGRESS
  """เปิดงาน"""
  OPEN
  """กำลังดำเนินการอีกครั้ง"""
  REINPROGRESS
  """กำหนดการแล้ว"""
  SCHEDULED
}


"""ประเภทงาน"""
enum TaskType {
  """งานส่วนกลาง"""
  CENTRAL
  """งานซ่อม"""
  REPAIR
  """งานบริการ"""
  SERVICE
}


type TimeSlot {
  disabled: Boolean!
  end: Int!
  id: ID!
  nameEn: String!
  nameTh: String!
  start: Int!
}


type Token {
  accessToken: String!
  accessTokenExpires: Int!
  refreshToken: String!
  refreshTokenExpires: Int!
  """ข้อมูลผู้ใช้งาน"""
  user: User
}


type Tower {
  floors: [Floor!]!
  id: Int!
  nameEn: String
  nameTh: String
  projectId: String
}


type Unit {
  customerName: String
  customerPhone: String
  houseNumber: String
  id: ID!
  projectId: String!
  unitNumber: String!
}


input UpdateCallingInput {
  """วันที่นัดเข้าซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลานัดเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """ผลการติดต่อ"""
  callResult: CallingResult
  """สถานะการติดต่อ"""
  callStatus: CallingStatus
  """ประเภทการติดต่อ"""
  callType: CallingType
  """วันที่ติดต่อกลับ"""
  calledBackAt: Date
  deletedAt: Date
  id: ID!
  """วันที่เข้าตรวจสอบ"""
  inspectionAt: Date
  """ช่วงเวลาตรวจสอบ"""
  inspectionRangeTime: String
  """การติดต่อเคสย่อย"""
  isRepair: Boolean = false
  """งานซ่อมย่อยที่มี SOP"""
  isSop: Boolean = false
  """การติดต่อเคสหลัก"""
  isTask: Boolean = false
  """เหตุผล"""
  reasonId: String
  """รหัสเคสหลักหรือเคสย่อย"""
  refId: String
  """หมายเหตุ"""
  remark: String
  """รหัส SOP"""
  sopId: String
}


input UpdateCsatCallingInput {
  """วันที่โทร"""
  calledAt: Date
  deletedAt: Date
  """รายละเอียดการโทร"""
  description: String
  id: ID!
  """รหัสซ่อม"""
  repairId: String
  """รหัสงาน"""
  taskId: String
}


input UpdateCsatInput {
  children: [CreateCsatInput!]
  comment: String
  deletedAt: Date
  id: ID!
  questionId: String
  repairId: String
  score: Int
}


input UpdateFileInput {
  """Bucket ของไฟล์"""
  fileBucket: String
  """นามสกุลไฟล์"""
  fileExtension: String
  """โฟลเดอร์ไฟล์"""
  fileFolder: String
  """รหัสไฟล์"""
  fileId: String
  """ชื่อไฟล์"""
  fileName: String
  """พาธไฟล์"""
  filePath: String
  """ประเภทไฟล์"""
  fileType: String
  id: ID!
  """สามารถเข้าถึงได้ทั่วไปหรือไม่"""
  isPublic: Boolean = true
}


input UpdateJuristicCentralsRepairInput {
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRangeTime: String
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """รหัสประเภท"""
  categoryId: String
  """รายละเอียด"""
  description: String
  id: ID!
  """สถานะงาน"""
  status: TaskStatus! = OPEN
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input UpdateJuristicServiceRepairInput {
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRangeTime: String
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """รหัสประเภท"""
  categoryId: String
  """รายละเอียด"""
  description: String
  id: ID!
  """สถานะงาน"""
  status: TaskStatus! = OPEN
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input UpdateMasterInput {
  """รหัส"""
  code: String
  deletedAt: Date
  """คำอธิบายภาษาอังกฤษ"""
  descriptionEn: String
  """คำอธิบายภาษาไทย"""
  descriptionTh: String
  """ไอคอน"""
  icon: String
  id: ID!
  """สถานะ"""
  isActive: Boolean = true
  """สำหรับประเภทอื่นๆ"""
  isOther: Boolean = false
  """ชื่อภาษาอังกฤษ"""
  nameEn: String
  """ชื่อภาษาไทย"""
  nameTh: String
  """รหัสหลัก"""
  parentId: String
  """ลำดับ"""
  sequence: Int = 1
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla1D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla1H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla2D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla2H: Int
  """ระยะเวลาการตอบกลับ (วัน)"""
  sla3D: Int
  """ระยะเวลาการตอบกลับ (นาที)"""
  sla3H: Int
  """ประเภท"""
  type: String
}


input UpdateNotificationInput {
  deletedAt: Date
  """รูปภาพ"""
  icon: String
  id: ID!
  """อ่านแล้วหรือไม่"""
  isRead: Boolean = false
  """ข้อความ"""
  message: String
  """วันที่ส่ง"""
  sendAt: Date
  """หัวข้อ"""
  title: String
  """ประเภทการแจ้งเตือน"""
  type: NotificationType
  """URL"""
  url: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input UpdateRepairInput {
  """ความคิดเห็นการประเมิน"""
  CSATComment: String
  """วันที่นัดซ่อม"""
  appointmentAt: Date
  """วันที่สะดวกซ่อม"""
  appointmentRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  appointmentRepairRangeTime: String
  """หมายเหตุของไม่ครบ"""
  assetsCompleteRemark: String
  """วันที่มอบงาน"""
  assignedAt: Date
  """รหัสประเภท"""
  categoryId: String
  """รหัสสาเหตุ"""
  causeId: String
  """สาเหตุอื่นๆ"""
  causeOther: String
  """วันที่ปิดเคส"""
  closedAt: Date
  """หมายเหตุการปิดเคสจาก Call Center"""
  closedForCallCenterRemark: String
  """รหัสผู้รับเหมา"""
  contractorId: String
  deletedAt: Date
  """รายละเอียด"""
  description: String
  """ไฟล์"""
  files: [CreateFileInput!]
  """กำหนดจบงาน"""
  finishTargetAt: Date
  """วันที่จบงาน"""
  finishedAt: Date
  """วันที่จบงานนอกเหนือการรับประกัน"""
  finishedCustomerAt: Date
  """วันที่โทรครั้งแรก"""
  firstCalledAt: Date
  id: ID!
  """วันที่จบงาน"""
  inprogressAt: Date
  """หมายเหตุการเข้าตรวจสอบ"""
  inspectionRemark: String
  """ทรัพย์สินครบทุกชิ้น"""
  isAssetsComplete: Boolean = false
  """สถานะการประเมิน"""
  isCSAT: Boolean = false
  """สถานะการปิดเคสจาก Call Center"""
  isClosedForCallCenter: Boolean = false
  """ปิดเคส (รอดูอาการ)"""
  isFinishedMonitoring: Boolean = false
  """นอกเหนือการรับประกัน"""
  isOutsideInsurance: Boolean = false
  """มีผู้รับงานหรือไม่"""
  isRecipient: Boolean = false
  """เริ่มซ่อมวันนี้หรือนัดซ่อมวันอื่น"""
  isScheduledToday: Boolean = false
  """วันที่เข้าซ่อมล่าสุด"""
  lastRepairAt: Date
  """ช่วงเวลาเข้าซ่อมล่าสุด"""
  lastRepairRangeTime: String
  """หมายเหตุนอกเหนือการรับประกัน"""
  outsideInsuranceRemark: String
  """ความสำคัญ"""
  priorityId: String
  """ชื่อ นามสกุล ผู้รับงาน"""
  receiverName: String
  """วันที่เข้าซ่อม"""
  repairAt: Date
  """วันที่เข้าซ่อม"""
  repairDate: Date
  """ช่วงเวลาเข้าซ่อม"""
  repairRangeTime: String
  """วันที่เริ่มทำงาน"""
  scheduledAt: Date
  """รหัส SLA"""
  slaId: String
  """สถานะงาน"""
  status: TaskStatus = OPEN
  """รหัสประเภทย่อย"""
  subCategoryId: String
  """รหัสงานหลัก"""
  taskId: String
  """รหัสผู้ใช้งาน"""
  userId: String
}


input UpdateRepairSiteInspectionInput {
  """รหัสสาเหตุ"""
  causeId: String
  """รหัสผู้รับเหมา"""
  contractorId: String
  """กำหนดจบงาน"""
  finishTargetAt: Date
  id: ID!
  """รหัส SLA"""
  slaId: String
}


input UpdateRepairSopInput {
  deletedAt: Date
  """ไฟล์"""
  files: [CreateFileInput!]
  finishIssue: RepairSopFinishIssue
  finishPendingReason: RepairSopFinishPendingReason
  finishType: RepairSopFinishType
  finishedAt: Date
  id: ID!
  isFinished: Boolean = false
  nextRepairAt: Date
  """ช่วงเวลาเข้าซ่อม"""
  nextRepairRangeTime: String
  parentId: String
  pictureAt: Date
  remark: String
  repairId: String
  status: RepairSopStatus
  transactionAt: Date
}


input UpdateRoleInput {
  """คำอธิบาย"""
  description: String
  id: ID!
  """ระดับลำดับชั้น"""
  level: Int = 0
  """ชื่อ Role"""
  name: String
  """รหัส Parent Role"""
  parentId: String
  """รายการ Permissions"""
  permissions: [String!] = []
}


input UpdateUserProjectInput {
  deletedAt: Date
  id: ID!
  projectId: String
  towers: [CreateUserProjectTowerInput!]
  userId: String
}


input UpdateUserProjectTowerInput {
  deletedAt: Date
  floors: [String!]
  id: ID!
  tower: String
}


type User {
  """ข้อมูลพนักงาน"""
  employee: Employee
  """รหัสผู้ใช้งาน"""
  id: ID!
  """ข้อมูลโครงการที่ดูแล"""
  project: Project
  """ข้อมูลโครงการที่ดูแลทั้งหมด"""
  projects: [UserProject!]
  """ข้อมูล Roles"""
  roles: [Role!]
  """ข้อมูลการตั้งค่า"""
  setting: UserSetting
  """ชื่อผู้ใช้งาน"""
  username: String!
}


type UserPaginate {
  """รายการผู้ใช้งาน"""
  items: [User!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


type UserProject {
  createdAt: Date
  deletedAt: Date
  id: ID!
  project: Project!
  projectId: String!
  towers: [UserProjectTower!]!
  updatedAt: Date
  user: User!
  userId: String!
}


type UserProjectPaginate {
  """รายการโครงการที่ดูแล"""
  items: [UserProject!]!
  """ลิงค์หน้า"""
  links: IPaginateLinks
  """ข้อมูลการจัดการหน้า"""
  meta: IPaginateMeta
}


type UserProjectTower {
  createdAt: Date
  deletedAt: Date
  floors: [String!]
  id: ID!
  tower: String!
  updatedAt: Date
  userProjectId: String!
}


type UserRole {
  createdAt: Date
  deletedAt: Date
  id: ID!
  """ข้อมูล Role"""
  role: Role
  """รหัส Role"""
  roleId: String!
  updatedAt: Date
  """รหัสผู้ใช้งาน"""
  userId: String!
}


type UserSetting {
  createdAt: Date
  deletedAt: Date
  id: ID!
  notification: Boolean!
  updatedAt: Date
  userId: String!
}


type VwTaskRepairFeed {
  appointmentRepairAt: Date
  appointmentRepairRangeTime: String
  baseTaskId: String!
  category: String
  code: String!
  customerName: String!
  customerPhone: String!
  daysOverdue: Int!
  finishTargetAt: Date
  id: ID!
  inspectionAt: Date
  inspectionRangeTime: Option
  isCall: Boolean!
  isCallRed: Boolean!
  isScheduledToday: Boolean!
  projectId: String!
  repairAt: Date
  repairRangeTime: Option
  status: TaskStatus!
  subCategory: String
  totalTasks: Int
  type: String!
  unitId: String!
  unitNumber: String!
  userId: String!
}


`,gn=c_(),Xo=Js(Qs.DIRECTIVES,[]),ZI=ra(gn.getQueryType()?.getFields()),KI=ra(gn.getMutationType()?.getFields()),e_=ra(gn.getSubscriptionType()?.getFields()),Iu=Ot.keyBy(ld(),n=>n.name.toLocaleLowerCase()),n_=Ot.mapValues(Iu,n=>{const t=Xo.find(r=>r?.name===n.name||r?.name==="*");return t?t.args.some(r=>r==="*")?n.args:t.args.map(r=>n.args.find(s=>s.name===r)).filter(r=>!!r):[]}),t_=ra(gn.getTypeMap()),r_=zI(gn);function ra(n){return Ot.mapKeys(n||{},(t,r)=>r.toLocaleLowerCase())}function i_(){return Ot.size(gn.getTypeMap())<=10}function s_(){return[Lo("Queries",gn.getQueryType()),Lo("Mutations",gn.getMutationType()),Lo("Subscriptions",gn.getSubscriptionType()),f_(),u_()].filter(n=>!!n)}function Lo(n,t){return o_(n,a_(t))}function a_(n){return Ot.sortBy(n?.getFields()||{},t=>t.name)}function o_(n,t){return t.length===0?null:{type:"menu",title:n,children:t.map(r=>({type:"page",title:r.name,section:n,deprecated:!!r.deprecationReason,href:xi.joinUrlPaths(Xs(),n.toLocaleLowerCase(),r.name)}))}}function u_(){return i_()?null:{type:"menu",title:"Types",children:Ot.sortBy(Ot.map(gn.getTypeMap()),t=>t.name).filter(t=>!t.name.startsWith("__")).map(t=>({type:"page",title:t.name,section:"Types",href:xi.joinUrlPaths(Xs(),"types",t.name)}))}}function N_(){return!!gn.getQueryType()}function b_(n){return ZI[n.toLocaleLowerCase()]}function C_(){return!!gn.getMutationType()}function w_(n){return KI[n.toLocaleLowerCase()]}function O_(){return!!gn.getSubscriptionType()}function x_(n){return e_[n.toLocaleLowerCase()]}function k_(n){return t_[n.toLocaleLowerCase()]}function l_(n){return Iu[n.toLocaleLowerCase()]}function R_(n){return l_(n.name)!==void 0}function L_(){return Ot.size(Iu)>0}function B_(n){return n_[n.name.toLocaleLowerCase()]||[]}function P_(n){if(n)return r_.getFor(n)}function U_(n){return Ot.flatMap(n.getFields(),t=>({field:t,possibleDescriptions:ud(t,n)}))}function ud(n,t){return n?n.description?[{description:n.description,from:t}]:He(t)?t.getInterfaces().flatMap(r=>ud(r.getFields()[n.name],r)):[]:[]}function ld(){return Xo.some(n=>n?.name==="*")?gn.getDirectives().filter(n=>!["include","skip","deprecated","specifiedBy"].includes(n.name)):Xo.filter(n=>!!n?.name).map(({name:n})=>n?gn.getDirective(n):void 0).filter(n=>!!n)}function c_(){return Bf.trim().length===0?GI(JSON.parse(JSON.stringify({__schema:{types:[]}}))):WI(Bf)}function f_(){const n=ld();return n.length===0?null:{type:"menu",title:"Directives",children:n.map(t=>({type:"page",title:t.name,href:xi.joinUrlPaths(Xs(),"directives",t.name),section:"Directives"}))}}const M_=Js(Qs.APP_TITLE,"GraphQL Documentation"),cd=d_().concat(s_());g_(cd);const p_=Object.freeze(cd),$_=h_();function d_(){return Js(Qs.PAGES,D_()).filter(t=>!!t).map(t=>pd([],t))}function h_(){const n=m_();if(n)return n.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function g_(n){function t(s,a){for(const u of s){if(u.type==="page"){a(u);continue}u.type==="menu"&&t(u.children,a)}}let r;t(n,s=>{r&&(r.next={title:s.title,section:s.section,href:s.href},s.previous={title:r.title,section:r.section,href:r.href}),r=s})}function m_(){return fd(()=>!0)}function V_(n){return fd(t=>t.href.toLocaleLowerCase()===n.toLocaleLowerCase())}function fd(n){function t(r){for(const s of r){if(s.type==="page"&&n(s))return s;if(s.type==="menu"){const a=t(s.children);if(a)return a}}return null}return t(p_)}function pd(n,t){if(typeof t.content=="string")return{type:"page",title:t.title,content:t.content,href:xi.joinUrlPaths(Xs(),...n,Pf(t.title))};const r=n.concat([Pf(t.title)]);return{type:"menu",title:t.title,children:t.content.map(s=>({...pd(r,s),section:t.title}))}}function Pf(n){return xi.generatePathSegment(n,new ip)}function D_(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(n=>n.trim()).join(`
`)}]}]}export{ip as $,F_ as A,Js as B,li as C,Qs as D,Fs as E,Sy as F,i_ as G,k_ as H,P_ as I,Qt as J,S as K,st as L,Ge as M,Hn as N,He as O,hn as P,U_ as Q,Ai as R,hr as S,Pr as T,__ as U,WT as V,Rs as W,tp as X,zf as Y,I_ as Z,Ot as _,C_ as a,_e as a0,ci as a1,jT as a2,jn as a3,$T as a4,M_ as a5,N_ as b,b_ as c,O_ as d,x_ as e,V_ as f,w_ as g,$_ as h,Kf as i,at as j,Jf as k,L_ as l,l_ as m,B_ as n,wt as o,p_ as p,gn as q,R_ as r,A_ as s,Xs as t,xi as u,Ti as v,Ei as w,vu as x,Tn as y,we as z};
