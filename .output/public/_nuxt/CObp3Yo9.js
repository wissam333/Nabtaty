import{_ as V}from"./D1bzBa5v.js";import{_ as q}from"./D_zfTIzM.js";import{_ as O,u as A,a5 as j,B as ve,S as fe,V as me,a6 as ae,a7 as _e,v as he,f as ge,a8 as be,W as ye,A as we,c as K,b as T,n as se,p as ke,a9 as N,a as Y,q as le,aa as Ce,d as Le,o as $e}from"./BFewDHxV.js";import{w as U,a3 as c,D as m,a8 as n,a0 as g,u as r,aq as Se,aa as y,ah as te,R as Ee,ac as P,a4 as b,M as s,O as ie,N as X,Q as R,ap as D,a5 as S,a as C,$ as x,z as E,a1 as Oe,a6 as Z,a7 as H,W as xe,af as F,F as z,ag as B,Y as I,P as Ie,y as Ae,Z as Ne,S as J}from"./Bm3a7n3s.js";import{C as Pe,U as Te,s as De}from"./BIlIjij7.js";import{Z as ee,R as ze,s as Me}from"./Cmi7NLcB.js";import{F as Re}from"./5wtDrfvC.js";import{O as W}from"./C2BammLc.js";import{u as M}from"./DTjUmx1z.js";const Be={__name:"LanguageToggle",props:{color:{type:String,default:"#fff",required:!1}},setup(t){const{locale:e}=A(),o=()=>{e.value=e.value==="ar"?"en":"ar",location.reload()};return U(()=>{e.value&&(e.value==="ar"?(j("lang").value="ar",j("i18n_redirected").value="ar"):(j("lang").value="en",j("i18n_redirected").value="en"))}),(u,d)=>(c(),m("div",{class:y(["language-picker text-white fw-bold pointer",r(e)==="ar"?"ar-flex":""])},[n("span",{onClick:o,style:Se(`color: ${t.color};`)},g(r(e)==="ar"?"English":"العربية"),5)],2))}},re=O(Be,[["__scopeId","data-v-5ad6620a"]]);var Ke=function(e){var o=e.dt;return`
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
`)},Ue={root:"p-popover p-component",content:"p-popover-content"},Fe=ve.extend({name:"popover",theme:Ke,classes:Ue}),Ve={name:"BasePopover",extends:De,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:Fe,provide:function(){return{$pcPopover:this,$parentInstance:this}}},ce={name:"Popover",extends:Ve,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&ee.clear(this.container),this.overlayEventListener&&(W.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,o){this.visible?this.hide():this.show(e,o)},show:function(e,o){this.visible=!0,this.eventTarget=e.currentTarget,this.target=o||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var o=this;this.container.setAttribute(this.attributeSelector,""),fe(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&ee.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(u){o.container.contains(u.target)&&(o.selfClick=!0)},this.focus(),W.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),W.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&ee.clear(e)},alignOverlay:function(){me(this.container,this.target,!1);var e=ae(this.container),o=ae(this.target),u=0;e.left<o.left&&(u=o.left-e.left),this.container.style.setProperty(_e("popover.arrow.left").name,"".concat(u,"px")),e.top<o.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&he(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),ge(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&be()&&(this.outsideClickListener=function(o){e.visible&&!e.selfClick&&!e.isTargetClicked(o)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Pe(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!ye()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",we(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var o="";for(var u in this.breakpoints)o+=`
                        @media screen and (max-width: `.concat(u,`) {
                            .p-popover[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[u],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){W.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return Te()}},directives:{focustrap:Re,ripple:ze},components:{Portal:Me}},qe=["aria-modal"];function Ze(t,e,o,u,d,a){var i=te("Portal"),v=Ee("focustrap");return c(),P(i,{appendTo:t.appendTo},{default:b(function(){return[s(ie,X({name:"p-popover",onEnter:a.onEnter,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave},t.ptm("transition")),{default:b(function(){return[d.visible?R((c(),m("div",X({key:0,ref:a.containerRef,role:"dialog","aria-modal":d.visible,onClick:e[3]||(e[3]=function(){return a.onOverlayClick&&a.onOverlayClick.apply(a,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?D(t.$slots,"container",{key:0,closeCallback:a.hide,keydownCallback:function(w){return a.onButtonKeydown(w)}}):(c(),m("div",X({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return a.onContentClick&&a.onContentClick.apply(a,arguments)}),onMousedown:e[1]||(e[1]=function(){return a.onContentClick&&a.onContentClick.apply(a,arguments)}),onKeydown:e[2]||(e[2]=function(){return a.onContentKeydown&&a.onContentKeydown.apply(a,arguments)})},t.ptm("content")),[D(t.$slots,"default")],16))],16,qe)),[[v]]):S("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}ce.render=Ze;const He=t=>(Z("data-v-72c19869"),t=t(),H(),t),Qe={class:"d-flex align-items-center bottom-bar"},je={key:0,class:"cartbox"},We={class:"flex flex-col gap-4 w-[25rem]"},Ye=["placeholder"],Ge=He(()=>n("button",{class:"search__btn"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22"},[n("path",{d:"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z",fill:"#efeff1"})])],-1)),Xe={__name:"BottomBar",setup(t){K().value;const e=T(),o=C(),u=i=>{o.value.toggle(i)};let d=C("");const a=async()=>{let i=d.value;return d.value="",se(`/SearchProducts/${i}`)};return(i,v)=>{const p=V,w=q,_=ce,k=re;return c(),m("div",Qe,[s(w,{to:"/Fav",class:"cart pointer mx-2 item",style:{position:"relative"}},{default:b(()=>[s(p,{icon:["fas","heart"]}),n("p",null,g(i.$i18n.locale==="ar"?"المفضلة":"Favourite"),1)]),_:1}),s(w,{to:"/Cart",class:"cart pointer mx-2 item",style:{position:"relative"}},{default:b(()=>[r(e).totalQty>0?(c(),m("small",je,g(r(e).totalQty),1)):S("",!0),s(p,{icon:["fas","cart-shopping"]}),n("p",null,g(i.$i18n.locale==="ar"?"السلة":"Cart"),1)]),_:1}),n("div",{class:"search pointer mx-2 item",onClick:x(u,["stop"])},[s(p,{icon:["fas","magnifying-glass"]}),n("p",null,g(i.$i18n.locale==="ar"?"البحث":"Search"),1)]),s(_,{ref_key:"op",ref:o,class:"search-content"},{default:b(()=>[n("div",We,[n("form",{class:"container",onSubmit:v[1]||(v[1]=x(h=>a(),["prevent"]))},[R(n("input",{class:y([i.$i18n.locale==="ar"?"ar":"","input"]),"onUpdate:modelValue":v[0]||(v[0]=h=>E(d)?d.value=h:d=h),type:"text",name:"text",placeholder:i.$i18n.locale==="ar"?"ابحث بجميع المنتجات":"Search in all products",required:""},null,10,Ye),[[Oe,r(d)]]),Ge],32)])]),_:1},512),n("div",{class:y(["buttons item",i.locale==="ar"?"ar":""]),style:{display:"flex","align-items":"center","flex-direction":"column",color:"#fff"}},[s(p,{icon:["fas","globe"]}),s(k)],2)])}}},Je=O(Xe,[["__scopeId","data-v-72c19869"]]),et={class:"root"},tt={class:"content"},nt={__name:"AppModal",props:["isOpen"],emits:["updateIsOpen"],setup(t,{emit:e}){const o=e,u=d=>{o("updateIsOpen",d)};return(d,a)=>{const i=V;return c(),m("div",et,[(c(),P(xe,{to:"body"},[n("div",{class:y(["wrapper",t.isOpen?"active":""])},null,2),s(ie,{name:"fade",mode:"out-in"},{default:b(()=>[t.isOpen?(c(),m("div",{key:0,class:"modal",onClick:a[2]||(a[2]=v=>u(!1))},[n("div",{onClick:a[1]||(a[1]=x(()=>{},["stop"]))},[n("div",{class:y(["modal-header",d.$i18n.locale==="ar"?"ar":""])},[D(d.$slots,"header",{class:"modal-header"},void 0,!0),s(i,{onClick:a[0]||(a[0]=v=>u(!1)),icon:["fas","xmark"]})],2),n("div",tt,[D(d.$slots,"content",{},void 0,!0)]),n("div",{class:y(["modal-footer",d.$i18n.locale==="ar"?"ar":""])},[D(d.$slots,"footer",{},void 0,!0)],2)])])):S("",!0)]),_:3})]))])}}},ot=O(nt,[["__scopeId","data-v-e5b3c294"]]),ne=ke("/photos/g.png"),G=t=>(Z("data-v-01e021f7"),t=t(),H(),t),at=G(()=>n("span",null,null,-1)),st=G(()=>n("span",null,null,-1)),lt=G(()=>n("span",null,null,-1)),it=[at,st,lt],rt={class:"container"},ct=G(()=>n("img",{src:ne,alt:""},null,-1)),dt=["onClick"],ut={key:0,class:"menu-item color",style:{padding:"16px 12px"}},pt={class:"color"},vt={__name:"MobileNav",async setup(t){let e,o;const{locale:u}=A(),{$awn:d}=le(),{public:{apiBase:a,api:i}}=Y();let v=C();if(u.value==="ar"){const{data:l,pending:f}=([e,o]=F(()=>M(`${i.findAllCategories}`,{credentials:"include",baseURL:a,headers:{"accept-language":"ar"}},"$KD6pfF57Xy")),e=await e,o(),e);U(()=>{l.value&&(v.value=l.value)})}else{const{data:l,pending:f}=([e,o]=F(()=>M(`${i.findAllCategories}`,{credentials:"include",baseURL:a,headers:{"accept-language":"en"}},"$B3nLE2HZD4")),e=await e,o(),e);U(()=>{l.value&&(v.value=l.value)})}let p=C(!1);const w=K().value;let _=C(!1);const k=l=>{_.value=l},h=async()=>(localStorage.removeItem("token"),localStorage.removeItem("userInfo"),localStorage.removeItem("accountType"),localStorage.removeItem("UserId"),localStorage.getItem("cart")&&(localStorage.removeItem("cart"),T().value.items=new Array,T().value.totalPrice=0,T().value.totalQty=0),K().value.isAuthenticated=!1,d.success(u.value==="ar"?"تم تسجيل الخروج بنجاح":"You have successfully logged out",{durations:{global:5e3}}),se("/"));return(l,f)=>{const Q=q,L=V,ue=ot;return c(),m(z,null,[n("div",{class:y(["burger",("useOpenNav"in l?l.useOpenNav:r(N))().value?"open":""]),onClick:f[0]||(f[0]=x($=>("useOpenNav"in l?l.useOpenNav:r(N))().value=!("useOpenNav"in l?l.useOpenNav:r(N))().value,["stop"]))},it,2),n("div",{class:y(["navCollapsed",("useOpenNav"in l?l.useOpenNav:r(N))().value?"open":""]),onClick:f[5]||(f[5]=x($=>("useOpenNav"in l?l.useOpenNav:r(N))().value=!0,["stop"]))},[n("div",rt,[s(Q,{to:"/",class:y(["logoMob",l.$i18n.locale==="en"?"en":""]),style:{border:"none !important"}},{default:b(()=>[ct]),_:1},8,["class"]),n("ul",null,[(c(!0),m(z,null,B(r(v),$=>(c(),m("li",{key:$.id,class:"menu-item"},[n("div",{class:"paste-button",onClick:x(pe=>r(p)===$.id?E(p)?p.value="":p="":E(p)?p.value=$.id:p=$.id,["stop"])},[n("div",null,[s(Q,{class:"button",to:`/Products/${$.id}`,onClick:f[1]||(f[1]=x(pe=>("useOpenNav"in l?l.useOpenNav:r(N))().value=!1,["stop"]))},{default:b(()=>[I(g($.category_name),1)]),_:2},1032,["to"])])],8,dt)]))),128)),r(w).isAuthenticated?(c(),m("li",ut,[n("div",{onClick:f[2]||(f[2]=$=>E(_)?_.value=!0:_=!0)},[s(L,{icon:["fas","power-off"]}),I(" "+g(l.$i18n.locale==="ar"?"تسجيل الخروج":"Log out"),1)])])):S("",!0)])]),s(ue,{isOpen:r(_),onUpdateIsOpen:k},{header:b(()=>[n("h5",pt,g(l.$i18n.locale==="ar"?"تسجيل الخروج":"Logging out"),1)]),content:b(()=>[n("p",null,g(l.$i18n.locale==="ar"?"هل تريد تسجيل الخروج؟":"Do you want to log out?"),1)]),footer:b(()=>[n("button",{class:"btn text-white",style:{"background-color":"#bf9847"},onClick:f[3]||(f[3]=$=>E(_)?_.value=!1:_=!1)},g(l.$i18n.locale==="ar"?"إغلاق":"Close"),1),n("button",{class:"btn",onClick:f[4]||(f[4]=$=>{h(),E(_)?_.value=!1:_=!1})},g(l.$i18n.locale==="ar"?"تسجيل الخروج":"Log out"),1)]),_:1},8,["isOpen"])],2)],64)}}},ft=O(vt,[["__scopeId","data-v-01e021f7"]]),mt={class:"d-flex flex-column justify-content-between"},_t={class:"paste-button"},ht={__name:"PcNav",async setup(t){let e,o;const{locale:u}=A(),{public:{apiBase:d,api:a}}=Y();C(),K().value,T();let i=C();if(u.value==="ar"){const{data:v,pending:p}=([e,o]=F(()=>M(`${a.findAllCategories}`,{credentials:"include",baseURL:d,headers:{"accept-language":"ar"}},"$5arXz3Unqu")),e=await e,o(),e);U(()=>{v.value&&(i.value=v.value)})}else{const{data:v,pending:p}=([e,o]=F(()=>M(`${a.findAllCategories}`,{credentials:"include",baseURL:d,headers:{"accept-language":"en"}},"$7s1G7xcV6a")),e=await e,o(),e);U(()=>{v.value&&(i.value=v.value)})}return C(""),(v,p)=>{const w=q,_=re;return c(),m("nav",mt,[n("ul",{class:y(["d-flex",r(u)==="ar"?"ar-flex":""])},[(c(!0),m(z,null,B(r(i),k=>(c(),m("li",{key:k==null?void 0:k.id,class:"menu-item"},[n("div",_t,[n("div",null,[s(w,{class:"button",to:`/Products/${k.id}`},{default:b(()=>[I(g(k.category_name),1)]),_:2},1032,["to"])])])]))),128)),n("li",{class:y(["lang-toggle",v.$i18n.locale==="en"?"en":""])},[s(_,{color:"#fff"})],2)],2)])}}},gt=O(ht,[["__scopeId","data-v-7c695e03"]]),de=t=>(Z("data-v-f863e2f9"),t=t(),H(),t),bt={key:0,class:"wrapper"},yt=de(()=>n("img",{src:ne,alt:""},null,-1)),wt={class:"form"},kt=["placeholder"],Ct={class:"reset",type:"reset"},Lt={key:0,class:"cartbox"},$t={key:1},St=de(()=>n("img",{src:ne,alt:""},null,-1)),Et={__name:"index",setup(t){const{locale:e}=A();let o=C(!1);const u=()=>{o.value=window.matchMedia("(max-width: 1250px)").matches};Ie(()=>{u()}),Ae(()=>{window.addEventListener("resize",u)}),Ne(()=>{window.removeEventListener("resize",u)}),C(),K().value;const d=T();return(a,i)=>{const v=Je,p=q,w=V,_=ft,k=gt;return c(),m("div",null,[r(o)?(c(),P(v,{key:0})):S("",!0),n("div",{class:y(["top",a.$i18n.locale==="en"?"en":""])},[n("header",{class:y(r(e)==="ar"?"ar-flex":"")},[r(o)?S("",!0):(c(),m("div",bt,[n("div",null,[s(p,{to:"/",class:"logo",style:{border:"none !important"}},{default:b(()=>[yt]),_:1})]),n("form",wt,[n("button",null,[s(w,{icon:["fas","magnifying-glass"]})]),n("input",{class:"input",placeholder:a.$i18n.locale==="ar"?"ابحث بالمنتجات":"Search in Products",required:"",type:"text"},null,8,kt),n("button",Ct,g(a.$i18n.locale==="ar"?"ابحث":"Search"),1)]),n("div",{class:y(["buttons",r(e)==="ar"?"ar":""]),style:{}},[s(p,{to:"/Cart",class:"cart mx-2 pointer",style:{position:"relative"}},{default:b(()=>[r(d).totalQty>0?(c(),m("small",Lt,g(r(d).totalQty),1)):S("",!0),s(w,{icon:["fas","cart-shopping"]})]),_:1}),s(p,{to:"/Fav",class:"cart mx-2 pointer",style:{position:"relative"}},{default:b(()=>{var h;return[(h=a.ProductForFavorite)!=null&&h.isFavorite?S("",!0):(c(),P(w,{key:0,onClick:i[0]||(i[0]=l=>a.AddToFavorite()),icon:["fas","heart"],class:"pointer"}))]}),_:1})],2)])),r(o)?(c(),m("div",$t,[s(p,{to:"/",class:"logo",style:{border:"none !important"}},{default:b(()=>[St]),_:1})])):S("",!0),r(o)?(c(),P(_,{key:2})):S("",!0),r(o)?S("",!0):(c(),P(k,{key:3}))],2)],2)])}}},Ot=O(Et,[["__scopeId","data-v-f863e2f9"]]),xt=t=>(Z("data-v-ef8c3956"),t=t(),H(),t),It={class:"logo"},At=xt(()=>n("div",{"data-aos":"fade-up","data-aos-duration":"1000"},[n("img",{src:Ce,alt:""})],-1)),Nt={class:"d-flex align-items-start justify-content-start flex-column"},Pt={class:"icon"},Tt={class:"icon"},Dt={class:"icon"},zt={__name:"logo",async setup(t){let e,o;const{public:{apiBase:u,api:d}}=Y(),{locale:a}=A(),{data:i,pending:v}=([e,o]=F(()=>M(`${d.GetContact}`,{baseURL:u,credentials:"include",headers:{"accept-language":a.value==="ar"?"ar":"en"}},"$qiY0qG2Auo")),e=await e,o(),e);return(p,w)=>{var k,h,l;const _=V;return c(),m("div",It,[At,n("div",Nt,[(c(!0),m(z,null,B((k=r(i))==null?void 0:k.data,f=>R((c(),m("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:f.id},[n("span",Pt,[s(_,{icon:["fas","envelope"]})]),n("div",{class:y(["contacts-info",p.$i18n.locale==="ar"?"ar":""])},[n("p",null,g(f.email),1)],2)])),[[J,f.email]])),128)),(c(!0),m(z,null,B((h=r(i))==null?void 0:h.data,f=>R((c(),m("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:f.id},[n("span",Tt,[s(_,{icon:["fas","phone"]})]),n("div",{class:y(["contacts-info",p.$i18n.locale==="ar"?"ar":""])},[n("p",null,g(f.phone),1)],2)])),[[J,f.phone]])),128)),(c(!0),m(z,null,B((l=r(i))==null?void 0:l.data,f=>R((c(),m("div",{class:"d-flex align-items-center contacts-content","data-aos":"fade-up","data-aos-duration":"1000",key:f.id},[n("span",Dt,[s(_,{icon:["fas","globe"]})]),n("div",{class:y(["contacts-info",p.$i18n.locale==="ar"?"ar":""])},[n("p",null,g(f.website),1)],2)])),[[J,f.website]])),128))])])}}},Mt=O(zt,[["__scopeId","data-v-ef8c3956"]]),Rt={class:""},Bt={class:""},Kt={class:""},Ut={class:""},Ft={class:"d-flex justify-content-center"},Vt=["disabled"],qt={__name:"Form",setup(t){const{public:{api:e,apiBase:o}}=Y(),{$awn:u}=le(),{locale:d}=A();let a=C(),i=C(),v=C(),p=C(),w=C(),_=C(!1);const k=async()=>{try{_.value=!0,w.value={name:a.value,phone:i.value,email:v.value,message:p.value};const h=await M(e.SendMessage,{method:"POST",credentials:"include",baseURL:o,body:w.value},"$BZWtgvVcWT");console.log("Response:",h.data.value),a.value="",i.value="",v.value="",p.value="",h.data.value.success?u.success(d.value==="ar"?"تم إرسال الطلب بنجاح":"Request Sent Successfully",{durations:{global:5e3}}):u.alert("Something Error",{durations:{global:5e3}})}catch(h){console.error("Error posting contacts form:",h)}finally{_.value=!1}};return(h,l)=>{const f=te("v-text-field"),Q=te("v-textarea");return c(),m("form",{onSubmit:x(k,["prevent"]),class:y(["text-left form",h.$i18n.locale=="ar"?"ar":""]),style:{"margin-top":"50px",position:"relative","z-index":"4",width:"100%"}},[n("div",Rt,[s(f,{border_color:"000",color:"000",type:"text",name:"name",id:"name",label:h.$t("Name"),modelValue:r(a),"onUpdate:modelValue":l[0]||(l[0]=L=>E(a)?a.value=L:a=L),required:""},null,8,["label","modelValue"])]),n("div",Bt,[s(f,{border_color:"000",color:"000",type:"eamil",name:"Email",id:"Email",label:h.$t("Email"),class:"email",modelValue:r(v),"onUpdate:modelValue":l[1]||(l[1]=L=>E(v)?v.value=L:v=L),required:""},null,8,["label","modelValue"])]),n("div",Kt,[s(f,{name:"Phone",id:"Phone",label:h.$t("Phone"),modelValue:r(i),"onUpdate:modelValue":l[2]||(l[2]=L=>E(i)?i.value=L:i=L),required:""},null,8,["label","modelValue"])]),n("div",Ut,[s(Q,{class:"mt-2 w-100",style:{height:"150px"},id:"Message",name:"Message",label:h.$t("Message"),modelValue:r(p),"onUpdate:modelValue":l[3]||(l[3]=L=>E(p)?p.value=L:p=L),required:""},null,8,["label","modelValue"])]),n("div",Ft,[n("button",{disabled:r(_),class:"btn send"},g(r(_)?"Loading":h.$t("Send")),9,Vt)])],34)}}},Zt=O(qt,[["__scopeId","data-v-2a919d7a"]]),Ht={},Qt={class:"c"},jt={class:"links"};function Wt(t,e){const o=q;return c(),m("div",Qt,[n("div",null,[n("ul",jt,[n("li",null,[s(o,{to:"/"},{default:b(()=>[I(g(t.$i18n.locale==="ar"?"الرئيسية":"Home"),1)]),_:1})]),n("li",null,[s(o,{to:"/About"},{default:b(()=>[I(g(t.$i18n.locale==="ar"?"من نحن":"About Us"),1)]),_:1})]),n("li",null,[s(o,{to:"/PrivacyPolicy"},{default:b(()=>[I(g(t.$i18n.locale==="ar"?"سياسة الخصوصية":"Privacy Policy"),1)]),_:1})]),n("li",null,[s(o,{to:"/Photos"},{default:b(()=>[I(g(t.$i18n.locale==="ar"?"البوم الصور":"Photo Album"),1)]),_:1})])])])])}const Yt=O(Ht,[["render",Wt],["__scopeId","data-v-4e6416e7"]]),Gt={},oe=t=>(Z("data-v-f2e33909"),t=t(),H(),t),Xt={class:"bottom"},Jt=oe(()=>n("div",{class:"overlay"},null,-1)),en=oe(()=>n("div",{class:"overlay"},null,-1)),tn=oe(()=>n("div",null,null,-1));function nn(t,e){const o=Mt,u=Zt,d=Yt;return c(),m("div",Xt,[Jt,en,n("div",{class:y(["foot cont",t.$i18n.locale==="ar"?"ar":""])},[s(o),tn,s(u)],2),s(d)])}const on=O(Gt,[["render",nn],["__scopeId","data-v-f2e33909"]]),fn={__name:"default",setup(t){const{locale:e}=A();return Le().value=e,(o,u)=>{const d=Ot,a=on,i=$e;return c(),m("div",null,[s(i,null,{default:b(()=>[n("div",{class:y(r(e)=="ar"?"bodyAR":"bodyEN")},[s(d),D(o.$slots,"default"),s(a)],2)]),_:3})])}}};export{fn as default};
