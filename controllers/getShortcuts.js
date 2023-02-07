const shortcutModel = require('../model/shortcut') 

exports.getShortcuts = async (req, res) => {
    const shortcuts = await shortcutModel.find()
  
    res.send({
      success: "true",
      message: "Shortcuts fetched successfully",
      shortcuts
    })
  }