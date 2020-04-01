// @flow
import * as React from 'react';
import {
  NavLink,
} from "react-router-dom";

import './styles.scss';

type Props = {    

};

type State = {  

};

export default class SidebarContent extends React.Component<Props, State> {

    

    render () {
        return (
            <div className="sidebar-inner">
                <div className="sidebar__header">Menu</div>
                <div className="sidebar__content">
                    <NavLink exact to="/">Home</NavLink>
                    <div style={{"margin":"8px 0px", "height": "1px", "backgroundColor": "rgb(117, 117, 117)"}}></div>
                    <NavLink exact to="/another-page">Another Page</NavLink>
                </div>
            </div>
        )
    }
}