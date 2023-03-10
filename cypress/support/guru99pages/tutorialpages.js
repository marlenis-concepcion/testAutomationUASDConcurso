'use strict';
export class tutorialpages {

    //form Insurance Project


    verifypagesLinkisDisplayed() {
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

    setRegisteringInfo() {
        cy.xpath('//a[@href="register.php"][contains(.,"Register")]').click({ force: true });
        cy.xpath('//input[@id="user_firstname"]').type("M J ");
        cy.xpath('//select[contains(@id,"title")][@name="title"]').select("Lady");
        cy.xpath('//input[contains(@id,"surname")][@name="lastname"]').type(" C C")
        
        return this;
    }

    setPhoneNumber(){
        cy.xpath('//input[contains(@name,"phone")]').type("809-535-8273");
        return this;
        
    }

    setDateOfBirth() {
        //year
        cy.xpath('//select[contains(@name,"year")]').select("1995");
        //month
        cy.xpath('//select[contains(@name,"month")]').select("December");

        //day
        cy.xpath('//select[contains(@name,"date")]').select("31");

        return this;
    }

    selectOccupation(){
        cy.xpath('//select[contains(@name,"occupation")]').select("Teacher");
       
        return this;
    }

    setStreet(){

        cy.xpath('//input[contains(@name,"street")]').type("Xavier X-MEN");
        return this;
    }

    setCity(){

        cy.xpath('//input[contains(@name,"city")]').type("Xavier X-MEN");
        return this;
    }

    setCounty(){

        cy.xpath('//input[contains(@name,"county")]').type("Zona Universitaria");
        return this;
    }

    setPostalCode(){
        cy.xpath('//input[contains(@name,"post_code")]').type("10707");
        return this;
    }

    setEmail(){

        cy.xpath('//input[contains(@name,"email")]').type("mjccmaster@gmail.com");
        return this;
    }

    
    setPassword(){

        cy.xpath('//input[@name="password"]').type("1234");
        return this;
    }

    setConfirmPassword(){

        cy.xpath('//input[contains(@name,"c_password")]').type("1234");
        return this;
    }
    

    clickSubmitBtn(){
        //cy.xpath('//input[contains(@value,"Create")]').click({ force: true });
        cy.xpath('//input[contains(@value,"Create")]').should('be.visible', 'Create');
        return this;
    }
    
}
