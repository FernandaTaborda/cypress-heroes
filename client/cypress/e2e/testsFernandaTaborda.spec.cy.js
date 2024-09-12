import loginPage from '../Pages/loginPage.js'
import userData from '../fixtures/userData.json'

const login = new loginPage

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