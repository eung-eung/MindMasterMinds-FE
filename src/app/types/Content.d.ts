export interface Content {
    id: string
    summary: string
    courseSubject: CourseSubject
    createdAt: string
    isDeleted: boolean
    stateInfo: boolean
    phone: string
    description: string
    quantity: number
    totalPrice: number
    statusOrder: string
    study: string
    currentStudyTime: any
    endStudyTime: any
    completeStudyTime: any
    lastModifiedDate: any
    student: Student
    tutor: any
}

export interface CourseSubject {
    id: string
    course: Course
    subject: Subject
    isDeleted: boolean
    createdAt: string
}

export interface Course {
    id: string
    name: string
    code: string
    description: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
}

export interface Subject {
    id: string
    name: string
    code: string
    description: string
    price: number
    isDeleted: boolean
    createdAt: string
    updatedAt: any
}

export interface Student {
    id: string
    email: string
    emailConfirmed: boolean
    phoneNumber: string
    firstName: string
    lastName: string
    isDeleted: boolean
    creationDate: string
    lastUpdateDate: string
    avatar: string
    userRole: UserRole
}

export interface UserRole {
    id: string
    roleName: string
}
