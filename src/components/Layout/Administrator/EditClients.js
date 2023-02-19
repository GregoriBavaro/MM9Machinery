//Hooks
import useHttp from "../../Hooks/use-http";
import { useEffect, useState } from "react";

const EditClients = () => {
  const [data, setData] = useState([]);

  const { sendRequest: getData } = useHttp();

  const transformData = (users) => {
    const loadedData = [];

    for (const user in users) {
      loadedData.push({ id: user, name: users[user].name });
    }

    setData(loadedData);
  };

  useEffect(() => {
    getData(
      {
        url: "https://mm9m-post-form-default-rtdb.firebaseio.com/user.json",
      },
      transformData
    );
  });

  const deletePhoto = (e) => {
    let newArray = [];

    newArray = data.filter(function (currentItem) {
      return currentItem.id !== e.currentTarget.id;
    });

    setData(newArray);
  };

  return (
    <div className="admin-responsive-container">
      <div className="admin-responsive-wrapper">
        {data.map((item) => {
          return (
            <div key={item.id} className="photo-wrapper">
              <img src={item.name} alt="client"/>
              <button id={item.id} onClick={deletePhoto}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditClients;
