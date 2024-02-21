import { Component } from '@angular/core';
import { Toast, Input, Carousel, Modal, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zuhaguiWeb';

  ngOnInit(): void {
    initTE({ Modal, Ripple, Input, Carousel, Toast });
  }

}
