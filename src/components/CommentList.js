import { useEffect, useContext } from "react";
import { StoreContext } from "../context";
import { setCommentList } from "../actions"
import CommentItem from "./CommentItem";

export default function CommentList() {
  const { state: { commentPage: { comments } }, dispatch } = useContext(StoreContext);
  useEffect(() => { setCommentList(dispatch); }, [comments]);

  return (
    <div className="QAList">
      <div className="QAList-header">產品Q&A</div>
      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </div>
  );
}