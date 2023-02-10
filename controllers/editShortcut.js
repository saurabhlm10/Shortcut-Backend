const shortcutModel = require('../model/shortcut') 

exports.editShortcut = async (req, res) => {
    const {shortcutId} = req.params

    const shortcut = req.body

    const editedShortcut = await shortcutModel.findByIdAndUpdate({_id: shortcutId}, {

        shortcutName: shortcut.editedShortcutName,
        englishDescription: shortcut.editedEnglishDescription,
        hindiDescription: shortcut.editedHindiDescription
    })
  
    res.send({
      success: "true",
      message: "Shortcut edited successfully",
      editedShortcut
    })
  }