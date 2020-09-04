export const RECEIVE_PLACE = "RECEIVE_PLACE"; 
export const CLEAR_PLACE = "CLEAR_PLACE"; 

export const receivePlace = (place) => ({
  type: RECEIVE_PLACE,
  place,
});

export const removePlace = () => ({
  type: CLEAR_PLACE,
});
