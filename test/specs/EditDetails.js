import Edit from "../pageobjects/EditPage.js";


import MyLoginPage from "../pageobjects/MyLoginPageAdmin.js";

   describe('edit test',()=>{
    it('edit demotest',async()=>{
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
        await browser.pause(2000)
        await MyLoginPage.loginToApplication('admin','admin')
        await Edit.EditPage('bangalore')
        await browser.pause(2000)
        

        
    })
   })