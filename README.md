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
- [Cypress](https://www.cypress.io/) — testes E2E

## Estrutura

```text
.
|-- .github/workflows/      # Workflows de CI (testes) e deploy para GitHub Pages
|-- cypress/
|   |-- e2e/                # Specs de teste end-to-end
|   `-- support/            # Config global, interceptors e constantes de viewport
|-- public/                 # Favicons e arquivos publicos
|-- src/
|   |-- assets/             # Imagens utilizadas nas secoes
|   |-- components/         # Componentes React da interface
|   |   `-- ui/              # Primitivos gerados pelo Shadcn UI
|   |-- context/            # Contexto global de idioma
|   |-- i18n/               # Configuracoes e traducoes PT/EN
|   |-- layouts/            # Layout base da aplicacao Astro
|   |-- lib/                # Utilitarios compartilhados
|   |-- pages/              # Paginas Astro
|   |-- styles/             # Estilos globais e Tailwind
|   `-- utils/              # Contratos e helpers de analytics
|-- astro.config.mjs
|-- cypress.config.ts
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
| `pnpm test:e2e` | Roda a suite Cypress em modo headless (`cypress run`) |
| `pnpm exec cypress open` | Abre a interface interativa do Cypress pra escrever/depurar specs |

## Testes E2E (Cypress)

O projeto tem uma suite Cypress cobrindo os principais fluxos de interacao do usuario. Os testes rodam contra elementos marcados com atributos `data-cy`, nunca por classe CSS ou texto — assim eles nao quebram quando o estilo ou o idioma muda.

### Specs (`cypress/e2e/`)

| Spec | Cobertura |
| --- | --- |
| `spec-language.cy.ts` | Troca de idioma PT/EN e persistencia em `localStorage` (desktop e mobile) |
| `spec-navbar-navigation.cy.ts` | Navegacao pelos 7 itens do menu, incluindo abertura do menu hamburguer no mobile |
| `spec-project-filter.cy.ts` | Filtro de categoria de projetos (contagem de cards e categoria correta em cada um) |
| `spec-social-links.cy.ts` | Atributos (`href`, `target`, `rel`) e evento de analytics de cada link social |

Todos os specs acima rodam em dois tamanhos de tela (`cypress/support/viewports.ts`), baseados no breakpoint `md` (768px) do Tailwind — o unico que muda a estrutura de navegacao (sidebar fixa vs. menu hamburguer):

- `mobile`: 375x667
- `desktop`: 1280x800

### Suporte global (`cypress/support/e2e.js`)

O site carrega o Google Tag Manager real em producao. Pra evitar tráfego de teste poluindo o Analytics de verdade e falhas causadas por scripts de terceiros, um `beforeEach` global intercepta e "stuba" as chamadas pro GTM/GA antes de cada teste.

### Rodando localmente

```bash
pnpm dev              # em um terminal, mantem o servidor de dev rodando
pnpm exec cypress open  # em outro terminal, abre a interface do Cypress
```

## CI/CD

O pipeline tem dois workflows em `.github/workflows/`:

### `ci.yml` — Pull Requests

Roda a suite Cypress completa (build + preview + testes) a cada PR aberto contra a `main`, dando feedback antes do merge.

### `deploy.yml` — Deploy em producao

Dispara em todo push na branch `main` (ou manualmente via `workflow_dispatch`), com 3 jobs encadeados por `needs`:

```text
test  →  build  →  deploy
```

1. **`test`**: builda o projeto, sobe o `astro preview` e roda todos os specs Cypress no Chrome headless via `cypress-io/github-action`. Se qualquer teste falhar, o pipeline para aqui e os screenshots de falha sao salvos como artefato do GitHub Actions.
2. **`build`**: so roda se `test` passar. Builda novamente e prepara o artefato pro GitHub Pages.
3. **`deploy`**: so roda se `build` passar. Publica de fato em producao.

As configuracoes de `site` e `base` ficam em `astro.config.mjs`, apontando para o GitHub Pages do projeto.

### Proximos passos / estudos futuros

O pipeline ainda nao tem um gate de **lint** (ESLint). O plano é adicionar um job `lint` rodando **antes** do `test`, ja que verificar o codigo estaticamente e mais rapido e barato do que subir servidor e rodar E2E:

```text
lint  →  test (cypress)  →  build  →  deploy
```

Pontos a decidir quando isso for implementado:

- Setup do ESLint 9 (flat config) pro stack do projeto: TypeScript + React (JSX/TSX) + Astro (`eslint-plugin-astro` + `astro-eslint-parser`) + regras de hooks (`eslint-plugin-react-hooks`).
- Adicionar script `pnpm lint` no `package.json`.
- Adicionar um novo job `lint` no `deploy.yml` (e no `ci.yml`) antes do job `test`, com `test: needs: lint`.
- Rodar `pnpm install` localmente depois de adicionar as dependencias novas, pra manter o `pnpm-lock.yaml` sincronizado (o CI usa `--frozen-lockfile`, entao lockfile desatualizado quebra o pipeline).

## Consumo de API

O projeto **nao consome nenhuma API externa/backend**. E um site 100% estatico (Astro + React renderizados em build time), sem `fetch`, `axios` ou chamadas HTTP feitas pela aplicacao. As unicas integracoes de rede sao:

- **Google Tag Manager**: script carregado via tag `<script>` no `Layout.astro` (`src/layouts/Layout.astro`), que injeta o container `GTM-TL65TJRK` e gerencia suas proprias chamadas de rede (fora do controle do codigo da aplicacao).
- **Links externos**: GitHub, LinkedIn, WhatsApp (`wa.me`) e `mailto:`, todos simples links `<a href>`, sem requisicoes programaticas.

O formulario de contato (`src/components/Contacts.tsx`) existe apenas como codigo comentado/nao habilitado — nao ha submissao real nem endpoint configurado.

## Analytics

O projeto possui um helper tipado (`trackAppEvent`) para eventos enviados ao `dataLayer`, com contratos definidos em `src/utils/analyticsContracts.ts`.

Eventos ja disparados na interface:

- `navigation_click` — cliques de navegacao (menu desktop/mobile).
- `language_change` — troca de idioma PT/EN.
- `social_click` — cliques em redes sociais (GitHub, LinkedIn, WhatsApp, e-mail).
- `project_selection` — selecao de filtro de categoria dos projetos.

Eventos definidos no contrato mas ainda **nao conectados** a nenhuma acao da UI (reservados para uso futuro):

- `download_cv` — download de curriculo (nao ha botao/arquivo de CV implementado ainda).
- `contact_form_submit` — envio de formulario de contato (o formulario esta comentado no codigo, ver secao acima).

## Contato

- GitHub: [DevzIcaro](https://github.com/DevzIcaro)
- LinkedIn: [icarocarneiro](https://www.linkedin.com/in/icarocarneiro/)
- E-mail: [contatodevicaro333@gmail.com](mailto:contatodevicaro333@gmail.com)
