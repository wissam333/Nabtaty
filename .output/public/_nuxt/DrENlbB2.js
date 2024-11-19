import{_ as $,B as M,a as j}from"./Cvcrh2Yh.js";import{a as b,y as L,a3 as o,D as d,ag as x,u,as as q,N as G,ab as D,a5 as v,F as X,a0 as r,M as w,a4 as N,a8 as s,ax as H}from"./BUNOv-RT.js";import{s as J}from"./Br5MGdbk.js";import{_ as K}from"./BQRx4-yy.js";import{_ as A}from"./KphOHTWK.js";import{_ as O}from"./TkfNUxmK.js";const Q={__name:"VPlaceLoad",props:["width","height","classes","light"],setup(t){const a=b("loads"),{width:e,height:i,classes:k,light:l}=t;return L(()=>{a.value=l?"loads-light":"loads"}),(h,m)=>(o(),d("div",{class:x(`${u(a)} ${t.classes}`),style:q({width:t.width,height:t.height,"max-width":"100%"})},null,6))}},T=$(Q,[["__scopeId","data-v-b62404ca"]]),U=(t,a)=>{const e=new Image;e.src=t,e.complete?a(!0):(e.onload=()=>a(!0),e.onerror=()=>a(!1))};var W=function(a){var e=a.dt;return`
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
`)},Y={root:{position:"relative"}},Z={root:function(a){var e=a.props;return["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]}},tt=M.extend({name:"skeleton",theme:W,classes:Z,inlineStyles:Y}),et={name:"BaseSkeleton",extends:J,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:tt,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},F={name:"Skeleton",extends:et,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function at(t,a,e,i,k,l){return o(),d("div",G({class:t.cx("root"),style:[t.sx("root"),l.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}F.render=at;const nt=["id","src","alt","sytle"],st={__name:"Image",props:["src","id","classes","style","width","height","loadClasses","light","alt"],setup(t){const{src:a,width:e,height:i,id:k,classes:l,style:h,loadClasses:m,light:_,alt:y="Image"}=t,n=b(!1),f=c=>{console.log("error loading image"),n.value=!1};return L(()=>{U(a,c=>{c?n.value=!0:n.value=!1})}),(c,S)=>{const g=T,p=F;return o(),d(X,null,[u(n)?v("",!0):(o(),D(g,{key:0,width:t.width,height:t.height,classes:t.loadClasses,light:t.light},null,8,["width","height","classes","light"])),u(n)?(o(),d("img",{key:1,id:t.id,class:x(t.classes),src:t.src,alt:t.alt,onError:f,sytle:t.style},null,42,nt)):v("",!0),u(n)?v("",!0):(o(),D(p,{key:2,class:"skeleton-loader"}))],64)}}},ot=$(st,[["__scopeId","data-v-7d636516"]]),it=H('<div class="leaf" data-v-0fa3f737><img src="'+A+'" alt="" data-v-0fa3f737></div><div class="leaf2" data-v-0fa3f737><img src="'+A+'" alt="" data-v-0fa3f737></div><div class="leaf3" data-v-0fa3f737><img src="'+O+'" alt="" data-v-0fa3f737></div><div class="leaf4" data-v-0fa3f737><img src="'+O+'" alt="" data-v-0fa3f737></div>',4),rt={key:0,class:"disscount"},lt={class:"product-info"},ct={class:"d-flex justify-content-between px-5 mt-4"},dt={class:"title"},ut={class:"d-flex"},ht={class:"price"},mt={class:"price"},ft={__name:"ProductCard2",props:["product","productId"],setup(t){const{public:{api:a,apiBase:e}}=j();return b(!1),(i,k)=>{var m,_,y,n,f,c,S,g,p,I,P,C,R,B,E;const l=ot,h=K;return o(),d(X,null,[it,(_=(m=t.product)==null?void 0:m.data)!=null&&_.productOffer.discountRatio?(o(),d("div",rt,r(((n=(y=t.product)==null?void 0:y.data)==null?void 0:n.productOffer.discountRatio)+"%"),1)):v("",!0),w(h,{to:`/Product/${((c=(f=t.product)==null?void 0:f.id)==null?void 0:c.toString())??((S=t.productId)==null?void 0:S.toString())}`,class:"product-img"},{default:N(()=>{var z,V;return[w(l,{src:`${u(e)}/${(V=(z=t.product)==null?void 0:z.photos)==null?void 0:V.photoPath}`,classes:"image-rendered"},null,8,["src"])]}),_:1},8,["to"]),s("div",lt,[s("div",ct,[s("h5",dt,r((i.$i18n.locale==="ar",t.product.plant_name)),1),s("div",ut,[s("p",ht,[s("span",{class:x([(p=(g=t.product)==null?void 0:g.productOffer)!=null&&p.newPrice?"old-price":"","mx-2"])},r((I=t.product)==null?void 0:I.price)+" "+r((i.$i18n.locale==="ar","AED")),3)]),s("p",mt,r((C=(P=t.product)==null?void 0:P.productOffer)==null?void 0:C.newPrice)+" "+r((i.$i18n.locale==="ar","AED")),1)])]),w(h,{to:`/Product/${((B=(R=t.product)==null?void 0:R.id)==null?void 0:B.toString())??((E=t.productId)==null?void 0:E.toString())}`,class:"btn btn-main"},{default:N(()=>[s("span",null,r(i.$t("OrderNow")),1)]),_:1},8,["to"])])],64)}}},St=$(ft,[["__scopeId","data-v-0fa3f737"]]);export{St as _};
