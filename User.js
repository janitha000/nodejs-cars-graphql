
let Users =
    [
        {
            id: 1,
            userName: "Janitha",
            name: "Tennakoon",
            password: "janitha@123",
            role: "admin"
        },
        {
            id: 2,
            userName: "Vindya",
            name: "Hettige",
            password: "vindya@123",
            role: "user"
        },
        {
            id: 3,
            userName: "Prageesha",
            name: "Hadunneththi",
            password: "prageesha@123"
        },
        {
            id: 4,
            userName: "Lahiru",
            name: "Abeysinghe",
            password: "lahiru@123"
        },
    ]

const findUserById = (id) => {
    let user = Users.filter(x => x.id === id)
    return user[0]
}

const addUser = (user) => {
    let id = Users.sort((x, y) => x.id < y.id)[0].id
    Users.push({ id: id++, ...user })

    return Users[Users.length - 1]
}

const findByUserName = (userName) => {
    let user = Users.filter(x => x.userName === userName)
    return user[0]
}

const getAllUsers = () => {
    return Users;
}

module.exports = {
    findUserById,
    addUser,
    findByUserName,
    getAllUsers
}