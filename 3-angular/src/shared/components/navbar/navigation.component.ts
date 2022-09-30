import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  showSearchBar = false;

  openSearchBar() {
    console.log('open');
    
    this.showSearchBar = true;
  }
  closeSearchBar() {
    this.showSearchBar = false;
  }
}
