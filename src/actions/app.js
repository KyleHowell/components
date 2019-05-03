import { createAction } from "redux-actions";

export const setCheckbox = createAction("SET_CHECKBOX");
export const setInput = createAction("SET_INPUT");

export default { setCheckbox, setInput };
