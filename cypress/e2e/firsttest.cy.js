describe('Launch Application', () => {
  it('Launch the test Application', () => {
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type('test')
    cy.get("input[name='password']").type('test')

  })
})

// describe('Test', function() {
// describe('Login Scenario', ()=> {

//  it('Test1 - Valid Login',() =>{

//  })

//  it('Test1 - Invalid Login',() =>{
    
//  })
// })
