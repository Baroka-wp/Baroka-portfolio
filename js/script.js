const toolbar = document.querySelector('.toolbar');
const subContainer = document.querySelector('.sub-container');
const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.nav-bar-desk-version ul a');
const projectbutton = document.querySelectorAll('.projet-button');
const modal = document.querySelector('.popup-container');
const popupClosingIcone = document.querySelector('.popup-header i');
const angleLeft = document.querySelector('.fa-angle-left');
const h2 = document.querySelector('.popup-container .popup-header h2');
const p = document.querySelector('.popup-container .project-description p');
const img = document.querySelector('.main-project-img');
const seeLiveButton = document.querySelector('.see-live-button');
const sourceCode = document.querySelector('.source-code-button');
const angleRight = document.querySelector('.fa-angle-right');
const projects = {
  project1 : {
    name: "Master Mind",
    mainImage: 'images/project-img-1.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'It is a project that allows to network people who want to learn things',
    live: "#",
    source: "#"
  },
  project2: {
    name: "Africa Samurai",
    mainImage: 'images/project-img-2.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'This project aims to create employment in Africa',
    live: "#",
    source: "#"
  },
  project3: {
    name: "Facebook Clone",
    mainImage: 'images/project-img-3.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'It is a training project that consisted in creating a clone of facebook',
    live: "#",
    source: "#"
  },
  project4: {
    name: "Tinder Clone",
    mainImage: 'images/project-img-4.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'It is a training project that consisted in creating a clone of tinder',
    live: "#",
    source: "#"
  },
  project5: {
    name: "Bishop",
    mainImage: 'images/project-img-5.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'It is a complete project to promote startups in Benin. Allowing them to create a network of synergy with other startups',
    live: "#",
    source: "#"
  },
  project6: {
    name: "Everyleaf",
    mainImage: 'images/project-img-6.png',
    technologies: ["HTML/CSS", "Ruby on Rail", "Javascrip"],
    description: 'It is a complete project in ruby on rails for the management of tasks',
    live: "#",
    source: "#"
  },
}

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

const dynamicContent = (project) => {
  h2.textContent = projects[project].name;
  p.textContent = projects[project].description;
  img.src = projects[project].mainImage;
  seeLiveButton.href = projects[project].live;
  sourceCode.href = projects[project].source;
}

projectbutton.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('active');
    document.querySelector('.main').classList.add('active');
    for(let k of [...Object.keys(projects)]) {
      if(button.classList.contains(k)) {
        dynamicContent(k);
        if( k == "project1") {
          modal.style.marginTop = "600px";
        } else if ( k == "project2") {
          modal.style.marginTop = "1000px";
        } else if ( k == "project3") {
          modal.style.marginTop = "1700px";
        } else if ( k == "project4") {
          modal.style.marginTop = "2200px";
        } else if ( k == "project5") {
          modal.style.marginTop = "2400px";
        } else if ( k == "project6") {
          modal.style.marginTop = "3100px";
        }
        break;
      };
    }
  });
});

let i = 0;
const projectList = [...Object.keys(projects)]
angleRight.addEventListener('click', () => {
  if( i < projectList.length){
    dynamicContent(projectList[i]);
  }else {
    i = 0;
    dynamicContent(projectList[i]);
  }
  i++
});

angleLeft.addEventListener('click', () => {
  if( i < 0 ){
    i = projectList.length - 1;
    dynamicContent(projectList[i]);
  }else {
    dynamicContent(projectList[i]);
  }
  i--;
})


popupClosingIcone.addEventListener('click', () => {
  modal.classList.remove('active');
  document.querySelector('.main').classList.remove('active');
});
