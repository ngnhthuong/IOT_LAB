import "../assets/css/App.css";
import backgroundIMG from "../assets/img/background.png";
import arduinor3IMG from "../assets/img/arduinor3.png";
import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const handleOpen = (id) => {
  window.location.href = `/infor?${id}`;
};

function Activate_tools() {
  const [dataTools, setDataTools] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:3001/api/getAllDevices")
        .then((response) => {
          setDataTools(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching building data:", error);
        });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <div className="back-head">
          <img className="img-back" src={backgroundIMG} alt="Background"></img>
        </div>
        <div className="welcome-name">Welcome to IOT System Group X</div>
        <div className="member-name">
          <div className="member">Member 1: Nguyen Nhat Thuong</div>
          <div className="member">Member 2: Le Van Sy</div>
          <div className="member">Member 3: Pham Thuy Dung</div>
        </div>
        <div className="device">Devices Control</div>
        <div className="main_device">
          {dataTools.length !== 0 &&
            dataTools.map((item, index) => (
              <div className="device" key={index}>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="time-status">
                    <div
                      className={`status-${item.status ? "red" : "green"}`}
                    ></div>
                    <div className={`time-${item.status ? "red" : "green"}`}>{item.updatedAt}</div>
                  </div>
                </div>
                <div className="device_img">
                  <img
                    onClick={() => handleOpen(item._id)}
                    className="device_img-child"
                    src={arduinor3IMG}
                    alt="Device"
                  ></img>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Activate_tools;
