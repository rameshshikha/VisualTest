import RegisterAprtmnt from "../pageobjects/RegisterAprtmntasUser.js";
import Login from "../pageobjects/LoginUserPage.js";
import Rgister from "../pageobjects/RgisterUser.js";

describe('reg test',()=>{
          let x= Math.floor((Math.random()*100)+1)
      
                  it('register demotest',async()=>{
                  
        
                        await  browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
                       await browser.maximizeWindow()
                        await browser.pause(5000)
                        await Rgister.registerUser('renu'+x+'','renuka'+x+'','89474857'+x+'','renu123'+x+'@gmail.com','renu@123'+x+'','renu@123'+x+'')
                          await browser.pause(2000)
                          let pass=await expect(Rgister.validate).toHaveText('Registration successfull. Now you can login')
                         console.log(pass);
                        await browser.pause(2000)
                  })
    it('Login test',async()=>{

       // await browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
        await browser.pause(5000)
        await Login.LoginUserPage('renu123'+x+'@gmail.com','renu@123'+x+'')    
                        await browser.pause(2000)  

    })
    it ('register aprtmnt test',async()=>{
           browser.pause(3000)
        await RegisterAprtmnt.appartmentregister('SHOBHA','98563864'+x+'','98163864'+x+'','3242'+x+'','india','karnataka','near to lake','sdhj,sdf,sdf,sdf,689789')
        await browser.pause(5000)
    })
})
