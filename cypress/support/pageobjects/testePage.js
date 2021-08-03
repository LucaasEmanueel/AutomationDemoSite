/// <reference types="Cypress"/>

import testeElementos from '../elementosPage/testeElementos'
const Elementos = new testeElementos

const NavegadorURL = Cypress.config("baseUrl");

class TestePage {

    openUrl(){
        cy.visit(NavegadorURL);
    }

    fillCampoPrimeiroNome(){
        cy.get(Elementos.campoPrimeiroNome()).type('Lucas');
    }

    fillCampoSegundoNome(){
        cy.get(Elementos.campoSegundoNome()).type('Emanuel');
    }

    fillCampoAdress(){
        cy.get(Elementos.adress()).type('Escrevendo qualquer coisa');
    }
    
    fillEmail(){
        cy.get(Elementos.emailAndress()).type('qa@teste.com');
    }

    fillPhone(){
        cy.get(Elementos.phone()).type('(83)0101-2121');
    }

    fillGander(){
        cy.get(Elementos.genderMale()).check('Male');
    }

    fillHobbies(){
        cy.get(Elementos.hobbies()).check();
    }

    fillLanguages(){
        cy.get(Elementos.languagens()).click();
        cy.get('ul').contains('English').click();
    }

    fillSkill(){
        cy.get(Elementos.skills()).select('APIs');

    }

    fillCountry(){
        cy.get(Elementos.country()).select('Brazil');
    }

    fillSelectCountry(){
        cy.get(Elementos.selectyCountry()).click();
        cy.get('span').contains('Japan').click();
    }

    fillYear(){
        cy.get(Elementos.year()).select('1996');
    }

    fillMonth(){
        cy.get(Elementos.month()).select('April');
    }
    
    fillDay(){
        cy.get(Elementos.day()).select('20');
    }

    fillPassword(){
        cy.get(Elementos.password()).type('Q@Testes123');
    }

    fillpasswordConfirm(){
        cy.get(Elementos.passwordConfirm()).type('Q@Testes123');
    }

   botao(){
       cy.get(Elementos.botaoRefresh())
   }

    clicarBotaoRefresh(){
        cy.get(Elementos.botaoRefresh()).click();
    }

    validarTelaLimpa(){
        cy.screenshot();
    }

    fotoDaTelaParaVerificarElemento(){
        this.validarTelaLimpa();
    }

    validaBotao(){
        return cy.get(Elementos.botaoRefresh())
    }
  

}

export default TestePage;