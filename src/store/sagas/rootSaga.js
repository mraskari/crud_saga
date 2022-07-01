import { takeLatest } from "redux-saga/effects";
import {
  ADD_NEW_POST,
  DELETE_SINGLE_POST,
  EDIT_CURRENT_POST,
  FETCH_POSTS_LIST,
} from "../action-types";
import {
  handleAddNewPost,
  handleDeleteSinglePost,
  handleEditCurrentPost,
  handleFetchPostsList,
} from "./handlers/posts";

export function* watcherSaga() {
  yield takeLatest(ADD_NEW_POST, handleAddNewPost);
  yield takeLatest(FETCH_POSTS_LIST, handleFetchPostsList);
  yield takeLatest(DELETE_SINGLE_POST, handleDeleteSinglePost);
  yield takeLatest(EDIT_CURRENT_POST, handleEditCurrentPost);
}
