import React, { Component } from 'react';
import classes from './layout.module.css';
import { toolbar as Toolbar } from '../navigation/toolbar/toolbar';
import { sideDrawer as SideDrawer } from '../sidedrawer/sideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    toggleSideDrawerVisibiliyt = () => {
        const showSideDrawer = !this.state.showSideDrawer;
        this.setState({ showSideDrawer });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar visibilityHandler={this.toggleSideDrawerVisibiliyt}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    visibilityHandler={this.toggleSideDrawerVisibiliyt}/>
                <main className={classes.content}>
                    { this.props.children }
                </main>
            </React.Fragment>
        );
    }

}

export default Layout;