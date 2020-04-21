import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Opmerking } from '../opmerking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteDataService } from '../quote-data.service';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-add-opmerking',
  templateUrl: './add-opmerking.component.html',
  styleUrls: ['./add-opmerking.component.css']
})
export class AddOpmerkingComponent implements OnInit {
  @Input() public quote : Quote;

  public opmerking: FormGroup;
  public newOpmerking = new EventEmitter<Opmerking>();
  
  constructor(private fb: FormBuilder, private _quoteDataService: QuoteDataService) { }

  ngOnInit() {
    this.opmerking = this.fb.group({
      inhoud: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.quote.inhoud);
     this._quoteDataService.addNewOpmerking(this.quote.id, new Opmerking(this.opmerking.value.inhoud, new Date(), "dat boi", null, null));

  }
}
