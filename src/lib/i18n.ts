import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.skills': { en: 'Skills', pt: 'Habilidades' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.projects': { en: 'Projects', pt: 'Projetos' },
  'nav.ai': { en: 'AI', pt: 'IA' },
  'nav.contact': { en: 'Contact', pt: 'Contato' },
  'nav.get_in_touch': { en: 'Get in touch', pt: 'Entre em contato' },
  'hero.transitioning': { en: 'Transitioning into AI Engineering', pt: 'Transicionando para Engenharia de IA' },
  'hero.description': { en: 'Software Developer building intelligent systems with <span class="text-foreground">Python</span>, <span class="text-foreground">Generative AI</span>, <span class="text-foreground">RAG</span> and <span class="text-foreground">LangChain</span>. AI Engineering in progress.', pt: 'Desenvolvedor de Software construindo sistemas inteligentes com <span class="text-foreground">Python</span>, <span class="text-foreground">IA Generativa</span>, <span class="text-foreground">RAG</span> e <span class="text-foreground">LangChain</span>. Engenharia de IA em progresso.' },
  'hero.view_projects': { en: 'View Projects', pt: 'Ver Projetos' },
  'hero.available_opportunities': { en: 'Available for AI engineering opportunities', pt: 'Disponível para oportunidades de engenharia de IA' },
  'about.title': { en: 'Engineer crafting <span class="font-display text-primary">intelligent</span> systems.', pt: 'Engenheiro criando sistemas <span class="font-display text-primary">inteligentes</span>.' },
  'about.eyebrow': { en: 'About', pt: 'Sobre' },
  'about.paragraph1': { en: 'I\'m a Brazilian software developer currently working as Development Analyst I at Cadmus, where I started as an intern and was hired full-time after delivering on real production challenges.', pt: 'Sou um desenvolvedor de software brasileiro atualmente trabalhando como Analista de Desenvolvimento I na Cadmus, onde comecei como estagiário e fui contratado integralmente após entregar desafios reais de produção.' },
  'about.years_building': { en: 'Years building software', pt: 'Anos construindo software' },
  'about.paragraph2': { en: 'My focus is shifting toward AI Engineering — designing systems with Python, Generative AI, LangChain and RAG architectures. I study LLM applications and modern AI patterns to build software that\'s not only well-engineered, but genuinely intelligent.', pt: 'Meu foco está migrando para Engenharia de IA projetando sistemas com Python, IA Generativa, LangChain e arquiteturas RAG. Estudo aplicações de LLM e padrões modernos de IA para construir software que não é apenas bem engenhado, mas genuinamente inteligente.' },
  'about.projects_shipped': { en: 'Projects shipped', pt: 'Projetos entregues' },
  'about.paragraph3': { en: 'Before that, I worked as a freelance developer on Workana, shipping web projects and solving technical problems for clients with strong ratings. I care about clean code, quiet design, and learning every day.', pt: 'Antes disso, trabalhei como desenvolvedor freelancer na Workana, entregando projetos web e resolvendo problemas técnicos para clientes com ótimas avaliações. Me importo com código limpo, design discreto e aprendizado diário.' },
  'about.engineering_focus': { en: 'Engineering focus', pt: 'Foco de engenharia' },
  'contact.eyebrow': { en: 'Contact', pt: 'Contato' },
  'contact.title': { en: "Let's build something remarkable.", pt: 'Vamos construir algo notável.' },
  'contact.description': { en: 'Available for AI engineering opportunities', pt: 'Disponível para oportunidades de engenharia de IA' },
  'contact.get_in_touch': { en: 'Get in touch', pt: 'Entre em contato' },
  'contact.email': { en: 'Email', pt: 'E-mail' },
  'contact.github': { en: 'GitHub', pt: 'GitHub' },
  'contact.linkedin': { en: 'LinkedIn', pt: 'LinkedIn' },
  'experience.cadmus_role': { en: 'Development Analyst I', pt: 'Analista de Desenvolvimento I' },
  'experience.workana_role': { en: 'Freelance Developer', pt: 'Desenvolvedor Freelancer' },
  'experience.present': { en: 'Present', pt: 'Presente' },
  'experience.previous': { en: 'Previous', pt: 'Anterior' },
  'experience.cadmus_point1': { en: 'Started as an intern and was hired full-time after delivering measurable impact.', pt: 'Comecei como estagiário e fui contratado integralmente após entregar impacto mensurável.' },
  'experience.cadmus_point2': { en: 'Building and maintaining internal systems used in real business operations.', pt: 'Construindo e mantendo sistemas internos usados em operações de negócio reais.' },
  'experience.cadmus_point3': { en: 'Contributing to product improvements and shipping changes to production.', pt: 'Contribuindo com melhorias de produto e entregando mudanças para produção.' },
  'experience.cadmus_point4': { en: 'Solving technical challenges across stack in a fast-moving environment.', pt: 'Resolvendo desafios técnicos across stack em um ambiente de rápido movimento.' },
  'experience.workana_point1': { en: 'Built web projects and solved technical issues for international clients.', pt: 'Construí projetos web e resolvi questões técnicas para clientes internacionais.' },
  'experience.workana_point2': { en: 'Worked across modern frontend stacks delivering custom solutions.', pt: 'Trabalhei com stacks modernos de frontend entregando soluções personalizadas.' },
  'experience.workana_point3': { en: 'Maintained excellent client ratings across completed projects.', pt: 'Mantive excelentes avaliações de clientes através de projetos concluídos.' },
  'projects.eyebrow': { en: 'Projects', pt: 'Projetos' },
  'projects.title': { en: 'Recent work I\'m proud of', pt: 'Trabalhos recentes dos quais me orgulho' },
  'projects.ai_email_title': { en: 'AI Email Summary', pt: 'Resumo de Email com IA' },
  'projects.ai_email_description': { en: 'AI-powered email summarization using Python and Gemini API to distill long threads into actionable briefs.', pt: 'Resumo de emails com IA usando Python e API Gemini para destilar longas conversas em resumos acionáveis.' },
  'projects.github_title': { en: 'GitHub Profile Finder', pt: 'Buscador de Perfil GitHub' },
  'projects.github_description': { en: 'Search GitHub users and explore repositories, recent events and profile data through a clean, fast UI.', pt: 'Busque usuários GitHub e explore repositórios, eventos recentes e dados de perfil através de uma interface limpa e rápida.' },
  'projects.weather_title': { en: 'Weather App', pt: 'App de Clima' },
  'projects.weather_description': { en: 'Real-time weather application consuming external APIs with a dynamic, responsive interface.', pt: 'Aplicação de clima em tempo real consumindo APIs externas com interface dinâmica e responsiva.' },
  'projects.support_rating_title': { en: 'Interactive Support Rating', pt: 'Avaliação de Suporte Interativa' },
  'projects.support_rating_description': { en: 'Interactive feedback flow with user rating, animated transitions and a polished thank-you screen.', pt: 'Fluxo de feedback interativo com avaliação do usuário, transições animadas e tela de agradecimento polida.' },
  'projects.view_project': { en: 'View Project', pt: 'Ver Projeto' },
  'projects.python_tag': { en: 'Python', pt: 'Python' },
  'projects.gemini_tag': { en: 'Gemini API', pt: 'API Gemini' },
  'projects.generative_ai_tag': { en: 'Generative AI', pt: 'IA Generativa' },
  'projects.react_tag': { en: 'React', pt: 'React' },
  'projects.rest_api_tag': { en: 'REST API', pt: 'API REST' },
  'projects.typescript_tag': { en: 'TypeScript', pt: 'TypeScript' },
  'projects.javascript_tag': { en: 'JavaScript', pt: 'JavaScript' },
  'projects.api_tag': { en: 'API', pt: 'API' },
  'projects.ui_tag': { en: 'UI', pt: 'UI' },
  'projects.ux_tag': { en: 'UX', pt: 'UX' },
  'projects.animation_tag': { en: 'Animation', pt: 'Animação' },
  'projects.view_code': { en: 'View Code', pt: 'Ver Código' },
  'skills.eyebrow': { en: 'Skills', pt: 'Habilidades' },
  'skills.title': { en: 'Technologies I work with', pt: 'Tecnologias com as quais trabalho' },
  'skills.ai_title': { en: 'AI & Python', pt: 'IA & Python' },
  'skills.software_title': { en: 'Software Development', pt: 'Desenvolvimento de Software' },
  'skills.frontend_title': { en: 'Frontend', pt: 'Frontend' },
  'skills.tools_title': { en: 'Tools', pt: 'Ferramentas' },
  'skills.python': { en: 'Python', pt: 'Python' },
  'skills.generative_ai': { en: 'Generative AI', pt: 'IA Generativa' },
  'skills.langchain': { en: 'LangChain', pt: 'LangChain' },
  'skills.rag': { en: 'RAG', pt: 'RAG' },
  'skills.ai_engineering': { en: 'AI Engineering', pt: 'Engenharia de IA' },
  'skills.prompt_engineering': { en: 'Prompt Engineering', pt: 'Prompt Engineering' },
  'skills.machine_learning': { en: 'Machine Learning', pt: 'Machine Learning' },
  'skills.llm_applications': { en: 'LLM Applications', pt: 'Aplicações de LLM' },
  'skills.apis': { en: 'APIs', pt: 'APIs' },
  'skills.nodejs': { en: 'Node.js', pt: 'Node.js' },
  'skills.sql': { en: 'SQL', pt: 'SQL' },
  'skills.postgresql': { en: 'PostgreSQL', pt: 'PostgreSQL' },
  'skills.javascript': { en: 'JavaScript', pt: 'JavaScript' },
  'skills.typescript': { en: 'TypeScript', pt: 'TypeScript' },
  'skills.react': { en: 'React', pt: 'React' },
  'skills.nextjs': { en: 'Next.js', pt: 'Next.js' },
  'skills.tailwindcss': { en: 'TailwindCSS', pt: 'TailwindCSS' },
  'skills.git': { en: 'Git', pt: 'Git' },
  'skills.github': { en: 'GitHub', pt: 'GitHub' },
  'skills.vscode': { en: 'VSCode', pt: 'VSCode' },
  'skills.vercel': { en: 'Vercel', pt: 'Vercel' },
  'ai.eyebrow': { en: 'AI Journey', pt: 'Jornada de IA' },
  'ai.title': { en: 'My path into AI Engineering', pt: 'Meu caminho para Engenharia de IA' },
  'ai.description': { en: 'Exploring the intersection of software development and artificial intelligence.', pt: 'Explorando a intersecção entre desenvolvimento de software e inteligência artificial.' },
  'ai.generative_ai': { en: 'Generative AI', pt: 'IA Generativa' },
  'ai.langchain': { en: 'LangChain', pt: 'LangChain' },
  'ai.rag_systems': { en: 'RAG Systems', pt: 'Sistemas RAG' },
  'ai.python': { en: 'Python', pt: 'Python' },
  'ai.machine_learning': { en: 'Machine Learning', pt: 'Machine Learning' },
  'ai.ai_agents': { en: 'AI Agents', pt: 'Agentes de IA' },
  'ai.llm_applications': { en: 'LLM Applications', pt: 'Aplicações de LLM' },
  'ai.continuous_learning': { en: 'Continuous Learning', pt: 'Aprendizado Contínuo' },
  'experience.eyebrow': { en: 'Experience', pt: 'Experiência' },
  'experience.title': { en: 'My professional journey', pt: 'Minha jornada profissional' },
  'projects.description': { en: 'A selection of projects showcasing my skills and approach to problem-solving.', pt: 'Uma seleção de projetos que demonstram minhas habilidades e abordagem para resolução de problemas.' },
  'contact.footer': { en: '© 2026 Gabriel Nicolas. Built with care.', pt: '© 2026 Gabriel Nicolas. Construído com cuidado.' },
  'contact.location': { en: 'Brazil · Remote-friendly', pt: 'Brasil · Remoto-friendly' },
  'skills.description': { en: 'A curated toolkit focused on shipping reliable software and intelligent AI systems.', pt: 'Um conjunto de ferramentas focado em entregar software confiável e sistemas de IA inteligentes.' },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  return React.createElement(
    I18nContext.Provider,
    { value: { language, setLanguage, t } },
    children
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
