class Register{
    get registerbttn(){
        return $("//a[.='Register']")
    }
    get fullnametf(){
        return $("//input[@id='fullname']")
    }
    get mobilenumtf(){
        return $("//input[@name='mobile']")
    }
    get altermobiletf(){
        return $("//input[@id='alternat_mobile']")
    }
    get Emailtf(){
        return $("//div[@class='form-group']//input[@type='email']")
    }
    get PlotNumtf(){
        return $("//div[@class='form-group']//input[@id='plot_number']")
    }
    get AvailableRoomstf(){
        return $("//div[@class='form-group']//input[@name='rooms']")
    }
    get Countrytf(){
        return $("//div[@class='form-group']//input[@type='country']")
    }
    get Statetf(){
        return $("//div[@class='form-group']//input[@id='state']")
    }
    get Citytf(){
        return $("//div[@class='form-group']//input[@id='city']")
    }
    get Renttf(){
        return $("//div[@class='form-group']//input[@id='rent']")
    }
    get Saletf(){
        return $("//div[@class='form-group']//input[@id='sale']")
    }
    get Descriptiontf(){
        return $("//div[@class='form-group']//input[@id='description']")
    }
      get Landmarktf(){
        return $("//div[@class='form-group']//input[@id='landmark']")
      }
       get Addresstf(){
        return $("//div[@class='form-group']//input[@id='address']")
       }
       get Vacantdropdown(){
        return $("//div[@class='form-group']//select[@id='vacant']")
       }
       get Deposittf(){
        return $("//div[@class='form-group']//input[@id='deposit']")
       }
       get Imageicon(){
        return $("//div[@class='col-md-4']//input[@id='image']")
       }
       get Submitbtn(){
        return $("//button[.='Submit']")
       }
       get Valid(){
        return $("//div[@class='tab-content']/descendant::div[.='Registration successfull. Thank you'][1]")
       }
       
    async registerNewDetails(fullname,mobile,altermobile,Email,Plotnum,AvailRoom,Country,
    State,City,Rent,Sale,Description,Landmark,Address,Deposit,text,filename)
    {
        await this.registerbttn.click()
  
        await this.fullnametf.setValue(fullname)
     
        await this.mobilenumtf.setValue(mobile)
        
        await this.altermobiletf.setValue(altermobile)
 
        await this.Emailtf.setValue(Email)
     
        await this.PlotNumtf.setValue(Plotnum)
   
        await this.AvailableRoomstf.setValue(AvailRoom)
     
        await this.Countrytf.setValue(Country)
     
        await  this.Statetf.setValue(State)

        await this.Saletf.setValue(Sale)
        
        await this.Citytf.setValue(City)
  
        await this.Renttf.setValue(Rent)
       
        await this.Descriptiontf.setValue(Description)
       
        await this.Landmarktf.setValue(Landmark)
       
        await this.Addresstf.setValue(Address)
        
        await this.Deposittf.setValue(Deposit)

        await this.Vacantdropdown.click()
       
        await this.Vacantdropdown.selectByVisibleText(text)
      
        await this.Imageicon.setValue(filename)

        await this.Submitbtn.click()
        
       
    }

}
export default new Register()