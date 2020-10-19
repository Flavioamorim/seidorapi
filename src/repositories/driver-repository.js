const Driver = require('../models/driver')

exports.create = async (data) => {
  var driver = new Driver(data)
  return await driver.save()
}

exports.get = async () => {
  const rest = await Driver.find()
  return rest
}

exports.update = async (updateId, data) => {
  return await Driver
      .findOneAndUpdate(updateId, {
        $set: {
          name: data.name
        }
      })
}

exports.destroy = async (id) => {
  return await Product.findOneAndRemove(id)
}

exports.getById = async (id) => {
  return await Driver.findById(id)
}
