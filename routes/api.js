var express = require('express');
var apiRouter = express.Router();
var apiController = require('../controllers/api.js');

// apiRouter.get('/', (req,res) => {
//   res.json({message: "All songs!"})
// })

apiRouter.get('/', apiController.index);

apiRouter.get('/:id', apiController.show);

apiRouter.post('/', apiController.create);

apiRouter.patch('/:id', apiController.update);

apiRouter.delete('/:id', apiController.destroy);

module.exports = apiRouter;
