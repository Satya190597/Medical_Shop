const {check} = require("express-validator");

exports.productRouteValidation = () => {
    return [
        check("productName","Product name must be 3 characters Long.")
        .isLength({min:3}),
        check("productUses","Product uses is a required field.")
        .isLength({min:1}),
        check("productDescription","Product description must be less then 250 characters.")
        .isLength({max:250}),
        check("productCompanyName","Product company name is a required field.")
        .isLength({min:1}),
        check("productPrice")
        .isLength({min:1})
        .withMessage("Product price is a required field")
        .isDecimal()
        .withMessage("Product price must be in decimal."),
        check("productDiscount")
        .isLength({min:1})
        .withMessage("Product discount is a required field")
        .isDecimal()
        .withMessage("Product discount must be in decimal."),
        check("productLocationInStore")
        .isLength({min:1})
        .withMessage("Product location is a required field"),
        check("dateOfValidity")
        .isLength({min:1})
        .withMessage("Product date of validity is a required field")
        .isInt()
        .withMessage("Product date of validity must be in integer"),
        check("productCategoryId")
        .isLength({min:1})
        .withMessage("Product category id is a required field")
        .isInt()
        .withMessage("Product category id must be in integer")
      ]
}

exports.categoryRouteValidation = () => {
    return [
        check("categoryName","Product name must be 3 characters Long.")
        .isLength({min:3})
    ]
}

exports.stockRouteValidation = () => {
    return [
        check("productId")
        .isLength({min:1})
        .withMessage("Product Id is a required field.")
        .isInt()
        .withMessage("Product Id must be in integer."),
        check("productQuantity")
        .isLength({min:1})
        .withMessage("Product quantity must be in integer.")
        .isInt()
        .withMessage("Product quantity must be in integer.")
    ]
}