const driverCarRepository = require('../repositories/driver-car-repository')
const driverCarService = require('../services/driver-car-service')

exports.get = async (req, res, next) => {
  try {
    var data = await driverCarRepository.get()
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
    const data = {
      'init_date': req.body.init_date,
      'end_date': req.body.end_date,
      'driver': req.body.driver_id,
      'car': req.body.car_id,
      'description': req.body.description,
    };
    const useCarService = await driverCarService.useDriver(data);
    res.status(201).send({
      message: 'success',
      data: useCarService
    })
  } catch (error) {
    res.status(400).send({message: 'Error ao criar Driver', data: error.toString()})
  }
};

exports.patch = async (req, res, next) => {
  try {
    req.body.end_date = Date.now()
    const driver = await driverCarRepository.update(req.params.id, req.body)
    res.status(201).send({
      message: 'Finish with success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};
