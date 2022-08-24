const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const openFooter = document.getElementById("footer-open");
const closeFooter = document.getElementById("footer-close");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

window.onresize = () => {
  if (window.innerWidth > 768 && window.innerWidth < 992) {
    location.reload();
  }
};

openBtn.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    openFooter.style.display = "none";
    closeFooter.style.display = "flex";
    document.querySelector("section").style.paddingBottom = "20px";
  } else {
    modal.style.display = "block";
    closeModal.style.display = "flex";
    openBtn.style.display = "none";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  closeModal.style.display = "none";
  openBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    openFooter.style.display = "flex";
    closeFooter.style.display = "none";
    document.querySelector("section").style.paddingBottom = "32px";
  }
});
