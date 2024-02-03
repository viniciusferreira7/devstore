describe('add product to cart', () => {
  it('should be able to search for a product', () => {
    cy.visit('/')

    cy.get('input[name=q]').type('camiseta').parent('form').submit()

    cy.location('search').should('include', '?q=camiseta')
    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to search without a search params', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
