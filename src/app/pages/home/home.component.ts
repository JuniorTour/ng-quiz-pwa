import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../../services/user-info.service';

import {UserInfo} from '../../models/user-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = true;
  userInfo: UserInfo;

  constructor(private userInfoService: UserInfoService) {
  }
  // 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
  // Angular 只会把组件的公共属性绑定到模板中。

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userInfoService.getUserInfo().subscribe(ui => {
      this.userInfo = ui;
      this.isLoading = false;
    });
  }

}
