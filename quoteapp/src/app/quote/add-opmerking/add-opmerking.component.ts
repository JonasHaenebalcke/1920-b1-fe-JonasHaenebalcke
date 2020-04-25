import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Opmerking } from '../opmerking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteDataService } from '../quote-data.service';
import { Quote } from '../quote.model';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-add-opmerking',
  templateUrl: './add-opmerking.component.html',
  styleUrls: ['./add-opmerking.component.css']
})
export class AddOpmerkingComponent implements OnInit {
  @Input() public quote: Quote;

  public opmerking: FormGroup;
  public newOpmerking = new EventEmitter<Opmerking>();
  loggedInUser$ = this._authenticationService.user$;

  constructor(private fb: FormBuilder, private _quoteDataService: QuoteDataService, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.opmerking = this.fb.group({
      inhoud: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(new Date().toUTCString())
    this._quoteDataService.addNewOpmerking(this.quote.id, new Opmerking(this.opmerking.value.inhoud, new Date(), this._authenticationService.user$.value, null, null));
    // this.ngOnInit();
  }
}
