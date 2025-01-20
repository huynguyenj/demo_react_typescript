import { useState } from 'react';
import ProductPage from './ProductPage';

export default function UseCallbackExample() {
  const [isDark, setIsDark] = useState(false);

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsDark(e.target.checked);
  }

  return (
    <>
      <label className='label'>
        <input
          className='input'
          type="checkbox"
          checked={isDark}
          onChange={handleThemeChange}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
