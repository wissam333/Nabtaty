import{_ as se}from"./BT-Qu7lE.js";import{_ as $,B as oe,u as ie,a as re,z as ce,d as le}from"./jYgtRURX.js";import{a as b,y as te,a3 as s,D as h,ag as v,u,as as de,N as ue,ab as d,a5 as g,F as ae,a0 as l,M as H,a4 as Q,a8 as i,ax as he}from"./BUNOv-RT.js";import{s as me}from"./CVFZgMxr.js";import{_ as fe}from"./DEmvmS_m.js";import{u as W}from"./CIDCv4JU.js";import{_ as Y}from"./BA8QOZm7.js";import{_ as ee}from"./qeu8RL0f.js";const pe={__name:"VPlaceLoad",props:["width","height","classes","light"],setup(e){const a=b("loads"),{width:t,height:m,classes:r,light:c}=e;return te(()=>{a.value=c?"loads-light":"loads"}),(_,w)=>(s(),h("div",{class:v(`${u(a)} ${e.classes}`),style:de({width:e.width,height:e.height,"max-width":"100%"})},null,6))}},ge=$(pe,[["__scopeId","data-v-b62404ca"]]),ve=(e,a)=>{const t=new Image;t.src=e,t.complete?a(!0):(t.onload=()=>a(!0),t.onerror=()=>a(!1))};var ke=function(a){var t=a.dt;return`
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
`)},ye={root:{position:"relative"}},$e={root:function(a){var t=a.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},be=oe.extend({name:"skeleton",theme:ke,classes:$e,inlineStyles:ye}),_e={name:"BaseSkeleton",extends:me,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:be,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},ne={name:"Skeleton",extends:_e,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function we(e,a,t,m,r,c){return s(),h("div",ue({class:e.cx("root"),style:[e.sx("root"),c.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}ne.render=we;const Se=["id","src","alt","sytle"],Ie={__name:"Image",props:["src","id","classes","style","width","height","loadClasses","light","alt"],setup(e){const{src:a,width:t,height:m,id:r,classes:c,style:_,loadClasses:w,light:S,alt:I="Image"}=e,o=b(!1),k=n=>{console.log("error loading image"),o.value=!1};return te(()=>{ve(a,n=>{n?o.value=!0:o.value=!1})}),(n,y)=>{const f=ge,p=ne;return s(),h(ae,null,[u(o)?g("",!0):(s(),d(f,{key:0,width:e.width,height:e.height,classes:e.loadClasses,light:e.light},null,8,["width","height","classes","light"])),u(o)?(s(),h("img",{key:1,id:e.id,class:v(e.classes),src:e.src,alt:e.alt,onError:k,sytle:e.style},null,42,Se)):g("",!0),u(o)?g("",!0):(s(),d(p,{key:2,class:"skeleton-loader"}))],64)}}},xe=$(Ie,[["__scopeId","data-v-7d636516"]]),Fe=he('<div class="leaf" data-v-cb5fa149><img src="'+Y+'" alt="" data-v-cb5fa149></div><div class="leaf2" data-v-cb5fa149><img src="'+Y+'" alt="" data-v-cb5fa149></div><div class="leaf3" data-v-cb5fa149><img src="'+ee+'" alt="" data-v-cb5fa149></div><div class="leaf4" data-v-cb5fa149><img src="'+ee+'" alt="" data-v-cb5fa149></div>',4),Pe={key:1,class:"disscount"},Ce={class:"product-info"},Re={class:"d-flex justify-content-between px-5 mt-4"},Ee={class:"title"},Be={class:"d-flex"},ze={class:"price"},Ne={class:"price"},De={__name:"ProductCard2",props:["product","productId","FavoriteId"],emits:["deleteFav"],setup(e,{emit:a}){const{$awn:t}=le(),{public:{api:m,apiBase:r}}=re(),{product:c,productId:_,FavoriteId:w}=e,S=a,{locale:I}=ie();b(!1);const o=n=>{console.log(n),S("deleteFav",n)},k=async()=>{const{data:n}=await W(`${m.GetCustomerFav}/${ce().value.id}`,{credentials:"include",baseURL:r,method:"GET"},"$DFZE4uKP1q");let y=n.value.filter(f=>f.plantId==c.id);await W(`${m.RemoveFav}/${y[0].id}`,{baseURL:r,method:"DELETE",credentials:"include"},"$vr7DprNBlC"),o(c.id),t.success(I.value==="ar"?"تم الإزالة من المفضلة بنجاح":"Successfully removed from favorites")};return(n,y)=>{var F,P,C,R,E,B,z,N,D,O,V,L,A,U,X;const f=se,p=xe,x=fe;return s(),h(ae,null,[Fe,e.FavoriteId?(s(),d(f,{key:0,icon:["fas","heart"],onClick:k,class:v([n.$i18n.locale=="en"?"heartEn":"heartAr","heart pointer"])},null,8,["class"])):g("",!0),(P=(F=e.product)==null?void 0:F.data)!=null&&P.productOffer.discountRatio?(s(),h("div",Pe,l(((R=(C=e.product)==null?void 0:C.data)==null?void 0:R.productOffer.discountRatio)+"%"),1)):g("",!0),H(x,{to:`/Product/${((B=(E=e.product)==null?void 0:E.id)==null?void 0:B.toString())??((z=e.productId)==null?void 0:z.toString())}`,class:"product-img"},{default:Q(()=>{var G,J,M,T,j,q,K,Z;return[(J=(G=e.product)==null?void 0:G.photos)!=null&&J.photoPath?(s(),d(p,{key:0,src:`${u(r)}/${(T=(M=e.product)==null?void 0:M.photos)==null?void 0:T.photoPath}`,classes:"image-rendered"},null,8,["src"])):(q=(j=e.product)==null?void 0:j.photos)!=null&&q.length?(s(),d(p,{key:1,src:`${u(r)}/${(Z=(K=e.product)==null?void 0:K.photos[0])==null?void 0:Z.photoPath}`,classes:"image-rendered"},null,8,["src"])):(s(),d(p,{key:2,src:"/photos/2619fafceaedd791a39fd2a196ec0641.png",classes:"image-rendered"}))]}),_:1},8,["to"]),i("div",Ce,[i("div",Re,[i("h5",Ee,l((n.$i18n.locale==="ar",e.product.plant_name)),1),i("div",Be,[i("p",ze,[i("span",{class:v([(D=(N=e.product)==null?void 0:N.productOffer)!=null&&D.newPrice?"old-price":"","mx-2"])},l((O=e.product)==null?void 0:O.price)+" "+l((n.$i18n.locale==="ar","JOD")),3)]),i("p",Ne,l((L=(V=e.product)==null?void 0:V.productOffer)==null?void 0:L.newPrice),1)])]),H(x,{to:`/Product/${((U=(A=e.product)==null?void 0:A.id)==null?void 0:U.toString())??((X=e.productId)==null?void 0:X.toString())}`,class:"btn btn-main"},{default:Q(()=>[i("span",null,l(n.$t("OrderNow")),1)]),_:1},8,["to"])])],64)}}},Me=$(De,[["__scopeId","data-v-cb5fa149"]]);export{Me as _};
