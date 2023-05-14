import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
    <div>
      <h1>Cette page n'existe pas !</h1>
      <a routerLink='' >
        Retour à l'accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }