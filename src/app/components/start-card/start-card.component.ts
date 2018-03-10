import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit {

  @Output() onStart = new EventEmitter<boolean>();
  public started = false;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.onStart.emit(true);
    this.started = true;
  }

}
