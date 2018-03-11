import { Component, OnInit } from '@angular/core';

import {QuesService} from '../../services/ques.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  public questions: object[];

  public ended = false;
  public started = false;

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

  end() {
    // alert('game end')
    this.ended = true;
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
