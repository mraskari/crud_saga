import { call, put } from "redux-saga/effects";
import {
  addResponseToPostsListData,
  deletePostFromListData,
  setApiError,
  setEditedPostToList,
  setPostsListData,
} from "../../action-creators";
import {
  addNewPost,
  deleteSinglePost,
  fetchPostsList,
  editCurrentPost,
} from "../request/posts";

export function* handleFetchPostsList(action) {
  try {
    const response = yield call(fetchPostsList);
    console.log("handler response -> ", response);
    yield put(setPostsListData(response.data));
  } catch (e) {
    console.log("handler error -> ", e);
  }
}

export function* handleAddNewPost(action) {
  try {
    let response = yield call(addNewPost, action.payload);
    console.log("handler response -> ", response);
    yield put(addResponseToPostsListData(response.data));
    // response = yield call(fetchPostsList);
    // console.log("handler response -> ", response);
    // yield put(setPostsListData(response.data));
  } catch (e) {
    console.log("handler error -> ", e);
    yield put(setApiError(e.message));
  }
}

export function* handleDeleteSinglePost(action) {
  try {
    let response = yield call(deleteSinglePost, action.payload);
    console.log("handler response -> ", response);
    yield put(deletePostFromListData(action.payload));
    // response = yield call(fetchPostsList);
    // console.log("handler response -> ", response);
    // yield put(setPostsListData(response.data));
  } catch (e) {
    console.log("handler error -> ", e);
  }
}

export function* handleEditCurrentPost(action) {
  try {
    let response = yield call(editCurrentPost, action.payload);
    console.log("handler response -> ", response);
    yield put(setEditedPostToList(response.data));
  } catch (e) {
    console.log("handler error -> ", e);
  }
}
