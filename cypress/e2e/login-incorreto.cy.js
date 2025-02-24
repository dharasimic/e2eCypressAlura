describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')

    })

    it('Deve preencher os campos do login incorretamente e exibir mensagens ao usuário', () => {
        cy.login('marieduarda@gmail.com', 'Sen123');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('mnariaeduarda@gmail.com', 'Senha123');
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })


})
