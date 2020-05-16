import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { OpmerkingComponent } from './opmerking/opmerking.component';
import { AuteurComponent } from './auteur/auteur.component';
import { MaterialModule } from '../material/material.module';
import { Opmerking } from './opmerking.model';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddOpmerkingComponent } from './add-opmerking/add-opmerking.component';
import { AddAuteurComponent } from './add-auteur/add-auteur.component';
import { AuteurListComponent } from './auteur-list/auteur-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { QuoteResolverService } from '../quote-resolver.service';

const appRoutes: Routes = [
  { path: 'quote/list', component: QuoteListComponent },
  { path: 'auteur/list', component: AuteurListComponent },
  { path: 'quote/detail/:id', component: QuoteDetailComponent,
  resolve: { quote: QuoteResolverService}}
];

@NgModule({
  declarations: [QuoteComponent, OpmerkingComponent, AuteurComponent, QuoteListComponent, AddQuoteComponent, AddOpmerkingComponent, AddAuteurComponent, AuteurListComponent, PageNotFoundComponent, QuoteDetailComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [QuoteListComponent, QuoteComponent, AddQuoteComponent, AddOpmerkingComponent]
})
export class QuoteModule { }
