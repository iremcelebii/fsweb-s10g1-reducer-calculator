export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_ARTI = "M_ARTI";
export const MR = "MR";
export const MC = "MC";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (islem) => {
  return { type: CHANGE_OPERATION, payload: islem };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const mArti = () => {
  return { type: M_ARTI };
};

export const mr = () => {
  return { type: MR };
};
export const mc = () => {
  return { type: MC };
};
