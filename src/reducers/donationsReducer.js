export const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DONATIONS":
      return action.donations;
    case "ADD_DONATIONS":
      const newDonations = [...state, action.donation];
      return newDonations;
    default:
      return state;
  }
};