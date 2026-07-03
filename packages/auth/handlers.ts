import { toNextJsHandler } from "better-auth/next-js";
import "server-only";

import { getAuth } from "./server";

export function GET(request: Request) {
  return toNextJsHandler(getAuth()).GET(request);
}

export function POST(request: Request) {
  return toNextJsHandler(getAuth()).POST(request);
}
