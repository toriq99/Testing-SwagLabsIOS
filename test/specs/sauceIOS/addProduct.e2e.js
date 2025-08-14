const { expect } = require('@wdio/globals')
const iosLogin = require('../../pageobjects/sauceIOS/login.page')
const productPage = require('../../pageobjects/sauceIOS/product.page')

describe('Login SwagLabs', () => {
    it('Should login successfully', async () => {
        await iosLogin.login('standard_user', 'secret_sauce')
        
        productPage.cardProduct.forEach(element => {
            expect(element).toBeDisplayed()
        })
    })
})