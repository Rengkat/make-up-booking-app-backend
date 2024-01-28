const Products = require("../models/products");
const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {}
};
const getSingleProduct = async (req, res) => {
  const { id: productID } = req.params;
  try {
    const product = await Products.findOne({ productID });
    res.status(200).json({ success: true, product });
  } catch (error) {}
};
module.exports = { getProducts, getSingleProduct };
