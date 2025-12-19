# 🚀 Apresentação Interativa - Arthur Bezerra | Automation Developer

Apresentação web única e interativa criada para a vaga de Automation Developer na Adapta.org.

## 🛠️ Stack Técnica

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Deploy:** Vercel / VPS (Docker)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

## 🐳 Deploy com Docker

```bash
# Build da imagem
docker build -t apresentacao-adapta .

# Rodar container
docker run -d -p 3000:3000 --name apresentacao-adapta apresentacao-adapta

# Ou usar docker-compose
docker-compose up -d --build
```

Veja [DEPLOY_VPS.md](./DEPLOY_VPS.md) para instruções completas de deploy.

## 📦 Estrutura

```
/app
  /page.tsx (página principal)
  /layout.tsx
  /globals.css
/components
  /sections
    /Hero.tsx
    /About.tsx
    /Journey.tsx
    /Skills.tsx
    /Values.tsx
    /Projects.tsx
    /WhyAdapta.tsx
    /Contact.tsx
  /Navbar.tsx
  /EasterEgg.tsx
  /ScrollProgress.tsx
/lib
  /utils.ts
/public
  /images
```

## 🎨 Features

- ✅ Design moderno e impactante
- ✅ Animações suaves com Framer Motion
- ✅ Totalmente responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Performance otimizada
- ✅ Acessibilidade (WCAG AA)
- ✅ Modal de imagens com navegação
- ✅ Easter egg (Konami code)
- ✅ Scroll progress bar

## 📝 Seções

1. **Hero** - Apresentação inicial com imagem e typing effect
2. **About** - História da transição Medicina → Tech
3. **Values** - Alinhamento com valores CARVIE da Adapta
4. **Skills** - Stack técnico organizado por categoria
5. **Projects** - Projetos reais em produção
6. **Journey** - Timeline dos últimos 2 anos
7. **Why Adapta** - Comparação e alinhamento
8. **Contact** - Informações de contato

## 🚀 Deploy

- **Vercel**: Conecte o repositório GitHub
- **VPS**: Use Docker (veja DEPLOY_VPS.md)
- **GitHub Pages**: Configure via Actions

## 📚 Documentação

- [DEPLOY_VPS.md](./DEPLOY_VPS.md) - Guia de deploy na VPS
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) - Como fazer push no GitHub
- [CHECKLIST.md](./CHECKLIST.md) - Checklist de funcionalidades

## 👤 Autor

**Arthur Bezerra** - Automation Developer

- GitHub: [@artubss](https://github.com/artubss)
- LinkedIn: [arthur-n8n-dev](https://www.linkedin.com/in/arthur-n8n-dev)

---

**Desenvolvido com obsessão por excelência** 🚀


