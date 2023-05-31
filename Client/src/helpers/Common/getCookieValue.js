/**
 * This method will take the cookie key and will return the cookie value
 * It will be used to retrieve the auth token in frontend and send it only once in API fetching function.
 * @param {*} cookieKey 
 * @returns {*} cookieValue
 */

export default function getCookieValue(cookieKey) {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      // Check if the cookie starts with the provided key
      if (cookie.startsWith(cookieKey + '=')) {
        // Extract and return the cookie value
        return cookie.substring(cookieKey.length + 1);
      }
    }
  
    // Return null if the cookie key is not found
    return null;
  }