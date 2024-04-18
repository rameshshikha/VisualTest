class DetailsPage{


           get detailsbtn(){
            return $("//a[.='Details/Update']")
           }
          
      async detailspage(){
        await this.detailsbtn.click()
       

      }


}

export default new DetailsPage()