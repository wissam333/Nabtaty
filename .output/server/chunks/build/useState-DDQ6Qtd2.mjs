import { h as useState } from './server.mjs';

const useMainToken = () => useState(() => [], "$5XkT5zzMZs");
const useCurrency = () => useState(() => [], "$E4238huDXq");
const useUserInfo = () => useState(() => [], "$bFXuP5Rj9K");
const useAccountType = () => useState(() => [], "$tYbcGdzRuM");
const useLang = () => useState(() => [], "$PFeCz8so2k");
const useAuth = () => useState(() => ({
  isAuthenticated: false
}), "$OsV0BJDEg1");
const useCart = () => useState(() => ({
  items: new Array(),
  totalQty: 0,
  totalPrice: 0
}), "$83Y7GY7nLf");
const princedomORMap = () => useState(() => true, "$uhL1ThW1hr");
const useSidebar = () => useState(() => true, "$fwYUMzzmcM");
const useDelviryCost = () => useState(() => 0, "$J444hxSIPc");

export { useCart as a, useAuth as b, useUserInfo as c, useDelviryCost as d, useAccountType as e, useCurrency as f, useLang as g, useMainToken as h, princedomORMap as p, useSidebar as u };
//# sourceMappingURL=useState-DDQ6Qtd2.mjs.map
