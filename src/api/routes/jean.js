const { getJean, postJean, updateJean, deleteJean } = require('../controllers/jean');

const jeanRoutes = require('express').Router();

jeanRoutes.get('/jeans', getJean);

jeanRoutes.get('/jeans/:id', getJean);

jeanRoutes.post('/jeans', postJean);

jeanRoutes.put('/jeans/:id', updateJean);

jeanRoutes.delete('/jeans/:id', deleteJean);

module.exports = jeanRoutes;
