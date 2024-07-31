export async function load({ params, fetch }) {
  // const response = await fetch(
  //   PUBLIC_POCKETBASE_URL + `/api/collections/projetos/records/` + params.slug,
  // );
  // car = await response.json();

  return {
    id: params.slug,
    titulo: "DG7 IMÓVEIS",
    seguimento: "Agência Imoboliária",
    servico: "Identidade Visual e Social Midia",
    capa: "https://placehold.co/600x400",
    apresentacao:
      "A DG7 Imóveis é uma empresa especializada na assessoria de compra, aluguel e encomenda de imóveis na cidade de São Paulo. Entre seus valores estão tratar seus clientes como parte da família, pois isso faz diferença na hora da escolha do lar, eles atuam desde a triagem, passando pelas visitas, o fechamento do negócio e principalmente no pós-venda.",
    sobre:
      "O objetivo do projeto se deu através de um redesign do logotipo anterior, que já não se adequava a estratégia da empresa e continha problemas de leitura. Para o símbolo, o cliente requisitou que o símbolo fosse trabalhado com um coração, para que esse estivesse alinhado com os valores da empresa.",
    fotos: [
      "https://placehold.co/400x500",
      "https://placehold.co/400x500",
      "https://placehold.co/400x500",
      "https://placehold.co/400x500",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  };

  throw error(404, "Not found");
}
