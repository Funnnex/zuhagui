import { Component } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';
import { Modal, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {


  datos = [
    { id: 'empresa' , hh: 'La empresa' },
    { id: 'servicios' , hh: 'Nuestros Servicios' },
    { id: 'aceituna' , hh: 'Recogida de aceitunas' },
    { id: 'almendras' , hh: 'Almendras' },
    { id: 'mail' , hh: 'Contacto' }
  ]

  constructor(
    public principal: PrincipalService
  ) {}

  ngOnInit(): void {
    initTE({ Modal, Ripple });
  }

}
