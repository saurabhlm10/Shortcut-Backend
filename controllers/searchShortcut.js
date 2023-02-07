const shortcutModel = require("../model/shortcut");

exports.searchShortcut = async (req, res) => {
    try {
        const { searchTerm } = req.params
        
        const searchResults = await shortcutModel.find({$or :  [{shortcutName: new RegExp(searchTerm, 'i')},{shortcutDescription: new RegExp(searchTerm, 'i')}]})  

        res.status(201).json({
            success: true,
            message: 'searchResults fetched successfully',
            searchResults
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'searchResults not fetched',
        })

    }
}