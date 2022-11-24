const express=require ("express");
const { addproduct } = require("../controllers/productController");


const router = express.Router();
/**
 * @Params POST /product/addprod
 * @description add new product
 * @acces public 
 */
router.post('/addprod',addproduct)
module.exports=router;