<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/fraunces';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<Navigation />
</header>
<main>
	{@render children?.()}
</main>
