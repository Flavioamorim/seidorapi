const DriverCar = require('../models/DriverCar')

exports.create = async (data) => {
  var driverCar = new DriverCar(data)
  return await driverCar.save()
}

exports.get = async () => {
  const driverCar = await DriverCar
      .find({})
      .populate('driver', 'name')
      .populate('car', 'color board brand')

  return driverCar
}

exports.verifyCarIsAvailable = async (car, currentDate) => {
  const driverCar = await DriverCar
      .find({
        car: car,
        init_date: {
          $lte: currentDate
        },
        end_date: {
          $gte: currentDate
        }
      })

  return driverCar
}

exports.verifyDriverIsAvailable = async (driver, currentDate) => {
  const driverCar = await DriverCar
      .find({
        driver: driver,
        init_date: {
          $lte: currentDate
        },
        end_date: {
          $gte: currentDate
        }
      })

  return driverCar
}

exports.update = async (updateId, data) => {
  return await DriverCar
      .findOneAndUpdate(updateId, {
        $set: {
          end_date: data.end_date
        }
      })
}

