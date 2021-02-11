import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listePassager = [{
    nom: "toto",
    prenom: "titi"
  }];

  arr = [1, 2, 3, 4, 5 , 6];
  n = 1000_000_000;
  title = 'toto';
  coucou = "titi";
  salut(b: boolean) {
    return b ? "héhéhé" : "hohoho";
  }
}

