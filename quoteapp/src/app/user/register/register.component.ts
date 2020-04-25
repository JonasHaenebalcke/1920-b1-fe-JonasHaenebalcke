import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn, PatternValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

function comparePasswords(control: AbstractControl): ValidationErrors {
  const wachtwoord = control.get('wachtwoord');
  const bevestigWachtwoord = control.get('bevestigWachtwoord');
  return wachtwoord.value === bevestigWachtwoord.value ? null
    : { 'passwordsDiffer': true };
}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map((available) => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
// function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } => {
//     if (!control.value) {
//       return null;
//     }

//     // test the value of the control against the regexp supplied
//     const valid = regex.test(control.value);
//     // if true, return no error (no error), else return error passed in the second parameter
//     return valid ? null : error;
//   };
// }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: FormGroup;
  public errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = this.fb.group({
      voornaam: ['', Validators.required],
      achternaam: ['', Validators.required],
      gebruikersnaam: ['', [Validators.required,],
        serverSideValidateUsername(this.authService.checkUserNameAvailability)
        // patternValidator(/[^\s]/, { heeftSpatie: true })

      ],
      passwordGroup: this.fb.group({
        wachtwoord: ['', [Validators.required, Validators.minLength(6)]],
        bevestigWachtwoord: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'Dit is een verplicht veld';
    }
    if (errors.minlength) {
      return `Dit veld heeft ${errors.minlength.requiredLength} tekens (waren er ${errors.minlength.actualLength})`;
    }
    else if (errors.passwordsDiffer) {
      return `Wachtwoorden moeten overeenkomen`;
    }
    else if (errors.userAlreadyExists) {
      return `Deze gebruikersnaam is al in gebruik`;
    }
    // else if (errors.heeftSpatie){
    //   return `Gebruikersnaam mag geen spatie bevatten`
    // }
  }

  onSubmit() {
    this.authService
      .register(
        this.user.value.voornaam,
        this.user.value.achternaam,
        `${this.user.value.gebruikersnaam}`,
        this.user.value.passwordGroup.wachtwoord
      )
      .subscribe(
        (val) => {
          if (val) {
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(['/quote/list']);
            }
          } else {
            this.errorMessage = `Could not login`;
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






