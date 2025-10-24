// start mobile navlink -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("div[id]");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Scroll-based activation
  function activateMobileLink() {
    let scrollY = window.scrollY + 150;
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    mobileLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);

      // Reset
      link.classList.remove("active");

      // Activate when matching section is in view
      if (href === currentId) {
        link.classList.add("active");
      }

      // Home active at top
      if (window.scrollY < 200 && link.getAttribute("href") === "#") {
        link.classList.add("active");
      }
    });
  }

  // Smooth scroll and auto-close on click
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // adjust for fixed navbar height
          behavior: "smooth",
        });
      }

      // Close mobile menu
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.add("hidden");
    });
  });

  // Run on scroll and at start
  window.addEventListener("scroll", activateMobileLink);
  activateMobileLink();
});
// end mobile navlink -----------------------------------------------------------

// start website navlink -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".xl\\:flex a");

  function activateLink() {
    let scrollY = window.scrollY + 150; // adjust offset if needed
    let currentId = "";

    // find which section is in view
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    // loop through links
    navLinks.forEach((link) => {
      const underline = link.querySelector("span span");
      const href = link.getAttribute("href").substring(1);

      // reset
      link.classList.remove("text-brand-blue");
      link.classList.add("text-white");
      underline.classList.remove("w-full");

      // activate
      if (href === currentId) {
        link.classList.add("text-brand-blue");
        link.classList.remove("text-white");
        underline.classList.add("w-full");
      }

      // home active at top
      if (window.scrollY < 200 && link.getAttribute("href") === "#") {
        link.classList.add("text-brand-blue");
        link.classList.remove("text-white");
        underline.classList.add("w-full");
      }
    });
  }

  window.addEventListener("scroll", activateLink);
  activateLink(); // run once at start
});
// end website navlink -----------------------------------------------------------

// start Toggle mobile menu -----------------------------------------------------------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// end Toggle mobile menu -----------------------------------------------------------

// start scroll down activation bg black -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const transparentBgTextColor = "text-white";
  const scrollThreshold = 50;
  const xlBreakpoint = window.matchMedia("(min-width: 1280px)");

  function toggleNavbarBackground() {
    if (xlBreakpoint.matches) {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add("bg-black");
        navbar.classList.remove(transparentBgTextColor);
      } else {
        navbar.classList.remove("bg-black");
        navbar.classList.add(transparentBgTextColor);
      }
    } else {
      navbar.classList.add("bg-black");
      navbar.classList.remove(transparentBgTextColor);
    }
  }

  xlBreakpoint.addEventListener("change", toggleNavbarBackground);
  window.addEventListener("scroll", toggleNavbarBackground);
  toggleNavbarBackground();
});
// end scroll down activation bg black -----------------------------------------------------------

