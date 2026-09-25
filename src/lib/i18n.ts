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
  "nav.download_cv": { en: "Download CV", pt: "Baixar CV" },
  "hero.transitioning": {
    en: "Transitioning into AI Engineering",
    pt: "Transicionando para Engenharia de IA",
  },
  "hero.description": {
    en: 'Software Developer building applications with <span class="text-foreground font-medium">Python</span>, <span class="text-foreground font-medium">Generative AI</span>, <span class="text-foreground font-medium">RAG</span> and <span class="text-foreground font-medium">AI Agents</span>. Transitioning into AI Engineering.',
    pt: 'Desenvolvedor de Software construindo aplicações com <span class="text-foreground font-medium">Python</span>, <span class="text-foreground font-medium">IA Generativa</span>, <span class="text-foreground font-medium">RAG</span> e <span class="text-foreground font-medium">agentes inteligentes</span>. Em formação para Engenharia de IA.',
  },
  "hero.view_projects": { en: "View Projects", pt: "Ver Projetos" },
  "hero.download_cv": { en: "Download CV", pt: "Baixar CV" },
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
    en: "I'm a Software Developer currently working as Development Analyst I at Cadmus. I started as an intern and was promoted to a full-time role after consistently delivering value in production systems and critical business initiatives.",
    pt: "Sou Desenvolvedor de Software e atualmente atuo como Analista de Desenvolvimento I na Cadmus. Comecei como estagiário e fui efetivado após entregar valor consistente em sistemas de produção e iniciativas críticas de negócio.",
  },
  "about.years_building": { en: "Years building software", pt: "Anos construindo software" },
  "about.paragraph2": {
    en: "I'm actively transitioning into AI Engineering — building real projects with Python, Generative AI, LangChain, RAG and AI Agents. My goal is to develop applications that bridge large language models with tangible business outcomes.",
    pt: "Estou ativamente em transição para Engenharia de IA — construindo projetos reais com Python, IA Generativa, LangChain, RAG e Agentes de IA. Meu objetivo é desenvolver aplicações que conectem modelos de linguagem a resultados concretos de negócio.",
  },
  "about.projects_shipped": { en: "Projects shipped", pt: "Projetos entregues" },
  "about.paragraph3": {
    en: "Previously I worked as a freelance developer on Workana, building web projects for international clients. I value clean code, continuous learning and solutions that generate real, measurable impact.",
    pt: "Anteriormente atuei como desenvolvedor freelancer na Workana, construindo projetos web para clientes internacionais. Valorizo código limpo, aprendizado contínuo e soluções que geram impacto real e mensurável.",
  },
  "about.engineering_focus": { en: "Engineering focus", pt: "Foco de engenharia" },
  "contact.eyebrow": { en: "Contact", pt: "Contato" },
  "contact.title": { en: "Let's build something remarkable.", pt: "Vamos construir algo notável." },
  "contact.description": {
    en: "Open to AI Engineering and Python Development opportunities. Let's talk about how I can add value to your team.",
    pt: "Aberto a oportunidades em Engenharia de IA e Desenvolvimento Python. Vamos conversar sobre como posso agregar valor ao seu time.",
  },
  "contact.get_in_touch": { en: "Get in touch", pt: "Entre em contato" },
  "contact.email": { en: "Email", pt: "E-mail" },
  "contact.github": { en: "GitHub", pt: "GitHub" },
  "contact.linkedin": { en: "LinkedIn", pt: "LinkedIn" },
  "experience.cadmus_role": { en: "Development Analyst I", pt: "Analista Desenvolvedor I" },
  "experience.workana_role": { en: "Software Development Intern", pt: "Estágio em Desenvolvimento de Software" },
  "experience.cadmus_period": { en: "Feb 2026 – Present", pt: "Fev 2026 – Presente" },
  "experience.workana_period": { en: "Mar 2025 – Feb 2026", pt: "Mar 2025 – Fev 2026" },
  "experience.cadmus_point1": {
    en: "Web application development using .NET, Node.js, SQL, PostgreSQL, and AWS.",
    pt: "Desenvolvimento de aplicações web usando .NET, Node.js, SQL, PostgreSQL e AWS.",
  },
  "experience.cadmus_point2": {
    en: "Integration with payment APIs.",
    pt: "Integração com APIs de pagamento.",
  },
  "experience.cadmus_point3": {
    en: "Maintenance and evolution of legacy applications.",
    pt: "Manutenção e evolução de aplicações legadas.",
  },
  "experience.cadmus_point4": {
    en: "Participation in code reviews and pair programming.",
    pt: "Participação em code reviews e pair programming.",
  },
  "experience.workana_point1": {
    en: "Web application development using .NET, Node.js, SQL, PostgreSQL, and AWS.",
    pt: "Desenvolvimento de aplicações web usando .NET, Node.js, SQL, PostgreSQL e AWS.",
  },
  "experience.workana_point2": {
    en: "Development of a RAG-based solution that reduced support team query time by approximately 50%.",
    pt: "Desenvolvimento de solução baseada em RAG que reduziu em aproximadamente 50% o tempo gasto pelo time de suporte na consulta de informações internas.",
  },
  "experience.workana_point3": {
    en: "",
    pt: "",
  },
  "projects.eyebrow": { en: "Projects", pt: "Projetos" },
  "projects.title": {
    en: "Recent work I'm proud of",
    pt: "Trabalhos recentes dos quais me orgulho",
  },
  "projects.ai_email_title": { en: "AI Email Summary", pt: "Resumo de Email com IA" },
  "projects.ai_email_description": {
    en: "AI-powered email summarization pipeline using Python and Gemini API. Distills long email threads into structured, actionable briefs — reducing reading time and improving decision-making.",
    pt: "Pipeline de resumo de emails com IA usando Python e API Gemini. Destila longas conversas em resumos estruturados e acionáveis — reduzindo tempo de leitura e melhorando a tomada de decisão.",
  },
  "projects.simple_automation_app_title": { en: "LLM Automation Pipeline", pt: "Pipeline de Automação com LLM" },
  "projects.simple_automation_app_description": {
    en: "Automated batch querying pipeline for Llama 3 via Groq API. Processes structured inputs, collects model responses and exports organized results to CSV — enabling scalable AI-assisted analysis.",
    pt: "Pipeline de consulta em lote automatizado para o Llama 3 via API Groq. Processa entradas estruturadas, coleta respostas do modelo e exporta resultados organizados em CSV — possibilitando análises assistidas por IA em escala.",
  },
  "projects.groq_sentiment_classifier_title": { en: "Groq Sentiment Classifier", pt: "Classificador de Sentimentos Groq" },
  "projects.groq_sentiment_classifier_description": {
    en: "Production-ready sentiment analysis system using Groq API and LLMs. Classifies text across multiple emotional categories with high accuracy, designed for integration with data pipelines.",
    pt: "Sistema de análise de sentimentos pronto para produção usando API Groq e LLMs. Classifica textos em múltiplas categorias emocionais com alta precisão, projetado para integração com pipelines de dados.",
  },
  "projects.trip_ai_langchain_title": { en: "Trip AI — LangChain Agent", pt: "Trip AI — Agente LangChain" },
  "projects.trip_ai_langchain_description": {
    en: "Conversational AI travel assistant built with LangChain agents and tool-calling. Automates itinerary planning, destination recommendations and trip optimization through natural language interaction.",
    pt: "Assistente de viagem conversacional com IA construído com agentes LangChain e chamada de ferramentas. Automatiza planejamento de roteiros, recomendações de destinos e otimização de viagens através de linguagem natural.",
  },
  "projects.view_project": { en: "View Project", pt: "Ver Projeto" },
  "projects.live_demo": { en: "Live Demo", pt: "Demo ao Vivo" },
  "projects.python_tag": { en: "Python", pt: "Python" },
  "projects.langchain_tag": { en: "LangChain", pt: "LangChain" },
  "projects.groq_tag": { en: "Groq API", pt: "API Groq" },
  "projects.pandas_tag": { en: "Pandas", pt: "Pandas" },
  "projects.generative_ai_tag": { en: "Generative AI", pt: "IA Generativa" },
  "projects.api_tag": { en: "API", pt: "API" },
  "projects.github": { en: "GitHub", pt: "GitHub" },
  "projects.description": {
    en: "A curated selection of AI and Python projects, each solving a real problem.",
    pt: "Uma seleção curada de projetos de IA e Python, cada um resolvendo um problema real.",
  },
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
  "skills.ai_engineering": { en: "AI Engineering", pt: "Engenharia de IA" },
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
  "skills.description": {
    en: "Technologies and tools I use to build software, automations and AI-powered applications.",
    pt: "Tecnologias e ferramentas que utilizo para desenvolver software, automações e aplicações com IA.",
  },
  "skills.proficiency.expert": { en: "Expert", pt: "Expert" },
  "skills.proficiency.advanced": { en: "Advanced", pt: "Avançado" },
  "skills.proficiency.intermediate": { en: "Intermediate", pt: "Intermediário" },
  "skills.proficiency.learning": { en: "Learning", pt: "Aprendendo" },
  "ai.eyebrow": { en: "AI Journey", pt: "Jornada de IA" },
  "ai.title": { en: "My path into AI Engineering", pt: "Meu caminho para Engenharia de IA" },
  "ai.subtitle": {
    en: "Active learning path",
    pt: "Trilha de aprendizado ativa",
  },
  "ai.description": {
    en: "I'm actively building expertise at the intersection of software engineering and AI. Every week I'm learning, building, and shipping AI-powered projects.",
    pt: "Estou construindo ativamente expertise na interseção entre engenharia de software e IA. Toda semana aprendendo, construindo e entregando projetos com IA.",
  },
  "ai.currently_studying": { en: "Currently studying", pt: "Estudando atualmente" },
  "ai.topic.genai": { en: "Generative AI & LLMs", pt: "IA Generativa & LLMs" },
  "ai.topic.genai_desc": {
    en: "Working with GPT-4, Gemini and Llama 3 to build real production pipelines.",
    pt: "Trabalhando com GPT-4, Gemini e Llama 3 para construir pipelines reais de produção.",
  },
  "ai.topic.langchain": { en: "LangChain & Agents", pt: "LangChain & Agentes" },
  "ai.topic.langchain_desc": {
    en: "Building multi-step AI agents with tool-calling, memory and chain orchestration.",
    pt: "Construindo agentes de IA com múltiplos passos, chamada de ferramentas, memória e orquestração.",
  },
  "ai.topic.rag": { en: "RAG Architectures", pt: "Arquiteturas RAG" },
  "ai.topic.rag_desc": {
    en: "Implementing retrieval-augmented generation systems with vector databases.",
    pt: "Implementando sistemas de geração aumentada por recuperação com bancos de dados vetoriais.",
  },
  "ai.topic.python": { en: "Python Engineering", pt: "Engenharia Python" },
  "ai.topic.python_desc": {
    en: "Building scalable, clean Python codebases for AI pipelines and automations.",
    pt: "Construindo bases de código Python escaláveis e limpas para pipelines de IA e automações.",
  },
  "ai.progress_label": { en: "Progress", pt: "Progresso" },
  "ai.projects_built": { en: "AI projects built", pt: "Projetos de IA construídos" },
  "ai.weeks_studying": { en: "Weeks actively studying AI", pt: "Semanas estudando IA ativamente" },
  "ai.llm_providers": { en: "LLM Providers", pt: "Provedores de LLM" },
  "ai.goal": {
    en: "Goal: AI Engineer",
    pt: "Meta: Engenheiro de IA",
  },
  "ai.learning_roadmap": { en: "Learning Roadmap", pt: "Trilha de Aprendizado" },
  "ai.roadmap.software_dev": { en: "Software Dev", pt: "Desenvolvimento" },
  "ai.roadmap.python_apis": { en: "Python & APIs", pt: "Python & APIs" },
  "ai.roadmap.generative_ai": { en: "Generative AI", pt: "IA Generativa" },
  "ai.roadmap.langchain_rag": { en: "LangChain & RAG", pt: "LangChain & RAG" },
  "ai.roadmap.ai_engineering": { en: "AI Engineering", pt: "Engenharia de IA" },
  "ai.roadmap.mlops": { en: "MLOps", pt: "MLOps" },
  "about.role_company": { en: "Development Analyst I · Cadmus", pt: "Analista Desenvolvedor I · Cadmus" },
  "about.open_to_opportunities": { en: "Open to opportunities", pt: "Aberto a oportunidades" },
  "experience.type_fulltime": { en: "Full-time", pt: "Efetivo" },
  "experience.type_internship": { en: "Internship", pt: "Estágio" },
  "experience.eyebrow": { en: "Experience", pt: "Experiência" },
  "experience.title": { en: "My professional journey", pt: "Minha jornada profissional" },
  "contact.footer": {
    en: "© 2026 Gabriel Nicolas. Built with care.",
    pt: "© 2026 Gabriel Nicolas. Construído com cuidado.",
  },
  "contact.location": { en: "Brazil · Remote-friendly", pt: "Brasil · Disponível para trabalho remoto" },
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
