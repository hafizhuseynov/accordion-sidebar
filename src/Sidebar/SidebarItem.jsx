import { memo } from "react";
import SidebarItemTitle from "./SidebarItemTitle";
import useSidebar from "../hooks/useSidebar";

const SidebarItem = memo(({ item, onToggle, isOpen }) => {
  const [renderItems] = useSidebar(item.children, isOpen);

  return (
    <div className={isOpen ? "sidebar__item open" : "sidebar__item"}>
      <SidebarItemTitle
        icon={item.icon}
        isExpanded={isOpen}
        onClick={onToggle}
      >
        {item.title}
      </SidebarItemTitle>

      <div className="sidebar__item__content">{renderItems()}</div>
    </div>
  );
});

export default SidebarItem;
