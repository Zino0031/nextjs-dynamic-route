import Link from 'next/link';
import React from "react";

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = ({ posts }) => {
    return (
        <div>
        <h1>All Posts</h1>
        <ul>
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
            <li>
              {post.title}
            </li>
          </Link>
          ))}
        </ul>
      </div>
    )
}

export async function getStaticProps(){
  const response = await fetch(ALL_POSTS_URL);
  const posts = await response.json();

  return{
    props: {
      posts,
    }
  }
}

export default Posts;