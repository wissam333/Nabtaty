import{_ as z}from"./BbA-o76e.js";import{_ as B}from"./B4QukuNw.js";import{_ as E}from"./DgA-3KHd.js";import{_ as T,aI as j,aJ as F,b as g,a as N,u as R,C as U,L as G}from"./B-xVLMgY.js";import{u as J}from"./BiZJ-hRq.js";import{a as _,P as V,y as W,Z as H,ae as Y,a3 as A,D,a8 as a,u as e,ag as n,z as k,M as l,a0 as o,a4 as i,F as Z,a6 as q,a7 as K,ai as Q}from"./Bynz-MEc.js";const X=b=>(q("data-v-bfe1747f"),b=b(),K(),b),x={class:"nav-container"},aa={class:"left-section"},ea={class:"logo"},sa=["src"],la=X(()=>a("div",{class:"right-section"},null,-1)),na={class:"main-links"},oa={class:"d-flex align-items-end"},ia={__name:"index",async setup(b){let d,$;const{public:{api:L,apiBase:S}}=N();JSON.parse(localStorage.getItem("isAdmin"));let t=_(j().value),y=_(F().value),p=_(!1),m=_(!1),f=_(!1),v=_(!1),I=_(!1);const C=()=>{I.value=window.matchMedia("(max-width: 1250px)").matches};V(()=>{C()}),W(()=>{window.addEventListener("resize",C)}),H(()=>{window.removeEventListener("resize",C)});const{data:M,pending:ca}=([d,$]=Y(()=>J(`${L.GetActiveLogo}`,{baseURL:S,credentials:"include"},"$GfwkTYFalU")),d=await d,$(),d);return(s,r)=>{var P,h;const u=z,c=B,O=E;return A(),D(Z,null,[a("div",x,[a("nav",null,[a("div",aa,[a("div",ea,[a("img",{src:`${e(S)}/${(h=(P=e(M))==null?void 0:P.data)==null?void 0:h.photoPath}`,alt:"Logo"},null,8,sa)]),a("div",{class:"navbar-collapse-button",onClick:r[0]||(r[0]=w=>("useSidebar"in s?s.useSidebar:e(g))().value=!("useSidebar"in s?s.useSidebar:e(g))().value)},[a("span",{class:n(("useSidebar"in s?s.useSidebar:e(g))().value?"open":"")},null,2),a("span",{class:n(("useSidebar"in s?s.useSidebar:e(g))().value?"open":"")},null,2),a("span",{class:n(("useSidebar"in s?s.useSidebar:e(g))().value?"open":"")},null,2)])]),la])]),a("div",{class:n(["sidebar box",("useSidebar"in s?s.useSidebar:e(g))().value?"":"open"])},[a("ul",na,[a("li",{onClick:r[1]||(r[1]=w=>k(p)?p.value=!e(p):p=!e(p)),class:"d-flex align-items-center justify-content-between"},[a("div",null,[l(u,{icon:["fas","seedling"]}),a("span",null,o(s.$i18n.locale==="ar"?"النباتات":"Plants"),1)]),l(u,{class:n(["caret",e(p)?"active":""]),icon:["fas","caret-down"]},null,8,["class"])]),a("ul",{class:n(["second-links",e(p)?"showLink":""])},[l(c,{to:"/admin/AddProduct"},{default:i(()=>[a("li",{class:n(e(y)=="AddProducts"?"sub-active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"إضافة نبات":"Add Plant"),1)],2)]),_:1}),l(c,{to:"/admin/ListProduct"},{default:i(()=>[a("li",{class:n(e(y)=="ListProducts"?"sub-active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"النباتات":"Plants"),1)],2)]),_:1})],2),a("li",{onClick:r[2]||(r[2]=w=>k(m)?m.value=!e(m):m=!e(m)),class:"d-flex align-items-center justify-content-between"},[a("div",null,[l(u,{icon:["fas","list"]}),a("span",null,o(s.$i18n.locale==="ar"?"الفئات":"Categories"),1)]),l(u,{class:n(["caret",e(m)?"active":""]),icon:["fas","caret-down"]},null,8,["class"])]),a("ul",{class:n(["second-links",e(m)?"showLink":""])},[l(c,{to:"/admin/Category"},{default:i(()=>[a("li",{class:n(e(t)=="Category"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الفئات":"Categories"),1)],2)]),_:1}),l(c,{to:"/admin/SubCategory"},{default:i(()=>[a("li",{class:n(e(t)=="SubCategory"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الفئات الفرعية":"Sub Categories"),1)],2)]),_:1})],2),l(c,{to:"/admin/Customers"},{default:i(()=>[a("li",{class:n(e(t)=="Customers"?"active":"")},[l(u,{icon:["fas","users"]}),a("span",null,o(s.$i18n.locale==="ar"?"الزبائن":"Customers"),1)],2)]),_:1}),a("li",{onClick:r[3]||(r[3]=w=>k(f)?f.value=!e(f):f=!e(f)),class:"d-flex align-items-center justify-content-between"},[a("div",null,[l(u,{width:"20",icon:["fas","truck"]}),a("span",null,o(s.$i18n.locale==="ar"?"الطلبيات":"Orders"),1)]),l(u,{class:n(["caret",e(f)?"active":""]),icon:["fas","caret-down"]},null,8,["class"])]),a("ul",{class:n(["second-links",e(f)?"showLink":""])},[l(c,{to:"/admin/Orders"},{default:i(()=>[a("li",{class:n(e(t)=="Orders"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الطلبيات":"Orders"),1)],2)]),_:1}),l(c,{to:"/admin/Locations"},{default:i(()=>[a("li",{class:n(e(t)=="Orders"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"التوصيل":"Delivery"),1)],2)]),_:1})],2),a("li",{onClick:r[4]||(r[4]=w=>k(v)?v.value=!e(v):v=!e(v)),class:"d-flex align-items-center justify-content-between"},[a("div",null,[l(u,{icon:["fas","globe"]}),a("span",null,o(s.$i18n.locale==="ar"?"إدارة الموقع":"Site Management"),1)]),l(u,{class:n(["caret",e(v)?"active":""]),icon:["fas","caret-down"]},null,8,["class"])]),a("ul",{class:n(["second-links four",e(v)?"showLink":""])},[l(c,{to:"/admin/Website"},{default:i(()=>[a("li",{class:n(e(t)=="Orders"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الصفحة الرئيسية":"Home Page"),1)],2)]),_:1}),l(c,{to:"/admin/About"},{default:i(()=>[a("li",{class:n(e(t)=="About"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"من نحن":"About Us"),1)],2)]),_:1}),l(c,{to:"/admin/ContactInfo"},{default:i(()=>[a("li",{class:n(e(t)=="ContactInfo"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"التواصل":"Contact"),1)],2)]),_:1}),l(c,{to:"/admin/PrivacyPolicy"},{default:i(()=>[a("li",{class:n(e(t)=="Privacy"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"سياسة الخصوصية":"Privacy Policy"),1)],2)]),_:1}),l(c,{to:"/admin/Support"},{default:i(()=>[a("li",{class:n(e(t)=="Support"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الدعم":"Support"),1)],2)]),_:1}),l(c,{to:"/admin/Press"},{default:i(()=>[a("li",{class:n(e(t)=="Press"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الصحافة النباتية":"Plant Press"),1)],2)]),_:1}),l(c,{to:"/admin/Care"},{default:i(()=>[a("li",{class:n(e(t)=="Care"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"العناية بالنبات":"Plant Care"),1)],2)]),_:1}),l(c,{to:"/admin/Talk"},{default:i(()=>[a("li",{class:n(e(t)=="Talk"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الحديث عن النبات":"Plant Talk"),1)],2)]),_:1}),l(c,{to:"/admin/Social"},{default:i(()=>[a("li",{class:n(e(t)=="Social"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"وسائل التواصل الاجتماعي":"Social Media"),1)],2)]),_:1}),l(c,{to:"/admin/Logo"},{default:i(()=>[a("li",{class:n(e(t)=="Logo"?"active":"")},[a("span",null,o(s.$i18n.locale==="ar"?"الشعار":"Logo"),1)],2)]),_:1})],2),l(c,{to:"/admin/Messages"},{default:i(()=>[a("li",{class:n(e(t)=="Messages"?"active":"")},[l(u,{icon:["fas","envelope"]}),a("span",null,o(s.$i18n.locale==="ar"?"الرسائل":"Messages"),1)],2)]),_:1}),a("a",null,[a("li",oa,[l(u,{icon:["fas","language"]}),l(O,{color:"#333"})])])])],2)],64)}}},ta=T(ia,[["__scopeId","data-v-bfe1747f"]]),va={__name:"Admin",setup(b){const{locale:d}=R();return U().value=d,($,L)=>{const S=ta,t=G;return A(),D("div",null,[l(t,null,{default:i(()=>[a("div",{class:n(e(d)=="ar"?"bodyAR":"bodyEN")},[l(S),Q($.$slots,"default")],2)]),_:3})])}}};export{va as default};
