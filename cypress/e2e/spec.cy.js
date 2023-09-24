
describe('Local:Navbar', () => {
  it('Verify nav bar: starships, people and back to home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=home-nav-item]').should('have.class', 'active')
    cy.get('[id=starships-nav-item]').click().should('have.class', 'active')
    cy.get('[id=people-nav-item]').click().should('have.class', 'active')
    cy.get('[id=home-nav-item]').click().should('have.class', 'active')
  })
})

describe('Local:Starship list', () => {
  it('Verify changing pages on Starship list', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#starships-nav-item').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 1 of 4');
    cy.get('#prev-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 1 of 4');//Prev should do nothing on page 1
    cy.get('#next-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 2 of 4');//Next works
    cy.get('#next-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 3 of 4');
    cy.get('#next-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 4 of 4');
    cy.get('#next-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 4 of 4');//Next should do nothing on last page
    cy.get('#prev-btn').click();
    cy.get('#page-counter-p').should('have.text', 'Page: 3 of 4');//Prev works
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test Drilling into Starship Details from List for Millenium Falcon', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/starships');
    cy.get('[href="/starship/10/"] > .card').click();
    cy.get('.card > :nth-child(2)').should('have.text', 'MODEL: YT-1300 light freighter');
    cy.get('button').should('have.text', 'Back to All Starships');
    cy.get('button').should('be.visible');
    cy.get('button').click();
    cy.get('[href="/starship/10/"] > .card').click();
    cy.get('[href="/people/14/"] > p').should('have.text', 'Han Solo');
    cy.get('[href="/people/14/"] > p').click();
    cy.get('h2').should('have.text', 'Han Solo');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Test directly loading ship details for Millenium Falcon', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/starship/10/');
    cy.get('h2').should('have.text', 'Millennium Falcon');
    /* ==== End Cypress Studio ==== */
  });
})

