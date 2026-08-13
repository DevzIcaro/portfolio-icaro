import { VIEWPORTS } from '../support/viewports'

// O formulário de contato está comentado no código (Contacts.tsx) — só os
// links sociais estão ativos por enquanto. Quando o formulário voltar, criamos
// um spec separado pra ele.
const socialLinks = [
  { platform: 'github', href: 'https://github.com/DevzIcaro' },
  { platform: 'linkedin', href: 'https://www.linkedin.com/in/icarocarneiro/' },
  { platform: 'whatsapp', href: 'https://wa.me/5517992641230?text=Olá%20Ícaro' },
  { platform: 'e-mail', href: 'mailto:contatodevicaro333@gmail.com' },
]

function runSocialLinksTests(goToContacts: () => void) {
  beforeEach(() => {
    cy.visit('/')
    goToContacts()
  })

  socialLinks.forEach(({ platform, href }) => {
    it(`aponta pro destino correto e abre em nova aba: ${platform}`, () => {
      cy.get(`[data-cy=social-link-${platform}]`)
        .should('have.attr', 'href', href)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer')
    })

    it(`dispara o evento de analytics ao clicar: ${platform}`, () => {
      cy.get(`[data-cy=social-link-${platform}]`).click()

      cy.window().its('dataLayer').then((dataLayer) => {
        const lastEvent = dataLayer[dataLayer.length - 1]
        expect(lastEvent).to.include({
          event: 'social_click',
          platform,
          context: 'contact_social_section',
        })
      })
    })
  })

  it('exibe os 4 links sociais esperados', () => {
    cy.get('[data-cy^=social-link-]').should('have.length', socialLinks.length)
  })
}

describe('Links sociais - desktop', () => {
  beforeEach(() => cy.viewport(VIEWPORTS.desktop.width, VIEWPORTS.desktop.height))

  runSocialLinksTests(() => {
    cy.get('[data-cy=nav-contacts]').filter(':visible').click()
  })
})

describe('Links sociais - mobile', () => {
  beforeEach(() => cy.viewport(VIEWPORTS.mobile.width, VIEWPORTS.mobile.height))

  runSocialLinksTests(() => {
    cy.get('[data-cy=menu-toggle-mobile]').click()
    cy.get('[data-cy=nav-contacts]').filter(':visible').click()
  })
})
