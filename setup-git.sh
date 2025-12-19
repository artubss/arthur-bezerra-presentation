#!/bin/bash

# Script para configurar Git e fazer push inicial

echo "🚀 Configurando Git para apresentacao-adapta..."

# Verificar se já é um repositório Git
if [ -d ".git" ]; then
    echo "✅ Repositório Git já inicializado"
else
    echo "📦 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit inicial..."
git commit -m "feat: apresentação interativa para vaga Adapta - Automation Developer

- Next.js 14 com App Router
- TypeScript + Tailwind CSS
- Framer Motion para animações
- Seções: Hero, About, Values, Skills, Projects, Journey, Contact
- Imagens e logos das tecnologias
- Docker configurado para VPS
- Responsivo e otimizado"

echo ""
echo "✅ Commit criado com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Crie o repositório no GitHub: https://github.com/new"
echo "2. Execute: git remote add origin https://github.com/SEU-USERNAME/apresentacao-adapta.git"
echo "3. Execute: git branch -M main"
echo "4. Execute: git push -u origin main"
echo ""
echo "💡 Ou veja o arquivo GITHUB_SETUP.md para instruções detalhadas"

