<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto md:w-[80ch]">
	<h1 class="font-serif text-4xl font-black">{data.metadata?.title}</h1>
	<article>
		<data.content></data.content>
	</article>
</div>
