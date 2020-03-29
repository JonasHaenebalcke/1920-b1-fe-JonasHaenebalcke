import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteDataService } from '../quote-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  private _fetchQuotes$: Observable<Quote[]>
    = this._quoteDataService.quotes$;

  constructor(private _quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
  }

  get quotes$(): Observable<Quote[]>{
   return this._fetchQuotes$;
  }

  addNewQuote(quote: Quote){
    this._quoteDataService.addNewQuote(quote);
  }
}
