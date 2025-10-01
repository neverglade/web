<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import clsx from 'clsx';

	interface Props {
		href?: string;
		children?: Snippet;
		color: 'ember' | 'moss' | 'ochre';
	}

	let { href, children, color }: Props = $props();

	let path = $derived(page.url.pathname);
	let active = $derived(path === href);

	let classes = $derived(
		clsx(
			'hover:text-root decoration-2 hover:no-underline underline-offset-4 px-2 py-1 leading-none rounded-xs',
			{
				underline: active
			}
		)
	);
	let colorClasses = clsx({
		'decoration-ember hover:bg-ember': color === 'ember',
		'decoration-moss hover:bg-moss': color === 'moss',
		'decoration-ochre hover:bg-ochre': color === 'ochre'
	});
</script>

<li class="font-medium">
	<a {href} class={`text-lg ${classes} ${colorClasses}`}>
		{@render children?.()}
	</a>
</li>
