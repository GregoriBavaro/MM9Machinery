//Hooks
import { useState, Fragment, useEffect } from "react";
import FormatBytes from "../../Hooks/use-converter";
import { motion as m, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

//CSS
import classes from "./DragDropFiles.module.css";

//Icons
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DragDropFiles = (props) => {
  const [imagePreviews, setImagePreviews] = useState([]); //state to keep img previews
  // const [photosFromDb, setPhotosFromDb] = useState([]);
  //multiple photos
  const [arrayOfPhotos, setArrayOfPhotos] = useState([]);

  const { t } = useTranslation();

  const selectFiles = (event) => {
    let images = []; //Image preview array only to show the photos that are selected to be uploaded
    let photos = []; //array of photos for db POST

    for (let i = 0; i < event.target.files.length; i++) {
      images.push({
        img: URL.createObjectURL(event.target.files[i]),
        name: event.target.files[i].name,
        size: event.target.files[i].size,
        id: uuidv4(), //Adding id to give the clint filter option of the picked preview pictures (to remove selected pictures)
      }); // The use of URL.createObjectURL() is to get the image preview URL and put it into imagePreviews array. This method produces a DOMString including a URL describing the object provided in the parameter. The URL life is tied to the document in the window on which it was created.
      photos.push({ file: event.target.files[i],id: images[i].id}); // giving the same id from images array to update the list of files that will be pushed to db
    }

    setImagePreviews(images);
    setArrayOfPhotos(photos);
  };

  const sendPhotos = async (file) => {
    //create data file
    let formData = new FormData();
    formData.append("files", file.file);

    try {
      const res = await axios.post(
        "https://localhost:7058/api/File/upload",
        formData
      );
      console.log(res);

      if (res.status === 200) {
        setArrayOfPhotos([]);
        setImagePreviews([]);
      }
    } catch (ex) {
      console.log(ex);
    }
    props.getPhotos(); // zlaten tuka so props za da se updejtira
  };

  // A function to call send photos to DB depending on its Length (multiple of times)
  const callUploadMultiple = () => {
    arrayOfPhotos.map((file) => sendPhotos(file));
  };

  //Remove from preview and from DB post
  const deleteSelectedPhoto = (id) => {
    setImagePreviews((current) => current.filter((photo) => photo.id != id));
    setArrayOfPhotos((current) => current.filter((photo) => photo.id != id));
  };

  return (
    <Fragment>
      <div className={classes.fileUploadContainer}>
        <label htmlFor="file">
          <AddAPhotoIcon sx={{ color: "rgb(0, 191, 111)" }} />
          {t("browse_images")}
          <input
            id="file"
            name="file"
            type="file"
            multiple="multiple"
            accept="image/*"
            onChange={selectFiles}
          />
          <button onClick={callUploadMultiple}>{t("upload")}</button>
        </label>
      </div>
      <AnimatePresence>
        {imagePreviews && (
          <div className={classes.imagePreview}>
            {imagePreviews.map((img) => {
              return (
                <m.div
                  key={img.id}
                  className={classes.imagePreviewWrapper}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 10,
                  }}
                >
                  <div className={classes.image}>
                    <img src={img.img} alt={"image"} />
                  </div>
                  <div className={classes.text}>
                    <h1>{img.name}</h1>
                    <p>{FormatBytes(img.size)}</p>
                  </div>

                  <DeleteForeverIcon
                    onClick={() => deleteSelectedPhoto(img.id)}
                    sx={{
                      color: "white",
                      fontSize: "2.5rem",
                      marginLeft: "auto",
                      cursor: "pointer",
                      "&:hover": { color: "red" },
                    }}
                  />
                </m.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default DragDropFiles;
