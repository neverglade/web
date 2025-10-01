<script lang="ts">
	import type { Snippet } from 'svelte';
	import { type Icon as IconType, Paintbrush } from '@lucide/svelte';
	import clsx from 'clsx';

	interface Props {
		href?: string;
		class?: string;
		color?: 'ember' | 'ochre' | 'moss';
		children?: Snippet;
		icon?: typeof IconType;
	}

	let { href, class: className, color = 'ember', children, icon: Icon }: Props = $props();

	let colorClasses = clsx({
		'border-ember hover:bg-ember': color === 'ember',
		'border-ochre hover:bg-ochre': color === 'ochre',
		'border-moss hover:bg-moss': color === 'moss'
	});
</script>

<a
	{href}
	class={`block ${className} ${colorClasses} flex cursor-pointer flex-row items-center gap-2 rounded-sm border bg-root px-4 py-2 font-medium hover:text-root`}
>
	{#if Icon}
		<Icon size={24}></Icon>
	{/if}
	{@render children?.()}
</a>
