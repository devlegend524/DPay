/*********************/
/* 11) Dark & Light Mode */
/*********************/
try {
  function changeTheme(e) {
    e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
    } else {
      htmlTag.className = "dark";
    }
  }

  const switcher = document.getElementById("theme-mode");
  switcher?.addEventListener("click", changeTheme);

  const chk = document.getElementById("chk");

  chk.addEventListener("change", changeTheme);
} catch (err) {
  console.log("change theme error", err);
}

/*********************/
/* 12) LTR & RTL Mode */
/*********************/
try {
  const htmlTag = document.getElementsByTagName("html")[0];
  function changeLayout(e) {
    e.preventDefault();
    const switcherRtl = document.getElementById("switchRtl");
    if (switcherRtl.innerText === "LTR") {
      htmlTag.dir = "ltr";
    } else {
      htmlTag.dir = "rtl";
    }
  }
  const switcherRtl = document.getElementById("switchRtl");
  switcherRtl?.addEventListener("click", changeLayout);
} catch (err) {}
