import Rgister from "../../pageobjects/RgisterUser.js";
import Login from "../../pageobjects/LoginUserPage.js";
import { expect } from "chai";

describe('registernewuser test',()=>{
    let x=Math.floor((Math.random()*100)+1)
          it('register demotest',async()=>{
          

                await  browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
                await browser.pause(5000)
                await Rgister.registerUser('renu'+x+'','renuka'+x+'','89474857'+x+'','renu123'+x+'@gmail.com','renu@123'+x+'','renu@123'+x+'')
                  await browser.pause(2000)
                  let pass = expect(Rgister.validate).to.include('Registration successfull. Now you can login')
                 console.log(pass);
                await browser.pause(2000)
          })
          it('loginasUser test',async()=>{
                        await Login.LoginUserPage('renu123'+x+'@gmail.com','renu@123'+x+'')    
                        await browser.pause(2000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
          })
        
          
})