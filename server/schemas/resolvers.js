const { User } = require("../models");

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        }
    },

    Mutations: {
        addUser:
        Login:
        saveBook:
        removeBook:
    }
}

module.exports = resolvers;