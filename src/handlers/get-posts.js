import bloggerResolve from "../helpers/blogger-resolve";

export default async function getPosts() {
  return fetch(bloggerResolve("posts", "fetchBodies=false")).then((res) =>
    res.json()
  );
}
