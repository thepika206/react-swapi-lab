describe('Production test spec', () => {
  it('Visits the home page and checks for the Millennium Falcon, and opens Slave 1 ship details', () => {
    cy.visit('https://pcheung-sw-api.netlify.app/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#starships-nav-item').click();
    cy.get('[href="/starship/10/"] > .card > h3').should('have.text', 'Millennium Falcon');
    cy.get('#next-btn').click();
    cy.get('[href="/starship/21/"] > .card > h3').should('have.text', 'Slave 1');
    cy.get('[href="/starship/21/"] > .card > h3').click();
    cy.get('.card > :nth-child(2)').should('have.text', 'MODEL: Firespray-31-class patrol and attack');
    cy.get('button').should('have.text', 'Back to All Starships').click();
    /* ==== End Cypress Studio ==== */
  })
})