const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, req, next)).catch(next);
};

module.exports = asyncHandler;
