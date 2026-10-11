<script lang="ts">
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { isOpen = $bindable(false) } = $props();

	let logoClicked = $state(false);

	type StaticRouteId = Exclude<RouteId, `/works/[title]`>;

	const navLinks: { name: string; href: StaticRouteId }[] = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/works' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav
	data-sveltekit-preload-data="hover"
	class="sticky top-0 z-50 m-6 flex items-center justify-between py-4"
>
	<div
		class="z-50 transition-all duration-300 {isOpen
			? 'hover:text-[#D1C6AE]'
			: 'hover:text-[#595F34]'} {logoClicked ? 'scale-95' : ''}"
	>
		<a
			href={resolve('/')}
			onclick={() => {
				isOpen = false;
				logoClicked = true;
				setTimeout(() => (logoClicked = false), 300);
			}}
			aria-label="Home"
		>
			<svg
				width="45"
				height="31"
				viewBox="0 0 45 31"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.88 3.88L7.88 7.68L7.24 7.92C5.92 8.4 5.28 10.12 5.28 13.04L5.28 16.96C5.28 20.12 6.4 21.68 8.28 21.68L9.2 21.68C11.04 21.68 12.08 20.08 12.08 16.88L12.08 13.36C12.08 10.12 11.68 8.84 10.28 8L9.76 7.68L9.76 4.2C9.76 2.68 10.4 2.16 12.04 2.72C15.68 3.88 18.48 7.32 18.48 13.04L18.48 17.16C18.48 22.8 15.24 27.2 10.36 27.2L8.28 27.2C3.44 27.2 1.71152e-06 23.44 1.44051e-06 17.24L1.32336e-06 14.56C1.18698e-06 11.44 0.720001 9.56 1.96 8.16L0.200001 8.16L0.200001 3.88C0.200001 2.36 0.640001 1.88 2.2 1.88L5.88 1.88C7.44 1.88 7.88 2.32 7.88 3.88ZM31.48 11.72L31.48 16.12C31.48 25 28.92 27.16 22.24 27.16C15.52 27.16 13 25 13 16.12L13 11.72C13 2.84 15.52 0.679999 22.24 0.679999C28.92 0.679999 31.48 2.84 31.48 11.72ZM24.84 16.12L24.84 11.72C24.84 7 23.88 6.16 21.68 6.16C19.56 6.16 18.68 7 18.68 11.72L18.68 16.12C18.68 20.84 19.56 21.68 21.68 21.68C23.92 21.68 24.84 20.84 24.84 16.12ZM29.44 19.92C27.2 18.28 26 14.92 26 11.6L26 8.96C26 3.16 29.2 1.22667e-07 34.04 -8.88964e-08L35.88 -1.69325e-07C41.4 -4.10612e-07 44.48 3.48 44.48 9.76L44.48 11.04C44.48 14.84 43.04 17.28 40.6 19.56C43.2 19.56 44.28 20.52 44.28 22.8L44.28 25L26.2 25C24 25 23.4 25.88 23.4 28.2L23.4 30.72L20.28 30.72C18.76 30.72 18.28 30.2 18.28 28.72L18.28 21.92C18.28 20.4 18.72 19.92 20.28 19.92L29.44 19.92ZM34.36 18.76C36.6 18.76 38 16.92 38 13.52L38 9.44C38 6.36 36.72 5.08 34.76 5.08C32.68 5.08 31.32 6.44 31.32 9.36L31.32 13.24C31.32 16.84 32.44 18.76 34.36 18.76Z"
					fill="currentColor"
				/>
			</svg>
		</a>
	</div>
	<!-- Menu Button -->
	<button
		class="group relative z-50 inline-flex h-10 w-10 items-center justify-center rounded text-center text-white {isOpen
			? 'hover:text-[#D1C6AE]'
			: 'hover:text-[#595F34]'} focus:outline-none"
		aria-pressed={isOpen}
		onclick={() => (isOpen = !isOpen)}
	>
		<span class="sr-only">Menu</span>
		<svg
			class="pointer-events-none h-10 w-10 fill-current"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				class="origin-center translate-x-1.75 -translate-y-1.25 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-315"
				y="7"
				width="9"
				height="2"
				rx="1"
			></rect>
			<rect
				class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45"
				y="7"
				width="16"
				height="2"
				rx="1"
			></rect>
			<rect
				class="origin-center translate-y-1.25 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:-rotate-225"
				y="7"
				width="9"
				height="2"
				rx="1"
			></rect>
		</svg>
	</button>

	{#if isOpen}
		<div
			transition:fade={{ duration: 300 }}
			class="fixed inset-0 z-40 flex flex-col justify-center bg-[#595F34] font-sans text-[#f1f0ec]"
		>
			<ul class="space-y-4 pr-8 text-right text-7xl font-bold md:pr-16 md:text-9xl lg:pr-32">
				{#each navLinks as link, i (link.href)}
					<li transition:fly={{ x: 50, duration: 800, delay: 150 + i * 100, easing: quintOut }}>
						<a
							href={resolve(link.href)}
							onclick={() => (isOpen = false)}
							class="inline-block transition-transform duration-300 hover:-translate-x-4 hover:text-[#D1C6AE]"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
