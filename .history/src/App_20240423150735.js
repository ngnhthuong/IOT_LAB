import "./App.css";
import backgroundIMG from "./assets/img/background.png"
import arduinor3IMG from "./assets/img/arduinor3.png"
function App() {
  return (
    <div className="main">
      <div className="back-head">
        <img className="img-back"  src={backgroundIMG}></img>
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
              <div className="status"></div>
              <div className="time">14:00 30-04-2024</div>
            </div>
          </div>
          <div className="device_img">
            <img
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
