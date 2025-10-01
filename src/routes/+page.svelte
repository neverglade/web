<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { Brush, Package, Paintbrush, ScrollText } from '@lucide/svelte';
	import '../app.css';
	import '@fontsource-variable/fraunces';
	import '@fontsource-variable/outfit';
</script>

<header class="mb-16 flex flex-row items-center justify-between p-16">
	<h1 class="font-serif text-5xl font-black text-ember">Neverglade</h1>
	<ThemeSwitcher />
</header>
<main class="mx-16">
	<h2 class="mb-2 w-1/3 font-serif text-5xl leading-tight font-bold">
		Soothing colours for focused work.
	</h2>
	<p class="w-1/3 text-lg leading-relaxed">
		Neverglade is an open-source color scheme for terminals, editors, and designing. Comes in light
		and dark with 3 flavours each.
	</p>
	<p class="mt-1 text-sm text-subtext1 italic">
		Based on <a
			class="underline visited:text-subtext0"
			target="_blank"
			href="https://github.com/sainnhe/everforest">Everforest</a
		>
	</p>
	<div class="mt-4 flex flex-row gap-4">
		<Button href="/palette" icon={Brush}>Colours</Button>
		<Button href="/ports" color="ochre" icon={Package}>Ports</Button>
		<Button href="/blog" color="moss" icon={ScrollText}>Blog</Button>
	</div>
</main>
<footer></footer>
