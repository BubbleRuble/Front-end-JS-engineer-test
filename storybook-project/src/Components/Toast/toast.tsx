import React, { useEffect, useRef, useState } from 'react';
import './toast.css';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const ToastMenu: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose, showCloseButton = true, }) => {
  const [ visible, setVisible] = useState(true);
  const timerRef = useRef<number |null>(null);
  
  useEffect(() => {
    if (duration && duration > 0) {
      timerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);

  const handleTransitionEnd = () => {
    if (!visible) {
      onClose && onClose();
    }
  };

  const handleManualClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setVisible(false);
  };

  return (
    <div 
    className={`toast-container ${visible ? 'show' : 'hide'}`}
    onTransitionEnd={handleTransitionEnd}
    >
      <div className={`toast-menu ${type}`}>

        <div className='toast-message'>{message}</div>

        {showCloseButton && (
          <button type='button' onClick={handleManualClose} className='close-button'>
            ✕
          </button>
        )}

      </div>
    </div>
  );
};