const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res)).catch((err) => {
    res.status(500).json({ success: false, message: err.message });
  });
};
module.exports = asyncHandler;
