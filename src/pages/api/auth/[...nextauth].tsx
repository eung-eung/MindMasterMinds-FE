import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from "axios";
import { User } from "next-auth";

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;

export default NextAuth({
    pages: {
        signIn: '/signIn',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            profile: async (profile) => {
                try {
                    const response = await axios.post(
                        process.env.API_KEY + '/Auth/login-email',
                        profile.email,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    return {
                        id: profile.sub,
                        ...profile,
                        ...response.data
                    };
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        }
        ),
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
        async signIn({ user }) {
            return true
        },
        async jwt({ token, user }) {
            console.log('jwt: ', token);

            return { ...token, ...user }
        },
        async session({ session, user, token }) {
            session.user = token as any
            return session
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl)
                ? Promise.resolve(url)
                : Promise.resolve(baseUrl);
        },
    }
})