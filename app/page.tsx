import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import WhyAdapta from "@/components/sections/WhyAdapta";
import Contact from "@/components/sections/Contact";
import EasterEgg from "@/components/EasterEgg";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="bg-background text-text min-h-screen">
      {/* 
        🚀 Olá, recrutador da Adapta!
        
        Se você está lendo isso, encontrou um easter egg.
        
        Esta apresentação foi construída com:
        - Next.js 14 + TypeScript
        - Tailwind CSS
        - Framer Motion
        - Muito café ☕
        - E a mesma obsessão que coloco em todos os meus projetos
        
        Assim como a Adapta cresceu de 0 a 50k em 12 meses,
        eu fui de médico a dev em 24 meses.
        
        Mesma energia. Mesma velocidade. Mesmo resultado.
        
        Vamos construir juntos?
        
        - Arthur Bezerra
        arthur@vicentimmed.com.br
      */}
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Skills />
      <Projects />
      <Journey />
      <WhyAdapta />
      <Contact />
      <EasterEgg />
      
      {/* Resume Component (hidden, used for PDF generation) */}
      <div style={{ position: "absolute", left: "-9999px", top: "0", visibility: "hidden" }}>
        <Resume />
      </div>
    </main>
  );
}

