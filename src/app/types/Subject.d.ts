export interface Subject {
    id: string,
    name: string,
    code: string,
    description: string,
    price: number,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date
}