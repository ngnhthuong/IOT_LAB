import "../assets/css/App.css";
import backgroundIMG from "../assets/img/background.png"
import arduinor3IMG from "../assets/img/arduinor3.png"
const handleOpen = () => {
  window.location.href = "/infor";
};
function Activate_tools(){
    return(
    <div className="main">
    <div className="back-head">
      <img className="img-back" src={backgroundIMG}></img>
    </div>
    <div className="welcome-name">Welcome to IOT System Group X</div>
    <div className="member-name">
      <div className="member">Member 1: Nguyen Nhat Thuong</div>
      <div className="member">Member 2: Le Van Sy</div>
      <div className="member">Member3: Pham Thuy Dung</div>
    </div>
    <div className="device">Devices Control</div>
    <div className="main_device">
      <div className="device">
        <div className="info">
          <div className="name">Womos D1</div>

          <div className="time-status">
            <div className="status-green"></div>
            <div className="time-green">14:00 30-04-2024</div>
          </div>
        </div>
        <div className="device_img">
          <img onClick={handleOpen} className="device_img-child" src={arduinor3IMG}></img>
        </div>
      </div>
      <div className="device">
        <div className="info">
          <div className="name">Womos D1</div>
          <div className="time-status">
            <div className="status-red"></div>
            <div className="time-red">14:00 30-04-2024</div>
          </div>
        </div>
        <div className="device_img">
          <img onClick={handleOpen} className="device_img-child" src={arduinor3IMG}></img>
        </div>
      </div>
    </div>
  </div>)
}
export default Activate_tools;
