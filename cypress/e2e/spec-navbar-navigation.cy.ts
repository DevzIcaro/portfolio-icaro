import { VIEWPORTS } from '../support/viewports'

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'services', 'contacts']

describe('Navegação da sidebar - desktop', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.desktop.width, VIEWPORTS.desktop.height)
    cy.visit('/')
  })

  sections.forEach((id) => {
    it(`rola até a seção "${id}" ao clicar no item de nav`, () => {
      cy.get(`[data-cy=nav-${id}]`).filter(':visible').click()
      cy.get(`#${id}`).should('be.visible')
    })
  })
})

describe('Navegação do menu mobile', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.mobile.width, VIEWPORTS.mobile.height)
    cy.visit('/')
  })

  sections.forEach((id) => {
    it(`abre o menu hambúrguer e rola até a seção "${id}"`, () => {
      cy.get('[data-cy=menu-toggle-mobile]').click()

      // a sidebar desktop continua no DOM (display:none), então filtramos só o link visível do menu mobile
      cy.get(`[data-cy=nav-${id}]`).filter(':visible').click()

      cy.get(`#${id}`).should('be.visible')
    })
  })
})
