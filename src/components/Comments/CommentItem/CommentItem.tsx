import { CommentItem as CommentItemType } from '../../../types/Comments';
import '../../../styles/Comments/CommentItem.css';
import { useState } from 'react';

const CommentItem: React.FC<{ data: CommentItemType }> = props => {
  const { author, children, comment } = props.data;
  const [showBtn, setShowBtn] = useState(false);
  const [value, setValue] = useState('');

  const onReply = () => {
    setShowBtn(true);
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <li className="comment-item">
      <div>
        <div className="comment-item__info">
          <span>{author}</span>
          <p>{comment}</p>
        </div>

        <button onClick={onReply} className="reply-btn">
          Reply
        </button>
      </div>
      <ul>
        {children.map((comment, index) => (
          <CommentItem key={index} data={comment} />
        ))}
        {showBtn && (
          <form className="reply-input" onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onValueChange} />
            <button type="submit">Save</button>
          </form>
        )}
      </ul>
    </li>
  );
};

export default CommentItem;
