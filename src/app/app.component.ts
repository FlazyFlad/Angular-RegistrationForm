import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  users: any[] = [];


}
