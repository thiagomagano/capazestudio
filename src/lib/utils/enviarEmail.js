import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";

//const resend = new Resend(RESEND_API_KEY);
const resend = new Resend("re_AAFJKtyW_CZn7TpZ8KyL7yqmmkHVQm6aR");

export default async function enviarEmail(from, to, subject, body) {
  try {
    const data = await resend.emails.send({
      from: from,
      to: [...to],
      subject: subject,
      html: body,
    });
    data.then((res) => {
      console.log(res);
      return res;
    });
  } catch (error) {
    return error;
  }
}
