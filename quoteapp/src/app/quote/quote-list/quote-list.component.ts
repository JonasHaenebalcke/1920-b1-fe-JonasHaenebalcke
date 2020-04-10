import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteDataService } from '../quote-data.service';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  private _fetchQuotes$: Observable<Quote[]>
  public errorMessage: string = '';

  constructor(private _quoteDataService: QuoteDataService) { }

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

  addNewQuote(quote: Quote){
    this._quoteDataService.addNewQuote(quote);
  }
}
