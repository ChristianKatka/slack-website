import { Component, Input } from '@angular/core';

@Component({
  selector: 'slack-websites-wrapper',
  templateUrl: 'wrapper.component.html',
})
export class WrapperComponent {
  @Input()
  width = '100%';
}
