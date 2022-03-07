import React, { useState } from 'react';
import '../../styles/Comments/Comments.css';
import { CommentItem as CommentItemType, Comments as CommentsType } from '../../types/Comments';
import CommentItem from './CommentItem/CommentItem';

const Comments: React.FC<{ data: CommentsType }> = props => {
  const comments = props.data;
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState(comments);

  const onCommentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCommentText(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment: CommentItemType = {
      author: 'ZZZ',
      comment: commentText,
      children: []
    }
    setCommentText('')
    setCommentsList(prevState => [...prevState, comment]);
  };

  return (
    <div className='comments-container'>
      <form onSubmit={onSubmit}>
        <div className="rootComment__input-container">
          <div>
            <label htmlFor="rootCommentInput">Enter your comment: </label>
            <input
              id="rootCommentInput"
              type="text"
              value={commentText}
              onChange={onCommentsChange}
            />
          </div>
          <button type="submit">Comment</button>
        </div>
      </form>
      <hr className="rootComment__hr"></hr>
      <ul className='comments-list'>
        {commentsList.length > 0 &&
          commentsList.map((commentItem, index) => <CommentItem key={index} data={commentItem} />)}
      </ul>
    </div>
  );
};

export default Comments;
