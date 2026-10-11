<script lang="ts">
	import Me from '$lib/assets/images/me.png';
</script>

<div class="flex flex-col">
	<div
		class="mx-auto flex w-full max-w-4xl flex-1 flex-col-reverse gap-12 overflow-hidden px-6 py-24 md:flex-none md:flex-row md:px-12"
	>
		<div class="flex min-w-0 flex-2 flex-col justify-center gap-y-8">
			<h1 class="text-xl text-[#595F34]">Hi, I'm Jacob .ᐟ.ᐟ</h1>
			<small class="text-md max-w-full min-w-0 leading-7 font-extralight wrap-break-word">
				I build applications using sveltekit and constantly exploring machine learning tools and
				technologies. Currently working at <b>Kyrios Solutions Inc</b> as a Product and Tech Solutions
				Specialist.
			</small>
		</div>
		<div
			class="mx-auto flex h-64 w-64 max-w-full min-w-0 flex-none items-center justify-center overflow-hidden rounded-full bg-[#D1C6AE] md:mx-0"
		>
			<img
				src={Me}
				alt="At the AWS office"
				class="h-full w-full object-cover opacity-[.78] mix-blend-multiply contrast-105 grayscale"
			/>
		</div>
	</div>
</div>
