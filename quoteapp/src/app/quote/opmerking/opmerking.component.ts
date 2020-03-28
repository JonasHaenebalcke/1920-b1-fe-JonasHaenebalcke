import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opmerking',
  templateUrl: './opmerking.component.html',
  styleUrls: ['./opmerking.component.css']
})
export class OpmerkingComponent implements OnInit {
@Input() name : string;
  constructor() { }

  ngOnInit(): void {
  }

}
