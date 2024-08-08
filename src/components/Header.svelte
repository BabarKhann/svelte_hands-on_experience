<script>
  export let student = null;
</script>

<header class="flex justify-between items-center p-5">
  {#if student}
    Student name - Age
  {:else}
    <a href="/" class="font-bold text-2xl gap-2 flex text-accent">
      <img src="vite.svg" alt="Vite Logo" srcset="" />
      Students Dashabord
    </a>
  {/if}

  <div>
    {#if student}
      <button>Export Student</button>
      <button>Duplicate</button>
      <button>Back</button>
    {:else}
      <button>Bulk Delete</button>
      <button>Add Student</button>
      <button>Filter</button>
    {/if}
  </div>
</header>
