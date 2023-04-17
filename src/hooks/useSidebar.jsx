import React, { useCallback, useEffect, useState } from "react";
import SidebarItem from "../Sidebar/SidebarItem";

export default function useSidebar(items, parentIsOpen) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  const renderItems = useCallback(
    function mapItems() {
      if (parentIsOpen) {
        return items.map((item, index) => {
          if (item.children) {
            const isOpen = item.id === currentlyOpen;
            const handleToggle = () => {
              setCurrentlyOpen(isOpen ? null : item.id);
            };
            return (
              <SidebarItem
                key={item.id}
                item={item}
                isOpen={item.id === currentlyOpen}
                onToggle={handleToggle}
              />
            );
          }

          return (
            <a
              key={item.id}
              href={item.path || "#"}
              className="sidebar__item plain"
            >
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </a>
          );
        });
      } else {
        return null;
      }
    },
    [items, currentlyOpen, parentIsOpen]
  );

  useEffect(() => {
    if (!parentIsOpen) {
      setCurrentlyOpen(null);
    }
    return () => {
      setCurrentlyOpen(null);
    };
  }, [parentIsOpen]);

  return [renderItems];
}
