import { LoginForm } from "@/components/auth/login-form";
import { getSocialProviderAvailability } from "@repo/auth/server";

export default function LoginPage() {
  const providers = getSocialProviderAvailability();

  return (
    <LoginForm
      githubEnabled={providers.github}
      googleEnabled={providers.google}
    />
  );
}
