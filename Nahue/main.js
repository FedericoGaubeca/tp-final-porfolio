
const projects = [
    {
        title: "Carcasa para molinete",
        description: "es una diseño de una carcasa funcional para un molinete de seguridad disñado e impreso en 3d.",
        image: "images/proyecto1.jpg",
        tags: ["FUSION 360"]
    },
    {
        title: "Pagina web",
        description: "Diseño web de una pagina utilizada para proyecto de seguridad. ",
        image: "images/proyecto2.jpg",
        tags: ["FIGMA"]
    },
    {
        title: "base para auto rc",
        description: "Diseño de base para auto rc,donde esta adaptada para los componentes e instalar la debida carcasa.",
        image: "images/proyecto3.jpg",
        tags: ["FUSION 360"]
    }
];

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

function handleSubmit(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    e.target.reset();
}

renderProjects();