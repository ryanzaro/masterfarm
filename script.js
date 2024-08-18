// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untung menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik untuk Chat WhatsApp
function openWhatsAppChat() {
  var whatsappUrl = "https://wa.me/+6285262599610";
  window.open(whatsappUrl, "_blank");
}

// Galeri

const galeriItems = document.querySelectorAll(".galeri-item");

galeriItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("active");
  });
});
