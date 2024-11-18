import{_ as Q}from"./DvE30HEv.js";import{_ as j}from"./BopwkP27.js";import{_ as U,u as N,a5 as J,B as _e,S as ge,V as be,a6 as pe,a7 as ye,w as we,f as ke,a8 as $e,W as Le,C as Ce,c as q,b as O,n as le,p as Se,a9 as T,d as I,a as G,r as ie,aa as Ie,e as Ee,q as Oe}from"./CFLGZ_3H.js";import{w as Z,a3 as c,D as u,a8 as t,a0 as _,u as l,aq as Ue,aa as y,ah as se,R as Ae,ac as D,a4 as g,M as r,O as ve,N as ne,Q as F,ap as R,a5 as C,a as L,$ as A,z as E,a1 as xe,a6 as W,a7 as Y,W as Pe,af as H,F as z,ag as V,Y as P,P as Ne,y as Te,Z as De,S as oe}from"./Bm3a7n3s.js";import{C as Re,U as ze,s as Be}from"./DDwkrLbC.js";import{Z as ae,R as Me,s as Ke}from"./CL4V9NBK.js";import{F as Fe}from"./CMuBE9cn.js";import{O as ee}from"./B6i1gsCM.js";import{u as x}from"./BQcUMQBo.js";const Ve={__name:"LanguageToggle",props:{color:{type:String,default:"#fff",required:!1}},setup(n){const{locale:e}=N(),o=()=>{e.value=e.value==="ar"?"en":"ar",location.reload()};return Z(()=>{e.value&&(e.value==="ar"?(J("lang").value="ar",J("i18n_redirected").value="ar"):(J("lang").value="en",J("i18n_redirected").value="en"))}),(f,p)=>(c(),u("div",{class:y(["language-picker text-white fw-bold pointer",l(e)==="ar"?"ar-flex":""])},[t("span",{onClick:o,style:Ue(`color: ${n.color};`)},_(l(e)==="ar"?"English":"العربية"),5)],2))}},fe=U(Ve,[["__scopeId","data-v-5ad6620a"]]);var qe=function(e){var o=e.dt;return`
.p-popover {
    margin-top: `.concat(o("popover.gutter"),`;
    background: `).concat(o("popover.background"),`;
    color: `).concat(o("popover.color"),`;
    border: 1px solid `).concat(o("popover.border.color"),`;
    border-radius: `).concat(o("popover.border.radius"),`;
    box-shadow: `).concat(o("popover.shadow"),`;
}

.p-popover-content {
    padding: `).concat(o("popover.content.padding"),`;
}

.p-popover-flipped {
    margin-top: calc(`).concat(o("popover.gutter"),` * -1);
    margin-bottom: `).concat(o("popover.gutter"),`;
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(`).concat(o("popover.arrow.offset")," + ").concat(o("popover.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(`).concat(o("popover.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(o("popover.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(o("popover.background"),`;
}

.p-popover:before {
    border-width: `).concat(o("popover.gutter"),`;
    margin-left: calc(-1 * `).concat(o("popover.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(o("popover.border.color"),`;
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(o("popover.background"),`;
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(o("popover.border.color"),`;
}
`)},Ze={root:"p-popover p-component",content:"p-popover-content"},He=_e.extend({name:"popover",theme:qe,classes:Ze}),Qe={name:"BasePopover",extends:Be,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:He,provide:function(){return{$pcPopover:this,$parentInstance:this}}},me={name:"Popover",extends:Qe,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&ae.clear(this.container),this.overlayEventListener&&(ee.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,o){this.visible?this.hide():this.show(e,o)},show:function(e,o){this.visible=!0,this.eventTarget=e.currentTarget,this.target=o||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var o=this;this.container.setAttribute(this.attributeSelector,""),ge(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&ae.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(f){o.container.contains(f.target)&&(o.selfClick=!0)},this.focus(),ee.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),ee.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&ae.clear(e)},alignOverlay:function(){be(this.container,this.target,!1);var e=pe(this.container),o=pe(this.target),f=0;e.left<o.left&&(f=o.left-e.left),this.container.style.setProperty(ye("popover.arrow.left").name,"".concat(f,"px")),e.top<o.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&we(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),ke(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&$e()&&(this.outsideClickListener=function(o){e.visible&&!e.selfClick&&!e.isTargetClicked(o)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Re(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!Le()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Ce(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var o="";for(var f in this.breakpoints)o+=`
                        @media screen and (max-width: `.concat(f,`) {
                            .p-popover[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[f],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){ee.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return ze()}},directives:{focustrap:Fe,ripple:Me},components:{Portal:Ke}},je=["aria-modal"];function Ge(n,e,o,f,p,s){var d=se("Portal"),v=Ae("focustrap");return c(),D(d,{appendTo:n.appendTo},{default:g(function(){return[r(ve,ne({name:"p-popover",onEnter:s.onEnter,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave},n.ptm("transition")),{default:g(function(){return[p.visible?F((c(),u("div",ne({key:0,ref:s.containerRef,role:"dialog","aria-modal":p.visible,onClick:e[3]||(e[3]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)}),class:n.cx("root")},n.ptmi("root")),[n.$slots.container?R(n.$slots,"container",{key:0,closeCallback:s.hide,keydownCallback:function(i){return s.onButtonKeydown(i)}}):(c(),u("div",ne({key:1,class:n.cx("content"),onClick:e[0]||(e[0]=function(){return s.onContentClick&&s.onContentClick.apply(s,arguments)}),onMousedown:e[1]||(e[1]=function(){return s.onContentClick&&s.onContentClick.apply(s,arguments)}),onKeydown:e[2]||(e[2]=function(){return s.onContentKeydown&&s.onContentKeydown.apply(s,arguments)})},n.ptm("content")),[R(n.$slots,"default")],16))],16,je)),[[v]]):C("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}me.render=Ge;const We=n=>(W("data-v-72c19869"),n=n(),Y(),n),Ye={class:"d-flex align-items-center bottom-bar"},Xe={key:0,class:"cartbox"},Je={class:"flex flex-col gap-4 w-[25rem]"},et=["placeholder"],tt=We(()=>t("button",{class:"search__btn"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22"},[t("path",{d:"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z",fill:"#efeff1"})])],-1)),nt={__name:"BottomBar",setup(n){q().value;const e=O(),o=L(),f=d=>{o.value.toggle(d)};let p=L("");const s=async()=>{let d=p.value;return p.value="",le(`/SearchProducts/${d}`)};return(d,v)=>{const h=Q,i=j,w=me,k=fe;return c(),u("div",Ye,[r(i,{to:"/Fav",class:"cart pointer mx-2 item",style:{position:"relative"}},{default:g(()=>[r(h,{icon:["fas","heart"]}),t("p",null,_(d.$i18n.locale==="ar"?"المفضلة":"Favourite"),1)]),_:1}),r(i,{to:"/Cart",class:"cart pointer mx-2 item",style:{position:"relative"}},{default:g(()=>[l(e).totalQty>0?(c(),u("small",Xe,_(l(e).totalQty),1)):C("",!0),r(h,{icon:["fas","cart-shopping"]}),t("p",null,_(d.$i18n.locale==="ar"?"السلة":"Cart"),1)]),_:1}),t("div",{class:"search pointer mx-2 item",onClick:A(f,["stop"])},[r(h,{icon:["fas","magnifying-glass"]}),t("p",null,_(d.$i18n.locale==="ar"?"البحث":"Search"),1)]),r(w,{ref_key:"op",ref:o,class:"search-content"},{default:g(()=>[t("div",Je,[t("form",{class:"container",onSubmit:v[1]||(v[1]=A(a=>s(),["prevent"]))},[F(t("input",{class:y([d.$i18n.locale==="ar"?"ar":"","input"]),"onUpdate:modelValue":v[0]||(v[0]=a=>E(p)?p.value=a:p=a),type:"text",name:"text",placeholder:d.$i18n.locale==="ar"?"ابحث بجميع المنتجات":"Search in all products",required:""},null,10,et),[[xe,l(p)]]),tt],32)])]),_:1},512),t("div",{class:y(["buttons item",d.locale==="ar"?"ar":""]),style:{display:"flex","align-items":"center","flex-direction":"column",color:"#fff"}},[r(h,{icon:["fas","globe"]}),r(k)],2)])}}},ot=U(nt,[["__scopeId","data-v-72c19869"]]),at={class:"root"},st={class:"content"},lt={__name:"AppModal",props:["isOpen"],emits:["updateIsOpen"],setup(n,{emit:e}){const o=e,f=p=>{o("updateIsOpen",p)};return(p,s)=>{const d=Q;return c(),u("div",at,[(c(),D(Pe,{to:"body"},[t("div",{class:y(["wrapper",n.isOpen?"active":""])},null,2),r(ve,{name:"fade",mode:"out-in"},{default:g(()=>[n.isOpen?(c(),u("div",{key:0,class:"modal",onClick:s[2]||(s[2]=v=>f(!1))},[t("div",{onClick:s[1]||(s[1]=A(()=>{},["stop"]))},[t("div",{class:y(["modal-header",p.$i18n.locale==="ar"?"ar":""])},[R(p.$slots,"header",{class:"modal-header"},void 0,!0),r(d,{onClick:s[0]||(s[0]=v=>f(!1)),icon:["fas","xmark"]})],2),t("div",st,[R(p.$slots,"content",{},void 0,!0)]),t("div",{class:y(["modal-footer",p.$i18n.locale==="ar"?"ar":""])},[R(p.$slots,"footer",{},void 0,!0)],2)])])):C("",!0)]),_:3})]))])}}},it=U(lt,[["__scopeId","data-v-e5b3c294"]]),re=Se("/photos/g.png"),te=n=>(W("data-v-47970839"),n=n(),Y(),n),rt=te(()=>t("span",null,null,-1)),ct=te(()=>t("span",null,null,-1)),dt=te(()=>t("span",null,null,-1)),ut=[rt,ct,dt],pt={class:"container"},vt=te(()=>t("img",{src:re,alt:""},null,-1)),ft=["onClick"],mt={key:0,class:"menu-item color",style:{padding:"16px 12px"}},ht={key:1,class:"menu-item color",style:{padding:"16px 12px"}},_t={href:"https://admin.nabtaty.com/",target:"_blank",class:"fw-bold",style:{color:"#073e2f"}},gt={class:"color"},bt={__name:"MobileNav",async setup(n){let e,o;const{locale:f}=N(),{$awn:p}=ie(),{public:{apiBase:s,api:d}}=G();let v=L();if(f.value==="ar"){const{data:a,pending:m}=([e,o]=H(()=>x(`${d.findAllCategories}`,{credentials:"include",baseURL:s,headers:{"accept-language":"ar"}},"$KD6pfF57Xy")),e=await e,o(),e);Z(()=>{a.value&&(v.value=a.value)})}else{const{data:a,pending:m}=([e,o]=H(()=>x(`${d.findAllCategories}`,{credentials:"include",baseURL:s,headers:{"accept-language":"en"}},"$B3nLE2HZD4")),e=await e,o(),e);Z(()=>{a.value&&(v.value=a.value)})}let h=L(!1);q().value;let i=L(!1);const w=a=>{i.value=a};O();const k=async()=>(await x("/auth/logout",{credentials:"include",baseURL:s,method:"GET"},"$gaPS1T4Ih8"),I().value=null,localStorage.removeItem("userInfo"),localStorage.getItem("cart")&&(localStorage.removeItem("cart"),O().value.items=new Array,O().value.totalPrice=0,O().value.totalQty=0),q().value.isAuthenticated=!1,p.success(f.value==="ar"?"تم تسجيل الخروج بنجاح":"You have successfully logged out",{durations:{global:5e3}}),location.reload(),le("/"));return(a,m)=>{var M,K;const b=j,B=Q,$=it;return c(),u(z,null,[t("div",{class:y(["burger",("useOpenNav"in a?a.useOpenNav:l(T))().value?"open":""]),onClick:m[0]||(m[0]=A(S=>("useOpenNav"in a?a.useOpenNav:l(T))().value=!("useOpenNav"in a?a.useOpenNav:l(T))().value,["stop"]))},ut,2),t("div",{class:y(["navCollapsed",("useOpenNav"in a?a.useOpenNav:l(T))().value?"open":""]),onClick:m[5]||(m[5]=A(S=>("useOpenNav"in a?a.useOpenNav:l(T))().value=!0,["stop"]))},[t("div",pt,[r(b,{to:"/",class:y(["logoMob",a.$i18n.locale==="en"?"en":""]),style:{border:"none !important"}},{default:g(()=>[vt]),_:1},8,["class"]),t("ul",null,[(c(!0),u(z,null,V(l(v),S=>(c(),u("li",{key:S.id,class:"menu-item"},[t("div",{class:"paste-button",onClick:A(X=>l(h)===S.id?E(h)?h.value="":h="":E(h)?h.value=S.id:h=S.id,["stop"])},[t("div",null,[r(b,{class:"button",to:`/Products/${S.id}`,onClick:m[1]||(m[1]=A(X=>("useOpenNav"in a?a.useOpenNav:l(T))().value=!1,["stop"]))},{default:g(()=>[P(_(S.category_name),1)]),_:2},1032,["to"])])],8,ft)]))),128)),(M=("useUserInfo"in a?a.useUserInfo:l(I))().value)!=null&&M.email?(c(),u("li",mt,[t("div",{onClick:m[2]||(m[2]=S=>E(i)?i.value=!0:i=!0)},[r(B,{icon:["fas","power-off"]}),P(" "+_(a.$i18n.locale==="ar"?"تسجيل الخروج":"Log out"),1)])])):C("",!0),(K=("useUserInfo"in a?a.useUserInfo:l(I))().value)!=null&&K.isAdmin?(c(),u("li",ht,[t("div",null,[t("a",_t,_(a.$i18n.locale==="ar"?"لوحة التحكم":"Admin Panel"),1)])])):C("",!0)])]),r($,{isOpen:l(i),onUpdateIsOpen:w},{header:g(()=>[t("h5",gt,_(a.$i18n.locale==="ar"?"تسجيل الخروج":"Logging out"),1)]),content:g(()=>[t("p",null,_(a.$i18n.locale==="ar"?"هل تريد تسجيل الخروج؟":"Do you want to log out?"),1)]),footer:g(()=>[t("button",{class:"btn text-white",style:{"background-color":"#bf9847"},onClick:m[3]||(m[3]=S=>E(i)?i.value=!1:i=!1)},_(a.$i18n.locale==="ar"?"إغلاق":"Close"),1),t("button",{class:"btn",onClick:m[4]||(m[4]=S=>{k(),E(i)?i.value=!1:i=!1})},_(a.$i18n.locale==="ar"?"تسجيل الخروج":"Log out"),1)]),_:1},8,["isOpen"])],2)],64)}}},yt=U(bt,[["__scopeId","data-v-47970839"]]),wt={class:"d-flex flex-column justify-content-between"},kt={class:"paste-button"},$t={__name:"PcNav",async setup(n){let e,o;const{locale:f}=N(),{public:{apiBase:p,api:s}}=G();L(),q().value,O();let d=L();if(f.value==="ar"){const{data:v,pending:h}=([e,o]=H(()=>x(`${s.findAllCategories}`,{credentials:"include",baseURL:p,headers:{"accept-language":"ar"}},"$5arXz3Unqu")),e=await e,o(),e);Z(()=>{v.value&&(d.value=v.value)})}else{const{data:v,pending:h}=([e,o]=H(()=>x(`${s.findAllCategories}`,{credentials:"include",baseURL:p,headers:{"accept-language":"en"}},"$7s1G7xcV6a")),e=await e,o(),e);Z(()=>{v.value&&(d.value=v.value)})}return L(""),(v,h)=>{const i=j,w=fe;return c(),u("nav",wt,[t("ul",{class:y(["d-flex",l(f)==="ar"?"ar-flex":""])},[(c(!0),u(z,null,V(l(d),k=>(c(),u("li",{key:k==null?void 0:k.id,class:"menu-item"},[t("div",kt,[t("div",null,[r(i,{class:"button",to:`/Products/${k.id}`},{default:g(()=>[P(_(k.category_name),1)]),_:2},1032,["to"])])])]))),128)),t("li",{class:y(["lang-toggle",v.$i18n.locale==="en"?"en":""])},[r(w,{color:"#fff"})],2)],2)])}}},Lt=U($t,[["__scopeId","data-v-c799d42a"]]),he=n=>(W("data-v-d8aad2ea"),n=n(),Y(),n),Ct={key:0,class:"wrapper"},St=he(()=>t("img",{src:re,alt:""},null,-1)),It={class:"form"},Et=["placeholder"],Ot={class:"reset",type:"reset"},Ut={key:0},At={href:"https://admin.nabtaty.com/",target:"_blank",class:"fw-bold",style:{color:"#073e2f"}},xt={key:1,class:"pointer profile text-center dropdown mx-2","aria-current":"page","aria-expanded":"false","data-bs-toggle":"dropdown"},Pt={class:"image"},Nt=["src"],Tt={key:2,class:"dropdown-menu"},Dt={class:"",style:{"border-bottom":"none"}},Rt={class:"px-3 text-white",style:{"background-color":"#073e2f",padding:"10px"}},zt={class:"text-white",style:{"border-bottom":"none"}},Bt={key:0,class:"cartbox"},Mt={key:1},Kt=he(()=>t("img",{src:re,alt:""},null,-1)),Ft={__name:"index",setup(n){const{locale:e}=N(),{$awn:o}=ie(),{public:{apiBase:f,api:p}}=G();let s=L(!1);const d=()=>{s.value=window.matchMedia("(max-width: 1250px)").matches};Ne(()=>{d()}),Te(()=>{window.addEventListener("resize",d)}),De(()=>{window.removeEventListener("resize",d)}),L();const v=O(),h=async()=>(await x("/auth/logout",{credentials:"include",baseURL:f,method:"GET"},"$InyhS9yhkX"),I().value=null,localStorage.removeItem("userInfo"),localStorage.getItem("cart")&&(localStorage.removeItem("cart"),O().value.items=new Array,O().value.totalPrice=0,O().value.totalQty=0),q().value.isAuthenticated=!1,o.success(e.value==="ar"?"تم تسجيل الخروج بنجاح":"You have successfully logged out",{durations:{global:5e3}}),location.reload(),le("/"));return(i,w)=>{var $,M,K,S,X,de;const k=ot,a=j,m=Q,b=yt,B=Lt;return c(),u("div",null,[l(s)?(c(),D(k,{key:0})):C("",!0),t("div",{class:y(["top",i.$i18n.locale==="en"?"en":""])},[t("header",{class:y(l(e)==="ar"?"ar-flex":"")},[l(s)?C("",!0):(c(),u("div",Ct,[t("div",null,[r(a,{to:"/",class:"logo",style:{border:"none !important"}},{default:g(()=>[St]),_:1})]),t("form",It,[t("button",null,[r(m,{icon:["fas","magnifying-glass"]})]),t("input",{class:"input",placeholder:i.$i18n.locale==="ar"?"ابحث بالمنتجات":"Search in Products",required:"",type:"text"},null,8,Et),t("button",Ot,_(i.$i18n.locale==="ar"?"ابحث":"Search"),1)]),t("div",{class:y(["buttons",l(e)==="ar"?"ar":""]),style:{}},[($=("useUserInfo"in i?i.useUserInfo:l(I))().value)!=null&&$.isAdmin?(c(),u("div",Ut,[t("a",At,_(i.$i18n.locale==="ar"?"لوحة التحكم":"Admin Panel"),1)])):C("",!0),(M=("useUserInfo"in i?i.useUserInfo:l(I))().value)!=null&&M.email?(c(),u("div",xt,[t("div",Pt,[t("img",{src:(K=("useUserInfo"in i?i.useUserInfo:l(I))().value)==null?void 0:K.thumbnail,alt:""},null,8,Nt)])])):C("",!0),(S=("useUserInfo"in i?i.useUserInfo:l(I))().value)!=null&&S.email?(c(),u("ul",Tt,[t("div",Dt,[t("div",Rt,_(((X=("useUserInfo"in i?i.useUserInfo:l(I))().value)==null?void 0:X.firstName)+((de=("useUserInfo"in i?i.useUserInfo:l(I))().value)==null?void 0:de.lastName)),1)]),t("li",{class:"dropdown-item",onClick:A(h,["stop"])},[t("div",zt,_(i.$i18n.locale==="ar"?"تسجيل الخروج":"Log Out"),1)])])):C("",!0),r(a,{to:"/Cart",class:"cart mx-2 pointer",style:{position:"relative"}},{default:g(()=>[l(v).totalQty>0?(c(),u("small",Bt,_(l(v).totalQty),1)):C("",!0),r(m,{icon:["fas","cart-shopping"]})]),_:1}),r(a,{to:"/Fav",class:"cart mx-2 pointer",style:{position:"relative"}},{default:g(()=>{var ue;return[(ue=i.ProductForFavorite)!=null&&ue.isFavorite?C("",!0):(c(),D(m,{key:0,onClick:w[0]||(w[0]=yn=>i.AddToFavorite()),icon:["fas","heart"],class:"pointer"}))]}),_:1})],2)])),l(s)?(c(),u("div",Mt,[r(a,{to:"/",class:"logo",style:{border:"none !important"}},{default:g(()=>[Kt]),_:1})])):C("",!0),l(s)?(c(),D(b,{key:2})):C("",!0),l(s)?C("",!0):(c(),D(B,{key:3}))],2)],2)])}}},Vt=U(Ft,[["__scopeId","data-v-d8aad2ea"]]),qt=n=>(W("data-v-8a923fda"),n=n(),Y(),n),Zt={class:"logo"},Ht=qt(()=>t("div",{"data-aos":"fade-up","data-aos-duration":"1000"},[t("img",{src:Ie,alt:""})],-1)),Qt={class:"d-flex align-items-start justify-content-start flex-column"},jt={class:"icon"},Gt={class:"icon"},Wt={class:"icon"},Yt={__name:"logo",async setup(n){let e,o;const{public:{apiBase:f,api:p}}=G(),{locale:s}=N(),{data:d,pending:v}=([e,o]=H(()=>x(`${p.GetContact}`,{baseURL:f,credentials:"include",headers:{"accept-language":s.value==="ar"?"ar":"en"}},"$qiY0qG2Auo")),e=await e,o(),e);return(h,i)=>{var k,a,m;const w=Q;return c(),u("div",Zt,[Ht,t("div",Qt,[(c(!0),u(z,null,V((k=l(d))==null?void 0:k.data,b=>F((c(),u("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:b.id},[t("span",jt,[r(w,{icon:["fas","envelope"]})]),t("div",{class:y(["contacts-info",h.$i18n.locale==="ar"?"ar":""])},[t("p",null,_(b.email),1)],2)])),[[oe,b.email]])),128)),(c(!0),u(z,null,V((a=l(d))==null?void 0:a.data,b=>F((c(),u("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:b.id},[t("span",Gt,[r(w,{icon:["fas","phone"]})]),t("div",{class:y(["contacts-info",h.$i18n.locale==="ar"?"ar":""])},[t("p",null,_(b.phone),1)],2)])),[[oe,b.phone]])),128)),(c(!0),u(z,null,V((m=l(d))==null?void 0:m.data,b=>F((c(),u("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:b.id},[t("span",Wt,[r(w,{icon:["fas","location-dot"]})]),t("div",{class:y(["contacts-info",h.$i18n.locale==="ar"?"ar":""])},[t("p",null,_(b.website),1)],2)])),[[oe,b.website]])),128))])])}}},Xt=U(Yt,[["__scopeId","data-v-8a923fda"]]),Jt={class:""},en={class:""},tn={class:""},nn={class:""},on={class:"d-flex justify-content-center"},an=["disabled"],sn={__name:"Form",setup(n){const{public:{api:e,apiBase:o}}=G(),{$awn:f}=ie(),{locale:p}=N();let s=L(),d=L(),v=L(),h=L(),i=L(),w=L(!1);const k=async()=>{try{w.value=!0,i.value={name:s.value,phone:d.value,email:v.value,message:h.value};const a=await x(e.SendMessage,{method:"POST",credentials:"include",baseURL:o,body:i.value},"$BZWtgvVcWT");console.log("Response:",a.data.value),s.value="",d.value="",v.value="",h.value="",a.data.value.success?f.success(p.value==="ar"?"تم إرسال الطلب بنجاح":"Request Sent Successfully",{durations:{global:5e3}}):f.alert("Something Error",{durations:{global:5e3}})}catch(a){console.error("Error posting contacts form:",a)}finally{w.value=!1}};return(a,m)=>{const b=se("v-text-field"),B=se("v-textarea");return c(),u("form",{onSubmit:A(k,["prevent"]),class:y(["text-left form",a.$i18n.locale=="ar"?"ar":""]),style:{"margin-top":"50px",position:"relative","z-index":"4",width:"100%"}},[t("div",Jt,[r(b,{border_color:"000",color:"000",type:"text",name:"name",id:"name",label:a.$t("Name"),modelValue:l(s),"onUpdate:modelValue":m[0]||(m[0]=$=>E(s)?s.value=$:s=$),required:""},null,8,["label","modelValue"])]),t("div",en,[r(b,{border_color:"000",color:"000",type:"eamil",name:"Email",id:"Email",label:a.$t("Email"),class:"email",modelValue:l(v),"onUpdate:modelValue":m[1]||(m[1]=$=>E(v)?v.value=$:v=$),required:""},null,8,["label","modelValue"])]),t("div",tn,[r(b,{name:"Phone",id:"Phone",label:a.$t("Phone"),modelValue:l(d),"onUpdate:modelValue":m[2]||(m[2]=$=>E(d)?d.value=$:d=$),required:""},null,8,["label","modelValue"])]),t("div",nn,[r(B,{class:"mt-2 w-100",style:{height:"150px"},id:"Message",name:"Message",label:a.$t("Message"),modelValue:l(h),"onUpdate:modelValue":m[3]||(m[3]=$=>E(h)?h.value=$:h=$),required:""},null,8,["label","modelValue"])]),t("div",on,[t("button",{disabled:l(w),class:"btn send"},_(l(w)?"Loading":a.$t("Send")),9,an)])],34)}}},ln=U(sn,[["__scopeId","data-v-2a919d7a"]]),rn={},cn={class:"c"},dn={class:"links"};function un(n,e){const o=j;return c(),u("div",cn,[t("div",null,[t("ul",dn,[t("li",null,[r(o,{to:"/"},{default:g(()=>[P(_(n.$i18n.locale==="ar"?"الرئيسية":"Home"),1)]),_:1})]),t("li",null,[r(o,{to:"/About"},{default:g(()=>[P(_(n.$i18n.locale==="ar"?"من نحن":"About Us"),1)]),_:1})]),t("li",null,[r(o,{to:"/PrivacyPolicy"},{default:g(()=>[P(_(n.$i18n.locale==="ar"?"سياسة الخصوصية":"Privacy Policy"),1)]),_:1})]),t("li",null,[r(o,{to:"/Photos"},{default:g(()=>[P(_(n.$i18n.locale==="ar"?"البوم الصور":"Photo Album"),1)]),_:1})])])])])}const pn=U(rn,[["render",un],["__scopeId","data-v-4e6416e7"]]),vn={},ce=n=>(W("data-v-f2e33909"),n=n(),Y(),n),fn={class:"bottom"},mn=ce(()=>t("div",{class:"overlay"},null,-1)),hn=ce(()=>t("div",{class:"overlay"},null,-1)),_n=ce(()=>t("div",null,null,-1));function gn(n,e){const o=Xt,f=ln,p=pn;return c(),u("div",fn,[mn,hn,t("div",{class:y(["foot cont",n.$i18n.locale==="ar"?"ar":""])},[r(o),_n,r(f)],2),r(p)])}const bn=U(vn,[["render",gn],["__scopeId","data-v-f2e33909"]]),Un={__name:"default",setup(n){const{locale:e}=N();return Ee().value=e,(o,f)=>{const p=Vt,s=bn,d=Oe;return c(),u("div",null,[r(d,null,{default:g(()=>[t("div",{class:y(l(e)=="ar"?"bodyAR":"bodyEN")},[r(p),R(o.$slots,"default"),r(s)],2)]),_:3})])}}};export{Un as default};
