import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
	const resnderedComments =
		comments &&
		comments.map((comment) => {
			console.log(comment.status);
			let content = "";
			if (comment.status === "approved") {
				content = comment.content;
			} else if (comment.status === "pending") {
				content = "This comment is awaiting moderation";
			} else {
				content = "This comment has been rejected";
			}
			return <li key={comment.id}>{content}</li>;
		});

	return <ul>{resnderedComments}</ul>;
};

export default CommentList;
