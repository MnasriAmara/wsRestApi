const productModel = require("../models/productmodel");
const addproduct = async (req, res) => {
  try {
    const produit = new productModel({ ...req.body });
    
    if (condition) {
        
    }
    //    await produit.save();
    //   console.log(produit);
    res.send(produit);
    // console.log(req.body)
  } catch (error) {
    console.log(error);
  }
};

const getAllproduct = async () => {
  try {
    const products = await productModel.find({});
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};
const getProductById = async (id) => {
  try {
    const prod = await productModel.findById(id);
    console.log(prod);
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, title) => {
  try {
    const prod = await productModel.findByIdAndUpdate(id, { title: title });
    console.log(prod);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addproduct, getAllproduct, getProductById, updateProduct };
