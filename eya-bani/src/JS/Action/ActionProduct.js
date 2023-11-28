import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FAIL_PRODUCT,
  GET_BY_ID,
  GET_PRODUCT,
  LOAD_PRODUCT,
  UPDATE_PRODUCT,
} from "../ActionType/ActionType";
//add the product
export const add_product = (newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT }); // appel load

  try {
    let result = await axios.post(
      "http://localhost:8000/api/product/addproduct",
      newProduct
    );
    dispatch({ type: ADD_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const get_product = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(
      "http://localhost:8000/api/product/get_products"
    );
    dispatch({ type: GET_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const get_byId = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(
      `http://localhost:8000/api/product/get_byId/${id}`
    );
    dispatch({ type: GET_BY_ID, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};
export const editproduct = (id, newproduct) => async (dispatch) => {
  console.log(id, newproduct);
  dispatch({ type: LOAD_PRODUCT });
  try {
    await axios.put(
      `http://localhost:8000/api/product/editproduct/${id}`,
      newproduct
    );
    dispatch({ type: UPDATE_PRODUCT });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};
export const deleteproduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    await axios.delete(`http://localhost:8000/api/product/deleteproduct/${id}`);
    dispatch({ type: DELETE_PRODUCT });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};
export const get_productbycategorie = (cat) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(
      "http://localhost:8000/api/product/get_products/" + cat
    );
    dispatch({ type: GET_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const getlast3 = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(
      "http://localhost:8000/api/product/get_products/last3"
    );
    console.log(result.data);
    dispatch({ type: GET_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};
