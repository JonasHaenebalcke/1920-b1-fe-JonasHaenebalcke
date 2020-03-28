import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { OpmerkingComponent } from './opmerking/opmerking.component';
import { AuteurComponent } from './auteur/auteur.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [QuoteComponent, OpmerkingComponent, AuteurComponent],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: [QuoteComponent]
})
export class QuoteModule { }
