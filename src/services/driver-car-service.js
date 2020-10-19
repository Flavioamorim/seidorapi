const driverCarRepository = require('../repositories/driver-car-repository')

exports.useDriver = async (data) => {

  const carIsAvailable = await this.carIsAvailable(data)
  if (!carIsAvailable) {
    throw new Error("car not available")
  }
  const driverIsAvailable = await this.driverIsAvailable(data)
  if (!driverIsAvailable) {
    throw new Error("Driver not available")
  }

  return await driverCarRepository.create(data)
}

exports.carIsAvailable = async (data) => {
  const carAvailable = await driverCarRepository.verifyCarIsAvailable(data.car, Date.now());
  if (carAvailable.length > 0) {
    return false
  }

  return true
}

exports.driverIsAvailable = async (data) => {
  const driverAvailable = await driverCarRepository.verifyDriverIsAvailable(data.driver, Date.now());
  if (driverAvailable.length > 0) {
    return false
  }

  return true
}
