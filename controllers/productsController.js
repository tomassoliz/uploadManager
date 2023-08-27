const { response } = require("express")

module.exports = {
    list: (req, res) => {
        return res.send('Todos los productos')
    },
    addProductOneImage : (req, res) => {
        return res.render('productAddOneImage')
    },
    storeProductOneImage : (req, res) => {
        return res.send(req.body)
    },
    detailProductOneImage : (req, res)=>  {
        return res.render('detailProductOneImge',{
            product
        })
    },
    editProductOneImage : (req, res)=> {
        return res.render('editProductOneImage',{
            product
        })
    },
    updateProdutOneImage: (req,res) => {
       return res.send(req.body) 
    },
    deleteProductOneImage:(req,res) => {
        return res.send('producto eliminado!!')
    }
}
