import {ADD_ARTICLE, FETCH_ARTICLES, REMOVE_ARTICLE} from "./types";

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        payload: article,
    }
}

export function removeArticle(articleId) {
    return {
        type: REMOVE_ARTICLE,
        payload: articleId
    }
}

export function fetchArticles() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(json => dispatch({type: FETCH_ARTICLES, payload: json}))
    }
}