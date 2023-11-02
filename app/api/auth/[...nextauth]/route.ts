import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import FacebookProvider  from "next-auth/providers/facebook"
import TwitchProvider  from "next-auth/providers/twitch"
import { authOptions } from "@/app/utils/authOptions"

//https://github.com/nextauthjs/next-auth-example/blob/main/auth.ts



const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
