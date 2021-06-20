import React, { useContext } from "react";
import { StoreContext } from "../context"
import { CommentRequest } from '../actions'

export default function CommentSection() {
    const { dispatch } = useContext(StoreContext);
    const onPost = (e) => {
        e.preventDefault();
        const title = document.getElementById("title");
        const requirement = document.getElementById("requirement");
        const content = {
            title: title.value,
            requirement: requirement.value
        };
        if (content.title !== '' && content.requirement !== '') {
            CommentRequest(dispatch, content);
            document.getElementById("form").reset();
        } else {
            alert("尚有空格")
        }
    }

    return (
        <div className="commonForm postForm mt75">
            <form className="postForm-form" id="form">
                <div className="form-group commonForm-block">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="email" className="form-control" id="title" />
                </div>
                <div className="form-group commonForm-block mb-1">
                    <label for="exampleInputPassword1">Requirement</label>
                    <textarea className="form-control" id="requirement" />
                </div>
                <button type="submit" onClick={onPost}>POST</button>
            </form>
        </div>
    );
}