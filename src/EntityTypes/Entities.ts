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

export interface AuthorSimpleType {
    Id: string
    userName: string
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
    views: number
    imageUrl?: string
    author: AuthorSimpleType
    category: CategoryType
    status: BlogStatusType
    isFeatured: boolean
    createdDate: Date
    submittedDate?: Date
    publishedDate?: Date
    approvalDate?: Date
    withdrawalDate?: Date
}