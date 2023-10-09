import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"

//https://github.com/nextauthjs/next-auth-example/blob/main/auth.ts


export const authOptions:NextAuthOptions = {
    debug: process.env.ENV === "dev" ? true: false,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            authorization: { params: { scope: "user:email repo" } }, //openid is required for Google ( OIDC providers )
            profile: (profile) => {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET as string, // else session will be null
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
              return true
            } else {
              // Return false to display a default error message
              return false
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
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

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }