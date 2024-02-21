import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BienvenidaComponent } from './main/bienvenida/bienvenida.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ContactoComponent } from './main/contacto/contacto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EmpresaComponent } from './main/empresa/empresa.component';
import { ServiciosComponent } from './main/servicios/servicios.component';
import { AlmendrasComponent } from './main/almendras/almendras.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './servicios/email.service';
import { ToastModule  } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponent } from './main/modal/modal.component';
import { AEmpresaComponent } from './a-empresa/a-empresa.component';
import { AServiciosComponent } from './a-servicios/a-servicios.component';
import { AAceitunaComponent } from './a-aceituna/a-aceituna.component';
import { AAlmendrasComponent } from './a-almendras/a-almendras.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BienvenidaComponent,
    ContactoComponent,
    EmpresaComponent,
    ServiciosComponent,
    AlmendrasComponent,
    ModalComponent,
    AEmpresaComponent,
    AServiciosComponent,
    AAceitunaComponent,
    AAlmendrasComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    IconModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    EmailService,
    IconSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
