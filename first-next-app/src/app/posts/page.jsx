import Link from "next/link";
import PostsLimit from "@/components/PostsLimit";

// Save as app/posts/page.jsx and copy layout.jsx from /about
async function getPostsData(limit, page = 1) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" +
      "posts?_limit=" +
      limit +
      "&_page=" +
      page
  );
  if (!res.ok) {
    // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

// We can use searchParams to send the user’s chosen value from
// client component to server component

// Page server components can access searchParams as a parameter
export default async function Posts({ searchParams }) {
  const limit = searchParams.limit ? searchParams.limit : 5;
  const posts = await getPostsData(limit);
  const postList = posts.map((post) => (
    <li key={post.id}>
      <Link href={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <div className="Posts">
      <h1>Posts</h1> <ul>{postList}</ul> <PostsLimit defaultLimit={limit} />
    </div>
  );
}

// ++ Make sure to import the PostsLimit component
// ++ View the HTML page source (not just via the Dev Inspector) to verify
// that the server-rendered HTML includes the updated list of posts
// ++ Add another drop-down to let the user choose the current page
