import imagemProj1 from "../assets/hero-rath.png";
import imagemProj2 from "../assets/hero-adv-mock.png";


export const translations = {
  pt: {
    sidebar: {
      role: "Desenvolvedor Full Stack",
      nav: ["Início", "Sobre", "Experiência", "Projetos", "Habilidades", "Serviços", "Contato"],
      status: "Disponível para Projetos"
    },
    hero: {
      status: "Disponível para novos desafios",
      title: "Ícaro\nCarneiro",
      roles: ["Desenvolvedor Full Stack", "Desenvolvedor Frontend", "Analista de Sistemas", "Engenheiro de Software"],
      intro: "Especialista em criar experiências digitais escaláveis, unindo arquitetura robusta a interfaces refinadas. Transformando ideias complexas em código de alta performance.",
      cta: "Ver Projetos"
    },
    about: {
      subtitle: "Minha Jornada",
      title: "Construindo soluções escaláveis unindo arquitetura robusta a interfaces refinadas.",
      highlightBox: "Tenho um senso de pertencimento em cada projeto com que colaboro. Desenvolvo sistemas com integridade, foco em performance e máxima atenção à experiência final do usuário.",
      commitmentTitle: "O Compromisso",
      commitmentDesc: "Foco total em código limpo, arquitetura modular e zero tolerância para soluções ineficientes. Especializado no ecossistema web para mitigar riscos e otimizar a infraestrutura de sistemas.",
      peopleTitle: "Design & Identidade",
      peopleDesc: "Desenvolvo Landing Pages Premium e Aplicações Multi-page com foco estratégico em agregar valor ao seu negócio. Construo ecossistemas digitais com uma identidade visual altamente coerente para os proprietários e profundamente confortável para a experiência de navegação do cliente.",
      impactTitle: "O Impacto",
      impactDesc: "Mais de 2,5 anos de experiência prática, atuando na evolução de microserviços e APIs escaláveis. Redução comprovada de bugs críticos em produção e foco em gerar valor real de ponta a ponta.",
    },
    experience: {
      profTitle: "Experiência Profissional",
      profSub: "Histórico de atuação no ecossistema web, liderando frentes de alta performance.",
      eduTitle: "Educação & Qualificações",
      eduSub: "Formação contínua focada em engenharia de software e segurança digital.",
      certTitle: "Especializações Ativas",

      jobs: [
        {
          period: "JAN 2025 - JULHO 2026",
          role: "Analista de Software & Desenvolvedor Fullstack",
          company: "GO4Digital",
          desc: "Desenvolvimento e manutenção de aplicativos React e microsserviços com Next.js, TailwindCSS e Shadcn UI em mais de 5 projetos ativos simultaneamente. Criação de APIs escaláveis com NestJS, GraphQL e REST integradas via Prisma e TypeORM. Escrita de testes unitários automatizados mitigando bugs críticos com redução de 17.5% nas falhas em produção. Colaboração ativa em code reviews semanais, reuniões de refinamento ágil e elaboração de documentações técnicas de arquitetura.",
          tags: ["Next.js", "React", "NestJS", "GraphQL", "Prisma", "TypeORM", "TailwindCSS", "Shadcn UI", "Testes Unitários"]
        },
        {
          period: "JAN 2024 - MAIO 2025",
          role: "Analista de Sistemas & Desenvolvedor Frontend (Freelancer)",
          company: "Hi-Tech Gênesis",
          desc: "Levantamento de requisitos e mapeamento de regras de negócio diretamente com stakeholders, convertendo demandas operacionais em escopos de arquitetura técnica. Desenvolvimento Front-end dinâmico utilizando HTML5, CSS3 e JavaScript moderno, com foco em metodologias ágeis e prazos de entrega reduzidos para interfaces responsivas.",
          tags: ["JavaScript", "HTML5", "CSS3", "Análise de Requisitos", "Metodologias Ágeis"]
        },
        {
          period: "JUN 2022 - OUT 2022",
          role: "Desenvolvedor Front-end",
          company: "CODITECH",
          desc: "Desenvolvimento completo da camada visual de 3 websites institucionais focados em estratégias de marketing digital, utilizando HTML5, CSS3, Bootstrap e JavaScript. Criação e concepção de recursos visuais integrados de interface e design para suporte a campanhas digitais.",
          tags: ["Bootstrap", "JavaScript", "HTML5", "CSS3", "UI/UX Design", "Marketing Digital"]
        }
      ],
      education: [
        {
          title: "Pós-Graduando em Engenharia de Software e Cibersegurança",
          institution: "PUC Campinas + PUCPR Digital",
          period: "Março 2026 - Cursando",
          desc: "Especialização focada em arquiteturas escaláveis, governança em nuvem e estratégias avançadas de segurança e proteção de aplicações.",
          badge: "Especialização"
        },
        {
          title: "Graduação em Análise e Desenvolvimento de Sistemas",
          institution: "UNIFEC",
          period: "2020 - Dezembro 2023",
          desc: "Sólida fundamentação acadêmica em algoritmos, estruturas de dados de alta performance e engenharia de requisitos de software.",
          badge: "Graduado"
        }
      ],
      certs: [
        { title: "Arquitetura Multi-Cloud, Migração & Governança de Nuvem", org: "Módulos de Especialização - PUC" },
        { title: "Engenharia de Software de Performance: SPA, SSR e SSG Avançado", org: "Desenvolvimento Autônomo & Portfólio" },
        { title: "Internacionalização Dinâmica (i18n) & Estado Global no React", org: "Mentoria Prática de Engenharia" },
        { title: "Automação de Pipelines CI/CD e Controle de Versão", org: "GitHub Actions & Azure DevOps" }
      ]
    },
    projects: {
      title: "Trabalhos Recentes",
      sub: "Aplicações reais e ecossistemas complexos desenvolvidos com foco em escalabilidade.",
      categories: {
        all: "Todos",
        fullstack: "Full Stack",
        frontend: "Front-end",
        marketing: "Marketing Digital"
      },
      emptyState: {
        title: "Novos Ecossistemas em Construção",
        desc: "Estou realizando refatorações arquiteturais, otimizando performance e desenvolvendo novos projetos complexos para esta categoria. Em breve, soluções completas estarão expostas aqui.",
        badge: "Desenvolvimento Ativo"
      },
      items: [
        {
          id: 1,
          title: "RATH Performance",
          category: ["frontend", "marketing"],
          categoryLabel: "Aplicação Front-end Premium",
          year: "2026",
          image: imagemProj1,
          desc: "Landing Page Premium desenvolvida para um profissional especialista em Nutrição, Educação Física e Fisioterapia. O ecossistema foi estruturado com foco em converter clientes de alta renda através de uma identidade visual sofisticada e coerente com a área da saúde. Oferece uma experiência de navegação confortável, destacando o atendimento personalizado para academias e reabilitação física, além de integrar a Google Maps API para facilitar a localização de atuação do profissional.",
          techs: ["Next.js", "Astro", "Shadcn UI", "TailwindCSS", "TypeScript", "Framer-motion", "Google Maps API", "lucide-react", "react-icons"],
          github: "https://github.com/devzicaro/projeto-arthur",
          demo: "https://devzicaro.github.io/projeto-arthur/"
        },
        {
          id: 2,
          title: "Advocacia Mock Digital",
          category: ["frontend", "marketing"],
          categoryLabel: "Aplicação Front-end Premium",
          year: "2026",
          image: imagemProj2,
          desc: "Plataforma institucional premium desenvolvida para um escritório de advocacia fictício utilizando dados mockados estruturados. O ecossistema foi projetado para transmitir autoridade e segurança jurídica através de uma identidade visual sóbria, refinada e altamente coerente com o segmento corporativo. Focado na experiência confortável do usuário, o projeto apresenta carregamento otimizado de seções e componentes modulares para exibição de áreas de atuação e corpo jurídico.",
          techs: ["Next.js", "Astro", "Shadcn UI", "TailwindCSS", "TypeScript", "Framer-motion", "lucide-react", "react-icons"],
          github: "https://github.com/devzicaro/projeto-adv-mock",
          demo: "https://devzicaro.github.io/projeto-adv-mock/"
        }
      ]
    },
    skills: {
      title: "Habilidades & Competências",
      sub: "O ecossistema técnico e metodologias que utilizo para transformar conceitos em software de alta performance.",
      categories: {
        frontend: "Front-end",
        backend: "Back-end & Dados",
        foundations: "Fundamentos & Qualidade",
        soft: "Soft Skills"
      },
      items: {
        frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Astro", "TailwindCSS", "Shadcn UI", "Recharts", "HTML5", "CSS3", "Bootstrap"],
        backend: ["NestJS", "Node.js", "GraphQL", "APIs REST", "Prisma", "TypeORM"],
        foundations: ["Algoritmos", "Estruturas de Dados", "Testes Unitários", "Git / GitHub", "Azure", "CI/CD"],
        soft: ["Inteligência Emocional", "Trabalho em Equipe", "Adaptabilidade", "Comunicação Assertiva"]
      }
    },
    services: {
      title: "Serviços",
      sub: "Soluções digitais de ponta a ponta, construídas com arquiteturas modernas e alto padrão de desempenho.",
      cta: "Saiba mais",
      items: [
        {
          id: "lp",
          title: "Landing Pages Premium",
          desc: "Páginas de alta conversão totalmente otimizadas para SEO estrutural e performance máxima. Interfaces responsivas focadas em prender a atenção do usuário desde o primeiro frame.",
        },
        {
          id: "mp",
          title: "Aplicações Multi-Page",
          desc: "Sistemas web complexos e portais corporativos escaláveis utilizando Next.js App Router. Roteamento dinâmico otimizado, renderização híbrida (SSR/SSG) e excelente indexação.",
        },
        {
          id: "frontend",
          title: "Desenvolvimento Front-end Premium",
          desc: "Construção de interfaces ricas, modulares e componentizadas utilizando React, TypeScript e TailwindCSS. Otimização da experiência e performance do usuário através do uso estratégico de SPA, SSR e SSG.",
        },
        {
          id: "backend",
          title: "Sistemas & APIs Back-end",
          desc: "Modelagem de microsserviços e APIs robustas utilizando NestJS e Node.js. Arquiteturas desacopladas integradas eficientemente com GraphQL, APIs REST, Prisma, TypeORM e segurança de dados.",
        }
      ]
    },
    contact: {
      tag: "VAMOS CONVERSAR",
      title: "Construir o Próximo",
      titleEmphasis: "Ecossistema Digital",
      desc: "Disponível para projetos globais, arquitetura de sistemas e soluções de alta performance. Entre em contato preenchendo o formulário ou através das redes sociais.",
      stats: [
        { value: "2.5+", label: "Anos de Exp." },
        { value: "100%", label: "Código Tipado" },
        { value: "Multi", label: "Cloud Engine" }
      ],
      form: {
        name: "Nome Completo",
        email: "E-mail Profissional",
        message: "Sua Mensagem",
        placeholderName: "Ex: Ícaro de Paula",
        placeholderEmail: "seu@email.com",
        placeholderMsg: "Descreva o escopo do projeto ou sua proposta...",
        submit: "Enviar Mensagem"
      }
    },
    footer: {
      tagline: "Arquitetando sistemas robustos e interfaces Premium",
      taglineEmphasis: "com alto impacto no mercado Digital.",
      subtitle: "Future - Software Engineering & Cybersecurity",
      description: "Full Stack Developer",
      navTitle: "Navegação",
      contactTitle: "Contato",
      specialtyTitle: "Especialidade",
      rights: "Todos os direitos reservados.",
      developedBy: "Desenvolvido por",
      links: [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Experiência", href: "#experience" },
        { name: "Projetos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Serviços", href: "#services" },
        { name: "Contato", href: "#contact" }
      ]
    }
  },
  en: {
    sidebar: {
      role: "Full Stack Developer",
      nav: ["Home", "About", "Experience", "Projects", "Skills", "Services", "Contact"],
      status: "Available for Projects"
    },
    hero: {
      status: "Available for new challenges",
      title: "Ícaro\nCarneiro",
      roles: ["Full Stack Developer", "Frontend Developer", "Systems Analyst", "Software Engineer"],
      intro: "Specializing in creating scalable digital experiences, combining robust architecture with refined interfaces. Transforming complex ideas into high-performance code.",
      cta: "View Projects"
    },
    about: {
      subtitle: "Our Mission / My Journey",
      title: "We help applications evolve by delivering smart, efficient, and appealing solutions to digital challenges.",
      highlightBox: "I have a sense of belonging to every project I work on. I get things done, and do so with integrity and care for the outcome.",
      commitmentTitle: "The Commitment",
      commitmentDesc: "Total focus on clean code, modular architecture, and zero tolerance for subpar output. Specialized in the web ecosystem to mitigate risks and optimize system performance.",
      peopleTitle: "Design & Identity",
      peopleDesc: "I build Premium Landing Pages and Multi-page Applications with a strategic focus on adding immediate value to your business. Engineering digital ecosystems that blend a cohesive visual identity for business owners with a highly comfortable experience for the client.",
      impactTitle: "The Impact",
      impactDesc: "Over 2.5 years of hands-on experience evolving microservices and scalable APIs. Proven reduction of critical bugs in production and a focus on delivering real end-to-end value.",
    },
    experience: {
      profTitle: "Professional Experience",
      profSub: "Track record of building highly performant and scalable web systems.",
      eduTitle: "Education & Qualifications",
      eduSub: "Continuous tracking of software engineering principles and digital protection.",
      certTitle: "Active Specializations",

      jobs: [
        {
          period: "JAN 2025 - JULY 2026",
          role: "Software Analyst & Fullstack Developer",
          company: "GO4Digital",
          desc: "Developing and maintaining React applications and microservices with Next.js, TailwindCSS, and Shadcn UI across more than 5 active projects simultaneously. Creating scalable APIs (NestJS, GraphQL, REST) integrated via Prisma and TypeORM, optimizing technical architecture and data flows. Writing automated unit tests to reduce reported production bugs by 17.5%. Active collaboration in weekly code reviews, agile refinement meetings, and crafting technical architecture documentation.",
          tags: ["Next.js", "React", "NestJS", "GraphQL", "Prisma", "TypeORM", "TailwindCSS", "Shadcn UI", "Unit Testing"]
        },
        {
          period: "JAN 2024 - MAY 2025",
          role: "Systems Analyst & Developer (Freelancer)",
          company: "Hi-Tech Gênesis",
          desc: "Gathering requirements and mapping business rules directly with stakeholders, converting operational demands into technical architecture scopes. Dynamic Front-end development using HTML5, CSS3, and modern JavaScript, focusing on agile methodologies and tight delivery deadlines for responsive interfaces.",
          tags: ["JavaScript", "HTML5", "CSS3", "Requirements Analysis", "Agile Methodologies"]
        },
        {
          period: "JUN 2022 - OCT 2022",
          role: "Front-end Developer",
          company: "CODITECH",
          desc: "Full development of the visual layer of 3 institutional websites focused on digital marketing strategies using HTML5, CSS3, Bootstrap, and JavaScript. Designing and creating integrated visual interface elements to support digital campaigns.",
          tags: ["Bootstrap", "JavaScript", "HTML5", "CSS3", "UI/UX Design", "Digital Marketing"]
        }
      ],
      education: [
        {
          title: "Postgraduate Student in Software Engineering and Cybersecurity",
          institution: "PUC Campinas + PUCPR Digital",
          period: "March 2026 - Current",
          desc: "Advanced specialization focusing on scalable architectures, cloud governance, and strategic application defense and security systems.",
          badge: "Postgrad"
        },
        {
          title: "Bachelor of Science in Analysis and Systems Development",
          institution: "UNIFEC",
          period: "2020 - December 2023",
          desc: "Solid academic foundation covering computer science algorithms, high-performance data structures, and software requirements engineering.",
          badge: "Graduated"
        }
      ],
      certs: [
        { title: "Multi-Cloud Architecture, Migration & Cloud Governance", org: "Specialization Modules - PUC" },
        { title: "High-Performance Software Engineering: Advanced SPA, SSR & SSG", org: "Independent Development & Portfolio" },
        { title: "Dynamic Internationalization (i18n) & Global State Management in React", org: "Hands-on Engineering Mentorship" },
        { title: "Automated CI/CD Pipelines & Version Control", org: "GitHub Actions & Azure DevOps" }
      ]
    },
    projects: {
      title: "Recent Work",
      sub: "Real-world systems and web ecosystems compiled with high performance standards.",
      categories: {
        all: "All Work",
        fullstack: "Full Stack",
        frontend: "Front-end",
        marketing: "Digital Marketing"
      },
      emptyState: {
        title: "New Ecosystems Under Construction",
        desc: "I am currently performing architectural refactoring, optimizing performance, and engineering new complex projects for this category. Complete solutions will be showcased here soon.",
        badge: "Active Development"
      },
      items: [
        {
          id: 1,
          title: "RATH Landing Page",
          category: ["frontend", "marketing"],
          categoryLabel: "Premium Front-end Application",
          year: "2026",
          image: imagemProj1,
          desc: "Premium Landing Page developed for a health professional specialized in Nutrition, Physical Education, and Physiotherapy. The digital ecosystem was structured to convert high-end clients through a sophisticated visual identity tailored to the healthcare sector. It provides a comfortable browsing experience, highlighting personalized fitness training and physical rehabilitation services, while leveraging Google Maps API integration to seamlessly display the professional's operational location.",
          techs: ["Next.js", "Astro", "Shadcn UI", "TailwindCSS", "TypeScript", "Framer-motion", "Google Maps API", "lucide-react", "react-icons"],
          github: "https://devzicaro.github.io/projeto-arthur/",
          demo: "https://devzicaro.github.io/projeto-arthur/"
        },
        {
          id: 2,
          title: "Advocacia Mock Digital",
          category: ["frontend", "marketing"],
          categoryLabel: "Premium Front-end Application",
          year: "2026",
          image: imagemProj2,
          desc: "Premium corporate web application developed for a fictional law firm using structured mock data. The digital ecosystem was engineered to convey legal authority and trust through a sleek, refined visual identity tailored to the corporate legal sector. Focused on delivering a comfortable user experience, the project features optimized section rendering and highly modular components to display legal practice areas and attorney profiles.",
          techs: ["Next.js", "Astro", "Shadcn UI", "TailwindCSS", "TypeScript", "Framer-motion", "lucide-react", "react-icons"],
          github: "https://github.com/devzicaro/projeto-adv-mock",
          demo: "https://devzicaro.github.io/projeto-adv-mock/"
        },
      ]
    },
    skills: {
      title: "Skills & Expertise",
      sub: "The technical ecosystem and methodologies I leverage to transform concepts into high-performance software.",
      categories: {
        frontend: "Front-end",
        backend: "Back-end & Data",
        foundations: "Foundations & Quality",
        soft: "Soft Skills"
      },
      items: {
        frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Astro", "TailwindCSS", "Shadcn UI", "Recharts", "HTML5", "CSS3", "Bootstrap"],
        backend: ["NestJS", "Node.js", "GraphQL", "REST APIs", "Prisma", "TypeORM"],
        foundations: ["Algorithms", "Data Structures", "Unit Testing", "Git / GitHub", "Azure", "CI/CD"],
        soft: ["Emotional Intelligence", "Teamwork", "Adaptability", "Assertive Communication"]
      }
    },
    services: {
      title: "Services",
      sub: "End-to-end digital solutions built with modern architectures and high performance standards.",
      cta: "Learn more",
      items: [
        {
          id: "lp",
          title: "Premium Landing Pages",
          desc: "High-conversion pages fully optimized for structural SEO and blazing-fast loading speeds. Tailored responsive interfaces designed to capture user engagement instantly.",
        },
        {
          id: "mp",
          title: "Multi-Page Applications",
          desc: "Complex web systems and scalable corporate platforms leveraging Next.js App Router. Optimized dynamic routing, hybrid rendering (SSR/SSG), and pristine indexability.",
        },
        {
          id: "frontend",
          title: "Premium Front-end Engineering",
          desc: "Production of rich, modular, and componentized user interfaces using React, TypeScript, and TailwindCSS. Optimizing user experience and performance through strategic use of SPA, SSR, and SSG.",
        },
        {
          id: "backend",
          title: "Back-end Systems & APIs",
          desc: "Architecting robust microservices and server-side infrastructures using NestJS and Node.js. Decoupled pipelines seamlessly integrated with GraphQL, REST APIs, Prisma, TypeORM, and safe data standards.",
        }
      ]
    },
    contact: {
      tag: "LET'S TALK",
      title: "Building the Next",
      titleEmphasis: "Digital Ecosystem",
      desc: "Available for global contracts, systems architecture, and high-performance software engineering. Reach out via the form or through my digital networks.",
      stats: [
        { value: "2.5+", label: "Years Exp." },
        { value: "100%", label: "Typed Code" },
        { value: "Multi", label: "Cloud Engine" }
      ],
      form: {
        name: "Full Name",
        email: "Professional E-mail",
        message: "Your Message",
        placeholderName: "e.g., Icaro de Paula",
        placeholderEmail: "your@email.com",
        placeholderMsg: "Describe the project scope or your proposal...",
        submit: "Send Message"
      }
    },
   footer: {
      tagline: "Architecting robust systems and Premium interfaces",
      taglineEmphasis: "with a high impact on the Digital market.",
      subtitle: "Future - Software Engineering & Cybersecurity",
      description: "Full Stack Developer",
      navTitle: "Navigation",
      contactTitle: "Contact",
      specialtyTitle: "Specialty",
      rights: "All rights reserved.",
      developedBy: "Developed by",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" }
      ]
    }
  }
} as const;