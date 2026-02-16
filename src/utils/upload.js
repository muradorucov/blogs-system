const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads')
  },
  filename: function (req, file, cb) {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    const dotIndex = file.originalname.indexOf(".")
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const fullImageName = file.originalname.slice(0, dotIndex)
      + "-"
      + uniqueSuffix
      + file.originalname.slice(dotIndex);
    cb(null, fullImageName)
  }
})

const upload = multer({ storage: storage })
module.exports = upload;