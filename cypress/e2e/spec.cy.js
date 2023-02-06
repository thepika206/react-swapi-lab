

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    
    cy.contains('type').click()
    
    // looking for a new URL that includes 
    //'/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input with the class of "action-email", type into it
    cy.get('.action-email').type('fake@email.com')

    // Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

// future section of tests 

// Production tests
// describe('Production Test', () => {
//   it('It visits the deployed app home page', () => {
//     cy.visit('https://pcheung-sw-api.netlify.app/')
    
//   })
// })

describe('Local Navbar Test', () => {
  it('It visits the deployed app home page', () => {
    cy.visit('http://localhost:3000/')

//select the home-nav-item
    cy.get('[id=home-nav-item]').should('have.class', 'active')

//navigate to starships and advance pages
    cy.get('[id=starships-nav-item]').click().should('have.class', 'active')
    cy.get('button[id=next-btn]').click()
    cy.get('p[id=page-counter-p]').should('have.text', 'Page: 2 of 4')
    cy.get('button[id=prev-btn]').click()
    cy.get('p[id=page-counter-p]').should('have.text', 'Page: 1 of 4')

//select the people-nav-item
    // cy.get('[id=people-nav-item]').click().should('have.class', 'active')

  })
})