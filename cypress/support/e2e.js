// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// O site carrega o Google Tag Manager real (GTM-TL65TJRK) em produção.
// Nos testes E2E, isso gera chamadas de rede reais, deixa os testes mais lentos/instáveis
// e ainda polui o Analytics de verdade com eventos de teste. Interceptamos e "stubamos"
// esses scripts pra rodar os testes isolados de dependências externas.
beforeEach(() => {
  cy.intercept('GET', 'https://www.googletagmanager.com/gtm.js*', {
    statusCode: 200,
    headers: { 'content-type': 'application/javascript' },
    body: '// gtm stubbed in e2e tests',
  }).as('gtmScript')

  cy.intercept('POST', 'https://www.google-analytics.com/**', {
    statusCode: 204,
    body: '',
  }).as('gaCollect')
})