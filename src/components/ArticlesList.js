import React from "react";
import Article from "./Article";
import { connect } from 'react-redux';

const ArticlesList = ({articles}) => {
    return !articles.length ?
        <p>Постов пока нет</p> :
        <div>
            <ul>{articles.map(article => <Article key={article.id} article={article}/>)}</ul>
        </div>
}

const mapStateToProps = state => {
    return ({ articles: state.articles.articles});
};

export default connect(mapStateToProps, null)(ArticlesList)