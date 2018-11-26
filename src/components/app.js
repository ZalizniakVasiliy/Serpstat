import React, {Component} from 'react';
import ArticleList from '../containers/article-list';
import ArticleDetail from "../containers/article-detail";

export default class App extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <ArticleDetail/>
            </div>
        );
    }
}
