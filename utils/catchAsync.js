const { findByIdAndRemove } = require('../models/tourModel');

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
