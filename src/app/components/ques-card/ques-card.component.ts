import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ques-card',
  templateUrl: './ques-card.component.html',
  styleUrls: ['./ques-card.component.scss']
})
export class QuesCardComponent implements OnInit {

  @Input() questions;
  @Output() onEnd = new EventEmitter<boolean>();
  public ended = false;
  public selectedOption: object[] = [];
  public showRightOption = false;
  // public quesCardAnim = {
  //   'wrong-anim': this.selectedOption,
  //   'right-anim': !this.selectedOption,
  // };
  public quesCardAnimClass = [
    '', '', ''
  ];

  constructor() { }

  ngOnInit() {
  }

  end() {
    this.onEnd.emit(true);
    this.ended = true;
  }

  showRightAnswer() {
    this.showRightOption = true;
  }

  removeCard(ques) {
    debugger
    const targetIndex = this.questions.indexOf(ques);
    this.quesCardAnimClass[targetIndex] = '';
    const passedQues = this.questions.splice(targetIndex, 1);

    this.questions.unshift(passedQues[0]);
  }

  selectOption(option, btn, ques) {
    const id = ques.id, isRight: boolean;

    if (option === ques.answer) {
      // alert('Right');
      isRight = true;
      btn._elementRef.nativeElement.classList.add('right-option');
    } else {
      // alert('Wrong');
      isRight = false;
      btn._elementRef.nativeElement.classList.add('wrong-option');
      this.showRightAnswer();
    }

    const targetIndex = this.questions.indexOf(ques);
    this.quesCardAnimClass[targetIndex] = isRight ? 'right-card-anim' : 'wrong-card-anim';

    this.selectedOption.push({
      id,
      option,
      isRight
    });
  }

}
