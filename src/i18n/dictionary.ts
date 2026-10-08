/**
 * UI label dictionary (navigation, section headings, buttons, a11y labels).
 * Professional content lives in `src/content/profile.ts`.
 *
 * The `en` dictionary is type-checked against `pt`, so a missing key is a compile error.
 */

const pt = {
  "meta.skip": "Pular para o conteúdo",

  "nav.experience": "Experiência",
  "nav.projects": "Projetos",
  "nav.skills": "Competências",
  "nav.education": "Formação",
  "nav.contact": "Contato",
  "nav.cv": "Currículo",
  "nav.menu": "Abrir menu",
  "nav.close": "Fechar menu",
  "nav.primary": "Navegação principal",

  "theme.toLight": "Ativar modo claro",
  "theme.toDark": "Ativar modo escuro",
  "lang.label": "Idioma",

  "hero.eyebrow": "Disponível para novos projetos",
  "hero.ctaPrimary": "Iniciar Conversa",
  "hero.ctaSecondary": "Explorar Trabalhos",
  "hero.currentRole": "Posição Atual",
  "hero.location": "Base de Operação",
  "hero.focus": "Especialidades",
  "hero.available": "Disponível",

  "experience.eyebrow": "Trajetória Profissional",
  "experience.title": "Foco incansável em entrega, escalabilidade e valor.",
  "experience.description":
    "Da concepção de arquiteturas robustas no setor financeiro ao desenvolvimento da próxima geração de soluções corporativas de IA Aplicada.",
  "experience.present": "Presente",
  "experience.stack": "Tecnologias Utilizadas",
  "experience.promoted": "Destaque & Promoção",

  "projects.eyebrow": "Portfólio de Engenharia",
  "projects.title": "Aplicações escaláveis construídas de ponta a ponta.",
  "projects.description":
    "Um olhar focado em como LLMs e processamento de dados resolvem gargalos corporativos de forma automatizada e inteligente.",
  "projects.featured": "Destaque",
  "projects.stack": "Arquitetura",
  "projects.repo": "Analisar Código",
  "projects.demo": "Visualizar Produto",
  "projects.more": "Acessar todos os repositórios no GitHub",

  "skills.eyebrow": "Arsenal Técnico",
  "skills.title": "Fundamentos sólidos, ferramentas de ponta.",
  "skills.description":
    "O ecossistema que domino para orquestrar software confiável, esteiras automatizadas e produtos impulsionados por IA Generativa.",

  "education.eyebrow": "Evolução Contínua",
  "education.title": "Compromisso com o estado da arte tecnológica.",
  "education.description":
    "Uma base consolidada em Engenharia de Software expandida diariamente rumo ao avanço das Inteligências Artificiais estruturadas.",
  "education.academic": "Grau Acadêmico",
  "education.courses": "Especializações & Bootcamps",
  "education.certifications": "Certificações Oficiais",
  "education.languages": "Proficiência Linguística",
  "education.learningPath": "Roadmap atual de Engenharia de IA",
  "education.inProgress": "Em andamento",

  "contact.eyebrow": "Próximos Passos",
  "contact.title": "Vamos elevar o patamar tecnológico da sua operação.",
  "contact.description":
    "Estou aberto a desafios onde a Engenharia de Software encontre a Inteligência Artificial para gerar impactos reais. Retorno as mensagens rapidamente.",
  "contact.email": "Endereço Eletrônico",
  "contact.copy": "Copiar e-mail",
  "contact.copied": "Endereço copiado!",
  "contact.downloadCv": "Acessar Currículo Detalhado",

  "footer.rights": "Todos os direitos reservados. Código, design e inteligência aplicada.",
  "footer.top": "Subir para o topo",
} as const;

export type UIKey = keyof typeof pt;

const en: Record<UIKey, string> = {
  "meta.skip": "Skip to content",

  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.education": "Education",
  "nav.contact": "Contact",
  "nav.cv": "Résumé",
  "nav.menu": "Open menu",
  "nav.close": "Close menu",
  "nav.primary": "Primary navigation",

  "theme.toLight": "Switch to light mode",
  "theme.toDark": "Switch to dark mode",
  "lang.label": "Language",

  "hero.eyebrow": "Available for new projects",
  "hero.ctaPrimary": "Start a Conversation",
  "hero.ctaSecondary": "Explore Work",
  "hero.currentRole": "Current Position",
  "hero.location": "Base of Operations",
  "hero.focus": "Core Specialties",
  "hero.available": "Available",

  "experience.eyebrow": "Professional Trajectory",
  "experience.title": "Relentless focus on delivery, scalability, and value.",
  "experience.description":
    "From designing robust architectures in the financial sector to developing the next generation of corporate Applied AI solutions.",
  "experience.present": "Present",
  "experience.stack": "Technologies Used",
  "experience.promoted": "Outstanding Performance",

  "projects.eyebrow": "Engineering Portfolio",
  "projects.title": "Scalable applications built end-to-end.",
  "projects.description":
    "A focused look at how LLMs and data processing solve corporate bottlenecks automatically and intelligently.",
  "projects.featured": "Featured",
  "projects.stack": "Architecture",
  "projects.repo": "Analyze Code",
  "projects.demo": "View Product",
  "projects.more": "Access all repositories on GitHub",

  "skills.eyebrow": "Technical Arsenal",
  "skills.title": "Solid fundamentals, cutting-edge tools.",
  "skills.description":
    "The ecosystem I master to orchestrate reliable software, automated pipelines, and products driven by Generative AI.",

  "education.eyebrow": "Continuous Evolution",
  "education.title": "Commitment to the technological state of the art.",
  "education.description":
    "A consolidated foundation in Software Engineering expanded daily towards the advancement of structured Artificial Intelligences.",
  "education.academic": "Academic Degree",
  "education.courses": "Specializations & Bootcamps",
  "education.certifications": "Official Certifications",
  "education.languages": "Linguistic Proficiency",
  "education.learningPath": "Current AI Engineering Roadmap",
  "education.inProgress": "In progress",

  "contact.eyebrow": "Next Steps",
  "contact.title": "Let's raise your operation's technological standard.",
  "contact.description":
    "I'm open to challenges where Software Engineering meets Artificial Intelligence to drive real impact. I respond to messages promptly.",
  "contact.email": "Electronic Address",
  "contact.copy": "Copy email",
  "contact.copied": "Address copied!",
  "contact.downloadCv": "Access Detailed Résumé",

  "footer.rights": "All rights reserved. Code, design, and applied intelligence.",
  "footer.top": "Back to top",
};

export const dictionary = { pt, en } as const;
