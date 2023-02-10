const shortcutModel = require('../model/shortcut')

exports.toggleStar = async (req, res) => {
    const { shortcutId } = req.params

    const response = await shortcutModel.findOneAndUpdate({ _id: shortcutId },
        [
            { $set: { starred: { $not: "$starred" } } }
        ])

    res.send({
        success: true,
        message: "starred updated successfully",
    })
}