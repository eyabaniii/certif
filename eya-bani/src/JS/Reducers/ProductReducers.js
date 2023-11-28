import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FAIL_PRODUCT,
  GET_BY_ID,
  GET_PRODUCT,
  LOAD_PRODUCT,
  UPDATE_PRODUCT,
} from "../ActionType/ActionType";

//initialisation
const initialState = {
  product: null,
  load: false,
  error: null,
};
//pure function
const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, load: true };
    case ADD_PRODUCT:
      return { ...state, product: payload.products, load: false };
    case GET_PRODUCT:
      return { ...state, product: payload.products, load: false };
    case GET_BY_ID:
      return { ...state, product: payload.products, load: false };
    case UPDATE_PRODUCT:
      return { ...state, product: payload.products, load: false };
    case DELETE_PRODUCT:
      return { ...state, load: false };
    case FAIL_PRODUCT:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default ProductReducer;
