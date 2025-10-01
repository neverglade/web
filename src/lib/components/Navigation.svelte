<script>
	import Logo from './Logo.svelte';
	import NavItem from './NavItem.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<div class="flex flex-row items-center p-8">
	<a href="/" class="text-cloud mr-2 block p-2 font-serif text-4xl leading-none font-black"
		><Logo />
	</a>

	<nav class=" mr-auto">
		<ul class="flex flex-row items-center gap-2">
			<NavItem href="/palette" color="ember">Palette</NavItem>
			<NavItem href="/ports" color="ochre">Ports</NavItem>
			<NavItem href="/blog" color="moss">Blog</NavItem>
		</ul>
	</nav>

	<ThemeSwitcher />
</div>
