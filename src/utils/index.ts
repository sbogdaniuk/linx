/**
 * Helper function to sleep for a given amount of time.
 * @param {number} delay The number of milliseconds to wait before fulfilling the promise.
 * @returns {Promise} A promise that fulfills after the given delay.
 */
export function sleep(delay = 0) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
