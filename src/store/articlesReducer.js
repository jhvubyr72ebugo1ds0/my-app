import {ADD_ARTICLE, REMOVE_ARTICLE} from "./types";

const defaultState = {
    articles: [],
};

export const articlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat([action.payload])}
        case REMOVE_ARTICLE:
            return { ...state, articles: state.articles.filter(article => article.id !== action.payload) }
        default: return state;
    }
}