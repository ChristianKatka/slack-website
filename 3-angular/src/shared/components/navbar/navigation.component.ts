import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  showSearchBar = false;

  openSearchBar() {
    this.showSearchBar = true;
  }
  closeSearchBar() {
    this.showSearchBar = false;
  }
}
