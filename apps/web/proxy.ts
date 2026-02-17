import { authMiddleware } from "@repo/auth/proxy";

export const proxy = authMiddleware;

export const config = {
  matcher: [
    // Protect all routes except auth routes, api routes, static files, and public assets
    "/((?!login|register|forgot-password|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
