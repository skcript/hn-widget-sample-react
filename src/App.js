import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.HNWidget.init({
      token: "<TOKEN HERE>",
      selector: "#WidgetSelector", // Optional: Widget will open up when this element is clicked
      placement: "left", // Optional: Placement of the element when selector is used
      showOnlySubmission: false, // Optional: Toggle for showing only submission form or post list
    });
  }, []);

  return (
    <div className="App">
      <button id="WidgetSelector">Click Me</button>
    </div>
  );
}

export default App;
