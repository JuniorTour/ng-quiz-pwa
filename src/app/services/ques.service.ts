import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuesService {
  private quesURL = 'api/ques';

  constructor(
    private http: HttpClient
  ) { }

  getQues(): Observable<object> {
    return this.http.get<object>(this.quesURL);
  }

}
