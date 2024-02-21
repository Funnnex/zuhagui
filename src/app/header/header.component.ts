import { Component } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';
import {Modal, Ripple, initTE} from "tw-elements";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  links = [
     {
      name: 'Empresa',
      link: 'empresa'
     },
    { 
      name: 'Servicios',
      link: 'servicios'
    },
    { 
      name: 'Aceituna', 
      link: 'aceituna'
    },
    {
      name: 'Almendras',
      link: 'almendras'
    },
    {
      name: 'Contacto',
      link: 'mail'
    }
    ];

  constructor(public principal: PrincipalService) {}

  ngOnInit(): void {
    initTE({ Modal, Ripple });
  }

  toggleModal(option: string) {
    this.principal.isModal = option;
  }

}
