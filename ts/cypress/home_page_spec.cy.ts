describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080')
    cy.screenshot('Tela-Chuva')
  })
})
