import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class NavbarSearchComponent {
  @Output()
  closeSearchBar = new EventEmitter();
  @Output()
  searchUserTyping = new EventEmitter();

  showAutoCompleteTextList = false;

  searchFormControl = new FormControl('');
  form = new FormGroup({
    search: this.searchFormControl,
  });

  onSearchUserTyping() {
    if (!this.form.value.search) return;
    this.searchUserTyping.emit(this.form.value.search);
  }

  onCloseSearchBar() {
    this.searchFormControl.setValue('');
    this.closeSearchBar.emit();
  }
  focus() {
    this.showAutoCompleteTextList = true;
  }
  onfocusout() {
    this.showAutoCompleteTextList = false;
  }
}
