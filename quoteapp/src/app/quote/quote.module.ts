import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { OpmerkingComponent } from './opmerking/opmerking.component';
import { AuteurComponent } from './auteur/auteur.component';
import { MaterialModule } from '../material/material.module';
import { Opmerking } from './opmerking.model';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { OpmerkingListComponent } from './opmerking-list/opmerking-list.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddOpmerkingComponent } from './add-opmerking/add-opmerking.component';
import { AddAuteurComponent } from './add-auteur/add-auteur.component';
import { AuteurListComponent } from './auteur-list/auteur-list.component';



@NgModule({
  declarations: [QuoteComponent, OpmerkingComponent, AuteurComponent, QuoteListComponent, OpmerkingListComponent, AddQuoteComponent, AddOpmerkingComponent, AddAuteurComponent, AuteurListComponent],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: [QuoteListComponent]
})
export class QuoteModule { }
