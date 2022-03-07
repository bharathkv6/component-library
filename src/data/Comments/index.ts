import { Comments } from '../../types/Comments/index';

export const commentsData: Comments = [
  {
    id: '1',
    author: 'Bharath',
    comment: 'Hey',
    children: [
      {
        id: '11',
        author: 'ZZZ',
        comment: 'HELLO',
        children: []
      }
    ]
  },
  {
    id: '2',
    author: 'RAM',
    comment: 'This is so cool',
    children: [
      {
        id: '22',
        author: 'ZZZ',
        comment: 'Thank you',
        children: []
      }
    ]
  }
];
