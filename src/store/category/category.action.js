import { createAction } from "../../utils/actions/createAction";
import { categoryTypes } from "./category.types";

export const fetchCategoriesStart = () =>
  createAction(categoryTypes.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) =>
  createAction(categoryTypes.FETCH_CATEGORIES_SUCCESS, categories);
export const fetchCategoriesFailed = (error) =>
  createAction(categoryTypes.FETCH_CATEGORIES_FAILED, error);
