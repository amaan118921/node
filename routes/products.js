const express = require('express');

const router = express.Router()
const product = require('../models/Product')
const func = require('../database/mongo')

router.get('/:product', async (req, res) => {
     try {
          var query = {type: req.params.product}
          const products = await product.find(query)
          var json = {'dataArray': products}
          res.send(json)
     } catch(err) {
          res.send('error' + err)
     }
})


router.post('/', async (req, res)=> {
     const prod = new product({
          id: req.body.id,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
          type: req.body.type
     });
     try{
          const result = await prod.save()
          res.json(result);
     }catch(err) {
          res.send('error' + err)
     }
})

module.exports = router
