//Hooks
import { useState, useRef, Fragment, useEffect } from "react";
import axios from "axios";

//CSS
import classes from "./DragDropFiles.module.css";

const DragDropFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  

  const selectFiles = (event) => {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    setSelectedFiles(event.target.files[0]);
    setImagePreviews(images);
  };

  
  const sendPhotos = async () => {

    const formData = new FormData();
    formData.append("files", selectedFiles);

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
        <button onClick={sendPhotos}>Upload</button>
      </div>
      {imagePreviews && (
        <div className={classes.imagePreview}>
          {imagePreviews.map((img, i) => {
            return (
              <div key={i} className={classes.imagePreviewWrapper}>
                <img src={img} alt={"image-" + i}  />
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default DragDropFiles;
