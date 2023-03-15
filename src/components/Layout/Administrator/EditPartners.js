//Hooks
import axios from "axios";
import { useEffect, useState } from "react";
import Notifications from "../../Hooks/use-customNotifications";
import { useTranslation } from "react-i18next";
import { motion as m, AnimatePresence } from "framer-motion";

//Components
import DragAndDrop from "./DragDropFiles";

const EditPartners = () => {
  const [error, setError] = useState();
  const [partners, setPartners] = useState([]);

  const { t } = useTranslation();

  let partnersFromDb = false;

  if (partners.length > 0) {
    partnersFromDb = true;
  }

  const getPartners = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7058/api/PartnerFiles/all/partners"
      );
      setPartners(response.data);
      // if (!response.ok) {
      //   throw new Error("Error occurred while fetching data. ");
      // }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  const deletePartner = async (id) => {
    try {
      const request = await axios.delete(
        `https://localhost:7058/api/PartnerFiles/${id}`
      );

      getPartners();

      if (!request.ok) {
        throw new Error("Error occurred while deleting file");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
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
        <DragAndDrop getPhotos={getPartners} />
      </div>
      {partnersFromDb && (
        <div className="admin-responsive-container">
          <div className="admin-responsive-wrapper">
            <AnimatePresence>
              {partners?.map((item) => {
                return (
                  <m.div
                    key={item.documentId}
                    className="photo-wrapper"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 10,
                    }}
                  >
                    <img
                      src={`data:image/jpeg;base64,${item.dataFiles}`}
                      alt="client"
                    />
                    <button onClick={() => deletePartner(item.documentId)}>
                      {t("delete")}
                    </button>
                  </m.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};



export default EditPartners;
