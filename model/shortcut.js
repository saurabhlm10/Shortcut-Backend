const mongoose = require('mongoose');

const shortcutSchema = new mongoose.Schema({
  shortcutName: {
    type: String,
  },
  englishDescription: {
    type: String,
  },
  hindiDescription: {
    type: String,
  },
  starred: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
});

const shortcutModel = mongoose.model('shortcut', shortcutSchema);

module.exports = shortcutModel;