import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'datepicker';
  name = 'datepicker';
  placeholder = 'Choose date';

  iconPosition = 'suffix';

  formControl = new FormControl();
  formControl2 = new FormControl();
  formControl3 = new FormControl();
}
