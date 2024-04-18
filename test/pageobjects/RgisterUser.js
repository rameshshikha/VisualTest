class RegisterUser{
  get registerbtn(){
    return $("//a[.='Register']")
  }
  get fullnametf(){
    return $("//input[@id='fullname']")
  }
  get usernametf(){
    return $("//input[@id='username']")
  }
  get mobiletf(){
    return $("//input[@id='mobile']")
  }
  get Emailtf(){
    return $("//input[@id='email']")
  }
  get Passwordtf(){
    return $("//input[@id='password']")
  }
  get confpassword(){
    return $("//input[@id='c_password']")
  }
  get submitbtn(){
    return $("//button[@type='submit']")
  }
  get validate(){
    return $("//div[.='Registration successfull. Now you can login']")
  }

  async registerUser(fullname,username,mobile,email,pswd,cnfpswd){
       await this.registerbtn.click()
       await this.fullnametf.setValue(fullname)
       await this.usernametf.setValue(username)
       await this.mobiletf.setValue(mobile)
       await this.Emailtf.setValue(email)
       await this.Passwordtf.setValue(pswd)
       await this.confpassword.setValue(cnfpswd)
       await this.submitbtn.click()
     

  }
}
export default new RegisterUser()