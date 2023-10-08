import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:3000/users/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.apiUrl, JSON.stringify(user), httpOptions);
  }

  // Получение всех пользователей
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Получение пользователя по ID
  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }

  // Обновление данных пользователя
  updateUser(userId: string, user: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`; // Обратите внимание на / перед userId
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    return this.http.patch<any>(url, JSON.stringify(user), httpOptions);
  }
  


  // Удаление пользователя по ID
  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }

}
