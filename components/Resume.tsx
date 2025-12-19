"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

// Importações dinâmicas para evitar problemas de SSR
const jsPDF = dynamic(() => import("jspdf").then((mod) => mod.default), { ssr: false });
const html2canvas = dynamic(() => import("html2canvas"), { ssr: false });

type Language = "pt" | "en";

const resumeContent = {
  pt: {
    header: {
      name: "Arthur Bezerra",
      title: "Automation Developer | Full Stack Developer | n8n Specialist",
      email: "arthur@vicentimmed.com.br",
      linkedin: "linkedin.com/in/arthur-n8n-dev",
      github: "github.com/artubss",
      whatsapp: "+55 84 99419-8787",
      location: "Brasil",
      age: "24 anos",
    },
    sections: {
      summary: {
        title: "Resumo Profissional",
        content: "Automation Developer com 2 anos de experiência intensiva em desenvolvimento de sistemas escaláveis e automações complexas. Especialista em n8n, integrações WhatsApp, automações com IA e desenvolvimento full stack.",
        results: [
          "Reduzi custos operacionais em 60% através de automações inteligentes",
          "Sistemas processando 5 mil+ transações/dia em produção 24/7",
          "Time-to-market de 3-5 dias para MVPs funcionais",
          "50+ workflows n8n em produção atendendo clientes reais",
        ],
        closing: "Transição de Medicina para Tecnologia demonstra adaptabilidade e paixão por construir soluções que resolvem problemas reais. Experiência em produção com clientes reais, sistemas 24/7 e deploy rápido.",
      },
      n8n: {
        title: "Expertise em n8n",
        subtitle: "Especialização Avançada:",
        items: [
          "50+ workflows em produção gerenciando operações críticas",
          "Custom nodes development para integrações específicas",
          "Webhooks complexos e error handling robusto",
          "Integração com 20+ serviços externos (APIs, databases, messaging)",
          "Otimização de performance (500+ execuções/minuto)",
          "Arquitetura de workflows escaláveis e manuteníveis",
          "Debugging e monitoramento de sistemas em produção",
        ],
      },
      experience: [
        {
          company: "Vicentimmed",
          role: "Automation Developer | Full Stack",
          period: "Mar 2025 - Presente (3 meses)",
          items: [
            "Desenvolvimento de automações com n8n em produção 24/7",
            "Integrações WhatsApp (Uazapi, Evolution API) processando 300+ mensagens/dia",
            "Desenvolvimento full stack com Next.js e Node.js",
            "Integração com APIs de IA (Gemini, OpenAI) para atendimento inteligente",
            "Gerenciamento de banco de dados PostgreSQL/Supabase",
            "Redução de 85% no tempo de resposta ao cliente",
          ],
        },
        {
          company: "Cachina",
          role: "Automation Developer | Full Stack",
          period: "Out 2024 - Fev 2025 (5 meses)",
          items: [
            "Criação de workflows automatizados com n8n para múltiplos clientes",
            "Desenvolvimento de sistemas de automação escaláveis",
            "Integrações com múltiplas APIs e serviços (REST/GraphQL)",
            "Manutenção e otimização de sistemas em produção",
            "Implementação de error handling e retry logic",
          ],
          note: "Saí por melhores condições de trabalho e crescimento profissional",
        },
      ],
      solutions: {
        title: "Soluções Implementadas",
        items: [
          { text: "Automação de atendimento com IA", result: "Redução de 80% no tempo de resposta" },
          { text: "Migração de sistemas legados", result: "Arquitetura moderna e escalável" },
          { text: "Integração multi-canal", result: "WhatsApp, Email, SMS, Web unificada" },
          { text: "Pipelines de dados", result: "Análise e Business Intelligence" },
          { text: "Sistemas de notificação em tempo real", result: "WebSockets" },
          { text: "E-commerce completo", result: "Pagamentos e emissão de notas fiscais" },
          { text: "Agentes de IA", result: "Triagem e atendimento automatizado" },
        ],
      },
      projects: [
        {
          title: "E-commerce WhatsApp - Loja Completa",
          stack: "Next.js + Node.js + Uazapi + Gemini AI",
          description: "Sistema completo de e-commerce migrado do WhatsApp para web. Inclui:",
          features: [
            "Autenticação segura (JWT + OAuth)",
            "Interfaces cliente/admin responsivas",
            "Emissão automática de notas fiscais",
            "Integração com Supabase e GitHub Storage",
          ],
          result: "Aumento de 150% nas vendas online",
        },
        {
          title: "Sistema de Automação para Clínica",
          stack: "n8n + Supabase + WhatsApp API + IA",
          description: "Sistema 24/7 com agendamentos automatizados:",
          features: [
            "Agentes de IA para triagem inteligente",
            "Atendendo 300+ pacientes diariamente",
            "Redução de 60% nos custos operacionais",
            "Taxa de satisfação de 95%",
          ],
        },
        {
          title: "Automação de Conteúdo com IA",
          stack: "RSS → Blog → LinkedIn automatizado",
          description: "Pipeline completo de geração e publicação:",
          features: [
            "Gemini AI para criação de conteúdo",
            "n8n para orquestração",
            "PostgreSQL para armazenamento",
            "Publicação multi-canal sincronizada",
          ],
          result: "100+ posts publicados automaticamente",
        },
      ],
      skills: {
        title: "Stack Técnico",
        categories: [
          {
            name: "Backend & Automação",
            items: [
              "n8n (Avançado - Especialista)",
              "Node.js / TypeScript",
              "REST API / GraphQL",
              "Webhooks & API Integration",
              "PostgreSQL / Supabase",
              "Redis / BullMQ",
              "Cron Jobs / Schedulers",
              "Serverless Functions (AWS Lambda, Vercel)",
              "API Rate Limiting & Retry Logic",
              "ETL & Data Transformation",
              "Docker",
            ],
          },
          {
            name: "Frontend",
            items: [
              "Next.js / React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "State Management (Zustand, Redux)",
              "Authentication (JWT, OAuth, NextAuth)",
              "Real-time (WebSockets, Socket.io)",
            ],
          },
          {
            name: "IA & Integrações",
            items: [
              "LangChain / LangGraph",
              "OpenAI / Gemini AI",
              "WhatsApp APIs (Evolution API, Uazapi)",
              "pgvector",
              "Prompt Engineering",
            ],
          },
          {
            name: "DevOps & Cloud",
            items: [
              "AWS (EC2, S3, Lambda)",
              "Vercel",
              "Docker",
              "Git / GitHub",
              "CI/CD Pipelines",
            ],
          },
          {
            name: "Ferramentas & Testes",
            items: [
              "Postman / Insomnia",
              "Cursor / Windsurf",
              "Lovable",
              "Firebase",
              "Looker",
              "Jest / Vitest",
            ],
          },
          {
            name: "Pagamentos & Serviços",
            items: [
              "Payment Gateways (Stripe, Mercado Pago)",
              "Integrações bancárias e financeiras",
            ],
          },
        ],
      },
      competencies: {
        title: "Competências Técnicas & Comportamentais",
        items: [
          "Resolução de problemas complexos com automação e arquitetura escalável",
          "Comunicação técnica com stakeholders não-técnicos (tradução de requisitos)",
          "Gestão de projetos ágeis (Scrum/Kanban) e entrega contínua",
          "Code Review e documentação técnica detalhada",
          "Troubleshooting e debugging em produção sob pressão",
          "Ownership e responsabilidade end-to-end dos projetos",
          "Aprendizado rápido de novas tecnologias e ferramentas",
        ],
      },
      education: {
        title: "Formação & Jornada",
        items: [
          "2022-2024: Transição de Medicina para Tecnologia - Autodidata intensivo",
          "2024-2025: 2 anos de experiência intensiva construindo sistemas em produção",
          "2025: Experiência profissional consolidada como Automation Developer",
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { flag: "🇧🇷", name: "Português", level: "Nativo" },
          { flag: "🇺🇸", name: "Inglês", level: "Fluente" },
          { flag: "🇪🇸", name: "Espanhol", level: "Fluente" },
          { flag: "🇩🇪", name: "Alemão", level: "Intermediário" },
        ],
      },
      differentiators: {
        title: "Diferenciais",
        items: [
          "Transição de Medicina para Tech demonstra adaptabilidade e determinação",
          "Experiência em produção com clientes reais desde os primeiros meses",
          "Deploy rápido: sistemas em produção em dias, não meses",
          "Obsessão por excelência: refatoro código que funciona porque pode ser melhor",
          "Iniciativa proativa: resolvo problemas antes de serem solicitados",
          "Curiosidade constante: aprendo novas ferramentas todo fim de semana",
          "Mentalidade de produto: penso no impacto no negócio, não só no código",
        ],
      },
      availability: "Disponível para: Projetos remotos | Consultoria em automação | Desenvolvimento full stack | Implementação n8n",
    },
  },
  en: {
    header: {
      name: "Arthur Bezerra",
      title: "Automation Developer | Full Stack Developer | n8n Specialist",
      email: "arthur@vicentimmed.com.br",
      linkedin: "linkedin.com/in/arthur-n8n-dev",
      github: "github.com/artubss",
      whatsapp: "+55 84 99419-8787",
      location: "Brazil",
      age: "24 years old",
    },
    sections: {
      summary: {
        title: "Professional Summary",
        content: "Automation Developer with 2 years of intensive experience in scalable systems development and complex automations. Specialist in n8n, WhatsApp integrations, AI automations, and full stack development.",
        results: [
          "Reduced operational costs by 60% through intelligent automations",
          "Systems processing 5k+ transactions/day in 24/7 production",
          "3-5 day time-to-market for functional MVPs",
          "50+ n8n workflows in production serving real clients",
        ],
        closing: "Transition from Medicine to Technology demonstrates adaptability and passion for building solutions that solve real problems. Production experience with real clients, 24/7 systems, and fast deployment.",
      },
      n8n: {
        title: "n8n Expertise",
        subtitle: "Advanced Specialization:",
        items: [
          "50+ workflows in production managing critical operations",
          "Custom nodes development for specific integrations",
          "Complex webhooks and robust error handling",
          "Integration with 20+ external services (APIs, databases, messaging)",
          "Performance optimization (500+ executions/minute)",
          "Scalable and maintainable workflow architecture",
          "Debugging and monitoring of production systems",
        ],
      },
      experience: [
        {
          company: "Vicentimmed",
          role: "Automation Developer | Full Stack",
          period: "Mar 2025 - Present (3 months)",
          items: [
            "Development of n8n automations in 24/7 production",
            "WhatsApp integrations (Uazapi, Evolution API) processing 300+ messages/day",
            "Full stack development with Next.js and Node.js",
            "Integration with AI APIs (Gemini, OpenAI) for intelligent support",
            "PostgreSQL/Supabase database management",
            "85% reduction in customer response time",
          ],
        },
        {
          company: "Cachina",
          role: "Automation Developer | Full Stack",
          period: "Oct 2024 - Feb 2025 (5 months)",
          items: [
            "Creation of automated workflows with n8n for multiple clients",
            "Development of scalable automation systems",
            "Integrations with multiple APIs and services (REST/GraphQL)",
            "Maintenance and optimization of production systems",
            "Implementation of error handling and retry logic",
          ],
          note: "Left for better working conditions and professional growth",
        },
      ],
      solutions: {
        title: "Implemented Solutions",
        items: [
          { text: "AI-powered customer service automation", result: "80% reduction in response time" },
          { text: "Legacy system migration", result: "Modern and scalable architecture" },
          { text: "Multi-channel integration", result: "Unified WhatsApp, Email, SMS, Web" },
          { text: "Data pipelines", result: "Analysis and Business Intelligence" },
          { text: "Real-time notification systems", result: "WebSockets" },
          { text: "Complete e-commerce", result: "Payments and invoice generation" },
          { text: "AI agents", result: "Automated triage and customer service" },
        ],
      },
      projects: [
        {
          title: "WhatsApp E-commerce - Complete Store",
          stack: "Next.js + Node.js + Uazapi + Gemini AI",
          description: "Complete e-commerce system migrated from WhatsApp to web. Includes:",
          features: [
            "Secure authentication (JWT + OAuth)",
            "Responsive client/admin interfaces",
            "Automatic invoice generation",
            "Integration with Supabase and GitHub Storage",
          ],
          result: "150% increase in online sales",
        },
        {
          title: "Clinic Automation System",
          stack: "n8n + Supabase + WhatsApp API + AI",
          description: "24/7 system with automated scheduling:",
          features: [
            "AI agents for intelligent triage",
            "Serving 300+ patients daily",
            "60% reduction in operational costs",
            "95% satisfaction rate",
          ],
        },
        {
          title: "AI Content Automation",
          stack: "RSS → Blog → LinkedIn automated",
          description: "Complete content generation and publishing pipeline:",
          features: [
            "Gemini AI for content creation",
            "n8n for orchestration",
            "PostgreSQL for storage",
            "Synchronized multi-channel publishing",
          ],
          result: "100+ posts published automatically",
        },
      ],
      skills: {
        title: "Technical Stack",
        categories: [
          {
            name: "Backend & Automation",
            items: [
              "n8n (Advanced - Specialist)",
              "Node.js / TypeScript",
              "REST API / GraphQL",
              "Webhooks & API Integration",
              "PostgreSQL / Supabase",
              "Redis / BullMQ",
              "Cron Jobs / Schedulers",
              "Serverless Functions (AWS Lambda, Vercel)",
              "API Rate Limiting & Retry Logic",
              "ETL & Data Transformation",
              "Docker",
            ],
          },
          {
            name: "Frontend",
            items: [
              "Next.js / React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "State Management (Zustand, Redux)",
              "Authentication (JWT, OAuth, NextAuth)",
              "Real-time (WebSockets, Socket.io)",
            ],
          },
          {
            name: "AI & Integrations",
            items: [
              "LangChain / LangGraph",
              "OpenAI / Gemini AI",
              "WhatsApp APIs (Evolution API, Uazapi)",
              "pgvector",
              "Prompt Engineering",
            ],
          },
          {
            name: "DevOps & Cloud",
            items: [
              "AWS (EC2, S3, Lambda)",
              "Vercel",
              "Docker",
              "Git / GitHub",
              "CI/CD Pipelines",
            ],
          },
          {
            name: "Tools & Testing",
            items: [
              "Postman / Insomnia",
              "Cursor / Windsurf",
              "Lovable",
              "Firebase",
              "Looker",
              "Jest / Vitest",
            ],
          },
          {
            name: "Payments & Services",
            items: [
              "Payment Gateways (Stripe, Mercado Pago)",
              "Banking and financial integrations",
            ],
          },
        ],
      },
      competencies: {
        title: "Technical & Behavioral Competencies",
        items: [
          "Complex problem solving with automation and scalable architecture",
          "Technical communication with non-technical stakeholders (requirement translation)",
          "Agile project management (Scrum/Kanban) and continuous delivery",
          "Code Review and detailed technical documentation",
          "Troubleshooting and debugging in production under pressure",
          "Ownership and end-to-end project responsibility",
          "Fast learning of new technologies and tools",
        ],
      },
      education: {
        title: "Education & Journey",
        items: [
          "2022-2024: Transition from Medicine to Technology - Intensive self-taught",
          "2024-2025: 2 years of intensive experience building systems in production",
          "2025: Consolidated professional experience as Automation Developer",
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { flag: "🇧🇷", name: "Portuguese", level: "Native" },
          { flag: "🇺🇸", name: "English", level: "Fluent" },
          { flag: "🇪🇸", name: "Spanish", level: "Fluent" },
          { flag: "🇩🇪", name: "German", level: "Intermediate" },
        ],
      },
      differentiators: {
        title: "Differentiators",
        items: [
          "Transition from Medicine to Tech demonstrates adaptability and determination",
          "Production experience with real clients since the first months",
          "Fast deployment: systems in production in days, not months",
          "Excellence obsession: refactor code that works because it can be better",
          "Proactive initiative: solve problems before they are requested",
          "Constant curiosity: learn new tools every weekend",
          "Product mindset: think about business impact, not just code",
        ],
      },
      availability: "Available for: Remote projects | Automation consulting | Full stack development | n8n implementation",
    },
  },
};

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");

  const content = resumeContent[language];

  const downloadPDF = useCallback(async () => {
    if (!resumeRef.current) {
      alert(language === "pt" ? "Erro: Elemento do currículo não encontrado." : "Error: Resume element not found.");
      return;
    }

    setIsGenerating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const { default: jsPDF } = await import("jspdf");
      const html2canvas = (await import("html2canvas")).default;

      const element = resumeRef.current;
      
      element.style.position = "fixed";
      element.style.left = "0";
      element.style.top = "0";
      element.style.visibility = "visible";
      element.style.display = "block";
      element.style.zIndex = "9999";
      element.style.width = "210mm";
      element.style.maxWidth = "210mm";
      element.style.fontSize = "12px";

      await new Promise((resolve) => setTimeout(resolve, 300));

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pdfWidth - (margin * 2);
      const maxHeight = pdfHeight - (margin * 2);

      // Dividir conteúdo em seções para múltiplas páginas
      const sections = element.querySelectorAll("section, .resume-section");
      let currentY = margin;
      let pageNumber = 1;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // Criar um container temporário apenas para esta seção
        const tempContainer = document.createElement("div");
        tempContainer.style.position = "absolute";
        tempContainer.style.left = "-9999px";
        tempContainer.style.width = "210mm";
        tempContainer.style.backgroundColor = "white";
        tempContainer.appendChild(section.cloneNode(true));
        document.body.appendChild(tempContainer);

        const canvas = await html2canvas(tempContainer, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          width: tempContainer.scrollWidth,
          height: tempContainer.scrollHeight,
        });

        document.body.removeChild(tempContainer);

        const imgHeight = (canvas.height * contentWidth) / canvas.width;
        
        // Se a seção não cabe na página atual, criar nova página
        if (currentY + imgHeight > pdfHeight - margin && currentY > margin) {
          pdf.addPage();
          currentY = margin;
          pageNumber++;
        }

        // Se a imagem é muito grande, dividir em partes
        if (imgHeight > maxHeight) {
          const parts = Math.ceil(imgHeight / maxHeight);
          const partHeight = canvas.height / parts;
          
          for (let part = 0; part < parts; part++) {
            if (part > 0) {
              pdf.addPage();
              currentY = margin;
              pageNumber++;
            }

            const sourceY = part * partHeight;
            const sourceHeight = Math.min(partHeight, canvas.height - sourceY);
            const scaledHeight = (sourceHeight * contentWidth) / canvas.width;

            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = canvas.width;
            tempCanvas.height = sourceHeight;
            const ctx = tempCanvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(canvas, 0, sourceY, canvas.width, sourceHeight, 0, 0, canvas.width, sourceHeight);
            }

            const imgData = tempCanvas.toDataURL("image/png", 1.0);
            pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, scaledHeight);
            currentY += scaledHeight + 5;
          }
        } else {
          const imgData = canvas.toDataURL("image/png", 1.0);
          pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, imgHeight);
          currentY += imgHeight + 10;
        }
      }

      // Restaurar estilo original
      element.style.position = "absolute";
      element.style.left = "-9999px";
      element.style.top = "0";
      element.style.visibility = "hidden";
      element.style.display = "block";
      element.style.zIndex = "-1";

      const fileName = language === "pt" 
        ? "Arthur-Bezerra-Curriculo.pdf" 
        : "Arthur-Bezerra-Resume.pdf";
      pdf.save(fileName);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert(`Erro ao gerar PDF: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    } finally {
      setIsGenerating(false);
    }
  }, [language]);

  // Expor função de download para uso externo
  useEffect(() => {
    (window as any).downloadResumePDFWithLang = (lang: Language) => {
      setLanguage(lang);
      // Aguardar atualização do estado antes de gerar PDF
      setTimeout(() => {
        downloadPDF();
      }, 300);
    };
  }, [downloadPDF]);

  return (
    <>
      <div 
        ref={resumeRef} 
        className="bg-white text-gray-900 p-8 max-w-4xl mx-auto"
        style={{ position: "absolute", left: "-9999px", top: "0", visibility: "hidden", fontSize: "12px" }}
      >
        {/* Header */}
        <div className="border-b-4 border-indigo-600 pb-4 mb-6 resume-section">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">{content.header.name}</h1>
          <h2 className="text-2xl text-gray-700 mb-4">{content.header.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
            <div>📧 {content.header.email}</div>
            <div>💼 {content.header.linkedin}</div>
            <div>💻 {content.header.github}</div>
            <div>📱 WhatsApp: {content.header.whatsapp}</div>
            <div>📍 {content.header.location}</div>
            <div>👤 {content.header.age}</div>
          </div>
        </div>

        {/* Resumo Profissional */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.summary.title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3 text-sm">
            {content.sections.summary.content}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2 text-sm">Resultados comprovados:</p>
            <ul className="list-none space-y-1 text-sm text-gray-700">
              {content.sections.summary.results.map((result, idx) => (
                <li key={idx}>✅ {result}</li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-3 text-sm">
            {content.sections.summary.closing}
          </p>
        </section>

        {/* Expertise em n8n */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.n8n.title}
          </h3>
          <p className="font-semibold text-gray-800 mb-2 text-sm">🔧 {content.sections.n8n.subtitle}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
            {content.sections.n8n.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {language === "pt" ? "Experiência Profissional" : "Professional Experience"}
          </h3>

          {content.sections.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{exp.role}</h4>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-600 font-medium text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                {exp.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
              {exp.note && (
                <p className="text-gray-600 text-xs italic mt-2 ml-4">{exp.note}</p>
              )}
            </div>
          ))}
        </section>

        {/* Stack Técnico */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.skills.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.sections.skills.categories.map((category, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">{category.name}</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Soluções Implementadas */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.solutions.title}
          </h3>
          <ul className="list-none space-y-2 text-gray-700 text-sm">
            {content.sections.solutions.items.map((item, idx) => (
              <li key={idx}>
                ✅ <strong>{item.text}</strong> → {item.result}
              </li>
            ))}
          </ul>
        </section>

        {/* Projetos Destaque */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {language === "pt" ? "Projetos Destaque" : "Featured Projects"}
          </h3>
          <div className="space-y-4">
            {content.sections.projects.map((project, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-gray-800 text-sm">
                  {idx === 0 && "🛒 "}
                  {idx === 1 && "🏥 "}
                  {idx === 2 && "📝 "}
                  {project.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1"><strong>Stack:</strong> {project.stack}</p>
                <p className="text-gray-700 text-xs mb-1">{project.description}</p>
                <ul className="list-disc list-inside text-gray-700 text-xs ml-4 space-y-1">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
                {project.result && (
                  <p className="text-gray-700 text-xs mt-1"><strong>Resultado:</strong> {project.result}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Competências */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.competencies.title}
          </h3>
          <ul className="list-none space-y-1 text-gray-700 text-sm">
            {content.sections.competencies.items.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
        </section>

        {/* Formação */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.education.title}
          </h3>
          <div className="space-y-2 text-gray-700 text-sm">
            {content.sections.education.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.languages.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm">
            {content.sections.languages.items.map((lang, idx) => (
              <div key={idx}>
                {lang.flag} <strong>{lang.name}:</strong> {lang.level}
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-6 resume-section">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            {content.sections.differentiators.title}
          </h3>
          <ul className="list-none space-y-1 text-gray-700 text-sm">
            {content.sections.differentiators.items.map((item, idx) => (
              <li key={idx}>
                {idx === 0 && "🎯 "}
                {idx === 1 && "🚀 "}
                {idx === 2 && "⚡ "}
                {idx === 3 && "💎 "}
                {idx === 4 && "🔥 "}
                {idx === 5 && "📚 "}
                {idx === 6 && "🎓 "}
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Disponibilidade */}
        <section className="border-t-2 border-indigo-200 pt-4 resume-section">
          <p className="text-gray-700 text-sm">{content.sections.availability}</p>
        </section>
      </div>

      {/* Language Selector and Download Button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-primary/30 rounded-lg text-sm font-semibold text-gray-800"
        >
          <option value="pt">🇧🇷 Português</option>
          <option value="en">🇺🇸 English</option>
        </select>
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 disabled:opacity-50"
        >
          {isGenerating ? "Gerando..." : language === "pt" ? "Baixar PDF" : "Download PDF"}
        </button>
      </div>

      {/* Botão de Download (invisível, será chamado externamente) */}
      <button
        onClick={downloadPDF}
        disabled={isGenerating}
        className="hidden"
        id="download-resume-btn"
        aria-label="Download PDF"
      >
        {isGenerating ? "Gerando PDF..." : "Download"}
      </button>
    </>
  );
}

// Exportar função para download
export const downloadResumePDF = (lang: Language = "pt") => {
  // Encontrar o componente Resume e atualizar o idioma
  const select = document.querySelector('select[value]') as HTMLSelectElement;
  if (select) {
    select.value = lang;
    const event = new Event('change', { bubbles: true });
    select.dispatchEvent(event);
  }
  
  // Aguardar um pouco para o estado atualizar e então clicar no botão
  setTimeout(() => {
    const btn = document.getElementById("download-resume-btn");
    if (btn) {
      btn.click();
    } else {
      // Se o botão não existir, tentar encontrar o botão de download direto
      const downloadBtn = document.querySelector('button[onclick*="downloadPDF"]') as HTMLButtonElement;
      if (downloadBtn) {
        downloadBtn.click();
      }
    }
  }, 200);
};
