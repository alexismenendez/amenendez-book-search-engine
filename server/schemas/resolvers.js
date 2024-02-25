const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth")

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                return  await User.findOne({ _id: context.user._id }).select('-__v -password');
            }
            
            throw AuthenticationError;
        }
    },

    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);

            return { token, user }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw AuthenticationError
            }

            const correctPW = await profile.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user)
            return { token, user }
        },

        saveBook: async (parent, { bookInfo }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: { bookInfo } } },
                    { new: true }
                );
            }

            throw AuthenticationError;
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
            }

            throw AuthenticationError;
        },
    },
}

module.exports = resolvers;