# 🚀 Guia para Push no GitHub

## 📋 Passos para Enviar para o GitHub

### 1. Inicializar o repositório Git (se ainda não foi feito)

```bash
git init
```

### 2. Adicionar todos os arquivos

```bash
git add .
```

### 3. Fazer o primeiro commit

```bash
git commit -m "feat: apresentação interativa para vaga Adapta - Automation Developer"
```

### 4. Criar repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `apresentacao-adapta` (ou o nome que preferir)
3. Descrição: "Apresentação interativa para vaga de Automation Developer na Adapta"
4. Escolha: **Público** ou **Privado**
5. **NÃO** marque "Add a README file" (já temos um)
6. Clique em **"Create repository"**

### 5. Conectar ao repositório remoto

```bash
# Substitua 'artubss' pelo seu username do GitHub
git remote add origin https://github.com/artubss/apresentacao-adapta.git
```

### 6. Renomear branch para main (se necessário)

```bash
git branch -M main
```

### 7. Fazer push para o GitHub

```bash
git push -u origin main
```

## 🔐 Se pedir autenticação

### Opção 1: Personal Access Token (Recomendado)

1. Vá em: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Dê um nome: "apresentacao-adapta"
4. Selecione escopos: `repo` (todos)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (não será mostrado novamente)
7. Use o token como senha quando pedir

### Opção 2: SSH (Mais seguro a longo prazo)

```bash
# Gerar chave SSH (se ainda não tiver)
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub: https://github.com/settings/keys
# Depois usar URL SSH:
git remote set-url origin git@github.com:artubss/apresentacao-adapta.git
```

## 📝 Comandos Úteis

### Ver status
```bash
git status
```

### Ver histórico
```bash
git log --oneline
```

### Adicionar mudanças futuras
```bash
git add .
git commit -m "descrição das mudanças"
git push
```

### Verificar remote
```bash
git remote -v
```

## 🎯 Estrutura do Repositório

O repositório incluirá:
- ✅ Código fonte completo
- ✅ Componentes React/Next.js
- ✅ Imagens em `/public/images`
- ✅ Configurações (Docker, Next.js, etc)
- ✅ Documentação (README, DEPLOY, etc)
- ❌ `node_modules` (ignorado)
- ❌ `.next` (ignorado)
- ❌ Arquivos `.env` (ignorado)

## 🔗 Após o Push

1. **Acesse seu repositório**: https://github.com/artubss/apresentacao-adapta
2. **Adicione descrição** no repositório
3. **Adicione topics**: `nextjs`, `react`, `typescript`, `tailwindcss`, `framer-motion`, `portfolio`
4. **Configure GitHub Pages** (opcional) se quiser hospedar lá

## 📦 Deploy Automático (Opcional)

Após o push, você pode:
- Conectar com Vercel para deploy automático
- Usar GitHub Actions para CI/CD
- Configurar webhooks para deploy na VPS

---

**Pronto para enviar! 🚀**

