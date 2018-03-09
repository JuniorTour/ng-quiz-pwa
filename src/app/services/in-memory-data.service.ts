import { InMemoryDbService } from 'angular-in-memory-web-api';

import {UserInfo} from '../models/user-info.model';

// https://angular.cn/tutorial/toh-pt6#simulate-a-data-server
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user: UserInfo = {
      name: '3214',
      avatarLink: 'https://avatars1.githubusercontent.com/u/14243906?s=460&v=4',
      desc: 'A Student',
      points: 6666,
      items: [
        '1', '2', '3', '4', '3', '4', '3', '4', '3', '4', '3', '4'
      ]
    };
    return {user};
  }
}
