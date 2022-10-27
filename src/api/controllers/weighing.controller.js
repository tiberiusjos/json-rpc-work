const httpStatus = require('http-status');
const APIError = require('../errors/api-error');
const { omit } = require('lodash');
const db = require("../sql-models");
const weighings = db.weighings;
const Op = db.Sequelize.Op;

exports.load = async (req, res, next, id) => {};

/**
 * Get weighings
 * @public
 */
exports.get = async (req, res, next, id) => {}

exports.replace = async (req, res, next) => {};

exports.update = (req, res, next) => {};

/**
 * Get weighing list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const offset = parseInt(req.query.offset, 0) || 0;
    const limit = parseInt(req.query.limit, 10) || 10;
    const keyword = req.query.keyword;
    const where = keyword ? { license_plate: { [Op.like]: '%' + keyword + '%' } } : {} ;
    const count = await weighings.count({ where});
    
    weighings.findAll({
      offset,
      limit,
      where, 
    }).then(data => {
      res.send({
        count, 
        data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  } catch (error) {
    next(error);
  }
};

exports.remove = (req, res, next) => {};
