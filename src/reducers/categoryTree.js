import {
  FETCH_CATEGORYTREE,
  RECEIVE_CATEGORYTREE,
} from "../constants/ActionTypes";

const initialState = {
  categoryTree: [],
  category: [],
};

const categoryTreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORYTREE:
      console.log(action);
      return {
        ...state,
        categoryTree: action.categoryTree,
      };
    case FETCH_CATEGORYTREE:
      console.log(action);
      if (
        state.categoryTree.findIndex(category => {
          console.log(category);
          if (category.id !== -1) {
            const singleCategory = state.categoryTree.reduce(
              (itemAcc, categoryTree) => {
                return categoryTree;
              },
              []
            );
            return {
              ...state,
              category: singleCategory,
            };
          }
        })
      );
    default:
      return state;
  }
};
export default categoryTreeReducer;
