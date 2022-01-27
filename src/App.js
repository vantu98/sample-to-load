import { useState } from "react";
import "./App.css";

function App() {
  const [d, setD] = useState(() => localStorage.getItem("iframeUrl"));

  const handleChange = (e) => {
    const { value } = e.target;
    setD(value);
  };

  const removeSkynav = () => {
    localStorage.removeItem("iframeUrl");
    window.location.reload();
  };

  const addIframeUrl = () => {
    localStorage.setItem("iframeUrl", d);
    window.location.reload();
  };

  if (!d)
    return (
      <div className="">
        <h1>Add Skynav to test</h1>
        <input type="text" name="skynavUrl" onChange={handleChange} />
        <button onClick={addIframeUrl}>Add</button>
      </div>
    );

  return (
    <div className="App">
      <iframe
        allowFullScreen
        id="iframe-1901"
        src={d}
        title="Virtual Tour from a Drone"
        frameborder="0"
        data-gtm-yt-inspected-1_19="true"
        data-gtm-yt-inspected-36971157_37="true"
        style={{
          width: "80%",
          height: "90vh",
        }}
      ></iframe>
      <button onClick={removeSkynav}>Remove Current Skynav</button>
    </div>
  );
}

export default App;
