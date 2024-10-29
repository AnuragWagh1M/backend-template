import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //multer give access to file object not give by default in express
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});
