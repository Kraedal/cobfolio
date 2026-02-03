<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/logo.svg';
	import Nav from '$lib/assets/components/nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>Cob</title>
</svelte:head>

<main class="mx-auto max-w-7xl "> 
<Nav />
{@render children()}
</main>
