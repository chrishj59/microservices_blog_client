import Head from "next/head";
import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post(`http://post.com/posts/${postId}/comments`, {
			content,
		});
		setContent("");
	};

	return (
		<>
			<div>
				<Head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
						integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
						crossOrigin="anonymous"
					/>
				</Head>
			</div>
			<div>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label>New Comment</label>
						<input
							className="form-control"
							value={content}
							onChange={(e) => {
								setContent(e.target.value);
							}}
						/>
					</div>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		</>
	);
};

export default CommentCreate;
