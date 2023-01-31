const projectsContainer = document.querySelector('.container')

     const projects = [
        {
            projetLink: 'https://mohieb-instagram.netlify.app/',
            projectSrc: 'https://github.com/dev-mohieb/instagram-clone',
            projectName: 'Instagram Clone',
            projectImg: 'images/oldagram.png'
        },
        {
            projetLink: 'https://mohieb-splitter.netlify.app/',
            projectSrc: 'https://github.com/dev-mohieb/tip-splitter',
            projectName: 'Tip Splitter',
            projectImg: 'images/tip-splitter.png'
        },
        {
            projetLink: 'https://mohieb-rps.netlify.app/',
            projectSrc: 'https://github.com/dev-mohieb/Rock-Paper-Scissors',
            projectName: 'Rock Paper Scissors',
            projectImg: 'images/rock-paper-scissors.png'
        }
    ]


function renderProjects(data) {
    for (let i = 0; i < data.length; i++) {
        projectsContainer.innerHTML += `
        <article class="project">
          <figure>
            <a target="_blank" href="${data[i].projectLink}"
              ><img src="${data[i].projectImg}" alt="${data[i].projectName}"
            /></a>
            <figcaption class="shadow caption">
              ${data[i].projectName}
              <span class="git-live">
                <a href="${data[i].projectSrc}" target="_blank" rel="noopener">Git</a>
                <a href="${data[i].projectLink}" target="_blank" rel="noopener">Live</a>
              </span>
              
            </figcaption>
          </figure>
        </article>`
    }
}

renderProjects(projects);