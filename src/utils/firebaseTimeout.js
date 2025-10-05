// Utility to add timeout to any Firebase call
export const withTimeout = (promise, timeoutMs = 5000) => {
    return Promise.race([
      promise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Firebase request timeout')), timeoutMs)
      )
    ]);
  };
  
  // Safe Firebase URL getter with timeout and fallback
  export const getSafeFirebaseUrl = async (storage, ref, path, fallbackPath = null, timeout = 5000) => {
    try {
      const videoRef = ref(storage, path);
      const url = await withTimeout(
        getDownloadURL(videoRef),
        timeout
      );
      return url;
    } catch (error) {
      console.warn(`Failed to load ${path}:`, error.message);
      
      // Try fallback if provided
      if (fallbackPath) {
        try {
          const fallbackRef = ref(storage, fallbackPath);
          const url = await withTimeout(
            getDownloadURL(fallbackRef),
            timeout
          );
          return url;
        } catch (fallbackError) {
          console.error(`Fallback also failed for ${fallbackPath}:`, fallbackError.message);
          return null;
        }
      }
      
      return null;
    }
  };