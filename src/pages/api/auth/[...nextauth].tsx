import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from "next-auth";
import axious from "@/app/lib/axious";

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
                    console.log({
                        "email": profile.email,
                        "firstName": profile.family_name,
                        "lastName": profile.given_name
                    });
                    const response = await axious.post('/Auth/login-email',
                        {
                            "email": profile.email,
                            "firstName": profile.family_name || "A",
                            "lastName": profile.given_name
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
                const response = await axious.post('/Auth/login', {
                    email: payload.email,
                    password: payload.password
                })
                const user = response.data
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