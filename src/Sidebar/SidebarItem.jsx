import { memo, useEffect, useState } from "react";
import SidebarItemTitle from "./SidebarItemTitle";

const SidebarItem = memo(({ item, onOpen, id, isOpen }) => {
  // open children inside this item
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  useEffect(() => {
    // close all children
    if (!isOpen) {
      setCurrentlyOpen(null);
    }
  }, [isOpen]);

  // base case
  if (!item.children) {
    return (
      <a href={item.path || "#"} className="sidebar__item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }

  function handleToggleItem() {
    onOpen(isOpen ? null : id);
  }

  return (
    <div className={isOpen ? "sidebar__item open" : "sidebar__item"}>
      <SidebarItemTitle
        icon={item.icon}
        isExpanded={isOpen}
        onClick={handleToggleItem}
      >
        {item.title}
      </SidebarItemTitle>

      <div className="sidebar__item__content">
        {item.children.map((child, index) => (
          <SidebarItem
            key={child.id}
            id={index}
            item={child}
            isOpen={index === currentlyOpen}
            onOpen={setCurrentlyOpen}
          />
        ))}
      </div>
    </div>
  );
});

export default SidebarItem;
