//Hooks
import useHttp from "../../Hooks/use-http";
import { Fragment, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Notifications from "../../Hooks/use-customNotifications";
import { AnimatePresence } from "framer-motion";

const fileTypes = ["PNG", "JPG"];

const EditClients = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const { sendRequest: getData } = useHttp();

  //TRANSFORM DATA

  const transformData = (users) => {
    const loadedData = [];

    for (const user in users) {
      loadedData.push({ id: user, name: users[user].name });
    }

    setData(loadedData);
  };

  //GET DATA

  useEffect(() => {
    getData(
      {
        url: "https://mm9m-post-form-default-rtdb.firebaseio.com/user.json",
      },
      transformData
    );
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
