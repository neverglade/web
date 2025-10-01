<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		hex: string;
		name: string;
		children: Snippet;
	}

	let { hex, name, children }: Props = $props();
</script>
