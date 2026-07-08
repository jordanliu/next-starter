import { Resend } from "resend";

let resend: Resend | undefined;

export function getResend() {
  const apiKey = process.env.EMAIL_API_KEY;

  if (!apiKey) {
    return null;
  }

  resend ??= new Resend(apiKey);
  return resend;
}
