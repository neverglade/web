import type { PageLoad } from "./$types";
import { allPosts } from "content-collections"

export const load: PageLoad = async () => {
  let posts = allPosts;

  return {
    posts,
  };
};
