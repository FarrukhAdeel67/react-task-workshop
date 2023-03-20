import Header from "./header";
import ProductListing from "./productListing";
import HeroHeader from "./heroHeader";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
export const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = ()=>{
      setTheme((currentTheme)=> currentTheme==="light"?"dark": "light");
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Header />
        <HeroHeader />
        <ProductListing />
      </div>
    </ThemeContext.Provider>

  );
};
