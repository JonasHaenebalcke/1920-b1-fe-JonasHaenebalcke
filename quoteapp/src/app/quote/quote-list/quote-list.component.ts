import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  private _quotes = QUOTES;
  constructor() { }

  ngOnInit(): void {
  }

  get quotes(){
    return this._quotes;
  }

  addNewQuote(quote: Quote){
    this._quotes.push(quote);
  }
}
