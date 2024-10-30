/* ---------- TOGGLE BUTTON ---------- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/* ---------- DARK LIGHT THEME ---------- */
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

/*---------- TABS ----------*/
let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
const all = document.querySelectorAll(".work_card");
const uiuxs = document.querySelectorAll(".uiux");
const apps = document.querySelectorAll(".app");
const branding = document.querySelectorAll(".branding");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left =
  tabs[0].getBoundingClientRect().left -
  tabs[0].parentElement.getBoundingClientRect().left +
  "px";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((t) => t.classList.remove("text-whiteColor"));
    tab.classList.add("text-whiteColor");

    /*------------------------ */
    const all_item = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (all_item == "uiux") {
      uiuxs.forEach((item) => {
        item.style.display = "block";
      });
    } else if (all_item == "branding") {
      branding.forEach((item) => {
        item.style.display = "block";
      });
    } else if (all_item == "app") {
      apps.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/*------------------------ */
const scrollHeader = () => {
  const navbar = document.getElementById("navbar");
  const aTag = document.querySelectorAll("nav ul li a");
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const logo = document.getElementById("logo");
  const whitelogo = document.getElementById("white-logo");

  if (window.scrollY >= 200) {
    navbar.classList.add("bg-primaryColor");
    aTag.forEach((item) => {
      item.classList.add("text-whiteColor");
    });

    themeToggle.classList.add("text-whiteColor");
    hamburger.classList.add("text-whiteColor");
  } else {
    navbar.classList.remove("bg-primaryColor");
    aTag.forEach((item) => {
      item.classList.remove("text-whiteColor");
    });
    themeToggle.classList.remove("text-whiteColor");
    hamburger.classList.remove("text-whiteColor");
  }
};

window.addEventListener("scroll", scrollHeader);

/*------------------------ */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

/*---------------------------- */
const activelink = () => {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll("nav-link");

  let current = "hero";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activelink);

/* ----------- scroll reveal  ----------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});
sr.reveal(".hero_image");
sr.reveal(".hero_content", { origin: "bottom" });
sr.reveal(".hero_footer", { origin: "bottom", delay: 1200 });

sr.reveal(".service_top", { origin: "bottom" });
sr.reveal(".service_items", { origin: "bottom", interval: 300 });

sr.reveal(".recent_work_top", { origin: "bottom" });
sr.reveal(".recent_work_tabs", { origin: "bottom", delay: 800 });
sr.reveal(".work_card", { origin: "bottom", delay: 1200 });

sr.reveal(".exp_top", { origin: "top" });
sr.reveal(".exp_card", { origin: "left", interval: 300 });

sr.reveal(".edu_top", { origin: "top" });
sr.reveal(".edu_card", { origin: "right", interval: 300 });

sr.reveal(".skills_top", { origin: "bottom" });
sr.reveal(".skills_card", { origin: "bottom", interval: 300 });

sr.reveal(".blog_top", { origin: "top" });
sr.reveal(".blog_card", { origin: "top", interval: 300 });

sr.reveal(".contact_from", { origin: "top" });
sr.reveal(".contact_item", { origin: "top", interval: 300 });
