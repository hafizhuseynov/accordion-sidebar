import React from 'react'
import Icon from '../components/Icon/Icon'

export default function SidebarItemTitle({icon, children, isExpanded, onClick}) {
  return (
    <div onClick={onClick} className="sidebar__item__title">
    <span>
      {icon && <Icon i={icon} />}
      {children}
    </span>
    <Icon i="bi-chevron-down" useToggleBehavior={{rotate: isExpanded ? "unset" : "-90deg"}}/>
  </div>
  )
}
