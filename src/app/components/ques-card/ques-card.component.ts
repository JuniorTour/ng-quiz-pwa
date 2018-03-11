import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {QuesService} from '../../services/ques.service';

@Component({
  selector: 'app-ques-card',
  templateUrl: './ques-card.component.html',
  styleUrls: ['./ques-card.component.scss']
})
export class QuesCardComponent implements OnInit {

  @Input() ques;
  @Output() onEnd = new EventEmitter<boolean>();
  @Output() onAnimEnd = new EventEmitter<boolean>();
  ended = false;
  showRightOption = false;
  // optionClass = [];
  // quesCardAnimClass = [];
  quesCardAnimClass: string;

  constructor(public quesService: QuesService) { }

  ngOnInit() {
  }

  end() {
    this.onEnd.emit(true);
    this.ended = true;
  }

  animEnd(ques) {
    this.onAnimEnd.emit(ques.id);
  }

  showRightAnswer() {
    this.showRightOption = true;
  }

  selectOption(option, btn, ques) {
    const id = ques.id, isRight: boolean;

    if (option === ques.answer) {
      isRight = true;
      btn._elementRef.nativeElement.classList.add('right-option');

      this.quesService.rightNum++;
    } else {
      isRight = false;
      btn._elementRef.nativeElement.classList.add('wrong-option');
      this.showRightAnswer();
    }

    this.quesCardAnimClass = isRight ? 'right-card-anim' : 'wrong-card-anim';

    this.quesService.selectedOption.push({
      id,
      option,
      isRight
    });
  }

}
