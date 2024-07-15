import { all, call, put, takeLatest } from "redux-saga/effects";
import { categoryTypes } from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

function* loadCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments());
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error.message));
  }
}
function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, loadCategoriesAsync);
}
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
