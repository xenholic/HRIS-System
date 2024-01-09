const { compare } = require("../helpers/bcrypt");
const { sign } = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const {
  Employee,
  Category,
  Company,
  User
} = require("../models");
const { Op } = require("sequelize");
const sendEmail = require("../nodemailer");

class EmployeeController {

    // add showprojects with filter
    static async showProjects(req, res, next) {
      try {
        const { page, name, location, CategoryId, minPrice, maxPrice, type } =
          req.query;
        const limit = 8;
  
        let obj = {
          limit: limit,
          offset: page ? (page - 1) * limit : 0,
          include: [
            Category,
            Bid,
            {
              model: Company,
              where: {
                location: { [Op.iLike]: location ? `%${location}%` : `%%` },
              },
            },
          ],
          order: [["date", "DESC"]],
          where: {
            status: {
              [Op.or]: ["Active", "Inactive"],
            },
            name: { [Op.iLike]: name ? `%${name}%` : `%%` },
          },
        };
  
        let obj2 = {
          limit: 1,
          order: [["", "DESC"]],
          where: {
            status: "Active",
          },
        };
  
        if (CategoryId) {
          (obj.where = {
            ...obj.where,
            CategoryId,
          }),
            (obj2.where = {
              ...obj2.where,
              CategoryId,
            });
        }
        if (type) {
          (obj.where = {
            ...obj.where,
            type,
          }),
            (obj2.where = {
              ...obj2.where,
              type,
            });
        }
  
        if (minPrice) {
          (obj.where = {
            ...obj.where,
            price: { [Op.between]: [minPrice, 999999999999999] },
          }),
            (obj2.where = {
              ...obj2.where,
              price: { [Op.between]: [minPrice, 999999999999999] },
            });
        }
  
        if (maxPrice) {
          (obj.where = {
            ...obj.where,
            price: { [Op.between]: [0, maxPrice] },
          }),
            (obj2.where = {
              ...obj2.where,
              price: { [Op.between]: [0, maxPrice] },
            });
        }
        if (minPrice && maxPrice) {
          (obj.where = {
            ...obj.where,
            price: { [Op.between]: [minPrice, maxPrice] },
          }),
            (obj2.where = {
              ...obj2.where,
              price: { [Op.between]: [minPrice, maxPrice] },
            });
        }
  
        const projects = await Project.findAndCountAll(obj);
        let totalProjects = projects.count;
        let projectList = projects.rows;
        let totalPage = Math.ceil(totalProjects / limit);
        let currentPage = page ? +page : 1;
  
        const recommended = await Project.findAll(obj2);
  
        res.status(200).json({
          recommended,
          totalPage,
          currentPage,
          projectList,
        });
      } catch (err) {
        next(err);
      }
    }
  
    static async rating(req, res, next) {
      try {
        const { id } = req.params;
        const response = await User.findOne({
          where: {
            id: +id,
          },
          include: [
            {
              model: Rating, //including ratings array
              attributes: [], //but making it empty
            },
          ],
          attributes: {
            include: [
              // this adds AVG attribute to others instead of rewriting
              [Sequelize.fn("AVG", Sequelize.col("star")), "avgStar"],
            ],
          },
          group: ["User.id"],
        });
  
        res.status(200).json(response);
      } catch (err) {
        next(err);
      }
    }
  
    // new proposal
    static async newProposal(req, res, next) {
      try {
        const { ProjectId } = req.params;
        const UserId = +req.userId;
        const { rate, coverLetter, proposal } = req.body;
  
        const newProposal = await Bid.create({
          ProjectId,
          UserId,
          rate,
          coverLetter,
          proposal,
          fieldIsChoosen: "false",
        });
  
        res.status(201).json(newProposal);
      } catch (err) {
        next(err);
      }
    }
  
    // show my job
    static async showMyJob(req, res, next) {
      try {
        const UserId = +req.userId;
  
        const project = await Project.findAll({
          include: [
            Company,
            Category,
            { model: Bid, where: { UserId, fieldIsChoosen: true } },
          ],
        });
  
        const review = await Project.findAll({
          include: [
            Company,
            Category,
            { model: Bid, where: { UserId, fieldIsChoosen: false } },
          ],
        });
  
        res.status(200).json({
          onGoing: review,
          choosen: project,
        });
      } catch (err) {
        next(err);
      }
    }
  
    // show project by id
    static async showProjectById(req, res, next) {
      try {
        const id = +req.params.ProjectId;
        const response = await Project.findByPk(id, {
          include: [Company, Category],
        });
        if (!response) {
          throw { name: "Project not found" };
        }
        res.status(200).json(response.dataValues);
      } catch (err) {
        next(err);
      }
    }
  
    // show users
    static async showUsers(req, res, next) {
      try {
        const response = await User.findAll({
          attributes: ["id", "username", "profilePic"],
        });
        res.status(200).json(response);
      } catch (err) {
        next(err);
      }
    }
  
