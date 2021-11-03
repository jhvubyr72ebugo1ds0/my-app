import React from "react";
import { connect } from 'react-redux';
import { addArticle } from "../store/actions";

class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            title: '',
            body: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if (e.target.id === 'title') {
            this.setState({title: e.target.value})
        }
        if (e.target.id === 'body') {
            this.setState({body: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.body)
            return null;

        this.props.addArticle({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
        });

        this.setState({id: this.state.id + 1, title: '', body: ''})
    }
    render() {
        return (
            <form className='Add-Article'
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    id='title'
                    placeholder='Title...'
                    value={this.state.title}
                />
                <input
                    type='text'
                    id='body'
                    placeholder='Body...'
                    value={this.state.body}
                />
                <button type='submit'>Add article</button>
            </form>
        )
    }
}

const mapDispatchToProps = { addArticle }

export default connect(null, mapDispatchToProps)(ArticleForm);