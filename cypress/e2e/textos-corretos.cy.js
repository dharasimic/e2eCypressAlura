describe('Teste na Página Inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })
    it ("Deve exibir o texto 'AdoPet' na página inicial", () => {
        cy.title().should('eq', 'AdoPet');
    })

    it("Deve exibir o texto 'Quem ama adota' na página inicial", () => {
        cy.contains('Quem ama adota').should('be.visible');
    })

    it ("Dev exibit o texto 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!' na página inicial", () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
})