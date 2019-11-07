export const fetchAnimals = async (animals) => {
  const url = `http://localhost:3001/api/v1/${animals}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ('There was an error getting animals data.');
  }
  const animals = await response.json();
  return animals;
};

export const fetchDonations = async (donations) => {
  const url = "http://localhost:3001/api/v1/donations/";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ('There was an error getting donations data.');
  }
  const donations = await response.json();
  return donations;
}