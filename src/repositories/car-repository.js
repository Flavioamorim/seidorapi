const Car = require('../models/car')

exports.create = async (data) => {
  var car = new Car(data)
  return await car.save()
}

exports.get = async () => {
  const rest = await Car
      .find()

  return rest
}

exports.update = async (updateId, data) => {
  return await Car
      .findOneAndUpdate(updateId, {
        $set: {
          color: data.color,
          board: data.board,
          brand: data.brand,
        }
      })
}

exports.destroy = async (id) => {
  return await Product
      .findOneAndRemove(id)
}


exports.getById = async (id) => {
  return await Car.findById(id)
}
