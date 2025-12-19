"use client";

import { useRef, useState, useEffect } from "react";
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
          <h2 className="text-2xl text-gray-700 mb-4">Automation Developer | Full Stack Developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <strong>Email:</strong> arthurbezerra.dev@gmail.com
            </div>
            <div>
              <strong>LinkedIn:</strong> linkedin.com/in/arthur-n8n-dev
            </div>
            <div>
              <strong>GitHub:</strong> github.com/artubss
            </div>
            <div>
              <strong>WhatsApp:</strong> +55 84 99419-8787
            </div>
            <div>
              <strong>Idade:</strong> 24 anos
            </div>
            <div>
              <strong>Localização:</strong> Brasil
            </div>
          </div>
        </div>

        {/* Resumo Profissional */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Resumo Profissional
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Automation Developer com 2 anos de experiência intensiva em desenvolvimento de sistemas
            escaláveis. Especialista em n8n, integrações WhatsApp, automações com IA e desenvolvimento
            full stack. Transição de Medicina para Tecnologia demonstra adaptabilidade e paixão por
            construir soluções que resolvem problemas reais. Experiência em produção com clientes reais,
            sistemas 24/7 e deploy rápido.
          </p>
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
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Desenvolvimento de automações com n8n em produção</li>
              <li>Integrações WhatsApp (Uazapi, Evolution API)</li>
              <li>Desenvolvimento full stack com Next.js e Node.js</li>
              <li>Integração com APIs de IA (Gemini, OpenAI)</li>
              <li>Gerenciamento de banco de dados PostgreSQL/Supabase</li>
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
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Criação de workflows automatizados com n8n</li>
              <li>Desenvolvimento de sistemas de automação para clientes</li>
              <li>Integrações com múltiplas APIs e serviços</li>
              <li>Manutenção e otimização de sistemas em produção</li>
            </ul>
          </div>
        </section>

        {/* Stack Técnico */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Stack Técnico
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend & Automação</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• n8n (Avançado)</li>
                <li>• Node.js / TypeScript</li>
                <li>• PostgreSQL / Supabase</li>
                <li>• Redis / BullMQ</li>
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">IA & Integrações</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• LangChain / LangGraph</li>
                <li>• OpenAI / Gemini AI</li>
                <li>• WhatsApp APIs</li>
                <li>• pgvector</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">DevOps & Cloud</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AWS (EC2, S3, Lambda)</li>
                <li>• Vercel</li>
                <li>• Docker</li>
                <li>• Git / GitHub</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ferramentas</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Cursor / Windsurf</li>
                <li>• Lovable</li>
                <li>• Firebase</li>
                <li>• Looker Studio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projetos Destaque */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Projetos Destaque
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800">E-commerce WhatsApp - Loja Completa</h4>
              <p className="text-sm text-gray-600 mb-1">Next.js + Node.js + Uazapi + Gemini AI</p>
              <p className="text-gray-700 text-sm">
                Sistema completo de e-commerce migrado do WhatsApp para web. Inclui autenticação,
                interfaces cliente/admin, emissão de notas fiscais, integração com Supabase e GitHub Storage.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Sistema de Automação para Clínica</h4>
              <p className="text-sm text-gray-600 mb-1">n8n + Supabase + WhatsApp API</p>
              <p className="text-gray-700 text-sm">
                Sistema 24/7 com agendamentos automatizados, agentes de IA para triagem, atendendo
                centenas de pacientes diariamente.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Automação de Conteúdo com IA</h4>
              <p className="text-sm text-gray-600 mb-1">RSS → Blog → LinkedIn automatizado</p>
              <p className="text-gray-700 text-sm">
                Pipeline completo de geração e publicação de conteúdo usando Gemini AI, n8n e PostgreSQL.
                Publicação multi-canal sincronizada.
              </p>
            </div>
          </div>
        </section>

        {/* Formação */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Formação & Jornada
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>2022-2024:</strong> Transição de Medicina para Tecnologia - Autodidata intensivo
            </p>
            <p>
              <strong>2024-2025:</strong> 2 anos de experiência intensiva construindo sistemas em produção
            </p>
            <p>
              <strong>2025:</strong> Experiência profissional como Automation Developer
            </p>
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Idiomas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            <div>
              <strong>Português:</strong> Nativo
            </div>
            <div>
              <strong>Inglês:</strong> Fluente
            </div>
            <div>
              <strong>Espanhol:</strong> Fluente
            </div>
            <div>
              <strong>Alemão:</strong> Intermediário
            </div>
          </div>
        </section>

        {/* Valores & Diferenciais */}
        <section>
          <h3 className="text-xl font-bold text-indigo-600 mb-3 border-b-2 border-indigo-200 pb-1">
            Diferenciais
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Transição de Medicina para Tech demonstra adaptabilidade e determinação</li>
            <li>Experiência em produção com clientes reais desde os primeiros meses</li>
            <li>Deploy rápido: sistemas em produção em dias, não meses</li>
            <li>Obsessão por excelência: refatoro código que funciona porque pode ser melhor</li>
            <li>Iniciativa: resolvo problemas antes de serem solicitados</li>
            <li>Curiosidade constante: aprendo novas ferramentas todo fim de semana</li>
          </ul>
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

