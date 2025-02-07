export const getLocalStorageTodoData = () => {
  const todoLocalStorageKey = "todo";
  const fetchedFromLocalStorage = localStorage.getItem(todoLocalStorageKey);
  // Check if there is anything in localStorage and if it's a valid JSON string
  if (!fetchedFromLocalStorage) return []; // Return empty array if no tasks are stored

  try {
    return JSON.parse(fetchedFromLocalStorage); // Try parsing if data exists
  } catch (e) {
    console.error("Error parsing JSON from localStorage", e);
    return []; // Return an empty array if parsing fails
  }
};
