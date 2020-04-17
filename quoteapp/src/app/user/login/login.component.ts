import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      gebruikersnaam: ['', Validators.required],
      wachtwoord: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService
      .login(this.user.value.gebruikersnaam, this.user.value.wachtwoord)
      .subscribe(
        (val) => {
          if (val) {
            this.router.navigate(['/quote/list']);
          } else {
            this.errorMessage = `Er ging iets fout bij het inloggenc`;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMessage = `Error while trying to login user ${this.user.value.gebruikersnaam}: ${err.error.message}`;
          } else {
            this.errorMessage = `Error ${err.status} while trying to login user ${this.user.value.gebruikersnaam}: ${err.error}`;
          }
        }
      );
  }
}