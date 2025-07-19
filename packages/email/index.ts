import { Resend } from "resend";

// Integration: https://react.email/docs/integrations/overview
export const resend = new Resend(process.env.EMAIL_API_KEY);

//TODO: setup nodemailer for dev
