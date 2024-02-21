import { Component } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';
import {Modal, Ripple, initTE} from "tw-elements";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  constructor(public principal:PrincipalService) { }

  
  ngOnInit(): void {
    initTE({ Modal, Ripple });
  }

  toggleModal(option:string){
    this.principal.isModal = option;
  }
  
}
