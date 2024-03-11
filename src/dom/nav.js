export default function displayProjects(projects) {
  const navBar = document.querySelector('nav');

  const projectList = document.createElement('ul');
  projectList.classList.add('project-list');

  projects.forEach((project, index) => {
    const projectItem = document.createElement('button');
    projectItem.classList.add('project-btn');

    const projectInitial = document.createElement('p');
    projectInitial.textContent = projects[index].getName().charAt(0);
    projectInitial.style.color = projects[index].getColor();
    projectItem.appendChild(projectInitial);
    
    projectList.appendChild(projectItem);
  });

  navBar.appendChild(projectList);
}