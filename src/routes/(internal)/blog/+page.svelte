<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Posts</h1>
<ul>
	{#each data.posts as post}
		<li>
			<h2>{post.title}</h2>
			<a href={`/blog/posts/${post.slug}`}>Link</a>
			<p>{post.summary}</p>
		</li>
	{/each}
</ul>
