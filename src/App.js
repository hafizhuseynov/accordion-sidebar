import { useState } from "react";
import Sidebar from "./Sidebar";
import links from "./sidebar-data.json";
import "./App.css";
import Icon from "./components/Icon/Icon";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen((isPreviouslyOpen) => !isPreviouslyOpen);
  }

  return (
    <div className="app">
      <Sidebar shown={isSidebarOpen} setShown={setIsSidebarOpen} items={links} />

      <nav>
        <div onClick={handleToggleSidebar} className="sidebar-show">
          <Icon i="bi bi-layout-sidebar-inset" />
        </div>
      </nav>
    </div>
  );
}

export default App;
