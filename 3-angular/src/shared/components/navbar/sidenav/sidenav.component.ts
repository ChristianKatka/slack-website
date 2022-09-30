import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter();

  productLinkTreeOpen = false

  toggleTree() {
    console.log('asd');
    this.productLinkTreeOpen = !this.productLinkTreeOpen;
  }
}
