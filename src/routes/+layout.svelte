<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import './layout.css';
	import logo from '$lib/assets/logo.svg';
	import Nav from '$lib/assets/components/nav.svelte';
	import Loading from '$lib/assets/components/loading.svelte';

	let { children } = $props();
	let isLoading = $state(true);

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1500); // 3 seconds loading

		// Register service worker
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js')
				.then((registration) => {
					console.log('Service Worker registered:', registration);
				})
				.catch((error) => {
					console.log('Service Worker registration failed:', error);
				});
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>Cob</title>
</svelte:head>

<main class="mx-auto max-w-7xl "> 
<Nav />
{@render children()}
</main>

{#if isLoading}
	<div transition:fade={{duration: 1500}}>
		<Loading />
	</div>
{/if}
