<script lang="ts">
	import { resolve } from '$app/paths';

	const projects = [
		{
			title: 'Lancer',
			slug: 'lancer',
			description:
				'A focused digital experience designed to make discovering and managing work feel simple.',
			category: 'Web application'
		},
		{
			title: 'Techtalk',
			slug: 'techtalk',
			description:
				'A space for sharing practical ideas, experiments, and conversations around technology.',
			category: 'Content platform'
		},
		{
			title: 'Paravan',
			slug: 'paravan',
			description:
				'A commissioned van-hailing app built for the transportation needs of Region Two.',
			category: 'Transportation platform'
		}
	];
</script>

<section class="mx-auto -mt-20 min-h-[calc(100svh-8rem)] max-w-5xl px-6 py-16 md:px-12 md:py-24">
	<header class="mb-10 flex items-end justify-between gap-6">
		<div>
			<p class="mb-3 text-sm tracking-widest uppercase opacity-70">Selected work</p>
			<h1 class="text-3xl tracking-tight md:text-5xl">Projects</h1>
		</div>
		<p class="hidden max-w-xs text-right text-sm leading-6 opacity-70 sm:block">
			A small archive of things I have built and learned from.
		</p>
	</header>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.slug)}
			<a
				href={resolve(`/works/${project.slug}`)}
				class="group overflow-hidden rounded-xl border border-white/15 bg-black/5 transition-transform duration-300 hover:-translate-y-1 hover:border-white/35"
			>
				<div class="aspect-[16/10] overflow-hidden bg-black/10">
					<div
						class="flex h-full items-center justify-center bg-[#595F34] p-6 text-center text-3xl tracking-tight text-[#D1C6AE] transition duration-500 group-hover:scale-105"
					>
						{project.title}
					</div>
				</div>
				<div class="p-5">
					<p class="mb-2 text-xs tracking-widest uppercase opacity-60">{project.category}</p>
					<h2 class="text-xl">{project.title}</h2>
					<p class="mt-3 text-sm leading-6 opacity-75">{project.description}</p>
					<span
						class="mt-5 inline-block text-sm transition-transform duration-300 group-hover:translate-x-1"
					>
						Read project →
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
