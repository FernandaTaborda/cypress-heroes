class loginPage {
    selectorList(){
        const selectors = {
            clickButton: 'li > .undefined',
            fillEmail: '[data-cy="email"]',
            fillPassword: '[data-cy="password"]',
            signInButton: '[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 w-full"]',
            logoutButton: '[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-gray-800 bg-gray-200/10 hover:bg-gray-200/75 focus:ring-gray-300 border border-gray-300"]',
            failedLogin: '[class="text-red-500"]'
        }
        return selectors
    }
    loginWithAnyUser(login){
        cy.visit('http://localhost:3000')
        cy.get(this.selectorList().clickButton).click()
        cy.get(this.selectorList().fillEmail).type(login.email)
        cy.get(this.selectorList().fillPassword).type(login.password)
        cy.get(this.selectorList().signInButton).click()
    }
    successfulLogin(){
        cy.get(this.selectorList().logoutButton).contains('Logout')
    }
    failedLogin(){
        cy.get(this.selectorList().failedLogin).contains('Invalid email or password').should('be.visible')
    }
}

export default loginPage