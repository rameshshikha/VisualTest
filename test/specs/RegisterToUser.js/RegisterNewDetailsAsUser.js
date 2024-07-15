import Rgister from "../../pageobjects/RgisterUser.js";
import Login from "../../pageobjects/LoginUserPage.js";
import Registeradmin from "../../pageobjects/Registeradminpage.js";
import DetailsPageAsUser from "../../pageobjects/DetailsPageAsUser.js";
import { expect } from "chai";

describe('registernewuser test',()=>{
    let x=Math.floor((Math.random()*100)+1)
          it('register demotest',async()=>{
          

                await  browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
                await browser.pause(5000)
                await Rgister.registerUser('renu'+x+'','renuka'+x+'','89474857'+x+'','renu123'+x+'@gmail.com','renu@123'+x+'','renu@123'+x+'')
                  await browser.pause(2000)
                  let pass=await expect(Rgister.validate).toHaveText('Registration successfull. Now you can login')
                 console.log(pass);
                await browser.pause(2000)
          })
          it('loginasUser test',async()=>{
                        await Login.LoginUserPage('renu123'+x+'@gmail.com','renu@123'+x+'')    
                        await browser.pause(2000)  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          })
          it('register admin test',async()=>{

            //  await browser.url('http://rmgtestingserver/domain/House_Rental_Application/app/register.php')
                let file='d:/shikha/assignmnt 2 edited.png'
                await Registeradmin.registerNewDetails('riya'+x+'','47436484'+x+'','86768543'+x+'','abc'+x+'@gmail.com','HME234'+x+''
              ,'2BHK','India','karnataka','bangalore','rent','NA','high security','near to metro'+x+'','plot 1, bangalore'+x+'',100000,'Occupied', file)
                await browser.pause(10000)
                await expect(Registeradmin.Valid).to.include('Registration successfull. Thank you')
                await browser.pause(2000)
                console.log('your script is pass');
                console.log('abc'+x+'@gmail.com');
                console.log('renu123'+x+'@gmail.com',   'renu@123'+x+'');   

              })
              it ('validation test',async()=>{
                         // await browser.url("http://rmgtestingserver/domain/House_Rental_Application/app/list.php")
                           let detailsbtn=await browser.$("//a[.='Details/Update']")
                           await detailsbtn.click()
                  
                  
                    let list = await browser.$$("//section[@class='wrapper']//div[@class='card card-inverse card-info mb-3']")
               
                           // console.log(list);
                          await  browser.pause(2000)
                          // list.forEach ((element) =>{
                          //   console.log(element);
                                 list.map((ele)=>{
                                  let a=ele.getText()
                                 console.log(ele.getText());
                                 })


                                    
                                    await expect(a).toHaveText('riya'+x+'')
                                     expect(a).to.be.equal('riya'+x+'')
                                    expect (a).to.be.include('riya') 
                                    expect(a).to.be.a.string.to.include('riya')
                                    expect(a).to.be.a.string.toHaveText('riya')
                                    console.log(('pass'));
                       
                          })
                            })

                  
      
               
                  
      