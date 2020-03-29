import { Injectable } from '@angular/core';
import { QUOTES } from './mock-quotes';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteDataService {
  private _quotes = QUOTES;
  constructor() { }

  get quotes(): Quote[] {
    return this._quotes;
  }

  addNewQuote(quote: Quote){
    this._quotes.push(quote);
  }
}
