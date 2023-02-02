const projectsContainer = document.querySelector(".container");

const projects = [
  {
    projectLink: "https://mohieb-instagram.netlify.app/",
    projectSrc: "https://github.com/dev-mohieb/instagram-clone",
    projectName: "Instagram Clone",
    projectImg: "images/oldagram.png",
  },
  {
    projectLink: "https://mohieb-splitter.netlify.app/",
    projectSrc: "https://github.com/dev-mohieb/tip-splitter",
    projectName: "Tip Splitter",
    projectImg: "images/tip-splitter.png",
  },
  {
    projectLink: "https://mohieb-rps.netlify.app/",
    projectSrc: "https://github.com/dev-mohieb/Rock-Paper-Scissors",
    projectName: "Rock Paper Scissors",
    projectImg: "images/rock-paper-scissors.png",
  },
];

function renderProjects(data) {
  for (let i = 0; i < data.length; i++) {
    projectsContainer.innerHTML += `
      <article class="project">
      <img class='image' src="${data[i].projectImg}" alt="${data[i].projectName}">
        <p class="caption">
          ${data[i].projectName}
        </p>
        <span class="git-live">
          <a href="${data[i].projectSrc}" target="_blank" rel="noopener">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="${data[i].projectLink}" target="_blank" rel="noopener">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </a>
        </span>
      </article>`;
  }
}

renderProjects(projects);
const navBtns = document.querySelector('.nav-btns');

function toggle() {
    if (navBtns.style.display === 'none') {
      navBtns.style.cssText = `display: flex;
                               opacity: 100;`;
  } else if (navBtns.style.display = 'flex') {
      navBtns.style.cssText = `display: none;
                               opacity: 0;`;
  }
};
