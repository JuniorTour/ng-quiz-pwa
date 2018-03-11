import { Component, OnInit } from '@angular/core';

import {QuesService} from '../../services/ques.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  questions: object[];

  ended = false;
  started = false;
  result = {
    finalScore: 0
  };

  constructor(public quesService: QuesService) { }

  ngOnInit() {
    this.getQues();
  }

  getQues() {
    this.quesService.getQues().subscribe(ques => {
      this.questions = ques;
    });
  }

  start() {
    // alert('game start')
    this.started = true;
  }

  calculateScore() {
    this.result.finalScore = this.quesService.rightNum * 100;
  }

  end() {
    // alert('game end')
    this.ended = true;
    this.calculateScore();

    this.quesService.rightNum = 0;
  }

  animEnd(id) {
    // debugger
    this.removeAnsweredCard(id)
  }

  removeAnsweredCard(quesId) {
    this.questions.splice(this.questions.indexOf(quesId), 1);

    if (this.questions.length === 0) {
      this.end();
    }
  }
}
