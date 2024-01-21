const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/uploads");
    },

    filename: function (req, file, cb) {
        console.log(file)
        const fnamePart = file.originalname.split(".")
        const ext = fnamePart[fnamePart.length - 1]

        console.log(ext)
        cb(null, file.fieldname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        // filter out the file, 
        // control over the file upload


        cb(null, true)

    }
})

module.exports = upload;