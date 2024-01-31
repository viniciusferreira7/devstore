describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('moletom fabricado', {
      matchCase: false,
    }).click()

    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()
  })
})
