class appartmentregisterPage{

    get Registerbtn(){
        return $("//a[.='Register']")

    }
    get AprtmnetRegister(){
        return $("//ul[@class='nav nav-tabs']/li[2]")
    }
    get Appartmentname(){
        return $("//input[@id='apartment_name']")
    }
    get mobilenum(){
        return $("//input[@id='mobile']")
    }
    get alternatenum(){
        return $("//input[@id='alternat_mobile']")
    }
    get plotnum(){
        return $("//input[@id='plot_number']")
    }
    get country(){
        return $("//input[@id='country']")
    }
    get state(){
        return $("//input[@id='state']")
    }
    get city(){
        return $("//input[@id='city']")
    }
    get landmark(){
        return $("//input[@id='landmark']")
    }
    get address(){
        return $("//input[@id='address']")
    }
    get choosefile(){
        return $("//input[@id='image']")
    }
    get addmoreflats(){
        return $("//a[.='Add More(Plat Number/Description)']")
    }

    async appartmentregister(aptname,mobile,alternum,plotnum,country,state,landmark,address){
        await this.Registerbtn.click()
        await browser.pause(2000)
          await this.AprtmnetRegister.click()
          await browser.pause(2000)
          await this.Appartmentname.setValue(aptname)
          await browser.pause(2000)
          await this.mobilenum.setValue(mobile)
           await browser.pause(2000)
          await this.alternatenum.setValue(alternum)
          await browser.pause(2000)
          await this.plotnum.setValue(plotnum)
          await browser.pause(2000)
          await this.country.setValue(country)
          await browser.pause(2000)
          await this.state.setValue(state)
          await browser.pause(2000)
          await this.landmark.setValue(landmark)
          await browser.pause(2000)
          await this.address.setValue(address)
          await browser.pause(2000)
          await this.choosefile.setValue("D:/shikha/kitchen 1.png")
          await browser.pause(2000)
          await this.addmoreflats.click()

    }
}
export default new appartmentregisterPage()