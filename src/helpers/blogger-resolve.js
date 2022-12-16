export default function bloggerResolve(path, queryParams = "") {
  if (path[0] === "/") {
    path.substring(1);
  }
  if (queryParams[0] !== "&") {
    queryParams = `&${queryParams}`;
  }

  return `${process.env.BLOGGER_API_URL}/blogs/${process.env.MAIN_BLOGGER_ID}/${path}?key=${process.env.BLOGGER_API_KEY}${queryParams}`;
}
