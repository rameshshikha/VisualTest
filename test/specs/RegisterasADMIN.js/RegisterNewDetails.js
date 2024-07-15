import register from "../../pageobjects/Registeradminpage.js";
import login from "../../pageobjects/MyLoginPageAdmin.js";
import { expect } from "chai";

describe('register test',()=>{
  let x = Math.floor((Math.random()*10)+1)
    it('loginToApplication',async()=>{
    
        await  browser.pause(3000)
         await browser.url('http://rmgtestingserver/domain/House_Rental_Application/auth/login.php')
         await browser.maximizeWindow()
         await browser.pause(3000)
         await login.loginToApplication('admin','admin')
         await browser.pause(3000)
     })
    it('register admin test',async()=>{

      //  await browser.url('http://rmgtestingserver/domain/House_Rental_Application/app/register.php')
          let file='d:/shikha/assignmnt 2 edited.png'
          await register.registerNewDetails('miya'+x+'','474364848'+x+'','867685432'+x+'','abc'+x+'@gmail.com','HME234'+x+''
        ,'2BHK','India','karnataka','bangalore','rent','NA','high security','near to metro'+x+'','plot 1, bangalore'+x+'',100000,'Occupied', file)
          await browser.pause(10000)
        expect(register.Valid).to.include('Registration successfull. Thank you');
        
          await browser.pause(2000)
          console.log('your script is pass');
  

    })
    

})