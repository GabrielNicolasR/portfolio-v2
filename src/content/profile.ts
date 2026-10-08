/**
 * Single source of truth for all professional content.
 *
 * Every user-facing string that varies by language is a `Localized<T>` value.
 * Components never hardcode copy — they read from here (content) or from
 * `src/i18n/dictionary.ts` (UI labels). To update the portfolio, edit this file only.
 */

export type Language = "pt" | "en";
export type Localized<T = string> = Record<Language, T>;

/* -------------------------------------------------------------------------- */
/*                                   Profile                                  */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Gabriel Nicolas",
  fullName: "Gabriel Nicolas Rocha de Sá",
  initials: "GN",
  photo: "/gabriel-nicolas.png",
  cv: "/gabriel-nicolas-cv.pdf",
  location: { pt: "São Paulo · Brasil (Remoto)", en: "São Paulo · Brazil (Remote)" } as Localized,
  role: {
    pt: "Engenheiro de Software & IA",
    en: "Software & AI Engineer",
  } as Localized,
  headline: {
    pt: "Construo sistemas inteligentes, robustos e escaláveis que transformam a operação do seu negócio.",
    en: "I build intelligent, robust, and scalable systems that transform how your business operates.",
  } as Localized,
  summary: {
    pt: "Sou um Desenvolvedor de Software especializado em unir a engenharia tradicional à Inteligência Artificial. Com um histórico sólido no mercado de capitais construindo automações e sistemas críticos, atuo no design e desenvolvimento de soluções orientadas a LLMs, arquiteturas RAG e agentes autônomos para gerar eficiência e impacto real.",
    en: "I am a Software Developer specializing at the intersection of traditional engineering and Artificial Intelligence. With a strong track record in the capital markets building automations and critical systems, I design and develop solutions powered by LLMs, RAG architectures, and autonomous agents to drive efficiency and real-world impact.",
  } as Localized,
  focusAreas: ["Engenharia de IA", "Python", "RAG & LLMs", "Arquitetura de Software"],
  availability: {
    pt: "Disponível para novos desafios",
    en: "Available for new challenges",
  } as Localized,
  contact: {
    email: "gabrielrochasa@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabrielnicolasdev",
    linkedinHandle: "gabrielnicolasdev",
    github: "https://github.com/GabrielNicolasR",
    githubHandle: "GabrielNicolasR",
  },
};

