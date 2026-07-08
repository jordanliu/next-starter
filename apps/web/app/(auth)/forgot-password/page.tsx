import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
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
        <Button render={<Link href="/login" />} size="lg" className="w-full">
          Back to login
        </Button>
      </CardContent>
    </Card>
  );
}
