class LoginUser{
    get Loginbtn(){
        return $("//a[.='Login']")
      }
      get loginmail(){
        return $('[name="username"]')
      }
      get loginpswd(){
        return $("//input[@name='password']")
      }
      get submituser(){
        return $("//button[.='Submit']")
      }
      async LoginUserPage(email,password){
        await this.Loginbtn.click()
        await this.loginmail.setValue(email)
        await  this.loginpswd.setValue(password)
        await  this.submituser.click()
      }
}
export default new LoginUser()