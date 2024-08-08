<script>
  import { state } from "../state";
</script>

<table class="w-full">
  <thead class="bg-light text-left text-grey">
    <tr>
      <th></th>
      <th>Student</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Score</th>
      <th>Age</th>
      <th>Registration Date</th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody>
    {#each $state.students as student}
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{student.name}</td>
        <td>{student.phone}</td>
        <td>
          <a href={`mailto:${student.email}`}>{student.email}</a>
        </td>
        <td>{student.score}</td>
        <td>{student.age}</td>
        <td>{student.registered}</td>
        <td>{student.isActive ? "✅" : "❌"}</td>
      </tr>
    {/each}
  </tbody>
</table>
