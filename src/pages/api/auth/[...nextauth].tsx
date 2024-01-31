import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from "axios";

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;

export default NextAuth({
    pages: {
        signIn: '/signIn',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const payload = {
                    email: credentials?.username,
                    password: credentials?.password,
                };

                const response = await axios.post(process.env.API + '/Auth/login', {
                    email: payload.email,
                    password: payload.password
                })
                const user = response.data
                console.log('36: ', user);

                if (user) {
                    return user
                }
                else {
                    return null
                }

            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     console.log('user: ', user);
        //     console.log('account: ', account);
        //     console.log('email: ', email);

        //     const isAllowed = false
        //     // fetch(`https://mindmastermindsapi.azurewebsites.net/api/user/send-OTP-email`, {
        //     //     method: 'POST',
        //     //     headers: { 'content-type': 'application/json' },
        //     //     body: JSON.stringify(
        //     //         user.email
        //     //     )
        //     // })
        //     //     .then(res => {
        //     //         return res.json()
        //     //     })
        //     //     .then(data =>
        //     //         console.log('data: ', data)

        //     //     )
        //     console.log(user, account, profile, email, credentials);
        //     // if (!isAllowed) {
        //     //     return '/'
        //     // }
        //     return true
        // },
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, user, token }) {
            session.user = token as any
            return session
        },
        async redirect({ url, baseUrl }) {
            console.log('url: ', url)
            console.log('base url: ', baseUrl)

            return url.startsWith(baseUrl)
                ? Promise.resolve(url)
                : Promise.resolve(baseUrl);
        },
    }
})