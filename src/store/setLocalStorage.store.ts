export const setLocalStorage = () => {
  const getItemFromStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const setItemToStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  return {
    // Properties
    // Methods
    getItemFromStorage,
    setItemToStorage,
  };
};
