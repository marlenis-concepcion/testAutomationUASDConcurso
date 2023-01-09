describe('template spec', () => {
    it('Login Guru 99', () => {
      cy.visit('http://demo.guru99.com')

      cy.get('[name=emailid]').type('guru99@email.com');
      cy.get('[type=submit]').click();  

      //assertions

      cy.wait(60000)
      cy.xpath('//h2[contains(@class,"barone")]').click();
    })
  })