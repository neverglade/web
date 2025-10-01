<script lang="ts">
	import { initTheme, isDark, toggle } from '$lib/themes';
	import { Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {}

	onMount(() => {
		initTheme();
	});
</script>

<div class="relative">
	<button class="cursor-pointer rounded-full p-2 hover:bg-earth" onclick={toggle}>
		{#if $isDark}
			<Sun class="stroke-ochre" />
		{:else}
			<Moon class="stroke-sky" />
		{/if}
	</button>
</div>
