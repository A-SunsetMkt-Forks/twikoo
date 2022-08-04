import{_ as w,r as P,o as a,c as d,b as L,f as T,i as A,j as m,k as pe,h as t,F as H,l as E,m as C,a as g,t as S,n as W,p as Z,q as y,w as x,s as he,v as $,d as K,x as X,y as Be,z as Ie,A as He,B as Q,C as ee,D as V,E as me,G as fe,H as R,u as ge,g as I,T as be,I as z,J as ke,K as q,L as Y,M as Me,N as De,O as te,P as $e,Q as ye,e as Pe,R as ne,S as Ae,U as J,V as ae,W as Re,X as Ee,Y as Oe,Z as Fe,$ as ze,a0 as We,a1 as je,a2 as G}from"./app.0053c563.js";const Ue={},Ge={class:"theme-default-content"};function Je(u,n){const e=P("Content");return a(),d("div",Ge,[L(e)])}var Ke=w(Ue,[["render",Je],["__file","HomeContent.vue"]]);const Ve={key:0,class:"features"},qe=T({__name:"HomeFeatures",setup(u){const n=A(),e=m(()=>pe(n.value.features)?n.value.features:[]);return(l,o)=>t(e).length?(a(),d("div",Ve,[(a(!0),d(H,null,E(t(e),c=>(a(),d("div",{key:c.title,class:"feature"},[g("h2",null,S(c.title),1),g("p",null,S(c.details),1)]))),128))])):C("",!0)}});var Ye=w(qe,[["__file","HomeFeatures.vue"]]);const Xe=["innerHTML"],Ze=["textContent"],Qe=T({__name:"HomeFooter",setup(u){const n=A(),e=m(()=>n.value.footer),l=m(()=>n.value.footerHtml);return(o,c)=>t(e)?(a(),d(H,{key:0},[t(l)?(a(),d("div",{key:0,class:"footer",innerHTML:t(e)},null,8,Xe)):(a(),d("div",{key:1,class:"footer",textContent:S(t(e))},null,8,Ze))],64)):C("",!0)}});var et=w(Qe,[["__file","HomeFooter.vue"]]);const tt=["href","rel","target","aria-label"],nt=T({inheritAttrs:!1}),at=T({...nt,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(u){const n=u,e=W(),l=He(),{item:o}=Z(n),c=m(()=>X(o.value.link)),_=m(()=>Be(o.value.link)||Ie(o.value.link)),v=m(()=>{if(!_.value){if(o.value.target)return o.value.target;if(c.value)return"_blank"}}),s=m(()=>v.value==="_blank"),r=m(()=>!c.value&&!_.value&&!s.value),i=m(()=>{if(!_.value){if(o.value.rel)return o.value.rel;if(s.value)return"noopener noreferrer"}}),p=m(()=>o.value.ariaLabel||o.value.text),h=m(()=>{const k=Object.keys(l.value.locales);return k.length?!k.some(f=>f===o.value.link):o.value.link!=="/"}),b=m(()=>h.value?e.path.startsWith(o.value.link):!1),N=m(()=>r.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):b.value:!1);return(k,f)=>{const B=P("RouterLink"),M=P("AutoLinkExternalIcon");return t(r)?(a(),y(B,he({key:0,class:{"router-link-active":t(N)},to:t(o).link,"aria-label":t(p)},k.$attrs),{default:x(()=>[$(k.$slots,"before"),K(" "+S(t(o).text)+" ",1),$(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),d("a",he({key:1,class:"external-link",href:t(o).link,rel:t(i),target:t(v),"aria-label":t(p)},k.$attrs),[$(k.$slots,"before"),K(" "+S(t(o).text)+" ",1),t(s)?(a(),y(M,{key:0})):C("",!0),$(k.$slots,"after")],16,tt))}}});var D=w(at,[["__file","AutoLink.vue"]]);const ot={class:"hero"},st={key:0,id:"main-title"},rt={key:1,class:"description"},lt={key:2,class:"actions"},it=T({__name:"HomeHero",setup(u){const n=A(),e=Q(),l=ee(),o=m(()=>l.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),c=m(()=>n.value.heroText===null?null:n.value.heroText||e.value.title||"Hello"),_=m(()=>n.value.heroAlt||c.value||"hero"),v=m(()=>n.value.tagline===null?null:n.value.tagline||e.value.description||"Welcome to your VuePress site"),s=m(()=>pe(n.value.actions)?n.value.actions.map(({text:i,link:p,type:h="primary"})=>({text:i,link:p,type:h})):[]),r=()=>{if(!o.value)return null;const i=V("img",{src:me(o.value),alt:_.value});return n.value.heroImageDark===void 0?i:V(fe,()=>i)};return(i,p)=>(a(),d("header",ot,[L(r),t(c)?(a(),d("h1",st,S(t(c)),1)):C("",!0),t(v)?(a(),d("p",rt,S(t(v)),1)):C("",!0),t(s).length?(a(),d("p",lt,[(a(!0),d(H,null,E(t(s),h=>(a(),y(D,{key:h.text,class:R(["action-button",[h.type]]),item:h},null,8,["class","item"]))),128))])):C("",!0)]))}});var ut=w(it,[["__file","HomeHero.vue"]]);const ct={class:"home"},dt=T({__name:"Home",setup(u){return(n,e)=>(a(),d("main",ct,[L(ut),L(Ye),L(Ke),L(et)]))}});var vt=w(dt,[["__file","Home.vue"]]);const ht=T({__name:"NavbarBrand",setup(u){const n=ge(),e=Q(),l=I(),o=ee(),c=m(()=>l.value.home||n.value),_=m(()=>e.value.title),v=m(()=>o.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),s=()=>{if(!v.value)return null;const r=V("img",{class:"logo",src:me(v.value),alt:_.value});return l.value.logoDark===void 0?r:V(fe,()=>r)};return(r,i)=>{const p=P("RouterLink");return a(),y(p,{to:t(c)},{default:x(()=>[L(s),t(_)?(a(),d("span",{key:0,class:R(["site-name",{"can-hide":t(v)}])},S(t(_)),3)):C("",!0)]),_:1},8,["to"])}}});var _t=w(ht,[["__file","NavbarBrand.vue"]]);const pt=T({__name:"DropdownTransition",setup(u){const n=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,o)=>(a(),y(be,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:x(()=>[$(l.$slots,"default")]),_:3}))}});var Le=w(pt,[["__file","DropdownTransition.vue"]]);const mt=["aria-label"],ft={class:"title"},gt=g("span",{class:"arrow down"},null,-1),bt=["aria-label"],kt={class:"title"},$t={class:"navbar-dropdown"},yt={class:"navbar-dropdown-subtitle"},Lt={key:1},wt={class:"navbar-dropdown-subitem-wrapper"},Ct=T({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(u){const n=u,{item:e}=Z(n),l=m(()=>e.value.ariaLabel||e.value.text),o=z(!1),c=W();ke(()=>c.path,()=>{o.value=!1});const _=s=>{s.detail===0?o.value=!o.value:o.value=!1},v=(s,r)=>r[r.length-1]===s;return(s,r)=>(a(),d("div",{class:R(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":t(l),onClick:_},[g("span",ft,S(t(e).text),1),gt],8,mt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":t(l),onClick:r[0]||(r[0]=i=>o.value=!o.value)},[g("span",kt,S(t(e).text),1),g("span",{class:R(["arrow",o.value?"down":"right"])},null,2)],8,bt),L(Le,null,{default:x(()=>[q(g("ul",$t,[(a(!0),d(H,null,E(t(e).children,i=>(a(),d("li",{key:i.text,class:"navbar-dropdown-item"},[i.children?(a(),d(H,{key:0},[g("h4",yt,[i.link?(a(),y(D,{key:0,item:i,onFocusout:p=>v(i,t(e).children)&&i.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(a(),d("span",Lt,S(i.text),1))]),g("ul",wt,[(a(!0),d(H,null,E(i.children,p=>(a(),d("li",{key:p.link,class:"navbar-dropdown-subitem"},[L(D,{item:p,onFocusout:h=>v(p,i.children)&&v(i,t(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),y(D,{key:1,item:i,onFocusout:p=>v(i,t(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Y,o.value]])]),_:1})],2))}});var Tt=w(Ct,[["__file","NavbarDropdown.vue"]]);const _e=u=>decodeURI(u).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),xt=(u,n)=>{if(n.hash===u)return!0;const e=_e(n.path),l=_e(u);return e===l},we=(u,n)=>u.link&&xt(u.link,n)?!0:u.children?u.children.some(e=>we(e,n)):!1,Ce=u=>!X(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,St={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Nt=({docsRepo:u,editLinkPattern:n})=>{if(n)return n;const e=Ce(u);return e!==null?St[e]:null},Bt=({docsRepo:u,docsBranch:n,docsDir:e,filePathRelative:l,editLinkPattern:o})=>{if(!l)return null;const c=Nt({docsRepo:u,editLinkPattern:o});return c?c.replace(/:repo/,X(u)?u:`https://github.com/${u}`).replace(/:branch/,n).replace(/:path/,Me(`${De(e)}/${l}`)):null},It={key:0,class:"navbar-items"},Ht=T({__name:"NavbarItems",setup(u){const n=()=>{const r=te(),i=ge(),p=Q(),h=I();return m(()=>{var M,O,F;const b=Object.keys(p.value.locales);if(b.length<2)return[];const N=r.currentRoute.value.path,k=r.currentRoute.value.fullPath,f=r.currentRoute.value.hash;return[{text:(M=h.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(F=(O=h.value.selectLanguageAriaLabel)!=null?O:h.value.selectLanguageText)!=null?F:"unknown language",children:b.map(j=>{var re,le,ie,ue,ce,de;const xe=(le=(re=p.value.locales)==null?void 0:re[j])!=null?le:{},oe=(ue=(ie=h.value.locales)==null?void 0:ie[j])!=null?ue:{},se=`${xe.lang}`,Se=(ce=oe.selectLanguageName)!=null?ce:se;let U;if(se===p.value.lang)U=k;else{const ve=N.replace(i.value,j);r.getRoutes().some(Ne=>Ne.path===ve)?U=`${ve}${f}`:U=(de=oe.home)!=null?de:j}return{text:Se,link:U}})}]})},e=()=>{const r=I(),i=m(()=>r.value.repo),p=m(()=>i.value?Ce(i.value):null),h=m(()=>i.value&&!X(i.value)?`https://github.com/${i.value}`:i.value),b=m(()=>h.value?r.value.repoLabel?r.value.repoLabel:p.value===null?"Source":p.value:null);return m(()=>!h.value||!b.value?[]:[{text:b.value,link:h.value}])},l=r=>$e(r)?ye(r):r.children?{...r,children:r.children.map(l)}:r,c=(()=>{const r=I();return m(()=>(r.value.navbar||[]).map(l))})(),_=n(),v=e(),s=m(()=>[...c.value,..._.value,...v.value]);return(r,i)=>t(s).length?(a(),d("nav",It,[(a(!0),d(H,null,E(t(s),p=>(a(),d("div",{key:p.text,class:"navbar-item"},[p.children?(a(),y(Tt,{key:0,item:p},null,8,["item"])):(a(),y(D,{key:1,item:p},null,8,["item"]))]))),128))])):C("",!0)}});var Te=w(Ht,[["__file","NavbarItems.vue"]]);const Mt=["title"],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Pt=Pe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),At=[Pt],Rt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Et=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ot=[Et],Ft=T({__name:"ToggleColorModeButton",setup(u){const n=I(),e=ee(),l=()=>{e.value=!e.value};return(o,c)=>(a(),d("button",{class:"toggle-color-mode-button",title:t(n).toggleColorMode,onClick:l},[q((a(),d("svg",Dt,At,512)),[[Y,!t(e)]]),q((a(),d("svg",Rt,Ot,512)),[[Y,t(e)]])],8,Mt))}});var zt=w(Ft,[["__file","ToggleColorModeButton.vue"]]);const Wt=["title"],jt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Ut=[jt],Gt=T({__name:"ToggleSidebarButton",emits:["toggle"],setup(u){const n=I();return(e,l)=>(a(),d("div",{class:"toggle-sidebar-button",title:t(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=o=>e.$emit("toggle"))},Ut,8,Wt))}});var Jt=w(Gt,[["__file","ToggleSidebarButton.vue"]]);const Kt=T({__name:"Navbar",emits:["toggle-sidebar"],setup(u){const n=I(),e=z(null),l=z(null),o=z(0),c=m(()=>o.value?{maxWidth:o.value+"px"}:{});ne(()=>{const s=_(e.value,"paddingLeft")+_(e.value,"paddingRight"),r=()=>{var i;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-s-(((i=l.value)==null?void 0:i.offsetWidth)||0)};r(),window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1)});function _(v,s){var p,h,b;const r=(b=(h=(p=v==null?void 0:v.ownerDocument)==null?void 0:p.defaultView)==null?void 0:h.getComputedStyle(v,null))==null?void 0:b[s],i=Number.parseInt(r,10);return Number.isNaN(i)?0:i}return(v,s)=>{const r=P("NavbarSearch");return a(),d("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(Jt,{onToggle:s[0]||(s[0]=i=>v.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:l},[L(_t)],512),g("div",{class:"navbar-items-wrapper",style:Ae(t(c))},[$(v.$slots,"before"),L(Te,{class:"can-hide"}),$(v.$slots,"after"),t(n).colorModeSwitch?(a(),y(zt,{key:0})):C("",!0),L(r)],4)],512)}}});var Vt=w(Kt,[["__file","Navbar.vue"]]);const qt={class:"page-meta"},Yt={key:0,class:"meta-item edit-link"},Xt={key:1,class:"meta-item last-updated"},Zt={class:"meta-item-label"},Qt={class:"meta-item-info"},en={key:2,class:"meta-item contributors"},tn={class:"meta-item-label"},nn={class:"meta-item-info"},an=["title"],on=K(", "),sn=T({__name:"PageMeta",setup(u){const n=()=>{const s=I(),r=J(),i=A();return m(()=>{var M,O,F;if(!((O=(M=i.value.editLink)!=null?M:s.value.editLink)!=null?O:!0))return null;const{repo:h,docsRepo:b=h,docsBranch:N="main",docsDir:k="",editLinkText:f}=s.value;if(!b)return null;const B=Bt({docsRepo:b,docsBranch:N,docsDir:k,filePathRelative:r.value.filePathRelative,editLinkPattern:(F=i.value.editLinkPattern)!=null?F:s.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const s=I(),r=J(),i=A();return m(()=>{var b,N,k,f;return!((N=(b=i.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?N:!0)||!((k=r.value.git)!=null&&k.updatedTime)?null:new Date((f=r.value.git)==null?void 0:f.updatedTime).toLocaleString()})},l=()=>{const s=I(),r=J(),i=A();return m(()=>{var h,b,N,k;return((b=(h=i.value.contributors)!=null?h:s.value.contributors)!=null?b:!0)&&(k=(N=r.value.git)==null?void 0:N.contributors)!=null?k:null})},o=I(),c=n(),_=e(),v=l();return(s,r)=>{const i=P("ClientOnly");return a(),d("footer",qt,[t(c)?(a(),d("div",Yt,[L(D,{class:"meta-item-label",item:t(c)},null,8,["item"])])):C("",!0),t(_)?(a(),d("div",Xt,[g("span",Zt,S(t(o).lastUpdatedText)+": ",1),L(i,null,{default:x(()=>[g("span",Qt,S(t(_)),1)]),_:1})])):C("",!0),t(v)&&t(v).length?(a(),d("div",en,[g("span",tn,S(t(o).contributorsText)+": ",1),g("span",nn,[(a(!0),d(H,null,E(t(v),(p,h)=>(a(),d(H,{key:h},[g("span",{class:"contributor",title:`email: ${p.email}`},S(p.name),9,an),h!==t(v).length-1?(a(),d(H,{key:0},[on],64)):C("",!0)],64))),128))])])):C("",!0)])}}});var rn=w(sn,[["__file","PageMeta.vue"]]);const ln={key:0,class:"page-nav"},un={class:"inner"},cn={key:0,class:"prev"},dn={key:1,class:"next"},vn=T({__name:"PageNav",setup(u){const n=s=>s===!1?null:$e(s)?ye(s):Re(s)?s:!1,e=(s,r,i)=>{const p=s.findIndex(h=>h.link===r);if(p!==-1){const h=s[p+i];return h!=null&&h.link?h:null}for(const h of s)if(h.children){const b=e(h.children,r,i);if(b)return b}return null},l=A(),o=ae(),c=W(),_=m(()=>{const s=n(l.value.prev);return s!==!1?s:e(o.value,c.path,-1)}),v=m(()=>{const s=n(l.value.next);return s!==!1?s:e(o.value,c.path,1)});return(s,r)=>t(_)||t(v)?(a(),d("nav",ln,[g("p",un,[t(_)?(a(),d("span",cn,[L(D,{item:t(_)},null,8,["item"])])):C("",!0),t(v)?(a(),d("span",dn,[L(D,{item:t(v)},null,8,["item"])])):C("",!0)])])):C("",!0)}});var hn=w(vn,[["__file","PageNav.vue"]]);const _n={class:"page"},pn={class:"theme-default-content"},mn=T({__name:"Page",setup(u){return(n,e)=>{const l=P("Content");return a(),d("main",_n,[$(n.$slots,"top"),g("div",pn,[$(n.$slots,"content-top"),L(l),$(n.$slots,"content-bottom")]),L(rn),L(hn),$(n.$slots,"bottom")])}}});var fn=w(mn,[["__file","Page.vue"]]);const gn=["onKeydown"],bn={class:"sidebar-item-children"},kn=T({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(u){const n=u,{item:e,depth:l}=Z(n),o=W(),c=te(),_=m(()=>we(e.value,o)),v=m(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:_.value,collapsible:e.value.collapsible})),[s,r]=Ee(_.value),i=h=>{e.value.collapsible&&(h.preventDefault(),r())},p=c.afterEach(h=>{Oe(()=>{s.value=e.value.collapsible?_.value:!0})});return Fe(()=>{p()}),(h,b)=>{var k;const N=P("SidebarItem",!0);return a(),d("li",null,[t(e).link?(a(),y(D,{key:0,class:R(t(v)),item:t(e)},null,8,["class","item"])):(a(),d("p",{key:1,tabindex:"0",class:R(t(v)),onClick:i,onKeydown:ze(i,["enter"])},[K(S(t(e).text)+" ",1),t(e).collapsible?(a(),d("span",{key:0,class:R(["arrow",t(s)?"down":"right"])},null,2)):C("",!0)],42,gn)),(k=t(e).children)!=null&&k.length?(a(),y(Le,{key:2},{default:x(()=>[q(g("ul",bn,[(a(!0),d(H,null,E(t(e).children,f=>(a(),y(N,{key:`${t(l)}${f.text}${f.link}`,item:f,depth:t(l)+1},null,8,["item","depth"]))),128))],512),[[Y,t(s)]])]),_:1})):C("",!0)])}}});var $n=w(kn,[["__file","SidebarItem.vue"]]);const yn={key:0,class:"sidebar-items"},Ln=T({__name:"SidebarItems",setup(u){const n=W(),e=ae();return ne(()=>{ke(()=>n.hash,l=>{const o=document.querySelector(".sidebar");if(!o)return;const c=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${l}"]`);if(!c)return;const{top:_,height:v}=o.getBoundingClientRect(),{top:s,height:r}=c.getBoundingClientRect();s<_?c.scrollIntoView(!0):s+r>_+v&&c.scrollIntoView(!1)})}),(l,o)=>t(e).length?(a(),d("ul",yn,[(a(!0),d(H,null,E(t(e),c=>(a(),y($n,{key:`${c.text}${c.link}`,item:c},null,8,["item"]))),128))])):C("",!0)}});var wn=w(Ln,[["__file","SidebarItems.vue"]]);const Cn={class:"sidebar"},Tn=T({__name:"Sidebar",setup(u){return(n,e)=>(a(),d("aside",Cn,[L(Te),$(n.$slots,"top"),L(wn),$(n.$slots,"bottom")]))}});var xn=w(Tn,[["__file","Sidebar.vue"]]);const Sn=T({__name:"Layout",setup(u){const n=J(),e=A(),l=I(),o=m(()=>e.value.navbar!==!1&&l.value.navbar!==!1),c=ae(),_=z(!1),v=f=>{_.value=typeof f=="boolean"?f:!_.value},s={x:0,y:0},r=f=>{s.x=f.changedTouches[0].clientX,s.y=f.changedTouches[0].clientY},i=f=>{const B=f.changedTouches[0].clientX-s.x,M=f.changedTouches[0].clientY-s.y;Math.abs(B)>Math.abs(M)&&Math.abs(B)>40&&(B>0&&s.x<=80?v(!0):v(!1))},p=m(()=>[{"no-navbar":!o.value,"no-sidebar":!c.value.length,"sidebar-open":_.value},e.value.pageClass]);let h;ne(()=>{h=te().afterEach(()=>{v(!1)})}),We(()=>{h()});const b=je(),N=b.resolve,k=b.pending;return(f,B)=>(a(),d("div",{class:R(["theme-container",t(p)]),onTouchstart:r,onTouchend:i},[$(f.$slots,"navbar",{},()=>[t(o)?(a(),y(Vt,{key:0,onToggleSidebar:v},{before:x(()=>[$(f.$slots,"navbar-before")]),after:x(()=>[$(f.$slots,"navbar-after")]),_:3})):C("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=M=>v(!1))}),$(f.$slots,"sidebar",{},()=>[L(xn,null,{top:x(()=>[$(f.$slots,"sidebar-top")]),bottom:x(()=>[$(f.$slots,"sidebar-bottom")]),_:3})]),$(f.$slots,"page",{},()=>[t(e).home?(a(),y(vt,{key:0})):(a(),y(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:t(N),onBeforeLeave:t(k)},{default:x(()=>[(a(),y(fn,{key:t(n).path},{top:x(()=>[$(f.$slots,"page-top")]),"content-top":x(()=>[$(f.$slots,"page-content-top")]),"content-bottom":x(()=>[$(f.$slots,"page-content-bottom")]),bottom:x(()=>[$(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Nn=w(Sn,[["__file","Layout.vue"]]);const Bn="https://twikoo.vercel.app",In={name:"Layout",components:{ParentLayout:Nn},mounted(){this.initTwikoo(),this.initJs()},methods:{initTwikoo(){try{twikoo.init({envId:Bn,onCommentLoaded:this.initLightGallery})}catch{}},initLightGallery(){for(var u=document.getElementsByClassName("tk-content"),n=0;n<u.length;n++){var e=u[n],l=e.getElementsByTagName("img");if(l.length>0){for(var o=0;o<l.length;o++){var c=l[o],_=document.createElement("a");_.setAttribute("class","tk-lg-link"),_.setAttribute("href",c.getAttribute("src")),_.setAttribute("data-src",c.getAttribute("src")),_.appendChild(c.cloneNode(!1)),c.parentNode.insertBefore(_,c.nextSibling),c.remove()}lightGallery(e,{selector:".tk-lg-link",share:!1})}}},initJs(){const u=this.$refs.twikooJs;u&&(u.onload=this.initTwikoo,this.$router.afterEach(this.onRoute))},onRoute(u,n){u.path!==n.path&&setTimeout(this.initTwikoo,1e3)}}},Hn={class:"page-nav"},Mn=g("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"},null,-1),Dn=g("link",{rel:"stylesheet",href:"https://cdn.staticfile.org/lightgallery/2.1.8/css/lightgallery.css"},null,-1),Pn=g("div",{id:"twikoo"},null,-1);function An(u,n,e,l,o,c){const _=P("ParentLayout");return a(),y(_,null,{"page-bottom":x(()=>[g("div",Hn,[Mn,(a(),y(G("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"})),(a(),y(G("script"),{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"})),Dn,(a(),y(G("script"),{src:"https://cdn.staticfile.org/lightgallery/2.1.8/lightgallery.min.js"})),Pn,(a(),y(G("script"),{src:"https://cdn.jsdelivr.net/npm/twikoo@1.6.3/dist/twikoo.all.min.js",ref:"twikooJs"},null,512))])]),_:1})}var En=w(In,[["render",An],["__file","Layout.vue"]]);export{En as default};
