'use strict';
export class tutorialpages {

    //form Insurance Project

    
verifypagesLinkisDisplayed(){
    cy.wait(4000);
    // First tab
        cy.xpath('//a[@href="#"][contains(.,"Selenium")]').click({ force: true })
        cy.xpath('//a[contains(.,"Yahoo")]').should('contain', "Yahoo");
        cy.wait(4000);
        cy.xpath('(//b[@class="caret"])[1]').click({ force: true })
        cy.reload();

    // //Second tab
    // cy.wait(40000);
    // cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    // //cy.xpath('//a[contains(.,"Insurance Project")]').dblclick({ force: true })

    //   //  cy.get('.popover-header').should('contain', matchDetailClTitle)

    return this;
}

    
}
