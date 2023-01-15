import { tutorialpages } from "../support/guru99pages/tutorialpages";
let tp = new tutorialpages();


describe('Insurance Project', () => {
  it('Insurance Project filling form', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')


    tp
      .setRegisteringInfo()
      .setPhoneNumber()
      .setDateOfBirth()
      .selectOccupation()
      .setStreet()
      .setCity()
      .setCounty()
      .setPostalCode()
      .setEmail()
      .setPassword()
      .setConfirmPassword()
      .clickSubmitBtn();
  })

})