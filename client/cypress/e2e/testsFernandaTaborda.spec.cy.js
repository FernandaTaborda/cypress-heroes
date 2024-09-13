import loginPage from '../Pages/loginPage.js'
import userData from '../fixtures/userData.json'
import hirePage from '../Pages/hirePage.js'

const login = new loginPage
const hire = new hirePage

describe('Login', () => {
  it('Successful login', () => {
    login.loginWithAnyUser(userData.successfulLogin)
    login.successfulLogin()
  })
  it('Failed login', () => {
    login.loginWithAnyUser(userData.failedLogin)
    login.failedLogin()
  })
})

describe('Hiring a Hero', () => {
  it('Hire without logging in', () => {
    hire.page()
    hire.clickHireUser()
    hire.errorClick()
    hire.clickLikeUser()
    hire.errorClick()
  })
  it('Hire after logging in', () => {
    login.loginWithAnyUser(userData.successfulLogin)
    hire.clickHireUser()
    hire.succssfulHire()
  })
})