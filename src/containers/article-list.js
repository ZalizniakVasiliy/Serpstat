import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectArticle} from '../actions/index';
import {bindActionCreators} from 'redux';

class ArticleList extends Component {

    findArticle() {
        console.log('findArticle', this.searchInput.value);
    }

    renderList() {
        return this.props.articles.map(article => {
            return (
                <li
                    key={article.title}
                    onClick={() => this.props.selectArticle(article)}
                    className="list-group-item"
                >
                    {article.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref={(input) => {
                        this.searchInput = input
                    }}/>
                    <button onClick={this.findArticle.bind(this)}>Find an article</button>
                </div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectArticle: selectArticle}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);