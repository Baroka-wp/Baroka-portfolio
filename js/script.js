const toolbar = document.querySelector('.toolbar');
const subContainer = document.querySelector('.sub-container');
const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.nav-bar-desk-version ul a');
const projectbutton = document.querySelectorAll('.projet-button');
const modal = document.querySelector('.popup-container')
const popupClosingIcone = document.querySelector('.popup-header i')

toolbar.addEventListener('click', () => {
  toolbar.classList.toggle('active');
  subContainer.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  toolbar.classList.remove('active');
  subContainer.classList.remove('active');
}));

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // eslint-disable-next-line no-restricted-globals
    if (pageYOffset < 800) {
      currentSection = 'hello';
    // eslint-disable-next-line no-restricted-globals
    } else if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  navA.forEach((a) => {
    a.classList.remove('active');
    if (a.classList.contains(currentSection)) {
      document.querySelector('.hello').classList.remove('active');
      a.classList.add('active');
    }
  });
});

projectbutton.forEach((button) => {
  button.addEventListener('click', ()=> {
      modal.classList.add('active');
      document.querySelector('.main').classList.add('active');
  });
});

popupClosingIcone.addEventListener('click', ()=> {
  modal.classList.remove('active');
  document.querySelector('.main').classList.remove('active')
})
