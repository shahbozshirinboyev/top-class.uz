import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [logo, setLogo] = useState(
    localStorage.getItem("theme") === "light"
      ? "/img/logo-b.png"
      : "/img/logo-w.png"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setLogo(
      localStorage.getItem("theme") === "light"
        ? "/img/logo-b.png"
        : "/img/logo-w.png"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <section className="shadow-sm sticky top-0 backdrop-blur-md bg-white/30">
      <div className="flex justify-between items-center container pt-1">
        <div className="flex gap-2 items-center">
          <button className="btn bg-transparent border-0 hover:bg-transparent shadow-none">
            <img src={logo} alt="Logo" className="w-32" />
          </button>

          <button
            className="btn btn-sm"
            onClick={() => document.getElementById("search__modal").showModal()}
          >
            <i className="bi bi-search"></i>
            <span className="hidden md:block">Search anything...</span>
          </button>

          <dialog
            id="search__modal"
            className="modal backdrop-blur-sm bg-white/30"
          >
            <div className="modal-box p-0 absolute top-24 rounded-md">
              <>
                <form action="">
                  <label className="input flex items-center gap-2 border-0">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Find anything..."
                    />
                    <i className="bi bi-search opacity-70"></i>
                  </label>
                </form>
              </>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="flex gap-2 items-center">
          <label className="swap swap-rotate btn btn-sm">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <i className="swap-off fill-current bi bi-brightness-high-fill"></i>
            <i className="swap-on fill-current bi bi-moon-stars-fill"></i>
          </label>

          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm">
              En <i className="bi bi-caret-down-fill"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow mt-1 w-32"
            >
              <li>
                <div>
                  <img
                    src="/img/language_icons/en.png"
                    alt="en__logo"
                    className="w-5 block"
                  />
                  <span>English</span>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/img/language_icons/ru.png"
                    alt="ru__logo"
                    className="w-5 block"
                  />
                  <span>Russian</span>
                </div>
              </li>
            </ul>
          </div>

          <button className="btn btn-sm">Log in</button>
        </div>
      </div>
      <div className="flex justify-start items-center container gap-2 py-2">
        <button className="btn btn-sm">Home</button>
        <button className="btn btn-sm">Game</button>
        <button className="btn btn-sm">Graphic</button>
        <button className="btn btn-sm">Engine</button>
        <button className="btn btn-sm">Portfolio</button>
        <button className="btn btn-sm">Find Jobs</button>
        <button className="btn btn-sm">Customer</button>
      </div>
    </section>
  );
}

export default Navbar;
