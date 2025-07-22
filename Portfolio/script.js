document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project One', description: 'A cool project about web development.' },
        { name: 'Project Two', description: 'Another awesome project using JavaScript.' },
        { name: 'Project Three', description: 'A creative project with HTML and CSS.' }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectsList.appendChild(li);
    });
}); 