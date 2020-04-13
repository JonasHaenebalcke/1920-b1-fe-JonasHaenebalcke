import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { AuteurListComponent } from './quote/auteur-list/auteur-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { QuoteResolverService } from './quote-resolver.service';

const appRoutes: Routes = [
  {
    path: 'quote',
    loadChildren: () => import('./quote/quote.module').then(mod => mod.QuoteModule)
  },
  { path: '', redirectTo: 'quote/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, 
      {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
