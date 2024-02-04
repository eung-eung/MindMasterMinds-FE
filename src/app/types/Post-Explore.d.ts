export interface PostExplore {
    id: string,
    content: string,
    image: string,
    creationDate: Date,
    lastUpdateDate: Date,
    isDeleted: boolean,
    user: {
        id: string,
        email: string,
        emailConfirmed: boolean,
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
    },
    commentsCount: number,
    reactionsCount: number
}