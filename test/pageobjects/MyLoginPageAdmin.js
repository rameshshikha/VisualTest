

class LoginPage{
    get loginbtn(){
        return $('#exampleInputEmail1')
    }
    get usernametf(){
        return $("//input[@id='exampleInputEmail1']")
    }

    get passwordtf(){
        return $("//input[@id='exampleInputPassword1']")
    }
    get submitbtn(){
        return $("//button[@type='submit']")
    }


    //business logics
    async loginToApplication(username,password){
        await this.loginbtn.click()
        await this.usernametf.setValue(username)
        await this.passwordtf.setValue(password)
        await this.submitbtn.click()


    }

}
export default new LoginPage()