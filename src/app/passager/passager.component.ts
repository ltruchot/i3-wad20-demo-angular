import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent implements OnInit {
  @Input("nom")
  nom: string;
  @Input("prenom")
  prenom: string;

  constructor() { }

  ngOnInit(): void {
  }

}
