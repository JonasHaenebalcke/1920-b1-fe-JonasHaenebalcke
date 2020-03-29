import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from '../quote.model';
import { QuoteDataService } from '../quote-data.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  private _quotes = QUOTES;
  constructor(private _quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
  }

  get quotes(){
    return this._quoteDataService.quotes;
  }

  addNewQuote(quote: Quote){
    this._quoteDataService.addNewQuote(quote);
  }
}
