import{_ as A}from"./DsRr0TJg.js";import{_ as B}from"./DOQX7DXg.js";import{_ as N,b as v,c as R,d as S,n as F,a as Q}from"./DoTAhzWR.js";import{u as m}from"./DqFgVyEP.js";import{_ as D}from"./Cy7RYnNm.js";import{_ as O}from"./CNm2DKpp.js";import{_ as V}from"./gpyv37-N.js";import{ah as z,a3 as i,D as l,a8 as t,a0 as s,u as r,F as L,ag as M,Y as P,ac as T,a4 as h,M as d,a5 as w,aa as U,a6 as Y,a7 as K}from"./Bm3a7n3s.js";const y=_=>(Y("data-v-ea07af36"),_=_(),K(),_),W={class:"cart nav-margin"},G={class:"title"},H={class:"d-flex align-items-center justify-content-center"},J=y(()=>t("img",{width:"70",src:D,alt:""},null,-1)),X={class:"underline"},Z={class:"container"},tt={key:0,class:"row"},et={class:"col-lg-8"},st=y(()=>t("div",{class:"leaf"},[t("img",{src:O,alt:""})],-1)),ot=y(()=>t("div",{class:"leaf2"},[t("img",{src:V,alt:""})],-1)),at={class:"imagebox"},nt=["src"],it={class:"mx-5",style:{display:"flex","flex-direction":"column","justify-content":"space-around"}},ct={class:"fw-bold"},lt={key:0,class:"text-muted fw-bold"},rt={class:"color price fw-bold"},dt={class:"d-flex align-items-center justify-space-between mb-2"},_t={style:{border:"2px solid #003d2ec2"},class:"d-inline-flex align-items-center py-2 px-10"},pt=["id","data-qty"],ut=["onClick"],mt={class:"col-lg-4"},ht={class:"result-box",style:{border:"2px solid #003d2ec2","border-radius":"8px","padding-bottom":"10px"}},yt={class:"background text-white fw-bold d-flex justify-space-between px-3 p-2"},ft={class:"text-white"},bt={class:"text-white"},xt={class:"text-white"},gt={class:"d-flex justify-content-between align-items-center px-8 mt-5"},vt={class:"text-black fw-bold"},wt={class:"totalPrice fw-bold text-black",style:{"font-size":"20px"}},kt={class:"text-center mt-5"},Ct={class:"Check background px-5 py-2 text-white"},$t={class:"Check background px-5 py-2 text-white"},qt={class:"Check background px-5 py-2 text-white"},Et={key:1,class:"bg- d-flex justify-center align-items-center",style:{height:"calc(100vh - 300px)"}},It={class:"text-center"},jt={class:"background px-10 py-3 text-white mx-auto"},At={__name:"Cart",setup(_){const p=v(),k=R(),{public:{api:Bt,apiBase:C}}=Q(),$=(e,c)=>{const a=document.getElementById(`quantity_${e}`);if(new RegExp("^[1-9]+[0-9]*$").test(a.dataset.qty)){let n=parseInt(a.dataset.qty)+1;a.setAttribute("data-qty",n),a.textContent=n,m().CartincreaseQty(c)}},q=(e,c)=>{const a=document.getElementById(`quantity_${e}`);if(parseInt(a.dataset.qty)>1&&new RegExp("^[1-9]+[0-9]*$").test(a.dataset.qty)){let n=parseInt(a.dataset.qty)-1;a.setAttribute("data-qty",n),a.textContent=n,m().CartdecreaseQty(c)}},E=e=>{m().removeItemFromCart(e)};console.log(p.value);const I=()=>{let e=S().value;if(e!=null&&e.email)F("/order");else{const c="https://server.nabtaty.com";window.location.href=`${c}/auth/providers/google`}};return(e,c)=>{var f;const a=A,n=B,j=z("v-icon");return i(),l("div",W,[t("div",G,[t("h1",H,[J,t("span",X,s(e.$i18n.locale==="ar"?"سلة المشتريات":"My Cart"),1)])]),t("div",Z,[r(p).totalQty>0?(i(),l("div",tt,[t("div",et,[(i(!0),l(L,null,M(r(p).items,(o,u)=>{var b,x;return i(),l("div",{class:"cartbox mb-5 d-flex justify-start",key:o.id},[st,ot,t("div",at,[(b=o.item)!=null&&b.photos[0]?(i(),l("img",{key:0,src:`${r(C)}/${(x=o.item)==null?void 0:x.photos[0].photoPath}`,width:"250",height:"180",class:"",alt:""},null,8,nt)):w("",!0)]),t("div",it,[t("h4",ct,s((e.$i18n.locale=="en",o.item.plant_name)),1),o.item.note!=""?(i(),l("p",lt,s(o.item.note),1)):w("",!0),t("p",rt,s(o.price)+" "+s(e.$i18n.locale==="ar"?"درهم إماراتي":"AED"),1),t("div",dt,[t("div",_t,[d(a,{style:{color:"#003d2ec2",cursor:"pointer"},onClick:g=>q(o.id,u),icon:["fas","minus"]},null,8,["onClick"]),t("span",{class:"mx-3 quantity",id:`quantity_${o.id}`,"data-qty":o.qty},s(o.qty),9,pt),d(a,{style:{color:"#003d2ec2",cursor:"pointer"},onClick:g=>$(o.id,u),icon:["fas","plus"]},null,8,["onClick"])]),t("button",{class:U(["mb-0 text-white border-0 rounded-0 mx-5 btn delete",e.$i18n.locale==="en"?"en":""]),onClick:g=>E(u)},s(e.$i18n.locale=="en"?"REMOVE":"حذف"),11,ut)])])])}),128))]),t("div",mt,[t("div",ht,[t("h4",yt,[t("span",ft,s(e.$i18n.locale=="en"?"Summary":"ملخص"),1),t("span",bt,[P(s(("useCart"in e?e.useCart:r(v))().value.totalQty)+" ",1),t("span",xt,s(e.$i18n.locale=="en"?"Item":"عنصر"),1)])]),t("div",gt,[t("span",vt,s(e.$i18n.locale=="ar"?"الطلب الكلي ":"Order Total"),1),t("span",wt,s((f=r(p).totalPrice)==null?void 0:f.toFixed(2))+" "+s(e.$i18n.locale==="ar"?"درهم إماراتي":"AED"),1)]),t("div",kt,[r(k).isAuthenticated?(i(),T(n,{key:0,class:"w-75",to:"/order"},{default:h(()=>[t("button",Ct,s(e.$i18n.locale=="ar"?"اطلب الطلبية":"ORDER NOW"),1)]),_:1})):(i(),l("span",{key:1,class:"w-75",onClick:c[0]||(c[0]=o=>I())},[t("button",$t,s(e.$i18n.locale=="ar"?"اطلب الطلبية":"Order Now"),1)])),d(n,{class:"mx-1",to:"/"},{default:h(()=>[t("button",qt,s(e.$i18n.locale=="ar"?"تابع التسوق":"Keep Shopping"),1)]),_:1})])])])])):(i(),l("div",Et,[t("div",null,[t("h5",It,[d(j,{size:"x-large",color:" darken-2",icon:"mdi-cart-off"})]),d(n,{to:"/",class:"d-flex justify-center mt-9 align-items-center"},{default:h(()=>[t("button",jt,s(e.$i18n.locale=="ar"?"املأ السلة":"Fill Your Cart"),1)]),_:1})])]))])])}}},zt=N(At,[["__scopeId","data-v-ea07af36"]]);export{zt as default};
