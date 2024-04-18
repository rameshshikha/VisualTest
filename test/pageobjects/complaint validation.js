class complaintvalidation{
    get validate(){
        return $("//div[.='Sent Successfully']")
    }
    async validate(){
        await this.validate.getText()
    }

}
export default new complaintvalidation()