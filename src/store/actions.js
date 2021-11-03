import {ADD_ARTICLE, REMOVE_ARTICLE} from "./types";

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