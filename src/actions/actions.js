// action creators - functions that create actions!
export const REMOVE_FEATURE = 'REMOVE_FEATURE'; //DELETE
export const BUY_ITEM = 'BUY_ITEM'; //ADD

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: "REMOVE_FEATURE", payload: item}
  };

export const buyItem = item => {
    // dispatch an action here to add an item
    return { type: "BUY_ITEM", payload: item}
  };