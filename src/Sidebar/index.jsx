import { useEffect } from "react";
import "./Sidebar.scss";
import useSidebar from "../hooks/useSidebar";

const Sidebar = ({ items, shown, setShown }) => {
  const [renderItems] = useSidebar(items, shown);

  useEffect(() => {
    if (shown) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }
  }, [shown]);

  return (
    <div className="sidebar__container">
      <div
        onClick={() => setShown(false)}
        className={shown ? `sidebar__overlay shown` : ""}
      ></div>

      <aside className={shown ? `sidebar shown` : `sidebar `}>
        {renderItems()}
      </aside>
    </div>
  );
};

export default Sidebar;
