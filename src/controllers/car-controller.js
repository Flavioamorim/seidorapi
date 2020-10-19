const Car = require('../models/car')
const carRepository = require('../repositories/car-repository')

exports.get = async (req, res, next) => {
  try {
    var data = await carRepository.get()
    res.status(200).send({
      message: 'lista getall',
      data: data
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.post = async (req, res, next) => {
  try {
    const car = await carRepository.create({
      'color': req.body.color,
      'board': req.body.board,
      'brand': req.body.brand
    })
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.put = async (req, res, next) => {
  try {
    const car = await carRepository.update(req.params.id, req.body)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};


exports.delete = async (req, res, next) => {
  try {
    const product = await carRepository.destroy(req.params.deleteId)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({ message: 'Error', data: error.toString() })
  }
};

exports.getById = async (req, res, next) => {
  try {
    const car = await carRepository.getById(req.params.id)
    res.status(200).send({
      message: 'ByID',
      data: car
    })
  } catch (error) {
    res.status(400).send({ message: 'Error', data: e.toString() })
  }
};
