
describe('Local app test', () => {
  it('Verifies navigation to starships, people and home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=home-nav-item]').should('have.class', 'active')
    cy.get('[id=starships-nav-item]').click().should('have.class', 'active')
    cy.get('[id=people-nav-item]').click().should('have.class', 'active')
    cy.get('[id=home-nav-item]').click().should('have.class', 'active')
  })

  it('Verifies changing pages on Starship list and should return to page 1', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=starships-nav-item]').click()
    cy.get('button[id=next-btn]').click()
    cy.get('p[id=page-counter-p]').should('have.text', 'Page: 2 of 4')
    cy.get('button[id=prev-btn]').click()
    cy.get('p[id=page-counter-p]').should('have.text', 'Page: 1 of 4')
  })

  it('Verifies Starship details: opens Death Star details then returns to Starships list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=starships-nav-item]').click()
    cy.get('.card').contains('Death Star').click()
    cy.get('h2').contains('Death Star')
    cy.get('button').contains('Back to All Starships').click()
    cy.get('p[id=page-counter-p]').should('have.text', 'Page: 1 of 4')
  })
})
