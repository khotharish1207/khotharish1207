import React, { useState } from "react";
import getTheme, { theme as allThemes } from "../../themeUtil";

const theme = getTheme();

const setTheme = (theme) => {
  localStorage.setItem("myTheme", theme);
  alert("Theme update. Please relaod");
  window.location.reload();
};

const getThemeDropdownItems = () => {
  const themes = [];
  for (let i = 1; i <= 6; i++) {
    themes.push(
      <div
        onClick={() => setTheme(`theme${i}`)}
        className={`dropdown-item pointer ${
          allThemes[`theme${i}`].backgroundClass
        }`}
      >
        {`Theme ${i}`}
      </div>
    );
  }
  return themes;
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({});

  const onChangeText = (type) => (e) => {
    let err = { ...error, [type]: false };
    switch (type) {
      case "email":
        const mail = e.target.value;
        err = { ...error, [type]: !validateEmail(mail) };
        setEmail(mail);
        break;
      case "phone":
        const num = e.target.value;
        err = { ...error, [type]: num && num.length < 10 };
        setPhone(num);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "msg":
        setMsg(e.target.value);
        break;
      default:
        break;
    }
    setError(err);
  };

  const sendMsg = (type) => {
    var href =
      "mailto:khot.harish1207@gmail.com?subject=Inquiry From Wetsite&Body=";
    if (type === "whatsapp")
      href = "https://api.whatsapp.com/send?phone=919766626859&text=";

    var emailBody =
      "Hi,\n\n" + msg + "\n\nThanks\n" + name + "\n" + email + "\n" + phone;

    var element = document.createElement("a");
    element.setAttribute("href", href + encodeURIComponent(emailBody));
    element.setAttribute("target", "_blank");

    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  console.log(!email, error.email, !phone, error.phone);

  return (
    <div>
      <footer className={`footer ${theme.backgroundClass}`}>
        <div className="container" id="contact-me">
          <h1 className={`title ${theme.text1} `}>Contact Me</h1>
          <div className="columns ">
            <div
              className={`column ${theme.text1}`}
              style={
                {
                  // background: `url(./images/me.jpg) no-repeat center center`,
                  // backgroundSize: "cover",
                }
              }
            >
              <p className="is-size-4 has-text-white">Harish Shridhar Khot</p>
              <br />
              <p>Email</p>
              <p>
                <a
                  className="is-size-4 has-text-white"
                  href="mailto:Khot.harish1207@gmail.com?subject=Contact Me Mail"
                >
                  khot.harish1207@gmail.com
                </a>
              </p>
              <br />
              <p>Contact </p>
              <p>
                <a className="is-size-4	has-text-white" href="tel:9766626859">
                  9766626859
                </a>
              </p>
            </div>
            <div className="column p-2">
              <div className="field">
                <label className={`label ${theme.text1}`}>Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your good name"
                    onChange={onChangeText("name")}
                  />
                </div>
              </div>

              <div className="field">
                <label className={`label ${theme.text1}`}>Phone</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    onChange={onChangeText("phone")}
                  />
                  {error.phone && (
                    <span className="icon is-small is-right is-danger">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  )}
                </div>
                {error.phone && (
                  <p className="help is-danger">This phone is invalid</p>
                )}
              </div>

              <div className="field">
                <label className={`label ${theme.text1}`}>Email</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={onChangeText("email")}
                  />

                  {error.email && (
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  )}
                </div>
                {error.email && (
                  <p className="help is-danger">This email is invalid</p>
                )}
              </div>

              <div className="field">
                <label className={`label ${theme.text1}`}>Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="I like to hear from you"
                    onChange={onChangeText("msg")}
                  ></textarea>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link"
                    disabled={!email || error.email || !phone || error.phone}
                    onClick={sendMsg}
                  >
                    Send Mail
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-link has-background-success"
                    onClick={() => sendMsg("whatsapp")}
                    disabled={!email || error.email || !phone || error.phone}
                  >
                    What's App Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container">
        <br />
        <br />
        <div class="columns">
          <div class="column">
            <div className="dropdown is-hoverable is-up">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu3"
                >
                  <span>Change Theme</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  {getThemeDropdownItems()}
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div className={`content has-text-centered `}>
              <p>
                Built at <i className="fas fa-moon"></i> by{" "}
                <a href="https://github.com/khotharish1207">
                  <strong>Harish Shridhar Khot</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
