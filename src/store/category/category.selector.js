import { createSelector } from "reselect";
const categoriesSelector = state => state.category.categories;

export const categorySelector = createSelector(
    [categoriesSelector],
    (categories) => categories.
    reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)

export const categoryIsLoadingSelector = state => state.category.isLoading;
