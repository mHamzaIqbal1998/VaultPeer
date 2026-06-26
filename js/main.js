(function () {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".nav-mobile");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach(function (el) {
        el.classList.remove("is-open");
        el.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
