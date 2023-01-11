'use strict';
export class tutorialpages {

verifypagesLinkisDisplayed(){
    cy.wait(4000);
    // First tab
        cy.xpath('//a[@href="#"][contains(.,"Selenium")]').click({ force: true })
        cy.xpath('//a[contains(.,"Yahoo")]').should('contain', "Yahoo");

    //Second tab
    cy.wait(40000);
    cy.xpath('//a[contains(.,"Insurance Project")]').click({ force: true })

      //  cy.get('.popover-header').should('contain', matchDetailClTitle)

    return this;
}

    
}
