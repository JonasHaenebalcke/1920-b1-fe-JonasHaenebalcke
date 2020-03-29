import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
@Output() public newQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  addQuote(quoteInhoud: HTMLInputElement): boolean{
    
    const quote = new Quote(quoteInhoud.value, 0, new Date(), ['opmerking', 'nog een opmerking'], 'Wout', 1);
    this.newQuote.emit(quote);
    return false;
  }

}
