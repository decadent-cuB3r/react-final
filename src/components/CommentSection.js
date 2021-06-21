import React, { useContext } from "react";
import { StoreContext } from "../context"
import { CommentRequest } from '../actions'

export default function CommentSection() {
    const { dispatch } = useContext(StoreContext);
    const onPost = (e) => {
        e.preventDefault();
        const topic = document.getElementById("topic");
        const question = document.getElementById("question");
        const content = {
            topic: topic.value,
            question: question.value
        };
        if (content.topic !== '' && content.question !== '') {
            CommentRequest(dispatch, content);
            document.getElementById("form").reset();
        } else {
            alert("尚有空格")
        }
    }

    return (
        <div className="QAForm">
            <form className="QAForm-form" id="form">
                <div className="">
                    <label for="exampleInputEmail1">關於</label>
                    <input type="email" className="" id="topic" />
                </div>
                <div className="">
                    <label for="exampleInputPassword1">你想知道什麼？</label>
                    <textarea className="" id="question" />
                </div>
                <button type="submit" onClick={onPost}>提問！</button>
            </form>
        </div>
    );
}