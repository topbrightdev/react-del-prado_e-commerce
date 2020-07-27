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
      return {
        ...state,
        categoryTree: action.categoryTree,
      };

    case FETCH_CATEGORYTREE:
      if (
        state.categoryTree.findIndex((category) => {
          if (category.id !== -1) {
            const singleCategory = state.categoryTree.reduce((categoryTree) => {
              return categoryTree;
            }, []);
            return {
              ...state,
              category: singleCategory,
            };
          } else return null;
        })
      );
      break;

    default:
      return state;
  }
};
export default categoryTreeReducer;
