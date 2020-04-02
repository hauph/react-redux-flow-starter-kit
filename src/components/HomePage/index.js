// @flow
import * as React from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import Actions from '../../redux/actions';
import { bindActionCreators } from 'redux';

//import type {State} as TypeState from '../../types';
import type {Action} from '../../types';
import type {AppState, AppData} from '../../types/app_data'

type Props = {    
    app_data: AppData,
    actions: any,
};

type State = {  
    _welcome_msg: string,
};

@connect((state) => {
    return {
        app_data: state.app_data
    }
}, (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
})
export default class HomePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props) 

        this.state = {
            _welcome_msg: 'Hello World'
        }
    }

    clickEvt() {
        const {actions, app_data} = this.props;
        const {_welcome_msg} = this.state;
        
        this.setState({_welcome_msg: app_data.welcome_msg == _welcome_msg ? 'My name is How' : app_data.welcome_msg})

        actions.changeWelcomeMsg(app_data.welcome_msg == _welcome_msg ? 'My name is How' : _welcome_msg);
        
        document.getElementsByTagName('button')[0].style.display = 'none';
    }

    render() {
        const {app_data} = this.props;
        return (
            <div className="page homepage">
                <div className="page-content">
                    <h2>{app_data.welcome_msg}</h2>
                    <button onClick={this.clickEvt.bind(this)}>Change</button>
                </div>
            </div>
        )
    }
}