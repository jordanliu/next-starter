import { LogoutButton } from "@/components/auth/logout-button";
import { getSession } from "@repo/auth/server";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@repo/ui/components/card";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession(await headers());

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardDescription>
            <Image
              className="w-full"
              src="/cat.gif"
              alt="next-starter"
              width={100}
              height={100}
            />
            <span className="sr-only">Signed in as {session.user.name}</span>
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <LogoutButton />
        </CardFooter>
      </Card>
    </main>
  );
}
