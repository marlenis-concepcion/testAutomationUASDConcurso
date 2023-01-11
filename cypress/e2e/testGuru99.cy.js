import { tutorialpages } from "../support/guru99pages/tutorialpages";
 let tp = new tutorialpages();

describe('UASD Concurso', () => {
    it('Login Guru 99', () => {
      cy.visit('http://demo.guru99.com')

      cy.get('[name=emailid]').type('guru99@email.com');
      cy.get('[type=submit]').click();  

      //assertions

      cy.wait(6000)
      cy.xpath('//h2[contains(@class,"barone")]').click()
      cy.get('.barone').should('be.visible', 'Guru99 Bank')
      cy.get('.barone').should('not.contain', 'Guru99 Bank999')

      tp.verifypagesLinkisDisplayed();


    })
  })