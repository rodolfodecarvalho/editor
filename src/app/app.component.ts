import { Component } from '@angular/core';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'editor';

  modules = {};

  constructor() {
    this.modules = {
      imageResize: {},
      syntax: true,
    };
  }
}
