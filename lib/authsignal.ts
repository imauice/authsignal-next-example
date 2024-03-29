import { Authsignal } from "@authsignal/node";

const secret = process.env.AUTHSIGNAL_SECRET;

if (!secret) {
  throw new Error("AUTHSIGNAL_SECRET is not set");
}

export const authsignal = new Authsignal({ secret });
