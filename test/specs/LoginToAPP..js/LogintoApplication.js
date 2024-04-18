import login from "../../pageobjects/MyLoginPageAdmin.js";
import fs from "fs"
 let cred=JSON.parse(fs.readFileSync('./test/TestData/logincred.json'))

describe('logintoapplication test',()=>{
      let  username= cred.username
       let  password = cred.password
       console.log( username , password);
    it('loginToApplication',async()=>{
       await  browser.pause(3000)
        await browser.url('http://rmgtestingserver/domain/House_Rental_Application/auth/login.php')
        browser.pause(3000)
        await login.loginToApplication(username, password)
         await browser.pause(3000)
    })
    
})