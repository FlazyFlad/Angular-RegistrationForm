import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    // Извлечение данных пользователей из localStorage и преобразование из JSON
    const savedUsers = localStorage.getItem('signUpUsers');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  onSaveUserChanges(updatedUser: any) {
    // Найдите индекс пользователя в массиве users и обновите его данные
    const userIndex = this.users.findIndex(user => user.id === updatedUser.id);
    if (userIndex !== -1) {
      this.users[userIndex] = updatedUser;

      // Сохраните обновленные данные пользователей в localStorage
      localStorage.setItem('signUpUsers', JSON.stringify(this.users));
    }
  }
}
