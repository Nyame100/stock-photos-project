import React, { useState, useEffect } from "react";
import "./themetoggle.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <button className="btn" onClick={handleClick}>
            {theme === "light-theme" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
        </div>
      </nav>
    </main>
  );
};

export default ThemeToggle;
