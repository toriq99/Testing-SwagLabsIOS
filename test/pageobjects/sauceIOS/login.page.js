const { $ } = require('@wdio/globals')
const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPageSauce extends Page {
    /**
     * define selectors using getter methods
     */
    get username () { return $('~test-Username')};
    get password () { return $('-ios class chain:**/XCUIElementTypeOther[`name == "Password"`][1]')};
    get btnLogin () { return $('//XCUIElementTypeOther[@name="test-LOGIN"]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPageSauce();
