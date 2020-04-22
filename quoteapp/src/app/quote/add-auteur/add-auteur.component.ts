import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QuoteDataService } from '../quote-data.service';
import { Auteur } from '../auteur.model';

@Component({
  selector: 'app-add-auteur',
  templateUrl: './add-auteur.component.html',
  styleUrls: ['./add-auteur.component.css']
})
export class AddAuteurComponent implements OnInit {
  public auteur: FormGroup;
  constructor(private fb: FormBuilder, private _quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
    this.auteur = this.fb.group({
      voornaam: ['', Validators.required],
      achternaam: ['', Validators.required],
      omschrijving: ['', Validators.required]
    
    });
  }

  onSubmit(){
    this._quoteDataService.addNewAuteur(new Auteur(this.auteur.value.voornaam, this.auteur.value.achternaam, this.auteur.value.omschrijving));
  }
}
