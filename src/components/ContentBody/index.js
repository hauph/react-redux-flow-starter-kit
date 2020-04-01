// @flow
import * as React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import './styles.scss';

import HomePage from '../HomePage';
import AnotherPage from '../AnotherPage';

type Props = {    

};

type State = {  

};

export default class ContentBody extends React.Component<Props, State> {
    render() {
        return (
            <div className="content__body">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/another-page" component={AnotherPage} />
            </div>
        )
    }
}