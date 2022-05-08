import { MailAdapter, SendMailData } from "../mailAdapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "df89d31d2864ce",
    pass: "7c829d4f7a56a6",
  },
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "MecBonjourno <mr.mec@mecbonjourno.com>",
      to: "Guilherme Zago <contatogzii@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
