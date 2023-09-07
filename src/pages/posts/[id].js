import React from "react";
import Link from "next/link";

const ONE_POST_URL = "https://jsonplaceholder.typicode.com/posts/${postId}";
const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";



function Post ({post, comments}) {
    return (
        <>
        <div>
            <h1>Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
        <div>
            <h2>Comments:</h2>
            <ul>
                {comments.map((comment) =>{
                     const words = comment.name.split(' ');
                     return(
                    <li key={comment.id}>
                        <h1>email: {comment.email}  name: {words[0]} {words[1]}</h1><p>{comment.body}</p></li>
                     );    
                })}
            </ul>
            </div>
        </>
    )
}

export async function getStaticPaths(){
    const response = await fetch ( ALL_POSTS_URL);
    const posts = await response.json();
    const paths = posts.map((post) =>({
        params: {id: post.id.toString()},
    }))

    return {
        paths,
        fallback: false,

    }
}

export async function getStaticProps({params}) {
    const response = await fetch(
    ALL_POSTS_URL + "/" + params.id
    );
    const post = await response.json();
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments/`
      );
      const comments = await res.json();
    


return{
    props: {
      post,
      comments,
    }
  }
}

export default Post