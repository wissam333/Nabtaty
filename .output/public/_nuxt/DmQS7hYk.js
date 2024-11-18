import{_ as $,B as F,a as M}from"./CwhFTHFS.js";import{a as b,y as O,a3 as o,D as d,aa as x,u,aq as j,N as q,ac as V,a5 as v,F as L,a0 as r,M as w,a4 as D,a8 as s,aw as G}from"./Bm3a7n3s.js";import{s as H}from"./DY_g6rXf.js";import{_ as J}from"./DySCSt5s.js";import{_ as N}from"./C-vRUfsz.js";import{_ as A}from"./BfXj9s4l.js";const K={__name:"VPlaceLoad",props:["width","height","classes","light"],setup(t){const a=b("loads"),{width:e,height:i,classes:k,light:c}=t;return O(()=>{a.value=c?"loads-light":"loads"}),(h,m)=>(o(),d("div",{class:x(`${u(a)} ${t.classes}`),style:j({width:t.width,height:t.height,"max-width":"100%"})},null,6))}},Q=$(K,[["__scopeId","data-v-b62404ca"]]),T=(t,a)=>{const e=new Image;e.src=t,e.complete?a(!0):(e.onload=()=>a(!0),e.onerror=()=>a(!1))};var U=function(a){var e=a.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(e("skeleton.background"),`;
    border-radius: `).concat(e("skeleton.border.radius"),`;
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
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(e("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
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
`)},W={root:{position:"relative"}},Y={root:function(a){var e=a.props;return["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]}},Z=F.extend({name:"skeleton",theme:U,classes:Y,inlineStyles:W}),tt={name:"BaseSkeleton",extends:H,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Z,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},X={name:"Skeleton",extends:tt,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function et(t,a,e,i,k,c){return o(),d("div",q({class:t.cx("root"),style:[t.sx("root"),c.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}X.render=et;const at=["id","src","alt","sytle"],nt={__name:"Image",props:["src","id","classes","style","width","height","loadClasses","light","alt"],setup(t){const{src:a,width:e,height:i,id:k,classes:c,style:h,loadClasses:m,light:_,alt:y="Image"}=t,n=b(!1),p=l=>{console.log("error loading image"),n.value=!1};return O(()=>{T(a,l=>{l?n.value=!0:n.value=!1})}),(l,S)=>{const g=Q,f=X;return o(),d(L,null,[u(n)?v("",!0):(o(),V(g,{key:0,width:t.width,height:t.height,classes:t.loadClasses,light:t.light},null,8,["width","height","classes","light"])),u(n)?(o(),d("img",{key:1,id:t.id,class:x(t.classes),src:t.src,alt:t.alt,onError:p,sytle:t.style},null,42,at)):v("",!0),u(n)?v("",!0):(o(),V(f,{key:2,class:"skeleton-loader"}))],64)}}},st=$(nt,[["__scopeId","data-v-7d636516"]]),ot=G('<div class="leaf" data-v-4c9ad029><img src="'+N+'" alt="" data-v-4c9ad029></div><div class="leaf2" data-v-4c9ad029><img src="'+N+'" alt="" data-v-4c9ad029></div><div class="leaf3" data-v-4c9ad029><img src="'+A+'" alt="" data-v-4c9ad029></div><div class="leaf4" data-v-4c9ad029><img src="'+A+'" alt="" data-v-4c9ad029></div>',4),it={key:0,class:"disscount"},rt={class:"product-info"},ct={class:"d-flex justify-content-between px-5 mt-4"},lt={class:"title"},dt={class:"d-flex"},ut={class:"price"},ht={class:"price"},mt={__name:"ProductCard2",props:["product","productId"],setup(t){const{public:{api:a,apiBase:e}}=M();return b(!1),(i,k)=>{var m,_,y,n,p,l,S,g,f,I,P,C,R,B,E;const c=st,h=J;return o(),d(L,null,[ot,(_=(m=t.product)==null?void 0:m.data)!=null&&_.productOffer.discountRatio?(o(),d("div",it,r(((n=(y=t.product)==null?void 0:y.data)==null?void 0:n.productOffer.discountRatio)+"%"),1)):v("",!0),w(h,{to:`/Product/${((l=(p=t.product)==null?void 0:p.id)==null?void 0:l.toString())??((S=t.productId)==null?void 0:S.toString())}`,class:"product-img"},{default:D(()=>{var z;return[w(c,{src:`${u(e)}/${(z=t.product)==null?void 0:z.photos.photoPath}`,classes:"image-rendered"},null,8,["src"])]}),_:1},8,["to"]),s("div",rt,[s("div",ct,[s("h5",lt,r((i.$i18n.locale==="ar",t.product.plant_name)),1),s("div",dt,[s("p",ut,[s("span",{class:x([(f=(g=t.product)==null?void 0:g.productOffer)!=null&&f.newPrice?"old-price":"","mx-2"])},r((I=t.product)==null?void 0:I.price)+" "+r((i.$i18n.locale==="ar","AED")),3)]),s("p",ht,r((C=(P=t.product)==null?void 0:P.productOffer)==null?void 0:C.newPrice)+" "+r((i.$i18n.locale==="ar","AED")),1)])]),w(h,{to:`/Product/${((B=(R=t.product)==null?void 0:R.id)==null?void 0:B.toString())??((E=t.productId)==null?void 0:E.toString())}`,class:"btn btn-main"},{default:D(()=>[s("span",null,r(i.$t("OrderNow")),1)]),_:1},8,["to"])])],64)}}},yt=$(mt,[["__scopeId","data-v-4c9ad029"]]);export{yt as _};
