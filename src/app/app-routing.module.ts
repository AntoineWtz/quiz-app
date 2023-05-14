import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: SelectQuizComponent },
  { path: 'quiz/:category', component: QuizComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // version qui redirige vers la page d'accueil 
  // { path: '**', component: PageNotFoundComponent }, version qui redirige vers la 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }