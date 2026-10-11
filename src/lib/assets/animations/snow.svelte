<script lang="ts">
	import { onMount } from 'svelte';

	let isSnowing = $state(false);

	const snowflakes = Array.from({ length: 32 }, (_, index) => ({
		left: `${(index * 37) % 101}%`,
		size: `${12 + ((index * 7) % 15)}px`,
		delay: `${-((index * 11) % 18)}s`,
		duration: `${12 + ((index * 13) % 12)}s`,
		drift: `${-35 + ((index * 17) % 71)}px`
	}));

	onMount(() => {
		const month = new Date().getMonth();
		isSnowing = month >= 8 && month <= 11;
	});
</script>

{#if isSnowing}
	<div class="snow-overlay" aria-hidden="true">
		{#each snowflakes as flake, index (index)}
			<div
				class="snowflake"
				style:left={flake.left}
				style:--size={flake.size}
				style:--delay={flake.delay}
				style:--duration={flake.duration}
				style:--drift={flake.drift}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="snowflake-icon"
				>
					<path d="m10 20-1.25-2.5L6 18" />
					<path d="M10 4 8.75 6.5 6 6" />
					<path d="m14 20 1.25-2.5L18 18" />
					<path d="m14 4 1.25 2.5L18 6" />
					<path d="m17 21-3-6h-4" />
					<path d="m17 3-3 6 1.5 3" />
					<path d="M2 12h6.5L10 9" />
					<path d="m20 10-1.5 2 1.5 2" />
					<path d="M22 12h-6.5L14 15" />
					<path d="m4 10 1.5 2L4 14" />
					<path d="m7 21 3-6-1.5-3" />
					<path d="m7 3 3 6h4" />
				</svg>
			</div>
		{/each}
	</div>
{/if}

<style>
	.snow-overlay {
		position: fixed;
		inset: 0;
		z-index: 40;
		overflow: hidden;
		pointer-events: none;
		color: rgb(255 255 255 / 70%);
	}

	.snowflake {
		position: absolute;
		top: calc(var(--size) * -1);
		width: var(--size);
		height: var(--size);
		animation: snowfall var(--duration) linear var(--delay) infinite;
	}

	.snowflake-icon {
		width: 100%;
		height: 100%;
	}

	@keyframes snowfall {
		0% {
			transform: translate3d(0, -10vh, 0) rotate(0deg);
		}
		50% {
			transform: translate3d(var(--drift), 50vh, 0) rotate(180deg);
		}
		100% {
			transform: translate3d(0, 110vh, 0) rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.snowflake {
			animation-duration: 30s;
		}
	}
</style>
