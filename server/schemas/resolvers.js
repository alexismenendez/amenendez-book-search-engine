const { User } = require("../models");

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        }
    },

    Mutations: {
        addUser:
        login:
        saveBook:
        removeBook:
    }
}

module.exports = resolvers;