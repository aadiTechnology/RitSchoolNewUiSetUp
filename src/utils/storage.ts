type StorageKey = {
  name: string;
  type: typeof sessionStorage | typeof localStorage;
};

type StorageKeys = {
  [key: string]: StorageKey;
};

/**
 * Utility for working with web storage (localStorage and sessionStorage).
 */
const storageUtil = {
  /**
   * Stores data in web storage.
   *
   * @param {string} key - The key under which to store the data.
   * @param {any} value - The data to store.
   * @param {Storage} storageType - The type of web storage to use (localStorage or sessionStorage).
   */
  set: (key, value, storageType = localStorage) => {
    storageType.setItem(key, JSON.stringify(value));
  },

  /**
   * Retrieves data from web storage.
   *
   * @param {string} key - The key under which the data is stored.
   * @param {Storage} storageType - The type of web storage to use (localStorage or sessionStorage).
   * @returns {any} The retrieved data, or null if no data was found.
   */
  get: (key, storageType = localStorage) => {
    const value = storageType.getItem(key);
    return value ? value : null;
  },

  /**
   * Removes data from web storage.
   *
   * @param {string} key - The key under which the data is stored.
   * @param {Storage} storageType - The type of web storage to use (localStorage or sessionStorage).
   */
  remove: (key, storageType = localStorage) => {
    storageType.removeItem(key);
  },

  /**
   * Clears all data from web storage.
   *
   * @param {Storage} storageType - The type of web storage to use (localStorage or sessionStorage).
   */
  clear: (storageType = localStorage) => {
    storageType.clear();
  }
};

/**
 * Storage constants are the keys used to store data in web storage.
 * It is recommended to use these constants instead of hardcoding the keys.
 */
export const storageKeys: StorageKeys = {
  accessToken: {
    name: 'accessToken',
    type: localStorage
  },
  selectedSchool: {
    name: 'selectedSchool',
    type: localStorage
  },
  selectedSchoolSettings: {
    name: 'selectedSchoolSettings',
    type: localStorage
  }
};

export default storageUtil;
