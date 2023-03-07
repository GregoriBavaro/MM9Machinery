//Hooks
import { useState, useRef, Fragment, useEffect } from "react";
import axios from "axios";

//CSS
import classes from "./DragDropFiles.module.css";

const DragDropFiles = () => {
  // const [selectedFiles, setSelectedFiles] = useState([]); old logic only for a single photo

  const [imagePreviews, setImagePreviews] = useState([]); //state to keep img preview

  //multiple photos
  const [arrayOfPhotos, setArrayOfPhotos] = useState([]);

  const selectFiles = (event) => {
    let images = []; //Image preview array only to show the photos that are selected to be uploaded
    let photos = []; //array of photos for db POST

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i])); // The use of URL.createObjectURL() is to get the image preview URL and put it into imagePreviews array. This method produces a DOMString including a URL describing the object provided in the parameter. The URL life is tied to the document in the window on which it was created.
      photos.push(event.target.files[i]);
    }

    // setSelectedFiles(event.target.files[0]);
    setImagePreviews(images);
    setArrayOfPhotos(photos);
  };

  // A function to call send photos to DB depending on its Length
  const callUploadMultiple = () => {
    arrayOfPhotos.map((file, i) => sendPhotos(file));
  }

  const sendPhotos = async (file) => {

    let formData = new FormData();
    formData.append("files", file);

    try {
      const res = await axios.post(
        "https://localhost:7058/api/File/upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Fragment>
      <div className="App">
        <input
          type="file"
          multiple="multiple"
          accept="image/*"
          onChange={selectFiles}
        />
        <button onClick={callUploadMultiple}>Upload</button>
      </div>
      {imagePreviews && (
        <div className={classes.imagePreview}>
          {imagePreviews.map((img, i) => {
            return (
              <div key={i} className={classes.imagePreviewWrapper}>
                <img src={img} alt={"image-" + i} />
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default DragDropFiles;
