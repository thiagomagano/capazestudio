const PB_ADMIN_USER = "othymag@gmail.com";
const PB_ADMIN_PASS = "S3nha@pbapi";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals, params }) => {
    const data = await request.formData();
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");

    // const whatsappRegex = new RegExp(
    //   /^(?:\+|00)?(?:55)?(?:\(?0?\d{2}\)?)?[9]?\d{4}[-.]?\d{4}$/,
    // );

    if (!nome) {
      return fail(400, {
        missingName: true,
        msg: "O campo Nome é obrigatório",
      });
    }

    if (!mensagem) {
      return fail(400, {
        missingProposta: true,
        msg: "O campo Proposta é obrigatório",
      });
    }

    const pbData = {
      nome: nome,
      whatsapp: whatsapp,
      email: email,
      troca: troca === "on" ? true : false,
      proposta: proposta,
      idCarro: params.slug,
    };

    const userData = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };

    const templateBody = `<div>
        <h1>Uma nova mensagem foi recebida</h1>
        <p><strong>Nome:</strong> ${userData.nome} </p>
        <p><strong>Email:</strong> ${userData.email} </p>
        <p><strong>Mensagem:</strong> ${userData.mensagem} </p>
      </div>`;

    const templateSubject = `NOVA MENSAGEM RECEBIDA - ${userData.nome}`;
    const EmailList = ["contato@capazestudio.com.br"];

    await locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS);

    //const record = await locals.pb.collection("propostas").create(pbData);
    //const recordUser = await locals.pb.collection("clientes").create(userData);

    const dataEmail = await sendEmail(
      userData.email,
      EmailList,
      templateSubject,
      templateBody,
    );

    if (!record) throw error(400, { msg: "Erro ao criar registro" });

    return {
      success: true,
      record: JSON.stringify(record),
      msg: "Proposta enviada.",
    };
  },
};
