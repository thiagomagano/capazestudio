import { error, fail } from "@sveltejs/kit";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";

import enviarEmail from "$lib/utils/enviarEmail";

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

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");

    // const whatsappRegex = new RegExp(
    //   /^(?:\+|00)?(?:55)?(?:\(?0?\d{2}\)?)?[9]?\d{4}[-.]?\d{4}$/,
    // );

    if (!nome) {
      return fail(400, {
        semNome: true,
        msg: "O campo é obrigatório",
      });
    }
    if (!email) {
      return fail(400, {
        semEmail: true,
        msg: "O campo é obrigatório",
      });
    }
    if (!mensagem) {
      return fail(400, {
        semMsg: true,
        msg: "O campo é obrigatório",
      });
    }

    const templateBody = `<div>
        <h1>Uma nova mensagem foi recebida</h1>
        <p><strong>Nome:</strong> ${nome} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Mensagem:</strong> ${mensagem} </p>
      </div>`;

    const templateSubject = `${nome} MANDOU UMA NOVA MENSAGEM VIA SITE `;
    const EmailList = ["contato@capazestudio.com.br"];

    const dataEmail = await enviarEmail(
      "site@capazestudio.com.br",
      EmailList,
      templateSubject,
      templateBody,
    );

    if (dataEmail.error) throw error(400, { msg: "erro ao enviar email" });

    return {
      success: true,
      msg: "Mensagem Enviada, obrigado!",
    };
  },
};
