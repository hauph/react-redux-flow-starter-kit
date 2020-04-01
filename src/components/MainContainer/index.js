// @flow
import * as React from 'react';
import Sidebar from "react-sidebar";
import SidebarContent from '../SidebarContent';
import ContentBody from '../ContentBody';
import './styles.scss';

type Props = {    

};

type State = {  

};

const mql = window.matchMedia(`(min-width: 768px)`);

export default class MainContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        }

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    
    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        const {sidebarDocked, sidebarOpen} = this.state;

        const sidebarStyles = {
            sidebar: {
                minWidth: '200px',
                backgroundColor: "#fff"
            }
        }

        return (
            <Sidebar
                styles={sidebarStyles}
                sidebarClassName="sidebar-wrapper"
                sidebar={<SidebarContent />}
                contentClassName="content-wrapper"
                docked={sidebarDocked}
                open={sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
            >   
                <div className="content-inner">
                    <div className="heading">
                        <h1><span className="heading__burger" onClick={this.onSetSidebarOpen}>=</span>Demo App</h1>
                    </div>

                    <ContentBody />
                </div>
            </Sidebar>
        )
    }
}