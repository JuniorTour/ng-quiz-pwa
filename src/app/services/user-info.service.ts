import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {UserInfo} from '../models/user-info.model';

@Injectable()
export class UserInfoService {
  private userInfoURL = 'api/user';

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.userInfoURL);
  }

}
