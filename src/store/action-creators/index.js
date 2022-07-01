import {
  ADD_NEW_POST,
  ADD_RESP_TO_POSTS_LIST,
  CLEAR_ERROR,
  DELETE_POST_FROM_LIST,
  DELETE_SINGLE_POST,
  EDIT_CURRENT_POST,
  FETCH_POSTS_LIST,
  SET_API_ERROR,
  SET_EDITED_POST_TO_LIST,
  SET_EXPANDED_ACCARDION,
  SET_POSTS_LIST_DATA,
} from "../action-types";

export const setExpandedAccardion = (data) => {
  return {
    type: SET_EXPANDED_ACCARDION,
    payload: data,
  };
};

export const fetchPostsList = () => {
  return {
    type: FETCH_POSTS_LIST,
  };
};

export const setPostsListData = (data) => {
  return {
    type: SET_POSTS_LIST_DATA,
    payload: data,
  };
};

export const addResponseToPostsListData = (data) => {
  return {
    type: ADD_RESP_TO_POSTS_LIST,
    payload: data,
  };
};

export const addNewPost = (data) => {
  return {
    type: ADD_NEW_POST,
    payload: data,
  };
};

export const deletePostFromList = (postId) => {
  return {
    type: DELETE_SINGLE_POST,
    payload: postId,
  };
};

export const deletePostFromListData = (postId) => {
  return {
    type: DELETE_POST_FROM_LIST,
    payload: postId,
  };
};

export const editCurrentPost = (data) => {
  return {
    type: EDIT_CURRENT_POST,
    payload: data,
  };
};

export const setEditedPostToList = (data) => {
  return {
    type: SET_EDITED_POST_TO_LIST,
    payload: data,
  };
};

export const setApiError = (data) => {
  return {
    type: SET_API_ERROR,
    payload: data,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};