import { VIEWPORTS } from '../support/viewports'

// Hoje existem apenas 2 projetos cadastrados (src/i18n/translations.ts),
// ambos com category: ["frontend", "marketing"]. Por isso "fullstack" deve
// sempre cair no empty state. Se novos projetos forem adicionados, ajuste
// os expectedCount abaixo.
const categoryScenarios = [
  { id: 'all', expectedCount: 2 },
  { id: 'frontend', expectedCount: 2 },
  { id: 'marketing', expectedCount: 2 },
  { id: 'fullstack', expectedCount: 0 },
]

function runProjectFilterTests() {
  beforeEach(() => {
    cy.visit('/')
  })

  categoryScenarios.forEach(({ id, expectedCount }) => {
    it(`filtra os projetos pela categoria "${id}"`, () => {
      cy.get(`[data-cy=category-tab-${id}]`).click()

      if (expectedCount === 0) {
        cy.get('[data-cy=project-card]').should('not.exist')
        cy.get('[data-cy=projects-empty-state]').should('be.visible')
        return
      }

      cy.get('[data-cy=project-card]').should('have.length', expectedCount)

      if (id !== 'all') {
        cy.get('[data-cy=project-card]').each(($card) => {
          const categories = ($card.attr('data-category') || '').split(',')
          expect(categories).to.include(id)
        })
      }
    })
  })
}

describe('Filtro de projetos - desktop', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.desktop.width, VIEWPORTS.desktop.height)
  })

  runProjectFilterTests()
})

describe('Filtro de projetos - mobile', () => {
  beforeEach(() => {
    cy.viewport(VIEWPORTS.mobile.width, VIEWPORTS.mobile.height)
  })

  runProjectFilterTests()
})
