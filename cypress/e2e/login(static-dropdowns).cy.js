describe('Login Functionality', () => {
  it('Login with registered User', () => {
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
   cy.get("input[name='username']").type("Sirisha")
   cy.get("input[name='password']").type("Siri@123")
   cy.get("input[value='Log In']").click()

 cy.get('#accountTable>tbody>tr>td>a', { timeout: 10000 }).should('be.visible').click();
   cy.get("select[id='month']").select(2) //using index
   cy.get("select[id='month']").select("March") //Using Value
      cy.get("select[id='month']").select("May") //Using Text

  })
})

