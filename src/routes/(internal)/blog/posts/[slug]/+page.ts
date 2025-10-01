import type { PageLoad } from "./$types";
import { allPosts } from "content-collections";

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../../../../../posts/${params.slug}.md`)
  const metadata = allPosts.find(({ slug }) => slug === params.slug);
  const content = post.default;


  return {
    content,
    metadata
  }
}
