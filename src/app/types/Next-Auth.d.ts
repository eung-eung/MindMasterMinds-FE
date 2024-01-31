import NextAuth from "next-auth/next";
declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            accessToken: string,
            refreshToken: string,
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