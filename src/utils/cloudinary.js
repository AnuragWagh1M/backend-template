import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const uploadedFile = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });

    return uploadedFile;
  } catch (error) {
    fs.unlinkSync(localfilepath); //deleting file from local server as upload failed
    console.log("Error occured while uploading the file", error);
    return null;
  }
};

export { uploadFileOnCloudinary };
