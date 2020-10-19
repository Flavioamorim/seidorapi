const driverRepository = require('../repositories/driver-repository')

exports.get = async (req, res, next) => {
  try {
    var data = await driverRepository.get()
    res.status(200).send({
      message: 'success',
      data: data
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.post = async (req, res, next) => {
  try {
    const driver = await driverRepository.create({
      'name': req.body.name,
    })
    res.status(201).send({
      message: 'success',
      data: req.body.name
    })
  } catch (error) {
    res.status(400).send({message: 'Error ao criar Driver', data: error.toString()})
  }
};

exports.put = async (req, res, next) => {
  try {
    const driver = await driverRepository.update(req.params.id, req.body)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};


exports.delete = async (req, res, next) => {
  try {
    const product = await driverRepository.destroy(req.params.deleteId)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({ message: 'Error', data: error.toString() })
  }
};

exports.getById = async (req, res, next) => {
  try {
    const driver = await driverRepository.getById(req.params.id)
    res.status(200).send({
      message: 'ByID',
      data: driver
    })
  } catch (error) {
    res.status(400).send({ message: 'Error', data: e.toString() })
  }
};
