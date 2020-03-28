import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  name: string;
  opmerkingen: string[];
  dateAdded: Date;

  constructor() { 
    this.name='QuoteNaam';
    this.opmerkingen = ['Coole quote', 'Jawadde'];
    this.dateAdded = new Date();
  }

  ngOnInit(): void {
  }

}
