<script>
  import { get } from "svelte/store";
  import { state, update } from "./state";

  const addStudent = () => {
    update((state) => {
      console.log("### state ###", state);
      state.students.unshift({
        id: state.students.length + 1,
        name: "John Doe",
      });

      return state;
    });
  };
</script>

<main>
  <h1 class="text-3xl font-bold underline text-success">Hello world!</h1>
  <h2><strong>Reading the state</strong></h2>
  <pre>State without get: {JSON.stringify(state)}</pre>
  <pre>State with get: {JSON.stringify(get(state))}</pre>

  <hr />

  <h2><strong>Updating the state</strong></h2>

  <button on:click={addStudent}>Add</button>

  <!-- render students -->
  <ul>
    {#each $state.students as student}
      <li>#{student.id} : {student.name}</li>
    {/each}
  </ul>
</main>
