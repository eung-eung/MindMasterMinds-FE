export interface Tutor {
    avatar: string,
    creationDate: Date,
    email: string,
    firstName: string,
    id: string,
    isDeleted: boolean,
    lastName: string,
    lastUpdateDate: Date,
    phoneNumber: string,
    userRole: {
        id: string,
        roleName: string
    }
}