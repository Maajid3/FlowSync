import { useEffect, useState } from "react";
import Context from "./Context";

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
}
