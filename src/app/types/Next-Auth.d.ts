import { DefaultUser } from "next-auth";
import NextAuth from "next-auth/next";
declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            accessToken: string,
            refreshToken: string,
            userViewLogin: {
                id: string
                email: string,
                phoneNumber: string,
                firstName: string,
                lastName: string,
                isDeleted: boolean,
                creationDate: Date,
                lastUpdateDate: Date,
                avatar: string,
                userRole: {
                    id: string,
                    roleName: string
                }
            }

        }
    }
    interface User extends DefaultUser {
        user: {
            id: string,
            accessToken: string,
            refreshToken: string,
            userViewLogin: {
                email: string,
                phoneNumber: string,
                firstName: string,
                lastName: string,
                isDeleted: boolean,
                creationDate: Date,
                lastUpdateDate: Date,
                avatar: string,
                userRole: {
                    id: string,
                    roleName: string
                }
            }

        }



    }
}