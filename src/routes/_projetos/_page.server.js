import { error } from "@sveltejs/kit";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";

export async function load({ fetch, params }) {
  const response = await fetch(
    `${PUBLIC_POCKETBASE_URL}/api/collections/cases/records`,
  );
  const Cases = await response.json();

  if (Cases) {
    return Cases;
  }
  throw error(404, "Not found");
}
