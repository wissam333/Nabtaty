import{y as m,C as y,d as f}from"./B-xVLMgY.js";import{a as g,r as S}from"./Bynz-MEc.js";const Q=()=>{const e=m().value,{$awn:c}=f(),l=g(y().value),p=(t,r)=>{let a=S({id:e.items.length,product_id:t.id,qty:r,price:Number(t.price),item:t,selectedSize:t.selectedSize,photo:t!=null&&t.photos[0]?t==null?void 0:t.photos[0]:""});e.items.push(a),e.totalQty+=r,e.totalPrice+=Number(t.price)*Number(r),s(e),c.success(l.value==="ar"?"تم إضافة المنتج إلى سلة التسوق":"Product has been added to the cart")},i=(t,r)=>{if(e.items.length==0)p(t,r);else{let a=!1;e.items.forEach(o=>{o.product_id==t.id&&o.price==t.price&&t.selectedSize==o.selectedSize&&(a=!0,o.qty+=r,e.totalQty+=r,e.totalPrice+=Number(t.price)*r,s(e),c.success(l.value==="ar"?"تم تحديث المنتج في سلة التسوق":"Product has been updated in the cart"))}),a||p(t,r)}},u=(t,r)=>{e.items.hasOwnProperty(t)&&e.items[t]&&(e.items[t].qty+=r,e.totalQty+=r,e.totalPrice+=r*e.items[t].price,s(e))},n=(t,r)=>{e.items[t].qty-=1,e.totalQty-=1,e.totalPrice-=e.items[t].price,s(e)},d=t=>{e.items[t].qty+=1,e.totalQty+=1,e.totalPrice+=e.items[t].price,s(e)},h=t=>{e.totalQty-=e.items[t].qty,e.totalPrice-=e.items[t].qty*e.items[t].price,e.items.splice(t,1),s(e),c.success(l.value==="ar"?"تم إزالة المنتج من سلة التسوق":"Product has been removed from cart")},s=t=>{localStorage.getItem("cart")&&localStorage.removeItem("cart"),localStorage.setItem("cart",JSON.stringify(t))};return{addToCart:p,addToCartWithQty:i,updateQty:u,removeItemFromCart:h,CartdecreaseQty:n,CartincreaseQty:d}};export{Q as u};
