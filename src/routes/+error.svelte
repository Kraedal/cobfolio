<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import bunny from '$lib/assets/images/bunny.gif';
</script>

<svelte:head>
	<title>{page.status} — Page not found</title>
	<meta name="description" content="The page you are looking for could not be found." />
</svelte:head>

<section
	class="mx-auto flex min-h-[calc(100svh-8rem)] -mt-20 max-w-5xl flex-col items-center justify-center gap-8 px-6 py-16 text-center md:px-12 md:py-24"
>
	<img title="Return to Lyanne" src={bunny} alt="A confused bunny" class="w-48 max-w-full md:w-64" />
	<div>
		<p class="text-sm tracking-[0.25em] text-[#595F34] uppercase">{page.status}</p>
		<h1 class="mt-4 text-4xl tracking-tight md:text-6xl">Oops, wrong burrow.</h1>
		<p class="mx-auto mt-5 max-w-md leading-7 opacity-75">
			{page.error?.message ?? 'The page you are looking for does not exist.'}
		</p>
		<a
			href={resolve('/')}
			class="mt-8 inline-block rounded bg-[#595F34] px-5 py-3 text-[#D1C6AE] transition-colors hover:bg-[#424626]"
		>
			Back home
		</a>
	</div>
</section>
