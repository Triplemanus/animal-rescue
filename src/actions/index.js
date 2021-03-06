export const getAnimals = animals => ({
  type: "GET_ANIMALS",
  animals
});

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addDonations = donation => ({
  type: 'ADD_DONATIONS',
  donation
});

export const getDonations = donations => ({
  type: 'GET_DONATIONS',
  donations
});
