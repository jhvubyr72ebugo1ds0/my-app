import {ADD_ARTICLE, FETCH_ARTICLES, REMOVE_ARTICLE} from "./types";

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
        case FETCH_ARTICLES:
            return { ...state, fetchedArticles: action.payload }
        default: return state;
    }
}