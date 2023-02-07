const shortcutModel = require('../model/shortcut') 

exports.getShortcut = async (req, res) => {
    const {shortcutId} = req.params

    const newShortcutId =  shortcutId.slice(1,)



  const shortcut = await shortcutModel.findById({_id: shortcutId})

  res.send({
    success: "true",
    message: "Shortcut fetched successfully",
    shortcut
  })

}