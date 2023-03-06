//Hooks
import useHttp from "../../Hooks/use-http";
import { Fragment, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Notifications from "../../Hooks/use-customNotifications";
import { AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";

import DragDropFile from "./FileUploader";

const fileTypes = ["PNG", "JPG"];

const EditClients = () => {
  const photos = useLoaderData();

  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  //TRANSFORM DATA

  useEffect(() => {
    const loadedData = [];
    for (const photo in photos) {
      loadedData.push({ id: photo, name: photos[photo].name });
    }
    setData(loadedData);
  }, []);

  //DELETE PHOTO

  const deletePhoto = (e) => {
    let newArray = [];

    newArray = data.filter(function (currentItem) {
      return currentItem.id !== e.currentTarget.id;
    });

    setData(newArray);
  };

  //DRAG N DROP FILES

  const handleChange = (file) => {
    setFile(file);
  };

  const handleError = () => {
    setError(true);
  };

  const formData = new FormData();
  // formData.append("file", file);
  // file?.map((file) => {
  //   formData.append("file", file)
  // })

  let photoArray = [];

  for (const [key, value] of Object.entries(file)) {
    photoArray.push({ name: value.name, type: value.type });
  }

  console.log(photoArray);

  photoArray.forEach((e) => {
    formData.append(e.name, e.type)
  })

  const sendPhotos = async () => {
    try {
      const response = await fetch("https://localhost:7058/api/File/upload", {
        method: "POST",
        headers: new Headers({
          AuthHeader: "123",
        }),
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Not happening buddy");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendPhotos();
  }, [file]);

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {error &&
          Notifications(
            {
              key: "fetch-error-message",
              className: "fetch-error-message",
              h4: "Error",
              p: "Unsupported file!",
            },
            setError
          )}
      </AnimatePresence>

      <div className="file-upload">
        <FileUploader
          label={"Upload or drop a file right here"}
          hoverTitle={"Drop here"}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
          onTypeError={handleError}
          classes={!error ? "file" : "file-error"}
        />
      </div>
      <div className="admin-responsive-container">
        <div className="admin-responsive-wrapper">
          {data.map((item) => {
            return (
              <div key={item.id} className="photo-wrapper">
                <img src={item.name} alt="client" />
                <button id={item.id} onClick={deletePhoto}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default EditClients;
