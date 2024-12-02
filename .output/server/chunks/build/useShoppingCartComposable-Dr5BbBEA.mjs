import { a as useCart, c as useLang } from './useState-DDQ6Qtd2.mjs';
import { c as useNuxtApp } from './server.mjs';
import { ref, reactive } from 'vue';

const useShoppingCartComposable = () => {
  const shoppingCart = useCart().value;
  const { $awn } = useNuxtApp();
  const locale = ref(useLang().value);
  const addToCart = (item, qty) => {
    let storedItem = reactive({
      id: shoppingCart.items.length,
      product_id: item.id,
      qty,
      price: Number(item.price),
      item,
      selectedSize: item.selectedSize,
      photo: (item == null ? void 0 : item.photos[0]) ? item == null ? void 0 : item.photos[0] : ""
    });
    shoppingCart.items.push(storedItem);
    shoppingCart.totalQty += qty;
    shoppingCart.totalPrice += Number(item.price) * Number(qty);
    resetCartToStorage(shoppingCart);
    $awn.success(
      locale.value === "ar" ? "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0625\u0644\u0649 \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642" : "Product has been added to the cart"
    );
  };
  const addToCartWithQty = (item, qty) => {
    if (shoppingCart.items.length == 0) {
      addToCart(item, qty);
    } else {
      let found = false;
      shoppingCart.items.forEach((cartitem) => {
        if (cartitem.product_id == item.id && cartitem.price == item.price && item.selectedSize == cartitem.selectedSize) {
          found = true;
          cartitem.qty += qty;
          shoppingCart.totalQty += qty;
          shoppingCart.totalPrice += Number(item.price) * qty;
          resetCartToStorage(shoppingCart);
          $awn.success(
            locale.value === "ar" ? "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0646\u062A\u062C \u0641\u064A \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642" : "Product has been updated in the cart"
          );
        }
      });
      found ? "" : addToCart(item, qty);
    }
  };
  const updateQty = (id, qty) => {
    if (shoppingCart.items.hasOwnProperty(id) && shoppingCart.items[id]) {
      shoppingCart.items[id]["qty"] += qty;
      shoppingCart.totalQty += qty;
      shoppingCart.totalPrice += qty * shoppingCart.items[id]["price"];
      resetCartToStorage(shoppingCart);
    }
  };
  const CartdecreaseQty = (id, qty) => {
    shoppingCart.items[id]["qty"] -= 1;
    shoppingCart.totalQty -= 1;
    shoppingCart.totalPrice -= shoppingCart.items[id]["price"];
    resetCartToStorage(shoppingCart);
  };
  const CartincreaseQty = (id) => {
    shoppingCart.items[id]["qty"] += 1;
    shoppingCart.totalQty += 1;
    shoppingCart.totalPrice += shoppingCart.items[id]["price"];
    resetCartToStorage(shoppingCart);
  };
  const removeItemFromCart = (id) => {
    shoppingCart.totalQty -= shoppingCart.items[id]["qty"];
    shoppingCart.totalPrice -= shoppingCart.items[id]["qty"] * shoppingCart.items[id]["price"];
    shoppingCart.items.splice(id, 1);
    resetCartToStorage(shoppingCart);
    $awn.success(
      locale.value === "ar" ? "\u062A\u0645 \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0646 \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642" : "Product has been removed from cart"
    );
  };
  const resetCartToStorage = (value) => {
    if (localStorage.getItem("cart")) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(value));
    } else {
      localStorage.setItem("cart", JSON.stringify(value));
    }
  };
  return {
    addToCart,
    addToCartWithQty,
    updateQty,
    removeItemFromCart,
    CartdecreaseQty,
    CartincreaseQty
  };
};

export { useShoppingCartComposable as u };
//# sourceMappingURL=useShoppingCartComposable-Dr5BbBEA.mjs.map
