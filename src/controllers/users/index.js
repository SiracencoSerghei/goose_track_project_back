const { register } = require("./register");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");
const { logIn } = require("./logIn");
const { logOut } = require("./logOut");
const { getCurrent } = require("./getCurrent");
const { updateUser } = require("./updateUser");
module.exports = {
  register,
  verifyEmail,
  resendVerifyEmail,
  logIn,
  logOut,
  getCurrent,
  updateUser,
};
