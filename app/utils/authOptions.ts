
import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import FacebookProvider  from "next-auth/providers/facebook"
import TwitchProvider  from "next-auth/providers/twitch"


export const authOptions:NextAuthOptions = {
    pages : {
      "signIn": "/auth/signin",
    },
    debug: process.env.ENV === "dev" ? true: false,
    providers: [
        // GitHub({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        //     authorization: { params: { scope: "user:email repo" } }, //openid is required for Google ( OIDC providers )
        //     profile: (profile) => {
        //         return {
        //             id: profile.id,
        //             name: profile.name,
        //             email: profile.email,
        //             image: profile.avatar_url
        //         }
        //     },
        // }),
        Google({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        }),
        FacebookProvider ({
          clientId: process.env.META_ID as string,
          clientSecret: process.env.META_SECRET as string,
        }),
        TwitchProvider({
          clientId: process.env.TWITCH_ID as string,
          clientSecret: process.env.TWITCH_SECRET as string,
        })

    ],
    secret: process.env.NEXTAUTH_SECRET as string, // else session will be null
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true

            if ((account as any).provider === "google") {
              return (profile as any).email_verified
            } else {
              if (isAllowedToSignIn) {
                return true
              } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
              }
            }
        },
          async redirect({ url, baseUrl }) {

            // // Allows relative callback URLs
            // if (url.startsWith("/")) return `${baseUrl}${url}`

            // // Allows callback URLs on the same origin
            // else if (new URL(url).origin === baseUrl) return url
            // return baseUrl

            return `${baseUrl}/dashboard`;
          },
          async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            // session.user.id = token.id
            return session
          },
          async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.accessToken = account.access_token
            }
            return token
          }
    }
}