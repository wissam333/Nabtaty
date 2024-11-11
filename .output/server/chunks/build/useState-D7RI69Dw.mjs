import { f as useState } from './server.mjs';

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

export { useAuth as a, useUserInfo as b, useAccountType as c, useCurrency as d, useLang as e, useMainToken as f, princedomORMap as p, useCart as u };
//# sourceMappingURL=useState-D7RI69Dw.mjs.map
