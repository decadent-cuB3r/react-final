export default function CommentItem({ post }) {
    return (
        <>
            <div className="postItem">
                <div className="postItem-blockL">
                    <p className="postItem-title">
                        <span>
                            {post.title}
                        </span>
                    </p>
                    <p>{post.user}：</p>
                    <p>{post.requirement}</p>
                </div>
                <div className="postItem-blockR">
                    <p>{post.applications} applications</p>
                </div>
            </div>
            <div className="postItem-lineW"></div>
        </>
    );
}