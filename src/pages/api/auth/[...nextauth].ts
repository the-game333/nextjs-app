
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "626299452134-um9sllkkj86ghrff18m39qk7lrhlmk83.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        GitHubProvider({
            clientId: "a364b8e6113ce8cbe484",
            clientSecret: "5ff0ed0a8acebc3293a8b8efa0de8d84976712e8"
        })
        // ...add more providers here
    ],
}
export default NextAuth(authOptions)