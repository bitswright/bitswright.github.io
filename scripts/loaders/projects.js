async function loadProjects() {
    const container = document.getElementById('projects-container');
    
    try {
        const response = await fetch('https://github.com/bitswright/bitswright.github.io/assets/projects.json');
        const data = await response.json();

        if(data.projects.length === 0) {
            const errorElement = document.createElement('p');
            errorElement.textContent = 'No projects found';
            container.appendChild(errorElement);
            return;
        }
        else {
            data.projects.forEach(project => {
                const projectElement = document.createElement('span');
    
                const projectTitleElement = document.createElement('h4');
                
                const a = document.createElement('a');
                a.textContent = project.name;
                a.href = project.link;
                a.target = '_blank';
                a.className = 'project-item';
                projectTitleElement.appendChild(a); 
    
                const projectDescriptionElement = document.createElement('span');
                projectDescriptionElement.className = 'h4-subtext';
                projectDescriptionElement.textContent = project.description;
                projectTitleElement.appendChild(projectDescriptionElement);
    
                projectElement.appendChild(projectTitleElement);
                container.appendChild(projectElement);
            });
        }
    } catch (error) {
        console.error('Failed to load projects:', error);
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No projects found';
        container.appendChild(errorElement);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
