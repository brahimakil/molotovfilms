import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design breakpoints
 * Returns boolean flags for different screen sizes
 */
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width <= 768,
    isTablet: windowSize.width > 768 && windowSize.width <= 1024,
    isDesktop: windowSize.width > 1024,
    isSmallMobile: windowSize.width <= 480
  };
};

/**
 * Get responsive value based on screen size
 * @param {*} mobile - Value for mobile screens (<= 768px)
 * @param {*} tablet - Value for tablet screens (769-1024px)
 * @param {*} desktop - Value for desktop screens (> 1024px)
 */
export const useResponsiveValue = (mobile, tablet, desktop) => {
  const { isMobile, isTablet } = useResponsive();
  
  if (isMobile) return mobile;
  if (isTablet) return tablet || desktop;
  return desktop;
};

export default useResponsive;
