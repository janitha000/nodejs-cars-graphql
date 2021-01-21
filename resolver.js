const { getAllUsers, findUserById } = require('./User')
const { getAllCars, getCarsByBrand, getCarsByYear } = require('./Cars')
const { register, login } = require('./auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        async getAllUsers(_) {
            const users = getAllUsers();
            return users;
        },

        async current(_, args, { user }) {
            if (user) {
                if (user.role !== "admin")
                    throw new AuthenticationError("User is not authorized")
                return findUserById(user.id)
            }

            throw new AuthenticationError("Sorry, you're not an authenticated user!")
        },

        async getAllCars() {
            return getAllCars()
        },

        async getCarsByYear(_, { year }) {
            return getCarsByYear(year)
        },

        async getCarsByBrand(_, { brand }) {
            return getCarsByBrand(brand)
        }
    },

    Mutation: {
        async register(_, { user: { userName, name, password } }) {
            const token = register(userName, name, password)
            return token;
        },

        async login(_, { username, password }) {
            const token = login(username, password)
            return token;

        }
    }

}

module.exports = resolvers;