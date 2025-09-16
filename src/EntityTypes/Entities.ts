export interface CategoryType {
    Id: string
    name: string
    description: string
}

export interface AuthorType {
    Id: string
    userName: string
    name: string
    email: string
    isActive: boolean
    imageUrl?: string
    joinedDate: Date
    isAdmin: boolean
}

export interface UserType {
    Id: string
    userName: string
    email: string
    isActive: boolean
    imageUrl?: string
    joinedDate: Date
}

export interface BlogStatusType {
    Id: string,
    name: string
    description: string
}

export interface BlogType {
    Id: string
    title: string
    summary: string
    content: string
    likes: number
    imageUrl?: string
    authorId: string
    categoryId: string
    statusId: string
    isFeatured: boolean
    createdDate: Date
    submittedDate?: Date
    publishedDate?: Date
    approvalDate?: Date
    withdrawalDate?: Date
}