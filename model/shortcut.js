const mongoose = require('mongoose');

const shortcutSchema = new mongoose.Schema({
  shortcutName: {
    type: String,
  },
  shortcutDescription: {
    type: String,
  },
}, {
  timestamps: true,
});

const shortcutModel = mongoose.model('shortcut', shortcutSchema);

module.exports = shortcutModel;