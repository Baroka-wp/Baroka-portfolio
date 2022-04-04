const toolbar = document.querySelector('.toolbar');
const subContainer = document.querySelector('.sub-container');
const navDeskVersion = document.querySelector('.nav-bar-desk-version');
const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.nav-bar-desk-version ul a');


toolbar.addEventListener("click", () => {
  toolbar.classList.toggle("active");
  subContainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
      toolbar.classList.remove("active");
      subContainer.classList.remove("active");
  })
);

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset < 800){
      currentSection = "hello";
    }else if(pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    };
  });
  navA.forEach(a => {
    a.classList.remove('active');
    if(a.classList.contains(currentSection)) {
      document.querySelector('.hello').classList.remove('active')
      a.classList.add('active')
    };
  })
});
