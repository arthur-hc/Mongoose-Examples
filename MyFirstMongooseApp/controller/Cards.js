const CardsModel = require('../models/Cards');
const { Types } = require('mongoose');

const create = async (req, res) => {
  try {
    const { name, description, power } = req.body;
    const card = { name, description, power };
    const response = await CardsModel.create(card);
    return res.status(201).json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
  
};

const getAll = async (_req, res) => {
  try {
    const response = await CardsModel.find();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CardsModel.findById(id);
    if(!response) {
      return res.status(404).json({ errors: 'Card ID Not Found' });
    }
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CardsModel.findByIdAndRemove(id);
    if(!response) {
      return res.status(404).json({ errors: 'Card ID Not Found' });
    }
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, description, power } = req.body;
  const updatedCard = { name, description, power };
  try {
    const { id } = req.params;
    const response = await CardsModel.findOneAndUpdate({ _id: id }, updatedCard, { new: true, runValidators: true });
    if(!response) {
      return res.status(404).json({ errors: 'Card ID Not Found' });
    }
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
