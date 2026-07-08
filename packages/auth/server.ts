import { getDatabase } from "@repo/database";
import * as schema from "@repo/database/schema";
import { sendEmail } from "@repo/email";
import VerifyEmail from "@repo/email/templates/verify-email";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

function createAuth() {
  return betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    emailVerification: {
      sendOnSignUp: true,
      sendVerificationEmail: async ({ user, url }) => {
        await sendEmail({
          react: VerifyEmail({
            name: user.name,
            verificationUrl: url,
          }),
          to: user.email,
          subject: "Verify your email address",
        });
      },
    },
    database: drizzleAdapter(getDatabase(), {
      provider: "pg",
      schema,
    }),
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60,
      },
    },
    plugins: [nextCookies()],
  });
}

let auth: ReturnType<typeof createAuth> | undefined;

export function getAuth(): ReturnType<typeof createAuth> {
  auth ??= createAuth();
  return auth;
}
