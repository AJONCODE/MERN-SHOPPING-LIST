import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

/*
export const getItems = () => {

    return {
        type: GET_ITEMS
    };
}
*/
export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios
        .get(`/api/items`)
        .then((response) => 
            dispatch(
                {
                    type: GET_ITEMS,
                    payload: response.data
                }
            )
        )
}

/*
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
}
*/
export const addItem = (item) => (dispatch) => {
    axios
        .post("/api/items", item)
        .then((response) => 
            dispatch(
                {
                    type: ADD_ITEM,
                    payload: response.data
                }
            )
        )
}

/*
export const deleteItem = (_id) => {
    return {
        type: DELETE_ITEM,
        payload: _id
    };
}
*/
export const deleteItem = (_id) => (dispatch) => {
    axios
        .delete(`/api/items/${ _id }`)
        .then((request) =>
            dispatch(
                {
                    type: DELETE_ITEM,
                    payload: _id
                }
            )
    )
}


export const setItemsLoading = () => {
    return { 
        type: ITEMS_LOADING
    }
}