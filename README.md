# Portfolio Icaro

Portfolio pessoal desenvolvido para apresentar minha experiencia, projetos, habilidades e servicos como Desenvolvedor Full Stack. A aplicacao foi construida com foco em performance, interface responsiva, conteudo bilingue e deploy automatizado no GitHub Pages.

## Preview

Deploy: [DevzIcaro.github.io/portfolio-icaro](https://devzicaro.github.io/portfolio-icaro/)

## Sobre o projeto

Este portfolio reune secoes institucionais e profissionais em uma experiencia single page:

- Hero com apresentacao profissional e chamada para projetos.
- Sobre, experiencia profissional e formacao academica.
- Projetos recentes com filtros por categoria.
- Habilidades tecnicas e comportamentais.
- Servicos oferecidos.
- Area de contato com links para GitHub, LinkedIn, WhatsApp e e-mail.
- Alternancia de idioma entre portugues e ingles com persistencia em `localStorage`.
- Eventos de analytics enviados para `dataLayer`, com suporte ao Google Tag Manager.

## Tecnologias

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Tag Manager](https://tagmanager.google.com/)

## Estrutura

```text
.
|-- .github/workflows/      # Workflow de deploy para GitHub Pages
|-- public/                 # Favicons e arquivos publicos
|-- src/
|   |-- assets/             # Imagens utilizadas nas secoes
|   |-- components/         # Componentes React da interface
|   |-- context/            # Contexto global de idioma
|   |-- i18n/               # Configuracoes e traducoes PT/EN
|   |-- layouts/            # Layout base da aplicacao Astro
|   |-- lib/                # Utilitarios compartilhados
|   |-- pages/              # Paginas Astro
|   |-- styles/             # Estilos globais e Tailwind
|   `-- utils/              # Contratos e helpers de analytics
|-- astro.config.mjs
|-- package.json
`-- tsconfig.json
```

## Como rodar localmente

> Requisito: Node.js `>=22.12.0`.

Clone o repositorio:

```bash
git clone https://github.com/DevzIcaro/portfolio-icaro.git
cd portfolio-icaro
```

Instale as dependencias:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Acesse no navegador:

```text
http://localhost:4321
```

## Scripts

| Comando | Descricao |
| --- | --- |
| `pnpm dev` | Inicia o ambiente de desenvolvimento do Astro |
| `pnpm build` | Gera a versao de producao em `dist/` |
| `pnpm preview` | Executa um preview local do build |
| `pnpm astro` | Executa comandos da CLI do Astro |

## Deploy

O deploy esta configurado via GitHub Actions em `.github/workflows/deploy.yml`.

O fluxo executa automaticamente quando ha push na branch `main`:

1. Instala o `pnpm`.
2. Configura Node.js 22.
3. Instala as dependencias.
4. Executa o build do Astro.
5. Publica o conteudo da pasta `dist/` no GitHub Pages.

As configuracoes de `site` e `base` ficam em `astro.config.mjs`, apontando para o GitHub Pages do projeto.

## Analytics

O projeto possui um helper tipado para eventos enviados ao `dataLayer`, incluindo:

- Cliques de navegacao.
- Troca de idioma.
- Download de curriculo.
- Envio de formulario de contato.
- Cliques em redes sociais.
- Selecao de filtros de projetos.

Os contratos desses eventos ficam em `src/utils/analyticsContracts.ts`.

## Contato

- GitHub: [DevzIcaro](https://github.com/DevzIcaro)
- LinkedIn: [icarocarneiro](https://www.linkedin.com/in/icarocarneiro/)
- E-mail: [contatodevicaro333@gmail.com](mailto:contatodevicaro333@gmail.com)
