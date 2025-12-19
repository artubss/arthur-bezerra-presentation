"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";

// Importações dinâmicas para evitar problemas de SSR
const jsPDF = dynamic(() => import("jspdf").then((mod) => mod.default), { ssr: false });
const html2canvas = dynamic(() => import("html2canvas"), { ssr: false });

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    if (!resumeRef.current) {
      alert("Erro: Elemento do currículo não encontrado.");
      return;
    }

    setIsGenerating(true);

    try {
      // Aguardar um pouco para garantir que tudo está renderizado
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Importar dinamicamente
      const { default: jsPDF } = await import("jspdf");
      const html2canvas = (await import("html2canvas")).default;

      // Criar um elemento temporário visível para captura
      const element = resumeRef.current;
      
      // Tornar visível temporariamente para captura (fora da tela mas renderizado)
      element.style.position = "fixed";
      element.style.left = "0";
      element.style.top = "0";
      element.style.visibility = "visible";
      element.style.display = "block";
      element.style.zIndex = "9999";
      element.style.width = "210mm"; // A4 width
      element.style.maxWidth = "210mm";

      // Aguardar renderização
      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      // Restaurar estilo original (ocultar novamente)
      element.style.position = "absolute";
      element.style.left = "-9999px";
      element.style.top = "0";
      element.style.visibility = "hidden";
      element.style.display = "block";
      element.style.zIndex = "-1";

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgScaledWidth = imgWidth * ratio;
      const imgScaledHeight = imgHeight * ratio;
      const xOffset = (pdfWidth - imgScaledWidth) / 2;
      const yOffset = 0;

      pdf.addImage(imgData, "PNG", xOffset, yOffset, imgScaledWidth, imgScaledHeight);
      pdf.save("Arthur-Bezerra-Curriculo.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert(`Erro ao gerar PDF: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div 
        ref={resumeRef} 
        className="bg-white text-gray-900 p-8 max-w-4xl mx-auto"
        style={{ position: "absolute", left: "-9999px", top: "0", visibility: "hidden" }}
      >
        {/* Header */}
        <div className="border-b-4 border-indigo-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Arthur Bezerra</h1>
          <h2 className="text-2xl text-gray-700 mb-4">Automation Developer | Full Stack Developer | n8n Specialist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
            <div>📧 arthurbezerra.dev@gmail.com</div>
            <div>💼 linkedin.com/in/arthur-n8n-dev</div>
            <div>💻 github.com/artubss</div>
            <div>📱 WhatsApp: +55 84 99419-8787</div>
            <div>📍 Brasil</div>
            <div>👤 24 anos</div>
          </div>
        </div>

        {/* Resumo Profissional */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Resumo Profissional
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Automation Developer com <strong>2 anos de experiência intensiva</strong> em desenvolvimento de sistemas escaláveis e automações complexas. Especialista em <strong>n8n</strong>, integrações WhatsApp, automações com IA e desenvolvimento full stack.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2">Resultados comprovados:</p>
            <ul className="list-none space-y-1 text-sm text-gray-700">
              <li>✅ Reduzi custos operacionais em <strong>60%</strong> através de automações inteligentes</li>
              <li>✅ Sistemas processando <strong>5 mil+ transações/dia</strong> em produção 24/7</li>
              <li>✅ <strong>Time-to-market de 3-5 dias</strong> para MVPs funcionais</li>
              <li>✅ <strong>50+ workflows n8n</strong> em produção atendendo clientes reais</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-3">
            Transição de Medicina para Tecnologia demonstra adaptabilidade e paixão por construir soluções que resolvem problemas reais. Experiência em produção com clientes reais, sistemas 24/7 e deploy rápido.
          </p>
        </section>

        {/* Expertise em n8n */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Expertise em n8n
          </h3>
          <p className="font-semibold text-gray-800 mb-2">🔧 Especialização Avançada:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
            <li><strong>50+ workflows</strong> em produção gerenciando operações críticas</li>
            <li><strong>Custom nodes development</strong> para integrações específicas</li>
            <li><strong>Webhooks complexos</strong> e error handling robusto</li>
            <li>Integração com <strong>20+ serviços externos</strong> (APIs, databases, messaging)</li>
            <li><strong>Otimização de performance</strong> (500+ execuções/minuto)</li>
            <li>Arquitetura de workflows escaláveis e manuteníveis</li>
            <li>Debugging e monitoramento de sistemas em produção</li>
          </ul>
        </section>

        {/* Stack Técnico */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Stack Técnico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend & Automação</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>n8n</strong> (Avançado - Especialista)</li>
                <li>• Node.js / TypeScript</li>
                <li>• <strong>REST API / GraphQL</strong></li>
                <li>• <strong>Webhooks & API Integration</strong></li>
                <li>• PostgreSQL / Supabase</li>
                <li>• Redis / BullMQ</li>
                <li>• <strong>Cron Jobs / Schedulers</strong></li>
                <li>• <strong>Serverless Functions</strong> (AWS Lambda, Vercel)</li>
                <li>• <strong>API Rate Limiting & Retry Logic</strong></li>
                <li>• <strong>ETL & Data Transformation</strong></li>
                <li>• Docker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Next.js / React</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
                <li>• <strong>State Management</strong> (Zustand, Redux)</li>
                <li>• <strong>Authentication</strong> (JWT, OAuth, NextAuth)</li>
                <li>• <strong>Real-time</strong> (WebSockets, Socket.io)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">IA & Integrações</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• LangChain / LangGraph</li>
                <li>• OpenAI / Gemini AI</li>
                <li>• WhatsApp APIs (Evolution API, Uazapi)</li>
                <li>• pgvector</li>
                <li>• Prompt Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">DevOps & Cloud</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AWS (EC2, S3, Lambda)</li>
                <li>• Vercel</li>
                <li>• Docker</li>
                <li>• Git / GitHub</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ferramentas & Testes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Postman / Insomnia</strong></li>
                <li>• Cursor / Windsurf</li>
                <li>• Lovable</li>
                <li>• Firebase</li>
                <li>• Looker</li>
                <li>• Jest / Vitest</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pagamentos & Serviços</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Payment Gateways</strong> (Stripe, Mercado Pago)</li>
                <li>• Integrações bancárias e financeiras</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Experiência Profissional
          </h3>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg text-gray-800">Automation Developer | Full Stack</h4>
                <p className="text-indigo-600 font-semibold">Vicentimmed</p>
              </div>
              <span className="text-gray-600 font-medium">Mar 2025 - Presente (3 meses)</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Desenvolvimento de <strong>automações com n8n em produção</strong> 24/7</li>
              <li>Integrações WhatsApp (Uazapi, Evolution API) processando <strong>300+ mensagens/dia</strong></li>
              <li>Desenvolvimento full stack com <strong>Next.js e Node.js</strong></li>
              <li>Integração com <strong>APIs de IA</strong> (Gemini, OpenAI) para atendimento inteligente</li>
              <li>Gerenciamento de banco de dados <strong>PostgreSQL/Supabase</strong></li>
              <li>Redução de <strong>85% no tempo de resposta</strong> ao cliente</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg text-gray-800">Automation Developer | Full Stack</h4>
                <p className="text-indigo-600 font-semibold">Cachina</p>
              </div>
              <span className="text-gray-600 font-medium">Jan 2025 - Fev 2025 (2 meses)</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Criação de <strong>workflows automatizados com n8n</strong> para múltiplos clientes</li>
              <li>Desenvolvimento de sistemas de automação escaláveis</li>
              <li>Integrações com <strong>múltiplas APIs e serviços</strong> (REST/GraphQL)</li>
              <li>Manutenção e otimização de sistemas em produção</li>
              <li>Implementação de <strong>error handling</strong> e retry logic</li>
            </ul>
          </div>
        </section>

        {/* Soluções Implementadas */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Soluções Implementadas
          </h3>
          <ul className="list-none space-y-2 text-gray-700 text-sm">
            <li>✅ <strong>Automação de atendimento com IA</strong> → Redução de <strong>80% no tempo de resposta</strong></li>
            <li>✅ <strong>Migração de sistemas legados</strong> para arquitetura moderna e escalável</li>
            <li>✅ <strong>Integração multi-canal</strong> (WhatsApp, Email, SMS, Web) unificada</li>
            <li>✅ <strong>Pipelines de dados</strong> para análise e Business Intelligence</li>
            <li>✅ <strong>Sistemas de notificação em tempo real</strong> com WebSockets</li>
            <li>✅ <strong>E-commerce completo</strong> com pagamentos e emissão de notas fiscais</li>
            <li>✅ <strong>Agentes de IA</strong> para triagem e atendimento automatizado</li>
          </ul>
        </section>

        {/* Projetos Destaque */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Projetos Destaque
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800">🛒 E-commerce WhatsApp - Loja Completa</h4>
              <p className="text-sm text-gray-600 mb-1"><strong>Stack:</strong> Next.js + Node.js + Uazapi + Gemini AI</p>
              <p className="text-gray-700 text-sm mb-1">
                Sistema completo de e-commerce migrado do WhatsApp para web. Inclui:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                <li>Autenticação segura (JWT + OAuth)</li>
                <li>Interfaces cliente/admin responsivas</li>
                <li>Emissão automática de notas fiscais</li>
                <li>Integração com Supabase e GitHub Storage</li>
              </ul>
              <p className="text-gray-700 text-sm mt-1"><strong>Resultado:</strong> Aumento de <strong>150% nas vendas</strong> online</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">🏥 Sistema de Automação para Clínica</h4>
              <p className="text-sm text-gray-600 mb-1"><strong>Stack:</strong> n8n + Supabase + WhatsApp API + IA</p>
              <p className="text-gray-700 text-sm mb-1">
                Sistema 24/7 com agendamentos automatizados:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                <li>Agentes de IA para triagem inteligente</li>
                <li>Atendendo <strong>300+ pacientes diariamente</strong></li>
                <li>Redução de <strong>60% nos custos operacionais</strong></li>
                <li>Taxa de satisfação de <strong>95%</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">📝 Automação de Conteúdo com IA</h4>
              <p className="text-sm text-gray-600 mb-1"><strong>Stack:</strong> RSS → Blog → LinkedIn automatizado</p>
              <p className="text-gray-700 text-sm mb-1">
                Pipeline completo de geração e publicação:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                <li>Gemini AI para criação de conteúdo</li>
                <li>n8n para orquestração</li>
                <li>PostgreSQL para armazenamento</li>
                <li>Publicação multi-canal sincronizada</li>
              </ul>
              <p className="text-gray-700 text-sm mt-1"><strong>Resultado:</strong> <strong>100+ posts</strong> publicados automaticamente</p>
            </div>
          </div>
        </section>

        {/* Competências Técnicas & Comportamentais */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Competências Técnicas & Comportamentais
          </h3>
          <ul className="list-none space-y-1 text-gray-700 text-sm">
            <li>✓ <strong>Resolução de problemas complexos</strong> com automação e arquitetura escalável</li>
            <li>✓ <strong>Comunicação técnica</strong> com stakeholders não-técnicos (tradução de requisitos)</li>
            <li>✓ <strong>Gestão de projetos ágeis</strong> (Scrum/Kanban) e entrega contínua</li>
            <li>✓ <strong>Code Review e documentação técnica</strong> detalhada</li>
            <li>✓ <strong>Troubleshooting e debugging</strong> em produção sob pressão</li>
            <li>✓ <strong>Ownership</strong> e responsabilidade end-to-end dos projetos</li>
            <li>✓ <strong>Aprendizado rápido</strong> de novas tecnologias e ferramentas</li>
          </ul>
        </section>

        {/* Formação */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Formação & Jornada
          </h3>
          <div className="space-y-2 text-gray-700 text-sm">
            <p><strong>2022-2024:</strong> Transição de Medicina para Tecnologia - Autodidata intensivo</p>
            <p><strong>2024-2025:</strong> 2 anos de experiência intensiva construindo sistemas em produção</p>
            <p><strong>2025:</strong> Experiência profissional consolidada como Automation Developer</p>
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Idiomas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm">
            <div>🇧🇷 <strong>Português:</strong> Nativo</div>
            <div>🇺🇸 <strong>Inglês:</strong> Fluente</div>
            <div>🇪🇸 <strong>Espanhol:</strong> Fluente</div>
            <div>🇩🇪 <strong>Alemão:</strong> Intermediário</div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Diferenciais
          </h3>
          <ul className="list-none space-y-1 text-gray-700 text-sm">
            <li>🎯 <strong>Transição de Medicina para Tech</strong> demonstra adaptabilidade e determinação</li>
            <li>🚀 <strong>Experiência em produção</strong> com clientes reais desde os primeiros meses</li>
            <li>⚡ <strong>Deploy rápido:</strong> sistemas em produção em dias, não meses</li>
            <li>💎 <strong>Obsessão por excelência:</strong> refatoro código que funciona porque pode ser melhor</li>
            <li>🔥 <strong>Iniciativa proativa:</strong> resolvo problemas antes de serem solicitados</li>
            <li>📚 <strong>Curiosidade constante:</strong> aprendo novas ferramentas todo fim de semana</li>
            <li>🎓 <strong>Mentalidade de produto:</strong> penso no impacto no negócio, não só no código</li>
          </ul>
        </section>

        {/* Disponibilidade */}
        <section className="border-t-2 border-indigo-200 pt-4">
          <p className="text-gray-700 text-sm">
            <strong>Disponível para:</strong> Projetos remotos | Consultoria em automação | Desenvolvimento full stack | Implementação n8n
          </p>
        </section>
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
export const downloadResumePDF = () => {
  const btn = document.getElementById("download-resume-btn");
  if (btn && !btn.hasAttribute("disabled")) {
    btn.click();
  }
};
