<script lang="ts">
	import { flyInAndFadeOnScroll } from '$lib/assets/animations/actions';
</script>

<div class="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center">
	<div use:flyInAndFadeOnScroll class="hero-fly-in flex flex-col items-center">
		<h3 class="mb-2 text-xl tracking-tight">Software Engineer</h3>
		<h1
			class="px-6 text-center text-6xl leading-tight font-black tracking-tighter uppercase md:px-12 md:text-8xl"
		>
			Jacob Ong
		</h1>

		<small class="mt-2 px-6 text-center"> Tech Solutions Specialist @ Kyrios Solutions Inc. </small>
	</div>
</div>
