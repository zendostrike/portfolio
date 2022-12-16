import bloggerResolve from "../helpers/blogger-resolve";

export default async function getPost(postId) {
  return fetch(bloggerResolve(`posts/${postId}`)).then((res) => res.json());
}
