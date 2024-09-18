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

describe('Hire', () => {
  it('Successful Hire', () => {
    login.loginWithAnyUser(userData.successfulLogin)
    hire.hireAnyPerson()
    hire.successHire()
  })
  it('Failed Hire', () => {
    hire.visitPage()
    hire.hireAnyPerson()
    hire.failHire()
    hire.failLike()
  })
})