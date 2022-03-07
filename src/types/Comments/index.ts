export interface CommentItem {
  author: string;
  comment: string;
  children: CommentItem[];
  id: string;
}

export type Comments = CommentItem[];