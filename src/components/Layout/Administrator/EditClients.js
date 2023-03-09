//Hooks
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import Notifications from "../../Hooks/use-customNotifications";
import { useTranslation } from "react-i18next";

//Components
import DragAndDrop from "./DragDropFiles";

const EditClients = () => {
  const [error, setError] = useState();
  const [photosFromDb, setPhotosFromDb] = useState([]);

  const { t } = useTranslation();

  //const ref = useRef(null);

  //Get Photos
  //IZDVOEN E POVIKOT NADVOR OD USEEFFECT ZA DA MOZE DA SE AZURIRA POSLE DELETE, T.E DATATA DA E UP-TO DATE,
  //KOGA BESHE VNATRE VO USEEFFECT-OT , AKO STAVISH DEPENDENCY NA DATATA ZA DA SE UPDATE POSLE DELETE , INFINITE LOOP IMAs
  const getPhotos = async () => {
    try {
      const res = await axios.get("https://localhost:7058/api/File/all");
      setPhotosFromDb(res.data);
      console.log("render");
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  //Raboti no prakjam pogresno id
  //NO MAMA IMA NOV TRIK !!!! 
  const deletePhoto = async (id) => {
    //id-to go zadavam dolu vo jsx i so ref go zemam no sekogas ja brise poslednata slika
    // const id = ref.current.id;
    try {
      const res = await axios.delete(`https://localhost:7058/api/File/${id}`);
      console.log(res);

      if (res.status === 200) {
        getPhotos();
      }
    } catch (ex) {
      console.log(ex);
    }
  };

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
        <DragAndDrop getPhotos={getPhotos}/>
      </div>
      <div className="admin-responsive-container">
        <div className="admin-responsive-wrapper">
          {photosFromDb?.map((item) => {
            return (
              <div key={item.documentId} className="photo-wrapper">
                <img
                  src={`data:image/jpeg;base64,${item.dataFiles}`}
                  alt="client"
                />
                <button onClick={() => deletePhoto(item.documentId)}>
                  {t("delete")}
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
