import Link from "next/link";

import getPosts from "@/handlers/get-posts";

export default function BlogsPage({ posts }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div>Feel free to read:</div>

      {posts.map((post) => (
        <Link key={post.id} href={`/blogs/${post.id}`}>
          <div style={{ borderLeft: "1px solid black", paddingLeft: 10 }}>
            {post.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPosts();

  return {
    props: {
      posts: data?.items,
    },
  };
}
