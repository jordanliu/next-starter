import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { buttonVariants } from "@repo/ui/components/button";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Forgot password</CardTitle>
        <CardDescription>
          Password reset flow coming soon. Return to sign in for now.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="/login"
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Back to login
        </Link>
      </CardContent>
    </Card>
  );
}
