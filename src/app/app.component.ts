import { Component } from '@angular/core';
import { EmailControl } from './robust-forms/form-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: Array<any> = [
    new EmailControl('email'),
  ];
}
