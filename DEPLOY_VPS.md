# 🚀 Guia de Deploy na VPS

## 📋 Pré-requisitos

- VPS com Docker e Docker Compose instalados
- Acesso SSH à VPS
- Porta 3000 disponível (ou outra de sua escolha)

## 🐳 Opção 1: Deploy com Docker Compose (Recomendado)

### 1. Enviar arquivos para a VPS

```bash
# No seu computador local
scp -r . usuario@seu-servidor:/caminho/para/app
```

Ou use Git:
```bash
# Na VPS
git clone seu-repositorio.git
cd apresentacao-adapta
```

### 2. Construir e iniciar o container

```bash
# Na VPS
docker-compose up -d --build
```

### 3. Verificar se está rodando

```bash
docker-compose ps
docker-compose logs -f
```

### 4. Acessar a aplicação

Acesse: `http://seu-ip-vps:3000`

## 🐳 Opção 2: Deploy com Docker direto

### 1. Construir a imagem

```bash
docker build -t apresentacao-adapta .
```

### 2. Rodar o container

```bash
docker run -d \
  --name apresentacao-adapta \
  --restart unless-stopped \
  -p 3000:3000 \
  apresentacao-adapta
```

### 3. Verificar logs

```bash
docker logs -f apresentacao-adapta
```

## 🔧 Configuração com Nginx (Opcional - para domínio)

### 1. Instalar Nginx

```bash
sudo apt update
sudo apt install nginx
```

### 2. Configurar proxy reverso

Crie o arquivo `/etc/nginx/sites-available/apresentacao-adapta`:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. Ativar o site

```bash
sudo ln -s /etc/nginx/sites-available/apresentacao-adapta /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Configurar SSL com Certbot (Opcional)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

## 📝 Comandos Úteis

### Parar o container
```bash
docker-compose down
# ou
docker stop apresentacao-adapta
```

### Reiniciar o container
```bash
docker-compose restart
# ou
docker restart apresentacao-adapta
```

### Ver logs
```bash
docker-compose logs -f
# ou
docker logs -f apresentacao-adapta
```

### Reconstruir após mudanças
```bash
docker-compose up -d --build
# ou
docker build -t apresentacao-adapta . && docker restart apresentacao-adapta
```

### Limpar containers e imagens antigas
```bash
docker-compose down --rmi all
docker system prune -a
```

## 🔒 Segurança

1. **Firewall**: Configure o firewall da VPS
   ```bash
   sudo ufw allow 22/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

2. **Variáveis de ambiente**: Use arquivo `.env` para dados sensíveis
   ```bash
   # Criar .env na VPS
   nano .env
   ```

3. **Atualizações**: Mantenha o sistema atualizado
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

## 🐛 Troubleshooting

### Container não inicia
```bash
docker-compose logs
docker ps -a
```

### Porta já em uso
```bash
# Verificar o que está usando a porta
sudo lsof -i :3000
# Mudar a porta no docker-compose.yml
```

### Erro de permissão
```bash
sudo chown -R $USER:$USER /caminho/do/app
```

### Reconstruir do zero
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

## 📊 Monitoramento

### Ver uso de recursos
```bash
docker stats apresentacao-adapta
```

### Verificar saúde do container
```bash
docker inspect apresentacao-adapta | grep Health
```

---

**Pronto para deploy! 🚀**

