export interface CommentItem {
  author: string;
  comment: string;
  children: CommentItem[];
}

export type Comments = CommentItem[];