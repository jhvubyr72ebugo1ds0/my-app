import React from "react";
import Article from "./Article";
import {connect} from 'react-redux';

const ArticlesList = ({articles}) => {
    if (!articles.length) {
        return <p>Постов пока нет/Нюхай бебру</p>
    } else {
        return <div>
            <ul>{articles.map(article => <Article key={article.id} article={article}/>)}</ul>
        </div>
    }
}

const mapStateToProps = state => {
    return ({ articles: state.articles.articles});
};

export default connect(mapStateToProps, null)(ArticlesList)