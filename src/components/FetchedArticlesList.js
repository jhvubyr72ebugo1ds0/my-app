import React from "react";

export default class FetchedArticlesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        const json = await response.json();
        this.setState({articles: json});
    }

    render() {
        if (!this.state.articles.length) {
            return (
            <div>
                <p>Постов нет/Нюхай бебру</p>
                <button onClick={this.handleClick}>Загрузить</button>
            </div>)
        } else {
            return <ol>{this.state.articles.map(article => <li key={article.id}>{article.title}</li>)}</ol>
        }
    }
}