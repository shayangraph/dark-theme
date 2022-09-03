import React, { useContext } from "react";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on context
const StyleTag = () => {
  const themeMode = THEME_TYPE.LIGHT;

  return <style>{Styles(themeMode)}</style>;
};

function App() {
  return (
    <ThemeProvider>
      <StyleTag />
      <NameBox />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
