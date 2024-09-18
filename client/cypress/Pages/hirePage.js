class hire {
    selectorlist(){
        const selectors ={
            buttonHireAHero: "[data-cy='money']",
            errorHireWithoutLogin: "[class='undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-gray-800 bg-gray-200/10 hover:bg-gray-200/75 focus:ring-gray-300 border border-gray-300']",
            buttonLikeAHiro: "[data-cy='like']",
            successHire: "[class='undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-red-300']",
        }
        return selectors
    }
    visitPage(){
        cy.visit('http://localhost:3000')
    }
    hireAnyPerson(){
        cy.get(this.selectorlist().buttonHireAHero).eq(0).click()
    }
    successHire(){
        cy.get(this.selectorlist().successHire).click()
    }
    failHire(){
        cy.get(this.selectorlist().errorHireWithoutLogin).eq(15).click()
    }
    failLike(){
        cy.get(this.selectorlist().buttonLikeAHiro).eq(0).click()
        cy.get(this.selectorlist().errorHireWithoutLogin).eq(15).click()
    }
}

export default hire