describe('Tests Quote App', function () {
    it('App runs', function () {
        cy.visit('http://localhost:4200');
    });

    //QUOTES
    it('mock quotes get', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/quotes',
            status: 200,
            response: 'fixture:quotes.json'
        });

        cy.visit('/');
        cy.get('[data-cy=quoteCard]').should('have.length', 5);
    })

    it('on error should show error message quotes', function() {
        cy.server();
        cy.route({
          method: 'GET',
          url: '/api/quotes',
          status: 500,
          response: 'ERROR'
        });
        cy.visit('/');
        cy.get('[data-cy=quotesError]').should('be.visible');
      });

      //AUTEURS
    it('mock auteurs get', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/auteurs',
            status: 200,
            response: 'fixture:auteurs.json'
        });

        cy.visit('/auteur/list');
        cy.get('[data-cy=auteurCard]').should('have.length', 3);
    })

    it('on error should show error message auteurs', function() {
        cy.server();
        cy.route({
          method: 'GET',
          url: '/api/auteurs',
          status: 500,
          response: 'ERROR'
        });
        cy.visit('/auteur/list');
        cy.get('[data-cy=auteurError]').should('be.visible');
      });

    //QUOTE DETAILS / COMMENTS /quote/detail/2
    it('mock Comments get QuoteId=2', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/quotes/2',
            status: 200,
            response: 'fixture:opmerkingId2.json'
        });

        cy.visit('/quote/detail/2');
        cy.get('[data-cy=opmerkingCard]').should('have.length', 3);
    })
})