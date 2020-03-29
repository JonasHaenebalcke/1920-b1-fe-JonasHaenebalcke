import { Component, OnInit, Input } from '@angular/core';
import { Auteur } from '../auteur.model';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {
@Input() public auteur: Auteur;
  constructor() { }

  ngOnInit(): void {
  }

}
