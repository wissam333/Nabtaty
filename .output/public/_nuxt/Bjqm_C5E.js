import{_ as $}from"./DEmvmS_m.js";import{_ as B,a as D}from"./jYgtRURX.js";import{_ as s}from"./BA8QOZm7.js";import{_ as S}from"./DVBQ373y.js";import{a3 as e,D as c,a0 as a,a5 as y,a8 as o,u as V,M as I,a4 as R,ag as F,F as J,ax as z}from"./BUNOv-RT.js";const E=z('<div class="leaf" data-v-4a150eb2><img src="'+s+'" alt="" data-v-4a150eb2></div><div class="leaf2" data-v-4a150eb2><img src="'+s+'" alt="" data-v-4a150eb2></div><div class="leaf3" data-v-4a150eb2><img src="'+s+'" alt="" data-v-4a150eb2></div><div class="leaf4" data-v-4a150eb2><img src="'+s+'" alt="" data-v-4a150eb2></div>',4),M={key:0,class:"disscount"},j={class:"product-img"},q=["src"],A={key:1,src:S,alt:""},G={class:"product-info"},H={class:"title"},K={class:"price"},L={key:0,class:"price"},Q={__name:"ProductCard",props:["product","productId"],setup(t){const{public:{api:T,apiBase:C}}=D();return(d,U)=>{var r,i,n,l,u,p,m,_,f,v,h,g,b,O,k,P,w,x;const N=$;return e(),c(J,null,[E,(i=(r=t.product)==null?void 0:r.data)!=null&&i.productOffer.discountRatio?(e(),c("div",M,a(((l=(n=t.product)==null?void 0:n.data)==null?void 0:l.productOffer.discountRatio)+"%"),1)):y("",!0),o("div",j,[(p=(u=t.product)==null?void 0:u.photos)!=null&&p.photoPath?(e(),c("img",{key:0,src:V(C)+"/"+((_=(m=t.product)==null?void 0:m.photos)==null?void 0:_.photoPath),alt:""},null,8,q)):(e(),c("img",A))]),o("div",G,[o("h5",H,a((d.$i18n.locale==="ar",t.product.plant_name)),1),I(N,{to:`/Product/${((v=(f=t.product)==null?void 0:f.id)==null?void 0:v.toString())??((h=t.productId)==null?void 0:h.toString())}`,class:"btn btn-main"},{default:R(()=>[o("span",null,a(d.$i18n.locale==="ar"?"اطلب الآن":"Order Now"),1)]),_:1},8,["to"]),o("p",K,[o("span",{class:F((b=(g=t.product)==null?void 0:g.productOffer)!=null&&b.newPrice?"old-price":"")},a((O=t.product)==null?void 0:O.price)+" "+a((d.$i18n.locale==="ar","JOD")),3)]),(P=(k=t.product)==null?void 0:k.productOffer)!=null&&P.newPrice?(e(),c("p",L,a((x=(w=t.product)==null?void 0:w.productOffer)==null?void 0:x.newPrice),1)):y("",!0)])],64)}}},at=B(Q,[["__scopeId","data-v-4a150eb2"]]);export{at as _};
