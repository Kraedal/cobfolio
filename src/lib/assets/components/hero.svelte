<script>
  import { Github, Linkedin, Mail, Youtube, ChevronDown } from "@lucide/svelte";

  let activeIndex = $state(null);

  const items = [
    {
      title: "Professional Experience",
      content: "Currently working as a Product Specialist at Kyrios Solutions Inc., I do web development and machine learning freelance projects on the side."
    },
    {
      title: "Core Expertise",
      content: "Frontend Development (Svelte, React), Backend Development (Python, Django), Machine Learning (TensorFlow, Pandas, Scikit-learn)."
    },
    {
      title: "Education",
      content: "B.S. in Computer Science from the University of Saint Louis Tuguegarao."
    },
        {
      title: "Hobbies & Interests",
      content: "I do write poetry and prose during my free time. I also play guitar and my current interest is in brewing my own coffee."
    }
  ];

  // @ts-ignore
  const toggle = (index) => {
    activeIndex = activeIndex === index ? null : index;
  };
</script>

<section class="h-[calc(100vh-12rem)] grid grid-cols-1 md:grid-cols-2  text-white">
  <div class="p-12 flex flex-col  justify-center">
      <img src="/images/einfotovonmir.jpeg" alt="Myself" class="my-4 md:my-8 rounded-4xl" />
      <h1 class="text-2xl px-2 font-thin">Jacob Ong </h1>
      <small class="text-[#97AED1] px-2 py-2">Machine Learning Engineer | AWS Certified AI Practitioner</small>

      <small class="text-xs px-2 font-thin mt-2">Fueled by Coffee and Biryani</small>
      <section class="mt-4 flex flex-row items-center gap-4">
        <a target="_blank" href="https://github.com/kraedal" class="flex items-center gap-2 px-4 py-2 hover:bg-[#97AED1] rounded-lg w-fit transition">
          <Github size="24" color="white" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jacob-ong/" class="flex items-center gap-2 px-4 py-2 hover:bg-[#97AED1] rounded-lg w-fit transition">
          <Linkedin size="24" color="white" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@capceino" class="flex items-center gap-2 px-4 py-2 hover:bg-[#97AED1] rounded-lg w-fit transition">
          <Youtube size="24" color="white" />
        </a>
        <a href="mailto:sorianojacobong@gmail.com" class="flex items-center gap-2 px-4 py-2 hover:bg-[#97AED1] rounded-lg w-fit transition">
          <Mail size="24" color="white" />
        </a>
      </section>
  </div>

  <!-- Experience -->
  <div class="-mt-12 md:mt-12 p-12  flex flex-col items-center ">
    <div class="w-full max-w-md">
      {#each items as item, i}
        <div class="border-b border-white/10">
          <button 
            onclick={() => toggle(i)}
            class="flex w-full items-center justify-between py-4 text-left font-medium text-white transition-all"
          >
            <span>{item.title}</span>
            <ChevronDown class="h-5 w-5 transition-transform duration-500 {activeIndex === i ? 'rotate-180' : ''}" />
          </button>
          {#if activeIndex === i}
            <div class="pb-4 text-sm text-[#97AED1] leading-relaxed">
              {item.content}
            </div>
          {/if}
        </div>
      {/each}
    </div>
    <a href="/works">
    <div class="flex flex-col justify-center items-center w-80 h-40 mt-12 p-12 transition duration-500 hover:bg-white sepia">
      <p class="text-black">You found me!</p>
    </div>
    </a>
  </div>
</section>

