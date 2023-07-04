import { useState, useEffect } from "react";

const useTheme = () => {
  const [htmlDoc, setHtmlDoc] = useState(document.documentElement);
  const [useDark, setUseDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  //
  const handleThemeSelectChange = () => {
    htmlDoc.classList.toggle("light");
    htmlDoc.classList.toggle("dark");
    if (htmlDoc.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    }
    if (htmlDoc.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    }
  };
  // Handles change based on users preference
  const handleThemeChange = (isDarkMode) => {
    if (isDarkMode) {
      htmlDoc.classList.add("dark");
      htmlDoc.classList.remove("light");
    }
    if (!isDarkMode) {
      htmlDoc.classList.add("light");
      htmlDoc.classList.remove("dark");
    }
  };
  // On inital load, check if in local storage or set by preference
  const checkIfThemeStored = () => {
    htmlDoc.className = "light";
    if (localStorage.getItem("theme")) {
      const theme = localStorage.getItem("theme");
      htmlDoc.className = theme;
    }
    if (!localStorage.getItem("theme")) {
      // handles change on inital preference
      handleThemeChange(useDark);
    }
  };
  //
  useEffect(() => {
    checkIfThemeStored();
  }, []);
  //
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    //
    const handleChange = (e) => {
      setUseDark(e.matches);
    };
    //
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  //
  return {
    htmlDoc,
    handleThemeSelectChange
  };
};

export default useTheme;
