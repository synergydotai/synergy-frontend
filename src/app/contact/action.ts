"use server";

import { FormState } from "@/utils/types";
import nodemailer from "nodemailer";

const {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_FROM,
  MAIL_TO,
  MAIL_PORT,
  MAIL_SERVER,
  MAIL_TLS,
} = process.env;

export const sendContactUsMail = async (_: FormState, formdata: FormData) => {
  const { email, topic, company, role, message, allowGetInTouch } =
    Object.fromEntries(formdata);

  console.log("hello");

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_SERVER,
      port: parseInt(MAIL_PORT as string, 10),
      secure: MAIL_TLS === "true", // true for TLS, false for SSL
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Contact Us Form: Message from ${email}`,
      html: `
          <div>
          <p>Email: ${email}</p>
          <p>Topic: ${topic}</p>
          <p>Company: ${company}</p>
          <p>Role: ${role}</p>
          <p>Message: ${message}</p>
          <p>Get in touch with me: ${Boolean(allowGetInTouch)}</p>
          </div>
          `,
    });

    return {
      success: true,
      message: "Message successfully sent, we will be in touch",
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Something went wrong.",
    };
  }
};
