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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  declarations: [QuoteComponent, OpmerkingComponent, AuteurComponent, QuoteListComponent, OpmerkingListComponent, AddQuoteComponent, AddOpmerkingComponent, AddAuteurComponent, AuteurListComponent, PageNotFoundComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [QuoteListComponent, QuoteComponent, AddQuoteComponent]
})
export class QuoteModule { }
