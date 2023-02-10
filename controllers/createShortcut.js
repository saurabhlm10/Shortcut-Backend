const shortcutModel = require('../model/shortcut') 

exports.createShortcut = async (req, res) => {
    const {shortcutName, englishDescription, hindiDescription} = req.body

    console.log(1)

  const shortcut = await shortcutModel.create({shortcutName, englishDescription, hindiDescription})

  
  console.log(2)
  console.log(shortcut)


  res.send({
    success: true,
    message: 'shortcut created successfully',
    shortcut
  })
}