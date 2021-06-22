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
                <div className="QAForm-Topic">
                    提出
                    <input placeholder="關於" type="email" className="QAForm-Input" id="topic" />
                    的問題(為保障您的交易安全，留言內容請勿涉及個人資訊、外部導入連結。)
                </div>
                <textarea placeholder="請留下你的提問..." className="QAForm-TextArea" id="question" />
            </form>
            <button className="QAForm-btn" type="submit" onClick={onPost}>送出</button>
        </div>
    );
}