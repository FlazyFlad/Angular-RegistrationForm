import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// Добавьте объявление типа User, если оно не было добавлено ранее
// interface User {
//   id: number;
//   // Другие свойства пользователя
// }

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  isEditing = false; // Флаг для отслеживания состояния редактирования

  user: any; // Здесь будут храниться данные пользователя
  userId: number = 0; // Инициализируем userId числом

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Получение индекса пользователя из URL
    this.route.params.subscribe(params => {
      const userIndex = +params['userId']; // Преобразуйте в число

      this.userId = userIndex;

      // Извлеките объект пользователя с использованием индекса из localStorage
      const savedUsers = localStorage.getItem('signUpUsers');
      if (savedUsers) {
        const users: User[] = JSON.parse(savedUsers);

        // Проверка, что индекс находится в допустимых пределах массива
        if (userIndex >= 0 && userIndex < users.length) {
          this.user = users[userIndex];
        } else {
          console.error('Пользователь не найден.'); // Обработка случая, если пользователь не найден
        }
      }
    });
  }

  saveChanges() {
    // Обновите объект пользователя в массиве данных
    const savedUsers = localStorage.getItem('signUpUsers');
    if (savedUsers) {
      const users: User[] = JSON.parse(savedUsers);

      if (this.userId >= 0 && this.userId < users.length) {
        // Обновите данные пользователя
        users[this.userId] = this.user;

        // Сохраните обновленные данные в localStorage
        localStorage.setItem('signUpUsers', JSON.stringify(users));
      }
    }
    this.router.navigate(['/user-list']);
  }
}



interface User {
  id: string;
  // Другие свойства пользователя
}