# Implementação de testes E2E (Cypress) e gate de qualidade no CI/CD — Portfolio Pessoal

## Contexto

O projeto já tinha uma esteira de CI/CD funcional (GitHub Actions fazendo build do Astro e deploy automático no GitHub Pages a cada push na `main`), mas sem nenhum teste automatizado — era só build e publicação direta. O objetivo foi usar esse projeto real como estudo de caso pra ganhar experiência prática com Cypress e evoluir a esteira pra incluir um gate de qualidade antes do deploy, simulando o fluxo que um time de produto usaria em produção.

## O que foi implementado

### 1. Setup do Cypress do zero

Instalação do Cypress como dependência de desenvolvimento no projeto (Astro + React + TypeScript), configuração da `baseUrl` apontando pro servidor local, e organização da estrutura padrão de pastas (`cypress/e2e` pros specs de teste, `cypress/support` pra configuração global).

### 2. Marcação dos elementos testáveis com `data-cy`

Em vez de escrever testes que dependem de classes CSS ou texto da interface (frágil — quebra a cada mudança visual ou de idioma), os elementos-alvo da aplicação (botões, links de navegação, cards de projeto, links sociais) foram marcados com atributos `data-cy` dedicados. Essa é uma prática recomendada de mercado pra desacoplar os testes da implementação visual.

### 3. Isolamento de dependências externas

O site carrega o Google Tag Manager real em produção. Rodar os testes sem tratar isso gerava tráfego de teste real no Analytics e, pior, um script de terceiro (carregado pelo GTM) lançava uma exceção que derrubava os testes por um motivo que não tinha nada a ver com o código da aplicação. A solução foi interceptar e "stubar" as chamadas de rede pro GTM/GA antes de cada teste, isolando a suíte de dependências externas — uma prática importante pra evitar testes instáveis (flaky tests).

### 4. Testes responsivos baseados nos breakpoints reais do projeto

A aplicação tem comportamento de navegação diferente em mobile (menu hambúrguer) e desktop (sidebar fixa), com a transição acontecendo no breakpoint `md` (768px) do Tailwind CSS. Os viewports de teste foram centralizados numa constante compartilhada e calibrados a partir desse breakpoint real do código-fonte, em vez de usar presets genéricos de dispositivo — garantindo que os testes realmente validam o comportamento que existe no sistema, não uma resolução aleatória.

### 5. Cobertura funcional

Quatro suítes de teste, cada uma cobrindo desktop e mobile:

- Troca de idioma (PT/EN) e persistência da escolha em `localStorage`.
- Navegação por todos os itens do menu, incluindo a abertura do menu mobile antes de clicar.
- Filtro de projetos por categoria, validando tanto a contagem de resultados quanto se cada item exibido realmente pertence à categoria selecionada (incluindo o caso de "nenhum resultado").
- Links sociais: validação de atributos de segurança (`target="_blank"` com `rel="noopener noreferrer"`) e do disparo correto dos eventos de analytics ao clicar.

### 6. Debugging de problemas reais

Durante a implementação apareceram problemas típicos de um ambiente real, todos investigados e corrigidos:

- TypeScript não instalado como dependência explícita, impedindo o Cypress de compilar specs `.ts`.
- Um bug de estrutura onde um teste novo acabou aninhado dentro do teste antigo (`describe` dentro de `it`), fazendo o teste "passar" sem executar nenhum comando de verdade — um alerta importante sobre a diferença entre teste que passa e teste que realmente valida algo.
- A exceção de terceiros do GTM mencionada acima, rastreada até a causa raiz (script real de analytics, não bug da aplicação).

### 7. Integração no pipeline de CI/CD

A esteira original (só build + deploy) foi reestruturada em três jobs encadeados no GitHub Actions:

```
test → build → deploy
```

O job `test` builda o projeto, sobe um servidor de preview e roda toda a suíte Cypress em modo headless. Se qualquer teste falhar, o pipeline é interrompido ali — nada é publicado com um bug não detectado. Só se os testes passarem o `build` roda pra gerar o artefato de produção, e só então o `deploy` publica no GitHub Pages. Também foi criado um workflow separado que roda a mesma suíte de testes automaticamente em pull requests, dando feedback antes mesmo do merge pra branch principal.

## Resultado

Um projeto que tinha só deploy automático agora tem uma esteira completa com gate de qualidade: nenhum código quebrado chega à produção sem passar primeiro por uma suíte de testes end-to-end cobrindo os principais fluxos de interação do usuário, em diferentes tamanhos de tela, isolada de dependências externas instáveis.
