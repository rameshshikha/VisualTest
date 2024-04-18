import Complaint from "../pageobjects/ComplaintasAdminPage.js";
import MyLogin from "../pageobjects/MyLoginPageAdmin.js";
import complaint from "../pageobjects/complaint validation.js";



describe('complaint test',()=>{
    it('loginas admin test',async()=>{
        await browser.url("http://rmgtestingserver/domain/House_Rental_Application/index.php")
        await browser.pause(3000)
        await MyLogin.loginToApplication('admin','admin') 
        await browser.pause(3000)
    })



it('complaint test',async()=>{



await browser.pause(3000)
await Complaint.ComplaintPage('A1202','NO CCTV')
await browser.pause(3000)
})

it('validation test', async()=>{
    await expect(complaint.validate).toEqual('Sent Successfully')
          console.log( `pass`);

})
})