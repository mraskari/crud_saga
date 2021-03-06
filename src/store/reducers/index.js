import { combineReducers } from "redux";
import {
  SET_POSTS_LIST_DATA,
  SET_EXPANDED_ACCARDION,
  ADD_RESP_TO_POSTS_LIST,
  DELETE_POST_FROM_LIST,
  SET_API_ERROR,
  SET_EDITED_POST_TO_LIST,
  CLEAR_ERROR,
} from "../action-types";

export const expandedAccardion = (state = 0, action) => {
  switch (action.type) {
    case SET_EXPANDED_ACCARDION:
      return action.payload;
    default:
      return state;
  }
};

const INIT_STATE = {
  data: [],
  error: null,
  loading: false,
};

export const postsListReducer = (state = INIT_STATE, action) => {
  let index = 0;
  let tempState = [...state.data];

  switch (action.type) {
    case SET_POSTS_LIST_DATA:
      return { data: action.payload, error: "دریافت با موفقیت انجام شد", loading: false };
    case ADD_RESP_TO_POSTS_LIST:
      return {
        data: [...tempState, action.payload],
        error: "پست با موفقیت ارسال شد",
        loading: false,
      };
    case DELETE_POST_FROM_LIST:
      index = tempState.findIndex((post) => post.id === action.payload);

      if (index > -1) {
        tempState.splice(index, 1);
      }
      return { data: [...tempState], error: "پست با موفقیت حذف شد", loading: false };
    case SET_EDITED_POST_TO_LIST:
      index = tempState.findIndex((post) => post.id === action.payload.id);
      console.log("set edite -> index: ", index, " payload: ", action.payload);
      tempState[index] = action.payload;
      return { data: [...tempState], error: "پست با موفقیت ویرایش شد", loading: false };
    case SET_API_ERROR:
      return { data: [...tempState], error: action.payload, loading: false };
    case CLEAR_ERROR:
      return { data: [...tempState], error: null, loading: false };
    default:
      return state;
  }
};
