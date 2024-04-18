class ComplaintPage{


    get detailsbtn(){
        return $("//a[.='Details/Update']")
    }
    get complaintbtn(){
        return $("//a[.='Complaint']")
    }
    get appartmentname(){
        return $("//input[@id='name']")
    }
    get text(){
        return $("//input[@id='cmp']")
    }
    get submitbtn(){
        return $("//button[.='Submit']")
    }
    async ComplaintPage(aptname,cpmplaint){
        await this.detailsbtn.click()
        await this.complaintbtn.click()
         await this.appartmentname.setValue(aptname)
        await this.text.setValue(cpmplaint)
        await this.submitbtn.click()
    }
}
export default new ComplaintPage()