class EditPage{
     
    get detailsbtn(){
        return $("//a[.='Details/Update']")

    }
    get Editbtn(){
        return $("//a[.='Edit']")
    }
    get Vacantdropdown(){
        return $("//div[@class='form-group']//select[@id='vacant']")
       }
       get submit(){
        return $("//button[.='Submit']")
       }
       get Areatf(){
        return $("//input[@id='area']")
       }

       async EditPage(areatext){
              await browser.pause(3000)
               await this.detailsbtn.click()
               await this.Editbtn.click()
               //await this.Vacantdropdown.selectByVisibleText(text)
                  await this.Areatf.setValue(areatext);
               await this.submit.click();
            }
}
export default new EditPage()