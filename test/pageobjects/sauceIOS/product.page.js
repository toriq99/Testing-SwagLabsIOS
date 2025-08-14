const { $, $$, expect } = require('@wdio/globals')

class ProductPage {
    /**
     * define selector page here
     */
    get cardProduct () { return $$('--ios class chain:**/XCUIElementTypeOther[`name == "test-Item"`]') }

    /**
     * defince function or action needed here
     */
    async cardProductListDisplayed () {
        this.cardProduct.forEach(element => {
            expect(element).toBeDisplayed()
        });
    }
}

module.exports = new ProductPage()