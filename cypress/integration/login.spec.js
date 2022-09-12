/// <reference types="cypress" />
import HeaderPage from '../pages/header';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import Data from '../fixtures/users.json';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('Login Fail - Wrong user & pass', () => {
   const header = new HeaderPage;
   const login = new LoginPage;

   header.getLoginRegisterButon().click();

   login.getUserInput().type('HolaMundo');
   login.getPassInput().type('HolaMundo');
   login.getLoginBtn().click();

   login.getAlertBox().should("contain.text", "Error: Incorrect login or password provided.");

  })

  it('Login Mari', () => {
    const header = new HeaderPage;
    const login = new LoginPage;
    const home = new HomePage;
 
    header.getLoginRegisterButon().click();
 
    login.getUserInput().type('mariDugarte');
    login.getPassInput().type('automation');
    login.getLoginBtn().click();

    home.getUserName().should("contain.text", "Mari");
    home.getUserName2().should("contain.text", "Mari");

})

it.only('Login OK', () => {
  const header = new HeaderPage;
  const login = new LoginPage;

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[0].user);
  login.getPassInput().type(Data.users[0].password);
  login.getLoginBtn().click();

})

})