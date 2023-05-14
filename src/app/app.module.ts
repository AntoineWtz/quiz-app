import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectQuizComponent,
    PageNotFoundComponent,
    QuizComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }