import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/libs/userLogin";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}