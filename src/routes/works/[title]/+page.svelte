<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const project = $derived(page.data.project);
	const projectUrl = $derived(`https://jacobong.dev/works/${page.params.title}`);
	const projectStructuredData = $derived(
		`\u003cscript type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'CreativeWork',
			name: project.title,
			description: project.description,
			url: projectUrl,
			author: {
				'@type': 'Person',
				name: 'Jacob Ong',
				url: 'https://jacobong.dev'
			}
		})}\u003c/script>`
	);
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content={`${project.title} — Jacob Ong`} />
	<meta property="og:description" content={project.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={projectUrl} />
	<meta name="twitter:title" content={`${project.title} — Jacob Ong`} />
	<meta name="twitter:description" content={project.description} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html projectStructuredData}
</svelte:head>

<article class="mx-auto min-h-[calc(100svh-8rem)] max-w-3xl px-6 py-16 md:px-12 md:py-24">
	<a href={resolve('/works')} class="text-sm opacity-70 transition-opacity hover:opacity-100"
		>← Back to projects</a
	>
	<p class="mt-16 text-sm tracking-widest uppercase opacity-60">{project.category}</p>
	<h1 class="mt-4 text-4xl tracking-tight md:text-6xl">{project.title}</h1>
	<p class="mt-8 max-w-2xl text-lg leading-8 opacity-80">{project.description}</p>
	<div class="mt-16 border-t border-white/15 pt-8 text-base leading-8 opacity-80">
		<p>{project.body}</p>
	</div>
</article>
