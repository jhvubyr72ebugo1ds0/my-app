import React from "react";
import {connect} from "react-redux";
import {fetchArticles} from "../store/actions";

const FetchedArticlesList = ({articles, fetchArticles}) => {
    if (!articles.length) {
        return <div>
            <p>Постов пока нет/Нюхай бебру</p>
            <button onClick={fetchArticles}>Загрузить</button>
        </div>
    } else {
        return <ol>
            {articles.map(article => <li key={article.id}>{article.title}</li>)}
        </ol>
    }
}

const mapStateToProps = state => {
    return ({ articles: state.articles.fetchedArticles});
};

const mapDispatchToProps = {
    fetchArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedArticlesList)