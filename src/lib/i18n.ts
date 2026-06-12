import * as React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "pt";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.skills": { en: "Skills", pt: "Habilidades" },
  "nav.experience": { en: "Experience", pt: "Experiência" },
  "nav.projects": { en: "Projects", pt: "Projetos" },
  "nav.ai": { en: "AI", pt: "IA" },
  "nav.contact": { en: "Contact", pt: "Contato" },
  "nav.get_in_touch": { en: "Get in touch", pt: "Entre em contato" },
  "hero.transitioning": {
    en: "Transitioning into AI Engineering",
    pt: "Transicionando para Engenharia de IA",
  },
  "hero.description": {
    en: 'Software Developer building applications with <span class="text-foreground">Python</span>, <span class="text-foreground">Generative AI</span>, <span class="text-foreground">RAG</span> and <span class="text-foreground">AI Agents</span>. Transitioning into AI Engineering.',
    pt: 'Desenvolvedor de Software construindo aplicações com <span class="text-foreground">Python</span>, <span class="text-foreground">IA Generativa</span>, <span class="text-foreground">RAG</span> e <span class="text-foreground">agentes inteligentes</span>. Em formação para Engenharia de IA.',
  },
  "hero.view_projects": { en: "View Projects", pt: "Ver Projetos" },
  "hero.available_opportunities": {
    en: "Open to AI Engineering and Python Development opportunities",
    pt: "Aberto a oportunidades em Engenharia de IA e Desenvolvimento Python",
  },
  "about.title": {
    en: 'Software Developer building <span class="font-display text-primary">intelligent</span> systems.',
    pt: 'Desenvolvedor construindo sistemas <span class="font-display text-primary">inteligentes</span>.',
  },
  "about.eyebrow": { en: "About", pt: "Sobre" },
  "about.paragraph1": {
    en: "I'm a Software Developer currently working as Development Analyst I at Cadmus. I started as an intern and was later hired full-time after contributing to real production systems and business challenges.",
    pt: "Sou Desenvolvedor de Software e atualmente atuo como Analista de Desenvolvimento I na Cadmus. Iniciei minha trajetória na empresa como estagiário e fui efetivado após contribuir com desafios e soluções em ambiente de produção.",
  },
  "about.years_building": { en: "Years building software", pt: "Anos construindo software" },
  "about.paragraph2": {
    en: "I'm currently transitioning toward AI Engineering, studying Python, Generative AI, LangChain, AI Agents and RAG architectures. My goal is to build applications that combine large language models with real-world business problems.",
    pt: "Atualmente estou direcionando minha carreira para Engenharia de IA, estudando Python, IA Generativa, LangChain, agentes inteligentes e arquiteturas RAG. Meu objetivo é desenvolver aplicações que integrem modelos de linguagem a problemas reais de negócio.",
  },
  "about.projects_shipped": { en: "Projects shipped", pt: "Projetos entregues" },
  "about.paragraph3": {
    en: "Before that, I worked as a freelance developer on Workana, delivering web projects and solving technical challenges for different clients. I value clean code, continuous learning and building solutions that create real impact.",
    pt: "Antes disso, atuei como desenvolvedor freelancer na Workana, entregando projetos web e solucionando problemas técnicos para diferentes clientes. Valorizo código limpo, aprendizado contínuo e a construção de soluções que gerem impacto real.",
  },
  "about.engineering_focus": { en: "Engineering focus", pt: "Foco de engenharia" },
  "contact.eyebrow": { en: "Contact", pt: "Contato" },
  "contact.title": { en: "Let's build something remarkable.", pt: "Vamos construir algo notável." },
  "contact.description": {
    en: "Open to AI Engineering and Python Development opportunities",
    pt: "Aberto a oportunidades em Engenharia de IA e Desenvolvimento Python",
  },
  "contact.get_in_touch": { en: "Get in touch", pt: "Entre em contato" },
  "contact.email": { en: "Email", pt: "E-mail" },
  "contact.github": { en: "GitHub", pt: "GitHub" },
  "contact.linkedin": { en: "LinkedIn", pt: "LinkedIn" },
  "experience.cadmus_role": { en: "Development Analyst I", pt: "Analista de Desenvolvimento I" },
  "experience.workana_role": { en: "Freelance Developer", pt: "Desenvolvedor Freelancer" },
  "experience.present": { en: "Present", pt: "Presente" },
  "experience.previous": { en: "Previous", pt: "Anterior" },
  "experience.cadmus_point1": {
    en: "Started as an intern and was later hired full-time after contributing to production systems and business initiatives.",
    pt: "Comecei como estagiário e fui efetivado após contribuir para sistemas em produção e iniciativas de negócio.",
  },
  "experience.cadmus_point2": {
    en: "Building and maintaining internal systems used in real business operations.",
    pt: "Construindo e mantendo sistemas internos usados em operações de negócio reais.",
  },
  "experience.cadmus_point3": {
    en: "Contributing to product improvements and shipping changes to production.",
    pt: "Contribuindo com melhorias de produto e entregando mudanças para produção.",
  },
  "experience.cadmus_point4": {
    en: "Solving technical challenges across different layers of the application in a fast-paced environment.",
    pt: "Resolvendo desafios técnicos em diferentes camadas da aplicação em um ambiente dinâmico.",
  },
  "experience.workana_point1": {
    en: "Built web projects and solved technical issues for international clients.",
    pt: "Construí projetos web e resolvi questões técnicas para clientes internacionais.",
  },
  "experience.workana_point2": {
    en: "Worked across modern frontend stacks delivering custom solutions.",
    pt: "Trabalhei com stacks modernos de frontend entregando soluções personalizadas.",
  },
  "experience.workana_point3": {
    en: "Maintained excellent client ratings across completed projects.",
    pt: "Mantive excelentes avaliações de clientes através de projetos concluídos.",
  },
  "projects.eyebrow": { en: "Projects", pt: "Projetos" },
  "projects.title": {
    en: "Recent work I'm proud of",
    pt: "Trabalhos recentes dos quais me orgulho",
  },
  "projects.ai_email_title": { en: "AI Email Summary", pt: "Resumo de Email com IA" },
  "projects.ai_email_description": {
    en: "AI-powered email summarization using Python and Gemini API to distill long threads into actionable briefs.",
    pt: "Resumo de emails com IA usando Python e API Gemini para destilar longas conversas em resumos acionáveis.",
  },
  "projects.simple_automation_app_title": { en: "Simple LLM Automation App", pt: "App automação simples LLM" },
  "projects.simple_automation_app_description": {
    en: "A Python script that automates querying the Llama 3 model through the Groq API, processing responses, and exporting organized results to CSV using Pandas.",
    pt: "Script em Python que automatiza o envio de perguntas para o modelo Llama 3 via API da Groq, processando as respostas e exportando os resultados organizados em formato CSV via Pandas.",
  },
  "projects.groq_sentiment_classifier_title": { en: "Groq Sentiment Classifier", pt: "Classificador de Sentimentos Groq" },
  "projects.groq_sentiment_classifier_description": {
    en: "Sentiment analysis application using the Groq API to classify text into different emotional categories.",
    pt: "Aplicação de análise de sentimentos utilizando a API da Groq para classificar textos em diferentes categorias emocionais.",
  },
  "projects.trip_ai_langchain_title": { en: "Trip AI Langchain", pt: "Trip AI Langchain" },
  "projects.trip_ai_langchain_description": {
    en: "AI travel assistant built with LangChain, automating itinerary planning and trip recommendations.",
    pt: "Assistente de viagem com IA construído com LangChain, automatizando planejamento de roteiros e recomendações de viagem.",
  },
  "projects.view_project": { en: "View Project", pt: "Ver Projeto" },
  "projects.python_tag": { en: "Python", pt: "Python" },
  "projects.langchain_tag": { en: "LangChain", pt: "LangChain" },
  "projects.groq_tag": { en: "Groq API", pt: "API Groq" },
  "projects.pandas_tag": { en: "Pandas", pt: "Pandas" },
  "projects.generative_ai_tag": { en: "Generative AI", pt: "IA Generativa" },
  "projects.api_tag": { en: "API", pt: "API" },
  "projects.github": { en: "GitHub", pt: "GitHub" },
  "skills.eyebrow": { en: "Skills", pt: "Habilidades" },
  "skills.title": { en: "Technologies I work with", pt: "Tecnologias com as quais trabalho" },
  "skills.ai_title": { en: "AI & Python", pt: "IA & Python" },
  "skills.software_title": { en: "Software Development", pt: "Desenvolvimento de Software" },
  "skills.frontend_title": { en: "Frontend", pt: "Frontend" },
  "skills.tools_title": { en: "Tools", pt: "Ferramentas" },
  "skills.python": { en: "Python", pt: "Python" },
  "skills.generative_ai": { en: "Generative AI", pt: "IA Generativa" },
  "skills.langchain": { en: "LangChain", pt: "LangChain" },
  "skills.rag": { en: "RAG", pt: "RAG" },
  "skills.prompt_engineering": { en: "Prompt Engineering", pt: "Prompt Engineering" },
  "skills.machine_learning": { en: "Machine Learning", pt: "Machine Learning" },
  "skills.llm_applications": { en: "LLM Applications", pt: "Aplicações de LLM" },
  "skills.apis": { en: "APIs", pt: "APIs" },
  "skills.nodejs": { en: "Node.js", pt: "Node.js" },
  "skills.sql": { en: "SQL", pt: "SQL" },
  "skills.postgresql": { en: "PostgreSQL", pt: "PostgreSQL" },
  "skills.javascript": { en: "JavaScript", pt: "JavaScript" },
  "skills.typescript": { en: "TypeScript", pt: "TypeScript" },
  "skills.react": { en: "React", pt: "React" },
  "skills.nextjs": { en: "Next.js", pt: "Next.js" },
  "skills.tailwindcss": { en: "TailwindCSS", pt: "TailwindCSS" },
  "skills.git": { en: "Git", pt: "Git" },
  "skills.github": { en: "GitHub", pt: "GitHub" },
  "skills.vscode": { en: "VSCode", pt: "VSCode" },
  "skills.vercel": { en: "Vercel", pt: "Vercel" },
  "ai.eyebrow": { en: "AI Journey", pt: "Jornada de IA" },
  "ai.title": { en: "My path into AI Engineering", pt: "Meu caminho para Engenharia de IA" },
  "ai.description": {
    en: "Exploring the intersection of software development and artificial intelligence.",
    pt: "Explorando a intersecção entre desenvolvimento de software e inteligência artificial.",
  },
  "ai.generative_ai": { en: "Generative AI", pt: "IA Generativa" },
  "ai.langchain": { en: "LangChain", pt: "LangChain" },
  "ai.rag_systems": { en: "RAG Systems", pt: "Sistemas RAG" },
  "ai.python": { en: "Python", pt: "Python" },
  "ai.machine_learning": { en: "Machine Learning", pt: "Machine Learning" },
  "ai.ai_agents": { en: "AI Agents", pt: "Agentes de IA" },
  "ai.llm_applications": { en: "LLM Applications", pt: "Aplicações de LLM" },
  "ai.continuous_learning": { en: "Continuous Learning", pt: "Aprendizado Contínuo" },
  "experience.eyebrow": { en: "Experience", pt: "Experiência" },
  "experience.title": { en: "My professional journey", pt: "Minha jornada profissional" },
  "projects.description": {
    en: "A selection of projects showcasing my skills and approach to problem-solving.",
    pt: "Uma seleção de projetos que demonstram minhas habilidades e abordagem para resolução de problemas.",
  },
  "contact.footer": {
    en: "© 2026 Gabriel Nicolas. Built with care.",
    pt: "© 2026 Gabriel Nicolas. Construído com cuidado.",
  },
  "contact.location": { en: "Brazil · Remote-friendly", pt: "Brasil · Remoto-friendly" },
  "skills.description": {
    en: "Technologies and tools I use to build software, automations and AI-powered applications.",
    pt: "Tecnologias e ferramentas que utilizo para desenvolver software, automações e aplicações com IA.",
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return (saved as Language) || "en";
    }
    return "en";
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return React.createElement(
    I18nContext.Provider,
    { value: { language, setLanguage, t } },
    children,
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
