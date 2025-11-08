import React, { useState } from 'react';
import './sidebarMenu.css';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  items: MenuItem[];
  open: boolean;
  onClose?: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, open, onClose }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${open ? 'open' : 'close'}`}>
        <h3 className="sidebar-title">Menu</h3>
        {items.map((item, i) => (
          <div key={i} className="menu-item-container">
            <div className="menu-item" onClick={() => toggleSubmenu(i)}>
              {item.label}
            </div>
            {activeIndex === i && item.children && (
              <div className="submenu">
                {item.children.map((child, j) => (
                  <div key={j} className="submenu-item">
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
