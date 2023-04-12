import { useState } from "react";
import Sidebar from "./Sidebar";
import links from "./sidebar-data.json";
import "./App.css";

function App() {
  const [shown, setShown] = useState(false);

  return (
    <div className="app">
      <Sidebar shown={shown} setShown={setShown} items={links} />

      <nav>
        <div onClick={() => setShown(!shown)} className="sidebar-show">
          <i className="bi bi-layout-sidebar-inset"></i>
        </div>
      </nav>
    </div>
  );
}

export default App;
