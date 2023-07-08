import { Entry } from "@/components";
import getPost from "@/handlers/get-post";
import getPosts from "@/handlers/get-posts";

export default function BlogPage({ post }) {
  return (
    <div>
      <Entry key={post.id} title={post.title} content={post.content} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts?.items?.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = await getPost(params.id);

  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
}
