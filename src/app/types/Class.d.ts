export interface Class {
    id: string,
    summary: string,
    description: string,
    courseSubject: {
        id: string,
        course: {
            id: string,
            name: string,
            code: string,
            description: string,
            isDeleted: boolean,
            createdAt: Date,
            updatedAt: Date
        },
        subject: {
            id: string,
            name: string,
            code: string,
            description: string,
            price: number,
            isDeleted: boolean,
            createdAt: Date,
            updatedAt: Date
        },
        isDeleted: boolean,
        createdAt: Date
    },
    createdAt: Date
    isDeleted: boolean,
    stateInfo: boolean,
    quantity: number,
    statusOrder: string,
    tutor: string,
    study: date

}