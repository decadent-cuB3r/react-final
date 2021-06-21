import { useEffect, useContext } from "react";
import { StoreContext } from "../context";
import { setCommentList } from "../actions"
import CommentItem from "./CommentItem";

export default function CommentList() {
  const { state : { page : { posts } } , dispatch } = useContext(StoreContext);
  useEffect(() => {
    setCommentList(dispatch);
  }, [posts]);
  
  return(
    <div className="postList">
      <div className="postList-lineY"></div>
      <p>Sort by：Newest ▼</p>
      {posts.map( post => (
        <CommentItem post = {post}/>
      ))}
    </div>
  );
}