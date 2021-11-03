import React from "react";
import { connect } from 'react-redux';
import { removeArticle } from "../store/actions";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.removeArticle(this.props.article.id);
    }

    render() {
        let article = this.props.article;
        return (
            <div className='post'>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = { removeArticle }

export default connect(null, mapDispatchToProps)(Article);