import { Component, Input } from '@angular/core';
import { Icon, Size } from './fm-icon.config';

@Component({
  selector: 'fm-icon-ui',
  templateUrl: './fm-icon.component.html',
  styleUrls: ['./fm-icon.component.scss'],
})
export class FmIconComponent implements Icon {
  @Input() name: string = '';
  @Input() size: Size = 'md';

  get dynamicClasses() {
    return {
      ['fm-' + this.name]: true,
      ['fm-size-' + this.size]: !!this.size
    };
  }
}
