import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-end-card',
  templateUrl: './end-card.component.html',
  styleUrls: ['./end-card.component.scss']
})
export class EndCardComponent implements OnInit {
  @Input() result: object;
  animScore = 0;
  textScore: string;

  constructor() { }

  ngOnInit() {
    this.startAnimateScore(1, 60);
  }

  // animateScoreSmooth() {
  //   if (this.animScore < this.result.finalScore) {
  //     this.animScore ++;
  //     requestAnimationFrame( () => {
  //       this.animateScore();
  //     });
  //   }
  // }

  startAnimateScore(duration, FPS) {
    /*TODO: Abstract an directive to animate the num by flexible parameters.*/
    const needFrameNum = duration * FPS;
    const deltaNumEachFrame = this.result.finalScore / needFrameNum;
    const power = deltaNumEachFrame.toString().length - deltaNumEachFrame.toString().indexOf('.') - 1;
    const index = Math.pow(10, power);
    deltaNumEachFrame = deltaNumEachFrame * index;
    // debugger
    this.animateScore(deltaNumEachFrame, FPS, index);
  }

  animateScore(deltaNumEachFrame, FPS, index) {
    if (this.animScore < this.result.finalScore) {
      setTimeout(() => {
        //TODO: BUG
        /*finalScore = 777 / 500
        * 284.9*100
        * = 28489.999999999996
         * 284.9*10
         * = 2849*/
        // console.log(this.animScore)
        // if ( this.animScore > 280) {
        //   debugger
        // }
        this.animScore = this.animScore * index;
        this.animScore += deltaNumEachFrame;

        this.animScore = this.animScore / index;
        // this.animScore = this.animScore.toFixed(0);
        // this.animScore = Math.round(this.animScore);

        const decimalIndex = this.animScore.toString().indexOf('.');
        if (decimalIndex === -1) {
          this.textScore = this.animScore.toString()
        } else {
          this.textScore = this.animScore.toString().slice(0,  decimalIndex);
        }

        this.animateScore(deltaNumEachFrame, FPS, index);
      }, 1000 / FPS);
    }
  }

}
