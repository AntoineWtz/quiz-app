import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuizApiService } from '../quiz-api.service';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})

export class SelectQuizComponent implements OnInit {

  title = 'Quiz App';
  titles: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizApiService) { }

  ngOnInit() {
    this.titles = this.quizService.getTitles();
  }
}