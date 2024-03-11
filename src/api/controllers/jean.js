const Jean = require('../models/jean');

const postJean = async (req, res, next) => {
  try {
    const newJean = new Jean(req.body);
    const jeanSaved = await newJean.save();
    return res.status(201).json(jeanSaved);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

const getJean = async (req, res, next) => {
  try {
    const allJean = await Jean.find();
    return res.status(200).json(allJean);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

const updateJean = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedJean = await Jean.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updatedJean);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

const deleteJean = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Jean.findByIdAndDelete(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
}

module.exports = { getJean, postJean, updateJean, deleteJean };