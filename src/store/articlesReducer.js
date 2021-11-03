import {ADD_ARTICLE, FETCH_ARTICLE, REMOVE_ARTICLE} from "./types";

const defaultState = {
    articles: [],
    fetchedArticles: [],
};

export const articlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat([action.payload])}
        case REMOVE_ARTICLE:
            return { ...state, articles: state.articles.filter(article => article.id !== action.payload) }
        case FETCH_ARTICLE:
            return { ...state, fetchedArticles: state.fetchedArticles.concat(action.payload) }
        default: return state;
    }
}