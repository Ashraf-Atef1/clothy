import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILED,
} from "./category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

function* loadCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(FETCH_CATEGORIES_SUCCESS(categories));
  } catch ({message}) {
    yield put(FETCH_CATEGORIES_FAILED(message));
  }
}
function* onFetchCategories() {
  yield takeLatest('category/FETCH_CATEGORIES_START', loadCategoriesAsync);
}
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
