import { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.scss";

const Sidebar = ({ items, shown, setShown }) => {
  const [currentlyOpen, setCurrentlyOpen] = useState(!shown && null);
  
  useEffect(() => {
    if (!shown) {
      setCurrentlyOpen(null);
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [shown]);

  return (
    <div className="sidebar__container">
      <div
        onClick={() => setShown(false)}
        className={shown ? `sidebar__overlay shown` : ""}
      ></div>

      <aside className={shown ? `sidebar shown` : `sidebar `}>
        {items &&
          items.map((item, index) => {
            return (
              <SidebarItem
                key={item.id}
                item={item}
                id={index}
                isOpen={index === currentlyOpen}
                onOpen={setCurrentlyOpen}
              />
            );
          })}
      </aside>
    </div>
  );
};

export default Sidebar;
