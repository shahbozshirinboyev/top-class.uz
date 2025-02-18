import { useState, useEffect } from "react";

function MainLayouts() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
    <label className="swap swap-rotate fixed left-0 top-40 border px-2 py-1">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" checked={theme === "light"} onChange={toggleTheme} />

        {/* sun icon */}
        <i className="swap-off text-3xl fill-current bi bi-brightness-high"></i>

        {/* moon icon */}
        <i className="swap-on text-3xl fill-current bi bi-moon"></i>
      </label>


      <div>MainLayouts</div>
    </>
  )
}

export default MainLayouts