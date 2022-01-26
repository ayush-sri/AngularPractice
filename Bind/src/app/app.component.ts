import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   greet(name:string) {
     alert('hello message should be'+name);
   }
   


  //userLoggedin = true;
  //@Input() count;
  //title = 'Bind';
  //course ='Angular';
  //clickMessage = '';
  //uname:string="abhsie";
  //image ='https://www.google.com/search?q=image+for+prjecty&tbm=isch&ved=2ahUKEwiCxc3Znq3wAhU2x3MBHTT3A-UQ2-cCegQIABAA&oq=image+for+prjecty&gs_lcp=CgNpbWcQAzoHCAAQsQMQQzoECAAQQzoFCAAQsQM6AggAOggIABCxAxCDAVCwgQJYw5oCYJGbAmgAcAB4AIAB2gGIAfoLkgEFMC44LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=2cePYML0EbaOz7sPtO6PqA4&rlz=1C1CHBF_enIN918IN918#imgrc=4Lzjj5V0jjEZdM';
 
    

  //onClickMe() {
    //this.clickMessage = 'You are my hero!';
  



}
