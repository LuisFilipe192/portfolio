# lf.dev — Portfólio de Luís Filipe

Portfólio pessoal com projetos de backend, automação e sistemas, com visual inspirado em terminal e versões em português e inglês.

**Acesse:** https://luisfilipe192.github.io/portfolio/

## O que tem no site

- Apresentação, formação e área de interesse
- Projetos em destaque, com links para o código
- Ferramentas que uso e meu nível em cada uma
- Contato por Gmail ou LinkedIn, com opção de copiar o e-mail
- Download do currículo em PDF
- Layout responsivo e seletor de idioma PT/EN

## Tecnologias

- React 18
- Vite 6
- Lucide React
- CSS próprio
- GitHub Actions e GitHub Pages

## Como rodar localmente

É necessário ter o Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

Depois, abra o endereço mostrado no terminal.

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
.
├── .github/workflows/deploy.yml   # Publicação no GitHub Pages
├── public/
│   ├── assets/                    # Currículo em PDF
│   ├── favicon.svg
│   └── og-image.png               # Imagem de compartilhamento
├── src/
│   ├── assets/projects/           # Prévias opcionais dos projetos
│   ├── App.jsx                    # Conteúdo, traduções e componentes
│   ├── main.jsx
│   └── styles.css
├── index.html                     # Metadados de SEO e compartilhamento
└── vite.config.js
```

## Como atualizar o conteúdo

- **Textos e traduções:** edite o objeto `copy` em `src/App.jsx`.
- **Projetos:** edite `projectItems` em cada idioma e a lista `projects` em `src/App.jsx`.
- **Prévias dos projetos:** siga as instruções de `src/assets/projects/README.md`.
- **Currículo:** substitua `public/assets/curriculo-luis-filipe.pdf`, mantendo o nome do arquivo.
- **Imagem de compartilhamento:** substitua `public/og-image.png` por outra de 1200x630.

## Publicação

Cada push na branch `main` compila o projeto e publica o site no GitHub Pages pelo GitHub Actions.

Se o repositório mudar de nome, atualize `base` em `vite.config.js` e os endereços em `index.html`.
