// Internationalization
document.addEventListener('DOMContentLoaded', () => {
    // Language translations
    const translations = {
        'pt-BR': {
            'nav.home': 'Início',
            'nav.about': 'Sobre',
            'nav.skills': 'Habilidades',
            'nav.projects': 'Projetos',
            'nav.testimonials': 'Depoimentos',
            'nav.contact': 'Contato',
            
            'hero.greeting': 'Olá, eu sou',
            'hero.title': 'Desenvolvedora Full-Stack',
            'hero.description': 'Transformando ideias em experiências digitais interativas e acessíveis com código limpo e design responsivo.',
            'hero.cta.projects': 'Ver Projetos',
            'hero.cta.contact': 'Entrar em Contato',
            
            'about.title': 'Sobre Mim',
            'about.p1': 'Sou uma desenvolvedora full-stack apaixonada por criar soluções digitais elegantes e funcionais. Com experiência em desenvolvimento front-end e back-end, estou comprometida em construir aplicações web que não apenas atendam às necessidades dos usuários, mas também proporcionem experiências memoráveis.',
            'about.p2': 'Minha jornada no mundo da programação começou há 5 anos, e desde então venho aprimorando minhas habilidades e conhecimentos para acompanhar as últimas tendências e tecnologias do mercado.',
            'about.p3': 'Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos open-source e compartilhar conhecimentos com a comunidade de desenvolvedores.',
            'about.education': 'Educação',
            'about.education.details': 'Bacharelado em Ciência da Computação - Universidade Paulista',
            'about.experience': 'Experiência',
            'about.experience.details': '2+ anos em desenvolvimento web, com projetos para empresas nacionais e internacionais',
            
            'skills.title': 'Habilidades',
            'skills.frontend': 'Front-end',
            'skills.backend': 'Back-end',
            'skills.tools': 'Ferramentas',
            
            'projects.title': 'Projetos',
            'projects.filter.all': 'Todos',
            'projects.filter.web': 'Web',
            'projects.filter.mobile': 'Mobile',
            'projects.filter.design': 'Design',
            'projects.viewMore': 'Ver Mais Projetos',
            
            'testimonials.title': 'Depoimentos',
            
            'contact.title': 'Contato',
            'contact.getInTouch': 'Vamos conversar',
            'contact.description': 'Estou sempre aberta a discutir novos projetos, oportunidades criativas ou possibilidades de parceria.',
            'contact.form.name': 'Nome',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Assunto',
            'contact.form.message': 'Mensagem',
            'contact.form.submit': 'Enviar Mensagem',
            
            'footer.description': 'Desenvolvedora Full-Stack focada em criar experiências digitais excepcionais.',
            'footer.navigation': 'Navegação',
            'footer.social': 'Social',
            'footer.rights': 'Todos os direitos reservados.'
        },
        'en': {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.testimonials': 'Testimonials',
            'nav.contact': 'Contact',
            
            'hero.greeting': 'Hello, I am',
            'hero.title': 'Full-Stack Developer',
            'hero.description': 'Transforming ideas into interactive and accessible digital experiences with clean code and responsive design.',
            'hero.cta.projects': 'View Projects',
            'hero.cta.contact': 'Get in Touch',
            
            'about.title': 'About Me',
            'about.p1': 'I am a full-stack developer passionate about creating elegant and functional digital solutions. With experience in both front-end and back-end development, I am committed to building web applications that not only meet user needs but also provide memorable experiences.',
            'about.p2': 'My journey in the programming world began 5 years ago, and since then I have been improving my skills and knowledge to keep up with the latest trends and technologies in the market.',
            'about.p3': 'When I\'m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.',
            'about.education': 'Education',
            'about.education.details': 'Bachelor\'s in Computer Science - Paulista University',
            'about.experience': 'Experience',
            'about.experience.details': '2+ years in web development, with projects for national and international companies',
            
            'skills.title': 'Skills',
            'skills.frontend': 'Front-end',
            'skills.backend': 'Back-end',
            'skills.tools': 'Tools',
            
            'projects.title': 'Projects',
            'projects.filter.all': 'All',
            'projects.filter.web': 'Web',
            'projects.filter.mobile': 'Mobile',
            'projects.filter.design': 'Design',
            'projects.viewMore': 'View More Projects',
            
            'testimonials.title': 'Testimonials',
            
            'contact.title': 'Contact',
            'contact.getInTouch': 'Let\'s talk',
            'contact.description': 'I\'m always open to discussing new projects, creative opportunities, or partnership possibilities.',
            'contact.form.name': 'Name',
            'contact.form.email': 'Email',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Send Message',
            
            'footer.description': 'Full-Stack Developer focused on creating exceptional digital experiences.',
            'footer.navigation': 'Navigation',
            'footer.social': 'Social',
            'footer.rights': 'All rights reserved.'
        },
        'es': {
            'nav.home': 'Inicio',
            'nav.about': 'Sobre',
            'nav.skills': 'Habilidades',
            'nav.projects': 'Proyectos',
            'nav.testimonials': 'Testimonios',
            'nav.contact': 'Contacto',
            
            'hero.greeting': 'Hola, soy',
            'hero.title': 'Desarrolladora Full-Stack',
            'hero.description': 'Transformando ideas en experiencias digitales interactivas y accesibles con código limpio y diseño responsivo.',
            'hero.cta.projects': 'Ver Proyectos',
            'hero.cta.contact': 'Contactar',
            
            'about.title': 'Sobre Mí',
            'about.p1': 'Soy una desarrolladora full-stack apasionada por crear soluciones digitales elegantes y funcionales. Con experiencia en desarrollo front-end y back-end, estoy comprometida a construir aplicaciones web que no solo satisfagan las necesidades de los usuarios, sino que también proporcionen experiencias memorables.',
            'about.p2': 'Mi viaje en el mundo de la programación comenzó hace 5 años, y desde entonces he ido mejorando mis habilidades y conocimientos para mantenerme al día con las últimas tendencias y tecnologías del mercado.',
            'about.p3': 'Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimientos con la comunidad de desarrolladores.',
            'about.education': 'Educación',
            'about.education.details': 'Licenciatura en Ciencias de la Computación - Universidad Paulista',
            'about.experience': 'Experiencia',
            'about.experience.details': '2+ años en desarrollo web, con proyectos para empresas nacionales e internacionales',
            
            'skills.title': 'Habilidades',
            'skills.frontend': 'Front-end',
            'skills.backend': 'Back-end',
            'skills.tools': 'Herramientas',
            
            'projects.title': 'Proyectos',
            'projects.filter.all': 'Todos',
            'projects.filter.web': 'Web',
            'projects.filter.mobile': 'Móvil',
            'projects.filter.design': 'Diseño',
            'projects.viewMore': 'Ver Más Proyectos',
            
            'testimonials.title': 'Testimonios',
            
            'contact.title': 'Contacto',
            'contact.getInTouch': 'Hablemos',
            'contact.description': 'Siempre estoy abierta a discutir nuevos proyectos, oportunidades creativas o posibilidades de colaboración.',
            'contact.form.name': 'Nombre',
            'contact.form.email': 'Correo',
            'contact.form.subject': 'Asunto',
            'contact.form.message': 'Mensaje',
            'contact.form.submit': 'Enviar Mensaje',
            
            'footer.description': 'Desarrolladora Full-Stack enfocada en crear experiencias digitales excepcionales.',
            'footer.navigation': 'Navegación',
            'footer.social': 'Social',
            'footer.rights': 'Todos los derechos reservados.'
        }
    };
    
    // Get language buttons and elements to translate
    const languageButtons = document.querySelectorAll('.language-selector button');
    const i18nElements = document.querySelectorAll('[data-i18n]');
    
    // Get current language from local storage or default to Portuguese
    let currentLang = localStorage.getItem('language') || 'pt-BR';
    
    // Translate the page based on the selected language
    const translatePage = (lang) => {
        // Update active language button
        languageButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Translate each element with data-i18n attribute
        i18nElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Save the language preference
        localStorage.setItem('language', lang);
        currentLang = lang;
    };
    
    // Add click event listeners to language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    
    // Initial translation
    translatePage(currentLang);
});