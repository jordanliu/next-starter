"use client";

import { signOut } from "@repo/auth/client";
import { Button } from "@repo/ui/components/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      try {
        const { error } = await signOut();

        if (error) {
          toast.error("Sign out failed", {
            description: error.message || "Please try again.",
          });
          return;
        }

        router.replace("/login");
        router.refresh();
      } catch {
        toast.error("Sign out failed", {
          description: "An unexpected error occurred. Please try again.",
        });
      }
    });
  };

  return (
    <Button onClick={handleLogout} className="w-full" disabled={isPending}>
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
}
