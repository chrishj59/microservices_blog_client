import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function clientHome() {
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
			<div className="container">
				<h1>Create Posts!!!</h1>
				<PostCreate />
				<hr />
				<h1>Posts</h1>
				<PostList />
			</div>
		</>
	);
}
