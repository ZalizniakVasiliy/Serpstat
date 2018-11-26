import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArticleDetail extends Component {
    render() {
        if (!this.props.article) {
            return <div>Select an article to see its content.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.article.title}</div>
                <div>Content: {this.props.article.content}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        article: state.activeArticle
    }
}

export default connect(mapStateToProps)(ArticleDetail);