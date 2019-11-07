export const fetchAnimals = async animals => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/${animals}`);
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};