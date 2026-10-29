# lf.dev — Hacker Portfolio

Portfólio pessoal em React + Vite, com visual inspirado em terminal, alternância PT/EN, animações leves e layout responsivo.

## Requisitos
- Node.js 20+ recomendado
- npm
- Conta no GitHub

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL mostrada pelo Vite no terminal.

## Personalização antes de publicar

Abra `src/App.jsx` e atualize:
1. `email`: substitua `seu.email@example.com` pelo seu e-mail profissional.
2. `github`: substitua `SEU-USUARIO` pelo seu usuário do GitHub.
3. `linkedin`: substitua `SEU-PERFIL` pelo seu perfil real do LinkedIn.
4. Em `projects`, troque cada link de exemplo (`https://github.com/`) pela URL do repositório real correspondente.
5. Revise os textos para que reflitam exatamente o estado atual dos seus projetos.

O site usa descrições baseadas nos projetos que você já desenvolveu/está desenvolvendo. Mantenha os status honestos e não inclua ferramentas ou funcionalidades que ainda não implementou.

## Publicar no GitHub Pages

### Opção A — GitHub Actions (recomendada)

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. No arquivo `vite.config.js`, ajuste `base`:
   - Repositório `https://SEU-USUARIO.github.io/portfolio/`: use `base: '/portfolio/'`.
   - Repositório especial `https://SEU-USUARIO.github.io/`: use `base: '/'`.
4. No GitHub, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **GitHub Actions**.
6. Crie `.github/workflows/deploy.yml` com o conteúdo abaixo.
7. Faça commit e push. Acompanhe a aba **Actions**; quando terminar, o GitHub mostrará a URL publicada.

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Opção B — deploy com gh-pages

Depois de ajustar `base` em `vite.config.js`:

```bash
npm install
npm run deploy
```

Depois, em **Settings → Pages**, selecione a branch `gh-pages` e a pasta `/ (root)` se necessário.

## Estrutura

```text
portfolio-hacker-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Checklist antes de compartilhar com recrutadores

- [ ] E-mail, GitHub e LinkedIn atualizados
- [ ] Cada card aponta para o repositório correto
- [ ] Repositórios têm README com objetivo, tecnologias, execução e capturas de tela
- [ ] Conferir visual em celular e desktop
- [ ] Rodar `npm run build` sem erros
- [ ] Conferir alternância PT/EN
- [ ] Não publicar credenciais, tokens ou dados de clientes
