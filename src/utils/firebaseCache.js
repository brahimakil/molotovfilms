// Helper to validate and cache Firebase URLs with proper expiration
export const getCachedFirebaseUrl = async (cacheKey, getUrlFunction, cacheExpiration = 24 * 60 * 60 * 1000) => {
  const cacheTimeKey = `${cacheKey}_timestamp`;
  
  try {
    const cachedUrl = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const now = Date.now();
    
    // Check if cache exists and is not expired
    if (cachedUrl && cachedTime && (now - parseInt(cachedTime)) < cacheExpiration) {
      // Validate the cached URL by checking if it's still accessible
      try {
        const response = await fetch(cachedUrl, { method: 'HEAD', mode: 'no-cors' });
        // If we get here without error, URL is still valid
        console.log(`Using valid cached URL for ${cacheKey}`);
        return { url: cachedUrl, fromCache: true };
      } catch (error) {
        // URL is expired or invalid, clear cache and fetch new one
        console.log(`Cached URL expired for ${cacheKey}, fetching new one`);
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);
      }
    }
    
    // Fetch new URL
    const url = await getUrlFunction();
    
    // Cache the new URL
    localStorage.setItem(cacheKey, url);
    localStorage.setItem(cacheTimeKey, now.toString());
    
    return { url, fromCache: false };
  } catch (error) {
    // Clear cache on error
    localStorage.removeItem(cacheKey);
    localStorage.removeItem(cacheTimeKey);
    throw error;
  }
};
