class hire {
    selectorsList(){
        const selectors = {
            likeButton: '[data-cy="like"]',
            errorClickMessage: '[class="open modal p-8 border shadow-lg rounded-md bg-white relative"]',
            contractButton: '[data-cy="money"]',
            closeErrorButton: '[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-gray-800 bg-gray-200/10 hover:bg-gray-200/75 focus:ring-gray-300 border border-gray-300"]',
            hireTheFirstPerson: '[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-red-300"]',

        }
        return selectors
    }
    page(){
        cy.visit('http://localhost:3000')
    }
    clickLikeUser(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }
    clickHireUser(){
        cy.get(this.selectorsList().contractButton).eq(0).click()
    }
    errorClick(){
        cy.get(this.selectorsList().errorClickMessage).should('be.visible')
        cy.get(this.selectorsList().closeErrorButton).eq(15).click()
    }
    succssfulHire(){
        cy.get(this.selectorsList().hireTheFirstPerson).click()
    }
}

export default hire