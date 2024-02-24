const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!: Auth)
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs