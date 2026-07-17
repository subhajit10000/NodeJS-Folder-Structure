const users = require("users.js");
const {
    hashedPassword
} = require("hash.util.js");


const registerUser = async (name, email, password) => {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        throw new Error("User already exists.")
    }

    // hashing the password.

    const pass = await hashedPassword(password);
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: pass
    }

    users.push(newUser);

    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    }
};

module.exports = {registerUser};
