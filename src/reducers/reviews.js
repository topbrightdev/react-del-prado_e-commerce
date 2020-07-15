import {
    POST_REVIEW_DONE,
    RECEIVE_REVIEWS,
    FETCHED_REVIEW_DONE
} from "../constants/ActionTypes";

const initialState = {
    reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REVIEW_DONE:
            alert("Your review has been posted succesfully !")
            return state

        case RECEIVE_REVIEWS:
            if (action.reviews.length > 0) {
                return {
                    ...state,
                    reviews: action.reviews
                }
            }
        case FETCHED_REVIEW_DONE:
            if (action.reviews.length > 0) {
                return {
                    ...state,
                    reviews: action.reviews
                }
            }


        default:
            return state;
    }
};
export default reviewsReducer;
