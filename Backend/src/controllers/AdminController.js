const getDC = require('./GetsDataController');
const uptDC = require('./UpdateDataController');

async function getUsers(request, response, rol) {
    const users = await getDC.getUsers(rol);
    const array = [];
    users.forEach(element => {
        const userInfo = {
            idUser: element.idUser,
            nickname: element.nickname,
            name: element.name,
            lastname: element.lastname,
            password: element.password,
        }
        array.push(userInfo);
    });
    response.json(array);
}

async function getUser(request, response) {
    const user = await getDC.getUser(request.params.idUser);
    const userInfo = {
        idUser: user.idUser,
        nickname: user.nickname,
        name: user.name,
        lastname: user.lastname,
        password: user.password,
    }
    response.json(userInfo);
}

async function editUser(request, response) {
    response.json(await uptDC.updateUser(request, response));
}

module.exports = {
    getUsers,
    getUser,
    editUser
};