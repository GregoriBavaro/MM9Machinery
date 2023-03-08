//Hooks
import { useState, Fragment } from "react";
import FormatBytes from "../../Hooks/use-converter";
import { motion as m, AnimatePresence } from "framer-motion";
import axios from "axios";

//CSS
import classes from "./DragDropFiles.module.css";

//Icons
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const DragDropFiles = () => {
  // const [selectedFiles, setSelectedFiles] = useState([]); old logic only for a single photo

  const [imagePreviews, setImagePreviews] = useState([]); //state to keep img preview

  //multiple photos
  const [arrayOfPhotos, setArrayOfPhotos] = useState([]);

  const selectFiles = (event) => {
    let images = []; //Image preview array only to show the photos that are selected to be uploaded
    let photos = []; //array of photos for db POST

    for (let i = 0; i < event.target.files.length; i++) {
      images.push({
        img: URL.createObjectURL(event.target.files[i]),
        name: event.target.files[i].name,
        size: event.target.files[i].size,
      }); // The use of URL.createObjectURL() is to get the image preview URL and put it into imagePreviews array. This method produces a DOMString including a URL describing the object provided in the parameter. The URL life is tied to the document in the window on which it was created.
      photos.push(event.target.files[i]);
    }

    // setSelectedFiles(event.target.files[0]);
    setImagePreviews(images);
    setArrayOfPhotos(photos);
  };

  // A function to call send photos to DB depending on its Length
  const callUploadMultiple = () => {
    arrayOfPhotos.map((file, i) => sendPhotos(file));
  };

  const sendPhotos = async (file) => {
    let formData = new FormData();
    formData.append("files", file);

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
  };

  return (
    <Fragment>
      <div className={classes.fileUploadContainer}>
        <label htmlFor="file">
          <AddAPhotoIcon sx={{ color: "rgb(0, 191, 111)" }} />
          Browse or Drag and Drop images
          <input
            id="file"
            name="file"
            type="file"
            multiple="multiple"
            accept="image/*"
            onChange={selectFiles}
          />
          <button onClick={callUploadMultiple}>Upload</button>
        </label>
      </div>
      <AnimatePresence>
        {imagePreviews && (
          <div className={classes.imagePreview}>
            {imagePreviews.map((img, i) => {
              return (
                <m.div
                  key={i}
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
                    <img src={img.img} alt={"image-" + i} />
                  </div>
                  <div className={classes.text}>
                    <h1>{img.name}</h1>
                    <p>{FormatBytes(img.size)}</p>
                  </div>
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
