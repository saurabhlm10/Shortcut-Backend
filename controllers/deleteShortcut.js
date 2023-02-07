const shortcutModel = require('../model/shortcut') 

exports.deleteShortcut = async (req, res) => {
    try {
        const {shortcutId} = req.params

        const response = await shortcutModel.findByIdAndDelete(shortcutId)

        res.status(200).send({
            success: true,
            message: 'Shortcut deleted successfully'
        })

    } catch (error) {
        console.log(error)
    }
}