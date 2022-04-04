const toolbar = document.querySelector('.toolbar')
const subContainer = document.querySelector('.sub-container')

toolbar.addEventListener("click", () => {
  toolbar.classList.toggle("active");
  subContainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
      toolbar.classList.remove("active");
      subContainer.classList.remove("active");
  }));
