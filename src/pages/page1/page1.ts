import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }

  cumprimentar(event){
    
    let inputTexto = document.getElementById("editNome");
    let label = document.getElementById("labelMensagem");
    label.innerText = "Alô, "+this.editNome+"!";
  }
}
