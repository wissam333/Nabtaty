import{_ as R}from"./V74H8tnE.js";import{ah as A,a as B,P as ue,y as pe,Z as _e,w as L,a3 as s,D as i,a8 as a,u,M as _,a4 as b,F as S,ag as q,ac as V,ai as E,aj as me,ak as F,a5 as G,al as M,am as U,a0 as m,aa as O,a6 as D,a7 as x,an as fe,Y as ae,ao as he,ap as ge,N as k,aq as te,V as oe}from"./DM_oAa4t.js";import{_ as C,b as I,p as J,c as K,B as ve,g as $e,f as we}from"./BivyunLP.js";import{u as P}from"./BImt1Bty.js";import{_ as N}from"./Bvk3Dttd.js";import{_ as z}from"./CcmWRlCB.js";import{_ as Y}from"./CjECO4Zt.js";import{u as be}from"./BlfcQkE6.js";import{U as ne,s as Ce}from"./DaC9Fysc.js";import{s as Q}from"./CVj1k-HG.js";const ye={class:"home"},Pe={class:"slider"},Se={key:0,class:"text-center text-white loader"},Ie={key:1},ke={class:"main-img"},Le=["src"],Ae={__name:"MainImg",async setup(e){let n,o;const{public:{apiBase:c,api:p}}=I(),{data:l,pending:r}=([n,o]=A(()=>P(`${p.GetHomePhotos}`,{baseURL:c,method:"GET"},"$nDgijvoM1P")),n=await n,o(),n);let t=B(!1);const d=()=>{t.value=window.matchMedia("(max-width: 1250px)").matches};ue(()=>{d()}),pe(()=>{window.addEventListener("resize",d)}),_e(()=>{window.removeEventListener("resize",d)});const{data:h}=([n,o]=A(()=>P("https://server.nabtaty.com/api/findMyInfo","$vML4fiuVup")),n=await n,o(),n);return L(()=>{h.value.firstName&&localStorage.setItem("userInfo",h.value)}),(f,$)=>{const v=R,g=M,w=U;return s(),i("div",ye,[a("div",Pe,[u(r)?(s(),i("div",Se,[_(v)])):u(r)?G("",!0):(s(),i("div",Ie,[_(w,{style:{direction:"ltr"},modules:["SwiperAutoplay"in f?f.SwiperAutoplay:u(E),"SwiperEffectFade"in f?f.SwiperEffectFade:u(me),"SwiperPagination"in f?f.SwiperPagination:u(F)],"slides-per-view":1,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},effect:"fade",speed:1e3,pagination:{clickable:!0}},{default:b(()=>[(s(!0),i(S,null,q(u(l),y=>(s(),V(g,{key:y.id},{default:b(()=>[a("div",ke,[a("img",{class:"main",src:`${u(c)}/${y.photo}`},null,8,Le)])]),_:2},1024))),128))]),_:1},8,["modules"])]))])])}}},Ve=C(Ae,[["__scopeId","data-v-a7a89e55"]]),Ge=J("/photos/nabt2.png"),Oe={key:0,class:"disscount"},Be={class:"product-img"},Re=["src"],qe={key:1,src:Ge,alt:""},Ee={class:"product-info"},Fe={class:"title"},Me={__name:"CategoryCard",props:["product","productId"],setup(e){const{public:{api:n,apiBase:o}}=I();return(c,p)=>{var r,t,d,h,f,$,v,g,w;const l=N;return s(),i(S,null,[(t=(r=e.product)==null?void 0:r.data)!=null&&t.productOffer.discountRatio?(s(),i("div",Oe,m(((h=(d=e.product)==null?void 0:d.data)==null?void 0:h.productOffer.discountRatio)+"%"),1)):G("",!0),a("div",null,[a("div",Be,[(f=e.product)!=null&&f.photo?(s(),i("img",{key:0,src:u(o)+"/"+(($=e.product)==null?void 0:$.photo),alt:""},null,8,Re)):(s(),i("img",qe))]),a("div",Ee,[a("h5",Fe,m((c.$i18n.locale==="ar",e.product.category_name)),1)])]),_(l,{to:`/Products/${((g=(v=e.product)==null?void 0:v.id)==null?void 0:g.toString())??((w=e.productId)==null?void 0:w.toString())}`,class:"btn btn-main"},{default:b(()=>[a("span",null,m(c.$i18n.locale==="ar"?"شاهد المزيد":"See More"),1)]),_:1},8,["to"])],64)}}},Ue=C(Me,[["__scopeId","data-v-3103affe"]]),De=e=>(D("data-v-7ee01ace"),e=e(),x(),e),xe={class:"container mt-10"},Ne=De(()=>a("img",{width:"70",src:z,alt:""},null,-1)),ze={key:0,class:"text-center text-white loader"},He={key:1},Te=["dir"],Ze={__name:"Categories",async setup(e){let n,o;const{public:{api:c,apiBase:p}}=I(),{locale:l}=K();let r=B();if(l.value==="ar"){const{data:t,pending:d}=([n,o]=A(()=>P(`${c.findAllCategories}`,{baseURL:p,headers:{"accept-language":"ar"}},"$bVB1W1Hcea")),n=await n,o(),n);L(()=>{t.value&&(r.value=t.value)})}else{const{data:t,pending:d}=([n,o]=A(()=>P(`${c.findAllCategories}`,{baseURL:p,headers:{"accept-language":"en"}},"$ZKJTXmzXJr")),n=await n,o(),n);L(()=>{t.value&&(r.value=t.value)})}return(t,d)=>{const h=R,f=Ue,$=M,v=U;return s(),i("div",{class:O(["Categories",t.$i18n.locale==="ar"?"ar":""])},[a("div",xe,[a("h1",null,[Ne,a("span",null,m(t.$i18n.locale==="ar"?"الفئات":"Categories"),1)]),t.pending?(s(),i("div",ze,[_(h)])):(s(),i("div",He,[_(v,{style:{direction:"ltr"},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:u(E),"SwiperPagination"in t?t.SwiperPagination:u(F)],loop:!1,autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{clickable:!0},breakpoints:{1200:{slidesPerView:4,slidesPerGroup:4},992:{slidesPerView:3,slidesPerGroup:3},768:{slidesPerView:2,slidesPerGroup:2},250:{slidesPerView:2,slidesPerGroup:2},1:{slidesPerView:1,slidesPerGroup:1}}},{default:b(()=>[(s(!0),i(S,null,q(u(r),g=>(s(),V($,{key:g.id},{default:b(()=>[a("div",{class:"product",dir:t.$i18n.locale==="ar"?"rtl":"ltr","data-aos":"fade-up","data-aos-duration":"800"},[_(f,{product:g},null,8,["product"])],8,Te)]),_:2},1024))),128))]),_:1},8,["modules"])]))])],2)}}},je=C(Ze,[["__scopeId","data-v-7ee01ace"]]),We=J("/photos/2619fafceaedd791a39fd2a196ec0641.png"),Xe=fe('<div class="leaf" data-v-213bca8e><img src="'+Y+'" alt="" data-v-213bca8e></div><div class="leaf2" data-v-213bca8e><img src="'+Y+'" alt="" data-v-213bca8e></div><div class="leaf3" data-v-213bca8e><img src="'+Y+'" alt="" data-v-213bca8e></div><div class="leaf4" data-v-213bca8e><img src="'+Y+'" alt="" data-v-213bca8e></div>',4),Ye={key:0,class:"disscount"},Je={class:"product-img"},Ke=["src"],Qe={key:1,src:We,alt:""},et={class:"product-info"},tt={class:"title"},ot={class:"price"},nt={key:0,class:"price"},at={__name:"ProductCard",props:["product","productId"],setup(e){const{public:{api:n,apiBase:o}}=I();return(c,p)=>{var r,t,d,h,f,$,v,g,w,y,H,T,Z,j,W,X;const l=N;return s(),i(S,null,[Xe,(t=(r=e.product)==null?void 0:r.data)!=null&&t.productOffer.discountRatio?(s(),i("div",Ye,m(((h=(d=e.product)==null?void 0:d.data)==null?void 0:h.productOffer.discountRatio)+"%"),1)):G("",!0),a("div",Je,[(f=e.product)!=null&&f.photos.photoPath?(s(),i("img",{key:0,src:u(o)+"/"+(($=e.product)==null?void 0:$.photos.photoPath),alt:""},null,8,Ke)):(s(),i("img",Qe))]),a("div",et,[a("h5",tt,m((c.$i18n.locale==="ar",e.product.plant_name)),1),_(l,{to:`/Product/${((g=(v=e.product)==null?void 0:v.id)==null?void 0:g.toString())??((w=e.productId)==null?void 0:w.toString())}`,class:"btn btn-main"},{default:b(()=>[a("span",null,m(c.$i18n.locale==="ar"?"اطلب الآن":"Order Now"),1)]),_:1},8,["to"]),a("p",ot,[a("span",{class:O((H=(y=e.product)==null?void 0:y.productOffer)!=null&&H.newPrice?"old-price":"")},m((T=e.product)==null?void 0:T.price)+" "+m((c.$i18n.locale==="ar","AED")),3)]),(j=(Z=e.product)==null?void 0:Z.productOffer)!=null&&j.newPrice?(s(),i("p",nt,m((X=(W=e.product)==null?void 0:W.productOffer)==null?void 0:X.newPrice)+" "+m((c.$i18n.locale==="ar","AED")),1)):G("",!0)])],64)}}},st=C(at,[["__scopeId","data-v-213bca8e"]]),it=e=>(D("data-v-542ae40f"),e=e(),x(),e),rt={class:"container mt-10"},ct={class:"see-all"},lt=it(()=>a("img",{width:"70",src:z,alt:""},null,-1)),dt={key:0,class:"text-center text-white loader"},ut={key:1},pt=["dir"],_t={__name:"Arrivals",setup(e){const{public:{api:n,apiBase:o}}=I(),{locale:c}=K();let p=B(!1),l=B();return(async()=>{if(p.value=!0,c.value==="ar"){const{data:t,pending:d}=await P(`${n.GetPlantByCat}/11`,{baseURL:o,headers:{"accept-language":"ar"}},"$O6PvhtnQkg");L(()=>{t.value&&(l.value=t.value)})}else{const{data:t,pending:d}=await P(`${n.GetPlantByCat}/11`,{baseURL:o,headers:{"accept-language":"en"}},"$VSg0UzGRA8");L(()=>{t.value&&(l.value=t.value)})}p.value=!1})(),(t,d)=>{const h=N,f=R,$=st,v=M,g=U;return s(),i("div",{class:O(["Categories",t.$i18n.locale==="ar"?"ar":""])},[a("div",rt,[a("div",ct,[_(h,{to:"/Products/11",class:"btn"},{default:b(()=>[ae(m(t.$i18n.locale==="ar"?"رؤية الكل":"See All"),1)]),_:1})]),a("h1",null,[lt,a("span",null,m(t.$i18n.locale==="ar"?"نباتات خضراء":"Green Plants"),1)]),u(p)?(s(),i("div",dt,[_(f)])):(s(),i("div",ut,[_(g,{style:{direction:"ltr"},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:u(E),"SwiperPagination"in t?t.SwiperPagination:u(F)],loop:!1,autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{clickable:!0},breakpoints:{1200:{slidesPerView:4,slidesPerGroup:4},992:{slidesPerView:3,slidesPerGroup:3},768:{slidesPerView:2,slidesPerGroup:2},250:{slidesPerView:2,slidesPerGroup:2},1:{slidesPerView:1,slidesPerGroup:1}}},{default:b(()=>[(s(!0),i(S,null,q(u(l),w=>(s(),V(v,{key:w.id},{default:b(()=>[a("div",{class:"product",dir:t.$i18n.locale==="ar"?"rtl":"ltr","data-aos":"fade-up","data-aos-duration":"800"},[_($,{product:w},null,8,["product"])],8,pt)]),_:2},1024))),128))]),_:1},8,["modules"])]))])],2)}}},mt=C(_t,[["__scopeId","data-v-542ae40f"]]),ft=J("/photos/gifts.png"),ht={key:0,class:"disscount"},gt={class:"product-img"},vt=["src"],$t={key:1,src:ft,alt:""},wt={class:"product-info"},bt={class:"title"},Ct={class:"price"},yt={key:0,class:"price"},Pt={__name:"GiftCard",props:["product","productId"],setup(e){const{public:{api:n,apiBase:o}}=I();return(c,p)=>{var r,t,d,h,f,$,v,g,w,y,H,T,Z,j,W,X;const l=N;return s(),i(S,null,[(t=(r=e.product)==null?void 0:r.data)!=null&&t.productOffer.discountRatio?(s(),i("div",ht,m(((h=(d=e.product)==null?void 0:d.data)==null?void 0:h.productOffer.discountRatio)+"%"),1)):G("",!0),a("div",gt,[(f=e.product)!=null&&f.photos.photoPath?(s(),i("img",{key:0,src:u(o)+"/"+(($=e.product)==null?void 0:$.photos.photoPath),alt:""},null,8,vt)):(s(),i("img",$t))]),a("div",wt,[a("h5",bt,m((c.$i18n.locale==="ar",e.product.plant_name)),1),_(l,{to:`/Product/${((g=(v=e.product)==null?void 0:v.id)==null?void 0:g.toString())??((w=e.productId)==null?void 0:w.toString())}`,class:"btn btn-main"},{default:b(()=>[a("span",null,m(c.$i18n.locale==="ar"?"اطلب الآن":"Order Now"),1)]),_:1},8,["to"]),a("p",Ct,[a("span",{class:O((H=(y=e.product)==null?void 0:y.productOffer)!=null&&H.newPrice?"old-price":"")},m((T=e.product)==null?void 0:T.price)+" "+m((c.$i18n.locale==="ar","AED")),3)]),(j=(Z=e.product)==null?void 0:Z.productOffer)!=null&&j.newPrice?(s(),i("p",yt,m((X=(W=e.product)==null?void 0:W.productOffer)==null?void 0:X.newPrice)+" "+m((c.$i18n.locale==="ar","AED")),1)):G("",!0)])],64)}}},St=C(Pt,[["__scopeId","data-v-8d29da16"]]),It=e=>(D("data-v-d6e8afaf"),e=e(),x(),e),kt={class:"container mt-10"},Lt={class:"see-all"},At=It(()=>a("img",{width:"70",src:z,alt:""},null,-1)),Vt={key:0,class:"text-center text-white loader"},Gt={key:1},Ot=["dir"],Bt={__name:"Gifts",setup(e){const{public:{api:n,apiBase:o}}=I(),{locale:c}=K();let p=B(!1),l=B();return(async()=>{if(p.value=!0,c.value==="ar"){const{data:t,pending:d}=await P(`${n.GetPlantByCat}/16`,{baseURL:o,headers:{"accept-language":"ar"}},"$FvndF04Yjx");L(()=>{t.value&&(l.value=t.value)})}else{const{data:t,pending:d}=await P(`${n.GetPlantByCat}/16`,{baseURL:o,headers:{"accept-language":"en"}},"$slXzrCw2Wq");L(()=>{t.value&&(l.value=t.value)})}p.value=!1})(),(t,d)=>{var w;const h=N,f=R,$=St,v=M,g=U;return(w=u(l))!=null&&w.length?(s(),i("div",{key:0,class:O(["Categories",t.$i18n.locale==="ar"?"ar":""])},[a("div",kt,[a("div",Lt,[_(h,{to:"/Products/16",class:"btn"},{default:b(()=>[ae(m(t.$i18n.locale==="ar"?"رؤية الكل":"See All"),1)]),_:1})]),a("h1",null,[At,a("span",null,m(t.$i18n.locale==="ar"?"الهدايا":"Gifts"),1)]),u(p)?(s(),i("div",Vt,[_(f)])):(s(),i("div",Gt,[_(g,{style:{direction:"ltr"},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:u(E),"SwiperPagination"in t?t.SwiperPagination:u(F)],loop:!1,autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{clickable:!0},breakpoints:{1200:{slidesPerView:4,slidesPerGroup:4},992:{slidesPerView:3,slidesPerGroup:3},768:{slidesPerView:2,slidesPerGroup:2},250:{slidesPerView:2,slidesPerGroup:2},1:{slidesPerView:1,slidesPerGroup:1}}},{default:b(()=>[(s(!0),i(S,null,q(u(l),y=>(s(),V(v,{key:y.id},{default:b(()=>[a("div",{class:"product",dir:t.$i18n.locale==="ar"?"rtl":"ltr","data-aos":"fade-up","data-aos-duration":"800"},[_($,{product:y},null,8,["product"])],8,Ot)]),_:2},1024))),128))]),_:1},8,["modules"])]))])],2)):G("",!0)}}},Rt=C(Bt,[["__scopeId","data-v-d6e8afaf"]]),qt=J("/photos/rose.png"),se=e=>(D("data-v-a4a826f1"),e=e(),x(),e),Et={class:"about"},Ft={key:0,class:"text-center text-white"},Mt={key:1,class:"container"},Ut={class:"about-content row"},Dt=["data-aos"],xt={class:"title"},Nt={class:"d-flex align-items-center"},zt=se(()=>a("img",{width:"70",src:z,alt:""},null,-1)),Ht={class:"underline"},Tt={class:"mt-7 d-flex justify-content-end"},Zt=["data-aos"],jt=se(()=>a("img",{src:qt,alt:""},null,-1)),Wt=[jt],Xt={__name:"About",async setup(e){let n,o;const{public:{apiBase:c,api:p}}=I(),{data:l,pending:r}=([n,o]=A(()=>be().GetAll(`${p.Menus}/3`)),n=await n,o(),n);return(t,d)=>{const h=R,f=N;return s(),i("div",Et,[u(r)?(s(),i("div",Ft,[_(h)])):(s(),i("div",Mt,[a("div",Ut,[a("div",{class:"about-info col-lg-6","data-aos":t.$i18n.locale==="ar"?"fade-left":"fade-right","data-aos-duration":"800"},[a("div",xt,[a("h1",Nt,[zt,a("span",Ht,m(t.$t("AboutUs")),1)])]),a("div",{class:O(["desc",t.$i18n.locale==="ar"?"ar":""])}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam cum quis, ipsa corrupti nostrum ex rem laboriosam voluptatum tenetur suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam cum quis, ipsa corrupti nostrum ex rem laboriosam voluptatum tenetur suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam cum quis, ipsa corrupti nostrum ex rem laboriosam voluptatum tenetur suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam cum quis, ipsa corrupti nostrum ex rem laboriosam voluptatum tenetur suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam cum quis, ipsa corrupti nostrum ex rem laboriosam voluptatum tenetur suscipit. Aut ut qui quibusdam, facere officiis nemo sapiente vero. ",2),a("div",Tt,[_(f,{to:"/About",class:"btn"},{default:b(()=>[a("span",null,m(t.$t("ReadMore")),1)]),_:1})])],8,Dt),a("div",{class:"about-img col-lg-6","data-aos":t.$i18n.locale==="ar"?"fade-right":"fade-left","data-aos-duration":"800"},Wt,8,Zt)])]))])}}},Yt=C(Xt,[["__scopeId","data-v-a4a826f1"]]),ie=e=>(D("data-v-6bbc2f6e"),e=e(),x(),e),Jt={class:"home container"},Kt={class:"title"},Qt={class:"d-flex align-items-center"},eo=ie(()=>a("img",{width:"70",src:z,alt:""},null,-1)),to={class:"underline"},oo={class:"slider"},no={key:0,class:"text-center text-white loader"},ao={key:1},so={class:"main-img"},io=["src"],ro=ie(()=>a("div",{class:"swiper-navigation"},[a("button",{class:"swiper-button-next"}),a("button",{class:"swiper-button-prev"})],-1)),co={__name:"Album",async setup(e){let n,o;const{public:{apiBase:c,api:p}}=I(),{data:l,pending:r}=([n,o]=A(()=>P(`${p.GetPhotoAlbum}`,{baseURL:c,method:"GET"},"$z19i8YPHPk")),n=await n,o(),n);return(t,d)=>{const h=R,f=M,$=U;return s(),i("div",Jt,[a("div",Kt,[a("h1",Qt,[eo,a("span",to,m(t.$i18n.locale==="ar"?"البومنا":"Our Album"),1)])]),a("div",oo,[u(r)?(s(),i("div",no,[_(h)])):u(r)?G("",!0):(s(),i("div",ao,[_($,{style:{direction:"ltr"},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:u(E),"SwiperEffectCoverflow"in t?t.SwiperEffectCoverflow:u(he),"SwiperPagination"in t?t.SwiperPagination:u(F),"SwiperNavigation"in t?t.SwiperNavigation:u(ge)],loop:!1,autoplay:{delay:5e3,disableOnInteraction:!0},effect:"coverflow",speed:1e3,pagination:{clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3,slidesPerGroup:3},992:{slidesPerView:3,slidesPerGroup:3},768:{slidesPerView:2,slidesPerGroup:2},250:{slidesPerView:2,slidesPerGroup:2},1:{slidesPerView:2,slidesPerGroup:2}}},{default:b(()=>[(s(!0),i(S,null,q(u(l),v=>(s(),V(f,{key:v.id},{default:b(()=>[a("div",so,[a("img",{class:"main",src:u(c)+"/"+v.photo},null,8,io)])]),_:2},1024))),128))]),_:1},8,["modules","navigation"])]))]),ro])}}},lo=C(co,[["__scopeId","data-v-6bbc2f6e"]]);var re={name:"BanIcon",extends:Q},uo=a("path",{d:"M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",fill:"currentColor"},null,-1),po=[uo];function _o(e,n,o,c,p,l){return s(),i("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),po,16)}re.render=_o;var ce={name:"StarIcon",extends:Q},mo=a("path",{d:"M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",fill:"currentColor"},null,-1),fo=[mo];function ho(e,n,o,c,p,l){return s(),i("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),fo,16)}ce.render=ho;var le={name:"StarFillIcon",extends:Q},go=a("path",{d:"M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",fill:"currentColor"},null,-1),vo=[go];function $o(e,n,o,c,p,l){return s(),i("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),vo,16)}le.render=$o;var wo=function(n){var o=n.dt;return`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: `.concat(o("rating.gap"),`;
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: background `).concat(o("rating.transition.duration"),", color ").concat(o("rating.transition.duration"),", border-color ").concat(o("rating.transition.duration"),", outline-color ").concat(o("rating.transition.duration"),", box-shadow ").concat(o("rating.transition.duration"),`;
}

.p-rating-option.p-focus-visible {
    box-shadow: `).concat(o("focus.ring.shadow"),`;
    outline: `).concat(o("focus.ring.width")," ").concat(o("focus.ring.style")," ").concat(o("focus.ring.color"),`;
    outline-offset: `).concat(o("focus.ring.offset"),`;
}

.p-rating-icon {
    color: `).concat(o("rating.icon.color"),`;
    transition: background `).concat(o("rating.transition.duration"),", color ").concat(o("rating.transition.duration"),", border-color ").concat(o("rating.transition.duration"),", outline-color ").concat(o("rating.transition.duration"),", box-shadow ").concat(o("rating.transition.duration"),`;
    font-size: `).concat(o("rating.icon.size"),`;
    width: `).concat(o("rating.icon.size"),`;
    height: `).concat(o("rating.icon.size"),`;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: `).concat(o("rating.icon.hover.color"),`;
}

.p-rating-option-active .p-rating-icon {
    color: `).concat(o("rating.icon.active.color"),`;
}
`)},bo={root:function(n){var o=n.props;return["p-rating",{"p-readonly":o.readonly,"p-disabled":o.disabled}]},option:function(n){var o=n.instance,c=n.props,p=n.value;return["p-rating-option",{"p-rating-option-active":p<=c.modelValue,"p-focus-visible":p===o.focusedOptionIndex&&o.isFocusVisibleItem}]},onIcon:"p-rating-icon p-rating-on-icon",offIcon:"p-rating-icon p-rating-off-icon"},Co=ve.extend({name:"rating",theme:wo,classes:bo}),yo={name:"BaseRating",extends:Ce,props:{modelValue:{type:Number,default:null},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0}},style:Co,provide:function(){return{$pcRating:this,$parentInstance:this}}},de={name:"Rating",extends:yo,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],data:function(){return{name:this.$attrs.name,focusedOptionIndex:-1,isFocusVisibleItem:!0}},watch:{"$attrs.name":function(n){this.name=n||ne()}},mounted:function(){this.name=this.name||ne()},methods:{getPTOptions:function(n,o){return this.ptm(n,{context:{active:o<=this.modelValue,focused:o===this.focusedOptionIndex}})},onOptionClick:function(n,o){if(!this.readonly&&!this.disabled){this.onOptionSelect(n,o),this.isFocusVisibleItem=!1;var c=$e(n.currentTarget);c&&we(c)}},onFocus:function(n,o){this.focusedOptionIndex=o,this.$emit("focus",n)},onBlur:function(n){this.focusedOptionIndex=-1,this.$emit("blur",n)},onChange:function(n,o){this.onOptionSelect(n,o),this.isFocusVisibleItem=!0},onOptionSelect:function(n,o){this.focusedOptionIndex===o||this.modelValue===o?(this.focusedOptionIndex=-1,this.updateModel(n,null)):(this.focusedOptionIndex=o,this.updateModel(n,o||null))},updateModel:function(n,o){this.$emit("update:modelValue",o),this.$emit("change",{originalEvent:n,value:o})},starAriaLabel:function(n){return n===1?this.$primevue.config.locale.aria.star:this.$primevue.config.locale.aria.stars.replace(/{star}/g,n)}},components:{StarFillIcon:le,StarIcon:ce,BanIcon:re}},Po=["onClick","data-p-active","data-p-focused"],So=["value","name","checked","disabled","readonly","aria-label","onFocus","onChange"];function Io(e,n,o,c,p,l){return s(),i("div",k({class:e.cx("root")},e.ptmi("root")),[(s(!0),i(S,null,q(e.stars,function(r){return s(),i("div",k({key:r,class:e.cx("option",{value:r}),onClick:function(d){return l.onOptionClick(d,r)},ref_for:!0},l.getPTOptions("option",r),{"data-p-active":r<=e.modelValue,"data-p-focused":r===p.focusedOptionIndex}),[a("span",k({class:"p-hidden-accessible",ref_for:!0},e.ptm("hiddenOptionInputContainer"),{"data-p-hidden-accessible":!0}),[a("input",k({type:"radio",value:r,name:p.name,checked:e.modelValue===r,disabled:e.disabled,readonly:e.readonly,"aria-label":l.starAriaLabel(r),onFocus:function(d){return l.onFocus(d,r)},onBlur:n[0]||(n[0]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:function(d){return l.onChange(d,r)},ref_for:!0},e.ptm("hiddenOptionInput")),null,16,So)],16),r<=e.modelValue?te(e.$slots,"onicon",{key:0,value:r,class:O(e.cx("onIcon"))},function(){return[(s(),V(oe(e.onIcon?"span":"StarFillIcon"),k({class:[e.cx("onIcon"),e.onIcon],ref_for:!0},e.ptm("onIcon")),null,16,["class"]))]}):te(e.$slots,"officon",{key:1,value:r,class:O(e.cx("offIcon"))},function(){return[(s(),V(oe(e.offIcon?"span":"StarIcon"),k({class:[e.cx("offIcon"),e.offIcon],ref_for:!0},e.ptm("offIcon")),null,16,["class"]))]})],16,Po)}),128))],16)}de.render=Io;const ko=J("/photos/user.png"),ee=e=>(D("data-v-5ee4e807"),e=e(),x(),e),Lo={class:"reviews"},Ao={class:"container"},Vo=ee(()=>a("img",{width:"70",src:z,alt:""},null,-1)),Go={key:0,class:"text-center text-white loader"},Oo={key:1},Bo={class:"review"},Ro=ee(()=>a("div",{class:"leaf"},[a("img",{src:Y,alt:""})],-1)),qo={class:"title"},Eo=ee(()=>a("img",{width:"40",src:ko,alt:""},null,-1)),Fo={class:"mx-3"},Mo={class:"desc"},Uo={class:"rate"},Do={__name:"Reviews",async setup(e){let n,o;const{public:{api:c,apiBase:p}}=I(),{locale:l}=K();let r=B();if(l.value==="ar"){const{data:t,pending:d}=([n,o]=A(()=>P(`${c.GetReviews}`,{baseURL:p,headers:{"accept-language":"ar"}},"$3dFRRwKHzk")),n=await n,o(),n);L(()=>{t.value&&(r.value=t.value)})}else{const{data:t,pending:d}=([n,o]=A(()=>P(`${c.GetReviews}`,{baseURL:p,headers:{"accept-language":"en"}},"$ylL79Wtgv4")),n=await n,o(),n);L(()=>{t.value&&(r.value=t.value)})}return(t,d)=>{const h=R,f=de,$=M,v=U;return s(),i("div",Lo,[a("div",Ao,[a("h1",null,[Vo,a("span",null,m(t.$i18n.locale==="ar"?"التعليقات":"Reviews"),1)]),t.pending?(s(),i("div",Go,[_(h)])):(s(),i("div",Oo,[_(v,{style:{direction:"ltr"},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:u(E),"SwiperPagination"in t?t.SwiperPagination:u(F)],loop:!1,autoplay:{delay:5e3,disableOnInteraction:!0},spaceBetween:"30",pagination:{clickable:!0},breakpoints:{1200:{slidesPerView:2,slidesPerGroup:2},992:{slidesPerView:2,slidesPerGroup:2},768:{slidesPerView:1,slidesPerGroup:1},250:{slidesPerView:1,slidesPerGroup:1},1:{slidesPerView:1,slidesPerGroup:1}}},{default:b(()=>[(s(!0),i(S,null,q(u(r),g=>(s(),V($,null,{default:b(()=>[a("div",Bo,[Ro,a("div",qo,[Eo,a("h2",Fo,m(g.customer_name),1)]),a("div",Mo,m(g.message),1),a("div",Uo,[_(f,{modelValue:g.rate,"onUpdate:modelValue":w=>g.rate=w,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1024))),256))]),_:1},8,["modules"])]))])])}}},xo=C(Do,[["__scopeId","data-v-5ee4e807"]]),No={},zo={style:{overflow:"hidden"}};function Ho(e,n){const o=Ve,c=je,p=mt,l=Rt,r=Yt,t=lo,d=xo;return s(),i("div",zo,[_(o),_(c),_(p),_(l),_(r),_(t),_(d)])}const To=C(No,[["render",Ho]]),Zo={};function jo(e,n){const o=To;return s(),i("div",null,[_(o)])}const an=C(Zo,[["render",jo]]);export{an as default};
