const { getAllUsers, findUserById } = require('./User')
const { getAllCars, getCarsByBrand, getCarsByYear } = require('./Cars')
const { register, login } = require('./auth')

const resolvers = {
    Query: {
        async getAllUsers(_) {
            const users = getAllUsers();
            return users;
        },

        async current(_, args, { user }) {
            if (user) {
                if (user.role !== "admin")
                    throw new Error("You are not authorized to view this information")
                return findUserById(user.id)
            }

            throw new Error("Sorry, you're not an authenticated user!")
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
        async register(_, { userName, name, password }) {
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