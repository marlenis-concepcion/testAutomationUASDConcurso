import { tutorialpages } from "../support/guru99pages/tutorialpages";
 let tp = new tutorialpages();


describe('Insurance Project', () => {
  it('Insurance Project filling form', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.xpath('//a[@href="register.php"][contains(.,"Register")]').click({ force: true });
    cy.xpath('//input[@id="user_firstname"]').type("Riserani SinSegundo");



  })

})