<script lang="ts">
	import { revealOnScroll } from '$lib/assets/animations/actions';

	const statements = [
		'Machine Learning Engineer building useful, human-centered software.',
		'Turning complex ideas into clear, reliable digital experiences.',
		'Coding, designing, writing, and thinking through better solutions.',
		'Fueled by coffee, curiosity, and a little bit of chaos.'
	];
</script>

<section class="mx-auto max-w-3xl px-6 py-36 md:pt-40" aria-labelledby="about-heading">
	<h2 id="about-heading" class="sr-only">About me</h2>
	<div class="space-y-12 text-3xl leading-tight font-bold md:text-5xl">
		{#each statements as statement, index (statement)}
			<div use:revealOnScroll class="scroll-reveal" style={`--reveal-delay: ${index * 90}ms`}>
				<p>{statement}</p>
			</div>
		{/each}
	</div>
</section>
