// Lógica para Navegação Suave e Destaque de Seção Ativa
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#side-nav a');
    const sections = document.querySelectorAll('section[id]');

    // 1. Scroll Suave ao clicar nos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'center' // Importante para o layout horizontal
                });
            }
        });
    });

    // 2. Destacar o link da navegação conforme o scroll do container
    const observerOptions = {
        root: document.getElementById('grade-container'),
        threshold: 0.5 // Ativa quando 50% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove classe ativa de todos
                navLinks.forEach(link => link.classList.remove('active-nav'));
                
                // Adiciona ao link correspondente
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`#side-nav a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active-nav');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

