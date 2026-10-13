<script lang="ts">
	import { resolve } from '$app/paths';

	const resumeUrl = `${resolve('/')}swe_jacob_resume.pdf`;
</script>

<svelte:head>
	<title>Contact</title>
	<meta
		name="description"
		content="Get in touch with Jacob Ong about a project, collaboration, or idea."
	/>
</svelte:head>

<section
	class="mx-auto -mt-20 flex max-w-4xl items-center px-6 py-16 md:px-12 md:py-24"
>
	<div class="max-w-2xl">
		<p class="mb-4 text-sm tracking-[0.25em] text-[#595F34] uppercase">Contact</p>
		<h1 class="text-4xl tracking-tight md:text-6xl">Let's work together.</h1>
		<p class="mt-6 max-w-xl text-base leading-7 opacity-75">
			Have a project, idea, or question? Send me an email and I'll get back to you.
		</p>

		<div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
			<a
				href="mailto:sorianojacobong@gmail.com"
				class="text-lg underline decoration-[#595F34] decoration-2 underline-offset-4 transition-colors hover:text-[#595F34]"
			>
				sorianojacobong@gmail.com
			</a>
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={resumeUrl}
				download
				class="rounded bg-[#595F34] px-5 py-3 text-[#D1C6AE] transition-colors hover:bg-[#424626]"
			>
				Download résumé
			</a>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</div>

		<div class="mt-10 flex gap-6 text-sm">
			<a
				href="https://github.com/Kraedal"
				target="_blank"
				rel="noreferrer"
				class="transition-colors hover:text-[#595F34]"
			>
				GitHub
			</a>
			<a
				href="https://www.linkedin.com/in/jacob-ong/"
				target="_blank"
				rel="noreferrer"
				class="transition-colors hover:text-[#595F34]"
			>
				LinkedIn
			</a>
		</div>
	</div>
</section>
