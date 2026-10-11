<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	import logo from '$lib/assets/logo.svg';
	import liquid from '$lib/assets/images/liquid-metal.webm';
	import Snow from '$lib/assets/animations/snow.svelte';
	import Nav from '$lib/assets/components/nav.svelte';
	import Footer from '$lib/assets/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>Cob</title>
</svelte:head>

{#if page.url.pathname === '/'}
	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[80vh] overflow-hidden">
		<video
			class="h-full w-full object-cover opacity-30"
			autoplay
			muted
			loop
			playsinline
			aria-hidden="true"
		>
			<source src={liquid} type="video/webm" />
		</video>
		<div
			class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(209,198,174,0.3)_0%,rgba(209,198,174,0.42)_42%,#D1C6AE_72%,#D1C6AE_100%)]"
		></div>
	</div>
{/if}

<Snow />

<main class="relative z-10 mx-auto w-full max-w-7xl scroll-smooth">
	<Nav />
	{@render children()}
	<Footer />
</main>
