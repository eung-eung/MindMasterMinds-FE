export interface CommentPostExplore {
    id: string,
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
    }
    comment: string
    creationDate: Date,
    lastModifiedDate: Date,
    isDeleted: boolean
}