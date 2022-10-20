
describe("Test", function()
{

  it("Click Prod VD", function(){
    cy.log("open site")
    cy.visit("http://demo.vercel.store")    
    
    cy.log("open menu New Arrivals")
    cy.get('a[href*="/search/clothes"]').should(
      "have.text",
      "New Arrivals").click({force:true});
    
    cy.log("open ACME Cup")
    cy.get('a[href*="/product/acme-cup"]').should(
      "have.text",
      "ACME Cup$25.00 USD").click({force:true});
      
    cy.log("Add to Cart ACME Cup")
    cy.get('[aria-label="Add to Cart"]').click();

    cy.get('[class="w-full border-accent-2 border ml-2"]').should('be.visible')
    
    cy.log("Take 5 positions of ACME Cup")
    cy.get('[d="M12 5V19"]').click({force: true}).click({force: true}).click({force: true}).click({force: true});
    
    cy.log("Check correct price of ACME Cup")
    cy.get('[class="flex flex-col justify-between space-y-2 text-sm"]').should(
      "have.text",
      "$125.00")
    
    
    cy.log("open Featured")
    cy.get('[class="ml-2 text-accent-7 text-sm "]').click();
    cy.get('a[href*="/search/featured"]').should(
      "have.text",
      "Featured").click({force:true});
    cy.log("Add to Cart Featured")
    cy.get('a[href*="/product/quarter-zip"]').should(
      "have.text",
      "Quarter Zip$90.00 USD").click({force:true});

    
    cy.get('[aria-label="size m"]').click();
    cy.log("Add to Cart Featured")
    cy.get('[aria-label="Add to Cart"]').click();

    cy.get('a[href*="/cart"]').should(
      "have.text",
      "My Cart")

    cy.get('[class="flex-1 flex flex-col text-base"]').find('a[href*="/product/quarter-zip"]').should(
      "have.text",
      "Quarter Zip")

    cy.get('[class="flex-1 flex flex-col text-base"]').find('a[href*="/product/acme-cup"]').should(
      "have.text",
      "ACME Cup")

    cy.get('[class="flex-1 flex flex-col text-base"]').eq(0).find('[class="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden"]').should(
      "have.text",
      "M")

    cy.get('[class="flex justify-between py-1"]>span').eq(1).should(
      "have.text",
      "$215.00")


    cy.get('a[href*="/checkout"]').should(
      "have.text",
      "Proceed to Checkout").click({force:true});   
    

    
      
      cy.get('[placeholder="Email or mobile phone number"]').type("+380564636624")
      cy.get('[placeholder="Last name"]').type("Zaharchenko")
      cy.get('[placeholder="Address"]').type("Patriotichna 8")
      cy.get('[placeholder="City"]').type("Chereshenki")
      cy.get('[placeholder="Postal code"]').type("77777")      
  
      cy.get('[id="continue_button"]').click();

    
      cy.get('[data-backup="usps-PriorityMailInternational-58.26"]').click();
      cy.get('[id="continue_button"]').click();


      cy.get('[class="blank-slate"]').should(
        "have.text",
        "\n          \n          \n              This store can’t accept payments right now.\n          \n        ")


  });
})