    static async socialLogin(req, res, next) {
      try {
  
        const { email, displayName, photoURL } = req.body;
  
        const password = "Social login";
        const find = await User.findOne({ where: { email } });
    
        if (!find) {
          const username = displayName;
          const newUser = await User.create({
            username: username ?? email,
            email,
            password,
            location: "Indonesia",
            type: "Personal",
            profilePic: photoURL,
          });
  
          const user = await User.findOne({ where: { email } });
  
          const validPassword = compare(password, user.password);
  
          if (!validPassword) {
            throw { name: "Invalid password" };
          }
          const payload = { id: user.id };
          const token = sign(payload, SECRET_KEY);
  
          res.status(200).json({
            id: +user.id,
            username: user.username,
            email,
            profilePic: user.profilePic,
            access_token: token,
          });
        } else {
          const validPassword = compare(password, find.password);
  
          if (!validPassword) {
            throw { name: "Invalid password" };
          }
  
          const user = await User.findOne({ where: { email } });
  
          const payload = { id: user.id };
          const token = sign(payload, SECRET_KEY);
  
          res.status(200).json({
            id: +user.id,
            username: user.username,
            email,
            profilePic: user.profilePic,
            access_token: token,
          });
        }
      } catch (err) {
        next(err)
      }
    }
  
  static async register(req, res, next) {
    try {
      const { name, email, password, location, profilePic } = req.body;
      if (!name) {
        throw { name: "Name cannot be empty" };
      } else if (!email) {
        throw { name: "Email cannot be empty" };
      } else if (!password) {
        throw { name: "Password cannot be empty" };
      } else if (!location) {
        throw { name: "Location cannot be empty" };
      }

      const company = await Company.create({
        name,
        email,
        password,
        location,
        profilePic,
      });

      res.status(201).json({
        email,
        message: "register success",
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "Email cannot be empty" };
      } else if (!password) {
        throw { name: "Password cannot be empty" };
      }

      const companyLogin = await Company.findOne({ where: { email } });
      if (!companyLogin) {
        throw { name: "Company not found" };
      }

      const validPassword = compare(password, companyLogin.password);
      if (!validPassword) {
        throw { name: "Invalid password" };
      }

      const payload = { id: companyLogin.id };
      const token = sign(payload, SECRET_KEY);

      res.status(200).json({
        id: companyLogin.id,
        name: companyLogin.name,
        email,
        profilePic: companyLogin.profilePic,
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  // add show my project
  static async showMyProject(req, res, next) {
    try {
      const CompanyId = +req.companyId;

      const project = await Project.findAll({
        include: [Company, Bid, Category],
        where: { CompanyId },
      });

      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }

  static async showProjectDetail(req, res, next) {
    try {
      const { id } = req.params;
      const project = await Project.findAll({
        include: [
          Company,
          Category,
          {
            model: Bid,
            include: [Project, {
              model: User,

              include: [
                {
                  model: Rating,
                },
              ],
            },

            ],
          },
        ],
        where: { id },
      });

      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }

  static async newProject(req, res, next) {
    try {
      const CompanyId = +req.companyId;
      const { name, description, price, CategoryId, type } = req.body;

      const newProject = await Project.create({
        name,
        date: new Date(),
        description,
        price,
        status: "Active",
        choosenBid: null,
        type,
        CategoryId: +CategoryId,
        CompanyId,
      });
      res.status(201).json(newProject);
    } catch (err) {
      next(err);
    }
  }

  // static async chooseProposal (req, res, next) {
  //   try {
  //     const{}
  //   } catch (err) {

  //   }
  // }

  // payment feature
  static async midtransController(req, res, next) {
    try {
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.SERVER_KEY,
      });
      const { bidId } = req.params;
      const response = await Bid.findByPk(bidId, {
        include: { all: true, nested: true },
      });


      let parameter = {
        transaction_details: {
          order_id: `BidId-${response.id}-${new Date().toISOString().slice(0, 20)}`,
          gross_amount: response.rate,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          name: response.Project.Company.name,
          email: response.Project.Company.email,
        },
      };

      snap.createTransaction(parameter).then((transaction) => {
        let transactionToken = transaction.token;

        res.status(200).json(transactionToken);

      });
    } catch (err) {
      next(err);
    }
  }

  static async paymentNotification(req, res, next) {
    try {
      const { email } = req.body
      sendEmail(email)
    } catch (err) {
      next(err)
    }
  }

  // add rating
  static async addRating(req, res, next) {
    try {
      const { UserId } = req.params;
      const { star } = req.body;

      const rating = await Rating.create({
        UserId,
        star,
      });

      res.status(201).json(rating);
    } catch (err) {
      next(err);
    }
  }

  // show Companies
  static async showCompanies(req, res, next) {
    try {
      const response = await Company.findAll({
        attributes: ["id", "name", "profilePic"],
      });
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  // Choose Bid
  static async chooseBid(req, res, next) {
    try {
      const { id, ProjectId } = req.params;
      await Project.update(
        {
          choosenBid: +id,
          status: "Ongoing",
        },
        {
          where: {
            id: ProjectId,
          },
        }
      );

      await Bid.update(
        {
          fieldIsChoosen: true,
        },
        {
          where: {
            UserId: +id,
            ProjectId,
          },
        }
      );
      const findFreelance = await User.findByPk(+id);

      res.status(200).json(findFreelance);
    } catch (err) {
      next(err);
    }
  }

  // update Status Project
  static async updateStatusProject(req, res, next) {
    try {
      const { ProjectId } = req.params;

      await Project.update(
        {
          status: 'Paid',
        },
        {
          where: {
            id: ProjectId,
          },
        }
      );

      res.status(200).json({ message: "Update Success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EmployeeController;
