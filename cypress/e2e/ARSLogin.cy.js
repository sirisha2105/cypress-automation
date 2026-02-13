
describe('First Test', () => {
  it('passes', () => {
    cy.visit('https://ars.bluepalapps.com/login')

    cy.get("input[type='text']").type("ranjit.sahoo@bluepal.com")
    cy.get("input[type='password']").type("Ranjit@123")

    cy.get("span[class='MuiButton-label']").click()

    cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-fullWidth").click();
    

    
  })
})