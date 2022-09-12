class headerLocators {
    constructor () {
        //Blue Bar
this.LoginRegisterBtn = 'ul#customer_menu_top  a';
this.HomeBtn = '.logo > img[alt="Automation Test Store"]';
this.SPECIALS_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.ACCOUNT_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.CART_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.CHECKOUT_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.inputSearch = 'input#filter_keyword';

       //Cart & currency

       //Submenu 
this.HomeBtn = '.menu_home';
this.APPAREACCESSORIES_Btn = '.subnav > ul > li:nth-of-type(2) > a';
this.MAKEUP_Btn = '.subnav > ul > li:nth-of-type(3) > a';
this.SKINCARE_Btn = '.subnav > ul > li:nth-of-type(4) > a';
this.FRAGRANCE_Btn = '.subnav > ul > li:nth-of-type(5) > a';
this.MEN_Btn = '.subnav > ul > li:nth-of-type(6) > a';
this.HAIRCARE_Btn = '.subnav > ul > li:nth-of-type(7) > a';
this.BOOKS_Btn = '.subnav > ul > li:nth-of-type(8) > a';


    }
}

export default class Header{
    constructor() {
        this.locators = new headerLocators();
    }

getLoginRegisterButon (){
return cy.get(this.locators.LoginRegisterBtn);
    }

 getSearchInput (){
return cy.get(this.locators.inputSearch);
     }

 getLoginRegisterButon (){
return cy.get(this.locators.LoginRegisterBtn);
    }

}