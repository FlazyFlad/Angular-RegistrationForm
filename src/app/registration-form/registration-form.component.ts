import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  // @Output() userRegistered = new EventEmitter<any>();
  private nextUserId: number = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', [Validators.required, this.validateDate]],
      gender: ['', Validators.required],
    });
  }
  

  validateDate(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { invalidDate: true };
    }
    return null;
  }

  
  

  signupUsers: any[] = [];

    signupObj = {
      userName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: ''
    };

  loginObj = {
    userName: '',
    password: ''
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers))
    this.router.navigate(['/user-list']);
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: ''
    };
  }
}
