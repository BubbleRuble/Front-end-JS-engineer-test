import { InputMenu } from './Components/Input/input'
import { ToastMenu } from './Components/Toast/toast'
import { SidebarMenu } from './Components/SidebarMenu/sidebarMenu';
import './App.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Dashboard', children: [
      { label: 'Services' },
      { label: 'Support' },
    ] },
  ];

  return (
    <>
      <div>
        <InputMenu />
        <ToastMenu message={'Hello'}/>
        <button
          type="button"
          className="open-button"
          onClick={() => setMenuOpen(true)}
        >
          Open Menu
        </button>
        <SidebarMenu
          items={menuItems}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
