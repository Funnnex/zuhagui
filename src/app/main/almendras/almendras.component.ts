import { Component } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';

@Component({
  selector: 'app-almendras',
  templateUrl: './almendras.component.html',
  styleUrls: ['./almendras.component.css'],
})
export class AlmendrasComponent {

  videdo: string = '../../../assets/videos/video-1.mp4';
  play: boolean = false;
  namevideo: string = 'VIDEO 1'

  constructor(public principal: PrincipalService) {}

  toggleModal(option: string) {
    this.principal.isModal = option;
  }

  video(opt: string) {
    if (opt == 'clip-1') {
      this.videdo = '../../../assets/videos/video-1.mp4';
      this.play = true;
      this.namevideo = 'VIDEO 1';   
    }
    if (opt == 'clip-2') {
      this.videdo = '../../../assets/videos/video-2.mp4';
      this.play = true;
      this.namevideo = 'VIDEO 2';
    }
  }
}
