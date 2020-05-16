import { Component, OnInit, Input } from '@angular/core';
import { Opmerking } from '../opmerking.model';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-opmerking',
  templateUrl: './opmerking.component.html',
  styleUrls: ['./opmerking.component.css']
})
export class OpmerkingComponent implements OnInit {
@Input() public opmerking : Opmerking;
@Input()  public quote : Quote;

  constructor() { }

  ngOnInit(): void {
  }
}
