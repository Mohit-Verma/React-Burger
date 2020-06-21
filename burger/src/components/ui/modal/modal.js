import React, { Component } from 'react';
import { backDrop as BackDrop } from './../backdrop/backdrop';
import classes from './modal.module.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        const flag = (nextProps.show !== this.props.show) ||
                     (nextProps.children !== this.props.children);
        return flag;
    }
    
    render() {
        const showModal = this.props.show;
        return (
            <React.Fragment>
                <BackDrop show={showModal} clicked={this.props.closeModal}/>
                <div
                    className={classes.modal}
                    style={{
                        transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: showModal ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
export default Modal;