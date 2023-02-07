const shortcutModel = require('../model/shortcut') 

exports.createShortcut = async (req, res) => {
    const {shortcutName, shortcutDescription} = req.body

  const shortcut = await shortcutModel.create({shortcutName, shortcutDescription})



  res.send({
    success: true,
    message: 'shortcut created successfully',
    shortcut
  })
}