import React, { useState } from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const InputMenu = ({
  type = 'text',
  clearable,
  onChange, 
  ...props 
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('')
  
  const currentHtmlType = type === 'password' && showPassword ? 'text' : type;

  const handleClear = () => setValue('');

  const togglePassword = () => setShowPassword((prev) => !prev);
  
  const shouldShowClear = clearable && value !== '';
  const shouldShowPasswordToggle = type === 'password';

  const passwordIcon = showPassword ? '🙈' : '👁️';

  return (
    <div className='input-div'>
      <input
      name='input'
        {...props}
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        type={currentHtmlType}
        className='input-menu'
      />

        {shouldShowClear && (
          <button
            type="button"
            onClick={handleClear}
            className='clear-button'
          >❌
          </button>
        )}

        {shouldShowPasswordToggle && (
          <button
            type="button"
            onClick={togglePassword}
            className='show-button'
          >
            {passwordIcon} 
          </button>
        )}
      </div>
  );
};


