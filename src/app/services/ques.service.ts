import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Ques} from '../models/ques.model';

@Injectable()
export class QuesService {
  private quesURL = 'api/ques';

  selectedOption: object[] = [];
  rightNum = 0;

  constructor(
    private http: HttpClient
  ) { }

  getQues(): Observable<Ques[]> {
    return this.http.get<Ques[]>(this.quesURL);
  }

}
