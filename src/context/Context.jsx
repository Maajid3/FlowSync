import { createContext } from "react";
const Context = createContext({
  theme: "dark",
  setTheme: () => {},
});
export default Context;
