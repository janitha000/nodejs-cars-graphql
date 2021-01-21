const { getAllUsers, addUser, findByUserName, findUserById } = require('./User')
const { getAllCars, getCarsByBrand, getCarsByYear } = require('./Cars')
const jsonwebtoken = require("jsonwebtoken");
const { ProvidedRequiredArgumentsOnDirectivesRule } = require('graphql/validation/rules/ProvidedRequiredArgumentsRule');
const { addErrorLoggingToSchema } = require('graphql-tools');

const JWT_TOKEN_SECRET = 'janitha000'

const resolvers = {
    Query: {
        async getAllUsers(_) {
            const users = getAllUsers();
            return users;
        },

        async current(_, args, { user }) {
            if (user) {
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
            const user = addUser({ userName, name, password });
            return jsonwebtoken.sign({ id: user.id, userName: user.userName }, JWT_TOKEN_SECRET)
        },

        async login(_, { username, password }) {
            const user = findByUserName(username);
            if (!user) {
                throw new Error('User does not exist on the system')
            }

            const valid = (user.password === password)
            if (!valid) {
                throw new Error('Invalid password')
            }

            return jsonwebtoken.sign({ id: user.id, userName: user.userName }, JWT_TOKEN_SECRET)

        }
    }

}

module.exports = resolvers;