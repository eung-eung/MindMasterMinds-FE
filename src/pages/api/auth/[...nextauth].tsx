import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'

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
                const user = { id: "1", email: payload.email }

                console.log(payload);

                if (user) {
                    console.log('zo');
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ session, user, token }) {
            console.log('session: ', session);
            console.log('session-user: ', user);
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log('token ', token);
            console.log(user);


            return token
        }
    }
})