import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteDataService } from '../quote-data.service';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  private _fetchQuotes$: Observable<Quote[]>
  public errorMessage: string = '';
  loggedInUser$ = this._authenticationService.user$;

  constructor(private _authenticationService: AuthenticationService, private _quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
    this._fetchQuotes$ = this._quoteDataService.quotes$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  get quotes$(): Observable<Quote[]>{
   return this._fetchQuotes$;
  }
}
