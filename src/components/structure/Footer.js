import React from "react";
import getTheme from "../../themeUtil";

const theme = getTheme();
const setTheme = (theme) => {
  localStorage.setItem("myTheme", theme);
  alert("Theme update. Please relaod");
  window.location.reload();
};

function Footer() {
  return (
    <footer className={`footer ${theme.backgroundClass}`}>
      <div className={`content has-text-centered ${theme.text1}`}>
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/khotharish1207" className={theme.text1}>
            <strong>Harish Shridhar Khot</strong>
          </a>
        </p>
      </div>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>Chnage Theme</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
            <div
              onClick={() => setTheme("theme1")}
              class="dropdown-item pointer"
            >
              Theme 1
            </div>
            <div
              onClick={() => setTheme("theme2")}
              class="dropdown-item pointer"
            >
              Theme 2
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
