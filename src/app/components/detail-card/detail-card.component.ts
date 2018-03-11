import {Component, OnInit, Input} from '@angular/core';

import {UserInfo} from '../../models/user-info.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
