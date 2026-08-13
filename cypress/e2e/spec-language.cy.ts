import { VIEWPORTS } from '../support/viewports'

describe('Troca de idioma - desktop', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.desktop.width, VIEWPORTS.desktop.height)
    cy.visit('/')
  })

  it('alterna entre PT e EN e persiste no localStorage', () => {
    cy.get('[data-cy=lang-toggle-desktop]').click()
    cy.window().its('localStorage').invoke('getItem', 'lang').should('eq', 'en')
  })
})

describe('Troca de idioma - mobile', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.mobile.width, VIEWPORTS.mobile.height)
    cy.visit('/')
  })

  it('alterna entre PT e EN e persiste no localStorage', () => {
    cy.get('[data-cy=lang-toggle-mobile]').click()
    cy.window().its('localStorage').invoke('getItem', 'lang').should('eq', 'en')
  })
})
