/**
 * Converts a date string to the format "MMM DD, YYYY, HH:mm A.M/P.M".
 * @param {string} dateString - The date string in the format "YYYY-MM-DDTHH:mm:ss.sssZ".
 * @returns {string} The formatted date string.
 */

export default function formatDate(dateString) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const date = new Date(dateString);
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    let period = 'A.M';
  
    if (hours >= 12) {
      period = 'P.M';
      if (hours > 12) {
        hours -= 12;
      }
    }
  
    const formattedDate = `${month} ${day}, ${year}`;
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  
    return `${formattedDate}, ${formattedTime}`;
  }
  