const { User } = require("../models");
const { convertToPayload } = require("../helpers/jwt");

const authenticationUsers = async (req, res, next) => {
  try {
    // const { access_token } = req.headers;
    // if (!access_token) {
    //   throw { name: "INVALID TOKEN" };
    // }
    // const payload = convertToPayload(access_token);
    // console.log(payload);
    // const { id } = payload;
    // const user = await User.findByPk(id);

    // if (!user) {
    //   throw { name: "INVALID TOKEN" };
    // }

    // req.userId = +user.id;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticationUsers;
