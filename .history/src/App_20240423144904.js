import "./App.css";

function App() {
  return (
    <div className="main">
      <div></div>
      <div className="welcome-name">Welcome to IOT System Group X</div>
      <div className="member-name">
        <div className="member">Member 1: Nguyen Nhat Thuong</div>
        <div className="member">Member 2: Le Van Sy</div>
        <div className="member">Member3: Pham Thuy Dung</div>
      </div>
      <div className="device">Devices Control</div>
      <div className="main_device">
        <div className="device">
          <div className="info"></div>
          <div className="device_img"></div>
        </div>
        <div className="device">
          <div className="info">
            <div className="name">Womos D1</div>
            
            <div className="time">
              div14:00 30-04-2024</div>
          </div>
          <div className="device_img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
