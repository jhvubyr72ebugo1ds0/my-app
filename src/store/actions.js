import {ADD_ARTICLE, FETCH_ARTICLE, REMOVE_ARTICLE} from "./types";

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        payload: article,
    }
}

export function removeArticle(articleId) {
    return {
        type: REMOVE_ARTICLE,
        payload: articleId,
    }
}

export function fetchArticles() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const json = await response.json();
        dispatch({ type: FETCH_ARTICLE, payload: json })
    }
}