import { InMemoryDbService } from 'angular-in-memory-web-api';

import {UserInfo} from '../models/user-info.model';

// https://angular.cn/tutorial/toh-pt6#simulate-a-data-server
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user: UserInfo = {
      name: 'JuniorTour',
      avatarLink: 'https://avatars1.githubusercontent.com/u/14243906?s=460&v=4',
      desc: 'A Student',
      points: 6666,
      items: [
        '1', '2', '3', '4', '3', '4', '3', '4', '3', '4', '3', '4'
      ]
    };

    const ques = [
      {
        id: 0,
        avatarLink: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Ques One',
        subTitle: 'sub title from in memory data',
        body: 'Which come first, chicken or egg?',
        options: [
          'A',
          'B',
          'C'
        ],
        answer: 'A'
      },
      {
        id: 1,
        avatarLink: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Ques Two',
        subTitle: 'sub title from in memory data',
        body: '1 + 1 = ?',
        options: [
          'A',
          'B',
          'C'
        ],
        answer: 'B'
      },
      {
        id: 2,
        avatarLink: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Ques Three',
        subTitle: 'sub title from in memory data',
        body: 'How about today?',
        options: [
          'A',
          'B',
          'C'
        ],
        answer: 'C'
      }
    ];
    return {user, ques};
  }
}
