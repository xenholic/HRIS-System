const { compare, hash } = require("../helpers/bcrypt");
const { convertToToken } = require("../helpers/jwt");
const User = require("../models/user");

class UsersController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber,role = "admin" } = req.body;

      //check if email, password, or phonenumber is empty
      if (!username) {
        throw new Error("Username cannot be empty");
      } else if (!email) {
        throw new Error("Email cannot be empty");
      } else if (!password) {
        throw new Error("Password cannot be empty");
      } else if (!phoneNumber) {
        throw new Error("Phone Number cannot be empty");
      }

      //hash password
      const passwordHash = hash(password);

      await User.create({
        username,
        email,
        password : passwordHash,
        role,
        phoneNumber,
        status: false,
      });
      res.status(201).json({
        email,
        message: "register success",
      });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw new Error("Email cannot be empty");
      } else if (!password) {
        throw new Error("Password cannot be empty");
      }

      const userLogin = await User.findOne({ email });
      if (!userLogin) {
        throw new Error("User not found");
      }

      const validPassword = compare(password, userLogin.password);

      if (!validPassword) {
        throw { name: "Invalid password" };
      }

      const payload = { 
        id: userLogin._id,
        username: userLogin.username,
        email: userLogin.email,
        role: userLogin.role,
        status: userLogin.status,
       };
      const token = convertToToken(payload);

      res.status(200).json({
        id: userLogin._id,
        username: userLogin.username,
        email,
        role: userLogin.role,
        status: userLogin.status,
        access_token: token,
      });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  // add showprojects with filter
  // static async showProjects(req, res, next) {
  //   try {
  //     const { page, name, location, CategoryId, minPrice, maxPrice, type } =
  //       req.query;
  //     const limit = 8;

  //     let obj = {
  //       limit: limit,
  //       offset: page ? (page - 1) * limit : 0,
  //       include: [
  //         Category,
  //         Bid,
  //         {
  //           model: Company,
  //           where: {
  //             location: { [Op.iLike]: location ? `%${location}%` : `%%` },
  //           },
  //         },
  //       ],
  //       order: [["date", "DESC"]],
  //       where: {
  //         status: {
  //           [Op.or]: ["Active", "Inactive"],
  //         },
  //         name: { [Op.iLike]: name ? `%${name}%` : `%%` },
  //       },
  //     };

  //     let obj2 = {
  //       limit: 1,
  //       order: [["price", "DESC"]],
  //       where: {
  //         status: "Active",
  //       },
  //     };

  //     if (CategoryId) {
  //       (obj.where = {
  //         ...obj.where,
  //         CategoryId,
  //       }),
  //         (obj2.where = {
  //           ...obj2.where,
  //           CategoryId,
  //         });
  //     }
  //     if (type) {
  //       (obj.where = {
  //         ...obj.where,
  //         type,
  //       }),
  //         (obj2.where = {
  //           ...obj2.where,
  //           type,
  //         });
  //     }

  //     if (minPrice) {
  //       (obj.where = {
  //         ...obj.where,
  //         price: { [Op.between]: [minPrice, 999999999999999] },
  //       }),
  //         (obj2.where = {
  //           ...obj2.where,
  //           price: { [Op.between]: [minPrice, 999999999999999] },
  //         });
  //     }

  //     if (maxPrice) {
  //       (obj.where = {
  //         ...obj.where,
  //         price: { [Op.between]: [0, maxPrice] },
  //       }),
  //         (obj2.where = {
  //           ...obj2.where,
  //           price: { [Op.between]: [0, maxPrice] },
  //         });
  //     }
  //     if (minPrice && maxPrice) {
  //       (obj.where = {
  //         ...obj.where,
  //         price: { [Op.between]: [minPrice, maxPrice] },
  //       }),
  //         (obj2.where = {
  //           ...obj2.where,
  //           price: { [Op.between]: [minPrice, maxPrice] },
  //         });
  //     }

  //     const projects = await Project.findAndCountAll(obj);
  //     let totalProjects = projects.count;
  //     let projectList = projects.rows;
  //     let totalPage = Math.ceil(totalProjects / limit);
  //     let currentPage = page ? +page : 1;

  //     const recommended = await Project.findAll(obj2);

  //     res.status(200).json({
  //       recommended,
  //       totalPage,
  //       currentPage,
  //       projectList,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // static async rating(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const response = await User.findOne({
  //       where: {
  //         id: +id,
  //       },
  //       include: [
  //         {
  //           model: Rating, //including ratings array
  //           attributes: [], //but making it empty
  //         },
  //       ],
  //       attributes: {
  //         include: [
  //           // this adds AVG attribute to others instead of rewriting
  //           [Sequelize.fn("AVG", Sequelize.col("star")), "avgStar"],
  //         ],
  //       },
  //       group: ["User.id"],
  //     });

  //     res.status(200).json(response);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // // new proposal
  // static async newProposal(req, res, next) {
  //   try {
  //     const { ProjectId } = req.params;
  //     const UserId = +req.userId;
  //     const { rate, coverLetter, proposal } = req.body;

  //     const newProposal = await Bid.create({
  //       ProjectId,
  //       UserId,
  //       rate,
  //       coverLetter,
  //       proposal,
  //       fieldIsChoosen: "false",
  //     });

  //     res.status(201).json(newProposal);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // // show my job
  // static async showMyJob(req, res, next) {
  //   try {
  //     const UserId = +req.userId;

  //     const project = await Project.findAll({
  //       include: [
  //         Company,
  //         Category,
  //         { model: Bid, where: { UserId, fieldIsChoosen: true } },
  //       ],
  //     });

  //     const review = await Project.findAll({
  //       include: [
  //         Company,
  //         Category,
  //         { model: Bid, where: { UserId, fieldIsChoosen: false } },
  //       ],
  //     });

  //     res.status(200).json({
  //       onGoing: review,
  //       choosen: project,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // // show project by id
  // static async showProjectById(req, res, next) {
  //   try {
  //     const id = +req.params.ProjectId;
  //     const response = await Project.findByPk(id, {
  //       include: [Company, Category],
  //     });
  //     if (!response) {
  //       throw { name: "Project not found" };
  //     }
  //     res.status(200).json(response.dataValues);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // // show users
  // static async showUsers(req, res, next) {
  //   try {
  //     const response = await User.findAll({
  //       attributes: ["id", "username", "profilePic"],
  //     });
  //     res.status(200).json(response);
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  // static async socialLogin(req, res, next) {
  //   try {

  //     const { email, displayName, photoURL } = req.body;

  //     const password = "Social login";
  //     const find = await User.findOne({ where: { email } });
  
  //     if (!find) {
  //       const username = displayName;
  //       const newUser = await User.create({
  //         username: username ?? email,
  //         email,
  //         password,
  //         location: "Indonesia",
  //         type: "Personal",
  //         profilePic: photoURL,
  //       });

  //       const user = await User.findOne({ where: { email } });

  //       const validPassword = compare(password, user.password);

  //       if (!validPassword) {
  //         throw { name: "Invalid password" };
  //       }
  //       const payload = { id: user.id };
  //       const token = sign(payload, SECRET_KEY);

  //       res.status(200).json({
  //         id: +user.id,
  //         username: user.username,
  //         email,
  //         profilePic: user.profilePic,
  //         access_token: token,
  //       });
  //     } else {
  //       const validPassword = compare(password, find.password);

  //       if (!validPassword) {
  //         throw { name: "Invalid password" };
  //       }

  //       const user = await User.findOne({ where: { email } });

  //       const payload = { id: user.id };
  //       const token = sign(payload, SECRET_KEY);

  //       res.status(200).json({
  //         id: +user.id,
  //         username: user.username,
  //         email,
  //         profilePic: user.profilePic,
  //         access_token: token,
  //       });
  //     }
  //   } catch (err) {
  //     next(err)
  //   }
  // }
}

module.exports = UsersController;
