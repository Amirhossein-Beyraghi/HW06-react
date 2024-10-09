
import { useState } from 'react';

const ToggleText = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isTextVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isTextVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default ToggleText;
