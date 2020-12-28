import Head from "next/head";
import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
	const [title, setTitle] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post("http://posts.com/posts/create", { title });
		setTitle("");
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
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						className="form-control"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</>
	);
};

export default PostCreate;
