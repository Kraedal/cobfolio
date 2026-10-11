<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	import logo from '$lib/assets/logo.svg';
	import liquid from '$lib/assets/images/liquid-metal.webm';
	import Snow from '$lib/assets/animations/snow.svelte';
	import Nav from '$lib/assets/components/nav.svelte';
	import Footer from '$lib/assets/components/footer.svelte';

	let { children } = $props();
	const siteUrl = 'https://jacobong.dev';
	const siteTitle = 'Jacob Ong — Software Engineer';
	const siteDescription =
		'Jacob Ong is a software engineer building thoughtful web applications with SvelteKit and modern tools.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				name: 'Jacob Ong',
				url: siteUrl,
				jobTitle: 'Software Engineer',
				sameAs: [
					'https://github.com/Kraedal',
					'https://www.linkedin.com/in/jacob-ong/',
					'https://bsky.app/profile/jacobong.dev'
				]
			},
			{
				'@type': 'WebSite',
				name: siteTitle,
				url: siteUrl,
				description: siteDescription
			}
		]
	};
	const structuredDataMarkup = `\u003cscript type="application/ld+json">${JSON.stringify(structuredData)}\u003c/script>`;
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<link rel="canonical" href={`${siteUrl}${page.url.pathname}`} />
	<meta name="description" content={siteDescription} />
	<meta property="og:site_name" content="Jacob Ong" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredDataMarkup}
	{#if page.url.pathname === '/'}
		<link rel="preload" href={liquid} as="video" type="video/webm" fetchpriority="high" />
	{/if}
</svelte:head>

{#if page.url.pathname === '/'}
	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[80vh] overflow-hidden">
		<video
			class="h-full w-full object-cover opacity-30"
			autoplay
			muted
			loop
			playsinline
			preload="auto"
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
