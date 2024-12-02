import{_ as re}from"./BbA-o76e.js";import{_ as y,B as ce,u as de,a as le,z as ue,d as he}from"./B-xVLMgY.js";import{a as $,y as se,a3 as s,D as u,ag as b,u as l,as as me,N as fe,ab as d,a5 as g,F as oe,a0 as p,M as Y,a4 as ee,a8 as c,av as pe}from"./Bynz-MEc.js";import{s as ge}from"./Df-GVvyW.js";import{_ as ve}from"./B4QukuNw.js";import{u as te}from"./BiZJ-hRq.js";import{_ as ae}from"./B8IcaMB3.js";import{_ as ne}from"./CVEy1E_S.js";const ke={__name:"VPlaceLoad",props:["width","height","classes","light"],setup(e){const a=$("loads"),{width:t,height:h,classes:i,light:r}=e;return se(()=>{a.value=r?"loads-light":"loads"}),(S,w)=>(s(),u("div",{class:b(`${l(a)} ${e.classes}`),style:me({width:e.width,height:e.height,"max-width":"100%"})},null,6))}},ye=y(ke,[["__scopeId","data-v-b62404ca"]]),$e=(e,a)=>{const t=new Image;t.src=e,t.complete?a(!0):(t.onload=()=>a(!0),t.onerror=()=>a(!1))};var be=function(a){var t=a.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(t("skeleton.background"),`;
    border-radius: `).concat(t("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},Se={root:{position:"relative"}},we={root:function(a){var t=a.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},Ie=ce.extend({name:"skeleton",theme:be,classes:we,inlineStyles:Se}),xe={name:"BaseSkeleton",extends:ge,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Ie,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},ie={name:"Skeleton",extends:xe,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function _e(e,a,t,h,i,r){return s(),u("div",fe({class:e.cx("root"),style:[e.sx("root"),r.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}ie.render=_e;const Fe=["id","src","alt","sytle"],Ce={__name:"Image",props:["src","id","classes","style","width","height","loadClasses","light","alt"],setup(e){const{src:a,width:t,height:h,id:i,classes:r,style:S,loadClasses:w,light:I,alt:x="Image"}=e,o=$(!1),v=n=>{console.log("error loading image"),o.value=!1};return se(()=>{$e(a,n=>{n?o.value=!0:o.value=!1})}),(n,k)=>{const m=ye,f=ie;return s(),u(oe,null,[l(o)?g("",!0):(s(),d(m,{key:0,width:e.width,height:e.height,classes:e.loadClasses,light:e.light},null,8,["width","height","classes","light"])),l(o)?(s(),u("img",{key:1,id:e.id,class:b(e.classes),src:e.src,alt:e.alt,onError:v,sytle:e.style},null,42,Fe)):g("",!0),l(o)?g("",!0):(s(),d(f,{key:2,class:"skeleton-loader"}))],64)}}},Re=y(Ce,[["__scopeId","data-v-7d636516"]]),Pe=pe('<div class="leaf" data-v-742aacbd><img src="'+ae+'" alt="" data-v-742aacbd></div><div class="leaf2" data-v-742aacbd><img src="'+ae+'" alt="" data-v-742aacbd></div><div class="leaf3" data-v-742aacbd><img src="'+ne+'" alt="" data-v-742aacbd></div><div class="leaf4" data-v-742aacbd><img src="'+ne+'" alt="" data-v-742aacbd></div>',4),Ee={key:1,class:"disscount"},Be={class:"product-info"},ze={class:"d-flex justify-content-between px-5 mt-4"},Ne={class:"title"},De={class:"d-flex"},Ve={class:"price"},Le={class:"mx-2"},Oe={__name:"ProductCard2",props:["product","productId","FavoriteId"],emits:["deleteFav"],setup(e,{emit:a}){const{$awn:t}=he(),{public:{api:h,apiBase:i}}=le(),{product:r,productId:S,FavoriteId:w}=e,I=a,{locale:x}=de();$(!1);const o=n=>{console.log(n),I("deleteFav",n)},v=async()=>{const{data:n}=await te(`${h.GetCustomerFav}/${ue().value.id}`,{credentials:"include",baseURL:i,method:"GET"},"$DFZE4uKP1q");let k=n.value.filter(m=>m.plantId==r.id);await te(`${h.RemoveFav}/${k[0].id}`,{baseURL:i,method:"DELETE",credentials:"include"},"$vr7DprNBlC"),o(r.id),t.success(x.value==="ar"?"تم الإزالة من المفضلة بنجاح":"Successfully removed from favorites")};return(n,k)=>{var F,C,R,P,E,B,z,N,D,V,L,O,A,U,X,G,J,M;const m=re,f=Re,_=ve;return s(),u(oe,null,[Pe,e.FavoriteId?(s(),d(m,{key:0,icon:["fas","heart"],onClick:v,class:b([n.$i18n.locale=="en"?"heartEn":"heartAr","heart pointer"])},null,8,["class"])):g("",!0),(C=(F=e.product)==null?void 0:F.data)!=null&&C.productOffer.discountRatio?(s(),u("div",Ee,p(((P=(R=e.product)==null?void 0:R.data)==null?void 0:P.productOffer.discountRatio)+"%"),1)):g("",!0),Y(_,{to:`/Product/${((B=(E=e.product)==null?void 0:E.id)==null?void 0:B.toString())??((z=e.productId)==null?void 0:z.toString())}`,class:"product-img"},{default:ee(()=>{var T,j,q,K,Z,H,Q,W;return[(j=(T=e.product)==null?void 0:T.photos)!=null&&j.photoPath?(s(),d(f,{key:0,src:`${l(i)}/${(K=(q=e.product)==null?void 0:q.photos)==null?void 0:K.photoPath}`,classes:"image-rendered"},null,8,["src"])):(H=(Z=e.product)==null?void 0:Z.photos)!=null&&H.length?(s(),d(f,{key:1,src:`${l(i)}/${(W=(Q=e.product)==null?void 0:Q.photos[0])==null?void 0:W.photoPath}`,classes:"image-rendered"},null,8,["src"])):(s(),d(f,{key:2,src:"/photos/2619fafceaedd791a39fd2a196ec0641.png",classes:"image-rendered"}))]}),_:1},8,["to"]),c("div",Be,[c("div",ze,[c("h5",Ne,p((n.$i18n.locale==="ar",e.product.plant_name)),1),c("div",De,[c("p",Ve,[c("span",Le,p(((N=e.product)==null?void 0:N.price4)>0?(D=e.product)==null?void 0:D.price4:((V=e.product)==null?void 0:V.price3)>0?(L=e.product)==null?void 0:L.price3:((O=e.product)==null?void 0:O.price2)>0?(A=e.product)==null?void 0:A.price2:((U=e.product)==null?void 0:U.price1)>0?(X=e.product)==null?void 0:X.price1:0)+" "+p((n.$i18n.locale==="ar","JOD")),1)])])]),Y(_,{to:`/Product/${((J=(G=e.product)==null?void 0:G.id)==null?void 0:J.toString())??((M=e.productId)==null?void 0:M.toString())}`,class:"btn btn-main"},{default:ee(()=>[c("span",null,p(n.$t("OrderNow")),1)]),_:1},8,["to"])])],64)}}},qe=y(Oe,[["__scopeId","data-v-742aacbd"]]);export{qe as _};
