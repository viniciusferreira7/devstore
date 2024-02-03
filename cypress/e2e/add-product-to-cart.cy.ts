describe('add product to cart', () => {
  it('should be able to navigate to the product page and add it to cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"]').first().click()

    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should not count duplicated products in cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"]').first().click()

    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to cart', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name=q]').type('Camiseta').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
  })
})
