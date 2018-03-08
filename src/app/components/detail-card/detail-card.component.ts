import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  userInfo = {
    name: 'JuniorTour',
    avatarLink: 'https://avatars1.githubusercontent.com/u/14243906?s=460&v=4',
    desc: 'A Student',
    points: 6666,
    items: [
      '1', '2', '3', '4', '3', '4', '3', '4', '3', '4', '3', '4'
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
