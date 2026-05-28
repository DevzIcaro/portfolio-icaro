// src/i18n/translations.ts

export const translations = {
  pt: {
    sidebar: {
      role: "Engenheiro Full Stack",
      nav: ["Início", "Sobre", "Experiência", "Projetos", "Skills", "Serviços", "Contato"],
      status: "Disponível para Projetos"
    },
    hero: {
      status: "Disponível para novos desafios",
      title: "Ícaro\nCarneiro",
      roles: ["Desenvolvedor Full Stack", "Analista de Sistemas", "Engenheiro de Software", "Entusiasta de Tech"],
      intro: "Especialista em criar experiências digitais escaláveis, unindo arquitetura robusta a interfaces refinadas. Transformando ideias complexas em código de alta performance.",
      cta: "Ver Projetos"
    },
    // Adicione novas seções aqui conforme for criando os componentes
    about: {
      subtitle: "Minha Jornada",
      title: "Construindo soluções escaláveis unindo arquitetura robusta a interfaces refinadas.",
      highlightBox: "Tenho um senso de pertencimento em cada projeto com que colaboro. Desenvolvo sistemas com integridade, foco em performance e máxima atenção à experiência final do usuário.",
      commitmentTitle: "O Compromisso",
      commitmentDesc: "Foco total em código limpo, arquitetura modular e zero tolerância para soluções ineficientes. Especializado no ecossistema web para mitigar riscos e otimizar a infraestrutura de sistemas.",
      peopleTitle: "As Pessoas",
      peopleDesc: "Acredito em comunicação assertiva e colaboração global. Pronto para atuar em times internacionais com inglês B+, participando ativamente de code reviews e decisões arquiteturais.",
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
          period: "2025 - PRESENTE",
          role: "Desenvolvedor Front-end e Back-end Júnior",
          company: "GO4Digital",
          desc: "Desenvolvimento e evolução de microserviços e aplicações com Next.js, React e TailwindCSS em 5+ projetos simultâneos. Criação de APIs robustas com NestJS, GraphQL e Prisma, reduzindo falhas em produção em 17.5% por meio de automação de testes.",
          tags: ["Next.js", "React", "NestJS", "GraphQL", "Prisma", "TailwindCSS"]
        },
        {
          period: "2024 - 2025",
          role: "Analista de Sistemas & Desenvolvedor",
          company: "Hi-Tech Gênesis (Freelancer)",
          desc: "Levantamento estratégico de requisitos diretamente com stakeholders, transformando regras de negócio complexas em interfaces funcionais focadas na experiência do usuário.",
          tags: ["JavaScript", "HTML5/CSS3", "Git", "Análise de Requisitos"]
        },
        {
          period: "2022",
          role: "Estagiário - Desenvolvedor Front-end",
          company: "CODITECH",
          desc: "Atuação no desenvolvimento web com Bootstrap e JavaScript focado em estratégias digitais, além de apoio na concepção e prototipagem de interfaces visuais de alta fidelidade.",
          tags: ["Bootstrap", "JavaScript", "HTML5", "UI/UX Básigo"]
        }
      ],
      education: [
        {
          title: "Pós-Graduando em Engenharia de Software e Cibersegurança",
          institution: "PUC Campinas + PUCPR Digital",
          period: "2026 - Cursando",
          desc: "Especialização focada em arquiteturas escaláveis, governança em nuvem e estratégias avançadas de segurança e proteção de aplicações.",
          badge: "Especialização"
        },
        {
          title: "Graduação em Análise e Desenvolvimento de Sistemas",
          institution: "UNIFEC",
          period: "2020 - 2023",
          desc: "Sólida fundamentação acadêmica em algoritmos, estruturas de dados de alta performance e engenharia de requisitos de software.",
          badge: "Graduado"
        }
      ],
      certs: [
        { title: "Arquitetura Multi-Cloud & Governança de Nuvem", org: "PUC" },
        { title: "Internacionalização Avançada & Gerenciamento de Estado Global no React", org: "Mentoria Técnica" },
        { title: "Metodologias Ágeis e Práticas CI/CD", org: "Azure/Git" }
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
      items: [
        {
          id: 1,
          title: "Plantação Inteligente Dashboard",
          category: "fullstack",
          categoryLabel: "Full Stack Application",
          year: "2026",
          desc: "Painel administrativo de monitoramento agrícola integrado a microsserviços. Consumo de dados em tempo real utilizando GraphQL e renderização otimizada com MetricCards.",
          techs: ["Next.js", "GraphQL", "NestJS", "Recharts"],
          github: "https://github.com/devzicaro",
          demo: "#"
        },
        {
          id: 2,
          title: "Auth Email Secure Ecosystem",
          category: "frontend",
          categoryLabel: "Web Application",
          year: "2026",
          desc: "Sistema desacoplado focado em autenticação e fluxos seguros via e-mail. Arquitetado em estrutura Monorepo utilizando gerenciamento eficiente de pacotes com pnpm.",
          techs: ["React", "Shadcn UI", "TailwindCSS", "Vercel"],
          github: "https://github.com/devzicaro",
          demo: "#"
        },
        {
          id: 3,
          title: "Sistemas Digitais de Alta Conversão",
          category: "marketing",
          categoryLabel: "Marketing Digital",
          year: "2022",
          desc: "Desenvolvimento de portais institucionais e plataformas voltadas ao marketing digital de alta conversão, com foco em SEO estrutural e design responsivo.",
          techs: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
          github: "https://github.com/devzicaro",
          demo: "#"
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
      // Suas habilidades baseadas rigorosamente no seu perfil real
      items: {
        frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Shadcn UI", "Recharts"],
        backend: ["NestJS", "Node.js", "GraphQL", "APIs REST", "Prisma", "TypeORM"],
        foundations: ["Algoritmos Básicos", "Estruturas de Dados", "Testes Unitários", "Git / GitHub", "Azure Cloud"],
        soft: ["Solução de Problemas", "Trabalho em Equipe", "Aprendizado Rápido", "Comunicação Assertiva"]
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
          title: "Desenvolvimento Front-end Sênior",
          desc: "Construção de interfaces ricas, modulares e componentizadas utilizando React, TypeScript e TailwindCSS. Integração fluida de estados globais e ecossistemas complexos de animações.",
        },
        {
          id: "backend",
          title: "Sistemas & APIs Back-end",
          desc: "Modelagem de microsserviços e APIs robustas utilizando NestJS e Node.js. Arquiteturas desacopladas integradas eficientemente com GraphQL, Prisma, TypeORM e segurança de dados.",
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
      tagline: "Arquitetando sistemas robustos e interfaces de",
      taglineEmphasis: "alto impacto global.",
      subtitle: "Engenharia de Software & Cybersecurity",
      description: "Full Stack Developer",
      navTitle: "Navegação",
      contactTitle: "Contato",
      specialtyTitle: "Especialidade",
      rights: "Todos os direitos reservados.",
      developedBy: "Desenvolvido por",
      links: [
        { name: "Início", href: "#hero" },
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
      role: "Full Stack Engineer",
      nav: ["Home", "About", "Experience", "Projects", "Skills", "Services", "Contact"],
      status: "Available for Projects"
    },
    hero: {
      status: "Available for new challenges",
      title: "Ícaro\nCarneiro",
      roles: ["Full Stack Developer", "System Analyst", "Software Engineer", "Tech Enthusiast"],
      intro: "Specializing in creating scalable digital experiences, combining robust architecture with refined interfaces. Transforming complex ideas into high-performance code.",
      cta: "View Projects"
    },
    about: {
      subtitle: "Our Mission / My Journey",
      title: "We help applications evolve by delivering smart, efficient, and appealing solutions to digital challenges.",
      highlightBox: "I have a sense of belonging to every project I work on. I get things done, and do so with integrity and care for the outcome.",
      commitmentTitle: "The Commitment",
      commitmentDesc: "Total focus on clean code, modular architecture, and zero tolerance for subpar output. Specialized in the web ecosystem to mitigate risks and optimize system performance.",
      peopleTitle: "The People",
      peopleDesc: "I believe in assertive communication and global collaboration. Equipped with B+ English, ready for global teams, active code reviews, and architectural alignment.",
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
          period: "2025 - PRESENT",
          role: "Junior Front-end and Back-end Developer",
          company: "GO4Digital",
          desc: "Evolving web architecture using React, Next.js, and TailwindCSS across 5+ active systems. Architecting scalable REST/GraphQL backend environments with NestJS and Prisma, reducing production overhead by 17.5% through comprehensive unit testing.",
          tags: ["Next.js", "React", "NestJS", "GraphQL", "Prisma", "TailwindCSS"]
        },
        {
          period: "2024 - 2025",
          role: "Systems Analyst & Developer",
          company: "Hi-Tech Gênesis (Freelancer)",
          desc: "Direct translation of stakeholder business needs into performant software systems and clean user experiences.",
          tags: ["JavaScript", "HTML5/CSS3", "Git", "Requirements Engineering"]
        },
        {
          period: "2022",
          role: "Front-end Developer Intern",
          company: "CODITECH",
          desc: "Development of marketing websites utilizing modern CSS layouts and responsive interfaces, adhering strictly to delivery workflows.",
          tags: ["Bootstrap", "JavaScript", "HTML5", "Basic UI/UX"]
        }
      ],
      education: [
        {
          title: "Postgraduate Student in Software Engineering and Cybersecurity",
          institution: "PUC Campinas + PUCPR Digital",
          period: "2026 - Current",
          desc: "Advanced studies targeting cloud governance, decoupled multi-cloud solutions, and robust systems application protection.",
          badge: "Postgrad"
        },
        {
          title: "Bachelor of Science in Analysis and Systems Development",
          institution: "UNIFEC",
          period: "2020 - 2023",
          desc: "Solid theoretical foundation covering computer science algorithms, data structures, and continuous system optimization.",
          badge: "Graduated"
        }
      ],
      certs: [
        { title: "Multi-Cloud Architecture & Cloud Governance", org: "PUC" },
        { title: "Advanced i18n & Global State Management in React", org: "Technical Mentorship" },
        { title: "Agile Methodologies and CI/CD Practices", org: "Azure/Git" }
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
      items: [
        {
          id: 1,
          title: "Smart Plantation Dashboard",
          category: "fullstack",
          categoryLabel: "Full Stack Application",
          year: "2026",
          desc: "Agricultural monitoring dashboard integrated into decoupled microservices. Real-time data parsing using GraphQL metrics and tailored MetricCards views.",
          techs: ["Next.js", "GraphQL", "NestJS", "Recharts"],
          github: "https://github.com/devzicaro",
          demo: "#"
        },
        {
          id: 2,
          title: "Auth Email Secure Ecosystem",
          category: "frontend",
          categoryLabel: "Web Application",
          year: "2026",
          desc: "Decoupled system focusing on authentication flows and secure email validation routes. Architected under a Monorepo pipeline using pnpm package managers.",
          techs: ["React", "Shadcn UI", "TailwindCSS", "Vercel"],
          github: "https://github.com/devzicaro",
          demo: "#"
        },
        {
          id: 3,
          title: "High-Conversion Digital Systems",
          category: "marketing",
          categoryLabel: "Digital Marketing",
          year: "2022",
          desc: "Production of corporate web applications focusing on digital marketing funnels, technical search engine optimization, and responsive styling grids.",
          techs: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
          github: "https://github.com/devzicaro",
          demo: "#"
        }
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
        frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Shadcn UI", "Recharts"],
        backend: ["NestJS", "Node.js", "GraphQL", "REST APIs", "Prisma", "TypeORM"],
        foundations: ["Basic Algorithms", "Data Structures", "Unit Testing", "Git / GitHub", "Azure Cloud"],
        soft: ["Problem Solving", "Teamwork", "Fast Learning", "Assertive Communication"]
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
          title: "Senior Front-end Engineering",
          desc: "Production of rich, modular, and componentized user interfaces using React, TypeScript, and TailwindCSS. Seamless integration of global state managers and smooth animation systems.",
        },
        {
          id: "backend",
          title: "Back-end Systems & APIs",
          desc: "Architecting robust microservices and server-side infrastructures using NestJS and Node.js. Decoupled pipelines seamlessly integrated with GraphQL, Prisma, TypeORM, and safe data standards.",
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
        placeholderName: "e.g., John Doe",
        placeholderEmail: "your@email.com",
        placeholderMsg: "Describe the project scope or your proposal...",
        submit: "Send Message"
      }
    },
    footer: {
      tagline: "Architecting robust systems and high-impact",
      taglineEmphasis: "global user interfaces.",
      subtitle: "Software Engineering & Cybersecurity",
      description: "Full Stack Developer",
      navTitle: "Navigation",
      contactTitle: "Contact",
      specialtyTitle: "Specialty",
      rights: "All rights reserved.",
      developedBy: "Developed by",
      links: [
        { name: "Home", href: "#hero" },
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