// Start Carousel -----------------------------------------------------------
$(document).ready(function () {
  if ($(".owl-0").length > 0) {
    var owl0 = $(".owl-0").owlCarousel({
      center: true,
      items: 3,
      loop: true,
      stagePadding: 100,
      margin: 20,
      smartSpeed: 1000,
      autoplay: false,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 50,
        },
        600: {
          items: 3,
          stagePadding: 80,
        },
        1200: {
          items: 3,
          stagePadding: 150,
        },
      },
    });

    // ✅ Custom navigation
    $(".bg-left-owl0").click(function () {
      owl0.trigger("prev.owl.carousel", [1000]);
    });

    $(".bg-right-owl0").click(function () {
      owl0.trigger("next.owl.carousel", [1000]);
    });

    // ✅ Animate center item and border color
    owl0.on("changed.owl.carousel", function (event) {
      $(".owl-item .item-content-wrap").removeClass("active-center");
      var currentIndex = event.item.index;
      $(".owl-item")
        .eq(currentIndex)
        .find(".item-content-wrap")
        .addClass("active-center");
    });

    // ✅ Trigger once on load
    $(".owl-item.center .item-content-wrap").addClass("active-center");
  }

  // Second Owl Carousel (owl-1)
  if ($(".owl-1").length > 0) {
    var owl1 = $(".owl-1").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: false,
      autoplayTimeout: 4000,
      nav: false,
      dots: false,
      pauseOnHover: false,
      responsive: {
        423: {
          margin: 20,
          items: 2,
        },
        900: {
          margin: 20,
          stagePadding: 0,
          items: 3,
        },
        1200: {
          margin: 20,
          stagePadding: 0,
          items: 4,
        },
      },
    });

    // Custom navigation buttons for owl-3
    $(".bg-left-owl1").click(function () {
      owl1.trigger("prev.owl.carousel", [1000]);
    });

    $(".bg-right-owl1").click(function () {
      owl1.trigger("next.owl.carousel", [1000]);
    });
  }

  // First Owl Carousel (owl-2)
  if ($(".owl-2").length > 0) {
    var owl2 = $(".owl-2").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: false,
      nav: false, // Ensure navigation is disabled
      dots: false,
      pauseOnHover: false,
      responsive: {
        850: {
          margin: 20,
          nav: false,
          items: 1,
        }, // Ensure navigation is disabled for responsive
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: false,
          items: 1,
        },
        1280: {
          margin: 20,
          stagePadding: 0,
          nav: false,
          items: 2,
        },
      },
    });

    // Custom navigation buttons for owl-2
    $(".bg-left-half123").click(function () {
      owl2.trigger("prev.owl.carousel", [1000]);
    });

    $(".bg-right-half").click(function () {
      owl2.trigger("next.owl.carousel", [1000]);
    });
  }

  // Second Owl Carousel (owl-3)
  if ($(".owl-3").length > 0) {
    var owl3 = $(".owl-3").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: false,
      autoplayTimeout: 4000,
      nav: false,
      dots: false,
      pauseOnHover: false,
      responsive: {
        423: {
          margin: 20,
          items: 2,
        },
        900: {
          margin: 20,
          stagePadding: 0,
          items: 3,
        },
        1200: {
          margin: 20,
          stagePadding: 0,
          items: 5,
        },
      },
    });

    // Custom navigation buttons for owl-3
    $(".bg-left-half-1").click(function () {
      owl3.trigger("prev.owl.carousel", [1000]);
    });

    $(".bg-right-half-1").click(function () {
      owl3.trigger("next.owl.carousel", [1000]);
    });
  }
});
// End Carousel -----------------------------------------------------------

// Start filtering -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const filterNav = document.getElementById("filter-nav");
  const serviceItems = document.querySelectorAll(".service-item");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function filterServices(category) {
    let delay = 0;
    const transitionDuration = 500;

    serviceItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");

      if (itemCategory === category) {
        setTimeout(() => {
          item.classList.remove("hidden-item");
          setTimeout(() => {}, transitionDuration);
        }, delay);
      } else {
        item.classList.add("hidden-item");
        setTimeout(() => {}, transitionDuration);
      }
    });

    // Update active button state
    filterButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-filter") === category;
      btn.classList.toggle("text-brand-blue", isActive);
      btn.classList.toggle("border-brand-blue", isActive);
      btn.classList.toggle("border-transparent", !isActive);
    });
  }

  // Existing navbar filter buttons
  filterNav.addEventListener("click", (event) => {
    const target = event.target.closest(".filter-btn");
    if (target) {
      const category = target.getAttribute("data-filter");
      filterServices(category);
    }
  });

  // NEW: Footer links that also trigger filter
  const footerLinks = document.querySelectorAll("a[data-filter]");
  footerLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // stop jump if not desired
      const category = link.getAttribute("data-filter");
      filterServices(category);

      // Optional: smooth scroll to #services
      const targetSection = document.querySelector("#services");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Initial load
  filterServices("development");
});
// End filtering -----------------------------------------------------------
