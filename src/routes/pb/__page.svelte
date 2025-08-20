<script>
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";

  let projetos = $state([]);

  // onMount(async () => {
  //   const pb = new PocketBase("https://pb.capazestudio.com.br");

  //   const adminData = await pb.admins.authWithPassword(
  //     "othymag@gmail.com",
  //     "S3nha@pbapi",
  //   );

  //   const result = await pb.collection("projetos").getList(1, 20);

  //   projetos = [...projetos, result.items];

  //   console.log(projetos);
  // });
</script>

<ul>
  {#each projetos as projeto}
    <li>{projeto.titulo}</li>
  {/each}
</ul>
