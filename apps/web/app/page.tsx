"use client";

import { signOut } from "@repo/auth/client";
import { Button } from "@repo/ui/src/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@repo/ui/src/components/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-screen items-center justify-center">
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
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={() =>
              signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              })
            }
            className="w-full"
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
