export default function CommentItem({ comment }) {
    return (
        <>
            <div className="QAItem">
                <p className="QAItem-topic">
                    關於{comment.topic}，{comment.user}問：
                </p>
                <p>{comment.question}</p>
                <hr className="QAItem-line"></hr>
            </div>
        </>
    );
}