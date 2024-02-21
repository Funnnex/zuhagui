import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PrincipalService } from 'src/app/servicios/principal.service';
import { Input, Ripple, Toast, initTE, Carousel } from 'tw-elements';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  constructor(
    public principal: PrincipalService,
    private builder: FormBuilder,
    private http: HttpClient
  ) {}

  FormData!: FormGroup;
  hidden: boolean = false;
  spinner: boolean = false;

  ngOnInit() {
    initTE({ Input, Ripple, Carousel, Toast });
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      mens: new FormControl('', [Validators.required]),
    });
  }

  envioMailBackend() {
    let params = {
      name: this.FormData.value.name,
      mail: this.FormData.value.mail,
      mens: this.FormData.value.mens,
    };

    this.http
      .post('http://localhost:3000/envioMail', params)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  async envioMail() {
    this.spinner = true;
    emailjs.init('B-aeaO40aVZiJgCaQ');
    await emailjs.send('service_hfpc2xm', 'template_8s9n7pr', {
      from_name: 'zuagui WEB',
      to_name: this.FormData.value.name,
      from_email: this.FormData.value.mail,
      message: this.FormData.value.mens,
      reply_to: this.FormData.value.mail,
    });
    this.FormData.reset();
    this.spinner = false;
    this.hidden = true;
  }
}
