import type { AuthorType, BlogStatusType, BlogType, CategoryType, UserType } from "../EntityTypes/Entities";

export const Categories: CategoryType[] = [
    { Id: "1", name: "Nature", description: "This is the nature category." },
    { Id: "2", name: "Adventure", description: "This is the nature adventure." },
    { Id: "3", name: "Beauty", description: "This is the nature beauty." },
    { Id: "4", name: "Fashion", description: "This is the nature fashion." },
    { Id: "5", name: "Technology", description: "This is the nature technology." }
]

export const MockAuthors: AuthorType[] = [
    {
        Id: "1",
        userName: "author one",
        name: "author one",
        email: "authorone@email.com",
        isActive: true,
        joinedDate: new Date(2025, 12, 5),
        isAdmin: false
    },
    {
        Id: "2",
        userName: "author two",
        name: "author two",
        email: "authortwo@email.com",
        isActive: true,
        joinedDate: new Date(2024, 12, 5),
        isAdmin: false
    },
    {
        Id: "3",
        userName: "author three",
        name: "author three",
        email: "authorthree@email.com",
        isActive: true,
        joinedDate: new Date(2023, 12, 5),
        isAdmin: true
    },
    {
        Id: "4",
        userName: "author four",
        name: "author four",
        email: "authorfour@email.com",
        isActive: true,
        joinedDate: new Date(2024, 2, 12),
        isAdmin: false
    }
]

export const MockUsers: UserType[] = [
    {
        Id: "1",
        userName: "user one",
        email: "userone@email.com",
        isActive: true,
        joinedDate: new Date(2021, 8, 25)
    },
    {
        Id: "2",
        userName: "user two",
        email: "usertwo@email.com",
        isActive: true,
        joinedDate: new Date(2020, 11, 25)
    }
]

export const BlogStatus: BlogStatusType[] = [
    {
        Id: "1",
        name: "awaiting submission",
        description: "This is the awaiting submission status"
    },
    {
        Id: "2",
        name: "submitted",
        description: "This is the submitted status"
    },
    {
        Id: "3",
        name: "approved",
        description: "This is the approved status"
    },
    {
        Id: "4",
        name: "published",
        description: "This is the published status"
    },
]

export const MockBlogs: BlogType[] = [
    {
        Id: "1",
        title: "This is Blog number one",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 5,
        isFeatured: false,
        authorId: "1",
        categoryId: "1",
        statusId: "2",
        createdDate: new Date(2024, 12, 24)
    },
    {
        Id: "2",
        title: "This is Blog number two",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 5,
        isFeatured: true,
        authorId: "2",
        categoryId: "2",
        statusId: "4",
        createdDate: new Date(2024, 12, 24)
    },
    {
        Id: "3",
        title: "This is Blog number three",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 5,
        authorId: "3",
        categoryId: "3",
        statusId: "4",
        createdDate: new Date(2024, 12, 24),
        isFeatured: true
    },
    {
        Id: "5",
        title: "This is Blog number five",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 5,
        authorId: "4",
        categoryId: "4",
        statusId: "4",
        createdDate: new Date(2022, 8, 24),
        isFeatured: false
    },
    {
        Id: "6",
        title: "This is Blog number six",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 10,
        isFeatured: false,
        authorId: "4",
        categoryId: "5",
        statusId: "4",
        createdDate: new Date(2020, 7, 20)
    },
    {
        Id: "7",
        title: "This is Blog number seven",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 25,
        authorId: "4",
        categoryId: "3",
        statusId: "4",
        createdDate: new Date(2025, 10, 20),
        isFeatured: true
    },
    {
        Id: "8",
        title: "This is Blog number eight",
        summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                `,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
        likes: 12,
        authorId: "1",
        categoryId: "1",
        statusId: "4",
        createdDate: new Date(2024, 12, 24),
        isFeatured: false
    }
]