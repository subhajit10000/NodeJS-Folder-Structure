
const bcrypt = require("bcryptjs");

// hashing abc => ksf87r4r2rirgweifgeweig
const hashedPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}


module.exports =  { hashedPassword }
