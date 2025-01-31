const { User } = require("@models");
const service = require("@service");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const { userName, avatarURL, phone, skype, birthDay, createdAt, updatedAt } =
    user;

  service.CheckByError(!user, 401, "Email or password is wrong");

  // service.CheckByError(!user.verify, 401, "Email not verified");

  const passwordCompare = await bcrypt.compare(password, user.password);

  service.CheckByError(!passwordCompare, 401, "Email or password is wrong");

  const token = service.getToken(user);

  await User.findByIdAndUpdate(user._id, { token });

  const userData = {
    email,
    userName,
    avatarURL,
    phone,
    skype,
    birthDay,
    createdAt,
    updatedAt,
  };

  res.status(200).json({
    status: 200,
    message: "success",
    user: userData,
    token: token,
  });
};

module.exports = { logIn: asyncHandler(logIn) };
