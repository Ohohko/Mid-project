import React, { useState ,useEffect} from "react";


function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggler;
