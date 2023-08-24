import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 600,
    height: 600,
  });

  useEffect(() => {
    // Function to update window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener('resize', updateWindowSize);

    // Call the update function once initially
    updateWindowSize();

    // Detach the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return windowSize;
}

export default useWindowSize;
