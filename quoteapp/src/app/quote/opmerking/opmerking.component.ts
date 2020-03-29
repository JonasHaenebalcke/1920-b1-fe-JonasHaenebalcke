import { Component, OnInit, Input } from '@angular/core';
import { Opmerking } from '../opmerking.model';

@Component({
  selector: 'app-opmerking',
  templateUrl: './opmerking.component.html',
  styleUrls: ['./opmerking.component.css']
})
export class OpmerkingComponent implements OnInit {
@Input() opmerking : Opmerking;
  constructor() { }

  ngOnInit(): void {
  }

}
