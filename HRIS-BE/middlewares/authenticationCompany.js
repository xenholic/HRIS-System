const { Company } = require("../models");
const { convertToPayload } = require("../helpers/jwt");

const authenticationCompanies = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "INVALID TOKEN" };
    }

    const payload = convertToPayload(access_token);
    const { id } = payload;
    const company = await Company.findByPk(id);

    if (!company) {
      throw { name: "INVALID TOKEN" };
    }

    req.companyId = +company.id;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticationCompanies;
