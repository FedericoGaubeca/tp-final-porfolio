const projects = [
    {
        id: 1,
        title: "ITMF File Renamer",
        shortDescription: "Aplicacion para Klixar. Diseñada en pyhton diseñada para acelerar procesos de renombrado de archivos.",
        fullDescription: "Una aplicacion de escritorio construida con Python y Tkinter que permite a los usuarios buscar el tipo de archivo en una lista de artefactos, y renombrarlos automaticamente segun las convenciones de la empresa.",
        tags: ["Python", "Tkinter"],
        images: ["Imagen 1", "Imagen 2", "Imagen 3"],
        links: [
            { text: "Código", url: "https://github.com/notengousuario/proyecto" }
        ]
    }
];

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(project.id);
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.fullDescription;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const imagesContainer = document.getElementById('modalImages');
    imagesContainer.innerHTML = project.images.map((img, index) => 
        `<div style="background-color: var(--bg-color); padding: 40px; border-radius: 5px; text-align: center; color: var(--text-secondary);">
            ${img}
        </div>`
    ).join('');
    
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = project.links.map(link => 
        `<a href="${link.url}" target="_blank" class="modal-link">${link.text}</a>`
    ).join('');
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('projectModal').onclick = function(e) {
    if (e.target === this) {
        closeModal();
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

renderProjects();