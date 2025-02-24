describe('Api Adopet', () =>{
   
    it ('API Perfil do Usuário', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/329d8fbf-22e6-47d3-830e-0d4d14be24ba',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Maria')
        })
    })
})