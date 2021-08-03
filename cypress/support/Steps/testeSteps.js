/* global Given, When, And, Then */


import testElementos from '../elementosPage/testeElementos'
import testePage from '../pageobjects/testePage'
const Pagina = new testePage
const elementos = new testElementos


/*******************************************************/

Given("que acesso o site Automation Demo", ()=>{
    Pagina.openUrl();
})

When("preencho todos os campos do registro",()=>{
    Pagina.fillCampoPrimeiroNome();
    Pagina.fillCampoSegundoNome();
    Pagina.fillCampoAdress();
    Pagina.fillEmail();
    Pagina.fillPhone();
    Pagina.fillGander();
    Pagina.fillHobbies();
    Pagina.fillSkill();
    Pagina.fillCountry();
    Pagina.fillSelectCountry();
    Pagina.fillYear();
    Pagina.fillMonth();
    Pagina.fillDay();
    Pagina.fillPassword();
    Pagina.fillpasswordConfirm();   
    Pagina.fillLanguages();
    
})

Then("verifico se o botao refresh apaga todos os campos", () =>{
    Pagina.fotoDaTelaParaVerificarElemento();
    Pagina.clicarBotaoRefresh();
    Pagina.validarTelaLimpa();
    Pagina.validaBotao().should('have.value', 'Refresh');
})