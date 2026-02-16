const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');


const login = async (req, res) => {

}

const logout = async (req, res) => {

}

const currentUser = async (req, res) => {

}


const register = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;
    const avatar = req.file;
    // filename

    const hasPassword = await bcrypt.hash(password, 12)
    const newUser = {
      id: uuidv4(),
      fullname,
      email,
      password: hasPassword,
      avatar: avatar ? avatar.filename : null
    }




  } catch (error) {

  }
}

const resetPassword = async (req, res) => {

}
const forGotPassword = async (req, res) => {

}
const verifyUser = async (req, res) => {

}

module.exports = {
  login,
  logout,
  resetPassword,
  register,
  currentUser,
  forGotPassword,
  verifyUser
}