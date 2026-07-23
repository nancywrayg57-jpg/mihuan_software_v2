const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");
const support = document.getElementById("floating-support");
const supportToggle = support?.querySelector(".support-toggle");
const supportClose = support?.querySelector(".support-close");

function setMobileNav(open) {
  mobileNav?.classList.toggle("is-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
}

function setSupport(open) {
  support?.classList.remove("is-dismissed");
  support?.classList.toggle("is-open", open);
  supportToggle?.setAttribute("aria-expanded", String(open));
}

menuButton?.addEventListener("click", () => {
  setMobileNav(!mobileNav?.classList.contains("is-open"));
});

supportToggle?.addEventListener("click", () => {
  setSupport(!support?.classList.contains("is-open"));
});

supportClose?.addEventListener("click", () => {
  support?.classList.remove("is-open");
  support?.classList.add("is-dismissed");
  supportToggle?.setAttribute("aria-expanded", "false");
  supportToggle?.focus();
});

support?.addEventListener("mouseleave", () => {
  support.classList.remove("is-dismissed");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setMobileNav(false);
  setSupport(false);
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  if (!target.closest(".site-header") && !target.closest(".mobile-nav")) {
    setMobileNav(false);
  }

  if (!target.closest(".floating-support")) {
    setSupport(false);
  }
});

for (const link of document.querySelectorAll(".language-switcher a")) {
  link.addEventListener("click", () => {
    try {
      window.localStorage.setItem("hb-lang", link.getAttribute("lang") || "");
    } catch (error) {}
  });
}

// Breadcrumb usage for S2 pages:
// const node = createBreadcrumb([{ label: "首页", href: "./index.html" }, { label: "产品介绍" }]);
// Home pages intentionally do not render this component.
function createBreadcrumb(items) {
  const nav = document.createElement("nav");
  nav.className = "breadcrumb";
  nav.setAttribute("aria-label", "Breadcrumb");

  const container = document.createElement("div");
  container.className = "container";

  items.forEach((item, index) => {
    if (index > 0) {
      const separator = document.createElement("span");
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "/";
      container.append(separator);
    }

    if (item.href) {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      container.append(link);
      return;
    }

    const current = document.createElement("span");
    current.setAttribute("aria-current", "page");
    current.textContent = item.label;
    container.append(current);
  });

  nav.append(container);
  return nav;
}

window.HoneyBadgerShell = {
  createBreadcrumb
};
