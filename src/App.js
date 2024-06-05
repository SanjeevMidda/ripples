import "./index.css";
import backgroundVideo from "./videos/backgroundVideo.mp4";

function App() {
  return (
    <div className="App">
      <h1>H</h1>
      <h1>E</h1>
      <h1>L</h1>
      <h1>L</h1>
      <h1>O</h1>
      <h1>.</h1>
      <video
        src={backgroundVideo}
        type="video/mp4"
        className="backgroundVideo"
        autoplay="true"
        loop
      ></video>
    </div>
  );
}

export default App;