/** Key figures shown in the hero — each one is backed by the CV. */
export const metrics: { value: string; label: Localized }[] = [
  {
    value: "50%",
    label: {
      pt: "Redução no tempo de suporte através da implementação de IA",
      en: "Reduction in support time through AI implementation",
    },
  },
  {
    value: "4+",
    label: { pt: "Anos de experiência construindo software de alto nível", en: "Years of experience building high-level software" },
  },
  {
    value: "100%",
    label: { pt: "Satisfação e avaliação máxima em projetos independentes", en: "Client satisfaction and top ratings on independent projects" },
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Experience                                 */
/* -------------------------------------------------------------------------- */

export interface Role {
  title: Localized;
  type: Localized;
  start: Localized;
  end: Localized | null; // null = current
  highlights: Localized[];
  stack: string[];
}

export interface Company {
  name: string;
  context: Localized;
  location: Localized;
  roles: Role[]; // newest first
}

export const experience: Company[] = [
  {
    name: "Cadmus Soluções em TI",
    context: {
      pt: "Alocado no cliente Vórtx (Mercado de Capitais)",
      en: "Allocated to client Vórtx (Capital Markets)",
    },
    location: { pt: "São Paulo, SP", en: "São Paulo, Brazil" },
    roles: [
      {
        title: { pt: "Analista Desenvolvedor I", en: "Software Developer I" },
        type: { pt: "Efetivo", en: "Full-time" },
        start: { pt: "Fev 2026", en: "Feb 2026" },
        end: null,
        highlights: [
          {
            pt: "Arquitetei e desenvolvi aplicações web de missão crítica, garantindo estabilidade e performance em larga escala.",
            en: "Architected and developed mission-critical web applications, ensuring stability and performance at scale.",
          },
          {
            pt: "Liderei a integração com APIs de pagamento complexas, modernizando fluxos financeiros do negócio.",
            en: "Led the integration with complex payment APIs, modernizing the business's financial flows.",
          },
          {
            pt: "Fui responsável por modernizar e sustentar aplicações legadas, reduzindo a dívida técnica da operação.",
            en: "Responsible for modernizing and maintaining legacy applications, reducing the operation's technical debt.",
          },
          {
            pt: "Atuei como o principal ponto de contato direto do time de Produto para incidentes em produção. Assumi a responsabilidade de ponta a ponta: desde entender a dor do cliente, mapear endpoints e investigar múltiplos repositórios, até o debugging e a resolução ágil do problema.",
            en: "Acted as the main direct point of contact for the Product team regarding production incidents. Assumed end-to-end responsibility: from understanding the client's pain point, mapping endpoints, and investigating across multiple repositories, to debugging and agile problem resolution.",
          },
          {
            pt: "Promovi a cultura de qualidade de código através de code reviews rigorosos e sessões de pair programming.",
            en: "Fostered a culture of code quality through rigorous code reviews and pair programming sessions.",
          },
        ],
        stack: [".NET", "Node.js", "SQL", "PostgreSQL", "AWS", "Integrações"],
      },
      {
        title: { pt: "Desenvolvedor de Software Intern", en: "Software Development Intern" },
        type: { pt: "Estágio", en: "Internship" },
        start: { pt: "Mar 2025", en: "Mar 2025" },
        end: { pt: "Fev 2026", en: "Feb 2026" },
        highlights: [
          {
            pt: "Projetei e entreguei uma solução inovadora baseada em IA (RAG) que cortou pela metade o tempo de busca de informações do time de suporte.",
            en: "Designed and delivered an innovative AI-based solution (RAG) that halved the information retrieval time for the support team.",
          },
          {
            pt: "Atuei ativamente no desenvolvimento full-stack das aplicações centrais, ganhando maturidade em arquiteturas de nuvem.",
            en: "Actively contributed to the full-stack development of core applications, gaining maturity in cloud architectures.",
          },
          {
            pt: "Reconhecido e promovido rapidamente devido à alta capacidade de entrega em ambientes de produção de alta exigência.",
            en: "Recognized and rapidly promoted due to high delivery capability in demanding production environments.",
          },
        ],
        stack: ["RAG", "Python", ".NET", "Node.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  {
    name: "Workana",
    context: { pt: "Plataforma de talentos globais", en: "Global talent platform" },
    location: { pt: "Remoto", en: "Remote" },
    roles: [
      {
        title: { pt: "Engenheiro Frontend Independente", en: "Independent Frontend Engineer" },
        type: { pt: "Freelance", en: "Freelance" },
        start: { pt: "Out 2022", en: "Oct 2022" },
        end: { pt: "Out 2024", en: "Oct 2024" },
        highlights: [
          {
            pt: "Entreguei com sucesso 8 projetos focados em performance, SEO e alta conversão para clientes internacionais.",
            en: "Successfully delivered 8 projects focused on performance, SEO, and high conversion for international clients.",
          },
          {
            pt: "Mantive um histórico impecável com nota máxima de satisfação em todos os engajamentos, refletindo o compromisso com a excelência técnica.",
            en: "Maintained a flawless track record with maximum satisfaction ratings across all engagements, reflecting a commitment to technical excellence.",
          },
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "UI/UX", "WordPress"],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  title: Localized;
  category: Localized;
  description: Localized;
  highlights: Localized[];
  stack: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "question-automation",
    featured: true,
    title: { pt: "Pipeline de Automação com LLMs", en: "LLM Automation Pipeline" },
    category: { pt: "Processamento Assíncrono · LLM", en: "Asynchronous Processing · LLM" },
    description: {
      pt: "Um sistema inteligente de automação de respostas em massa. Desenvolvido para escalar operações, ele consulta modelos avançados (Llama 3 via Groq) e estrutura grandes volumes de dados de forma autônoma.",
      en: "An intelligent mass-response automation system. Built to scale operations, it queries advanced models (Llama 3 via Groq) and structures large volumes of data autonomously.",
    },
    highlights: [
      {
        pt: "Arquitetura otimizada para lidar com processos em lote, isolando a lógica de negócio das integrações de IA.",
        en: "Optimized architecture for handling batch processes, isolating business logic from AI integrations.",
      },
      {
        pt: "Gestão robusta de credenciais de infraestrutura e variáveis de ambiente.",
        en: "Robust management of infrastructure credentials and environment variables.",
      },
      {
        pt: "Pipeline de dados fluído utilizando Pandas para geração de relatórios analíticos ricos e imediatos.",
        en: "Fluid data pipeline using Pandas to generate rich and immediate analytical reports.",
      },
    ],
    stack: ["Python", "Groq API", "Llama 3", "Pandas", "Data Engineering"],
    repo: "https://github.com/GabrielNicolasR/automacao-perguntas-llm",
  },
  {
    id: "email-summary",
    featured: true,
    title: { pt: "Triagem Autônoma de Comunicações", en: "Autonomous Communication Triage" },
    category: { pt: "Agentes · NLP · OpenAI", en: "Agents · NLP · OpenAI" },
    description: {
      pt: "Uma ferramenta de produtividade corporativa que utiliza a IA para orquestrar e resumir fluxos massivos de e-mail. Destila conversas longas e extrai prioridades acionáveis, poupando horas de triagem humana.",
      en: "A corporate productivity tool that uses AI to orchestrate and summarize massive email flows. It distills long conversations and extracts actionable priorities, saving hours of human triage.",
    },
    highlights: [
      {
        pt: "Implementação de Extração de Dados Estruturados para classificar a urgência (Alta, Média, Baixa) com precisão cirúrgica.",
        en: "Implementation of Structured Data Extraction to accurately classify urgency (High, Medium, Low).",
      },
      {
        pt: "Utilização avançada do ecossistema LangChain e modelos Pydantic para garantir a integridade dos dados retornados pelas LLMs.",
        en: "Advanced use of the LangChain ecosystem and Pydantic models to ensure the integrity of data returned by LLMs.",
      },
      {
        pt: "Persistência inteligente de resumos, facilitando a rápida tomada de decisões estratégicas.",
        en: "Intelligent persistence of summaries, facilitating rapid strategic decision-making.",
      },
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Pydantic", "Workflow Automation"],
    repo: "https://github.com/GabrielNicolasR/ai-email-summary",
  },
  {
    id: "sentiment-classifier",
    title: { pt: "Motor Analítico de Sentimentos", en: "Analytical Sentiment Engine" },
    category: { pt: "Machine Learning · Classificação", en: "Machine Learning · Classification" },
    description: {
      pt: "Um sistema escalável de processamento de linguagem natural (NLP). Desenvolvido para analisar o tom e o sentimento de dados não estruturados, transformando textos genéricos em insights estratégicos quantificáveis.",
      en: "A scalable natural language processing (NLP) system. Built to analyze the tone and sentiment of unstructured data, transforming generic texts into quantifiable strategic insights.",
    },
    highlights: [
      {
        pt: "Engenharia de prompts sofisticada para categorização semântica precisa através da API Groq.",
        en: "Sophisticated prompt engineering for precise semantic categorization via the Groq API.",
      },
      {
        pt: "Preparado para integração imediata com pipelines de Business Intelligence (BI).",
        en: "Ready for immediate integration with Business Intelligence (BI) pipelines.",
      },
    ],
    stack: ["Python", "Groq API", "Pandas", "NLP"],
    repo: "https://github.com/GabrielNicolasR/groq-sentiment-classifier",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Skills                                   */
/* -------------------------------------------------------------------------- */

export type SkillGroupId = "ai" | "backend" | "frontend" | "cloud" | "tools";

export interface SkillGroup {
  id: SkillGroupId;
  title: Localized;
  description: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    id: "ai",
    title: { pt: "Engenharia de IA & LLMs", en: "AI Engineering & LLMs" },
    description: {
      pt: "Desenvolvimento de agentes autônomos, recuperação avançada e integração de modelos.",
      en: "Autonomous agent development, advanced retrieval, and model integration.",
    },
    items: ["LangChain", "RAG Architecture", "OpenAI API", "Groq", "Prompt Engineering", "Pydantic", "Pandas"],
  },
  {
    id: "backend",
    title: { pt: "Backend & Arquitetura", en: "Backend & Architecture" },
    description: {
      pt: "Design de APIs robustas, microsserviços e persistência de dados complexos.",
      en: "Robust API design, microservices, and complex data persistence.",
    },
    items: ["Python", ".NET / C#", "Node.js", "TypeScript", "SQL", "PostgreSQL", "MySQL", "RESTful APIs"],
  },
  {
    id: "frontend",
    title: { pt: "Frontend & Experiência", en: "Frontend & Experience" },
    description: {
      pt: "Criação de interfaces web de alta performance, escaláveis e focadas no utilizador.",
      en: "Creation of high-performance, scalable, and user-focused web interfaces.",
    },
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind"],
  },
  {
    id: "cloud",
    title: { pt: "Cloud & Operações", en: "Cloud & Operations" },
    description: {
      pt: "Infraestrutura resiliente, orquestração e esteiras de entrega contínua.",
      en: "Resilient infrastructure, orchestration, and continuous delivery pipelines.",
    },
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Linux Environment"],
  },
  {
    id: "tools",
    title: { pt: "Ferramentas & Metodologias", en: "Tools & Methodologies" },
    description: {
      pt: "Ecosistema de desenvolvimento moderno e práticas de engenharia ágil.",
      en: "Modern development ecosystem and agile engineering practices.",
    },
    items: ["Git / GitHub", "Jira", "Postman", "Agile (Scrum/Kanban)", "Clean Code", "System Design"],
  },
];

/* -------------------------------------------------------------------------- */
/*                         Education & Certifications                         */
/* -------------------------------------------------------------------------- */

export interface EducationItem {
  title: Localized;
  institution: string;
  period: Localized;
  inProgress?: boolean;
}

export const education: EducationItem[] = [
  {
    title: {
      pt: "Bacharelado em Análise e Desenvolvimento de Sistemas",
      en: "Bachelor's in Systems Analysis and Development",
    },
    institution: "Estácio",
    period: { pt: "2024 – 2027", en: "2024 – 2027" },
    inProgress: true,
  },
];

export const courses: EducationItem[] = [
  {
    title: { pt: "Programa de Formação em Engenharia de Agentes de IA", en: "AI Agents Engineering Career Track" },
    institution: "Alura",
    period: { pt: "2026 – Em andamento", en: "2026 – In progress" },
    inProgress: true,
  },
  {
    title: { pt: "Formação Intensiva em Desenvolvimento de Software", en: "Intensive Software Development Program" },
    institution: "curso.dev · Filipe Deschamps",
    period: { pt: "2026 – Em andamento", en: "2026 – In progress" },
    inProgress: true,
  },
  {
    title: { pt: "DevQuest · Especialização em Arquitetura Full-Stack", en: "DevQuest · Full-Stack Architecture Specialization" },
    institution: "Dev em Dobro",
    period: { pt: "2023 – 2025", en: "2023 – 2025" },
  },
];

export const certifications: { title: Localized; issuer: string }[] = [
  {
    title: {
      pt: "Git e GitHub: colaboração em projetos open-source e corporativos",
      en: "Git & GitHub: collaborating on open-source and corporate projects",
    },
    issuer: "Alura",
  },
  { title: { pt: "C#: Fundamentos e design orientado a objetos", en: "C#: Fundamentals and object-oriented design" }, issuer: "Alura" },
  {
    title: {
      pt: "Governança e Arquitetura de Dados",
      en: "Data Governance and Architecture",
    },
    issuer: "Alura",
  },
  { title: { pt: "Scrum: Entrega de valor em frameworks ágeis", en: "Scrum: Value delivery in agile frameworks" }, issuer: "Alura" },
  { title: { pt: "Kanban: Otimização contínua de fluxo de trabalho", en: "Kanban: Continuous workflow optimization" }, issuer: "Alura" },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Técnico Avançado (A2)", en: "Advanced Technical (A2)" } },
];

/** AI Engineering learning path (from LinkedIn profile). */
export const learningPath: Localized[] = [
  { pt: "Python corporativo para Inteligência Artificial", en: "Corporate Python for Artificial Intelligence" },
  { pt: "Engenharia RAG (Retrieval-Augmented Generation)", en: "RAG Engineering (Retrieval-Augmented Generation)" },
  { pt: "Ecossistemas LangChain e LangGraph", en: "LangChain & LangGraph Ecosystems" },
  { pt: "NLP avançado e representações vetoriais (Embeddings)", en: "Advanced NLP and vector representations (Embeddings)" },
  { pt: "Fundamentos de Deep Learning com PyTorch", en: "Deep Learning fundamentals with PyTorch" },
  { pt: "Práticas de MLOps e observabilidade de modelos LLM", en: "MLOps practices and LLM model observability" },
  { pt: "Design e orquestração de Agentes Autônomos", en: "Design and orchestration of Autonomous Agents" },
];
