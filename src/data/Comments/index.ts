import { Comments } from '../../types/Comments/index';

export const commentsData: Comments = [
  {
    author: 'Bharath',
    comment: 'Hey',
    children: [
      {
        author: 'ZZZ',
        comment: 'HELLO',
        children: []
      }
    ]
  },
  {
    author: 'RAM',
    comment: 'This is so cool',
    children: [
      {
        author: 'ZZZ',
        comment: 'Thank you',
        children: []
      }
    ]
  }
];
