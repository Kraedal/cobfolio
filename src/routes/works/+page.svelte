<script>
  import karina from '$lib/assets/images/1.jpg'
</script>

<svelte:head>
	<title>Works</title>
	<meta name="description" content="A collection of my projects through the years" />
</svelte:head>


<div class="p-12 flex flex-col flex-4">
  <h1 class="text-4xl md:text-5xl font-bold">Works</h1>
  <small class=" font-thin">This is a collection of my projects through the years</small>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
  <div class="flex flex-col p-4 gap-y-4">
    <img src="{karina}" alt="placeholder " />
    <h1>Project Title</h1>
    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae vitae consequuntur minus quis molestiae nobis illo quae consequatur, odit rerum?</small>

  </div>
  <div class="flex flex-col p-4 gap-y-4">
    <img src="{karina}" alt="placeholder " />
    <h1>Project Title</h1>
    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae vitae consequuntur minus quis molestiae nobis illo quae consequatur, odit rerum?</small>
  </div>
</div>
</div>