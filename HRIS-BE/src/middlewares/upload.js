const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, './images'));
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

let fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        // accept file
        callback(null, true);
    } else {
        // reject file
        callback(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
