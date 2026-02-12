describe('Re-Registration Functionality', () => {
  it('Same User again Registartion', () => {
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("#loginPanel > p:nth-child(3) > a").click()
    cy.get('[name="customer.firstName"]').type("Sirisha")
    cy.get('[name="customer.lastName"]').type("Talluri")
    cy.get('[name="customer.address.street"]').type('Addagutta')
    cy.get('[name="customer.address.city"]').type(92387489)
    cy.get('[name="customer.address.state"]').type('Telangana')
    cy.get('[name="customer.address.zipCode"]').type(500090)
    cy.get('[name="customer.phoneNumber"]').type(8978218002)
    cy.get('[name="customer.ssn"]').type(8219839120)

    cy.get('[name="customer.username"]').type('Sirisha')
    cy.get('[name="customer.password"]').type('Siri@123')
    cy.get('[name="repeatedPassword"]').type('Siri@123')

    cy.get('[colspan="2"] > .button').click();
    cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
    //cy.get("span[id='customer.username.errors']").contains('This username already exists.')


   

  })
})

// describe('Test', function() {
// describe('Login Scenario', ()=> {

//  it('Test1 - Valid Login',() =>{

//  })

//  it('Test1 - Invalid Login',() =>{
    
//  })
// })
