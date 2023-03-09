//Hooks
import useHttp from "../../Hooks/use-http";
import { Fragment, useEffect, useState, useRef } from "react";
import Notifications from "../../Hooks/use-customNotifications";
import { AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import DragAndDrop from "./DragDropFiles";

const EditClients = () => {
  const photos = useLoaderData();
  
  const [error, setError] = useState();
  const [photosFromDb, setPhotosFromDb] = useState();

  const ref = useRef(null);

 
  //Get Photos
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("https://localhost:7058/api/File/all");
        setPhotosFromDb(res.data);
        console.log("render")
      } catch (ex) {
        console.log(ex);
      }
    };

    getPhotos();
  }, []);


  //Raboti no prakjam pogresno id
  const deletePhoto = async () => {
    //id-to go zadavam dolu vo jsx i so ref go zemam no sekogas ja brise poslednata slika 
    const id = ref.current.id
    console.log(id);
   
    try {
      const res = await axios.delete(
        `https://localhost:7058/api/File/${id}`,
      );
      console.log(res);

      if (res.status === 200) {
        
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  
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
        <DragAndDrop />
      </div>
      <div className="admin-responsive-container">
        <div className="admin-responsive-wrapper">
          {photosFromDb?.map((item) => {
            return (
              <div key={item.documentId} className="photo-wrapper">
                <img ref={ref} id={item.documentId} 
                  src={`data:image/jpeg;base64,${item.dataFiles}`}
                  alt="client"
                />
                <button onClick={deletePhoto}>
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
