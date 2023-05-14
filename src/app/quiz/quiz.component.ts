import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';
import { Quiz } from '../quiz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-computer',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  title = '';
  quizData: Quiz[];
  selectedAnswers: string[] = [];
  correctCount: number = 0;
  quizSubmitted: boolean = false;
  category: string | null;

  constructor(private quizService: QuizApiService, private route: ActivatedRoute) {
    this.quizData = [];
    this.category = this.route.snapshot.paramMap.get('category');
  }

  ngOnInit() {
    this.getQuiz(this.category);
  }

  getQuiz(category: string | null) {
    this.title = 'Category : ' + category?.toUpperCase() + ' Quiz';
    this.quizService.getQuiz(category).subscribe(data =>
      this.quizData = data.results
    )
  }

  checkAnswer(questionIndex: number, answer: string) {
    const correctAnswer = this.quizData[questionIndex].correct_answer;
    this.selectedAnswers[questionIndex] = answer;
  }

  validateQuiz() {
    let correctAnswers = 0;
    for (let i = 0; i < this.quizData.length; i++) {
      if (this.selectedAnswers[i] === this.quizData[i].correct_answer) {
        correctAnswers++;
      }
    }
    this.correctCount = correctAnswers;
    this.quizSubmitted = true;
  }

}