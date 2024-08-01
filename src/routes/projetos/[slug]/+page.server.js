import { PUBLIC_POCKETBASE_URL } from "$env/static/public";

export async function load({ params, fetch }) {
  const response = await fetch(
    PUBLIC_POCKETBASE_URL + `/api/collections/cases/records/` + params.slug,
  );

  const Case = await response.json();

  console.log(Case);

  if (Case) return Case;

  throw error(404, "Not found");
}
