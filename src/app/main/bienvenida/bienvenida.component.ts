import { Component } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})

export class BienvenidaComponent {

  constructor(public principal:PrincipalService) { }
  
  toggleModal(option:string){
    this.principal.isModal = option;
  }
}
