import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JsonInterface } from './jsonInterface';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  private quizUrl: any;

  constructor(private http: HttpClient) {
    this.quizUrl = {
      computer: { url: 'https://opentdb.com/api.php?amount=10&category=18&type=boolean', icon: '💻' },
      nature: { url: 'https://opentdb.com/api.php?amount=10&category=17&type=boolean', icon: '🍃' },
      animal: { url: 'https://opentdb.com/api.php?amount=10&category=27&type=boolean', icon: '🦝' },
      geography: { url: 'https://opentdb.com/api.php?amount=10&category=22&type=boolean', icon: '🗺️' },
      games: { url: 'https://opentdb.com/api.php?amount=10&category=15&type=boolean', icon: '🕹️' },
      film: { url: 'https://opentdb.com/api.php?amount=10&category=11&type=boolean', icon: '🎬' },
      mythology: { url: 'https://opentdb.com/api.php?amount=10&category=20&type=boolean', icon: '🔱' },
      sport: { url: 'https://opentdb.com/api.php?amount=10&category=21&type=boolean', icon: '🤸' },
      history: { url: 'https://opentdb.com/api.php?amount=10&category=23&type=boolean', icon: '📜' },
      cartoon: { url: 'https://opentdb.com/api.php?amount=10&category=32&type=boolean', icon: '🪁' },
      politic: { url: 'https://opentdb.com/api.php?amount=10&category=24&type=boolean', icon: '🤡' },
      general: { url: 'https://opentdb.com/api.php?amount=10&category=9&type=boolean', icon: '🧠' },
      music: { url: 'https://opentdb.com/api.php?amount=10&category=12&type=boolean', icon: '🎵' },
      vehicle: { url: 'https://opentdb.com/api.php?amount=10&category=28&type=boolean', icon: '🚗' },
      manga: { url: 'https://opentdb.com/api.php?amount=10&category=31&type=boolean', icon: '🎎' },
      tv: { url: 'https://opentdb.com/api.php?amount=10&category=14&type=boolean', icon: '📺' },
      science: { url: 'https://opentdb.com/api.php?amount=10&category=17&type=boolean', icon: '🔬' },
      religion: { url: 'https://opentdb.com/api.php?amount=10&category=20&type=boolean', icon: '🕍' },
    };
  }

  // decode HTML caractères spéciaux
  private decodeHTML(text: string): string {
    const elem = document.createElement('textarea');
    elem.innerHTML = text;
    return elem.value;
  }

  // récupère les questions du quiz en fonction de la catégorie choisie 
  // utilisation de pipe() pour transformer les données reçues en JSON 
  // map permet de transformer les données reçues en JSON 
  // utilisation de tap() pour afficher les données reçues dans la console
  getQuiz(category: any): Observable<JsonInterface> {
    return this.http.get<JsonInterface>(this.quizUrl[category].url).pipe(
      map((quiz) => {
        quiz.results.forEach((question) => {
          question.question = this.decodeHTML(question.question);
        });
        return quiz;
      }),
      tap((quiz) => console.log(quiz)),
      catchError((error) => this.handleError(error, []))
    );
  }

  // récupère les titres des catégories du quiz
  // boucle sur les clés de l'objet quizUrl
  getTitles(): string[] {
    let titles: any[] = [];
    for (const key in this.quizUrl) {
      titles.push({ category: key, icon: this.quizUrl[key].icon });
    }
    return titles;
  }

  // gestion des erreurs
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}